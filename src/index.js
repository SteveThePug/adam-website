import * as THREE from "three";
import "./adam";
import * as SCENE from "./multipleScenes";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { AsciiEffect } from "three/examples/jsm/effects/AsciiEffect";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

const gltfLoader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("three/examples/jsm/libs/draco/");
gltfLoader.setDRACOLoader(dracoLoader);
gltfLoader.crossOrigin = false;
const textureLoader = new THREE.TextureLoader();

//AsciiEffect canvas
const asciiContainer = document.getElementById("asciiContainer");
const asciiRenderer = new THREE.WebGLRenderer();
const effect = new AsciiEffect(asciiRenderer, " .-*Adam", {invert: true });
effect.domElement.style.color = "orange";
effect.domElement.style.pointerEvents = "none";
asciiContainer.appendChild(effect.domElement);
effect.setSize(asciiContainer.offsetWidth, asciiContainer.clientHeight);

const resizeAsciiToContainerSize = () => {
  asciiScene.camera.aspect =
    asciiContainer.clientWidth / asciiContainer.clientHeight;
  effect.setSize(asciiContainer.clientWidth, asciiContainer.clientHeight);
};

window.addEventListener("resize", resizeAsciiToContainerSize, false);

//Creates generic scene with no meshes, a light and a camera

const setupLaptopSceneInfo = (elem) => {
  const sceneInfo = SCENE.makeSceneInfo(elem);

  gltfLoader.load("/img/laptop.glb", function (gltf) {
    const laptopMesh = gltf.scene;
    laptopMesh.scale.set(4, 4, 4);
    laptopMesh.translateY(-1);
    sceneInfo.scene.add(gltf.scene);

    const controls = new TrackballControls(sceneInfo.camera, elem);
    sceneInfo.animate = (time) => {
      laptopMesh.rotation.y = -time;
    };
  });

  return sceneInfo;
};
//Creates a scene and adds meshs
const setupPillSceneInfo = (elem) => {
  const sceneInfo = SCENE.makeSceneInfo(elem);
  //Pill Mesh
  const pillMesh = new THREE.Mesh(
    new THREE.TorusGeometry(0.8, 0.4),
    new THREE.MeshPhongMaterial({ flatShading: true })
  );
  sceneInfo.scene.add(pillMesh);

  const light = new THREE.DirectionalLight(0xffffff, 0.2);
  light.position.set(1, 1, 1);
  sceneInfo.scene.add(light);

  sceneInfo.animate = (time) => {
    pillMesh.position.x = Math.cos(time);
    pillMesh.rotation.y = Math.sin(time);
  };
  return sceneInfo;
};
//Creates adam scene
const setupAdamSceneInfo = (elem) => {
  function cool(x, radius, noSeg) {
    let c1 = (-2 * radius) / (noSeg * noSeg);
    return c1 * ((x * x) / 2 - x * noSeg);
  }
  function createSegmentedCircleGeometry(noSeg, radius, noSegSegs) {
    let geoms = [];
    for (let i = 0; i < noSeg; i++) {
      geoms.push(
        new THREE.RingGeometry(
          cool(i, radius, noSeg),
          cool(i + 1, radius, noSeg),
          noSegSegs
        )
      );
    }
    return geoms;
  }
  function meshGeoms(geoms, material) {
    let meshs = [];
    for (const geom of geoms) {
      meshs.push(new THREE.Mesh(geom, material));
    }
    return meshs;
  }
  function addMeshs(scene, meshs) {
    for (const mesh of meshs) {
      scene.add(mesh);
    }
  }
  const sceneInfo = SCENE.makeSceneInfo(elem);

  const geometry = createSegmentedCircleGeometry(10, 1, 40);
  const img = textureLoader.load(`img/preview.jpg`);
  const material = new THREE.MeshBasicMaterial({ map: img });
  const meshs = meshGeoms(geometry, material);

  sceneInfo.animate = (time) => {
    for (const mesh of meshs) {
      mesh.position.z = (Math.cos(time / 2) * mesh.id) / 50;
    }
  };

  addMeshs(sceneInfo.scene, meshs);
  sceneInfo.meshs = meshs;
  return sceneInfo;
};

const animate = (time) => {
  time *= 0.001;

  for (const sceneInfo of sceneInfos) {
    if (sceneInfo.animate) sceneInfo.animate(time);
    SCENE.renderSceneInfo(sceneInfo);
  }

  asciiScene.animate(time);
  effect.render(asciiScene.scene, asciiScene.camera);

  requestAnimationFrame(animate);
};

const sceneInfos = [];
sceneInfos.push(setupLaptopSceneInfo(document.getElementById("laptop")));

const asciiScene = setupPillSceneInfo(asciiContainer);

animate();

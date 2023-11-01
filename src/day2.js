import * as SCENE from "./multipleScenes";
import * as THREE from "three";

//We want to make a grid, then populate it with spans that we can render to
const main = document.getElementsByTagName("main")[0];

//Initialisation of grid
var rows = 2,
  cols = 2,
  n = rows * cols;
const grid = document.createElement("div");
grid.style.display = "grid";
grid.style.gridTemplateRows = `repeat(${rows},1fr)`;
grid.style.gridTemplateColumns = `repeat(${cols},1fr)`;
main.appendChild(grid);
grid.style.width = "100%";
grid.style.height = "100%";

//Initialisation of SceneInfos
const sceneInfos = [];
for (let i = 0; i < n; i++) {
  const span = document.createElement("span");
  grid.appendChild(span);
  const sceneInfo = SCENE.makeSceneInfo(span);
  sceneInfos.push(sceneInfo);
  const scene = sceneInfo.scene;

  //Each binomial tree has 2^i (m) nodes
  const nodes = [];
  let m = Math.pow(2, i);
  for (let j = 0; j < m; j++) {
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 1),
      new THREE.MeshPhongMaterial({ flatShading: true })
    );
    mesh.position.x = -1 + j * (2 / m);
    mesh.position.y = 1 - j * (2 / m);
    nodes.push(mesh);
    scene.add(mesh);
  }

  sceneInfo.animate = (time) => {
    nodes.forEach((node, i) => {
      node.position.x = Math.cos(time) * (-1 + i * (2 / m));
      node.position.y = Math.sin(time) * (1 - i * (2 / m));
    });
  };
}

const animate = (time) => {
  time *= 0.001;

  for (const sceneInfo of sceneInfos) {
    if (sceneInfo.animate) sceneInfo.animate(time);
    SCENE.renderSceneInfo(sceneInfo);
  }

  requestAnimationFrame(animate);
};

animate();

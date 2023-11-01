import * as THREE from "three";

const renderer = new THREE.WebGLRenderer({
  alpha: true,
});
const body = document.getElementsByTagName("body")[0];
const canvas = renderer.domElement;
body.appendChild(canvas);

canvas.style.position = "absolute";
canvas.style.zIndex = 1;
canvas.style.left = 0;
canvas.style.top = 0;
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.margin = 0;
canvas.style.pointerEvents = "none";

const resizeRendererToDisplaySize = () => {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
};

window.addEventListener("resize", resizeRendererToDisplaySize, false);
resizeRendererToDisplaySize();

export const makeSceneInfo = (elem) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    elem.clientWidth / elem.clientHeight,
    0.01,
    5
  );
  const light = new THREE.DirectionalLight(0xffffff, 0.5);
  light.position.set(1, 0, 1);
  scene.add(light);

  camera.position.set(0, 0, 2);
  camera.lookAt(0, 0, 0);

  return { scene, camera, elem};
};

//Renders a SceneInfo to its given element
export const renderSceneInfo = (sceneInfo) => {
  const { scene, camera, elem } = sceneInfo;
  const { left, right, top, bottom, width, height } =
    elem.getBoundingClientRect();

  const isOffscreen =
    bottom < 0 ||
    top > renderer.domElement.clientHeight ||
    right < 0 ||
    left > renderer.domElement.clientWidth;

  if (isOffscreen) return;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  const positiveYUpBottom = renderer.domElement.clientHeight - bottom;
  renderer.setScissorTest(true);
  renderer.setScissor(left, positiveYUpBottom, width, height);
  renderer.setViewport(left, positiveYUpBottom, width, height);

  renderer.render(scene, camera);

  const transform = `translateY(${window.scrollY}px)`;
  renderer.domElement.style.transform = transform;
};

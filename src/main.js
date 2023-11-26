import * as BABYLON from '@babylonjs/core';

const canvas = document.getElementById('c');
const engine = new BABYLON.Engine(canvas);

console.log(canvas, engine);

// create Scene
const createScene = function () {
  // Init Babylon scene object
  const scene = new BABYLON.Scene(engine);

  scene.createDefaultCameraOrLight(true, false, true);

  // XR
  const xr = scene.createDefaultXRExperienceAsync();

  // const box = new BABYLON.MeshBuilder.CreateBox();

  // How to add a mesh
  // const sphere = new BABYLON.MeshBuilder.CreateSphere('name', { segments: 5 }, scene);

  // const box = new BABYLON.MeshBuilder.CreateBox('newBox', {
  //   width: 2,
  //   height: 0.5,
  //   depth: 0.5,
  //   faceColors: [new BABYLON.Color4(1, 0, 0, 1), BABYLON.Color3.Green()],
  // });

  // const ground = new BABYLON.MeshBuilder.CreateGround('', {
  //   height: 10,
  //   width: 10,
  //   subdivisions: 10,
  // });

  // Ground from heightmap
  const ground = new BABYLON.MeshBuilder.CreateGroundFromHeightMap('ground', './terrain/dmr_brno.png', {
    height: 10,
    width: 10,
    subdivisions: 300,
    maxHeight: 1,
  });

  // make the ground receive shadows

  ground;

  console.log(ground);

  const groundFromHMMaterial = new BABYLON.StandardMaterial('ground');
  groundFromHMMaterial.roughness = 1;
  groundFromHMMaterial.diffuseTexture = new BABYLON.Texture('./terrain/dmr_brno_colored.png');

  // ground.material.wireframe = true;

  ground.material = groundFromHMMaterial;

  return scene;
};

const scene = createScene();

engine.runRenderLoop(function () {
  scene.render();
});

// Responsivness
window.addEventListener('resize', function () {
  engine.resize();
});

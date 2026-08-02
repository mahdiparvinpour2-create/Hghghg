// ===============================
// MovieVerse 3D Engine
// Version 1.0
// ===============================

// Canvas
const container = document.getElementById("bg3d");

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
60,
window.innerWidth / window.innerHeight,
0.1,
2000
);

camera.position.set(0,0,45);

// Renderer
const renderer = new THREE.WebGLRenderer({
alpha:true,
antialias:true
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

renderer.setPixelRatio(
Math.min(window.devicePixelRatio,2)
);

container.appendChild(
renderer.domElement
);

// Ambient Light
const ambient =
new THREE.AmbientLight(
0xffffff,
1.2
);

scene.add(ambient);

// Main Light
const light =
new THREE.DirectionalLight(
0xffffff,
3
);

light.position.set(
15,
20,
10
);

scene.add(light);

// Blue Light
const blue =
new THREE.PointLight(
0x00aaff,
25,
300
);

blue.position.set(
-20,
10,
20
);

scene.add(blue);

// Red Light
const red =
new THREE.PointLight(
0xff3333,
25,
300
);

red.position.set(
20,
-10,
20
);

scene.add(red);

// Purple Light
const purple =
new THREE.PointLight(
0xaa00ff,
18,
300
);

purple.position.set(
0,
15,
-20
);

scene.add(purple);

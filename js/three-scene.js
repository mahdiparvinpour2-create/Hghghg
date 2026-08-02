// ===============================
// MovieVerse 3D Scene
// Part 1
// ===============================

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x020202);

// Camera
const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
);

camera.position.z = 40;

// Renderer
const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// Attach renderer
const bg = document.getElementById("bg3d");
if (bg) {
    bg.appendChild(renderer.domElement);
}

// Ambient Light
const ambient = new THREE.AmbientLight(
    0xffffff,
    1
);

scene.add(ambient);

// Directional Light
const light = new THREE.DirectionalLight(
    0xffffff,
    3
);

light.position.set(15,20,10);

scene.add(light);

// Point Lights
const blueLight = new THREE.PointLight(
    0x00aaff,
    30,
    400
);

blueLight.position.set(
    -20,
    10,
    20
);

scene.add(blueLight);

const redLight = new THREE.PointLight(
    0xff2222,
    20,
    400
);

redLight.position.set(
    20,
    -10,
    20
);

scene.add(redLight);

// Geometry
const particlesGeometry =
new THREE.BufferGeometry();

const particleCount = 2500;

const positions =
new Float32Array(
particleCount * 3
);

for(let i=0;i<particleCount*3;i++){

positions[i]=(Math.random()-0.5)*300;

}

particlesGeometry.setAttribute(
'position',
new THREE.BufferAttribute(
positions,
3
)
);

// Material
const particlesMaterial =
new THREE.PointsMaterial({

color:0xffffff,

size:.25,

transparent:true,

opacity:.8

});

// Points
const stars=
new THREE.Points(
particlesGeometry,
particlesMaterial
);

scene.add(stars);

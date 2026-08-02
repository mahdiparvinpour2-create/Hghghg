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
// ===============================
// Star Field
// ===============================

const starGeometry = new THREE.BufferGeometry();

const starCount = 8000;

const starVertices = [];

for(let i=0;i<starCount;i++){

starVertices.push(
(Math.random()-0.5)*800
);

starVertices.push(
(Math.random()-0.5)*800
);

starVertices.push(
(Math.random()-0.5)*800
);

}

starGeometry.setAttribute(

'position',

new THREE.Float32BufferAttribute(

starVertices,

3

)

);

const starMaterial =

new THREE.PointsMaterial({

color:0xffffff,

size:0.6,

transparent:true,

opacity:0.9

});

const stars =

new THREE.Points(

starGeometry,

starMaterial

);

scene.add(stars);

// ===============================
// Floating Planet
// ===============================

const planet =

new THREE.Mesh(

new THREE.IcosahedronGeometry(

6,

20

),

new THREE.MeshStandardMaterial({

color:0xff3131,

metalness:1,

roughness:.15

})

);

planet.position.set(

0,

0,

0

);

scene.add(planet);

// ===============================
// Mouse Movement
// ===============================

const mouse = {
    x:0,
    y:0
};

window.addEventListener("mousemove",(e)=>{

    mouse.x=(e.clientX/window.innerWidth)-0.5;

    mouse.y=(e.clientY/window.innerHeight)-0.5;

});

// ===============================
// Clock
// ===============================

const clock = new THREE.Clock();

// ===============================
// Animation
// ===============================

function animate(){

requestAnimationFrame(animate);

const t = clock.getElapsedTime();

planet.rotation.x += 0.002;
planet.rotation.y += 0.004;

planet.position.y =
Math.sin(t)*1.2;

stars.rotation.y += 0.00015;
stars.rotation.x += 0.00005;

camera.position.x +=
(mouse.x*10-camera.position.x)*0.03;

camera.position.y +=
(-mouse.y*8-camera.position.y)*0.03;

camera.lookAt(scene.position);

renderer.render(scene,camera);

}

animate();

// ===============================
// Resize
// ===============================

window.addEventListener("resize",()=>{

camera.aspect=
window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(
window.innerWidth,
window.innerHeight
);

});

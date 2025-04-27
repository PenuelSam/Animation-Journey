import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Pane } from "tweakpane";




// initialize the geometry
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const uv2 = new THREE.BufferAttribute(geometry.attributes.uv.array, 2)
// geometry.setAttribute('uv2', uv2)

// const torusKnotGeometry = new THREE.TorusKnotGeometry(0.5, 0.15, 100, 16);
// const uv2TorusKontGeometry = new THREE.BufferAttribute(torusKnotGeometry.attributes.uv.array, 2)
// geometry.setAttribute('uv2', uv2TorusKontGeometry)

// const planeGeometry = new THREE.PlaneGeometry(1, 1);
// const uv2PlaneGeometry = new THREE.BufferAttribute(planeGeometry.attributes.uv.array, 2)
// geometry.setAttribute('uv2', uv2PlaneGeometry)

// const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32)
// const uv2SphereGeometry = new THREE.BufferAttribute(sphereGeometry.attributes.uv.array, 2)
// geometry.setAttribute('uv2', uv2SphereGeometry)

// const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32)
// const uv2CylinderGeometry = new THREE.BufferAttribute(cylinderGeometry.attributes.uv.array, 2)
// geometry.setAttribute('uv2', uv2CylinderGeometry)

//initialize the texture
// const grassAlbedo = textureLoader.load('/textures/whispy-grass-meadow-bl/wispy-grass-meadow_albedo.png')
// const grassAo = textureLoader.load('/textures/whispy-grass-meadow-bl/wispy-grass-meadow_ao.png')
// const grassHeight = textureLoader.load('/textures/whispy-grass-meadow-bl/wispy-grass-meadow_height.png')
// const grassMetallic = textureLoader.load('/textures/whispy-grass-meadow-bl/wispy-grass-meadow_metallic.png')
// const grassNormalOgl = textureLoader.load('/textures/whispy-grass-meadow-bl/wispy-grass-meadow_normal-ogl.png')
// const grassRoughness = textureLoader.load('/textures/whispy-grass-meadow-bl/wispy-grass-meadow_roughness.png')

///textures/whispy-grass-meadow-bl/wispy-grass-meadow_albedo.png
///textures/uvMappingTest.jpg

// material.map = grassAlbedo

// material.roughnessMap = grassRoughness
// material.roughness = 0.1

// material.metalnessMap = grassMetallic
// material.metalness = 1

// material.normalMap = grassNormalOgl

// material.displacementMap = grassHeight
// material.displacementScale = 0.1

// material.aoMap = grassAo


// const params = { aoMapIntensity: material.aoMapIntensity };

// pane.addBlade({
//   view: 'slider',
//   label: 'aoMapIntensity',
//   min: 0,
//   max: 1,
//   value: params.aoMapIntensity,
// }).on('change', (ev) => {
//   material.aoMapIntensity = ev.value;
// });


// initialize the mesh
// const cube = new THREE.Mesh(geometry, material);

// const knot = new THREE.Mesh(torusKnotGeometry, material);
// knot.position.x = 1.5;

// const plane = new THREE.Mesh(planeGeometry, material);
// plane.position.x = -1.5;


// const sphere = new THREE.Mesh()
// sphere.geometry = sphereGeometry
// sphere.material = material
// sphere.position.y = 1.5

// const cylinder = new THREE.Mesh()
// cylinder.geometry = cylinderGeometry
// cylinder.material = material
// cylinder.position.y = -1.5


// // add the mesh to the scene
// // scene.add(cube);
// // scene.add(knot);
// // scene.add(plane);
// group.add(sphere, cylinder, cube, knot, plane);
// scene.add(group);


// // initialize the light
// const light = new THREE.AmbientLight(0xffffff, 0.4);
// scene.add(light);

// const pointLight = new THREE.PointLight(0xffffff, 200);
// pointLight.position.set(5, 5, 5);
// scene.add(pointLight);

// initialize the pane
const pane = new Pane();

// initialize the scene
const scene = new THREE.Scene();


// initialize the material
const material = new THREE.MeshStandardMaterial();

//initialize a group
const group = new THREE.Group();

// add textureLoader
const textureLoader = new THREE.TextureLoader();
const cubeTextureLoader = new THREE.CubeTextureLoader()
cubeTextureLoader.setPath('/textures/cubeMap/')

// adding textures
const sunTexture = textureLoader.load("/textures/2k_sun.jpg");
sunTexture.colorSpace = THREE.SRGBColorSpace  
const mercuryTexture = textureLoader.load("/textures/2k_mercury.jpg");
mercuryTexture.colorSpace = THREE.SRGBColorSpace
const venusTexture = textureLoader.load("/textures/2k_venus_surface.jpg");
venusTexture.colorSpace = THREE.SRGBColorSpace
const earthTexture = textureLoader.load("/textures/2k_earth_daymap.jpg");
earthTexture.colorSpace = THREE.SRGBColorSpace
const marsTexture = textureLoader.load("/textures/2k_mars.jpg");
marsTexture.colorSpace = THREE.SRGBColorSpace
const moonTexture = textureLoader.load("/textures/2k_moon.jpg");
moonTexture.colorSpace = THREE.SRGBColorSpace

const backgroundCubemap = cubeTextureLoader
.load( [
  'px.png',
  'nx.png',
  'py.png',
  'ny.png',
  'pz.png',
  'nz.png'
] );

scene.background = backgroundCubemap

// add materials
const mercuryMaterial = new THREE.MeshStandardMaterial({
  map: mercuryTexture,
});
const venusMaterial = new THREE.MeshStandardMaterial({
  map: venusTexture,
});
const earthMaterial = new THREE.MeshStandardMaterial({
  map: earthTexture,
});
const marsMaterial = new THREE.MeshStandardMaterial({
  map: marsTexture,
});
const moonMaterial = new THREE.MeshStandardMaterial({
  map: moonTexture,
});


const sphereGeometry = new THREE.SphereGeometry(1, 32, 32)
const sunMaterial = new THREE.MeshBasicMaterial({
  map: sunTexture
})


const sun = new THREE.Mesh(sphereGeometry, sunMaterial)

sun.scale.setScalar(5)
scene.add(sun)

const planets = [
  {
    name: "Mercury",
    radius: 0.5,
    distance: 10,
    speed: 0.01,
    material: mercuryMaterial,
    moons: [],
  },
  {
    name: "Venus",
    radius: 0.8,
    distance: 15,
    speed: 0.007,
    material: venusMaterial,
    moons: [],
  },
  {
    name: "Earth",
    radius: 1,
    distance: 20,
    speed: 0.005,
    material: earthMaterial,
    moons: [
      {
        name: "Moon",
        radius: 0.3,
        distance: 3,
        speed: 0.015,
      },
    ],
  },
  {
    name: "Mars",
    radius: 0.7,
    distance: 25,
    speed: 0.003,
    material: marsMaterial,
    moons: [
      {
        name: "Phobos",
        radius: 0.1,
        distance: 2,
        speed: 0.02,
      },
      {
        name: "Deimos",
        radius: 0.2,
        distance: 3,
        speed: 0.015,
        color: 0xffffff,
      },
    ],
  },
];

const createPlanet = (planet) => {
    //create the mesh and add it to the scene
    const planetMesh = new THREE.Mesh(sphereGeometry, planet.material)

    planetMesh.scale.setScalar(planet.radius)
  planetMesh.position.x = planet.distance
  return planetMesh
}

const createMoon = (moon) => {
  //create the mesh and add it to the scene
  const moonMesh = new THREE.Mesh(sphereGeometry, moonMaterial)
  moonMesh.scale.setScalar(moon.radius)
  moonMesh.position.x = moon.distance
  return moonMesh
}

const planetMeshes = planets.map((planet) => {
  const planetMesh = createPlanet(planet)
  scene.add(planetMesh)

  planet.moons.forEach((moon) => {
    const moonMesh = createMoon(moon)
    planetMesh.add(moonMesh)
  })
  return planetMesh
  //add the moon to the planet
})

//add lights
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
// scene.add(ambientLight)

const pointLight = new THREE.PointLight(0xffffff, 300)
scene.add(pointLight)

// initialize the camera
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  400
);
camera.position.z = 10;
camera.position.y = 5

// initialize the renderer
const canvas = document.querySelector("canvas.threejs");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// instantiate the controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

//initialize a clock
const clock = new THREE.Clock()



// render the scene
const renderloop = () => {
  //const elapsedTime = clock.getElapsedTime();

  planetMeshes.forEach((planet, planetIndex) => {
    planet.rotation.y += planets[planetIndex].speed
    planet.position.x = Math.sin(planet.rotation.y) * planets[planetIndex].distance
    planet.position.z = Math.cos(planet.rotation.y) * planets[planetIndex].distance

    planet.children.forEach((moon, moonIndex) => {
      moon.rotation.y += planets[planetIndex].moons[moonIndex].speed
      moon.position.x = Math.sin(moon.rotation.y) * planets[planetIndex].moons[moonIndex].distance
      moon.position.z = Math.cos(moon.rotation.y) * planets[planetIndex].moons[moonIndex].distance
    })

  })


  // group.children.forEach((child) => {
  //     if(child instanceof THREE.Mesh){
  //       child.rotation.y += 0.01
  //     } 
  // })
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

renderloop();

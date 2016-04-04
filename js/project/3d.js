var container, scene, renderer, camera, light, clock, loader;
var WIDTH, HEIGHT, VIEW_ANGLE, ASPECT, NEAR, FAR;

container = document.querySelector('.viewport');

clock = new THREE.Clock();

WIDTH = window.innerWidth,
HEIGHT = window.innerHeight;

VIEW_ANGLE = 45,
ASPECT = WIDTH / HEIGHT,
NEAR = 1,
FAR = 10000;

scene = new THREE.Scene();

renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize(WIDTH, HEIGHT);
renderer.shadowMapEnabled = true;
renderer.shadowMapSoft = true;
renderer.shadowMapType = THREE.PCFShadowMap;
renderer.shadowMapAutoUpdate = true;

container.appendChild(renderer.domElement);

camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);

// camera.position.set(0, 100, 300);
// camera.position.set(0, 140, 200);
// camera.position.set(0, 200, 250);
camera.position.set(0, 50, 581);
// camera.rotation.x = -Math.PI / 12;
// camera.rotation.x = -Math.PI / 8;
scene.add(camera);

light = new THREE.DirectionalLight(0xffffff);

// light.position.set(0, 100, 60);
light.position.set(48, 38, 136);
light.castShadow = true;
light.shadowCameraLeft = -30;
light.shadowCameraTop = -30;
light.shadowCameraRight = 30;
light.shadowCameraBottom = 30;
light.shadowCameraNear = 1;
light.shadowCameraFar = 500;
light.shadowBias = -.0001
light.shadowMapWidth = light.shadowMapHeight = 612;
light.shadowDarkness = .7;

scene.add(light);

/* Remove to make darket */
var light2 = new THREE.AmbientLight( 0x202020 ); // soft white light
scene.add( light2 );

// const model = 'js/threejs/models/can.js';
// const model = 'js/threejs/models/lemonCan.js';
var model = 'js/threejs/models/can3.js';

loader = new THREE.JSONLoader();
var mesh;
var material2;
loader.load(model, function (geometry, materials) {
  // createMultiMaterialObject
  var material = new THREE.MeshLambertMaterial({
    // map: THREE.ImageUtils.loadTexture('js/threejs/models/textures/gtare2.jpg'),
    map: THREE.ImageUtils.loadTexture('js/threejs/models/textures/gamma_ray.png'),
    colorAmbient: [0.480000026226044, 0.480000026226044, 0.480000026226044],
    colorDiffuse: [0.480000026226044, 0.480000026226044, 0.480000026226044],
    colorSpecular: [0.8999999761581421, 0.8999999761581421, 0.8999999761581421]
  });

  material2 = new THREE.MeshLambertMaterial({
    map: THREE.ImageUtils.loadTexture('js/threejs/models/Metal.png'),
    colorAmbient: [0.480000026226044, 0.480000026226044, 0.480000026226044],
    colorDiffuse: [0.480000026226044, 0.480000026226044, 0.480000026226044],
    colorSpecular: [0.8999999761581421, 0.8999999761581421, 0.8999999761581421]
  });

  materials[1] = material;
  materials[0] = material2;

  var meshFaceMaterial = new THREE.MeshFaceMaterial( materials );
  // var material23 = new THREE.SceneUtils.createMultiMaterialObject(materials);
  //var mat = new THREE.MultiMaterial( materials );
//  console.log(mat);
  // mesh = THREE.SceneUtils.createMultiMaterialObject( geometry, materials );

  // mesh = new THREE.Mesh(
  //   geometry,
  //   material
  // );
  mesh = new THREE.Mesh(geometry,  meshFaceMaterial);
  mesh.receiveShadow = true;
  mesh.castShadow = true;
  // mesh.rotation.y = -Math.PI/5;
  // mesh.scale = 10;
  // mesh.scale.set( 100, 100, 100 );
  // mesh.scale.set( 100, 100, 100 );
  mesh.scale.set( 150, 150, 150 );
  scene.add(mesh);
  render();
});

function de2ra(degree) { return degree*(Math.PI/180); }

var i = 0;
function render() {
 var time = clock.getElapsedTime();

 mesh.rotation.y = de2ra(spin.x || 0)
 mesh.rotation.x = de2ra(spin.y / 3.5 || 0)

 // console.log(dragging, spin.y);
 //
 // if (!dragging) {
 //   if (spin.y > 0 ) {
 //     spin.y = ~~(spin.y - 0.5);
 //   } else if (spin.y < 0){
 //     spin.y = ~~(spin.y + 0.5);
 //   }
 // }


 renderer.render(scene, camera);
 requestAnimationFrame(render);
}

function changeTexture() {
  mesh.material = material2;
}

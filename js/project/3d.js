
var scene = {
		container: null,
		scene: null,
		renderer: null,
		camera: null,
		light: null,
		light2: null,
		clock: null,
		loader: null,
		WIDTH: null,
		HEIGHT: null,
		VIEW_ANGLE: null,
		ASPECT: null,
		NEAR: null,
		FAR: null,
		stats: null,
		mesh: null,

		init: function() {
			this.container = document.querySelector('.viewport');
			this.initialiseStats();
			this.setStageSizeVariables();
			this.initialiseStage();
			this.addCamera();
			this.addLights();
			this.addModel('js/threejs/models/textures/gamma_ray.png');
			this.addEvents();
		},

		initialiseStats: function () {
			this.stats = new Stats();
			this.stats.showPanel( 0 );
			this.stats.dom.style.top = 'auto';
			this.stats.dom.style.bottom = '0px';
			document.body.appendChild( this.stats.dom );
		},

		initialiseStage: function() {
			this.clock = new THREE.Clock();
			this.VIEW_ANGLE = 45,
			this.NEAR = 1,
			this.FAR = 10000;
			this.scene = new THREE.Scene();
			this.renderer = new THREE.WebGLRenderer({antialias: true});
			this.renderer.setSize(this.WIDTH, this.HEIGHT);
			this.renderer.shadowMapEnabled = true;
			this.renderer.shadowMapSoft = true;
			this.renderer.shadowMapType = THREE.PCFShadowMap;
			this.renderer.shadowMapAutoUpdate = true;
			this.container.appendChild(this.renderer.domElement);
		},

		addCamera: function() {
			this.camera = new THREE.PerspectiveCamera(this.VIEW_ANGLE, this.ASPECT, this.NEAR, this.FAR);
			this.camera.position.set(9, 40, 375);
			this.scene.add(this.camera);
		},

		addLights: function() {
			this.light = new THREE.DirectionalLight(0xffffff);
			this.light.position.set(48, 38, 136);
			this.light.castShadow = true;
			this.light.shadowCameraLeft = -30;
			this.light.shadowCameraTop = -30;
			this.light.shadowCameraRight = 30;
			this.light.shadowCameraBottom = 30;
			this.light.shadowCameraNear = 1;
			this.light.shadowCameraFar = 500;
			this.light.shadowBias = -.0001
			this.light.shadowMapWidth = this.light.shadowMapHeight = 612;
			this.light.shadowDarkness = .7;
			this.scene.add(this.light);

			this.light2 = new THREE.AmbientLight( 0x202020 ); // soft white light
			this.scene.add( this.light2 );
		},

		addModel: function(textureURL) {
			var model = 'js/threejs/models/can3.js';
			var material, material2, meshFaceMaterial;
			var _this = this;

			this.loader = new THREE.JSONLoader();
			this.loader.load(model, function (geometry, materials) {
			  material = new THREE.MeshLambertMaterial({
			    map: THREE.ImageUtils.loadTexture(textureURL),
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

			  meshFaceMaterial = new THREE.MeshFaceMaterial( materials );
			  _this.mesh = new THREE.Mesh(geometry,  meshFaceMaterial);
			  _this.mesh.receiveShadow = true;
			  _this.mesh.castShadow = true;
			  _this.mesh.scale.set( 150, 150, 150 );
			  _this.scene.add(_this.mesh);
				_this.container.classList.add('loaded') 
				_this.render();

			});
		},

		setStageSizeVariables: function () {
			this.WIDTH = this.container.getBoundingClientRect().width;
			this.HEIGHT = this.WIDTH * 1.2; // (this.WIDTH / 9) * 10; // this.container.getBoundingClientRect().height;
			this.ASPECT = this.WIDTH / this.HEIGHT;
		},

		resizeStage: function () {
			this.setStageSizeVariables();
			this.camera.aspect = this.ASPECT;
			this.camera.updateProjectionMatrix();
			this.renderer.setSize(this.WIDTH, this.HEIGHT);
		},

		addEvents: function () {
			var _this = this;

			window.addEventListener('resize', function(e) {
				_this.resizeStage();
			})
		},

		render: function() {
			var _this = this;
			this.stats.begin();

		  var time = this.clock.getElapsedTime();
		  this.mesh.rotation.y = this.mesh.rotation.y += ( spin.x - this.mesh.rotation.y ) * 0.1;
			this.mesh.rotation.x = this.mesh.rotation.x += ( spin.y - this.mesh.rotation.x ) * 0.1;

		  this.renderer.render(this.scene, this.camera);
		  this.stats.end();
		  requestAnimationFrame(function() {
				_this.render();
			});
		}

}

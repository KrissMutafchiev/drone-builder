var camera, controls, scene,light, renderer ,displayBlock ,container;
init();
animate();
function init(){

    displayBlock = $("#scene-display");

    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xffffff);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.z = 1000;
    camera.position.y = 400;

    var loader = new THREE.JSONLoader();

    controls = new THREE.OrbitControls(camera ,document,renderer.domElement );

   // controls.addEventListener('change', render);
    //controls.enabled = false;


    scene = new THREE.Scene();

    scene.fog = new THREE.Fog( 0xffffff, 1500, 2000 );
    scene.add( camera );


    var axisHelper = new THREE.AxisHelper(100);
    scene.add( axisHelper );


    // instantiate a loader
    var loaderPlane = new THREE.TextureLoader();
    // load a resource
    loaderPlane.load(
        // resource URL
        './texture/steal2.jpg',
        // Function when resource is loaded
        function ( texture ) {
            // do something with the texture
            var gg = new THREE.PlaneBufferGeometry( 16000, 16000 );
            var material = new THREE.MeshBasicMaterial( {map: texture} );
            var ground = new THREE.Mesh( gg, material );
            ground.rotation.x = - Math.PI / 2;
            ground.material.map.repeat.set( 64, 64 );
            ground.material.map.wrapS = THREE.RepeatWrapping;
            ground.material.map.wrapT = THREE.RepeatWrapping;
            ground.receiveShadow = true;
            scene.add( ground );
        }
    );

    var textureDrone = new THREE.ImageUtils.loadTexture('./drone-models/test_model/carbon.jpg');
    var particleMaterial = new THREE.MeshBasicMaterial({map: textureDrone});

    //var nMaterial =  new THREE.MeshBasicMaterial({map:particleMaterial});
	loader.load('./drone-models/test_model/HexaCopter.js' , function (geometry ) {
        var dron = new THREE.Mesh(geometry,particleMaterial);
        dron.position.x -= 0;
        dron.position.z += 0;
        dron.position.y += 100;
        scene.add(dron);

        document.addEventListener('keydown', function(e) {

            var speed = 4.0;
            if (e.keyCode == 83) {
                dron.position.z += speed; //back
            } else if (e.keyCode == 87) {
                dron.position.z -= speed; //next
            } else if (e.keyCode == 67) {
                dron.position.y -= speed;//down
            } else if (e.keyCode == 32) {
                dron.position.y += speed; //up
            } else if (e.keyCode == 68) {
                dron.position.x += speed; //right
            } else if (e.keyCode == 65) {
                dron.position.x -= speed; //left
            }
        },false);
    });

    //displayBlock.append(renderer.domElement);
}

function animate(){
    requestAnimationFrame( animate );
    render();
    controls.update();
}
function render(){
    renderer.clear();
    renderer.render( scene, camera );
}
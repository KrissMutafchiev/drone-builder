var camera, controls, scene,light, renderer ,displayBlock ,container;
init();
animate();
function init(){

    displayBlock = $("#scene-display");

    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xffffff);
    renderer.setSize(1500, 500);
    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.z = 1000;
    camera.position.y = 400;

    var loader = new THREE.JSONLoader();

    controls = new THREE.OrbitControls( camera );
    controls.addEventListener('change', render);
    //controls.enabled = false;

    scene = new THREE.Scene();

    scene.fog = new THREE.Fog( 0xffffff, 1000, 2000 );
    scene.add( camera );

    var axisHelper = new THREE.AxisHelper(100);
    scene.add( axisHelper );


    // instantiate a loader
    var loaderPlane = new THREE.TextureLoader();
    // load a resource
    loaderPlane.load(
        // resource URL
        './texture/grasslight-big.jpg',
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
	loader.load('./drone-models/test_model/trycopter.js' , function (geometry ) {
        var dron = new THREE.Mesh(geometry,particleMaterial);
        dron.position.x -= 0;
        dron.position.z += 0;
        dron.position.y += 100;
        scene.add(dron);

        document.addEventListener('keydown', function(e) {

            var speed = 4.0;
            if(e.keyCode == 37) {
                dron.position.z += speed;
            }else if(e.keyCode == 39){
                dron.position.z -= speed;
            }else if(e.keyCode == 40){
                dron.position.y -= speed;
            }else if(e.keyCode == 38){
                dron.position.y += speed;
            }
        },false);


    });
    var cubeGeometry = new THREE.CubeGeometry(20,20,20);
    var mesh = new THREE.Mesh(cubeGeometry,particleMaterial);
    mesh.position.x += 200;
    mesh.position.z += 200;
    mesh.position.y += 200;
    scene.add(mesh);



    displayBlock.append(renderer.domElement);
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
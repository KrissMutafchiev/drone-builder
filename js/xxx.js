var camera, controls, scene,light,light1, renderer ,displayBlock;
init();
animate();
function init(){

    displayBlock = $("#scene-display");

    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x00000f);
    renderer.setSize(400, 400);
    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 500;

    controls = new THREE.OrbitControls( camera, document, renderer.domElement );
    controls.addEventListener('change', render);

    scene = new THREE.Scene();

    light = new THREE.AmbientLight(0xffffff , 0.10);
    scene.add(light);

    light1 = new THREE.PointLight(0xffffff , 0.5);
    scene.add(light1);

    var armMaterial = new THREE.MeshNormalMaterial({color: 0x0000ff});

    /* Floor  */
    var planeGeometry = new THREE.PlaneGeometry( 1000, 1000, 1, 1 );
    var planeMaterial = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
    var floor = new THREE.Mesh( planeGeometry, planeMaterial );
    floor.material.side = THREE.DoubleSide;

    scene.add( floor );

    var geometryArm   = new THREE.CylinderGeometry(10,10,200);
    var geometryBody  = new THREE.CubeGeometry(20,50,50);
    var geometryRotor = new THREE.SphereBufferGeometry(20,20,20,20);

    var arm       = new THREE.Mesh(geometryArm,armMaterial);
    var secondArm = new THREE.Mesh(geometryArm,armMaterial);
    var body      = new THREE.Mesh(geometryBody,armMaterial);
    var rotor1    = new THREE.Mesh(geometryRotor,armMaterial);
    var rotor2    = new THREE.Mesh(geometryRotor,armMaterial);
    var rotor3    = new THREE.Mesh(geometryRotor,armMaterial);
    var rotor4    = new THREE.Mesh(geometryRotor,armMaterial);

    rotor1.position.z += 100;
    rotor2.position.z -= 100;
    rotor3.position.y += 100;
    rotor4.position.y -= 100;

    scene.add(arm,secondArm);
    scene.add(body,rotor1,rotor2,rotor3,rotor4);
    arm.rotation.x += 7.85;

    render();
    function render(){
        renderer.render( scene, camera );
    }
    displayBlock.append(renderer.domElement);

}
function animate(){
    requestAnimationFrame( animate );
    controls.update();
}



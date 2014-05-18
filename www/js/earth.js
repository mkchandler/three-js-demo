(function() {

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, .1, 1000);
    camera.position.z = 1.5;

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x999999));

    var sphere = createSphere(0.5, 32);
    scene.add(sphere);

    render();

    function render() {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }

    function createSphere(radius, segments) {
        return new THREE.Mesh(
            new THREE.SphereGeometry(radius, segments, segments),
            new THREE.MeshPhongMaterial({
                map:         THREE.ImageUtils.loadTexture('img/earth.jpg'),
                bumpMap:     THREE.ImageUtils.loadTexture('img/earth-elevation-bump.jpg'),
                bumpScale:   0.005,
                specularMap: THREE.ImageUtils.loadTexture('img/earth-water.png'),
                specular:    new THREE.Color('grey')
            })
            );
    }

}());

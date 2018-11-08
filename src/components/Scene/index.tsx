import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';

// const != immutable
// const == cannot reassign the memory address of a variable.
// this probably isn't good practice though.
const scene = new THREE.Scene();

const randomPosition = (object) => {
  const lower = -6.0
  const upper = 6.0

  const random = (lower: number, upper: number) => {
    return Math.floor(Math.random()*(upper-lower+1)+lower);
  }

  object.position.x = random(lower, upper)
  object.position.y = random(lower, upper)
  object.position.z = random(lower, upper)
}

// these functions
export const addCube = () => {
  let geometry = new THREE.BoxGeometry( 1, 1, 1 );
  let material = new THREE.MeshBasicMaterial( { color: 0x001f54 } );
  let cube = new THREE.Mesh( geometry, material );
  cube.shouldAnimate = true
  randomPosition( cube )
  scene.add( cube );
}

export const addSphere = () => {
  var geometry = new THREE.SphereGeometry( 100, 100, 100 );
  var material = new THREE.MeshBasicMaterial( {color: 0xffaabb} );
  var sphere = new THREE.Mesh( geometry, material );
  randomPosition( sphere )
  sphere.shouldAnimate = false
  sphere.scale.x = 0.01
  sphere.scale.y = 0.01
  sphere.scale.z = 0.01
  scene.add( sphere );
}

export const Scene = (root) => {

  const canvas = document.createElement('canvas');
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  root.appendChild(canvas);

  let camera = new THREE.PerspectiveCamera( 60, 2.0, 1, 100 );
  camera.position.z = 10;

  // BUG: (?) For some reason the meshs' are rendered fuzzy. I've not had this
  //          problem before, although haven't used Three JS with Electron.
  //          I think three might have been updated to change how they approach
  //          pixelRatio, which would have an effect.
  //          I played around with various aspect ratios today, however didn't want
  //          to spend too long on it for now.
  let renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true, preserveDrawingBuffer: true, });
  renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);

  const controls = new OrbitControls(camera, renderer.domElement);

	var animate = function () {
		requestAnimationFrame( animate );

    // rotating spheres isn't particularly exciting
    scene.children.filter( child => child.shouldAnimate ).map( child => {
      child.rotation.x += 0.01;
    })

		renderer.render( scene, camera );
	};

	animate();

}

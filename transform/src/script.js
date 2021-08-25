import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

// Positioning
// mesh.position.z = -4
// mesh.position.x = 3
mesh.position.set(0.5, -4, -2)

// Axis helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

// Scale = num * current size
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
mesh.scale.set(2, 0.5, 0.5)

scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.y = 1
camera.position.x = 1
scene.add(camera)

// length() distanceTo() and normalize() funcs
console.log(mesh.position.length())
console.log(mesh.position.distanceTo(camera.position))
mesh.position.normalize()               // reduces vector to length = 1
mesh.position.set(3, 2, -3)             // set 3 coordinates of object

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
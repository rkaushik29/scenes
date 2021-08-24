const scene = new THREE.Scene()

// Object mesh : geomety + material
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const sizes = {
    width: 800,
    height: 600
}

// Camera - camera default at z = 0 ; move it back i.e. towards us to see obj
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height) // params : field of view (angle) and aspect ratio
camera.position.z = 3
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl')  // function used to send a DOM element from HTML to js
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Render Scene 
renderer.render(scene, camera)
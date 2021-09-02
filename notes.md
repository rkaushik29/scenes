# Notes

## Transform
There are 4 properties to transform objects in our scene
```
position (to move the object)
scale (to resize the object)
rotation (to rotate the object)
quaternion (to also rotate the object; more about that later)
```
All classes that inherit from the Object3D class possess those properties like PerspectiveCamera or Mesh and classes that we haven't covered yet.

 - units are arbitrary but it is good to decide which units are to be set in the beginning of the project
 - default axes can be manipulated

```Vector3``` is a class to define 3D objects (args are posn in space)

```Axes Helper``` displays colored lines for axes

## Rotation
Rotate with ```rotation (Euler obj) or quaternion``` : updating one will update the other 
value of axes in radians => Math.PI = 180 deg
rotation of axes occur in x, y, z order ; gimbal lock -> one axis gets locked for rotn
use ```object.rotation.reorder('yxz')``` before changing rotation

target.lookAt(vector3) - positions camera s.t -z faces camera

## Group
inherits from Object3D ; put objs into groups and use position, scale and rotation/quaternion to move the whole group

## Animation
many pictures every second (fps) together = animation

## Cameras
StereoCamera for using 2 cameras - parallax effect / red+blue lenses - vr headsets (mimic eyes)
Cube cameras - 6 cameras - render surroundings : refraction reflection etc.
OrthographicCamera - render scene without perspective
PerspectiveCamera - params: field of view (angle in deg: 45-75 usually), aspect ratio (width / height of render), near, far 
 - any objects closer than near and farther than far will not be visible
 - in orthographic camera, the size of obj will be same regardless of dist from camera (square fov not conical)

## Built-in controls
 - DeviceOrientationControls
 - FlyControls - spaceship movement
 - FirstPersonControl - no 2d rotation movement
 - PointerLockControl - look around from a point - move f,b,l,r
 - OrbitControl
 - TrackballControl
 - TransformControl - move objects using input in space

 Damping : smooth movement ```controls.enableDamping = true```

## Resizing
Do this using an event listener and set canvas dimensions to current dimensions, as well as update renderer dimensions
Blurry renders and steps on shape edges are visible due to pixel ratio > 1 on viewport

## Textures
They are images rendered on objects
 - follow PBR principles : Physically based rendering
 - Use textureLoaders to load textures; multiple textures can be loaded with one loader
 - LoadingManager mutualizes multiple events : useful to monitor global loading process

 - UV unwrapping maps each vertex to 2 co-ordinates on a 2D plane
 - minFilter when texture is too big for surface
 - magFilter when texture is small for surface
 - NearestFiler is best for performance
 - No mipmappings neeeded when using minFilter with NearestFilter
 - 3 texture chars : weight (file wt) , size (resolution) , data in img.
    - jpg is lighter (lossy compression) ; png is heavier (lossless compression)
    - mipmapping increases num of pixels to store
    - no transparency in jpg but can do it in png
 - find textures at:
    - poliigon.com
    - 3dtextures.me
    - arroway-textures.ch

## Materials

Materials are used to put a color on each visible pixel of the geometries.

The algorithms that decide on the color of each pixel are written in programs called shaders.

## Light

Minimal cost:
 - AmbientLight
 - HemisphereLight


Moderate cost:
 - DirectionalLight
 - PointLight


High cost:
   - SpotLight
   - RectAreaLight

Optimization:
 - Baking:

      A good technique for lighting is called baking. The idea is that you bake the light into the texture. This can be done in a 3D software. Unfortunately, you won't be able to move the lights, because there are none and you'll probably need a lot of textures.

## Shadows
 - core shadow: back shadow of each object
 - drop shadow: shadow of one obj on another

shadows can be casted or recieved and they need to be activatede on the renderer.
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

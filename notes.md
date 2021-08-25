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

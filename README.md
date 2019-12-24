# cs50Mobile
Following the CS50 Mobile Development with React Native Curriculum

This course is free to audit at https://courses.edx.org/courses/course-v1:HarvardX+CS50M+Mobile/course/

# Lecture 1

### 1-typecasting.js
Explicit typecasting can be achieved through methods such as:

String(x)

x.toString()

Implicit typecasting can be achieved through modifier operations such as:
x + ""
https://www.w3schools.com/js/js_type_conversion.asp

### 2-objects.js
3 ways to edit values in objects include:

n o.key = value

o[key] = value

key:value

https://coderwall.com/p/p5cf5w/different-ways-of-creating-an-object-in-javascript

### 3a-objectMutation.js

Copy an object my reference:
const o2 = o

Copy an object by value:
const o3 = Object.assign({}, o)

When printing an object combined with another message, use commas and not +
console.log("My object: ", o)

### 3b-deepCopy.js

Create a new, empty object. For every key in an inputted object, if the val is also an object, recursively try to deep copy this nested object until a non-object value is reached. Else, if a val is not an object, copy it into the keys of the new object. Once all of the keys have been iterated through, return the new object

## Lecture 2

### 1-closures.js
A closure is an inner function that has access to the outer (enclosing) function’s variables
https://www.w3schools.com/js/js_function_closures.asp
https://dmitripavlutin.com/simple-explanation-of-javascript-closures/

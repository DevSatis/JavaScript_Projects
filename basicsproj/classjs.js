

const User = require("./classes.js");

const satish = new User("Vanshika", "satish@devicePixelRatio.com");
console.log(satish.getInfo);
satish.enrollCourse("React JS");
satish.enrollCourse("Node Js");

console.log(satish.getcourseList());

let courses = satish.getcourseList();

courses.forEach((c)=>console.log(c));
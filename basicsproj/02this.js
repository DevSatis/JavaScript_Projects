console.log(this);

var user = {
    firstName: "Satish",
    courseCount: 4,
    getCourseCount: function () {
        console.log("Line 7", this);
    },
};

user.getCourseCount();
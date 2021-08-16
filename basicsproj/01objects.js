var user = {

    firstName : "Satish",
    lastName : "Vanshika",
    role : "Developer",
    loginCount : 32,
    gmailSignedIn : true,
    courseList : [],
    byCourse : function (courseName) {

        this.courseList.push(courseName);

    },
    getCourseCount : function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} `;
    },



};

var courseList = true;

console.log(user.firstName);
console.log(user.getCourseCount());
user.byCourse("React JS course");
user.byCourse("Angular course");
console.log(user.getCourseCount());




// console.log(user.firstName);
// console.log(user['lastName']);

// user.loginCount = 44;

// console.log(user.loginCount);
// console.table(user);


// var iPhone = { 

//     brand : "Apple",
//     module : 12,
//     cam : "Triple Camera",
//     ram : "12 gb",
//     space : "128 gb",
//     ios : 12,
//     color : "silver",
// };

// console.table(iPhone);
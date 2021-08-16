const Satish = {
    firstName : 'Satish',
    lameName : 'Vanshika',
    role : 'Admin',
    courseCount: 5,
    getInfo : function(){
        console.log(`
        First name is ${this.firstName} 
        Last Name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses
        `)
    }
};
const sk = {
    firstName : 'Rock',
    lastName : 'DJ',
    role : 'sub-admin',
    courseCount: 6,

}

// Satish.getInfo();
// sk.getInfo();
var skInfo = Satish.getInfo.bind(sk);
skInfo();

Satish.getInfo.call(sk);
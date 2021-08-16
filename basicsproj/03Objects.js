var User = {
    name:"",
    getUserName : function(){
        console.log(`User name is : ${this.name}`);
    },

};
var satish = Object.create(User);
console.log(satish);
satish.name = "Satish Vanshika";
satish.getUserName;

var sam = Object.create(User,{
    name: {}
})
var getUserRole = function (name, role){
    switch(role){
        case "admin":
            return `${name} is admin with all access`
            //break; //break is not needed when return keyword is used.
        case "subadmin":
            return `${name} is sub-admin with all access to create and delete courses`
            //break;
        case "testprep":
            return `${name} is testprep with access to create/delet test`
           // break;

        case "user":
            return `${name} is a user to consume course`
            //break;
        default:
            return `${name} is a trial user `
            //break;
    }

    

}
console.log(getUserRole("Satish","testprep"));
var getRole = getUserRole("Vanshika","admin");
console.log(getRole);
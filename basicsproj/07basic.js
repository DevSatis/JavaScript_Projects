var user = "testprep";

switch(user){
    case "admin":
        console.log("You get the full access");
    break;

    case "subadmin":
        console.log("You get the access to create/delete course");
    break;
    
    case "testprep":
        console.log("You get the access to create/delete test");
    break;
    
    case "user":
        console.log("gets access to comsume courses");
    break;
    
    default:
        console.log("trial user");
    break;
    

  
}
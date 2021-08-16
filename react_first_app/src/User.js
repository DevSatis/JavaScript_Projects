
function User(Props){
    
        return(
            <div style={{backgroundColor:"skyblue", margin:"10px"}}>
                <h1>Hello {Props.name}</h1>
                {/* <h2>Email: {Props.email}</h2> */}
            </div>
        )
    
}
export default User;

const  liftingUpUser  =({setName})=>{

    return(
        <div>
            <h3>
                Add User
            </h3>
            {/* <h4>
                in this working i am going to show you how to lift the state up from child to parent component
            </h4> */}
            <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="enter name" />
            <hr />
        </div>
    )
}
export default liftingUpUser;
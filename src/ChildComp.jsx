function ChildComp( {DisplayName,Name} ){
    // const Name="Shahid"
   
    return (
        <div>
            <button onClick={()=>{DisplayName(Name)}}>DisplayName</button>

        </div>
    )
}
export default ChildComp;
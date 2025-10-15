import ChildComp from "./ChildComp.jsx"

function ParentComp(){
     const DisplayName = (Name) => [
        alert(Name)
    ]
    return(
        <div>
            <h1>
                Call function from parent to child Component.
            </h1>
            <ChildComp DisplayName={DisplayName} Name="Shahid" />
            <ChildComp DisplayName={DisplayName} Name="Peter" />
            <ChildComp DisplayName={DisplayName} Name="Bruce" />
            <ChildComp DisplayName={DisplayName} Name="Fahad" />
            <ChildComp DisplayName={DisplayName} Name="Ali" />
        </div>
    )
}
export default ParentComp;
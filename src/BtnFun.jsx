 const fruit=(name)=>{
        alert("fruit name is apple")
    }
function btnFun(){
    function callFun() {
        alert("btn clicked")
    }
    const fruit=(name)=>{
        alert("fruit name is " + name)
    }

    return <div>
        <h1>Event and function</h1>
        <button onClick={()=>fruit("banana")}> Click here</button>
    </div>
}

export default btnFun;


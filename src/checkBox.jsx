import  { useState } from "react";
function Checkbox(){
    const [skills,setSkills]=useState([])
    const handleChange=(event)=>{
        console.log(event.target.value,event.target.checked)
if(event.target.checked){
    setSkills([...skills,event.target.value])
}else{
    setSkills(skills.filter((e)=>e!==event.target.value))
}


    }
    return(
        <div>
            <h4>select your skills</h4>
            <input type="checkbox" onChange={handleChange} id="php" value="php"/>
            <label htmlFor="php">PHP</label> 
            <br />
            <input type="checkbox" onChange={handleChange} id="html" value="html" />
            <label htmlFor="html">HTML</label> 
            <br />
            <input type="checkbox" onChange={handleChange} id="java" value="java" />
            <label htmlFor="java">Java</label>
            <br />
            <h1>{skills.toString()}</h1>
        </div>
    )
}
export default Checkbox;
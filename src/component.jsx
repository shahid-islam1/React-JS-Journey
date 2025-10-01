function Component(){
  
    return <div>
        <h1>This is Component </h1>
        <h1>
  this is sum function {sum()}  </h1>
        <Interview/>
    </div>
}
function sum(){
    return 4000+499
}

function Interview(){
    return <div>
    <p>Only one default import/export</p>
    <p>but we can use multiple import/export by using Curly braces</p>
    </div>
}

export default Component


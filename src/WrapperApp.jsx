import Wrappper from "./wrapper"

function WrapperApp(){
    return(
        <div>
            <h1> props and wrapper in react</h1>
            <Wrappper color={{color:"brown"}}><h2>hey buddy</h2></Wrappper>
            <Wrappper><h2>hey sam</h2></Wrappper>
            <Wrappper><h2>hey abdullah</h2></Wrappper>

        </div>
    )
}
export default WrapperApp
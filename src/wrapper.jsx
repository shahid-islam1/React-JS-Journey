function Wrapper({children, color }) {
    return (
        <div style={{border:"2px solid red", margin:"20px", padding:"20px", color:color?.color || "blue"}}>
            {children}
            {/* <h1>hi everyone</h1> */}
        </div>
    )
}
export default Wrapper
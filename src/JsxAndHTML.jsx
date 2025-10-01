function Jsx() {
    const userName = "Shahid";
    return <div>
        <h1>Hello, {userName}</h1>
        <button onClick={() => alert("hello")}>Click</button>
    </div>
}
export default Jsx
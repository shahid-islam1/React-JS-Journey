function ReactLoop() {

    const userData = [
        {
            id: 1,
            name: "John Doe",
            email: "john@example.com",
            age: 25
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane@example.com",
            age: 30
        },
        {
            id: 3,
            name: "Bob Wilson",
            email: "bob@example.com",
            age: 28
        }
    ]
    return (
        <div>
            <table border={1} >
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user) => (
                        <tr>
                             <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.email }</td>
                        </tr>))
                        }
                </tbody>


            </table>
        </div>
    )

}
export default ReactLoop;
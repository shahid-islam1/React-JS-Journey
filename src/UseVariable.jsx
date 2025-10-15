import React, { useState } from "react";

function UseVariable() {
    const [users, setUsers] = useState([]);
    const [user, setuser] = useState("");
    const Handleuser = () => {
        if (!user.trim()) return;
        setUsers([...users, user]);
    }

    const Unique = [...new Set(users)].length
    const Total = users.length
    const Last = users[users.length - 1]
    const AllUserName = users.join(", ")

    return (
        <div>
            <h1>
                Use Variable instead of state in React 19
            </h1>
            <h3>
                Total user: {Total}
            </h3>
            <h3>
                Last user: {Last}
            </h3>
            <h3>
                All users: {AllUserName}
            </h3>
            <h3>
                Unique users: {Unique}
            </h3>
            <input
                type="text"
                onChange={(e) => { setuser(e.target.value) }}
                placeholder="enter user"
                required
            />
            <button
                onClick={Handleuser}
                disabled={!user.trim()}
            >
                submit
            </button>
            {users.map((item, index) => <h1 key={index}>{item}</h1>)}
        </div>
    )
}
export default UseVariable;
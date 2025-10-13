import { useRef } from 'react';

function UncontrolledComponent() {
    const userRef = useRef();
    const passwordRef = useRef();

    const handleForm = (event) => {
        event.preventDefault();
        const user = document.querySelector('#user').value;
        const password = document.querySelector('#password').value;
        console.log(user, password);
    };
    
    const handleformRef = (e) => {
        e.preventDefault();
        // Access ref values correctly without creating new variables
        const username = userRef.current.value;
        const password = passwordRef.current.value;
        console.log(username, password);
    }

    return (
        <>
            <h1>Uncontrolled Component</h1>
            <form action="" method="post" onSubmit={handleForm}>
                <input 
                    type="text"
                    id="user"
                    placeholder="enter user name" 
                />
                <br /><br />
                <input 
                    type="password"
                    id="password"
                    placeholder="enter user password" 
                />
                <br /><br />
                <button>
                    Submit
                </button>
            </form>
            <hr />
            
            <h1>Uncontrolled Component Using useRef</h1>
            <form action="" method="post" onSubmit={handleformRef}>
                <input 
                    type="text"
                    ref={userRef}
                    placeholder="enter user name" 
                />
                <br /><br />
                <input 
                    type="password"
                    ref={passwordRef}
                    placeholder="enter user password" 
                />
                <br /><br />
                <button>
                    Submit
                </button>
            </form>
        </>
    );
}

export default UncontrolledComponent;
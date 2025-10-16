import { useId } from "react"

function IdHook() {
    return (
        <div>
        <UserForm/>
        <br />
        <UserForm/>
     </div>
    )
}

function UserForm() {
    const user = useId()
    return (
        <div>
            <h1>
                useId Hook in React js
            </h1>
            <form action="" >
                <label htmlFor={user+'name'}><h3>enter name:</h3></label>

                <br />

                <input
                    id={user+'name'}
                    placeholder="enter name"
                    type="text" />

                <br />
                <br />


                <label htmlFor={user+'password'}><h3>enter password:</h3></label>

                <br />

                <input
                    id={user+'password'}
                    placeholder="enter password"
                    type="text" />

            </form>
            <hr />

        </div>
    )
}

export default IdHook
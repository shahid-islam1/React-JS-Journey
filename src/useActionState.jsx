"use client"
import { useActionState, useState } from "react"

function UseActionState() {
    const handleSubmit = async (previousData, formData) => {
        let name = formData.get('name')
        let password = formData.get('password')
        console.log('handleSubmit called', name, password)
        await new Promise((resolve) => setTimeout(resolve, 2000))

        if (name && password) {
            return { message: 'Submitting Successfully',name,password}
        } else {
            return { error: 'Please Submit Correct Data' ,name,password}
        }
    }

    const [data, action, pending] = useActionState(handleSubmit, undefined)
    const [value, setValue] = useState('')

    console.log('data', data, pending)

    return (
        <div>
            <h1>This is useActionState hook in react js</h1>
            <form action={action}>
                <input
                    type="text"
                    name="name" 
                    value={value}
                    defaultValue={data?.name}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Enter something"
                />
                <br /> <br />

                <input
                    type="text"
                    defaultValue={data?.password}
                    placeholder="Enter your password"
                    name='password' 
                />

                <br /><br />

                <button disabled={pending} type="submit">
                    {pending ? 'Submitting...' : 'Submit'}
                </button>
                <br />

                
                {data?.error && <span style={{color: 'red'}}>{data?.error}</span>}
                {data?.message && <span style={{color: 'green'}}>{data?.message}</span>}
            </form>
            <h3>
                Name: {data?.name} <br />
                Password: {data?.password}
            </h3>
        </div>
    )
}

export default UseActionState

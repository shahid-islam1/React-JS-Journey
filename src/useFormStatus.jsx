import { useFormStatus } from 'react-dom';

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button 
            type="submit"
            disabled={pending}
        >
            {pending ? 'Submitting...' : 'Submit'}
        </button>
    );
}

function FormStatusHook() {
    const handleSubmit = async () => {
        console.log('Form submission started');
        await new Promise(res => setTimeout(res, 5000));
        console.log('Form submission completed');
    }

    return (
        <div>
            <h1>This is useFormStatus Hook In React 19</h1>
            <form action={handleSubmit}>
                <input 
                    type="text"  
                    placeholder="enter name"
                    required
                /> 
                <br /><br />
                <input 
                    type="password"  
                    placeholder="enter password"
                    required
                />
                <br /><br />
                <SubmitButton />
            </form>
        </div>
    )
}

export default FormStatusHook;
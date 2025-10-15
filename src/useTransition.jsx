import { useTransition } from "react";
import loadingImg from "./assets/loading.webp"

function UseTransition() {
    const [isPending, startTransition] = useTransition();

    const handleBtn = () => {
        startTransition(async () => {
            await new Promise(res => setTimeout(res, 1000));
        });
    }

    return (
        <div>
            <h1>
                useTransition Hook in React 19
            </h1>
            <button 
                disabled={isPending} 
                onClick={handleBtn}
            >
                {isPending ? <img style={{width:100, border:"none"}} src={loadingImg} alt="loading" /> : 'Click Me'}
            </button>
        </div>
    );
}

export default UseTransition;
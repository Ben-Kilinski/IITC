import { useState } from "react";


function Submit() {
    const [state, setState] = useState('')
    
    return (
        <>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
};

function handleSubmit(){
    
}

export default Submit;

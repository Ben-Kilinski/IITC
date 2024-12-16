import { useState } from "react";


function Submit() {
    console.log('submit components works!');
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

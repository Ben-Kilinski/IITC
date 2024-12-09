import { useState } from "react";

const Addtask () {
    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="What do you need to do?"
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
};

export default Addtask;

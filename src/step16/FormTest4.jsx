import { useState } from "react";

export function FormTest4(props){
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    const [numGuest, setNumGuest] = useState(0);

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`아침식사 여부 : ${haveBreakfast}, 방문객 수 : ${numGuest}`);
    } 

    return(
        <form onSubmit={handleSubmit}>
            <label>
                아침식사 여부:
                <input type="checkbox" checked={haveBreakfast} onChange={(e)=>{setHaveBreakfast
                (e.target.checked);

                }} />
            </label>
            <br/>
            <label>
                <input type="number" value={numGuest} onChange={(e)=>{
                    setNumGuest(e.target.value);
                }} />
            </label>
            <button type="submit">제출</button>
        </form>
    );
}
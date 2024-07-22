import { useState } from "react";

export function SignUp(){
    const [name, setName] = useState("");
    const [gender, setGender] = useState('남자');

    const handleChangeName = (e)=> {
        setName(e.target.value);
    }
    const handleChangeGender = (e)=> {
        setGender(e.target.value);
    }
    const handleSubmit = (e)=> {
        e.preventDefault();  //클릭해도 리로드가(새창) 되지않겠금 설정
        alert(`이름: ${name} \n 성별: ${gender}`);
        
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text" value={name} onChange={handleChangeName}/>
            </label>
            <br/>
            <label>
                성별:
                <select value={gender} onChange={handleChangeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>
            <br/>
            <button type="submit">제출</button>
        </form>
    );
}
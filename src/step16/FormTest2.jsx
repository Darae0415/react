import {useState} from 'react'

export function FormTest2(){
  const [value, setValue] = useState('요청사항을 입력하세요.');

  const handleChange = (e)=>{
    setValue(e.target.value);
  }
  const handleSubmit = (e)=>{
    alert('입력한 요청사항: '+value);
    e.preventDefault();  //클릭해도 리로드가(새창) 되지않겠금 설정
  }
  return (
    <form onsubmit={handleSubmit}>
    <label>요청사항:
    <textarea value={value} onChange={handleChange}/>
    </label>
    <button type="submit">제출</button>
  </form>
  );
}
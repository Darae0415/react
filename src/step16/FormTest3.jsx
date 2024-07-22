import {useState, useEffect} from 'react'

export function FormTest3(){
  const [value, setValue] = useState('melon');

  useEffect(()=>{
    console.log('useEffect => '+value);
  },[value]);

  const handleChange = (e)=>{
    setValue(e.target.value);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    alert('선택한 과일 : ' + value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <select id="Fruit" value={value}  onChange={handleChange}>
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="grape">포도</option>
        <option value="melon">멜론</option>
      </select>
      <button type="submit">제출</button>
    </form>
  );
}
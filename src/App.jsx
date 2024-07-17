import { ColoredMessage } from "./components/ColoredMessage";
import { ColoredMessage2 } from "./components/ColoredMessage2";
//state
import {useState} from "react";

export function App(){
  let aaaa=useState(0);
  console.log('aaaa=>',aaaa);
  const[num,setNum] = useState(0);
    const divStyle = {
      border: '1px solid blue',
      borderRadius:'10px'
    }
    const aaa = ()=>{
        // alert('강아지');
        let num2 = num+1;
        setNum(num2);
        alert(num2);
    }
    const redStyle={
      color:'red',
      backgroundColor:'yellow'
    }
    const pinkStyle={
      color:'pink',
      fontSize:'20px'
    }
    // const h1Style={
    //   textAlign:'center'
    // }
    // const div2Style={
    //   disPlya:'fiex',
    //   flexDirection:'column'
    // }

    return(
      <div style={divStyle}>
        
        {console.log('test')}
        <p style={{color:'blue',fontSize:'32px'}}>안녕하세요{num}</p>
        {/* <p style={redStyle}>반갑습니다. 잘 지내시죠?</p> */}
        <ColoredMessage color='orange' message='잘 지내시죠?'/>
        <ColoredMessage color='red' message='How do you do?'/>
        <ColoredMessage2 color='gray'>잘지내나요?</ColoredMessage2>
        <p style={pinkStyle}>잘 지내고 있습니다.</p>
        <button onClick={aaa}>버튼</button>
        {/* <h1 style={h1Style}>Login</h1>
        <div style={div2Style}>
          <input type="text" placeholder="Id"/>
          <input type="password" placeholder="password"/>
        </div>
        <button style={{textAlign:'center'}}>Login</button> */}
      </div>
    );
  }
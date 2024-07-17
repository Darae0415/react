import '../test/InfoBox.css'

export function InfoBox(){
    return(
        <div>
            <div id="container">
                <div className="textInfo">
                    <p>이름 : <input type="text" placeholder="사용자명"/></p>
                    <br/>
                    <p>나이 : <input type="password" placeholder="비밀번호"/></p>
                    <br/>
                    <p>직업 : <input type="text" placeholder="직업"/></p>
                    <br/>
                </div>
                <button>추가</button>
            </div>
            <div id="memo-container">
                <ul id="memo-list"></ul>
            </div>
        </div>
    );
}
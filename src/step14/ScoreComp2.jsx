import React, { useState } from 'react';

export function ScoreComp2(props) {
    const [korean, setKorean] = useState(0);
    const [english, setEnglish] = useState(0);
    const [math, setMath] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [average, setAverage] = useState(0);
    const [failedSubjectsCount, setFailedSubjectsCount] = useState(0);
    const [isFailed, setIsFailed] = useState(false);

    const handleKoreanChange = (e) => {
        setKorean(Number(e.target.value));
    };

    const handleEnglishChange = (e) => {
        setEnglish(Number(e.target.value));
    };

    const handleMathChange = (e) => {
        setMath(Number(e.target.value));
    };

    const calculateTotalScore = () => {
        const total = korean + english + math;
        const avg = total / 3;

        setTotalScore(total);
        setAverage(avg);
        
        // 과락 여부 판정
        let count = 0;
        if (korean < 40) {count++;}
        if (english < 40) {count++;}
        if (math < 40) {count++;}

        setFailedSubjectsCount(count);

        // 평균 60점 미만이거나 과락이 있으면 불합격
        setIsFailed(avg < 60 || count > 0);
    };

    return (
        <>
            <div id="exam">
                <p>국어 : <input type="text" value={korean} onChange={handleKoreanChange} /></p>
                <p>영어 : <input type="text" value={english} onChange={handleEnglishChange} /></p>
                <p>수학 : <input type="text" value={math} onChange={handleMathChange} /></p>
                <button onClick={calculateTotalScore}>판정</button>
            </div>
            <div id="Grading">
                <p>총점: {totalScore}</p>
                <p>평균: {average.toFixed(2)}</p>
                <p>과락: {failedSubjectsCount}과목</p>
                {isFailed ? <p style={{ color: 'red' }}>불합격</p> : <p style={{ color: 'blue' }}>합격</p>}
            </div>
        </>
    );
}
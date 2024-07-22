const students=[
    {id: 1,name:'홍길동',job:'백수'},
    {id: 2,name:'강감찬',job:'행정가'},
    {id: 3,name:'이순신',job:'군인'}
]

export function ListTest4(){
    return(
        <ul>
        {students.map(
            (stu) => {return(
                <li key={stu.id}>{stu.id}. {stu.name}({stu.job})</li>
            )
                })}
        </ul>
    );
}
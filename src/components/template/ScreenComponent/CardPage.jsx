import {useState} from 'react'
import Header from "../Header"
import Content from "../Content"
import Footer from "../Footer"

export default function CardPage(){
    //const [progress,setProgress] = react.useState(0)
    const [list, setList] = useState([]);
    const [finished,setFinished] = useState(false)
    console.log(list)
    return (
        <div className='cardPage'>
            <Header/>
            <Content setList={setList} list={list}/>
            <Footer finished={finished} list={list}/>
        </div>
    )
}
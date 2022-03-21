import react from 'react'
import Header from "../Header"
import Content from "../Content"
import Footer from "../Footer"

export default function CardPage(){
    const [progress,setProgress] = react.useState(0)
    const [finished,setFinished] = react.useState(false)
    console.log(progress)
    return (
        <div className='cardPage'>
            <Header/>
            <Content setProgress={setProgress}/>
            <Footer finished={finished} progress={progress}/>
        </div>
    )
}
import react from 'react'
// import InitialPage from '../template/ScreenComponent/InitialPage'
import CardPage from '../template/ScreenComponent/CardPage'
export default function App(){
    let [screen,setScreen] = react.useState(true)

    return (
        
        screen ? <InitialPage setScreen={setScreen}/> : <CardPage/>
        
    )
}

function InitialPage(props){
    return (
        <div className="InitialPage"> 
            <div className="ZapDiv">
                <img src="assets/logo.png" alt="ZapRecall" />
                <h1>ZapRecall</h1>
            </div>
            <div onClick={() => props.setScreen(false)}>
                <button >Iniciar Recall!</button>
            </div>
        </div>
    )
}
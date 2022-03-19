import react from 'react'
import InitialPage from '../template/ScreenComponent/InitialPage'
import CardPage from '../template/ScreenComponent/CardPage'
export default function App(){
    let [screen,setScreen] = react.useState(true)

    return (
        
        screen ? <InitialPage setScreen={setScreen}/> : <CardPage/>
        
    )
}

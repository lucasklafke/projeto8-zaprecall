import react from 'react'
import InitialPage from '../template/ScreenComponent/InitialPage'
import CardPage from '../template/ScreenComponent/CardPage'
export default function App(){
    const [screen,setScreen] = react.useState(true)

    return (
        
        //screen ? <InitialPage/> : <CardPage/>
        <CardPage/>
    )
}
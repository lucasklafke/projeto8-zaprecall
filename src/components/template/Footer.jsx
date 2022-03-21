export default function Footer(props){
    return(
        !props.finished  ? <InGame/> : <Finished/>
    )
}

function Progress(props){
    return (
        <img src={props.element} alt="" />
    )
}
function Finished(){
    return (
        <footer>
            <div>
                <img src="" alt="" />
                <span></span>
            </div>
            <span></span>
            <span></span>
            <div>
                {/* {props.progress.map(element => <Progress zap={element}/>)} */}
            </div>
        </footer>
    )
}
function InGame(){
    return (
        <footer>
            <span>0/4 CONCLUÍDOS</span>
            <div>
                {/* {props.progress.map(element => <Progress zap={element}/>)} */}
            </div>
        </footer>
    )
}
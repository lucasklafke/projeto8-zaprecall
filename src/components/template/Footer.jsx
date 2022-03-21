export default function Footer(props)   {
    return(
        !props.finished  ? <InGame list={props.list}/> : <Finished/>
    )
}

function Progress(props){
    return (
        <img src={`/assets/${props.zap}.png`} alt="" />
    )
}
function Finished(props){
    const result = props.progress.map(element => element !== 'forgot' ? true : false)
    
    return (
        <footer>
            <div>
                <img src={result? `assets/party.png` : `assets/sad.png`} alt="" />
                <span>
                    {result? `Você não esqueceu de nenhum flashcard!` : `Ainda faltam alguns...Mas não desanime!`}
                </span>
            </div>
            <span></span>
            <span></span>
            <div>
                {/* {props.progress.map(element => <Progress zap={element}/>)} */}
            </div>
        </footer>
    )
}
function InGame(props){
    // let counter = props.progress.length
    return (
        <footer>
            <span>0/8 CONCLUÍDOS</span>
            <div>
                {props.list.map(element => <Progress zap={element}/>)}
            </div>
        </footer>
    )
}
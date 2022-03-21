export default function Footer(props)   {
    let counter = props.list.length
    return(
        counter < 8  ? <InGame counter={counter} list={props.list}/> : <Finished counter={counter} list={props.list}/>
    )
}

function Progress(props){
    return (
        <img src={`/assets/${props.zap}.png`} alt="" />
    )
}
function Finished(props){
    let result = false
    props.list.map(element => element !== 'forgot' ? true : null)
    
    return (
        <footer className="footer2">
            <div>
                <img src={result? `assets/party.png` : `assets/sad.png`} alt="" />
                <span>
                    {result? `Parabéns!` : `Putz...`}
                </span>
            </div>
            <span className="progress-message">{result? `Você não esqueceu de nenhum flashcard!` : `Ainda faltam alguns...Mas não desanime!`}</span>
            <span>{`${props.counter}/8 Concluídos`}</span>
            <div className="progress">
                {props.list.map(element => <Progress zap={element}/>)} 
            </div>
        </footer>
    )
}
function InGame(props){
    return (
        <footer>
            <span>{`${props.counter}/8 Concluídos`}</span>
            <div className="progress">
                {props.list.map(element => <Progress zap={element}/>)}
            </div>
        </footer>
    )
}
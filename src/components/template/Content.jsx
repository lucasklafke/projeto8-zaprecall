import react from 'react'
const questionsList = [
    {   question:{
            question: 'para que serve a função split?',
            class: 'question-container'
        },
        answer: {
            answer: 'divide uma String em uma lista ordenada de substrings, retorna o array',
            class: 'answer-container'
        }
        
    },
    {
        question:{
            question: 'para que serve a função trim?',
            class: 'question-container'
        },
        answer: {
            answer: 'remove espaços em branco de ambos os lados de uma string, sem alterá-la',
            class: 'answer-container'
        }
    },
    {
        question:{
            question: 'para que serve a função replace?',
            class: ''
        },
        answer: {
            answer: 'procura um valor ou expressão regular, retorna uma nova string com valores substituídos.',
            class: ''
        }
    },
    {
        question: {
            question: 'Para que serve a função includes?',
            class: 'question-container'
        },
        answer:{
            answer: 'determina se um array contém um determinado elemento, retornando true ou false apropriadamente.',
            class:'answer-container'
        }
    }
]
export default function Content(){
    const [zap,setZap] = react.useState(null)
    return (
        <main>
            {questionsList.map((element,index) => <Question 
            index={index}  
            question={element.question.question}
            answer={element.answer.answer}
            />)}
        </main>
    )
}
function Question(props){
    const [state,setState] = react.useState('initial')
    const [zap,setZap] = react.useState('')
    if(state === 'initial'){
        return (
            <div onClick={()=> setState("question")} className="initial-question-container">
                <span>pergunta </span>
                <img onClick={()=> setState("question")} src="assets/Vector.png" alt="" />
            </div>
        )
    } else if (state === 'question'){
        return (
            <div onClick={()=> setState("answer")} className="question-container">
                <span>{props.question} </span>
                <button onClick={()=> setState("answer")}> 
                    <img  src="assets/setinha.png" alt="" />
                </button>
            </div>
        )
    } else if (state === 'answer'){
        return (
            <div className="answer-container">
                <span>{props.answer} </span>
                <div>
                    <button onClick={() => {
                        setState('finished')
                        setZap('forgot')
                    }} className='bt1'>Não lembrei</button>
                    <button onClick={() => {
                        setState('finished')
                        setZap('almost')
                    }} className='bt2'>Quase não lembrei</button>
                    <button onClick={() => {
                        setState('finished')
                        setZap('zap')
                    }} className='bt3'>Zap!</button>
                </div>
            </div>
        )
    } else if (state === 'finished'){
        return (
            <div className="initial-question-container">
                <span className={zap}> pergunta </span>
                <img src={`assets/${zap}.png`}alt="" />
            </div>
        )
    }
}


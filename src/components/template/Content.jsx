
import { useState } from "react";
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
    },{
        question: {
            question: 'como se monta um state?',
            class: 'question-container'
        },
        answer:{
            answer: 'const [state,setState] = react.useState(initialState)',
            class:'answer-container'
        }
    },{
        question: {
            question: 'O que são as props?',
            class: 'question-container'
        },
        answer:{
            answer: 'Propriedades passadas em react para componentes',
            class:'answer-container'
        }
    },{
        question: {
            question: 'Qual o primeiro código escrito em qualquer linguagem?',
            class: 'question-container'
        },
        answer:{
            answer: 'Hello world!',
            class:'answer-container'
        }
    },{
        question: {
            question: 'como determinar que uma função pode ser exportada?',
            class: 'question-container'
        },
        answer:{
            answer: 'export default function(){ alert("Hello world") }',
            class:'answer-container'
        }
    }
]
export default function Content(props){
    const shuffledArray = questionsList.sort((a, b) => 0.5 - Math.random());
    return (
        <main>
            {
                shuffledArray.map((element,index) => 
                    <Question 
                        index={index}
                        question={element.question.question}
                        answer={element.answer.answer}
                        //setProgress={props.setProgress}
                        setList={value => props.setList([...props.list, value])}
                    />
                )
            }
        </main>
    )
}
function Question(props){
    const [state, setState] = useState('initial')
    const [zap, setZap] = useState('')

    function finishQuestion(zap) {
        setZap(zap);
        props.setList(zap);
        setState("finished")
    }

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
                    <button onClick={() => finishQuestion("forgot")} className='bt1'>Não lembrei</button>
                    <button onClick={() => finishQuestion("almost")} className='bt2'>Quase não lembrei</button>
                    <button onClick={() => finishQuestion("zap")} className='bt3'>Zap!</button>
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

import react from 'react'
const questionsList = [
    {   question:{
            question: 'para que serve a função split?',
            class: 'question-container'
        },
        answer: {
            answer: 'divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array',
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
            answer: 'procura um valor ou uma expressão regular em uma string e retorna uma nova string com os valores substituídos. Não altera a string original.',
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

    if(state === 'initial'){
        return (
            <div className="initial-question-container">
                <span>pergunta </span>
                <img onClick={()=> setState("question")} src="assets/Vector.png" alt="" />
            </div>
        )
    } else if (state === 'question'){
        return (
            <div className="question-container">
                <span>{props.question} </span>
                <img onClick={()=> setState("answer")} src="assets/Vector.png" alt="" />
            </div>
        )
    } else if (state === 'answer'){
        return (
            <div className="answer-container">
                <span>{props.answer} </span>
                <div>
                    <button className='bt1'>Não lembrei</button>
                    <button className='bt2'>Quase não lembrei</button>
                    <button className='bt3'>Zap!</button>
                </div>
            </div>
        )
    } 
}


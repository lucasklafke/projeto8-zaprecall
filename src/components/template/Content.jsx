import react from 'react'
export default function Content(){
    //const [state,setState] = react.useState(<Initial/>)
    return (
        <main>
            {questionsList.map(element => <Initial Id={element.Id}/>)}
        </main>
    )
}

function Question(props){
    return (
        <div className='question-container'>
            <span>{props.question}</span>
            <button ><img src="assets/setinha.png" alt="" /></button>
        </div>
    )
}
function Answer(props){

}
function Initial(props){
    return (
        <div className='initial-question-container'>
            <span>pergunta {props.Id}</span>
            <img src="assets/Vector.png" alt="" />
        </div>
    )
}

const questionsList = [
    {
        Id: 1,
        status: "initial",
        question: 'para que serve a função split?',
        answer: 'divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array'
    },
    {
        Id: 2,
        status: "initial",
        question: 'para que serve a função trim?',
        answer: 'remove espaços em branco de ambos os lados de uma string, sem alterá-la'
    },
    {
        Id: 3,
        status: "initial",
        question: 'para que serve a função replace?',
        answer: 'procura um valor ou uma expressão regular em uma string e retorna uma nova string com os valores substituídos. Não altera a string original. '
    },
    {
        Id: 4,
        status: "initial",
        question: 'Para que serve a função includes?',
        answer: 'determina se um array contém um determinado elemento, retornando true ou false apropriadamente.'
    }
]
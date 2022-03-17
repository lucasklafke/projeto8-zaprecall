export default function Content(){
    return (
        <main>
            <Question/>

        </main>
    )
}

function Question(props){
    return (
        <div>
            <span>{props.question}</span>
            <img src="setinha.png" alt="" />
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
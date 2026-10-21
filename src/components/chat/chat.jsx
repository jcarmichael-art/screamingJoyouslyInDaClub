// displays chat 
// this needs to call on the api and when choices are made it needs to give that choice to the api to save for later when results are counted

// this will be reading and writing but is not creating anything new
// doing the R and U in CRUD
const postObj = {'team': 2, 'body': {'type': 'chat',
                                    'story': 'A knight on a road, where does he go?',
                                    'options': ['Home', 'Fairyland', 'Highway 7'],
                                    'results':[['He finds three free hookers, he gets an aneurism'], ['He gets made a magical imp', "He's swallowed whole"], ['He fights a mythical beast and wins', 'He loses to the mythical beast and becomes a piece of the pavement']],
                                    'choice': '',
                                    'date': ''}}
import { useState } from 'react';

function Chat() {
    
    const [messages, setMessages] = useState([
        {id: 1, sender: "narrator", text: "Welcome to the Chat, Traveller!"},
    ])
    const [input, setInput] = useState("")

    const [choices, setChoices] = useState([
        {option: 1, text: "Hello"},
        {option: 2, text: "How are you?"},
        {option: 3, text: "Good Bye"}
    ])
    function handleChoice(choice) {
        setMessages([...messages,
            {id: Date.now(), sender: "user", text: choice.text},
            {id: Date.now() + 1, sender: "narrator", text: "The traveller nods"}
        ])
    }

    return (
    <div>
        <div>
            {messages.map((message) => (
                <p key={message.id}>{message.text}</p>
            ))}
        </div>
        {choices.map((choice) => (
            <button key={choice.option} onClick={(e) =>
                handleChoice(choice)
            }>{choice.text}</button>
        ))}
    </div>
    )
}

export default Chat
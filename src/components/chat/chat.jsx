// displays chat 
// this needs to call on the api and when choices are made it needs to give that choice to the api to save for later when results are counted

// this will be reading and writing but is not creating anything new
// doing the R and U in CRUD
import { useState } from 'react';

function Chat() {
    const [messages, setMessages] = useState([
        {id: 1, sender: "narrator", text: "Welcome to the Chat, Traveller!"},
    ])
    const [input, setInput] = useState("")
    
    function handleSend() {
        if (input.trim() === "") {
            setInput("")
            return
        }
        else {setMessages([...messages, 
            {id: Date.now(), sender: "user", text: input.trim()}
        ])
        setInput("")
        }}

    const [choices, setChoices] = useState([
        {option: 1, text: "Hello"},
        {option: 2, text: "How are you?"},
        {option: 3, text: "Good Bye"}
    ])
    function handleChoice(choice) {
        setMessages([...messages,
            {id: Date.now(), sender: "user", text: choice.text}
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
        <div>
            <input value={input} onChange={(e) => 
                setInput(e.target.value)
            } onKeyDown={(e) =>
                {if (e.key === "Enter") {
                    handleSend()
                }
            }}/>
        </div>
        <button onClick={handleSend}>Send</button>
    </div>
    )
}

export default Chat
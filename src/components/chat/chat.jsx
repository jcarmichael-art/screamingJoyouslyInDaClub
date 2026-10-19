// displays chat 
// this needs to call on the api and when choices are made it needs to give that choice to the api to save for later when results are counted

// this will be reading and writing but is not creating anything new
// doing the R and U in CRUD
import { useState } from 'react';

function Chat() {
    const [messages, setMessages] = useState([
        {id: 1, sender: "narrator", text: "Welcome to the Chat, Traveller!"},
        {id: 2, sender: "Maker", text: "Does this work?"}
    ])
    const [input, setInput] = useState("")
    return (
    <div>
        <div>
            {messages.map((message) => (
                <p key={message.id}>{message.text}</p>
            ))}
        </div>
        <div>
            <input value={input} onChange={(e) => 
                setInput(e.target.value)
            } />
        </div>
    </div>
    )
}

export default Chat
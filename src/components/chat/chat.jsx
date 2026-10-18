// displays chat 
// this needs to call on the api and when choices are made it needs to give that choice to the api to save for later when results are counted

// this will be reading and writing but is not creating anything new
// doing the R and U in CRUD
import { useState } from 'react';

function Chat() {
    const [messages, setMessages] = useState([{ id: 1, sender: "narrator", text: "Welcome, Traveller"}])

    return (
    <div>
        <p>{messages[0]}</p>
    </div>
    )
}

export default Chat
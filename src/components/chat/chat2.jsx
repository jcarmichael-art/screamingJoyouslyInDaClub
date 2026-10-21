
export default function Chat2({chats}) {
    for (let i = 0; i < chats.length; i++) {
        if (!chats.date){
                return (
        <div>
            <p>{chats[0].data_json.story}</p>
            <button>{chats[0].data_json.options[0]}</button>
            <button>{chats[0].data_json.options[1]}</button>
            <button>{chats[0].data_json.options[2]}</button>
        </div>
    )
        }
    }
}
const postObj = {'team': 2, 'body': {'type': 'chat',
                                    'story': 'A knight on a road, where does he go?',
                                    'options': ['Home', 'Fairyland', 'Highway 7'],
                                    'results':[['He finds three free hookers, he gets an aneurism'], ['He gets made a magical imp', "He's swallowed whole"], ['He fights a mythical beast and wins', 'He loses to the mythical beast and becomes a piece of the pavement']],
                                    'choice': '',
                                    'date': ''}}

import { useState, useEffect } from 'react';
function getStory() {
    const [text, setText] = useState("")
    return Chat2.data_json.story && Chat2.data_json.options
}

export default function Chat2(chats) {
    return (
        <div>
            <p>Hello!</p>
            <p>{chats[0].data_json.story}</p>
        </div>
    )
}


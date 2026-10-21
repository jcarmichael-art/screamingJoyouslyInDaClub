
export default function getRandomChat(chats) {
    const i = Math.floor(Math.random() * chats.length)
    return chats[i]

}
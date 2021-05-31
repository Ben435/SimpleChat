import { useSelector } from "react-redux"
import { selectMessages } from '../reducers/ChatMessages'

function ChatLog() {
    const messages = useSelector(selectMessages)
    return (
        <div>
            <p>Hello world!</p>
            { messages.map(message => <p>{message.content}</p>)}
        </div>
    )
}

export default ChatLog

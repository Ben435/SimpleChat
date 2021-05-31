import { configureStore } from '@reduxjs/toolkit'
import chatMessagesReducer from './reducers/ChatMessages'

export default configureStore({
    reducer: {
        ChatMessages: chatMessagesReducer,
    }
})

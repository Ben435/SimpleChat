import { createSlice } from '@reduxjs/toolkit'

export interface Message {
    authorUserId: string
    content: string
    sentTimeUtc: number
}

export interface ChatMessagesState {
    messages: Message[]
}

const initialState: ChatMessagesState = {
    messages: []
}

export const selectMessages = (state: { ChatMessages: ChatMessagesState }): Message[] => {
    console.log(state)
    return state.ChatMessages.messages
}

export const chatMessages = createSlice({
    name: 'ChatMessages',
    initialState,
    reducers: {
        addMessage: (state, action: { type: string, payload: Message }) => {
            state.messages.push(action.payload)
        }
    }
})

export default chatMessages.reducer

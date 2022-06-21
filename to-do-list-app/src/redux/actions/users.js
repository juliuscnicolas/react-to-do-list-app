import { SET_TODOITEM_INFO } from '../types'

export function setToDoItemInfo(payload) {
    return {
        type: SET_TODOITEM_INFO,
        payload
    }
}
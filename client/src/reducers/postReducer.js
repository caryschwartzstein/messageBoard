import {GET_ALL_POSTS, NEW_POST} from '../actions/types'

const initialState = {posts: []}

export default function(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case GET_ALL_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        case NEW_POST:
            return {
                ...state,
                posts: [action.newPost].concat(state.posts)
            }
        default: 
            return state
    }
}
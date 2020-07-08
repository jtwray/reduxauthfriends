let GET_FRIENDS_START,
    GET_FRIENDS_ERROR,
    GET_FRIENDS_SUCCESS

const initialState = {
    numFriends: "",
    currentUser: "",
    isLoading: false,
    isError: false,
    error: "",
    friends: [
        {
            name: 'johhny',
            age: 35,
            email: 'johnny@APPLE.seed',
            id: 1
        },
        {
            name: 'jacob',
            age: 32,
            email: 'jingle@HEIMER.schmidttt',
            id: 2
        },
    ],
}

const reducerIndex = (state = initialState, action) => {
    switch (action.type) {
        case GET_FRIENDS_START: {
            return { ...state, isLoading: true, }
        }
        case GET_FRIENDS_SUCCESS: {
            return { ...state, isLoading: false, friends: [...state.friends, action.payload] }
        }
        case GET_FRIENDS_ERROR: {
            return { ...state, isLoading: false, error: action.payload, isError: true }
        } default: { return { ...state } }
    }
}

export default reducerIndex
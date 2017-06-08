
const INITIAL_STATE = {
    auth_token: ''
}

export default function TokenReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case 'ADMINTOKEN':
            return Object.assign({}, state, { auth_token: action.authenticationTOKEN });

        case 'CLEARTOKEN':
            return Object.assign({}, state, { auth_token: action.delTOKEN })

        default: return state
    }
}
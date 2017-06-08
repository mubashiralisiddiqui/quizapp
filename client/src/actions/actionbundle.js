

export default class ActionBundle {

    static adminToken(tok) {
        return {
            type: 'ADMINTOKEN',
            authenticationTOKEN: tok
        }
    }

    static clearToken() {
        return {
            type: 'CLEARTOKEN',
            delTOKEN: ''
        }
    }
}
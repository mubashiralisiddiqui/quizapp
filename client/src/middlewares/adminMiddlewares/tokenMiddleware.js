import ActionBundle from '../../actions/actionbundle.js';

export default class TokenMiddlware {

    static saveHisToken(tok) {
        return (dispatch) => {
            dispatch(ActionBundle.adminToken(tok))
        }
    }

    static RemoveToken() {
        return (dispatch) => {
            dispatch(ActionBundle.clearToken());
        }
    }
}


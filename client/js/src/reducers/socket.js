import Socket from '../utils/socket';

const initialState = new Socket(`ws://${location.host}/websocket`);

export default function socket(state = initialState, action) {
    return state;
}
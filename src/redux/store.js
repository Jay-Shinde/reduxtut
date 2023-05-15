import { legacy_createStore as createStore } from 'redux';

const reducer = (state=0, actoin)=>{
    switch (actoin.type) {
        case 'INCR': return state+1;
            
            break;
        case 'DECR': return state-1;
            
            break;
    
        default: return state;
            break;
    }
}
export const store = createStore(reducer);
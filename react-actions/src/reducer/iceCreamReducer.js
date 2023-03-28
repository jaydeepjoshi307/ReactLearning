import { BUY_ICECREAM } from "../actions/iceCream/iceCreamTypes";

const intialState = {
    numOfIcecreams: 20
}

const iceCreamReducer = (state=intialState,action) =>{
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIcecreams: state.numOfIcecreams - 1
        }
        default: return state
    }
}

export default iceCreamReducer
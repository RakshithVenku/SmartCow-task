const strIntialState= ''

const inputReducer = (state = strIntialState, action) => {
    switch(action.type){
        case 'INPUT_STR' : {
            return action.payload
        }
        default : {
            return strIntialState
        }
    }
}

export default inputReducer
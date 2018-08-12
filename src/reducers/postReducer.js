const postReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_POST':
            return [action.data]
        default:
            return state;
    }  
}
export default postReducer;

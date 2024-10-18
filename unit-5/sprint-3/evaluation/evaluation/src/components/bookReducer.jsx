const initialState = {
    books : [],
    loading : false,
    error : null,

};

const bookReducer = (State = initialState,action) => {
    switch (action.type){
        case 'fetch data':
        default:
            return State;
    }
}

export default bookReducer;
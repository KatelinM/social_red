const initialState = {
    dialogs: [
        {id: 1, name: "Anna"},
        {id: 2, name: "Alex"},
        {id: 3, name: "Taylor"},
        {id: 4, name: "Swift"},
    ],
};

let dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case '':
            return state;
        default:
            return state
    }
};

export default dialogReducer
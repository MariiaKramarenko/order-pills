/*const ADD_ORDER = 'ADD-ORDER';


let initialState = {
    orders:[
        {Imie:' ', Nazwisko:' '}
    ],
    newOrder: " "
};


const orderReducer = (state = initialState , action) => {
    switch (action.type ){
        case ADD_ORDER:{
            let newOrder = {
                Imie: action.Imie,
                Nazwisko: action.Nazwisko
            };
            return {
                ...state,
                orders: [...state.orders, newOrder]
            };
        }


        default:
            return state;
    }
}

export const addPostActionCreator = (Imie, Nazwisko) => ({type: ADD_ORDER, Imie, Nazwisko, })


export default orderReducer;*/
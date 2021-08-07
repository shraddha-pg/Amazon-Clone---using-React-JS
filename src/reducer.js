export const initialState = {
    basket: [],
    user: null,
};
export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => { 
    console.log(action);

    switch(action.type){
        case "ADD_To_CART" :
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

            case 'EMPTY_BASKET': 
            return{
                ...state,
                basket: []
            }

        case "Remove_From_Basket":
            const index = state.basket.findIndex(
             (basketItem) => basketItem.id === action.id
            );

            let newBasket = [...state.basket];
            if(index >= 0)
            {
                newBasket.splice(index, 1 ); //use to remove the item, it as an array 

            }else {
                console.warn(
                    'Cant remove product (id: ${action.id}) as it is not in the basket !c '
                )
            }

            return{
                ...state, 
                basket: newBasket
            }

            case "SET_USER": 
            return{
                ...state,
                user: action.user
            }

            default:
                return state;
    }
};

export default reducer;
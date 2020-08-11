



// data yg masuk ketika orang belanja, definisikan state awal didalam reducer, data berupa array of Object.
const initialState = {
    product : [
        {id: 1, name: "Lemari", stock:20, price: 2999999},
        {id: 2, name: "Meja", stock:30, price: 4999999},
        {id: 3, name: "Kursi", stock:50, price: 1999999}
    ],
    Cart:[]
}

 const shopReducer = (state = initialState, action) => {
    //buat variabel penampung untuk cart dan index item yang terupdate
    let updatedCart;
    let updatedItemIndex;
    console.log("test")
    switch(action.type){
        //jika case add product
        case "ADD_PRODUCT_TO_PRODUCT":
            //update cartnya mengambil data dari state/initialstatenya si cart, berarti []
            updatedCart = [...state.cart];
        //findIndex mengembalikan index elemen pertama dalam array yang lolos 1 2 3,jika tidak ada, maka findindex akan return -1
        //console.log(updateCart);
        updatedItemIndex = updatedCart.findIndex(item => item.id === action.payload.id);
        //jika jumlah 0/[],push item,(item nama bebas)ditambah props quantity + 1
        if(updatedItemIndex < 0){
            updatedCart.push({...action.payload,quantity:1});
        }else{
            //jika item yang sama ditambahkan di cart,maka jumlah quantity nya ++(per click)
            let updatedItem = {
                ...updatedCart[updatedItemIndex]
            };
            updatedItem.quantity++;
            updatedCart[updatedItemIndex] = updatedItem;
            console.log(updatedCart[updatedItemIndex] = updatedItem);
        }
        return{...state, cart: updatedCart};
    case  "REMOVE_CART_PRODUCT":
        updatedCart = [...state.cart];

        updatedItemIndex = updatedCart.findIndex(item => item.id === action.payload.id);
        
        let updatedItem = {
            ...updatedCart[updatedItemIndex]
        };
        //console.log(updatedItemIndex);
        if(updatedItem.quantity <= 0) {
            updatedCart.splice(updatedItemIndex, 1);
            console.log(updatedCart);
        }else{
            updatedCart[updatedItemIndex] = updatedItem;
        }
        //console.log(updatedCard[updatedItemIndex] = updatedItem);
        return { ...state, cart: updatedCart};

        case "REMOVE-_ALL_CART_PRODUCT":
            return {...state,cart: []};
        default:
            return state
    }
}
export default shopReducer;
   
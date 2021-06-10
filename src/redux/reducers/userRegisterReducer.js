
const initalState = {
    nama : "",
    quote : "",
}

const userRegisterReducer = (state = initalState, action) =>{
    switch (action.type) {
        case "SET_USER_NAMA":
            return {
                ...state,
                nama: action.payload.nama, 
            };
        case "SET_USER_QUOTE":
            return {
                ...state,
                quote: action.payload.quote,
            }
        default:
            return state;
    }
}

export default userRegisterReducer;
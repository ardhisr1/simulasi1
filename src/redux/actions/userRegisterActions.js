const setNama = nama => {
    return  {
        type: "SET_USER_NAMA",
        payload: {
            nama: nama,
        }
    };
};

const setQuote = quote => {
    return {
        type: "SET_USER_QUOTE",
        payload: {
            quote: quote,
        }
    };
};

const registerUserSubmit = (nama, quote) => {
   
}

const userRegisterActions = {
    setNama,
    setQuote,
    registerUserSubmit,
}

export default userRegisterActions
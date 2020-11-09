
export const ADD_ITEM = "ADD_ITEM";
export const CLEAR_ALL = "CLEAR_ALL";

// Hard coding actions in
// export const addEggs = {
//     type: ADD_ITEM,
//     name: "Eggs",
//     price: 2.50,
//     key: Math.floor(Math.random() * 1000)
// };

// export const addJuice = {
//     type: ADD_ITEM,
//     name: "OJ",
//     price: 4.25,
//     key: Math.floor(Math.random() * 1000)
// };

// Action Creator
export const addItem = ({name, price}) => {
    return {
        type: ADD_ITEM,
        name: name,
        price: price,
        key: Math.floor(Math.random() * 1000)
    }
};

export const clearAll = () => {
    return {
        type: CLEAR_ALL,
    }
}
 
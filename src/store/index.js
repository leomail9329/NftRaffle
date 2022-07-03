import { createStore } from 'redux';
import Web3 from 'web3/dist/web3.min.js';


const web3 = new Web3(Web3.givenProvider);

const reducer = (state, action) => {
    if (action.type === "CONNECT_WALLET") {
        web3.eth.getAccounts((err, accounts) => {
            console.log("connected wallet: ", accounts[0]);
            store.dispatch({type: "RETURN_DATA", payload: {account: accounts[0]}});
            // return {...state, account: accounts[0]};
        })
    } else if (action.type === "RETURN_DATA") {
        return Object.assign({},state, action.payload);
    }
}


const store = createStore(reducer);
export default store;
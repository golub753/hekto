const defaultState = {
    currency: 'usd'
}

const RECHANGE_CURRENCY = "RECHANGE_CURRENCY";

export const currencyReducer = (state = defaultState, action) => {
    switch(action.type) {
        case RECHANGE_CURRENCY:
            return {...state, currency: action.payload}
        default:
            return state;
    }
}

export const rechangeCurrencyAction = (payload) => ({type: RECHANGE_CURRENCY, payload});
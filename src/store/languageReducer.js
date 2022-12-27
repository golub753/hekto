const defaultState = {
    language: 'en'
}

const RECHANGE_LANGUAGE = "RECHANGE_LANGUAGE";

export const languageReducer = (state = defaultState, action) => {
    switch(action.type) {
        case RECHANGE_LANGUAGE:
            return {...state, language: action.payload}
        default:
            return state;
    }
}

export const rechangeLanguageAction = (payload) => ({type: RECHANGE_LANGUAGE, payload});
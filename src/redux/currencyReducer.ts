import {ACTIONS_TYPE, CurrencyReducersTypes} from './actions';


export type CurrencyType = {
    currencyName: string;
    buyRate: number;
    sellRate: number;
};
export type CurrencyState = {
    currencies: Array<CurrencyType>;
    currentCurrency: string;
    isBuying: boolean;
    amountOfBYN: string;
    amountOfCurrency: string;
};

const initialState: CurrencyState = {
    currencies: [
        {
            currencyName: 'USD',
            buyRate: 2.62,
            sellRate: 2.58,
        },
        {
            currencyName: 'EUR',
            buyRate: 3.1,
            sellRate: 3.06,
        },
        {
            currencyName: 'RUR',
            buyRate: 0.0345,
            sellRate: 0.0341,
        },
    ],
    currentCurrency: 'USD',
    isBuying: true,
    amountOfBYN: '',
    amountOfCurrency: '',
};

export const currencyReducer = (state: CurrencyState = initialState, action: CurrencyReducersTypes): CurrencyState => {
    // @ts-ignore
    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE:
            return {
                ...state,
                // @ts-ignore
                amountOfBYN: action.payload.amountOfBYN,
                // @ts-ignore
                amountOfCurrency: action.payload.amountOfCurrency,
            }
        case ACTIONS_TYPE.CHANGE_CHANGE_ACTION:
            return {
                ...state,
                // @ts-ignore
                isBuying: action.payload.isBuying,
                amountOfBYN: '',
                amountOfCurrency: '',
            }
        case ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY:
            return {
                ...state,
                currentCurrency:action.payload.currentCurrency,
                amountOfBYN: '',
                amountOfCurrency: '',
            }
        default:
            return state;
    }
};

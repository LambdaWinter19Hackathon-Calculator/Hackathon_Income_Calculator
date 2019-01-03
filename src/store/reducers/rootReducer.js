import {
  GET_INPUT_DATA,
  YEARS_OF_WORK,
  ANNUAL_EARNINGS_BEFORE,
  ANNUAL_EARNINGS_AFTER,
  LIFETIME_EARNINGS_BEFORE,
  LIFETIME_EARNINGS_AFTER
} from "../actions/rootAction";

const initialState = {
  currentAge: null,
  retirementAge: null,
  beforeIncome: null,
  afterIncome: null,
  annualRaise: null,
  yearsOfWork: null,
  beforeEarnings: [],
  afterEarnings: [],
  beforeTotal: null,
  afterTotal: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INPUT_DATA:
      return {
        ...state,
        currentAge: action.payload.currentAge,
        retirementAge: action.payload.retirementAge,
        beforeIncome: action.payload.beforeIncome,
        afterIncome: action.payload.afterIncome,
        annualRaise: action.payload.annualRaise,
        yearsOfWork: action.payload.yearsOfWork
      };

    case YEARS_OF_WORK:
      return {
        ...state,
        yearsOfWork: action.payload
      };

    case ANNUAL_EARNINGS_BEFORE:
      return {
        ...state,
        beforeEarnings: action.payload
      };

    case ANNUAL_EARNINGS_AFTER:
      return {
        ...state,
        afterEarnings: action.payload
      };

    case LIFETIME_EARNINGS_BEFORE:
      return {
        ...state,
        beforeTotal: action.payload
      };

    case LIFETIME_EARNINGS_AFTER:
      return {
        ...state,
        beforeTotal: action.payload
      };

    default:
      return state;
  }
};

export default rootReducer;

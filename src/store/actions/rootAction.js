export const GET_INPUT_DATA = "GET_INPUT_DATA";
export const YEARS_OF_WORK = "YEARS_OF_WORK";
export const ANNUAL_EARNINGS_BEFORE = "ANNUAL_EARNINGS_BEFORE";
export const ANNUAL_EARNINGS_AFTER = "ANNUAL_EARNINGS_AFTER";
export const LIFETIME_EARNINGS_BEFORE = "LIFETIME_EARNINGS_BEFORE";
export const LIFETIME_EARNINGS_AFTER = "LIFETIME_EARNINGS_AFTER";
export const CUMULATIVE_EARNED_BEFORE = "CUMULATIVE_EARNED_BEFORE";
export const CUMULATIVE_EARNED_AFTER = "CUMULATIVE_EARNED_AFTER";
export const RESET = "RESET";
export const TWEET_MSG = "TWEET_MSG";

/* ------   Get input data from form and store in Redux   ------*/

export const getInputData = (inputData, cb) => {
  cb();

  return {
    type: GET_INPUT_DATA,
    payload: inputData
  };
};

/* ------   Return an array of yearly earnings based on the annual raise percentage   ------*/

export const annualEarningsBefore = (salary, annualRaise, yearsOfWork) => {
  let yearlyIncomes = [parseInt(salary)];
  let years = yearsOfWork;

  while (years > 1) {
    salary = parseInt(salary) + parseInt(salary) * annualRaise;
    yearlyIncomes.push(parseInt(salary));

    years--;
  }

  return {
    type: ANNUAL_EARNINGS_BEFORE,
    payload: yearlyIncomes
  };
};

export const annualEarningsAfter = (salary, annualRaise, yearsOfWork) => {
  let yearlyIncomes = [parseInt(salary)];
  let years = yearsOfWork;

  while (years > 1) {
    salary = parseInt(salary) + parseInt(salary) * annualRaise;
    yearlyIncomes.push(parseInt(salary));

    years--;
  }

  return {
    type: ANNUAL_EARNINGS_AFTER,
    payload: yearlyIncomes
  };
};

/* ------   Add up the total amount earned in user's lifetime of working   ------*/

export const totalEarnedBefore = earningsArray => {
  let lifetimeEarnings = earningsArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return {
    type: LIFETIME_EARNINGS_BEFORE,
    payload: lifetimeEarnings
  };
};

export const totalEarnedAfter = earningsArray => {
  let lifetimeEarnings = earningsArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return {
    type: LIFETIME_EARNINGS_AFTER,
    payload: lifetimeEarnings
  };
};

export const cumulativeEarnedBefore = array => {
  let total = 0;
  let x;
  let y;

  const cumulativeEarnings = array.map((el, index) => {
    x = index;
    total = total + el;
    y = total;
    return { x, y };
  });

  return {
    type: CUMULATIVE_EARNED_BEFORE,
    payload: cumulativeEarnings
  };
};

export const cumulativeEarnedAfter = array => {
  let total = 0;
  let x;
  let y;

  const cumulativeEarnings = array.map((el, index) => {
    x = index;
    total = total + el;
    y = total;
    return { x, y };
  });

  return {
    type: CUMULATIVE_EARNED_AFTER,
    payload: cumulativeEarnings
  };
};

export const reset = () => {
  return { type: RESET };
};

export const tweetMsg = (yearsOfWork, beforeTotal, afterTotal) => {
  const tweetText = `📉 Income before Lambda over ${yearsOfWork} years: ${beforeTotal}
  📈 Income after Lambda over ${yearsOfWork} years: ${afterTotal}
  🤑 Overall increase over ${yearsOfWork} years: ${afterTotal - beforeTotal}
    
    Check it out 👉🏼`;

  return {
    type: TWEET_MSG,
    payload: tweetText
  };
};

export const GET_INPUT_DATA = "GET_INPUT_DATA";
export const YEARS_OF_WORK = "YEARS_OF_WORK";
export const ANNUAL_EARNINGS_BEFORE = "ANNUAL_EARNINGS_BEFORE";
export const ANNUAL_EARNINGS_AFTER = "ANNUAL_EARNINGS_AFTER";
export const LIFETIME_EARNINGS_BEFORE = "LIFETIME_EARNINGS_BEFORE";
export const LIFETIME_EARNINGS_AFTER = "LIFETIME_EARNINGS_AFTER";

/* ------   Get input data from form and store in Redux   ------*/

export const getInputData = inputData => {
  return {
    type: YEARS_OF_WORK,
    payload: inputData
  };
};

/* ------   Determine how many years the user will work   ------*/

export const yearsOfWork = (currentAge, retirementAge) => {
  const yearsOfWork = retirementAge - currentAge;

  return {
    type: YEARS_OF_WORK,
    payload: yearsOfWork
  };
};

/* ------   Return an array of yearly earnings based on the annual raise percentage   ------*/

export const annualEarningsBefore = (salary, annualRaise, yearsOfWork) => {
  let yearlyIncomes = [parseInt(salary.toFixed())];
  let years = yearsOfWork;

  while (years > 1) {
    salary = salary + salary * annualRaise;
    yearlyIncomes.push(parseInt(salary.toFixed()));

    years--;
  }

  return {
    type: ANNUAL_EARNINGS_BEFORE,
    payload: yearlyIncomes
  };
};

export const annualEarningsAfter = (salary, annualRaise, yearsOfWork) => {
  let yearlyIncomes = [parseInt(salary.toFixed())];
  let years = yearsOfWork;

  while (years > 1) {
    salary = salary + salary * annualRaise;
    yearlyIncomes.push(parseInt(salary.toFixed()));

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

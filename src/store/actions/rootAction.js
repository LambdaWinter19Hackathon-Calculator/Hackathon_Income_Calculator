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
export const ISA_CALCULATOR = "ISA_CALCULATOR";
export const ISA_SALARIES = "ISA_SALARIES";
export const TOGGLE_EARNINGS = "TOGGLE_EARNINGS";
export const TOGGLE_ISA = "TOGGLE_ISA";

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
  let currentSalary = salary;
  let yearlyIncomes = [parseInt(salary)];
  let years = yearsOfWork;

  while (years > 1) {
    currentSalary =
      parseInt(currentSalary) + parseInt(currentSalary) * annualRaise;
    yearlyIncomes.push(parseInt(currentSalary));

    years--;
  }

  return {
    type: ANNUAL_EARNINGS_BEFORE,
    payload: yearlyIncomes
  };
};

export const annualEarningsAfter = (salary, annualRaise, yearsOfWork) => {
  let currentSalary = salary;
  let yearlyIncomes = [parseInt(salary)];
  let years = yearsOfWork;

  while (years > 1) {
    currentSalary =
      parseInt(currentSalary) + parseInt(currentSalary) * annualRaise;
    yearlyIncomes.push(parseInt(currentSalary));

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

/* ------   Returns an array of cumulative earnings totaled after each year   ------*/

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

/* ------   Reset the storeState   ------*/

export const reset = () => {
  return { type: RESET };
};

/* ------   Tweet button functionality   ------*/

export const tweetMsg = (yearsOfWork, beforeTotal, afterTotal) => {
  const tweetText = `📉 Income before Lambda over ${yearsOfWork} years: $${beforeTotal}
  📈 Income after Lambda over ${yearsOfWork} years: $${afterTotal}
  🤑 Overall increase over ${yearsOfWork} years: $${afterTotal - beforeTotal}
    
    Check it out 👉🏼`;

  return {
    type: TWEET_MSG,
    payload: tweetText
  };
};

/* ------  ISA Calculation   ------*/

export const isaCalc = salary => {
  let monthlyPayment = parseFloat(((salary * 0.17) / 12).toFixed(2));
  let isaPayments = [];
  let tuitionTotal = null;
  let tuitionBalance = 30000;
  let lastPayment = null;

  while (tuitionTotal < 30000 && isaPayments.length < 24) {
    if (monthlyPayment > tuitionBalance) {
      lastPayment = parseFloat(tuitionBalance.toFixed(2));
      isaPayments.push(lastPayment);
    } else {
      isaPayments.push(monthlyPayment);
    }
    tuitionTotal = parseFloat((tuitionTotal + monthlyPayment).toFixed(2));
    tuitionBalance = tuitionBalance - monthlyPayment;

    if (tuitionTotal.toFixed(2) > 30000) {
      tuitionTotal = 30000;
    }
  }

  return {
    type: ISA_CALCULATOR,
    monthlyPayment: monthlyPayment,
    isaPayments: isaPayments,
    tuitionTotal: tuitionTotal,
    paymentMonths: isaPayments.length
  };
};

/* ------  ISA annual payment over 2 years   ------*/

export const isaSalaries = (tuitionTotal, earningsArray) => {
  const firstYearAmount = parseFloat((earningsArray[0] * 0.17).toFixed(2));
  const secondYearAmount = tuitionTotal - firstYearAmount;

  const firstYearEarnings = earningsArray[0] - firstYearAmount;
  const secondYearEarnings = earningsArray[1] - secondYearAmount;

  earningsArray.splice(0, 1, firstYearEarnings);
  earningsArray.splice(1, 1, secondYearEarnings);

  return {
    type: ISA_SALARIES,
    payload: earningsArray
  };
};

/* ------  Toggle output components   ------*/

export const toggleEarnings = () => {
  return {
    type: TOGGLE_EARNINGS
  };
};

export const toggleIsa = () => {
  return {
    type: TOGGLE_ISA
  };
};

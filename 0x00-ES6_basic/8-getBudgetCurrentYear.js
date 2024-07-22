function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }
  
  export default function getBudgetForCurrentYear(income, gdp, capita) {
    const budget = {};
  
    budget[`income-${getCurrentYear()}`];
    budget[`gdp-${getCurrentYear()}`];
    budget[`capita-${getCurrentYear()}`];
  
    return budget;
  }
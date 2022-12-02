export function calculator(income, days) {
  let monthlyIncome = parseFloat(income);
  let daysOff = parseFloat(days);

  let paidByEmployer = 0;
  let paidByInsurance = 0;
  let dayspaidByEmployer = 0;
  let daysPaidByInsurance = 0;

  let Compensation = {
    paidByEmployer,
    paidByInsurance,
    dayspaidByEmployer,
    daysPaidByInsurance,
  };

  // calculate daily income
  let dailyIncome = (monthlyIncome / 26).toFixed(2);

  // first 3 days are not compensated
  if (daysOff < 4) {
    Compensation.paidByEmployer = 0;
    Compensation.paidByInsurance = 0;
    Compensation.dayspaidByEmployer = 0;
    Compensation.daysPaidByInsurance = 0;
    return Compensation;

    // if 3 < days < 9 --> only Emplyer compensates
  } else if (daysOff > 3 && daysOff < 9) {
    let tempEmployerDays = daysOff - 3;
    Compensation.dayspaidByEmployer = tempEmployerDays;
    Compensation.daysPaidByInsurance = 0;
    Compensation.paidByEmployer = (
      tempEmployerDays *
      dailyIncome *
      0.7
    ).toFixed(2);
    Compensation.paidByInsurance = 0;
    return Compensation;

    // if days > 8, Insurance paid days = days - 3(nobody) - 5(emplyer). Insurance pays for all of the rest days.
  } else if (daysOff > 8) {
    let tempEmployerDays = 5;
    let tempInsuranceDays = daysOff - tempEmployerDays - 3;
    Compensation.dayspaidByEmployer = tempEmployerDays;
    Compensation.daysPaidByInsurance = tempInsuranceDays;
    Compensation.paidByEmployer = (
      tempEmployerDays *
      dailyIncome *
      0.7
    ).toFixed(2);
    Compensation.paidByInsurance = (
      tempInsuranceDays *
      dailyIncome *
      0.7
    ).toFixed(2);
    return Compensation;
  } else {
    return "Can not Calculate";
  }
}

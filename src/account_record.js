class AccountRecord {

  printStatement() {
    return "date || credit || debit || balance";
  }

  getCurrentDate(dateClassInstance = new Date()) {
    let day = dateClassInstance.getDate();
    let month = dateClassInstance.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }
    let year = dateClassInstance.getFullYear();
    return `${day}/${month}/${year}`;
  }

}

module.exports = AccountRecord;
class Format {

  static formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  static formatNumber(amount) {
    return parseFloat(amount).toFixed(2);
  }

  static formatTransaction(date, amount, balance, type) {
    let template = ["||", "||", "||"];
    date = this.formatDate(date);
    amount = this.formatNumber(amount);
    balance = this.formatNumber(balance);
    template.splice(0, 0, date);
    if (type === "withdrawal") {
      template.splice(3, 0, amount);
    } else if (type === "deposit") {
      template.splice(2, 0, amount);
    }
    template.push(balance);
    return template.join(" ");
  }

}

module.exports = Format;
class Format {
  static formatDate(date) {
    const day = date.getDate();
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  static formatNumber(amount) {
    return parseFloat(amount).toFixed(2);
  }

  static formatTransaction(date, amount, balance, type) {
    const template = ['||', '||', '||'];
    const formattedDate = this.formatDate(date);
    const formattedAmount = this.formatNumber(amount);
    const formattedBalance = this.formatNumber(balance);
    template.splice(0, 0, formattedDate);
    if (type === 'withdrawal') {
      template.splice(3, 0, formattedAmount);
    } else if (type === 'deposit') {
      template.splice(2, 0, formattedAmount);
    }
    template.push(formattedBalance);
    return template.join(' ');
  }
}

module.exports = Format;

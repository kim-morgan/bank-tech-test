class Format {

  static getCurrentDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

}

module.exports = Format;
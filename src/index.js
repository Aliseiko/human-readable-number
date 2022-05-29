module.exports = function toReadable(number) {
    const matrixToTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    if (number < 20) return matrixToTwenty[number];

    const matrixTens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const [unit, tens = 0, hundreds = 0] = number.toString().split('').reverse().map(el => +el);

    let unitText = '';
    const less100 = (tens * 10 + unit);
    if (0 < less100 && less100 < 20) {
        unitText = ` ${matrixToTwenty[less100]}`;
    } else if (unit) {
        unitText = ` ${matrixToTwenty[unit]}`;
    }

    const tensText = (tens >= 2) ? ` ${matrixTens[tens]}` : '';
    const hundredsText = (hundreds) ? matrixToTwenty[hundreds] + ' hundred' : '';

    return (hundredsText + tensText + unitText).trim();
}

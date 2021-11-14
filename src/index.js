module.exports = function toReadable(number) {
    const matrixToTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        matrixTens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const unit = Number(String(number).split('').reverse()[0]),
        tens = Number(String(number).split('').reverse()[1]) || 0,
        hundreds = Number(String(number).split('').reverse()[2]) || 0;

    let unitText = '',
        tensText = '',
        hundredsText = '';

    if (number == 0) {
        return matrixToTwenty[number];
    }
    if (tens < 2 && unit != 0) {
        unitText = ` ${matrixToTwenty[tens * 10 + unit]}`;
    } else if (tens >= 2 && unit != 0) {
        unitText = ` ${matrixToTwenty[unit]}`;
    } else if (tens == 1 && unit == 0) {
        unitText = ' ten';
    }

    if (tens >= 2) {
        tensText = ` ${matrixTens[tens]}`;
    }

    if (hundreds > 0) {
        hundredsText = matrixToTwenty[hundreds] + ' hundred';
    }

    return (hundredsText + tensText + unitText).trim()
}

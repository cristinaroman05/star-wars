const getRomanNumber = (number) => {
    if (!+number) return false;
    let digits = String(+number).split('');
    let key = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
        '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
        '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var roman = '', i = 3;
    while (i--) roman = (key[+digits.pop() + (i * 10)] || '') + roman;
    return Array(+digits.join('') + 1).join('M') + roman;
}
const mapOptions = (options, option) =>{
    let optionFormated = [];

    options.forEach((element, i) => {
        const stringParts = element.split("/");
        let idOption = stringParts[stringParts.length -2];
        let auxObject ={
            urlImg:'assets/images/' + option + '/' + idOption + 'jpg',
            urlFetch: element
        }
        optionFormated.push(auxObject);
    });
    return optionFormated;
}
const addEventListenerToOptions = (option, options) => {
    let optionLinks = [...document.getElementsByClassName(`detail__options-img--${option}`)];
    optionLinks.forEach((element,i) => {
        element.addEventListener('click', () => {
            printPage(option.toUpperCase(), options[i].urlFetch);
        });
    });
}
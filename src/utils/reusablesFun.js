export function encryptData(arrayToEncode, times = 10) {
    try {
        return numbersToAction(JSON.stringify(arrayToEncode), 'en', times) + "(---)" + times;;

    } catch (error) {

    }
    return arrayToEncode;
}

export function decryptData(jsonString, times = 10) {
    try {
        var dataCaller = `${jsonString}`.split("(---)");

        if (Array.isArray(dataCaller) && jsonString.includes('(---)')) {
            var getTimeEncode = dataCaller[dataCaller.length - 1];
            dataCaller.pop();
            var data = dataCaller.join('');
            return isJSON(numbersToAction(data, 'de', getTimeEncode))
        }


    } catch (error) {
        console.log(error);
    }
    return jsonString
}

function numbersToAction(str, type = 'de', times = 10) {
    let values = str;
    let inCheker = 0
    for (let index = 0; index < times; index++) {
        if (type == 'en') {
            values = btoa(values)
        } else {
            values = atob(values)
        }
        inCheker = index;

    }
    return inCheker > 0 ? values : ''

}
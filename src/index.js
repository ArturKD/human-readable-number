module.exports =
    function toReadable (number) {
    const arr = [];
    const string = String(number);
    const num1 = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const num10 = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];
    const num100 = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion'];

    for (let i = 0; i < string.length; i++){
        arr.push(string[i]);
    };

    function numbersUnderThousand(a) {
        const string = String(a);
        let string1;
        if (a === 0) {
            string1 = 'zero'
        } else if (a < 20) {
            string1 = num1[a];
        } else if (a < 100) {
            string1 = num10[string[0]] + ' ' + num1[string[1]];
        } else if (Number(arr[1] + arr[0]) < 10) {
            string1 = num1[string[0]] + ' hundred ' + num1[string[2]];
        } else if (Number(arr[1] + arr[0]) < 20) {
            string1 = num1[string[0]] + ' hundred ' + num1[string[1] + string[2]];
        } else  {
            string1 = num1[string[0]] + ' hundred ' + num10[string[1]] + ' ' + num1[string[2]];
        }
        string1 = string1.replace(/\s+/g,' ');
        return string1.trim();
    }

    function numbers(b) {
        const string = String(b);
        a = Number(b);
        if (a === 0) { return ''
        } else if (a < 20) {
            return num1[a];
        } else if (a < 100) {
            return num10[string[0]] + ' ' + num1[string[1]];
        } else if (Number(arr[1] + arr[0]) < 10) {
            return num1[string[0]] + ' hundred ' + num1[string[2]];
        } else if (Number(arr[1] + arr[0]) < 20) {
            return num1[string[0]] + ' hundred ' + num1[string[1] + string[2]];
        } else  {
            return  num1[string[0]] + ' hundred ' + num10[string[1]] + ' ' + num1[string[2]];
        }

    }

    if (arr.length < 4){
        return numbersUnderThousand(number)
    } else {
        arr.reverse();
        let size = 3;
        let b = [];
        for (let i = 0; i < arr.length; i += size) {
            b.push(arr.slice(i, i + size));
        }
        let c = [];
        for (let o = 0; b.length > o; o++) {
            c.push(b[o].reverse().join(''));
        }
        let readableArray = [];
        c.reverse();
        let counter = 0;
        for (let i = 0; i < c.length; i++) {
            if (Number(c[i]) > 0) {
                readableArray.push(numbers(c[counter]) + ' ' + num100[c.length - (counter + 1)]);
                counter++;
            } else {
                counter++;
            }
        }
        readableArray = readableArray.join(' ').replace(/\s+/g,' ' );
        return readableArray.trim();

    }
}



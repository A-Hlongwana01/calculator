let str = "1 + (1 +/o2"

const compute = (str = '') => {
    let total = 0;
    str = str.match(/[+\−]*(\.\d+|\d+(\.\d+)?)/g) || [];
    while (str.length) {
       total += parseFloat(str.shift());
    };
    return total;
 };

 console.log(compute(str))
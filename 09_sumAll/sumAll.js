const sumAll = function(x, y) {
    let sum = 0;
    if (Number.isInteger(x) && Number.isInteger(y)){
        if ( x < 0 || y < 0) return 'ERROR';
        if (x > y){
            for(let i = y; i <= x; i++){
                sum += i;
            }
        } else if (y > x){
            for(let i = x; i <= y; i++){
                sum += i;
            }
        } else sum = x + y;
        return sum;
    } else return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;

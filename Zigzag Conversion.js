'use strict';

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1)
        return s;

    // condition 1 for all rows...extra condition for middle rows
    let res = "";
    for(let i = 0; i < numRows; i++) {
        let increment = 2 * (numRows - 1);

        for(let j = i; j < s.length; j+=increment) {
            res += s[j];
            if(i > 0 && i < numRows - 1 &&
                (j + increment - 2 * i) < s.length)
                res += s[j + increment - 2 * i];    // extra condition
        }
    }

    return res;
};

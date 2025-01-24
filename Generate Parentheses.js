"use strict";

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];

    function solve(str, open, close) {
        if(str.length === (2*n)) {
            res.push(str);
            return;
        }

        if(open < n)
            solve(str + "(", open + 1, close);
        if(close < open)
            solve(str + ")", open, close + 1);
    }

    solve("", 0, 0);
    return res;
};

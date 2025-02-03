/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    let odd = 0, even = Number.MAX_SAFE_INTEGER;
    let map = new Map();

    for(let i = 0; i < s.length; i++) {

        if(map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        }
        else {
            map.set(s[i], 1);
        }
    }

    for(const value of map.values()) {

        if(value % 2 == 0) {
            if(value < even)    // max difference needed (so minimum even)
                even = value;
        }
        else {
            if(value > odd)
                odd = value;
        }
    }

    return (odd - even);
};

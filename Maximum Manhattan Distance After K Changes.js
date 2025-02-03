/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxDistance = function(s, k) {
    let res = 0;

    for(const hor of ['E', 'W']) {
        for(const ver of ['N', 'S']) {
            let remainingK = k , netX = 0, netY = 0;
            let str = s.split('');

            for(let i = 0; i < str.length; i++) {
                if(str[i] === hor && remainingK) {
                    str[i] = (str[i] === 'E')? 'W' : 'E';
                    remainingK--;
                }
                else if(str[i] === ver && remainingK) {
                    str[i] = (str[i] === 'N')? 'S' : 'N';
                    remainingK--;
                }

                netX += (str[i] === 'E');
                netX -= (str[i] === 'W');
                netY += (str[i] === 'N');
                netY -= (str[i] === 'S');

                res = Math.max(res, Math.abs(netX) + Math.abs(netY));
            }

        }
    }

    return res;
};

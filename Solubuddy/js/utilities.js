/**
 * Created by David Taylor on 3/3/2017.
 */
// Returns the significant digits of a number.
// @param {Number|String} num
// @return Returns -1 if invalid input, otherwise will return a positive number.
//This is a function found online written by Larry Battle  http://stackexchange.com/users/250828/larry-battle
function countSigFigs(num) {
    if (!isFinite(Number(num))) {
        return -1;
    }
    var n = String(num).trim(),
        FIND_FRONT_ZEROS_SIGN_DOT_EXP = /^[\D0]+|\.|([e][^e]+)$/g,
        FIND_RIGHT_ZEROS = /0+$/g;

    if (!/\./.test(num)) {
        n = n.replace(FIND_RIGHT_ZEROS, "");
    }
    return n.replace(FIND_FRONT_ZEROS_SIGN_DOT_EXP, "").length;
};

/*In chemistry when determing the ammount of sigFigs precision must be maintained.
 * To do this the precision of the least precise factor will be the precision for a product
 * @param array<numbers> factors
 * @return  returns the count of sigfigs from the factor with the least ammount*/
function findPrecision(factors)
{
    var minSignificantFigures = 0;
    for(var i = 0; i< factors.length; i++)
    {
        if(i === 0)//first iteration
        {
            minSignificantFigures = countSigFigs(factors[i]);
            continue;
        }
        if(countSigFigs(factors[i])<minSignificantFigures)
        {
            minSignificantFigures = countSigFigs(factors[i]);
        }
    }
    return minSignificantFigures;
}
//returns ture if the parameters are with 1% of each other.
function isWithinOnePercent(userVal, calculatedVal)
{
    var diffrence = Math.abs(calculatedVal - userVal) ;
    var decimal = diffrence/calculatedVal;
    var percent = decimal *100;
    if (percent <= 1)
        return true;
    else
        return percent;
}
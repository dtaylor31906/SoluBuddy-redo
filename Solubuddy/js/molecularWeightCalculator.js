//contains functions for calculation the molecular weight given the chemical formula
function molecularWeightCalculator(formula)
{
    //need to create a mapping of every element in formula to the number of times it needs to be counted
    //in the formula a Symbol without a scalar assumes a 1.
    var symbolMap = new Map();//key = symbol, value = count
    var capitalLetter = /[A-Z]/;
    var lowerCase = /a-z/;
    var digit = /0-9/;
    var usedSymbols = [];
    var currentSymbol;
    var currentCount;

    //Find the symbols used and store them
    if(typeof formula === 'string')
    {
        for(var i = 0; i< formula.length; i++)
        {
            if(formula.charAt(i).search(capitalLetter)!= -1)//if the character is a capital letter
            {
                currentSymbol = formula.charAt(i);//add charcter as part of current chemical symbol

                //check next char
                if(i< formula.length-1)//if the outer if statement just checked the last char in string
                {
                    //add the symbol to the map.
                    if(usedSymbols.contains(currentSymbol))//if the current symbol has been found already
                    {
                        //add 1  to the count in the map
                        symbolMap.set(currentSymbol,symbolMap.get(currentSymbol)+1);
                        currentSymbol = "";
                    }
                    else
                    {
                        //add symbol to 'usedSymbols' then the map
                        usedSymbols.push(currentSymbol);
                        symbolMap.set(currentSymbol,1);
                        currentSymbol = "";
                    }
                }
                else
                {
                    if(formula.charAt(i+1).search(lowerCaseLetter) != -1)//if the char after a capital letter is a lowercase
                    {
                        //add the letter as part of current symbol
                        currentSymbol = currentSymbol+ formula.charAt(i+1);
                        //now the next symbol to be added is in the field'current symbol' we need to check if there are numbers behind it

                        if(formula.charAt(i+2).search(digit) != -1)//if next symbol is a number
                        {
                            currentCount = getCount(formula,i+2);
                            //add symbol to map
                            if(usedSymbols.contains(currentSymbol))//if the current symbol has been found already
                            {
                                //add the count in the map
                                symbolMap.set(currentSymbol,symbolMap.get(currentSymbol)+currentCount);
                                currentSymbol = "";
                                currentCount ="";
                            }
                            else
                            {
                                //add symbol to 'usedSymbols' then the map
                                usedSymbols.push(currentSymbol);
                                symbolMap.set(currentSymbol,currentCount);
                                currentSymbol = "";
                                currentCount="";
                            }
                        }
                    }
                }

            }

        }
    }
    else
    {
        return NaN;
    }
    //takes in a the formula string and returns the number found at the startIndex
    function getCount(formula, startIndex)
    {
        for(var i =startIndex ;i < formula.length ;i++)
        {
            if(formula.charAt(i).search(digit)==-1)//if char is not a number
            {
                //return the chars from startindex to i-1 as a number
                var number = formula.substring(startIndex,i-1);
                return parseInt(number);
            }
        }
    }
}
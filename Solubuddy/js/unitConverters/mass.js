/**
 * Created by David Taylor on 2/23/2017.
 * This file will contain the functions used to convert units of Mass on the site.
 * The majority of these functions takes a value and unit of measure, and output the converted value in grams.
 */

function toGrams(value, unit)
{

    switch (unit)
    {
        case "kilogram":
            var conversionFactor = 1000;
            return value*conversionFactor;
            break;
        case "milligram":
            var conversionFactor = .001;
            return value*conversionFactor;
            break;
        case "microgram":
            var conversionFactor =.000001 ;
            return value*conversionFactor;
            break;
    }
}

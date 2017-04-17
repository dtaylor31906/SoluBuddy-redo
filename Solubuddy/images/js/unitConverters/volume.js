/**
 * Created by David Taylor on 2/23/2017.
 */
function toMilliliter(value, unit)
{
    switch (unit)
    {
        case "liter":
            var conversionFactor = 1000;
            return value*conversionFactor;
            break;
        case "microliter":
            var conversionFactor = .001;
            return value*conversionFactor;
            break;
    }
}
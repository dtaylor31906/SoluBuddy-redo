/**
 * Created by David Taylor on 3/3/2017.
 */
function Dilution(solventName, soluteFormula, desiredVolume, desiredMolarity,stckSolnMolarity)
{
    var volumeToAdd = findVolume(desiredVolume,desiredMolarity,stckSolnMolarity);
    var factors = [desiredVolume,desiredMolarity,stckSolnMolarity];

    this.solventName = solventName;
    this.soluteFormula = soluteFormula;
    this.desiredVolume = desiredVolume;
    this.stckSolnMolarity = stckSolnMolarity;
    this.precision = findPrecision(factors);
    Dilution.prototype.getVolume = function ()
    {
        return Number(volumeToAdd.toPrecision(this.precision));
    }
}

function SerialDilution(solventName, soluteFormula, stckSolnMolarity,numberOfDilutions,volumeOfFlask,volumeTransfered)
{
    this.solventName = solventName;
    this.soluteFormula = soluteFormula;
    this.stckSolnMolarity = stckSolnMolarity;
    this.numberOfDilutions = numberOfDilutions;
    this.volumeOfFlask = volumeOfFlask;
    this.volumeTransfered = volumeTransfered;

    this.dilutionFactor = volumeOfFlask/volumeTransfered;

    //returns the an array
    //the index is the number of of flask - 1 because the start index is 0 of course
    //the content of the array at an index is the concetration of solutein that flask
    SerialDilution.prototype.getConcentrations = function ()
    {
        var concetrations = [];
        for(var i = 0; i < numberOfDilutions; i++)
        {
            //this is the formula for calculating the concetration of a flask in the series.
            concetrations[i] = stckSolnMolarity*Math.pow((1/this.dilutionFactor),(i));
        }
    }
}

function findVolume(desiredVolume,desiredMolarity,stckSolnMolarity)
{
    return (desiredVolume*desiredMolarity)/stckSolnMolarity;
}

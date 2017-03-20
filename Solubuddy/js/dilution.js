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
        return volumeToAdd.toPrecision(this.precision);
    }
}

function findVolume(desiredVolume,desiredMolarity,stckSolnMolarity)
{
    return (desiredVolume*desiredMolarity)/stckSolnMolarity;
}

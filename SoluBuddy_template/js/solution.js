/**
 * Created by David on 2/21/2017.
 */

//This is a constructor used to make a solution object when the solute is to added by weight.
//
function SolutionByMass(solventName, soluteFormula, soluteMolecularWeight, totalVolume, desiredConcentration)
{
    var factors = [soluteMolecularWeight,totalVolume,desiredConcentration];//place all the factors in an array
    var soluteMass = findMass(soluteMolecularWeight,totalVolume,desiredConcentration);

    this.precision = findPrecision(factors);
    this.solventName = solventName;
    this.soluteFormula = soluteFormula;
    this.soluteMolecularWeight = soluteMolecularWeight;// in g/mol
    this.totalVolume = totalVolume;//in mL
    this.desiredConcentration = desiredConcentration;// in mol/L
    SolutionByMass.prototype.getMass = function()
    {
        return soluteMass.toPrecision(this.precision);
    }
}
//This is a construtor used to make a solution object when the solute is added by volume.
//it takes in another object
function SolutionByVolume(SolutionByMass, density)
{
    this.SolutionByMass = SolutionByMass;
    this.density = density;
    this.soluteVolume = SolutionByMass.soluteMass * density;
    var factors = SolutionByMass.factors.push(density);
    this.precision = findPrecision(factors);
    SolutionByVolume.prototype.getVolume = function ()
    {
        return this.soluteVolume.toPrecision(this.precision);
    }

}
//This is a constructor used to make as solution object when the solute is inside a stock solution and the mass percent
//of the solute is known
//@param1 is an object containing pertinent data dor the calculations
//@param2 is a the mass percent(grams) passed in as a decimal, for example 56.7% would be passed as .567.
function SolutionByMassStckSoln(SolutionByMass,massPercent)
{
    this.SolutionByMass = SolutionByMass;
    this.massPercent = massPercent;
    this.soluteMass = this.SolutionByMass.soluteMass * massPercent;//(in grams)
    var factors = SolutionByMass.factors.push(massPercent)
    this.precision = findPrecision(factors);
    SolutionByMassStckSoln.prototype.getMass = function ()
    {
        return this.soluteMass.toPrecision(this.precision);
    }

}




/*This is a constructor for making solution object when the solute is in a stock soltuion and it is to be transferd
* by volume
* @param1 is an object containing pertinent data dor the calculations
* param2 is the density(mL/g) of the stock solution*/
function SolutionByVolumeStckSoln(SolutionByMassStckSoln, density)
{
    this.SolutionByMassStckSoln = SolutionByMassStckSoln;
    this.density = density;
    this.soluteVolume = SolutionByMassStckSoln.soluteMass*density;

    var factors = SolutionByMassStckSoln.factors.push(density);
    this.precision = findPrecision(factors);
    SolutionByMassStckSoln.prototype.getVolume = function ()
    {
        return this.soluteVolume.toPrecision(this.precision);
    }
}


/*returns the mass of solute to be added to the solvent to make the desired solution
* @param number (in g/mol) soluteMolecularWright
* @param number (in mL) totalVolume
* @param number (in mol/L) desiredConcentration
* @return Returns the the mass of solute to be added (in grams)*/
function findMass(soluteMolecularWeight, totalVolume, desiredConcentration)
{
    var mass = soluteMolecularWeight * totalVolume *desiredConcentration;//in grams
    //now that the mass is found the matter of significant figures need to be handled
    //while multiplying the answer given should have the number of significant figures from the factor with the least.
    return mass
}


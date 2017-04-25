/**
 * Created by Nova on 4/24/2017.
 */
$(document).ready(function ()
{

    const login = new Login();
    //set up event handler for forms.

    let gravForm = $("#GravForm-stock");
    gravForm.submit(function (event)
    {
        event.preventDefault();
        gravimetricSubmit(gravForm.serializeArray());
    });
    let volForm = $("#VolForm-stock");
    volForm.submit(function (event)
    {
        event.preventDefault();
        volumetricSubmit(volForm.serializeArray());
    });

    let SoluteFormula = $("#solute-grav");
    SoluteFormula.blur(function (event) {
        let moleculareWeight = molecularWeightCalculator(SoluteFormula.val());
        $("#molecular-weight").val(moleculareWeight);
    })

    let SoluteFormulaVol = $("#solute-vol");
    SoluteFormulaVol.blur(function (event) {
        let moleculareWeight = molecularWeightCalculator(SoluteFormulaVol.val());
        $("#molecular-weight-vol").val(moleculareWeight);
    })
});
function gravimetricSubmit(form)
{
    var navigableForm = {};
    $.each(form, function (i, field) {
        navigableForm[field.name] = field.value;
    });
    //create solution object from user input

    var subSolution = new SolutionByMass(navigableForm["solvent-grav"], navigableForm["solute-grav"], navigableForm["molecular-weight"]
        ,navigableForm["total-volume-grav"],navigableForm["sol-concentration-grav"]);
    let solution = new SolutionByMassStckSoln(subSolution,navigableForm["massPercentGrav"]);

    //check user answer against calculations
    var userAnswer = navigableForm["mass-add-grav"];
    let calculatedVal = solution.getMass();
    var percentError = isCloseEnough(userAnswer,calculatedVal);//currently set to return true is answer is within .25%
    let stckSolnError = $("#stckSolnGravError");
    if(percentError === true)
    {
        stckSolnError.html("Your solution is correct we calculated: " + calculatedVal);
        stckSolnError.css("color","blue");
    }
    else if(typeof percentError == "number" && percentError > .25)
    {
        stckSolnError.html("Your Answer is "+ percentError.toFixed(2) +"% off.");
        stckSolnError.css("color","red");
    }
}
function volumetricSubmit(form)
{
    var navigableForm = {};
    $.each(form, function (i, field) {
        navigableForm[field.name] = field.value;
    });

    //create solution object from user input

    let subSubSolution = new SolutionByMass(navigableForm["solvent"], navigableForm["solute"], navigableForm["molecular-weight"]
        ,navigableForm["soln-volume-vol"],navigableForm["soln-concentration-vol"]);
    let subSolution = new SolutionByMassStckSoln(subSubSolution,navigableForm["massPercentVol"]);
    let solution = new SolutionByVolumeStckSoln(subSolution,navigableForm["solute-density-vol"]);

    //check user answer against calculations
    var userAnswer = navigableForm["vol-solute-added-vol"];
    let calculatedVal = solution.getVolume();
    var percentError = isCloseEnough(userAnswer,calculatedVal);//currently set to return true is answer is within .25%
    let stckSolnError = $("#stckSolnVolError");
    if(percentError === true)
    {
        stckSolnError.html("Your solution is correct we calculated: " + calculatedVal);
        stckSolnError.css("color","blue");
    }
    else if(typeof percentError == "number" && percentError > .25)
    {
        stckSolnError.html("Your Answer is "+ percentError.toFixed(2) +"% off.");
        stckSolnError.css("color","red");
    }
}
function changeStockFormGrav() {
    document.getElementById('volumetric').checked = false;
    document.getElementById('form-section-vol').style.display = "none";
    document.getElementById('form-section-grav').style.display = "block";
    document.getElementById('msg-title').innerHTML = "Creating Solution Using Concentrated Stock by Gravimetric Transfer";
    document.getElementById('list').innerHTML =
        "<li>Enter the name for the solvent you will use in the solution <br><i>e.g water</i></li><br>"+
        "<li>Enter the formula for the solute you will use in the solution <br><i>e.g CH3OH</i></li><br>"+
        "<li>Enter the molecular weight of the solute in g/mol</li><br>"+
        "<li>Enter the desired total volume</li><br>"+
        "<li>Enter the solution concentration in mol/L</li><br>"+
        "<li>Enter the mass percent of the solute found in the stock<i> (number only)</i></li><br>"+
        "<li>Enter your calculation for the mass of solute you will add</li>";
}
function changeStockFormVol() {
    document.getElementById('gravimetric').checked = false;
    document.getElementById('form-section-vol').style.display = "block";
    document.getElementById('form-section-grav').style.display = "none";
    document.getElementById('msg-title').innerHTML = "Creating A Solution Using Concentrated Stock by Volumetric Transfer";
    document.getElementById('list').innerHTML =
        "<li>Enter the name for the solvent you will use in the solution <br><i>e.g water</i></li><br>"+
        "<li>Enter the formula for the solute you will use in the solution <br><i>e.g CH3OH</i></li><br>"+
        "<li>Enter the molecular weight of the solute in g/mol</li><br>"+
        "<li>Enter the desired total volume</li><br>"+
        "<li>Enter the solution concentration in mol/L</li><br>"+
        "<li>Enter the mass percent of the solute found in the stock<i> (number only)</i></li><br>"+
        "<li>Enter the density of the solute</li><br>"+
        "<li>Enter your calculation for the volume of solute you will add</li>";
}
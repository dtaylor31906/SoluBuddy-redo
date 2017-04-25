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
    testGravimetric();
    testVolumetric();
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

//script that controls the bulk of the 'solutions.html'
//TODO: add some message that alert users that answers between 1 and maybe 3 percent off maybe due to sigFig error.
//for example if a user suubmits an answer with 4 sigfig but should only hasve 2 based on our calculations.
//The site well return error sometimes because the rounding done will shift the answers far enough away frome each other
// even though calculations were done correctly otherwise.

//TODO:mitigate this problem by implementing an array of answers by using the number.prototype.toPrecision method
//this will allow you to check if a user answer is the same as the correct answer written at a diffrent percision
/*put maybe 3 or 4 above and below the correct precision which is already calculated by our code.
* then check the user answers against the correct answer written at the correct precision and wrong precision
* then return helpful information to teach the student that the sigFigs or direct to one of DR.Krellers video on the subject
* this maybe the way we should have written this in the beggining.meh you live and you learn.*/
$(document).ready(function ()
{

    const login = new Login();
    //set up event handler for forms.
    $("#GravForm-pure").submit(function (event)
    {
        event.preventDefault();
        gravimetricSubmit($("#GravForm-pure").serializeArray());
    });
    $("#VolForm-pure").submit(function (event)
    {
        event.preventDefault();
        volumetricSubmit($("#VolForm-pure").serializeArray());
    });
    $("#solute-vol").blur(function (event)
    {
        let moleculareWeight = molecularWeightCalculator($("#solute-vol").val());
        $("#molecular-weight-vol").val(moleculareWeight);
    });
    $("#solute-grav").blur(function (event)
    {
        let moleculareWeight = molecularWeightCalculator($("#solute-grav").val());
        $("#molecular-weight-grav").val(moleculareWeight);
    });
});
//form is an array
//creates an object from the values in the form
function gravimetricSubmit(form)
{
    var navigableForm = {};
    $.each(form, function (i, field) {
        navigableForm[field.name] = field.value;
    });

    var solvent = navigableForm["solvent"];
    var solute = navigableForm["solute"];
    var molecularWeight = navigableForm["molecular-weight-grav"];
    var totalVolume = navigableForm["sol-volume-grav"];
    var concentration = navigableForm["soln-concentration-grav"];
    var solution = new SolutionByMass(solvent, solute, molecularWeight,totalVolume,concentration);
    //check user answer against calculations
    let userAnswer = navigableForm["mass-solute-added-grav"];
    let percentError = isCloseEnough(userAnswer,solution.getMass());

    if(percentError === true)
    {
        vex.dialog.alert("Your solution is correct we calculated: " + solution.getMass());
    }
    else if(typeof percentError == "number" && percentError > .25)
    {
        vex.dialog.alert("Your Answer is "+ percentError.toFixed(2) +"% off.");
    }
}



function volumetricSubmit(form)
{
    //create solution object from user input
    var navigableForm = {};
    $.each(form, function (i, field) {
        navigableForm[field.name] = field.value;
    });
    var subSolution = new SolutionByMass(navigableForm["solvent"], navigableForm["solute"], navigableForm["molecular-weight-vol"]
    ,navigableForm["soln-volume-vol"],navigableForm["soln-concentration-vol"]);
    var solution = new SolutionByVolume(subSolution,navigableForm["sol-density-vol"]);

    //check user answer against calculations
    var userAnswer = navigableForm["vol-solute-added-vol"];
    var percentError = isCloseEnough(userAnswer,solution.getVolume());//currently set to return true is answer is within .25%
    if(percentError === true)
    {
        vex.dialog.alert("Your solution is correct we calculated: " + solution.getVolume());
    }
    else if(typeof percentError == "number" && percentError > .25)
    {
        vex.dialog.alert("Your Answer is "+ percentError.toFixed(2) +"% off.");
    }
}
function changeSolFormVol() {
    document.getElementById('gravimetric').checked = false;
    document.getElementById('form-section-vol').style.display = "block";
    document.getElementById('form-section-grav').style.display = "none";
    document.getElementById('msg-title').innerHTML = "Creating A Solution by Volumetric Transfer";
    document.getElementById('list').innerHTML =
        "<li>Enter the name for the solvent you will use in the solution <br><i>e.g water</i></li><br>"+
        "<li>Enter the formula for the solute you will use in the solution <br><i>e.g NaCl</i></li><br>"+
        "<li>Enter the molecular weight of the solute in g/mol</li><br>"+
        "<li>Enter the density of the solute in g/mL</li><br>"+
        "<li>Enter the desired total volume of the solution</li><br>"+
        "<li>Enter the desired concentration of the solution</li><br>"+
        "<li>Enter your calculation result for the volume of solute to add to achieve desired concentration</li><br>";
}

function changeSolFormGrav() {
    document.getElementById('volumetric').checked = false;
    document.getElementById('form-section-vol').style.display = "none";
    document.getElementById('form-section-grav').style.display = "block";
    document.getElementById('msg-title').innerHTML = "Creating A Solution by Gravimetric Transfer";
    document.getElementById('list').innerHTML =
        "<li>Enter the name for the solvent you will use in the solution <br><i>e.g water</i></li><br>"+
        "<li>Enter the formula for the solute you will use in the solution <br><i>e.g CH3OH</i></li><br>"+
        "<li>Enter the molecular weight of the solute in g/mol</li><br>"+
        "<li>Enter the desired total volume of the solution</li><br>"+
        "<li>Enter the desired concentration of the solution in mol/L</li><br>"+
        "<li>Enter your calculation result for the mass of solute to add to achieve desired concentration</li><br>";
}

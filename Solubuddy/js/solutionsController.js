//script that controls the bulk of the 'solutions.html'
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
});
//form is an array
//creates an object from the values in the form
function gravimetricSubmit(form)
{
    var navigableForm = {};
    $.each(form, function (i, field) {
        navigableForm[field.name] = field.value;
    });
    console.log(navigableForm);
    var solvent = navigableForm["solvent"];
    var solute = navigableForm["solute"];
    var molecularWeight = navigableForm["molecular-weight-grav"];
    var totalVolume = navigableForm["sol-volume-grav"];
    var concentration = navigableForm["soln-concentration-grav"];
    var solution = new SolutionByMass(solvent, solute
    ,molecularWeight,totalVolume,concentration);
    //var solution = new SolutionByMass(form["solvent"]);
    console.log(navigableForm);
    console.log(solution.desiredConcentration);
    //console.log(form[1].name);prints solvent
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
    var percentError = isWithinOnePercent(userAnswer,solution.getVolume());
    if(percentError === true)
    {
        $("#volumeToAddError").html("Your solution is correct we calculated: " + solution.getVolume());
        $("#volumeToAddError").css("color","blue");
    }
    else if(typeof percentError == "number" && percentError > .25)
    {
        $("#volumeToAddError").html("Your Answer is "+ percentError.toFixed(2) +"% off.");
        $("#volumeToAddError").css("color","red");
    }
}
function changeSolFormVol() {
    document.getElementById('gravimetric').checked = false;
    document.getElementById('form-section-vol').style.display = "block";
    document.getElementById('form-section-grav').style.display = "none";
    document.getElementById('msg-title').innerHTML = "Creating A Solution by Volumetric Transfer";
    document.getElementById('list').innerHTML =
        "<li>Enter the name for the solvent you will use in the solution <br><i>e.g water</i></li><br>"+
        "<li>Enter the formula for the solute you will use in the solution <br><i>e.g CH3OH</i></li><br>"+
        "<li>Enter the molecular weight of the solute in g/mL</li><br>"+
        "<li>Enter the density of the solute in g/mL</li><br>"+
        "<li>Enter the total volume of the solution</li><br>"+
        "<li>Enter the concentration of the solution</li><br>"+
        "<li>Enter the volume of solute you will add</li><br>";
}

function changeSolFormGrav() {
    document.getElementById('volumetric').checked = false;
    document.getElementById('form-section-vol').style.display = "none";
    document.getElementById('form-section-grav').style.display = "block";
    document.getElementById('msg-title').innerHTML = "Creating A Solution by Gravimetric Transfer";
    document.getElementById('list').innerHTML =
        "<li>Enter the name for the solvent you will use in the solution <br><i>e.g water</i></li><br>"+
        "<li>Enter the formula for the solute you will use in the solution <br><i>e.g CH3OH</i></li><br>"+
        "<li>Enter the molecular weight of the solute in g/mL</li><br>"+
        "<li>Enter the solution volume</li><br>"+
        "<li>Enter the solution concentration in mol/L</li><br>"+
        "<li>Enter the mass of the solute to add</li><br>";
}

function singleDilutionSubmit(form)
{
    var navigableForm = {};
    $.each(form, function (i, field) {
        navigableForm[field.name] = field.value;
    });
    //create solution object from user input

    let solution = new Dilution(navigableForm["solvent"],navigableForm["solute"], navigableForm["finalVolume"]
    ,navigableForm["finalConcentration"],navigableForm["stockSolutionConcentration"]);

    //check user answer against calculations
    var userAnswer = navigableForm["volumeToAddSingle"];
    let calculatedVal = solution.getVolume();
    var percentError = isCloseEnough(userAnswer,calculatedVal);//currently set to return true is answer is within .25%
    if(percentError === true)
    {
        vex.dialog.alert("Your solution is correct we calculated: " + calculatedVal);
    }
    else if(typeof percentError == "number" && percentError > .25)
    {
        vex.dialog.alert("Your Answer is "+ percentError.toFixed(2) +"% off.");
    }
}
function serialDilutionSubmit(form)
{
    var navigableForm = {};
    $.each(form, function (i, field) {
        navigableForm[field.name] = field.value;
    });

    //create solution object from user input

    let solution = new SerialDilution(navigableForm["solvent"],navigableForm["solute"],navigableForm["molarity-multiple"]
    ,navigableForm["numberOfFlask"], navigableForm["flask-volume-multiple"], navigableForm["transfer-vol-multiple"]);


    //check user answer against calculations
    var userAnswer = navigableForm["concentrationOfFinalFlask"];
    let solutionList = solution.getConcentrations();
    let calculatedVal = solutionList[solutionList.length -1];
    var percentError = isCloseEnough(userAnswer,calculatedVal);//currently set to return true is answer is within .25%
    if(percentError === true)
    {
        vex.dialog.alert("Your solution is correct we calculated: " + calculatedVal);
    }
    else if(typeof percentError == "number" && percentError > .25)
    {
        vex.dialog.alert("Your Answer is "+ percentError.toFixed(2) +"% off.");
    }
}
$(document).ready(function ()
{

    const login = new Login();
    //set up event handler for forms.

    let singleDilution = $("#singleDilution");
    singleDilution.submit(function (event)
    {
        event.preventDefault();
        singleDilutionSubmit(singleDilution.serializeArray());
    });
    let serialDilution = $("#serialDilution");
    serialDilution.submit(function (event)
    {
        event.preventDefault();
        serialDilutionSubmit(serialDilution.serializeArray());
    });
/*  TESTING USAGE
    testSingleDilution();
    testSerialDilution();
*/

});

function changeFormMultiple() {
    document.getElementById('single').checked = false;
    document.getElementById('form-section-single-dilution').style.display = "none";
    document.getElementById('form-section-serial-dilution').style.display = "block";
    document.getElementById('msg-title').innerHTML = "Creating Multiple Dilutions by Transfer";
    document.getElementById('list').innerHTML =
        "<li>Enter the name for the solvent you will use in the dilution <br><i>e.g water</i></li><br>"+
        "<li>Enter the name or formula for the solute in the stock solution <br><i>e.g HCl</i></li><br>"+
        "<li>Enter the concentration of the solute in the stock solution in mol/L</li><br>"+
        "<li>Enter the quantity of dilution flasks you will use</li><br>"+
        "<li>Enter the volume of the flasks mL</li><br>"+
        "<li>Enter the volume of solution you will transfer</li><br>"+
        "<li>Enter your calculation result for the concentration of the flask with the lowest molarity</li><br>";
}
function changeFormSingle()
{
    document.getElementById('multiple').checked = false;
    document.getElementById('form-section-single-dilution').style.display = "block";
    document.getElementById('form-section-serial-dilution').style.display = "none";
    document.getElementById('msg-title').innerHTML = "Creating a Single Dilution";
    document.getElementById('list').innerHTML =
        "<li>Enter the name for the solvent you will use in the dilution <br><i>e.g water</i></li><br>"+
        "<li>Enter the name or formula for the solute in the stock solution <br><i>e.g HCl</i></li><br>"+
        "<li>Enter the desired volume of the final solution</li><br>"+
        "<li>Enter the desired final concentration in mol/L</li><br>"+
        "<li>Enter the concentration of the solute in the stock solution in mol/L</li><br>"+
        "<li>Enter your calculation result for the volume of the solute to add</li><br>";
}

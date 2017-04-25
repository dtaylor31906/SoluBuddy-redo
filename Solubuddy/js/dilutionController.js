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
    let stckSolnError = $("#volumeToAddError");
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
function serialDilutionSubmit(form)
{

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
    let serialDilution = $("#serialdilution");
    serialDilution.submit(function (event)
    {
        event.preventDefault();
        serialDilutionSubmit(serialDilution.serializeArray());
    });
    testsingleDilution();
    //testserialDilution();

});

function changeFormMultiple() {
    document.getElementById('single').checked = false;
    document.getElementById('form-section-single-dilution').style.display = "none";
    document.getElementById('form-section-serial-dilution').style.display = "block";
    document.getElementById('msg-title').innerHTML = "Creating Multiple Dilutions by Transfer";
    document.getElementById('list').innerHTML =
        "<li>Enter the name for the solvent you will use in the solution <br><i>e.g water</i></li><br>"+
        "<li>Enter the formula for the solute you will use in the solution <br><i>e.g CH3OH</i></li><br>"+
        "<li>Enter the molarity of the stock solution</li><br>"+
        "<li>Enter the quantity of dilution flasks you will use</li><br>"+
        "<li>Enter the dilution flask volume in mL</li><br>"+
        "<li>Enter the volume of solution you will transfer</li><br>";
}
function changeFormSingle() {
    document.getElementById('multiple').checked = false;
    document.getElementById('form-section-single-dilution').style.display = "block";
    document.getElementById('form-section-serial-dilution').style.display = "none";
    document.getElementById('msg-title').innerHTML = "Creating a Single Dilution";
    document.getElementById('list').innerHTML =
        "<li>Enter the name for the solvent you will in the dilution <br><i>e.g water</i></li><br>"+
        "<li>Enter the name or formula for the solute in the stock solution <br><i>e.g HCl</i></li><br>"+
        "<li>Enter the desired volume of the final solution</li><br>"+
        "<li>Enter the desired final concentration in mol/L</li><br>"+
        "<li>Enter the concentration of the solute in the stock solution in mol/L</li><br>"+
        "<li>Enter the volume of the solute to add</li><br>";
}
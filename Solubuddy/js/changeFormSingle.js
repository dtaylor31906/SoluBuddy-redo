function changeFormSingle() {
    document.getElementById('multiple').checked = false;
    document.getElementById('form-section-single-dilution').style.display = "block";
    document.getElementById('form-section-multiple-dilution').style.display = "none";
    document.getElementById('msg-title').innerHTML = "Creating a Single Dilution";
    document.getElementById('list').innerHTML =
    "<li>Enter the name for the solvent you will use in the solution <br><i>e.g water</i></li><br>"+
    "<li>Enter the formula for the solute you will use in the solution <br><i>e.g CH3OH</i></li><br>"+
    "<li>Enter the total volume of the solution</li><br>"+
    "<li>Enter the solution concentration in mol/L</li><br>"+
    "<li>Enter the solute concentration in mol/L</li><br>"+
    "<li>Enter the volume of the solute to add</li><br>";
}

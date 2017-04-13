function changeFormMultiple() {
    document.getElementById('single').checked = false;
    document.getElementById('form-section-single-dilution').style.display = "none";
    document.getElementById('form-section-multiple-dilution').style.display = "block";
    document.getElementById('msg-title').innerHTML = "Creating Multiple Dilutions by Transfer";
    document.getElementById('list').innerHTML =
    "<li>Enter the name for the solvent you will use in the solution <br><i>e.g water</i></li><br>"+
    "<li>Enter the formula for the solute you will use in the solution <br><i>e.g CH3OH</i></li><br>"+
    "<li>Enter the molarity of the stock solution</li><br>"+
    "<li>Enter the quantity of dilution flasks you will use</li><br>"+
    "<li>Enter the dilution flask volume in mL</li><br>"+
    "<li>Enter the volume of solution you will transfer</li><br>";
}

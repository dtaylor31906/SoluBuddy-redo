function changeStockFormVol() {
    document.getElementById('gravimetric').checked = false;
    document.getElementById('form-section-vol').style.display = "block";
    document.getElementById('form-section-grav').style.display = "none";
    document.getElementById('msg-title').innerHTML = "Creating A Solution Using Concentrated Stock by Volumetric Transfer";
    document.getElementById('list').innerHTML =
    "<li>Enter the name for the solvent you will use in the solution <br><i>e.g water</i></li><br>"+
    "<li>Enter the formula for the solute you will use in the solution <br><i>e.g CH3OH</i></li><br>"+
    "<li>Enter the solution total volume in mL</li><br>"+
    "<li>Enter the solution concentration in mol/L</li><br>"+
    "<li>Enter the mass of solute by percent<i> (number only)</i></li><br>"+
    "<li>Enter the density of the solute</li><br>"+
    "<li>Enter the volume of solute you will add</li><br>";
}

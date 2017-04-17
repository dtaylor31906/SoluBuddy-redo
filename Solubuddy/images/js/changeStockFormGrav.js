function changeStockFormGrav() {
    document.getElementById('volumetric').checked = false;
    document.getElementById('form-section-vol').style.display = "none";
    document.getElementById('form-section-grav').style.display = "block";
    document.getElementById('msg-title').innerHTML = "Creating Solution Using Concentrated Stock by Gravimetric Transfer";
    document.getElementById('list').innerHTML =
    "<li>Enter the name for the solvent you will use in the solution <br><i>e.g water</i></li><br>"+
    "<li>Enter the formula for the solute you will use in the solution <br><i>e.g CH3OH</i></li><br>"+
    "<li>Enter the solution total volume</li><br>"+
    "<li>Enter the solution concentration</li><br>"+
    "<li>Enter the mass of solute by percentage<i> (number only)</i></li><br>"+
    "<li>Enter the mass of the solute to add</li><br>";
}

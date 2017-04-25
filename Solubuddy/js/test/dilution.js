function testSingleDilution()
{
    $("#solventSingle").val("water");
    $("#soluteSingle").val("KMNO4");
    $("#finalVolume").val(500.0);
    $("#finalConcentration").val(.01);
    $("#stockSolutionConcentration").val(1);
    $("#volumeToAddSingle").val(5.00);
}

function testSerialDilution()
{
    $("#solvent-multiple").val("water");
    $("#solute-multiple").val("salt");
    $("#molarity-multiple").val(1);
    $("#numberOfFlask").val(4);
    $("#transfer-vol-multiple").val("100.0");
    $("#flask-volume-multiple").val("1000.0");
    $("#finalFlaskConcentration").val(.001);
}
//these functions well set the form to so that the calculate button will return a positve outcome
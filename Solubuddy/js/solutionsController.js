//script that controls the bulk of the 'solutions.html'
$(document).ready(function ()
{
    //set up event handler for forms.
    $("#gravform-pure").submit(function (event)
    {
        event.preventDefault();
        gravimetricSubmit($("#gravform-pure").serializeArray());
    })
    $("#volform-pure").submit(function (event)
    {
        event.preventDefault();
        volumetricSubmit($("#volform-pure").serializeArray());
    })
});
//form is an array
//creates an object from the values in the form
function gravimetricSubmit(form)
{
    //var solution = new SolutionByMass(form["solvent"]);
    console.log(form);
    console.log(form["solvent"]);
}
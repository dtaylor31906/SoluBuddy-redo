
let isChecked = false;
$(function (){
const login = new Login();
    $("#tutorial-box").click(function ()
    {
        //send status to database.
            console.log(this.checked);
            saveCheckState(this.checked);
    //check if closeTutorial check box has checked
    })

    $("#logoutButton").click(function () {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            console.log("LOGGED OUT");
        }).catch(function(error) {
            // An error happened.
            console.log("error");
        });
    })//click event for logout button.
    function saveCheckState(isChecked)
    {
        const checkBoxRef  = firebase.database().ref('users/'+login.getUid());
        var displayName = login.soluUser.displayName;
        checkBoxRef.set
        ({
            displayName,//not really needed good for readability
            doNotShowTutorial: isChecked
        });//uid is set in login.js
    }
});
function closeTutorial() {
    window.location.href = 'index.html';
}
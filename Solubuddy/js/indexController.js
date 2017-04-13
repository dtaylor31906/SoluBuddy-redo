/*var checkBoxRef;*/
var isChecked = false;
$(function () {
    var login = new loginInit();
    login.startUp().then(function (currentUser) {


        var userID= null;
        for(var i =0; i <30; i++)
        {
            if(typeof currentUser === 'undefined')
            {
                setTimeout(function () {
                    console.log(firebase.currentUser)
                },10)
            }
            else
            {
                userID = firebase.currentUser;
                break;
            }
        }
        console.log(userID);
        console.log(currentUser.uid);
        checkBoxRef  = firebase.database().ref('users/'+userID);
        checkBoxRef.once('value')
            .then( function(data) {

                console.log(data.val());
                var dataobject = data.toJSON();
                console.log(dataobject.doNotShowTutorial);
                isChecked = data.val().doNotShowTutorial;
                if(isChecked)
                {//navigate pass closeTutorial
                    console.log(isChecked);
                    closeTutorial();
                }
                else
                {
                    showTutorial();
                }
            }, function(error) {
                console.log(error);
            });//calls the database
    });//handles login
    $("#tutorial-box").click(function () {
        //send status to database.
        console.log(this.checked);
        saveCheckState(this.checked);

    })
    //check if closeTutorial check box has checked



})

function saveCheckState(isChecked) {
    var displayName = currentUser.displayName;
    checkBoxRef.set({
        displayName,//not really needed good for readability
        doNotShowTutorial: isChecked
    })//uid is set in login.js
}
function showTutorial() {
    $("#main-tutorial").css("display","block");
}
function closeTutorial() {
    //document.getElementById('main-tutorial').style.display = "none";
    document.getElementById('main-selections').style.display = "block";
}

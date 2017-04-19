/*var checkBoxRef;*/
var isChecked = false;

$(function () {
    const login = new Login();
    $("#tutorial-box").click(function () {
        //send status to database.
        console.log(this.checked);
        saveCheckState(this.checked);

    })
    //check if closeTutorial check box has checked
    $("#logoutButton").click(function () {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            console.log("LOGGED OUT");
        }).catch(function(error) {
            // An error happened.
            console.log("error");
        });
    })//click event for logout button.
 /*   firebase.currentUser.reload();
    console.log(firebase.currentUser+ " "+ count++);

    var uidCheck = login.getUid();
    while(uidCheck === null)
      {
          setTimeout(function () {
              uidCheck = login.getUid()
              console.log(count+=100);
          },100)
      }
    console.log(login.getUid() + " "+ count++);
    console.log(firebase.currentUser+ " "+ count++);
    firebase.currentUser.reload();
    console.log(firebase.currentUser);*/


})

//TODO:try firebase.currentUser.reload();


$(function () {//onReady
    initFireBase();
    initApp();
    $("#logoutButton").click(function () {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            console.log("LOGGED OUT");
        }).catch(function(error) {
            // An error happened.
            console.log("error");
        });
    })//click event for logout button.
})
//code snippet for any page that uses firebase
function initFireBase() {
    var config = {
        apiKey: "AIzaSyDmWKJArULZoTI8GvpFTagrJ8-48sr7y6k",
        authDomain: "solubuddy-ffc1c.firebaseapp.com",
        databaseURL: "https://solubuddy-ffc1c.firebaseio.com",
        projectId: "solubuddy-ffc1c",
        storageBucket: "solubuddy-ffc1c.appspot.com",
        messagingSenderId: "690710200191"
    };
    firebase.initializeApp(config);
}
//method use to handle authentication. listen for changes in user state
function initApp() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var uid = user.uid;
            var providerData = user.providerData;
            console.log(photoURL);
        } else {
            // User is signed out.
            //send user to login
            window.location.href = 'fireBaseAuth.html';
        }
    }, function(error) {
        console.log(error);
    });
};
/**
 * Created by Nova on 4/11/2017.
 */
$(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDmWKJArULZoTI8GvpFTagrJ8-48sr7y6k",
        authDomain: "solubuddy-ffc1c.firebaseapp.com",
        databaseURL: "https://solubuddy-ffc1c.firebaseio.com",
        projectId: "solubuddy-ffc1c",
        storageBucket: "solubuddy-ffc1c.appspot.com",
        messagingSenderId: "690710200191"
    };
    firebase.initializeApp(config);
    initApp();
    $("#logoutButton").click(function () {
        firebase.auth().signOut();//doesnt work
    })
})

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
            console.log(user);
        } else {
            // User is signed out.
            //document.getElementById('sign-in-status').textContent = 'Signed out';
            /*document.getElementById('sign-in').textContent = 'Sign in';
            document.getElementById('account-details').textContent = 'null';*/
            window.location.href = 'fireBaseAuth.html';
        }
    }, function(error) {
        console.log(error);
    });
};
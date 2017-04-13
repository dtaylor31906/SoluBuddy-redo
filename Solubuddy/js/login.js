function loginInit(){
    var user;
    this.currentUser = firebase.currentUser;
    loginInit.prototype.startUp = function () {
        let p1= new Promise(function(resolve, reject){
            initFireBase();
            initApp();
            resolve(firebase.currentUser);
            reject(firebase.currentUser);
        });
         return p1;
    };
}

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
            currentUser = user;
            console.log("uid:" + user.uid);
            $("#logoutButton").click(function () {
                firebase.auth().signOut().then(function() {
                    // Sign-out successful.
                    console.log("LOGGED OUT");
                }).catch(function(error) {
                    // An error happened.
                    console.log("error");
                });
            })//click event for logout button.

        } else {
            // User is signed out.
            //send user to login
            window.location.href = 'fireBaseAuth.html';
            return null;
        }
    }, function(error) {
        console.log(error);
    });
};
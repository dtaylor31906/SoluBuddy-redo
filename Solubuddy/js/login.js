var count = 0;
var tutorialCount;//helps to make sure tutorial is only showed once per login.
initFireBase();
function Login(){
    tutorialCount = 0;
    this.auth = firebase.auth();
    this.database = firebase.database();
    this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
}
Login.prototype.getUser = function () {
    return this.soluUser;
}
Login.prototype.getUid = function () {
    console.log(this.soluUser.uid+ ""+ count++) ;
    return this.soluUser.uid;
}
function needTutorial (user) {
    this.checkBoxRef  = firebase.database().ref('users/'+user.uid);
    this.checkBoxRef.once('value')
        .then( function(data) {

            console.log(data.val());
            var dataobject = data.toJSON();
            console.log(dataobject.doNotShowTutorial);
            isChecked = data.val().doNotShowTutorial;
            if(!isChecked)
            {
                let location = window.location.href;

                var test = /tutorial/.test(location);
                if(!test && tutorialCount < 1) {
                    tutorialCount++;
                    window.location.href = 'tutorial.html';

                }
            }

        }, function(error) {
            console.log(error);
        });//calls the database
}
Login.prototype.onAuthStateChanged = function (user) {
    if (user) {

        // User is signed in.
        this.soluUser = user;
        //tutorial check
        needTutorial(user);
        console.log("uid:" + this.soluUser.uid+ count++);

    }
    else {
        // User is signed out.
        //send user to login
        tutorialCount = 0;
        window.location.href = 'fireBaseAuth.html';
    }
}, function(error) {
    console.log(error);
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



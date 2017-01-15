function signIn() {
    var provider = new firebase.auth.FacebookAuthProvider();
    //provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log(result);
    }).catch(function(error) {
        console.error(error);
    });
    
}

function fetchData() {
    alert('Fetch Data');
    return;
    /*
    document.getElementById('data').innerText = '';
    var test = firebase.database().ref('test').once('value').then(snap => {
        var json = JSON.stringify(snap.val());
        document.getElementById('data').innerText = json;
        console.log(json);
    }).catch(function(error) {
        alert(error.message);
        console.error(error);
    });
    */
}

function signOut() {
    firebase.auth().signOut();
}

firebase.auth().onAuthStateChanged(function(user) {
    console.log('auth: ' + user);
    if (user) {
        //User is signed in.
        document.getElementById('user').innerText = user.email;
        document.getElementById("signIn").style.display = "none";
        document.getElementById("signOut").style.display = "inline";
        document.getElementById("fetchData").style.display = "inline";
    }else{
        document.getElementById('user').innerText = 'anonymous';
        document.getElementById("signIn").style.display = "inline";
        document.getElementById("signOut").style.display = "none";
        document.getElementById("fetchData").style.display = "none";
    }
});

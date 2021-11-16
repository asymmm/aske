var lastLogin = 'alatoo';
var lastPassword = '12345';
var try1 = "Try again"
var bass = document.getElementById("bass")
function bas(){
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    if (login == lastLogin && password == lastPassword){
        document.getElementById("go").innerHTML = bass
    }
    else{
        document.getElementById("demo").innerHTML = try1
    }
}

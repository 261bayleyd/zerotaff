function check(){
    let guess = document.getElementById("guess").value;
    let result = document.getElementById("result");
    if (guess == "Zero2025"){
window.location.replace("https://https://sites.google.com/view/zero-clothing/staff-portal");
    }
    else{
        result.innerHTML = "Incorrect password";
    }
}
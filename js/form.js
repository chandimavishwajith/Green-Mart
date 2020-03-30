function validateForm() {
    var name = document.forms["reg"]["name"];
    var email = document.forms["reg"]["email"];
    var message = document.forms["reg"]["message"];

    if (name.value == "") {
        alert("Full Name must be filled out");
        name.focus();
        return false;
    }
    if (email.value == "") {
        alert("E-mail must be filled out");
        email.focus();
        return false;
    }
    if (message.value == "") {
        alert("A message should be included");
        message.focus();
        return false;
    }
}
    function Validate() {

        return (validateFirstName() && validateLastName() && validPhoneNo() && validEmail() && validateComments());
    }

    function validateFirstName() {

        if (document.getElementById("FirstName").value == "") {
            alert("Enter First Name");
            return false;
        }
        return true;
    }

    function validateLastName() {

        if (document.getElementById("LastName").value == "") {
            alert("Enter Last Name");
            return false;
        }
        return true;
    }

    function validPhoneNo() {
        var phoneNo = document.getElementById("Phone");
        var validphoneno = /^[6-9]{1}\d{9}$/;
        if (phoneNo.value != "" && (phoneNo.value.match(validphoneno))) {
            return true;
        } else {
            alert("Invalid Phone Number");
            return false;
        }
    }

    function validEmail() {
        var email = document.getElementById("Email");
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value) && (/.co.*$/.test(email.value))) {
            return (true)
        }
        alert("Invalid email address!")
        return (false)
    }

    function validateComments() {

        if (document.getElementById("Comment").value == "") {
            alert("Please Provide Comment !!")
            return false;
        }
        return true;
    }
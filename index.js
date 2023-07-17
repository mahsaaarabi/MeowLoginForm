document.getElementById("myform")[2].addEventListener("click", function(e) {
    e.preventDefault();
    if (document.getElementById('myform')[1].value.length > 7 && document.getElementById('myform')[0].value == "") {
        document.getElementById('myform')[0].style.border = "2px solid red";
        document.getElementById('myform')[1].style.border = "0px solid transparent";
    } else {
        if (document.getElementById('myform')[0].value.length > 0) {
            document.getElementById('myform')[0].style.border = "0px solid transparent";
            if (document.getElementById('myform')[1].value.length > 7) {

                // If evething was good enough, it's working...
                console.log(`Your username is ${document.getElementById('myform')[0].value} and your password is ${document.getElementById('myform')[1].value}`);
                document.getElementById('myform')[1].style.border = "0px solid transparent";
                document.getElementById("myform").submit();
            } else {
                document.getElementById('myform')[1].style.border = "2px solid red";
            }
        } else if (document.getElementById('myform')[0].value.length < 1 || document.getElementById('myform')[0].value == "" && document.getElementById('myform')[1].value.length < 8) {
            document.getElementById('myform')[0].style.border = "2px solid red";
            document.getElementById('myform')[1].style.border = "2px solid red";
        } else {
            document.getElementById('myform')[0].style.border = "2px solid red";
        }
    }
});
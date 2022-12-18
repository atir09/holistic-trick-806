

function openlogin() {
    document.getElementById("loginslide").style.width = "400px";
}

function closelogin() {
    document.getElementById("loginslide").style.width = "0";
}
function SwitchRegister() {
    document.getElementById("loginbtn").style.display = "none";
    document.getElementById("register").style.display = "block";
    document.getElementById("firstname").style.display = "block"
    document.getElementById("lastname").style.display = "block"
}
function Switchlogin() {
    document.getElementById("firstname").style.display = "none"
    document.getElementById("lastname").style.display = "none"
    document.getElementById("register").style.display = "none";
    document.getElementById("loginbtn").style.display = "block";

}

let result = document.getElementById("result")
function RegisterNew() {
    userdata = JSON.parse(localStorage.getItem("userdata")) || [];


    if (document.getElementById("phone").value == "" || document.getElementById("pass").value == "" || document.getElementById("firstname").value == "" ||
        document.getElementById("lastname").value == "") {
        result.innerText = "Enter Details"
        result.style.display = "block"


    } else {
        userobj = {
        }
        userobj.fname = document.getElementById("firstname").value
        userobj.lname = document.getElementById("lastname").value
        userobj.phone = (document.getElementById("phone").value)
        userobj.pass = (document.getElementById("pass").value)
        userdata.push(userobj)
        localStorage.setItem("userdata", JSON.stringify(userdata))
        result.innerText = "Account Registered Successfully"
        result.style.display = "block"
        document.getElementById("loginid").innerText = userobj.fname
        Switchlogin()

    }
}

function login() {

    userdata = JSON.parse(localStorage.getItem("userdata")) || []
    loginstatus = false
    for (i = 0; i < userdata.length; i++) {
        if (userdata[i].phone == (document.getElementById("phone").value) && userdata[i].pass == (document.getElementById("pass").value)) {
            result.innerText = "Login Successful"
            result.style.display = "block"
            loginstatus = true
            document.getElementById("loginid").innerText = userdata[i].fname
            break
        }
    }
    if (loginstatus == false) {
        result.innerText = "Wrong Credentials"
        result.style.display = "block"
    }
}
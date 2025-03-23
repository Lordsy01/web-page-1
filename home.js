// alert("connected.....")

const getstarted = document.getElementById("getstartedbtn")
const closebtn = document.getElementById("close")
const popup = document.getElementById("popupcontainer")
console.log(getstarted)


//events in js means that what happens when i carryout a particular action
getstarted.addEventListener('click', function() {
    popup.style.display = "flex"
})
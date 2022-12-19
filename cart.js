cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];
let total=document.getElementById("cost")
userdata = JSON.parse(localStorage.getItem("userdata")) || [];
document.getElementById("loginid").innerText = userdata[userdata.length - 1].fname


Display(cartdata)

function Display(cartdata) {
    let cont = document.getElementById("displayarea");
    cont.innerHTML = null
    let cost=0
    cartdata.forEach((element) => {
        let card = document.createElement("div")
        card.style.padding = "15px"
        card.style.border = "1px solid rgb(192, 190, 190)"
        card.style.borderRadius = "10px"

        let space = document.createElement("div")
        space.style.height = "150px";
        space.style.overflow = "hidden"
        space.style.textAlign = "center"


        let img = document.createElement("img");
        img.setAttribute("src", element.image)
        img.style.height = "100%"
        img.style.maxWidth = "100%"

        let name = document.createElement("h4");
        name.innerText = element.name
        name.style.marginTop = "10px"
        name.style.marginBottom = "10px"

        let price = document.createElement("h5");
        price.innerText = "MRP RS." + element.price

        cost+=element.price
        



        space.append(img)
        card.append(space, name, price)
        cont.append(card)
        total.innerText=cost
    });



}

let popup= document.getElementById("popup")

function OpenPopup(){
    popup.classList.add("open-popup")
}

function ClosePopup(){
    popup.classList.remove("open-popup")
}
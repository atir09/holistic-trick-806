userdata = JSON.parse(localStorage.getItem("userdata")) || [];
document.getElementById("loginid").innerText = userdata[userdata.length - 1].fname
let productdata = []
cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];
let cv = document.getElementById("cv")
cv.innerText = cartdata.length
let filter = document.getElementsByName("Category")


filter.forEach((e) => {
    e.addEventListener("click", () => {
        filtered = productdata.filter((el) => {
            if (el.type == e.value) {
                return true
            }
        })
        Display(filtered)
    })
})






fetchdata()

function fetchdata() {
    fetch("data.JSON")
        .then((responsedata) => {
            data = responsedata.json()
            return data
        })
        .then((data) => {
            productdata = data
            Display(productdata)
        })
}

function Display(data) {
    let cont = document.getElementById("displayarea");
    cont.innerHTML = null

    data.forEach((element) => {
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

        let block = document.createElement("div")


        let ATC = document.createElement("button");
        ATC.setAttribute("id", "Atc")
        ATC.innerText = "Add To Cart"




        ATC.addEventListener("click", () => {
            if (cartdata.includes(element) == false) {
                cartdata.push(element)
                cv.innerText = cartdata.length
                localStorage.setItem("cartdata", JSON.stringify(cartdata))

                
            }

        })






        space.append(img)
        block.append(ATC)
        card.append(space, name, price, block)
        cont.append(card)
    });



}





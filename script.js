let bp = 0;

function increment() {
    bp++;
    document.getElementById("bp").value = bp;
    document.getElementById("bp-cost").textContent = bp;
    updateCost();
}

function decrement() {
    if (bp > 0) { 
        bp--; 
        document.getElementById("bp").value = bp;
        document.getElementById("bp-cost").textContent = bp;
        updateCost();
    }
}

function updateCost() {
let costPerItem = 15.977;
let totalCost = bp * costPerItem;
let ship = document.getElementById("ship").value;
let beforetax = totalCost + parseFloat(ship);
let estTax = Math.round(beforetax * 10) / 100;
let orderTotal = beforetax + estTax;
if (bp == 0) {
    beforetax = 0;
    estTax = 0;
    orderTotal = 0;
}
document.getElementById("items-totalcost").innerHTML = "$" + totalCost.toFixed(2);
document.getElementById("ship-cost").innerHTML = "$" + ship;
document.getElementById("beforetax").innerHTML = "$" + beforetax.toFixed(2);
document.getElementById("estTax").innerHTML = "$" + estTax.toFixed(2);
document.getElementById("orderTotal").innerHTML = "$" + orderTotal.toFixed(2);
}

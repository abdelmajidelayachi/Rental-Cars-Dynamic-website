var typeDi = document.getElementById("auto-manual");
var typeOfVehicleSel = document.getElementById("type-vehicle");
var powerSel = document.getElementById("power");
var energie = "";
var e="";
let priceCal=0;
const price= document.getElementById('price-cars');
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


// const vehicle=document.querySelectorAll(".vehicle");
// console.log(vehicle);


/// select country
var countryObject = {
  "Morocco": {
    "Casablanca": ["Airport", "downtown", "train station"],
    "Marrakesh": ["Airport", "downtown"],
    "Agadir": ["Airport", "downtown", "Ait Malloul"]    
  },
  "Spain": {
    "Madrid": ["Airport", "downtown", "train station"],
    "Barcelona": ["Airport", "downtown", "train station"]
  }
}
function functionLoad2() {
  var countryName = document.getElementById("country");
  var citySel = document.getElementById("city");
  var locationPlaceSel = document.getElementById("locationPlace");
  for (var x in countryObject) {
    countryName.options[countryName.options.length] = new Option(x, x);
  }
  countryName.onchange = function() {
     //empty locationPlaces- and cities- dropdown
     locationPlaceSel.length = 1;
      citySel.length = 1;
    //display correct values
    for (var y in countryObject[this.value]) {
      citySel.options[citySel.options.length] = new Option(y, y);
    }
  }
  citySel.onchange = function() {
    //empty locationPlaces dropdown
    locationPlaceSel.length = 1;
    var z = countryObject[countryName.value][this.value];
    for (var i = 0; i < z.length; i++) {
      locationPlaceSel.options[locationPlaceSel.options.length] = new Option(z[i], z[i]);
    }
  }
}


//select car
var typeDriver = {
  "Automatique": {
    "Berline": ["Hybride", "Essence", "Diesel"],
    "Camion": ["Diesel"]  
  },
  "Manualle": {
    "Citadine": ["Electrique","Hybride", "Essence", "Diesel"],
    "Compact": ["Hybride", "Essence", "Diesel"],
    "Utilitaire": [ "Diesel"],
    "Engine": [ "Essence", "Diesel"]
    
  },
  "Autre": {
    "Motor": ["Electrique", "Essence"]  
  }
}
function functionLoad1(){
  for (var t in typeDriver) {

    typeDi.innerHTML+=' <option value='+t+'>'+t+'</option>';

  }


  typeDi.onchange = function() {
    console.log(typeDi.value);  
     //empty powers- and cities- dropdown
     powerSel.length = 1;
      typeOfVehicleSel.length = 1;
    //display correct values
    for (var d in typeDriver[this.value]) {
      // typeOfVehicleSel.options[typeOfVehicleSel.options.length] = new Option(d, d);
      if(d == "Engine"){
      typeOfVehicleSel.innerHTML+=' <option value='+d+'>'+"Engine de Chantier"+'</option>';
      }else{
        typeOfVehicleSel.innerHTML+=' <option value='+d+'>'+d+'</option>';
      }
    
      // console.log(typeDriver[this.value])
    }
  }
  typeOfVehicleSel.onchange = function() {
    //empty powers dropdown
    console.log(typeOfVehicleSel.value);
    powerSel.length = 1;
     e = typeDriver[typeDi.value][this.value];
    for (var i = 0; i < e.length; i++) {
    //   powerSel.options[powerSel.options.length] = new Option(e[i], e[i]);
    powerSel.innerHTML += ' <option value='+e[i]+'>'+e[i]+'</option>';
   
    }
  }
  powerSel.onchange = function() {
    //empty powers dropdown
     energie = powerSel.value;
     console.log(energie);
  }
  

  

}

function start(){
  functionLoad1();
  functionLoad2();
}
window.onload = start();
// console.log(selectedOp1);
 const priceOfReserv =(type, typeVehicle, energy)=>{
  let price=0;
  if(type=="Automatique" ||type=="Manualle" || type=="Autre"){
  if(typeVehicle=="Motor" ||typeVehicle=="Berline" || typeVehicle=="Camion"|| typeVehicle=="Citadine"|| typeVehicle=="Compact"|| typeVehicle=="Utilitaire"|| typeVehicle=="Engine"  ){
  if(energy == "Electrique"||energy == "Hybride"||energy == "Diesel"||energy == "Essence"){
  switch(typeVehicle){
    case "Motor":
      switch(energy){
        case "Electrique":
            price =(1.05)*10;
          break;
        case "Essence":
            price =(1.14)*10;
          break;
       }
       break;
    case "Berline":
      price=20;
      switch(energy){
        case "Hybride":
            price =(1.09+0.19)*price;
          break;
        case "Diesel":
            price =(1.21+0.19)*price;
          break;
        case "Essence":
            price =(1.14+0.19)*price;
          break;
       }
       break;
       case "Camion":
         price=250;
         switch(energy){
           case "Diesel":
               price =(1.21+0.19)*price;
             break;
          }
          break;
    case "Citadine":
      price=12;
      switch(energy){
        case "Electrique":
            price =(1.05)*price;
          break;
        case "Hybride":
            price =(1.09)*price;
          break;
        case "Essence":
            price =(1.14)*price;
          break;
        case "Diesel":
            price =(1.21)*price;
          break;
       }
       break;
    case "Compact":
      price=14;
      switch(energy){
        case "Hybride":
            price =(1.09)*price;
          break;
        case "Essence":
            price =(1.14)*price;
          break;
        case "Diesel":
            price =(1.21)*price;
          break;
       }
       break;
    case "Utilitaire":
      price=16;
      switch(energy){
        case "Diesel":
            price =(1.21)*price;
          break;
       }
       break;
    case "Engine":
      price=900;
      switch(energy){
        case "Essence":
            price =(1.14)*price;
          break;
        case "Diesel":
            price =(1.21)*price;
          break;
       }
       break;

     }
     let days= document.getElementById('days-nums').value;
     //end
     if(!(Number.isNaN(parseInt(days)))){
       price = parseInt(days)*price;
     document.getElementById('price-cars').textContent = price.toFixed(2);
    }else{
       document.getElementById('price-cars').textContent = 0;
       alert("Please Enter Numbers of days");
     }
    }else
    alert("select energy"); 
    }else
    alert("select type "); 
    }else
    alert("Select diver"); 
    

}
 


var t= "'"+typeDi.value +"'"

document.getElementById("price-btn").addEventListener("click",()=>
  priceOfReserv(typeDi.value,typeOfVehicleSel.value,energie)

);

function reset(){
  location.reload();
}
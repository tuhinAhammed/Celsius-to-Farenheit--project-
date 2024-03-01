function celsiusToFarenheit(){
    var celsius = document.getElementById("celsius") 
    var farenheit = document.getElementById("farenheit")
    var celsiusValue = celsius.value
    var farenheitConvert = (celsius.value * 9/5) + 32 
    farenheit.innerHTML = farenheitConvert

    if (!celsiusValue){
        farenheit.innerHTML = "Enter Celsius Value"
    }
    
}
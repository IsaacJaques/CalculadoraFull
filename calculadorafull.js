function somar(){
    var primeiroElementoDaSoma  = 0; 
    var segundoElementoDaSoma   = 0; 
    var primeiroElementoDaSoma_convertida   = 0;
    var segundoElementoDaSoma_convertida    = 0;  
    
    primeiroElementoDaSoma = document.getElementById("A").value;
    segundoElementoDaSoma  = document.getElementById("B").value;

    
    primeiroElementoDaSoma_convertida  = parseFloat(primeiroElementoDaSoma);
    
    segundoElementoDaSoma_convertida = parseFloat(segundoElementoDaSoma);

    alert(primeiroElementoDaSoma_convertida + segundoElementoDaSoma_convertida);
    }
    function multiplicar(){
        var primeiroElementoDaSoma  = 0; 
        var segundoElementoDaSoma   = 0; 
        var primeiroElementoDaSoma_convertida   = 0;
        var segundoElementoDaSoma_convertida    = 0;  
        
        primeiroElementoDaSoma = document.getElementById("A").value;
        segundoElementoDaSoma  = document.getElementById("B").value;
    
        
        primeiroElementoDaSoma_convertida  = parseFloat(primeiroElementoDaSoma);
        
        segundoElementoDaSoma_convertida = parseFloat(segundoElementoDaSoma);
    
        alert(primeiroElementoDaSoma_convertida * segundoElementoDaSoma_convertida);
        }
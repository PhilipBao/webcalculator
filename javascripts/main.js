$(document).ready(function(){
  var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };
    var round = function(string, num){
        var res = "";
        for(var i = 0; i < num; i++){
            res+=string.charAt(i);
        }
        return res;
    };
  var number = "";
    var newnumber = "";
    var operator = "";
    
    var totaldiv = $("#total");
    totaldiv.text("0");
    $("#numbers a").not("#clear,#clearall").click(function(){
    number += $(this).text();
    totaldiv.text(number);
    testNumLength(number);
    });
    $("#operators a, #side a").not("#equals, #decimal").click(function(){
        if($(this).attr("id")==="sqrt"){
            operator = "sqrt";
            $("#equals").click();
            return;
        }else if($(this).attr("id")==="sinr"){
            operator = "sinr";
            $("#equals").click();
            return;
        }else if($(this).attr("id")==="sind"){
            operator = "sind";
            $("#equals").click();
            return;
        }else{
        operator = $(this).text();
        }
    newnumber = number;
    number = "";
    totaldiv.text("0");
    });
    
    $("#decimal").click(function(){
        var numOfDecs = 0;
        for(var i = 0; i < number.length; i++){
            var x = number.charAt( i );
            if(x === "."){
                numOfDecs += 1;
                break;
            }
        }
        if(numOfDecs === 0){
            number +=  ".";
        }
        totaldiv.text(number);
        testNumLength(number);
        
    });
    
    $("#clear,#clearall").click(function(){
    number = "";
    totaldiv.text("0");
    if ($(this).attr("id") === "clearall") {
      newnumber = "";
    }
    });
    //Add your last .click() here!
    $("#equals").click(function(){
      if (operator === "+"){
        number = (parseFloat(number, 10) + parseFloat(newnumber,10)).toString(10);
      } else if (operator === "-"){
        number = (parseFloat(newnumber, 10) - parseFloat(number,10)).toString(10);
      } else if (operator === "÷"){
        number = (parseFloat(newnumber, 10) / parseFloat(number,10)).toString(10);
      } else if (operator === "×"){
        number = (parseFloat(newnumber, 10) * parseFloat(number,10)).toString(10);
      } else if (operator === "sqrt"){
        number = Math.sqrt(parseFloat(number, 10)).toString(10);
        number = round(number,9);
      } else if (operator === "^"){
        number = (Math.pow(parseFloat(newnumber, 10), number)).toString(10);
        number = round(number,9);
      } else if (operator === "sinr") {
            number = (Math.sin(parseFloat(number, 10))).toString(10);
            number = round(number,9);
           
        } else if (operator === "sind") {
            number = (Math.sin(parseFloat(number, 10)* (Math.PI / 180))).toString(10);
            number = round(number,9);
            
        }
      totaldiv.text(number);
      testNumLength(number);
      number = "";
      newnumber = "";
    });
    
});
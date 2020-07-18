function calresult(choise){
    let n1=parseFloat(document.getElementById('num1').value);
    let n2=parseFloat(document.getElementById('num2').value);
    var r;
    var c=choise;
    
    switch(c)
        {
        case '1':
            r=n1+n2;
            break;
        case '2':
            r=n1-n2;
            break;
        case '3':
            r=n1*n2;
            break;
        case '4': 
            r=n1/n2;
            break;
        case '5':
            //50% of 200
            //i.e   n1=50 and n2=200
            r=(n1*n2)/100;
            break;
        case '6':
            r=n1*n1;
            break;
            
        default:
            break;
                
        }
    document.getElementById('result').value=r;
    
    }

    function clr()
    {
        document.getElementById('num1').value = ""
        document.getElementById("num2").value = ""
        document.getElementById("result").value = ""
    }
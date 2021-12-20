function InputNumberOutputDate(){
    var data1 = new Date();
    var Ano1Atual1=data1.getFullYear();
    var Mes1Atual1=data1.getMonth();
    var Dia1Atual1=data1.getDate();
    ano1=Ano1Atual1;
    mes1=Mes1Atual1+1;
    dia1=Dia1Atual1;
    QuantidadeDia1s= document.getElementById('data-recebida').value;
    while(QuantidadeDia1s>0){
        if(mes1 == 1 && dia1 == 31 || mes1 == 3 && dia1 == 31 || mes1 == 5 && dia1 == 31 || mes1 == 7 && dia1 == 31 || mes1 == 8 && dia1 == 31 || mes1 == 10 && dia1 == 31 || mes1 == 12 && dia1 == 31){//mes == 31 dias
            dia1=0;
            mes1=mes1+1;
        }
        if(mes1 == 4 && dia1 == 30 || mes1 == 6 && dia1 == 30 || mes1 == 9 && dia1 == 30 || mes1 == 11 && dia1 == 30){//mes == 30 dias
            dia1=0;
            mes1=mes1+1;
        }
        if(mes1 == 2 && dia1 == 28 && ano1%4==0 && ano1%100!=0 || mes1 == 2 && dia1 == 28 && ano1%4==0 && ano1%100==0 && ano1%400==0){
            dia1=0;
            mes1=mes1+1;
        }
        if(mes1 == 2 && dia1 == 29){
            dia1=0;
            mes1=mes1+1;
        }
        if(mes1 == 13){
            mes1 = 1
            ano1 = ano1+1;
        }
        dia1=dia1+1;
        QuantidadeDia1s=QuantidadeDia1s-1; 
    }
    var EscreveDia1 = document.getElementById('output1')    
    EscreveDia1.innerText = `${dia1}/${mes1}/${ano1}`
    }
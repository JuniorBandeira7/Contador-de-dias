function InputNumberOutputDate1(){
    var data = new Date();
    var AnoAtual=data.getFullYear();
    var MesAtual=data.getMonth();
    var DiaAtual=data.getDate();
    ano=AnoAtual;
    mes=MesAtual+1;
    dia=DiaAtual;
    AMes=new Array(0,31,28,31,30,31,30,31,31,30,31,30,31);
    AMesBissexto=new Array(0,31,29,31,30,31,30,31,31,30,31,30,31);
    QuantidadeDias= document.getElementById('output2').value;
    while(QuantidadeDias>0){
        if(dia==0){
            if(ano%4==0 && ano%100!=0 || ano%4==0 && ano%100==0 && ano%400==0){//se o ano for bissexto
                mes=mes-1;
                    if(mes==0 && dia==0){
                    ano=ano-1;
                    mes=12;
                    }
                dia=AMesBissexto[mes];//recebe a quantidade de dias equivalente ao mes(se o mes for bissexto)
                }else{
                    mes=mes-1;
                    if(mes==0 && dia==0){
                        ano=ano-1;
                        mes=12;
                    }
                    dia=AMes[mes];
            }
        }
        dia=dia-1;
        QuantidadeDias=QuantidadeDias-1; 
    }
    if(dia==0 && mes==1){
        dia=31;
        mes=12;
        ano=ano-1;
    }
    if(dia==0){
        if(ano%4==0 && ano%100!=0 || ano%4==0 && ano%100==0 && ano%400==0){
            mes=mes-1; 
            dia=AMesBissexto[mes];
        }else{
            mes=mes-1;
            dia=AMes[mes];
        }
    }
    var EscreveDia = document.getElementById('data-recebida2')    
    EscreveDia.innerText = `${dia}/${mes}/${ano}`
    }
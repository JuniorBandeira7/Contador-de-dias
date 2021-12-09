<?php
    $AnoAtual=date("Y");
    $MesAtual=date("m");
    $DiaAtual=date("d");
    $ano=$AnoAtual;
    $mes=$MesAtual;
    $dia=$DiaAtual;
    $AMes=array(1=>31,2=>28,3=>31,4=>30,5=>31,6=>30,7=>31,8=>31,9=>30,10=>31,11=>30,12=>31);
    $AMesBissexto=array(1=>31,2=>29,3=>31,4=>30,5=>31,6=>30,7=>31,8=>31,9=>30,10=>31,11=>30,12=>31);
    $QuantidadeDias=306;
    
    

    while($QuantidadeDias>0){

     
        if($dia==0){
            if($ano%4==0 && $ano%100!=0 || $ano%4==0 && $ano%100==0 && $ano%400==0){//se o ano for bissexto

            
                $mes=$mes-1;
                if($mes==0 && $dia==0){
                    $ano=$ano-1;
                    $mes=12;
                }
                $dia=$AMesBissexto[$mes];//recebe a quantidade de dias equivalente ao mes(se o mes for bissexto)

            }else{
                
                $mes=$mes-1;
                if($mes==0 && $dia==0){
                    $ano=$ano-1;
                    $mes=12;
                }
                $dia=$AMes[$mes];

            }
        }
        
        $dia=$dia-1;
        $QuantidadeDias=$QuantidadeDias-1;
       
    }
    if($dia==0){
        $dia=31;
        $mes=12;
        $ano=$ano-1;
    }
   
    
    echo $dia;
    echo "<br/>".$mes;
    echo "<br/>".$ano;
    echo "<br/>".$QuantidadeDias;
    


?>

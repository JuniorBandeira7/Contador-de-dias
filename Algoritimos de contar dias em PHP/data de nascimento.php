<?php
    
    $AnoAtual=date("Y");
    $MesAtual=date("m");
    $DiaAtual=date("d");
    $ano=1998;
    $meses=array('1'=>31,'2'=>59,'3'=>90,'4'=>120,'5'=>151,'6'=>181,'7'=>212,'8'=>243,'9'=>273,'10'=>304,'11'=>334,'12'=>365);
    $MesesBissexto=array('1'=>31,'2'=>60,'3'=>90,'4'=>121,'5'=>152,'6'=>182,'7'=>213,'8'=>244,'9'=>374,'10'=>305,'11'=>335,'12'=>366);
    $mes='12';
    $dia=5;
    $contador=0;

    while($ano<$AnoAtual){
        if($AnoAtual%4==0 && $AnoAtual%100!=0 || $AnoAtual%4==0 && $AnoAtual%100==0 && $AnoAtual%400==0){
            
            $contador=$contador+366;
        }else{
            
            $contador=$contador+365;
        }
        
        $AnoAtual=$AnoAtual-1;
        
    }
    $AnoAtual=date("Y");
    if($AnoAtual%4==0 && $AnoAtual%100!=0 || $AnoAtual%4==0 && $AnoAtual%100==0 && $AnoAtual%400==0){
        $contador=$contador-($MesesBissexto[$mes]-$MesesBissexto[$MesAtual]);
        
        $contador=$contador-$dia;
        $contador=$contador+$DiaAtual;
    }else{
        $contador=$contador-($meses[$mes]-$meses[$MesAtual]);
        
        $contador=$contador-$dia;
        $contador=$contador+$DiaAtual;
    }
    echo "<br/>".$contador;
    

?>


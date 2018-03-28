function funcao(entrada) {
    
    var resultado = '';
    var listaRoman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    var listaArabic = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    var i = 0;

    while(entrada != 0){
        
        for(i; i < listaArabic.length && entrada != 0; i++){
            
            if(entrada >= listaArabic[i]){
                resultado = resultado + listaRoman[i];
                entrada = entrada - listaArabic[i];
                i = -1;
            }

        }

        break;
   
    }

    return resultado;
}

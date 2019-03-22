function junta_nomes(){
        	
            var nome1 = document.getElementById("nome1").value;
            var nome2 = document.getElementById("nome2").value;
			var juncao = ""
  			for(var i = 0; i < nome1.length || i < nome2.length; i++) { 
   				if(i < nome1.length) 
     				juncao +=  nome1[i];
   				if(i < nome2.length)
     				juncao +=  nome2[i];
  			}
            document.getElementById("juncao").value = juncao
        }
    
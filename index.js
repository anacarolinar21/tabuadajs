const numerodesejado=prompt("Tabuada do número:")
let numero = 0
let contador = 1
let resultado = 'Tabuada do Número:'

while (numero < 10)

{
numero = numero + 1
contador = numerodesejado * numero
resultado = `${resultado} \n${numerodesejado} x ${numero} = ${contador}` 
}
alert(resultado);
document.getElementById("meuFormulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio tradicional do formulário

    // Obtém o valor do campo de entrada
    var valorDoCampo = document.getElementById("campoTexto").value;

    // Faça o que quiser com o valor, como exibi-lo na tela ou enviá-lo para um servidor
    console.log("Valor do campo: " + valorDoCampo);

    var minhaVariavel = valorDoCampo;
    var elemento = document.getElementById("meuElemento");
    elemento.innerHTML = minhaVariavel;
});



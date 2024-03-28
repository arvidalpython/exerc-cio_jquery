$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault(); //para fazer com que a página não seja atualizada quando clicar no botão de submit

        const novaTarefa = $('#inserir-tarefa').val(); //capturando a tarefa inserida
        const novoItem = $(`<li>${novaTarefa}</li>`); //p/ criar o elemento HTML q será inserido ao final da lista

        $(novoItem).appendTo('ul div') //para adicionar o "novoItem" q é a <li> à <ul> do HTML

        $(novoItem).fadeIn(1000); //para aplicar a animação de fadein (surgir) na imagem adicionada. o "1000" é o tempo de fadein em milissegundos.

        $('#inserir-tarefa').val('') //para limpar o formulário da URL (onde entra a tarefa)

    })

        
    $('ul').on('click', 'li', function(){ //função para adicionar o CSS de riscado ao clicar no item da lista de tarefas
        $(this).toggleClass('riscado')})

})
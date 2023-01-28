$(document).ready(function() {
    
    $('header button').click(function(){
        $('form').slideDown()
    } )

    $('#cancel-btn').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault()

        const novaAtividadeAdicionada = $('#nova-atividade').val()
        $(`<tr><td id="conteudo-tabela"> - ${novaAtividadeAdicionada}</td></tr>`).appendTo('tbody')
        
        addListener()
        $('#nova-atividade').val('')
    })
        function addListener() {
            $('td').click(function(){
                $(this).css('text-decoration', 'line-through')
            })
        }

    
})

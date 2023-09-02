$(document).ready(function(){
    $('form').on('submit', function(e) {
        e.preventDefault();

        const nomeTarefa = $('#nome-tarefa').val();
        $(`
            <li class="listados">
                ${nomeTarefa}
            </li>
        `).appendTo('ul');
        $('#nome-tarefa').val('');
    });

    $('ul').on('click','li', function() {
        $(this).css('text-decoration', 'line-through');
    });

});
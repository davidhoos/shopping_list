$(document).ready(function() {
    $('#listbutton').click(function(){
        $('#unorderedlist').append($('<li>', {
        text: $('#inputtext').val()
        }))
    })
});
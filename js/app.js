$(document).ready(function() {

   $('#userInput').keydown(enterItem);
    $('.add').click(clickItem);

function clickItem() {

    userInput = $("#userInput").val();

    if (userInput === '') {
        return;

    } else {

        todoItem = '<li class="to-do-wrapper"><input type="text" class="to-do item" value="' + userInput + '" readonly><span class="userAction submit complete-item"><i class="' + unselectedClass + '"></i></span></li>';

        $(todoItem).appendTo('.to-do-items-wrapper').slideDown();

        $("#userInput").val('');
    }
}

function enterItem() {
 
    $("#userInput").keypress(function(event) {

        if (event.keyCode == 13) {
            event.preventDefault();

            $(".add").click();
        }
    });
}

function completeItem() {
    $(this).find('.userAction').parent().toggleClass('completed');


    if ($(this).closest('.to-do-wrapper').hasClass('completed')) {
        $(this).find('.userAction i').removeClass(unselectedClass).addClass(selectedClass);
    } else {
        $(this).find('.userAction i').removeClass(selectedClass).addClass(unselectedClass);
    }

    if ($('.to-do-wrapper').hasClass('completed')) {
        $('.delete-completed').slideDown();
    } else {
        $('.delete-completed').slideUp();
    }
}


function deleteCompleted() {

    $(this).closest('.wrapper').find('.to-do-items-wrapper').children('.completed').slideUp(function() {
        $(this).remove();
    });
}
 
$('.delete-completed').on('mouseenter', function() {
    $('.completed').addClass('about-to-delete');
});

$('.delete-completed').on('mouseleave', function() {
    $('.completed').removeClass('about-to-delete');
});

$('.delete-completed').click(deleteCompleted);
$('.to-do-items-wrapper').on('click', '.to-do-wrapper', completeItem);
});

var selectedClass = 'Check';
var unselectedClass = 'Uncheck';
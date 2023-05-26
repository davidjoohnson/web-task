$(document).ready(function () {

    // ADDING A NEW ITEM TO THE LIST

    // Define the callback function
    let addItem = function () {

        let $input = $('.submission-line__input').val();
        if ($input) {
            $('.list').prepend('<li class="list__item"><a class="list__delete-btn">X</a>' + $input + '<a class="list__check-btn">✔</a></li>');
        }
        $('.submission-line__input').val("");
    };

    $('.submission-line__btn').on('click', function (event) {
        event.preventDefault();
        addItem();
    });

    $('.submission-line__input').keypress(function (event) {
        if (event.which === 13) {
            addItem();
        }
    });

    // DELETING AN ITEM FROM THE LIST

    $('.list').on('click', '.list__delete-btn', function () {
        $(this).parent().fadeOut(300, function () {
            $(this).remove();
        });
    });

    // CHECKING AN ITEM OFF FROM THE LIST

    $('.list').on('click', '.list__check-btn', function (event) {
        $(this).parent().toggleClass('list__item--checked');
        $(this).siblings().toggleClass('list__delete-btn--checked');
        $(this).toggleClass('list__check-btn--checked');

        let $listItem = $(this).parent();
        if ($listItem.hasClass('list__item--checked')) {
            $('.list').append($listItem);
        } else {
            $('.list').prepend($listItem);
        }
    });

    // MAKING LIST ITEMS SORTABLE

    $('.list').sortable({
        distance: 2,
        revert: 300,
        cancel: ".list__item--checked"
    });

});

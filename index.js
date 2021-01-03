$(document).ready(function() {

    $('.nav-link').click(function () {
        $('.content').hide();
        var target = '#' + $(this).data('target');
        $(target).show();
    });
});
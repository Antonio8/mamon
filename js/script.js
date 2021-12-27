$(document).ready(function () {
    $(document).on('click', '.hide-nav', function () {
        var nav = $('.list');
        $('.hide-nav').toggleClass('active');
        nav.toggleClass('show')
    })
});
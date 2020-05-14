//tab层
$('.page .content').hide();
$('.page .contents .content').eq(0).show();
$('.page .head').eq(0).addClass('active');

$('.headerTab .head').click(function () {
    $('.headerTab .head').removeClass('active');
    $(this).addClass('active');
    var index = $(this).index();
    $('.page .content').hide().eq(index).show();
})
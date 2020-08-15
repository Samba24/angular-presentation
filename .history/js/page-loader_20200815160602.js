$(document).ready(function(){
    $('#toc li a').click(function(){
        var page = $(this).attr('target-page')
        $('#toc li .active').removeClass('active');
        $(this).addClass('active');
        $("#main-content").load(`./pages/${page}.html`);
    })
    $('#next').click(function(e){

        var page = $(this).attr('target-page')
        $('#toc').find('li.active').removeClass('active');
        // $(this).addClass('active');
        $("#main-content").load(`./pages/${page}.html`);
    })
})
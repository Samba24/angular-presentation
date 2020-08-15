$(document).ready(function(){
    $('#toc li a').click(function(){
        var page = $(this).attr('target-page')
        $('#toc li .active').removeClass('active');
        $(this).addClass('active');
        $("#main-content").load(`./pages/${page}.html`);
    })
    $('.next').click(function(event){
        event.preventDefault()
        var page = $(this).attr('target-page')
        $('#toc').find('li a.active').removeClass('active');
        $(`.nav-link[target-page='${page}']`).addClass('active')
        // $(this).addClass('active');
        $("#main-content").load(`./pages/${page}.html`);
    })
})
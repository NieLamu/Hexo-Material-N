$(document).ready(function(){
    var minWidth = 768;
    var toc = $("#toc");
    var post_content = $(".post_content");
    var tocT = $(".navbar").height();
    var tocLimMin = $(".main").offset().top;
    const placeToc = ()=>{
        var tocL = post_content.offset().left + post_content.width() + 30;
        var scroH = document.body.scrollTop + document.documentElement.scrollTop;
        var tocLimMax = $("#comments").offset().top - toc.height();
        if(window.innerWidth > minWidth && tocLimMin <= scroH && scroH <= tocLimMax){  
            toc.css({
                "display": "block",
                "position": "fixed",
                "left": tocL,
                "top": tocT
            })
        }else if (window.innerWidth <= minWidth){
            toc.css("display","none")
            $(".section").append($(".privateWidget"))
            $(".privateWidget a").css("display","list-item")
        }else {
            toc.css("display","none")
        }
    }
    $(window).scroll(placeToc) 
    $(window).resize(placeToc)


    $(".post_content img").on("click", function(e){
        $("body").append(
            "<div id='fullImgBackground'>"
                +`<img src='${e.target.src}'>`
            +"</div>"
        );
        $("#fullImgBackground").one("click", function(e){
            $("#fullImgBackground").remove();
        });
        $("#fullImgBackground img").one("click", function(e){
            e.stopPropagation();
        });
    });

    tocbot.init({
        tocSelector: '#tocbot',
        contentSelector: '.post_content',
        headingSelector: 'h1, h2, h3, h4, h5, h6',
        linkClass: 'tocbot-link',
        activeLinkClass: 'tocbot-active-link',
        listClass: 'tocbot-list',
        isCollapsedClass: 'tocbot-is-collapsed',
        collapsibleClass: 'tocbot-is-collapsible',
        scrollSmooth: true,
    });

    // add Materia-T's class to hexo
    $("blockquote").addClass("blockquote");
}) 
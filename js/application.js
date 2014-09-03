// ------------------------------
// Sidebar Accordion Menu
// ------------------------------

$(function() {





    //On click of left menu
    $("a#leftmenu-trigger").click(function() {
        if ((window.innerWidth) < 768) {
            $("body").toggleClass("show-leftbar");
        } else {
            $("body").toggleClass("collapse-leftbar");

            //Sets Cookie for Toggle
            if ($('admin_leftbar_collapse') === 'collapse-leftbar') {
                $('admin_leftbar_collapse', '');
                $('ul.acc-menu').css('visibility', '');

            } else {
                $.each($('.acc-menu'), function() {
                    if ($(this).css('display') == 'none')
                        $(this).css('display', '');
                });

                $('ul.acc-menu:first ul.acc-menu').css('visibility', '');
                $('admin_leftbar_collapse', 'collapse-leftbar');
            }
        }
        checkpageheight();
        leftbarScrollShow();
    });
});

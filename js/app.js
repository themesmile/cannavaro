$(function() {


    /*
     * INITIALIZE BUTTON TOGGLE
     * ------------------------
     * always use this code for toggle and close button effect
     */

    $("[data-widget='remove']").click(function() {
        //Find the box parent        
        var box = $(this).parents(".box").first();
        box.slideUp();
    });

    /*     
     * Add collapse and remove events to boxes
     */
    $("[data-widget='collapse']").click(function() {
        //Find the box parent        
        var box = $(this).parents(".box").first();
        //Find the body and the footer
        var bf = box.find(".box-body, .box-footer");
        if (!box.hasClass("collapsed-box")) {
            box.addClass("collapsed-box");
            bf.slideUp();
        } else {
            box.removeClass("collapsed-box");
            bf.slideDown();
        }
    });

    //Donut chart sidemenu
    $("#doughnutChart").drawDoughnutChart([{
        title: "Tokyo",
        value: 232,
        color: "#2C3E50"
    }, {
        title: "San Francisco",
        value: 165,
        color: "#FC4349"
    }, {
        title: "New York",
        value: 183,
        color: "#6DBCDB"
    }]);


    //scrool prettyfy dropdown menu

    $(".menu").slimscroll({
        height: "200px",
        alwaysVisible: true,
        size: "5px"
    }).css("width", "100%");


    //tooltip menu sidebar setting

    $("[data-toggle='tooltip']").tooltip();
    $(".topnav").accordionze({
        accordionze: true,
        speed: 300,
        closedSign: '<b class="icon-chevron-left"></b>',
        openedSign: '<b class="icon-chevron-down"></b>'
    });

    $('.tooltip-tip').tooltipster({
        position: 'top-left',
        animation: 'slide',
        theme: '.tooltipster-shadow',
        delay: 1,
        offsetY: '-50px',
        offsetX: '-60px',
        onlyOne: true

    });

    //background image slide show


});

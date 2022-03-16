(function ($) {
    //Autobuilder for a Bootstrap ScrollSpy
    //TO DO: refresh when element is dynamically created
    $(window).on('activate.bs.scrollspy', function (e) {
        history.replaceState({}, "", $("a[href^='#']", e.target).attr("href") || location.hash);
    });

    const defaults = {
        // These are the defaults.

        //Default container for the scrollspy itself
        scrollSpyContainer: "#sendSidebar",
        //Which container to be scanned for links
        scrollSpyCollector: "#taskSendPanel",
        //Tag for first level links
        scrollSpyFirstLevel: "h4",
        //Tag for second level links
        scrollSpySecondLevel: "label",
        //Class for icons in front of the second level links
        circleIconClass: "fa fa-fw fa-arrow-right",
        //ID to be used for links without any
        dummyLinksName: "scrollspylink",
        //Starting number of "dummyLinksName"
        dummyLinkId: 1,
        //Skip class name
        skipWhenHasClass: "skipScrollSpy"
    };

    let settings = {};

    $.scrollSpyBuild = function (options) {
        settings = $.extend({}, defaults, options);
        $.scrollSpyBuild.buildMenu(settings);
    };

    $.scrollSpyBuild.reBuildMenu = function () {
        $(settings.scrollSpyContainer).empty();
        $.scrollSpyBuild.buildMenu(settings);
    };

    $.scrollSpyBuild.reBuildMenuSection = function (sectionId) {
        $.scrollSpyBuild.buildMenu(settings);
    };

    $.scrollSpyBuild.buildMenu = function (settings) {
        const leftSlider = $(settings.scrollSpyContainer);
        const circleIcon = $("<span/>").attr("class", settings.circleIconClass).after("&nbsp;");

        $(settings.scrollSpyCollector).find(settings.scrollSpyFirstLevel).each(function (index, ele) {
            const el = $(ele);
            let linkId = '';

            if (el.hasClass(settings.skipWhenHasClass)) {
                return true;
            }

            if (typeof el.attr("id") === "undefined") {
                linkId = settings.dummyLinksName + settings.dummyLinkId;
                el.attr("id", linkId);
                settings.dummyLinkId++;
            } else {
                linkId = el.attr("id");
            }

            // const mainElement = $("<a/>").prop("href", "#" + linkId).attr("class", "list-group-item p-1 scrollTo").html(el.html()).prepend(circleIcon.clone());
            let mainElement = $("<div/>").addClass("list-group-item p-1").attr("id", "scrollLink" + linkId).append(
                $("<a/>").prop("href", "#" + linkId).attr("class", "scrollTo").html(el.html().trim()).prepend(circleIcon.clone())
            );

            // let subMenuDetails = $("<small/>").attr("style", "display: block; padding: 5px");
            el.next("div").find(settings.scrollSpySecondLevel).each(function (index, subEl) {
                let subMenu = $("<div/>").attr("class", "list-group p-1");
                let subElement = $(subEl);

                if (subElement.hasClass(settings.skipWhenHasClass)) {
                    return true;
                }

                let subLinkId;
                if (!subElement.hasClass("custom-control-label")) {
                    if (typeof subElement.attr("id") === "undefined") {
                        subLinkId = settings.dummyLinksName + settings.dummyLinkId;
                        subElement.attr("id", subLinkId);
                        settings.dummyLinkId++;
                    } else {
                        subLinkId = subElement.attr("id");
                    }

                    $("<a/>")
                        .prop("href", "#" + subLinkId)
                        .attr("class", "list-group-item p-1 scrollTo")
                        .html(subElement.html())
                        .appendTo(subMenu);
                }
                // subMenuDetails.appendTo(mainElement);
                subMenu.appendTo(mainElement);
            });

            mainElement.appendTo(leftSlider);
        });
    };
}(jQuery));
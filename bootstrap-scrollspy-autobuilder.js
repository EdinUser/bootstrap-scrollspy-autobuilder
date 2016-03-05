(function ($) {
    //Autobuilder for a Bootstrap ScrollSpy
    //TO DO: refresh when element is dynamically created

    var defaults = {
	// These are the defaults.

	//Default container for the scrollspy itself
	scrollSpyContainer: "#scrollSpyContainer",
	//Which container to be scanned for links
	scrollSpyCollector: "#scrollSpyCollect",
	//Tag for first level links
	scrollSpyFirstLevel: "h4",
	//Tag for second level links
	scrollSpySecondLevel: "label",
	//Class for icons in front of the second level links
	circleIconClass: "glyphicon glyphicon-record",
	//Add a hashtag to the url, default: false
	changeAddress: false,
	//ID to be used for links without any
	dummyLinksName: "scrollspylink",
	//Starting number of "dummyLinksName"
	dummyLinkId: 1
    };

    var settings = {};

    $.scrollSpyBuild = function (options) {

	settings = $.extend({}, defaults, options);

	$.scrollSpyBuild.buildMenu(settings);

	if (settings.changeAddress === true) {
	    $(window).on('activate.bs.scrollspy', function (e) {
		history.replaceState({}, "", $("a[href^='#']", e.target).attr("href") || location.hash);
	    });
	}
    };

    $.scrollSpyBuild.reBuildMenu = function () {
	$(settings.scrollSpyContainer).empty();
	$.scrollSpyBuild.buildMenu(settings);
    };

    $.scrollSpyBuild.reBuildMenuSection = function (sectionId) {
	$.scrollSpyBuild.buildMenu(settings);
    };

    $.scrollSpyBuild.attachScrollFunction = function (clickedElement) {
	var moveTo = $(clickedElement.prop("hash"));
	//remove class for selected element
	$(".selectedElement").removeClass("selectedElement");

	if (clickedElement.parent().hasClass("doBorder")) {
	    //add special class for selected element
	    $(clickedElement.prop("hash")).parent().addClass("selectedElement");
	}

	$.scrollSpyBuild.scrollToElement(moveTo);
    };

    $.scrollSpyBuild.attachHashTagToLink = function () {
	$('.scrollTo').on("click", function (e) {
	    history.replaceState({}, "", $("a[href^='#']", e.target).attr("href") || location.hash);
	});
    };

    $.scrollSpyBuild.scrollToElement = function (scrollToWhere) {
	if (scrollToWhere.length) {
	    $('html, body').animate({
		scrollTop: scrollToWhere.offset().top - $('.menu').height()
	    }, 1000);
	}
    }

var buildCount = 1;
    $.scrollSpyBuild.buildMenu = function (settings) {
	console.log("build "+buildCount);
	var leftSlider = $(settings.scrollSpyContainer);
	
	var baseScrollSpyContainer = $("<ul/>").attr({
	    "class": "nav nav-stacked panel"
	});
	
	var circleIcon = $("<span/>").attr("class", settings.circleIconClass).after("&nbsp;");

	$(settings.scrollSpyCollector).find(settings.scrollSpyFirstLevel).each(function (index, el) {
	    var el = $(el);
	    var linkId = '';

	    if (typeof el.attr("id") === "undefined") {
		linkId = settings.dummyLinksName + settings.dummyLinkId;
		el.attr("id", linkId);
		settings.dummyLinkId++;
	    } else {
		linkId = el.attr("id");
	    }

	    var mainElement = $("<li/>").append(
		    $("<a/>").prop("href", "#" + linkId).attr("class", "scrollTo").html(el.html()).prepend(circleIcon.clone().on("click", function (e) {
		e.preventDefault();
		$.scrollSpyBuild.attachScrollFunction($(this));
	    }))
		    );

	    var subMenu = $("<ul/>").attr("class", "nav");
//	    var subMenuDetails = $("<small/>").attr("style", "display: block; padding: 5px");

	    el.closest("div").next("div").find(settings.scrollSpySecondLevel).each(function (index, subel) {
		var subel = $(subel);

		if (!subel.hasClass("bootstrap-switch-label")) {
		    var subLinkId = '';

		    if (typeof subel.attr("id") === "undefined") {
			subLinkId = settings.dummyLinksName + settings.dummyLinkId;
			subel.attr("id", subLinkId);
			settings.dummyLinkId++;
		    } else {
			subLinkId = subel.attr("id");
		    }

		    var subElement = $("<li/>").attr("class", "doBorder").append(
			    $("<a/>").attr("href", "#" + subLinkId).attr("class", "scrollTo").html(subel.html()).on("click", function (e) {
			e.preventDefault();
			$.scrollSpyBuild.attachScrollFunction($(this));
		    })
			    );
		    subElement.appendTo(subMenu);
		}
	    });
	    console.log(subMenu);

//	    subMenuDetails.appendTo(mainElement);
	    subMenu.appendTo(mainElement);

	    mainElement.appendTo(baseScrollSpyContainer);
	});
	baseScrollSpyContainer.appendTo(leftSlider);

	if (settings.changeAddress === true) {
	    $.scrollSpyBuild.attachHashTagToLink();
	}
	buildCount++;

    };
}(jQuery));
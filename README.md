# bootstrap-scrollspy-autobuilder
Bootstrap 3 Scrollspy auto builder

### Requirements
This script is built for usage with [Bootstrap 4](https://getbootstrap.com/docs/4.1/getting-started/introduction/ "Bootstrap"). Without including the needed libraries for Bootstrap, you cannot use it, sorry :)

```html
<!-- JQuery 3 slim -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>

<!-- CDN for version 4.1.3, taken from the Bootstrap site -->
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<!-- The script itself -->
<script src="bootstrap-scrollspy-autobuilder.js"></script>
```

### Basic usage
Just start it with pointing to the ID of the container, from where to collect the links, and container, where to put the generated Scrollspy

```javascript
$.scrollSpyBuild({
	scrollSpyContainer: "#scrollSpyContainer",
	scrollSpyCollector: "#scrollSpyCollect"
});
```

### Options
```javascript
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
```


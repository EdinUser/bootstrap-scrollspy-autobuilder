# bootstrap-scrollspy-autobuilder
Bootstrap 3 Scrollspy auto builder

### Reruirements
This script is built for usage with [Bootstrap 3](http://getbootstrap.com/getting-started/#download "Bootstrap"). Without including the needed libraries for Bootstrap, you cannot use it, sorry :)

```html
<!-- JQuery 2.2.1 -->
<script src="http://code.jquery.com/jquery-2.2.1.min.js"></script>

<!-- CDN for version 3.3.6, taken from the Bootstrap site -->
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

<!-- The script itself -->
<script src="bootstrap-scrollspy-autobuilder.js"></script>
```

### Basic usage
Just start it with pointing to the ID of the container, from where to collect the links, and container, where to put the generated Scrollspy

``` javascript
$.scrollSpyBuild({
	scrollSpyContainer: "#scrollSpyContainer",
	scrollSpyCollector: "#scrollSpyCollect"
});
```

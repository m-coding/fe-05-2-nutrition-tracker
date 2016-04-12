# Nutrition Tracker
A single page app that tracks your calorie intake and nutrition information for foods you eat.

#### Features
* Responsive design
* Food suggestions "as you type" via search autocomplete
* Uses food searched as an ingredient to provide recipe suggestions
* Visually see fat, carbohyrdates, and protein amounts with pie chart
* Full nutrition information is displayed using the FDA-style "Nutrition Facts" label
* Tracked foods are saved to your browser's localStorage
* Option to display all tracked foods or by date
* Navigate days with interactive date picker

## How to run
#### Local
1. Navigate to the `public` folder
2. Open the `index.html` in either the `src` or `dist` folders

#### Online
1. http://m-coding.github.io/fe-05-2-nutrition-tracker/

## How to re-build
1. Requires [Node.js](https://nodejs.org/en/download/) and [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
2. Navigate to the root of the project directory (where the `gulpfile.js` is located)
3. In your terminal enter the command: `npm install`, this will install all modules listed as dependencies in `package.json`
4. Enter the command `gulp clean` to delete everything in the `dist` folder.
  * If you want to preview what files will be deleted, enter the command `gulp cleanDryRun` instead.
5. Next enter the command `gulp` and the project will be built in the `dist` folder.
  * You can review differences by comparing the `src` and `dist` folder.

## Documentation

* Generated by JSDoc `public/docs/jsdoc`
* Generated by Docco `public/docs/docco`

## Notes
#### API
* [Nutritionix](https://www.nutritionix.com/business/api) – used for nutrition search and autocomplete
* [Edamam](https://developer.edamam.com/recipe-api) – used for recipe search
* [Google Chart](https://developers.google.com/chart/) – used to create pie charts

#### JavaScript
* [Backbone.js](http://backbonejs.org) – the JavaScript library used to structure the app
* [Underscore.js](http://underscorejs.org) – hard dependency for Backbone.js
* [Backbone.localStorage](http://documentup.com/jeromegn/backbone.localStorage) – a localStorage adapter for Backbone.js
* [Backbone.Typeahead](https://github.com/aodin/Backbone.Typeahead) – a Bootstrap inspired [Typeahead](https://github.com/twitter/typeahead.js/) for Backbone.js
  * [forked](https://github.com/m-coding/Backbone.Typeahead/blob/master/backbone.typeahead.js) – my forked version customized to work with the Nutritionix autocomplete API
* [Handlebars.js](http://handlebarsjs.com) – template processor used
* [eqHeights.js](http://stackoverflow.com/questions/13029090/jquery-equal-height-responsive-div-rows?answertab=votes#tab-top) – a jQuery plugin used to make Bootstrap columns equal heights
* [nutritionLabel.js](https://github.com/nutritionix/nutrition-label) – Nutritionix's jQuery plugin to create a nutrition label
* [Bootstrap 3 Datepicker](https://github.com/Eonasdan/bootstrap-datetimepicker) – date picker widget used
* [Moment.js](http://momentjs.com) – dependency for date picker

#### CSS
* [Bootstrap](http://getbootstrap.com/) – the HTML/CSS framework used for responsive design
* [Bootswatch Spacelab](https://bootswatch.com/spacelab/) – theme used
* [CSS Loading Spinner](http://www.designcouch.com/home/why/2013/05/23/dead-simple-pure-css-loading-spinner) – css animation used for preloading views in the app

#### Fonts
* [Open Sans](https://www.google.com/fonts/specimen/Open+Sans) – font used by Bootstrap
* [Archivo](https://www.google.com/fonts/specimen/Archivo+Black) – font used for nutrition labels
* [google-webfonts-helper](https://google-webfonts-helper.herokuapp.com/fonts) – site used to download google fonts locally

# Change Log
* [All commits](https://github.com/m-coding/fe-05-2-nutrition-tracker/commits/master)
* [All releases](https://github.com/m-coding/fe-05-2-nutrition-tracker/releases)
/** Model for recipe data
 * @namespace nt.Models
 * @class nt.Models.Recipe
 * @memberof! <global>
 * @extends Backbone.Model */
nt.Models.Recipe = Backbone.Model.extend(/** @lends nt.Models.Recipe# */{

    /** Default attributes */
    defaults: {
        recipeImage: '',
        recipeTitle: '',
        numCalories: '',
        numIngredients: '',
        siteIcon: '',
        siteTitle: '',
        siteLink: '',
        first: false,
        last: false
    },

    /** Override parse and return response attributes */
    parse: function(data) {
        var prefix = 'http://www.edamam.com/http/';
        var recipe = {};
            recipe.recipeImage    = data.recipe.image;
            recipe.recipeTitle    = data.recipe.label;
            recipe.numCalories    = parseInt(data.recipe.calories / data.recipe.yield, 10);
            recipe.numIngredients = data.recipe.ingredientLines.length;
            recipe.siteIcon       = data.recipe.sourceIcon.replace('http://', prefix);
            recipe.siteTitle      = data.recipe.source;
            recipe.siteLink       = data.recipe.shareAs;
        return recipe;
    }
});
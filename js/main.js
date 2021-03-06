/* 01 */
/*var Quiz = function (title) {
    this.title = title;
};

var Person = function (config) {
    this.name = config.name;
    this.age = config.age;
    this.job = config.job;
};

Person.prototype.work = function(){
    return this.name + ' is working';
}*/

/* 02-04 */
/*
var Person = Backbone.Model.extend({
    defaults: {
        name: 'sam',
        age: 25,
        job: 'software engineer'
    },

    validate: function (attrs) {
        if (attrs.age <0){
            return "Age must be positive.";
        }
        if (!attrs.name) {
            return "Everyone has a name.";
        }
    },

    work: function () {
        return this.get('name') + ' is working'
    }
});*/

/* 05 */
/*
var Person = Backbone.Model.extend({
    defaults: {
        name: 'sam',
        age: 25,
        job: 'software engineer'
    }
});

var PersonView = Backbone.View.extend({
    tagName: 'li',

    initialize: function () {
        this.render();
        $(document.body).append(this.el);
        console.log(this.model)
    },

    render: function () {
        // anti-pattern
        this.$el.html(this.model.get('name') + ' (' + this.model.get('age') + ') - ' + this.model.get('job'));
    }
});

var person = new Person;
var personView = new PersonView({model: person});
*/

/* 06 */
/*
var Person = Backbone.Model.extend({
    defaults: {
        name: 'sam',
        age: 25,
        job: 'software engineer'
    }
});

var PersonView = Backbone.View.extend({
    tagName: 'li',

    // Using underscore template method
    template: _.template("<strong><%= name %></strong> (<%= age%>) - <%= job%>"),

    initialize: function () {
        this.render();
        $(document.body).append(this.el);
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
    }
});

var person = new Person;
var personView = new PersonView({model: person});
*/

/* 07 */

var Person = Backbone.Model.extend({
    defaults: {
        name: 'sam',
        age: 25,
        job: 'software engineer'
    }
});

var PersonView = Backbone.View.extend({
    tagName: 'li',

    // Using underscore template method
    template: _.template($('#personTemplate').html()),

    //template: '#personTemplate',

    initialize: function () {
        this.render();
        $(document.body).append(this.el);
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        /*var template = _.template($(this.template));
         this.$el.html(template);*/
    }
});

var person = new Person;
var personView = new PersonView({model: person});

var person2 = new Person({name:'rui',age:26,job:'CA'});
var personView = new PersonView({model: person2});

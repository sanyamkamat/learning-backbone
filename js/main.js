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
        console.log(this.model)
    },

    render: function () {
        // anti-pattern
        this.$el.html(this.model.get('name') + ' (' + this.model.get('age') + ') - ' + this.model.get('job'));
    }
});

var person = new Person;
var personView = new PersonView({model: person});

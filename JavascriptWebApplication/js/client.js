

$(function () {
    var Person = new Class();
    Person.extend({
        find: function (id) { },
        exists: function (id) {
            console.log('Person.exists();');
        },
        extended: function (klass) {
            console.log(klass, ' was invoked');
        }
    });

    var Button = new Class();

    Button.include({
        init: function (element) {
            this.element = $(element);

            //wrap the click() callback with proxy
            //so 'this' is Button,not this.element.
            this.element.click(this.proxy(this.click));

            //es5
            //this.element.click(this.click.bind(this));
        },
        click: function () {
            console.log("Button.click invoked");
        }
    });

    var person = Person.exists(1);

    Person.include({
        save: function (id) {
            console.log('save');
        }
    });

    var person = new Person();
    person.save();

    var Animal = new Class();
    Animal.include({
        breath: function () {
            console.log('breath');
        }
    });

    var Cat = new Class(Animal);
    var t = new Cat;
    t.breath();

    //Button
    var btn = new Button($("#btnProxy"));

    /********************
        spine class
    *********************/
    var Person = Spine.Class.create();

    Person.extend({
        find: function (id) {

        }
    });

    Person.include({
        init: function (atts) {
            this.attributes = atts || {};
        }
    });

    var person = Person.init();
    person.speak = function () {
        console.log('say sth...');
    }
    console.log(person.attributes['play']);
    person.speak();

    $("ul.nav-tabs").tabs(".TabContent");
});

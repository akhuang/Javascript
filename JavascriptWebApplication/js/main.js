var Class = function (parent) {
    var klass = function () {
        this.init.apply(this, arguments);
    };

    if (parent) {
        var subclass = function () { };
        subclass.prototype = parent.prototype;
        klass.prototype = new subclass;
    };
    klass.prototype.init = function () { };

    klass.fn = klass.prototype;
    klass.fn.parent = klass; //这句的作用是？
    klass._super = klass.__proto__;

    klass.extend = function (obj) {
        var extended = obj.extended;
        for (var i in obj) {
            klass[i] = obj[i];
        }
        //下面这句不是很懂
        //当obj有extended方法时，就调用它？
        if (extended) extended(klass);
    };

    klass.include = function (obj) {
        var included = obj.included;
        for (var i in obj) {
            klass.fn[i] = obj[i];
        }
        if (included) included(klass);
    };

    return klass;
};

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



$(function () {
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
});

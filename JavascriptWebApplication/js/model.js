var Model = {
    inherited: function () { },
    created: function () { },

    prototype: {
        init: function () { }
    },

    create: function () {
        //this?
        var object = Object.create(this);
        object.parent = this;
        object.prototype = object.fn = object.create(this.prototype);

        Object.created();
        this.inherited(Object);

        return Object;
    },

    init: function () {
        alert(this.prototype);
        var instance = Object.create(this.prototype);
        alert(instance);
        instance.parent = this;
        instance.init.apply(instance, arguments);

        return instance;
    },

    extend: function (o) {
        var extended = o.extended;
        jQuery.extend(this, o);
        if (extended) extended(this);
    },

    include: function (o) {
        var included = o.included;
        jQuery.extend(this.prototype, this);
        if (included) included(this);
    }
};

Model.include({
    init: function () { },
    load: function (attribute) { }
});





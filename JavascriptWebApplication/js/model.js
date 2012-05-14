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
        var instance = Object.create(this.prototype);
        instance.parent = this;
        instance.init.apply(instance, arguments);

        return instance;
    },
};
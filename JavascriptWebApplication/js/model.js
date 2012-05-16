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
        object.prototype = object.fn = Object.create(this.prototype);

        object.created();
        this.inherited(object);

        return object;
    },

    init: function () {
        var instance = Object.create(this.prototype);
        alert("1:" + instance);
        instance.parent = this;
        alert("2:" + instance.init);
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
        jQuery.extend(this.prototype, o);
        if (included) included(this);
    }
};

Model.records = {};
Model.include({
    newRecord: true,
    init: function (atts) {
        if (atts) this.load(atts);
    },
    load: function (attributes) {
        for (var name in attributes)
            this[name] = attributes[name];
    },
    create: function () {
        this.newRecord = false;
        this.parent.records[this.id] = this;
    },
    destroy: function () {
        delete this.parent.records[this.id];
    },
    update: function () {
        this.parent.records[this.id] = this;
    },
    save: function () {
        this.newRecord ? this.save() : this.update();
    },
});

Model.extend({
    find: function (id) {
        if (this.records[id])
            throw ("Unknown record");
        return this.records[id];

        //why it's not good?
        //return this.records[id] || throw("Unknown record");
    },
});





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
    klass.fn.parent = klass; //���������ǣ�
    klass._super = klass.__proto__;

    klass.extend = function (obj) {
        var extended = obj.extended;
        for (var i in obj) {
            klass[i] = obj[i];
        }
        //������䲻�Ǻܶ�
        //��obj��extended����ʱ���͵�������
        if (extended) extended(klass);
    };

    klass.include = function (obj) {
        var included = obj.included;
        for (var i in obj) {
            klass.fn[i] = obj[i];
        }
        if (included) included(klass);
    };

    klass.proxy = function (func) {
        var self = this;
        return (function () {
            return func.apply(self, arguments);
        });
    };

    klass.fn.proxy = klass.proxy;


    return klass;
};




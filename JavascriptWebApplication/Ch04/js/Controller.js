(function ($, exports) {
    var mod = function (includes) {
        if (includes) this.include(includes);
    };

    mod.fn = mod.prototype;

    mod.fn.proxy = function (func) {
        return $.proxy(func, this);
    };

    mod.fn.load = function (func) {
        $(this.proxy(func, this));
    };

    mod.fn.include = function (obj) {
        $.extend(this, obj);
    };

    exports.Controller = mod;

})(jQuery, window);

(function ($, Controller) {
    var mod = new Controller;

    mod.load(function () {
        this.view = $("#view");
        console.log(this.view);
    });

    mod.assetsClick = function (e) {
        console.log('asset click');
    };

    mod.load(function () {
        this.view.find('.assets').click(
            console.log(this),
            $.proxy(this.assetsClick, this)
        );
    });
})(jQuery, Controller);

(function ($, Controller) {
    var mod = new Controller;

    mod.load(function () {
        this.view = $(".toggleView");
        console.log(this.view);
    });

    mod.toggleClass = function (e) {
        //e.data?
        this.view.toggleClass("over", e.data);
    };

    mod.load(function () {
        this.view.mouseover(this.proxy(this.toggleClass));
        this.view.mouseout(this.proxy(this.toggleClass));
    });
})(jQuery, Controller);
$.fn.tabs = function (control) {

    var element = $(this);

    control = $(control);

    element.delegate('li', 'click', function () {
        var tabName = $(this).attr('data-tab');
        element.trigger('change.tab', tabName);
    });

    element.bind('change.tab', function (e, tabName) {
        element.find('li').removeClass('active');
        element.find(">[data-tab='" + tabName + "']").addClass('active');
    });


    element.bind('change.tab', function (e, tabName) {
        control.find('>[data-tab]').removeClass('activeDiv');
        control.find(">[data-tab='" + tabName + "']").addClass('activeDiv');
    });

    var firstTab = element.find('li:first').attr('data-tab');
    element.trigger('change.tab', firstTab);

    return this;
};
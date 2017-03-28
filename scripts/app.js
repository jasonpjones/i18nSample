

if (typeof LocDemo === 'undefined') {
    LocDemo = function () { };
}

LocDemo.App = function () {
    this.loco = new LocDemo.Loco();
};

LocDemo.App.prototype = {

    init: function () {
        this.loco.localize();
    }

};
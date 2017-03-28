LocDemo.Loco = function () {
    this.strings = new LocDemo.Strings();
};

LocDemo.Loco.prototype = {
    localize: function() {
        var strings = this.strings,
            loco = this;

        $('.loc_text').each(function (idx, el) {
            
            var $el = $(el),
                catName = $el.data('locCat'),
                keyName = $el.data('locKey'),
                cat = strings[catName],
                val = loco._nestedKeyVal(cat, keyName);

            $el.text(val);
        });
    },
    localizeFormatted: function (el, catName, fmtKey, args) {
        var strFmt = this._nestedKeyVal(this.strings[catName], fmtKey);
        args.unshift(strFmt);

        el.text(this._format.apply(this, args));
    },
    _nestedKeyVal: function (obj, key) {
        var keyParts = key.split('.');
        var val;
        for (var i = 0; i < keyParts.length; i++) {
            val = obj[keyParts[i]];
            obj = val;
        }
        return obj;

    },
    _format: function () {
        // The string containing the format items (e.g. "{0}") MUST be the first argument.
        var theString = arguments[0];

        // start with the second argument (i = 1)
        for (var i = 1; i < arguments.length; i++) {
            var regEx = new RegExp("\\{" + (i - 1) + "\\}", "g");  //g = global
            theString = theString.replace(regEx, arguments[i]);
        }
        return theString;
    }

};



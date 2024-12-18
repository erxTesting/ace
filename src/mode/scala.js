"use strict";

var oop = require("../lib/oop");
var JavaScriptMode = require("./javascript").Mode;
var ScalaHighlightRules = require("./scala_highlight_rules").ScalaHighlightRules;

var Mode = function() {
    JavaScriptMode.call(this);
    this.HighlightRules = ScalaHighlightRules;
    this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, JavaScriptMode);

(function() {

    this.createWorker = function(session) {
        return null;
    };

    this.$id = "ace/mode/scala";
}).call(Mode.prototype);

exports.Mode = Mode;

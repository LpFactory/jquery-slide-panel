/*
 *  jquery-lp-factory-slide-panel - v0.0.1
 *  https://github.com/LpFactory
 *
 *  Made by Jonathan Bouzekri
 *  Under MIT License
 */
; // jshint ignore:line
(function($, window, document, undefined) {

	"use strict";

	// Create the defaults
	var pluginName = "lpSlidePanel",
		defaults = {
			expanded: false
		};

	// The actual plugin constructor
	function Plugin(element, options) {
		this.element = element;
		this.$element = $(element);
		this.settings = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	// Avoid Plugin.prototype conflicts
	$.extend(Plugin.prototype, {
		init: function() {},
		show: function() {
			this.$element.animate({
				"margin-left": 0
			}, "slow");
			this.expanded = true;
		},
		hide: function() {
			this.$element.animate({
				"margin-left": -(this.$element.outerWidth())
			}, "slow");
			this.expanded = false;
		},
		toggle: function() {
			if (this.expanded) {
				this.hide();
			} else {
				this.show();
			}
		}
	});

	// A really lightweight plugin wrapper around the constructor,
	// preventing against multiple instantiations
	$.fn[pluginName] = function(options) {
		return this.each(function() {
			if (!$.data(this, "plugin_" + pluginName)) {
				$.data(this, "plugin_" + pluginName, new Plugin(this, options));
			}

			if ($.isFunction(Plugin.prototype[options])) {
				$.data(this, "plugin_" + pluginName)[options]();
			}
		});
	};

})(jQuery, window, document);

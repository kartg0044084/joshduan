/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/assets/js/app.js":
/*!************************************!*\
  !*** ./resources/assets/js/app.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
__webpack_require__(/*! ./jquery.min */ "./resources/assets/js/jquery.min.js");

__webpack_require__(/*! ./bootstrap */ "./resources/assets/js/bootstrap.js");

__webpack_require__(/*! ./jquery.twzipcode.min */ "./resources/assets/js/jquery.twzipcode.min.js");

__webpack_require__(/*! ./main */ "./resources/assets/js/main.js"); // vue 暫無使用打算
// window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
// Vue.component('example', require('./components/Example.vue'));
// const app = new Vue({
//     el: '#app'
// });

/***/ }),

/***/ "./resources/assets/js/bootstrap.js":
/*!******************************************!*\
  !*** ./resources/assets/js/bootstrap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery');
}

+function ($) {
  'use strict';

  var version = $.fn.jquery.split(' ')[0].split('.');

  if (version[0] < 2 && version[1] < 9 || version[0] == 1 && version[1] == 9 && version[2] < 1) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher');
  }
}(jQuery);
/* ========================================================================
 * Bootstrap: transition.js v3.3.4
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict'; // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap');
    var transEndEventNames = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend'
    };

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return {
          end: transEndEventNames[name]
        };
      }
    }

    return false; // explicit for ie8 (  ._.)
  } // http://blog.alexmaccaw.com/css-transitions


  $.fn.emulateTransitionEnd = function (duration) {
    var called = false;
    var $el = this;
    $(this).one('bsTransitionEnd', function () {
      called = true;
    });

    var callback = function callback() {
      if (!called) $($el).trigger($.support.transition.end);
    };

    setTimeout(callback, duration);
    return this;
  };

  $(function () {
    $.support.transition = transitionEnd();
    if (!$.support.transition) return;
    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function handle(e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
      }
    };
  });
}(jQuery);
/* ========================================================================
 * Bootstrap: alert.js v3.3.4
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict'; // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]';

  var Alert = function Alert(el) {
    $(el).on('click', dismiss, this.close);
  };

  Alert.VERSION = '3.3.4';
  Alert.TRANSITION_DURATION = 150;

  Alert.prototype.close = function (e) {
    var $this = $(this);
    var selector = $this.attr('data-target');

    if (!selector) {
      selector = $this.attr('href');
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
    }

    var $parent = $(selector);
    if (e) e.preventDefault();

    if (!$parent.length) {
      $parent = $this.closest('.alert');
    }

    $parent.trigger(e = $.Event('close.bs.alert'));
    if (e.isDefaultPrevented()) return;
    $parent.removeClass('in');

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove();
    }

    $.support.transition && $parent.hasClass('fade') ? $parent.one('bsTransitionEnd', removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION) : removeElement();
  }; // ALERT PLUGIN DEFINITION
  // =======================


  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.alert');
      if (!data) $this.data('bs.alert', data = new Alert(this));
      if (typeof option == 'string') data[option].call($this);
    });
  }

  var old = $.fn.alert;
  $.fn.alert = Plugin;
  $.fn.alert.Constructor = Alert; // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old;
    return this;
  }; // ALERT DATA-API
  // ==============


  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close);
}(jQuery);
/* ========================================================================
 * Bootstrap: button.js v3.3.4
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict'; // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function Button(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Button.DEFAULTS, options);
    this.isLoading = false;
  };

  Button.VERSION = '3.3.4';
  Button.DEFAULTS = {
    loadingText: 'loading...'
  };

  Button.prototype.setState = function (state) {
    var d = 'disabled';
    var $el = this.$element;
    var val = $el.is('input') ? 'val' : 'html';
    var data = $el.data();
    state = state + 'Text';
    if (data.resetText == null) $el.data('resetText', $el[val]()); // push to event loop to allow forms to submit

    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state]);

      if (state == 'loadingText') {
        this.isLoading = true;
        $el.addClass(d).attr(d, d);
      } else if (this.isLoading) {
        this.isLoading = false;
        $el.removeClass(d).removeAttr(d);
      }
    }, this), 0);
  };

  Button.prototype.toggle = function () {
    var changed = true;
    var $parent = this.$element.closest('[data-toggle="buttons"]');

    if ($parent.length) {
      var $input = this.$element.find('input');

      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false;else $parent.find('.active').removeClass('active');
      }

      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change');
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'));
    }

    if (changed) this.$element.toggleClass('active');
  }; // BUTTON PLUGIN DEFINITION
  // ========================


  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.button');
      var options = _typeof(option) == 'object' && option;
      if (!data) $this.data('bs.button', data = new Button(this, options));
      if (option == 'toggle') data.toggle();else if (option) data.setState(option);
    });
  }

  var old = $.fn.button;
  $.fn.button = Plugin;
  $.fn.button.Constructor = Button; // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old;
    return this;
  }; // BUTTON DATA-API
  // ===============


  $(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
    var $btn = $(e.target);
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn');
    Plugin.call($btn, 'toggle');
    e.preventDefault();
  }).on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
    $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type));
  });
}(jQuery);
/* ========================================================================
 * Bootstrap: carousel.js v3.3.4
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict'; // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function Carousel(element, options) {
    this.$element = $(element);
    this.$indicators = this.$element.find('.carousel-indicators');
    this.options = options;
    this.paused = null;
    this.sliding = null;
    this.interval = null;
    this.$active = null;
    this.$items = null;
    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this));
    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element.on('mouseenter.bs.carousel', $.proxy(this.pause, this)).on('mouseleave.bs.carousel', $.proxy(this.cycle, this));
  };

  Carousel.VERSION = '3.3.4';
  Carousel.TRANSITION_DURATION = 600;
  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  };

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return;

    switch (e.which) {
      case 37:
        this.prev();
        break;

      case 39:
        this.next();
        break;

      default:
        return;
    }

    e.preventDefault();
  };

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false);
    this.interval && clearInterval(this.interval);
    this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval));
    return this;
  };

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item');
    return this.$items.index(item || this.$active);
  };

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active);
    var willWrap = direction == 'prev' && activeIndex === 0 || direction == 'next' && activeIndex == this.$items.length - 1;
    if (willWrap && !this.options.wrap) return active;
    var delta = direction == 'prev' ? -1 : 1;
    var itemIndex = (activeIndex + delta) % this.$items.length;
    return this.$items.eq(itemIndex);
  };

  Carousel.prototype.to = function (pos) {
    var that = this;
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'));
    if (pos > this.$items.length - 1 || pos < 0) return;
    if (this.sliding) return this.$element.one('slid.bs.carousel', function () {
      that.to(pos);
    }); // yes, "slid"

    if (activeIndex == pos) return this.pause().cycle();
    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos));
  };

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true);

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end);
      this.cycle(true);
    }

    this.interval = clearInterval(this.interval);
    return this;
  };

  Carousel.prototype.next = function () {
    if (this.sliding) return;
    return this.slide('next');
  };

  Carousel.prototype.prev = function () {
    if (this.sliding) return;
    return this.slide('prev');
  };

  Carousel.prototype.slide = function (type, next) {
    var $active = this.$element.find('.item.active');
    var $next = next || this.getItemForDirection(type, $active);
    var isCycling = this.interval;
    var direction = type == 'next' ? 'left' : 'right';
    var that = this;
    if ($next.hasClass('active')) return this.sliding = false;
    var relatedTarget = $next[0];
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    });
    this.$element.trigger(slideEvent);
    if (slideEvent.isDefaultPrevented()) return;
    this.sliding = true;
    isCycling && this.pause();

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active');
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)]);
      $nextIndicator && $nextIndicator.addClass('active');
    }

    var slidEvent = $.Event('slid.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    }); // yes, "slid"

    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type);
      $next[0].offsetWidth; // force reflow

      $active.addClass(direction);
      $next.addClass(direction);
      $active.one('bsTransitionEnd', function () {
        $next.removeClass([type, direction].join(' ')).addClass('active');
        $active.removeClass(['active', direction].join(' '));
        that.sliding = false;
        setTimeout(function () {
          that.$element.trigger(slidEvent);
        }, 0);
      }).emulateTransitionEnd(Carousel.TRANSITION_DURATION);
    } else {
      $active.removeClass('active');
      $next.addClass('active');
      this.sliding = false;
      this.$element.trigger(slidEvent);
    }

    isCycling && this.cycle();
    return this;
  }; // CAROUSEL PLUGIN DEFINITION
  // ==========================


  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.carousel');
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), _typeof(option) == 'object' && option);
      var action = typeof option == 'string' ? option : options.slide;
      if (!data) $this.data('bs.carousel', data = new Carousel(this, options));
      if (typeof option == 'number') data.to(option);else if (action) data[action]();else if (options.interval) data.pause().cycle();
    });
  }

  var old = $.fn.carousel;
  $.fn.carousel = Plugin;
  $.fn.carousel.Constructor = Carousel; // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old;
    return this;
  }; // CAROUSEL DATA-API
  // =================


  var clickHandler = function clickHandler(e) {
    var href;
    var $this = $(this);
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7

    if (!$target.hasClass('carousel')) return;
    var options = $.extend({}, $target.data(), $this.data());
    var slideIndex = $this.attr('data-slide-to');
    if (slideIndex) options.interval = false;
    Plugin.call($target, options);

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex);
    }

    e.preventDefault();
  };

  $(document).on('click.bs.carousel.data-api', '[data-slide]', clickHandler).on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler);
  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this);
      Plugin.call($carousel, $carousel.data());
    });
  });
}(jQuery);
/* ========================================================================
 * Bootstrap: collapse.js v3.3.4
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict'; // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function Collapse(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Collapse.DEFAULTS, options);
    this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' + '[data-toggle="collapse"][data-target="#' + element.id + '"]');
    this.transitioning = null;

    if (this.options.parent) {
      this.$parent = this.getParent();
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger);
    }

    if (this.options.toggle) this.toggle();
  };

  Collapse.VERSION = '3.3.4';
  Collapse.TRANSITION_DURATION = 350;
  Collapse.DEFAULTS = {
    toggle: true
  };

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width');
    return hasWidth ? 'width' : 'height';
  };

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return;
    var activesData;
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing');

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse');
      if (activesData && activesData.transitioning) return;
    }

    var startEvent = $.Event('show.bs.collapse');
    this.$element.trigger(startEvent);
    if (startEvent.isDefaultPrevented()) return;

    if (actives && actives.length) {
      Plugin.call(actives, 'hide');
      activesData || actives.data('bs.collapse', null);
    }

    var dimension = this.dimension();
    this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded', true);
    this.$trigger.removeClass('collapsed').attr('aria-expanded', true);
    this.transitioning = 1;

    var complete = function complete() {
      this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('');
      this.transitioning = 0;
      this.$element.trigger('shown.bs.collapse');
    };

    if (!$.support.transition) return complete.call(this);
    var scrollSize = $.camelCase(['scroll', dimension].join('-'));
    this.$element.one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
  };

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return;
    var startEvent = $.Event('hide.bs.collapse');
    this.$element.trigger(startEvent);
    if (startEvent.isDefaultPrevented()) return;
    var dimension = this.dimension();
    this.$element[dimension](this.$element[dimension]())[0].offsetHeight;
    this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded', false);
    this.$trigger.addClass('collapsed').attr('aria-expanded', false);
    this.transitioning = 1;

    var complete = function complete() {
      this.transitioning = 0;
      this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse');
    };

    if (!$.support.transition) return complete.call(this);
    this.$element[dimension](0).one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION);
  };

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']();
  };

  Collapse.prototype.getParent = function () {
    return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function (i, element) {
      var $element = $(element);
      this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);
    }, this)).end();
  };

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in');
    $element.attr('aria-expanded', isOpen);
    $trigger.toggleClass('collapsed', !isOpen).attr('aria-expanded', isOpen);
  };

  function getTargetFromTrigger($trigger) {
    var href;
    var target = $trigger.attr('data-target') || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''); // strip for ie7

    return $(target);
  } // COLLAPSE PLUGIN DEFINITION
  // ==========================


  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.collapse');
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), _typeof(option) == 'object' && option);
      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false;
      if (!data) $this.data('bs.collapse', data = new Collapse(this, options));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.collapse;
  $.fn.collapse = Plugin;
  $.fn.collapse.Constructor = Collapse; // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old;
    return this;
  }; // COLLAPSE DATA-API
  // =================


  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this = $(this);
    if (!$this.attr('data-target')) e.preventDefault();
    var $target = getTargetFromTrigger($this);
    var data = $target.data('bs.collapse');
    var option = data ? 'toggle' : $this.data();
    Plugin.call($target, option);
  });
}(jQuery);
/* ========================================================================
 * Bootstrap: dropdown.js v3.3.4
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict'; // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop';
  var toggle = '[data-toggle="dropdown"]';

  var Dropdown = function Dropdown(element) {
    $(element).on('click.bs.dropdown', this.toggle);
  };

  Dropdown.VERSION = '3.3.4';

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this);
    if ($this.is('.disabled, :disabled')) return;
    var $parent = getParent($this);
    var isActive = $parent.hasClass('open');
    clearMenus();

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus);
      }

      var relatedTarget = {
        relatedTarget: this
      };
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget));
      if (e.isDefaultPrevented()) return;
      $this.trigger('focus').attr('aria-expanded', 'true');
      $parent.toggleClass('open').trigger('shown.bs.dropdown', relatedTarget);
    }

    return false;
  };

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return;
    var $this = $(this);
    e.preventDefault();
    e.stopPropagation();
    if ($this.is('.disabled, :disabled')) return;
    var $parent = getParent($this);
    var isActive = $parent.hasClass('open');

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus');
      return $this.trigger('click');
    }

    var desc = ' li:not(.disabled):visible a';
    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc);
    if (!$items.length) return;
    var index = $items.index(e.target);
    if (e.which == 38 && index > 0) index--; // up

    if (e.which == 40 && index < $items.length - 1) index++; // down

    if (!~index) index = 0;
    $items.eq(index).trigger('focus');
  };

  function clearMenus(e) {
    if (e && e.which === 3) return;
    $(backdrop).remove();
    $(toggle).each(function () {
      var $this = $(this);
      var $parent = getParent($this);
      var relatedTarget = {
        relatedTarget: this
      };
      if (!$parent.hasClass('open')) return;
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget));
      if (e.isDefaultPrevented()) return;
      $this.attr('aria-expanded', 'false');
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget);
    });
  }

  function getParent($this) {
    var selector = $this.attr('data-target');

    if (!selector) {
      selector = $this.attr('href');
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
    }

    var $parent = selector && $(selector);
    return $parent && $parent.length ? $parent : $this.parent();
  } // DROPDOWN PLUGIN DEFINITION
  // ==========================


  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.dropdown');
      if (!data) $this.data('bs.dropdown', data = new Dropdown(this));
      if (typeof option == 'string') data[option].call($this);
    });
  }

  var old = $.fn.dropdown;
  $.fn.dropdown = Plugin;
  $.fn.dropdown.Constructor = Dropdown; // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old;
    return this;
  }; // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================


  $(document).on('click.bs.dropdown.data-api', clearMenus).on('click.bs.dropdown.data-api', '.dropdown form', function (e) {
    e.stopPropagation();
  }).on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api', '[role="menu"]', Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api', '[role="listbox"]', Dropdown.prototype.keydown);
}(jQuery);
/* ========================================================================
 * Bootstrap: modal.js v3.3.4
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict'; // MODAL CLASS DEFINITION
  // ======================

  var Modal = function Modal(element, options) {
    this.options = options;
    this.$body = $(document.body);
    this.$element = $(element);
    this.$dialog = this.$element.find('.modal-dialog');
    this.$backdrop = null;
    this.isShown = null;
    this.originalBodyPad = null;
    this.scrollbarWidth = 0;
    this.ignoreBackdropClick = false;

    if (this.options.remote) {
      this.$element.find('.modal-content').load(this.options.remote, $.proxy(function () {
        this.$element.trigger('loaded.bs.modal');
      }, this));
    }
  };

  Modal.VERSION = '3.3.4';
  Modal.TRANSITION_DURATION = 300;
  Modal.BACKDROP_TRANSITION_DURATION = 150;
  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  };

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget);
  };

  Modal.prototype.show = function (_relatedTarget) {
    var that = this;
    var e = $.Event('show.bs.modal', {
      relatedTarget: _relatedTarget
    });
    this.$element.trigger(e);
    if (this.isShown || e.isDefaultPrevented()) return;
    this.isShown = true;
    this.checkScrollbar();
    this.setScrollbar();
    this.$body.addClass('modal-open');
    this.escape();
    this.resize();
    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this));
    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true;
      });
    });
    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade');

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body); // don't move modals dom position
      }

      that.$element.show().scrollTop(0);
      that.adjustDialog();

      if (transition) {
        that.$element[0].offsetWidth; // force reflow
      }

      that.$element.addClass('in').attr('aria-hidden', false);
      that.enforceFocus();
      var e = $.Event('shown.bs.modal', {
        relatedTarget: _relatedTarget
      });
      transition ? that.$dialog // wait for modal to slide in
      .one('bsTransitionEnd', function () {
        that.$element.trigger('focus').trigger(e);
      }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger('focus').trigger(e);
    });
  };

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault();
    e = $.Event('hide.bs.modal');
    this.$element.trigger(e);
    if (!this.isShown || e.isDefaultPrevented()) return;
    this.isShown = false;
    this.escape();
    this.resize();
    $(document).off('focusin.bs.modal');
    this.$element.removeClass('in').attr('aria-hidden', true).off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal');
    this.$dialog.off('mousedown.dismiss.bs.modal');
    $.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal();
  };

  Modal.prototype.enforceFocus = function () {
    $(document).off('focusin.bs.modal') // guard against infinite focus loop
    .on('focusin.bs.modal', $.proxy(function (e) {
      if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
        this.$element.trigger('focus');
      }
    }, this));
  };

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide();
      }, this));
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal');
    }
  };

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this));
    } else {
      $(window).off('resize.bs.modal');
    }
  };

  Modal.prototype.hideModal = function () {
    var that = this;
    this.$element.hide();
    this.backdrop(function () {
      that.$body.removeClass('modal-open');
      that.resetAdjustments();
      that.resetScrollbar();
      that.$element.trigger('hidden.bs.modal');
    });
  };

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove();
    this.$backdrop = null;
  };

  Modal.prototype.backdrop = function (callback) {
    var that = this;
    var animate = this.$element.hasClass('fade') ? 'fade' : '';

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate;
      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />').appendTo(this.$body);
      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false;
          return;
        }

        if (e.target !== e.currentTarget) return;
        this.options.backdrop == 'static' ? this.$element[0].focus() : this.hide();
      }, this));
      if (doAnimate) this.$backdrop[0].offsetWidth; // force reflow

      this.$backdrop.addClass('in');
      if (!callback) return;
      doAnimate ? this.$backdrop.one('bsTransitionEnd', callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in');

      var callbackRemove = function callbackRemove() {
        that.removeBackdrop();
        callback && callback();
      };

      $.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();
    } else if (callback) {
      callback();
    }
  }; // these following methods are used to handle overflowing modals


  Modal.prototype.handleUpdate = function () {
    this.adjustDialog();
  };

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    });
  };

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    });
  };

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth;

    if (!fullWindowWidth) {
      // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect();
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
    }

    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
    this.scrollbarWidth = this.measureScrollbar();
  };

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt(this.$body.css('padding-right') || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || '';
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth);
  };

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad);
  };

  Modal.prototype.measureScrollbar = function () {
    // thx walsh
    var scrollDiv = document.createElement('div');
    scrollDiv.className = 'modal-scrollbar-measure';
    this.$body.append(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    this.$body[0].removeChild(scrollDiv);
    return scrollbarWidth;
  }; // MODAL PLUGIN DEFINITION
  // =======================


  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.modal');
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), _typeof(option) == 'object' && option);
      if (!data) $this.data('bs.modal', data = new Modal(this, options));
      if (typeof option == 'string') data[option](_relatedTarget);else if (options.show) data.show(_relatedTarget);
    });
  }

  var old = $.fn.modal;
  $.fn.modal = Plugin;
  $.fn.modal.Constructor = Modal; // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old;
    return this;
  }; // MODAL DATA-API
  // ==============


  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this);
    var href = $this.attr('href');
    var $target = $($this.attr('data-target') || href && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7

    var option = $target.data('bs.modal') ? 'toggle' : $.extend({
      remote: !/#/.test(href) && href
    }, $target.data(), $this.data());
    if ($this.is('a')) e.preventDefault();
    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return; // only register focus restorer if modal will actually get shown

      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus');
      });
    });
    Plugin.call($target, option, this);
  });
}(jQuery);
/* ========================================================================
 * Bootstrap: tooltip.js v3.3.4
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict'; // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function Tooltip(element, options) {
    this.type = null;
    this.options = null;
    this.enabled = null;
    this.timeout = null;
    this.hoverState = null;
    this.$element = null;
    this.init('tooltip', element, options);
  };

  Tooltip.VERSION = '3.3.4';
  Tooltip.TRANSITION_DURATION = 150;
  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  };

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled = true;
    this.type = type;
    this.$element = $(element);
    this.options = this.getOptions(options);
    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport);

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!');
    }

    var triggers = this.options.trigger.split(' ');

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i];

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this));
      } else if (trigger != 'manual') {
        var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin';
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout';
        this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this));
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this));
      }
    }

    this.options.selector ? this._options = $.extend({}, this.options, {
      trigger: 'manual',
      selector: ''
    }) : this.fixTitle();
  };

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS;
  };

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options);

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      };
    }

    return options;
  };

  Tooltip.prototype.getDelegateOptions = function () {
    var options = {};
    var defaults = this.getDefaults();
    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value;
    });
    return options;
  };

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type);

    if (self && self.$tip && self.$tip.is(':visible')) {
      self.hoverState = 'in';
      return;
    }

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
      $(obj.currentTarget).data('bs.' + this.type, self);
    }

    clearTimeout(self.timeout);
    self.hoverState = 'in';
    if (!self.options.delay || !self.options.delay.show) return self.show();
    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show();
    }, self.options.delay.show);
  };

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type);

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
      $(obj.currentTarget).data('bs.' + this.type, self);
    }

    clearTimeout(self.timeout);
    self.hoverState = 'out';
    if (!self.options.delay || !self.options.delay.hide) return self.hide();
    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide();
    }, self.options.delay.hide);
  };

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type);

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e);
      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (e.isDefaultPrevented() || !inDom) return;
      var that = this;
      var $tip = this.tip();
      var tipId = this.getUID(this.type);
      this.setContent();
      $tip.attr('id', tipId);
      this.$element.attr('aria-describedby', tipId);
      if (this.options.animation) $tip.addClass('fade');
      var placement = typeof this.options.placement == 'function' ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;
      var autoToken = /\s?auto?\s?/i;
      var autoPlace = autoToken.test(placement);
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top';
      $tip.detach().css({
        top: 0,
        left: 0,
        display: 'block'
      }).addClass(placement).data('bs.' + this.type, this);
      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
      var pos = this.getPosition();
      var actualWidth = $tip[0].offsetWidth;
      var actualHeight = $tip[0].offsetHeight;

      if (autoPlace) {
        var orgPlacement = placement;
        var $container = this.options.container ? $(this.options.container) : this.$element.parent();
        var containerDim = this.getPosition($container);
        placement = placement == 'bottom' && pos.bottom + actualHeight > containerDim.bottom ? 'top' : placement == 'top' && pos.top - actualHeight < containerDim.top ? 'bottom' : placement == 'right' && pos.right + actualWidth > containerDim.width ? 'left' : placement == 'left' && pos.left - actualWidth < containerDim.left ? 'right' : placement;
        $tip.removeClass(orgPlacement).addClass(placement);
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);
      this.applyPlacement(calculatedOffset, placement);

      var complete = function complete() {
        var prevHoverState = that.hoverState;
        that.$element.trigger('shown.bs.' + that.type);
        that.hoverState = null;
        if (prevHoverState == 'out') that.leave(that);
      };

      $.support.transition && this.$tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
    }
  };

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip = this.tip();
    var width = $tip[0].offsetWidth;
    var height = $tip[0].offsetHeight; // manually read margins because getBoundingClientRect includes difference

    var marginTop = parseInt($tip.css('margin-top'), 10);
    var marginLeft = parseInt($tip.css('margin-left'), 10); // we must check for NaN for ie 8/9

    if (isNaN(marginTop)) marginTop = 0;
    if (isNaN(marginLeft)) marginLeft = 0;
    offset.top = offset.top + marginTop;
    offset.left = offset.left + marginLeft; // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0

    $.offset.setOffset($tip[0], $.extend({
      using: function using(props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        });
      }
    }, offset), 0);
    $tip.addClass('in'); // check to see if placing tip in new offset caused the tip to resize itself

    var actualWidth = $tip[0].offsetWidth;
    var actualHeight = $tip[0].offsetHeight;

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight;
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);
    if (delta.left) offset.left += delta.left;else offset.top += delta.top;
    var isVertical = /top|bottom/.test(placement);
    var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight';
    $tip.offset(offset);
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical);
  };

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow().css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%').css(isVertical ? 'top' : 'left', '');
  };

  Tooltip.prototype.setContent = function () {
    var $tip = this.tip();
    var title = this.getTitle();
    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title);
    $tip.removeClass('fade in top bottom left right');
  };

  Tooltip.prototype.hide = function (callback) {
    var that = this;
    var $tip = $(this.$tip);
    var e = $.Event('hide.bs.' + this.type);

    function complete() {
      if (that.hoverState != 'in') $tip.detach();
      that.$element.removeAttr('aria-describedby').trigger('hidden.bs.' + that.type);
      callback && callback();
    }

    this.$element.trigger(e);
    if (e.isDefaultPrevented()) return;
    $tip.removeClass('in');
    $.support.transition && $tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
    this.hoverState = null;
    return this;
  };

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element;

    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '');
    }
  };

  Tooltip.prototype.hasContent = function () {
    return this.getTitle();
  };

  Tooltip.prototype.getPosition = function ($element) {
    $element = $element || this.$element;
    var el = $element[0];
    var isBody = el.tagName == 'BODY';
    var elRect = el.getBoundingClientRect();

    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, {
        width: elRect.right - elRect.left,
        height: elRect.bottom - elRect.top
      });
    }

    var elOffset = isBody ? {
      top: 0,
      left: 0
    } : $element.offset();
    var scroll = {
      scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop()
    };
    var outerDims = isBody ? {
      width: $(window).width(),
      height: $(window).height()
    } : null;
    return $.extend({}, elRect, scroll, outerDims, elOffset);
  };

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? {
      top: pos.top + pos.height,
      left: pos.left + pos.width / 2 - actualWidth / 2
    } : placement == 'top' ? {
      top: pos.top - actualHeight,
      left: pos.left + pos.width / 2 - actualWidth / 2
    } : placement == 'left' ? {
      top: pos.top + pos.height / 2 - actualHeight / 2,
      left: pos.left - actualWidth
    } :
    /* placement == 'right' */
    {
      top: pos.top + pos.height / 2 - actualHeight / 2,
      left: pos.left + pos.width
    };
  };

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return delta;
    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0;
    var viewportDimensions = this.getPosition(this.$viewport);

    if (/right|left/.test(placement)) {
      var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll;
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;

      if (topEdgeOffset < viewportDimensions.top) {
        // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset;
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
        // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
      }
    } else {
      var leftEdgeOffset = pos.left - viewportPadding;
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth;

      if (leftEdgeOffset < viewportDimensions.left) {
        // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset;
      } else if (rightEdgeOffset > viewportDimensions.width) {
        // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
      }
    }

    return delta;
  };

  Tooltip.prototype.getTitle = function () {
    var title;
    var $e = this.$element;
    var o = this.options;
    title = $e.attr('data-original-title') || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title);
    return title;
  };

  Tooltip.prototype.getUID = function (prefix) {
    do {
      prefix += ~~(Math.random() * 1000000);
    } while (document.getElementById(prefix));

    return prefix;
  };

  Tooltip.prototype.tip = function () {
    return this.$tip = this.$tip || $(this.options.template);
  };

  Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow');
  };

  Tooltip.prototype.enable = function () {
    this.enabled = true;
  };

  Tooltip.prototype.disable = function () {
    this.enabled = false;
  };

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  };

  Tooltip.prototype.toggle = function (e) {
    var self = this;

    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type);

      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions());
        $(e.currentTarget).data('bs.' + this.type, self);
      }
    }

    self.tip().hasClass('in') ? self.leave(self) : self.enter(self);
  };

  Tooltip.prototype.destroy = function () {
    var that = this;
    clearTimeout(this.timeout);
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type);
    });
  }; // TOOLTIP PLUGIN DEFINITION
  // =========================


  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.tooltip');
      var options = _typeof(option) == 'object' && option;
      if (!data && /destroy|hide/.test(option)) return;
      if (!data) $this.data('bs.tooltip', data = new Tooltip(this, options));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.tooltip;
  $.fn.tooltip = Plugin;
  $.fn.tooltip.Constructor = Tooltip; // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old;
    return this;
  };
}(jQuery);
/* ========================================================================
 * Bootstrap: popover.js v3.3.4
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict'; // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function Popover(element, options) {
    this.init('popover', element, options);
  };

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js');
  Popover.VERSION = '3.3.4';
  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }); // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);
  Popover.prototype.constructor = Popover;

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS;
  };

  Popover.prototype.setContent = function () {
    var $tip = this.tip();
    var title = this.getTitle();
    var content = this.getContent();
    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title);
    $tip.find('.popover-content').children().detach().end()[// we use append for html objects to maintain js events
    this.options.html ? typeof content == 'string' ? 'html' : 'append' : 'text'](content);
    $tip.removeClass('fade top bottom left right in'); // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.

    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide();
  };

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  };

  Popover.prototype.getContent = function () {
    var $e = this.$element;
    var o = this.options;
    return $e.attr('data-content') || (typeof o.content == 'function' ? o.content.call($e[0]) : o.content);
  };

  Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow');
  }; // POPOVER PLUGIN DEFINITION
  // =========================


  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.popover');
      var options = _typeof(option) == 'object' && option;
      if (!data && /destroy|hide/.test(option)) return;
      if (!data) $this.data('bs.popover', data = new Popover(this, options));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.popover;
  $.fn.popover = Plugin;
  $.fn.popover.Constructor = Popover; // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old;
    return this;
  };
}(jQuery);
/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.4
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict'; // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body = $(document.body);
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element);
    this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
    this.selector = (this.options.target || '') + ' .nav li > a';
    this.offsets = [];
    this.targets = [];
    this.activeTarget = null;
    this.scrollHeight = 0;
    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this));
    this.refresh();
    this.process();
  }

  ScrollSpy.VERSION = '3.3.4';
  ScrollSpy.DEFAULTS = {
    offset: 10
  };

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  };

  ScrollSpy.prototype.refresh = function () {
    var that = this;
    var offsetMethod = 'offset';
    var offsetBase = 0;
    this.offsets = [];
    this.targets = [];
    this.scrollHeight = this.getScrollHeight();

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position';
      offsetBase = this.$scrollElement.scrollTop();
    }

    this.$body.find(this.selector).map(function () {
      var $el = $(this);
      var href = $el.data('target') || $el.attr('href');
      var $href = /^#./.test(href) && $(href);
      return $href && $href.length && $href.is(':visible') && [[$href[offsetMethod]().top + offsetBase, href]] || null;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).each(function () {
      that.offsets.push(this[0]);
      that.targets.push(this[1]);
    });
  };

  ScrollSpy.prototype.process = function () {
    var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
    var scrollHeight = this.getScrollHeight();
    var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height();
    var offsets = this.offsets;
    var targets = this.targets;
    var activeTarget = this.activeTarget;
    var i;

    if (this.scrollHeight != scrollHeight) {
      this.refresh();
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null;
      return this.clear();
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i] && scrollTop >= offsets[i] && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1]) && this.activate(targets[i]);
    }
  };

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target;
    this.clear();
    var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';
    var active = $(selector).parents('li').addClass('active');

    if (active.parent('.dropdown-menu').length) {
      active = active.closest('li.dropdown').addClass('active');
    }

    active.trigger('activate.bs.scrollspy');
  };

  ScrollSpy.prototype.clear = function () {
    $(this.selector).parentsUntil(this.options.target, '.active').removeClass('active');
  }; // SCROLLSPY PLUGIN DEFINITION
  // ===========================


  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.scrollspy');
      var options = _typeof(option) == 'object' && option;
      if (!data) $this.data('bs.scrollspy', data = new ScrollSpy(this, options));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.scrollspy;
  $.fn.scrollspy = Plugin;
  $.fn.scrollspy.Constructor = ScrollSpy; // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old;
    return this;
  }; // SCROLLSPY DATA-API
  // ==================


  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this);
      Plugin.call($spy, $spy.data());
    });
  });
}(jQuery);
/* ========================================================================
 * Bootstrap: tab.js v3.3.4
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict'; // TAB CLASS DEFINITION
  // ====================

  var Tab = function Tab(element) {
    this.element = $(element);
  };

  Tab.VERSION = '3.3.4';
  Tab.TRANSITION_DURATION = 150;

  Tab.prototype.show = function () {
    var $this = this.element;
    var $ul = $this.closest('ul:not(.dropdown-menu)');
    var selector = $this.data('target');

    if (!selector) {
      selector = $this.attr('href');
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return;
    var $previous = $ul.find('.active:last a');
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    });
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    });
    $previous.trigger(hideEvent);
    $this.trigger(showEvent);
    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return;
    var $target = $(selector);
    this.activate($this.closest('li'), $ul);
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      });
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      });
    });
  };

  Tab.prototype.activate = function (element, container, callback) {
    var $active = container.find('> .active');
    var transition = callback && $.support.transition && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length);

    function next() {
      $active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', false);
      element.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded', true);

      if (transition) {
        element[0].offsetWidth; // reflow for transition

        element.addClass('in');
      } else {
        element.removeClass('fade');
      }

      if (element.parent('.dropdown-menu').length) {
        element.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', true);
      }

      callback && callback();
    }

    $active.length && transition ? $active.one('bsTransitionEnd', next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next();
    $active.removeClass('in');
  }; // TAB PLUGIN DEFINITION
  // =====================


  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.tab');
      if (!data) $this.data('bs.tab', data = new Tab(this));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.tab;
  $.fn.tab = Plugin;
  $.fn.tab.Constructor = Tab; // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old;
    return this;
  }; // TAB DATA-API
  // ============


  var clickHandler = function clickHandler(e) {
    e.preventDefault();
    Plugin.call($(this), 'show');
  };

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler).on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler);
}(jQuery);
/* ========================================================================
 * Bootstrap: affix.js v3.3.4
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict'; // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function Affix(element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options);
    this.$target = $(this.options.target).on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this));
    this.$element = $(element);
    this.affixed = null;
    this.unpin = null;
    this.pinnedOffset = null;
    this.checkPosition();
  };

  Affix.VERSION = '3.3.4';
  Affix.RESET = 'affix affix-top affix-bottom';
  Affix.DEFAULTS = {
    offset: 0,
    target: window
  };

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop = this.$target.scrollTop();
    var position = this.$element.offset();
    var targetHeight = this.$target.height();
    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false;

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return scrollTop + this.unpin <= position.top ? false : 'bottom';
      return scrollTop + targetHeight <= scrollHeight - offsetBottom ? false : 'bottom';
    }

    var initializing = this.affixed == null;
    var colliderTop = initializing ? scrollTop : position.top;
    var colliderHeight = initializing ? targetHeight : height;
    if (offsetTop != null && scrollTop <= offsetTop) return 'top';
    if (offsetBottom != null && colliderTop + colliderHeight >= scrollHeight - offsetBottom) return 'bottom';
    return false;
  };

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(Affix.RESET).addClass('affix');
    var scrollTop = this.$target.scrollTop();
    var position = this.$element.offset();
    return this.pinnedOffset = position.top - scrollTop;
  };

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1);
  };

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return;
    var height = this.$element.height();
    var offset = this.options.offset;
    var offsetTop = offset.top;
    var offsetBottom = offset.bottom;
    var scrollHeight = $(document.body).height();
    if (_typeof(offset) != 'object') offsetBottom = offsetTop = offset;
    if (typeof offsetTop == 'function') offsetTop = offset.top(this.$element);
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element);
    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom);

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '');
      var affixType = 'affix' + (affix ? '-' + affix : '');
      var e = $.Event(affixType + '.bs.affix');
      this.$element.trigger(e);
      if (e.isDefaultPrevented()) return;
      this.affixed = affix;
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null;
      this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix', 'affixed') + '.bs.affix');
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      });
    }
  }; // AFFIX PLUGIN DEFINITION
  // =======================


  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.affix');
      var options = _typeof(option) == 'object' && option;
      if (!data) $this.data('bs.affix', data = new Affix(this, options));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.affix;
  $.fn.affix = Plugin;
  $.fn.affix.Constructor = Affix; // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old;
    return this;
  }; // AFFIX DATA-API
  // ==============


  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this);
      var data = $spy.data();
      data.offset = data.offset || {};
      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom;
      if (data.offsetTop != null) data.offset.top = data.offsetTop;
      Plugin.call($spy, data);
    });
  });
}(jQuery);

/***/ }),

/***/ "./resources/assets/js/jquery.min.js":
/*!*******************************************!*\
  !*** ./resources/assets/js/jquery.min.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v2.0.0 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license

*/
(function (e, undefined) {
  var t,
      n,
      r = _typeof(undefined),
      i = e.location,
      o = e.document,
      s = o.documentElement,
      a = e.jQuery,
      u = e.$,
      l = {},
      c = [],
      f = "2.0.0",
      p = c.concat,
      h = c.push,
      d = c.slice,
      g = c.indexOf,
      m = l.toString,
      y = l.hasOwnProperty,
      v = f.trim,
      x = function x(e, n) {
    return new x.fn.init(e, n, t);
  },
      b = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      w = /\S+/g,
      T = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      k = /^-ms-/,
      N = /-([\da-z])/gi,
      E = function E(e, t) {
    return t.toUpperCase();
  },
      S = function S() {
    o.removeEventListener("DOMContentLoaded", S, !1), e.removeEventListener("load", S, !1), x.ready();
  };

  x.fn = x.prototype = {
    jquery: f,
    constructor: x,
    init: function init(e, t, n) {
      var r, i;
      if (!e) return this;

      if ("string" == typeof e) {
        if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : T.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

        if (r[1]) {
          if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : o, !0)), C.test(r[1]) && x.isPlainObject(t)) for (r in t) {
            x.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          }
          return this;
        }

        return i = o.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = o, this.selector = e, this;
      }

      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? n.ready(e) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this));
    },
    selector: "",
    length: 0,
    toArray: function toArray() {
      return d.call(this);
    },
    get: function get(e) {
      return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = x.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t;
    },
    each: function each(e, t) {
      return x.each(this, e, t);
    },
    ready: function ready(e) {
      return x.ready.promise().done(e), this;
    },
    slice: function slice() {
      return this.pushStack(d.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (0 > e ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
    },
    map: function map(e) {
      return this.pushStack(x.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    end: function end() {
      return this.prevObject || this.constructor(null);
    },
    push: h,
    sort: [].sort,
    splice: [].splice
  }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        s = arguments[0] || {},
        a = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof s && (l = s, s = arguments[1] || {}, a = 2), "object" == _typeof(s) || x.isFunction(s) || (s = {}), u === a && (s = this, --a); u > a; a++) {
      if (null != (e = arguments[a])) for (t in e) {
        n = s[t], r = e[t], s !== r && (l && r && (x.isPlainObject(r) || (i = x.isArray(r))) ? (i ? (i = !1, o = n && x.isArray(n) ? n : []) : o = n && x.isPlainObject(n) ? n : {}, s[t] = x.extend(l, o, r)) : r !== undefined && (s[t] = r));
      }
    }

    return s;
  }, x.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    noConflict: function noConflict(t) {
      return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = a), x;
    },
    isReady: !1,
    readyWait: 1,
    holdReady: function holdReady(e) {
      e ? x.readyWait++ : x.ready(!0);
    },
    ready: function ready(e) {
      (e === !0 ? --x.readyWait : x.isReady) || (x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(o, [x]), x.fn.trigger && x(o).trigger("ready").off("ready")));
    },
    isFunction: function isFunction(e) {
      return "function" === x.type(e);
    },
    isArray: Array.isArray,
    isWindow: function isWindow(e) {
      return null != e && e === e.window;
    },
    isNumeric: function isNumeric(e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    },
    type: function type(e) {
      return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? l[m.call(e)] || "object" : _typeof(e);
    },
    isPlainObject: function isPlainObject(e) {
      if ("object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;

      try {
        if (e.constructor && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (t) {
        return !1;
      }

      return !0;
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    error: function error(e) {
      throw Error(e);
    },
    parseHTML: function parseHTML(e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && (n = t, t = !1), t = t || o;
      var r = C.exec(e),
          i = !n && [];
      return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes));
    },
    parseJSON: JSON.parse,
    parseXML: function parseXML(e) {
      var t, n;
      if (!e || "string" != typeof e) return null;

      try {
        n = new DOMParser(), t = n.parseFromString(e, "text/xml");
      } catch (r) {
        t = undefined;
      }

      return (!t || t.getElementsByTagName("parsererror").length) && x.error("Invalid XML: " + e), t;
    },
    noop: function noop() {},
    globalEval: function globalEval(e) {
      var t,
          n = eval;
      e = x.trim(e), e && (1 === e.indexOf("use strict") ? (t = o.createElement("script"), t.text = e, o.head.appendChild(t).parentNode.removeChild(t)) : n(e));
    },
    camelCase: function camelCase(e) {
      return e.replace(k, "ms-").replace(N, E);
    },
    nodeName: function nodeName(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    },
    each: function each(e, t, n) {
      var r,
          i = 0,
          o = e.length,
          s = j(e);

      if (n) {
        if (s) {
          for (; o > i; i++) {
            if (r = t.apply(e[i], n), r === !1) break;
          }
        } else for (i in e) {
          if (r = t.apply(e[i], n), r === !1) break;
        }
      } else if (s) {
        for (; o > i; i++) {
          if (r = t.call(e[i], i, e[i]), r === !1) break;
        }
      } else for (i in e) {
        if (r = t.call(e[i], i, e[i]), r === !1) break;
      }

      return e;
    },
    trim: function trim(e) {
      return null == e ? "" : v.call(e);
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (j(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : g.call(t, e, n);
    },
    merge: function merge(e, t) {
      var n = t.length,
          r = e.length,
          i = 0;
      if ("number" == typeof n) for (; n > i; i++) {
        e[r++] = t[i];
      } else while (t[i] !== undefined) {
        e[r++] = t[i++];
      }
      return e.length = r, e;
    },
    grep: function grep(e, t, n) {
      var r,
          i = [],
          o = 0,
          s = e.length;

      for (n = !!n; s > o; o++) {
        r = !!t(e[o], o), n !== r && i.push(e[o]);
      }

      return i;
    },
    map: function map(e, t, n) {
      var r,
          i = 0,
          o = e.length,
          s = j(e),
          a = [];
      if (s) for (; o > i; i++) {
        r = t(e[i], i, n), null != r && (a[a.length] = r);
      } else for (i in e) {
        r = t(e[i], i, n), null != r && (a[a.length] = r);
      }
      return p.apply([], a);
    },
    guid: 1,
    proxy: function proxy(e, t) {
      var n, r, i;
      return "string" == typeof t && (n = e[t], t = e, e = n), x.isFunction(e) ? (r = d.call(arguments, 2), i = function i() {
        return e.apply(t || this, r.concat(d.call(arguments)));
      }, i.guid = e.guid = e.guid || x.guid++, i) : undefined;
    },
    access: function access(e, t, n, r, i, o, s) {
      var a = 0,
          u = e.length,
          l = null == n;

      if ("object" === x.type(n)) {
        i = !0;

        for (a in n) {
          x.access(e, t, a, n[a], !0, o, s);
        }
      } else if (r !== undefined && (i = !0, x.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
        return l.call(x(e), n);
      })), t)) for (; u > a; a++) {
        t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
      }

      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    now: Date.now,
    swap: function swap(e, t, n, r) {
      var i,
          o,
          s = {};

      for (o in t) {
        s[o] = e.style[o], e.style[o] = t[o];
      }

      i = n.apply(e, r || []);

      for (o in t) {
        e.style[o] = s[o];
      }

      return i;
    }
  }), x.ready.promise = function (t) {
    return n || (n = x.Deferred(), "complete" === o.readyState ? setTimeout(x.ready) : (o.addEventListener("DOMContentLoaded", S, !1), e.addEventListener("load", S, !1))), n.promise(t);
  }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
    l["[object " + t + "]"] = t.toLowerCase();
  });

  function j(e) {
    var t = e.length,
        n = x.type(e);
    return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }

  t = x(o), function (e, undefined) {
    var t,
        n,
        r,
        i,
        o,
        s,
        a,
        u,
        l,
        c,
        f,
        p,
        h,
        d,
        g,
        m,
        y = "sizzle" + -new Date(),
        v = e.document,
        b = {},
        w = 0,
        T = 0,
        C = ot(),
        k = ot(),
        N = ot(),
        E = !1,
        S = function S() {
      return 0;
    },
        j = _typeof(undefined),
        D = 1 << 31,
        A = [],
        L = A.pop,
        q = A.push,
        H = A.push,
        O = A.slice,
        F = A.indexOf || function (e) {
      var t = 0,
          n = this.length;

      for (; n > t; t++) {
        if (this[t] === e) return t;
      }

      return -1;
    },
        P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        R = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        W = M.replace("w", "w#"),
        $ = "\\[" + R + "*(" + M + ")" + R + "*(?:([*^$|!~]?=)" + R + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + R + "*\\]",
        B = ":(" + M + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)",
        I = RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
        z = RegExp("^" + R + "*," + R + "*"),
        _ = RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
        X = RegExp(R + "*[+~]"),
        U = RegExp("=" + R + "*([^\\]'\"]*)" + R + "*\\]", "g"),
        Y = RegExp(B),
        V = RegExp("^" + W + "$"),
        G = {
      ID: RegExp("^#(" + M + ")"),
      CLASS: RegExp("^\\.(" + M + ")"),
      TAG: RegExp("^(" + M.replace("w", "w*") + ")"),
      ATTR: RegExp("^" + $),
      PSEUDO: RegExp("^" + B),
      CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
      "boolean": RegExp("^(?:" + P + ")$", "i"),
      needsContext: RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
    },
        J = /^[^{]+\{\s*\[native \w/,
        Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        K = /^(?:input|select|textarea|button)$/i,
        Z = /^h\d$/i,
        et = /'|\\/g,
        tt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
        nt = function nt(e, t) {
      var n = "0x" + t - 65536;
      return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n);
    };

    try {
      H.apply(A = O.call(v.childNodes), v.childNodes), A[v.childNodes.length].nodeType;
    } catch (rt) {
      H = {
        apply: A.length ? function (e, t) {
          q.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function it(e) {
      return J.test(e + "");
    }

    function ot() {
      var _e,
          t = [];

      return _e = function e(n, i) {
        return t.push(n += " ") > r.cacheLength && delete _e[t.shift()], _e[n] = i;
      };
    }

    function st(e) {
      return e[y] = !0, e;
    }

    function at(e) {
      var t = c.createElement("div");

      try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function ut(e, t, n, r) {
      var i, o, s, a, u, f, d, g, x, w;
      if ((t ? t.ownerDocument || t : v) !== c && l(t), t = t || c, n = n || [], !e || "string" != typeof e) return n;
      if (1 !== (a = t.nodeType) && 9 !== a) return [];

      if (p && !r) {
        if (i = Q.exec(e)) if (s = i[1]) {
          if (9 === a) {
            if (o = t.getElementById(s), !o || !o.parentNode) return n;
            if (o.id === s) return n.push(o), n;
          } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && m(t, o) && o.id === s) return n.push(o), n;
        } else {
          if (i[2]) return H.apply(n, t.getElementsByTagName(e)), n;
          if ((s = i[3]) && b.getElementsByClassName && t.getElementsByClassName) return H.apply(n, t.getElementsByClassName(s)), n;
        }

        if (b.qsa && (!h || !h.test(e))) {
          if (g = d = y, x = t, w = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
            f = gt(e), (d = t.getAttribute("id")) ? g = d.replace(et, "\\$&") : t.setAttribute("id", g), g = "[id='" + g + "'] ", u = f.length;

            while (u--) {
              f[u] = g + mt(f[u]);
            }

            x = X.test(e) && t.parentNode || t, w = f.join(",");
          }

          if (w) try {
            return H.apply(n, x.querySelectorAll(w)), n;
          } catch (T) {} finally {
            d || t.removeAttribute("id");
          }
        }
      }

      return kt(e.replace(I, "$1"), t, n, r);
    }

    o = ut.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return t ? "HTML" !== t.nodeName : !1;
    }, l = ut.setDocument = function (e) {
      var t = e ? e.ownerDocument || e : v;
      return t !== c && 9 === t.nodeType && t.documentElement ? (c = t, f = t.documentElement, p = !o(t), b.getElementsByTagName = at(function (e) {
        return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length;
      }), b.attributes = at(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), b.getElementsByClassName = at(function (e) {
        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length;
      }), b.sortDetached = at(function (e) {
        return 1 & e.compareDocumentPosition(c.createElement("div"));
      }), b.getById = at(function (e) {
        return f.appendChild(e).id = y, !t.getElementsByName || !t.getElementsByName(y).length;
      }), b.getById ? (r.find.ID = function (e, t) {
        if (_typeof(t.getElementById) !== j && p) {
          var n = t.getElementById(e);
          return n && n.parentNode ? [n] : [];
        }
      }, r.filter.ID = function (e) {
        var t = e.replace(tt, nt);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }) : (r.find.ID = function (e, t) {
        if (_typeof(t.getElementById) !== j && p) {
          var n = t.getElementById(e);
          return n ? n.id === e || _typeof(n.getAttributeNode) !== j && n.getAttributeNode("id").value === e ? [n] : undefined : [];
        }
      }, r.filter.ID = function (e) {
        var t = e.replace(tt, nt);
        return function (e) {
          var n = _typeof(e.getAttributeNode) !== j && e.getAttributeNode("id");
          return n && n.value === t;
        };
      }), r.find.TAG = b.getElementsByTagName ? function (e, t) {
        return _typeof(t.getElementsByTagName) !== j ? t.getElementsByTagName(e) : undefined;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, r.find.CLASS = b.getElementsByClassName && function (e, t) {
        return _typeof(t.getElementsByClassName) !== j && p ? t.getElementsByClassName(e) : undefined;
      }, d = [], h = [], (b.qsa = it(t.querySelectorAll)) && (at(function (e) {
        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || h.push("\\[" + R + "*(?:value|" + P + ")"), e.querySelectorAll(":checked").length || h.push(":checked");
      }), at(function (e) {
        var t = c.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && h.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), h.push(",.*:");
      })), (b.matchesSelector = it(g = f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function (e) {
        b.disconnectedMatch = g.call(e, "div"), g.call(e, "[s!='']:x"), d.push("!=", B);
      }), h = h.length && RegExp(h.join("|")), d = d.length && RegExp(d.join("|")), m = it(f.contains) || f.compareDocumentPosition ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, S = f.compareDocumentPosition ? function (e, n) {
        if (e === n) return E = !0, 0;
        var r = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
        return r ? 1 & r || !b.sortDetached && n.compareDocumentPosition(e) === r ? e === t || m(v, e) ? -1 : n === t || m(v, n) ? 1 : u ? F.call(u, e) - F.call(u, n) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
      } : function (e, n) {
        var r,
            i = 0,
            o = e.parentNode,
            s = n.parentNode,
            a = [e],
            l = [n];
        if (e === n) return E = !0, 0;
        if (!o || !s) return e === t ? -1 : n === t ? 1 : o ? -1 : s ? 1 : u ? F.call(u, e) - F.call(u, n) : 0;
        if (o === s) return lt(e, n);
        r = e;

        while (r = r.parentNode) {
          a.unshift(r);
        }

        r = n;

        while (r = r.parentNode) {
          l.unshift(r);
        }

        while (a[i] === l[i]) {
          i++;
        }

        return i ? lt(a[i], l[i]) : a[i] === v ? -1 : l[i] === v ? 1 : 0;
      }, c) : c;
    }, ut.matches = function (e, t) {
      return ut(e, null, null, t);
    }, ut.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== c && l(e), t = t.replace(U, "='$1']"), !(!b.matchesSelector || !p || d && d.test(t) || h && h.test(t))) try {
        var n = g.call(e, t);
        if (n || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (r) {}
      return ut(t, c, null, [e]).length > 0;
    }, ut.contains = function (e, t) {
      return (e.ownerDocument || e) !== c && l(e), m(e, t);
    }, ut.attr = function (e, t) {
      (e.ownerDocument || e) !== c && l(e);
      var n = r.attrHandle[t.toLowerCase()],
          i = n && n(e, t, !p);
      return i === undefined ? b.attributes || !p ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null : i;
    }, ut.error = function (e) {
      throw Error("Syntax error, unrecognized expression: " + e);
    }, ut.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;

      if (E = !b.detectDuplicates, u = !b.sortStable && e.slice(0), e.sort(S), E) {
        while (t = e[i++]) {
          t === e[i] && (r = n.push(i));
        }

        while (r--) {
          e.splice(n[r], 1);
        }
      }

      return e;
    };

    function lt(e, t) {
      var n = t && e,
          r = n && (~t.sourceIndex || D) - (~e.sourceIndex || D);
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function ct(e, t, n) {
      var r;
      return n ? undefined : (r = e.getAttributeNode(t)) && r.specified ? r.value : e[t] === !0 ? t.toLowerCase() : null;
    }

    function ft(e, t, n) {
      var r;
      return n ? undefined : r = e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }

    function pt(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return "input" === n && t.type === e;
      };
    }

    function ht(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }

    function dt(e) {
      return st(function (t) {
        return t = +t, st(function (n, r) {
          var i,
              o = e([], n.length, t),
              s = o.length;

          while (s--) {
            n[i = o[s]] && (n[i] = !(r[i] = n[i]));
          }
        });
      });
    }

    i = ut.getText = function (e) {
      var t,
          n = "",
          r = 0,
          o = e.nodeType;

      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += i(e);
          }
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else for (; t = e[r]; r++) {
        n += i(t);
      }

      return n;
    }, r = ut.selectors = {
      cacheLength: 50,
      createPseudo: st,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(tt, nt), e[3] = (e[4] || e[5] || "").replace(tt, nt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ut.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ut.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[5] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && Y.test(n) && (t = gt(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(tt, nt).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = C[e + " "];
          return t || (t = RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && C(e, function (e) {
            return t.test("string" == typeof e.className && e.className || _typeof(e.getAttribute) !== j && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(e, t, n) {
          return function (r) {
            var i = ut.attr(r, e);
            return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0;
          };
        },
        CHILD: function CHILD(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l,
                c,
                f,
                p,
                h,
                d,
                g = o !== s ? "nextSibling" : "previousSibling",
                m = t.parentNode,
                v = a && t.nodeName.toLowerCase(),
                x = !u && !a;

            if (m) {
              if (o) {
                while (g) {
                  f = t;

                  while (f = f[g]) {
                    if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                  }

                  d = g = "only" === e && !d && "nextSibling";
                }

                return !0;
              }

              if (d = [s ? m.firstChild : m.lastChild], s && x) {
                c = m[y] || (m[y] = {}), l = c[e] || [], h = l[0] === w && l[1], p = l[0] === w && l[2], f = h && m.childNodes[h];

                while (f = ++h && f && f[g] || (p = h = 0) || d.pop()) {
                  if (1 === f.nodeType && ++p && f === t) {
                    c[e] = [w, h, p];
                    break;
                  }
                }
              } else if (x && (l = (t[y] || (t[y] = {}))[e]) && l[0] === w) p = l[1];else while (f = ++h && f && f[g] || (p = h = 0) || d.pop()) {
                if ((a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) && ++p && (x && ((f[y] || (f[y] = {}))[e] = [w, p]), f === t)) break;
              }

              return p -= i, p === r || 0 === p % r && p / r >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(e, t) {
          var n,
              i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ut.error("unsupported pseudo: " + e);
          return i[y] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? st(function (e, n) {
            var r,
                o = i(e, t),
                s = o.length;

            while (s--) {
              r = F.call(e, o[s]), e[r] = !(n[r] = o[s]);
            }
          }) : function (e) {
            return i(e, 0, n);
          }) : i;
        }
      },
      pseudos: {
        not: st(function (e) {
          var t = [],
              n = [],
              r = s(e.replace(I, "$1"));
          return r[y] ? st(function (e, t, n, i) {
            var o,
                s = r(e, null, i, []),
                a = e.length;

            while (a--) {
              (o = s[a]) && (e[a] = !(t[a] = o));
            }
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), !n.pop();
          };
        }),
        has: st(function (e) {
          return function (t) {
            return ut(e, t).length > 0;
          };
        }),
        contains: st(function (e) {
          return function (t) {
            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
          };
        }),
        lang: st(function (e) {
          return V.test(e || "") || ut.error("unsupported lang: " + e), e = e.replace(tt, nt).toLowerCase(), function (t) {
            var n;

            do {
              if (n = p ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);

            return !1;
          };
        }),
        target: function target(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function root(e) {
          return e === f;
        },
        focus: function focus(e) {
          return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: function enabled(e) {
          return e.disabled === !1;
        },
        disabled: function disabled(e) {
          return e.disabled === !0;
        },
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !r.pseudos.empty(e);
        },
        header: function header(e) {
          return Z.test(e.nodeName);
        },
        input: function input(e) {
          return K.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
        },
        first: dt(function () {
          return [0];
        }),
        last: dt(function (e, t) {
          return [t - 1];
        }),
        eq: dt(function (e, t, n) {
          return [0 > n ? n + t : n];
        }),
        even: dt(function (e, t) {
          var n = 0;

          for (; t > n; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: dt(function (e, t) {
          var n = 1;

          for (; t > n; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: dt(function (e, t, n) {
          var r = 0 > n ? n + t : n;

          for (; --r >= 0;) {
            e.push(r);
          }

          return e;
        }),
        gt: dt(function (e, t, n) {
          var r = 0 > n ? n + t : n;

          for (; t > ++r;) {
            e.push(r);
          }

          return e;
        })
      }
    };

    for (t in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      r.pseudos[t] = pt(t);
    }

    for (t in {
      submit: !0,
      reset: !0
    }) {
      r.pseudos[t] = ht(t);
    }

    function gt(e, t) {
      var n,
          i,
          o,
          s,
          a,
          u,
          l,
          c = k[e + " "];
      if (c) return t ? 0 : c.slice(0);
      a = e, u = [], l = r.preFilter;

      while (a) {
        (!n || (i = z.exec(a))) && (i && (a = a.slice(i[0].length) || a), u.push(o = [])), n = !1, (i = _.exec(a)) && (n = i.shift(), o.push({
          value: n,
          type: i[0].replace(I, " ")
        }), a = a.slice(n.length));

        for (s in r.filter) {
          !(i = G[s].exec(a)) || l[s] && !(i = l[s](i)) || (n = i.shift(), o.push({
            value: n,
            type: s,
            matches: i
          }), a = a.slice(n.length));
        }

        if (!n) break;
      }

      return t ? a.length : a ? ut.error(e) : k(e, u).slice(0);
    }

    function mt(e) {
      var t = 0,
          n = e.length,
          r = "";

      for (; n > t; t++) {
        r += e[t].value;
      }

      return r;
    }

    function yt(e, t, r) {
      var i = t.dir,
          o = r && "parentNode" === i,
          s = T++;
      return t.first ? function (t, n, r) {
        while (t = t[i]) {
          if (1 === t.nodeType || o) return e(t, n, r);
        }
      } : function (t, r, a) {
        var u,
            l,
            c,
            f = w + " " + s;

        if (a) {
          while (t = t[i]) {
            if ((1 === t.nodeType || o) && e(t, r, a)) return !0;
          }
        } else while (t = t[i]) {
          if (1 === t.nodeType || o) if (c = t[y] || (t[y] = {}), (l = c[i]) && l[0] === f) {
            if ((u = l[1]) === !0 || u === n) return u === !0;
          } else if (l = c[i] = [f], l[1] = e(t, r, a) || n, l[1] === !0) return !0;
        }
      };
    }

    function vt(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;

        while (i--) {
          if (!e[i](t, n, r)) return !1;
        }

        return !0;
      } : e[0];
    }

    function xt(e, t, n, r, i) {
      var o,
          s = [],
          a = 0,
          u = e.length,
          l = null != t;

      for (; u > a; a++) {
        (o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
      }

      return s;
    }

    function bt(e, t, n, r, i, o) {
      return r && !r[y] && (r = bt(r)), i && !i[y] && (i = bt(i, o)), st(function (o, s, a, u) {
        var l,
            c,
            f,
            p = [],
            h = [],
            d = s.length,
            g = o || Ct(t || "*", a.nodeType ? [a] : a, []),
            m = !e || !o && t ? g : xt(g, p, e, a, u),
            y = n ? i || (o ? e : d || r) ? [] : s : m;

        if (n && n(m, y, a, u), r) {
          l = xt(y, h), r(l, [], a, u), c = l.length;

          while (c--) {
            (f = l[c]) && (y[h[c]] = !(m[h[c]] = f));
          }
        }

        if (o) {
          if (i || e) {
            if (i) {
              l = [], c = y.length;

              while (c--) {
                (f = y[c]) && l.push(m[c] = f);
              }

              i(null, y = [], l, u);
            }

            c = y.length;

            while (c--) {
              (f = y[c]) && (l = i ? F.call(o, f) : p[c]) > -1 && (o[l] = !(s[l] = f));
            }
          }
        } else y = xt(y === s ? y.splice(d, y.length) : y), i ? i(null, s, y, u) : H.apply(s, y);
      });
    }

    function wt(e) {
      var t,
          n,
          i,
          o = e.length,
          s = r.relative[e[0].type],
          u = s || r.relative[" "],
          l = s ? 1 : 0,
          c = yt(function (e) {
        return e === t;
      }, u, !0),
          f = yt(function (e) {
        return F.call(t, e) > -1;
      }, u, !0),
          p = [function (e, n, r) {
        return !s && (r || n !== a) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
      }];

      for (; o > l; l++) {
        if (n = r.relative[e[l].type]) p = [yt(vt(p), n)];else {
          if (n = r.filter[e[l].type].apply(null, e[l].matches), n[y]) {
            for (i = ++l; o > i; i++) {
              if (r.relative[e[i].type]) break;
            }

            return bt(l > 1 && vt(p), l > 1 && mt(e.slice(0, l - 1)).replace(I, "$1"), n, i > l && wt(e.slice(l, i)), o > i && wt(e = e.slice(i)), o > i && mt(e));
          }

          p.push(n);
        }
      }

      return vt(p);
    }

    function Tt(e, t) {
      var i = 0,
          o = t.length > 0,
          s = e.length > 0,
          u = function u(_u, l, f, p, h) {
        var d,
            g,
            m,
            y = [],
            v = 0,
            x = "0",
            b = _u && [],
            T = null != h,
            C = a,
            k = _u || s && r.find.TAG("*", h && l.parentNode || l),
            N = w += null == C ? 1 : Math.random() || .1;

        for (T && (a = l !== c && l, n = i); null != (d = k[x]); x++) {
          if (s && d) {
            g = 0;

            while (m = e[g++]) {
              if (m(d, l, f)) {
                p.push(d);
                break;
              }
            }

            T && (w = N, n = ++i);
          }

          o && ((d = !m && d) && v--, _u && b.push(d));
        }

        if (v += x, o && x !== v) {
          g = 0;

          while (m = t[g++]) {
            m(b, y, l, f);
          }

          if (_u) {
            if (v > 0) while (x--) {
              b[x] || y[x] || (y[x] = L.call(p));
            }
            y = xt(y);
          }

          H.apply(p, y), T && !_u && y.length > 0 && v + t.length > 1 && ut.uniqueSort(p);
        }

        return T && (w = N, a = C), b;
      };

      return o ? st(u) : u;
    }

    s = ut.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = N[e + " "];

      if (!o) {
        t || (t = gt(e)), n = t.length;

        while (n--) {
          o = wt(t[n]), o[y] ? r.push(o) : i.push(o);
        }

        o = N(e, Tt(i, r));
      }

      return o;
    };

    function Ct(e, t, n) {
      var r = 0,
          i = t.length;

      for (; i > r; r++) {
        ut(e, t[r], n);
      }

      return n;
    }

    function kt(e, t, n, i) {
      var o,
          a,
          u,
          l,
          c,
          f = gt(e);

      if (!i && 1 === f.length) {
        if (a = f[0] = f[0].slice(0), a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && p && r.relative[a[1].type]) {
          if (t = (r.find.ID(u.matches[0].replace(tt, nt), t) || [])[0], !t) return n;
          e = e.slice(a.shift().value.length);
        }

        o = G.needsContext.test(e) ? 0 : a.length;

        while (o--) {
          if (u = a[o], r.relative[l = u.type]) break;

          if ((c = r.find[l]) && (i = c(u.matches[0].replace(tt, nt), X.test(a[0].type) && t.parentNode || t))) {
            if (a.splice(o, 1), e = i.length && mt(a), !e) return H.apply(n, i), n;
            break;
          }
        }
      }

      return s(e, f)(i, t, !p, n, X.test(e)), n;
    }

    r.pseudos.nth = r.pseudos.eq;

    function Nt() {}

    Nt.prototype = r.filters = r.pseudos, r.setFilters = new Nt(), b.sortStable = y.split("").sort(S).join("") === y, l(), [0, 0].sort(S), b.detectDuplicates = E, at(function (e) {
      if (e.innerHTML = "<a href='#'></a>", "#" !== e.firstChild.getAttribute("href")) {
        var t = "type|href|height|width".split("|"),
            n = t.length;

        while (n--) {
          r.attrHandle[t[n]] = ft;
        }
      }
    }), at(function (e) {
      if (null != e.getAttribute("disabled")) {
        var t = P.split("|"),
            n = t.length;

        while (n--) {
          r.attrHandle[t[n]] = ct;
        }
      }
    }), x.find = ut, x.expr = ut.selectors, x.expr[":"] = x.expr.pseudos, x.unique = ut.uniqueSort, x.text = ut.getText, x.isXMLDoc = ut.isXML, x.contains = ut.contains;
  }(e);
  var D = {};

  function A(e) {
    var t = D[e] = {};
    return x.each(e.match(w) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }

  x.Callbacks = function (e) {
    e = "string" == typeof e ? D[e] || A(e) : x.extend({}, e);

    var t,
        n,
        r,
        i,
        o,
        s,
        a = [],
        u = !e.once && [],
        l = function l(f) {
      for (t = e.memory && f, n = !0, s = i || 0, i = 0, o = a.length, r = !0; a && o > s; s++) {
        if (a[s].apply(f[0], f[1]) === !1 && e.stopOnFalse) {
          t = !1;
          break;
        }
      }

      r = !1, a && (u ? u.length && l(u.shift()) : t ? a = [] : c.disable());
    },
        c = {
      add: function add() {
        if (a) {
          var n = a.length;
          (function s(t) {
            x.each(t, function (t, n) {
              var r = x.type(n);
              "function" === r ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== r && s(n);
            });
          })(arguments), r ? o = a.length : t && (i = n, l(t));
        }

        return this;
      },
      remove: function remove() {
        return a && x.each(arguments, function (e, t) {
          var n;

          while ((n = x.inArray(t, a, n)) > -1) {
            a.splice(n, 1), r && (o >= n && o--, s >= n && s--);
          }
        }), this;
      },
      has: function has(e) {
        return e ? x.inArray(e, a) > -1 : !(!a || !a.length);
      },
      empty: function empty() {
        return a = [], o = 0, this;
      },
      disable: function disable() {
        return a = u = t = undefined, this;
      },
      disabled: function disabled() {
        return !a;
      },
      lock: function lock() {
        return u = undefined, t || c.disable(), this;
      },
      locked: function locked() {
        return !u;
      },
      fireWith: function fireWith(e, t) {
        return t = t || [], t = [e, t.slice ? t.slice() : t], !a || n && !u || (r ? u.push(t) : l(t)), this;
      },
      fire: function fire() {
        return c.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!n;
      }
    };

    return c;
  }, x.extend({
    Deferred: function Deferred(e) {
      var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]],
          n = "pending",
          r = {
        state: function state() {
          return n;
        },
        always: function always() {
          return i.done(arguments).fail(arguments), this;
        },
        then: function then() {
          var e = arguments;
          return x.Deferred(function (n) {
            x.each(t, function (t, o) {
              var s = o[0],
                  a = x.isFunction(e[t]) && e[t];
              i[o[1]](function () {
                var e = a && a.apply(this, arguments);
                e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === r ? n.promise() : this, a ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? x.extend(e, r) : r;
        }
      },
          i = {};
      return r.pipe = r.then, x.each(t, function (e, o) {
        var s = o[2],
            a = o[3];
        r[o[1]] = s.add, a && s.add(function () {
          n = a;
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
          return i[o[0] + "With"](this === i ? r : this, arguments), this;
        }, i[o[0] + "With"] = s.fireWith;
      }), r.promise(i), e && e.call(i, i), i;
    },
    when: function when(e) {
      var t = 0,
          n = d.call(arguments),
          r = n.length,
          i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
          o = 1 === i ? e : x.Deferred(),
          s = function s(e, t, n) {
        return function (r) {
          t[e] = this, n[e] = arguments.length > 1 ? d.call(arguments) : r, n === a ? o.notifyWith(t, n) : --i || o.resolveWith(t, n);
        };
      },
          a,
          u,
          l;

      if (r > 1) for (a = Array(r), u = Array(r), l = Array(r); r > t; t++) {
        n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(s(t, l, n)).fail(o.reject).progress(s(t, u, a)) : --i;
      }
      return i || o.resolveWith(l, n), o.promise();
    }
  }), x.support = function (t) {
    var n = o.createElement("input"),
        r = o.createDocumentFragment(),
        i = o.createElement("div"),
        s = o.createElement("select"),
        a = s.appendChild(o.createElement("option"));
    return n.type ? (n.type = "checkbox", t.checkOn = "" !== n.value, t.optSelected = a.selected, t.reliableMarginRight = !0, t.boxSizingReliable = !0, t.pixelPosition = !1, n.checked = !0, t.noCloneChecked = n.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !a.disabled, n = o.createElement("input"), n.value = "t", n.type = "radio", t.radioValue = "t" === n.value, n.setAttribute("checked", "t"), n.setAttribute("name", "t"), r.appendChild(n), t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, t.focusinBubbles = "onfocusin" in e, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === i.style.backgroundClip, x(function () {
      var n,
          r,
          s = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
          a = o.getElementsByTagName("body")[0];
      a && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(i), i.innerHTML = "", i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", x.swap(a, null != a.style.zoom ? {
        zoom: 1
      } : {}, function () {
        t.boxSizing = 4 === i.offsetWidth;
      }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(i, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(i, null) || {
        width: "4px"
      }).width, r = i.appendChild(o.createElement("div")), r.style.cssText = i.style.cssText = s, r.style.marginRight = r.style.width = "0", i.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), a.removeChild(n));
    }), t) : t;
  }({});
  var L,
      q,
      H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
      O = /([A-Z])/g;

  function F() {
    Object.defineProperty(this.cache = {}, 0, {
      get: function get() {
        return {};
      }
    }), this.expando = x.expando + Math.random();
  }

  F.uid = 1, F.accepts = function (e) {
    return e.nodeType ? 1 === e.nodeType || 9 === e.nodeType : !0;
  }, F.prototype = {
    key: function key(e) {
      if (!F.accepts(e)) return 0;
      var t = {},
          n = e[this.expando];

      if (!n) {
        n = F.uid++;

        try {
          t[this.expando] = {
            value: n
          }, Object.defineProperties(e, t);
        } catch (r) {
          t[this.expando] = n, x.extend(e, t);
        }
      }

      return this.cache[n] || (this.cache[n] = {}), n;
    },
    set: function set(e, t, n) {
      var r,
          i = this.key(e),
          o = this.cache[i];
      if ("string" == typeof t) o[t] = n;else if (x.isEmptyObject(o)) this.cache[i] = t;else for (r in t) {
        o[r] = t[r];
      }
    },
    get: function get(e, t) {
      var n = this.cache[this.key(e)];
      return t === undefined ? n : n[t];
    },
    access: function access(e, t, n) {
      return t === undefined || t && "string" == typeof t && n === undefined ? this.get(e, t) : (this.set(e, t, n), n !== undefined ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r,
          i = this.key(e),
          o = this.cache[i];
      if (t === undefined) this.cache[i] = {};else {
        x.isArray(t) ? r = t.concat(t.map(x.camelCase)) : t in o ? r = [t] : (r = x.camelCase(t), r = r in o ? [r] : r.match(w) || []), n = r.length;

        while (n--) {
          delete o[r[n]];
        }
      }
    },
    hasData: function hasData(e) {
      return !x.isEmptyObject(this.cache[e[this.expando]] || {});
    },
    discard: function discard(e) {
      delete this.cache[this.key(e)];
    }
  }, L = new F(), q = new F(), x.extend({
    acceptData: F.accepts,
    hasData: function hasData(e) {
      return L.hasData(e) || q.hasData(e);
    },
    data: function data(e, t, n) {
      return L.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      L.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return q.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      q.remove(e, t);
    }
  }), x.fn.extend({
    data: function data(e, t) {
      var n,
          r,
          i = this[0],
          o = 0,
          s = null;

      if (e === undefined) {
        if (this.length && (s = L.get(i), 1 === i.nodeType && !q.get(i, "hasDataAttrs"))) {
          for (n = i.attributes; n.length > o; o++) {
            r = n[o].name, 0 === r.indexOf("data-") && (r = x.camelCase(r.substring(5)), P(i, r, s[r]));
          }

          q.set(i, "hasDataAttrs", !0);
        }

        return s;
      }

      return "object" == _typeof(e) ? this.each(function () {
        L.set(this, e);
      }) : x.access(this, function (t) {
        var n,
            r = x.camelCase(e);

        if (i && t === undefined) {
          if (n = L.get(i, e), n !== undefined) return n;
          if (n = L.get(i, r), n !== undefined) return n;
          if (n = P(i, r, undefined), n !== undefined) return n;
        } else this.each(function () {
          var n = L.get(this, r);
          L.set(this, r, t), -1 !== e.indexOf("-") && n !== undefined && L.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        L.remove(this, e);
      });
    }
  });

  function P(e, t, n) {
    var r;
    if (n === undefined && 1 === e.nodeType) if (r = "data-" + t.replace(O, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
      try {
        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : H.test(n) ? JSON.parse(n) : n;
      } catch (i) {}

      L.set(e, t, n);
    } else n = undefined;
    return n;
  }

  x.extend({
    queue: function queue(e, t, n) {
      var r;
      return e ? (t = (t || "fx") + "queue", r = q.get(e, t), n && (!r || x.isArray(n) ? r = q.access(e, t, x.makeArray(n)) : r.push(n)), r || []) : undefined;
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = x.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = x._queueHooks(e, t),
          s = function s() {
        x.dequeue(e, t);
      };

      "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return q.get(e, n) || q.access(e, n, {
        empty: x.Callbacks("once memory").add(function () {
          q.remove(e, [t + "queue", n]);
        })
      });
    }
  }), x.fn.extend({
    queue: function queue(e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), n > arguments.length ? x.queue(this[0], e) : t === undefined ? this : this.each(function () {
        var n = x.queue(this, e, t);
        x._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        x.dequeue(this, e);
      });
    },
    delay: function delay(e, t) {
      return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
        var r = setTimeout(t, e);

        n.stop = function () {
          clearTimeout(r);
        };
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = x.Deferred(),
          o = this,
          s = this.length,
          a = function a() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = undefined), e = e || "fx";

      while (s--) {
        n = q.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
      }

      return a(), i.promise(t);
    }
  });
  var R,
      M,
      W = /[\t\r\n]/g,
      $ = /\r/g,
      B = /^(?:input|select|textarea|button)$/i;
  x.fn.extend({
    attr: function attr(e, t) {
      return x.access(this, x.attr, e, t, arguments.length > 1);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        x.removeAttr(this, e);
      });
    },
    prop: function prop(e, t) {
      return x.access(this, x.prop, e, t, arguments.length > 1);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[x.propFix[e] || e];
      });
    },
    addClass: function addClass(e) {
      var t,
          n,
          r,
          i,
          o,
          s = 0,
          a = this.length,
          u = "string" == typeof e && e;
      if (x.isFunction(e)) return this.each(function (t) {
        x(this).addClass(e.call(this, t, this.className));
      });
      if (u) for (t = (e || "").match(w) || []; a > s; s++) {
        if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(W, " ") : " ")) {
          o = 0;

          while (i = t[o++]) {
            0 > r.indexOf(" " + i + " ") && (r += i + " ");
          }

          n.className = x.trim(r);
        }
      }
      return this;
    },
    removeClass: function removeClass(e) {
      var t,
          n,
          r,
          i,
          o,
          s = 0,
          a = this.length,
          u = 0 === arguments.length || "string" == typeof e && e;
      if (x.isFunction(e)) return this.each(function (t) {
        x(this).removeClass(e.call(this, t, this.className));
      });
      if (u) for (t = (e || "").match(w) || []; a > s; s++) {
        if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(W, " ") : "")) {
          o = 0;

          while (i = t[o++]) {
            while (r.indexOf(" " + i + " ") >= 0) {
              r = r.replace(" " + i + " ", " ");
            }
          }

          n.className = e ? x.trim(r) : "";
        }
      }
      return this;
    },
    toggleClass: function toggleClass(e, t) {
      var n = _typeof(e),
          i = "boolean" == typeof t;

      return x.isFunction(e) ? this.each(function (n) {
        x(this).toggleClass(e.call(this, n, this.className, t), t);
      }) : this.each(function () {
        if ("string" === n) {
          var o,
              s = 0,
              a = x(this),
              u = t,
              l = e.match(w) || [];

          while (o = l[s++]) {
            u = i ? u : !a.hasClass(o), a[u ? "addClass" : "removeClass"](o);
          }
        } else (n === r || "boolean" === n) && (this.className && q.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : q.get(this, "__className__") || "");
      });
    },
    hasClass: function hasClass(e) {
      var t = " " + e + " ",
          n = 0,
          r = this.length;

      for (; r > n; n++) {
        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(W, " ").indexOf(t) >= 0) return !0;
      }

      return !1;
    },
    val: function val(e) {
      var t,
          n,
          r,
          i = this[0];
      {
        if (arguments.length) return r = x.isFunction(e), this.each(function (n) {
          var i,
              o = x(this);
          1 === this.nodeType && (i = r ? e.call(this, n, o.val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : x.isArray(i) && (i = x.map(i, function (e) {
            return null == e ? "" : e + "";
          })), t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], t && "set" in t && t.set(this, i, "value") !== undefined || (this.value = i));
        });
        if (i) return t = x.valHooks[i.type] || x.valHooks[i.nodeName.toLowerCase()], t && "get" in t && (n = t.get(i, "value")) !== undefined ? n : (n = i.value, "string" == typeof n ? n.replace($, "") : null == n ? "" : n);
      }
    }
  }), x.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = e.attributes.value;
          return !t || t.specified ? e.value : e.text;
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r = e.options,
              i = e.selectedIndex,
              o = "select-one" === e.type || 0 > i,
              s = o ? null : [],
              a = o ? i + 1 : r.length,
              u = 0 > i ? a : o ? i : 0;

          for (; a > u; u++) {
            if (n = r[u], !(!n.selected && u !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
              if (t = x(n).val(), o) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = x.makeArray(t),
              s = i.length;

          while (s--) {
            r = i[s], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    },
    attr: function attr(e, t, n) {
      var i,
          o,
          s = e.nodeType;
      if (e && 3 !== s && 8 !== s && 2 !== s) return _typeof(e.getAttribute) === r ? x.prop(e, t, n) : (1 === s && x.isXMLDoc(e) || (t = t.toLowerCase(), i = x.attrHooks[t] || (x.expr.match.boolean.test(t) ? M : R)), n === undefined ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = x.find.attr(e, t), null == o ? undefined : o) : null !== n ? i && "set" in i && (o = i.set(e, n, t)) !== undefined ? o : (e.setAttribute(t, n + ""), n) : (x.removeAttr(e, t), undefined));
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r,
          i = 0,
          o = t && t.match(w);
      if (o && 1 === e.nodeType) while (n = o[i++]) {
        r = x.propFix[n] || n, x.expr.match.boolean.test(n) && (e[r] = !1), e.removeAttribute(n);
      }
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function prop(e, t, n) {
      var r,
          i,
          o,
          s = e.nodeType;
      if (e && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !x.isXMLDoc(e), o && (t = x.propFix[t] || t, i = x.propHooks[t]), n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          return e.hasAttribute("tabindex") || B.test(e.nodeName) || e.href ? e.tabIndex : -1;
        }
      }
    }
  }), M = {
    set: function set(e, t, n) {
      return t === !1 ? x.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, x.each(x.expr.match.boolean.source.match(/\w+/g), function (e, t) {
    var n = x.expr.attrHandle[t] || x.find.attr;

    x.expr.attrHandle[t] = function (e, t, r) {
      var i = x.expr.attrHandle[t],
          o = r ? undefined : (x.expr.attrHandle[t] = undefined) != n(e, t, r) ? t.toLowerCase() : null;
      return x.expr.attrHandle[t] = i, o;
    };
  }), x.support.optSelected || (x.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    }
  }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    x.propFix[this.toLowerCase()] = this;
  }), x.each(["radio", "checkbox"], function () {
    x.valHooks[this] = {
      set: function set(e, t) {
        return x.isArray(t) ? e.checked = x.inArray(x(e).val(), t) >= 0 : undefined;
      }
    }, x.support.checkOn || (x.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  });
  var I = /^key/,
      z = /^(?:mouse|contextmenu)|click/,
      _ = /^(?:focusinfocus|focusoutblur)$/,
      X = /^([^.]*)(?:\.(.+)|)$/;

  function U() {
    return !0;
  }

  function Y() {
    return !1;
  }

  function V() {
    try {
      return o.activeElement;
    } catch (e) {}
  }

  x.event = {
    global: {},
    add: function add(e, t, n, i, o) {
      var s,
          a,
          u,
          l,
          c,
          f,
          p,
          h,
          d,
          g,
          m,
          y = q.get(e);

      if (y) {
        n.handler && (s = n, n = s.handler, o = s.selector), n.guid || (n.guid = x.guid++), (l = y.events) || (l = y.events = {}), (a = y.handle) || (a = y.handle = function (e) {
          return _typeof(x) === r || e && x.event.triggered === e.type ? undefined : x.event.dispatch.apply(a.elem, arguments);
        }, a.elem = e), t = (t || "").match(w) || [""], c = t.length;

        while (c--) {
          u = X.exec(t[c]) || [], d = m = u[1], g = (u[2] || "").split(".").sort(), d && (p = x.event.special[d] || {}, d = (o ? p.delegateType : p.bindType) || d, p = x.event.special[d] || {}, f = x.extend({
            type: d,
            origType: m,
            data: i,
            handler: n,
            guid: n.guid,
            selector: o,
            needsContext: o && x.expr.match.needsContext.test(o),
            namespace: g.join(".")
          }, s), (h = l[d]) || (h = l[d] = [], h.delegateCount = 0, p.setup && p.setup.call(e, i, g, a) !== !1 || e.addEventListener && e.addEventListener(d, a, !1)), p.add && (p.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, f) : h.push(f), x.event.global[d] = !0);
        }

        e = null;
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          s,
          a,
          u,
          l,
          c,
          f,
          p,
          h,
          d,
          g,
          m = q.hasData(e) && q.get(e);

      if (m && (u = m.events)) {
        t = (t || "").match(w) || [""], l = t.length;

        while (l--) {
          if (a = X.exec(t[l]) || [], h = g = a[1], d = (a[2] || "").split(".").sort(), h) {
            f = x.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, p = u[h] || [], a = a[2] && RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            s && !p.length && (f.teardown && f.teardown.call(e, d, m.handle) !== !1 || x.removeEvent(e, h, m.handle), delete u[h]);
          } else for (h in u) {
            x.event.remove(e, h + t[l], n, r, !0);
          }
        }

        x.isEmptyObject(u) && (delete m.handle, q.remove(e, "events"));
      }
    },
    trigger: function trigger(t, n, r, i) {
      var s,
          a,
          u,
          l,
          c,
          f,
          p,
          h = [r || o],
          d = y.call(t, "type") ? t.type : t,
          g = y.call(t, "namespace") ? t.namespace.split(".") : [];

      if (a = u = r = r || o, 3 !== r.nodeType && 8 !== r.nodeType && !_.test(d + x.event.triggered) && (d.indexOf(".") >= 0 && (g = d.split("."), d = g.shift(), g.sort()), c = 0 > d.indexOf(":") && "on" + d, t = t[x.expando] ? t : new x.Event(d, "object" == _typeof(t) && t), t.isTrigger = i ? 2 : 3, t.namespace = g.join("."), t.namespace_re = t.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = r), n = null == n ? [t] : x.makeArray(n, [t]), p = x.event.special[d] || {}, i || !p.trigger || p.trigger.apply(r, n) !== !1)) {
        if (!i && !p.noBubble && !x.isWindow(r)) {
          for (l = p.delegateType || d, _.test(l + d) || (a = a.parentNode); a; a = a.parentNode) {
            h.push(a), u = a;
          }

          u === (r.ownerDocument || o) && h.push(u.defaultView || u.parentWindow || e);
        }

        s = 0;

        while ((a = h[s++]) && !t.isPropagationStopped()) {
          t.type = s > 1 ? l : p.bindType || d, f = (q.get(a, "events") || {})[t.type] && q.get(a, "handle"), f && f.apply(a, n), f = c && a[c], f && x.acceptData(a) && f.apply && f.apply(a, n) === !1 && t.preventDefault();
        }

        return t.type = d, i || t.isDefaultPrevented() || p._default && p._default.apply(h.pop(), n) !== !1 || !x.acceptData(r) || c && x.isFunction(r[d]) && !x.isWindow(r) && (u = r[c], u && (r[c] = null), x.event.triggered = d, r[d](), x.event.triggered = undefined, u && (r[c] = u)), t.result;
      }
    },
    dispatch: function dispatch(e) {
      e = x.event.fix(e);
      var t,
          n,
          r,
          i,
          o,
          s = [],
          a = d.call(arguments),
          u = (q.get(this, "events") || {})[e.type] || [],
          l = x.event.special[e.type] || {};

      if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
        s = x.event.handlers.call(this, e, u), t = 0;

        while ((i = s[t++]) && !e.isPropagationStopped()) {
          e.currentTarget = i.elem, n = 0;

          while ((o = i.handlers[n++]) && !e.isImmediatePropagationStopped()) {
            (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((x.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), r !== undefined && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
          }
        }

        return l.postDispatch && l.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          s = [],
          a = t.delegateCount,
          u = e.target;
      if (a && u.nodeType && (!e.button || "click" !== e.type)) for (; u !== this; u = u.parentNode || this) {
        if (u.disabled !== !0 || "click" !== e.type) {
          for (r = [], n = 0; a > n; n++) {
            o = t[n], i = o.selector + " ", r[i] === undefined && (r[i] = o.needsContext ? x(i, this).index(u) >= 0 : x.find(i, this, null, [u]).length), r[i] && r.push(o);
          }

          r.length && s.push({
            elem: u,
            handlers: r
          });
        }
      }
      return t.length > a && s.push({
        elem: this,
        handlers: t.slice(a)
      }), s;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function filter(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function filter(e, t) {
        var n,
            r,
            i,
            s = t.button;
        return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || o, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || s === undefined || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e;
      }
    },
    fix: function fix(e) {
      if (e[x.expando]) return e;
      var t,
          n,
          r,
          i = e.type,
          o = e,
          s = this.fixHooks[i];
      s || (this.fixHooks[i] = s = z.test(i) ? this.mouseHooks : I.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;

      while (t--) {
        n = r[t], e[n] = o[n];
      }

      return 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e;
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          return this !== V() && this.focus ? (this.focus(), !1) : undefined;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          return this === V() && this.blur ? (this.blur(), !1) : undefined;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function trigger() {
          return "checkbox" === this.type && this.click && x.nodeName(this, "input") ? (this.click(), !1) : undefined;
        },
        _default: function _default(e) {
          return x.nodeName(e.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          e.result !== undefined && (e.originalEvent.returnValue = e.result);
        }
      }
    },
    simulate: function simulate(e, t, n, r) {
      var i = x.extend(new x.Event(), n, {
        type: e,
        isSimulated: !0,
        originalEvent: {}
      });
      r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
    }
  }, x.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1);
  }, x.Event = function (e, t) {
    return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? U : Y) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, undefined) : new x.Event(e, t);
  }, x.Event.prototype = {
    isDefaultPrevented: Y,
    isPropagationStopped: Y,
    isImmediatePropagationStopped: Y,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = U, e && e.preventDefault && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = U, e && e.stopPropagation && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      this.isImmediatePropagationStopped = U, this.stopPropagation();
    }
  }, x.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }, function (e, t) {
    x.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function handle(e) {
        var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;
        return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      }
    };
  }), x.support.focusinBubbles || x.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    var n = 0,
        r = function r(e) {
      x.event.simulate(t, e.target, x.event.fix(e), !0);
    };

    x.event.special[t] = {
      setup: function setup() {
        0 === n++ && o.addEventListener(e, r, !0);
      },
      teardown: function teardown() {
        0 === --n && o.removeEventListener(e, r, !0);
      }
    };
  }), x.fn.extend({
    on: function on(e, t, n, r, i) {
      var o, s;

      if ("object" == _typeof(e)) {
        "string" != typeof t && (n = n || t, t = undefined);

        for (s in e) {
          this.on(s, t, n, e[s], i);
        }

        return this;
      }

      if (null == n && null == r ? (r = t, n = t = undefined) : null == r && ("string" == typeof t ? (r = n, n = undefined) : (r = n, n = t, t = undefined)), r === !1) r = Y;else if (!r) return this;
      return 1 === i && (o = r, r = function r(e) {
        return x().off(e), o.apply(this, arguments);
      }, r.guid = o.guid || (o.guid = x.guid++)), this.each(function () {
        x.event.add(this, e, r, n, t);
      });
    },
    one: function one(e, t, n, r) {
      return this.on(e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, x(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return (t === !1 || "function" == typeof t) && (n = t, t = undefined), n === !1 && (n = Y), this.each(function () {
        x.event.remove(this, e, n, t);
      });
    },
    trigger: function trigger(e, t) {
      return this.each(function () {
        x.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      return n ? x.event.trigger(e, t, n, !0) : undefined;
    }
  });
  var G = /^.[^:#\[\.,]*$/,
      J = x.expr.match.needsContext,
      Q = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  x.fn.extend({
    find: function find(e) {
      var t,
          n,
          r,
          i = this.length;
      if ("string" != typeof e) return t = this, this.pushStack(x(e).filter(function () {
        for (r = 0; i > r; r++) {
          if (x.contains(t[r], this)) return !0;
        }
      }));

      for (n = [], r = 0; i > r; r++) {
        x.find(e, this[r], n);
      }

      return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n;
    },
    has: function has(e) {
      var t = x(e, this),
          n = t.length;
      return this.filter(function () {
        var e = 0;

        for (; n > e; e++) {
          if (x.contains(this, t[e])) return !0;
        }
      });
    },
    not: function not(e) {
      return this.pushStack(Z(this, e || [], !0));
    },
    filter: function filter(e) {
      return this.pushStack(Z(this, e || [], !1));
    },
    is: function is(e) {
      return !!e && ("string" == typeof e ? J.test(e) ? x(e, this.context).index(this[0]) >= 0 : x.filter(e, this).length > 0 : this.filter(e).length > 0);
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          s = J.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;

      for (; i > r; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
            n = o.push(n);
            break;
          }
        }
      }

      return this.pushStack(o.length > 1 ? x.unique(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? g.call(x(e), this[0]) : g.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
          r = x.merge(this.get(), n);
      return this.pushStack(x.unique(r));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  });

  function K(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  x.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return x.dir(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return x.dir(e, "parentNode", n);
    },
    next: function next(e) {
      return K(e, "nextSibling");
    },
    prev: function prev(e) {
      return K(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return x.dir(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return x.dir(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return x.dir(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return x.dir(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return x.sibling((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return x.sibling(e.firstChild);
    },
    contents: function contents(e) {
      return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes);
    }
  }, function (e, t) {
    x.fn[e] = function (n, r) {
      var i = x.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (Q[e] || x.unique(i), "p" === e[0] && i.reverse()), this.pushStack(i);
    };
  }), x.extend({
    filter: function filter(e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    },
    dir: function dir(e, t, n) {
      var r = [],
          i = n !== undefined;

      while ((e = e[t]) && 9 !== e.nodeType) {
        if (1 === e.nodeType) {
          if (i && x(e).is(n)) break;
          r.push(e);
        }
      }

      return r;
    },
    sibling: function sibling(e, t) {
      var n = [];

      for (; e; e = e.nextSibling) {
        1 === e.nodeType && e !== t && n.push(e);
      }

      return n;
    }
  });

  function Z(e, t, n) {
    if (x.isFunction(t)) return x.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    });
    if (t.nodeType) return x.grep(e, function (e) {
      return e === t !== n;
    });

    if ("string" == typeof t) {
      if (G.test(t)) return x.filter(t, e, n);
      t = x.filter(t, e);
    }

    return x.grep(e, function (e) {
      return g.call(t, e) >= 0 !== n;
    });
  }

  var et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      tt = /<([\w:]+)/,
      nt = /<|&#?\w+;/,
      rt = /<(?:script|style|link)/i,
      it = /^(?:checkbox|radio)$/i,
      ot = /checked\s*(?:[^=]|=\s*.checked.)/i,
      st = /^$|\/(?:java|ecma)script/i,
      at = /^true\/(.*)/,
      ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      lt = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  lt.optgroup = lt.option, lt.tbody = lt.tfoot = lt.colgroup = lt.caption = lt.col = lt.thead, lt.th = lt.td, x.fn.extend({
    text: function text(e) {
      return x.access(this, function (e) {
        return e === undefined ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e));
      }, null, e, arguments.length);
    },
    append: function append() {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = ct(this, e);
          t.appendChild(e);
        }
      });
    },
    prepend: function prepend() {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = ct(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    remove: function remove(e, t) {
      var n,
          r = e ? x.filter(e, this) : this,
          i = 0;

      for (; null != (n = r[i]); i++) {
        t || 1 !== n.nodeType || x.cleanData(gt(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && ht(gt(n, "script")), n.parentNode.removeChild(n));
      }

      return this;
    },
    empty: function empty() {
      var e,
          t = 0;

      for (; null != (e = this[t]); t++) {
        1 === e.nodeType && (x.cleanData(gt(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
        return x.clone(this, e, t);
      });
    },
    html: function html(e) {
      return x.access(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (e === undefined && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !rt.test(e) && !lt[(tt.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = e.replace(et, "<$1></$2>");

          try {
            for (; r > n; n++) {
              t = this[n] || {}, 1 === t.nodeType && (x.cleanData(gt(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (i) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var e = x.map(this, function (e) {
        return [e.nextSibling, e.parentNode];
      }),
          t = 0;
      return this.domManip(arguments, function (n) {
        var r = e[t++],
            i = e[t++];
        i && (x(this).remove(), i.insertBefore(n, r));
      }, !0), t ? this : this.remove();
    },
    detach: function detach(e) {
      return this.remove(e, !0);
    },
    domManip: function domManip(e, t, n) {
      e = p.apply([], e);
      var r,
          i,
          o,
          s,
          a,
          u,
          l = 0,
          c = this.length,
          f = this,
          h = c - 1,
          d = e[0],
          g = x.isFunction(d);
      if (g || !(1 >= c || "string" != typeof d || x.support.checkClone) && ot.test(d)) return this.each(function (r) {
        var i = f.eq(r);
        g && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n);
      });

      if (c && (r = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = r.firstChild, 1 === r.childNodes.length && (r = i), i)) {
        for (o = x.map(gt(r, "script"), ft), s = o.length; c > l; l++) {
          a = r, l !== h && (a = x.clone(a, !0, !0), s && x.merge(o, gt(a, "script"))), t.call(this[l], a, l);
        }

        if (s) for (u = o[o.length - 1].ownerDocument, x.map(o, pt), l = 0; s > l; l++) {
          a = o[l], st.test(a.type || "") && !q.access(a, "globalEval") && x.contains(u, a) && (a.src ? x._evalUrl(a.src) : x.globalEval(a.textContent.replace(ut, "")));
        }
      }

      return this;
    }
  }), x.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, t) {
    x.fn[e] = function (e) {
      var n,
          r = [],
          i = x(e),
          o = i.length - 1,
          s = 0;

      for (; o >= s; s++) {
        n = s === o ? this : this.clone(!0), x(i[s])[t](n), h.apply(r, n.get());
      }

      return this.pushStack(r);
    };
  }), x.extend({
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          s,
          a = e.cloneNode(!0),
          u = x.contains(e.ownerDocument, e);
      if (!(x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) for (s = gt(a), o = gt(e), r = 0, i = o.length; i > r; r++) {
        mt(o[r], s[r]);
      }
      if (t) if (n) for (o = o || gt(e), s = s || gt(a), r = 0, i = o.length; i > r; r++) {
        dt(o[r], s[r]);
      } else dt(e, a);
      return s = gt(a, "script"), s.length > 0 && ht(s, !u && gt(e, "script")), a;
    },
    buildFragment: function buildFragment(e, t, n, r) {
      var i,
          o,
          s,
          a,
          u,
          l,
          c = 0,
          f = e.length,
          p = t.createDocumentFragment(),
          h = [];

      for (; f > c; c++) {
        if (i = e[c], i || 0 === i) if ("object" === x.type(i)) x.merge(h, i.nodeType ? [i] : i);else if (nt.test(i)) {
          o = o || p.appendChild(t.createElement("div")), s = (tt.exec(i) || ["", ""])[1].toLowerCase(), a = lt[s] || lt._default, o.innerHTML = a[1] + i.replace(et, "<$1></$2>") + a[2], l = a[0];

          while (l--) {
            o = o.firstChild;
          }

          x.merge(h, o.childNodes), o = p.firstChild, o.textContent = "";
        } else h.push(t.createTextNode(i));
      }

      p.textContent = "", c = 0;

      while (i = h[c++]) {
        if ((!r || -1 === x.inArray(i, r)) && (u = x.contains(i.ownerDocument, i), o = gt(p.appendChild(i), "script"), u && ht(o), n)) {
          l = 0;

          while (i = o[l++]) {
            st.test(i.type || "") && n.push(i);
          }
        }
      }

      return p;
    },
    cleanData: function cleanData(e) {
      var t,
          n,
          r,
          i = e.length,
          o = 0,
          s = x.event.special;

      for (; i > o; o++) {
        if (n = e[o], x.acceptData(n) && (t = q.access(n))) for (r in t.events) {
          s[r] ? x.event.remove(n, r) : x.removeEvent(n, r, t.handle);
        }
        L.discard(n), q.discard(n);
      }
    },
    _evalUrl: function _evalUrl(e) {
      return x.ajax({
        url: e,
        type: "GET",
        dataType: "text",
        async: !1,
        global: !1,
        success: x.globalEval
      });
    }
  });

  function ct(e, t) {
    return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
  }

  function ft(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function pt(e) {
    var t = at.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e;
  }

  function ht(e, t) {
    var n = e.length,
        r = 0;

    for (; n > r; r++) {
      q.set(e[r], "globalEval", !t || q.get(t[r], "globalEval"));
    }
  }

  function dt(e, t) {
    var n, r, i, o, s, a, u, l;

    if (1 === t.nodeType) {
      if (q.hasData(e) && (o = q.access(e), s = x.extend({}, o), l = o.events, q.set(t, s), l)) {
        delete s.handle, s.events = {};

        for (i in l) {
          for (n = 0, r = l[i].length; r > n; n++) {
            x.event.add(t, i, l[i][n]);
          }
        }
      }

      L.hasData(e) && (a = L.access(e), u = x.extend({}, a), L.set(t, u));
    }
  }

  function gt(e, t) {
    var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
    return t === undefined || t && x.nodeName(e, t) ? x.merge([e], n) : n;
  }

  function mt(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && it.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
  }

  x.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return x.isFunction(e) ? this.each(function (t) {
        x(this).wrapAll(e.call(this, t));
      }) : (this[0] && (t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this);
    },
    wrapInner: function wrapInner(e) {
      return x.isFunction(e) ? this.each(function (t) {
        x(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = x(this),
            n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function wrap(e) {
      var t = x.isFunction(e);
      return this.each(function (n) {
        x(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function unwrap() {
      return this.parent().each(function () {
        x.nodeName(this, "body") || x(this).replaceWith(this.childNodes);
      }).end();
    }
  });
  var yt,
      vt,
      xt = /^(none|table(?!-c[ea]).+)/,
      bt = /^margin/,
      wt = RegExp("^(" + b + ")(.*)$", "i"),
      Tt = RegExp("^(" + b + ")(?!px)[a-z%]+$", "i"),
      Ct = RegExp("^([+-])=(" + b + ")", "i"),
      kt = {
    BODY: "block"
  },
      Nt = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Et = {
    letterSpacing: 0,
    fontWeight: 400
  },
      St = ["Top", "Right", "Bottom", "Left"],
      jt = ["Webkit", "O", "Moz", "ms"];

  function Dt(e, t) {
    if (t in e) return t;
    var n = t.charAt(0).toUpperCase() + t.slice(1),
        r = t,
        i = jt.length;

    while (i--) {
      if (t = jt[i] + n, t in e) return t;
    }

    return r;
  }

  function At(e, t) {
    return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e);
  }

  function Lt(t) {
    return e.getComputedStyle(t, null);
  }

  function qt(e, t) {
    var n,
        r,
        i,
        o = [],
        s = 0,
        a = e.length;

    for (; a > s; s++) {
      r = e[s], r.style && (o[s] = q.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && At(r) && (o[s] = q.access(r, "olddisplay", Pt(r.nodeName)))) : o[s] || (i = At(r), (n && "none" !== n || !i) && q.set(r, "olddisplay", i ? n : x.css(r, "display"))));
    }

    for (s = 0; a > s; s++) {
      r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
    }

    return e;
  }

  x.fn.extend({
    css: function css(e, t) {
      return x.access(this, function (e, t, n) {
        var r,
            i,
            o = {},
            s = 0;

        if (x.isArray(t)) {
          for (r = Lt(e), i = t.length; i > s; s++) {
            o[t[s]] = x.css(e, t[s], !1, r);
          }

          return o;
        }

        return n !== undefined ? x.style(e, t, n) : x.css(e, t);
      }, e, t, arguments.length > 1);
    },
    show: function show() {
      return qt(this, !0);
    },
    hide: function hide() {
      return qt(this);
    },
    toggle: function toggle(e) {
      var t = "boolean" == typeof e;
      return this.each(function () {
        (t ? e : At(this)) ? x(this).show() : x(this).hide();
      });
    }
  }), x.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = yt(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": "cssFloat"
    },
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            s,
            a = x.camelCase(t),
            u = e.style;
        return t = x.cssProps[a] || (x.cssProps[a] = Dt(u, a)), s = x.cssHooks[t] || x.cssHooks[a], n === undefined ? s && "get" in s && (i = s.get(e, !1, r)) !== undefined ? i : u[t] : (o = _typeof(n), "string" === o && (i = Ct.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(x.css(e, t)), o = "number"), null == n || "number" === o && isNaN(n) || ("number" !== o || x.cssNumber[a] || (n += "px"), x.support.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && (n = s.set(e, n, r)) === undefined || (u[t] = n)), undefined);
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          s,
          a = x.camelCase(t);
      return t = x.cssProps[a] || (x.cssProps[a] = Dt(e.style, a)), s = x.cssHooks[t] || x.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), i === undefined && (i = yt(e, t, r)), "normal" === i && t in Et && (i = Et[t]), "" === n || n ? (o = parseFloat(i), n === !0 || x.isNumeric(o) ? o || 0 : i) : i;
    }
  }), yt = function yt(e, t, n) {
    var r,
        i,
        o,
        s = n || Lt(e),
        a = s ? s.getPropertyValue(t) || s[t] : undefined,
        u = e.style;
    return s && ("" !== a || x.contains(e.ownerDocument, e) || (a = x.style(e, t)), Tt.test(a) && bt.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = s.width, u.width = r, u.minWidth = i, u.maxWidth = o)), a;
  };

  function Ht(e, t, n) {
    var r = wt.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }

  function Ot(e, t, n, r, i) {
    var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        s = 0;

    for (; 4 > o; o += 2) {
      "margin" === n && (s += x.css(e, n + St[o], !0, i)), r ? ("content" === n && (s -= x.css(e, "padding" + St[o], !0, i)), "margin" !== n && (s -= x.css(e, "border" + St[o] + "Width", !0, i))) : (s += x.css(e, "padding" + St[o], !0, i), "padding" !== n && (s += x.css(e, "border" + St[o] + "Width", !0, i)));
    }

    return s;
  }

  function Ft(e, t, n) {
    var r = !0,
        i = "width" === t ? e.offsetWidth : e.offsetHeight,
        o = Lt(e),
        s = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);

    if (0 >= i || null == i) {
      if (i = yt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Tt.test(i)) return i;
      r = s && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
    }

    return i + Ot(e, t, n || (s ? "border" : "content"), r, o) + "px";
  }

  function Pt(e) {
    var t = o,
        n = kt[e];
    return n || (n = Rt(e, t), "none" !== n && n || (vt = (vt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (vt[0].contentWindow || vt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = Rt(e, t), vt.detach()), kt[e] = n), n;
  }

  function Rt(e, t) {
    var n = x(t.createElement(e)).appendTo(t.body),
        r = x.css(n[0], "display");
    return n.remove(), r;
  }

  x.each(["height", "width"], function (e, t) {
    x.cssHooks[t] = {
      get: function get(e, n, r) {
        return n ? 0 === e.offsetWidth && xt.test(x.css(e, "display")) ? x.swap(e, Nt, function () {
          return Ft(e, t, r);
        }) : Ft(e, t, r) : undefined;
      },
      set: function set(e, n, r) {
        var i = r && Lt(e);
        return Ht(e, n, r ? Ot(e, t, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0);
      }
    };
  }), x(function () {
    x.support.reliableMarginRight || (x.cssHooks.marginRight = {
      get: function get(e, t) {
        return t ? x.swap(e, {
          display: "inline-block"
        }, yt, [e, "marginRight"]) : undefined;
      }
    }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function (e, t) {
      x.cssHooks[t] = {
        get: function get(e, n) {
          return n ? (n = yt(e, t), Tt.test(n) ? x(e).position()[t] + "px" : n) : undefined;
        }
      };
    });
  }), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) {
    return 0 >= e.offsetWidth && 0 >= e.offsetHeight;
  }, x.expr.filters.visible = function (e) {
    return !x.expr.filters.hidden(e);
  }), x.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (e, t) {
    x.cssHooks[e + t] = {
      expand: function expand(n) {
        var r = 0,
            i = {},
            o = "string" == typeof n ? n.split(" ") : [n];

        for (; 4 > r; r++) {
          i[e + St[r] + t] = o[r] || o[r - 2] || o[0];
        }

        return i;
      }
    }, bt.test(e) || (x.cssHooks[e + t].set = Ht);
  });
  var Mt = /%20/g,
      Wt = /\[\]$/,
      $t = /\r?\n/g,
      Bt = /^(?:submit|button|image|reset|file)$/i,
      It = /^(?:input|select|textarea|keygen)/i;
  x.fn.extend({
    serialize: function serialize() {
      return x.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = x.prop(this, "elements");
        return e ? x.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !x(this).is(":disabled") && It.test(this.nodeName) && !Bt.test(e) && (this.checked || !it.test(e));
      }).map(function (e, t) {
        var n = x(this).val();
        return null == n ? null : x.isArray(n) ? x.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace($t, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace($t, "\r\n")
        };
      }).get();
    }
  }), x.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      t = x.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
    };

    if (t === undefined && (t = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      zt(n, e[n], t, i);
    }
    return r.join("&").replace(Mt, "+");
  };

  function zt(e, t, n, r) {
    var i;
    if (x.isArray(t)) x.each(t, function (t, i) {
      n || Wt.test(e) ? r(e, i) : zt(e + "[" + ("object" == _typeof(i) ? t : "") + "]", i, n, r);
    });else if (n || "object" !== x.type(t)) r(e, t);else for (i in t) {
      zt(e + "[" + i + "]", t[i], n, r);
    }
  }

  x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
    x.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), x.fn.extend({
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    },
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  });

  var _t,
      Xt,
      Ut = x.now(),
      Yt = /\?/,
      Vt = /#.*$/,
      Gt = /([?&])_=[^&]*/,
      Jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Kt = /^(?:GET|HEAD)$/,
      Zt = /^\/\//,
      en = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
      tn = x.fn.load,
      nn = {},
      rn = {},
      on = "*/".concat("*");

  try {
    Xt = i.href;
  } catch (sn) {
    Xt = o.createElement("a"), Xt.href = "", Xt = Xt.href;
  }

  _t = en.exec(Xt.toLowerCase()) || [];

  function an(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r,
          i = 0,
          o = t.toLowerCase().match(w) || [];
      if (x.isFunction(n)) while (r = o[i++]) {
        "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      }
    };
  }

  function un(e, t, n, r) {
    var i = {},
        o = e === rn;

    function s(a) {
      var u;
      return i[a] = !0, x.each(e[a] || [], function (e, a) {
        var l = a(t, n, r);
        return "string" != typeof l || o || i[l] ? o ? !(u = l) : undefined : (t.dataTypes.unshift(l), s(l), !1);
      }), u;
    }

    return s(t.dataTypes[0]) || !i["*"] && s("*");
  }

  function ln(e, t) {
    var n,
        r,
        i = x.ajaxSettings.flatOptions || {};

    for (n in t) {
      t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && x.extend(!0, e, r), e;
  }

  x.fn.load = function (e, t, n) {
    if ("string" != typeof e && tn) return tn.apply(this, arguments);
    var r,
        i,
        o,
        s = this,
        a = e.indexOf(" ");
    return a >= 0 && (r = e.slice(a), e = e.slice(0, a)), x.isFunction(t) ? (n = t, t = undefined) : t && "object" == _typeof(t) && (i = "POST"), s.length > 0 && x.ajax({
      url: e,
      type: i,
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, s.html(r ? x("<div>").append(x.parseHTML(e)).find(r) : e);
    }).complete(n && function (e, t) {
      s.each(n, o || [e.responseText, t, e]);
    }), this;
  }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    x.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), x.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Xt,
      type: "GET",
      isLocal: Qt.test(_t[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": on,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": x.parseJSON,
        "text xml": x.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? ln(ln(e, x.ajaxSettings), t) : ln(x.ajaxSettings, e);
    },
    ajaxPrefilter: an(nn),
    ajaxTransport: an(rn),
    ajax: function ajax(e, t) {
      "object" == _typeof(e) && (t = e, e = undefined), t = t || {};
      var n,
          r,
          i,
          o,
          s,
          a,
          u,
          l,
          c = x.ajaxSetup({}, t),
          f = c.context || c,
          p = c.context && (f.nodeType || f.jquery) ? x(f) : x.event,
          h = x.Deferred(),
          d = x.Callbacks("once memory"),
          g = c.statusCode || {},
          m = {},
          y = {},
          v = 0,
          b = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (2 === v) {
            if (!o) {
              o = {};

              while (t = Jt.exec(i)) {
                o[t[1].toLowerCase()] = t[2];
              }
            }

            t = o[e.toLowerCase()];
          }

          return null == t ? null : t;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === v ? i : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          var n = e.toLowerCase();
          return v || (e = y[n] = y[n] || e, m[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return v || (c.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (2 > v) for (t in e) {
            g[t] = [g[t], e[t]];
          } else T.always(e[T.status]);
          return this;
        },
        abort: function abort(e) {
          var t = e || b;
          return n && n.abort(t), k(0, t), this;
        }
      };
      if (h.promise(T).complete = d.add, T.success = T.done, T.error = T.fail, c.url = ((e || c.url || Xt) + "").replace(Vt, "").replace(Zt, _t[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = x.trim(c.dataType || "*").toLowerCase().match(w) || [""], null == c.crossDomain && (a = en.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === _t[1] && a[2] === _t[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (_t[3] || ("http:" === _t[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = x.param(c.data, c.traditional)), un(nn, c, t, T), 2 === v) return T;
      u = c.global, u && 0 === x.active++ && x.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Kt.test(c.type), r = c.url, c.hasContent || (c.data && (r = c.url += (Yt.test(r) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = Gt.test(r) ? r.replace(Gt, "$1_=" + Ut++) : r + (Yt.test(r) ? "&" : "?") + "_=" + Ut++)), c.ifModified && (x.lastModified[r] && T.setRequestHeader("If-Modified-Since", x.lastModified[r]), x.etag[r] && T.setRequestHeader("If-None-Match", x.etag[r])), (c.data && c.hasContent && c.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", c.contentType), T.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + on + "; q=0.01" : "") : c.accepts["*"]);

      for (l in c.headers) {
        T.setRequestHeader(l, c.headers[l]);
      }

      if (c.beforeSend && (c.beforeSend.call(f, T, c) === !1 || 2 === v)) return T.abort();
      b = "abort";

      for (l in {
        success: 1,
        error: 1,
        complete: 1
      }) {
        T[l](c[l]);
      }

      if (n = un(rn, c, t, T)) {
        T.readyState = 1, u && p.trigger("ajaxSend", [T, c]), c.async && c.timeout > 0 && (s = setTimeout(function () {
          T.abort("timeout");
        }, c.timeout));

        try {
          v = 1, n.send(m, k);
        } catch (C) {
          if (!(2 > v)) throw C;
          k(-1, C);
        }
      } else k(-1, "No Transport");

      function k(e, t, o, a) {
        var l,
            m,
            y,
            b,
            w,
            C = t;
        2 !== v && (v = 2, s && clearTimeout(s), n = undefined, i = a || "", T.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, o && (b = cn(c, T, o)), b = fn(c, b, T, l), l ? (c.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (x.lastModified[r] = w), w = T.getResponseHeader("etag"), w && (x.etag[r] = w)), 204 === e ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, m = b.data, y = b.error, l = !y)) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (t || C) + "", l ? h.resolveWith(f, [m, C, T]) : h.rejectWith(f, [T, C, y]), T.statusCode(g), g = undefined, u && p.trigger(l ? "ajaxSuccess" : "ajaxError", [T, c, l ? m : y]), d.fireWith(f, [T, C]), u && (p.trigger("ajaxComplete", [T, c]), --x.active || x.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return x.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return x.get(e, undefined, t, "script");
    }
  }), x.each(["get", "post"], function (e, t) {
    x[t] = function (e, n, r, i) {
      return x.isFunction(n) && (i = i || r, r = n, n = undefined), x.ajax({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      });
    };
  });

  function cn(e, t, n) {
    var r,
        i,
        o,
        s,
        a = e.contents,
        u = e.dataTypes;

    while ("*" === u[0]) {
      u.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    }

    if (r) for (i in a) {
      if (a[i] && a[i].test(r)) {
        u.unshift(i);
        break;
      }
    }
    if (u[0] in n) o = u[0];else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;
          break;
        }

        s || (s = i);
      }

      o = o || s;
    }
    return o ? (o !== u[0] && u.unshift(o), n[o]) : undefined;
  }

  function fn(e, t, n, r) {
    var i,
        o,
        s,
        a,
        u,
        l = {},
        c = e.dataTypes.slice();
    if (c[1]) for (s in e.converters) {
      l[s.toLowerCase()] = e.converters[s];
    }
    o = c.shift();

    while (o) {
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
        if (s = l[u + " " + o] || l["* " + o], !s) for (i in l) {
          if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
            s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
            break;
          }
        }
        if (s !== !0) if (s && e["throws"]) t = s(t);else try {
          t = s(t);
        } catch (f) {
          return {
            state: "parsererror",
            error: s ? f : "No conversion from " + u + " to " + o
          };
        }
      }
    }

    return {
      state: "success",
      data: t
    };
  }

  x.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function textScript(e) {
        return x.globalEval(e), e;
      }
    }
  }), x.ajaxPrefilter("script", function (e) {
    e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), x.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, _n;

      return {
        send: function send(r, i) {
          t = x("<script>").prop({
            async: !0,
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", _n = function n(e) {
            t.remove(), _n = null, e && i("error" === e.type ? 404 : 200, e.type);
          }), o.head.appendChild(t[0]);
        },
        abort: function abort() {
          _n && _n();
        }
      };
    }
  });
  var pn = [],
      hn = /(=)\?(?=&|$)|\?\?/;
  x.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = pn.pop() || x.expando + "_" + Ut++;
      return this[e] = !0, e;
    }
  }), x.ajaxPrefilter("json jsonp", function (t, n, r) {
    var i,
        o,
        s,
        a = t.jsonp !== !1 && (hn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && hn.test(t.data) && "data");
    return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = x.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(hn, "$1" + i) : t.jsonp !== !1 && (t.url += (Yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
      return s || x.error(i + " was not called"), s[0];
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
      s = arguments;
    }, r.always(function () {
      e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, pn.push(i)), s && x.isFunction(o) && o(s[0]), s = o = undefined;
    }), "script") : undefined;
  }), x.ajaxSettings.xhr = function () {
    try {
      return new XMLHttpRequest();
    } catch (e) {}
  };
  var dn = x.ajaxSettings.xhr(),
      gn = {
    0: 200,
    1223: 204
  },
      mn = 0,
      yn = {};
  e.ActiveXObject && x(e).on("unload", function () {
    for (var e in yn) {
      yn[e]();
    }

    yn = undefined;
  }), x.support.cors = !!dn && "withCredentials" in dn, x.support.ajax = dn = !!dn, x.ajaxTransport(function (e) {
    var _t3;

    return x.support.cors || dn && !e.crossDomain ? {
      send: function send(n, r) {
        var i,
            o,
            s = e.xhr();
        if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) {
          s[i] = e.xhrFields[i];
        }
        e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");

        for (i in n) {
          s.setRequestHeader(i, n[i]);
        }

        _t3 = function t(e) {
          return function () {
            _t3 && (delete yn[o], _t3 = s.onload = s.onerror = null, "abort" === e ? s.abort() : "error" === e ? r(s.status || 404, s.statusText) : r(gn[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
              text: s.responseText
            } : undefined, s.getAllResponseHeaders()));
          };
        }, s.onload = _t3(), s.onerror = _t3("error"), _t3 = yn[o = mn++] = _t3("abort"), s.send(e.hasContent && e.data || null);
      },
      abort: function abort() {
        _t3 && _t3();
      }
    } : undefined;
  });
  var vn,
      xn,
      bn = /^(?:toggle|show|hide)$/,
      wn = RegExp("^(?:([+-])=|)(" + b + ")([a-z%]*)$", "i"),
      Tn = /queueHooks$/,
      Cn = [Dn],
      kn = {
    "*": [function (e, t) {
      var n,
          r,
          i = this.createTween(e, t),
          o = wn.exec(t),
          s = i.cur(),
          a = +s || 0,
          u = 1,
          l = 20;

      if (o) {
        if (n = +o[2], r = o[3] || (x.cssNumber[e] ? "" : "px"), "px" !== r && a) {
          a = x.css(i.elem, e, !0) || n || 1;

          do {
            u = u || ".5", a /= u, x.style(i.elem, e, a + r);
          } while (u !== (u = i.cur() / s) && 1 !== u && --l);
        }

        i.unit = r, i.start = a, i.end = o[1] ? a + (o[1] + 1) * n : n;
      }

      return i;
    }]
  };

  function Nn() {
    return setTimeout(function () {
      vn = undefined;
    }), vn = x.now();
  }

  function En(e, t) {
    x.each(t, function (t, n) {
      var r = (kn[t] || []).concat(kn["*"]),
          i = 0,
          o = r.length;

      for (; o > i; i++) {
        if (r[i].call(e, t, n)) return;
      }
    });
  }

  function Sn(e, t, n) {
    var r,
        i,
        o = 0,
        s = Cn.length,
        a = x.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (i) return !1;
      var t = vn || Nn(),
          n = Math.max(0, l.startTime + l.duration - t),
          r = n / l.duration || 0,
          o = 1 - r,
          s = 0,
          u = l.tweens.length;

      for (; u > s; s++) {
        l.tweens[s].run(o);
      }

      return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1);
    },
        l = a.promise({
      elem: e,
      props: x.extend({}, t),
      opts: x.extend(!0, {
        specialEasing: {}
      }, n),
      originalProperties: t,
      originalOptions: n,
      startTime: vn || Nn(),
      duration: n.duration,
      tweens: [],
      createTween: function createTween(t, n) {
        var r = x.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
        return l.tweens.push(r), r;
      },
      stop: function stop(t) {
        var n = 0,
            r = t ? l.tweens.length : 0;
        if (i) return this;

        for (i = !0; r > n; n++) {
          l.tweens[n].run(1);
        }

        return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this;
      }
    }),
        c = l.props;

    for (jn(c, l.opts.specialEasing); s > o; o++) {
      if (r = Cn[o].call(l, e, c, l.opts)) return r;
    }

    return En(l, c), x.isFunction(l.opts.start) && l.opts.start.call(e, l), x.fx.timer(x.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
  }

  function jn(e, t) {
    var n, r, i, o, s;

    for (n in e) {
      if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = x.cssHooks[r], s && "expand" in s) {
        o = s.expand(o), delete e[r];

        for (n in o) {
          n in e || (e[n] = o[n], t[n] = i);
        }
      } else t[r] = i;
    }
  }

  x.Animation = x.extend(Sn, {
    tweener: function tweener(e, t) {
      x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
      var n,
          r = 0,
          i = e.length;

      for (; i > r; r++) {
        n = e[r], kn[n] = kn[n] || [], kn[n].unshift(t);
      }
    },
    prefilter: function prefilter(e, t) {
      t ? Cn.unshift(e) : Cn.push(e);
    }
  });

  function Dn(e, t, n) {
    var r,
        i,
        o,
        s,
        a,
        u,
        l,
        c,
        f,
        p = this,
        h = e.style,
        d = {},
        g = [],
        m = e.nodeType && At(e);
    n.queue || (c = x._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, f = c.empty.fire, c.empty.fire = function () {
      c.unqueued || f();
    }), c.unqueued++, p.always(function () {
      p.always(function () {
        c.unqueued--, x.queue(e, "fx").length || c.empty.fire();
      });
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
      h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
    })), a = q.get(e, "fxshow");

    for (r in t) {
      if (o = t[r], bn.exec(o)) {
        if (delete t[r], u = u || "toggle" === o, o === (m ? "hide" : "show")) {
          if ("show" !== o || a === undefined || a[r] === undefined) continue;
          m = !0;
        }

        g.push(r);
      }
    }

    if (s = g.length) {
      a = q.get(e, "fxshow") || q.access(e, "fxshow", {}), "hidden" in a && (m = a.hidden), u && (a.hidden = !m), m ? x(e).show() : p.done(function () {
        x(e).hide();
      }), p.done(function () {
        var t;
        q.remove(e, "fxshow");

        for (t in d) {
          x.style(e, t, d[t]);
        }
      });

      for (r = 0; s > r; r++) {
        i = g[r], l = p.createTween(i, m ? a[i] : 0), d[i] = a[i] || x.style(e, i), i in a || (a[i] = l.start, m && (l.end = l.start, l.start = "width" === i || "height" === i ? 1 : 0));
      }
    }
  }

  function An(e, t, n, r, i) {
    return new An.prototype.init(e, t, n, r, i);
  }

  x.Tween = An, An.prototype = {
    constructor: An,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = An.propHooks[this.prop];
      return e && e.get ? e.get(this) : An.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = An.propHooks[this.prop];
      return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : An.propHooks._default.set(this), this;
    }
  }, An.prototype.init.prototype = An.prototype, An.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop];
      },
      set: function set(e) {
        x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
      }
    }
  }, An.propHooks.scrollTop = An.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, x.each(["toggle", "show", "hide"], function (e, t) {
    var n = x.fn[t];

    x.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Ln(t, !0), e, r, i);
    };
  }), x.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(At).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(e, t, n, r) {
      var i = x.isEmptyObject(e),
          o = x.speed(t, n, r),
          s = function s() {
        var t = Sn(this, x.extend({}, e), o);
        s.finish = function () {
          t.stop(!0);
        }, (i || q.get(this, "finish")) && t.stop(!0);
      };

      return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s);
    },
    stop: function stop(e, t, n) {
      var r = function r(e) {
        var t = e.stop;
        delete e.stop, t(n);
      };

      return "string" != typeof e && (n = t, t = e, e = undefined), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            i = null != e && e + "queueHooks",
            o = x.timers,
            s = q.get(this);
        if (i) s[i] && s[i].stop && r(s[i]);else for (i in s) {
          s[i] && s[i].stop && Tn.test(i) && r(s[i]);
        }

        for (i = o.length; i--;) {
          o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
        }

        (t || !n) && x.dequeue(this, e);
      });
    },
    finish: function finish(e) {
      return e !== !1 && (e = e || "fx"), this.each(function () {
        var t,
            n = q.get(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = x.timers,
            s = r ? r.length : 0;

        for (n.finish = !0, x.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        }

        for (t = 0; s > t; t++) {
          r[t] && r[t].finish && r[t].finish.call(this);
        }

        delete n.finish;
      });
    }
  });

  function Ln(e, t) {
    var n,
        r = {
      height: e
    },
        i = 0;

    for (t = t ? 1 : 0; 4 > i; i += 2 - t) {
      n = St[i], r["margin" + n] = r["padding" + n] = e;
    }

    return t && (r.opacity = r.width = e), r;
  }

  x.each({
    slideDown: Ln("show"),
    slideUp: Ln("hide"),
    slideToggle: Ln("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, t) {
    x.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), x.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? x.extend({}, e) : {
      complete: n || !n && t || x.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !x.isFunction(t) && t
    };
    return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue);
    }, r;
  }, x.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }
  }, x.timers = [], x.fx = An.prototype.init, x.fx.tick = function () {
    var e,
        t = x.timers,
        n = 0;

    for (vn = x.now(); t.length > n; n++) {
      e = t[n], e() || t[n] !== e || t.splice(n--, 1);
    }

    t.length || x.fx.stop(), vn = undefined;
  }, x.fx.timer = function (e) {
    e() && x.timers.push(e) && x.fx.start();
  }, x.fx.interval = 13, x.fx.start = function () {
    xn || (xn = setInterval(x.fx.tick, x.fx.interval));
  }, x.fx.stop = function () {
    clearInterval(xn), xn = null;
  }, x.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {
    return x.grep(x.timers, function (t) {
      return e === t.elem;
    }).length;
  }), x.fn.offset = function (e) {
    if (arguments.length) return e === undefined ? this : this.each(function (t) {
      x.offset.setOffset(this, e, t);
    });
    var t,
        n,
        i = this[0],
        o = {
      top: 0,
      left: 0
    },
        s = i && i.ownerDocument;
    if (s) return t = s.documentElement, x.contains(t, i) ? (_typeof(i.getBoundingClientRect) !== r && (o = i.getBoundingClientRect()), n = qn(s), {
      top: o.top + n.pageYOffset - t.clientTop,
      left: o.left + n.pageXOffset - t.clientLeft
    }) : o;
  }, x.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          s,
          a,
          u,
          l,
          c = x.css(e, "position"),
          f = x(e),
          p = {};
      "static" === c && (e.style.position = "relative"), a = f.offset(), o = x.css(e, "top"), u = x.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), x.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + i), "using" in t ? t.using.call(e, p) : f.css(p);
    }
  }, x.fn.extend({
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n = this[0],
            r = {
          top: 0,
          left: 0
        };
        return "fixed" === x.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (r = e.offset()), r.top += x.css(e[0], "borderTopWidth", !0), r.left += x.css(e[0], "borderLeftWidth", !0)), {
          top: t.top - r.top - x.css(n, "marginTop", !0),
          left: t.left - r.left - x.css(n, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent || s;

        while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || s;
      });
    }
  }), x.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, n) {
    var r = "pageYOffset" === n;

    x.fn[t] = function (i) {
      return x.access(this, function (t, i, o) {
        var s = qn(t);
        return o === undefined ? s ? s[n] : t[i] : (s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o, undefined);
      }, t, i, arguments.length, null);
    };
  });

  function qn(e) {
    return x.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }

  x.each({
    Height: "height",
    Width: "width"
  }, function (e, t) {
    x.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function (n, r) {
      x.fn[r] = function (r, i) {
        var o = arguments.length && (n || "boolean" != typeof r),
            s = n || (r === !0 || i === !0 ? "margin" : "border");
        return x.access(this, function (t, n, r) {
          var i;
          return x.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : r === undefined ? x.css(t, n, s) : x.style(t, n, r, s);
        }, t, o ? r : undefined, o, null);
      };
    });
  }), x.fn.size = function () {
    return this.length;
  }, x.fn.andSelf = x.fn.addBack, "object" == ( false ? undefined : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = x :  true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return x;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)), "object" == _typeof(e) && "object" == _typeof(e.document) && (e.jQuery = e.$ = x);
})(window);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/jquery.twzipcode.min.js":
/*!*****************************************************!*\
  !*** ./resources/assets/js/jquery.twzipcode.min.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 MIT License
*/
(function (g, n, p, q) {
  function m(a, b) {
    this.container = g(a);
    this.options = g.extend({}, {
      countyName: "county",
      css: [],
      detect: !1,
      districtName: "district",
      googleMapsKey: "",
      hideCounty: [],
      hideDistrict: [],
      onCountySelect: null,
      onDistrictSelect: null,
      onZipcodeKeyUp: null,
      readonly: !1,
      zipcodeName: "zipcode",
      zipcodePlaceholder: "\u90F5\u905E\u5340\u865F",
      zipcodeIntoDistrict: !1
    }, b);
    this.init();
  }

  var f = {
    "\u57FA\u9686\u5E02": {
      "\u4EC1\u611B\u5340": "200",
      "\u4FE1\u7FA9\u5340": "201",
      "\u4E2D\u6B63\u5340": "202",
      "\u4E2D\u5C71\u5340": "203",
      "\u5B89\u6A02\u5340": "204",
      "\u6696\u6696\u5340": "205",
      "\u4E03\u5835\u5340": "206"
    },
    "\u81FA\u5317\u5E02": {
      "\u4E2D\u6B63\u5340": "100",
      "\u5927\u540C\u5340": "103",
      "\u4E2D\u5C71\u5340": "104",
      "\u677E\u5C71\u5340": "105",
      "\u5927\u5B89\u5340": "106",
      "\u842C\u83EF\u5340": "108",
      "\u4FE1\u7FA9\u5340": "110",
      "\u58EB\u6797\u5340": "111",
      "\u5317\u6295\u5340": "112",
      "\u5167\u6E56\u5340": "114",
      "\u5357\u6E2F\u5340": "115",
      "\u6587\u5C71\u5340": "116"
    },
    "\u65B0\u5317\u5E02": {
      "\u842C\u91CC\u5340": "207",
      "\u91D1\u5C71\u5340": "208",
      "\u677F\u6A4B\u5340": "220",
      "\u6C50\u6B62\u5340": "221",
      "\u6DF1\u5751\u5340": "222",
      "\u77F3\u7887\u5340": "223",
      "\u745E\u82B3\u5340": "224",
      "\u5E73\u6EAA\u5340": "226",
      "\u96D9\u6EAA\u5340": "227",
      "\u8CA2\u5BEE\u5340": "228",
      "\u65B0\u5E97\u5340": "231",
      "\u576A\u6797\u5340": "232",
      "\u70CF\u4F86\u5340": "233",
      "\u6C38\u548C\u5340": "234",
      "\u4E2D\u548C\u5340": "235",
      "\u571F\u57CE\u5340": "236",
      "\u4E09\u5CFD\u5340": "237",
      "\u6A39\u6797\u5340": "238",
      "\u9DAF\u6B4C\u5340": "239",
      "\u4E09\u91CD\u5340": "241",
      "\u65B0\u838A\u5340": "242",
      "\u6CF0\u5C71\u5340": "243",
      "\u6797\u53E3\u5340": "244",
      "\u8606\u6D32\u5340": "247",
      "\u4E94\u80A1\u5340": "248",
      "\u516B\u91CC\u5340": "249",
      "\u6DE1\u6C34\u5340": "251",
      "\u4E09\u829D\u5340": "252",
      "\u77F3\u9580\u5340": "253"
    },
    "\u5B9C\u862D\u7E23": {
      "\u5B9C\u862D\u5E02": "260",
      "\u982D\u57CE\u93AE": "261",
      "\u7901\u6EAA\u9109": "262",
      "\u58EF\u570D\u9109": "263",
      "\u54E1\u5C71\u9109": "264",
      "\u7F85\u6771\u93AE": "265",
      "\u4E09\u661F\u9109": "266",
      "\u5927\u540C\u9109": "267",
      "\u4E94\u7D50\u9109": "268",
      "\u51AC\u5C71\u9109": "269",
      "\u8607\u6FB3\u93AE": "270",
      "\u5357\u6FB3\u9109": "272",
      "\u91E3\u9B5A\u81FA\u5217\u5DBC": "290"
    },
    "\u65B0\u7AF9\u5E02": {
      "\u6771\u5340": "300",
      "\u5317\u5340": "300",
      "\u9999\u5C71\u5340": "300"
    },
    "\u65B0\u7AF9\u7E23": {
      "\u7AF9\u5317\u5E02": "302",
      "\u6E56\u53E3\u9109": "303",
      "\u65B0\u8C50\u9109": "304",
      "\u65B0\u57D4\u93AE": "305",
      "\u95DC\u897F\u93AE": "306",
      "\u828E\u6797\u9109": "307",
      "\u5BF6\u5C71\u9109": "308",
      "\u7AF9\u6771\u93AE": "310",
      "\u4E94\u5CF0\u9109": "311",
      "\u6A6B\u5C71\u9109": "312",
      "\u5C16\u77F3\u9109": "313",
      "\u5317\u57D4\u9109": "314",
      "\u5CE8\u7709\u9109": "315"
    },
    "\u6843\u5712\u5E02": {
      "\u4E2D\u58E2\u5340": "320",
      "\u5E73\u93AE\u5340": "324",
      "\u9F8D\u6F6D\u5340": "325",
      "\u694A\u6885\u5340": "326",
      "\u65B0\u5C4B\u5340": "327",
      "\u89C0\u97F3\u5340": "328",
      "\u6843\u5712\u5340": "330",
      "\u9F9C\u5C71\u5340": "333",
      "\u516B\u5FB7\u5340": "334",
      "\u5927\u6EAA\u5340": "335",
      "\u5FA9\u8208\u5340": "336",
      "\u5927\u5712\u5340": "337",
      "\u8606\u7AF9\u5340": "338"
    },
    "\u82D7\u6817\u7E23": {
      "\u7AF9\u5357\u93AE": "350",
      "\u982D\u4EFD\u5E02": "351",
      "\u4E09\u7063\u9109": "352",
      "\u5357\u5E84\u9109": "353",
      "\u7345\u6F6D\u9109": "354",
      "\u5F8C\u9F8D\u93AE": "356",
      "\u901A\u9704\u93AE": "357",
      "\u82D1\u88E1\u93AE": "358",
      "\u82D7\u6817\u5E02": "360",
      "\u9020\u6A4B\u9109": "361",
      "\u982D\u5C4B\u9109": "362",
      "\u516C\u9928\u9109": "363",
      "\u5927\u6E56\u9109": "364",
      "\u6CF0\u5B89\u9109": "365",
      "\u9285\u947C\u9109": "366",
      "\u4E09\u7FA9\u9109": "367",
      "\u897F\u6E56\u9109": "368",
      "\u5353\u862D\u93AE": "369"
    },
    "\u81FA\u4E2D\u5E02": {
      "\u4E2D\u5340": "400",
      "\u6771\u5340": "401",
      "\u5357\u5340": "402",
      "\u897F\u5340": "403",
      "\u5317\u5340": "404",
      "\u5317\u5C6F\u5340": "406",
      "\u897F\u5C6F\u5340": "407",
      "\u5357\u5C6F\u5340": "408",
      "\u592A\u5E73\u5340": "411",
      "\u5927\u91CC\u5340": "412",
      "\u9727\u5CF0\u5340": "413",
      "\u70CF\u65E5\u5340": "414",
      "\u8C50\u539F\u5340": "420",
      "\u540E\u91CC\u5340": "421",
      "\u77F3\u5CA1\u5340": "422",
      "\u6771\u52E2\u5340": "423",
      "\u548C\u5E73\u5340": "424",
      "\u65B0\u793E\u5340": "426",
      "\u6F6D\u5B50\u5340": "427",
      "\u5927\u96C5\u5340": "428",
      "\u795E\u5CA1\u5340": "429",
      "\u5927\u809A\u5340": "432",
      "\u6C99\u9E7F\u5340": "433",
      "\u9F8D\u4E95\u5340": "434",
      "\u68A7\u68F2\u5340": "435",
      "\u6E05\u6C34\u5340": "436",
      "\u5927\u7532\u5340": "437",
      "\u5916\u57D4\u5340": "438",
      "\u5927\u5B89\u5340": "439"
    },
    "\u5F70\u5316\u7E23": {
      "\u5F70\u5316\u5E02": "500",
      "\u82AC\u5712\u9109": "502",
      "\u82B1\u58C7\u9109": "503",
      "\u79C0\u6C34\u9109": "504",
      "\u9E7F\u6E2F\u93AE": "505",
      "\u798F\u8208\u9109": "506",
      "\u7DDA\u897F\u9109": "507",
      "\u548C\u7F8E\u93AE": "508",
      "\u4F38\u6E2F\u9109": "509",
      "\u54E1\u6797\u5E02": "510",
      "\u793E\u982D\u9109": "511",
      "\u6C38\u9756\u9109": "512",
      "\u57D4\u5FC3\u9109": "513",
      "\u6EAA\u6E56\u93AE": "514",
      "\u5927\u6751\u9109": "515",
      "\u57D4\u9E7D\u9109": "516",
      "\u7530\u4E2D\u93AE": "520",
      "\u5317\u6597\u93AE": "521",
      "\u7530\u5C3E\u9109": "522",
      "\u57E4\u982D\u9109": "523",
      "\u6EAA\u5DDE\u9109": "524",
      "\u7AF9\u5858\u9109": "525",
      "\u4E8C\u6797\u93AE": "526",
      "\u5927\u57CE\u9109": "527",
      "\u82B3\u82D1\u9109": "528",
      "\u4E8C\u6C34\u9109": "530"
    },
    "\u5357\u6295\u7E23": {
      "\u5357\u6295\u5E02": "540",
      "\u4E2D\u5BEE\u9109": "541",
      "\u8349\u5C6F\u93AE": "542",
      "\u570B\u59D3\u9109": "544",
      "\u57D4\u91CC\u93AE": "545",
      "\u4EC1\u611B\u9109": "546",
      "\u540D\u9593\u9109": "551",
      "\u96C6\u96C6\u93AE": "552",
      "\u6C34\u91CC\u9109": "553",
      "\u9B5A\u6C60\u9109": "555",
      "\u4FE1\u7FA9\u9109": "556",
      "\u7AF9\u5C71\u93AE": "557",
      "\u9E7F\u8C37\u9109": "558"
    },
    "\u5609\u7FA9\u5E02": {
      "\u6771\u5340": "600",
      "\u897F\u5340": "600"
    },
    "\u5609\u7FA9\u7E23": {
      "\u756A\u8DEF\u9109": "602",
      "\u6885\u5C71\u9109": "603",
      "\u7AF9\u5D0E\u9109": "604",
      "\u963F\u91CC\u5C71": "605",
      "\u4E2D\u57D4\u9109": "606",
      "\u5927\u57D4\u9109": "607",
      "\u6C34\u4E0A\u9109": "608",
      "\u9E7F\u8349\u9109": "611",
      "\u592A\u4FDD\u5E02": "612",
      "\u6734\u5B50\u5E02": "613",
      "\u6771\u77F3\u9109": "614",
      "\u516D\u8173\u9109": "615",
      "\u65B0\u6E2F\u9109": "616",
      "\u6C11\u96C4\u9109": "621",
      "\u5927\u6797\u93AE": "622",
      "\u6EAA\u53E3\u9109": "623",
      "\u7FA9\u7AF9\u9109": "624",
      "\u5E03\u888B\u93AE": "625"
    },
    "\u96F2\u6797\u7E23": {
      "\u6597\u5357\u93AE": "630",
      "\u5927\u57E4\u9109": "631",
      "\u864E\u5C3E\u93AE": "632",
      "\u571F\u5EAB\u93AE": "633",
      "\u8912\u5FE0\u9109": "634",
      "\u6771\u52E2\u9109": "635",
      "\u81FA\u897F\u9109": "636",
      "\u5D19\u80CC\u9109": "637",
      "\u9EA5\u5BEE\u9109": "638",
      "\u6597\u516D\u5E02": "640",
      "\u6797\u5167\u9109": "643",
      "\u53E4\u5751\u9109": "646",
      "\u83BF\u6850\u9109": "647",
      "\u897F\u87BA\u93AE": "648",
      "\u4E8C\u5D19\u9109": "649",
      "\u5317\u6E2F\u93AE": "651",
      "\u6C34\u6797\u9109": "652",
      "\u53E3\u6E56\u9109": "653",
      "\u56DB\u6E56\u9109": "654",
      "\u5143\u9577\u9109": "655"
    },
    "\u81FA\u5357\u5E02": {
      "\u4E2D\u897F\u5340": "700",
      "\u6771\u5340": "701",
      "\u5357\u5340": "702",
      "\u5317\u5340": "704",
      "\u5B89\u5E73\u5340": "708",
      "\u5B89\u5357\u5340": "709",
      "\u6C38\u5EB7\u5340": "710",
      "\u6B78\u4EC1\u5340": "711",
      "\u65B0\u5316\u5340": "712",
      "\u5DE6\u93AE\u5340": "713",
      "\u7389\u4E95\u5340": "714",
      "\u6960\u897F\u5340": "715",
      "\u5357\u5316\u5340": "716",
      "\u4EC1\u5FB7\u5340": "717",
      "\u95DC\u5EDF\u5340": "718",
      "\u9F8D\u5D0E\u5340": "719",
      "\u5B98\u7530\u5340": "720",
      "\u9EBB\u8C46\u5340": "721",
      "\u4F73\u91CC\u5340": "722",
      "\u897F\u6E2F\u5340": "723",
      "\u4E03\u80A1\u5340": "724",
      "\u5C07\u8ECD\u5340": "725",
      "\u5B78\u7532\u5340": "726",
      "\u5317\u9580\u5340": "727",
      "\u65B0\u71DF\u5340": "730",
      "\u5F8C\u58C1\u5340": "731",
      "\u767D\u6CB3\u5340": "732",
      "\u6771\u5C71\u5340": "733",
      "\u516D\u7532\u5340": "734",
      "\u4E0B\u71DF\u5340": "735",
      "\u67F3\u71DF\u5340": "736",
      "\u9E7D\u6C34\u5340": "737",
      "\u5584\u5316\u5340": "741",
      "\u5927\u5167\u5340": "742",
      "\u5C71\u4E0A\u5340": "743",
      "\u65B0\u5E02\u5340": "744",
      "\u5B89\u5B9A\u5340": "745"
    },
    "\u9AD8\u96C4\u5E02": {
      "\u65B0\u8208\u5340": "800",
      "\u524D\u91D1\u5340": "801",
      "\u82D3\u96C5\u5340": "802",
      "\u9E7D\u57D5\u5340": "803",
      "\u9F13\u5C71\u5340": "804",
      "\u65D7\u6D25\u5340": "805",
      "\u524D\u93AE\u5340": "806",
      "\u4E09\u6C11\u5340": "807",
      "\u6960\u6893\u5340": "811",
      "\u5C0F\u6E2F\u5340": "812",
      "\u5DE6\u71DF\u5340": "813",
      "\u4EC1\u6B66\u5340": "814",
      "\u5927\u793E\u5340": "815",
      "\u6771\u6C99\u7FA4\u5CF6": "817",
      "\u5357\u6C99\u7FA4\u5CF6": "819",
      "\u5CA1\u5C71\u5340": "820",
      "\u8DEF\u7AF9\u5340": "821",
      "\u963F\u84EE\u5340": "822",
      "\u7530\u5BEE\u5340": "823",
      "\u71D5\u5DE2\u5340": "824",
      "\u6A4B\u982D\u5340": "825",
      "\u6893\u5B98\u5340": "826",
      "\u5F4C\u9640\u5340": "827",
      "\u6C38\u5B89\u5340": "828",
      "\u6E56\u5167\u5340": "829",
      "\u9CF3\u5C71\u5340": "830",
      "\u5927\u5BEE\u5340": "831",
      "\u6797\u5712\u5340": "832",
      "\u9CE5\u677E\u5340": "833",
      "\u5927\u6A39\u5340": "840",
      "\u65D7\u5C71\u5340": "842",
      "\u7F8E\u6FC3\u5340": "843",
      "\u516D\u9F9C\u5340": "844",
      "\u5167\u9580\u5340": "845",
      "\u6749\u6797\u5340": "846",
      "\u7532\u4ED9\u5340": "847",
      "\u6843\u6E90\u5340": "848",
      "\u90A3\u746A\u590F\u5340": "849",
      "\u8302\u6797\u5340": "851",
      "\u8304\u8423\u5340": "852"
    },
    "\u5C4F\u6771\u7E23": {
      "\u5C4F\u6771\u5E02": "900",
      "\u4E09\u5730\u9580\u9109": "901",
      "\u9727\u81FA\u9109": "902",
      "\u746A\u5BB6\u9109": "903",
      "\u4E5D\u5982\u9109": "904",
      "\u91CC\u6E2F\u9109": "905",
      "\u9AD8\u6A39\u9109": "906",
      "\u9E7D\u57D4\u9109": "907",
      "\u9577\u6CBB\u9109": "908",
      "\u9E9F\u6D1B\u9109": "909",
      "\u7AF9\u7530\u9109": "911",
      "\u5167\u57D4\u9109": "912",
      "\u842C\u4E39\u9109": "913",
      "\u6F6E\u5DDE\u93AE": "920",
      "\u6CF0\u6B66\u9109": "921",
      "\u4F86\u7FA9\u9109": "922",
      "\u842C\u5DD2\u9109": "923",
      "\u5D01\u9802\u9109": "924",
      "\u65B0\u57E4\u9109": "925",
      "\u5357\u5DDE\u9109": "926",
      "\u6797\u908A\u9109": "927",
      "\u6771\u6E2F\u93AE": "928",
      "\u7409\u7403\u9109": "929",
      "\u4F73\u51AC\u9109": "931",
      "\u65B0\u5712\u9109": "932",
      "\u678B\u5BEE\u9109": "940",
      "\u678B\u5C71\u9109": "941",
      "\u6625\u65E5\u9109": "942",
      "\u7345\u5B50\u9109": "943",
      "\u8ECA\u57CE\u9109": "944",
      "\u7261\u4E39\u9109": "945",
      "\u6046\u6625\u93AE": "946",
      "\u6EFF\u5DDE\u9109": "947"
    },
    "\u81FA\u6771\u7E23": {
      "\u81FA\u6771\u5E02": "950",
      "\u7DA0\u5CF6\u9109": "951",
      "\u862D\u5DBC\u9109": "952",
      "\u5EF6\u5E73\u9109": "953",
      "\u5351\u5357\u9109": "954",
      "\u9E7F\u91CE\u9109": "955",
      "\u95DC\u5C71\u93AE": "956",
      "\u6D77\u7AEF\u9109": "957",
      "\u6C60\u4E0A\u9109": "958",
      "\u6771\u6CB3\u9109": "959",
      "\u6210\u529F\u93AE": "961",
      "\u9577\u6FF1\u9109": "962",
      "\u592A\u9EBB\u91CC\u9109": "963",
      "\u91D1\u5CF0\u9109": "964",
      "\u5927\u6B66\u9109": "965",
      "\u9054\u4EC1\u9109": "966"
    },
    "\u82B1\u84EE\u7E23": {
      "\u82B1\u84EE\u5E02": "970",
      "\u65B0\u57CE\u9109": "971",
      "\u79C0\u6797\u9109": "972",
      "\u5409\u5B89\u9109": "973",
      "\u58FD\u8C50\u9109": "974",
      "\u9CF3\u6797\u93AE": "975",
      "\u5149\u5FA9\u9109": "976",
      "\u8C50\u6FF1\u9109": "977",
      "\u745E\u7A57\u9109": "978",
      "\u842C\u69AE\u9109": "979",
      "\u7389\u91CC\u93AE": "981",
      "\u5353\u6EAA\u9109": "982",
      "\u5BCC\u91CC\u9109": "983"
    },
    "\u91D1\u9580\u7E23": {
      "\u91D1\u6C99\u93AE": "890",
      "\u91D1\u6E56\u93AE": "891",
      "\u91D1\u5BE7\u9109": "892",
      "\u91D1\u57CE\u93AE": "893",
      "\u70C8\u5DBC\u9109": "894",
      "\u70CF\u5775\u9109": "896"
    },
    "\u9023\u6C5F\u7E23": {
      "\u5357\u7AFF\u9109": "209",
      "\u5317\u7AFF\u9109": "210",
      "\u8392\u5149\u9109": "211",
      "\u6771\u5F15\u9109": "212"
    },
    "\u6F8E\u6E56\u7E23": {
      "\u99AC\u516C\u5E02": "880",
      "\u897F\u5DBC\u9109": "881",
      "\u671B\u5B89\u9109": "882",
      "\u4E03\u7F8E\u9109": "883",
      "\u767D\u6C99\u9109": "884",
      "\u6E56\u897F\u9109": "885"
    }
  };
  m.prototype = {
    VERSION: "1.7.14",
    data: function data() {
      var a = this.wrap;
      return "undefined" !== typeof f[a.county.val()] ? f[a.county.val()] : f;
    },
    serialize: function serialize() {
      var a = [],
          b = {},
          c = {},
          d = {},
          b = this.container.find("select,input");
      b.length ? b.each(function () {
        c = g(this);
        a.push(c.attr("name") + "=" + c.val());
      }) : g(this).children().each(function () {
        d = g(this);
        a.push(d.attr("name") + "=" + d.val());
      });
      return a.join("&");
    },
    destroy: function destroy() {
      g.data(this.container.get(0), "twzipcode", null);
      if (this.container.length) return this.container.empty().off("change.twzipcode keyup.twzipcode blur.twzipcode");
    },
    get: function get(a) {
      function b(b) {
        "undefined" !== typeof c.wrap[b] && d.push(c.wrap[b].val());
      }

      var c = this,
          d = [];
      "function" === typeof a ? a.call(this, this.wrap.county.val(), this.wrap.district.val(), this.wrap.zipcode.val()) : "string" === typeof a ? a.split(",").forEach(b) : Array.isArray(a) ? a.forEach(b) : d = this.wrap;
      return d;
    },
    set: function set(a) {
      var b = g.extend({}, {
        county: "",
        district: "",
        zipcode: ""
      }, a);

      try {
        "string" === typeof a || "number" === typeof a ? this.wrap.zipcode.val(a).trigger("blur.twzipcode") : (b.zipcode && this.wrap.zipcode.val(b.zipcode).trigger("blur.twzipcode"), b.county && this.wrap.county.val(b.county).trigger("change.twzipcode"), b.district && this.wrap.district.val(b.district).trigger("change.twzipcode"));
      } catch (c) {
        console.warn(c.message);
      } finally {
        return this.container;
      }
    },
    reset: function reset(a, b) {
      var c = this.wrap,
          d = this.options,
          e = "",
          l = [];

      switch (b) {
        case "district":
          c.district.html("<option value=\"\">\u9109\u93AE\u5E02\u5340</option>");
          break;

        default:
          c.county.html("<option value=\"\">\u7E23\u5E02</option>");
          c.district.html("<option value=\"\">\u9109\u93AE\u5E02\u5340</option>");

          for (e in f) {
            "undefined" !== typeof f[e] && -1 === d.hideCounty.indexOf(e) && l.push('<option value="' + e + '">' + e + "</option>");
          }

          g(l.join("")).appendTo(c.county);
      }

      c.zipcode.val("");
    },
    bindings: function bindings() {
      var a = this,
          b = a.options,
          c = a.wrap,
          d = "",
          e = "",
          l = "";
      c.county.on("change.twzipcode", function () {
        var k = g(this).val(),
            h = "",
            e = [];
        c.district.empty();

        if (k) {
          if (!0 === b.zipcodeIntoDistrict) for (h in f[k]) {
            "undefined" !== typeof f[k][h] && -1 === b.hideDistrict.indexOf(h) && -1 === b.hideDistrict.indexOf(f[k][h]) && (e.push('<option value="' + h + '">'), e.push(f[k][h] + " " + h), e.push("</option>"));
          } else for (h in f[k]) {
            "undefined" !== typeof f[k][h] && -1 === b.hideDistrict.indexOf(h) && -1 === b.hideDistrict.indexOf(f[k][h]) && (e.push('<option value="' + h + '">'), e.push(h), e.push("</option>"));
          }
          c.district.append(e.join("")).trigger("change.twzipcode");
        } else c.county.find("option:first").prop("selected", !0), a.reset("district");

        "function" === typeof b.onCountySelect && b.onCountySelect.call(this);
      });
      c.district.on("change.twzipcode", function () {
        var a = g(this).val();
        c.county.val() && c.zipcode.val(f[c.county.val()][a]);
        "function" === typeof b.onDistrictSelect && b.onDistrictSelect.call(this);
      });
      c.zipcode.on("keyup.twzipcode blur.twzipcode", function () {
        var a = g(this),
            e = "",
            d = "";
        a.val(a.val().replace(/[^0-9]/g, ""));
        a = a.val().toString();
        if (3 === a.length) for (e in f) {
          if ("undefined" !== typeof f[e]) for (d in f[e]) {
            if ("undefined" !== typeof f[e][d] && a === f[e][d]) {
              c.county.val(e).trigger("change.twzipcode");
              c.district.val(d).trigger("change.twzipcode");
              break;
            }
          }
        }
        "function" === typeof b.onZipcodeKeyUp && b.onZipcodeKeyUp.call(this);
      });

      (function () {
        var b = a.role.zipcode.data(),
            c = a.role.county.data(),
            e = a.role.district.data(),
            d;

        for (d in b) {
          "role" !== d && a.role.zipcode.find(":input").attr(d, b[d]);
        }

        for (d in c) {
          "role" !== d && a.role.county.find("select").attr(d, c[d]);
        }

        for (d in e) {
          "role" !== d && a.role.district.find("select").attr(d, e[d]);
        }
      })();

      d = "undefined" !== typeof b.zipcodeSel ? b.zipcodeSel : "undefined" !== typeof a.role.zipcode.data("value") ? a.role.zipcode.data("value") : b.zipcodeSel;
      e = "undefined" !== typeof b.countySel ? b.countySel : "undefined" !== typeof a.role.county.data("value") ? a.role.county.data("value") : b.countySel;
      l = "undefined" !== typeof b.districtSel ? b.districtSel : "undefined" !== typeof a.role.district.data("value") ? a.role.district.data("value") : b.districtSel;
      e && (a.wrap.county.val(e).trigger("change.twzipcode"), "undefined" !== typeof f[e][l] && a.wrap.district.val(l).trigger("change.twzipcode"));
      d && 3 === d.toString().length && a.wrap.zipcode.val(d).trigger("blur.twzipcode");
    },
    geoLocation: function geoLocation(a) {
      var b = this,
          c = navigator.geolocation,
          d = b.options;
      c && a && c.getCurrentPosition(function (c) {
        var e = {};
        "coords" in c && "latitude" in c.coords && "longitude" in c.coords && (e = [c.coords.latitude, c.coords.longitude], g.getJSON("https://maps.googleapis.com/maps/api/geocode/json", {
          key: d.googleMapsKey,
          sensor: !1,
          latlng: e.join(",")
        }, function (d) {
          d && "undefined" !== typeof d.results && "undefined" !== typeof d.results[0].address_components && "undefined" !== typeof d.results[0].address_components[0] && (d = d.results[0].address_components[d.results[0].address_components.length - 1].long_name) && b.wrap.zipcode.val(d.toString()).trigger("blur.twzipcode");
          "function" === typeof a && a.call(b, c);
        }));
      }, function (a) {
        console.error(a);
      }, {
        maximumAge: 6E5,
        timeout: 3E3,
        enableHighAccuracy: !1
      });
    },
    init: function init() {
      var a = this.container,
          b = this.options,
          c = {
        county: a.find("[data-role=county]:first"),
        district: a.find("[data-role=district]:first"),
        zipcode: a.find("[data-role=zipcode]:first")
      },
          d = c.county.data("name") || b.countyName,
          e = c.district.data("name") || b.districtName,
          f = c.zipcode.data("name") || b.zipcodeName,
          k = c.zipcode.data("placeholder") || b.zipcodePlaceholder,
          h = c.zipcode.data("readonly") || b.readonly;
      g("<select/>").attr("name", d).addClass(c.county.data("style") || ("undefined" !== typeof b.css[0] ? b.css[0] : "")).appendTo(c.county.length ? c.county : a);
      g("<select/>").attr("name", e).addClass(c.district.data("style") || ("undefined" !== typeof b.css[1] ? b.css[1] : "")).appendTo(c.district.length ? c.district : a);
      g("<input/>").attr({
        type: "text",
        name: f,
        placeholder: k
      }).prop("readonly", h).addClass(c.zipcode.data("style") || ("undefined" !== typeof b.css[2] ? b.css[2] : "")).appendTo(c.zipcode.length ? c.zipcode : a);
      this.wrap = {
        county: a.find('select[name="' + d + '"]:first'),
        district: a.find('select[name="' + e + '"]:first'),
        zipcode: a.find('input[type=text][name="' + f + '"]:first')
      };
      !0 === b.zipcodeIntoDistrict && this.wrap.zipcode.hide();
      this.role = c;
      this.reset();
      this.bindings();
      this.geoLocation(b.detect);
    }
  };

  g.fn.twzipcode = function (a) {
    var b = {},
        c = [],
        d = arguments;
    return "string" === typeof a ? (this.each(function () {
      b = g.data(this, "twzipcode");
      b instanceof m && "function" === typeof b[a] && (c = b[a].apply(b, Array.prototype.slice.call(d, 1)));
    }), "undefined" !== typeof c ? c : this) : this.each(function () {
      g.data(this, "twzipcode") || g.data(this, "twzipcode", new m(this, a));
    });
  };
})(window.jQuery || {}, window, document);

/***/ }),

/***/ "./resources/assets/js/main.js":
/*!*************************************!*\
  !*** ./resources/assets/js/main.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict';

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation'); // Loop over them and prevent submission

    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

$(document).ready(function () {
  // ajax post
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  }); // ajax post
  // $('#removeModal').on('show.bs.modal', function (event) {
  //     var btn = $(event.relatedTarget);
  //     var title = btn.data('title');
  //     var price = btn.data('price');
  //     var modal = $(this);
  //     modal.find('.modal-title').text('確認刪除 ' + title);
  //     modal.find('.modal-body').text('您要刪除 ' + title + ' $ ' + price + '元 嗎?');
  // });
  // 自訂樣飾區

  $("#twzipcode").twzipcode({
    countySel: $('.address').data('city'),
    districtSel: $('.address').data('town'),
    // zipcodeIntoDistrict: true, // 郵遞區號自動顯示在地區
    css: ["city form-control live", "town form-control live", "postcode form-control live"],
    // 自訂 "城市"、"地區" class 名稱
    countyName: "city",
    // 自訂城市 select 標籤的 name 值
    districtName: "town",
    // 自訂地區 select 標籤的 name 值
    zipcodeName: 'postcode'
  });
  var product_content = $('.product_content').attr('value');
  $('.product_content').html(product_content);
  var twzipcode = $('#twzipcode');
  $(twzipcode).children("select").prop('required', true);
  $(twzipcode).children("input").prop('required', true);
  var total = $('.total'),
      total_all = $('.total_all'),
      val = 0;

  for (var i = 0; i < total.length; i++) {
    val = val + $(total[i]).data('total');
  }

  if (val < 500) {
    val = val + 80;
  } else {
    $('.freight').addClass("strikethrough");
  }

  $(total_all).html('$' + val + ''); //頁面 : inc.hender

  $('body').on("click", '#dropdownMenuButton', function () {
    $('.dropdown-menu').show();
  });
  $(document).mouseup(function (e) {
    var container = $('.dropdown-menu'); // 這邊放你想要排除的區塊

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.hide();
    }
  }); //頁面 : index
  //動態新增的elements要綁定事件需要用.on的方式

  $('body').on("click", '.getcategory2', function () {
    var code = $(this).attr('code'),
        parent_div = $(this).parent();
    $.ajax({
      type: 'POST',
      url: 'getcategory2',
      data: {
        "code": code
      },
      success: function success(data) {
        $(parent_div).children(".getcategory2").detach();
        $(parent_div).append('<a href="javascript:void(0);" class="list-group-item list-group-item-action active returncategory1" data-toggle="list">返回</a>');

        for (var i = 0; i < data.length; i++) {
          var datatext = '<a href="getproduct_all?type=reception&listcode=' + code + '&code=' + data[i].Code + '" code="' + data[i].Code + '" class="list-group-item list-group-item-action category2" data-toggle="list">' + data[i].Category2 + '</a>';
          $(parent_div).append(datatext);
        }
      }
    });
  });
  $('body').on("click", '.returncategory1', function () {
    var parent_div = $(this).parent();
    $.ajax({
      type: 'GET',
      url: 'returncategory1',
      success: function success(data) {
        $(parent_div).children(".category2").detach();
        $(parent_div).children(".returncategory1").detach();

        for (var i = 0; i < data.length; i++) {
          var datatext = '<a href="javascript:void(0);" code="' + data[i].Code + '" class="list-group-item list-group-item-action getcategory2" data-toggle="list">' + data[i].Category1 + '</a>';
          $(parent_div).append(datatext);
        }
      }
    });
  }); //頁面 : product

  $('body').on("click", '.ajax_product', function () {
    var code = $(this).attr('code'),
        page = $(this).attr('page'),
        row_div = $(".product").parent(),
        pagination = $(this).parents("ul"),
        previous = $(pagination).children('.previous'),
        bookmark = $(pagination).children('.bookmark'),
        next = $(pagination).children('.next'),
        disabled = $(pagination).children('.disabled'); //get_data

    ajax_product(code, page, row_div); //get_page

    ajax_page(code, page, pagination, previous, bookmark, next, disabled);
  });

  function ajax_page(code, page, pagination, previous, bookmark, next, disabled) {
    $.ajax({
      type: 'POST',
      url: 'ajax_product',
      data: {
        "code": code,
        "page": page,
        "type": 'ajax_page'
      },
      success: function success(data) {
        // 上一頁
        if (data.page != 1) {
          $(previous).children('a').detach();
          $(previous).append('<a href="javascript:void(0);" class="page-link ajax_product" code="' + data.code + '" page="' + (data.page - 1) + '">上一頁</a>');
        } else {
          $(previous).children('a').detach();
        }

        if (data.page != data.pages) {
          //一般頁數
          $(bookmark).children('li').detach();

          for (var i = 1; i <= data.pages; i++) {
            if (data.page - 2 < i && i < data.page + 3) {
              $(bookmark).append('<li class="page-item bookmark"><a href="javascript:void(0);" class="page-link ajax_product" code="' + data.code + '" page="' + i + '">' + i + '</a></li>');
            }
          } // 下一頁


          $(next).children('a').detach();
          $(next).append('<a href="javascript:void(0);" class="page-link ajax_product" code="' + data.code + '" page="' + (data.page + 1) + '">下一頁</a>');
        } else {
          $(next).children('a').detach();
        }

        $(disabled).children('a').html('目前第' + data.page + '頁');
      }
    });
  }

  function ajax_product(code, page, row_div) {
    $.ajax({
      type: 'POST',
      url: 'ajax_product',
      data: {
        "code": code,
        "page": page,
        "type": 'ajax_product'
      },
      success: function success(data) {
        $(".product").detach();

        for (var i = 0; i < data.length; i++) {
          var datatext1 = '<div class="col-md-4 mt-4 product">' + '<div class="card text-center h-100 border-0 box-shadow">' + '<img src="files/StoreProduct/' + data[i].Pd_Img + '" class="card-img-top" alt="' + data[i].Pd_Name + '">' + '<div class="card-body">' + '<h5 class="card-title " style="font-weight: bold;">' + data[i].Pd_Name + '</h5>' + '</div>' + '<div class="card-footer border-top-0 bg-white">' + '<div class="btn-group " role="group" aria-label="First group">';

          if (data[i].Pd_Discount) {
            var datatext2 = '<button type="button" class="btn btn-light btn-sm strikethrough" disabled>$' + data[i].Pd_Price + '</button>' + '<button type="button" class="btn btn-danger btn-sm" disabled>' + '特惠' + data[i].Pd_Discount + '折' + '</button>' + '<button type="button" class="btn btn-dark btn-sm" disabled>$' + data[i].Pd_Discount_Price + '元</button>';
          }

          var datatext3 = '<button type="button" class="btn btn-dark btn-sm" disabled>$' + data[i].Pd_Price + '元</button>';
          var datatext4 = '</div>' + '<a href="product_view?pd_id=' + data[i].Pd_id + '" class="btn btn-outline-secondary btn-sm mt-2 d-block"><i class="fas fa-shopping-cart mr-1"></i>購物去</a>' + '</div>' + '</div>' + '</div>';

          if (data[i].Pd_Discount) {
            var datatext = '' + datatext1 + '' + datatext2 + '' + datatext4 + '';
          } else {
            var datatext = '' + datatext1 + '' + datatext3 + '' + datatext4 + '';
          }

          $(row_div).append(datatext);
        }
      }
    });
  } //頁面 : getmember (查詢有無重複email帳號)


  $('body').on("click", '.register_member', function (event) {
    var email_val = $('.register_email').val(),
        errormessage = $('.register_errormessage');
    $.ajax({
      type: 'POST',
      url: 'repeat_member',
      data: {
        "email": email_val
      },
      async: false,
      success: function success(data) {
        if (data == 'error') {
          event.preventDefault();
          event.stopPropagation();
          $(errormessage).children('label').html('此Email信箱已有人使用，請更改Email地址');
          $(errormessage).show();
        }
      }
    });
  }); //頁面 : product_view

  var number_submit = $('.product_number').children(':submit');
  $(number_submit).click(function () {
    var select_val = $('.product_number').children('select').val(),
        mb_id = $(this).data('mbid'),
        mb_auth = $(this).data('mbauth'),
        pd_id = $(this).data('id'),
        pd_name = $(this).data('name'),
        pd_price = $(this).data('price'),
        pd_link = $(this).data('link'),
        pd_img = $(this).data('img');

    if (mb_id == '') {
      alert('請先登入會員，才能進行購物動作');
    } else if (mb_auth == 0) {
      alert('會員目前未驗證，驗證過後才能進行購物動作');
    } else {
      $.ajax({
        type: 'POST',
        url: 'add_cart',
        data: {
          "pd_number": select_val,
          "mb_id": mb_id,
          "pd_id": pd_id,
          "pd_name": pd_name,
          "pd_price": pd_price,
          "pd_link": pd_link,
          "pd_img": pd_img
        },
        async: false,
        success: function success(data) {
          alert('已將商品 ' + pd_name + ' 數量 ' + select_val + ' 件加入會員購物車');
          location.reload();
        }
      });
    }
  });
  $('body').on("click", '.del_product', function (event) {
    var pd_id = $(this).data('pdid'),
        pd_name = $(this).data('name');

    if (confirm("確定刪除此件商品嗎")) {
      $.ajax({
        type: 'POST',
        url: 'del_cart',
        data: {
          "pd_id": pd_id
        },
        async: false,
        success: function success(data) {
          alert('已將商品 ' + pd_name + ' 移除');
          location.reload();
        }
      });
    }
  });
  $('body').on("click", '.del_order', function (event) {
    var od_id = $(this).data('odid'),
        od_status = $(this).data('odstatus');

    if (od_status == 0) {
      if (confirm("確定取消此訂單嗎")) {
        $.ajax({
          type: 'POST',
          url: 'del_order',
          data: {
            "od_id": od_id
          },
          async: false,
          success: function success(data) {
            alert('已將此筆訂單取消');
            location.reload();
          }
        });
      }
    } else {
      alert('此筆訂單已付款，無法取消，如有疑問請洽克服');
    }
  });
  $('body').on("click", '.checkout', function (event) {
    if (!confirm("本平台使用信用卡付款服務，將為您導向至歐付寶進行結帳動作")) {
      event.preventDefault();
      event.stopPropagation();
    }
  });
});

/***/ }),

/***/ "./resources/assets/sass/admin/admin_app.scss":
/*!****************************************************!*\
  !*** ./resources/assets/sass/admin/admin_app.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/sass/app.scss":
/*!****************************************!*\
  !*** ./resources/assets/sass/app.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!************************************************************************************************************************!*\
  !*** multi ./resources/assets/js/app.js ./resources/assets/sass/app.scss ./resources/assets/sass/admin/admin_app.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! E:\xampp\htdocs\joshduan\resources\assets\js\app.js */"./resources/assets/js/app.js");
__webpack_require__(/*! E:\xampp\htdocs\joshduan\resources\assets\sass\app.scss */"./resources/assets/sass/app.scss");
module.exports = __webpack_require__(/*! E:\xampp\htdocs\joshduan\resources\assets\sass\admin\admin_app.scss */"./resources/assets/sass/admin/admin_app.scss");


/***/ })

/******/ });
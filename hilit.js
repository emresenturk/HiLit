(function () {
	this.HiLit = function (selector, options) {
		this.Replacements = this.Replacements || [];
		var defaults = {};
		this.options = extend({}, defaults, options)

		var elements = document.querySelectorAll(selector);
		forEach(elements, function (e, i) { transformElement(e, this.options) });
	}

	function transformElement(element, options) {
		if (element.tagName !== "CODE") { return; }
		var syntaxName = element.getAttribute("data-syntax") || options.syntax;
		var replacements = HiLit.Replacements[syntaxName];
		var content = replaceTabs(replaceLineBreaks(element.innerHTML));
		for (var pattern in replacements) {
			var regex = new RegExp(pattern, "gm");
			content = content.replace(regex, function (match, p1) { return match.replace(p1, '<span style="color:' + replacements[pattern] + '">' + p1 + '</span>'); });
		}

		element.innerHTML = content;
		if (!hasClass(element, "hilit")) {
			addClass(element, "hilit");
		}
	}

	function hasClass(element, className) {
		if (element.classList) {
			return element.classList.contains(className);
		}
		else {
			return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className)
		};
	}

	function addClass(element, className) {
		if (element.classList) {
			element.classList.add(className);
		}
		else {
			element.className += ' ' + className;
		}
	}

	function replaceLineBreaks(content) {
		return content.replace(/(?:\r\n|\r|\n)/g, "<br />");
	}

	function replaceTabs(content) {
		return content.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
	}

	function extend(merged) {
		merged = merged || {};

		for (var i = 1; i < arguments.length; i++) {
			if (!arguments[i]) {
				continue;
			}

			for (var key in arguments[i]) {
				if (arguments[i].hasOwnProperty(key)) {
					merged[key] = arguments[i][key]
				};
			}
		}

		return merged;
	}

	function forEach(array, fn) {
		for (var i = 0; i < array.length; i++) {
			fn(array[i], i);
		}
	}

} ());
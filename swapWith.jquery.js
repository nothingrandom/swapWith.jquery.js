// https://github.com/nothingrandom/swapWith.jquery.js

$.fn.swapWith = function(to) {
    return this.each(function() {
        var copy_to = $(to).clone(true);
        var copy_from = $(this).clone(true);
        $(to).replaceWith(copy_from);
        $(this).replaceWith(copy_to);
    });
};

// To use
$('.class1').swapWith($('.class2'));
(function() {
    var t1 = document.getElementById('t1');
    var t2_1 = document.getElementById('t2-1');
    var t2_2 = document.getElementById('t2-2');
    var t3_1 = document.getElementById('t3-1');
    var t3_2 = document.getElementById('t3-2');
    var t3_3 = document.getElementById('t3-3');


    var assertArray = function(obj) {
        equal(Object.prototype.toString.call(obj), '[object Array]');
    };

    test("cssquery('miss')", 2, function() {
        var result = cssquery("miss");
        equal(result.length, 0);
        assertArray(result);
    });

    test("cssquery('abbr')", 3, function() {
        var result = cssquery("abbr");
        equal(result.length, 1);
        equal(result[0], t1);
        assertArray(result);
    });

    test("cssquery('p i')", 4, function() {
        var result = cssquery("p i");
        equal(result.length, 2);
        equal(result[0], t2_1);
        equal(result[1], t2_2);
        assertArray(result);
    });

    test("cssquery('div p a')", 5, function() {
        var result = cssquery("div p a");
        equal(result.length, 3);
        equal(result[0], t3_1);
        equal(result[1], t3_2);
        equal(result[2], t3_3);
        assertArray(result);
    });
})();
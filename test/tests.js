var getData = function () {
    return [
        {
            data: [[0, 0], [1, 1], [2, 3]],
            label: 'test series'
        }
    ];
};

var createPlot = function (placeholderId, data) {
    var $placeholder;
    if (placeholderId && document.getElementById(placeholderId)) {
        $placeholder = $('#' + placeholderId);
    }
    else {
        $placeholder = $('<div style="width: 700px; height: 300px;">');
        $(document.body).append($placeholder);
    }
    var plot = $.plot(
        $placeholder,
        data || getData(),
        {
            grid: { hoverable: true },
            highlightSeries: {color: 'red'}
        });
    return plot;
};

/*
test('basic test', function() {
    createPlot();
    ok('able to create plot with highlightSeries');
});

test('highlight by id test', function() {
    var plot = createPlot();
    plot.highlightSeries(0);
    ok('able to highlight by id');
});

test('highlight by label test', function() {
    var plot = createPlot();
    plot.highlightSeries('test series');
    ok('able to highlight by id');
});

test('highlight by series test', function() {
    var
        plot = createPlot(),
        series = plot.getData()[0];
    plot.highlightSeries(series);
    ok('able to highlight by series');
});

test('highlight by label, non-existant series test', function() {
    var plot = createPlot();
    raises(function () {
        plot.highlightSeries('foo');
    }, 'should throw error about non-existant series');
});

test('highlight by series, non-existant series test', function() {
    var plot = createPlot();
    raises(function () {
        plot.highlightSeries({});
    }, 'should throw error about non-existant series');
});

test('highlight by id, non-existant series test', function() {
    console.log('test 1');
    var plot = createPlot();
    raises(function () {
        console.log('test 1 highlightSeries');
        plot.highlightSeries(1);
    }, 'should throw error about non-existant series');
});
*/

asyncTest('highlight overwritten plot test', function() {
    console.log('test 2');
    console.log('plot');
    var plot = createPlot();
    plot.highlightSeries(1);
    console.log('plotOne');
    var plotOne = createPlot('#overwrittenPlot', []);
    console.log('plotTwo');
    var plotTwo = createPlot('#overwrittenPlot');

    var timeoutId = setTimeout(function() {
        ok(false, 'error in mousemove handling');
        start();
    }, 500);

    var placeholder = plotTwo.getPlaceholder();
    placeholder.on('plothover', function () {
        clearTimeout(timeoutId);
        ok('able to highlight overwritten plot');
        start();
    });

    var overlay = placeholder.find('.flot-overlay');
    overlay.simulate(
        'mousemove', {
        clientX: overlay.offset().left + 700,
        clientY: overlay.offset().top + 50
    });
});

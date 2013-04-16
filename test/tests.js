var getData = function () {
    return [
        {
            data: [[0, 0], [1, 1]],
            label: 'test series'
        }
    ];
};

var createPlot = function (placeholderId, data) {
    var plot = $.plot(
        $(placeholderId),
        data || getData(),
        {
            grid: { hoverable: true },
            highlightSeries: {}
        });
    return plot;
};

test('basic test', function() {
    createPlot('#placeholder');
    ok('able to create plot with highlightSeries');
});

test('highlight by id test', function() {
    var plot = createPlot('#placeholder');
    plot.highlightSeries(0);
    ok('able to highlight by id');
});

test('highlight by label test', function() {
    var plot = createPlot('#placeholder');
    plot.highlightSeries('test series');
    ok('able to highlight by id');
});

test('highlight by series test', function() {
    var
        plot = createPlot('#placeholder'),
        series = plot.getData()[0];
    plot.highlightSeries(series);
    ok('able to highlight by series');
});

test('highlight by id, non-existant series test', function() {
    var plot = createPlot('#placeholder');
    raises(function () {
        plot.highlightSeries(1);
    }, 'should throw error about non-existant series');
});

test('highlight by label, non-existant series test', function() {
    var plot = createPlot('#placeholder');
    raises(function () {
        plot.highlightSeries('foo');
    }, 'should throw error about non-existant series');
});

test('highlight by series, non-existant series test', function() {
    var plot = createPlot('#placeholder');
    raises(function () {
        plot.highlightSeries({});
    }, 'should throw error about non-existant series');
});

asyncTest('highlight overwritten plot test', function() {
    var plotOne = createPlot('#placeholder', []);
    var plotTwo = createPlot('#placeholder');

    var timeoutId = setTimeout(function() {
        ok(false, 'error in mousemove handling');
        start();
    }, 500);

    var placeholder = $('#placeholder');
    placeholder.on('plothover', function () {
        clearTimeout(timeoutId);
        ok('able to highlight overwritten plot');
        start();
    });

    var overlay = placeholder.find('.overlay');
    overlay.simulate('mousemove', {clientX: overlay.offset().left + 700, clientY: overlay.offset().top + 50});
});

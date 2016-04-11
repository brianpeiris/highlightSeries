# The highlightSeries plugin for Flot
The highlightSeries plugin for [Flot](https://github.com/flot/flot/) allows you to highlight whole series on a plot. 
The plugin is up to 3 times faster than manually changing the color of a series and redrawing the entire plot.
It also has the added benefit of highlighting the series in an overlay which gives the appearance of having moved the series to the foreground and practically elminiates the time needed to clear the highlight.<br />

## Usage
**The highlightSeries plugin is compatible with Flot 0.7 and requires that you [patch](http://en.wikipedia.org/wiki/Patch_%28Unix%29) the Flot source code** since it uses a slightly modified version of an internal function. See the [patch file](jquery.flot.js.diff?v=0.7). Once the patch is applied, you simply need to include jquery.flot.highlightSeries.js in a script tag.

## Demo
http://brian.peiris.io/highlightSeries/

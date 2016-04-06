# arrow.js

To be called like so:

arrowedElem=$('#arrow_me');
arrow(arrowedElem,'lc','purple');

You can add an optional parameter to make it blink, like this:

arrow(arrowedElem,'lc','purple',true);

The positions are like so:
lt -- Left Top
lc -- Left Center
lb -- Left Bottom
ct -- Center top
cb -- Center Bottom
rt -- Right top
rc -- Right Center
rb -- Right Bottom
all -- show them all at the same time.

If the element is too big for the window, it will flip to the inside, and use the correct arrow.

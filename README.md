# Hide & Reveal on a Map
Hide and reveal information on a map. For Codepen's challenge the week of April 26, 2021: Hide &amp; Reveal.
 
## How It's Made
**Tech used:** HTML, CSS, JavaScript
 
 Everything is built with the trifecta of HTML, CSS, and JavaScript. I referenced some [code from Codepen](https://codepen.io/rdev-rocks/pen/KXNzvo) to make the lightbox/modal feature that is the essence of the "Hide and Reveal" theme. It was simple enough to add an event listener on all the 'hotspots' that would trigger the lightbox and present more information on that particular area.

 Placing the 'hotspots' for the map areas took a bit of work, since their positioning is basically based on trial-and-error. I had also looked up the `map` tag in HTML, but it seemed more work than just using a symbol or button indicator.

 The image used as the map is my actual town map in Animal Crossing: New Horizons. All descriptions are my own.
 
## Optimizations
I still need to take more images of the actual areas from the game to put into the lightbox.

While testing, it seemed easier to add the ESC key to exit the lightbox than setting up the 'X' to close it. Personally, that's faster to exit out of a lightbox like that. I think even better would be clicking in the area outside of the lightbox to exit it. (But that's actually hard to see in the current implementation because everything is black.)

In the example code for the lightbox, there is a slideshow gallery as part of the modal, which would be interesting to implement. It would save time for the viewer to go in and out of the lightbox. However, I would also consider that if the location of the area is important, there would be no way the viewer could know where it is on the map while in the lightbox.
 
## Lessons Learned
I think this was great practice in linking HTML, CSS, and JavaScript. In particular, adding event listeners and using a data attribute on each of the hotspots to make sure the DOM displayed the correct information in the lightbox. I'd never thought to use it before, but I remember using it in some JavaScript challenges and while learning React that data can be passed through tags with `data-*`.

Each of the hotspots has a `data-name` attribute that gets used when that particular hotspot is clicked. The `data-name` is used to pull the appropriate information from the list of areas in `mapAreas` so it can be used in the DOM.
 




## Other Projects

Check out other stuff I've worked on:

**Minute To Win It Games API & Wiki**: https://github.com/geraldiner/min-to-win

**Rehabitter:** https://github.com/geraldiner/rehabitter

**Snapchat Clone:** https://github.com/geraldiner/snapchat-clone

**K.K. Radio:** https://github.com/geraldiner/kk-radio

**Pom Poko Pomodoro App:** https://github.com/geraldiner/pom-poko-pomodoro

**Interactive Piano:** https://github.com/geraldiner/piano

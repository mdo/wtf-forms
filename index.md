---
layout: default
---

### Checkboxes and radios

<form class="controls-stacked">
  {% include checkbox.html %}
</form>
```html
{% include checkbox.html %}
```

<form class="controls-stacked">
  {% include radio.html %}
</form>
```html
{% include radio.html %}
```

Each checkbox and radio is wrapped in a `<label>` for three reasons:

1. It provides a larger hit areas for checking the control.
2. It provides a helpful and semantic wrapper to help us replace the default `<input>`s.
3. It triggers the state of the `<input>` automatically, meaning no JavaScript is required.

We hide the default `<input>` with `opacity` and instead use the `<span class="control-indicator">` within the `<label>` to build a new custom form control.

With the sibling selector (`~`), we use the `:checked` state to trigger a makeshift checked state on the custom control.


### Select menu

<form class="controls-stacked">
  {% include select.html %}
</form>
```html
{% include select.html %}
```

Similar to the checkboxes and radios, we wrap the `<select>` in a `<label>` as a semantic wrapper that we can generate custom styles on with CSS's generated content.

The `<select>` has quite a few styles to override and includes a few hacks to get things done. Here's what's happening:

* The `appearance` is reset to `none` for nearly all styles to correctly apply across modern browsers (meaning not IE9).
* The `:-moz-focusring` is overridden so that on focus there's no inner border in Firefox.
* The arrow is hidden in Firefox with a media query hack. (There's a [longstanding open bug](https://bugzilla.mozilla.org/show_bug.cgi?id=649849) for a native method of addressing this.)
* The arrow is hidden in IE10+ with a simple selector.
* The arrow is hidden in IE9 with a separate media query hack which generates another pseudo-element to literally mask it. Not ideal, but doable.

**Heads up!** This one comes with some quirks right now:

* Clickability is limited in IE9.
* Firefox's dropdown of `option`s looks rather ugly.
* The custom caret is unable to receive the selected state's `color`.

Any ideas on improving these are most welcome.


### File browser

<form class="controls-stacked">
  {% include file.html %}
</form>
```html
{% include file.html %}
```

The file input is the most gnarly of the bunch. Here's how it works:

* We wrap the `<input>` in a `<label>` so the custom control properly triggers the file browser.
* We hide the default file `<input>` via `opacity`.
* We use `:after` to generate a custom background and directive (*Choose file...*).
* We use `:before` to generate and position the *Browse* button.
* We declare a `height` on the `<input>` for proper spacing for surrounding content.

In other words, it's an entirely custom element, all generated via CSS.

**Heads up!** The custom file input is currently unable to update the *Choose file...* text with the filename. Without JavaScript, this might not be possible to change, but I'm open to ideas.


### FAQs

#### What about every other form control?
For the time being, **WTF, forms?** is limited to checkboxes, radio buttons, select menus, and file inputs. Additional custom inputs will depend on browser support.

#### Why are there no `for` attributes?
We nest our `<input>`s and `<select>`s within a `<label>`, so there's no need to specify a `for` attribute as the browser will automatically associate the two.

#### What about `hover` states?
Basic hover styles have been included, but they've been commented out because they are sticky on iOS. Uncomment if you really need it.

#### Does this require JavaScript?
Not for the time being, however, the file input might be better off with it.

#### Will this be added to Bootstrap?
Possibly, but not until v4 at the earliest.

#### Is this screen reader friendly?
Honestly, no idea right now.


### Changelog

*WTF, forms?* utilizes [SemVer](http://semver.org) for versioning releases.

#### v1: May 12, 2014
Initial release.

#### v2: May 14, 2014
* New focus styles. [Fixes #3.](https://github.com/mdo/wtf-forms/issues/3)
* Commented out hover styles for now because iOS makes them sticky, and the hover styles weren't particularly useful.
* File inputs now require a `<span>` within `.file`. This was added for proper focus state support as a `<label>` has no idea if the child `<input>` has focus or not.
* Added `z-index: -1;` to checkboxes and radios to avoid a cursor change when hovering where the orignal input rendered. [Fixes #10.](https://github.com/mdo/wtf-forms/pull/10)
* Added FAQs and this changelog to the project page.

For issues, milestones, and more, visit the [GitHub project]({{ site.repo }}).

---
layout: default
---

### Checkboxes and radios

<div class="controls-stacked">
  {% include checkbox.html %}
</div>
```html
{% include checkbox.html %}
```

<div class="controls-stacked">
  {% include radio.html %}
</div>
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

<div class="controls-stacked">
  {% include select.html %}
</div>
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

<div class="controls-stacked">
  {% include file.html %}
</div>
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

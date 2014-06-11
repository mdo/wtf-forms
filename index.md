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

In the checked states, we use **base64 embedded SVG icons** from [Open Iconic](http://useiconic.com/open). This provides us the best control for styling and positioning across browsers and devices.


#### Alternate icons

By default, checkboxes use a checkmark and radios use an filled circle. Also included are two modifier classes, `.control-x` and `.control-dash`, to change things up should the need arise.

<form class="controls-inline">
  {% include icons.html %}
</form>

Add the modifier classes to the `<label>`, like so:

```html
<label class="control checkbox control-x">...</label>
```

Want to customize the icons further, or use other ones? [Download Open Iconic](http://useiconic.com/open)—included are font files, PNGs, and SVGs.



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
* Styling of `select[multiple]` elements is basically impossible because `<option>`s are presently unstylable in all browsers.

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


### Progress

<form class="controls-stacked">
  {% include progress.html %}
</form>
```html
{% include progress.html %}
```

The `<progress>` element is actually pretty straightforward to style, but it does have some gotchas. Here's the deal:

* Unlike most other custom inputs, we don't wrap it in an extra element. We just add `.progress`.
* Using pseudo selectors, we target aspects of the `<progress>` element. For example, in WebKit browsers, `::-webkit-progress-bar` is the background bar and `::-webkit-progress-value` is the colored progress bar within.
* Firefox has it's own pseudo selectors that must be applied with duplicate rulesets. Chaining `::-webkit-` and `::-moz-` pseudo selectors will nullify your styles. (It's worth noting this happens with other pseudo selectors like `placeholder`).
* IE10 is the only version of IE to support `<progress>`. The only quirk there is that you must set the `color` property on the `<progress>` element to colorize the progress bar within.

For more information, [read the rather thorough CSS Tricks article](http://css-tricks.com/html5-progress-element/). There you'll find gotchas around generated content, browser quirks, and more. The MDN also has an informative [article on the progress element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress).

#### Custom width

The `width` is autmatically set by the browser, but you can easily change it by adding some CSS to `.progress`.

```css
.progress {
  width: 100%;
}
```

#### Internet Explorer 9 support

<form class="controls-stacked">
  {% include progress-ie9.html %}
</form>
```html
{% include progress-ie9.html %}
```

IE10 natively supports the `<progress>` element, but IE9 doesn't. Instead, they simply show as plain text values. However, IE9 support is just a few hacks away:

* We add custom markup *within* the existing `<progress>` element to simulate the background and inner progress bar.
* We copy-paste the styles from the pseudo selectors to a IE9-specific media query (like I said, a few hacks) to only apply when necessary.
* Lastly, to simulate the native `<progress>` behavior, we add `text-indent: -999rem;` to the custom `.progress-bar` to hide the text value.

**Once applied, you can use the IE9-compatible snippet in all browsers.** However, I encourage you to only do so should you need IE9 support.


### FAQs

#### What about every other form control?
For the time being, **WTF, forms?** is limited to checkboxes, radio buttons, select menus, file inputs, and progress bars. Additional custom inputs will depend on browser support.

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

For a full changelog, visit the [releases page on GitHub]({{ site.repo }}releases).

This project utilizes [SemVer](http://semver.org) for versioning releases for maximum backward compatibility.

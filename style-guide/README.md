# AO.com - SCSS Style Guide

> Our view on SCSS formatting.

## Syntax

Always the `.scss` syntax.

## Formatting

* Use tabs for indentation.
* Use kebab-case for selectors.
* Avoid using IDs as selectors.
* Declare all selectors on a single line.
* Insert a space before the opening brace ` {` in rule declarations.
* When declaring properties put a space after, but not before, the `: ` character.
* Closing braces `}` of rule declarations should be on a new line.
* Insert blank lines between rule declarations

## Selector Pattern

Both classname and ID selectors should use a lowercase hyphenated pattern.

### Classname Selectors

```scss
.some-class-name {
	/* ... */
}
```

### ID Selectors

Although we discourage the use of IDs as selectors, if absolutely necessary they should be declared using the same pattern as classnames.

```scss
#some-id {
	/* ... */
}
```

## @Extends

Placeholders should be extended before any property declarations.

```scss
/* some selector */ {
	@extends %header-main;

	color: #44444;
}
```

## Property declaration order

Properties are ordered both by groups and in a certain order within each group.

See below for a comprehensive list. Any properties not listed should be declared at the bottom.

```scss
/* some selector  */ {

	/* Display */

	display: block | flex | grid | inline | inline-block | inline-flex | inline-grid | table | table-cell;

	/* Flex parent */

	flex-direction: column;
	flex-flow: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	align-content: center;

	/* Flex children */

	order: 1;
	flex-grow: 1;
	flex-shrink: 0;
	flex-basis: auto;
	flex: 1 0 auto;
	align-self: center;

	/* Grid parent */

	grid-template-columns: 50px 50px 50px 50px;
	grid-template-rows: auto;
	grid-template-areas:
		'header header header header'
		'main main . sidebar'
		'footer footer footer footer';
	grid-template:
		[row1-start] 25px 'header header header' [row1-end]
		[row2-start] 'footer footer footer' 25px [row2-end]
		/ auto 50px auto;
	grid-column-gap: 1.5rem;
	grid-row-gap: 1.5rem;
	grid-gap: 1.5rem;
	justify-items: center;
	justify-content: center;
	align-items: center;
	align-content: center;
	grid-auto-columns: 60px;
	grid-auto-rows: 60px;
	grid-auto-flow: column;
	grid:
		[row1-start] 'header header header' 1fr [row1-end]
		[row2-start] 'footer footer footer' 25px [row2-end]
		/ auto 50px auto;

	/* Grid children */

	grid-column-start: 2;
	grid-column-end: five;
	grid-row-start: row1-start;
	grid-row-end: 3;
	grid-column: 3 / span 2;
	grid-row: third-line / 4;
	grid-area: 1 / col4-start / last-line / 6;
	justify-self: start;
	align-self: start;

	/* Pseudo Specific */

	content: ;

	/* Positioning declarations */

	position: absolute | fixed | relative | static | sticky;
	top: 50%;
	right: 50%;
	bottom: 50%;
	left: 50%;
	z-index: 10;

	transform: translate(-50%);
	vertical-align: middle;

	/* Floats */

	float: left | right | none;
	clear: left | right | both | none;

	/* Box model declarations */

	box-sizing: border-box;

	width: 600px;
	min-width: 50%;
	max-width: 100%;

	height: 300px;
	min-height: 50%;
	max-height: 100%;

	margin: 10px 15px 20px 25px; /* top | right | bottom | left */
	margin-top: 10px;
	margin-right: 15px;
	margin-bottom: 20px;
	margin-left: 25px;

	padding: 10px 15px 20px 25px; /* top | right | bottom | left */
	padding-top: 10px;
	padding-right: 15px;
	padding-bottom: 20px;
	padding-left: 25px;

	border: 1px solid #333333;
	border-top: 1px solid #333333;
	border-right: 1px solid #333333;
	border-bottom: 1px solid #333333;
	border-left: 1px solid #333333;

	/* Typographical */

	direction: ltr;

	line-height: 1.5; /* No units */

	font: 16px/3 serif bold italic; /* size/line-height | family | weight | style */
	font-size: 1rem;
	font-family: sans-serif;
	font-weight: normal;
	font-style: italic;

	text-align: center;
	text-transform: lowercase;
	text-decoration: underline;

	word-wrap: break-word;

	/* Aesthetics */

	background: #000000; /* color | image | position | repeat | size */
	background-color: #000000;
	background-image: url('../img/nicholas-cage.jpg');
	background-image: image-set(url('../img/nicholas-cage.jpg') 1x, url('../img/nicholas-cage_2x.jpg') 2x);
	background-position: top left;
	background-repeat: no-repeat;
	background-size: cover;

	color: #ffffff;

	border-radius: 5px 5px 5px 5px; /* top right | bottom right | bottom left | top left */
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-left-radius: 5px;

	box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.5);

	list-style: lower-roman outside url(../img/shape.png); /* type | position | image */
	list-style-type: lower-roman;
	list-style-position: outside;
	list-style-image: url(../img/shape.png);

	transition: color 1s ease-in-out;

	animation: 3s ease-in 1s 2 reverse both paused slidein;

	opacity: 0.5;
	visibility: visible;
	object-fit: cover;

	/* Other */

	overflow: auto;
	overflow-x: auto;
	overflow-y: auto;

	cursor: pointer;
	pointer-events: none;

	/*
	All undocumented properties live here.
	*/

	&:hover {
		/* Declarations */
	}

	&:focus {
		/* Declarations */
	}

	&:active {
		/* Declarations */
	}

	&:visited {
		/* Declarations */
	}

	&:checked {
		/* Declarations */
	}

	&:first-child {
		/* Declarations */
	}

	&:first-of-type {
		/* Declarations */
	}

	&:last-child {
		/* Declarations */
	}

	&:last-of-type {
		/* Declarations */
	}

	&:nth-child(4n+1) {
		/* Declarations */
	}

	&:nth-of-type(4n+1) {
		/* Declarations */
	}

	&::before {
		content: ;
	}

	&::after {
		content: ;
	}

}
```

## Nested Selectors

**Selectors should not be nested more than three levels deep!**

```scss
.some-section {
	.content-container {
		a {
			// Thats enough :-)

			&::before {
				// Although this OK
			}
		}
	}
}
```

## Class Grouping (HTML)

Although not strictly a CSS concern, we thought itd be apt to highlight the grouping of classes in our HTML.

If using a common class that has modifiers, within the `class` attribute, wrap the classes using `[]` notation.

```html
<a href="#hello-world" class="[ button green stacked ] unrelated-class">Click Here</a>
```

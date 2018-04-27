# AO.com - SCSS Style Guide

> Our view on SCSS formatting.


## Syntax

Here at AO we utilise the `.scss` syntax to write SASS.


## Formatting

- Use tabs for indentation, do not use spaces.
- For selectors:
	- Use kebab-case.
	- BEM syntax is allowed.
	- Never use camelCase for class selectors.
	- Avoid using IDs as selectors.
- If possible, add classes to elements.
	- Try not to target specific elements e.g. `a`, `p`, `li` etc.
- Specifics:
	- Insert a space before the opening brace ` {` in rule declarations.
	- Closing braces `}` of rule declarations should be on a new line.
	- When declaring properties, put a space after but not before the `: ` character.
	- Insert blank lines between rule declarations.


### Classname Selectors

```scss
.class-selector {
	// properties
}

.parent-class__with-child-class--and-modifier {
	// properties
}
```


### ID Selectors

Although we discourage the use of IDs as selectors, if absolutely necessary they should be declared using the same pattern as classnames.

```scss
#id-selector {
	// properties
}
```


## Nested Selectors

**Selectors should not be nested more than three levels deep!**

```scss
.parent {
	.child {
		.gran-child {
			// thats enough ;)

			&::before {
				// pseudo elements don't count towards nesting depth
			}
		}
	}
}
```


## @Extends

Placeholders should be extended before any property declarations.

```scss
.class-selector {
	@extends %header-main;

	color: #444444;
}
```

## Property declaration order

Properties are ordered both by groups and in a certain order within each group.

See below for a comprehensive list. Any properties not listed should be declared at the bottom.

```scss
.class-selector {
	// pseudo specific
	content: '';

	// display
	display: block | flex | grid | inline | inline-block | inline-flex | inline-grid | table | table-cell;

	// flex parent
	flex-direction: column;
	flex-flow: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	align-content: center;

	// flex children
	order: 1;
	flex-grow: 1;
	flex-shrink: 0;
	flex-basis: auto;
	flex: 1 0 auto;
	align-self: center;

	// grid parent
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

	// grid children
	grid-column-start: 2;
	grid-column-end: five;
	grid-row-start: row1-start;
	grid-row-end: 3;
	grid-column: 3 / span 2;
	grid-row: third-line / 4;
	grid-area: 1 / col4-start / last-line / 6;
	justify-self: start;
	align-self: start;

	// positioning declarations
	position: absolute | fixed | relative | static | sticky;
	top: 50%;
	right: 50%;
	bottom: 50%;
	left: 50%;
	z-index: 10;

	transform: translate(-50%);
	vertical-align: middle;

	// floats
	float: left | right | none;
	clear: left | right | both | none;

	// box model declarations
	box-sizing: border-box;

	width: 600px;
	min-width: 50%;
	max-width: 100%;

	height: 300px;
	min-height: 50%;
	max-height: 100%;

	margin: 10px 15px 20px 25px; // top | right | bottom | left
	margin-top: 10px;
	margin-right: 15px;
	margin-bottom: 20px;
	margin-left: 25px;

	padding: 10px 15px 20px 25px; // top | right | bottom | left
	padding-top: 10px;
	padding-right: 15px;
	padding-bottom: 20px;
	padding-left: 25px;

	border: 1px solid #333333;
	border-top: 1px solid #333333;
	border-right: 1px solid #333333;
	border-bottom: 1px solid #333333;
	border-left: 1px solid #333333;

	// typographical
	direction: ltr;

	line-height: 1.5; // no units

	font: 16px/3 serif bold italic; // size/line-height | family | weight | style
	font-size: 1rem;
	font-family: sans-serif;
	font-weight: normal;
	font-style: italic;

	text-align: center;
	text-transform: lowercase;
	text-decoration: underline;

	word-wrap: break-word;

	// aesthetics
	background: #000000; // color | image | position | repeat | size
	background-color: #000000;
	background-image: url('../img/nicholas-cage.jpg');
	background-image: image-set(url('../img/nicholas-cage.jpg') 1x, url('../img/nicholas-cage_2x.jpg') 2x);
	background-position: top left;
	background-repeat: no-repeat;
	background-size: cover;

	color: #ffffff;

	border-radius: 5px 5px 5px 5px; // top right | bottom right | bottom left | top left
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-left-radius: 5px;

	box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.5);

	list-style: lower-roman outside url(../img/shape.png); // type | position | image
	list-style-type: lower-roman;
	list-style-position: outside;
	list-style-image: url(../img/shape.png);

	transition: color 1s ease-in-out;

	animation: 3s ease-in 1s 2 reverse both paused slidein;

	opacity: 0.5;
	visibility: visible;
	object-fit: cover;

	// other
	overflow: auto;
	overflow-x: auto;
	overflow-y: auto;

	cursor: pointer;
	pointer-events: none;

	// all undocumented properties live here
	&:hover {
		// properties
	}

	&:focus {
		// properties
	}

	&:active {
		// properties
	}

	&:visited {
		// properties
	}

	&:checked {
		// properties
	}

	&:first-child {
		// properties
	}

	&:first-of-type {
		// properties
	}

	&:last-child {
		// properties
	}

	&:last-of-type {
		// properties
	}

	&:nth-child(4n+1) {
		// properties
	}

	&:nth-of-type(4n+1) {
		// properties
	}

	&::before {
		// properties
	}

	&::after {
		// properties
	}
}
```

## Property rules

- Hex colours should be at least 6 digits long and use lowercase letters.
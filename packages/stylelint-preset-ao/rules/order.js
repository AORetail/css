module.exports = {
	'order/order': [
		{
			type: 'at-rule',
			name: 'extend'
		},
		'declarations',
		{
			type: 'at-rule',
			name: 'include',
			parameter: 'susy-breakpoint'
		},
		{
			type: 'at-rule',
			name: 'include',
			parameter: 'susy-media'
		},
		{
			type: 'at-rule',
			name: 'media'
		}
	],
	'order/properties-order': [
		[
			'display',
			{
				order: 'strict',
				properties: [
					'flex-direction',
					'flex-flow',
					'flex-wrap',
					'justify-content',
					'align-items',
					'align-content'
				]
			},
			{
				order: 'strict',
				properties: [
					'order',
					'flex-grow',
					'flex-shrink',
					'flex-basis',
					'flex',
					'align-self'
				]
			},
			{
				order: 'strict',
				properties: [
					'grid-template-columns',
					'grid-template-rows',
					'grid-template-areas',
					'grid-template',
					'grid-column-gap',
					'grid-row-gap',
					'grid-gap',
					'justify-items',
					'justify-content',
					'align-items',
					'align-content',
					'grid-auto-columns',
					'grid-auto-rows',
					'grid-auto-flow',
					'grid'
				]
			},
			{
				order: 'strict',
				properties: [
					'grid-column-start',
					'grid-column-end',
					'grid-row-start',
					'grid-row-end',
					'grid-column',
					'grid-row',
					'grid-area',
					'justify-self',
					'align-self'
				]
			},
			'content',
			{
				order: 'strict',
				properties: [
					'position',
					'top',
					'right',
					'bottom',
					'left',
					'z-index',
					'transform',
					'vertical-align'
				]
			},
			{
				order: 'strict',
				properties: [
					'float',
					'clear'
				]
			},
			{
				order: 'strict',
				properties: [
					'box-sizing',
					'width',
					'min-width',
					'max-width',
					'height',
					'min-height',
					'max-height',
					'margin',
					'margin-top',
					'margin-right',
					'margin-bottom',
					'margin-left',
					'padding',
					'padding-top',
					'padding-right',
					'padding-bottom',
					'padding-left',
					'border',
					'border-top',
					'border-right',
					'border-bottom',
					'border-left'
				]
			},
			{
				order: 'strict',
				properties: [
					'direction',
					'line-height',
					'font',
					'font-family',
					'font-weight',
					'font-style',
					'font-size',
					'text-align',
					'text-transform',
					'text-decoration',
					'word-wrap'
				]
			},
			{
				order: 'strict',
				properties: [
					'background',
					'background-color',
					'background-image',
					'background-position',
					'background-repeat',
					'background-size'
				]
			},
			'color',
			{
				order: 'strict',
				properties: [
					'border-radius',
					'border-top-right-radius',
					'border-bottom-right-radius',
					'border-bottom-left-radius',
					'border-top-right-radius'
				]
			},
			'box-shadow',
			{
				order: 'strict',
				properties: [
					'list-style',
					'list-style-type',
					'list-style-position',
					'list-style-image'
				]
			},
			'transition',
			'animation',
			'opacity',
			'visibility',
			'object-fit',
			{
				order: 'strict',
				properties: [
					'overflow',
					'overflow-x',
					'overflow-y'
				]
			},
			'cursor',
			'pointer-events'
		],
		{
			unspecified: 'bottom'
		}
	]
};

module.exports = {
	plugins: ['stylelint-order'],
	rules: Object.assign({}, ...[
		'./rules/order',
		'./rules/at-rule',
		'./rules/block',
		'./rules/color',
		'./rules/declaration',
		'./rules/font',
		'./rules/general',
		'./rules/selector'
	].map(require))
};

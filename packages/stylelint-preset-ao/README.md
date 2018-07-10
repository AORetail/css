# AO Stylelint Preset
> Stylelint preset representing the [AO.com SCSS Style Guide](https://github.com/AORetail/css/blob/master/style-guide/README.md)

## Install
### Preset
```sh
npm i stylelint-preset-ao -D
```

### Peer Dependencies
```sh
npm info "stylelint-preset-ao@latest" peerDependencies
```

## Usage
### Via `.stylelintrc` (Recommended)
**.stylelintrc**
```json
{
  "extends": "stylelint-preset-ao",
	"ignoreFiles": [
		"**/*.js",
		"**/*.jsx"
	]
}
```

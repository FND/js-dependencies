.PHONY: dist

export PATH := ./node_modules/.bin:$(PATH)

dist:
	mkdir -p dist
	`which browserify` -o dist/bundle.js main.js
	`which browserify` -t uglifyify -o dist/bundle.min.js main.js
	# compare:
	`which uglifyjs` < dist/bundle.js > dist/bundle.min_alt.js

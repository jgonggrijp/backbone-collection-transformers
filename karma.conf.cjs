// Karma configuration
// Generated on Wed Feb 14 2024 15:07:28 GMT+0100 (Midden-Europese standaardtijd)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
        frameworks: ['mocha', 'power-assert'],

        // list of files / patterns to load in the browser
        files: [
            'node_modules/underscore/underscore-umd-min.js',
            'node_modules/backbone/backbone-min.js',
            'index.test.js'
        ],

        // list of files / patterns to exclude
        exclude: [
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor
        preprocessors: {
            'index.test.js': ['rollup']
        },

        rollupPreprocessor: {
            external: [
                'backbone',
                'underscore'
            ],
            plugins: [
                require('rollup-plugin-glob-import')({
                    format: 'import',
                }),
                require('@rollup/plugin-json')(),
                require('@rollup/plugin-commonjs')(),
                require('rollup-plugin-node-polyfills')(),
                require('@rollup/plugin-node-resolve').default(),
                require('@rollup/plugin-babel').default({
                    presets: ['power-assert'],
                    babelHelpers: 'bundled',
                    include: 'src/*.js',
                }),
            ],
            output: {
                dir: 'build',
                name: 'test',
                format: 'iife',
                globals: {
                    underscore: '_',
                    backbone: 'Backbone',
                },
                sourcemap: 'inline',
            },
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
        reporters: ['progress'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
        browsers: [],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser instances should be started simultaneously
        concurrency: Infinity
    });
};

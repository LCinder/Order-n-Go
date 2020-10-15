
require('load-grunt-tasks')(grunt);

grunt.initConfig({
    ava: {
        test: ['tests/index.test.js'],
        nycTest: {
            options: {
                verbose: true,
                nyc: true
            },
            files: {
                src: ['tests/index.test.js']
            }
        }
    }
});

grunt.registerTask('default', ['ava']);

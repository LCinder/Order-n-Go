
require('load-grunt-tasks')(grunt);

grunt.initConfig({
    ava: {
        test: ['test/index.test.js'],
        nycTest: {
            options: {
                verbose: true,
                nyc: true
            },
            files: {
                src: ['test/index.test.js']
            }
        }
    }
});

grunt.registerTask('default', ['ava']);

const sass = require("node-sass");

module.exports = grunt => {

  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    clean: ["dist"],

    copy: {
      src_to_dist: {
        cwd: "src",
        expand: true,
        src: ["**/*", "!**/*.ts", "!**/*.js", "!**/*.scss", "!img/", "!img/**/*"],
        dest: "dist"
      },
      pluginDef: {
        expand: true,
        src: ["plugin.json", "*.md"],
        dest: "dist"
      },
      assets_to_dist: {
        expand: true,
        src: ["assets/**/*"],
        dest: "dist/"
      }
    },

    watch: {
      rebuild_all: {
        files: ["src/**/*", "plugin.json", "README.md", "CHANGELOG.md"],
        tasks: [
          "ts:default",
          "sass:build",
          "copy:src_to_dist",
          "copy:pluginDef",
          "copy:assets_to_dist"
        ],
        options: {
          spawn: false
        }
      }
    },

    sass: {
      build: {
        options: {
          debugInfo: true,
          check: true,
          implementation: sass,
          sourceMap: false
        },
        files: {
          "dist/css/default.dark.css": "src/scss/default.dark.scss",
          "dist/css/default.light.css": "src/scss/default.light.scss"
        }
      }
    },

    tslint: {
      options: {
        configuration: "tslint.json"
      },
      files: {
        src: ["src/**/*.ts"]
      }
    },

    ts: {
      default: {
        tsconfig: "./tsconfig.json"
      }
    },

    run: {
      options: {},
      tests: {
        exec: "npm run-script jest"
      }
    }
  });

  grunt.registerTask("test", ["run:tests", "tslint"]);

  grunt.registerTask("default", [
    "clean",
    "run:tests",
    "tslint",
    "ts:default",
    "sass:build",
    "copy:src_to_dist",
    "copy:pluginDef",
    "copy:assets_to_dist"
  ]);

};

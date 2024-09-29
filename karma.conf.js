module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    files: ["src/**/*.spec.ts"],
    reporters: ["progress", "kjhtml"],
    coverageReporter: {
      dir: "coverage",
      reporters: [
        { type: "html", subdir: "report-html" },
        { type: "text-summary", subdir: ".", file: "coverage-summary.txt" },
        { type: "text-summary" },
      ],
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["ChromeHeadless"],
    singleRun: true,
    concurrency: Infinity,
  });
};

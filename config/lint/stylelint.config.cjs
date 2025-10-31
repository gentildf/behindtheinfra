module.exports = {
  extends: ["stylelint-config-standard"],
  ignoreFiles: ["dist/**/*.css"],
  rules: {
    "color-function-notation": "modern",
    "alpha-value-notation": "number"
  }
};


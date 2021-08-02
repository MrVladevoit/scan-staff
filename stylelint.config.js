"use strict";

module.exports = {
  "plugins": [
    "stylelint-scss",
    "stylelint-order",
    "stylelint-no-unsupported-browser-features"
  ],
  "rules": {
    "indentation": 2,
    "no-empty-first-line": [true, {
      "severity": "warning"
    }],
    "no-missing-end-of-source-newline": true,
    "no-eol-whitespace": [true, {
      "ignore": ["empty-lines"]
    }],
    "no-extra-semicolons": true,
    "string-quotes": "double",
    "max-empty-lines": 2,
    "max-nesting-depth": [3, {
      "ignore": [
        "pseudo-classes",
        "blockless-at-rules"
      ]
    }],
    "max-line-length": [120, {
      "severity": "warning"
    }],

    "property-no-unknown": true,
    "property-case": "lower",

    "value-keyword-case": "lower",
    "shorthand-property-no-redundant-values": true,

    "value-list-comma-space-after": "always-single-line",

    "declaration-colon-space-before": "never",
    "declaration-colon-space-after": "always-single-line",

    "declaration-block-no-duplicate-properties": [true, {
      "ignore": ["consecutive-duplicates-with-different-values"]
    }],
    "declaration-block-trailing-semicolon": "always",
    "declaration-block-single-line-max-declarations": 1,
    "declaration-block-semicolon-newline-after": "always-multi-line",

    "block-no-empty": true,
    "block-closing-brace-newline-after": "always",
    "block-opening-brace-space-before": "always",
    "block-opening-brace-space-after": "always-single-line",

    "selector-type-case": "lower",
    "selector-combinator-space-before": "always",
    "selector-combinator-space-after": "always",
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-element-no-unknown": [true, {
      "ignorePseudoElements": ["ng-deep"]
    }],
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
    "selector-attribute-quotes": "always",
    "selector-max-id": 0,
    "selector-max-universal": 1,

    "selector-list-comma-space-before": "never",
    "selector-list-comma-newline-after": "always",

    "rule-empty-line-before": ["always", {
      "ignore" : ["after-comment"]
    }],

    "color-named": ["never", {
      "ignore": ["inside-function"]
    }],
    "color-hex-case": "lower",
    "color-hex-length": "long",

    "function-name-case": "lower",
    "function-url-quotes": "always",
    "function-calc-no-unspaced-operator": true,
    "function-comma-space-after": "always",
    "function-whitespace-after": "always",
    "function-linear-gradient-no-nonstandard-direction": true,

    "number-leading-zero": "never",
    "number-no-trailing-zeros": true,

    "length-zero-no-unit": true,

    "unit-no-unknown": true,
    "unit-case": "lower",

    "at-rule-name-case": "lower",
    "at-rule-name-space-after": "always-single-line",
    "at-rule-semicolon-newline-after": "always",

    "media-feature-name-case": "lower",
    "media-feature-colon-space-before": "never",
    "media-feature-colon-space-after": "always",

    "comment-whitespace-inside": "always",

    "order/properties-order": [
      require("./config/properties_order"),
      {
        "unspecified": "bottom"
      }
    ],
    "plugin/no-unsupported-browser-features": [true, {
      "severity": "warning",
    }]
  }
};

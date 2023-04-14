const allureWriter = require("@shelex/cypress-allure-plugin/writer");
// <reference types="@shelex/cypress-allure-plugin" />

module.exports = (on, config) => {
    allureWriter(on, config);
    return config;
};

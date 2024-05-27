// Use module.exports instead of export default
module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: "eslint:recommended",
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
    },
    rules: {
        "no-unused-vars": "warn",
        "no-console": "off",
    },
};

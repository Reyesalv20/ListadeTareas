export default {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
    ],
    parserOptions: {
        ecmaVersion: 12, // Adjust according to your ES version
        sourceType: 'module',
    },
    rules: {
        // Define your project's ESLint rules here
    },
};

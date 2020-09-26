module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
    },
    env: {
        browser: true,
    },
    // extends: '@react-native-community',
    plugins: ['react', 'prettier'],
    extends: ['prettier', 'react-app'],
}

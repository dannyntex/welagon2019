const config = {
    // Ignore everything with underscores except stories
    ignore: [/\/__(tests?|mocks|fixtures|helpers)__\//],
    plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: false }],
        ['@babel/plugin-syntax-jsx'],
        ['@babel/plugin-transform-react-jsx'],
        ['@babel/plugin-syntax-dynamic-import']
    ],
    presets: [['@babel/preset-env', { targets: 'node 10' }]]
};

module.exports = config;

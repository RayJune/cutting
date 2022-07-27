module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: true,
                },
            },
        ],
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        ['module-resolver', {
            "root": ["./src"],
            "alias": {
                "utils": "./src/utils"
            }
        }]
    ]
};
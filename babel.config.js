module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: true,
                }
            }
        ]
    ],
    plugins: [
        ['module-resolver', {
            "root": ["./src"],
            "alias": {
                "utils": "./src/utils"
            }
        }]
    ]
};
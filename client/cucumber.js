require("@babel/register")({
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    ignore: [
        'node_modules/(?!@table-library|dnd-core|react-dnd|@react-dnd|react-dnd-html5-backend)'
    ]
})

module.exports = {
    default: {
        failFast: process.env.NODE_ENV === 'development',
        requireModule: [
            'jsdom-global/register',
            '@babel/register',
        ],
        // Tried importing it as ESM directly using ts-node loader, doesn't work either
        // import: [
        //     './cucumber/worlds/**/*.{ts,tsx}',
        //     './cucumber/step_definitions/**/*.{ts,tsx}',
        // ],
        require: [
            './cucumber/worlds/**/*.{ts,tsx}',
            './cucumber/step_definitions/**/*.{ts,tsx}',
        ],
        publish: false,
        publishQuiet: true,
    }
}
require("@babel/register")({
    extensions: [".ts", ".tsx", ".js", ".jsx"],
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
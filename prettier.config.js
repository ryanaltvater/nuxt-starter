module.exports = {
    // Supports auto-loading for other package managers (PNPM, Yarn PNP)
    plugins: [require('prettier-plugin-tailwindcss')],

    // Sorts additional HTML attributes
    // tailwindAttributes: ['myClassList'],

    // Sorts template literals
    // tailwindFunctions: ['tw'],

    // Defines custom "tailwind.config.js" file path
    // tailwindConfig: ['tailwind.config.js'],

    // Options
    arrowParens               : 'always',      // Default: 'always' (always|avoid)
    bracketSameLine           : false,         // Default: false (bool)
    bracketSpacing            : true,          // Default: true (bool)
    embeddedLanguageFormatting: 'auto',        // Default: 'auto' (off|auto)
    endOfLine                 : 'lf',          // Default: 'lf' (lf|crlf|cr|auto)
    filePath                  : '',            // Default: '' (string)
    htmlWhitespaceSensitivity : 'css',         // Default: 'css' (css|strict|ignore)
    insertPragma              : false,         // Default: false (int)
    jsxSingleQuote            : false,         // Default: false (bool)
    quoteProps                : 'as-needed',   // Default: 'as-needed' (as-needed|consistent|preserve)
    overrides                 : [{
        files  : '**/*.vue',
        options: {
            printWidth: Infinity  // Default: 80 (int)
        }
    }],
    parser                 : 'babel',      // Default: None (string)
    printWidth             : 120,           // Default: 80 (int)
    proseWrap              : 'preserve',   // Default: 'preserve' (always|never|preserve)
    rangeEnd               : Infinity,     // Default: Infinity (int)
    rangeStart             : 0,            // Default: 0 (int)
    requirePragma          : false,        // Default: false (bool)
    semi                   : true,         // Default: true (bool)
    singleAttributePerLine : false,        // Default: false (bool)
    singleQuote            : true,         // Default: false (bool)
    tabWidth               : 4,            // Default: 2 (int)
    trailingComma          : 'es5',        // Default: 'es5' (es5|none|all)
    useTabs                : false,        // Default: false (bool)
    vueIndentScriptAndStyle: false,        // Default: false (bool)
}

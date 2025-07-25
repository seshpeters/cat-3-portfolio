const fs = require('fs');
const path = require('path');

/**
 * This script applies a CSS stylesheet to all HTML files in the current directory.
 * It assumes you have a "style.css" file in the same directory.
 */


const directory = __dirname;
const cssLink = '<link rel="stylesheet" href="style.css">';

fs.readdirSync(directory).forEach(file => {
    if (file.endsWith('.html')) {
        const filePath = path.join(directory, file);
        let content = fs.readFileSync(filePath, 'utf8');
        if (!content.includes(cssLink)) {
            // Insert the CSS link before </head>
            content = content.replace(/<\/head>/i, `${cssLink}\n</head>`);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Styled: ${file}`);
        }
    }
});
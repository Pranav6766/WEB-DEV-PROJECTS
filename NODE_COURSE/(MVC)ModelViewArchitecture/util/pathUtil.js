const path = require('path');

module.exports = path.dirname(require.main.filename);

//require.main.filename → This gives you the absolute path of the main file that started your Node app. "/Users/you/your-project/app.js"

//path.dirname → This extracts the directory from the full path."/Users/you/your-project"

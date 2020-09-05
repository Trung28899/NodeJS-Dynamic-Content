/*
    This whole code will return the root directory of this 
    whole application so it will return 

    /NodeJS-ExpressJS/ in this case  


*/

const path = require("path");
module.exports = path.dirname(process.mainModule.filename);

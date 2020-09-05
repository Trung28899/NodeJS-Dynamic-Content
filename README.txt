I. Tools Used: 

    - $ npm install 
    - $ npm install --save express
    - $ npm install --save body-parser
    - $ npm install --save ejs pug express-handlebars

II. Core Concepts: 
    1. Templating Engines: 
        - Look for "Templating Engines 
        and Different Templating Engines"
        in this document: 

        https://docs.google.com/document/d/1fW7WSCaD98QZvdSwpHJEw5zn_TnahGeR5L_FRu__XnM/edit

III. Module Notes: 
    1. Sharing Data Across Requests and Users: 
        - 1st Commit
        - This will allow you to share data 
        across Requests and Users, most of the
        time, you don't want to share data 
        for all like this.

        - See routes/admin.j s for how to set up
        and export
        - See routes/shop.js for how to import 
        and use it 

        pub > type html, go to html:5 to have the template

    2. Installing and Setting up PUG: 
        - 3rd Commit
        - See in app.js for how to set up
        pub engines and view file
        - See in shop.js for how to render 
        and return pub template
        - See in views/shop.pug for templating 
        and syntax.

        NOTE THAT: to get a template in .pub file, 
        > type html, go to html:5 to have the template

IV. Other Notes: 
    What's in this module:
        - Managin Data (without Database)
        - Render Dynamic Content in our Views
        - Understanding Templating Engines
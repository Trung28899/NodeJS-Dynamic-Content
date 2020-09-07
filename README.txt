I. Tools Used: 

    - $ npm install 
    - $ npm install --save express
    - $ npm install --save body-parser
    - $ npm install --save ejs pug express-handlebars
    - $ npm install --save express-handlebars@3.0

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

    2. Installing and Implementing PUG: 
        a. Setting up PUG: 
            - 3rd Commit
            - See in app.js for how to set up
            pub engines and view file
            - See in shop.js for how to render 
            and return pub template
            - See in views/shop.pug for templating 
            and syntax.

            NOTE THAT: to get a template in .pub file, 
            > type html, go to html:5 to have the template
        
        b. Dynamic Content with PUG: 
            - 4th Commit
            - See shop.js for how to pass data into .pug file
            - See views/shop.pug to see how to template 
            Dynamic Content

        c. Layouts: 
            - 4th Commit
            - ./layouts/main-layout.pug for implementing a 
            layout. Notice: 
                +, "block style" and "block content"
                +, a tags with path variable
                => These 2 are determined by different pages
            - See .pug files in ./views for how to import the layout
                Notice: 
                +, "block style" and "block content"
                +, extends

            Official Pug Docs: 
            https://pugjs.org/api/getting-started.html
    
    3. Working with Handlebars: 
        a. Setting up Hanlde Bars:
            (Works similiar to JSX in React) 
            - Commit 5th
            - Setting up in app.js
            - Code in ./views/404.handlebars
            
            NOTE THAT: the way of passing data 
            is exactly the same across templates
            See app.js > 404 page render
                routes/admin.js > add-product page render
                routes/shop.js > shop page render
        
        b. Implementing Handlebars: 
            - 6th Commit

            - app.js for setting up, read the comments to 
            understand details of layout file and setting up
            configurations
            - ./views/layout/main-layout.handlebars: for layout

            NOTE: {{{ body }}}, other .handlebars file will be 
            fit in this body

            - Other .handlebars files in ./views

            NOTE: 
                Conditional: {{#if hasProducts }}
                Iteration: {{#each prods}} 
    
    4. Working with EJS (preferred) 
        - 7th Commit
        - Setting up: app.js
        - Template in ./views

        Nothing change in JS codes except for setting up
        in app.js

IV. Other Notes: 
    What's in this module:
        - Managin Data (without Database)
        - Render Dynamic Content in our Views
        - Understanding Templating Engines
Requirements:
Task E1: Replicate Figma Design

Your goal is to bring the Figma design to life using HTML, CSS, and JavaScript. You have the freedom to use libraries like Bootstrap for CSS and jQuery for animations if you find them useful. Remember, attention to detail is key. Your final product should closely resemble the Figma design, and your implementation should be responsive and functional on both desktop and mobile devices.

Desktop Design:

    Use the provided Figma design link for the desktop version to create the layout and visual elements.

    Implement interactions and animations as shown in the Figma prototype.

    Ensure responsiveness and compatibility with different screen sizes.

Mobile Design:

    Utilize the provided Figma design link for the mobile version to replicate the layout and design elements.

    Implement the animations demonstrated in the Figma prototype for the mobile version.

    Ensure a seamless experience across various mobile devices.

Additional Guidelines:

    While the Figma prototype demonstrates animations, feel free to explore other animation libraries if you think they can enhance the user experience.

    Aim for clean, maintainable, and well-structured code. Comment your code where necessary.

    Test your implementation on different browsers and devices to ensure cross-browser compatibility.

    Submit your work through the designated channels once you're satisfied with your implementation.

Important all animations should be as much as possible to looks like Figma 


Task E2: Dynamic Product System

Part 1: Backend Development

    Set up a MySQL database to store product information. Create a table with fields such as product ID, name, description, price, and image URL.

    Develop a PHP backend to handle CRUD (Create, Read, Update, Delete) operations for products. Use appropriate database queries to interact with the MySQL database.

    Implement a form for adding new products. Validate user input and sanitize data before inserting it into the database.

    Create scripts to fetch product data from the database and send it to the frontend in JSON format.

Part 2: Frontend Integration

    Modify the provided Figma design to include a section for displaying products. This section should visually match the design while leaving space for dynamically loaded product data.

    Integrate JavaScript with the frontend to make AJAX requests to the PHP backend for retrieving product data. Use the fetched JSON data to dynamically populate the product section.

    Implement a grid or list layout for displaying the products along with their names, descriptions, prices, and images.

    Enhance the user experience by adding animations or transitions when new products are loaded.

Part 3: Interactivity and Details

    Add a "View Details" option for each product, allowing users to see more information about a specific product in a modal or a separate page.

    Implement an "Add to Cart" functionality using PHP sessions to store selected products. Show a notification when a product is added to the cart.

    Create a shopping cart icon that displays the number of items in the cart. Users should be able to view the cart contents and proceed to checkout.

Part 4: Backend Security and Validation

    Implement proper security measures to prevent SQL injection and other vulnerabilities. Use prepared statements for database queries.

    Validate user input on the backend and frontend to ensure data integrity and prevent malicious input.

    Secure the backend routes using authentication to prevent unauthorized access to CRUD operations.


Bonus 1: Slider Management

    Integrate a slider management section in the admin panel.

    Allow admins to add, edit, and delete slides for the homepage slider.

    Use PHP and MySQL to store and retrieve slider data.

Bonus 2: Bonus Points - Additional Features	

    Allow administrators to upload product images and slider images directly from the admin panel.

    Implement rich text editing for product descriptions using a WYSIWYG editor.

    Provide an option to reorder slider slides using drag-and-drop functionality.

Bonus 3: Roles

    Create module for roles

        Create - Admin, Manager, User roles

        Admin has access to all admin pages

        Manager has access to product pages (Create, Read, Update, Delete) 

        User has access only to frontend part of the website.
        

Adding an admin panel to manage the content and settings of the website is a great way to enhance functionality and earn those bonus points. Here's how you can integrate an admin panel using AdminLTE and allow administrators to manage the content, including sliders.

You are free to make this how the admin panel looks like.

Feel free to use the AdminLTE admin template for the admin panel.
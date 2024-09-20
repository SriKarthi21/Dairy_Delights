## Capstone Project - Dairy Delights

#### Context

Organic milk and dairy products are gaining immense popularity due to growing health concerns and a rising preference for natural and healthy food options.​

People are increasingly looking for convenient ways to purchase these products.​

Dairy Delights is an online platform that caters to this growing demand by offering a wide variety of organic milk and dairy products directly to customers.​

Customers can browse the selection and place orders conveniently through the Dairy Delight platform.​

This project will allow you to apply the React skills you've learned to build a functional and user-friendly e-commerce platform.​

#### Problem Statement

- Develop a single page application using React – Dairy Delights, that allows customers to make an online request for milk products like fresh milk, curd, yogurts and cheese of their choice. ​

- The dairy products are displayed with attractive images and crisp details, allowing the users to select the item of their choice and provide the order details. ​

- The app can search and filter the items by the user’s preference for a quick selection. ​

- The site administrator can view the incoming order requests.​
  - The app should redirect user to first validate his identity as site administrator before providing access to the order request view.

#### Tasks

##### Task 1 – Design Landing View

- The landing view of the app must display the images of milk products like fresh milk, yogurts, cheese and curds.
  - The data must be fetched using json-server.
  - This view must be the default view.
- These items should be selectable by the user.
  - Upon selection, the user should be navigated to the order view.
- The landing view must also allow users to search / filter these items by their preference.
  - Search allows user to search by item name.
  - Filtering allows user to filter items by category.

##### Task 2 – Design Order View

- The user will be navigated to the order view once he selects the item on the landing view.
- The view should display the details of the item selected.
- This view should also allow user to provide the details required for placing order for the selected item.
  - The details should include the item details as well as the customer details.
- The details should be persisted, and the customer should be acknowledged after the order is successfully placed.​


##### Task 3 – Design Login View

- The user should be navigated to the login view if he attempts navigation to the order-requests view.
- The view should request the user to enter the security code to login as Administrator.
- Upon successful validation, the user should be navigated to the order-requests view.

##### Task 4 – Design Order-Requests View

- This view will display all the dairy products order requests received in tabular format.
- This view has restricted access and is accessible only to the site administrator.

#### Instructions for the Project

- Fork the boilerplate into your own workspace.​​​​​​
- Clone the forked boilerplate into your local system.
- The boilerplate contains data and images of various dairy products.
- Copy the images in the solution code and use them in the project.
- Create React application and develop the solution for the requirements specified.
- ​Test the outcome and ensure it fulfills the stated requirements.​​

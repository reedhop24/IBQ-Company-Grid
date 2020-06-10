# Available Companies by State

##### This grid exists in our UI to help users view products that are available by state and company. I had built the functionality on our platform in jQuery, so I wanted to rebuild the platform in React. Therefore, this project is built using React, React-Bootstrap, Axios, CSS, Node, Express, and MongoDB. Below is a screenshot of the functionality within the grid.


![image](https://user-images.githubusercontent.com/40578449/84315859-156ca900-ab1f-11ea-997d-e6e3ade8265b.png)


##### Essentially users are able to make a selection of which state they want to view, then I am pinging my server to return the products array for that given State. The products array is an array of objects, each object holds the name of the company, the extension for the image to be displayed, and the available products for that company. I am then just looking through the enire products array then doing an inner loop to pull out the product for each company. 

##### Note: this is not encompassing of all IBQ's products, states, and companies. I did an abbreviated version just to mock the functionality and styling. 


# Technical Test for Victoria Plumbing

I have used the API to display the products, pulling relevant data from each product object to create the card; and using stockStatus: 'G' to mean in stock, and any other stockStatus to mean out of stock. 

I also used the facets object from the API response to create categories for the sidebar on the left. This reduced the code needed to create the sidebar, and since we already have to fetch from the api to display the products, the trade off in performance time is not too significant.

I've used tailwind CSS to easily create a responsive design by mapping over reused components. 

I used Redux Toolkit for state management in regards to the api request, as I needed to be able to alter the payload for the request using variables from different components, such as from the Recommended Dropdown and the Load More Button.  

By experimenting with the API I determined a sort value of 1 returns the products in order of Recommended, 2 returns them by lowest price, 3 by highest price, and 4 by the highest discount. I used these values to alter the API payload using the Recommended Dropdown. 

Given more time, I would have used Redux to create the logic to automatically add objects within the facets key value pair of the payload when checkboxes are ticked, and remove them when they're unticked, in order to enable the use of the sidebar. 

This struck me as a better approach as opposed to using array methods, such as filter and sort, as it enables access to the whole data set when filtering. 


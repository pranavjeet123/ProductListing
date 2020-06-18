# ProductListing
This is an ecommerce app developed in vanilla JS 


The App is development Keeping Mobile first Approach.

===================== 

Demo:

https://pranavjeet123.github.io/ProductListing/

===================

This app utilise Localstorage for maintaing state of product.
**Kindly do a refresh if add to cart is not happening instantly.

==============================

Search Functionality 

   * The search look and feel is replicated like material UI .
   *  TypeAhead or Autosuggest search like feature is not there and can be added in further release.
   
   * Please type in lowercase or Uppercase or mix of both for exact spelling for product Search.
   
   
   //More Modular approach is implemented for various Functionality seperated and performing indivisual task
   
   ------Modal Pop up------------- - Taking both situation for sorting as well as Filteration.
   
   ----- Content Generator ------     Generating MArkup based on condition and input
   
   Some Points to keep in mind.
   
   If you have added a product in cart the default value is 1 , if we decrement the value , it make the value to 0.
   As a developer I made an assumption , user is not interested in product and hence will be removed from Dom and manipulate the Cost summary.
   
   
   =======================Cost Summary ==============================
   
   Cost Summary is not memory located in browser. 
   
   It is only for display purpose.
   
   Setting the Final cost to localstorage could be released in Version 2.0 where Angreed button can be checked and hence 
   User can move for payment.
   
   
   
   ======================Enjoyed Coding :)=======================
   

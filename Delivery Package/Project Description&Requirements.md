# General Description
Our physical and mental well-being is closely related to what we eat and drink. The nutrients of the food affect organs, hair, skin, hormones, cells, blood, bone density of the human body. Human body renews billions of cells everyday by using the nutrients in the food. 

This project focuses on providing a system which serve as a nutritional assistant for its users. In this crowdsourcing application, the food providers will be able to enter helpful information about the food such as recipes or menus, whereas the users of the system will be able keep track of the nutrients they get. 

This API will allow users to follow the types of nutrients they get, so that it will help them to create a healthy eating plan. While the users can record their diet routine, they will be able to communicate with other users of the system. Therefore, it will be a healthy eating community!

## How it works?
This application records the nutrients of food, which are substances needed for growth, metabolism, and for other body functions. There are many open data resources that provide such information about raw as well as packaged food, and they will be used to gather these data.

Users and food providers will be able to specify recipes, and the nutritional value of these recipes should be computed based on the ingredients.

Users will have their private space where they can save items of interest. Items can be ingredients, ready food, and recipes.

Users should be able to specify their food preferences, such as allergies, dietary restrictions, likes and dislikes. For example, a user may be gluten intolerant vegetarian or someone who has a massive sweet tooth. Warnings should be provided when in query results for users who have restrictions to assist them.

Users should be able to track their nutritional intake by providing a list of what they have eaten. Users should also be provided with recommendations based on their preferences and restrictions. Users should be able to browse, search, advanced search ingredients and recipes.

Users of this system should be able to provide food centric responses to content. They should be able to follow other users (consumers or providers). Users will be able to communicate about food. The system should recommend ingredients, recipes, and locations to eat to users based on their food preferences and food social network.

Food providers will be able to publish daily and monthly menus linked to the nutritional information. The system will provide them with reports that provide user feedback associated with the food they provide.

# Project Requirements

## 1. Overall Description
This application will be a nutritional assistant for its users. Users will be able to keep track of their nutritional diet routine. On the other hand, they will communicate with other users of the system. In the end, it will be a healthy eating community!

### 1.1. Product Specifications
* Registration/Login
* Profile Management
* Recipes and Food Menus 
* Calculation of Nutritional Value
* Creating Private Space
* Searching Food
* Recommendation/Warning 
* Communication with Other Users
* Notification/Subscription

### 1.2. Target Audience

* **User** The registered user who keeps track of his/her nutritional diet routine. 
* **Guest User** The user who is not registered to the system.
* **Food Provider** The restaurant or a cafe with its recipes and menus.

## 2. Functional Requirements

### 2.1. Registration/Login
**2.1.1.** The user shall be able to register by providing a valid email address, username, and a password.

**2.1.2.** The system shall send a confirmation link to the newly registered users. 

**2.1.3.** The user shall be able to reset his/her password.

**2.1.4.** The user shall be able to login to the system entering the username or email address and a password.


### 2.2. Profile Management 

**2.2.1.** The user shall be able to set the privacy of profile information as private or public. The default mode shall be private.

**2.2.2.** The user shall be able to enter gender, date of birth in his/her profile.

**2.2.3.** The user shall be able to specify food preferences.

**2.2.4.** The user shall be able to specify food restrictions.

**2.2.5.** The user shall be able to upload a profile photo. 

**2.2.6.** The user shall be able to edit profile information.

**2.2.7.** The user shall be able to change the profile photo.

**2.2.8.** The user shall be able to change the password.

**2.2.9.** The user shall be able to see the number of followers.

**2.2.10.** The user shall be able to see the names of followers.

**2.2.11.** The user shall be able to create his/her own personal space so that s/he can save items of personal interest such as ingredients, ready food, and recipes.

### 2.3. User
**2.3.1.** The user shall be able to follow other users in the system. 

**2.3.2.** The user shall be able to unfollow other users in the system.

**2.3.3.** The user shall be able to ban other users.

**2.3.4.** The user shall be able to subscribe to food providers.

**2.3.5.** The user shall be able to specify the geolocation of his/her own location.

**2.3.6.** The user shall be able to provide a list of what s/he has eaten so that s/he shall be able to track the nutritional intake.

**2.3.7.** The user shall be able to upvote the contents that are uploaded. 

**2.3.8.** The user shall be able to provide food-centric responses to contents that are uploaded. 

**2.3.9.** The system shall notify the user if another user follows him/her.

**2.3.10.** The system shall notify the user if another user upvotes his/her contribution.

**2.3.11.** The system shall notify the user if another user adds a comment to his/her contribution.


### 2.4. Food Provider

**2.4.1.** The user shall be able to create one or more food provider profiles.

**2.4.2.** The food provider shall be able to enter the name of a restaurant (username), address information, and a phone number.

**2.4.3.** The food provider shall be able to add a map (Google Map) that shows the location of a restaurant or a cafe.

**2.4.4.** The food provider shall be able to enter the work hours of a restaurant.


### 2.5. Recipes 

**2.5.1.** The user shall be able to create recipes by entering a name, ingredients, cooking directions, and a tag.

**2.5.2.** The food provider shall be able to create recipes by entering a name, ingredients, cooking directions, and a tag.

**2.5.3.** The user shall be able to edit a recipe.

**2.5.4.** The food provider shall be able to edit a recipe.

**2.5.5.** The user shall not be able to delete recipes.

**2.5.6.** The food provider shall not be able to delete recipes.

**2.5.7.** The user shall be able to tag his/her own recipes.

**2.5.8.** The food provider shall be able to tag own recipes.

**2.5.9.** The user shall be able to provide information about ingredient substitutions, such as items in foreign countries, sweetener replacement.

### 2.6. Food Menu

**2.6.1.** The user shall be able to create a food menu by entering a name, description, and tag.

**2.6.2.** The food provider shall be able to create a food menu by entering a name, description, and tag.

**2.6.3.** The food provider shall be able to add a menu to the calendar.

**2.6.4.** The user shall be able to edit a food menu.

**2.6.5.** The food provider shall be able to edit a food menu.

**2.6.6.** The user shall not be able to delete a food menu.

**2.6.7.** The food provider shall not be able to delete a food menu.

**2.6.8.** The user shall be able to tag his/her own food menu.

**2.6.9.** The food provider shall be able to tag own food menu.


### 2.7. Calculation of Nutrition

**2.7.1.** The system shall calculate the nutritional values by collecting data regarding nutritional information about food items from open data resources.

**2.7.2.** The user shall be able to see the total calculation of the nutritional values of a recipe.

**2.7.3.** The user shall be able to see the total calculation of the nutritional values of a food menu.

**2.7.4.** The food provider shall be able to see the total calculation of the nutritional values of a recipe.

**2.7.5.** The food provider shall be able to see the total calculation of the nutritional values of a food menu.


### 2.8. Search
 
**2.8.1.** The user shall be able to browse, search, advanced search ingredients, recipes, and food menus by entering an ingredient, location, tag, name of a recipe or food menu.

**2.8.2.** The user shall be able to search according to food restrictions, and preferences.

**2.8.3.** The guest user shall be able to browse, search, advanced search ingredients, and recipes along with the location.

**2.8.4.** The user shall be able to search for other users or food providers by entering a name.


### 2.9. Recommendation/Warning 

**2.9.1.** Warnings shall be provided when in query results for users who have restrictions to assist them.

**2.9.2.** The system shall provide food/food place recommendations to users based on their preferences, restrictions, and food social network.

### 2.10. Account Settings

**2.10.1.** The user shall be able to delete his/her account. 

**2.10.2.** The system shall remove all profile information about deleted accounts.

**2.10.3.** The system shall keep all recipes, food menus, comments for the deleted accounts.

**2.10.4.** The system shall hide the name of contributors for deleted accounts. If the user rejoins his/her name shall be shown again.


## 3. Non-Functional Requirements

### 3.1. Safety Requirements
**3.1.1.** User data shall be protected by the Personal Data Protection Authority (law number: 6698) in Turkey. 

**3.1.2.** User data shall not be shared with third parties.

### 3.2. Security Requirements
**3.2.1.** All types of user data shall be encrypted. 



## 4. Glossary
* **User:** Individual user or food provider who is registered to the system.
* **Comment:** Opinion or reaction to the content that is shared by users.
* **Follow:** Action that enables the posts of other users to appear in the personal feed.
* **Public Profile:** Profile which is visible to all registered users and guest users. 
* **Private Profile:** Profile which is visible to only the user’s followers.
* **Register:** The process in which the user enters an email address, user name, and password to create an account.
* **Login:** The process in which the user enters an email address or user name, and a password to reach the account which is created beforehand.
* **Open Street Map:** Free, editable map of the whole world that is built by volunteers and released with an open content license.
* **Food Restrictions:** Information which restricts the user for specific foods such as allergies, dietary restrictions, likes, and dislikes.
* **Open Data Resources:** Data resources that are open for everyone for access, modification, reuse, and sharing of the data.
* **Feedback:** Information about reactions to users such as the number of active followers.
* **Activity Stream:** Component that shows activities of users that are followed.


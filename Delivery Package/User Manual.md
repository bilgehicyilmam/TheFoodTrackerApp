# User Manual

## 1. General Description
Our physical and mental well-being is closely related to what we eat and drink. The nutrients of the food affect organs, hair, skin, hormones, cells, blood, bone density of the human body. Human body renews billions of cells everyday by using the nutrients in the food.

This project focuses on providing a system which serve as a nutritional assistant for its users. In this crowdsourcing application, the food providers will be able to enter helpful information about the food such as recipes or menus, whereas the users of the system will be able keep track of the nutrients they get.

This API will allow users to follow the types of nutrients they get, so that it will help them to create a healthy eating plan. While the users can record their diet routine, they will be able to communicate with other users of the system. Therefore, it will be a healthy eating community!

## 2. System Features

### 2.1. Search a Recipe

Guest user and the registered user both are able to see and search all the recipes which exist in the system. The recipe page appears as below.

![guest user page](https://user-images.githubusercontent.com/61224886/85377739-30d5ac00-b542-11ea-8f6f-01f1f2e44ca9.jpeg)

### 2.2 Sign Up As a User/Food Provider

If the user registers to the system, automatically login to the system, and navigates to the recipes page. The user registers as an individual user by default. If the user chooses "__This is a restaurant account__" by clicking on it, then the system saves as a food provider account.

1. Open a web browser, enter a web address, and press enter. The recipes page will display. Click on `Sign up`. After clicking, 'Register' page will display as below.
2. Type username, email address, password, phone number, website, address. Choose food preferences, and specify food restrictions. Upload a profile picture. When registering, email, and password are compulsory, remaining fields are optional.
3. Click `Submit`.

![register](https://user-images.githubusercontent.com/61224886/85326010-334dec80-b4d5-11ea-92c6-dd92b85dc2bc.png)

**2.2.1.** **Successful Sign Up**

The user successfully navigates to the recipes page.

### 2.3. Login

By logging in to the system, the user will be allowed to view food providers and add recipes into the system. Guest user can view all recipes which exist in the database without logging in to the system.

1. Open a web browser, enter a web address, and press enter. The recipes page will display. Click on `Login`. After clicking, 'Login' page will display as below.
2. Type an email address and a password.
3. Click `Submit`.

![login](https://user-images.githubusercontent.com/61224886/85332660-04d60e80-b4e1-11ea-910f-a4e2433f4166.jpeg)

**2.3.1.** **Successful Login**

The recipes page is displayed.

### 2.4. Add Recipe

The registered user should be able to login to the system to add a recipe. After logging in to the system, s/he directly navigates to the recipes page as below.
 
1. Click on `Add Recipe` button to add a recipe to the system.

![add recipe](https://user-images.githubusercontent.com/61224886/85378068-bc4f3d00-b542-11ea-9247-2e847e614d9b.jpeg)

After clicking on the add recipe button, create the recipe page opens as below. To add a recipe,

1. Type name of a recipe.
2. Type description of a recipe.
3. Type prep time, cook time.
4. Type **portion** **size**. It is compulsory to enter portion size even it is for 1 person to be able to calculate the nutritional values of the recipe.
5. Search and enter ingredients, and determine the amounts.
6. Type directions of an ingredient.
7. Upload a recipe picture.
8. Click `Submit`.

![create recipe](https://user-images.githubusercontent.com/61224886/85377939-83af6380-b542-11ea-8802-b8d834c4f98e.jpeg)

After adding a recipe, the recipe can be seen on the recipes page as below. 

![add recipe](https://user-images.githubusercontent.com/61224886/85377858-5ebaf080-b542-11ea-9597-2977ddc16b26.jpeg)

If the user (guest or registered user) clicks on the recipe, the details of the recipe can be seen as below. The name, description, prep time, cook time, serving size, ingredients, directions, and tags such as vegan, vegetarian etc.

![recipe](https://user-images.githubusercontent.com/61224886/85378173-ddb02900-b542-11ea-8b0a-ffb35e3ff002.jpeg)

### 2.5. Provider Filter

The registered user is able to search for a food provider according to name, address, or food preferences such as vegan, vegetarian, gluten-free, or sugar-free. These searches can be done separately. 

1. The user should navigate to the provider page as below with the navigation symbols at the left part of the page.
2. The user is able to filter food providers according to the foods they serve from the Status field. The user can filter vegan, vegetarian, gluten-free, sugar-free.
3. The user can search restaurants according to its name.
4. The user can search for food providers according to their address.

![provider](https://user-images.githubusercontent.com/61224886/85367638-51960580-b532-11ea-8c04-fe4db2d06637.jpeg)

**2.5.1.** **Successful Search**

The user can see the restaurants' name, address, phone number, website, and a photo together. On the other hand, The system shows the distance of the restaurants so that the user can see how far away the restaurant is from herself/himself.

### 2.6. User Profile

The registered user can see the profile page of himself/herself. In the profile page, profile picture and the recipes which are upload by the user can be seen. 

![user profile](https://user-images.githubusercontent.com/61224886/85368141-57d8b180-b533-11ea-93d1-4735a6a1c927.jpeg)

### 2.7. Edit Profile

If the user clicks on the `Edit Profile` which exists on the user profile page, it directly navigates to the edit profile page which appears as below. 

1. Optionally change the profile picture
2. Optionally change the username.
3. Optionally change email address.
4. Optionally change password.
5. Optionally change the address.
6. Optionally change food preferences.
7. Optionally change food restrictions.
8. Click on `Submit`.

![edit profile](https://user-images.githubusercontent.com/61224886/85369081-15b06f80-b535-11ea-841c-aa1b439ccb7d.jpeg)


### 2.6. Logout

The registered user is able to logout from the system. 

1. Click on 'Logout' which exists on the top of any page.

**2.6.1.** **Successful Logout**

The system successfully logs out from the system and navigates to the login page.




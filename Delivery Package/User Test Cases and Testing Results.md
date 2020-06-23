# User Test Cases and Testing Results


### Sign Up As a User

**Title:** Sign Up Page – Register successfully with the user credentials.

**Description:** A user should be able to register to the system with a username, an email, a password, a personal website, a phone number, an address, and a profile picture. 

**Precondition:** The user must not be registered with this email address beforehand.

**Test Steps:**

1. Navigate to the webpage.
2. Click 'Sign Up'.
3. In the 'name' field, enter the username.
4. In the ’email’ field, enter the email address.
5. In the password field, enter the password.
6. In the phone number field, enter the phone number. 
7. In the website field, enter a personal website.
8. In the 'address' field, enter an address so that it finds the latitudes and longitudes.
9. Choose food preferences.
10. Specify food restrictions.
11. Upload a profile picture if preferred.
12. Click ‘Submit’.

**Test Data:**

* Name: bilgehicyilmam
* Email: test@mail.com
* Password: 123pass
* Address: Kadıköy, İstanbul
* Profile Picture: If exist

**Expected Result:** A page displaying the recipes with the add recipe button at the top of the page should load.

**Actual Result:** As expected

**Result:** Pass

### Sign Up As a Food Provider

**Title:** Sign Up Page – Register successfully with the user credentials.

**Description:** A user should be able to register to the system with a username, an email, a password, a personal website, a phone number, an address, and a profile picture. 

**Precondition:** The user must not be registered with this email address beforehand.

**Test Steps:**

1. Navigate to the webpage.
2. Click 'Sign Up'.
3. In the 'name' field, enter the username.
4. In the ’email’ field, enter the email address.
5. In the password field, enter the password.
6. In the phone number field, enter the phone number. 
7. In the website field, enter a personal website.
8. In the 'address' field, enter an address so that it finds the latitudes and longitudes.
9. Choose food preferences.
10. Specify food restrictions.
11. Upload a profile picture if preferred.
12. Click on `This is a restaurant account`
13. Click ‘Submit’.

**Test Data:**

* Name: midpoint
* Email: test@mail.com
* Password: 123pass
* Phone Number: 02168818886
* Website: www.midpoint.com.tr
* Address: Kadıköy, İstanbul
* Profile Picture: If exist

**Expected Result:** A page displaying the recipes with the add recipe button at the top of the page should load.

**Actual Result:** As expected

**Result:** Pass

### Login

**Title:** Login Page – Authenticate successfully with email and password.

**Description:** A registered user should be able to login to the system successfully using email and password.

**Precondition:** The user must be registered with an email address and a password beforehand.

**Test Steps:**

1. Navigate to the webpage.
2. Click 'Login'.
3. In the ’email’ field, enter the email address of the registered user.
4. In the password field, enter the password of the registered user.
5. Click ‘Submit’.

**Test Data:**

* Email: test@mail.com
* Password: 123pass

**Expected Result:** A page displaying the recipes with the add recipe button at the top of the page should load.

**Actual Result:** As expected

**Result:** Pass

-----------------------------------------------------------------------------------------------------------------

**Title:** Login Page – Not login with either invalid email or password.

**Description:** A user should not be able to login to the system using an invalid email or password.

**Precondition:** The user must not be registered with this email address or a password beforehand.

**Test Steps:**

1. Navigate to the webpage.
2. Click 'Login'.
3. In the ’email’ field, enter the email address of the unregistered user.
4. In the password field, enter the password of the unregistered user.
5. Click ‘Submit’.

**Test Data:**

* Email: test2@mail.com
* Password: 123fail

**Expected Result:** User should not be able to login to the application. It cannot continue to other pages.

**Actual Result:** As expected

**Result:** Pass

### Add a Recipe

**Title:** Recipes Page - User successfully adds a recipe.

**Description:** A user should be able to add a recipe that shows total nutritional values.

**Precondition:** The user must be already login to the system. 

**Test Steps:**

1. Navigate to the recipes page.
2. Click 'Add Recipe'.
3. Enter name, description, prep time, cook time, portion size, ingredients, directions.
4. Upload recipe picture.
5. Click ‘Submit’.

**Test Data:**

* Name: Vegetable Noodle
* Description: Vegetarian Noodle
* Prep Time: 30 minutes
* Cook Time: 30 minutes
* Portion Size: 2 portions 
* Ingredients: 2 medium carrots, 1 onion, 200 gr broccoli, 500 gr noodle, salt, 2 tablespoon olive oil.
* Directions: Soak noodles in hot water for 15 - 20 minutes. Add vegetables into boiling water. After that, add noodle, salt and olive oil into water.
* Picture: If exist

**Expected Result:** User should be able to see the recipe in the recipe page. After that, the user should be able to click on the recipe and see the recipe details.

**Actual Result:** As expected

**Result:** Pass

### Search a Recipe

**Title:** Recipes Page - User successfully searches a recipe.

**Description:** A user should be able to search a recipe according to its name.

**Precondition:** The recipe must exist in the system.

**Test Steps:**

1. Navigate to the recipes page.
2. Enter a keyword into the recipe search bar.

**Test Data:**

* Recipe: Vegetable Noodle

**Expected Result:** User should be able to see the recipes that matches the name of the recipe.

**Actual Result:** As expected

**Result:** Pass

### Search a Food Provider According to The Food Tags (Vegan, Vegetarian, Gluten-Free, Sugar-Free)

**Title:** Food Providers Page - User successfully searches a food provider.

**Description:** A user should be able to search for a food provider according to recipe tags.

**Precondition:** The food provider must exist in the system.

**Test Steps:**

1. Navigate to the food providers page.
2. Select a tag such as vegan or vegetarian.

**Test Data:**

* Filter: Vegan

**Expected Result:** User should be able to see the restaurants that serve this kind of food (vegan).

**Actual Result:** As expected

**Result:** Pass

--------------------------------------------------------------------------------------------------------------------

### Search a Food Provider According to The Restaurant Name

**Title:** Food Providers Page - User successfully searches a food provider.

**Description:** A user should be able to search for a food provider according to its name.

**Precondition:** The food provider must exist in the system.

**Test Steps:**

1. Navigate to the food providers page.
2. Type the restaurant's name.

**Test Data:**

* Name: Midpoint

**Expected Result:** User should be able to see the restaurants that match the name of a restaurant.

**Actual Result:** As expected

**Result:** Pass

------------------------------------------------------------------------------------------------------------------

### Search a Food Provider According to The Address

**Title:** Food Providers Page - User successfully searches a food provider.

**Description:** A user should be able to search for a food provider according to the address.

**Precondition:** The food provider must exist in the system.

**Test Steps:**

1. Navigate to the food providers page.
2. Type address.

**Test Data:**

* Address: Kadıköy, İstanbul.

**Expected Result:** User should be able to see the restaurants that exist in this specific area.

**Actual Result:** As expected

**Result:** Pass

### Edit Profile

**Title:** Edit Profile Page - User successfully edits profile information.

**Description:** User should be able to change the user credentials.

**Precondition:** The user should already login to the system.

**Test Steps:**

1. Navigate to the user profile page.
2. Click on 'Edit Profile'.
3. Change username.
4. Change email.
5. Change address.
6. Change food preferences.
7. Change food restrictions.
8. Change password.
9. Change profile photo.
10. Click on 'Submit'.

**Test Data:**

* Name: bilge
* Email: test2@mail.com
* Password: 123456
* Address: Bursa, Turkey
* Food Preferences: Vegetarian
* Food Restrictions: Peanut
* Profile Picture: If exist

**Expected Result:** User credentials should be changed as entered by the user.

**Actual Result:** As expected

**Result:** Pass

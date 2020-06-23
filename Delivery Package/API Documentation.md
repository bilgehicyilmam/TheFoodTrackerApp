### Base URL: http://localhost:8080/

# Endpoints

## 1. User 

It takes the necessary parameters from the user, and saves it to the database. In turn, returns the related user details.

**Endpoint:** `/users`

* POST

```
{
    "name": "bilge hicyilmam",
    "email": "bilgehicyilmam@gmail.com",
    "password": 123456,
    "address": "Kadıköy, İstanbul",
    "latitude": 40.98186700000001,
    "longitude": 29.0576302,
    "phoneNumber": "(216) 881 88 88",
    "website": "www.yourhealthycompanion.com.tr",
    "tags": ["vegetarian"],
    "allergens": ["egg"]
}
```

* Response

```
{
    "id": "5ef1d4f121271a6639d028a5",
    "name": "bilge hicyilmam",
    "email": "bilgehicyilmam@gmail.com",
    "password": "123456",
    "thumb": null,
    "address": "Kadıköy, İstanbul",
    "latitude": 40.98186700000001,
    "longitude": 29.0576302,
    "phoneNumber": "(216) 881 88 88",
    "website": "www.yourhealthycompanion.com.tr",
    "details": null,
    "restaurant": false,
    "tags": [
        "vegetarian"
    ],
    "allergens": [
        "egg"
    ]
}
```
**Endpoint:** `/users/login`

* POST

```
{
    "email": "bilgehicyilmam@gmail.com",
    "password": 123456
}
```

* Response

```
{
    "id": "5ef1d4f121271a6639d028a5",
    "name": "bilge hicyilmam",
    "email": "bilgehicyilmam@gmail.com",
    "password": "123456",
    "thumb": null,
    "address": "Kadıköy, İstanbul",
    "latitude": 40.98186700000001,
    "longitude": 29.0576302,
    "phoneNumber": "(216) 881 88 88",
    "website": "www.yourhealthycompanion.com.tr",
    "details": null,
    "restaurant": false,
    "tags": [
        "vegetarian"
    ],
    "allergens": [
        "egg"
    ]
}
```



## 2. Recipe

It takes the necessary parameters of the recipe from the user and saves it to the database. In turn, returns the related recipe details.

**Endpoint:** `/recipes`

* POST 

```
{
  "name": "Vegetable Noodle",
  "description": "Delicious noodle with soy sauce",
  "prepTime": 15,
  "cookTime": 15,
  "directions": "Boil for 15 minutes.",
  "portionSize":2,
  "tags": ["vegan", "vegetarian"],
  "createdBy": {
      "name": "bilge hicyilmam"
  },
  "ingredients": [
      {
          "name": "noodle",
          "portion": "cup"
      },
      {
          "name": "carrot",
          "portion": "medium"
      },
      {
          "name": "broccoli",
          "portion": "medium"
      }
  ]
}
```
* Response

```
[
  {
        "id": "5ef1cbe421271a6639d0289c",
        "name": "Vegetable Noodle",
        "description": "Delicious noodle with soy sauce",
        "prepTime": 15,
        "cookTime": 15,
        "directions": "Boil for 15 minutes.",
        "thumbUrl": null,
        "createdBy": {
            "id": null,
            "name": "bilge hicyilmam",
            "thumb": null
        },
        "nutrients": null,
        "tags": [
            "vegan",
            "vegetarian"
        ],
        "ingredients": [
            {
                "name": "noodle",
                "portion": "cup"
            },
            {
                "name": "carrot",
                "portion": "medium"
            },
            {
                "name": "broccoli",
                "portion": "medium"
            }
        ],
        "portionSize": 2
    }
]
```


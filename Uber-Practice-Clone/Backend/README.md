# Backend API Documentation

## /users/register

### Description
This endpoint is used to register a new user.

### Method
`POST`

### Endpoint
`/users/register`

### Request Body
The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required)
  - `lastname`: A string with a minimum length of 3 characters (optional)
- `email`: A string with a minimum length of 5 characters and must be a valid email (required)
- `password`: A string with a minimum length of 6 characters (required)

#### Example
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Response

#### Success (201 Created)
```json
{
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  },
  "token": "jwt_token"
}
```

#### Error (400 Bad Request)
```json
{
  "error": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "first name must be 3 character",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "password must be 6 character",
      "param": "password",
      "location": "body"
    }
  ]
}
```

### Status Codes
- `201 Created`: The user was successfully created.
- `400 Bad Request`: The request body is invalid or missing required fields.

## /users/login

### Description
This endpoint is used to log in an existing user.

### Method
`POST`

### Endpoint
`/users/login`

### Request Body
The request body should be a JSON object containing the following fields:

- `email`: A string with a minimum length of 5 characters and must be a valid email (required)
- `password`: A string with a minimum length of 6 characters (required)

#### Example
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Response

#### Success (200 OK)
```json
{
  "token": "jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

#### Error (400 Bad Request)
```json
{
  "error": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "password must be 6 character",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Error (401 Unauthorized)
```json
{
  "message": "invalid email or password"
}
```

### Status Codes
- `200 OK`: The user was successfully logged in.
- `400 Bad Request`: The request body is invalid or missing required fields.
- `401 Unauthorized`: The email or password is incorrect.

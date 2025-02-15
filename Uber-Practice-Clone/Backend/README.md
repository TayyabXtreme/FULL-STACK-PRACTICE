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

## /users/profile

### Description
This endpoint is used to get the profile of the authenticated user.

### Method
`GET`

### Endpoint
`/users/profile`

### Request Headers
The request must include the following headers:

- `Authorization`: A Bearer token containing the JWT token (required)

#### Example
```
Authorization: Bearer jwt_token
```

### Response

#### Success (200 OK)
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
  }
}
```

#### Error (401 Unauthorized)
```json
{
  "message": "Unauthorized"
}
```

### Status Codes
- `200 OK`: The user's profile was successfully retrieved.
- `401 Unauthorized`: The request is missing the JWT token or the token is invalid.

## /users/logout

### Description
This endpoint is used to log out the authenticated user by invalidating the JWT token.

### Method
`GET`

### Endpoint
`/users/logout`

### Request Headers
The request must include the following headers:

- `Authorization`: A Bearer token containing the JWT token (required)

#### Example
```
Authorization: Bearer jwt_token
```

### Response

#### Success (200 OK)
```json
{
  "message": "logout successfully"
}
```

#### Error (401 Unauthorized)
```json
{
  "message": "Unauthorized"
}
```

### Status Codes
- `200 OK`: The user was successfully logged out.
- `401 Unauthorized`: The request is missing the JWT token or the token is invalid.

## /captains/register

### Description
This endpoint is used to register a new captain.

### Method
`POST`

### Endpoint
`/captains/register`

### Request Body
The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required)
  - `lastname`: A string with a minimum length of 3 characters (optional)
- `email`: A string with a minimum length of 5 characters and must be a valid email (required)
- `password`: A string with a minimum length of 6 characters (required)
- `vehicle`: An object containing:
  - `color`: A string with a minimum length of 3 characters (required)
  - `plate`: A string with a minimum length of 3 characters (required)
  - `capacity`: An integer with a minimum value of 1 (required)
  - `vehicleType`: A string that must be one of `car`, `motorcycle`, or `auto` (required)

#### Example
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Response

#### Success (201 Created)
```json
{
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
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
    },
    {
      "msg": "Color must be 3 character",
      "param": "vehicle.color",
      "location": "body"
    },
    {
      "msg": "plate must be 3 character",
      "param": "vehicle.plate",
      "location": "body"
    },
    {
      "msg": "capacity must be at least 1",
      "param": "vehicle.capacity",
      "location": "body"
    },
    {
      "msg": "vehicleType must be one of car, motorcycle, auto",
      "param": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}
```

### Status Codes
- `201 Created`: The captain was successfully created.
- `400 Bad Request`: The request body is invalid or missing required fields.
- `401 Unauthorized`: The email already exists.
- `500 Internal Server Error`: An error occurred on the server.

## /captains/login

### Description
This endpoint is used to log in an existing captain.

### Method
`POST`

### Endpoint
`/captains/login`

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
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
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
- `200 OK`: The captain was successfully logged in.
- `400 Bad Request`: The request body is invalid or missing required fields.
- `401 Unauthorized`: The email or password is incorrect.

## /captains/profile

### Description
This endpoint is used to get the profile of the authenticated captain.

### Method
`GET`

### Endpoint
`/captains/profile`

### Request Headers
The request must include the following headers:

- `Authorization`: A Bearer token containing the JWT token (required)

#### Example
```
Authorization: Bearer jwt_token
```

### Response

#### Success (200 OK)
```json
{
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### Error (401 Unauthorized)
```json
{
  "message": "Unauthorized"
}
```

### Status Codes
- `200 OK`: The captain's profile was successfully retrieved.
- `401 Unauthorized`: The request is missing the JWT token or the token is invalid.

## /captains/logout

### Description
This endpoint is used to log out the authenticated captain by invalidating the JWT token.

### Method
`GET`

### Endpoint
`/captains/logout`

### Request Headers
The request must include the following headers:

- `Authorization`: A Bearer token containing the JWT token (required)

#### Example
```
Authorization: Bearer jwt_token
```

### Response

#### Success (200 OK)
```json
{
  "message": "logout successfully"
}
```

#### Error (401 Unauthorized)
```json
{
  "message": "Unauthorized"
}
```

### Status Codes
- `200 OK`: The captain was successfully logged out.
- `401 Unauthorized`: The request is missing the JWT token or the token is invalid.

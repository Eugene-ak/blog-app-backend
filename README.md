## Get all posts from database
```sh
GET {{BASE_URL}}
```

## Sample respone

```json
{
  "blogs": [
    {
      "_id": "659d9db9cfbc5061b350bed9",
      "heading": "Testing2",
      "field": "Test2",
      "content": "Testing server 2",
      "author": "Eugene Amedior",
      "date": "2024-06-01T00:00:00.000Z",
      "createdAt": "2024-01-09T19:25:45.880Z",
      "updatedAt": "2024-01-09T19:25:45.880Z",
      "__v": 0
    }
  ]
}
```


## Find one post using database id
```bash
GET {{BASE_URL}}/659d9db9cfbc5061b350bed9
```

## Sample respone

```json
{
  "_id": "659d9db9cfbc5061b350bed9",
  "heading": "Testing2",
  "field": "Test2",
  "content": "Testing server 2",
  "author": "Eugene Amedior",
  "date": "2024-06-01T00:00:00.000Z",
  "createdAt": "2024-01-09T19:25:45.880Z",
  "updatedAt": "2024-01-09T19:25:45.880Z",
  "__v": 0
}
```
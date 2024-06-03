# API Spec Notes

## Create notes API

Endpoint : POST /api/notes

Request Body :

```json
{
  "title": "Tugas Backend",
  "datetime": "2024-06-03 14:41:00",
  "note": "Notes API"
}
```

Response Body Success :

```json
{
  "message": "Note created successfully",
  "title": "Tugas Backend",
  "datetime": "2024-06-03 14:41:00",
  "note": "Notes API"
}
```

Response Body Error :

```json
{
    "error": "Error creating new note",
    "message": "Title already exists"
}
```

## Get ALL notes

Endpoint : GET /api/notes

Response Body Success :

```json
{
  "message": "GET all notes success",
  "notes": [
    {
      "id": 8,
      "title": "Tugas Backend",
      "datetime": "2024-06-03T07:41:00.000Z",
      "note": "Notes API"
    }
  ]
}
```

Response Body Error :

```json
{
    "error": "Failed to retrieve notes",
    "message": "Error retrieving all notes:"
}
```

## Get notes By Id API

Endpoint : GET /api/notes/:id

Response Body Success :

```json
{
    "id": 8,
    "title": "Tugas Backend",
    "datetime": "2024-06-03T07:41:00.000Z",
    "note": "Notes API"
}
```

Response Body Error :

```json
{
  "error": "Failed to retrieve note",
  "message": "Error retrieving note with id"
}
```

## Update notes API

Endpoint : PATCH /api/notes/update/:id

Request Body :

```json
{
  "title": "Notes API",
  "datetime": "2024-06-03 14:41:00",
  "note": "Tugas Back End Notes API With Express"
}
```

Response Body Success :

```json
{
  "message": "Note created successfully",
  "title": "Notes API",
  "datetime": "2024-06-03 13:41:00",
  "note": "Tugas Back End Notes API With Express"
}
```

Response Body Error :

```json
{
    "error": "Failed to update note",
    "message": "Note not found"
}
```

## Delete notes By Id API

Endpoint : DELETE /api/notes/:id

Response Body Success :

```json
{
  "message": "Note deleted successfully",
  "id": "8"
}
```

Response Body Error :

```json
{
  "error": "Failed to delete note",
  "message": "Note not found"
}
```
# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Stori/Tracks

- `GET /api/stories`
- `GET /api/stories/:id`
- `POST /api/stories`
- `PATCH /api/stories/:id`

### annotations

- `GET /api/stories/:stori_id/annotations`
- `POST /api/stories/:stori_id/annotations`
- `PATCH /api/annotations/:stori_id/annotations/:id`
- `GET /api/annotations/:id`
- `DELETE /api/annotations/:id`

### comments

- `GET api/annotations/:annotation_id/comments`
- `POST api/annotations/:annotation_id/comments`
- `PATCH api/comments/:id`
- `DELETE api/comments/:id`

### upvotes

- `POST api/upvotes`

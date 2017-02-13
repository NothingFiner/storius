# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
profile         | object    | not null

## storis
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null, indexed
artist          | string    | not null, indexed
content         | text      | not null
user_id         | integer   | not null, indexed, foreign key(users)
artist_image_url| string    |
header_image_url| string    |
metadata        | object    | not null
soundcloud      | string    |
youtube         | string    |

## annotations
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
content         | text      | not null
char_start      | integer   | not null, unique
char_end        | integer   | not null
stori_id        | integer   | not null, indexed, foreign key(storis)
user_id         | integer   | not null, indexed, foreign key(users)

## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
content         | string    | not null
user_id         | integer   | not null, indexed, foreign key(users)
annotation_id   | integer   | not null, indexed, foreign key(annotations)


not sure if there should be two kinds of upvotes: one for annotations and one for comments? Genius has pyongs which function as upvotes for tracks/storis. Shoud I do that too?

## upvotes
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key(users)
annotation_id   | integer   | indexed, unique(user_id), foreign key(annotations)
comment_id      | integer   | indexed, unique(user_id), foreign key(comments)

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'guest', email: 'guest@guest.com', password_digest: '$2a$10$u7HL0KAjSnMnR2KyXChEZeA.sD0QHBzcLFydgsd562VslexZjaz32', session_token: 'ldh6aDP7CrTzOusyaP4PBQ', bio: 'the guest account for demos' )

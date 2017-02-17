# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'guest', email: 'guest@guest.com', password_digest: '$2a$10$u7HL0KAjSnMnR2KyXChEZeA.sD0QHBzcLFydgsd562VslexZjaz32', session_token: 'ldh6aDP7CrTzOusyaP4PBQ', bio: 'the guest account for demos' )

Stori.create(title: 'Prison::Temple', author: 'Ghede', user_id: '1', content: 'Anchoritic age<br>Walled in by ritual<br>The real submerged<br>In narrative')
Stori.create(title: 'A Cage It Falls Into' , author: 'Envy', user_id: 1, content: 'Some japanese words')
Stori.create(title: 'A Dab of Ranch' , author: 'Migos', user_id: 1, content: 'Dab of ranch dab of ranch')
Stori.create(title: 'A Short Guide to the City', author: 'Peter Straub', user_id: 1, content: 'Something something wolves. Something Something viaduct killer')
Stori.create(title: 'Dover Beach', author: 'Mathew Arnold', user_id: 1, content: '<p>The sea is calm tonight.  The tide is full, the moon lies fair  Upon the straits; on the French coast the light  Gleams and is gone; the cliffs of England stand,  Glimmering and vast, out in the tranquil bay.  Come to the window, sweet is the night-air!  Only, from the long line of spray  Where the sea meets the moon-blanched land,  Listen! you hear the grating roar  Of pebbles which the waves draw back, and fling,  At their return, up the high strand,  Begin, and cease, and then again begin,  With tremulous cadence slow, and bring  The eternal note of sadness in.</p>') 
Stori.create(title: 'Carravagio: Swirl & Vortex', author: 'Larry levis', user_id: '1', content: '<p>In the Borghese, Caravaggio, painter of boy whores, street punk, exile &amp; murderer, Left behind his own face in the decapitated, swollen, leaden-eyed head of Goliath, And left the eyelids slightly open, &amp; left on the face of David a look of pity</p>')

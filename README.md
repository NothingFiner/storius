# Storius

*il n'y a pas de hors-texte*
  - Jacques Derrida

[Storius Live][live]

[live]: https://storius.herokuapp.com/#/

Storius is an app where users can access and contribute crowd-sourced annotations on any sort of text. It utilizes a Ruby on Rails backend with a PostgreSQL database. The front end is composed of React.js with a Redux architectural framework.  

## Features & Implementation

### Storis

Storis are the basic objects on which the other components of the application build. Each Stori needs an 'author', 'title', and 'content' text. It must also belong to a particular user. Any visitor can view any Stori. However, only logged in users can update or create Storis, and only a user who created a Stori can delete that Stori. Logging in is also necessary to annotate and comment on Storis.

**Viewing Storis**

Users can view Storis by clicking on the associated Stori link on the index page.

**Creating Storis**

A logged in User can create a Stori by clicking on the 'Add a Stori' link in the header. They will then be brought to a form that will allow them to enter the required Stori fields.

### Annotations

**Viewing Annotations**

In the every Stori's text annotations appear as gray highlights. Any user can click  one of these highlights to bring up the associated annotation.

**Creating Annotations**

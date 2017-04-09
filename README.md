# Storius

*il n'y a pas de hors-texte*
  -- Jacques Derrida

[Storius Live][live]

[live]: http://storius.tech

Storius is an app where users can access and contribute crowd-sourced annotations on any sort of text. It utilizes a Ruby on Rails backend with a PostgreSQL database. The front end is composed of React.js with a Redux architectural framework.  

## Features & Implementation

![Image of login window](docs/screenshots/login.png)

### Storis

Storis are the basic objects on which the other components of the application build. Each Stori needs an 'author', 'title', and 'content' text. It must also belong to a particular user. Any visitor can view any Stori. However, only logged in users can update or create Storis, and only a user who created a Stori can delete that Stori. Logging in is also necessary to annotate and comment on Storis.

**Viewing Storis**

![image of top storis](docs/screenshots/top_storis.png)

Users can view Storis by clicking on the associated Stori link on the index page.

![image of search result dropdown](docs/screenshots/search_view.png)

Storis can also be accessed by clicking a link in the search results dropdown.

**Creating Storis**

![image of stori form](docs/screenshots/form.png)

A logged in User can create a Stori by clicking on the 'Add a Stori' link in the header. They will then be brought to a form that will allow them to enter the required Stori fields.

**Updating Storis**

![image of edit text button](docs/screenshots/edit_text.png)

Users can edit text for a Stori while there are no annotations.

![image of text being edited](docs/screenshots/editing_text.png)

![image of edit detail button](docs/screenshots/edit_detail_button.png)

By clicking on the circular purple Edit Detail button, users can bring up a window that lets them edit the details of a Stori.

![image of edit detail window](docs/screenshots/edit_details.png)

They may also paste in a link to a stori's youtube video, which will embed that video on the page.

![image of embedded youtube video](docs/screenshots/embed.png)

![image of about prompt](docs/screenshots/empty_about.png)

Storis can also have an about section, added by a logged in user.

![image of about textArea](docs/screenshots/edit_about.png)

Any visitor to the site can view the Stori about text.

![image of stori about text](docs/screenshots/display_about.png)


### Annotations

**Viewing Annotations**

In the every Stori's text, annotations appear as gray highlights.

An Annotation's highlighting turns yellow when a user mouses over it.

![image of annotation](docs/screenshots/stori_view.png)

Any user can click  one of these highlights to bring up the associated annotation.


Logged in users can edit and vote on annotations.

**Creating Annotations**

![image of highlighted text](docs/screenshots/highlighted.png)
When the annotation panel is not open, users can use the mouse to select the text they wish to annotate.

If they are not logged in they will be directed to log in.

![image of annotation window](docs/screenshots/annotation_window.png)

Clicking on the start annotation button will bring up the annotation panel with an 'id' of null, indicating to the application that this is a new annotation. This allows annotations to be created, edited, and displayed by the same page element.

### Comments

At the bottom of every Stori is a space for comments.

![image of comment form](docs/screenshots/comment_form.png)

Logged in users can create new comments.

![image of some comments](docs/screenshots/edit_comments.png)

They can also vote on those comments, and vote and edit comments they created.

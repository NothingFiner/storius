## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
  - Home
  - Header
  - TrackChart
  - TopUsers

**ProfileContainer**
  - Profile
  - ProfileForm

**StoriContainer**
  - StoriHeader
  - StoriContent

**NewStoriContainer**
  - StoriForm

Can't remember if I actually need any of the following container or if all the stuff goes into StoriContainer

**AnnotationContainer**
  - Annotation
  - AnnotationForm
  - UpvoteWidget

**CommentContainer**
  - Comment
  - CommentForm
  - UpvoteWidget

  |Path   | Component   |
  |-------|-------------|
  | "/sign-up" | "AuthFormContainer" |
  | "/sign-in" | "AuthFormContainer" |
  | "/home" | "HomeContainer" |
  | "/:username" | "ProfileContainer" |
  | "/home/stori/:storiId" | "StoriContainer" |
  | "/new-stori" | "NewStoriContainer" |

Not sure how I should handle usernames for comments. Wonder if I should just grab all of the users represented on a page and use a single table for all of them, pulling out their names for attribution with user_ids.

```js
{
  currentUser: {
    id: 1,
    username: "NothingFiner",
    email: "eafiner@gmail.com",
    profile: {
      bio: "Real cool",
      facebook: "some shit here"
    }
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createStori: {errors: ["body can't be blank"]},
    createAnnotation: {errors: ["body can't be blank"]},
    createComment: {errors: ["body can't be blank"]}
  },
  stori: {
    id: 1,
    user_id: 1,
    title: "Chains",
    artist: "Ghede",
    content: "The awful world stretches in front of me, all grey skies and chains",
    annotations: {
      0: {
        content: "pretty cool line, dawg, but maybe you should like use a new word",
        user_id: 2,
        username: "WuRules",
        annotation_id: 1,
        comments: {
          0: {
            user_id: 1,
            username: "NothingFiner",
            comment_id: 1,
            content: "yeah, like what?",
            a
            upvotes: 0,
          },
          1: {
            user_id: 2,
            username: "WuRules"
            comment_id: 2,
            content: "like ginormous!",
            upvotes: 3,
          }
        },
        upvotes: 1,
      }
    },
    metadata: {
      producer: "Elie Finer",
      album: "Demo 2",
      writer: "Elie Finer",
    }
  },
  artist: {
    bio: "Ghede was a really cool band okay?",
    id: 1,
    name: "Ghede",
  },
  user: {
    id: 2,
    username: "WuRules",
    email: "jwu@jwu.com",
    profile: {
      bio: "Real cool",
      facebook: "some shit here",
    }
  }
}
```

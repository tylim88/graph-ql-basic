const Query = {
  me: () => ({
    id: 123456,
    name: 'Mike',
    email: 'mike@example.com',
    age: 28,
  }),
  post: () => ({
    id: 987654,
    title: 'big title',
    body: 'spamming',
    published: true,
  }),
  greeting(parent, args, { db }, info) {
    //args store argument
    return `Hello ${(args.position ? args.position : '') +
      (args.name ? args.name : '')}!`
  },
  grades(parent, args, { db }, info) {
    return [99, 80, 93]
  },
  add(parent, args, { db }, info) {
    return args.numbers.length
      ? args.numbers.reduce((acc, currentValue) => acc + currentValue)
      : 0
  },
  users: (parent, args, { db }, info) => {
    if (!args.query) {
      return db.users
    }
    return db.users.filter(user => {
      return user.name.toLowerCase().includes(args.query.toLowerCase())
    })
  },
  posts: (parent, args, { db }, info) => {
    if (!args.query) {
      return db.posts
    }
    return db.posts.filter(post => {
      return (
        post.title.toLowerCase().includes(args.query.toLowerCase()) ||
        post.body.toLowerCase().includes(args.query.toLowerCase())
      )
    })
  },
  comments: (parent, args, { db }, info) => {
    if (!args.query) {
      return db.comments
    }
    return db.comments.filter(comment => {
      return (
        comment.id.toLowerCase().includes(args.query.toLowerCase()) ||
        comment.text.toLowerCase().includes(args.query.toLowerCase())
      )
    })
  },
}

export default Query

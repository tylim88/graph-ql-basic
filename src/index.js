import { GraphQLServer, PubSub } from 'graphql-yoga'
import db from './db'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import Post from './resolvers/Post'
import User from './resolvers/User'
import Comment from './resolvers/Comment'
import Subscription from './resolvers/Subscription'

const pubsub = new PubSub()

//resolver (server object)
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql', //path must relative to root directory
  resolvers: {
    //pass resolver, must match the name for Query, Mutation, Subscriber
    Query,
    Mutation,
    Post,
    Comment,
    User,
    Subscription,
  },
  context: {
    db, //pass the db so that we can use it in resolver regardless of where the db is defined
    pubsub,
  },
})

server.start(() => {
  //default port is 4000
  console.log('The server is up')
})

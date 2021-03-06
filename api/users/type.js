'use strict'
import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'
import Animal from '../animals/type'
import Resolvers from './resolvers'

export default new GraphQLObjectType({
  description: `A user`,
  fields: () => ({
    email: {
      description: `The users's chosen email address.`,
      type: GraphQLString
    },
    following: {
      description: `Animals this user is currently following.`,
      resolve: Resolvers.following,
      type: new GraphQLList(Animal)
    },
    id: {
      description: `A unique identifier for this user in the humane society database.`,
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      description: `The users's chosen name.`,
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      description: `The users's account password.`,
      type: new GraphQLNonNull(GraphQLString)
    }
  }),
  name: `User`
})

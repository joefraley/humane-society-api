'use strict'
import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'
import Animal from '../animals/type'
import R from 'ramda'
import { getByID } from '../animals/data'

export default new GraphQLObjectType({
  description: `A user`,
  fields: () => ({
    favorites: {
      description: `Favorite animals`,
      resolve: user => Promise.all(
        R.map(getByID,
        R.keys(
          R.prop(`favorites`)(user)))),
      type: new GraphQLList(Animal)
    },
    id: {
      description: `A unique identifier for this animal in the humane society database.`,
      type: GraphQLString
    },
    name: {
      description: `The animal's given name. Sometimes auto-generated by the Humane Society.`,
      type: GraphQLString
    }
  }),
  name: `User`
})
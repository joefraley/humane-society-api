// This file defines GraphQL input types that are fed to mutations centered on Animals
'use strict'
import { GraphQLFloat, GraphQLID, GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql'

export default new GraphQLInputObjectType({
  description: `Fields used when creating a new Animal.`,
  fields: () => ({
    age: {
      description: `How old is this animal, number of months.`,
      type: GraphQLFloat
    },
    breed: {
      description: `If this animal is commonly categorized within its species, how so?`,
      type: GraphQLString
    },
    colors: {
      description: `A generic list of colors that best describe this animal.`,
      type: new GraphQLList(GraphQLString)
    },
    dateAvailable: {
      description: `What is the earliest this animal can be adopted?`,
      type: GraphQLString
    },
    description: {
      description: `A short paragraph or two from the humane society about this animal's personality.`,
      type: GraphQLString
    },
    fee: {
      description: `What does it cost to adopt this animal, in US dollars.`,
      type: GraphQLFloat
    },
    id: {
      description: `A unique identifier for this animal in the humane society database.`,
      type: new GraphQLNonNull(GraphQLID)
    },
    imageURL: {
      description: `A URL to the entry image hosted by the humane society.`,
      type: GraphQLString
    },
    name: {
      description: `The animal's given name. Sometimes auto-generated by the Humane Society.`,
      type: GraphQLString
    },
    sex: {
      description: `The anatomical sex of the animal, if known.`,
      type: GraphQLString
    },
    species: {
      description: `The biological species of the animal.`,
      type: GraphQLString
    },
    weight: {
      description: `The weight of the animal in English pounds, if known.`,
      type: GraphQLFloat
    }
  }),
  name: `AnimalInput`
})
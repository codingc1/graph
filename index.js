import { GraphQLServer } from "graphql-yoga";
// const { GraphQLServer } = pkg;
import resolvers from './graphql/resolevers'

const server = new GraphQLServer({
    typeDefs : "graphql/schema.graphql",
    resolvers
})

server.start(()=> console.log('ab'))

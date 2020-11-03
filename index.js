import { GraphQLServer } from "graphql-yoga";
// const { GraphQLServer } = pkg;

const server = new GraphQLServer({

})

server.start(()=> console.log('ab'))

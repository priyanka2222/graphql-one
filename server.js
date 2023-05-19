const express = require('express')
const GraphQL = require('express-graphql').graphqlHTTP
const { 
        GraphQLSchema,
        GraphQLObjectType,
        GraphQLString,
} = require('graphql')
const app = express()

const schema = new GraphQLSchema({
    query:new GraphQLObjectType({
        name: 'HelloWorld',
    fields: ()=>(
        {
            message: {
                type: GraphQLString,
                resolve: ()=> "Hello World"
            }
        })
    })
})

app.use('/',GraphQL({
    schema:schema,
    graphiql:true
}))

const PORT = 8081
app.listen(PORT,()=> console.log('GraphQL Server is Running!'))
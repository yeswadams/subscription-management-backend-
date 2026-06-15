import { Router } from 'express'

const subscriptionRouter = Router()

subscriptionRouter.get('/', (req, res)=> res.send({title: "GET all subscriptions"}))
subscriptionRouter.get('/:id', (req, res)=> res.send({title: "GET subscription details"}))
subscriptionRouter.post('/:id', (req, res)=> res.send({title: "CREATE a new subscription"}))
subscriptionRouter.put('/:id', (req, res)=> res.send({title: "UPDATE a new subscription"}))
subscriptionRouter.delete('/:id', (req, res)=> res.send({title: "DELETE a subscription"}))

export default subscriptionRouter
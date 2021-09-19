const express = require('express')
const router = express.Router()
const { Tiger } = require('../../../../models')
const { auth } = require('../../../../middlewares/auth')

router.get('/', auth, async function (req, res, next) {
  const tigers = await Tiger.findAll()

  res.send(tigers)
})

router.get('/:id', auth, async function (req, res, next) {
  const { id } = req.params
  const tiger = await Tiger.findOne({ where: { id } })

  res.send(tiger)
})

router.post('/', auth, async function (req, res, next) {
  const tiger = await Tiger.build({
    ...req.body,
  }).save()

  res.status(201)
  res.send(tiger)
})

router.delete('/:id', auth, async function (req, res, next) {
  const { id } = req.params
  await Tiger.destroy({ where: { id } })

  res.status(204)
  res.send()
})

router.put('/:id', auth, async function (req, res, next) {
  const { id } = req.params
  const tiger = await Tiger.findOne({ where: { id } })

  tiger.name = req.body.name

  tiger.save()

  res.send(tiger)
})

module.exports = router

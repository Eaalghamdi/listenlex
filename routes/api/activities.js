const { Router } = require('express')
const Activities = require('../../models/activities')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const activities = await Activities.find()
        if (!activities) throw new Error('No activities')
        const sorted = activities.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    const newActivities = new Activities(req.body)
    try {
        const activities = await newActivities.save()
        if (!activities) throw new Error('Something went wrong saving the bucketListItem')
        res.status(200).json(activities)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// router.put('/:id', async (req, res) => {
//     const { id } = req.params

//     try {
//         const response = await BucketListItem.findByIdAndUpdate(id, req.body)
//         if (!response) throw Error('Something went wrong ')
//         const updated = { ...response._doc, ...req.body }
//         res.status(200).json(updated)
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

// router.delete('/:id', async (req, res) => {
//     const { id } = req.params
//     try {
//         const removed = await BucketListItem.findByIdAndDelete(id)
//         if (!removed) throw Error('Something went wrong ')
//         res.status(200).json(removed)
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

module.exports = router

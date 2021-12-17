const Course = require('../models/Course')
const { mongooseToObject } = require('../../util/mongoose')

class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) =>
                res.render('courses/show', { course: mongooseToObject(course) })
            )
            .catch(next)
    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create')
    }

    // [POST] /courses/store
    store(req, res, next) {
        const formData = req.body
        formData.image = `https://youtu.be/${req.body.videoId}`
        const course = new Course(formData)
        course.save()

        res.send('Lưu thành công')
    }
}

module.exports = new CourseController()
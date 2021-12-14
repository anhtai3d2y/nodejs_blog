class NewsController {

    // [GET] /news
    index(req, res) {
        res.render('news')
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('Taideptraipr1111o')
    }
}

module.exports = new NewsController
responseData = (req, res) => {
    if (req.objects.info.status === 200 || req.objects.info.status === 201 ) {
        res.json({
            info: {
                status: 200,
                urlServices: req.headers.host,
                path: req.originalUrl,
                message: req.objects.info.message
            },
            result: req.objects.data
        });
    }
    else {
        res.status(req.objects.info.status).json({
            info: {
                status: req.objects.info.status,
                urlServices: req.headers.host,
                path: req.originalUrl,
            },
            errors: {
                descriptions: req.objects.errors
            }
        });
    }
}

module.exports = {
    responseData
}
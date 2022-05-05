const SeriesController = {
    index: (req, res) =>  res.send(series),
    show: (req, res) =>  res.send(series.filter(serie => serie.id == req.params.id)[0])
};

module.exports = SeriesController;
const series = require("../models/series")

const controller = {
    index: (req, res) => res.send(series),
    porGenero: (req, res) => {
        const genero = req.params.genero

        const resultadoFiltrado = series.filter(serie => serie.genero.toLowerCase() === genero.toLowerCase())

        res.send(resultadoFiltrado)
    },
}

module.exports = controller
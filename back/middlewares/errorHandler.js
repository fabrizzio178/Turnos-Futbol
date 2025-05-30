const errorHandler = (err, req, res, next) => {
    console.error("Error occurred:", err.stack || err.message);
    res.status(500).json({ error: "Error interno del servidor... Estamos trabajando para repararlo" })

}

export default errorHandler;
// 1.IMPORTS
// 1.1 librerias npm
const express = require("express")
const cors = require("cors");
const router = express.Router();
// 1.2 documentos del proyecto
const { connectMongo } = require('./src/data/mongo')
// 1.3 las rutas:
const ruedaRouter = require('./src/api/routes/rueda.routes');
const ejeRouter = require('./src/api/routes/eje.routes');
const skateboardRouter = require('./src/api/routes/skateboard.routes');
const { setError } = require("./src/utils/error.util");
const userRouter = require("./src/api/routes/user.routes");

// 2. CONFIGURACIÓN DE LA APLICACIÓN
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectMongo();

//configCloudinary();
// 2.2 cabeceras (https://developer.mozilla.org/en-US/docs/Web/API/Headers)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// 2.3 cors (https://developer.mozilla.org/es/docs/Web/HTTP/CORS)
app.use(cors()); // no hay restricciones
/*
 * La linea inferior sería un ejemplo de uso de cors, en el que solo
 * permitimos peticiones de esas dos direcciones IP
 * Este concepto se conoce como whitelisting
 */
/* app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:4200'],
  credentials: true,
})); */

// 3. ENDPOINTS

// 3.1 endpoint
app.get('/', (request, response) => {
    response.status(200).json({
        status: 200,
        message: "Bienvenido a La Suite SkateShop"
    });
});
// 3.2 las rutas de mis datos
app.use('/rueda', ruedaRouter);
app.use('/eje', ejeRouter);
app.use('/skateboard', skateboardRouter);
// 3.3 el "coche escoba" -> cualquier ruta que no haya definido pasa por aquí
app.use("*", (req, res, next) => next(setError(404, "The route you requested is not part of this API")));


// 4. MANEJO DE ERRORES
app.use((error, req, res, next) => res.status(error.status || 500).json(error.message || "Unexpected error"));


app.use((req, res, next) => {
  setImmediate(() => {
    next(new Error("Something went wrong"));
  });
});

app.use((err, req, res, next) => {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});


// 5. "ARRANCAR" EL SERVIDOR
app.listen(PORT, () => {
  console.log(`Server listening on port : ${PORT}`);
});
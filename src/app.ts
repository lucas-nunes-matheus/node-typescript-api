import express from "express";
import userRoutes from "./routes/userRoutes";
import { setupSwagger } from "./config/swagger";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/users", userRoutes);

setupSwagger(app);

app.listen(port, () => {
    console.log(`Servidor ouvindo a porta localhost ${port}`);
    console.log(`Swagger UI disponível em http://localhost:${port}/docs`);
})
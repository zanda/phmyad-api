import express from 'express';
import cors from 'cors';
import db from './config/db.js';
import clientsRoutes from './routes/index.js';

const app = express();

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error: ', error);
}

var corsOptions = {
    origin: "http://localhost:3000" // 3000 port on which react is running
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "It's working !"});
});
app.use('/clients', clientsRoutes);

const PORT = process.env.PORT || 8080;
app.listen( PORT, () => {
    console.log(`Server is listening on port ${PORT}.`);
});
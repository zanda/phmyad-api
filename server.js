import express from 'express';
import cors from 'cors';
import db from './config/db.js';
import clubRoutes from './routes/club.js';
import contactRoutes from './routes/contact.js';
import competitionRoutes from './routes/competition.js';
import inscriptionRoutes from './routes/inscription.js';

const app = express();

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('DB connection error: ', error);
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
app.use('/Club', clubRoutes);
app.use('/Contact', contactRoutes);
app.use('/Competition', competitionRoutes);
app.use('/Inscription', inscriptionRoutes);

const PORT = process.env.PORT || 8080;
app.listen( PORT, () => {
    console.log(`Server is listening on port ${PORT}.`);
});
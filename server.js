import express from 'express';
import cors from 'cors';
import db from './config/db.js';
import clubsRoutes from './routes/clubs.js';
import contactsRoutes from './routes/contacts';
import competitionRoutes from './routes/competitions';
import inscriptionRoutes from './routes/inscription';

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
app.use('/Clubs', clubsRoutes);
app.use('/Contacts', contactsRoutes);
app.use('/Competition', competitionRoutes);
app.use('/Insription', inscriptionRoutes);

const PORT = process.env.PORT || 8080;
app.listen( PORT, () => {
    console.log(`Server is listening on port ${PORT}.`);
});
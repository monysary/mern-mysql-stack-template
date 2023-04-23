const express = require('express');
const sequelize = require('./config/connection');
const { join } = require('path');

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(join('client', 'build')));

} else {
    app.get('/', (req, res) => {
        res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'))
    });
}

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}/`);
    sequelize.sync({ force: false });
});

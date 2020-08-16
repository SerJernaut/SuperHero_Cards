import express from 'express';
import router  from './routers/index.js';
import cors    from 'cors';
import path from 'path';

const PORT = process.env.NODE_PORT || 3000;
const app = express();

app.use( cors() );
app.use( express.json() );
app.use(express.static(path.join(__dirname, './uploads')));

app.use(router);

app.listen(PORT);

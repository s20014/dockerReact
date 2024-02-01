import express from 'express';
const app: express.Express = express();
const port = 3000;

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('tsaaaasdff');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
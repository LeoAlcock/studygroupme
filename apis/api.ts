import express = require('express');

const router = express.Router();

router.post('/register', (req: express.Request, res: express.Response) => {
    console.log(req.body);
    res.json({});
});

export default router;
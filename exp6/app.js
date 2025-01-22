const express = require('express');
const app = express();
const routing = require('./router');

app.use('/', routing);

const PORT = 9000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

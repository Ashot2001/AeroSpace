import express from 'express';

import auth from './auth.api';
import aeroSpace from './aeroSpace.api';

const app = express();

// API
app.use('/auth', auth);
app.use('/aeroSpace', aeroSpace);

export default app;

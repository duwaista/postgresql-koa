import Koa from 'koa';
import logger from 'koa-logger';
import parser from 'koa-bodyparser';
import cors from '@koa/cors';

import router from './src/routes/index.js';
import errorMiddleware from './src/middleware/errorMiddleware.js'

const app = new Koa();

app.use(logger());
app.use(parser());
app.use(cors())

app.use(errorMiddleware)
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(process.env.PORT || 5000, async () => {
	console.log('Server started on: ' + 'http://localhost:5000/')
})
.on('error', (err) =>{
	console.log(err);
});

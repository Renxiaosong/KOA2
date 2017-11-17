const Koa = require('koa');
const app = new Koa();


const handler = async(ctx,next) =>{
	try{
		await next();
	}catch(err){
		ctx.response.status = err.statusCode || err.status || 500;
		ctx.response.body = {
			code:err.statusCode,
			status:err.status,
			message:err.message
		}
	}
}


const main = ctx =>{
	ctx.throw(404);
}

app.use(handler);
app.use(main);

app.listen(3000);
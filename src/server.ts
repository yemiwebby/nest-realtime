import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import * as bodyParser from 'body-parser';
import * as Express from 'express';

let instance = new Express();

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule, instance);
	app.use(bodyParser.json());
	instance.set('view engine', 'ejs');
	await app.listen(3000);
}
bootstrap();

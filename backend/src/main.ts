import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as session from 'express-session';
import * as passport from 'passport';
import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import { PrismaClient } from '@prisma/client';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
      .setTitle('Transcendance api')
      .setDescription('Api for transcendance')
      .setVersion('0.1')
      .addBearerAuth(
          { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
          'access-token',
      )
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    app.enableCors({
    //    allowedHeaders: '*',
      //  origin: '*'
    });// connect Cors with Express
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.use(
        session({
            name: 'SESSION_ID',
            cookie: {
                maxAge: 60000,
            },
            secret: 'cocochoc',
            resave: false,
            saveUninitialized: false,
            store: new PrismaSessionStore(
                new PrismaClient(),
                {
                    checkPeriod: 2 * 60 * 1000,  //ms
                    dbRecordIdIsSessionId: true,
                    dbRecordIdFunction: undefined,
                }
            )
        })
    );
    app.use(passport.initialize());
    app.use(passport.session());
    await app.listen(3001);
}
bootstrap();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Progreso Clases')
    .setDescription('Progreso del flujograma')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  app.useGlobalPipes(new ValidationPipe({ stopAtFirstError: true }));
  app.enableCors({
    origin: '*',
  });
  SwaggerModule.setup('api', app, document);
  await app.listen(3500);
}
bootstrap();

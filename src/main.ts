import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { MongoExceptionFilter } from './comman/filters/mongo-exception.filter'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const config = app.get(ConfigService)
  app.useGlobalFilters(new MongoExceptionFilter())

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      skipMissingProperties: false, // if true, request can omit (or include as null or undefined) properties defined in the DTO
      enableDebugMessages: config.get('enableDebugMessage'),
      transform: true,
    }),
  )

  const configSwagger = new DocumentBuilder()
    .setTitle('Login APIS')
    .setDescription('The Login API description')
    .setVersion('1.0')
    .addTag('Login')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, configSwagger)
  SwaggerModule.setup('api-doc', app, document)

  await app.listen(3000, () => {
    console.log('App is running port number : 3000')
  })
}
bootstrap()

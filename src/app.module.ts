import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupabaseModule } from './supabase/supabase.module';
import { AuthGuard } from './auth/auth.guard';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SupabaseModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthGuard],
})
export class AppModule {}
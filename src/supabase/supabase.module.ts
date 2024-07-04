import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SupabaseService } from './supabase.service';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: SupabaseService,
      useFactory: (configService: ConfigService) => {
        const supabaseUrl = configService.get<string>('SUPABASE_URL');
        const supabaseKey = configService.get<string>('SUPABASE_KEY');
        
        if (!supabaseUrl || !supabaseKey) {
          throw new Error('SUPABASE_URL and SUPABASE_KEY must be provided in the environment variables');
        }
        
        return new SupabaseService(supabaseUrl, supabaseKey);
      },
      inject: [ConfigService],
    },
  ],
  exports: [SupabaseService],
})
export class SupabaseModule {}
import { Body, Controller, Post } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

@Controller('auth')
export class AuthController {
  constructor(private supabaseService: SupabaseService) {}

  @Post('signin')
  async signIn(@Body() { email, password }: { email: string; password: string }) {
    const { data, error } = await this.supabaseService
      .getClient()
      .auth.signInWithPassword({ email, password });

    if (error) {
      throw error;
    }

    return data;
  }

  @Post('signup')
  async signUp(@Body() { email, password }: { email: string; password: string; }) {
    const { data: { user, session }, error } = await this.supabaseService
      .getClient()
      .auth.signUp({ email, password });

    if (error) {
      throw error;
    }

    return {
      user,
      session
    };
  }
}
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private supabaseService: SupabaseService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { data: { user }, error } = await this.supabaseService
      .getClient()
      .auth.getUser(request.headers.authorization);

    if (error) {
      throw new Error("Login first");
    }

    request.user = user;
    return !!user;
  }
}
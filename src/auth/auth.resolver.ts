import { CreateUserInput } from './user.input';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';

@Resolver(() => User)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query(() => [User])
  async getAllUsers() {
    return this.authService.getAllUsers();
  }

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.authService.signUp(createUserInput);
  }

  @Mutation(() => User)
  async signIn(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(createUserInput);
  }
}

import { PostService } from './post.service';
import { Post } from './post.entity';
import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { CreatePostInput } from './post.input';

@Resolver(() => Post)
export class PostResolver {
  constructor(private postService: PostService) {}

  @Query(() => [Post])
  async getAllPost() {
    return this.postService.getAllPost();
  }

  @Query(() => Post)
  async getPost(@Args('id') id: string) {
    return this.postService.getPost(id);
  }

  @Mutation(() => Post)
  async createPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postService.createPost(createPostInput);
  }

  @Mutation(() => Post)
  async deletePost(@Args('id') id: string) {
    return this.postService.deleetPost(id);
  }
}

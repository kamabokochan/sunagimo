// import { PostsState, Post } from "~/types";
// import { MutationTree, ActionTree } from "vuex";
// // import localPostsData from "~/contents/posts.json";

// export const state = (): PostsState => ({
//   posts: []
// })

// export const mutations: MutationTree<PostsState> = {
//   setPeople(state: PostsState, post: Post[]): void {
//     state.posts = post
//   }
// }

// export const actions: ActionTree<PostsState, PostsState> = {
//   async nuxtServerInit({ commit }, context) {
//     // let people: Person[] = []

//     // // If you serve the site statically with `nuxt generate`, you can't use HTTP requests for local
//     // people = context.isStatic ?
//     const localPostsData = await context.app.$axios.$get("./posts.json")

//     commit("setPeople", localPostsData)
//   }
// }

import { PostsState, Post } from "~/types";
import { MutationTree, ActionTree } from "vuex";
// import localPostsData from "~/contents/posts.json";
import axios from 'axios';

export const state = (): PostsState => ({
  summary: [],
  post: []
})

export const getters: GetterTree<PostsState> = {
  summary: state => state.summary,
  post: state => state.post
}

export const mutations: MutationTree<PostsState> = {
  setPost(state: PostsState, post: any): void {
    console.log(post)
    state.post = post
  },
  setSummary(state: PostsState, summary: any): void {
    console.log(summary)
    state.summary = summary
  }
}

export const actions: ActionTree<PostsState, PostsState> = {
  async getSummary({ commit }, context) {
    const summary = await axios.get("/contents/summary/summary.json")
    commit("setSummary", Object.values(summary.data.fileMap))
  },
  async getContents({ commit }, id) {
    const numID = Number(id)
    const summary = await axios.get("/contents/summary/summary.json")
    const summaryArry = Object.values(summary.data.fileMap)[numID]
    const post = await axios.get(`/${summaryArry.dir}/${summaryArry.base}`)
    commit("setPost", post.data)
  }
}

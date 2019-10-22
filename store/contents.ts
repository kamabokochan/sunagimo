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
    state.post = post
  },
  setSummary(state: PostsState, summary: any): void {
    state.summary = summary
  }
}

export const actions: ActionTree<PostsState, PostsState> = {
  async getSummary({ commit }, context) {
    const summary = await axios.get("/dist/summary/summary.json")
    commit("setSummary", Object.values(summary.data.fileMap))
  },
  async getContents({ commit, state }, id) {
    if (state.summary.length === 0) {
      const summary = await axios.get("/dist/summary/summary.json")
      commit("setSummary", Object.values(summary.data.fileMap))
    }

    const numID = Number(id)
    const summary = state.summary[numID]
    console.log(`/${summary.dir}/${summary.base}`)
    const post = await axios.get(`/${summary.dir}/${summary.base}`.replace('/static', '')) // TODO かっこわるい
    commit("setPost", post.data)
  }
}

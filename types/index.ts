export * from './state';

export interface Post {
  id: number
  title: string
  created_at: string
  updated_at: string
  tags: string
  bodyContent: string
  dir: string
  base: string
  ext: string
  sourceBase: string
  sourceExt: string
}

export interface Summary {
  fileMap: Post
  sourceFileArray: string[]
}
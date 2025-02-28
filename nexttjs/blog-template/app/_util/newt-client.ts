import process from 'node:process'
import { type Content, createClient } from 'newt-client-js'

export const client = createClient({
  spaceUid: 'blog-216815',
  token: process.env.API_KEY as string,
  apiType: 'cdn', // You can specify "cdn" or "api".
})

export interface Post extends Content {
  title: string
  body: string
}

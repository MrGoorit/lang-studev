import request from '@/utils/request'
import type { NewsPost } from './types'

class NewsApi {
  static posts(): Promise<NewsPost[]> {
    return request({
      url: '/posts',
      method: 'GET',
    })
  }
}

export default NewsApi
export type { NewsPost } from './types'

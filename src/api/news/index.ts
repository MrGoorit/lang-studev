import request from '@/utils/request'
import type { NewsListResult } from './types'

class NewsApi {
  static posts(): Promise<NewsListResult> {
    return request({
      url: '/posts',
      method: 'GET',
    })
  }
}

export default NewsApi
export type { NewsPost, NewsListResult } from './types'

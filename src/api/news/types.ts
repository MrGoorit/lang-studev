export interface NewsPost {
  id: number
  title: string
  body: string
}

export interface NewsListResult {
  data: NewsPost[]
}

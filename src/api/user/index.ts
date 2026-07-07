import { userRequest } from '@/utils/request'

interface UserItem {
  first_name: string
  last_name: string
  avatar: string
}

class UserApi {
  static getUsers(page: number = 1): Promise<{ data: UserItem[] }> {
    return userRequest({
      url: '/users',
      method: 'GET',
      params: { page },
    })
  }
}

export default UserApi

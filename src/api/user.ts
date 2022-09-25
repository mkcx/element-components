import request from '../utils/request'

import { IUserParams, IUserResponse } from './types/user'

export const getUser = (data: IUserParams) =>
  request<IUserParams, IUserResponse>({
    url: '/api/list',
    method: 'post',
    data
  })

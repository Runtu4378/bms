import { request, config } from '@utils'
// import { stringify } from 'qs'

const { api } = config
const { login, logout } = api

export async function check (params) {
  const res = await request({
    url: login,
    method: 'get',
  })
  return res
}

export async function loginFuc (params) {
  const res = await request({
    url: login,
    method: 'post',
    data: params,
  })
  return res
}

export async function logoutFuc (params) {
  const res = await request({
    url: logout,
    method: 'post',
    data: params,
  })
  return res
}

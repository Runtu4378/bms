import { request, config } from '@utils'
import { stringify } from 'qs'

const { api } = config
const { borrow, borrowUser } = api

export async function queryAll (params) {
  return await request({
    url: `${borrow}?${stringify(params)}`,
    method: 'get',
  })
}

export async function queryUser (params) {
  return await request({
    url: `${borrowUser}?${stringify(params)}`,
    method: 'get',
  })
}

export async function returnFuc (params) {
  const { id, bid } = params
  return await request({
    url: `${borrow}/${id}`,
    method: 'post',
    data: { bid },
  })
}

import { request, config } from '@utils'
import { stringify } from 'qs'

const { api } = config
const { book } = api

export async function query (params) {
  const res = await request({
    url: `${book}?${stringify(params.pageProps)}`,
    method: 'get',
  })
  return res
}

export async function add (params) {
  return await request({
    url: book,
    method: 'post',
    data: params,
  })
}

export async function edit (params) {
  const { id, ...payload } = params
  return await request({
    url: `${book}/${id}`,
    method: 'put',
    data: payload,
  })
}

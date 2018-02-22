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

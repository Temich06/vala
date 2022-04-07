import axios from 'axios';

const testURL = 'http://127.0.0.1:8000/'
const publicURL = 'https://proekt-hope.ru/'

const api = (url) => {
    const instance = axios.create({
        baseURL: publicURL + url,
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return instance
}

class API {
    async getPosts(page, tag, limit = 10) {
        let result = await api(`api/v1/posts/?page=${page}${tag ? `&tags=${tag}` : ''}&limit=${limit}${page !== 1 ? `&offset=${page * 10 - 10}` : ''}`).get(null)
        return result
    }
    async getPostsDetail(id) {
        let result = await api(`api/v1/posts/${id}`).get(null)
        return result
    }
    async getTags() {
        let result = await api(`api/v1/tags/`).get(null)
        return result
    }
}

export default new API()

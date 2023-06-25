import request from '@/utils/request'
export default {

  //查询所有文章分类
  findCategory() {
    return request({
      url: `/eduservice/article/findCategory`,
      method: 'get'
    })
  },

  //根据分类分页查询文章
  findArticlePage(current,limit,category) {
    return request({
      url: `/eduservice/article/findAll/${current}/${limit}/${category}`,
      method: 'get'
    })
  },
  getContent(id) {
    return request({
      url: `/eduservice/article/getContent/${id}`,
      method: 'get'
    })
  }
}

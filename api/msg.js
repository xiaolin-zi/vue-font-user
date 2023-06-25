import request from '@/utils/request'
export default {

  //查询热门课程和名师
  getAllMsg() {
    return request({
      url: '/eduservice/msg/findAllMsg',
      method: 'get'
    })
  },

  getAllMsgPage(current,limit) {
    return request({
      url: `/eduservice/msg/findAllMsg/${current}/${limit}`,
      method: 'get'
    })
  },
  sendMsg(msg) {
    return request({
      url: `/eduservice/msg/sendMsg/${msg}`,
      method: 'get',
    })
  }

}

import request from '@/utils/request'

export default {

  //获取用户信息
  getUserInfo() {
    return request({
      url: '/educenter/member/getMemberInfo',
      method: 'get'
    })
  },
  //删除用户
  deleteAccount(id) {
    return request({
      url: '/educenter/member/deleteMember/' + id,
      method: 'delete'
    })
  },
  //更新用户信息
  updateUserInfo(member) {
    return request({
      url: '/educenter/member/updateMember',
      method: 'post',
      data: member
    })
  },

  //获取用户订单信息
  getUserOrderInfo(page,limit,id) {
    return request({
      url: '/eduorder/order/getOrderInfoByMemberId/'+page+'/'+limit+'/'+id,
      method: 'get'
    })
  },

  //修改密码
  updatePassword(uid,oldPassword, newPassword) {
    return request({
      url: '/educenter/member/updatePassword/'+uid+'/'+oldPassword+'/'+newPassword,
      method: 'get',
    })
  },

  //删除订单
  deleteOrder(orderNo) {
    return request({
      url: '/eduorder/order/deleteOrder/'+orderNo,
      method: 'delete',
    })
  }
}

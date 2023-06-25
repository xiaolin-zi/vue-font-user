import request from '@/utils/request'

export default {

    //登录
    submitLoginUser(userInfo) {
        return request({
            url: '/educenter/member/login',
            method: 'post',
            data: userInfo
        })
    },

    //根据token获取用户信息
    getLoginUserInfo() {
        return request({
            url: '/educenter/member/getMemberInfo',
            method: 'get',
        })
    },

    //获取登录二维码
    getLoginQrCode() {
        return request({
            url: '/api/ucenter/wx/login',
            method: 'get',
        })
    },
}

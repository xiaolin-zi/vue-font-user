import request from '@/utils/request'

export default {
    //根据手机号发验证码
    sendCode(phone) {
        return request({
            url: '/edusms/sms/send/' + phone,
            method: 'get'
        })
    },

    //注册的方法
    registerMember(registerInfo) {
        return request({
            url: '/educenter/member/register',
            method: 'post',
            data: registerInfo
        })
    }
}
import request from '@/utils/request'
export default {


    //生成订单
    createOrder(courseId) {
        return request({
            url: `/eduorder/order/createOrder/${courseId}`,
            method: 'get',
        })
    },
    //根据订单号查询订单信息
    getOrderInfo(orderNo) {
        return request({
            url: `/eduorder/order/getOrderInfo/${orderNo}`,
            method: 'get',
        })
    },

    //根据订单号查询订单支付状态
    queryPayStatus(orderNo) {
        return request({
            url: `/eduorder/payLog/queryPayStatus/${orderNo}`,
            method: 'get'
        })
    },

    //生成二维码的方法
    createNative(orderNo) {
        return request({
            url: `/eduorder/payLog/createNative/${orderNo}`,
            method: 'get'
        })
    }

}
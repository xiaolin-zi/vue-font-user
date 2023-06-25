import request from '@/utils/request'
export default {

    //查询前几条banner
    getListBanner() {
        return request({
            url: '/educms/bannerfront/getAllBanner',
            method: 'get'
        })
    }
}
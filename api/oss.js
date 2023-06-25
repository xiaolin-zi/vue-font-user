import request from '@/utils/request'
export default {

  //上传图片
  uploadFile(file) {
    return request({
      url: '/eduoss/fileoss',
      method: 'post',
      data: file
    })
  },


}

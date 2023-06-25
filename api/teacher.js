import request from '@/utils/request'

export default {

    //分页查询所有讲师
    getTeacherList(page, limit) {
        return request({
            url: `/eduservice/teacherfront/getTeacherFrontList/${page}/${limit}`,
            method: 'post',
        })
    },

    //讲师详情
    getTeacherInfoById(teacherId) {
        return request({
            url: `/eduservice/teacherfront/getTeacherFrontInfo/${teacherId}`,
            method: 'get'
        })
    }

}
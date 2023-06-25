import request from '@/utils/request'

export default {

    //条件分页查询所有课程
    getCourseList(page, limit, courseQuery) {
        return request({
            url: `/eduservice/coursefront/getFrontCourseList/${page}/${limit}`,
            method: 'post',
            data: courseQuery
        })
    },

    //查询所有分类
    getAllSubject() {
        return request({
            url: `/eduservice/subjectfront/getAllSubject`,
            method: 'get'
        })
    },

    //根据课程id查询课程详情
    getCourseInfo(id) {
        return request({
            url: `/eduservice/coursefront/getFrontCourseInfo/${id}`,
            method: 'get'
        })
    },

    //更新浏览量
    updatePageViewCount(id) {
        return request({
            url: `/eduservice/coursefront/updatePageViewCount/${id}`,
            method: 'get'
        })
    }


}

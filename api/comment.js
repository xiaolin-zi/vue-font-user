import request from '@/utils/request'
export default {
    getCommontList(page, limit, courseId) {
        return request({
            url: `/eduservice/comment/getCommentList/${page}/${limit}`,
            method: 'get',
            params: { courseId }
        })
    },
    //获取评论列表
    getCommontList2(page, limit, courseId) {
        return request({
            url: `/eduservice/commentfront/getCommentList/${page}/${limit}`,
            method: 'get',
            params: { courseId }
        })
    },
    addComment(comment) {
        return request({
            url: `/eduservice/comment/addComment`,
            method: 'post',
            data: comment
        })
    },
    //添加评论
    addComment2(comment) {
        return request({
            url: `/eduservice/commentfront/addComment`,
            method: 'post',
            data: comment
        })
    },
    //获取用户头像
    getAvatar() {
        return request({
            url: `/educenter/member/getAvatar`,
            method: 'get',
        })
    },

    //点赞评论

    agreeComment(id, courseId) {
        return request({
            url: `/eduservice/commentfront/likeComment/${id}`,
            method: 'get',
            params: { courseId }
        })
    },

    //点赞回复的评论

    agreeReply(id, courseId) {
        return request({
            url: `/eduservice/commentfront/likeReply/${id}`,
            method: 'get',
            params: { courseId }
        })
    },

    //回复评论
    replyComment(reply) {
        return request({
            url: `/eduservice/commentfront/replyComment`,
            method: 'post',
            data: reply
        })
    },

    //回复评论
    replyReply(reply) {
        return request({
            url: `/eduservice/commentfront/replyReply`,
            method: 'post',
            data: reply
        })
    },

    //查询用户已经点赞过的评论
    getAgreeList(courseId) {
        return request({
            url: `/eduservice/commentfront/getAgreeList/${courseId}`,
            method: 'get',
        })
    },
}

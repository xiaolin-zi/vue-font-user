(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{492:function(t,c,e){"use strict";e(138);var r=e(97);c.a={getTeacherList:function(t,c){return Object(r.a)({url:"/eduservice/teacherfront/getTeacherFrontList/".concat(t,"/").concat(c),method:"post"})},getTeacherInfoById:function(t){return Object(r.a)({url:"/eduservice/teacherfront/getTeacherFrontInfo/".concat(t),method:"get"})}}},531:function(t,c,e){"use strict";e.r(c);e(54);var r=e(492),n={data:function(){return{teacherId:"",teacher:{},courseList:[]}},created:function(){this.teacherId=this.$route.params.id,this.init()},methods:{init:function(){var t=this;r.a.getTeacherInfoById(this.teacherId).then((function(c){t.teacher=c.data.data.teacher,t.courseList=c.data.data.courseList}))}}},l=e(23),component=Object(l.a)(n,(function(){var t=this,c=t._self._c;return c("div",{staticClass:"bg-fa of",attrs:{id:"aCoursesList"}},[c("section",{staticClass:"container"},[t._m(0),t._v(" "),c("div",{staticClass:"t-infor-wrap"},[c("section",{staticClass:"fl t-infor-box c-desc-content"},[c("div",{staticClass:"mt20 ml20"},[c("section",{staticClass:"t-infor-pic"},[c("img",{staticStyle:{width:"200px"},attrs:{src:t.teacher.avatar}})]),t._v(" "),c("h3",{staticClass:"hLh30"},[c("span",{staticClass:"fsize24 c-333"},[t._v(t._s(t.teacher.name)+" \n              "+t._s(1===t.teacher.level?"高级讲师":"首席讲师"))])]),t._v(" "),c("section",{staticClass:"mt10"},[c("span",{staticClass:"t-tag-bg"},[t._v(t._s(t.teacher.career))])]),t._v(" "),c("section",{staticClass:"t-infor-txt"},[c("p",{staticClass:"mt20"},[t._v("\n              "+t._s(t.teacher.intro)+"\n            ")])]),t._v(" "),c("div",{staticClass:"clear"})])]),t._v(" "),c("div",{staticClass:"clear"})]),t._v(" "),c("section",{staticClass:"mt30"},[c("div",[t._m(1),t._v(" "),0==t.courseList.length?c("section",{staticClass:"no-data-wrap"},[c("em",{staticClass:"icon30 no-data-ico"},[t._v(" ")]),t._v(" "),c("span",{staticClass:"c-666 fsize14 ml10 vam"},[t._v("没有相关数据，小编正在努力整理中...")])]):t._e(),t._v(" "),t.courseList.length>0?c("article",{staticClass:"comm-course-list"},[c("ul",{staticClass:"of"},t._l(t.courseList,(function(e){return c("li",{key:e.id},[c("div",{staticClass:"cc-l-wrap"},[c("section",{staticClass:"course-img"},[c("img",{staticClass:"img-responsive",attrs:{src:e.cover}}),t._v(" "),c("div",{staticClass:"cc-mask"},[c("a",{staticClass:"comm-btn c-btn-1",attrs:{href:"/course/".concat(e.id),title:"开始学习",target:"_blank"}},[t._v("开始学习")])])]),t._v(" "),c("h3",{staticClass:"hLh30 txtOf mt10"},[c("a",{staticClass:"course-title fsize18 c-333",attrs:{href:"/course/".concat(e.id),title:e.title,target:"_blank"}},[t._v(t._s(e.title))])])])])})),0),t._v(" "),c("div",{staticClass:"clear"})]):t._e()])])])])}),[function(){var t=this._self._c;return t("header",{staticClass:"comm-title"},[t("h2",{staticClass:"fl tac"},[t("span",{staticClass:"c-333"},[this._v("讲师介绍")])])])},function(){var t=this,c=t._self._c;return c("header",{staticClass:"comm-title all-teacher-title c-course-content"},[c("h2",{staticClass:"fl tac"},[c("span",{staticClass:"c-333"},[t._v("主讲课程")])]),t._v(" "),c("section",{staticClass:"c-tab-title"},[c("a",{attrs:{href:"javascript: void(0)"}},[t._v(" ")])])])}],!1,null,null,null);c.default=component.exports}}]);
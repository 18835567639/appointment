(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bd39614"],{"568b":function(t,s,i){},bb51:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"box"},[i("mt-header",{attrs:{title:"选择预约体检单位"}},[i("router-link",{attrs:{slot:"left",to:"/city"},slot:"left"},[i("mt-button",{attrs:{icon:"back"}},[t._v("返回")])],1)],1),i("ul",{staticClass:"list"},t._l(t.hospitalList,(function(s){return i("li",{staticClass:"lists",on:{click:function(i){return t.listClick(s.ID)}}},[i("div",{staticClass:"left"},[i("p",{staticClass:"p1"},[t._v(t._s(s.Name))]),i("p",{staticClass:"p2"},[t._v(t._s(s.Address))]),i("p",{staticClass:"p3"})])])})),0)],1)},e=[],o=i("76a0"),n=i("bc3a"),c={data:function(){return{loaded:!1,address:"",hospitalList:[],CityID:""}},methods:{listClick:function(t){this.$router.push({path:"/time",query:{listIndex:t}})},GetHospitalList:function(){var t=this;n({method:"post",url:"https://www.c65z45.cn/api/Reserve/GetHospitalList",data:{Token:"B68DE9D1F8584D7099BCE47144D0351C",CityID:this.CityID}}).then((function(s){o["Indicator"].close(),s.data.IsSuccess?(t.hospitalList=s.data.Data,console.log(t.hospitalList)):Object(o["Toast"])({message:"加载失败",position:"middle",duration:3e3})})).catch((function(t){o["Indicator"].close(),Object(o["Toast"])({message:"服务器错误",position:"middle",duration:3e3})}))}},created:function(){this.CityID=sessionStorage.getItem("CityID")},mounted:function(){o["Indicator"].open("加载中..."),this.GetHospitalList()}},l=c,r=(i("c60a"),i("2877")),u=Object(r["a"])(l,a,e,!1,null,"7b77b6f4",null);s["default"]=u.exports},c60a:function(t,s,i){"use strict";var a=i("568b"),e=i.n(a);e.a}}]);
//# sourceMappingURL=chunk-2bd39614.be04ac79.js.map
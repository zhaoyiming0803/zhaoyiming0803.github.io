(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"6GGG":function(e,t,n){"use strict";n.r(t);n("miYZ");var a,s,o=n("tsqr"),i=n("o0o1"),c=n.n(i),r=n("yXPU"),p=n.n(r),u=(n("g9YV"),n("wCAj")),l=(n("+L6B"),n("2/Rp")),d=(n("OaEy"),n("2fM7")),h=n("cDcd"),g=n.n(h),f=n("h74D"),y=d["a"].Option,C="coupon",m=e=>{var t=e[C],n=t.couponList,a=t.classify;return{couponList:n,classify:a}},w=e=>{return{getCouponList:t=>{e({type:"".concat(C,"/getCouponList"),payload:t})},getCouponClassify(){e({type:"".concat(C,"/getCouponClassify")})}}},L=(a=Object(f["connect"])(m,w),a(s=class extends g.a.Component{constructor(e){super(e),this.state={columns:[{title:"\u540d\u79f0",dataIndex:"coupon_name"},{title:"\u63cf\u8ff0",dataIndex:"coupon_explain"},{title:"\u5df2\u88ab\u62a2",dataIndex:"coupon_recived_num"},{title:"\u64cd\u4f5c",render:e=>{return g.a.createElement("div",null,g.a.createElement(l["a"],{type:"danger",icon:"delete",shape:"circle",onClick:()=>this.deleteCoupon()}))}}],page:1,classifyId:1}}componentDidMount(){this.props.getCouponClassify(),this._getCouponList()}_getCouponList(){this.props.getCouponList({page:this.state.page,classifyId:this.state.classifyId})}render(){return g.a.createElement("div",null,g.a.createElement(d["a"],{showSearch:!0,style:{width:200},placeholder:"\u8bf7\u9009\u62e9\u4f18\u60e0\u5238\u5206\u7c7b",defaultValue:this.state.classifyId,onChange:this.changeClassify.bind(this)},this.props.classify.map(e=>g.a.createElement(y,{value:e.id,key:e.id},e.classify_name))),g.a.createElement(u["a"],{columns:this.state.columns,dataSource:this.props.couponList,rowKey:"id",pagination:{defaultCurrent:1,onChange:this.changePage.bind(this)}}))}changePage(e){var t=this;return p()(c.a.mark(function n(){return c.a.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.setState(t=>{return{page:e}});case 2:t._getCouponList();case 3:case"end":return n.stop()}},n)}))()}changeClassify(e){var t=this;return p()(c.a.mark(function n(){return c.a.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.setState(t=>{return{classifyId:e}});case 2:t._getCouponList();case 3:case"end":return n.stop()}},n)}))()}deleteCoupon(){o["a"].info("\u5df2\u5220\u9664")}})||s);t["default"]=L}}]);
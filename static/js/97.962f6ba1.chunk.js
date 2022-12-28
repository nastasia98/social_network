"use strict";(self.webpackChunkreact_s_nulya_1=self.webpackChunkreact_s_nulya_1||[]).push([[97],{97:function(s,t,e){e.r(t),e.d(t,{default:function(){return z}});var r=e(1413),o=e(5671),n=e(3144),i=e(136),a=e(516),u=e(2791),l="ProfileInfo_descriptionBlock__ip1db",c="ProfileInfo_avatar__WPXUr",d="ProfileInfo_info__A70Eg",p="ProfileInfo_contacts__k5C1Q",f="ProfileInfo_status__-1WOC",h=e(9732),x=e(885),j=e(184),v=function(s){var t=(0,u.useState)(!1),e=(0,x.Z)(t,2),r=e[0],o=e[1],n=(0,u.useState)(s.status),i=(0,x.Z)(n,2),a=i[0],l=i[1];(0,u.useEffect)((function(){l(s.status)}),[s.status]);return(0,j.jsxs)("div",{children:[!r&&(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"Status: "}),(0,j.jsx)("span",{onDoubleClick:function(){o(!0)},children:s.status||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441"})]}),r&&(0,j.jsx)("div",{children:(0,j.jsx)("input",{onChange:function(s){l(s.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),s.updateStatus(a)},value:a})})]})},m=e(6222),P=function(s){var t=s.contactTitle,e=s.contactValue;return(0,j.jsxs)("div",{className:p,children:[(0,j.jsxs)("b",{children:[t,": "]}),e]})},_=function(s){return(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"My full name: "})," ",s.profile.fullName]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"About me: "}),s.profile.aboutMe]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"Looking for a job: "}),s.profile.lookingForAJob?"Yes":"No"]}),s.profile.lookingForAJob&&(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"My professional skills: "}),s.profile.lookingForAJobDescription]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"My contacts: "}),Object.keys(s.profile.contacts).map((function(t){return(0,j.jsx)(P,{contactTitle:t,contactValue:s.profile.contacts[t]},t)}))]})]})},k=function(s){var t=(0,u.useState)(!1),e=(0,x.Z)(t,2),r=e[0],o=e[1];return(0,j.jsxs)("div",{children:[(0,j.jsx)("button",{onClick:function(){return o(!r)},children:r?"Hide":"Show additional information"}),r&&(0,j.jsx)(_,{profile:s.props.profile})]})},g=function(s){if(!s.profile)return(0,j.jsx)(h.Z,{});return(0,j.jsx)("div",{children:(0,j.jsxs)("div",{className:l,children:[(0,j.jsx)("img",{src:s.profile.photos.large||m,className:c,alt:"photo"}),s.isOwner&&(0,j.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&s.savePhoto(t.target.files[0])}}),(0,j.jsxs)("div",{className:d,children:[(0,j.jsx)(v,{className:f,status:s.status,updateStatus:s.updateStatus}),k((0,j.jsx)(_,{profile:s.profile}))]})]})})},b="MyPosts_postsBlock__CC5te",C="MyPosts_posts__HCtTI",S="Post_item__GBEvF",y=function(s){return(0,j.jsxs)("div",{className:S,children:[(0,j.jsx)("img",{src:s.avatar,alt:"avatar"}),s.message,(0,j.jsx)("div",{children:(0,j.jsxs)("span",{children:["like: ",s.likes]})})]})},T=e(6139),Z=e(704),I=e(5304),N=e(3196),w=(0,I.D)(10),A=(0,Z.Z)({form:"ProfileAddNewPostForm"})((function(s){return(0,j.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,j.jsx)("div",{children:(0,j.jsx)(T.Z,{component:N.g,name:"newPostText",placeholder:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u043f\u043e\u0441\u0442\u0430",validate:[I.d,w]})}),(0,j.jsx)("div",{children:(0,j.jsx)("button",{children:"Add post"})})]})})),M=u.memo((function(s){var t=s.posts.map((function(s){return(0,j.jsx)(y,{message:s.message,likes:s.likes,avatar:s.avatar})}));return(0,j.jsxs)("div",{className:b,children:[(0,j.jsx)("h3",{children:"My posts"}),(0,j.jsx)(A,{onSubmit:function(t){s.addPost(t.newPostText)}}),(0,j.jsx)("div",{className:C,children:t})]})})),D=e(8687),O=e(6868),F=(0,D.$j)((function(s){return{posts:s.profilePage.posts,newPostText:s.profilePage.newPostText}}),(function(s){return{addPost:function(t){s((0,O.WA)(t))}}}))(M),U=function(s){return(0,j.jsxs)("div",{children:[(0,j.jsx)(g,{isOwner:s.isOwner,profile:s.profile,status:s.status,updateStatus:s.updateStatus,savePhoto:s.savePhoto}),(0,j.jsx)(F,{store:s.store})]})},B=e(7689),J=e(1548),E=function(s){(0,i.Z)(e,s);var t=(0,a.Z)(e);function e(){return(0,o.Z)(this,e),t.apply(this,arguments)}return(0,n.Z)(e,[{key:"refreshProfile",value:function(){var s=this.props.params.userId;s||(s=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getProfileThunkCreator(s),this.props.getStatusThunkCreator(s)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(s,t,e){this.props.params.userId!=s.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,j.jsx)("div",{children:(0,j.jsx)(U,(0,r.Z)((0,r.Z)({},this.props),{},{isOwner:!this.props.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatusThunkCreator,savePhoto:this.props.savePhoto}))})}}]),e}(u.Component),W=(0,J.D)(E),z=(0,D.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,authorizedUserId:s.auth.id,isAuth:s.auth.isAuth}}),{getProfileThunkCreator:O.aI,getStatusThunkCreator:O.xD,updateStatusThunkCreator:O.NN,savePhoto:O.Ju})((function(s){return(0,j.jsx)(W,(0,r.Z)((0,r.Z)({},s),{},{params:(0,B.UO)()}))}))}}]);
//# sourceMappingURL=97.962f6ba1.chunk.js.map
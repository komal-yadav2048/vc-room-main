(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[6],{450:function(e,t){},452:function(e,t){},473:function(e,t,n){"use strict";n.r(t);var o=n(8),i=n(14),r=n(150),a=n(116),c=n(317),s=n(141),l=n(95),d=n(155),u=n(460),b=n.n(u),h=n(462),f=n.n(h),m=n(461),g=n.n(m),j=n(11),p=n.n(j),v=n(24),O=n(0),y=n(19),x=n(23),w=n(429),k=n.n(w),R=n(71),N=n(37),S=n(4),V=function(){var e=Object(N.g)(),t=Object(y.useSelector)((function(e){var t;return null===(t=e.call.activeCall)||void 0===t?void 0:t.callDocId})),n=Object(y.useSelector)((function(e){return e.call.isReceivingCall})),i=Object(O.useRef)(),r=Object(O.useRef)(),a=Object(O.useState)(!1),c=Object(o.a)(a,2),s=c[0],d=c[1],u=Object(O.useState)(),b=Object(o.a)(u,2),h=b[0],f=b[1],m=Object(O.useState)(!0),g=Object(o.a)(m,2),j=g[0],w=g[1],V=Object(O.useRef)(new k.a),C=Object(O.useState)(!0),E=Object(o.a)(C,2),I=E[0],T=E[1],D=Object(O.useState)(!0),A=Object(o.a)(D,2),U=A[0],L=A[1],P=function(){var e=Object(v.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 3:t=e.sent,f(t),i.current.srcObject=t,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(O.useEffect)((function(){return!h&&t&&P(),(null===t||void 0===t?void 0:t.length)||(e.push("/dashboard"),R.b.error("No call found")),function(){null===h||void 0===h||h.getTracks().forEach((function(e){e.stop()}))}}),[h,t,e]),Object(O.useEffect)((function(){return t&&h&&(n?(V.current=new k.a({initiator:!1,trickle:!1,stream:h}),V.current.on("signal",(function(e){x.b.collection("calls").doc(t).collection("receiver").add(e)})),x.b.collection("calls").doc(t).collection("sender").onSnapshot((function(e){e.docChanges().forEach((function(e){if("added"===e.type&&!V.current.destroyed){var t=e.doc.data();V.current.signal(t)}}))})),V.current.on("stream",(function(e){console.log("Stream Received"),d(!0),R.b.success("Connected Successfully"),r.current.srcObject=e}))):(V.current=new k.a({initiator:!0,trickle:!1,stream:h}),V.current.on("signal",(function(e){x.b.collection("calls").doc(t).collection("sender").add(e)})),x.b.collection("calls").doc(t).collection("receiver").onSnapshot((function(e){e.docChanges().forEach((function(e){if("added"===e.type&&!V.current.destroyed){var t=e.doc.data();V.current.signal(t)}}))})),V.current.on("stream",(function(e){console.log("Stream Received"),d(!0),r.current.srcObject=e}))),V.current.on("data",(function(e){var t=(new TextDecoder).decode(e),n=JSON.parse(t),o=n.message,i=void 0===o?void 0:o,r=n.isVideoEnabled,a=void 0===r?void 0:r;void 0!==a&&w(a),i&&R.b.loading((function(e){return Object(S.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(S.jsx)("p",{children:i}),Object(S.jsx)(l.a,{style:{display:"inline-block"},color:"secondary",onClick:function(){return R.b.dismiss(e.id)},children:"\u274c"})]})}),{position:"top-right",icon:"\ud83d\udce9",duration:5e3})})),V.current.on("error",(function(){R.b.error("Something bad happened, retry call"),e.push("/dashboard")})),V.current.on("close",(function(){R.b.error("Disconnected"),e.push("/dashboard")})),V.current.addListener("end",(function(){R.b.error("Disconnected"),e.push("/dashboard")})),V.current._pc.oniceconnectionstatechange=function(){"disconnected"===V.current._pc.iceConnectionState&&e.push("/dashboard")}),function(){var e,t;null===(e=V.current)||void 0===e||e.removeAllListeners(),null===(t=V.current)||void 0===t||t.destroy(),V.current=null}}),[t,n,h,e]),Object(O.useEffect)((function(){var e;return s?(R.b.dismiss(e),R.b.success("Connected Successfully")):e=R.b.loading("Connecting..."),function(){e&&R.b.dismiss(e)}}),[s]),{localVideoRef:i,remoteVideoRef:r,isRemoteStreamAvailable:s,peerRef:V,isReceivingCall:n,toggleAudio:function(){h&&(h.getAudioTracks()[0].enabled=!h.getAudioTracks()[0].enabled,T(h.getAudioTracks()[0].enabled))},toggleVideo:function(){h&&(h.getVideoTracks()[0].enabled=!h.getVideoTracks()[0].enabled,L(h.getVideoTracks()[0].enabled),V.current.send(JSON.stringify({isVideoEnabled:h.getVideoTracks()[0].enabled})))},isAudioEnabled:I,isVideoEnabled:U,isRemoteStreamVideoEnabled:j,sendMessage:function(e){V.current&&!V.current.destroyed&&V.current.send(JSON.stringify({message:e}))}}},C=Object(r.a)((function(e){return{root:Object(i.a)({flex:1,display:"flex",flexDirection:"column",position:"relative",marginTop:"7rem",width:"100%",justifyContent:"center",alignItems:"center"},e.breakpoints.down("sm"),{marginTop:"10vh",gap:"1rem"}),callContainer:Object(i.a)({width:"80%",height:"70vh"},e.breakpoints.down("sm"),{width:"100%",height:"75vh",display:"flex",flexDirection:"column",justifyContent:"center"}),streams:Object(i.a)({display:"flex",gap:"2rem",height:"80%",justifyContent:"center"},e.breakpoints.down("sm"),{flexDirection:"column",width:"100%",gap:"0.5rem"}),stream:{position:"relative",height:"100%",flex:1,overflow:"hidden",maxWidth:"700px","& > video":{height:"100%",width:"100%",objectFit:"cover"}},userInfo:{position:"absolute",bottom:0,left:0,width:"100%",background:"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.98) 100%)",padding:"1rem",display:"flex",gap:"1rem",alignItems:"center"},mutedVideoUserInfo:{position:"absolute",bottom:0,left:0,width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"1rem"},mutedVideoAvatar:{height:100,width:100},controlls:{width:"100%",display:"flex",justifyContent:"center",marginTop:"2rem",gap:"1rem"},buttonIcon:{width:"2rem",height:"2rem"},hiddenVideo:{display:"none"},strikeThrough:{clipPath:"polygon(95% 0, 100% 5%, 5% 100%, 0 95%)",background:e.palette.secondary.main,width:"100%",height:"100%",position:"absolute",top:0,left:0},textField:Object(i.a)({width:"100%",maxWidth:"400px",position:"absolute",bottom:"10px",right:"0"},e.breakpoints.down("sm"),{position:"relative",bottom:"0",right:"0",width:"100%",maxWidth:"100%"})}}));t.default=function(){var e=C(),t=Object(y.useSelector)((function(e){var t;return null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.userData})),n=Object(O.useState)({otherPhotoURL:"",otherDisplayName:""}),i=Object(o.a)(n,2),r=i[0],u=i[1],h=t||{photoURL:"",displayName:""},m=h.photoURL,j=h.displayName,p=r||{otherPhotoURL:"",otherDisplayName:""},v=p.otherPhotoURL,w=p.otherDisplayName,k=V(),N=k.localVideoRef,E=k.remoteVideoRef,I=k.isRemoteStreamAvailable,T=k.peerRef,D=k.isReceivingCall,A=k.toggleAudio,U=k.toggleVideo,L=k.isAudioEnabled,P=k.isVideoEnabled,W=k.isRemoteStreamVideoEnabled,J=k.sendMessage,M=Object(y.useSelector)((function(e){return e.call.activeCall}));return Object(O.useEffect)((function(){if(M){var e=D?M.from:M.userOnOtherSide;x.b.collection("users").doc(e).get().then((function(e){var t=e.data(),n=t.photoURL,o=t.displayName;u({otherPhotoURL:n,otherDisplayName:o})}))}}),[M,D]),Object(S.jsxs)("div",{className:e.root,children:[Object(S.jsxs)("div",{className:e.callContainer,children:[Object(S.jsxs)("div",{className:e.streams,children:[Object(S.jsxs)(a.a,{elevation:5,className:"".concat(I?e.stream:e.hiddenVideo),children:[Object(S.jsx)("video",{ref:E,autoPlay:!0,playsInline:!0}),Object(S.jsxs)("div",{className:W?e.userInfo:e.mutedVideoUserInfo,children:[Object(S.jsx)(c.a,{src:v,alt:"profilePhoto",className:W?"":e.mutedVideoAvatar}),Object(S.jsx)(s.a,{variant:"h6",children:w})]})]}),Object(S.jsxs)(a.a,{elevation:5,className:e.stream,children:[Object(S.jsx)("video",{style:{transform:"scaleX(-1)"},ref:N,muted:!0,autoPlay:!0,playsInline:!0}),Object(S.jsxs)("div",{className:P?e.userInfo:e.mutedVideoUserInfo,children:[Object(S.jsx)(c.a,{src:m,alt:"profilePhoto",className:P?"":e.mutedVideoAvatar}),Object(S.jsx)(s.a,{variant:"h6",children:j})]})]})]}),Object(S.jsxs)("div",{className:e.controlls,children:[Object(S.jsxs)(l.a,{style:{borderRadius:"50%",width:"4rem",height:"4rem",minWidth:"0px",position:"relative",overflow:"hidden"},variant:"outlined",color:L?"primary":"secondary",onClick:A,disableElevation:!L,children:[Object(S.jsx)(b.a,{className:e.buttonIcon}),Object(S.jsx)("div",{className:L?"":e.strikeThrough})]}),Object(S.jsxs)(l.a,{style:{borderRadius:"50%",width:"4rem",height:"4rem",minWidth:"0px",position:"relative",overflow:"hidden"},variant:"outlined",color:P?"primary":"secondary",onClick:U,disableElevation:!P,children:[Object(S.jsx)(g.a,{className:e.buttonIcon}),Object(S.jsx)("div",{className:P?"":e.strikeThrough})]}),Object(S.jsx)(l.a,{style:{borderRadius:"50%",width:"4rem",height:"4rem",minWidth:"0px"},variant:"outlined",color:"secondary",onClick:function(){T.current.destroy()},children:Object(S.jsx)(f.a,{className:e.buttonIcon})})]})]}),Object(S.jsx)(d.a,{className:e.textField,label:"Type a message",variant:"standard",onKeyDown:function(e){if("Enter"===e.key){if(""===e.target.value.trim())return;if(e.target.value.trim().length>50)return R.b.error("Message is too long"),void(e.target.value="");J(e.target.value),e.target.value=""}}})]})}}}]);
//# sourceMappingURL=6.11b1dc21.chunk.js.map
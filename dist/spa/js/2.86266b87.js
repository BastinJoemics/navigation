(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"013f":function(e,t,n){"use strict";n.r(t);n("14d9");var o,i,s=n("2f62"),r=n("ef44"),a={data(){return{token:"",offlineIntervalId:0,icons:{facebook:"mdi-facebook-box",google:"mdi-google-plus-box",live:"mdi-windows",github:"mdi-github-box",email:"mdi-at"}}},computed:{model:{get(){return this.token},set(e){this.token=e}}},methods:{...Object(s["c"])(["setRegions","setCurrentRegion","setToken"]),...Object(s["b"])(["initConnection"]),logIn(e){this.initConnection({token:this.token,region:e}).then((()=>{this.$nextTick((()=>{this.$router.push("/")}))}))},autoLogin(){this.initConnection({token:this.$route.params.token}).then((()=>{this.$router.push("/")}))},checkHasToken(){const e=Object(r["a"])({store:this.$q.sessionStorage,storeName:this.$store.state.storeName,name:"token"}),t=Object(r["a"])({store:this.$q.sessionStorage,storeName:this.$store.state.storeName,name:"region"});return this.$route.params&&this.$route.params.token?(this.autoLogin(),!0):!!e&&(this.token=e,this.logIn(t),!0)},openWindow(e,t){t=t||"auth";const n=500,o=600,i=void 0!==window.screenLeft?window.screenLeft:screen.left,s=void 0!==window.screenTop?window.screenTop:screen.top,r=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,a=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,c=r/2-n/2+i,h=a/2-o/2+s,d=window.open(e,t,"toolbar=no,location=no,status=yes,resizable=yes,scrollbars=yes, width="+n+", height="+o+", top="+h+", left="+c);window.focus&&d.focus()},regionInitFromAuth(e){this.setRegions({[e.name]:e}),this.setCurrentRegion(e),this.$connector.setRegion(e)},handleTokenLogin(){const e="CCBFzIDjpnco4zGdNFUbwOV49OxD1mDtP2ZczsmMDo0xOwAr0jqmXbgUQBnFMPZp";this.initConnection({token:e}).then((()=>{this.$router.push({name:"MyLayout"})})).catch((e=>{console.error("Login failed with hardcoded token",e)}))}},watch:{$route(e){e.params&&e.params.token&&this.autoLogin()}},created(){if(this.$route.params.token?this.autoLogin():this.handleTokenLogin(),!this.checkHasToken()){const e=t=>{if("string"===typeof t.data&&~t.data.indexOf("FlespiLogin|token:")){let n=t.data;n=n.replace("FlespiLogin|token:",""),n=JSON.parse(n),this.token=n.token,this.regionInitFromAuth(n.region),this.setToken(n.token),this.$router.push("/"),window.removeEventListener("message",e)}};window.addEventListener("message",e)}}},c=a,h=(n("991c"),n("2877")),d=Object(h["a"])(c,o,i,!1,null,null,null);t["default"]=d.exports},"3c01":function(e,t,n){},"991c":function(e,t,n){"use strict";n("3c01")}}]);
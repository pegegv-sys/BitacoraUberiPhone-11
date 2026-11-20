(()=>{var Ku=0,kc=1,ju=2;var eo=1,ka=2,Zs=3,Gi=0,gn=1,Te=2,os=0,Js=1,yi=2,Vc=3,Wc=4,Qu=5;var as=100,tf=101,ef=102,nf=103,sf=104,rf=200,of=201,af=202,lf=203,Xc=204,qc=205,cf=206,hf=207,uf=208,ff=209,df=210,pf=211,mf=212,gf=213,xf=214,sa=0,ra=1,oa=2,Ns=3,aa=4,la=5,ca=6,ha=7,Va=0,_f=1,vf=2,ei=0,Yc=1,Zc=2,Jc=3,$c=4,Kc=5,jc=6,Qc=7;var th=300,ls=301,$s=302,Wa=303,Xa=304,di=1e3,Jn=1001,ua=1002,je=1003,yf=1004;var no=1005;var pn=1006,qa=1007;var Mi=1008;var Sn=1009,eh=1010,nh=1011,Ks=1012,Ya=1013,Vn=1014,Un=1015,Wn=1016,Za=1017,Ja=1018,cs=1020,ih=35902,sh=35899,rh=1021,oh=1022,Xn=1023,pi=1026,Si=1027,$a=1028,Ka=1029,ki=1030,ja=1031;var Qa=1033,io=33776,so=33777,ro=33778,oo=33779,tl=35840,el=35841,nl=35842,il=35843,sl=36196,rl=37492,ol=37496,al=37488,ll=37489,ao=37490,cl=37491,hl=37808,ul=37809,fl=37810,dl=37811,pl=37812,ml=37813,gl=37814,xl=37815,_l=37816,vl=37817,yl=37818,Ml=37819,Sl=37820,El=37821,bl=36492,Tl=36494,wl=36495,Al=36283,Rl=36284,lo=36285,Cl=36286;var yr=2300,fa=2301,na=2302,Pc=2303,Lc=2400,Dc=2401,Nc=2402;var Mf=3200;var Il=0,Sf=1,Ei="",Ue="srgb",Mr="srgb-linear",Sr="linear",Se="srgb";var ia=7680;var Ef=519,bf=512,Tf=513,wf=514,ah=515,Af=516,Rf=517,lh=518,ch=519,hh=35044;var uh="300 es",Dn=2e3,Us=2001;function lp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function cp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cf(){let i=Er("canvas");return i.style.display="block",i}var du={},Fs=null;function br(...i){let t="THREE."+i.shift();Fs?Fs("log",t,...i):console.log(t,...i)}function If(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function jt(...i){i=If(i);let t="THREE."+i.shift();if(Fs)Fs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ee(...i){i=If(i);let t="THREE."+i.shift();if(Fs)Fs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function xr(...i){let t=i.join(" ");t in du||(du[t]=!0,jt(...i))}function Pf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Lf={[sa]:sa,[oa]:ca,[aa]:aa,[Ns]:la,[ra]:ra,[ca]:oa,[ha]:ha,[la]:Ns},Kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var sc=Math.PI/180,da=180/Math.PI;function Vi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function ue(i,t,e){return Math.max(t,Math.min(e,i))}function hp(i,t){return(i%t+t)%t}function rc(i,t,e){return(1-e)*i+e*t}function Df(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Pl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Nf(i,t){if(t.constructor===Float32Array)return i;let e=Pl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Uf(i,t){if(t.constructor===Float32Array)return i;let e=Pl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var xt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],p=r[o+2],S=r[o+3];if(u!==S||l!==f||c!==d||h!==p){let x=l*f+c*d+h*p+u*S;x<0&&(f=-f,d=-d,p=-p,S=-S,x=-x);let m=1-a;if(x<.9995){let M=Math.acos(x),y=Math.sin(M);m=Math.sin(m*M)/y,a=Math.sin(a*M)/y,l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+S*a}else{l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+S*a;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return oc.copy(this).projectOnVector(t),this.sub(oc)}reflect(t){return this.sub(oc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},oc=new N,pu=new We,ne=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],S=s[0],x=s[3],m=s[6],M=s[1],y=s[4],_=s[7],b=s[2],E=s[5],g=s[8];return r[0]=o*S+a*M+l*b,r[3]=o*x+a*y+l*E,r[6]=o*m+a*_+l*g,r[1]=c*S+h*M+u*b,r[4]=c*x+h*y+u*E,r[7]=c*m+h*_+u*g,r[2]=f*S+d*M+p*b,r[5]=f*x+d*y+p*E,r[8]=f*m+d*_+p*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=e*u+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/p;return t[0]=u*S,t[1]=(s*c-h*n)*S,t[2]=(a*n-s*o)*S,t[3]=f*S,t[4]=(h*e-s*l)*S,t[5]=(s*r-a*e)*S,t[6]=d*S,t[7]=(n*l-c*e)*S,t[8]=(o*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return xr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ac.makeScale(t,e)),this}rotate(t){return xr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ac.makeRotation(-t)),this}translate(t,e){return xr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ac.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ac=new ne,mu=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gu=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function up(){let i={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Se&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Se&&(s.r=Ds(s.r),s.g=Ds(s.g),s.b=Ds(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ei?Sr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mr]:{primaries:t,whitePoint:n,transfer:Sr,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),i}var me=up();function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ms,pa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ms===void 0&&(ms=Er("canvas")),ms.width=t.width,ms.height=t.height;let s=ms.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ms}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Er("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=fi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fi(e[n]/255)*255):e[n]=fi(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},fp=0,Os=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Vi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(lc(s[o].image)):r.push(lc(s[o]))}else r=lc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function lc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}var dp=0,cc=new N,mn=class i extends Kn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Jn,s=Jn,r=pn,o=Mi,a=Xn,l=Sn,c=i.DEFAULT_ANISOTROPY,h=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Vi(),this.name="",this.source=new Os(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(cc).x}get height(){return this.source.getSize(cc).y}get depth(){return this.source.getSize(cc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case di:t.x=t.x-Math.floor(t.x);break;case Jn:t.x=t.x<0?0:1;break;case ua:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case di:t.y=t.y-Math.floor(t.y);break;case Jn:t.y=t.y<0?0:1;break;case ua:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=th;mn.DEFAULT_ANISOTROPY=1;var Fe=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],S=l[2],x=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-S)<.01&&Math.abs(p-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+S)<.1&&Math.abs(p+x)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,_=(d+1)/2,b=(m+1)/2,E=(h+f)/4,g=(u+S)/4,v=(p+x)/4;return y>_&&y>b?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=g/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=v/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=g/r,s=v/r),this.set(n,s,r,e),this}let M=Math.sqrt((x-p)*(x-p)+(u-S)*(u-S)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(x-p)/M,this.y=(u-S)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this.w=ue(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this.w=ue(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ma=class extends Kn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new mn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Os(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends ma{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Tr=class extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ga=class extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var re=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,p,S,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,p,S,x)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,p,S,x){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=S,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/gs.setFromMatrixColumn(t,0).length(),r=1/gs.setFromMatrixColumn(t,1).length(),o=1/gs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,p=a*h,S=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-S*c,e[9]=-a*l,e[2]=S-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,S=c*u;e[0]=f+S*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=S+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,S=c*u;e[0]=f-S*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=S-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,p=a*h,S=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+S,e[1]=l*u,e[5]=S*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,S=a*c;e[0]=l*h,e[4]=S-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-S*u}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,S=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+S,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=S*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pp,t,mp)}lookAt(t,e,n){let s=this.elements;return wn.subVectors(t,e),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Pi.crossVectors(n,wn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Pi.crossVectors(n,wn)),Pi.normalize(),Ro.crossVectors(wn,Pi),s[0]=Pi.x,s[4]=Ro.x,s[8]=wn.x,s[1]=Pi.y,s[5]=Ro.y,s[9]=wn.y,s[2]=Pi.z,s[6]=Ro.z,s[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],S=n[6],x=n[10],m=n[14],M=n[3],y=n[7],_=n[11],b=n[15],E=s[0],g=s[4],v=s[8],R=s[12],A=s[1],I=s[5],L=s[9],B=s[13],P=s[2],H=s[6],q=s[10],Y=s[14],ft=s[3],j=s[7],G=s[11],J=s[15];return r[0]=o*E+a*A+l*P+c*ft,r[4]=o*g+a*I+l*H+c*j,r[8]=o*v+a*L+l*q+c*G,r[12]=o*R+a*B+l*Y+c*J,r[1]=h*E+u*A+f*P+d*ft,r[5]=h*g+u*I+f*H+d*j,r[9]=h*v+u*L+f*q+d*G,r[13]=h*R+u*B+f*Y+d*J,r[2]=p*E+S*A+x*P+m*ft,r[6]=p*g+S*I+x*H+m*j,r[10]=p*v+S*L+x*q+m*G,r[14]=p*R+S*B+x*Y+m*J,r[3]=M*E+y*A+_*P+b*ft,r[7]=M*g+y*I+_*H+b*j,r[11]=M*v+y*L+_*q+b*G,r[15]=M*R+y*B+_*Y+b*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],S=t[7],x=t[11],m=t[15],M=l*d-c*f,y=a*d-c*u,_=a*f-l*u,b=o*d-c*h,E=o*f-l*h,g=o*u-a*h;return e*(S*M-x*y+m*_)-n*(p*M-x*b+m*E)+s*(p*y-S*b+m*g)-r*(p*_-S*E+x*g)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],S=t[13],x=t[14],m=t[15],M=e*a-n*o,y=e*l-s*o,_=e*c-r*o,b=n*l-s*a,E=n*c-r*a,g=s*c-r*l,v=h*S-u*p,R=h*x-f*p,A=h*m-d*p,I=u*x-f*S,L=u*m-d*S,B=f*m-d*x,P=M*B-y*L+_*I+b*A-E*R+g*v;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/P;return t[0]=(a*B-l*L+c*I)*H,t[1]=(s*L-n*B-r*I)*H,t[2]=(S*g-x*E+m*b)*H,t[3]=(f*E-u*g-d*b)*H,t[4]=(l*A-o*B-c*R)*H,t[5]=(e*B-s*A+r*R)*H,t[6]=(x*_-p*g-m*y)*H,t[7]=(h*g-f*_+d*y)*H,t[8]=(o*L-a*A+c*v)*H,t[9]=(n*A-e*L-r*v)*H,t[10]=(p*E-S*_+m*M)*H,t[11]=(u*_-h*E-d*M)*H,t[12]=(a*R-o*I-l*v)*H,t[13]=(e*I-n*R+s*v)*H,t[14]=(S*y-p*b-x*M)*H,t[15]=(h*b-u*y+f*M)*H,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,S=o*h,x=o*u,m=a*u,M=l*c,y=l*h,_=l*u,b=n.x,E=n.y,g=n.z;return s[0]=(1-(S+m))*b,s[1]=(d+_)*b,s[2]=(p-y)*b,s[3]=0,s[4]=(d-_)*E,s[5]=(1-(f+m))*E,s[6]=(x+M)*E,s[7]=0,s[8]=(p+y)*g,s[9]=(x-M)*g,s[10]=(1-(f+S))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=gs.set(s[0],s[1],s[2]).length(),a=gs.set(s[4],s[5],s[6]).length(),l=gs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),zn.copy(this);let c=1/o,h=1/a,u=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,e.setFromRotationMatrix(zn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Dn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),p,S;if(l)p=r/(o-r),S=o*r/(o-r);else if(a===Dn)p=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===Us)p=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Dn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),p,S;if(l)p=1/(o-r),S=o/(o-r);else if(a===Dn)p=-2/(o-r),S=-(o+r)/(o-r);else if(a===Us)p=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},gs=new N,zn=new re,pp=new N(0,0,0),mp=new N(1,1,1),Pi=new N,Ro=new N,wn=new N,xu=new re,_u=new We,mi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ue(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _u.setFromEuler(this),this.setFromQuaternion(_u,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mi.DEFAULT_ORDER="XYZ";var wr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gp=0,vu=new N,xs=new We,oi=new re,Co=new N,or=new N,xp=new N,_p=new We,yu=new N(1,0,0),Mu=new N(0,1,0),Su=new N(0,0,1),Eu={type:"added"},vp={type:"removed"},_s={type:"childadded",child:null},hc={type:"childremoved",child:null},Qe=class i extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new mi,n=new We,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new ne}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis(yu,t)}rotateY(t){return this.rotateOnAxis(Mu,t)}rotateZ(t){return this.rotateOnAxis(Su,t)}translateOnAxis(t,e){return vu.copy(t).applyQuaternion(this.quaternion),this.position.add(vu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yu,t)}translateY(t){return this.translateOnAxis(Mu,t)}translateZ(t){return this.translateOnAxis(Su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Co.copy(t):Co.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(or,Co,this.up):oi.lookAt(Co,or,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(oi),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Eu),_s.child=t,this.dispatchEvent(_s),_s.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vp),hc.child=t,this.dispatchEvent(hc),hc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Eu),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,t,xp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,_p,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Qe.DEFAULT_UP=new N(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ve=class extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},yp={type:"move"},Bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let S of t.hand.values()){let x=e.getJointPose(S,n),m=this._getHandJoint(c,S);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Io={h:0,s:0,l:0};function uc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var oe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=me.workingColorSpace){if(t=hp(t,1),e=ue(e,0,1),n=ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=uc(o,r,t+1/3),this.g=uc(o,r,t),this.b=uc(o,r,t-1/3)}return me.colorSpaceToWorking(this,s),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){let n=Ff[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}copyLinearToSRGB(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return me.workingToColorSpace(ln.copy(this),t),Math.round(ue(ln.r*255,0,255))*65536+Math.round(ue(ln.g*255,0,255))*256+Math.round(ue(ln.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.workingToColorSpace(ln.copy(this),e);let n=ln.r,s=ln.g,r=ln.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.workingToColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=Ue){me.workingToColorSpace(ln.copy(this),t);let e=ln.r,n=ln.g,s=ln.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+e,Li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Li),t.getHSL(Io);let n=rc(Li.h,Io.h,e),s=rc(Li.s,Io.s,e),r=rc(Li.l,Io.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new oe;oe.NAMES=Ff;var Ar=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new oe(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Rr=class extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Hn=new N,ai=new N,fc=new N,li=new N,vs=new N,ys=new N,bu=new N,dc=new N,pc=new N,mc=new N,gc=new Fe,xc=new Fe,_c=new Fe,ui=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Hn.subVectors(t,e),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Hn.subVectors(s,e),ai.subVectors(n,e),fc.subVectors(t,e);let o=Hn.dot(Hn),a=Hn.dot(ai),l=Hn.dot(fc),c=ai.dot(ai),h=ai.dot(fc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return gc.setScalar(0),xc.setScalar(0),_c.setScalar(0),gc.fromBufferAttribute(t,e),xc.fromBufferAttribute(t,n),_c.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(gc,r.x),o.addScaledVector(xc,r.y),o.addScaledVector(_c,r.z),o}static isFrontFacing(t,e,n,s){return Hn.subVectors(n,e),ai.subVectors(t,e),Hn.cross(ai).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Hn.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;vs.subVectors(s,n),ys.subVectors(r,n),dc.subVectors(t,n);let l=vs.dot(dc),c=ys.dot(dc);if(l<=0&&c<=0)return e.copy(n);pc.subVectors(t,s);let h=vs.dot(pc),u=ys.dot(pc);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(vs,o);mc.subVectors(t,r);let d=vs.dot(mc),p=ys.dot(mc);if(p>=0&&d<=p)return e.copy(r);let S=d*c-l*p;if(S<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(ys,a);let x=h*p-d*u;if(x<=0&&u-h>=0&&d-p>=0)return bu.subVectors(r,s),a=(u-h)/(u-h+(d-p)),e.copy(s).addScaledVector(bu,a);let m=1/(x+S+f);return o=S*m,a=f*m,e.copy(n).addScaledVector(vs,o).addScaledVector(ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},jn=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Po.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Po.copy(n.boundingBox)),Po.applyMatrix4(t.matrixWorld),this.union(Po)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ar),Lo.subVectors(this.max,ar),Ms.subVectors(t.a,ar),Ss.subVectors(t.b,ar),Es.subVectors(t.c,ar),Di.subVectors(Ss,Ms),Ni.subVectors(Es,Ss),ts.subVectors(Ms,Es);let e=[0,-Di.z,Di.y,0,-Ni.z,Ni.y,0,-ts.z,ts.y,Di.z,0,-Di.x,Ni.z,0,-Ni.x,ts.z,0,-ts.x,-Di.y,Di.x,0,-Ni.y,Ni.x,0,-ts.y,ts.x,0];return!vc(e,Ms,Ss,Es,Lo)||(e=[1,0,0,0,1,0,0,0,1],!vc(e,Ms,Ss,Es,Lo))?!1:(Do.crossVectors(Di,Ni),e=[Do.x,Do.y,Do.z],vc(e,Ms,Ss,Es,Lo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ci=[new N,new N,new N,new N,new N,new N,new N,new N],Gn=new N,Po=new jn,Ms=new N,Ss=new N,Es=new N,Di=new N,Ni=new N,ts=new N,ar=new N,Lo=new N,Do=new N,es=new N;function vc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){es.fromArray(i,r);let a=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),l=t.dot(es),c=e.dot(es),h=n.dot(es);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ke=new N,No=new xt,Mp=0,en=class extends Kn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hh,this.updateRanges=[],this.gpuType=Un,this.version=0,this._normalizationScale=t!==void 0?Pl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)No.fromBufferAttribute(this,e),No.applyMatrix3(t),this.setXY(e,No.x,No.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Nf(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Uf(t,this.array)}};var Cr=class extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ir=class extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ae=class extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}},Sp=new jn,lr=new N,yc=new N,gi=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Sp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;lr.subVectors(t,this.center);let e=lr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(lr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(lr.copy(t.center).add(yc)),this.expandByPoint(lr.copy(t.center).sub(yc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ep=0,Ln=new re,Mc=new Qe,bs=new N,An=new jn,cr=new jn,Ke=new N,Ce=class i extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lp(t)?Ir:Cr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,n){return Ln.makeTranslation(t,e,n),this.applyMatrix4(Ln),this}scale(t,e,n){return Ln.makeScale(t,e,n),this.applyMatrix4(Ln),this}lookAt(t){return Mc.lookAt(t),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ae(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];cr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(An.min,cr.min),An.expandByPoint(Ke),Ke.addVectors(An.max,cr.max),An.expandByPoint(Ke)):(An.expandByPoint(cr.min),An.expandByPoint(cr.max))}An.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ke));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ke.fromBufferAttribute(a,c),l&&(bs.fromBufferAttribute(t,c),Ke.add(bs)),s=Math.max(s,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new en(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)a[R]=new N,l[R]=new N;let h=new N,u=new N,f=new N,d=new xt,p=new xt,S=new xt,x=new N,m=new N;function M(R,A,I){c[R]=c[A]=c[I]=1,h.fromBufferAttribute(n,R),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,I),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,A),S.fromBufferAttribute(r,I),u.sub(h),f.sub(h),p.sub(d),S.sub(d);let L=1/(p.x*S.y-S.x*p.y);isFinite(L)&&(x.copy(u).multiplyScalar(S.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-S.x).multiplyScalar(L),a[R].add(x),a[A].add(x),a[I].add(x),l[R].add(m),l[A].add(m),l[I].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,A=y.length;R<A;++R){let I=y[R],L=I.start,B=I.count;for(let P=L,H=L+B;P<H;P+=3)M(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let _=new N,b=new N,E=new N,g=new N;function v(R){E.fromBufferAttribute(s,R),g.copy(E);let A=a[R];_.copy(A),_.sub(E.multiplyScalar(E.dot(A))).normalize(),b.crossVectors(g,A);let L=b.dot(l[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,L)}for(let R=0,A=n.count;R<A;++R)c[R]&&v(R);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),S=t.getX(f+1),x=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,S),o.fromBufferAttribute(e,x),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,x),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let S=0,x=l.length;S<x;S++){a.isInterleavedBufferAttribute?d=l[S]*a.data.stride+a.offset:d=l[S]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new en(f,h,u)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=hh,this.updateRanges=[],this.version=0,this.uuid=Vi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Tu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Tu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Tu(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Vi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var fn=new N,zs=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?Pl(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix4(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyNormalMatrix(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.transformDirection(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){br("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new en(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){br("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Nf(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Uf(t,this.data.array)}},Sc=new N,bp=new N,Tp=new ne,kn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Sc.subVectors(n,e).cross(bp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Sc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Tp.getNormalMatrix(t),s=this.coplanarPoint(Sc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},wp=0,Qn=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=Js,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xc,this.blendDst=qc,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ef,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ia,this.stencilZFail=ia,this.stencilZPass=ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new oe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new kn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new xt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},xi=class extends Qn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ts,hr=new N,ws=new N,As=new N,Rs=new xt,ur=new xt,Of=new re,Uo=new N,fr=new N,Fo=new N,wu=new xt,Ec=new xt,Au=new xt,Fi=class extends Qe{constructor(t=new xi){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new Ce;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Pr(e,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new zs(n,3,0,!1)),Ts.setAttribute("uv",new zs(n,2,3,!1))}this.geometry=Ts,this.material=t,this.center=new xt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ee('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ws.setFromMatrixScale(this.matrixWorld),Of.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ws.multiplyScalar(-As.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Oo(Uo.set(-.5,-.5,0),As,o,ws,s,r),Oo(fr.set(.5,-.5,0),As,o,ws,s,r),Oo(Fo.set(.5,.5,0),As,o,ws,s,r),wu.set(0,0),Ec.set(1,0),Au.set(1,1);let a=t.ray.intersectTriangle(Uo,fr,Fo,!1,hr);if(a===null&&(Oo(fr.set(-.5,.5,0),As,o,ws,s,r),Ec.set(0,1),a=t.ray.intersectTriangle(Uo,Fo,fr,!1,hr),a===null))return;let l=t.ray.origin.distanceTo(hr);l<t.near||l>t.far||e.push({distance:l,point:hr.clone(),uv:ui.getInterpolation(hr,Uo,fr,Fo,wu,Ec,Au,new xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Oo(i,t,e,n,s,r){Rs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ur.x=r*Rs.x-s*Rs.y,ur.y=s*Rs.x+r*Rs.y):ur.copy(Rs),i.copy(t),i.x+=ur.x,i.y+=ur.y,i.applyMatrix4(Of)}var hi=new N,bc=new N,Bo=new N,zo=new N,Lr=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,e),hi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){bc.copy(t).add(e).multiplyScalar(.5),Bo.copy(e).sub(t).normalize(),zo.copy(this.origin).sub(bc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Bo),a=zo.dot(this.direction),l=-zo.dot(Bo),c=zo.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let S=1/h;u*=S,f*=S,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(bc).addScaledVector(Bo,f),d}intersectSphere(t,e){if(t.radius<0)return null;hi.subVectors(t.center,this.origin);let n=hi.dot(this.direction),s=hi.dot(hi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,S=e.y-o.y,x=e.z-o.z,m=n.x-o.x,M=n.y-o.y,y=n.z-o.z,_=Math.abs(l),b=Math.abs(c),E=Math.abs(h),g,v,R,A,I,L,B,P,H,q,Y,ft;if(_>=b&&_>=E?(R=l,L=u,H=p,ft=m,l>=0?(g=c,v=h,A=f,I=d,B=S,P=x,q=M,Y=y):(g=h,v=c,A=d,I=f,B=x,P=S,q=y,Y=M)):b>=E?(R=c,L=f,H=S,ft=M,c>=0?(g=h,v=l,A=d,I=u,B=x,P=p,q=y,Y=m):(g=l,v=h,A=u,I=d,B=p,P=x,q=m,Y=y)):(R=h,L=d,H=x,ft=y,h>=0?(g=l,v=c,A=u,I=f,B=p,P=S,q=m,Y=M):(g=c,v=l,A=f,I=u,B=S,P=p,q=M,Y=m)),R===0)return null;let j=g/R,G=v/R,J=1/R,dt=A-j*L,bt=I-G*L,K=B-j*H,ht=P-G*H,yt=q-j*ft,_t=Y-G*ft,Mt=yt*ht-_t*K,z=dt*_t-bt*yt,et=K*bt-ht*dt;if(s){if(Mt<0||z<0||et<0)return null}else if((Mt<0||z<0||et<0)&&(Mt>0||z>0||et>0))return null;let k=Mt+z+et;if(k===0)return null;let st=J*(Mt*L+z*H+et*ft);return(k>0?st<0:st>0)?null:this.at(st/k,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ge=class extends Qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ru=new re,ns=new Lr,Ho=new gi,Cu=new N,Go=new N,ko=new N,Vo=new N,Tc=new N,Wo=new N,Iu=new N,Xo=new N,ot=class extends Qe{constructor(t=new Ce,e=new ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Wo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Tc.fromBufferAttribute(u,t),o?Wo.addScaledVector(Tc,h):Wo.addScaledVector(Tc.sub(e),h))}e.add(Wo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(r),ns.copy(t.ray).recast(t.near),!(Ho.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Ho,Cu)===null||ns.origin.distanceToSquared(Cu)>(t.far-t.near)**2))&&(Ru.copy(r).invert(),ns.copy(t.ray).applyMatrix4(Ru),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ns)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,S=f.length;p<S;p++){let x=f[p],m=o[x.materialIndex],M=Math.max(x.start,d.start),y=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let _=M,b=y;_<b;_+=3){let E=a.getX(_),g=a.getX(_+1),v=a.getX(_+2);s=qo(this,m,t,n,c,h,u,E,g,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),S=Math.min(a.count,d.start+d.count);for(let x=p,m=S;x<m;x+=3){let M=a.getX(x),y=a.getX(x+1),_=a.getX(x+2);s=qo(this,o,t,n,c,h,u,M,y,_),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,S=f.length;p<S;p++){let x=f[p],m=o[x.materialIndex],M=Math.max(x.start,d.start),y=Math.min(l.count,Math.min(x.start+x.count,d.start+d.count));for(let _=M,b=y;_<b;_+=3){let E=_,g=_+1,v=_+2;s=qo(this,m,t,n,c,h,u,E,g,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let x=p,m=S;x<m;x+=3){let M=x,y=x+1,_=x+2;s=qo(this,o,t,n,c,h,u,M,y,_),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function Ap(i,t,e,n,s,r,o,a){let l;if(t.side===gn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Gi,a),l===null)return null;Xo.copy(a),Xo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Xo);return c<e.near||c>e.far?null:{distance:c,point:Xo.clone(),object:i}}function qo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Go),i.getVertexPosition(l,ko),i.getVertexPosition(c,Vo);let h=Ap(i,t,e,n,Go,ko,Vo,Iu);if(h){let u=new N;ui.getBarycoord(Iu,Go,ko,Vo,u),s&&(h.uv=ui.getInterpolatedAttribute(s,a,l,c,u,new xt)),r&&(h.uv1=ui.getInterpolatedAttribute(r,a,l,c,u,new xt)),o&&(h.normal=ui.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new N,materialIndex:0};ui.getNormal(Go,ko,Vo,f.normal),h.face=f,h.barycoord=u}return h}var Dr=class extends mn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=je,h=je,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hs=class extends en{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Cs=new re,Pu=new re,Yo=[],Lu=new jn,Rp=new re,dr=new ot,pr=new gi,Ne=class extends ot{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Hs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Rp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),Lu.copy(t.boundingBox).applyMatrix4(Cs),this.boundingBox.union(Lu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),pr.copy(t.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(pr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(n),t.ray.intersectsSphere(pr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cs),Pu.multiplyMatrices(n,Cs),dr.matrixWorld=Pu,dr.raycast(t,Yo);for(let o=0,a=Yo.length;o<a;o++){let l=Yo[o];l.instanceId=r,l.object=this,e.push(l)}Yo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Hs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Dr(new Float32Array(s*this.count),s,this.count,$a,Un));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},is=new gi,Cp=new xt(.5,.5),Zo=new N,Oi=class{constructor(t=new kn,e=new kn,n=new kn,s=new kn,r=new kn,o=new kn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],S=r[9],x=r[10],m=r[11],M=r[12],y=r[13],_=r[14],b=r[15];if(s[0].setComponents(c-o,d-h,m-p,b-M).normalize(),s[1].setComponents(c+o,d+h,m+p,b+M).normalize(),s[2].setComponents(c+a,d+u,m+S,b+y).normalize(),s[3].setComponents(c-a,d-u,m-S,b-y).normalize(),n)s[4].setComponents(l,f,x,_).normalize(),s[5].setComponents(c-l,d-f,m-x,b-_).normalize();else if(s[4].setComponents(c-l,d-f,m-x,b-_).normalize(),e===Dn)s[5].setComponents(c+l,d+f,m+x,b+_).normalize();else if(e===Us)s[5].setComponents(l,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(t){is.center.set(0,0,0);let e=Cp.distanceTo(t.center);return is.radius=.7071067811865476+e,is.applyMatrix4(t.matrixWorld),this.intersectsSphere(is)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Zo.x=s.normal.x>0?t.max.x:t.min.x,Zo.y=s.normal.y>0?t.max.y:t.min.y,Zo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Du=new re,xa=class i{constructor(){this.coordinateSystem=Dn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Du.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Oi),n[s].setFromProjectionMatrix(Du,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Oi),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var ss=class extends Qn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},_a=new N,va=new N,Nu=new re,mr=new Lr,Jo=new gi,wc=new N,Uu=new N,Gs=class extends Qe{constructor(t=new Ce,e=new ss){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)_a.fromBufferAttribute(e,s-1),va.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=_a.distanceTo(va);t.setAttribute("lineDistance",new ae(n,1))}else jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(s),Jo.radius+=r,t.ray.intersectsSphere(Jo)===!1)return;Nu.copy(s).invert(),mr.copy(t.ray).applyMatrix4(Nu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let S=d,x=p-1;S<x;S+=c){let m=h.getX(S),M=h.getX(S+1),y=$o(this,t,mr,l,m,M,S);y&&e.push(y)}if(this.isLineLoop){let S=h.getX(p-1),x=h.getX(d),m=$o(this,t,mr,l,S,x,p-1);m&&e.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let S=d,x=p-1;S<x;S+=c){let m=$o(this,t,mr,l,S,S+1,S);m&&e.push(m)}if(this.isLineLoop){let S=$o(this,t,mr,l,p-1,d,p-1);S&&e.push(S)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function $o(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(_a.fromBufferAttribute(a,s),va.fromBufferAttribute(a,r),e.distanceSqToSegment(_a,va,wc,Uu)>n)return;wc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(wc);if(!(c<t.near||c>t.far))return{distance:c,point:Uu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Fu=new N,Ou=new N,Nr=class extends Gs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Fu.fromBufferAttribute(e,s),Ou.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Fu.distanceTo(Ou);t.setAttribute("lineDistance",new ae(n,1))}else jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ur=class extends mn{constructor(t=[],e=ls,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Mn=class extends mn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _i=class extends mn{constructor(t,e,n=Vn,s,r,o,a=je,l=je,c,h=pi,u=1){if(h!==pi&&h!==Si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Os(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Fr=class extends _i{constructor(t,e=Vn,n=ls,s,r,o=je,a=je,l,c=pi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Or=class extends mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Vt=class i extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(u,2));function p(S,x,m,M,y,_,b,E,g,v,R){let A=_/g,I=b/v,L=_/2,B=b/2,P=E/2,H=g+1,q=v+1,Y=0,ft=0,j=new N;for(let G=0;G<q;G++){let J=G*I-B;for(let dt=0;dt<H;dt++){let bt=dt*A-L;j[S]=bt*M,j[x]=J*y,j[m]=P,c.push(j.x,j.y,j.z),j[S]=0,j[x]=0,j[m]=E>0?1:-1,h.push(j.x,j.y,j.z),u.push(dt/g),u.push(1-G/v),Y+=1}}for(let G=0;G<v;G++)for(let J=0;J<g;J++){let dt=f+J+H*G,bt=f+J+H*(G+1),K=f+(J+1)+H*(G+1),ht=f+(J+1)+H*G;l.push(dt,bt,ht),l.push(bt,K,ht),ft+=6}a.addGroup(d,ft,R),d+=ft,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ks=class i extends Ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new N,h=new xt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(a,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},xe=class i extends Ce{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,S=[],x=n/2,m=0;M(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(f,3)),this.setAttribute("uv",new ae(d,2));function M(){let _=new N,b=new N,E=0,g=(e-t)/n;for(let v=0;v<=r;v++){let R=[],A=v/r,I=A*(e-t)+t;for(let L=0;L<=s;L++){let B=L/s,P=B*l+a,H=Math.sin(P),q=Math.cos(P);b.x=I*H,b.y=-A*n+x,b.z=I*q,u.push(b.x,b.y,b.z),_.set(H,g,q).normalize(),f.push(_.x,_.y,_.z),d.push(B,1-A),R.push(p++)}S.push(R)}for(let v=0;v<s;v++)for(let R=0;R<r;R++){let A=S[R][v],I=S[R+1][v],L=S[R+1][v+1],B=S[R][v+1];(t>0||R!==0)&&(h.push(A,I,B),E+=3),(e>0||R!==r-1)&&(h.push(I,L,B),E+=3)}c.addGroup(m,E,0),m+=E}function y(_){let b=p,E=new xt,g=new N,v=0,R=_===!0?t:e,A=_===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,x*A,0),f.push(0,A,0),d.push(.5,.5),p++;let I=p;for(let L=0;L<=s;L++){let P=L/s*l+a,H=Math.cos(P),q=Math.sin(P);g.x=R*q,g.y=x*A,g.z=R*H,u.push(g.x,g.y,g.z),f.push(0,A,0),E.x=H*.5+.5,E.y=q*.5*A+.5,d.push(E.x,E.y),p++}for(let L=0;L<s;L++){let B=b+L,P=I+L;_===!0?h.push(P,P+1,B):h.push(P+1,P,B),v+=3}c.addGroup(m,v,_===!0?1:2),m+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Br=class i extends xe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ya=class i extends Ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(r.slice(),3)),this.setAttribute("uv",new ae(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let y=new N,_=new N,b=new N;for(let E=0;E<e.length;E+=3)d(e[E+0],y),d(e[E+1],_),d(e[E+2],b),l(y,_,b,M)}function l(M,y,_,b){let E=b+1,g=[];for(let v=0;v<=E;v++){g[v]=[];let R=M.clone().lerp(_,v/E),A=y.clone().lerp(_,v/E),I=E-v;for(let L=0;L<=I;L++)L===0&&v===E?g[v][L]=R:g[v][L]=R.clone().lerp(A,L/I)}for(let v=0;v<E;v++)for(let R=0;R<2*(E-v)-1;R++){let A=Math.floor(R/2);R%2===0?(f(g[v][A+1]),f(g[v+1][A]),f(g[v][A])):(f(g[v][A+1]),f(g[v+1][A+1]),f(g[v+1][A]))}}function c(M){let y=new N;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(M),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){let M=new N;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];let _=x(M)/2/Math.PI+.5,b=m(M)/Math.PI+.5;o.push(_,1-b)}p(),u()}function u(){for(let M=0;M<o.length;M+=6){let y=o[M+0],_=o[M+2],b=o[M+4],E=Math.max(y,_,b),g=Math.min(y,_,b);E>.9&&g<.1&&(y<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),b<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,y){let _=M*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function p(){let M=new N,y=new N,_=new N,b=new N,E=new xt,g=new xt,v=new xt;for(let R=0,A=0;R<r.length;R+=9,A+=6){M.set(r[R+0],r[R+1],r[R+2]),y.set(r[R+3],r[R+4],r[R+5]),_.set(r[R+6],r[R+7],r[R+8]),E.set(o[A+0],o[A+1]),g.set(o[A+2],o[A+3]),v.set(o[A+4],o[A+5]),b.copy(M).add(y).add(_).divideScalar(3);let I=x(b);S(E,A+0,M,I),S(g,A+2,y,I),S(v,A+4,_,I)}}function S(M,y,_,b){b<0&&M.x===1&&(o[y]=M.x-1),_.x===0&&_.z===0&&(o[y]=b/2/Math.PI+.5)}function x(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new xt:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new N,s=[],r=[],o=[],a=new N,l=new re;for(let d=0;d<=t;d++){let p=d/t;s[d]=this.getTangentAt(p,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ue(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ue(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Vs=class extends Cn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new xt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ma=class extends Vs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function fh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Bu=new N,zu=new N,Ac=new fh,Rc=new fh,Cc=new fh,Sa=class extends Cn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(zu.subVectors(s[0],s[1]).add(s[0]),c=zu);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Bu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Bu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),S=Math.pow(u.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d);S<1e-4&&(S=1),p<1e-4&&(p=S),x<1e-4&&(x=S),Ac.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,S,x),Rc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,S,x),Cc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,S,x)}else this.curveType==="catmullrom"&&(Ac.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Rc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Cc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Ac.calc(l),Rc.calc(l),Cc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Hu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Ip(i,t){let e=1-i;return e*e*t}function Pp(i,t){return 2*(1-i)*i*t}function Lp(i,t){return i*i*t}function _r(i,t,e,n){return Ip(i,t)+Pp(i,e)+Lp(i,n)}function Dp(i,t){let e=1-i;return e*e*e*t}function Np(i,t){let e=1-i;return 3*e*e*i*t}function Up(i,t){return 3*(1-i)*i*i*t}function Fp(i,t){return i*i*i*t}function vr(i,t,e,n,s){return Dp(i,t)+Np(i,e)+Up(i,n)+Fp(i,s)}var zr=class extends Cn{constructor(t=new xt,e=new xt,n=new xt,s=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vr(t,s.x,r.x,o.x,a.x),vr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ea=class extends Cn{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vr(t,s.x,r.x,o.x,a.x),vr(t,s.y,r.y,o.y,a.y),vr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Hr=class extends Cn{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ba=class extends Cn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gr=class extends Cn{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_r(t,s.x,r.x,o.x),_r(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ta=class extends Cn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_r(t,s.x,r.x,o.x),_r(t,s.y,r.y,o.y),_r(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},kr=class extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Hu(a,l.x,c.x,h.x,u.x),Hu(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new xt().fromArray(s))}return this}},Uc=Object.freeze({__proto__:null,ArcCurve:Ma,CatmullRomCurve3:Sa,CubicBezierCurve:zr,CubicBezierCurve3:Ea,EllipseCurve:Vs,LineCurve:Hr,LineCurve3:ba,QuadraticBezierCurve:Gr,QuadraticBezierCurve3:Ta,SplineCurve:kr}),wa=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Uc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Vr=class extends wa{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Hr(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Gr(this.currentPoint.clone(),new xt(t,e),new xt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new zr(this.currentPoint.clone(),new xt(t,e),new xt(n,s),new xt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new kr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Vs(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},vi=class extends Vr{constructor(t){super(t),this.uuid=Vi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Vr().fromJSON(s))}return this}};function Op(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Bf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=kp(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<s;f+=e){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Wr(r,o,e,a,l,c,0),o}function Bf(i,t,e,n,s){let r;if(s===Qp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Gu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Gu(o/n|0,i[o],i[o+1],r);return r&&Ws(r,r.next)&&(qr(r),r=r.next),r}function rs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ws(e,e.next)||ze(e.prev,e,e.next)===0)){if(qr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Wr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Yp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?zp(i,n,s,r):Bp(i)){t.push(l.i,i.i,c.i),qr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Hp(rs(i),t),Wr(i,t,e,n,s,r,2)):o===2&&Gp(i,t,e,n,s,r):Wr(rs(i),t,e,n,s,r,1);break}}}function Bp(i){let t=i.prev,e=i,n=i.next;if(ze(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&gr(s,a,r,l,o,c,p.x,p.y)&&ze(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function zp(i,t,e,n){let s=i.prev,r=i,o=i.next;if(ze(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),S=Math.max(a,l,c),x=Math.max(h,u,f),m=Fc(d,p,t,e,n),M=Fc(S,x,t,e,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=m&&_&&_.z<=M;){if(y.x>=d&&y.x<=S&&y.y>=p&&y.y<=x&&y!==s&&y!==o&&gr(a,h,l,u,c,f,y.x,y.y)&&ze(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=S&&_.y>=p&&_.y<=x&&_!==s&&_!==o&&gr(a,h,l,u,c,f,_.x,_.y)&&ze(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=S&&y.y>=p&&y.y<=x&&y!==s&&y!==o&&gr(a,h,l,u,c,f,y.x,y.y)&&ze(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=M;){if(_.x>=d&&_.x<=S&&_.y>=p&&_.y<=x&&_!==s&&_!==o&&gr(a,h,l,u,c,f,_.x,_.y)&&ze(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Hp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ws(n,s)&&Hf(n,e,e.next,s)&&Xr(n,s)&&Xr(s,n)&&(t.push(n.i,e.i,s.i),qr(e),qr(e.next),e=i=s),e=e.next}while(e!==i);return rs(e)}function Gp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$p(o,a)){let l=Gf(o,a);o=rs(o,o.next),l=rs(l,l.next),Wr(o,t,e,n,s,r,0),Wr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function kp(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Bf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Jp(c))}s.sort(Vp);for(let r=0;r<s.length;r++)e=Wp(s[r],e);return e}function Vp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Wp(i,t){let e=Xp(i,t);if(!e)return t;let n=Gf(e,i);return rs(n,n.next),rs(e,e.next)}function Xp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Ws(i,e))return e;do{if(Ws(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&zf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);Xr(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&qp(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function qp(i,t){return ze(i.prev,i,t.prev)<0&&ze(t.next,i,i.next)<0}function Yp(i,t,e,n){let s=i;do s.z===0&&(s.z=Fc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Zp(s)}function Zp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Fc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Jp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function zf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function gr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&zf(i,t,e,n,s,r,o,a)}function $p(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Kp(i,t)&&(Xr(i,t)&&Xr(t,i)&&jp(i,t)&&(ze(i.prev,i,t.prev)||ze(i,t.prev,t))||Ws(i,t)&&ze(i.prev,i,i.next)>0&&ze(t.prev,t,t.next)>0)}function ze(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ws(i,t){return i.x===t.x&&i.y===t.y}function Hf(i,t,e,n){let s=jo(ze(i,t,e)),r=jo(ze(i,t,n)),o=jo(ze(e,n,i)),a=jo(ze(e,n,t));return!!(s!==r&&o!==a||s===0&&Ko(i,e,t)||r===0&&Ko(i,n,t)||o===0&&Ko(e,i,n)||a===0&&Ko(e,t,n))}function Ko(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function jo(i){return i>0?1:i<0?-1:0}function Kp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Hf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Xr(i,t){return ze(i.prev,i,i.next)<0?ze(i,t,i.next)>=0&&ze(i,i.prev,t)>=0:ze(i,t,i.prev)<0||ze(i,i.next,t)<0}function jp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Gf(i,t){let e=Oc(i.i,i.x,i.y),n=Oc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Gu(i,t,e,n){let s=Oc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function qr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Oc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Bc=class{static triangulate(t,e,n=2){return Op(t,e,n)}},$n=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];ku(t),Vu(n,t);let o=t.length;e.forEach(ku);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Vu(n,e[l]);let a=Bc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function ku(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Vu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Xs=class i extends Ce{constructor(t=new vi([new xt(.5,.5),new xt(-.5,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ae(s,3)),this.setAttribute("uv",new ae(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:tm,y,_=!1,b,E,g,v;if(m){y=m.getSpacedPoints(h),_=!0,f=!1;let F=m.isCatmullRomCurve3?m.closed:!1;b=m.computeFrenetFrames(h,F),E=new N,g=new N,v=new N}f||(x=0,d=0,p=0,S=0);let R=a.extractPoints(c),A=R.shape,I=R.holes;if(!$n.isClockWise(A)){A=A.reverse();for(let F=0,V=I.length;F<V;F++){let W=I[F];$n.isClockWise(W)&&(I[F]=W.reverse())}}function B(F){let W=10000000000000001e-36,mt=F[0];for(let ct=1;ct<=F.length;ct++){let Ft=ct%F.length,Tt=F[Ft],ut=Tt.x-mt.x,wt=Tt.y-mt.y,Lt=ut*ut+wt*wt,D=Math.max(Math.abs(Tt.x),Math.abs(Tt.y),Math.abs(mt.x),Math.abs(mt.y)),ie=W*D*D;if(Lt<=ie){F.splice(Ft,1),ct--;continue}mt=Tt}}B(A),I.forEach(B);let P=I.length,H=A;for(let F=0;F<P;F++){let V=I[F];A=A.concat(V)}function q(F,V,W){return V||ee("ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(V,W)}let Y=A.length;function ft(F,V,W){let mt,ct,Ft,Tt=F.x-V.x,ut=F.y-V.y,wt=W.x-F.x,Lt=W.y-F.y,D=Tt*Tt+ut*ut,ie=Tt*Lt-ut*wt;if(Math.abs(ie)>Number.EPSILON){let Gt=Math.sqrt(D),Qt=Math.sqrt(wt*wt+Lt*Lt),pt=V.x-ut/Gt,ye=V.y+Tt/Gt,qt=W.x-Lt/Qt,te=W.y+wt/Qt,C=((qt-pt)*Lt-(te-ye)*wt)/(Tt*Lt-ut*wt);mt=pt+Tt*C-F.x,ct=ye+ut*C-F.y;let T=mt*mt+ct*ct;if(T<=2)return new xt(mt,ct);Ft=Math.sqrt(T/2)}else{let Gt=!1;Tt>Number.EPSILON?wt>Number.EPSILON&&(Gt=!0):Tt<-Number.EPSILON?wt<-Number.EPSILON&&(Gt=!0):Math.sign(ut)===Math.sign(Lt)&&(Gt=!0),Gt?(mt=-ut,ct=Tt,Ft=Math.sqrt(D)):(mt=Tt,ct=ut,Ft=Math.sqrt(D/2))}return new xt(mt/Ft,ct/Ft)}let j=[];for(let F=0,V=H.length,W=V-1,mt=F+1;F<V;F++,W++,mt++)W===V&&(W=0),mt===V&&(mt=0),j[F]=ft(H[F],H[W],H[mt]);let G=[],J,dt=j.concat();for(let F=0,V=P;F<V;F++){let W=I[F];J=[];for(let mt=0,ct=W.length,Ft=ct-1,Tt=mt+1;mt<ct;mt++,Ft++,Tt++)Ft===ct&&(Ft=0),Tt===ct&&(Tt=0),J[mt]=ft(W[mt],W[Ft],W[Tt]);G.push(J),dt=dt.concat(J)}let bt;if(x===0)bt=$n.triangulateShape(H,I);else{let F=[],V=[];for(let W=0;W<x;W++){let mt=W/x,ct=d*Math.cos(mt*Math.PI/2),Ft=p*Math.sin(mt*Math.PI/2)+S;for(let Tt=0,ut=H.length;Tt<ut;Tt++){let wt=q(H[Tt],j[Tt],Ft);z(wt.x,wt.y,-ct),mt===0&&F.push(wt)}for(let Tt=0,ut=P;Tt<ut;Tt++){let wt=I[Tt];J=G[Tt];let Lt=[];for(let D=0,ie=wt.length;D<ie;D++){let Gt=q(wt[D],J[D],Ft);z(Gt.x,Gt.y,-ct),mt===0&&Lt.push(Gt)}mt===0&&V.push(Lt)}}bt=$n.triangulateShape(F,V)}let K=bt.length,ht=p+S;for(let F=0;F<Y;F++){let V=f?q(A[F],dt[F],ht):A[F];_?(g.copy(b.normals[0]).multiplyScalar(V.x),E.copy(b.binormals[0]).multiplyScalar(V.y),v.copy(y[0]).add(g).add(E),z(v.x,v.y,v.z)):z(V.x,V.y,0)}for(let F=1;F<=h;F++)for(let V=0;V<Y;V++){let W=f?q(A[V],dt[V],ht):A[V];_?(g.copy(b.normals[F]).multiplyScalar(W.x),E.copy(b.binormals[F]).multiplyScalar(W.y),v.copy(y[F]).add(g).add(E),z(v.x,v.y,v.z)):z(W.x,W.y,u/h*F)}for(let F=x-1;F>=0;F--){let V=F/x,W=d*Math.cos(V*Math.PI/2),mt=p*Math.sin(V*Math.PI/2)+S;for(let ct=0,Ft=H.length;ct<Ft;ct++){let Tt=q(H[ct],j[ct],mt);z(Tt.x,Tt.y,u+W)}for(let ct=0,Ft=I.length;ct<Ft;ct++){let Tt=I[ct];J=G[ct];for(let ut=0,wt=Tt.length;ut<wt;ut++){let Lt=q(Tt[ut],J[ut],mt);_?z(Lt.x,Lt.y+y[h-1].y,y[h-1].x+W):z(Lt.x,Lt.y,u+W)}}}yt(),_t();function yt(){let F=s.length/3;if(f){let V=0,W=Y*V;for(let mt=0;mt<K;mt++){let ct=bt[mt];et(ct[2]+W,ct[1]+W,ct[0]+W)}V=h+x*2,W=Y*V;for(let mt=0;mt<K;mt++){let ct=bt[mt];et(ct[0]+W,ct[1]+W,ct[2]+W)}}else{for(let V=0;V<K;V++){let W=bt[V];et(W[2],W[1],W[0])}for(let V=0;V<K;V++){let W=bt[V];et(W[0]+Y*h,W[1]+Y*h,W[2]+Y*h)}}n.addGroup(F,s.length/3-F,0)}function _t(){let F=s.length/3,V=0;Mt(H,V),V+=H.length;for(let W=0,mt=I.length;W<mt;W++){let ct=I[W];Mt(ct,V),V+=ct.length}n.addGroup(F,s.length/3-F,1)}function Mt(F,V){let W=F.length;for(;--W>=0;){let mt=W,ct=W-1;ct<0&&(ct=F.length-1);for(let Ft=0,Tt=h+x*2;Ft<Tt;Ft++){let ut=Y*Ft,wt=Y*(Ft+1),Lt=V+mt+ut,D=V+ct+ut,ie=V+ct+wt,Gt=V+mt+wt;k(Lt,D,ie,Gt)}}}function z(F,V,W){l.push(F),l.push(V),l.push(W)}function et(F,V,W){st(F),st(V),st(W);let mt=s.length/3,ct=M.generateTopUV(n,s,mt-3,mt-2,mt-1);Q(ct[0]),Q(ct[1]),Q(ct[2])}function k(F,V,W,mt){st(F),st(V),st(mt),st(V),st(W),st(mt);let ct=s.length/3,Ft=M.generateSideWallUV(n,s,ct-6,ct-3,ct-2,ct-1);Q(Ft[0]),Q(Ft[1]),Q(Ft[3]),Q(Ft[1]),Q(Ft[2]),Q(Ft[3])}function st(F){s.push(l[F*3+0]),s.push(l[F*3+1]),s.push(l[F*3+2])}function Q(F){r.push(F.x),r.push(F.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return em(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Uc[s.type]().fromJSON(s)),new i(n,t.options)}},tm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new xt(r,o),new xt(a,l),new xt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],p=t[s*3+2],S=t[r*3],x=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new xt(o,1-l),new xt(c,1-u),new xt(f,1-p),new xt(S,1-m)]:[new xt(a,1-l),new xt(h,1-u),new xt(d,1-p),new xt(x,1-m)]}};function em(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var qs=class i extends ya{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var we=class i extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],S=[],x=[];for(let m=0;m<h;m++){let M=m*f-o;for(let y=0;y<c;y++){let _=y*u-r;p.push(_,-M,0),S.push(0,0,1),x.push(y/a),x.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){let y=M+c*m,_=M+c*(m+1),b=M+1+c*(m+1),E=M+1+c*m;d.push(y,_,E),d.push(_,b,E)}this.setIndex(d),this.setAttribute("position",new ae(p,3)),this.setAttribute("normal",new ae(S,3)),this.setAttribute("uv",new ae(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Yr=class i extends Ce{constructor(t=new vi([new xt(0,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ae(s,3)),this.setAttribute("normal",new ae(r,3)),this.setAttribute("uv",new ae(o,2));function c(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,p=f.holes;$n.isClockWise(d)===!1&&(d=d.reverse());for(let x=0,m=p.length;x<m;x++){let M=p[x];$n.isClockWise(M)===!0&&(p[x]=M.reverse())}let S=$n.triangulateShape(d,p);for(let x=0,m=p.length;x<m;x++){let M=p[x];d=d.concat(M)}for(let x=0,m=d.length;x<m;x++){let M=d[x];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let x=0,m=S.length;x<m;x++){let M=S[x],y=M[0]+u,_=M[1]+u,b=M[2]+u;n.push(y,_,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return nm(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function nm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Nn=class i extends Ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new N,f=new N,d=[],p=[],S=[],x=[];for(let m=0;m<=n;m++){let M=[],y=m/n,_=o+y*a,b=t*Math.cos(_),E=Math.sqrt(t*t-b*b),g=0;m===0&&o===0?g=.5/e:m===n&&l===Math.PI&&(g=-.5/e);for(let v=0;v<=e;v++){let R=v/e,A=s+R*r;u.x=-E*Math.cos(A),u.y=b,u.z=E*Math.sin(A),p.push(u.x,u.y,u.z),f.copy(u).normalize(),S.push(f.x,f.y,f.z),x.push(R+g,1-y),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let y=h[m][M+1],_=h[m][M],b=h[m+1][M],E=h[m+1][M+1];(m!==0||o>0)&&d.push(y,_,E),(m!==n-1||l<Math.PI)&&d.push(_,b,E)}this.setIndex(d),this.setAttribute("position",new ae(p,3)),this.setAttribute("normal",new ae(S,3)),this.setAttribute("uv",new ae(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Zr=class i extends Ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new N,d=new N,p=new N;for(let S=0;S<=n;S++){let x=o+S/n*a;for(let m=0;m<=s;m++){let M=m/s*r;d.x=(t+e*Math.cos(x))*Math.cos(M),d.y=(t+e*Math.cos(x))*Math.sin(M),d.z=e*Math.sin(x),c.push(d.x,d.y,d.z),f.x=t*Math.cos(M),f.y=t*Math.sin(M),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(m/s),u.push(S/n)}}for(let S=1;S<=n;S++)for(let x=1;x<=s;x++){let m=(s+1)*S+x-1,M=(s+1)*(S-1)+x-1,y=(s+1)*(S-1)+x,_=(s+1)*S+x;l.push(m,M,_),l.push(M,y,_)}this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function hs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Wu(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Wu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function cn(i){let t={};for(let e=0;e<i.length;e++){let n=hs(i[e]);for(let s in n)t[s]=n[s]}return t}function Wu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function im(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function dh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var kf={clone:hs,merge:cn},sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ti=class extends Qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sm,this.fragmentShader=rm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=im(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new oe().setHex(s.value);break;case"v2":this.uniforms[n].value=new xt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Fe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ne().fromArray(s.value);break;case"m4":this.uniforms[n].value=new re().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Aa=class extends ti{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Pt=class extends Qn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Il,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Va,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ra=class extends Qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ca=class extends Qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Is(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Qo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Bi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ia=class extends Bi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lc,endingEnd:Lc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dc:r=t,a=2*e-n;break;case Nc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Dc:o=t,l=2*n-e;break;case Nc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(s-e),S=p*p,x=S*p,m=-f*x+2*f*S-f*p,M=(1+f)*x+(-1.5-2*f)*S+(-.5+f)*p+1,y=(-1-d)*x+(1.5+d)*S+.5*p,_=d*x-d*S;for(let b=0;b!==a;++b)r[b]=m*o[h+b]+M*o[c+b]+y*o[l+b]+_*o[u+b];return r}},Pa=class extends Bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},La=class extends Bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Da=class extends Bi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(s-e),S=1-p;for(let x=0;x!==a;++x)r[x]=o[c+x]*S+o[l+x]*p;return r}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let S=o[c+p],x=o[l+p],m=d*f+p*2,M=u[m],y=u[m+1],_=t*f+p*2,b=h[_],E=h[_+1],g=am(n,e,M,b,s);r[p]=Vf(g,S,y,E,x)}return r}};function Vf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function om(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function am(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Vf(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=om(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var In=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Is(e,this.TimeBufferType),this.values=Is(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Is(t.times,Array),values:Is(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Qo(t.settings)&&(n.settings={inTangents:Is(t.settings.inTangents,Array),outTangents:Is(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new La(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ia(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Da(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case yr:e=this.InterpolantFactoryMethodDiscrete;break;case fa:e=this.InterpolantFactoryMethodLinear;break;case na:e=this.InterpolantFactoryMethodSmooth;break;case Pc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return fa;case this.InterpolantFactoryMethodSmooth:return na;case this.InterpolantFactoryMethodBezier:return Pc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Qo(this.settings)&&(Xu(this.settings.inTangents,t),Xu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Qo(this.settings)&&(qu(this.settings.inTangents,t),qu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ee("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ee("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&cp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ee("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===na,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let S=e[u+p];if(S!==e[f+p]||S!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Qo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Xu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function qu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}In.prototype.ValueTypeName="";In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=fa;var zi=class extends In{constructor(t,e,n){super(t,e,n)}};zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=yr;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends In{constructor(t,e,n,s){super(t,e,n,s)}};Na.prototype.ValueTypeName="color";var Ua=class extends In{constructor(t,e,n,s){super(t,e,n,s)}};Ua.prototype.ValueTypeName="number";var Fa=class extends Bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)We.slerpFlat(r,0,o,c-a,o,c,l);return r}},Jr=class extends In{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Fa(this.times,this.values,this.getValueSize(),t)}};Jr.prototype.ValueTypeName="quaternion";Jr.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends In{constructor(t,e,n){super(t,e,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=yr;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends In{constructor(t,e,n,s){super(t,e,n,s)}};Oa.prototype.ValueTypeName="vector";var Ba=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wf=new Ba,za=class{constructor(t){this.manager=t!==void 0?t:Wf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};za.DEFAULT_MATERIAL_NAME="__DEFAULT";var $r=class extends Qe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Kr=class extends $r{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ic=new re,Yu=new N,Zu=new N,Ha=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oi,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Yu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yu),Zu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ic.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ic,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Us||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Ic)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ta=new N,ea=new We,Zn=new N,jr=class extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ta,ea,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ta,ea,Zn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ta,ea,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ta,ea,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ui=new N,Ju=new xt,$u=new xt,dn=class extends jr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=da*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(sc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return da*2*Math.atan(Math.tan(sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z)}getViewSize(t,e){return this.getViewBounds(t,Ju,$u),e.subVectors($u,Ju)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(sc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Qr=class extends jr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},zc=class extends Ha{constructor(){super(new Qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},to=class extends $r{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new zc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ps=-90,Ls=1,Ys=class extends Qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new dn(Ps,Ls,t,e);s.layers=this.layers,this.add(s);let r=new dn(Ps,Ls,t,e);r.layers=this.layers,this.add(r);let o=new dn(Ps,Ls,t,e);o.layers=this.layers,this.add(o);let a=new dn(Ps,Ls,t,e);a.layers=this.layers,this.add(a);let l=new dn(Ps,Ls,t,e);l.layers=this.layers,this.add(l);let c=new dn(Ps,Ls,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=S,t.setRenderTarget(n,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ga=class extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var ph="\\[\\]\\.:\\/",lm=new RegExp("["+ph+"]","g"),mh="[^"+ph+"]",cm="[^"+ph.replace("\\.","")+"]",hm=/((?:WC+[\/:])*)/.source.replace("WC",mh),um=/(WCOD+)?/.source.replace("WCOD",cm),fm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mh),dm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mh),pm=new RegExp("^"+hm+um+fm+dm+"$"),mm=["material","materials","bones","map"],Hc=class{constructor(t,e,n){let s=n||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},De=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lm,"")}static parseTrackName(t){let e=pm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);mm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=Hc;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ry=new Float32Array(1);var Gc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function gh(i,t,e,n){let s=gm(n);switch(e){case rh:return i*t;case $a:return i*t/s.components*s.byteLength;case Ka:return i*t/s.components*s.byteLength;case ki:return i*t*2/s.components*s.byteLength;case ja:return i*t*2/s.components*s.byteLength;case oh:return i*t*3/s.components*s.byteLength;case Xn:return i*t*4/s.components*s.byteLength;case Qa:return i*t*4/s.components*s.byteLength;case io:case so:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ro:case oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case el:case il:return Math.max(i,16)*Math.max(t,8)/4;case tl:case nl:return Math.max(i,8)*Math.max(t,8)/2;case sl:case rl:case al:case ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ol:case ao:case cl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ul:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case fl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case dl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case pl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ml:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case gl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case xl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case _l:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case vl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case yl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Sl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case El:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case bl:case Tl:case wl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Al:case Rl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case lo:case Cl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gm(i){switch(i){case Sn:case eh:return{byteLength:1,components:1};case Ks:case nh:case Wn:return{byteLength:2,components:1};case Za:case Ja:return{byteLength:2,components:4};case Vn:case Ya:case Un:return{byteLength:4,components:1};case ih:case sh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function fd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Sm(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],S=u[d];S.start<=p.start+p.count+1?p.count=Math.max(p.count,S.start+S.count-p.start):(++f,u[f]=S)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let S=u[d];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Em=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Im=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Um=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Om=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,qm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ym=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Km=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,t0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,e0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,n0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,s0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,r0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,o0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,h0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,f0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,p0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,m0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,x0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,y0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,M0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,S0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,E0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b0=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,T0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,L0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,F0=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,z0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,G0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,k0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,X0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,q0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,j0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ng=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ig=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,rg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,og=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ag=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ug=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tg=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ag=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ig=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ng=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ex=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:Em,alphahash_pars_fragment:bm,alphamap_fragment:Tm,alphamap_pars_fragment:wm,alphatest_fragment:Am,alphatest_pars_fragment:Rm,aomap_fragment:Cm,aomap_pars_fragment:Im,batching_pars_vertex:Pm,batching_vertex:Lm,begin_vertex:Dm,beginnormal_vertex:Nm,bsdfs:Um,iridescence_fragment:Fm,bumpmap_pars_fragment:Om,clipping_planes_fragment:Bm,clipping_planes_pars_fragment:zm,clipping_planes_pars_vertex:Hm,clipping_planes_vertex:Gm,color_fragment:km,color_pars_fragment:Vm,color_pars_vertex:Wm,color_vertex:Xm,common:qm,defaultnormal_vertex:Ym,displacementmap_pars_vertex:Zm,displacementmap_vertex:Jm,emissivemap_fragment:$m,emissivemap_pars_fragment:Km,colorspace_fragment:jm,colorspace_pars_fragment:Qm,envmap_fragment:t0,envmap_common_pars_fragment:e0,envmap_pars_fragment:n0,envmap_pars_vertex:i0,envmap_physical_pars_fragment:p0,envmap_vertex:s0,fog_vertex:r0,fog_pars_vertex:o0,fog_fragment:a0,fog_pars_fragment:l0,gradientmap_pars_fragment:c0,lightmap_pars_fragment:h0,lights_lambert_fragment:u0,lights_lambert_pars_fragment:f0,lights_pars_begin:d0,lights_toon_fragment:m0,lights_toon_pars_fragment:g0,lights_phong_fragment:x0,lights_phong_pars_fragment:_0,lights_physical_fragment:v0,lights_physical_pars_fragment:y0,lights_fragment_begin:M0,lights_fragment_maps:S0,lights_fragment_end:E0,lightprobes_pars_fragment:b0,logdepthbuf_fragment:T0,logdepthbuf_pars_fragment:w0,logdepthbuf_pars_vertex:A0,logdepthbuf_vertex:R0,map_fragment:C0,map_pars_fragment:I0,map_particle_fragment:P0,map_particle_pars_fragment:L0,metalnessmap_fragment:D0,metalnessmap_pars_fragment:N0,morphinstance_vertex:U0,morphcolor_vertex:F0,morphnormal_vertex:O0,morphtarget_pars_vertex:B0,morphtarget_vertex:z0,normal_fragment_begin:H0,normal_fragment_maps:G0,normal_pars_fragment:k0,normal_pars_vertex:V0,normal_vertex:W0,normalmap_pars_fragment:X0,clearcoat_normal_fragment_begin:q0,clearcoat_normal_fragment_maps:Y0,clearcoat_pars_fragment:Z0,iridescence_pars_fragment:J0,opaque_fragment:$0,packing:K0,premultiplied_alpha_fragment:j0,project_vertex:Q0,dithering_fragment:tg,dithering_pars_fragment:eg,roughnessmap_fragment:ng,roughnessmap_pars_fragment:ig,shadowmap_pars_fragment:sg,shadowmap_pars_vertex:rg,shadowmap_vertex:og,shadowmask_pars_fragment:ag,skinbase_vertex:lg,skinning_pars_vertex:cg,skinning_vertex:hg,skinnormal_vertex:ug,specularmap_fragment:fg,specularmap_pars_fragment:dg,tonemapping_fragment:pg,tonemapping_pars_fragment:mg,transmission_fragment:gg,transmission_pars_fragment:xg,uv_pars_fragment:_g,uv_pars_vertex:vg,uv_vertex:yg,worldpos_vertex:Mg,background_vert:Sg,background_frag:Eg,backgroundCube_vert:bg,backgroundCube_frag:Tg,cube_vert:wg,cube_frag:Ag,depth_vert:Rg,depth_frag:Cg,distance_vert:Ig,distance_frag:Pg,equirect_vert:Lg,equirect_frag:Dg,linedashed_vert:Ng,linedashed_frag:Ug,meshbasic_vert:Fg,meshbasic_frag:Og,meshlambert_vert:Bg,meshlambert_frag:zg,meshmatcap_vert:Hg,meshmatcap_frag:Gg,meshnormal_vert:kg,meshnormal_frag:Vg,meshphong_vert:Wg,meshphong_frag:Xg,meshphysical_vert:qg,meshphysical_frag:Yg,meshtoon_vert:Zg,meshtoon_frag:Jg,points_vert:$g,points_frag:Kg,shadow_vert:jg,shadow_frag:Qg,sprite_vert:tx,sprite_frag:ex},Bt={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},ii={basic:{uniforms:cn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:cn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new oe(0)},envMapIntensity:{value:1}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:cn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:cn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:cn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new oe(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:cn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:cn([Bt.points,Bt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:cn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:cn([Bt.common,Bt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:cn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:cn([Bt.sprite,Bt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:cn([Bt.common,Bt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:cn([Bt.lights,Bt.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};ii.physical={uniforms:cn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};var Ll={r:0,b:0,g:0},nx=new re,dd=new ne;dd.set(-1,0,0,0,1,0,0,0,1);function ix(i,t,e,n,s,r){let o=new oe(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(M){let y=M.isScene===!0?M.background:null;if(y&&y.isTexture){let _=M.backgroundBlurriness>0;y=t.get(y,_)}return y}function p(M){let y=!1,_=d(M);_===null?x(o,a):_&&_.isColor&&(x(_,1),y=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,y){let _=d(y);_&&_.isCubeTexture?(c===void 0&&(c=new ot(new Vt(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:hs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(nx.makeRotationFromEuler(y.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(dd),c.material.toneMapped=me.getTransfer(_.colorSpace)!==Se,(h!==_||u!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ot(new we(2,2),new ti({name:"BackgroundMaterial",uniforms:hs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=me.getTransfer(_.colorSpace)!==Se,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function x(M,y){M.getRGB(Ll,dh(i)),e.buffers.color.setClear(Ll.r,Ll.g,Ll.b,y,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,y=1){o.set(M),a=y,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,x(o,a)},render:p,addToRenderList:S,dispose:m}}function sx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(I,L,B,P,H){let q=!1,Y=u(I,P,B,L);r!==Y&&(r=Y,c(r.object)),q=d(I,P,B,H),q&&p(I,P,B,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,_(I,L,B,P),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function u(I,L,B,P){let H=P.wireframe===!0,q=n[L.id];q===void 0&&(q={},n[L.id]=q);let Y=I.isInstancedMesh===!0?I.id:0,ft=q[Y];ft===void 0&&(ft={},q[Y]=ft);let j=ft[B.id];j===void 0&&(j={},ft[B.id]=j);let G=j[H];return G===void 0&&(G=f(l()),j[H]=G),G}function f(I){let L=[],B=[],P=[];for(let H=0;H<e;H++)L[H]=0,B[H]=0,P[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:P,object:I,attributes:{},index:null}}function d(I,L,B,P){let H=r.attributes,q=L.attributes,Y=0,ft=B.getAttributes();for(let j in ft)if(ft[j].location>=0){let J=H[j],dt=q[j];if(dt===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(dt=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(dt=I.instanceColor)),J===void 0||J.attribute!==dt||dt&&J.data!==dt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==P}function p(I,L,B,P){let H={},q=L.attributes,Y=0,ft=B.getAttributes();for(let j in ft)if(ft[j].location>=0){let J=q[j];J===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(J=I.instanceColor));let dt={};dt.attribute=J,J&&J.data&&(dt.data=J.data),H[j]=dt,Y++}r.attributes=H,r.attributesNum=Y,r.index=P}function S(){let I=r.newAttributes;for(let L=0,B=I.length;L<B;L++)I[L]=0}function x(I){m(I,0)}function m(I,L){let B=r.newAttributes,P=r.enabledAttributes,H=r.attributeDivisors;B[I]=1,P[I]===0&&(i.enableVertexAttribArray(I),P[I]=1),H[I]!==L&&(i.vertexAttribDivisor(I,L),H[I]=L)}function M(){let I=r.newAttributes,L=r.enabledAttributes;for(let B=0,P=L.length;B<P;B++)L[B]!==I[B]&&(i.disableVertexAttribArray(B),L[B]=0)}function y(I,L,B,P,H,q,Y){Y===!0?i.vertexAttribIPointer(I,L,B,H,q):i.vertexAttribPointer(I,L,B,P,H,q)}function _(I,L,B,P){S();let H=P.attributes,q=B.getAttributes(),Y=L.defaultAttributeValues;for(let ft in q){let j=q[ft];if(j.location>=0){let G=H[ft];if(G===void 0&&(ft==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),ft==="instanceColor"&&I.instanceColor&&(G=I.instanceColor)),G!==void 0){let J=G.normalized,dt=G.itemSize,bt=t.get(G);if(bt===void 0)continue;let K=bt.buffer,ht=bt.type,yt=bt.bytesPerElement,_t=ht===i.INT||ht===i.UNSIGNED_INT||G.gpuType===Ya;if(G.isInterleavedBufferAttribute){let Mt=G.data,z=Mt.isInterleavedBuffer===!0?Mt.stride:Mt.itemSize,et=G.offset;if(Mt.isInstancedInterleavedBuffer||Mt.isInstancedBufferAttribute){for(let k=0;k<j.locationSize;k++)m(j.location+k,Mt.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let k=0;k<j.locationSize;k++)x(j.location+k);i.bindBuffer(i.ARRAY_BUFFER,K);for(let k=0;k<j.locationSize;k++)y(j.location+k,dt/j.locationSize,ht,J,z*yt,(et+dt/j.locationSize*k)*yt,_t)}else{if(G.isInstancedBufferAttribute){for(let Mt=0;Mt<j.locationSize;Mt++)m(j.location+Mt,G.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Mt=0;Mt<j.locationSize;Mt++)x(j.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,K);for(let Mt=0;Mt<j.locationSize;Mt++)y(j.location+Mt,dt/j.locationSize,ht,J,dt*yt,dt/j.locationSize*Mt*yt,_t)}}else if(Y!==void 0){let J=Y[ft];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(j.location,J);break;case 3:i.vertexAttrib3fv(j.location,J);break;case 4:i.vertexAttrib4fv(j.location,J);break;default:i.vertexAttrib1fv(j.location,J)}}}}M()}function b(){R();for(let I in n){let L=n[I];for(let B in L){let P=L[B];for(let H in P){let q=P[H];for(let Y in q)h(q[Y].object),delete q[Y];delete P[H]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;let L=n[I.id];for(let B in L){let P=L[B];for(let H in P){let q=P[H];for(let Y in q)h(q[Y].object),delete q[Y];delete P[H]}}delete n[I.id]}function g(I){for(let L in n){let B=n[L];for(let P in B){let H=B[P];if(H[I.id]===void 0)continue;let q=H[I.id];for(let Y in q)h(q[Y].object),delete q[Y];delete H[I.id]}}}function v(I){for(let L in n){let B=n[L],P=I.isInstancedMesh===!0?I.id:0,H=B[P];if(H!==void 0){for(let q in H){let Y=H[q];for(let ft in Y)h(Y[ft].object),delete Y[ft];delete H[q]}delete B[P],Object.keys(B).length===0&&delete n[L]}}}function R(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:g,initAttributes:S,enableAttribute:x,disableUnusedAttributes:M}}function rx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ox(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(g){return!(g!==Xn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){let v=g===Wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==Sn&&g!==Un&&!v&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&jt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:S,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:_,maxSamples:b,samples:E}}function ax(i){let t=this,e=null,n=0,s=!1,r=!1,o=new kn,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,S=u.clipIntersection,x=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!x)r?h(null):c();else{let M=r?0:n,y=M*4,_=m.clippingState||null;l.value=_,_=h(p,f,y,d);for(let b=0;b!==y;++b)_[b]=e[b];m.clippingState=_,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let S=u!==null?u.length:0,x=null;if(S!==0){if(x=l.value,p!==!0||x===null){let m=d+S*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(x===null||x.length<m)&&(x=new Float32Array(m));for(let y=0,_=d;y!==S;++y,_+=4)o.copy(u[y]).applyMatrix4(M,a),o.normal.toArray(x,_),x[_+3]=o.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,x}}var uo=class extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ur(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Vt(5,5,5),r=new ti({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:os});r.uniforms.tEquirect.value=e;let o=new ot(s,r),a=e.minFilter;return e.minFilter===Mi&&(e.minFilter=pn),new Ys(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Xf=256,lx=3,cx=20,pd=256,md=16,hx=3,ux=new N,fx=new oe,Nl=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ys(1,10,null),this._boxMesh=new ot(new Vt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=ux}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,S=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(t.background=l.getClearColor(fx));let x=new Ys(n,s,h);return x.position.copy(a),x.update(l,t),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=p,t.background=S,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Xf,Df(t))}_fromTexture(t,e){t.mapping===ls||t.mapping===$s?this._setSize(t.image.length===0?Xf:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=qf(t,!1,!1),n=Math.log2(t)-lx;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=qf(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ls||t.mapping===$s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zf()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Yf()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=dx(),this._integrationMaterial=px());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/md);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-hx)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(pd*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=mx());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function qf(i,t,e){return new uo(i,{minFilter:Mi,generateMipmaps:t,type:Wn,colorSpace:Mr,depthBuffer:e})}function fo(i,t,e){return new ti({name:i,uniforms:t,vertexShader:he.cube_vert,fragmentShader:e,side:gn,blending:os,depthTest:!1,depthWrite:!1})}function dx(){return fo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${pd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function px(){return fo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:md}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function mx(){return fo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${cx}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Yf(){return fo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Zf(){return fo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function gx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Wa||d===Xa)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let S=new uo(p.height);return S.fromEquirectangularTexture(i,f),t.set(f,S),f.addEventListener("dispose",c),a(S.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===Wa||d===Xa,S=d===ls||d===$s;if(p||S){let x=e.get(f),m=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Nl(i)),x=p?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{let M=f.image;return p&&M&&M.height>0||S&&M&&l(M)?(n===null&&(n=new Nl(i)),x=p?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",h),x.texture):null}}}return f}function a(f,d){return d===Wa?f.mapping=ls:d===Xa&&(f.mapping=$s),f}function l(f){let d=0,p=6;for(let S=0;S<p;S++)f[S]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function xx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&xr("WebGLRenderer: "+n+" extension not supported."),s}}}function _x(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let x in p.attributes)t.remove(p.attributes[x]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let S=r.get(p);S&&(t.remove(S),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,S){return s[S.id]!==void 0||(S.addEventListener("dispose",a),s[S.id]=new WeakRef(S),o.register(S,S.id,S),e.memory.geometries++),S}function h(p){let S=p.attributes;for(let x in S)t.update(S[x],i.ARRAY_BUFFER)}function u(p){let S=p.index,x=p.attributes.position,m=0;if(x===void 0)return;let M=S!==null?S.array.length:x.array.length/3-1,y=x.count>=65535?Ir:Cr,_=new y(Math.ceil(M/3)*6,1),b=_.array;if(S!==null){let g=S.array;m=S.version;for(let v=0,R=0;v<M;v+=3){let A=g[v+0],I=g[v+1],L=g[v+2];b[R++]=A,b[R++]=I,b[R++]=I,b[R++]=L,b[R++]=L,b[R++]=A}}else{m=x.version;for(let g=0,v=0;g<M;g+=3){let R=g+0,A=g+1,I=g+2;b[v++]=R,b[v++]=A,b[v++]=A,b[v++]=I,b[v++]=I,b[v++]=R}}_.version=m;let E=r.get(p);E&&t.remove(E),r.set(p,_)}function f(p){let S=r.get(p);if(S){let x=p.index;x!==null&&S.version<x.version&&u(p)}else u(p);return r.get(p)}function d(){for(let p in s){let S=s[p].deref();S!==void 0&&l(S)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function vx(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let S=0;for(let x=0;x<d;x++)S+=f[x];e.update(S,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function yx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ee("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Mx(i,t,e){let n=new WeakMap,s=new Fe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let R=function(){g.dispose(),n.delete(a),a.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],y=0;d===!0&&(y=1),p===!0&&(y=2),S===!0&&(y=3);let _=a.attributes.position.count*y,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let E=new Float32Array(_*b*4*u),g=new Tr(E,_,b,u);g.type=Un,g.needsUpdate=!0;let v=y*4;for(let A=0;A<u;A++){let I=x[A],L=m[A],B=M[A],P=_*b*4*A;for(let H=0;H<I.count;H++){let q=H*v;d===!0&&(s.fromBufferAttribute(I,H),E[P+q+0]=s.x,E[P+q+1]=s.y,E[P+q+2]=s.z,E[P+q+3]=0),p===!0&&(s.fromBufferAttribute(L,H),E[P+q+4]=s.x,E[P+q+5]=s.y,E[P+q+6]=s.z,E[P+q+7]=0),S===!0&&(s.fromBufferAttribute(B,H),E[P+q+8]=s.x,E[P+q+9]=s.y,E[P+q+10]=s.z,E[P+q+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:g,size:new xt(_,b)},n.set(a,f),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let S=0;S<c.length;S++)d+=c[S];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Sx(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Ex={[Yc]:"LINEAR_TONE_MAPPING",[Zc]:"REINHARD_TONE_MAPPING",[Jc]:"CINEON_TONE_MAPPING",[$c]:"ACES_FILMIC_TONE_MAPPING",[jc]:"AGX_TONE_MAPPING",[Qc]:"NEUTRAL_TONE_MAPPING",[Kc]:"CUSTOM_TONE_MAPPING"};function bx(i,t,e,n,s,r){let o=new Rn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Ce;h.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ae([0,2,0,0,2,0],2));let u=new Aa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ot(h,u),d=new Qr(-1,1,1,-1,0,1),p=null,S=null,x=!1,m,M=null,y=[],_=!1;this.setSize=function(b,E){o.setSize(b,E),a!==null&&a.setSize(b,E),l!==null&&l.setSize(b,E);for(let g=0;g<y.length;g++){let v=y[g];v.setSize&&v.setSize(b,E)}},this.setEffects=function(b){y=b,_=y.length>0&&y[0].isRenderPass===!0;let E=o.width,g=o.height;y.length>0&&a===null&&(a=new Rn(E,g,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),l=new Rn(E,g,{type:Wn,depthBuffer:!1,stencilBuffer:!1}));let v=s===!0&&y.some(R=>R.needsDepthTexture===!0);v!==(o.depthTexture!==null)&&(v===!0&&c===null&&(c=new _i(E,g),r===!0&&(c.format=Si,c.type=cs)),o.dispose(),o.depthTexture=v?c:null,o.resolveDepthBuffer=v,o.storeMultisampledDepthBuffer=v);for(let R=0;R<y.length;R++){let A=y[R];A.setSize&&A.setSize(E,g),v&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(b,E){if(x||b.toneMapping===ei&&y.length===0)return!1;if(M=E,E!==null){let g=E.width,v=E.height;(o.width!==g||o.height!==v)&&this.setSize(g,v)}return _===!1&&b.setRenderTarget(o),m=b.toneMapping,b.toneMapping=ei,!0},this.hasRenderPass=function(){return _},this.end=function(b,E){b.toneMapping=m,x=!0;let g=o,v=a;for(let R=0;R<y.length;R++){let A=y[R];A.enabled!==!1&&(A.render(b,v,g,E),A.needsSwap!==!1&&(g=v,v=v===a?l:a))}if(p!==b.outputColorSpace||S!==b.toneMapping){p=b.outputColorSpace,S=b.toneMapping,u.defines={},me.getTransfer(p)===Se&&(u.defines.SRGB_TRANSFER="");let R=Ex[S];R&&(u.defines[R]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=g.texture,b.setRenderTarget(M),b.render(f,d),M=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var gd=new mn,xd=new _i(1,1),_d=new Fr(1),vd=new Tr,yd=new ga,Md=new Ur,Jf=[],$f=[],Kf=new Float32Array(16),jf=new Float32Array(9),Qf=new Float32Array(4);function Qs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Jf[s];if(r===void 0&&(r=new Float32Array(s),Jf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Fl(i,t){let e=$f[t];e===void 0&&(e=new Int32Array(t),$f[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Tx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function wx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2fv(this.addr,t),qe(e,t)}}function Ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;i.uniform3fv(this.addr,t),qe(e,t)}}function Rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4fv(this.addr,t),qe(e,t)}}function Cx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;Qf.set(n),i.uniformMatrix2fv(this.addr,!1,Qf),qe(e,n)}}function Ix(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;jf.set(n),i.uniformMatrix3fv(this.addr,!1,jf),qe(e,n)}}function Px(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;Kf.set(n),i.uniformMatrix4fv(this.addr,!1,Kf),qe(e,n)}}function Lx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Dx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2iv(this.addr,t),qe(e,t)}}function Nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3iv(this.addr,t),qe(e,t)}}function Ux(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4iv(this.addr,t),qe(e,t)}}function Fx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2uiv(this.addr,t),qe(e,t)}}function Bx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3uiv(this.addr,t),qe(e,t)}}function zx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4uiv(this.addr,t),qe(e,t)}}function Ol(i){return i.version===0&&(i.compareFunction=ch,i.needsUpdate=!0),i}function Hx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ol(xd):r=gd,e.setTexture2D(t||r,s)}function Gx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||yd,s)}function kx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ol(_d):r=Md,e.setTextureCube(t||r,s)}function Vx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vd,s)}function Wx(i){switch(i){case 5126:return Tx;case 35664:return wx;case 35665:return Ax;case 35666:return Rx;case 35674:return Cx;case 35675:return Ix;case 35676:return Px;case 5124:case 35670:return Lx;case 35667:case 35671:return Dx;case 35668:case 35672:return Nx;case 35669:case 35673:return Ux;case 5125:return Fx;case 36294:return Ox;case 36295:return Bx;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Hx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return kx;case 36289:case 36303:case 36311:case 36292:return Vx}}function Xx(i,t){i.uniform1fv(this.addr,t)}function qx(i,t){let e=Qs(t,this.size,2);i.uniform2fv(this.addr,e)}function Yx(i,t){let e=Qs(t,this.size,3);i.uniform3fv(this.addr,e)}function Zx(i,t){let e=Qs(t,this.size,4);i.uniform4fv(this.addr,e)}function Jx(i,t){let e=Qs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $x(i,t){let e=Qs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Kx(i,t){let e=Qs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function jx(i,t){i.uniform1iv(this.addr,t)}function Qx(i,t){i.uniform2iv(this.addr,t)}function t_(i,t){i.uniform3iv(this.addr,t)}function e_(i,t){i.uniform4iv(this.addr,t)}function n_(i,t){i.uniform1uiv(this.addr,t)}function i_(i,t){i.uniform2uiv(this.addr,t)}function s_(i,t){i.uniform3uiv(this.addr,t)}function r_(i,t){i.uniform4uiv(this.addr,t)}function o_(i,t,e){let n=this.cache,s=t.length,r=Fl(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ol(xd):o=gd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function a_(i,t,e){let n=this.cache,s=t.length,r=Fl(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||yd,r[o])}function l_(i,t,e){let n=this.cache,s=t.length,r=Fl(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Ol(_d):o=Md;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function c_(i,t,e){let n=this.cache,s=t.length,r=Fl(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||vd,r[o])}function h_(i){switch(i){case 5126:return Xx;case 35664:return qx;case 35665:return Yx;case 35666:return Zx;case 35674:return Jx;case 35675:return $x;case 35676:return Kx;case 5124:case 35670:return jx;case 35667:case 35671:return Qx;case 35668:case 35672:return t_;case 35669:case 35673:return e_;case 5125:return n_;case 36294:return i_;case 36295:return s_;case 36296:return r_;case 35678:case 36198:case 36298:case 36306:case 35682:return o_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return c_}}var vh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wx(e.type)}},yh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=h_(e.type)}},Mh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},xh=/(\w+)(\])?(\[|\.)?/g;function td(i,t){i.seq.push(t),i.map[t.id]=t}function u_(i,t,e){let n=i.name,s=n.length;for(xh.lastIndex=0;;){let r=xh.exec(n),o=xh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){td(e,c===void 0?new vh(a,i,t):new yh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Mh(a),td(e,u)),e=u}}}var js=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);u_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function ed(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var f_=37297,d_=0;function p_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var nd=new ne;function m_(i){me._getMatrix(nd,me.workingColorSpace,i);let t=`mat3( ${nd.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(i)){case Sr:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function id(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+p_(i.getShaderSource(t),a)}else return r}function g_(i,t){let e=m_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var x_={[Yc]:"Linear",[Zc]:"Reinhard",[Jc]:"Cineon",[$c]:"ACESFilmic",[jc]:"AgX",[Qc]:"Neutral",[Kc]:"Custom"};function __(i,t){let e=x_[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Dl=new N;function v_(){me.getLuminanceCoefficients(Dl);let i=Dl.x.toFixed(4),t=Dl.y.toFixed(4),e=Dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function M_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function S_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ho(i){return i!==""}function sd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function rd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var E_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sh(i){return i.replace(E_,b_)}function b_(i,t){let e=he[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Sh(e)}var T_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function od(i){return i.replace(T_,w_)}function w_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ad(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var A_={[eo]:"SHADOWMAP_TYPE_PCF",[Zs]:"SHADOWMAP_TYPE_VSM"};function R_(i){return A_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var C_={[$s]:"ENVMAP_MODE_REFRACTION"};function I_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":C_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var P_={[Va]:"ENVMAP_BLENDING_MULTIPLY",[_f]:"ENVMAP_BLENDING_MIX",[vf]:"ENVMAP_BLENDING_ADD"};function L_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":P_[i.combine]||"ENVMAP_BLENDING_NONE"}function D_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=R_(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=I_(e),u=L_(e),f=y_(e),d=M_(r),p=s.createProgram(),S,x,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(ho).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(ho).join(`
`),x.length>0&&(x+=`
`)):(S=[ad(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),x=[ad(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?he.tonemapping_pars_fragment:"",e.toneMapping!==ei?__("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,g_("linearToOutputTexel",e.outputColorSpace),v_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ho).join(`
`)),o=Sh(o),o=sd(o,e),o=rd(o,e),a=Sh(a),a=sd(a,e),a=rd(a,e),o=od(o),a=od(a),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,S=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",e.glslVersion===uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let M=m+S+o,y=m+x+a,_=ed(s,s.VERTEX_SHADER,M),b=ed(s,s.FRAGMENT_SHADER,y);s.attachShader(p,_),s.attachShader(p,b),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function E(A){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(p)||"",L=s.getShaderInfoLog(_)||"",B=s.getShaderInfoLog(b)||"",P=I.trim(),H=L.trim(),q=B.trim(),Y=!0,ft=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,_,b);else{let j=id(s,_,"vertex"),G=id(s,b,"fragment");ee("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+P+`
`+j+`
`+G)}else P!==""?jt("WebGLProgram: Program Info Log:",P):(H===""||q==="")&&(ft=!1);ft&&(A.diagnostics={runnable:Y,programLog:P,vertexShader:{log:H,prefix:S},fragmentShader:{log:q,prefix:x}})}s.deleteShader(_),s.deleteShader(b),g=new js(s,p),v=S_(s,p)}let g;this.getUniforms=function(){return g===void 0&&E(this),g};let v;this.getAttributes=function(){return v===void 0&&E(this),v};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(p,f_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=d_++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=_,this.fragmentShader=b,this}var N_=0,Eh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bh(t),e.set(t,n)),n}},bh=class{constructor(t){this.id=N_++,this.code=t,this.usedTimes=0}};function U_(i){return i===ki||i===ao||i===lo}function F_(i,t,e,n,s,r){let o=new wr,a=new Eh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(g){return l.add(g),g===0?"uv":`uv${g}`}function p(g,v,R,A,I,L){let B=A.fog,P=I.geometry,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?A.environment:null,q=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,Y=t.get(g.envMap||H,q),ft=f[g.type],j=n.precision;g.precision!==null&&(j=n.getMaxPrecision(g.precision),j!==g.precision&&jt("WebGLProgram.getParameters:",g.precision,"not supported, using",j,"instead."));let G=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,J=G!==void 0?G.length:0,dt=0;P.morphAttributes.position!==void 0&&(dt=1),P.morphAttributes.normal!==void 0&&(dt=2),P.morphAttributes.color!==void 0&&(dt=3);let bt,K,ht,yt;if(ft){let Ot=ii[ft];bt=Ot.vertexShader,K=Ot.fragmentShader}else{bt=g.vertexShader,K=g.fragmentShader;let Ot=a.getVertexShaderStage(g),be=a.getFragmentShaderStage(g);a.update(g,Ot,be),ht=Ot.id,yt=be.id}let _t=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),z=I.isInstancedMesh===!0,et=I.isBatchedMesh===!0,k=!!g.map,st=!!g.matcap,Q=!!Y,F=Q&&Y.isPMREMTexture===!0,V=!!g.aoMap,W=!!g.lightMap,mt=!!g.bumpMap&&g.wireframe===!1,ct=!!g.normalMap,Ft=!!g.displacementMap,Tt=!!g.emissiveMap,ut=!!g.metalnessMap,wt=!!g.roughnessMap,Lt=g.anisotropy>0,D=g.clearcoat>0,ie=g.diffuseRoughness>0,Gt=g.dispersion>0,Qt=g.retroreflectivity>0,pt=g.iridescence>0,ye=g.sheen>0,qt=g.transmission>0,te=Lt&&!!g.anisotropyMap,C=D&&!!g.clearcoatMap,T=D&&!!g.clearcoatNormalMap,X=D&&!!g.clearcoatRoughnessMap,gt=ie&&!!g.diffuseRoughnessMap,at=pt&&!!g.iridescenceMap,St=pt&&!!g.iridescenceThicknessMap,Rt=ye&&!!g.sheenColorMap,nt=ye&&!!g.sheenRoughnessMap,rt=!!g.specularMap,Ct=!!g.specularColorMap,U=!!g.specularIntensityMap,lt=qt&&!!g.transmissionMap,it=qt&&!!g.thicknessMap,It=!!g.gradientMap,Et=!!g.alphaMap,At=g.alphaTest>0,Jt=!!g.alphaHash,ce=!!g.extensions,vt=ei;g.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(vt=i.toneMapping);let $t=F?Y.isCompressedCubeTexture?Y.image[0].mipmaps:Y.mipmaps:null,le={shaderID:ft,shaderType:g.type,shaderName:g.name,vertexShader:bt,fragmentShader:K,defines:g.defines,customVertexShaderID:ht,customFragmentShaderID:yt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:j,batching:et,batchingColor:et&&I._colorsTexture!==null,instancing:z,instancingColor:z&&I.instanceColor!==null,instancingMorph:z&&I.morphTexture!==null,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:me.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:k,matcap:st,envMap:Q,envMapMode:Q&&Y.mapping,envMapPMREM:F,envMapMaxLod:F?$t.length-1:null,envMapSize:F?$t[0].width:null,aoMap:V,lightMap:W,bumpMap:mt,normalMap:ct,displacementMap:Ft,emissiveMap:Tt,normalMapObjectSpace:ct&&g.normalMapType===Sf,normalMapTangentSpace:ct&&g.normalMapType===Il,packedNormalMap:ct&&g.normalMapType===Il&&U_(g.normalMap.format),metalnessMap:ut,roughnessMap:wt,anisotropy:Lt,anisotropyMap:te,clearcoat:D,clearcoatMap:C,clearcoatNormalMap:T,clearcoatRoughnessMap:X,diffuseRoughness:ie,diffuseRoughnessMap:gt,dispersion:Gt,retroreflection:Qt,iridescence:pt,iridescenceMap:at,iridescenceThicknessMap:St,sheen:ye,sheenColorMap:Rt,sheenRoughnessMap:nt,specularMap:rt,specularColorMap:Ct,specularIntensityMap:U,transmission:qt,transmissionMap:lt,thicknessMap:it,gradientMap:It,opaque:g.transparent===!1&&g.blending===Js&&g.alphaToCoverage===!1,alphaMap:Et,alphaTest:At,alphaHash:Jt,combine:g.combine,mapUv:k&&d(g.map.channel),aoMapUv:V&&d(g.aoMap.channel),lightMapUv:W&&d(g.lightMap.channel),bumpMapUv:mt&&d(g.bumpMap.channel),normalMapUv:ct&&d(g.normalMap.channel),displacementMapUv:Ft&&d(g.displacementMap.channel),emissiveMapUv:Tt&&d(g.emissiveMap.channel),metalnessMapUv:ut&&d(g.metalnessMap.channel),roughnessMapUv:wt&&d(g.roughnessMap.channel),anisotropyMapUv:te&&d(g.anisotropyMap.channel),clearcoatMapUv:C&&d(g.clearcoatMap.channel),clearcoatNormalMapUv:T&&d(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&d(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:gt&&d(g.diffuseRoughnessMap.channel),iridescenceMapUv:at&&d(g.iridescenceMap.channel),iridescenceThicknessMapUv:St&&d(g.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&d(g.sheenColorMap.channel),sheenRoughnessMapUv:nt&&d(g.sheenRoughnessMap.channel),specularMapUv:rt&&d(g.specularMap.channel),specularColorMapUv:Ct&&d(g.specularColorMap.channel),specularIntensityMapUv:U&&d(g.specularIntensityMap.channel),transmissionMapUv:lt&&d(g.transmissionMap.channel),thicknessMapUv:it&&d(g.thicknessMap.channel),alphaMapUv:Et&&d(g.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ct||Lt),vertexNormals:!!P.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!P.attributes.uv&&(k||Et),fog:!!B,useFog:g.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||P.attributes.normal===void 0&&ct===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Mt,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:dt,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:L.filter(Ot=>Ot.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:vt,decodeVideoTexture:k&&g.map.isVideoTexture===!0&&me.getTransfer(g.map.colorSpace)===Se,decodeVideoTextureEmissive:Tt&&g.emissiveMap.isVideoTexture===!0&&me.getTransfer(g.emissiveMap.colorSpace)===Se,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Te,flipSided:g.side===gn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ce&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&g.extensions.multiDraw===!0||et)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return le.vertexUv1s=l.has(1),le.vertexUv2s=l.has(2),le.vertexUv3s=l.has(3),l.clear(),le}function S(g){let v=[];if(g.shaderID?v.push(g.shaderID):(v.push(g.customVertexShaderID),v.push(g.customFragmentShaderID)),g.defines!==void 0)for(let R in g.defines)v.push(R),v.push(g.defines[R]);return g.isRawShaderMaterial===!1&&(x(v,g),m(v,g),v.push(i.outputColorSpace)),v.push(g.customProgramCacheKey),v.join()}function x(g,v){g.push(v.precision),g.push(v.outputColorSpace),g.push(v.envMapMode),g.push(v.envMapPMREM),g.push(v.envMapMaxLod),g.push(v.envMapSize),g.push(v.mapUv),g.push(v.alphaMapUv),g.push(v.lightMapUv),g.push(v.aoMapUv),g.push(v.bumpMapUv),g.push(v.normalMapUv),g.push(v.displacementMapUv),g.push(v.emissiveMapUv),g.push(v.metalnessMapUv),g.push(v.roughnessMapUv),g.push(v.anisotropyMapUv),g.push(v.clearcoatMapUv),g.push(v.clearcoatNormalMapUv),g.push(v.clearcoatRoughnessMapUv),g.push(v.diffuseRoughnessMapUv),g.push(v.iridescenceMapUv),g.push(v.iridescenceThicknessMapUv),g.push(v.sheenColorMapUv),g.push(v.sheenRoughnessMapUv),g.push(v.specularMapUv),g.push(v.specularColorMapUv),g.push(v.specularIntensityMapUv),g.push(v.transmissionMapUv),g.push(v.thicknessMapUv),g.push(v.combine),g.push(v.fogExp2),g.push(v.sizeAttenuation),g.push(v.morphTargetsCount),g.push(v.numSunLights),g.push(v.numDirLights),g.push(v.numPointLights),g.push(v.numSpotLights),g.push(v.numSpotLightMaps),g.push(v.numHemiLights),g.push(v.numRectAreaLights),g.push(v.numSunLightShadows),g.push(v.numDirLightShadows),g.push(v.numPointLightShadows),g.push(v.numSpotLightShadows),g.push(v.numSpotLightShadowsWithMaps),g.push(v.numLightProbes),g.push(v.numLightProbeGrids),g.push(v.shadowMapType),g.push(v.toneMapping),g.push(v.numClippingPlanes),g.push(v.numClipIntersection),g.push(v.depthPacking)}function m(g,v){o.disableAll(),v.instancing&&o.enable(0),v.instancingColor&&o.enable(1),v.instancingMorph&&o.enable(2),v.matcap&&o.enable(3),v.envMap&&o.enable(4),v.normalMapObjectSpace&&o.enable(5),v.normalMapTangentSpace&&o.enable(6),v.clearcoat&&o.enable(7),v.iridescence&&o.enable(8),v.alphaTest&&o.enable(9),v.vertexColors&&o.enable(10),v.vertexAlphas&&o.enable(11),v.vertexUv1s&&o.enable(12),v.vertexUv2s&&o.enable(13),v.vertexUv3s&&o.enable(14),v.vertexTangents&&o.enable(15),v.anisotropy&&o.enable(16),v.alphaHash&&o.enable(17),v.batching&&o.enable(18),v.dispersion&&o.enable(19),v.retroreflection&&o.enable(24),v.diffuseRoughness&&o.enable(25),v.batchingColor&&o.enable(20),v.gradientMap&&o.enable(21),v.packedNormalMap&&o.enable(22),v.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),v.numLightProbeGrids>0&&o.enable(22),v.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function M(g){let v=f[g.type],R;if(v){let A=ii[v];R=kf.clone(A.uniforms)}else R=g.uniforms;return R}function y(g,v){let R=h.get(v);return R!==void 0?++R.usedTimes:(R=new D_(i,v,g,s),c.push(R),h.set(v,R)),R}function _(g){if(--g.usedTimes===0){let v=c.indexOf(g);c[v]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function b(g){a.remove(g)}function E(){a.dispose()}return{getParameters:p,getProgramCacheKey:S,getUniforms:M,acquireProgram:y,releaseProgram:_,releaseShaderCache:b,programs:c,dispose:E}}function O_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function B_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ld(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function cd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,S,x,m){let M=i[t];return M===void 0?(M={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:S,renderOrder:f.renderOrder,z:x,group:m},i[t]=M):(M.id=f.id,M.object=f,M.geometry=d,M.material=p,M.materialVariant=o(f),M.groupOrder=S,M.renderOrder=f.renderOrder,M.z=x,M.group=m),t++,M}function l(f,d,p,S,x,m,M){M.reversedDepth===!0&&(x=-x);let y=a(f,d,p,S,x,m);p.transmission>0?n.push(y):p.transparent===!0?s.push(y):e.push(y)}function c(f,d,p,S,x,m){let M=a(f,d,p,S,x,m);p.transmission>0?n.unshift(M):p.transparent===!0?s.unshift(M):e.unshift(M)}function h(f,d){e.length>1&&e.sort(f||B_),n.length>1&&n.sort(d||ld),s.length>1&&s.sort(d||ld)}function u(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function z_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new cd,i.set(n,[o])):s>=r.length?(o=new cd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function H_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new oe};break;case"SpotLight":e={position:new N,direction:new N,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function G_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var k_=0;function V_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function W_(i){let t=new H_,e=G_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new re,o=new re;function a(c){let h=0,u=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,p=0,S=0,x=0,m=0,M=0,y=0,_=0,b=0,E=0,g=0,v=0,R=0,A=0;c.sort(V_);for(let L=0,B=c.length;L<B;L++){let P=c[L],H=P.color,q=P.intensity,Y=P.distance,ft=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ki?ft=P.shadow.map.texture:ft=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=H.r*q,u+=H.g*q,f+=H.b*q;else if(P.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(P.sh.coefficients[j],q);A++}else if(P.isSunLight){let j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let G=P.shadow,J=e.get(P);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[p]=J,n.sunShadowMap[p]=ft;let dt=G.getViewportCount();for(let bt=0;bt<dt;bt++)n.sunShadowMatrix[S+bt]=G.getMatrix(bt),n.sunShadowCascade[S+bt]=G._cascadeData[bt];S+=dt,p++}n.sun[d]=j,d++}else if(P.isDirectionalLight){let j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let G=P.shadow,J=e.get(P);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,n.directionalShadow[x]=J,n.directionalShadowMap[x]=ft,n.directionalShadowMatrix[x]=P.shadow.matrix,b++}n.directional[x]=j,x++}else if(P.isSpotLight){let j=t.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(H).multiplyScalar(q),j.distance=Y,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,n.spot[M]=j;let G=P.shadow;if(P.map&&(n.spotLightMap[v]=P.map,v++,G.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[M]=G.matrix,P.castShadow){let J=e.get(P);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,n.spotShadow[M]=J,n.spotShadowMap[M]=ft,g++}M++}else if(P.isRectAreaLight){let j=t.get(P);j.color.copy(H).multiplyScalar(q),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),n.rectArea[y]=j,y++}else if(P.isPointLight){let j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),j.distance=P.distance,j.decay=P.decay,P.castShadow){let G=P.shadow,J=e.get(P);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,J.shadowCameraNear=G.camera.near,J.shadowCameraFar=G.camera.far,n.pointShadow[m]=J,n.pointShadowMap[m]=ft,n.pointShadowMatrix[m]=P.shadow.matrix,E++}n.point[m]=j,m++}else if(P.isHemisphereLight){let j=t.get(P);j.skyColor.copy(P.color).multiplyScalar(q),j.groundColor.copy(P.groundColor).multiplyScalar(q),n.hemi[_]=j,_++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Bt.LTC_FLOAT_1,n.rectAreaLTC2=Bt.LTC_FLOAT_2):(n.rectAreaLTC1=Bt.LTC_HALF_1,n.rectAreaLTC2=Bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.sunLength!==d||I.directionalLength!==x||I.pointLength!==m||I.spotLength!==M||I.rectAreaLength!==y||I.hemiLength!==_||I.numSunShadows!==p||I.numDirectionalShadows!==b||I.numPointShadows!==E||I.numSpotShadows!==g||I.numSpotMaps!==v||I.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=x,n.spot.length=M,n.rectArea.length=y,n.point.length=m,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+v-R,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,I.sunLength=d,I.directionalLength=x,I.pointLength=m,I.spotLength=M,I.rectAreaLength=y,I.hemiLength=_,I.numSunShadows=p,I.numDirectionalShadows=b,I.numPointShadows=E,I.numSpotShadows=g,I.numSpotMaps=v,I.numLightProbes=A,n.version=k_++)}function l(c,h){let u=0,f=0,d=0,p=0,S=0,x=0,m=h.matrixWorldInverse;for(let M=0,y=c.length;M<y;M++){let _=c[M];if(_.isSunLight){let b=n.sun[u];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(m),u++}else if(_.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(_.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let b=n.rectArea[S];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),S++}else if(_.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let b=n.hemi[x];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function hd(i){let t=new W_(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):e.push(u)}function a(u){n.push(u)}function l(){t.setup(e),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function X_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new hd(i),t.set(s,[a])):r>=o.length?(a=new hd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Z_=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],J_=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],ud=new re,co=new N,_h=new N;function $_(i,t,e){let n=new Oi,s=new xt,r=new xt,o=new Fe,a=new Ra,l=new Ca,c={},h=e.maxTextureSize,u={[Gi]:gn,[gn]:Gi,[Te]:Te},f=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:q_,fragmentShader:Y_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Ce;p.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new ot(p,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eo;let m=this.type;this.render=function(E,g,v){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||E.length===0)return;this.type===ka&&(jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=eo);let R=i.getRenderTarget(),A=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),L=i.state;L.setBlending(os),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let B=m!==this.type;B&&g.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(H=>H.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,H=E.length;P<H;P++){let q=E[P],Y=q.shadow;if(Y===void 0){jt("WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let ft=Y.getFrameExtents();s.multiply(ft),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ft.x),s.x=r.x*ft.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ft.y),s.y=r.y*ft.y,Y.mapSize.y=r.y));let j=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=j,Y.map===null||B===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Zs){if(q.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Rn(s.x,s.y,{format:ki,type:Wn,minFilter:pn,magFilter:pn,generateMipmaps:!1}),Y.map.texture.name=q.name+".shadowMap",Y.map.depthTexture=new _i(s.x,s.y,Un),Y.map.depthTexture.name=q.name+".shadowMapDepth",Y.map.depthTexture.format=pi,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=je,Y.map.depthTexture.magFilter=je}else q.isPointLight?(Y.map=new uo(s.x),Y.map.depthTexture=new Fr(s.x,Vn)):(Y.map=new Rn(s.x,s.y),Y.map.depthTexture=new _i(s.x,s.y,Vn)),Y.map.depthTexture.name=q.name+".shadowMap",Y.map.depthTexture.format=pi,this.type===eo?(Y.map.depthTexture.compareFunction=j?lh:ah,Y.map.depthTexture.minFilter=pn,Y.map.depthTexture.magFilter=pn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=je,Y.map.depthTexture.magFilter=je);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let G=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();q.isPointLight!==!0&&Y.updateMatrices(q,v);let J=(Y.camera.layers.mask&4294967294)!==0?Y.camera.layers:v.layers;for(let dt=0;dt<G;dt++){let bt=Y.getCamera(dt);if(q.isPointLight){let K=Y.camera,ht=Y.matrix,yt=q.distance||K.far;yt!==K.far&&(K.far=yt,K.updateProjectionMatrix()),co.setFromMatrixPosition(q.matrixWorld),K.position.copy(co),_h.copy(K.position),_h.add(Z_[dt]),K.up.copy(J_[dt]),K.lookAt(_h),K.updateMatrixWorld(),ht.makeTranslation(-co.x,-co.y,-co.z),ud.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(ud,K.coordinateSystem,K.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,dt),i.clear();else{dt===0&&(i.setRenderTarget(Y.map),i.clear());let K=Y.getViewport(dt);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),L.viewport(o)}n=Y.getFrustum(dt),_(g,v,bt,q,J,this.type)}Y.isPointLightShadow!==!0&&this.type===Zs&&M(Y,v),Y.needsUpdate=!1}m=this.type,x.needsUpdate=!1,i.setRenderTarget(R,A,I)};function M(E,g){let v=t.update(S);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Rn(s.x,s.y,{format:ki,type:Wn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(g,null,v,f,S,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(g,null,v,d,S,null)}function y(E,g,v,R){let A=null,I=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)A=I;else if(A=v.isPointLight===!0?l:a,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let L=A.uuid,B=g.uuid,P=c[L];P===void 0&&(P={},c[L]=P);let H=P[B];H===void 0&&(H=A.clone(),P[B]=H,g.addEventListener("dispose",b)),A=H}if(A.visible=g.visible,A.wireframe=g.wireframe,R===Zs?A.side=g.shadowSide!==null?g.shadowSide:g.side:A.side=g.shadowSide!==null?g.shadowSide:u[g.side],A.alphaMap=g.alphaMap,A.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,A.map=g.map,A.clipShadows=g.clipShadows,A.clippingPlanes=g.clippingPlanes,A.clipIntersection=g.clipIntersection,A.displacementMap=g.displacementMap,A.displacementScale=g.displacementScale,A.displacementBias=g.displacementBias,A.wireframeLinewidth=g.wireframeLinewidth,A.linewidth=g.linewidth,v.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let L=i.properties.get(A);L.light=v}return A}function _(E,g,v,R,A,I){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===Zs)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);let P=t.update(E),H=E.material;if(Array.isArray(H)){let q=P.groups;for(let Y=0,ft=q.length;Y<ft;Y++){let j=q[Y],G=H[j.materialIndex];if(G&&G.visible){let J=y(E,G,R,I);E.onBeforeShadow(i,E,g,v,P,J,j),i.renderBufferDirect(v,null,P,J,E,j),E.onAfterShadow(i,E,g,v,P,J,j)}}}else if(H.visible){let q=y(E,H,R,I);E.onBeforeShadow(i,E,g,v,P,q,null),i.renderBufferDirect(v,null,P,q,E,null),E.onAfterShadow(i,E,g,v,P,q,null)}}let B=E.children;for(let P=0,H=B.length;P<H;P++)_(B[P],g,v,R,A,I)}function b(E){E.target.removeEventListener("dispose",b);for(let v in c){let R=c[v],A=E.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}function K_(i,t){function e(){let U=!1,lt=new Fe,it=null,It=new Fe(0,0,0,0);return{setMask:function(Et){it!==Et&&!U&&(i.colorMask(Et,Et,Et,Et),it=Et)},setLocked:function(Et){U=Et},setClear:function(Et,At,Jt,ce,vt){vt===!0&&(Et*=ce,At*=ce,Jt*=ce),lt.set(Et,At,Jt,ce),It.equals(lt)===!1&&(i.clearColor(Et,At,Jt,ce),It.copy(lt))},reset:function(){U=!1,it=null,It.set(-1,0,0,0)}}}function n(){let U=!1,lt=!1,it=null,It=null,Et=null;return{setReversed:function(At){if(lt!==At){let Jt=t.get("EXT_clip_control");At?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),lt=At;let ce=Et;Et=null,this.setClear(ce)}},getReversed:function(){return lt},setTest:function(At){At?Mt(i.DEPTH_TEST):z(i.DEPTH_TEST)},setMask:function(At){it!==At&&!U&&(i.depthMask(At),it=At)},setFunc:function(At){if(lt&&(At=Lf[At]),It!==At){switch(At){case sa:i.depthFunc(i.NEVER);break;case ra:i.depthFunc(i.ALWAYS);break;case oa:i.depthFunc(i.LESS);break;case Ns:i.depthFunc(i.LEQUAL);break;case aa:i.depthFunc(i.EQUAL);break;case la:i.depthFunc(i.GEQUAL);break;case ca:i.depthFunc(i.GREATER);break;case ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}It=At}},setLocked:function(At){U=At},setClear:function(At){Et!==At&&(Et=At,lt&&(At=1-At),i.clearDepth(At))},reset:function(){U=!1,it=null,It=null,Et=null,lt=!1}}}function s(){let U=!1,lt=null,it=null,It=null,Et=null,At=null,Jt=null,ce=null,vt=null;return{setTest:function($t){U||($t?Mt(i.STENCIL_TEST):z(i.STENCIL_TEST))},setMask:function($t){lt!==$t&&!U&&(i.stencilMask($t),lt=$t)},setFunc:function($t,le,Ot){(it!==$t||It!==le||Et!==Ot)&&(i.stencilFunc($t,le,Ot),it=$t,It=le,Et=Ot)},setOp:function($t,le,Ot){(At!==$t||Jt!==le||ce!==Ot)&&(i.stencilOp($t,le,Ot),At=$t,Jt=le,ce=Ot)},setLocked:function($t){U=$t},setClear:function($t){vt!==$t&&(i.clearStencil($t),vt=$t)},reset:function(){U=!1,lt=null,it=null,It=null,Et=null,At=null,Jt=null,ce=null,vt=null}}}let r=new e,o=new n,a=new s,l={},c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],S=null,x=!1,m=null,M=null,y=null,_=null,b=null,E=null,g=null,v=new oe(0,0,0),R=0,A=!1,I=null,L=null,B=null,P=null,H=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,ft=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=ft>=1):j.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=ft>=2);let G=null,J={},dt=i.getParameter(i.SCISSOR_BOX),bt=i.getParameter(i.VIEWPORT),K=new Fe().fromArray(dt),ht=new Fe().fromArray(bt);function yt(U,lt,it,It){let Et=new Uint8Array(4),At=i.createTexture();i.bindTexture(U,At),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<it;Jt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,It,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(lt+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return At}let _t={};_t[i.TEXTURE_2D]=yt(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Mt(i.DEPTH_TEST),o.setFunc(Ns),mt(!1),ct(kc),Mt(i.CULL_FACE),V(os);function Mt(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function z(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function et(U,lt){return f[U]!==lt?(i.bindFramebuffer(U,lt),f[U]=lt,U===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=lt),U===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function k(U,lt){let it=p,It=!1;if(U){it=d.get(lt),it===void 0&&(it=[],d.set(lt,it));let Et=U.textures;if(it.length!==Et.length||it[0]!==i.COLOR_ATTACHMENT0){for(let At=0,Jt=Et.length;At<Jt;At++)it[At]=i.COLOR_ATTACHMENT0+At;it.length=Et.length,It=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,It=!0);It&&i.drawBuffers(it)}function st(U){return S!==U?(i.useProgram(U),S=U,!0):!1}let Q={[as]:i.FUNC_ADD,[tf]:i.FUNC_SUBTRACT,[ef]:i.FUNC_REVERSE_SUBTRACT};Q[nf]=i.MIN,Q[sf]=i.MAX;let F={[rf]:i.ZERO,[of]:i.ONE,[af]:i.SRC_COLOR,[Xc]:i.SRC_ALPHA,[df]:i.SRC_ALPHA_SATURATE,[uf]:i.DST_COLOR,[cf]:i.DST_ALPHA,[lf]:i.ONE_MINUS_SRC_COLOR,[qc]:i.ONE_MINUS_SRC_ALPHA,[ff]:i.ONE_MINUS_DST_COLOR,[hf]:i.ONE_MINUS_DST_ALPHA,[pf]:i.CONSTANT_COLOR,[mf]:i.ONE_MINUS_CONSTANT_COLOR,[gf]:i.CONSTANT_ALPHA,[xf]:i.ONE_MINUS_CONSTANT_ALPHA};function V(U,lt,it,It,Et,At,Jt,ce,vt,$t){if(U===os){x===!0&&(z(i.BLEND),x=!1);return}if(x===!1&&(Mt(i.BLEND),x=!0),U!==Qu){if(U!==m||$t!==A){if((M!==as||b!==as)&&(i.blendEquation(i.FUNC_ADD),M=as,b=as),$t)switch(U){case Js:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yi:i.blendFunc(i.ONE,i.ONE);break;case Vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ee("WebGLState: Invalid blending: ",U);break}else switch(U){case Js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vc:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wc:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",U);break}y=null,_=null,E=null,g=null,v.set(0,0,0),R=0,m=U,A=$t}return}Et=Et||lt,At=At||it,Jt=Jt||It,(lt!==M||Et!==b)&&(i.blendEquationSeparate(Q[lt],Q[Et]),M=lt,b=Et),(it!==y||It!==_||At!==E||Jt!==g)&&(i.blendFuncSeparate(F[it],F[It],F[At],F[Jt]),y=it,_=It,E=At,g=Jt),(ce.equals(v)===!1||vt!==R)&&(i.blendColor(ce.r,ce.g,ce.b,vt),v.copy(ce),R=vt),m=U,A=!1}function W(U,lt){U.side===Te?z(i.CULL_FACE):Mt(i.CULL_FACE);let it=U.side===gn;lt&&(it=!it),mt(it),U.blending===Js&&U.transparent===!1?V(os):V(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let It=U.stencilWrite;a.setTest(It),It&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Tt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Mt(i.SAMPLE_ALPHA_TO_COVERAGE):z(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(U){I!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),I=U)}function ct(U){U!==Ku?(Mt(i.CULL_FACE),U!==L&&(U===kc?i.cullFace(i.BACK):U===ju?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):z(i.CULL_FACE),L=U}function Ft(U){U!==B&&(Y&&i.lineWidth(U),B=U)}function Tt(U,lt,it){U?(Mt(i.POLYGON_OFFSET_FILL),(P!==lt||H!==it)&&(P=lt,H=it,o.getReversed()&&(lt=-lt,it=-it),i.polygonOffset(lt,it))):z(i.POLYGON_OFFSET_FILL)}function ut(U){U?Mt(i.SCISSOR_TEST):z(i.SCISSOR_TEST)}function wt(U){U===void 0&&(U=i.TEXTURE0+q-1),G!==U&&(i.activeTexture(U),G=U)}function Lt(U,lt,it){it===void 0&&(G===null?it=i.TEXTURE0+q-1:it=G);let It=J[it];It===void 0&&(It={type:void 0,texture:void 0},J[it]=It),(It.type!==U||It.texture!==lt)&&(G!==it&&(i.activeTexture(it),G=it),i.bindTexture(U,lt||_t[U]),It.type=U,It.texture=lt)}function D(){let U=J[G];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ie(){try{i.compressedTexImage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function Gt(){try{i.compressedTexImage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function Qt(){try{i.texSubImage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function pt(){try{i.texSubImage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function ye(){try{i.compressedTexSubImage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function qt(){try{i.compressedTexSubImage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function te(){try{i.texStorage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function C(){try{i.texStorage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function T(){try{i.texImage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function X(){try{i.texImage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function gt(U){return u[U]!==void 0?u[U]:i.getParameter(U)}function at(U,lt){u[U]!==lt&&(i.pixelStorei(U,lt),u[U]=lt)}function St(U){K.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),K.copy(U))}function Rt(U){ht.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),ht.copy(U))}function nt(U,lt){let it=c.get(lt);it===void 0&&(it=new WeakMap,c.set(lt,it));let It=it.get(U);It===void 0&&(It=i.getUniformBlockIndex(lt,U.name),i.uniformBlockBinding(lt,It,It),it.set(U,It))}function rt(U,lt,it){let Et=c.get(lt).get(U);l[Et]!==it&&(i.bindBufferBase(i.UNIFORM_BUFFER,Et,it),l[Et]=it)}function Ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},G=null,J={},f={},l={},d=new WeakMap,p=[],S=null,x=!1,m=null,M=null,y=null,_=null,b=null,E=null,g=null,v=new oe(0,0,0),R=0,A=!1,I=null,L=null,B=null,P=null,H=null,K.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Mt,disable:z,bindFramebuffer:et,drawBuffers:k,useProgram:st,setBlending:V,setMaterial:W,setFlipSided:mt,setCullFace:ct,setLineWidth:Ft,setPolygonOffset:Tt,setScissorTest:ut,activeTexture:wt,bindTexture:Lt,unbindTexture:D,compressedTexImage2D:ie,compressedTexImage3D:Gt,texImage2D:T,texImage3D:X,pixelStorei:at,getParameter:gt,updateUBOMapping:nt,uniformBlockBinding:rt,texStorage2D:te,texStorage3D:C,texSubImage2D:Qt,texSubImage3D:pt,compressedTexSubImage2D:ye,compressedTexSubImage3D:qt,scissor:St,viewport:Rt,reset:Ct}}function j_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,h=new WeakMap,u=new Set,f,d=new WeakMap,p=new Set,S=new FinalizationRegistry(C=>p.delete(C)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,T){return x?new OffscreenCanvas(C,T):Er("canvas")}function M(C,T,X){let gt=1,at=te(C);if((at.width>X||at.height>X)&&(gt=X/Math.max(at.width,at.height)),gt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let St=Math.floor(gt*at.width),Rt=Math.floor(gt*at.height);f===void 0&&(f=m(St,Rt));let nt=T?m(St,Rt):f;return nt.width=St,nt.height=Rt,nt.getContext("2d").drawImage(C,0,0,St,Rt),jt("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+St+"x"+Rt+")."),nt}else return"data"in C&&jt("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),C;return C}function y(C){return C.generateMipmaps}function _(C){i.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(C,T,X,gt,at,St=!1){if(C!==null){if(i[C]!==void 0)return i[C];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Rt;gt&&(Rt=t.get("EXT_texture_norm16"),Rt||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=T;if(T===i.RED&&(X===i.FLOAT&&(nt=i.R32F),X===i.HALF_FLOAT&&(nt=i.R16F),X===i.UNSIGNED_BYTE&&(nt=i.R8),X===i.UNSIGNED_SHORT&&Rt&&(nt=Rt.R16_EXT),X===i.SHORT&&Rt&&(nt=Rt.R16_SNORM_EXT)),T===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(nt=i.R8UI),X===i.UNSIGNED_SHORT&&(nt=i.R16UI),X===i.UNSIGNED_INT&&(nt=i.R32UI),X===i.BYTE&&(nt=i.R8I),X===i.SHORT&&(nt=i.R16I),X===i.INT&&(nt=i.R32I)),T===i.RG&&(X===i.FLOAT&&(nt=i.RG32F),X===i.HALF_FLOAT&&(nt=i.RG16F),X===i.UNSIGNED_BYTE&&(nt=i.RG8),X===i.UNSIGNED_SHORT&&Rt&&(nt=Rt.RG16_EXT),X===i.SHORT&&Rt&&(nt=Rt.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(nt=i.RG8UI),X===i.UNSIGNED_SHORT&&(nt=i.RG16UI),X===i.UNSIGNED_INT&&(nt=i.RG32UI),X===i.BYTE&&(nt=i.RG8I),X===i.SHORT&&(nt=i.RG16I),X===i.INT&&(nt=i.RG32I)),T===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),X===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),X===i.UNSIGNED_INT&&(nt=i.RGB32UI),X===i.BYTE&&(nt=i.RGB8I),X===i.SHORT&&(nt=i.RGB16I),X===i.INT&&(nt=i.RGB32I)),T===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),X===i.UNSIGNED_INT&&(nt=i.RGBA32UI),X===i.BYTE&&(nt=i.RGBA8I),X===i.SHORT&&(nt=i.RGBA16I),X===i.INT&&(nt=i.RGBA32I)),T===i.RGB&&(X===i.UNSIGNED_SHORT&&Rt&&(nt=Rt.RGB16_EXT),X===i.SHORT&&Rt&&(nt=Rt.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(nt=i.R11F_G11F_B10F)),T===i.RGBA){let rt=St?Sr:me.getTransfer(at);X===i.FLOAT&&(nt=i.RGBA32F),X===i.HALF_FLOAT&&(nt=i.RGBA16F),X===i.UNSIGNED_BYTE&&(nt=rt===Se?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&Rt&&(nt=Rt.RGBA16_EXT),X===i.SHORT&&Rt&&(nt=Rt.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function g(C,T){let X;return C?T===null||T===Vn||T===cs?X=i.DEPTH24_STENCIL8:T===Un?X=i.DEPTH32F_STENCIL8:T===Ks&&(X=i.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Vn||T===cs?X=i.DEPTH_COMPONENT24:T===Un?X=i.DEPTH_COMPONENT32F:T===Ks&&(X=i.DEPTH_COMPONENT16),X}function v(C,T){return y(C)===!0||C.isFramebufferTexture&&C.minFilter!==je&&C.minFilter!==pn?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function R(C){let T=new WeakRef(C);n.get(C).__ref=T,p.add(T),S.register(C,T,T)}function A(C){let T=n.get(C).__ref;T!==void 0&&(p.delete(T),S.unregister(T))}function I(C){B(C.target)}function L(C){P(C.target)}function B(C){C.removeEventListener("dispose",I),A(C),q(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&u.delete(C)}function P(C){C.removeEventListener("dispose",L),A(C),ft(C)}function H(){for(let C of p){let T=C.deref();T!==void 0&&(T.isRenderTarget===!0?P(T):B(T))}p.clear(),u.clear()}function q(C){let T=n.get(C);if(T.__webglInit===void 0)return;let X=C.source,gt=d.get(X);if(gt){let at=gt[T.__cacheKey];at.usedTimes--,at.usedTimes===0&&Y(C),Object.keys(gt).length===0&&d.delete(X)}n.remove(C)}function Y(C){let T=n.get(C);i.deleteTexture(T.__webglTexture);let X=C.source,gt=d.get(X);delete gt[T.__cacheKey],o.memory.textures--}function ft(C){let T=n.get(C);T.__depthDisposeCallback&&T.__depthDisposeCallback();let X=C.depthTexture;if(X&&X.renderTarget===C&&B(X),C.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(T.__webglFramebuffer[at]))for(let St=0;St<T.__webglFramebuffer[at].length;St++)i.deleteFramebuffer(T.__webglFramebuffer[at][St]);else i.deleteFramebuffer(T.__webglFramebuffer[at]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[at])}else{if(Array.isArray(T.__webglFramebuffer))for(let at=0;at<T.__webglFramebuffer.length;at++)i.deleteFramebuffer(T.__webglFramebuffer[at]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let at=0;at<T.__webglColorRenderbuffer.length;at++)T.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[at]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let gt=C.textures;for(let at=0,St=gt.length;at<St;at++){let Rt=n.get(gt[at]);Rt.__webglTexture&&(i.deleteTexture(Rt.__webglTexture),o.memory.textures--),n.remove(gt[at])}n.remove(C)}let j=0;function G(){j=0}function J(){return j}function dt(C){j=C}function bt(){let C=j;return C>=s.maxTextures&&jt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),j+=1,C}function K(C){let T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.mipmapsAutoUpdate),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function ht(C,T){let X=n.get(C);if(C.isVideoTexture&&ye(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&X.__version!==C.version){let gt=C.image;if(gt===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{W(X,C,T);return}}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+T)}function yt(C,T){let X=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){W(X,C,T);return}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+T)}function _t(C,T){let X=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){W(X,C,T);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+T)}function Mt(C,T){let X=n.get(C);if(C.version>0&&X.__version!==C.version){mt(X,C,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+T)}let z={[di]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[ua]:i.MIRRORED_REPEAT},et={[je]:i.NEAREST,[yf]:i.NEAREST_MIPMAP_NEAREST,[no]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[qa]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},k={[bf]:i.NEVER,[ch]:i.ALWAYS,[Tf]:i.LESS,[ah]:i.LEQUAL,[wf]:i.EQUAL,[lh]:i.GEQUAL,[Af]:i.GREATER,[Rf]:i.NOTEQUAL};function st(C,T){if(T.type===Un&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===pn||T.magFilter===qa||T.magFilter===no||T.magFilter===Mi||T.minFilter===pn||T.minFilter===qa||T.minFilter===no||T.minFilter===Mi)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,z[T.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,z[T.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,z[T.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,et[T.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,et[T.minFilter]),T.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,k[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===je||T.minFilter!==no&&T.minFilter!==Mi||T.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Q(C,T){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",I),R(T));let gt=T.source,at=d.get(gt);at===void 0&&(at={},d.set(gt,at));let St=K(T);if(St!==C.__cacheKey){at[St]===void 0&&(at[St]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),at[St].usedTimes++;let Rt=at[C.__cacheKey];Rt!==void 0&&(at[C.__cacheKey].usedTimes--,Rt.usedTimes===0&&Y(T)),C.__cacheKey=St,C.__webglTexture=at[St].texture}return X}function F(C,T,X){return Math.floor(Math.floor(C/X)/T)}function V(C,T,X,gt){let St=C.updateRanges;if(St.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,X,gt,T.data);else{St.sort((U,lt)=>U.start-lt.start);let Rt=0;for(let U=1;U<St.length;U++){let lt=St[Rt],it=St[U],It=lt.start+lt.count,Et=F(it.start,T.width,4),At=F(lt.start,T.width,4);it.start<=It+1&&Et===At&&F(it.start+it.count-1,T.width,4)===Et?lt.count=Math.max(lt.count,it.start+it.count-lt.start):(++Rt,St[Rt]=it)}St.length=Rt+1;let nt=e.getParameter(i.UNPACK_ROW_LENGTH),rt=e.getParameter(i.UNPACK_SKIP_PIXELS),Ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let U=0,lt=St.length;U<lt;U++){let it=St[U],It=Math.floor(it.start/4),Et=Math.ceil(it.count/4),At=It%T.width,Jt=Math.floor(It/T.width),ce=Et,vt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,At),e.pixelStorei(i.UNPACK_SKIP_ROWS,Jt),e.texSubImage2D(i.TEXTURE_2D,0,At,Jt,ce,vt,X,gt,T.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,nt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ct)}}function W(C,T,X){let gt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(gt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(gt=i.TEXTURE_3D);let at=Q(C,T),St=T.source;e.bindTexture(gt,C.__webglTexture,i.TEXTURE0+X);let Rt=n.get(St);if(St.version!==Rt.__version||at===!0){if(e.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let vt=me.getPrimaries(me.workingColorSpace),$t=T.colorSpace===Ei?null:me.getPrimaries(T.colorSpace),le=T.colorSpace===Ei||vt===$t?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let rt=M(T.image,!1,s.maxTextureSize);rt=qt(T,rt);let Ct=r.convert(T.format,T.colorSpace),U=r.convert(T.type),lt=E(T.internalFormat,Ct,U,T.normalized,T.colorSpace,T.isVideoTexture);st(gt,T);let it,It=T.mipmaps,Et=T.isVideoTexture!==!0,At=Rt.__version===void 0||at===!0,Jt=St.dataReady,ce=v(T,rt);if(T.isDepthTexture)lt=g(T.format===Si,T.type),At&&(Et?e.texStorage2D(i.TEXTURE_2D,1,lt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,lt,rt.width,rt.height,0,Ct,U,null));else if(T.isDataTexture)if(It.length>0){Et&&At&&e.texStorage2D(i.TEXTURE_2D,ce,lt,It[0].width,It[0].height);for(let vt=0,$t=It.length;vt<$t;vt++)it=It[vt],Et?Jt&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,it.width,it.height,Ct,U,it.data):e.texImage2D(i.TEXTURE_2D,vt,lt,it.width,it.height,0,Ct,U,it.data);T.generateMipmaps=!1}else Et?(At&&e.texStorage2D(i.TEXTURE_2D,ce,lt,rt.width,rt.height),Jt&&V(T,rt,Ct,U)):e.texImage2D(i.TEXTURE_2D,0,lt,rt.width,rt.height,0,Ct,U,rt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Et&&At&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ce,lt,It[0].width,It[0].height,rt.depth);for(let vt=0,$t=It.length;vt<$t;vt++)if(it=It[vt],T.format!==Xn)if(Ct!==null)if(Et){if(Jt)if(T.layerUpdates.size>0){let le=gh(it.width,it.height,T.format,T.type);for(let Ot of T.layerUpdates){let be=it.data.subarray(Ot*le/it.data.BYTES_PER_ELEMENT,(Ot+1)*le/it.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,Ot,it.width,it.height,1,Ct,be)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,it.width,it.height,rt.depth,Ct,it.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,vt,lt,it.width,it.height,rt.depth,0,it.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Et?Jt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,it.width,it.height,rt.depth,Ct,U,it.data):e.texImage3D(i.TEXTURE_2D_ARRAY,vt,lt,it.width,it.height,rt.depth,0,Ct,U,it.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Et&&At&&e.texStorage2D(i.TEXTURE_2D,ce,lt,It[0].width,It[0].height);for(let vt=0,$t=It.length;vt<$t;vt++)it=It[vt],T.format!==Xn?Ct!==null?Et?Jt&&e.compressedTexSubImage2D(i.TEXTURE_2D,vt,0,0,it.width,it.height,Ct,it.data):e.compressedTexImage2D(i.TEXTURE_2D,vt,lt,it.width,it.height,0,it.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Et?Jt&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,it.width,it.height,Ct,U,it.data):e.texImage2D(i.TEXTURE_2D,vt,lt,it.width,it.height,0,Ct,U,it.data)}else if(T.isDataArrayTexture)if(Et){if(At&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ce,lt,rt.width,rt.height,rt.depth),Jt)if(T.layerUpdates.size>0){let vt=gh(rt.width,rt.height,T.format,T.type);for(let $t of T.layerUpdates){let le=rt.data.subarray($t*vt/rt.data.BYTES_PER_ELEMENT,($t+1)*vt/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$t,rt.width,rt.height,1,Ct,U,le)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Ct,U,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,lt,rt.width,rt.height,rt.depth,0,Ct,U,rt.data);else if(T.isData3DTexture)Et?(At&&e.texStorage3D(i.TEXTURE_3D,ce,lt,rt.width,rt.height,rt.depth),Jt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Ct,U,rt.data)):e.texImage3D(i.TEXTURE_3D,0,lt,rt.width,rt.height,rt.depth,0,Ct,U,rt.data);else if(T.isFramebufferTexture){if(At)if(Et)e.texStorage2D(i.TEXTURE_2D,ce,lt,rt.width,rt.height);else{let vt=rt.width,$t=rt.height;for(let le=0;le<ce;le++)e.texImage2D(i.TEXTURE_2D,le,lt,vt,$t,0,Ct,U,null),vt>>=1,$t>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let vt=i.canvas;if(vt.hasAttribute("layoutsubtree")||vt.setAttribute("layoutsubtree","true"),rt.parentNode!==vt){vt.appendChild(rt),u.add(T),vt.onpaint=$t=>{let le=$t.changedElements;for(let Ot of u)le.includes(Ot.image)&&(Ot.needsUpdate=!0)},vt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,rt);else{let le=i.RGBA,Ot=i.RGBA,be=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,le,Ot,be,rt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(It.length>0){if(Et&&At){let vt=te(It[0]);e.texStorage2D(i.TEXTURE_2D,ce,lt,vt.width,vt.height)}for(let vt=0,$t=It.length;vt<$t;vt++)it=It[vt],Et?Jt&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,Ct,U,it):e.texImage2D(i.TEXTURE_2D,vt,lt,Ct,U,it);T.generateMipmaps=!1}else if(Et){if(At){let vt=te(rt);e.texStorage2D(i.TEXTURE_2D,ce,lt,vt.width,vt.height)}Jt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,U,rt)}else e.texImage2D(i.TEXTURE_2D,0,lt,Ct,U,rt);y(T)&&T.mipmapsAutoUpdate===!0&&_(gt),Rt.__version=St.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function mt(C,T,X){if(T.image.length!==6)return;let gt=Q(C,T),at=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+X);let St=n.get(at);if(at.version!==St.__version||gt===!0){e.activeTexture(i.TEXTURE0+X);let Rt=me.getPrimaries(me.workingColorSpace),nt=T.colorSpace===Ei?null:me.getPrimaries(T.colorSpace),rt=T.colorSpace===Ei||Rt===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let Ct=T.isCompressedTexture||T.image[0].isCompressedTexture,U=T.image[0]&&T.image[0].isDataTexture,lt=[];for(let Ot=0;Ot<6;Ot++)!Ct&&!U?lt[Ot]=M(T.image[Ot],!0,s.maxCubemapSize):lt[Ot]=U?T.image[Ot].image:T.image[Ot],lt[Ot]=qt(T,lt[Ot]);let it=lt[0],It=r.convert(T.format,T.colorSpace),Et=r.convert(T.type),At=E(T.internalFormat,It,Et,T.normalized,T.colorSpace),Jt=T.isVideoTexture!==!0,ce=St.__version===void 0||gt===!0,vt=at.dataReady,$t=v(T,it);st(i.TEXTURE_CUBE_MAP,T);let le;if(T.isDepthTexture){if(At=g(T.format===Si,T.type),ce)if(Jt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,At,it.width,it.height);else for(let Ot=0;Ot<6;Ot++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,At,it.width,it.height,0,It,Et,null)}else if(Ct){Jt&&ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,$t,At,it.width,it.height);for(let Ot=0;Ot<6;Ot++){le=lt[Ot].mipmaps;for(let be=0;be<le.length;be++){let Je=le[be];T.format!==Xn?It!==null?Jt?vt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,be,0,0,Je.width,Je.height,It,Je.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,be,At,Je.width,Je.height,0,Je.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,be,0,0,Je.width,Je.height,It,Et,Je.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,be,At,Je.width,Je.height,0,It,Et,Je.data)}}}else{if(le=T.mipmaps,Jt&&ce){le.length>0&&$t++;let Ot=te(lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,$t,At,Ot.width,Ot.height)}for(let Ot=0;Ot<6;Ot++)if(U){Jt?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,0,0,lt[Ot].width,lt[Ot].height,It,Et,lt[Ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,At,lt[Ot].width,lt[Ot].height,0,It,Et,lt[Ot].data);for(let be=0;be<le.length;be++){let Ci=le[be].image[Ot].image;Jt?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,be+1,0,0,Ci.width,Ci.height,It,Et,Ci.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,be+1,At,Ci.width,Ci.height,0,It,Et,Ci.data)}}else{Jt?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,0,0,It,Et,lt[Ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,At,It,Et,lt[Ot]);for(let be=0;be<le.length;be++){let Je=le[be];Jt?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,be+1,0,0,It,Et,Je.image[Ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,be+1,At,It,Et,Je.image[Ot])}}}y(T)&&T.mipmapsAutoUpdate===!0&&_(i.TEXTURE_CUBE_MAP),St.__version=at.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function ct(C,T,X,gt,at,St){let Rt=r.convert(X.format,X.colorSpace),nt=r.convert(X.type),rt=E(X.internalFormat,Rt,nt,X.normalized,X.colorSpace),Ct=n.get(T),U=n.get(X);if(U.__renderTarget=T,!Ct.__hasExternalTextures){let lt=Math.max(1,T.width>>St),it=Math.max(1,T.height>>St);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,St,rt,lt,it,T.depth,0,Rt,nt,null):e.texImage2D(at,St,rt,lt,it,0,Rt,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),pt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,gt,at,U.__webglTexture,0,Qt(T)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,gt,at,U.__webglTexture,St),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(C,T,X){if(i.bindRenderbuffer(i.RENDERBUFFER,C),T.depthBuffer){let gt=T.depthTexture,at=gt&&gt.isDepthTexture?gt.type:null,St=g(T.stencilBuffer,at),Rt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt(T),St,T.width,T.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt(T),St,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,St,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,C)}else{let gt=T.textures;for(let at=0;at<gt.length;at++){let St=gt[at],Rt=r.convert(St.format,St.colorSpace),nt=r.convert(St.type),rt=E(St.internalFormat,Rt,nt,St.normalized,St.colorSpace);pt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt(T),rt,T.width,T.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt(T),rt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,rt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(C,T,X){let gt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let at=n.get(T.depthTexture);at.__renderTarget=T;let St=gt?T.depthTexture.image[0]:T.depthTexture.image;(!at.__webglTexture||St.width!==T.width||St.height!==T.height)&&(St.width=T.width,St.height=T.height,T.depthTexture.needsUpdate=!0),gt?Mt(T.depthTexture,0):ht(T.depthTexture,0);let Rt=at.__webglTexture,nt=Qt(T),rt=gt?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,Ct=T.depthTexture.format===Si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===pi)pt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ct,rt,Rt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,Ct,rt,Rt,0);else if(T.depthTexture.format===Si)pt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ct,rt,Rt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,Ct,rt,Rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ut(C){let T=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){let gt=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),gt){let at=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,gt.removeEventListener("dispose",at)};gt.addEventListener("dispose",at),T.__depthDisposeCallback=at}T.__boundDepthTexture=gt}if(C.depthTexture&&!T.__autoAllocateDepthBuffer)if(X)for(let gt=0;gt<6;gt++)Tt(T.__webglFramebuffer[gt],C,gt);else C.texture.mipmaps.length>0?Tt(T.__webglFramebuffer[0],C,0):Tt(T.__webglFramebuffer,C,0);else if(X){T.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[gt]),T.__webglDepthbuffer[gt]===void 0)T.__webglDepthbuffer[gt]=i.createRenderbuffer(),Ft(T.__webglDepthbuffer[gt],C,!1);else{let at=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=T.__webglDepthbuffer[gt];i.bindRenderbuffer(i.RENDERBUFFER,St),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,St)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Ft(T.__webglDepthbuffer,C,!1);else{let at=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,St),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,St)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(C,T,X){let gt=n.get(C);T!==void 0&&ct(gt.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&ut(C)}function Lt(C){let T=C.texture,X=n.get(C),gt=n.get(T);C.addEventListener("dispose",L),R(C);let at=C.textures,St=C.isWebGLCubeRenderTarget===!0,Rt=at.length>1;if(Rt||(gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture()),gt.__version=T.version,o.memory.textures++),St){X.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(T.mipmaps.length>0){X.__webglFramebuffer[nt]=[];for(let rt=0;rt<T.mipmaps.length;rt++)X.__webglFramebuffer[nt][rt]=i.createFramebuffer()}else X.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(T.mipmaps.length>0){X.__webglFramebuffer=[];for(let nt=0;nt<T.mipmaps.length;nt++)X.__webglFramebuffer[nt]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let nt=0,rt=at.length;nt<rt;nt++){let Ct=n.get(at[nt]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&pt(C)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let nt=0;nt<at.length;nt++){let rt=at[nt];X.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[nt]);let Ct=r.convert(rt.format,rt.colorSpace),U=r.convert(rt.type),lt=E(rt.internalFormat,Ct,U,rt.normalized,rt.colorSpace,C.isXRRenderTarget===!0),it=Qt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,it,lt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,X.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Ft(X.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(St){e.bindTexture(i.TEXTURE_CUBE_MAP,gt.__webglTexture),st(i.TEXTURE_CUBE_MAP,T);for(let nt=0;nt<6;nt++)if(T.mipmaps.length>0)for(let rt=0;rt<T.mipmaps.length;rt++)ct(X.__webglFramebuffer[nt][rt],C,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,rt);else ct(X.__webglFramebuffer[nt],C,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);y(T)?_(i.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(Rt){for(let nt=0,rt=at.length;nt<rt;nt++){let Ct=at[nt],U=n.get(Ct),lt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(lt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,U.__webglTexture),st(lt,Ct),ct(X.__webglFramebuffer,C,Ct,i.COLOR_ATTACHMENT0+nt,lt,0),y(Ct)&&_(lt)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(nt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,gt.__webglTexture),st(nt,T),T.mipmaps.length>0)for(let rt=0;rt<T.mipmaps.length;rt++)ct(X.__webglFramebuffer[rt],C,T,i.COLOR_ATTACHMENT0,nt,rt);else ct(X.__webglFramebuffer,C,T,i.COLOR_ATTACHMENT0,nt,0);y(T)?_(nt):T.mipmaps.length>0&&i.texParameteri(nt,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&ut(C)}function D(C){let T=C.textures;for(let X=0,gt=T.length;X<gt;X++){let at=T[X];if(y(at)&&at.mipmapsAutoUpdate===!0){let St=b(C),Rt=n.get(at).__webglTexture;e.bindTexture(St,Rt),_(St),e.unbindTexture()}}}let ie=[];function Gt(C){if(C.samples>0){if(pt(C)===!1){let T=C.textures,X=C.width,gt=C.height,at=i.COLOR_BUFFER_BIT,St=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(C),nt=T.length>1;if(nt)for(let Ct=0;Ct<T.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Ct=0;Ct<T.length;Ct++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Ct]);let U=n.get(T[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,U,0)}i.blitFramebuffer(0,0,X,gt,0,0,X,gt,at,i.NEAREST),l===!0&&(ie.length=0,ie.push(i.COLOR_ATTACHMENT0+Ct),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&ie.push(St),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let Ct=0;Ct<T.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Ct]);let U=n.get(T[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,U,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let T=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Qt(C){return Math.min(s.maxSamples,C.samples)}function pt(C){let T=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ye(C){let T=o.render.frame;h.get(C)!==T&&(h.set(C,T),C.update())}function qt(C,T){let X=C.colorSpace,gt=C.format,at=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==Mr&&X!==Ei&&(me.getTransfer(X)===Se?(gt!==Xn||at!==Sn)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",X)),T}function te(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=bt,this.resetTextureUnits=G,this.getTextureUnits=J,this.setTextureUnits=dt,this.setTexture2D=ht,this.setTexture2DArray=yt,this.setTexture3D=_t,this.setTextureCube=Mt,this.rebindTextures=wt,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=pt,this.dispose=H}function Q_(i,t){function e(n,s=Ei){let r,o=me.getTransfer(s);if(n===Sn)return i.UNSIGNED_BYTE;if(n===Za)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ja)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ih)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===eh)return i.BYTE;if(n===nh)return i.SHORT;if(n===Ks)return i.UNSIGNED_SHORT;if(n===Ya)return i.INT;if(n===Vn)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===Wn)return i.HALF_FLOAT;if(n===rh)return i.ALPHA;if(n===oh)return i.RGB;if(n===Xn)return i.RGBA;if(n===pi)return i.DEPTH_COMPONENT;if(n===Si)return i.DEPTH_STENCIL;if(n===$a)return i.RED;if(n===Ka)return i.RED_INTEGER;if(n===ki)return i.RG;if(n===ja)return i.RG_INTEGER;if(n===Qa)return i.RGBA_INTEGER;if(n===io||n===so||n===ro||n===oo)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tl||n===el||n===nl||n===il)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===el)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sl||n===rl||n===ol||n===al||n===ll||n===ao||n===cl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sl||n===rl)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ol)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===al)return r.COMPRESSED_R11_EAC;if(n===ll)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ao)return r.COMPRESSED_RG11_EAC;if(n===cl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===hl||n===ul||n===fl||n===dl||n===pl||n===ml||n===gl||n===xl||n===_l||n===vl||n===yl||n===Ml||n===Sl||n===El)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===hl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ul)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ml)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_l)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ml)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===El)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bl||n===Tl||n===wl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===bl)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Al||n===Rl||n===lo||n===Cl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Al)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Rl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var tv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ev=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Th=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Or(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ti({vertexShader:tv,fragmentShader:ev,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ot(new we(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wh=class extends Kn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,S=typeof XRWebGLBinding<"u",x=new Th,m={},M=e.getContextAttributes(),y=null,_=null,b=[],E=[],g=new xt,v=null,R=null,A=new dn;A.viewport=new Fe;let I=new dn;I.viewport=new Fe;let L=[A,I],B=new Ga,P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ht=b[K];return ht===void 0&&(ht=new Bs,b[K]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(K){let ht=b[K];return ht===void 0&&(ht=new Bs,b[K]=ht),ht.getGripSpace()},this.getHand=function(K){let ht=b[K];return ht===void 0&&(ht=new Bs,b[K]=ht),ht.getHandSpace()};function q(K){let ht=E.indexOf(K.inputSource);if(ht===-1)return;let yt=b[ht];yt!==void 0&&(yt.update(K.inputSource,K.frame,c||o),yt.dispatchEvent({type:K.type,data:K.inputSource}))}function Y(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ft);for(let K=0;K<b.length;K++){let ht=E[K];ht!==null&&(E[K]=null,b[K].disconnect(ht))}P=null,H=null,x.reset();for(let K in m)delete m[K];if(t.setRenderTarget(y),d=null,f=null,u=null,s=null,_=null,bt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(g.width,g.height,!1),R!==null){let K=R.camera;K.fov=R.fov,K.zoom=R.zoom,K.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&S&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ft),M.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(g),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,_t=null,Mt=null;M.depth&&(Mt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=M.stencil?Si:pi,_t=M.stencil?cs:Vn);let z={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(z),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Rn(f.textureWidth,f.textureHeight,{format:Xn,type:Sn,depthTexture:new _i(f.textureWidth,f.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let yt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Rn(d.framebufferWidth,d.framebufferHeight,{format:Xn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),bt.setContext(s),bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ft(K){for(let ht=0;ht<K.removed.length;ht++){let yt=K.removed[ht],_t=E.indexOf(yt);_t>=0&&(E[_t]=null,b[_t].disconnect(yt))}for(let ht=0;ht<K.added.length;ht++){let yt=K.added[ht],_t=E.indexOf(yt);if(_t===-1){for(let z=0;z<b.length;z++)if(z>=E.length){E.push(yt),_t=z;break}else if(E[z]===null){E[z]=yt,_t=z;break}if(_t===-1)break}let Mt=b[_t];Mt&&Mt.connect(yt)}}function j(K,ht){ht===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ht.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ht=K.near,yt=K.far;x.texture!==null&&(x.depthNear>0&&(ht=x.depthNear),x.depthFar>0&&(yt=x.depthFar)),B.near=I.near=A.near=ht,B.far=I.far=A.far=yt,(P!==B.near||H!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),P=B.near,H=B.far),B.layers.mask=K.layers.mask|6,A.layers.mask=B.layers.mask&-5,I.layers.mask=B.layers.mask&-3;let _t=K.parent,Mt=B.cameras;j(B,_t);for(let z=0;z<Mt.length;z++)j(Mt[z],_t);B.projectionMatrix.copy(A.projectionMatrix),B.projectionMatrixInverse.copy(A.projectionMatrixInverse),R===null&&K.isPerspectiveCamera&&(R={camera:K,fov:K.fov,zoom:K.zoom}),G(K,B,_t)};function G(K,ht,yt){yt===null?K.matrix.copy(ht.matrixWorld):(K.matrix.copy(yt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ht.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ht.projectionMatrix),K.projectionMatrixInverse.copy(ht.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=da*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(B)},this.getCameraTexture=function(K){return m[K]};let J=null;function dt(K,ht){if(h=ht.getViewerPose(c||o),p=ht,h!==null){let yt=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let _t=!1;yt.length!==B.cameras.length&&(B.cameras.length=0,_t=!0);for(let k=0;k<yt.length;k++){let st=yt[k],Q=null;if(d!==null)Q=d.getViewport(st);else{let V=u.getViewSubImage(f,st);Q=V.viewport,k===0&&(t.setRenderTargetTextures(_,V.colorTexture,V.depthStencilTexture),t.setRenderTarget(_))}let F=L[k];F===void 0&&(F=new dn,F.layers.enable(k),F.viewport=new Fe,L[k]=F),F.matrix.fromArray(st.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(st.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(Q.x,Q.y,Q.width,Q.height),k===0&&(B.matrix.copy(F.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),_t===!0&&B.cameras.push(F)}let Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){u=n.getBinding();let k=u.getDepthInformation(yt[0]);k&&k.isValid&&k.texture&&x.init(k,s.renderState)}if(Mt&&Mt.includes("camera-access")&&S){t.state.unbindTexture(),u=n.getBinding();for(let k=0;k<yt.length;k++){let st=yt[k].camera;if(st){let Q=m[st];Q||(Q=new Or,m[st]=Q);let F=u.getCameraImage(st);Q.sourceTexture=F}}}}for(let yt=0;yt<b.length;yt++){let _t=E[yt],Mt=b[yt];_t!==null&&Mt!==void 0&&Mt.update(_t,ht,c||o)}J&&J(K,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),p=null}let bt=new fd;bt.setAnimationLoop(dt),this.setAnimationLoop=function(K){J=K},this.dispose=function(){}}},nv=new re,Sd=new ne;Sd.set(-1,0,0,0,1,0,0,0,1);function iv(i,t){function e(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function n(x,m){m.color.getRGB(x.fogColor.value,dh(i)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,M,y,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(x,m):m.isMeshLambertMaterial?(r(x,m),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(x,m),u(x,m)):m.isMeshPhongMaterial?(r(x,m),h(x,m),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(x,m),f(x,m),m.isMeshPhysicalMaterial&&d(x,m,_)):m.isMeshMatcapMaterial?(r(x,m),p(x,m)):m.isMeshDepthMaterial?r(x,m):m.isMeshDistanceMaterial?(r(x,m),S(x,m)):m.isMeshNormalMaterial?r(x,m):m.isLineBasicMaterial?(o(x,m),m.isLineDashedMaterial&&a(x,m)):m.isPointsMaterial?l(x,m,M,y):m.isSpriteMaterial?c(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,e(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===gn&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,e(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===gn&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,e(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,e(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let M=t.get(m),y=M.envMap,_=M.envMapRotation;y&&(x.envMap.value=y,x.envMapRotation.value.setFromMatrix4(nv.makeRotationFromEuler(_)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Sd),x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,x.aoMapTransform))}function o(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform))}function a(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function l(x,m,M,y){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*M,x.scale.value=y*.5,m.map&&(x.map.value=m.map,e(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function c(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function u(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function f(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function d(x,m,M){x.ior.value=m.ior,m.diffuseRoughness>0&&(x.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===gn&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.retroreflectivity>0&&(x.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=M.texture,x.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,x.specularIntensityMapTransform))}function p(x,m){m.matcap&&(x.matcap.value=m.matcap)}function S(x,m){let M=t.get(m).light;x.referencePosition.value.setFromMatrixPosition(M.matrixWorld),x.nearDistance.value=M.shadow.camera.near,x.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function sv(i,t,e,n){let s={},r={};function o(M,y){let _=y.program;n.uniformBlockBinding(M,_,s[M.id])}function a(M,y){let _=s[M.id];_===void 0&&(p(M),_=l(M),s[M.id]=_,M.addEventListener("dispose",x));let b=y.program;n.updateUBOMapping(M,b);let E=t.render.frame;r[M.id]!==E&&(c(M),r[M.id]=E)}function l(M){let y=i.createBuffer(),_=M.__size,b=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,_,b),i.bindBuffer(i.UNIFORM_BUFFER,null),y}function c(M){let y=s[M.id],_=M.uniforms,b=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,g=_.length;E<g;E++){let v=_[E];if(Array.isArray(v))for(let R=0,A=v.length;R<A;R++)h(v[R],E,R,b);else h(v,E,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,y,_,b){if(f(M,y,_,b)===!0){let E=M.__offset,g=M.value;if(Array.isArray(g)){let v=0;for(let R=0;R<g.length;R++){let A=g[R],I=S(A,!0);u(A,M.__data,v),v+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else u(g,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,M.__data)}}function u(M,y,_){typeof M=="number"||typeof M=="boolean"?y[_]=M:M.isMatrix3?(y[_]=M.elements[0],y[_+1]=M.elements[1],y[_+2]=M.elements[2],y[_+3]=0,y[_+4]=M.elements[3],y[_+5]=M.elements[4],y[_+6]=M.elements[5],y[_+7]=0,y[_+8]=M.elements[6],y[_+9]=M.elements[7],y[_+10]=M.elements[8],y[_+11]=0):ArrayBuffer.isView(M)?y.set(M.subarray(0,y.length-_),_):M.toArray(y,_)}function f(M,y,_,b){let E=M.value,g=y+"_"+_;if(Array.isArray(E)){b[g]===void 0&&(b[g]=[]);let v=b[g],R=!1;for(let A=0;A<E.length;A++)d(E[A],v,A)===!0&&(R=!0);return R}return d(E,b,g)}function d(M,y,_){if(y[_]===void 0)return typeof M=="number"||typeof M=="boolean"?y[_]=M:ArrayBuffer.isView(M)?y[_]=M.slice():y[_]=M.clone(),!0;{let b=y[_];if(typeof M=="number"||typeof M=="boolean"){if(b!==M)return y[_]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(b.equals(M)===!1)return b.copy(M),!0}}return!1}function p(M){let y=M.uniforms,_=0,b=16;for(let g=0,v=y.length;g<v;g++){let R=Array.isArray(y[g])?y[g]:[y[g]];for(let A=0,I=R.length;A<I;A++){let L=R[A],B=Array.isArray(L.value)?L.value:[L.value],P=Array.isArray(y[g])||Array.isArray(L.value),H=_;for(let Y=0,ft=B.length;Y<ft;Y++){let j=B[Y],G=S(j,P),J=_%b,dt=J%G.boundary,bt=J+dt;_+=dt,bt!==0&&b-bt<G.storage&&(_+=b-bt),Y===0&&(H=_),_+=G.storage}let q=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new q((_-H)/Float32Array.BYTES_PER_ELEMENT),L.__offset=H}}let E=_%b;return E>0&&(_+=b-E),M.__size=_,M.__cache={},this}function S(M,y){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=16,_.storage=48):M.isMatrix4?(_.boundary=16,_.storage=64):M.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(_.boundary=16,_.storage=M.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",M),y===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function x(M){let y=M.target;y.removeEventListener("dispose",x),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:m}}var rv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ni=null;function ov(){return ni===null&&(ni=new Dr(rv,16,16,ki,Wn),ni.name="DFG_LUT",ni.minFilter=pn,ni.magFilter=pn,ni.wrapS=Jn,ni.wrapT=Jn,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}var Ul=class{constructor(t={}){let{canvas:e=Cf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Sn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let S=d,x=new Set([Qa,ja,Ka]),m=new Set([Sn,Vn,Ks,cs,Za,Ja]),M=new Uint32Array(4),y=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},b=null,E=null,g=[],v=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,I=!1,L=null,B=null,P=null,H=null;this._outputColorSpace=Ue;let q=0,Y=0,ft=null,j=-1,G=null,J=new Fe,dt=new Fe,bt=null,K=new oe(0),ht=0,yt=e.width,_t=e.height,Mt=1,z=null,et=null,k=new Fe(0,0,yt,_t),st=new Fe(0,0,yt,_t),Q=!1,F=new Oi,V=new xa,W=!1,mt=!1,ct=new re,Ft=new N,Tt=new Fe,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wt=!1;function Lt(){return ft===null?Mt:1}let D=n;function ie(w,O){return e.getContext(w,O)}let Gt,Qt,pt,ye,qt,te,C,T,X,gt,at,St,Rt,nt,rt,Ct,U,lt,it,It,Et,At,Jt;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",$t,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",Ot,!1),D===null){let O="webgl2";if(D=ie(O,w),D===null)throw ie(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ce()}catch(w){throw e.removeEventListener("webglcontextlost",$t,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",Ot,!1),ee("WebGLRenderer: "+w.message),w}function ce(){Gt=new xx(D),Gt.init(),Et=new Q_(D,Gt),Qt=new ox(D,Gt,t,Et),pt=new K_(D,Gt),Qt.reversedDepthBuffer&&f&&pt.buffers.depth.setReversed(!0),B=D.createFramebuffer(),P=D.createFramebuffer(),H=D.createFramebuffer(),ye=new yx(D),qt=new O_,te=new j_(D,Gt,pt,qt,Qt,Et,ye),C=new gx(A),T=new Sm(D),At=new sx(D,T),X=new _x(D,T,ye,At),gt=new Sx(D,X,T,At,ye),lt=new Mx(D,Qt,te),rt=new ax(qt),at=new F_(A,C,Gt,Qt,At,rt),St=new iv(A,qt),Rt=new z_,nt=new X_(Gt),U=new ix(A,C,pt,gt,p,l),Ct=new $_(A,gt,Qt),Jt=new sv(D,ye,Qt,pt),it=new rx(D,Gt,ye),It=new vx(D,Gt,ye),ye.programs=at.programs,A.capabilities=Qt,A.extensions=Gt,A.properties=qt,A.renderLists=Rt,A.shadowMap=Ct,A.state=pt,A.info=ye}S!==Sn&&(R=new bx(S,e.width,e.height,a,s,r));let vt=new wh(A,D);this.xr=vt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=Gt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Gt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Mt},this.setPixelRatio=function(w){w!==void 0&&(Mt=w,this.setSize(yt,_t,!1))},this.getSize=function(w){return w.set(yt,_t)},this.setSize=function(w,O,tt=!0){if(vt.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=w,_t=O,e.width=Math.floor(w*Mt),e.height=Math.floor(O*Mt),tt===!0&&(e.style.width=w+"px",e.style.height=O+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(yt*Mt,_t*Mt).floor()},this.setDrawingBufferSize=function(w,O,tt){yt=w,_t=O,Mt=tt,e.width=Math.floor(w*tt),e.height=Math.floor(O*tt),this.setViewport(0,0,w,O)},this.setEffects=function(w){if(S===Sn){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let O=0;O<w.length;O++)if(w[O].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(J)},this.getViewport=function(w){return w.copy(k)},this.setViewport=function(w,O,tt,Z){w.isVector4?k.set(w.x,w.y,w.z,w.w):k.set(w,O,tt,Z),pt.viewport(J.copy(k).multiplyScalar(Lt()).round())},this.getScissor=function(w){return w.copy(st)},this.setScissor=function(w,O,tt,Z){w.isVector4?st.set(w.x,w.y,w.z,w.w):st.set(w,O,tt,Z),pt.scissor(dt.copy(st).multiplyScalar(Lt()).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(w){pt.setScissorTest(Q=w)},this.setOpaqueSort=function(w){z=w},this.setTransparentSort=function(w){et=w},this.getClearColor=function(w){return w.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,tt=!0){let Z=0;if(w){let $=!1;if(ft!==null){let Nt=ft.texture.format;$=x.has(Nt)}if($){let Nt=ft.texture.type,kt=m.has(Nt),Dt=U.getClearColor(),zt=U.getClearAlpha(),Yt=Dt.r,se=Dt.g,de=Dt.b;kt?(M[0]=Yt,M[1]=se,M[2]=de,M[3]=zt,D.clearBufferuiv(D.COLOR,0,M)):(y[0]=Yt,y[1]=se,y[2]=de,y[3]=zt,D.clearBufferiv(D.COLOR,0,y))}else Z|=D.COLOR_BUFFER_BIT}O&&(Z|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&(Z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&D.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),L=w},this.dispose=function(){e.removeEventListener("webglcontextlost",$t,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",Ot,!1),U.dispose(),Rt.dispose(),nt.dispose(),te.dispose(),qt.dispose(),C.dispose(),gt.dispose(),X.dispose(),At.dispose(),Jt.dispose(),at.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",iu),vt.removeEventListener("sessionend",su),Ki.stop()};function $t(w){w.preventDefault(),br("WebGLRenderer: Context Lost."),I=!0}function le(){br("WebGLRenderer: Context Restored."),I=!1;let w=ye.autoReset,O=Ct.enabled,tt=Ct.autoUpdate,Z=Ct.needsUpdate,$=Ct.type;ce(),ye.autoReset=w,Ct.enabled=O,Ct.autoUpdate=tt,Ct.needsUpdate=Z,Ct.type=$}function Ot(w){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function be(w){let O=w.target;O.removeEventListener("dispose",be),Je(O)}function Je(w){Ci(w),qt.remove(w)}function Ci(w){let O=qt.get(w).programs;O!==void 0&&(O.forEach(function(tt){at.releaseProgram(tt)}),w.isShaderMaterial&&at.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,tt,Z,$,Nt){O===null&&(O=ut);let kt=$.isMesh&&$.matrixWorld.determinantAffine()<0,Dt=rp(w,O,tt,Z,$);pt.setMaterial(Z,kt);let zt=tt.index,Yt=1;if(Z.wireframe===!0){if(zt=X.getWireframeAttribute(tt),zt===void 0)return;Yt=2}let se=tt.drawRange,de=tt.attributes.position,Wt=se.start*Yt,pe=(se.start+se.count)*Yt;Nt!==null&&(Wt=Math.max(Wt,Nt.start*Yt),pe=Math.min(pe,(Nt.start+Nt.count)*Yt)),zt!==null?(Wt=Math.max(Wt,0),pe=Math.min(pe,zt.count)):de!=null&&(Wt=Math.max(Wt,0),pe=Math.min(pe,de.count));let Ge=pe-Wt;if(Ge<0||Ge===1/0)return;At.setup($,Z,Dt,tt,zt);let Pe,Re=it;if(zt!==null&&(Pe=T.get(zt),Re=It,Re.setIndex(Pe)),$.isMesh)Z.wireframe===!0?(pt.setLineWidth(Z.wireframeLinewidth*Lt()),Re.setMode(D.LINES)):Re.setMode(D.TRIANGLES);else if($.isLine){let rn=Z.linewidth;rn===void 0&&(rn=1),pt.setLineWidth(rn*Lt()),$.isLineSegments?Re.setMode(D.LINES):$.isLineLoop?Re.setMode(D.LINE_LOOP):Re.setMode(D.LINE_STRIP)}else $.isPoints?Re.setMode(D.POINTS):$.isSprite&&Re.setMode(D.TRIANGLES);if($.isBatchedMesh)if(Gt.get("WEBGL_multi_draw"))Re.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let rn=$._multiDrawStarts,Xt=$._multiDrawCounts,un=$._multiDrawCount,Me=zt?T.get(zt).bytesPerElement:1,ji=qt.get(Z).currentProgram.getUniforms();for(let on=0;on<un;on++)ji.setValue(D,"_gl_DrawID",on),Re.render(rn[on]/Me,Xt[on])}else if($.isInstancedMesh)Re.renderInstances(Wt,Ge,$.count);else if(tt.isInstancedBufferGeometry){let rn=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Xt=Math.min(tt.instanceCount,rn);Re.renderInstances(Wt,Ge,Xt)}else Re.render(Wt,Ge)};function nu(w,O,tt,Z){L!==null&&w.isNodeMaterial&&L.setObject(Z,w),W===!0&&rt.setState(w,tt,!1),w.transparent===!0&&w.side===Te&&w.forceSinglePass===!1?(w.side=gn,w.needsUpdate=!0,rr(w,O,Z),w.side=Gi,w.needsUpdate=!0,rr(w,O,Z),w.side=Te):rr(w,O,Z)}this.compile=function(w,O,tt=null){tt===null&&(tt=w),L!==null&&L.renderStart(w,O,tt),E=nt.get(tt),E.init(O),v.push(E),tt.traverseVisible(function($){$.isLight&&$.layers.test(O.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),w!==tt&&w.traverseVisible(function($){$.isLight&&$.layers.test(O.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),E.setupLights(),L!==null&&L.updateLights(E.state.lightsArray),mt=this.localClippingEnabled,W=rt.init(this.clippingPlanes,mt),W===!0&&rt.setGlobalState(this.clippingPlanes,O),L!==null&&Ct.render(E.state.shadowsArray,tt,O);let Z=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Nt=$.material;if(Nt)if(Array.isArray(Nt))for(let kt=0;kt<Nt.length;kt++){let Dt=Nt[kt];nu(Dt,tt,O,$),Z.add(Dt)}else nu(Nt,tt,O,$),Z.add(Nt)}),E=v.pop(),L!==null&&L.renderEnd(),Z},this.compileAsync=function(w,O,tt=null){let Z=this.compile(w,O,tt);return new Promise($=>{function Nt(){if(Z.forEach(function(kt){let zt=qt.get(kt).currentProgram;(zt===void 0||zt.isReady())&&Z.delete(kt)}),Z.size===0){$(w);return}setTimeout(Nt,10)}Gt.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let nc=null;function ip(w){nc&&nc(w)}function iu(){Ki.stop()}function su(){Ki.start()}let Ki=new fd;Ki.setAnimationLoop(ip),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(w){nc=w,vt.setAnimationLoop(w),w===null?Ki.stop():Ki.start()},vt.addEventListener("sessionstart",iu),vt.addEventListener("sessionend",su),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(w,O);let tt=vt.enabled===!0&&vt.isPresenting===!0,Z=R!==null&&(ft===null||tt)&&R.begin(A,ft);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(O),O=vt.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,O,ft),E=nt.get(w,v.length),E.init(O),E.state.textureUnits=te.getTextureUnits(),v.push(E),ct.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?V.setFromArrayCamera(O):F.setFromProjectionMatrix(ct,Dn,O.reversedDepth),mt=this.localClippingEnabled,W=rt.init(this.clippingPlanes,mt),b=Rt.get(w,g.length),b.init(),g.push(b),this.info.render.frame++,vt.enabled===!0&&vt.isPresenting===!0){let kt=A.xr.getDepthSensingMesh();kt!==null&&ic(kt,O,-1/0,A.sortObjects)}ic(w,O,0,A.sortObjects),b.finish(),L!==null&&L.updateLights(E.state.lightsArray),A.sortObjects===!0&&b.sort(z,et),wt=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,wt&&U.addToRenderList(b,w),this.info.autoReset===!0&&this.info.reset(),W===!0&&rt.beginShadows();let $=E.state.shadowsArray;if(Ct.render($,w,O),W===!0&&rt.endShadows(),(Z&&R.hasRenderPass())===!1){let kt=b.opaque,Dt=b.transmissive;if(E.setupLights(),O.isArrayCamera){let zt=O.cameras;if(Dt.length>0)for(let Yt=0,se=zt.length;Yt<se;Yt++){let de=zt[Yt];ou(kt,Dt,w,de)}wt&&U.render(w);for(let Yt=0,se=zt.length;Yt<se;Yt++){let de=zt[Yt];ru(b,w,de,de.viewport)}}else Dt.length>0&&ou(kt,Dt,w,O),wt&&U.render(w),ru(b,w,O)}ft!==null&&Y===0&&(te.updateMultisampleRenderTarget(ft),te.updateRenderTargetMipmap(ft)),Z&&R.end(A),w.isScene===!0&&w.onAfterRender(A,w,O),At.resetDefaultState(),j=-1,G=null,v.pop(),v.length>0?(E=v[v.length-1],te.setTextureUnits(E.state.textureUnits),W===!0&&rt.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,g.pop(),g.length>0?b=g[g.length-1]:b=null,L!==null&&L.renderEnd()};function ic(w,O,tt,Z){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)tt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){let kt=O.isArrayCamera?V:F;if(!w.frustumCulled||w.intersectsFrustum(kt)){Z&&Tt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ct);let Dt=gt.update(w),zt=w.material;zt.visible&&b.push(w,Dt,zt,tt,Tt.z,null,O)}}else if(w.isMesh||w.isLine||w.isPoints){let kt=O.isArrayCamera?V:F;if(!w.frustumCulled||w.intersectsFrustum(kt)){let Dt=gt.update(w),zt=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Tt.copy(w.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Tt.copy(Dt.boundingSphere.center)),Tt.applyMatrix4(w.matrixWorld).applyMatrix4(ct)),Array.isArray(zt)){let Yt=Dt.groups;for(let se=0,de=Yt.length;se<de;se++){let Wt=Yt[se],pe=zt[Wt.materialIndex];pe&&pe.visible&&b.push(w,Dt,pe,tt,Tt.z,Wt,O)}}else zt.visible&&b.push(w,Dt,zt,tt,Tt.z,null,O)}}}let Nt=w.children;for(let kt=0,Dt=Nt.length;kt<Dt;kt++)ic(Nt[kt],O,tt,Z)}function ru(w,O,tt,Z){let{opaque:$,transmissive:Nt,transparent:kt}=w;E.setupLightsView(tt),W===!0&&rt.setGlobalState(A.clippingPlanes,tt),Z&&pt.viewport(J.copy(Z)),$.length>0&&wo($,O,tt),Nt.length>0&&wo(Nt,O,tt),kt.length>0&&wo(kt,O,tt),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function ou(w,O,tt,Z){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Z.id]===void 0){let Wt=Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Z.id]=new Rn(1,1,{generateMipmaps:!0,type:Wt?Wn:Sn,minFilter:Mi,samples:Math.max(4,Qt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:me.workingColorSpace})}let Nt=E.state.transmissionRenderTarget[Z.id],kt=Z.viewport||J;Nt.setSize(kt.z*A.transmissionResolutionScale,kt.w*A.transmissionResolutionScale);let Dt=A.getRenderTarget(),zt=A.getActiveCubeFace(),Yt=A.getActiveMipmapLevel();A.setRenderTarget(Nt),A.getClearColor(K),ht=A.getClearAlpha(),ht<1&&A.setClearColor(16777215,.5),A.clear(),wt&&U.render(tt);let se=A.toneMapping;A.toneMapping=ei;let de=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),E.setupLightsView(Z),W===!0&&rt.setGlobalState(A.clippingPlanes,Z),wo(w,tt,Z),te.updateMultisampleRenderTarget(Nt),te.updateRenderTargetMipmap(Nt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let pe=0,Ge=O.length;pe<Ge;pe++){let Pe=O[pe],{object:Re,geometry:rn,material:Xt,group:un}=Pe;if(Xt.side===Te&&Re.layers.test(Z.layers)){let Me=Xt.side;Xt.side=gn,Xt.needsUpdate=!0,au(Re,tt,Z,rn,Xt,un),Xt.side=Me,Xt.needsUpdate=!0,Wt=!0}}Wt===!0&&(te.updateMultisampleRenderTarget(Nt),te.updateRenderTargetMipmap(Nt))}A.setRenderTarget(Dt,zt,Yt),A.setClearColor(K,ht),de!==void 0&&(Z.viewport=de),A.toneMapping=se}function wo(w,O,tt){let Z=O.isScene===!0?O.overrideMaterial:null;for(let $=0,Nt=w.length;$<Nt;$++){let kt=w[$],{object:Dt,geometry:zt,group:Yt}=kt,se=kt.material;se.allowOverride===!0&&Z!==null&&(se=Z),Dt.layers.test(tt.layers)&&au(Dt,O,tt,zt,se,Yt)}}function au(w,O,tt,Z,$,Nt){L!==null&&$.isNodeMaterial&&L.setObject(w,$),w.onBeforeRender(A,O,tt,Z,$,Nt),w.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(A,O,tt,Z,w,Nt),$.transparent===!0&&$.side===Te&&$.forceSinglePass===!1?($.side=gn,$.needsUpdate=!0,A.renderBufferDirect(tt,O,Z,$,w,Nt),$.side=Gi,$.needsUpdate=!0,A.renderBufferDirect(tt,O,Z,$,w,Nt),$.side=Te):A.renderBufferDirect(tt,O,Z,$,w,Nt),w.onAfterRender(A,O,tt,Z,$,Nt)}function lu(w){let O=0;for(let tt of w)tt.texture!==null&&O++;return O}function rr(w,O,tt){O.isScene!==!0&&(O=ut);let Z=qt.get(w),$=E.state.lights,Nt=E.state.shadowsArray,kt=$.state.version,Dt=at.getParameters(w,$.state,Nt,O,tt,E.state.lightProbeGridArray),zt=at.getProgramCacheKey(Dt),Yt=Z.programs;Z.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,Z.fog=O.fog;let se=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Z.envMap=C.get(w.envMap||Z.environment,se),Z.envMapRotation=Z.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Yt===void 0&&(w.addEventListener("dispose",be),Yt=new Map,Z.programs=Yt,Z.programVariants=new Map);let de=Yt.get(zt);if(de!==void 0){if(Z.currentProgram===de&&Z.lightsStateVersion===kt)return hu(w,Dt),de}else Dt.uniforms=at.getUniforms(w),L!==null&&w.isNodeMaterial&&L.build(w,tt,Dt),w.onBeforeCompile(Dt,A),de=at.acquireProgram(Dt,zt),Yt.set(zt,de),Z.uniforms=Dt.uniforms;let Wt=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Wt.clippingPlanes=rt.uniform),hu(w,Dt),Z.needsLights=ap(w),Z.lightsStateVersion=kt,Z.needsLights&&(Wt.ambientLightColor.value=$.state.ambient,Wt.lightProbe.value=$.state.probe,Wt.sunLights.value=$.state.sun,Wt.sunLightShadows.value=$.state.sunShadow,Wt.directionalLights.value=$.state.directional,Wt.directionalLightShadows.value=$.state.directionalShadow,Wt.spotLights.value=$.state.spot,Wt.spotLightShadows.value=$.state.spotShadow,Wt.rectAreaLights.value=$.state.rectArea,Wt.ltc_1.value=$.state.rectAreaLTC1,Wt.ltc_2.value=$.state.rectAreaLTC2,Wt.pointLights.value=$.state.point,Wt.pointLightShadows.value=$.state.pointShadow,Wt.hemisphereLights.value=$.state.hemi,Wt.sunShadowMatrix.value=$.state.sunShadowMatrix,Wt.sunShadowCascade.value=$.state.sunShadowCascade,Wt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Wt.spotLightMatrix.value=$.state.spotLightMatrix,Wt.spotLightMap.value=$.state.spotLightMap,Wt.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.numLightProbeGrids=lu(E.state.lightProbeGridArray),Z.currentProgram=de,Z.uniformsList=null,de}function sp(w,O,tt,Z,$){let Nt=qt.get(w),kt=Nt.currentProgram.id+","+Z+","+$,Dt=Nt.programVariants.get(kt);return Dt===void 0?(Dt=rr(w,O,tt),Nt.programVariants.set(kt,Dt)):(Nt.currentProgram=Dt,Nt.uniformsList=null,Nt.outputColorSpace=Z,Nt.toneMapping=$),Dt}function cu(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=js.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function hu(w,O){let tt=qt.get(w);tt.outputColorSpace=O.outputColorSpace,tt.batching=O.batching,tt.batchingColor=O.batchingColor,tt.instancing=O.instancing,tt.instancingColor=O.instancingColor,tt.instancingMorph=O.instancingMorph,tt.skinning=O.skinning,tt.morphTargets=O.morphTargets,tt.morphNormals=O.morphNormals,tt.morphColors=O.morphColors,tt.morphTargetsCount=O.morphTargetsCount,tt.numClippingPlanes=O.numClippingPlanes,tt.numIntersection=O.numClipIntersection,tt.vertexAlphas=O.vertexAlphas,tt.vertexTangents=O.vertexTangents,tt.toneMapping=O.toneMapping}function rp(w,O,tt,Z,$){O.isScene!==!0&&(O=ut),te.resetTextureUnits();let Nt=O.fog,kt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?O.environment:null,Dt=ft===null?A.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:me.workingColorSpace,zt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Yt=C.get(Z.envMap||kt,zt),se=Z.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,de=!!tt.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Wt=!!tt.morphAttributes.position,pe=!!tt.morphAttributes.normal,Ge=!!tt.morphAttributes.color,Pe=ei;Z.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Pe=A.toneMapping);let Re=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,rn=Re!==void 0?Re.length:0,Xt=qt.get(Z),un=E.state.lights;if(W===!0&&(mt===!0||w!==G)){let Be=w===G&&Z.id===j;rt.setState(Z,w,Be)}let Me=!1,ji=!1;Z.version===Xt.__version?Xt.needsLights&&Xt.lightsStateVersion!==un.state.version||$.isBatchedMesh&&Xt.batching===!1||!$.isBatchedMesh&&Xt.batching===!0||$.isBatchedMesh&&Xt.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Xt.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Xt.instancing===!1||!$.isInstancedMesh&&Xt.instancing===!0||$.isSkinnedMesh&&Xt.skinning===!1||!$.isSkinnedMesh&&Xt.skinning===!0||$.isInstancedMesh&&Xt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Xt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Xt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Xt.instancingMorph===!1&&$.morphTexture!==null||Xt.envMap!==Yt||Z.fog===!0&&Xt.fog!==Nt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==rt.numPlanes||Xt.numIntersection!==rt.numIntersection)||Xt.vertexAlphas!==se||Xt.vertexTangents!==de||Xt.morphTargets!==Wt||Xt.morphNormals!==pe||Xt.morphColors!==Ge||Xt.morphTargetsCount!==rn||Xt.numLightProbeGrids!==lu(E.state.lightProbeGridArray)?Me=!0:(Xt.outputColorSpace!==Dt||Xt.toneMapping!==Pe)&&(ji=!0):(Me=!0,Xt.__version=Z.version);let on=Xt.currentProgram;(Me===!0||ji===!0)&&(on=ji===!0?sp(Z,O,$,Dt,Pe):rr(Z,O,$),L&&Z.isNodeMaterial&&L.onUpdateProgram(Z,on,Xt));let Ao=!1,Ii=!1,Qi=!1,_e=on.getUniforms(),tn=Xt.uniforms;if(pt.useProgram(on.program)&&(Ao=!0,Ii=!0,Qi=!0),Z.id!==j&&(j=Z.id,Ii=!0),Ao||G!==w){pt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),_e.setValue(D,"projectionMatrix",w.projectionMatrix),_e.setValue(D,"viewMatrix",w.matrixWorldInverse);let $e=_e.map.cameraPosition;$e!==void 0&&$e.setValue(D,Ft.setFromMatrixPosition(w.matrixWorld)),Qt.logarithmicDepthBuffer&&_e.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&_e.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),G!==w&&(G=w,Ii=!0,Qi=!0)}if(Xt.needsLights&&(un.state.sunShadowMap.length>0&&_e.setValue(D,"sunShadowMap",un.state.sunShadowMap,te),un.state.directionalShadowMap.length>0&&_e.setValue(D,"directionalShadowMap",un.state.directionalShadowMap,te),un.state.spotShadowMap.length>0&&_e.setValue(D,"spotShadowMap",un.state.spotShadowMap,te),un.state.pointShadowMap.length>0&&_e.setValue(D,"pointShadowMap",un.state.pointShadowMap,te)),$.isSkinnedMesh){_e.setOptional(D,$,"bindMatrix"),_e.setOptional(D,$,"bindMatrixInverse");let Be=$.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),_e.setValue(D,"boneTexture",Be.boneTexture,te))}$.isBatchedMesh&&(_e.setOptional(D,$,"batchingTexture"),_e.setValue(D,"batchingTexture",$._matricesTexture,te),_e.setOptional(D,$,"batchingIdTexture"),_e.setValue(D,"batchingIdTexture",$._indirectTexture,te),_e.setOptional(D,$,"batchingColorTexture"),$._colorsTexture!==null&&_e.setValue(D,"batchingColorTexture",$._colorsTexture,te));let Bn=tt.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&lt.update($,tt,on),(Ii||Xt.receiveShadow!==$.receiveShadow)&&(Xt.receiveShadow=$.receiveShadow,_e.setValue(D,"receiveShadow",$.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&O.environment!==null&&(tn.envMapIntensity.value=O.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=ov()),Ii){if(_e.setValue(D,"toneMappingExposure",A.toneMappingExposure),Xt.needsLights&&op(tn,Qi),Nt&&Z.fog===!0&&St.refreshFogUniforms(tn,Nt),St.refreshMaterialUniforms(tn,Z,Mt,_t,E.state.transmissionRenderTarget[w.id]),Xt.needsLights&&Xt.numLightProbeGrids>0){let Be=_,$e=0;for(let ri of E.state.lightProbeGridArray)ri.texture!==null&&(Be.textures[$e]=ri.texture,Be.min[$e]=ri.boundingBox.min,Be.max[$e]=ri.boundingBox.max,Be.resolution[$e]=ri.resolution,$e++);for(let ri in Be)Be[ri].length=$e;tn.probesSH.value=Be.textures,tn.probesMin.value=Be.min,tn.probesMax.value=Be.max,tn.probesResolution.value=Be.resolution}js.upload(D,cu(Xt),tn,te)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(js.upload(D,cu(Xt),tn,te),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&_e.setValue(D,"center",$.center),_e.setValue(D,"modelViewMatrix",$.modelViewMatrix),_e.setValue(D,"normalMatrix",$.normalMatrix),_e.setValue(D,"modelMatrix",$.matrixWorld),Z.uniformsGroups!==void 0){let Be=Z.uniformsGroups;for(let $e=0,ri=Be.length;$e<ri;$e++){let fu=Be[$e];Jt.update(fu,on),Jt.bind(fu,on)}}return on}function op(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.sunLights.needsUpdate=O,w.sunLightShadows.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function ap(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return ft},this.setRenderTargetTextures=function(w,O,tt){let Z=qt.get(w);Z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),qt.get(w.texture).__webglTexture=O,qt.get(w.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:tt,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){let tt=qt.get(w);tt.__webglFramebuffer=O,tt.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,tt=0){ft=w,q=O,Y=tt;let Z=null,$=!1,Nt=!1;if(w){let Dt=qt.get(w);if(Dt.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(D.FRAMEBUFFER,Dt.__webglFramebuffer),J.copy(w.viewport),dt.copy(w.scissor),bt=w.scissorTest,pt.viewport(J),pt.scissor(dt),pt.setScissorTest(bt),j=-1;return}else if(Dt.__webglFramebuffer===void 0)te.setupRenderTarget(w);else if(Dt.__hasExternalTextures)te.rebindTextures(w,qt.get(w.texture).__webglTexture,qt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let se=w.depthTexture;if(Dt.__boundDepthTexture!==se){if(se!==null&&qt.has(se)&&(w.width!==se.image.width||w.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(w)}}let zt=w.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Nt=!0);let Yt=qt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Yt[O])?Z=Yt[O][tt]:Z=Yt[O],$=!0):w.samples>0&&te.useMultisampledRTT(w)===!1?Z=qt.get(w).__webglMultisampledFramebuffer:Array.isArray(Yt)?Z=Yt[tt]:Z=Yt,J.copy(w.viewport),dt.copy(w.scissor),bt=w.scissorTest}else J.copy(k).multiplyScalar(Mt).floor(),dt.copy(st).multiplyScalar(Mt).floor(),bt=Q;if(tt!==0&&(Z=B),pt.bindFramebuffer(D.FRAMEBUFFER,Z)&&pt.drawBuffers(w,Z),pt.viewport(J),pt.scissor(dt),pt.setScissorTest(bt),$){let Dt=qt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,Dt.__webglTexture,tt)}else if(Nt){let Dt=O;for(let zt=0;zt<w.textures.length;zt++){let Yt=qt.get(w.textures[zt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+zt,Yt.__webglTexture,tt,Dt)}}else if(w!==null&&tt!==0){let Dt=qt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Dt.__webglTexture,tt)}j=-1};function uu(w){let O=qt.get(w);return(O.__readFormat!==w.format||O.__readType!==w.type)&&(O.__readFormat=w.format,O.__readType=w.type,O.__formatReadable=Qt.textureFormatReadable(w.format),O.__typeReadable=Qt.textureTypeReadable(w.type)),O}this.readRenderTargetPixels=function(w,O,tt,Z,$,Nt,kt,Dt=0){if(!(w&&w.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=qt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&kt!==void 0&&(zt=zt[kt],Array.isArray(zt)&&(zt=zt[0])),zt){pt.bindFramebuffer(D.FRAMEBUFFER,zt);try{let Yt=w.textures[Dt],se=Yt.format,de=Yt.type;w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Dt);let Wt=uu(Yt);if(Wt.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Wt.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-Z&&tt>=0&&tt<=w.height-$&&D.readPixels(O,tt,Z,$,Et.convert(se),Et.convert(de),Nt)}finally{let Yt=ft!==null?qt.get(ft).__webglFramebuffer:null;pt.bindFramebuffer(D.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(w,O,tt,Z,$,Nt,kt,Dt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=qt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&kt!==void 0&&(zt=zt[kt],Array.isArray(zt)&&(zt=zt[0])),zt)if(O>=0&&O<=w.width-Z&&tt>=0&&tt<=w.height-$){pt.bindFramebuffer(D.FRAMEBUFFER,zt);let Yt=w.textures[Dt],se=Yt.format,de=Yt.type;w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Dt);let Wt=uu(Yt);if(Wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,pe),D.bufferData(D.PIXEL_PACK_BUFFER,Nt.byteLength,D.STREAM_READ),D.readPixels(O,tt,Z,$,Et.convert(se),Et.convert(de),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Ge=ft!==null?qt.get(ft).__webglFramebuffer:null;pt.bindFramebuffer(D.FRAMEBUFFER,Ge);let Pe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Pf(D,Pe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,pe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Nt),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(pe),D.deleteSync(Pe),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,tt=0){let Z=Math.pow(2,-tt),$=Math.floor(w.image.width*Z),Nt=Math.floor(w.image.height*Z),kt=O!==null?O.x:0,Dt=O!==null?O.y:0;te.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,tt,0,0,kt,Dt,$,Nt),pt.unbindTexture()},this.copyTextureToTexture=function(w,O,tt=null,Z=null,$=0,Nt=0){let kt,Dt,zt,Yt,se,de,Wt,pe,Ge,Pe=w.isCompressedTexture?w.mipmaps[Nt]:w.image;if(tt!==null)kt=tt.max.x-tt.min.x,Dt=tt.max.y-tt.min.y,zt=tt.isBox3?tt.max.z-tt.min.z:1,Yt=tt.min.x,se=tt.min.y,de=tt.isBox3?tt.min.z:0;else{let _e=Math.pow(2,-$);kt=Math.floor(Pe.width*_e),Dt=Math.floor(Pe.height*_e),w.isDataArrayTexture?zt=Pe.depth:w.isData3DTexture?zt=Math.floor(Pe.depth*_e):zt=1,Yt=0,se=0,de=0}Z!==null?(Wt=Z.x,pe=Z.y,Ge=Z.z):(Wt=0,pe=0,Ge=0);let Re=Et.convert(O.format),rn=Et.convert(O.type),Xt;O.isData3DTexture?(te.setTexture3D(O,0),Xt=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(te.setTexture2DArray(O,0),Xt=D.TEXTURE_2D_ARRAY):(te.setTexture2D(O,0),Xt=D.TEXTURE_2D),pt.activeTexture(D.TEXTURE0),pt.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),pt.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),pt.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);let un=pt.getParameter(D.UNPACK_ROW_LENGTH),Me=pt.getParameter(D.UNPACK_IMAGE_HEIGHT),ji=pt.getParameter(D.UNPACK_SKIP_PIXELS),on=pt.getParameter(D.UNPACK_SKIP_ROWS),Ao=pt.getParameter(D.UNPACK_SKIP_IMAGES);pt.pixelStorei(D.UNPACK_ROW_LENGTH,Pe.width),pt.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pe.height),pt.pixelStorei(D.UNPACK_SKIP_PIXELS,Yt),pt.pixelStorei(D.UNPACK_SKIP_ROWS,se),pt.pixelStorei(D.UNPACK_SKIP_IMAGES,de);let Ii=w.isDataArrayTexture||w.isData3DTexture,Qi=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){let _e=qt.get(w),tn=qt.get(O),Bn=qt.get(_e.__renderTarget),Be=qt.get(tn.__renderTarget);pt.bindFramebuffer(D.READ_FRAMEBUFFER,Bn.__webglFramebuffer),pt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let $e=0;$e<zt;$e++)Ii&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qt.get(w).__webglTexture,$,de+$e),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qt.get(O).__webglTexture,Nt,Ge+$e)),D.blitFramebuffer(Yt,se,Yt+kt,se+Dt,Wt,pe,Wt+kt,pe+Dt,D.DEPTH_BUFFER_BIT,D.NEAREST);pt.bindFramebuffer(D.READ_FRAMEBUFFER,null),pt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||qt.has(w)){let _e=qt.get(w),tn=qt.get(O);pt.bindFramebuffer(D.READ_FRAMEBUFFER,P),pt.bindFramebuffer(D.DRAW_FRAMEBUFFER,H);for(let Bn=0;Bn<zt;Bn++)Ii?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_e.__webglTexture,$,de+Bn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_e.__webglTexture,$),Qi?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,tn.__webglTexture,Nt,Ge+Bn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,tn.__webglTexture,Nt),$!==0?D.blitFramebuffer(Yt,se,Yt+kt,se+Dt,Wt,pe,Wt+kt,pe+Dt,D.COLOR_BUFFER_BIT,D.NEAREST):Qi?D.copyTexSubImage3D(Xt,Nt,Wt,pe,Ge+Bn,Yt,se,kt,Dt):D.copyTexSubImage2D(Xt,Nt,Wt,pe,Yt,se,kt,Dt);pt.bindFramebuffer(D.READ_FRAMEBUFFER,null),pt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Qi?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Xt,Nt,Wt,pe,Ge,kt,Dt,zt,Re,rn,Pe.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Xt,Nt,Wt,pe,Ge,kt,Dt,zt,Re,Pe.data):D.texSubImage3D(Xt,Nt,Wt,pe,Ge,kt,Dt,zt,Re,rn,Pe):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Nt,Wt,pe,kt,Dt,Re,rn,Pe.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Nt,Wt,pe,Pe.width,Pe.height,Re,Pe.data):D.texSubImage2D(D.TEXTURE_2D,Nt,Wt,pe,kt,Dt,Re,rn,Pe);pt.pixelStorei(D.UNPACK_ROW_LENGTH,un),pt.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Me),pt.pixelStorei(D.UNPACK_SKIP_PIXELS,ji),pt.pixelStorei(D.UNPACK_SKIP_ROWS,on),pt.pixelStorei(D.UNPACK_SKIP_IMAGES,Ao),Nt===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&D.generateMipmap(Xt),pt.unbindTexture()},this.initRenderTarget=function(w){qt.get(w).__webglFramebuffer===void 0&&te.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?te.setTextureCube(w,0):w.isData3DTexture?te.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?te.setTexture2DArray(w,0):te.setTexture2D(w,0),pt.unbindTexture()},this.resetState=function(){q=0,Y=0,ft=null,pt.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};function Ee(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ce;l.morphTargetsRelative=a;let c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0,d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Ed(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let S=0;S<o[h].length;++S)d.push(o[h][S][f]);let p=Ed(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Ed(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new en(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<e;p++){let S=h.getComponent(f,p);a.setComponent(f+u,p,S)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Le=510,nr=[85,255,425],xn=[-1,0,1,2],Ji=[2.6,6.1,9.6],Ae=11.4,qn=.9,Ah=20,bd=11,lv=2,yn,Ze,Oe,kh,vn,Ye=null,Rh=!1,Vh=0,tr=null,Ut={pos:null,metroSint:null,metro8:!1,metrobus:!1,troleElev:!1,viaje:!1,pct:null,dist:null,vel:null,nivel:"ligero",noche:!1,rojo:!1,zona:"mixto",pico:!1,llego:!1},go=new oe;function Yn(i,t){go.set(t).convertSRGBToLinear();let e=i.attributes.position.count,n=new Float32Array(e*3);for(let s=0;s<e;s++)n[s*3]=go.r,n[s*3+1]=go.g,n[s*3+2]=go.b;return i.setAttribute("color",new en(n,3)),i}var Kt=(i,t,e,n,s,r,o)=>Yn(new Vt(i,t,e).translate(n,s,r),o),hn=(i,t,e=.38)=>Yn(new xe(e,e,.32,10).rotateX(Math.PI/2).translate(i,e,t),1447446);function Wh(i,t,e){let n=document.createElement("canvas");n.width=n.height=64;let s=n.getContext("2d"),r=s.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,`rgba(${i},${t},${e},0.95)`),r.addColorStop(.45,`rgba(${i},${t},${e},0.35)`),r.addColorStop(1,`rgba(${i},${t},${e},0)`),s.fillStyle=r,s.fillRect(0,0,64,64);let o=new Mn(n);return o.colorSpace=Ue,o}var Yi,Gd,tc,sr,yo,Kh,jh,ql,Ch={};function cv(i,t=16777215,e=2831424){let n=i+t+"_"+e;if(Ch[n])return Ch[n];let s=2502715,r=[],o,a;switch(i){case"hatch":o=4,a=1.85,r=[Kt(o,.8,a,0,.75,0,t),Kt(2.5,.68,a*.86,-.55,1.49,0,s),Kt(2.45,.08,a*.88,-.55,1.86,0,t),Kt(.06,.25,a*.6,o/2,.95,0,10133670)];break;case"sedan":o=4.5,a=1.85,r=[Kt(o,.75,a,0,.72,0,t),Kt(2.3,.62,a*.86,-.15,1.4,0,s),Kt(2.2,.08,a*.88,-.15,1.74,0,t)];break;case"ejec":o=5,a=1.9,r=[Kt(o,.62,a,0,.68,0,t),Kt(2.6,.52,a*.86,-.2,1.25,0,s),Kt(2.5,.07,a*.88,-.2,1.54,0,t),Kt(o*.98,.05,a*1.01,0,.82,0,13225686)];break;case"depor":o=4.4,a=1.95,r=[Kt(o,.5,a,0,.6,0,t),Kt(1.8,.42,a*.82,-.3,1.06,0,s),Kt(1.7,.06,a*.84,-.3,1.28,0,t),Kt(.3,.08,a*.9,-o/2+.2,1.08,0,1118481)];break;case"taxi":o=4.5,a=1.85,r=[Kt(o,.45,a,0,.58,0,16185075),Kt(o,.32,a*1.001,0,.98,0,15217551),Kt(2.3,.62,a*.86,.15,1.45,0,s),Kt(2.2,.08,a*.88,.15,1.79,0,15217551),Kt(.5,.22,.8,.15,1.94,0,16777215)];break;case"suv":o=4.7,a=1.95,r=[Kt(o,.95,a,0,.85,0,t),Kt(3.2,.7,a*.88,-.35,1.67,0,s),Kt(3.1,.09,a*.9,-.35,2.06,0,t)];break;case"micro":o=7.5,a=2.3,r=[Kt(o,1.5,a,0,1.25,0,15526884),Kt(o,.55,a*1.002,0,.75,0,3119698),Kt(o*.92,.6,a*1.004,-.2,1.6,0,s),Kt(o*.95,.12,a,0,2.06,0,13947851)];break;case"torton":o=8.2,a=2.4,r=[Kt(5.6,2.5,a,-1.2,1.95,0,t),Kt(2,1.7,a,2.9,1.45,0,e),Kt(.9,.7,a*.9,3.4,1.95,0,s)];break;case"trailer":o=15,a=2.5,r=[Kt(11.4,2.9,a,-1.7,2.2,0,t),Kt(.2,.3,a,-1.7,.75,0,12597547),Kt(2.8,2.2,a,5.9,1.75,0,e),Kt(1.1,.8,a*.9,6.6,2.35,0,s),Kt(.15,1.6,.15,4.7,3.4,.9,9079434),hn(-5.6,a/2-.12,.5),hn(-5.6,-a/2+.12,.5)];break;case"moto":o=2,a=.6,r=[Kt(1.7,.35,.3,0,.75,0,t),Kt(.5,.75,.42,-.15,1.35,0,e),Yn(new Nn(.2,8,6).translate(-.05,1.9,0),1118481),Yn(new xe(.3,.3,.12,10).rotateX(Math.PI/2).translate(.75,.3,0),1447446),Yn(new xe(.3,.3,.12,10).rotateX(Math.PI/2).translate(-.75,.3,0),1447446)];break}if(i!=="moto"){let c=o/2-.85,h=-o/2+.85,u=a/2-.12,f=o>7?.5:.38;r.push(hn(c,u,f),hn(c,-u,f),hn(h,u,f),hn(h,-u,f))}let l=Ee(r);return l.computeVertexNormals(),Ch[n]={geo:l,L:o,W:a}}function Mo(i,t,e){let n=cv(i,t,e),s=new ve,r=new ot(n.geo,Yi);r.castShadow=!0,s.add(r);let o=i==="moto"?.95:n.L>7?1.1:.9,a=new ot(new Vt(.08,.18,i==="moto"?.2:n.W*.85),sr);a.position.set(-n.L/2-.02,o,0),s.add(a);let l=new ot(ql,Gd);l.scale.set(5.5,1,n.W*2.4),l.position.set(-n.L/2-1.6,.06,0),l.visible=!1,s.add(l);let c=new ot(new Vt(.06,.16,i==="moto"?.16:n.W*.8),Kh);c.position.set(n.L/2+.02,o,0),s.add(c);let h=new ot(ql,tc);return h.scale.set(9,1,n.W*2.2),h.position.set(n.L/2+4.5,.05,0),h.visible=!1,s.add(h),Ze.add(s),{g:s,stop:a,glow:l,haz:h,L:n.L,tipo:i}}var To=[],Yl=[],xo,Xi,er,_n,Xh;function po(i,t,e,n,s,r=0){let o=new ot(new we(i,t).rotateX(-Math.PI/2),new Pt({color:s}));return o.position.set(e,r,n),o.receiveShadow=!0,_n.add(o),o}var Bl=xn.flatMap(i=>nr.map((t,e)=>({x:t+i*Le,i:e})));function hv(){let i=xn[0]*Le,t=xn.length*Le,e=i+t/2;po(t,420,e,0,14673372,-.02),po(t,Ae*2,e,0,3816773,0),po(t,3,e,Ae+1.5,13225156,.01),po(t,3,e,-Ae-1.5,13225156,.01),Bl.forEach(g=>po(12,420,g.x,0,3816773,.005));let n=[];for(let g of xn)for(let v=0;v<Le;v+=10)nr.some(R=>v+10>R-7&&v<R+7)||n.push(new Vt(10,.7,.6).translate(g*Le+v+5,.35,0));let s=new ot(Ee(n),new Pt({color:12172739}));s.castShadow=s.receiveShadow=!0,_n.add(s),Xh=s;let r=[];for(let g of[1,-1]){for(let v of[qn,Ae-.35])r.push(new we(t,.18).rotateX(-Math.PI/2).translate(e,.02,g*v));for(let v of xn)for(let R=0;R<Le;R+=8.5)if(!nr.some(A=>Math.abs(R-A)<9))for(let A of[4.35,7.85])r.push(new we(3,.16).rotateX(-Math.PI/2).translate(v*Le+R,.02,g*A))}Bl.forEach(({x:g})=>{for(let v=-Ae+.6;v<Ae;v+=1.1)Math.abs(v)>qn+.3&&r.push(new we(3.2,.6).rotateX(-Math.PI/2).translate(g-7.6,.025,v));r.push(new we(.4,Ae-qn).rotateX(-Math.PI/2).translate(g-9.8,.025,(Ae+qn)/2)),r.push(new we(.4,Ae-qn).rotateX(-Math.PI/2).translate(g+9.8,.025,-(Ae+qn)/2))}),_n.add(new ot(Ee(r),new ge({color:15921906})));let o=[15918022,15250592,13227743,16045453,12114110,15123414,14209732,11125984,15778427],a=[];for(let g of[1,-1]){let v=0;for(;v<Le-6;){let R=Math.min(7+Math.random()*10,Le-v);if(nr.some(A=>Math.abs(v+R/2-A)<6+R/2)){v+=4;continue}a.push({x:v+R/2,w:R-.8,h:4+Math.random()*(Math.random()<.2?22:9),d:8+Math.random()*8,s:g,dz:Math.random()*1.5,c:o[a.length%o.length]}),v+=R}}let l=new Ne(new Vt(1,1,1).translate(0,.5,0),new Pt({color:16777215}),a.length*xn.length);l.castShadow=l.receiveShadow=!0;let c=new re,h=new We,u=new N,f=new N,d=0;for(let g of xn)for(let v of a)u.set(g*Le+v.x,0,v.s*(Ae+3.5+v.d/2+v.dz)),f.set(v.w,v.h,v.d),l.setMatrixAt(d,c.compose(u,h,f)),l.setColorAt(d,go.set(v.c)),d++;_n.add(l);let p=[];for(let g of[1,-1])for(let v=5;v<Le;v+=17)nr.some(R=>Math.abs(v-R)<9)||p.push({x:v+Math.random()*3,s:g,e:.8+Math.random()*.5});let S=new Ne(new xe(.15,.2,1.4,6).translate(0,.7,0),new Pt({color:8018490}),p.length*xn.length),x=new Ne(new qs(1.2,0).translate(0,2.3,0),new Pt({color:5939290,flatShading:!0}),p.length*xn.length);x.castShadow=!0,d=0;for(let g of xn)for(let v of p)u.set(g*Le+v.x,0,v.s*(Ae+2.2)),f.setScalar(v.e),c.compose(u,h,f),S.setMatrixAt(d,c),x.setMatrixAt(d,c),d++;_n.add(S,x),xo=new ve,_n.add(xo);let m=[],M=[],y=[];for(let g of[1,-1])for(let v of xn)for(let R=10;R<Le;R+=30){let A=v*Le+R;m.push(new xe(.09,.12,7,6).translate(A,3.5,g*(Ae+.6)),new Vt(.15,.12,2.2).translate(A,7,g*(Ae-.4))),M.push(new Vt(.5,.12,.8).translate(A,6.92,g*(Ae-1.3))),y.push(new we(9,9).rotateX(-Math.PI/2).translate(A,.04,g*(Ae-2.5)))}xo.add(new ot(Ee(m),new Pt({color:7172214})),new ot(Ee(M),jh));let _=new ot(Ee(y),new ge({map:tc.map,transparent:!0,depthWrite:!1,blending:yi,opacity:.55}));_.visible=!1,_.name="charcos",xo.add(_),To=Bl.map(({x:g,i:v})=>{let R=(A,I,L)=>{let B=new ve,P=new Pt({color:3882821}),H=new ot(new xe(.12,.14,6,8),P);H.position.y=3,B.add(H);let q=new ot(new Vt(.14,.14,7),P);q.position.set(0,5.9,-3.5),B.add(q);let Y=new ot(new Vt(.45,1.5,.55),new Pt({color:1908514}));Y.position.set(-.1,5.2,-6),Y.castShadow=!0,B.add(Y);let ft=[16722458,16761856,2282347].map((j,G)=>{let J=new ot(new Nn(.17,10,8),new ge({color:2236962}));return J.position.set(-.35,5.68-G*.47,-6),J.userData.on=j,B.add(J),J});return B.position.set(A,0,I),B.rotation.y=L,_n.add(B),ft};return{x:g,off:v*7.3,ida:R(g-10.5,Ae+.9,0),reg:R(g+10.5,-Ae-.9,Math.PI)}});let b=[15029053,3120750,8084694,14722342,3770341,13651850];Yl=[],Bl.forEach(({x:g},v)=>{for(let R=0;R<3;R++){let A=new ve,I=new ot(new xe(.22,.26,.95,8),new Pt({color:b[(v+R)%b.length]}));I.position.y=1.15,I.castShadow=!0;let L=new ot(new xe(.2,.18,.7,8),new Pt({color:2899543}));L.position.y=.35;let B=new ot(new Nn(.2,10,8),new Pt({color:13209186}));B.position.y=1.85;let P=new ot(new Vt(.12,.5,.12),new ge({color:16765952}));P.position.y=2.6,P.visible=!1,A.add(I,L,B,P);let H=R%2?1:-1,q=H*(Ae+1.2);A.position.set(g-8.8+R*.8,0,q),_n.add(A),Yl.push({g:A,susto:P,cx:g,dx:-8.8+R*.8,z:q,modo:"espera",t:Math.random()*2,dir:-H})}});let E=(g,v)=>{let R=document.createElement("canvas");R.width=R.height=128;let A=R.getContext("2d");A.fillStyle=v,A.beginPath(),A.arc(64,64,56,0,7),A.fill(),A.fillStyle="#fff",A.font="bold 80px Arial",A.textAlign="center",A.textBaseline="middle",A.fillText(g,64,70);let I=new Mn(R);I.colorSpace=Ue;let L=new ve,B=new Fi(new xi({map:I}));B.scale.set(5,5,1),B.position.set(0,7.5,Ae+2.5),L.add(B);let P=new ot(new xe(.12,.12,5,6),new Pt({color:7829367}));P.position.set(0,2.5,Ae+2.5),L.add(P);let H=new ot(new we(1.2,Ae-qn).rotateX(-Math.PI/2),new ge({color:v}));return H.position.set(0,.03,(Ae+qn)/2),L.add(H),L.visible=!1,_n.add(L),L};Xi=E("A","#3987e5"),er=E("B","#d95926")}var qh=[12597547,2976949,1381914,12567753,15921903,8028038,14722342,3120750,9185828,2504266],uv=[1381914,2504266,15921903,3816770,12720152,12567753],Tn=[],Ht,Td,ds,Yh="",si=i=>i[Math.floor(Math.random()*i.length)];function kd(){let i=["micro","micro","torton","sedan","sedan","taxi","suv"],t=["ejec","ejec","suv","suv","depor","sedan"],e=Ut.zona==="popular"?i:Ut.zona==="lujo"?t:[...i.slice(0,4),...t.slice(0,4)];return Ut.pico&&(e=[...e,"torton","trailer","trailer","torton","trailer"]),si(e)}function Ih(i,t,e,n,s){let r=si((i==="ejec"||i==="suv"||i==="depor")&&Ut.zona==="lujo"?uv:qh),o=2831424;i==="depor"&&(r=si([12720152,15921903,1381914,14722342])),(i==="torton"||i==="trailer")&&(r=si([15921902,15262416,14277846]),o=si([12597547,2056104,15921906])),i==="moto"&&(r=si([12986408,1402304,2236962]),o=si([3622735,7162945,1793568]));let l={...Mo(i,r,o),dir:t,z:e,x:n,v:s*.7,v0:s,a:0,frena:0,zLane:e,fase:Math.random()*6};return l.g.rotation.y=t>0?0:Math.PI,l.haz.visible=Ut.noche,Tn.push(l),l}function Vd(){for(let s of Tn.splice(0))s!==Ht&&Ze.remove(s.g);Tn.push(Ht);let i=Ut.nivel==="pesado",t=Ht.x,e=i?8.5:36,n=i?7:15;for(let s of[1,-1])for(let r=0;r<3;r++){if(r===0&&Ut.metrobus)continue;let o=s*Ji[r];for(let a=t-80+Math.random()*10;a<t+150;a+=e*(.8+Math.random()*.6))s>0&&r===1&&a>t-(i?13:30)&&a<t+(i?10:40)||!i&&Math.random()<.35||Ih(kd(),s,o,a,n*(.85+Math.random()*.3)*(s<0?1.1:1))}Td=Ih("taxi",1,Ji[1],t-(i?7.5:12),12),Td.esTaxi=!0;for(let s of[1,-1])for(let r of[4.35,7.85])for(let o=0;o<2;o++)Ih("moto",s,s*r,t-60+Math.random()*180,19+Math.random()*4)}var Fn=0,wi=0;function Wd(){let i=null;for(let t of To){let e=t.x-10-Ht.x;e>-1&&(!i||e<i.d)&&(i={s:t,d:e})}return i}function Qh(i){let t=Wd();if(t&&t.s===i&&t.d<90){if(Ut.rojo)return"rojo";if(Ht.v>1.5)return"verde"}let e=((Fn+i.off)%Ah+Ah)%Ah;return e<bd?"verde":e<bd+lv?"amarillo":"rojo"}var us={a:1.6,b:3,T:1.1,s0:2.2};function fv(i){for(let t of To){let e=i.dir>0?t.x-10:t.x+10,n=(e-i.x)*i.dir;if(n>0&&n<70){let s=Qh(t);return s==="rojo"||s==="amarillo"&&n>i.v*i.v/(2*us.b)+2?e:null}}return null}function Ph(i){for(let t of Tn)t.x+=i}var wd=!1;function dv(i){Fn+=i;let t;if(Ut.rojo||Ut.llego?t=0:Ut.vel!=null?t=Ut.vel/3.6:t=Ut.nivel==="pesado"?7:13,Ht.a=(t-Ht.v)*1.2,Ht.v=Math.max(0,Ht.v+Ht.a*i),Ht.x+=Ht.v*i,Ut.rojo&&!wd){let r=Wd();if(r&&r.d>3){let o=-(r.d-3);Ph(o),wi-=o}}wd=Ut.rojo;let e={};for(let r of Tn)r.tipo!=="moto"&&r!==Ht&&(e[r.dir+":"+r.zLane]||=[]).push(r);(e["1:"+Ji[1]]||=[]).push(Ht);for(let r in e){let o=e[r].sort((a,l)=>(l.x-a.x)*l.dir);for(let a=0;a<o.length;a++){let l=o[a];if(l===Ht)continue;let c=o[a-1];l.esTaxi&&(l.v0=Math.max(9,Ht.v+3));let h=1e9,u=0;c&&(h=(c.x-l.x)*l.dir-(c.L+l.L)/2,u=l.v-c.v);let f=fv(l);if(f!=null){let S=(f-l.x)*l.dir-l.L/2;S<h&&(h=S,u=l.v)}l.dir>0&&l.zLane===Ji[1]&&c===Ht&&h<0&&(l.x=Ht.x-(Ht.L+l.L)/2-1.5,l.v=Ht.v);let d=us.s0+Math.max(0,l.v*us.T+l.v*u/(2*Math.sqrt(us.a*us.b))),p=us.a*(1-Math.pow(l.v/l.v0,4)-Math.pow(d/Math.max(h,.1),2));Ut.nivel==="pesado"&&Math.random()<.0015&&(l.frena=1.2),l.frena>0&&(l.frena-=i,p=Math.min(p,-3.5)),p=Math.max(-8,Math.min(us.a,p)),l.a=p,l.v=Math.max(0,l.v+p*i),l.x+=l.v*l.dir*i}for(let a=0;a<o.length;a++)if(o[a]===Ht&&o[a-1]){let l=o[a-1],c=l.x-Ht.x-(l.L+Ht.L)/2;c<4&&(l.x+=4-c+(Ht.v>l.v?30:0))}}for(let r of Tn)r.tipo==="moto"&&(r.fase+=i,r.v=r.v0,r.x+=r.v*r.dir*i,r.z=r.zLane+Math.sin(r.fase*.9)*.6,r.a=0);let n=Ht.x,s=Ut.nivel==="pesado";for(let r of Tn){if(r===Ht)continue;let o=r.x-n;if(r.tipo==="moto"){r.dir>0&&o>170?r.x=n-100-Math.random()*30:r.dir>0&&o<-110?r.x=n+160:r.dir<0&&o<-110&&(r.x=n+160+Math.random()*40);continue}if(r.esTaxi){(o<-60||o>0)&&(r.x=n-(Ht.L+r.L)/2-3,r.v=Ht.v);continue}r.dir>0&&o>170?(r.x=pv(r)-(s?9:30)*(.8+Math.random()*.5),r.v=r.v0*.6):r.dir>0&&o<-110?r.x=Ad(r)+(s?9:30):r.dir<0&&o<-110&&(r.x=Ad(r)+(s?10:34)*(.8+Math.random()*.5),r.v=r.v0*.8)}Ht.x>Le&&(Ph(-Le),wi+=Le),Ht.x<-Le/2&&(Ph(Le),wi-=Le);for(let r of Yl){let o=To.find(h=>h.x===r.cx),a=Qh(o)==="rojo",l=r.cx-7.6,c=h=>Tn.some(u=>u.tipo==="moto"&&Math.abs(u.z-h)<1.6&&(l-u.x)*u.dir>-1&&(l-u.x)*u.dir<24);if(r.modo==="espera")r.t-=i,a&&r.t<=0&&!c(r.z+r.dir*2)&&(r.modo="cruza");else if(r.modo==="cruza"){let h=r.z+r.dir*(a?1.4:2.6)*i;c(h+r.dir*1.2)&&Math.abs(r.z)<Ae?(r.modo="huye",r.dir=-r.dir):(r.z=h,Math.abs(r.z)>=Ae+1.2&&Math.sign(r.z)===Math.sign(r.dir)&&(r.modo="espera",r.t=2+Math.random()*3,r.dir=-Math.sign(r.z)))}else r.z+=r.dir*3.4*i,(Math.abs(r.z)>=Ae+1.2||Math.abs(r.z)<qn+.2)&&(r.modo="espera",r.t=1.2+Math.random()*1.5,Math.abs(r.z)>=Ae+1.2&&(r.dir=-Math.sign(r.z)));r.g.position.z=r.z,r.susto.visible=r.modo==="huye",r.g.position.y=r.modo!=="espera"?Math.abs(Math.sin(Fn*(r.modo==="huye"?16:9)))*.08:0}}function pv(i){let t=1/0;for(let e of Tn)e.dir===i.dir&&e.zLane===i.zLane&&e!==i&&(t=Math.min(t,e.x));return Math.min(t,Ht.x-20)}function Ad(i){let t=-1/0;for(let e of Tn)e.dir===i.dir&&e.zLane===i.zLane&&e!==i&&(t=Math.max(t,e.x));return Math.max(t,Ht.x+60)}function Zl(){let i=Ut.noche,t=Xv(i),e=typeof jl<"u"&&jl==="real";Ze.background=t.t,Ze.fog=new Ar(t.horiz,e?180:110,e?560:320),fs&&(fs.emissive.set(i?16777215:0),fs.emissiveIntensity=i?.9:0),kh.intensity=i?.45:1.7,vn.intensity=i?.25:2.3,vn.color.set(i?9414399:16777215),Kh.color.set(i?16774856:14277071),jh.color.set(i?16769946:9079424),xo.getObjectByName("charcos").visible=i;for(let n of Tn)n.haz.visible=i}var Xd={atras:[-9.5,6.4,0,22,1],diag:[-24,36,-13,8],cerca:[-13,10,-7,6],arriba:[-6,70,-.5,6],propia:[-24,36,-13,8]},mv={atras:[-9.5,6.4,0,22,1],diag:[-50,75,-28,24],cerca:[-16,12,-8,10],arriba:[-10,150,-1,22],propia:[-50,75,-28,24]},Rd={atras:"Atr\xE1s",diag:"Diagonal",cerca:"Cerca",arriba:"Arriba",propia:"Personalizada"},Cd={yaw:.55,pitch:.62,dist:55},En=(()=>{try{return{...Cd,...JSON.parse(localStorage.getItem("vista3dPropia")||"{}")}}catch{return{...Cd}}})();function Id(){try{localStorage.setItem("vista3dPropia",JSON.stringify(En))}catch{}}var Lh=["atras","diag","cerca","arriba","propia"],Ve=(()=>{try{return localStorage.getItem("vista3dCam3")||"atras"}catch{return"atras"}})();Xd[Ve]||(Ve="atras");var Ai=new N,Ri=new N;function qd(i,t){let[e,n,s,r,o=0]=Xd[Ve],a=new N(Ht.x+e,n,Ht.z+s),l=new N(Ht.x+r,o,Ht.z+(Ve==="atras"?0:3));if(t)Ai.copy(a),Ri.copy(l);else{let c=1-Math.exp(-i*3);Ai.lerp(a,c),Ri.lerp(l,c)}Oe.position.copy(Ai),Oe.lookAt(Ri),vn.position.set(Ht.x+25,45,Ht.z+30),vn.target.position.set(Ht.x,0,Ht.z)}function gv(){for(let t of Tn){t.g.position.set(t.x,0,t.z);let e=t.tipo!=="moto"&&(t.a<-.6||t.v<.4);t.stop.material=e?yo:sr,t.glow.visible=e||Ut.noche&&t.tipo!=="moto",t.glow.scale.x=e?5.5:2.5}ds.position.y=3.3+Math.sin(Fn*3)*.2,ds.rotation.y+=.03;for(let t of To){let e=Qh(t),n=e==="rojo"?0:e==="amarillo"?1:2;for(let s of[t.ida,t.reg])s.forEach((r,o)=>r.material.color.set(o===n?r.userData.on:2236962))}for(let t of Yl)t.g.position.x=t.cx+t.dx;let i=Ht.x+wi;if(Ut.viaje&&Ut.pct!=null&&Ut.dist){let t=Ut.dist*1e3,e=i-Math.min(1,Ut.pct)*t,n=e+t;Xi.position.x=e-wi,er.position.x=n-wi,Xi.visible=Math.abs(Xi.position.x-Ht.x)<300,er.visible=Math.abs(er.position.x-Ht.x)<300}else Ut.viaje&&Ut._a!=null?(Xi.position.x=Ut._a-wi,Xi.visible=Math.abs(Xi.position.x-Ht.x)<300,er.visible=!1):Xi.visible=er.visible=!1}function xv(){yn=new Ul({antialias:!0,powerPreference:"high-performance"}),yn.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),yn.shadowMap.enabled=!0,yn.shadowMap.type=ka,yn.outputColorSpace=Ue,yn.domElement.style.cssText="display:block;width:100%;height:100%",Ze=new Rr,Oe=new dn(30,1,.5,700),kh=new Kr(15266040,10134421,1.7),vn=new to(16777215,2.3),vn.castShadow=!0,vn.shadow.mapSize.set(1024,1024),Object.assign(vn.shadow.camera,{left:-45,right:45,top:45,bottom:-45,near:1,far:160}),vn.shadow.bias=-6e-4,Ze.add(kh,vn,vn.target),Yi=new Pt({vertexColors:!0}),Gd=new ge({map:Wh(255,30,20),transparent:!0,depthWrite:!1,blending:yi}),tc=new ge({map:Wh(255,240,190),transparent:!0,depthWrite:!1,blending:yi,opacity:.8}),sr=new ge({color:5901581}),yo=new ge({color:16722458}),Kh=new ge({color:14277071}),jh=new ge({color:9079424}),ql=new we(1,1).rotateX(-Math.PI/2),_n=new ve,Ze.add(_n),hv(),vv(),Ht={...Mo("hatch",16053490),dir:1,z:Ji[1],x:40,v:0,v0:15,a:0,frena:0,zLane:Ji[1]},ds=new ot(new Br(.55,1.1,4).rotateX(Math.PI),new ge({color:3770341})),ds.position.y=3.4,Ht.g.add(ds),Vd(),Yh=Ut.nivel+Ut.zona+Ut.pico+Ut.metrobus,Zl(),qd(0,!0)}function kl(){if(!Ye)return;let i=Ye.clientWidth,t=Ye.clientHeight;!i||!t||(yn.setSize(i,t,!1),Oe.aspect=i/t,Oe.fov=Ve==="atras"||Ve==="propia"?Oe.aspect<1?62:48:Oe.aspect<1?46:Oe.aspect>1.8?21:27,Oe.updateProjectionMatrix())}var _o=0,zl=0,Dh=0,_v=0;function Yd(i){if(Vh=requestAnimationFrame(Yd),document.hidden){_o=i;return}let t=Math.min(.05,_o?(i-_o)/1e3:.016);if(_o=i,Zt&&Zt.listo&&Ut.pos)jv(t),Ti(t);else{let e=Math.ceil(t/.02);for(let n=0;n<e;n++)dv(t/e);gv(),yv(t),qd(t)}yn.render(Ze,Oe),zl+=t,Dh++,zl>2&&(Dh/zl<28&&yn.shadowMap.enabled&&++_v>1&&(yn.shadowMap.enabled=!1,Ze.traverse(n=>{n.material&&(n.material.needsUpdate=!0)})),zl=0,Dh=0)}var Nh=null;function Zd(i){Nh||(Nh=Wh(255,255,255));let t=new ve;t.visible=!1,t.userData.fases=[];let e=new Vt(.28,.12,.28),n=new we(1.6,1.6).rotateX(-Math.PI/2),s=new re,r=new oe;for(let o=0;o<3;o++){let a=i.filter(f=>f.f===o);if(!a.length){t.userData.fases.push(null);continue}let l=new ge({color:16777215}),c=new ge({map:Nh,transparent:!0,depthWrite:!1,blending:yi}),h=new Ne(e,l,a.length),u=new Ne(n,c,a.length);a.forEach((f,d)=>{s.makeTranslation(f.x,(f.y||0)+.08,f.z),h.setMatrixAt(d,s),s.makeTranslation(f.x,(f.y||0)+.1,f.z),u.setMatrixAt(d,s),r.set(f.c),h.setColorAt(d,r),u.setColorAt(d,r)}),u.renderOrder=3,t.add(h,u),t.userData.fases.push({mb:l,mh:c})}return t}function Jd(i,t){if(!i||(i.visible=!!Ut.noche,!Ut.noche))return;let e=Math.floor(t*7)%3;i.userData.fases.forEach((n,s)=>{if(!n)return;let r=s===e,o=r?1:.18;n.mb.color.setScalar(o),n.mh.opacity=r?.95:.12})}var qi={carril:16052710,orilla:3134407,centro:16757504,metrobus:16764723};function $d(){return Ee([Kt(12,2.6,2.5,0,1.75,0,2061280),Kt(11.2,1,2.52,-.2,2.25,0,1520207),Kt(12,.25,2.54,0,1,0,16777215),Kt(3.4,.4,1.6,-.5,3.25,0,1727672),Kt(5.6,.08,.08,-2.8,4.6,.45,2763306).rotateZ(0),Kt(5.6,.08,.08,-2.8,4.6,-.45,2763306),hn(-3.8,1.2,.5),hn(-3.8,-1.2,.5),hn(3.8,1.2,.5),hn(3.8,-1.2,.5)])}function Kd(){return Ee([Kt(8.6,2.8,2.55,-4.6,1.75,0,12986408),Kt(8.6,2.8,2.55,4.6,1.75,0,12986408),Kt(.6,2.4,2.3,0,1.65,0,5903380),Kt(7.8,1,2.57,-4.6,2.25,0,2241087),Kt(7.8,1,2.57,4.6,2.25,0,2241087),Kt(17.8,.2,2.58,0,1,0,15921906),hn(-7.4,1.2,.5),hn(-7.4,-1.2,.5),hn(-2,1.2,.5),hn(-2,-1.2,.5),hn(7.4,1.2,.5),hn(7.4,-1.2,.5)])}function Jl(i,t,e){let n=new re,s=new We,r=new N,o=new N(1,1,1),a=new N(0,1,0),l=0;for(let c of t){if(l>=i.instanceMatrix.count)break;r.set(c.x,c.y,c.z),s.setFromAxisAngle(a,c.r),i.setMatrixAt(l++,n.compose(r,s,o))}i.count=l,i.instanceMatrix.needsUpdate=!0}function Pd(i,t,e,n,s,r,o,a,l){i.t=(i.t||Math.random()*40)+t;let c=i.cum[i.cum.length-1],h=i.periodo*e,u=Math.max(h,c+n+60);for(let f of[1,-1]){let d=(i.t+(f<0?i.periodo/2:0))*e%u;for(let p=0;p*h<u&&p<30;p++){let S=(d+p*h)%u-30;for(let x=0;x<s;x++){let m=S-x*r;if(m<0||m>c)continue;f<0&&(m=c-m);let M=Ie(i,m),y=M.dx*f,_=M.dz*f,b=o;l.push({x:M.x-_*b,y:a,z:M.z+y*b,r:sn(y,_)})}}}}var nn=null;function jd(){return Ee([Kt(14.6,3.1,2.8,0,1.95,0,15759898),Kt(13.4,.95,2.84,0,2.45,0,2241087),Kt(14.6,.25,2.82,0,1,0,15921902),Kt(14,.25,2.4,0,3.6,0,13223613),Yn(new xe(.4,.4,2.4,8).rotateX(Math.PI/2).translate(-5.2,.4,0),2236962),Yn(new xe(.4,.4,2.4,8).rotateX(Math.PI/2).translate(5.2,.4,0),2236962)])}function vv(){let i=new ve;i.visible=!1,_n.add(i);let t=xn[0]*Le,e=xn.length*Le,n=t+e/2,s=new ve;s.add(new ot(new we(e,3.6).rotateX(-Math.PI/2).translate(n,.05,0),new Pt({color:7037528})));let r=[-.72,.72].map(x=>new Vt(e,.12,.1).translate(n,.15,x));s.add(new ot(Ee(r),new Pt({color:10133670}))),i.add(s);let o=new ve,a=[];a.push(new Vt(e,1.2,4.4).translate(n,7.4,0));for(let x=t;x<t+e;x+=25)a.push(new Vt(1.2,6.8,1.6).translate(x,3.4,0));let l=new ot(Ee(a),new Pt({color:12170925}));l.castShadow=l.receiveShadow=!0,o.add(l),i.add(o);let c=new Ne(jd(),Yi,120);c.castShadow=!0,c.count=0,Ze.add(c);let h=new Ne($d(),Yi,40);h.castShadow=!0,h.count=0,Ze.add(h);let u=[];for(let x of[1,-1])for(let m of[qn+.15,4.35])u.push(new we(e,.25).rotateX(-Math.PI/2).translate(n,.03,x*m));for(let x of[1,-1])for(let m of xn)for(let M=0;M<Le;M+=3)u.push(new Vt(1.4,.18,.35).translate(m*Le+M,.09,x*4.35));let f=new ot(Ee(u.map(tu)),new Pt({color:15909376}));f.visible=!1,_n.add(f);let d=new Ne(Kd(),Yi,30);d.castShadow=!0,d.count=0,Ze.add(d);let p=[];for(let x of[1,-1])for(let m of xn)for(let M=0;M<Le;M+=4){let y=m*Le+M,_=Math.floor(M/4)%3;nr.some(b=>Math.abs(M-b)<9)||p.push({x:y,z:x*4.35,c:qi.carril,f:_},{x:y,z:x*7.85,c:qi.carril,f:_}),p.push({x:y,z:x*(Ae-.35),c:qi.orilla,f:_},{x:y,z:x*(qn+.15),c:qi.centro,f:_})}let S=Zd(p);_n.add(S),nn={g:i,via:s,vd:o,tren:c,trole:h,mbl:f,mbus:d,luces:S,t:0}}function yv(i){if(!nn)return;Jd(nn.luces,Fn),nn.mbl.visible=!!Ut.metrobus;{let S=[];if(Ut.metrobus)for(let M of[1,-1]){let y=(nn.t+(M<0?20:0))*11%440;for(let _=-2;_<=2;_++){let b=Ht.x+M*(y+_*440-120);Math.abs(b-Ht.x)<260&&S.push({x:b,y:0,z:M*Ji[0],r:M>0?0:Math.PI})}}Jl(nn.mbus,S)}let t=!Ut.metroSint&&!Ut.metro8&&Ut.troleElev;{let S=[];if(t)for(let M of[1,-1]){let y=(nn.t+(M<0?15:0))*12%360;for(let _=-2;_<=2;_++){let b=Ht.x+M*(y+_*360-150);Math.abs(b-Ht.x)<280&&S.push({x:b,y:8,z:M*1.1,r:M>0?0:Math.PI})}}Jl(nn.trole,S)}let e=Ut.metroSint||(Ut.metro8?"s":null)||(t?"e":null);nn.g.visible=!!e,nn.via.visible=e==="s",nn.vd.visible=e==="e",Xh&&(Xh.visible=e!=="s");let n=nn.tren;if(n.visible=!!e&&!(Zt&&Zt.listo&&Ut.pos),!e||t){n.count=0,nn.t+=i;return}nn.t+=i;let s=16,r=Ut.metro8?6:9,o=r*15.3,a=Ut.metro8?8:60,l=e==="e"?8:.15,c=new re,h=new We,u=new N,f=new N(1,1,1),d=0,p=520;for(let S of[1,-1]){let x=(nn.t+(S<0?a/2:0))*s,m=a*s;for(let M=-Math.ceil(p/m)-1;M<=Math.ceil(p/m)+1;M++){let y=x%m+M*m-p/2;if(!(a>=30&&M!==0))for(let _=0;_<r&&d<n.instanceMatrix.count;_++){let b=Ht.x+S*(y-_*15.3);Math.abs(b-Ht.x)>300||(h.setFromAxisAngle(new N(0,1,0),S>0?0:Math.PI),u.set(b,l,(S>0,0)),n.setMatrixAt(d++,c.compose(u,h,f)))}}}n.count=d,n.instanceMatrix.needsUpdate=!0}var Zt=null,Qd=110540,Ld={motorway:20,trunk:18,primary:15,secondary:12,tertiary:10,unclassified:8,residential:7,living_street:6,service:4.5,link:7},Hl={motorway:.06,trunk:.058,primary:.055,secondary:.05,tertiary:.045,link:.044,unclassified:.04,residential:.035,living_street:.033,service:.03};function He(i,t,e){return[(e-i.lon)*111320*Math.cos(i.lat*Math.PI/180),-(t-i.lat)*Qd]}function tu(i){i=i.index?i.toNonIndexed():i;for(let t of Object.keys(i.attributes))t!=="position"&&t!=="color"&&i.deleteAttribute(t);return i}function Pn(i,t,e,n){let s=t/2;for(let r=1;r<i.length;r++){let[o,a]=i[r-1],[l,c]=i[r],h=l-o,u=c-a,f=Math.hypot(h,u);if(f<.05)continue;let d=-u/f*s,p=h/f*s,S=new Ce;S.setAttribute("position",new ae([o+d,e,a+p,l+d,e,c+p,o-d,e,a-p,o-d,e,a-p,l+d,e,c+p,l-d,e,c-p],3)),n.push(S)}for(let r=0;r<i.length;r++)n.push(tu(new ks(s,10).rotateX(-Math.PI/2).translate(i[r][0],e,i[r][1])))}function vo(i){let t=[0];for(let e=1;e<i.length;e++)t.push(t[e-1]+Math.hypot(i[e][0]-i[e-1][0],i[e][1]-i[e-1][1]));return t}function Ie(i,t){let e=i.p,n=i.cum;t=Math.max(0,Math.min(n[n.length-1],t));let s=1;for(;s<n.length-1&&n[s]<t;)s++;let r=(t-n[s-1])/Math.max(1e-6,n[s]-n[s-1]),o=e[s][0]-e[s-1][0],a=e[s][1]-e[s-1][1],l=Math.hypot(o,a)||1;return{x:e[s-1][0]+o*r,z:e[s-1][1]+a*r,dx:o/l,dz:a/l}}var sn=(i,t)=>Math.atan2(-t,i),Uh={};function Mv(i){if(Uh[i])return Uh[i];let t=document.createElement("canvas"),e=t.getContext("2d");e.font="bold 44px Arial",t.width=Math.min(1024,Math.ceil(e.measureText(i).width)+28),t.height=64,e.font="bold 44px Arial",e.textBaseline="middle",e.lineJoin="round",e.lineWidth=9,e.strokeStyle="rgba(20,20,24,.85)",e.strokeText(i,14,34),e.fillStyle="#fff",e.fillText(i,14,34);let n=new Mn(t);return n.colorSpace=Ue,n.anisotropy=4,Uh[i]={mat:new ge({map:n,transparent:!0,depthWrite:!1}),ar:t.width/t.height}}function $l(i){let t=document.createElement("canvas"),e=t.getContext("2d");e.font="bold 56px Arial";let n=Math.ceil(e.measureText(i).width)+56;t.width=n,t.height=96,e.font="bold 56px Arial",e.fillStyle="rgba(0,0,0,.25)",e.beginPath(),e.roundRect(6,10,n-8,84,22),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.roundRect(2,4,n-8,84,22),e.fill(),e.fillStyle="#1d1d1b",e.textBaseline="middle",e.fillText(i,26,48);let s=new Mn(t);s.colorSpace=Ue;let r=new Fi(new xi({map:s,depthTest:!1}));return r.scale.set(n/96*5.5,5.5,1),r.renderOrder=5,r}var Fh={};function Sv(i){if(Fh[i])return Fh[i];let t=document.createElement("canvas"),e=t.getContext("2d"),n="bold 64px Arial";e.font=n;let s=Math.min(1400,Math.ceil(e.measureText(i).width)+90),r=120,o=196;t.width=s,t.height=o;let a=[Math.round(s*.1),o-4],l=Math.round(s*.16),c=Math.round(s*.16)+Math.min(70,s*.16),h=f=>{e.beginPath(),e.roundRect(f,f,s-f*2,r-f*2,14-f/2),e.fill()};e.fillStyle="#111",e.beginPath(),e.moveTo(l-9,r-12),e.lineTo(a[0],a[1]),e.lineTo(c+9,r-12),e.closePath(),e.fill(),h(0),e.fillStyle="#fff",e.beginPath(),e.moveTo(l,r-14),e.lineTo(a[0]+2,a[1]-13),e.lineTo(c,r-14),e.closePath(),e.fill(),h(9),e.fillStyle="#fff",e.fillRect(l+1,r-16,c-l-2,10),e.fillStyle="#111",e.font=n,e.textBaseline="middle",e.textAlign="center",e.fillText(i,s/2,61,s-60);let u=new Mn(t);return u.colorSpace=Ue,u.anisotropy=4,Fh[i]={t:u,ar:s/o,cx:a[0]/s,cy:4/o}}function Ev(i){let e=new Map,n=[],s=[];i.forEach((o,a)=>{if(!(!o.nombre||o.tipo==="service"))for(let l=1;l<o.p.length;l++){let[c,h]=o.p[l-1],[u,f]=o.p[l],d={ci:a,x1:c,z1:h,x2:u,z2:f};s.push(d);for(let p=Math.floor(Math.min(c,u)/40);p<=Math.floor(Math.max(c,u)/40);p++)for(let S=Math.floor(Math.min(h,f)/40);S<=Math.floor(Math.max(h,f)/40);S++){let x=p+","+S;(e.get(x)||e.set(x,[]).get(x)).push(d)}}});let r=new Set;for(let[o,a]of e)for(let l=0;l<a.length;l++)for(let c=l+1;c<a.length;c++){let h=a[l],u=a[c],f=i[h.ci].nombre,d=i[u.ci].nombre;if(h.ci===u.ci||f===d)continue;let p=h.x2-h.x1,S=h.z2-h.z1,x=u.x2-u.x1,m=u.z2-u.z1,M=p*m-S*x;if(Math.abs(M)<1e-6)continue;let y=((u.x1-h.x1)*m-(u.z1-h.z1)*x)/M,_=((u.x1-h.x1)*S-(u.z1-h.z1)*p)/M;if(y<-.02||y>1.02||_<-.02||_>1.02)continue;let b=h.x1+p*y,E=h.z1+S*y,g=[f,d].sort().join("|")+"|"+Math.round(b/30)+","+Math.round(E/30);if(r.has(g))continue;r.add(g);let v=Math.hypot(p,S)||1,R=Math.hypot(x,m)||1;n.push({x:b,z:E,a:f,b:d,da:[p/v,S/v],db:[x/R,m/R],wa:i[h.ci].w,wb:i[u.ci].w})}return n}function Kl(i,t,e){let n=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){let[o,a]=e[s],[l,c]=e[r];a>t!=c>t&&i<(l-o)*(t-a)/(c-a||1e-9)+o&&(n=!n)}return n}function bv(i){let t=i.slice().sort((r,o)=>r[0]-o[0]||r[1]-o[1]),e=(r,o,a)=>(o[0]-r[0])*(a[1]-r[1])-(o[1]-r[1])*(a[0]-r[0]),n=[],s=[];for(let r of t){for(;n.length>=2&&e(n[n.length-2],n[n.length-1],r)<=0;)n.pop();n.push(r)}for(let r of t.slice().reverse()){for(;s.length>=2&&e(s[s.length-2],s[s.length-1],r)<=0;)s.pop();s.push(r)}return n.slice(0,-1).concat(s.slice(0,-1))}function Oh(i,t){let e=i.length,n=0,s=0;for(let[o,a]of i)n+=o,s+=a;n/=e,s/=e;let r=i.map((o,a)=>{let l=i[(a+1)%e],c=l[0]-o[0],h=l[1]-o[1],u=Math.hypot(c,h)||1,f=-h/u,d=c/u;(n-o[0])*f+(s-o[1])*d<0&&(f=-f,d=-d);let p=t[a];return{a:[o[0]+f*p,o[1]+d*p],d:[c/u,h/u]}});return r.map((o,a)=>{let l=r[(a+e-1)%e],c=l.d[0]*o.d[1]-l.d[1]*o.d[0];if(Math.abs(c)<1e-6)return o.a;let h=((o.a[0]-l.a[0])*o.d[1]-(o.a[1]-l.a[1])*o.d[0])/c;return[l.a[0]+l.d[0]*h,l.a[1]+l.d[1]*h]})}function Tv(i,t,e,n,s){let r=n.map(G=>i.filter(J=>!J.elev&&G.test(Zi(J.nombre))));if(r.some(G=>!G.length))return null;let o=[];for(let G=0;G<3;G++)for(let J=G+1;J<3;J++)for(let dt of r[G])for(let bt of r[J])for(let K=1;K<dt.p.length;K++)for(let ht=1;ht<bt.p.length;ht++){let yt=$i(dt.p[K-1],dt.p[K],bt.p[ht-1],bt.p[ht]);yt&&o.push([yt.x,yt.z])}if(o.length<3)return null;let a=bv(o);if(a.length<3)return null;let l=0;for(let G=0;G<a.length;G++){let[J,dt]=a[G],[bt,K]=a[(G+1)%a.length];l+=J*K-bt*dt}if(l=Math.abs(l)/2,l<300||l>12e4)return null;let c=r.flat(),h=a.map((G,J)=>{let dt=a[(J+1)%a.length],bt=(G[0]+dt[0])/2,K=(G[1]+dt[1])/2,ht=null;for(let yt of c){let _t=bn(yt,bt,K);(!ht||_t.d<ht.d)&&(ht={d:_t.d,c:yt})}return{o:(ht?ht.c.w/2:5)+2.8,c:ht&&ht.c}}),u=Oh(a,h.map(G=>G.o)),f=new vi(u.map(([G,J])=>new xt(G,-J))),d=new ot(new Yr(f).rotateX(-Math.PI/2),new Pt({color:7315020}));d.position.y=.06,d.receiveShadow=!0,t.add(d);let p=new Pt({color:3119736}),S=new Pt({color:8224120}),x=new Pt({color:4094517}),m=new Pt({color:14267164}),M=[],y=[],_=(G,J,dt,bt,K,ht,yt,_t)=>{let Mt=J[0]-G[0],z=J[1]-G[1],et=Math.hypot(Mt,z);if(et<.5)return;let k=new ot(new Vt(et,bt,K),ht);k.position.set((G[0]+J[0])/2+_t[0]*yt,dt+bt/2,(G[1]+J[1])/2+_t[1]*yt),k.rotation.y=sn(Mt/et,z/et),k.castShadow=bt>.5,t.add(k)},b=0,E=0;for(let[G,J]of u)b+=G,E+=J;b/=u.length,E/=u.length,u.forEach((G,J)=>{let dt=u[(J+1)%u.length],bt=dt[0]-G[0],K=dt[1]-G[1],ht=Math.hypot(bt,K);if(ht<2)return;let yt=[bt/ht,K/ht],_t=[-yt[1],yt[0]];(b-G[0])*_t[0]+(E-G[1])*_t[1]<0&&(_t=[-_t[0],-_t[1]]);let Mt=ht/2-1.6,z=ht/2+1.6,et=k=>[G[0]+yt[0]*k,G[1]+yt[1]*k];_(G,dt,0,.2,.35,m,-.15,_t);for(let[k,st]of[[0,Mt],[z,ht]]){_(et(k),et(st),.05,.5,.7,S,.9,_t),_(et(k),et(st),.55,.8,.85,x,.95,_t),_(et(k),et(st),.95,.07,.07,p,.25,_t),_(et(k),et(st),.25,.07,.07,p,.25,_t);for(let Q=k;Q<=st;Q+=2.2){let F=et(Q);M.push([F[0]+_t[0]*.25,F[1]+_t[1]*.25])}}for(let k=6;k<ht-6;k+=13){let st=et(k);y.push([st[0]-_t[0]*1.6,st[1]-_t[1]*1.6,sn(yt[0],yt[1])])}});let g=new re,v=new We,R=new N(0,1,0),A=new N(1,1,1);if(M.length){let G=new Ne(new Vt(.09,1.05,.09).translate(0,.52,0),p,M.length);M.forEach(([J,dt],bt)=>G.setMatrixAt(bt,g.makeTranslation(J,0,dt))),t.add(G)}if(y.length){let G=new Ne(new Vt(1.8,.14,.32).translate(0,.07,0),m,y.length);y.forEach(([J,dt,bt],K)=>{v.setFromAxisAngle(R,bt),G.setMatrixAt(K,g.compose(new N(J,0,dt),v,A))}),t.add(G)}let I=0,L=[1,0];u.forEach((G,J)=>{let dt=u[(J+1)%u.length],bt=Math.hypot(dt[0]-G[0],dt[1]-G[1]);bt>I&&(I=bt,L=[(dt[0]-G[0])/bt,(dt[1]-G[1])/bt])});let B=26,P=14,H=[-L[1],L[0]],Y=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([G,J])=>[b+L[0]*G*B/2+H[0]*J*P/2,E+L[1]*G*B/2+H[1]*J*P/2]).every(([G,J])=>Kl(G,J,Oh(u,u.map(()=>3))));if(Y){let G=new ve;G.position.set(b,0,E),G.rotation.y=sn(L[0],L[1]),t.add(G);let J=new ot(new we(B,P).rotateX(-Math.PI/2),new Pt({color:5078938}));J.position.y=.08,G.add(J);let dt=new ot(new we(.15,P-1).rotateX(-Math.PI/2),new ge({color:16777215}));dt.position.y=.09,G.add(dt);let bt=bo(64,64,(_t,Mt,z)=>{_t.strokeStyle="#2f8f62",_t.lineWidth=3;for(let et=-64;et<128;et+=16)_t.beginPath(),_t.moveTo(et,0),_t.lineTo(et+64,64),_t.moveTo(et+64,0),_t.lineTo(et,64),_t.stroke()}),K=(_t,Mt,z,et)=>{let k=bt.clone();k.needsUpdate=!0,k.wrapS=k.wrapT=di,k.repeat.set(_t/1.2,3.5/1.2);let st=new ot(new we(_t,3.5),new Pt({map:k,transparent:!0,alphaTest:.3,side:Te}));st.position.set(Mt,1.75,z),st.rotation.y=et,G.add(st)};K(B,0,-P/2,0),K(B,0,P/2,0),K(P,-B/2,0,Math.PI/2),K(P,B/2,0,Math.PI/2);let ht=bo(512,160,(_t,Mt,z)=>{_t.fillStyle="#f0e6d6",_t.fillRect(0,0,Mt,z);let et=["#e2405b","#2bb3c0","#f2b01e","#6c4bd1","#36b36b","#ff7a2f"];for(let k=0;k<26;k++){_t.fillStyle=et[k%et.length],_t.beginPath();let st=k*47%Mt,Q=20+k*37%120;_t.moveTo(st,Q);for(let F=0;F<5;F++)_t.lineTo(st+Math.cos(F*1.3+k)*50,Q+Math.sin(F*1.7+k)*35);_t.closePath(),_t.fill()}}),yt=new ot(new Vt(10,2.6,.3),[S,S,S,S,new Pt({map:ht}),new Pt({map:ht})]);yt.position.set(-B/2-5,1.3,0),yt.rotation.y=Math.PI/2,G.add(yt)}let ft=Oh(u,u.map(()=>2.5)),j=0;for(let G=Math.min(...ft.map(J=>J[0]));G<Math.max(...ft.map(J=>J[0]));G+=8)for(let J=Math.min(...ft.map(dt=>dt[1]));J<Math.max(...ft.map(dt=>dt[1]));J+=8){let dt=G+(On(s+"x"+j)-.5)*5,bt=J+(On(s+"z"+j)-.5)*5;if(j++,!!Kl(dt,bt,ft)){if(Y){let K=(dt-b)*L[0]+(bt-E)*L[1],ht=(dt-b)*H[0]+(bt-E)*H[1];if(Math.abs(K)<B/2+7&&Math.abs(ht)<P/2+3)continue}e.push([dt,bt,1.25+On(s+"e"+j)*.8])}}return{poli:a.map(G=>G.slice()),x:b,z:E}}function wv(i,t){let e=[];for(let n of i){let s=n.cum[n.cum.length-1],r=[];for(let o=0;o<=s;o+=6){let a=Ie(n,o);if(!t(a.x,a.z)){r.push(null);continue}let l=null;for(let d of i){if(d===n)continue;let p=bn(d,a.x,a.z);if(p.d<10||p.d>95||p.dx*a.dx+p.dz*a.dz>-.5)continue;let S=(p.x-a.x)/p.d,x=(p.z-a.z)/p.d;Math.abs(S*a.dx+x*a.dz)>.5||(!l||p.d<l.q.d)&&(l={q:p,B:d,vx:S,vz:x})}if(!l){r.push(null);continue}let c=[a.x+l.vx*(n.w/2+.7),a.z+l.vz*(n.w/2+.7)],h=[l.q.x-l.vx*(l.B.w/2+.7),l.q.z-l.vz*(l.B.w/2+.7)],u=[(c[0]+h[0])/2,(c[1]+h[1])/2],f=Math.hypot(u[0]-c[0],u[1]-c[1]);r.push(f>3?{ea:c,m:u,vx:l.vx,vz:l.vz,dx:a.dx,dz:a.dz,hw:f}:null)}e.push({A:n,S:r})}return e}var Bh=null;function Av(){if(Bh)return Bh;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d");t.strokeStyle="#8d939a",t.lineWidth=5,t.strokeRect(2,2,60,60),t.lineWidth=3.5,t.beginPath(),t.moveTo(2,2),t.lineTo(62,62),t.moveTo(62,2),t.lineTo(2,62),t.stroke();let e=new Mn(i);return e.wrapS=e.wrapT=di,e.colorSpace=Ue,Bh=e}function Rv(){let i=new ve,t=Av(),e=(o,a)=>{let l=t.clone();return l.needsUpdate=!0,l.repeat.set(o,a),new Pt({map:l,transparent:!0,alphaTest:.35,side:Te})},n=new ot(new xe(.95,3.4,24,4,1,!0).rotateY(Math.PI/4),e(4,9));n.position.y=12,i.add(n);let s=new ot(new xe(.55,.95,11,4,1,!0).rotateY(Math.PI/4),e(4,5));s.position.y=29.5,i.add(s);let r=[];return[[23,6.2],[28,7.4],[33,6]].forEach(([o,a])=>{let l=new ot(new Vt(a*2,.9,1.1),e(a*1.4,1));l.position.y=o,i.add(l);for(let c of[1,-1]){let h=new ot(new xe(.12,.12,2.2,6),new Pt({color:4016722}));h.position.set(c*(a-.4),o-1.5,0),i.add(h),r.push([c*(a-.4),o-2.6,0])}}),r.push([0,36,0]),i.userData.puntas=r,i}function Cv(){let i=new ve,t=h=>new Pt({color:h}),e=new ot(new ks(7,20).rotateX(-Math.PI/2),t(14268810));e.position.y=.04,e.receiveShadow=!0,i.add(e);let n=new ot(new Vt(1.4,.15,1.4),t(3108822));n.position.set(-2.5,2.2,0),i.add(n);for(let[h,u]of[[-3.1,-.6],[-1.9,-.6],[-3.1,.6],[-1.9,.6]]){let f=new ot(new xe(.07,.07,2.3,6),t(15909166));f.position.set(h,1.15,u),i.add(f)}let s=new ot(new Vt(.9,.08,2.8),t(15909166));s.position.set(-3.7,1.1,0),s.rotation.z=-.9,s.rotation.y=Math.PI/2,i.add(s);let r=new ot(new Vt(3.2,.1,.9),t(14693419));r.position.set(-.6,1.2,0),r.rotation.z=-.62,i.add(r);let o=t(3108822);for(let h of[-1,1])for(let u of[-1,1]){let f=new ot(new xe(.07,.07,2.9,6),o);f.position.set(2.2+u*.5*0,1.4,h*1.6+u*.4),f.rotation.x=u*.16,i.add(f)}let a=new ot(new xe(.08,.08,3.6,6).rotateX(Math.PI/2),t(15909166));a.position.set(2.2,2.8,0),i.add(a);for(let h of[-.7,.7]){let u=new ot(new Vt(.45,.06,.25),t(14693419));u.position.set(2.2,.6,h),i.add(u);for(let f of[-.18,.18]){let d=new ot(new xe(.015,.015,2.2,4),t(6710886));d.position.set(2.2,1.7,h+f),i.add(d)}}let l=new ot(new Vt(3.2,.08,.3),t(3450963));l.position.set(.6,.5,3.4),l.rotation.z=.18,i.add(l);let c=new ot(new xe(.15,.2,.5,8),t(15909166));return c.position.set(.6,.25,3.4),i.add(c),i}function Iv(i,t,e,n){let s=i.filter(_=>!_.elev&&/\bde las torres\b/.test(Zi(_.nombre))&&!/cerrada|cda\.?|privada|callejon|andador|retorno/.test(Zi(_.nombre))&&_.tipo!=="service");if(!s.length)return;let r=_=>{let b=[];for(let E of i)if(!E.elev&&_.test(Zi(E.nombre)))for(let g of s)for(let v=1;v<E.p.length;v++)for(let R=1;R<g.p.length;R++){let A=$i(g.p[R-1],g.p[R],E.p[v-1],E.p[v]);A&&b.push([A.x,A.z])}return b.length?[b.reduce((E,g)=>E+g[0],0)/b.length,b.reduce((E,g)=>E+g[1],0)/b.length]:null},o=r(/\bde las minas\b/),a=r(/\binsurgentes\b/),l=(_,b)=>{if(!o||!a)return!0;let E=a[0]-o[0],g=a[1]-o[1],v=E*E+g*g||1,R=((_-o[0])*E+(b-o[1])*g)/v;return R>=-.03&&R<=1.03&&Math.abs((_-o[0])*g-(b-o[1])*E)/Math.sqrt(v)<220},c=s.filter(_=>_.oneway),h=[],u=[],f=[],d=[],p=(_,b,E,g,v,R)=>_.push(b[0],R,b[1],E[0],R,E[1],g[0],R,g[1],g[0],R,g[1],E[0],R,E[1],v[0],R,v[1]),S=(_,b,E,g)=>!E.some(([v,R])=>Math.hypot(v-_,R-b)<g),x=[];if(c.length>=2)for(let{A:_,S:b}of wv(c,l)){let E=_.p[_.p.length-1][1]<_.p[0][1]||_.p[_.p.length-1][0]>_.p[0][0]&&Math.abs(_.p[_.p.length-1][1]-_.p[0][1])<1,g=0,v=-1e9,R=-1e9;for(let A=1;A<b.length;A++){let I=b[A-1],L=b[A];if(!(!I||!L)){if(g+=6,p(h,I.ea,L.ea,I.m,L.m,.03),E){let B=(P,H)=>[P.m[0]+P.vx*H,P.m[1]+P.vz*H];if(p(u,B(I,-1.3),B(L,-1.3),B(I,1.3),B(L,1.3),.05),g-v>270&&(v=g,f.push({x:I.m[0],z:I.m[1],nx:I.vx,nz:I.vz})),g-R>380&&I.hw>11&&g-v>40){R=g;let P=Math.min(I.hw*.5,I.hw-8.5);x.push({x:I.m[0]-I.vx*P,z:I.m[1]-I.vz*P,r:sn(I.dx,I.dz)})}if(A%5===0){let P=A/5%2?1:-1,H=B(I,P*2.6);d.push([H[0],H[1],Math.atan2(-I.vx*P,-I.vz*P)])}}if(A%2===0&&I.hw>4.5){let B=.12+On("tr"+_.p[0][0]+A)*Math.max(0,(I.hw-4)/I.hw-.12),P=I.ea[0]+(I.m[0]-I.ea[0])*B,H=I.ea[1]+(I.m[1]-I.ea[1])*B;S(P,H,f.map(q=>[q.x,q.z]),7)&&S(P,H,x.map(q=>[q.x,q.z]),9)&&e.push([P,H,.9+On("ta"+A+_.p[0][1])*.7])}}}}else for(let _ of s){let b=_.cum[_.cum.length-1];for(let E=20;E<b;E+=270){let g=Ie(_,E);if(!l(g.x,g.z))continue;let v=-g.dz,R=g.dx;f.push({x:g.x+v*(_.w/2+6),z:g.z+R*(_.w/2+6),nx:v,nz:R})}}let m=(_,b)=>{if(!_.length)return;let E=new Ce;E.setAttribute("position",new ae(_,3)),E.computeVertexNormals();let g=new ot(E,new Pt({color:b,side:Te}));g.receiveShadow=!0,t.add(g)};m(h,8367704),m(u,14208959);let M=[],y=null;for(let _ of f){let b=Rv();b.position.set(_.x,0,_.z),b.rotation.y=sn(_.nx,_.nz),t.add(b),b.updateMatrixWorld(!0);let E=b.userData.puntas.map(g=>new N(...g).applyMatrix4(b.matrixWorld));if(y&&y.pos.distanceTo(b.position)<420){let g=y.n[0]*_.nx+y.n[1]*_.nz<0;E.forEach((v,R)=>{let A=g&&R<6?R%2?R-1:R+1:R,I=y.P[A];for(let L=0;L<12;L++){let B=L/12,P=(L+1)/12,H=q=>I.y+(v.y-I.y)*q-4.5*4*q*(1-q);M.push(I.x+(v.x-I.x)*B,H(B),I.z+(v.z-I.z)*B,I.x+(v.x-I.x)*P,H(P),I.z+(v.z-I.z)*P)}})}y={P:E,pos:b.position.clone(),n:[_.nx,_.nz]}}if(M.length){let _=new Ce;_.setAttribute("position",new ae(M,3)),t.add(new Nr(_,new ss({color:2764339})))}for(let _ of x){let b=Cv();b.position.set(_.x,0,_.z),b.rotation.y=_.r,t.add(b)}if(d.length){let _=d.length,b=new Ne(new xe(.09,.13,8,6).translate(0,4,0),new Pt({color:7172986}),_),E=new Ne(new Vt(.08,.08,1.8).translate(0,7.9,.9),new Pt({color:7172986}),_),g=new Ne(new Vt(.35,.16,.7).translate(0,7.8,1.7),new ge({color:16773570}),_),v=new re,R=new We,A=new N(0,1,0),I=new N(1,1,1);d.forEach(([L,B,P],H)=>{R.setFromAxisAngle(A,P),v.compose(new N(L,0,B),R,I),b.setMatrixAt(H,v),E.setMatrixAt(H,v),g.setMatrixAt(H,v)}),t.add(b,E,g)}n&&(n.torres={n:f.length,juegos:x.length,lamp:d.length,tramo:!!(o&&a),j0:x[0]})}function Pv(i,t,e,n){let s=i.filter(g=>!g.elev&&/\bde las minas\b/.test(Zi(g.nombre))),r=i.filter(g=>!g.elev&&/reforma pesquera/.test(Zi(g.nombre))),o=null;for(let g of s)for(let v of r)for(let R=1;R<g.p.length;R++)for(let A=1;A<v.p.length;A++){let I=$i(g.p[R-1],g.p[R],v.p[A-1],v.p[A]);if(I){let L=Math.hypot(g.p[R][0]-g.p[R-1][0],g.p[R][1]-g.p[R-1][1])||1,B=Math.hypot(v.p[A][0]-v.p[A-1][0],v.p[A][1]-v.p[A-1][1])||1;o={x:I.x,z:I.z,ua:[(g.p[R][0]-g.p[R-1][0])/L,(g.p[R][1]-g.p[R-1][1])/L],ub:[(v.p[A][0]-v.p[A-1][0])/B,(v.p[A][1]-v.p[A-1][1])/B],wa:g.w,wb:v.w}}}if(!o)return null;let a=t.filter(g=>g.pts&&g.pts.length).map(g=>{let v=0,R=0;for(let[A,I]of g.pts){let[L,B]=He(e,A,I);v+=L,R+=B}return[v/g.pts.length,R/g.pts.length]}),l=22,c=17,h=null;for(let g of[1,-1])for(let v of[1,-1]){let R=[-o.ua[1]*g,o.ua[0]*g],A=o.wa/2+2.6+c/2,I=o.wb/2+2.6+l/2,L=o.x+R[0]*A+o.ua[0]*0,B=o.z+R[1]*A,P=(L-o.x)*o.ub[0]+(B-o.z)*o.ub[1]>=0?1:-1,H=o.x+R[0]*A+o.ub[0]*0+o.ua[0]*v*I,q=o.z+R[1]*A+o.ua[1]*v*I,Y=a.filter(([ft,j])=>Math.hypot(ft-H,j-q)<15).length;(!h||Y<h.n)&&(h={n:Y,x:H,z:q,s1:g,s2:v,sb:P})}let u=new ve,f=13.5,d=new Pt({color:14701356}),p=new Pt({color:15502190}),S=new Pt({color:3886947}),x=new ot(new Vt(l,4.2,c),d);x.position.y=2.1,x.castShadow=!0,u.add(x);let m=new ot(new Vt(l,f-4.2,c),p);m.position.y=4.2+(f-4.2)/2,m.castShadow=!0,u.add(m);for(let g=6;g<f-1;g+=3.1)for(let v of[1,-1]){let R=new ot(new Vt(l-4,1.1,.1),S);R.position.set(0,g,v*(c/2+.03)),u.add(R);let A=new ot(new Vt(.1,1.1,c-4),S);A.position.set(v*(l/2+.03),g,0),u.add(A)}let M=new ot(new Vt(l*.6,2.6,.12),new Pt({color:12376038,emissive:2241348}));M.position.set(0,1.5,-(c/2+.05)),u.add(M);let y=new ot(new Vt(l+.2,.5,c+.2),new Pt({color:16163386}));y.position.y=4.3,u.add(y);let _=new ot(new Vt(l*.55,3.2,.25),new Pt({color:16777215,emissive:2236962}));_.position.set(0,9.5,-(c/2+.15)),u.add(_);let b=new ot(new Vt(l*.55+.5,3.7,.2),new Pt({color:2310298}));b.position.set(0,9.5,-(c/2+.05)),u.add(b);let E=$l("\u{1F6D2} Mini Chedraui");return E.position.set(0,f+5,0),u.add(E),u.position.set(h.x,0,h.z),u.rotation.y=sn(o.ua[0],o.ua[1])+(h.s1<0?Math.PI:0),n.add(u),{x:h.x,z:h.z,r:Math.max(l,c)/2+3}}var Dd={lat:19.3622992,lon:-99.0569941},Nd=i=>/perif/i.test(i.nombre+" "+(i.ref||""));function bn(i,t,e){let n=null;for(let s=1;s<i.p.length;s++){let[r,o]=i.p[s-1],[a,l]=i.p[s],c=a-r,h=l-o,u=c*c+h*h||1,f=Math.sqrt(u),d=Math.max(0,Math.min(1,((t-r)*c+(e-o)*h)/u)),p=r+c*d,S=o+h*d,x=Math.hypot(t-p,e-S);(!n||x<n.d)&&(n={d:x,s:i.cum[s-1]+f*d,x:p,z:S,dx:c/f,dz:h/f})}return n}function bo(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new Mn(s);return r.colorSpace=Ue,n&&(r.wrapS=r.wrapT=di,r.repeat.set(n,n)),r.anisotropy=4,r}function Lv(i,t,e,n){let s={barco:null,sem:null},r=i.filter(_=>!_.elev&&Nd(_)&&So.test(_.tipo+"")||!_.elev&&Nd(_));if(!r.length)return s;let[o,a]=He(t,Dd.lat,Dd.lon);if(Bv(r,i,t,e,n,[o,a]),Math.hypot(o,a)>2500)return s;let l=null;for(let _ of r){let b=bn(_,o,a);(!l||b.d<l.q.d)&&(l={c:_,q:b})}if(!l||l.q.d>140)return s;let c=null;for(let _ of i)if(_.elev==="puente")for(let b of r)for(let E=1;E<_.p.length;E++)for(let g=1;g<b.p.length;g++){let v=$i(b.p[g-1],b.p[g],_.p[E-1],_.p[E]);if(!v)continue;let R=Math.hypot(v.x-o,v.z-a);R<700&&(!c||R<c.d)&&(c={x:v.x,z:v.z,d:R})}let h=l.q.dx,u=l.q.dz;c?(c.x-o)*h+(c.z-a)*u<0&&(h=-h,u=-u):u>0&&(h=-h,u=-u),s.barco={x:o,z:a},e.add(Dv(o,a,h,u)),s.dbg=[];let f=l.c,d=1,p=null;for(let _ of r){let b=bn(_,o,a);if(!(b.d>140))for(let E of _.oneway?[1]:[1,-1]){let g=b.dx*E,v=b.dz*E,R=(o-b.x)*v-(a-b.z)*g>0,A=!c||(c.x-b.x)*g+(c.z-b.z)*v>0;R&&A&&(!p||b.d<p.d)&&(p={cc:_,dd:E,d:b.d})}}p&&(f=p.cc,d=p.dd);let S=f.cum[f.cum.length-1],x=(_,b)=>{let E=Ie(f,Math.max(0,Math.min(S,_))),g=E.dx*d,v=E.dz*d,R=-v,A=g,I=new ve;return I.position.set(E.x+R*b,0,E.z+A*b),I.rotation.y=sn(g,v),I},m=null;for(let _ of i)if(_.elev==="puente")for(let b=1;b<_.p.length;b++)for(let E=1;E<f.p.length;E++){let g=$i(f.p[E-1],f.p[E],_.p[b-1],_.p[b]);if(!g)continue;let v=f.cum[E-1]+Math.hypot(g.x-f.p[E-1][0],g.z-f.p[E-1][1]);Math.hypot(g.x-o,g.z-a)<700&&(m==null||Math.abs(v-bn(f,o,a).s)<Math.abs(m-bn(f,o,a).s))&&(m=v)}if(m!=null){let _=Nv(Math.min(f.w*.75,10)),b=x(m-d*16,f.w/2+.9);b.add(_.g),e.add(b),s.sem=_;let E=x(m-d*40,f.w/2+1.25);E.add(Fv()),e.add(E),s.libres=[[b.position.x,b.position.z],[E.position.x,E.position.z]]}let M=bn(f,o+h*50,a+u*50),y=x(M.s-d*4,-(f.w/2+1.2));return y.add(Ov()),e.add(y),s.dbg.push(["let",y.position.x,y.position.z,m,d,f.nombre]),s}function Dv(i,t,e,n){let s=new ve,r=96,o=30,a=12,l=bo(64,64,(v,R,A)=>{v.fillStyle="#dcdcd7",v.fillRect(0,0,R,A),v.fillStyle="#b9bab4";for(let I=0;I<A;I+=8)v.fillRect(0,I,R,2)},.25),c=new vi([new xt(-r/2,0),new xt(r/2-12,0),new xt(r/2+7,a+1.5),new xt(-r/2-2,a)]),h=new ot(new Xs(c,{depth:o,bevelEnabled:!1}).translate(0,0,-o/2),new Pt({map:l}));h.castShadow=!0,h.receiveShadow=!0,s.add(h);let u=bo(512,64,(v,R,A)=>{v.fillStyle="#f1efe8",v.fillRect(0,0,R,A);let I=["#e5533d","#2f9e6e","#3f6fd8","#e0a526","#8c4fd6","#1fb5c9"];for(let L=0;L<70;L++)v.fillStyle=I[L%I.length],v.beginPath(),v.ellipse(Math.random()*R,20+Math.random()*40,8+Math.random()*22,6+Math.random()*12,Math.random()*3,0,7),v.fill()});for(let v of[1,-1]){let R=new ot(new we(r-14,2.2),new Pt({map:u}));R.position.set(-6,1.1,v*(o/2+.05)),v<0&&(R.rotation.y=Math.PI),s.add(R)}let f=new Pt({color:15987695}),d=new Pt({color:4608606}),p=new ot(new Vt(r*.42,8,o*.72),f);p.position.set(-r*.08,a+4,0),p.castShadow=!0,s.add(p);let S=new ot(new Vt(r*.42+.1,1.6,o*.72+.1),d);S.position.set(-r*.08,a+5.2,0),s.add(S);let x=new ot(new Vt(r*.2,7,o*.5),f);x.position.set(-r*.2,a+11.5,0),x.castShadow=!0,s.add(x);let m=new ot(new Vt(r*.18,5,o*.6),f);m.position.set(-r*.42,a+2.5,0),s.add(m);let M=new Pt({color:10133670});for(let v of[1,-1]){let R=new ot(new Vt(r,.1,.1),M);R.position.set(0,a+1.3,v*o/2),s.add(R)}let y=Math.floor(r/6)*2,_=new Ne(new Zr(.42,.13,6,14),new Pt({color:14165547}),y),b=new re,E=0;for(let v of[1,-1])for(let R=-r/2+3;R<r/2-2&&E<y;R+=6)_.setMatrixAt(E++,b.makeTranslation(R,a+.85,v*(o/2+.08)));_.count=E,s.add(_);let g=$l("\u26F4\uFE0F Barco Utop\xEDa");return g.position.set(0,a+20,0),s.add(g),s.position.set(i,0,t),s.rotation.y=sn(e,n),s}function Nv(i){let t=new ve,e=new Pt({color:5988712}),n=new ot(new xe(.16,.2,6.6,8),e);n.position.y=3.3,n.castShadow=!0,t.add(n);let s=new ot(new Vt(.14,.14,i),e);s.position.set(0,6.3,-i/2),t.add(s);let r=[],o=(a,l)=>{let c=new ot(new Vt(.45,1.45,.55),new Pt({color:1842721}));c.position.set(0,l,a),t.add(c),[1769306,16756736,16722458].forEach((h,u)=>{let f=new ot(new Nn(.17,10,8),new ge({color:2236962}));f.position.set(-.26,l-.46+u*.46,a),f.userData.col=h,t.add(f),(r[u]||=[]).push(f)})};return o(-i*.8,5.6),o(-.35,3.4),{g:t,luces:r}}function Uv(i,t){let e=t%38,n=e<20?0:e<23?1:2;i.luces.forEach((s,r)=>s.forEach(o=>o.material.color.setHex(r===n?o.userData.col:2236962)))}function Fv(){let i=new ve,t=new Pt({color:6119784}),e=new ot(new Vt(4.4,.14,1.9),new Pt({color:9146519}));e.position.set(0,2.6,.3),e.castShadow=!0,i.add(e);for(let a of[-2,2]){let l=new ot(new Vt(.1,2.6,.1),t);l.position.set(a,1.3,1.1),i.add(l)}let n=new ot(new we(4.1,2.1),new Pt({color:12375268,transparent:!0,opacity:.45,side:Te}));n.position.set(0,1.35,1.12),i.add(n);let s=new ot(new Vt(.18,1.9,1.3),new Pt({color:16185074,emissive:3355443}));s.position.set(2.15,1.25,.45),i.add(s);let r=new ot(new Vt(2.6,.08,.45),t);r.position.set(-.3,.5,.8),i.add(r);let o=new ot(new Vt(.06,.6,.6),new ge({color:1402304}));return o.position.set(-2.3,3.1,.3),i.add(o),i}function Ov(){let i=new ve,t=bo(1100,470,(c,h,u)=>{c.fillStyle="#e4672a",c.fillRect(0,0,h,u),c.strokeStyle="#fff",c.lineWidth=10,c.strokeRect(16,16,h-32,u-32),c.fillStyle="#fff",c.textAlign="center",c.textBaseline="middle",c.font="bold 50px Arial",c.fillText("USE V\xCDAS ALTERNAS",h/2,70),c.font="bold 76px Arial",c.fillText("DOBLE SENTIDO",h/2,160),c.fillText("EJE 6 SUR",h/2,245),c.font="bold 66px Arial",c.fillText("DE 06:00 A 09:00 HRS",h/2,330),c.font="bold 40px Arial",c.fillText("www.circuitobicentenario.com.mx",h/2,415)}),e=6.6,n=e*470/1100,s=new ot(new we(e,n),new Pt({map:t}));s.rotation.y=-Math.PI/2,s.position.set(-.08,7.2,2.2),i.add(s);let r=new ot(new we(e,n),new Pt({color:9277329}));r.rotation.y=Math.PI/2,r.position.set(.08,7.2,2.2),i.add(r);let o=new Pt({color:7041143}),a=new ot(new xe(.2,.24,8.6,8),o);a.position.y=4.3,a.castShadow=!0,i.add(a);let l=new ot(new Vt(.16,.16,4.4),o);return l.position.set(.2,8.2,1.9),i.add(l),i}function Bv(i,t,e,n,s,r){let o=i.filter(m=>m.oneway&&m.w>=6);if(o.length<2)return;let a=m=>{let M=[];for(let y of t)if(m.test(Zi(y.nombre+" "+(y.ref||""))))for(let _ of o)for(let b=1;b<y.p.length;b++)for(let E=1;E<_.p.length;E++){let g=$i(_.p[E-1],_.p[E],y.p[b-1],y.p[b]);g&&M.push(g.z)}return M},l=a(/ermita/),c=a(/eje\s*5\b|leyes de reforma/),h=l.length?Math.max(...l):He(e,19.3475,-99.056)[1],u=c.length?Math.min(...c):He(e,19.3765,-99.056)[1];if(!(u<h))return;let f=[],d=[],p=[],S=(m,M,y,_,b,E)=>m.push(M[0],E,M[1],y[0],E,y[1],_[0],E,_[1],_[0],E,_[1],y[0],E,y[1],b[0],E,b[1]);for(let m of o){let M=m.cum[m.cum.length-1],y=[];for(let b=0;b<=M;b+=6){let E=Ie(m,b);if(E.z<u||E.z>h){y.push(null);continue}let g=null;for(let I of o){if(I===m)continue;let L=bn(I,E.x,E.z);if(L.d<12||L.d>95||L.dx*E.dx+L.dz*E.dz>-.5)continue;let B=(L.x-E.x)/L.d,P=(L.z-E.z)/L.d;Math.abs(B*E.dx+P*E.dz)>.5||(!g||L.d<g.q.d)&&(g={q:L,B:I,vx:B,vz:P})}if(!g){y.push(null);continue}let v=[E.x+g.vx*(m.w/2+.7),E.z+g.vz*(m.w/2+.7)],R=[g.q.x-g.vx*(g.B.w/2+.7),g.q.z-g.vz*(g.B.w/2+.7)],A=[(v[0]+R[0])/2,(v[1]+R[1])/2];y.push(Math.hypot(R[0]-v[0],R[1]-v[1])>7?{ea:v,m:A,vx:g.vx,vz:g.vz,sv:b}:null)}let _=m.p[m.p.length-1][1]<m.p[0][1];for(let b=1;b<y.length;b++){let E=y[b-1],g=y[b];if(!(!E||!g)){if(S(f,E.ea,g.ea,E.m,g.m,.03),_){let v=(R,A)=>[R.m[0]+R.vx*A,R.m[1]+R.vz*A];S(d,v(E,-1.6),v(g,-1.6),v(E,1.6),v(g,1.6),.05),S(p,v(E,2),v(g,2),v(E,3.1),v(g,3.1),.05)}if(b%2===0){let v=Math.hypot(E.m[0]-E.ea[0],E.m[1]-E.ea[1]);if(v<6)continue;let R=.15+On("pq"+m.p[0][0]+b)*Math.max(0,(v-4.5)/v-.15),A=E.ea[0]+(E.m[0]-E.ea[0])*R,I=E.ea[1]+(E.m[1]-E.ea[1])*R;Math.hypot(A-r[0],I-r[1])>62&&s.push([A,I,.9+On("a"+b+m.p[0][1])*.6])}}}}let x=(m,M)=>{if(!m.length)return;let y=new Ce;y.setAttribute("position",new ae(m,3)),y.computeVertexNormals();let _=new ot(y,new Pt({color:M,side:Te}));_.receiveShadow=!0,n.add(_)};x(f,8367704),x(d,14275265),x(p,5935044)}var Zi=i=>String(i||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),So=/^(motorway|trunk|primary|secondary|tertiary|unclassified|residential|living_street)(_link)?$/;function $i(i,t,e,n){let s=t[0]-i[0],r=t[1]-i[1],o=n[0]-e[0],a=n[1]-e[1],l=s*a-r*o;if(Math.abs(l)<1e-9)return null;let c=((e[0]-i[0])*a-(e[1]-i[1])*o)/l,h=((e[0]-i[0])*r-(e[1]-i[1])*s)/l;return c>=0&&c<=1&&h>=0&&h<=1?{x:i[0]+s*c,z:i[1]+r*c,t:c}:null}var Ud={lat:19.34597,lon:-99.0638};function zh(i,t,e,n){let s=o=>{let a=1;for(;a<t.length-1&&t[a]<o;)a++;let l=(o-t[a-1])/(t[a]-t[a-1]||1);return[i[a-1][0]+(i[a][0]-i[a-1][0])*l,i[a-1][1]+(i[a][1]-i[a-1][1])*l]},r=[s(e)];for(let o=0;o<i.length;o++)t[o]>e+.05&&t[o]<n-.05&&r.push(i[o]);return r.push(s(n)),r}function zv(i,t){let[e,n]=He(t,Ud.lat,Ud.lon);if(Math.hypot(e,n)>3500)return;let s=d=>/perif|canal de garay/i.test((d.c.nombre||"")+" "+(d.c.ref||"")),r=i.filter(d=>/ermita/.test(Zi(d.c.nombre)));if(!r.length)return;let o=[];if(i.forEach((d,p)=>{if(!(!s(d)||!So.test(d.c.tipo||"")))for(let S=1;S<d.p.length;S++)for(let x of r)for(let m=1;m<x.p.length;m++){let M=$i(d.p[S-1],d.p[S],x.p[m-1],x.p[m]);M&&Math.hypot(M.x-e,M.z-n)<650&&o.push({i:p,k:S,r:M})}}),!o.length||i.some(d=>s(d)&&d.c.puente&&d.p.some(p=>o.some(S=>Math.hypot(p[0]-S.r.x,p[1]-S.r.z)<250))))return;let a=d=>["motorway","trunk","primary","secondary","tertiary"].indexOf(String(d).replace("_link","")),l=o.map(d=>a(i[d.i].c.tipo)).filter(d=>d>=0);if(!l.length)return;let c=Math.min(...l),h=new Set,u=[];for(let d of o){let p=i[d.i];if(a(p.c.tipo)!==c||h.has(d.i))continue;let S=vo(p.p),x=S[S.length-1],m=S[d.k-1]+Math.hypot(d.r.x-p.p[d.k-1][0],d.r.z-p.p[d.k-1][1]),M=Math.max(0,m-75),y=Math.min(x,m+75);h.add(d.i),M>2&&u.push({c:p.c,p:zh(p.p,S,0,M)}),u.push({c:{...p.c,puente:!0,capa:1},p:zh(p.p,S,M,y)}),x-y>2&&u.push({c:p.c,p:zh(p.p,S,y,x)})}let f=i.filter((d,p)=>!h.has(p));i.length=0,i.push(...f,...u)}function Hv(i){let t=new Map,e=40,n=new Map;i.forEach((a,l)=>{if(!(a.c.puente||!So.test(a.c.tipo||"")))for(let c=1;c<a.p.length;c++){let h=a.p[c-1],u=a.p[c],f=[h,u,a.c.nombre||""];for(let d=Math.floor(Math.min(h[0],u[0])/e);d<=Math.floor(Math.max(h[0],u[0])/e);d++)for(let p=Math.floor(Math.min(h[1],u[1])/e);p<=Math.floor(Math.max(h[1],u[1])/e);p++){let S=d+","+p;(n.get(S)||n.set(S,[]).get(S)).push(f)}}});let s=a=>{for(let l=1;l<a.p.length;l++){let c=a.p[l-1],h=a.p[l];for(let u=Math.floor(Math.min(c[0],h[0])/e);u<=Math.floor(Math.max(c[0],h[0])/e);u++)for(let f=Math.floor(Math.min(c[1],h[1])/e);f<=Math.floor(Math.max(c[1],h[1])/e);f++)for(let d of n.get(u+","+f)||[])if(d[2]!==(a.c.nombre||"")&&$i(c,h,d[0],d[1]))return!0}return!1},r=[];if(i.forEach((a,l)=>{if(!a.c.puente||!So.test(a.c.tipo||"")||!s(a))return;let c=6.2*Math.max(1,Math.min(3,a.c.capa||1));t.set(l,{elev:"puente",H:c,taperA:!1,taperB:!1}),r.push({x:a.p[0][0],z:a.p[0][1],H:c,i:l,fin:0},{x:a.p[a.p.length-1][0],z:a.p[a.p.length-1][1],H:c,i:l,fin:1})}),!r.length)return t;let o=a=>r.filter(l=>Math.hypot(l.x-a[0],l.z-a[1])<1.5);i.forEach((a,l)=>{if(t.has(l)||!So.test(a.c.tipo||""))return;let c=o(a.p[0]),h=o(a.p[a.p.length-1]);!c.length&&!h.length||(c.concat(h).forEach(u=>u.usado=!0),t.set(l,{elev:"rampa",hA:c.length?c[0].H:0,hB:h.length?h[0].H:0}))});for(let a of r)if(!a.usado){let l=t.get(a.i);a.fin===0?l.taperA=!0:l.taperB=!0}return t}function ir(i,t){if(!i||!i.elev)return 0;let e=i.cum[i.cum.length-1];if(i.elev==="puente"){let s=1,r=Math.min(45,e/2);return i.taperA&&(s=Math.min(s,t/r)),i.taperB&&(s=Math.min(s,(e-t)/r)),i.H*Math.max(0,Math.min(1,s))}let n=Math.min(90,e);return Math.max(i.hA*Math.max(0,1-t/n),i.hB*Math.max(0,1-(e-t)/n))}function Gv(i,t,e){let n=[],s=[],r=[],o=[],a=[],l=(u,f,d,p,S)=>u.push(...f,...d,...p,...p,...d,...S),c=(u,f,d,p)=>{let S=p[0]-d[0],x=p[1]-d[1],m=S*S+x*x||1,M=Math.max(0,Math.min(1,((u-d[0])*S+(f-d[1])*x)/m));return Math.hypot(u-d[0]-S*M,f-d[1]-x*M)};for(let u of i){let f=u.cum[u.cum.length-1],d=Math.max(2,Math.ceil(f/4)),p=u.w/2,S=[];for(let m=0;m<=d;m++){let M=f*m/d,y=Ie(u,M);S.push({x:y.x,z:y.z,nx:-y.dz,nz:y.dx,h:ir(u,M)})}for(let m=1;m<S.length;m++){let M=S[m-1],y=S[m],_=(b,E,g)=>[b.x+b.nx*p*E,g,b.z+b.nz*p*E];l(n,_(M,1,M.h+.06),_(y,1,y.h+.06),_(M,-1,M.h+.06),_(y,-1,y.h+.06));for(let b of[1,-1]){let E=u.elev==="puente"?Math.max(0,M.h-1.2):0,g=u.elev==="puente"?Math.max(0,y.h-1.2):0;l(s,_(M,b,E),_(y,b,g),_(M,b,M.h+.9),_(y,b,y.h+.9)),(M.h>.4||y.h>.4)&&l(r,_(M,b*1.01,M.h+.9),_(y,b*1.01,y.h+.9),_(M,b*1.01,M.h+1.2),_(y,b*1.01,y.h+1.2))}u.elev==="puente"&&M.h>1.5&&l(s,_(M,1,M.h-1.2),_(y,1,y.h-1.2),_(M,-1,M.h-1.2),_(y,-1,y.h-1.2))}let x=[];for(let m=1;m<u.nl;m++)u.oneway?x.push(-u.w/2+m*u.w/u.nl):x.push(m*u.w/2/u.nl,-m*u.w/2/u.nl);u.oneway||x.push(0);for(let m of x)for(let M=2;M<f-3;M+=9){let y=Ie(u,M),_=Ie(u,Math.min(f,M+3)),b=ir(u,M)+.09,E=ir(u,M+3)+.09,g=m===0?.14:.08,v=(R,A,I)=>[R.x-R.dz*A,I,R.z+R.dx*A];l(o,v(y,m+g,b),v(_,m+g,E),v(y,m-g,b),v(_,m-g,E))}if(u.elev==="puente")for(let m=10;m<f-6;m+=26){let M=ir(u,m);if(M<3)continue;let y=Ie(u,m);t.some(_=>{for(let b=1;b<_.p.length;b++)if(c(y.x,y.z,_.p[b-1],_.p[b])<_.w/2+1.5)return!0;return!1})||a.push([y.x,y.z,M-1.2,sn(y.dx,y.dz),u.w*.55])}}let h=(u,f)=>{if(!u.length)return;let d=new Ce;d.setAttribute("position",new ae(u,3)),d.computeVertexNormals();let p=new ot(d,new Pt({color:f,side:Te}));p.castShadow=!0,p.receiveShadow=!0,e.add(p)};if(h(n,3816773),h(s,11119269),h(r,14857239),h(o,15921906),a.length){let u=new Ne(new Vt(1.4,1,1).translate(0,.5,0),new Pt({color:10263960}),a.length),f=new re,d=new We,p=new N(0,1,0);a.forEach(([S,x,m,M,y],_)=>{d.setFromAxisAngle(p,M),u.setMatrixAt(_,f.compose(new N(S,0,x),d,new N(1,m,y)))}),u.castShadow=!0,e.add(u)}}function kv(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n.x*s.y-s.x*n.y}return t<0}function On(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return(t>>>0)/4294967296}function Vv(i){if(!Ze||!i||!i.centro)return;let t=Zt&&Zt.O&&Math.hypot(...He(Zt.O,i.centro.lat,i.centro.lon))<4e3?Zt.O:{lat:i.centro.lat,lon:i.centro.lon},e=Zt,n=new ve,s=new ot(new we(9e3,9e3).rotateX(-Math.PI/2),new Pt({color:12174e3,polygonOffset:!0,polygonOffsetFactor:6,polygonOffsetUnits:12}));s.position.y=-.02,s.receiveShadow=!0,n.add(s);let r=[],o={},a=[],l=[],c=[],h=[],u=(i.calles||[]).map(z=>({c:z,p:z.pts.map(([et,k])=>He(t,et,k))})).filter(z=>z.p.length>=2);zv(u,t);let f=Hv(u),d=[];for(let z=0;z<u.length;z++){let et=u[z].c,k=u[z].p,st=/_link$/.test(et.tipo)?"link":Ld[et.tipo]?et.tipo:"residential",Q=/\beje\s*5\b/i.test((et.nombre||"")+" "+(et.ref||"")),F=et.carriles||(Q?6:0),V=F?Math.max(5,Math.min(26,F*3.2)):et.ancho||Ld[st],W={p:k,cum:vo(k),tipo:st,w:V,nombre:et.nombre||"",ref:et.ref||"",oneway:!!et.oneway,ncar:F};W.nl=ps(W),r.push(W);let mt=f.get(z);if(mt){Object.assign(W,mt),d.push(W);continue}Pn(k,V,Hl[st],o[st]||=[]);let ct=W.cum[W.cum.length-1],Ft=Hl[st]+.012;if(!W.oneway&&V>=6.5)for(let ut of[-.17,.17]){let wt=[];for(let Lt=0;Lt<=ct;Lt+=Math.max(3,ct/300)){let D=Ie(W,Lt);wt.push([D.x-D.dz*ut,D.z+D.dx*ut])}Pn(wt,.13,Ft,l)}let Tt=[];for(let ut=1;ut<W.nl;ut++)W.oneway?Tt.push(-V/2+ut*V/W.nl):Tt.push(ut*V/2/W.nl,-ut*V/2/W.nl);for(let ut of Tt)for(let wt=2;wt<ct-3;wt+=9){let Lt=Ie(W,wt),D=Ie(W,Math.min(ct,wt+3));Pn([[Lt.x-Lt.dz*ut,Lt.z+Lt.dx*ut],[D.x-D.dz*ut,D.z+D.dx*ut]],.16,Ft,a)}if(st!=="service"){Pn(k,V+5.2,.012,c);for(let ut=6;ut<ct-4&&h.length<1600;ut+=16){if(On(W.nombre+ut+k[0][0])<.45)continue;let wt=Ie(W,ut),Lt=On(ut+W.nombre)<.5?1:-1,D=(V/2+1.7)*Lt;h.push([wt.x-wt.dz*D,wt.z+wt.dx*D,.75+On(String(ut))*.5])}}}d.length&&Gv(d,r.filter(z=>!z.elev),n);let p=Lv(r,t,n,h);Iv(r,n,h,p),p.super=Pv(r,i.edificios||[],t,n),p.parques=[Tv(r,n,h,[/concepcion beistegui/,/\bcoyoacan\b/,/colonia del valle/],"beistegui")].filter(Boolean);let S=new Pt({color:3816773,side:Te}),x=new Pt({color:4869461,side:Te});for(let z in o){let et=Ee(o[z]);et.computeVertexNormals();let k=new ot(et,z==="service"?x:S);k.receiveShadow=!0,n.add(k)}if(a.length&&n.add(new ot(Ee(a),new ge({color:15921906,side:Te}))),l.length&&n.add(new ot(Ee(l),new ge({color:15909376,side:Te}))),c.length){let z=new ot(Ee(c),new Pt({color:13225156,side:Te,polygonOffset:!0,polygonOffsetFactor:3,polygonOffsetUnits:6}));z.receiveShadow=!0,n.add(z)}if(h.length){let z=new Ne(new xe(.15,.2,1.6,6).translate(0,.8,0),new Pt({color:8018490}),h.length),et=new Ne(new qs(1.4,0).translate(0,2.6,0),new Pt({color:5939290,flatShading:!0}),h.length),k=new re,st=new We,Q=new N,F=new N;h.forEach(([V,W,mt],ct)=>{k.compose(F.set(V,0,W),st,Q.setScalar(mt)),z.setMatrixAt(ct,k),et.setMatrixAt(ct,k)}),et.castShadow=!0,n.add(z,et)}if(i.casa){let[z,et]=He(t,i.casa.lat,i.casa.lon),k=$l("\u{1F3E0} Mi casa");k.position.set(z,11,et),n.add(k)}let m=null;if(i.radar){let[z,et]=He(t,i.radar.lat,i.radar.lon),k=null;for(let st of r)for(let Q=1;Q<st.p.length;Q++){let[F,V]=st.p[Q-1],[W,mt]=st.p[Q],ct=W-F,Ft=mt-V,Tt=ct*ct+Ft*Ft||1,ut=Math.max(0,Math.min(1,((z-F)*ct+(et-V)*Ft)/Tt)),wt=F+ct*ut,Lt=V+Ft*ut,D=Math.hypot(z-wt,et-Lt);if(!k||D<k.dd-.5||Math.abs(D-k.dd)<.5&&st.w>k.c.w){let ie=Math.sqrt(Tt);k={dd:D,px:wt,pz:Lt,ux:ct/ie,uz:Ft/ie,c:st}}}if(k&&k.dd<60){let st=-k.uz,Q=k.ux,F=(z-k.px)*st+(et-k.pz)*Q>=0?1:-1,V=k.c.w/2+1.3,W=new ve;W.position.set(k.px+st*V*F,0,k.pz+Q*V*F);let mt=new Pt({color:10134445}),ct=new ot(new xe(.14,.18,6.2,8),mt);ct.position.y=3.1,ct.castShadow=!0,W.add(ct);let Ft=new ot(new Vt(.12,.12,2.2),mt);Ft.position.set(0,6.1,-1*F),Ft.rotation.y=0,W.add(Ft);let Tt=new ot(new Vt(.9,.6,.7),new Pt({color:15921906}));Tt.position.set(0,5.6,-1.9*F),W.add(Tt);let ut=new ot(new xe(.18,.18,.12,12).rotateX(Math.PI/2),new ge({color:1118481}));ut.position.set(.48,5.6,-1.9*F),ut.rotation.y=Math.PI/2,W.add(ut);let wt=new ot(new Nn(.11,8,6),new ge({color:16722458}));wt.position.set(.3,5.98,-1.9*F),W.add(wt);let Lt=new Fi(new xi({map:tc.map,color:16777215,transparent:!0,depthWrite:!1,blending:yi}));Lt.scale.set(9,9,1),Lt.position.set(0,5.6,-1.9*F),Lt.visible=!1,W.add(Lt);let D=$l("\u{1F4F8} Radar \xB7 50");D.position.set(0,8.4,0),W.add(D),W.rotation.y=sn(k.ux,k.uz),n.add(W),m={g:W,led:wt,flash:Lt}}}let M=[],y={};for(let z of r.slice().sort((et,k)=>k.w-et.w)){if(!z.nombre||z.elev||M.length>=90)continue;let et=z.cum[z.cum.length-1],k=Mv(z.nombre),st=Math.max(2.6,Math.min(6,z.w*.42)),Q=st*k.ar;if(!(et<Q*.9))for(let F=Math.min(et/2,40+Q/2);F<et-Q/2&&M.length<90;F+=170){let V=Ie(z,F),W=z.nombre+Math.round(V.x/120)+","+Math.round(V.z/120);if(y[W])continue;y[W]=1;let mt=new ot(new we(Q,st).rotateX(-Math.PI/2),k.mat);mt.position.set(V.x,Hl[z.tipo]+.03,V.z),mt.userData.base=sn(V.dx,V.dz),mt.userData.dx=V.dx,mt.userData.dz=V.dz,mt.renderOrder=2,n.add(mt),M.push(mt)}}let _=[],b=r.filter(z=>z.oneway&&z.nombre&&!z.elev).map(z=>{let et=1e9,k=-1e9,st=1e9,Q=-1e9;for(let[F,V]of z.p)et=Math.min(et,F),k=Math.max(k,F),st=Math.min(st,V),Q=Math.max(Q,V);return{c:z,x0:et,x1:k,z0:st,z1:Q}}),E=(z,et)=>{let k=b.filter(st=>z>st.x0-70&&z<st.x1+70&&et>st.z0-70&&et<st.z1+70).map(st=>({c:st.c,q:bn(st.c,z,et)})).filter(st=>st.q.d<70);for(let st=0;st<k.length;st++)for(let Q=st+1;Q<k.length;Q++){let F=k[st],V=k[Q];if(F.c.nombre!==V.c.nombre||F.q.dx*V.q.dx+F.q.dz*V.q.dz>-.5)continue;let W=bn(V.c,F.q.x,F.q.z).d;if(F.q.d+V.q.d<=W+2)return!0}return!1};{let et=new Map,k=(ut,wt)=>Math.floor(ut/25)+","+Math.floor(wt/25);for(let ut of r)for(let wt=1;wt<ut.p.length;wt++){let[Lt,D]=ut.p[wt-1],[ie,Gt]=ut.p[wt],Qt={x1:Lt,z1:D,x2:ie,z2:Gt,r:ut.w/2+2.4};for(let pt=Math.floor((Math.min(Lt,ie)-12)/25);pt<=Math.floor((Math.max(Lt,ie)+12)/25);pt++)for(let ye=Math.floor((Math.min(D,Gt)-12)/25);ye<=Math.floor((Math.max(D,Gt)+12)/25);ye++){let qt=pt+","+ye;(et.get(qt)||et.set(qt,[]).get(qt)).push(Qt)}}let st=(ut,wt,Lt)=>{let D=Lt.x2-Lt.x1,ie=Lt.z2-Lt.z1,Gt=D*D+ie*ie||1,Qt=((ut-Lt.x1)*D+(wt-Lt.z1)*ie)/Gt;return Qt=Math.max(0,Math.min(1,Qt)),Math.hypot(ut-Lt.x1-D*Qt,wt-Lt.z1-ie*Qt)},Q=(ut,wt,Lt)=>{let D=Math.floor(ut/25),ie=Math.floor(wt/25);for(let Gt=-1;Gt<=1;Gt++)for(let Qt=-1;Qt<=1;Qt++)for(let pt of et.get(D+Gt+","+(ie+Qt))||[])if(st(ut,wt,pt)<pt.r+Lt)return!1;return!0},F=new Map,V=8,W=(ut,wt)=>{let Lt=Math.floor(ut/V)+","+Math.floor(wt/V);(F.get(Lt)||F.set(Lt,[]).get(Lt)).push([ut,wt])},mt=(ut,wt,Lt)=>{let D=Math.floor(ut/V),ie=Math.floor(wt/V);for(let Gt=-1;Gt<=1;Gt++)for(let Qt=-1;Qt<=1;Qt++)for(let[pt,ye]of F.get(D+Gt+","+(ie+Qt))||[])if(Math.hypot(pt-ut,ye-wt)<Lt)return!0;return!1};for(let ut of i.edificios||[])if(ut.pts&&ut.pts.length){let wt=0,Lt=0;for(let[D,ie]of ut.pts){let[Gt,Qt]=He(t,D,ie);wt+=Gt,Lt+=Qt}W(wt/ut.pts.length,Lt/ut.pts.length)}let[ct,Ft]=He(t,i.centro.lat,i.centro.lon),Tt=r.filter(ut=>!/^(service|motorway|link)$/.test(ut.tipo)).sort((ut,wt)=>ut.w-wt.w);for(let ut of Tt){let wt=ut.cum[ut.cum.length-1];for(let Lt of[1,-1]){let D=5;for(;D<wt-5&&_.length<2600;){let ie=On(ut.nombre+"|"+Lt+"|"+Math.round(D)+"|"+Math.round(ut.p[0][0])),Gt=6+ie*4.5,Qt=9+ie*7%1*5,pt=Ie(ut,D+Gt/2);if(D+=Gt+.25,Math.hypot(pt.x-ct,pt.z-Ft)>750||ie<.06)continue;let ye=-pt.dz*Lt,qt=pt.dx*Lt,te=ut.w/2+2.7+Qt/2,C=pt.x+ye*te,T=pt.z+qt*te;if(!Q(C,T,Qt/2-.3)||!Q(C+pt.dx*Gt/2,T+pt.dz*Gt/2,.4)||!Q(C-pt.dx*Gt/2,T-pt.dz*Gt/2,.4)||mt(C,T,Math.min(Gt,Qt)*.85)||p.barco&&Math.hypot(C-p.barco.x,T-p.barco.z)<66||p.libres&&p.libres.some(([nt,rt])=>Math.hypot(C-nt,T-rt)<9)||p.super&&Math.hypot(C-p.super.x,T-p.super.z)<p.super.r+6||E(C,T)||p.parques&&p.parques.some(nt=>Kl(C,T,nt.poli))||ut.oneway&&r.some(nt=>nt!==ut&&nt.oneway&&nt.nombre&&nt.nombre===ut.nombre&&(()=>{let rt=bn(nt,pt.x,pt.z);return rt.d>140?!1:bn(nt,C,T).d<rt.d})()))continue;W(C,T);let X=pt.dx*Gt/2,gt=pt.dz*Gt/2,at=ye*Qt/2,St=qt*Qt/2,Rt=ie<.35?1:ie<.85?2:3;_.push({loc:[[C-X-at,T-gt-St],[C+X-at,T+gt-St],[C+X+at,T+gt+St],[C-X+at,T-gt+St]],h:3*Rt+ie*31%1*.6,id:"s"+C.toFixed(1)+T.toFixed(1)})}}}}let g=[15918022,15250592,13227743,16045453,12114110,15123414,14209732,11125984,15778427,14736853,16171425,12572902],v=[],R=[],A=[],I=(z,et)=>{let k=new Ce;for(let st of["position","uv"]){let Q=z.attributes[st];k.setAttribute(st,new en(Q.array.slice(et.start*Q.itemSize,(et.start+et.count)*Q.itemSize),Q.itemSize))}return k};for(let z of(i.edificios||[]).concat(_)){if(!z.loc&&(!z.pts||z.pts.length<4))continue;if(p.super&&!z.loc){let[Q,F]=He(t,z.pts[0][0],z.pts[0][1]),V=0,W=0;for(let[mt,ct]of z.pts){let[Ft,Tt]=He(t,mt,ct);V+=Ft,W+=Tt}if(V/=z.pts.length,W/=z.pts.length,Math.hypot(V-p.super.x,W-p.super.z)<p.super.r+3||Math.hypot(Q-p.super.x,F-p.super.z)<p.super.r)continue}if(p.parques&&p.parques.length&&!z.loc){let Q=0,F=0;for(let[V,W]of z.pts){let[mt,ct]=He(t,V,W);Q+=mt,F+=ct}if(Q/=z.pts.length,F/=z.pts.length,p.parques.some(V=>Kl(Q,F,V.poli)))continue}if(p.barco&&!z.loc){let Q=z.pts.map(([Ft,Tt])=>He(t,Ft,Tt)),F=p.barco.x,V=p.barco.z,W=0,mt=0;for(let[Ft,Tt]of Q)W+=Ft,mt+=Tt;W/=Q.length,mt/=Q.length;let ct=!1;for(let Ft=0,Tt=Q.length-1;Ft<Q.length;Tt=Ft++){let[ut,wt]=Q[Ft],[Lt,D]=Q[Tt];wt>V!=D>V&&F<(Lt-ut)*(V-wt)/(D-wt||1e-9)+ut&&(ct=!ct)}if(ct||Math.hypot(W-F,mt-V)<75||Q.some(([Ft,Tt])=>Math.hypot(Ft-F,Tt-V)<52))continue}let et=z.loc?z.loc.map(([Q,F])=>new xt(Q,-F)):z.pts.map(([Q,F])=>{let[V,W]=He(t,Q,F);return new xt(V,-W)}),k=On(z.id||z.pts[0][0]+","+z.pts[0][1]);z.loc&&kv(et)&&et.reverse();let st=z.h||(k<.55?3.2*(1+Math.floor(k*4)):k<.9?3.2*(2+Math.floor(k*3)):3.2*(5+Math.floor(k*8)));try{let Q=new Xs(new vi(et),{depth:st,bevelEnabled:!1}).rotateX(-Math.PI/2);Q.index&&(Q=Q.toNonIndexed());let F=g[Math.floor(k*g.length)];for(let ct of Q.groups){let Ft=Yn(I(Q,ct),F);(ct.materialIndex===0?R:v).push(Ft)}let V=0,W=0,mt=0;for(let ct=0;ct<et.length;ct++){let Ft=et[ct],Tt=et[(ct+1)%et.length],ut=Ft.x*Tt.y-Tt.x*Ft.y;V+=ut,W+=(Ft.x+Tt.x)*ut,mt+=(Ft.y+Tt.y)*ut}V/=2,Math.abs(V)>30&&k*7%1<.8&&(W/=6*V,mt/=6*V,A.push([W+(k*13%1-.5)*2,st,-mt+(k*17%1-.5)*2]))}catch{}}for(let z=0;z<v.length;){let et=0,k=z;for(;k<v.length&&et<24e3;)et+=v[k++].attributes.position.count;let st=Ee(v.slice(z,k));st.computeVertexNormals(),z=k;let Q=new ot(st,Wv());Q.castShadow=!0,Q.receiveShadow=!0,Q.name="muros",n.add(Q)}if(R.length){let z=Ee(R);z.computeVertexNormals();let et=new ot(z,new Pt({vertexColors:!0}));et.receiveShadow=!0,n.add(et)}if(A.length){let z=Ee([Yn(new xe(.6,.6,1.15,10).translate(0,.78,0),1776411),Yn(new xe(.62,.62,.08,10).translate(0,1.38,0),2763306),Yn(new Vt(1.1,.2,1.1).translate(0,.1,0),10131342)].map(tu));z.computeVertexNormals();let et=new Ne(z,new Pt({vertexColors:!0}),A.length),k=new re;A.forEach(([st,Q,F],V)=>et.setMatrixAt(V,k.makeTranslation(st,Q,F))),et.castShadow=!0,n.add(et)}let L=[],B=[],P=[],H=[],q=[];for(let z of i.rieles||[]){let et=z.pts.map(([st,Q])=>He(t,st,Q));if(et.length<2)continue;let k={p:et,cum:vo(et),elevado:!!z.elevado,y:z.elevado?8:.12,periodo:z.l8?8:60,vagones:z.l8?6:9,t:Math.random()*60};if(!(k.cum[k.cum.length-1]<40)){if(L.push(k),k.elevado){Pn(et,9,8,H),Pn(et,9,6.8,H);let st=k.cum[k.cum.length-1];for(let Q=5;Q<st;Q+=26){let F=Ie(k,Q);q.push(new Vt(1.4,6.8,1.4).translate(F.x,3.4,F.z))}}else Pn(et,8.4,.07,B);for(let st of[-2.45,-1.05,1.05,2.45]){let Q=[],F=k.cum[k.cum.length-1];for(let V=0;V<=F;V+=Math.max(4,F/200)){let W=Ie(k,V);Q.push([W.x-W.dz*st,W.z+W.dx*st])}Pn(Q,.12,k.y+.1,P)}}}if(B.length&&n.add(new ot(Ee(B),new Pt({color:7037528,side:Te}))),P.length&&n.add(new ot(Ee(P),new Pt({color:10133670,side:Te}))),H.length){let z=new ot(Ee(H),new Pt({color:12170925,side:Te}));z.castShadow=!0,n.add(z)}if(q.length){let z=new ot(Ee(q),new Pt({color:11578788}));z.castShadow=!0,n.add(z)}let Y=new Ne(jd(),Yi,400);Y.count=0,Y.castShadow=!0,n.add(Y);let ft=[],j=[],G=[],J=[];for(let z of i.troles||[]){let et=z.pts.map(([Q,F])=>He(t,Q,F));if(et.length<2)continue;let k={p:et,cum:vo(et),periodo:30};if(k.cum[k.cum.length-1]<40)continue;ft.push(k),Pn(et,9.5,8.5,j),Pn(et,9.5,7.3,j);let st=k.cum[k.cum.length-1];for(let Q=5;Q<st;Q+=30){let F=Ie(k,Q);G.push(new Vt(1.5,7.3,1.5).translate(F.x,3.65,F.z))}for(let Q of[-2.2,-1.3,1.3,2.2]){let F=[];for(let V=0;V<=st;V+=Math.max(5,st/200)){let W=Ie(k,V);F.push([W.x-W.dz*Q,W.z+W.dx*Q])}Pn(F,.06,13.1,J)}for(let Q=10;Q<st;Q+=40){let F=Ie(k,Q);for(let V of[-1,1])G.push(new Vt(.18,5,.18).translate(F.x-F.dz*4.4*V,11,F.z+F.dx*4.4*V))}}if(j.length){let z=new ot(Ee(j),new Pt({color:13223613,side:Te}));z.castShadow=!0,n.add(z)}if(G.length){let z=new ot(Ee(G),new Pt({color:11578788}));z.castShadow=!0,n.add(z)}J.length&&n.add(new ot(Ee(J),new ge({color:2763306,side:Te})));let dt=new Ne($d(),Yi,60);dt.count=0,dt.castShadow=!0,n.add(dt);let bt=[],K=[],ht=[];for(let z of i.mb||[]){let et=z.pts.map(([Q,F])=>He(t,Q,F));if(et.length<2)continue;let k={p:et,cum:vo(et),periodo:40,l:z.l},st=k.cum[k.cum.length-1];if(!(st<30)){bt.push(k);for(let Q of[-3.6,3.6]){let F=[];for(let V=0;V<=st;V+=Math.max(4,st/300)){let W=Ie(k,V);F.push([W.x-W.dz*Q,W.z+W.dx*Q])}Pn(F,.28,.075,K);for(let V=0;V<=st;V+=6){let W=Ie(k,V);ht.push({x:W.x-W.dz*Q,z:W.z+W.dx*Q,c:qi.metrobus,f:Math.floor(V/6)%3})}}}}K.length&&n.add(new ot(Ee(K),new ge({color:15909376,side:Te})));let yt=new Ne(Kd(),Yi,80);yt.count=0,yt.castShadow=!0,n.add(yt);for(let z of r){if(z.w<7||z.elev)continue;let et=z.cum[z.cum.length-1],k=z.w>=12?5:7,st=Hl[z.tipo];for(let Q=0;Q<=et;Q+=k){let F=Ie(z,Q),V=Math.floor(Q/k)%3;for(let W of[-1,1])ht.push({x:F.x-F.dz*(z.w/2-.4)*W,z:F.z+F.dx*(z.w/2-.4)*W,y:st,c:qi.orilla,f:V});if(!z.oneway&&z.w>=10)ht.push({x:F.x,z:F.z,y:st,c:qi.carril,f:V});else if(z.oneway&&z.w>=10)for(let W of[-1,1])ht.push({x:F.x-F.dz*z.w*.17*W,z:F.z+F.dx*z.w*.17*W,y:st,c:qi.carril,f:V})}if(ht.length>14e3)break}let _t=Zd(ht);n.add(_t),Ze.add(n);let Mt={O:t,grupo:n,calles:r,etiquetas:M,rieles:L,tren:Y,troles:ft,trole:dt,mbs:bt,mbus:yt,luces:_t,listo:!0,coches:e?e.coches:[],motos:e?e.motos:[],pj:e?e.pj:null,rastro:e?e.rastro:[],taxi:e?e.taxi:null,cruce:e?e.cruce:null,radar:m,cruces:Ev(r),letreros:e?e.letreros:null,guias:e?e.guias:null,hitos:p};e&&(Ze.remove(e.grupo),e.grupo.traverse(z=>{z.geometry&&z.geometry!==ql&&z.geometry.dispose()})),e&&e.O!==t&&(Mt.pj=null,Mt.rastro=[]),Zt=Mt,Zh&&tp(Zh);for(let z of Zt.coches)z.ci=-1;for(let z of Zt.motos)z.ci=-1;ep()}var Zh=null;function tp(i){if(Zh=i,!Zt||!Zt.O||(Zt.trafG&&(Zt.grupo.remove(Zt.trafG),Zt.trafG.traverse(s=>{s.geometry&&s.geometry.dispose()}),Zt.trafG=null),!i||!i.length))return;let t={cerr:[],rojo:[],amar:[],verde:[]};for(let s of i){let r=s.pts.map(([a,l])=>He(Zt.O,a,l));if(r.length<2||Math.hypot(r[0][0]-(Zt.pj?Zt.pj.x:0),r[0][1]-(Zt.pj?Zt.pj.z:0))>1500)continue;let o=s.nivel<0?"cerr":s.nivel<.45?"rojo":s.nivel<.75?"amar":"verde";Pn(r,o==="verde"?1.4:2.2,.095,t[o])}let e={cerr:9109504,rojo:15022389,amar:15905280,verde:3129178},n=new ve;for(let s in t)if(t[s].length){let r=new ot(Ee(t[s]),new ge({color:e[s],transparent:!0,opacity:s==="verde"?.55:.8,side:Te,depthWrite:!1}));r.renderOrder=1,n.add(r)}Zt.grupo.add(n),Zt.trafG=n}var fs=null;function Wv(){if(fs)return fs;let i=4,t=256,e=document.createElement("canvas"),n=document.createElement("canvas");e.width=e.height=n.width=n.height=t;let s=e.getContext("2d"),r=n.getContext("2d");s.fillStyle="#ffffff",s.fillRect(0,0,t,t),r.fillStyle="#000",r.fillRect(0,0,t,t);let o=t/i;for(let c=0;c<i;c++)for(let h=0;h<i;h++){let u=c*o,f=h*o;s.fillStyle="rgba(0,0,0,.10)",s.fillRect(u+o*.18,f+o*.24,o*.64,o*.52),s.fillStyle="#33414f",s.fillRect(u+o*.22,f+o*.28,o*.56,o*.44),s.fillStyle="#5a6b7c",s.fillRect(u+o*.49,f+o*.28,o*.03,o*.44),Math.random()<.55&&(r.fillStyle=Math.random()<.3?"#ffe7b0":"#ffc96b",r.fillRect(u+o*.22,f+o*.28,o*.56,o*.44))}let a=new Mn(e),l=new Mn(n);for(let c of[a,l])c.wrapS=c.wrapT=di,c.repeat.set(1/(3.2*i),1/(3.2*i)),c.colorSpace=Ue,c.anisotropy=4;return fs=new Pt({vertexColors:!0,map:a,emissiveMap:l,emissive:0}),fs}var Hh={};function Xv(i){let t=i?"n":"d";if(Hh[t])return Hh[t];let e=document.createElement("canvas");e.width=4,e.height=256;let n=e.getContext("2d"),s=n.createLinearGradient(0,0,0,256);i?(s.addColorStop(0,"#03060f"),s.addColorStop(.55,"#0d1630"),s.addColorStop(1,"#27324f")):(s.addColorStop(0,"#5f9fd8"),s.addColorStop(.6,"#a9d0ee"),s.addColorStop(1,"#dce9f2")),n.fillStyle=s,n.fillRect(0,0,4,256);let r=new Mn(e);return r.colorSpace=Ue,Hh[t]={t:r,horiz:i?2568783:14477810}}var jl="muestra";function ep(){let i=!!(Zt&&Zt.listo&&Ut.pos);if((i?"real":"muestra")!==jl){jl=i?"real":"muestra",Ti.ini=!1,_n.visible=!i,nn&&(nn.tren.visible=!i);for(let t of Tn)t!==Ht&&(t.g.visible=!i);if(Zt){Zt.grupo.visible=i;for(let t of Zt.coches)t.g.visible=i;for(let t of Zt.motos)t.g.visible=i;Zt.taxi&&(Zt.taxi.g.visible=i),Zt.cruce&&(Zt.cruce.g.visible=i&&Ut.rojo),Zt.letreros&&!i&&(Zt.letreros.forEach(t=>t.visible=!1),(Zt.guias||[]).forEach(t=>t.visible=!1))}i||(Ht.g.rotation.y=0,Ht.z=Ji[1]),Zl()}}function qv(i,t,e=22,n){let s=null;for(let r=0;r<Zt.calles.length;r++){let o=Zt.calles[r];if(o.tipo==="service"&&!n)continue;let a=o.p;for(let l=1;l<a.length;l++){let c=a[l-1][0],h=a[l-1][1],u=a[l][0]-c,f=a[l][1]-h,d=u*u+f*f;if(!d)continue;let p=((i-c)*u+(t-h)*f)/d;p=Math.max(0,Math.min(1,p));let S=c+u*p,x=h+f*p,m=Math.hypot(i-S,t-x),M=m;if(n){let y=Math.sqrt(d);M+=(1-Math.abs((u*n[0]+f*n[1])/y))*8}if(m<e&&(!s||M<s.pen)){let y=Math.sqrt(d);s={ci:r,i:l,t:p,x:S,z:x,d:m,pen:M,dx:u/y,dz:f/y,s:o.cum[l-1]+y*p}}}}return s}function ps(i){return i.ncar?i.oneway?Math.max(1,Math.round(i.ncar)):Math.max(1,Math.round(i.ncar/2)):i.oneway?Math.max(1,Math.min(5,Math.floor(i.w/2.8))):Math.max(1,Math.min(4,Math.floor(i.w/2/2.8)))}function Eo(i,t){let e=i.nl||ps(i);return i.oneway?-i.w/2+(t+.5)*i.w/e:(t+.5)*i.w/2/e}function Vl(i){let t=i.nl||ps(i);return t>=3?t-2:t-1}var Fd=null;function Yv(){let i=Zt,[t,e]=He(i.O,Ut.pos.lat,Ut.pos.lon);i.pj||(i.pj={x:t,z:e,cx:t,cz:e,tx:t,tz:e,h:0,ht:0,ci:-1,s:0,dir:1,rx:t,rz:e,v:0,off:0,offObj:0,carril:null,tc:0});let n=i.pj,s=t-n.rx,r=e-n.rz,o=Math.hypot(s,r),a=o>1.5?[s/o,r/o]:[Math.cos(n.ht),-Math.sin(n.ht)],l=qv(t,e,25,a);if(l){let c=i.calles[l.ci],h=l.dx*a[0]+l.dz*a[1]>=0?1:-1,u=l.dx*h,f=l.dz*h;n.tx=l.x,n.tz=l.z,(n.ci!==l.ci||n.dir!==h)&&(n.carril=Vl(c)),n.ci=l.ci,n.s=l.s,n.dir=h,(o>1.5||n.ci!==l.ci)&&(n.ht=sn(u,f))}else n.tx=t,n.tz=e,o>1.5&&(n.ht=sn(a[0],a[1])),n.ci=-1;if(o>1.5&&(n.rx=t,n.rz=e),Math.hypot(n.tx-n.cx,n.tz-n.cz)>300){n.cx=n.tx,n.cz=n.tz,n.h=n.ht,n.off=n.offObj=0,i.rastro=[],Ti.ini=!1;for(let c of i.coches)c.ci=-1;for(let c of i.motos)c.ci=-1}}function Zv(i,t){let e=Wl(i),n=[];return i.calles.forEach((s,r)=>{if(s.tipo==="service"||s.tipo==="living_street")return;let o=s.p[Math.floor(s.p.length/2)];Math.hypot(o[0]-e.x,o[1]-e.z)<t+s.cum[s.cum.length-1]/2&&n.push(r)}),n}function Gl(i,t,e,n){let s=i.pj;if(n&&!fe&&s.ci>=0&&Math.random()<.6){let o=i.calles[s.ci],a=o.cum[o.cum.length-1];t.ci=s.ci,t.dir=Math.random()<.75||o.oneway?s.dir:-s.dir,t.s=Math.max(0,Math.min(a,s.s+t.dir*(t.dir===s.dir?(Math.random()<.5?12:-12)+(Math.random()-.5)*220:(Math.random()-.5)*300)))}else{if(!e.length){t.ci=-1;return}t.ci=e[Math.floor(Math.random()*e.length)];let o=i.calles[t.ci],a=o.cum[o.cum.length-1];t.dir=o.oneway||Math.random()<.5?1:-1,t.s=Math.random()*a}t.v=t.vmax*.6,t.lado=(Math.random()-.5)*.6;let r=i.calles[t.ci];t.carril=Math.floor(Math.random()*(r.nl||ps(r)))}function Jv(i){let t=Ut.nivel==="pesado",e=t?46:16,n=6;for(;i.coches.length<e;){let s=kd(),r=Mo(s==="trailer"&&!Ut.pico?"sedan":s,si(qh),2831424);i.coches.push({...r,ci:-1,s:0,dir:1,v:0,vmax:0,a:0,lado:0})}for(;i.coches.length>e;)Ze.remove(i.coches.pop().g);for(;i.motos.length<n;){let s=Mo("moto",si([12986408,1402304,2236962]),si([3622735,7162945]));i.motos.push({...s,ci:-1,s:0,dir:1,v:12,vmax:12,a:0,fase:Math.random()*6})}i.taxi||(i.taxi=Mo("taxi"));for(let s of i.coches)s.vmax=t?3+Math.random()*3:9+Math.random()*5}function Od(i,t,e=0){let n=i.calles[t.ci],s=Ie(n,t.s),r=s.dx*t.dir,o=s.dz*t.dir,a=n.nl||ps(n),l=Math.min(a-1,t.carril==null?a-1:t.carril),c=Eo(n,l)+e;t.g.position.set(s.x-o*c,ir(n,t.s),s.z+r*c),t.g.rotation.y=sn(r,o)}function $v(i,t){let e=i.pj;if(e.tc+=t,e.ci<0){e.offObj=0,e.carrilFis=null;return}let n=i.calles[e.ci],s=n.nl||ps(n);(e.carril==null||e.carril>=s)&&(e.carril=Vl(n));let r=Ht.v,o=r>40/3.6,a=p=>(p.s-e.s)*e.dir,l=i.coches.filter(p=>p.ci===e.ci&&p.g.visible),c=(p,S,x)=>l.some(m=>m.dir===e.dir&&(m.carril||0)===p&&a(m)>S&&a(m)<x),h=(p,S)=>l.some(x=>x.dir!==e.dir&&a(x)>p&&a(x)<S),u=l.find(p=>p.dir===e.dir&&(p.carril||0)===e.carril&&a(p)>1&&a(p)<24+r&&p.v<r-1.2);if(e.carril===-1&&h(-3,35))e.carril=0,e.tc=0;else if(e.tc>1.1){if(o&&u){let p=[e.carril-1,e.carril+1].filter(S=>S>=0&&S<s);s===1&&!n.oneway&&!h(-8,55)&&p.push(-1);for(let S of p)if(S===-1||!c(S,-9,16)){e.carril=S,e.tc=0;break}}else if(e.carril!==Vl(n)){let p=Vl(n);c(p,-11,9+r*.6)||(e.carril=p,e.tc=0)}}e.offObj=e.carril===-1?-Eo(n,0):Eo(n,e.carril);let f=0,d=1e9;for(let p=0;p<s;p++){let S=Math.abs(Eo(n,p)-e.off);S<d&&(d=S,f=p)}e.carrilFis=f}function Kv(i,t){let e=i.pj;if(!i.letreros){i.letreros=[],i.guias=[];for(let l=0;l<4;l++){let c=new xi({depthTest:!1,depthWrite:!1,sizeAttenuation:!1,transparent:!0}),h=new Fi(c);h.renderOrder=20,h.center.set(.5,0),h.visible=!1,Ze.add(h),i.letreros.push(h);let u=new Ce;u.setAttribute("position",new ae([0,0,0,0,1,0],3));let f=new Gs(u,new ss({color:1118481,depthTest:!1,transparent:!0}));f.renderOrder=19,f.visible=!1,f.frustumCulled=!1,Ze.add(f),i.guias.push(f)}}if(i.tLet=(i.tLet||0)+t,i.tLet<.25&&i.letSel){Bd(i);return}i.tLet=0;let n=e.x,s=e.z,r=e.h,o=e.ci>=0?i.calles[e.ci]:null;if(fe){let l=ec();n=l.x,s=l.z,r=fe.h,o=null;let c=28,h=Math.cos(r),u=-Math.sin(r);for(let f of i.calles){if(f.elev||!f.nombre)continue;let d=bn(f,n,s);d.d<c&&Math.abs(d.dx*h+d.dz*u)>.55&&(c=d.d,o=f)}}i.letV={x:n,z:s};let a=o&&o.nombre;if(i.letSel=[],a){let l=Math.cos(r),c=-Math.sin(r),h=new Set,u=i.cruces.filter(f=>f.a===a||f.b===a).map(f=>{let d=f.x-n,p=f.z-s;return{k:f,ad:d*l+p*c,lat:Math.abs(-d*c+p*l),otro:f.a===a?f.b:f.a}}).filter(f=>f.ad>-6&&f.ad<260&&f.lat<22+o.w).sort((f,d)=>f.ad-d.ad);for(let f of u){if(h.has(f.otro))continue;h.add(f.otro);let d=f.k,p=d.a===a?d.db:d.da,S=d.a===a?d.wa:d.wb,x=-c,m=l,M=p[0]*x+p[1]*m>=0?1:-1,y=Math.abs(p[0]*x+p[1]*m)>.25?S/2+7:0;if(f.px=d.x+p[0]*M*y,f.pz=d.z+p[1]*M*y,i.letSel.push(f),i.letSel.length>=i.letreros.length)break}}Bd(i)}var mo=new N;function Bd(i){let t=i.pj,e=Math.tan(Oe.fov*Math.PI/360),n=-1/0;Oe.updateMatrixWorld(),i.letreros.forEach((s,r)=>{let o=i.letSel&&i.letSel[r],a=i.guias&&i.guias[r];if(!o){s.visible=!1,a&&(a.visible=!1);return}let l=Sv(o.otro);s.material.map!==l.t&&(s.material.map=l.t,s.material.needsUpdate=!0),s.center.set(l.cx,l.cy);let c=i.letV||t,h=o.px??o.k.x,u=o.pz??o.k.z,f=Math.hypot(h-c.x,u-c.z),d=(.052+.03*Math.max(0,1-f/160))*1.63,p=f>230?Math.max(0,(260-f)/30):1;s.scale.set(d*l.ar,d,1),s.position.set(h,.4,u),s.material.opacity=p,s.visible=!0,s.renderOrder=30-r,mo.copy(s.position).applyMatrix4(Oe.matrixWorldInverse);let S=-mo.z;if(S>.5){mo.copy(s.position).project(Oe);let x=d/e,m=n+.012-mo.y;m>0&&(s.position.y+=m*e*S),n=Math.max(n,mo.y+Math.max(0,m))+x}if(a){let x=s.position.y>1.2;if(a.visible=x,x){let m=a.geometry.attributes.position;m.setXYZ(0,h,.3,u),m.setXYZ(1,h,s.position.y,u),m.needsUpdate=!0,a.material.opacity=p,a.renderOrder=19-r}}})}function jv(i){let t=Zt;Fn+=i,(!t.pj||Fd!==Ut.pos.ts)&&(Fd=Ut.pos.ts,Yv());let e=t.pj,n=1-Math.exp(-i*2.2);e.cx+=(e.tx-e.cx)*n,e.cz+=(e.tz-e.cz)*n;let s=e.ht-e.h;s=Math.atan2(Math.sin(s),Math.cos(s)),e.h+=s*(1-Math.exp(-i*3)),$v(t,i);let r=e.off;e.off+=(e.offObj-e.off)*(1-Math.exp(-i*1.6));let o=(e.off-r)/Math.max(i,.001);e.x=e.cx+Math.sin(e.h)*e.off,e.z=e.cz+Math.cos(e.h)*e.off;let a=window.__velDbg!=null?window.__velDbg/3.6:Ut.rojo||Ut.llego?0:Ut.vel!=null?Ut.vel/3.6:0,l=Ht.v;Ht.v+=(a-Ht.v)*(1-Math.exp(-i*1.5)),Ht.a=(Ht.v-l)/Math.max(i,.001);{let y=e.ci>=0?t.calles[e.ci]:null,_=y&&y.elev?ir(y,bn(y,e.cx,e.cz).s):0;e.y=(e.y||0)+(_-(e.y||0))*(1-Math.exp(-i*2.5))}Ht.g.position.set(e.x,e.y,e.z),Ht.g.rotation.y=e.h-Math.max(-.3,Math.min(.3,o*.09));let c=Ht.a<-.4||Ht.v<.4;Ht.stop.material=c?yo:sr,Ht.glow.visible=c||Ut.noche,Ht.glow.scale.x=c?5.5:2.5,ds.position.y=3.3+Math.sin(Fn*3)*.2,ds.rotation.y+=.03;let h=t.rastro[t.rastro.length-1];(!h||Math.hypot(h[0]-e.x,h[1]-e.z)>.6)&&(t.rastro.push([e.x,e.z]),t.rastro.length>120&&t.rastro.shift()),Jv(t);let u=Zv(t,320),f=Ut.nivel==="pesado",d={};for(let y of t.coches){if((y.ci<0||y.ci>=t.calles.length)&&Gl(t,y,u,f),y.ci<0){y.g.visible=!1;continue}let _=t.calles[y.ci],b=_.cum[_.cum.length-1],E=Ie(_,y.s),g=Wl(t);if(Math.hypot(E.x-g.x,E.z-g.z)>380||y.s<=0&&y.dir<0||y.s>=b&&y.dir>0){Gl(t,y,u,f);continue}(d[y.ci+":"+y.dir+":"+(y.carril||0)]||=[]).push(y)}for(let y in d){let _=d[y],[b,E,g]=y.split(":").map(Number),v=b===e.ci&&E===e.dir&&(g===e.carril||g===e.carrilFis),R=_.map(A=>({o:A,s:A.s}));v&&R.push({o:null,s:e.s,v:Ht.v}),R.sort((A,I)=>(I.s-A.s)*E);for(let A=0;A<R.length;A++){let I=R[A];if(!I.o)continue;let L=I.o,B=L.vmax;if(A>0){let q=(R[A-1].s-L.s)*E-6;B=Math.min(B,Math.max(0,q*.9))}f&&Math.random()<.002&&(L.frena=1.3),L.frena>0&&(L.frena-=i,B=0),v&&A>0&&!R[A-1].o&&(e.s-L.s)*E<0;let P=L.v;if(L.v+=(B-L.v)*(1-Math.exp(-i*2)),L.a=(L.v-P)/Math.max(i,.001),L.s+=L.v*E*i,v){let q=(L.s-e.s)*E;q>-5&&q<6&&(L.s=e.s+E*(q>=0?6:-6))}Od(t,L),L.g.visible=!0;let H=L.a<-.5||L.v<.5;L.stop.material=H?yo:sr,L.glow.visible=H||Ut.noche,L.glow.scale.x=H?5.5:2.5,L.haz.visible=Ut.noche}}for(let y of t.motos){if((y.ci<0||y.ci>=t.calles.length)&&Gl(t,y,u,!0),y.ci<0){y.g.visible=!1;continue}let _=t.calles[y.ci],b=_.cum[_.cum.length-1];y.fase+=i,y.s+=y.vmax*y.dir*i;let E=Ie(_,y.s),g=Wl(t);if(y.s<=0||y.s>=b||Math.hypot(E.x-g.x,E.z-g.z)>380){Gl(t,y,u,!0);continue}{let v=_.nl||ps(_);y.carril=v-1,Od(t,y,-(v>=2?_.w/(_.oneway?1:2)/v/2:Eo(_,0)*.5)+Math.sin(y.fase*.9)*.6)}y.g.visible=!0,y.haz.visible=Ut.noche}{let y=t.taxi,_=t.rastro,b=0,E=_.length-1,g=e.x,v=e.z,R=e.h,A=7.5+Math.min(6,Ht.v*.5);for(;E>0&&b<A;){let I=_[E][0]-_[E-1][0],L=_[E][1]-_[E-1][1],B=Math.hypot(I,L);if(b+B>=A){let P=(A-b)/B;g=_[E][0]-I*P,v=_[E][1]-L*P,R=sn(I,L),b=A;break}b+=B,E--}b<A&&(g=e.x-Math.cos(e.h)*A,v=e.z+Math.sin(e.h)*A,R=e.h),y.g.position.set(g,e.y||0,v),y.g.rotation.y=R,y.g.visible=!0,y.stop.material=c?yo:sr,y.glow.visible=c||Ut.noche,y.glow.scale.x=c?5.5:2.5,y.haz.visible=Ut.noche}ty(i),Qv(i);let p=Wl(t),S=y=>Math.hypot(y.x-p.x,y.z-p.z)<520;{let y=[];for(let _ of t.troles)Pd(_,i,12,12,1,0,1.75,8.5,y);Jl(t.trole,y.filter(S))}{let y=[];for(let _ of t.mbs)Pd(_,i,10,18,1,0,1.75,0,y);Jl(t.mbus,y.filter(S))}if(Jd(t.luces,Fn),Kv(t,i),t.hitos&&t.hitos.sem&&Uv(t.hitos.sem,Fn),t.radar){let y=Ut.foto&&Date.now()-Ut.foto<1500;t.radar.flash.visible=y&&Math.floor(Fn*10)%2===0,t.radar.led.material.color.setHex(Math.floor(Fn*2)%2?16722458:5570560)}let x=new N;Oe.getWorldDirection(x);let m=-x.z,M=x.x;for(let y of t.etiquetas)y.rotation.y=y.userData.base+(y.userData.dx*m+y.userData.dz*M<0?Math.PI:0)}function Qv(i){let t=Zt,e=t.tren,n=new re,s=new We,r=new N,o=new N(1,1,1),a=new N(0,1,0),l=0,c=16;for(let h of t.rieles){h.t+=i;let u=h.cum[h.cum.length-1],f=h.vagones*15.3,d=h.periodo*c;for(let p of[1,-1]){let S=p*1.75,x=(h.t+(p<0?h.periodo/2:0))*c%Math.max(d,u+f+60),m=Math.max(d,u+f+60);for(let M=0;M*d<m&&M<40;M++){let y=(x+M*d)%m-30;for(let _=0;_<h.vagones&&l<400;_++){let b=y-_*15.3;if(b<0||b>u)continue;p<0&&(b=u-b);let E=Ie(h,b),g=E.dx*p,v=E.dz*p;Math.hypot(E.x-t.pj.x,E.z-t.pj.z)>600||(r.set(E.x-v*S,h.y,E.z+g*S),s.setFromAxisAngle(a,sn(g,v)),e.setMatrixAt(l++,n.compose(r,s,o)))}}}}e.count=l,e.instanceMatrix.needsUpdate=!0}function ty(i){let t=Zt,e=t.pj;if(!t.cruce){let a=new ve,l=[];for(let m=-8;m<=8;m++)l.push(new we(3.2,.6).rotateX(-Math.PI/2).translate(0,0,m*1.1));let c=new ot(Ee(l),new ge({color:15921906}));c.position.y=.07,a.add(c);let h=new ve,u=new Pt({color:3882821}),f=new ot(new xe(.12,.14,6,8),u);f.position.y=3,h.add(f);let d=new ot(new Vt(.45,1.5,.55),new Pt({color:1908514}));d.position.set(-.1,5.2,0),h.add(d);let p=new ot(new Nn(.2,10,8),new ge({color:16722458}));p.position.set(-.36,5.68,0),h.add(p),[.47,.94].forEach(m=>{let M=new ot(new Nn(.17,10,8),new ge({color:2236962}));M.position.set(-.36,5.68-m,0),h.add(M)}),a.add(h);let S=[15029053,3120750,8084694,14722342],x=[0,1,2,3].map(m=>{let M=new ve,y=new ot(new xe(.22,.26,.95,8),new Pt({color:S[m]}));y.position.y=1.15,y.castShadow=!0;let _=new ot(new xe(.2,.18,.7,8),new Pt({color:2899543}));_.position.y=.35;let b=new ot(new Nn(.2,10,8),new Pt({color:13209186}));b.position.y=1.85;let E=new ot(new Vt(.12,.5,.12),new ge({color:16765952}));return E.position.y=2.6,E.visible=!1,M.add(y,_,b,E),a.add(M),{g:M,su:E,z:0,dir:1,modo:"espera",t:m*.9,x:(m-1.5)*.7}});Ze.add(a),t.cruce={g:a,sem:h,peat:x,cm:c,activo:!1,mitad:8}}let n=t.cruce;if(!Ut.rojo||(e.y||0)>1){n.g.visible=!1,n.activo=!1;return}if(!n.activo){n.activo=!0;let a=e.ci>=0?t.calles[e.ci]:null,l=a?a.w:10;n.mitad=l/2+1.3;let c=Math.cos(e.h),h=-Math.sin(e.h);n.g.position.set(e.tx+c*7,0,e.tz+h*7),n.g.rotation.y=e.h,n.cm.scale.z=Math.max(.5,l/18),n.sem.position.set(-1.5,0,n.mitad-.3),n.peat.forEach((u,f)=>{u.z=(f%2?1:-1)*n.mitad,u.dir=-Math.sign(u.z),u.modo="espera",u.t=f*.9})}n.g.visible=!0,n.g.updateMatrixWorld();let s=new re().copy(n.g.matrixWorld).invert(),r=new N,o=a=>t.motos.some(l=>(r.copy(l.g.position).applyMatrix4(s),r.x>-16&&r.x<1.5&&Math.abs(r.z-a)<1.6));for(let a of n.peat){if(a.modo==="espera")a.t-=i,a.t<=0&&!o(a.z+a.dir*2)&&(a.modo="cruza");else if(a.modo==="cruza"){let l=a.z+a.dir*1.4*i;o(l+a.dir*1.2)&&Math.abs(a.z)<n.mitad-.5?(a.modo="huye",a.dir=-a.dir):(a.z=l,Math.abs(a.z)>=n.mitad&&Math.sign(a.z)===Math.sign(a.dir)&&(a.modo="espera",a.t=2+Math.random()*3,a.dir=-Math.sign(a.z)))}else a.z+=a.dir*3.4*i,Math.abs(a.z)>=n.mitad&&(a.modo="espera",a.t=1.2+Math.random()*1.5,a.dir=-Math.sign(a.z));a.g.position.set(a.x,a.modo!=="espera"?Math.abs(Math.sin(Fn*(a.modo==="huye"?16:9)))*.08:0,a.z),a.su.visible=a.modo==="huye"}}var fe=null,Wi=new Map,bi=null,zd=0;function np(i,t,e){return{lat:i.lat-e/Qd,lon:i.lon+t/(111320*Math.cos(i.lat*Math.PI/180))}}function ec(){let[i,t]=He(Zt.O,fe.lat,fe.lon);return{x:i,z:t}}function Wl(i){return fe?ec():{x:i.pj.x,z:i.pj.z}}function Ql(){return!!(Zt&&Zt.listo&&Ut.pos&&Zt.pj)}function Gh(){return fe?!0:Ql()?(fe={...np(Zt.O,Zt.pj.x,Zt.pj.z),h:Zt.pj.h,z:1},eu(!0),!0):!1}function Jh(){fe=null,eu(!1),kl(),Xl(!0)}function eu(i){Ye&&(bi||(bi=document.createElement("button"),bi.type="button",bi.textContent="\u{1F4CD} Volver a mi carro",bi.style.cssText="position:absolute;right:10px;bottom:44px;z-index:4;padding:10px 14px;border-radius:999px;border:0;background:#1f6feb;color:#fff;font:600 15px system-ui,sans-serif;box-shadow:0 4px 14px rgba(0,0,0,.35);display:none",bi.onclick=t=>{t.stopPropagation(),Jh()}),bi.parentNode!==Ye&&(getComputedStyle(Ye).position==="static"&&(Ye.style.position="relative"),Ye.appendChild(bi)),bi.style.display=i?"block":"none")}function Hd(i,t){let e=Ye&&Ye.clientHeight||300,n=45*fe.z/e,s=Math.cos(fe.h),r=-Math.sin(fe.h),o=-r,a=s,l=ec();l.x+=(s*t-o*i)*n,l.z+=(r*t-a*i)*n,Object.assign(fe,np(Zt.O,l.x,l.z))}function Xl(i){let t=performance.now();if(!(!i&&t-zd<900)){zd=t;try{window.__v3Explorar&&window.__v3Explorar(fe?{lat:fe.lat,lon:fe.lon}:null)}catch{}}}function ey(i){i.style.touchAction="none";for(let e of["touchstart","touchmove"])i.addEventListener(e,n=>{n.cancelable&&n.preventDefault()},{passive:!1});for(let e of["gesturestart","gesturechange"])i.addEventListener(e,n=>n.preventDefault());i.addEventListener("pointerdown",e=>{if(!Ql()){try{window.__v3Explorar&&window.__v3Explorar({sinMapa:!0})}catch{}return}try{i.setPointerCapture(e.pointerId)}catch{}Wi.set(e.pointerId,{x:e.clientX,y:e.clientY,x0:e.clientX,y0:e.clientY})}),i.addEventListener("pointermove",e=>{let n=Wi.get(e.pointerId);if(n){if(Wi.size===1){let s=e.clientX-n.x,r=e.clientY-n.y;if(!fe&&Math.hypot(e.clientX-n.x0,e.clientY-n.y0)<8)return;if(Ve==="propia"&&!fe){En.yaw-=s*.008,En.pitch=Math.max(.05,Math.min(1.5,En.pitch+r*.005)),n.x=e.clientX,n.y=e.clientY,e.preventDefault();return}if(!Gh())return;e.buttons===2||e.shiftKey?fe.h-=s*.008:Hd(s,r),n.x=e.clientX,n.y=e.clientY}else if(Wi.size===2){let[s,r]=[...Wi.values()],o=Math.hypot(s.x-r.x,s.y-r.y),a=Math.atan2(r.y-s.y,r.x-s.x),l=(s.x+r.x)/2,c=(s.y+r.y)/2;n.x=e.clientX,n.y=e.clientY;let h=Math.hypot(s.x-r.x,s.y-r.y),u=Math.atan2(r.y-s.y,r.x-s.x),f=(s.x+r.x)/2,d=(s.y+r.y)/2;if(Ve==="propia"&&!fe){o>10&&h>10&&(En.dist=Math.max(6,Math.min(450,En.dist*o/h)));let S=u-a;S=Math.atan2(Math.sin(S),Math.cos(S)),En.yaw+=S,e.preventDefault();return}if(!Gh())return;o>10&&h>10&&(fe.z=Math.max(.45,Math.min(14,fe.z*o/h)));let p=u-a;p=Math.atan2(Math.sin(p),Math.cos(p)),fe.h+=p,Hd(f-l,d-c)}Xl(),e.preventDefault()}});let t=e=>{Wi.delete(e.pointerId)&&(!Wi.size&&Ve==="propia"&&Id(),!Wi.size&&fe&&Xl(!0))};i.addEventListener("pointerup",t),i.addEventListener("pointercancel",t),i.addEventListener("wheel",e=>{if(Ql()){if(e.preventDefault(),Ve==="propia"&&!fe){En.dist=Math.max(6,Math.min(450,En.dist*Math.exp(e.deltaY*.0015))),Id();return}Gh()&&(fe.z=Math.max(.45,Math.min(14,fe.z*Math.exp(e.deltaY*.0015))),Xl())}},{passive:!1}),i.addEventListener("contextmenu",e=>e.preventDefault())}function ny(i,t){if(!Ye)return;let e=document.createElement("div");e.textContent=i,e.style.cssText="position:absolute;left:50%;top:44%;transform:translate(-50%,-50%);z-index:4;max-width:86%;padding:10px 14px;border-radius:12px;background:#000c;color:#fff;font:600 15px system-ui,sans-serif;pointer-events:none;transition:opacity .6s;text-align:center",getComputedStyle(Ye).position==="static"&&(Ye.style.position="relative"),Ye.appendChild(e),setTimeout(()=>{e.style.opacity="0",setTimeout(()=>e.remove(),700)},t||3500)}var $h=!1;function iy(){if($h||!Ye||!Ql())return;$h=!0;try{if(localStorage.getItem("v3pista")>="3")return;localStorage.setItem("v3pista",String(+(localStorage.getItem("v3pista")||0)+1))}catch{}let i=document.createElement("div");i.textContent="\u261D\uFE0F Arrastra con el dedo para recorrer las calles",i.style.cssText="position:absolute;left:50%;top:44%;transform:translate(-50%,-50%);z-index:4;padding:10px 14px;border-radius:12px;background:#000b;color:#fff;font:600 15px system-ui,sans-serif;pointer-events:none;transition:opacity .6s;text-align:center",getComputedStyle(Ye).position==="static"&&(Ye.style.position="relative"),Ye.appendChild(i),setTimeout(()=>{i.style.opacity="0",setTimeout(()=>i.remove(),700)},3500)}function sy(i){let t=ec(),e=Math.cos(fe.h),n=-Math.sin(fe.h),s=fe.z,r=9.5*s,o=6.4*Math.pow(s,1.12),a=14*Math.min(s,4),l=new N(t.x-e*r,o,t.z-n*r),c=new N(t.x+e*a,0,t.z+n*a),h=1-Math.exp(-i*10);Ai.lerp(l,h),Ri.lerp(c,h);let u=Oe.aspect<1?68:50;Oe.fov!==u&&(Oe.fov=u,Oe.updateProjectionMatrix()),Oe.position.copy(Ai),Oe.lookAt(Ri),vn.position.set(t.x+25,45,t.z+30),vn.target.position.set(t.x,0,t.z)}function Ti(i){if($h||iy(),fe){sy(i);return}let t=Zt.pj,[e,n,s,r,o=0]=mv[Ve],a=Math.cos(t.h),l=-Math.sin(t.h),c=-l,h=a,u=Ve==="atras"?0:3,f=t.y||0,d=new N(t.x+a*e+c*s,n+f,t.z+l*e+h*s),p=new N(t.x+a*r+c*u,o+f,t.z+l*r+h*u);if(Ve==="propia"){let S=t.h+Math.PI+En.yaw,x=En.dist*Math.cos(En.pitch),m=En.dist*Math.sin(En.pitch)+1.5;d.set(t.x+Math.cos(S)*x,f+m,t.z-Math.sin(S)*x),p.set(t.x+a*3,f+1,t.z+l*3)}else if(Ve!=="arriba"){let S=Math.max(0,Math.min(1,(f-.8)/4));Ti.fp=(Ti.fp||0)+(S-(Ti.fp||0))*(1-Math.exp(-i*1.5));let x=Ti.fp;x>.01&&(d.x-=a*16*x,d.z-=l*16*x,d.y+=20*x,p.x+=a*10*x,p.z+=l*10*x)}if(window.__altoDbg&&(d.set(t.x,window.__altoDbg,t.z+1),p.set(t.x,0,t.z)),window.__camDbg){let S=window.__camDbg;d.set(...S[0]),p.set(...S[1]),Ai.copy(d),Ri.copy(p)}if(!Ti.ini)Ai.copy(d),Ri.copy(p),Ti.ini=!0;else{let S=1-Math.exp(-i*2.5);Ai.lerp(d,S),Ri.lerp(p,S)}Oe.position.copy(Ai),Oe.lookAt(Ri),vn.position.set(t.x+25,45,t.z+30),vn.target.position.set(t.x,0,t.z)}window.Vista3D={disponible(){try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}},montar(i){yn||(xv(),ey(yn.domElement)),Ye=i,yn.domElement.parentNode!==i&&i.prepend(yn.domElement),fe&&eu(!0),tr&&tr.disconnect(),tr=new ResizeObserver(kl),tr.observe(i),kl(),Rh||(Rh=!0,_o=0,Vh=requestAnimationFrame(Yd))},desmontar(){Rh=!1,cancelAnimationFrame(Vh),tr&&tr.disconnect()},actualizar(i){let t=Ut.viaje,e=Ut.noche;if(Object.assign(Ut,i),Ut.viaje&&!t&&(Ut._a=Ht?Ht.x+wi:null),Ut.viaje||(Ut._a=null),!yn)return;let n=Ut.nivel+Ut.zona+Ut.pico+Ut.metrobus;n!==Yh?(Yh=n,Vd(),Zl()):Ut.noche!==e&&Zl(),ep()},mapa(i){Vv(i)},explorando(){return fe?{lat:fe.lat,lon:fe.lon}:null},dejarDeExplorar(){fe&&Jh()},trafico(i){tp(i)},modo(){return Zt&&Zt.listo&&Ut.pos?"real":"muestra"},version:"V.20.11.26b",camara(){Ve=Lh[(Lh.indexOf(Ve)+1)%Lh.length];try{localStorage.setItem("vista3dCam3",Ve)}catch{}return fe&&Jh(),kl(),Ve==="propia"&&ny("\u270B Vista personalizada: arrastra para girar e inclinar, pellizca para acercar o alejar. Se queda guardada y sigue a tu carro.",5500),Rd[Ve]},nombreCamara(){return Rd[Ve]},get _dbg(){return{jugador:Ht,vehs:Tn,E:Ut,desplaz:wi,REAL:Zt,cam:Oe}}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

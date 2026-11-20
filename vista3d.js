(()=>{var Zu=0,zc=1,Ju=2;var to=1,Ha=2,Zs=3,zi=0,mn=1,Te=2,ss=0,Js=1,gi=2,Hc=3,Gc=4,$u=5;var rs=100,Ku=101,ju=102,Qu=103,tf=104,ef=200,nf=201,sf=202,rf=203,kc=204,Vc=205,of=206,af=207,lf=208,cf=209,hf=210,uf=211,ff=212,df=213,pf=214,na=0,ia=1,sa=2,Ns=3,ra=4,oa=5,aa=6,la=7,Ga=0,mf=1,gf=2,Qn=0,Wc=1,Xc=2,qc=3,Yc=4,Zc=5,Jc=6,$c=7;var Kc=300,os=301,$s=302,ka=303,Va=304,Di=1e3,Zn=1001,ca=1002,Ke=1003,xf=1004;var eo=1005;var dn=1006,Wa=1007;var xi=1008;var Mn=1009,jc=1010,Qc=1011,Ks=1012,Xa=1013,kn=1014,Un=1015,Vn=1016,qa=1017,Ya=1018,as=1020,th=35902,eh=35899,nh=1021,ih=1022,Wn=1023,ui=1026,_i=1027,Za=1028,Ja=1029,Hi=1030,$a=1031;var Ka=1033,no=33776,io=33777,so=33778,ro=33779,ja=35840,Qa=35841,tl=35842,el=35843,nl=36196,il=37492,sl=37496,rl=37488,ol=37489,oo=37490,al=37491,ll=37808,cl=37809,hl=37810,ul=37811,fl=37812,dl=37813,pl=37814,ml=37815,gl=37816,xl=37817,_l=37818,vl=37819,yl=37820,Ml=37821,Sl=36492,El=36494,bl=36495,Tl=36283,wl=36284,ao=36285,Al=36286;var yr=2300,ha=2301,ta=2302,Rc=2303,Cc=2400,Ic=2401,Pc=2402;var _f=3200;var Rl=0,vf=1,vi="",Ne="srgb",Mr="srgb-linear",Sr="linear",Se="srgb";var ea=7680;var yf=519,Mf=512,Sf=513,Ef=514,sh=515,bf=516,Tf=517,rh=518,oh=519,ah=35044;var lh="300 es",Dn=2e3,Us=2001;function rp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function op(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wf(){let i=Er("canvas");return i.style.display="block",i}var hu={},Fs=null;function br(...i){let t="THREE."+i.shift();Fs?Fs("log",t,...i):console.log(t,...i)}function Af(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function jt(...i){i=Af(i);let t="THREE."+i.shift();if(Fs)Fs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ee(...i){i=Af(i);let t="THREE."+i.shift();if(Fs)Fs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function xr(...i){let t=i.join(" ");t in hu||(hu[t]=!0,jt(...i))}function Rf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Cf={[na]:na,[sa]:aa,[ra]:ra,[Ns]:oa,[ia]:ia,[aa]:sa,[la]:la,[oa]:Ns},Jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ec=Math.PI/180,ua=180/Math.PI;function Gi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function ue(i,t,e){return Math.max(t,Math.min(e,i))}function ap(i,t){return(i%t+t)%t}function nc(i,t,e){return(1-e)*i+e*t}function If(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Pf(i,t){if(t.constructor===Float32Array)return i;let e=Cl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Lf(i,t){if(t.constructor===Float32Array)return i;let e=Cl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var mt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},je=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],p=r[o+2],M=r[o+3];if(u!==M||l!==f||c!==d||h!==p){let x=l*f+c*d+h*p+u*M;x<0&&(f=-f,d=-d,p=-p,M=-M,x=-x);let g=1-a;if(x<.9995){let S=Math.acos(x),y=Math.sin(S);g=Math.sin(g*S)/y,a=Math.sin(a*S)/y,l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+M*a}else{l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+M*a;let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ic.copy(this).projectOnVector(t),this.sub(ic)}reflect(t){return this.sub(ic.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ic=new N,uu=new je,ne=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],M=s[0],x=s[3],g=s[6],S=s[1],y=s[4],_=s[7],b=s[2],E=s[5],m=s[8];return r[0]=o*M+a*S+l*b,r[3]=o*x+a*y+l*E,r[6]=o*g+a*_+l*m,r[1]=c*M+h*S+u*b,r[4]=c*x+h*y+u*E,r[7]=c*g+h*_+u*m,r[2]=f*M+d*S+p*b,r[5]=f*x+d*y+p*E,r[8]=f*g+d*_+p*m,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=e*u+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/p;return t[0]=u*M,t[1]=(s*c-h*n)*M,t[2]=(a*n-s*o)*M,t[3]=f*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-a*e)*M,t[6]=d*M,t[7]=(n*l-c*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return xr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sc.makeScale(t,e)),this}rotate(t){return xr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sc.makeRotation(-t)),this}translate(t,e){return xr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},sc=new ne,fu=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),du=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lp(){let i={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Se&&(s.r=hi(s.r),s.g=hi(s.g),s.b=hi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Se&&(s.r=Ds(s.r),s.g=Ds(s.g),s.b=Ds(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vi?Sr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mr]:{primaries:t,whitePoint:n,transfer:Sr,toXYZ:fu,fromXYZ:du,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:fu,fromXYZ:du,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),i}var me=lp();function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ms,fa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ms===void 0&&(ms=Er("canvas")),ms.width=t.width,ms.height=t.height;let s=ms.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ms}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Er("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hi(e[n]/255)*255):e[n]=hi(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cp=0,Os=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(rc(s[o].image)):r.push(rc(s[o]))}else r=rc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function rc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}var hp=0,oc=new N,pn=class i extends Jn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Zn,s=Zn,r=dn,o=xi,a=Wn,l=Mn,c=i.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Gi(),this.name="",this.source=new Os(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(oc).x}get height(){return this.source.getSize(oc).y}get depth(){return this.source.getSize(oc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Di:t.x=t.x-Math.floor(t.x);break;case Zn:t.x=t.x<0?0:1;break;case ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Di:t.y=t.y-Math.floor(t.y);break;case Zn:t.y=t.y<0?0:1;break;case ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Kc;pn.DEFAULT_ANISOTROPY=1;var Ue=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],M=l[2],x=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-M)<.01&&Math.abs(p-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+M)<.1&&Math.abs(p+x)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,_=(d+1)/2,b=(g+1)/2,E=(h+f)/4,m=(u+M)/4,v=(p+x)/4;return y>_&&y>b?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=m/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=v/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=m/r,s=v/r),this.set(n,s,r,e),this}let S=Math.sqrt((x-p)*(x-p)+(u-M)*(u-M)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(x-p)/S,this.y=(u-M)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this.w=ue(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this.w=ue(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},da=class extends Jn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new pn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Os(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},An=class extends da{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Tr=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var pa=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var oe=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,p,M,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,p,M,x)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,p,M,x){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=M,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/gs.setFromMatrixColumn(t,0).length(),r=1/gs.setFromMatrixColumn(t,1).length(),o=1/gs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,p=a*h,M=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-M*c,e[9]=-a*l,e[2]=M-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,M=c*u;e[0]=f+M*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=M+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,M=c*u;e[0]=f-M*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=M-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,p=a*h,M=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+M,e[1]=l*u,e[5]=M*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,M=a*c;e[0]=l*h,e[4]=M-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-M*u}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,M=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+M,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=M*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(up,t,fp)}lookAt(t,e,n){let s=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Ri.crossVectors(n,Tn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Ri.crossVectors(n,Tn)),Ri.normalize(),wo.crossVectors(Tn,Ri),s[0]=Ri.x,s[4]=wo.x,s[8]=Tn.x,s[1]=Ri.y,s[5]=wo.y,s[9]=Tn.y,s[2]=Ri.z,s[6]=wo.z,s[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],M=n[6],x=n[10],g=n[14],S=n[3],y=n[7],_=n[11],b=n[15],E=s[0],m=s[4],v=s[8],R=s[12],A=s[1],I=s[5],L=s[9],B=s[13],P=s[2],z=s[6],W=s[10],q=s[14],ft=s[3],J=s[7],st=s[11],rt=s[15];return r[0]=o*E+a*A+l*P+c*ft,r[4]=o*m+a*I+l*z+c*J,r[8]=o*v+a*L+l*W+c*st,r[12]=o*R+a*B+l*q+c*rt,r[1]=h*E+u*A+f*P+d*ft,r[5]=h*m+u*I+f*z+d*J,r[9]=h*v+u*L+f*W+d*st,r[13]=h*R+u*B+f*q+d*rt,r[2]=p*E+M*A+x*P+g*ft,r[6]=p*m+M*I+x*z+g*J,r[10]=p*v+M*L+x*W+g*st,r[14]=p*R+M*B+x*q+g*rt,r[3]=S*E+y*A+_*P+b*ft,r[7]=S*m+y*I+_*z+b*J,r[11]=S*v+y*L+_*W+b*st,r[15]=S*R+y*B+_*q+b*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],M=t[7],x=t[11],g=t[15],S=l*d-c*f,y=a*d-c*u,_=a*f-l*u,b=o*d-c*h,E=o*f-l*h,m=o*u-a*h;return e*(M*S-x*y+g*_)-n*(p*S-x*b+g*E)+s*(p*y-M*b+g*m)-r*(p*_-M*E+x*m)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],M=t[13],x=t[14],g=t[15],S=e*a-n*o,y=e*l-s*o,_=e*c-r*o,b=n*l-s*a,E=n*c-r*a,m=s*c-r*l,v=h*M-u*p,R=h*x-f*p,A=h*g-d*p,I=u*x-f*M,L=u*g-d*M,B=f*g-d*x,P=S*B-y*L+_*I+b*A-E*R+m*v;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/P;return t[0]=(a*B-l*L+c*I)*z,t[1]=(s*L-n*B-r*I)*z,t[2]=(M*m-x*E+g*b)*z,t[3]=(f*E-u*m-d*b)*z,t[4]=(l*A-o*B-c*R)*z,t[5]=(e*B-s*A+r*R)*z,t[6]=(x*_-p*m-g*y)*z,t[7]=(h*m-f*_+d*y)*z,t[8]=(o*L-a*A+c*v)*z,t[9]=(n*A-e*L-r*v)*z,t[10]=(p*E-M*_+g*S)*z,t[11]=(u*_-h*E-d*S)*z,t[12]=(a*R-o*I-l*v)*z,t[13]=(e*I-n*R+s*v)*z,t[14]=(M*y-p*b-x*S)*z,t[15]=(h*b-u*y+f*S)*z,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,M=o*h,x=o*u,g=a*u,S=l*c,y=l*h,_=l*u,b=n.x,E=n.y,m=n.z;return s[0]=(1-(M+g))*b,s[1]=(d+_)*b,s[2]=(p-y)*b,s[3]=0,s[4]=(d-_)*E,s[5]=(1-(f+g))*E,s[6]=(x+S)*E,s[7]=0,s[8]=(p+y)*m,s[9]=(x-S)*m,s[10]=(1-(f+M))*m,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=gs.set(s[0],s[1],s[2]).length(),a=gs.set(s[4],s[5],s[6]).length(),l=gs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Bn.copy(this);let c=1/o,h=1/a,u=1/l;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,e.setFromRotationMatrix(Bn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Dn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),p,M;if(l)p=r/(o-r),M=o*r/(o-r);else if(a===Dn)p=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===Us)p=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Dn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),p,M;if(l)p=1/(o-r),M=o/(o-r);else if(a===Dn)p=-2/(o-r),M=-(o+r)/(o-r);else if(a===Us)p=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},gs=new N,Bn=new oe,up=new N(0,0,0),fp=new N(1,1,1),Ri=new N,wo=new N,Tn=new N,pu=new oe,mu=new je,fi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ue(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mu.setFromEuler(this),this.setFromQuaternion(mu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fi.DEFAULT_ORDER="XYZ";var wr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},dp=0,gu=new N,xs=new je,si=new oe,Ao=new N,or=new N,pp=new N,mp=new je,xu=new N(1,0,0),_u=new N(0,1,0),vu=new N(0,0,1),yu={type:"added"},gp={type:"removed"},_s={type:"childadded",child:null},ac={type:"childremoved",child:null},Qe=class i extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new fi,n=new je,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new ne}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis(xu,t)}rotateY(t){return this.rotateOnAxis(_u,t)}rotateZ(t){return this.rotateOnAxis(vu,t)}translateOnAxis(t,e){return gu.copy(t).applyQuaternion(this.quaternion),this.position.add(gu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xu,t)}translateY(t){return this.translateOnAxis(_u,t)}translateZ(t){return this.translateOnAxis(vu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ao.copy(t):Ao.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(or,Ao,this.up):si.lookAt(Ao,or,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(si),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yu),_s.child=t,this.dispatchEvent(_s),_s.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gp),ac.child=t,this.dispatchEvent(ac),ac.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yu),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,t,pp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,mp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Qe.DEFAULT_UP=new N(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ve=class extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},xp={type:"move"},Bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let M of t.hand.values()){let x=e.getJointPose(M,n),g=this._getHandJoint(c,M);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function lc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var re=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=me.workingColorSpace){if(t=ap(t,1),e=ue(e,0,1),n=ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=lc(o,r,t+1/3),this.g=lc(o,r,t),this.b=lc(o,r,t-1/3)}return me.colorSpaceToWorking(this,s),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){let n=Df[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return me.workingToColorSpace(an.copy(this),t),Math.round(ue(an.r*255,0,255))*65536+Math.round(ue(an.g*255,0,255))*256+Math.round(ue(an.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.workingToColorSpace(an.copy(this),e);let n=an.r,s=an.g,r=an.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.workingToColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=Ne){me.workingToColorSpace(an.copy(this),t);let e=an.r,n=an.g,s=an.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ci),this.setHSL(Ci.h+t,Ci.s+e,Ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ci),t.getHSL(Ro);let n=nc(Ci.h,Ro.h,e),s=nc(Ci.s,Ro.s,e),r=nc(Ci.l,Ro.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new re;re.NAMES=Df;var Ar=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new re(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Rr=class extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},zn=new N,ri=new N,cc=new N,oi=new N,vs=new N,ys=new N,Mu=new N,hc=new N,uc=new N,fc=new N,dc=new Ue,pc=new Ue,mc=new Ue,ci=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),zn.subVectors(t,e),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){zn.subVectors(s,e),ri.subVectors(n,e),cc.subVectors(t,e);let o=zn.dot(zn),a=zn.dot(ri),l=zn.dot(cc),c=ri.dot(ri),h=ri.dot(cc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return dc.setScalar(0),pc.setScalar(0),mc.setScalar(0),dc.fromBufferAttribute(t,e),pc.fromBufferAttribute(t,n),mc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(dc,r.x),o.addScaledVector(pc,r.y),o.addScaledVector(mc,r.z),o}static isFrontFacing(t,e,n,s){return zn.subVectors(n,e),ri.subVectors(t,e),zn.cross(ri).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),zn.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;vs.subVectors(s,n),ys.subVectors(r,n),hc.subVectors(t,n);let l=vs.dot(hc),c=ys.dot(hc);if(l<=0&&c<=0)return e.copy(n);uc.subVectors(t,s);let h=vs.dot(uc),u=ys.dot(uc);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(vs,o);fc.subVectors(t,r);let d=vs.dot(fc),p=ys.dot(fc);if(p>=0&&d<=p)return e.copy(r);let M=d*c-l*p;if(M<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(ys,a);let x=h*p-d*u;if(x<=0&&u-h>=0&&d-p>=0)return Mu.subVectors(r,s),a=(u-h)/(u-h+(d-p)),e.copy(s).addScaledVector(Mu,a);let g=1/(x+M+f);return o=M*g,a=f*g,e.copy(n).addScaledVector(vs,o).addScaledVector(ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$n=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Co.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Co.copy(n.boundingBox)),Co.applyMatrix4(t.matrixWorld),this.union(Co)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ar),Io.subVectors(this.max,ar),Ms.subVectors(t.a,ar),Ss.subVectors(t.b,ar),Es.subVectors(t.c,ar),Ii.subVectors(Ss,Ms),Pi.subVectors(Es,Ss),$i.subVectors(Ms,Es);let e=[0,-Ii.z,Ii.y,0,-Pi.z,Pi.y,0,-$i.z,$i.y,Ii.z,0,-Ii.x,Pi.z,0,-Pi.x,$i.z,0,-$i.x,-Ii.y,Ii.x,0,-Pi.y,Pi.x,0,-$i.y,$i.x,0];return!gc(e,Ms,Ss,Es,Io)||(e=[1,0,0,0,1,0,0,0,1],!gc(e,Ms,Ss,Es,Io))?!1:(Po.crossVectors(Ii,Pi),e=[Po.x,Po.y,Po.z],gc(e,Ms,Ss,Es,Io))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ai=[new N,new N,new N,new N,new N,new N,new N,new N],Hn=new N,Co=new $n,Ms=new N,Ss=new N,Es=new N,Ii=new N,Pi=new N,$i=new N,ar=new N,Io=new N,Po=new N,Ki=new N;function gc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ki.fromArray(i,r);let a=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=t.dot(Ki),c=e.dot(Ki),h=n.dot(Ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ke=new N,Lo=new mt,_p=0,en=class extends Jn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_p++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ah,this.updateRanges=[],this.gpuType=Un,this.version=0,this._normalizationScale=t!==void 0?Cl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lo.fromBufferAttribute(this,e),Lo.applyMatrix3(t),this.setXY(e,Lo.x,Lo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Pf(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Lf(t,this.array)}};var Cr=class extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ir=class extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var he=class extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}},vp=new $n,lr=new N,xc=new N,di=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):vp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;lr.subVectors(t,this.center);let e=lr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(lr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(lr.copy(t.center).add(xc)),this.expandByPoint(lr.copy(t.center).sub(xc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},yp=0,Ln=new oe,_c=new Qe,bs=new N,wn=new $n,cr=new $n,$e=new N,Ie=class i extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rp(t)?Ir:Cr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,n){return Ln.makeTranslation(t,e,n),this.applyMatrix4(Ln),this}scale(t,e,n){return Ln.makeScale(t,e,n),this.applyMatrix4(Ln),this}lookAt(t){return _c.lookAt(t),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new he(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];cr.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(wn.min,cr.min),wn.expandByPoint($e),$e.addVectors(wn.max,cr.max),wn.expandByPoint($e)):(wn.expandByPoint(cr.min),wn.expandByPoint(cr.max))}wn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)$e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared($e));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)$e.fromBufferAttribute(a,c),l&&(bs.fromBufferAttribute(t,c),$e.add(bs)),s=Math.max(s,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new en(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)a[R]=new N,l[R]=new N;let h=new N,u=new N,f=new N,d=new mt,p=new mt,M=new mt,x=new N,g=new N;function S(R,A,I){c[R]=c[A]=c[I]=1,h.fromBufferAttribute(n,R),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,I),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,A),M.fromBufferAttribute(r,I),u.sub(h),f.sub(h),p.sub(d),M.sub(d);let L=1/(p.x*M.y-M.x*p.y);isFinite(L)&&(x.copy(u).multiplyScalar(M.y).addScaledVector(f,-p.y).multiplyScalar(L),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-M.x).multiplyScalar(L),a[R].add(x),a[A].add(x),a[I].add(x),l[R].add(g),l[A].add(g),l[I].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,A=y.length;R<A;++R){let I=y[R],L=I.start,B=I.count;for(let P=L,z=L+B;P<z;P+=3)S(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let _=new N,b=new N,E=new N,m=new N;function v(R){E.fromBufferAttribute(s,R),m.copy(E);let A=a[R];_.copy(A),_.sub(E.multiplyScalar(E.dot(A))).normalize(),b.crossVectors(m,A);let L=b.dot(l[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,L)}for(let R=0,A=n.count;R<A;++R)c[R]&&v(R);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),M=t.getX(f+1),x=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,x),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,x),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let M=0,x=l.length;M<x;M++){a.isInterleavedBufferAttribute?d=l[M]*a.data.stride+a.offset:d=l[M]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new en(f,h,u)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ah,this.updateRanges=[],this.version=0,this.uuid=Gi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Su(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Su(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Su(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Gi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var un=new N,zs=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?Cl(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){br("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new en(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){br("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Pf(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Lf(t,this.data.array)}},vc=new N,Mp=new N,Sp=new ne,Gn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=vc.subVectors(n,e).cross(Mp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(vc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Sp.getNormalMatrix(t),s=this.coplanarPoint(vc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Ep=0,Kn=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=Js,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kc,this.blendDst=Vc,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ea,this.stencilZFail=ea,this.stencilZPass=ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new re().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Gn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new mt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new mt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},pi=class extends Kn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ts,hr=new N,ws=new N,As=new N,Rs=new mt,ur=new mt,Nf=new oe,Do=new N,fr=new N,No=new N,Eu=new mt,yc=new mt,bu=new mt,Ni=class extends Qe{constructor(t=new pi){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new Ie;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Pr(e,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new zs(n,3,0,!1)),Ts.setAttribute("uv",new zs(n,2,3,!1))}this.geometry=Ts,this.material=t,this.center=new mt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ee('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ws.setFromMatrixScale(this.matrixWorld),Nf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ws.multiplyScalar(-As.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Uo(Do.set(-.5,-.5,0),As,o,ws,s,r),Uo(fr.set(.5,-.5,0),As,o,ws,s,r),Uo(No.set(.5,.5,0),As,o,ws,s,r),Eu.set(0,0),yc.set(1,0),bu.set(1,1);let a=t.ray.intersectTriangle(Do,fr,No,!1,hr);if(a===null&&(Uo(fr.set(-.5,.5,0),As,o,ws,s,r),yc.set(0,1),a=t.ray.intersectTriangle(Do,No,fr,!1,hr),a===null))return;let l=t.ray.origin.distanceTo(hr);l<t.near||l>t.far||e.push({distance:l,point:hr.clone(),uv:ci.getInterpolation(hr,Do,fr,No,Eu,yc,bu,new mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Uo(i,t,e,n,s,r){Rs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ur.x=r*Rs.x-s*Rs.y,ur.y=s*Rs.x+r*Rs.y):ur.copy(Rs),i.copy(t),i.x+=ur.x,i.y+=ur.y,i.applyMatrix4(Nf)}var li=new N,Mc=new N,Fo=new N,Oo=new N,Lr=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(li.copy(this.origin).addScaledVector(this.direction,e),li.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Mc.copy(t).add(e).multiplyScalar(.5),Fo.copy(e).sub(t).normalize(),Oo.copy(this.origin).sub(Mc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Fo),a=Oo.dot(this.direction),l=-Oo.dot(Fo),c=Oo.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let M=1/h;u*=M,f*=M,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Mc).addScaledVector(Fo,f),d}intersectSphere(t,e){if(t.radius<0)return null;li.subVectors(t.center,this.origin);let n=li.dot(this.direction),s=li.dot(li)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,li)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,M=e.y-o.y,x=e.z-o.z,g=n.x-o.x,S=n.y-o.y,y=n.z-o.z,_=Math.abs(l),b=Math.abs(c),E=Math.abs(h),m,v,R,A,I,L,B,P,z,W,q,ft;if(_>=b&&_>=E?(R=l,L=u,z=p,ft=g,l>=0?(m=c,v=h,A=f,I=d,B=M,P=x,W=S,q=y):(m=h,v=c,A=d,I=f,B=x,P=M,W=y,q=S)):b>=E?(R=c,L=f,z=M,ft=S,c>=0?(m=h,v=l,A=d,I=u,B=x,P=p,W=y,q=g):(m=l,v=h,A=u,I=d,B=p,P=x,W=g,q=y)):(R=h,L=d,z=x,ft=y,h>=0?(m=l,v=c,A=u,I=f,B=p,P=M,W=g,q=S):(m=c,v=l,A=f,I=u,B=M,P=p,W=S,q=g)),R===0)return null;let J=m/R,st=v/R,rt=1/R,Ot=A-J*L,Jt=I-st*L,tt=B-J*z,Mt=P-st*z,Bt=W-J*ft,Zt=q-st*ft,It=Bt*Mt-Zt*tt,H=Ot*Zt-Jt*Bt,ht=tt*Jt-Mt*Ot;if(s){if(It<0||H<0||ht<0)return null}else if((It<0||H<0||ht<0)&&(It>0||H>0||ht>0))return null;let Z=It+H+ht;if(Z===0)return null;let lt=rt*(It*L+H*z+ht*ft);return(Z>0?lt<0:lt>0)?null:this.at(lt/Z,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class extends Kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Tu=new oe,ji=new Lr,Bo=new di,wu=new N,zo=new N,Ho=new N,Go=new N,Sc=new N,ko=new N,Au=new N,Vo=new N,ot=class extends Qe{constructor(t=new Ie,e=new xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ko.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Sc.fromBufferAttribute(u,t),o?ko.addScaledVector(Sc,h):ko.addScaledVector(Sc.sub(e),h))}e.add(ko)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(r),ji.copy(t.ray).recast(t.near),!(Bo.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Bo,wu)===null||ji.origin.distanceToSquared(wu)>(t.far-t.near)**2))&&(Tu.copy(r).invert(),ji.copy(t.ray).applyMatrix4(Tu),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ji)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,M=f.length;p<M;p++){let x=f[p],g=o[x.materialIndex],S=Math.max(x.start,d.start),y=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let _=S,b=y;_<b;_+=3){let E=a.getX(_),m=a.getX(_+1),v=a.getX(_+2);s=Wo(this,g,t,n,c,h,u,E,m,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),M=Math.min(a.count,d.start+d.count);for(let x=p,g=M;x<g;x+=3){let S=a.getX(x),y=a.getX(x+1),_=a.getX(x+2);s=Wo(this,o,t,n,c,h,u,S,y,_),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,M=f.length;p<M;p++){let x=f[p],g=o[x.materialIndex],S=Math.max(x.start,d.start),y=Math.min(l.count,Math.min(x.start+x.count,d.start+d.count));for(let _=S,b=y;_<b;_+=3){let E=_,m=_+1,v=_+2;s=Wo(this,g,t,n,c,h,u,E,m,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let x=p,g=M;x<g;x+=3){let S=x,y=x+1,_=x+2;s=Wo(this,o,t,n,c,h,u,S,y,_),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function bp(i,t,e,n,s,r,o,a){let l;if(t.side===mn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===zi,a),l===null)return null;Vo.copy(a),Vo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Vo);return c<e.near||c>e.far?null:{distance:c,point:Vo.clone(),object:i}}function Wo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,zo),i.getVertexPosition(l,Ho),i.getVertexPosition(c,Go);let h=bp(i,t,e,n,zo,Ho,Go,Au);if(h){let u=new N;ci.getBarycoord(Au,zo,Ho,Go,u),s&&(h.uv=ci.getInterpolatedAttribute(s,a,l,c,u,new mt)),r&&(h.uv1=ci.getInterpolatedAttribute(r,a,l,c,u,new mt)),o&&(h.normal=ci.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new N,materialIndex:0};ci.getNormal(zo,Ho,Go,f.normal),h.face=f,h.barycoord=u}return h}var Dr=class extends pn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ke,h=Ke,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hs=class extends en{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Cs=new oe,Ru=new oe,Xo=[],Cu=new $n,Tp=new oe,dr=new ot,pr=new di,ze=class extends ot{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Hs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Tp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $n),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),Cu.copy(t.boundingBox).applyMatrix4(Cs),this.boundingBox.union(Cu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),pr.copy(t.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(pr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(n),t.ray.intersectsSphere(pr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cs),Ru.multiplyMatrices(n,Cs),dr.matrixWorld=Ru,dr.raycast(t,Xo);for(let o=0,a=Xo.length;o<a;o++){let l=Xo[o];l.instanceId=r,l.object=this,e.push(l)}Xo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Hs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Dr(new Float32Array(s*this.count),s,this.count,Za,Un));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Qi=new di,wp=new mt(.5,.5),qo=new N,Ui=class{constructor(t=new Gn,e=new Gn,n=new Gn,s=new Gn,r=new Gn,o=new Gn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],M=r[9],x=r[10],g=r[11],S=r[12],y=r[13],_=r[14],b=r[15];if(s[0].setComponents(c-o,d-h,g-p,b-S).normalize(),s[1].setComponents(c+o,d+h,g+p,b+S).normalize(),s[2].setComponents(c+a,d+u,g+M,b+y).normalize(),s[3].setComponents(c-a,d-u,g-M,b-y).normalize(),n)s[4].setComponents(l,f,x,_).normalize(),s[5].setComponents(c-l,d-f,g-x,b-_).normalize();else if(s[4].setComponents(c-l,d-f,g-x,b-_).normalize(),e===Dn)s[5].setComponents(c+l,d+f,g+x,b+_).normalize();else if(e===Us)s[5].setComponents(l,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(t){Qi.center.set(0,0,0);let e=wp.distanceTo(t.center);return Qi.radius=.7071067811865476+e,Qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(qo.x=s.normal.x>0?t.max.x:t.min.x,qo.y=s.normal.y>0?t.max.y:t.min.y,qo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Iu=new oe,ma=class i{constructor(){this.coordinateSystem=Dn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Iu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ui),n[s].setFromProjectionMatrix(Iu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ui),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var es=class extends Kn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ga=new N,xa=new N,Pu=new oe,mr=new Lr,Yo=new di,Ec=new N,Lu=new N,Gs=class extends Qe{constructor(t=new Ie,e=new es){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ga.fromBufferAttribute(e,s-1),xa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ga.distanceTo(xa);t.setAttribute("lineDistance",new he(n,1))}else jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(s),Yo.radius+=r,t.ray.intersectsSphere(Yo)===!1)return;Pu.copy(s).invert(),mr.copy(t.ray).applyMatrix4(Pu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let M=d,x=p-1;M<x;M+=c){let g=h.getX(M),S=h.getX(M+1),y=Zo(this,t,mr,l,g,S,M);y&&e.push(y)}if(this.isLineLoop){let M=h.getX(p-1),x=h.getX(d),g=Zo(this,t,mr,l,M,x,p-1);g&&e.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let M=d,x=p-1;M<x;M+=c){let g=Zo(this,t,mr,l,M,M+1,M);g&&e.push(g)}if(this.isLineLoop){let M=Zo(this,t,mr,l,p-1,d,p-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Zo(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(ga.fromBufferAttribute(a,s),xa.fromBufferAttribute(a,r),e.distanceSqToSegment(ga,xa,Ec,Lu)>n)return;Ec.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ec);if(!(c<t.near||c>t.far))return{distance:c,point:Lu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Du=new N,Nu=new N,Nr=class extends Gs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Du.fromBufferAttribute(e,s),Nu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Du.distanceTo(Nu);t.setAttribute("lineDistance",new he(n,1))}else jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ur=class extends pn{constructor(t=[],e=os,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},yn=class extends pn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var mi=class extends pn{constructor(t,e,n=kn,s,r,o,a=Ke,l=Ke,c,h=ui,u=1){if(h!==ui&&h!==_i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Os(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Fr=class extends mi{constructor(t,e=kn,n=os,s,r,o=Ke,a=Ke,l,c=ui){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Or=class extends pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Xt=class i extends Ie{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(u,2));function p(M,x,g,S,y,_,b,E,m,v,R){let A=_/m,I=b/v,L=_/2,B=b/2,P=E/2,z=m+1,W=v+1,q=0,ft=0,J=new N;for(let st=0;st<W;st++){let rt=st*I-B;for(let Ot=0;Ot<z;Ot++){let Jt=Ot*A-L;J[M]=Jt*S,J[x]=rt*y,J[g]=P,c.push(J.x,J.y,J.z),J[M]=0,J[x]=0,J[g]=E>0?1:-1,h.push(J.x,J.y,J.z),u.push(Ot/m),u.push(1-st/v),q+=1}}for(let st=0;st<v;st++)for(let rt=0;rt<m;rt++){let Ot=f+rt+z*st,Jt=f+rt+z*(st+1),tt=f+(rt+1)+z*(st+1),Mt=f+(rt+1)+z*st;l.push(Ot,Jt,Mt),l.push(Jt,tt,Mt),ft+=6}a.addGroup(d,ft,R),d+=ft,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ks=class i extends Ie{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new N,h=new mt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(a,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ge=class i extends Ie{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,M=[],x=n/2,g=0;S(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new he(u,3)),this.setAttribute("normal",new he(f,3)),this.setAttribute("uv",new he(d,2));function S(){let _=new N,b=new N,E=0,m=(e-t)/n;for(let v=0;v<=r;v++){let R=[],A=v/r,I=A*(e-t)+t;for(let L=0;L<=s;L++){let B=L/s,P=B*l+a,z=Math.sin(P),W=Math.cos(P);b.x=I*z,b.y=-A*n+x,b.z=I*W,u.push(b.x,b.y,b.z),_.set(z,m,W).normalize(),f.push(_.x,_.y,_.z),d.push(B,1-A),R.push(p++)}M.push(R)}for(let v=0;v<s;v++)for(let R=0;R<r;R++){let A=M[R][v],I=M[R+1][v],L=M[R+1][v+1],B=M[R][v+1];(t>0||R!==0)&&(h.push(A,I,B),E+=3),(e>0||R!==r-1)&&(h.push(I,L,B),E+=3)}c.addGroup(g,E,0),g+=E}function y(_){let b=p,E=new mt,m=new N,v=0,R=_===!0?t:e,A=_===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,x*A,0),f.push(0,A,0),d.push(.5,.5),p++;let I=p;for(let L=0;L<=s;L++){let P=L/s*l+a,z=Math.cos(P),W=Math.sin(P);m.x=R*W,m.y=x*A,m.z=R*z,u.push(m.x,m.y,m.z),f.push(0,A,0),E.x=z*.5+.5,E.y=W*.5*A+.5,d.push(E.x,E.y),p++}for(let L=0;L<s;L++){let B=b+L,P=I+L;_===!0?h.push(P,P+1,B):h.push(P+1,P,B),v+=3}c.addGroup(g,v,_===!0?1:2),g+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Br=class i extends ge{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},_a=class i extends Ie{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(r.slice(),3)),this.setAttribute("uv",new he(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let y=new N,_=new N,b=new N;for(let E=0;E<e.length;E+=3)d(e[E+0],y),d(e[E+1],_),d(e[E+2],b),l(y,_,b,S)}function l(S,y,_,b){let E=b+1,m=[];for(let v=0;v<=E;v++){m[v]=[];let R=S.clone().lerp(_,v/E),A=y.clone().lerp(_,v/E),I=E-v;for(let L=0;L<=I;L++)L===0&&v===E?m[v][L]=R:m[v][L]=R.clone().lerp(A,L/I)}for(let v=0;v<E;v++)for(let R=0;R<2*(E-v)-1;R++){let A=Math.floor(R/2);R%2===0?(f(m[v][A+1]),f(m[v+1][A]),f(m[v][A])):(f(m[v][A+1]),f(m[v+1][A+1]),f(m[v+1][A]))}}function c(S){let y=new N;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(S),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){let S=new N;for(let y=0;y<r.length;y+=3){S.x=r[y+0],S.y=r[y+1],S.z=r[y+2];let _=x(S)/2/Math.PI+.5,b=g(S)/Math.PI+.5;o.push(_,1-b)}p(),u()}function u(){for(let S=0;S<o.length;S+=6){let y=o[S+0],_=o[S+2],b=o[S+4],E=Math.max(y,_,b),m=Math.min(y,_,b);E>.9&&m<.1&&(y<.2&&(o[S+0]+=1),_<.2&&(o[S+2]+=1),b<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,y){let _=S*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function p(){let S=new N,y=new N,_=new N,b=new N,E=new mt,m=new mt,v=new mt;for(let R=0,A=0;R<r.length;R+=9,A+=6){S.set(r[R+0],r[R+1],r[R+2]),y.set(r[R+3],r[R+4],r[R+5]),_.set(r[R+6],r[R+7],r[R+8]),E.set(o[A+0],o[A+1]),m.set(o[A+2],o[A+3]),v.set(o[A+4],o[A+5]),b.copy(S).add(y).add(_).divideScalar(3);let I=x(b);M(E,A+0,S,I),M(m,A+2,y,I),M(v,A+4,_,I)}}function M(S,y,_,b){b<0&&S.x===1&&(o[y]=S.x-1),_.x===0&&_.z===0&&(o[y]=b/2/Math.PI+.5)}function x(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new mt:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new N,s=[],r=[],o=[],a=new N,l=new oe;for(let d=0;d<=t;d++){let p=d/t;s[d]=this.getTangentAt(p,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ue(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ue(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Vs=class extends Rn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new mt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},va=class extends Vs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ch(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Uu=new N,Fu=new N,bc=new ch,Tc=new ch,wc=new ch,ya=class extends Rn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Fu.subVectors(s[0],s[1]).add(s[0]),c=Fu);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Uu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Uu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),M=Math.pow(u.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d);M<1e-4&&(M=1),p<1e-4&&(p=M),x<1e-4&&(x=M),bc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,M,x),Tc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,M,x),wc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,M,x)}else this.curveType==="catmullrom"&&(bc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Tc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),wc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(bc.calc(l),Tc.calc(l),wc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ou(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Ap(i,t){let e=1-i;return e*e*t}function Rp(i,t){return 2*(1-i)*i*t}function Cp(i,t){return i*i*t}function _r(i,t,e,n){return Ap(i,t)+Rp(i,e)+Cp(i,n)}function Ip(i,t){let e=1-i;return e*e*e*t}function Pp(i,t){let e=1-i;return 3*e*e*i*t}function Lp(i,t){return 3*(1-i)*i*i*t}function Dp(i,t){return i*i*i*t}function vr(i,t,e,n,s){return Ip(i,t)+Pp(i,e)+Lp(i,n)+Dp(i,s)}var zr=class extends Rn{constructor(t=new mt,e=new mt,n=new mt,s=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new mt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vr(t,s.x,r.x,o.x,a.x),vr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ma=class extends Rn{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vr(t,s.x,r.x,o.x,a.x),vr(t,s.y,r.y,o.y,a.y),vr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Hr=class extends Rn{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sa=class extends Rn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gr=class extends Rn{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_r(t,s.x,r.x,o.x),_r(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ea=class extends Rn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_r(t,s.x,r.x,o.x),_r(t,s.y,r.y,o.y),_r(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},kr=class extends Rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Ou(a,l.x,c.x,h.x,u.x),Ou(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new mt().fromArray(s))}return this}},Lc=Object.freeze({__proto__:null,ArcCurve:va,CatmullRomCurve3:ya,CubicBezierCurve:zr,CubicBezierCurve3:Ma,EllipseCurve:Vs,LineCurve:Hr,LineCurve3:Sa,QuadraticBezierCurve:Gr,QuadraticBezierCurve3:Ea,SplineCurve:kr}),ba=class extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Lc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Vr=class extends ba{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Hr(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Gr(this.currentPoint.clone(),new mt(t,e),new mt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new zr(this.currentPoint.clone(),new mt(t,e),new mt(n,s),new mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new kr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Vs(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ns=class extends Vr{constructor(t){super(t),this.uuid=Gi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Vr().fromJSON(s))}return this}};function Np(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Uf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=zp(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<s;f+=e){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Wr(r,o,e,a,l,c,0),o}function Uf(i,t,e,n,s){let r;if(s===$p(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Bu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Bu(o/n|0,i[o],i[o+1],r);return r&&Ws(r,r.next)&&(qr(r),r=r.next),r}function is(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ws(e,e.next)||Be(e.prev,e,e.next)===0)){if(qr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Wr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Wp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Fp(i,n,s,r):Up(i)){t.push(l.i,i.i,c.i),qr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Op(is(i),t),Wr(i,t,e,n,s,r,2)):o===2&&Bp(i,t,e,n,s,r):Wr(is(i),t,e,n,s,r,1);break}}}function Up(i){let t=i.prev,e=i,n=i.next;if(Be(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&gr(s,a,r,l,o,c,p.x,p.y)&&Be(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Fp(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Be(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),M=Math.max(a,l,c),x=Math.max(h,u,f),g=Dc(d,p,t,e,n),S=Dc(M,x,t,e,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=g&&_&&_.z<=S;){if(y.x>=d&&y.x<=M&&y.y>=p&&y.y<=x&&y!==s&&y!==o&&gr(a,h,l,u,c,f,y.x,y.y)&&Be(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=M&&_.y>=p&&_.y<=x&&_!==s&&_!==o&&gr(a,h,l,u,c,f,_.x,_.y)&&Be(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=g;){if(y.x>=d&&y.x<=M&&y.y>=p&&y.y<=x&&y!==s&&y!==o&&gr(a,h,l,u,c,f,y.x,y.y)&&Be(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=S;){if(_.x>=d&&_.x<=M&&_.y>=p&&_.y<=x&&_!==s&&_!==o&&gr(a,h,l,u,c,f,_.x,_.y)&&Be(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Op(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ws(n,s)&&Of(n,e,e.next,s)&&Xr(n,s)&&Xr(s,n)&&(t.push(n.i,e.i,s.i),qr(e),qr(e.next),e=i=s),e=e.next}while(e!==i);return is(e)}function Bp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Yp(o,a)){let l=Bf(o,a);o=is(o,o.next),l=is(l,l.next),Wr(o,t,e,n,s,r,0),Wr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function zp(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Uf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(qp(c))}s.sort(Hp);for(let r=0;r<s.length;r++)e=Gp(s[r],e);return e}function Hp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Gp(i,t){let e=kp(i,t);if(!e)return t;let n=Bf(e,i);return is(n,n.next),is(e,e.next)}function kp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Ws(i,e))return e;do{if(Ws(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Ff(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);Xr(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Vp(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Vp(i,t){return Be(i.prev,i,t.prev)<0&&Be(t.next,i,i.next)<0}function Wp(i,t,e,n){let s=i;do s.z===0&&(s.z=Dc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Xp(s)}function Xp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Dc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function qp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ff(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function gr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Ff(i,t,e,n,s,r,o,a)}function Yp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Zp(i,t)&&(Xr(i,t)&&Xr(t,i)&&Jp(i,t)&&(Be(i.prev,i,t.prev)||Be(i,t.prev,t))||Ws(i,t)&&Be(i.prev,i,i.next)>0&&Be(t.prev,t,t.next)>0)}function Be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ws(i,t){return i.x===t.x&&i.y===t.y}function Of(i,t,e,n){let s=$o(Be(i,t,e)),r=$o(Be(i,t,n)),o=$o(Be(e,n,i)),a=$o(Be(e,n,t));return!!(s!==r&&o!==a||s===0&&Jo(i,e,t)||r===0&&Jo(i,n,t)||o===0&&Jo(e,i,n)||a===0&&Jo(e,t,n))}function Jo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function $o(i){return i>0?1:i<0?-1:0}function Zp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Of(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Xr(i,t){return Be(i.prev,i,i.next)<0?Be(i,t,i.next)>=0&&Be(i,i.prev,t)>=0:Be(i,t,i.prev)<0||Be(i,i.next,t)<0}function Jp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Bf(i,t){let e=Nc(i.i,i.x,i.y),n=Nc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Bu(i,t,e,n){let s=Nc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function qr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Nc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function $p(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Uc=class{static triangulate(t,e,n=2){return Np(t,e,n)}},ts=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];zu(t),Hu(n,t);let o=t.length;e.forEach(zu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Hu(n,e[l]);let a=Uc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function zu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Hu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Xs=class i extends Ie{constructor(t=new ns([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new he(s,3)),this.setAttribute("uv",new he(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Kp,y,_=!1,b,E,m,v;if(g){y=g.getSpacedPoints(h),_=!0,f=!1;let O=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(h,O),E=new N,m=new N,v=new N}f||(x=0,d=0,p=0,M=0);let R=a.extractPoints(c),A=R.shape,I=R.holes;if(!ts.isClockWise(A)){A=A.reverse();for(let O=0,G=I.length;O<G;O++){let k=I[O];ts.isClockWise(k)&&(I[O]=k.reverse())}}function B(O){let k=10000000000000001e-36,pt=O[0];for(let at=1;at<=O.length;at++){let Pt=at%O.length,vt=O[Pt],ct=vt.x-pt.x,yt=vt.y-pt.y,wt=ct*ct+yt*yt,D=Math.max(Math.abs(vt.x),Math.abs(vt.y),Math.abs(pt.x),Math.abs(pt.y)),ie=k*D*D;if(wt<=ie){O.splice(Pt,1),at--;continue}pt=vt}}B(A),I.forEach(B);let P=I.length,z=A;for(let O=0;O<P;O++){let G=I[O];A=A.concat(G)}function W(O,G,k){return G||ee("ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(G,k)}let q=A.length;function ft(O,G,k){let pt,at,Pt,vt=O.x-G.x,ct=O.y-G.y,yt=k.x-O.x,wt=k.y-O.y,D=vt*vt+ct*ct,ie=vt*wt-ct*yt;if(Math.abs(ie)>Number.EPSILON){let zt=Math.sqrt(D),Qt=Math.sqrt(yt*yt+wt*wt),ut=G.x-ct/zt,ye=G.y+vt/zt,Vt=k.x-wt/Qt,te=k.y+yt/Qt,C=((Vt-ut)*wt-(te-ye)*yt)/(vt*wt-ct*yt);pt=ut+vt*C-O.x,at=ye+ct*C-O.y;let T=pt*pt+at*at;if(T<=2)return new mt(pt,at);Pt=Math.sqrt(T/2)}else{let zt=!1;vt>Number.EPSILON?yt>Number.EPSILON&&(zt=!0):vt<-Number.EPSILON?yt<-Number.EPSILON&&(zt=!0):Math.sign(ct)===Math.sign(wt)&&(zt=!0),zt?(pt=-ct,at=vt,Pt=Math.sqrt(D)):(pt=vt,at=ct,Pt=Math.sqrt(D/2))}return new mt(pt/Pt,at/Pt)}let J=[];for(let O=0,G=z.length,k=G-1,pt=O+1;O<G;O++,k++,pt++)k===G&&(k=0),pt===G&&(pt=0),J[O]=ft(z[O],z[k],z[pt]);let st=[],rt,Ot=J.concat();for(let O=0,G=P;O<G;O++){let k=I[O];rt=[];for(let pt=0,at=k.length,Pt=at-1,vt=pt+1;pt<at;pt++,Pt++,vt++)Pt===at&&(Pt=0),vt===at&&(vt=0),rt[pt]=ft(k[pt],k[Pt],k[vt]);st.push(rt),Ot=Ot.concat(rt)}let Jt;if(x===0)Jt=ts.triangulateShape(z,I);else{let O=[],G=[];for(let k=0;k<x;k++){let pt=k/x,at=d*Math.cos(pt*Math.PI/2),Pt=p*Math.sin(pt*Math.PI/2)+M;for(let vt=0,ct=z.length;vt<ct;vt++){let yt=W(z[vt],J[vt],Pt);H(yt.x,yt.y,-at),pt===0&&O.push(yt)}for(let vt=0,ct=P;vt<ct;vt++){let yt=I[vt];rt=st[vt];let wt=[];for(let D=0,ie=yt.length;D<ie;D++){let zt=W(yt[D],rt[D],Pt);H(zt.x,zt.y,-at),pt===0&&wt.push(zt)}pt===0&&G.push(wt)}}Jt=ts.triangulateShape(O,G)}let tt=Jt.length,Mt=p+M;for(let O=0;O<q;O++){let G=f?W(A[O],Ot[O],Mt):A[O];_?(m.copy(b.normals[0]).multiplyScalar(G.x),E.copy(b.binormals[0]).multiplyScalar(G.y),v.copy(y[0]).add(m).add(E),H(v.x,v.y,v.z)):H(G.x,G.y,0)}for(let O=1;O<=h;O++)for(let G=0;G<q;G++){let k=f?W(A[G],Ot[G],Mt):A[G];_?(m.copy(b.normals[O]).multiplyScalar(k.x),E.copy(b.binormals[O]).multiplyScalar(k.y),v.copy(y[O]).add(m).add(E),H(v.x,v.y,v.z)):H(k.x,k.y,u/h*O)}for(let O=x-1;O>=0;O--){let G=O/x,k=d*Math.cos(G*Math.PI/2),pt=p*Math.sin(G*Math.PI/2)+M;for(let at=0,Pt=z.length;at<Pt;at++){let vt=W(z[at],J[at],pt);H(vt.x,vt.y,u+k)}for(let at=0,Pt=I.length;at<Pt;at++){let vt=I[at];rt=st[at];for(let ct=0,yt=vt.length;ct<yt;ct++){let wt=W(vt[ct],rt[ct],pt);_?H(wt.x,wt.y+y[h-1].y,y[h-1].x+k):H(wt.x,wt.y,u+k)}}}Bt(),Zt();function Bt(){let O=s.length/3;if(f){let G=0,k=q*G;for(let pt=0;pt<tt;pt++){let at=Jt[pt];ht(at[2]+k,at[1]+k,at[0]+k)}G=h+x*2,k=q*G;for(let pt=0;pt<tt;pt++){let at=Jt[pt];ht(at[0]+k,at[1]+k,at[2]+k)}}else{for(let G=0;G<tt;G++){let k=Jt[G];ht(k[2],k[1],k[0])}for(let G=0;G<tt;G++){let k=Jt[G];ht(k[0]+q*h,k[1]+q*h,k[2]+q*h)}}n.addGroup(O,s.length/3-O,0)}function Zt(){let O=s.length/3,G=0;It(z,G),G+=z.length;for(let k=0,pt=I.length;k<pt;k++){let at=I[k];It(at,G),G+=at.length}n.addGroup(O,s.length/3-O,1)}function It(O,G){let k=O.length;for(;--k>=0;){let pt=k,at=k-1;at<0&&(at=O.length-1);for(let Pt=0,vt=h+x*2;Pt<vt;Pt++){let ct=q*Pt,yt=q*(Pt+1),wt=G+pt+ct,D=G+at+ct,ie=G+at+yt,zt=G+pt+yt;Z(wt,D,ie,zt)}}}function H(O,G,k){l.push(O),l.push(G),l.push(k)}function ht(O,G,k){lt(O),lt(G),lt(k);let pt=s.length/3,at=S.generateTopUV(n,s,pt-3,pt-2,pt-1);j(at[0]),j(at[1]),j(at[2])}function Z(O,G,k,pt){lt(O),lt(G),lt(pt),lt(G),lt(k),lt(pt);let at=s.length/3,Pt=S.generateSideWallUV(n,s,at-6,at-3,at-2,at-1);j(Pt[0]),j(Pt[1]),j(Pt[3]),j(Pt[1]),j(Pt[2]),j(Pt[3])}function lt(O){s.push(l[O*3+0]),s.push(l[O*3+1]),s.push(l[O*3+2])}function j(O){r.push(O.x),r.push(O.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return jp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Lc[s.type]().fromJSON(s)),new i(n,t.options)}},Kp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new mt(r,o),new mt(a,l),new mt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],p=t[s*3+2],M=t[r*3],x=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new mt(o,1-l),new mt(c,1-u),new mt(f,1-p),new mt(M,1-g)]:[new mt(a,1-l),new mt(h,1-u),new mt(d,1-p),new mt(x,1-g)]}};function jp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var qs=class i extends _a{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var De=class i extends Ie{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],M=[],x=[];for(let g=0;g<h;g++){let S=g*f-o;for(let y=0;y<c;y++){let _=y*u-r;p.push(_,-S,0),M.push(0,0,1),x.push(y/a),x.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<a;S++){let y=S+c*g,_=S+c*(g+1),b=S+1+c*(g+1),E=S+1+c*g;d.push(y,_,E),d.push(_,b,E)}this.setIndex(d),this.setAttribute("position",new he(p,3)),this.setAttribute("normal",new he(M,3)),this.setAttribute("uv",new he(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Nn=class i extends Ie{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new N,f=new N,d=[],p=[],M=[],x=[];for(let g=0;g<=n;g++){let S=[],y=g/n,_=o+y*a,b=t*Math.cos(_),E=Math.sqrt(t*t-b*b),m=0;g===0&&o===0?m=.5/e:g===n&&l===Math.PI&&(m=-.5/e);for(let v=0;v<=e;v++){let R=v/e,A=s+R*r;u.x=-E*Math.cos(A),u.y=b,u.z=E*Math.sin(A),p.push(u.x,u.y,u.z),f.copy(u).normalize(),M.push(f.x,f.y,f.z),x.push(R+m,1-y),S.push(c++)}h.push(S)}for(let g=0;g<n;g++)for(let S=0;S<e;S++){let y=h[g][S+1],_=h[g][S],b=h[g+1][S],E=h[g+1][S+1];(g!==0||o>0)&&d.push(y,_,E),(g!==n-1||l<Math.PI)&&d.push(_,b,E)}this.setIndex(d),this.setAttribute("position",new he(p,3)),this.setAttribute("normal",new he(M,3)),this.setAttribute("uv",new he(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Yr=class i extends Ie{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new N,d=new N,p=new N;for(let M=0;M<=n;M++){let x=o+M/n*a;for(let g=0;g<=s;g++){let S=g/s*r;d.x=(t+e*Math.cos(x))*Math.cos(S),d.y=(t+e*Math.cos(x))*Math.sin(S),d.z=e*Math.sin(x),c.push(d.x,d.y,d.z),f.x=t*Math.cos(S),f.y=t*Math.sin(S),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(g/s),u.push(M/n)}}for(let M=1;M<=n;M++)for(let x=1;x<=s;x++){let g=(s+1)*M+x-1,S=(s+1)*(M-1)+x-1,y=(s+1)*(M-1)+x,_=(s+1)*M+x;l.push(g,S,_),l.push(S,y,_)}this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ls(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Gu(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Gu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function ln(i){let t={};for(let e=0;e<i.length;e++){let n=ls(i[e]);for(let s in n)t[s]=n[s]}return t}function Gu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Qp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function hh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var zf={clone:ls,merge:ln},tm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jn=class extends Kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tm,this.fragmentShader=em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=Qp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new re().setHex(s.value);break;case"v2":this.uniforms[n].value=new mt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ue().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ne().fromArray(s.value);break;case"m4":this.uniforms[n].value=new oe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ta=class extends jn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Nt=class extends Kn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Ga,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},wa=class extends Kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_f,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Aa=class extends Kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Is(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ko(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Fi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ra=class extends Fi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cc,endingEnd:Cc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ic:r=t,a=2*e-n;break;case Pc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ic:o=t,l=2*n-e;break;case Pc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(s-e),M=p*p,x=M*p,g=-f*x+2*f*M-f*p,S=(1+f)*x+(-1.5-2*f)*M+(-.5+f)*p+1,y=(-1-d)*x+(1.5+d)*M+.5*p,_=d*x-d*M;for(let b=0;b!==a;++b)r[b]=g*o[h+b]+S*o[c+b]+y*o[l+b]+_*o[u+b];return r}},Ca=class extends Fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Ia=class extends Fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Pa=class extends Fi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(s-e),M=1-p;for(let x=0;x!==a;++x)r[x]=o[c+x]*M+o[l+x]*p;return r}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let M=o[c+p],x=o[l+p],g=d*f+p*2,S=u[g],y=u[g+1],_=t*f+p*2,b=h[_],E=h[_+1],m=im(n,e,S,b,s);r[p]=Hf(m,M,y,E,x)}return r}};function Hf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function nm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function im(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Hf(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=nm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Is(e,this.TimeBufferType),this.values=Is(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Is(t.times,Array),values:Is(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ko(t.settings)&&(n.settings={inTangents:Is(t.settings.inTangents,Array),outTangents:Is(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ia(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ca(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ra(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Pa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case yr:e=this.InterpolantFactoryMethodDiscrete;break;case ha:e=this.InterpolantFactoryMethodLinear;break;case ta:e=this.InterpolantFactoryMethodSmooth;break;case Rc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return ha;case this.InterpolantFactoryMethodSmooth:return ta;case this.InterpolantFactoryMethodBezier:return Rc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Ko(this.settings)&&(ku(this.settings.inTangents,t),ku(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ko(this.settings)&&(Vu(this.settings.inTangents,t),Vu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ee("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ee("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&op(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ee("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ta,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let M=e[u+p];if(M!==e[f+p]||M!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ko(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ku(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Vu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=ha;var Oi=class extends Cn{constructor(t,e,n){super(t,e,n)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=yr;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var La=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};La.prototype.ValueTypeName="color";var Da=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};Da.prototype.ValueTypeName="number";var Na=class extends Fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)je.slerpFlat(r,0,o,c-a,o,c,l);return r}},Zr=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Na(this.times,this.values,this.getValueSize(),t)}};Zr.prototype.ValueTypeName="quaternion";Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends Cn{constructor(t,e,n){super(t,e,n)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=yr;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ua=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};Ua.prototype.ValueTypeName="vector";var Fa=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Gf=new Fa,Oa=class{constructor(t){this.manager=t!==void 0?t:Gf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Oa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jr=class extends Qe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},$r=class extends Jr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ac=new oe,Wu=new N,Xu=new N,Ba=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ui,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Wu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wu),Xu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ac.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ac,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Us||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Ac)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},jo=new N,Qo=new je,Yn=new N,Kr=class extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(jo,Qo,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jo,Qo,Yn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(jo,Qo,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jo,Qo,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Li=new N,qu=new mt,Yu=new mt,fn=class extends Kr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ua*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ec*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ua*2*Math.atan(Math.tan(ec*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,qu,Yu),e.subVectors(Yu,qu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ec*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var jr=class extends Kr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Fc=class extends Ba{constructor(){super(new jr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qr=class extends Jr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new Fc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ps=-90,Ls=1,Ys=class extends Qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new fn(Ps,Ls,t,e);s.layers=this.layers,this.add(s);let r=new fn(Ps,Ls,t,e);r.layers=this.layers,this.add(r);let o=new fn(Ps,Ls,t,e);o.layers=this.layers,this.add(o);let a=new fn(Ps,Ls,t,e);a.layers=this.layers,this.add(a);let l=new fn(Ps,Ls,t,e);l.layers=this.layers,this.add(l);let c=new fn(Ps,Ls,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=M,t.setRenderTarget(n,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},za=class extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var uh="\\[\\]\\.:\\/",sm=new RegExp("["+uh+"]","g"),fh="[^"+uh+"]",rm="[^"+uh.replace("\\.","")+"]",om=/((?:WC+[\/:])*)/.source.replace("WC",fh),am=/(WCOD+)?/.source.replace("WCOD",rm),lm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fh),cm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fh),hm=new RegExp("^"+om+am+lm+cm+"$"),um=["material","materials","bones","map"],Oc=class{constructor(t,e,n){let s=n||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Le=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(sm,"")}static parseTrackName(t){let e=hm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);um.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Le.Composite=Oc;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qv=new Float32Array(1);var Bc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function dh(i,t,e,n){let s=fm(n);switch(e){case nh:return i*t;case Za:return i*t/s.components*s.byteLength;case Ja:return i*t/s.components*s.byteLength;case Hi:return i*t*2/s.components*s.byteLength;case $a:return i*t*2/s.components*s.byteLength;case ih:return i*t*3/s.components*s.byteLength;case Wn:return i*t*4/s.components*s.byteLength;case Ka:return i*t*4/s.components*s.byteLength;case no:case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case so:case ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qa:case el:return Math.max(i,16)*Math.max(t,8)/4;case ja:case tl:return Math.max(i,8)*Math.max(t,8)/2;case nl:case il:case rl:case ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case sl:case oo:case al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case hl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ul:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case fl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case dl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case pl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ml:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case gl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case xl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case _l:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case vl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ml:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Sl:case El:case bl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Tl:case wl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ao:case Al:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fm(i){switch(i){case Mn:case jc:return{byteLength:1,components:1};case Ks:case Qc:case Vn:return{byteLength:2,components:1};case qa:case Ya:return{byteLength:2,components:4};case kn:case Xa:case Un:return{byteLength:4,components:1};case th:case eh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function cd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _m(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],M=u[d];M.start<=p.start+p.count+1?p.count=Math.max(p.count,M.start+M.count-p.start):(++f,u[f]=M)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let M=u[d];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var vm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ym=`#ifdef USE_ALPHAHASH
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
#endif`,Mm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Em=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tm=`#ifdef USE_AOMAP
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
#endif`,wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Am=`#ifdef USE_BATCHING
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
#endif`,Rm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lm=`#ifdef USE_IRIDESCENCE
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
#endif`,Dm=`#ifdef USE_BUMPMAP
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
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,km=`#define PI 3.141592653589793
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
} // validated`,Vm=`vec3 transformedNormal = objectNormal;
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
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ym=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$m=`#ifdef USE_ENVMAP
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
#endif`,Km=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
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
#endif`,Qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
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
#endif`,e0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r0=`#ifdef USE_GRADIENTMAP
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
}`,o0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,h0=`#ifdef USE_ENVMAP
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
#endif`,u0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m0=`PhysicalMaterial material;
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
#endif`,g0=`uniform sampler2D dfgLUT;
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
}`,x0=`
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
#endif`,_0=`#if defined( RE_IndirectDiffuse )
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
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,M0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,T0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,w0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,R0=`#if defined( USE_POINTS_UV )
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
#endif`,C0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L0=`#if defined( USE_MORPHCOLORS )
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
#endif`,D0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N0=`#ifdef USE_MORPHTARGETS
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
#endif`,U0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,O0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,G0=`#ifdef USE_NORMALMAP
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
#endif`,k0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Z0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ig=`float getShadowMask() {
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
}`,sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rg=`#ifdef USE_SKINNING
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
#endif`,og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ag=`#ifdef USE_SKINNING
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
#endif`,lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ug=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fg=`#ifdef USE_TRANSMISSION
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
#endif`,dg=`#ifdef USE_TRANSMISSION
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vg=`uniform sampler2D t2D;
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
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mg=`uniform float backgroundBlurriness;
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`#include <common>
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
}`,Tg=`#if DEPTH_PACKING == 3200
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
}`,wg=`#define DISTANCE
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
}`,Ag=`#define DISTANCE
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`uniform float scale;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Ng=`#define LAMBERT
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
}`,Ug=`#define LAMBERT
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
}`,Fg=`#define MATCAP
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
}`,Og=`#define MATCAP
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
}`,Bg=`#define NORMAL
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
}`,zg=`#define NORMAL
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
}`,Hg=`#define PHONG
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
}`,Gg=`#define PHONG
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
}`,kg=`#define STANDARD
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
}`,Vg=`#define STANDARD
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
}`,Wg=`#define TOON
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
}`,Xg=`#define TOON
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
}`,qg=`uniform float size;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,Zg=`#include <common>
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
}`,Jg=`uniform vec3 color;
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
}`,$g=`uniform float rotation;
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
}`,Kg=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:vm,alphahash_pars_fragment:ym,alphamap_fragment:Mm,alphamap_pars_fragment:Sm,alphatest_fragment:Em,alphatest_pars_fragment:bm,aomap_fragment:Tm,aomap_pars_fragment:wm,batching_pars_vertex:Am,batching_vertex:Rm,begin_vertex:Cm,beginnormal_vertex:Im,bsdfs:Pm,iridescence_fragment:Lm,bumpmap_pars_fragment:Dm,clipping_planes_fragment:Nm,clipping_planes_pars_fragment:Um,clipping_planes_pars_vertex:Fm,clipping_planes_vertex:Om,color_fragment:Bm,color_pars_fragment:zm,color_pars_vertex:Hm,color_vertex:Gm,common:km,defaultnormal_vertex:Vm,displacementmap_pars_vertex:Wm,displacementmap_vertex:Xm,emissivemap_fragment:qm,emissivemap_pars_fragment:Ym,colorspace_fragment:Zm,colorspace_pars_fragment:Jm,envmap_fragment:$m,envmap_common_pars_fragment:Km,envmap_pars_fragment:jm,envmap_pars_vertex:Qm,envmap_physical_pars_fragment:h0,envmap_vertex:t0,fog_vertex:e0,fog_pars_vertex:n0,fog_fragment:i0,fog_pars_fragment:s0,gradientmap_pars_fragment:r0,lightmap_pars_fragment:o0,lights_lambert_fragment:a0,lights_lambert_pars_fragment:l0,lights_pars_begin:c0,lights_toon_fragment:u0,lights_toon_pars_fragment:f0,lights_phong_fragment:d0,lights_phong_pars_fragment:p0,lights_physical_fragment:m0,lights_physical_pars_fragment:g0,lights_fragment_begin:x0,lights_fragment_maps:_0,lights_fragment_end:v0,lightprobes_pars_fragment:y0,logdepthbuf_fragment:M0,logdepthbuf_pars_fragment:S0,logdepthbuf_pars_vertex:E0,logdepthbuf_vertex:b0,map_fragment:T0,map_pars_fragment:w0,map_particle_fragment:A0,map_particle_pars_fragment:R0,metalnessmap_fragment:C0,metalnessmap_pars_fragment:I0,morphinstance_vertex:P0,morphcolor_vertex:L0,morphnormal_vertex:D0,morphtarget_pars_vertex:N0,morphtarget_vertex:U0,normal_fragment_begin:F0,normal_fragment_maps:O0,normal_pars_fragment:B0,normal_pars_vertex:z0,normal_vertex:H0,normalmap_pars_fragment:G0,clearcoat_normal_fragment_begin:k0,clearcoat_normal_fragment_maps:V0,clearcoat_pars_fragment:W0,iridescence_pars_fragment:X0,opaque_fragment:q0,packing:Y0,premultiplied_alpha_fragment:Z0,project_vertex:J0,dithering_fragment:$0,dithering_pars_fragment:K0,roughnessmap_fragment:j0,roughnessmap_pars_fragment:Q0,shadowmap_pars_fragment:tg,shadowmap_pars_vertex:eg,shadowmap_vertex:ng,shadowmask_pars_fragment:ig,skinbase_vertex:sg,skinning_pars_vertex:rg,skinning_vertex:og,skinnormal_vertex:ag,specularmap_fragment:lg,specularmap_pars_fragment:cg,tonemapping_fragment:hg,tonemapping_pars_fragment:ug,transmission_fragment:fg,transmission_pars_fragment:dg,uv_pars_fragment:pg,uv_pars_vertex:mg,uv_vertex:gg,worldpos_vertex:xg,background_vert:_g,background_frag:vg,backgroundCube_vert:yg,backgroundCube_frag:Mg,cube_vert:Sg,cube_frag:Eg,depth_vert:bg,depth_frag:Tg,distance_vert:wg,distance_frag:Ag,equirect_vert:Rg,equirect_frag:Cg,linedashed_vert:Ig,linedashed_frag:Pg,meshbasic_vert:Lg,meshbasic_frag:Dg,meshlambert_vert:Ng,meshlambert_frag:Ug,meshmatcap_vert:Fg,meshmatcap_frag:Og,meshnormal_vert:Bg,meshnormal_frag:zg,meshphong_vert:Hg,meshphong_frag:Gg,meshphysical_vert:kg,meshphysical_frag:Vg,meshtoon_vert:Wg,meshtoon_frag:Xg,points_vert:qg,points_frag:Yg,shadow_vert:Zg,shadow_frag:Jg,sprite_vert:$g,sprite_frag:Kg},Dt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},ei={basic:{uniforms:ln([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:ln([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new re(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:ln([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:ln([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:ln([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new re(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:ln([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:ln([Dt.points,Dt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:ln([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:ln([Dt.common,Dt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:ln([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:ln([Dt.sprite,Dt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:ln([Dt.common,Dt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:ln([Dt.lights,Dt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};ei.physical={uniforms:ln([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var Il={r:0,b:0,g:0},jg=new oe,hd=new ne;hd.set(-1,0,0,0,1,0,0,0,1);function Qg(i,t,e,n,s,r){let o=new re(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(S){let y=S.isScene===!0?S.background:null;if(y&&y.isTexture){let _=S.backgroundBlurriness>0;y=t.get(y,_)}return y}function p(S){let y=!1,_=d(S);_===null?x(o,a):_&&_.isColor&&(x(_,1),y=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(S,y){let _=d(y);_&&_.isCubeTexture?(c===void 0&&(c=new ot(new Xt(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:ls(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jg.makeRotationFromEuler(y.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(hd),c.material.toneMapped=me.getTransfer(_.colorSpace)!==Se,(h!==_||u!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ot(new De(2,2),new jn({name:"BackgroundMaterial",uniforms:ls(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=me.getTransfer(_.colorSpace)!==Se,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function x(S,y){S.getRGB(Il,hh(i)),e.buffers.color.setClear(Il.r,Il.g,Il.b,y,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,y=1){o.set(S),a=y,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,x(o,a)},render:p,addToRenderList:M,dispose:g}}function tx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(I,L,B,P,z){let W=!1,q=u(I,P,B,L);r!==q&&(r=q,c(r.object)),W=d(I,P,B,z),W&&p(I,P,B,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,_(I,L,B,P),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function u(I,L,B,P){let z=P.wireframe===!0,W=n[L.id];W===void 0&&(W={},n[L.id]=W);let q=I.isInstancedMesh===!0?I.id:0,ft=W[q];ft===void 0&&(ft={},W[q]=ft);let J=ft[B.id];J===void 0&&(J={},ft[B.id]=J);let st=J[z];return st===void 0&&(st=f(l()),J[z]=st),st}function f(I){let L=[],B=[],P=[];for(let z=0;z<e;z++)L[z]=0,B[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:P,object:I,attributes:{},index:null}}function d(I,L,B,P){let z=r.attributes,W=L.attributes,q=0,ft=B.getAttributes();for(let J in ft)if(ft[J].location>=0){let rt=z[J],Ot=W[J];if(Ot===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(Ot=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(Ot=I.instanceColor)),rt===void 0||rt.attribute!==Ot||Ot&&rt.data!==Ot.data)return!0;q++}return r.attributesNum!==q||r.index!==P}function p(I,L,B,P){let z={},W=L.attributes,q=0,ft=B.getAttributes();for(let J in ft)if(ft[J].location>=0){let rt=W[J];rt===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(rt=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(rt=I.instanceColor));let Ot={};Ot.attribute=rt,rt&&rt.data&&(Ot.data=rt.data),z[J]=Ot,q++}r.attributes=z,r.attributesNum=q,r.index=P}function M(){let I=r.newAttributes;for(let L=0,B=I.length;L<B;L++)I[L]=0}function x(I){g(I,0)}function g(I,L){let B=r.newAttributes,P=r.enabledAttributes,z=r.attributeDivisors;B[I]=1,P[I]===0&&(i.enableVertexAttribArray(I),P[I]=1),z[I]!==L&&(i.vertexAttribDivisor(I,L),z[I]=L)}function S(){let I=r.newAttributes,L=r.enabledAttributes;for(let B=0,P=L.length;B<P;B++)L[B]!==I[B]&&(i.disableVertexAttribArray(B),L[B]=0)}function y(I,L,B,P,z,W,q){q===!0?i.vertexAttribIPointer(I,L,B,z,W):i.vertexAttribPointer(I,L,B,P,z,W)}function _(I,L,B,P){M();let z=P.attributes,W=B.getAttributes(),q=L.defaultAttributeValues;for(let ft in W){let J=W[ft];if(J.location>=0){let st=z[ft];if(st===void 0&&(ft==="instanceMatrix"&&I.instanceMatrix&&(st=I.instanceMatrix),ft==="instanceColor"&&I.instanceColor&&(st=I.instanceColor)),st!==void 0){let rt=st.normalized,Ot=st.itemSize,Jt=t.get(st);if(Jt===void 0)continue;let tt=Jt.buffer,Mt=Jt.type,Bt=Jt.bytesPerElement,Zt=Mt===i.INT||Mt===i.UNSIGNED_INT||st.gpuType===Xa;if(st.isInterleavedBufferAttribute){let It=st.data,H=It.isInterleavedBuffer===!0?It.stride:It.itemSize,ht=st.offset;if(It.isInstancedInterleavedBuffer||It.isInstancedBufferAttribute){for(let Z=0;Z<J.locationSize;Z++)g(J.location+Z,It.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=It.meshPerAttribute*It.count)}else for(let Z=0;Z<J.locationSize;Z++)x(J.location+Z);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let Z=0;Z<J.locationSize;Z++)y(J.location+Z,Ot/J.locationSize,Mt,rt,H*Bt,(ht+Ot/J.locationSize*Z)*Bt,Zt)}else{if(st.isInstancedBufferAttribute){for(let It=0;It<J.locationSize;It++)g(J.location+It,st.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let It=0;It<J.locationSize;It++)x(J.location+It);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let It=0;It<J.locationSize;It++)y(J.location+It,Ot/J.locationSize,Mt,rt,Ot*Bt,Ot/J.locationSize*It*Bt,Zt)}}else if(q!==void 0){let rt=q[ft];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(J.location,rt);break;case 3:i.vertexAttrib3fv(J.location,rt);break;case 4:i.vertexAttrib4fv(J.location,rt);break;default:i.vertexAttrib1fv(J.location,rt)}}}}S()}function b(){R();for(let I in n){let L=n[I];for(let B in L){let P=L[B];for(let z in P){let W=P[z];for(let q in W)h(W[q].object),delete W[q];delete P[z]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;let L=n[I.id];for(let B in L){let P=L[B];for(let z in P){let W=P[z];for(let q in W)h(W[q].object),delete W[q];delete P[z]}}delete n[I.id]}function m(I){for(let L in n){let B=n[L];for(let P in B){let z=B[P];if(z[I.id]===void 0)continue;let W=z[I.id];for(let q in W)h(W[q].object),delete W[q];delete z[I.id]}}}function v(I){for(let L in n){let B=n[L],P=I.isInstancedMesh===!0?I.id:0,z=B[P];if(z!==void 0){for(let W in z){let q=z[W];for(let ft in q)h(q[ft].object),delete q[ft];delete z[W]}delete B[P],Object.keys(B).length===0&&delete n[L]}}}function R(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:m,initAttributes:M,enableAttribute:x,disableUnusedAttributes:S}}function ex(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function nx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let m=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(m){return!(m!==Wn&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(m){let v=m===Vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(m!==Mn&&m!==Un&&!v&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(m){if(m==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";m="mediump"}return m==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&jt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:M,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:_,maxSamples:b,samples:E}}function ix(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Gn,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,M=u.clipIntersection,x=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!x)r?h(null):c();else{let S=r?0:n,y=S*4,_=g.clippingState||null;l.value=_,_=h(p,f,y,d);for(let b=0;b!==y;++b)_[b]=e[b];g.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let M=u!==null?u.length:0,x=null;if(M!==0){if(x=l.value,p!==!0||x===null){let g=d+M*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(x===null||x.length<g)&&(x=new Float32Array(g));for(let y=0,_=d;y!==M;++y,_+=4)o.copy(u[y]).applyMatrix4(S,a),o.normal.toArray(x,_),x[_+3]=o.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,x}}var ho=class extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ur(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xt(5,5,5),r=new jn({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:ss});r.uniforms.tEquirect.value=e;let o=new ot(s,r),a=e.minFilter;return e.minFilter===xi&&(e.minFilter=dn),new Ys(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},kf=256,sx=3,rx=20,ud=256,fd=16,ox=3,ax=new N,lx=new re,Ll=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ys(1,10,null),this._boxMesh=new ot(new Xt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=ax}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,M=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(t.background=l.getClearColor(lx));let x=new Ys(n,s,h);return x.position.copy(a),x.update(l,t),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=p,t.background=M,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(kf,If(t))}_fromTexture(t,e){t.mapping===os||t.mapping===$s?this._setSize(t.image.length===0?kf:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Vf(t,!1,!1),n=Math.log2(t)-sx;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Vf(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===os||t.mapping===$s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xf()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Wf()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=cx(),this._integrationMaterial=hx());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/fd);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-ox)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(ud*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=ux());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Vf(i,t,e){return new ho(i,{minFilter:xi,generateMipmaps:t,type:Vn,colorSpace:Mr,depthBuffer:e})}function uo(i,t,e){return new jn({name:i,uniforms:t,vertexShader:ce.cube_vert,fragmentShader:e,side:mn,blending:ss,depthTest:!1,depthWrite:!1})}function cx(){return uo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ud}u

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
	`)}function hx(){return uo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:fd}},`

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
	`)}function ux(){return uo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${rx}
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
	`)}function Wf(){return uo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Xf(){return uo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function fx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===ka||d===Va)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let M=new ho(p.height);return M.fromEquirectangularTexture(i,f),t.set(f,M),f.addEventListener("dispose",c),a(M.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===ka||d===Va,M=d===os||d===$s;if(p||M){let x=e.get(f),g=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Ll(i)),x=p?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{let S=f.image;return p&&S&&S.height>0||M&&S&&l(S)?(n===null&&(n=new Ll(i)),x=p?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",h),x.texture):null}}}return f}function a(f,d){return d===ka?f.mapping=os:d===Va&&(f.mapping=$s),f}function l(f){let d=0,p=6;for(let M=0;M<p;M++)f[M]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function dx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&xr("WebGLRenderer: "+n+" extension not supported."),s}}}function px(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let x in p.attributes)t.remove(p.attributes[x]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let M=r.get(p);M&&(t.remove(M),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,M){return s[M.id]!==void 0||(M.addEventListener("dispose",a),s[M.id]=new WeakRef(M),o.register(M,M.id,M),e.memory.geometries++),M}function h(p){let M=p.attributes;for(let x in M)t.update(M[x],i.ARRAY_BUFFER)}function u(p){let M=p.index,x=p.attributes.position,g=0;if(x===void 0)return;let S=M!==null?M.array.length:x.array.length/3-1,y=x.count>=65535?Ir:Cr,_=new y(Math.ceil(S/3)*6,1),b=_.array;if(M!==null){let m=M.array;g=M.version;for(let v=0,R=0;v<S;v+=3){let A=m[v+0],I=m[v+1],L=m[v+2];b[R++]=A,b[R++]=I,b[R++]=I,b[R++]=L,b[R++]=L,b[R++]=A}}else{g=x.version;for(let m=0,v=0;m<S;m+=3){let R=m+0,A=m+1,I=m+2;b[v++]=R,b[v++]=A,b[v++]=A,b[v++]=I,b[v++]=I,b[v++]=R}}_.version=g;let E=r.get(p);E&&t.remove(E),r.set(p,_)}function f(p){let M=r.get(p);if(M){let x=p.index;x!==null&&M.version<x.version&&u(p)}else u(p);return r.get(p)}function d(){for(let p in s){let M=s[p].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function mx(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let M=0;for(let x=0;x<d;x++)M+=f[x];e.update(M,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function gx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ee("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function xx(i,t,e){let n=new WeakMap,s=new Ue;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let R=function(){m.dispose(),n.delete(a),a.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],y=0;d===!0&&(y=1),p===!0&&(y=2),M===!0&&(y=3);let _=a.attributes.position.count*y,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let E=new Float32Array(_*b*4*u),m=new Tr(E,_,b,u);m.type=Un,m.needsUpdate=!0;let v=y*4;for(let A=0;A<u;A++){let I=x[A],L=g[A],B=S[A],P=_*b*4*A;for(let z=0;z<I.count;z++){let W=z*v;d===!0&&(s.fromBufferAttribute(I,z),E[P+W+0]=s.x,E[P+W+1]=s.y,E[P+W+2]=s.z,E[P+W+3]=0),p===!0&&(s.fromBufferAttribute(L,z),E[P+W+4]=s.x,E[P+W+5]=s.y,E[P+W+6]=s.z,E[P+W+7]=0),M===!0&&(s.fromBufferAttribute(B,z),E[P+W+8]=s.x,E[P+W+9]=s.y,E[P+W+10]=s.z,E[P+W+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:m,size:new mt(_,b)},n.set(a,f),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function _x(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var vx={[Wc]:"LINEAR_TONE_MAPPING",[Xc]:"REINHARD_TONE_MAPPING",[qc]:"CINEON_TONE_MAPPING",[Yc]:"ACES_FILMIC_TONE_MAPPING",[Jc]:"AGX_TONE_MAPPING",[$c]:"NEUTRAL_TONE_MAPPING",[Zc]:"CUSTOM_TONE_MAPPING"};function yx(i,t,e,n,s,r){let o=new An(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Ie;h.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new he([0,2,0,0,2,0],2));let u=new Ta({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ot(h,u),d=new jr(-1,1,1,-1,0,1),p=null,M=null,x=!1,g,S=null,y=[],_=!1;this.setSize=function(b,E){o.setSize(b,E),a!==null&&a.setSize(b,E),l!==null&&l.setSize(b,E);for(let m=0;m<y.length;m++){let v=y[m];v.setSize&&v.setSize(b,E)}},this.setEffects=function(b){y=b,_=y.length>0&&y[0].isRenderPass===!0;let E=o.width,m=o.height;y.length>0&&a===null&&(a=new An(E,m,{type:Vn,depthBuffer:!1,stencilBuffer:!1}),l=new An(E,m,{type:Vn,depthBuffer:!1,stencilBuffer:!1}));let v=s===!0&&y.some(R=>R.needsDepthTexture===!0);v!==(o.depthTexture!==null)&&(v===!0&&c===null&&(c=new mi(E,m),r===!0&&(c.format=_i,c.type=as)),o.dispose(),o.depthTexture=v?c:null,o.resolveDepthBuffer=v,o.storeMultisampledDepthBuffer=v);for(let R=0;R<y.length;R++){let A=y[R];A.setSize&&A.setSize(E,m),v&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(b,E){if(x||b.toneMapping===Qn&&y.length===0)return!1;if(S=E,E!==null){let m=E.width,v=E.height;(o.width!==m||o.height!==v)&&this.setSize(m,v)}return _===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=Qn,!0},this.hasRenderPass=function(){return _},this.end=function(b,E){b.toneMapping=g,x=!0;let m=o,v=a;for(let R=0;R<y.length;R++){let A=y[R];A.enabled!==!1&&(A.render(b,v,m,E),A.needsSwap!==!1&&(m=v,v=v===a?l:a))}if(p!==b.outputColorSpace||M!==b.toneMapping){p=b.outputColorSpace,M=b.toneMapping,u.defines={},me.getTransfer(p)===Se&&(u.defines.SRGB_TRANSFER="");let R=vx[M];R&&(u.defines[R]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=m.texture,b.setRenderTarget(S),b.render(f,d),S=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var dd=new pn,pd=new mi(1,1),md=new Fr(1),gd=new Tr,xd=new pa,_d=new Ur,qf=[],Yf=[],Zf=new Float32Array(16),Jf=new Float32Array(9),$f=new Float32Array(4);function Qs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=qf[s];if(r===void 0&&(r=new Float32Array(s),qf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function We(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Nl(i,t){let e=Yf[t];e===void 0&&(e=new Int32Array(t),Yf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Mx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2fv(this.addr,t),Xe(e,t)}}function Ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;i.uniform3fv(this.addr,t),Xe(e,t)}}function bx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4fv(this.addr,t),Xe(e,t)}}function Tx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;$f.set(n),i.uniformMatrix2fv(this.addr,!1,$f),Xe(e,n)}}function wx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Jf.set(n),i.uniformMatrix3fv(this.addr,!1,Jf),Xe(e,n)}}function Ax(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Zf.set(n),i.uniformMatrix4fv(this.addr,!1,Zf),Xe(e,n)}}function Rx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2iv(this.addr,t),Xe(e,t)}}function Ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3iv(this.addr,t),Xe(e,t)}}function Px(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4iv(this.addr,t),Xe(e,t)}}function Lx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Dx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2uiv(this.addr,t),Xe(e,t)}}function Nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3uiv(this.addr,t),Xe(e,t)}}function Ux(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4uiv(this.addr,t),Xe(e,t)}}function Ul(i){return i.version===0&&(i.compareFunction=oh,i.needsUpdate=!0),i}function Fx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ul(pd):r=dd,e.setTexture2D(t||r,s)}function Ox(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||xd,s)}function Bx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ul(md):r=_d,e.setTextureCube(t||r,s)}function zx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||gd,s)}function Hx(i){switch(i){case 5126:return Mx;case 35664:return Sx;case 35665:return Ex;case 35666:return bx;case 35674:return Tx;case 35675:return wx;case 35676:return Ax;case 5124:case 35670:return Rx;case 35667:case 35671:return Cx;case 35668:case 35672:return Ix;case 35669:case 35673:return Px;case 5125:return Lx;case 36294:return Dx;case 36295:return Nx;case 36296:return Ux;case 35678:case 36198:case 36298:case 36306:case 35682:return Fx;case 35679:case 36299:case 36307:return Ox;case 35680:case 36300:case 36308:case 36293:return Bx;case 36289:case 36303:case 36311:case 36292:return zx}}function Gx(i,t){i.uniform1fv(this.addr,t)}function kx(i,t){let e=Qs(t,this.size,2);i.uniform2fv(this.addr,e)}function Vx(i,t){let e=Qs(t,this.size,3);i.uniform3fv(this.addr,e)}function Wx(i,t){let e=Qs(t,this.size,4);i.uniform4fv(this.addr,e)}function Xx(i,t){let e=Qs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function qx(i,t){let e=Qs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Yx(i,t){let e=Qs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Zx(i,t){i.uniform1iv(this.addr,t)}function Jx(i,t){i.uniform2iv(this.addr,t)}function $x(i,t){i.uniform3iv(this.addr,t)}function Kx(i,t){i.uniform4iv(this.addr,t)}function jx(i,t){i.uniform1uiv(this.addr,t)}function Qx(i,t){i.uniform2uiv(this.addr,t)}function t_(i,t){i.uniform3uiv(this.addr,t)}function e_(i,t){i.uniform4uiv(this.addr,t)}function n_(i,t,e){let n=this.cache,s=t.length,r=Nl(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ul(pd):o=dd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function i_(i,t,e){let n=this.cache,s=t.length,r=Nl(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||xd,r[o])}function s_(i,t,e){let n=this.cache,s=t.length,r=Nl(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Ul(md):o=_d;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function r_(i,t,e){let n=this.cache,s=t.length,r=Nl(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||gd,r[o])}function o_(i){switch(i){case 5126:return Gx;case 35664:return kx;case 35665:return Vx;case 35666:return Wx;case 35674:return Xx;case 35675:return qx;case 35676:return Yx;case 5124:case 35670:return Zx;case 35667:case 35671:return Jx;case 35668:case 35672:return $x;case 35669:case 35673:return Kx;case 5125:return jx;case 36294:return Qx;case 36295:return t_;case 36296:return e_;case 35678:case 36198:case 36298:case 36306:case 35682:return n_;case 35679:case 36299:case 36307:return i_;case 35680:case 36300:case 36308:case 36293:return s_;case 36289:case 36303:case 36311:case 36292:return r_}}var gh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Hx(e.type)}},xh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=o_(e.type)}},_h=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ph=/(\w+)(\])?(\[|\.)?/g;function Kf(i,t){i.seq.push(t),i.map[t.id]=t}function a_(i,t,e){let n=i.name,s=n.length;for(ph.lastIndex=0;;){let r=ph.exec(n),o=ph.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Kf(e,c===void 0?new gh(a,i,t):new xh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new _h(a),Kf(e,u)),e=u}}}var js=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);a_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function jf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var l_=37297,c_=0;function h_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Qf=new ne;function u_(i){me._getMatrix(Qf,me.workingColorSpace,i);let t=`mat3( ${Qf.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(i)){case Sr:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function td(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+h_(i.getShaderSource(t),a)}else return r}function f_(i,t){let e=u_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var d_={[Wc]:"Linear",[Xc]:"Reinhard",[qc]:"Cineon",[Yc]:"ACESFilmic",[Jc]:"AgX",[$c]:"Neutral",[Zc]:"Custom"};function p_(i,t){let e=d_[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Pl=new N;function m_(){me.getLuminanceCoefficients(Pl);let i=Pl.x.toFixed(4),t=Pl.y.toFixed(4),e=Pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function x_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function __(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function co(i){return i!==""}function ed(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function nd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var v_=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(i){return i.replace(v_,y_)}function y_(i,t){let e=ce[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return vh(e)}var M_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function id(i){return i.replace(M_,S_)}function S_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var E_={[to]:"SHADOWMAP_TYPE_PCF",[Zs]:"SHADOWMAP_TYPE_VSM"};function b_(i){return E_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var T_={[$s]:"ENVMAP_MODE_REFRACTION"};function w_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":T_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var A_={[Ga]:"ENVMAP_BLENDING_MULTIPLY",[mf]:"ENVMAP_BLENDING_MIX",[gf]:"ENVMAP_BLENDING_ADD"};function R_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":A_[i.combine]||"ENVMAP_BLENDING_NONE"}function C_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=b_(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=w_(e),u=R_(e),f=g_(e),d=x_(r),p=s.createProgram(),M,x,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(co).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(co).join(`
`),x.length>0&&(x+=`
`)):(M=[sd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),x=[sd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?ce.tonemapping_pars_fragment:"",e.toneMapping!==Qn?p_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,f_("linearToOutputTexel",e.outputColorSpace),m_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(co).join(`
`)),o=vh(o),o=ed(o,e),o=nd(o,e),a=vh(a),a=ed(a,e),a=nd(a,e),o=id(o),a=id(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,M=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",e.glslVersion===lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let S=g+M+o,y=g+x+a,_=jf(s,s.VERTEX_SHADER,S),b=jf(s,s.FRAGMENT_SHADER,y);s.attachShader(p,_),s.attachShader(p,b),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function E(A){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(p)||"",L=s.getShaderInfoLog(_)||"",B=s.getShaderInfoLog(b)||"",P=I.trim(),z=L.trim(),W=B.trim(),q=!0,ft=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,_,b);else{let J=td(s,_,"vertex"),st=td(s,b,"fragment");ee("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+P+`
`+J+`
`+st)}else P!==""?jt("WebGLProgram: Program Info Log:",P):(z===""||W==="")&&(ft=!1);ft&&(A.diagnostics={runnable:q,programLog:P,vertexShader:{log:z,prefix:M},fragmentShader:{log:W,prefix:x}})}s.deleteShader(_),s.deleteShader(b),m=new js(s,p),v=__(s,p)}let m;this.getUniforms=function(){return m===void 0&&E(this),m};let v;this.getAttributes=function(){return v===void 0&&E(this),v};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(p,l_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=c_++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=_,this.fragmentShader=b,this}var I_=0,yh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Mh(t),e.set(t,n)),n}},Mh=class{constructor(t){this.id=I_++,this.code=t,this.usedTimes=0}};function P_(i){return i===Hi||i===oo||i===ao}function L_(i,t,e,n,s,r){let o=new wr,a=new yh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(m){return l.add(m),m===0?"uv":`uv${m}`}function p(m,v,R,A,I,L){let B=A.fog,P=I.geometry,z=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?A.environment:null,W=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,q=t.get(m.envMap||z,W),ft=f[m.type],J=n.precision;m.precision!==null&&(J=n.getMaxPrecision(m.precision),J!==m.precision&&jt("WebGLProgram.getParameters:",m.precision,"not supported, using",J,"instead."));let st=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,rt=st!==void 0?st.length:0,Ot=0;P.morphAttributes.position!==void 0&&(Ot=1),P.morphAttributes.normal!==void 0&&(Ot=2),P.morphAttributes.color!==void 0&&(Ot=3);let Jt,tt,Mt,Bt;if(ft){let Lt=ei[ft];Jt=Lt.vertexShader,tt=Lt.fragmentShader}else{Jt=m.vertexShader,tt=m.fragmentShader;let Lt=a.getVertexShaderStage(m),be=a.getFragmentShaderStage(m);a.update(m,Lt,be),Mt=Lt.id,Bt=be.id}let Zt=i.getRenderTarget(),It=i.state.buffers.depth.getReversed(),H=I.isInstancedMesh===!0,ht=I.isBatchedMesh===!0,Z=!!m.map,lt=!!m.matcap,j=!!q,O=j&&q.isPMREMTexture===!0,G=!!m.aoMap,k=!!m.lightMap,pt=!!m.bumpMap&&m.wireframe===!1,at=!!m.normalMap,Pt=!!m.displacementMap,vt=!!m.emissiveMap,ct=!!m.metalnessMap,yt=!!m.roughnessMap,wt=m.anisotropy>0,D=m.clearcoat>0,ie=m.diffuseRoughness>0,zt=m.dispersion>0,Qt=m.retroreflectivity>0,ut=m.iridescence>0,ye=m.sheen>0,Vt=m.transmission>0,te=wt&&!!m.anisotropyMap,C=D&&!!m.clearcoatMap,T=D&&!!m.clearcoatNormalMap,V=D&&!!m.clearcoatRoughnessMap,dt=ie&&!!m.diffuseRoughnessMap,nt=ut&&!!m.iridescenceMap,xt=ut&&!!m.iridescenceThicknessMap,Et=ye&&!!m.sheenColorMap,K=ye&&!!m.sheenRoughnessMap,et=!!m.specularMap,bt=!!m.specularColorMap,U=!!m.specularIntensityMap,it=Vt&&!!m.transmissionMap,Q=Vt&&!!m.thicknessMap,Tt=!!m.gradientMap,_t=!!m.alphaMap,St=m.alphaTest>0,Yt=!!m.alphaHash,le=!!m.extensions,gt=Qn;m.toneMapped&&(Zt===null||Zt.isXRRenderTarget===!0)&&(gt=i.toneMapping);let $t=O?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,ae={shaderID:ft,shaderType:m.type,shaderName:m.name,vertexShader:Jt,fragmentShader:tt,defines:m.defines,customVertexShaderID:Mt,customFragmentShaderID:Bt,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:J,batching:ht,batchingColor:ht&&I._colorsTexture!==null,instancing:H,instancingColor:H&&I.instanceColor!==null,instancingMorph:H&&I.morphTexture!==null,outputColorSpace:Zt===null?i.outputColorSpace:Zt.isXRRenderTarget===!0?Zt.texture.colorSpace:me.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:Z,matcap:lt,envMap:j,envMapMode:j&&q.mapping,envMapPMREM:O,envMapMaxLod:O?$t.length-1:null,envMapSize:O?$t[0].width:null,aoMap:G,lightMap:k,bumpMap:pt,normalMap:at,displacementMap:Pt,emissiveMap:vt,normalMapObjectSpace:at&&m.normalMapType===vf,normalMapTangentSpace:at&&m.normalMapType===Rl,packedNormalMap:at&&m.normalMapType===Rl&&P_(m.normalMap.format),metalnessMap:ct,roughnessMap:yt,anisotropy:wt,anisotropyMap:te,clearcoat:D,clearcoatMap:C,clearcoatNormalMap:T,clearcoatRoughnessMap:V,diffuseRoughness:ie,diffuseRoughnessMap:dt,dispersion:zt,retroreflection:Qt,iridescence:ut,iridescenceMap:nt,iridescenceThicknessMap:xt,sheen:ye,sheenColorMap:Et,sheenRoughnessMap:K,specularMap:et,specularColorMap:bt,specularIntensityMap:U,transmission:Vt,transmissionMap:it,thicknessMap:Q,gradientMap:Tt,opaque:m.transparent===!1&&m.blending===Js&&m.alphaToCoverage===!1,alphaMap:_t,alphaTest:St,alphaHash:Yt,combine:m.combine,mapUv:Z&&d(m.map.channel),aoMapUv:G&&d(m.aoMap.channel),lightMapUv:k&&d(m.lightMap.channel),bumpMapUv:pt&&d(m.bumpMap.channel),normalMapUv:at&&d(m.normalMap.channel),displacementMapUv:Pt&&d(m.displacementMap.channel),emissiveMapUv:vt&&d(m.emissiveMap.channel),metalnessMapUv:ct&&d(m.metalnessMap.channel),roughnessMapUv:yt&&d(m.roughnessMap.channel),anisotropyMapUv:te&&d(m.anisotropyMap.channel),clearcoatMapUv:C&&d(m.clearcoatMap.channel),clearcoatNormalMapUv:T&&d(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&d(m.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:dt&&d(m.diffuseRoughnessMap.channel),iridescenceMapUv:nt&&d(m.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&d(m.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&d(m.sheenColorMap.channel),sheenRoughnessMapUv:K&&d(m.sheenRoughnessMap.channel),specularMapUv:et&&d(m.specularMap.channel),specularColorMapUv:bt&&d(m.specularColorMap.channel),specularIntensityMapUv:U&&d(m.specularIntensityMap.channel),transmissionMapUv:it&&d(m.transmissionMap.channel),thicknessMapUv:Q&&d(m.thicknessMap.channel),alphaMapUv:_t&&d(m.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(at||wt),vertexNormals:!!P.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!P.attributes.uv&&(Z||_t),fog:!!B,useFog:m.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||P.attributes.normal===void 0&&at===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:It,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:Ot,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:L.filter(Lt=>Lt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,decodeVideoTexture:Z&&m.map.isVideoTexture===!0&&me.getTransfer(m.map.colorSpace)===Se,decodeVideoTextureEmissive:vt&&m.emissiveMap.isVideoTexture===!0&&me.getTransfer(m.emissiveMap.colorSpace)===Se,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Te,flipSided:m.side===mn,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:le&&m.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&m.extensions.multiDraw===!0||ht)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return ae.vertexUv1s=l.has(1),ae.vertexUv2s=l.has(2),ae.vertexUv3s=l.has(3),l.clear(),ae}function M(m){let v=[];if(m.shaderID?v.push(m.shaderID):(v.push(m.customVertexShaderID),v.push(m.customFragmentShaderID)),m.defines!==void 0)for(let R in m.defines)v.push(R),v.push(m.defines[R]);return m.isRawShaderMaterial===!1&&(x(v,m),g(v,m),v.push(i.outputColorSpace)),v.push(m.customProgramCacheKey),v.join()}function x(m,v){m.push(v.precision),m.push(v.outputColorSpace),m.push(v.envMapMode),m.push(v.envMapPMREM),m.push(v.envMapMaxLod),m.push(v.envMapSize),m.push(v.mapUv),m.push(v.alphaMapUv),m.push(v.lightMapUv),m.push(v.aoMapUv),m.push(v.bumpMapUv),m.push(v.normalMapUv),m.push(v.displacementMapUv),m.push(v.emissiveMapUv),m.push(v.metalnessMapUv),m.push(v.roughnessMapUv),m.push(v.anisotropyMapUv),m.push(v.clearcoatMapUv),m.push(v.clearcoatNormalMapUv),m.push(v.clearcoatRoughnessMapUv),m.push(v.diffuseRoughnessMapUv),m.push(v.iridescenceMapUv),m.push(v.iridescenceThicknessMapUv),m.push(v.sheenColorMapUv),m.push(v.sheenRoughnessMapUv),m.push(v.specularMapUv),m.push(v.specularColorMapUv),m.push(v.specularIntensityMapUv),m.push(v.transmissionMapUv),m.push(v.thicknessMapUv),m.push(v.combine),m.push(v.fogExp2),m.push(v.sizeAttenuation),m.push(v.morphTargetsCount),m.push(v.numSunLights),m.push(v.numDirLights),m.push(v.numPointLights),m.push(v.numSpotLights),m.push(v.numSpotLightMaps),m.push(v.numHemiLights),m.push(v.numRectAreaLights),m.push(v.numSunLightShadows),m.push(v.numDirLightShadows),m.push(v.numPointLightShadows),m.push(v.numSpotLightShadows),m.push(v.numSpotLightShadowsWithMaps),m.push(v.numLightProbes),m.push(v.numLightProbeGrids),m.push(v.shadowMapType),m.push(v.toneMapping),m.push(v.numClippingPlanes),m.push(v.numClipIntersection),m.push(v.depthPacking)}function g(m,v){o.disableAll(),v.instancing&&o.enable(0),v.instancingColor&&o.enable(1),v.instancingMorph&&o.enable(2),v.matcap&&o.enable(3),v.envMap&&o.enable(4),v.normalMapObjectSpace&&o.enable(5),v.normalMapTangentSpace&&o.enable(6),v.clearcoat&&o.enable(7),v.iridescence&&o.enable(8),v.alphaTest&&o.enable(9),v.vertexColors&&o.enable(10),v.vertexAlphas&&o.enable(11),v.vertexUv1s&&o.enable(12),v.vertexUv2s&&o.enable(13),v.vertexUv3s&&o.enable(14),v.vertexTangents&&o.enable(15),v.anisotropy&&o.enable(16),v.alphaHash&&o.enable(17),v.batching&&o.enable(18),v.dispersion&&o.enable(19),v.retroreflection&&o.enable(24),v.diffuseRoughness&&o.enable(25),v.batchingColor&&o.enable(20),v.gradientMap&&o.enable(21),v.packedNormalMap&&o.enable(22),v.vertexNormals&&o.enable(23),m.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),v.numLightProbeGrids>0&&o.enable(22),v.hasPositionAttribute&&o.enable(23),m.push(o.mask)}function S(m){let v=f[m.type],R;if(v){let A=ei[v];R=zf.clone(A.uniforms)}else R=m.uniforms;return R}function y(m,v){let R=h.get(v);return R!==void 0?++R.usedTimes:(R=new C_(i,v,m,s),c.push(R),h.set(v,R)),R}function _(m){if(--m.usedTimes===0){let v=c.indexOf(m);c[v]=c[c.length-1],c.pop(),h.delete(m.cacheKey),m.destroy()}}function b(m){a.remove(m)}function E(){a.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:S,acquireProgram:y,releaseProgram:_,releaseShaderCache:b,programs:c,dispose:E}}function D_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function N_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function rd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function od(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,M,x,g){let S=i[t];return S===void 0?(S={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:M,renderOrder:f.renderOrder,z:x,group:g},i[t]=S):(S.id=f.id,S.object=f,S.geometry=d,S.material=p,S.materialVariant=o(f),S.groupOrder=M,S.renderOrder=f.renderOrder,S.z=x,S.group=g),t++,S}function l(f,d,p,M,x,g,S){S.reversedDepth===!0&&(x=-x);let y=a(f,d,p,M,x,g);p.transmission>0?n.push(y):p.transparent===!0?s.push(y):e.push(y)}function c(f,d,p,M,x,g){let S=a(f,d,p,M,x,g);p.transmission>0?n.unshift(S):p.transparent===!0?s.unshift(S):e.unshift(S)}function h(f,d){e.length>1&&e.sort(f||N_),n.length>1&&n.sort(d||rd),s.length>1&&s.sort(d||rd)}function u(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function U_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new od,i.set(n,[o])):s>=r.length?(o=new od,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function F_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new re};break;case"SpotLight":e={position:new N,direction:new N,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function O_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var B_=0;function z_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function H_(i){let t=new F_,e=O_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new oe,o=new oe;function a(c){let h=0,u=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,p=0,M=0,x=0,g=0,S=0,y=0,_=0,b=0,E=0,m=0,v=0,R=0,A=0;c.sort(z_);for(let L=0,B=c.length;L<B;L++){let P=c[L],z=P.color,W=P.intensity,q=P.distance,ft=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Hi?ft=P.shadow.map.texture:ft=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=z.r*W,u+=z.g*W,f+=z.b*W;else if(P.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(P.sh.coefficients[J],W);A++}else if(P.isSunLight){let J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let st=P.shadow,rt=e.get(P);rt.shadowIntensity=st.intensity,rt.shadowBias=st.bias,rt.shadowNormalBias=st.normalBias,rt.shadowRadius=st.radius,rt.shadowMapSize.copy(st.mapSize).multiply(st.getFrameExtents()),n.sunShadow[p]=rt,n.sunShadowMap[p]=ft;let Ot=st.getViewportCount();for(let Jt=0;Jt<Ot;Jt++)n.sunShadowMatrix[M+Jt]=st.getMatrix(Jt),n.sunShadowCascade[M+Jt]=st._cascadeData[Jt];M+=Ot,p++}n.sun[d]=J,d++}else if(P.isDirectionalLight){let J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let st=P.shadow,rt=e.get(P);rt.shadowIntensity=st.intensity,rt.shadowBias=st.bias,rt.shadowNormalBias=st.normalBias,rt.shadowRadius=st.radius,rt.shadowMapSize=st.mapSize,n.directionalShadow[x]=rt,n.directionalShadowMap[x]=ft,n.directionalShadowMatrix[x]=P.shadow.matrix,b++}n.directional[x]=J,x++}else if(P.isSpotLight){let J=t.get(P);J.position.setFromMatrixPosition(P.matrixWorld),J.color.copy(z).multiplyScalar(W),J.distance=q,J.coneCos=Math.cos(P.angle),J.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),J.decay=P.decay,n.spot[S]=J;let st=P.shadow;if(P.map&&(n.spotLightMap[v]=P.map,v++,st.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[S]=st.matrix,P.castShadow){let rt=e.get(P);rt.shadowIntensity=st.intensity,rt.shadowBias=st.bias,rt.shadowNormalBias=st.normalBias,rt.shadowRadius=st.radius,rt.shadowMapSize=st.mapSize,n.spotShadow[S]=rt,n.spotShadowMap[S]=ft,m++}S++}else if(P.isRectAreaLight){let J=t.get(P);J.color.copy(z).multiplyScalar(W),J.halfWidth.set(P.width*.5,0,0),J.halfHeight.set(0,P.height*.5,0),n.rectArea[y]=J,y++}else if(P.isPointLight){let J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),J.distance=P.distance,J.decay=P.decay,P.castShadow){let st=P.shadow,rt=e.get(P);rt.shadowIntensity=st.intensity,rt.shadowBias=st.bias,rt.shadowNormalBias=st.normalBias,rt.shadowRadius=st.radius,rt.shadowMapSize=st.mapSize,rt.shadowCameraNear=st.camera.near,rt.shadowCameraFar=st.camera.far,n.pointShadow[g]=rt,n.pointShadowMap[g]=ft,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=J,g++}else if(P.isHemisphereLight){let J=t.get(P);J.skyColor.copy(P.color).multiplyScalar(W),J.groundColor.copy(P.groundColor).multiplyScalar(W),n.hemi[_]=J,_++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.sunLength!==d||I.directionalLength!==x||I.pointLength!==g||I.spotLength!==S||I.rectAreaLength!==y||I.hemiLength!==_||I.numSunShadows!==p||I.numDirectionalShadows!==b||I.numPointShadows!==E||I.numSpotShadows!==m||I.numSpotMaps!==v||I.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=x,n.spot.length=S,n.rectArea.length=y,n.point.length=g,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=m,n.spotShadowMap.length=m,n.spotLightMatrix.length=m+v-R,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,I.sunLength=d,I.directionalLength=x,I.pointLength=g,I.spotLength=S,I.rectAreaLength=y,I.hemiLength=_,I.numSunShadows=p,I.numDirectionalShadows=b,I.numPointShadows=E,I.numSpotShadows=m,I.numSpotMaps=v,I.numLightProbes=A,n.version=B_++)}function l(c,h){let u=0,f=0,d=0,p=0,M=0,x=0,g=h.matrixWorldInverse;for(let S=0,y=c.length;S<y;S++){let _=c[S];if(_.isSunLight){let b=n.sun[u];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(g),u++}else if(_.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),f++}else if(_.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let b=n.rectArea[M];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),M++}else if(_.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){let b=n.hemi[x];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function ad(i){let t=new H_(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):e.push(u)}function a(u){n.push(u)}function l(){t.setup(e),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function G_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new ad(i),t.set(s,[a])):r>=o.length?(a=new ad(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var k_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V_=`uniform sampler2D shadow_pass;
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
}`,W_=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],X_=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],ld=new oe,lo=new N,mh=new N;function q_(i,t,e){let n=new Ui,s=new mt,r=new mt,o=new Ue,a=new wa,l=new Aa,c={},h=e.maxTextureSize,u={[zi]:mn,[mn]:zi,[Te]:Te},f=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:k_,fragmentShader:V_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Ie;p.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new ot(p,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=to;let g=this.type;this.render=function(E,m,v){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||E.length===0)return;this.type===Ha&&(jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=to);let R=i.getRenderTarget(),A=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),L=i.state;L.setBlending(ss),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let B=g!==this.type;B&&m.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(z=>z.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,z=E.length;P<z;P++){let W=E[P],q=W.shadow;if(q===void 0){jt("WebGLShadowMap:",W,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ft=q.getFrameExtents();s.multiply(ft),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ft.x),s.x=r.x*ft.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ft.y),s.y=r.y*ft.y,q.mapSize.y=r.y));let J=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=J,q.map===null||B===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Zs){if(W.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new An(s.x,s.y,{format:Hi,type:Vn,minFilter:dn,magFilter:dn,generateMipmaps:!1}),q.map.texture.name=W.name+".shadowMap",q.map.depthTexture=new mi(s.x,s.y,Un),q.map.depthTexture.name=W.name+".shadowMapDepth",q.map.depthTexture.format=ui,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ke,q.map.depthTexture.magFilter=Ke}else W.isPointLight?(q.map=new ho(s.x),q.map.depthTexture=new Fr(s.x,kn)):(q.map=new An(s.x,s.y),q.map.depthTexture=new mi(s.x,s.y,kn)),q.map.depthTexture.name=W.name+".shadowMap",q.map.depthTexture.format=ui,this.type===to?(q.map.depthTexture.compareFunction=J?rh:sh,q.map.depthTexture.minFilter=dn,q.map.depthTexture.magFilter=dn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ke,q.map.depthTexture.magFilter=Ke);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let st=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();W.isPointLight!==!0&&q.updateMatrices(W,v);let rt=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:v.layers;for(let Ot=0;Ot<st;Ot++){let Jt=q.getCamera(Ot);if(W.isPointLight){let tt=q.camera,Mt=q.matrix,Bt=W.distance||tt.far;Bt!==tt.far&&(tt.far=Bt,tt.updateProjectionMatrix()),lo.setFromMatrixPosition(W.matrixWorld),tt.position.copy(lo),mh.copy(tt.position),mh.add(W_[Ot]),tt.up.copy(X_[Ot]),tt.lookAt(mh),tt.updateMatrixWorld(),Mt.makeTranslation(-lo.x,-lo.y,-lo.z),ld.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),q._frustum.setFromProjectionMatrix(ld,tt.coordinateSystem,tt.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,Ot),i.clear();else{Ot===0&&(i.setRenderTarget(q.map),i.clear());let tt=q.getViewport(Ot);o.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),L.viewport(o)}n=q.getFrustum(Ot),_(m,v,Jt,W,rt,this.type)}q.isPointLightShadow!==!0&&this.type===Zs&&S(q,v),q.needsUpdate=!1}g=this.type,x.needsUpdate=!1,i.setRenderTarget(R,A,I)};function S(E,m){let v=t.update(M);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new An(s.x,s.y,{format:Hi,type:Vn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(m,null,v,f,M,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(m,null,v,d,M,null)}function y(E,m,v,R){let A=null,I=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)A=I;else if(A=v.isPointLight===!0?l:a,i.localClippingEnabled&&m.clipShadows===!0&&Array.isArray(m.clippingPlanes)&&m.clippingPlanes.length!==0||m.displacementMap&&m.displacementScale!==0||m.alphaMap&&m.alphaTest>0||m.map&&m.alphaTest>0||m.alphaToCoverage===!0){let L=A.uuid,B=m.uuid,P=c[L];P===void 0&&(P={},c[L]=P);let z=P[B];z===void 0&&(z=A.clone(),P[B]=z,m.addEventListener("dispose",b)),A=z}if(A.visible=m.visible,A.wireframe=m.wireframe,R===Zs?A.side=m.shadowSide!==null?m.shadowSide:m.side:A.side=m.shadowSide!==null?m.shadowSide:u[m.side],A.alphaMap=m.alphaMap,A.alphaTest=m.alphaToCoverage===!0?.5:m.alphaTest,A.map=m.map,A.clipShadows=m.clipShadows,A.clippingPlanes=m.clippingPlanes,A.clipIntersection=m.clipIntersection,A.displacementMap=m.displacementMap,A.displacementScale=m.displacementScale,A.displacementBias=m.displacementBias,A.wireframeLinewidth=m.wireframeLinewidth,A.linewidth=m.linewidth,v.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let L=i.properties.get(A);L.light=v}return A}function _(E,m,v,R,A,I){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===Zs)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);let P=t.update(E),z=E.material;if(Array.isArray(z)){let W=P.groups;for(let q=0,ft=W.length;q<ft;q++){let J=W[q],st=z[J.materialIndex];if(st&&st.visible){let rt=y(E,st,R,I);E.onBeforeShadow(i,E,m,v,P,rt,J),i.renderBufferDirect(v,null,P,rt,E,J),E.onAfterShadow(i,E,m,v,P,rt,J)}}}else if(z.visible){let W=y(E,z,R,I);E.onBeforeShadow(i,E,m,v,P,W,null),i.renderBufferDirect(v,null,P,W,E,null),E.onAfterShadow(i,E,m,v,P,W,null)}}let B=E.children;for(let P=0,z=B.length;P<z;P++)_(B[P],m,v,R,A,I)}function b(E){E.target.removeEventListener("dispose",b);for(let v in c){let R=c[v],A=E.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}function Y_(i,t){function e(){let U=!1,it=new Ue,Q=null,Tt=new Ue(0,0,0,0);return{setMask:function(_t){Q!==_t&&!U&&(i.colorMask(_t,_t,_t,_t),Q=_t)},setLocked:function(_t){U=_t},setClear:function(_t,St,Yt,le,gt){gt===!0&&(_t*=le,St*=le,Yt*=le),it.set(_t,St,Yt,le),Tt.equals(it)===!1&&(i.clearColor(_t,St,Yt,le),Tt.copy(it))},reset:function(){U=!1,Q=null,Tt.set(-1,0,0,0)}}}function n(){let U=!1,it=!1,Q=null,Tt=null,_t=null;return{setReversed:function(St){if(it!==St){let Yt=t.get("EXT_clip_control");St?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),it=St;let le=_t;_t=null,this.setClear(le)}},getReversed:function(){return it},setTest:function(St){St?It(i.DEPTH_TEST):H(i.DEPTH_TEST)},setMask:function(St){Q!==St&&!U&&(i.depthMask(St),Q=St)},setFunc:function(St){if(it&&(St=Cf[St]),Tt!==St){switch(St){case na:i.depthFunc(i.NEVER);break;case ia:i.depthFunc(i.ALWAYS);break;case sa:i.depthFunc(i.LESS);break;case Ns:i.depthFunc(i.LEQUAL);break;case ra:i.depthFunc(i.EQUAL);break;case oa:i.depthFunc(i.GEQUAL);break;case aa:i.depthFunc(i.GREATER);break;case la:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=St}},setLocked:function(St){U=St},setClear:function(St){_t!==St&&(_t=St,it&&(St=1-St),i.clearDepth(St))},reset:function(){U=!1,Q=null,Tt=null,_t=null,it=!1}}}function s(){let U=!1,it=null,Q=null,Tt=null,_t=null,St=null,Yt=null,le=null,gt=null;return{setTest:function($t){U||($t?It(i.STENCIL_TEST):H(i.STENCIL_TEST))},setMask:function($t){it!==$t&&!U&&(i.stencilMask($t),it=$t)},setFunc:function($t,ae,Lt){(Q!==$t||Tt!==ae||_t!==Lt)&&(i.stencilFunc($t,ae,Lt),Q=$t,Tt=ae,_t=Lt)},setOp:function($t,ae,Lt){(St!==$t||Yt!==ae||le!==Lt)&&(i.stencilOp($t,ae,Lt),St=$t,Yt=ae,le=Lt)},setLocked:function($t){U=$t},setClear:function($t){gt!==$t&&(i.clearStencil($t),gt=$t)},reset:function(){U=!1,it=null,Q=null,Tt=null,_t=null,St=null,Yt=null,le=null,gt=null}}}let r=new e,o=new n,a=new s,l={},c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],M=null,x=!1,g=null,S=null,y=null,_=null,b=null,E=null,m=null,v=new re(0,0,0),R=0,A=!1,I=null,L=null,B=null,P=null,z=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,ft=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(J)[1]),q=ft>=1):J.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),q=ft>=2);let st=null,rt={},Ot=i.getParameter(i.SCISSOR_BOX),Jt=i.getParameter(i.VIEWPORT),tt=new Ue().fromArray(Ot),Mt=new Ue().fromArray(Jt);function Bt(U,it,Q,Tt){let _t=new Uint8Array(4),St=i.createTexture();i.bindTexture(U,St),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<Q;Yt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(it+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return St}let Zt={};Zt[i.TEXTURE_2D]=Bt(i.TEXTURE_2D,i.TEXTURE_2D,1),Zt[i.TEXTURE_CUBE_MAP]=Bt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Zt[i.TEXTURE_2D_ARRAY]=Bt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Zt[i.TEXTURE_3D]=Bt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),It(i.DEPTH_TEST),o.setFunc(Ns),pt(!1),at(zc),It(i.CULL_FACE),G(ss);function It(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function H(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function ht(U,it){return f[U]!==it?(i.bindFramebuffer(U,it),f[U]=it,U===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=it),U===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Z(U,it){let Q=p,Tt=!1;if(U){Q=d.get(it),Q===void 0&&(Q=[],d.set(it,Q));let _t=U.textures;if(Q.length!==_t.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let St=0,Yt=_t.length;St<Yt;St++)Q[St]=i.COLOR_ATTACHMENT0+St;Q.length=_t.length,Tt=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(Q)}function lt(U){return M!==U?(i.useProgram(U),M=U,!0):!1}let j={[rs]:i.FUNC_ADD,[Ku]:i.FUNC_SUBTRACT,[ju]:i.FUNC_REVERSE_SUBTRACT};j[Qu]=i.MIN,j[tf]=i.MAX;let O={[ef]:i.ZERO,[nf]:i.ONE,[sf]:i.SRC_COLOR,[kc]:i.SRC_ALPHA,[hf]:i.SRC_ALPHA_SATURATE,[lf]:i.DST_COLOR,[of]:i.DST_ALPHA,[rf]:i.ONE_MINUS_SRC_COLOR,[Vc]:i.ONE_MINUS_SRC_ALPHA,[cf]:i.ONE_MINUS_DST_COLOR,[af]:i.ONE_MINUS_DST_ALPHA,[uf]:i.CONSTANT_COLOR,[ff]:i.ONE_MINUS_CONSTANT_COLOR,[df]:i.CONSTANT_ALPHA,[pf]:i.ONE_MINUS_CONSTANT_ALPHA};function G(U,it,Q,Tt,_t,St,Yt,le,gt,$t){if(U===ss){x===!0&&(H(i.BLEND),x=!1);return}if(x===!1&&(It(i.BLEND),x=!0),U!==$u){if(U!==g||$t!==A){if((S!==rs||b!==rs)&&(i.blendEquation(i.FUNC_ADD),S=rs,b=rs),$t)switch(U){case Js:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gi:i.blendFunc(i.ONE,i.ONE);break;case Hc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ee("WebGLState: Invalid blending: ",U);break}else switch(U){case Js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Hc:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gc:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",U);break}y=null,_=null,E=null,m=null,v.set(0,0,0),R=0,g=U,A=$t}return}_t=_t||it,St=St||Q,Yt=Yt||Tt,(it!==S||_t!==b)&&(i.blendEquationSeparate(j[it],j[_t]),S=it,b=_t),(Q!==y||Tt!==_||St!==E||Yt!==m)&&(i.blendFuncSeparate(O[Q],O[Tt],O[St],O[Yt]),y=Q,_=Tt,E=St,m=Yt),(le.equals(v)===!1||gt!==R)&&(i.blendColor(le.r,le.g,le.b,gt),v.copy(le),R=gt),g=U,A=!1}function k(U,it){U.side===Te?H(i.CULL_FACE):It(i.CULL_FACE);let Q=U.side===mn;it&&(Q=!Q),pt(Q),U.blending===Js&&U.transparent===!1?G(ss):G(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let Tt=U.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),vt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?It(i.SAMPLE_ALPHA_TO_COVERAGE):H(i.SAMPLE_ALPHA_TO_COVERAGE)}function pt(U){I!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),I=U)}function at(U){U!==Zu?(It(i.CULL_FACE),U!==L&&(U===zc?i.cullFace(i.BACK):U===Ju?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):H(i.CULL_FACE),L=U}function Pt(U){U!==B&&(q&&i.lineWidth(U),B=U)}function vt(U,it,Q){U?(It(i.POLYGON_OFFSET_FILL),(P!==it||z!==Q)&&(P=it,z=Q,o.getReversed()&&(it=-it,Q=-Q),i.polygonOffset(it,Q))):H(i.POLYGON_OFFSET_FILL)}function ct(U){U?It(i.SCISSOR_TEST):H(i.SCISSOR_TEST)}function yt(U){U===void 0&&(U=i.TEXTURE0+W-1),st!==U&&(i.activeTexture(U),st=U)}function wt(U,it,Q){Q===void 0&&(st===null?Q=i.TEXTURE0+W-1:Q=st);let Tt=rt[Q];Tt===void 0&&(Tt={type:void 0,texture:void 0},rt[Q]=Tt),(Tt.type!==U||Tt.texture!==it)&&(st!==Q&&(i.activeTexture(Q),st=Q),i.bindTexture(U,it||Zt[U]),Tt.type=U,Tt.texture=it)}function D(){let U=rt[st];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ie(){try{i.compressedTexImage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function zt(){try{i.compressedTexImage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function Qt(){try{i.texSubImage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function ut(){try{i.texSubImage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function ye(){try{i.compressedTexSubImage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function Vt(){try{i.compressedTexSubImage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function te(){try{i.texStorage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function C(){try{i.texStorage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function T(){try{i.texImage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function V(){try{i.texImage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function dt(U){return u[U]!==void 0?u[U]:i.getParameter(U)}function nt(U,it){u[U]!==it&&(i.pixelStorei(U,it),u[U]=it)}function xt(U){tt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),tt.copy(U))}function Et(U){Mt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Mt.copy(U))}function K(U,it){let Q=c.get(it);Q===void 0&&(Q=new WeakMap,c.set(it,Q));let Tt=Q.get(U);Tt===void 0&&(Tt=i.getUniformBlockIndex(it,U.name),i.uniformBlockBinding(it,Tt,Tt),Q.set(U,Tt))}function et(U,it,Q){let _t=c.get(it).get(U);l[_t]!==Q&&(i.bindBufferBase(i.UNIFORM_BUFFER,_t,Q),l[_t]=Q)}function bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},st=null,rt={},f={},l={},d=new WeakMap,p=[],M=null,x=!1,g=null,S=null,y=null,_=null,b=null,E=null,m=null,v=new re(0,0,0),R=0,A=!1,I=null,L=null,B=null,P=null,z=null,tt.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:It,disable:H,bindFramebuffer:ht,drawBuffers:Z,useProgram:lt,setBlending:G,setMaterial:k,setFlipSided:pt,setCullFace:at,setLineWidth:Pt,setPolygonOffset:vt,setScissorTest:ct,activeTexture:yt,bindTexture:wt,unbindTexture:D,compressedTexImage2D:ie,compressedTexImage3D:zt,texImage2D:T,texImage3D:V,pixelStorei:nt,getParameter:dt,updateUBOMapping:K,uniformBlockBinding:et,texStorage2D:te,texStorage3D:C,texSubImage2D:Qt,texSubImage3D:ut,compressedTexSubImage2D:ye,compressedTexSubImage3D:Vt,scissor:xt,viewport:Et,reset:bt}}function Z_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,h=new WeakMap,u=new Set,f,d=new WeakMap,p=new Set,M=new FinalizationRegistry(C=>p.delete(C)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,T){return x?new OffscreenCanvas(C,T):Er("canvas")}function S(C,T,V){let dt=1,nt=te(C);if((nt.width>V||nt.height>V)&&(dt=V/Math.max(nt.width,nt.height)),dt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let xt=Math.floor(dt*nt.width),Et=Math.floor(dt*nt.height);f===void 0&&(f=g(xt,Et));let K=T?g(xt,Et):f;return K.width=xt,K.height=Et,K.getContext("2d").drawImage(C,0,0,xt,Et),jt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+xt+"x"+Et+")."),K}else return"data"in C&&jt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),C;return C}function y(C){return C.generateMipmaps}function _(C){i.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(C,T,V,dt,nt,xt=!1){if(C!==null){if(i[C]!==void 0)return i[C];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Et;dt&&(Et=t.get("EXT_texture_norm16"),Et||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=T;if(T===i.RED&&(V===i.FLOAT&&(K=i.R32F),V===i.HALF_FLOAT&&(K=i.R16F),V===i.UNSIGNED_BYTE&&(K=i.R8),V===i.UNSIGNED_SHORT&&Et&&(K=Et.R16_EXT),V===i.SHORT&&Et&&(K=Et.R16_SNORM_EXT)),T===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.R8UI),V===i.UNSIGNED_SHORT&&(K=i.R16UI),V===i.UNSIGNED_INT&&(K=i.R32UI),V===i.BYTE&&(K=i.R8I),V===i.SHORT&&(K=i.R16I),V===i.INT&&(K=i.R32I)),T===i.RG&&(V===i.FLOAT&&(K=i.RG32F),V===i.HALF_FLOAT&&(K=i.RG16F),V===i.UNSIGNED_BYTE&&(K=i.RG8),V===i.UNSIGNED_SHORT&&Et&&(K=Et.RG16_EXT),V===i.SHORT&&Et&&(K=Et.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RG8UI),V===i.UNSIGNED_SHORT&&(K=i.RG16UI),V===i.UNSIGNED_INT&&(K=i.RG32UI),V===i.BYTE&&(K=i.RG8I),V===i.SHORT&&(K=i.RG16I),V===i.INT&&(K=i.RG32I)),T===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGB8UI),V===i.UNSIGNED_SHORT&&(K=i.RGB16UI),V===i.UNSIGNED_INT&&(K=i.RGB32UI),V===i.BYTE&&(K=i.RGB8I),V===i.SHORT&&(K=i.RGB16I),V===i.INT&&(K=i.RGB32I)),T===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),V===i.UNSIGNED_INT&&(K=i.RGBA32UI),V===i.BYTE&&(K=i.RGBA8I),V===i.SHORT&&(K=i.RGBA16I),V===i.INT&&(K=i.RGBA32I)),T===i.RGB&&(V===i.UNSIGNED_SHORT&&Et&&(K=Et.RGB16_EXT),V===i.SHORT&&Et&&(K=Et.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),T===i.RGBA){let et=xt?Sr:me.getTransfer(nt);V===i.FLOAT&&(K=i.RGBA32F),V===i.HALF_FLOAT&&(K=i.RGBA16F),V===i.UNSIGNED_BYTE&&(K=et===Se?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&Et&&(K=Et.RGBA16_EXT),V===i.SHORT&&Et&&(K=Et.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function m(C,T){let V;return C?T===null||T===kn||T===as?V=i.DEPTH24_STENCIL8:T===Un?V=i.DEPTH32F_STENCIL8:T===Ks&&(V=i.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===kn||T===as?V=i.DEPTH_COMPONENT24:T===Un?V=i.DEPTH_COMPONENT32F:T===Ks&&(V=i.DEPTH_COMPONENT16),V}function v(C,T){return y(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ke&&C.minFilter!==dn?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function R(C){let T=new WeakRef(C);n.get(C).__ref=T,p.add(T),M.register(C,T,T)}function A(C){let T=n.get(C).__ref;T!==void 0&&(p.delete(T),M.unregister(T))}function I(C){B(C.target)}function L(C){P(C.target)}function B(C){C.removeEventListener("dispose",I),A(C),W(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&u.delete(C)}function P(C){C.removeEventListener("dispose",L),A(C),ft(C)}function z(){for(let C of p){let T=C.deref();T!==void 0&&(T.isRenderTarget===!0?P(T):B(T))}p.clear(),u.clear()}function W(C){let T=n.get(C);if(T.__webglInit===void 0)return;let V=C.source,dt=d.get(V);if(dt){let nt=dt[T.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&q(C),Object.keys(dt).length===0&&d.delete(V)}n.remove(C)}function q(C){let T=n.get(C);i.deleteTexture(T.__webglTexture);let V=C.source,dt=d.get(V);delete dt[T.__cacheKey],o.memory.textures--}function ft(C){let T=n.get(C);T.__depthDisposeCallback&&T.__depthDisposeCallback();let V=C.depthTexture;if(V&&V.renderTarget===C&&B(V),C.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(T.__webglFramebuffer[nt]))for(let xt=0;xt<T.__webglFramebuffer[nt].length;xt++)i.deleteFramebuffer(T.__webglFramebuffer[nt][xt]);else i.deleteFramebuffer(T.__webglFramebuffer[nt]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[nt])}else{if(Array.isArray(T.__webglFramebuffer))for(let nt=0;nt<T.__webglFramebuffer.length;nt++)i.deleteFramebuffer(T.__webglFramebuffer[nt]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let nt=0;nt<T.__webglColorRenderbuffer.length;nt++)T.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[nt]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let dt=C.textures;for(let nt=0,xt=dt.length;nt<xt;nt++){let Et=n.get(dt[nt]);Et.__webglTexture&&(i.deleteTexture(Et.__webglTexture),o.memory.textures--),n.remove(dt[nt])}n.remove(C)}let J=0;function st(){J=0}function rt(){return J}function Ot(C){J=C}function Jt(){let C=J;return C>=s.maxTextures&&jt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),J+=1,C}function tt(C){let T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.mipmapsAutoUpdate),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function Mt(C,T){let V=n.get(C);if(C.isVideoTexture&&ye(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){let dt=C.image;if(dt===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{k(V,C,T);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+T)}function Bt(C,T){let V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){k(V,C,T);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+T)}function Zt(C,T){let V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){k(V,C,T);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+T)}function It(C,T){let V=n.get(C);if(C.version>0&&V.__version!==C.version){pt(V,C,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+T)}let H={[Di]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[ca]:i.MIRRORED_REPEAT},ht={[Ke]:i.NEAREST,[xf]:i.NEAREST_MIPMAP_NEAREST,[eo]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[Wa]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},Z={[Mf]:i.NEVER,[oh]:i.ALWAYS,[Sf]:i.LESS,[sh]:i.LEQUAL,[Ef]:i.EQUAL,[rh]:i.GEQUAL,[bf]:i.GREATER,[Tf]:i.NOTEQUAL};function lt(C,T){if(T.type===Un&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===dn||T.magFilter===Wa||T.magFilter===eo||T.magFilter===xi||T.minFilter===dn||T.minFilter===Wa||T.minFilter===eo||T.minFilter===xi)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,H[T.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,H[T.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,H[T.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ht[T.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ht[T.minFilter]),T.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Z[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ke||T.minFilter!==eo&&T.minFilter!==xi||T.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function j(C,T){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",I),R(T));let dt=T.source,nt=d.get(dt);nt===void 0&&(nt={},d.set(dt,nt));let xt=tt(T);if(xt!==C.__cacheKey){nt[xt]===void 0&&(nt[xt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),nt[xt].usedTimes++;let Et=nt[C.__cacheKey];Et!==void 0&&(nt[C.__cacheKey].usedTimes--,Et.usedTimes===0&&q(T)),C.__cacheKey=xt,C.__webglTexture=nt[xt].texture}return V}function O(C,T,V){return Math.floor(Math.floor(C/V)/T)}function G(C,T,V,dt){let xt=C.updateRanges;if(xt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,V,dt,T.data);else{xt.sort((U,it)=>U.start-it.start);let Et=0;for(let U=1;U<xt.length;U++){let it=xt[Et],Q=xt[U],Tt=it.start+it.count,_t=O(Q.start,T.width,4),St=O(it.start,T.width,4);Q.start<=Tt+1&&_t===St&&O(Q.start+Q.count-1,T.width,4)===_t?it.count=Math.max(it.count,Q.start+Q.count-it.start):(++Et,xt[Et]=Q)}xt.length=Et+1;let K=e.getParameter(i.UNPACK_ROW_LENGTH),et=e.getParameter(i.UNPACK_SKIP_PIXELS),bt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let U=0,it=xt.length;U<it;U++){let Q=xt[U],Tt=Math.floor(Q.start/4),_t=Math.ceil(Q.count/4),St=Tt%T.width,Yt=Math.floor(Tt/T.width),le=_t,gt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,St),e.pixelStorei(i.UNPACK_SKIP_ROWS,Yt),e.texSubImage2D(i.TEXTURE_2D,0,St,Yt,le,gt,V,dt,T.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,K),e.pixelStorei(i.UNPACK_SKIP_PIXELS,et),e.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function k(C,T,V){let dt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(dt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(dt=i.TEXTURE_3D);let nt=j(C,T),xt=T.source;e.bindTexture(dt,C.__webglTexture,i.TEXTURE0+V);let Et=n.get(xt);if(xt.version!==Et.__version||nt===!0){if(e.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let gt=me.getPrimaries(me.workingColorSpace),$t=T.colorSpace===vi?null:me.getPrimaries(T.colorSpace),ae=T.colorSpace===vi||gt===$t?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let et=S(T.image,!1,s.maxTextureSize);et=Vt(T,et);let bt=r.convert(T.format,T.colorSpace),U=r.convert(T.type),it=E(T.internalFormat,bt,U,T.normalized,T.colorSpace,T.isVideoTexture);lt(dt,T);let Q,Tt=T.mipmaps,_t=T.isVideoTexture!==!0,St=Et.__version===void 0||nt===!0,Yt=xt.dataReady,le=v(T,et);if(T.isDepthTexture)it=m(T.format===_i,T.type),St&&(_t?e.texStorage2D(i.TEXTURE_2D,1,it,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,it,et.width,et.height,0,bt,U,null));else if(T.isDataTexture)if(Tt.length>0){_t&&St&&e.texStorage2D(i.TEXTURE_2D,le,it,Tt[0].width,Tt[0].height);for(let gt=0,$t=Tt.length;gt<$t;gt++)Q=Tt[gt],_t?Yt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Q.width,Q.height,bt,U,Q.data):e.texImage2D(i.TEXTURE_2D,gt,it,Q.width,Q.height,0,bt,U,Q.data);T.generateMipmaps=!1}else _t?(St&&e.texStorage2D(i.TEXTURE_2D,le,it,et.width,et.height),Yt&&G(T,et,bt,U)):e.texImage2D(i.TEXTURE_2D,0,it,et.width,et.height,0,bt,U,et.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){_t&&St&&e.texStorage3D(i.TEXTURE_2D_ARRAY,le,it,Tt[0].width,Tt[0].height,et.depth);for(let gt=0,$t=Tt.length;gt<$t;gt++)if(Q=Tt[gt],T.format!==Wn)if(bt!==null)if(_t){if(Yt)if(T.layerUpdates.size>0){let ae=dh(Q.width,Q.height,T.format,T.type);for(let Lt of T.layerUpdates){let be=Q.data.subarray(Lt*ae/Q.data.BYTES_PER_ELEMENT,(Lt+1)*ae/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,Lt,Q.width,Q.height,1,bt,be)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,Q.width,Q.height,et.depth,bt,Q.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,it,Q.width,Q.height,et.depth,0,Q.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _t?Yt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,Q.width,Q.height,et.depth,bt,U,Q.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,it,Q.width,Q.height,et.depth,0,bt,U,Q.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{_t&&St&&e.texStorage2D(i.TEXTURE_2D,le,it,Tt[0].width,Tt[0].height);for(let gt=0,$t=Tt.length;gt<$t;gt++)Q=Tt[gt],T.format!==Wn?bt!==null?_t?Yt&&e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,Q.width,Q.height,bt,Q.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,it,Q.width,Q.height,0,Q.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?Yt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Q.width,Q.height,bt,U,Q.data):e.texImage2D(i.TEXTURE_2D,gt,it,Q.width,Q.height,0,bt,U,Q.data)}else if(T.isDataArrayTexture)if(_t){if(St&&e.texStorage3D(i.TEXTURE_2D_ARRAY,le,it,et.width,et.height,et.depth),Yt)if(T.layerUpdates.size>0){let gt=dh(et.width,et.height,T.format,T.type);for(let $t of T.layerUpdates){let ae=et.data.subarray($t*gt/et.data.BYTES_PER_ELEMENT,($t+1)*gt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$t,et.width,et.height,1,bt,U,ae)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,bt,U,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,it,et.width,et.height,et.depth,0,bt,U,et.data);else if(T.isData3DTexture)_t?(St&&e.texStorage3D(i.TEXTURE_3D,le,it,et.width,et.height,et.depth),Yt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,bt,U,et.data)):e.texImage3D(i.TEXTURE_3D,0,it,et.width,et.height,et.depth,0,bt,U,et.data);else if(T.isFramebufferTexture){if(St)if(_t)e.texStorage2D(i.TEXTURE_2D,le,it,et.width,et.height);else{let gt=et.width,$t=et.height;for(let ae=0;ae<le;ae++)e.texImage2D(i.TEXTURE_2D,ae,it,gt,$t,0,bt,U,null),gt>>=1,$t>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let gt=i.canvas;if(gt.hasAttribute("layoutsubtree")||gt.setAttribute("layoutsubtree","true"),et.parentNode!==gt){gt.appendChild(et),u.add(T),gt.onpaint=$t=>{let ae=$t.changedElements;for(let Lt of u)ae.includes(Lt.image)&&(Lt.needsUpdate=!0)},gt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,et);else{let ae=i.RGBA,Lt=i.RGBA,be=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ae,Lt,be,et)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Tt.length>0){if(_t&&St){let gt=te(Tt[0]);e.texStorage2D(i.TEXTURE_2D,le,it,gt.width,gt.height)}for(let gt=0,$t=Tt.length;gt<$t;gt++)Q=Tt[gt],_t?Yt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,bt,U,Q):e.texImage2D(i.TEXTURE_2D,gt,it,bt,U,Q);T.generateMipmaps=!1}else if(_t){if(St){let gt=te(et);e.texStorage2D(i.TEXTURE_2D,le,it,gt.width,gt.height)}Yt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,U,et)}else e.texImage2D(i.TEXTURE_2D,0,it,bt,U,et);y(T)&&T.mipmapsAutoUpdate===!0&&_(dt),Et.__version=xt.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function pt(C,T,V){if(T.image.length!==6)return;let dt=j(C,T),nt=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+V);let xt=n.get(nt);if(nt.version!==xt.__version||dt===!0){e.activeTexture(i.TEXTURE0+V);let Et=me.getPrimaries(me.workingColorSpace),K=T.colorSpace===vi?null:me.getPrimaries(T.colorSpace),et=T.colorSpace===vi||Et===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let bt=T.isCompressedTexture||T.image[0].isCompressedTexture,U=T.image[0]&&T.image[0].isDataTexture,it=[];for(let Lt=0;Lt<6;Lt++)!bt&&!U?it[Lt]=S(T.image[Lt],!0,s.maxCubemapSize):it[Lt]=U?T.image[Lt].image:T.image[Lt],it[Lt]=Vt(T,it[Lt]);let Q=it[0],Tt=r.convert(T.format,T.colorSpace),_t=r.convert(T.type),St=E(T.internalFormat,Tt,_t,T.normalized,T.colorSpace),Yt=T.isVideoTexture!==!0,le=xt.__version===void 0||dt===!0,gt=nt.dataReady,$t=v(T,Q);lt(i.TEXTURE_CUBE_MAP,T);let ae;if(T.isDepthTexture){if(St=m(T.format===_i,T.type),le)if(Yt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,St,Q.width,Q.height);else for(let Lt=0;Lt<6;Lt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,St,Q.width,Q.height,0,Tt,_t,null)}else if(bt){Yt&&le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,$t,St,Q.width,Q.height);for(let Lt=0;Lt<6;Lt++){ae=it[Lt].mipmaps;for(let be=0;be<ae.length;be++){let Ze=ae[be];T.format!==Wn?Tt!==null?Yt?gt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,be,0,0,Ze.width,Ze.height,Tt,Ze.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,be,St,Ze.width,Ze.height,0,Ze.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,be,0,0,Ze.width,Ze.height,Tt,_t,Ze.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,be,St,Ze.width,Ze.height,0,Tt,_t,Ze.data)}}}else{if(ae=T.mipmaps,Yt&&le){ae.length>0&&$t++;let Lt=te(it[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,$t,St,Lt.width,Lt.height)}for(let Lt=0;Lt<6;Lt++)if(U){Yt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,0,0,it[Lt].width,it[Lt].height,Tt,_t,it[Lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,St,it[Lt].width,it[Lt].height,0,Tt,_t,it[Lt].data);for(let be=0;be<ae.length;be++){let wi=ae[be].image[Lt].image;Yt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,be+1,0,0,wi.width,wi.height,Tt,_t,wi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,be+1,St,wi.width,wi.height,0,Tt,_t,wi.data)}}else{Yt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,0,0,Tt,_t,it[Lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,St,Tt,_t,it[Lt]);for(let be=0;be<ae.length;be++){let Ze=ae[be];Yt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,be+1,0,0,Tt,_t,Ze.image[Lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,be+1,St,Tt,_t,Ze.image[Lt])}}}y(T)&&T.mipmapsAutoUpdate===!0&&_(i.TEXTURE_CUBE_MAP),xt.__version=nt.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function at(C,T,V,dt,nt,xt){let Et=r.convert(V.format,V.colorSpace),K=r.convert(V.type),et=E(V.internalFormat,Et,K,V.normalized,V.colorSpace),bt=n.get(T),U=n.get(V);if(U.__renderTarget=T,!bt.__hasExternalTextures){let it=Math.max(1,T.width>>xt),Q=Math.max(1,T.height>>xt);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,xt,et,it,Q,T.depth,0,Et,K,null):e.texImage2D(nt,xt,et,it,Q,0,Et,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),ut(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,nt,U.__webglTexture,0,Qt(T)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,dt,nt,U.__webglTexture,xt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(C,T,V){if(i.bindRenderbuffer(i.RENDERBUFFER,C),T.depthBuffer){let dt=T.depthTexture,nt=dt&&dt.isDepthTexture?dt.type:null,xt=m(T.stencilBuffer,nt),Et=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ut(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt(T),xt,T.width,T.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt(T),xt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,xt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,C)}else{let dt=T.textures;for(let nt=0;nt<dt.length;nt++){let xt=dt[nt],Et=r.convert(xt.format,xt.colorSpace),K=r.convert(xt.type),et=E(xt.internalFormat,Et,K,xt.normalized,xt.colorSpace);ut(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt(T),et,T.width,T.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt(T),et,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,et,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(C,T,V){let dt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=n.get(T.depthTexture);nt.__renderTarget=T;let xt=dt?T.depthTexture.image[0]:T.depthTexture.image;(!nt.__webglTexture||xt.width!==T.width||xt.height!==T.height)&&(xt.width=T.width,xt.height=T.height,T.depthTexture.needsUpdate=!0),dt?It(T.depthTexture,0):Mt(T.depthTexture,0);let Et=nt.__webglTexture,K=Qt(T),et=dt?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,bt=T.depthTexture.format===_i?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===ui)ut(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,bt,et,Et,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,bt,et,Et,0);else if(T.depthTexture.format===_i)ut(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,bt,et,Et,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,bt,et,Et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ct(C){let T=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){let dt=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),dt){let nt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,dt.removeEventListener("dispose",nt)};dt.addEventListener("dispose",nt),T.__depthDisposeCallback=nt}T.__boundDepthTexture=dt}if(C.depthTexture&&!T.__autoAllocateDepthBuffer)if(V)for(let dt=0;dt<6;dt++)vt(T.__webglFramebuffer[dt],C,dt);else C.texture.mipmaps.length>0?vt(T.__webglFramebuffer[0],C,0):vt(T.__webglFramebuffer,C,0);else if(V){T.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[dt]),T.__webglDepthbuffer[dt]===void 0)T.__webglDepthbuffer[dt]=i.createRenderbuffer(),Pt(T.__webglDepthbuffer[dt],C,!1);else{let nt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=T.__webglDepthbuffer[dt];i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,xt)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Pt(T.__webglDepthbuffer,C,!1);else{let nt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,xt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(C,T,V){let dt=n.get(C);T!==void 0&&at(dt.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&ct(C)}function wt(C){let T=C.texture,V=n.get(C),dt=n.get(T);C.addEventListener("dispose",L),R(C);let nt=C.textures,xt=C.isWebGLCubeRenderTarget===!0,Et=nt.length>1;if(Et||(dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture()),dt.__version=T.version,o.memory.textures++),xt){V.__webglFramebuffer=[];for(let K=0;K<6;K++)if(T.mipmaps.length>0){V.__webglFramebuffer[K]=[];for(let et=0;et<T.mipmaps.length;et++)V.__webglFramebuffer[K][et]=i.createFramebuffer()}else V.__webglFramebuffer[K]=i.createFramebuffer()}else{if(T.mipmaps.length>0){V.__webglFramebuffer=[];for(let K=0;K<T.mipmaps.length;K++)V.__webglFramebuffer[K]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Et)for(let K=0,et=nt.length;K<et;K++){let bt=n.get(nt[K]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&ut(C)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let K=0;K<nt.length;K++){let et=nt[K];V.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[K]);let bt=r.convert(et.format,et.colorSpace),U=r.convert(et.type),it=E(et.internalFormat,bt,U,et.normalized,et.colorSpace,C.isXRRenderTarget===!0),Q=Qt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,it,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,V.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Pt(V.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xt){e.bindTexture(i.TEXTURE_CUBE_MAP,dt.__webglTexture),lt(i.TEXTURE_CUBE_MAP,T);for(let K=0;K<6;K++)if(T.mipmaps.length>0)for(let et=0;et<T.mipmaps.length;et++)at(V.__webglFramebuffer[K][et],C,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,et);else at(V.__webglFramebuffer[K],C,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);y(T)?_(i.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(Et){for(let K=0,et=nt.length;K<et;K++){let bt=nt[K],U=n.get(bt),it=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(it=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,U.__webglTexture),lt(it,bt),at(V.__webglFramebuffer,C,bt,i.COLOR_ATTACHMENT0+K,it,0),y(bt)&&_(it)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,dt.__webglTexture),lt(K,T),T.mipmaps.length>0)for(let et=0;et<T.mipmaps.length;et++)at(V.__webglFramebuffer[et],C,T,i.COLOR_ATTACHMENT0,K,et);else at(V.__webglFramebuffer,C,T,i.COLOR_ATTACHMENT0,K,0);y(T)?_(K):T.mipmaps.length>0&&i.texParameteri(K,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&ct(C)}function D(C){let T=C.textures;for(let V=0,dt=T.length;V<dt;V++){let nt=T[V];if(y(nt)&&nt.mipmapsAutoUpdate===!0){let xt=b(C),Et=n.get(nt).__webglTexture;e.bindTexture(xt,Et),_(xt),e.unbindTexture()}}}let ie=[];function zt(C){if(C.samples>0){if(ut(C)===!1){let T=C.textures,V=C.width,dt=C.height,nt=i.COLOR_BUFFER_BIT,xt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(C),K=T.length>1;if(K)for(let bt=0;bt<T.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let bt=0;bt<T.length;bt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[bt]);let U=n.get(T[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,U,0)}i.blitFramebuffer(0,0,V,dt,0,0,V,dt,nt,i.NEAREST),l===!0&&(ie.length=0,ie.push(i.COLOR_ATTACHMENT0+bt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&ie.push(xt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let bt=0;bt<T.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[bt]);let U=n.get(T[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,U,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let T=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Qt(C){return Math.min(s.maxSamples,C.samples)}function ut(C){let T=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ye(C){let T=o.render.frame;h.get(C)!==T&&(h.set(C,T),C.update())}function Vt(C,T){let V=C.colorSpace,dt=C.format,nt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==Mr&&V!==vi&&(me.getTransfer(V)===Se?(dt!==Wn||nt!==Mn)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",V)),T}function te(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Jt,this.resetTextureUnits=st,this.getTextureUnits=rt,this.setTextureUnits=Ot,this.setTexture2D=Mt,this.setTexture2DArray=Bt,this.setTexture3D=Zt,this.setTextureCube=It,this.rebindTextures=yt,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=at,this.useMultisampledRTT=ut,this.dispose=z}function J_(i,t){function e(n,s=vi){let r,o=me.getTransfer(s);if(n===Mn)return i.UNSIGNED_BYTE;if(n===qa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ya)return i.UNSIGNED_SHORT_5_5_5_1;if(n===th)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===eh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===jc)return i.BYTE;if(n===Qc)return i.SHORT;if(n===Ks)return i.UNSIGNED_SHORT;if(n===Xa)return i.INT;if(n===kn)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===Vn)return i.HALF_FLOAT;if(n===nh)return i.ALPHA;if(n===ih)return i.RGB;if(n===Wn)return i.RGBA;if(n===ui)return i.DEPTH_COMPONENT;if(n===_i)return i.DEPTH_STENCIL;if(n===Za)return i.RED;if(n===Ja)return i.RED_INTEGER;if(n===Hi)return i.RG;if(n===$a)return i.RG_INTEGER;if(n===Ka)return i.RGBA_INTEGER;if(n===no||n===io||n===so||n===ro)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===no)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===no)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ja||n===Qa||n===tl||n===el)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===el)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nl||n===il||n===sl||n===rl||n===ol||n===oo||n===al)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===nl||n===il)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===rl)return r.COMPRESSED_R11_EAC;if(n===ol)return r.COMPRESSED_SIGNED_R11_EAC;if(n===oo)return r.COMPRESSED_RG11_EAC;if(n===al)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ll||n===cl||n===hl||n===ul||n===fl||n===dl||n===pl||n===ml||n===gl||n===xl||n===_l||n===vl||n===yl||n===Ml)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ll)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ul)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ml)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_l)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ml)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sl||n===El||n===bl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Sl)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===El)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tl||n===wl||n===ao||n===Al)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===as?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var $_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K_=`
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

}`,Sh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Or(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new jn({vertexShader:$_,fragmentShader:K_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ot(new De(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Eh=class extends Jn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,M=typeof XRWebGLBinding<"u",x=new Sh,g={},S=e.getContextAttributes(),y=null,_=null,b=[],E=[],m=new mt,v=null,R=null,A=new fn;A.viewport=new Ue;let I=new fn;I.viewport=new Ue;let L=[A,I],B=new za,P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let Mt=b[tt];return Mt===void 0&&(Mt=new Bs,b[tt]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function(tt){let Mt=b[tt];return Mt===void 0&&(Mt=new Bs,b[tt]=Mt),Mt.getGripSpace()},this.getHand=function(tt){let Mt=b[tt];return Mt===void 0&&(Mt=new Bs,b[tt]=Mt),Mt.getHandSpace()};function W(tt){let Mt=E.indexOf(tt.inputSource);if(Mt===-1)return;let Bt=b[Mt];Bt!==void 0&&(Bt.update(tt.inputSource,tt.frame,c||o),Bt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function q(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",ft);for(let tt=0;tt<b.length;tt++){let Mt=E[tt];Mt!==null&&(E[tt]=null,b[tt].disconnect(Mt))}P=null,z=null,x.reset();for(let tt in g)delete g[tt];if(t.setRenderTarget(y),d=null,f=null,u=null,s=null,_=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(m.width,m.height,!1),R!==null){let tt=R.camera;tt.fov=R.fov,tt.zoom=R.zoom,tt.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",q),s.addEventListener("inputsourceschange",ft),S.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(m),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Bt=null,Zt=null,It=null;S.depth&&(It=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Bt=S.stencil?_i:ui,Zt=S.stencil?as:kn);let H={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(H),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new An(f.textureWidth,f.textureHeight,{format:Wn,type:Mn,depthTexture:new mi(f.textureWidth,f.textureHeight,Zt,void 0,void 0,void 0,void 0,void 0,void 0,Bt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Bt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Bt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new An(d.framebufferWidth,d.framebufferHeight,{format:Wn,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ft(tt){for(let Mt=0;Mt<tt.removed.length;Mt++){let Bt=tt.removed[Mt],Zt=E.indexOf(Bt);Zt>=0&&(E[Zt]=null,b[Zt].disconnect(Bt))}for(let Mt=0;Mt<tt.added.length;Mt++){let Bt=tt.added[Mt],Zt=E.indexOf(Bt);if(Zt===-1){for(let H=0;H<b.length;H++)if(H>=E.length){E.push(Bt),Zt=H;break}else if(E[H]===null){E[H]=Bt,Zt=H;break}if(Zt===-1)break}let It=b[Zt];It&&It.connect(Bt)}}function J(tt,Mt){Mt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(Mt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let Mt=tt.near,Bt=tt.far;x.texture!==null&&(x.depthNear>0&&(Mt=x.depthNear),x.depthFar>0&&(Bt=x.depthFar)),B.near=I.near=A.near=Mt,B.far=I.far=A.far=Bt,(P!==B.near||z!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),P=B.near,z=B.far),B.layers.mask=tt.layers.mask|6,A.layers.mask=B.layers.mask&-5,I.layers.mask=B.layers.mask&-3;let Zt=tt.parent,It=B.cameras;J(B,Zt);for(let H=0;H<It.length;H++)J(It[H],Zt);B.projectionMatrix.copy(A.projectionMatrix),B.projectionMatrixInverse.copy(A.projectionMatrixInverse),R===null&&tt.isPerspectiveCamera&&(R={camera:tt,fov:tt.fov,zoom:tt.zoom}),st(tt,B,Zt)};function st(tt,Mt,Bt){Bt===null?tt.matrix.copy(Mt.matrixWorld):(tt.matrix.copy(Bt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(Mt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(Mt.projectionMatrix),tt.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=ua*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(tt){l=tt,f!==null&&(f.fixedFoveation=tt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=tt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(B)},this.getCameraTexture=function(tt){return g[tt]};let rt=null;function Ot(tt,Mt){if(h=Mt.getViewerPose(c||o),p=Mt,h!==null){let Bt=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let Zt=!1;Bt.length!==B.cameras.length&&(B.cameras.length=0,Zt=!0);for(let Z=0;Z<Bt.length;Z++){let lt=Bt[Z],j=null;if(d!==null)j=d.getViewport(lt);else{let G=u.getViewSubImage(f,lt);j=G.viewport,Z===0&&(t.setRenderTargetTextures(_,G.colorTexture,G.depthStencilTexture),t.setRenderTarget(_))}let O=L[Z];O===void 0&&(O=new fn,O.layers.enable(Z),O.viewport=new Ue,L[Z]=O),O.matrix.fromArray(lt.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(lt.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(j.x,j.y,j.width,j.height),Z===0&&(B.matrix.copy(O.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Zt===!0&&B.cameras.push(O)}let It=s.enabledFeatures;if(It&&It.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){u=n.getBinding();let Z=u.getDepthInformation(Bt[0]);Z&&Z.isValid&&Z.texture&&x.init(Z,s.renderState)}if(It&&It.includes("camera-access")&&M){t.state.unbindTexture(),u=n.getBinding();for(let Z=0;Z<Bt.length;Z++){let lt=Bt[Z].camera;if(lt){let j=g[lt];j||(j=new Or,g[lt]=j);let O=u.getCameraImage(lt);j.sourceTexture=O}}}}for(let Bt=0;Bt<b.length;Bt++){let Zt=E[Bt],It=b[Bt];Zt!==null&&It!==void 0&&It.update(Zt,Mt,c||o)}rt&&rt(tt,Mt),Mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Mt}),p=null}let Jt=new cd;Jt.setAnimationLoop(Ot),this.setAnimationLoop=function(tt){rt=tt},this.dispose=function(){}}},j_=new oe,vd=new ne;vd.set(-1,0,0,0,1,0,0,0,1);function Q_(i,t){function e(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function n(x,g){g.color.getRGB(x.fogColor.value,hh(i)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function s(x,g,S,y,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(x,g):g.isMeshLambertMaterial?(r(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(x,g),u(x,g)):g.isMeshPhongMaterial?(r(x,g),h(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(x,g),f(x,g),g.isMeshPhysicalMaterial&&d(x,g,_)):g.isMeshMatcapMaterial?(r(x,g),p(x,g)):g.isMeshDepthMaterial?r(x,g):g.isMeshDistanceMaterial?(r(x,g),M(x,g)):g.isMeshNormalMaterial?r(x,g):g.isLineBasicMaterial?(o(x,g),g.isLineDashedMaterial&&a(x,g)):g.isPointsMaterial?l(x,g,S,y):g.isSpriteMaterial?c(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,e(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===mn&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,e(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===mn&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,e(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,e(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);let S=t.get(g),y=S.envMap,_=S.envMapRotation;y&&(x.envMap.value=y,x.envMapRotation.value.setFromMatrix4(j_.makeRotationFromEuler(_)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(vd),x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,x.aoMapTransform))}function o(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform))}function a(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function l(x,g,S,y){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*S,x.scale.value=y*.5,g.map&&(x.map.value=g.map,e(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function c(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function h(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function u(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function f(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function d(x,g,S){x.ior.value=g.ior,g.diffuseRoughness>0&&(x.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===mn&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.retroreflectivity>0&&(x.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=S.texture,x.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,x.specularIntensityMapTransform))}function p(x,g){g.matcap&&(x.matcap.value=g.matcap)}function M(x,g){let S=t.get(g).light;x.referencePosition.value.setFromMatrixPosition(S.matrixWorld),x.nearDistance.value=S.shadow.camera.near,x.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tv(i,t,e,n){let s={},r={};function o(S,y){let _=y.program;n.uniformBlockBinding(S,_,s[S.id])}function a(S,y){let _=s[S.id];_===void 0&&(p(S),_=l(S),s[S.id]=_,S.addEventListener("dispose",x));let b=y.program;n.updateUBOMapping(S,b);let E=t.render.frame;r[S.id]!==E&&(c(S),r[S.id]=E)}function l(S){let y=i.createBuffer(),_=S.__size,b=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,_,b),i.bindBuffer(i.UNIFORM_BUFFER,null),y}function c(S){let y=s[S.id],_=S.uniforms,b=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,m=_.length;E<m;E++){let v=_[E];if(Array.isArray(v))for(let R=0,A=v.length;R<A;R++)h(v[R],E,R,b);else h(v,E,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,y,_,b){if(f(S,y,_,b)===!0){let E=S.__offset,m=S.value;if(Array.isArray(m)){let v=0;for(let R=0;R<m.length;R++){let A=m[R],I=M(A,!0);u(A,S.__data,v),v+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else u(m,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,S.__data)}}function u(S,y,_){typeof S=="number"||typeof S=="boolean"?y[_]=S:S.isMatrix3?(y[_]=S.elements[0],y[_+1]=S.elements[1],y[_+2]=S.elements[2],y[_+3]=0,y[_+4]=S.elements[3],y[_+5]=S.elements[4],y[_+6]=S.elements[5],y[_+7]=0,y[_+8]=S.elements[6],y[_+9]=S.elements[7],y[_+10]=S.elements[8],y[_+11]=0):ArrayBuffer.isView(S)?y.set(S.subarray(0,y.length-_),_):S.toArray(y,_)}function f(S,y,_,b){let E=S.value,m=y+"_"+_;if(Array.isArray(E)){b[m]===void 0&&(b[m]=[]);let v=b[m],R=!1;for(let A=0;A<E.length;A++)d(E[A],v,A)===!0&&(R=!0);return R}return d(E,b,m)}function d(S,y,_){if(y[_]===void 0)return typeof S=="number"||typeof S=="boolean"?y[_]=S:ArrayBuffer.isView(S)?y[_]=S.slice():y[_]=S.clone(),!0;{let b=y[_];if(typeof S=="number"||typeof S=="boolean"){if(b!==S)return y[_]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(b.equals(S)===!1)return b.copy(S),!0}}return!1}function p(S){let y=S.uniforms,_=0,b=16;for(let m=0,v=y.length;m<v;m++){let R=Array.isArray(y[m])?y[m]:[y[m]];for(let A=0,I=R.length;A<I;A++){let L=R[A],B=Array.isArray(L.value)?L.value:[L.value],P=Array.isArray(y[m])||Array.isArray(L.value),z=_;for(let q=0,ft=B.length;q<ft;q++){let J=B[q],st=M(J,P),rt=_%b,Ot=rt%st.boundary,Jt=rt+Ot;_+=Ot,Jt!==0&&b-Jt<st.storage&&(_+=b-Jt),q===0&&(z=_),_+=st.storage}let W=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new W((_-z)/Float32Array.BYTES_PER_ELEMENT),L.__offset=z}}let E=_%b;return E>0&&(_+=b-E),S.__size=_,S.__cache={},this}function M(S,y){let _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=16,_.storage=48):S.isMatrix4?(_.boundary=16,_.storage=64):S.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(_.boundary=16,_.storage=S.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",S),y===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function x(S){let y=S.target;y.removeEventListener("dispose",x),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function g(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:o,update:a,dispose:g}}var ev=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ti=null;function nv(){return ti===null&&(ti=new Dr(ev,16,16,Hi,Vn),ti.name="DFG_LUT",ti.minFilter=dn,ti.magFilter=dn,ti.wrapS=Zn,ti.wrapT=Zn,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}var Dl=class{constructor(t={}){let{canvas:e=wf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Mn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let M=d,x=new Set([Ka,$a,Ja]),g=new Set([Mn,kn,Ks,as,qa,Ya]),S=new Uint32Array(4),y=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},b=null,E=null,m=[],v=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,I=!1,L=null,B=null,P=null,z=null;this._outputColorSpace=Ne;let W=0,q=0,ft=null,J=-1,st=null,rt=new Ue,Ot=new Ue,Jt=null,tt=new re(0),Mt=0,Bt=e.width,Zt=e.height,It=1,H=null,ht=null,Z=new Ue(0,0,Bt,Zt),lt=new Ue(0,0,Bt,Zt),j=!1,O=new Ui,G=new ma,k=!1,pt=!1,at=new oe,Pt=new N,vt=new Ue,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yt=!1;function wt(){return ft===null?It:1}let D=n;function ie(w,F){return e.getContext(w,F)}let zt,Qt,ut,ye,Vt,te,C,T,V,dt,nt,xt,Et,K,et,bt,U,it,Q,Tt,_t,St,Yt;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",$t,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",Lt,!1),D===null){let F="webgl2";if(D=ie(F,w),D===null)throw ie(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}le()}catch(w){throw e.removeEventListener("webglcontextlost",$t,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),ee("WebGLRenderer: "+w.message),w}function le(){zt=new dx(D),zt.init(),_t=new J_(D,zt),Qt=new nx(D,zt,t,_t),ut=new Y_(D,zt),Qt.reversedDepthBuffer&&f&&ut.buffers.depth.setReversed(!0),B=D.createFramebuffer(),P=D.createFramebuffer(),z=D.createFramebuffer(),ye=new gx(D),Vt=new D_,te=new Z_(D,zt,ut,Vt,Qt,_t,ye),C=new fx(A),T=new _m(D),St=new tx(D,T),V=new px(D,T,ye,St),dt=new _x(D,V,T,St,ye),it=new xx(D,Qt,te),et=new ix(Vt),nt=new L_(A,C,zt,Qt,St,et),xt=new Q_(A,Vt),Et=new U_,K=new G_(zt),U=new Qg(A,C,ut,dt,p,l),bt=new q_(A,dt,Qt),Yt=new tv(D,ye,Qt,ut),Q=new ex(D,zt,ye),Tt=new mx(D,zt,ye),ye.programs=nt.programs,A.capabilities=Qt,A.extensions=zt,A.properties=Vt,A.renderLists=Et,A.shadowMap=bt,A.state=ut,A.info=ye}M!==Mn&&(R=new yx(M,e.width,e.height,a,s,r));let gt=new Eh(A,D);this.xr=gt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=zt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=zt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return It},this.setPixelRatio=function(w){w!==void 0&&(It=w,this.setSize(Bt,Zt,!1))},this.getSize=function(w){return w.set(Bt,Zt)},this.setSize=function(w,F,$=!0){if(gt.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}Bt=w,Zt=F,e.width=Math.floor(w*It),e.height=Math.floor(F*It),$===!0&&(e.style.width=w+"px",e.style.height=F+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(Bt*It,Zt*It).floor()},this.setDrawingBufferSize=function(w,F,$){Bt=w,Zt=F,It=$,e.width=Math.floor(w*$),e.height=Math.floor(F*$),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(M===Mn){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(rt)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,F,$,X){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,F,$,X),ut.viewport(rt.copy(Z).multiplyScalar(wt()).round())},this.getScissor=function(w){return w.copy(lt)},this.setScissor=function(w,F,$,X){w.isVector4?lt.set(w.x,w.y,w.z,w.w):lt.set(w,F,$,X),ut.scissor(Ot.copy(lt).multiplyScalar(wt()).round())},this.getScissorTest=function(){return j},this.setScissorTest=function(w){ut.setScissorTest(j=w)},this.setOpaqueSort=function(w){H=w},this.setTransparentSort=function(w){ht=w},this.getClearColor=function(w){return w.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,$=!0){let X=0;if(w){let Y=!1;if(ft!==null){let Rt=ft.texture.format;Y=x.has(Rt)}if(Y){let Rt=ft.texture.type,Ht=g.has(Rt),At=U.getClearColor(),Ut=U.getClearAlpha(),Wt=At.r,se=At.g,de=At.b;Ht?(S[0]=Wt,S[1]=se,S[2]=de,S[3]=Ut,D.clearBufferuiv(D.COLOR,0,S)):(y[0]=Wt,y[1]=se,y[2]=de,y[3]=Ut,D.clearBufferiv(D.COLOR,0,y))}else X|=D.COLOR_BUFFER_BIT}F&&(X|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),L=w},this.dispose=function(){e.removeEventListener("webglcontextlost",$t,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),U.dispose(),Et.dispose(),K.dispose(),te.dispose(),Vt.dispose(),C.dispose(),dt.dispose(),V.dispose(),St.dispose(),Yt.dispose(),nt.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",tu),gt.removeEventListener("sessionend",eu),Yi.stop()};function $t(w){w.preventDefault(),br("WebGLRenderer: Context Lost."),I=!0}function ae(){br("WebGLRenderer: Context Restored."),I=!1;let w=ye.autoReset,F=bt.enabled,$=bt.autoUpdate,X=bt.needsUpdate,Y=bt.type;le(),ye.autoReset=w,bt.enabled=F,bt.autoUpdate=$,bt.needsUpdate=X,bt.type=Y}function Lt(w){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function be(w){let F=w.target;F.removeEventListener("dispose",be),Ze(F)}function Ze(w){wi(w),Vt.remove(w)}function wi(w){let F=Vt.get(w).programs;F!==void 0&&(F.forEach(function($){nt.releaseProgram($)}),w.isShaderMaterial&&nt.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,$,X,Y,Rt){F===null&&(F=ct);let Ht=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,At=np(w,F,$,X,Y);ut.setMaterial(X,Ht);let Ut=$.index,Wt=1;if(X.wireframe===!0){if(Ut=V.getWireframeAttribute($),Ut===void 0)return;Wt=2}let se=$.drawRange,de=$.attributes.position,Gt=se.start*Wt,pe=(se.start+se.count)*Wt;Rt!==null&&(Gt=Math.max(Gt,Rt.start*Wt),pe=Math.min(pe,(Rt.start+Rt.count)*Wt)),Ut!==null?(Gt=Math.max(Gt,0),pe=Math.min(pe,Ut.count)):de!=null&&(Gt=Math.max(Gt,0),pe=Math.min(pe,de.count));let Ge=pe-Gt;if(Ge<0||Ge===1/0)return;St.setup(Y,X,At,$,Ut);let Ce,Ae=Q;if(Ut!==null&&(Ce=T.get(Ut),Ae=Tt,Ae.setIndex(Ce)),Y.isMesh)X.wireframe===!0?(ut.setLineWidth(X.wireframeLinewidth*wt()),Ae.setMode(D.LINES)):Ae.setMode(D.TRIANGLES);else if(Y.isLine){let sn=X.linewidth;sn===void 0&&(sn=1),ut.setLineWidth(sn*wt()),Y.isLineSegments?Ae.setMode(D.LINES):Y.isLineLoop?Ae.setMode(D.LINE_LOOP):Ae.setMode(D.LINE_STRIP)}else Y.isPoints?Ae.setMode(D.POINTS):Y.isSprite&&Ae.setMode(D.TRIANGLES);if(Y.isBatchedMesh)if(zt.get("WEBGL_multi_draw"))Ae.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let sn=Y._multiDrawStarts,kt=Y._multiDrawCounts,hn=Y._multiDrawCount,Me=Ut?T.get(Ut).bytesPerElement:1,Zi=Vt.get(X).currentProgram.getUniforms();for(let rn=0;rn<hn;rn++)Zi.setValue(D,"_gl_DrawID",rn),Ae.render(sn[rn]/Me,kt[rn])}else if(Y.isInstancedMesh)Ae.renderInstances(Gt,Ge,Y.count);else if($.isInstancedBufferGeometry){let sn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,kt=Math.min($.instanceCount,sn);Ae.renderInstances(Gt,Ge,kt)}else Ae.render(Gt,Ge)};function Qh(w,F,$,X){L!==null&&w.isNodeMaterial&&L.setObject(X,w),k===!0&&et.setState(w,$,!1),w.transparent===!0&&w.side===Te&&w.forceSinglePass===!1?(w.side=mn,w.needsUpdate=!0,rr(w,F,X),w.side=zi,w.needsUpdate=!0,rr(w,F,X),w.side=Te):rr(w,F,X)}this.compile=function(w,F,$=null){$===null&&($=w),L!==null&&L.renderStart(w,F,$),E=K.get($),E.init(F),v.push(E),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),w!==$&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),E.setupLights(),L!==null&&L.updateLights(E.state.lightsArray),pt=this.localClippingEnabled,k=et.init(this.clippingPlanes,pt),k===!0&&et.setGlobalState(this.clippingPlanes,F),L!==null&&bt.render(E.state.shadowsArray,$,F);let X=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Rt=Y.material;if(Rt)if(Array.isArray(Rt))for(let Ht=0;Ht<Rt.length;Ht++){let At=Rt[Ht];Qh(At,$,F,Y),X.add(At)}else Qh(Rt,$,F,Y),X.add(Rt)}),E=v.pop(),L!==null&&L.renderEnd(),X},this.compileAsync=function(w,F,$=null){let X=this.compile(w,F,$);return new Promise(Y=>{function Rt(){if(X.forEach(function(Ht){let Ut=Vt.get(Ht).currentProgram;(Ut===void 0||Ut.isReady())&&X.delete(Ht)}),X.size===0){Y(w);return}setTimeout(Rt,10)}zt.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Ql=null;function tp(w){Ql&&Ql(w)}function tu(){Yi.stop()}function eu(){Yi.start()}let Yi=new cd;Yi.setAnimationLoop(tp),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(w){Ql=w,gt.setAnimationLoop(w),w===null?Yi.stop():Yi.start()},gt.addEventListener("sessionstart",tu),gt.addEventListener("sessionend",eu),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(w,F);let $=gt.enabled===!0&&gt.isPresenting===!0,X=R!==null&&(ft===null||$)&&R.begin(A,ft);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(F),F=gt.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,F,ft),E=K.get(w,v.length),E.init(F),E.state.textureUnits=te.getTextureUnits(),v.push(E),at.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?G.setFromArrayCamera(F):O.setFromProjectionMatrix(at,Dn,F.reversedDepth),pt=this.localClippingEnabled,k=et.init(this.clippingPlanes,pt),b=Et.get(w,m.length),b.init(),m.push(b),this.info.render.frame++,gt.enabled===!0&&gt.isPresenting===!0){let Ht=A.xr.getDepthSensingMesh();Ht!==null&&tc(Ht,F,-1/0,A.sortObjects)}tc(w,F,0,A.sortObjects),b.finish(),L!==null&&L.updateLights(E.state.lightsArray),A.sortObjects===!0&&b.sort(H,ht),yt=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,yt&&U.addToRenderList(b,w),this.info.autoReset===!0&&this.info.reset(),k===!0&&et.beginShadows();let Y=E.state.shadowsArray;if(bt.render(Y,w,F),k===!0&&et.endShadows(),(X&&R.hasRenderPass())===!1){let Ht=b.opaque,At=b.transmissive;if(E.setupLights(),F.isArrayCamera){let Ut=F.cameras;if(At.length>0)for(let Wt=0,se=Ut.length;Wt<se;Wt++){let de=Ut[Wt];iu(Ht,At,w,de)}yt&&U.render(w);for(let Wt=0,se=Ut.length;Wt<se;Wt++){let de=Ut[Wt];nu(b,w,de,de.viewport)}}else At.length>0&&iu(Ht,At,w,F),yt&&U.render(w),nu(b,w,F)}ft!==null&&q===0&&(te.updateMultisampleRenderTarget(ft),te.updateRenderTargetMipmap(ft)),X&&R.end(A),w.isScene===!0&&w.onAfterRender(A,w,F),St.resetDefaultState(),J=-1,st=null,v.pop(),v.length>0?(E=v[v.length-1],te.setTextureUnits(E.state.textureUnits),k===!0&&et.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,m.pop(),m.length>0?b=m[m.length-1]:b=null,L!==null&&L.renderEnd()};function tc(w,F,$,X){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){let Ht=F.isArrayCamera?G:O;if(!w.frustumCulled||w.intersectsFrustum(Ht)){X&&vt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(at);let At=dt.update(w),Ut=w.material;Ut.visible&&b.push(w,At,Ut,$,vt.z,null,F)}}else if(w.isMesh||w.isLine||w.isPoints){let Ht=F.isArrayCamera?G:O;if(!w.frustumCulled||w.intersectsFrustum(Ht)){let At=dt.update(w),Ut=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),vt.copy(w.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),vt.copy(At.boundingSphere.center)),vt.applyMatrix4(w.matrixWorld).applyMatrix4(at)),Array.isArray(Ut)){let Wt=At.groups;for(let se=0,de=Wt.length;se<de;se++){let Gt=Wt[se],pe=Ut[Gt.materialIndex];pe&&pe.visible&&b.push(w,At,pe,$,vt.z,Gt,F)}}else Ut.visible&&b.push(w,At,Ut,$,vt.z,null,F)}}}let Rt=w.children;for(let Ht=0,At=Rt.length;Ht<At;Ht++)tc(Rt[Ht],F,$,X)}function nu(w,F,$,X){let{opaque:Y,transmissive:Rt,transparent:Ht}=w;E.setupLightsView($),k===!0&&et.setGlobalState(A.clippingPlanes,$),X&&ut.viewport(rt.copy(X)),Y.length>0&&bo(Y,F,$),Rt.length>0&&bo(Rt,F,$),Ht.length>0&&bo(Ht,F,$),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function iu(w,F,$,X){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[X.id]===void 0){let Gt=zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[X.id]=new An(1,1,{generateMipmaps:!0,type:Gt?Vn:Mn,minFilter:xi,samples:Math.max(4,Qt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:me.workingColorSpace})}let Rt=E.state.transmissionRenderTarget[X.id],Ht=X.viewport||rt;Rt.setSize(Ht.z*A.transmissionResolutionScale,Ht.w*A.transmissionResolutionScale);let At=A.getRenderTarget(),Ut=A.getActiveCubeFace(),Wt=A.getActiveMipmapLevel();A.setRenderTarget(Rt),A.getClearColor(tt),Mt=A.getClearAlpha(),Mt<1&&A.setClearColor(16777215,.5),A.clear(),yt&&U.render($);let se=A.toneMapping;A.toneMapping=Qn;let de=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),E.setupLightsView(X),k===!0&&et.setGlobalState(A.clippingPlanes,X),bo(w,$,X),te.updateMultisampleRenderTarget(Rt),te.updateRenderTargetMipmap(Rt),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let pe=0,Ge=F.length;pe<Ge;pe++){let Ce=F[pe],{object:Ae,geometry:sn,material:kt,group:hn}=Ce;if(kt.side===Te&&Ae.layers.test(X.layers)){let Me=kt.side;kt.side=mn,kt.needsUpdate=!0,su(Ae,$,X,sn,kt,hn),kt.side=Me,kt.needsUpdate=!0,Gt=!0}}Gt===!0&&(te.updateMultisampleRenderTarget(Rt),te.updateRenderTargetMipmap(Rt))}A.setRenderTarget(At,Ut,Wt),A.setClearColor(tt,Mt),de!==void 0&&(X.viewport=de),A.toneMapping=se}function bo(w,F,$){let X=F.isScene===!0?F.overrideMaterial:null;for(let Y=0,Rt=w.length;Y<Rt;Y++){let Ht=w[Y],{object:At,geometry:Ut,group:Wt}=Ht,se=Ht.material;se.allowOverride===!0&&X!==null&&(se=X),At.layers.test($.layers)&&su(At,F,$,Ut,se,Wt)}}function su(w,F,$,X,Y,Rt){L!==null&&Y.isNodeMaterial&&L.setObject(w,Y),w.onBeforeRender(A,F,$,X,Y,Rt),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(A,F,$,X,w,Rt),Y.transparent===!0&&Y.side===Te&&Y.forceSinglePass===!1?(Y.side=mn,Y.needsUpdate=!0,A.renderBufferDirect($,F,X,Y,w,Rt),Y.side=zi,Y.needsUpdate=!0,A.renderBufferDirect($,F,X,Y,w,Rt),Y.side=Te):A.renderBufferDirect($,F,X,Y,w,Rt),w.onAfterRender(A,F,$,X,Y,Rt)}function ru(w){let F=0;for(let $ of w)$.texture!==null&&F++;return F}function rr(w,F,$){F.isScene!==!0&&(F=ct);let X=Vt.get(w),Y=E.state.lights,Rt=E.state.shadowsArray,Ht=Y.state.version,At=nt.getParameters(w,Y.state,Rt,F,$,E.state.lightProbeGridArray),Ut=nt.getProgramCacheKey(At),Wt=X.programs;X.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,X.fog=F.fog;let se=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;X.envMap=C.get(w.envMap||X.environment,se),X.envMapRotation=X.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Wt===void 0&&(w.addEventListener("dispose",be),Wt=new Map,X.programs=Wt,X.programVariants=new Map);let de=Wt.get(Ut);if(de!==void 0){if(X.currentProgram===de&&X.lightsStateVersion===Ht)return au(w,At),de}else At.uniforms=nt.getUniforms(w),L!==null&&w.isNodeMaterial&&L.build(w,$,At),w.onBeforeCompile(At,A),de=nt.acquireProgram(At,Ut),Wt.set(Ut,de),X.uniforms=At.uniforms;let Gt=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Gt.clippingPlanes=et.uniform),au(w,At),X.needsLights=sp(w),X.lightsStateVersion=Ht,X.needsLights&&(Gt.ambientLightColor.value=Y.state.ambient,Gt.lightProbe.value=Y.state.probe,Gt.sunLights.value=Y.state.sun,Gt.sunLightShadows.value=Y.state.sunShadow,Gt.directionalLights.value=Y.state.directional,Gt.directionalLightShadows.value=Y.state.directionalShadow,Gt.spotLights.value=Y.state.spot,Gt.spotLightShadows.value=Y.state.spotShadow,Gt.rectAreaLights.value=Y.state.rectArea,Gt.ltc_1.value=Y.state.rectAreaLTC1,Gt.ltc_2.value=Y.state.rectAreaLTC2,Gt.pointLights.value=Y.state.point,Gt.pointLightShadows.value=Y.state.pointShadow,Gt.hemisphereLights.value=Y.state.hemi,Gt.sunShadowMatrix.value=Y.state.sunShadowMatrix,Gt.sunShadowCascade.value=Y.state.sunShadowCascade,Gt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Gt.spotLightMatrix.value=Y.state.spotLightMatrix,Gt.spotLightMap.value=Y.state.spotLightMap,Gt.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.numLightProbeGrids=ru(E.state.lightProbeGridArray),X.currentProgram=de,X.uniformsList=null,de}function ep(w,F,$,X,Y){let Rt=Vt.get(w),Ht=Rt.currentProgram.id+","+X+","+Y,At=Rt.programVariants.get(Ht);return At===void 0?(At=rr(w,F,$),Rt.programVariants.set(Ht,At)):(Rt.currentProgram=At,Rt.uniformsList=null,Rt.outputColorSpace=X,Rt.toneMapping=Y),At}function ou(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=js.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function au(w,F){let $=Vt.get(w);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function np(w,F,$,X,Y){F.isScene!==!0&&(F=ct),te.resetTextureUnits();let Rt=F.fog,Ht=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?F.environment:null,At=ft===null?A.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:me.workingColorSpace,Ut=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Wt=C.get(X.envMap||Ht,Ut),se=X.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,de=!!$.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Gt=!!$.morphAttributes.position,pe=!!$.morphAttributes.normal,Ge=!!$.morphAttributes.color,Ce=Qn;X.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Ce=A.toneMapping);let Ae=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,sn=Ae!==void 0?Ae.length:0,kt=Vt.get(X),hn=E.state.lights;if(k===!0&&(pt===!0||w!==st)){let Oe=w===st&&X.id===J;et.setState(X,w,Oe)}let Me=!1,Zi=!1;X.version===kt.__version?kt.needsLights&&kt.lightsStateVersion!==hn.state.version||Y.isBatchedMesh&&kt.batching===!1||!Y.isBatchedMesh&&kt.batching===!0||Y.isBatchedMesh&&kt.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&kt.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&kt.instancing===!1||!Y.isInstancedMesh&&kt.instancing===!0||Y.isSkinnedMesh&&kt.skinning===!1||!Y.isSkinnedMesh&&kt.skinning===!0||Y.isInstancedMesh&&kt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&kt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&kt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&kt.instancingMorph===!1&&Y.morphTexture!==null||kt.envMap!==Wt||X.fog===!0&&kt.fog!==Rt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==et.numPlanes||kt.numIntersection!==et.numIntersection)||kt.vertexAlphas!==se||kt.vertexTangents!==de||kt.morphTargets!==Gt||kt.morphNormals!==pe||kt.morphColors!==Ge||kt.morphTargetsCount!==sn||kt.numLightProbeGrids!==ru(E.state.lightProbeGridArray)?Me=!0:(kt.outputColorSpace!==At||kt.toneMapping!==Ce)&&(Zi=!0):(Me=!0,kt.__version=X.version);let rn=kt.currentProgram;(Me===!0||Zi===!0)&&(rn=Zi===!0?ep(X,F,Y,At,Ce):rr(X,F,Y),L&&X.isNodeMaterial&&L.onUpdateProgram(X,rn,kt));let To=!1,Ai=!1,Ji=!1,_e=rn.getUniforms(),tn=kt.uniforms;if(ut.useProgram(rn.program)&&(To=!0,Ai=!0,Ji=!0),X.id!==J&&(J=X.id,Ai=!0),To||st!==w){ut.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),_e.setValue(D,"projectionMatrix",w.projectionMatrix),_e.setValue(D,"viewMatrix",w.matrixWorldInverse);let Je=_e.map.cameraPosition;Je!==void 0&&Je.setValue(D,Pt.setFromMatrixPosition(w.matrixWorld)),Qt.logarithmicDepthBuffer&&_e.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&_e.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),st!==w&&(st=w,Ai=!0,Ji=!0)}if(kt.needsLights&&(hn.state.sunShadowMap.length>0&&_e.setValue(D,"sunShadowMap",hn.state.sunShadowMap,te),hn.state.directionalShadowMap.length>0&&_e.setValue(D,"directionalShadowMap",hn.state.directionalShadowMap,te),hn.state.spotShadowMap.length>0&&_e.setValue(D,"spotShadowMap",hn.state.spotShadowMap,te),hn.state.pointShadowMap.length>0&&_e.setValue(D,"pointShadowMap",hn.state.pointShadowMap,te)),Y.isSkinnedMesh){_e.setOptional(D,Y,"bindMatrix"),_e.setOptional(D,Y,"bindMatrixInverse");let Oe=Y.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),_e.setValue(D,"boneTexture",Oe.boneTexture,te))}Y.isBatchedMesh&&(_e.setOptional(D,Y,"batchingTexture"),_e.setValue(D,"batchingTexture",Y._matricesTexture,te),_e.setOptional(D,Y,"batchingIdTexture"),_e.setValue(D,"batchingIdTexture",Y._indirectTexture,te),_e.setOptional(D,Y,"batchingColorTexture"),Y._colorsTexture!==null&&_e.setValue(D,"batchingColorTexture",Y._colorsTexture,te));let On=$.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&it.update(Y,$,rn),(Ai||kt.receiveShadow!==Y.receiveShadow)&&(kt.receiveShadow=Y.receiveShadow,_e.setValue(D,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&F.environment!==null&&(tn.envMapIntensity.value=F.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=nv()),Ai){if(_e.setValue(D,"toneMappingExposure",A.toneMappingExposure),kt.needsLights&&ip(tn,Ji),Rt&&X.fog===!0&&xt.refreshFogUniforms(tn,Rt),xt.refreshMaterialUniforms(tn,X,It,Zt,E.state.transmissionRenderTarget[w.id]),kt.needsLights&&kt.numLightProbeGrids>0){let Oe=_,Je=0;for(let ii of E.state.lightProbeGridArray)ii.texture!==null&&(Oe.textures[Je]=ii.texture,Oe.min[Je]=ii.boundingBox.min,Oe.max[Je]=ii.boundingBox.max,Oe.resolution[Je]=ii.resolution,Je++);for(let ii in Oe)Oe[ii].length=Je;tn.probesSH.value=Oe.textures,tn.probesMin.value=Oe.min,tn.probesMax.value=Oe.max,tn.probesResolution.value=Oe.resolution}js.upload(D,ou(kt),tn,te)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(js.upload(D,ou(kt),tn,te),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&_e.setValue(D,"center",Y.center),_e.setValue(D,"modelViewMatrix",Y.modelViewMatrix),_e.setValue(D,"normalMatrix",Y.normalMatrix),_e.setValue(D,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){let Oe=X.uniformsGroups;for(let Je=0,ii=Oe.length;Je<ii;Je++){let cu=Oe[Je];Yt.update(cu,rn),Yt.bind(cu,rn)}}return rn}function ip(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.sunLights.needsUpdate=F,w.sunLightShadows.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function sp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ft},this.setRenderTargetTextures=function(w,F,$){let X=Vt.get(w);X.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Vt.get(w.texture).__webglTexture=F,Vt.get(w.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:$,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){let $=Vt.get(w);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,$=0){ft=w,W=F,q=$;let X=null,Y=!1,Rt=!1;if(w){let At=Vt.get(w);if(At.__useDefaultFramebuffer!==void 0){ut.bindFramebuffer(D.FRAMEBUFFER,At.__webglFramebuffer),rt.copy(w.viewport),Ot.copy(w.scissor),Jt=w.scissorTest,ut.viewport(rt),ut.scissor(Ot),ut.setScissorTest(Jt),J=-1;return}else if(At.__webglFramebuffer===void 0)te.setupRenderTarget(w);else if(At.__hasExternalTextures)te.rebindTextures(w,Vt.get(w.texture).__webglTexture,Vt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let se=w.depthTexture;if(At.__boundDepthTexture!==se){if(se!==null&&Vt.has(se)&&(w.width!==se.image.width||w.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(w)}}let Ut=w.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(Rt=!0);let Wt=Vt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Wt[F])?X=Wt[F][$]:X=Wt[F],Y=!0):w.samples>0&&te.useMultisampledRTT(w)===!1?X=Vt.get(w).__webglMultisampledFramebuffer:Array.isArray(Wt)?X=Wt[$]:X=Wt,rt.copy(w.viewport),Ot.copy(w.scissor),Jt=w.scissorTest}else rt.copy(Z).multiplyScalar(It).floor(),Ot.copy(lt).multiplyScalar(It).floor(),Jt=j;if($!==0&&(X=B),ut.bindFramebuffer(D.FRAMEBUFFER,X)&&ut.drawBuffers(w,X),ut.viewport(rt),ut.scissor(Ot),ut.setScissorTest(Jt),Y){let At=Vt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,At.__webglTexture,$)}else if(Rt){let At=F;for(let Ut=0;Ut<w.textures.length;Ut++){let Wt=Vt.get(w.textures[Ut]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ut,Wt.__webglTexture,$,At)}}else if(w!==null&&$!==0){let At=Vt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,At.__webglTexture,$)}J=-1};function lu(w){let F=Vt.get(w);return(F.__readFormat!==w.format||F.__readType!==w.type)&&(F.__readFormat=w.format,F.__readType=w.type,F.__formatReadable=Qt.textureFormatReadable(w.format),F.__typeReadable=Qt.textureTypeReadable(w.type)),F}this.readRenderTargetPixels=function(w,F,$,X,Y,Rt,Ht,At=0){if(!(w&&w.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ht!==void 0&&(Ut=Ut[Ht],Array.isArray(Ut)&&(Ut=Ut[0])),Ut){ut.bindFramebuffer(D.FRAMEBUFFER,Ut);try{let Wt=w.textures[At],se=Wt.format,de=Wt.type;w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+At);let Gt=lu(Wt);if(Gt.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Gt.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-X&&$>=0&&$<=w.height-Y&&D.readPixels(F,$,X,Y,_t.convert(se),_t.convert(de),Rt)}finally{let Wt=ft!==null?Vt.get(ft).__webglFramebuffer:null;ut.bindFramebuffer(D.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(w,F,$,X,Y,Rt,Ht,At=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ht!==void 0&&(Ut=Ut[Ht],Array.isArray(Ut)&&(Ut=Ut[0])),Ut)if(F>=0&&F<=w.width-X&&$>=0&&$<=w.height-Y){ut.bindFramebuffer(D.FRAMEBUFFER,Ut);let Wt=w.textures[At],se=Wt.format,de=Wt.type;w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+At);let Gt=lu(Wt);if(Gt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Gt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,pe),D.bufferData(D.PIXEL_PACK_BUFFER,Rt.byteLength,D.STREAM_READ),D.readPixels(F,$,X,Y,_t.convert(se),_t.convert(de),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Ge=ft!==null?Vt.get(ft).__webglFramebuffer:null;ut.bindFramebuffer(D.FRAMEBUFFER,Ge);let Ce=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Rf(D,Ce,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,pe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Rt),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(pe),D.deleteSync(Ce),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,$=0){let X=Math.pow(2,-$),Y=Math.floor(w.image.width*X),Rt=Math.floor(w.image.height*X),Ht=F!==null?F.x:0,At=F!==null?F.y:0;te.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,$,0,0,Ht,At,Y,Rt),ut.unbindTexture()},this.copyTextureToTexture=function(w,F,$=null,X=null,Y=0,Rt=0){let Ht,At,Ut,Wt,se,de,Gt,pe,Ge,Ce=w.isCompressedTexture?w.mipmaps[Rt]:w.image;if($!==null)Ht=$.max.x-$.min.x,At=$.max.y-$.min.y,Ut=$.isBox3?$.max.z-$.min.z:1,Wt=$.min.x,se=$.min.y,de=$.isBox3?$.min.z:0;else{let _e=Math.pow(2,-Y);Ht=Math.floor(Ce.width*_e),At=Math.floor(Ce.height*_e),w.isDataArrayTexture?Ut=Ce.depth:w.isData3DTexture?Ut=Math.floor(Ce.depth*_e):Ut=1,Wt=0,se=0,de=0}X!==null?(Gt=X.x,pe=X.y,Ge=X.z):(Gt=0,pe=0,Ge=0);let Ae=_t.convert(F.format),sn=_t.convert(F.type),kt;F.isData3DTexture?(te.setTexture3D(F,0),kt=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(te.setTexture2DArray(F,0),kt=D.TEXTURE_2D_ARRAY):(te.setTexture2D(F,0),kt=D.TEXTURE_2D),ut.activeTexture(D.TEXTURE0),ut.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),ut.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ut.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let hn=ut.getParameter(D.UNPACK_ROW_LENGTH),Me=ut.getParameter(D.UNPACK_IMAGE_HEIGHT),Zi=ut.getParameter(D.UNPACK_SKIP_PIXELS),rn=ut.getParameter(D.UNPACK_SKIP_ROWS),To=ut.getParameter(D.UNPACK_SKIP_IMAGES);ut.pixelStorei(D.UNPACK_ROW_LENGTH,Ce.width),ut.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ce.height),ut.pixelStorei(D.UNPACK_SKIP_PIXELS,Wt),ut.pixelStorei(D.UNPACK_SKIP_ROWS,se),ut.pixelStorei(D.UNPACK_SKIP_IMAGES,de);let Ai=w.isDataArrayTexture||w.isData3DTexture,Ji=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){let _e=Vt.get(w),tn=Vt.get(F),On=Vt.get(_e.__renderTarget),Oe=Vt.get(tn.__renderTarget);ut.bindFramebuffer(D.READ_FRAMEBUFFER,On.__webglFramebuffer),ut.bindFramebuffer(D.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Je=0;Je<Ut;Je++)Ai&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Vt.get(w).__webglTexture,Y,de+Je),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Vt.get(F).__webglTexture,Rt,Ge+Je)),D.blitFramebuffer(Wt,se,Wt+Ht,se+At,Gt,pe,Gt+Ht,pe+At,D.DEPTH_BUFFER_BIT,D.NEAREST);ut.bindFramebuffer(D.READ_FRAMEBUFFER,null),ut.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||Vt.has(w)){let _e=Vt.get(w),tn=Vt.get(F);ut.bindFramebuffer(D.READ_FRAMEBUFFER,P),ut.bindFramebuffer(D.DRAW_FRAMEBUFFER,z);for(let On=0;On<Ut;On++)Ai?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_e.__webglTexture,Y,de+On):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_e.__webglTexture,Y),Ji?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,tn.__webglTexture,Rt,Ge+On):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,tn.__webglTexture,Rt),Y!==0?D.blitFramebuffer(Wt,se,Wt+Ht,se+At,Gt,pe,Gt+Ht,pe+At,D.COLOR_BUFFER_BIT,D.NEAREST):Ji?D.copyTexSubImage3D(kt,Rt,Gt,pe,Ge+On,Wt,se,Ht,At):D.copyTexSubImage2D(kt,Rt,Gt,pe,Wt,se,Ht,At);ut.bindFramebuffer(D.READ_FRAMEBUFFER,null),ut.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ji?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(kt,Rt,Gt,pe,Ge,Ht,At,Ut,Ae,sn,Ce.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(kt,Rt,Gt,pe,Ge,Ht,At,Ut,Ae,Ce.data):D.texSubImage3D(kt,Rt,Gt,pe,Ge,Ht,At,Ut,Ae,sn,Ce):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Rt,Gt,pe,Ht,At,Ae,sn,Ce.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Rt,Gt,pe,Ce.width,Ce.height,Ae,Ce.data):D.texSubImage2D(D.TEXTURE_2D,Rt,Gt,pe,Ht,At,Ae,sn,Ce);ut.pixelStorei(D.UNPACK_ROW_LENGTH,hn),ut.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Me),ut.pixelStorei(D.UNPACK_SKIP_PIXELS,Zi),ut.pixelStorei(D.UNPACK_SKIP_ROWS,rn),ut.pixelStorei(D.UNPACK_SKIP_IMAGES,To),Rt===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&D.generateMipmap(kt),ut.unbindTexture()},this.initRenderTarget=function(w){Vt.get(w).__webglFramebuffer===void 0&&te.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?te.setTextureCube(w,0):w.isData3DTexture?te.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?te.setTexture2DArray(w,0):te.setTexture2D(w,0),ut.unbindTexture()},this.resetState=function(){W=0,q=0,ft=null,ut.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};function Ee(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ie;l.morphTargetsRelative=a;let c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0,d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=yd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let M=0;M<o[h].length;++M)d.push(o[h][M][f]);let p=yd(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function yd(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new en(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<e;p++){let M=h.getComponent(f,p);a.setComponent(f+u,p,M)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Pe=510,nr=[85,255,425],gn=[-1,0,1,2],qi=[2.6,6.1,9.6],we=11.4,Xn=.9,bh=20,Md=11,sv=2,vn,Ye,Fe,Bh,_n,qe=null,Th=!1,zh=0,tr=null,Ct={pos:null,metroSint:null,metro8:!1,metrobus:!1,troleElev:!1,viaje:!1,pct:null,dist:null,vel:null,nivel:"ligero",noche:!1,rojo:!1,zona:"mixto",pico:!1,llego:!1},mo=new re;function qn(i,t){mo.set(t).convertSRGBToLinear();let e=i.attributes.position.count,n=new Float32Array(e*3);for(let s=0;s<e;s++)n[s*3]=mo.r,n[s*3+1]=mo.g,n[s*3+2]=mo.b;return i.setAttribute("color",new en(n,3)),i}var Kt=(i,t,e,n,s,r,o)=>qn(new Xt(i,t,e).translate(n,s,r),o),cn=(i,t,e=.38)=>qn(new ge(e,e,.32,10).rotateX(Math.PI/2).translate(i,e,t),1447446);function Hh(i,t,e){let n=document.createElement("canvas");n.width=n.height=64;let s=n.getContext("2d"),r=s.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,`rgba(${i},${t},${e},0.95)`),r.addColorStop(.45,`rgba(${i},${t},${e},0.35)`),r.addColorStop(1,`rgba(${i},${t},${e},0)`),s.fillStyle=r,s.fillRect(0,0,64,64);let o=new yn(n);return o.colorSpace=Ne,o}var Xi,Bd,Kl,sr,vo,Zh,Jh,Wl,wh={};function rv(i,t=16777215,e=2831424){let n=i+t+"_"+e;if(wh[n])return wh[n];let s=2502715,r=[],o,a;switch(i){case"hatch":o=4,a=1.85,r=[Kt(o,.8,a,0,.75,0,t),Kt(2.5,.68,a*.86,-.55,1.49,0,s),Kt(2.45,.08,a*.88,-.55,1.86,0,t),Kt(.06,.25,a*.6,o/2,.95,0,10133670)];break;case"sedan":o=4.5,a=1.85,r=[Kt(o,.75,a,0,.72,0,t),Kt(2.3,.62,a*.86,-.15,1.4,0,s),Kt(2.2,.08,a*.88,-.15,1.74,0,t)];break;case"ejec":o=5,a=1.9,r=[Kt(o,.62,a,0,.68,0,t),Kt(2.6,.52,a*.86,-.2,1.25,0,s),Kt(2.5,.07,a*.88,-.2,1.54,0,t),Kt(o*.98,.05,a*1.01,0,.82,0,13225686)];break;case"depor":o=4.4,a=1.95,r=[Kt(o,.5,a,0,.6,0,t),Kt(1.8,.42,a*.82,-.3,1.06,0,s),Kt(1.7,.06,a*.84,-.3,1.28,0,t),Kt(.3,.08,a*.9,-o/2+.2,1.08,0,1118481)];break;case"taxi":o=4.5,a=1.85,r=[Kt(o,.45,a,0,.58,0,16185075),Kt(o,.32,a*1.001,0,.98,0,15217551),Kt(2.3,.62,a*.86,.15,1.45,0,s),Kt(2.2,.08,a*.88,.15,1.79,0,15217551),Kt(.5,.22,.8,.15,1.94,0,16777215)];break;case"suv":o=4.7,a=1.95,r=[Kt(o,.95,a,0,.85,0,t),Kt(3.2,.7,a*.88,-.35,1.67,0,s),Kt(3.1,.09,a*.9,-.35,2.06,0,t)];break;case"micro":o=7.5,a=2.3,r=[Kt(o,1.5,a,0,1.25,0,15526884),Kt(o,.55,a*1.002,0,.75,0,3119698),Kt(o*.92,.6,a*1.004,-.2,1.6,0,s),Kt(o*.95,.12,a,0,2.06,0,13947851)];break;case"torton":o=8.2,a=2.4,r=[Kt(5.6,2.5,a,-1.2,1.95,0,t),Kt(2,1.7,a,2.9,1.45,0,e),Kt(.9,.7,a*.9,3.4,1.95,0,s)];break;case"trailer":o=15,a=2.5,r=[Kt(11.4,2.9,a,-1.7,2.2,0,t),Kt(.2,.3,a,-1.7,.75,0,12597547),Kt(2.8,2.2,a,5.9,1.75,0,e),Kt(1.1,.8,a*.9,6.6,2.35,0,s),Kt(.15,1.6,.15,4.7,3.4,.9,9079434),cn(-5.6,a/2-.12,.5),cn(-5.6,-a/2+.12,.5)];break;case"moto":o=2,a=.6,r=[Kt(1.7,.35,.3,0,.75,0,t),Kt(.5,.75,.42,-.15,1.35,0,e),qn(new Nn(.2,8,6).translate(-.05,1.9,0),1118481),qn(new ge(.3,.3,.12,10).rotateX(Math.PI/2).translate(.75,.3,0),1447446),qn(new ge(.3,.3,.12,10).rotateX(Math.PI/2).translate(-.75,.3,0),1447446)];break}if(i!=="moto"){let c=o/2-.85,h=-o/2+.85,u=a/2-.12,f=o>7?.5:.38;r.push(cn(c,u,f),cn(c,-u,f),cn(h,u,f),cn(h,-u,f))}let l=Ee(r);return l.computeVertexNormals(),wh[n]={geo:l,L:o,W:a}}function yo(i,t,e){let n=rv(i,t,e),s=new ve,r=new ot(n.geo,Xi);r.castShadow=!0,s.add(r);let o=i==="moto"?.95:n.L>7?1.1:.9,a=new ot(new Xt(.08,.18,i==="moto"?.2:n.W*.85),sr);a.position.set(-n.L/2-.02,o,0),s.add(a);let l=new ot(Wl,Bd);l.scale.set(5.5,1,n.W*2.4),l.position.set(-n.L/2-1.6,.06,0),l.visible=!1,s.add(l);let c=new ot(new Xt(.06,.16,i==="moto"?.16:n.W*.8),Zh);c.position.set(n.L/2+.02,o,0),s.add(c);let h=new ot(Wl,Kl);return h.scale.set(9,1,n.W*2.2),h.position.set(n.L/2+4.5,.05,0),h.visible=!1,s.add(h),Ye.add(s),{g:s,stop:a,glow:l,haz:h,L:n.L,tipo:i}}var Eo=[],Xl=[],go,Vi,er,xn,Gh;function fo(i,t,e,n,s,r=0){let o=new ot(new De(i,t).rotateX(-Math.PI/2),new Nt({color:s}));return o.position.set(e,r,n),o.receiveShadow=!0,xn.add(o),o}var Fl=gn.flatMap(i=>nr.map((t,e)=>({x:t+i*Pe,i:e})));function ov(){let i=gn[0]*Pe,t=gn.length*Pe,e=i+t/2;fo(t,420,e,0,14673372,-.02),fo(t,we*2,e,0,3816773,0),fo(t,3,e,we+1.5,13225156,.01),fo(t,3,e,-we-1.5,13225156,.01),Fl.forEach(m=>fo(12,420,m.x,0,3816773,.005));let n=[];for(let m of gn)for(let v=0;v<Pe;v+=10)nr.some(R=>v+10>R-7&&v<R+7)||n.push(new Xt(10,.7,.6).translate(m*Pe+v+5,.35,0));let s=new ot(Ee(n),new Nt({color:12172739}));s.castShadow=s.receiveShadow=!0,xn.add(s),Gh=s;let r=[];for(let m of[1,-1]){for(let v of[Xn,we-.35])r.push(new De(t,.18).rotateX(-Math.PI/2).translate(e,.02,m*v));for(let v of gn)for(let R=0;R<Pe;R+=8.5)if(!nr.some(A=>Math.abs(R-A)<9))for(let A of[4.35,7.85])r.push(new De(3,.16).rotateX(-Math.PI/2).translate(v*Pe+R,.02,m*A))}Fl.forEach(({x:m})=>{for(let v=-we+.6;v<we;v+=1.1)Math.abs(v)>Xn+.3&&r.push(new De(3.2,.6).rotateX(-Math.PI/2).translate(m-7.6,.025,v));r.push(new De(.4,we-Xn).rotateX(-Math.PI/2).translate(m-9.8,.025,(we+Xn)/2)),r.push(new De(.4,we-Xn).rotateX(-Math.PI/2).translate(m+9.8,.025,-(we+Xn)/2))}),xn.add(new ot(Ee(r),new xe({color:15921906})));let o=[15918022,15250592,13227743,16045453,12114110,15123414,14209732,11125984,15778427],a=[];for(let m of[1,-1]){let v=0;for(;v<Pe-6;){let R=Math.min(7+Math.random()*10,Pe-v);if(nr.some(A=>Math.abs(v+R/2-A)<6+R/2)){v+=4;continue}a.push({x:v+R/2,w:R-.8,h:4+Math.random()*(Math.random()<.2?22:9),d:8+Math.random()*8,s:m,dz:Math.random()*1.5,c:o[a.length%o.length]}),v+=R}}let l=new ze(new Xt(1,1,1).translate(0,.5,0),new Nt({color:16777215}),a.length*gn.length);l.castShadow=l.receiveShadow=!0;let c=new oe,h=new je,u=new N,f=new N,d=0;for(let m of gn)for(let v of a)u.set(m*Pe+v.x,0,v.s*(we+3.5+v.d/2+v.dz)),f.set(v.w,v.h,v.d),l.setMatrixAt(d,c.compose(u,h,f)),l.setColorAt(d,mo.set(v.c)),d++;xn.add(l);let p=[];for(let m of[1,-1])for(let v=5;v<Pe;v+=17)nr.some(R=>Math.abs(v-R)<9)||p.push({x:v+Math.random()*3,s:m,e:.8+Math.random()*.5});let M=new ze(new ge(.15,.2,1.4,6).translate(0,.7,0),new Nt({color:8018490}),p.length*gn.length),x=new ze(new qs(1.2,0).translate(0,2.3,0),new Nt({color:5939290,flatShading:!0}),p.length*gn.length);x.castShadow=!0,d=0;for(let m of gn)for(let v of p)u.set(m*Pe+v.x,0,v.s*(we+2.2)),f.setScalar(v.e),c.compose(u,h,f),M.setMatrixAt(d,c),x.setMatrixAt(d,c),d++;xn.add(M,x),go=new ve,xn.add(go);let g=[],S=[],y=[];for(let m of[1,-1])for(let v of gn)for(let R=10;R<Pe;R+=30){let A=v*Pe+R;g.push(new ge(.09,.12,7,6).translate(A,3.5,m*(we+.6)),new Xt(.15,.12,2.2).translate(A,7,m*(we-.4))),S.push(new Xt(.5,.12,.8).translate(A,6.92,m*(we-1.3))),y.push(new De(9,9).rotateX(-Math.PI/2).translate(A,.04,m*(we-2.5)))}go.add(new ot(Ee(g),new Nt({color:7172214})),new ot(Ee(S),Jh));let _=new ot(Ee(y),new xe({map:Kl.map,transparent:!0,depthWrite:!1,blending:gi,opacity:.55}));_.visible=!1,_.name="charcos",go.add(_),Eo=Fl.map(({x:m,i:v})=>{let R=(A,I,L)=>{let B=new ve,P=new Nt({color:3882821}),z=new ot(new ge(.12,.14,6,8),P);z.position.y=3,B.add(z);let W=new ot(new Xt(.14,.14,7),P);W.position.set(0,5.9,-3.5),B.add(W);let q=new ot(new Xt(.45,1.5,.55),new Nt({color:1908514}));q.position.set(-.1,5.2,-6),q.castShadow=!0,B.add(q);let ft=[16722458,16761856,2282347].map((J,st)=>{let rt=new ot(new Nn(.17,10,8),new xe({color:2236962}));return rt.position.set(-.35,5.68-st*.47,-6),rt.userData.on=J,B.add(rt),rt});return B.position.set(A,0,I),B.rotation.y=L,xn.add(B),ft};return{x:m,off:v*7.3,ida:R(m-10.5,we+.9,0),reg:R(m+10.5,-we-.9,Math.PI)}});let b=[15029053,3120750,8084694,14722342,3770341,13651850];Xl=[],Fl.forEach(({x:m},v)=>{for(let R=0;R<3;R++){let A=new ve,I=new ot(new ge(.22,.26,.95,8),new Nt({color:b[(v+R)%b.length]}));I.position.y=1.15,I.castShadow=!0;let L=new ot(new ge(.2,.18,.7,8),new Nt({color:2899543}));L.position.y=.35;let B=new ot(new Nn(.2,10,8),new Nt({color:13209186}));B.position.y=1.85;let P=new ot(new Xt(.12,.5,.12),new xe({color:16765952}));P.position.y=2.6,P.visible=!1,A.add(I,L,B,P);let z=R%2?1:-1,W=z*(we+1.2);A.position.set(m-8.8+R*.8,0,W),xn.add(A),Xl.push({g:A,susto:P,cx:m,dx:-8.8+R*.8,z:W,modo:"espera",t:Math.random()*2,dir:-z})}});let E=(m,v)=>{let R=document.createElement("canvas");R.width=R.height=128;let A=R.getContext("2d");A.fillStyle=v,A.beginPath(),A.arc(64,64,56,0,7),A.fill(),A.fillStyle="#fff",A.font="bold 80px Arial",A.textAlign="center",A.textBaseline="middle",A.fillText(m,64,70);let I=new yn(R);I.colorSpace=Ne;let L=new ve,B=new Ni(new pi({map:I}));B.scale.set(5,5,1),B.position.set(0,7.5,we+2.5),L.add(B);let P=new ot(new ge(.12,.12,5,6),new Nt({color:7829367}));P.position.set(0,2.5,we+2.5),L.add(P);let z=new ot(new De(1.2,we-Xn).rotateX(-Math.PI/2),new xe({color:v}));return z.position.set(0,.03,(we+Xn)/2),L.add(z),L.visible=!1,xn.add(L),L};Vi=E("A","#3987e5"),er=E("B","#d95926")}var kh=[12597547,2976949,1381914,12567753,15921903,8028038,14722342,3120750,9185828,2504266],av=[1381914,2504266,15921903,3816770,12720152,12567753],En=[],Ft,Sd,us,Vh="",ni=i=>i[Math.floor(Math.random()*i.length)];function zd(){let i=["micro","micro","torton","sedan","sedan","taxi","suv"],t=["ejec","ejec","suv","suv","depor","sedan"],e=Ct.zona==="popular"?i:Ct.zona==="lujo"?t:[...i.slice(0,4),...t.slice(0,4)];return Ct.pico&&(e=[...e,"torton","trailer","trailer","torton","trailer"]),ni(e)}function Ah(i,t,e,n,s){let r=ni((i==="ejec"||i==="suv"||i==="depor")&&Ct.zona==="lujo"?av:kh),o=2831424;i==="depor"&&(r=ni([12720152,15921903,1381914,14722342])),(i==="torton"||i==="trailer")&&(r=ni([15921902,15262416,14277846]),o=ni([12597547,2056104,15921906])),i==="moto"&&(r=ni([12986408,1402304,2236962]),o=ni([3622735,7162945,1793568]));let l={...yo(i,r,o),dir:t,z:e,x:n,v:s*.7,v0:s,a:0,frena:0,zLane:e,fase:Math.random()*6};return l.g.rotation.y=t>0?0:Math.PI,l.haz.visible=Ct.noche,En.push(l),l}function Hd(){for(let s of En.splice(0))s!==Ft&&Ye.remove(s.g);En.push(Ft);let i=Ct.nivel==="pesado",t=Ft.x,e=i?8.5:36,n=i?7:15;for(let s of[1,-1])for(let r=0;r<3;r++){if(r===0&&Ct.metrobus)continue;let o=s*qi[r];for(let a=t-80+Math.random()*10;a<t+150;a+=e*(.8+Math.random()*.6))s>0&&r===1&&a>t-(i?13:30)&&a<t+(i?10:40)||!i&&Math.random()<.35||Ah(zd(),s,o,a,n*(.85+Math.random()*.3)*(s<0?1.1:1))}Sd=Ah("taxi",1,qi[1],t-(i?7.5:12),12),Sd.esTaxi=!0;for(let s of[1,-1])for(let r of[4.35,7.85])for(let o=0;o<2;o++)Ah("moto",s,s*r,t-60+Math.random()*180,19+Math.random()*4)}var Fn=0,Ei=0;function Gd(){let i=null;for(let t of Eo){let e=t.x-10-Ft.x;e>-1&&(!i||e<i.d)&&(i={s:t,d:e})}return i}function $h(i){let t=Gd();if(t&&t.s===i&&t.d<90){if(Ct.rojo)return"rojo";if(Ft.v>1.5)return"verde"}let e=((Fn+i.off)%bh+bh)%bh;return e<Md?"verde":e<Md+sv?"amarillo":"rojo"}var cs={a:1.6,b:3,T:1.1,s0:2.2};function lv(i){for(let t of Eo){let e=i.dir>0?t.x-10:t.x+10,n=(e-i.x)*i.dir;if(n>0&&n<70){let s=$h(t);return s==="rojo"||s==="amarillo"&&n>i.v*i.v/(2*cs.b)+2?e:null}}return null}function Rh(i){for(let t of En)t.x+=i}var Ed=!1;function cv(i){Fn+=i;let t;if(Ct.rojo||Ct.llego?t=0:Ct.vel!=null?t=Ct.vel/3.6:t=Ct.nivel==="pesado"?7:13,Ft.a=(t-Ft.v)*1.2,Ft.v=Math.max(0,Ft.v+Ft.a*i),Ft.x+=Ft.v*i,Ct.rojo&&!Ed){let r=Gd();if(r&&r.d>3){let o=-(r.d-3);Rh(o),Ei-=o}}Ed=Ct.rojo;let e={};for(let r of En)r.tipo!=="moto"&&r!==Ft&&(e[r.dir+":"+r.zLane]||=[]).push(r);(e["1:"+qi[1]]||=[]).push(Ft);for(let r in e){let o=e[r].sort((a,l)=>(l.x-a.x)*l.dir);for(let a=0;a<o.length;a++){let l=o[a];if(l===Ft)continue;let c=o[a-1];l.esTaxi&&(l.v0=Math.max(9,Ft.v+3));let h=1e9,u=0;c&&(h=(c.x-l.x)*l.dir-(c.L+l.L)/2,u=l.v-c.v);let f=lv(l);if(f!=null){let M=(f-l.x)*l.dir-l.L/2;M<h&&(h=M,u=l.v)}l.dir>0&&l.zLane===qi[1]&&c===Ft&&h<0&&(l.x=Ft.x-(Ft.L+l.L)/2-1.5,l.v=Ft.v);let d=cs.s0+Math.max(0,l.v*cs.T+l.v*u/(2*Math.sqrt(cs.a*cs.b))),p=cs.a*(1-Math.pow(l.v/l.v0,4)-Math.pow(d/Math.max(h,.1),2));Ct.nivel==="pesado"&&Math.random()<.0015&&(l.frena=1.2),l.frena>0&&(l.frena-=i,p=Math.min(p,-3.5)),p=Math.max(-8,Math.min(cs.a,p)),l.a=p,l.v=Math.max(0,l.v+p*i),l.x+=l.v*l.dir*i}for(let a=0;a<o.length;a++)if(o[a]===Ft&&o[a-1]){let l=o[a-1],c=l.x-Ft.x-(l.L+Ft.L)/2;c<4&&(l.x+=4-c+(Ft.v>l.v?30:0))}}for(let r of En)r.tipo==="moto"&&(r.fase+=i,r.v=r.v0,r.x+=r.v*r.dir*i,r.z=r.zLane+Math.sin(r.fase*.9)*.6,r.a=0);let n=Ft.x,s=Ct.nivel==="pesado";for(let r of En){if(r===Ft)continue;let o=r.x-n;if(r.tipo==="moto"){r.dir>0&&o>170?r.x=n-100-Math.random()*30:r.dir>0&&o<-110?r.x=n+160:r.dir<0&&o<-110&&(r.x=n+160+Math.random()*40);continue}if(r.esTaxi){(o<-60||o>0)&&(r.x=n-(Ft.L+r.L)/2-3,r.v=Ft.v);continue}r.dir>0&&o>170?(r.x=hv(r)-(s?9:30)*(.8+Math.random()*.5),r.v=r.v0*.6):r.dir>0&&o<-110?r.x=bd(r)+(s?9:30):r.dir<0&&o<-110&&(r.x=bd(r)+(s?10:34)*(.8+Math.random()*.5),r.v=r.v0*.8)}Ft.x>Pe&&(Rh(-Pe),Ei+=Pe),Ft.x<-Pe/2&&(Rh(Pe),Ei-=Pe);for(let r of Xl){let o=Eo.find(h=>h.x===r.cx),a=$h(o)==="rojo",l=r.cx-7.6,c=h=>En.some(u=>u.tipo==="moto"&&Math.abs(u.z-h)<1.6&&(l-u.x)*u.dir>-1&&(l-u.x)*u.dir<24);if(r.modo==="espera")r.t-=i,a&&r.t<=0&&!c(r.z+r.dir*2)&&(r.modo="cruza");else if(r.modo==="cruza"){let h=r.z+r.dir*(a?1.4:2.6)*i;c(h+r.dir*1.2)&&Math.abs(r.z)<we?(r.modo="huye",r.dir=-r.dir):(r.z=h,Math.abs(r.z)>=we+1.2&&Math.sign(r.z)===Math.sign(r.dir)&&(r.modo="espera",r.t=2+Math.random()*3,r.dir=-Math.sign(r.z)))}else r.z+=r.dir*3.4*i,(Math.abs(r.z)>=we+1.2||Math.abs(r.z)<Xn+.2)&&(r.modo="espera",r.t=1.2+Math.random()*1.5,Math.abs(r.z)>=we+1.2&&(r.dir=-Math.sign(r.z)));r.g.position.z=r.z,r.susto.visible=r.modo==="huye",r.g.position.y=r.modo!=="espera"?Math.abs(Math.sin(Fn*(r.modo==="huye"?16:9)))*.08:0}}function hv(i){let t=1/0;for(let e of En)e.dir===i.dir&&e.zLane===i.zLane&&e!==i&&(t=Math.min(t,e.x));return Math.min(t,Ft.x-20)}function bd(i){let t=-1/0;for(let e of En)e.dir===i.dir&&e.zLane===i.zLane&&e!==i&&(t=Math.max(t,e.x));return Math.max(t,Ft.x+60)}function ql(){let i=Ct.noche,t=zv(i),e=typeof Jl<"u"&&Jl==="real";Ye.background=t.t,Ye.fog=new Ar(t.horiz,e?180:110,e?560:320),hs&&(hs.emissive.set(i?16777215:0),hs.emissiveIntensity=i?.9:0),Bh.intensity=i?.45:1.7,_n.intensity=i?.25:2.3,_n.color.set(i?9414399:16777215),Zh.color.set(i?16774856:14277071),Jh.color.set(i?16769946:9079424),go.getObjectByName("charcos").visible=i;for(let n of En)n.haz.visible=i}var kd={atras:[-9.5,6.4,0,22,1],diag:[-24,36,-13,8],cerca:[-13,10,-7,6],arriba:[-6,70,-.5,6],propia:[-24,36,-13,8]},uv={atras:[-9.5,6.4,0,22,1],diag:[-50,75,-28,24],cerca:[-16,12,-8,10],arriba:[-10,150,-1,22],propia:[-50,75,-28,24]},Td={atras:"Atr\xE1s",diag:"Diagonal",cerca:"Cerca",arriba:"Arriba",propia:"Personalizada"},wd={yaw:.55,pitch:.62,dist:55},Sn=(()=>{try{return{...wd,...JSON.parse(localStorage.getItem("vista3dPropia")||"{}")}}catch{return{...wd}}})();function Ad(){try{localStorage.setItem("vista3dPropia",JSON.stringify(Sn))}catch{}}var Ch=["atras","diag","cerca","arriba","propia"],Ve=(()=>{try{return localStorage.getItem("vista3dCam3")||"atras"}catch{return"atras"}})();kd[Ve]||(Ve="atras");var bi=new N,Ti=new N;function Vd(i,t){let[e,n,s,r,o=0]=kd[Ve],a=new N(Ft.x+e,n,Ft.z+s),l=new N(Ft.x+r,o,Ft.z+(Ve==="atras"?0:3));if(t)bi.copy(a),Ti.copy(l);else{let c=1-Math.exp(-i*3);bi.lerp(a,c),Ti.lerp(l,c)}Fe.position.copy(bi),Fe.lookAt(Ti),_n.position.set(Ft.x+25,45,Ft.z+30),_n.target.position.set(Ft.x,0,Ft.z)}function fv(){for(let t of En){t.g.position.set(t.x,0,t.z);let e=t.tipo!=="moto"&&(t.a<-.6||t.v<.4);t.stop.material=e?vo:sr,t.glow.visible=e||Ct.noche&&t.tipo!=="moto",t.glow.scale.x=e?5.5:2.5}us.position.y=3.3+Math.sin(Fn*3)*.2,us.rotation.y+=.03;for(let t of Eo){let e=$h(t),n=e==="rojo"?0:e==="amarillo"?1:2;for(let s of[t.ida,t.reg])s.forEach((r,o)=>r.material.color.set(o===n?r.userData.on:2236962))}for(let t of Xl)t.g.position.x=t.cx+t.dx;let i=Ft.x+Ei;if(Ct.viaje&&Ct.pct!=null&&Ct.dist){let t=Ct.dist*1e3,e=i-Math.min(1,Ct.pct)*t,n=e+t;Vi.position.x=e-Ei,er.position.x=n-Ei,Vi.visible=Math.abs(Vi.position.x-Ft.x)<300,er.visible=Math.abs(er.position.x-Ft.x)<300}else Ct.viaje&&Ct._a!=null?(Vi.position.x=Ct._a-Ei,Vi.visible=Math.abs(Vi.position.x-Ft.x)<300,er.visible=!1):Vi.visible=er.visible=!1}function dv(){vn=new Dl({antialias:!0,powerPreference:"high-performance"}),vn.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),vn.shadowMap.enabled=!0,vn.shadowMap.type=Ha,vn.outputColorSpace=Ne,vn.domElement.style.cssText="display:block;width:100%;height:100%",Ye=new Rr,Fe=new fn(30,1,.5,700),Bh=new $r(15266040,10134421,1.7),_n=new Qr(16777215,2.3),_n.castShadow=!0,_n.shadow.mapSize.set(1024,1024),Object.assign(_n.shadow.camera,{left:-45,right:45,top:45,bottom:-45,near:1,far:160}),_n.shadow.bias=-6e-4,Ye.add(Bh,_n,_n.target),Xi=new Nt({vertexColors:!0}),Bd=new xe({map:Hh(255,30,20),transparent:!0,depthWrite:!1,blending:gi}),Kl=new xe({map:Hh(255,240,190),transparent:!0,depthWrite:!1,blending:gi,opacity:.8}),sr=new xe({color:5901581}),vo=new xe({color:16722458}),Zh=new xe({color:14277071}),Jh=new xe({color:9079424}),Wl=new De(1,1).rotateX(-Math.PI/2),xn=new ve,Ye.add(xn),ov(),mv(),Ft={...yo("hatch",16053490),dir:1,z:qi[1],x:40,v:0,v0:15,a:0,frena:0,zLane:qi[1]},us=new ot(new Br(.55,1.1,4).rotateX(Math.PI),new xe({color:3770341})),us.position.y=3.4,Ft.g.add(us),Hd(),Vh=Ct.nivel+Ct.zona+Ct.pico+Ct.metrobus,ql(),Vd(0,!0)}function Hl(){if(!qe)return;let i=qe.clientWidth,t=qe.clientHeight;!i||!t||(vn.setSize(i,t,!1),Fe.aspect=i/t,Fe.fov=Ve==="atras"||Ve==="propia"?Fe.aspect<1?62:48:Fe.aspect<1?46:Fe.aspect>1.8?21:27,Fe.updateProjectionMatrix())}var xo=0,Ol=0,Ih=0,pv=0;function Wd(i){if(zh=requestAnimationFrame(Wd),document.hidden){xo=i;return}let t=Math.min(.05,xo?(i-xo)/1e3:.016);if(xo=i,qt&&qt.listo&&Ct.pos)qv(t),Mi(t);else{let e=Math.ceil(t/.02);for(let n=0;n<e;n++)cv(t/e);fv(),gv(t),Vd(t)}vn.render(Ye,Fe),Ol+=t,Ih++,Ol>2&&(Ih/Ol<28&&vn.shadowMap.enabled&&++pv>1&&(vn.shadowMap.enabled=!1,Ye.traverse(n=>{n.material&&(n.material.needsUpdate=!0)})),Ol=0,Ih=0)}var Ph=null;function Xd(i){Ph||(Ph=Hh(255,255,255));let t=new ve;t.visible=!1,t.userData.fases=[];let e=new Xt(.28,.12,.28),n=new De(1.6,1.6).rotateX(-Math.PI/2),s=new oe,r=new re;for(let o=0;o<3;o++){let a=i.filter(f=>f.f===o);if(!a.length){t.userData.fases.push(null);continue}let l=new xe({color:16777215}),c=new xe({map:Ph,transparent:!0,depthWrite:!1,blending:gi}),h=new ze(e,l,a.length),u=new ze(n,c,a.length);a.forEach((f,d)=>{s.makeTranslation(f.x,(f.y||0)+.08,f.z),h.setMatrixAt(d,s),s.makeTranslation(f.x,(f.y||0)+.1,f.z),u.setMatrixAt(d,s),r.set(f.c),h.setColorAt(d,r),u.setColorAt(d,r)}),u.renderOrder=3,t.add(h,u),t.userData.fases.push({mb:l,mh:c})}return t}function qd(i,t){if(!i||(i.visible=!!Ct.noche,!Ct.noche))return;let e=Math.floor(t*7)%3;i.userData.fases.forEach((n,s)=>{if(!n)return;let r=s===e,o=r?1:.18;n.mb.color.setScalar(o),n.mh.opacity=r?.95:.12})}var Wi={carril:16052710,orilla:3134407,centro:16757504,metrobus:16764723};function Yd(){return Ee([Kt(12,2.6,2.5,0,1.75,0,2061280),Kt(11.2,1,2.52,-.2,2.25,0,1520207),Kt(12,.25,2.54,0,1,0,16777215),Kt(3.4,.4,1.6,-.5,3.25,0,1727672),Kt(5.6,.08,.08,-2.8,4.6,.45,2763306).rotateZ(0),Kt(5.6,.08,.08,-2.8,4.6,-.45,2763306),cn(-3.8,1.2,.5),cn(-3.8,-1.2,.5),cn(3.8,1.2,.5),cn(3.8,-1.2,.5)])}function Zd(){return Ee([Kt(8.6,2.8,2.55,-4.6,1.75,0,12986408),Kt(8.6,2.8,2.55,4.6,1.75,0,12986408),Kt(.6,2.4,2.3,0,1.65,0,5903380),Kt(7.8,1,2.57,-4.6,2.25,0,2241087),Kt(7.8,1,2.57,4.6,2.25,0,2241087),Kt(17.8,.2,2.58,0,1,0,15921906),cn(-7.4,1.2,.5),cn(-7.4,-1.2,.5),cn(-2,1.2,.5),cn(-2,-1.2,.5),cn(7.4,1.2,.5),cn(7.4,-1.2,.5)])}function Yl(i,t,e){let n=new oe,s=new je,r=new N,o=new N(1,1,1),a=new N(0,1,0),l=0;for(let c of t){if(l>=i.instanceMatrix.count)break;r.set(c.x,c.y,c.z),s.setFromAxisAngle(a,c.r),i.setMatrixAt(l++,n.compose(r,s,o))}i.count=l,i.instanceMatrix.needsUpdate=!0}function Rd(i,t,e,n,s,r,o,a,l){i.t=(i.t||Math.random()*40)+t;let c=i.cum[i.cum.length-1],h=i.periodo*e,u=Math.max(h,c+n+60);for(let f of[1,-1]){let d=(i.t+(f<0?i.periodo/2:0))*e%u;for(let p=0;p*h<u&&p<30;p++){let M=(d+p*h)%u-30;for(let x=0;x<s;x++){let g=M-x*r;if(g<0||g>c)continue;f<0&&(g=c-g);let S=Re(i,g),y=S.dx*f,_=S.dz*f,b=o;l.push({x:S.x-_*b,y:a,z:S.z+y*b,r:bn(y,_)})}}}}var nn=null;function Jd(){return Ee([Kt(14.6,3.1,2.8,0,1.95,0,15759898),Kt(13.4,.95,2.84,0,2.45,0,2241087),Kt(14.6,.25,2.82,0,1,0,15921902),Kt(14,.25,2.4,0,3.6,0,13223613),qn(new ge(.4,.4,2.4,8).rotateX(Math.PI/2).translate(-5.2,.4,0),2236962),qn(new ge(.4,.4,2.4,8).rotateX(Math.PI/2).translate(5.2,.4,0),2236962)])}function mv(){let i=new ve;i.visible=!1,xn.add(i);let t=gn[0]*Pe,e=gn.length*Pe,n=t+e/2,s=new ve;s.add(new ot(new De(e,3.6).rotateX(-Math.PI/2).translate(n,.05,0),new Nt({color:7037528})));let r=[-.72,.72].map(x=>new Xt(e,.12,.1).translate(n,.15,x));s.add(new ot(Ee(r),new Nt({color:10133670}))),i.add(s);let o=new ve,a=[];a.push(new Xt(e,1.2,4.4).translate(n,7.4,0));for(let x=t;x<t+e;x+=25)a.push(new Xt(1.2,6.8,1.6).translate(x,3.4,0));let l=new ot(Ee(a),new Nt({color:12170925}));l.castShadow=l.receiveShadow=!0,o.add(l),i.add(o);let c=new ze(Jd(),Xi,120);c.castShadow=!0,c.count=0,Ye.add(c);let h=new ze(Yd(),Xi,40);h.castShadow=!0,h.count=0,Ye.add(h);let u=[];for(let x of[1,-1])for(let g of[Xn+.15,4.35])u.push(new De(e,.25).rotateX(-Math.PI/2).translate(n,.03,x*g));for(let x of[1,-1])for(let g of gn)for(let S=0;S<Pe;S+=3)u.push(new Xt(1.4,.18,.35).translate(g*Pe+S,.09,x*4.35));let f=new ot(Ee(u.map(Kh)),new Nt({color:15909376}));f.visible=!1,xn.add(f);let d=new ze(Zd(),Xi,30);d.castShadow=!0,d.count=0,Ye.add(d);let p=[];for(let x of[1,-1])for(let g of gn)for(let S=0;S<Pe;S+=4){let y=g*Pe+S,_=Math.floor(S/4)%3;nr.some(b=>Math.abs(S-b)<9)||p.push({x:y,z:x*4.35,c:Wi.carril,f:_},{x:y,z:x*7.85,c:Wi.carril,f:_}),p.push({x:y,z:x*(we-.35),c:Wi.orilla,f:_},{x:y,z:x*(Xn+.15),c:Wi.centro,f:_})}let M=Xd(p);xn.add(M),nn={g:i,via:s,vd:o,tren:c,trole:h,mbl:f,mbus:d,luces:M,t:0}}function gv(i){if(!nn)return;qd(nn.luces,Fn),nn.mbl.visible=!!Ct.metrobus;{let M=[];if(Ct.metrobus)for(let S of[1,-1]){let y=(nn.t+(S<0?20:0))*11%440;for(let _=-2;_<=2;_++){let b=Ft.x+S*(y+_*440-120);Math.abs(b-Ft.x)<260&&M.push({x:b,y:0,z:S*qi[0],r:S>0?0:Math.PI})}}Yl(nn.mbus,M)}let t=!Ct.metroSint&&!Ct.metro8&&Ct.troleElev;{let M=[];if(t)for(let S of[1,-1]){let y=(nn.t+(S<0?15:0))*12%360;for(let _=-2;_<=2;_++){let b=Ft.x+S*(y+_*360-150);Math.abs(b-Ft.x)<280&&M.push({x:b,y:8,z:S*1.1,r:S>0?0:Math.PI})}}Yl(nn.trole,M)}let e=Ct.metroSint||(Ct.metro8?"s":null)||(t?"e":null);nn.g.visible=!!e,nn.via.visible=e==="s",nn.vd.visible=e==="e",Gh&&(Gh.visible=e!=="s");let n=nn.tren;if(n.visible=!!e&&!(qt&&qt.listo&&Ct.pos),!e||t){n.count=0,nn.t+=i;return}nn.t+=i;let s=16,r=Ct.metro8?6:9,o=r*15.3,a=Ct.metro8?8:60,l=e==="e"?8:.15,c=new oe,h=new je,u=new N,f=new N(1,1,1),d=0,p=520;for(let M of[1,-1]){let x=(nn.t+(M<0?a/2:0))*s,g=a*s;for(let S=-Math.ceil(p/g)-1;S<=Math.ceil(p/g)+1;S++){let y=x%g+S*g-p/2;if(!(a>=30&&S!==0))for(let _=0;_<r&&d<n.instanceMatrix.count;_++){let b=Ft.x+M*(y-_*15.3);Math.abs(b-Ft.x)>300||(h.setFromAxisAngle(new N(0,1,0),M>0?0:Math.PI),u.set(b,l,(M>0,0)),n.setMatrixAt(d++,c.compose(u,h,f)))}}}n.count=d,n.instanceMatrix.needsUpdate=!0}var qt=null,$d=110540,Cd={motorway:20,trunk:18,primary:15,secondary:12,tertiary:10,unclassified:8,residential:7,living_street:6,service:4.5,link:7},Bl={motorway:.06,trunk:.058,primary:.055,secondary:.05,tertiary:.045,link:.044,unclassified:.04,residential:.035,living_street:.033,service:.03};function He(i,t,e){return[(e-i.lon)*111320*Math.cos(i.lat*Math.PI/180),-(t-i.lat)*$d]}function Kh(i){i=i.index?i.toNonIndexed():i;for(let t of Object.keys(i.attributes))t!=="position"&&t!=="color"&&i.deleteAttribute(t);return i}function In(i,t,e,n){let s=t/2;for(let r=1;r<i.length;r++){let[o,a]=i[r-1],[l,c]=i[r],h=l-o,u=c-a,f=Math.hypot(h,u);if(f<.05)continue;let d=-u/f*s,p=h/f*s,M=new Ie;M.setAttribute("position",new he([o+d,e,a+p,l+d,e,c+p,o-d,e,a-p,o-d,e,a-p,l+d,e,c+p,l-d,e,c-p],3)),n.push(M)}for(let r=0;r<i.length;r++)n.push(Kh(new ks(s,10).rotateX(-Math.PI/2).translate(i[r][0],e,i[r][1])))}function _o(i){let t=[0];for(let e=1;e<i.length;e++)t.push(t[e-1]+Math.hypot(i[e][0]-i[e-1][0],i[e][1]-i[e-1][1]));return t}function Re(i,t){let e=i.p,n=i.cum;t=Math.max(0,Math.min(n[n.length-1],t));let s=1;for(;s<n.length-1&&n[s]<t;)s++;let r=(t-n[s-1])/Math.max(1e-6,n[s]-n[s-1]),o=e[s][0]-e[s-1][0],a=e[s][1]-e[s-1][1],l=Math.hypot(o,a)||1;return{x:e[s-1][0]+o*r,z:e[s-1][1]+a*r,dx:o/l,dz:a/l}}var bn=(i,t)=>Math.atan2(-t,i),Lh={};function xv(i){if(Lh[i])return Lh[i];let t=document.createElement("canvas"),e=t.getContext("2d");e.font="bold 44px Arial",t.width=Math.min(1024,Math.ceil(e.measureText(i).width)+28),t.height=64,e.font="bold 44px Arial",e.textBaseline="middle",e.lineJoin="round",e.lineWidth=9,e.strokeStyle="rgba(20,20,24,.85)",e.strokeText(i,14,34),e.fillStyle="#fff",e.fillText(i,14,34);let n=new yn(t);return n.colorSpace=Ne,n.anisotropy=4,Lh[i]={mat:new xe({map:n,transparent:!0,depthWrite:!1}),ar:t.width/t.height}}function Zl(i){let t=document.createElement("canvas"),e=t.getContext("2d");e.font="bold 56px Arial";let n=Math.ceil(e.measureText(i).width)+56;t.width=n,t.height=96,e.font="bold 56px Arial",e.fillStyle="rgba(0,0,0,.25)",e.beginPath(),e.roundRect(6,10,n-8,84,22),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.roundRect(2,4,n-8,84,22),e.fill(),e.fillStyle="#1d1d1b",e.textBaseline="middle",e.fillText(i,26,48);let s=new yn(t);s.colorSpace=Ne;let r=new Ni(new pi({map:s,depthTest:!1}));return r.scale.set(n/96*5.5,5.5,1),r.renderOrder=5,r}var Dh={};function _v(i){if(Dh[i])return Dh[i];let t=document.createElement("canvas"),e=t.getContext("2d"),n="bold 64px Arial";e.font=n;let s=Math.min(1400,Math.ceil(e.measureText(i).width)+90),r=120,o=196;t.width=s,t.height=o;let a=[Math.round(s*.1),o-4],l=Math.round(s*.16),c=Math.round(s*.16)+Math.min(70,s*.16),h=f=>{e.beginPath(),e.roundRect(f,f,s-f*2,r-f*2,14-f/2),e.fill()};e.fillStyle="#111",e.beginPath(),e.moveTo(l-9,r-12),e.lineTo(a[0],a[1]),e.lineTo(c+9,r-12),e.closePath(),e.fill(),h(0),e.fillStyle="#fff",e.beginPath(),e.moveTo(l,r-14),e.lineTo(a[0]+2,a[1]-13),e.lineTo(c,r-14),e.closePath(),e.fill(),h(9),e.fillStyle="#fff",e.fillRect(l+1,r-16,c-l-2,10),e.fillStyle="#111",e.font=n,e.textBaseline="middle",e.textAlign="center",e.fillText(i,s/2,61,s-60);let u=new yn(t);return u.colorSpace=Ne,u.anisotropy=4,Dh[i]={t:u,ar:s/o,cx:a[0]/s,cy:4/o}}function vv(i){let e=new Map,n=[],s=[];i.forEach((o,a)=>{if(!(!o.nombre||o.tipo==="service"))for(let l=1;l<o.p.length;l++){let[c,h]=o.p[l-1],[u,f]=o.p[l],d={ci:a,x1:c,z1:h,x2:u,z2:f};s.push(d);for(let p=Math.floor(Math.min(c,u)/40);p<=Math.floor(Math.max(c,u)/40);p++)for(let M=Math.floor(Math.min(h,f)/40);M<=Math.floor(Math.max(h,f)/40);M++){let x=p+","+M;(e.get(x)||e.set(x,[]).get(x)).push(d)}}});let r=new Set;for(let[o,a]of e)for(let l=0;l<a.length;l++)for(let c=l+1;c<a.length;c++){let h=a[l],u=a[c],f=i[h.ci].nombre,d=i[u.ci].nombre;if(h.ci===u.ci||f===d)continue;let p=h.x2-h.x1,M=h.z2-h.z1,x=u.x2-u.x1,g=u.z2-u.z1,S=p*g-M*x;if(Math.abs(S)<1e-6)continue;let y=((u.x1-h.x1)*g-(u.z1-h.z1)*x)/S,_=((u.x1-h.x1)*M-(u.z1-h.z1)*p)/S;if(y<-.02||y>1.02||_<-.02||_>1.02)continue;let b=h.x1+p*y,E=h.z1+M*y,m=[f,d].sort().join("|")+"|"+Math.round(b/30)+","+Math.round(E/30);if(r.has(m))continue;r.add(m);let v=Math.hypot(p,M)||1,R=Math.hypot(x,g)||1;n.push({x:b,z:E,a:f,b:d,da:[p/v,M/v],db:[x/R,g/R],wa:i[h.ci].w,wb:i[u.ci].w})}return n}function yv(i,t){let e=[];for(let n of i){let s=n.cum[n.cum.length-1],r=[];for(let o=0;o<=s;o+=6){let a=Re(n,o);if(!t(a.x,a.z)){r.push(null);continue}let l=null;for(let d of i){if(d===n)continue;let p=Pn(d,a.x,a.z);if(p.d<10||p.d>95||p.dx*a.dx+p.dz*a.dz>-.5)continue;let M=(p.x-a.x)/p.d,x=(p.z-a.z)/p.d;Math.abs(M*a.dx+x*a.dz)>.5||(!l||p.d<l.q.d)&&(l={q:p,B:d,vx:M,vz:x})}if(!l){r.push(null);continue}let c=[a.x+l.vx*(n.w/2+.7),a.z+l.vz*(n.w/2+.7)],h=[l.q.x-l.vx*(l.B.w/2+.7),l.q.z-l.vz*(l.B.w/2+.7)],u=[(c[0]+h[0])/2,(c[1]+h[1])/2],f=Math.hypot(u[0]-c[0],u[1]-c[1]);r.push(f>3?{ea:c,m:u,vx:l.vx,vz:l.vz,dx:a.dx,dz:a.dz,hw:f}:null)}e.push({A:n,S:r})}return e}var Nh=null;function Mv(){if(Nh)return Nh;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d");t.strokeStyle="#8d939a",t.lineWidth=5,t.strokeRect(2,2,60,60),t.lineWidth=3.5,t.beginPath(),t.moveTo(2,2),t.lineTo(62,62),t.moveTo(62,2),t.lineTo(2,62),t.stroke();let e=new yn(i);return e.wrapS=e.wrapT=Di,e.colorSpace=Ne,Nh=e}function Sv(){let i=new ve,t=Mv(),e=(o,a)=>{let l=t.clone();return l.needsUpdate=!0,l.repeat.set(o,a),new Nt({map:l,transparent:!0,alphaTest:.35,side:Te})},n=new ot(new ge(.95,3.4,24,4,1,!0).rotateY(Math.PI/4),e(4,9));n.position.y=12,i.add(n);let s=new ot(new ge(.55,.95,11,4,1,!0).rotateY(Math.PI/4),e(4,5));s.position.y=29.5,i.add(s);let r=[];return[[23,6.2],[28,7.4],[33,6]].forEach(([o,a])=>{let l=new ot(new Xt(a*2,.9,1.1),e(a*1.4,1));l.position.y=o,i.add(l);for(let c of[1,-1]){let h=new ot(new ge(.12,.12,2.2,6),new Nt({color:4016722}));h.position.set(c*(a-.4),o-1.5,0),i.add(h),r.push([c*(a-.4),o-2.6,0])}}),r.push([0,36,0]),i.userData.puntas=r,i}function Ev(){let i=new ve,t=h=>new Nt({color:h}),e=new ot(new ks(7,20).rotateX(-Math.PI/2),t(14268810));e.position.y=.04,e.receiveShadow=!0,i.add(e);let n=new ot(new Xt(1.4,.15,1.4),t(3108822));n.position.set(-2.5,2.2,0),i.add(n);for(let[h,u]of[[-3.1,-.6],[-1.9,-.6],[-3.1,.6],[-1.9,.6]]){let f=new ot(new ge(.07,.07,2.3,6),t(15909166));f.position.set(h,1.15,u),i.add(f)}let s=new ot(new Xt(.9,.08,2.8),t(15909166));s.position.set(-3.7,1.1,0),s.rotation.z=-.9,s.rotation.y=Math.PI/2,i.add(s);let r=new ot(new Xt(3.2,.1,.9),t(14693419));r.position.set(-.6,1.2,0),r.rotation.z=-.62,i.add(r);let o=t(3108822);for(let h of[-1,1])for(let u of[-1,1]){let f=new ot(new ge(.07,.07,2.9,6),o);f.position.set(2.2+u*.5*0,1.4,h*1.6+u*.4),f.rotation.x=u*.16,i.add(f)}let a=new ot(new ge(.08,.08,3.6,6).rotateX(Math.PI/2),t(15909166));a.position.set(2.2,2.8,0),i.add(a);for(let h of[-.7,.7]){let u=new ot(new Xt(.45,.06,.25),t(14693419));u.position.set(2.2,.6,h),i.add(u);for(let f of[-.18,.18]){let d=new ot(new ge(.015,.015,2.2,4),t(6710886));d.position.set(2.2,1.7,h+f),i.add(d)}}let l=new ot(new Xt(3.2,.08,.3),t(3450963));l.position.set(.6,.5,3.4),l.rotation.z=.18,i.add(l);let c=new ot(new ge(.15,.2,.5,8),t(15909166));return c.position.set(.6,.25,3.4),i.add(c),i}function bv(i,t,e,n){let s=i.filter(_=>!_.elev&&/\bde las torres\b/.test(fs(_.nombre))&&!/cerrada|cda\.?|privada|callejon|andador|retorno/.test(fs(_.nombre))&&_.tipo!=="service");if(!s.length)return;let r=_=>{let b=[];for(let E of i)if(!E.elev&&_.test(fs(E.nombre)))for(let m of s)for(let v=1;v<E.p.length;v++)for(let R=1;R<m.p.length;R++){let A=ds(m.p[R-1],m.p[R],E.p[v-1],E.p[v]);A&&b.push([A.x,A.z])}return b.length?[b.reduce((E,m)=>E+m[0],0)/b.length,b.reduce((E,m)=>E+m[1],0)/b.length]:null},o=r(/\bde las minas\b/),a=r(/\binsurgentes\b/),l=(_,b)=>{if(!o||!a)return!0;let E=a[0]-o[0],m=a[1]-o[1],v=E*E+m*m||1,R=((_-o[0])*E+(b-o[1])*m)/v;return R>=-.03&&R<=1.03&&Math.abs((_-o[0])*m-(b-o[1])*E)/Math.sqrt(v)<220},c=s.filter(_=>_.oneway),h=[],u=[],f=[],d=[],p=(_,b,E,m,v,R)=>_.push(b[0],R,b[1],E[0],R,E[1],m[0],R,m[1],m[0],R,m[1],E[0],R,E[1],v[0],R,v[1]),M=(_,b,E,m)=>!E.some(([v,R])=>Math.hypot(v-_,R-b)<m),x=[];if(c.length>=2)for(let{A:_,S:b}of yv(c,l)){let E=_.p[_.p.length-1][1]<_.p[0][1]||_.p[_.p.length-1][0]>_.p[0][0]&&Math.abs(_.p[_.p.length-1][1]-_.p[0][1])<1,m=0,v=-1e9,R=-1e9;for(let A=1;A<b.length;A++){let I=b[A-1],L=b[A];if(!(!I||!L)){if(m+=6,p(h,I.ea,L.ea,I.m,L.m,.03),E){let B=(P,z)=>[P.m[0]+P.vx*z,P.m[1]+P.vz*z];if(p(u,B(I,-1.3),B(L,-1.3),B(I,1.3),B(L,1.3),.05),m-v>270&&(v=m,f.push({x:I.m[0],z:I.m[1],nx:I.vx,nz:I.vz})),m-R>380&&I.hw>11&&m-v>40){R=m;let P=Math.min(I.hw*.5,I.hw-8.5);x.push({x:I.m[0]-I.vx*P,z:I.m[1]-I.vz*P,r:bn(I.dx,I.dz)})}if(A%5===0){let P=A/5%2?1:-1,z=B(I,P*2.6);d.push([z[0],z[1],Math.atan2(-I.vx*P,-I.vz*P)])}}if(A%2===0&&I.hw>4.5){let B=.12+Si("tr"+_.p[0][0]+A)*Math.max(0,(I.hw-4)/I.hw-.12),P=I.ea[0]+(I.m[0]-I.ea[0])*B,z=I.ea[1]+(I.m[1]-I.ea[1])*B;M(P,z,f.map(W=>[W.x,W.z]),7)&&M(P,z,x.map(W=>[W.x,W.z]),9)&&e.push([P,z,.9+Si("ta"+A+_.p[0][1])*.7])}}}}else for(let _ of s){let b=_.cum[_.cum.length-1];for(let E=20;E<b;E+=270){let m=Re(_,E);if(!l(m.x,m.z))continue;let v=-m.dz,R=m.dx;f.push({x:m.x+v*(_.w/2+6),z:m.z+R*(_.w/2+6),nx:v,nz:R})}}let g=(_,b)=>{if(!_.length)return;let E=new Ie;E.setAttribute("position",new he(_,3)),E.computeVertexNormals();let m=new ot(E,new Nt({color:b,side:Te}));m.receiveShadow=!0,t.add(m)};g(h,8367704),g(u,14208959);let S=[],y=null;for(let _ of f){let b=Sv();b.position.set(_.x,0,_.z),b.rotation.y=bn(_.nx,_.nz),t.add(b),b.updateMatrixWorld(!0);let E=b.userData.puntas.map(m=>new N(...m).applyMatrix4(b.matrixWorld));if(y&&y.pos.distanceTo(b.position)<420){let m=y.n[0]*_.nx+y.n[1]*_.nz<0;E.forEach((v,R)=>{let A=m&&R<6?R%2?R-1:R+1:R,I=y.P[A];for(let L=0;L<12;L++){let B=L/12,P=(L+1)/12,z=W=>I.y+(v.y-I.y)*W-4.5*4*W*(1-W);S.push(I.x+(v.x-I.x)*B,z(B),I.z+(v.z-I.z)*B,I.x+(v.x-I.x)*P,z(P),I.z+(v.z-I.z)*P)}})}y={P:E,pos:b.position.clone(),n:[_.nx,_.nz]}}if(S.length){let _=new Ie;_.setAttribute("position",new he(S,3)),t.add(new Nr(_,new es({color:2764339})))}for(let _ of x){let b=Ev();b.position.set(_.x,0,_.z),b.rotation.y=_.r,t.add(b)}if(d.length){let _=d.length,b=new ze(new ge(.09,.13,8,6).translate(0,4,0),new Nt({color:7172986}),_),E=new ze(new Xt(.08,.08,1.8).translate(0,7.9,.9),new Nt({color:7172986}),_),m=new ze(new Xt(.35,.16,.7).translate(0,7.8,1.7),new xe({color:16773570}),_),v=new oe,R=new je,A=new N(0,1,0),I=new N(1,1,1);d.forEach(([L,B,P],z)=>{R.setFromAxisAngle(A,P),v.compose(new N(L,0,B),R,I),b.setMatrixAt(z,v),E.setMatrixAt(z,v),m.setMatrixAt(z,v)}),t.add(b,E,m)}n&&(n.torres={n:f.length,juegos:x.length,lamp:d.length,tramo:!!(o&&a),j0:x[0]})}function Tv(i,t,e,n){let s=i.filter(m=>!m.elev&&/\bde las minas\b/.test(fs(m.nombre))),r=i.filter(m=>!m.elev&&/reforma pesquera/.test(fs(m.nombre))),o=null;for(let m of s)for(let v of r)for(let R=1;R<m.p.length;R++)for(let A=1;A<v.p.length;A++){let I=ds(m.p[R-1],m.p[R],v.p[A-1],v.p[A]);if(I){let L=Math.hypot(m.p[R][0]-m.p[R-1][0],m.p[R][1]-m.p[R-1][1])||1,B=Math.hypot(v.p[A][0]-v.p[A-1][0],v.p[A][1]-v.p[A-1][1])||1;o={x:I.x,z:I.z,ua:[(m.p[R][0]-m.p[R-1][0])/L,(m.p[R][1]-m.p[R-1][1])/L],ub:[(v.p[A][0]-v.p[A-1][0])/B,(v.p[A][1]-v.p[A-1][1])/B],wa:m.w,wb:v.w}}}if(!o)return null;let a=t.filter(m=>m.pts&&m.pts.length).map(m=>{let v=0,R=0;for(let[A,I]of m.pts){let[L,B]=He(e,A,I);v+=L,R+=B}return[v/m.pts.length,R/m.pts.length]}),l=22,c=17,h=null;for(let m of[1,-1])for(let v of[1,-1]){let R=[-o.ua[1]*m,o.ua[0]*m],A=o.wa/2+2.6+c/2,I=o.wb/2+2.6+l/2,L=o.x+R[0]*A+o.ua[0]*0,B=o.z+R[1]*A,P=(L-o.x)*o.ub[0]+(B-o.z)*o.ub[1]>=0?1:-1,z=o.x+R[0]*A+o.ub[0]*0+o.ua[0]*v*I,W=o.z+R[1]*A+o.ua[1]*v*I,q=a.filter(([ft,J])=>Math.hypot(ft-z,J-W)<15).length;(!h||q<h.n)&&(h={n:q,x:z,z:W,s1:m,s2:v,sb:P})}let u=new ve,f=13.5,d=new Nt({color:14701356}),p=new Nt({color:15502190}),M=new Nt({color:3886947}),x=new ot(new Xt(l,4.2,c),d);x.position.y=2.1,x.castShadow=!0,u.add(x);let g=new ot(new Xt(l,f-4.2,c),p);g.position.y=4.2+(f-4.2)/2,g.castShadow=!0,u.add(g);for(let m=6;m<f-1;m+=3.1)for(let v of[1,-1]){let R=new ot(new Xt(l-4,1.1,.1),M);R.position.set(0,m,v*(c/2+.03)),u.add(R);let A=new ot(new Xt(.1,1.1,c-4),M);A.position.set(v*(l/2+.03),m,0),u.add(A)}let S=new ot(new Xt(l*.6,2.6,.12),new Nt({color:12376038,emissive:2241348}));S.position.set(0,1.5,-(c/2+.05)),u.add(S);let y=new ot(new Xt(l+.2,.5,c+.2),new Nt({color:16163386}));y.position.y=4.3,u.add(y);let _=new ot(new Xt(l*.55,3.2,.25),new Nt({color:16777215,emissive:2236962}));_.position.set(0,9.5,-(c/2+.15)),u.add(_);let b=new ot(new Xt(l*.55+.5,3.7,.2),new Nt({color:2310298}));b.position.set(0,9.5,-(c/2+.05)),u.add(b);let E=Zl("\u{1F6D2} Mini Chedraui");return E.position.set(0,f+5,0),u.add(E),u.position.set(h.x,0,h.z),u.rotation.y=bn(o.ua[0],o.ua[1])+(h.s1<0?Math.PI:0),n.add(u),{x:h.x,z:h.z,r:Math.max(l,c)/2+3}}var Id={lat:19.3622992,lon:-99.0569941},Pd=i=>/perif/i.test(i.nombre+" "+(i.ref||""));function Pn(i,t,e){let n=null;for(let s=1;s<i.p.length;s++){let[r,o]=i.p[s-1],[a,l]=i.p[s],c=a-r,h=l-o,u=c*c+h*h||1,f=Math.sqrt(u),d=Math.max(0,Math.min(1,((t-r)*c+(e-o)*h)/u)),p=r+c*d,M=o+h*d,x=Math.hypot(t-p,e-M);(!n||x<n.d)&&(n={d:x,s:i.cum[s-1]+f*d,x:p,z:M,dx:c/f,dz:h/f})}return n}function Wh(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new yn(s);return r.colorSpace=Ne,n&&(r.wrapS=r.wrapT=Di,r.repeat.set(n,n)),r.anisotropy=4,r}function wv(i,t,e,n){let s={barco:null,sem:null},r=i.filter(_=>!_.elev&&Pd(_)&&Mo.test(_.tipo+"")||!_.elev&&Pd(_));if(!r.length)return s;let[o,a]=He(t,Id.lat,Id.lon);if(Lv(r,i,t,e,n,[o,a]),Math.hypot(o,a)>2500)return s;let l=null;for(let _ of r){let b=Pn(_,o,a);(!l||b.d<l.q.d)&&(l={c:_,q:b})}if(!l||l.q.d>140)return s;let c=null;for(let _ of i)if(_.elev==="puente")for(let b of r)for(let E=1;E<_.p.length;E++)for(let m=1;m<b.p.length;m++){let v=ds(b.p[m-1],b.p[m],_.p[E-1],_.p[E]);if(!v)continue;let R=Math.hypot(v.x-o,v.z-a);R<700&&(!c||R<c.d)&&(c={x:v.x,z:v.z,d:R})}let h=l.q.dx,u=l.q.dz;c?(c.x-o)*h+(c.z-a)*u<0&&(h=-h,u=-u):u>0&&(h=-h,u=-u),s.barco={x:o,z:a},e.add(Av(o,a,h,u)),s.dbg=[];let f=l.c,d=1,p=null;for(let _ of r){let b=Pn(_,o,a);if(!(b.d>140))for(let E of _.oneway?[1]:[1,-1]){let m=b.dx*E,v=b.dz*E,R=(o-b.x)*v-(a-b.z)*m>0,A=!c||(c.x-b.x)*m+(c.z-b.z)*v>0;R&&A&&(!p||b.d<p.d)&&(p={cc:_,dd:E,d:b.d})}}p&&(f=p.cc,d=p.dd);let M=f.cum[f.cum.length-1],x=(_,b)=>{let E=Re(f,Math.max(0,Math.min(M,_))),m=E.dx*d,v=E.dz*d,R=-v,A=m,I=new ve;return I.position.set(E.x+R*b,0,E.z+A*b),I.rotation.y=bn(m,v),I},g=null;for(let _ of i)if(_.elev==="puente")for(let b=1;b<_.p.length;b++)for(let E=1;E<f.p.length;E++){let m=ds(f.p[E-1],f.p[E],_.p[b-1],_.p[b]);if(!m)continue;let v=f.cum[E-1]+Math.hypot(m.x-f.p[E-1][0],m.z-f.p[E-1][1]);Math.hypot(m.x-o,m.z-a)<700&&(g==null||Math.abs(v-Pn(f,o,a).s)<Math.abs(g-Pn(f,o,a).s))&&(g=v)}if(g!=null){let _=Rv(Math.min(f.w*.75,10)),b=x(g-d*16,f.w/2+.9);b.add(_.g),e.add(b),s.sem=_;let E=x(g-d*40,f.w/2+1.25);E.add(Iv()),e.add(E),s.libres=[[b.position.x,b.position.z],[E.position.x,E.position.z]]}let S=Pn(f,o+h*50,a+u*50),y=x(S.s-d*4,-(f.w/2+1.2));return y.add(Pv()),e.add(y),s.dbg.push(["let",y.position.x,y.position.z,g,d,f.nombre]),s}function Av(i,t,e,n){let s=new ve,r=96,o=30,a=12,l=Wh(64,64,(v,R,A)=>{v.fillStyle="#dcdcd7",v.fillRect(0,0,R,A),v.fillStyle="#b9bab4";for(let I=0;I<A;I+=8)v.fillRect(0,I,R,2)},.25),c=new ns([new mt(-r/2,0),new mt(r/2-12,0),new mt(r/2+7,a+1.5),new mt(-r/2-2,a)]),h=new ot(new Xs(c,{depth:o,bevelEnabled:!1}).translate(0,0,-o/2),new Nt({map:l}));h.castShadow=!0,h.receiveShadow=!0,s.add(h);let u=Wh(512,64,(v,R,A)=>{v.fillStyle="#f1efe8",v.fillRect(0,0,R,A);let I=["#e5533d","#2f9e6e","#3f6fd8","#e0a526","#8c4fd6","#1fb5c9"];for(let L=0;L<70;L++)v.fillStyle=I[L%I.length],v.beginPath(),v.ellipse(Math.random()*R,20+Math.random()*40,8+Math.random()*22,6+Math.random()*12,Math.random()*3,0,7),v.fill()});for(let v of[1,-1]){let R=new ot(new De(r-14,2.2),new Nt({map:u}));R.position.set(-6,1.1,v*(o/2+.05)),v<0&&(R.rotation.y=Math.PI),s.add(R)}let f=new Nt({color:15987695}),d=new Nt({color:4608606}),p=new ot(new Xt(r*.42,8,o*.72),f);p.position.set(-r*.08,a+4,0),p.castShadow=!0,s.add(p);let M=new ot(new Xt(r*.42+.1,1.6,o*.72+.1),d);M.position.set(-r*.08,a+5.2,0),s.add(M);let x=new ot(new Xt(r*.2,7,o*.5),f);x.position.set(-r*.2,a+11.5,0),x.castShadow=!0,s.add(x);let g=new ot(new Xt(r*.18,5,o*.6),f);g.position.set(-r*.42,a+2.5,0),s.add(g);let S=new Nt({color:10133670});for(let v of[1,-1]){let R=new ot(new Xt(r,.1,.1),S);R.position.set(0,a+1.3,v*o/2),s.add(R)}let y=Math.floor(r/6)*2,_=new ze(new Yr(.42,.13,6,14),new Nt({color:14165547}),y),b=new oe,E=0;for(let v of[1,-1])for(let R=-r/2+3;R<r/2-2&&E<y;R+=6)_.setMatrixAt(E++,b.makeTranslation(R,a+.85,v*(o/2+.08)));_.count=E,s.add(_);let m=Zl("\u26F4\uFE0F Barco Utop\xEDa");return m.position.set(0,a+20,0),s.add(m),s.position.set(i,0,t),s.rotation.y=bn(e,n),s}function Rv(i){let t=new ve,e=new Nt({color:5988712}),n=new ot(new ge(.16,.2,6.6,8),e);n.position.y=3.3,n.castShadow=!0,t.add(n);let s=new ot(new Xt(.14,.14,i),e);s.position.set(0,6.3,-i/2),t.add(s);let r=[],o=(a,l)=>{let c=new ot(new Xt(.45,1.45,.55),new Nt({color:1842721}));c.position.set(0,l,a),t.add(c),[1769306,16756736,16722458].forEach((h,u)=>{let f=new ot(new Nn(.17,10,8),new xe({color:2236962}));f.position.set(-.26,l-.46+u*.46,a),f.userData.col=h,t.add(f),(r[u]||=[]).push(f)})};return o(-i*.8,5.6),o(-.35,3.4),{g:t,luces:r}}function Cv(i,t){let e=t%38,n=e<20?0:e<23?1:2;i.luces.forEach((s,r)=>s.forEach(o=>o.material.color.setHex(r===n?o.userData.col:2236962)))}function Iv(){let i=new ve,t=new Nt({color:6119784}),e=new ot(new Xt(4.4,.14,1.9),new Nt({color:9146519}));e.position.set(0,2.6,.3),e.castShadow=!0,i.add(e);for(let a of[-2,2]){let l=new ot(new Xt(.1,2.6,.1),t);l.position.set(a,1.3,1.1),i.add(l)}let n=new ot(new De(4.1,2.1),new Nt({color:12375268,transparent:!0,opacity:.45,side:Te}));n.position.set(0,1.35,1.12),i.add(n);let s=new ot(new Xt(.18,1.9,1.3),new Nt({color:16185074,emissive:3355443}));s.position.set(2.15,1.25,.45),i.add(s);let r=new ot(new Xt(2.6,.08,.45),t);r.position.set(-.3,.5,.8),i.add(r);let o=new ot(new Xt(.06,.6,.6),new xe({color:1402304}));return o.position.set(-2.3,3.1,.3),i.add(o),i}function Pv(){let i=new ve,t=Wh(1100,470,(c,h,u)=>{c.fillStyle="#e4672a",c.fillRect(0,0,h,u),c.strokeStyle="#fff",c.lineWidth=10,c.strokeRect(16,16,h-32,u-32),c.fillStyle="#fff",c.textAlign="center",c.textBaseline="middle",c.font="bold 50px Arial",c.fillText("USE V\xCDAS ALTERNAS",h/2,70),c.font="bold 76px Arial",c.fillText("DOBLE SENTIDO",h/2,160),c.fillText("EJE 6 SUR",h/2,245),c.font="bold 66px Arial",c.fillText("DE 06:00 A 09:00 HRS",h/2,330),c.font="bold 40px Arial",c.fillText("www.circuitobicentenario.com.mx",h/2,415)}),e=6.6,n=e*470/1100,s=new ot(new De(e,n),new Nt({map:t}));s.rotation.y=-Math.PI/2,s.position.set(-.08,7.2,2.2),i.add(s);let r=new ot(new De(e,n),new Nt({color:9277329}));r.rotation.y=Math.PI/2,r.position.set(.08,7.2,2.2),i.add(r);let o=new Nt({color:7041143}),a=new ot(new ge(.2,.24,8.6,8),o);a.position.y=4.3,a.castShadow=!0,i.add(a);let l=new ot(new Xt(.16,.16,4.4),o);return l.position.set(.2,8.2,1.9),i.add(l),i}function Lv(i,t,e,n,s,r){let o=i.filter(g=>g.oneway&&g.w>=6);if(o.length<2)return;let a=g=>{let S=[];for(let y of t)if(g.test(fs(y.nombre+" "+(y.ref||""))))for(let _ of o)for(let b=1;b<y.p.length;b++)for(let E=1;E<_.p.length;E++){let m=ds(_.p[E-1],_.p[E],y.p[b-1],y.p[b]);m&&S.push(m.z)}return S},l=a(/ermita/),c=a(/eje\s*5\b|leyes de reforma/),h=l.length?Math.max(...l):He(e,19.3475,-99.056)[1],u=c.length?Math.min(...c):He(e,19.3765,-99.056)[1];if(!(u<h))return;let f=[],d=[],p=[],M=(g,S,y,_,b,E)=>g.push(S[0],E,S[1],y[0],E,y[1],_[0],E,_[1],_[0],E,_[1],y[0],E,y[1],b[0],E,b[1]);for(let g of o){let S=g.cum[g.cum.length-1],y=[];for(let b=0;b<=S;b+=6){let E=Re(g,b);if(E.z<u||E.z>h){y.push(null);continue}let m=null;for(let I of o){if(I===g)continue;let L=Pn(I,E.x,E.z);if(L.d<12||L.d>95||L.dx*E.dx+L.dz*E.dz>-.5)continue;let B=(L.x-E.x)/L.d,P=(L.z-E.z)/L.d;Math.abs(B*E.dx+P*E.dz)>.5||(!m||L.d<m.q.d)&&(m={q:L,B:I,vx:B,vz:P})}if(!m){y.push(null);continue}let v=[E.x+m.vx*(g.w/2+.7),E.z+m.vz*(g.w/2+.7)],R=[m.q.x-m.vx*(m.B.w/2+.7),m.q.z-m.vz*(m.B.w/2+.7)],A=[(v[0]+R[0])/2,(v[1]+R[1])/2];y.push(Math.hypot(R[0]-v[0],R[1]-v[1])>7?{ea:v,m:A,vx:m.vx,vz:m.vz,sv:b}:null)}let _=g.p[g.p.length-1][1]<g.p[0][1];for(let b=1;b<y.length;b++){let E=y[b-1],m=y[b];if(!(!E||!m)){if(M(f,E.ea,m.ea,E.m,m.m,.03),_){let v=(R,A)=>[R.m[0]+R.vx*A,R.m[1]+R.vz*A];M(d,v(E,-1.6),v(m,-1.6),v(E,1.6),v(m,1.6),.05),M(p,v(E,2),v(m,2),v(E,3.1),v(m,3.1),.05)}if(b%2===0){let v=Math.hypot(E.m[0]-E.ea[0],E.m[1]-E.ea[1]);if(v<6)continue;let R=.15+Si("pq"+g.p[0][0]+b)*Math.max(0,(v-4.5)/v-.15),A=E.ea[0]+(E.m[0]-E.ea[0])*R,I=E.ea[1]+(E.m[1]-E.ea[1])*R;Math.hypot(A-r[0],I-r[1])>62&&s.push([A,I,.9+Si("a"+b+g.p[0][1])*.6])}}}}let x=(g,S)=>{if(!g.length)return;let y=new Ie;y.setAttribute("position",new he(g,3)),y.computeVertexNormals();let _=new ot(y,new Nt({color:S,side:Te}));_.receiveShadow=!0,n.add(_)};x(f,8367704),x(d,14275265),x(p,5935044)}var fs=i=>String(i||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),Mo=/^(motorway|trunk|primary|secondary|tertiary|unclassified|residential|living_street)(_link)?$/;function ds(i,t,e,n){let s=t[0]-i[0],r=t[1]-i[1],o=n[0]-e[0],a=n[1]-e[1],l=s*a-r*o;if(Math.abs(l)<1e-9)return null;let c=((e[0]-i[0])*a-(e[1]-i[1])*o)/l,h=((e[0]-i[0])*r-(e[1]-i[1])*s)/l;return c>=0&&c<=1&&h>=0&&h<=1?{x:i[0]+s*c,z:i[1]+r*c,t:c}:null}var Ld={lat:19.34597,lon:-99.0638};function Uh(i,t,e,n){let s=o=>{let a=1;for(;a<t.length-1&&t[a]<o;)a++;let l=(o-t[a-1])/(t[a]-t[a-1]||1);return[i[a-1][0]+(i[a][0]-i[a-1][0])*l,i[a-1][1]+(i[a][1]-i[a-1][1])*l]},r=[s(e)];for(let o=0;o<i.length;o++)t[o]>e+.05&&t[o]<n-.05&&r.push(i[o]);return r.push(s(n)),r}function Dv(i,t){let[e,n]=He(t,Ld.lat,Ld.lon);if(Math.hypot(e,n)>3500)return;let s=d=>/perif|canal de garay/i.test((d.c.nombre||"")+" "+(d.c.ref||"")),r=i.filter(d=>/ermita/.test(fs(d.c.nombre)));if(!r.length)return;let o=[];if(i.forEach((d,p)=>{if(!(!s(d)||!Mo.test(d.c.tipo||"")))for(let M=1;M<d.p.length;M++)for(let x of r)for(let g=1;g<x.p.length;g++){let S=ds(d.p[M-1],d.p[M],x.p[g-1],x.p[g]);S&&Math.hypot(S.x-e,S.z-n)<650&&o.push({i:p,k:M,r:S})}}),!o.length||i.some(d=>s(d)&&d.c.puente&&d.p.some(p=>o.some(M=>Math.hypot(p[0]-M.r.x,p[1]-M.r.z)<250))))return;let a=d=>["motorway","trunk","primary","secondary","tertiary"].indexOf(String(d).replace("_link","")),l=o.map(d=>a(i[d.i].c.tipo)).filter(d=>d>=0);if(!l.length)return;let c=Math.min(...l),h=new Set,u=[];for(let d of o){let p=i[d.i];if(a(p.c.tipo)!==c||h.has(d.i))continue;let M=_o(p.p),x=M[M.length-1],g=M[d.k-1]+Math.hypot(d.r.x-p.p[d.k-1][0],d.r.z-p.p[d.k-1][1]),S=Math.max(0,g-75),y=Math.min(x,g+75);h.add(d.i),S>2&&u.push({c:p.c,p:Uh(p.p,M,0,S)}),u.push({c:{...p.c,puente:!0,capa:1},p:Uh(p.p,M,S,y)}),x-y>2&&u.push({c:p.c,p:Uh(p.p,M,y,x)})}let f=i.filter((d,p)=>!h.has(p));i.length=0,i.push(...f,...u)}function Nv(i){let t=new Map,e=40,n=new Map;i.forEach((a,l)=>{if(!(a.c.puente||!Mo.test(a.c.tipo||"")))for(let c=1;c<a.p.length;c++){let h=a.p[c-1],u=a.p[c],f=[h,u,a.c.nombre||""];for(let d=Math.floor(Math.min(h[0],u[0])/e);d<=Math.floor(Math.max(h[0],u[0])/e);d++)for(let p=Math.floor(Math.min(h[1],u[1])/e);p<=Math.floor(Math.max(h[1],u[1])/e);p++){let M=d+","+p;(n.get(M)||n.set(M,[]).get(M)).push(f)}}});let s=a=>{for(let l=1;l<a.p.length;l++){let c=a.p[l-1],h=a.p[l];for(let u=Math.floor(Math.min(c[0],h[0])/e);u<=Math.floor(Math.max(c[0],h[0])/e);u++)for(let f=Math.floor(Math.min(c[1],h[1])/e);f<=Math.floor(Math.max(c[1],h[1])/e);f++)for(let d of n.get(u+","+f)||[])if(d[2]!==(a.c.nombre||"")&&ds(c,h,d[0],d[1]))return!0}return!1},r=[];if(i.forEach((a,l)=>{if(!a.c.puente||!Mo.test(a.c.tipo||"")||!s(a))return;let c=6.2*Math.max(1,Math.min(3,a.c.capa||1));t.set(l,{elev:"puente",H:c,taperA:!1,taperB:!1}),r.push({x:a.p[0][0],z:a.p[0][1],H:c,i:l,fin:0},{x:a.p[a.p.length-1][0],z:a.p[a.p.length-1][1],H:c,i:l,fin:1})}),!r.length)return t;let o=a=>r.filter(l=>Math.hypot(l.x-a[0],l.z-a[1])<1.5);i.forEach((a,l)=>{if(t.has(l)||!Mo.test(a.c.tipo||""))return;let c=o(a.p[0]),h=o(a.p[a.p.length-1]);!c.length&&!h.length||(c.concat(h).forEach(u=>u.usado=!0),t.set(l,{elev:"rampa",hA:c.length?c[0].H:0,hB:h.length?h[0].H:0}))});for(let a of r)if(!a.usado){let l=t.get(a.i);a.fin===0?l.taperA=!0:l.taperB=!0}return t}function ir(i,t){if(!i||!i.elev)return 0;let e=i.cum[i.cum.length-1];if(i.elev==="puente"){let s=1,r=Math.min(45,e/2);return i.taperA&&(s=Math.min(s,t/r)),i.taperB&&(s=Math.min(s,(e-t)/r)),i.H*Math.max(0,Math.min(1,s))}let n=Math.min(90,e);return Math.max(i.hA*Math.max(0,1-t/n),i.hB*Math.max(0,1-(e-t)/n))}function Uv(i,t,e){let n=[],s=[],r=[],o=[],a=[],l=(u,f,d,p,M)=>u.push(...f,...d,...p,...p,...d,...M),c=(u,f,d,p)=>{let M=p[0]-d[0],x=p[1]-d[1],g=M*M+x*x||1,S=Math.max(0,Math.min(1,((u-d[0])*M+(f-d[1])*x)/g));return Math.hypot(u-d[0]-M*S,f-d[1]-x*S)};for(let u of i){let f=u.cum[u.cum.length-1],d=Math.max(2,Math.ceil(f/4)),p=u.w/2,M=[];for(let g=0;g<=d;g++){let S=f*g/d,y=Re(u,S);M.push({x:y.x,z:y.z,nx:-y.dz,nz:y.dx,h:ir(u,S)})}for(let g=1;g<M.length;g++){let S=M[g-1],y=M[g],_=(b,E,m)=>[b.x+b.nx*p*E,m,b.z+b.nz*p*E];l(n,_(S,1,S.h+.06),_(y,1,y.h+.06),_(S,-1,S.h+.06),_(y,-1,y.h+.06));for(let b of[1,-1]){let E=u.elev==="puente"?Math.max(0,S.h-1.2):0,m=u.elev==="puente"?Math.max(0,y.h-1.2):0;l(s,_(S,b,E),_(y,b,m),_(S,b,S.h+.9),_(y,b,y.h+.9)),(S.h>.4||y.h>.4)&&l(r,_(S,b*1.01,S.h+.9),_(y,b*1.01,y.h+.9),_(S,b*1.01,S.h+1.2),_(y,b*1.01,y.h+1.2))}u.elev==="puente"&&S.h>1.5&&l(s,_(S,1,S.h-1.2),_(y,1,y.h-1.2),_(S,-1,S.h-1.2),_(y,-1,y.h-1.2))}let x=[];for(let g=1;g<u.nl;g++)u.oneway?x.push(-u.w/2+g*u.w/u.nl):x.push(g*u.w/2/u.nl,-g*u.w/2/u.nl);u.oneway||x.push(0);for(let g of x)for(let S=2;S<f-3;S+=9){let y=Re(u,S),_=Re(u,Math.min(f,S+3)),b=ir(u,S)+.09,E=ir(u,S+3)+.09,m=g===0?.14:.08,v=(R,A,I)=>[R.x-R.dz*A,I,R.z+R.dx*A];l(o,v(y,g+m,b),v(_,g+m,E),v(y,g-m,b),v(_,g-m,E))}if(u.elev==="puente")for(let g=10;g<f-6;g+=26){let S=ir(u,g);if(S<3)continue;let y=Re(u,g);t.some(_=>{for(let b=1;b<_.p.length;b++)if(c(y.x,y.z,_.p[b-1],_.p[b])<_.w/2+1.5)return!0;return!1})||a.push([y.x,y.z,S-1.2,bn(y.dx,y.dz),u.w*.55])}}let h=(u,f)=>{if(!u.length)return;let d=new Ie;d.setAttribute("position",new he(u,3)),d.computeVertexNormals();let p=new ot(d,new Nt({color:f,side:Te}));p.castShadow=!0,p.receiveShadow=!0,e.add(p)};if(h(n,3816773),h(s,11119269),h(r,14857239),h(o,15921906),a.length){let u=new ze(new Xt(1.4,1,1).translate(0,.5,0),new Nt({color:10263960}),a.length),f=new oe,d=new je,p=new N(0,1,0);a.forEach(([M,x,g,S,y],_)=>{d.setFromAxisAngle(p,S),u.setMatrixAt(_,f.compose(new N(M,0,x),d,new N(1,g,y)))}),u.castShadow=!0,e.add(u)}}function Fv(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n.x*s.y-s.x*n.y}return t<0}function Si(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return(t>>>0)/4294967296}function Ov(i){if(!Ye||!i||!i.centro)return;let t=qt&&qt.O&&Math.hypot(...He(qt.O,i.centro.lat,i.centro.lon))<4e3?qt.O:{lat:i.centro.lat,lon:i.centro.lon},e=qt,n=new ve,s=new ot(new De(9e3,9e3).rotateX(-Math.PI/2),new Nt({color:12174e3,polygonOffset:!0,polygonOffsetFactor:6,polygonOffsetUnits:12}));s.position.y=-.02,s.receiveShadow=!0,n.add(s);let r=[],o={},a=[],l=[],c=[],h=[],u=(i.calles||[]).map(H=>({c:H,p:H.pts.map(([ht,Z])=>He(t,ht,Z))})).filter(H=>H.p.length>=2);Dv(u,t);let f=Nv(u),d=[];for(let H=0;H<u.length;H++){let ht=u[H].c,Z=u[H].p,lt=/_link$/.test(ht.tipo)?"link":Cd[ht.tipo]?ht.tipo:"residential",j=/\beje\s*5\b/i.test((ht.nombre||"")+" "+(ht.ref||"")),O=ht.carriles||(j?6:0),G=O?Math.max(5,Math.min(26,O*3.2)):ht.ancho||Cd[lt],k={p:Z,cum:_o(Z),tipo:lt,w:G,nombre:ht.nombre||"",ref:ht.ref||"",oneway:!!ht.oneway,ncar:O};k.nl=ps(k),r.push(k);let pt=f.get(H);if(pt){Object.assign(k,pt),d.push(k);continue}In(Z,G,Bl[lt],o[lt]||=[]);let at=k.cum[k.cum.length-1],Pt=Bl[lt]+.012;if(!k.oneway&&G>=6.5)for(let ct of[-.17,.17]){let yt=[];for(let wt=0;wt<=at;wt+=Math.max(3,at/300)){let D=Re(k,wt);yt.push([D.x-D.dz*ct,D.z+D.dx*ct])}In(yt,.13,Pt,l)}let vt=[];for(let ct=1;ct<k.nl;ct++)k.oneway?vt.push(-G/2+ct*G/k.nl):vt.push(ct*G/2/k.nl,-ct*G/2/k.nl);for(let ct of vt)for(let yt=2;yt<at-3;yt+=9){let wt=Re(k,yt),D=Re(k,Math.min(at,yt+3));In([[wt.x-wt.dz*ct,wt.z+wt.dx*ct],[D.x-D.dz*ct,D.z+D.dx*ct]],.16,Pt,a)}if(lt!=="service"){In(Z,G+5.2,.012,c);for(let ct=6;ct<at-4&&h.length<1600;ct+=16){if(Si(k.nombre+ct+Z[0][0])<.45)continue;let yt=Re(k,ct),wt=Si(ct+k.nombre)<.5?1:-1,D=(G/2+1.7)*wt;h.push([yt.x-yt.dz*D,yt.z+yt.dx*D,.75+Si(String(ct))*.5])}}}d.length&&Uv(d,r.filter(H=>!H.elev),n);let p=wv(r,t,n,h);bv(r,n,h,p),p.super=Tv(r,i.edificios||[],t,n);let M=new Nt({color:3816773,side:Te}),x=new Nt({color:4869461,side:Te});for(let H in o){let ht=Ee(o[H]);ht.computeVertexNormals();let Z=new ot(ht,H==="service"?x:M);Z.receiveShadow=!0,n.add(Z)}if(a.length&&n.add(new ot(Ee(a),new xe({color:15921906,side:Te}))),l.length&&n.add(new ot(Ee(l),new xe({color:15909376,side:Te}))),c.length){let H=new ot(Ee(c),new Nt({color:13225156,side:Te,polygonOffset:!0,polygonOffsetFactor:3,polygonOffsetUnits:6}));H.receiveShadow=!0,n.add(H)}if(h.length){let H=new ze(new ge(.15,.2,1.6,6).translate(0,.8,0),new Nt({color:8018490}),h.length),ht=new ze(new qs(1.4,0).translate(0,2.6,0),new Nt({color:5939290,flatShading:!0}),h.length),Z=new oe,lt=new je,j=new N,O=new N;h.forEach(([G,k,pt],at)=>{Z.compose(O.set(G,0,k),lt,j.setScalar(pt)),H.setMatrixAt(at,Z),ht.setMatrixAt(at,Z)}),ht.castShadow=!0,n.add(H,ht)}if(i.casa){let[H,ht]=He(t,i.casa.lat,i.casa.lon),Z=Zl("\u{1F3E0} Mi casa");Z.position.set(H,11,ht),n.add(Z)}let g=null;if(i.radar){let[H,ht]=He(t,i.radar.lat,i.radar.lon),Z=null;for(let lt of r)for(let j=1;j<lt.p.length;j++){let[O,G]=lt.p[j-1],[k,pt]=lt.p[j],at=k-O,Pt=pt-G,vt=at*at+Pt*Pt||1,ct=Math.max(0,Math.min(1,((H-O)*at+(ht-G)*Pt)/vt)),yt=O+at*ct,wt=G+Pt*ct,D=Math.hypot(H-yt,ht-wt);if(!Z||D<Z.dd-.5||Math.abs(D-Z.dd)<.5&&lt.w>Z.c.w){let ie=Math.sqrt(vt);Z={dd:D,px:yt,pz:wt,ux:at/ie,uz:Pt/ie,c:lt}}}if(Z&&Z.dd<60){let lt=-Z.uz,j=Z.ux,O=(H-Z.px)*lt+(ht-Z.pz)*j>=0?1:-1,G=Z.c.w/2+1.3,k=new ve;k.position.set(Z.px+lt*G*O,0,Z.pz+j*G*O);let pt=new Nt({color:10134445}),at=new ot(new ge(.14,.18,6.2,8),pt);at.position.y=3.1,at.castShadow=!0,k.add(at);let Pt=new ot(new Xt(.12,.12,2.2),pt);Pt.position.set(0,6.1,-1*O),Pt.rotation.y=0,k.add(Pt);let vt=new ot(new Xt(.9,.6,.7),new Nt({color:15921906}));vt.position.set(0,5.6,-1.9*O),k.add(vt);let ct=new ot(new ge(.18,.18,.12,12).rotateX(Math.PI/2),new xe({color:1118481}));ct.position.set(.48,5.6,-1.9*O),ct.rotation.y=Math.PI/2,k.add(ct);let yt=new ot(new Nn(.11,8,6),new xe({color:16722458}));yt.position.set(.3,5.98,-1.9*O),k.add(yt);let wt=new Ni(new pi({map:Kl.map,color:16777215,transparent:!0,depthWrite:!1,blending:gi}));wt.scale.set(9,9,1),wt.position.set(0,5.6,-1.9*O),wt.visible=!1,k.add(wt);let D=Zl("\u{1F4F8} Radar \xB7 50");D.position.set(0,8.4,0),k.add(D),k.rotation.y=bn(Z.ux,Z.uz),n.add(k),g={g:k,led:yt,flash:wt}}}let S=[],y={};for(let H of r.slice().sort((ht,Z)=>Z.w-ht.w)){if(!H.nombre||H.elev||S.length>=90)continue;let ht=H.cum[H.cum.length-1],Z=xv(H.nombre),lt=Math.max(2.6,Math.min(6,H.w*.42)),j=lt*Z.ar;if(!(ht<j*.9))for(let O=Math.min(ht/2,40+j/2);O<ht-j/2&&S.length<90;O+=170){let G=Re(H,O),k=H.nombre+Math.round(G.x/120)+","+Math.round(G.z/120);if(y[k])continue;y[k]=1;let pt=new ot(new De(j,lt).rotateX(-Math.PI/2),Z.mat);pt.position.set(G.x,Bl[H.tipo]+.03,G.z),pt.userData.base=bn(G.dx,G.dz),pt.userData.dx=G.dx,pt.userData.dz=G.dz,pt.renderOrder=2,n.add(pt),S.push(pt)}}let _=[],b=r.filter(H=>H.oneway&&H.nombre&&!H.elev).map(H=>{let ht=1e9,Z=-1e9,lt=1e9,j=-1e9;for(let[O,G]of H.p)ht=Math.min(ht,O),Z=Math.max(Z,O),lt=Math.min(lt,G),j=Math.max(j,G);return{c:H,x0:ht,x1:Z,z0:lt,z1:j}}),E=(H,ht)=>{let Z=b.filter(lt=>H>lt.x0-70&&H<lt.x1+70&&ht>lt.z0-70&&ht<lt.z1+70).map(lt=>({c:lt.c,q:Pn(lt.c,H,ht)})).filter(lt=>lt.q.d<70);for(let lt=0;lt<Z.length;lt++)for(let j=lt+1;j<Z.length;j++){let O=Z[lt],G=Z[j];if(O.c.nombre!==G.c.nombre||O.q.dx*G.q.dx+O.q.dz*G.q.dz>-.5)continue;let k=Pn(G.c,O.q.x,O.q.z).d;if(O.q.d+G.q.d<=k+2)return!0}return!1};{let ht=new Map,Z=(ct,yt)=>Math.floor(ct/25)+","+Math.floor(yt/25);for(let ct of r)for(let yt=1;yt<ct.p.length;yt++){let[wt,D]=ct.p[yt-1],[ie,zt]=ct.p[yt],Qt={x1:wt,z1:D,x2:ie,z2:zt,r:ct.w/2+2.4};for(let ut=Math.floor((Math.min(wt,ie)-12)/25);ut<=Math.floor((Math.max(wt,ie)+12)/25);ut++)for(let ye=Math.floor((Math.min(D,zt)-12)/25);ye<=Math.floor((Math.max(D,zt)+12)/25);ye++){let Vt=ut+","+ye;(ht.get(Vt)||ht.set(Vt,[]).get(Vt)).push(Qt)}}let lt=(ct,yt,wt)=>{let D=wt.x2-wt.x1,ie=wt.z2-wt.z1,zt=D*D+ie*ie||1,Qt=((ct-wt.x1)*D+(yt-wt.z1)*ie)/zt;return Qt=Math.max(0,Math.min(1,Qt)),Math.hypot(ct-wt.x1-D*Qt,yt-wt.z1-ie*Qt)},j=(ct,yt,wt)=>{let D=Math.floor(ct/25),ie=Math.floor(yt/25);for(let zt=-1;zt<=1;zt++)for(let Qt=-1;Qt<=1;Qt++)for(let ut of ht.get(D+zt+","+(ie+Qt))||[])if(lt(ct,yt,ut)<ut.r+wt)return!1;return!0},O=new Map,G=8,k=(ct,yt)=>{let wt=Math.floor(ct/G)+","+Math.floor(yt/G);(O.get(wt)||O.set(wt,[]).get(wt)).push([ct,yt])},pt=(ct,yt,wt)=>{let D=Math.floor(ct/G),ie=Math.floor(yt/G);for(let zt=-1;zt<=1;zt++)for(let Qt=-1;Qt<=1;Qt++)for(let[ut,ye]of O.get(D+zt+","+(ie+Qt))||[])if(Math.hypot(ut-ct,ye-yt)<wt)return!0;return!1};for(let ct of i.edificios||[])if(ct.pts&&ct.pts.length){let yt=0,wt=0;for(let[D,ie]of ct.pts){let[zt,Qt]=He(t,D,ie);yt+=zt,wt+=Qt}k(yt/ct.pts.length,wt/ct.pts.length)}let[at,Pt]=He(t,i.centro.lat,i.centro.lon),vt=r.filter(ct=>!/^(service|motorway|link)$/.test(ct.tipo)).sort((ct,yt)=>ct.w-yt.w);for(let ct of vt){let yt=ct.cum[ct.cum.length-1];for(let wt of[1,-1]){let D=5;for(;D<yt-5&&_.length<2600;){let ie=Si(ct.nombre+"|"+wt+"|"+Math.round(D)+"|"+Math.round(ct.p[0][0])),zt=6+ie*4.5,Qt=9+ie*7%1*5,ut=Re(ct,D+zt/2);if(D+=zt+.25,Math.hypot(ut.x-at,ut.z-Pt)>750||ie<.06)continue;let ye=-ut.dz*wt,Vt=ut.dx*wt,te=ct.w/2+2.7+Qt/2,C=ut.x+ye*te,T=ut.z+Vt*te;if(!j(C,T,Qt/2-.3)||!j(C+ut.dx*zt/2,T+ut.dz*zt/2,.4)||!j(C-ut.dx*zt/2,T-ut.dz*zt/2,.4)||pt(C,T,Math.min(zt,Qt)*.85)||p.barco&&Math.hypot(C-p.barco.x,T-p.barco.z)<66||p.libres&&p.libres.some(([K,et])=>Math.hypot(C-K,T-et)<9)||p.super&&Math.hypot(C-p.super.x,T-p.super.z)<p.super.r+6||E(C,T)||ct.oneway&&r.some(K=>K!==ct&&K.oneway&&K.nombre&&K.nombre===ct.nombre&&(()=>{let et=Pn(K,ut.x,ut.z);return et.d>140?!1:Pn(K,C,T).d<et.d})()))continue;k(C,T);let V=ut.dx*zt/2,dt=ut.dz*zt/2,nt=ye*Qt/2,xt=Vt*Qt/2,Et=ie<.35?1:ie<.85?2:3;_.push({loc:[[C-V-nt,T-dt-xt],[C+V-nt,T+dt-xt],[C+V+nt,T+dt+xt],[C-V+nt,T-dt+xt]],h:3*Et+ie*31%1*.6,id:"s"+C.toFixed(1)+T.toFixed(1)})}}}}let m=[15918022,15250592,13227743,16045453,12114110,15123414,14209732,11125984,15778427,14736853,16171425,12572902],v=[],R=[],A=[],I=(H,ht)=>{let Z=new Ie;for(let lt of["position","uv"]){let j=H.attributes[lt];Z.setAttribute(lt,new en(j.array.slice(ht.start*j.itemSize,(ht.start+ht.count)*j.itemSize),j.itemSize))}return Z};for(let H of(i.edificios||[]).concat(_)){if(!H.loc&&(!H.pts||H.pts.length<4))continue;if(p.super&&!H.loc){let[j,O]=He(t,H.pts[0][0],H.pts[0][1]),G=0,k=0;for(let[pt,at]of H.pts){let[Pt,vt]=He(t,pt,at);G+=Pt,k+=vt}if(G/=H.pts.length,k/=H.pts.length,Math.hypot(G-p.super.x,k-p.super.z)<p.super.r+3||Math.hypot(j-p.super.x,O-p.super.z)<p.super.r)continue}if(p.barco&&!H.loc){let j=H.pts.map(([Pt,vt])=>He(t,Pt,vt)),O=p.barco.x,G=p.barco.z,k=0,pt=0;for(let[Pt,vt]of j)k+=Pt,pt+=vt;k/=j.length,pt/=j.length;let at=!1;for(let Pt=0,vt=j.length-1;Pt<j.length;vt=Pt++){let[ct,yt]=j[Pt],[wt,D]=j[vt];yt>G!=D>G&&O<(wt-ct)*(G-yt)/(D-yt||1e-9)+ct&&(at=!at)}if(at||Math.hypot(k-O,pt-G)<75||j.some(([Pt,vt])=>Math.hypot(Pt-O,vt-G)<52))continue}let ht=H.loc?H.loc.map(([j,O])=>new mt(j,-O)):H.pts.map(([j,O])=>{let[G,k]=He(t,j,O);return new mt(G,-k)}),Z=Si(H.id||H.pts[0][0]+","+H.pts[0][1]);H.loc&&Fv(ht)&&ht.reverse();let lt=H.h||(Z<.55?3.2*(1+Math.floor(Z*4)):Z<.9?3.2*(2+Math.floor(Z*3)):3.2*(5+Math.floor(Z*8)));try{let j=new Xs(new ns(ht),{depth:lt,bevelEnabled:!1}).rotateX(-Math.PI/2);j.index&&(j=j.toNonIndexed());let O=m[Math.floor(Z*m.length)];for(let at of j.groups){let Pt=qn(I(j,at),O);(at.materialIndex===0?R:v).push(Pt)}let G=0,k=0,pt=0;for(let at=0;at<ht.length;at++){let Pt=ht[at],vt=ht[(at+1)%ht.length],ct=Pt.x*vt.y-vt.x*Pt.y;G+=ct,k+=(Pt.x+vt.x)*ct,pt+=(Pt.y+vt.y)*ct}G/=2,Math.abs(G)>30&&Z*7%1<.8&&(k/=6*G,pt/=6*G,A.push([k+(Z*13%1-.5)*2,lt,-pt+(Z*17%1-.5)*2]))}catch{}}for(let H=0;H<v.length;){let ht=0,Z=H;for(;Z<v.length&&ht<24e3;)ht+=v[Z++].attributes.position.count;let lt=Ee(v.slice(H,Z));lt.computeVertexNormals(),H=Z;let j=new ot(lt,Bv());j.castShadow=!0,j.receiveShadow=!0,j.name="muros",n.add(j)}if(R.length){let H=Ee(R);H.computeVertexNormals();let ht=new ot(H,new Nt({vertexColors:!0}));ht.receiveShadow=!0,n.add(ht)}if(A.length){let H=Ee([qn(new ge(.6,.6,1.15,10).translate(0,.78,0),1776411),qn(new ge(.62,.62,.08,10).translate(0,1.38,0),2763306),qn(new Xt(1.1,.2,1.1).translate(0,.1,0),10131342)].map(Kh));H.computeVertexNormals();let ht=new ze(H,new Nt({vertexColors:!0}),A.length),Z=new oe;A.forEach(([lt,j,O],G)=>ht.setMatrixAt(G,Z.makeTranslation(lt,j,O))),ht.castShadow=!0,n.add(ht)}let L=[],B=[],P=[],z=[],W=[];for(let H of i.rieles||[]){let ht=H.pts.map(([lt,j])=>He(t,lt,j));if(ht.length<2)continue;let Z={p:ht,cum:_o(ht),elevado:!!H.elevado,y:H.elevado?8:.12,periodo:H.l8?8:60,vagones:H.l8?6:9,t:Math.random()*60};if(!(Z.cum[Z.cum.length-1]<40)){if(L.push(Z),Z.elevado){In(ht,9,8,z),In(ht,9,6.8,z);let lt=Z.cum[Z.cum.length-1];for(let j=5;j<lt;j+=26){let O=Re(Z,j);W.push(new Xt(1.4,6.8,1.4).translate(O.x,3.4,O.z))}}else In(ht,8.4,.07,B);for(let lt of[-2.45,-1.05,1.05,2.45]){let j=[],O=Z.cum[Z.cum.length-1];for(let G=0;G<=O;G+=Math.max(4,O/200)){let k=Re(Z,G);j.push([k.x-k.dz*lt,k.z+k.dx*lt])}In(j,.12,Z.y+.1,P)}}}if(B.length&&n.add(new ot(Ee(B),new Nt({color:7037528,side:Te}))),P.length&&n.add(new ot(Ee(P),new Nt({color:10133670,side:Te}))),z.length){let H=new ot(Ee(z),new Nt({color:12170925,side:Te}));H.castShadow=!0,n.add(H)}if(W.length){let H=new ot(Ee(W),new Nt({color:11578788}));H.castShadow=!0,n.add(H)}let q=new ze(Jd(),Xi,400);q.count=0,q.castShadow=!0,n.add(q);let ft=[],J=[],st=[],rt=[];for(let H of i.troles||[]){let ht=H.pts.map(([j,O])=>He(t,j,O));if(ht.length<2)continue;let Z={p:ht,cum:_o(ht),periodo:30};if(Z.cum[Z.cum.length-1]<40)continue;ft.push(Z),In(ht,9.5,8.5,J),In(ht,9.5,7.3,J);let lt=Z.cum[Z.cum.length-1];for(let j=5;j<lt;j+=30){let O=Re(Z,j);st.push(new Xt(1.5,7.3,1.5).translate(O.x,3.65,O.z))}for(let j of[-2.2,-1.3,1.3,2.2]){let O=[];for(let G=0;G<=lt;G+=Math.max(5,lt/200)){let k=Re(Z,G);O.push([k.x-k.dz*j,k.z+k.dx*j])}In(O,.06,13.1,rt)}for(let j=10;j<lt;j+=40){let O=Re(Z,j);for(let G of[-1,1])st.push(new Xt(.18,5,.18).translate(O.x-O.dz*4.4*G,11,O.z+O.dx*4.4*G))}}if(J.length){let H=new ot(Ee(J),new Nt({color:13223613,side:Te}));H.castShadow=!0,n.add(H)}if(st.length){let H=new ot(Ee(st),new Nt({color:11578788}));H.castShadow=!0,n.add(H)}rt.length&&n.add(new ot(Ee(rt),new xe({color:2763306,side:Te})));let Ot=new ze(Yd(),Xi,60);Ot.count=0,Ot.castShadow=!0,n.add(Ot);let Jt=[],tt=[],Mt=[];for(let H of i.mb||[]){let ht=H.pts.map(([j,O])=>He(t,j,O));if(ht.length<2)continue;let Z={p:ht,cum:_o(ht),periodo:40,l:H.l},lt=Z.cum[Z.cum.length-1];if(!(lt<30)){Jt.push(Z);for(let j of[-3.6,3.6]){let O=[];for(let G=0;G<=lt;G+=Math.max(4,lt/300)){let k=Re(Z,G);O.push([k.x-k.dz*j,k.z+k.dx*j])}In(O,.28,.075,tt);for(let G=0;G<=lt;G+=6){let k=Re(Z,G);Mt.push({x:k.x-k.dz*j,z:k.z+k.dx*j,c:Wi.metrobus,f:Math.floor(G/6)%3})}}}}tt.length&&n.add(new ot(Ee(tt),new xe({color:15909376,side:Te})));let Bt=new ze(Zd(),Xi,80);Bt.count=0,Bt.castShadow=!0,n.add(Bt);for(let H of r){if(H.w<7||H.elev)continue;let ht=H.cum[H.cum.length-1],Z=H.w>=12?5:7,lt=Bl[H.tipo];for(let j=0;j<=ht;j+=Z){let O=Re(H,j),G=Math.floor(j/Z)%3;for(let k of[-1,1])Mt.push({x:O.x-O.dz*(H.w/2-.4)*k,z:O.z+O.dx*(H.w/2-.4)*k,y:lt,c:Wi.orilla,f:G});if(!H.oneway&&H.w>=10)Mt.push({x:O.x,z:O.z,y:lt,c:Wi.carril,f:G});else if(H.oneway&&H.w>=10)for(let k of[-1,1])Mt.push({x:O.x-O.dz*H.w*.17*k,z:O.z+O.dx*H.w*.17*k,y:lt,c:Wi.carril,f:G})}if(Mt.length>14e3)break}let Zt=Xd(Mt);n.add(Zt),Ye.add(n);let It={O:t,grupo:n,calles:r,etiquetas:S,rieles:L,tren:q,troles:ft,trole:Ot,mbs:Jt,mbus:Bt,luces:Zt,listo:!0,coches:e?e.coches:[],motos:e?e.motos:[],pj:e?e.pj:null,rastro:e?e.rastro:[],taxi:e?e.taxi:null,cruce:e?e.cruce:null,radar:g,cruces:vv(r),letreros:e?e.letreros:null,guias:e?e.guias:null,hitos:p};e&&(Ye.remove(e.grupo),e.grupo.traverse(H=>{H.geometry&&H.geometry!==Wl&&H.geometry.dispose()})),e&&e.O!==t&&(It.pj=null,It.rastro=[]),qt=It,Xh&&Kd(Xh);for(let H of qt.coches)H.ci=-1;for(let H of qt.motos)H.ci=-1;jd()}var Xh=null;function Kd(i){if(Xh=i,!qt||!qt.O||(qt.trafG&&(qt.grupo.remove(qt.trafG),qt.trafG.traverse(s=>{s.geometry&&s.geometry.dispose()}),qt.trafG=null),!i||!i.length))return;let t={cerr:[],rojo:[],amar:[],verde:[]};for(let s of i){let r=s.pts.map(([a,l])=>He(qt.O,a,l));if(r.length<2||Math.hypot(r[0][0]-(qt.pj?qt.pj.x:0),r[0][1]-(qt.pj?qt.pj.z:0))>1500)continue;let o=s.nivel<0?"cerr":s.nivel<.45?"rojo":s.nivel<.75?"amar":"verde";In(r,o==="verde"?1.4:2.2,.095,t[o])}let e={cerr:9109504,rojo:15022389,amar:15905280,verde:3129178},n=new ve;for(let s in t)if(t[s].length){let r=new ot(Ee(t[s]),new xe({color:e[s],transparent:!0,opacity:s==="verde"?.55:.8,side:Te,depthWrite:!1}));r.renderOrder=1,n.add(r)}qt.grupo.add(n),qt.trafG=n}var hs=null;function Bv(){if(hs)return hs;let i=4,t=256,e=document.createElement("canvas"),n=document.createElement("canvas");e.width=e.height=n.width=n.height=t;let s=e.getContext("2d"),r=n.getContext("2d");s.fillStyle="#ffffff",s.fillRect(0,0,t,t),r.fillStyle="#000",r.fillRect(0,0,t,t);let o=t/i;for(let c=0;c<i;c++)for(let h=0;h<i;h++){let u=c*o,f=h*o;s.fillStyle="rgba(0,0,0,.10)",s.fillRect(u+o*.18,f+o*.24,o*.64,o*.52),s.fillStyle="#33414f",s.fillRect(u+o*.22,f+o*.28,o*.56,o*.44),s.fillStyle="#5a6b7c",s.fillRect(u+o*.49,f+o*.28,o*.03,o*.44),Math.random()<.55&&(r.fillStyle=Math.random()<.3?"#ffe7b0":"#ffc96b",r.fillRect(u+o*.22,f+o*.28,o*.56,o*.44))}let a=new yn(e),l=new yn(n);for(let c of[a,l])c.wrapS=c.wrapT=Di,c.repeat.set(1/(3.2*i),1/(3.2*i)),c.colorSpace=Ne,c.anisotropy=4;return hs=new Nt({vertexColors:!0,map:a,emissiveMap:l,emissive:0}),hs}var Fh={};function zv(i){let t=i?"n":"d";if(Fh[t])return Fh[t];let e=document.createElement("canvas");e.width=4,e.height=256;let n=e.getContext("2d"),s=n.createLinearGradient(0,0,0,256);i?(s.addColorStop(0,"#03060f"),s.addColorStop(.55,"#0d1630"),s.addColorStop(1,"#27324f")):(s.addColorStop(0,"#5f9fd8"),s.addColorStop(.6,"#a9d0ee"),s.addColorStop(1,"#dce9f2")),n.fillStyle=s,n.fillRect(0,0,4,256);let r=new yn(e);return r.colorSpace=Ne,Fh[t]={t:r,horiz:i?2568783:14477810}}var Jl="muestra";function jd(){let i=!!(qt&&qt.listo&&Ct.pos);if((i?"real":"muestra")!==Jl){Jl=i?"real":"muestra",Mi.ini=!1,xn.visible=!i,nn&&(nn.tren.visible=!i);for(let t of En)t!==Ft&&(t.g.visible=!i);if(qt){qt.grupo.visible=i;for(let t of qt.coches)t.g.visible=i;for(let t of qt.motos)t.g.visible=i;qt.taxi&&(qt.taxi.g.visible=i),qt.cruce&&(qt.cruce.g.visible=i&&Ct.rojo),qt.letreros&&!i&&(qt.letreros.forEach(t=>t.visible=!1),(qt.guias||[]).forEach(t=>t.visible=!1))}i||(Ft.g.rotation.y=0,Ft.z=qi[1]),ql()}}function Hv(i,t,e=22,n){let s=null;for(let r=0;r<qt.calles.length;r++){let o=qt.calles[r];if(o.tipo==="service"&&!n)continue;let a=o.p;for(let l=1;l<a.length;l++){let c=a[l-1][0],h=a[l-1][1],u=a[l][0]-c,f=a[l][1]-h,d=u*u+f*f;if(!d)continue;let p=((i-c)*u+(t-h)*f)/d;p=Math.max(0,Math.min(1,p));let M=c+u*p,x=h+f*p,g=Math.hypot(i-M,t-x),S=g;if(n){let y=Math.sqrt(d);S+=(1-Math.abs((u*n[0]+f*n[1])/y))*8}if(g<e&&(!s||S<s.pen)){let y=Math.sqrt(d);s={ci:r,i:l,t:p,x:M,z:x,d:g,pen:S,dx:u/y,dz:f/y,s:o.cum[l-1]+y*p}}}}return s}function ps(i){return i.ncar?i.oneway?Math.max(1,Math.round(i.ncar)):Math.max(1,Math.round(i.ncar/2)):i.oneway?Math.max(1,Math.min(5,Math.floor(i.w/2.8))):Math.max(1,Math.min(4,Math.floor(i.w/2/2.8)))}function So(i,t){let e=i.nl||ps(i);return i.oneway?-i.w/2+(t+.5)*i.w/e:(t+.5)*i.w/2/e}function Gl(i){let t=i.nl||ps(i);return t>=3?t-2:t-1}var Dd=null;function Gv(){let i=qt,[t,e]=He(i.O,Ct.pos.lat,Ct.pos.lon);i.pj||(i.pj={x:t,z:e,cx:t,cz:e,tx:t,tz:e,h:0,ht:0,ci:-1,s:0,dir:1,rx:t,rz:e,v:0,off:0,offObj:0,carril:null,tc:0});let n=i.pj,s=t-n.rx,r=e-n.rz,o=Math.hypot(s,r),a=o>1.5?[s/o,r/o]:[Math.cos(n.ht),-Math.sin(n.ht)],l=Hv(t,e,25,a);if(l){let c=i.calles[l.ci],h=l.dx*a[0]+l.dz*a[1]>=0?1:-1,u=l.dx*h,f=l.dz*h;n.tx=l.x,n.tz=l.z,(n.ci!==l.ci||n.dir!==h)&&(n.carril=Gl(c)),n.ci=l.ci,n.s=l.s,n.dir=h,(o>1.5||n.ci!==l.ci)&&(n.ht=bn(u,f))}else n.tx=t,n.tz=e,o>1.5&&(n.ht=bn(a[0],a[1])),n.ci=-1;if(o>1.5&&(n.rx=t,n.rz=e),Math.hypot(n.tx-n.cx,n.tz-n.cz)>300){n.cx=n.tx,n.cz=n.tz,n.h=n.ht,n.off=n.offObj=0,i.rastro=[],Mi.ini=!1;for(let c of i.coches)c.ci=-1;for(let c of i.motos)c.ci=-1}}function kv(i,t){let e=kl(i),n=[];return i.calles.forEach((s,r)=>{if(s.tipo==="service"||s.tipo==="living_street")return;let o=s.p[Math.floor(s.p.length/2)];Math.hypot(o[0]-e.x,o[1]-e.z)<t+s.cum[s.cum.length-1]/2&&n.push(r)}),n}function zl(i,t,e,n){let s=i.pj;if(n&&!fe&&s.ci>=0&&Math.random()<.6){let o=i.calles[s.ci],a=o.cum[o.cum.length-1];t.ci=s.ci,t.dir=Math.random()<.75||o.oneway?s.dir:-s.dir,t.s=Math.max(0,Math.min(a,s.s+t.dir*(t.dir===s.dir?(Math.random()<.5?12:-12)+(Math.random()-.5)*220:(Math.random()-.5)*300)))}else{if(!e.length){t.ci=-1;return}t.ci=e[Math.floor(Math.random()*e.length)];let o=i.calles[t.ci],a=o.cum[o.cum.length-1];t.dir=o.oneway||Math.random()<.5?1:-1,t.s=Math.random()*a}t.v=t.vmax*.6,t.lado=(Math.random()-.5)*.6;let r=i.calles[t.ci];t.carril=Math.floor(Math.random()*(r.nl||ps(r)))}function Vv(i){let t=Ct.nivel==="pesado",e=t?46:16,n=6;for(;i.coches.length<e;){let s=zd(),r=yo(s==="trailer"&&!Ct.pico?"sedan":s,ni(kh),2831424);i.coches.push({...r,ci:-1,s:0,dir:1,v:0,vmax:0,a:0,lado:0})}for(;i.coches.length>e;)Ye.remove(i.coches.pop().g);for(;i.motos.length<n;){let s=yo("moto",ni([12986408,1402304,2236962]),ni([3622735,7162945]));i.motos.push({...s,ci:-1,s:0,dir:1,v:12,vmax:12,a:0,fase:Math.random()*6})}i.taxi||(i.taxi=yo("taxi"));for(let s of i.coches)s.vmax=t?3+Math.random()*3:9+Math.random()*5}function Nd(i,t,e=0){let n=i.calles[t.ci],s=Re(n,t.s),r=s.dx*t.dir,o=s.dz*t.dir,a=n.nl||ps(n),l=Math.min(a-1,t.carril==null?a-1:t.carril),c=So(n,l)+e;t.g.position.set(s.x-o*c,ir(n,t.s),s.z+r*c),t.g.rotation.y=bn(r,o)}function Wv(i,t){let e=i.pj;if(e.tc+=t,e.ci<0){e.offObj=0,e.carrilFis=null;return}let n=i.calles[e.ci],s=n.nl||ps(n);(e.carril==null||e.carril>=s)&&(e.carril=Gl(n));let r=Ft.v,o=r>40/3.6,a=p=>(p.s-e.s)*e.dir,l=i.coches.filter(p=>p.ci===e.ci&&p.g.visible),c=(p,M,x)=>l.some(g=>g.dir===e.dir&&(g.carril||0)===p&&a(g)>M&&a(g)<x),h=(p,M)=>l.some(x=>x.dir!==e.dir&&a(x)>p&&a(x)<M),u=l.find(p=>p.dir===e.dir&&(p.carril||0)===e.carril&&a(p)>1&&a(p)<24+r&&p.v<r-1.2);if(e.carril===-1&&h(-3,35))e.carril=0,e.tc=0;else if(e.tc>1.1){if(o&&u){let p=[e.carril-1,e.carril+1].filter(M=>M>=0&&M<s);s===1&&!n.oneway&&!h(-8,55)&&p.push(-1);for(let M of p)if(M===-1||!c(M,-9,16)){e.carril=M,e.tc=0;break}}else if(e.carril!==Gl(n)){let p=Gl(n);c(p,-11,9+r*.6)||(e.carril=p,e.tc=0)}}e.offObj=e.carril===-1?-So(n,0):So(n,e.carril);let f=0,d=1e9;for(let p=0;p<s;p++){let M=Math.abs(So(n,p)-e.off);M<d&&(d=M,f=p)}e.carrilFis=f}function Xv(i,t){let e=i.pj;if(!i.letreros){i.letreros=[],i.guias=[];for(let l=0;l<4;l++){let c=new pi({depthTest:!1,depthWrite:!1,sizeAttenuation:!1,transparent:!0}),h=new Ni(c);h.renderOrder=20,h.center.set(.5,0),h.visible=!1,Ye.add(h),i.letreros.push(h);let u=new Ie;u.setAttribute("position",new he([0,0,0,0,1,0],3));let f=new Gs(u,new es({color:1118481,depthTest:!1,transparent:!0}));f.renderOrder=19,f.visible=!1,f.frustumCulled=!1,Ye.add(f),i.guias.push(f)}}if(i.tLet=(i.tLet||0)+t,i.tLet<.25&&i.letSel){Ud(i);return}i.tLet=0;let n=e.x,s=e.z,r=e.h,o=e.ci>=0?i.calles[e.ci]:null;if(fe){let l=jl();n=l.x,s=l.z,r=fe.h,o=null;let c=28,h=Math.cos(r),u=-Math.sin(r);for(let f of i.calles){if(f.elev||!f.nombre)continue;let d=Pn(f,n,s);d.d<c&&Math.abs(d.dx*h+d.dz*u)>.55&&(c=d.d,o=f)}}i.letV={x:n,z:s};let a=o&&o.nombre;if(i.letSel=[],a){let l=Math.cos(r),c=-Math.sin(r),h=new Set,u=i.cruces.filter(f=>f.a===a||f.b===a).map(f=>{let d=f.x-n,p=f.z-s;return{k:f,ad:d*l+p*c,lat:Math.abs(-d*c+p*l),otro:f.a===a?f.b:f.a}}).filter(f=>f.ad>-6&&f.ad<260&&f.lat<22+o.w).sort((f,d)=>f.ad-d.ad);for(let f of u){if(h.has(f.otro))continue;h.add(f.otro);let d=f.k,p=d.a===a?d.db:d.da,M=d.a===a?d.wa:d.wb,x=-c,g=l,S=p[0]*x+p[1]*g>=0?1:-1,y=Math.abs(p[0]*x+p[1]*g)>.25?M/2+7:0;if(f.px=d.x+p[0]*S*y,f.pz=d.z+p[1]*S*y,i.letSel.push(f),i.letSel.length>=i.letreros.length)break}}Ud(i)}var po=new N;function Ud(i){let t=i.pj,e=Math.tan(Fe.fov*Math.PI/360),n=-1/0;Fe.updateMatrixWorld(),i.letreros.forEach((s,r)=>{let o=i.letSel&&i.letSel[r],a=i.guias&&i.guias[r];if(!o){s.visible=!1,a&&(a.visible=!1);return}let l=_v(o.otro);s.material.map!==l.t&&(s.material.map=l.t,s.material.needsUpdate=!0),s.center.set(l.cx,l.cy);let c=i.letV||t,h=o.px??o.k.x,u=o.pz??o.k.z,f=Math.hypot(h-c.x,u-c.z),d=(.052+.03*Math.max(0,1-f/160))*1.63,p=f>230?Math.max(0,(260-f)/30):1;s.scale.set(d*l.ar,d,1),s.position.set(h,.4,u),s.material.opacity=p,s.visible=!0,s.renderOrder=30-r,po.copy(s.position).applyMatrix4(Fe.matrixWorldInverse);let M=-po.z;if(M>.5){po.copy(s.position).project(Fe);let x=d/e,g=n+.012-po.y;g>0&&(s.position.y+=g*e*M),n=Math.max(n,po.y+Math.max(0,g))+x}if(a){let x=s.position.y>1.2;if(a.visible=x,x){let g=a.geometry.attributes.position;g.setXYZ(0,h,.3,u),g.setXYZ(1,h,s.position.y,u),g.needsUpdate=!0,a.material.opacity=p,a.renderOrder=19-r}}})}function qv(i){let t=qt;Fn+=i,(!t.pj||Dd!==Ct.pos.ts)&&(Dd=Ct.pos.ts,Gv());let e=t.pj,n=1-Math.exp(-i*2.2);e.cx+=(e.tx-e.cx)*n,e.cz+=(e.tz-e.cz)*n;let s=e.ht-e.h;s=Math.atan2(Math.sin(s),Math.cos(s)),e.h+=s*(1-Math.exp(-i*3)),Wv(t,i);let r=e.off;e.off+=(e.offObj-e.off)*(1-Math.exp(-i*1.6));let o=(e.off-r)/Math.max(i,.001);e.x=e.cx+Math.sin(e.h)*e.off,e.z=e.cz+Math.cos(e.h)*e.off;let a=window.__velDbg!=null?window.__velDbg/3.6:Ct.rojo||Ct.llego?0:Ct.vel!=null?Ct.vel/3.6:0,l=Ft.v;Ft.v+=(a-Ft.v)*(1-Math.exp(-i*1.5)),Ft.a=(Ft.v-l)/Math.max(i,.001);{let y=e.ci>=0?t.calles[e.ci]:null,_=y&&y.elev?ir(y,Pn(y,e.cx,e.cz).s):0;e.y=(e.y||0)+(_-(e.y||0))*(1-Math.exp(-i*2.5))}Ft.g.position.set(e.x,e.y,e.z),Ft.g.rotation.y=e.h-Math.max(-.3,Math.min(.3,o*.09));let c=Ft.a<-.4||Ft.v<.4;Ft.stop.material=c?vo:sr,Ft.glow.visible=c||Ct.noche,Ft.glow.scale.x=c?5.5:2.5,us.position.y=3.3+Math.sin(Fn*3)*.2,us.rotation.y+=.03;let h=t.rastro[t.rastro.length-1];(!h||Math.hypot(h[0]-e.x,h[1]-e.z)>.6)&&(t.rastro.push([e.x,e.z]),t.rastro.length>120&&t.rastro.shift()),Vv(t);let u=kv(t,320),f=Ct.nivel==="pesado",d={};for(let y of t.coches){if((y.ci<0||y.ci>=t.calles.length)&&zl(t,y,u,f),y.ci<0){y.g.visible=!1;continue}let _=t.calles[y.ci],b=_.cum[_.cum.length-1],E=Re(_,y.s),m=kl(t);if(Math.hypot(E.x-m.x,E.z-m.z)>380||y.s<=0&&y.dir<0||y.s>=b&&y.dir>0){zl(t,y,u,f);continue}(d[y.ci+":"+y.dir+":"+(y.carril||0)]||=[]).push(y)}for(let y in d){let _=d[y],[b,E,m]=y.split(":").map(Number),v=b===e.ci&&E===e.dir&&(m===e.carril||m===e.carrilFis),R=_.map(A=>({o:A,s:A.s}));v&&R.push({o:null,s:e.s,v:Ft.v}),R.sort((A,I)=>(I.s-A.s)*E);for(let A=0;A<R.length;A++){let I=R[A];if(!I.o)continue;let L=I.o,B=L.vmax;if(A>0){let W=(R[A-1].s-L.s)*E-6;B=Math.min(B,Math.max(0,W*.9))}f&&Math.random()<.002&&(L.frena=1.3),L.frena>0&&(L.frena-=i,B=0),v&&A>0&&!R[A-1].o&&(e.s-L.s)*E<0;let P=L.v;if(L.v+=(B-L.v)*(1-Math.exp(-i*2)),L.a=(L.v-P)/Math.max(i,.001),L.s+=L.v*E*i,v){let W=(L.s-e.s)*E;W>-5&&W<6&&(L.s=e.s+E*(W>=0?6:-6))}Nd(t,L),L.g.visible=!0;let z=L.a<-.5||L.v<.5;L.stop.material=z?vo:sr,L.glow.visible=z||Ct.noche,L.glow.scale.x=z?5.5:2.5,L.haz.visible=Ct.noche}}for(let y of t.motos){if((y.ci<0||y.ci>=t.calles.length)&&zl(t,y,u,!0),y.ci<0){y.g.visible=!1;continue}let _=t.calles[y.ci],b=_.cum[_.cum.length-1];y.fase+=i,y.s+=y.vmax*y.dir*i;let E=Re(_,y.s),m=kl(t);if(y.s<=0||y.s>=b||Math.hypot(E.x-m.x,E.z-m.z)>380){zl(t,y,u,!0);continue}{let v=_.nl||ps(_);y.carril=v-1,Nd(t,y,-(v>=2?_.w/(_.oneway?1:2)/v/2:So(_,0)*.5)+Math.sin(y.fase*.9)*.6)}y.g.visible=!0,y.haz.visible=Ct.noche}{let y=t.taxi,_=t.rastro,b=0,E=_.length-1,m=e.x,v=e.z,R=e.h,A=7.5+Math.min(6,Ft.v*.5);for(;E>0&&b<A;){let I=_[E][0]-_[E-1][0],L=_[E][1]-_[E-1][1],B=Math.hypot(I,L);if(b+B>=A){let P=(A-b)/B;m=_[E][0]-I*P,v=_[E][1]-L*P,R=bn(I,L),b=A;break}b+=B,E--}b<A&&(m=e.x-Math.cos(e.h)*A,v=e.z+Math.sin(e.h)*A,R=e.h),y.g.position.set(m,e.y||0,v),y.g.rotation.y=R,y.g.visible=!0,y.stop.material=c?vo:sr,y.glow.visible=c||Ct.noche,y.glow.scale.x=c?5.5:2.5,y.haz.visible=Ct.noche}Zv(i),Yv(i);let p=kl(t),M=y=>Math.hypot(y.x-p.x,y.z-p.z)<520;{let y=[];for(let _ of t.troles)Rd(_,i,12,12,1,0,1.75,8.5,y);Yl(t.trole,y.filter(M))}{let y=[];for(let _ of t.mbs)Rd(_,i,10,18,1,0,1.75,0,y);Yl(t.mbus,y.filter(M))}if(qd(t.luces,Fn),Xv(t,i),t.hitos&&t.hitos.sem&&Cv(t.hitos.sem,Fn),t.radar){let y=Ct.foto&&Date.now()-Ct.foto<1500;t.radar.flash.visible=y&&Math.floor(Fn*10)%2===0,t.radar.led.material.color.setHex(Math.floor(Fn*2)%2?16722458:5570560)}let x=new N;Fe.getWorldDirection(x);let g=-x.z,S=x.x;for(let y of t.etiquetas)y.rotation.y=y.userData.base+(y.userData.dx*g+y.userData.dz*S<0?Math.PI:0)}function Yv(i){let t=qt,e=t.tren,n=new oe,s=new je,r=new N,o=new N(1,1,1),a=new N(0,1,0),l=0,c=16;for(let h of t.rieles){h.t+=i;let u=h.cum[h.cum.length-1],f=h.vagones*15.3,d=h.periodo*c;for(let p of[1,-1]){let M=p*1.75,x=(h.t+(p<0?h.periodo/2:0))*c%Math.max(d,u+f+60),g=Math.max(d,u+f+60);for(let S=0;S*d<g&&S<40;S++){let y=(x+S*d)%g-30;for(let _=0;_<h.vagones&&l<400;_++){let b=y-_*15.3;if(b<0||b>u)continue;p<0&&(b=u-b);let E=Re(h,b),m=E.dx*p,v=E.dz*p;Math.hypot(E.x-t.pj.x,E.z-t.pj.z)>600||(r.set(E.x-v*M,h.y,E.z+m*M),s.setFromAxisAngle(a,bn(m,v)),e.setMatrixAt(l++,n.compose(r,s,o)))}}}}e.count=l,e.instanceMatrix.needsUpdate=!0}function Zv(i){let t=qt,e=t.pj;if(!t.cruce){let a=new ve,l=[];for(let g=-8;g<=8;g++)l.push(new De(3.2,.6).rotateX(-Math.PI/2).translate(0,0,g*1.1));let c=new ot(Ee(l),new xe({color:15921906}));c.position.y=.07,a.add(c);let h=new ve,u=new Nt({color:3882821}),f=new ot(new ge(.12,.14,6,8),u);f.position.y=3,h.add(f);let d=new ot(new Xt(.45,1.5,.55),new Nt({color:1908514}));d.position.set(-.1,5.2,0),h.add(d);let p=new ot(new Nn(.2,10,8),new xe({color:16722458}));p.position.set(-.36,5.68,0),h.add(p),[.47,.94].forEach(g=>{let S=new ot(new Nn(.17,10,8),new xe({color:2236962}));S.position.set(-.36,5.68-g,0),h.add(S)}),a.add(h);let M=[15029053,3120750,8084694,14722342],x=[0,1,2,3].map(g=>{let S=new ve,y=new ot(new ge(.22,.26,.95,8),new Nt({color:M[g]}));y.position.y=1.15,y.castShadow=!0;let _=new ot(new ge(.2,.18,.7,8),new Nt({color:2899543}));_.position.y=.35;let b=new ot(new Nn(.2,10,8),new Nt({color:13209186}));b.position.y=1.85;let E=new ot(new Xt(.12,.5,.12),new xe({color:16765952}));return E.position.y=2.6,E.visible=!1,S.add(y,_,b,E),a.add(S),{g:S,su:E,z:0,dir:1,modo:"espera",t:g*.9,x:(g-1.5)*.7}});Ye.add(a),t.cruce={g:a,sem:h,peat:x,cm:c,activo:!1,mitad:8}}let n=t.cruce;if(!Ct.rojo||(e.y||0)>1){n.g.visible=!1,n.activo=!1;return}if(!n.activo){n.activo=!0;let a=e.ci>=0?t.calles[e.ci]:null,l=a?a.w:10;n.mitad=l/2+1.3;let c=Math.cos(e.h),h=-Math.sin(e.h);n.g.position.set(e.tx+c*7,0,e.tz+h*7),n.g.rotation.y=e.h,n.cm.scale.z=Math.max(.5,l/18),n.sem.position.set(-1.5,0,n.mitad-.3),n.peat.forEach((u,f)=>{u.z=(f%2?1:-1)*n.mitad,u.dir=-Math.sign(u.z),u.modo="espera",u.t=f*.9})}n.g.visible=!0,n.g.updateMatrixWorld();let s=new oe().copy(n.g.matrixWorld).invert(),r=new N,o=a=>t.motos.some(l=>(r.copy(l.g.position).applyMatrix4(s),r.x>-16&&r.x<1.5&&Math.abs(r.z-a)<1.6));for(let a of n.peat){if(a.modo==="espera")a.t-=i,a.t<=0&&!o(a.z+a.dir*2)&&(a.modo="cruza");else if(a.modo==="cruza"){let l=a.z+a.dir*1.4*i;o(l+a.dir*1.2)&&Math.abs(a.z)<n.mitad-.5?(a.modo="huye",a.dir=-a.dir):(a.z=l,Math.abs(a.z)>=n.mitad&&Math.sign(a.z)===Math.sign(a.dir)&&(a.modo="espera",a.t=2+Math.random()*3,a.dir=-Math.sign(a.z)))}else a.z+=a.dir*3.4*i,Math.abs(a.z)>=n.mitad&&(a.modo="espera",a.t=1.2+Math.random()*1.5,a.dir=-Math.sign(a.z));a.g.position.set(a.x,a.modo!=="espera"?Math.abs(Math.sin(Fn*(a.modo==="huye"?16:9)))*.08:0,a.z),a.su.visible=a.modo==="huye"}}var fe=null,ki=new Map,yi=null,Fd=0;function Qd(i,t,e){return{lat:i.lat-e/$d,lon:i.lon+t/(111320*Math.cos(i.lat*Math.PI/180))}}function jl(){let[i,t]=He(qt.O,fe.lat,fe.lon);return{x:i,z:t}}function kl(i){return fe?jl():{x:i.pj.x,z:i.pj.z}}function $l(){return!!(qt&&qt.listo&&Ct.pos&&qt.pj)}function Oh(){return fe?!0:$l()?(fe={...Qd(qt.O,qt.pj.x,qt.pj.z),h:qt.pj.h,z:1},jh(!0),!0):!1}function qh(){fe=null,jh(!1),Hl(),Vl(!0)}function jh(i){qe&&(yi||(yi=document.createElement("button"),yi.type="button",yi.textContent="\u{1F4CD} Volver a mi carro",yi.style.cssText="position:absolute;right:10px;bottom:44px;z-index:4;padding:10px 14px;border-radius:999px;border:0;background:#1f6feb;color:#fff;font:600 15px system-ui,sans-serif;box-shadow:0 4px 14px rgba(0,0,0,.35);display:none",yi.onclick=t=>{t.stopPropagation(),qh()}),yi.parentNode!==qe&&(getComputedStyle(qe).position==="static"&&(qe.style.position="relative"),qe.appendChild(yi)),yi.style.display=i?"block":"none")}function Od(i,t){let e=qe&&qe.clientHeight||300,n=45*fe.z/e,s=Math.cos(fe.h),r=-Math.sin(fe.h),o=-r,a=s,l=jl();l.x+=(s*t-o*i)*n,l.z+=(r*t-a*i)*n,Object.assign(fe,Qd(qt.O,l.x,l.z))}function Vl(i){let t=performance.now();if(!(!i&&t-Fd<900)){Fd=t;try{window.__v3Explorar&&window.__v3Explorar(fe?{lat:fe.lat,lon:fe.lon}:null)}catch{}}}function Jv(i){i.style.touchAction="none";for(let e of["touchstart","touchmove"])i.addEventListener(e,n=>{n.cancelable&&n.preventDefault()},{passive:!1});for(let e of["gesturestart","gesturechange"])i.addEventListener(e,n=>n.preventDefault());i.addEventListener("pointerdown",e=>{if(!$l()){try{window.__v3Explorar&&window.__v3Explorar({sinMapa:!0})}catch{}return}try{i.setPointerCapture(e.pointerId)}catch{}ki.set(e.pointerId,{x:e.clientX,y:e.clientY,x0:e.clientX,y0:e.clientY})}),i.addEventListener("pointermove",e=>{let n=ki.get(e.pointerId);if(n){if(ki.size===1){let s=e.clientX-n.x,r=e.clientY-n.y;if(!fe&&Math.hypot(e.clientX-n.x0,e.clientY-n.y0)<8)return;if(Ve==="propia"&&!fe){Sn.yaw-=s*.008,Sn.pitch=Math.max(.05,Math.min(1.5,Sn.pitch+r*.005)),n.x=e.clientX,n.y=e.clientY,e.preventDefault();return}if(!Oh())return;e.buttons===2||e.shiftKey?fe.h-=s*.008:Od(s,r),n.x=e.clientX,n.y=e.clientY}else if(ki.size===2){let[s,r]=[...ki.values()],o=Math.hypot(s.x-r.x,s.y-r.y),a=Math.atan2(r.y-s.y,r.x-s.x),l=(s.x+r.x)/2,c=(s.y+r.y)/2;n.x=e.clientX,n.y=e.clientY;let h=Math.hypot(s.x-r.x,s.y-r.y),u=Math.atan2(r.y-s.y,r.x-s.x),f=(s.x+r.x)/2,d=(s.y+r.y)/2;if(Ve==="propia"&&!fe){o>10&&h>10&&(Sn.dist=Math.max(6,Math.min(450,Sn.dist*o/h)));let M=u-a;M=Math.atan2(Math.sin(M),Math.cos(M)),Sn.yaw+=M,e.preventDefault();return}if(!Oh())return;o>10&&h>10&&(fe.z=Math.max(.45,Math.min(14,fe.z*o/h)));let p=u-a;p=Math.atan2(Math.sin(p),Math.cos(p)),fe.h+=p,Od(f-l,d-c)}Vl(),e.preventDefault()}});let t=e=>{ki.delete(e.pointerId)&&(!ki.size&&Ve==="propia"&&Ad(),!ki.size&&fe&&Vl(!0))};i.addEventListener("pointerup",t),i.addEventListener("pointercancel",t),i.addEventListener("wheel",e=>{if($l()){if(e.preventDefault(),Ve==="propia"&&!fe){Sn.dist=Math.max(6,Math.min(450,Sn.dist*Math.exp(e.deltaY*.0015))),Ad();return}Oh()&&(fe.z=Math.max(.45,Math.min(14,fe.z*Math.exp(e.deltaY*.0015))),Vl())}},{passive:!1}),i.addEventListener("contextmenu",e=>e.preventDefault())}function $v(i,t){if(!qe)return;let e=document.createElement("div");e.textContent=i,e.style.cssText="position:absolute;left:50%;top:44%;transform:translate(-50%,-50%);z-index:4;max-width:86%;padding:10px 14px;border-radius:12px;background:#000c;color:#fff;font:600 15px system-ui,sans-serif;pointer-events:none;transition:opacity .6s;text-align:center",getComputedStyle(qe).position==="static"&&(qe.style.position="relative"),qe.appendChild(e),setTimeout(()=>{e.style.opacity="0",setTimeout(()=>e.remove(),700)},t||3500)}var Yh=!1;function Kv(){if(Yh||!qe||!$l())return;Yh=!0;try{if(localStorage.getItem("v3pista")>="3")return;localStorage.setItem("v3pista",String(+(localStorage.getItem("v3pista")||0)+1))}catch{}let i=document.createElement("div");i.textContent="\u261D\uFE0F Arrastra con el dedo para recorrer las calles",i.style.cssText="position:absolute;left:50%;top:44%;transform:translate(-50%,-50%);z-index:4;padding:10px 14px;border-radius:12px;background:#000b;color:#fff;font:600 15px system-ui,sans-serif;pointer-events:none;transition:opacity .6s;text-align:center",getComputedStyle(qe).position==="static"&&(qe.style.position="relative"),qe.appendChild(i),setTimeout(()=>{i.style.opacity="0",setTimeout(()=>i.remove(),700)},3500)}function jv(i){let t=jl(),e=Math.cos(fe.h),n=-Math.sin(fe.h),s=fe.z,r=9.5*s,o=6.4*Math.pow(s,1.12),a=14*Math.min(s,4),l=new N(t.x-e*r,o,t.z-n*r),c=new N(t.x+e*a,0,t.z+n*a),h=1-Math.exp(-i*10);bi.lerp(l,h),Ti.lerp(c,h);let u=Fe.aspect<1?68:50;Fe.fov!==u&&(Fe.fov=u,Fe.updateProjectionMatrix()),Fe.position.copy(bi),Fe.lookAt(Ti),_n.position.set(t.x+25,45,t.z+30),_n.target.position.set(t.x,0,t.z)}function Mi(i){if(Yh||Kv(),fe){jv(i);return}let t=qt.pj,[e,n,s,r,o=0]=uv[Ve],a=Math.cos(t.h),l=-Math.sin(t.h),c=-l,h=a,u=Ve==="atras"?0:3,f=t.y||0,d=new N(t.x+a*e+c*s,n+f,t.z+l*e+h*s),p=new N(t.x+a*r+c*u,o+f,t.z+l*r+h*u);if(Ve==="propia"){let M=t.h+Math.PI+Sn.yaw,x=Sn.dist*Math.cos(Sn.pitch),g=Sn.dist*Math.sin(Sn.pitch)+1.5;d.set(t.x+Math.cos(M)*x,f+g,t.z-Math.sin(M)*x),p.set(t.x+a*3,f+1,t.z+l*3)}else if(Ve!=="arriba"){let M=Math.max(0,Math.min(1,(f-.8)/4));Mi.fp=(Mi.fp||0)+(M-(Mi.fp||0))*(1-Math.exp(-i*1.5));let x=Mi.fp;x>.01&&(d.x-=a*16*x,d.z-=l*16*x,d.y+=20*x,p.x+=a*10*x,p.z+=l*10*x)}if(window.__altoDbg&&(d.set(t.x,window.__altoDbg,t.z+1),p.set(t.x,0,t.z)),window.__camDbg){let M=window.__camDbg;d.set(...M[0]),p.set(...M[1]),bi.copy(d),Ti.copy(p)}if(!Mi.ini)bi.copy(d),Ti.copy(p),Mi.ini=!0;else{let M=1-Math.exp(-i*2.5);bi.lerp(d,M),Ti.lerp(p,M)}Fe.position.copy(bi),Fe.lookAt(Ti),_n.position.set(t.x+25,45,t.z+30),_n.target.position.set(t.x,0,t.z)}window.Vista3D={disponible(){try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}},montar(i){vn||(dv(),Jv(vn.domElement)),qe=i,vn.domElement.parentNode!==i&&i.prepend(vn.domElement),fe&&jh(!0),tr&&tr.disconnect(),tr=new ResizeObserver(Hl),tr.observe(i),Hl(),Th||(Th=!0,xo=0,zh=requestAnimationFrame(Wd))},desmontar(){Th=!1,cancelAnimationFrame(zh),tr&&tr.disconnect()},actualizar(i){let t=Ct.viaje,e=Ct.noche;if(Object.assign(Ct,i),Ct.viaje&&!t&&(Ct._a=Ft?Ft.x+Ei:null),Ct.viaje||(Ct._a=null),!vn)return;let n=Ct.nivel+Ct.zona+Ct.pico+Ct.metrobus;n!==Vh?(Vh=n,Hd(),ql()):Ct.noche!==e&&ql(),jd()},mapa(i){Ov(i)},explorando(){return fe?{lat:fe.lat,lon:fe.lon}:null},dejarDeExplorar(){fe&&qh()},trafico(i){Kd(i)},modo(){return qt&&qt.listo&&Ct.pos?"real":"muestra"},camara(){Ve=Ch[(Ch.indexOf(Ve)+1)%Ch.length];try{localStorage.setItem("vista3dCam3",Ve)}catch{}return fe&&qh(),Hl(),Ve==="propia"&&$v("\u270B Vista personalizada: arrastra para girar e inclinar, pellizca para acercar o alejar. Se queda guardada y sigue a tu carro.",5500),Td[Ve]},nombreCamara(){return Td[Ve]},get _dbg(){return{jugador:Ft,vehs:En,E:Ct,desplaz:Ei,REAL:qt,cam:Fe}}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

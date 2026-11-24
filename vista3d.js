(()=>{var ju=0,Vc=1,Qu=2;var io=1,Wa=2,Js=3,ki=0,xn=1,ye=2,as=0,$s=1,Mi=2,Wc=3,Xc=4,tf=5;var ls=100,ef=101,nf=102,sf=103,rf=104,of=200,af=201,lf=202,cf=203,qc=204,Yc=205,hf=206,uf=207,ff=208,df=209,pf=210,mf=211,gf=212,xf=213,_f=214,oa=0,aa=1,la=2,Us=3,ca=4,ha=5,ua=6,fa=7,Xa=0,vf=1,yf=2,si=0,Zc=1,Jc=2,$c=3,Kc=4,jc=5,Qc=6,th=7;var eh=300,cs=301,Ks=302,qa=303,Ya=304,jn=1e3,$n=1001,da=1002,Qe=1003,Mf=1004;var so=1005;var mn=1006,Za=1007;var Si=1008;var En=1009,nh=1010,ih=1011,js=1012,Ja=1013,Wn=1014,Fn=1015,Xn=1016,$a=1017,Ka=1018,hs=1020,sh=35902,rh=35899,oh=1021,ah=1022,qn=1023,gi=1026,Ei=1027,ja=1028,Qa=1029,Vi=1030,tl=1031;var el=1033,ro=33776,oo=33777,ao=33778,lo=33779,nl=35840,il=35841,sl=35842,rl=35843,ol=36196,al=37492,ll=37496,cl=37488,hl=37489,co=37490,ul=37491,fl=37808,dl=37809,pl=37810,ml=37811,gl=37812,xl=37813,_l=37814,vl=37815,yl=37816,Ml=37817,Sl=37818,El=37819,bl=37820,Tl=37821,wl=36492,Al=36494,Rl=36495,Cl=36283,Il=36284,ho=36285,Pl=36286;var Er=2300,pa=2301,sa=2302,Lc=2303,Dc=2400,Nc=2401,Uc=2402;var Sf=3200;var Ll=0,Ef=1,bi="",Fe="srgb",br="srgb-linear",Tr="linear",be="srgb";var ra=7680;var bf=519,Tf=512,wf=513,Af=514,lh=515,Rf=516,Cf=517,ch=518,hh=519,uh=35044;var fh="300 es",Un=2e3,Fs=2001;function hp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function up(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function If(){let i=wr("canvas");return i.style.display="block",i}var pu={},Os=null;function Ar(...i){let t="THREE."+i.shift();Os?Os("log",t,...i):console.log(t,...i)}function Pf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function jt(...i){i=Pf(i);let t="THREE."+i.shift();if(Os)Os("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ee(...i){i=Pf(i);let t="THREE."+i.shift();if(Os)Os("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function yr(...i){let t=i.join(" ");t in pu||(pu[t]=!0,jt(...i))}function Lf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Df={[oa]:oa,[la]:ua,[ca]:ca,[Us]:ha,[aa]:aa,[ua]:la,[fa]:fa,[ha]:Us},Qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var rc=Math.PI/180,ma=180/Math.PI;function Wi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function fe(i,t,e){return Math.max(t,Math.min(e,i))}function fp(i,t){return(i%t+t)%t}function oc(i,t,e){return(1-e)*i+e*t}function Nf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Dl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Uf(i,t){if(t.constructor===Float32Array)return i;let e=Dl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Ff(i,t){if(t.constructor===Float32Array)return i;let e=Dl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var xt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ve=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],p=r[o+2],S=r[o+3];if(u!==S||l!==f||c!==d||h!==p){let x=l*f+c*d+h*p+u*S;x<0&&(f=-f,d=-d,p=-p,S=-S,x=-x);let m=1-a;if(x<.9995){let M=Math.acos(x),y=Math.sin(M);m=Math.sin(m*M)/y,a=Math.sin(a*M)/y,l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+S*a}else{l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+S*a;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ac.copy(this).projectOnVector(t),this.sub(ac)}reflect(t){return this.sub(ac.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ac=new N,mu=new Ve,ie=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],S=s[0],x=s[3],m=s[6],M=s[1],y=s[4],_=s[7],E=s[2],b=s[5],g=s[8];return r[0]=o*S+a*M+l*E,r[3]=o*x+a*y+l*b,r[6]=o*m+a*_+l*g,r[1]=c*S+h*M+u*E,r[4]=c*x+h*y+u*b,r[7]=c*m+h*_+u*g,r[2]=f*S+d*M+p*E,r[5]=f*x+d*y+p*b,r[8]=f*m+d*_+p*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=e*u+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/p;return t[0]=u*S,t[1]=(s*c-h*n)*S,t[2]=(a*n-s*o)*S,t[3]=f*S,t[4]=(h*e-s*l)*S,t[5]=(s*r-a*e)*S,t[6]=d*S,t[7]=(n*l-c*e)*S,t[8]=(o*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return yr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lc.makeScale(t,e)),this}rotate(t){return yr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lc.makeRotation(-t)),this}translate(t,e){return yr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},lc=new ie,gu=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xu=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dp(){let i={enabled:!0,workingColorSpace:br,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===be&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===be&&(s.r=Ns(s.r),s.g=Ns(s.g),s.b=Ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?Tr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[br]:{primaries:t,whitePoint:n,transfer:Tr,toXYZ:gu,fromXYZ:xu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:n,transfer:be,toXYZ:gu,fromXYZ:xu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),i}var ge=dp();function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var gs,ga=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{gs===void 0&&(gs=wr("canvas")),gs.width=t.width,gs.height=t.height;let s=gs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=gs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=wr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mi(e[n]/255)*255):e[n]=mi(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},pp=0,Bs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Wi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(cc(s[o].image)):r.push(cc(s[o]))}else r=cc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function cc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ga.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}var mp=0,hc=new N,gn=class i extends Qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=$n,s=$n,r=mn,o=Si,a=qn,l=En,c=i.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Wi(),this.name="",this.source=new Bs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(hc).x}get height(){return this.source.getSize(hc).y}get depth(){return this.source.getSize(hc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==eh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jn:t.x=t.x-Math.floor(t.x);break;case $n:t.x=t.x<0?0:1;break;case da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jn:t.y=t.y-Math.floor(t.y);break;case $n:t.y=t.y<0?0:1;break;case da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=eh;gn.DEFAULT_ANISOTROPY=1;var Oe=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],S=l[2],x=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-S)<.01&&Math.abs(p-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+S)<.1&&Math.abs(p+x)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,_=(d+1)/2,E=(m+1)/2,b=(h+f)/4,g=(u+S)/4,v=(p+x)/4;return y>_&&y>E?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=b/n,r=g/n):_>E?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=v/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=g/r,s=v/r),this.set(n,s,r,e),this}let M=Math.sqrt((x-p)*(x-p)+(u-S)*(u-S)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(x-p)/M,this.y=(u-S)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xa=class extends Qn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new gn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Bs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cn=class extends xa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Rr=class extends gn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var _a=class extends gn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var oe=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,p,S,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,p,S,x)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,p,S,x){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=S,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/xs.setFromMatrixColumn(t,0).length(),r=1/xs.setFromMatrixColumn(t,1).length(),o=1/xs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,p=a*h,S=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-S*c,e[9]=-a*l,e[2]=S-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,S=c*u;e[0]=f+S*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=S+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,S=c*u;e[0]=f-S*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=S-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,p=a*h,S=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+S,e[1]=l*u,e[5]=S*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,S=a*c;e[0]=l*h,e[4]=S-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-S*u}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,S=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+S,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=S*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gp,t,xp)}lookAt(t,e,n){let s=this.elements;return An.subVectors(t,e),An.lengthSq()===0&&(An.z=1),An.normalize(),Li.crossVectors(n,An),Li.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Li.crossVectors(n,An)),Li.normalize(),Io.crossVectors(An,Li),s[0]=Li.x,s[4]=Io.x,s[8]=An.x,s[1]=Li.y,s[5]=Io.y,s[9]=An.y,s[2]=Li.z,s[6]=Io.z,s[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],S=n[6],x=n[10],m=n[14],M=n[3],y=n[7],_=n[11],E=n[15],b=s[0],g=s[4],v=s[8],A=s[12],w=s[1],P=s[5],I=s[9],z=s[13],L=s[2],H=s[6],W=s[10],q=s[14],ft=s[3],Q=s[7],G=s[11],J=s[15];return r[0]=o*b+a*w+l*L+c*ft,r[4]=o*g+a*P+l*H+c*Q,r[8]=o*v+a*I+l*W+c*G,r[12]=o*A+a*z+l*q+c*J,r[1]=h*b+u*w+f*L+d*ft,r[5]=h*g+u*P+f*H+d*Q,r[9]=h*v+u*I+f*W+d*G,r[13]=h*A+u*z+f*q+d*J,r[2]=p*b+S*w+x*L+m*ft,r[6]=p*g+S*P+x*H+m*Q,r[10]=p*v+S*I+x*W+m*G,r[14]=p*A+S*z+x*q+m*J,r[3]=M*b+y*w+_*L+E*ft,r[7]=M*g+y*P+_*H+E*Q,r[11]=M*v+y*I+_*W+E*G,r[15]=M*A+y*z+_*q+E*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],S=t[7],x=t[11],m=t[15],M=l*d-c*f,y=a*d-c*u,_=a*f-l*u,E=o*d-c*h,b=o*f-l*h,g=o*u-a*h;return e*(S*M-x*y+m*_)-n*(p*M-x*E+m*b)+s*(p*y-S*E+m*g)-r*(p*_-S*b+x*g)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],S=t[13],x=t[14],m=t[15],M=e*a-n*o,y=e*l-s*o,_=e*c-r*o,E=n*l-s*a,b=n*c-r*a,g=s*c-r*l,v=h*S-u*p,A=h*x-f*p,w=h*m-d*p,P=u*x-f*S,I=u*m-d*S,z=f*m-d*x,L=M*z-y*I+_*P+E*w-b*A+g*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/L;return t[0]=(a*z-l*I+c*P)*H,t[1]=(s*I-n*z-r*P)*H,t[2]=(S*g-x*b+m*E)*H,t[3]=(f*b-u*g-d*E)*H,t[4]=(l*w-o*z-c*A)*H,t[5]=(e*z-s*w+r*A)*H,t[6]=(x*_-p*g-m*y)*H,t[7]=(h*g-f*_+d*y)*H,t[8]=(o*I-a*w+c*v)*H,t[9]=(n*w-e*I-r*v)*H,t[10]=(p*b-S*_+m*M)*H,t[11]=(u*_-h*b-d*M)*H,t[12]=(a*A-o*P-l*v)*H,t[13]=(e*P-n*A+s*v)*H,t[14]=(S*y-p*E-x*M)*H,t[15]=(h*E-u*y+f*M)*H,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,S=o*h,x=o*u,m=a*u,M=l*c,y=l*h,_=l*u,E=n.x,b=n.y,g=n.z;return s[0]=(1-(S+m))*E,s[1]=(d+_)*E,s[2]=(p-y)*E,s[3]=0,s[4]=(d-_)*b,s[5]=(1-(f+m))*b,s[6]=(x+M)*b,s[7]=0,s[8]=(p+y)*g,s[9]=(x-M)*g,s[10]=(1-(f+S))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=xs.set(s[0],s[1],s[2]).length(),a=xs.set(s[4],s[5],s[6]).length(),l=xs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Hn.copy(this);let c=1/o,h=1/a,u=1/l;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=u,Hn.elements[9]*=u,Hn.elements[10]*=u,e.setFromRotationMatrix(Hn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Un,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),p,S;if(l)p=r/(o-r),S=o*r/(o-r);else if(a===Un)p=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===Fs)p=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Un,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),p,S;if(l)p=1/(o-r),S=o/(o-r);else if(a===Un)p=-2/(o-r),S=-(o+r)/(o-r);else if(a===Fs)p=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},xs=new N,Hn=new oe,gp=new N(0,0,0),xp=new N(1,1,1),Li=new N,Io=new N,An=new N,_u=new oe,vu=new Ve,xi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _u.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_u,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vu.setFromEuler(this),this.setFromQuaternion(vu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xi.DEFAULT_ORDER="XYZ";var Cr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},_p=0,yu=new N,_s=new Ve,ci=new oe,Po=new N,cr=new N,vp=new N,yp=new Ve,Mu=new N(1,0,0),Su=new N(0,1,0),Eu=new N(0,0,1),bu={type:"added"},Mp={type:"removed"},vs={type:"childadded",child:null},uc={type:"childremoved",child:null},tn=class i extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new xi,n=new Ve,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new ie}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.multiply(_s),this}rotateOnWorldAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.premultiply(_s),this}rotateX(t){return this.rotateOnAxis(Mu,t)}rotateY(t){return this.rotateOnAxis(Su,t)}rotateZ(t){return this.rotateOnAxis(Eu,t)}translateOnAxis(t,e){return yu.copy(t).applyQuaternion(this.quaternion),this.position.add(yu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mu,t)}translateY(t){return this.translateOnAxis(Su,t)}translateZ(t){return this.translateOnAxis(Eu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Po.copy(t):Po.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(cr,Po,this.up):ci.lookAt(Po,cr,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(ci),this.quaternion.premultiply(_s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bu),vs.child=t,this.dispatchEvent(vs),vs.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mp),uc.child=t,this.dispatchEvent(uc),uc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bu),vs.child=t,this.dispatchEvent(vs),vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,t,vp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,yp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};tn.DEFAULT_UP=new N(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _e=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sp={type:"move"},zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let S of t.hand.values()){let x=e.getJointPose(S,n),m=this._getHandJoint(c,S);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new _e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function fc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ae=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ge.workingColorSpace){if(t=fp(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=fc(o,r,t+1/3),this.g=fc(o,r,t),this.b=fc(o,r,t-1/3)}return ge.colorSpaceToWorking(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){let n=Of[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return ge.workingToColorSpace(cn.copy(this),t),Math.round(fe(cn.r*255,0,255))*65536+Math.round(fe(cn.g*255,0,255))*256+Math.round(fe(cn.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(cn.copy(this),e);let n=cn.r,s=cn.g,r=cn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=Fe){ge.workingToColorSpace(cn.copy(this),t);let e=cn.r,n=cn.g,s=cn.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Di),this.setHSL(Di.h+t,Di.s+e,Di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Di),t.getHSL(Lo);let n=oc(Di.h,Lo.h,e),s=oc(Di.s,Lo.s,e),r=oc(Di.l,Lo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new ae;ae.NAMES=Of;var Ir=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ae(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Pr=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Gn=new N,hi=new N,dc=new N,ui=new N,ys=new N,Ms=new N,Tu=new N,pc=new N,mc=new N,gc=new N,xc=new Oe,_c=new Oe,vc=new Oe,pi=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Gn.subVectors(t,e),s.cross(Gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Gn.subVectors(s,e),hi.subVectors(n,e),dc.subVectors(t,e);let o=Gn.dot(Gn),a=Gn.dot(hi),l=Gn.dot(dc),c=hi.dot(hi),h=hi.dot(dc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return xc.setScalar(0),_c.setScalar(0),vc.setScalar(0),xc.fromBufferAttribute(t,e),_c.fromBufferAttribute(t,n),vc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(xc,r.x),o.addScaledVector(_c,r.y),o.addScaledVector(vc,r.z),o}static isFrontFacing(t,e,n,s){return Gn.subVectors(n,e),hi.subVectors(t,e),Gn.cross(hi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Gn.cross(hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ys.subVectors(s,n),Ms.subVectors(r,n),pc.subVectors(t,n);let l=ys.dot(pc),c=Ms.dot(pc);if(l<=0&&c<=0)return e.copy(n);mc.subVectors(t,s);let h=ys.dot(mc),u=Ms.dot(mc);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(ys,o);gc.subVectors(t,r);let d=ys.dot(gc),p=Ms.dot(gc);if(p>=0&&d<=p)return e.copy(r);let S=d*c-l*p;if(S<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Ms,a);let x=h*p-d*u;if(x<=0&&u-h>=0&&d-p>=0)return Tu.subVectors(r,s),a=(u-h)/(u-h+(d-p)),e.copy(s).addScaledVector(Tu,a);let m=1/(x+S+f);return o=S*m,a=f*m,e.copy(n).addScaledVector(ys,o).addScaledVector(Ms,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ti=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,kn):kn.fromBufferAttribute(r,o),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Do.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Do.copy(n.boundingBox)),Do.applyMatrix4(t.matrixWorld),this.union(Do)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),No.subVectors(this.max,hr),Ss.subVectors(t.a,hr),Es.subVectors(t.b,hr),bs.subVectors(t.c,hr),Ni.subVectors(Es,Ss),Ui.subVectors(bs,Es),ts.subVectors(Ss,bs);let e=[0,-Ni.z,Ni.y,0,-Ui.z,Ui.y,0,-ts.z,ts.y,Ni.z,0,-Ni.x,Ui.z,0,-Ui.x,ts.z,0,-ts.x,-Ni.y,Ni.x,0,-Ui.y,Ui.x,0,-ts.y,ts.x,0];return!yc(e,Ss,Es,bs,No)||(e=[1,0,0,0,1,0,0,0,1],!yc(e,Ss,Es,bs,No))?!1:(Uo.crossVectors(Ni,Ui),e=[Uo.x,Uo.y,Uo.z],yc(e,Ss,Es,bs,No))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},fi=[new N,new N,new N,new N,new N,new N,new N,new N],kn=new N,Do=new ti,Ss=new N,Es=new N,bs=new N,Ni=new N,Ui=new N,ts=new N,hr=new N,No=new N,Uo=new N,es=new N;function yc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){es.fromArray(i,r);let a=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),l=t.dot(es),c=e.dot(es),h=n.dot(es);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ke=new N,Fo=new xt,Ep=0,sn=class extends Qn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ep++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uh,this.updateRanges=[],this.gpuType=Fn,this.version=0,this._normalizationScale=t!==void 0?Dl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fo.fromBufferAttribute(this,e),Fo.applyMatrix3(t),this.setXY(e,Fo.x,Fo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Uf(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ff(t,this.array)}};var Lr=class extends sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Dr=class extends sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ne=class extends sn{constructor(t,e,n){super(new Float32Array(t),e,n)}},bp=new ti,ur=new N,Mc=new N,_i=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):bp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ur.subVectors(t,this.center);let e=ur.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ur,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ur.copy(t.center).add(Mc)),this.expandByPoint(ur.copy(t.center).sub(Mc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Tp=0,Nn=new oe,Sc=new tn,Ts=new N,Rn=new ti,fr=new ti,je=new N,Te=class i extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hp(t)?Dr:Lr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ie().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,e,n){return Nn.makeTranslation(t,e,n),this.applyMatrix4(Nn),this}scale(t,e,n){return Nn.makeScale(t,e,n),this.applyMatrix4(Nn),this}lookAt(t){return Sc.lookAt(t),Sc.updateMatrix(),this.applyMatrix4(Sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ne(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];fr.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(Rn.min,fr.min),Rn.expandByPoint(je),je.addVectors(Rn.max,fr.max),Rn.expandByPoint(je)):(Rn.expandByPoint(fr.min),Rn.expandByPoint(fr.max))}Rn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(je));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)je.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(t,c),je.add(Ts)),s=Math.max(s,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let A=0;A<n.count;A++)a[A]=new N,l[A]=new N;let h=new N,u=new N,f=new N,d=new xt,p=new xt,S=new xt,x=new N,m=new N;function M(A,w,P){c[A]=c[w]=c[P]=1,h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,w),f.fromBufferAttribute(n,P),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,w),S.fromBufferAttribute(r,P),u.sub(h),f.sub(h),p.sub(d),S.sub(d);let I=1/(p.x*S.y-S.x*p.y);isFinite(I)&&(x.copy(u).multiplyScalar(S.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-S.x).multiplyScalar(I),a[A].add(x),a[w].add(x),a[P].add(x),l[A].add(m),l[w].add(m),l[P].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let A=0,w=y.length;A<w;++A){let P=y[A],I=P.start,z=P.count;for(let L=I,H=I+z;L<H;L+=3)M(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let _=new N,E=new N,b=new N,g=new N;function v(A){b.fromBufferAttribute(s,A),g.copy(b);let w=a[A];_.copy(w),_.sub(b.multiplyScalar(b.dot(w))).normalize(),E.crossVectors(g,w);let I=E.dot(l[A])<0?-1:1;o.setXYZW(A,_.x,_.y,_.z,I)}for(let A=0,w=n.count;A<w;++A)c[A]&&v(A);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),S=t.getX(f+1),x=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,S),o.fromBufferAttribute(e,x),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,x),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let S=0,x=l.length;S<x;S++){a.isInterleavedBufferAttribute?d=l[S]*a.data.stride+a.offset:d=l[S]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new sn(f,h,u)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=uh,this.updateRanges=[],this.version=0,this.uuid=Wi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=wu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=wu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function wu(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Wi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var dn=new N,Hs=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?Dl(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ar("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new sn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ar("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Uf(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ff(t,this.data.array)}},Ec=new N,wp=new N,Ap=new ie,Vn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ec.subVectors(n,e).cross(wp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ec),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ap.getNormalMatrix(t),s=this.coplanarPoint(Ec).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Rp=0,ei=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=$s,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qc,this.blendDst=Yc,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ra,this.stencilZFail=ra,this.stencilZPass=ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ae().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Vn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new xt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},vi=class extends ei{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ws,dr=new N,As=new N,Rs=new N,Cs=new xt,pr=new xt,Bf=new oe,Oo=new N,mr=new N,Bo=new N,Au=new xt,bc=new xt,Ru=new xt,Oi=class extends tn{constructor(t=new vi){if(super(),this.isSprite=!0,this.type="Sprite",ws===void 0){ws=new Te;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Nr(e,5);ws.setIndex([0,1,2,0,2,3]),ws.setAttribute("position",new Hs(n,3,0,!1)),ws.setAttribute("uv",new Hs(n,2,3,!1))}this.geometry=ws,this.material=t,this.center=new xt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ee('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),As.setFromMatrixScale(this.matrixWorld),Bf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Rs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&As.multiplyScalar(-Rs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;zo(Oo.set(-.5,-.5,0),Rs,o,As,s,r),zo(mr.set(.5,-.5,0),Rs,o,As,s,r),zo(Bo.set(.5,.5,0),Rs,o,As,s,r),Au.set(0,0),bc.set(1,0),Ru.set(1,1);let a=t.ray.intersectTriangle(Oo,mr,Bo,!1,dr);if(a===null&&(zo(mr.set(-.5,.5,0),Rs,o,As,s,r),bc.set(0,1),a=t.ray.intersectTriangle(Oo,Bo,mr,!1,dr),a===null))return;let l=t.ray.origin.distanceTo(dr);l<t.near||l>t.far||e.push({distance:l,point:dr.clone(),uv:pi.getInterpolation(dr,Oo,mr,Bo,Au,bc,Ru,new xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function zo(i,t,e,n,s,r){Cs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(pr.x=r*Cs.x-s*Cs.y,pr.y=s*Cs.x+r*Cs.y):pr.copy(Cs),i.copy(t),i.x+=pr.x,i.y+=pr.y,i.applyMatrix4(Bf)}var di=new N,Tc=new N,Ho=new N,Go=new N,Ur=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(di.copy(this.origin).addScaledVector(this.direction,e),di.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Tc.copy(t).add(e).multiplyScalar(.5),Ho.copy(e).sub(t).normalize(),Go.copy(this.origin).sub(Tc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ho),a=Go.dot(this.direction),l=-Go.dot(Ho),c=Go.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let S=1/h;u*=S,f*=S,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Tc).addScaledVector(Ho,f),d}intersectSphere(t,e){if(t.radius<0)return null;di.subVectors(t.center,this.origin);let n=di.dot(this.direction),s=di.dot(di)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,di)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,S=e.y-o.y,x=e.z-o.z,m=n.x-o.x,M=n.y-o.y,y=n.z-o.z,_=Math.abs(l),E=Math.abs(c),b=Math.abs(h),g,v,A,w,P,I,z,L,H,W,q,ft;if(_>=E&&_>=b?(A=l,I=u,H=p,ft=m,l>=0?(g=c,v=h,w=f,P=d,z=S,L=x,W=M,q=y):(g=h,v=c,w=d,P=f,z=x,L=S,W=y,q=M)):E>=b?(A=c,I=f,H=S,ft=M,c>=0?(g=h,v=l,w=d,P=u,z=x,L=p,W=y,q=m):(g=l,v=h,w=u,P=d,z=p,L=x,W=m,q=y)):(A=h,I=d,H=x,ft=y,h>=0?(g=l,v=c,w=u,P=f,z=p,L=S,W=m,q=M):(g=c,v=l,w=f,P=u,z=S,L=p,W=M,q=m)),A===0)return null;let Q=g/A,G=v/A,J=1/A,dt=w-Q*I,At=P-G*I,j=z-Q*H,ht=L-G*H,St=W-Q*ft,_t=q-G*ft,Et=St*ht-_t*j,O=dt*_t-At*St,tt=j*At-ht*dt;if(s){if(Et<0||O<0||tt<0)return null}else if((Et<0||O<0||tt<0)&&(Et>0||O>0||tt>0))return null;let k=Et+O+tt;if(k===0)return null;let it=J*(Et*I+O*H+tt*ft);return(k>0?it<0:it>0)?null:this.at(it/k,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class extends ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Cu=new oe,ns=new Ur,ko=new _i,Iu=new N,Vo=new N,Wo=new N,Xo=new N,wc=new N,qo=new N,Pu=new N,Yo=new N,st=class extends tn{constructor(t=new Te,e=new xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){qo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(wc.fromBufferAttribute(u,t),o?qo.addScaledVector(wc,h):qo.addScaledVector(wc.sub(e),h))}e.add(qo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(r),ns.copy(t.ray).recast(t.near),!(ko.containsPoint(ns.origin)===!1&&(ns.intersectSphere(ko,Iu)===null||ns.origin.distanceToSquared(Iu)>(t.far-t.near)**2))&&(Cu.copy(r).invert(),ns.copy(t.ray).applyMatrix4(Cu),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ns)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,S=f.length;p<S;p++){let x=f[p],m=o[x.materialIndex],M=Math.max(x.start,d.start),y=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let _=M,E=y;_<E;_+=3){let b=a.getX(_),g=a.getX(_+1),v=a.getX(_+2);s=Zo(this,m,t,n,c,h,u,b,g,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),S=Math.min(a.count,d.start+d.count);for(let x=p,m=S;x<m;x+=3){let M=a.getX(x),y=a.getX(x+1),_=a.getX(x+2);s=Zo(this,o,t,n,c,h,u,M,y,_),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,S=f.length;p<S;p++){let x=f[p],m=o[x.materialIndex],M=Math.max(x.start,d.start),y=Math.min(l.count,Math.min(x.start+x.count,d.start+d.count));for(let _=M,E=y;_<E;_+=3){let b=_,g=_+1,v=_+2;s=Zo(this,m,t,n,c,h,u,b,g,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let x=p,m=S;x<m;x+=3){let M=x,y=x+1,_=x+2;s=Zo(this,o,t,n,c,h,u,M,y,_),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function Cp(i,t,e,n,s,r,o,a){let l;if(t.side===xn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ki,a),l===null)return null;Yo.copy(a),Yo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Yo);return c<e.near||c>e.far?null:{distance:c,point:Yo.clone(),object:i}}function Zo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Vo),i.getVertexPosition(l,Wo),i.getVertexPosition(c,Xo);let h=Cp(i,t,e,n,Vo,Wo,Xo,Pu);if(h){let u=new N;pi.getBarycoord(Pu,Vo,Wo,Xo,u),s&&(h.uv=pi.getInterpolatedAttribute(s,a,l,c,u,new xt)),r&&(h.uv1=pi.getInterpolatedAttribute(r,a,l,c,u,new xt)),o&&(h.normal=pi.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new N,materialIndex:0};pi.getNormal(Vo,Wo,Xo,f.normal),h.face=f,h.barycoord=u}return h}var Fr=class extends gn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Qe,h=Qe,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gs=class extends sn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Is=new oe,Lu=new oe,Jo=[],Du=new ti,Ip=new oe,gr=new st,xr=new _i,Le=class extends st{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Gs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ip)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Is),Du.copy(t.boundingBox).applyMatrix4(Is),this.boundingBox.union(Du)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Is),xr.copy(t.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(xr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(gr.geometry=this.geometry,gr.material=this.material,gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(n),t.ray.intersectsSphere(xr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Is),Lu.multiplyMatrices(n,Is),gr.matrixWorld=Lu,gr.raycast(t,Jo);for(let o=0,a=Jo.length;o<a;o++){let l=Jo[o];l.instanceId=r,l.object=this,e.push(l)}Jo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Gs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fr(new Float32Array(s*this.count),s,this.count,ja,Fn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},is=new _i,Pp=new xt(.5,.5),$o=new N,Bi=class{constructor(t=new Vn,e=new Vn,n=new Vn,s=new Vn,r=new Vn,o=new Vn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Un,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],S=r[9],x=r[10],m=r[11],M=r[12],y=r[13],_=r[14],E=r[15];if(s[0].setComponents(c-o,d-h,m-p,E-M).normalize(),s[1].setComponents(c+o,d+h,m+p,E+M).normalize(),s[2].setComponents(c+a,d+u,m+S,E+y).normalize(),s[3].setComponents(c-a,d-u,m-S,E-y).normalize(),n)s[4].setComponents(l,f,x,_).normalize(),s[5].setComponents(c-l,d-f,m-x,E-_).normalize();else if(s[4].setComponents(c-l,d-f,m-x,E-_).normalize(),e===Un)s[5].setComponents(c+l,d+f,m+x,E+_).normalize();else if(e===Fs)s[5].setComponents(l,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(t){is.center.set(0,0,0);let e=Pp.distanceTo(t.center);return is.radius=.7071067811865476+e,is.applyMatrix4(t.matrixWorld),this.intersectsSphere(is)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if($o.x=s.normal.x>0?t.max.x:t.min.x,$o.y=s.normal.y>0?t.max.y:t.min.y,$o.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($o)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Nu=new oe,va=class i{constructor(){this.coordinateSystem=Un,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Nu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Bi),n[s].setFromProjectionMatrix(Nu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Bi),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var ss=class extends ei{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ya=new N,Ma=new N,Uu=new oe,_r=new Ur,Ko=new _i,Ac=new N,Fu=new N,ks=class extends tn{constructor(t=new Te,e=new ss){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ya.fromBufferAttribute(e,s-1),Ma.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ya.distanceTo(Ma);t.setAttribute("lineDistance",new ne(n,1))}else jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(s),Ko.radius+=r,t.ray.intersectsSphere(Ko)===!1)return;Uu.copy(s).invert(),_r.copy(t.ray).applyMatrix4(Uu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let S=d,x=p-1;S<x;S+=c){let m=h.getX(S),M=h.getX(S+1),y=jo(this,t,_r,l,m,M,S);y&&e.push(y)}if(this.isLineLoop){let S=h.getX(p-1),x=h.getX(d),m=jo(this,t,_r,l,S,x,p-1);m&&e.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let S=d,x=p-1;S<x;S+=c){let m=jo(this,t,_r,l,S,S+1,S);m&&e.push(m)}if(this.isLineLoop){let S=jo(this,t,_r,l,p-1,d,p-1);S&&e.push(S)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function jo(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(ya.fromBufferAttribute(a,s),Ma.fromBufferAttribute(a,r),e.distanceSqToSegment(ya,Ma,Ac,Fu)>n)return;Ac.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ac);if(!(c<t.near||c>t.far))return{distance:c,point:Fu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Ou=new N,Bu=new N,Or=class extends ks{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Ou.fromBufferAttribute(e,s),Bu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ou.distanceTo(Bu);t.setAttribute("lineDistance",new ne(n,1))}else jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Br=class extends gn{constructor(t=[],e=cs,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Sn=class extends gn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var yi=class extends gn{constructor(t,e,n=Wn,s,r,o,a=Qe,l=Qe,c,h=gi,u=1){if(h!==gi&&h!==Ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},zr=class extends yi{constructor(t,e=Wn,n=cs,s,r,o=Qe,a=Qe,l,c=gi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Hr=class extends gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Gt=class i extends Te{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function p(S,x,m,M,y,_,E,b,g,v,A){let w=_/g,P=E/v,I=_/2,z=E/2,L=b/2,H=g+1,W=v+1,q=0,ft=0,Q=new N;for(let G=0;G<W;G++){let J=G*P-z;for(let dt=0;dt<H;dt++){let At=dt*w-I;Q[S]=At*M,Q[x]=J*y,Q[m]=L,c.push(Q.x,Q.y,Q.z),Q[S]=0,Q[x]=0,Q[m]=b>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(dt/g),u.push(1-G/v),q+=1}}for(let G=0;G<v;G++)for(let J=0;J<g;J++){let dt=f+J+H*G,At=f+J+H*(G+1),j=f+(J+1)+H*(G+1),ht=f+(J+1)+H*G;l.push(dt,At,ht),l.push(At,j,ht),ft+=6}a.addGroup(d,ft,A),d+=ft,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Vs=class i extends Te{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new N,h=new xt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},he=class i extends Te{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,S=[],x=n/2,m=0;M(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(d,2));function M(){let _=new N,E=new N,b=0,g=(e-t)/n;for(let v=0;v<=r;v++){let A=[],w=v/r,P=w*(e-t)+t;for(let I=0;I<=s;I++){let z=I/s,L=z*l+a,H=Math.sin(L),W=Math.cos(L);E.x=P*H,E.y=-w*n+x,E.z=P*W,u.push(E.x,E.y,E.z),_.set(H,g,W).normalize(),f.push(_.x,_.y,_.z),d.push(z,1-w),A.push(p++)}S.push(A)}for(let v=0;v<s;v++)for(let A=0;A<r;A++){let w=S[A][v],P=S[A+1][v],I=S[A+1][v+1],z=S[A][v+1];(t>0||A!==0)&&(h.push(w,P,z),b+=3),(e>0||A!==r-1)&&(h.push(P,I,z),b+=3)}c.addGroup(m,b,0),m+=b}function y(_){let E=p,b=new xt,g=new N,v=0,A=_===!0?t:e,w=_===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,x*w,0),f.push(0,w,0),d.push(.5,.5),p++;let P=p;for(let I=0;I<=s;I++){let L=I/s*l+a,H=Math.cos(L),W=Math.sin(L);g.x=A*W,g.y=x*w,g.z=A*H,u.push(g.x,g.y,g.z),f.push(0,w,0),b.x=H*.5+.5,b.y=W*.5*w+.5,d.push(b.x,b.y),p++}for(let I=0;I<s;I++){let z=E+I,L=P+I;_===!0?h.push(L,L+1,z):h.push(L+1,L,z),v+=3}c.addGroup(m,v,_===!0?1:2),m+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ws=class i extends he{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Sa=class i extends Te{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let y=new N,_=new N,E=new N;for(let b=0;b<e.length;b+=3)d(e[b+0],y),d(e[b+1],_),d(e[b+2],E),l(y,_,E,M)}function l(M,y,_,E){let b=E+1,g=[];for(let v=0;v<=b;v++){g[v]=[];let A=M.clone().lerp(_,v/b),w=y.clone().lerp(_,v/b),P=b-v;for(let I=0;I<=P;I++)I===0&&v===b?g[v][I]=A:g[v][I]=A.clone().lerp(w,I/P)}for(let v=0;v<b;v++)for(let A=0;A<2*(b-v)-1;A++){let w=Math.floor(A/2);A%2===0?(f(g[v][w+1]),f(g[v+1][w]),f(g[v][w])):(f(g[v][w+1]),f(g[v+1][w+1]),f(g[v+1][w]))}}function c(M){let y=new N;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(M),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){let M=new N;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];let _=x(M)/2/Math.PI+.5,E=m(M)/Math.PI+.5;o.push(_,1-E)}p(),u()}function u(){for(let M=0;M<o.length;M+=6){let y=o[M+0],_=o[M+2],E=o[M+4],b=Math.max(y,_,E),g=Math.min(y,_,E);b>.9&&g<.1&&(y<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),E<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,y){let _=M*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function p(){let M=new N,y=new N,_=new N,E=new N,b=new xt,g=new xt,v=new xt;for(let A=0,w=0;A<r.length;A+=9,w+=6){M.set(r[A+0],r[A+1],r[A+2]),y.set(r[A+3],r[A+4],r[A+5]),_.set(r[A+6],r[A+7],r[A+8]),b.set(o[w+0],o[w+1]),g.set(o[w+2],o[w+3]),v.set(o[w+4],o[w+5]),E.copy(M).add(y).add(_).divideScalar(3);let P=x(E);S(b,w+0,M,P),S(g,w+2,y,P),S(v,w+4,_,P)}}function S(M,y,_,E){E<0&&M.x===1&&(o[y]=M.x-1),_.x===0&&_.z===0&&(o[y]=E/2/Math.PI+.5)}function x(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new xt:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new N,s=[],r=[],o=[],a=new N,l=new oe;for(let d=0;d<=t;d++){let p=d/t;s[d]=this.getTangentAt(p,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(fe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(fe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Xs=class extends In{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new xt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ea=class extends Xs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function dh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var zu=new N,Hu=new N,Rc=new dh,Cc=new dh,Ic=new dh,ba=class extends In{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Hu.subVectors(s[0],s[1]).add(s[0]),c=Hu);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(zu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=zu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),S=Math.pow(u.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d);S<1e-4&&(S=1),p<1e-4&&(p=S),x<1e-4&&(x=S),Rc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,S,x),Cc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,S,x),Ic.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,S,x)}else this.curveType==="catmullrom"&&(Rc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Cc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ic.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Rc.calc(l),Cc.calc(l),Ic.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Gu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Lp(i,t){let e=1-i;return e*e*t}function Dp(i,t){return 2*(1-i)*i*t}function Np(i,t){return i*i*t}function Mr(i,t,e,n){return Lp(i,t)+Dp(i,e)+Np(i,n)}function Up(i,t){let e=1-i;return e*e*e*t}function Fp(i,t){let e=1-i;return 3*e*e*i*t}function Op(i,t){return 3*(1-i)*i*i*t}function Bp(i,t){return i*i*i*t}function Sr(i,t,e,n,s){return Up(i,t)+Fp(i,e)+Op(i,n)+Bp(i,s)}var Gr=class extends In{constructor(t=new xt,e=new xt,n=new xt,s=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Sr(t,s.x,r.x,o.x,a.x),Sr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ta=class extends In{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Sr(t,s.x,r.x,o.x,a.x),Sr(t,s.y,r.y,o.y,a.y),Sr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},kr=class extends In{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wa=class extends In{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vr=class extends In{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Mr(t,s.x,r.x,o.x),Mr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Aa=class extends In{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Mr(t,s.x,r.x,o.x),Mr(t,s.y,r.y,o.y),Mr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wr=class extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Gu(a,l.x,c.x,h.x,u.x),Gu(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new xt().fromArray(s))}return this}},Fc=Object.freeze({__proto__:null,ArcCurve:Ea,CatmullRomCurve3:ba,CubicBezierCurve:Gr,CubicBezierCurve3:Ta,EllipseCurve:Xs,LineCurve:kr,LineCurve3:wa,QuadraticBezierCurve:Vr,QuadraticBezierCurve3:Aa,SplineCurve:Wr}),Ra=class extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Fc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Xr=class extends Ra{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new kr(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Vr(this.currentPoint.clone(),new xt(t,e),new xt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Gr(this.currentPoint.clone(),new xt(t,e),new xt(n,s),new xt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Wr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Xs(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ni=class extends Xr{constructor(t){super(t),this.uuid=Wi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Xr().fromJSON(s))}return this}};function zp(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=zf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Wp(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<s;f+=e){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return qr(r,o,e,a,l,c,0),o}function zf(i,t,e,n,s){let r;if(s===em(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=ku(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=ku(o/n|0,i[o],i[o+1],r);return r&&qs(r,r.next)&&(Zr(r),r=r.next),r}function rs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(qs(e,e.next)||He(e.prev,e,e.next)===0)){if(Zr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function qr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Jp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Gp(i,n,s,r):Hp(i)){t.push(l.i,i.i,c.i),Zr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=kp(rs(i),t),qr(i,t,e,n,s,r,2)):o===2&&Vp(i,t,e,n,s,r):qr(rs(i),t,e,n,s,r,1);break}}}function Hp(i){let t=i.prev,e=i,n=i.next;if(He(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&vr(s,a,r,l,o,c,p.x,p.y)&&He(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Gp(i,t,e,n){let s=i.prev,r=i,o=i.next;if(He(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),S=Math.max(a,l,c),x=Math.max(h,u,f),m=Oc(d,p,t,e,n),M=Oc(S,x,t,e,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=m&&_&&_.z<=M;){if(y.x>=d&&y.x<=S&&y.y>=p&&y.y<=x&&y!==s&&y!==o&&vr(a,h,l,u,c,f,y.x,y.y)&&He(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=S&&_.y>=p&&_.y<=x&&_!==s&&_!==o&&vr(a,h,l,u,c,f,_.x,_.y)&&He(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=S&&y.y>=p&&y.y<=x&&y!==s&&y!==o&&vr(a,h,l,u,c,f,y.x,y.y)&&He(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=M;){if(_.x>=d&&_.x<=S&&_.y>=p&&_.y<=x&&_!==s&&_!==o&&vr(a,h,l,u,c,f,_.x,_.y)&&He(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function kp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!qs(n,s)&&Gf(n,e,e.next,s)&&Yr(n,s)&&Yr(s,n)&&(t.push(n.i,e.i,s.i),Zr(e),Zr(e.next),e=i=s),e=e.next}while(e!==i);return rs(e)}function Vp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&jp(o,a)){let l=kf(o,a);o=rs(o,o.next),l=rs(l,l.next),qr(o,t,e,n,s,r,0),qr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Wp(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=zf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Kp(c))}s.sort(Xp);for(let r=0;r<s.length;r++)e=qp(s[r],e);return e}function Xp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function qp(i,t){let e=Yp(i,t);if(!e)return t;let n=kf(e,i);return rs(n,n.next),rs(e,e.next)}function Yp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(qs(i,e))return e;do{if(qs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Hf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);Yr(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Zp(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Zp(i,t){return He(i.prev,i,t.prev)<0&&He(t.next,i,i.next)<0}function Jp(i,t,e,n){let s=i;do s.z===0&&(s.z=Oc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,$p(s)}function $p(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Oc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Kp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Hf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function vr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Hf(i,t,e,n,s,r,o,a)}function jp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Qp(i,t)&&(Yr(i,t)&&Yr(t,i)&&tm(i,t)&&(He(i.prev,i,t.prev)||He(i,t.prev,t))||qs(i,t)&&He(i.prev,i,i.next)>0&&He(t.prev,t,t.next)>0)}function He(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function qs(i,t){return i.x===t.x&&i.y===t.y}function Gf(i,t,e,n){let s=ta(He(i,t,e)),r=ta(He(i,t,n)),o=ta(He(e,n,i)),a=ta(He(e,n,t));return!!(s!==r&&o!==a||s===0&&Qo(i,e,t)||r===0&&Qo(i,n,t)||o===0&&Qo(e,i,n)||a===0&&Qo(e,t,n))}function Qo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ta(i){return i>0?1:i<0?-1:0}function Qp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Gf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Yr(i,t){return He(i.prev,i,i.next)<0?He(i,t,i.next)>=0&&He(i,i.prev,t)>=0:He(i,t,i.prev)<0||He(i,i.next,t)<0}function tm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function kf(i,t){let e=Bc(i.i,i.x,i.y),n=Bc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ku(i,t,e,n){let s=Bc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Zr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Bc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function em(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var zc=class{static triangulate(t,e,n=2){return zp(t,e,n)}},Kn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Vu(t),Wu(n,t);let o=t.length;e.forEach(Vu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Wu(n,e[l]);let a=zc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Vu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Wu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var os=class i extends Te{constructor(t=new ni([new xt(.5,.5),new xt(-.5,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ne(s,3)),this.setAttribute("uv",new ne(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:nm,y,_=!1,E,b,g,v;if(m){y=m.getSpacedPoints(h),_=!0,f=!1;let U=m.isCatmullRomCurve3?m.closed:!1;E=m.computeFrenetFrames(h,U),b=new N,g=new N,v=new N}f||(x=0,d=0,p=0,S=0);let A=a.extractPoints(c),w=A.shape,P=A.holes;if(!Kn.isClockWise(w)){w=w.reverse();for(let U=0,V=P.length;U<V;U++){let X=P[U];Kn.isClockWise(X)&&(P[U]=X.reverse())}}function z(U){let X=10000000000000001e-36,mt=U[0];for(let ct=1;ct<=U.length;ct++){let Ht=ct%U.length,Dt=U[Ht],ut=Dt.x-mt.x,vt=Dt.y-mt.y,yt=ut*ut+vt*vt,D=Math.max(Math.abs(Dt.x),Math.abs(Dt.y),Math.abs(mt.x),Math.abs(mt.y)),se=X*D*D;if(yt<=se){U.splice(Ht,1),ct--;continue}mt=Dt}}z(w),P.forEach(z);let L=P.length,H=w;for(let U=0;U<L;U++){let V=P[U];w=w.concat(V)}function W(U,V,X){return V||ee("ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(V,X)}let q=w.length;function ft(U,V,X){let mt,ct,Ht,Dt=U.x-V.x,ut=U.y-V.y,vt=X.x-U.x,yt=X.y-U.y,D=Dt*Dt+ut*ut,se=Dt*yt-ut*vt;if(Math.abs(se)>Number.EPSILON){let kt=Math.sqrt(D),Qt=Math.sqrt(vt*vt+yt*yt),pt=V.x-ut/kt,Me=V.y+Dt/kt,qt=X.x-yt/Qt,te=X.y+vt/Qt,C=((qt-pt)*yt-(te-Me)*vt)/(Dt*yt-ut*vt);mt=pt+Dt*C-U.x,ct=Me+ut*C-U.y;let T=mt*mt+ct*ct;if(T<=2)return new xt(mt,ct);Ht=Math.sqrt(T/2)}else{let kt=!1;Dt>Number.EPSILON?vt>Number.EPSILON&&(kt=!0):Dt<-Number.EPSILON?vt<-Number.EPSILON&&(kt=!0):Math.sign(ut)===Math.sign(yt)&&(kt=!0),kt?(mt=-ut,ct=Dt,Ht=Math.sqrt(D)):(mt=Dt,ct=ut,Ht=Math.sqrt(D/2))}return new xt(mt/Ht,ct/Ht)}let Q=[];for(let U=0,V=H.length,X=V-1,mt=U+1;U<V;U++,X++,mt++)X===V&&(X=0),mt===V&&(mt=0),Q[U]=ft(H[U],H[X],H[mt]);let G=[],J,dt=Q.concat();for(let U=0,V=L;U<V;U++){let X=P[U];J=[];for(let mt=0,ct=X.length,Ht=ct-1,Dt=mt+1;mt<ct;mt++,Ht++,Dt++)Ht===ct&&(Ht=0),Dt===ct&&(Dt=0),J[mt]=ft(X[mt],X[Ht],X[Dt]);G.push(J),dt=dt.concat(J)}let At;if(x===0)At=Kn.triangulateShape(H,P);else{let U=[],V=[];for(let X=0;X<x;X++){let mt=X/x,ct=d*Math.cos(mt*Math.PI/2),Ht=p*Math.sin(mt*Math.PI/2)+S;for(let Dt=0,ut=H.length;Dt<ut;Dt++){let vt=W(H[Dt],Q[Dt],Ht);O(vt.x,vt.y,-ct),mt===0&&U.push(vt)}for(let Dt=0,ut=L;Dt<ut;Dt++){let vt=P[Dt];J=G[Dt];let yt=[];for(let D=0,se=vt.length;D<se;D++){let kt=W(vt[D],J[D],Ht);O(kt.x,kt.y,-ct),mt===0&&yt.push(kt)}mt===0&&V.push(yt)}}At=Kn.triangulateShape(U,V)}let j=At.length,ht=p+S;for(let U=0;U<q;U++){let V=f?W(w[U],dt[U],ht):w[U];_?(g.copy(E.normals[0]).multiplyScalar(V.x),b.copy(E.binormals[0]).multiplyScalar(V.y),v.copy(y[0]).add(g).add(b),O(v.x,v.y,v.z)):O(V.x,V.y,0)}for(let U=1;U<=h;U++)for(let V=0;V<q;V++){let X=f?W(w[V],dt[V],ht):w[V];_?(g.copy(E.normals[U]).multiplyScalar(X.x),b.copy(E.binormals[U]).multiplyScalar(X.y),v.copy(y[U]).add(g).add(b),O(v.x,v.y,v.z)):O(X.x,X.y,u/h*U)}for(let U=x-1;U>=0;U--){let V=U/x,X=d*Math.cos(V*Math.PI/2),mt=p*Math.sin(V*Math.PI/2)+S;for(let ct=0,Ht=H.length;ct<Ht;ct++){let Dt=W(H[ct],Q[ct],mt);O(Dt.x,Dt.y,u+X)}for(let ct=0,Ht=P.length;ct<Ht;ct++){let Dt=P[ct];J=G[ct];for(let ut=0,vt=Dt.length;ut<vt;ut++){let yt=W(Dt[ut],J[ut],mt);_?O(yt.x,yt.y+y[h-1].y,y[h-1].x+X):O(yt.x,yt.y,u+X)}}}St(),_t();function St(){let U=s.length/3;if(f){let V=0,X=q*V;for(let mt=0;mt<j;mt++){let ct=At[mt];tt(ct[2]+X,ct[1]+X,ct[0]+X)}V=h+x*2,X=q*V;for(let mt=0;mt<j;mt++){let ct=At[mt];tt(ct[0]+X,ct[1]+X,ct[2]+X)}}else{for(let V=0;V<j;V++){let X=At[V];tt(X[2],X[1],X[0])}for(let V=0;V<j;V++){let X=At[V];tt(X[0]+q*h,X[1]+q*h,X[2]+q*h)}}n.addGroup(U,s.length/3-U,0)}function _t(){let U=s.length/3,V=0;Et(H,V),V+=H.length;for(let X=0,mt=P.length;X<mt;X++){let ct=P[X];Et(ct,V),V+=ct.length}n.addGroup(U,s.length/3-U,1)}function Et(U,V){let X=U.length;for(;--X>=0;){let mt=X,ct=X-1;ct<0&&(ct=U.length-1);for(let Ht=0,Dt=h+x*2;Ht<Dt;Ht++){let ut=q*Ht,vt=q*(Ht+1),yt=V+mt+ut,D=V+ct+ut,se=V+ct+vt,kt=V+mt+vt;k(yt,D,se,kt)}}}function O(U,V,X){l.push(U),l.push(V),l.push(X)}function tt(U,V,X){it(U),it(V),it(X);let mt=s.length/3,ct=M.generateTopUV(n,s,mt-3,mt-2,mt-1);K(ct[0]),K(ct[1]),K(ct[2])}function k(U,V,X,mt){it(U),it(V),it(mt),it(V),it(X),it(mt);let ct=s.length/3,Ht=M.generateSideWallUV(n,s,ct-6,ct-3,ct-2,ct-1);K(Ht[0]),K(Ht[1]),K(Ht[3]),K(Ht[1]),K(Ht[2]),K(Ht[3])}function it(U){s.push(l[U*3+0]),s.push(l[U*3+1]),s.push(l[U*3+2])}function K(U){r.push(U.x),r.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return im(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Fc[s.type]().fromJSON(s)),new i(n,t.options)}},nm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new xt(r,o),new xt(a,l),new xt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],p=t[s*3+2],S=t[r*3],x=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new xt(o,1-l),new xt(c,1-u),new xt(f,1-p),new xt(S,1-m)]:[new xt(a,1-l),new xt(h,1-u),new xt(d,1-p),new xt(x,1-m)]}};function im(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ys=class i extends Sa{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Re=class i extends Te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],S=[],x=[];for(let m=0;m<h;m++){let M=m*f-o;for(let y=0;y<c;y++){let _=y*u-r;p.push(_,-M,0),S.push(0,0,1),x.push(y/a),x.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){let y=M+c*m,_=M+c*(m+1),E=M+1+c*(m+1),b=M+1+c*m;d.push(y,_,b),d.push(_,E,b)}this.setIndex(d),this.setAttribute("position",new ne(p,3)),this.setAttribute("normal",new ne(S,3)),this.setAttribute("uv",new ne(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Jr=class i extends Te{constructor(t=new ni([new xt(0,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ne(s,3)),this.setAttribute("normal",new ne(r,3)),this.setAttribute("uv",new ne(o,2));function c(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,p=f.holes;Kn.isClockWise(d)===!1&&(d=d.reverse());for(let x=0,m=p.length;x<m;x++){let M=p[x];Kn.isClockWise(M)===!0&&(p[x]=M.reverse())}let S=Kn.triangulateShape(d,p);for(let x=0,m=p.length;x<m;x++){let M=p[x];d=d.concat(M)}for(let x=0,m=d.length;x<m;x++){let M=d[x];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let x=0,m=S.length;x<m;x++){let M=S[x],y=M[0]+u,_=M[1]+u,E=M[2]+u;n.push(y,_,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return sm(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function sm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Pn=class i extends Te{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new N,f=new N,d=[],p=[],S=[],x=[];for(let m=0;m<=n;m++){let M=[],y=m/n,_=o+y*a,E=t*Math.cos(_),b=Math.sqrt(t*t-E*E),g=0;m===0&&o===0?g=.5/e:m===n&&l===Math.PI&&(g=-.5/e);for(let v=0;v<=e;v++){let A=v/e,w=s+A*r;u.x=-b*Math.cos(w),u.y=E,u.z=b*Math.sin(w),p.push(u.x,u.y,u.z),f.copy(u).normalize(),S.push(f.x,f.y,f.z),x.push(A+g,1-y),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let y=h[m][M+1],_=h[m][M],E=h[m+1][M],b=h[m+1][M+1];(m!==0||o>0)&&d.push(y,_,b),(m!==n-1||l<Math.PI)&&d.push(_,E,b)}this.setIndex(d),this.setAttribute("position",new ne(p,3)),this.setAttribute("normal",new ne(S,3)),this.setAttribute("uv",new ne(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var $r=class i extends Te{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new N,d=new N,p=new N;for(let S=0;S<=n;S++){let x=o+S/n*a;for(let m=0;m<=s;m++){let M=m/s*r;d.x=(t+e*Math.cos(x))*Math.cos(M),d.y=(t+e*Math.cos(x))*Math.sin(M),d.z=e*Math.sin(x),c.push(d.x,d.y,d.z),f.x=t*Math.cos(M),f.y=t*Math.sin(M),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(m/s),u.push(S/n)}}for(let S=1;S<=n;S++)for(let x=1;x<=s;x++){let m=(s+1)*S+x-1,M=(s+1)*(S-1)+x-1,y=(s+1)*(S-1)+x,_=(s+1)*S+x;l.push(m,M,_),l.push(M,y,_)}this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function us(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Xu(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Xu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function hn(i){let t={};for(let e=0;e<i.length;e++){let n=us(i[e]);for(let s in n)t[s]=n[s]}return t}function Xu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function rm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ph(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}var Vf={clone:us,merge:hn},om=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,am=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ii=class extends ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=om,this.fragmentShader=am,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=rm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ae().setHex(s.value);break;case"v2":this.uniforms[n].value=new xt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Oe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ie().fromArray(s.value);break;case"m4":this.uniforms[n].value=new oe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ca=class extends ii{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var wt=class extends ei{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ll,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Xa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ia=class extends ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Pa=class extends ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ps(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ea(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var zi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},La=class extends zi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dc,endingEnd:Dc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Nc:r=t,a=2*e-n;break;case Uc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nc:o=t,l=2*n-e;break;case Uc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(s-e),S=p*p,x=S*p,m=-f*x+2*f*S-f*p,M=(1+f)*x+(-1.5-2*f)*S+(-.5+f)*p+1,y=(-1-d)*x+(1.5+d)*S+.5*p,_=d*x-d*S;for(let E=0;E!==a;++E)r[E]=m*o[h+E]+M*o[c+E]+y*o[l+E]+_*o[u+E];return r}},Da=class extends zi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Na=class extends zi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ua=class extends zi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(s-e),S=1-p;for(let x=0;x!==a;++x)r[x]=o[c+x]*S+o[l+x]*p;return r}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let S=o[c+p],x=o[l+p],m=d*f+p*2,M=u[m],y=u[m+1],_=t*f+p*2,E=h[_],b=h[_+1],g=cm(n,e,M,E,s);r[p]=Wf(g,S,y,b,x)}return r}};function Wf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function lm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function cm(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Wf(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=lm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Ln=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ps(e,this.TimeBufferType),this.values=Ps(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ps(t.times,Array),values:Ps(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ea(t.settings)&&(n.settings={inTangents:Ps(t.settings.inTangents,Array),outTangents:Ps(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new La(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ua(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Er:e=this.InterpolantFactoryMethodDiscrete;break;case pa:e=this.InterpolantFactoryMethodLinear;break;case sa:e=this.InterpolantFactoryMethodSmooth;break;case Lc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Er;case this.InterpolantFactoryMethodLinear:return pa;case this.InterpolantFactoryMethodSmooth:return sa;case this.InterpolantFactoryMethodBezier:return Lc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;ea(this.settings)&&(qu(this.settings.inTangents,t),qu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ea(this.settings)&&(Yu(this.settings.inTangents,t),Yu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ee("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ee("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&up(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ee("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===sa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let S=e[u+p];if(S!==e[f+p]||S!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ea(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function qu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Yu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=pa;var Hi=class extends Ln{constructor(t,e,n){super(t,e,n)}};Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Er;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fa=class extends Ln{constructor(t,e,n,s){super(t,e,n,s)}};Fa.prototype.ValueTypeName="color";var Oa=class extends Ln{constructor(t,e,n,s){super(t,e,n,s)}};Oa.prototype.ValueTypeName="number";var Ba=class extends zi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ve.slerpFlat(r,0,o,c-a,o,c,l);return r}},Kr=class extends Ln{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ba(this.times,this.values,this.getValueSize(),t)}};Kr.prototype.ValueTypeName="quaternion";Kr.prototype.InterpolantFactoryMethodSmooth=void 0;var Gi=class extends Ln{constructor(t,e,n){super(t,e,n)}};Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Er;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var za=class extends Ln{constructor(t,e,n,s){super(t,e,n,s)}};za.prototype.ValueTypeName="vector";var Ha=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Xf=new Ha,Ga=class{constructor(t){this.manager=t!==void 0?t:Xf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ga.DEFAULT_MATERIAL_NAME="__DEFAULT";var jr=class extends tn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Qr=class extends jr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ae(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Pc=new oe,Zu=new N,Ju=new N,ka=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bi,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Zu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zu),Ju.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ju),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Pc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Pc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Fs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Pc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},na=new N,ia=new Ve,Jn=new N,to=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(na,ia,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(na,ia,Jn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(na,ia,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(na,ia,Jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fi=new N,$u=new xt,Ku=new xt,pn=class extends to{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ma*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(rc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z)}getViewSize(t,e){return this.getViewBounds(t,$u,Ku),e.subVectors(Ku,$u)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(rc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var eo=class extends to{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Hc=class extends ka{constructor(){super(new eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},no=class extends jr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new Hc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ls=-90,Ds=1,Zs=class extends tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pn(Ls,Ds,t,e);s.layers=this.layers,this.add(s);let r=new pn(Ls,Ds,t,e);r.layers=this.layers,this.add(r);let o=new pn(Ls,Ds,t,e);o.layers=this.layers,this.add(o);let a=new pn(Ls,Ds,t,e);a.layers=this.layers,this.add(a);let l=new pn(Ls,Ds,t,e);l.layers=this.layers,this.add(l);let c=new pn(Ls,Ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=S,t.setRenderTarget(n,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Va=class extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var mh="\\[\\]\\.:\\/",hm=new RegExp("["+mh+"]","g"),gh="[^"+mh+"]",um="[^"+mh.replace("\\.","")+"]",fm=/((?:WC+[\/:])*)/.source.replace("WC",gh),dm=/(WCOD+)?/.source.replace("WCOD",um),pm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gh),mm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gh),gm=new RegExp("^"+fm+dm+pm+mm+"$"),xm=["material","materials","bones","map"],Gc=class{constructor(t,e,n){let s=n||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ne=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(hm,"")}static parseTrackName(t){let e=gm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);xm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=Gc;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cy=new Float32Array(1);var kc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function xh(i,t,e,n){let s=_m(n);switch(e){case oh:return i*t;case ja:return i*t/s.components*s.byteLength;case Qa:return i*t/s.components*s.byteLength;case Vi:return i*t*2/s.components*s.byteLength;case tl:return i*t*2/s.components*s.byteLength;case ah:return i*t*3/s.components*s.byteLength;case qn:return i*t*4/s.components*s.byteLength;case el:return i*t*4/s.components*s.byteLength;case ro:case oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ao:case lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case il:case rl:return Math.max(i,16)*Math.max(t,8)/4;case nl:case sl:return Math.max(i,8)*Math.max(t,8)/2;case ol:case al:case cl:case hl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ll:case co:case ul:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case pl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ml:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case gl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case xl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case _l:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case vl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case yl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case El:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case bl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Tl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case wl:case Al:case Rl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Cl:case Il:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ho:case Pl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _m(i){switch(i){case En:case nh:return{byteLength:1,components:1};case js:case ih:case Xn:return{byteLength:2,components:1};case $a:case Ka:return{byteLength:2,components:4};case Wn:case Ja:case Fn:return{byteLength:4,components:1};case sh:case rh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function dd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function bm(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],S=u[d];S.start<=p.start+p.count+1?p.count=Math.max(p.count,S.start+S.count-p.start):(++f,u[f]=S)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let S=u[d];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Tm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wm=`#ifdef USE_ALPHAHASH
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
#endif`,Am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Im=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pm=`#ifdef USE_AOMAP
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
#endif`,Lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dm=`#ifdef USE_BATCHING
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
#endif`,Nm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Um=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Om=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bm=`#ifdef USE_IRIDESCENCE
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
#endif`,zm=`#ifdef USE_BUMPMAP
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
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Zm=`#define PI 3.141592653589793
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
} // validated`,Jm=`vec3 transformedNormal = objectNormal;
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
#endif`,$m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t0="gl_FragColor = linearToOutputTexel( gl_FragColor );",e0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,n0=`#ifdef USE_ENVMAP
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
#endif`,i0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,s0=`#ifdef USE_ENVMAP
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
#endif`,r0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o0=`#ifdef USE_ENVMAP
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
#endif`,a0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u0=`#ifdef USE_GRADIENTMAP
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
}`,f0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,d0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,p0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,m0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,g0=`#ifdef USE_ENVMAP
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
#endif`,x0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,v0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M0=`PhysicalMaterial material;
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
#endif`,S0=`uniform sampler2D dfgLUT;
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
}`,E0=`
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
#endif`,b0=`#if defined( RE_IndirectDiffuse )
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
#endif`,T0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,w0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,A0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,P0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N0=`#if defined( USE_POINTS_UV )
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
#endif`,U0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,O0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,B0=`#if defined( USE_MORPHCOLORS )
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
#endif`,z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H0=`#ifdef USE_MORPHTARGETS
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
#endif`,G0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,V0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Y0=`#ifdef USE_NORMALMAP
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
#endif`,Z0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,K0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cg=`float getShadowMask() {
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
}`,hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ug=`#ifdef USE_SKINNING
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
#endif`,fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dg=`#ifdef USE_SKINNING
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
#endif`,pg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_g=`#ifdef USE_TRANSMISSION
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
#endif`,vg=`#ifdef USE_TRANSMISSION
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
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,bg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tg=`uniform sampler2D t2D;
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
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ag=`uniform float backgroundBlurriness;
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`#include <common>
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
}`,Pg=`#if DEPTH_PACKING == 3200
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
}`,Lg=`#define DISTANCE
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
}`,Dg=`#define DISTANCE
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fg=`uniform float scale;
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
}`,Og=`uniform vec3 diffuse;
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
}`,Bg=`#include <common>
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
}`,zg=`uniform vec3 diffuse;
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
}`,Hg=`#define LAMBERT
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
}`,Gg=`#define LAMBERT
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
}`,kg=`#define MATCAP
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
}`,Vg=`#define MATCAP
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
}`,Wg=`#define NORMAL
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
}`,Xg=`#define NORMAL
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
}`,qg=`#define PHONG
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
}`,Yg=`#define PHONG
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
}`,Zg=`#define STANDARD
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
}`,Jg=`#define STANDARD
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
}`,$g=`#define TOON
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
}`,Kg=`#define TOON
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
}`,jg=`uniform float size;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,tx=`#include <common>
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
}`,ex=`uniform vec3 color;
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
}`,nx=`uniform float rotation;
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
}`,ix=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:Tm,alphahash_pars_fragment:wm,alphamap_fragment:Am,alphamap_pars_fragment:Rm,alphatest_fragment:Cm,alphatest_pars_fragment:Im,aomap_fragment:Pm,aomap_pars_fragment:Lm,batching_pars_vertex:Dm,batching_vertex:Nm,begin_vertex:Um,beginnormal_vertex:Fm,bsdfs:Om,iridescence_fragment:Bm,bumpmap_pars_fragment:zm,clipping_planes_fragment:Hm,clipping_planes_pars_fragment:Gm,clipping_planes_pars_vertex:km,clipping_planes_vertex:Vm,color_fragment:Wm,color_pars_fragment:Xm,color_pars_vertex:qm,color_vertex:Ym,common:Zm,defaultnormal_vertex:Jm,displacementmap_pars_vertex:$m,displacementmap_vertex:Km,emissivemap_fragment:jm,emissivemap_pars_fragment:Qm,colorspace_fragment:t0,colorspace_pars_fragment:e0,envmap_fragment:n0,envmap_common_pars_fragment:i0,envmap_pars_fragment:s0,envmap_pars_vertex:r0,envmap_physical_pars_fragment:g0,envmap_vertex:o0,fog_vertex:a0,fog_pars_vertex:l0,fog_fragment:c0,fog_pars_fragment:h0,gradientmap_pars_fragment:u0,lightmap_pars_fragment:f0,lights_lambert_fragment:d0,lights_lambert_pars_fragment:p0,lights_pars_begin:m0,lights_toon_fragment:x0,lights_toon_pars_fragment:_0,lights_phong_fragment:v0,lights_phong_pars_fragment:y0,lights_physical_fragment:M0,lights_physical_pars_fragment:S0,lights_fragment_begin:E0,lights_fragment_maps:b0,lights_fragment_end:T0,lightprobes_pars_fragment:w0,logdepthbuf_fragment:A0,logdepthbuf_pars_fragment:R0,logdepthbuf_pars_vertex:C0,logdepthbuf_vertex:I0,map_fragment:P0,map_pars_fragment:L0,map_particle_fragment:D0,map_particle_pars_fragment:N0,metalnessmap_fragment:U0,metalnessmap_pars_fragment:F0,morphinstance_vertex:O0,morphcolor_vertex:B0,morphnormal_vertex:z0,morphtarget_pars_vertex:H0,morphtarget_vertex:G0,normal_fragment_begin:k0,normal_fragment_maps:V0,normal_pars_fragment:W0,normal_pars_vertex:X0,normal_vertex:q0,normalmap_pars_fragment:Y0,clearcoat_normal_fragment_begin:Z0,clearcoat_normal_fragment_maps:J0,clearcoat_pars_fragment:$0,iridescence_pars_fragment:K0,opaque_fragment:j0,packing:Q0,premultiplied_alpha_fragment:tg,project_vertex:eg,dithering_fragment:ng,dithering_pars_fragment:ig,roughnessmap_fragment:sg,roughnessmap_pars_fragment:rg,shadowmap_pars_fragment:og,shadowmap_pars_vertex:ag,shadowmap_vertex:lg,shadowmask_pars_fragment:cg,skinbase_vertex:hg,skinning_pars_vertex:ug,skinning_vertex:fg,skinnormal_vertex:dg,specularmap_fragment:pg,specularmap_pars_fragment:mg,tonemapping_fragment:gg,tonemapping_pars_fragment:xg,transmission_fragment:_g,transmission_pars_fragment:vg,uv_pars_fragment:yg,uv_pars_vertex:Mg,uv_vertex:Sg,worldpos_vertex:Eg,background_vert:bg,background_frag:Tg,backgroundCube_vert:wg,backgroundCube_frag:Ag,cube_vert:Rg,cube_frag:Cg,depth_vert:Ig,depth_frag:Pg,distance_vert:Lg,distance_frag:Dg,equirect_vert:Ng,equirect_frag:Ug,linedashed_vert:Fg,linedashed_frag:Og,meshbasic_vert:Bg,meshbasic_frag:zg,meshlambert_vert:Hg,meshlambert_frag:Gg,meshmatcap_vert:kg,meshmatcap_frag:Vg,meshnormal_vert:Wg,meshnormal_frag:Xg,meshphong_vert:qg,meshphong_frag:Yg,meshphysical_vert:Zg,meshphysical_frag:Jg,meshtoon_vert:$g,meshtoon_frag:Kg,points_vert:jg,points_frag:Qg,shadow_vert:tx,shadow_frag:ex,sprite_vert:nx,sprite_frag:ix},Ot={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},oi={basic:{uniforms:hn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:hn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ae(0)},envMapIntensity:{value:1}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:hn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:hn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:hn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new ae(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:hn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:hn([Ot.points,Ot.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:hn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:hn([Ot.common,Ot.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:hn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:hn([Ot.sprite,Ot.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:hn([Ot.common,Ot.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:hn([Ot.lights,Ot.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};oi.physical={uniforms:hn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};var Nl={r:0,b:0,g:0},sx=new oe,pd=new ie;pd.set(-1,0,0,0,1,0,0,0,1);function rx(i,t,e,n,s,r){let o=new ae(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(M){let y=M.isScene===!0?M.background:null;if(y&&y.isTexture){let _=M.backgroundBlurriness>0;y=t.get(y,_)}return y}function p(M){let y=!1,_=d(M);_===null?x(o,a):_&&_.isColor&&(x(_,1),y=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,y){let _=d(y);_&&_.isCubeTexture?(c===void 0&&(c=new st(new Gt(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:us(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sx.makeRotationFromEuler(y.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(pd),c.material.toneMapped=ge.getTransfer(_.colorSpace)!==be,(h!==_||u!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new st(new Re(2,2),new ii({name:"BackgroundMaterial",uniforms:us(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ge.getTransfer(_.colorSpace)!==be,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function x(M,y){M.getRGB(Nl,ph(i)),e.buffers.color.setClear(Nl.r,Nl.g,Nl.b,y,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,y=1){o.set(M),a=y,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,x(o,a)},render:p,addToRenderList:S,dispose:m}}function ox(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(P,I,z,L,H){let W=!1,q=u(P,L,z,I);r!==q&&(r=q,c(r.object)),W=d(P,L,z,H),W&&p(P,L,z,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,_(P,I,z,L),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function u(P,I,z,L){let H=L.wireframe===!0,W=n[I.id];W===void 0&&(W={},n[I.id]=W);let q=P.isInstancedMesh===!0?P.id:0,ft=W[q];ft===void 0&&(ft={},W[q]=ft);let Q=ft[z.id];Q===void 0&&(Q={},ft[z.id]=Q);let G=Q[H];return G===void 0&&(G=f(l()),Q[H]=G),G}function f(P){let I=[],z=[],L=[];for(let H=0;H<e;H++)I[H]=0,z[H]=0,L[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:L,object:P,attributes:{},index:null}}function d(P,I,z,L){let H=r.attributes,W=I.attributes,q=0,ft=z.getAttributes();for(let Q in ft)if(ft[Q].location>=0){let J=H[Q],dt=W[Q];if(dt===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(dt=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(dt=P.instanceColor)),J===void 0||J.attribute!==dt||dt&&J.data!==dt.data)return!0;q++}return r.attributesNum!==q||r.index!==L}function p(P,I,z,L){let H={},W=I.attributes,q=0,ft=z.getAttributes();for(let Q in ft)if(ft[Q].location>=0){let J=W[Q];J===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(J=P.instanceColor));let dt={};dt.attribute=J,J&&J.data&&(dt.data=J.data),H[Q]=dt,q++}r.attributes=H,r.attributesNum=q,r.index=L}function S(){let P=r.newAttributes;for(let I=0,z=P.length;I<z;I++)P[I]=0}function x(P){m(P,0)}function m(P,I){let z=r.newAttributes,L=r.enabledAttributes,H=r.attributeDivisors;z[P]=1,L[P]===0&&(i.enableVertexAttribArray(P),L[P]=1),H[P]!==I&&(i.vertexAttribDivisor(P,I),H[P]=I)}function M(){let P=r.newAttributes,I=r.enabledAttributes;for(let z=0,L=I.length;z<L;z++)I[z]!==P[z]&&(i.disableVertexAttribArray(z),I[z]=0)}function y(P,I,z,L,H,W,q){q===!0?i.vertexAttribIPointer(P,I,z,H,W):i.vertexAttribPointer(P,I,z,L,H,W)}function _(P,I,z,L){S();let H=L.attributes,W=z.getAttributes(),q=I.defaultAttributeValues;for(let ft in W){let Q=W[ft];if(Q.location>=0){let G=H[ft];if(G===void 0&&(ft==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),ft==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),G!==void 0){let J=G.normalized,dt=G.itemSize,At=t.get(G);if(At===void 0)continue;let j=At.buffer,ht=At.type,St=At.bytesPerElement,_t=ht===i.INT||ht===i.UNSIGNED_INT||G.gpuType===Ja;if(G.isInterleavedBufferAttribute){let Et=G.data,O=Et.isInterleavedBuffer===!0?Et.stride:Et.itemSize,tt=G.offset;if(Et.isInstancedInterleavedBuffer||Et.isInstancedBufferAttribute){for(let k=0;k<Q.locationSize;k++)m(Q.location+k,Et.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let k=0;k<Q.locationSize;k++)x(Q.location+k);i.bindBuffer(i.ARRAY_BUFFER,j);for(let k=0;k<Q.locationSize;k++)y(Q.location+k,dt/Q.locationSize,ht,J,O*St,(tt+dt/Q.locationSize*k)*St,_t)}else{if(G.isInstancedBufferAttribute){for(let Et=0;Et<Q.locationSize;Et++)m(Q.location+Et,G.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Et=0;Et<Q.locationSize;Et++)x(Q.location+Et);i.bindBuffer(i.ARRAY_BUFFER,j);for(let Et=0;Et<Q.locationSize;Et++)y(Q.location+Et,dt/Q.locationSize,ht,J,dt*St,dt/Q.locationSize*Et*St,_t)}}else if(q!==void 0){let J=q[ft];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(Q.location,J);break;case 3:i.vertexAttrib3fv(Q.location,J);break;case 4:i.vertexAttrib4fv(Q.location,J);break;default:i.vertexAttrib1fv(Q.location,J)}}}}M()}function E(){A();for(let P in n){let I=n[P];for(let z in I){let L=I[z];for(let H in L){let W=L[H];for(let q in W)h(W[q].object),delete W[q];delete L[H]}}delete n[P]}}function b(P){if(n[P.id]===void 0)return;let I=n[P.id];for(let z in I){let L=I[z];for(let H in L){let W=L[H];for(let q in W)h(W[q].object),delete W[q];delete L[H]}}delete n[P.id]}function g(P){for(let I in n){let z=n[I];for(let L in z){let H=z[L];if(H[P.id]===void 0)continue;let W=H[P.id];for(let q in W)h(W[q].object),delete W[q];delete H[P.id]}}}function v(P){for(let I in n){let z=n[I],L=P.isInstancedMesh===!0?P.id:0,H=z[L];if(H!==void 0){for(let W in H){let q=H[W];for(let ft in q)h(q[ft].object),delete q[ft];delete H[W]}delete z[L],Object.keys(z).length===0&&delete n[I]}}}function A(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:w,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:g,initAttributes:S,enableAttribute:x,disableUnusedAttributes:M}}function ax(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function lx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(g){return!(g!==qn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){let v=g===Xn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==En&&g!==Fn&&!v&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&jt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:S,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:_,maxSamples:E,samples:b}}function cx(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Vn,a=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,S=u.clipIntersection,x=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!x)r?h(null):c();else{let M=r?0:n,y=M*4,_=m.clippingState||null;l.value=_,_=h(p,f,y,d);for(let E=0;E!==y;++E)_[E]=e[E];m.clippingState=_,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let S=u!==null?u.length:0,x=null;if(S!==0){if(x=l.value,p!==!0||x===null){let m=d+S*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(x===null||x.length<m)&&(x=new Float32Array(m));for(let y=0,_=d;y!==S;++y,_+=4)o.copy(u[y]).applyMatrix4(M,a),o.normal.toArray(x,_),x[_+3]=o.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,x}}var po=class extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Br(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gt(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:as});r.uniforms.tEquirect.value=e;let o=new st(s,r),a=e.minFilter;return e.minFilter===Si&&(e.minFilter=mn),new Zs(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},qf=256,hx=3,ux=20,md=256,gd=16,fx=3,dx=new N,px=new ae,Fl=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Zs(1,10,null),this._boxMesh=new st(new Gt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=dx}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,S=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(t.background=l.getClearColor(px));let x=new Zs(n,s,h);return x.position.copy(a),x.update(l,t),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=p,t.background=S,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(qf,Nf(t))}_fromTexture(t,e){t.mapping===cs||t.mapping===Ks?this._setSize(t.image.length===0?qf:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Yf(t,!1,!1),n=Math.log2(t)-hx;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Yf(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===cs||t.mapping===Ks?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jf()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Zf()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=mx(),this._integrationMaterial=gx());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/gd);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-fx)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(md*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=xx());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Yf(i,t,e){return new po(i,{minFilter:Si,generateMipmaps:t,type:Xn,colorSpace:br,depthBuffer:e})}function mo(i,t,e){return new ii({name:i,uniforms:t,vertexShader:ue.cube_vert,fragmentShader:e,side:xn,blending:as,depthTest:!1,depthWrite:!1})}function mx(){return mo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${md}u

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
	`)}function gx(){return mo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:gd}},`

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
	`)}function xx(){return mo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ux}
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
	`)}function Zf(){return mo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Jf(){return mo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function _x(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===qa||d===Ya)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let S=new po(p.height);return S.fromEquirectangularTexture(i,f),t.set(f,S),f.addEventListener("dispose",c),a(S.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===qa||d===Ya,S=d===cs||d===Ks;if(p||S){let x=e.get(f),m=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Fl(i)),x=p?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{let M=f.image;return p&&M&&M.height>0||S&&M&&l(M)?(n===null&&(n=new Fl(i)),x=p?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",h),x.texture):null}}}return f}function a(f,d){return d===qa?f.mapping=cs:d===Ya&&(f.mapping=Ks),f}function l(f){let d=0,p=6;for(let S=0;S<p;S++)f[S]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function vx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&yr("WebGLRenderer: "+n+" extension not supported."),s}}}function yx(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let x in p.attributes)t.remove(p.attributes[x]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let S=r.get(p);S&&(t.remove(S),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,S){return s[S.id]!==void 0||(S.addEventListener("dispose",a),s[S.id]=new WeakRef(S),o.register(S,S.id,S),e.memory.geometries++),S}function h(p){let S=p.attributes;for(let x in S)t.update(S[x],i.ARRAY_BUFFER)}function u(p){let S=p.index,x=p.attributes.position,m=0;if(x===void 0)return;let M=S!==null?S.array.length:x.array.length/3-1,y=x.count>=65535?Dr:Lr,_=new y(Math.ceil(M/3)*6,1),E=_.array;if(S!==null){let g=S.array;m=S.version;for(let v=0,A=0;v<M;v+=3){let w=g[v+0],P=g[v+1],I=g[v+2];E[A++]=w,E[A++]=P,E[A++]=P,E[A++]=I,E[A++]=I,E[A++]=w}}else{m=x.version;for(let g=0,v=0;g<M;g+=3){let A=g+0,w=g+1,P=g+2;E[v++]=A,E[v++]=w,E[v++]=w,E[v++]=P,E[v++]=P,E[v++]=A}}_.version=m;let b=r.get(p);b&&t.remove(b),r.set(p,_)}function f(p){let S=r.get(p);if(S){let x=p.index;x!==null&&S.version<x.version&&u(p)}else u(p);return r.get(p)}function d(){for(let p in s){let S=s[p].deref();S!==void 0&&l(S)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function Mx(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let S=0;for(let x=0;x<d;x++)S+=f[x];e.update(S,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Sx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ee("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ex(i,t,e){let n=new WeakMap,s=new Oe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let A=function(){g.dispose(),n.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],y=0;d===!0&&(y=1),p===!0&&(y=2),S===!0&&(y=3);let _=a.attributes.position.count*y,E=1;_>t.maxTextureSize&&(E=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let b=new Float32Array(_*E*4*u),g=new Rr(b,_,E,u);g.type=Fn,g.needsUpdate=!0;let v=y*4;for(let w=0;w<u;w++){let P=x[w],I=m[w],z=M[w],L=_*E*4*w;for(let H=0;H<P.count;H++){let W=H*v;d===!0&&(s.fromBufferAttribute(P,H),b[L+W+0]=s.x,b[L+W+1]=s.y,b[L+W+2]=s.z,b[L+W+3]=0),p===!0&&(s.fromBufferAttribute(I,H),b[L+W+4]=s.x,b[L+W+5]=s.y,b[L+W+6]=s.z,b[L+W+7]=0),S===!0&&(s.fromBufferAttribute(z,H),b[L+W+8]=s.x,b[L+W+9]=s.y,b[L+W+10]=s.z,b[L+W+11]=z.itemSize===4?s.w:1)}}f={count:u,texture:g,size:new xt(_,E)},n.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let S=0;S<c.length;S++)d+=c[S];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function bx(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Tx={[Zc]:"LINEAR_TONE_MAPPING",[Jc]:"REINHARD_TONE_MAPPING",[$c]:"CINEON_TONE_MAPPING",[Kc]:"ACES_FILMIC_TONE_MAPPING",[Qc]:"AGX_TONE_MAPPING",[th]:"NEUTRAL_TONE_MAPPING",[jc]:"CUSTOM_TONE_MAPPING"};function wx(i,t,e,n,s,r){let o=new Cn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Te;h.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ne([0,2,0,0,2,0],2));let u=new Ca({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new st(h,u),d=new eo(-1,1,1,-1,0,1),p=null,S=null,x=!1,m,M=null,y=[],_=!1;this.setSize=function(E,b){o.setSize(E,b),a!==null&&a.setSize(E,b),l!==null&&l.setSize(E,b);for(let g=0;g<y.length;g++){let v=y[g];v.setSize&&v.setSize(E,b)}},this.setEffects=function(E){y=E,_=y.length>0&&y[0].isRenderPass===!0;let b=o.width,g=o.height;y.length>0&&a===null&&(a=new Cn(b,g,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),l=new Cn(b,g,{type:Xn,depthBuffer:!1,stencilBuffer:!1}));let v=s===!0&&y.some(A=>A.needsDepthTexture===!0);v!==(o.depthTexture!==null)&&(v===!0&&c===null&&(c=new yi(b,g),r===!0&&(c.format=Ei,c.type=hs)),o.dispose(),o.depthTexture=v?c:null,o.resolveDepthBuffer=v,o.storeMultisampledDepthBuffer=v);for(let A=0;A<y.length;A++){let w=y[A];w.setSize&&w.setSize(b,g),v&&w.needsDepthTexture===!0&&w.setDepthTexture&&w.setDepthTexture(c)}},this.begin=function(E,b){if(x||E.toneMapping===si&&y.length===0)return!1;if(M=b,b!==null){let g=b.width,v=b.height;(o.width!==g||o.height!==v)&&this.setSize(g,v)}return _===!1&&E.setRenderTarget(o),m=E.toneMapping,E.toneMapping=si,!0},this.hasRenderPass=function(){return _},this.end=function(E,b){E.toneMapping=m,x=!0;let g=o,v=a;for(let A=0;A<y.length;A++){let w=y[A];w.enabled!==!1&&(w.render(E,v,g,b),w.needsSwap!==!1&&(g=v,v=v===a?l:a))}if(p!==E.outputColorSpace||S!==E.toneMapping){p=E.outputColorSpace,S=E.toneMapping,u.defines={},ge.getTransfer(p)===be&&(u.defines.SRGB_TRANSFER="");let A=Tx[S];A&&(u.defines[A]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=g.texture,E.setRenderTarget(M),E.render(f,d),M=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var xd=new gn,_d=new yi(1,1),vd=new zr(1),yd=new Rr,Md=new _a,Sd=new Br,$f=[],Kf=[],jf=new Float32Array(16),Qf=new Float32Array(9),td=new Float32Array(4);function tr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=$f[s];if(r===void 0&&(r=new Float32Array(s),$f[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Bl(i,t){let e=Kf[t];e===void 0&&(e=new Int32Array(t),Kf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ax(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2fv(this.addr,t),qe(e,t)}}function Cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;i.uniform3fv(this.addr,t),qe(e,t)}}function Ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4fv(this.addr,t),qe(e,t)}}function Px(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;td.set(n),i.uniformMatrix2fv(this.addr,!1,td),qe(e,n)}}function Lx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;Qf.set(n),i.uniformMatrix3fv(this.addr,!1,Qf),qe(e,n)}}function Dx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;jf.set(n),i.uniformMatrix4fv(this.addr,!1,jf),qe(e,n)}}function Nx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ux(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2iv(this.addr,t),qe(e,t)}}function Fx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3iv(this.addr,t),qe(e,t)}}function Ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4iv(this.addr,t),qe(e,t)}}function Bx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function zx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2uiv(this.addr,t),qe(e,t)}}function Hx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3uiv(this.addr,t),qe(e,t)}}function Gx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4uiv(this.addr,t),qe(e,t)}}function zl(i){return i.version===0&&(i.compareFunction=hh,i.needsUpdate=!0),i}function kx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=zl(_d):r=xd,e.setTexture2D(t||r,s)}function Vx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Md,s)}function Wx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=zl(vd):r=Sd,e.setTextureCube(t||r,s)}function Xx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||yd,s)}function qx(i){switch(i){case 5126:return Ax;case 35664:return Rx;case 35665:return Cx;case 35666:return Ix;case 35674:return Px;case 35675:return Lx;case 35676:return Dx;case 5124:case 35670:return Nx;case 35667:case 35671:return Ux;case 35668:case 35672:return Fx;case 35669:case 35673:return Ox;case 5125:return Bx;case 36294:return zx;case 36295:return Hx;case 36296:return Gx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return Vx;case 35680:case 36300:case 36308:case 36293:return Wx;case 36289:case 36303:case 36311:case 36292:return Xx}}function Yx(i,t){i.uniform1fv(this.addr,t)}function Zx(i,t){let e=tr(t,this.size,2);i.uniform2fv(this.addr,e)}function Jx(i,t){let e=tr(t,this.size,3);i.uniform3fv(this.addr,e)}function $x(i,t){let e=tr(t,this.size,4);i.uniform4fv(this.addr,e)}function Kx(i,t){let e=tr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function jx(i,t){let e=tr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Qx(i,t){let e=tr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function t_(i,t){i.uniform1iv(this.addr,t)}function e_(i,t){i.uniform2iv(this.addr,t)}function n_(i,t){i.uniform3iv(this.addr,t)}function i_(i,t){i.uniform4iv(this.addr,t)}function s_(i,t){i.uniform1uiv(this.addr,t)}function r_(i,t){i.uniform2uiv(this.addr,t)}function o_(i,t){i.uniform3uiv(this.addr,t)}function a_(i,t){i.uniform4uiv(this.addr,t)}function l_(i,t,e){let n=this.cache,s=t.length,r=Bl(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=zl(_d):o=xd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function c_(i,t,e){let n=this.cache,s=t.length,r=Bl(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Md,r[o])}function h_(i,t,e){let n=this.cache,s=t.length,r=Bl(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=zl(vd):o=Sd;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function u_(i,t,e){let n=this.cache,s=t.length,r=Bl(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||yd,r[o])}function f_(i){switch(i){case 5126:return Yx;case 35664:return Zx;case 35665:return Jx;case 35666:return $x;case 35674:return Kx;case 35675:return jx;case 35676:return Qx;case 5124:case 35670:return t_;case 35667:case 35671:return e_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return s_;case 36294:return r_;case 36295:return o_;case 36296:return a_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return h_;case 36289:case 36303:case 36311:case 36292:return u_}}var yh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qx(e.type)}},Mh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=f_(e.type)}},Sh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},_h=/(\w+)(\])?(\[|\.)?/g;function ed(i,t){i.seq.push(t),i.map[t.id]=t}function d_(i,t,e){let n=i.name,s=n.length;for(_h.lastIndex=0;;){let r=_h.exec(n),o=_h.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ed(e,c===void 0?new yh(a,i,t):new Mh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Sh(a),ed(e,u)),e=u}}}var Qs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);d_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function nd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var p_=37297,m_=0;function g_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var id=new ie;function x_(i){ge._getMatrix(id,ge.workingColorSpace,i);let t=`mat3( ${id.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(i)){case Tr:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function sd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+g_(i.getShaderSource(t),a)}else return r}function __(i,t){let e=x_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var v_={[Zc]:"Linear",[Jc]:"Reinhard",[$c]:"Cineon",[Kc]:"ACESFilmic",[Qc]:"AgX",[th]:"Neutral",[jc]:"Custom"};function y_(i,t){let e=v_[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ul=new N;function M_(){ge.getLuminanceCoefficients(Ul);let i=Ul.x.toFixed(4),t=Ul.y.toFixed(4),e=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function E_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function b_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function fo(i){return i!==""}function rd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function od(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var T_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(i){return i.replace(T_,w_)}function w_(i,t){let e=ue[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Eh(e)}var A_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ad(i){return i.replace(A_,R_)}function R_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ld(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var C_={[io]:"SHADOWMAP_TYPE_PCF",[Js]:"SHADOWMAP_TYPE_VSM"};function I_(i){return C_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var P_={[Ks]:"ENVMAP_MODE_REFRACTION"};function L_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":P_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var D_={[Xa]:"ENVMAP_BLENDING_MULTIPLY",[vf]:"ENVMAP_BLENDING_MIX",[yf]:"ENVMAP_BLENDING_ADD"};function N_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":D_[i.combine]||"ENVMAP_BLENDING_NONE"}function U_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=I_(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=L_(e),u=N_(e),f=S_(e),d=E_(r),p=s.createProgram(),S,x,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(fo).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(fo).join(`
`),x.length>0&&(x+=`
`)):(S=[ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),x=[ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?ue.tonemapping_pars_fragment:"",e.toneMapping!==si?y_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,__("linearToOutputTexel",e.outputColorSpace),M_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fo).join(`
`)),o=Eh(o),o=rd(o,e),o=od(o,e),a=Eh(a),a=rd(a,e),a=od(a,e),o=ad(o),a=ad(a),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,S=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",e.glslVersion===fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let M=m+S+o,y=m+x+a,_=nd(s,s.VERTEX_SHADER,M),E=nd(s,s.FRAGMENT_SHADER,y);s.attachShader(p,_),s.attachShader(p,E),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function b(w){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(p)||"",I=s.getShaderInfoLog(_)||"",z=s.getShaderInfoLog(E)||"",L=P.trim(),H=I.trim(),W=z.trim(),q=!0,ft=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,_,E);else{let Q=sd(s,_,"vertex"),G=sd(s,E,"fragment");ee("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+L+`
`+Q+`
`+G)}else L!==""?jt("WebGLProgram: Program Info Log:",L):(H===""||W==="")&&(ft=!1);ft&&(w.diagnostics={runnable:q,programLog:L,vertexShader:{log:H,prefix:S},fragmentShader:{log:W,prefix:x}})}s.deleteShader(_),s.deleteShader(E),g=new Qs(s,p),v=b_(s,p)}let g;this.getUniforms=function(){return g===void 0&&b(this),g};let v;this.getAttributes=function(){return v===void 0&&b(this),v};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(p,p_)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=m_++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=_,this.fragmentShader=E,this}var F_=0,bh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Th(t),e.set(t,n)),n}},Th=class{constructor(t){this.id=F_++,this.code=t,this.usedTimes=0}};function O_(i){return i===Vi||i===co||i===ho}function B_(i,t,e,n,s,r){let o=new Cr,a=new bh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(g){return l.add(g),g===0?"uv":`uv${g}`}function p(g,v,A,w,P,I){let z=w.fog,L=P.geometry,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?w.environment:null,W=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,q=t.get(g.envMap||H,W),ft=f[g.type],Q=n.precision;g.precision!==null&&(Q=n.getMaxPrecision(g.precision),Q!==g.precision&&jt("WebGLProgram.getParameters:",g.precision,"not supported, using",Q,"instead."));let G=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,J=G!==void 0?G.length:0,dt=0;L.morphAttributes.position!==void 0&&(dt=1),L.morphAttributes.normal!==void 0&&(dt=2),L.morphAttributes.color!==void 0&&(dt=3);let At,j,ht,St;if(ft){let Ft=oi[ft];At=Ft.vertexShader,j=Ft.fragmentShader}else{At=g.vertexShader,j=g.fragmentShader;let Ft=a.getVertexShaderStage(g),Ae=a.getFragmentShaderStage(g);a.update(g,Ft,Ae),ht=Ft.id,St=Ae.id}let _t=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),O=P.isInstancedMesh===!0,tt=P.isBatchedMesh===!0,k=!!g.map,it=!!g.matcap,K=!!q,U=K&&q.isPMREMTexture===!0,V=!!g.aoMap,X=!!g.lightMap,mt=!!g.bumpMap&&g.wireframe===!1,ct=!!g.normalMap,Ht=!!g.displacementMap,Dt=!!g.emissiveMap,ut=!!g.metalnessMap,vt=!!g.roughnessMap,yt=g.anisotropy>0,D=g.clearcoat>0,se=g.diffuseRoughness>0,kt=g.dispersion>0,Qt=g.retroreflectivity>0,pt=g.iridescence>0,Me=g.sheen>0,qt=g.transmission>0,te=yt&&!!g.anisotropyMap,C=D&&!!g.clearcoatMap,T=D&&!!g.clearcoatNormalMap,Y=D&&!!g.clearcoatRoughnessMap,gt=se&&!!g.diffuseRoughnessMap,at=pt&&!!g.iridescenceMap,bt=pt&&!!g.iridescenceThicknessMap,Ct=Me&&!!g.sheenColorMap,nt=Me&&!!g.sheenRoughnessMap,ot=!!g.specularMap,It=!!g.specularColorMap,F=!!g.specularIntensityMap,lt=qt&&!!g.transmissionMap,rt=qt&&!!g.thicknessMap,Pt=!!g.gradientMap,Tt=!!g.alphaMap,Rt=g.alphaTest>0,Jt=!!g.alphaHash,ce=!!g.extensions,Mt=si;g.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(Mt=i.toneMapping);let $t=U?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,le={shaderID:ft,shaderType:g.type,shaderName:g.name,vertexShader:At,fragmentShader:j,defines:g.defines,customVertexShaderID:ht,customFragmentShaderID:St,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:Q,batching:tt,batchingColor:tt&&P._colorsTexture!==null,instancing:O,instancingColor:O&&P.instanceColor!==null,instancingMorph:O&&P.morphTexture!==null,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:ge.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:k,matcap:it,envMap:K,envMapMode:K&&q.mapping,envMapPMREM:U,envMapMaxLod:U?$t.length-1:null,envMapSize:U?$t[0].width:null,aoMap:V,lightMap:X,bumpMap:mt,normalMap:ct,displacementMap:Ht,emissiveMap:Dt,normalMapObjectSpace:ct&&g.normalMapType===Ef,normalMapTangentSpace:ct&&g.normalMapType===Ll,packedNormalMap:ct&&g.normalMapType===Ll&&O_(g.normalMap.format),metalnessMap:ut,roughnessMap:vt,anisotropy:yt,anisotropyMap:te,clearcoat:D,clearcoatMap:C,clearcoatNormalMap:T,clearcoatRoughnessMap:Y,diffuseRoughness:se,diffuseRoughnessMap:gt,dispersion:kt,retroreflection:Qt,iridescence:pt,iridescenceMap:at,iridescenceThicknessMap:bt,sheen:Me,sheenColorMap:Ct,sheenRoughnessMap:nt,specularMap:ot,specularColorMap:It,specularIntensityMap:F,transmission:qt,transmissionMap:lt,thicknessMap:rt,gradientMap:Pt,opaque:g.transparent===!1&&g.blending===$s&&g.alphaToCoverage===!1,alphaMap:Tt,alphaTest:Rt,alphaHash:Jt,combine:g.combine,mapUv:k&&d(g.map.channel),aoMapUv:V&&d(g.aoMap.channel),lightMapUv:X&&d(g.lightMap.channel),bumpMapUv:mt&&d(g.bumpMap.channel),normalMapUv:ct&&d(g.normalMap.channel),displacementMapUv:Ht&&d(g.displacementMap.channel),emissiveMapUv:Dt&&d(g.emissiveMap.channel),metalnessMapUv:ut&&d(g.metalnessMap.channel),roughnessMapUv:vt&&d(g.roughnessMap.channel),anisotropyMapUv:te&&d(g.anisotropyMap.channel),clearcoatMapUv:C&&d(g.clearcoatMap.channel),clearcoatNormalMapUv:T&&d(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&d(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:gt&&d(g.diffuseRoughnessMap.channel),iridescenceMapUv:at&&d(g.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&d(g.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&d(g.sheenColorMap.channel),sheenRoughnessMapUv:nt&&d(g.sheenRoughnessMap.channel),specularMapUv:ot&&d(g.specularMap.channel),specularColorMapUv:It&&d(g.specularColorMap.channel),specularIntensityMapUv:F&&d(g.specularIntensityMap.channel),transmissionMapUv:lt&&d(g.transmissionMap.channel),thicknessMapUv:rt&&d(g.thicknessMap.channel),alphaMapUv:Tt&&d(g.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ct||yt),vertexNormals:!!L.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(k||Tt),fog:!!z,useFog:g.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||L.attributes.normal===void 0&&ct===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Et,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:dt,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:I.filter(Ft=>Ft.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,decodeVideoTexture:k&&g.map.isVideoTexture===!0&&ge.getTransfer(g.map.colorSpace)===be,decodeVideoTextureEmissive:Dt&&g.emissiveMap.isVideoTexture===!0&&ge.getTransfer(g.emissiveMap.colorSpace)===be,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===ye,flipSided:g.side===xn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ce&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&g.extensions.multiDraw===!0||tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return le.vertexUv1s=l.has(1),le.vertexUv2s=l.has(2),le.vertexUv3s=l.has(3),l.clear(),le}function S(g){let v=[];if(g.shaderID?v.push(g.shaderID):(v.push(g.customVertexShaderID),v.push(g.customFragmentShaderID)),g.defines!==void 0)for(let A in g.defines)v.push(A),v.push(g.defines[A]);return g.isRawShaderMaterial===!1&&(x(v,g),m(v,g),v.push(i.outputColorSpace)),v.push(g.customProgramCacheKey),v.join()}function x(g,v){g.push(v.precision),g.push(v.outputColorSpace),g.push(v.envMapMode),g.push(v.envMapPMREM),g.push(v.envMapMaxLod),g.push(v.envMapSize),g.push(v.mapUv),g.push(v.alphaMapUv),g.push(v.lightMapUv),g.push(v.aoMapUv),g.push(v.bumpMapUv),g.push(v.normalMapUv),g.push(v.displacementMapUv),g.push(v.emissiveMapUv),g.push(v.metalnessMapUv),g.push(v.roughnessMapUv),g.push(v.anisotropyMapUv),g.push(v.clearcoatMapUv),g.push(v.clearcoatNormalMapUv),g.push(v.clearcoatRoughnessMapUv),g.push(v.diffuseRoughnessMapUv),g.push(v.iridescenceMapUv),g.push(v.iridescenceThicknessMapUv),g.push(v.sheenColorMapUv),g.push(v.sheenRoughnessMapUv),g.push(v.specularMapUv),g.push(v.specularColorMapUv),g.push(v.specularIntensityMapUv),g.push(v.transmissionMapUv),g.push(v.thicknessMapUv),g.push(v.combine),g.push(v.fogExp2),g.push(v.sizeAttenuation),g.push(v.morphTargetsCount),g.push(v.numSunLights),g.push(v.numDirLights),g.push(v.numPointLights),g.push(v.numSpotLights),g.push(v.numSpotLightMaps),g.push(v.numHemiLights),g.push(v.numRectAreaLights),g.push(v.numSunLightShadows),g.push(v.numDirLightShadows),g.push(v.numPointLightShadows),g.push(v.numSpotLightShadows),g.push(v.numSpotLightShadowsWithMaps),g.push(v.numLightProbes),g.push(v.numLightProbeGrids),g.push(v.shadowMapType),g.push(v.toneMapping),g.push(v.numClippingPlanes),g.push(v.numClipIntersection),g.push(v.depthPacking)}function m(g,v){o.disableAll(),v.instancing&&o.enable(0),v.instancingColor&&o.enable(1),v.instancingMorph&&o.enable(2),v.matcap&&o.enable(3),v.envMap&&o.enable(4),v.normalMapObjectSpace&&o.enable(5),v.normalMapTangentSpace&&o.enable(6),v.clearcoat&&o.enable(7),v.iridescence&&o.enable(8),v.alphaTest&&o.enable(9),v.vertexColors&&o.enable(10),v.vertexAlphas&&o.enable(11),v.vertexUv1s&&o.enable(12),v.vertexUv2s&&o.enable(13),v.vertexUv3s&&o.enable(14),v.vertexTangents&&o.enable(15),v.anisotropy&&o.enable(16),v.alphaHash&&o.enable(17),v.batching&&o.enable(18),v.dispersion&&o.enable(19),v.retroreflection&&o.enable(24),v.diffuseRoughness&&o.enable(25),v.batchingColor&&o.enable(20),v.gradientMap&&o.enable(21),v.packedNormalMap&&o.enable(22),v.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),v.numLightProbeGrids>0&&o.enable(22),v.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function M(g){let v=f[g.type],A;if(v){let w=oi[v];A=Vf.clone(w.uniforms)}else A=g.uniforms;return A}function y(g,v){let A=h.get(v);return A!==void 0?++A.usedTimes:(A=new U_(i,v,g,s),c.push(A),h.set(v,A)),A}function _(g){if(--g.usedTimes===0){let v=c.indexOf(g);c[v]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function E(g){a.remove(g)}function b(){a.dispose()}return{getParameters:p,getProgramCacheKey:S,getUniforms:M,acquireProgram:y,releaseProgram:_,releaseShaderCache:E,programs:c,dispose:b}}function z_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function H_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function cd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,S,x,m){let M=i[t];return M===void 0?(M={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:S,renderOrder:f.renderOrder,z:x,group:m},i[t]=M):(M.id=f.id,M.object=f,M.geometry=d,M.material=p,M.materialVariant=o(f),M.groupOrder=S,M.renderOrder=f.renderOrder,M.z=x,M.group=m),t++,M}function l(f,d,p,S,x,m,M){M.reversedDepth===!0&&(x=-x);let y=a(f,d,p,S,x,m);p.transmission>0?n.push(y):p.transparent===!0?s.push(y):e.push(y)}function c(f,d,p,S,x,m){let M=a(f,d,p,S,x,m);p.transmission>0?n.unshift(M):p.transparent===!0?s.unshift(M):e.unshift(M)}function h(f,d){e.length>1&&e.sort(f||H_),n.length>1&&n.sort(d||cd),s.length>1&&s.sort(d||cd)}function u(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function G_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new hd,i.set(n,[o])):s>=r.length?(o=new hd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function k_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new ae};break;case"SpotLight":e={position:new N,direction:new N,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function V_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var W_=0;function X_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function q_(i){let t=new k_,e=V_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new oe,o=new oe;function a(c){let h=0,u=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let d=0,p=0,S=0,x=0,m=0,M=0,y=0,_=0,E=0,b=0,g=0,v=0,A=0,w=0;c.sort(X_);for(let I=0,z=c.length;I<z;I++){let L=c[I],H=L.color,W=L.intensity,q=L.distance,ft=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Vi?ft=L.shadow.map.texture:ft=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=H.r*W,u+=H.g*W,f+=H.b*W;else if(L.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(L.sh.coefficients[Q],W);w++}else if(L.isSunLight){let Q=t.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let G=L.shadow,J=e.get(L);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[p]=J,n.sunShadowMap[p]=ft;let dt=G.getViewportCount();for(let At=0;At<dt;At++)n.sunShadowMatrix[S+At]=G.getMatrix(At),n.sunShadowCascade[S+At]=G._cascadeData[At];S+=dt,p++}n.sun[d]=Q,d++}else if(L.isDirectionalLight){let Q=t.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let G=L.shadow,J=e.get(L);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,n.directionalShadow[x]=J,n.directionalShadowMap[x]=ft,n.directionalShadowMatrix[x]=L.shadow.matrix,E++}n.directional[x]=Q,x++}else if(L.isSpotLight){let Q=t.get(L);Q.position.setFromMatrixPosition(L.matrixWorld),Q.color.copy(H).multiplyScalar(W),Q.distance=q,Q.coneCos=Math.cos(L.angle),Q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Q.decay=L.decay,n.spot[M]=Q;let G=L.shadow;if(L.map&&(n.spotLightMap[v]=L.map,v++,G.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[M]=G.matrix,L.castShadow){let J=e.get(L);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,n.spotShadow[M]=J,n.spotShadowMap[M]=ft,g++}M++}else if(L.isRectAreaLight){let Q=t.get(L);Q.color.copy(H).multiplyScalar(W),Q.halfWidth.set(L.width*.5,0,0),Q.halfHeight.set(0,L.height*.5,0),n.rectArea[y]=Q,y++}else if(L.isPointLight){let Q=t.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity),Q.distance=L.distance,Q.decay=L.decay,L.castShadow){let G=L.shadow,J=e.get(L);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,J.shadowCameraNear=G.camera.near,J.shadowCameraFar=G.camera.far,n.pointShadow[m]=J,n.pointShadowMap[m]=ft,n.pointShadowMatrix[m]=L.shadow.matrix,b++}n.point[m]=Q,m++}else if(L.isHemisphereLight){let Q=t.get(L);Q.skyColor.copy(L.color).multiplyScalar(W),Q.groundColor.copy(L.groundColor).multiplyScalar(W),n.hemi[_]=Q,_++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ot.LTC_FLOAT_1,n.rectAreaLTC2=Ot.LTC_FLOAT_2):(n.rectAreaLTC1=Ot.LTC_HALF_1,n.rectAreaLTC2=Ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.sunLength!==d||P.directionalLength!==x||P.pointLength!==m||P.spotLength!==M||P.rectAreaLength!==y||P.hemiLength!==_||P.numSunShadows!==p||P.numDirectionalShadows!==E||P.numPointShadows!==b||P.numSpotShadows!==g||P.numSpotMaps!==v||P.numLightProbes!==w)&&(n.sun.length=d,n.directional.length=x,n.spot.length=M,n.rectArea.length=y,n.point.length=m,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+v-A,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,P.sunLength=d,P.directionalLength=x,P.pointLength=m,P.spotLength=M,P.rectAreaLength=y,P.hemiLength=_,P.numSunShadows=p,P.numDirectionalShadows=E,P.numPointShadows=b,P.numSpotShadows=g,P.numSpotMaps=v,P.numLightProbes=w,n.version=W_++)}function l(c,h){let u=0,f=0,d=0,p=0,S=0,x=0,m=h.matrixWorldInverse;for(let M=0,y=c.length;M<y;M++){let _=c[M];if(_.isSunLight){let E=n.sun[u];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(m),u++}else if(_.isDirectionalLight){let E=n.directional[f];E.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),f++}else if(_.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let E=n.rectArea[S];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),S++}else if(_.isPointLight){let E=n.point[d];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let E=n.hemi[x];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function ud(i){let t=new q_(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):e.push(u)}function a(u){n.push(u)}function l(){t.setup(e),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Y_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new ud(i),t.set(s,[a])):r>=o.length?(a=new ud(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Z_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J_=`uniform sampler2D shadow_pass;
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
}`,$_=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],K_=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],fd=new oe,uo=new N,vh=new N;function j_(i,t,e){let n=new Bi,s=new xt,r=new xt,o=new Oe,a=new Ia,l=new Pa,c={},h=e.maxTextureSize,u={[ki]:xn,[xn]:ki,[ye]:ye},f=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:Z_,fragmentShader:J_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Te;p.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new st(p,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=io;let m=this.type;this.render=function(b,g,v){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||b.length===0)return;this.type===Wa&&(jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=io);let A=i.getRenderTarget(),w=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(as),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let z=m!==this.type;z&&g.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(H=>H.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,H=b.length;L<H;L++){let W=b[L],q=W.shadow;if(q===void 0){jt("WebGLShadowMap:",W,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ft=q.getFrameExtents();s.multiply(ft),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ft.x),s.x=r.x*ft.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ft.y),s.y=r.y*ft.y,q.mapSize.y=r.y));let Q=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=Q,q.map===null||z===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Js){if(W.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Cn(s.x,s.y,{format:Vi,type:Xn,minFilter:mn,magFilter:mn,generateMipmaps:!1}),q.map.texture.name=W.name+".shadowMap",q.map.depthTexture=new yi(s.x,s.y,Fn),q.map.depthTexture.name=W.name+".shadowMapDepth",q.map.depthTexture.format=gi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Qe,q.map.depthTexture.magFilter=Qe}else W.isPointLight?(q.map=new po(s.x),q.map.depthTexture=new zr(s.x,Wn)):(q.map=new Cn(s.x,s.y),q.map.depthTexture=new yi(s.x,s.y,Wn)),q.map.depthTexture.name=W.name+".shadowMap",q.map.depthTexture.format=gi,this.type===io?(q.map.depthTexture.compareFunction=Q?ch:lh,q.map.depthTexture.minFilter=mn,q.map.depthTexture.magFilter=mn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Qe,q.map.depthTexture.magFilter=Qe);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let G=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();W.isPointLight!==!0&&q.updateMatrices(W,v);let J=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:v.layers;for(let dt=0;dt<G;dt++){let At=q.getCamera(dt);if(W.isPointLight){let j=q.camera,ht=q.matrix,St=W.distance||j.far;St!==j.far&&(j.far=St,j.updateProjectionMatrix()),uo.setFromMatrixPosition(W.matrixWorld),j.position.copy(uo),vh.copy(j.position),vh.add($_[dt]),j.up.copy(K_[dt]),j.lookAt(vh),j.updateMatrixWorld(),ht.makeTranslation(-uo.x,-uo.y,-uo.z),fd.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),q._frustum.setFromProjectionMatrix(fd,j.coordinateSystem,j.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,dt),i.clear();else{dt===0&&(i.setRenderTarget(q.map),i.clear());let j=q.getViewport(dt);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),I.viewport(o)}n=q.getFrustum(dt),_(g,v,At,W,J,this.type)}q.isPointLightShadow!==!0&&this.type===Js&&M(q,v),q.needsUpdate=!1}m=this.type,x.needsUpdate=!1,i.setRenderTarget(A,w,P)};function M(b,g){let v=t.update(S);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Cn(s.x,s.y,{format:Vi,type:Xn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(g,null,v,f,S,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(g,null,v,d,S,null)}function y(b,g,v,A){let w=null,P=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)w=P;else if(w=v.isPointLight===!0?l:a,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let I=w.uuid,z=g.uuid,L=c[I];L===void 0&&(L={},c[I]=L);let H=L[z];H===void 0&&(H=w.clone(),L[z]=H,g.addEventListener("dispose",E)),w=H}if(w.visible=g.visible,w.wireframe=g.wireframe,A===Js?w.side=g.shadowSide!==null?g.shadowSide:g.side:w.side=g.shadowSide!==null?g.shadowSide:u[g.side],w.alphaMap=g.alphaMap,w.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,w.map=g.map,w.clipShadows=g.clipShadows,w.clippingPlanes=g.clippingPlanes,w.clipIntersection=g.clipIntersection,w.displacementMap=g.displacementMap,w.displacementScale=g.displacementScale,w.displacementBias=g.displacementBias,w.wireframeLinewidth=g.wireframeLinewidth,w.linewidth=g.linewidth,v.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let I=i.properties.get(w);I.light=v}return w}function _(b,g,v,A,w,P){if(b.visible===!1)return;if(b.layers.test(w)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===Js)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);let L=t.update(b),H=b.material;if(Array.isArray(H)){let W=L.groups;for(let q=0,ft=W.length;q<ft;q++){let Q=W[q],G=H[Q.materialIndex];if(G&&G.visible){let J=y(b,G,A,P);b.onBeforeShadow(i,b,g,v,L,J,Q),i.renderBufferDirect(v,null,L,J,b,Q),b.onAfterShadow(i,b,g,v,L,J,Q)}}}else if(H.visible){let W=y(b,H,A,P);b.onBeforeShadow(i,b,g,v,L,W,null),i.renderBufferDirect(v,null,L,W,b,null),b.onAfterShadow(i,b,g,v,L,W,null)}}let z=b.children;for(let L=0,H=z.length;L<H;L++)_(z[L],g,v,A,w,P)}function E(b){b.target.removeEventListener("dispose",E);for(let v in c){let A=c[v],w=b.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}function Q_(i,t){function e(){let F=!1,lt=new Oe,rt=null,Pt=new Oe(0,0,0,0);return{setMask:function(Tt){rt!==Tt&&!F&&(i.colorMask(Tt,Tt,Tt,Tt),rt=Tt)},setLocked:function(Tt){F=Tt},setClear:function(Tt,Rt,Jt,ce,Mt){Mt===!0&&(Tt*=ce,Rt*=ce,Jt*=ce),lt.set(Tt,Rt,Jt,ce),Pt.equals(lt)===!1&&(i.clearColor(Tt,Rt,Jt,ce),Pt.copy(lt))},reset:function(){F=!1,rt=null,Pt.set(-1,0,0,0)}}}function n(){let F=!1,lt=!1,rt=null,Pt=null,Tt=null;return{setReversed:function(Rt){if(lt!==Rt){let Jt=t.get("EXT_clip_control");Rt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),lt=Rt;let ce=Tt;Tt=null,this.setClear(ce)}},getReversed:function(){return lt},setTest:function(Rt){Rt?Et(i.DEPTH_TEST):O(i.DEPTH_TEST)},setMask:function(Rt){rt!==Rt&&!F&&(i.depthMask(Rt),rt=Rt)},setFunc:function(Rt){if(lt&&(Rt=Df[Rt]),Pt!==Rt){switch(Rt){case oa:i.depthFunc(i.NEVER);break;case aa:i.depthFunc(i.ALWAYS);break;case la:i.depthFunc(i.LESS);break;case Us:i.depthFunc(i.LEQUAL);break;case ca:i.depthFunc(i.EQUAL);break;case ha:i.depthFunc(i.GEQUAL);break;case ua:i.depthFunc(i.GREATER);break;case fa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pt=Rt}},setLocked:function(Rt){F=Rt},setClear:function(Rt){Tt!==Rt&&(Tt=Rt,lt&&(Rt=1-Rt),i.clearDepth(Rt))},reset:function(){F=!1,rt=null,Pt=null,Tt=null,lt=!1}}}function s(){let F=!1,lt=null,rt=null,Pt=null,Tt=null,Rt=null,Jt=null,ce=null,Mt=null;return{setTest:function($t){F||($t?Et(i.STENCIL_TEST):O(i.STENCIL_TEST))},setMask:function($t){lt!==$t&&!F&&(i.stencilMask($t),lt=$t)},setFunc:function($t,le,Ft){(rt!==$t||Pt!==le||Tt!==Ft)&&(i.stencilFunc($t,le,Ft),rt=$t,Pt=le,Tt=Ft)},setOp:function($t,le,Ft){(Rt!==$t||Jt!==le||ce!==Ft)&&(i.stencilOp($t,le,Ft),Rt=$t,Jt=le,ce=Ft)},setLocked:function($t){F=$t},setClear:function($t){Mt!==$t&&(i.clearStencil($t),Mt=$t)},reset:function(){F=!1,lt=null,rt=null,Pt=null,Tt=null,Rt=null,Jt=null,ce=null,Mt=null}}}let r=new e,o=new n,a=new s,l={},c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],S=null,x=!1,m=null,M=null,y=null,_=null,E=null,b=null,g=null,v=new ae(0,0,0),A=0,w=!1,P=null,I=null,z=null,L=null,H=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,ft=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(Q)[1]),q=ft>=1):Q.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),q=ft>=2);let G=null,J={},dt=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),j=new Oe().fromArray(dt),ht=new Oe().fromArray(At);function St(F,lt,rt,Pt){let Tt=new Uint8Array(4),Rt=i.createTexture();i.bindTexture(F,Rt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<rt;Jt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,Pt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(lt+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return Rt}let _t={};_t[i.TEXTURE_2D]=St(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=St(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=St(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=St(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Et(i.DEPTH_TEST),o.setFunc(Us),mt(!1),ct(Vc),Et(i.CULL_FACE),V(as);function Et(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function O(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function tt(F,lt){return f[F]!==lt?(i.bindFramebuffer(F,lt),f[F]=lt,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=lt),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function k(F,lt){let rt=p,Pt=!1;if(F){rt=d.get(lt),rt===void 0&&(rt=[],d.set(lt,rt));let Tt=F.textures;if(rt.length!==Tt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let Rt=0,Jt=Tt.length;Rt<Jt;Rt++)rt[Rt]=i.COLOR_ATTACHMENT0+Rt;rt.length=Tt.length,Pt=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,Pt=!0);Pt&&i.drawBuffers(rt)}function it(F){return S!==F?(i.useProgram(F),S=F,!0):!1}let K={[ls]:i.FUNC_ADD,[ef]:i.FUNC_SUBTRACT,[nf]:i.FUNC_REVERSE_SUBTRACT};K[sf]=i.MIN,K[rf]=i.MAX;let U={[of]:i.ZERO,[af]:i.ONE,[lf]:i.SRC_COLOR,[qc]:i.SRC_ALPHA,[pf]:i.SRC_ALPHA_SATURATE,[ff]:i.DST_COLOR,[hf]:i.DST_ALPHA,[cf]:i.ONE_MINUS_SRC_COLOR,[Yc]:i.ONE_MINUS_SRC_ALPHA,[df]:i.ONE_MINUS_DST_COLOR,[uf]:i.ONE_MINUS_DST_ALPHA,[mf]:i.CONSTANT_COLOR,[gf]:i.ONE_MINUS_CONSTANT_COLOR,[xf]:i.CONSTANT_ALPHA,[_f]:i.ONE_MINUS_CONSTANT_ALPHA};function V(F,lt,rt,Pt,Tt,Rt,Jt,ce,Mt,$t){if(F===as){x===!0&&(O(i.BLEND),x=!1);return}if(x===!1&&(Et(i.BLEND),x=!0),F!==tf){if(F!==m||$t!==w){if((M!==ls||E!==ls)&&(i.blendEquation(i.FUNC_ADD),M=ls,E=ls),$t)switch(F){case $s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mi:i.blendFunc(i.ONE,i.ONE);break;case Wc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ee("WebGLState: Invalid blending: ",F);break}else switch(F){case $s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Wc:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xc:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",F);break}y=null,_=null,b=null,g=null,v.set(0,0,0),A=0,m=F,w=$t}return}Tt=Tt||lt,Rt=Rt||rt,Jt=Jt||Pt,(lt!==M||Tt!==E)&&(i.blendEquationSeparate(K[lt],K[Tt]),M=lt,E=Tt),(rt!==y||Pt!==_||Rt!==b||Jt!==g)&&(i.blendFuncSeparate(U[rt],U[Pt],U[Rt],U[Jt]),y=rt,_=Pt,b=Rt,g=Jt),(ce.equals(v)===!1||Mt!==A)&&(i.blendColor(ce.r,ce.g,ce.b,Mt),v.copy(ce),A=Mt),m=F,w=!1}function X(F,lt){F.side===ye?O(i.CULL_FACE):Et(i.CULL_FACE);let rt=F.side===xn;lt&&(rt=!rt),mt(rt),F.blending===$s&&F.transparent===!1?V(as):V(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let Pt=F.stencilWrite;a.setTest(Pt),Pt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Dt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Et(i.SAMPLE_ALPHA_TO_COVERAGE):O(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(F){P!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),P=F)}function ct(F){F!==ju?(Et(i.CULL_FACE),F!==I&&(F===Vc?i.cullFace(i.BACK):F===Qu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):O(i.CULL_FACE),I=F}function Ht(F){F!==z&&(q&&i.lineWidth(F),z=F)}function Dt(F,lt,rt){F?(Et(i.POLYGON_OFFSET_FILL),(L!==lt||H!==rt)&&(L=lt,H=rt,o.getReversed()&&(lt=-lt,rt=-rt),i.polygonOffset(lt,rt))):O(i.POLYGON_OFFSET_FILL)}function ut(F){F?Et(i.SCISSOR_TEST):O(i.SCISSOR_TEST)}function vt(F){F===void 0&&(F=i.TEXTURE0+W-1),G!==F&&(i.activeTexture(F),G=F)}function yt(F,lt,rt){rt===void 0&&(G===null?rt=i.TEXTURE0+W-1:rt=G);let Pt=J[rt];Pt===void 0&&(Pt={type:void 0,texture:void 0},J[rt]=Pt),(Pt.type!==F||Pt.texture!==lt)&&(G!==rt&&(i.activeTexture(rt),G=rt),i.bindTexture(F,lt||_t[F]),Pt.type=F,Pt.texture=lt)}function D(){let F=J[G];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function se(){try{i.compressedTexImage2D(...arguments)}catch(F){ee("WebGLState:",F)}}function kt(){try{i.compressedTexImage3D(...arguments)}catch(F){ee("WebGLState:",F)}}function Qt(){try{i.texSubImage2D(...arguments)}catch(F){ee("WebGLState:",F)}}function pt(){try{i.texSubImage3D(...arguments)}catch(F){ee("WebGLState:",F)}}function Me(){try{i.compressedTexSubImage2D(...arguments)}catch(F){ee("WebGLState:",F)}}function qt(){try{i.compressedTexSubImage3D(...arguments)}catch(F){ee("WebGLState:",F)}}function te(){try{i.texStorage2D(...arguments)}catch(F){ee("WebGLState:",F)}}function C(){try{i.texStorage3D(...arguments)}catch(F){ee("WebGLState:",F)}}function T(){try{i.texImage2D(...arguments)}catch(F){ee("WebGLState:",F)}}function Y(){try{i.texImage3D(...arguments)}catch(F){ee("WebGLState:",F)}}function gt(F){return u[F]!==void 0?u[F]:i.getParameter(F)}function at(F,lt){u[F]!==lt&&(i.pixelStorei(F,lt),u[F]=lt)}function bt(F){j.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),j.copy(F))}function Ct(F){ht.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),ht.copy(F))}function nt(F,lt){let rt=c.get(lt);rt===void 0&&(rt=new WeakMap,c.set(lt,rt));let Pt=rt.get(F);Pt===void 0&&(Pt=i.getUniformBlockIndex(lt,F.name),i.uniformBlockBinding(lt,Pt,Pt),rt.set(F,Pt))}function ot(F,lt,rt){let Tt=c.get(lt).get(F);l[Tt]!==rt&&(i.bindBufferBase(i.UNIFORM_BUFFER,Tt,rt),l[Tt]=rt)}function It(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},G=null,J={},f={},l={},d=new WeakMap,p=[],S=null,x=!1,m=null,M=null,y=null,_=null,E=null,b=null,g=null,v=new ae(0,0,0),A=0,w=!1,P=null,I=null,z=null,L=null,H=null,j.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Et,disable:O,bindFramebuffer:tt,drawBuffers:k,useProgram:it,setBlending:V,setMaterial:X,setFlipSided:mt,setCullFace:ct,setLineWidth:Ht,setPolygonOffset:Dt,setScissorTest:ut,activeTexture:vt,bindTexture:yt,unbindTexture:D,compressedTexImage2D:se,compressedTexImage3D:kt,texImage2D:T,texImage3D:Y,pixelStorei:at,getParameter:gt,updateUBOMapping:nt,uniformBlockBinding:ot,texStorage2D:te,texStorage3D:C,texSubImage2D:Qt,texSubImage3D:pt,compressedTexSubImage2D:Me,compressedTexSubImage3D:qt,scissor:bt,viewport:Ct,reset:It}}function tv(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,h=new WeakMap,u=new Set,f,d=new WeakMap,p=new Set,S=new FinalizationRegistry(C=>p.delete(C)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,T){return x?new OffscreenCanvas(C,T):wr("canvas")}function M(C,T,Y){let gt=1,at=te(C);if((at.width>Y||at.height>Y)&&(gt=Y/Math.max(at.width,at.height)),gt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let bt=Math.floor(gt*at.width),Ct=Math.floor(gt*at.height);f===void 0&&(f=m(bt,Ct));let nt=T?m(bt,Ct):f;return nt.width=bt,nt.height=Ct,nt.getContext("2d").drawImage(C,0,0,bt,Ct),jt("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+bt+"x"+Ct+")."),nt}else return"data"in C&&jt("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),C;return C}function y(C){return C.generateMipmaps}function _(C){i.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(C,T,Y,gt,at,bt=!1){if(C!==null){if(i[C]!==void 0)return i[C];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Ct;gt&&(Ct=t.get("EXT_texture_norm16"),Ct||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=T;if(T===i.RED&&(Y===i.FLOAT&&(nt=i.R32F),Y===i.HALF_FLOAT&&(nt=i.R16F),Y===i.UNSIGNED_BYTE&&(nt=i.R8),Y===i.UNSIGNED_SHORT&&Ct&&(nt=Ct.R16_EXT),Y===i.SHORT&&Ct&&(nt=Ct.R16_SNORM_EXT)),T===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(nt=i.R8UI),Y===i.UNSIGNED_SHORT&&(nt=i.R16UI),Y===i.UNSIGNED_INT&&(nt=i.R32UI),Y===i.BYTE&&(nt=i.R8I),Y===i.SHORT&&(nt=i.R16I),Y===i.INT&&(nt=i.R32I)),T===i.RG&&(Y===i.FLOAT&&(nt=i.RG32F),Y===i.HALF_FLOAT&&(nt=i.RG16F),Y===i.UNSIGNED_BYTE&&(nt=i.RG8),Y===i.UNSIGNED_SHORT&&Ct&&(nt=Ct.RG16_EXT),Y===i.SHORT&&Ct&&(nt=Ct.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(nt=i.RG8UI),Y===i.UNSIGNED_SHORT&&(nt=i.RG16UI),Y===i.UNSIGNED_INT&&(nt=i.RG32UI),Y===i.BYTE&&(nt=i.RG8I),Y===i.SHORT&&(nt=i.RG16I),Y===i.INT&&(nt=i.RG32I)),T===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),Y===i.UNSIGNED_INT&&(nt=i.RGB32UI),Y===i.BYTE&&(nt=i.RGB8I),Y===i.SHORT&&(nt=i.RGB16I),Y===i.INT&&(nt=i.RGB32I)),T===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),Y===i.UNSIGNED_INT&&(nt=i.RGBA32UI),Y===i.BYTE&&(nt=i.RGBA8I),Y===i.SHORT&&(nt=i.RGBA16I),Y===i.INT&&(nt=i.RGBA32I)),T===i.RGB&&(Y===i.UNSIGNED_SHORT&&Ct&&(nt=Ct.RGB16_EXT),Y===i.SHORT&&Ct&&(nt=Ct.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(nt=i.R11F_G11F_B10F)),T===i.RGBA){let ot=bt?Tr:ge.getTransfer(at);Y===i.FLOAT&&(nt=i.RGBA32F),Y===i.HALF_FLOAT&&(nt=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(nt=ot===be?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&Ct&&(nt=Ct.RGBA16_EXT),Y===i.SHORT&&Ct&&(nt=Ct.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function g(C,T){let Y;return C?T===null||T===Wn||T===hs?Y=i.DEPTH24_STENCIL8:T===Fn?Y=i.DEPTH32F_STENCIL8:T===js&&(Y=i.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Wn||T===hs?Y=i.DEPTH_COMPONENT24:T===Fn?Y=i.DEPTH_COMPONENT32F:T===js&&(Y=i.DEPTH_COMPONENT16),Y}function v(C,T){return y(C)===!0||C.isFramebufferTexture&&C.minFilter!==Qe&&C.minFilter!==mn?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function A(C){let T=new WeakRef(C);n.get(C).__ref=T,p.add(T),S.register(C,T,T)}function w(C){let T=n.get(C).__ref;T!==void 0&&(p.delete(T),S.unregister(T))}function P(C){z(C.target)}function I(C){L(C.target)}function z(C){C.removeEventListener("dispose",P),w(C),W(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&u.delete(C)}function L(C){C.removeEventListener("dispose",I),w(C),ft(C)}function H(){for(let C of p){let T=C.deref();T!==void 0&&(T.isRenderTarget===!0?L(T):z(T))}p.clear(),u.clear()}function W(C){let T=n.get(C);if(T.__webglInit===void 0)return;let Y=C.source,gt=d.get(Y);if(gt){let at=gt[T.__cacheKey];at.usedTimes--,at.usedTimes===0&&q(C),Object.keys(gt).length===0&&d.delete(Y)}n.remove(C)}function q(C){let T=n.get(C);i.deleteTexture(T.__webglTexture);let Y=C.source,gt=d.get(Y);delete gt[T.__cacheKey],o.memory.textures--}function ft(C){let T=n.get(C);T.__depthDisposeCallback&&T.__depthDisposeCallback();let Y=C.depthTexture;if(Y&&Y.renderTarget===C&&z(Y),C.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(T.__webglFramebuffer[at]))for(let bt=0;bt<T.__webglFramebuffer[at].length;bt++)i.deleteFramebuffer(T.__webglFramebuffer[at][bt]);else i.deleteFramebuffer(T.__webglFramebuffer[at]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[at])}else{if(Array.isArray(T.__webglFramebuffer))for(let at=0;at<T.__webglFramebuffer.length;at++)i.deleteFramebuffer(T.__webglFramebuffer[at]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let at=0;at<T.__webglColorRenderbuffer.length;at++)T.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[at]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let gt=C.textures;for(let at=0,bt=gt.length;at<bt;at++){let Ct=n.get(gt[at]);Ct.__webglTexture&&(i.deleteTexture(Ct.__webglTexture),o.memory.textures--),n.remove(gt[at])}n.remove(C)}let Q=0;function G(){Q=0}function J(){return Q}function dt(C){Q=C}function At(){let C=Q;return C>=s.maxTextures&&jt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),Q+=1,C}function j(C){let T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.mipmapsAutoUpdate),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function ht(C,T){let Y=n.get(C);if(C.isVideoTexture&&Me(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&Y.__version!==C.version){let gt=C.image;if(gt===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{X(Y,C,T);return}}else C.isExternalTexture&&(Y.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+T)}function St(C,T){let Y=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){X(Y,C,T);return}else C.isExternalTexture&&(Y.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+T)}function _t(C,T){let Y=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){X(Y,C,T);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+T)}function Et(C,T){let Y=n.get(C);if(C.version>0&&Y.__version!==C.version){mt(Y,C,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+T)}let O={[jn]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[da]:i.MIRRORED_REPEAT},tt={[Qe]:i.NEAREST,[Mf]:i.NEAREST_MIPMAP_NEAREST,[so]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[Za]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},k={[Tf]:i.NEVER,[hh]:i.ALWAYS,[wf]:i.LESS,[lh]:i.LEQUAL,[Af]:i.EQUAL,[ch]:i.GEQUAL,[Rf]:i.GREATER,[Cf]:i.NOTEQUAL};function it(C,T){if(T.type===Fn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===mn||T.magFilter===Za||T.magFilter===so||T.magFilter===Si||T.minFilter===mn||T.minFilter===Za||T.minFilter===so||T.minFilter===Si)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,O[T.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,O[T.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,O[T.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,tt[T.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,tt[T.minFilter]),T.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,k[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Qe||T.minFilter!==so&&T.minFilter!==Si||T.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function K(C,T){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",P),A(T));let gt=T.source,at=d.get(gt);at===void 0&&(at={},d.set(gt,at));let bt=j(T);if(bt!==C.__cacheKey){at[bt]===void 0&&(at[bt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),at[bt].usedTimes++;let Ct=at[C.__cacheKey];Ct!==void 0&&(at[C.__cacheKey].usedTimes--,Ct.usedTimes===0&&q(T)),C.__cacheKey=bt,C.__webglTexture=at[bt].texture}return Y}function U(C,T,Y){return Math.floor(Math.floor(C/Y)/T)}function V(C,T,Y,gt){let bt=C.updateRanges;if(bt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,Y,gt,T.data);else{bt.sort((F,lt)=>F.start-lt.start);let Ct=0;for(let F=1;F<bt.length;F++){let lt=bt[Ct],rt=bt[F],Pt=lt.start+lt.count,Tt=U(rt.start,T.width,4),Rt=U(lt.start,T.width,4);rt.start<=Pt+1&&Tt===Rt&&U(rt.start+rt.count-1,T.width,4)===Tt?lt.count=Math.max(lt.count,rt.start+rt.count-lt.start):(++Ct,bt[Ct]=rt)}bt.length=Ct+1;let nt=e.getParameter(i.UNPACK_ROW_LENGTH),ot=e.getParameter(i.UNPACK_SKIP_PIXELS),It=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let F=0,lt=bt.length;F<lt;F++){let rt=bt[F],Pt=Math.floor(rt.start/4),Tt=Math.ceil(rt.count/4),Rt=Pt%T.width,Jt=Math.floor(Pt/T.width),ce=Tt,Mt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Jt),e.texSubImage2D(i.TEXTURE_2D,0,Rt,Jt,ce,Mt,Y,gt,T.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,nt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,It)}}function X(C,T,Y){let gt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(gt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(gt=i.TEXTURE_3D);let at=K(C,T),bt=T.source;e.bindTexture(gt,C.__webglTexture,i.TEXTURE0+Y);let Ct=n.get(bt);if(bt.version!==Ct.__version||at===!0){if(e.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let Mt=ge.getPrimaries(ge.workingColorSpace),$t=T.colorSpace===bi?null:ge.getPrimaries(T.colorSpace),le=T.colorSpace===bi||Mt===$t?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let ot=M(T.image,!1,s.maxTextureSize);ot=qt(T,ot);let It=r.convert(T.format,T.colorSpace),F=r.convert(T.type),lt=b(T.internalFormat,It,F,T.normalized,T.colorSpace,T.isVideoTexture);it(gt,T);let rt,Pt=T.mipmaps,Tt=T.isVideoTexture!==!0,Rt=Ct.__version===void 0||at===!0,Jt=bt.dataReady,ce=v(T,ot);if(T.isDepthTexture)lt=g(T.format===Ei,T.type),Rt&&(Tt?e.texStorage2D(i.TEXTURE_2D,1,lt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,lt,ot.width,ot.height,0,It,F,null));else if(T.isDataTexture)if(Pt.length>0){Tt&&Rt&&e.texStorage2D(i.TEXTURE_2D,ce,lt,Pt[0].width,Pt[0].height);for(let Mt=0,$t=Pt.length;Mt<$t;Mt++)rt=Pt[Mt],Tt?Jt&&e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,rt.width,rt.height,It,F,rt.data):e.texImage2D(i.TEXTURE_2D,Mt,lt,rt.width,rt.height,0,It,F,rt.data);T.generateMipmaps=!1}else Tt?(Rt&&e.texStorage2D(i.TEXTURE_2D,ce,lt,ot.width,ot.height),Jt&&V(T,ot,It,F)):e.texImage2D(i.TEXTURE_2D,0,lt,ot.width,ot.height,0,It,F,ot.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Tt&&Rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ce,lt,Pt[0].width,Pt[0].height,ot.depth);for(let Mt=0,$t=Pt.length;Mt<$t;Mt++)if(rt=Pt[Mt],T.format!==qn)if(It!==null)if(Tt){if(Jt)if(T.layerUpdates.size>0){let le=xh(rt.width,rt.height,T.format,T.type);for(let Ft of T.layerUpdates){let Ae=rt.data.subarray(Ft*le/rt.data.BYTES_PER_ELEMENT,(Ft+1)*le/rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,Ft,rt.width,rt.height,1,It,Ae)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,rt.width,rt.height,ot.depth,It,rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Mt,lt,rt.width,rt.height,ot.depth,0,rt.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Tt?Jt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,rt.width,rt.height,ot.depth,It,F,rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Mt,lt,rt.width,rt.height,ot.depth,0,It,F,rt.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Tt&&Rt&&e.texStorage2D(i.TEXTURE_2D,ce,lt,Pt[0].width,Pt[0].height);for(let Mt=0,$t=Pt.length;Mt<$t;Mt++)rt=Pt[Mt],T.format!==qn?It!==null?Tt?Jt&&e.compressedTexSubImage2D(i.TEXTURE_2D,Mt,0,0,rt.width,rt.height,It,rt.data):e.compressedTexImage2D(i.TEXTURE_2D,Mt,lt,rt.width,rt.height,0,rt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Tt?Jt&&e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,rt.width,rt.height,It,F,rt.data):e.texImage2D(i.TEXTURE_2D,Mt,lt,rt.width,rt.height,0,It,F,rt.data)}else if(T.isDataArrayTexture)if(Tt){if(Rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ce,lt,ot.width,ot.height,ot.depth),Jt)if(T.layerUpdates.size>0){let Mt=xh(ot.width,ot.height,T.format,T.type);for(let $t of T.layerUpdates){let le=ot.data.subarray($t*Mt/ot.data.BYTES_PER_ELEMENT,($t+1)*Mt/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$t,ot.width,ot.height,1,It,F,le)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,It,F,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,lt,ot.width,ot.height,ot.depth,0,It,F,ot.data);else if(T.isData3DTexture)Tt?(Rt&&e.texStorage3D(i.TEXTURE_3D,ce,lt,ot.width,ot.height,ot.depth),Jt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,It,F,ot.data)):e.texImage3D(i.TEXTURE_3D,0,lt,ot.width,ot.height,ot.depth,0,It,F,ot.data);else if(T.isFramebufferTexture){if(Rt)if(Tt)e.texStorage2D(i.TEXTURE_2D,ce,lt,ot.width,ot.height);else{let Mt=ot.width,$t=ot.height;for(let le=0;le<ce;le++)e.texImage2D(i.TEXTURE_2D,le,lt,Mt,$t,0,It,F,null),Mt>>=1,$t>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let Mt=i.canvas;if(Mt.hasAttribute("layoutsubtree")||Mt.setAttribute("layoutsubtree","true"),ot.parentNode!==Mt){Mt.appendChild(ot),u.add(T),Mt.onpaint=$t=>{let le=$t.changedElements;for(let Ft of u)le.includes(Ft.image)&&(Ft.needsUpdate=!0)},Mt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ot);else{let le=i.RGBA,Ft=i.RGBA,Ae=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,le,Ft,Ae,ot)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Pt.length>0){if(Tt&&Rt){let Mt=te(Pt[0]);e.texStorage2D(i.TEXTURE_2D,ce,lt,Mt.width,Mt.height)}for(let Mt=0,$t=Pt.length;Mt<$t;Mt++)rt=Pt[Mt],Tt?Jt&&e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,It,F,rt):e.texImage2D(i.TEXTURE_2D,Mt,lt,It,F,rt);T.generateMipmaps=!1}else if(Tt){if(Rt){let Mt=te(ot);e.texStorage2D(i.TEXTURE_2D,ce,lt,Mt.width,Mt.height)}Jt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,It,F,ot)}else e.texImage2D(i.TEXTURE_2D,0,lt,It,F,ot);y(T)&&T.mipmapsAutoUpdate===!0&&_(gt),Ct.__version=bt.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function mt(C,T,Y){if(T.image.length!==6)return;let gt=K(C,T),at=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+Y);let bt=n.get(at);if(at.version!==bt.__version||gt===!0){e.activeTexture(i.TEXTURE0+Y);let Ct=ge.getPrimaries(ge.workingColorSpace),nt=T.colorSpace===bi?null:ge.getPrimaries(T.colorSpace),ot=T.colorSpace===bi||Ct===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let It=T.isCompressedTexture||T.image[0].isCompressedTexture,F=T.image[0]&&T.image[0].isDataTexture,lt=[];for(let Ft=0;Ft<6;Ft++)!It&&!F?lt[Ft]=M(T.image[Ft],!0,s.maxCubemapSize):lt[Ft]=F?T.image[Ft].image:T.image[Ft],lt[Ft]=qt(T,lt[Ft]);let rt=lt[0],Pt=r.convert(T.format,T.colorSpace),Tt=r.convert(T.type),Rt=b(T.internalFormat,Pt,Tt,T.normalized,T.colorSpace),Jt=T.isVideoTexture!==!0,ce=bt.__version===void 0||gt===!0,Mt=at.dataReady,$t=v(T,rt);it(i.TEXTURE_CUBE_MAP,T);let le;if(T.isDepthTexture){if(Rt=g(T.format===Ei,T.type),ce)if(Jt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Rt,rt.width,rt.height);else for(let Ft=0;Ft<6;Ft++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,Rt,rt.width,rt.height,0,Pt,Tt,null)}else if(It){Jt&&ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,$t,Rt,rt.width,rt.height);for(let Ft=0;Ft<6;Ft++){le=lt[Ft].mipmaps;for(let Ae=0;Ae<le.length;Ae++){let $e=le[Ae];T.format!==qn?Pt!==null?Jt?Mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Ae,0,0,$e.width,$e.height,Pt,$e.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Ae,Rt,$e.width,$e.height,0,$e.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Ae,0,0,$e.width,$e.height,Pt,Tt,$e.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Ae,Rt,$e.width,$e.height,0,Pt,Tt,$e.data)}}}else{if(le=T.mipmaps,Jt&&ce){le.length>0&&$t++;let Ft=te(lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,$t,Rt,Ft.width,Ft.height)}for(let Ft=0;Ft<6;Ft++)if(F){Jt?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,0,0,lt[Ft].width,lt[Ft].height,Pt,Tt,lt[Ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,Rt,lt[Ft].width,lt[Ft].height,0,Pt,Tt,lt[Ft].data);for(let Ae=0;Ae<le.length;Ae++){let Ii=le[Ae].image[Ft].image;Jt?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Ae+1,0,0,Ii.width,Ii.height,Pt,Tt,Ii.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Ae+1,Rt,Ii.width,Ii.height,0,Pt,Tt,Ii.data)}}else{Jt?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,0,0,Pt,Tt,lt[Ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,Rt,Pt,Tt,lt[Ft]);for(let Ae=0;Ae<le.length;Ae++){let $e=le[Ae];Jt?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Ae+1,0,0,Pt,Tt,$e.image[Ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Ae+1,Rt,Pt,Tt,$e.image[Ft])}}}y(T)&&T.mipmapsAutoUpdate===!0&&_(i.TEXTURE_CUBE_MAP),bt.__version=at.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function ct(C,T,Y,gt,at,bt){let Ct=r.convert(Y.format,Y.colorSpace),nt=r.convert(Y.type),ot=b(Y.internalFormat,Ct,nt,Y.normalized,Y.colorSpace),It=n.get(T),F=n.get(Y);if(F.__renderTarget=T,!It.__hasExternalTextures){let lt=Math.max(1,T.width>>bt),rt=Math.max(1,T.height>>bt);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,bt,ot,lt,rt,T.depth,0,Ct,nt,null):e.texImage2D(at,bt,ot,lt,rt,0,Ct,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),pt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,gt,at,F.__webglTexture,0,Qt(T)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,gt,at,F.__webglTexture,bt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(C,T,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,C),T.depthBuffer){let gt=T.depthTexture,at=gt&&gt.isDepthTexture?gt.type:null,bt=g(T.stencilBuffer,at),Ct=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt(T),bt,T.width,T.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt(T),bt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,bt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,C)}else{let gt=T.textures;for(let at=0;at<gt.length;at++){let bt=gt[at],Ct=r.convert(bt.format,bt.colorSpace),nt=r.convert(bt.type),ot=b(bt.internalFormat,Ct,nt,bt.normalized,bt.colorSpace);pt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt(T),ot,T.width,T.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt(T),ot,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ot,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(C,T,Y){let gt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let at=n.get(T.depthTexture);at.__renderTarget=T;let bt=gt?T.depthTexture.image[0]:T.depthTexture.image;(!at.__webglTexture||bt.width!==T.width||bt.height!==T.height)&&(bt.width=T.width,bt.height=T.height,T.depthTexture.needsUpdate=!0),gt?Et(T.depthTexture,0):ht(T.depthTexture,0);let Ct=at.__webglTexture,nt=Qt(T),ot=gt?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,It=T.depthTexture.format===Ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===gi)pt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,It,ot,Ct,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,It,ot,Ct,0);else if(T.depthTexture.format===Ei)pt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,It,ot,Ct,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,It,ot,Ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ut(C){let T=n.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){let gt=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),gt){let at=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,gt.removeEventListener("dispose",at)};gt.addEventListener("dispose",at),T.__depthDisposeCallback=at}T.__boundDepthTexture=gt}if(C.depthTexture&&!T.__autoAllocateDepthBuffer)if(Y)for(let gt=0;gt<6;gt++)Dt(T.__webglFramebuffer[gt],C,gt);else C.texture.mipmaps.length>0?Dt(T.__webglFramebuffer[0],C,0):Dt(T.__webglFramebuffer,C,0);else if(Y){T.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[gt]),T.__webglDepthbuffer[gt]===void 0)T.__webglDepthbuffer[gt]=i.createRenderbuffer(),Ht(T.__webglDepthbuffer[gt],C,!1);else{let at=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=T.__webglDepthbuffer[gt];i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,bt)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Ht(T.__webglDepthbuffer,C,!1);else{let at=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,bt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(C,T,Y){let gt=n.get(C);T!==void 0&&ct(gt.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&ut(C)}function yt(C){let T=C.texture,Y=n.get(C),gt=n.get(T);C.addEventListener("dispose",I),A(C);let at=C.textures,bt=C.isWebGLCubeRenderTarget===!0,Ct=at.length>1;if(Ct||(gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture()),gt.__version=T.version,o.memory.textures++),bt){Y.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(T.mipmaps.length>0){Y.__webglFramebuffer[nt]=[];for(let ot=0;ot<T.mipmaps.length;ot++)Y.__webglFramebuffer[nt][ot]=i.createFramebuffer()}else Y.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let nt=0;nt<T.mipmaps.length;nt++)Y.__webglFramebuffer[nt]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let nt=0,ot=at.length;nt<ot;nt++){let It=n.get(at[nt]);It.__webglTexture===void 0&&(It.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&pt(C)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let nt=0;nt<at.length;nt++){let ot=at[nt];Y.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[nt]);let It=r.convert(ot.format,ot.colorSpace),F=r.convert(ot.type),lt=b(ot.internalFormat,It,F,ot.normalized,ot.colorSpace,C.isXRRenderTarget===!0),rt=Qt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,lt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,Y.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Ht(Y.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(bt){e.bindTexture(i.TEXTURE_CUBE_MAP,gt.__webglTexture),it(i.TEXTURE_CUBE_MAP,T);for(let nt=0;nt<6;nt++)if(T.mipmaps.length>0)for(let ot=0;ot<T.mipmaps.length;ot++)ct(Y.__webglFramebuffer[nt][ot],C,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ot);else ct(Y.__webglFramebuffer[nt],C,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);y(T)?_(i.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(Ct){for(let nt=0,ot=at.length;nt<ot;nt++){let It=at[nt],F=n.get(It),lt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(lt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,F.__webglTexture),it(lt,It),ct(Y.__webglFramebuffer,C,It,i.COLOR_ATTACHMENT0+nt,lt,0),y(It)&&_(lt)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(nt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,gt.__webglTexture),it(nt,T),T.mipmaps.length>0)for(let ot=0;ot<T.mipmaps.length;ot++)ct(Y.__webglFramebuffer[ot],C,T,i.COLOR_ATTACHMENT0,nt,ot);else ct(Y.__webglFramebuffer,C,T,i.COLOR_ATTACHMENT0,nt,0);y(T)?_(nt):T.mipmaps.length>0&&i.texParameteri(nt,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&ut(C)}function D(C){let T=C.textures;for(let Y=0,gt=T.length;Y<gt;Y++){let at=T[Y];if(y(at)&&at.mipmapsAutoUpdate===!0){let bt=E(C),Ct=n.get(at).__webglTexture;e.bindTexture(bt,Ct),_(bt),e.unbindTexture()}}}let se=[];function kt(C){if(C.samples>0){if(pt(C)===!1){let T=C.textures,Y=C.width,gt=C.height,at=i.COLOR_BUFFER_BIT,bt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(C),nt=T.length>1;if(nt)for(let It=0;It<T.length;It++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let It=0;It<T.length;It++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[It]);let F=n.get(T[It]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,F,0)}i.blitFramebuffer(0,0,Y,gt,0,0,Y,gt,at,i.NEAREST),l===!0&&(se.length=0,se.push(i.COLOR_ATTACHMENT0+It),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&se.push(bt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let It=0;It<T.length;It++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[It]);let F=n.get(T[It]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,F,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let T=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Qt(C){return Math.min(s.maxSamples,C.samples)}function pt(C){let T=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Me(C){let T=o.render.frame;h.get(C)!==T&&(h.set(C,T),C.update())}function qt(C,T){let Y=C.colorSpace,gt=C.format,at=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Y!==br&&Y!==bi&&(ge.getTransfer(Y)===be?(gt!==qn||at!==En)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",Y)),T}function te(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=At,this.resetTextureUnits=G,this.getTextureUnits=J,this.setTextureUnits=dt,this.setTexture2D=ht,this.setTexture2DArray=St,this.setTexture3D=_t,this.setTextureCube=Et,this.rebindTextures=vt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=pt,this.dispose=H}function ev(i,t){function e(n,s=bi){let r,o=ge.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===$a)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nh)return i.BYTE;if(n===ih)return i.SHORT;if(n===js)return i.UNSIGNED_SHORT;if(n===Ja)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===Xn)return i.HALF_FLOAT;if(n===oh)return i.ALPHA;if(n===ah)return i.RGB;if(n===qn)return i.RGBA;if(n===gi)return i.DEPTH_COMPONENT;if(n===Ei)return i.DEPTH_STENCIL;if(n===ja)return i.RED;if(n===Qa)return i.RED_INTEGER;if(n===Vi)return i.RG;if(n===tl)return i.RG_INTEGER;if(n===el)return i.RGBA_INTEGER;if(n===ro||n===oo||n===ao||n===lo)if(o===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nl||n===il||n===sl||n===rl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ol||n===al||n===ll||n===cl||n===hl||n===co||n===ul)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ol||n===al)return o===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ll)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===cl)return r.COMPRESSED_R11_EAC;if(n===hl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===co)return r.COMPRESSED_RG11_EAC;if(n===ul)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fl||n===dl||n===pl||n===ml||n===gl||n===xl||n===_l||n===vl||n===yl||n===Ml||n===Sl||n===El||n===bl||n===Tl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ml)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_l)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ml)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===El)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wl||n===Al||n===Rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===wl)return o===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cl||n===Il||n===ho||n===Pl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Cl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ho)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var nv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iv=`
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

}`,wh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Hr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ii({vertexShader:nv,fragmentShader:iv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new st(new Re(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ah=class extends Qn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,S=typeof XRWebGLBinding<"u",x=new wh,m={},M=e.getContextAttributes(),y=null,_=null,E=[],b=[],g=new xt,v=null,A=null,w=new pn;w.viewport=new Oe;let P=new pn;P.viewport=new Oe;let I=[w,P],z=new Va,L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ht=E[j];return ht===void 0&&(ht=new zs,E[j]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(j){let ht=E[j];return ht===void 0&&(ht=new zs,E[j]=ht),ht.getGripSpace()},this.getHand=function(j){let ht=E[j];return ht===void 0&&(ht=new zs,E[j]=ht),ht.getHandSpace()};function W(j){let ht=b.indexOf(j.inputSource);if(ht===-1)return;let St=E[ht];St!==void 0&&(St.update(j.inputSource,j.frame,c||o),St.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",ft);for(let j=0;j<E.length;j++){let ht=b[j];ht!==null&&(b[j]=null,E[j].disconnect(ht))}L=null,H=null,x.reset();for(let j in m)delete m[j];if(t.setRenderTarget(y),d=null,f=null,u=null,s=null,_=null,At.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(g.width,g.height,!1),A!==null){let j=A.camera;j.fov=A.fov,j.zoom=A.zoom,j.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&S&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",q),s.addEventListener("inputsourceschange",ft),M.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(g),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,_t=null,Et=null;M.depth&&(Et=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=M.stencil?Ei:gi,_t=M.stencil?hs:Wn);let O={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(O),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Cn(f.textureWidth,f.textureHeight,{format:qn,type:En,depthTexture:new yi(f.textureWidth,f.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let St={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Cn(d.framebufferWidth,d.framebufferHeight,{format:qn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),At.setContext(s),At.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ft(j){for(let ht=0;ht<j.removed.length;ht++){let St=j.removed[ht],_t=b.indexOf(St);_t>=0&&(b[_t]=null,E[_t].disconnect(St))}for(let ht=0;ht<j.added.length;ht++){let St=j.added[ht],_t=b.indexOf(St);if(_t===-1){for(let O=0;O<E.length;O++)if(O>=b.length){b.push(St),_t=O;break}else if(b[O]===null){b[O]=St,_t=O;break}if(_t===-1)break}let Et=E[_t];Et&&Et.connect(St)}}function Q(j,ht){ht===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ht.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ht=j.near,St=j.far;x.texture!==null&&(x.depthNear>0&&(ht=x.depthNear),x.depthFar>0&&(St=x.depthFar)),z.near=P.near=w.near=ht,z.far=P.far=w.far=St,(L!==z.near||H!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,H=z.far),z.layers.mask=j.layers.mask|6,w.layers.mask=z.layers.mask&-5,P.layers.mask=z.layers.mask&-3;let _t=j.parent,Et=z.cameras;Q(z,_t);for(let O=0;O<Et.length;O++)Q(Et[O],_t);z.projectionMatrix.copy(w.projectionMatrix),z.projectionMatrixInverse.copy(w.projectionMatrixInverse),A===null&&j.isPerspectiveCamera&&(A={camera:j,fov:j.fov,zoom:j.zoom}),G(j,z,_t)};function G(j,ht,St){St===null?j.matrix.copy(ht.matrixWorld):(j.matrix.copy(St.matrixWorld),j.matrix.invert(),j.matrix.multiply(ht.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ht.projectionMatrix),j.projectionMatrixInverse.copy(ht.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ma*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(z)},this.getCameraTexture=function(j){return m[j]};let J=null;function dt(j,ht){if(h=ht.getViewerPose(c||o),p=ht,h!==null){let St=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let _t=!1;St.length!==z.cameras.length&&(z.cameras.length=0,_t=!0);for(let k=0;k<St.length;k++){let it=St[k],K=null;if(d!==null)K=d.getViewport(it);else{let V=u.getViewSubImage(f,it);K=V.viewport,k===0&&(t.setRenderTargetTextures(_,V.colorTexture,V.depthStencilTexture),t.setRenderTarget(_))}let U=I[k];U===void 0&&(U=new pn,U.layers.enable(k),U.viewport=new Oe,I[k]=U),U.matrix.fromArray(it.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(it.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(K.x,K.y,K.width,K.height),k===0&&(z.matrix.copy(U.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),_t===!0&&z.cameras.push(U)}let Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){u=n.getBinding();let k=u.getDepthInformation(St[0]);k&&k.isValid&&k.texture&&x.init(k,s.renderState)}if(Et&&Et.includes("camera-access")&&S){t.state.unbindTexture(),u=n.getBinding();for(let k=0;k<St.length;k++){let it=St[k].camera;if(it){let K=m[it];K||(K=new Hr,m[it]=K);let U=u.getCameraImage(it);K.sourceTexture=U}}}}for(let St=0;St<E.length;St++){let _t=b[St],Et=E[St];_t!==null&&Et!==void 0&&Et.update(_t,ht,c||o)}J&&J(j,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),p=null}let At=new dd;At.setAnimationLoop(dt),this.setAnimationLoop=function(j){J=j},this.dispose=function(){}}},sv=new oe,Ed=new ie;Ed.set(-1,0,0,0,1,0,0,0,1);function rv(i,t){function e(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function n(x,m){m.color.getRGB(x.fogColor.value,ph(i)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,M,y,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(x,m):m.isMeshLambertMaterial?(r(x,m),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(x,m),u(x,m)):m.isMeshPhongMaterial?(r(x,m),h(x,m),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(x,m),f(x,m),m.isMeshPhysicalMaterial&&d(x,m,_)):m.isMeshMatcapMaterial?(r(x,m),p(x,m)):m.isMeshDepthMaterial?r(x,m):m.isMeshDistanceMaterial?(r(x,m),S(x,m)):m.isMeshNormalMaterial?r(x,m):m.isLineBasicMaterial?(o(x,m),m.isLineDashedMaterial&&a(x,m)):m.isPointsMaterial?l(x,m,M,y):m.isSpriteMaterial?c(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,e(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===xn&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,e(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===xn&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,e(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,e(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let M=t.get(m),y=M.envMap,_=M.envMapRotation;y&&(x.envMap.value=y,x.envMapRotation.value.setFromMatrix4(sv.makeRotationFromEuler(_)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Ed),x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,x.aoMapTransform))}function o(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform))}function a(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function l(x,m,M,y){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*M,x.scale.value=y*.5,m.map&&(x.map.value=m.map,e(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function c(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function u(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function f(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function d(x,m,M){x.ior.value=m.ior,m.diffuseRoughness>0&&(x.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===xn&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.retroreflectivity>0&&(x.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=M.texture,x.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,x.specularIntensityMapTransform))}function p(x,m){m.matcap&&(x.matcap.value=m.matcap)}function S(x,m){let M=t.get(m).light;x.referencePosition.value.setFromMatrixPosition(M.matrixWorld),x.nearDistance.value=M.shadow.camera.near,x.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ov(i,t,e,n){let s={},r={};function o(M,y){let _=y.program;n.uniformBlockBinding(M,_,s[M.id])}function a(M,y){let _=s[M.id];_===void 0&&(p(M),_=l(M),s[M.id]=_,M.addEventListener("dispose",x));let E=y.program;n.updateUBOMapping(M,E);let b=t.render.frame;r[M.id]!==b&&(c(M),r[M.id]=b)}function l(M){let y=i.createBuffer(),_=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,_,E),i.bindBuffer(i.UNIFORM_BUFFER,null),y}function c(M){let y=s[M.id],_=M.uniforms,E=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let b=0,g=_.length;b<g;b++){let v=_[b];if(Array.isArray(v))for(let A=0,w=v.length;A<w;A++)h(v[A],b,A,E);else h(v,b,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,y,_,E){if(f(M,y,_,E)===!0){let b=M.__offset,g=M.value;if(Array.isArray(g)){let v=0;for(let A=0;A<g.length;A++){let w=g[A],P=S(w,!0);u(w,M.__data,v),v+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else u(g,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,M.__data)}}function u(M,y,_){typeof M=="number"||typeof M=="boolean"?y[_]=M:M.isMatrix3?(y[_]=M.elements[0],y[_+1]=M.elements[1],y[_+2]=M.elements[2],y[_+3]=0,y[_+4]=M.elements[3],y[_+5]=M.elements[4],y[_+6]=M.elements[5],y[_+7]=0,y[_+8]=M.elements[6],y[_+9]=M.elements[7],y[_+10]=M.elements[8],y[_+11]=0):ArrayBuffer.isView(M)?y.set(M.subarray(0,y.length-_),_):M.toArray(y,_)}function f(M,y,_,E){let b=M.value,g=y+"_"+_;if(Array.isArray(b)){E[g]===void 0&&(E[g]=[]);let v=E[g],A=!1;for(let w=0;w<b.length;w++)d(b[w],v,w)===!0&&(A=!0);return A}return d(b,E,g)}function d(M,y,_){if(y[_]===void 0)return typeof M=="number"||typeof M=="boolean"?y[_]=M:ArrayBuffer.isView(M)?y[_]=M.slice():y[_]=M.clone(),!0;{let E=y[_];if(typeof M=="number"||typeof M=="boolean"){if(E!==M)return y[_]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(E.equals(M)===!1)return E.copy(M),!0}}return!1}function p(M){let y=M.uniforms,_=0,E=16;for(let g=0,v=y.length;g<v;g++){let A=Array.isArray(y[g])?y[g]:[y[g]];for(let w=0,P=A.length;w<P;w++){let I=A[w],z=Array.isArray(I.value)?I.value:[I.value],L=Array.isArray(y[g])||Array.isArray(I.value),H=_;for(let q=0,ft=z.length;q<ft;q++){let Q=z[q],G=S(Q,L),J=_%E,dt=J%G.boundary,At=J+dt;_+=dt,At!==0&&E-At<G.storage&&(_+=E-At),q===0&&(H=_),_+=G.storage}let W=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new W((_-H)/Float32Array.BYTES_PER_ELEMENT),I.__offset=H}}let b=_%E;return b>0&&(_+=E-b),M.__size=_,M.__cache={},this}function S(M,y){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=16,_.storage=48):M.isMatrix4?(_.boundary=16,_.storage=64):M.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(_.boundary=16,_.storage=M.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",M),y===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function x(M){let y=M.target;y.removeEventListener("dispose",x),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:m}}var av=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ri=null;function lv(){return ri===null&&(ri=new Fr(av,16,16,Vi,Xn),ri.name="DFG_LUT",ri.minFilter=mn,ri.magFilter=mn,ri.wrapS=$n,ri.wrapT=$n,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}var Ol=class{constructor(t={}){let{canvas:e=If(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=En}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let S=d,x=new Set([el,tl,Qa]),m=new Set([En,Wn,js,hs,$a,Ka]),M=new Uint32Array(4),y=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},E=null,b=null,g=[],v=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,P=!1,I=null,z=null,L=null,H=null;this._outputColorSpace=Fe;let W=0,q=0,ft=null,Q=-1,G=null,J=new Oe,dt=new Oe,At=null,j=new ae(0),ht=0,St=e.width,_t=e.height,Et=1,O=null,tt=null,k=new Oe(0,0,St,_t),it=new Oe(0,0,St,_t),K=!1,U=new Bi,V=new va,X=!1,mt=!1,ct=new oe,Ht=new N,Dt=new Oe,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},vt=!1;function yt(){return ft===null?Et:1}let D=n;function se(R,B){return e.getContext(R,B)}let kt,Qt,pt,Me,qt,te,C,T,Y,gt,at,bt,Ct,nt,ot,It,F,lt,rt,Pt,Tt,Rt,Jt;try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",$t,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",Ft,!1),D===null){let B="webgl2";if(D=se(B,R),D===null)throw se(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ce()}catch(R){throw e.removeEventListener("webglcontextlost",$t,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",Ft,!1),ee("WebGLRenderer: "+R.message),R}function ce(){kt=new vx(D),kt.init(),Tt=new ev(D,kt),Qt=new lx(D,kt,t,Tt),pt=new Q_(D,kt),Qt.reversedDepthBuffer&&f&&pt.buffers.depth.setReversed(!0),z=D.createFramebuffer(),L=D.createFramebuffer(),H=D.createFramebuffer(),Me=new Sx(D),qt=new z_,te=new tv(D,kt,pt,qt,Qt,Tt,Me),C=new _x(w),T=new bm(D),Rt=new ox(D,T),Y=new yx(D,T,Me,Rt),gt=new bx(D,Y,T,Rt,Me),lt=new Ex(D,Qt,te),ot=new cx(qt),at=new B_(w,C,kt,Qt,Rt,ot),bt=new rv(w,qt),Ct=new G_,nt=new Y_(kt),F=new rx(w,C,pt,gt,p,l),It=new j_(w,gt,Qt),Jt=new ov(D,Me,Qt,pt),rt=new ax(D,kt,Me),Pt=new Mx(D,kt,Me),Me.programs=at.programs,w.capabilities=Qt,w.extensions=kt,w.properties=qt,w.renderLists=Ct,w.shadowMap=It,w.state=pt,w.info=Me}S!==En&&(A=new wx(S,e.width,e.height,a,s,r));let Mt=new Ah(w,D);this.xr=Mt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let R=kt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=kt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Et},this.setPixelRatio=function(R){R!==void 0&&(Et=R,this.setSize(St,_t,!1))},this.getSize=function(R){return R.set(St,_t)},this.setSize=function(R,B,et=!0){if(Mt.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}St=R,_t=B,e.width=Math.floor(R*Et),e.height=Math.floor(B*Et),et===!0&&(e.style.width=R+"px",e.style.height=B+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,R,B)},this.getDrawingBufferSize=function(R){return R.set(St*Et,_t*Et).floor()},this.setDrawingBufferSize=function(R,B,et){St=R,_t=B,Et=et,e.width=Math.floor(R*et),e.height=Math.floor(B*et),this.setViewport(0,0,R,B)},this.setEffects=function(R){if(S===En){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let B=0;B<R.length;B++)if(R[B].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(J)},this.getViewport=function(R){return R.copy(k)},this.setViewport=function(R,B,et,Z){R.isVector4?k.set(R.x,R.y,R.z,R.w):k.set(R,B,et,Z),pt.viewport(J.copy(k).multiplyScalar(yt()).round())},this.getScissor=function(R){return R.copy(it)},this.setScissor=function(R,B,et,Z){R.isVector4?it.set(R.x,R.y,R.z,R.w):it.set(R,B,et,Z),pt.scissor(dt.copy(it).multiplyScalar(yt()).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(R){pt.setScissorTest(K=R)},this.setOpaqueSort=function(R){O=R},this.setTransparentSort=function(R){tt=R},this.getClearColor=function(R){return R.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(R=!0,B=!0,et=!0){let Z=0;if(R){let $=!1;if(ft!==null){let Nt=ft.texture.format;$=x.has(Nt)}if($){let Nt=ft.texture.type,Vt=m.has(Nt),Lt=F.getClearColor(),Bt=F.getClearAlpha(),Yt=Lt.r,re=Lt.g,pe=Lt.b;Vt?(M[0]=Yt,M[1]=re,M[2]=pe,M[3]=Bt,D.clearBufferuiv(D.COLOR,0,M)):(y[0]=Yt,y[1]=re,y[2]=pe,y[3]=Bt,D.clearBufferiv(D.COLOR,0,y))}else Z|=D.COLOR_BUFFER_BIT}B&&(Z|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&(Z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&D.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),I=R},this.dispose=function(){e.removeEventListener("webglcontextlost",$t,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",Ft,!1),F.dispose(),Ct.dispose(),nt.dispose(),te.dispose(),qt.dispose(),C.dispose(),gt.dispose(),Y.dispose(),Rt.dispose(),Jt.dispose(),at.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",su),Mt.removeEventListener("sessionend",ru),Ki.stop()};function $t(R){R.preventDefault(),Ar("WebGLRenderer: Context Lost."),P=!0}function le(){Ar("WebGLRenderer: Context Restored."),P=!1;let R=Me.autoReset,B=It.enabled,et=It.autoUpdate,Z=It.needsUpdate,$=It.type;ce(),Me.autoReset=R,It.enabled=B,It.autoUpdate=et,It.needsUpdate=Z,It.type=$}function Ft(R){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ae(R){let B=R.target;B.removeEventListener("dispose",Ae),$e(B)}function $e(R){Ii(R),qt.remove(R)}function Ii(R){let B=qt.get(R).programs;B!==void 0&&(B.forEach(function(et){at.releaseProgram(et)}),R.isShaderMaterial&&at.releaseShaderCache(R))}this.renderBufferDirect=function(R,B,et,Z,$,Nt){B===null&&(B=ut);let Vt=$.isMesh&&$.matrixWorld.determinantAffine()<0,Lt=ap(R,B,et,Z,$);pt.setMaterial(Z,Vt);let Bt=et.index,Yt=1;if(Z.wireframe===!0){if(Bt=Y.getWireframeAttribute(et),Bt===void 0)return;Yt=2}let re=et.drawRange,pe=et.attributes.position,Wt=re.start*Yt,me=(re.start+re.count)*Yt;Nt!==null&&(Wt=Math.max(Wt,Nt.start*Yt),me=Math.min(me,(Nt.start+Nt.count)*Yt)),Bt!==null?(Wt=Math.max(Wt,0),me=Math.min(me,Bt.count)):pe!=null&&(Wt=Math.max(Wt,0),me=Math.min(me,pe.count));let Ge=me-Wt;if(Ge<0||Ge===1/0)return;Rt.setup($,Z,Lt,et,Bt);let Pe,Ie=rt;if(Bt!==null&&(Pe=T.get(Bt),Ie=Pt,Ie.setIndex(Pe)),$.isMesh)Z.wireframe===!0?(pt.setLineWidth(Z.wireframeLinewidth*yt()),Ie.setMode(D.LINES)):Ie.setMode(D.TRIANGLES);else if($.isLine){let on=Z.linewidth;on===void 0&&(on=1),pt.setLineWidth(on*yt()),$.isLineSegments?Ie.setMode(D.LINES):$.isLineLoop?Ie.setMode(D.LINE_LOOP):Ie.setMode(D.LINE_STRIP)}else $.isPoints?Ie.setMode(D.POINTS):$.isSprite&&Ie.setMode(D.TRIANGLES);if($.isBatchedMesh)if(kt.get("WEBGL_multi_draw"))Ie.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let on=$._multiDrawStarts,Xt=$._multiDrawCounts,fn=$._multiDrawCount,Se=Bt?T.get(Bt).bytesPerElement:1,ji=qt.get(Z).currentProgram.getUniforms();for(let an=0;an<fn;an++)ji.setValue(D,"_gl_DrawID",an),Ie.render(on[an]/Se,Xt[an])}else if($.isInstancedMesh)Ie.renderInstances(Wt,Ge,$.count);else if(et.isInstancedBufferGeometry){let on=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Xt=Math.min(et.instanceCount,on);Ie.renderInstances(Wt,Ge,Xt)}else Ie.render(Wt,Ge)};function iu(R,B,et,Z){I!==null&&R.isNodeMaterial&&I.setObject(Z,R),X===!0&&ot.setState(R,et,!1),R.transparent===!0&&R.side===ye&&R.forceSinglePass===!1?(R.side=xn,R.needsUpdate=!0,lr(R,B,Z),R.side=ki,R.needsUpdate=!0,lr(R,B,Z),R.side=ye):lr(R,B,Z)}this.compile=function(R,B,et=null){et===null&&(et=R),I!==null&&I.renderStart(R,B,et),b=nt.get(et),b.init(B),v.push(b),et.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),R!==et&&R.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),b.setupLights(),I!==null&&I.updateLights(b.state.lightsArray),mt=this.localClippingEnabled,X=ot.init(this.clippingPlanes,mt),X===!0&&ot.setGlobalState(this.clippingPlanes,B),I!==null&&It.render(b.state.shadowsArray,et,B);let Z=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Nt=$.material;if(Nt)if(Array.isArray(Nt))for(let Vt=0;Vt<Nt.length;Vt++){let Lt=Nt[Vt];iu(Lt,et,B,$),Z.add(Lt)}else iu(Nt,et,B,$),Z.add(Nt)}),b=v.pop(),I!==null&&I.renderEnd(),Z},this.compileAsync=function(R,B,et=null){let Z=this.compile(R,B,et);return new Promise($=>{function Nt(){if(Z.forEach(function(Vt){let Bt=qt.get(Vt).currentProgram;(Bt===void 0||Bt.isReady())&&Z.delete(Vt)}),Z.size===0){$(R);return}setTimeout(Nt,10)}kt.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let ic=null;function rp(R){ic&&ic(R)}function su(){Ki.stop()}function ru(){Ki.start()}let Ki=new dd;Ki.setAnimationLoop(rp),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(R){ic=R,Mt.setAnimationLoop(R),R===null?Ki.stop():Ki.start()},Mt.addEventListener("sessionstart",su),Mt.addEventListener("sessionend",ru),this.render=function(R,B){if(B!==void 0&&B.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(R,B);let et=Mt.enabled===!0&&Mt.isPresenting===!0,Z=A!==null&&(ft===null||et)&&A.begin(w,ft);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(B),B=Mt.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,B,ft),b=nt.get(R,v.length),b.init(B),b.state.textureUnits=te.getTextureUnits(),v.push(b),ct.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?V.setFromArrayCamera(B):U.setFromProjectionMatrix(ct,Un,B.reversedDepth),mt=this.localClippingEnabled,X=ot.init(this.clippingPlanes,mt),E=Ct.get(R,g.length),E.init(),g.push(E),this.info.render.frame++,Mt.enabled===!0&&Mt.isPresenting===!0){let Vt=w.xr.getDepthSensingMesh();Vt!==null&&sc(Vt,B,-1/0,w.sortObjects)}sc(R,B,0,w.sortObjects),E.finish(),I!==null&&I.updateLights(b.state.lightsArray),w.sortObjects===!0&&E.sort(O,tt),vt=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,vt&&F.addToRenderList(E,R),this.info.autoReset===!0&&this.info.reset(),X===!0&&ot.beginShadows();let $=b.state.shadowsArray;if(It.render($,R,B),X===!0&&ot.endShadows(),(Z&&A.hasRenderPass())===!1){let Vt=E.opaque,Lt=E.transmissive;if(b.setupLights(),B.isArrayCamera){let Bt=B.cameras;if(Lt.length>0)for(let Yt=0,re=Bt.length;Yt<re;Yt++){let pe=Bt[Yt];au(Vt,Lt,R,pe)}vt&&F.render(R);for(let Yt=0,re=Bt.length;Yt<re;Yt++){let pe=Bt[Yt];ou(E,R,pe,pe.viewport)}}else Lt.length>0&&au(Vt,Lt,R,B),vt&&F.render(R),ou(E,R,B)}ft!==null&&q===0&&(te.updateMultisampleRenderTarget(ft),te.updateRenderTargetMipmap(ft)),Z&&A.end(w),R.isScene===!0&&R.onAfterRender(w,R,B),Rt.resetDefaultState(),Q=-1,G=null,v.pop(),v.length>0?(b=v[v.length-1],te.setTextureUnits(b.state.textureUnits),X===!0&&ot.setGlobalState(w.clippingPlanes,b.state.camera)):b=null,g.pop(),g.length>0?E=g[g.length-1]:E=null,I!==null&&I.renderEnd()};function sc(R,B,et,Z){if(R.visible===!1)return;if(R.layers.test(B.layers)){if(R.isGroup)et=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(B);else if(R.isLight)b.pushLight(R),R.castShadow&&b.pushShadow(R);else if(R.isSprite){let Vt=B.isArrayCamera?V:U;if(!R.frustumCulled||R.intersectsFrustum(Vt)){Z&&Dt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ct);let Lt=gt.update(R),Bt=R.material;Bt.visible&&E.push(R,Lt,Bt,et,Dt.z,null,B)}}else if(R.isMesh||R.isLine||R.isPoints){let Vt=B.isArrayCamera?V:U;if(!R.frustumCulled||R.intersectsFrustum(Vt)){let Lt=gt.update(R),Bt=R.material;if(Z&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Dt.copy(R.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Dt.copy(Lt.boundingSphere.center)),Dt.applyMatrix4(R.matrixWorld).applyMatrix4(ct)),Array.isArray(Bt)){let Yt=Lt.groups;for(let re=0,pe=Yt.length;re<pe;re++){let Wt=Yt[re],me=Bt[Wt.materialIndex];me&&me.visible&&E.push(R,Lt,me,et,Dt.z,Wt,B)}}else Bt.visible&&E.push(R,Lt,Bt,et,Dt.z,null,B)}}}let Nt=R.children;for(let Vt=0,Lt=Nt.length;Vt<Lt;Vt++)sc(Nt[Vt],B,et,Z)}function ou(R,B,et,Z){let{opaque:$,transmissive:Nt,transparent:Vt}=R;b.setupLightsView(et),X===!0&&ot.setGlobalState(w.clippingPlanes,et),Z&&pt.viewport(J.copy(Z)),$.length>0&&Ro($,B,et),Nt.length>0&&Ro(Nt,B,et),Vt.length>0&&Ro(Vt,B,et),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function au(R,B,et,Z){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Z.id]===void 0){let Wt=kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Z.id]=new Cn(1,1,{generateMipmaps:!0,type:Wt?Xn:En,minFilter:Si,samples:Math.max(4,Qt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ge.workingColorSpace})}let Nt=b.state.transmissionRenderTarget[Z.id],Vt=Z.viewport||J;Nt.setSize(Vt.z*w.transmissionResolutionScale,Vt.w*w.transmissionResolutionScale);let Lt=w.getRenderTarget(),Bt=w.getActiveCubeFace(),Yt=w.getActiveMipmapLevel();w.setRenderTarget(Nt),w.getClearColor(j),ht=w.getClearAlpha(),ht<1&&w.setClearColor(16777215,.5),w.clear(),vt&&F.render(et);let re=w.toneMapping;w.toneMapping=si;let pe=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),b.setupLightsView(Z),X===!0&&ot.setGlobalState(w.clippingPlanes,Z),Ro(R,et,Z),te.updateMultisampleRenderTarget(Nt),te.updateRenderTargetMipmap(Nt),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let me=0,Ge=B.length;me<Ge;me++){let Pe=B[me],{object:Ie,geometry:on,material:Xt,group:fn}=Pe;if(Xt.side===ye&&Ie.layers.test(Z.layers)){let Se=Xt.side;Xt.side=xn,Xt.needsUpdate=!0,lu(Ie,et,Z,on,Xt,fn),Xt.side=Se,Xt.needsUpdate=!0,Wt=!0}}Wt===!0&&(te.updateMultisampleRenderTarget(Nt),te.updateRenderTargetMipmap(Nt))}w.setRenderTarget(Lt,Bt,Yt),w.setClearColor(j,ht),pe!==void 0&&(Z.viewport=pe),w.toneMapping=re}function Ro(R,B,et){let Z=B.isScene===!0?B.overrideMaterial:null;for(let $=0,Nt=R.length;$<Nt;$++){let Vt=R[$],{object:Lt,geometry:Bt,group:Yt}=Vt,re=Vt.material;re.allowOverride===!0&&Z!==null&&(re=Z),Lt.layers.test(et.layers)&&lu(Lt,B,et,Bt,re,Yt)}}function lu(R,B,et,Z,$,Nt){I!==null&&$.isNodeMaterial&&I.setObject(R,$),R.onBeforeRender(w,B,et,Z,$,Nt),R.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(w,B,et,Z,R,Nt),$.transparent===!0&&$.side===ye&&$.forceSinglePass===!1?($.side=xn,$.needsUpdate=!0,w.renderBufferDirect(et,B,Z,$,R,Nt),$.side=ki,$.needsUpdate=!0,w.renderBufferDirect(et,B,Z,$,R,Nt),$.side=ye):w.renderBufferDirect(et,B,Z,$,R,Nt),R.onAfterRender(w,B,et,Z,$,Nt)}function cu(R){let B=0;for(let et of R)et.texture!==null&&B++;return B}function lr(R,B,et){B.isScene!==!0&&(B=ut);let Z=qt.get(R),$=b.state.lights,Nt=b.state.shadowsArray,Vt=$.state.version,Lt=at.getParameters(R,$.state,Nt,B,et,b.state.lightProbeGridArray),Bt=at.getProgramCacheKey(Lt),Yt=Z.programs;Z.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?B.environment:null,Z.fog=B.fog;let re=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;Z.envMap=C.get(R.envMap||Z.environment,re),Z.envMapRotation=Z.environment!==null&&R.envMap===null?B.environmentRotation:R.envMapRotation,Yt===void 0&&(R.addEventListener("dispose",Ae),Yt=new Map,Z.programs=Yt,Z.programVariants=new Map);let pe=Yt.get(Bt);if(pe!==void 0){if(Z.currentProgram===pe&&Z.lightsStateVersion===Vt)return uu(R,Lt),pe}else Lt.uniforms=at.getUniforms(R),I!==null&&R.isNodeMaterial&&I.build(R,et,Lt),R.onBeforeCompile(Lt,w),pe=at.acquireProgram(Lt,Bt),Yt.set(Bt,pe),Z.uniforms=Lt.uniforms;let Wt=Z.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Wt.clippingPlanes=ot.uniform),uu(R,Lt),Z.needsLights=cp(R),Z.lightsStateVersion=Vt,Z.needsLights&&(Wt.ambientLightColor.value=$.state.ambient,Wt.lightProbe.value=$.state.probe,Wt.sunLights.value=$.state.sun,Wt.sunLightShadows.value=$.state.sunShadow,Wt.directionalLights.value=$.state.directional,Wt.directionalLightShadows.value=$.state.directionalShadow,Wt.spotLights.value=$.state.spot,Wt.spotLightShadows.value=$.state.spotShadow,Wt.rectAreaLights.value=$.state.rectArea,Wt.ltc_1.value=$.state.rectAreaLTC1,Wt.ltc_2.value=$.state.rectAreaLTC2,Wt.pointLights.value=$.state.point,Wt.pointLightShadows.value=$.state.pointShadow,Wt.hemisphereLights.value=$.state.hemi,Wt.sunShadowMatrix.value=$.state.sunShadowMatrix,Wt.sunShadowCascade.value=$.state.sunShadowCascade,Wt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Wt.spotLightMatrix.value=$.state.spotLightMatrix,Wt.spotLightMap.value=$.state.spotLightMap,Wt.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.numLightProbeGrids=cu(b.state.lightProbeGridArray),Z.currentProgram=pe,Z.uniformsList=null,pe}function op(R,B,et,Z,$){let Nt=qt.get(R),Vt=Nt.currentProgram.id+","+Z+","+$,Lt=Nt.programVariants.get(Vt);return Lt===void 0?(Lt=lr(R,B,et),Nt.programVariants.set(Vt,Lt)):(Nt.currentProgram=Lt,Nt.uniformsList=null,Nt.outputColorSpace=Z,Nt.toneMapping=$),Lt}function hu(R){if(R.uniformsList===null){let B=R.currentProgram.getUniforms();R.uniformsList=Qs.seqWithValue(B.seq,R.uniforms)}return R.uniformsList}function uu(R,B){let et=qt.get(R);et.outputColorSpace=B.outputColorSpace,et.batching=B.batching,et.batchingColor=B.batchingColor,et.instancing=B.instancing,et.instancingColor=B.instancingColor,et.instancingMorph=B.instancingMorph,et.skinning=B.skinning,et.morphTargets=B.morphTargets,et.morphNormals=B.morphNormals,et.morphColors=B.morphColors,et.morphTargetsCount=B.morphTargetsCount,et.numClippingPlanes=B.numClippingPlanes,et.numIntersection=B.numClipIntersection,et.vertexAlphas=B.vertexAlphas,et.vertexTangents=B.vertexTangents,et.toneMapping=B.toneMapping}function ap(R,B,et,Z,$){B.isScene!==!0&&(B=ut),te.resetTextureUnits();let Nt=B.fog,Vt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?B.environment:null,Lt=ft===null?w.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:ge.workingColorSpace,Bt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Yt=C.get(Z.envMap||Vt,Bt),re=Z.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pe=!!et.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Wt=!!et.morphAttributes.position,me=!!et.morphAttributes.normal,Ge=!!et.morphAttributes.color,Pe=si;Z.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Pe=w.toneMapping);let Ie=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,on=Ie!==void 0?Ie.length:0,Xt=qt.get(Z),fn=b.state.lights;if(X===!0&&(mt===!0||R!==G)){let ze=R===G&&Z.id===Q;ot.setState(Z,R,ze)}let Se=!1,ji=!1;Z.version===Xt.__version?Xt.needsLights&&Xt.lightsStateVersion!==fn.state.version||$.isBatchedMesh&&Xt.batching===!1||!$.isBatchedMesh&&Xt.batching===!0||$.isBatchedMesh&&Xt.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Xt.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Xt.instancing===!1||!$.isInstancedMesh&&Xt.instancing===!0||$.isSkinnedMesh&&Xt.skinning===!1||!$.isSkinnedMesh&&Xt.skinning===!0||$.isInstancedMesh&&Xt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Xt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Xt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Xt.instancingMorph===!1&&$.morphTexture!==null||Xt.envMap!==Yt||Z.fog===!0&&Xt.fog!==Nt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==ot.numPlanes||Xt.numIntersection!==ot.numIntersection)||Xt.vertexAlphas!==re||Xt.vertexTangents!==pe||Xt.morphTargets!==Wt||Xt.morphNormals!==me||Xt.morphColors!==Ge||Xt.morphTargetsCount!==on||Xt.numLightProbeGrids!==cu(b.state.lightProbeGridArray)?Se=!0:(Xt.outputColorSpace!==Lt||Xt.toneMapping!==Pe)&&(ji=!0):(Se=!0,Xt.__version=Z.version);let an=Xt.currentProgram;(Se===!0||ji===!0)&&(an=ji===!0?op(Z,B,$,Lt,Pe):lr(Z,B,$),I&&Z.isNodeMaterial&&I.onUpdateProgram(Z,an,Xt));let Co=!1,Pi=!1,Qi=!1,ve=an.getUniforms(),nn=Xt.uniforms;if(pt.useProgram(an.program)&&(Co=!0,Pi=!0,Qi=!0),Z.id!==Q&&(Q=Z.id,Pi=!0),Co||G!==R){pt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ve.setValue(D,"projectionMatrix",R.projectionMatrix),ve.setValue(D,"viewMatrix",R.matrixWorldInverse);let Ke=ve.map.cameraPosition;Ke!==void 0&&Ke.setValue(D,Ht.setFromMatrixPosition(R.matrixWorld)),Qt.logarithmicDepthBuffer&&ve.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ve.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),G!==R&&(G=R,Pi=!0,Qi=!0)}if(Xt.needsLights&&(fn.state.sunShadowMap.length>0&&ve.setValue(D,"sunShadowMap",fn.state.sunShadowMap,te),fn.state.directionalShadowMap.length>0&&ve.setValue(D,"directionalShadowMap",fn.state.directionalShadowMap,te),fn.state.spotShadowMap.length>0&&ve.setValue(D,"spotShadowMap",fn.state.spotShadowMap,te),fn.state.pointShadowMap.length>0&&ve.setValue(D,"pointShadowMap",fn.state.pointShadowMap,te)),$.isSkinnedMesh){ve.setOptional(D,$,"bindMatrix"),ve.setOptional(D,$,"bindMatrixInverse");let ze=$.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),ve.setValue(D,"boneTexture",ze.boneTexture,te))}$.isBatchedMesh&&(ve.setOptional(D,$,"batchingTexture"),ve.setValue(D,"batchingTexture",$._matricesTexture,te),ve.setOptional(D,$,"batchingIdTexture"),ve.setValue(D,"batchingIdTexture",$._indirectTexture,te),ve.setOptional(D,$,"batchingColorTexture"),$._colorsTexture!==null&&ve.setValue(D,"batchingColorTexture",$._colorsTexture,te));let zn=et.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&lt.update($,et,an),(Pi||Xt.receiveShadow!==$.receiveShadow)&&(Xt.receiveShadow=$.receiveShadow,ve.setValue(D,"receiveShadow",$.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&B.environment!==null&&(nn.envMapIntensity.value=B.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=lv()),Pi){if(ve.setValue(D,"toneMappingExposure",w.toneMappingExposure),Xt.needsLights&&lp(nn,Qi),Nt&&Z.fog===!0&&bt.refreshFogUniforms(nn,Nt),bt.refreshMaterialUniforms(nn,Z,Et,_t,b.state.transmissionRenderTarget[R.id]),Xt.needsLights&&Xt.numLightProbeGrids>0){let ze=_,Ke=0;for(let li of b.state.lightProbeGridArray)li.texture!==null&&(ze.textures[Ke]=li.texture,ze.min[Ke]=li.boundingBox.min,ze.max[Ke]=li.boundingBox.max,ze.resolution[Ke]=li.resolution,Ke++);for(let li in ze)ze[li].length=Ke;nn.probesSH.value=ze.textures,nn.probesMin.value=ze.min,nn.probesMax.value=ze.max,nn.probesResolution.value=ze.resolution}Qs.upload(D,hu(Xt),nn,te)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Qs.upload(D,hu(Xt),nn,te),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ve.setValue(D,"center",$.center),ve.setValue(D,"modelViewMatrix",$.modelViewMatrix),ve.setValue(D,"normalMatrix",$.normalMatrix),ve.setValue(D,"modelMatrix",$.matrixWorld),Z.uniformsGroups!==void 0){let ze=Z.uniformsGroups;for(let Ke=0,li=ze.length;Ke<li;Ke++){let du=ze[Ke];Jt.update(du,an),Jt.bind(du,an)}}return an}function lp(R,B){R.ambientLightColor.needsUpdate=B,R.lightProbe.needsUpdate=B,R.sunLights.needsUpdate=B,R.sunLightShadows.needsUpdate=B,R.directionalLights.needsUpdate=B,R.directionalLightShadows.needsUpdate=B,R.pointLights.needsUpdate=B,R.pointLightShadows.needsUpdate=B,R.spotLights.needsUpdate=B,R.spotLightShadows.needsUpdate=B,R.rectAreaLights.needsUpdate=B,R.hemisphereLights.needsUpdate=B}function cp(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ft},this.setRenderTargetTextures=function(R,B,et){let Z=qt.get(R);Z.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),qt.get(R.texture).__webglTexture=B,qt.get(R.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:et,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,B){let et=qt.get(R);et.__webglFramebuffer=B,et.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(R,B=0,et=0){ft=R,W=B,q=et;let Z=null,$=!1,Nt=!1;if(R){let Lt=qt.get(R);if(Lt.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(D.FRAMEBUFFER,Lt.__webglFramebuffer),J.copy(R.viewport),dt.copy(R.scissor),At=R.scissorTest,pt.viewport(J),pt.scissor(dt),pt.setScissorTest(At),Q=-1;return}else if(Lt.__webglFramebuffer===void 0)te.setupRenderTarget(R);else if(Lt.__hasExternalTextures)te.rebindTextures(R,qt.get(R.texture).__webglTexture,qt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let re=R.depthTexture;if(Lt.__boundDepthTexture!==re){if(re!==null&&qt.has(re)&&(R.width!==re.image.width||R.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(R)}}let Bt=R.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Nt=!0);let Yt=qt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Yt[B])?Z=Yt[B][et]:Z=Yt[B],$=!0):R.samples>0&&te.useMultisampledRTT(R)===!1?Z=qt.get(R).__webglMultisampledFramebuffer:Array.isArray(Yt)?Z=Yt[et]:Z=Yt,J.copy(R.viewport),dt.copy(R.scissor),At=R.scissorTest}else J.copy(k).multiplyScalar(Et).floor(),dt.copy(it).multiplyScalar(Et).floor(),At=K;if(et!==0&&(Z=z),pt.bindFramebuffer(D.FRAMEBUFFER,Z)&&pt.drawBuffers(R,Z),pt.viewport(J),pt.scissor(dt),pt.setScissorTest(At),$){let Lt=qt.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Lt.__webglTexture,et)}else if(Nt){let Lt=B;for(let Bt=0;Bt<R.textures.length;Bt++){let Yt=qt.get(R.textures[Bt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Bt,Yt.__webglTexture,et,Lt)}}else if(R!==null&&et!==0){let Lt=qt.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Lt.__webglTexture,et)}Q=-1};function fu(R){let B=qt.get(R);return(B.__readFormat!==R.format||B.__readType!==R.type)&&(B.__readFormat=R.format,B.__readType=R.type,B.__formatReadable=Qt.textureFormatReadable(R.format),B.__typeReadable=Qt.textureTypeReadable(R.type)),B}this.readRenderTargetPixels=function(R,B,et,Z,$,Nt,Vt,Lt=0){if(!(R&&R.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=qt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Vt!==void 0&&(Bt=Bt[Vt],Array.isArray(Bt)&&(Bt=Bt[0])),Bt){pt.bindFramebuffer(D.FRAMEBUFFER,Bt);try{let Yt=R.textures[Lt],re=Yt.format,pe=Yt.type;R.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Lt);let Wt=fu(Yt);if(Wt.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Wt.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=R.width-Z&&et>=0&&et<=R.height-$&&D.readPixels(B,et,Z,$,Tt.convert(re),Tt.convert(pe),Nt)}finally{let Yt=ft!==null?qt.get(ft).__webglFramebuffer:null;pt.bindFramebuffer(D.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(R,B,et,Z,$,Nt,Vt,Lt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=qt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Vt!==void 0&&(Bt=Bt[Vt],Array.isArray(Bt)&&(Bt=Bt[0])),Bt)if(B>=0&&B<=R.width-Z&&et>=0&&et<=R.height-$){pt.bindFramebuffer(D.FRAMEBUFFER,Bt);let Yt=R.textures[Lt],re=Yt.format,pe=Yt.type;R.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Lt);let Wt=fu(Yt);if(Wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let me=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,me),D.bufferData(D.PIXEL_PACK_BUFFER,Nt.byteLength,D.STREAM_READ),D.readPixels(B,et,Z,$,Tt.convert(re),Tt.convert(pe),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Ge=ft!==null?qt.get(ft).__webglFramebuffer:null;pt.bindFramebuffer(D.FRAMEBUFFER,Ge);let Pe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Lf(D,Pe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,me),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Nt),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(me),D.deleteSync(Pe),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,B=null,et=0){let Z=Math.pow(2,-et),$=Math.floor(R.image.width*Z),Nt=Math.floor(R.image.height*Z),Vt=B!==null?B.x:0,Lt=B!==null?B.y:0;te.setTexture2D(R,0),D.copyTexSubImage2D(D.TEXTURE_2D,et,0,0,Vt,Lt,$,Nt),pt.unbindTexture()},this.copyTextureToTexture=function(R,B,et=null,Z=null,$=0,Nt=0){let Vt,Lt,Bt,Yt,re,pe,Wt,me,Ge,Pe=R.isCompressedTexture?R.mipmaps[Nt]:R.image;if(et!==null)Vt=et.max.x-et.min.x,Lt=et.max.y-et.min.y,Bt=et.isBox3?et.max.z-et.min.z:1,Yt=et.min.x,re=et.min.y,pe=et.isBox3?et.min.z:0;else{let ve=Math.pow(2,-$);Vt=Math.floor(Pe.width*ve),Lt=Math.floor(Pe.height*ve),R.isDataArrayTexture?Bt=Pe.depth:R.isData3DTexture?Bt=Math.floor(Pe.depth*ve):Bt=1,Yt=0,re=0,pe=0}Z!==null?(Wt=Z.x,me=Z.y,Ge=Z.z):(Wt=0,me=0,Ge=0);let Ie=Tt.convert(B.format),on=Tt.convert(B.type),Xt;B.isData3DTexture?(te.setTexture3D(B,0),Xt=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(te.setTexture2DArray(B,0),Xt=D.TEXTURE_2D_ARRAY):(te.setTexture2D(B,0),Xt=D.TEXTURE_2D),pt.activeTexture(D.TEXTURE0),pt.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),pt.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),pt.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);let fn=pt.getParameter(D.UNPACK_ROW_LENGTH),Se=pt.getParameter(D.UNPACK_IMAGE_HEIGHT),ji=pt.getParameter(D.UNPACK_SKIP_PIXELS),an=pt.getParameter(D.UNPACK_SKIP_ROWS),Co=pt.getParameter(D.UNPACK_SKIP_IMAGES);pt.pixelStorei(D.UNPACK_ROW_LENGTH,Pe.width),pt.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pe.height),pt.pixelStorei(D.UNPACK_SKIP_PIXELS,Yt),pt.pixelStorei(D.UNPACK_SKIP_ROWS,re),pt.pixelStorei(D.UNPACK_SKIP_IMAGES,pe);let Pi=R.isDataArrayTexture||R.isData3DTexture,Qi=B.isDataArrayTexture||B.isData3DTexture;if(R.isDepthTexture){let ve=qt.get(R),nn=qt.get(B),zn=qt.get(ve.__renderTarget),ze=qt.get(nn.__renderTarget);pt.bindFramebuffer(D.READ_FRAMEBUFFER,zn.__webglFramebuffer),pt.bindFramebuffer(D.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Ke=0;Ke<Bt;Ke++)Pi&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qt.get(R).__webglTexture,$,pe+Ke),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qt.get(B).__webglTexture,Nt,Ge+Ke)),D.blitFramebuffer(Yt,re,Yt+Vt,re+Lt,Wt,me,Wt+Vt,me+Lt,D.DEPTH_BUFFER_BIT,D.NEAREST);pt.bindFramebuffer(D.READ_FRAMEBUFFER,null),pt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if($!==0||R.isRenderTargetTexture||qt.has(R)){let ve=qt.get(R),nn=qt.get(B);pt.bindFramebuffer(D.READ_FRAMEBUFFER,L),pt.bindFramebuffer(D.DRAW_FRAMEBUFFER,H);for(let zn=0;zn<Bt;zn++)Pi?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ve.__webglTexture,$,pe+zn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ve.__webglTexture,$),Qi?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,nn.__webglTexture,Nt,Ge+zn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,nn.__webglTexture,Nt),$!==0?D.blitFramebuffer(Yt,re,Yt+Vt,re+Lt,Wt,me,Wt+Vt,me+Lt,D.COLOR_BUFFER_BIT,D.NEAREST):Qi?D.copyTexSubImage3D(Xt,Nt,Wt,me,Ge+zn,Yt,re,Vt,Lt):D.copyTexSubImage2D(Xt,Nt,Wt,me,Yt,re,Vt,Lt);pt.bindFramebuffer(D.READ_FRAMEBUFFER,null),pt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Qi?R.isDataTexture||R.isData3DTexture?D.texSubImage3D(Xt,Nt,Wt,me,Ge,Vt,Lt,Bt,Ie,on,Pe.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Xt,Nt,Wt,me,Ge,Vt,Lt,Bt,Ie,Pe.data):D.texSubImage3D(Xt,Nt,Wt,me,Ge,Vt,Lt,Bt,Ie,on,Pe):R.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Nt,Wt,me,Vt,Lt,Ie,on,Pe.data):R.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Nt,Wt,me,Pe.width,Pe.height,Ie,Pe.data):D.texSubImage2D(D.TEXTURE_2D,Nt,Wt,me,Vt,Lt,Ie,on,Pe);pt.pixelStorei(D.UNPACK_ROW_LENGTH,fn),pt.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Se),pt.pixelStorei(D.UNPACK_SKIP_PIXELS,ji),pt.pixelStorei(D.UNPACK_SKIP_ROWS,an),pt.pixelStorei(D.UNPACK_SKIP_IMAGES,Co),Nt===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&D.generateMipmap(Xt),pt.unbindTexture()},this.initRenderTarget=function(R){qt.get(R).__webglFramebuffer===void 0&&te.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?te.setTextureCube(R,0):R.isData3DTexture?te.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?te.setTexture2DArray(R,0):te.setTexture2D(R,0),pt.unbindTexture()},this.resetState=function(){W=0,q=0,ft=null,pt.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}};function we(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Te;l.morphTargetsRelative=a;let c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0,d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=bd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let S=0;S<o[h].length;++S)d.push(o[h][S][f]);let p=bd(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function bd(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new sn(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<e;p++){let S=h.getComponent(f,p);a.setComponent(f+u,p,S)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var De=510,ir=[85,255,425],_n=[-1,0,1,2],Ji=[2.6,6.1,9.6],Ce=11.4,Yn=.9,Rh=20,Td=11,hv=2,Mn,Je,Be,Vh,yn,Ze=null,Ch=!1,Wh=0,er=null,Ut={pos:null,metroSint:null,metro8:!1,metrobus:!1,troleElev:!1,viaje:!1,pct:null,dist:null,vel:null,nivel:"ligero",noche:!1,rojo:!1,zona:"mixto",pico:!1,llego:!1},vo=new ae;function Zn(i,t){vo.set(t).convertSRGBToLinear();let e=i.attributes.position.count,n=new Float32Array(e*3);for(let s=0;s<e;s++)n[s*3]=vo.r,n[s*3+1]=vo.g,n[s*3+2]=vo.b;return i.setAttribute("color",new sn(n,3)),i}var Kt=(i,t,e,n,s,r,o)=>Zn(new Gt(i,t,e).translate(n,s,r),o),un=(i,t,e=.38)=>Zn(new he(e,e,.32,10).rotateX(Math.PI/2).translate(i,e,t),1447446);function Xh(i,t,e){let n=document.createElement("canvas");n.width=n.height=64;let s=n.getContext("2d"),r=s.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,`rgba(${i},${t},${e},0.95)`),r.addColorStop(.45,`rgba(${i},${t},${e},0.35)`),r.addColorStop(1,`rgba(${i},${t},${e},0)`),s.fillStyle=r,s.fillRect(0,0,64,64);let o=new Sn(n);return o.colorSpace=Fe,o}var Zi,Vd,ec,or,Eo,jh,Qh,Jl,Ih={};function uv(i,t=16777215,e=2831424){let n=i+t+"_"+e;if(Ih[n])return Ih[n];let s=2502715,r=[],o,a;switch(i){case"hatch":o=4,a=1.85,r=[Kt(o,.8,a,0,.75,0,t),Kt(2.5,.68,a*.86,-.55,1.49,0,s),Kt(2.45,.08,a*.88,-.55,1.86,0,t),Kt(.06,.25,a*.6,o/2,.95,0,10133670)];break;case"sedan":o=4.5,a=1.85,r=[Kt(o,.75,a,0,.72,0,t),Kt(2.3,.62,a*.86,-.15,1.4,0,s),Kt(2.2,.08,a*.88,-.15,1.74,0,t)];break;case"ejec":o=5,a=1.9,r=[Kt(o,.62,a,0,.68,0,t),Kt(2.6,.52,a*.86,-.2,1.25,0,s),Kt(2.5,.07,a*.88,-.2,1.54,0,t),Kt(o*.98,.05,a*1.01,0,.82,0,13225686)];break;case"depor":o=4.4,a=1.95,r=[Kt(o,.5,a,0,.6,0,t),Kt(1.8,.42,a*.82,-.3,1.06,0,s),Kt(1.7,.06,a*.84,-.3,1.28,0,t),Kt(.3,.08,a*.9,-o/2+.2,1.08,0,1118481)];break;case"taxi":o=4.5,a=1.85,r=[Kt(o,.45,a,0,.58,0,16185075),Kt(o,.32,a*1.001,0,.98,0,15217551),Kt(2.3,.62,a*.86,.15,1.45,0,s),Kt(2.2,.08,a*.88,.15,1.79,0,15217551),Kt(.5,.22,.8,.15,1.94,0,16777215)];break;case"suv":o=4.7,a=1.95,r=[Kt(o,.95,a,0,.85,0,t),Kt(3.2,.7,a*.88,-.35,1.67,0,s),Kt(3.1,.09,a*.9,-.35,2.06,0,t)];break;case"micro":o=7.5,a=2.3,r=[Kt(o,1.5,a,0,1.25,0,15526884),Kt(o,.55,a*1.002,0,.75,0,3119698),Kt(o*.92,.6,a*1.004,-.2,1.6,0,s),Kt(o*.95,.12,a,0,2.06,0,13947851)];break;case"torton":o=8.2,a=2.4,r=[Kt(5.6,2.5,a,-1.2,1.95,0,t),Kt(2,1.7,a,2.9,1.45,0,e),Kt(.9,.7,a*.9,3.4,1.95,0,s)];break;case"trailer":o=15,a=2.5,r=[Kt(11.4,2.9,a,-1.7,2.2,0,t),Kt(.2,.3,a,-1.7,.75,0,12597547),Kt(2.8,2.2,a,5.9,1.75,0,e),Kt(1.1,.8,a*.9,6.6,2.35,0,s),Kt(.15,1.6,.15,4.7,3.4,.9,9079434),un(-5.6,a/2-.12,.5),un(-5.6,-a/2+.12,.5)];break;case"moto":o=2,a=.6,r=[Kt(1.7,.35,.3,0,.75,0,t),Kt(.5,.75,.42,-.15,1.35,0,e),Zn(new Pn(.2,8,6).translate(-.05,1.9,0),1118481),Zn(new he(.3,.3,.12,10).rotateX(Math.PI/2).translate(.75,.3,0),1447446),Zn(new he(.3,.3,.12,10).rotateX(Math.PI/2).translate(-.75,.3,0),1447446)];break}if(i!=="moto"){let c=o/2-.85,h=-o/2+.85,u=a/2-.12,f=o>7?.5:.38;r.push(un(c,u,f),un(c,-u,f),un(h,u,f),un(h,-u,f))}let l=we(r);return l.computeVertexNormals(),Ih[n]={geo:l,L:o,W:a}}function bo(i,t,e){let n=uv(i,t,e),s=new _e,r=new st(n.geo,Zi);r.castShadow=!0,s.add(r);let o=i==="moto"?.95:n.L>7?1.1:.9,a=new st(new Gt(.08,.18,i==="moto"?.2:n.W*.85),or);a.position.set(-n.L/2-.02,o,0),s.add(a);let l=new st(Jl,Vd);l.scale.set(5.5,1,n.W*2.4),l.position.set(-n.L/2-1.6,.06,0),l.visible=!1,s.add(l);let c=new st(new Gt(.06,.16,i==="moto"?.16:n.W*.8),jh);c.position.set(n.L/2+.02,o,0),s.add(c);let h=new st(Jl,ec);return h.scale.set(9,1,n.W*2.2),h.position.set(n.L/2+4.5,.05,0),h.visible=!1,s.add(h),Je.add(s),{g:s,stop:a,glow:l,haz:h,L:n.L,tipo:i}}var Ao=[],$l=[],yo,qi,nr,vn,qh;function go(i,t,e,n,s,r=0){let o=new st(new Re(i,t).rotateX(-Math.PI/2),new wt({color:s}));return o.position.set(e,r,n),o.receiveShadow=!0,vn.add(o),o}var Hl=_n.flatMap(i=>ir.map((t,e)=>({x:t+i*De,i:e})));function fv(){let i=_n[0]*De,t=_n.length*De,e=i+t/2;go(t,420,e,0,14673372,-.02),go(t,Ce*2,e,0,3816773,0),go(t,3,e,Ce+1.5,13225156,.01),go(t,3,e,-Ce-1.5,13225156,.01),Hl.forEach(g=>go(12,420,g.x,0,3816773,.005));let n=[];for(let g of _n)for(let v=0;v<De;v+=10)ir.some(A=>v+10>A-7&&v<A+7)||n.push(new Gt(10,.7,.6).translate(g*De+v+5,.35,0));let s=new st(we(n),new wt({color:12172739}));s.castShadow=s.receiveShadow=!0,vn.add(s),qh=s;let r=[];for(let g of[1,-1]){for(let v of[Yn,Ce-.35])r.push(new Re(t,.18).rotateX(-Math.PI/2).translate(e,.02,g*v));for(let v of _n)for(let A=0;A<De;A+=8.5)if(!ir.some(w=>Math.abs(A-w)<9))for(let w of[4.35,7.85])r.push(new Re(3,.16).rotateX(-Math.PI/2).translate(v*De+A,.02,g*w))}Hl.forEach(({x:g})=>{for(let v=-Ce+.6;v<Ce;v+=1.1)Math.abs(v)>Yn+.3&&r.push(new Re(3.2,.6).rotateX(-Math.PI/2).translate(g-7.6,.025,v));r.push(new Re(.4,Ce-Yn).rotateX(-Math.PI/2).translate(g-9.8,.025,(Ce+Yn)/2)),r.push(new Re(.4,Ce-Yn).rotateX(-Math.PI/2).translate(g+9.8,.025,-(Ce+Yn)/2))}),vn.add(new st(we(r),new xe({color:15921906})));let o=[15918022,15250592,13227743,16045453,12114110,15123414,14209732,11125984,15778427],a=[];for(let g of[1,-1]){let v=0;for(;v<De-6;){let A=Math.min(7+Math.random()*10,De-v);if(ir.some(w=>Math.abs(v+A/2-w)<6+A/2)){v+=4;continue}a.push({x:v+A/2,w:A-.8,h:4+Math.random()*(Math.random()<.2?22:9),d:8+Math.random()*8,s:g,dz:Math.random()*1.5,c:o[a.length%o.length]}),v+=A}}let l=new Le(new Gt(1,1,1).translate(0,.5,0),new wt({color:16777215}),a.length*_n.length);l.castShadow=l.receiveShadow=!0;let c=new oe,h=new Ve,u=new N,f=new N,d=0;for(let g of _n)for(let v of a)u.set(g*De+v.x,0,v.s*(Ce+3.5+v.d/2+v.dz)),f.set(v.w,v.h,v.d),l.setMatrixAt(d,c.compose(u,h,f)),l.setColorAt(d,vo.set(v.c)),d++;vn.add(l);let p=[];for(let g of[1,-1])for(let v=5;v<De;v+=17)ir.some(A=>Math.abs(v-A)<9)||p.push({x:v+Math.random()*3,s:g,e:.8+Math.random()*.5});let S=new Le(new he(.15,.2,1.4,6).translate(0,.7,0),new wt({color:8018490}),p.length*_n.length),x=new Le(new Ys(1.2,0).translate(0,2.3,0),new wt({color:5939290,flatShading:!0}),p.length*_n.length);x.castShadow=!0,d=0;for(let g of _n)for(let v of p)u.set(g*De+v.x,0,v.s*(Ce+2.2)),f.setScalar(v.e),c.compose(u,h,f),S.setMatrixAt(d,c),x.setMatrixAt(d,c),d++;vn.add(S,x),yo=new _e,vn.add(yo);let m=[],M=[],y=[];for(let g of[1,-1])for(let v of _n)for(let A=10;A<De;A+=30){let w=v*De+A;m.push(new he(.09,.12,7,6).translate(w,3.5,g*(Ce+.6)),new Gt(.15,.12,2.2).translate(w,7,g*(Ce-.4))),M.push(new Gt(.5,.12,.8).translate(w,6.92,g*(Ce-1.3))),y.push(new Re(9,9).rotateX(-Math.PI/2).translate(w,.04,g*(Ce-2.5)))}yo.add(new st(we(m),new wt({color:7172214})),new st(we(M),Qh));let _=new st(we(y),new xe({map:ec.map,transparent:!0,depthWrite:!1,blending:Mi,opacity:.55}));_.visible=!1,_.name="charcos",yo.add(_),Ao=Hl.map(({x:g,i:v})=>{let A=(w,P,I)=>{let z=new _e,L=new wt({color:3882821}),H=new st(new he(.12,.14,6,8),L);H.position.y=3,z.add(H);let W=new st(new Gt(.14,.14,7),L);W.position.set(0,5.9,-3.5),z.add(W);let q=new st(new Gt(.45,1.5,.55),new wt({color:1908514}));q.position.set(-.1,5.2,-6),q.castShadow=!0,z.add(q);let ft=[16722458,16761856,2282347].map((Q,G)=>{let J=new st(new Pn(.17,10,8),new xe({color:2236962}));return J.position.set(-.35,5.68-G*.47,-6),J.userData.on=Q,z.add(J),J});return z.position.set(w,0,P),z.rotation.y=I,vn.add(z),ft};return{x:g,off:v*7.3,ida:A(g-10.5,Ce+.9,0),reg:A(g+10.5,-Ce-.9,Math.PI)}});let E=[15029053,3120750,8084694,14722342,3770341,13651850];$l=[],Hl.forEach(({x:g},v)=>{for(let A=0;A<3;A++){let w=new _e,P=new st(new he(.22,.26,.95,8),new wt({color:E[(v+A)%E.length]}));P.position.y=1.15,P.castShadow=!0;let I=new st(new he(.2,.18,.7,8),new wt({color:2899543}));I.position.y=.35;let z=new st(new Pn(.2,10,8),new wt({color:13209186}));z.position.y=1.85;let L=new st(new Gt(.12,.5,.12),new xe({color:16765952}));L.position.y=2.6,L.visible=!1,w.add(P,I,z,L);let H=A%2?1:-1,W=H*(Ce+1.2);w.position.set(g-8.8+A*.8,0,W),vn.add(w),$l.push({g:w,susto:L,cx:g,dx:-8.8+A*.8,z:W,modo:"espera",t:Math.random()*2,dir:-H})}});let b=(g,v)=>{let A=document.createElement("canvas");A.width=A.height=128;let w=A.getContext("2d");w.fillStyle=v,w.beginPath(),w.arc(64,64,56,0,7),w.fill(),w.fillStyle="#fff",w.font="bold 80px Arial",w.textAlign="center",w.textBaseline="middle",w.fillText(g,64,70);let P=new Sn(A);P.colorSpace=Fe;let I=new _e,z=new Oi(new vi({map:P}));z.scale.set(5,5,1),z.position.set(0,7.5,Ce+2.5),I.add(z);let L=new st(new he(.12,.12,5,6),new wt({color:7829367}));L.position.set(0,2.5,Ce+2.5),I.add(L);let H=new st(new Re(1.2,Ce-Yn).rotateX(-Math.PI/2),new xe({color:v}));return H.position.set(0,.03,(Ce+Yn)/2),I.add(H),I.visible=!1,vn.add(I),I};qi=b("A","#3987e5"),nr=b("B","#d95926")}var Yh=[12597547,2976949,1381914,12567753,15921903,8028038,14722342,3120750,9185828,2504266],dv=[1381914,2504266,15921903,3816770,12720152,12567753],wn=[],zt,wd,ps,Zh="",ai=i=>i[Math.floor(Math.random()*i.length)];function Wd(){let i=["micro","micro","torton","sedan","sedan","taxi","suv"],t=["ejec","ejec","suv","suv","depor","sedan"],e=Ut.zona==="popular"?i:Ut.zona==="lujo"?t:[...i.slice(0,4),...t.slice(0,4)];return Ut.pico&&(e=[...e,"torton","trailer","trailer","torton","trailer"]),ai(e)}function Ph(i,t,e,n,s){let r=ai((i==="ejec"||i==="suv"||i==="depor")&&Ut.zona==="lujo"?dv:Yh),o=2831424;i==="depor"&&(r=ai([12720152,15921903,1381914,14722342])),(i==="torton"||i==="trailer")&&(r=ai([15921902,15262416,14277846]),o=ai([12597547,2056104,15921906])),i==="moto"&&(r=ai([12986408,1402304,2236962]),o=ai([3622735,7162945,1793568]));let l={...bo(i,r,o),dir:t,z:e,x:n,v:s*.7,v0:s,a:0,frena:0,zLane:e,fase:Math.random()*6};return l.g.rotation.y=t>0?0:Math.PI,l.haz.visible=Ut.noche,wn.push(l),l}function Xd(){for(let s of wn.splice(0))s!==zt&&Je.remove(s.g);wn.push(zt);let i=Ut.nivel==="pesado",t=zt.x,e=i?8.5:36,n=i?7:15;for(let s of[1,-1])for(let r=0;r<3;r++){if(r===0&&Ut.metrobus)continue;let o=s*Ji[r];for(let a=t-80+Math.random()*10;a<t+150;a+=e*(.8+Math.random()*.6))s>0&&r===1&&a>t-(i?13:30)&&a<t+(i?10:40)||!i&&Math.random()<.35||Ph(Wd(),s,o,a,n*(.85+Math.random()*.3)*(s<0?1.1:1))}wd=Ph("taxi",1,Ji[1],t-(i?7.5:12),12),wd.esTaxi=!0;for(let s of[1,-1])for(let r of[4.35,7.85])for(let o=0;o<2;o++)Ph("moto",s,s*r,t-60+Math.random()*180,19+Math.random()*4)}var On=0,Ai=0;function qd(){let i=null;for(let t of Ao){let e=t.x-10-zt.x;e>-1&&(!i||e<i.d)&&(i={s:t,d:e})}return i}function tu(i){let t=qd();if(t&&t.s===i&&t.d<90){if(Ut.rojo)return"rojo";if(zt.v>1.5)return"verde"}let e=((On+i.off)%Rh+Rh)%Rh;return e<Td?"verde":e<Td+hv?"amarillo":"rojo"}var fs={a:1.6,b:3,T:1.1,s0:2.2};function pv(i){for(let t of Ao){let e=i.dir>0?t.x-10:t.x+10,n=(e-i.x)*i.dir;if(n>0&&n<70){let s=tu(t);return s==="rojo"||s==="amarillo"&&n>i.v*i.v/(2*fs.b)+2?e:null}}return null}function Lh(i){for(let t of wn)t.x+=i}var Ad=!1;function mv(i){On+=i;let t;if(Ut.rojo||Ut.llego?t=0:Ut.vel!=null?t=Ut.vel/3.6:t=Ut.nivel==="pesado"?7:13,zt.a=(t-zt.v)*1.2,zt.v=Math.max(0,zt.v+zt.a*i),zt.x+=zt.v*i,Ut.rojo&&!Ad){let r=qd();if(r&&r.d>3){let o=-(r.d-3);Lh(o),Ai-=o}}Ad=Ut.rojo;let e={};for(let r of wn)r.tipo!=="moto"&&r!==zt&&(e[r.dir+":"+r.zLane]||=[]).push(r);(e["1:"+Ji[1]]||=[]).push(zt);for(let r in e){let o=e[r].sort((a,l)=>(l.x-a.x)*l.dir);for(let a=0;a<o.length;a++){let l=o[a];if(l===zt)continue;let c=o[a-1];l.esTaxi&&(l.v0=Math.max(9,zt.v+3));let h=1e9,u=0;c&&(h=(c.x-l.x)*l.dir-(c.L+l.L)/2,u=l.v-c.v);let f=pv(l);if(f!=null){let S=(f-l.x)*l.dir-l.L/2;S<h&&(h=S,u=l.v)}l.dir>0&&l.zLane===Ji[1]&&c===zt&&h<0&&(l.x=zt.x-(zt.L+l.L)/2-1.5,l.v=zt.v);let d=fs.s0+Math.max(0,l.v*fs.T+l.v*u/(2*Math.sqrt(fs.a*fs.b))),p=fs.a*(1-Math.pow(l.v/l.v0,4)-Math.pow(d/Math.max(h,.1),2));Ut.nivel==="pesado"&&Math.random()<.0015&&(l.frena=1.2),l.frena>0&&(l.frena-=i,p=Math.min(p,-3.5)),p=Math.max(-8,Math.min(fs.a,p)),l.a=p,l.v=Math.max(0,l.v+p*i),l.x+=l.v*l.dir*i}for(let a=0;a<o.length;a++)if(o[a]===zt&&o[a-1]){let l=o[a-1],c=l.x-zt.x-(l.L+zt.L)/2;c<4&&(l.x+=4-c+(zt.v>l.v?30:0))}}for(let r of wn)r.tipo==="moto"&&(r.fase+=i,r.v=r.v0,r.x+=r.v*r.dir*i,r.z=r.zLane+Math.sin(r.fase*.9)*.6,r.a=0);let n=zt.x,s=Ut.nivel==="pesado";for(let r of wn){if(r===zt)continue;let o=r.x-n;if(r.tipo==="moto"){r.dir>0&&o>170?r.x=n-100-Math.random()*30:r.dir>0&&o<-110?r.x=n+160:r.dir<0&&o<-110&&(r.x=n+160+Math.random()*40);continue}if(r.esTaxi){(o<-60||o>0)&&(r.x=n-(zt.L+r.L)/2-3,r.v=zt.v);continue}r.dir>0&&o>170?(r.x=gv(r)-(s?9:30)*(.8+Math.random()*.5),r.v=r.v0*.6):r.dir>0&&o<-110?r.x=Rd(r)+(s?9:30):r.dir<0&&o<-110&&(r.x=Rd(r)+(s?10:34)*(.8+Math.random()*.5),r.v=r.v0*.8)}zt.x>De&&(Lh(-De),Ai+=De),zt.x<-De/2&&(Lh(De),Ai-=De);for(let r of $l){let o=Ao.find(h=>h.x===r.cx),a=tu(o)==="rojo",l=r.cx-7.6,c=h=>wn.some(u=>u.tipo==="moto"&&Math.abs(u.z-h)<1.6&&(l-u.x)*u.dir>-1&&(l-u.x)*u.dir<24);if(r.modo==="espera")r.t-=i,a&&r.t<=0&&!c(r.z+r.dir*2)&&(r.modo="cruza");else if(r.modo==="cruza"){let h=r.z+r.dir*(a?1.4:2.6)*i;c(h+r.dir*1.2)&&Math.abs(r.z)<Ce?(r.modo="huye",r.dir=-r.dir):(r.z=h,Math.abs(r.z)>=Ce+1.2&&Math.sign(r.z)===Math.sign(r.dir)&&(r.modo="espera",r.t=2+Math.random()*3,r.dir=-Math.sign(r.z)))}else r.z+=r.dir*3.4*i,(Math.abs(r.z)>=Ce+1.2||Math.abs(r.z)<Yn+.2)&&(r.modo="espera",r.t=1.2+Math.random()*1.5,Math.abs(r.z)>=Ce+1.2&&(r.dir=-Math.sign(r.z)));r.g.position.z=r.z,r.susto.visible=r.modo==="huye",r.g.position.y=r.modo!=="espera"?Math.abs(Math.sin(On*(r.modo==="huye"?16:9)))*.08:0}}function gv(i){let t=1/0;for(let e of wn)e.dir===i.dir&&e.zLane===i.zLane&&e!==i&&(t=Math.min(t,e.x));return Math.min(t,zt.x-20)}function Rd(i){let t=-1/0;for(let e of wn)e.dir===i.dir&&e.zLane===i.zLane&&e!==i&&(t=Math.max(t,e.x));return Math.max(t,zt.x+60)}function Kl(){let i=Ut.noche,t=Jv(i),e=typeof Ql<"u"&&Ql==="real";Je.background=t.t,Je.fog=new Ir(t.horiz,e?180:110,e?560:320),ds&&(ds.emissive.set(i?16777215:0),ds.emissiveIntensity=i?.9:0),Vh.intensity=i?.45:1.7,yn.intensity=i?.25:2.3,yn.color.set(i?9414399:16777215),jh.color.set(i?16774856:14277071),Qh.color.set(i?16769946:9079424),yo.getObjectByName("charcos").visible=i;for(let n of wn)n.haz.visible=i}var Yd={atras:[-9.5,6.4,0,22,1],diag:[-24,36,-13,8],cerca:[-13,10,-7,6],arriba:[-6,70,-.5,6],propia:[-24,36,-13,8]},xv={atras:[-9.5,6.4,0,22,1],diag:[-50,75,-28,24],cerca:[-16,12,-8,10],arriba:[-10,150,-1,22],propia:[-50,75,-28,24]},Cd={atras:"Atr\xE1s",diag:"Diagonal",cerca:"Cerca",arriba:"Arriba",propia:"Personalizada"},Id={yaw:.55,pitch:.62,dist:55},bn=(()=>{try{return{...Id,...JSON.parse(localStorage.getItem("vista3dPropia")||"{}")}}catch{return{...Id}}})();function Pd(){try{localStorage.setItem("vista3dPropia",JSON.stringify(bn))}catch{}}var Dh=["atras","diag","cerca","arriba","propia"],We=(()=>{try{return localStorage.getItem("vista3dCam3")||"atras"}catch{return"atras"}})();Yd[We]||(We="atras");var Ri=new N,Ci=new N;function Zd(i,t){let[e,n,s,r,o=0]=Yd[We],a=new N(zt.x+e,n,zt.z+s),l=new N(zt.x+r,o,zt.z+(We==="atras"?0:3));if(t)Ri.copy(a),Ci.copy(l);else{let c=1-Math.exp(-i*3);Ri.lerp(a,c),Ci.lerp(l,c)}Be.position.copy(Ri),Be.lookAt(Ci),yn.position.set(zt.x+25,45,zt.z+30),yn.target.position.set(zt.x,0,zt.z)}function _v(){for(let t of wn){t.g.position.set(t.x,0,t.z);let e=t.tipo!=="moto"&&(t.a<-.6||t.v<.4);t.stop.material=e?Eo:or,t.glow.visible=e||Ut.noche&&t.tipo!=="moto",t.glow.scale.x=e?5.5:2.5}ps.position.y=3.3+Math.sin(On*3)*.2,ps.rotation.y+=.03;for(let t of Ao){let e=tu(t),n=e==="rojo"?0:e==="amarillo"?1:2;for(let s of[t.ida,t.reg])s.forEach((r,o)=>r.material.color.set(o===n?r.userData.on:2236962))}for(let t of $l)t.g.position.x=t.cx+t.dx;let i=zt.x+Ai;if(Ut.viaje&&Ut.pct!=null&&Ut.dist){let t=Ut.dist*1e3,e=i-Math.min(1,Ut.pct)*t,n=e+t;qi.position.x=e-Ai,nr.position.x=n-Ai,qi.visible=Math.abs(qi.position.x-zt.x)<300,nr.visible=Math.abs(nr.position.x-zt.x)<300}else Ut.viaje&&Ut._a!=null?(qi.position.x=Ut._a-Ai,qi.visible=Math.abs(qi.position.x-zt.x)<300,nr.visible=!1):qi.visible=nr.visible=!1}function vv(){Mn=new Ol({antialias:!0,powerPreference:"high-performance"}),Mn.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),Mn.shadowMap.enabled=!0,Mn.shadowMap.type=Wa,Mn.outputColorSpace=Fe,Mn.domElement.style.cssText="display:block;width:100%;height:100%",Je=new Pr,Be=new pn(30,1,.5,700),Vh=new Qr(15266040,10134421,1.7),yn=new no(16777215,2.3),yn.castShadow=!0,yn.shadow.mapSize.set(1024,1024),Object.assign(yn.shadow.camera,{left:-45,right:45,top:45,bottom:-45,near:1,far:160}),yn.shadow.bias=-6e-4,Je.add(Vh,yn,yn.target),Zi=new wt({vertexColors:!0}),Vd=new xe({map:Xh(255,30,20),transparent:!0,depthWrite:!1,blending:Mi}),ec=new xe({map:Xh(255,240,190),transparent:!0,depthWrite:!1,blending:Mi,opacity:.8}),or=new xe({color:5901581}),Eo=new xe({color:16722458}),jh=new xe({color:14277071}),Qh=new xe({color:9079424}),Jl=new Re(1,1).rotateX(-Math.PI/2),vn=new _e,Je.add(vn),fv(),Mv(),zt={...bo("hatch",16053490),dir:1,z:Ji[1],x:40,v:0,v0:15,a:0,frena:0,zLane:Ji[1]},ps=new st(new Ws(.55,1.1,4).rotateX(Math.PI),new xe({color:3770341})),ps.position.y=3.4,zt.g.add(ps),Xd(),Zh=Ut.nivel+Ut.zona+Ut.pico+Ut.metrobus,Kl(),Zd(0,!0)}function Wl(){if(!Ze)return;let i=Ze.clientWidth,t=Ze.clientHeight;!i||!t||(Mn.setSize(i,t,!1),Be.aspect=i/t,Be.fov=We==="atras"||We==="propia"?Be.aspect<1?62:48:Be.aspect<1?46:Be.aspect>1.8?21:27,Be.updateProjectionMatrix())}var Mo=0,Gl=0,Nh=0,yv=0;function Jd(i){if(Wh=requestAnimationFrame(Jd),document.hidden){Mo=i;return}let t=Math.min(.05,Mo?(i-Mo)/1e3:.016);if(Mo=i,Zt&&Zt.listo&&Ut.pos)ny(t),wi(t);else{let e=Math.ceil(t/.02);for(let n=0;n<e;n++)mv(t/e);_v(),Sv(t),Zd(t)}Mn.render(Je,Be),Gl+=t,Nh++,Gl>2&&(Nh/Gl<28&&Mn.shadowMap.enabled&&++yv>1&&(Mn.shadowMap.enabled=!1,Je.traverse(n=>{n.material&&(n.material.needsUpdate=!0)})),Gl=0,Nh=0)}var Uh=null;function $d(i){Uh||(Uh=Xh(255,255,255));let t=new _e;t.visible=!1,t.userData.fases=[];let e=new Gt(.28,.12,.28),n=new Re(1.6,1.6).rotateX(-Math.PI/2),s=new oe,r=new ae;for(let o=0;o<3;o++){let a=i.filter(f=>f.f===o);if(!a.length){t.userData.fases.push(null);continue}let l=new xe({color:16777215}),c=new xe({map:Uh,transparent:!0,depthWrite:!1,blending:Mi}),h=new Le(e,l,a.length),u=new Le(n,c,a.length);a.forEach((f,d)=>{s.makeTranslation(f.x,(f.y||0)+.08,f.z),h.setMatrixAt(d,s),s.makeTranslation(f.x,(f.y||0)+.1,f.z),u.setMatrixAt(d,s),r.set(f.c),h.setColorAt(d,r),u.setColorAt(d,r)}),u.renderOrder=3,t.add(h,u),t.userData.fases.push({mb:l,mh:c})}return t}function Kd(i,t){if(!i||(i.visible=!!Ut.noche,!Ut.noche))return;let e=Math.floor(t*7)%3;i.userData.fases.forEach((n,s)=>{if(!n)return;let r=s===e,o=r?1:.18;n.mb.color.setScalar(o),n.mh.opacity=r?.95:.12})}var Yi={carril:16052710,orilla:3134407,centro:16757504,metrobus:16764723};function jd(){return we([Kt(12,2.6,2.5,0,1.75,0,2061280),Kt(11.2,1,2.52,-.2,2.25,0,1520207),Kt(12,.25,2.54,0,1,0,16777215),Kt(3.4,.4,1.6,-.5,3.25,0,1727672),Kt(5.6,.08,.08,-2.8,4.6,.45,2763306).rotateZ(0),Kt(5.6,.08,.08,-2.8,4.6,-.45,2763306),un(-3.8,1.2,.5),un(-3.8,-1.2,.5),un(3.8,1.2,.5),un(3.8,-1.2,.5)])}function Qd(){return we([Kt(8.6,2.8,2.55,-4.6,1.75,0,12986408),Kt(8.6,2.8,2.55,4.6,1.75,0,12986408),Kt(.6,2.4,2.3,0,1.65,0,5903380),Kt(7.8,1,2.57,-4.6,2.25,0,2241087),Kt(7.8,1,2.57,4.6,2.25,0,2241087),Kt(17.8,.2,2.58,0,1,0,15921906),un(-7.4,1.2,.5),un(-7.4,-1.2,.5),un(-2,1.2,.5),un(-2,-1.2,.5),un(7.4,1.2,.5),un(7.4,-1.2,.5)])}function jl(i,t,e){let n=new oe,s=new Ve,r=new N,o=new N(1,1,1),a=new N(0,1,0),l=0;for(let c of t){if(l>=i.instanceMatrix.count)break;r.set(c.x,c.y,c.z),s.setFromAxisAngle(a,c.r),i.setMatrixAt(l++,n.compose(r,s,o))}i.count=l,i.instanceMatrix.needsUpdate=!0}function Ld(i,t,e,n,s,r,o,a,l){i.t=(i.t||Math.random()*40)+t;let c=i.cum[i.cum.length-1],h=i.periodo*e,u=Math.max(h,c+n+60);for(let f of[1,-1]){let d=(i.t+(f<0?i.periodo/2:0))*e%u;for(let p=0;p*h<u&&p<30;p++){let S=(d+p*h)%u-30;for(let x=0;x<s;x++){let m=S-x*r;if(m<0||m>c)continue;f<0&&(m=c-m);let M=Ee(i,m),y=M.dx*f,_=M.dz*f,E=o;l.push({x:M.x-_*E,y:a,z:M.z+y*E,r:en(y,_)})}}}}var rn=null;function tp(){return we([Kt(14.6,3.1,2.8,0,1.95,0,15759898),Kt(13.4,.95,2.84,0,2.45,0,2241087),Kt(14.6,.25,2.82,0,1,0,15921902),Kt(14,.25,2.4,0,3.6,0,13223613),Zn(new he(.4,.4,2.4,8).rotateX(Math.PI/2).translate(-5.2,.4,0),2236962),Zn(new he(.4,.4,2.4,8).rotateX(Math.PI/2).translate(5.2,.4,0),2236962)])}function Mv(){let i=new _e;i.visible=!1,vn.add(i);let t=_n[0]*De,e=_n.length*De,n=t+e/2,s=new _e;s.add(new st(new Re(e,3.6).rotateX(-Math.PI/2).translate(n,.05,0),new wt({color:7037528})));let r=[-.72,.72].map(x=>new Gt(e,.12,.1).translate(n,.15,x));s.add(new st(we(r),new wt({color:10133670}))),i.add(s);let o=new _e,a=[];a.push(new Gt(e,1.2,4.4).translate(n,7.4,0));for(let x=t;x<t+e;x+=25)a.push(new Gt(1.2,6.8,1.6).translate(x,3.4,0));let l=new st(we(a),new wt({color:12170925}));l.castShadow=l.receiveShadow=!0,o.add(l),i.add(o);let c=new Le(tp(),Zi,120);c.castShadow=!0,c.count=0,Je.add(c);let h=new Le(jd(),Zi,40);h.castShadow=!0,h.count=0,Je.add(h);let u=[];for(let x of[1,-1])for(let m of[Yn+.15,4.35])u.push(new Re(e,.25).rotateX(-Math.PI/2).translate(n,.03,x*m));for(let x of[1,-1])for(let m of _n)for(let M=0;M<De;M+=3)u.push(new Gt(1.4,.18,.35).translate(m*De+M,.09,x*4.35));let f=new st(we(u.map(eu)),new wt({color:15909376}));f.visible=!1,vn.add(f);let d=new Le(Qd(),Zi,30);d.castShadow=!0,d.count=0,Je.add(d);let p=[];for(let x of[1,-1])for(let m of _n)for(let M=0;M<De;M+=4){let y=m*De+M,_=Math.floor(M/4)%3;ir.some(E=>Math.abs(M-E)<9)||p.push({x:y,z:x*4.35,c:Yi.carril,f:_},{x:y,z:x*7.85,c:Yi.carril,f:_}),p.push({x:y,z:x*(Ce-.35),c:Yi.orilla,f:_},{x:y,z:x*(Yn+.15),c:Yi.centro,f:_})}let S=$d(p);vn.add(S),rn={g:i,via:s,vd:o,tren:c,trole:h,mbl:f,mbus:d,luces:S,t:0}}function Sv(i){if(!rn)return;Kd(rn.luces,On),rn.mbl.visible=!!Ut.metrobus;{let S=[];if(Ut.metrobus)for(let M of[1,-1]){let y=(rn.t+(M<0?20:0))*11%440;for(let _=-2;_<=2;_++){let E=zt.x+M*(y+_*440-120);Math.abs(E-zt.x)<260&&S.push({x:E,y:0,z:M*Ji[0],r:M>0?0:Math.PI})}}jl(rn.mbus,S)}let t=!Ut.metroSint&&!Ut.metro8&&Ut.troleElev;{let S=[];if(t)for(let M of[1,-1]){let y=(rn.t+(M<0?15:0))*12%360;for(let _=-2;_<=2;_++){let E=zt.x+M*(y+_*360-150);Math.abs(E-zt.x)<280&&S.push({x:E,y:8,z:M*1.1,r:M>0?0:Math.PI})}}jl(rn.trole,S)}let e=Ut.metroSint||(Ut.metro8?"s":null)||(t?"e":null);rn.g.visible=!!e,rn.via.visible=e==="s",rn.vd.visible=e==="e",qh&&(qh.visible=e!=="s");let n=rn.tren;if(n.visible=!!e&&!(Zt&&Zt.listo&&Ut.pos),!e||t){n.count=0,rn.t+=i;return}rn.t+=i;let s=16,r=Ut.metro8?6:9,o=r*15.3,a=Ut.metro8?8:60,l=e==="e"?8:.15,c=new oe,h=new Ve,u=new N,f=new N(1,1,1),d=0,p=520;for(let S of[1,-1]){let x=(rn.t+(S<0?a/2:0))*s,m=a*s;for(let M=-Math.ceil(p/m)-1;M<=Math.ceil(p/m)+1;M++){let y=x%m+M*m-p/2;if(!(a>=30&&M!==0))for(let _=0;_<r&&d<n.instanceMatrix.count;_++){let E=zt.x+S*(y-_*15.3);Math.abs(E-zt.x)>300||(h.setFromAxisAngle(new N(0,1,0),S>0?0:Math.PI),u.set(E,l,(S>0,0)),n.setMatrixAt(d++,c.compose(u,h,f)))}}}n.count=d,n.instanceMatrix.needsUpdate=!0}var Zt=null,ep=110540,Dd={motorway:20,trunk:18,primary:15,secondary:12,tertiary:10,unclassified:8,residential:7,living_street:6,service:4.5,link:7},kl={motorway:.06,trunk:.058,primary:.055,secondary:.05,tertiary:.045,link:.044,unclassified:.04,residential:.035,living_street:.033,service:.03};function Ue(i,t,e){return[(e-i.lon)*111320*Math.cos(i.lat*Math.PI/180),-(t-i.lat)*ep]}function eu(i){i=i.index?i.toNonIndexed():i;for(let t of Object.keys(i.attributes))t!=="position"&&t!=="color"&&i.deleteAttribute(t);return i}function Dn(i,t,e,n){let s=t/2;for(let r=1;r<i.length;r++){let[o,a]=i[r-1],[l,c]=i[r],h=l-o,u=c-a,f=Math.hypot(h,u);if(f<.05)continue;let d=-u/f*s,p=h/f*s,S=new Te;S.setAttribute("position",new ne([o+d,e,a+p,l+d,e,c+p,o-d,e,a-p,o-d,e,a-p,l+d,e,c+p,l-d,e,c-p],3)),n.push(S)}for(let r=0;r<i.length;r++)n.push(eu(new Vs(s,10).rotateX(-Math.PI/2).translate(i[r][0],e,i[r][1])))}function So(i){let t=[0];for(let e=1;e<i.length;e++)t.push(t[e-1]+Math.hypot(i[e][0]-i[e-1][0],i[e][1]-i[e-1][1]));return t}function Ee(i,t){let e=i.p,n=i.cum;t=Math.max(0,Math.min(n[n.length-1],t));let s=1;for(;s<n.length-1&&n[s]<t;)s++;let r=(t-n[s-1])/Math.max(1e-6,n[s]-n[s-1]),o=e[s][0]-e[s-1][0],a=e[s][1]-e[s-1][1],l=Math.hypot(o,a)||1;return{x:e[s-1][0]+o*r,z:e[s-1][1]+a*r,dx:o/l,dz:a/l}}var en=(i,t)=>Math.atan2(-t,i),Fh={};function Ev(i){if(Fh[i])return Fh[i];let t=document.createElement("canvas"),e=t.getContext("2d");e.font="bold 44px Arial",t.width=Math.min(1024,Math.ceil(e.measureText(i).width)+28),t.height=64,e.font="bold 44px Arial",e.textBaseline="middle",e.lineJoin="round",e.lineWidth=9,e.strokeStyle="rgba(20,20,24,.85)",e.strokeText(i,14,34),e.fillStyle="#fff",e.fillText(i,14,34);let n=new Sn(t);return n.colorSpace=Fe,n.anisotropy=4,Fh[i]={mat:new xe({map:n,transparent:!0,depthWrite:!1}),ar:t.width/t.height}}function wo(i){let t=document.createElement("canvas"),e=t.getContext("2d");e.font="bold 56px Arial";let n=Math.ceil(e.measureText(i).width)+56;t.width=n,t.height=96,e.font="bold 56px Arial",e.fillStyle="rgba(0,0,0,.25)",e.beginPath(),e.roundRect(6,10,n-8,84,22),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.roundRect(2,4,n-8,84,22),e.fill(),e.fillStyle="#1d1d1b",e.textBaseline="middle",e.fillText(i,26,48);let s=new Sn(t);s.colorSpace=Fe;let r=new Oi(new vi({map:s,depthTest:!1}));return r.scale.set(n/96*5.5,5.5,1),r.renderOrder=5,r}var Oh={};function bv(i){if(Oh[i])return Oh[i];let t=document.createElement("canvas"),e=t.getContext("2d"),n="bold 64px Arial";e.font=n;let s=Math.min(1400,Math.ceil(e.measureText(i).width)+90),r=120,o=196;t.width=s,t.height=o;let a=[Math.round(s*.1),o-4],l=Math.round(s*.16),c=Math.round(s*.16)+Math.min(70,s*.16),h=f=>{e.beginPath(),e.roundRect(f,f,s-f*2,r-f*2,14-f/2),e.fill()};e.fillStyle="#111",e.beginPath(),e.moveTo(l-9,r-12),e.lineTo(a[0],a[1]),e.lineTo(c+9,r-12),e.closePath(),e.fill(),h(0),e.fillStyle="#fff",e.beginPath(),e.moveTo(l,r-14),e.lineTo(a[0]+2,a[1]-13),e.lineTo(c,r-14),e.closePath(),e.fill(),h(9),e.fillStyle="#fff",e.fillRect(l+1,r-16,c-l-2,10),e.fillStyle="#111",e.font=n,e.textBaseline="middle",e.textAlign="center",e.fillText(i,s/2,61,s-60);let u=new Sn(t);return u.colorSpace=Fe,u.anisotropy=4,Oh[i]={t:u,ar:s/o,cx:a[0]/s,cy:4/o}}function Tv(i){let e=new Map,n=[],s=[];i.forEach((o,a)=>{if(!(!o.nombre||o.tipo==="service"))for(let l=1;l<o.p.length;l++){let[c,h]=o.p[l-1],[u,f]=o.p[l],d={ci:a,x1:c,z1:h,x2:u,z2:f};s.push(d);for(let p=Math.floor(Math.min(c,u)/40);p<=Math.floor(Math.max(c,u)/40);p++)for(let S=Math.floor(Math.min(h,f)/40);S<=Math.floor(Math.max(h,f)/40);S++){let x=p+","+S;(e.get(x)||e.set(x,[]).get(x)).push(d)}}});let r=new Set;for(let[o,a]of e)for(let l=0;l<a.length;l++)for(let c=l+1;c<a.length;c++){let h=a[l],u=a[c],f=i[h.ci].nombre,d=i[u.ci].nombre;if(h.ci===u.ci||f===d)continue;let p=h.x2-h.x1,S=h.z2-h.z1,x=u.x2-u.x1,m=u.z2-u.z1,M=p*m-S*x;if(Math.abs(M)<1e-6)continue;let y=((u.x1-h.x1)*m-(u.z1-h.z1)*x)/M,_=((u.x1-h.x1)*S-(u.z1-h.z1)*p)/M;if(y<-.02||y>1.02||_<-.02||_>1.02)continue;let E=h.x1+p*y,b=h.z1+S*y,g=[f,d].sort().join("|")+"|"+Math.round(E/30)+","+Math.round(b/30);if(r.has(g))continue;r.add(g);let v=Math.hypot(p,S)||1,A=Math.hypot(x,m)||1;n.push({x:E,z:b,a:f,b:d,da:[p/v,S/v],db:[x/A,m/A],wa:i[h.ci].w,wb:i[u.ci].w})}return n}function wv(i,t,e,n){let s=i.filter(y=>!y.elev&&e[0].test(Bn(y.nombre))),r=i.filter(y=>!y.elev&&e[1].test(Bn(y.nombre)));if(!s.length||!r.length)return null;let o=null;for(let y of s)for(let _ of r)for(let[E,b]of y.p){let g=Ye(_,E,b);(!o||g.d<o.d)&&(o={d:g.d,x:(E+g.x)/2,z:(b+g.z)/2})}if(!o||o.d>160)return null;let a=i.filter(y=>y.glorieta&&y.p.some(([_,E])=>Math.hypot(_-o.x,E-o.z)<160)),l=o.x,c=o.z,h=28,u=10;if(a.length){let y=a.flatMap(_=>_.p);l=y.reduce((_,E)=>_+E[0],0)/y.length,c=y.reduce((_,E)=>_+E[1],0)/y.length,h=y.reduce((_,E)=>_+Math.hypot(E[0]-l,E[1]-c),0)/y.length,u=Math.max(...a.map(_=>_.w))}else{let y=(g,v,A)=>Ye(g,v,A),_=null,E=null;for(let g of s){let v=y(g,o.x,o.z);(!_||v.d<_.d)&&(_=v)}for(let g of r){let v=y(g,o.x,o.z);(!E||v.d<E.d)&&(E=v)}let b=_.dx*E.dz-_.dz*E.dx;if(Math.abs(b)>.2){let g=((E.x-_.x)*E.dz-(E.z-_.z)*E.dx)/b,v=_.x+_.dx*g,A=_.z+_.dz*g;Math.hypot(v-o.x,A-o.z)<90&&(l=v,c=A)}}let f=Math.max(8,h-u/2-.6);if(f>90)return null;let d=new _e;d.position.set(l,0,c),t.add(d);let p=y=>new wt({color:y}),S=new st(new he(f,f,.3,48),p(13154722));S.position.y=.15,S.receiveShadow=!0,d.add(S);let x=new st(new he(f+.25,f+.25,.32,48,1,!0),p(14725660));x.position.y=.16,d.add(x);for(let y=0;y<4;y++){let _=y*Math.PI/2+.22,E=_+Math.PI/2-.44,b=f*.32,g=f-1.6,v=new ni;v.moveTo(Math.cos(_)*b,Math.sin(_)*b);for(let w=0;w<=12;w++){let P=_+(E-_)*w/12;v.lineTo(Math.cos(P)*g,Math.sin(P)*g)}v.lineTo(Math.cos(E)*b,Math.sin(E)*b);let A=new st(new os(v,{depth:.35,bevelEnabled:!1}).rotateX(-Math.PI/2),[p(5214010),p(12988202)]);A.position.y=.3,A.receiveShadow=!0,d.add(A);for(let w=0;w<4;w++){let P=_+(E-_)*(w+.5)/4,I=b+(g-b)*(.35+.45*((w*7+y)%3)/2),z=new _e;z.position.set(Math.cos(P)*I,.6,-Math.sin(P)*I),d.add(z);let L=new st(new he(.18,.26,6.5,6),p(8020552));L.position.y=3.25,z.add(L);for(let H=0;H<6;H++){let W=new st(new Ws(.45,3.2,4),p(4165436));W.position.set(Math.cos(H)*1.1,6.4,Math.sin(H)*1.1),W.rotation.set(Math.sin(H)*1.2,0,-Math.cos(H)*1.2),z.add(W)}}}for(let y=0;y<8;y++){let _=y*Math.PI/4,E=new st(new he(.08,.1,5,6),p(11549230));E.position.set(Math.cos(_)*(f-.8),2.8,Math.sin(_)*(f-.8)),d.add(E);let b=new st(new Pn(.28,8,6),new xe({color:16773570}));b.position.set(Math.cos(_)*(f-.8),5.35,Math.sin(_)*(f-.8)),d.add(b)}let m=new st(new he(f*.3,f*.3,.45,32),p(12036757));m.position.y=.22,d.add(m);let M=wo("\u{1F4CD} "+n);return M.position.set(0,9,0),d.add(M),{x:l,z:c,r:f+1}}var xo=null;function Av(i,t){let e=i.filter(u=>!u.elev&&/circuito interior|circuito bicentenario/.test(Bn(u.nombre+" "+(u.ref||""))));if(!e.length)return{vias:0};let n=[],s=e.filter(u=>u.oneway);s.forEach((u,f)=>{let d=u.cum[u.cum.length-1],p=[],S=()=>{p.length>1?n.push(p.splice(0)):p.length=0};for(let x=0;x<=d;x+=4){let m=Ee(u,x),M=null;if(s.forEach((b,g)=>{if(g===f)return;let v=Ye(b,m.x,m.z),A=v.d-u.w/2-b.w/2;A<-.5||A>6||v.dx*m.dx+v.dz*m.dz>-.6||(!M||v.d<M.q.d)&&(M={q:v,ib:g})}),!M||M.ib<f){S();continue}let y=(M.q.x-m.x)/(M.q.d||1),_=(M.q.z-m.z)/(M.q.d||1),E=u.w/2+Math.max(0,M.q.d-u.w/2-s[M.ib].w/2)/2;p.push([m.x+y*E,m.z+_*E])}S()});for(let u of e.filter(f=>!f.oneway&&f.w>=12)){let f=u.cum[u.cum.length-1],d=[];for(let p=0;p<=f;p+=4){let S=Ee(u,p);d.push([S.x,S.z])}n.push(d)}if(!n.length)return{vias:e.length,uno:s.length,lineas:0};xo||(xo=ar(64,64,(u,f,d)=>{u.clearRect(0,0,f,d),u.fillStyle="#f2c200",u.fillRect(4,0,20,d),u.fillRect(36,0,20,d),u.fillStyle="#c99c00",u.fillRect(4,0,4,d),u.fillRect(36,0,4,d)}),xo.wrapS=xo.wrapT=jn);let r=[],o=[],a=[],l=(u,f,d,p,S)=>u.push(f[0],p,f[1],d[0],p,d[1],f[0],S,f[1],f[0],S,f[1],d[0],p,d[1],d[0],S,d[1]);for(let u of n){let f=0;for(let d=1;d<u.length;d++){let p=u[d-1],S=u[d],x=Math.hypot(S[0]-p[0],S[1]-p[1]);if(x<.2||x>12)continue;let m=-(S[1]-p[1])/x*.3,M=(S[0]-p[0])/x*.3;for(let E of[1,-1])l(r,[p[0]+m*E,p[1]+M*E],[S[0]+m*E,S[1]+M*E],0,.85);r.push(p[0]+m,.85,p[1]+M,S[0]+m,.85,S[1]+M,p[0]-m,.85,p[1]-M,p[0]-m,.85,p[1]-M,S[0]+m,.85,S[1]+M,S[0]-m,.85,S[1]-M),l(o,p,S,.85,2);let y=f/.9,_=(f+x)/.9;a.push(y,0,_,0,y,1,y,1,_,0,_,1),f+=x}}let c=new Te;c.setAttribute("position",new ne(r,3)),c.computeVertexNormals(),t.add(new st(c,new wt({color:3882304,side:ye})));let h=new Te;return h.setAttribute("position",new ne(o,3)),h.setAttribute("uv",new ne(a,2)),h.computeVertexNormals(),t.add(new st(h,new wt({map:xo,transparent:!0,alphaTest:.4,side:ye}))),{vias:e.length,lineas:n.length,pts:n.reduce((u,f)=>u+f.length,0)}}function Rv(i,t,e){let n=i.filter(l=>!l.elev&&l.oneway&&/churubusco/.test(Bn(l.nombre+" "+(l.ref||""))));if(n.length<2)return;let s=[],r=[],o=(l,c,h,u,f,d)=>l.push(c[0],d,c[1],h[0],d,h[1],u[0],d,u[1],u[0],d,u[1],h[0],d,h[1],f[0],d,f[1]);n.forEach((l,c)=>{let h=l.cum[l.cum.length-1],u=null;for(let f=0;f<=h;f+=5){let d=Ee(l,f),p=null;if(n.forEach((E,b)=>{if(b===c)return;let g=Ye(E,d.x,d.z),v=g.d-l.w/2-E.w/2;v<2||v>30||g.dx*d.dx+g.dz*d.dz<.75||(!p||g.d<p.q.d)&&(p={q:g,B:E})}),!p){u=null;continue}let S=(p.q.x-d.x)/p.q.d,x=(p.q.z-d.z)/p.q.d,m=p.q.d-l.w/2-p.B.w/2,M=[d.x+S*(l.w/2+.3),d.z+x*(l.w/2+.3)],y=[d.x+S*(l.w/2+.3+(m-.6)/2),d.z+x*(l.w/2+.3+(m-.6)/2)],_={ea:M,m:y,vx:S,vz:x,hw:(m-.6)/2};if(u){o(s,u.ea,M,u.m,y,.18);let E=(b,g)=>[b.ea[0]-b.vx*g,b.ea[1]-b.vz*g];if(o(r,E(u,.3),E(_,.3),u.ea,_.ea,.2),Math.round(f/5)%2===0&&_.hw>1.4){let b=.25+Tn("ch"+c+f)*.6,g=M[0]+(y[0]-M[0])*b,v=M[1]+(y[1]-M[1])*b;e.push([g,v,1.1+Tn("cs"+f+c)*.7])}}u=_}});let a=(l,c)=>{if(!l.length)return;let h=new Te;h.setAttribute("position",new ne(l,3)),h.computeVertexNormals();let u=new st(h,new wt({color:c,side:ye}));u.receiveShadow=!0,t.add(u)};a(s,7315527),a(r,14725660)}function sr(i,t,e){let n=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){let[o,a]=e[s],[l,c]=e[r];a>t!=c>t&&i<(l-o)*(t-a)/(c-a||1e-9)+o&&(n=!n)}return n}function Cv(i){let t=i.slice().sort((r,o)=>r[0]-o[0]||r[1]-o[1]),e=(r,o,a)=>(o[0]-r[0])*(a[1]-r[1])-(o[1]-r[1])*(a[0]-r[0]),n=[],s=[];for(let r of t){for(;n.length>=2&&e(n[n.length-2],n[n.length-1],r)<=0;)n.pop();n.push(r)}for(let r of t.slice().reverse()){for(;s.length>=2&&e(s[s.length-2],s[s.length-1],r)<=0;)s.pop();s.push(r)}return n.slice(0,-1).concat(s.slice(0,-1))}function Bh(i,t){let e=i.length,n=0,s=0;for(let[o,a]of i)n+=o,s+=a;n/=e,s/=e;let r=i.map((o,a)=>{let l=i[(a+1)%e],c=l[0]-o[0],h=l[1]-o[1],u=Math.hypot(c,h)||1,f=-h/u,d=c/u;(n-o[0])*f+(s-o[1])*d<0&&(f=-f,d=-d);let p=t[a];return{a:[o[0]+f*p,o[1]+d*p],d:[c/u,h/u]}});return r.map((o,a)=>{let l=r[(a+e-1)%e],c=l.d[0]*o.d[1]-l.d[1]*o.d[0];if(Math.abs(c)<1e-6)return o.a;let h=((o.a[0]-l.a[0])*o.d[1]-(o.a[1]-l.a[1])*o.d[0])/c;return[l.a[0]+l.d[0]*h,l.a[1]+l.d[1]*h]})}function Iv(i,t,e,n,s){let r=n.map(G=>i.filter(J=>!J.elev&&G.test(Bn(J.nombre))));if(r.some(G=>!G.length))return null;let o=[];for(let G=0;G<3;G++)for(let J=G+1;J<3;J++)for(let dt of r[G])for(let At of r[J])for(let j=1;j<dt.p.length;j++)for(let ht=1;ht<At.p.length;ht++){let St=$i(dt.p[j-1],dt.p[j],At.p[ht-1],At.p[ht]);St&&o.push([St.x,St.z])}if(o.length<3)return null;let a=Cv(o);if(a.length<3)return null;let l=0;for(let G=0;G<a.length;G++){let[J,dt]=a[G],[At,j]=a[(G+1)%a.length];l+=J*j-At*dt}if(l=Math.abs(l)/2,l<300||l>12e4)return null;let c=r.flat(),h=a.map((G,J)=>{let dt=a[(J+1)%a.length],At=(G[0]+dt[0])/2,j=(G[1]+dt[1])/2,ht=null;for(let St of c){let _t=Ye(St,At,j);(!ht||_t.d<ht.d)&&(ht={d:_t.d,c:St})}return{o:(ht?ht.c.w/2:5)+2.8,c:ht&&ht.c}}),u=Bh(a,h.map(G=>G.o)),f=new ni(u.map(([G,J])=>new xt(G,-J))),d=new st(new Jr(f).rotateX(-Math.PI/2),new wt({color:7315020}));d.position.y=.06,d.receiveShadow=!0,t.add(d);let p=new wt({color:3119736}),S=new wt({color:8224120}),x=new wt({color:4094517}),m=new wt({color:14267164}),M=[],y=[],_=(G,J,dt,At,j,ht,St,_t)=>{let Et=J[0]-G[0],O=J[1]-G[1],tt=Math.hypot(Et,O);if(tt<.5)return;let k=new st(new Gt(tt,At,j),ht);k.position.set((G[0]+J[0])/2+_t[0]*St,dt+At/2,(G[1]+J[1])/2+_t[1]*St),k.rotation.y=en(Et/tt,O/tt),k.castShadow=At>.5,t.add(k)},E=0,b=0;for(let[G,J]of u)E+=G,b+=J;E/=u.length,b/=u.length,u.forEach((G,J)=>{let dt=u[(J+1)%u.length],At=dt[0]-G[0],j=dt[1]-G[1],ht=Math.hypot(At,j);if(ht<2)return;let St=[At/ht,j/ht],_t=[-St[1],St[0]];(E-G[0])*_t[0]+(b-G[1])*_t[1]<0&&(_t=[-_t[0],-_t[1]]);let Et=ht/2-1.6,O=ht/2+1.6,tt=k=>[G[0]+St[0]*k,G[1]+St[1]*k];_(G,dt,0,.2,.35,m,-.15,_t);for(let[k,it]of[[0,Et],[O,ht]]){_(tt(k),tt(it),.05,.5,.7,S,.9,_t),_(tt(k),tt(it),.55,.8,.85,x,.95,_t),_(tt(k),tt(it),.95,.07,.07,p,.25,_t),_(tt(k),tt(it),.25,.07,.07,p,.25,_t);for(let K=k;K<=it;K+=2.2){let U=tt(K);M.push([U[0]+_t[0]*.25,U[1]+_t[1]*.25])}}for(let k=6;k<ht-6;k+=13){let it=tt(k);y.push([it[0]-_t[0]*1.6,it[1]-_t[1]*1.6,en(St[0],St[1])])}});let g=new oe,v=new Ve,A=new N(0,1,0),w=new N(1,1,1);if(M.length){let G=new Le(new Gt(.09,1.05,.09).translate(0,.52,0),p,M.length);M.forEach(([J,dt],At)=>G.setMatrixAt(At,g.makeTranslation(J,0,dt))),t.add(G)}if(y.length){let G=new Le(new Gt(1.8,.14,.32).translate(0,.07,0),m,y.length);y.forEach(([J,dt,At],j)=>{v.setFromAxisAngle(A,At),G.setMatrixAt(j,g.compose(new N(J,0,dt),v,w))}),t.add(G)}let P=0,I=[1,0];u.forEach((G,J)=>{let dt=u[(J+1)%u.length],At=Math.hypot(dt[0]-G[0],dt[1]-G[1]);At>P&&(P=At,I=[(dt[0]-G[0])/At,(dt[1]-G[1])/At])});let z=26,L=14,H=[-I[1],I[0]],q=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([G,J])=>[E+I[0]*G*z/2+H[0]*J*L/2,b+I[1]*G*z/2+H[1]*J*L/2]).every(([G,J])=>sr(G,J,Bh(u,u.map(()=>3))));if(q){let G=new _e;G.position.set(E,0,b),G.rotation.y=en(I[0],I[1]),t.add(G);let J=new st(new Re(z,L).rotateX(-Math.PI/2),new wt({color:5078938}));J.position.y=.08,G.add(J);let dt=new st(new Re(.15,L-1).rotateX(-Math.PI/2),new xe({color:16777215}));dt.position.y=.09,G.add(dt);let At=ar(64,64,(_t,Et,O)=>{_t.strokeStyle="#2f8f62",_t.lineWidth=3;for(let tt=-64;tt<128;tt+=16)_t.beginPath(),_t.moveTo(tt,0),_t.lineTo(tt+64,64),_t.moveTo(tt+64,0),_t.lineTo(tt,64),_t.stroke()}),j=(_t,Et,O,tt)=>{let k=At.clone();k.needsUpdate=!0,k.wrapS=k.wrapT=jn,k.repeat.set(_t/1.2,3.5/1.2);let it=new st(new Re(_t,3.5),new wt({map:k,transparent:!0,alphaTest:.3,side:ye}));it.position.set(Et,1.75,O),it.rotation.y=tt,G.add(it)};j(z,0,-L/2,0),j(z,0,L/2,0),j(L,-z/2,0,Math.PI/2),j(L,z/2,0,Math.PI/2);let ht=ar(512,160,(_t,Et,O)=>{_t.fillStyle="#f0e6d6",_t.fillRect(0,0,Et,O);let tt=["#e2405b","#2bb3c0","#f2b01e","#6c4bd1","#36b36b","#ff7a2f"];for(let k=0;k<26;k++){_t.fillStyle=tt[k%tt.length],_t.beginPath();let it=k*47%Et,K=20+k*37%120;_t.moveTo(it,K);for(let U=0;U<5;U++)_t.lineTo(it+Math.cos(U*1.3+k)*50,K+Math.sin(U*1.7+k)*35);_t.closePath(),_t.fill()}}),St=new st(new Gt(10,2.6,.3),[S,S,S,S,new wt({map:ht}),new wt({map:ht})]);St.position.set(-z/2-5,1.3,0),St.rotation.y=Math.PI/2,G.add(St)}let ft=Bh(u,u.map(()=>2.5)),Q=0;for(let G=Math.min(...ft.map(J=>J[0]));G<Math.max(...ft.map(J=>J[0]));G+=8)for(let J=Math.min(...ft.map(dt=>dt[1]));J<Math.max(...ft.map(dt=>dt[1]));J+=8){let dt=G+(Tn(s+"x"+Q)-.5)*5,At=J+(Tn(s+"z"+Q)-.5)*5;if(Q++,!!sr(dt,At,ft)){if(q){let j=(dt-E)*I[0]+(At-b)*I[1],ht=(dt-E)*H[0]+(At-b)*H[1];if(Math.abs(j)<z/2+7&&Math.abs(ht)<L/2+3)continue}e.push([dt,At,1.25+Tn(s+"e"+Q)*.8])}}return{poli:a.map(G=>G.slice()),x:E,z:b}}function Pv(i,t){let e=[];for(let n of i){let s=n.cum[n.cum.length-1],r=[];for(let o=0;o<=s;o+=6){let a=Ee(n,o);if(!t(a.x,a.z)){r.push(null);continue}let l=null;for(let d of i){if(d===n)continue;let p=Ye(d,a.x,a.z);if(p.d<10||p.d>95||p.dx*a.dx+p.dz*a.dz>-.5)continue;let S=(p.x-a.x)/p.d,x=(p.z-a.z)/p.d;Math.abs(S*a.dx+x*a.dz)>.5||(!l||p.d<l.q.d)&&(l={q:p,B:d,vx:S,vz:x})}if(!l){r.push(null);continue}let c=[a.x+l.vx*(n.w/2+.7),a.z+l.vz*(n.w/2+.7)],h=[l.q.x-l.vx*(l.B.w/2+.7),l.q.z-l.vz*(l.B.w/2+.7)],u=[(c[0]+h[0])/2,(c[1]+h[1])/2],f=Math.hypot(u[0]-c[0],u[1]-c[1]);r.push(f>3?{ea:c,m:u,vx:l.vx,vz:l.vz,dx:a.dx,dz:a.dz,hw:f}:null)}e.push({A:n,S:r})}return e}var zh=null;function Lv(){if(zh)return zh;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d");t.strokeStyle="#8d939a",t.lineWidth=5,t.strokeRect(2,2,60,60),t.lineWidth=3.5,t.beginPath(),t.moveTo(2,2),t.lineTo(62,62),t.moveTo(62,2),t.lineTo(2,62),t.stroke();let e=new Sn(i);return e.wrapS=e.wrapT=jn,e.colorSpace=Fe,zh=e}function Dv(){let i=new _e,t=Lv(),e=(o,a)=>{let l=t.clone();return l.needsUpdate=!0,l.repeat.set(o,a),new wt({map:l,transparent:!0,alphaTest:.35,side:ye})},n=new st(new he(.95,3.4,24,4,1,!0).rotateY(Math.PI/4),e(4,9));n.position.y=12,i.add(n);let s=new st(new he(.55,.95,11,4,1,!0).rotateY(Math.PI/4),e(4,5));s.position.y=29.5,i.add(s);let r=[];return[[23,6.2],[28,7.4],[33,6]].forEach(([o,a])=>{let l=new st(new Gt(a*2,.9,1.1),e(a*1.4,1));l.position.y=o,i.add(l);for(let c of[1,-1]){let h=new st(new he(.12,.12,2.2,6),new wt({color:4016722}));h.position.set(c*(a-.4),o-1.5,0),i.add(h),r.push([c*(a-.4),o-2.6,0])}}),r.push([0,36,0]),i.userData.puntas=r,i}function Nv(){let i=new _e,t=h=>new wt({color:h}),e=new st(new Vs(7,20).rotateX(-Math.PI/2),t(14268810));e.position.y=.04,e.receiveShadow=!0,i.add(e);let n=new st(new Gt(1.4,.15,1.4),t(3108822));n.position.set(-2.5,2.2,0),i.add(n);for(let[h,u]of[[-3.1,-.6],[-1.9,-.6],[-3.1,.6],[-1.9,.6]]){let f=new st(new he(.07,.07,2.3,6),t(15909166));f.position.set(h,1.15,u),i.add(f)}let s=new st(new Gt(.9,.08,2.8),t(15909166));s.position.set(-3.7,1.1,0),s.rotation.z=-.9,s.rotation.y=Math.PI/2,i.add(s);let r=new st(new Gt(3.2,.1,.9),t(14693419));r.position.set(-.6,1.2,0),r.rotation.z=-.62,i.add(r);let o=t(3108822);for(let h of[-1,1])for(let u of[-1,1]){let f=new st(new he(.07,.07,2.9,6),o);f.position.set(2.2+u*.5*0,1.4,h*1.6+u*.4),f.rotation.x=u*.16,i.add(f)}let a=new st(new he(.08,.08,3.6,6).rotateX(Math.PI/2),t(15909166));a.position.set(2.2,2.8,0),i.add(a);for(let h of[-.7,.7]){let u=new st(new Gt(.45,.06,.25),t(14693419));u.position.set(2.2,.6,h),i.add(u);for(let f of[-.18,.18]){let d=new st(new he(.015,.015,2.2,4),t(6710886));d.position.set(2.2,1.7,h+f),i.add(d)}}let l=new st(new Gt(3.2,.08,.3),t(3450963));l.position.set(.6,.5,3.4),l.rotation.z=.18,i.add(l);let c=new st(new he(.15,.2,.5,8),t(15909166));return c.position.set(.6,.25,3.4),i.add(c),i}function Nd(i,t,e,n,s){s=s||{via:/\bde las torres\b/,desde:/\bde las minas\b/,hasta:/\binsurgentes\b/,clave:"torres"};let r=i.filter(E=>!E.elev&&s.via.test(Bn(E.nombre))&&!/cerrada|cda\.?|privada|callejon|andador|retorno/.test(Bn(E.nombre))&&E.tipo!=="service");if(!r.length)return;let o=E=>{let b=[];for(let g of i)if(!g.elev&&E.test(Bn(g.nombre)))for(let v of r)for(let A=1;A<g.p.length;A++)for(let w=1;w<v.p.length;w++){let P=$i(v.p[w-1],v.p[w],g.p[A-1],g.p[A]);P&&b.push([P.x,P.z])}return b.length?[b.reduce((g,v)=>g+v[0],0)/b.length,b.reduce((g,v)=>g+v[1],0)/b.length]:null},a=o(s.desde)||s.p1||null,l=o(s.hasta)||s.p2||null,c=(E,b)=>{if(!a||!l)return!0;let g=l[0]-a[0],v=l[1]-a[1],A=g*g+v*v||1,w=((E-a[0])*g+(b-a[1])*v)/A;return w>=-.03&&w<=1.03&&Math.abs((E-a[0])*v-(b-a[1])*g)/Math.sqrt(A)<220},h=r.filter(E=>E.oneway),u=[],f=[],d=[],p=[],S=(E,b,g,v,A,w)=>E.push(b[0],w,b[1],g[0],w,g[1],v[0],w,v[1],v[0],w,v[1],g[0],w,g[1],A[0],w,A[1]),x=(E,b,g,v)=>!g.some(([A,w])=>Math.hypot(A-E,w-b)<v),m=[];if(h.length>=2)for(let{A:E,S:b}of Pv(h,c)){let g=E.p[E.p.length-1][1]<E.p[0][1]||E.p[E.p.length-1][0]>E.p[0][0]&&Math.abs(E.p[E.p.length-1][1]-E.p[0][1])<1,v=0,A=-1e9,w=-1e9;for(let P=1;P<b.length;P++){let I=b[P-1],z=b[P];if(!(!I||!z)){if(v+=6,S(u,I.ea,z.ea,I.m,z.m,.03),g){let L=(H,W)=>[H.m[0]+H.vx*W,H.m[1]+H.vz*W];if(S(f,L(I,-1.3),L(z,-1.3),L(I,1.3),L(z,1.3),.05),v-A>270&&(A=v,d.push({x:I.m[0],z:I.m[1],nx:I.vx,nz:I.vz})),v-w>380&&I.hw>11&&v-A>40){w=v;let H=Math.min(I.hw*.5,I.hw-8.5);m.push({x:I.m[0]-I.vx*H,z:I.m[1]-I.vz*H,r:en(I.dx,I.dz)})}if(P%5===0){let H=P/5%2?1:-1,W=L(I,H*2.6);p.push([W[0],W[1],Math.atan2(-I.vx*H,-I.vz*H)])}}if(P%2===0&&I.hw>4.5){let L=.12+Tn("tr"+E.p[0][0]+P)*Math.max(0,(I.hw-4)/I.hw-.12),H=I.ea[0]+(I.m[0]-I.ea[0])*L,W=I.ea[1]+(I.m[1]-I.ea[1])*L;x(H,W,d.map(q=>[q.x,q.z]),7)&&x(H,W,m.map(q=>[q.x,q.z]),9)&&e.push([H,W,.9+Tn("ta"+P+E.p[0][1])*.7])}}}}else for(let E of r){let b=E.cum[E.cum.length-1];for(let g=20;g<b;g+=270){let v=Ee(E,g);if(!c(v.x,v.z))continue;let A=-v.dz,w=v.dx;d.push({x:v.x+A*(E.w/2+6),z:v.z+w*(E.w/2+6),nx:A,nz:w})}}let M=(E,b)=>{if(!E.length)return;let g=new Te;g.setAttribute("position",new ne(E,3)),g.computeVertexNormals();let v=new st(g,new wt({color:b,side:ye}));v.receiveShadow=!0,t.add(v)};M(u,8367704),M(f,14208959);let y=[],_=null;for(let E of d){let b=Dv();b.position.set(E.x,0,E.z),b.rotation.y=en(E.nx,E.nz),t.add(b),b.updateMatrixWorld(!0);let g=b.userData.puntas.map(v=>new N(...v).applyMatrix4(b.matrixWorld));if(_&&_.pos.distanceTo(b.position)<420){let v=_.n[0]*E.nx+_.n[1]*E.nz<0;g.forEach((A,w)=>{let P=v&&w<6?w%2?w-1:w+1:w,I=_.P[P];for(let z=0;z<12;z++){let L=z/12,H=(z+1)/12,W=q=>I.y+(A.y-I.y)*q-4.5*4*q*(1-q);y.push(I.x+(A.x-I.x)*L,W(L),I.z+(A.z-I.z)*L,I.x+(A.x-I.x)*H,W(H),I.z+(A.z-I.z)*H)}})}_={P:g,pos:b.position.clone(),n:[E.nx,E.nz]}}if(y.length){let E=new Te;E.setAttribute("position",new ne(y,3)),t.add(new Or(E,new ss({color:2764339})))}for(let E of m){let b=Nv();b.position.set(E.x,0,E.z),b.rotation.y=E.r,t.add(b)}if(p.length){let E=p.length,b=new Le(new he(.09,.13,8,6).translate(0,4,0),new wt({color:7172986}),E),g=new Le(new Gt(.08,.08,1.8).translate(0,7.9,.9),new wt({color:7172986}),E),v=new Le(new Gt(.35,.16,.7).translate(0,7.8,1.7),new xe({color:16773570}),E),A=new oe,w=new Ve,P=new N(0,1,0),I=new N(1,1,1);p.forEach(([z,L,H],W)=>{w.setFromAxisAngle(P,H),A.compose(new N(z,0,L),w,I),b.setMatrixAt(W,A),g.setMatrixAt(W,A),v.setMatrixAt(W,A)}),t.add(b,g,v)}n&&(n[s.clave||"torres"]={n:d.length,juegos:m.length,lamp:p.length,tramo:!!(a&&l),j0:m[0]})}function Uv(i,t,e,n){let s=i.filter(g=>!g.elev&&/\bde las minas\b/.test(Bn(g.nombre))),r=i.filter(g=>!g.elev&&/reforma pesquera/.test(Bn(g.nombre))),o=null;for(let g of s)for(let v of r)for(let A=1;A<g.p.length;A++)for(let w=1;w<v.p.length;w++){let P=$i(g.p[A-1],g.p[A],v.p[w-1],v.p[w]);if(P){let I=Math.hypot(g.p[A][0]-g.p[A-1][0],g.p[A][1]-g.p[A-1][1])||1,z=Math.hypot(v.p[w][0]-v.p[w-1][0],v.p[w][1]-v.p[w-1][1])||1;o={x:P.x,z:P.z,ua:[(g.p[A][0]-g.p[A-1][0])/I,(g.p[A][1]-g.p[A-1][1])/I],ub:[(v.p[w][0]-v.p[w-1][0])/z,(v.p[w][1]-v.p[w-1][1])/z],wa:g.w,wb:v.w}}}if(!o)return null;let a=t.filter(g=>g.pts&&g.pts.length).map(g=>{let v=0,A=0;for(let[w,P]of g.pts){let[I,z]=Ue(e,w,P);v+=I,A+=z}return[v/g.pts.length,A/g.pts.length]}),l=22,c=17,h=null;for(let g of[1,-1])for(let v of[1,-1]){let A=[-o.ua[1]*g,o.ua[0]*g],w=o.wa/2+2.6+c/2,P=o.wb/2+2.6+l/2,I=o.x+A[0]*w+o.ua[0]*0,z=o.z+A[1]*w,L=(I-o.x)*o.ub[0]+(z-o.z)*o.ub[1]>=0?1:-1,H=o.x+A[0]*w+o.ub[0]*0+o.ua[0]*v*P,W=o.z+A[1]*w+o.ua[1]*v*P,q=a.filter(([ft,Q])=>Math.hypot(ft-H,Q-W)<15).length;(!h||q<h.n)&&(h={n:q,x:H,z:W,s1:g,s2:v,sb:L})}let u=new _e,f=13.5,d=new wt({color:14701356}),p=new wt({color:15502190}),S=new wt({color:3886947}),x=new st(new Gt(l,4.2,c),d);x.position.y=2.1,x.castShadow=!0,u.add(x);let m=new st(new Gt(l,f-4.2,c),p);m.position.y=4.2+(f-4.2)/2,m.castShadow=!0,u.add(m);for(let g=6;g<f-1;g+=3.1)for(let v of[1,-1]){let A=new st(new Gt(l-4,1.1,.1),S);A.position.set(0,g,v*(c/2+.03)),u.add(A);let w=new st(new Gt(.1,1.1,c-4),S);w.position.set(v*(l/2+.03),g,0),u.add(w)}let M=new st(new Gt(l*.6,2.6,.12),new wt({color:12376038,emissive:2241348}));M.position.set(0,1.5,-(c/2+.05)),u.add(M);let y=new st(new Gt(l+.2,.5,c+.2),new wt({color:16163386}));y.position.y=4.3,u.add(y);let _=new st(new Gt(l*.55,3.2,.25),new wt({color:16777215,emissive:2236962}));_.position.set(0,9.5,-(c/2+.15)),u.add(_);let E=new st(new Gt(l*.55+.5,3.7,.2),new wt({color:2310298}));E.position.set(0,9.5,-(c/2+.05)),u.add(E);let b=wo("\u{1F6D2} Mini Chedraui");return b.position.set(0,f+5,0),u.add(b),u.position.set(h.x,0,h.z),u.rotation.y=en(o.ua[0],o.ua[1])+(h.s1<0?Math.PI:0),n.add(u),{x:h.x,z:h.z,r:Math.max(l,c)/2+3}}var Ud={lat:19.3622992,lon:-99.0569941},Fv=i=>/perif/i.test(i.nombre+" "+(i.ref||""));function Ye(i,t,e){let n=null;for(let s=1;s<i.p.length;s++){let[r,o]=i.p[s-1],[a,l]=i.p[s],c=a-r,h=l-o,u=c*c+h*h||1,f=Math.sqrt(u),d=Math.max(0,Math.min(1,((t-r)*c+(e-o)*h)/u)),p=r+c*d,S=o+h*d,x=Math.hypot(t-p,e-S);(!n||x<n.d)&&(n={d:x,s:i.cum[s-1]+f*d,x:p,z:S,dx:c/f,dz:h/f})}return n}function ar(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new Sn(s);return r.colorSpace=Fe,n&&(r.wrapS=r.wrapT=jn,r.repeat.set(n,n)),r.anisotropy=4,r}function Ov(i,t,e,n){let s={barco:null,sem:null},r=i.filter(_=>!_.elev&&Fv(_)),[o,a]=Ue(t,Ud.lat,Ud.lon);if(r.length&&kv(r,i,t,e,n,[o,a]),Math.hypot(o,a)>2500)return s;let l=null;for(let _ of r){let E=Ye(_,o,a);(!l||E.d<l.q.d)&&(l={c:_,q:E})}if(!l||l.q.d>140){let _=null;for(let v of i){if(v.elev||v.w<9)continue;let A=Ye(v,o,a);(!_||A.d<_.q.d)&&(_={c:v,q:A})}let E=_&&_.q.d<200?_.q.dx:.17,b=_&&_.q.d<200?_.q.dz:-.98,g=b>0?-1:1;return s.barco={x:o,z:a,ux:E*g,uz:b*g},e.add(Fd(o,a,E*g,b*g)),s}let c=null;for(let _ of i)if(_.elev==="puente")for(let E of r)for(let b=1;b<_.p.length;b++)for(let g=1;g<E.p.length;g++){let v=$i(E.p[g-1],E.p[g],_.p[b-1],_.p[b]);if(!v)continue;let A=Math.hypot(v.x-o,v.z-a);A<700&&(!c||A<c.d)&&(c={x:v.x,z:v.z,d:A})}let h=l.q.dx,u=l.q.dz;c?(c.x-o)*h+(c.z-a)*u<0&&(h=-h,u=-u):u>0&&(h=-h,u=-u),s.barco={x:o,z:a,ux:h,uz:u},e.add(Fd(o,a,h,u)),s.dbg=[];let f=l.c,d=1,p=null;for(let _ of r){let E=Ye(_,o,a);if(!(E.d>140))for(let b of _.oneway?[1]:[1,-1]){let g=E.dx*b,v=E.dz*b,A=(o-E.x)*v-(a-E.z)*g>0,w=!c||(c.x-E.x)*g+(c.z-E.z)*v>0;A&&w&&(!p||E.d<p.d)&&(p={cc:_,dd:b,d:E.d})}}p&&(f=p.cc,d=p.dd);let S=f.cum[f.cum.length-1],x=(_,E)=>{let b=Ee(f,Math.max(0,Math.min(S,_))),g=b.dx*d,v=b.dz*d,A=-v,w=g,P=new _e;return P.position.set(b.x+A*E,0,b.z+w*E),P.rotation.y=en(g,v),P},m=null;for(let _ of i)if(_.elev==="puente")for(let E=1;E<_.p.length;E++)for(let b=1;b<f.p.length;b++){let g=$i(f.p[b-1],f.p[b],_.p[E-1],_.p[E]);if(!g)continue;let v=f.cum[b-1]+Math.hypot(g.x-f.p[b-1][0],g.z-f.p[b-1][1]);Math.hypot(g.x-o,g.z-a)<700&&(m==null||Math.abs(v-Ye(f,o,a).s)<Math.abs(m-Ye(f,o,a).s))&&(m=v)}if(m!=null){let _=Bv(Math.min(f.w*.75,10)),E=x(m-d*16,f.w/2+.9);E.add(_.g),e.add(E),s.sem=_;let b=x(m-d*40,f.w/2+1.25);b.add(Hv()),e.add(b),s.libres=[[E.position.x,E.position.z],[b.position.x,b.position.z]]}let M=Ye(f,o+h*50,a+u*50),y=x(M.s-d*4,-(f.w/2+1.2));return y.add(Gv()),e.add(y),s.dbg.push(["let",y.position.x,y.position.z,m,d,f.nombre]),s}function Fd(i,t,e,n){let s=new _e,r=96,o=30,a=12,l=ar(64,64,(v,A,w)=>{v.fillStyle="#dcdcd7",v.fillRect(0,0,A,w),v.fillStyle="#b9bab4";for(let P=0;P<w;P+=8)v.fillRect(0,P,A,2)},.25),c=new ni([new xt(-r/2,0),new xt(r/2-12,0),new xt(r/2+7,a+1.5),new xt(-r/2-2,a)]),h=new st(new os(c,{depth:o,bevelEnabled:!1}).translate(0,0,-o/2),new wt({map:l}));h.castShadow=!0,h.receiveShadow=!0,s.add(h);let u=ar(512,64,(v,A,w)=>{v.fillStyle="#f1efe8",v.fillRect(0,0,A,w);let P=["#e5533d","#2f9e6e","#3f6fd8","#e0a526","#8c4fd6","#1fb5c9"];for(let I=0;I<70;I++)v.fillStyle=P[I%P.length],v.beginPath(),v.ellipse(Math.random()*A,20+Math.random()*40,8+Math.random()*22,6+Math.random()*12,Math.random()*3,0,7),v.fill()});for(let v of[1,-1]){let A=new st(new Re(r-14,2.2),new wt({map:u}));A.position.set(-6,1.1,v*(o/2+.05)),v<0&&(A.rotation.y=Math.PI),s.add(A)}let f=new wt({color:15987695}),d=new wt({color:4608606}),p=new st(new Gt(r*.42,8,o*.72),f);p.position.set(-r*.08,a+4,0),p.castShadow=!0,s.add(p);let S=new st(new Gt(r*.42+.1,1.6,o*.72+.1),d);S.position.set(-r*.08,a+5.2,0),s.add(S);let x=new st(new Gt(r*.2,7,o*.5),f);x.position.set(-r*.2,a+11.5,0),x.castShadow=!0,s.add(x);let m=new st(new Gt(r*.18,5,o*.6),f);m.position.set(-r*.42,a+2.5,0),s.add(m);let M=new wt({color:10133670});for(let v of[1,-1]){let A=new st(new Gt(r,.1,.1),M);A.position.set(0,a+1.3,v*o/2),s.add(A)}let y=Math.floor(r/6)*2,_=new Le(new $r(.42,.13,6,14),new wt({color:14165547}),y),E=new oe,b=0;for(let v of[1,-1])for(let A=-r/2+3;A<r/2-2&&b<y;A+=6)_.setMatrixAt(b++,E.makeTranslation(A,a+.85,v*(o/2+.08)));_.count=b,s.add(_);let g=wo("\u26F4\uFE0F Barco Utop\xEDa");return g.position.set(0,a+20,0),s.add(g),s.position.set(i,0,t),s.rotation.y=en(e,n),s}function Bv(i){let t=new _e,e=new wt({color:5988712}),n=new st(new he(.16,.2,6.6,8),e);n.position.y=3.3,n.castShadow=!0,t.add(n);let s=new st(new Gt(.14,.14,i),e);s.position.set(0,6.3,-i/2),t.add(s);let r=[],o=(a,l)=>{let c=new st(new Gt(.45,1.45,.55),new wt({color:1842721}));c.position.set(0,l,a),t.add(c),[1769306,16756736,16722458].forEach((h,u)=>{let f=new st(new Pn(.17,10,8),new xe({color:2236962}));f.position.set(-.26,l-.46+u*.46,a),f.userData.col=h,t.add(f),(r[u]||=[]).push(f)})};return o(-i*.8,5.6),o(-.35,3.4),{g:t,luces:r}}function zv(i,t){let e=t%38,n=e<20?0:e<23?1:2;i.luces.forEach((s,r)=>s.forEach(o=>o.material.color.setHex(r===n?o.userData.col:2236962)))}function Hv(){let i=new _e,t=new wt({color:6119784}),e=new st(new Gt(4.4,.14,1.9),new wt({color:9146519}));e.position.set(0,2.6,.3),e.castShadow=!0,i.add(e);for(let a of[-2,2]){let l=new st(new Gt(.1,2.6,.1),t);l.position.set(a,1.3,1.1),i.add(l)}let n=new st(new Re(4.1,2.1),new wt({color:12375268,transparent:!0,opacity:.45,side:ye}));n.position.set(0,1.35,1.12),i.add(n);let s=new st(new Gt(.18,1.9,1.3),new wt({color:16185074,emissive:3355443}));s.position.set(2.15,1.25,.45),i.add(s);let r=new st(new Gt(2.6,.08,.45),t);r.position.set(-.3,.5,.8),i.add(r);let o=new st(new Gt(.06,.6,.6),new xe({color:1402304}));return o.position.set(-2.3,3.1,.3),i.add(o),i}function Gv(){let i=new _e,t=ar(1100,470,(c,h,u)=>{c.fillStyle="#e4672a",c.fillRect(0,0,h,u),c.strokeStyle="#fff",c.lineWidth=10,c.strokeRect(16,16,h-32,u-32),c.fillStyle="#fff",c.textAlign="center",c.textBaseline="middle",c.font="bold 50px Arial",c.fillText("USE V\xCDAS ALTERNAS",h/2,70),c.font="bold 76px Arial",c.fillText("DOBLE SENTIDO",h/2,160),c.fillText("EJE 6 SUR",h/2,245),c.font="bold 66px Arial",c.fillText("DE 06:00 A 09:00 HRS",h/2,330),c.font="bold 40px Arial",c.fillText("www.circuitobicentenario.com.mx",h/2,415)}),e=6.6,n=e*470/1100,s=new st(new Re(e,n),new wt({map:t}));s.rotation.y=-Math.PI/2,s.position.set(-.08,7.2,2.2),i.add(s);let r=new st(new Re(e,n),new wt({color:9277329}));r.rotation.y=Math.PI/2,r.position.set(.08,7.2,2.2),i.add(r);let o=new wt({color:7041143}),a=new st(new he(.2,.24,8.6,8),o);a.position.y=4.3,a.castShadow=!0,i.add(a);let l=new st(new Gt(.16,.16,4.4),o);return l.position.set(.2,8.2,1.9),i.add(l),i}function kv(i,t,e,n,s,r){let o=i.filter(m=>m.oneway&&m.w>=6);if(o.length<2)return;let a=m=>{let M=[];for(let y of t)if(m.test(Bn(y.nombre+" "+(y.ref||""))))for(let _ of o)for(let E=1;E<y.p.length;E++)for(let b=1;b<_.p.length;b++){let g=$i(_.p[b-1],_.p[b],y.p[E-1],y.p[E]);g&&M.push(g.z)}return M},l=a(/ermita/),c=a(/eje\s*5\b|leyes de reforma/),h=l.length?Math.max(...l):Ue(e,19.3475,-99.056)[1],u=c.length?Math.min(...c):Ue(e,19.3765,-99.056)[1];if(!(u<h))return;let f=[],d=[],p=[],S=(m,M,y,_,E,b)=>m.push(M[0],b,M[1],y[0],b,y[1],_[0],b,_[1],_[0],b,_[1],y[0],b,y[1],E[0],b,E[1]);for(let m of o){let M=m.cum[m.cum.length-1],y=[];for(let E=0;E<=M;E+=6){let b=Ee(m,E);if(b.z<u||b.z>h){y.push(null);continue}let g=null;for(let P of o){if(P===m)continue;let I=Ye(P,b.x,b.z);if(I.d<12||I.d>95||I.dx*b.dx+I.dz*b.dz>-.5)continue;let z=(I.x-b.x)/I.d,L=(I.z-b.z)/I.d;Math.abs(z*b.dx+L*b.dz)>.5||(!g||I.d<g.q.d)&&(g={q:I,B:P,vx:z,vz:L})}if(!g){y.push(null);continue}let v=[b.x+g.vx*(m.w/2+.7),b.z+g.vz*(m.w/2+.7)],A=[g.q.x-g.vx*(g.B.w/2+.7),g.q.z-g.vz*(g.B.w/2+.7)],w=[(v[0]+A[0])/2,(v[1]+A[1])/2];y.push(Math.hypot(A[0]-v[0],A[1]-v[1])>7?{ea:v,m:w,vx:g.vx,vz:g.vz,sv:E}:null)}let _=m.p[m.p.length-1][1]<m.p[0][1];for(let E=1;E<y.length;E++){let b=y[E-1],g=y[E];if(!(!b||!g)){if(S(f,b.ea,g.ea,b.m,g.m,.03),_){let v=(A,w)=>[A.m[0]+A.vx*w,A.m[1]+A.vz*w];S(d,v(b,-1.6),v(g,-1.6),v(b,1.6),v(g,1.6),.05),S(p,v(b,2),v(g,2),v(b,3.1),v(g,3.1),.05)}if(E%2===0){let v=Math.hypot(b.m[0]-b.ea[0],b.m[1]-b.ea[1]);if(v<6)continue;let A=.15+Tn("pq"+m.p[0][0]+E)*Math.max(0,(v-4.5)/v-.15),w=b.ea[0]+(b.m[0]-b.ea[0])*A,P=b.ea[1]+(b.m[1]-b.ea[1])*A;Math.hypot(w-r[0],P-r[1])>62&&s.push([w,P,.9+Tn("a"+E+m.p[0][1])*.6])}}}}let x=(m,M)=>{if(!m.length)return;let y=new Te;y.setAttribute("position",new ne(m,3)),y.computeVertexNormals();let _=new st(y,new wt({color:M,side:ye}));_.receiveShadow=!0,n.add(_)};x(f,8367704),x(d,14275265),x(p,5935044)}var Bn=i=>String(i||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),Xl=/^(motorway|trunk|primary|secondary|tertiary|unclassified|residential|living_street)(_link)?$/;function $i(i,t,e,n){let s=t[0]-i[0],r=t[1]-i[1],o=n[0]-e[0],a=n[1]-e[1],l=s*a-r*o;if(Math.abs(l)<1e-9)return null;let c=((e[0]-i[0])*a-(e[1]-i[1])*o)/l,h=((e[0]-i[0])*r-(e[1]-i[1])*s)/l;return c>=0&&c<=1&&h>=0&&h<=1?{x:i[0]+s*c,z:i[1]+r*c,t:c}:null}var Od={lat:19.34597,lon:-99.0638};function Hh(i,t,e,n){let s=o=>{let a=1;for(;a<t.length-1&&t[a]<o;)a++;let l=(o-t[a-1])/(t[a]-t[a-1]||1);return[i[a-1][0]+(i[a][0]-i[a-1][0])*l,i[a-1][1]+(i[a][1]-i[a-1][1])*l]},r=[s(e)];for(let o=0;o<i.length;o++)t[o]>e+.05&&t[o]<n-.05&&r.push(i[o]);return r.push(s(n)),r}function Vv(i,t){let[e,n]=Ue(t,Od.lat,Od.lon);if(Math.hypot(e,n)>3500)return;let s=d=>/perif|canal de garay/i.test((d.c.nombre||"")+" "+(d.c.ref||"")),r=i.filter(d=>/ermita/.test(Bn(d.c.nombre)));if(!r.length)return;let o=[];if(i.forEach((d,p)=>{if(!(!s(d)||!Xl.test(d.c.tipo||"")))for(let S=1;S<d.p.length;S++)for(let x of r)for(let m=1;m<x.p.length;m++){let M=$i(d.p[S-1],d.p[S],x.p[m-1],x.p[m]);M&&Math.hypot(M.x-e,M.z-n)<650&&o.push({i:p,k:S,r:M})}}),!o.length||i.some(d=>s(d)&&d.c.puente&&d.p.some(p=>o.some(S=>Math.hypot(p[0]-S.r.x,p[1]-S.r.z)<250))))return;let a=d=>["motorway","trunk","primary","secondary","tertiary"].indexOf(String(d).replace("_link","")),l=o.map(d=>a(i[d.i].c.tipo)).filter(d=>d>=0);if(!l.length)return;let c=Math.min(...l),h=new Set,u=[];for(let d of o){let p=i[d.i];if(a(p.c.tipo)!==c||h.has(d.i))continue;let S=So(p.p),x=S[S.length-1],m=S[d.k-1]+Math.hypot(d.r.x-p.p[d.k-1][0],d.r.z-p.p[d.k-1][1]),M=Math.max(0,m-75),y=Math.min(x,m+75);h.add(d.i),M>2&&u.push({c:p.c,p:Hh(p.p,S,0,M)}),u.push({c:{...p.c,puente:!0,capa:1},p:Hh(p.p,S,M,y)}),x-y>2&&u.push({c:p.c,p:Hh(p.p,S,y,x)})}let f=i.filter((d,p)=>!h.has(p));i.length=0,i.push(...f,...u)}function Wv(i){let t=new Map,e=40,n=new Map;i.forEach((a,l)=>{if(!(a.c.puente||!Xl.test(a.c.tipo||"")))for(let c=1;c<a.p.length;c++){let h=a.p[c-1],u=a.p[c],f=[h,u,a.c.nombre||""];for(let d=Math.floor(Math.min(h[0],u[0])/e);d<=Math.floor(Math.max(h[0],u[0])/e);d++)for(let p=Math.floor(Math.min(h[1],u[1])/e);p<=Math.floor(Math.max(h[1],u[1])/e);p++){let S=d+","+p;(n.get(S)||n.set(S,[]).get(S)).push(f)}}});let s=a=>{for(let l=1;l<a.p.length;l++){let c=a.p[l-1],h=a.p[l];for(let u=Math.floor(Math.min(c[0],h[0])/e);u<=Math.floor(Math.max(c[0],h[0])/e);u++)for(let f=Math.floor(Math.min(c[1],h[1])/e);f<=Math.floor(Math.max(c[1],h[1])/e);f++)for(let d of n.get(u+","+f)||[])if(d[2]!==(a.c.nombre||"")&&$i(c,h,d[0],d[1]))return!0}return!1},r=[];if(i.forEach((a,l)=>{if(!a.c.puente||!Xl.test(a.c.tipo||"")||!s(a))return;let c=6.2*Math.max(1,Math.min(3,a.c.capa||1));t.set(l,{elev:"puente",H:c,taperA:!1,taperB:!1}),r.push({x:a.p[0][0],z:a.p[0][1],H:c,i:l,fin:0},{x:a.p[a.p.length-1][0],z:a.p[a.p.length-1][1],H:c,i:l,fin:1})}),!r.length)return t;let o=a=>r.filter(l=>Math.hypot(l.x-a[0],l.z-a[1])<1.5);i.forEach((a,l)=>{if(t.has(l)||!Xl.test(a.c.tipo||""))return;let c=o(a.p[0]),h=o(a.p[a.p.length-1]);!c.length&&!h.length||(c.concat(h).forEach(u=>u.usado=!0),t.set(l,{elev:"rampa",hA:c.length?c[0].H:0,hB:h.length?h[0].H:0}))});for(let a of r)if(!a.usado){let l=t.get(a.i);a.fin===0?l.taperA=!0:l.taperB=!0}return t}function rr(i,t){if(!i||!i.elev)return 0;let e=i.cum[i.cum.length-1];if(i.elev==="puente"){let s=1,r=Math.min(45,e/2);return i.taperA&&(s=Math.min(s,t/r)),i.taperB&&(s=Math.min(s,(e-t)/r)),i.H*Math.max(0,Math.min(1,s))}let n=Math.min(90,e);return Math.max(i.hA*Math.max(0,1-t/n),i.hB*Math.max(0,1-(e-t)/n))}function Xv(i,t,e){let n=[],s=[],r=[],o=[],a=[],l=(u,f,d,p,S)=>u.push(...f,...d,...p,...p,...d,...S),c=(u,f,d,p)=>{let S=p[0]-d[0],x=p[1]-d[1],m=S*S+x*x||1,M=Math.max(0,Math.min(1,((u-d[0])*S+(f-d[1])*x)/m));return Math.hypot(u-d[0]-S*M,f-d[1]-x*M)};for(let u of i){let f=u.cum[u.cum.length-1],d=Math.max(2,Math.ceil(f/4)),p=u.w/2,S=[];for(let m=0;m<=d;m++){let M=f*m/d,y=Ee(u,M);S.push({x:y.x,z:y.z,nx:-y.dz,nz:y.dx,h:rr(u,M)})}for(let m=1;m<S.length;m++){let M=S[m-1],y=S[m],_=(E,b,g)=>[E.x+E.nx*p*b,g,E.z+E.nz*p*b];l(n,_(M,1,M.h+.06),_(y,1,y.h+.06),_(M,-1,M.h+.06),_(y,-1,y.h+.06));for(let E of[1,-1]){let b=u.elev==="puente"?Math.max(0,M.h-1.2):0,g=u.elev==="puente"?Math.max(0,y.h-1.2):0;l(s,_(M,E,b),_(y,E,g),_(M,E,M.h+.9),_(y,E,y.h+.9)),(M.h>.4||y.h>.4)&&l(r,_(M,E*1.01,M.h+.9),_(y,E*1.01,y.h+.9),_(M,E*1.01,M.h+1.2),_(y,E*1.01,y.h+1.2))}u.elev==="puente"&&M.h>1.5&&l(s,_(M,1,M.h-1.2),_(y,1,y.h-1.2),_(M,-1,M.h-1.2),_(y,-1,y.h-1.2))}let x=[];for(let m=1;m<u.nl;m++)u.oneway?x.push(-u.w/2+m*u.w/u.nl):x.push(m*u.w/2/u.nl,-m*u.w/2/u.nl);u.oneway||x.push(0);for(let m of x)for(let M=2;M<f-3;M+=9){let y=Ee(u,M),_=Ee(u,Math.min(f,M+3)),E=rr(u,M)+.09,b=rr(u,M+3)+.09,g=m===0?.14:.08,v=(A,w,P)=>[A.x-A.dz*w,P,A.z+A.dx*w];l(o,v(y,m+g,E),v(_,m+g,b),v(y,m-g,E),v(_,m-g,b))}if(u.elev==="puente")for(let m=10;m<f-6;m+=26){let M=rr(u,m);if(M<3)continue;let y=Ee(u,m);t.some(_=>{for(let E=1;E<_.p.length;E++)if(c(y.x,y.z,_.p[E-1],_.p[E])<_.w/2+1.5)return!0;return!1})||a.push([y.x,y.z,M-1.2,en(y.dx,y.dz),u.w*.55])}}let h=(u,f)=>{if(!u.length)return;let d=new Te;d.setAttribute("position",new ne(u,3)),d.computeVertexNormals();let p=new st(d,new wt({color:f,side:ye}));p.castShadow=!0,p.receiveShadow=!0,e.add(p)};if(h(n,3816773),h(s,11119269),h(r,14857239),h(o,15921906),a.length){let u=new Le(new Gt(1.4,1,1).translate(0,.5,0),new wt({color:10263960}),a.length),f=new oe,d=new Ve,p=new N(0,1,0);a.forEach(([S,x,m,M,y],_)=>{d.setFromAxisAngle(p,M),u.setMatrixAt(_,f.compose(new N(S,0,x),d,new N(1,m,y)))}),u.castShadow=!0,e.add(u)}}function qv(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n.x*s.y-s.x*n.y}return t<0}function Tn(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return(t>>>0)/4294967296}function Yv(i){if(!Je||!i||!i.centro)return;let t=Zt&&Zt.O&&Math.hypot(...Ue(Zt.O,i.centro.lat,i.centro.lon))<4e3?Zt.O:{lat:i.centro.lat,lon:i.centro.lon},e=Zt,n=new _e,s=new st(new Re(9e3,9e3).rotateX(-Math.PI/2),new wt({color:12174e3,polygonOffset:!0,polygonOffsetFactor:6,polygonOffsetUnits:12}));s.position.y=-.02,s.receiveShadow=!0,n.add(s);let r=[],o={},a=[],l=[],c=[],h=[],u=(i.calles||[]).map(O=>({c:O,p:O.pts.map(([tt,k])=>Ue(t,tt,k))})).filter(O=>O.p.length>=2);Vv(u,t);let f=Wv(u),d=[];for(let O=0;O<u.length;O++){let tt=u[O].c,k=u[O].p,it=/_link$/.test(tt.tipo)?"link":Dd[tt.tipo]?tt.tipo:"residential",K=/\beje\s*5\b/i.test((tt.nombre||"")+" "+(tt.ref||"")),U=tt.carriles||(K?6:0),V=U?Math.max(5,Math.min(26,U*3.2)):tt.ancho||Dd[it],X={p:k,cum:So(k),tipo:it,w:V,nombre:tt.nombre||"",ref:tt.ref||"",oneway:!!tt.oneway,ncar:U,glorieta:!!tt.glorieta};X.nl=ms(X),r.push(X);let mt=f.get(O);if(mt){Object.assign(X,mt),d.push(X);continue}Dn(k,V,kl[it],o[it]||=[]);let ct=X.cum[X.cum.length-1],Ht=kl[it]+.012;if(!X.oneway&&V>=6.5)for(let ut of[-.17,.17]){let vt=[];for(let yt=0;yt<=ct;yt+=Math.max(3,ct/300)){let D=Ee(X,yt);vt.push([D.x-D.dz*ut,D.z+D.dx*ut])}Dn(vt,.13,Ht,l)}let Dt=[];for(let ut=1;ut<X.nl;ut++)X.oneway?Dt.push(-V/2+ut*V/X.nl):Dt.push(ut*V/2/X.nl,-ut*V/2/X.nl);for(let ut of Dt)for(let vt=2;vt<ct-3;vt+=9){let yt=Ee(X,vt),D=Ee(X,Math.min(ct,vt+3));Dn([[yt.x-yt.dz*ut,yt.z+yt.dx*ut],[D.x-D.dz*ut,D.z+D.dx*ut]],.16,Ht,a)}if(it!=="service"){Dn(k,V+5.2,.012,c);for(let ut=6;ut<ct-4&&h.length<1600;ut+=16){if(Tn(X.nombre+ut+k[0][0])<.45)continue;let vt=Ee(X,ut),yt=Tn(ut+X.nombre)<.5?1:-1,D=(V/2+1.7)*yt;h.push([vt.x-vt.dz*D,vt.z+vt.dx*D,.75+Tn(String(ut))*.5])}}}d.length&&Xv(d,r.filter(O=>!O.elev),n);let p=Ov(r,t,n,h);Nd(r,n,h,p),Nd(r,n,h,p,{via:/\bcopilco\b/,desde:/\baztecas\b/,hasta:/\buniversidad\b/,clave:"copilco",p1:Ue(t,19.333,-99.163),p2:Ue(t,19.335887,-99.176652)}),p.super=Uv(r,i.edificios||[],t,n),p.glorietas=[wv(r,n,[/adolfo lopez mateos/,/pantitlan/],"Glorieta L\xF3pez Mateos y Pantitl\xE1n")].filter(Boolean),p.divisor=Av(r,n),Rv(r,n,h),p.parques=[Iv(r,n,h,[/concepcion beistegui/,/\bcoyoacan\b/,/colonia del valle/],"beistegui")].filter(Boolean);let S=new wt({color:3816773,side:ye}),x=new wt({color:4869461,side:ye});for(let O in o){let tt=we(o[O]);tt.computeVertexNormals();let k=new st(tt,O==="service"?x:S);k.receiveShadow=!0,n.add(k)}if(a.length&&n.add(new st(we(a),new xe({color:15921906,side:ye}))),l.length&&n.add(new st(we(l),new xe({color:15909376,side:ye}))),c.length){let O=new st(we(c),new wt({color:13225156,side:ye,polygonOffset:!0,polygonOffsetFactor:3,polygonOffsetUnits:6}));O.receiveShadow=!0,n.add(O)}if(h.length){let O=new Le(new he(.15,.2,1.6,6).translate(0,.8,0),new wt({color:8018490}),h.length),tt=new Le(new Ys(1.4,0).translate(0,2.6,0),new wt({color:5939290,flatShading:!0}),h.length),k=new oe,it=new Ve,K=new N,U=new N;h.forEach(([V,X,mt],ct)=>{k.compose(U.set(V,0,X),it,K.setScalar(mt)),O.setMatrixAt(ct,k),tt.setMatrixAt(ct,k)}),tt.castShadow=!0,n.add(O,tt)}if(i.casa){let[O,tt]=Ue(t,i.casa.lat,i.casa.lon),k=wo("\u{1F3E0} Mi casa");k.position.set(O,11,tt),n.add(k)}let m=null;if(i.radar){let[O,tt]=Ue(t,i.radar.lat,i.radar.lon),k=null;for(let it of r)for(let K=1;K<it.p.length;K++){let[U,V]=it.p[K-1],[X,mt]=it.p[K],ct=X-U,Ht=mt-V,Dt=ct*ct+Ht*Ht||1,ut=Math.max(0,Math.min(1,((O-U)*ct+(tt-V)*Ht)/Dt)),vt=U+ct*ut,yt=V+Ht*ut,D=Math.hypot(O-vt,tt-yt);if(!k||D<k.dd-.5||Math.abs(D-k.dd)<.5&&it.w>k.c.w){let se=Math.sqrt(Dt);k={dd:D,px:vt,pz:yt,ux:ct/se,uz:Ht/se,c:it}}}if(k&&k.dd<60){let it=-k.uz,K=k.ux,U=(O-k.px)*it+(tt-k.pz)*K>=0?1:-1,V=k.c.w/2+1.3,X=new _e;X.position.set(k.px+it*V*U,0,k.pz+K*V*U);let mt=new wt({color:10134445}),ct=new st(new he(.14,.18,6.2,8),mt);ct.position.y=3.1,ct.castShadow=!0,X.add(ct);let Ht=new st(new Gt(.12,.12,2.2),mt);Ht.position.set(0,6.1,-1*U),Ht.rotation.y=0,X.add(Ht);let Dt=new st(new Gt(.9,.6,.7),new wt({color:15921906}));Dt.position.set(0,5.6,-1.9*U),X.add(Dt);let ut=new st(new he(.18,.18,.12,12).rotateX(Math.PI/2),new xe({color:1118481}));ut.position.set(.48,5.6,-1.9*U),ut.rotation.y=Math.PI/2,X.add(ut);let vt=new st(new Pn(.11,8,6),new xe({color:16722458}));vt.position.set(.3,5.98,-1.9*U),X.add(vt);let yt=new Oi(new vi({map:ec.map,color:16777215,transparent:!0,depthWrite:!1,blending:Mi}));yt.scale.set(9,9,1),yt.position.set(0,5.6,-1.9*U),yt.visible=!1,X.add(yt);let D=wo("\u{1F4F8} Radar \xB7 50");D.position.set(0,8.4,0),X.add(D),X.rotation.y=en(k.ux,k.uz),n.add(X),m={g:X,led:vt,flash:yt}}}let M=[],y={};for(let O of r.slice().sort((tt,k)=>k.w-tt.w)){if(!O.nombre||O.elev||M.length>=90)continue;let tt=O.cum[O.cum.length-1],k=Ev(O.nombre),it=Math.max(2.6,Math.min(6,O.w*.42)),K=it*k.ar;if(!(tt<K*.9))for(let U=Math.min(tt/2,40+K/2);U<tt-K/2&&M.length<90;U+=170){let V=Ee(O,U),X=O.nombre+Math.round(V.x/120)+","+Math.round(V.z/120);if(y[X])continue;y[X]=1;let mt=new st(new Re(K,it).rotateX(-Math.PI/2),k.mat);mt.position.set(V.x,kl[O.tipo]+.03,V.z),mt.userData.base=en(V.dx,V.dz),mt.userData.dx=V.dx,mt.userData.dz=V.dz,mt.renderOrder=2,n.add(mt),M.push(mt)}}let _=[],E=r.filter(O=>O.oneway&&O.nombre&&!O.elev).map(O=>{let tt=1e9,k=-1e9,it=1e9,K=-1e9;for(let[U,V]of O.p)tt=Math.min(tt,U),k=Math.max(k,U),it=Math.min(it,V),K=Math.max(K,V);return{c:O,x0:tt,x1:k,z0:it,z1:K}}),b=(O,tt)=>{let k=E.filter(it=>O>it.x0-70&&O<it.x1+70&&tt>it.z0-70&&tt<it.z1+70).map(it=>({c:it.c,q:Ye(it.c,O,tt)})).filter(it=>it.q.d<70);for(let it=0;it<k.length;it++)for(let K=it+1;K<k.length;K++){let U=k[it],V=k[K];if(U.c.nombre!==V.c.nombre||Math.abs(U.q.dx*V.q.dx+U.q.dz*V.q.dz)<.8)continue;let X=Ye(V.c,U.q.x,U.q.z).d;if(U.q.d+V.q.d<=X+2)return!0}return!1};{let tt=new Map,k=(ut,vt)=>Math.floor(ut/25)+","+Math.floor(vt/25);for(let ut of r)for(let vt=1;vt<ut.p.length;vt++){let[yt,D]=ut.p[vt-1],[se,kt]=ut.p[vt],Qt={x1:yt,z1:D,x2:se,z2:kt,r:ut.w/2+2.4};for(let pt=Math.floor((Math.min(yt,se)-12)/25);pt<=Math.floor((Math.max(yt,se)+12)/25);pt++)for(let Me=Math.floor((Math.min(D,kt)-12)/25);Me<=Math.floor((Math.max(D,kt)+12)/25);Me++){let qt=pt+","+Me;(tt.get(qt)||tt.set(qt,[]).get(qt)).push(Qt)}}let it=(ut,vt,yt)=>{let D=yt.x2-yt.x1,se=yt.z2-yt.z1,kt=D*D+se*se||1,Qt=((ut-yt.x1)*D+(vt-yt.z1)*se)/kt;return Qt=Math.max(0,Math.min(1,Qt)),Math.hypot(ut-yt.x1-D*Qt,vt-yt.z1-se*Qt)},K=(ut,vt,yt)=>{let D=Math.floor(ut/25),se=Math.floor(vt/25);for(let kt=-1;kt<=1;kt++)for(let Qt=-1;Qt<=1;Qt++)for(let pt of tt.get(D+kt+","+(se+Qt))||[])if(it(ut,vt,pt)<pt.r+yt)return!1;return!0},U=new Map,V=8,X=(ut,vt)=>{let yt=Math.floor(ut/V)+","+Math.floor(vt/V);(U.get(yt)||U.set(yt,[]).get(yt)).push([ut,vt])},mt=(ut,vt,yt)=>{let D=Math.floor(ut/V),se=Math.floor(vt/V);for(let kt=-1;kt<=1;kt++)for(let Qt=-1;Qt<=1;Qt++)for(let[pt,Me]of U.get(D+kt+","+(se+Qt))||[])if(Math.hypot(pt-ut,Me-vt)<yt)return!0;return!1};for(let ut of i.edificios||[])if(ut.pts&&ut.pts.length){let vt=0,yt=0;for(let[D,se]of ut.pts){let[kt,Qt]=Ue(t,D,se);vt+=kt,yt+=Qt}X(vt/ut.pts.length,yt/ut.pts.length)}let[ct,Ht]=Ue(t,i.centro.lat,i.centro.lon),Dt=r.filter(ut=>!/^(service|motorway|link)$/.test(ut.tipo)).sort((ut,vt)=>ut.w-vt.w);for(let ut of Dt){let vt=ut.cum[ut.cum.length-1];for(let yt of[1,-1]){let D=5;for(;D<vt-5&&_.length<2600;){let se=Tn(ut.nombre+"|"+yt+"|"+Math.round(D)+"|"+Math.round(ut.p[0][0])),kt=6+se*4.5,Qt=9+se*7%1*5,pt=Ee(ut,D+kt/2);if(D+=kt+.25,Math.hypot(pt.x-ct,pt.z-Ht)>750||se<.06)continue;let Me=-pt.dz*yt,qt=pt.dx*yt,te=ut.w/2+2.7+Qt/2,C=pt.x+Me*te,T=pt.z+qt*te;if(!K(C,T,Qt/2-.3)||!K(C+pt.dx*kt/2,T+pt.dz*kt/2,.4)||!K(C-pt.dx*kt/2,T-pt.dz*kt/2,.4)||mt(C,T,Math.min(kt,Qt)*.85)||p.barco&&Math.hypot(C-p.barco.x,T-p.barco.z)<66||p.libres&&p.libres.some(([nt,ot])=>Math.hypot(C-nt,T-ot)<9)||p.super&&Math.hypot(C-p.super.x,T-p.super.z)<p.super.r+6||b(C,T)||p.glorietas&&p.glorietas.some(nt=>Math.hypot(C-nt.x,T-nt.z)<nt.r+8)||p.parques&&p.parques.some(nt=>sr(C,T,nt.poli))||ut.oneway&&r.some(nt=>nt!==ut&&nt.oneway&&nt.nombre&&nt.nombre===ut.nombre&&(()=>{let ot=Ye(nt,pt.x,pt.z);return ot.d>140?!1:Ye(nt,C,T).d<ot.d})()))continue;X(C,T);let Y=pt.dx*kt/2,gt=pt.dz*kt/2,at=Me*Qt/2,bt=qt*Qt/2,Ct=se<.35?1:se<.85?2:3;_.push({loc:[[C-Y-at,T-gt-bt],[C+Y-at,T+gt-bt],[C+Y+at,T+gt+bt],[C-Y+at,T-gt+bt]],h:3*Ct+se*31%1*.6,id:"s"+C.toFixed(1)+T.toFixed(1)})}}}}let g=[15918022,15250592,13227743,16045453,12114110,15123414,14209732,11125984,15778427,14736853,16171425,12572902],v=[],A=[],w=[],P=(O,tt)=>{let k=new Te;for(let it of["position","uv"]){let K=O.attributes[it];k.setAttribute(it,new sn(K.array.slice(tt.start*K.itemSize,(tt.start+tt.count)*K.itemSize),K.itemSize))}return k};for(let O of(i.edificios||[]).concat(_)){if(!O.loc&&(!O.pts||O.pts.length<4))continue;if(p.super&&!O.loc){let[K,U]=Ue(t,O.pts[0][0],O.pts[0][1]),V=0,X=0;for(let[mt,ct]of O.pts){let[Ht,Dt]=Ue(t,mt,ct);V+=Ht,X+=Dt}if(V/=O.pts.length,X/=O.pts.length,Math.hypot(V-p.super.x,X-p.super.z)<p.super.r+3||Math.hypot(K-p.super.x,U-p.super.z)<p.super.r)continue}if(p.glorietas&&p.glorietas.length&&!O.loc){let K=0,U=0;for(let[V,X]of O.pts){let[mt,ct]=Ue(t,V,X);K+=mt,U+=ct}if(K/=O.pts.length,U/=O.pts.length,p.glorietas.some(V=>Math.hypot(K-V.x,U-V.z)<V.r+4))continue}if(p.parques&&p.parques.length&&!O.loc){let K=0,U=0;for(let[V,X]of O.pts){let[mt,ct]=Ue(t,V,X);K+=mt,U+=ct}if(K/=O.pts.length,U/=O.pts.length,p.parques.some(V=>sr(K,U,V.poli)))continue}if(p.barco&&!O.loc){let K=O.pts.map(([vt,yt])=>Ue(t,vt,yt)),U=p.barco,V=U.ux||0,X=U.uz||-1,mt=([vt,yt])=>[(vt-U.x)*V+(yt-U.z)*X,(vt-U.x)*-X+(yt-U.z)*V],ct=([vt,yt])=>Math.abs(vt)<64&&Math.abs(yt)<26,Ht=0,Dt=0;for(let[vt,yt]of K)Ht+=vt,Dt+=yt;Ht/=K.length,Dt/=K.length;let ut=[[-60,-22],[60,-22],[60,22],[-60,22]].map(([vt,yt])=>[U.x+vt*V-yt*X,U.z+vt*X+yt*V]);if(ct(mt([Ht,Dt]))||K.some(vt=>ct(mt(vt)))||ut.some(([vt,yt])=>sr(vt,yt,K))||sr(U.x,U.z,K))continue}let tt=O.loc?O.loc.map(([K,U])=>new xt(K,-U)):O.pts.map(([K,U])=>{let[V,X]=Ue(t,K,U);return new xt(V,-X)}),k=Tn(O.id||O.pts[0][0]+","+O.pts[0][1]);O.loc&&qv(tt)&&tt.reverse();let it=O.h||(k<.55?3.2*(1+Math.floor(k*4)):k<.9?3.2*(2+Math.floor(k*3)):3.2*(5+Math.floor(k*8)));try{let K=new os(new ni(tt),{depth:it,bevelEnabled:!1}).rotateX(-Math.PI/2);K.index&&(K=K.toNonIndexed());let U=g[Math.floor(k*g.length)];for(let ct of K.groups){let Ht=Zn(P(K,ct),U);(ct.materialIndex===0?A:v).push(Ht)}let V=0,X=0,mt=0;for(let ct=0;ct<tt.length;ct++){let Ht=tt[ct],Dt=tt[(ct+1)%tt.length],ut=Ht.x*Dt.y-Dt.x*Ht.y;V+=ut,X+=(Ht.x+Dt.x)*ut,mt+=(Ht.y+Dt.y)*ut}V/=2,Math.abs(V)>30&&k*7%1<.8&&(X/=6*V,mt/=6*V,w.push([X+(k*13%1-.5)*2,it,-mt+(k*17%1-.5)*2]))}catch{}}for(let O=0;O<v.length;){let tt=0,k=O;for(;k<v.length&&tt<24e3;)tt+=v[k++].attributes.position.count;let it=we(v.slice(O,k));it.computeVertexNormals(),O=k;let K=new st(it,Zv());K.castShadow=!0,K.receiveShadow=!0,K.name="muros",n.add(K)}if(A.length){let O=we(A);O.computeVertexNormals();let tt=new st(O,new wt({vertexColors:!0}));tt.receiveShadow=!0,n.add(tt)}if(w.length){let O=we([Zn(new he(.6,.6,1.15,10).translate(0,.78,0),1776411),Zn(new he(.62,.62,.08,10).translate(0,1.38,0),2763306),Zn(new Gt(1.1,.2,1.1).translate(0,.1,0),10131342)].map(eu));O.computeVertexNormals();let tt=new Le(O,new wt({vertexColors:!0}),w.length),k=new oe;w.forEach(([it,K,U],V)=>tt.setMatrixAt(V,k.makeTranslation(it,K,U))),tt.castShadow=!0,n.add(tt)}let I=[],z=[],L=[],H=[],W=[];for(let O of i.rieles||[]){let tt=O.pts.map(([it,K])=>Ue(t,it,K));if(tt.length<2)continue;let k={p:tt,cum:So(tt),elevado:!!O.elevado,y:O.elevado?8:.12,periodo:O.l8?8:60,vagones:O.l8?6:9,t:Math.random()*60};if(!(k.cum[k.cum.length-1]<40)){if(I.push(k),k.elevado){Dn(tt,9,8,H),Dn(tt,9,6.8,H);let it=k.cum[k.cum.length-1];for(let K=5;K<it;K+=26){let U=Ee(k,K);W.push(new Gt(1.4,6.8,1.4).translate(U.x,3.4,U.z))}}else Dn(tt,8.4,.07,z);for(let it of[-2.45,-1.05,1.05,2.45]){let K=[],U=k.cum[k.cum.length-1];for(let V=0;V<=U;V+=Math.max(4,U/200)){let X=Ee(k,V);K.push([X.x-X.dz*it,X.z+X.dx*it])}Dn(K,.12,k.y+.1,L)}}}if(z.length&&n.add(new st(we(z),new wt({color:7037528,side:ye}))),L.length&&n.add(new st(we(L),new wt({color:10133670,side:ye}))),H.length){let O=new st(we(H),new wt({color:12170925,side:ye}));O.castShadow=!0,n.add(O)}if(W.length){let O=new st(we(W),new wt({color:11578788}));O.castShadow=!0,n.add(O)}let q=new Le(tp(),Zi,400);q.count=0,q.castShadow=!0,n.add(q);let ft=[],Q=[],G=[],J=[];for(let O of i.troles||[]){let tt=O.pts.map(([K,U])=>Ue(t,K,U));if(tt.length<2)continue;let k={p:tt,cum:So(tt),periodo:30};if(k.cum[k.cum.length-1]<40)continue;ft.push(k),Dn(tt,9.5,8.5,Q),Dn(tt,9.5,7.3,Q);let it=k.cum[k.cum.length-1];for(let K=5;K<it;K+=30){let U=Ee(k,K);G.push(new Gt(1.5,7.3,1.5).translate(U.x,3.65,U.z))}for(let K of[-2.2,-1.3,1.3,2.2]){let U=[];for(let V=0;V<=it;V+=Math.max(5,it/200)){let X=Ee(k,V);U.push([X.x-X.dz*K,X.z+X.dx*K])}Dn(U,.06,13.1,J)}for(let K=10;K<it;K+=40){let U=Ee(k,K);for(let V of[-1,1])G.push(new Gt(.18,5,.18).translate(U.x-U.dz*4.4*V,11,U.z+U.dx*4.4*V))}}if(Q.length){let O=new st(we(Q),new wt({color:13223613,side:ye}));O.castShadow=!0,n.add(O)}if(G.length){let O=new st(we(G),new wt({color:11578788}));O.castShadow=!0,n.add(O)}J.length&&n.add(new st(we(J),new xe({color:2763306,side:ye})));let dt=new Le(jd(),Zi,60);dt.count=0,dt.castShadow=!0,n.add(dt);let At=[],j=[],ht=[];for(let O of i.mb||[]){let tt=O.pts.map(([K,U])=>Ue(t,K,U));if(tt.length<2)continue;let k={p:tt,cum:So(tt),periodo:40,l:O.l},it=k.cum[k.cum.length-1];if(!(it<30)){At.push(k);for(let K of[-3.6,3.6]){let U=[];for(let V=0;V<=it;V+=Math.max(4,it/300)){let X=Ee(k,V);U.push([X.x-X.dz*K,X.z+X.dx*K])}Dn(U,.28,.075,j);for(let V=0;V<=it;V+=6){let X=Ee(k,V);ht.push({x:X.x-X.dz*K,z:X.z+X.dx*K,c:Yi.metrobus,f:Math.floor(V/6)%3})}}}}j.length&&n.add(new st(we(j),new xe({color:15909376,side:ye})));{let O=[];for(let tt of At){let k=tt.cum[tt.cum.length-1];for(let it=1;it<=k&&O.length<9e3;it+=2.6){let K=Ee(tt,it);for(let U of[-3.95,3.95])O.push([K.x-K.dz*U,K.z+K.dx*U,en(K.dx,K.dz)])}}if(O.length){let tt=new Le(new Gt(.42,.13,.3).translate(0,.13,0),new wt({color:15774720}),O.length),k=new oe,it=new Ve,K=new N(0,1,0),U=new N(1,1,1);O.forEach(([V,X,mt],ct)=>{it.setFromAxisAngle(K,mt),tt.setMatrixAt(ct,k.compose(new N(V,0,X),it,U))}),n.add(tt)}}let St=new Le(Qd(),Zi,80);St.count=0,St.castShadow=!0,n.add(St);for(let O of r){if(O.w<7||O.elev)continue;let tt=O.cum[O.cum.length-1],k=O.w>=12?5:7,it=kl[O.tipo];for(let K=0;K<=tt;K+=k){let U=Ee(O,K),V=Math.floor(K/k)%3;for(let X of[-1,1])ht.push({x:U.x-U.dz*(O.w/2-.4)*X,z:U.z+U.dx*(O.w/2-.4)*X,y:it,c:Yi.orilla,f:V});if(!O.oneway&&O.w>=10)ht.push({x:U.x,z:U.z,y:it,c:Yi.carril,f:V});else if(O.oneway&&O.w>=10)for(let X of[-1,1])ht.push({x:U.x-U.dz*O.w*.17*X,z:U.z+U.dx*O.w*.17*X,y:it,c:Yi.carril,f:V})}if(ht.length>14e3)break}let _t=$d(ht);n.add(_t),Je.add(n);let Et={O:t,grupo:n,calles:r,etiquetas:M,rieles:I,tren:q,troles:ft,trole:dt,mbs:At,mbus:St,luces:_t,listo:!0,coches:e?e.coches:[],motos:e?e.motos:[],pj:e?e.pj:null,rastro:e?e.rastro:[],taxi:e?e.taxi:null,cruce:e?e.cruce:null,radar:m,cruces:Tv(r),letreros:e?e.letreros:null,guias:e?e.guias:null,hitos:p};e&&(Je.remove(e.grupo),e.grupo.traverse(O=>{O.geometry&&O.geometry!==Jl&&O.geometry.dispose()})),e&&e.O!==t&&(Et.pj=null,Et.rastro=[]),Zt=Et,Jh&&np(Jh);for(let O of Zt.coches)O.ci=-1;for(let O of Zt.motos)O.ci=-1;ip()}var Jh=null;function np(i){if(Jh=i,!Zt||!Zt.O||(Zt.trafG&&(Zt.grupo.remove(Zt.trafG),Zt.trafG.traverse(s=>{s.geometry&&s.geometry.dispose()}),Zt.trafG=null),!i||!i.length))return;let t={cerr:[],rojo:[],amar:[],verde:[]};for(let s of i){let r=s.pts.map(([a,l])=>Ue(Zt.O,a,l));if(r.length<2||Math.hypot(r[0][0]-(Zt.pj?Zt.pj.x:0),r[0][1]-(Zt.pj?Zt.pj.z:0))>1500)continue;let o=s.nivel<0?"cerr":s.nivel<.45?"rojo":s.nivel<.75?"amar":"verde";Dn(r,o==="verde"?1.4:2.2,.095,t[o])}let e={cerr:9109504,rojo:15022389,amar:15905280,verde:3129178},n=new _e;for(let s in t)if(t[s].length){let r=new st(we(t[s]),new xe({color:e[s],transparent:!0,opacity:s==="verde"?.55:.8,side:ye,depthWrite:!1}));r.renderOrder=1,n.add(r)}Zt.grupo.add(n),Zt.trafG=n}var ds=null;function Zv(){if(ds)return ds;let i=4,t=256,e=document.createElement("canvas"),n=document.createElement("canvas");e.width=e.height=n.width=n.height=t;let s=e.getContext("2d"),r=n.getContext("2d");s.fillStyle="#ffffff",s.fillRect(0,0,t,t),r.fillStyle="#000",r.fillRect(0,0,t,t);let o=t/i;for(let c=0;c<i;c++)for(let h=0;h<i;h++){let u=c*o,f=h*o;s.fillStyle="rgba(0,0,0,.10)",s.fillRect(u+o*.18,f+o*.24,o*.64,o*.52),s.fillStyle="#33414f",s.fillRect(u+o*.22,f+o*.28,o*.56,o*.44),s.fillStyle="#5a6b7c",s.fillRect(u+o*.49,f+o*.28,o*.03,o*.44),Math.random()<.55&&(r.fillStyle=Math.random()<.3?"#ffe7b0":"#ffc96b",r.fillRect(u+o*.22,f+o*.28,o*.56,o*.44))}let a=new Sn(e),l=new Sn(n);for(let c of[a,l])c.wrapS=c.wrapT=jn,c.repeat.set(1/(3.2*i),1/(3.2*i)),c.colorSpace=Fe,c.anisotropy=4;return ds=new wt({vertexColors:!0,map:a,emissiveMap:l,emissive:0}),ds}var Gh={};function Jv(i){let t=i?"n":"d";if(Gh[t])return Gh[t];let e=document.createElement("canvas");e.width=4,e.height=256;let n=e.getContext("2d"),s=n.createLinearGradient(0,0,0,256);i?(s.addColorStop(0,"#03060f"),s.addColorStop(.55,"#0d1630"),s.addColorStop(1,"#27324f")):(s.addColorStop(0,"#5f9fd8"),s.addColorStop(.6,"#a9d0ee"),s.addColorStop(1,"#dce9f2")),n.fillStyle=s,n.fillRect(0,0,4,256);let r=new Sn(e);return r.colorSpace=Fe,Gh[t]={t:r,horiz:i?2568783:14477810}}var Ql="muestra";function ip(){let i=!!(Zt&&Zt.listo&&Ut.pos);if((i?"real":"muestra")!==Ql){Ql=i?"real":"muestra",wi.ini=!1,vn.visible=!i,rn&&(rn.tren.visible=!i);for(let t of wn)t!==zt&&(t.g.visible=!i);if(Zt){Zt.grupo.visible=i;for(let t of Zt.coches)t.g.visible=i;for(let t of Zt.motos)t.g.visible=i;Zt.taxi&&(Zt.taxi.g.visible=i),Zt.cruce&&(Zt.cruce.g.visible=i&&Ut.rojo),Zt.letreros&&!i&&(Zt.letreros.forEach(t=>t.visible=!1),(Zt.guias||[]).forEach(t=>t.visible=!1))}i||(zt.g.rotation.y=0,zt.z=Ji[1]),Kl()}}function $v(i,t,e=22,n){let s=null;for(let r=0;r<Zt.calles.length;r++){let o=Zt.calles[r];if(o.tipo==="service"&&!n)continue;let a=o.p;for(let l=1;l<a.length;l++){let c=a[l-1][0],h=a[l-1][1],u=a[l][0]-c,f=a[l][1]-h,d=u*u+f*f;if(!d)continue;let p=((i-c)*u+(t-h)*f)/d;p=Math.max(0,Math.min(1,p));let S=c+u*p,x=h+f*p,m=Math.hypot(i-S,t-x),M=m;if(n){let y=Math.sqrt(d);M+=(1-Math.abs((u*n[0]+f*n[1])/y))*8}if(m<e&&(!s||M<s.pen)){let y=Math.sqrt(d);s={ci:r,i:l,t:p,x:S,z:x,d:m,pen:M,dx:u/y,dz:f/y,s:o.cum[l-1]+y*p}}}}return s}function ms(i){return i.ncar?i.oneway?Math.max(1,Math.round(i.ncar)):Math.max(1,Math.round(i.ncar/2)):i.oneway?Math.max(1,Math.min(5,Math.floor(i.w/2.8))):Math.max(1,Math.min(4,Math.floor(i.w/2/2.8)))}function To(i,t){let e=i.nl||ms(i);return i.oneway?-i.w/2+(t+.5)*i.w/e:(t+.5)*i.w/2/e}function ql(i){let t=i.nl||ms(i);return t>=3?t-2:t-1}var Bd=null;function Kv(){let i=Zt,[t,e]=Ue(i.O,Ut.pos.lat,Ut.pos.lon);i.pj||(i.pj={x:t,z:e,cx:t,cz:e,tx:t,tz:e,h:0,ht:0,ci:-1,s:0,dir:1,rx:t,rz:e,v:0,off:0,offObj:0,carril:null,tc:0});let n=i.pj,s=t-n.rx,r=e-n.rz,o=Math.hypot(s,r),a=o>1.5?[s/o,r/o]:[Math.cos(n.ht),-Math.sin(n.ht)],l=$v(t,e,25,a);if(l){let c=i.calles[l.ci],h=l.dx*a[0]+l.dz*a[1]>=0?1:-1,u=l.dx*h,f=l.dz*h;n.tx=l.x,n.tz=l.z,(n.ci!==l.ci||n.dir!==h)&&(n.carril=ql(c)),n.ci=l.ci,n.s=l.s,n.dir=h,(o>1.5||n.ci!==l.ci)&&(n.ht=en(u,f))}else n.tx=t,n.tz=e,o>1.5&&(n.ht=en(a[0],a[1])),n.ci=-1;if(o>1.5&&(n.rx=t,n.rz=e),Math.hypot(n.tx-n.cx,n.tz-n.cz)>300){n.cx=n.tx,n.cz=n.tz,n.h=n.ht,n.off=n.offObj=0,i.rastro=[],wi.ini=!1;for(let c of i.coches)c.ci=-1;for(let c of i.motos)c.ci=-1}}function jv(i,t){let e=Yl(i),n=[];return i.calles.forEach((s,r)=>{if(s.tipo==="service"||s.tipo==="living_street")return;let o=s.p[Math.floor(s.p.length/2)];Math.hypot(o[0]-e.x,o[1]-e.z)<t+s.cum[s.cum.length-1]/2&&n.push(r)}),n}function Vl(i,t,e,n){let s=i.pj;if(n&&!de&&s.ci>=0&&Math.random()<.6){let o=i.calles[s.ci],a=o.cum[o.cum.length-1];t.ci=s.ci,t.dir=Math.random()<.75||o.oneway?s.dir:-s.dir,t.s=Math.max(0,Math.min(a,s.s+t.dir*(t.dir===s.dir?(Math.random()<.5?12:-12)+(Math.random()-.5)*220:(Math.random()-.5)*300)))}else{if(!e.length){t.ci=-1;return}t.ci=e[Math.floor(Math.random()*e.length)];let o=i.calles[t.ci],a=o.cum[o.cum.length-1];t.dir=o.oneway||Math.random()<.5?1:-1,t.s=Math.random()*a}t.v=t.vmax*.6,t.lado=(Math.random()-.5)*.6;let r=i.calles[t.ci];t.carril=Math.floor(Math.random()*(r.nl||ms(r)))}function Qv(i){let t=Ut.nivel==="pesado",e=t?46:16,n=6;for(;i.coches.length<e;){let s=Wd(),r=bo(s==="trailer"&&!Ut.pico?"sedan":s,ai(Yh),2831424);i.coches.push({...r,ci:-1,s:0,dir:1,v:0,vmax:0,a:0,lado:0})}for(;i.coches.length>e;)Je.remove(i.coches.pop().g);for(;i.motos.length<n;){let s=bo("moto",ai([12986408,1402304,2236962]),ai([3622735,7162945]));i.motos.push({...s,ci:-1,s:0,dir:1,v:12,vmax:12,a:0,fase:Math.random()*6})}i.taxi||(i.taxi=bo("taxi"));for(let s of i.coches)s.vmax=t?3+Math.random()*3:9+Math.random()*5}function zd(i,t,e=0){let n=i.calles[t.ci],s=Ee(n,t.s),r=s.dx*t.dir,o=s.dz*t.dir,a=n.nl||ms(n),l=Math.min(a-1,t.carril==null?a-1:t.carril),c=To(n,l)+e;t.g.position.set(s.x-o*c,rr(n,t.s),s.z+r*c),t.g.rotation.y=en(r,o)}function ty(i,t){let e=i.pj;if(e.tc+=t,e.ci<0){e.offObj=0,e.carrilFis=null;return}let n=i.calles[e.ci],s=n.nl||ms(n);(e.carril==null||e.carril>=s)&&(e.carril=ql(n));let r=zt.v,o=r>40/3.6,a=p=>(p.s-e.s)*e.dir,l=i.coches.filter(p=>p.ci===e.ci&&p.g.visible),c=(p,S,x)=>l.some(m=>m.dir===e.dir&&(m.carril||0)===p&&a(m)>S&&a(m)<x),h=(p,S)=>l.some(x=>x.dir!==e.dir&&a(x)>p&&a(x)<S),u=l.find(p=>p.dir===e.dir&&(p.carril||0)===e.carril&&a(p)>1&&a(p)<24+r&&p.v<r-1.2);if(e.carril===-1&&h(-3,35))e.carril=0,e.tc=0;else if(e.tc>1.1){if(o&&u){let p=[e.carril-1,e.carril+1].filter(S=>S>=0&&S<s);s===1&&!n.oneway&&!h(-8,55)&&p.push(-1);for(let S of p)if(S===-1||!c(S,-9,16)){e.carril=S,e.tc=0;break}}else if(e.carril!==ql(n)){let p=ql(n);c(p,-11,9+r*.6)||(e.carril=p,e.tc=0)}}e.offObj=e.carril===-1?-To(n,0):To(n,e.carril);let f=0,d=1e9;for(let p=0;p<s;p++){let S=Math.abs(To(n,p)-e.off);S<d&&(d=S,f=p)}e.carrilFis=f}function ey(i,t){let e=i.pj;if(!i.letreros){i.letreros=[],i.guias=[];for(let l=0;l<4;l++){let c=new vi({depthTest:!1,depthWrite:!1,sizeAttenuation:!1,transparent:!0}),h=new Oi(c);h.renderOrder=20,h.center.set(.5,0),h.visible=!1,Je.add(h),i.letreros.push(h);let u=new Te;u.setAttribute("position",new ne([0,0,0,0,1,0],3));let f=new ks(u,new ss({color:1118481,depthTest:!1,transparent:!0}));f.renderOrder=19,f.visible=!1,f.frustumCulled=!1,Je.add(f),i.guias.push(f)}}if(i.tLet=(i.tLet||0)+t,i.tLet<.25&&i.letSel){Hd(i);return}i.tLet=0;let n=e.x,s=e.z,r=e.h,o=e.ci>=0?i.calles[e.ci]:null;if(de){let l=nc();n=l.x,s=l.z,r=de.h,o=null;let c=28,h=Math.cos(r),u=-Math.sin(r);for(let f of i.calles){if(f.elev||!f.nombre)continue;let d=Ye(f,n,s);d.d<c&&Math.abs(d.dx*h+d.dz*u)>.55&&(c=d.d,o=f)}}i.letV={x:n,z:s};let a=o&&o.nombre;if(i.letSel=[],a){let l=Math.cos(r),c=-Math.sin(r),h=new Set,u=i.cruces.filter(f=>f.a===a||f.b===a).map(f=>{let d=f.x-n,p=f.z-s;return{k:f,ad:d*l+p*c,lat:Math.abs(-d*c+p*l),otro:f.a===a?f.b:f.a}}).filter(f=>f.ad>-6&&f.ad<260&&f.lat<22+o.w).sort((f,d)=>f.ad-d.ad);for(let f of u){if(h.has(f.otro))continue;h.add(f.otro);let d=f.k,p=d.a===a?d.db:d.da,S=d.a===a?d.wa:d.wb,x=-c,m=l,M=p[0]*x+p[1]*m>=0?1:-1,y=Math.abs(p[0]*x+p[1]*m)>.25?S/2+7:0;if(f.px=d.x+p[0]*M*y,f.pz=d.z+p[1]*M*y,i.letSel.push(f),i.letSel.length>=i.letreros.length)break}}Hd(i)}var _o=new N;function Hd(i){let t=i.pj,e=Math.tan(Be.fov*Math.PI/360),n=-1/0;Be.updateMatrixWorld(),i.letreros.forEach((s,r)=>{let o=i.letSel&&i.letSel[r],a=i.guias&&i.guias[r];if(!o){s.visible=!1,a&&(a.visible=!1);return}let l=bv(o.otro);s.material.map!==l.t&&(s.material.map=l.t,s.material.needsUpdate=!0),s.center.set(l.cx,l.cy);let c=i.letV||t,h=o.px??o.k.x,u=o.pz??o.k.z,f=Math.hypot(h-c.x,u-c.z),d=(.052+.03*Math.max(0,1-f/160))*1.63,p=f>230?Math.max(0,(260-f)/30):1;s.scale.set(d*l.ar,d,1),s.position.set(h,.4,u),s.material.opacity=p,s.visible=!0,s.renderOrder=30-r,_o.copy(s.position).applyMatrix4(Be.matrixWorldInverse);let S=-_o.z;if(S>.5){_o.copy(s.position).project(Be);let x=d/e,m=n+.012-_o.y;m>0&&(s.position.y+=m*e*S),n=Math.max(n,_o.y+Math.max(0,m))+x}if(a){let x=s.position.y>1.2;if(a.visible=x,x){let m=a.geometry.attributes.position;m.setXYZ(0,h,.3,u),m.setXYZ(1,h,s.position.y,u),m.needsUpdate=!0,a.material.opacity=p,a.renderOrder=19-r}}})}function ny(i){let t=Zt;On+=i,(!t.pj||Bd!==Ut.pos.ts)&&(Bd=Ut.pos.ts,Kv());let e=t.pj,n=1-Math.exp(-i*2.2);e.cx+=(e.tx-e.cx)*n,e.cz+=(e.tz-e.cz)*n;let s=e.ht-e.h;s=Math.atan2(Math.sin(s),Math.cos(s)),e.h+=s*(1-Math.exp(-i*3)),ty(t,i);let r=e.off;e.off+=(e.offObj-e.off)*(1-Math.exp(-i*1.6));let o=(e.off-r)/Math.max(i,.001);e.x=e.cx+Math.sin(e.h)*e.off,e.z=e.cz+Math.cos(e.h)*e.off;let a=window.__velDbg!=null?window.__velDbg/3.6:Ut.rojo||Ut.llego?0:Ut.vel!=null?Ut.vel/3.6:0,l=zt.v;zt.v+=(a-zt.v)*(1-Math.exp(-i*1.5)),zt.a=(zt.v-l)/Math.max(i,.001);{let y=e.ci>=0?t.calles[e.ci]:null,_=y&&y.elev?rr(y,Ye(y,e.cx,e.cz).s):0;e.y=(e.y||0)+(_-(e.y||0))*(1-Math.exp(-i*2.5))}zt.g.position.set(e.x,e.y,e.z),zt.g.rotation.y=e.h-Math.max(-.3,Math.min(.3,o*.09));let c=zt.a<-.4||zt.v<.4;zt.stop.material=c?Eo:or,zt.glow.visible=c||Ut.noche,zt.glow.scale.x=c?5.5:2.5,ps.position.y=3.3+Math.sin(On*3)*.2,ps.rotation.y+=.03;let h=t.rastro[t.rastro.length-1];(!h||Math.hypot(h[0]-e.x,h[1]-e.z)>.6)&&(t.rastro.push([e.x,e.z]),t.rastro.length>120&&t.rastro.shift()),Qv(t);let u=jv(t,320),f=Ut.nivel==="pesado",d={};for(let y of t.coches){if((y.ci<0||y.ci>=t.calles.length)&&Vl(t,y,u,f),y.ci<0){y.g.visible=!1;continue}let _=t.calles[y.ci],E=_.cum[_.cum.length-1],b=Ee(_,y.s),g=Yl(t);if(Math.hypot(b.x-g.x,b.z-g.z)>380||y.s<=0&&y.dir<0||y.s>=E&&y.dir>0){Vl(t,y,u,f);continue}(d[y.ci+":"+y.dir+":"+(y.carril||0)]||=[]).push(y)}for(let y in d){let _=d[y],[E,b,g]=y.split(":").map(Number),v=E===e.ci&&b===e.dir&&(g===e.carril||g===e.carrilFis),A=_.map(w=>({o:w,s:w.s}));v&&A.push({o:null,s:e.s,v:zt.v}),A.sort((w,P)=>(P.s-w.s)*b);for(let w=0;w<A.length;w++){let P=A[w];if(!P.o)continue;let I=P.o,z=I.vmax;if(w>0){let W=(A[w-1].s-I.s)*b-6;z=Math.min(z,Math.max(0,W*.9))}f&&Math.random()<.002&&(I.frena=1.3),I.frena>0&&(I.frena-=i,z=0),v&&w>0&&!A[w-1].o&&(e.s-I.s)*b<0;let L=I.v;if(I.v+=(z-I.v)*(1-Math.exp(-i*2)),I.a=(I.v-L)/Math.max(i,.001),I.s+=I.v*b*i,v){let W=(I.s-e.s)*b;W>-5&&W<6&&(I.s=e.s+b*(W>=0?6:-6))}zd(t,I),I.g.visible=!0;let H=I.a<-.5||I.v<.5;I.stop.material=H?Eo:or,I.glow.visible=H||Ut.noche,I.glow.scale.x=H?5.5:2.5,I.haz.visible=Ut.noche}}for(let y of t.motos){if((y.ci<0||y.ci>=t.calles.length)&&Vl(t,y,u,!0),y.ci<0){y.g.visible=!1;continue}let _=t.calles[y.ci],E=_.cum[_.cum.length-1];y.fase+=i,y.s+=y.vmax*y.dir*i;let b=Ee(_,y.s),g=Yl(t);if(y.s<=0||y.s>=E||Math.hypot(b.x-g.x,b.z-g.z)>380){Vl(t,y,u,!0);continue}{let v=_.nl||ms(_);y.carril=v-1,zd(t,y,-(v>=2?_.w/(_.oneway?1:2)/v/2:To(_,0)*.5)+Math.sin(y.fase*.9)*.6)}y.g.visible=!0,y.haz.visible=Ut.noche}{let y=t.taxi,_=t.rastro,E=0,b=_.length-1,g=e.x,v=e.z,A=e.h,w=7.5+Math.min(6,zt.v*.5);for(;b>0&&E<w;){let P=_[b][0]-_[b-1][0],I=_[b][1]-_[b-1][1],z=Math.hypot(P,I);if(E+z>=w){let L=(w-E)/z;g=_[b][0]-P*L,v=_[b][1]-I*L,A=en(P,I),E=w;break}E+=z,b--}E<w&&(g=e.x-Math.cos(e.h)*w,v=e.z+Math.sin(e.h)*w,A=e.h),y.g.position.set(g,e.y||0,v),y.g.rotation.y=A,y.g.visible=!0,y.stop.material=c?Eo:or,y.glow.visible=c||Ut.noche,y.glow.scale.x=c?5.5:2.5,y.haz.visible=Ut.noche}sy(i),iy(i);let p=Yl(t),S=y=>Math.hypot(y.x-p.x,y.z-p.z)<520;{let y=[];for(let _ of t.troles)Ld(_,i,12,12,1,0,1.75,8.5,y);jl(t.trole,y.filter(S))}{let y=[];for(let _ of t.mbs)Ld(_,i,10,18,1,0,1.75,0,y);jl(t.mbus,y.filter(S))}if(Kd(t.luces,On),ey(t,i),t.hitos&&t.hitos.sem&&zv(t.hitos.sem,On),t.radar){let y=Ut.foto&&Date.now()-Ut.foto<1500;t.radar.flash.visible=y&&Math.floor(On*10)%2===0,t.radar.led.material.color.setHex(Math.floor(On*2)%2?16722458:5570560)}let x=new N;Be.getWorldDirection(x);let m=-x.z,M=x.x;for(let y of t.etiquetas)y.rotation.y=y.userData.base+(y.userData.dx*m+y.userData.dz*M<0?Math.PI:0)}function iy(i){let t=Zt,e=t.tren,n=new oe,s=new Ve,r=new N,o=new N(1,1,1),a=new N(0,1,0),l=0,c=16;for(let h of t.rieles){h.t+=i;let u=h.cum[h.cum.length-1],f=h.vagones*15.3,d=h.periodo*c;for(let p of[1,-1]){let S=p*1.75,x=(h.t+(p<0?h.periodo/2:0))*c%Math.max(d,u+f+60),m=Math.max(d,u+f+60);for(let M=0;M*d<m&&M<40;M++){let y=(x+M*d)%m-30;for(let _=0;_<h.vagones&&l<400;_++){let E=y-_*15.3;if(E<0||E>u)continue;p<0&&(E=u-E);let b=Ee(h,E),g=b.dx*p,v=b.dz*p;Math.hypot(b.x-t.pj.x,b.z-t.pj.z)>600||(r.set(b.x-v*S,h.y,b.z+g*S),s.setFromAxisAngle(a,en(g,v)),e.setMatrixAt(l++,n.compose(r,s,o)))}}}}e.count=l,e.instanceMatrix.needsUpdate=!0}function sy(i){let t=Zt,e=t.pj;if(!t.cruce){let a=new _e,l=[];for(let m=-8;m<=8;m++)l.push(new Re(3.2,.6).rotateX(-Math.PI/2).translate(0,0,m*1.1));let c=new st(we(l),new xe({color:15921906}));c.position.y=.07,a.add(c);let h=new _e,u=new wt({color:3882821}),f=new st(new he(.12,.14,6,8),u);f.position.y=3,h.add(f);let d=new st(new Gt(.45,1.5,.55),new wt({color:1908514}));d.position.set(-.1,5.2,0),h.add(d);let p=new st(new Pn(.2,10,8),new xe({color:16722458}));p.position.set(-.36,5.68,0),h.add(p),[.47,.94].forEach(m=>{let M=new st(new Pn(.17,10,8),new xe({color:2236962}));M.position.set(-.36,5.68-m,0),h.add(M)}),a.add(h);let S=[15029053,3120750,8084694,14722342],x=[0,1,2,3].map(m=>{let M=new _e,y=new st(new he(.22,.26,.95,8),new wt({color:S[m]}));y.position.y=1.15,y.castShadow=!0;let _=new st(new he(.2,.18,.7,8),new wt({color:2899543}));_.position.y=.35;let E=new st(new Pn(.2,10,8),new wt({color:13209186}));E.position.y=1.85;let b=new st(new Gt(.12,.5,.12),new xe({color:16765952}));return b.position.y=2.6,b.visible=!1,M.add(y,_,E,b),a.add(M),{g:M,su:b,z:0,dir:1,modo:"espera",t:m*.9,x:(m-1.5)*.7}});Je.add(a),t.cruce={g:a,sem:h,peat:x,cm:c,activo:!1,mitad:8}}let n=t.cruce;if(!Ut.rojo||(e.y||0)>1){n.g.visible=!1,n.activo=!1;return}if(!n.activo){n.activo=!0;let a=e.ci>=0?t.calles[e.ci]:null,l=a?a.w:10;n.mitad=l/2+1.3;let c=Math.cos(e.h),h=-Math.sin(e.h);n.g.position.set(e.tx+c*7,0,e.tz+h*7),n.g.rotation.y=e.h,n.cm.scale.z=Math.max(.5,l/18),n.sem.position.set(-1.5,0,n.mitad-.3),n.peat.forEach((u,f)=>{u.z=(f%2?1:-1)*n.mitad,u.dir=-Math.sign(u.z),u.modo="espera",u.t=f*.9})}n.g.visible=!0,n.g.updateMatrixWorld();let s=new oe().copy(n.g.matrixWorld).invert(),r=new N,o=a=>t.motos.some(l=>(r.copy(l.g.position).applyMatrix4(s),r.x>-16&&r.x<1.5&&Math.abs(r.z-a)<1.6));for(let a of n.peat){if(a.modo==="espera")a.t-=i,a.t<=0&&!o(a.z+a.dir*2)&&(a.modo="cruza");else if(a.modo==="cruza"){let l=a.z+a.dir*1.4*i;o(l+a.dir*1.2)&&Math.abs(a.z)<n.mitad-.5?(a.modo="huye",a.dir=-a.dir):(a.z=l,Math.abs(a.z)>=n.mitad&&Math.sign(a.z)===Math.sign(a.dir)&&(a.modo="espera",a.t=2+Math.random()*3,a.dir=-Math.sign(a.z)))}else a.z+=a.dir*3.4*i,Math.abs(a.z)>=n.mitad&&(a.modo="espera",a.t=1.2+Math.random()*1.5,a.dir=-Math.sign(a.z));a.g.position.set(a.x,a.modo!=="espera"?Math.abs(Math.sin(On*(a.modo==="huye"?16:9)))*.08:0,a.z),a.su.visible=a.modo==="huye"}}var de=null,Xi=new Map,Ti=null,Gd=0;function sp(i,t,e){return{lat:i.lat-e/ep,lon:i.lon+t/(111320*Math.cos(i.lat*Math.PI/180))}}function nc(){let[i,t]=Ue(Zt.O,de.lat,de.lon);return{x:i,z:t}}function Yl(i){return de?nc():{x:i.pj.x,z:i.pj.z}}function tc(){return!!(Zt&&Zt.listo&&Ut.pos&&Zt.pj)}function kh(){return de?!0:tc()?(de={...sp(Zt.O,Zt.pj.x,Zt.pj.z),h:Zt.pj.h,z:1},nu(!0),!0):!1}function $h(){de=null,nu(!1),Wl(),Zl(!0)}function nu(i){Ze&&(Ti||(Ti=document.createElement("button"),Ti.type="button",Ti.textContent="\u{1F4CD} Volver a mi carro",Ti.style.cssText="position:absolute;right:10px;bottom:44px;z-index:4;padding:10px 14px;border-radius:999px;border:0;background:#1f6feb;color:#fff;font:600 15px system-ui,sans-serif;box-shadow:0 4px 14px rgba(0,0,0,.35);display:none",Ti.onclick=t=>{t.stopPropagation(),$h()}),Ti.parentNode!==Ze&&(getComputedStyle(Ze).position==="static"&&(Ze.style.position="relative"),Ze.appendChild(Ti)),Ti.style.display=i?"block":"none")}function kd(i,t){let e=Ze&&Ze.clientHeight||300,n=45*de.z/e,s=Math.cos(de.h),r=-Math.sin(de.h),o=-r,a=s,l=nc();l.x+=(s*t-o*i)*n,l.z+=(r*t-a*i)*n,Object.assign(de,sp(Zt.O,l.x,l.z))}function Zl(i){let t=performance.now();if(!(!i&&t-Gd<900)){Gd=t;try{window.__v3Explorar&&window.__v3Explorar(de?{lat:de.lat,lon:de.lon}:null)}catch{}}}function ry(i){i.style.touchAction="none";for(let e of["touchstart","touchmove"])i.addEventListener(e,n=>{n.cancelable&&n.preventDefault()},{passive:!1});for(let e of["gesturestart","gesturechange"])i.addEventListener(e,n=>n.preventDefault());i.addEventListener("pointerdown",e=>{if(!tc()){try{window.__v3Explorar&&window.__v3Explorar({sinMapa:!0})}catch{}return}try{i.setPointerCapture(e.pointerId)}catch{}Xi.set(e.pointerId,{x:e.clientX,y:e.clientY,x0:e.clientX,y0:e.clientY})}),i.addEventListener("pointermove",e=>{let n=Xi.get(e.pointerId);if(n){if(Xi.size===1){let s=e.clientX-n.x,r=e.clientY-n.y;if(!de&&Math.hypot(e.clientX-n.x0,e.clientY-n.y0)<8)return;if(We==="propia"&&!de){bn.yaw-=s*.008,bn.pitch=Math.max(.05,Math.min(1.5,bn.pitch+r*.005)),n.x=e.clientX,n.y=e.clientY,e.preventDefault();return}if(!kh())return;e.buttons===2||e.shiftKey?de.h-=s*.008:kd(s,r),n.x=e.clientX,n.y=e.clientY}else if(Xi.size===2){let[s,r]=[...Xi.values()],o=Math.hypot(s.x-r.x,s.y-r.y),a=Math.atan2(r.y-s.y,r.x-s.x),l=(s.x+r.x)/2,c=(s.y+r.y)/2;n.x=e.clientX,n.y=e.clientY;let h=Math.hypot(s.x-r.x,s.y-r.y),u=Math.atan2(r.y-s.y,r.x-s.x),f=(s.x+r.x)/2,d=(s.y+r.y)/2;if(We==="propia"&&!de){o>10&&h>10&&(bn.dist=Math.max(6,Math.min(450,bn.dist*o/h)));let S=u-a;S=Math.atan2(Math.sin(S),Math.cos(S)),bn.yaw+=S,e.preventDefault();return}if(!kh())return;o>10&&h>10&&(de.z=Math.max(.45,Math.min(14,de.z*o/h)));let p=u-a;p=Math.atan2(Math.sin(p),Math.cos(p)),de.h+=p,kd(f-l,d-c)}Zl(),e.preventDefault()}});let t=e=>{Xi.delete(e.pointerId)&&(!Xi.size&&We==="propia"&&Pd(),!Xi.size&&de&&Zl(!0))};i.addEventListener("pointerup",t),i.addEventListener("pointercancel",t),i.addEventListener("wheel",e=>{if(tc()){if(e.preventDefault(),We==="propia"&&!de){bn.dist=Math.max(6,Math.min(450,bn.dist*Math.exp(e.deltaY*.0015))),Pd();return}kh()&&(de.z=Math.max(.45,Math.min(14,de.z*Math.exp(e.deltaY*.0015))),Zl())}},{passive:!1}),i.addEventListener("contextmenu",e=>e.preventDefault())}function oy(i,t){if(!Ze)return;let e=document.createElement("div");e.textContent=i,e.style.cssText="position:absolute;left:50%;top:44%;transform:translate(-50%,-50%);z-index:4;max-width:86%;padding:10px 14px;border-radius:12px;background:#000c;color:#fff;font:600 15px system-ui,sans-serif;pointer-events:none;transition:opacity .6s;text-align:center",getComputedStyle(Ze).position==="static"&&(Ze.style.position="relative"),Ze.appendChild(e),setTimeout(()=>{e.style.opacity="0",setTimeout(()=>e.remove(),700)},t||3500)}var Kh=!1;function ay(){if(Kh||!Ze||!tc())return;Kh=!0;try{if(localStorage.getItem("v3pista")>="3")return;localStorage.setItem("v3pista",String(+(localStorage.getItem("v3pista")||0)+1))}catch{}let i=document.createElement("div");i.textContent="\u261D\uFE0F Arrastra con el dedo para recorrer las calles",i.style.cssText="position:absolute;left:50%;top:44%;transform:translate(-50%,-50%);z-index:4;padding:10px 14px;border-radius:12px;background:#000b;color:#fff;font:600 15px system-ui,sans-serif;pointer-events:none;transition:opacity .6s;text-align:center",getComputedStyle(Ze).position==="static"&&(Ze.style.position="relative"),Ze.appendChild(i),setTimeout(()=>{i.style.opacity="0",setTimeout(()=>i.remove(),700)},3500)}function ly(i){let t=nc(),e=Math.cos(de.h),n=-Math.sin(de.h),s=de.z,r=9.5*s,o=6.4*Math.pow(s,1.12),a=14*Math.min(s,4),l=new N(t.x-e*r,o,t.z-n*r),c=new N(t.x+e*a,0,t.z+n*a),h=1-Math.exp(-i*10);Ri.lerp(l,h),Ci.lerp(c,h);let u=Be.aspect<1?68:50;Be.fov!==u&&(Be.fov=u,Be.updateProjectionMatrix()),Be.position.copy(Ri),Be.lookAt(Ci),yn.position.set(t.x+25,45,t.z+30),yn.target.position.set(t.x,0,t.z)}function wi(i){if(Kh||ay(),de){ly(i);return}let t=Zt.pj,[e,n,s,r,o=0]=xv[We],a=Math.cos(t.h),l=-Math.sin(t.h),c=-l,h=a,u=We==="atras"?0:3,f=t.y||0,d=new N(t.x+a*e+c*s,n+f,t.z+l*e+h*s),p=new N(t.x+a*r+c*u,o+f,t.z+l*r+h*u);if(We==="propia"){let S=t.h+Math.PI+bn.yaw,x=bn.dist*Math.cos(bn.pitch),m=bn.dist*Math.sin(bn.pitch)+1.5;d.set(t.x+Math.cos(S)*x,f+m,t.z-Math.sin(S)*x),p.set(t.x+a*3,f+1,t.z+l*3)}else if(We!=="arriba"){let S=Math.max(0,Math.min(1,(f-.8)/4));wi.fp=(wi.fp||0)+(S-(wi.fp||0))*(1-Math.exp(-i*1.5));let x=wi.fp;x>.01&&(d.x-=a*16*x,d.z-=l*16*x,d.y+=20*x,p.x+=a*10*x,p.z+=l*10*x)}if(window.__altoDbg&&(d.set(t.x,window.__altoDbg,t.z+1),p.set(t.x,0,t.z)),window.__camDbg){let S=window.__camDbg;d.set(...S[0]),p.set(...S[1]),Ri.copy(d),Ci.copy(p)}if(!wi.ini)Ri.copy(d),Ci.copy(p),wi.ini=!0;else{let S=1-Math.exp(-i*2.5);Ri.lerp(d,S),Ci.lerp(p,S)}Be.position.copy(Ri),Be.lookAt(Ci),yn.position.set(t.x+25,45,t.z+30),yn.target.position.set(t.x,0,t.z)}window.Vista3D={disponible(){try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}},montar(i){Mn||(vv(),ry(Mn.domElement)),Ze=i,Mn.domElement.parentNode!==i&&i.prepend(Mn.domElement),de&&nu(!0),er&&er.disconnect(),er=new ResizeObserver(Wl),er.observe(i),Wl(),Ch||(Ch=!0,Mo=0,Wh=requestAnimationFrame(Jd))},desmontar(){Ch=!1,cancelAnimationFrame(Wh),er&&er.disconnect()},actualizar(i){let t=Ut.viaje,e=Ut.noche;if(Object.assign(Ut,i),Ut.viaje&&!t&&(Ut._a=zt?zt.x+Ai:null),Ut.viaje||(Ut._a=null),!Mn)return;let n=Ut.nivel+Ut.zona+Ut.pico+Ut.metrobus;n!==Zh?(Zh=n,Xd(),Kl()):Ut.noche!==e&&Kl(),ip()},mapa(i){Yv(i)},explorando(){return de?{lat:de.lat,lon:de.lon}:null},dejarDeExplorar(){de&&$h()},trafico(i){np(i)},modo(){return Zt&&Zt.listo&&Ut.pos?"real":"muestra"},version:"V.24.11.26b",camara(){We=Dh[(Dh.indexOf(We)+1)%Dh.length];try{localStorage.setItem("vista3dCam3",We)}catch{}return de&&$h(),Wl(),We==="propia"&&oy("\u270B Vista personalizada: arrastra para girar e inclinar, pellizca para acercar o alejar. Se queda guardada y sigue a tu carro.",5500),Cd[We]},nombreCamara(){return Cd[We]},get _dbg(){return{jugador:zt,vehs:wn,E:Ut,desplaz:Ai,REAL:Zt,cam:Be}}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

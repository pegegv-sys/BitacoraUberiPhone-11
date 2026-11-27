(()=>{var af=0,Yc=1,lf=2;var ro=1,qa=2,Ks=3,Vi=0,_n=1,ye=2,ls=0,js=1,Si=2,Zc=3,Jc=4,cf=5;var cs=100,hf=101,uf=102,ff=103,df=104,pf=200,mf=201,gf=202,xf=203,$c=204,Kc=205,_f=206,vf=207,yf=208,Mf=209,Sf=210,Ef=211,bf=212,Tf=213,wf=214,la=0,ca=1,ha=2,Os=3,ua=4,fa=5,da=6,pa=7,Ya=0,Af=1,Rf=2,si=0,jc=1,Qc=2,th=3,eh=4,nh=5,ih=6,sh=7;var rh=300,hs=301,Qs=302,Za=303,Ja=304,jn=1e3,$n=1001,ma=1002,Qe=1003,Cf=1004;var oo=1005;var gn=1006,$a=1007;var Ei=1008;var bn=1009,oh=1010,ah=1011,tr=1012,Ka=1013,Wn=1014,Fn=1015,Xn=1016,ja=1017,Qa=1018,us=1020,lh=35902,ch=35899,hh=1021,uh=1022,qn=1023,xi=1026,bi=1027,tl=1028,el=1029,Wi=1030,nl=1031;var il=1033,ao=33776,lo=33777,co=33778,ho=33779,sl=35840,rl=35841,ol=35842,al=35843,ll=36196,cl=37492,hl=37496,ul=37488,fl=37489,uo=37490,dl=37491,pl=37808,ml=37809,gl=37810,xl=37811,_l=37812,vl=37813,yl=37814,Ml=37815,Sl=37816,El=37817,bl=37818,Tl=37819,wl=37820,Al=37821,Rl=36492,Cl=36494,Il=36495,Pl=36283,Ll=36284,fo=36285,Dl=36286;var Tr=2300,ga=2301,oa=2302,Fc=2303,Oc=2400,Bc=2401,zc=2402;var If=3200;var Nl=0,Pf=1,Ti="",Oe="srgb",wr="srgb-linear",Ar="linear",be="srgb";var aa=7680;var Lf=519,Df=512,Nf=513,Uf=514,fh=515,Ff=516,Of=517,dh=518,ph=519,mh=35044;var gh="300 es",Un=2e3,Bs=2001;function yp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Mp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bf(){let i=Rr("canvas");return i.style.display="block",i}var Su={},zs=null;function Cr(...i){let t="THREE."+i.shift();zs?zs("log",t,...i):console.log(t,...i)}function zf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function jt(...i){i=zf(i);let t="THREE."+i.shift();if(zs)zs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ee(...i){i=zf(i);let t="THREE."+i.shift();if(zs)zs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Sr(...i){let t=i.join(" ");t in Su||(Su[t]=!0,jt(...i))}function Hf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Gf={[la]:la,[ha]:da,[ua]:ua,[Os]:fa,[ca]:ca,[da]:ha,[pa]:pa,[fa]:Os},Qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var cc=Math.PI/180,xa=180/Math.PI;function Xi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function de(i,t,e){return Math.max(t,Math.min(e,i))}function Sp(i,t){return(i%t+t)%t}function hc(i,t,e){return(1-e)*i+e*t}function kf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ul(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Vf(i,t){if(t.constructor===Float32Array)return i;let e=Ul(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Wf(i,t){if(t.constructor===Float32Array)return i;let e=Ul(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var _t=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],p=r[o+2],M=r[o+3];if(u!==M||l!==f||c!==d||h!==p){let g=l*f+c*d+h*p+u*M;g<0&&(f=-f,d=-d,p=-p,M=-M,g=-g);let m=1-a;if(g<.9995){let S=Math.acos(g),v=Math.sin(S);m=Math.sin(m*S)/v,a=Math.sin(a*S)/v,l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+M*a}else{l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+M*a;let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Eu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Eu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return uc.copy(this).projectOnVector(t),this.sub(uc)}reflect(t){return this.sub(uc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},uc=new N,Eu=new Xe,ie=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],M=s[0],g=s[3],m=s[6],S=s[1],v=s[4],_=s[7],b=s[2],E=s[5],x=s[8];return r[0]=o*M+a*S+l*b,r[3]=o*g+a*v+l*E,r[6]=o*m+a*_+l*x,r[1]=c*M+h*S+u*b,r[4]=c*g+h*v+u*E,r[7]=c*m+h*_+u*x,r[2]=f*M+d*S+p*b,r[5]=f*g+d*v+p*E,r[8]=f*m+d*_+p*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=e*u+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/p;return t[0]=u*M,t[1]=(s*c-h*n)*M,t[2]=(a*n-s*o)*M,t[3]=f*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-a*e)*M,t[6]=d*M,t[7]=(n*l-c*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Sr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fc.makeScale(t,e)),this}rotate(t){return Sr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fc.makeRotation(-t)),this}translate(t,e){return Sr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},fc=new ie,bu=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tu=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ep(){let i={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===be&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===be&&(s.r=Fs(s.r),s.g=Fs(s.g),s.b=Fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ti?Ar:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wr]:{primaries:t,whitePoint:n,transfer:Ar,toXYZ:bu,fromXYZ:Tu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:t,whitePoint:n,transfer:be,toXYZ:bu,fromXYZ:Tu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),i}var ge=Ep();function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _s,_a=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{_s===void 0&&(_s=Rr("canvas")),_s.width=t.width,_s.height=t.height;let s=_s.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=_s}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Rr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gi(e[n]/255)*255):e[n]=gi(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},bp=0,Hs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Xi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(dc(s[o].image)):r.push(dc(s[o]))}else r=dc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function dc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_a.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}var Tp=0,pc=new N,xn=class i extends Qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=$n,s=$n,r=gn,o=Ei,a=qn,l=bn,c=i.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Xi(),this.name="",this.source=new Hs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(pc).x}get height(){return this.source.getSize(pc).y}get depth(){return this.source.getSize(pc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jn:t.x=t.x-Math.floor(t.x);break;case $n:t.x=t.x<0?0:1;break;case ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jn:t.y=t.y-Math.floor(t.y);break;case $n:t.y=t.y<0?0:1;break;case ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=rh;xn.DEFAULT_ANISOTROPY=1;var Be=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],M=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-M)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+M)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,_=(d+1)/2,b=(m+1)/2,E=(h+f)/4,x=(u+M)/4,y=(p+g)/4;return v>_&&v>b?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=x/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=y/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=x/r,s=y/r),this.set(n,s,r,e),this}let S=Math.sqrt((g-p)*(g-p)+(u-M)*(u-M)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(u-M)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},va=class extends Qn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new xn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Hs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cn=class extends va{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ir=class extends xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ya=class extends xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var oe=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,p,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,p,M,g)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,p,M,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=M,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/vs.setFromMatrixColumn(t,0).length(),r=1/vs.setFromMatrixColumn(t,1).length(),o=1/vs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,p=a*h,M=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-M*c,e[9]=-a*l,e[2]=M-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,M=c*u;e[0]=f+M*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=M+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,M=c*u;e[0]=f-M*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=M-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,p=a*h,M=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+M,e[1]=l*u,e[5]=M*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,M=a*c;e[0]=l*h,e[4]=M-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-M*u}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,M=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+M,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=M*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wp,t,Ap)}lookAt(t,e,n){let s=this.elements;return An.subVectors(t,e),An.lengthSq()===0&&(An.z=1),An.normalize(),Di.crossVectors(n,An),Di.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Di.crossVectors(n,An)),Di.normalize(),Lo.crossVectors(An,Di),s[0]=Di.x,s[4]=Lo.x,s[8]=An.x,s[1]=Di.y,s[5]=Lo.y,s[9]=An.y,s[2]=Di.z,s[6]=Lo.z,s[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],M=n[6],g=n[10],m=n[14],S=n[3],v=n[7],_=n[11],b=n[15],E=s[0],x=s[4],y=s[8],A=s[12],w=s[1],I=s[5],L=s[9],U=s[13],P=s[2],G=s[6],V=s[10],X=s[14],ct=s[3],Z=s[7],B=s[11],Y=s[15];return r[0]=o*E+a*w+l*P+c*ct,r[4]=o*x+a*I+l*G+c*Z,r[8]=o*y+a*L+l*V+c*B,r[12]=o*A+a*U+l*X+c*Y,r[1]=h*E+u*w+f*P+d*ct,r[5]=h*x+u*I+f*G+d*Z,r[9]=h*y+u*L+f*V+d*B,r[13]=h*A+u*U+f*X+d*Y,r[2]=p*E+M*w+g*P+m*ct,r[6]=p*x+M*I+g*G+m*Z,r[10]=p*y+M*L+g*V+m*B,r[14]=p*A+M*U+g*X+m*Y,r[3]=S*E+v*w+_*P+b*ct,r[7]=S*x+v*I+_*G+b*Z,r[11]=S*y+v*L+_*V+b*B,r[15]=S*A+v*U+_*X+b*Y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],M=t[7],g=t[11],m=t[15],S=l*d-c*f,v=a*d-c*u,_=a*f-l*u,b=o*d-c*h,E=o*f-l*h,x=o*u-a*h;return e*(M*S-g*v+m*_)-n*(p*S-g*b+m*E)+s*(p*v-M*b+m*x)-r*(p*_-M*E+g*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],M=t[13],g=t[14],m=t[15],S=e*a-n*o,v=e*l-s*o,_=e*c-r*o,b=n*l-s*a,E=n*c-r*a,x=s*c-r*l,y=h*M-u*p,A=h*g-f*p,w=h*m-d*p,I=u*g-f*M,L=u*m-d*M,U=f*m-d*g,P=S*U-v*L+_*I+b*w-E*A+x*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/P;return t[0]=(a*U-l*L+c*I)*G,t[1]=(s*L-n*U-r*I)*G,t[2]=(M*x-g*E+m*b)*G,t[3]=(f*E-u*x-d*b)*G,t[4]=(l*w-o*U-c*A)*G,t[5]=(e*U-s*w+r*A)*G,t[6]=(g*_-p*x-m*v)*G,t[7]=(h*x-f*_+d*v)*G,t[8]=(o*L-a*w+c*y)*G,t[9]=(n*w-e*L-r*y)*G,t[10]=(p*E-M*_+m*S)*G,t[11]=(u*_-h*E-d*S)*G,t[12]=(a*A-o*I-l*y)*G,t[13]=(e*I-n*A+s*y)*G,t[14]=(M*v-p*b-g*S)*G,t[15]=(h*b-u*v+f*S)*G,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,M=o*h,g=o*u,m=a*u,S=l*c,v=l*h,_=l*u,b=n.x,E=n.y,x=n.z;return s[0]=(1-(M+m))*b,s[1]=(d+_)*b,s[2]=(p-v)*b,s[3]=0,s[4]=(d-_)*E,s[5]=(1-(f+m))*E,s[6]=(g+S)*E,s[7]=0,s[8]=(p+v)*x,s[9]=(g-S)*x,s[10]=(1-(f+M))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=vs.set(s[0],s[1],s[2]).length(),a=vs.set(s[4],s[5],s[6]).length(),l=vs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Hn.copy(this);let c=1/o,h=1/a,u=1/l;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=u,Hn.elements[9]*=u,Hn.elements[10]*=u,e.setFromRotationMatrix(Hn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Un,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),p,M;if(l)p=r/(o-r),M=o*r/(o-r);else if(a===Un)p=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===Bs)p=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Un,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),p,M;if(l)p=1/(o-r),M=o/(o-r);else if(a===Un)p=-2/(o-r),M=-(o+r)/(o-r);else if(a===Bs)p=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},vs=new N,Hn=new oe,wp=new N(0,0,0),Ap=new N(1,1,1),Di=new N,Lo=new N,An=new N,wu=new oe,Au=new Xe,_i=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(de(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-de(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(de(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Au.setFromEuler(this),this.setFromQuaternion(Au,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_i.DEFAULT_ORDER="XYZ";var Pr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Rp=0,Ru=new N,ys=new Xe,hi=new oe,Do=new N,ur=new N,Cp=new N,Ip=new Xe,Cu=new N(1,0,0),Iu=new N(0,1,0),Pu=new N(0,0,1),Lu={type:"added"},Pp={type:"removed"},Ms={type:"childadded",child:null},mc={type:"childremoved",child:null},tn=class i extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new _i,n=new Xe,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new ie}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.multiply(ys),this}rotateOnWorldAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.premultiply(ys),this}rotateX(t){return this.rotateOnAxis(Cu,t)}rotateY(t){return this.rotateOnAxis(Iu,t)}rotateZ(t){return this.rotateOnAxis(Pu,t)}translateOnAxis(t,e){return Ru.copy(t).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cu,t)}translateY(t){return this.translateOnAxis(Iu,t)}translateZ(t){return this.translateOnAxis(Pu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Do.copy(t):Do.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(ur,Do,this.up):hi.lookAt(Do,ur,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),ys.setFromRotationMatrix(hi),this.quaternion.premultiply(ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lu),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pp),mc.child=t,this.dispatchEvent(mc),mc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lu),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,t,Cp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,Ip,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};tn.DEFAULT_UP=new N(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _e=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Lp={type:"move"},Gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let M of t.hand.values()){let g=e.getJointPose(M,n),m=this._getHandJoint(c,M);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new _e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},No={h:0,s:0,l:0};function gc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ae=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ge.workingColorSpace){if(t=Sp(t,1),e=de(e,0,1),n=de(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=gc(o,r,t+1/3),this.g=gc(o,r,t),this.b=gc(o,r,t-1/3)}return ge.colorSpaceToWorking(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){let n=Xf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return ge.workingToColorSpace(cn.copy(this),t),Math.round(de(cn.r*255,0,255))*65536+Math.round(de(cn.g*255,0,255))*256+Math.round(de(cn.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(cn.copy(this),e);let n=cn.r,s=cn.g,r=cn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=Oe){ge.workingToColorSpace(cn.copy(this),t);let e=cn.r,n=cn.g,s=cn.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ni),this.setHSL(Ni.h+t,Ni.s+e,Ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ni),t.getHSL(No);let n=hc(Ni.h,No.h,e),s=hc(Ni.s,No.s,e),r=hc(Ni.l,No.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new ae;ae.NAMES=Xf;var Lr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ae(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Dr=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Gn=new N,ui=new N,xc=new N,fi=new N,Ss=new N,Es=new N,Du=new N,_c=new N,vc=new N,yc=new N,Mc=new Be,Sc=new Be,Ec=new Be,mi=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Gn.subVectors(t,e),s.cross(Gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Gn.subVectors(s,e),ui.subVectors(n,e),xc.subVectors(t,e);let o=Gn.dot(Gn),a=Gn.dot(ui),l=Gn.dot(xc),c=ui.dot(ui),h=ui.dot(xc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Mc.setScalar(0),Sc.setScalar(0),Ec.setScalar(0),Mc.fromBufferAttribute(t,e),Sc.fromBufferAttribute(t,n),Ec.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Mc,r.x),o.addScaledVector(Sc,r.y),o.addScaledVector(Ec,r.z),o}static isFrontFacing(t,e,n,s){return Gn.subVectors(n,e),ui.subVectors(t,e),Gn.cross(ui).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Gn.cross(ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ss.subVectors(s,n),Es.subVectors(r,n),_c.subVectors(t,n);let l=Ss.dot(_c),c=Es.dot(_c);if(l<=0&&c<=0)return e.copy(n);vc.subVectors(t,s);let h=Ss.dot(vc),u=Es.dot(vc);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(Ss,o);yc.subVectors(t,r);let d=Ss.dot(yc),p=Es.dot(yc);if(p>=0&&d<=p)return e.copy(r);let M=d*c-l*p;if(M<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Es,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return Du.subVectors(r,s),a=(u-h)/(u-h+(d-p)),e.copy(s).addScaledVector(Du,a);let m=1/(g+M+f);return o=M*m,a=f*m,e.copy(n).addScaledVector(Ss,o).addScaledVector(Es,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ti=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,kn):kn.fromBufferAttribute(r,o),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Uo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Uo.copy(n.boundingBox)),Uo.applyMatrix4(t.matrixWorld),this.union(Uo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fr),Fo.subVectors(this.max,fr),bs.subVectors(t.a,fr),Ts.subVectors(t.b,fr),ws.subVectors(t.c,fr),Ui.subVectors(Ts,bs),Fi.subVectors(ws,Ts),es.subVectors(bs,ws);let e=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-es.z,es.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,es.z,0,-es.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-es.y,es.x,0];return!bc(e,bs,Ts,ws,Fo)||(e=[1,0,0,0,1,0,0,0,1],!bc(e,bs,Ts,ws,Fo))?!1:(Oo.crossVectors(Ui,Fi),e=[Oo.x,Oo.y,Oo.z],bc(e,bs,Ts,ws,Fo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},di=[new N,new N,new N,new N,new N,new N,new N,new N],kn=new N,Uo=new ti,bs=new N,Ts=new N,ws=new N,Ui=new N,Fi=new N,es=new N,fr=new N,Fo=new N,Oo=new N,ns=new N;function bc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ns.fromArray(i,r);let a=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),l=t.dot(ns),c=e.dot(ns),h=n.dot(ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var We=new N,Bo=new _t,Dp=0,sn=class extends Qn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=mh,this.updateRanges=[],this.gpuType=Fn,this.version=0,this._normalizationScale=t!==void 0?Ul(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Bo.fromBufferAttribute(this,e),Bo.applyMatrix3(t),this.setXY(e,Bo.x,Bo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Vf(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Wf(t,this.array)}};var Nr=class extends sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ur=class extends sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ne=class extends sn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Np=new ti,dr=new N,Tc=new N,vi=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Np.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dr.subVectors(t,this.center);let e=dr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(dr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Tc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dr.copy(t.center).add(Tc)),this.expandByPoint(dr.copy(t.center).sub(Tc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Up=0,Nn=new oe,wc=new tn,As=new N,Rn=new ti,pr=new ti,je=new N,Te=class i extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yp(t)?Ur:Nr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ie().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,e,n){return Nn.makeTranslation(t,e,n),this.applyMatrix4(Nn),this}scale(t,e,n){return Nn.makeScale(t,e,n),this.applyMatrix4(Nn),this}lookAt(t){return wc.lookAt(t),wc.updateMatrix(),this.applyMatrix4(wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ne(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(Rn.min,pr.min),Rn.expandByPoint(je),je.addVectors(Rn.max,pr.max),Rn.expandByPoint(je)):(Rn.expandByPoint(pr.min),Rn.expandByPoint(pr.max))}Rn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(je));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)je.fromBufferAttribute(a,c),l&&(As.fromBufferAttribute(t,c),je.add(As)),s=Math.max(s,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let A=0;A<n.count;A++)a[A]=new N,l[A]=new N;let h=new N,u=new N,f=new N,d=new _t,p=new _t,M=new _t,g=new N,m=new N;function S(A,w,I){c[A]=c[w]=c[I]=1,h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,w),f.fromBufferAttribute(n,I),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,w),M.fromBufferAttribute(r,I),u.sub(h),f.sub(h),p.sub(d),M.sub(d);let L=1/(p.x*M.y-M.x*p.y);isFinite(L)&&(g.copy(u).multiplyScalar(M.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-M.x).multiplyScalar(L),a[A].add(g),a[w].add(g),a[I].add(g),l[A].add(m),l[w].add(m),l[I].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let A=0,w=v.length;A<w;++A){let I=v[A],L=I.start,U=I.count;for(let P=L,G=L+U;P<G;P+=3)S(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let _=new N,b=new N,E=new N,x=new N;function y(A){E.fromBufferAttribute(s,A),x.copy(E);let w=a[A];_.copy(w),_.sub(E.multiplyScalar(E.dot(w))).normalize(),b.crossVectors(x,w);let L=b.dot(l[A])<0?-1:1;o.setXYZW(A,_.x,_.y,_.z,L)}for(let A=0,w=n.count;A<w;++A)c[A]&&y(A);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),M=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let M=0,g=l.length;M<g;M++){a.isInterleavedBufferAttribute?d=l[M]*a.data.stride+a.offset:d=l[M]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new sn(f,h,u)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=mh,this.updateRanges=[],this.version=0,this.uuid=Xi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Nu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Nu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Nu(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Xi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var pn=new N,ks=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?Ul(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix4(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyNormalMatrix(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.transformDirection(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Cr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new sn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Cr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Vf(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Wf(t,this.data.array)}},Ac=new N,Fp=new N,Op=new ie,Vn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ac.subVectors(n,e).cross(Fp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ac),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Op.getNormalMatrix(t),s=this.coplanarPoint(Ac).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Bp=0,ei=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=js,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$c,this.blendDst=Kc,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=aa,this.stencilZFail=aa,this.stencilZPass=aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ae().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Vn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _t().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _t().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},yi=class extends ei{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Rs,mr=new N,Cs=new N,Is=new N,Ps=new _t,gr=new _t,qf=new oe,zo=new N,xr=new N,Ho=new N,Uu=new _t,Rc=new _t,Fu=new _t,Bi=class extends tn{constructor(t=new yi){if(super(),this.isSprite=!0,this.type="Sprite",Rs===void 0){Rs=new Te;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fr(e,5);Rs.setIndex([0,1,2,0,2,3]),Rs.setAttribute("position",new ks(n,3,0,!1)),Rs.setAttribute("uv",new ks(n,2,3,!1))}this.geometry=Rs,this.material=t,this.center=new _t(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ee('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cs.setFromMatrixScale(this.matrixWorld),qf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Is.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cs.multiplyScalar(-Is.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Go(zo.set(-.5,-.5,0),Is,o,Cs,s,r),Go(xr.set(.5,-.5,0),Is,o,Cs,s,r),Go(Ho.set(.5,.5,0),Is,o,Cs,s,r),Uu.set(0,0),Rc.set(1,0),Fu.set(1,1);let a=t.ray.intersectTriangle(zo,xr,Ho,!1,mr);if(a===null&&(Go(xr.set(-.5,.5,0),Is,o,Cs,s,r),Rc.set(0,1),a=t.ray.intersectTriangle(zo,Ho,xr,!1,mr),a===null))return;let l=t.ray.origin.distanceTo(mr);l<t.near||l>t.far||e.push({distance:l,point:mr.clone(),uv:mi.getInterpolation(mr,zo,xr,Ho,Uu,Rc,Fu,new _t),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Go(i,t,e,n,s,r){Ps.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(gr.x=r*Ps.x-s*Ps.y,gr.y=s*Ps.x+r*Ps.y):gr.copy(Ps),i.copy(t),i.x+=gr.x,i.y+=gr.y,i.applyMatrix4(qf)}var pi=new N,Cc=new N,ko=new N,Vo=new N,Or=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Cc.copy(t).add(e).multiplyScalar(.5),ko.copy(e).sub(t).normalize(),Vo.copy(this.origin).sub(Cc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ko),a=Vo.dot(this.direction),l=-Vo.dot(ko),c=Vo.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let M=1/h;u*=M,f*=M,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Cc).addScaledVector(ko,f),d}intersectSphere(t,e){if(t.radius<0)return null;pi.subVectors(t.center,this.origin);let n=pi.dot(this.direction),s=pi.dot(pi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,M=e.y-o.y,g=e.z-o.z,m=n.x-o.x,S=n.y-o.y,v=n.z-o.z,_=Math.abs(l),b=Math.abs(c),E=Math.abs(h),x,y,A,w,I,L,U,P,G,V,X,ct;if(_>=b&&_>=E?(A=l,L=u,G=p,ct=m,l>=0?(x=c,y=h,w=f,I=d,U=M,P=g,V=S,X=v):(x=h,y=c,w=d,I=f,U=g,P=M,V=v,X=S)):b>=E?(A=c,L=f,G=M,ct=S,c>=0?(x=h,y=l,w=d,I=u,U=g,P=p,V=v,X=m):(x=l,y=h,w=u,I=d,U=p,P=g,V=m,X=v)):(A=h,L=d,G=g,ct=v,h>=0?(x=l,y=c,w=u,I=f,U=p,P=M,V=m,X=S):(x=c,y=l,w=f,I=u,U=M,P=p,V=S,X=m)),A===0)return null;let Z=x/A,B=y/A,Y=1/A,ft=w-Z*L,mt=I-B*L,$=U-Z*G,ut=P-B*G,Et=V-Z*ct,vt=X-B*ct,bt=Et*ut-vt*$,z=ft*vt-mt*Et,tt=$*mt-ut*ft;if(s){if(bt<0||z<0||tt<0)return null}else if((bt<0||z<0||tt<0)&&(bt>0||z>0||tt>0))return null;let k=bt+z+tt;if(k===0)return null;let it=Y*(bt*L+z*G+tt*ct);return(k>0?it<0:it>0)?null:this.at(it/k,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class extends ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ou=new oe,is=new Or,Wo=new vi,Bu=new N,Xo=new N,qo=new N,Yo=new N,Ic=new N,Zo=new N,zu=new N,Jo=new N,st=class extends tn{constructor(t=new Te,e=new xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Zo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ic.fromBufferAttribute(u,t),o?Zo.addScaledVector(Ic,h):Zo.addScaledVector(Ic.sub(e),h))}e.add(Zo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(r),is.copy(t.ray).recast(t.near),!(Wo.containsPoint(is.origin)===!1&&(is.intersectSphere(Wo,Bu)===null||is.origin.distanceToSquared(Bu)>(t.far-t.near)**2))&&(Ou.copy(r).invert(),is.copy(t.ray).applyMatrix4(Ou),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,is)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,M=f.length;p<M;p++){let g=f[p],m=o[g.materialIndex],S=Math.max(g.start,d.start),v=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let _=S,b=v;_<b;_+=3){let E=a.getX(_),x=a.getX(_+1),y=a.getX(_+2);s=$o(this,m,t,n,c,h,u,E,x,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),M=Math.min(a.count,d.start+d.count);for(let g=p,m=M;g<m;g+=3){let S=a.getX(g),v=a.getX(g+1),_=a.getX(g+2);s=$o(this,o,t,n,c,h,u,S,v,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,M=f.length;p<M;p++){let g=f[p],m=o[g.materialIndex],S=Math.max(g.start,d.start),v=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let _=S,b=v;_<b;_+=3){let E=_,x=_+1,y=_+2;s=$o(this,m,t,n,c,h,u,E,x,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let g=p,m=M;g<m;g+=3){let S=g,v=g+1,_=g+2;s=$o(this,o,t,n,c,h,u,S,v,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function zp(i,t,e,n,s,r,o,a){let l;if(t.side===_n?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Vi,a),l===null)return null;Jo.copy(a),Jo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Jo);return c<e.near||c>e.far?null:{distance:c,point:Jo.clone(),object:i}}function $o(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Xo),i.getVertexPosition(l,qo),i.getVertexPosition(c,Yo);let h=zp(i,t,e,n,Xo,qo,Yo,zu);if(h){let u=new N;mi.getBarycoord(zu,Xo,qo,Yo,u),s&&(h.uv=mi.getInterpolatedAttribute(s,a,l,c,u,new _t)),r&&(h.uv1=mi.getInterpolatedAttribute(r,a,l,c,u,new _t)),o&&(h.normal=mi.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new N,materialIndex:0};mi.getNormal(Xo,qo,Yo,f.normal),h.face=f,h.barycoord=u}return h}var Br=class extends xn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Qe,h=Qe,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vs=class extends sn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ls=new oe,Hu=new oe,Ko=[],Gu=new ti,Hp=new oe,_r=new st,vr=new vi,Le=class extends st{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Vs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Hp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ls),Gu.copy(t.boundingBox).applyMatrix4(Ls),this.boundingBox.union(Gu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ls),vr.copy(t.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(vr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vr.copy(this.boundingSphere),vr.applyMatrix4(n),t.ray.intersectsSphere(vr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ls),Hu.multiplyMatrices(n,Ls),_r.matrixWorld=Hu,_r.raycast(t,Ko);for(let o=0,a=Ko.length;o<a;o++){let l=Ko[o];l.instanceId=r,l.object=this,e.push(l)}Ko.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Br(new Float32Array(s*this.count),s,this.count,tl,Fn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ss=new vi,Gp=new _t(.5,.5),jo=new N,zi=class{constructor(t=new Vn,e=new Vn,n=new Vn,s=new Vn,r=new Vn,o=new Vn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Un,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],M=r[9],g=r[10],m=r[11],S=r[12],v=r[13],_=r[14],b=r[15];if(s[0].setComponents(c-o,d-h,m-p,b-S).normalize(),s[1].setComponents(c+o,d+h,m+p,b+S).normalize(),s[2].setComponents(c+a,d+u,m+M,b+v).normalize(),s[3].setComponents(c-a,d-u,m-M,b-v).normalize(),n)s[4].setComponents(l,f,g,_).normalize(),s[5].setComponents(c-l,d-f,m-g,b-_).normalize();else if(s[4].setComponents(c-l,d-f,m-g,b-_).normalize(),e===Un)s[5].setComponents(c+l,d+f,m+g,b+_).normalize();else if(e===Bs)s[5].setComponents(l,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(t){ss.center.set(0,0,0);let e=Gp.distanceTo(t.center);return ss.radius=.7071067811865476+e,ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(jo.x=s.normal.x>0?t.max.x:t.min.x,jo.y=s.normal.y>0?t.max.y:t.min.y,jo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(jo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ku=new oe,Ma=class i{constructor(){this.coordinateSystem=Un,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];ku.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new zi),n[s].setFromProjectionMatrix(ku,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new zi),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var rs=class extends ei{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Sa=new N,Ea=new N,Vu=new oe,yr=new Or,Qo=new vi,Pc=new N,Wu=new N,Ws=class extends tn{constructor(t=new Te,e=new rs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Sa.fromBufferAttribute(e,s-1),Ea.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Sa.distanceTo(Ea);t.setAttribute("lineDistance",new ne(n,1))}else jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(s),Qo.radius+=r,t.ray.intersectsSphere(Qo)===!1)return;Vu.copy(s).invert(),yr.copy(t.ray).applyMatrix4(Vu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let M=d,g=p-1;M<g;M+=c){let m=h.getX(M),S=h.getX(M+1),v=ta(this,t,yr,l,m,S,M);v&&e.push(v)}if(this.isLineLoop){let M=h.getX(p-1),g=h.getX(d),m=ta(this,t,yr,l,M,g,p-1);m&&e.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let M=d,g=p-1;M<g;M+=c){let m=ta(this,t,yr,l,M,M+1,M);m&&e.push(m)}if(this.isLineLoop){let M=ta(this,t,yr,l,p-1,d,p-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ta(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Sa.fromBufferAttribute(a,s),Ea.fromBufferAttribute(a,r),e.distanceSqToSegment(Sa,Ea,Pc,Wu)>n)return;Pc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Pc);if(!(c<t.near||c>t.far))return{distance:c,point:Wu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Xu=new N,qu=new N,zr=class extends Ws{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Xu.fromBufferAttribute(e,s),qu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Xu.distanceTo(qu);t.setAttribute("lineDistance",new ne(n,1))}else jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Hr=class extends xn{constructor(t=[],e=hs,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},En=class extends xn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Mi=class extends xn{constructor(t,e,n=Wn,s,r,o,a=Qe,l=Qe,c,h=xi,u=1){if(h!==xi&&h!==bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Hs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Gr=class extends Mi{constructor(t,e=Wn,n=hs,s,r,o=Qe,a=Qe,l,c=xi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},kr=class extends xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Gt=class i extends Te{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function p(M,g,m,S,v,_,b,E,x,y,A){let w=_/x,I=b/y,L=_/2,U=b/2,P=E/2,G=x+1,V=y+1,X=0,ct=0,Z=new N;for(let B=0;B<V;B++){let Y=B*I-U;for(let ft=0;ft<G;ft++){let mt=ft*w-L;Z[M]=mt*S,Z[g]=Y*v,Z[m]=P,c.push(Z.x,Z.y,Z.z),Z[M]=0,Z[g]=0,Z[m]=E>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(ft/x),u.push(1-B/y),X+=1}}for(let B=0;B<y;B++)for(let Y=0;Y<x;Y++){let ft=f+Y+G*B,mt=f+Y+G*(B+1),$=f+(Y+1)+G*(B+1),ut=f+(Y+1)+G*B;l.push(ft,mt,ut),l.push(mt,$,ut),ct+=6}a.addGroup(d,ct,A),d+=ct,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Xs=class i extends Te{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new N,h=new _t;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},he=class i extends Te{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,M=[],g=n/2,m=0;S(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(d,2));function S(){let _=new N,b=new N,E=0,x=(e-t)/n;for(let y=0;y<=r;y++){let A=[],w=y/r,I=w*(e-t)+t;for(let L=0;L<=s;L++){let U=L/s,P=U*l+a,G=Math.sin(P),V=Math.cos(P);b.x=I*G,b.y=-w*n+g,b.z=I*V,u.push(b.x,b.y,b.z),_.set(G,x,V).normalize(),f.push(_.x,_.y,_.z),d.push(U,1-w),A.push(p++)}M.push(A)}for(let y=0;y<s;y++)for(let A=0;A<r;A++){let w=M[A][y],I=M[A+1][y],L=M[A+1][y+1],U=M[A][y+1];(t>0||A!==0)&&(h.push(w,I,U),E+=3),(e>0||A!==r-1)&&(h.push(I,L,U),E+=3)}c.addGroup(m,E,0),m+=E}function v(_){let b=p,E=new _t,x=new N,y=0,A=_===!0?t:e,w=_===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,g*w,0),f.push(0,w,0),d.push(.5,.5),p++;let I=p;for(let L=0;L<=s;L++){let P=L/s*l+a,G=Math.cos(P),V=Math.sin(P);x.x=A*V,x.y=g*w,x.z=A*G,u.push(x.x,x.y,x.z),f.push(0,w,0),E.x=G*.5+.5,E.y=V*.5*w+.5,d.push(E.x,E.y),p++}for(let L=0;L<s;L++){let U=b+L,P=I+L;_===!0?h.push(P,P+1,U):h.push(P+1,P,U),y+=3}c.addGroup(m,y,_===!0?1:2),m+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qs=class i extends he{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ba=class i extends Te{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let v=new N,_=new N,b=new N;for(let E=0;E<e.length;E+=3)d(e[E+0],v),d(e[E+1],_),d(e[E+2],b),l(v,_,b,S)}function l(S,v,_,b){let E=b+1,x=[];for(let y=0;y<=E;y++){x[y]=[];let A=S.clone().lerp(_,y/E),w=v.clone().lerp(_,y/E),I=E-y;for(let L=0;L<=I;L++)L===0&&y===E?x[y][L]=A:x[y][L]=A.clone().lerp(w,L/I)}for(let y=0;y<E;y++)for(let A=0;A<2*(E-y)-1;A++){let w=Math.floor(A/2);A%2===0?(f(x[y][w+1]),f(x[y+1][w]),f(x[y][w])):(f(x[y][w+1]),f(x[y+1][w+1]),f(x[y+1][w]))}}function c(S){let v=new N;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(S),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){let S=new N;for(let v=0;v<r.length;v+=3){S.x=r[v+0],S.y=r[v+1],S.z=r[v+2];let _=g(S)/2/Math.PI+.5,b=m(S)/Math.PI+.5;o.push(_,1-b)}p(),u()}function u(){for(let S=0;S<o.length;S+=6){let v=o[S+0],_=o[S+2],b=o[S+4],E=Math.max(v,_,b),x=Math.min(v,_,b);E>.9&&x<.1&&(v<.2&&(o[S+0]+=1),_<.2&&(o[S+2]+=1),b<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,v){let _=S*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function p(){let S=new N,v=new N,_=new N,b=new N,E=new _t,x=new _t,y=new _t;for(let A=0,w=0;A<r.length;A+=9,w+=6){S.set(r[A+0],r[A+1],r[A+2]),v.set(r[A+3],r[A+4],r[A+5]),_.set(r[A+6],r[A+7],r[A+8]),E.set(o[w+0],o[w+1]),x.set(o[w+2],o[w+3]),y.set(o[w+4],o[w+5]),b.copy(S).add(v).add(_).divideScalar(3);let I=g(b);M(E,w+0,S,I),M(x,w+2,v,I),M(y,w+4,_,I)}}function M(S,v,_,b){b<0&&S.x===1&&(o[v]=S.x-1),_.x===0&&_.z===0&&(o[v]=b/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new _t:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new N,s=[],r=[],o=[],a=new N,l=new oe;for(let d=0;d<=t;d++){let p=d/t;s[d]=this.getTangentAt(p,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(de(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(de(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Ys=class extends In{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new _t){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ta=class extends Ys{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function xh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Yu=new N,Zu=new N,Lc=new xh,Dc=new xh,Nc=new xh,wa=class extends In{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Zu.subVectors(s[0],s[1]).add(s[0]),c=Zu);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Yu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Yu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),M=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);M<1e-4&&(M=1),p<1e-4&&(p=M),g<1e-4&&(g=M),Lc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,M,g),Dc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,M,g),Nc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,M,g)}else this.curveType==="catmullrom"&&(Lc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Dc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Nc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Lc.calc(l),Dc.calc(l),Nc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ju(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function kp(i,t){let e=1-i;return e*e*t}function Vp(i,t){return 2*(1-i)*i*t}function Wp(i,t){return i*i*t}function Er(i,t,e,n){return kp(i,t)+Vp(i,e)+Wp(i,n)}function Xp(i,t){let e=1-i;return e*e*e*t}function qp(i,t){let e=1-i;return 3*e*e*i*t}function Yp(i,t){return 3*(1-i)*i*i*t}function Zp(i,t){return i*i*i*t}function br(i,t,e,n,s){return Xp(i,t)+qp(i,e)+Yp(i,n)+Zp(i,s)}var Vr=class extends In{constructor(t=new _t,e=new _t,n=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(br(t,s.x,r.x,o.x,a.x),br(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Aa=class extends In{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(br(t,s.x,r.x,o.x,a.x),br(t,s.y,r.y,o.y,a.y),br(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Wr=class extends In{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ra=class extends In{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xr=class extends In{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Er(t,s.x,r.x,o.x),Er(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ca=class extends In{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Er(t,s.x,r.x,o.x),Er(t,s.y,r.y,o.y),Er(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qr=class extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Ju(a,l.x,c.x,h.x,u.x),Ju(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new _t().fromArray(s))}return this}},Hc=Object.freeze({__proto__:null,ArcCurve:Ta,CatmullRomCurve3:wa,CubicBezierCurve:Vr,CubicBezierCurve3:Aa,EllipseCurve:Ys,LineCurve:Wr,LineCurve3:Ra,QuadraticBezierCurve:Xr,QuadraticBezierCurve3:Ca,SplineCurve:qr}),Ia=class extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Hc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Yr=class extends Ia{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Wr(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Xr(this.currentPoint.clone(),new _t(t,e),new _t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Vr(this.currentPoint.clone(),new _t(t,e),new _t(n,s),new _t(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new qr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Ys(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ni=class extends Yr{constructor(t){super(t),this.uuid=Xi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Yr().fromJSON(s))}return this}};function Jp(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Yf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=tm(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<s;f+=e){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Zr(r,o,e,a,l,c,0),o}function Yf(i,t,e,n,s){let r;if(s===um(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=$u(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=$u(o/n|0,i[o],i[o+1],r);return r&&Zs(r,r.next)&&($r(r),r=r.next),r}function os(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Zs(e,e.next)||ke(e.prev,e,e.next)===0)){if($r(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Zr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&rm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Kp(i,n,s,r):$p(i)){t.push(l.i,i.i,c.i),$r(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=jp(os(i),t),Zr(i,t,e,n,s,r,2)):o===2&&Qp(i,t,e,n,s,r):Zr(os(i),t,e,n,s,r,1);break}}}function $p(i){let t=i.prev,e=i,n=i.next;if(ke(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Mr(s,a,r,l,o,c,p.x,p.y)&&ke(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Kp(i,t,e,n){let s=i.prev,r=i,o=i.next;if(ke(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),M=Math.max(a,l,c),g=Math.max(h,u,f),m=Gc(d,p,t,e,n),S=Gc(M,g,t,e,n),v=i.prevZ,_=i.nextZ;for(;v&&v.z>=m&&_&&_.z<=S;){if(v.x>=d&&v.x<=M&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&Mr(a,h,l,u,c,f,v.x,v.y)&&ke(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=d&&_.x<=M&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&Mr(a,h,l,u,c,f,_.x,_.y)&&ke(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=M&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&Mr(a,h,l,u,c,f,v.x,v.y)&&ke(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=S;){if(_.x>=d&&_.x<=M&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&Mr(a,h,l,u,c,f,_.x,_.y)&&ke(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function jp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Zs(n,s)&&Jf(n,e,e.next,s)&&Jr(n,s)&&Jr(s,n)&&(t.push(n.i,e.i,s.i),$r(e),$r(e.next),e=i=s),e=e.next}while(e!==i);return os(e)}function Qp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&lm(o,a)){let l=$f(o,a);o=os(o,o.next),l=os(l,l.next),Zr(o,t,e,n,s,r,0),Zr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function tm(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Yf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(am(c))}s.sort(em);for(let r=0;r<s.length;r++)e=nm(s[r],e);return e}function em(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function nm(i,t){let e=im(i,t);if(!e)return t;let n=$f(e,i);return os(n,n.next),os(e,e.next)}function im(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Zs(i,e))return e;do{if(Zs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Zf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);Jr(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&sm(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function sm(i,t){return ke(i.prev,i,t.prev)<0&&ke(t.next,i,i.next)<0}function rm(i,t,e,n){let s=i;do s.z===0&&(s.z=Gc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,om(s)}function om(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Gc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function am(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Zf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Mr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Zf(i,t,e,n,s,r,o,a)}function lm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!cm(i,t)&&(Jr(i,t)&&Jr(t,i)&&hm(i,t)&&(ke(i.prev,i,t.prev)||ke(i,t.prev,t))||Zs(i,t)&&ke(i.prev,i,i.next)>0&&ke(t.prev,t,t.next)>0)}function ke(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Zs(i,t){return i.x===t.x&&i.y===t.y}function Jf(i,t,e,n){let s=na(ke(i,t,e)),r=na(ke(i,t,n)),o=na(ke(e,n,i)),a=na(ke(e,n,t));return!!(s!==r&&o!==a||s===0&&ea(i,e,t)||r===0&&ea(i,n,t)||o===0&&ea(e,i,n)||a===0&&ea(e,t,n))}function ea(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function na(i){return i>0?1:i<0?-1:0}function cm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Jf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Jr(i,t){return ke(i.prev,i,i.next)<0?ke(i,t,i.next)>=0&&ke(i,i.prev,t)>=0:ke(i,t,i.prev)<0||ke(i,i.next,t)<0}function hm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function $f(i,t){let e=kc(i.i,i.x,i.y),n=kc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function $u(i,t,e,n){let s=kc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function $r(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function kc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function um(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Vc=class{static triangulate(t,e,n=2){return Jp(t,e,n)}},Kn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Ku(t),ju(n,t);let o=t.length;e.forEach(Ku);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,ju(n,e[l]);let a=Vc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Ku(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ju(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var as=class i extends Te{constructor(t=new ni([new _t(.5,.5),new _t(-.5,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ne(s,3)),this.setAttribute("uv",new ne(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:fm,v,_=!1,b,E,x,y;if(m){v=m.getSpacedPoints(h),_=!0,f=!1;let F=m.isCatmullRomCurve3?m.closed:!1;b=m.computeFrenetFrames(h,F),E=new N,x=new N,y=new N}f||(g=0,d=0,p=0,M=0);let A=a.extractPoints(c),w=A.shape,I=A.holes;if(!Kn.isClockWise(w)){w=w.reverse();for(let F=0,W=I.length;F<W;F++){let q=I[F];Kn.isClockWise(q)&&(I[F]=q.reverse())}}function U(F){let q=10000000000000001e-36,gt=F[0];for(let ht=1;ht<=F.length;ht++){let Ht=ht%F.length,Nt=F[Ht],dt=Nt.x-gt.x,yt=Nt.y-gt.y,Mt=dt*dt+yt*yt,D=Math.max(Math.abs(Nt.x),Math.abs(Nt.y),Math.abs(gt.x),Math.abs(gt.y)),se=q*D*D;if(Mt<=se){F.splice(Ht,1),ht--;continue}gt=Nt}}U(w),I.forEach(U);let P=I.length,G=w;for(let F=0;F<P;F++){let W=I[F];w=w.concat(W)}function V(F,W,q){return W||ee("ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(W,q)}let X=w.length;function ct(F,W,q){let gt,ht,Ht,Nt=F.x-W.x,dt=F.y-W.y,yt=q.x-F.x,Mt=q.y-F.y,D=Nt*Nt+dt*dt,se=Nt*Mt-dt*yt;if(Math.abs(se)>Number.EPSILON){let kt=Math.sqrt(D),Qt=Math.sqrt(yt*yt+Mt*Mt),pt=W.x-dt/kt,Me=W.y+Nt/kt,qt=q.x-Mt/Qt,te=q.y+yt/Qt,C=((qt-pt)*Mt-(te-Me)*yt)/(Nt*Mt-dt*yt);gt=pt+Nt*C-F.x,ht=Me+dt*C-F.y;let T=gt*gt+ht*ht;if(T<=2)return new _t(gt,ht);Ht=Math.sqrt(T/2)}else{let kt=!1;Nt>Number.EPSILON?yt>Number.EPSILON&&(kt=!0):Nt<-Number.EPSILON?yt<-Number.EPSILON&&(kt=!0):Math.sign(dt)===Math.sign(Mt)&&(kt=!0),kt?(gt=-dt,ht=Nt,Ht=Math.sqrt(D)):(gt=Nt,ht=dt,Ht=Math.sqrt(D/2))}return new _t(gt/Ht,ht/Ht)}let Z=[];for(let F=0,W=G.length,q=W-1,gt=F+1;F<W;F++,q++,gt++)q===W&&(q=0),gt===W&&(gt=0),Z[F]=ct(G[F],G[q],G[gt]);let B=[],Y,ft=Z.concat();for(let F=0,W=P;F<W;F++){let q=I[F];Y=[];for(let gt=0,ht=q.length,Ht=ht-1,Nt=gt+1;gt<ht;gt++,Ht++,Nt++)Ht===ht&&(Ht=0),Nt===ht&&(Nt=0),Y[gt]=ct(q[gt],q[Ht],q[Nt]);B.push(Y),ft=ft.concat(Y)}let mt;if(g===0)mt=Kn.triangulateShape(G,I);else{let F=[],W=[];for(let q=0;q<g;q++){let gt=q/g,ht=d*Math.cos(gt*Math.PI/2),Ht=p*Math.sin(gt*Math.PI/2)+M;for(let Nt=0,dt=G.length;Nt<dt;Nt++){let yt=V(G[Nt],Z[Nt],Ht);z(yt.x,yt.y,-ht),gt===0&&F.push(yt)}for(let Nt=0,dt=P;Nt<dt;Nt++){let yt=I[Nt];Y=B[Nt];let Mt=[];for(let D=0,se=yt.length;D<se;D++){let kt=V(yt[D],Y[D],Ht);z(kt.x,kt.y,-ht),gt===0&&Mt.push(kt)}gt===0&&W.push(Mt)}}mt=Kn.triangulateShape(F,W)}let $=mt.length,ut=p+M;for(let F=0;F<X;F++){let W=f?V(w[F],ft[F],ut):w[F];_?(x.copy(b.normals[0]).multiplyScalar(W.x),E.copy(b.binormals[0]).multiplyScalar(W.y),y.copy(v[0]).add(x).add(E),z(y.x,y.y,y.z)):z(W.x,W.y,0)}for(let F=1;F<=h;F++)for(let W=0;W<X;W++){let q=f?V(w[W],ft[W],ut):w[W];_?(x.copy(b.normals[F]).multiplyScalar(q.x),E.copy(b.binormals[F]).multiplyScalar(q.y),y.copy(v[F]).add(x).add(E),z(y.x,y.y,y.z)):z(q.x,q.y,u/h*F)}for(let F=g-1;F>=0;F--){let W=F/g,q=d*Math.cos(W*Math.PI/2),gt=p*Math.sin(W*Math.PI/2)+M;for(let ht=0,Ht=G.length;ht<Ht;ht++){let Nt=V(G[ht],Z[ht],gt);z(Nt.x,Nt.y,u+q)}for(let ht=0,Ht=I.length;ht<Ht;ht++){let Nt=I[ht];Y=B[ht];for(let dt=0,yt=Nt.length;dt<yt;dt++){let Mt=V(Nt[dt],Y[dt],gt);_?z(Mt.x,Mt.y+v[h-1].y,v[h-1].x+q):z(Mt.x,Mt.y,u+q)}}}Et(),vt();function Et(){let F=s.length/3;if(f){let W=0,q=X*W;for(let gt=0;gt<$;gt++){let ht=mt[gt];tt(ht[2]+q,ht[1]+q,ht[0]+q)}W=h+g*2,q=X*W;for(let gt=0;gt<$;gt++){let ht=mt[gt];tt(ht[0]+q,ht[1]+q,ht[2]+q)}}else{for(let W=0;W<$;W++){let q=mt[W];tt(q[2],q[1],q[0])}for(let W=0;W<$;W++){let q=mt[W];tt(q[0]+X*h,q[1]+X*h,q[2]+X*h)}}n.addGroup(F,s.length/3-F,0)}function vt(){let F=s.length/3,W=0;bt(G,W),W+=G.length;for(let q=0,gt=I.length;q<gt;q++){let ht=I[q];bt(ht,W),W+=ht.length}n.addGroup(F,s.length/3-F,1)}function bt(F,W){let q=F.length;for(;--q>=0;){let gt=q,ht=q-1;ht<0&&(ht=F.length-1);for(let Ht=0,Nt=h+g*2;Ht<Nt;Ht++){let dt=X*Ht,yt=X*(Ht+1),Mt=W+gt+dt,D=W+ht+dt,se=W+ht+yt,kt=W+gt+yt;k(Mt,D,se,kt)}}}function z(F,W,q){l.push(F),l.push(W),l.push(q)}function tt(F,W,q){it(F),it(W),it(q);let gt=s.length/3,ht=S.generateTopUV(n,s,gt-3,gt-2,gt-1);Q(ht[0]),Q(ht[1]),Q(ht[2])}function k(F,W,q,gt){it(F),it(W),it(gt),it(W),it(q),it(gt);let ht=s.length/3,Ht=S.generateSideWallUV(n,s,ht-6,ht-3,ht-2,ht-1);Q(Ht[0]),Q(Ht[1]),Q(Ht[3]),Q(Ht[1]),Q(Ht[2]),Q(Ht[3])}function it(F){s.push(l[F*3+0]),s.push(l[F*3+1]),s.push(l[F*3+2])}function Q(F){r.push(F.x),r.push(F.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return dm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Hc[s.type]().fromJSON(s)),new i(n,t.options)}},fm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new _t(r,o),new _t(a,l),new _t(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],p=t[s*3+2],M=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new _t(o,1-l),new _t(c,1-u),new _t(f,1-p),new _t(M,1-m)]:[new _t(a,1-l),new _t(h,1-u),new _t(d,1-p),new _t(g,1-m)]}};function dm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Js=class i extends ba{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Re=class i extends Te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],M=[],g=[];for(let m=0;m<h;m++){let S=m*f-o;for(let v=0;v<c;v++){let _=v*u-r;p.push(_,-S,0),M.push(0,0,1),g.push(v/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){let v=S+c*m,_=S+c*(m+1),b=S+1+c*(m+1),E=S+1+c*m;d.push(v,_,E),d.push(_,b,E)}this.setIndex(d),this.setAttribute("position",new ne(p,3)),this.setAttribute("normal",new ne(M,3)),this.setAttribute("uv",new ne(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Kr=class i extends Te{constructor(t=new ni([new _t(0,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ne(s,3)),this.setAttribute("normal",new ne(r,3)),this.setAttribute("uv",new ne(o,2));function c(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,p=f.holes;Kn.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=p.length;g<m;g++){let S=p[g];Kn.isClockWise(S)===!0&&(p[g]=S.reverse())}let M=Kn.triangulateShape(d,p);for(let g=0,m=p.length;g<m;g++){let S=p[g];d=d.concat(S)}for(let g=0,m=d.length;g<m;g++){let S=d[g];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let g=0,m=M.length;g<m;g++){let S=M[g],v=S[0]+u,_=S[1]+u,b=S[2]+u;n.push(v,_,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return pm(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function pm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Pn=class i extends Te{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new N,f=new N,d=[],p=[],M=[],g=[];for(let m=0;m<=n;m++){let S=[],v=m/n,_=o+v*a,b=t*Math.cos(_),E=Math.sqrt(t*t-b*b),x=0;m===0&&o===0?x=.5/e:m===n&&l===Math.PI&&(x=-.5/e);for(let y=0;y<=e;y++){let A=y/e,w=s+A*r;u.x=-E*Math.cos(w),u.y=b,u.z=E*Math.sin(w),p.push(u.x,u.y,u.z),f.copy(u).normalize(),M.push(f.x,f.y,f.z),g.push(A+x,1-v),S.push(c++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){let v=h[m][S+1],_=h[m][S],b=h[m+1][S],E=h[m+1][S+1];(m!==0||o>0)&&d.push(v,_,E),(m!==n-1||l<Math.PI)&&d.push(_,b,E)}this.setIndex(d),this.setAttribute("position",new ne(p,3)),this.setAttribute("normal",new ne(M,3)),this.setAttribute("uv",new ne(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var jr=class i extends Te{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new N,d=new N,p=new N;for(let M=0;M<=n;M++){let g=o+M/n*a;for(let m=0;m<=s;m++){let S=m/s*r;d.x=(t+e*Math.cos(g))*Math.cos(S),d.y=(t+e*Math.cos(g))*Math.sin(S),d.z=e*Math.sin(g),c.push(d.x,d.y,d.z),f.x=t*Math.cos(S),f.y=t*Math.sin(S),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(m/s),u.push(M/n)}}for(let M=1;M<=n;M++)for(let g=1;g<=s;g++){let m=(s+1)*M+g-1,S=(s+1)*(M-1)+g-1,v=(s+1)*(M-1)+g,_=(s+1)*M+g;l.push(m,S,_),l.push(S,v,_)}this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function fs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Qu(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Qu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function hn(i){let t={};for(let e=0;e<i.length;e++){let n=fs(i[e]);for(let s in n)t[s]=n[s]}return t}function Qu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function mm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function _h(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}var Kf={clone:fs,merge:hn},gm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ii=class extends ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gm,this.fragmentShader=xm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fs(t.uniforms),this.uniformsGroups=mm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ae().setHex(s.value);break;case"v2":this.uniforms[n].value=new _t().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Be().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ie().fromArray(s.value);break;case"m4":this.uniforms[n].value=new oe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Pa=class extends ii{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var At=class extends ei{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nl,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=Ya,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},La=class extends ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=If,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Da=class extends ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ds(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ia(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Hi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Na=class extends Hi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oc,endingEnd:Oc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bc:r=t,a=2*e-n;break;case zc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bc:o=t,l=2*n-e;break;case zc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(s-e),M=p*p,g=M*p,m=-f*g+2*f*M-f*p,S=(1+f)*g+(-1.5-2*f)*M+(-.5+f)*p+1,v=(-1-d)*g+(1.5+d)*M+.5*p,_=d*g-d*M;for(let b=0;b!==a;++b)r[b]=m*o[h+b]+S*o[c+b]+v*o[l+b]+_*o[u+b];return r}},Ua=class extends Hi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Fa=class extends Hi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Oa=class extends Hi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(s-e),M=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*M+o[l+g]*p;return r}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let M=o[c+p],g=o[l+p],m=d*f+p*2,S=u[m],v=u[m+1],_=t*f+p*2,b=h[_],E=h[_+1],x=vm(n,e,S,b,s);r[p]=jf(x,M,v,E,g)}return r}};function jf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function _m(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function vm(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=jf(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=_m(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Ln=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ds(e,this.TimeBufferType),this.values=Ds(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ds(t.times,Array),values:Ds(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ia(t.settings)&&(n.settings={inTangents:Ds(t.settings.inTangents,Array),outTangents:Ds(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Oa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Tr:e=this.InterpolantFactoryMethodDiscrete;break;case ga:e=this.InterpolantFactoryMethodLinear;break;case oa:e=this.InterpolantFactoryMethodSmooth;break;case Fc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tr;case this.InterpolantFactoryMethodLinear:return ga;case this.InterpolantFactoryMethodSmooth:return oa;case this.InterpolantFactoryMethodBezier:return Fc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;ia(this.settings)&&(tf(this.settings.inTangents,t),tf(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ia(this.settings)&&(ef(this.settings.inTangents,t),ef(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ee("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ee("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Mp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ee("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===oa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let M=e[u+p];if(M!==e[f+p]||M!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ia(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function tf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function ef(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=ga;var Gi=class extends Ln{constructor(t,e,n){super(t,e,n)}};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Tr;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends Ln{constructor(t,e,n,s){super(t,e,n,s)}};Ba.prototype.ValueTypeName="color";var za=class extends Ln{constructor(t,e,n,s){super(t,e,n,s)}};za.prototype.ValueTypeName="number";var Ha=class extends Hi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Xe.slerpFlat(r,0,o,c-a,o,c,l);return r}},Qr=class extends Ln{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ha(this.times,this.values,this.getValueSize(),t)}};Qr.prototype.ValueTypeName="quaternion";Qr.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends Ln{constructor(t,e,n){super(t,e,n)}};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Tr;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ga=class extends Ln{constructor(t,e,n,s){super(t,e,n,s)}};Ga.prototype.ValueTypeName="vector";var ka=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qf=new ka,Va=class{constructor(t){this.manager=t!==void 0?t:Qf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Va.DEFAULT_MATERIAL_NAME="__DEFAULT";var to=class extends tn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},eo=class extends to{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ae(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Uc=new oe,nf=new N,sf=new N,Wa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zi,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;nf.setFromMatrixPosition(t.matrixWorld),e.position.copy(nf),sf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Uc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Bs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Uc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},sa=new N,ra=new Xe,Jn=new N,no=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(sa,ra,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sa,ra,Jn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(sa,ra,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sa,ra,Jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Oi=new N,rf=new _t,of=new _t,mn=class extends no{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=xa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(cc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xa*2*Math.atan(Math.tan(cc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z)}getViewSize(t,e){return this.getViewBounds(t,rf,of),e.subVectors(of,rf)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(cc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var io=class extends no{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Wc=class extends Wa{constructor(){super(new io(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},so=class extends to{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new Wc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ns=-90,Us=1,$s=class extends tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mn(Ns,Us,t,e);s.layers=this.layers,this.add(s);let r=new mn(Ns,Us,t,e);r.layers=this.layers,this.add(r);let o=new mn(Ns,Us,t,e);o.layers=this.layers,this.add(o);let a=new mn(Ns,Us,t,e);a.layers=this.layers,this.add(a);let l=new mn(Ns,Us,t,e);l.layers=this.layers,this.add(l);let c=new mn(Ns,Us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=M,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Xa=class extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var vh="\\[\\]\\.:\\/",ym=new RegExp("["+vh+"]","g"),yh="[^"+vh+"]",Mm="[^"+vh.replace("\\.","")+"]",Sm=/((?:WC+[\/:])*)/.source.replace("WC",yh),Em=/(WCOD+)?/.source.replace("WCOD",Mm),bm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yh),Tm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yh),wm=new RegExp("^"+Sm+Em+bm+Tm+"$"),Am=["material","materials","bones","map"],Xc=class{constructor(t,e,n){let s=n||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ne=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ym,"")}static parseTrackName(t){let e=wm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Am.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=Xc;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yy=new Float32Array(1);var qc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Mh(i,t,e,n){let s=Rm(n);switch(e){case hh:return i*t;case tl:return i*t/s.components*s.byteLength;case el:return i*t/s.components*s.byteLength;case Wi:return i*t*2/s.components*s.byteLength;case nl:return i*t*2/s.components*s.byteLength;case uh:return i*t*3/s.components*s.byteLength;case qn:return i*t*4/s.components*s.byteLength;case il:return i*t*4/s.components*s.byteLength;case ao:case lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case co:case ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rl:case al:return Math.max(i,16)*Math.max(t,8)/4;case sl:case ol:return Math.max(i,8)*Math.max(t,8)/2;case ll:case cl:case ul:case fl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hl:case uo:case dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ml:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case gl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case xl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case _l:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case vl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case yl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case El:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case bl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case wl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Al:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Rl:case Cl:case Il:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Pl:case Ll:return Math.ceil(i/4)*Math.ceil(t/4)*8;case fo:case Dl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rm(i){switch(i){case bn:case oh:return{byteLength:1,components:1};case tr:case ah:case Xn:return{byteLength:2,components:1};case ja:case Qa:return{byteLength:2,components:4};case Wn:case Ka:case Fn:return{byteLength:4,components:1};case lh:case ch:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Md(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Nm(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],M=u[d];M.start<=p.start+p.count+1?p.count=Math.max(p.count,M.start+M.count-p.start):(++f,u[f]=M)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let M=u[d];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Um=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fm=`#ifdef USE_ALPHAHASH
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
#endif`,Om=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gm=`#ifdef USE_AOMAP
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
#endif`,km=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vm=`#ifdef USE_BATCHING
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
#endif`,Wm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ym=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zm=`#ifdef USE_IRIDESCENCE
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
#endif`,Jm=`#ifdef USE_BUMPMAP
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
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,e0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,n0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,i0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,s0=`#define PI 3.141592653589793
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
} // validated`,r0=`vec3 transformedNormal = objectNormal;
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
#endif`,o0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h0="gl_FragColor = linearToOutputTexel( gl_FragColor );",u0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,f0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M0=`#ifdef USE_GRADIENTMAP
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
}`,S0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,T0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,w0=`#ifdef USE_ENVMAP
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
#endif`,A0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P0=`PhysicalMaterial material;
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
#endif`,L0=`uniform sampler2D dfgLUT;
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
}`,D0=`
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
#endif`,N0=`#if defined( RE_IndirectDiffuse )
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
#endif`,U0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,O0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,G0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,W0=`#if defined( USE_POINTS_UV )
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
#endif`,X0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Z0=`#if defined( USE_MORPHCOLORS )
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
#endif`,J0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`#ifdef USE_MORPHTARGETS
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
#endif`,K0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ng=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ig=`#ifdef USE_NORMALMAP
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
#endif`,sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,og=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ag=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ug=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_g=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vg=`float getShadowMask() {
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
}`,yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mg=`#ifdef USE_SKINNING
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
#endif`,Sg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Eg=`#ifdef USE_SKINNING
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
#endif`,bg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ag=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rg=`#ifdef USE_TRANSMISSION
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
#endif`,Cg=`#ifdef USE_TRANSMISSION
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
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ng=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ug=`uniform sampler2D t2D;
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Og=`uniform float backgroundBlurriness;
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
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hg=`#include <common>
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
}`,Gg=`#if DEPTH_PACKING == 3200
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
}`,kg=`#define DISTANCE
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
}`,Vg=`#define DISTANCE
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
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`uniform float scale;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,Zg=`#include <common>
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
}`,Jg=`uniform vec3 diffuse;
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
}`,$g=`#define LAMBERT
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
}`,Kg=`#define LAMBERT
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
}`,jg=`#define MATCAP
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
}`,Qg=`#define MATCAP
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
}`,tx=`#define NORMAL
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
}`,ex=`#define NORMAL
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
}`,nx=`#define PHONG
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
}`,ix=`#define PHONG
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
}`,sx=`#define STANDARD
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
}`,rx=`#define STANDARD
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
}`,ox=`#define TOON
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
}`,ax=`#define TOON
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
}`,lx=`uniform float size;
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
}`,cx=`uniform vec3 diffuse;
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
}`,hx=`#include <common>
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
}`,ux=`uniform vec3 color;
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
}`,fx=`uniform float rotation;
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
}`,dx=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:Um,alphahash_pars_fragment:Fm,alphamap_fragment:Om,alphamap_pars_fragment:Bm,alphatest_fragment:zm,alphatest_pars_fragment:Hm,aomap_fragment:Gm,aomap_pars_fragment:km,batching_pars_vertex:Vm,batching_vertex:Wm,begin_vertex:Xm,beginnormal_vertex:qm,bsdfs:Ym,iridescence_fragment:Zm,bumpmap_pars_fragment:Jm,clipping_planes_fragment:$m,clipping_planes_pars_fragment:Km,clipping_planes_pars_vertex:jm,clipping_planes_vertex:Qm,color_fragment:t0,color_pars_fragment:e0,color_pars_vertex:n0,color_vertex:i0,common:s0,defaultnormal_vertex:r0,displacementmap_pars_vertex:o0,displacementmap_vertex:a0,emissivemap_fragment:l0,emissivemap_pars_fragment:c0,colorspace_fragment:h0,colorspace_pars_fragment:u0,envmap_fragment:f0,envmap_common_pars_fragment:d0,envmap_pars_fragment:p0,envmap_pars_vertex:m0,envmap_physical_pars_fragment:w0,envmap_vertex:g0,fog_vertex:x0,fog_pars_vertex:_0,fog_fragment:v0,fog_pars_fragment:y0,gradientmap_pars_fragment:M0,lightmap_pars_fragment:S0,lights_lambert_fragment:E0,lights_lambert_pars_fragment:b0,lights_pars_begin:T0,lights_toon_fragment:A0,lights_toon_pars_fragment:R0,lights_phong_fragment:C0,lights_phong_pars_fragment:I0,lights_physical_fragment:P0,lights_physical_pars_fragment:L0,lights_fragment_begin:D0,lights_fragment_maps:N0,lights_fragment_end:U0,lightprobes_pars_fragment:F0,logdepthbuf_fragment:O0,logdepthbuf_pars_fragment:B0,logdepthbuf_pars_vertex:z0,logdepthbuf_vertex:H0,map_fragment:G0,map_pars_fragment:k0,map_particle_fragment:V0,map_particle_pars_fragment:W0,metalnessmap_fragment:X0,metalnessmap_pars_fragment:q0,morphinstance_vertex:Y0,morphcolor_vertex:Z0,morphnormal_vertex:J0,morphtarget_pars_vertex:$0,morphtarget_vertex:K0,normal_fragment_begin:j0,normal_fragment_maps:Q0,normal_pars_fragment:tg,normal_pars_vertex:eg,normal_vertex:ng,normalmap_pars_fragment:ig,clearcoat_normal_fragment_begin:sg,clearcoat_normal_fragment_maps:rg,clearcoat_pars_fragment:og,iridescence_pars_fragment:ag,opaque_fragment:lg,packing:cg,premultiplied_alpha_fragment:hg,project_vertex:ug,dithering_fragment:fg,dithering_pars_fragment:dg,roughnessmap_fragment:pg,roughnessmap_pars_fragment:mg,shadowmap_pars_fragment:gg,shadowmap_pars_vertex:xg,shadowmap_vertex:_g,shadowmask_pars_fragment:vg,skinbase_vertex:yg,skinning_pars_vertex:Mg,skinning_vertex:Sg,skinnormal_vertex:Eg,specularmap_fragment:bg,specularmap_pars_fragment:Tg,tonemapping_fragment:wg,tonemapping_pars_fragment:Ag,transmission_fragment:Rg,transmission_pars_fragment:Cg,uv_pars_fragment:Ig,uv_pars_vertex:Pg,uv_vertex:Lg,worldpos_vertex:Dg,background_vert:Ng,background_frag:Ug,backgroundCube_vert:Fg,backgroundCube_frag:Og,cube_vert:Bg,cube_frag:zg,depth_vert:Hg,depth_frag:Gg,distance_vert:kg,distance_frag:Vg,equirect_vert:Wg,equirect_frag:Xg,linedashed_vert:qg,linedashed_frag:Yg,meshbasic_vert:Zg,meshbasic_frag:Jg,meshlambert_vert:$g,meshlambert_frag:Kg,meshmatcap_vert:jg,meshmatcap_frag:Qg,meshnormal_vert:tx,meshnormal_frag:ex,meshphong_vert:nx,meshphong_frag:ix,meshphysical_vert:sx,meshphysical_frag:rx,meshtoon_vert:ox,meshtoon_frag:ax,points_vert:lx,points_frag:cx,shadow_vert:hx,shadow_frag:ux,sprite_vert:fx,sprite_frag:dx},Ot={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},oi={basic:{uniforms:hn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:hn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ae(0)},envMapIntensity:{value:1}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:hn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:hn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:hn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new ae(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:hn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:hn([Ot.points,Ot.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:hn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:hn([Ot.common,Ot.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:hn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:hn([Ot.sprite,Ot.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:hn([Ot.common,Ot.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:hn([Ot.lights,Ot.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};oi.physical={uniforms:hn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};var Fl={r:0,b:0,g:0},px=new oe,Sd=new ie;Sd.set(-1,0,0,0,1,0,0,0,1);function mx(i,t,e,n,s,r){let o=new ae(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(S){let v=S.isScene===!0?S.background:null;if(v&&v.isTexture){let _=S.backgroundBlurriness>0;v=t.get(v,_)}return v}function p(S){let v=!1,_=d(S);_===null?g(o,a):_&&_.isColor&&(g(_,1),v=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(S,v){let _=d(v);_&&_.isCubeTexture?(c===void 0&&(c=new st(new Gt(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:fs(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(px.makeRotationFromEuler(v.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Sd),c.material.toneMapped=ge.getTransfer(_.colorSpace)!==be,(h!==_||u!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new st(new Re(2,2),new ii({name:"BackgroundMaterial",uniforms:fs(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ge.getTransfer(_.colorSpace)!==be,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,v){S.getRGB(Fl,_h(i)),e.buffers.color.setClear(Fl.r,Fl.g,Fl.b,v,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,v=1){o.set(S),a=v,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,g(o,a)},render:p,addToRenderList:M,dispose:m}}function gx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(I,L,U,P,G){let V=!1,X=u(I,P,U,L);r!==X&&(r=X,c(r.object)),V=d(I,P,U,G),V&&p(I,P,U,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,_(I,L,U,P),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function u(I,L,U,P){let G=P.wireframe===!0,V=n[L.id];V===void 0&&(V={},n[L.id]=V);let X=I.isInstancedMesh===!0?I.id:0,ct=V[X];ct===void 0&&(ct={},V[X]=ct);let Z=ct[U.id];Z===void 0&&(Z={},ct[U.id]=Z);let B=Z[G];return B===void 0&&(B=f(l()),Z[G]=B),B}function f(I){let L=[],U=[],P=[];for(let G=0;G<e;G++)L[G]=0,U[G]=0,P[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:P,object:I,attributes:{},index:null}}function d(I,L,U,P){let G=r.attributes,V=L.attributes,X=0,ct=U.getAttributes();for(let Z in ct)if(ct[Z].location>=0){let Y=G[Z],ft=V[Z];if(ft===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(ft=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(ft=I.instanceColor)),Y===void 0||Y.attribute!==ft||ft&&Y.data!==ft.data)return!0;X++}return r.attributesNum!==X||r.index!==P}function p(I,L,U,P){let G={},V=L.attributes,X=0,ct=U.getAttributes();for(let Z in ct)if(ct[Z].location>=0){let Y=V[Z];Y===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor));let ft={};ft.attribute=Y,Y&&Y.data&&(ft.data=Y.data),G[Z]=ft,X++}r.attributes=G,r.attributesNum=X,r.index=P}function M(){let I=r.newAttributes;for(let L=0,U=I.length;L<U;L++)I[L]=0}function g(I){m(I,0)}function m(I,L){let U=r.newAttributes,P=r.enabledAttributes,G=r.attributeDivisors;U[I]=1,P[I]===0&&(i.enableVertexAttribArray(I),P[I]=1),G[I]!==L&&(i.vertexAttribDivisor(I,L),G[I]=L)}function S(){let I=r.newAttributes,L=r.enabledAttributes;for(let U=0,P=L.length;U<P;U++)L[U]!==I[U]&&(i.disableVertexAttribArray(U),L[U]=0)}function v(I,L,U,P,G,V,X){X===!0?i.vertexAttribIPointer(I,L,U,G,V):i.vertexAttribPointer(I,L,U,P,G,V)}function _(I,L,U,P){M();let G=P.attributes,V=U.getAttributes(),X=L.defaultAttributeValues;for(let ct in V){let Z=V[ct];if(Z.location>=0){let B=G[ct];if(B===void 0&&(ct==="instanceMatrix"&&I.instanceMatrix&&(B=I.instanceMatrix),ct==="instanceColor"&&I.instanceColor&&(B=I.instanceColor)),B!==void 0){let Y=B.normalized,ft=B.itemSize,mt=t.get(B);if(mt===void 0)continue;let $=mt.buffer,ut=mt.type,Et=mt.bytesPerElement,vt=ut===i.INT||ut===i.UNSIGNED_INT||B.gpuType===Ka;if(B.isInterleavedBufferAttribute){let bt=B.data,z=bt.isInterleavedBuffer===!0?bt.stride:bt.itemSize,tt=B.offset;if(bt.isInstancedInterleavedBuffer||bt.isInstancedBufferAttribute){for(let k=0;k<Z.locationSize;k++)m(Z.location+k,bt.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let k=0;k<Z.locationSize;k++)g(Z.location+k);i.bindBuffer(i.ARRAY_BUFFER,$);for(let k=0;k<Z.locationSize;k++)v(Z.location+k,ft/Z.locationSize,ut,Y,z*Et,(tt+ft/Z.locationSize*k)*Et,vt)}else{if(B.isInstancedBufferAttribute){for(let bt=0;bt<Z.locationSize;bt++)m(Z.location+bt,B.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let bt=0;bt<Z.locationSize;bt++)g(Z.location+bt);i.bindBuffer(i.ARRAY_BUFFER,$);for(let bt=0;bt<Z.locationSize;bt++)v(Z.location+bt,ft/Z.locationSize,ut,Y,ft*Et,ft/Z.locationSize*bt*Et,vt)}}else if(X!==void 0){let Y=X[ct];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(Z.location,Y);break;case 3:i.vertexAttrib3fv(Z.location,Y);break;case 4:i.vertexAttrib4fv(Z.location,Y);break;default:i.vertexAttrib1fv(Z.location,Y)}}}}S()}function b(){A();for(let I in n){let L=n[I];for(let U in L){let P=L[U];for(let G in P){let V=P[G];for(let X in V)h(V[X].object),delete V[X];delete P[G]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;let L=n[I.id];for(let U in L){let P=L[U];for(let G in P){let V=P[G];for(let X in V)h(V[X].object),delete V[X];delete P[G]}}delete n[I.id]}function x(I){for(let L in n){let U=n[L];for(let P in U){let G=U[P];if(G[I.id]===void 0)continue;let V=G[I.id];for(let X in V)h(V[X].object),delete V[X];delete G[I.id]}}}function y(I){for(let L in n){let U=n[L],P=I.isInstancedMesh===!0?I.id:0,G=U[P];if(G!==void 0){for(let V in G){let X=G[V];for(let ct in X)h(X[ct].object),delete X[ct];delete G[V]}delete U[P],Object.keys(U).length===0&&delete n[L]}}}function A(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:x,initAttributes:M,enableAttribute:g,disableUnusedAttributes:S}}function xx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function _x(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==qn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let y=x===Xn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==bn&&x!==Fn&&!y&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&jt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:M,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:_,maxSamples:b,samples:E}}function vx(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Vn,a=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,M=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let S=r?0:n,v=S*4,_=m.clippingState||null;l.value=_,_=h(p,f,v,d);for(let b=0;b!==v;++b)_[b]=e[b];m.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let M=u!==null?u.length:0,g=null;if(M!==0){if(g=l.value,p!==!0||g===null){let m=d+M*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,_=d;v!==M;++v,_+=4)o.copy(u[v]).applyMatrix4(S,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}var go=class extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Hr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gt(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:ls});r.uniforms.tEquirect.value=e;let o=new st(s,r),a=e.minFilter;return e.minFilter===Ei&&(e.minFilter=gn),new $s(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},td=256,yx=3,Mx=20,Ed=256,bd=16,Sx=3,Ex=new N,bx=new ae,Bl=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new $s(1,10,null),this._boxMesh=new st(new Gt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Ex}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,M=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(t.background=l.getClearColor(bx));let g=new $s(n,s,h);return g.position.copy(a),g.update(l,t),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=p,t.background=M,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(td,kf(t))}_fromTexture(t,e){t.mapping===hs||t.mapping===Qs?this._setSize(t.image.length===0?td:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=ed(t,!1,!1),n=Math.log2(t)-yx;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=ed(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===hs||t.mapping===Qs?(this._cubemapMaterial===null&&(this._cubemapMaterial=id()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=nd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Tx(),this._integrationMaterial=wx());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/bd);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-Sx)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(Ed*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Ax());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function ed(i,t,e){return new go(i,{minFilter:Ei,generateMipmaps:t,type:Xn,colorSpace:wr,depthBuffer:e})}function xo(i,t,e){return new ii({name:i,uniforms:t,vertexShader:ue.cube_vert,fragmentShader:e,side:_n,blending:ls,depthTest:!1,depthWrite:!1})}function Tx(){return xo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ed}u

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
	`)}function wx(){return xo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:bd}},`

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
	`)}function Ax(){return xo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Mx}
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
	`)}function nd(){return xo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function id(){return xo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Rx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Za||d===Ja)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let M=new go(p.height);return M.fromEquirectangularTexture(i,f),t.set(f,M),f.addEventListener("dispose",c),a(M.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===Za||d===Ja,M=d===hs||d===Qs;if(p||M){let g=e.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Bl(i)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let S=f.image;return p&&S&&S.height>0||M&&S&&l(S)?(n===null&&(n=new Bl(i)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,d){return d===Za?f.mapping=hs:d===Ja&&(f.mapping=Qs),f}function l(f){let d=0,p=6;for(let M=0;M<p;M++)f[M]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Cx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Sr("WebGLRenderer: "+n+" extension not supported."),s}}}function Ix(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let M=r.get(p);M&&(t.remove(M),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,M){return s[M.id]!==void 0||(M.addEventListener("dispose",a),s[M.id]=new WeakRef(M),o.register(M,M.id,M),e.memory.geometries++),M}function h(p){let M=p.attributes;for(let g in M)t.update(M[g],i.ARRAY_BUFFER)}function u(p){let M=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let S=M!==null?M.array.length:g.array.length/3-1,v=g.count>=65535?Ur:Nr,_=new v(Math.ceil(S/3)*6,1),b=_.array;if(M!==null){let x=M.array;m=M.version;for(let y=0,A=0;y<S;y+=3){let w=x[y+0],I=x[y+1],L=x[y+2];b[A++]=w,b[A++]=I,b[A++]=I,b[A++]=L,b[A++]=L,b[A++]=w}}else{m=g.version;for(let x=0,y=0;x<S;x+=3){let A=x+0,w=x+1,I=x+2;b[y++]=A,b[y++]=w,b[y++]=w,b[y++]=I,b[y++]=I,b[y++]=A}}_.version=m;let E=r.get(p);E&&t.remove(E),r.set(p,_)}function f(p){let M=r.get(p);if(M){let g=p.index;g!==null&&M.version<g.version&&u(p)}else u(p);return r.get(p)}function d(){for(let p in s){let M=s[p].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function Px(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let M=0;for(let g=0;g<d;g++)M+=f[g];e.update(M,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Lx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ee("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Dx(i,t,e){let n=new WeakMap,s=new Be;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let A=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),M===!0&&(v=3);let _=a.attributes.position.count*v,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let E=new Float32Array(_*b*4*u),x=new Ir(E,_,b,u);x.type=Fn,x.needsUpdate=!0;let y=v*4;for(let w=0;w<u;w++){let I=g[w],L=m[w],U=S[w],P=_*b*4*w;for(let G=0;G<I.count;G++){let V=G*y;d===!0&&(s.fromBufferAttribute(I,G),E[P+V+0]=s.x,E[P+V+1]=s.y,E[P+V+2]=s.z,E[P+V+3]=0),p===!0&&(s.fromBufferAttribute(L,G),E[P+V+4]=s.x,E[P+V+5]=s.y,E[P+V+6]=s.z,E[P+V+7]=0),M===!0&&(s.fromBufferAttribute(U,G),E[P+V+8]=s.x,E[P+V+9]=s.y,E[P+V+10]=s.z,E[P+V+11]=U.itemSize===4?s.w:1)}}f={count:u,texture:x,size:new _t(_,b)},n.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Nx(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Ux={[jc]:"LINEAR_TONE_MAPPING",[Qc]:"REINHARD_TONE_MAPPING",[th]:"CINEON_TONE_MAPPING",[eh]:"ACES_FILMIC_TONE_MAPPING",[ih]:"AGX_TONE_MAPPING",[sh]:"NEUTRAL_TONE_MAPPING",[nh]:"CUSTOM_TONE_MAPPING"};function Fx(i,t,e,n,s,r){let o=new Cn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Te;h.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ne([0,2,0,0,2,0],2));let u=new Pa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new st(h,u),d=new io(-1,1,1,-1,0,1),p=null,M=null,g=!1,m,S=null,v=[],_=!1;this.setSize=function(b,E){o.setSize(b,E),a!==null&&a.setSize(b,E),l!==null&&l.setSize(b,E);for(let x=0;x<v.length;x++){let y=v[x];y.setSize&&y.setSize(b,E)}},this.setEffects=function(b){v=b,_=v.length>0&&v[0].isRenderPass===!0;let E=o.width,x=o.height;v.length>0&&a===null&&(a=new Cn(E,x,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),l=new Cn(E,x,{type:Xn,depthBuffer:!1,stencilBuffer:!1}));let y=s===!0&&v.some(A=>A.needsDepthTexture===!0);y!==(o.depthTexture!==null)&&(y===!0&&c===null&&(c=new Mi(E,x),r===!0&&(c.format=bi,c.type=us)),o.dispose(),o.depthTexture=y?c:null,o.resolveDepthBuffer=y,o.storeMultisampledDepthBuffer=y);for(let A=0;A<v.length;A++){let w=v[A];w.setSize&&w.setSize(E,x),y&&w.needsDepthTexture===!0&&w.setDepthTexture&&w.setDepthTexture(c)}},this.begin=function(b,E){if(g||b.toneMapping===si&&v.length===0)return!1;if(S=E,E!==null){let x=E.width,y=E.height;(o.width!==x||o.height!==y)&&this.setSize(x,y)}return _===!1&&b.setRenderTarget(o),m=b.toneMapping,b.toneMapping=si,!0},this.hasRenderPass=function(){return _},this.end=function(b,E){b.toneMapping=m,g=!0;let x=o,y=a;for(let A=0;A<v.length;A++){let w=v[A];w.enabled!==!1&&(w.render(b,y,x,E),w.needsSwap!==!1&&(x=y,y=y===a?l:a))}if(p!==b.outputColorSpace||M!==b.toneMapping){p=b.outputColorSpace,M=b.toneMapping,u.defines={},ge.getTransfer(p)===be&&(u.defines.SRGB_TRANSFER="");let A=Ux[M];A&&(u.defines[A]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(S),b.render(f,d),S=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Td=new xn,wd=new Mi(1,1),Ad=new Gr(1),Rd=new Ir,Cd=new ya,Id=new Hr,sd=[],rd=[],od=new Float32Array(16),ad=new Float32Array(9),ld=new Float32Array(4);function nr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=sd[s];if(r===void 0&&(r=new Float32Array(s),sd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Hl(i,t){let e=rd[t];e===void 0&&(e=new Int32Array(t),rd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ox(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Bx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2fv(this.addr,t),Ye(e,t)}}function zx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;i.uniform3fv(this.addr,t),Ye(e,t)}}function Hx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4fv(this.addr,t),Ye(e,t)}}function Gx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;ld.set(n),i.uniformMatrix2fv(this.addr,!1,ld),Ye(e,n)}}function kx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;ad.set(n),i.uniformMatrix3fv(this.addr,!1,ad),Ye(e,n)}}function Vx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;od.set(n),i.uniformMatrix4fv(this.addr,!1,od),Ye(e,n)}}function Wx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Xx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2iv(this.addr,t),Ye(e,t)}}function qx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3iv(this.addr,t),Ye(e,t)}}function Yx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4iv(this.addr,t),Ye(e,t)}}function Zx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Jx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2uiv(this.addr,t),Ye(e,t)}}function $x(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3uiv(this.addr,t),Ye(e,t)}}function Kx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4uiv(this.addr,t),Ye(e,t)}}function Gl(i){return i.version===0&&(i.compareFunction=ph,i.needsUpdate=!0),i}function jx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Gl(wd):r=Td,e.setTexture2D(t||r,s)}function Qx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Cd,s)}function t_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Gl(Ad):r=Id,e.setTextureCube(t||r,s)}function e_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Rd,s)}function n_(i){switch(i){case 5126:return Ox;case 35664:return Bx;case 35665:return zx;case 35666:return Hx;case 35674:return Gx;case 35675:return kx;case 35676:return Vx;case 5124:case 35670:return Wx;case 35667:case 35671:return Xx;case 35668:case 35672:return qx;case 35669:case 35673:return Yx;case 5125:return Zx;case 36294:return Jx;case 36295:return $x;case 36296:return Kx;case 35678:case 36198:case 36298:case 36306:case 35682:return jx;case 35679:case 36299:case 36307:return Qx;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return e_}}function i_(i,t){i.uniform1fv(this.addr,t)}function s_(i,t){let e=nr(t,this.size,2);i.uniform2fv(this.addr,e)}function r_(i,t){let e=nr(t,this.size,3);i.uniform3fv(this.addr,e)}function o_(i,t){let e=nr(t,this.size,4);i.uniform4fv(this.addr,e)}function a_(i,t){let e=nr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function l_(i,t){let e=nr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function c_(i,t){let e=nr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function h_(i,t){i.uniform1iv(this.addr,t)}function u_(i,t){i.uniform2iv(this.addr,t)}function f_(i,t){i.uniform3iv(this.addr,t)}function d_(i,t){i.uniform4iv(this.addr,t)}function p_(i,t){i.uniform1uiv(this.addr,t)}function m_(i,t){i.uniform2uiv(this.addr,t)}function g_(i,t){i.uniform3uiv(this.addr,t)}function x_(i,t){i.uniform4uiv(this.addr,t)}function __(i,t,e){let n=this.cache,s=t.length,r=Hl(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Gl(wd):o=Td;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function v_(i,t,e){let n=this.cache,s=t.length,r=Hl(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Cd,r[o])}function y_(i,t,e){let n=this.cache,s=t.length,r=Hl(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Gl(Ad):o=Id;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function M_(i,t,e){let n=this.cache,s=t.length,r=Hl(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Rd,r[o])}function S_(i){switch(i){case 5126:return i_;case 35664:return s_;case 35665:return r_;case 35666:return o_;case 35674:return a_;case 35675:return l_;case 35676:return c_;case 5124:case 35670:return h_;case 35667:case 35671:return u_;case 35668:case 35672:return f_;case 35669:case 35673:return d_;case 5125:return p_;case 36294:return m_;case 36295:return g_;case 36296:return x_;case 35678:case 36198:case 36298:case 36306:case 35682:return __;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return M_}}var bh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=n_(e.type)}},Th=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=S_(e.type)}},wh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Sh=/(\w+)(\])?(\[|\.)?/g;function cd(i,t){i.seq.push(t),i.map[t.id]=t}function E_(i,t,e){let n=i.name,s=n.length;for(Sh.lastIndex=0;;){let r=Sh.exec(n),o=Sh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){cd(e,c===void 0?new bh(a,i,t):new Th(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new wh(a),cd(e,u)),e=u}}}var er=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);E_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function hd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var b_=37297,T_=0;function w_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ud=new ie;function A_(i){ge._getMatrix(ud,ge.workingColorSpace,i);let t=`mat3( ${ud.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(i)){case Ar:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function fd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+w_(i.getShaderSource(t),a)}else return r}function R_(i,t){let e=A_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var C_={[jc]:"Linear",[Qc]:"Reinhard",[th]:"Cineon",[eh]:"ACESFilmic",[ih]:"AgX",[sh]:"Neutral",[nh]:"Custom"};function I_(i,t){let e=C_[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ol=new N;function P_(){ge.getLuminanceCoefficients(Ol);let i=Ol.x.toFixed(4),t=Ol.y.toFixed(4),e=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mo).join(`
`)}function D_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function N_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function mo(i){return i!==""}function dd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function pd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var U_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ah(i){return i.replace(U_,F_)}function F_(i,t){let e=ue[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ah(e)}var O_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function md(i){return i.replace(O_,B_)}function B_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var z_={[ro]:"SHADOWMAP_TYPE_PCF",[Ks]:"SHADOWMAP_TYPE_VSM"};function H_(i){return z_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var G_={[Qs]:"ENVMAP_MODE_REFRACTION"};function k_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":G_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var V_={[Ya]:"ENVMAP_BLENDING_MULTIPLY",[Af]:"ENVMAP_BLENDING_MIX",[Rf]:"ENVMAP_BLENDING_ADD"};function W_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":V_[i.combine]||"ENVMAP_BLENDING_NONE"}function X_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=H_(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=k_(e),u=W_(e),f=L_(e),d=D_(r),p=s.createProgram(),M,g,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(mo).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(mo).join(`
`),g.length>0&&(g+=`
`)):(M=[gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mo).join(`
`),g=[gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?ue.tonemapping_pars_fragment:"",e.toneMapping!==si?I_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,R_("linearToOutputTexel",e.outputColorSpace),P_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(mo).join(`
`)),o=Ah(o),o=dd(o,e),o=pd(o,e),a=Ah(a),a=dd(a,e),a=pd(a,e),o=md(o),a=md(a),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,M=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",e.glslVersion===gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let S=m+M+o,v=m+g+a,_=hd(s,s.VERTEX_SHADER,S),b=hd(s,s.FRAGMENT_SHADER,v);s.attachShader(p,_),s.attachShader(p,b),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function E(w){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(p)||"",L=s.getShaderInfoLog(_)||"",U=s.getShaderInfoLog(b)||"",P=I.trim(),G=L.trim(),V=U.trim(),X=!0,ct=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,_,b);else{let Z=fd(s,_,"vertex"),B=fd(s,b,"fragment");ee("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+P+`
`+Z+`
`+B)}else P!==""?jt("WebGLProgram: Program Info Log:",P):(G===""||V==="")&&(ct=!1);ct&&(w.diagnostics={runnable:X,programLog:P,vertexShader:{log:G,prefix:M},fragmentShader:{log:V,prefix:g}})}s.deleteShader(_),s.deleteShader(b),x=new er(s,p),y=N_(s,p)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(p,b_)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=T_++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=_,this.fragmentShader=b,this}var q_=0,Rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ch(t),e.set(t,n)),n}},Ch=class{constructor(t){this.id=q_++,this.code=t,this.usedTimes=0}};function Y_(i){return i===Wi||i===uo||i===fo}function Z_(i,t,e,n,s,r){let o=new Pr,a=new Rh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,y,A,w,I,L){let U=w.fog,P=I.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?w.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,X=t.get(x.envMap||G,V),ct=f[x.type],Z=n.precision;x.precision!==null&&(Z=n.getMaxPrecision(x.precision),Z!==x.precision&&jt("WebGLProgram.getParameters:",x.precision,"not supported, using",Z,"instead."));let B=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Y=B!==void 0?B.length:0,ft=0;P.morphAttributes.position!==void 0&&(ft=1),P.morphAttributes.normal!==void 0&&(ft=2),P.morphAttributes.color!==void 0&&(ft=3);let mt,$,ut,Et;if(ct){let Ft=oi[ct];mt=Ft.vertexShader,$=Ft.fragmentShader}else{mt=x.vertexShader,$=x.fragmentShader;let Ft=a.getVertexShaderStage(x),Ae=a.getFragmentShaderStage(x);a.update(x,Ft,Ae),ut=Ft.id,Et=Ae.id}let vt=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),z=I.isInstancedMesh===!0,tt=I.isBatchedMesh===!0,k=!!x.map,it=!!x.matcap,Q=!!X,F=Q&&X.isPMREMTexture===!0,W=!!x.aoMap,q=!!x.lightMap,gt=!!x.bumpMap&&x.wireframe===!1,ht=!!x.normalMap,Ht=!!x.displacementMap,Nt=!!x.emissiveMap,dt=!!x.metalnessMap,yt=!!x.roughnessMap,Mt=x.anisotropy>0,D=x.clearcoat>0,se=x.diffuseRoughness>0,kt=x.dispersion>0,Qt=x.retroreflectivity>0,pt=x.iridescence>0,Me=x.sheen>0,qt=x.transmission>0,te=Mt&&!!x.anisotropyMap,C=D&&!!x.clearcoatMap,T=D&&!!x.clearcoatNormalMap,J=D&&!!x.clearcoatRoughnessMap,xt=se&&!!x.diffuseRoughnessMap,at=pt&&!!x.iridescenceMap,Tt=pt&&!!x.iridescenceThicknessMap,It=Me&&!!x.sheenColorMap,nt=Me&&!!x.sheenRoughnessMap,ot=!!x.specularMap,Pt=!!x.specularColorMap,O=!!x.specularIntensityMap,lt=qt&&!!x.transmissionMap,rt=qt&&!!x.thicknessMap,Lt=!!x.gradientMap,wt=!!x.alphaMap,Rt=x.alphaTest>0,Jt=!!x.alphaHash,ce=!!x.extensions,St=si;x.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(St=i.toneMapping);let $t=F?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,le={shaderID:ct,shaderType:x.type,shaderName:x.name,vertexShader:mt,fragmentShader:$,defines:x.defines,customVertexShaderID:ut,customFragmentShaderID:Et,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:Z,batching:tt,batchingColor:tt&&I._colorsTexture!==null,instancing:z,instancingColor:z&&I.instanceColor!==null,instancingMorph:z&&I.morphTexture!==null,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:ge.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:k,matcap:it,envMap:Q,envMapMode:Q&&X.mapping,envMapPMREM:F,envMapMaxLod:F?$t.length-1:null,envMapSize:F?$t[0].width:null,aoMap:W,lightMap:q,bumpMap:gt,normalMap:ht,displacementMap:Ht,emissiveMap:Nt,normalMapObjectSpace:ht&&x.normalMapType===Pf,normalMapTangentSpace:ht&&x.normalMapType===Nl,packedNormalMap:ht&&x.normalMapType===Nl&&Y_(x.normalMap.format),metalnessMap:dt,roughnessMap:yt,anisotropy:Mt,anisotropyMap:te,clearcoat:D,clearcoatMap:C,clearcoatNormalMap:T,clearcoatRoughnessMap:J,diffuseRoughness:se,diffuseRoughnessMap:xt,dispersion:kt,retroreflection:Qt,iridescence:pt,iridescenceMap:at,iridescenceThicknessMap:Tt,sheen:Me,sheenColorMap:It,sheenRoughnessMap:nt,specularMap:ot,specularColorMap:Pt,specularIntensityMap:O,transmission:qt,transmissionMap:lt,thicknessMap:rt,gradientMap:Lt,opaque:x.transparent===!1&&x.blending===js&&x.alphaToCoverage===!1,alphaMap:wt,alphaTest:Rt,alphaHash:Jt,combine:x.combine,mapUv:k&&d(x.map.channel),aoMapUv:W&&d(x.aoMap.channel),lightMapUv:q&&d(x.lightMap.channel),bumpMapUv:gt&&d(x.bumpMap.channel),normalMapUv:ht&&d(x.normalMap.channel),displacementMapUv:Ht&&d(x.displacementMap.channel),emissiveMapUv:Nt&&d(x.emissiveMap.channel),metalnessMapUv:dt&&d(x.metalnessMap.channel),roughnessMapUv:yt&&d(x.roughnessMap.channel),anisotropyMapUv:te&&d(x.anisotropyMap.channel),clearcoatMapUv:C&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:T&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:xt&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:at&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:It&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:nt&&d(x.sheenRoughnessMap.channel),specularMapUv:ot&&d(x.specularMap.channel),specularColorMapUv:Pt&&d(x.specularColorMap.channel),specularIntensityMapUv:O&&d(x.specularIntensityMap.channel),transmissionMapUv:lt&&d(x.transmissionMap.channel),thicknessMapUv:rt&&d(x.thicknessMap.channel),alphaMapUv:wt&&d(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ht||Mt),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!P.attributes.uv&&(k||wt),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&ht===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:bt,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:ft,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:L.filter(Ft=>Ft.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:St,decodeVideoTexture:k&&x.map.isVideoTexture===!0&&ge.getTransfer(x.map.colorSpace)===be,decodeVideoTextureEmissive:Nt&&x.emissiveMap.isVideoTexture===!0&&ge.getTransfer(x.emissiveMap.colorSpace)===be,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ye,flipSided:x.side===_n,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ce&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&x.extensions.multiDraw===!0||tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return le.vertexUv1s=l.has(1),le.vertexUv2s=l.has(2),le.vertexUv3s=l.has(3),l.clear(),le}function M(x){let y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(let A in x.defines)y.push(A),y.push(x.defines[A]);return x.isRawShaderMaterial===!1&&(g(y,x),m(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function g(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapPMREM),x.push(y.envMapMaxLod),x.push(y.envMapSize),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.diffuseRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.numSunLights),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numSunLightShadows),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.numLightProbeGrids),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function m(x,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.retroreflection&&o.enable(24),y.diffuseRoughness&&o.enable(25),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function S(x){let y=f[x.type],A;if(y){let w=oi[y];A=Kf.clone(w.uniforms)}else A=x.uniforms;return A}function v(x,y){let A=h.get(y);return A!==void 0?++A.usedTimes:(A=new X_(i,y,x,s),c.push(A),h.set(y,A)),A}function _(x){if(--x.usedTimes===0){let y=c.indexOf(x);c[y]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function E(){a.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:S,acquireProgram:v,releaseProgram:_,releaseShaderCache:b,programs:c,dispose:E}}function J_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function $_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function xd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _d(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,M,g,m){let S=i[t];return S===void 0?(S={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:M,renderOrder:f.renderOrder,z:g,group:m},i[t]=S):(S.id=f.id,S.object=f,S.geometry=d,S.material=p,S.materialVariant=o(f),S.groupOrder=M,S.renderOrder=f.renderOrder,S.z=g,S.group=m),t++,S}function l(f,d,p,M,g,m,S){S.reversedDepth===!0&&(g=-g);let v=a(f,d,p,M,g,m);p.transmission>0?n.push(v):p.transparent===!0?s.push(v):e.push(v)}function c(f,d,p,M,g,m){let S=a(f,d,p,M,g,m);p.transmission>0?n.unshift(S):p.transparent===!0?s.unshift(S):e.unshift(S)}function h(f,d){e.length>1&&e.sort(f||$_),n.length>1&&n.sort(d||xd),s.length>1&&s.sort(d||xd)}function u(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function K_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new _d,i.set(n,[o])):s>=r.length?(o=new _d,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function j_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new ae};break;case"SpotLight":e={position:new N,direction:new N,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Q_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var tv=0;function ev(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function nv(i){let t=new j_,e=Q_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new oe,o=new oe;function a(c){let h=0,u=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,p=0,M=0,g=0,m=0,S=0,v=0,_=0,b=0,E=0,x=0,y=0,A=0,w=0;c.sort(ev);for(let L=0,U=c.length;L<U;L++){let P=c[L],G=P.color,V=P.intensity,X=P.distance,ct=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Wi?ct=P.shadow.map.texture:ct=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=G.r*V,u+=G.g*V,f+=G.b*V;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(P.sh.coefficients[Z],V);w++}else if(P.isSunLight){let Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let B=P.shadow,Y=e.get(P);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),n.sunShadow[p]=Y,n.sunShadowMap[p]=ct;let ft=B.getViewportCount();for(let mt=0;mt<ft;mt++)n.sunShadowMatrix[M+mt]=B.getMatrix(mt),n.sunShadowCascade[M+mt]=B._cascadeData[mt];M+=ft,p++}n.sun[d]=Z,d++}else if(P.isDirectionalLight){let Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let B=P.shadow,Y=e.get(P);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,n.directionalShadow[g]=Y,n.directionalShadowMap[g]=ct,n.directionalShadowMatrix[g]=P.shadow.matrix,b++}n.directional[g]=Z,g++}else if(P.isSpotLight){let Z=t.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(G).multiplyScalar(V),Z.distance=X,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,n.spot[S]=Z;let B=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,B.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[S]=B.matrix,P.castShadow){let Y=e.get(P);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,n.spotShadow[S]=Y,n.spotShadowMap[S]=ct,x++}S++}else if(P.isRectAreaLight){let Z=t.get(P);Z.color.copy(G).multiplyScalar(V),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),n.rectArea[v]=Z,v++}else if(P.isPointLight){let Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){let B=P.shadow,Y=e.get(P);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,Y.shadowCameraNear=B.camera.near,Y.shadowCameraFar=B.camera.far,n.pointShadow[m]=Y,n.pointShadowMap[m]=ct,n.pointShadowMatrix[m]=P.shadow.matrix,E++}n.point[m]=Z,m++}else if(P.isHemisphereLight){let Z=t.get(P);Z.skyColor.copy(P.color).multiplyScalar(V),Z.groundColor.copy(P.groundColor).multiplyScalar(V),n.hemi[_]=Z,_++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ot.LTC_FLOAT_1,n.rectAreaLTC2=Ot.LTC_FLOAT_2):(n.rectAreaLTC1=Ot.LTC_HALF_1,n.rectAreaLTC2=Ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.sunLength!==d||I.directionalLength!==g||I.pointLength!==m||I.spotLength!==S||I.rectAreaLength!==v||I.hemiLength!==_||I.numSunShadows!==p||I.numDirectionalShadows!==b||I.numPointShadows!==E||I.numSpotShadows!==x||I.numSpotMaps!==y||I.numLightProbes!==w)&&(n.sun.length=d,n.directional.length=g,n.spot.length=S,n.rectArea.length=v,n.point.length=m,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+y-A,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,I.sunLength=d,I.directionalLength=g,I.pointLength=m,I.spotLength=S,I.rectAreaLength=v,I.hemiLength=_,I.numSunShadows=p,I.numDirectionalShadows=b,I.numPointShadows=E,I.numSpotShadows=x,I.numSpotMaps=y,I.numLightProbes=w,n.version=tv++)}function l(c,h){let u=0,f=0,d=0,p=0,M=0,g=0,m=h.matrixWorldInverse;for(let S=0,v=c.length;S<v;S++){let _=c[S];if(_.isSunLight){let b=n.sun[u];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(m),u++}else if(_.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(_.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let b=n.rectArea[M];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),M++}else if(_.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function vd(i){let t=new nv(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):e.push(u)}function a(u){n.push(u)}function l(){t.setup(e),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function iv(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new vd(i),t.set(s,[a])):r>=o.length?(a=new vd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var sv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rv=`uniform sampler2D shadow_pass;
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
}`,ov=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],av=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],yd=new oe,po=new N,Eh=new N;function lv(i,t,e){let n=new zi,s=new _t,r=new _t,o=new Be,a=new La,l=new Da,c={},h=e.maxTextureSize,u={[Vi]:_n,[_n]:Vi,[ye]:ye},f=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:sv,fragmentShader:rv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Te;p.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new st(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ro;let m=this.type;this.render=function(E,x,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===qa&&(jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ro);let A=i.getRenderTarget(),w=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),L=i.state;L.setBlending(ls),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let U=m!==this.type;U&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(G=>G.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,G=E.length;P<G;P++){let V=E[P],X=V.shadow;if(X===void 0){jt("WebGLShadowMap:",V,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ct=X.getFrameExtents();s.multiply(ct),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,X.mapSize.y=r.y));let Z=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Z,X.map===null||U===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Ks){if(V.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Cn(s.x,s.y,{format:Wi,type:Xn,minFilter:gn,magFilter:gn,generateMipmaps:!1}),X.map.texture.name=V.name+".shadowMap",X.map.depthTexture=new Mi(s.x,s.y,Fn),X.map.depthTexture.name=V.name+".shadowMapDepth",X.map.depthTexture.format=xi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Qe,X.map.depthTexture.magFilter=Qe}else V.isPointLight?(X.map=new go(s.x),X.map.depthTexture=new Gr(s.x,Wn)):(X.map=new Cn(s.x,s.y),X.map.depthTexture=new Mi(s.x,s.y,Wn)),X.map.depthTexture.name=V.name+".shadowMap",X.map.depthTexture.format=xi,this.type===ro?(X.map.depthTexture.compareFunction=Z?dh:fh,X.map.depthTexture.minFilter=gn,X.map.depthTexture.magFilter=gn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Qe,X.map.depthTexture.magFilter=Qe);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let B=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();V.isPointLight!==!0&&X.updateMatrices(V,y);let Y=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:y.layers;for(let ft=0;ft<B;ft++){let mt=X.getCamera(ft);if(V.isPointLight){let $=X.camera,ut=X.matrix,Et=V.distance||$.far;Et!==$.far&&($.far=Et,$.updateProjectionMatrix()),po.setFromMatrixPosition(V.matrixWorld),$.position.copy(po),Eh.copy($.position),Eh.add(ov[ft]),$.up.copy(av[ft]),$.lookAt(Eh),$.updateMatrixWorld(),ut.makeTranslation(-po.x,-po.y,-po.z),yd.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),X._frustum.setFromProjectionMatrix(yd,$.coordinateSystem,$.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,ft),i.clear();else{ft===0&&(i.setRenderTarget(X.map),i.clear());let $=X.getViewport(ft);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),L.viewport(o)}n=X.getFrustum(ft),_(x,y,mt,V,Y,this.type)}X.isPointLightShadow!==!0&&this.type===Ks&&S(X,y),X.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(A,w,I)};function S(E,x){let y=t.update(M);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Cn(s.x,s.y,{format:Wi,type:Xn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(x,null,y,f,M,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(x,null,y,d,M,null)}function v(E,x,y,A){let w=null,I=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)w=I;else if(w=y.isPointLight===!0?l:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let L=w.uuid,U=x.uuid,P=c[L];P===void 0&&(P={},c[L]=P);let G=P[U];G===void 0&&(G=w.clone(),P[U]=G,x.addEventListener("dispose",b)),w=G}if(w.visible=x.visible,w.wireframe=x.wireframe,A===Ks?w.side=x.shadowSide!==null?x.shadowSide:x.side:w.side=x.shadowSide!==null?x.shadowSide:u[x.side],w.alphaMap=x.alphaMap,w.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,w.map=x.map,w.clipShadows=x.clipShadows,w.clippingPlanes=x.clippingPlanes,w.clipIntersection=x.clipIntersection,w.displacementMap=x.displacementMap,w.displacementScale=x.displacementScale,w.displacementBias=x.displacementBias,w.wireframeLinewidth=x.wireframeLinewidth,w.linewidth=x.linewidth,y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let L=i.properties.get(w);L.light=y}return w}function _(E,x,y,A,w,I){if(E.visible===!1)return;if(E.layers.test(w)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===Ks)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let P=t.update(E),G=E.material;if(Array.isArray(G)){let V=P.groups;for(let X=0,ct=V.length;X<ct;X++){let Z=V[X],B=G[Z.materialIndex];if(B&&B.visible){let Y=v(E,B,A,I);E.onBeforeShadow(i,E,x,y,P,Y,Z),i.renderBufferDirect(y,null,P,Y,E,Z),E.onAfterShadow(i,E,x,y,P,Y,Z)}}}else if(G.visible){let V=v(E,G,A,I);E.onBeforeShadow(i,E,x,y,P,V,null),i.renderBufferDirect(y,null,P,V,E,null),E.onAfterShadow(i,E,x,y,P,V,null)}}let U=E.children;for(let P=0,G=U.length;P<G;P++)_(U[P],x,y,A,w,I)}function b(E){E.target.removeEventListener("dispose",b);for(let y in c){let A=c[y],w=E.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}function cv(i,t){function e(){let O=!1,lt=new Be,rt=null,Lt=new Be(0,0,0,0);return{setMask:function(wt){rt!==wt&&!O&&(i.colorMask(wt,wt,wt,wt),rt=wt)},setLocked:function(wt){O=wt},setClear:function(wt,Rt,Jt,ce,St){St===!0&&(wt*=ce,Rt*=ce,Jt*=ce),lt.set(wt,Rt,Jt,ce),Lt.equals(lt)===!1&&(i.clearColor(wt,Rt,Jt,ce),Lt.copy(lt))},reset:function(){O=!1,rt=null,Lt.set(-1,0,0,0)}}}function n(){let O=!1,lt=!1,rt=null,Lt=null,wt=null;return{setReversed:function(Rt){if(lt!==Rt){let Jt=t.get("EXT_clip_control");Rt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),lt=Rt;let ce=wt;wt=null,this.setClear(ce)}},getReversed:function(){return lt},setTest:function(Rt){Rt?bt(i.DEPTH_TEST):z(i.DEPTH_TEST)},setMask:function(Rt){rt!==Rt&&!O&&(i.depthMask(Rt),rt=Rt)},setFunc:function(Rt){if(lt&&(Rt=Gf[Rt]),Lt!==Rt){switch(Rt){case la:i.depthFunc(i.NEVER);break;case ca:i.depthFunc(i.ALWAYS);break;case ha:i.depthFunc(i.LESS);break;case Os:i.depthFunc(i.LEQUAL);break;case ua:i.depthFunc(i.EQUAL);break;case fa:i.depthFunc(i.GEQUAL);break;case da:i.depthFunc(i.GREATER);break;case pa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Lt=Rt}},setLocked:function(Rt){O=Rt},setClear:function(Rt){wt!==Rt&&(wt=Rt,lt&&(Rt=1-Rt),i.clearDepth(Rt))},reset:function(){O=!1,rt=null,Lt=null,wt=null,lt=!1}}}function s(){let O=!1,lt=null,rt=null,Lt=null,wt=null,Rt=null,Jt=null,ce=null,St=null;return{setTest:function($t){O||($t?bt(i.STENCIL_TEST):z(i.STENCIL_TEST))},setMask:function($t){lt!==$t&&!O&&(i.stencilMask($t),lt=$t)},setFunc:function($t,le,Ft){(rt!==$t||Lt!==le||wt!==Ft)&&(i.stencilFunc($t,le,Ft),rt=$t,Lt=le,wt=Ft)},setOp:function($t,le,Ft){(Rt!==$t||Jt!==le||ce!==Ft)&&(i.stencilOp($t,le,Ft),Rt=$t,Jt=le,ce=Ft)},setLocked:function($t){O=$t},setClear:function($t){St!==$t&&(i.clearStencil($t),St=$t)},reset:function(){O=!1,lt=null,rt=null,Lt=null,wt=null,Rt=null,Jt=null,ce=null,St=null}}}let r=new e,o=new n,a=new s,l={},c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],M=null,g=!1,m=null,S=null,v=null,_=null,b=null,E=null,x=null,y=new ae(0,0,0),A=0,w=!1,I=null,L=null,U=null,P=null,G=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ct=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(Z)[1]),X=ct>=1):Z.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),X=ct>=2);let B=null,Y={},ft=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),$=new Be().fromArray(ft),ut=new Be().fromArray(mt);function Et(O,lt,rt,Lt){let wt=new Uint8Array(4),Rt=i.createTexture();i.bindTexture(O,Rt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<rt;Jt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,Lt,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(lt+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return Rt}let vt={};vt[i.TEXTURE_2D]=Et(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=Et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[i.TEXTURE_2D_ARRAY]=Et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=Et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),bt(i.DEPTH_TEST),o.setFunc(Os),gt(!1),ht(Yc),bt(i.CULL_FACE),W(ls);function bt(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function z(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function tt(O,lt){return f[O]!==lt?(i.bindFramebuffer(O,lt),f[O]=lt,O===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=lt),O===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function k(O,lt){let rt=p,Lt=!1;if(O){rt=d.get(lt),rt===void 0&&(rt=[],d.set(lt,rt));let wt=O.textures;if(rt.length!==wt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let Rt=0,Jt=wt.length;Rt<Jt;Rt++)rt[Rt]=i.COLOR_ATTACHMENT0+Rt;rt.length=wt.length,Lt=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,Lt=!0);Lt&&i.drawBuffers(rt)}function it(O){return M!==O?(i.useProgram(O),M=O,!0):!1}let Q={[cs]:i.FUNC_ADD,[hf]:i.FUNC_SUBTRACT,[uf]:i.FUNC_REVERSE_SUBTRACT};Q[ff]=i.MIN,Q[df]=i.MAX;let F={[pf]:i.ZERO,[mf]:i.ONE,[gf]:i.SRC_COLOR,[$c]:i.SRC_ALPHA,[Sf]:i.SRC_ALPHA_SATURATE,[yf]:i.DST_COLOR,[_f]:i.DST_ALPHA,[xf]:i.ONE_MINUS_SRC_COLOR,[Kc]:i.ONE_MINUS_SRC_ALPHA,[Mf]:i.ONE_MINUS_DST_COLOR,[vf]:i.ONE_MINUS_DST_ALPHA,[Ef]:i.CONSTANT_COLOR,[bf]:i.ONE_MINUS_CONSTANT_COLOR,[Tf]:i.CONSTANT_ALPHA,[wf]:i.ONE_MINUS_CONSTANT_ALPHA};function W(O,lt,rt,Lt,wt,Rt,Jt,ce,St,$t){if(O===ls){g===!0&&(z(i.BLEND),g=!1);return}if(g===!1&&(bt(i.BLEND),g=!0),O!==cf){if(O!==m||$t!==w){if((S!==cs||b!==cs)&&(i.blendEquation(i.FUNC_ADD),S=cs,b=cs),$t)switch(O){case js:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Si:i.blendFunc(i.ONE,i.ONE);break;case Zc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ee("WebGLState: Invalid blending: ",O);break}else switch(O){case js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Zc:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jc:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",O);break}v=null,_=null,E=null,x=null,y.set(0,0,0),A=0,m=O,w=$t}return}wt=wt||lt,Rt=Rt||rt,Jt=Jt||Lt,(lt!==S||wt!==b)&&(i.blendEquationSeparate(Q[lt],Q[wt]),S=lt,b=wt),(rt!==v||Lt!==_||Rt!==E||Jt!==x)&&(i.blendFuncSeparate(F[rt],F[Lt],F[Rt],F[Jt]),v=rt,_=Lt,E=Rt,x=Jt),(ce.equals(y)===!1||St!==A)&&(i.blendColor(ce.r,ce.g,ce.b,St),y.copy(ce),A=St),m=O,w=!1}function q(O,lt){O.side===ye?z(i.CULL_FACE):bt(i.CULL_FACE);let rt=O.side===_n;lt&&(rt=!rt),gt(rt),O.blending===js&&O.transparent===!1?W(ls):W(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let Lt=O.stencilWrite;a.setTest(Lt),Lt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Nt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?bt(i.SAMPLE_ALPHA_TO_COVERAGE):z(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(O){I!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),I=O)}function ht(O){O!==af?(bt(i.CULL_FACE),O!==L&&(O===Yc?i.cullFace(i.BACK):O===lf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):z(i.CULL_FACE),L=O}function Ht(O){O!==U&&(X&&i.lineWidth(O),U=O)}function Nt(O,lt,rt){O?(bt(i.POLYGON_OFFSET_FILL),(P!==lt||G!==rt)&&(P=lt,G=rt,o.getReversed()&&(lt=-lt,rt=-rt),i.polygonOffset(lt,rt))):z(i.POLYGON_OFFSET_FILL)}function dt(O){O?bt(i.SCISSOR_TEST):z(i.SCISSOR_TEST)}function yt(O){O===void 0&&(O=i.TEXTURE0+V-1),B!==O&&(i.activeTexture(O),B=O)}function Mt(O,lt,rt){rt===void 0&&(B===null?rt=i.TEXTURE0+V-1:rt=B);let Lt=Y[rt];Lt===void 0&&(Lt={type:void 0,texture:void 0},Y[rt]=Lt),(Lt.type!==O||Lt.texture!==lt)&&(B!==rt&&(i.activeTexture(rt),B=rt),i.bindTexture(O,lt||vt[O]),Lt.type=O,Lt.texture=lt)}function D(){let O=Y[B];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function se(){try{i.compressedTexImage2D(...arguments)}catch(O){ee("WebGLState:",O)}}function kt(){try{i.compressedTexImage3D(...arguments)}catch(O){ee("WebGLState:",O)}}function Qt(){try{i.texSubImage2D(...arguments)}catch(O){ee("WebGLState:",O)}}function pt(){try{i.texSubImage3D(...arguments)}catch(O){ee("WebGLState:",O)}}function Me(){try{i.compressedTexSubImage2D(...arguments)}catch(O){ee("WebGLState:",O)}}function qt(){try{i.compressedTexSubImage3D(...arguments)}catch(O){ee("WebGLState:",O)}}function te(){try{i.texStorage2D(...arguments)}catch(O){ee("WebGLState:",O)}}function C(){try{i.texStorage3D(...arguments)}catch(O){ee("WebGLState:",O)}}function T(){try{i.texImage2D(...arguments)}catch(O){ee("WebGLState:",O)}}function J(){try{i.texImage3D(...arguments)}catch(O){ee("WebGLState:",O)}}function xt(O){return u[O]!==void 0?u[O]:i.getParameter(O)}function at(O,lt){u[O]!==lt&&(i.pixelStorei(O,lt),u[O]=lt)}function Tt(O){$.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),$.copy(O))}function It(O){ut.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ut.copy(O))}function nt(O,lt){let rt=c.get(lt);rt===void 0&&(rt=new WeakMap,c.set(lt,rt));let Lt=rt.get(O);Lt===void 0&&(Lt=i.getUniformBlockIndex(lt,O.name),i.uniformBlockBinding(lt,Lt,Lt),rt.set(O,Lt))}function ot(O,lt,rt){let wt=c.get(lt).get(O);l[wt]!==rt&&(i.bindBufferBase(i.UNIFORM_BUFFER,wt,rt),l[wt]=rt)}function Pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},B=null,Y={},f={},l={},d=new WeakMap,p=[],M=null,g=!1,m=null,S=null,v=null,_=null,b=null,E=null,x=null,y=new ae(0,0,0),A=0,w=!1,I=null,L=null,U=null,P=null,G=null,$.set(0,0,i.canvas.width,i.canvas.height),ut.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:bt,disable:z,bindFramebuffer:tt,drawBuffers:k,useProgram:it,setBlending:W,setMaterial:q,setFlipSided:gt,setCullFace:ht,setLineWidth:Ht,setPolygonOffset:Nt,setScissorTest:dt,activeTexture:yt,bindTexture:Mt,unbindTexture:D,compressedTexImage2D:se,compressedTexImage3D:kt,texImage2D:T,texImage3D:J,pixelStorei:at,getParameter:xt,updateUBOMapping:nt,uniformBlockBinding:ot,texStorage2D:te,texStorage3D:C,texSubImage2D:Qt,texSubImage3D:pt,compressedTexSubImage2D:Me,compressedTexSubImage3D:qt,scissor:Tt,viewport:It,reset:Pt}}function hv(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,h=new WeakMap,u=new Set,f,d=new WeakMap,p=new Set,M=new FinalizationRegistry(C=>p.delete(C)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,T){return g?new OffscreenCanvas(C,T):Rr("canvas")}function S(C,T,J){let xt=1,at=te(C);if((at.width>J||at.height>J)&&(xt=J/Math.max(at.width,at.height)),xt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Tt=Math.floor(xt*at.width),It=Math.floor(xt*at.height);f===void 0&&(f=m(Tt,It));let nt=T?m(Tt,It):f;return nt.width=Tt,nt.height=It,nt.getContext("2d").drawImage(C,0,0,Tt,It),jt("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+Tt+"x"+It+")."),nt}else return"data"in C&&jt("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),C;return C}function v(C){return C.generateMipmaps}function _(C){i.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(C,T,J,xt,at,Tt=!1){if(C!==null){if(i[C]!==void 0)return i[C];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let It;xt&&(It=t.get("EXT_texture_norm16"),It||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=T;if(T===i.RED&&(J===i.FLOAT&&(nt=i.R32F),J===i.HALF_FLOAT&&(nt=i.R16F),J===i.UNSIGNED_BYTE&&(nt=i.R8),J===i.UNSIGNED_SHORT&&It&&(nt=It.R16_EXT),J===i.SHORT&&It&&(nt=It.R16_SNORM_EXT)),T===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(nt=i.R8UI),J===i.UNSIGNED_SHORT&&(nt=i.R16UI),J===i.UNSIGNED_INT&&(nt=i.R32UI),J===i.BYTE&&(nt=i.R8I),J===i.SHORT&&(nt=i.R16I),J===i.INT&&(nt=i.R32I)),T===i.RG&&(J===i.FLOAT&&(nt=i.RG32F),J===i.HALF_FLOAT&&(nt=i.RG16F),J===i.UNSIGNED_BYTE&&(nt=i.RG8),J===i.UNSIGNED_SHORT&&It&&(nt=It.RG16_EXT),J===i.SHORT&&It&&(nt=It.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(nt=i.RG8UI),J===i.UNSIGNED_SHORT&&(nt=i.RG16UI),J===i.UNSIGNED_INT&&(nt=i.RG32UI),J===i.BYTE&&(nt=i.RG8I),J===i.SHORT&&(nt=i.RG16I),J===i.INT&&(nt=i.RG32I)),T===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),J===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),J===i.UNSIGNED_INT&&(nt=i.RGB32UI),J===i.BYTE&&(nt=i.RGB8I),J===i.SHORT&&(nt=i.RGB16I),J===i.INT&&(nt=i.RGB32I)),T===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),J===i.UNSIGNED_INT&&(nt=i.RGBA32UI),J===i.BYTE&&(nt=i.RGBA8I),J===i.SHORT&&(nt=i.RGBA16I),J===i.INT&&(nt=i.RGBA32I)),T===i.RGB&&(J===i.UNSIGNED_SHORT&&It&&(nt=It.RGB16_EXT),J===i.SHORT&&It&&(nt=It.RGB16_SNORM_EXT),J===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(nt=i.R11F_G11F_B10F)),T===i.RGBA){let ot=Tt?Ar:ge.getTransfer(at);J===i.FLOAT&&(nt=i.RGBA32F),J===i.HALF_FLOAT&&(nt=i.RGBA16F),J===i.UNSIGNED_BYTE&&(nt=ot===be?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT&&It&&(nt=It.RGBA16_EXT),J===i.SHORT&&It&&(nt=It.RGBA16_SNORM_EXT),J===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function x(C,T){let J;return C?T===null||T===Wn||T===us?J=i.DEPTH24_STENCIL8:T===Fn?J=i.DEPTH32F_STENCIL8:T===tr&&(J=i.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Wn||T===us?J=i.DEPTH_COMPONENT24:T===Fn?J=i.DEPTH_COMPONENT32F:T===tr&&(J=i.DEPTH_COMPONENT16),J}function y(C,T){return v(C)===!0||C.isFramebufferTexture&&C.minFilter!==Qe&&C.minFilter!==gn?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function A(C){let T=new WeakRef(C);n.get(C).__ref=T,p.add(T),M.register(C,T,T)}function w(C){let T=n.get(C).__ref;T!==void 0&&(p.delete(T),M.unregister(T))}function I(C){U(C.target)}function L(C){P(C.target)}function U(C){C.removeEventListener("dispose",I),w(C),V(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&u.delete(C)}function P(C){C.removeEventListener("dispose",L),w(C),ct(C)}function G(){for(let C of p){let T=C.deref();T!==void 0&&(T.isRenderTarget===!0?P(T):U(T))}p.clear(),u.clear()}function V(C){let T=n.get(C);if(T.__webglInit===void 0)return;let J=C.source,xt=d.get(J);if(xt){let at=xt[T.__cacheKey];at.usedTimes--,at.usedTimes===0&&X(C),Object.keys(xt).length===0&&d.delete(J)}n.remove(C)}function X(C){let T=n.get(C);i.deleteTexture(T.__webglTexture);let J=C.source,xt=d.get(J);delete xt[T.__cacheKey],o.memory.textures--}function ct(C){let T=n.get(C);T.__depthDisposeCallback&&T.__depthDisposeCallback();let J=C.depthTexture;if(J&&J.renderTarget===C&&U(J),C.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(T.__webglFramebuffer[at]))for(let Tt=0;Tt<T.__webglFramebuffer[at].length;Tt++)i.deleteFramebuffer(T.__webglFramebuffer[at][Tt]);else i.deleteFramebuffer(T.__webglFramebuffer[at]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[at])}else{if(Array.isArray(T.__webglFramebuffer))for(let at=0;at<T.__webglFramebuffer.length;at++)i.deleteFramebuffer(T.__webglFramebuffer[at]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let at=0;at<T.__webglColorRenderbuffer.length;at++)T.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[at]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let xt=C.textures;for(let at=0,Tt=xt.length;at<Tt;at++){let It=n.get(xt[at]);It.__webglTexture&&(i.deleteTexture(It.__webglTexture),o.memory.textures--),n.remove(xt[at])}n.remove(C)}let Z=0;function B(){Z=0}function Y(){return Z}function ft(C){Z=C}function mt(){let C=Z;return C>=s.maxTextures&&jt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,C}function $(C){let T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.mipmapsAutoUpdate),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function ut(C,T){let J=n.get(C);if(C.isVideoTexture&&Me(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&J.__version!==C.version){let xt=C.image;if(xt===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{q(J,C,T);return}}else C.isExternalTexture&&(J.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+T)}function Et(C,T){let J=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&J.__version!==C.version){q(J,C,T);return}else C.isExternalTexture&&(J.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+T)}function vt(C,T){let J=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&J.__version!==C.version){q(J,C,T);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+T)}function bt(C,T){let J=n.get(C);if(C.version>0&&J.__version!==C.version){gt(J,C,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+T)}let z={[jn]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[ma]:i.MIRRORED_REPEAT},tt={[Qe]:i.NEAREST,[Cf]:i.NEAREST_MIPMAP_NEAREST,[oo]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[$a]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},k={[Df]:i.NEVER,[ph]:i.ALWAYS,[Nf]:i.LESS,[fh]:i.LEQUAL,[Uf]:i.EQUAL,[dh]:i.GEQUAL,[Ff]:i.GREATER,[Of]:i.NOTEQUAL};function it(C,T){if(T.type===Fn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===gn||T.magFilter===$a||T.magFilter===oo||T.magFilter===Ei||T.minFilter===gn||T.minFilter===$a||T.minFilter===oo||T.minFilter===Ei)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,z[T.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,z[T.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,z[T.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,tt[T.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,tt[T.minFilter]),T.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,k[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Qe||T.minFilter!==oo&&T.minFilter!==Ei||T.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Q(C,T){let J=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",I),A(T));let xt=T.source,at=d.get(xt);at===void 0&&(at={},d.set(xt,at));let Tt=$(T);if(Tt!==C.__cacheKey){at[Tt]===void 0&&(at[Tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,J=!0),at[Tt].usedTimes++;let It=at[C.__cacheKey];It!==void 0&&(at[C.__cacheKey].usedTimes--,It.usedTimes===0&&X(T)),C.__cacheKey=Tt,C.__webglTexture=at[Tt].texture}return J}function F(C,T,J){return Math.floor(Math.floor(C/J)/T)}function W(C,T,J,xt){let Tt=C.updateRanges;if(Tt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,J,xt,T.data);else{Tt.sort((O,lt)=>O.start-lt.start);let It=0;for(let O=1;O<Tt.length;O++){let lt=Tt[It],rt=Tt[O],Lt=lt.start+lt.count,wt=F(rt.start,T.width,4),Rt=F(lt.start,T.width,4);rt.start<=Lt+1&&wt===Rt&&F(rt.start+rt.count-1,T.width,4)===wt?lt.count=Math.max(lt.count,rt.start+rt.count-lt.start):(++It,Tt[It]=rt)}Tt.length=It+1;let nt=e.getParameter(i.UNPACK_ROW_LENGTH),ot=e.getParameter(i.UNPACK_SKIP_PIXELS),Pt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let O=0,lt=Tt.length;O<lt;O++){let rt=Tt[O],Lt=Math.floor(rt.start/4),wt=Math.ceil(rt.count/4),Rt=Lt%T.width,Jt=Math.floor(Lt/T.width),ce=wt,St=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Jt),e.texSubImage2D(i.TEXTURE_2D,0,Rt,Jt,ce,St,J,xt,T.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,nt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,Pt)}}function q(C,T,J){let xt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(xt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(xt=i.TEXTURE_3D);let at=Q(C,T),Tt=T.source;e.bindTexture(xt,C.__webglTexture,i.TEXTURE0+J);let It=n.get(Tt);if(Tt.version!==It.__version||at===!0){if(e.activeTexture(i.TEXTURE0+J),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let St=ge.getPrimaries(ge.workingColorSpace),$t=T.colorSpace===Ti?null:ge.getPrimaries(T.colorSpace),le=T.colorSpace===Ti||St===$t?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let ot=S(T.image,!1,s.maxTextureSize);ot=qt(T,ot);let Pt=r.convert(T.format,T.colorSpace),O=r.convert(T.type),lt=E(T.internalFormat,Pt,O,T.normalized,T.colorSpace,T.isVideoTexture);it(xt,T);let rt,Lt=T.mipmaps,wt=T.isVideoTexture!==!0,Rt=It.__version===void 0||at===!0,Jt=Tt.dataReady,ce=y(T,ot);if(T.isDepthTexture)lt=x(T.format===bi,T.type),Rt&&(wt?e.texStorage2D(i.TEXTURE_2D,1,lt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,lt,ot.width,ot.height,0,Pt,O,null));else if(T.isDataTexture)if(Lt.length>0){wt&&Rt&&e.texStorage2D(i.TEXTURE_2D,ce,lt,Lt[0].width,Lt[0].height);for(let St=0,$t=Lt.length;St<$t;St++)rt=Lt[St],wt?Jt&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,rt.width,rt.height,Pt,O,rt.data):e.texImage2D(i.TEXTURE_2D,St,lt,rt.width,rt.height,0,Pt,O,rt.data);T.generateMipmaps=!1}else wt?(Rt&&e.texStorage2D(i.TEXTURE_2D,ce,lt,ot.width,ot.height),Jt&&W(T,ot,Pt,O)):e.texImage2D(i.TEXTURE_2D,0,lt,ot.width,ot.height,0,Pt,O,ot.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){wt&&Rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ce,lt,Lt[0].width,Lt[0].height,ot.depth);for(let St=0,$t=Lt.length;St<$t;St++)if(rt=Lt[St],T.format!==qn)if(Pt!==null)if(wt){if(Jt)if(T.layerUpdates.size>0){let le=Mh(rt.width,rt.height,T.format,T.type);for(let Ft of T.layerUpdates){let Ae=rt.data.subarray(Ft*le/rt.data.BYTES_PER_ELEMENT,(Ft+1)*le/rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,Ft,rt.width,rt.height,1,Pt,Ae)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,0,rt.width,rt.height,ot.depth,Pt,rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,St,lt,rt.width,rt.height,ot.depth,0,rt.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else wt?Jt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,0,rt.width,rt.height,ot.depth,Pt,O,rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,St,lt,rt.width,rt.height,ot.depth,0,Pt,O,rt.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{wt&&Rt&&e.texStorage2D(i.TEXTURE_2D,ce,lt,Lt[0].width,Lt[0].height);for(let St=0,$t=Lt.length;St<$t;St++)rt=Lt[St],T.format!==qn?Pt!==null?wt?Jt&&e.compressedTexSubImage2D(i.TEXTURE_2D,St,0,0,rt.width,rt.height,Pt,rt.data):e.compressedTexImage2D(i.TEXTURE_2D,St,lt,rt.width,rt.height,0,rt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?Jt&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,rt.width,rt.height,Pt,O,rt.data):e.texImage2D(i.TEXTURE_2D,St,lt,rt.width,rt.height,0,Pt,O,rt.data)}else if(T.isDataArrayTexture)if(wt){if(Rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ce,lt,ot.width,ot.height,ot.depth),Jt)if(T.layerUpdates.size>0){let St=Mh(ot.width,ot.height,T.format,T.type);for(let $t of T.layerUpdates){let le=ot.data.subarray($t*St/ot.data.BYTES_PER_ELEMENT,($t+1)*St/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$t,ot.width,ot.height,1,Pt,O,le)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Pt,O,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,lt,ot.width,ot.height,ot.depth,0,Pt,O,ot.data);else if(T.isData3DTexture)wt?(Rt&&e.texStorage3D(i.TEXTURE_3D,ce,lt,ot.width,ot.height,ot.depth),Jt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Pt,O,ot.data)):e.texImage3D(i.TEXTURE_3D,0,lt,ot.width,ot.height,ot.depth,0,Pt,O,ot.data);else if(T.isFramebufferTexture){if(Rt)if(wt)e.texStorage2D(i.TEXTURE_2D,ce,lt,ot.width,ot.height);else{let St=ot.width,$t=ot.height;for(let le=0;le<ce;le++)e.texImage2D(i.TEXTURE_2D,le,lt,St,$t,0,Pt,O,null),St>>=1,$t>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let St=i.canvas;if(St.hasAttribute("layoutsubtree")||St.setAttribute("layoutsubtree","true"),ot.parentNode!==St){St.appendChild(ot),u.add(T),St.onpaint=$t=>{let le=$t.changedElements;for(let Ft of u)le.includes(Ft.image)&&(Ft.needsUpdate=!0)},St.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ot);else{let le=i.RGBA,Ft=i.RGBA,Ae=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,le,Ft,Ae,ot)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Lt.length>0){if(wt&&Rt){let St=te(Lt[0]);e.texStorage2D(i.TEXTURE_2D,ce,lt,St.width,St.height)}for(let St=0,$t=Lt.length;St<$t;St++)rt=Lt[St],wt?Jt&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,Pt,O,rt):e.texImage2D(i.TEXTURE_2D,St,lt,Pt,O,rt);T.generateMipmaps=!1}else if(wt){if(Rt){let St=te(ot);e.texStorage2D(i.TEXTURE_2D,ce,lt,St.width,St.height)}Jt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,O,ot)}else e.texImage2D(i.TEXTURE_2D,0,lt,Pt,O,ot);v(T)&&T.mipmapsAutoUpdate===!0&&_(xt),It.__version=Tt.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function gt(C,T,J){if(T.image.length!==6)return;let xt=Q(C,T),at=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+J);let Tt=n.get(at);if(at.version!==Tt.__version||xt===!0){e.activeTexture(i.TEXTURE0+J);let It=ge.getPrimaries(ge.workingColorSpace),nt=T.colorSpace===Ti?null:ge.getPrimaries(T.colorSpace),ot=T.colorSpace===Ti||It===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let Pt=T.isCompressedTexture||T.image[0].isCompressedTexture,O=T.image[0]&&T.image[0].isDataTexture,lt=[];for(let Ft=0;Ft<6;Ft++)!Pt&&!O?lt[Ft]=S(T.image[Ft],!0,s.maxCubemapSize):lt[Ft]=O?T.image[Ft].image:T.image[Ft],lt[Ft]=qt(T,lt[Ft]);let rt=lt[0],Lt=r.convert(T.format,T.colorSpace),wt=r.convert(T.type),Rt=E(T.internalFormat,Lt,wt,T.normalized,T.colorSpace),Jt=T.isVideoTexture!==!0,ce=Tt.__version===void 0||xt===!0,St=at.dataReady,$t=y(T,rt);it(i.TEXTURE_CUBE_MAP,T);let le;if(T.isDepthTexture){if(Rt=x(T.format===bi,T.type),ce)if(Jt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Rt,rt.width,rt.height);else for(let Ft=0;Ft<6;Ft++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,Rt,rt.width,rt.height,0,Lt,wt,null)}else if(Pt){Jt&&ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,$t,Rt,rt.width,rt.height);for(let Ft=0;Ft<6;Ft++){le=lt[Ft].mipmaps;for(let Ae=0;Ae<le.length;Ae++){let $e=le[Ae];T.format!==qn?Lt!==null?Jt?St&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Ae,0,0,$e.width,$e.height,Lt,$e.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Ae,Rt,$e.width,$e.height,0,$e.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Ae,0,0,$e.width,$e.height,Lt,wt,$e.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Ae,Rt,$e.width,$e.height,0,Lt,wt,$e.data)}}}else{if(le=T.mipmaps,Jt&&ce){le.length>0&&$t++;let Ft=te(lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,$t,Rt,Ft.width,Ft.height)}for(let Ft=0;Ft<6;Ft++)if(O){Jt?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,0,0,lt[Ft].width,lt[Ft].height,Lt,wt,lt[Ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,Rt,lt[Ft].width,lt[Ft].height,0,Lt,wt,lt[Ft].data);for(let Ae=0;Ae<le.length;Ae++){let Pi=le[Ae].image[Ft].image;Jt?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Ae+1,0,0,Pi.width,Pi.height,Lt,wt,Pi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Ae+1,Rt,Pi.width,Pi.height,0,Lt,wt,Pi.data)}}else{Jt?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,0,0,Lt,wt,lt[Ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,Rt,Lt,wt,lt[Ft]);for(let Ae=0;Ae<le.length;Ae++){let $e=le[Ae];Jt?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Ae+1,0,0,Lt,wt,$e.image[Ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Ae+1,Rt,Lt,wt,$e.image[Ft])}}}v(T)&&T.mipmapsAutoUpdate===!0&&_(i.TEXTURE_CUBE_MAP),Tt.__version=at.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function ht(C,T,J,xt,at,Tt){let It=r.convert(J.format,J.colorSpace),nt=r.convert(J.type),ot=E(J.internalFormat,It,nt,J.normalized,J.colorSpace),Pt=n.get(T),O=n.get(J);if(O.__renderTarget=T,!Pt.__hasExternalTextures){let lt=Math.max(1,T.width>>Tt),rt=Math.max(1,T.height>>Tt);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,Tt,ot,lt,rt,T.depth,0,It,nt,null):e.texImage2D(at,Tt,ot,lt,rt,0,It,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),pt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,at,O.__webglTexture,0,Qt(T)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,xt,at,O.__webglTexture,Tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(C,T,J){if(i.bindRenderbuffer(i.RENDERBUFFER,C),T.depthBuffer){let xt=T.depthTexture,at=xt&&xt.isDepthTexture?xt.type:null,Tt=x(T.stencilBuffer,at),It=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt(T),Tt,T.width,T.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt(T),Tt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,C)}else{let xt=T.textures;for(let at=0;at<xt.length;at++){let Tt=xt[at],It=r.convert(Tt.format,Tt.colorSpace),nt=r.convert(Tt.type),ot=E(Tt.internalFormat,It,nt,Tt.normalized,Tt.colorSpace);pt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt(T),ot,T.width,T.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt(T),ot,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ot,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(C,T,J){let xt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let at=n.get(T.depthTexture);at.__renderTarget=T;let Tt=xt?T.depthTexture.image[0]:T.depthTexture.image;(!at.__webglTexture||Tt.width!==T.width||Tt.height!==T.height)&&(Tt.width=T.width,Tt.height=T.height,T.depthTexture.needsUpdate=!0),xt?bt(T.depthTexture,0):ut(T.depthTexture,0);let It=at.__webglTexture,nt=Qt(T),ot=xt?i.TEXTURE_CUBE_MAP_POSITIVE_X+J:i.TEXTURE_2D,Pt=T.depthTexture.format===bi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===xi)pt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Pt,ot,It,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,Pt,ot,It,0);else if(T.depthTexture.format===bi)pt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Pt,ot,It,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,Pt,ot,It,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(C){let T=n.get(C),J=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){let xt=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),xt){let at=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,xt.removeEventListener("dispose",at)};xt.addEventListener("dispose",at),T.__depthDisposeCallback=at}T.__boundDepthTexture=xt}if(C.depthTexture&&!T.__autoAllocateDepthBuffer)if(J)for(let xt=0;xt<6;xt++)Nt(T.__webglFramebuffer[xt],C,xt);else C.texture.mipmaps.length>0?Nt(T.__webglFramebuffer[0],C,0):Nt(T.__webglFramebuffer,C,0);else if(J){T.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[xt]),T.__webglDepthbuffer[xt]===void 0)T.__webglDepthbuffer[xt]=i.createRenderbuffer(),Ht(T.__webglDepthbuffer[xt],C,!1);else{let at=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=T.__webglDepthbuffer[xt];i.bindRenderbuffer(i.RENDERBUFFER,Tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,Tt)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Ht(T.__webglDepthbuffer,C,!1);else{let at=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,Tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(C,T,J){let xt=n.get(C);T!==void 0&&ht(xt.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&dt(C)}function Mt(C){let T=C.texture,J=n.get(C),xt=n.get(T);C.addEventListener("dispose",L),A(C);let at=C.textures,Tt=C.isWebGLCubeRenderTarget===!0,It=at.length>1;if(It||(xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture()),xt.__version=T.version,o.memory.textures++),Tt){J.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(T.mipmaps.length>0){J.__webglFramebuffer[nt]=[];for(let ot=0;ot<T.mipmaps.length;ot++)J.__webglFramebuffer[nt][ot]=i.createFramebuffer()}else J.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(T.mipmaps.length>0){J.__webglFramebuffer=[];for(let nt=0;nt<T.mipmaps.length;nt++)J.__webglFramebuffer[nt]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(It)for(let nt=0,ot=at.length;nt<ot;nt++){let Pt=n.get(at[nt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&pt(C)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let nt=0;nt<at.length;nt++){let ot=at[nt];J.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[nt]);let Pt=r.convert(ot.format,ot.colorSpace),O=r.convert(ot.type),lt=E(ot.internalFormat,Pt,O,ot.normalized,ot.colorSpace,C.isXRRenderTarget===!0),rt=Qt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,lt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,J.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),Ht(J.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Tt){e.bindTexture(i.TEXTURE_CUBE_MAP,xt.__webglTexture),it(i.TEXTURE_CUBE_MAP,T);for(let nt=0;nt<6;nt++)if(T.mipmaps.length>0)for(let ot=0;ot<T.mipmaps.length;ot++)ht(J.__webglFramebuffer[nt][ot],C,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ot);else ht(J.__webglFramebuffer[nt],C,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);v(T)?_(i.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(It){for(let nt=0,ot=at.length;nt<ot;nt++){let Pt=at[nt],O=n.get(Pt),lt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(lt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,O.__webglTexture),it(lt,Pt),ht(J.__webglFramebuffer,C,Pt,i.COLOR_ATTACHMENT0+nt,lt,0),v(Pt)&&_(lt)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(nt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,xt.__webglTexture),it(nt,T),T.mipmaps.length>0)for(let ot=0;ot<T.mipmaps.length;ot++)ht(J.__webglFramebuffer[ot],C,T,i.COLOR_ATTACHMENT0,nt,ot);else ht(J.__webglFramebuffer,C,T,i.COLOR_ATTACHMENT0,nt,0);v(T)?_(nt):T.mipmaps.length>0&&i.texParameteri(nt,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&dt(C)}function D(C){let T=C.textures;for(let J=0,xt=T.length;J<xt;J++){let at=T[J];if(v(at)&&at.mipmapsAutoUpdate===!0){let Tt=b(C),It=n.get(at).__webglTexture;e.bindTexture(Tt,It),_(Tt),e.unbindTexture()}}}let se=[];function kt(C){if(C.samples>0){if(pt(C)===!1){let T=C.textures,J=C.width,xt=C.height,at=i.COLOR_BUFFER_BIT,Tt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(C),nt=T.length>1;if(nt)for(let Pt=0;Pt<T.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Pt=0;Pt<T.length;Pt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[Pt]);let O=n.get(T[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,O,0)}i.blitFramebuffer(0,0,J,xt,0,0,J,xt,at,i.NEAREST),l===!0&&(se.length=0,se.push(i.COLOR_ATTACHMENT0+Pt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&se.push(Tt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let Pt=0;Pt<T.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,It.__webglColorRenderbuffer[Pt]);let O=n.get(T[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,O,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let T=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Qt(C){return Math.min(s.maxSamples,C.samples)}function pt(C){let T=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Me(C){let T=o.render.frame;h.get(C)!==T&&(h.set(C,T),C.update())}function qt(C,T){let J=C.colorSpace,xt=C.format,at=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||J!==wr&&J!==Ti&&(ge.getTransfer(J)===be?(xt!==qn||at!==bn)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",J)),T}function te(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=mt,this.resetTextureUnits=B,this.getTextureUnits=Y,this.setTextureUnits=ft,this.setTexture2D=ut,this.setTexture2DArray=Et,this.setTexture3D=vt,this.setTextureCube=bt,this.rebindTextures=yt,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=pt,this.dispose=G}function uv(i,t){function e(n,s=Ti){let r,o=ge.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===ja)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ch)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===oh)return i.BYTE;if(n===ah)return i.SHORT;if(n===tr)return i.UNSIGNED_SHORT;if(n===Ka)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===Xn)return i.HALF_FLOAT;if(n===hh)return i.ALPHA;if(n===uh)return i.RGB;if(n===qn)return i.RGBA;if(n===xi)return i.DEPTH_COMPONENT;if(n===bi)return i.DEPTH_STENCIL;if(n===tl)return i.RED;if(n===el)return i.RED_INTEGER;if(n===Wi)return i.RG;if(n===nl)return i.RG_INTEGER;if(n===il)return i.RGBA_INTEGER;if(n===ao||n===lo||n===co||n===ho)if(o===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sl||n===rl||n===ol||n===al)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ll||n===cl||n===hl||n===ul||n===fl||n===uo||n===dl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ll||n===cl)return o===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===hl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ul)return r.COMPRESSED_R11_EAC;if(n===fl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===uo)return r.COMPRESSED_RG11_EAC;if(n===dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===pl||n===ml||n===gl||n===xl||n===_l||n===vl||n===yl||n===Ml||n===Sl||n===El||n===bl||n===Tl||n===wl||n===Al)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ml)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_l)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ml)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===El)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Al)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rl||n===Cl||n===Il)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Rl)return o===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pl||n===Ll||n===fo||n===Dl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Pl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var fv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dv=`
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

}`,Ih=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new kr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ii({vertexShader:fv,fragmentShader:dv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new st(new Re(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ph=class extends Qn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,M=typeof XRWebGLBinding<"u",g=new Ih,m={},S=e.getContextAttributes(),v=null,_=null,b=[],E=[],x=new _t,y=null,A=null,w=new mn;w.viewport=new Be;let I=new mn;I.viewport=new Be;let L=[w,I],U=new Xa,P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ut=b[$];return ut===void 0&&(ut=new Gs,b[$]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function($){let ut=b[$];return ut===void 0&&(ut=new Gs,b[$]=ut),ut.getGripSpace()},this.getHand=function($){let ut=b[$];return ut===void 0&&(ut=new Gs,b[$]=ut),ut.getHandSpace()};function V($){let ut=E.indexOf($.inputSource);if(ut===-1)return;let Et=b[ut];Et!==void 0&&(Et.update($.inputSource,$.frame,c||o),Et.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ct);for(let $=0;$<b.length;$++){let ut=E[$];ut!==null&&(E[$]=null,b[$].disconnect(ut))}P=null,G=null,g.reset();for(let $ in m)delete m[$];if(t.setRenderTarget(v),d=null,f=null,u=null,s=null,_=null,mt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(x.width,x.height,!1),A!==null){let $=A.camera;$.fov=A.fov,$.zoom=A.zoom,$.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ct),S.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(x),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,vt=null,bt=null;S.depth&&(bt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=S.stencil?bi:xi,vt=S.stencil?us:Wn);let z={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(z),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Cn(f.textureWidth,f.textureHeight,{format:qn,type:bn,depthTexture:new Mi(f.textureWidth,f.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Et={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Et),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Cn(d.framebufferWidth,d.framebufferHeight,{format:qn,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),mt.setContext(s),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ct($){for(let ut=0;ut<$.removed.length;ut++){let Et=$.removed[ut],vt=E.indexOf(Et);vt>=0&&(E[vt]=null,b[vt].disconnect(Et))}for(let ut=0;ut<$.added.length;ut++){let Et=$.added[ut],vt=E.indexOf(Et);if(vt===-1){for(let z=0;z<b.length;z++)if(z>=E.length){E.push(Et),vt=z;break}else if(E[z]===null){E[z]=Et,vt=z;break}if(vt===-1)break}let bt=b[vt];bt&&bt.connect(Et)}}function Z($,ut){ut===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ut.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ut=$.near,Et=$.far;g.texture!==null&&(g.depthNear>0&&(ut=g.depthNear),g.depthFar>0&&(Et=g.depthFar)),U.near=I.near=w.near=ut,U.far=I.far=w.far=Et,(P!==U.near||G!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),P=U.near,G=U.far),U.layers.mask=$.layers.mask|6,w.layers.mask=U.layers.mask&-5,I.layers.mask=U.layers.mask&-3;let vt=$.parent,bt=U.cameras;Z(U,vt);for(let z=0;z<bt.length;z++)Z(bt[z],vt);U.projectionMatrix.copy(w.projectionMatrix),U.projectionMatrixInverse.copy(w.projectionMatrixInverse),A===null&&$.isPerspectiveCamera&&(A={camera:$,fov:$.fov,zoom:$.zoom}),B($,U,vt)};function B($,ut,Et){Et===null?$.matrix.copy(ut.matrixWorld):($.matrix.copy(Et.matrixWorld),$.matrix.invert(),$.matrix.multiply(ut.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ut.projectionMatrix),$.projectionMatrixInverse.copy(ut.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=xa*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function($){return m[$]};let Y=null;function ft($,ut){if(h=ut.getViewerPose(c||o),p=ut,h!==null){let Et=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let vt=!1;Et.length!==U.cameras.length&&(U.cameras.length=0,vt=!0);for(let k=0;k<Et.length;k++){let it=Et[k],Q=null;if(d!==null)Q=d.getViewport(it);else{let W=u.getViewSubImage(f,it);Q=W.viewport,k===0&&(t.setRenderTargetTextures(_,W.colorTexture,W.depthStencilTexture),t.setRenderTarget(_))}let F=L[k];F===void 0&&(F=new mn,F.layers.enable(k),F.viewport=new Be,L[k]=F),F.matrix.fromArray(it.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(it.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(Q.x,Q.y,Q.width,Q.height),k===0&&(U.matrix.copy(F.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),vt===!0&&U.cameras.push(F)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){u=n.getBinding();let k=u.getDepthInformation(Et[0]);k&&k.isValid&&k.texture&&g.init(k,s.renderState)}if(bt&&bt.includes("camera-access")&&M){t.state.unbindTexture(),u=n.getBinding();for(let k=0;k<Et.length;k++){let it=Et[k].camera;if(it){let Q=m[it];Q||(Q=new kr,m[it]=Q);let F=u.getCameraImage(it);Q.sourceTexture=F}}}}for(let Et=0;Et<b.length;Et++){let vt=E[Et],bt=b[Et];vt!==null&&bt!==void 0&&bt.update(vt,ut,c||o)}Y&&Y($,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),p=null}let mt=new Md;mt.setAnimationLoop(ft),this.setAnimationLoop=function($){Y=$},this.dispose=function(){}}},pv=new oe,Pd=new ie;Pd.set(-1,0,0,0,1,0,0,0,1);function mv(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,_h(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,S,v,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),M(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,S,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===_n&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===_n&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let S=t.get(m),v=S.envMap,_=S.envMapRotation;v&&(g.envMap.value=v,g.envMapRotation.value.setFromMatrix4(pv.makeRotationFromEuler(_)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Pd),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,S,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=v*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,S){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===_n&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function M(g,m){let S=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gv(i,t,e,n){let s={},r={};function o(S,v){let _=v.program;n.uniformBlockBinding(S,_,s[S.id])}function a(S,v){let _=s[S.id];_===void 0&&(p(S),_=l(S),s[S.id]=_,S.addEventListener("dispose",g));let b=v.program;n.updateUBOMapping(S,b);let E=t.render.frame;r[S.id]!==E&&(c(S),r[S.id]=E)}function l(S){let v=i.createBuffer(),_=S.__size,b=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,_,b),i.bindBuffer(i.UNIFORM_BUFFER,null),v}function c(S){let v=s[S.id],_=S.uniforms,b=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,x=_.length;E<x;E++){let y=_[E];if(Array.isArray(y))for(let A=0,w=y.length;A<w;A++)h(y[A],E,A,b);else h(y,E,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,v,_,b){if(f(S,v,_,b)===!0){let E=S.__offset,x=S.value;if(Array.isArray(x)){let y=0;for(let A=0;A<x.length;A++){let w=x[A],I=M(w,!0);u(w,S.__data,y),y+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,S.__data)}}function u(S,v,_){typeof S=="number"||typeof S=="boolean"?v[_]=S:S.isMatrix3?(v[_]=S.elements[0],v[_+1]=S.elements[1],v[_+2]=S.elements[2],v[_+3]=0,v[_+4]=S.elements[3],v[_+5]=S.elements[4],v[_+6]=S.elements[5],v[_+7]=0,v[_+8]=S.elements[6],v[_+9]=S.elements[7],v[_+10]=S.elements[8],v[_+11]=0):ArrayBuffer.isView(S)?v.set(S.subarray(0,v.length-_),_):S.toArray(v,_)}function f(S,v,_,b){let E=S.value,x=v+"_"+_;if(Array.isArray(E)){b[x]===void 0&&(b[x]=[]);let y=b[x],A=!1;for(let w=0;w<E.length;w++)d(E[w],y,w)===!0&&(A=!0);return A}return d(E,b,x)}function d(S,v,_){if(v[_]===void 0)return typeof S=="number"||typeof S=="boolean"?v[_]=S:ArrayBuffer.isView(S)?v[_]=S.slice():v[_]=S.clone(),!0;{let b=v[_];if(typeof S=="number"||typeof S=="boolean"){if(b!==S)return v[_]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(b.equals(S)===!1)return b.copy(S),!0}}return!1}function p(S){let v=S.uniforms,_=0,b=16;for(let x=0,y=v.length;x<y;x++){let A=Array.isArray(v[x])?v[x]:[v[x]];for(let w=0,I=A.length;w<I;w++){let L=A[w],U=Array.isArray(L.value)?L.value:[L.value],P=Array.isArray(v[x])||Array.isArray(L.value),G=_;for(let X=0,ct=U.length;X<ct;X++){let Z=U[X],B=M(Z,P),Y=_%b,ft=Y%B.boundary,mt=Y+ft;_+=ft,mt!==0&&b-mt<B.storage&&(_+=b-mt),X===0&&(G=_),_+=B.storage}let V=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new V((_-G)/Float32Array.BYTES_PER_ELEMENT),L.__offset=G}}let E=_%b;return E>0&&(_+=b-E),S.__size=_,S.__cache={},this}function M(S,v){let _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=16,_.storage=48):S.isMatrix4?(_.boundary=16,_.storage=64):S.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(_.boundary=16,_.storage=S.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",S),v===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function g(S){let v=S.target;v.removeEventListener("dispose",g),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:o,update:a,dispose:m}}var xv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ri=null;function _v(){return ri===null&&(ri=new Br(xv,16,16,Wi,Xn),ri.name="DFG_LUT",ri.minFilter=gn,ri.magFilter=gn,ri.wrapS=$n,ri.wrapT=$n,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}var zl=class{constructor(t={}){let{canvas:e=Bf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=bn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let M=d,g=new Set([il,nl,el]),m=new Set([bn,Wn,tr,us,ja,Qa]),S=new Uint32Array(4),v=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},b=null,E=null,x=[],y=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,I=!1,L=null,U=null,P=null,G=null;this._outputColorSpace=Oe;let V=0,X=0,ct=null,Z=-1,B=null,Y=new Be,ft=new Be,mt=null,$=new ae(0),ut=0,Et=e.width,vt=e.height,bt=1,z=null,tt=null,k=new Be(0,0,Et,vt),it=new Be(0,0,Et,vt),Q=!1,F=new zi,W=new Ma,q=!1,gt=!1,ht=new oe,Ht=new N,Nt=new Be,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yt=!1;function Mt(){return ct===null?bt:1}let D=n;function se(R,H){return e.getContext(R,H)}let kt,Qt,pt,Me,qt,te,C,T,J,xt,at,Tt,It,nt,ot,Pt,O,lt,rt,Lt,wt,Rt,Jt;try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",$t,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",Ft,!1),D===null){let H="webgl2";if(D=se(H,R),D===null)throw se(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ce()}catch(R){throw e.removeEventListener("webglcontextlost",$t,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",Ft,!1),ee("WebGLRenderer: "+R.message),R}function ce(){kt=new Cx(D),kt.init(),wt=new uv(D,kt),Qt=new _x(D,kt,t,wt),pt=new cv(D,kt),Qt.reversedDepthBuffer&&f&&pt.buffers.depth.setReversed(!0),U=D.createFramebuffer(),P=D.createFramebuffer(),G=D.createFramebuffer(),Me=new Lx(D),qt=new J_,te=new hv(D,kt,pt,qt,Qt,wt,Me),C=new Rx(w),T=new Nm(D),Rt=new gx(D,T),J=new Ix(D,T,Me,Rt),xt=new Nx(D,J,T,Rt,Me),lt=new Dx(D,Qt,te),ot=new vx(qt),at=new Z_(w,C,kt,Qt,Rt,ot),Tt=new mv(w,qt),It=new K_,nt=new iv(kt),O=new mx(w,C,pt,xt,p,l),Pt=new lv(w,xt,Qt),Jt=new gv(D,Me,Qt,pt),rt=new xx(D,kt,Me),Lt=new Px(D,kt,Me),Me.programs=at.programs,w.capabilities=Qt,w.extensions=kt,w.properties=qt,w.renderLists=It,w.shadowMap=Pt,w.state=pt,w.info=Me}M!==bn&&(A=new Fx(M,e.width,e.height,a,s,r));let St=new Ph(w,D);this.xr=St,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let R=kt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=kt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return bt},this.setPixelRatio=function(R){R!==void 0&&(bt=R,this.setSize(Et,vt,!1))},this.getSize=function(R){return R.set(Et,vt)},this.setSize=function(R,H,et=!0){if(St.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}Et=R,vt=H,e.width=Math.floor(R*bt),e.height=Math.floor(H*bt),et===!0&&(e.style.width=R+"px",e.style.height=H+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(Et*bt,vt*bt).floor()},this.setDrawingBufferSize=function(R,H,et){Et=R,vt=H,bt=et,e.width=Math.floor(R*et),e.height=Math.floor(H*et),this.setViewport(0,0,R,H)},this.setEffects=function(R){if(M===bn){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let H=0;H<R.length;H++)if(R[H].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(Y)},this.getViewport=function(R){return R.copy(k)},this.setViewport=function(R,H,et,K){R.isVector4?k.set(R.x,R.y,R.z,R.w):k.set(R,H,et,K),pt.viewport(Y.copy(k).multiplyScalar(Mt()).round())},this.getScissor=function(R){return R.copy(it)},this.setScissor=function(R,H,et,K){R.isVector4?it.set(R.x,R.y,R.z,R.w):it.set(R,H,et,K),pt.scissor(ft.copy(it).multiplyScalar(Mt()).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(R){pt.setScissorTest(Q=R)},this.setOpaqueSort=function(R){z=R},this.setTransparentSort=function(R){tt=R},this.getClearColor=function(R){return R.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(R=!0,H=!0,et=!0){let K=0;if(R){let j=!1;if(ct!==null){let Ut=ct.texture.format;j=g.has(Ut)}if(j){let Ut=ct.texture.type,Vt=m.has(Ut),Dt=O.getClearColor(),zt=O.getClearAlpha(),Yt=Dt.r,re=Dt.g,pe=Dt.b;Vt?(S[0]=Yt,S[1]=re,S[2]=pe,S[3]=zt,D.clearBufferuiv(D.COLOR,0,S)):(v[0]=Yt,v[1]=re,v[2]=pe,v[3]=zt,D.clearBufferiv(D.COLOR,0,v))}else K|=D.COLOR_BUFFER_BIT}H&&(K|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&(K|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&D.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),L=R},this.dispose=function(){e.removeEventListener("webglcontextlost",$t,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",Ft,!1),O.dispose(),It.dispose(),nt.dispose(),te.dispose(),qt.dispose(),C.dispose(),xt.dispose(),J.dispose(),Rt.dispose(),Jt.dispose(),at.dispose(),St.dispose(),St.removeEventListener("sessionstart",fu),St.removeEventListener("sessionend",du),ji.stop()};function $t(R){R.preventDefault(),Cr("WebGLRenderer: Context Lost."),I=!0}function le(){Cr("WebGLRenderer: Context Restored."),I=!1;let R=Me.autoReset,H=Pt.enabled,et=Pt.autoUpdate,K=Pt.needsUpdate,j=Pt.type;ce(),Me.autoReset=R,Pt.enabled=H,Pt.autoUpdate=et,Pt.needsUpdate=K,Pt.type=j}function Ft(R){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ae(R){let H=R.target;H.removeEventListener("dispose",Ae),$e(H)}function $e(R){Pi(R),qt.remove(R)}function Pi(R){let H=qt.get(R).programs;H!==void 0&&(H.forEach(function(et){at.releaseProgram(et)}),R.isShaderMaterial&&at.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,et,K,j,Ut){H===null&&(H=dt);let Vt=j.isMesh&&j.matrixWorld.determinantAffine()<0,Dt=xp(R,H,et,K,j);pt.setMaterial(K,Vt);let zt=et.index,Yt=1;if(K.wireframe===!0){if(zt=J.getWireframeAttribute(et),zt===void 0)return;Yt=2}let re=et.drawRange,pe=et.attributes.position,Wt=re.start*Yt,me=(re.start+re.count)*Yt;Ut!==null&&(Wt=Math.max(Wt,Ut.start*Yt),me=Math.min(me,(Ut.start+Ut.count)*Yt)),zt!==null?(Wt=Math.max(Wt,0),me=Math.min(me,zt.count)):pe!=null&&(Wt=Math.max(Wt,0),me=Math.min(me,pe.count));let Ve=me-Wt;if(Ve<0||Ve===1/0)return;Rt.setup(j,K,Dt,et,zt);let Pe,Ie=rt;if(zt!==null&&(Pe=T.get(zt),Ie=Lt,Ie.setIndex(Pe)),j.isMesh)K.wireframe===!0?(pt.setLineWidth(K.wireframeLinewidth*Mt()),Ie.setMode(D.LINES)):Ie.setMode(D.TRIANGLES);else if(j.isLine){let on=K.linewidth;on===void 0&&(on=1),pt.setLineWidth(on*Mt()),j.isLineSegments?Ie.setMode(D.LINES):j.isLineLoop?Ie.setMode(D.LINE_LOOP):Ie.setMode(D.LINE_STRIP)}else j.isPoints?Ie.setMode(D.POINTS):j.isSprite&&Ie.setMode(D.TRIANGLES);if(j.isBatchedMesh)if(kt.get("WEBGL_multi_draw"))Ie.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let on=j._multiDrawStarts,Xt=j._multiDrawCounts,dn=j._multiDrawCount,Se=zt?T.get(zt).bytesPerElement:1,Qi=qt.get(K).currentProgram.getUniforms();for(let an=0;an<dn;an++)Qi.setValue(D,"_gl_DrawID",an),Ie.render(on[an]/Se,Xt[an])}else if(j.isInstancedMesh)Ie.renderInstances(Wt,Ve,j.count);else if(et.isInstancedBufferGeometry){let on=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Xt=Math.min(et.instanceCount,on);Ie.renderInstances(Wt,Ve,Xt)}else Ie.render(Wt,Ve)};function uu(R,H,et,K){L!==null&&R.isNodeMaterial&&L.setObject(K,R),q===!0&&ot.setState(R,et,!1),R.transparent===!0&&R.side===ye&&R.forceSinglePass===!1?(R.side=_n,R.needsUpdate=!0,hr(R,H,K),R.side=Vi,R.needsUpdate=!0,hr(R,H,K),R.side=ye):hr(R,H,K)}this.compile=function(R,H,et=null){et===null&&(et=R),L!==null&&L.renderStart(R,H,et),E=nt.get(et),E.init(H),y.push(E),et.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(E.pushLight(j),j.castShadow&&E.pushShadow(j))}),R!==et&&R.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(E.pushLight(j),j.castShadow&&E.pushShadow(j))}),E.setupLights(),L!==null&&L.updateLights(E.state.lightsArray),gt=this.localClippingEnabled,q=ot.init(this.clippingPlanes,gt),q===!0&&ot.setGlobalState(this.clippingPlanes,H),L!==null&&Pt.render(E.state.shadowsArray,et,H);let K=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Ut=j.material;if(Ut)if(Array.isArray(Ut))for(let Vt=0;Vt<Ut.length;Vt++){let Dt=Ut[Vt];uu(Dt,et,H,j),K.add(Dt)}else uu(Ut,et,H,j),K.add(Ut)}),E=y.pop(),L!==null&&L.renderEnd(),K},this.compileAsync=function(R,H,et=null){let K=this.compile(R,H,et);return new Promise(j=>{function Ut(){if(K.forEach(function(Vt){let zt=qt.get(Vt).currentProgram;(zt===void 0||zt.isReady())&&K.delete(Vt)}),K.size===0){j(R);return}setTimeout(Ut,10)}kt.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let ac=null;function mp(R){ac&&ac(R)}function fu(){ji.stop()}function du(){ji.start()}let ji=new Md;ji.setAnimationLoop(mp),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(R){ac=R,St.setAnimationLoop(R),R===null?ji.stop():ji.start()},St.addEventListener("sessionstart",fu),St.addEventListener("sessionend",du),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(R,H);let et=St.enabled===!0&&St.isPresenting===!0,K=A!==null&&(ct===null||et)&&A.begin(w,ct);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(St.cameraAutoUpdate===!0&&St.updateCamera(H),H=St.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,H,ct),E=nt.get(R,y.length),E.init(H),E.state.textureUnits=te.getTextureUnits(),y.push(E),ht.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),H.isArrayCamera?W.setFromArrayCamera(H):F.setFromProjectionMatrix(ht,Un,H.reversedDepth),gt=this.localClippingEnabled,q=ot.init(this.clippingPlanes,gt),b=It.get(R,x.length),b.init(),x.push(b),this.info.render.frame++,St.enabled===!0&&St.isPresenting===!0){let Vt=w.xr.getDepthSensingMesh();Vt!==null&&lc(Vt,H,-1/0,w.sortObjects)}lc(R,H,0,w.sortObjects),b.finish(),L!==null&&L.updateLights(E.state.lightsArray),w.sortObjects===!0&&b.sort(z,tt),yt=St.enabled===!1||St.isPresenting===!1||St.hasDepthSensing()===!1,yt&&O.addToRenderList(b,R),this.info.autoReset===!0&&this.info.reset(),q===!0&&ot.beginShadows();let j=E.state.shadowsArray;if(Pt.render(j,R,H),q===!0&&ot.endShadows(),(K&&A.hasRenderPass())===!1){let Vt=b.opaque,Dt=b.transmissive;if(E.setupLights(),H.isArrayCamera){let zt=H.cameras;if(Dt.length>0)for(let Yt=0,re=zt.length;Yt<re;Yt++){let pe=zt[Yt];mu(Vt,Dt,R,pe)}yt&&O.render(R);for(let Yt=0,re=zt.length;Yt<re;Yt++){let pe=zt[Yt];pu(b,R,pe,pe.viewport)}}else Dt.length>0&&mu(Vt,Dt,R,H),yt&&O.render(R),pu(b,R,H)}ct!==null&&X===0&&(te.updateMultisampleRenderTarget(ct),te.updateRenderTargetMipmap(ct)),K&&A.end(w),R.isScene===!0&&R.onAfterRender(w,R,H),Rt.resetDefaultState(),Z=-1,B=null,y.pop(),y.length>0?(E=y[y.length-1],te.setTextureUnits(E.state.textureUnits),q===!0&&ot.setGlobalState(w.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?b=x[x.length-1]:b=null,L!==null&&L.renderEnd()};function lc(R,H,et,K){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)et=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)E.pushLight(R),R.castShadow&&E.pushShadow(R);else if(R.isSprite){let Vt=H.isArrayCamera?W:F;if(!R.frustumCulled||R.intersectsFrustum(Vt)){K&&Nt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ht);let Dt=xt.update(R),zt=R.material;zt.visible&&b.push(R,Dt,zt,et,Nt.z,null,H)}}else if(R.isMesh||R.isLine||R.isPoints){let Vt=H.isArrayCamera?W:F;if(!R.frustumCulled||R.intersectsFrustum(Vt)){let Dt=xt.update(R),zt=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Nt.copy(R.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Nt.copy(Dt.boundingSphere.center)),Nt.applyMatrix4(R.matrixWorld).applyMatrix4(ht)),Array.isArray(zt)){let Yt=Dt.groups;for(let re=0,pe=Yt.length;re<pe;re++){let Wt=Yt[re],me=zt[Wt.materialIndex];me&&me.visible&&b.push(R,Dt,me,et,Nt.z,Wt,H)}}else zt.visible&&b.push(R,Dt,zt,et,Nt.z,null,H)}}}let Ut=R.children;for(let Vt=0,Dt=Ut.length;Vt<Dt;Vt++)lc(Ut[Vt],H,et,K)}function pu(R,H,et,K){let{opaque:j,transmissive:Ut,transparent:Vt}=R;E.setupLightsView(et),q===!0&&ot.setGlobalState(w.clippingPlanes,et),K&&pt.viewport(Y.copy(K)),j.length>0&&Io(j,H,et),Ut.length>0&&Io(Ut,H,et),Vt.length>0&&Io(Vt,H,et),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function mu(R,H,et,K){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[K.id]===void 0){let Wt=kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[K.id]=new Cn(1,1,{generateMipmaps:!0,type:Wt?Xn:bn,minFilter:Ei,samples:Math.max(4,Qt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ge.workingColorSpace})}let Ut=E.state.transmissionRenderTarget[K.id],Vt=K.viewport||Y;Ut.setSize(Vt.z*w.transmissionResolutionScale,Vt.w*w.transmissionResolutionScale);let Dt=w.getRenderTarget(),zt=w.getActiveCubeFace(),Yt=w.getActiveMipmapLevel();w.setRenderTarget(Ut),w.getClearColor($),ut=w.getClearAlpha(),ut<1&&w.setClearColor(16777215,.5),w.clear(),yt&&O.render(et);let re=w.toneMapping;w.toneMapping=si;let pe=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),E.setupLightsView(K),q===!0&&ot.setGlobalState(w.clippingPlanes,K),Io(R,et,K),te.updateMultisampleRenderTarget(Ut),te.updateRenderTargetMipmap(Ut),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let me=0,Ve=H.length;me<Ve;me++){let Pe=H[me],{object:Ie,geometry:on,material:Xt,group:dn}=Pe;if(Xt.side===ye&&Ie.layers.test(K.layers)){let Se=Xt.side;Xt.side=_n,Xt.needsUpdate=!0,gu(Ie,et,K,on,Xt,dn),Xt.side=Se,Xt.needsUpdate=!0,Wt=!0}}Wt===!0&&(te.updateMultisampleRenderTarget(Ut),te.updateRenderTargetMipmap(Ut))}w.setRenderTarget(Dt,zt,Yt),w.setClearColor($,ut),pe!==void 0&&(K.viewport=pe),w.toneMapping=re}function Io(R,H,et){let K=H.isScene===!0?H.overrideMaterial:null;for(let j=0,Ut=R.length;j<Ut;j++){let Vt=R[j],{object:Dt,geometry:zt,group:Yt}=Vt,re=Vt.material;re.allowOverride===!0&&K!==null&&(re=K),Dt.layers.test(et.layers)&&gu(Dt,H,et,zt,re,Yt)}}function gu(R,H,et,K,j,Ut){L!==null&&j.isNodeMaterial&&L.setObject(R,j),R.onBeforeRender(w,H,et,K,j,Ut),R.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(w,H,et,K,R,Ut),j.transparent===!0&&j.side===ye&&j.forceSinglePass===!1?(j.side=_n,j.needsUpdate=!0,w.renderBufferDirect(et,H,K,j,R,Ut),j.side=Vi,j.needsUpdate=!0,w.renderBufferDirect(et,H,K,j,R,Ut),j.side=ye):w.renderBufferDirect(et,H,K,j,R,Ut),R.onAfterRender(w,H,et,K,j,Ut)}function xu(R){let H=0;for(let et of R)et.texture!==null&&H++;return H}function hr(R,H,et){H.isScene!==!0&&(H=dt);let K=qt.get(R),j=E.state.lights,Ut=E.state.shadowsArray,Vt=j.state.version,Dt=at.getParameters(R,j.state,Ut,H,et,E.state.lightProbeGridArray),zt=at.getProgramCacheKey(Dt),Yt=K.programs;K.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?H.environment:null,K.fog=H.fog;let re=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;K.envMap=C.get(R.envMap||K.environment,re),K.envMapRotation=K.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,Yt===void 0&&(R.addEventListener("dispose",Ae),Yt=new Map,K.programs=Yt,K.programVariants=new Map);let pe=Yt.get(zt);if(pe!==void 0){if(K.currentProgram===pe&&K.lightsStateVersion===Vt)return vu(R,Dt),pe}else Dt.uniforms=at.getUniforms(R),L!==null&&R.isNodeMaterial&&L.build(R,et,Dt),R.onBeforeCompile(Dt,w),pe=at.acquireProgram(Dt,zt),Yt.set(zt,pe),K.uniforms=Dt.uniforms;let Wt=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Wt.clippingPlanes=ot.uniform),vu(R,Dt),K.needsLights=vp(R),K.lightsStateVersion=Vt,K.needsLights&&(Wt.ambientLightColor.value=j.state.ambient,Wt.lightProbe.value=j.state.probe,Wt.sunLights.value=j.state.sun,Wt.sunLightShadows.value=j.state.sunShadow,Wt.directionalLights.value=j.state.directional,Wt.directionalLightShadows.value=j.state.directionalShadow,Wt.spotLights.value=j.state.spot,Wt.spotLightShadows.value=j.state.spotShadow,Wt.rectAreaLights.value=j.state.rectArea,Wt.ltc_1.value=j.state.rectAreaLTC1,Wt.ltc_2.value=j.state.rectAreaLTC2,Wt.pointLights.value=j.state.point,Wt.pointLightShadows.value=j.state.pointShadow,Wt.hemisphereLights.value=j.state.hemi,Wt.sunShadowMatrix.value=j.state.sunShadowMatrix,Wt.sunShadowCascade.value=j.state.sunShadowCascade,Wt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Wt.spotLightMatrix.value=j.state.spotLightMatrix,Wt.spotLightMap.value=j.state.spotLightMap,Wt.pointShadowMatrix.value=j.state.pointShadowMatrix),K.numLightProbeGrids=xu(E.state.lightProbeGridArray),K.currentProgram=pe,K.uniformsList=null,pe}function gp(R,H,et,K,j){let Ut=qt.get(R),Vt=Ut.currentProgram.id+","+K+","+j,Dt=Ut.programVariants.get(Vt);return Dt===void 0?(Dt=hr(R,H,et),Ut.programVariants.set(Vt,Dt)):(Ut.currentProgram=Dt,Ut.uniformsList=null,Ut.outputColorSpace=K,Ut.toneMapping=j),Dt}function _u(R){if(R.uniformsList===null){let H=R.currentProgram.getUniforms();R.uniformsList=er.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function vu(R,H){let et=qt.get(R);et.outputColorSpace=H.outputColorSpace,et.batching=H.batching,et.batchingColor=H.batchingColor,et.instancing=H.instancing,et.instancingColor=H.instancingColor,et.instancingMorph=H.instancingMorph,et.skinning=H.skinning,et.morphTargets=H.morphTargets,et.morphNormals=H.morphNormals,et.morphColors=H.morphColors,et.morphTargetsCount=H.morphTargetsCount,et.numClippingPlanes=H.numClippingPlanes,et.numIntersection=H.numClipIntersection,et.vertexAlphas=H.vertexAlphas,et.vertexTangents=H.vertexTangents,et.toneMapping=H.toneMapping}function xp(R,H,et,K,j){H.isScene!==!0&&(H=dt),te.resetTextureUnits();let Ut=H.fog,Vt=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?H.environment:null,Dt=ct===null?w.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:ge.workingColorSpace,zt=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Yt=C.get(K.envMap||Vt,zt),re=K.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pe=!!et.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Wt=!!et.morphAttributes.position,me=!!et.morphAttributes.normal,Ve=!!et.morphAttributes.color,Pe=si;K.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Pe=w.toneMapping);let Ie=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,on=Ie!==void 0?Ie.length:0,Xt=qt.get(K),dn=E.state.lights;if(q===!0&&(gt===!0||R!==B)){let Ge=R===B&&K.id===Z;ot.setState(K,R,Ge)}let Se=!1,Qi=!1;K.version===Xt.__version?Xt.needsLights&&Xt.lightsStateVersion!==dn.state.version||j.isBatchedMesh&&Xt.batching===!1||!j.isBatchedMesh&&Xt.batching===!0||j.isBatchedMesh&&Xt.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Xt.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Xt.instancing===!1||!j.isInstancedMesh&&Xt.instancing===!0||j.isSkinnedMesh&&Xt.skinning===!1||!j.isSkinnedMesh&&Xt.skinning===!0||j.isInstancedMesh&&Xt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Xt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Xt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Xt.instancingMorph===!1&&j.morphTexture!==null||Xt.envMap!==Yt||K.fog===!0&&Xt.fog!==Ut||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==ot.numPlanes||Xt.numIntersection!==ot.numIntersection)||Xt.vertexAlphas!==re||Xt.vertexTangents!==pe||Xt.morphTargets!==Wt||Xt.morphNormals!==me||Xt.morphColors!==Ve||Xt.morphTargetsCount!==on||Xt.numLightProbeGrids!==xu(E.state.lightProbeGridArray)?Se=!0:(Xt.outputColorSpace!==Dt||Xt.toneMapping!==Pe)&&(Qi=!0):(Se=!0,Xt.__version=K.version);let an=Xt.currentProgram;(Se===!0||Qi===!0)&&(an=Qi===!0?gp(K,H,j,Dt,Pe):hr(K,H,j),L&&K.isNodeMaterial&&L.onUpdateProgram(K,an,Xt));let Po=!1,Li=!1,ts=!1,ve=an.getUniforms(),nn=Xt.uniforms;if(pt.useProgram(an.program)&&(Po=!0,Li=!0,ts=!0),K.id!==Z&&(Z=K.id,Li=!0),Po||B!==R){pt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ve.setValue(D,"projectionMatrix",R.projectionMatrix),ve.setValue(D,"viewMatrix",R.matrixWorldInverse);let Ke=ve.map.cameraPosition;Ke!==void 0&&Ke.setValue(D,Ht.setFromMatrixPosition(R.matrixWorld)),Qt.logarithmicDepthBuffer&&ve.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ve.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),B!==R&&(B=R,Li=!0,ts=!0)}if(Xt.needsLights&&(dn.state.sunShadowMap.length>0&&ve.setValue(D,"sunShadowMap",dn.state.sunShadowMap,te),dn.state.directionalShadowMap.length>0&&ve.setValue(D,"directionalShadowMap",dn.state.directionalShadowMap,te),dn.state.spotShadowMap.length>0&&ve.setValue(D,"spotShadowMap",dn.state.spotShadowMap,te),dn.state.pointShadowMap.length>0&&ve.setValue(D,"pointShadowMap",dn.state.pointShadowMap,te)),j.isSkinnedMesh){ve.setOptional(D,j,"bindMatrix"),ve.setOptional(D,j,"bindMatrixInverse");let Ge=j.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),ve.setValue(D,"boneTexture",Ge.boneTexture,te))}j.isBatchedMesh&&(ve.setOptional(D,j,"batchingTexture"),ve.setValue(D,"batchingTexture",j._matricesTexture,te),ve.setOptional(D,j,"batchingIdTexture"),ve.setValue(D,"batchingIdTexture",j._indirectTexture,te),ve.setOptional(D,j,"batchingColorTexture"),j._colorsTexture!==null&&ve.setValue(D,"batchingColorTexture",j._colorsTexture,te));let zn=et.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&lt.update(j,et,an),(Li||Xt.receiveShadow!==j.receiveShadow)&&(Xt.receiveShadow=j.receiveShadow,ve.setValue(D,"receiveShadow",j.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&H.environment!==null&&(nn.envMapIntensity.value=H.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=_v()),Li){if(ve.setValue(D,"toneMappingExposure",w.toneMappingExposure),Xt.needsLights&&_p(nn,ts),Ut&&K.fog===!0&&Tt.refreshFogUniforms(nn,Ut),Tt.refreshMaterialUniforms(nn,K,bt,vt,E.state.transmissionRenderTarget[R.id]),Xt.needsLights&&Xt.numLightProbeGrids>0){let Ge=_,Ke=0;for(let ci of E.state.lightProbeGridArray)ci.texture!==null&&(Ge.textures[Ke]=ci.texture,Ge.min[Ke]=ci.boundingBox.min,Ge.max[Ke]=ci.boundingBox.max,Ge.resolution[Ke]=ci.resolution,Ke++);for(let ci in Ge)Ge[ci].length=Ke;nn.probesSH.value=Ge.textures,nn.probesMin.value=Ge.min,nn.probesMax.value=Ge.max,nn.probesResolution.value=Ge.resolution}er.upload(D,_u(Xt),nn,te)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(er.upload(D,_u(Xt),nn,te),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ve.setValue(D,"center",j.center),ve.setValue(D,"modelViewMatrix",j.modelViewMatrix),ve.setValue(D,"normalMatrix",j.normalMatrix),ve.setValue(D,"modelMatrix",j.matrixWorld),K.uniformsGroups!==void 0){let Ge=K.uniformsGroups;for(let Ke=0,ci=Ge.length;Ke<ci;Ke++){let Mu=Ge[Ke];Jt.update(Mu,an),Jt.bind(Mu,an)}}return an}function _p(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.sunLights.needsUpdate=H,R.sunLightShadows.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function vp(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ct},this.setRenderTargetTextures=function(R,H,et){let K=qt.get(R);K.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),qt.get(R.texture).__webglTexture=H,qt.get(R.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:et,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,H){let et=qt.get(R);et.__webglFramebuffer=H,et.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,et=0){ct=R,V=H,X=et;let K=null,j=!1,Ut=!1;if(R){let Dt=qt.get(R);if(Dt.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(D.FRAMEBUFFER,Dt.__webglFramebuffer),Y.copy(R.viewport),ft.copy(R.scissor),mt=R.scissorTest,pt.viewport(Y),pt.scissor(ft),pt.setScissorTest(mt),Z=-1;return}else if(Dt.__webglFramebuffer===void 0)te.setupRenderTarget(R);else if(Dt.__hasExternalTextures)te.rebindTextures(R,qt.get(R.texture).__webglTexture,qt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let re=R.depthTexture;if(Dt.__boundDepthTexture!==re){if(re!==null&&qt.has(re)&&(R.width!==re.image.width||R.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(R)}}let zt=R.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Ut=!0);let Yt=qt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Yt[H])?K=Yt[H][et]:K=Yt[H],j=!0):R.samples>0&&te.useMultisampledRTT(R)===!1?K=qt.get(R).__webglMultisampledFramebuffer:Array.isArray(Yt)?K=Yt[et]:K=Yt,Y.copy(R.viewport),ft.copy(R.scissor),mt=R.scissorTest}else Y.copy(k).multiplyScalar(bt).floor(),ft.copy(it).multiplyScalar(bt).floor(),mt=Q;if(et!==0&&(K=U),pt.bindFramebuffer(D.FRAMEBUFFER,K)&&pt.drawBuffers(R,K),pt.viewport(Y),pt.scissor(ft),pt.setScissorTest(mt),j){let Dt=qt.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+H,Dt.__webglTexture,et)}else if(Ut){let Dt=H;for(let zt=0;zt<R.textures.length;zt++){let Yt=qt.get(R.textures[zt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+zt,Yt.__webglTexture,et,Dt)}}else if(R!==null&&et!==0){let Dt=qt.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Dt.__webglTexture,et)}Z=-1};function yu(R){let H=qt.get(R);return(H.__readFormat!==R.format||H.__readType!==R.type)&&(H.__readFormat=R.format,H.__readType=R.type,H.__formatReadable=Qt.textureFormatReadable(R.format),H.__typeReadable=Qt.textureTypeReadable(R.type)),H}this.readRenderTargetPixels=function(R,H,et,K,j,Ut,Vt,Dt=0){if(!(R&&R.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=qt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Vt!==void 0&&(zt=zt[Vt],Array.isArray(zt)&&(zt=zt[0])),zt){pt.bindFramebuffer(D.FRAMEBUFFER,zt);try{let Yt=R.textures[Dt],re=Yt.format,pe=Yt.type;R.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Dt);let Wt=yu(Yt);if(Wt.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Wt.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-K&&et>=0&&et<=R.height-j&&D.readPixels(H,et,K,j,wt.convert(re),wt.convert(pe),Ut)}finally{let Yt=ct!==null?qt.get(ct).__webglFramebuffer:null;pt.bindFramebuffer(D.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(R,H,et,K,j,Ut,Vt,Dt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=qt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Vt!==void 0&&(zt=zt[Vt],Array.isArray(zt)&&(zt=zt[0])),zt)if(H>=0&&H<=R.width-K&&et>=0&&et<=R.height-j){pt.bindFramebuffer(D.FRAMEBUFFER,zt);let Yt=R.textures[Dt],re=Yt.format,pe=Yt.type;R.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Dt);let Wt=yu(Yt);if(Wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let me=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,me),D.bufferData(D.PIXEL_PACK_BUFFER,Ut.byteLength,D.STREAM_READ),D.readPixels(H,et,K,j,wt.convert(re),wt.convert(pe),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Ve=ct!==null?qt.get(ct).__webglFramebuffer:null;pt.bindFramebuffer(D.FRAMEBUFFER,Ve);let Pe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Hf(D,Pe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,me),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ut),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(me),D.deleteSync(Pe),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,H=null,et=0){let K=Math.pow(2,-et),j=Math.floor(R.image.width*K),Ut=Math.floor(R.image.height*K),Vt=H!==null?H.x:0,Dt=H!==null?H.y:0;te.setTexture2D(R,0),D.copyTexSubImage2D(D.TEXTURE_2D,et,0,0,Vt,Dt,j,Ut),pt.unbindTexture()},this.copyTextureToTexture=function(R,H,et=null,K=null,j=0,Ut=0){let Vt,Dt,zt,Yt,re,pe,Wt,me,Ve,Pe=R.isCompressedTexture?R.mipmaps[Ut]:R.image;if(et!==null)Vt=et.max.x-et.min.x,Dt=et.max.y-et.min.y,zt=et.isBox3?et.max.z-et.min.z:1,Yt=et.min.x,re=et.min.y,pe=et.isBox3?et.min.z:0;else{let ve=Math.pow(2,-j);Vt=Math.floor(Pe.width*ve),Dt=Math.floor(Pe.height*ve),R.isDataArrayTexture?zt=Pe.depth:R.isData3DTexture?zt=Math.floor(Pe.depth*ve):zt=1,Yt=0,re=0,pe=0}K!==null?(Wt=K.x,me=K.y,Ve=K.z):(Wt=0,me=0,Ve=0);let Ie=wt.convert(H.format),on=wt.convert(H.type),Xt;H.isData3DTexture?(te.setTexture3D(H,0),Xt=D.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(te.setTexture2DArray(H,0),Xt=D.TEXTURE_2D_ARRAY):(te.setTexture2D(H,0),Xt=D.TEXTURE_2D),pt.activeTexture(D.TEXTURE0),pt.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,H.flipY),pt.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),pt.pixelStorei(D.UNPACK_ALIGNMENT,H.unpackAlignment);let dn=pt.getParameter(D.UNPACK_ROW_LENGTH),Se=pt.getParameter(D.UNPACK_IMAGE_HEIGHT),Qi=pt.getParameter(D.UNPACK_SKIP_PIXELS),an=pt.getParameter(D.UNPACK_SKIP_ROWS),Po=pt.getParameter(D.UNPACK_SKIP_IMAGES);pt.pixelStorei(D.UNPACK_ROW_LENGTH,Pe.width),pt.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pe.height),pt.pixelStorei(D.UNPACK_SKIP_PIXELS,Yt),pt.pixelStorei(D.UNPACK_SKIP_ROWS,re),pt.pixelStorei(D.UNPACK_SKIP_IMAGES,pe);let Li=R.isDataArrayTexture||R.isData3DTexture,ts=H.isDataArrayTexture||H.isData3DTexture;if(R.isDepthTexture){let ve=qt.get(R),nn=qt.get(H),zn=qt.get(ve.__renderTarget),Ge=qt.get(nn.__renderTarget);pt.bindFramebuffer(D.READ_FRAMEBUFFER,zn.__webglFramebuffer),pt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Ke=0;Ke<zt;Ke++)Li&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qt.get(R).__webglTexture,j,pe+Ke),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qt.get(H).__webglTexture,Ut,Ve+Ke)),D.blitFramebuffer(Yt,re,Yt+Vt,re+Dt,Wt,me,Wt+Vt,me+Dt,D.DEPTH_BUFFER_BIT,D.NEAREST);pt.bindFramebuffer(D.READ_FRAMEBUFFER,null),pt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||qt.has(R)){let ve=qt.get(R),nn=qt.get(H);pt.bindFramebuffer(D.READ_FRAMEBUFFER,P),pt.bindFramebuffer(D.DRAW_FRAMEBUFFER,G);for(let zn=0;zn<zt;zn++)Li?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ve.__webglTexture,j,pe+zn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ve.__webglTexture,j),ts?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,nn.__webglTexture,Ut,Ve+zn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,nn.__webglTexture,Ut),j!==0?D.blitFramebuffer(Yt,re,Yt+Vt,re+Dt,Wt,me,Wt+Vt,me+Dt,D.COLOR_BUFFER_BIT,D.NEAREST):ts?D.copyTexSubImage3D(Xt,Ut,Wt,me,Ve+zn,Yt,re,Vt,Dt):D.copyTexSubImage2D(Xt,Ut,Wt,me,Yt,re,Vt,Dt);pt.bindFramebuffer(D.READ_FRAMEBUFFER,null),pt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ts?R.isDataTexture||R.isData3DTexture?D.texSubImage3D(Xt,Ut,Wt,me,Ve,Vt,Dt,zt,Ie,on,Pe.data):H.isCompressedArrayTexture?D.compressedTexSubImage3D(Xt,Ut,Wt,me,Ve,Vt,Dt,zt,Ie,Pe.data):D.texSubImage3D(Xt,Ut,Wt,me,Ve,Vt,Dt,zt,Ie,on,Pe):R.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ut,Wt,me,Vt,Dt,Ie,on,Pe.data):R.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ut,Wt,me,Pe.width,Pe.height,Ie,Pe.data):D.texSubImage2D(D.TEXTURE_2D,Ut,Wt,me,Vt,Dt,Ie,on,Pe);pt.pixelStorei(D.UNPACK_ROW_LENGTH,dn),pt.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Se),pt.pixelStorei(D.UNPACK_SKIP_PIXELS,Qi),pt.pixelStorei(D.UNPACK_SKIP_ROWS,an),pt.pixelStorei(D.UNPACK_SKIP_IMAGES,Po),Ut===0&&H.generateMipmaps===!0&&H.mipmapsAutoUpdate===!0&&D.generateMipmap(Xt),pt.unbindTexture()},this.initRenderTarget=function(R){qt.get(R).__webglFramebuffer===void 0&&te.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?te.setTextureCube(R,0):R.isData3DTexture?te.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?te.setTexture2DArray(R,0):te.setTexture2D(R,0),pt.unbindTexture()},this.resetState=function(){V=0,X=0,ct=null,pt.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}};function we(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Te;l.morphTargetsRelative=a;let c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0,d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Ld(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let M=0;M<o[h].length;++M)d.push(o[h][M][f]);let p=Ld(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Ld(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new sn(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<e;p++){let M=h.getComponent(f,p);a.setComponent(f+u,p,M)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var De=510,rr=[85,255,425],vn=[-1,0,1,2],$i=[2.6,6.1,9.6],Ce=11.4,Yn=.9,Lh=20,Dd=11,yv=2,Sn,Je,ze,Yh,Mn,He=null,Dh=!1,Zh=0,ir=null,Ct={pos:null,metroSint:null,metro8:!1,metrobus:!1,troleElev:!1,viaje:!1,pct:null,dist:null,vel:null,nivel:"ligero",noche:!1,rojo:!1,zona:"mixto",pico:!1,llego:!1},Mo=new ae;function Zn(i,t){Mo.set(t).convertSRGBToLinear();let e=i.attributes.position.count,n=new Float32Array(e*3);for(let s=0;s<e;s++)n[s*3]=Mo.r,n[s*3+1]=Mo.g,n[s*3+2]=Mo.b;return i.setAttribute("color",new sn(n,3)),i}var Kt=(i,t,e,n,s,r,o)=>Zn(new Gt(i,t,e).translate(n,s,r),o),fn=(i,t,e=.38)=>Zn(new he(e,e,.32,10).rotateX(Math.PI/2).translate(i,e,t),1447446);function Jh(i,t,e){let n=document.createElement("canvas");n.width=n.height=64;let s=n.getContext("2d"),r=s.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,`rgba(${i},${t},${e},0.95)`),r.addColorStop(.45,`rgba(${i},${t},${e},0.35)`),r.addColorStop(1,`rgba(${i},${t},${e},0)`),s.fillStyle=r,s.fillRect(0,0,64,64);let o=new En(n);return o.colorSpace=Oe,o}var Ji,Kd,rc,lr,To,ru,ou,Ql,Nh={};function Mv(i,t=16777215,e=2831424){let n=i+t+"_"+e;if(Nh[n])return Nh[n];let s=2502715,r=[],o,a;switch(i){case"hatch":o=4,a=1.85,r=[Kt(o,.8,a,0,.75,0,t),Kt(2.5,.68,a*.86,-.55,1.49,0,s),Kt(2.45,.08,a*.88,-.55,1.86,0,t),Kt(.06,.25,a*.6,o/2,.95,0,10133670)];break;case"sedan":o=4.5,a=1.85,r=[Kt(o,.75,a,0,.72,0,t),Kt(2.3,.62,a*.86,-.15,1.4,0,s),Kt(2.2,.08,a*.88,-.15,1.74,0,t)];break;case"ejec":o=5,a=1.9,r=[Kt(o,.62,a,0,.68,0,t),Kt(2.6,.52,a*.86,-.2,1.25,0,s),Kt(2.5,.07,a*.88,-.2,1.54,0,t),Kt(o*.98,.05,a*1.01,0,.82,0,13225686)];break;case"depor":o=4.4,a=1.95,r=[Kt(o,.5,a,0,.6,0,t),Kt(1.8,.42,a*.82,-.3,1.06,0,s),Kt(1.7,.06,a*.84,-.3,1.28,0,t),Kt(.3,.08,a*.9,-o/2+.2,1.08,0,1118481)];break;case"taxi":o=4.5,a=1.85,r=[Kt(o,.45,a,0,.58,0,16185075),Kt(o,.32,a*1.001,0,.98,0,15217551),Kt(2.3,.62,a*.86,.15,1.45,0,s),Kt(2.2,.08,a*.88,.15,1.79,0,15217551),Kt(.5,.22,.8,.15,1.94,0,16777215)];break;case"suv":o=4.7,a=1.95,r=[Kt(o,.95,a,0,.85,0,t),Kt(3.2,.7,a*.88,-.35,1.67,0,s),Kt(3.1,.09,a*.9,-.35,2.06,0,t)];break;case"micro":o=7.5,a=2.3,r=[Kt(o,1.5,a,0,1.25,0,15526884),Kt(o,.55,a*1.002,0,.75,0,3119698),Kt(o*.92,.6,a*1.004,-.2,1.6,0,s),Kt(o*.95,.12,a,0,2.06,0,13947851)];break;case"torton":o=8.2,a=2.4,r=[Kt(5.6,2.5,a,-1.2,1.95,0,t),Kt(2,1.7,a,2.9,1.45,0,e),Kt(.9,.7,a*.9,3.4,1.95,0,s)];break;case"trailer":o=15,a=2.5,r=[Kt(11.4,2.9,a,-1.7,2.2,0,t),Kt(.2,.3,a,-1.7,.75,0,12597547),Kt(2.8,2.2,a,5.9,1.75,0,e),Kt(1.1,.8,a*.9,6.6,2.35,0,s),Kt(.15,1.6,.15,4.7,3.4,.9,9079434),fn(-5.6,a/2-.12,.5),fn(-5.6,-a/2+.12,.5)];break;case"moto":o=2,a=.6,r=[Kt(1.7,.35,.3,0,.75,0,t),Kt(.5,.75,.42,-.15,1.35,0,e),Zn(new Pn(.2,8,6).translate(-.05,1.9,0),1118481),Zn(new he(.3,.3,.12,10).rotateX(Math.PI/2).translate(.75,.3,0),1447446),Zn(new he(.3,.3,.12,10).rotateX(Math.PI/2).translate(-.75,.3,0),1447446)];break}if(i!=="moto"){let c=o/2-.85,h=-o/2+.85,u=a/2-.12,f=o>7?.5:.38;r.push(fn(c,u,f),fn(c,-u,f),fn(h,u,f),fn(h,-u,f))}let l=we(r);return l.computeVertexNormals(),Nh[n]={geo:l,L:o,W:a}}function wo(i,t,e){let n=Mv(i,t,e),s=new _e,r=new st(n.geo,Ji);r.castShadow=!0,s.add(r);let o=i==="moto"?.95:n.L>7?1.1:.9,a=new st(new Gt(.08,.18,i==="moto"?.2:n.W*.85),lr);a.position.set(-n.L/2-.02,o,0),s.add(a);let l=new st(Ql,Kd);l.scale.set(5.5,1,n.W*2.4),l.position.set(-n.L/2-1.6,.06,0),l.visible=!1,s.add(l);let c=new st(new Gt(.06,.16,i==="moto"?.16:n.W*.8),ru);c.position.set(n.L/2+.02,o,0),s.add(c);let h=new st(Ql,rc);return h.scale.set(9,1,n.W*2.2),h.position.set(n.L/2+4.5,.05,0),h.visible=!1,s.add(h),Je.add(s),{g:s,stop:a,glow:l,haz:h,L:n.L,tipo:i}}var Co=[],tc=[],So,Yi,sr,yn,$h;function _o(i,t,e,n,s,r=0){let o=new st(new Re(i,t).rotateX(-Math.PI/2),new At({color:s}));return o.position.set(e,r,n),o.receiveShadow=!0,yn.add(o),o}var kl=vn.flatMap(i=>rr.map((t,e)=>({x:t+i*De,i:e})));function Sv(){let i=vn[0]*De,t=vn.length*De,e=i+t/2;_o(t,420,e,0,14673372,-.02),_o(t,Ce*2,e,0,3816773,0),_o(t,3,e,Ce+1.5,13225156,.01),_o(t,3,e,-Ce-1.5,13225156,.01),kl.forEach(x=>_o(12,420,x.x,0,3816773,.005));let n=[];for(let x of vn)for(let y=0;y<De;y+=10)rr.some(A=>y+10>A-7&&y<A+7)||n.push(new Gt(10,.7,.6).translate(x*De+y+5,.35,0));let s=new st(we(n),new At({color:12172739}));s.castShadow=s.receiveShadow=!0,yn.add(s),$h=s;let r=[];for(let x of[1,-1]){for(let y of[Yn,Ce-.35])r.push(new Re(t,.18).rotateX(-Math.PI/2).translate(e,.02,x*y));for(let y of vn)for(let A=0;A<De;A+=8.5)if(!rr.some(w=>Math.abs(A-w)<9))for(let w of[4.35,7.85])r.push(new Re(3,.16).rotateX(-Math.PI/2).translate(y*De+A,.02,x*w))}kl.forEach(({x})=>{for(let y=-Ce+.6;y<Ce;y+=1.1)Math.abs(y)>Yn+.3&&r.push(new Re(3.2,.6).rotateX(-Math.PI/2).translate(x-7.6,.025,y));r.push(new Re(.4,Ce-Yn).rotateX(-Math.PI/2).translate(x-9.8,.025,(Ce+Yn)/2)),r.push(new Re(.4,Ce-Yn).rotateX(-Math.PI/2).translate(x+9.8,.025,-(Ce+Yn)/2))}),yn.add(new st(we(r),new xe({color:15921906})));let o=[15918022,15250592,13227743,16045453,12114110,15123414,14209732,11125984,15778427],a=[];for(let x of[1,-1]){let y=0;for(;y<De-6;){let A=Math.min(7+Math.random()*10,De-y);if(rr.some(w=>Math.abs(y+A/2-w)<6+A/2)){y+=4;continue}a.push({x:y+A/2,w:A-.8,h:4+Math.random()*(Math.random()<.2?22:9),d:8+Math.random()*8,s:x,dz:Math.random()*1.5,c:o[a.length%o.length]}),y+=A}}let l=new Le(new Gt(1,1,1).translate(0,.5,0),new At({color:16777215}),a.length*vn.length);l.castShadow=l.receiveShadow=!0;let c=new oe,h=new Xe,u=new N,f=new N,d=0;for(let x of vn)for(let y of a)u.set(x*De+y.x,0,y.s*(Ce+3.5+y.d/2+y.dz)),f.set(y.w,y.h,y.d),l.setMatrixAt(d,c.compose(u,h,f)),l.setColorAt(d,Mo.set(y.c)),d++;yn.add(l);let p=[];for(let x of[1,-1])for(let y=5;y<De;y+=17)rr.some(A=>Math.abs(y-A)<9)||p.push({x:y+Math.random()*3,s:x,e:.8+Math.random()*.5});let M=new Le(new he(.15,.2,1.4,6).translate(0,.7,0),new At({color:8018490}),p.length*vn.length),g=new Le(new Js(1.2,0).translate(0,2.3,0),new At({color:5939290,flatShading:!0}),p.length*vn.length);g.castShadow=!0,d=0;for(let x of vn)for(let y of p)u.set(x*De+y.x,0,y.s*(Ce+2.2)),f.setScalar(y.e),c.compose(u,h,f),M.setMatrixAt(d,c),g.setMatrixAt(d,c),d++;yn.add(M,g),So=new _e,yn.add(So);let m=[],S=[],v=[];for(let x of[1,-1])for(let y of vn)for(let A=10;A<De;A+=30){let w=y*De+A;m.push(new he(.09,.12,7,6).translate(w,3.5,x*(Ce+.6)),new Gt(.15,.12,2.2).translate(w,7,x*(Ce-.4))),S.push(new Gt(.5,.12,.8).translate(w,6.92,x*(Ce-1.3))),v.push(new Re(9,9).rotateX(-Math.PI/2).translate(w,.04,x*(Ce-2.5)))}So.add(new st(we(m),new At({color:7172214})),new st(we(S),ou));let _=new st(we(v),new xe({map:rc.map,transparent:!0,depthWrite:!1,blending:Si,opacity:.55}));_.visible=!1,_.name="charcos",So.add(_),Co=kl.map(({x,i:y})=>{let A=(w,I,L)=>{let U=new _e,P=new At({color:3882821}),G=new st(new he(.12,.14,6,8),P);G.position.y=3,U.add(G);let V=new st(new Gt(.14,.14,7),P);V.position.set(0,5.9,-3.5),U.add(V);let X=new st(new Gt(.45,1.5,.55),new At({color:1908514}));X.position.set(-.1,5.2,-6),X.castShadow=!0,U.add(X);let ct=[16722458,16761856,2282347].map((Z,B)=>{let Y=new st(new Pn(.17,10,8),new xe({color:2236962}));return Y.position.set(-.35,5.68-B*.47,-6),Y.userData.on=Z,U.add(Y),Y});return U.position.set(w,0,I),U.rotation.y=L,yn.add(U),ct};return{x,off:y*7.3,ida:A(x-10.5,Ce+.9,0),reg:A(x+10.5,-Ce-.9,Math.PI)}});let b=[15029053,3120750,8084694,14722342,3770341,13651850];tc=[],kl.forEach(({x},y)=>{for(let A=0;A<3;A++){let w=new _e,I=new st(new he(.22,.26,.95,8),new At({color:b[(y+A)%b.length]}));I.position.y=1.15,I.castShadow=!0;let L=new st(new he(.2,.18,.7,8),new At({color:2899543}));L.position.y=.35;let U=new st(new Pn(.2,10,8),new At({color:13209186}));U.position.y=1.85;let P=new st(new Gt(.12,.5,.12),new xe({color:16765952}));P.position.y=2.6,P.visible=!1,w.add(I,L,U,P);let G=A%2?1:-1,V=G*(Ce+1.2);w.position.set(x-8.8+A*.8,0,V),yn.add(w),tc.push({g:w,susto:P,cx:x,dx:-8.8+A*.8,z:V,modo:"espera",t:Math.random()*2,dir:-G})}});let E=(x,y)=>{let A=document.createElement("canvas");A.width=A.height=128;let w=A.getContext("2d");w.fillStyle=y,w.beginPath(),w.arc(64,64,56,0,7),w.fill(),w.fillStyle="#fff",w.font="bold 80px Arial",w.textAlign="center",w.textBaseline="middle",w.fillText(x,64,70);let I=new En(A);I.colorSpace=Oe;let L=new _e,U=new Bi(new yi({map:I}));U.scale.set(5,5,1),U.position.set(0,7.5,Ce+2.5),L.add(U);let P=new st(new he(.12,.12,5,6),new At({color:7829367}));P.position.set(0,2.5,Ce+2.5),L.add(P);let G=new st(new Re(1.2,Ce-Yn).rotateX(-Math.PI/2),new xe({color:y}));return G.position.set(0,.03,(Ce+Yn)/2),L.add(G),L.visible=!1,yn.add(L),L};Yi=E("A","#3987e5"),sr=E("B","#d95926")}var Kh=[12597547,2976949,1381914,12567753,15921903,8028038,14722342,3120750,9185828,2504266],Ev=[1381914,2504266,15921903,3816770,12720152,12567753],wn=[],Bt,Nd,gs,jh="",li=i=>i[Math.floor(Math.random()*i.length)];function jd(){let i=["micro","micro","torton","sedan","sedan","taxi","suv"],t=["ejec","ejec","suv","suv","depor","sedan"],e=Ct.zona==="popular"?i:Ct.zona==="lujo"?t:[...i.slice(0,4),...t.slice(0,4)];return Ct.pico&&(e=[...e,"torton","trailer","trailer","torton","trailer"]),li(e)}function Uh(i,t,e,n,s){let r=li((i==="ejec"||i==="suv"||i==="depor")&&Ct.zona==="lujo"?Ev:Kh),o=2831424;i==="depor"&&(r=li([12720152,15921903,1381914,14722342])),(i==="torton"||i==="trailer")&&(r=li([15921902,15262416,14277846]),o=li([12597547,2056104,15921906])),i==="moto"&&(r=li([12986408,1402304,2236962]),o=li([3622735,7162945,1793568]));let l={...wo(i,r,o),dir:t,z:e,x:n,v:s*.7,v0:s,a:0,frena:0,zLane:e,fase:Math.random()*6};return l.g.rotation.y=t>0?0:Math.PI,l.haz.visible=Ct.noche,wn.push(l),l}function Qd(){for(let s of wn.splice(0))s!==Bt&&Je.remove(s.g);wn.push(Bt);let i=Ct.nivel==="pesado",t=Bt.x,e=i?8.5:36,n=i?7:15;for(let s of[1,-1])for(let r=0;r<3;r++){if(r===0&&Ct.metrobus)continue;let o=s*$i[r];for(let a=t-80+Math.random()*10;a<t+150;a+=e*(.8+Math.random()*.6))s>0&&r===1&&a>t-(i?13:30)&&a<t+(i?10:40)||!i&&Math.random()<.35||Uh(jd(),s,o,a,n*(.85+Math.random()*.3)*(s<0?1.1:1))}Nd=Uh("taxi",1,$i[1],t-(i?7.5:12),12),Nd.esTaxi=!0;for(let s of[1,-1])for(let r of[4.35,7.85])for(let o=0;o<2;o++)Uh("moto",s,s*r,t-60+Math.random()*180,19+Math.random()*4)}var On=0,Ri=0;function tp(){let i=null;for(let t of Co){let e=t.x-10-Bt.x;e>-1&&(!i||e<i.d)&&(i={s:t,d:e})}return i}function au(i){let t=tp();if(t&&t.s===i&&t.d<90){if(Ct.rojo)return"rojo";if(Bt.v>1.5)return"verde"}let e=((On+i.off)%Lh+Lh)%Lh;return e<Dd?"verde":e<Dd+yv?"amarillo":"rojo"}var ps={a:1.6,b:3,T:1.1,s0:2.2};function bv(i){for(let t of Co){let e=i.dir>0?t.x-10:t.x+10,n=(e-i.x)*i.dir;if(n>0&&n<70){let s=au(t);return s==="rojo"||s==="amarillo"&&n>i.v*i.v/(2*ps.b)+2?e:null}}return null}function Fh(i){for(let t of wn)t.x+=i}var Ud=!1;function Tv(i){On+=i;let t;if(Ct.rojo||Ct.llego?t=0:Ct.vel!=null?t=Ct.vel/3.6:t=Ct.nivel==="pesado"?7:13,Bt.a=(t-Bt.v)*1.2,Bt.v=Math.max(0,Bt.v+Bt.a*i),Bt.x+=Bt.v*i,Ct.rojo&&!Ud){let r=tp();if(r&&r.d>3){let o=-(r.d-3);Fh(o),Ri-=o}}Ud=Ct.rojo;let e={};for(let r of wn)r.tipo!=="moto"&&r!==Bt&&(e[r.dir+":"+r.zLane]||=[]).push(r);(e["1:"+$i[1]]||=[]).push(Bt);for(let r in e){let o=e[r].sort((a,l)=>(l.x-a.x)*l.dir);for(let a=0;a<o.length;a++){let l=o[a];if(l===Bt)continue;let c=o[a-1];l.esTaxi&&(l.v0=Math.max(9,Bt.v+3));let h=1e9,u=0;c&&(h=(c.x-l.x)*l.dir-(c.L+l.L)/2,u=l.v-c.v);let f=bv(l);if(f!=null){let M=(f-l.x)*l.dir-l.L/2;M<h&&(h=M,u=l.v)}l.dir>0&&l.zLane===$i[1]&&c===Bt&&h<0&&(l.x=Bt.x-(Bt.L+l.L)/2-1.5,l.v=Bt.v);let d=ps.s0+Math.max(0,l.v*ps.T+l.v*u/(2*Math.sqrt(ps.a*ps.b))),p=ps.a*(1-Math.pow(l.v/l.v0,4)-Math.pow(d/Math.max(h,.1),2));Ct.nivel==="pesado"&&Math.random()<.0015&&(l.frena=1.2),l.frena>0&&(l.frena-=i,p=Math.min(p,-3.5)),p=Math.max(-8,Math.min(ps.a,p)),l.a=p,l.v=Math.max(0,l.v+p*i),l.x+=l.v*l.dir*i}for(let a=0;a<o.length;a++)if(o[a]===Bt&&o[a-1]){let l=o[a-1],c=l.x-Bt.x-(l.L+Bt.L)/2;c<4&&(l.x+=4-c+(Bt.v>l.v?30:0))}}for(let r of wn)r.tipo==="moto"&&(r.fase+=i,r.v=r.v0,r.x+=r.v*r.dir*i,r.z=r.zLane+Math.sin(r.fase*.9)*.6,r.a=0);let n=Bt.x,s=Ct.nivel==="pesado";for(let r of wn){if(r===Bt)continue;let o=r.x-n;if(r.tipo==="moto"){r.dir>0&&o>170?r.x=n-100-Math.random()*30:r.dir>0&&o<-110?r.x=n+160:r.dir<0&&o<-110&&(r.x=n+160+Math.random()*40);continue}if(r.esTaxi){(o<-60||o>0)&&(r.x=n-(Bt.L+r.L)/2-3,r.v=Bt.v);continue}r.dir>0&&o>170?(r.x=wv(r)-(s?9:30)*(.8+Math.random()*.5),r.v=r.v0*.6):r.dir>0&&o<-110?r.x=Fd(r)+(s?9:30):r.dir<0&&o<-110&&(r.x=Fd(r)+(s?10:34)*(.8+Math.random()*.5),r.v=r.v0*.8)}Bt.x>De&&(Fh(-De),Ri+=De),Bt.x<-De/2&&(Fh(De),Ri-=De);for(let r of tc){let o=Co.find(h=>h.x===r.cx),a=au(o)==="rojo",l=r.cx-7.6,c=h=>wn.some(u=>u.tipo==="moto"&&Math.abs(u.z-h)<1.6&&(l-u.x)*u.dir>-1&&(l-u.x)*u.dir<24);if(r.modo==="espera")r.t-=i,a&&r.t<=0&&!c(r.z+r.dir*2)&&(r.modo="cruza");else if(r.modo==="cruza"){let h=r.z+r.dir*(a?1.4:2.6)*i;c(h+r.dir*1.2)&&Math.abs(r.z)<Ce?(r.modo="huye",r.dir=-r.dir):(r.z=h,Math.abs(r.z)>=Ce+1.2&&Math.sign(r.z)===Math.sign(r.dir)&&(r.modo="espera",r.t=2+Math.random()*3,r.dir=-Math.sign(r.z)))}else r.z+=r.dir*3.4*i,(Math.abs(r.z)>=Ce+1.2||Math.abs(r.z)<Yn+.2)&&(r.modo="espera",r.t=1.2+Math.random()*1.5,Math.abs(r.z)>=Ce+1.2&&(r.dir=-Math.sign(r.z)));r.g.position.z=r.z,r.susto.visible=r.modo==="huye",r.g.position.y=r.modo!=="espera"?Math.abs(Math.sin(On*(r.modo==="huye"?16:9)))*.08:0}}function wv(i){let t=1/0;for(let e of wn)e.dir===i.dir&&e.zLane===i.zLane&&e!==i&&(t=Math.min(t,e.x));return Math.min(t,Bt.x-20)}function Fd(i){let t=-1/0;for(let e of wn)e.dir===i.dir&&e.zLane===i.zLane&&e!==i&&(t=Math.max(t,e.x));return Math.max(t,Bt.x+60)}function ec(){let i=Ct.noche,t=oy(i),e=typeof ic<"u"&&ic==="real";Je.background=t.t,Je.fog=new Lr(t.horiz,e?180:110,e?560:320),ms&&(ms.emissive.set(i?16777215:0),ms.emissiveIntensity=i?.9:0),Yh.intensity=i?.45:1.7,Mn.intensity=i?.25:2.3,Mn.color.set(i?9414399:16777215),ru.color.set(i?16774856:14277071),ou.color.set(i?16769946:9079424),So.getObjectByName("charcos").visible=i;for(let n of wn)n.haz.visible=i}var ep={atras:[-9.5,6.4,0,22,1],diag:[-24,36,-13,8],cerca:[-13,10,-7,6],arriba:[-6,70,-.5,6],propia:[-24,36,-13,8]},Av={atras:[-9.5,6.4,0,22,1],diag:[-50,75,-28,24],cerca:[-16,12,-8,10],arriba:[-10,150,-1,22],propia:[-50,75,-28,24]},Od={atras:"Atr\xE1s",diag:"Diagonal",cerca:"Cerca",arriba:"Arriba",propia:"Personalizada"},Bd={yaw:.55,pitch:.62,dist:55},un=(()=>{try{return{...Bd,...JSON.parse(localStorage.getItem("vista3dPropia")||"{}")}}catch{return{...Bd}}})();function Qh(){try{localStorage.setItem("vista3dPropia",JSON.stringify(un))}catch{}}var Oh=["atras","diag","cerca","arriba","propia"],Fe=(()=>{try{return localStorage.getItem("vista3dCam3")||"atras"}catch{return"atras"}})();ep[Fe]||(Fe="atras");var Ci=new N,Ii=new N,tu=(()=>{try{return JSON.parse(localStorage.getItem("vista3dZoom")||"{}")||{}}catch{return{}}})(),np=i=>Math.max(.3,Math.min(4,+tu[i]||1));function Rv(i){if(Fe==="propia"){un.dist=Math.max(6,Math.min(450,un.dist/i)),Qh();return}tu[Fe]=Math.max(.3,Math.min(4,np(Fe)/i));try{localStorage.setItem("vista3dZoom",JSON.stringify(tu))}catch{}lu()}var ip=(i,t,e,n,s)=>{let r=np(Fe);r!==1&&(i.x=t+(i.x-t)*r,i.z=n+(i.z-n)*r,i.y=Math.max(e+1.6,e+(i.y-e)*r),s&&r<1&&(s.x=t+(s.x-t)*r,s.z=n+(s.z-n)*r))},ds=null;function lu(){if(He){if(!ds){ds=document.createElement("div"),ds.style.cssText="position:absolute;right:10px;top:50%;transform:translateY(-50%);z-index:5;display:flex;flex-direction:column;border-radius:12px;overflow:hidden;box-shadow:0 3px 12px rgba(0,0,0,.35);touch-action:manipulation";let i=(e,n,s)=>{let r=document.createElement("button");r.type="button",r.textContent=e,r.setAttribute("aria-label",s),r.style.cssText="width:44px;height:44px;border:0;background:#fffffff0;color:#121211;font:600 26px/1 system-ui,sans-serif;padding:0;-webkit-user-select:none;user-select:none;touch-action:manipulation";for(let o of["pointerdown","touchstart","mousedown"])r.addEventListener(o,a=>a.stopPropagation(),{passive:!0});return r.addEventListener("click",o=>{o.stopPropagation(),o.preventDefault(),Rv(n)}),r},t=document.createElement("div");t.style.cssText="height:1px;background:#0002",ds.append(i("+",1.25,"Acercar"),t,i("\u2212",.8,"Alejar"))}ds.parentNode!==He&&(getComputedStyle(He).position==="static"&&(He.style.position="relative"),He.appendChild(ds)),ds.style.display=fe?"none":"flex"}}function sp(i,t){let[e,n,s,r,o=0]=ep[Fe],a=new N(Bt.x+e,n,Bt.z+s),l=new N(Bt.x+r,o,Bt.z+(Fe==="atras"?0:3));if(ip(a,Bt.x,0,Bt.z,l),t)Ci.copy(a),Ii.copy(l);else{let c=1-Math.exp(-i*3);Ci.lerp(a,c),Ii.lerp(l,c)}ze.position.copy(Ci),ze.lookAt(Ii),Mn.position.set(Bt.x+25,45,Bt.z+30),Mn.target.position.set(Bt.x,0,Bt.z)}function Cv(){for(let t of wn){t.g.position.set(t.x,0,t.z);let e=t.tipo!=="moto"&&(t.a<-.6||t.v<.4);t.stop.material=e?To:lr,t.glow.visible=e||Ct.noche&&t.tipo!=="moto",t.glow.scale.x=e?5.5:2.5}gs.position.y=3.3+Math.sin(On*3)*.2,gs.rotation.y+=.03;for(let t of Co){let e=au(t),n=e==="rojo"?0:e==="amarillo"?1:2;for(let s of[t.ida,t.reg])s.forEach((r,o)=>r.material.color.set(o===n?r.userData.on:2236962))}for(let t of tc)t.g.position.x=t.cx+t.dx;let i=Bt.x+Ri;if(Ct.viaje&&Ct.pct!=null&&Ct.dist){let t=Ct.dist*1e3,e=i-Math.min(1,Ct.pct)*t,n=e+t;Yi.position.x=e-Ri,sr.position.x=n-Ri,Yi.visible=Math.abs(Yi.position.x-Bt.x)<300,sr.visible=Math.abs(sr.position.x-Bt.x)<300}else Ct.viaje&&Ct._a!=null?(Yi.position.x=Ct._a-Ri,Yi.visible=Math.abs(Yi.position.x-Bt.x)<300,sr.visible=!1):Yi.visible=sr.visible=!1}function Iv(){Sn=new zl({antialias:!0,powerPreference:"high-performance"}),Sn.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),Sn.shadowMap.enabled=!0,Sn.shadowMap.type=qa,Sn.outputColorSpace=Oe,Sn.domElement.style.cssText="display:block;width:100%;height:100%",Je=new Dr,ze=new mn(30,1,.5,700),Yh=new eo(15266040,10134421,1.7),Mn=new so(16777215,2.3),Mn.castShadow=!0,Mn.shadow.mapSize.set(1024,1024),Object.assign(Mn.shadow.camera,{left:-45,right:45,top:45,bottom:-45,near:1,far:160}),Mn.shadow.bias=-6e-4,Je.add(Yh,Mn,Mn.target),Ji=new At({vertexColors:!0}),Kd=new xe({map:Jh(255,30,20),transparent:!0,depthWrite:!1,blending:Si}),rc=new xe({map:Jh(255,240,190),transparent:!0,depthWrite:!1,blending:Si,opacity:.8}),lr=new xe({color:5901581}),To=new xe({color:16722458}),ru=new xe({color:14277071}),ou=new xe({color:9079424}),Ql=new Re(1,1).rotateX(-Math.PI/2),yn=new _e,Je.add(yn),Sv(),Lv(),Bt={...wo("hatch",16053490),dir:1,z:$i[1],x:40,v:0,v0:15,a:0,frena:0,zLane:$i[1]},gs=new st(new qs(.55,1.1,4).rotateX(Math.PI),new xe({color:3770341})),gs.position.y=3.4,Bt.g.add(gs),Qd(),jh=Ct.nivel+Ct.zona+Ct.pico+Ct.metrobus,ec(),sp(0,!0)}function ql(){if(!He)return;let i=He.clientWidth,t=He.clientHeight;!i||!t||(Sn.setSize(i,t,!1),ze.aspect=i/t,ze.fov=Fe==="atras"||Fe==="propia"?ze.aspect<1?62:48:ze.aspect<1?46:ze.aspect>1.8?21:27,ze.updateProjectionMatrix())}var Eo=0,Vl=0,Bh=0,Pv=0;function rp(i){if(Zh=requestAnimationFrame(rp),document.hidden){Eo=i;return}let t=Math.min(.05,Eo?(i-Eo)/1e3:.016);if(Eo=i,Zt&&Zt.listo&&Ct.pos)dy(t),Ai(t);else{let e=Math.ceil(t/.02);for(let n=0;n<e;n++)Tv(t/e);Cv(),Dv(t),sp(t)}Sn.render(Je,ze),Vl+=t,Bh++,Vl>2&&(Bh/Vl<28&&Sn.shadowMap.enabled&&++Pv>1&&(Sn.shadowMap.enabled=!1,Je.traverse(n=>{n.material&&(n.material.needsUpdate=!0)})),Vl=0,Bh=0)}var zh=null;function op(i){zh||(zh=Jh(255,255,255));let t=new _e;t.visible=!1,t.userData.fases=[];let e=new Gt(.28,.12,.28),n=new Re(1.6,1.6).rotateX(-Math.PI/2),s=new oe,r=new ae;for(let o=0;o<3;o++){let a=i.filter(f=>f.f===o);if(!a.length){t.userData.fases.push(null);continue}let l=new xe({color:16777215}),c=new xe({map:zh,transparent:!0,depthWrite:!1,blending:Si}),h=new Le(e,l,a.length),u=new Le(n,c,a.length);a.forEach((f,d)=>{s.makeTranslation(f.x,(f.y||0)+.08,f.z),h.setMatrixAt(d,s),s.makeTranslation(f.x,(f.y||0)+.1,f.z),u.setMatrixAt(d,s),r.set(f.c),h.setColorAt(d,r),u.setColorAt(d,r)}),u.renderOrder=3,t.add(h,u),t.userData.fases.push({mb:l,mh:c})}return t}function ap(i,t){if(!i||(i.visible=!!Ct.noche,!Ct.noche))return;let e=Math.floor(t*7)%3;i.userData.fases.forEach((n,s)=>{if(!n)return;let r=s===e,o=r?1:.18;n.mb.color.setScalar(o),n.mh.opacity=r?.95:.12})}var Zi={carril:16052710,orilla:3134407,centro:16757504,metrobus:16764723};function lp(){return we([Kt(12,2.6,2.5,0,1.75,0,2061280),Kt(11.2,1,2.52,-.2,2.25,0,1520207),Kt(12,.25,2.54,0,1,0,16777215),Kt(3.4,.4,1.6,-.5,3.25,0,1727672),Kt(5.6,.08,.08,-2.8,4.6,.45,2763306).rotateZ(0),Kt(5.6,.08,.08,-2.8,4.6,-.45,2763306),fn(-3.8,1.2,.5),fn(-3.8,-1.2,.5),fn(3.8,1.2,.5),fn(3.8,-1.2,.5)])}function cp(){return we([Kt(8.6,2.8,2.55,-4.6,1.75,0,12986408),Kt(8.6,2.8,2.55,4.6,1.75,0,12986408),Kt(.6,2.4,2.3,0,1.65,0,5903380),Kt(7.8,1,2.57,-4.6,2.25,0,2241087),Kt(7.8,1,2.57,4.6,2.25,0,2241087),Kt(17.8,.2,2.58,0,1,0,15921906),fn(-7.4,1.2,.5),fn(-7.4,-1.2,.5),fn(-2,1.2,.5),fn(-2,-1.2,.5),fn(7.4,1.2,.5),fn(7.4,-1.2,.5)])}function nc(i,t,e){let n=new oe,s=new Xe,r=new N,o=new N(1,1,1),a=new N(0,1,0),l=0;for(let c of t){if(l>=i.instanceMatrix.count)break;r.set(c.x,c.y,c.z),s.setFromAxisAngle(a,c.r),i.setMatrixAt(l++,n.compose(r,s,o))}i.count=l,i.instanceMatrix.needsUpdate=!0}function zd(i,t,e,n,s,r,o,a,l){i.t=(i.t||Math.random()*40)+t;let c=i.cum[i.cum.length-1],h=i.periodo*e,u=Math.max(h,c+n+60);for(let f of[1,-1]){let d=(i.t+(f<0?i.periodo/2:0))*e%u;for(let p=0;p*h<u&&p<30;p++){let M=(d+p*h)%u-30;for(let g=0;g<s;g++){let m=M-g*r;if(m<0||m>c)continue;f<0&&(m=c-m);let S=Ee(i,m),v=S.dx*f,_=S.dz*f,b=o;l.push({x:S.x-_*b,y:a,z:S.z+v*b,r:en(v,_)})}}}}var rn=null;function hp(){return we([Kt(14.6,3.1,2.8,0,1.95,0,15759898),Kt(13.4,.95,2.84,0,2.45,0,2241087),Kt(14.6,.25,2.82,0,1,0,15921902),Kt(14,.25,2.4,0,3.6,0,13223613),Zn(new he(.4,.4,2.4,8).rotateX(Math.PI/2).translate(-5.2,.4,0),2236962),Zn(new he(.4,.4,2.4,8).rotateX(Math.PI/2).translate(5.2,.4,0),2236962)])}function Lv(){let i=new _e;i.visible=!1,yn.add(i);let t=vn[0]*De,e=vn.length*De,n=t+e/2,s=new _e;s.add(new st(new Re(e,3.6).rotateX(-Math.PI/2).translate(n,.05,0),new At({color:7037528})));let r=[-.72,.72].map(g=>new Gt(e,.12,.1).translate(n,.15,g));s.add(new st(we(r),new At({color:10133670}))),i.add(s);let o=new _e,a=[];a.push(new Gt(e,1.2,4.4).translate(n,7.4,0));for(let g=t;g<t+e;g+=25)a.push(new Gt(1.2,6.8,1.6).translate(g,3.4,0));let l=new st(we(a),new At({color:12170925}));l.castShadow=l.receiveShadow=!0,o.add(l),i.add(o);let c=new Le(hp(),Ji,120);c.castShadow=!0,c.count=0,Je.add(c);let h=new Le(lp(),Ji,40);h.castShadow=!0,h.count=0,Je.add(h);let u=[];for(let g of[1,-1])for(let m of[Yn+.15,4.35])u.push(new Re(e,.25).rotateX(-Math.PI/2).translate(n,.03,g*m));for(let g of[1,-1])for(let m of vn)for(let S=0;S<De;S+=3)u.push(new Gt(1.4,.18,.35).translate(m*De+S,.09,g*4.35));let f=new st(we(u.map(cu)),new At({color:15909376}));f.visible=!1,yn.add(f);let d=new Le(cp(),Ji,30);d.castShadow=!0,d.count=0,Je.add(d);let p=[];for(let g of[1,-1])for(let m of vn)for(let S=0;S<De;S+=4){let v=m*De+S,_=Math.floor(S/4)%3;rr.some(b=>Math.abs(S-b)<9)||p.push({x:v,z:g*4.35,c:Zi.carril,f:_},{x:v,z:g*7.85,c:Zi.carril,f:_}),p.push({x:v,z:g*(Ce-.35),c:Zi.orilla,f:_},{x:v,z:g*(Yn+.15),c:Zi.centro,f:_})}let M=op(p);yn.add(M),rn={g:i,via:s,vd:o,tren:c,trole:h,mbl:f,mbus:d,luces:M,t:0}}function Dv(i){if(!rn)return;ap(rn.luces,On),rn.mbl.visible=!!Ct.metrobus;{let M=[];if(Ct.metrobus)for(let S of[1,-1]){let v=(rn.t+(S<0?20:0))*11%440;for(let _=-2;_<=2;_++){let b=Bt.x+S*(v+_*440-120);Math.abs(b-Bt.x)<260&&M.push({x:b,y:0,z:S*$i[0],r:S>0?0:Math.PI})}}nc(rn.mbus,M)}let t=!Ct.metroSint&&!Ct.metro8&&Ct.troleElev;{let M=[];if(t)for(let S of[1,-1]){let v=(rn.t+(S<0?15:0))*12%360;for(let _=-2;_<=2;_++){let b=Bt.x+S*(v+_*360-150);Math.abs(b-Bt.x)<280&&M.push({x:b,y:8,z:S*1.1,r:S>0?0:Math.PI})}}nc(rn.trole,M)}let e=Ct.metroSint||(Ct.metro8?"s":null)||(t?"e":null);rn.g.visible=!!e,rn.via.visible=e==="s",rn.vd.visible=e==="e",$h&&($h.visible=e!=="s");let n=rn.tren;if(n.visible=!!e&&!(Zt&&Zt.listo&&Ct.pos),!e||t){n.count=0,rn.t+=i;return}rn.t+=i;let s=16,r=Ct.metro8?6:9,o=r*15.3,a=Ct.metro8?8:60,l=e==="e"?8:.15,c=new oe,h=new Xe,u=new N,f=new N(1,1,1),d=0,p=520;for(let M of[1,-1]){let g=(rn.t+(M<0?a/2:0))*s,m=a*s;for(let S=-Math.ceil(p/m)-1;S<=Math.ceil(p/m)+1;S++){let v=g%m+S*m-p/2;if(!(a>=30&&S!==0))for(let _=0;_<r&&d<n.instanceMatrix.count;_++){let b=Bt.x+M*(v-_*15.3);Math.abs(b-Bt.x)>300||(h.setFromAxisAngle(new N(0,1,0),M>0?0:Math.PI),u.set(b,l,(M>0,0)),n.setMatrixAt(d++,c.compose(u,h,f)))}}}n.count=d,n.instanceMatrix.needsUpdate=!0}var Zt=null,up=110540,Hd={motorway:20,trunk:18,primary:15,secondary:12,tertiary:10,unclassified:8,residential:7,living_street:6,service:4.5,link:7},Wl={motorway:.06,trunk:.058,primary:.055,secondary:.05,tertiary:.045,link:.044,unclassified:.04,residential:.035,living_street:.033,service:.03};function Ue(i,t,e){return[(e-i.lon)*111320*Math.cos(i.lat*Math.PI/180),-(t-i.lat)*up]}function cu(i){i=i.index?i.toNonIndexed():i;for(let t of Object.keys(i.attributes))t!=="position"&&t!=="color"&&i.deleteAttribute(t);return i}function Dn(i,t,e,n){let s=t/2;for(let r=1;r<i.length;r++){let[o,a]=i[r-1],[l,c]=i[r],h=l-o,u=c-a,f=Math.hypot(h,u);if(f<.05)continue;let d=-u/f*s,p=h/f*s,M=new Te;M.setAttribute("position",new ne([o+d,e,a+p,l+d,e,c+p,o-d,e,a-p,o-d,e,a-p,l+d,e,c+p,l-d,e,c-p],3)),n.push(M)}for(let r=0;r<i.length;r++)n.push(cu(new Xs(s,10).rotateX(-Math.PI/2).translate(i[r][0],e,i[r][1])))}function bo(i){let t=[0];for(let e=1;e<i.length;e++)t.push(t[e-1]+Math.hypot(i[e][0]-i[e-1][0],i[e][1]-i[e-1][1]));return t}function Ee(i,t){let e=i.p,n=i.cum;t=Math.max(0,Math.min(n[n.length-1],t));let s=1;for(;s<n.length-1&&n[s]<t;)s++;let r=(t-n[s-1])/Math.max(1e-6,n[s]-n[s-1]),o=e[s][0]-e[s-1][0],a=e[s][1]-e[s-1][1],l=Math.hypot(o,a)||1;return{x:e[s-1][0]+o*r,z:e[s-1][1]+a*r,dx:o/l,dz:a/l}}var en=(i,t)=>Math.atan2(-t,i),Hh={};function Nv(i){if(Hh[i])return Hh[i];let t=document.createElement("canvas"),e=t.getContext("2d");e.font="bold 44px Arial",t.width=Math.min(1024,Math.ceil(e.measureText(i).width)+28),t.height=64,e.font="bold 44px Arial",e.textBaseline="middle",e.lineJoin="round",e.lineWidth=9,e.strokeStyle="rgba(20,20,24,.85)",e.strokeText(i,14,34),e.fillStyle="#fff",e.fillText(i,14,34);let n=new En(t);return n.colorSpace=Oe,n.anisotropy=4,Hh[i]={mat:new xe({map:n,transparent:!0,depthWrite:!1}),ar:t.width/t.height}}function Ro(i){let t=document.createElement("canvas"),e=t.getContext("2d");e.font="bold 56px Arial";let n=Math.ceil(e.measureText(i).width)+56;t.width=n,t.height=96,e.font="bold 56px Arial",e.fillStyle="rgba(0,0,0,.25)",e.beginPath(),e.roundRect(6,10,n-8,84,22),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.roundRect(2,4,n-8,84,22),e.fill(),e.fillStyle="#1d1d1b",e.textBaseline="middle",e.fillText(i,26,48);let s=new En(t);s.colorSpace=Oe;let r=new Bi(new yi({map:s,depthTest:!1}));return r.scale.set(n/96*5.5,5.5,1),r.renderOrder=5,r}var Gh={};function Uv(i){if(Gh[i])return Gh[i];let t=document.createElement("canvas"),e=t.getContext("2d"),n="bold 64px Arial";e.font=n;let s=Math.min(1400,Math.ceil(e.measureText(i).width)+90),r=120,o=196;t.width=s,t.height=o;let a=[Math.round(s*.1),o-4],l=Math.round(s*.16),c=Math.round(s*.16)+Math.min(70,s*.16),h=f=>{e.beginPath(),e.roundRect(f,f,s-f*2,r-f*2,14-f/2),e.fill()};e.fillStyle="#111",e.beginPath(),e.moveTo(l-9,r-12),e.lineTo(a[0],a[1]),e.lineTo(c+9,r-12),e.closePath(),e.fill(),h(0),e.fillStyle="#fff",e.beginPath(),e.moveTo(l,r-14),e.lineTo(a[0]+2,a[1]-13),e.lineTo(c,r-14),e.closePath(),e.fill(),h(9),e.fillStyle="#fff",e.fillRect(l+1,r-16,c-l-2,10),e.fillStyle="#111",e.font=n,e.textBaseline="middle",e.textAlign="center",e.fillText(i,s/2,61,s-60);let u=new En(t);return u.colorSpace=Oe,u.anisotropy=4,Gh[i]={t:u,ar:s/o,cx:a[0]/s,cy:4/o}}function Fv(i){let e=new Map,n=[],s=[];i.forEach((o,a)=>{if(!(!o.nombre||o.tipo==="service"))for(let l=1;l<o.p.length;l++){let[c,h]=o.p[l-1],[u,f]=o.p[l],d={ci:a,x1:c,z1:h,x2:u,z2:f};s.push(d);for(let p=Math.floor(Math.min(c,u)/40);p<=Math.floor(Math.max(c,u)/40);p++)for(let M=Math.floor(Math.min(h,f)/40);M<=Math.floor(Math.max(h,f)/40);M++){let g=p+","+M;(e.get(g)||e.set(g,[]).get(g)).push(d)}}});let r=new Set;for(let[o,a]of e)for(let l=0;l<a.length;l++)for(let c=l+1;c<a.length;c++){let h=a[l],u=a[c],f=i[h.ci].nombre,d=i[u.ci].nombre;if(h.ci===u.ci||f===d)continue;let p=h.x2-h.x1,M=h.z2-h.z1,g=u.x2-u.x1,m=u.z2-u.z1,S=p*m-M*g;if(Math.abs(S)<1e-6)continue;let v=((u.x1-h.x1)*m-(u.z1-h.z1)*g)/S,_=((u.x1-h.x1)*M-(u.z1-h.z1)*p)/S;if(v<-.02||v>1.02||_<-.02||_>1.02)continue;let b=h.x1+p*v,E=h.z1+M*v,x=[f,d].sort().join("|")+"|"+Math.round(b/30)+","+Math.round(E/30);if(r.has(x))continue;r.add(x);let y=Math.hypot(p,M)||1,A=Math.hypot(g,m)||1;n.push({x:b,z:E,a:f,b:d,da:[p/y,M/y],db:[g/A,m/A],wa:i[h.ci].w,wb:i[u.ci].w})}return n}function Ov(i,t,e,n){let s=i.filter(v=>!v.elev&&e[0].test(Bn(v.nombre))),r=i.filter(v=>!v.elev&&e[1].test(Bn(v.nombre)));if(!s.length||!r.length)return null;let o=null;for(let v of s)for(let _ of r)for(let[b,E]of v.p){let x=Ze(_,b,E);(!o||x.d<o.d)&&(o={d:x.d,x:(b+x.x)/2,z:(E+x.z)/2})}if(!o||o.d>160)return null;let a=i.filter(v=>v.glorieta&&v.p.some(([_,b])=>Math.hypot(_-o.x,b-o.z)<160)),l=o.x,c=o.z,h=28,u=10;if(a.length){let v=a.flatMap(_=>_.p);l=v.reduce((_,b)=>_+b[0],0)/v.length,c=v.reduce((_,b)=>_+b[1],0)/v.length,h=v.reduce((_,b)=>_+Math.hypot(b[0]-l,b[1]-c),0)/v.length,u=Math.max(...a.map(_=>_.w))}else{let v=(x,y,A)=>Ze(x,y,A),_=null,b=null;for(let x of s){let y=v(x,o.x,o.z);(!_||y.d<_.d)&&(_=y)}for(let x of r){let y=v(x,o.x,o.z);(!b||y.d<b.d)&&(b=y)}let E=_.dx*b.dz-_.dz*b.dx;if(Math.abs(E)>.2){let x=((b.x-_.x)*b.dz-(b.z-_.z)*b.dx)/E,y=_.x+_.dx*x,A=_.z+_.dz*x;Math.hypot(y-o.x,A-o.z)<90&&(l=y,c=A)}}let f=Math.max(8,h-u/2-.6);if(f>90)return null;let d=new _e;d.position.set(l,0,c),t.add(d);let p=v=>new At({color:v}),M=new st(new he(f,f,.3,48),p(13154722));M.position.y=.15,M.receiveShadow=!0,d.add(M);let g=new st(new he(f+.25,f+.25,.32,48,1,!0),p(14725660));g.position.y=.16,d.add(g);for(let v=0;v<4;v++){let _=v*Math.PI/2+.22,b=_+Math.PI/2-.44,E=f*.32,x=f-1.6,y=new ni;y.moveTo(Math.cos(_)*E,Math.sin(_)*E);for(let w=0;w<=12;w++){let I=_+(b-_)*w/12;y.lineTo(Math.cos(I)*x,Math.sin(I)*x)}y.lineTo(Math.cos(b)*E,Math.sin(b)*E);let A=new st(new as(y,{depth:.35,bevelEnabled:!1}).rotateX(-Math.PI/2),[p(5214010),p(12988202)]);A.position.y=.3,A.receiveShadow=!0,d.add(A);for(let w=0;w<4;w++){let I=_+(b-_)*(w+.5)/4,L=E+(x-E)*(.35+.45*((w*7+v)%3)/2),U=new _e;U.position.set(Math.cos(I)*L,.6,-Math.sin(I)*L),d.add(U);let P=new st(new he(.18,.26,6.5,6),p(8020552));P.position.y=3.25,U.add(P);for(let G=0;G<6;G++){let V=new st(new qs(.45,3.2,4),p(4165436));V.position.set(Math.cos(G)*1.1,6.4,Math.sin(G)*1.1),V.rotation.set(Math.sin(G)*1.2,0,-Math.cos(G)*1.2),U.add(V)}}}for(let v=0;v<8;v++){let _=v*Math.PI/4,b=new st(new he(.08,.1,5,6),p(11549230));b.position.set(Math.cos(_)*(f-.8),2.8,Math.sin(_)*(f-.8)),d.add(b);let E=new st(new Pn(.28,8,6),new xe({color:16773570}));E.position.set(Math.cos(_)*(f-.8),5.35,Math.sin(_)*(f-.8)),d.add(E)}let m=new st(new he(f*.3,f*.3,.45,32),p(12036757));m.position.y=.22,d.add(m);let S=Ro("\u{1F4CD} "+n);return S.position.set(0,9,0),d.add(S),{x:l,z:c,r:f+1}}var vo=null;function Bv(i,t){let e=i.filter(u=>!u.elev&&/circuito interior|circuito bicentenario/.test(Bn(u.nombre+" "+(u.ref||""))));if(!e.length)return{vias:0};let n=[],s=e.filter(u=>u.oneway);s.forEach((u,f)=>{let d=u.cum[u.cum.length-1],p=[],M=()=>{p.length>1?n.push(p.splice(0)):p.length=0};for(let g=0;g<=d;g+=4){let m=Ee(u,g),S=null;if(s.forEach((E,x)=>{if(x===f)return;let y=Ze(E,m.x,m.z),A=y.d-u.w/2-E.w/2;A<-.5||A>6||y.dx*m.dx+y.dz*m.dz>-.6||(!S||y.d<S.q.d)&&(S={q:y,ib:x})}),!S||S.ib<f){M();continue}let v=(S.q.x-m.x)/(S.q.d||1),_=(S.q.z-m.z)/(S.q.d||1),b=u.w/2+Math.max(0,S.q.d-u.w/2-s[S.ib].w/2)/2;p.push([m.x+v*b,m.z+_*b])}M()});for(let u of e.filter(f=>!f.oneway&&f.w>=12)){let f=u.cum[u.cum.length-1],d=[];for(let p=0;p<=f;p+=4){let M=Ee(u,p);d.push([M.x,M.z])}n.push(d)}if(!n.length)return{vias:e.length,uno:s.length,lineas:0};vo||(vo=cr(64,64,(u,f,d)=>{u.clearRect(0,0,f,d),u.fillStyle="#f2c200",u.fillRect(4,0,20,d),u.fillRect(36,0,20,d),u.fillStyle="#c99c00",u.fillRect(4,0,4,d),u.fillRect(36,0,4,d)}),vo.wrapS=vo.wrapT=jn);let r=[],o=[],a=[],l=(u,f,d,p,M)=>u.push(f[0],p,f[1],d[0],p,d[1],f[0],M,f[1],f[0],M,f[1],d[0],p,d[1],d[0],M,d[1]);for(let u of n){let f=0;for(let d=1;d<u.length;d++){let p=u[d-1],M=u[d],g=Math.hypot(M[0]-p[0],M[1]-p[1]);if(g<.2||g>12)continue;let m=-(M[1]-p[1])/g*.3,S=(M[0]-p[0])/g*.3;for(let b of[1,-1])l(r,[p[0]+m*b,p[1]+S*b],[M[0]+m*b,M[1]+S*b],0,.85);r.push(p[0]+m,.85,p[1]+S,M[0]+m,.85,M[1]+S,p[0]-m,.85,p[1]-S,p[0]-m,.85,p[1]-S,M[0]+m,.85,M[1]+S,M[0]-m,.85,M[1]-S),l(o,p,M,.85,2);let v=f/.9,_=(f+g)/.9;a.push(v,0,_,0,v,1,v,1,_,0,_,1),f+=g}}let c=new Te;c.setAttribute("position",new ne(r,3)),c.computeVertexNormals(),t.add(new st(c,new At({color:3882304,side:ye})));let h=new Te;return h.setAttribute("position",new ne(o,3)),h.setAttribute("uv",new ne(a,2)),h.computeVertexNormals(),t.add(new st(h,new At({map:vo,transparent:!0,alphaTest:.4,side:ye}))),{vias:e.length,lineas:n.length,pts:n.reduce((u,f)=>u+f.length,0)}}function zv(i,t,e){let n=i.filter(l=>!l.elev&&l.oneway&&/churubusco/.test(Bn(l.nombre+" "+(l.ref||""))));if(n.length<2)return;let s=[],r=[],o=(l,c,h,u,f,d)=>l.push(c[0],d,c[1],h[0],d,h[1],u[0],d,u[1],u[0],d,u[1],h[0],d,h[1],f[0],d,f[1]);n.forEach((l,c)=>{let h=l.cum[l.cum.length-1],u=null;for(let f=0;f<=h;f+=5){let d=Ee(l,f),p=null;if(n.forEach((b,E)=>{if(E===c)return;let x=Ze(b,d.x,d.z),y=x.d-l.w/2-b.w/2;y<2||y>30||x.dx*d.dx+x.dz*d.dz<.75||(!p||x.d<p.q.d)&&(p={q:x,B:b})}),!p){u=null;continue}let M=(p.q.x-d.x)/p.q.d,g=(p.q.z-d.z)/p.q.d,m=p.q.d-l.w/2-p.B.w/2,S=[d.x+M*(l.w/2+.3),d.z+g*(l.w/2+.3)],v=[d.x+M*(l.w/2+.3+(m-.6)/2),d.z+g*(l.w/2+.3+(m-.6)/2)],_={ea:S,m:v,vx:M,vz:g,hw:(m-.6)/2};if(u){o(s,u.ea,S,u.m,v,.18);let b=(E,x)=>[E.ea[0]-E.vx*x,E.ea[1]-E.vz*x];if(o(r,b(u,.3),b(_,.3),u.ea,_.ea,.2),Math.round(f/5)%2===0&&_.hw>1.4){let E=.25+Tn("ch"+c+f)*.6,x=S[0]+(v[0]-S[0])*E,y=S[1]+(v[1]-S[1])*E;e.push([x,y,1.1+Tn("cs"+f+c)*.7])}}u=_}});let a=(l,c)=>{if(!l.length)return;let h=new Te;h.setAttribute("position",new ne(l,3)),h.computeVertexNormals();let u=new st(h,new At({color:c,side:ye}));u.receiveShadow=!0,t.add(u)};a(s,7315527),a(r,14725660)}function or(i,t,e){let n=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){let[o,a]=e[s],[l,c]=e[r];a>t!=c>t&&i<(l-o)*(t-a)/(c-a||1e-9)+o&&(n=!n)}return n}function Hv(i){let t=i.slice().sort((r,o)=>r[0]-o[0]||r[1]-o[1]),e=(r,o,a)=>(o[0]-r[0])*(a[1]-r[1])-(o[1]-r[1])*(a[0]-r[0]),n=[],s=[];for(let r of t){for(;n.length>=2&&e(n[n.length-2],n[n.length-1],r)<=0;)n.pop();n.push(r)}for(let r of t.slice().reverse()){for(;s.length>=2&&e(s[s.length-2],s[s.length-1],r)<=0;)s.pop();s.push(r)}return n.slice(0,-1).concat(s.slice(0,-1))}function kh(i,t){let e=i.length,n=0,s=0;for(let[o,a]of i)n+=o,s+=a;n/=e,s/=e;let r=i.map((o,a)=>{let l=i[(a+1)%e],c=l[0]-o[0],h=l[1]-o[1],u=Math.hypot(c,h)||1,f=-h/u,d=c/u;(n-o[0])*f+(s-o[1])*d<0&&(f=-f,d=-d);let p=t[a];return{a:[o[0]+f*p,o[1]+d*p],d:[c/u,h/u]}});return r.map((o,a)=>{let l=r[(a+e-1)%e],c=l.d[0]*o.d[1]-l.d[1]*o.d[0];if(Math.abs(c)<1e-6)return o.a;let h=((o.a[0]-l.a[0])*o.d[1]-(o.a[1]-l.a[1])*o.d[0])/c;return[l.a[0]+l.d[0]*h,l.a[1]+l.d[1]*h]})}function Gv(i,t,e,n,s){let r=n.map(B=>i.filter(Y=>!Y.elev&&B.test(Bn(Y.nombre))));if(r.some(B=>!B.length))return null;let o=[];for(let B=0;B<3;B++)for(let Y=B+1;Y<3;Y++)for(let ft of r[B])for(let mt of r[Y])for(let $=1;$<ft.p.length;$++)for(let ut=1;ut<mt.p.length;ut++){let Et=Ki(ft.p[$-1],ft.p[$],mt.p[ut-1],mt.p[ut]);Et&&o.push([Et.x,Et.z])}if(o.length<3)return null;let a=Hv(o);if(a.length<3)return null;let l=0;for(let B=0;B<a.length;B++){let[Y,ft]=a[B],[mt,$]=a[(B+1)%a.length];l+=Y*$-mt*ft}if(l=Math.abs(l)/2,l<300||l>12e4)return null;let c=r.flat(),h=a.map((B,Y)=>{let ft=a[(Y+1)%a.length],mt=(B[0]+ft[0])/2,$=(B[1]+ft[1])/2,ut=null;for(let Et of c){let vt=Ze(Et,mt,$);(!ut||vt.d<ut.d)&&(ut={d:vt.d,c:Et})}return{o:(ut?ut.c.w/2:5)+2.8,c:ut&&ut.c}}),u=kh(a,h.map(B=>B.o)),f=new ni(u.map(([B,Y])=>new _t(B,-Y))),d=new st(new Kr(f).rotateX(-Math.PI/2),new At({color:7315020}));d.position.y=.06,d.receiveShadow=!0,t.add(d);let p=new At({color:3119736}),M=new At({color:8224120}),g=new At({color:4094517}),m=new At({color:14267164}),S=[],v=[],_=(B,Y,ft,mt,$,ut,Et,vt)=>{let bt=Y[0]-B[0],z=Y[1]-B[1],tt=Math.hypot(bt,z);if(tt<.5)return;let k=new st(new Gt(tt,mt,$),ut);k.position.set((B[0]+Y[0])/2+vt[0]*Et,ft+mt/2,(B[1]+Y[1])/2+vt[1]*Et),k.rotation.y=en(bt/tt,z/tt),k.castShadow=mt>.5,t.add(k)},b=0,E=0;for(let[B,Y]of u)b+=B,E+=Y;b/=u.length,E/=u.length,u.forEach((B,Y)=>{let ft=u[(Y+1)%u.length],mt=ft[0]-B[0],$=ft[1]-B[1],ut=Math.hypot(mt,$);if(ut<2)return;let Et=[mt/ut,$/ut],vt=[-Et[1],Et[0]];(b-B[0])*vt[0]+(E-B[1])*vt[1]<0&&(vt=[-vt[0],-vt[1]]);let bt=ut/2-1.6,z=ut/2+1.6,tt=k=>[B[0]+Et[0]*k,B[1]+Et[1]*k];_(B,ft,0,.2,.35,m,-.15,vt);for(let[k,it]of[[0,bt],[z,ut]]){_(tt(k),tt(it),.05,.5,.7,M,.9,vt),_(tt(k),tt(it),.55,.8,.85,g,.95,vt),_(tt(k),tt(it),.95,.07,.07,p,.25,vt),_(tt(k),tt(it),.25,.07,.07,p,.25,vt);for(let Q=k;Q<=it;Q+=2.2){let F=tt(Q);S.push([F[0]+vt[0]*.25,F[1]+vt[1]*.25])}}for(let k=6;k<ut-6;k+=13){let it=tt(k);v.push([it[0]-vt[0]*1.6,it[1]-vt[1]*1.6,en(Et[0],Et[1])])}});let x=new oe,y=new Xe,A=new N(0,1,0),w=new N(1,1,1);if(S.length){let B=new Le(new Gt(.09,1.05,.09).translate(0,.52,0),p,S.length);S.forEach(([Y,ft],mt)=>B.setMatrixAt(mt,x.makeTranslation(Y,0,ft))),t.add(B)}if(v.length){let B=new Le(new Gt(1.8,.14,.32).translate(0,.07,0),m,v.length);v.forEach(([Y,ft,mt],$)=>{y.setFromAxisAngle(A,mt),B.setMatrixAt($,x.compose(new N(Y,0,ft),y,w))}),t.add(B)}let I=0,L=[1,0];u.forEach((B,Y)=>{let ft=u[(Y+1)%u.length],mt=Math.hypot(ft[0]-B[0],ft[1]-B[1]);mt>I&&(I=mt,L=[(ft[0]-B[0])/mt,(ft[1]-B[1])/mt])});let U=26,P=14,G=[-L[1],L[0]],X=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([B,Y])=>[b+L[0]*B*U/2+G[0]*Y*P/2,E+L[1]*B*U/2+G[1]*Y*P/2]).every(([B,Y])=>or(B,Y,kh(u,u.map(()=>3))));if(X){let B=new _e;B.position.set(b,0,E),B.rotation.y=en(L[0],L[1]),t.add(B);let Y=new st(new Re(U,P).rotateX(-Math.PI/2),new At({color:5078938}));Y.position.y=.08,B.add(Y);let ft=new st(new Re(.15,P-1).rotateX(-Math.PI/2),new xe({color:16777215}));ft.position.y=.09,B.add(ft);let mt=cr(64,64,(vt,bt,z)=>{vt.strokeStyle="#2f8f62",vt.lineWidth=3;for(let tt=-64;tt<128;tt+=16)vt.beginPath(),vt.moveTo(tt,0),vt.lineTo(tt+64,64),vt.moveTo(tt+64,0),vt.lineTo(tt,64),vt.stroke()}),$=(vt,bt,z,tt)=>{let k=mt.clone();k.needsUpdate=!0,k.wrapS=k.wrapT=jn,k.repeat.set(vt/1.2,3.5/1.2);let it=new st(new Re(vt,3.5),new At({map:k,transparent:!0,alphaTest:.3,side:ye}));it.position.set(bt,1.75,z),it.rotation.y=tt,B.add(it)};$(U,0,-P/2,0),$(U,0,P/2,0),$(P,-U/2,0,Math.PI/2),$(P,U/2,0,Math.PI/2);let ut=cr(512,160,(vt,bt,z)=>{vt.fillStyle="#f0e6d6",vt.fillRect(0,0,bt,z);let tt=["#e2405b","#2bb3c0","#f2b01e","#6c4bd1","#36b36b","#ff7a2f"];for(let k=0;k<26;k++){vt.fillStyle=tt[k%tt.length],vt.beginPath();let it=k*47%bt,Q=20+k*37%120;vt.moveTo(it,Q);for(let F=0;F<5;F++)vt.lineTo(it+Math.cos(F*1.3+k)*50,Q+Math.sin(F*1.7+k)*35);vt.closePath(),vt.fill()}}),Et=new st(new Gt(10,2.6,.3),[M,M,M,M,new At({map:ut}),new At({map:ut})]);Et.position.set(-U/2-5,1.3,0),Et.rotation.y=Math.PI/2,B.add(Et)}let ct=kh(u,u.map(()=>2.5)),Z=0;for(let B=Math.min(...ct.map(Y=>Y[0]));B<Math.max(...ct.map(Y=>Y[0]));B+=8)for(let Y=Math.min(...ct.map(ft=>ft[1]));Y<Math.max(...ct.map(ft=>ft[1]));Y+=8){let ft=B+(Tn(s+"x"+Z)-.5)*5,mt=Y+(Tn(s+"z"+Z)-.5)*5;if(Z++,!!or(ft,mt,ct)){if(X){let $=(ft-b)*L[0]+(mt-E)*L[1],ut=(ft-b)*G[0]+(mt-E)*G[1];if(Math.abs($)<U/2+7&&Math.abs(ut)<P/2+3)continue}e.push([ft,mt,1.25+Tn(s+"e"+Z)*.8])}}return{poli:a.map(B=>B.slice()),x:b,z:E}}function kv(i,t){let e=[];for(let n of i){let s=n.cum[n.cum.length-1],r=[];for(let o=0;o<=s;o+=6){let a=Ee(n,o);if(!t(a.x,a.z)){r.push(null);continue}let l=null;for(let d of i){if(d===n)continue;let p=Ze(d,a.x,a.z);if(p.d<10||p.d>95||p.dx*a.dx+p.dz*a.dz>-.5)continue;let M=(p.x-a.x)/p.d,g=(p.z-a.z)/p.d;Math.abs(M*a.dx+g*a.dz)>.5||(!l||p.d<l.q.d)&&(l={q:p,B:d,vx:M,vz:g})}if(!l){r.push(null);continue}let c=[a.x+l.vx*(n.w/2+.7),a.z+l.vz*(n.w/2+.7)],h=[l.q.x-l.vx*(l.B.w/2+.7),l.q.z-l.vz*(l.B.w/2+.7)],u=[(c[0]+h[0])/2,(c[1]+h[1])/2],f=Math.hypot(u[0]-c[0],u[1]-c[1]);r.push(f>3?{ea:c,m:u,vx:l.vx,vz:l.vz,dx:a.dx,dz:a.dz,hw:f}:null)}e.push({A:n,S:r})}return e}var Vh=null;function Vv(){if(Vh)return Vh;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d");t.strokeStyle="#8d939a",t.lineWidth=5,t.strokeRect(2,2,60,60),t.lineWidth=3.5,t.beginPath(),t.moveTo(2,2),t.lineTo(62,62),t.moveTo(62,2),t.lineTo(2,62),t.stroke();let e=new En(i);return e.wrapS=e.wrapT=jn,e.colorSpace=Oe,Vh=e}function Wv(){let i=new _e,t=Vv(),e=(o,a)=>{let l=t.clone();return l.needsUpdate=!0,l.repeat.set(o,a),new At({map:l,transparent:!0,alphaTest:.35,side:ye})},n=new st(new he(.95,3.4,24,4,1,!0).rotateY(Math.PI/4),e(4,9));n.position.y=12,i.add(n);let s=new st(new he(.55,.95,11,4,1,!0).rotateY(Math.PI/4),e(4,5));s.position.y=29.5,i.add(s);let r=[];return[[23,6.2],[28,7.4],[33,6]].forEach(([o,a])=>{let l=new st(new Gt(a*2,.9,1.1),e(a*1.4,1));l.position.y=o,i.add(l);for(let c of[1,-1]){let h=new st(new he(.12,.12,2.2,6),new At({color:4016722}));h.position.set(c*(a-.4),o-1.5,0),i.add(h),r.push([c*(a-.4),o-2.6,0])}}),r.push([0,36,0]),i.userData.puntas=r,i}function Xv(){let i=new _e,t=h=>new At({color:h}),e=new st(new Xs(7,20).rotateX(-Math.PI/2),t(14268810));e.position.y=.04,e.receiveShadow=!0,i.add(e);let n=new st(new Gt(1.4,.15,1.4),t(3108822));n.position.set(-2.5,2.2,0),i.add(n);for(let[h,u]of[[-3.1,-.6],[-1.9,-.6],[-3.1,.6],[-1.9,.6]]){let f=new st(new he(.07,.07,2.3,6),t(15909166));f.position.set(h,1.15,u),i.add(f)}let s=new st(new Gt(.9,.08,2.8),t(15909166));s.position.set(-3.7,1.1,0),s.rotation.z=-.9,s.rotation.y=Math.PI/2,i.add(s);let r=new st(new Gt(3.2,.1,.9),t(14693419));r.position.set(-.6,1.2,0),r.rotation.z=-.62,i.add(r);let o=t(3108822);for(let h of[-1,1])for(let u of[-1,1]){let f=new st(new he(.07,.07,2.9,6),o);f.position.set(2.2+u*.5*0,1.4,h*1.6+u*.4),f.rotation.x=u*.16,i.add(f)}let a=new st(new he(.08,.08,3.6,6).rotateX(Math.PI/2),t(15909166));a.position.set(2.2,2.8,0),i.add(a);for(let h of[-.7,.7]){let u=new st(new Gt(.45,.06,.25),t(14693419));u.position.set(2.2,.6,h),i.add(u);for(let f of[-.18,.18]){let d=new st(new he(.015,.015,2.2,4),t(6710886));d.position.set(2.2,1.7,h+f),i.add(d)}}let l=new st(new Gt(3.2,.08,.3),t(3450963));l.position.set(.6,.5,3.4),l.rotation.z=.18,i.add(l);let c=new st(new he(.15,.2,.5,8),t(15909166));return c.position.set(.6,.25,3.4),i.add(c),i}function Gd(i,t,e,n,s){s=s||{via:/\bde las torres\b/,desde:/\bde las minas\b/,hasta:/\binsurgentes\b/,clave:"torres"};let r=i.filter(A=>!A.elev&&s.via.test(Bn(A.nombre))&&!/cerrada|cda\.?|privada|callejon|andador|retorno/.test(Bn(A.nombre))&&A.tipo!=="service");if(!r.length)return;let o=A=>{let w=[];for(let I of i)if(!I.elev&&A.test(Bn(I.nombre)))for(let L of r)for(let U=1;U<I.p.length;U++)for(let P=1;P<L.p.length;P++){let G=Ki(L.p[P-1],L.p[P],I.p[U-1],I.p[U]);G&&w.push([G.x,G.z])}return w.length?[w.reduce((I,L)=>I+L[0],0)/w.length,w.reduce((I,L)=>I+L[1],0)/w.length]:null},a=o(s.desde)||s.p1||null,l=o(s.hasta)||s.p2||null,c=(A,w)=>{if(!a||!l)return!0;let I=l[0]-a[0],L=l[1]-a[1],U=I*I+L*L||1,P=((A-a[0])*I+(w-a[1])*L)/U;return P>=-.03&&P<=1.03&&Math.abs((A-a[0])*L-(w-a[1])*I)/Math.sqrt(U)<350},h=r.filter(A=>A.oneway),u=[],f=[],d=[],p=[],M=(A,w,I,L,U,P)=>A.push(w[0],P,w[1],I[0],P,I[1],L[0],P,L[1],L[0],P,L[1],I[0],P,I[1],U[0],P,U[1]),g=(A,w,I,L)=>!I.some(([U,P])=>Math.hypot(U-A,P-w)<L),m=[],S=e.length,v=(A,w,I)=>{if(u=[],f=[],d=[],p=[],m=[],e.length=S,w==="camellon"){let L=!0;for(let{A:U,S:P}of kv(h,A)){if(!P.some(Boolean))continue;let G=I&&L||U.p[U.p.length-1][1]<U.p[0][1]||U.p[U.p.length-1][0]>U.p[0][0]&&Math.abs(U.p[U.p.length-1][1]-U.p[0][1])<1;L=!1;let V=0,X=-1e9,ct=-1e9;for(let Z=1;Z<P.length;Z++){let B=P[Z-1],Y=P[Z];if(!(!B||!Y)){if(V+=6,M(u,B.ea,Y.ea,B.m,Y.m,.03),G){let ft=(mt,$)=>[mt.m[0]+mt.vx*$,mt.m[1]+mt.vz*$];if(M(f,ft(B,-1.3),ft(Y,-1.3),ft(B,1.3),ft(Y,1.3),.05),V-X>270&&(X=V,d.push({x:B.m[0],z:B.m[1],nx:B.vx,nz:B.vz})),V-ct>380&&B.hw>11&&V-X>40){ct=V;let mt=Math.min(B.hw*.5,B.hw-8.5);m.push({x:B.m[0]-B.vx*mt,z:B.m[1]-B.vz*mt,r:en(B.dx,B.dz)})}if(Z%5===0){let mt=Z/5%2?1:-1,$=ft(B,mt*2.6);p.push([$[0],$[1],Math.atan2(-B.vx*mt,-B.vz*mt)])}}if(Z%2===0&&B.hw>4.5){let ft=.12+Tn("tr"+U.p[0][0]+Z)*Math.max(0,(B.hw-4)/B.hw-.12),mt=B.ea[0]+(B.m[0]-B.ea[0])*ft,$=B.ea[1]+(B.m[1]-B.ea[1])*ft;g(mt,$,d.map(ut=>[ut.x,ut.z]),7)&&g(mt,$,m.map(ut=>[ut.x,ut.z]),9)&&e.push([mt,$,.9+Tn("ta"+Z+U.p[0][1])*.7])}}}}}else{let L=A;for(let U of h.length>=2?h.filter((P,G)=>G%2===0):r){let P=U.cum[U.cum.length-1];for(let G=20;G<P;G+=270){let V=Ee(U,G);if(!L(V.x,V.z))continue;let X=-V.dz,ct=V.dx;d.push({x:V.x+X*(U.w/2+6),z:V.z+ct*(U.w/2+6),nx:X,nz:ct})}}}},_=()=>!0,b=h.length>=2?[[c,"camellon",!1],[c,"camellon",!0],[_,"camellon",!0],[c,"una",!1],[_,"una",!1]]:[[c,"una",!1],[_,"una",!1]];for(let[A,w,I]of b)if(v(A,w,I),d.length)break;let E=(A,w)=>{if(!A.length)return;let I=new Te;I.setAttribute("position",new ne(A,3)),I.computeVertexNormals();let L=new st(I,new At({color:w,side:ye}));L.receiveShadow=!0,t.add(L)};E(u,8367704),E(f,14208959);let x=[],y=null;for(let A of d){let w=Wv();w.position.set(A.x,0,A.z),w.rotation.y=en(A.nx,A.nz),t.add(w),w.updateMatrixWorld(!0);let I=w.userData.puntas.map(L=>new N(...L).applyMatrix4(w.matrixWorld));if(y&&y.pos.distanceTo(w.position)<420){let L=y.n[0]*A.nx+y.n[1]*A.nz<0;I.forEach((U,P)=>{let G=L&&P<6?P%2?P-1:P+1:P,V=y.P[G];for(let X=0;X<12;X++){let ct=X/12,Z=(X+1)/12,B=Y=>V.y+(U.y-V.y)*Y-4.5*4*Y*(1-Y);x.push(V.x+(U.x-V.x)*ct,B(ct),V.z+(U.z-V.z)*ct,V.x+(U.x-V.x)*Z,B(Z),V.z+(U.z-V.z)*Z)}})}y={P:I,pos:w.position.clone(),n:[A.nx,A.nz]}}if(x.length){let A=new Te;A.setAttribute("position",new ne(x,3)),t.add(new zr(A,new rs({color:2764339})))}for(let A of m){let w=Xv();w.position.set(A.x,0,A.z),w.rotation.y=A.r,t.add(w)}if(p.length){let A=p.length,w=new Le(new he(.09,.13,8,6).translate(0,4,0),new At({color:7172986}),A),I=new Le(new Gt(.08,.08,1.8).translate(0,7.9,.9),new At({color:7172986}),A),L=new Le(new Gt(.35,.16,.7).translate(0,7.8,1.7),new xe({color:16773570}),A),U=new oe,P=new Xe,G=new N(0,1,0),V=new N(1,1,1);p.forEach(([X,ct,Z],B)=>{P.setFromAxisAngle(G,Z),U.compose(new N(X,0,ct),P,V),w.setMatrixAt(B,U),I.setMatrixAt(B,U),L.setMatrixAt(B,U)}),t.add(w,I,L)}n&&(n[s.clave||"torres"]={n:d.length,juegos:m.length,lamp:p.length,tramo:!!(a&&l),j0:m[0]})}function qv(i,t,e,n){let s=i.filter(x=>!x.elev&&/\bde las minas\b/.test(Bn(x.nombre))),r=i.filter(x=>!x.elev&&/reforma pesquera/.test(Bn(x.nombre))),o=null;for(let x of s)for(let y of r)for(let A=1;A<x.p.length;A++)for(let w=1;w<y.p.length;w++){let I=Ki(x.p[A-1],x.p[A],y.p[w-1],y.p[w]);if(I){let L=Math.hypot(x.p[A][0]-x.p[A-1][0],x.p[A][1]-x.p[A-1][1])||1,U=Math.hypot(y.p[w][0]-y.p[w-1][0],y.p[w][1]-y.p[w-1][1])||1;o={x:I.x,z:I.z,ua:[(x.p[A][0]-x.p[A-1][0])/L,(x.p[A][1]-x.p[A-1][1])/L],ub:[(y.p[w][0]-y.p[w-1][0])/U,(y.p[w][1]-y.p[w-1][1])/U],wa:x.w,wb:y.w}}}if(!o)return null;let a=t.filter(x=>x.pts&&x.pts.length).map(x=>{let y=0,A=0;for(let[w,I]of x.pts){let[L,U]=Ue(e,w,I);y+=L,A+=U}return[y/x.pts.length,A/x.pts.length]}),l=22,c=17,h=null;for(let x of[1,-1])for(let y of[1,-1]){let A=[-o.ua[1]*x,o.ua[0]*x],w=o.wa/2+2.6+c/2,I=o.wb/2+2.6+l/2,L=o.x+A[0]*w+o.ua[0]*0,U=o.z+A[1]*w,P=(L-o.x)*o.ub[0]+(U-o.z)*o.ub[1]>=0?1:-1,G=o.x+A[0]*w+o.ub[0]*0+o.ua[0]*y*I,V=o.z+A[1]*w+o.ua[1]*y*I,X=a.filter(([ct,Z])=>Math.hypot(ct-G,Z-V)<15).length;(!h||X<h.n)&&(h={n:X,x:G,z:V,s1:x,s2:y,sb:P})}let u=new _e,f=13.5,d=new At({color:14701356}),p=new At({color:15502190}),M=new At({color:3886947}),g=new st(new Gt(l,4.2,c),d);g.position.y=2.1,g.castShadow=!0,u.add(g);let m=new st(new Gt(l,f-4.2,c),p);m.position.y=4.2+(f-4.2)/2,m.castShadow=!0,u.add(m);for(let x=6;x<f-1;x+=3.1)for(let y of[1,-1]){let A=new st(new Gt(l-4,1.1,.1),M);A.position.set(0,x,y*(c/2+.03)),u.add(A);let w=new st(new Gt(.1,1.1,c-4),M);w.position.set(y*(l/2+.03),x,0),u.add(w)}let S=new st(new Gt(l*.6,2.6,.12),new At({color:12376038,emissive:2241348}));S.position.set(0,1.5,-(c/2+.05)),u.add(S);let v=new st(new Gt(l+.2,.5,c+.2),new At({color:16163386}));v.position.y=4.3,u.add(v);let _=new st(new Gt(l*.55,3.2,.25),new At({color:16777215,emissive:2236962}));_.position.set(0,9.5,-(c/2+.15)),u.add(_);let b=new st(new Gt(l*.55+.5,3.7,.2),new At({color:2310298}));b.position.set(0,9.5,-(c/2+.05)),u.add(b);let E=Ro("\u{1F6D2} Mini Chedraui");return E.position.set(0,f+5,0),u.add(E),u.position.set(h.x,0,h.z),u.rotation.y=en(o.ua[0],o.ua[1])+(h.s1<0?Math.PI:0),n.add(u),{x:h.x,z:h.z,r:Math.max(l,c)/2+3}}var kd={lat:19.3622992,lon:-99.0569941},Yv=i=>/perif/i.test(i.nombre+" "+(i.ref||""));function Ze(i,t,e){let n=null;for(let s=1;s<i.p.length;s++){let[r,o]=i.p[s-1],[a,l]=i.p[s],c=a-r,h=l-o,u=c*c+h*h||1,f=Math.sqrt(u),d=Math.max(0,Math.min(1,((t-r)*c+(e-o)*h)/u)),p=r+c*d,M=o+h*d,g=Math.hypot(t-p,e-M);(!n||g<n.d)&&(n={d:g,s:i.cum[s-1]+f*d,x:p,z:M,dx:c/f,dz:h/f})}return n}function cr(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new En(s);return r.colorSpace=Oe,n&&(r.wrapS=r.wrapT=jn,r.repeat.set(n,n)),r.anisotropy=4,r}function Zv(i,t,e,n){let s={barco:null,sem:null},r=i.filter(_=>!_.elev&&Yv(_)),[o,a]=Ue(t,kd.lat,kd.lon);if(r.length&&Qv(r,i,t,e,n,[o,a]),Math.hypot(o,a)>2500)return s;let l=null;for(let _ of r){let b=Ze(_,o,a);(!l||b.d<l.q.d)&&(l={c:_,q:b})}if(!l||l.q.d>140){let _=null;for(let y of i){if(y.elev||y.w<9)continue;let A=Ze(y,o,a);(!_||A.d<_.q.d)&&(_={c:y,q:A})}let b=_&&_.q.d<200?_.q.dx:.17,E=_&&_.q.d<200?_.q.dz:-.98,x=E>0?-1:1;return s.barco={x:o,z:a,ux:b*x,uz:E*x},e.add(Vd(o,a,b*x,E*x)),s}let c=null;for(let _ of i)if(_.elev==="puente")for(let b of r)for(let E=1;E<_.p.length;E++)for(let x=1;x<b.p.length;x++){let y=Ki(b.p[x-1],b.p[x],_.p[E-1],_.p[E]);if(!y)continue;let A=Math.hypot(y.x-o,y.z-a);A<700&&(!c||A<c.d)&&(c={x:y.x,z:y.z,d:A})}let h=l.q.dx,u=l.q.dz;c?(c.x-o)*h+(c.z-a)*u<0&&(h=-h,u=-u):u>0&&(h=-h,u=-u),s.barco={x:o,z:a,ux:h,uz:u},e.add(Vd(o,a,h,u)),s.dbg=[];let f=l.c,d=1,p=null;for(let _ of r){let b=Ze(_,o,a);if(!(b.d>140))for(let E of _.oneway?[1]:[1,-1]){let x=b.dx*E,y=b.dz*E,A=(o-b.x)*y-(a-b.z)*x>0,w=!c||(c.x-b.x)*x+(c.z-b.z)*y>0;A&&w&&(!p||b.d<p.d)&&(p={cc:_,dd:E,d:b.d})}}p&&(f=p.cc,d=p.dd);let M=f.cum[f.cum.length-1],g=(_,b)=>{let E=Ee(f,Math.max(0,Math.min(M,_))),x=E.dx*d,y=E.dz*d,A=-y,w=x,I=new _e;return I.position.set(E.x+A*b,0,E.z+w*b),I.rotation.y=en(x,y),I},m=null;for(let _ of i)if(_.elev==="puente")for(let b=1;b<_.p.length;b++)for(let E=1;E<f.p.length;E++){let x=Ki(f.p[E-1],f.p[E],_.p[b-1],_.p[b]);if(!x)continue;let y=f.cum[E-1]+Math.hypot(x.x-f.p[E-1][0],x.z-f.p[E-1][1]);Math.hypot(x.x-o,x.z-a)<700&&(m==null||Math.abs(y-Ze(f,o,a).s)<Math.abs(m-Ze(f,o,a).s))&&(m=y)}if(m!=null){let _=Jv(Math.min(f.w*.75,10)),b=g(m-d*16,f.w/2+.9);b.add(_.g),e.add(b),s.sem=_;let E=g(m-d*40,f.w/2+1.25);E.add(Kv()),e.add(E),s.libres=[[b.position.x,b.position.z],[E.position.x,E.position.z]]}let S=Ze(f,o+h*50,a+u*50),v=g(S.s-d*4,-(f.w/2+1.2));return v.add(jv()),e.add(v),s.dbg.push(["let",v.position.x,v.position.z,m,d,f.nombre]),s}function Vd(i,t,e,n){let s=new _e,r=96,o=30,a=12,l=cr(64,64,(y,A,w)=>{y.fillStyle="#dcdcd7",y.fillRect(0,0,A,w),y.fillStyle="#b9bab4";for(let I=0;I<w;I+=8)y.fillRect(0,I,A,2)},.25),c=new ni([new _t(-r/2,0),new _t(r/2-12,0),new _t(r/2+7,a+1.5),new _t(-r/2-2,a)]),h=new st(new as(c,{depth:o,bevelEnabled:!1}).translate(0,0,-o/2),new At({map:l}));h.castShadow=!0,h.receiveShadow=!0,s.add(h);let u=cr(512,64,(y,A,w)=>{y.fillStyle="#f1efe8",y.fillRect(0,0,A,w);let I=["#e5533d","#2f9e6e","#3f6fd8","#e0a526","#8c4fd6","#1fb5c9"];for(let L=0;L<70;L++)y.fillStyle=I[L%I.length],y.beginPath(),y.ellipse(Math.random()*A,20+Math.random()*40,8+Math.random()*22,6+Math.random()*12,Math.random()*3,0,7),y.fill()});for(let y of[1,-1]){let A=new st(new Re(r-14,2.2),new At({map:u}));A.position.set(-6,1.1,y*(o/2+.05)),y<0&&(A.rotation.y=Math.PI),s.add(A)}let f=new At({color:15987695}),d=new At({color:4608606}),p=new st(new Gt(r*.42,8,o*.72),f);p.position.set(-r*.08,a+4,0),p.castShadow=!0,s.add(p);let M=new st(new Gt(r*.42+.1,1.6,o*.72+.1),d);M.position.set(-r*.08,a+5.2,0),s.add(M);let g=new st(new Gt(r*.2,7,o*.5),f);g.position.set(-r*.2,a+11.5,0),g.castShadow=!0,s.add(g);let m=new st(new Gt(r*.18,5,o*.6),f);m.position.set(-r*.42,a+2.5,0),s.add(m);let S=new At({color:10133670});for(let y of[1,-1]){let A=new st(new Gt(r,.1,.1),S);A.position.set(0,a+1.3,y*o/2),s.add(A)}let v=Math.floor(r/6)*2,_=new Le(new jr(.42,.13,6,14),new At({color:14165547}),v),b=new oe,E=0;for(let y of[1,-1])for(let A=-r/2+3;A<r/2-2&&E<v;A+=6)_.setMatrixAt(E++,b.makeTranslation(A,a+.85,y*(o/2+.08)));_.count=E,s.add(_);let x=Ro("\u26F4\uFE0F Barco Utop\xEDa");return x.position.set(0,a+20,0),s.add(x),s.position.set(i,0,t),s.rotation.y=en(e,n),s}function Jv(i){let t=new _e,e=new At({color:5988712}),n=new st(new he(.16,.2,6.6,8),e);n.position.y=3.3,n.castShadow=!0,t.add(n);let s=new st(new Gt(.14,.14,i),e);s.position.set(0,6.3,-i/2),t.add(s);let r=[],o=(a,l)=>{let c=new st(new Gt(.45,1.45,.55),new At({color:1842721}));c.position.set(0,l,a),t.add(c),[1769306,16756736,16722458].forEach((h,u)=>{let f=new st(new Pn(.17,10,8),new xe({color:2236962}));f.position.set(-.26,l-.46+u*.46,a),f.userData.col=h,t.add(f),(r[u]||=[]).push(f)})};return o(-i*.8,5.6),o(-.35,3.4),{g:t,luces:r}}function $v(i,t){let e=t%38,n=e<20?0:e<23?1:2;i.luces.forEach((s,r)=>s.forEach(o=>o.material.color.setHex(r===n?o.userData.col:2236962)))}function Kv(){let i=new _e,t=new At({color:6119784}),e=new st(new Gt(4.4,.14,1.9),new At({color:9146519}));e.position.set(0,2.6,.3),e.castShadow=!0,i.add(e);for(let a of[-2,2]){let l=new st(new Gt(.1,2.6,.1),t);l.position.set(a,1.3,1.1),i.add(l)}let n=new st(new Re(4.1,2.1),new At({color:12375268,transparent:!0,opacity:.45,side:ye}));n.position.set(0,1.35,1.12),i.add(n);let s=new st(new Gt(.18,1.9,1.3),new At({color:16185074,emissive:3355443}));s.position.set(2.15,1.25,.45),i.add(s);let r=new st(new Gt(2.6,.08,.45),t);r.position.set(-.3,.5,.8),i.add(r);let o=new st(new Gt(.06,.6,.6),new xe({color:1402304}));return o.position.set(-2.3,3.1,.3),i.add(o),i}function jv(){let i=new _e,t=cr(1100,470,(c,h,u)=>{c.fillStyle="#e4672a",c.fillRect(0,0,h,u),c.strokeStyle="#fff",c.lineWidth=10,c.strokeRect(16,16,h-32,u-32),c.fillStyle="#fff",c.textAlign="center",c.textBaseline="middle",c.font="bold 50px Arial",c.fillText("USE V\xCDAS ALTERNAS",h/2,70),c.font="bold 76px Arial",c.fillText("DOBLE SENTIDO",h/2,160),c.fillText("EJE 6 SUR",h/2,245),c.font="bold 66px Arial",c.fillText("DE 06:00 A 09:00 HRS",h/2,330),c.font="bold 40px Arial",c.fillText("www.circuitobicentenario.com.mx",h/2,415)}),e=6.6,n=e*470/1100,s=new st(new Re(e,n),new At({map:t}));s.rotation.y=-Math.PI/2,s.position.set(-.08,7.2,2.2),i.add(s);let r=new st(new Re(e,n),new At({color:9277329}));r.rotation.y=Math.PI/2,r.position.set(.08,7.2,2.2),i.add(r);let o=new At({color:7041143}),a=new st(new he(.2,.24,8.6,8),o);a.position.y=4.3,a.castShadow=!0,i.add(a);let l=new st(new Gt(.16,.16,4.4),o);return l.position.set(.2,8.2,1.9),i.add(l),i}function Qv(i,t,e,n,s,r){let o=i.filter(m=>m.oneway&&m.w>=6);if(o.length<2)return;let a=m=>{let S=[];for(let v of t)if(m.test(Bn(v.nombre+" "+(v.ref||""))))for(let _ of o)for(let b=1;b<v.p.length;b++)for(let E=1;E<_.p.length;E++){let x=Ki(_.p[E-1],_.p[E],v.p[b-1],v.p[b]);x&&S.push(x.z)}return S},l=a(/ermita/),c=a(/eje\s*5\b|leyes de reforma/),h=l.length?Math.max(...l):Ue(e,19.3475,-99.056)[1],u=c.length?Math.min(...c):Ue(e,19.3765,-99.056)[1];if(!(u<h))return;let f=[],d=[],p=[],M=(m,S,v,_,b,E)=>m.push(S[0],E,S[1],v[0],E,v[1],_[0],E,_[1],_[0],E,_[1],v[0],E,v[1],b[0],E,b[1]);for(let m of o){let S=m.cum[m.cum.length-1],v=[];for(let b=0;b<=S;b+=6){let E=Ee(m,b);if(E.z<u||E.z>h){v.push(null);continue}let x=null;for(let I of o){if(I===m)continue;let L=Ze(I,E.x,E.z);if(L.d<12||L.d>95||L.dx*E.dx+L.dz*E.dz>-.5)continue;let U=(L.x-E.x)/L.d,P=(L.z-E.z)/L.d;Math.abs(U*E.dx+P*E.dz)>.5||(!x||L.d<x.q.d)&&(x={q:L,B:I,vx:U,vz:P})}if(!x){v.push(null);continue}let y=[E.x+x.vx*(m.w/2+.7),E.z+x.vz*(m.w/2+.7)],A=[x.q.x-x.vx*(x.B.w/2+.7),x.q.z-x.vz*(x.B.w/2+.7)],w=[(y[0]+A[0])/2,(y[1]+A[1])/2];v.push(Math.hypot(A[0]-y[0],A[1]-y[1])>7?{ea:y,m:w,vx:x.vx,vz:x.vz,sv:b}:null)}let _=m.p[m.p.length-1][1]<m.p[0][1];for(let b=1;b<v.length;b++){let E=v[b-1],x=v[b];if(!(!E||!x)){if(M(f,E.ea,x.ea,E.m,x.m,.03),_){let y=(A,w)=>[A.m[0]+A.vx*w,A.m[1]+A.vz*w];M(d,y(E,-1.6),y(x,-1.6),y(E,1.6),y(x,1.6),.05),M(p,y(E,2),y(x,2),y(E,3.1),y(x,3.1),.05)}if(b%2===0){let y=Math.hypot(E.m[0]-E.ea[0],E.m[1]-E.ea[1]);if(y<6)continue;let A=.15+Tn("pq"+m.p[0][0]+b)*Math.max(0,(y-4.5)/y-.15),w=E.ea[0]+(E.m[0]-E.ea[0])*A,I=E.ea[1]+(E.m[1]-E.ea[1])*A;Math.hypot(w-r[0],I-r[1])>62&&s.push([w,I,.9+Tn("a"+b+m.p[0][1])*.6])}}}}let g=(m,S)=>{if(!m.length)return;let v=new Te;v.setAttribute("position",new ne(m,3)),v.computeVertexNormals();let _=new st(v,new At({color:S,side:ye}));_.receiveShadow=!0,n.add(_)};g(f,8367704),g(d,14275265),g(p,5935044)}var Bn=i=>String(i||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),Yl=/^(motorway|trunk|primary|secondary|tertiary|unclassified|residential|living_street)(_link)?$/;function Ki(i,t,e,n){let s=t[0]-i[0],r=t[1]-i[1],o=n[0]-e[0],a=n[1]-e[1],l=s*a-r*o;if(Math.abs(l)<1e-9)return null;let c=((e[0]-i[0])*a-(e[1]-i[1])*o)/l,h=((e[0]-i[0])*r-(e[1]-i[1])*s)/l;return c>=0&&c<=1&&h>=0&&h<=1?{x:i[0]+s*c,z:i[1]+r*c,t:c}:null}var Wd={lat:19.34597,lon:-99.0638};function Wh(i,t,e,n){let s=o=>{let a=1;for(;a<t.length-1&&t[a]<o;)a++;let l=(o-t[a-1])/(t[a]-t[a-1]||1);return[i[a-1][0]+(i[a][0]-i[a-1][0])*l,i[a-1][1]+(i[a][1]-i[a-1][1])*l]},r=[s(e)];for(let o=0;o<i.length;o++)t[o]>e+.05&&t[o]<n-.05&&r.push(i[o]);return r.push(s(n)),r}function ty(i,t){let[e,n]=Ue(t,Wd.lat,Wd.lon);if(Math.hypot(e,n)>3500)return;let s=d=>/perif|canal de garay/i.test((d.c.nombre||"")+" "+(d.c.ref||"")),r=i.filter(d=>/ermita/.test(Bn(d.c.nombre)));if(!r.length)return;let o=[];if(i.forEach((d,p)=>{if(!(!s(d)||!Yl.test(d.c.tipo||"")))for(let M=1;M<d.p.length;M++)for(let g of r)for(let m=1;m<g.p.length;m++){let S=Ki(d.p[M-1],d.p[M],g.p[m-1],g.p[m]);S&&Math.hypot(S.x-e,S.z-n)<650&&o.push({i:p,k:M,r:S})}}),!o.length||i.some(d=>s(d)&&d.c.puente&&d.p.some(p=>o.some(M=>Math.hypot(p[0]-M.r.x,p[1]-M.r.z)<250))))return;let a=d=>["motorway","trunk","primary","secondary","tertiary"].indexOf(String(d).replace("_link","")),l=o.map(d=>a(i[d.i].c.tipo)).filter(d=>d>=0);if(!l.length)return;let c=Math.min(...l),h=new Set,u=[];for(let d of o){let p=i[d.i];if(a(p.c.tipo)!==c||h.has(d.i))continue;let M=bo(p.p),g=M[M.length-1],m=M[d.k-1]+Math.hypot(d.r.x-p.p[d.k-1][0],d.r.z-p.p[d.k-1][1]),S=Math.max(0,m-75),v=Math.min(g,m+75);h.add(d.i),S>2&&u.push({c:p.c,p:Wh(p.p,M,0,S)}),u.push({c:{...p.c,puente:!0,capa:1},p:Wh(p.p,M,S,v)}),g-v>2&&u.push({c:p.c,p:Wh(p.p,M,v,g)})}let f=i.filter((d,p)=>!h.has(p));i.length=0,i.push(...f,...u)}function ey(i){let t=new Map,e=40,n=new Map;i.forEach((a,l)=>{if(!(a.c.puente||!Yl.test(a.c.tipo||"")))for(let c=1;c<a.p.length;c++){let h=a.p[c-1],u=a.p[c],f=[h,u,a.c.nombre||""];for(let d=Math.floor(Math.min(h[0],u[0])/e);d<=Math.floor(Math.max(h[0],u[0])/e);d++)for(let p=Math.floor(Math.min(h[1],u[1])/e);p<=Math.floor(Math.max(h[1],u[1])/e);p++){let M=d+","+p;(n.get(M)||n.set(M,[]).get(M)).push(f)}}});let s=a=>{for(let l=1;l<a.p.length;l++){let c=a.p[l-1],h=a.p[l];for(let u=Math.floor(Math.min(c[0],h[0])/e);u<=Math.floor(Math.max(c[0],h[0])/e);u++)for(let f=Math.floor(Math.min(c[1],h[1])/e);f<=Math.floor(Math.max(c[1],h[1])/e);f++)for(let d of n.get(u+","+f)||[])if(d[2]!==(a.c.nombre||"")&&Ki(c,h,d[0],d[1]))return!0}return!1},r=[];if(i.forEach((a,l)=>{if(!a.c.puente||!Yl.test(a.c.tipo||"")||!s(a))return;let c=6.2*Math.max(1,Math.min(3,a.c.capa||1));t.set(l,{elev:"puente",H:c,taperA:!1,taperB:!1}),r.push({x:a.p[0][0],z:a.p[0][1],H:c,i:l,fin:0},{x:a.p[a.p.length-1][0],z:a.p[a.p.length-1][1],H:c,i:l,fin:1})}),!r.length)return t;let o=a=>r.filter(l=>Math.hypot(l.x-a[0],l.z-a[1])<1.5);i.forEach((a,l)=>{if(t.has(l)||!Yl.test(a.c.tipo||""))return;let c=o(a.p[0]),h=o(a.p[a.p.length-1]);!c.length&&!h.length||(c.concat(h).forEach(u=>u.usado=!0),t.set(l,{elev:"rampa",hA:c.length?c[0].H:0,hB:h.length?h[0].H:0}))});for(let a of r)if(!a.usado){let l=t.get(a.i);a.fin===0?l.taperA=!0:l.taperB=!0}return t}function ar(i,t){if(!i||!i.elev)return 0;let e=i.cum[i.cum.length-1];if(i.elev==="puente"){let s=1,r=Math.min(45,e/2);return i.taperA&&(s=Math.min(s,t/r)),i.taperB&&(s=Math.min(s,(e-t)/r)),i.H*Math.max(0,Math.min(1,s))}let n=Math.min(90,e);return Math.max(i.hA*Math.max(0,1-t/n),i.hB*Math.max(0,1-(e-t)/n))}function ny(i,t,e){let n=[],s=[],r=[],o=[],a=[],l=(u,f,d,p,M)=>u.push(...f,...d,...p,...p,...d,...M),c=(u,f,d,p)=>{let M=p[0]-d[0],g=p[1]-d[1],m=M*M+g*g||1,S=Math.max(0,Math.min(1,((u-d[0])*M+(f-d[1])*g)/m));return Math.hypot(u-d[0]-M*S,f-d[1]-g*S)};for(let u of i){let f=u.cum[u.cum.length-1],d=Math.max(2,Math.ceil(f/4)),p=u.w/2,M=[];for(let m=0;m<=d;m++){let S=f*m/d,v=Ee(u,S);M.push({x:v.x,z:v.z,nx:-v.dz,nz:v.dx,h:ar(u,S)})}for(let m=1;m<M.length;m++){let S=M[m-1],v=M[m],_=(b,E,x)=>[b.x+b.nx*p*E,x,b.z+b.nz*p*E];l(n,_(S,1,S.h+.06),_(v,1,v.h+.06),_(S,-1,S.h+.06),_(v,-1,v.h+.06));for(let b of[1,-1]){let E=u.elev==="puente"?Math.max(0,S.h-1.2):0,x=u.elev==="puente"?Math.max(0,v.h-1.2):0;l(s,_(S,b,E),_(v,b,x),_(S,b,S.h+.9),_(v,b,v.h+.9)),(S.h>.4||v.h>.4)&&l(r,_(S,b*1.01,S.h+.9),_(v,b*1.01,v.h+.9),_(S,b*1.01,S.h+1.2),_(v,b*1.01,v.h+1.2))}u.elev==="puente"&&S.h>1.5&&l(s,_(S,1,S.h-1.2),_(v,1,v.h-1.2),_(S,-1,S.h-1.2),_(v,-1,v.h-1.2))}let g=[];for(let m=1;m<u.nl;m++)u.oneway?g.push(-u.w/2+m*u.w/u.nl):g.push(m*u.w/2/u.nl,-m*u.w/2/u.nl);u.oneway||g.push(0);for(let m of g)for(let S=2;S<f-3;S+=9){let v=Ee(u,S),_=Ee(u,Math.min(f,S+3)),b=ar(u,S)+.09,E=ar(u,S+3)+.09,x=m===0?.14:.08,y=(A,w,I)=>[A.x-A.dz*w,I,A.z+A.dx*w];l(o,y(v,m+x,b),y(_,m+x,E),y(v,m-x,b),y(_,m-x,E))}if(u.elev==="puente")for(let m=10;m<f-6;m+=26){let S=ar(u,m);if(S<3)continue;let v=Ee(u,m);t.some(_=>{for(let b=1;b<_.p.length;b++)if(c(v.x,v.z,_.p[b-1],_.p[b])<_.w/2+1.5)return!0;return!1})||a.push([v.x,v.z,S-1.2,en(v.dx,v.dz),u.w*.55])}}let h=(u,f)=>{if(!u.length)return;let d=new Te;d.setAttribute("position",new ne(u,3)),d.computeVertexNormals();let p=new st(d,new At({color:f,side:ye}));p.castShadow=!0,p.receiveShadow=!0,e.add(p)};if(h(n,3816773),h(s,11119269),h(r,14857239),h(o,15921906),a.length){let u=new Le(new Gt(1.4,1,1).translate(0,.5,0),new At({color:10263960}),a.length),f=new oe,d=new Xe,p=new N(0,1,0);a.forEach(([M,g,m,S,v],_)=>{d.setFromAxisAngle(p,S),u.setMatrixAt(_,f.compose(new N(M,0,g),d,new N(1,m,v)))}),u.castShadow=!0,e.add(u)}}function iy(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n.x*s.y-s.x*n.y}return t<0}function Tn(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return(t>>>0)/4294967296}var Zl=[];function eu(i,t){let e=i+": "+(t&&t.message||t);Zl.push(e),Zl.length>8&&Zl.shift();try{console.warn("[3D]",e,t),window.__v3err&&window.__v3err(e)}catch{}}function ai(i,t,e){if(Jl)return e;try{return t()}catch(n){return eu(i,n),e}}var Jl=!1;function sy(i){try{Jl=!1,Xd(i)}catch(t){eu("mapa",t);try{Jl=!0,Xd(i)}catch(e){eu("mapa simple",e)}finally{Jl=!1}}}function Xd(i){if(!Je||!i||!i.centro)return;let t=Zt&&Zt.O&&Math.hypot(...Ue(Zt.O,i.centro.lat,i.centro.lon))<4e3?Zt.O:{lat:i.centro.lat,lon:i.centro.lon},e=Zt,n=new _e,s=new st(new Re(9e3,9e3).rotateX(-Math.PI/2),new At({color:12174e3,polygonOffset:!0,polygonOffsetFactor:6,polygonOffsetUnits:12}));s.position.y=-.02,s.receiveShadow=!0,n.add(s);let r=[],o={},a=[],l=[],c=[],h=[],u=(i.calles||[]).map(z=>({c:z,p:z.pts.map(([tt,k])=>Ue(t,tt,k))})).filter(z=>z.p.length>=2);ty(u,t);let f=ey(u),d=[];for(let z=0;z<u.length;z++){let tt=u[z].c,k=u[z].p,it=/_link$/.test(tt.tipo)?"link":Hd[tt.tipo]?tt.tipo:"residential",Q=/\beje\s*5\b/i.test((tt.nombre||"")+" "+(tt.ref||"")),F=tt.carriles||(Q?6:0),W=F?Math.max(5,Math.min(26,F*3.2)):tt.ancho||Hd[it],q={p:k,cum:bo(k),tipo:it,w:W,nombre:tt.nombre||"",ref:tt.ref||"",oneway:!!tt.oneway,ncar:F,glorieta:!!tt.glorieta};q.nl=xs(q),r.push(q);let gt=f.get(z);if(gt){Object.assign(q,gt),d.push(q);continue}Dn(k,W,Wl[it],o[it]||=[]);let ht=q.cum[q.cum.length-1],Ht=Wl[it]+.012;if(!q.oneway&&W>=6.5)for(let dt of[-.17,.17]){let yt=[];for(let Mt=0;Mt<=ht;Mt+=Math.max(3,ht/300)){let D=Ee(q,Mt);yt.push([D.x-D.dz*dt,D.z+D.dx*dt])}Dn(yt,.13,Ht,l)}let Nt=[];for(let dt=1;dt<q.nl;dt++)q.oneway?Nt.push(-W/2+dt*W/q.nl):Nt.push(dt*W/2/q.nl,-dt*W/2/q.nl);for(let dt of Nt)for(let yt=2;yt<ht-3;yt+=9){let Mt=Ee(q,yt),D=Ee(q,Math.min(ht,yt+3));Dn([[Mt.x-Mt.dz*dt,Mt.z+Mt.dx*dt],[D.x-D.dz*dt,D.z+D.dx*dt]],.16,Ht,a)}if(it!=="service"){Dn(k,W+5.2,.012,c);for(let dt=6;dt<ht-4&&h.length<1600;dt+=16){if(Tn(q.nombre+dt+k[0][0])<.45)continue;let yt=Ee(q,dt),Mt=Tn(dt+q.nombre)<.5?1:-1,D=(W/2+1.7)*Mt;h.push([yt.x-yt.dz*D,yt.z+yt.dx*D,.75+Tn(String(dt))*.5])}}}d.length&&ai("puentes",()=>ny(d,r.filter(z=>!z.elev),n));let p=ai("perif\xE9rico",()=>Zv(r,t,n,h),null)||{barco:null,sem:null};ai("torres",()=>Gd(r,n,h,p)),ai("copilco",()=>Gd(r,n,h,p,{via:/\bcopilco\b/,desde:/^(avenida |av\.? )?(de )?(los )?aztecas$/,hasta:/^(avenida |av\.? )?universidad$/,clave:"copilco",p1:Ue(t,19.333,-99.163),p2:Ue(t,19.335887,-99.176652)})),p.super=ai("s\xFAper",()=>qv(r,i.edificios||[],t,n),null),p.glorietas=ai("glorieta",()=>[Ov(r,n,[/adolfo lopez mateos/,/pantitlan/],"Glorieta L\xF3pez Mateos y Pantitl\xE1n")].filter(Boolean),[]),p.divisor=ai("circuito",()=>Bv(r,n),null),ai("churubusco",()=>zv(r,n,h)),p.parques=ai("parque",()=>[Gv(r,n,h,[/concepcion beistegui/,/\bcoyoacan\b/,/colonia del valle/],"beistegui")].filter(Boolean),[]);let M=new At({color:3816773,side:ye}),g=new At({color:4869461,side:ye});for(let z in o){let tt=we(o[z]);tt.computeVertexNormals();let k=new st(tt,z==="service"?g:M);k.receiveShadow=!0,n.add(k)}if(a.length&&n.add(new st(we(a),new xe({color:15921906,side:ye}))),l.length&&n.add(new st(we(l),new xe({color:15909376,side:ye}))),c.length){let z=new st(we(c),new At({color:13225156,side:ye,polygonOffset:!0,polygonOffsetFactor:3,polygonOffsetUnits:6}));z.receiveShadow=!0,n.add(z)}if(h.length){let z=new Le(new he(.15,.2,1.6,6).translate(0,.8,0),new At({color:8018490}),h.length),tt=new Le(new Js(1.4,0).translate(0,2.6,0),new At({color:5939290,flatShading:!0}),h.length),k=new oe,it=new Xe,Q=new N,F=new N;h.forEach(([W,q,gt],ht)=>{k.compose(F.set(W,0,q),it,Q.setScalar(gt)),z.setMatrixAt(ht,k),tt.setMatrixAt(ht,k)}),tt.castShadow=!0,n.add(z,tt)}if(i.casa){let[z,tt]=Ue(t,i.casa.lat,i.casa.lon),k=Ro("\u{1F3E0} Mi casa");k.position.set(z,11,tt),n.add(k)}let m=null;if(i.radar){let[z,tt]=Ue(t,i.radar.lat,i.radar.lon),k=null;for(let it of r)for(let Q=1;Q<it.p.length;Q++){let[F,W]=it.p[Q-1],[q,gt]=it.p[Q],ht=q-F,Ht=gt-W,Nt=ht*ht+Ht*Ht||1,dt=Math.max(0,Math.min(1,((z-F)*ht+(tt-W)*Ht)/Nt)),yt=F+ht*dt,Mt=W+Ht*dt,D=Math.hypot(z-yt,tt-Mt);if(!k||D<k.dd-.5||Math.abs(D-k.dd)<.5&&it.w>k.c.w){let se=Math.sqrt(Nt);k={dd:D,px:yt,pz:Mt,ux:ht/se,uz:Ht/se,c:it}}}if(k&&k.dd<60){let it=-k.uz,Q=k.ux,F=(z-k.px)*it+(tt-k.pz)*Q>=0?1:-1,W=k.c.w/2+1.3,q=new _e;q.position.set(k.px+it*W*F,0,k.pz+Q*W*F);let gt=new At({color:10134445}),ht=new st(new he(.14,.18,6.2,8),gt);ht.position.y=3.1,ht.castShadow=!0,q.add(ht);let Ht=new st(new Gt(.12,.12,2.2),gt);Ht.position.set(0,6.1,-1*F),Ht.rotation.y=0,q.add(Ht);let Nt=new st(new Gt(.9,.6,.7),new At({color:15921906}));Nt.position.set(0,5.6,-1.9*F),q.add(Nt);let dt=new st(new he(.18,.18,.12,12).rotateX(Math.PI/2),new xe({color:1118481}));dt.position.set(.48,5.6,-1.9*F),dt.rotation.y=Math.PI/2,q.add(dt);let yt=new st(new Pn(.11,8,6),new xe({color:16722458}));yt.position.set(.3,5.98,-1.9*F),q.add(yt);let Mt=new Bi(new yi({map:rc.map,color:16777215,transparent:!0,depthWrite:!1,blending:Si}));Mt.scale.set(9,9,1),Mt.position.set(0,5.6,-1.9*F),Mt.visible=!1,q.add(Mt);let D=Ro("\u{1F4F8} Radar \xB7 50");D.position.set(0,8.4,0),q.add(D),q.rotation.y=en(k.ux,k.uz),n.add(q),m={g:q,led:yt,flash:Mt}}}let S=[],v={};for(let z of r.slice().sort((tt,k)=>k.w-tt.w)){if(!z.nombre||z.elev||S.length>=90)continue;let tt=z.cum[z.cum.length-1],k=Nv(z.nombre),it=Math.max(2.6,Math.min(6,z.w*.42)),Q=it*k.ar;if(!(tt<Q*.9))for(let F=Math.min(tt/2,40+Q/2);F<tt-Q/2&&S.length<90;F+=170){let W=Ee(z,F),q=z.nombre+Math.round(W.x/120)+","+Math.round(W.z/120);if(v[q])continue;v[q]=1;let gt=new st(new Re(Q,it).rotateX(-Math.PI/2),k.mat);gt.position.set(W.x,Wl[z.tipo]+.03,W.z),gt.userData.base=en(W.dx,W.dz),gt.userData.dx=W.dx,gt.userData.dz=W.dz,gt.renderOrder=2,n.add(gt),S.push(gt)}}let _=[],b=r.filter(z=>z.oneway&&z.nombre&&!z.elev).map(z=>{let tt=1e9,k=-1e9,it=1e9,Q=-1e9;for(let[F,W]of z.p)tt=Math.min(tt,F),k=Math.max(k,F),it=Math.min(it,W),Q=Math.max(Q,W);return{c:z,x0:tt,x1:k,z0:it,z1:Q}}),E=(z,tt)=>{let k=b.filter(it=>z>it.x0-70&&z<it.x1+70&&tt>it.z0-70&&tt<it.z1+70).map(it=>({c:it.c,q:Ze(it.c,z,tt)})).filter(it=>it.q.d<70);for(let it=0;it<k.length;it++)for(let Q=it+1;Q<k.length;Q++){let F=k[it],W=k[Q];if(F.c.nombre!==W.c.nombre||Math.abs(F.q.dx*W.q.dx+F.q.dz*W.q.dz)<.8)continue;let q=Ze(W.c,F.q.x,F.q.z).d;if(F.q.d+W.q.d<=q+2)return!0}return!1};{let tt=new Map,k=(dt,yt)=>Math.floor(dt/25)+","+Math.floor(yt/25);for(let dt of r)for(let yt=1;yt<dt.p.length;yt++){let[Mt,D]=dt.p[yt-1],[se,kt]=dt.p[yt],Qt={x1:Mt,z1:D,x2:se,z2:kt,r:dt.w/2+2.4};for(let pt=Math.floor((Math.min(Mt,se)-12)/25);pt<=Math.floor((Math.max(Mt,se)+12)/25);pt++)for(let Me=Math.floor((Math.min(D,kt)-12)/25);Me<=Math.floor((Math.max(D,kt)+12)/25);Me++){let qt=pt+","+Me;(tt.get(qt)||tt.set(qt,[]).get(qt)).push(Qt)}}let it=(dt,yt,Mt)=>{let D=Mt.x2-Mt.x1,se=Mt.z2-Mt.z1,kt=D*D+se*se||1,Qt=((dt-Mt.x1)*D+(yt-Mt.z1)*se)/kt;return Qt=Math.max(0,Math.min(1,Qt)),Math.hypot(dt-Mt.x1-D*Qt,yt-Mt.z1-se*Qt)},Q=(dt,yt,Mt)=>{let D=Math.floor(dt/25),se=Math.floor(yt/25);for(let kt=-1;kt<=1;kt++)for(let Qt=-1;Qt<=1;Qt++)for(let pt of tt.get(D+kt+","+(se+Qt))||[])if(it(dt,yt,pt)<pt.r+Mt)return!1;return!0},F=new Map,W=8,q=(dt,yt)=>{let Mt=Math.floor(dt/W)+","+Math.floor(yt/W);(F.get(Mt)||F.set(Mt,[]).get(Mt)).push([dt,yt])},gt=(dt,yt,Mt)=>{let D=Math.floor(dt/W),se=Math.floor(yt/W);for(let kt=-1;kt<=1;kt++)for(let Qt=-1;Qt<=1;Qt++)for(let[pt,Me]of F.get(D+kt+","+(se+Qt))||[])if(Math.hypot(pt-dt,Me-yt)<Mt)return!0;return!1};for(let dt of i.edificios||[])if(dt.pts&&dt.pts.length){let yt=0,Mt=0;for(let[D,se]of dt.pts){let[kt,Qt]=Ue(t,D,se);yt+=kt,Mt+=Qt}q(yt/dt.pts.length,Mt/dt.pts.length)}let[ht,Ht]=Ue(t,i.centro.lat,i.centro.lon),Nt=r.filter(dt=>!/^(service|motorway|link)$/.test(dt.tipo)).sort((dt,yt)=>dt.w-yt.w);for(let dt of Nt){let yt=dt.cum[dt.cum.length-1];for(let Mt of[1,-1]){let D=5;for(;D<yt-5&&_.length<2600;){let se=Tn(dt.nombre+"|"+Mt+"|"+Math.round(D)+"|"+Math.round(dt.p[0][0])),kt=6+se*4.5,Qt=9+se*7%1*5,pt=Ee(dt,D+kt/2);if(D+=kt+.25,Math.hypot(pt.x-ht,pt.z-Ht)>750||se<.06)continue;let Me=-pt.dz*Mt,qt=pt.dx*Mt,te=dt.w/2+2.7+Qt/2,C=pt.x+Me*te,T=pt.z+qt*te;if(!Q(C,T,Qt/2-.3)||!Q(C+pt.dx*kt/2,T+pt.dz*kt/2,.4)||!Q(C-pt.dx*kt/2,T-pt.dz*kt/2,.4)||gt(C,T,Math.min(kt,Qt)*.85)||p.barco&&Math.hypot(C-p.barco.x,T-p.barco.z)<66||p.libres&&p.libres.some(([nt,ot])=>Math.hypot(C-nt,T-ot)<9)||p.super&&Math.hypot(C-p.super.x,T-p.super.z)<p.super.r+6||E(C,T)||p.glorietas&&p.glorietas.some(nt=>Math.hypot(C-nt.x,T-nt.z)<nt.r+8)||p.parques&&p.parques.some(nt=>or(C,T,nt.poli))||dt.oneway&&r.some(nt=>nt!==dt&&nt.oneway&&nt.nombre&&nt.nombre===dt.nombre&&(()=>{let ot=Ze(nt,pt.x,pt.z);return ot.d>140?!1:Ze(nt,C,T).d<ot.d})()))continue;q(C,T);let J=pt.dx*kt/2,xt=pt.dz*kt/2,at=Me*Qt/2,Tt=qt*Qt/2,It=se<.35?1:se<.85?2:3;_.push({loc:[[C-J-at,T-xt-Tt],[C+J-at,T+xt-Tt],[C+J+at,T+xt+Tt],[C-J+at,T-xt+Tt]],h:3*It+se*31%1*.6,id:"s"+C.toFixed(1)+T.toFixed(1)})}}}}let x=[15918022,15250592,13227743,16045453,12114110,15123414,14209732,11125984,15778427,14736853,16171425,12572902],y=[],A=[],w=[],I=(z,tt)=>{let k=new Te;for(let it of["position","uv"]){let Q=z.attributes[it];k.setAttribute(it,new sn(Q.array.slice(tt.start*Q.itemSize,(tt.start+tt.count)*Q.itemSize),Q.itemSize))}return k};for(let z of(i.edificios||[]).concat(_)){if(!z.loc&&(!z.pts||z.pts.length<4))continue;if(p.super&&!z.loc){let[Q,F]=Ue(t,z.pts[0][0],z.pts[0][1]),W=0,q=0;for(let[gt,ht]of z.pts){let[Ht,Nt]=Ue(t,gt,ht);W+=Ht,q+=Nt}if(W/=z.pts.length,q/=z.pts.length,Math.hypot(W-p.super.x,q-p.super.z)<p.super.r+3||Math.hypot(Q-p.super.x,F-p.super.z)<p.super.r)continue}if(p.glorietas&&p.glorietas.length&&!z.loc){let Q=0,F=0;for(let[W,q]of z.pts){let[gt,ht]=Ue(t,W,q);Q+=gt,F+=ht}if(Q/=z.pts.length,F/=z.pts.length,p.glorietas.some(W=>Math.hypot(Q-W.x,F-W.z)<W.r+4))continue}if(p.parques&&p.parques.length&&!z.loc){let Q=0,F=0;for(let[W,q]of z.pts){let[gt,ht]=Ue(t,W,q);Q+=gt,F+=ht}if(Q/=z.pts.length,F/=z.pts.length,p.parques.some(W=>or(Q,F,W.poli)))continue}if(p.barco&&!z.loc){let Q=z.pts.map(([yt,Mt])=>Ue(t,yt,Mt)),F=p.barco,W=F.ux||0,q=F.uz||-1,gt=([yt,Mt])=>[(yt-F.x)*W+(Mt-F.z)*q,(yt-F.x)*-q+(Mt-F.z)*W],ht=([yt,Mt])=>Math.abs(yt)<64&&Math.abs(Mt)<26,Ht=0,Nt=0;for(let[yt,Mt]of Q)Ht+=yt,Nt+=Mt;Ht/=Q.length,Nt/=Q.length;let dt=[[-60,-22],[60,-22],[60,22],[-60,22]].map(([yt,Mt])=>[F.x+yt*W-Mt*q,F.z+yt*q+Mt*W]);if(ht(gt([Ht,Nt]))||Q.some(yt=>ht(gt(yt)))||dt.some(([yt,Mt])=>or(yt,Mt,Q))||or(F.x,F.z,Q))continue}let tt=z.loc?z.loc.map(([Q,F])=>new _t(Q,-F)):z.pts.map(([Q,F])=>{let[W,q]=Ue(t,Q,F);return new _t(W,-q)}),k=Tn(z.id||z.pts[0][0]+","+z.pts[0][1]);z.loc&&iy(tt)&&tt.reverse();let it=z.h||(k<.55?3.2*(1+Math.floor(k*4)):k<.9?3.2*(2+Math.floor(k*3)):3.2*(5+Math.floor(k*8)));try{let Q=new as(new ni(tt),{depth:it,bevelEnabled:!1}).rotateX(-Math.PI/2);Q.index&&(Q=Q.toNonIndexed());let F=x[Math.floor(k*x.length)];for(let ht of Q.groups){let Ht=Zn(I(Q,ht),F);(ht.materialIndex===0?A:y).push(Ht)}let W=0,q=0,gt=0;for(let ht=0;ht<tt.length;ht++){let Ht=tt[ht],Nt=tt[(ht+1)%tt.length],dt=Ht.x*Nt.y-Nt.x*Ht.y;W+=dt,q+=(Ht.x+Nt.x)*dt,gt+=(Ht.y+Nt.y)*dt}W/=2,Math.abs(W)>30&&k*7%1<.8&&(q/=6*W,gt/=6*W,w.push([q+(k*13%1-.5)*2,it,-gt+(k*17%1-.5)*2]))}catch{}}for(let z=0;z<y.length;){let tt=0,k=z;for(;k<y.length&&tt<24e3;)tt+=y[k++].attributes.position.count;let it=we(y.slice(z,k));it.computeVertexNormals(),z=k;let Q=new st(it,ry());Q.castShadow=!0,Q.receiveShadow=!0,Q.name="muros",n.add(Q)}if(A.length){let z=we(A);z.computeVertexNormals();let tt=new st(z,new At({vertexColors:!0}));tt.receiveShadow=!0,n.add(tt)}if(w.length){let z=we([Zn(new he(.6,.6,1.15,10).translate(0,.78,0),1776411),Zn(new he(.62,.62,.08,10).translate(0,1.38,0),2763306),Zn(new Gt(1.1,.2,1.1).translate(0,.1,0),10131342)].map(cu));z.computeVertexNormals();let tt=new Le(z,new At({vertexColors:!0}),w.length),k=new oe;w.forEach(([it,Q,F],W)=>tt.setMatrixAt(W,k.makeTranslation(it,Q,F))),tt.castShadow=!0,n.add(tt)}let L=[],U=[],P=[],G=[],V=[];for(let z of i.rieles||[]){let tt=z.pts.map(([it,Q])=>Ue(t,it,Q));if(tt.length<2)continue;let k={p:tt,cum:bo(tt),elevado:!!z.elevado,y:z.elevado?8:.12,periodo:z.l8?8:60,vagones:z.l8?6:9,t:Math.random()*60};if(!(k.cum[k.cum.length-1]<40)){if(L.push(k),k.elevado){Dn(tt,9,8,G),Dn(tt,9,6.8,G);let it=k.cum[k.cum.length-1];for(let Q=5;Q<it;Q+=26){let F=Ee(k,Q);V.push(new Gt(1.4,6.8,1.4).translate(F.x,3.4,F.z))}}else Dn(tt,8.4,.07,U);for(let it of[-2.45,-1.05,1.05,2.45]){let Q=[],F=k.cum[k.cum.length-1];for(let W=0;W<=F;W+=Math.max(4,F/200)){let q=Ee(k,W);Q.push([q.x-q.dz*it,q.z+q.dx*it])}Dn(Q,.12,k.y+.1,P)}}}if(U.length&&n.add(new st(we(U),new At({color:7037528,side:ye}))),P.length&&n.add(new st(we(P),new At({color:10133670,side:ye}))),G.length){let z=new st(we(G),new At({color:12170925,side:ye}));z.castShadow=!0,n.add(z)}if(V.length){let z=new st(we(V),new At({color:11578788}));z.castShadow=!0,n.add(z)}let X=new Le(hp(),Ji,400);X.count=0,X.castShadow=!0,n.add(X);let ct=[],Z=[],B=[],Y=[];for(let z of i.troles||[]){let tt=z.pts.map(([Q,F])=>Ue(t,Q,F));if(tt.length<2)continue;let k={p:tt,cum:bo(tt),periodo:30};if(k.cum[k.cum.length-1]<40)continue;ct.push(k),Dn(tt,9.5,8.5,Z),Dn(tt,9.5,7.3,Z);let it=k.cum[k.cum.length-1];for(let Q=5;Q<it;Q+=30){let F=Ee(k,Q);B.push(new Gt(1.5,7.3,1.5).translate(F.x,3.65,F.z))}for(let Q of[-2.2,-1.3,1.3,2.2]){let F=[];for(let W=0;W<=it;W+=Math.max(5,it/200)){let q=Ee(k,W);F.push([q.x-q.dz*Q,q.z+q.dx*Q])}Dn(F,.06,13.1,Y)}for(let Q=10;Q<it;Q+=40){let F=Ee(k,Q);for(let W of[-1,1])B.push(new Gt(.18,5,.18).translate(F.x-F.dz*4.4*W,11,F.z+F.dx*4.4*W))}}if(Z.length){let z=new st(we(Z),new At({color:13223613,side:ye}));z.castShadow=!0,n.add(z)}if(B.length){let z=new st(we(B),new At({color:11578788}));z.castShadow=!0,n.add(z)}Y.length&&n.add(new st(we(Y),new xe({color:2763306,side:ye})));let ft=new Le(lp(),Ji,60);ft.count=0,ft.castShadow=!0,n.add(ft);let mt=[],$=[],ut=[];for(let z of i.mb||[]){let tt=z.pts.map(([Q,F])=>Ue(t,Q,F));if(tt.length<2)continue;let k={p:tt,cum:bo(tt),periodo:40,l:z.l},it=k.cum[k.cum.length-1];if(!(it<30)){mt.push(k);for(let Q of[-3.6,3.6]){let F=[];for(let W=0;W<=it;W+=Math.max(4,it/300)){let q=Ee(k,W);F.push([q.x-q.dz*Q,q.z+q.dx*Q])}Dn(F,.28,.075,$);for(let W=0;W<=it;W+=6){let q=Ee(k,W);ut.push({x:q.x-q.dz*Q,z:q.z+q.dx*Q,c:Zi.metrobus,f:Math.floor(W/6)%3})}}}}$.length&&n.add(new st(we($),new xe({color:15909376,side:ye})));{let z=[];for(let tt of mt){let k=tt.cum[tt.cum.length-1];for(let it=1;it<=k&&z.length<9e3;it+=2.6){let Q=Ee(tt,it);for(let F of[-3.95,3.95])z.push([Q.x-Q.dz*F,Q.z+Q.dx*F,en(Q.dx,Q.dz)])}}if(z.length){let tt=new Le(new Gt(.42,.13,.3).translate(0,.13,0),new At({color:15774720}),z.length),k=new oe,it=new Xe,Q=new N(0,1,0),F=new N(1,1,1);z.forEach(([W,q,gt],ht)=>{it.setFromAxisAngle(Q,gt),tt.setMatrixAt(ht,k.compose(new N(W,0,q),it,F))}),n.add(tt)}}let Et=new Le(cp(),Ji,80);Et.count=0,Et.castShadow=!0,n.add(Et);for(let z of r){if(z.w<7||z.elev)continue;let tt=z.cum[z.cum.length-1],k=z.w>=12?5:7,it=Wl[z.tipo];for(let Q=0;Q<=tt;Q+=k){let F=Ee(z,Q),W=Math.floor(Q/k)%3;for(let q of[-1,1])ut.push({x:F.x-F.dz*(z.w/2-.4)*q,z:F.z+F.dx*(z.w/2-.4)*q,y:it,c:Zi.orilla,f:W});if(!z.oneway&&z.w>=10)ut.push({x:F.x,z:F.z,y:it,c:Zi.carril,f:W});else if(z.oneway&&z.w>=10)for(let q of[-1,1])ut.push({x:F.x-F.dz*z.w*.17*q,z:F.z+F.dx*z.w*.17*q,y:it,c:Zi.carril,f:W})}if(ut.length>14e3)break}let vt=op(ut);n.add(vt),Je.add(n);let bt={O:t,grupo:n,calles:r,etiquetas:S,rieles:L,tren:X,troles:ct,trole:ft,mbs:mt,mbus:Et,luces:vt,listo:!0,coches:e?e.coches:[],motos:e?e.motos:[],pj:e?e.pj:null,rastro:e?e.rastro:[],taxi:e?e.taxi:null,cruce:e?e.cruce:null,radar:m,cruces:ai("cruces",()=>Fv(r),[])||[],letreros:e?e.letreros:null,guias:e?e.guias:null,hitos:p};e&&(Je.remove(e.grupo),e.grupo.traverse(z=>{z.geometry&&z.geometry!==Ql&&z.geometry.dispose()})),e&&e.O!==t&&(bt.pj=null,bt.rastro=[]),Zt=bt,nu&&fp(nu);for(let z of Zt.coches)z.ci=-1;for(let z of Zt.motos)z.ci=-1;dp()}var nu=null;function fp(i){if(nu=i,!Zt||!Zt.O||(Zt.trafG&&(Zt.grupo.remove(Zt.trafG),Zt.trafG.traverse(s=>{s.geometry&&s.geometry.dispose()}),Zt.trafG=null),!i||!i.length))return;let t={cerr:[],rojo:[],amar:[],verde:[]};for(let s of i){let r=s.pts.map(([a,l])=>Ue(Zt.O,a,l));if(r.length<2||Math.hypot(r[0][0]-(Zt.pj?Zt.pj.x:0),r[0][1]-(Zt.pj?Zt.pj.z:0))>1500)continue;let o=s.nivel<0?"cerr":s.nivel<.45?"rojo":s.nivel<.75?"amar":"verde";Dn(r,o==="verde"?1.4:2.2,.095,t[o])}let e={cerr:9109504,rojo:15022389,amar:15905280,verde:3129178},n=new _e;for(let s in t)if(t[s].length){let r=new st(we(t[s]),new xe({color:e[s],transparent:!0,opacity:s==="verde"?.55:.8,side:ye,depthWrite:!1}));r.renderOrder=1,n.add(r)}Zt.grupo.add(n),Zt.trafG=n}var ms=null;function ry(){if(ms)return ms;let i=4,t=256,e=document.createElement("canvas"),n=document.createElement("canvas");e.width=e.height=n.width=n.height=t;let s=e.getContext("2d"),r=n.getContext("2d");s.fillStyle="#ffffff",s.fillRect(0,0,t,t),r.fillStyle="#000",r.fillRect(0,0,t,t);let o=t/i;for(let c=0;c<i;c++)for(let h=0;h<i;h++){let u=c*o,f=h*o;s.fillStyle="rgba(0,0,0,.10)",s.fillRect(u+o*.18,f+o*.24,o*.64,o*.52),s.fillStyle="#33414f",s.fillRect(u+o*.22,f+o*.28,o*.56,o*.44),s.fillStyle="#5a6b7c",s.fillRect(u+o*.49,f+o*.28,o*.03,o*.44),Math.random()<.55&&(r.fillStyle=Math.random()<.3?"#ffe7b0":"#ffc96b",r.fillRect(u+o*.22,f+o*.28,o*.56,o*.44))}let a=new En(e),l=new En(n);for(let c of[a,l])c.wrapS=c.wrapT=jn,c.repeat.set(1/(3.2*i),1/(3.2*i)),c.colorSpace=Oe,c.anisotropy=4;return ms=new At({vertexColors:!0,map:a,emissiveMap:l,emissive:0}),ms}var Xh={};function oy(i){let t=i?"n":"d";if(Xh[t])return Xh[t];let e=document.createElement("canvas");e.width=4,e.height=256;let n=e.getContext("2d"),s=n.createLinearGradient(0,0,0,256);i?(s.addColorStop(0,"#03060f"),s.addColorStop(.55,"#0d1630"),s.addColorStop(1,"#27324f")):(s.addColorStop(0,"#5f9fd8"),s.addColorStop(.6,"#a9d0ee"),s.addColorStop(1,"#dce9f2")),n.fillStyle=s,n.fillRect(0,0,4,256);let r=new En(e);return r.colorSpace=Oe,Xh[t]={t:r,horiz:i?2568783:14477810}}var ic="muestra";function dp(){let i=!!(Zt&&Zt.listo&&Ct.pos);if((i?"real":"muestra")!==ic){ic=i?"real":"muestra",Ai.ini=!1,yn.visible=!i,rn&&(rn.tren.visible=!i);for(let t of wn)t!==Bt&&(t.g.visible=!i);if(Zt){Zt.grupo.visible=i;for(let t of Zt.coches)t.g.visible=i;for(let t of Zt.motos)t.g.visible=i;Zt.taxi&&(Zt.taxi.g.visible=i),Zt.cruce&&(Zt.cruce.g.visible=i&&Ct.rojo),Zt.letreros&&!i&&(Zt.letreros.forEach(t=>t.visible=!1),(Zt.guias||[]).forEach(t=>t.visible=!1))}i||(Bt.g.rotation.y=0,Bt.z=$i[1]),ec()}}function ay(i,t,e=22,n){let s=null;for(let r=0;r<Zt.calles.length;r++){let o=Zt.calles[r];if(o.tipo==="service"&&!n)continue;let a=o.p;for(let l=1;l<a.length;l++){let c=a[l-1][0],h=a[l-1][1],u=a[l][0]-c,f=a[l][1]-h,d=u*u+f*f;if(!d)continue;let p=((i-c)*u+(t-h)*f)/d;p=Math.max(0,Math.min(1,p));let M=c+u*p,g=h+f*p,m=Math.hypot(i-M,t-g),S=m;if(n){let v=Math.sqrt(d);S+=(1-Math.abs((u*n[0]+f*n[1])/v))*8}if(m<e&&(!s||S<s.pen)){let v=Math.sqrt(d);s={ci:r,i:l,t:p,x:M,z:g,d:m,pen:S,dx:u/v,dz:f/v,s:o.cum[l-1]+v*p}}}}return s}function xs(i){return i.ncar?i.oneway?Math.max(1,Math.round(i.ncar)):Math.max(1,Math.round(i.ncar/2)):i.oneway?Math.max(1,Math.min(5,Math.floor(i.w/2.8))):Math.max(1,Math.min(4,Math.floor(i.w/2/2.8)))}function Ao(i,t){let e=i.nl||xs(i);return i.oneway?-i.w/2+(t+.5)*i.w/e:(t+.5)*i.w/2/e}function $l(i){let t=i.nl||xs(i);return t>=3?t-2:t-1}var qd=null;function ly(){let i=Zt,[t,e]=Ue(i.O,Ct.pos.lat,Ct.pos.lon);i.pj||(i.pj={x:t,z:e,cx:t,cz:e,tx:t,tz:e,h:0,ht:0,ci:-1,s:0,dir:1,rx:t,rz:e,v:0,off:0,offObj:0,carril:null,tc:0});let n=i.pj,s=t-n.rx,r=e-n.rz,o=Math.hypot(s,r),a=o>1.5?[s/o,r/o]:[Math.cos(n.ht),-Math.sin(n.ht)],l=ay(t,e,25,a);if(l){let c=i.calles[l.ci],h=l.dx*a[0]+l.dz*a[1]>=0?1:-1,u=l.dx*h,f=l.dz*h;n.tx=l.x,n.tz=l.z,(n.ci!==l.ci||n.dir!==h)&&(n.carril=$l(c)),n.ci=l.ci,n.s=l.s,n.dir=h,(o>1.5||n.ci!==l.ci)&&(n.ht=en(u,f))}else n.tx=t,n.tz=e,o>1.5&&(n.ht=en(a[0],a[1])),n.ci=-1;if(o>1.5&&(n.rx=t,n.rz=e),Math.hypot(n.tx-n.cx,n.tz-n.cz)>300){n.cx=n.tx,n.cz=n.tz,n.h=n.ht,n.off=n.offObj=0,i.rastro=[],Ai.ini=!1;for(let c of i.coches)c.ci=-1;for(let c of i.motos)c.ci=-1}}function cy(i,t){let e=Kl(i),n=[];return i.calles.forEach((s,r)=>{if(s.tipo==="service"||s.tipo==="living_street")return;let o=s.p[Math.floor(s.p.length/2)];Math.hypot(o[0]-e.x,o[1]-e.z)<t+s.cum[s.cum.length-1]/2&&n.push(r)}),n}function Xl(i,t,e,n){let s=i.pj;if(n&&!fe&&s.ci>=0&&Math.random()<.6){let o=i.calles[s.ci],a=o.cum[o.cum.length-1];t.ci=s.ci,t.dir=Math.random()<.75||o.oneway?s.dir:-s.dir,t.s=Math.max(0,Math.min(a,s.s+t.dir*(t.dir===s.dir?(Math.random()<.5?12:-12)+(Math.random()-.5)*220:(Math.random()-.5)*300)))}else{if(!e.length){t.ci=-1;return}t.ci=e[Math.floor(Math.random()*e.length)];let o=i.calles[t.ci],a=o.cum[o.cum.length-1];t.dir=o.oneway||Math.random()<.5?1:-1,t.s=Math.random()*a}t.v=t.vmax*.6,t.lado=(Math.random()-.5)*.6;let r=i.calles[t.ci];t.carril=Math.floor(Math.random()*(r.nl||xs(r)))}function hy(i){let t=Ct.nivel==="pesado",e=t?46:16,n=6;for(;i.coches.length<e;){let s=jd(),r=wo(s==="trailer"&&!Ct.pico?"sedan":s,li(Kh),2831424);i.coches.push({...r,ci:-1,s:0,dir:1,v:0,vmax:0,a:0,lado:0})}for(;i.coches.length>e;)Je.remove(i.coches.pop().g);for(;i.motos.length<n;){let s=wo("moto",li([12986408,1402304,2236962]),li([3622735,7162945]));i.motos.push({...s,ci:-1,s:0,dir:1,v:12,vmax:12,a:0,fase:Math.random()*6})}i.taxi||(i.taxi=wo("taxi"));for(let s of i.coches)s.vmax=t?3+Math.random()*3:9+Math.random()*5}function Yd(i,t,e=0){let n=i.calles[t.ci],s=Ee(n,t.s),r=s.dx*t.dir,o=s.dz*t.dir,a=n.nl||xs(n),l=Math.min(a-1,t.carril==null?a-1:t.carril),c=Ao(n,l)+e;t.g.position.set(s.x-o*c,ar(n,t.s),s.z+r*c),t.g.rotation.y=en(r,o)}function uy(i,t){let e=i.pj;if(e.tc+=t,e.ci<0){e.offObj=0,e.carrilFis=null;return}let n=i.calles[e.ci],s=n.nl||xs(n);(e.carril==null||e.carril>=s)&&(e.carril=$l(n));let r=Bt.v,o=r>40/3.6,a=p=>(p.s-e.s)*e.dir,l=i.coches.filter(p=>p.ci===e.ci&&p.g.visible),c=(p,M,g)=>l.some(m=>m.dir===e.dir&&(m.carril||0)===p&&a(m)>M&&a(m)<g),h=(p,M)=>l.some(g=>g.dir!==e.dir&&a(g)>p&&a(g)<M),u=l.find(p=>p.dir===e.dir&&(p.carril||0)===e.carril&&a(p)>1&&a(p)<24+r&&p.v<r-1.2);if(e.carril===-1&&h(-3,35))e.carril=0,e.tc=0;else if(e.tc>1.1){if(o&&u){let p=[e.carril-1,e.carril+1].filter(M=>M>=0&&M<s);s===1&&!n.oneway&&!h(-8,55)&&p.push(-1);for(let M of p)if(M===-1||!c(M,-9,16)){e.carril=M,e.tc=0;break}}else if(e.carril!==$l(n)){let p=$l(n);c(p,-11,9+r*.6)||(e.carril=p,e.tc=0)}}e.offObj=e.carril===-1?-Ao(n,0):Ao(n,e.carril);let f=0,d=1e9;for(let p=0;p<s;p++){let M=Math.abs(Ao(n,p)-e.off);M<d&&(d=M,f=p)}e.carrilFis=f}function fy(i,t){let e=i.pj;if(!i.letreros){i.letreros=[],i.guias=[];for(let l=0;l<4;l++){let c=new yi({depthTest:!1,depthWrite:!1,sizeAttenuation:!1,transparent:!0}),h=new Bi(c);h.renderOrder=20,h.center.set(.5,0),h.visible=!1,Je.add(h),i.letreros.push(h);let u=new Te;u.setAttribute("position",new ne([0,0,0,0,1,0],3));let f=new Ws(u,new rs({color:1118481,depthTest:!1,transparent:!0}));f.renderOrder=19,f.visible=!1,f.frustumCulled=!1,Je.add(f),i.guias.push(f)}}if(i.tLet=(i.tLet||0)+t,i.tLet<.25&&i.letSel){Zd(i);return}i.tLet=0;let n=e.x,s=e.z,r=e.h,o=e.ci>=0?i.calles[e.ci]:null;if(fe){let l=oc();n=l.x,s=l.z,r=fe.h,o=null;let c=28,h=Math.cos(r),u=-Math.sin(r);for(let f of i.calles){if(f.elev||!f.nombre)continue;let d=Ze(f,n,s);d.d<c&&Math.abs(d.dx*h+d.dz*u)>.55&&(c=d.d,o=f)}}i.letV={x:n,z:s};let a=o&&o.nombre;if(i.letSel=[],a){let l=Math.cos(r),c=-Math.sin(r),h=new Set,u=i.cruces.filter(f=>f.a===a||f.b===a).map(f=>{let d=f.x-n,p=f.z-s;return{k:f,ad:d*l+p*c,lat:Math.abs(-d*c+p*l),otro:f.a===a?f.b:f.a}}).filter(f=>f.ad>-6&&f.ad<260&&f.lat<22+o.w).sort((f,d)=>f.ad-d.ad);for(let f of u){if(h.has(f.otro))continue;h.add(f.otro);let d=f.k,p=d.a===a?d.db:d.da,M=d.a===a?d.wa:d.wb,g=-c,m=l,S=p[0]*g+p[1]*m>=0?1:-1,v=Math.abs(p[0]*g+p[1]*m)>.25?M/2+7:0;if(f.px=d.x+p[0]*S*v,f.pz=d.z+p[1]*S*v,i.letSel.push(f),i.letSel.length>=i.letreros.length)break}}Zd(i)}var yo=new N;function Zd(i){let t=i.pj,e=Math.tan(ze.fov*Math.PI/360),n=-1/0;ze.updateMatrixWorld(),i.letreros.forEach((s,r)=>{let o=i.letSel&&i.letSel[r],a=i.guias&&i.guias[r];if(!o){s.visible=!1,a&&(a.visible=!1);return}let l=Uv(o.otro);s.material.map!==l.t&&(s.material.map=l.t,s.material.needsUpdate=!0),s.center.set(l.cx,l.cy);let c=i.letV||t,h=o.px??o.k.x,u=o.pz??o.k.z,f=Math.hypot(h-c.x,u-c.z),d=(.052+.03*Math.max(0,1-f/160))*1.63,p=f>230?Math.max(0,(260-f)/30):1;s.scale.set(d*l.ar,d,1),s.position.set(h,.4,u),s.material.opacity=p,s.visible=!0,s.renderOrder=30-r,yo.copy(s.position).applyMatrix4(ze.matrixWorldInverse);let M=-yo.z;if(M>.5){yo.copy(s.position).project(ze);let g=d/e,m=n+.012-yo.y;m>0&&(s.position.y+=m*e*M),n=Math.max(n,yo.y+Math.max(0,m))+g}if(a){let g=s.position.y>1.2;if(a.visible=g,g){let m=a.geometry.attributes.position;m.setXYZ(0,h,.3,u),m.setXYZ(1,h,s.position.y,u),m.needsUpdate=!0,a.material.opacity=p,a.renderOrder=19-r}}})}function dy(i){let t=Zt;On+=i,(!t.pj||qd!==Ct.pos.ts)&&(qd=Ct.pos.ts,ly());let e=t.pj,n=1-Math.exp(-i*(Ct.juego?10:2.2));e.cx+=(e.tx-e.cx)*n,e.cz+=(e.tz-e.cz)*n;let s=e.ht-e.h;s=Math.atan2(Math.sin(s),Math.cos(s)),e.h+=s*(1-Math.exp(-i*(Ct.juego?7:3))),uy(t,i);let r=e.off;e.off+=(e.offObj-e.off)*(1-Math.exp(-i*1.6));let o=(e.off-r)/Math.max(i,.001);e.x=e.cx+Math.sin(e.h)*e.off,e.z=e.cz+Math.cos(e.h)*e.off;let a=window.__velDbg!=null?window.__velDbg/3.6:Ct.rojo||Ct.llego?0:Ct.vel!=null?Ct.vel/3.6:0,l=Bt.v;Bt.v+=(a-Bt.v)*(1-Math.exp(-i*(Ct.juego?6:1.5))),Bt.a=(Bt.v-l)/Math.max(i,.001);{let v=e.ci>=0?t.calles[e.ci]:null,_=v&&v.elev?ar(v,Ze(v,e.cx,e.cz).s):0;e.y=(e.y||0)+(_-(e.y||0))*(1-Math.exp(-i*2.5))}Bt.g.position.set(e.x,e.y,e.z),Bt.g.rotation.y=e.h-Math.max(-.3,Math.min(.3,o*.09));let c=Bt.a<-.4||Bt.v<.4;Bt.stop.material=c?To:lr,Bt.glow.visible=c||Ct.noche,Bt.glow.scale.x=c?5.5:2.5,gs.position.y=3.3+Math.sin(On*3)*.2,gs.rotation.y+=.03;let h=t.rastro[t.rastro.length-1];(!h||Math.hypot(h[0]-e.x,h[1]-e.z)>.6)&&(t.rastro.push([e.x,e.z]),t.rastro.length>120&&t.rastro.shift()),hy(t);let u=cy(t,320),f=Ct.nivel==="pesado",d={};for(let v of t.coches){if((v.ci<0||v.ci>=t.calles.length)&&Xl(t,v,u,f),v.ci<0){v.g.visible=!1;continue}let _=t.calles[v.ci],b=_.cum[_.cum.length-1],E=Ee(_,v.s),x=Kl(t);if(Math.hypot(E.x-x.x,E.z-x.z)>380||v.s<=0&&v.dir<0||v.s>=b&&v.dir>0){Xl(t,v,u,f);continue}(d[v.ci+":"+v.dir+":"+(v.carril||0)]||=[]).push(v)}for(let v in d){let _=d[v],[b,E,x]=v.split(":").map(Number),y=b===e.ci&&E===e.dir&&(x===e.carril||x===e.carrilFis),A=_.map(w=>({o:w,s:w.s}));y&&A.push({o:null,s:e.s,v:Bt.v}),A.sort((w,I)=>(I.s-w.s)*E);for(let w=0;w<A.length;w++){let I=A[w];if(!I.o)continue;let L=I.o,U=L.vmax;if(w>0){let V=(A[w-1].s-L.s)*E-6;U=Math.min(U,Math.max(0,V*.9))}f&&Math.random()<.002&&(L.frena=1.3),L.frena>0&&(L.frena-=i,U=0),y&&w>0&&!A[w-1].o&&(e.s-L.s)*E<0;let P=L.v;if(L.v+=(U-L.v)*(1-Math.exp(-i*2)),L.a=(L.v-P)/Math.max(i,.001),L.s+=L.v*E*i,y){let V=(L.s-e.s)*E;V>-5&&V<6&&(L.s=e.s+E*(V>=0?6:-6))}Yd(t,L),L.g.visible=!0;let G=L.a<-.5||L.v<.5;L.stop.material=G?To:lr,L.glow.visible=G||Ct.noche,L.glow.scale.x=G?5.5:2.5,L.haz.visible=Ct.noche}}for(let v of t.motos){if((v.ci<0||v.ci>=t.calles.length)&&Xl(t,v,u,!0),v.ci<0){v.g.visible=!1;continue}let _=t.calles[v.ci],b=_.cum[_.cum.length-1];v.fase+=i,v.s+=v.vmax*v.dir*i;let E=Ee(_,v.s),x=Kl(t);if(v.s<=0||v.s>=b||Math.hypot(E.x-x.x,E.z-x.z)>380){Xl(t,v,u,!0);continue}{let y=_.nl||xs(_);v.carril=y-1,Yd(t,v,-(y>=2?_.w/(_.oneway?1:2)/y/2:Ao(_,0)*.5)+Math.sin(v.fase*.9)*.6)}v.g.visible=!0,v.haz.visible=Ct.noche}{let v=t.taxi,_=t.rastro,b=0,E=_.length-1,x=e.x,y=e.z,A=e.h,w=7.5+Math.min(6,Bt.v*.5);for(;E>0&&b<w;){let I=_[E][0]-_[E-1][0],L=_[E][1]-_[E-1][1],U=Math.hypot(I,L);if(b+U>=w){let P=(w-b)/U;x=_[E][0]-I*P,y=_[E][1]-L*P,A=en(I,L),b=w;break}b+=U,E--}b<w&&(x=e.x-Math.cos(e.h)*w,y=e.z+Math.sin(e.h)*w,A=e.h),v.g.position.set(x,e.y||0,y),v.g.rotation.y=A,v.g.visible=!0,v.stop.material=c?To:lr,v.glow.visible=c||Ct.noche,v.glow.scale.x=c?5.5:2.5,v.haz.visible=Ct.noche}my(i),py(i);let p=Kl(t),M=v=>Math.hypot(v.x-p.x,v.z-p.z)<520;{let v=[];for(let _ of t.troles)zd(_,i,12,12,1,0,1.75,8.5,v);nc(t.trole,v.filter(M))}{let v=[];for(let _ of t.mbs)zd(_,i,10,18,1,0,1.75,0,v);nc(t.mbus,v.filter(M))}if(ap(t.luces,On),fy(t,i),t.hitos&&t.hitos.sem&&$v(t.hitos.sem,On),t.radar){let v=Ct.foto&&Date.now()-Ct.foto<1500;t.radar.flash.visible=v&&Math.floor(On*10)%2===0,t.radar.led.material.color.setHex(Math.floor(On*2)%2?16722458:5570560)}let g=new N;ze.getWorldDirection(g);let m=-g.z,S=g.x;for(let v of t.etiquetas)v.rotation.y=v.userData.base+(v.userData.dx*m+v.userData.dz*S<0?Math.PI:0)}function py(i){let t=Zt,e=t.tren,n=new oe,s=new Xe,r=new N,o=new N(1,1,1),a=new N(0,1,0),l=0,c=16;for(let h of t.rieles){h.t+=i;let u=h.cum[h.cum.length-1],f=h.vagones*15.3,d=h.periodo*c;for(let p of[1,-1]){let M=p*1.75,g=(h.t+(p<0?h.periodo/2:0))*c%Math.max(d,u+f+60),m=Math.max(d,u+f+60);for(let S=0;S*d<m&&S<40;S++){let v=(g+S*d)%m-30;for(let _=0;_<h.vagones&&l<400;_++){let b=v-_*15.3;if(b<0||b>u)continue;p<0&&(b=u-b);let E=Ee(h,b),x=E.dx*p,y=E.dz*p;Math.hypot(E.x-t.pj.x,E.z-t.pj.z)>600||(r.set(E.x-y*M,h.y,E.z+x*M),s.setFromAxisAngle(a,en(x,y)),e.setMatrixAt(l++,n.compose(r,s,o)))}}}}e.count=l,e.instanceMatrix.needsUpdate=!0}function my(i){let t=Zt,e=t.pj;if(!t.cruce){let a=new _e,l=[];for(let m=-8;m<=8;m++)l.push(new Re(3.2,.6).rotateX(-Math.PI/2).translate(0,0,m*1.1));let c=new st(we(l),new xe({color:15921906}));c.position.y=.07,a.add(c);let h=new _e,u=new At({color:3882821}),f=new st(new he(.12,.14,6,8),u);f.position.y=3,h.add(f);let d=new st(new Gt(.45,1.5,.55),new At({color:1908514}));d.position.set(-.1,5.2,0),h.add(d);let p=new st(new Pn(.2,10,8),new xe({color:16722458}));p.position.set(-.36,5.68,0),h.add(p),[.47,.94].forEach(m=>{let S=new st(new Pn(.17,10,8),new xe({color:2236962}));S.position.set(-.36,5.68-m,0),h.add(S)}),a.add(h);let M=[15029053,3120750,8084694,14722342],g=[0,1,2,3].map(m=>{let S=new _e,v=new st(new he(.22,.26,.95,8),new At({color:M[m]}));v.position.y=1.15,v.castShadow=!0;let _=new st(new he(.2,.18,.7,8),new At({color:2899543}));_.position.y=.35;let b=new st(new Pn(.2,10,8),new At({color:13209186}));b.position.y=1.85;let E=new st(new Gt(.12,.5,.12),new xe({color:16765952}));return E.position.y=2.6,E.visible=!1,S.add(v,_,b,E),a.add(S),{g:S,su:E,z:0,dir:1,modo:"espera",t:m*.9,x:(m-1.5)*.7}});Je.add(a),t.cruce={g:a,sem:h,peat:g,cm:c,activo:!1,mitad:8}}let n=t.cruce;if(!Ct.rojo||(e.y||0)>1){n.g.visible=!1,n.activo=!1;return}if(!n.activo){n.activo=!0;let a=e.ci>=0?t.calles[e.ci]:null,l=a?a.w:10;n.mitad=l/2+1.3;let c=Math.cos(e.h),h=-Math.sin(e.h);n.g.position.set(e.tx+c*7,0,e.tz+h*7),n.g.rotation.y=e.h,n.cm.scale.z=Math.max(.5,l/18),n.sem.position.set(-1.5,0,n.mitad-.3),n.peat.forEach((u,f)=>{u.z=(f%2?1:-1)*n.mitad,u.dir=-Math.sign(u.z),u.modo="espera",u.t=f*.9})}n.g.visible=!0,n.g.updateMatrixWorld();let s=new oe().copy(n.g.matrixWorld).invert(),r=new N,o=a=>t.motos.some(l=>(r.copy(l.g.position).applyMatrix4(s),r.x>-16&&r.x<1.5&&Math.abs(r.z-a)<1.6));for(let a of n.peat){if(a.modo==="espera")a.t-=i,a.t<=0&&!o(a.z+a.dir*2)&&(a.modo="cruza");else if(a.modo==="cruza"){let l=a.z+a.dir*1.4*i;o(l+a.dir*1.2)&&Math.abs(a.z)<n.mitad-.5?(a.modo="huye",a.dir=-a.dir):(a.z=l,Math.abs(a.z)>=n.mitad&&Math.sign(a.z)===Math.sign(a.dir)&&(a.modo="espera",a.t=2+Math.random()*3,a.dir=-Math.sign(a.z)))}else a.z+=a.dir*3.4*i,Math.abs(a.z)>=n.mitad&&(a.modo="espera",a.t=1.2+Math.random()*1.5,a.dir=-Math.sign(a.z));a.g.position.set(a.x,a.modo!=="espera"?Math.abs(Math.sin(On*(a.modo==="huye"?16:9)))*.08:0,a.z),a.su.visible=a.modo==="huye"}}var fe=null,qi=new Map,wi=null,Jd=0;function pp(i,t,e){return{lat:i.lat-e/up,lon:i.lon+t/(111320*Math.cos(i.lat*Math.PI/180))}}function oc(){let[i,t]=Ue(Zt.O,fe.lat,fe.lon);return{x:i,z:t}}function Kl(i){return fe?oc():{x:i.pj.x,z:i.pj.z}}function sc(){return!!(Zt&&Zt.listo&&Ct.pos&&Zt.pj)}function qh(){return fe?!0:sc()?(fe={...pp(Zt.O,Zt.pj.x,Zt.pj.z),h:Zt.pj.h,z:1},hu(!0),!0):!1}function iu(){fe=null,hu(!1),ql(),jl(!0)}function hu(i){He&&(wi||(wi=document.createElement("button"),wi.type="button",wi.textContent="\u{1F4CD} Volver a mi carro",wi.style.cssText="position:absolute;right:10px;bottom:44px;z-index:4;padding:10px 14px;border-radius:999px;border:0;background:#1f6feb;color:#fff;font:600 15px system-ui,sans-serif;box-shadow:0 4px 14px rgba(0,0,0,.35);display:none",wi.onclick=t=>{t.stopPropagation(),iu()}),wi.parentNode!==He&&(getComputedStyle(He).position==="static"&&(He.style.position="relative"),He.appendChild(wi)),wi.style.display=i?"block":"none",lu())}function $d(i,t){let e=He&&He.clientHeight||300,n=45*fe.z/e,s=Math.cos(fe.h),r=-Math.sin(fe.h),o=-r,a=s,l=oc();l.x+=(s*t-o*i)*n,l.z+=(r*t-a*i)*n,Object.assign(fe,pp(Zt.O,l.x,l.z))}function jl(i){let t=performance.now();if(!(!i&&t-Jd<900)){Jd=t;try{window.__v3Explorar&&window.__v3Explorar(fe?{lat:fe.lat,lon:fe.lon}:null)}catch{}}}function gy(i){i.style.touchAction="none";for(let e of["touchstart","touchmove"])i.addEventListener(e,n=>{n.cancelable&&n.preventDefault()},{passive:!1});for(let e of["gesturestart","gesturechange"])i.addEventListener(e,n=>n.preventDefault());i.addEventListener("pointerdown",e=>{if(!sc()){try{window.__v3Explorar&&window.__v3Explorar({sinMapa:!0})}catch{}return}try{i.setPointerCapture(e.pointerId)}catch{}qi.set(e.pointerId,{x:e.clientX,y:e.clientY,x0:e.clientX,y0:e.clientY})}),i.addEventListener("pointermove",e=>{let n=qi.get(e.pointerId);if(n){if(qi.size===1){let s=e.clientX-n.x,r=e.clientY-n.y;if(!fe&&Math.hypot(e.clientX-n.x0,e.clientY-n.y0)<8)return;if(Fe==="propia"&&!fe){un.yaw-=s*.008,un.pitch=Math.max(.05,Math.min(1.5,un.pitch+r*.005)),n.x=e.clientX,n.y=e.clientY,e.preventDefault();return}if(!qh())return;e.buttons===2||e.shiftKey?fe.h-=s*.008:$d(s,r),n.x=e.clientX,n.y=e.clientY}else if(qi.size===2){let[s,r]=[...qi.values()],o=Math.hypot(s.x-r.x,s.y-r.y),a=Math.atan2(r.y-s.y,r.x-s.x),l=(s.x+r.x)/2,c=(s.y+r.y)/2;n.x=e.clientX,n.y=e.clientY;let h=Math.hypot(s.x-r.x,s.y-r.y),u=Math.atan2(r.y-s.y,r.x-s.x),f=(s.x+r.x)/2,d=(s.y+r.y)/2;if(Fe==="propia"&&!fe){o>10&&h>10&&(un.dist=Math.max(6,Math.min(450,un.dist*o/h)));let M=u-a;M=Math.atan2(Math.sin(M),Math.cos(M)),un.yaw+=M,e.preventDefault();return}if(!qh())return;o>10&&h>10&&(fe.z=Math.max(.45,Math.min(14,fe.z*o/h)));let p=u-a;p=Math.atan2(Math.sin(p),Math.cos(p)),fe.h+=p,$d(f-l,d-c)}jl(),e.preventDefault()}});let t=e=>{qi.delete(e.pointerId)&&(!qi.size&&Fe==="propia"&&Qh(),!qi.size&&fe&&jl(!0))};i.addEventListener("pointerup",t),i.addEventListener("pointercancel",t),i.addEventListener("wheel",e=>{if(sc()){if(e.preventDefault(),Fe==="propia"&&!fe){un.dist=Math.max(6,Math.min(450,un.dist*Math.exp(e.deltaY*.0015))),Qh();return}qh()&&(fe.z=Math.max(.45,Math.min(14,fe.z*Math.exp(e.deltaY*.0015))),jl())}},{passive:!1}),i.addEventListener("contextmenu",e=>e.preventDefault())}function xy(i,t){if(!He)return;let e=document.createElement("div");e.textContent=i,e.style.cssText="position:absolute;left:50%;top:44%;transform:translate(-50%,-50%);z-index:4;max-width:86%;padding:10px 14px;border-radius:12px;background:#000c;color:#fff;font:600 15px system-ui,sans-serif;pointer-events:none;transition:opacity .6s;text-align:center",getComputedStyle(He).position==="static"&&(He.style.position="relative"),He.appendChild(e),setTimeout(()=>{e.style.opacity="0",setTimeout(()=>e.remove(),700)},t||3500)}var su=!1;function _y(){if(su||!He||!sc())return;su=!0;try{if(localStorage.getItem("v3pista")>="3")return;localStorage.setItem("v3pista",String(+(localStorage.getItem("v3pista")||0)+1))}catch{}let i=document.createElement("div");i.textContent="\u261D\uFE0F Arrastra con el dedo para recorrer las calles",i.style.cssText="position:absolute;left:50%;top:44%;transform:translate(-50%,-50%);z-index:4;padding:10px 14px;border-radius:12px;background:#000b;color:#fff;font:600 15px system-ui,sans-serif;pointer-events:none;transition:opacity .6s;text-align:center",getComputedStyle(He).position==="static"&&(He.style.position="relative"),He.appendChild(i),setTimeout(()=>{i.style.opacity="0",setTimeout(()=>i.remove(),700)},3500)}function vy(i){let t=oc(),e=Math.cos(fe.h),n=-Math.sin(fe.h),s=fe.z,r=9.5*s,o=6.4*Math.pow(s,1.12),a=14*Math.min(s,4),l=new N(t.x-e*r,o,t.z-n*r),c=new N(t.x+e*a,0,t.z+n*a),h=1-Math.exp(-i*10);Ci.lerp(l,h),Ii.lerp(c,h);let u=ze.aspect<1?68:50;ze.fov!==u&&(ze.fov=u,ze.updateProjectionMatrix()),ze.position.copy(Ci),ze.lookAt(Ii),Mn.position.set(t.x+25,45,t.z+30),Mn.target.position.set(t.x,0,t.z)}function Ai(i){if(su||_y(),fe){vy(i);return}let t=Zt.pj,[e,n,s,r,o=0]=Av[Fe],a=Math.cos(t.h),l=-Math.sin(t.h),c=-l,h=a,u=Fe==="atras"?0:3,f=t.y||0,d=new N(t.x+a*e+c*s,n+f,t.z+l*e+h*s),p=new N(t.x+a*r+c*u,o+f,t.z+l*r+h*u);if(Fe!=="propia"&&ip(d,t.x,f,t.z,p),Fe==="propia"){let M=t.h+Math.PI+un.yaw,g=un.dist*Math.cos(un.pitch),m=un.dist*Math.sin(un.pitch)+1.5;d.set(t.x+Math.cos(M)*g,f+m,t.z-Math.sin(M)*g),p.set(t.x+a*3,f+1,t.z+l*3)}else if(Fe!=="arriba"){let M=Math.max(0,Math.min(1,(f-.8)/4));Ai.fp=(Ai.fp||0)+(M-(Ai.fp||0))*(1-Math.exp(-i*1.5));let g=Ai.fp;g>.01&&(d.x-=a*16*g,d.z-=l*16*g,d.y+=20*g,p.x+=a*10*g,p.z+=l*10*g)}if(window.__altoDbg&&(d.set(t.x,window.__altoDbg,t.z+1),p.set(t.x,0,t.z)),window.__camDbg){let M=window.__camDbg;d.set(...M[0]),p.set(...M[1]),Ci.copy(d),Ii.copy(p)}if(!Ai.ini)Ci.copy(d),Ii.copy(p),Ai.ini=!0;else{let M=1-Math.exp(-i*2.5);Ci.lerp(d,M),Ii.lerp(p,M)}ze.position.copy(Ci),ze.lookAt(Ii),Mn.position.set(t.x+25,45,t.z+30),Mn.target.position.set(t.x,0,t.z)}window.Vista3D={disponible(){try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}},montar(i){Sn||(Iv(),gy(Sn.domElement)),He=i,Sn.domElement.parentNode!==i&&i.prepend(Sn.domElement),fe&&hu(!0),lu(),ir&&ir.disconnect(),ir=new ResizeObserver(ql),ir.observe(i),ql(),Dh||(Dh=!0,Eo=0,Zh=requestAnimationFrame(rp))},desmontar(){Dh=!1,cancelAnimationFrame(Zh),ir&&ir.disconnect()},actualizar(i){let t=Ct.viaje,e=Ct.noche;if(Object.assign(Ct,i),Ct.viaje&&!t&&(Ct._a=Bt?Bt.x+Ri:null),Ct.viaje||(Ct._a=null),!Sn)return;let n=Ct.nivel+Ct.zona+Ct.pico+Ct.metrobus;n!==jh?(jh=n,Qd(),ec()):Ct.noche!==e&&ec(),dp()},mapa(i){sy(i)},explorando(){return fe?{lat:fe.lat,lon:fe.lon}:null},dejarDeExplorar(){fe&&iu()},trafico(i){fp(i)},modo(){return Zt&&Zt.listo&&Ct.pos?"real":"muestra"},version:"V.27.11.26e",camara(){Fe=Oh[(Oh.indexOf(Fe)+1)%Oh.length];try{localStorage.setItem("vista3dCam3",Fe)}catch{}return fe&&iu(),ql(),Fe==="propia"&&xy("\u270B Vista personalizada: arrastra para girar e inclinar, pellizca para acercar o alejar. Se queda guardada y sigue a tu carro.",5500),Od[Fe]},nombreCamara(){return Od[Fe]},get _dbg(){return{jugador:Bt,vehs:wn,E:Ct,desplaz:Ri,REAL:Zt,cam:ze,ERR3D:Zl}}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

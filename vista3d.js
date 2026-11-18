(()=>{var yu=0,vc=1,Mu=2;var Gr=1,ba=2,Os=3,Ci=0,fn=1,we=2,Zi=0,Bs=1,ui=2,yc=3,Mc=4,Su=5;var Ji=100,bu=101,Eu=102,Tu=103,wu=104,Au=200,Ru=201,Cu=202,Iu=203,Sc=204,bc=205,Pu=206,Lu=207,Du=208,Nu=209,Uu=210,Fu=211,Ou=212,Bu=213,zu=214,Ho=0,Go=1,ko=2,Ts=3,Vo=4,Wo=5,Xo=6,qo=7,Ea=0,Hu=1,Gu=2,Zn=0,Ec=1,Tc=2,wc=3,Ac=4,Rc=5,Cc=6,Ic=7;var Pc=300,$i=301,zs=302,Ta=303,wa=304,Xi=1e3,Wn=1001,Yo=1002,Xe=1003,ku=1004;var kr=1005;var hn=1006,Aa=1007;var fi=1008;var mn=1009,Lc=1010,Dc=1011,Hs=1012,Ra=1013,On=1014,Cn=1015,Bn=1016,Ca=1017,Ia=1018,Ki=1020,Nc=35902,Uc=35899,Fc=1021,Oc=1022,zn=1023,oi=1026,di=1027,Pa=1028,La=1029,Ii=1030,Da=1031;var Na=1033,Vr=33776,Wr=33777,Xr=33778,qr=33779,Ua=35840,Fa=35841,Oa=35842,Ba=35843,za=36196,Ha=37492,Ga=37496,ka=37488,Va=37489,Yr=37490,Wa=37491,Xa=37808,qa=37809,Ya=37810,Za=37811,Ja=37812,$a=37813,Ka=37814,ja=37815,Qa=37816,tl=37817,el=37818,nl=37819,il=37820,sl=37821,rl=36492,ol=36494,al=36495,ll=36283,cl=36284,Zr=36285,hl=36286;var lr=2300,Zo=2301,Bo=2302,lc=2303,cc=2400,hc=2401,uc=2402;var Vu=3200;var ul=0,Wu=1,pi="",Ne="srgb",cr="srgb-linear",hr="linear",_e="srgb";var zo=7680;var Xu=519,qu=512,Yu=513,Zu=514,Bc=515,Ju=516,$u=517,zc=518,Hc=519,Gc=35044;var kc="300 es",An=2e3,ws=2001;function Ed(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Td(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ku(){let i=ur("canvas");return i.style.display="block",i}var Hh={},As=null;function fr(...i){let t="THREE."+i.shift();As?As("log",t,...i):console.log(t,...i)}function ju(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Kt(...i){i=ju(i);let t="THREE."+i.shift();if(As)As("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function jt(...i){i=ju(i);let t="THREE."+i.shift();if(As)As("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function rr(...i){let t=i.join(" ");t in Hh||(Hh[t]=!0,Kt(...i))}function Qu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var tf={[Ho]:Ho,[ko]:Xo,[Vo]:Vo,[Ts]:Wo,[Go]:Go,[Xo]:ko,[qo]:qo,[Wo]:Ts},Xn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fl=Math.PI/180,Jo=180/Math.PI;function Pi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function ce(i,t,e){return Math.max(t,Math.min(e,i))}function wd(i,t){return(i%t+t)%t}function Ol(i,t,e){return(1-e)*i+e*t}function ef(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function nf(i,t){if(t.constructor===Float32Array)return i;let e=fl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function sf(i,t){if(t.constructor===Float32Array)return i;let e=fl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var pt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$e=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],p=r[o+2],S=r[o+3];if(u!==S||l!==f||c!==d||h!==p){let g=l*f+c*d+h*p+u*S;g<0&&(f=-f,d=-d,p=-p,S=-S,g=-g);let m=1-a;if(g<.9995){let _=Math.acos(g),M=Math.sin(_);m=Math.sin(m*_)/M,a=Math.sin(a*_)/M,l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+S*a}else{l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+S*a;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Kt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bl.copy(this).projectOnVector(t),this.sub(Bl)}reflect(t){return this.sub(Bl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bl=new N,Gh=new $e,te=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],S=s[0],g=s[3],m=s[6],_=s[1],M=s[4],v=s[7],E=s[2],b=s[5],x=s[8];return r[0]=o*S+a*_+l*E,r[3]=o*g+a*M+l*b,r[6]=o*m+a*v+l*x,r[1]=c*S+h*_+u*E,r[4]=c*g+h*M+u*b,r[7]=c*m+h*v+u*x,r[2]=f*S+d*_+p*E,r[5]=f*g+d*M+p*b,r[8]=f*m+d*v+p*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=e*u+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/p;return t[0]=u*S,t[1]=(s*c-h*n)*S,t[2]=(a*n-s*o)*S,t[3]=f*S,t[4]=(h*e-s*l)*S,t[5]=(s*r-a*e)*S,t[6]=d*S,t[7]=(n*l-c*e)*S,t[8]=(o*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return rr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zl.makeScale(t,e)),this}rotate(t){return rr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zl.makeRotation(-t)),this}translate(t,e){return rr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},zl=new te,kh=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vh=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ad(){let i={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_e&&(s.r=ri(s.r),s.g=ri(s.g),s.b=ri(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(s.r=Es(s.r),s.g=Es(s.g),s.b=Es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pi?hr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cr]:{primaries:t,whitePoint:n,transfer:hr,toXYZ:kh,fromXYZ:Vh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:kh,fromXYZ:Vh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),i}var de=Ad();function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var os,$o=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{os===void 0&&(os=ur("canvas")),os.width=t.width,os.height=t.height;let s=os.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=os}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ur("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ri(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ri(e[n]/255)*255):e[n]=ri(e[n]);return{data:e,width:t.width,height:t.height}}else return Kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Rd=0,Rs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Pi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Hl(s[o].image)):r.push(Hl(s[o]))}else r=Hl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Hl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$o.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Kt("Texture: Unable to serialize Texture."),{})}var Cd=0,Gl=new N,un=class i extends Xn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Wn,s=Wn,r=hn,o=fi,a=zn,l=mn,c=i.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Pi(),this.name="",this.source=new Rs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Gl).x}get height(){return this.source.getSize(Gl).y}get depth(){return this.source.getSize(Gl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xi:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case Yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xi:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case Yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Pc;un.DEFAULT_ANISOTROPY=1;var Le=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],S=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-S)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+S)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,v=(d+1)/2,E=(m+1)/2,b=(h+f)/4,x=(u+S)/4,y=(p+g)/4;return M>v&&M>E?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=b/n,r=x/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=y/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=x/r,s=y/r),this.set(n,s,r,e),this}let _=Math.sqrt((g-p)*(g-p)+(u-S)*(u-S)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(u-S)/_,this.z=(f-h)/_,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ko=class extends Xn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new un({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Rs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},yn=class extends Ko{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},dr=class extends un{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var jo=class extends un{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ae=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,p,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,p,S,g)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,p,S,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=S,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/as.setFromMatrixColumn(t,0).length(),r=1/as.setFromMatrixColumn(t,1).length(),o=1/as.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,p=a*h,S=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-S*c,e[9]=-a*l,e[2]=S-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,S=c*u;e[0]=f+S*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=S+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,S=c*u;e[0]=f-S*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=S-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,p=a*h,S=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+S,e[1]=l*u,e[5]=S*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,S=a*c;e[0]=l*h,e[4]=S-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-S*u}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,S=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+S,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=S*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Id,t,Pd)}lookAt(t,e,n){let s=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),_i.crossVectors(n,_n),_i.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),_i.crossVectors(n,_n)),_i.normalize(),uo.crossVectors(_n,_i),s[0]=_i.x,s[4]=uo.x,s[8]=_n.x,s[1]=_i.y,s[5]=uo.y,s[9]=_n.y,s[2]=_i.z,s[6]=uo.z,s[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],S=n[6],g=n[10],m=n[14],_=n[3],M=n[7],v=n[11],E=n[15],b=s[0],x=s[4],y=s[8],R=s[12],A=s[1],I=s[5],U=s[9],H=s[13],P=s[2],B=s[6],Z=s[10],W=s[14],ut=s[3],J=s[7],nt=s[11],st=s[15];return r[0]=o*b+a*A+l*P+c*ut,r[4]=o*x+a*I+l*B+c*J,r[8]=o*y+a*U+l*Z+c*nt,r[12]=o*R+a*H+l*W+c*st,r[1]=h*b+u*A+f*P+d*ut,r[5]=h*x+u*I+f*B+d*J,r[9]=h*y+u*U+f*Z+d*nt,r[13]=h*R+u*H+f*W+d*st,r[2]=p*b+S*A+g*P+m*ut,r[6]=p*x+S*I+g*B+m*J,r[10]=p*y+S*U+g*Z+m*nt,r[14]=p*R+S*H+g*W+m*st,r[3]=_*b+M*A+v*P+E*ut,r[7]=_*x+M*I+v*B+E*J,r[11]=_*y+M*U+v*Z+E*nt,r[15]=_*R+M*H+v*W+E*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],S=t[7],g=t[11],m=t[15],_=l*d-c*f,M=a*d-c*u,v=a*f-l*u,E=o*d-c*h,b=o*f-l*h,x=o*u-a*h;return e*(S*_-g*M+m*v)-n*(p*_-g*E+m*b)+s*(p*M-S*E+m*x)-r*(p*v-S*b+g*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],S=t[13],g=t[14],m=t[15],_=e*a-n*o,M=e*l-s*o,v=e*c-r*o,E=n*l-s*a,b=n*c-r*a,x=s*c-r*l,y=h*S-u*p,R=h*g-f*p,A=h*m-d*p,I=u*g-f*S,U=u*m-d*S,H=f*m-d*g,P=_*H-M*U+v*I+E*A-b*R+x*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/P;return t[0]=(a*H-l*U+c*I)*B,t[1]=(s*U-n*H-r*I)*B,t[2]=(S*x-g*b+m*E)*B,t[3]=(f*b-u*x-d*E)*B,t[4]=(l*A-o*H-c*R)*B,t[5]=(e*H-s*A+r*R)*B,t[6]=(g*v-p*x-m*M)*B,t[7]=(h*x-f*v+d*M)*B,t[8]=(o*U-a*A+c*y)*B,t[9]=(n*A-e*U-r*y)*B,t[10]=(p*b-S*v+m*_)*B,t[11]=(u*v-h*b-d*_)*B,t[12]=(a*R-o*I-l*y)*B,t[13]=(e*I-n*R+s*y)*B,t[14]=(S*M-p*E-g*_)*B,t[15]=(h*E-u*M+f*_)*B,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,S=o*h,g=o*u,m=a*u,_=l*c,M=l*h,v=l*u,E=n.x,b=n.y,x=n.z;return s[0]=(1-(S+m))*E,s[1]=(d+v)*E,s[2]=(p-M)*E,s[3]=0,s[4]=(d-v)*b,s[5]=(1-(f+m))*b,s[6]=(g+_)*b,s[7]=0,s[8]=(p+M)*x,s[9]=(g-_)*x,s[10]=(1-(f+S))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=as.set(s[0],s[1],s[2]).length(),a=as.set(s[4],s[5],s[6]).length(),l=as.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Dn.copy(this);let c=1/o,h=1/a,u=1/l;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,e.setFromRotationMatrix(Dn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=An,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),p,S;if(l)p=r/(o-r),S=o*r/(o-r);else if(a===An)p=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===ws)p=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=An,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),p,S;if(l)p=1/(o-r),S=o/(o-r);else if(a===An)p=-2/(o-r),S=-(o+r)/(o-r);else if(a===ws)p=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},as=new N,Dn=new ae,Id=new N(0,0,0),Pd=new N(1,1,1),_i=new N,uo=new N,_n=new N,Wh=new ae,Xh=new $e,ai=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ai.DEFAULT_ORDER="XYZ";var pr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ld=0,qh=new N,ls=new $e,Qn=new ae,fo=new N,Js=new N,Dd=new N,Nd=new $e,Yh=new N(1,0,0),Zh=new N(0,1,0),Jh=new N(0,0,1),$h={type:"added"},Ud={type:"removed"},cs={type:"childadded",child:null},kl={type:"childremoved",child:null},Ke=class i extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new ai,n=new $e,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new te}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(Yh,t)}rotateY(t){return this.rotateOnAxis(Zh,t)}rotateZ(t){return this.rotateOnAxis(Jh,t)}translateOnAxis(t,e){return qh.copy(t).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yh,t)}translateY(t){return this.translateOnAxis(Zh,t)}translateZ(t){return this.translateOnAxis(Jh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fo.copy(t):fo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Js,fo,this.up):Qn.lookAt(fo,Js,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(Qn),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($h),cs.child=t,this.dispatchEvent(cs),cs.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ud),kl.child=t,this.dispatchEvent(kl),kl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($h),cs.child=t,this.dispatchEvent(cs),cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,t,Dd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,Nd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ke.DEFAULT_UP=new N(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Me=class extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fd={type:"move"},Cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let S of t.hand.values()){let g=e.getJointPose(S,n),m=this._getHandJoint(c,S);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},po={h:0,s:0,l:0};function Vl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var se=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=wd(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Vl(o,r,t+1/3),this.g=Vl(o,r,t),this.b=Vl(o,r,t-1/3)}return de.colorSpaceToWorking(this,s),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&Kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){let n=rf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ri(t.r),this.g=ri(t.g),this.b=ri(t.b),this}copyLinearToSRGB(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return de.workingToColorSpace(nn.copy(this),t),Math.round(ce(nn.r*255,0,255))*65536+Math.round(ce(nn.g*255,0,255))*256+Math.round(ce(nn.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(nn.copy(this),e);let n=nn.r,s=nn.g,r=nn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=Ne){de.workingToColorSpace(nn.copy(this),t);let e=nn.r,n=nn.g,s=nn.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(po);let n=Ol(vi.h,po.h,e),s=Ol(vi.s,po.s,e),r=Ol(vi.l,po.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new se;se.NAMES=rf;var mr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new se(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},gr=class extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Nn=new N,ti=new N,Wl=new N,ei=new N,hs=new N,us=new N,Kh=new N,Xl=new N,ql=new N,Yl=new N,Zl=new Le,Jl=new Le,$l=new Le,si=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Nn.subVectors(t,e),s.cross(Nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Nn.subVectors(s,e),ti.subVectors(n,e),Wl.subVectors(t,e);let o=Nn.dot(Nn),a=Nn.dot(ti),l=Nn.dot(Wl),c=ti.dot(ti),h=ti.dot(Wl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Zl.setScalar(0),Jl.setScalar(0),$l.setScalar(0),Zl.fromBufferAttribute(t,e),Jl.fromBufferAttribute(t,n),$l.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Zl,r.x),o.addScaledVector(Jl,r.y),o.addScaledVector($l,r.z),o}static isFrontFacing(t,e,n,s){return Nn.subVectors(n,e),ti.subVectors(t,e),Nn.cross(ti).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Nn.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;hs.subVectors(s,n),us.subVectors(r,n),Xl.subVectors(t,n);let l=hs.dot(Xl),c=us.dot(Xl);if(l<=0&&c<=0)return e.copy(n);ql.subVectors(t,s);let h=hs.dot(ql),u=us.dot(ql);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(hs,o);Yl.subVectors(t,r);let d=hs.dot(Yl),p=us.dot(Yl);if(p>=0&&d<=p)return e.copy(r);let S=d*c-l*p;if(S<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(us,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return Kh.subVectors(r,s),a=(u-h)/(u-h+(d-p)),e.copy(s).addScaledVector(Kh,a);let m=1/(g+S+f);return o=S*m,a=f*m,e.copy(n).addScaledVector(hs,o).addScaledVector(us,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qn=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mo.copy(n.boundingBox)),mo.applyMatrix4(t.matrixWorld),this.union(mo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($s),go.subVectors(this.max,$s),fs.subVectors(t.a,$s),ds.subVectors(t.b,$s),ps.subVectors(t.c,$s),yi.subVectors(ds,fs),Mi.subVectors(ps,ds),Hi.subVectors(fs,ps);let e=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-Hi.z,Hi.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,Hi.z,0,-Hi.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-Hi.y,Hi.x,0];return!Kl(e,fs,ds,ps,go)||(e=[1,0,0,0,1,0,0,0,1],!Kl(e,fs,ds,ps,go))?!1:(xo.crossVectors(yi,Mi),e=[xo.x,xo.y,xo.z],Kl(e,fs,ds,ps,go))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ni=[new N,new N,new N,new N,new N,new N,new N,new N],Un=new N,mo=new qn,fs=new N,ds=new N,ps=new N,yi=new N,Mi=new N,Hi=new N,$s=new N,go=new N,xo=new N,Gi=new N;function Kl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Gi.fromArray(i,r);let a=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),l=t.dot(Gi),c=e.dot(Gi),h=n.dot(Gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Be=new N,_o=new pt,Od=0,Je=class extends Xn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Od++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gc,this.updateRanges=[],this.gpuType=Cn,this.version=0,this._normalizationScale=t!==void 0?fl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_o.fromBufferAttribute(this,e),_o.applyMatrix3(t),this.setXY(e,_o.x,_o.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):nf(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):sf(t,this.array)}};var xr=class extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var _r=class extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var pe=class extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}},Bd=new qn,Ks=new N,jl=new N,bi=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Bd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);let e=Ks.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ks,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(jl)),this.expandByPoint(Ks.copy(t.center).sub(jl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},zd=0,wn=new ae,Ql=new Ke,ms=new N,vn=new qn,js=new qn,We=new N,Fe=class i extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ed(t)?_r:xr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,e,n){return wn.makeTranslation(t,e,n),this.applyMatrix4(wn),this}scale(t,e,n){return wn.makeScale(t,e,n),this.applyMatrix4(wn),this}lookAt(t){return Ql.lookAt(t),Ql.updateMatrix(),this.applyMatrix4(Ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];js.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(vn.min,js.min),vn.expandByPoint(We),We.addVectors(vn.max,js.max),vn.expandByPoint(We)):(vn.expandByPoint(js.min),vn.expandByPoint(js.max))}vn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)We.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(We));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)We.fromBufferAttribute(a,c),l&&(ms.fromBufferAttribute(t,c),We.add(ms)),s=Math.max(s,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Je(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)a[R]=new N,l[R]=new N;let h=new N,u=new N,f=new N,d=new pt,p=new pt,S=new pt,g=new N,m=new N;function _(R,A,I){c[R]=c[A]=c[I]=1,h.fromBufferAttribute(n,R),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,I),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,A),S.fromBufferAttribute(r,I),u.sub(h),f.sub(h),p.sub(d),S.sub(d);let U=1/(p.x*S.y-S.x*p.y);isFinite(U)&&(g.copy(u).multiplyScalar(S.y).addScaledVector(f,-p.y).multiplyScalar(U),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-S.x).multiplyScalar(U),a[R].add(g),a[A].add(g),a[I].add(g),l[R].add(m),l[A].add(m),l[I].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,A=M.length;R<A;++R){let I=M[R],U=I.start,H=I.count;for(let P=U,B=U+H;P<B;P+=3)_(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let v=new N,E=new N,b=new N,x=new N;function y(R){b.fromBufferAttribute(s,R),x.copy(b);let A=a[R];v.copy(A),v.sub(b.multiplyScalar(b.dot(A))).normalize(),E.crossVectors(x,A);let U=E.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,U)}for(let R=0,A=n.count;R<A;++R)c[R]&&y(R);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),S=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,S),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let S=0,g=l.length;S<g;S++){a.isInterleavedBufferAttribute?d=l[S]*a.data.stride+a.offset:d=l[S]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new Je(f,h,u)}if(this.index===null)return Kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},vr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Gc,this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=jh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=jh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function jh(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Pi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var ln=new N,Is=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?fl(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){fr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){fr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):nf(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):sf(t,this.data.array)}},tc=new N,Hd=new N,Gd=new te,Fn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=tc.subVectors(n,e).cross(Hd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(tc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Gd.getNormalMatrix(t),s=this.coplanarPoint(tc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},kd=0,li=class extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=Bs,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sc,this.blendDst=bc,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zo,this.stencilZFail=zo,this.stencilZPass=zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new se().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Fn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new pt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ci=class extends li{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},gs,Qs=new N,xs=new N,_s=new N,vs=new pt,tr=new pt,of=new ae,vo=new N,er=new N,yo=new N,Qh=new pt,ec=new pt,tu=new pt,Ei=class extends Ke{constructor(t=new ci){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new Fe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vr(e,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new Is(n,3,0,!1)),gs.setAttribute("uv",new Is(n,2,3,!1))}this.geometry=gs,this.material=t,this.center=new pt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),of.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_s.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-_s.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Mo(vo.set(-.5,-.5,0),_s,o,xs,s,r),Mo(er.set(.5,-.5,0),_s,o,xs,s,r),Mo(yo.set(.5,.5,0),_s,o,xs,s,r),Qh.set(0,0),ec.set(1,0),tu.set(1,1);let a=t.ray.intersectTriangle(vo,er,yo,!1,Qs);if(a===null&&(Mo(er.set(-.5,.5,0),_s,o,xs,s,r),ec.set(0,1),a=t.ray.intersectTriangle(vo,yo,er,!1,Qs),a===null))return;let l=t.ray.origin.distanceTo(Qs);l<t.near||l>t.far||e.push({distance:l,point:Qs.clone(),uv:si.getInterpolation(Qs,vo,er,yo,Qh,ec,tu,new pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Mo(i,t,e,n,s,r){vs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(tr.x=r*vs.x-s*vs.y,tr.y=s*vs.x+r*vs.y):tr.copy(vs),i.copy(t),i.x+=tr.x,i.y+=tr.y,i.applyMatrix4(of)}var ii=new N,nc=new N,So=new N,bo=new N,Qo=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){nc.copy(t).add(e).multiplyScalar(.5),So.copy(e).sub(t).normalize(),bo.copy(this.origin).sub(nc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(So),a=bo.dot(this.direction),l=-bo.dot(So),c=bo.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let S=1/h;u*=S,f*=S,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(nc).addScaledVector(So,f),d}intersectSphere(t,e){if(t.radius<0)return null;ii.subVectors(t.center,this.origin);let n=ii.dot(this.direction),s=ii.dot(ii)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,S=e.y-o.y,g=e.z-o.z,m=n.x-o.x,_=n.y-o.y,M=n.z-o.z,v=Math.abs(l),E=Math.abs(c),b=Math.abs(h),x,y,R,A,I,U,H,P,B,Z,W,ut;if(v>=E&&v>=b?(R=l,U=u,B=p,ut=m,l>=0?(x=c,y=h,A=f,I=d,H=S,P=g,Z=_,W=M):(x=h,y=c,A=d,I=f,H=g,P=S,Z=M,W=_)):E>=b?(R=c,U=f,B=S,ut=_,c>=0?(x=h,y=l,A=d,I=u,H=g,P=p,Z=M,W=m):(x=l,y=h,A=u,I=d,H=p,P=g,Z=m,W=M)):(R=h,U=d,B=g,ut=M,h>=0?(x=l,y=c,A=u,I=f,H=p,P=S,Z=m,W=_):(x=c,y=l,A=f,I=u,H=S,P=p,Z=_,W=m)),R===0)return null;let J=x/R,nt=y/R,st=1/R,Ft=A-J*U,qt=I-nt*U,K=H-J*B,Rt=P-nt*B,Ot=Z-J*ut,z=W-nt*ut,X=Ot*Rt-z*K,Y=Ft*z-qt*Ot,Ct=K*qt-Rt*Ft;if(s){if(X<0||Y<0||Ct<0)return null}else if((X<0||Y<0||Ct<0)&&(X>0||Y>0||Ct>0))return null;let j=X+Y+Ct;if(j===0)return null;let at=st*(X*U+Y*B+Ct*ut);return(j>0?at<0:at>0)?null:this.at(at/j,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ge=class extends li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},eu=new ae,ki=new Qo,Eo=new bi,nu=new N,To=new N,wo=new N,Ao=new N,ic=new N,Ro=new N,iu=new N,Co=new N,gt=class extends Ke{constructor(t=new Fe,e=new ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ro.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(ic.fromBufferAttribute(u,t),o?Ro.addScaledVector(ic,h):Ro.addScaledVector(ic.sub(e),h))}e.add(Ro)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(Eo.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Eo,nu)===null||ki.origin.distanceToSquared(nu)>(t.far-t.near)**2))&&(eu.copy(r).invert(),ki.copy(t.ray).applyMatrix4(eu),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,S=f.length;p<S;p++){let g=f[p],m=o[g.materialIndex],_=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=_,E=M;v<E;v+=3){let b=a.getX(v),x=a.getX(v+1),y=a.getX(v+2);s=Io(this,m,t,n,c,h,u,b,x,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),S=Math.min(a.count,d.start+d.count);for(let g=p,m=S;g<m;g+=3){let _=a.getX(g),M=a.getX(g+1),v=a.getX(g+2);s=Io(this,o,t,n,c,h,u,_,M,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,S=f.length;p<S;p++){let g=f[p],m=o[g.materialIndex],_=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=_,E=M;v<E;v+=3){let b=v,x=v+1,y=v+2;s=Io(this,m,t,n,c,h,u,b,x,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let g=p,m=S;g<m;g+=3){let _=g,M=g+1,v=g+2;s=Io(this,o,t,n,c,h,u,_,M,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Vd(i,t,e,n,s,r,o,a){let l;if(t.side===fn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ci,a),l===null)return null;Co.copy(a),Co.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Co);return c<e.near||c>e.far?null:{distance:c,point:Co.clone(),object:i}}function Io(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,To),i.getVertexPosition(l,wo),i.getVertexPosition(c,Ao);let h=Vd(i,t,e,n,To,wo,Ao,iu);if(h){let u=new N;si.getBarycoord(iu,To,wo,Ao,u),s&&(h.uv=si.getInterpolatedAttribute(s,a,l,c,u,new pt)),r&&(h.uv1=si.getInterpolatedAttribute(r,a,l,c,u,new pt)),o&&(h.normal=si.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new N,materialIndex:0};si.getNormal(To,wo,Ao,f.normal),h.face=f,h.barycoord=u}return h}var yr=class extends un{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Xe,h=Xe,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ps=class extends Je{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ys=new ae,su=new ae,Po=[],ru=new qn,Wd=new ae,nr=new gt,ir=new bi,ze=class extends gt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ps(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Wd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ys),ru.copy(t.boundingBox).applyMatrix4(ys),this.boundingBox.union(ru)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ys),ir.copy(t.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(ir)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(n),t.ray.intersectsSphere(ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ys),su.multiplyMatrices(n,ys),nr.matrixWorld=su,nr.raycast(t,Po);for(let o=0,a=Po.length;o<a;o++){let l=Po[o];l.instanceId=r,l.object=this,e.push(l)}Po.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ps(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new yr(new Float32Array(s*this.count),s,this.count,Pa,Cn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vi=new bi,Xd=new pt(.5,.5),Lo=new N,Ti=class{constructor(t=new Fn,e=new Fn,n=new Fn,s=new Fn,r=new Fn,o=new Fn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],S=r[9],g=r[10],m=r[11],_=r[12],M=r[13],v=r[14],E=r[15];if(s[0].setComponents(c-o,d-h,m-p,E-_).normalize(),s[1].setComponents(c+o,d+h,m+p,E+_).normalize(),s[2].setComponents(c+a,d+u,m+S,E+M).normalize(),s[3].setComponents(c-a,d-u,m-S,E-M).normalize(),n)s[4].setComponents(l,f,g,v).normalize(),s[5].setComponents(c-l,d-f,m-g,E-v).normalize();else if(s[4].setComponents(c-l,d-f,m-g,E-v).normalize(),e===An)s[5].setComponents(c+l,d+f,m+g,E+v).normalize();else if(e===ws)s[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(t){Vi.center.set(0,0,0);let e=Xd.distanceTo(t.center);return Vi.radius=.7071067811865476+e,Vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Lo.x=s.normal.x>0?t.max.x:t.min.x,Lo.y=s.normal.y>0?t.max.y:t.min.y,Lo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ou=new ae,ta=class i{constructor(){this.coordinateSystem=An,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];ou.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ti),n[s].setFromProjectionMatrix(ou,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ti),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Mr=class extends un{constructor(t=[],e=$i,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Mn=class extends un{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hi=class extends un{constructor(t,e,n=On,s,r,o,a=Xe,l=Xe,c,h=oi,u=1){if(h!==oi&&h!==di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Rs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Sr=class extends hi{constructor(t,e=On,n=$i,s,r,o=Xe,a=Xe,l,c=oi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},br=class extends un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ne=class i extends Fe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(u,2));function p(S,g,m,_,M,v,E,b,x,y,R){let A=v/x,I=E/y,U=v/2,H=E/2,P=b/2,B=x+1,Z=y+1,W=0,ut=0,J=new N;for(let nt=0;nt<Z;nt++){let st=nt*I-H;for(let Ft=0;Ft<B;Ft++){let qt=Ft*A-U;J[S]=qt*_,J[g]=st*M,J[m]=P,c.push(J.x,J.y,J.z),J[S]=0,J[g]=0,J[m]=b>0?1:-1,h.push(J.x,J.y,J.z),u.push(Ft/x),u.push(1-nt/y),W+=1}}for(let nt=0;nt<y;nt++)for(let st=0;st<x;st++){let Ft=f+st+B*nt,qt=f+st+B*(nt+1),K=f+(st+1)+B*(nt+1),Rt=f+(st+1)+B*nt;l.push(Ft,qt,Rt),l.push(qt,K,Rt),ut+=6}a.addGroup(d,ut,R),d+=ut,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Er=class i extends Fe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new N,h=new pt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(a,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Te=class i extends Fe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,S=[],g=n/2,m=0;_(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(f,3)),this.setAttribute("uv",new pe(d,2));function _(){let v=new N,E=new N,b=0,x=(e-t)/n;for(let y=0;y<=r;y++){let R=[],A=y/r,I=A*(e-t)+t;for(let U=0;U<=s;U++){let H=U/s,P=H*l+a,B=Math.sin(P),Z=Math.cos(P);E.x=I*B,E.y=-A*n+g,E.z=I*Z,u.push(E.x,E.y,E.z),v.set(B,x,Z).normalize(),f.push(v.x,v.y,v.z),d.push(H,1-A),R.push(p++)}S.push(R)}for(let y=0;y<s;y++)for(let R=0;R<r;R++){let A=S[R][y],I=S[R+1][y],U=S[R+1][y+1],H=S[R][y+1];(t>0||R!==0)&&(h.push(A,I,H),b+=3),(e>0||R!==r-1)&&(h.push(I,U,H),b+=3)}c.addGroup(m,b,0),m+=b}function M(v){let E=p,b=new pt,x=new N,y=0,R=v===!0?t:e,A=v===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,g*A,0),f.push(0,A,0),d.push(.5,.5),p++;let I=p;for(let U=0;U<=s;U++){let P=U/s*l+a,B=Math.cos(P),Z=Math.sin(P);x.x=R*Z,x.y=g*A,x.z=R*B,u.push(x.x,x.y,x.z),f.push(0,A,0),b.x=B*.5+.5,b.y=Z*.5*A+.5,d.push(b.x,b.y),p++}for(let U=0;U<s;U++){let H=E+U,P=I+U;v===!0?h.push(P,P+1,H):h.push(P+1,P,H),y+=3}c.addGroup(m,y,v===!0?1:2),m+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Tr=class i extends Te{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ea=class i extends Fe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new pe(r,3)),this.setAttribute("normal",new pe(r.slice(),3)),this.setAttribute("uv",new pe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let M=new N,v=new N,E=new N;for(let b=0;b<e.length;b+=3)d(e[b+0],M),d(e[b+1],v),d(e[b+2],E),l(M,v,E,_)}function l(_,M,v,E){let b=E+1,x=[];for(let y=0;y<=b;y++){x[y]=[];let R=_.clone().lerp(v,y/b),A=M.clone().lerp(v,y/b),I=b-y;for(let U=0;U<=I;U++)U===0&&y===b?x[y][U]=R:x[y][U]=R.clone().lerp(A,U/I)}for(let y=0;y<b;y++)for(let R=0;R<2*(b-y)-1;R++){let A=Math.floor(R/2);R%2===0?(f(x[y][A+1]),f(x[y+1][A]),f(x[y][A])):(f(x[y][A+1]),f(x[y+1][A+1]),f(x[y+1][A]))}}function c(_){let M=new N;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(_),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){let _=new N;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];let v=g(_)/2/Math.PI+.5,E=m(_)/Math.PI+.5;o.push(v,1-E)}p(),u()}function u(){for(let _=0;_<o.length;_+=6){let M=o[_+0],v=o[_+2],E=o[_+4],b=Math.max(M,v,E),x=Math.min(M,v,E);b>.9&&x<.1&&(M<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),E<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function d(_,M){let v=_*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function p(){let _=new N,M=new N,v=new N,E=new N,b=new pt,x=new pt,y=new pt;for(let R=0,A=0;R<r.length;R+=9,A+=6){_.set(r[R+0],r[R+1],r[R+2]),M.set(r[R+3],r[R+4],r[R+5]),v.set(r[R+6],r[R+7],r[R+8]),b.set(o[A+0],o[A+1]),x.set(o[A+2],o[A+3]),y.set(o[A+4],o[A+5]),E.copy(_).add(M).add(v).divideScalar(3);let I=g(E);S(b,A+0,_,I),S(x,A+2,M,I),S(y,A+4,v,I)}}function S(_,M,v,E){E<0&&_.x===1&&(o[M]=_.x-1),v.x===0&&v.z===0&&(o[M]=E/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new pt:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new N,s=[],r=[],o=[],a=new N,l=new ae;for(let d=0;d<=t;d++){let p=d/t;s[d]=this.getTangentAt(p,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ce(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ce(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Ls=class extends Sn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new pt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},na=class extends Ls{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Vc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var au=new N,lu=new N,sc=new Vc,rc=new Vc,oc=new Vc,ia=class extends Sn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(lu.subVectors(s[0],s[1]).add(s[0]),c=lu);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(au.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=au),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),S=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);S<1e-4&&(S=1),p<1e-4&&(p=S),g<1e-4&&(g=S),sc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,S,g),rc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,S,g),oc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,S,g)}else this.curveType==="catmullrom"&&(sc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),rc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),oc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(sc.calc(l),rc.calc(l),oc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function cu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function qd(i,t){let e=1-i;return e*e*t}function Yd(i,t){return 2*(1-i)*i*t}function Zd(i,t){return i*i*t}function or(i,t,e,n){return qd(i,t)+Yd(i,e)+Zd(i,n)}function Jd(i,t){let e=1-i;return e*e*e*t}function $d(i,t){let e=1-i;return 3*e*e*i*t}function Kd(i,t){return 3*(1-i)*i*i*t}function jd(i,t){return i*i*i*t}function ar(i,t,e,n,s){return Jd(i,t)+$d(i,e)+Kd(i,n)+jd(i,s)}var wr=class extends Sn{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ar(t,s.x,r.x,o.x,a.x),ar(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},sa=class extends Sn{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ar(t,s.x,r.x,o.x,a.x),ar(t,s.y,r.y,o.y,a.y),ar(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ar=class extends Sn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ra=class extends Sn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rr=class extends Sn{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(or(t,s.x,r.x,o.x),or(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oa=class extends Sn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(or(t,s.x,r.x,o.x),or(t,s.y,r.y,o.y),or(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cr=class extends Sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(cu(a,l.x,c.x,h.x,u.x),cu(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new pt().fromArray(s))}return this}},fc=Object.freeze({__proto__:null,ArcCurve:na,CatmullRomCurve3:ia,CubicBezierCurve:wr,CubicBezierCurve3:sa,EllipseCurve:Ls,LineCurve:Ar,LineCurve3:ra,QuadraticBezierCurve:Rr,QuadraticBezierCurve3:oa,SplineCurve:Cr}),aa=class extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new fc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Ir=class extends aa{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ar(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Rr(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new wr(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Cr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Ls(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},qi=class extends Ir{constructor(t){super(t),this.uuid=Pi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ir().fromJSON(s))}return this}};function Qd(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=af(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=sp(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<s;f+=e){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Pr(r,o,e,a,l,c,0),o}function af(i,t,e,n,s){let r;if(s===mp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=hu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=hu(o/n|0,i[o],i[o+1],r);return r&&Ds(r,r.next)&&(Dr(r),r=r.next),r}function Yi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ds(e,e.next)||Ue(e.prev,e,e.next)===0)){if(Dr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Pr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&cp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?ep(i,n,s,r):tp(i)){t.push(l.i,i.i,c.i),Dr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=np(Yi(i),t),Pr(i,t,e,n,s,r,2)):o===2&&ip(i,t,e,n,s,r):Pr(Yi(i),t,e,n,s,r,1);break}}}function tp(i){let t=i.prev,e=i,n=i.next;if(Ue(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&sr(s,a,r,l,o,c,p.x,p.y)&&Ue(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ep(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ue(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),S=Math.max(a,l,c),g=Math.max(h,u,f),m=dc(d,p,t,e,n),_=dc(S,g,t,e,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=m&&v&&v.z<=_;){if(M.x>=d&&M.x<=S&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&sr(a,h,l,u,c,f,M.x,M.y)&&Ue(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=d&&v.x<=S&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&sr(a,h,l,u,c,f,v.x,v.y)&&Ue(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=m;){if(M.x>=d&&M.x<=S&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&sr(a,h,l,u,c,f,M.x,M.y)&&Ue(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=_;){if(v.x>=d&&v.x<=S&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&sr(a,h,l,u,c,f,v.x,v.y)&&Ue(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function np(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ds(n,s)&&cf(n,e,e.next,s)&&Lr(n,s)&&Lr(s,n)&&(t.push(n.i,e.i,s.i),Dr(e),Dr(e.next),e=i=s),e=e.next}while(e!==i);return Yi(e)}function ip(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&fp(o,a)){let l=hf(o,a);o=Yi(o,o.next),l=Yi(l,l.next),Pr(o,t,e,n,s,r,0),Pr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function sp(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=af(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(up(c))}s.sort(rp);for(let r=0;r<s.length;r++)e=op(s[r],e);return e}function rp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function op(i,t){let e=ap(i,t);if(!e)return t;let n=hf(e,i);return Yi(n,n.next),Yi(e,e.next)}function ap(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Ds(i,e))return e;do{if(Ds(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&lf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);Lr(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&lp(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function lp(i,t){return Ue(i.prev,i,t.prev)<0&&Ue(t.next,i,i.next)<0}function cp(i,t,e,n){let s=i;do s.z===0&&(s.z=dc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,hp(s)}function hp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function dc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function up(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function lf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function sr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&lf(i,t,e,n,s,r,o,a)}function fp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!dp(i,t)&&(Lr(i,t)&&Lr(t,i)&&pp(i,t)&&(Ue(i.prev,i,t.prev)||Ue(i,t.prev,t))||Ds(i,t)&&Ue(i.prev,i,i.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ds(i,t){return i.x===t.x&&i.y===t.y}function cf(i,t,e,n){let s=No(Ue(i,t,e)),r=No(Ue(i,t,n)),o=No(Ue(e,n,i)),a=No(Ue(e,n,t));return!!(s!==r&&o!==a||s===0&&Do(i,e,t)||r===0&&Do(i,n,t)||o===0&&Do(e,i,n)||a===0&&Do(e,t,n))}function Do(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function No(i){return i>0?1:i<0?-1:0}function dp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&cf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Lr(i,t){return Ue(i.prev,i,i.next)<0?Ue(i,t,i.next)>=0&&Ue(i,i.prev,t)>=0:Ue(i,t,i.prev)<0||Ue(i,i.next,t)<0}function pp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function hf(i,t){let e=pc(i.i,i.x,i.y),n=pc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function hu(i,t,e,n){let s=pc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Dr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function pc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var mc=class{static triangulate(t,e,n=2){return Qd(t,e,n)}},Wi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];uu(t),fu(n,t);let o=t.length;e.forEach(uu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,fu(n,e[l]);let a=mc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function uu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function fu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ns=class i extends Fe{constructor(t=new qi([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new pe(s,3)),this.setAttribute("uv",new pe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:gp,M,v=!1,E,b,x,y;if(m){M=m.getSpacedPoints(h),v=!0,f=!1;let O=m.isCatmullRomCurve3?m.closed:!1;E=m.computeFrenetFrames(h,O),b=new N,x=new N,y=new N}f||(g=0,d=0,p=0,S=0);let R=a.extractPoints(c),A=R.shape,I=R.holes;if(!Wi.isClockWise(A)){A=A.reverse();for(let O=0,lt=I.length;O<lt;O++){let ot=I[O];Wi.isClockWise(ot)&&(I[O]=ot.reverse())}}function H(O){let ot=10000000000000001e-36,_t=O[0];for(let dt=1;dt<=O.length;dt++){let rt=dt%O.length,ht=O[rt],St=ht.x-_t.x,Pt=ht.y-_t.y,Yt=St*St+Pt*Pt,L=Math.max(Math.abs(ht.x),Math.abs(ht.y),Math.abs(_t.x),Math.abs(_t.y)),ie=ot*L*L;if(Yt<=ie){O.splice(rt,1),dt--;continue}_t=ht}}H(A),I.forEach(H);let P=I.length,B=A;for(let O=0;O<P;O++){let lt=I[O];A=A.concat(lt)}function Z(O,lt,ot){return lt||jt("ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(lt,ot)}let W=A.length;function ut(O,lt,ot){let _t,dt,rt,ht=O.x-lt.x,St=O.y-lt.y,Pt=ot.x-O.x,Yt=ot.y-O.y,L=ht*ht+St*St,ie=ht*Yt-St*Pt;if(Math.abs(ie)>Number.EPSILON){let kt=Math.sqrt(L),he=Math.sqrt(Pt*Pt+Yt*Yt),vt=lt.x-St/kt,Re=lt.y+ht/kt,Bt=ot.x-Yt/he,Vt=ot.y+Pt/he,C=((Bt-vt)*Yt-(Vt-Re)*Pt)/(ht*Yt-St*Pt);_t=vt+ht*C-O.x,dt=Re+St*C-O.y;let T=_t*_t+dt*dt;if(T<=2)return new pt(_t,dt);rt=Math.sqrt(T/2)}else{let kt=!1;ht>Number.EPSILON?Pt>Number.EPSILON&&(kt=!0):ht<-Number.EPSILON?Pt<-Number.EPSILON&&(kt=!0):Math.sign(St)===Math.sign(Yt)&&(kt=!0),kt?(_t=-St,dt=ht,rt=Math.sqrt(L)):(_t=ht,dt=St,rt=Math.sqrt(L/2))}return new pt(_t/rt,dt/rt)}let J=[];for(let O=0,lt=B.length,ot=lt-1,_t=O+1;O<lt;O++,ot++,_t++)ot===lt&&(ot=0),_t===lt&&(_t=0),J[O]=ut(B[O],B[ot],B[_t]);let nt=[],st,Ft=J.concat();for(let O=0,lt=P;O<lt;O++){let ot=I[O];st=[];for(let _t=0,dt=ot.length,rt=dt-1,ht=_t+1;_t<dt;_t++,rt++,ht++)rt===dt&&(rt=0),ht===dt&&(ht=0),st[_t]=ut(ot[_t],ot[rt],ot[ht]);nt.push(st),Ft=Ft.concat(st)}let qt;if(g===0)qt=Wi.triangulateShape(B,I);else{let O=[],lt=[];for(let ot=0;ot<g;ot++){let _t=ot/g,dt=d*Math.cos(_t*Math.PI/2),rt=p*Math.sin(_t*Math.PI/2)+S;for(let ht=0,St=B.length;ht<St;ht++){let Pt=Z(B[ht],J[ht],rt);Y(Pt.x,Pt.y,-dt),_t===0&&O.push(Pt)}for(let ht=0,St=P;ht<St;ht++){let Pt=I[ht];st=nt[ht];let Yt=[];for(let L=0,ie=Pt.length;L<ie;L++){let kt=Z(Pt[L],st[L],rt);Y(kt.x,kt.y,-dt),_t===0&&Yt.push(kt)}_t===0&&lt.push(Yt)}}qt=Wi.triangulateShape(O,lt)}let K=qt.length,Rt=p+S;for(let O=0;O<W;O++){let lt=f?Z(A[O],Ft[O],Rt):A[O];v?(x.copy(E.normals[0]).multiplyScalar(lt.x),b.copy(E.binormals[0]).multiplyScalar(lt.y),y.copy(M[0]).add(x).add(b),Y(y.x,y.y,y.z)):Y(lt.x,lt.y,0)}for(let O=1;O<=h;O++)for(let lt=0;lt<W;lt++){let ot=f?Z(A[lt],Ft[lt],Rt):A[lt];v?(x.copy(E.normals[O]).multiplyScalar(ot.x),b.copy(E.binormals[O]).multiplyScalar(ot.y),y.copy(M[O]).add(x).add(b),Y(y.x,y.y,y.z)):Y(ot.x,ot.y,u/h*O)}for(let O=g-1;O>=0;O--){let lt=O/g,ot=d*Math.cos(lt*Math.PI/2),_t=p*Math.sin(lt*Math.PI/2)+S;for(let dt=0,rt=B.length;dt<rt;dt++){let ht=Z(B[dt],J[dt],_t);Y(ht.x,ht.y,u+ot)}for(let dt=0,rt=I.length;dt<rt;dt++){let ht=I[dt];st=nt[dt];for(let St=0,Pt=ht.length;St<Pt;St++){let Yt=Z(ht[St],st[St],_t);v?Y(Yt.x,Yt.y+M[h-1].y,M[h-1].x+ot):Y(Yt.x,Yt.y,u+ot)}}}Ot(),z();function Ot(){let O=s.length/3;if(f){let lt=0,ot=W*lt;for(let _t=0;_t<K;_t++){let dt=qt[_t];Ct(dt[2]+ot,dt[1]+ot,dt[0]+ot)}lt=h+g*2,ot=W*lt;for(let _t=0;_t<K;_t++){let dt=qt[_t];Ct(dt[0]+ot,dt[1]+ot,dt[2]+ot)}}else{for(let lt=0;lt<K;lt++){let ot=qt[lt];Ct(ot[2],ot[1],ot[0])}for(let lt=0;lt<K;lt++){let ot=qt[lt];Ct(ot[0]+W*h,ot[1]+W*h,ot[2]+W*h)}}n.addGroup(O,s.length/3-O,0)}function z(){let O=s.length/3,lt=0;X(B,lt),lt+=B.length;for(let ot=0,_t=I.length;ot<_t;ot++){let dt=I[ot];X(dt,lt),lt+=dt.length}n.addGroup(O,s.length/3-O,1)}function X(O,lt){let ot=O.length;for(;--ot>=0;){let _t=ot,dt=ot-1;dt<0&&(dt=O.length-1);for(let rt=0,ht=h+g*2;rt<ht;rt++){let St=W*rt,Pt=W*(rt+1),Yt=lt+_t+St,L=lt+dt+St,ie=lt+dt+Pt,kt=lt+_t+Pt;j(Yt,L,ie,kt)}}}function Y(O,lt,ot){l.push(O),l.push(lt),l.push(ot)}function Ct(O,lt,ot){at(O),at(lt),at(ot);let _t=s.length/3,dt=_.generateTopUV(n,s,_t-3,_t-2,_t-1);ct(dt[0]),ct(dt[1]),ct(dt[2])}function j(O,lt,ot,_t){at(O),at(lt),at(_t),at(lt),at(ot),at(_t);let dt=s.length/3,rt=_.generateSideWallUV(n,s,dt-6,dt-3,dt-2,dt-1);ct(rt[0]),ct(rt[1]),ct(rt[3]),ct(rt[1]),ct(rt[2]),ct(rt[3])}function at(O){s.push(l[O*3+0]),s.push(l[O*3+1]),s.push(l[O*3+2])}function ct(O){r.push(O.x),r.push(O.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return xp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new fc[s.type]().fromJSON(s)),new i(n,t.options)}},gp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new pt(r,o),new pt(a,l),new pt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],p=t[s*3+2],S=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new pt(o,1-l),new pt(c,1-u),new pt(f,1-p),new pt(S,1-m)]:[new pt(a,1-l),new pt(h,1-u),new pt(d,1-p),new pt(g,1-m)]}};function xp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Us=class i extends ea{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ie=class i extends Fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],S=[],g=[];for(let m=0;m<h;m++){let _=m*f-o;for(let M=0;M<c;M++){let v=M*u-r;p.push(v,-_,0),S.push(0,0,1),g.push(M/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let M=_+c*m,v=_+c*(m+1),E=_+1+c*(m+1),b=_+1+c*m;d.push(M,v,b),d.push(v,E,b)}this.setIndex(d),this.setAttribute("position",new pe(p,3)),this.setAttribute("normal",new pe(S,3)),this.setAttribute("uv",new pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Rn=class i extends Fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new N,f=new N,d=[],p=[],S=[],g=[];for(let m=0;m<=n;m++){let _=[],M=m/n,v=o+M*a,E=t*Math.cos(v),b=Math.sqrt(t*t-E*E),x=0;m===0&&o===0?x=.5/e:m===n&&l===Math.PI&&(x=-.5/e);for(let y=0;y<=e;y++){let R=y/e,A=s+R*r;u.x=-b*Math.cos(A),u.y=E,u.z=b*Math.sin(A),p.push(u.x,u.y,u.z),f.copy(u).normalize(),S.push(f.x,f.y,f.z),g.push(R+x,1-M),_.push(c++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<e;_++){let M=h[m][_+1],v=h[m][_],E=h[m+1][_],b=h[m+1][_+1];(m!==0||o>0)&&d.push(M,v,b),(m!==n-1||l<Math.PI)&&d.push(v,E,b)}this.setIndex(d),this.setAttribute("position",new pe(p,3)),this.setAttribute("normal",new pe(S,3)),this.setAttribute("uv",new pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Nr=class i extends Fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new N,d=new N,p=new N;for(let S=0;S<=n;S++){let g=o+S/n*a;for(let m=0;m<=s;m++){let _=m/s*r;d.x=(t+e*Math.cos(g))*Math.cos(_),d.y=(t+e*Math.cos(g))*Math.sin(_),d.z=e*Math.sin(g),c.push(d.x,d.y,d.z),f.x=t*Math.cos(_),f.y=t*Math.sin(_),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(m/s),u.push(S/n)}}for(let S=1;S<=n;S++)for(let g=1;g<=s;g++){let m=(s+1)*S+g-1,_=(s+1)*(S-1)+g-1,M=(s+1)*(S-1)+g,v=(s+1)*S+g;l.push(m,_,v),l.push(_,M,v)}this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ji(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(du(s))s.isRenderTargetTexture?(Kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(du(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function sn(i){let t={};for(let e=0;e<i.length;e++){let n=ji(i[e]);for(let s in n)t[s]=n[s]}return t}function du(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function _p(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var uf={clone:ji,merge:sn},vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yn=class extends li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vp,this.fragmentShader=yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ji(t.uniforms),this.uniformsGroups=_p(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new se().setHex(s.value);break;case"v2":this.uniforms[n].value=new pt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Le().fromArray(s.value);break;case"m3":this.uniforms[n].value=new te().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ae().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},la=class extends Yn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Wt=class extends li{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ul,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Ea,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ca=class extends li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ha=class extends li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ms(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Uo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var wi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ua=class extends wi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cc,endingEnd:cc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case hc:r=t,a=2*e-n;break;case uc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hc:o=t,l=2*n-e;break;case uc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(s-e),S=p*p,g=S*p,m=-f*g+2*f*S-f*p,_=(1+f)*g+(-1.5-2*f)*S+(-.5+f)*p+1,M=(-1-d)*g+(1.5+d)*S+.5*p,v=d*g-d*S;for(let E=0;E!==a;++E)r[E]=m*o[h+E]+_*o[c+E]+M*o[l+E]+v*o[u+E];return r}},fa=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},da=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},pa=class extends wi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(s-e),S=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*S+o[l+g]*p;return r}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let S=o[c+p],g=o[l+p],m=d*f+p*2,_=u[m],M=u[m+1],v=t*f+p*2,E=h[v],b=h[v+1],x=Sp(n,e,_,E,s);r[p]=ff(x,S,M,b,g)}return r}};function ff(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Mp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Sp(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=ff(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Mp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var bn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ms(e,this.TimeBufferType),this.values=Ms(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ms(t.times,Array),values:Ms(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Uo(t.settings)&&(n.settings={inTangents:Ms(t.settings.inTangents,Array),outTangents:Ms(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new pa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case lr:e=this.InterpolantFactoryMethodDiscrete;break;case Zo:e=this.InterpolantFactoryMethodLinear;break;case Bo:e=this.InterpolantFactoryMethodSmooth;break;case lc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return Zo;case this.InterpolantFactoryMethodSmooth:return Bo;case this.InterpolantFactoryMethodBezier:return lc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Uo(this.settings)&&(pu(this.settings.inTangents,t),pu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Uo(this.settings)&&(mu(this.settings.inTangents,t),mu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(jt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){jt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){jt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Td(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){jt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Bo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let S=e[u+p];if(S!==e[f+p]||S!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Uo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function pu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function mu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}bn.prototype.ValueTypeName="";bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=Zo;var Ai=class extends bn{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=lr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends bn{constructor(t,e,n,s){super(t,e,n,s)}};ma.prototype.ValueTypeName="color";var ga=class extends bn{constructor(t,e,n,s){super(t,e,n,s)}};ga.prototype.ValueTypeName="number";var xa=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)$e.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ur=class extends bn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new xa(this.times,this.values,this.getValueSize(),t)}};Ur.prototype.ValueTypeName="quaternion";Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends bn{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=lr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends bn{constructor(t,e,n,s){super(t,e,n,s)}};_a.prototype.ValueTypeName="vector";var va=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},df=new va,ya=class{constructor(t){this.manager=t!==void 0?t:df,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ya.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fr=class extends Ke{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Or=class extends Fr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ac=new ae,gu=new N,xu=new N,Ma=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ti,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;gu.setFromMatrixPosition(t.matrixWorld),e.position.copy(gu),xu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ac.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ac,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ws||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(ac)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Fo=new N,Oo=new $e,Vn=new N,Br=class extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Fo,Oo,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Oo,Vn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Fo,Oo,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Oo,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Si=new N,_u=new pt,vu=new pt,cn=class extends Br{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Jo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(Fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Si.x,Si.y).multiplyScalar(-t/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-t/Si.z)}getViewSize(t,e){return this.getViewBounds(t,_u,vu),e.subVectors(vu,_u)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Fl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var zr=class extends Br{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},gc=class extends Ma{constructor(){super(new zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hr=class extends Fr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new gc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ss=-90,bs=1,Fs=class extends Ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new cn(Ss,bs,t,e);s.layers=this.layers,this.add(s);let r=new cn(Ss,bs,t,e);r.layers=this.layers,this.add(r);let o=new cn(Ss,bs,t,e);o.layers=this.layers,this.add(o);let a=new cn(Ss,bs,t,e);a.layers=this.layers,this.add(a);let l=new cn(Ss,bs,t,e);l.layers=this.layers,this.add(l);let c=new cn(Ss,bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=S,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Sa=class extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Xc="\\[\\]\\.:\\/",bp=new RegExp("["+Xc+"]","g"),qc="[^"+Xc+"]",Ep="[^"+Xc.replace("\\.","")+"]",Tp=/((?:WC+[\/:])*)/.source.replace("WC",qc),wp=/(WCOD+)?/.source.replace("WCOD",Ep),Ap=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qc),Rp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qc),Cp=new RegExp("^"+Tp+wp+Ap+Rp+"$"),Ip=["material","materials","bones","map"],xc=class{constructor(t,e,n){let s=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(bp,"")}static parseTrackName(t){let e=Cp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ip.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;jt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=xc;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cv=new Float32Array(1);var _c=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Yc(i,t,e,n){let s=Pp(n);switch(e){case Fc:return i*t;case Pa:return i*t/s.components*s.byteLength;case La:return i*t/s.components*s.byteLength;case Ii:return i*t*2/s.components*s.byteLength;case Da:return i*t*2/s.components*s.byteLength;case Oc:return i*t*3/s.components*s.byteLength;case zn:return i*t*4/s.components*s.byteLength;case Na:return i*t*4/s.components*s.byteLength;case Vr:case Wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xr:case qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fa:case Ba:return Math.max(i,16)*Math.max(t,8)/4;case Ua:case Oa:return Math.max(i,8)*Math.max(t,8)/2;case za:case Ha:case ka:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ga:case Yr:case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case rl:case ol:case al:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ll:case cl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Zr:case hl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Pp(i){switch(i){case mn:case Lc:return{byteLength:1,components:1};case Hs:case Dc:case Bn:return{byteLength:2,components:1};case Ca:case Ia:return{byteLength:2,components:4};case On:case Ra:case Cn:return{byteLength:4,components:1};case Nc:case Uc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Uf(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Op(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],S=u[d];S.start<=p.start+p.count+1?p.count=Math.max(p.count,S.start+S.count-p.start):(++f,u[f]=S)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let S=u[d];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zp=`#ifdef USE_ALPHAHASH
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
#endif`,Hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wp=`#ifdef USE_AOMAP
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
#endif`,Xp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qp=`#ifdef USE_BATCHING
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
#endif`,Yp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$p=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kp=`#ifdef USE_IRIDESCENCE
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
#endif`,jp=`#ifdef USE_BUMPMAP
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
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,am=`#define PI 3.141592653589793
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
} // validated`,lm=`vec3 transformedNormal = objectNormal;
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
#endif`,cm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dm="gl_FragColor = linearToOutputTexel( gl_FragColor );",pm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,xm=`#ifdef USE_ENVMAP
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
#endif`,_m=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Em=`#ifdef USE_GRADIENTMAP
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
}`,Tm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nm=`PhysicalMaterial material;
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
#endif`,Um=`uniform sampler2D dfgLUT;
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
}`,Fm=`
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
#endif`,Om=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,km=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ym=`#if defined( USE_POINTS_UV )
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
#endif`,Zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$m=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Km=`#if defined( USE_MORPHCOLORS )
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
#endif`,jm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qm=`#ifdef USE_MORPHTARGETS
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
#endif`,t0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,o0=`#ifdef USE_NORMALMAP
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
#endif`,a0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,d0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S0=`float getShadowMask() {
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
}`,b0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E0=`#ifdef USE_SKINNING
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
#endif`,T0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w0=`#ifdef USE_SKINNING
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
#endif`,A0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,P0=`#ifdef USE_TRANSMISSION
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
#endif`,L0=`#ifdef USE_TRANSMISSION
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
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,O0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B0=`uniform sampler2D t2D;
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
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`uniform float backgroundBlurriness;
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`#include <common>
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
}`,W0=`#if DEPTH_PACKING == 3200
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
}`,X0=`#define DISTANCE
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
}`,q0=`#define DISTANCE
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`uniform float scale;
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
}`,$0=`uniform vec3 diffuse;
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
}`,K0=`#include <common>
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
}`,j0=`uniform vec3 diffuse;
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
}`,Q0=`#define LAMBERT
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
}`,tg=`#define LAMBERT
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
}`,eg=`#define MATCAP
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
}`,ng=`#define MATCAP
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
}`,ig=`#define NORMAL
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
}`,sg=`#define NORMAL
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
}`,rg=`#define PHONG
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
}`,og=`#define PHONG
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
}`,ag=`#define STANDARD
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
}`,lg=`#define STANDARD
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
}`,cg=`#define TOON
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
}`,hg=`#define TOON
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
}`,ug=`uniform float size;
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
}`,fg=`uniform vec3 diffuse;
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
}`,dg=`#include <common>
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
}`,pg=`uniform vec3 color;
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
}`,mg=`uniform float rotation;
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
}`,gg=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:Bp,alphahash_pars_fragment:zp,alphamap_fragment:Hp,alphamap_pars_fragment:Gp,alphatest_fragment:kp,alphatest_pars_fragment:Vp,aomap_fragment:Wp,aomap_pars_fragment:Xp,batching_pars_vertex:qp,batching_vertex:Yp,begin_vertex:Zp,beginnormal_vertex:Jp,bsdfs:$p,iridescence_fragment:Kp,bumpmap_pars_fragment:jp,clipping_planes_fragment:Qp,clipping_planes_pars_fragment:tm,clipping_planes_pars_vertex:em,clipping_planes_vertex:nm,color_fragment:im,color_pars_fragment:sm,color_pars_vertex:rm,color_vertex:om,common:am,defaultnormal_vertex:lm,displacementmap_pars_vertex:cm,displacementmap_vertex:hm,emissivemap_fragment:um,emissivemap_pars_fragment:fm,colorspace_fragment:dm,colorspace_pars_fragment:pm,envmap_fragment:mm,envmap_common_pars_fragment:gm,envmap_pars_fragment:xm,envmap_pars_vertex:_m,envmap_physical_pars_fragment:Cm,envmap_vertex:vm,fog_vertex:ym,fog_pars_vertex:Mm,fog_fragment:Sm,fog_pars_fragment:bm,gradientmap_pars_fragment:Em,lightmap_pars_fragment:Tm,lights_lambert_fragment:wm,lights_lambert_pars_fragment:Am,lights_pars_begin:Rm,lights_toon_fragment:Im,lights_toon_pars_fragment:Pm,lights_phong_fragment:Lm,lights_phong_pars_fragment:Dm,lights_physical_fragment:Nm,lights_physical_pars_fragment:Um,lights_fragment_begin:Fm,lights_fragment_maps:Om,lights_fragment_end:Bm,lightprobes_pars_fragment:zm,logdepthbuf_fragment:Hm,logdepthbuf_pars_fragment:Gm,logdepthbuf_pars_vertex:km,logdepthbuf_vertex:Vm,map_fragment:Wm,map_pars_fragment:Xm,map_particle_fragment:qm,map_particle_pars_fragment:Ym,metalnessmap_fragment:Zm,metalnessmap_pars_fragment:Jm,morphinstance_vertex:$m,morphcolor_vertex:Km,morphnormal_vertex:jm,morphtarget_pars_vertex:Qm,morphtarget_vertex:t0,normal_fragment_begin:e0,normal_fragment_maps:n0,normal_pars_fragment:i0,normal_pars_vertex:s0,normal_vertex:r0,normalmap_pars_fragment:o0,clearcoat_normal_fragment_begin:a0,clearcoat_normal_fragment_maps:l0,clearcoat_pars_fragment:c0,iridescence_pars_fragment:h0,opaque_fragment:u0,packing:f0,premultiplied_alpha_fragment:d0,project_vertex:p0,dithering_fragment:m0,dithering_pars_fragment:g0,roughnessmap_fragment:x0,roughnessmap_pars_fragment:_0,shadowmap_pars_fragment:v0,shadowmap_pars_vertex:y0,shadowmap_vertex:M0,shadowmask_pars_fragment:S0,skinbase_vertex:b0,skinning_pars_vertex:E0,skinning_vertex:T0,skinnormal_vertex:w0,specularmap_fragment:A0,specularmap_pars_fragment:R0,tonemapping_fragment:C0,tonemapping_pars_fragment:I0,transmission_fragment:P0,transmission_pars_fragment:L0,uv_pars_fragment:D0,uv_pars_vertex:N0,uv_vertex:U0,worldpos_vertex:F0,background_vert:O0,background_frag:B0,backgroundCube_vert:z0,backgroundCube_frag:H0,cube_vert:G0,cube_frag:k0,depth_vert:V0,depth_frag:W0,distance_vert:X0,distance_frag:q0,equirect_vert:Y0,equirect_frag:Z0,linedashed_vert:J0,linedashed_frag:$0,meshbasic_vert:K0,meshbasic_frag:j0,meshlambert_vert:Q0,meshlambert_frag:tg,meshmatcap_vert:eg,meshmatcap_frag:ng,meshnormal_vert:ig,meshnormal_frag:sg,meshphong_vert:rg,meshphong_frag:og,meshphysical_vert:ag,meshphysical_frag:lg,meshtoon_vert:cg,meshtoon_frag:hg,points_vert:ug,points_frag:fg,shadow_vert:dg,shadow_frag:pg,sprite_vert:mg,sprite_frag:gg},Dt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},$n={basic:{uniforms:sn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:sn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:sn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:sn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:sn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new se(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:sn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:sn([Dt.points,Dt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:sn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:sn([Dt.common,Dt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:sn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:sn([Dt.sprite,Dt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distance:{uniforms:sn([Dt.common,Dt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distance_vert,fragmentShader:le.distance_frag},shadow:{uniforms:sn([Dt.lights,Dt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};$n.physical={uniforms:sn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};var dl={r:0,b:0,g:0},xg=new ae,Ff=new te;Ff.set(-1,0,0,0,1,0,0,0,1);function _g(i,t,e,n,s,r){let o=new se(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let v=_.backgroundBlurriness>0;M=t.get(M,v)}return M}function p(_){let M=!1,v=d(_);v===null?g(o,a):v&&v.isColor&&(g(v,1),M=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(_,M){let v=d(M);v&&v.isCubeTexture?(c===void 0&&(c=new gt(new ne(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:ji($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(xg.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ff),c.material.toneMapped=de.getTransfer(v.colorSpace)!==_e,(h!==v||u!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new gt(new Ie(2,2),new Yn({name:"BackgroundMaterial",uniforms:ji($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=de.getTransfer(v.colorSpace)!==_e,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,M){_.getRGB(dl,Wc(i)),e.buffers.color.setClear(dl.r,dl.g,dl.b,M,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),a=M,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,g(o,a)},render:p,addToRenderList:S,dispose:m}}function vg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(I,U,H,P,B){let Z=!1,W=u(I,P,H,U);r!==W&&(r=W,c(r.object)),Z=d(I,P,H,B),Z&&p(I,P,H,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,v(I,U,H,P),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function u(I,U,H,P){let B=P.wireframe===!0,Z=n[U.id];Z===void 0&&(Z={},n[U.id]=Z);let W=I.isInstancedMesh===!0?I.id:0,ut=Z[W];ut===void 0&&(ut={},Z[W]=ut);let J=ut[H.id];J===void 0&&(J={},ut[H.id]=J);let nt=J[B];return nt===void 0&&(nt=f(l()),J[B]=nt),nt}function f(I){let U=[],H=[],P=[];for(let B=0;B<e;B++)U[B]=0,H[B]=0,P[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:P,object:I,attributes:{},index:null}}function d(I,U,H,P){let B=r.attributes,Z=U.attributes,W=0,ut=H.getAttributes();for(let J in ut)if(ut[J].location>=0){let st=B[J],Ft=Z[J];if(Ft===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(Ft=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(Ft=I.instanceColor)),st===void 0||st.attribute!==Ft||Ft&&st.data!==Ft.data)return!0;W++}return r.attributesNum!==W||r.index!==P}function p(I,U,H,P){let B={},Z=U.attributes,W=0,ut=H.getAttributes();for(let J in ut)if(ut[J].location>=0){let st=Z[J];st===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(st=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(st=I.instanceColor));let Ft={};Ft.attribute=st,st&&st.data&&(Ft.data=st.data),B[J]=Ft,W++}r.attributes=B,r.attributesNum=W,r.index=P}function S(){let I=r.newAttributes;for(let U=0,H=I.length;U<H;U++)I[U]=0}function g(I){m(I,0)}function m(I,U){let H=r.newAttributes,P=r.enabledAttributes,B=r.attributeDivisors;H[I]=1,P[I]===0&&(i.enableVertexAttribArray(I),P[I]=1),B[I]!==U&&(i.vertexAttribDivisor(I,U),B[I]=U)}function _(){let I=r.newAttributes,U=r.enabledAttributes;for(let H=0,P=U.length;H<P;H++)U[H]!==I[H]&&(i.disableVertexAttribArray(H),U[H]=0)}function M(I,U,H,P,B,Z,W){W===!0?i.vertexAttribIPointer(I,U,H,B,Z):i.vertexAttribPointer(I,U,H,P,B,Z)}function v(I,U,H,P){S();let B=P.attributes,Z=H.getAttributes(),W=U.defaultAttributeValues;for(let ut in Z){let J=Z[ut];if(J.location>=0){let nt=B[ut];if(nt===void 0&&(ut==="instanceMatrix"&&I.instanceMatrix&&(nt=I.instanceMatrix),ut==="instanceColor"&&I.instanceColor&&(nt=I.instanceColor)),nt!==void 0){let st=nt.normalized,Ft=nt.itemSize,qt=t.get(nt);if(qt===void 0)continue;let K=qt.buffer,Rt=qt.type,Ot=qt.bytesPerElement,z=Rt===i.INT||Rt===i.UNSIGNED_INT||nt.gpuType===Ra;if(nt.isInterleavedBufferAttribute){let X=nt.data,Y=X.isInterleavedBuffer===!0?X.stride:X.itemSize,Ct=nt.offset;if(X.isInstancedInterleavedBuffer||X.isInstancedBufferAttribute){for(let j=0;j<J.locationSize;j++)m(J.location+j,X.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let j=0;j<J.locationSize;j++)g(J.location+j);i.bindBuffer(i.ARRAY_BUFFER,K);for(let j=0;j<J.locationSize;j++)M(J.location+j,Ft/J.locationSize,Rt,st,Y*Ot,(Ct+Ft/J.locationSize*j)*Ot,z)}else{if(nt.isInstancedBufferAttribute){for(let X=0;X<J.locationSize;X++)m(J.location+X,nt.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let X=0;X<J.locationSize;X++)g(J.location+X);i.bindBuffer(i.ARRAY_BUFFER,K);for(let X=0;X<J.locationSize;X++)M(J.location+X,Ft/J.locationSize,Rt,st,Ft*Ot,Ft/J.locationSize*X*Ot,z)}}else if(W!==void 0){let st=W[ut];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(J.location,st);break;case 3:i.vertexAttrib3fv(J.location,st);break;case 4:i.vertexAttrib4fv(J.location,st);break;default:i.vertexAttrib1fv(J.location,st)}}}}_()}function E(){R();for(let I in n){let U=n[I];for(let H in U){let P=U[H];for(let B in P){let Z=P[B];for(let W in Z)h(Z[W].object),delete Z[W];delete P[B]}}delete n[I]}}function b(I){if(n[I.id]===void 0)return;let U=n[I.id];for(let H in U){let P=U[H];for(let B in P){let Z=P[B];for(let W in Z)h(Z[W].object),delete Z[W];delete P[B]}}delete n[I.id]}function x(I){for(let U in n){let H=n[U];for(let P in H){let B=H[P];if(B[I.id]===void 0)continue;let Z=B[I.id];for(let W in Z)h(Z[W].object),delete Z[W];delete B[I.id]}}}function y(I){for(let U in n){let H=n[U],P=I.isInstancedMesh===!0?I.id:0,B=H[P];if(B!==void 0){for(let Z in B){let W=B[Z];for(let ut in W)h(W[ut].object),delete W[ut];delete B[Z]}delete H[P],Object.keys(H).length===0&&delete n[U]}}}function R(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:A,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:x,initAttributes:S,enableAttribute:g,disableUnusedAttributes:_}}function yg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Mg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==zn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let y=x===Bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==mn&&x!==Cn&&!y&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Kt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Kt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:S,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,maxSamples:E,samples:b}}function Sg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Fn,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,S=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let _=r?0:n,M=_*4,v=m.clippingState||null;l.value=v,v=h(p,f,M,d);for(let E=0;E!==M;++E)v[E]=e[E];m.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let S=u!==null?u.length:0,g=null;if(S!==0){if(g=l.value,p!==!0||g===null){let m=d+S*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,v=d;M!==S;++M,v+=4)o.copy(u[M]).applyMatrix4(_,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,g}}var Kr=class extends yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Mr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ne(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:Zi});r.uniforms.tEquirect.value=e;let o=new gt(s,r),a=e.minFilter;return e.minFilter===fi&&(e.minFilter=hn),new Fs(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},pf=256,bg=3,Eg=20,Of=256,Bf=16,Tg=3,wg=new N,Ag=new se,ml=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Fs(1,10,null),this._boxMesh=new gt(new ne(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=wg}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,S=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(t.background=l.getClearColor(Ag));let g=new Fs(n,s,h);return g.position.copy(a),g.update(l,t),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=p,t.background=S,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(pf,ef(t))}_fromTexture(t,e){t.mapping===$i||t.mapping===zs?this._setSize(t.image.length===0?pf:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=mf(t,!1,!1),n=Math.log2(t)-bg;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=mf(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===$i||t.mapping===zs?(this._cubemapMaterial===null&&(this._cubemapMaterial=xf()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=gf()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Rg(),this._integrationMaterial=Cg());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Bf);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-Tg)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(Of*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Ig());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function mf(i,t,e){return new Kr(i,{minFilter:fi,generateMipmaps:t,type:Bn,colorSpace:cr,depthBuffer:e})}function jr(i,t,e){return new Yn({name:i,uniforms:t,vertexShader:le.cube_vert,fragmentShader:e,side:fn,blending:Zi,depthTest:!1,depthWrite:!1})}function Rg(){return jr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Of}u

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
	`)}function Cg(){return jr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Bf}},`

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
	`)}function Ig(){return jr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Eg}
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
	`)}function gf(){return jr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function xf(){return jr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Pg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Ta||d===wa)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let S=new Kr(p.height);return S.fromEquirectangularTexture(i,f),t.set(f,S),f.addEventListener("dispose",c),a(S.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===Ta||d===wa,S=d===$i||d===zs;if(p||S){let g=e.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new ml(i)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let _=f.image;return p&&_&&_.height>0||S&&_&&l(_)?(n===null&&(n=new ml(i)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,d){return d===Ta?f.mapping=$i:d===wa&&(f.mapping=zs),f}function l(f){let d=0,p=6;for(let S=0;S<p;S++)f[S]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Lg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&rr("WebGLRenderer: "+n+" extension not supported."),s}}}function Dg(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let S=r.get(p);S&&(t.remove(S),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,S){return s[S.id]!==void 0||(S.addEventListener("dispose",a),s[S.id]=new WeakRef(S),o.register(S,S.id,S),e.memory.geometries++),S}function h(p){let S=p.attributes;for(let g in S)t.update(S[g],i.ARRAY_BUFFER)}function u(p){let S=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let _=S!==null?S.array.length:g.array.length/3-1,M=g.count>=65535?_r:xr,v=new M(Math.ceil(_/3)*6,1),E=v.array;if(S!==null){let x=S.array;m=S.version;for(let y=0,R=0;y<_;y+=3){let A=x[y+0],I=x[y+1],U=x[y+2];E[R++]=A,E[R++]=I,E[R++]=I,E[R++]=U,E[R++]=U,E[R++]=A}}else{m=g.version;for(let x=0,y=0;x<_;x+=3){let R=x+0,A=x+1,I=x+2;E[y++]=R,E[y++]=A,E[y++]=A,E[y++]=I,E[y++]=I,E[y++]=R}}v.version=m;let b=r.get(p);b&&t.remove(b),r.set(p,v)}function f(p){let S=r.get(p);if(S){let g=p.index;g!==null&&S.version<g.version&&u(p)}else u(p);return r.get(p)}function d(){for(let p in s){let S=s[p].deref();S!==void 0&&l(S)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function Ng(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let S=0;for(let g=0;g<d;g++)S+=f[g];e.update(S,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ug(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:jt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Fg(i,t,e){let n=new WeakMap,s=new Le;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let R=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],M=0;d===!0&&(M=1),p===!0&&(M=2),S===!0&&(M=3);let v=a.attributes.position.count*M,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let b=new Float32Array(v*E*4*u),x=new dr(b,v,E,u);x.type=Cn,x.needsUpdate=!0;let y=M*4;for(let A=0;A<u;A++){let I=g[A],U=m[A],H=_[A],P=v*E*4*A;for(let B=0;B<I.count;B++){let Z=B*y;d===!0&&(s.fromBufferAttribute(I,B),b[P+Z+0]=s.x,b[P+Z+1]=s.y,b[P+Z+2]=s.z,b[P+Z+3]=0),p===!0&&(s.fromBufferAttribute(U,B),b[P+Z+4]=s.x,b[P+Z+5]=s.y,b[P+Z+6]=s.z,b[P+Z+7]=0),S===!0&&(s.fromBufferAttribute(H,B),b[P+Z+8]=s.x,b[P+Z+9]=s.y,b[P+Z+10]=s.z,b[P+Z+11]=H.itemSize===4?s.w:1)}}f={count:u,texture:x,size:new pt(v,E)},n.set(a,f),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let S=0;S<c.length;S++)d+=c[S];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Og(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Bg={[Ec]:"LINEAR_TONE_MAPPING",[Tc]:"REINHARD_TONE_MAPPING",[wc]:"CINEON_TONE_MAPPING",[Ac]:"ACES_FILMIC_TONE_MAPPING",[Cc]:"AGX_TONE_MAPPING",[Ic]:"NEUTRAL_TONE_MAPPING",[Rc]:"CUSTOM_TONE_MAPPING"};function zg(i,t,e,n,s,r){let o=new yn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Fe;h.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new pe([0,2,0,0,2,0],2));let u=new la({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new gt(h,u),d=new zr(-1,1,1,-1,0,1),p=null,S=null,g=!1,m,_=null,M=[],v=!1;this.setSize=function(E,b){o.setSize(E,b),a!==null&&a.setSize(E,b),l!==null&&l.setSize(E,b);for(let x=0;x<M.length;x++){let y=M[x];y.setSize&&y.setSize(E,b)}},this.setEffects=function(E){M=E,v=M.length>0&&M[0].isRenderPass===!0;let b=o.width,x=o.height;M.length>0&&a===null&&(a=new yn(b,x,{type:Bn,depthBuffer:!1,stencilBuffer:!1}),l=new yn(b,x,{type:Bn,depthBuffer:!1,stencilBuffer:!1}));let y=s===!0&&M.some(R=>R.needsDepthTexture===!0);y!==(o.depthTexture!==null)&&(y===!0&&c===null&&(c=new hi(b,x),r===!0&&(c.format=di,c.type=Ki)),o.dispose(),o.depthTexture=y?c:null,o.resolveDepthBuffer=y,o.storeMultisampledDepthBuffer=y);for(let R=0;R<M.length;R++){let A=M[R];A.setSize&&A.setSize(b,x),y&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(E,b){if(g||E.toneMapping===Zn&&M.length===0)return!1;if(_=b,b!==null){let x=b.width,y=b.height;(o.width!==x||o.height!==y)&&this.setSize(x,y)}return v===!1&&E.setRenderTarget(o),m=E.toneMapping,E.toneMapping=Zn,!0},this.hasRenderPass=function(){return v},this.end=function(E,b){E.toneMapping=m,g=!0;let x=o,y=a;for(let R=0;R<M.length;R++){let A=M[R];A.enabled!==!1&&(A.render(E,y,x,b),A.needsSwap!==!1&&(x=y,y=y===a?l:a))}if(p!==E.outputColorSpace||S!==E.toneMapping){p=E.outputColorSpace,S=E.toneMapping,u.defines={},de.getTransfer(p)===_e&&(u.defines.SRGB_TRANSFER="");let R=Bg[S];R&&(u.defines[R]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(_),E.render(f,d),_=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var zf=new un,Hf=new hi(1,1),Gf=new Sr(1),kf=new dr,Vf=new jo,Wf=new Mr,_f=[],vf=[],yf=new Float32Array(16),Mf=new Float32Array(9),Sf=new Float32Array(4);function ks(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=_f[s];if(r===void 0&&(r=new Float32Array(s),_f[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function xl(i,t){let e=vf[t];e===void 0&&(e=new Int32Array(t),vf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Hg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function Vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function Wg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Sf.set(n),i.uniformMatrix2fv(this.addr,!1,Sf),Ge(e,n)}}function Xg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Mf.set(n),i.uniformMatrix3fv(this.addr,!1,Mf),Ge(e,n)}}function qg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;yf.set(n),i.uniformMatrix4fv(this.addr,!1,yf),Ge(e,n)}}function Yg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function Jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function Kg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function Qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function _l(i){return i.version===0&&(i.compareFunction=Hc,i.needsUpdate=!0),i}function ex(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=_l(Hf):r=zf,e.setTexture2D(t||r,s)}function nx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vf,s)}function ix(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=_l(Gf):r=Wf,e.setTextureCube(t||r,s)}function sx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||kf,s)}function rx(i){switch(i){case 5126:return Hg;case 35664:return Gg;case 35665:return kg;case 35666:return Vg;case 35674:return Wg;case 35675:return Xg;case 35676:return qg;case 5124:case 35670:return Yg;case 35667:case 35671:return Zg;case 35668:case 35672:return Jg;case 35669:case 35673:return $g;case 5125:return Kg;case 36294:return jg;case 36295:return Qg;case 36296:return tx;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return ix;case 36289:case 36303:case 36311:case 36292:return sx}}function ox(i,t){i.uniform1fv(this.addr,t)}function ax(i,t){let e=ks(t,this.size,2);i.uniform2fv(this.addr,e)}function lx(i,t){let e=ks(t,this.size,3);i.uniform3fv(this.addr,e)}function cx(i,t){let e=ks(t,this.size,4);i.uniform4fv(this.addr,e)}function hx(i,t){let e=ks(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ux(i,t){let e=ks(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function fx(i,t){let e=ks(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function dx(i,t){i.uniform1iv(this.addr,t)}function px(i,t){i.uniform2iv(this.addr,t)}function mx(i,t){i.uniform3iv(this.addr,t)}function gx(i,t){i.uniform4iv(this.addr,t)}function xx(i,t){i.uniform1uiv(this.addr,t)}function _x(i,t){i.uniform2uiv(this.addr,t)}function vx(i,t){i.uniform3uiv(this.addr,t)}function yx(i,t){i.uniform4uiv(this.addr,t)}function Mx(i,t,e){let n=this.cache,s=t.length,r=xl(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=_l(Hf):o=zf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Sx(i,t,e){let n=this.cache,s=t.length,r=xl(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Vf,r[o])}function bx(i,t,e){let n=this.cache,s=t.length,r=xl(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=_l(Gf):o=Wf;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Ex(i,t,e){let n=this.cache,s=t.length,r=xl(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||kf,r[o])}function Tx(i){switch(i){case 5126:return ox;case 35664:return ax;case 35665:return lx;case 35666:return cx;case 35674:return hx;case 35675:return ux;case 35676:return fx;case 5124:case 35670:return dx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return gx;case 5125:return xx;case 36294:return _x;case 36295:return vx;case 36296:return yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Mx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return Ex}}var $c=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=rx(e.type)}},Kc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tx(e.type)}},jc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Zc=/(\w+)(\])?(\[|\.)?/g;function bf(i,t){i.seq.push(t),i.map[t.id]=t}function wx(i,t,e){let n=i.name,s=n.length;for(Zc.lastIndex=0;;){let r=Zc.exec(n),o=Zc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){bf(e,c===void 0?new $c(a,i,t):new Kc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new jc(a),bf(e,u)),e=u}}}var Gs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);wx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Ef(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ax=37297,Rx=0;function Cx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Tf=new te;function Ix(i){de._getMatrix(Tf,de.workingColorSpace,i);let t=`mat3( ${Tf.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case hr:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function wf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Cx(i.getShaderSource(t),a)}else return r}function Px(i,t){let e=Ix(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Lx={[Ec]:"Linear",[Tc]:"Reinhard",[wc]:"Cineon",[Ac]:"ACESFilmic",[Cc]:"AgX",[Ic]:"Neutral",[Rc]:"Custom"};function Dx(i,t){let e=Lx[t];return e===void 0?(Kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var pl=new N;function Nx(){de.getLuminanceCoefficients(pl);let i=pl.x.toFixed(4),t=pl.y.toFixed(4),e=pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ux(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($r).join(`
`)}function Fx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ox(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function $r(i){return i!==""}function Af(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Rf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(i){return i.replace(Bx,zx)}function zx(i,t){let e=le[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Qc(e)}var Hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cf(i){return i.replace(Hx,Gx)}function Gx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function If(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var kx={[Gr]:"SHADOWMAP_TYPE_PCF",[Os]:"SHADOWMAP_TYPE_VSM"};function Vx(i){return kx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Wx={[zs]:"ENVMAP_MODE_REFRACTION"};function Xx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Wx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var qx={[Ea]:"ENVMAP_BLENDING_MULTIPLY",[Hu]:"ENVMAP_BLENDING_MIX",[Gu]:"ENVMAP_BLENDING_ADD"};function Yx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":qx[i.combine]||"ENVMAP_BLENDING_NONE"}function Zx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Vx(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Xx(e),u=Yx(e),f=Ux(e),d=Fx(r),p=s.createProgram(),S,g,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter($r).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter($r).join(`
`),g.length>0&&(g+=`
`)):(S=[If(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),g=[If(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?le.tonemapping_pars_fragment:"",e.toneMapping!==Zn?Dx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,Px("linearToOutputTexel",e.outputColorSpace),Nx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($r).join(`
`)),o=Qc(o),o=Af(o,e),o=Rf(o,e),a=Qc(a),a=Af(a,e),a=Rf(a,e),o=Cf(o),a=Cf(a),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,S=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",e.glslVersion===kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=m+S+o,M=m+g+a,v=Ef(s,s.VERTEX_SHADER,_),E=Ef(s,s.FRAGMENT_SHADER,M);s.attachShader(p,v),s.attachShader(p,E),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function b(A){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(p)||"",U=s.getShaderInfoLog(v)||"",H=s.getShaderInfoLog(E)||"",P=I.trim(),B=U.trim(),Z=H.trim(),W=!0,ut=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,v,E);else{let J=wf(s,v,"vertex"),nt=wf(s,E,"fragment");jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+P+`
`+J+`
`+nt)}else P!==""?Kt("WebGLProgram: Program Info Log:",P):(B===""||Z==="")&&(ut=!1);ut&&(A.diagnostics={runnable:W,programLog:P,vertexShader:{log:B,prefix:S},fragmentShader:{log:Z,prefix:g}})}s.deleteShader(v),s.deleteShader(E),x=new Gs(s,p),y=Ox(s,p)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(p,Ax)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rx++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=E,this}var Jx=0,th=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new eh(t),e.set(t,n)),n}},eh=class{constructor(t){this.id=Jx++,this.code=t,this.usedTimes=0}};function $x(i){return i===Ii||i===Yr||i===Zr}function Kx(i,t,e,n,s,r){let o=new pr,a=new th,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,y,R,A,I,U){let H=A.fog,P=I.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=t.get(x.envMap||B,Z),ut=f[x.type],J=n.precision;x.precision!==null&&(J=n.getMaxPrecision(x.precision),J!==x.precision&&Kt("WebGLProgram.getParameters:",x.precision,"not supported, using",J,"instead."));let nt=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,st=nt!==void 0?nt.length:0,Ft=0;P.morphAttributes.position!==void 0&&(Ft=1),P.morphAttributes.normal!==void 0&&(Ft=2),P.morphAttributes.color!==void 0&&(Ft=3);let qt,K,Rt,Ot;if(ut){let Lt=$n[ut];qt=Lt.vertexShader,K=Lt.fragmentShader}else{qt=x.vertexShader,K=x.fragmentShader;let Lt=a.getVertexShaderStage(x),ye=a.getFragmentShaderStage(x);a.update(x,Lt,ye),Rt=Lt.id,Ot=ye.id}let z=i.getRenderTarget(),X=i.state.buffers.depth.getReversed(),Y=I.isInstancedMesh===!0,Ct=I.isBatchedMesh===!0,j=!!x.map,at=!!x.matcap,ct=!!W,O=ct&&W.isPMREMTexture===!0,lt=!!x.aoMap,ot=!!x.lightMap,_t=!!x.bumpMap&&x.wireframe===!1,dt=!!x.normalMap,rt=!!x.displacementMap,ht=!!x.emissiveMap,St=!!x.metalnessMap,Pt=!!x.roughnessMap,Yt=x.anisotropy>0,L=x.clearcoat>0,ie=x.diffuseRoughness>0,kt=x.dispersion>0,he=x.retroreflectivity>0,vt=x.iridescence>0,Re=x.sheen>0,Bt=x.transmission>0,Vt=Yt&&!!x.anisotropyMap,C=L&&!!x.clearcoatMap,T=L&&!!x.clearcoatNormalMap,G=L&&!!x.clearcoatRoughnessMap,ft=ie&&!!x.diffuseRoughnessMap,it=vt&&!!x.iridescenceMap,mt=vt&&!!x.iridescenceThicknessMap,Mt=Re&&!!x.sheenColorMap,Q=Re&&!!x.sheenRoughnessMap,tt=!!x.specularMap,Et=!!x.specularColorMap,D=!!x.specularIntensityMap,et=Bt&&!!x.transmissionMap,$=Bt&&!!x.thicknessMap,Tt=!!x.gradientMap,yt=!!x.alphaMap,bt=x.alphaTest>0,Zt=!!x.alphaHash,oe=!!x.extensions,xt=Zn;x.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(xt=i.toneMapping);let Jt=O?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,re={shaderID:ut,shaderType:x.type,shaderName:x.name,vertexShader:qt,fragmentShader:K,defines:x.defines,customVertexShaderID:Rt,customFragmentShaderID:Ot,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:J,batching:Ct,batchingColor:Ct&&I._colorsTexture!==null,instancing:Y,instancingColor:Y&&I.instanceColor!==null,instancingMorph:Y&&I.morphTexture!==null,outputColorSpace:z===null?i.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:de.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:j,matcap:at,envMap:ct,envMapMode:ct&&W.mapping,envMapPMREM:O,envMapMaxLod:O?Jt.length-1:null,envMapSize:O?Jt[0].width:null,aoMap:lt,lightMap:ot,bumpMap:_t,normalMap:dt,displacementMap:rt,emissiveMap:ht,normalMapObjectSpace:dt&&x.normalMapType===Wu,normalMapTangentSpace:dt&&x.normalMapType===ul,packedNormalMap:dt&&x.normalMapType===ul&&$x(x.normalMap.format),metalnessMap:St,roughnessMap:Pt,anisotropy:Yt,anisotropyMap:Vt,clearcoat:L,clearcoatMap:C,clearcoatNormalMap:T,clearcoatRoughnessMap:G,diffuseRoughness:ie,diffuseRoughnessMap:ft,dispersion:kt,retroreflection:he,iridescence:vt,iridescenceMap:it,iridescenceThicknessMap:mt,sheen:Re,sheenColorMap:Mt,sheenRoughnessMap:Q,specularMap:tt,specularColorMap:Et,specularIntensityMap:D,transmission:Bt,transmissionMap:et,thicknessMap:$,gradientMap:Tt,opaque:x.transparent===!1&&x.blending===Bs&&x.alphaToCoverage===!1,alphaMap:yt,alphaTest:bt,alphaHash:Zt,combine:x.combine,mapUv:j&&d(x.map.channel),aoMapUv:lt&&d(x.aoMap.channel),lightMapUv:ot&&d(x.lightMap.channel),bumpMapUv:_t&&d(x.bumpMap.channel),normalMapUv:dt&&d(x.normalMap.channel),displacementMapUv:rt&&d(x.displacementMap.channel),emissiveMapUv:ht&&d(x.emissiveMap.channel),metalnessMapUv:St&&d(x.metalnessMap.channel),roughnessMapUv:Pt&&d(x.roughnessMap.channel),anisotropyMapUv:Vt&&d(x.anisotropyMap.channel),clearcoatMapUv:C&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:T&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ft&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:it&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:Q&&d(x.sheenRoughnessMap.channel),specularMapUv:tt&&d(x.specularMap.channel),specularColorMapUv:Et&&d(x.specularColorMap.channel),specularIntensityMapUv:D&&d(x.specularIntensityMap.channel),transmissionMapUv:et&&d(x.transmissionMap.channel),thicknessMapUv:$&&d(x.thicknessMap.channel),alphaMapUv:yt&&d(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(dt||Yt),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!P.attributes.uv&&(j||yt),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&dt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:X,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:Ft,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:U.filter(Lt=>Lt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:xt,decodeVideoTexture:j&&x.map.isVideoTexture===!0&&de.getTransfer(x.map.colorSpace)===_e,decodeVideoTextureEmissive:ht&&x.emissiveMap.isVideoTexture===!0&&de.getTransfer(x.emissiveMap.colorSpace)===_e,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===we,flipSided:x.side===fn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:oe&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&x.extensions.multiDraw===!0||Ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function S(x){let y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)y.push(R),y.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(g(y,x),m(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function g(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapPMREM),x.push(y.envMapMaxLod),x.push(y.envMapSize),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.diffuseRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.numSunLights),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numSunLightShadows),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.numLightProbeGrids),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function m(x,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.retroreflection&&o.enable(24),y.diffuseRoughness&&o.enable(25),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function _(x){let y=f[x.type],R;if(y){let A=$n[y];R=uf.clone(A.uniforms)}else R=x.uniforms;return R}function M(x,y){let R=h.get(y);return R!==void 0?++R.usedTimes:(R=new Zx(i,y,x,s),c.push(R),h.set(y,R)),R}function v(x){if(--x.usedTimes===0){let y=c.indexOf(x);c[y]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function b(){a.dispose()}return{getParameters:p,getProgramCacheKey:S,getUniforms:_,acquireProgram:M,releaseProgram:v,releaseShaderCache:E,programs:c,dispose:b}}function jx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Qx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Pf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Lf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,S,g,m){let _=i[t];return _===void 0?(_={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:S,renderOrder:f.renderOrder,z:g,group:m},i[t]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=p,_.materialVariant=o(f),_.groupOrder=S,_.renderOrder=f.renderOrder,_.z=g,_.group=m),t++,_}function l(f,d,p,S,g,m,_){_.reversedDepth===!0&&(g=-g);let M=a(f,d,p,S,g,m);p.transmission>0?n.push(M):p.transparent===!0?s.push(M):e.push(M)}function c(f,d,p,S,g,m){let _=a(f,d,p,S,g,m);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):e.unshift(_)}function h(f,d){e.length>1&&e.sort(f||Qx),n.length>1&&n.sort(d||Pf),s.length>1&&s.sort(d||Pf)}function u(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function t_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Lf,i.set(n,[o])):s>=r.length?(o=new Lf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function e_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new se};break;case"SpotLight":e={position:new N,direction:new N,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function n_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var i_=0;function s_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function r_(i){let t=new e_,e=n_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new ae,o=new ae;function a(c){let h=0,u=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,p=0,S=0,g=0,m=0,_=0,M=0,v=0,E=0,b=0,x=0,y=0,R=0,A=0;c.sort(s_);for(let U=0,H=c.length;U<H;U++){let P=c[U],B=P.color,Z=P.intensity,W=P.distance,ut=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ii?ut=P.shadow.map.texture:ut=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=B.r*Z,u+=B.g*Z,f+=B.b*Z;else if(P.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(P.sh.coefficients[J],Z);A++}else if(P.isSunLight){let J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let nt=P.shadow,st=e.get(P);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),n.sunShadow[p]=st,n.sunShadowMap[p]=ut;let Ft=nt.getViewportCount();for(let qt=0;qt<Ft;qt++)n.sunShadowMatrix[S+qt]=nt.getMatrix(qt),n.sunShadowCascade[S+qt]=nt._cascadeData[qt];S+=Ft,p++}n.sun[d]=J,d++}else if(P.isDirectionalLight){let J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let nt=P.shadow,st=e.get(P);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,n.directionalShadow[g]=st,n.directionalShadowMap[g]=ut,n.directionalShadowMatrix[g]=P.shadow.matrix,E++}n.directional[g]=J,g++}else if(P.isSpotLight){let J=t.get(P);J.position.setFromMatrixPosition(P.matrixWorld),J.color.copy(B).multiplyScalar(Z),J.distance=W,J.coneCos=Math.cos(P.angle),J.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),J.decay=P.decay,n.spot[_]=J;let nt=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,nt.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[_]=nt.matrix,P.castShadow){let st=e.get(P);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,n.spotShadow[_]=st,n.spotShadowMap[_]=ut,x++}_++}else if(P.isRectAreaLight){let J=t.get(P);J.color.copy(B).multiplyScalar(Z),J.halfWidth.set(P.width*.5,0,0),J.halfHeight.set(0,P.height*.5,0),n.rectArea[M]=J,M++}else if(P.isPointLight){let J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),J.distance=P.distance,J.decay=P.decay,P.castShadow){let nt=P.shadow,st=e.get(P);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,st.shadowCameraNear=nt.camera.near,st.shadowCameraFar=nt.camera.far,n.pointShadow[m]=st,n.pointShadowMap[m]=ut,n.pointShadowMatrix[m]=P.shadow.matrix,b++}n.point[m]=J,m++}else if(P.isHemisphereLight){let J=t.get(P);J.skyColor.copy(P.color).multiplyScalar(Z),J.groundColor.copy(P.groundColor).multiplyScalar(Z),n.hemi[v]=J,v++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.sunLength!==d||I.directionalLength!==g||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==M||I.hemiLength!==v||I.numSunShadows!==p||I.numDirectionalShadows!==E||I.numPointShadows!==b||I.numSpotShadows!==x||I.numSpotMaps!==y||I.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=g,n.spot.length=_,n.rectArea.length=M,n.point.length=m,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+y-R,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,I.sunLength=d,I.directionalLength=g,I.pointLength=m,I.spotLength=_,I.rectAreaLength=M,I.hemiLength=v,I.numSunShadows=p,I.numDirectionalShadows=E,I.numPointShadows=b,I.numSpotShadows=x,I.numSpotMaps=y,I.numLightProbes=A,n.version=i_++)}function l(c,h){let u=0,f=0,d=0,p=0,S=0,g=0,m=h.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){let v=c[_];if(v.isSunLight){let E=n.sun[u];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(m),u++}else if(v.isDirectionalLight){let E=n.directional[f];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),f++}else if(v.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let E=n.rectArea[S];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),S++}else if(v.isPointLight){let E=n.point[d];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let E=n.hemi[g];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Df(i){let t=new r_(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):e.push(u)}function a(u){n.push(u)}function l(){t.setup(e),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function o_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Df(i),t.set(s,[a])):r>=o.length?(a=new Df(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var a_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l_=`uniform sampler2D shadow_pass;
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
}`,c_=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],h_=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Nf=new ae,Jr=new N,Jc=new N;function u_(i,t,e){let n=new Ti,s=new pt,r=new pt,o=new Le,a=new ca,l=new ha,c={},h=e.maxTextureSize,u={[Ci]:fn,[fn]:Ci,[we]:we},f=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:a_,fragmentShader:l_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Fe;p.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new gt(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gr;let m=this.type;this.render=function(b,x,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===ba&&(Kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gr);let R=i.getRenderTarget(),A=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Zi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let H=m!==this.type;H&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(B=>B.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,B=b.length;P<B;P++){let Z=b[P],W=Z.shadow;if(W===void 0){Kt("WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ut=W.getFrameExtents();s.multiply(ut),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ut.x),s.x=r.x*ut.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ut.y),s.y=r.y*ut.y,W.mapSize.y=r.y));let J=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=J,W.map===null||H===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Os){if(Z.isPointLight){Kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new yn(s.x,s.y,{format:Ii,type:Bn,minFilter:hn,magFilter:hn,generateMipmaps:!1}),W.map.texture.name=Z.name+".shadowMap",W.map.depthTexture=new hi(s.x,s.y,Cn),W.map.depthTexture.name=Z.name+".shadowMapDepth",W.map.depthTexture.format=oi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Xe,W.map.depthTexture.magFilter=Xe}else Z.isPointLight?(W.map=new Kr(s.x),W.map.depthTexture=new Sr(s.x,On)):(W.map=new yn(s.x,s.y),W.map.depthTexture=new hi(s.x,s.y,On)),W.map.depthTexture.name=Z.name+".shadowMap",W.map.depthTexture.format=oi,this.type===Gr?(W.map.depthTexture.compareFunction=J?zc:Bc,W.map.depthTexture.minFilter=hn,W.map.depthTexture.magFilter=hn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Xe,W.map.depthTexture.magFilter=Xe);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let nt=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();Z.isPointLight!==!0&&W.updateMatrices(Z,y);let st=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:y.layers;for(let Ft=0;Ft<nt;Ft++){let qt=W.getCamera(Ft);if(Z.isPointLight){let K=W.camera,Rt=W.matrix,Ot=Z.distance||K.far;Ot!==K.far&&(K.far=Ot,K.updateProjectionMatrix()),Jr.setFromMatrixPosition(Z.matrixWorld),K.position.copy(Jr),Jc.copy(K.position),Jc.add(c_[Ft]),K.up.copy(h_[Ft]),K.lookAt(Jc),K.updateMatrixWorld(),Rt.makeTranslation(-Jr.x,-Jr.y,-Jr.z),Nf.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Nf,K.coordinateSystem,K.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,Ft),i.clear();else{Ft===0&&(i.setRenderTarget(W.map),i.clear());let K=W.getViewport(Ft);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),U.viewport(o)}n=W.getFrustum(Ft),v(x,y,qt,Z,st,this.type)}W.isPointLightShadow!==!0&&this.type===Os&&_(W,y),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(R,A,I)};function _(b,x){let y=t.update(S);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new yn(s.x,s.y,{format:Ii,type:Bn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(x,null,y,f,S,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(x,null,y,d,S,null)}function M(b,x,y,R){let A=null,I=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)A=I;else if(A=y.isPointLight===!0?l:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let U=A.uuid,H=x.uuid,P=c[U];P===void 0&&(P={},c[U]=P);let B=P[H];B===void 0&&(B=A.clone(),P[H]=B,x.addEventListener("dispose",E)),A=B}if(A.visible=x.visible,A.wireframe=x.wireframe,R===Os?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:u[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let U=i.properties.get(A);U.light=y}return A}function v(b,x,y,R,A,I){if(b.visible===!1)return;if(b.layers.test(A)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===Os)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);let P=t.update(b),B=b.material;if(Array.isArray(B)){let Z=P.groups;for(let W=0,ut=Z.length;W<ut;W++){let J=Z[W],nt=B[J.materialIndex];if(nt&&nt.visible){let st=M(b,nt,R,I);b.onBeforeShadow(i,b,x,y,P,st,J),i.renderBufferDirect(y,null,P,st,b,J),b.onAfterShadow(i,b,x,y,P,st,J)}}}else if(B.visible){let Z=M(b,B,R,I);b.onBeforeShadow(i,b,x,y,P,Z,null),i.renderBufferDirect(y,null,P,Z,b,null),b.onAfterShadow(i,b,x,y,P,Z,null)}}let H=b.children;for(let P=0,B=H.length;P<B;P++)v(H[P],x,y,R,A,I)}function E(b){b.target.removeEventListener("dispose",E);for(let y in c){let R=c[y],A=b.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}function f_(i,t){function e(){let D=!1,et=new Le,$=null,Tt=new Le(0,0,0,0);return{setMask:function(yt){$!==yt&&!D&&(i.colorMask(yt,yt,yt,yt),$=yt)},setLocked:function(yt){D=yt},setClear:function(yt,bt,Zt,oe,xt){xt===!0&&(yt*=oe,bt*=oe,Zt*=oe),et.set(yt,bt,Zt,oe),Tt.equals(et)===!1&&(i.clearColor(yt,bt,Zt,oe),Tt.copy(et))},reset:function(){D=!1,$=null,Tt.set(-1,0,0,0)}}}function n(){let D=!1,et=!1,$=null,Tt=null,yt=null;return{setReversed:function(bt){if(et!==bt){let Zt=t.get("EXT_clip_control");bt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),et=bt;let oe=yt;yt=null,this.setClear(oe)}},getReversed:function(){return et},setTest:function(bt){bt?X(i.DEPTH_TEST):Y(i.DEPTH_TEST)},setMask:function(bt){$!==bt&&!D&&(i.depthMask(bt),$=bt)},setFunc:function(bt){if(et&&(bt=tf[bt]),Tt!==bt){switch(bt){case Ho:i.depthFunc(i.NEVER);break;case Go:i.depthFunc(i.ALWAYS);break;case ko:i.depthFunc(i.LESS);break;case Ts:i.depthFunc(i.LEQUAL);break;case Vo:i.depthFunc(i.EQUAL);break;case Wo:i.depthFunc(i.GEQUAL);break;case Xo:i.depthFunc(i.GREATER);break;case qo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=bt}},setLocked:function(bt){D=bt},setClear:function(bt){yt!==bt&&(yt=bt,et&&(bt=1-bt),i.clearDepth(bt))},reset:function(){D=!1,$=null,Tt=null,yt=null,et=!1}}}function s(){let D=!1,et=null,$=null,Tt=null,yt=null,bt=null,Zt=null,oe=null,xt=null;return{setTest:function(Jt){D||(Jt?X(i.STENCIL_TEST):Y(i.STENCIL_TEST))},setMask:function(Jt){et!==Jt&&!D&&(i.stencilMask(Jt),et=Jt)},setFunc:function(Jt,re,Lt){($!==Jt||Tt!==re||yt!==Lt)&&(i.stencilFunc(Jt,re,Lt),$=Jt,Tt=re,yt=Lt)},setOp:function(Jt,re,Lt){(bt!==Jt||Zt!==re||oe!==Lt)&&(i.stencilOp(Jt,re,Lt),bt=Jt,Zt=re,oe=Lt)},setLocked:function(Jt){D=Jt},setClear:function(Jt){xt!==Jt&&(i.clearStencil(Jt),xt=Jt)},reset:function(){D=!1,et=null,$=null,Tt=null,yt=null,bt=null,Zt=null,oe=null,xt=null}}}let r=new e,o=new n,a=new s,l={},c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],S=null,g=!1,m=null,_=null,M=null,v=null,E=null,b=null,x=null,y=new se(0,0,0),R=0,A=!1,I=null,U=null,H=null,P=null,B=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ut=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(J)[1]),W=ut>=1):J.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),W=ut>=2);let nt=null,st={},Ft=i.getParameter(i.SCISSOR_BOX),qt=i.getParameter(i.VIEWPORT),K=new Le().fromArray(Ft),Rt=new Le().fromArray(qt);function Ot(D,et,$,Tt){let yt=new Uint8Array(4),bt=i.createTexture();i.bindTexture(D,bt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<$;Zt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(et,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(et+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return bt}let z={};z[i.TEXTURE_2D]=Ot(i.TEXTURE_2D,i.TEXTURE_2D,1),z[i.TEXTURE_CUBE_MAP]=Ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[i.TEXTURE_2D_ARRAY]=Ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),z[i.TEXTURE_3D]=Ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),X(i.DEPTH_TEST),o.setFunc(Ts),_t(!1),dt(vc),X(i.CULL_FACE),lt(Zi);function X(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Y(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Ct(D,et){return f[D]!==et?(i.bindFramebuffer(D,et),f[D]=et,D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=et),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=et),!0):!1}function j(D,et){let $=p,Tt=!1;if(D){$=d.get(et),$===void 0&&($=[],d.set(et,$));let yt=D.textures;if($.length!==yt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,Zt=yt.length;bt<Zt;bt++)$[bt]=i.COLOR_ATTACHMENT0+bt;$.length=yt.length,Tt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers($)}function at(D){return S!==D?(i.useProgram(D),S=D,!0):!1}let ct={[Ji]:i.FUNC_ADD,[bu]:i.FUNC_SUBTRACT,[Eu]:i.FUNC_REVERSE_SUBTRACT};ct[Tu]=i.MIN,ct[wu]=i.MAX;let O={[Au]:i.ZERO,[Ru]:i.ONE,[Cu]:i.SRC_COLOR,[Sc]:i.SRC_ALPHA,[Uu]:i.SRC_ALPHA_SATURATE,[Du]:i.DST_COLOR,[Pu]:i.DST_ALPHA,[Iu]:i.ONE_MINUS_SRC_COLOR,[bc]:i.ONE_MINUS_SRC_ALPHA,[Nu]:i.ONE_MINUS_DST_COLOR,[Lu]:i.ONE_MINUS_DST_ALPHA,[Fu]:i.CONSTANT_COLOR,[Ou]:i.ONE_MINUS_CONSTANT_COLOR,[Bu]:i.CONSTANT_ALPHA,[zu]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(D,et,$,Tt,yt,bt,Zt,oe,xt,Jt){if(D===Zi){g===!0&&(Y(i.BLEND),g=!1);return}if(g===!1&&(X(i.BLEND),g=!0),D!==Su){if(D!==m||Jt!==A){if((_!==Ji||E!==Ji)&&(i.blendEquation(i.FUNC_ADD),_=Ji,E=Ji),Jt)switch(D){case Bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ui:i.blendFunc(i.ONE,i.ONE);break;case yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:jt("WebGLState: Invalid blending: ",D);break}else switch(D){case Bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yc:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mc:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",D);break}M=null,v=null,b=null,x=null,y.set(0,0,0),R=0,m=D,A=Jt}return}yt=yt||et,bt=bt||$,Zt=Zt||Tt,(et!==_||yt!==E)&&(i.blendEquationSeparate(ct[et],ct[yt]),_=et,E=yt),($!==M||Tt!==v||bt!==b||Zt!==x)&&(i.blendFuncSeparate(O[$],O[Tt],O[bt],O[Zt]),M=$,v=Tt,b=bt,x=Zt),(oe.equals(y)===!1||xt!==R)&&(i.blendColor(oe.r,oe.g,oe.b,xt),y.copy(oe),R=xt),m=D,A=!1}function ot(D,et){D.side===we?Y(i.CULL_FACE):X(i.CULL_FACE);let $=D.side===fn;et&&($=!$),_t($),D.blending===Bs&&D.transparent===!1?lt(Zi):lt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let Tt=D.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ht(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):Y(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(D){I!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),I=D)}function dt(D){D!==yu?(X(i.CULL_FACE),D!==U&&(D===vc?i.cullFace(i.BACK):D===Mu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Y(i.CULL_FACE),U=D}function rt(D){D!==H&&(W&&i.lineWidth(D),H=D)}function ht(D,et,$){D?(X(i.POLYGON_OFFSET_FILL),(P!==et||B!==$)&&(P=et,B=$,o.getReversed()&&(et=-et,$=-$),i.polygonOffset(et,$))):Y(i.POLYGON_OFFSET_FILL)}function St(D){D?X(i.SCISSOR_TEST):Y(i.SCISSOR_TEST)}function Pt(D){D===void 0&&(D=i.TEXTURE0+Z-1),nt!==D&&(i.activeTexture(D),nt=D)}function Yt(D,et,$){$===void 0&&(nt===null?$=i.TEXTURE0+Z-1:$=nt);let Tt=st[$];Tt===void 0&&(Tt={type:void 0,texture:void 0},st[$]=Tt),(Tt.type!==D||Tt.texture!==et)&&(nt!==$&&(i.activeTexture($),nt=$),i.bindTexture(D,et||z[D]),Tt.type=D,Tt.texture=et)}function L(){let D=st[nt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ie(){try{i.compressedTexImage2D(...arguments)}catch(D){jt("WebGLState:",D)}}function kt(){try{i.compressedTexImage3D(...arguments)}catch(D){jt("WebGLState:",D)}}function he(){try{i.texSubImage2D(...arguments)}catch(D){jt("WebGLState:",D)}}function vt(){try{i.texSubImage3D(...arguments)}catch(D){jt("WebGLState:",D)}}function Re(){try{i.compressedTexSubImage2D(...arguments)}catch(D){jt("WebGLState:",D)}}function Bt(){try{i.compressedTexSubImage3D(...arguments)}catch(D){jt("WebGLState:",D)}}function Vt(){try{i.texStorage2D(...arguments)}catch(D){jt("WebGLState:",D)}}function C(){try{i.texStorage3D(...arguments)}catch(D){jt("WebGLState:",D)}}function T(){try{i.texImage2D(...arguments)}catch(D){jt("WebGLState:",D)}}function G(){try{i.texImage3D(...arguments)}catch(D){jt("WebGLState:",D)}}function ft(D){return u[D]!==void 0?u[D]:i.getParameter(D)}function it(D,et){u[D]!==et&&(i.pixelStorei(D,et),u[D]=et)}function mt(D){K.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),K.copy(D))}function Mt(D){Rt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Rt.copy(D))}function Q(D,et){let $=c.get(et);$===void 0&&($=new WeakMap,c.set(et,$));let Tt=$.get(D);Tt===void 0&&(Tt=i.getUniformBlockIndex(et,D.name),i.uniformBlockBinding(et,Tt,Tt),$.set(D,Tt))}function tt(D,et,$){let yt=c.get(et).get(D);l[yt]!==$&&(i.bindBufferBase(i.UNIFORM_BUFFER,yt,$),l[yt]=$)}function Et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},nt=null,st={},f={},l={},d=new WeakMap,p=[],S=null,g=!1,m=null,_=null,M=null,v=null,E=null,b=null,x=null,y=new se(0,0,0),R=0,A=!1,I=null,U=null,H=null,P=null,B=null,K.set(0,0,i.canvas.width,i.canvas.height),Rt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:X,disable:Y,bindFramebuffer:Ct,drawBuffers:j,useProgram:at,setBlending:lt,setMaterial:ot,setFlipSided:_t,setCullFace:dt,setLineWidth:rt,setPolygonOffset:ht,setScissorTest:St,activeTexture:Pt,bindTexture:Yt,unbindTexture:L,compressedTexImage2D:ie,compressedTexImage3D:kt,texImage2D:T,texImage3D:G,pixelStorei:it,getParameter:ft,updateUBOMapping:Q,uniformBlockBinding:tt,texStorage2D:Vt,texStorage3D:C,texSubImage2D:he,texSubImage3D:vt,compressedTexSubImage2D:Re,compressedTexSubImage3D:Bt,scissor:mt,viewport:Mt,reset:Et}}function d_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,h=new WeakMap,u=new Set,f,d=new WeakMap,p=new Set,S=new FinalizationRegistry(C=>p.delete(C)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,T){return g?new OffscreenCanvas(C,T):ur("canvas")}function _(C,T,G){let ft=1,it=Vt(C);if((it.width>G||it.height>G)&&(ft=G/Math.max(it.width,it.height)),ft<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let mt=Math.floor(ft*it.width),Mt=Math.floor(ft*it.height);f===void 0&&(f=m(mt,Mt));let Q=T?m(mt,Mt):f;return Q.width=mt,Q.height=Mt,Q.getContext("2d").drawImage(C,0,0,mt,Mt),Kt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+mt+"x"+Mt+")."),Q}else return"data"in C&&Kt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),C;return C}function M(C){return C.generateMipmaps}function v(C){i.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(C,T,G,ft,it,mt=!1){if(C!==null){if(i[C]!==void 0)return i[C];Kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Mt;ft&&(Mt=t.get("EXT_texture_norm16"),Mt||Kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=T;if(T===i.RED&&(G===i.FLOAT&&(Q=i.R32F),G===i.HALF_FLOAT&&(Q=i.R16F),G===i.UNSIGNED_BYTE&&(Q=i.R8),G===i.UNSIGNED_SHORT&&Mt&&(Q=Mt.R16_EXT),G===i.SHORT&&Mt&&(Q=Mt.R16_SNORM_EXT)),T===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.R8UI),G===i.UNSIGNED_SHORT&&(Q=i.R16UI),G===i.UNSIGNED_INT&&(Q=i.R32UI),G===i.BYTE&&(Q=i.R8I),G===i.SHORT&&(Q=i.R16I),G===i.INT&&(Q=i.R32I)),T===i.RG&&(G===i.FLOAT&&(Q=i.RG32F),G===i.HALF_FLOAT&&(Q=i.RG16F),G===i.UNSIGNED_BYTE&&(Q=i.RG8),G===i.UNSIGNED_SHORT&&Mt&&(Q=Mt.RG16_EXT),G===i.SHORT&&Mt&&(Q=Mt.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RG8UI),G===i.UNSIGNED_SHORT&&(Q=i.RG16UI),G===i.UNSIGNED_INT&&(Q=i.RG32UI),G===i.BYTE&&(Q=i.RG8I),G===i.SHORT&&(Q=i.RG16I),G===i.INT&&(Q=i.RG32I)),T===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),G===i.UNSIGNED_INT&&(Q=i.RGB32UI),G===i.BYTE&&(Q=i.RGB8I),G===i.SHORT&&(Q=i.RGB16I),G===i.INT&&(Q=i.RGB32I)),T===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),G===i.UNSIGNED_INT&&(Q=i.RGBA32UI),G===i.BYTE&&(Q=i.RGBA8I),G===i.SHORT&&(Q=i.RGBA16I),G===i.INT&&(Q=i.RGBA32I)),T===i.RGB&&(G===i.UNSIGNED_SHORT&&Mt&&(Q=Mt.RGB16_EXT),G===i.SHORT&&Mt&&(Q=Mt.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),T===i.RGBA){let tt=mt?hr:de.getTransfer(it);G===i.FLOAT&&(Q=i.RGBA32F),G===i.HALF_FLOAT&&(Q=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Q=tt===_e?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&Mt&&(Q=Mt.RGBA16_EXT),G===i.SHORT&&Mt&&(Q=Mt.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function x(C,T){let G;return C?T===null||T===On||T===Ki?G=i.DEPTH24_STENCIL8:T===Cn?G=i.DEPTH32F_STENCIL8:T===Hs&&(G=i.DEPTH24_STENCIL8,Kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===On||T===Ki?G=i.DEPTH_COMPONENT24:T===Cn?G=i.DEPTH_COMPONENT32F:T===Hs&&(G=i.DEPTH_COMPONENT16),G}function y(C,T){return M(C)===!0||C.isFramebufferTexture&&C.minFilter!==Xe&&C.minFilter!==hn?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function R(C){let T=new WeakRef(C);n.get(C).__ref=T,p.add(T),S.register(C,T,T)}function A(C){let T=n.get(C).__ref;T!==void 0&&(p.delete(T),S.unregister(T))}function I(C){H(C.target)}function U(C){P(C.target)}function H(C){C.removeEventListener("dispose",I),A(C),Z(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&u.delete(C)}function P(C){C.removeEventListener("dispose",U),A(C),ut(C)}function B(){for(let C of p){let T=C.deref();T!==void 0&&(T.isRenderTarget===!0?P(T):H(T))}p.clear(),u.clear()}function Z(C){let T=n.get(C);if(T.__webglInit===void 0)return;let G=C.source,ft=d.get(G);if(ft){let it=ft[T.__cacheKey];it.usedTimes--,it.usedTimes===0&&W(C),Object.keys(ft).length===0&&d.delete(G)}n.remove(C)}function W(C){let T=n.get(C);i.deleteTexture(T.__webglTexture);let G=C.source,ft=d.get(G);delete ft[T.__cacheKey],o.memory.textures--}function ut(C){let T=n.get(C);T.__depthDisposeCallback&&T.__depthDisposeCallback();let G=C.depthTexture;if(G&&G.renderTarget===C&&H(G),C.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(T.__webglFramebuffer[it]))for(let mt=0;mt<T.__webglFramebuffer[it].length;mt++)i.deleteFramebuffer(T.__webglFramebuffer[it][mt]);else i.deleteFramebuffer(T.__webglFramebuffer[it]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[it])}else{if(Array.isArray(T.__webglFramebuffer))for(let it=0;it<T.__webglFramebuffer.length;it++)i.deleteFramebuffer(T.__webglFramebuffer[it]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let it=0;it<T.__webglColorRenderbuffer.length;it++)T.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[it]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let ft=C.textures;for(let it=0,mt=ft.length;it<mt;it++){let Mt=n.get(ft[it]);Mt.__webglTexture&&(i.deleteTexture(Mt.__webglTexture),o.memory.textures--),n.remove(ft[it])}n.remove(C)}let J=0;function nt(){J=0}function st(){return J}function Ft(C){J=C}function qt(){let C=J;return C>=s.maxTextures&&Kt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),J+=1,C}function K(C){let T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.mipmapsAutoUpdate),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function Rt(C,T){let G=n.get(C);if(C.isVideoTexture&&Re(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){let ft=C.image;if(ft===null)Kt("WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)Kt("WebGLRenderer: Texture marked for update but image is incomplete");else{ot(G,C,T);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+T)}function Ot(C,T){let G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){ot(G,C,T);return}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+T)}function z(C,T){let G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){ot(G,C,T);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+T)}function X(C,T){let G=n.get(C);if(C.version>0&&G.__version!==C.version){_t(G,C,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+T)}let Y={[Xi]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[Yo]:i.MIRRORED_REPEAT},Ct={[Xe]:i.NEAREST,[ku]:i.NEAREST_MIPMAP_NEAREST,[kr]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[Aa]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},j={[qu]:i.NEVER,[Hc]:i.ALWAYS,[Yu]:i.LESS,[Bc]:i.LEQUAL,[Zu]:i.EQUAL,[zc]:i.GEQUAL,[Ju]:i.GREATER,[$u]:i.NOTEQUAL};function at(C,T){if(T.type===Cn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===hn||T.magFilter===Aa||T.magFilter===kr||T.magFilter===fi||T.minFilter===hn||T.minFilter===Aa||T.minFilter===kr||T.minFilter===fi)&&Kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Y[T.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Y[T.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Y[T.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Ct[T.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Ct[T.minFilter]),T.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,j[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Xe||T.minFilter!==kr&&T.minFilter!==fi||T.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ct(C,T){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",I),R(T));let ft=T.source,it=d.get(ft);it===void 0&&(it={},d.set(ft,it));let mt=K(T);if(mt!==C.__cacheKey){it[mt]===void 0&&(it[mt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),it[mt].usedTimes++;let Mt=it[C.__cacheKey];Mt!==void 0&&(it[C.__cacheKey].usedTimes--,Mt.usedTimes===0&&W(T)),C.__cacheKey=mt,C.__webglTexture=it[mt].texture}return G}function O(C,T,G){return Math.floor(Math.floor(C/G)/T)}function lt(C,T,G,ft){let mt=C.updateRanges;if(mt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,G,ft,T.data);else{mt.sort((D,et)=>D.start-et.start);let Mt=0;for(let D=1;D<mt.length;D++){let et=mt[Mt],$=mt[D],Tt=et.start+et.count,yt=O($.start,T.width,4),bt=O(et.start,T.width,4);$.start<=Tt+1&&yt===bt&&O($.start+$.count-1,T.width,4)===yt?et.count=Math.max(et.count,$.start+$.count-et.start):(++Mt,mt[Mt]=$)}mt.length=Mt+1;let Q=e.getParameter(i.UNPACK_ROW_LENGTH),tt=e.getParameter(i.UNPACK_SKIP_PIXELS),Et=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let D=0,et=mt.length;D<et;D++){let $=mt[D],Tt=Math.floor($.start/4),yt=Math.ceil($.count/4),bt=Tt%T.width,Zt=Math.floor(Tt/T.width),oe=yt,xt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,bt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Zt),e.texSubImage2D(i.TEXTURE_2D,0,bt,Zt,oe,xt,G,ft,T.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Q),e.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Et)}}function ot(C,T,G){let ft=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ft=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ft=i.TEXTURE_3D);let it=ct(C,T),mt=T.source;e.bindTexture(ft,C.__webglTexture,i.TEXTURE0+G);let Mt=n.get(mt);if(mt.version!==Mt.__version||it===!0){if(e.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let xt=de.getPrimaries(de.workingColorSpace),Jt=T.colorSpace===pi?null:de.getPrimaries(T.colorSpace),re=T.colorSpace===pi||xt===Jt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let tt=_(T.image,!1,s.maxTextureSize);tt=Bt(T,tt);let Et=r.convert(T.format,T.colorSpace),D=r.convert(T.type),et=b(T.internalFormat,Et,D,T.normalized,T.colorSpace,T.isVideoTexture);at(ft,T);let $,Tt=T.mipmaps,yt=T.isVideoTexture!==!0,bt=Mt.__version===void 0||it===!0,Zt=mt.dataReady,oe=y(T,tt);if(T.isDepthTexture)et=x(T.format===di,T.type),bt&&(yt?e.texStorage2D(i.TEXTURE_2D,1,et,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,et,tt.width,tt.height,0,Et,D,null));else if(T.isDataTexture)if(Tt.length>0){yt&&bt&&e.texStorage2D(i.TEXTURE_2D,oe,et,Tt[0].width,Tt[0].height);for(let xt=0,Jt=Tt.length;xt<Jt;xt++)$=Tt[xt],yt?Zt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,$.width,$.height,Et,D,$.data):e.texImage2D(i.TEXTURE_2D,xt,et,$.width,$.height,0,Et,D,$.data);T.generateMipmaps=!1}else yt?(bt&&e.texStorage2D(i.TEXTURE_2D,oe,et,tt.width,tt.height),Zt&&lt(T,tt,Et,D)):e.texImage2D(i.TEXTURE_2D,0,et,tt.width,tt.height,0,Et,D,tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){yt&&bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,oe,et,Tt[0].width,Tt[0].height,tt.depth);for(let xt=0,Jt=Tt.length;xt<Jt;xt++)if($=Tt[xt],T.format!==zn)if(Et!==null)if(yt){if(Zt)if(T.layerUpdates.size>0){let re=Yc($.width,$.height,T.format,T.type);for(let Lt of T.layerUpdates){let ye=$.data.subarray(Lt*re/$.data.BYTES_PER_ELEMENT,(Lt+1)*re/$.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,Lt,$.width,$.height,1,Et,ye)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,$.width,$.height,tt.depth,Et,$.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xt,et,$.width,$.height,tt.depth,0,$.data,0,0);else Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else yt?Zt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,$.width,$.height,tt.depth,Et,D,$.data):e.texImage3D(i.TEXTURE_2D_ARRAY,xt,et,$.width,$.height,tt.depth,0,Et,D,$.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{yt&&bt&&e.texStorage2D(i.TEXTURE_2D,oe,et,Tt[0].width,Tt[0].height);for(let xt=0,Jt=Tt.length;xt<Jt;xt++)$=Tt[xt],T.format!==zn?Et!==null?yt?Zt&&e.compressedTexSubImage2D(i.TEXTURE_2D,xt,0,0,$.width,$.height,Et,$.data):e.compressedTexImage2D(i.TEXTURE_2D,xt,et,$.width,$.height,0,$.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?Zt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,$.width,$.height,Et,D,$.data):e.texImage2D(i.TEXTURE_2D,xt,et,$.width,$.height,0,Et,D,$.data)}else if(T.isDataArrayTexture)if(yt){if(bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,oe,et,tt.width,tt.height,tt.depth),Zt)if(T.layerUpdates.size>0){let xt=Yc(tt.width,tt.height,T.format,T.type);for(let Jt of T.layerUpdates){let re=tt.data.subarray(Jt*xt/tt.data.BYTES_PER_ELEMENT,(Jt+1)*xt/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Jt,tt.width,tt.height,1,Et,D,re)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,Et,D,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,et,tt.width,tt.height,tt.depth,0,Et,D,tt.data);else if(T.isData3DTexture)yt?(bt&&e.texStorage3D(i.TEXTURE_3D,oe,et,tt.width,tt.height,tt.depth),Zt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,Et,D,tt.data)):e.texImage3D(i.TEXTURE_3D,0,et,tt.width,tt.height,tt.depth,0,Et,D,tt.data);else if(T.isFramebufferTexture){if(bt)if(yt)e.texStorage2D(i.TEXTURE_2D,oe,et,tt.width,tt.height);else{let xt=tt.width,Jt=tt.height;for(let re=0;re<oe;re++)e.texImage2D(i.TEXTURE_2D,re,et,xt,Jt,0,Et,D,null),xt>>=1,Jt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let xt=i.canvas;if(xt.hasAttribute("layoutsubtree")||xt.setAttribute("layoutsubtree","true"),tt.parentNode!==xt){xt.appendChild(tt),u.add(T),xt.onpaint=Jt=>{let re=Jt.changedElements;for(let Lt of u)re.includes(Lt.image)&&(Lt.needsUpdate=!0)},xt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,tt);else{let re=i.RGBA,Lt=i.RGBA,ye=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,re,Lt,ye,tt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Tt.length>0){if(yt&&bt){let xt=Vt(Tt[0]);e.texStorage2D(i.TEXTURE_2D,oe,et,xt.width,xt.height)}for(let xt=0,Jt=Tt.length;xt<Jt;xt++)$=Tt[xt],yt?Zt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,Et,D,$):e.texImage2D(i.TEXTURE_2D,xt,et,Et,D,$);T.generateMipmaps=!1}else if(yt){if(bt){let xt=Vt(tt);e.texStorage2D(i.TEXTURE_2D,oe,et,xt.width,xt.height)}Zt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,D,tt)}else e.texImage2D(i.TEXTURE_2D,0,et,Et,D,tt);M(T)&&T.mipmapsAutoUpdate===!0&&v(ft),Mt.__version=mt.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function _t(C,T,G){if(T.image.length!==6)return;let ft=ct(C,T),it=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+G);let mt=n.get(it);if(it.version!==mt.__version||ft===!0){e.activeTexture(i.TEXTURE0+G);let Mt=de.getPrimaries(de.workingColorSpace),Q=T.colorSpace===pi?null:de.getPrimaries(T.colorSpace),tt=T.colorSpace===pi||Mt===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let Et=T.isCompressedTexture||T.image[0].isCompressedTexture,D=T.image[0]&&T.image[0].isDataTexture,et=[];for(let Lt=0;Lt<6;Lt++)!Et&&!D?et[Lt]=_(T.image[Lt],!0,s.maxCubemapSize):et[Lt]=D?T.image[Lt].image:T.image[Lt],et[Lt]=Bt(T,et[Lt]);let $=et[0],Tt=r.convert(T.format,T.colorSpace),yt=r.convert(T.type),bt=b(T.internalFormat,Tt,yt,T.normalized,T.colorSpace),Zt=T.isVideoTexture!==!0,oe=mt.__version===void 0||ft===!0,xt=it.dataReady,Jt=y(T,$);at(i.TEXTURE_CUBE_MAP,T);let re;if(T.isDepthTexture){if(bt=x(T.format===di,T.type),oe)if(Zt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,bt,$.width,$.height);else for(let Lt=0;Lt<6;Lt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,bt,$.width,$.height,0,Tt,yt,null)}else if(Et){Zt&&oe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Jt,bt,$.width,$.height);for(let Lt=0;Lt<6;Lt++){re=et[Lt].mipmaps;for(let ye=0;ye<re.length;ye++){let ke=re[ye];T.format!==zn?Tt!==null?Zt?xt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,ye,0,0,ke.width,ke.height,Tt,ke.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,ye,bt,ke.width,ke.height,0,ke.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,ye,0,0,ke.width,ke.height,Tt,yt,ke.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,ye,bt,ke.width,ke.height,0,Tt,yt,ke.data)}}}else{if(re=T.mipmaps,Zt&&oe){re.length>0&&Jt++;let Lt=Vt(et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Jt,bt,Lt.width,Lt.height)}for(let Lt=0;Lt<6;Lt++)if(D){Zt?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,0,0,et[Lt].width,et[Lt].height,Tt,yt,et[Lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,bt,et[Lt].width,et[Lt].height,0,Tt,yt,et[Lt].data);for(let ye=0;ye<re.length;ye++){let gi=re[ye].image[Lt].image;Zt?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,ye+1,0,0,gi.width,gi.height,Tt,yt,gi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,ye+1,bt,gi.width,gi.height,0,Tt,yt,gi.data)}}else{Zt?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,0,0,Tt,yt,et[Lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,bt,Tt,yt,et[Lt]);for(let ye=0;ye<re.length;ye++){let ke=re[ye];Zt?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,ye+1,0,0,Tt,yt,ke.image[Lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,ye+1,bt,Tt,yt,ke.image[Lt])}}}M(T)&&T.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),mt.__version=it.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function dt(C,T,G,ft,it,mt){let Mt=r.convert(G.format,G.colorSpace),Q=r.convert(G.type),tt=b(G.internalFormat,Mt,Q,G.normalized,G.colorSpace),Et=n.get(T),D=n.get(G);if(D.__renderTarget=T,!Et.__hasExternalTextures){let et=Math.max(1,T.width>>mt),$=Math.max(1,T.height>>mt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,mt,tt,et,$,T.depth,0,Mt,Q,null):e.texImage2D(it,mt,tt,et,$,0,Mt,Q,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),vt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,it,D.__webglTexture,0,he(T)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ft,it,D.__webglTexture,mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(C,T,G){if(i.bindRenderbuffer(i.RENDERBUFFER,C),T.depthBuffer){let ft=T.depthTexture,it=ft&&ft.isDepthTexture?ft.type:null,mt=x(T.stencilBuffer,it),Mt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;vt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(T),mt,T.width,T.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(T),mt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,mt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,C)}else{let ft=T.textures;for(let it=0;it<ft.length;it++){let mt=ft[it],Mt=r.convert(mt.format,mt.colorSpace),Q=r.convert(mt.type),tt=b(mt.internalFormat,Mt,Q,mt.normalized,mt.colorSpace);vt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(T),tt,T.width,T.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(T),tt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,tt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(C,T,G){let ft=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(T.depthTexture);it.__renderTarget=T;let mt=ft?T.depthTexture.image[0]:T.depthTexture.image;(!it.__webglTexture||mt.width!==T.width||mt.height!==T.height)&&(mt.width=T.width,mt.height=T.height,T.depthTexture.needsUpdate=!0),ft?X(T.depthTexture,0):Rt(T.depthTexture,0);let Mt=it.__webglTexture,Q=he(T),tt=ft?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,Et=T.depthTexture.format===di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===oi)vt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Et,tt,Mt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,Et,tt,Mt,0);else if(T.depthTexture.format===di)vt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Et,tt,Mt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,Et,tt,Mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function St(C){let T=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){let ft=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ft){let it=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ft.removeEventListener("dispose",it)};ft.addEventListener("dispose",it),T.__depthDisposeCallback=it}T.__boundDepthTexture=ft}if(C.depthTexture&&!T.__autoAllocateDepthBuffer)if(G)for(let ft=0;ft<6;ft++)ht(T.__webglFramebuffer[ft],C,ft);else C.texture.mipmaps.length>0?ht(T.__webglFramebuffer[0],C,0):ht(T.__webglFramebuffer,C,0);else if(G){T.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ft]),T.__webglDepthbuffer[ft]===void 0)T.__webglDepthbuffer[ft]=i.createRenderbuffer(),rt(T.__webglDepthbuffer[ft],C,!1);else{let it=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer[ft];i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,mt)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),rt(T.__webglDepthbuffer,C,!1);else{let it=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,mt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(C,T,G){let ft=n.get(C);T!==void 0&&dt(ft.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&St(C)}function Yt(C){let T=C.texture,G=n.get(C),ft=n.get(T);C.addEventListener("dispose",U),R(C);let it=C.textures,mt=C.isWebGLCubeRenderTarget===!0,Mt=it.length>1;if(Mt||(ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture()),ft.__version=T.version,o.memory.textures++),mt){G.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(T.mipmaps.length>0){G.__webglFramebuffer[Q]=[];for(let tt=0;tt<T.mipmaps.length;tt++)G.__webglFramebuffer[Q][tt]=i.createFramebuffer()}else G.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(T.mipmaps.length>0){G.__webglFramebuffer=[];for(let Q=0;Q<T.mipmaps.length;Q++)G.__webglFramebuffer[Q]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let Q=0,tt=it.length;Q<tt;Q++){let Et=n.get(it[Q]);Et.__webglTexture===void 0&&(Et.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&vt(C)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Q=0;Q<it.length;Q++){let tt=it[Q];G.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Q]);let Et=r.convert(tt.format,tt.colorSpace),D=r.convert(tt.type),et=b(tt.internalFormat,Et,D,tt.normalized,tt.colorSpace,C.isXRRenderTarget===!0),$=he(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,et,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,G.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(mt){e.bindTexture(i.TEXTURE_CUBE_MAP,ft.__webglTexture),at(i.TEXTURE_CUBE_MAP,T);for(let Q=0;Q<6;Q++)if(T.mipmaps.length>0)for(let tt=0;tt<T.mipmaps.length;tt++)dt(G.__webglFramebuffer[Q][tt],C,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,tt);else dt(G.__webglFramebuffer[Q],C,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);M(T)?v(i.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(Mt){for(let Q=0,tt=it.length;Q<tt;Q++){let Et=it[Q],D=n.get(Et),et=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(et=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,D.__webglTexture),at(et,Et),dt(G.__webglFramebuffer,C,Et,i.COLOR_ATTACHMENT0+Q,et,0),M(Et)&&v(et)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,ft.__webglTexture),at(Q,T),T.mipmaps.length>0)for(let tt=0;tt<T.mipmaps.length;tt++)dt(G.__webglFramebuffer[tt],C,T,i.COLOR_ATTACHMENT0,Q,tt);else dt(G.__webglFramebuffer,C,T,i.COLOR_ATTACHMENT0,Q,0);M(T)?v(Q):T.mipmaps.length>0&&i.texParameteri(Q,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&St(C)}function L(C){let T=C.textures;for(let G=0,ft=T.length;G<ft;G++){let it=T[G];if(M(it)&&it.mipmapsAutoUpdate===!0){let mt=E(C),Mt=n.get(it).__webglTexture;e.bindTexture(mt,Mt),v(mt),e.unbindTexture()}}}let ie=[];function kt(C){if(C.samples>0){if(vt(C)===!1){let T=C.textures,G=C.width,ft=C.height,it=i.COLOR_BUFFER_BIT,mt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(C),Q=T.length>1;if(Q)for(let Et=0;Et<T.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Et=0;Et<T.length;Et++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[Et]);let D=n.get(T[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,G,ft,0,0,G,ft,it,i.NEAREST),l===!0&&(ie.length=0,ie.push(i.COLOR_ATTACHMENT0+Et),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&ie.push(mt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let Et=0;Et<T.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[Et]);let D=n.get(T[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,D,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let T=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function he(C){return Math.min(s.maxSamples,C.samples)}function vt(C){let T=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Re(C){let T=o.render.frame;h.get(C)!==T&&(h.set(C,T),C.update())}function Bt(C,T){let G=C.colorSpace,ft=C.format,it=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==cr&&G!==pi&&(de.getTransfer(G)===_e?(ft!==zn||it!==mn)&&Kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",G)),T}function Vt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=qt,this.resetTextureUnits=nt,this.getTextureUnits=st,this.setTextureUnits=Ft,this.setTexture2D=Rt,this.setTexture2DArray=Ot,this.setTexture3D=z,this.setTextureCube=X,this.rebindTextures=Pt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=vt,this.dispose=B}function p_(i,t){function e(n,s=pi){let r,o=de.getTransfer(s);if(n===mn)return i.UNSIGNED_BYTE;if(n===Ca)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ia)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lc)return i.BYTE;if(n===Dc)return i.SHORT;if(n===Hs)return i.UNSIGNED_SHORT;if(n===Ra)return i.INT;if(n===On)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===Bn)return i.HALF_FLOAT;if(n===Fc)return i.ALPHA;if(n===Oc)return i.RGB;if(n===zn)return i.RGBA;if(n===oi)return i.DEPTH_COMPONENT;if(n===di)return i.DEPTH_STENCIL;if(n===Pa)return i.RED;if(n===La)return i.RED_INTEGER;if(n===Ii)return i.RG;if(n===Da)return i.RG_INTEGER;if(n===Na)return i.RGBA_INTEGER;if(n===Vr||n===Wr||n===Xr||n===qr)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Fa||n===Oa||n===Ba)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===za||n===Ha||n===Ga||n===ka||n===Va||n===Yr||n===Wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===za||n===Ha)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ga)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ka)return r.COMPRESSED_R11_EAC;if(n===Va)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Yr)return r.COMPRESSED_RG11_EAC;if(n===Wa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xa||n===qa||n===Ya||n===Za||n===Ja||n===$a||n===Ka||n===ja||n===Qa||n===tl||n===el||n===nl||n===il||n===sl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Za)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ja)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$a)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===il)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rl||n===ol||n===al)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===rl)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ll||n===cl||n===Zr||n===hl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ll)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var m_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g_=`
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

}`,nh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new br(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Yn({vertexShader:m_,fragmentShader:g_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new gt(new Ie(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ih=class extends Xn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,S=typeof XRWebGLBinding<"u",g=new nh,m={},_=e.getContextAttributes(),M=null,v=null,E=[],b=[],x=new pt,y=null,R=null,A=new cn;A.viewport=new Le;let I=new cn;I.viewport=new Le;let U=[A,I],H=new Sa,P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Rt=E[K];return Rt===void 0&&(Rt=new Cs,E[K]=Rt),Rt.getTargetRaySpace()},this.getControllerGrip=function(K){let Rt=E[K];return Rt===void 0&&(Rt=new Cs,E[K]=Rt),Rt.getGripSpace()},this.getHand=function(K){let Rt=E[K];return Rt===void 0&&(Rt=new Cs,E[K]=Rt),Rt.getHandSpace()};function Z(K){let Rt=b.indexOf(K.inputSource);if(Rt===-1)return;let Ot=E[Rt];Ot!==void 0&&(Ot.update(K.inputSource,K.frame,c||o),Ot.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ut);for(let K=0;K<E.length;K++){let Rt=b[K];Rt!==null&&(b[K]=null,E[K].disconnect(Rt))}P=null,B=null,g.reset();for(let K in m)delete m[K];if(t.setRenderTarget(M),d=null,f=null,u=null,s=null,v=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(x.width,x.height,!1),R!==null){let K=R.camera;K.fov=R.fov,K.zoom=R.zoom,K.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&S&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ut),_.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(x),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ot=null,z=null,X=null;_.depth&&(X=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ot=_.stencil?di:oi,z=_.stencil?Ki:On);let Y={colorFormat:e.RGBA8,depthFormat:X,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Y),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new yn(f.textureWidth,f.textureHeight,{format:zn,type:mn,depthTexture:new hi(f.textureWidth,f.textureHeight,z,void 0,void 0,void 0,void 0,void 0,void 0,Ot),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Ot={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Ot),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new yn(d.framebufferWidth,d.framebufferHeight,{format:zn,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ut(K){for(let Rt=0;Rt<K.removed.length;Rt++){let Ot=K.removed[Rt],z=b.indexOf(Ot);z>=0&&(b[z]=null,E[z].disconnect(Ot))}for(let Rt=0;Rt<K.added.length;Rt++){let Ot=K.added[Rt],z=b.indexOf(Ot);if(z===-1){for(let Y=0;Y<E.length;Y++)if(Y>=b.length){b.push(Ot),z=Y;break}else if(b[Y]===null){b[Y]=Ot,z=Y;break}if(z===-1)break}let X=E[z];X&&X.connect(Ot)}}function J(K,Rt){Rt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Rt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let Rt=K.near,Ot=K.far;g.texture!==null&&(g.depthNear>0&&(Rt=g.depthNear),g.depthFar>0&&(Ot=g.depthFar)),H.near=I.near=A.near=Rt,H.far=I.far=A.far=Ot,(P!==H.near||B!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),P=H.near,B=H.far),H.layers.mask=K.layers.mask|6,A.layers.mask=H.layers.mask&-5,I.layers.mask=H.layers.mask&-3;let z=K.parent,X=H.cameras;J(H,z);for(let Y=0;Y<X.length;Y++)J(X[Y],z);H.projectionMatrix.copy(A.projectionMatrix),H.projectionMatrixInverse.copy(A.projectionMatrixInverse),R===null&&K.isPerspectiveCamera&&(R={camera:K,fov:K.fov,zoom:K.zoom}),nt(K,H,z)};function nt(K,Rt,Ot){Ot===null?K.matrix.copy(Rt.matrixWorld):(K.matrix.copy(Ot.matrixWorld),K.matrix.invert(),K.matrix.multiply(Rt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Rt.projectionMatrix),K.projectionMatrixInverse.copy(Rt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Jo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(K){return m[K]};let st=null;function Ft(K,Rt){if(h=Rt.getViewerPose(c||o),p=Rt,h!==null){let Ot=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let z=!1;Ot.length!==H.cameras.length&&(H.cameras.length=0,z=!0);for(let j=0;j<Ot.length;j++){let at=Ot[j],ct=null;if(d!==null)ct=d.getViewport(at);else{let lt=u.getViewSubImage(f,at);ct=lt.viewport,j===0&&(t.setRenderTargetTextures(v,lt.colorTexture,lt.depthStencilTexture),t.setRenderTarget(v))}let O=U[j];O===void 0&&(O=new cn,O.layers.enable(j),O.viewport=new Le,U[j]=O),O.matrix.fromArray(at.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(at.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(ct.x,ct.y,ct.width,ct.height),j===0&&(H.matrix.copy(O.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),z===!0&&H.cameras.push(O)}let X=s.enabledFeatures;if(X&&X.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){u=n.getBinding();let j=u.getDepthInformation(Ot[0]);j&&j.isValid&&j.texture&&g.init(j,s.renderState)}if(X&&X.includes("camera-access")&&S){t.state.unbindTexture(),u=n.getBinding();for(let j=0;j<Ot.length;j++){let at=Ot[j].camera;if(at){let ct=m[at];ct||(ct=new br,m[at]=ct);let O=u.getCameraImage(at);ct.sourceTexture=O}}}}for(let Ot=0;Ot<E.length;Ot++){let z=b[Ot],X=E[Ot];z!==null&&X!==void 0&&X.update(z,Rt,c||o)}st&&st(K,Rt),Rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Rt}),p=null}let qt=new Uf;qt.setAnimationLoop(Ft),this.setAnimationLoop=function(K){st=K},this.dispose=function(){}}},x_=new ae,Xf=new te;Xf.set(-1,0,0,0,1,0,0,0,1);function __(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Wc(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,M,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),S(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,_,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===fn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===fn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=t.get(m),M=_.envMap,v=_.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(x_.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Xf),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=M*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,_){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===fn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function S(g,m){let _=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function v_(i,t,e,n){let s={},r={};function o(_,M){let v=M.program;n.uniformBlockBinding(_,v,s[_.id])}function a(_,M){let v=s[_.id];v===void 0&&(p(_),v=l(_),s[_.id]=v,_.addEventListener("dispose",g));let E=M.program;n.updateUBOMapping(_,E);let b=t.render.frame;r[_.id]!==b&&(c(_),r[_.id]=b)}function l(_){let M=i.createBuffer(),v=_.__size,E=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,v,E),i.bindBuffer(i.UNIFORM_BUFFER,null),M}function c(_){let M=s[_.id],v=_.uniforms,E=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,x=v.length;b<x;b++){let y=v[b];if(Array.isArray(y))for(let R=0,A=y.length;R<A;R++)h(y[R],b,R,E);else h(y,b,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,M,v,E){if(f(_,M,v,E)===!0){let b=_.__offset,x=_.value;if(Array.isArray(x)){let y=0;for(let R=0;R<x.length;R++){let A=x[R],I=S(A,!0);u(A,_.__data,y),y+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,_.__data)}}function u(_,M,v){typeof _=="number"||typeof _=="boolean"?M[v]=_:_.isMatrix3?(M[v]=_.elements[0],M[v+1]=_.elements[1],M[v+2]=_.elements[2],M[v+3]=0,M[v+4]=_.elements[3],M[v+5]=_.elements[4],M[v+6]=_.elements[5],M[v+7]=0,M[v+8]=_.elements[6],M[v+9]=_.elements[7],M[v+10]=_.elements[8],M[v+11]=0):ArrayBuffer.isView(_)?M.set(_.subarray(0,M.length-v),v):_.toArray(M,v)}function f(_,M,v,E){let b=_.value,x=M+"_"+v;if(Array.isArray(b)){E[x]===void 0&&(E[x]=[]);let y=E[x],R=!1;for(let A=0;A<b.length;A++)d(b[A],y,A)===!0&&(R=!0);return R}return d(b,E,x)}function d(_,M,v){if(M[v]===void 0)return typeof _=="number"||typeof _=="boolean"?M[v]=_:ArrayBuffer.isView(_)?M[v]=_.slice():M[v]=_.clone(),!0;{let E=M[v];if(typeof _=="number"||typeof _=="boolean"){if(E!==_)return M[v]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(E.equals(_)===!1)return E.copy(_),!0}}return!1}function p(_){let M=_.uniforms,v=0,E=16;for(let x=0,y=M.length;x<y;x++){let R=Array.isArray(M[x])?M[x]:[M[x]];for(let A=0,I=R.length;A<I;A++){let U=R[A],H=Array.isArray(U.value)?U.value:[U.value],P=Array.isArray(M[x])||Array.isArray(U.value),B=v;for(let W=0,ut=H.length;W<ut;W++){let J=H[W],nt=S(J,P),st=v%E,Ft=st%nt.boundary,qt=st+Ft;v+=Ft,qt!==0&&E-qt<nt.storage&&(v+=E-qt),W===0&&(B=v),v+=nt.storage}let Z=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new Z((v-B)/Float32Array.BYTES_PER_ELEMENT),U.__offset=B}}let b=v%E;return b>0&&(v+=E-b),_.__size=v,_.__cache={},this}function S(_,M){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=16,v.storage=48):_.isMatrix4?(v.boundary=16,v.storage=64):_.isTexture?Kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):Kt("WebGLRenderer: Unsupported uniform value type.",_),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function g(_){let M=_.target;M.removeEventListener("dispose",g),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(let _ in s)i.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:m}}var y_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Jn=null;function M_(){return Jn===null&&(Jn=new yr(y_,16,16,Ii,Bn),Jn.name="DFG_LUT",Jn.minFilter=hn,Jn.magFilter=hn,Jn.wrapS=Wn,Jn.wrapT=Wn,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}var gl=class{constructor(t={}){let{canvas:e=Ku(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=mn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let S=d,g=new Set([Na,Da,La]),m=new Set([mn,On,Hs,Ki,Ca,Ia]),_=new Uint32Array(4),M=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},E=null,b=null,x=[],y=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,I=!1,U=null,H=null,P=null,B=null;this._outputColorSpace=Ne;let Z=0,W=0,ut=null,J=-1,nt=null,st=new Le,Ft=new Le,qt=null,K=new se(0),Rt=0,Ot=e.width,z=e.height,X=1,Y=null,Ct=null,j=new Le(0,0,Ot,z),at=new Le(0,0,Ot,z),ct=!1,O=new Ti,lt=new ta,ot=!1,_t=!1,dt=new ae,rt=new N,ht=new Le,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pt=!1;function Yt(){return ut===null?X:1}let L=n;function ie(w,F){return e.getContext(w,F)}let kt,he,vt,Re,Bt,Vt,C,T,G,ft,it,mt,Mt,Q,tt,Et,D,et,$,Tt,yt,bt,Zt;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Jt,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",Lt,!1),L===null){let F="webgl2";if(L=ie(F,w),L===null)throw ie(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}oe()}catch(w){throw e.removeEventListener("webglcontextlost",Jt,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),jt("WebGLRenderer: "+w.message),w}function oe(){kt=new Lg(L),kt.init(),yt=new p_(L,kt),he=new Mg(L,kt,t,yt),vt=new f_(L,kt),he.reversedDepthBuffer&&f&&vt.buffers.depth.setReversed(!0),H=L.createFramebuffer(),P=L.createFramebuffer(),B=L.createFramebuffer(),Re=new Ug(L),Bt=new jx,Vt=new d_(L,kt,vt,Bt,he,yt,Re),C=new Pg(A),T=new Op(L),bt=new vg(L,T),G=new Dg(L,T,Re,bt),ft=new Og(L,G,T,bt,Re),et=new Fg(L,he,Vt),tt=new Sg(Bt),it=new Kx(A,C,kt,he,bt,tt),mt=new __(A,Bt),Mt=new t_,Q=new o_(kt),D=new _g(A,C,vt,ft,p,l),Et=new u_(A,ft,he),Zt=new v_(L,Re,he,vt),$=new yg(L,kt,Re),Tt=new Ng(L,kt,Re),Re.programs=it.programs,A.capabilities=he,A.extensions=kt,A.properties=Bt,A.renderLists=Mt,A.shadowMap=Et,A.state=vt,A.info=Re}S!==mn&&(R=new zg(S,e.width,e.height,a,s,r));let xt=new ih(A,L);this.xr=xt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let w=kt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=kt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(Ot,z,!1))},this.getSize=function(w){return w.set(Ot,z)},this.setSize=function(w,F,q=!0){if(xt.isPresenting){Kt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ot=w,z=F,e.width=Math.floor(w*X),e.height=Math.floor(F*X),q===!0&&(e.style.width=w+"px",e.style.height=F+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(Ot*X,z*X).floor()},this.setDrawingBufferSize=function(w,F,q){Ot=w,z=F,X=q,e.width=Math.floor(w*q),e.height=Math.floor(F*q),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(S===mn){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){Kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(st)},this.getViewport=function(w){return w.copy(j)},this.setViewport=function(w,F,q,k){w.isVector4?j.set(w.x,w.y,w.z,w.w):j.set(w,F,q,k),vt.viewport(st.copy(j).multiplyScalar(Yt()).round())},this.getScissor=function(w){return w.copy(at)},this.setScissor=function(w,F,q,k){w.isVector4?at.set(w.x,w.y,w.z,w.w):at.set(w,F,q,k),vt.scissor(Ft.copy(at).multiplyScalar(Yt()).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(w){vt.setScissorTest(ct=w)},this.setOpaqueSort=function(w){Y=w},this.setTransparentSort=function(w){Ct=w},this.getClearColor=function(w){return w.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,q=!0){let k=0;if(w){let V=!1;if(ut!==null){let At=ut.texture.format;V=g.has(At)}if(V){let At=ut.texture.type,zt=m.has(At),wt=D.getClearColor(),Nt=D.getClearAlpha(),Xt=wt.r,ee=wt.g,ue=wt.b;zt?(_[0]=Xt,_[1]=ee,_[2]=ue,_[3]=Nt,L.clearBufferuiv(L.COLOR,0,_)):(M[0]=Xt,M[1]=ee,M[2]=ue,M[3]=Nt,L.clearBufferiv(L.COLOR,0,M))}else k|=L.COLOR_BUFFER_BIT}F&&(k|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),U=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Jt,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),D.dispose(),Mt.dispose(),Q.dispose(),Vt.dispose(),Bt.dispose(),C.dispose(),ft.dispose(),G.dispose(),bt.dispose(),Zt.dispose(),it.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",Ih),xt.removeEventListener("sessionend",Ph),Oi.stop()};function Jt(w){w.preventDefault(),fr("WebGLRenderer: Context Lost."),I=!0}function re(){fr("WebGLRenderer: Context Restored."),I=!1;let w=Re.autoReset,F=Et.enabled,q=Et.autoUpdate,k=Et.needsUpdate,V=Et.type;oe(),Re.autoReset=w,Et.enabled=F,Et.autoUpdate=q,Et.needsUpdate=k,Et.type=V}function Lt(w){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ye(w){let F=w.target;F.removeEventListener("dispose",ye),ke(F)}function ke(w){gi(w),Bt.remove(w)}function gi(w){let F=Bt.get(w).programs;F!==void 0&&(F.forEach(function(q){it.releaseProgram(q)}),w.isShaderMaterial&&it.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,q,k,V,At){F===null&&(F=St);let zt=V.isMesh&&V.matrixWorld.determinantAffine()<0,wt=Md(w,F,q,k,V);vt.setMaterial(k,zt);let Nt=q.index,Xt=1;if(k.wireframe===!0){if(Nt=G.getWireframeAttribute(q),Nt===void 0)return;Xt=2}let ee=q.drawRange,ue=q.attributes.position,Ht=ee.start*Xt,fe=(ee.start+ee.count)*Xt;At!==null&&(Ht=Math.max(Ht,At.start*Xt),fe=Math.min(fe,(At.start+At.count)*Xt)),Nt!==null?(Ht=Math.max(Ht,0),fe=Math.min(fe,Nt.count)):ue!=null&&(Ht=Math.max(Ht,0),fe=Math.min(fe,ue.count));let Oe=fe-Ht;if(Oe<0||Oe===1/0)return;bt.setup(V,k,wt,q,Nt);let Ee,be=$;if(Nt!==null&&(Ee=T.get(Nt),be=Tt,be.setIndex(Ee)),V.isMesh)k.wireframe===!0?(vt.setLineWidth(k.wireframeLinewidth*Yt()),be.setMode(L.LINES)):be.setMode(L.TRIANGLES);else if(V.isLine){let Qe=k.linewidth;Qe===void 0&&(Qe=1),vt.setLineWidth(Qe*Yt()),V.isLineSegments?be.setMode(L.LINES):V.isLineLoop?be.setMode(L.LINE_LOOP):be.setMode(L.LINE_STRIP)}else V.isPoints?be.setMode(L.POINTS):V.isSprite&&be.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(kt.get("WEBGL_multi_draw"))be.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Qe=V._multiDrawStarts,Gt=V._multiDrawCounts,an=V._multiDrawCount,xe=Nt?T.get(Nt).bytesPerElement:1,Bi=Bt.get(k).currentProgram.getUniforms();for(let tn=0;tn<an;tn++)Bi.setValue(L,"_gl_DrawID",tn),be.render(Qe[tn]/xe,Gt[tn])}else if(V.isInstancedMesh)be.renderInstances(Ht,Oe,V.count);else if(q.isInstancedBufferGeometry){let Qe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Gt=Math.min(q.instanceCount,Qe);be.renderInstances(Ht,Oe,Gt)}else be.render(Ht,Oe)};function Ch(w,F,q,k){U!==null&&w.isNodeMaterial&&U.setObject(k,w),ot===!0&&tt.setState(w,q,!1),w.transparent===!0&&w.side===we&&w.forceSinglePass===!1?(w.side=fn,w.needsUpdate=!0,Zs(w,F,k),w.side=Ci,w.needsUpdate=!0,Zs(w,F,k),w.side=we):Zs(w,F,k)}this.compile=function(w,F,q=null){q===null&&(q=w),U!==null&&U.renderStart(w,F,q),b=Q.get(q),b.init(F),y.push(b),q.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),w!==q&&w.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights(),U!==null&&U.updateLights(b.state.lightsArray),_t=this.localClippingEnabled,ot=tt.init(this.clippingPlanes,_t),ot===!0&&tt.setGlobalState(this.clippingPlanes,F),U!==null&&Et.render(b.state.shadowsArray,q,F);let k=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let At=V.material;if(At)if(Array.isArray(At))for(let zt=0;zt<At.length;zt++){let wt=At[zt];Ch(wt,q,F,V),k.add(wt)}else Ch(At,q,F,V),k.add(At)}),b=y.pop(),U!==null&&U.renderEnd(),k},this.compileAsync=function(w,F,q=null){let k=this.compile(w,F,q);return new Promise(V=>{function At(){if(k.forEach(function(zt){let Nt=Bt.get(zt).currentProgram;(Nt===void 0||Nt.isReady())&&k.delete(zt)}),k.size===0){V(w);return}setTimeout(At,10)}kt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Nl=null;function vd(w){Nl&&Nl(w)}function Ih(){Oi.stop()}function Ph(){Oi.start()}let Oi=new Uf;Oi.setAnimationLoop(vd),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(w){Nl=w,xt.setAnimationLoop(w),w===null?Oi.stop():Oi.start()},xt.addEventListener("sessionstart",Ih),xt.addEventListener("sessionend",Ph),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;U!==null&&U.renderStart(w,F);let q=xt.enabled===!0&&xt.isPresenting===!0,k=R!==null&&(ut===null||q)&&R.begin(A,ut);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(F),F=xt.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,F,ut),b=Q.get(w,y.length),b.init(F),b.state.textureUnits=Vt.getTextureUnits(),y.push(b),dt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?lt.setFromArrayCamera(F):O.setFromProjectionMatrix(dt,An,F.reversedDepth),_t=this.localClippingEnabled,ot=tt.init(this.clippingPlanes,_t),E=Mt.get(w,x.length),E.init(),x.push(E),this.info.render.frame++,xt.enabled===!0&&xt.isPresenting===!0){let zt=A.xr.getDepthSensingMesh();zt!==null&&Ul(zt,F,-1/0,A.sortObjects)}Ul(w,F,0,A.sortObjects),E.finish(),U!==null&&U.updateLights(b.state.lightsArray),A.sortObjects===!0&&E.sort(Y,Ct),Pt=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,Pt&&D.addToRenderList(E,w),this.info.autoReset===!0&&this.info.reset(),ot===!0&&tt.beginShadows();let V=b.state.shadowsArray;if(Et.render(V,w,F),ot===!0&&tt.endShadows(),(k&&R.hasRenderPass())===!1){let zt=E.opaque,wt=E.transmissive;if(b.setupLights(),F.isArrayCamera){let Nt=F.cameras;if(wt.length>0)for(let Xt=0,ee=Nt.length;Xt<ee;Xt++){let ue=Nt[Xt];Dh(zt,wt,w,ue)}Pt&&D.render(w);for(let Xt=0,ee=Nt.length;Xt<ee;Xt++){let ue=Nt[Xt];Lh(E,w,ue,ue.viewport)}}else wt.length>0&&Dh(zt,wt,w,F),Pt&&D.render(w),Lh(E,w,F)}ut!==null&&W===0&&(Vt.updateMultisampleRenderTarget(ut),Vt.updateRenderTargetMipmap(ut)),k&&R.end(A),w.isScene===!0&&w.onAfterRender(A,w,F),bt.resetDefaultState(),J=-1,nt=null,y.pop(),y.length>0?(b=y[y.length-1],Vt.setTextureUnits(b.state.textureUnits),ot===!0&&tt.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,U!==null&&U.renderEnd()};function Ul(w,F,q,k){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){let zt=F.isArrayCamera?lt:O;if(!w.frustumCulled||w.intersectsFrustum(zt)){k&&ht.setFromMatrixPosition(w.matrixWorld).applyMatrix4(dt);let wt=ft.update(w),Nt=w.material;Nt.visible&&E.push(w,wt,Nt,q,ht.z,null,F)}}else if(w.isMesh||w.isLine||w.isPoints){let zt=F.isArrayCamera?lt:O;if(!w.frustumCulled||w.intersectsFrustum(zt)){let wt=ft.update(w),Nt=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ht.copy(w.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),ht.copy(wt.boundingSphere.center)),ht.applyMatrix4(w.matrixWorld).applyMatrix4(dt)),Array.isArray(Nt)){let Xt=wt.groups;for(let ee=0,ue=Xt.length;ee<ue;ee++){let Ht=Xt[ee],fe=Nt[Ht.materialIndex];fe&&fe.visible&&E.push(w,wt,fe,q,ht.z,Ht,F)}}else Nt.visible&&E.push(w,wt,Nt,q,ht.z,null,F)}}}let At=w.children;for(let zt=0,wt=At.length;zt<wt;zt++)Ul(At[zt],F,q,k)}function Lh(w,F,q,k){let{opaque:V,transmissive:At,transparent:zt}=w;b.setupLightsView(q),ot===!0&&tt.setGlobalState(A.clippingPlanes,q),k&&vt.viewport(st.copy(k)),V.length>0&&co(V,F,q),At.length>0&&co(At,F,q),zt.length>0&&co(zt,F,q),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Dh(w,F,q,k){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[k.id]===void 0){let Ht=kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[k.id]=new yn(1,1,{generateMipmaps:!0,type:Ht?Bn:mn,minFilter:fi,samples:Math.max(4,he.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:de.workingColorSpace})}let At=b.state.transmissionRenderTarget[k.id],zt=k.viewport||st;At.setSize(zt.z*A.transmissionResolutionScale,zt.w*A.transmissionResolutionScale);let wt=A.getRenderTarget(),Nt=A.getActiveCubeFace(),Xt=A.getActiveMipmapLevel();A.setRenderTarget(At),A.getClearColor(K),Rt=A.getClearAlpha(),Rt<1&&A.setClearColor(16777215,.5),A.clear(),Pt&&D.render(q);let ee=A.toneMapping;A.toneMapping=Zn;let ue=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),b.setupLightsView(k),ot===!0&&tt.setGlobalState(A.clippingPlanes,k),co(w,q,k),Vt.updateMultisampleRenderTarget(At),Vt.updateRenderTargetMipmap(At),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let fe=0,Oe=F.length;fe<Oe;fe++){let Ee=F[fe],{object:be,geometry:Qe,material:Gt,group:an}=Ee;if(Gt.side===we&&be.layers.test(k.layers)){let xe=Gt.side;Gt.side=fn,Gt.needsUpdate=!0,Nh(be,q,k,Qe,Gt,an),Gt.side=xe,Gt.needsUpdate=!0,Ht=!0}}Ht===!0&&(Vt.updateMultisampleRenderTarget(At),Vt.updateRenderTargetMipmap(At))}A.setRenderTarget(wt,Nt,Xt),A.setClearColor(K,Rt),ue!==void 0&&(k.viewport=ue),A.toneMapping=ee}function co(w,F,q){let k=F.isScene===!0?F.overrideMaterial:null;for(let V=0,At=w.length;V<At;V++){let zt=w[V],{object:wt,geometry:Nt,group:Xt}=zt,ee=zt.material;ee.allowOverride===!0&&k!==null&&(ee=k),wt.layers.test(q.layers)&&Nh(wt,F,q,Nt,ee,Xt)}}function Nh(w,F,q,k,V,At){U!==null&&V.isNodeMaterial&&U.setObject(w,V),w.onBeforeRender(A,F,q,k,V,At),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(A,F,q,k,w,At),V.transparent===!0&&V.side===we&&V.forceSinglePass===!1?(V.side=fn,V.needsUpdate=!0,A.renderBufferDirect(q,F,k,V,w,At),V.side=Ci,V.needsUpdate=!0,A.renderBufferDirect(q,F,k,V,w,At),V.side=we):A.renderBufferDirect(q,F,k,V,w,At),w.onAfterRender(A,F,q,k,V,At)}function Uh(w){let F=0;for(let q of w)q.texture!==null&&F++;return F}function Zs(w,F,q){F.isScene!==!0&&(F=St);let k=Bt.get(w),V=b.state.lights,At=b.state.shadowsArray,zt=V.state.version,wt=it.getParameters(w,V.state,At,F,q,b.state.lightProbeGridArray),Nt=it.getProgramCacheKey(wt),Xt=k.programs;k.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,k.fog=F.fog;let ee=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;k.envMap=C.get(w.envMap||k.environment,ee),k.envMapRotation=k.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Xt===void 0&&(w.addEventListener("dispose",ye),Xt=new Map,k.programs=Xt,k.programVariants=new Map);let ue=Xt.get(Nt);if(ue!==void 0){if(k.currentProgram===ue&&k.lightsStateVersion===zt)return Oh(w,wt),ue}else wt.uniforms=it.getUniforms(w),U!==null&&w.isNodeMaterial&&U.build(w,q,wt),w.onBeforeCompile(wt,A),ue=it.acquireProgram(wt,Nt),Xt.set(Nt,ue),k.uniforms=wt.uniforms;let Ht=k.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ht.clippingPlanes=tt.uniform),Oh(w,wt),k.needsLights=bd(w),k.lightsStateVersion=zt,k.needsLights&&(Ht.ambientLightColor.value=V.state.ambient,Ht.lightProbe.value=V.state.probe,Ht.sunLights.value=V.state.sun,Ht.sunLightShadows.value=V.state.sunShadow,Ht.directionalLights.value=V.state.directional,Ht.directionalLightShadows.value=V.state.directionalShadow,Ht.spotLights.value=V.state.spot,Ht.spotLightShadows.value=V.state.spotShadow,Ht.rectAreaLights.value=V.state.rectArea,Ht.ltc_1.value=V.state.rectAreaLTC1,Ht.ltc_2.value=V.state.rectAreaLTC2,Ht.pointLights.value=V.state.point,Ht.pointLightShadows.value=V.state.pointShadow,Ht.hemisphereLights.value=V.state.hemi,Ht.sunShadowMatrix.value=V.state.sunShadowMatrix,Ht.sunShadowCascade.value=V.state.sunShadowCascade,Ht.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ht.spotLightMatrix.value=V.state.spotLightMatrix,Ht.spotLightMap.value=V.state.spotLightMap,Ht.pointShadowMatrix.value=V.state.pointShadowMatrix),k.numLightProbeGrids=Uh(b.state.lightProbeGridArray),k.currentProgram=ue,k.uniformsList=null,ue}function yd(w,F,q,k,V){let At=Bt.get(w),zt=At.currentProgram.id+","+k+","+V,wt=At.programVariants.get(zt);return wt===void 0?(wt=Zs(w,F,q),At.programVariants.set(zt,wt)):(At.currentProgram=wt,At.uniformsList=null,At.outputColorSpace=k,At.toneMapping=V),wt}function Fh(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=Gs.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Oh(w,F){let q=Bt.get(w);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function Md(w,F,q,k,V){F.isScene!==!0&&(F=St),Vt.resetTextureUnits();let At=F.fog,zt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?F.environment:null,wt=ut===null?A.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:de.workingColorSpace,Nt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Xt=C.get(k.envMap||zt,Nt),ee=k.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ue=!!q.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ht=!!q.morphAttributes.position,fe=!!q.morphAttributes.normal,Oe=!!q.morphAttributes.color,Ee=Zn;k.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Ee=A.toneMapping);let be=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Qe=be!==void 0?be.length:0,Gt=Bt.get(k),an=b.state.lights;if(ot===!0&&(_t===!0||w!==nt)){let De=w===nt&&k.id===J;tt.setState(k,w,De)}let xe=!1,Bi=!1;k.version===Gt.__version?Gt.needsLights&&Gt.lightsStateVersion!==an.state.version||V.isBatchedMesh&&Gt.batching===!1||!V.isBatchedMesh&&Gt.batching===!0||V.isBatchedMesh&&Gt.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Gt.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Gt.instancing===!1||!V.isInstancedMesh&&Gt.instancing===!0||V.isSkinnedMesh&&Gt.skinning===!1||!V.isSkinnedMesh&&Gt.skinning===!0||V.isInstancedMesh&&Gt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Gt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Gt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Gt.instancingMorph===!1&&V.morphTexture!==null||Gt.envMap!==Xt||k.fog===!0&&Gt.fog!==At||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==tt.numPlanes||Gt.numIntersection!==tt.numIntersection)||Gt.vertexAlphas!==ee||Gt.vertexTangents!==ue||Gt.morphTargets!==Ht||Gt.morphNormals!==fe||Gt.morphColors!==Oe||Gt.morphTargetsCount!==Qe||Gt.numLightProbeGrids!==Uh(b.state.lightProbeGridArray)?xe=!0:(Gt.outputColorSpace!==wt||Gt.toneMapping!==Ee)&&(Bi=!0):(xe=!0,Gt.__version=k.version);let tn=Gt.currentProgram;(xe===!0||Bi===!0)&&(tn=Bi===!0?yd(k,F,V,wt,Ee):Zs(k,F,V),U&&k.isNodeMaterial&&U.onUpdateProgram(k,tn,Gt));let ho=!1,xi=!1,zi=!1,me=tn.getUniforms(),Ze=Gt.uniforms;if(vt.useProgram(tn.program)&&(ho=!0,xi=!0,zi=!0),k.id!==J&&(J=k.id,xi=!0),ho||nt!==w){vt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),me.setValue(L,"projectionMatrix",w.projectionMatrix),me.setValue(L,"viewMatrix",w.matrixWorldInverse);let Ve=me.map.cameraPosition;Ve!==void 0&&Ve.setValue(L,rt.setFromMatrixPosition(w.matrixWorld)),he.logarithmicDepthBuffer&&me.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&me.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),nt!==w&&(nt=w,xi=!0,zi=!0)}if(Gt.needsLights&&(an.state.sunShadowMap.length>0&&me.setValue(L,"sunShadowMap",an.state.sunShadowMap,Vt),an.state.directionalShadowMap.length>0&&me.setValue(L,"directionalShadowMap",an.state.directionalShadowMap,Vt),an.state.spotShadowMap.length>0&&me.setValue(L,"spotShadowMap",an.state.spotShadowMap,Vt),an.state.pointShadowMap.length>0&&me.setValue(L,"pointShadowMap",an.state.pointShadowMap,Vt)),V.isSkinnedMesh){me.setOptional(L,V,"bindMatrix"),me.setOptional(L,V,"bindMatrixInverse");let De=V.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),me.setValue(L,"boneTexture",De.boneTexture,Vt))}V.isBatchedMesh&&(me.setOptional(L,V,"batchingTexture"),me.setValue(L,"batchingTexture",V._matricesTexture,Vt),me.setOptional(L,V,"batchingIdTexture"),me.setValue(L,"batchingIdTexture",V._indirectTexture,Vt),me.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&me.setValue(L,"batchingColorTexture",V._colorsTexture,Vt));let Ln=q.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&et.update(V,q,tn),(xi||Gt.receiveShadow!==V.receiveShadow)&&(Gt.receiveShadow=V.receiveShadow,me.setValue(L,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&F.environment!==null&&(Ze.envMapIntensity.value=F.environmentIntensity),Ze.dfgLUT!==void 0&&(Ze.dfgLUT.value=M_()),xi){if(me.setValue(L,"toneMappingExposure",A.toneMappingExposure),Gt.needsLights&&Sd(Ze,zi),At&&k.fog===!0&&mt.refreshFogUniforms(Ze,At),mt.refreshMaterialUniforms(Ze,k,X,z,b.state.transmissionRenderTarget[w.id]),Gt.needsLights&&Gt.numLightProbeGrids>0){let De=v,Ve=0;for(let jn of b.state.lightProbeGridArray)jn.texture!==null&&(De.textures[Ve]=jn.texture,De.min[Ve]=jn.boundingBox.min,De.max[Ve]=jn.boundingBox.max,De.resolution[Ve]=jn.resolution,Ve++);for(let jn in De)De[jn].length=Ve;Ze.probesSH.value=De.textures,Ze.probesMin.value=De.min,Ze.probesMax.value=De.max,Ze.probesResolution.value=De.resolution}Gs.upload(L,Fh(Gt),Ze,Vt)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Gs.upload(L,Fh(Gt),Ze,Vt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&me.setValue(L,"center",V.center),me.setValue(L,"modelViewMatrix",V.modelViewMatrix),me.setValue(L,"normalMatrix",V.normalMatrix),me.setValue(L,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){let De=k.uniformsGroups;for(let Ve=0,jn=De.length;Ve<jn;Ve++){let zh=De[Ve];Zt.update(zh,tn),Zt.bind(zh,tn)}}return tn}function Sd(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.sunLights.needsUpdate=F,w.sunLightShadows.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function bd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ut},this.setRenderTargetTextures=function(w,F,q){let k=Bt.get(w);k.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Bt.get(w.texture).__webglTexture=F,Bt.get(w.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:q,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){let q=Bt.get(w);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,q=0){ut=w,Z=F,W=q;let k=null,V=!1,At=!1;if(w){let wt=Bt.get(w);if(wt.__useDefaultFramebuffer!==void 0){vt.bindFramebuffer(L.FRAMEBUFFER,wt.__webglFramebuffer),st.copy(w.viewport),Ft.copy(w.scissor),qt=w.scissorTest,vt.viewport(st),vt.scissor(Ft),vt.setScissorTest(qt),J=-1;return}else if(wt.__webglFramebuffer===void 0)Vt.setupRenderTarget(w);else if(wt.__hasExternalTextures)Vt.rebindTextures(w,Bt.get(w.texture).__webglTexture,Bt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let ee=w.depthTexture;if(wt.__boundDepthTexture!==ee){if(ee!==null&&Bt.has(ee)&&(w.width!==ee.image.width||w.height!==ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(w)}}let Nt=w.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(At=!0);let Xt=Bt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xt[F])?k=Xt[F][q]:k=Xt[F],V=!0):w.samples>0&&Vt.useMultisampledRTT(w)===!1?k=Bt.get(w).__webglMultisampledFramebuffer:Array.isArray(Xt)?k=Xt[q]:k=Xt,st.copy(w.viewport),Ft.copy(w.scissor),qt=w.scissorTest}else st.copy(j).multiplyScalar(X).floor(),Ft.copy(at).multiplyScalar(X).floor(),qt=ct;if(q!==0&&(k=H),vt.bindFramebuffer(L.FRAMEBUFFER,k)&&vt.drawBuffers(w,k),vt.viewport(st),vt.scissor(Ft),vt.setScissorTest(qt),V){let wt=Bt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,wt.__webglTexture,q)}else if(At){let wt=F;for(let Nt=0;Nt<w.textures.length;Nt++){let Xt=Bt.get(w.textures[Nt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Nt,Xt.__webglTexture,q,wt)}}else if(w!==null&&q!==0){let wt=Bt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,wt.__webglTexture,q)}J=-1};function Bh(w){let F=Bt.get(w);return(F.__readFormat!==w.format||F.__readType!==w.type)&&(F.__readFormat=w.format,F.__readType=w.type,F.__formatReadable=he.textureFormatReadable(w.format),F.__typeReadable=he.textureTypeReadable(w.type)),F}this.readRenderTargetPixels=function(w,F,q,k,V,At,zt,wt=0){if(!(w&&w.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&zt!==void 0&&(Nt=Nt[zt],Array.isArray(Nt)&&(Nt=Nt[0])),Nt){vt.bindFramebuffer(L.FRAMEBUFFER,Nt);try{let Xt=w.textures[wt],ee=Xt.format,ue=Xt.type;w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+wt);let Ht=Bh(Xt);if(Ht.__formatReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ht.__typeReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-k&&q>=0&&q<=w.height-V&&L.readPixels(F,q,k,V,yt.convert(ee),yt.convert(ue),At)}finally{let Xt=ut!==null?Bt.get(ut).__webglFramebuffer:null;vt.bindFramebuffer(L.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(w,F,q,k,V,At,zt,wt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&zt!==void 0&&(Nt=Nt[zt],Array.isArray(Nt)&&(Nt=Nt[0])),Nt)if(F>=0&&F<=w.width-k&&q>=0&&q<=w.height-V){vt.bindFramebuffer(L.FRAMEBUFFER,Nt);let Xt=w.textures[wt],ee=Xt.format,ue=Xt.type;w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+wt);let Ht=Bh(Xt);if(Ht.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ht.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let fe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,fe),L.bufferData(L.PIXEL_PACK_BUFFER,At.byteLength,L.STREAM_READ),L.readPixels(F,q,k,V,yt.convert(ee),yt.convert(ue),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Oe=ut!==null?Bt.get(ut).__webglFramebuffer:null;vt.bindFramebuffer(L.FRAMEBUFFER,Oe);let Ee=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Qu(L,Ee,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,fe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,At),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(fe),L.deleteSync(Ee),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,q=0){let k=Math.pow(2,-q),V=Math.floor(w.image.width*k),At=Math.floor(w.image.height*k),zt=F!==null?F.x:0,wt=F!==null?F.y:0;Vt.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,zt,wt,V,At),vt.unbindTexture()},this.copyTextureToTexture=function(w,F,q=null,k=null,V=0,At=0){let zt,wt,Nt,Xt,ee,ue,Ht,fe,Oe,Ee=w.isCompressedTexture?w.mipmaps[At]:w.image;if(q!==null)zt=q.max.x-q.min.x,wt=q.max.y-q.min.y,Nt=q.isBox3?q.max.z-q.min.z:1,Xt=q.min.x,ee=q.min.y,ue=q.isBox3?q.min.z:0;else{let me=Math.pow(2,-V);zt=Math.floor(Ee.width*me),wt=Math.floor(Ee.height*me),w.isDataArrayTexture?Nt=Ee.depth:w.isData3DTexture?Nt=Math.floor(Ee.depth*me):Nt=1,Xt=0,ee=0,ue=0}k!==null?(Ht=k.x,fe=k.y,Oe=k.z):(Ht=0,fe=0,Oe=0);let be=yt.convert(F.format),Qe=yt.convert(F.type),Gt;F.isData3DTexture?(Vt.setTexture3D(F,0),Gt=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Vt.setTexture2DArray(F,0),Gt=L.TEXTURE_2D_ARRAY):(Vt.setTexture2D(F,0),Gt=L.TEXTURE_2D),vt.activeTexture(L.TEXTURE0),vt.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),vt.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),vt.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);let an=vt.getParameter(L.UNPACK_ROW_LENGTH),xe=vt.getParameter(L.UNPACK_IMAGE_HEIGHT),Bi=vt.getParameter(L.UNPACK_SKIP_PIXELS),tn=vt.getParameter(L.UNPACK_SKIP_ROWS),ho=vt.getParameter(L.UNPACK_SKIP_IMAGES);vt.pixelStorei(L.UNPACK_ROW_LENGTH,Ee.width),vt.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ee.height),vt.pixelStorei(L.UNPACK_SKIP_PIXELS,Xt),vt.pixelStorei(L.UNPACK_SKIP_ROWS,ee),vt.pixelStorei(L.UNPACK_SKIP_IMAGES,ue);let xi=w.isDataArrayTexture||w.isData3DTexture,zi=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){let me=Bt.get(w),Ze=Bt.get(F),Ln=Bt.get(me.__renderTarget),De=Bt.get(Ze.__renderTarget);vt.bindFramebuffer(L.READ_FRAMEBUFFER,Ln.__webglFramebuffer),vt.bindFramebuffer(L.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ve=0;Ve<Nt;Ve++)xi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Bt.get(w).__webglTexture,V,ue+Ve),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Bt.get(F).__webglTexture,At,Oe+Ve)),L.blitFramebuffer(Xt,ee,Xt+zt,ee+wt,Ht,fe,Ht+zt,fe+wt,L.DEPTH_BUFFER_BIT,L.NEAREST);vt.bindFramebuffer(L.READ_FRAMEBUFFER,null),vt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||w.isRenderTargetTexture||Bt.has(w)){let me=Bt.get(w),Ze=Bt.get(F);vt.bindFramebuffer(L.READ_FRAMEBUFFER,P),vt.bindFramebuffer(L.DRAW_FRAMEBUFFER,B);for(let Ln=0;Ln<Nt;Ln++)xi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,me.__webglTexture,V,ue+Ln):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,me.__webglTexture,V),zi?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ze.__webglTexture,At,Oe+Ln):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ze.__webglTexture,At),V!==0?L.blitFramebuffer(Xt,ee,Xt+zt,ee+wt,Ht,fe,Ht+zt,fe+wt,L.COLOR_BUFFER_BIT,L.NEAREST):zi?L.copyTexSubImage3D(Gt,At,Ht,fe,Oe+Ln,Xt,ee,zt,wt):L.copyTexSubImage2D(Gt,At,Ht,fe,Xt,ee,zt,wt);vt.bindFramebuffer(L.READ_FRAMEBUFFER,null),vt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else zi?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Gt,At,Ht,fe,Oe,zt,wt,Nt,be,Qe,Ee.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(Gt,At,Ht,fe,Oe,zt,wt,Nt,be,Ee.data):L.texSubImage3D(Gt,At,Ht,fe,Oe,zt,wt,Nt,be,Qe,Ee):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,At,Ht,fe,zt,wt,be,Qe,Ee.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,At,Ht,fe,Ee.width,Ee.height,be,Ee.data):L.texSubImage2D(L.TEXTURE_2D,At,Ht,fe,zt,wt,be,Qe,Ee);vt.pixelStorei(L.UNPACK_ROW_LENGTH,an),vt.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xe),vt.pixelStorei(L.UNPACK_SKIP_PIXELS,Bi),vt.pixelStorei(L.UNPACK_SKIP_ROWS,tn),vt.pixelStorei(L.UNPACK_SKIP_IMAGES,ho),At===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&L.generateMipmap(Gt),vt.unbindTexture()},this.initRenderTarget=function(w){Bt.get(w).__webglFramebuffer===void 0&&Vt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Vt.setTextureCube(w,0):w.isData3DTexture?Vt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Vt.setTexture2DArray(w,0):Vt.setTexture2D(w,0),vt.unbindTexture()},this.resetState=function(){Z=0,W=0,ut=null,vt.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}};function ve(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Fe;l.morphTargetsRelative=a;let c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0,d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=qf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let S=0;S<o[h].length;++S)d.push(o[h][S][f]);let p=qf(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function qf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Je(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<e;p++){let S=h.getComponent(f,p);a.setComponent(f+u,p,S)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Ae=510,Xs=[85,255,425],dn=[-1,0,1,2],Fi=[2.6,6.1,9.6],Se=11.4,Hn=.9,sh=20,Yf=11,b_=2,gn,Ye,qe,gh,Tn,El=null,rh=!1,xh=0,Vs=null,It={pos:null,metroSint:null,metro8:!1,metrobus:!1,troleElev:!1,viaje:!1,pct:null,dist:null,vel:null,nivel:"ligero",noche:!1,rojo:!1,zona:"mixto",pico:!1,llego:!1},eo=new se;function Gn(i,t){eo.set(t).convertSRGBToLinear();let e=i.attributes.position.count,n=new Float32Array(e*3);for(let s=0;s<e;s++)n[s*3]=eo.r,n[s*3+1]=eo.g,n[s*3+2]=eo.b;return i.setAttribute("color",new Je(n,3)),i}var $t=(i,t,e,n,s,r,o)=>Gn(new ne(i,t,e).translate(n,s,r),o),on=(i,t,e=.38)=>Gn(new Te(e,e,.32,10).rotateX(Math.PI/2).translate(i,e,t),1447446);function _h(i,t,e){let n=document.createElement("canvas");n.width=n.height=64;let s=n.getContext("2d"),r=s.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,`rgba(${i},${t},${e},0.95)`),r.addColorStop(.45,`rgba(${i},${t},${e},0.35)`),r.addColorStop(1,`rgba(${i},${t},${e},0)`),s.fillStyle=r,s.fillRect(0,0,64,64);let o=new Mn(n);return o.colorSpace=Ne,o}var Ui,rd,Dl,Ys,so,Th,wh,Al,oh={};function E_(i,t=16777215,e=2831424){let n=i+t+"_"+e;if(oh[n])return oh[n];let s=2502715,r=[],o,a;switch(i){case"hatch":o=4,a=1.85,r=[$t(o,.8,a,0,.75,0,t),$t(2.5,.68,a*.86,-.55,1.49,0,s),$t(2.45,.08,a*.88,-.55,1.86,0,t),$t(.06,.25,a*.6,o/2,.95,0,10133670)];break;case"sedan":o=4.5,a=1.85,r=[$t(o,.75,a,0,.72,0,t),$t(2.3,.62,a*.86,-.15,1.4,0,s),$t(2.2,.08,a*.88,-.15,1.74,0,t)];break;case"ejec":o=5,a=1.9,r=[$t(o,.62,a,0,.68,0,t),$t(2.6,.52,a*.86,-.2,1.25,0,s),$t(2.5,.07,a*.88,-.2,1.54,0,t),$t(o*.98,.05,a*1.01,0,.82,0,13225686)];break;case"depor":o=4.4,a=1.95,r=[$t(o,.5,a,0,.6,0,t),$t(1.8,.42,a*.82,-.3,1.06,0,s),$t(1.7,.06,a*.84,-.3,1.28,0,t),$t(.3,.08,a*.9,-o/2+.2,1.08,0,1118481)];break;case"taxi":o=4.5,a=1.85,r=[$t(o,.45,a,0,.58,0,16185075),$t(o,.32,a*1.001,0,.98,0,15217551),$t(2.3,.62,a*.86,.15,1.45,0,s),$t(2.2,.08,a*.88,.15,1.79,0,15217551),$t(.5,.22,.8,.15,1.94,0,16777215)];break;case"suv":o=4.7,a=1.95,r=[$t(o,.95,a,0,.85,0,t),$t(3.2,.7,a*.88,-.35,1.67,0,s),$t(3.1,.09,a*.9,-.35,2.06,0,t)];break;case"micro":o=7.5,a=2.3,r=[$t(o,1.5,a,0,1.25,0,15526884),$t(o,.55,a*1.002,0,.75,0,3119698),$t(o*.92,.6,a*1.004,-.2,1.6,0,s),$t(o*.95,.12,a,0,2.06,0,13947851)];break;case"torton":o=8.2,a=2.4,r=[$t(5.6,2.5,a,-1.2,1.95,0,t),$t(2,1.7,a,2.9,1.45,0,e),$t(.9,.7,a*.9,3.4,1.95,0,s)];break;case"trailer":o=15,a=2.5,r=[$t(11.4,2.9,a,-1.7,2.2,0,t),$t(.2,.3,a,-1.7,.75,0,12597547),$t(2.8,2.2,a,5.9,1.75,0,e),$t(1.1,.8,a*.9,6.6,2.35,0,s),$t(.15,1.6,.15,4.7,3.4,.9,9079434),on(-5.6,a/2-.12,.5),on(-5.6,-a/2+.12,.5)];break;case"moto":o=2,a=.6,r=[$t(1.7,.35,.3,0,.75,0,t),$t(.5,.75,.42,-.15,1.35,0,e),Gn(new Rn(.2,8,6).translate(-.05,1.9,0),1118481),Gn(new Te(.3,.3,.12,10).rotateX(Math.PI/2).translate(.75,.3,0),1447446),Gn(new Te(.3,.3,.12,10).rotateX(Math.PI/2).translate(-.75,.3,0),1447446)];break}if(i!=="moto"){let c=o/2-.85,h=-o/2+.85,u=a/2-.12,f=o>7?.5:.38;r.push(on(c,u,f),on(c,-u,f),on(h,u,f),on(h,-u,f))}let l=ve(r);return l.computeVertexNormals(),oh[n]={geo:l,L:o,W:a}}function ro(i,t,e){let n=E_(i,t,e),s=new Me,r=new gt(n.geo,Ui);r.castShadow=!0,s.add(r);let o=i==="moto"?.95:n.L>7?1.1:.9,a=new gt(new ne(.08,.18,i==="moto"?.2:n.W*.85),Ys);a.position.set(-n.L/2-.02,o,0),s.add(a);let l=new gt(Al,rd);l.scale.set(5.5,1,n.W*2.4),l.position.set(-n.L/2-1.6,.06,0),l.visible=!1,s.add(l);let c=new gt(new ne(.06,.16,i==="moto"?.16:n.W*.8),Th);c.position.set(n.L/2+.02,o,0),s.add(c);let h=new gt(Al,Dl);return h.scale.set(9,1,n.W*2.2),h.position.set(n.L/2+4.5,.05,0),h.visible=!1,s.add(h),Ye.add(s),{g:s,stop:a,glow:l,haz:h,L:n.L,tipo:i}}var lo=[],Rl=[],no,Li,Ws,pn,vh;function Qr(i,t,e,n,s,r=0){let o=new gt(new Ie(i,t).rotateX(-Math.PI/2),new Wt({color:s}));return o.position.set(e,r,n),o.receiveShadow=!0,pn.add(o),o}var vl=dn.flatMap(i=>Xs.map((t,e)=>({x:t+i*Ae,i:e})));function T_(){let i=dn[0]*Ae,t=dn.length*Ae,e=i+t/2;Qr(t,420,e,0,14673372,-.02),Qr(t,Se*2,e,0,3816773,0),Qr(t,3,e,Se+1.5,13225156,.01),Qr(t,3,e,-Se-1.5,13225156,.01),vl.forEach(x=>Qr(12,420,x.x,0,3816773,.005));let n=[];for(let x of dn)for(let y=0;y<Ae;y+=10)Xs.some(R=>y+10>R-7&&y<R+7)||n.push(new ne(10,.7,.6).translate(x*Ae+y+5,.35,0));let s=new gt(ve(n),new Wt({color:12172739}));s.castShadow=s.receiveShadow=!0,pn.add(s),vh=s;let r=[];for(let x of[1,-1]){for(let y of[Hn,Se-.35])r.push(new Ie(t,.18).rotateX(-Math.PI/2).translate(e,.02,x*y));for(let y of dn)for(let R=0;R<Ae;R+=8.5)if(!Xs.some(A=>Math.abs(R-A)<9))for(let A of[4.35,7.85])r.push(new Ie(3,.16).rotateX(-Math.PI/2).translate(y*Ae+R,.02,x*A))}vl.forEach(({x})=>{for(let y=-Se+.6;y<Se;y+=1.1)Math.abs(y)>Hn+.3&&r.push(new Ie(3.2,.6).rotateX(-Math.PI/2).translate(x-7.6,.025,y));r.push(new Ie(.4,Se-Hn).rotateX(-Math.PI/2).translate(x-9.8,.025,(Se+Hn)/2)),r.push(new Ie(.4,Se-Hn).rotateX(-Math.PI/2).translate(x+9.8,.025,-(Se+Hn)/2))}),pn.add(new gt(ve(r),new ge({color:15921906})));let o=[15918022,15250592,13227743,16045453,12114110,15123414,14209732,11125984,15778427],a=[];for(let x of[1,-1]){let y=0;for(;y<Ae-6;){let R=Math.min(7+Math.random()*10,Ae-y);if(Xs.some(A=>Math.abs(y+R/2-A)<6+R/2)){y+=4;continue}a.push({x:y+R/2,w:R-.8,h:4+Math.random()*(Math.random()<.2?22:9),d:8+Math.random()*8,s:x,dz:Math.random()*1.5,c:o[a.length%o.length]}),y+=R}}let l=new ze(new ne(1,1,1).translate(0,.5,0),new Wt({color:16777215}),a.length*dn.length);l.castShadow=l.receiveShadow=!0;let c=new ae,h=new $e,u=new N,f=new N,d=0;for(let x of dn)for(let y of a)u.set(x*Ae+y.x,0,y.s*(Se+3.5+y.d/2+y.dz)),f.set(y.w,y.h,y.d),l.setMatrixAt(d,c.compose(u,h,f)),l.setColorAt(d,eo.set(y.c)),d++;pn.add(l);let p=[];for(let x of[1,-1])for(let y=5;y<Ae;y+=17)Xs.some(R=>Math.abs(y-R)<9)||p.push({x:y+Math.random()*3,s:x,e:.8+Math.random()*.5});let S=new ze(new Te(.15,.2,1.4,6).translate(0,.7,0),new Wt({color:8018490}),p.length*dn.length),g=new ze(new Us(1.2,0).translate(0,2.3,0),new Wt({color:5939290,flatShading:!0}),p.length*dn.length);g.castShadow=!0,d=0;for(let x of dn)for(let y of p)u.set(x*Ae+y.x,0,y.s*(Se+2.2)),f.setScalar(y.e),c.compose(u,h,f),S.setMatrixAt(d,c),g.setMatrixAt(d,c),d++;pn.add(S,g),no=new Me,pn.add(no);let m=[],_=[],M=[];for(let x of[1,-1])for(let y of dn)for(let R=10;R<Ae;R+=30){let A=y*Ae+R;m.push(new Te(.09,.12,7,6).translate(A,3.5,x*(Se+.6)),new ne(.15,.12,2.2).translate(A,7,x*(Se-.4))),_.push(new ne(.5,.12,.8).translate(A,6.92,x*(Se-1.3))),M.push(new Ie(9,9).rotateX(-Math.PI/2).translate(A,.04,x*(Se-2.5)))}no.add(new gt(ve(m),new Wt({color:7172214})),new gt(ve(_),wh));let v=new gt(ve(M),new ge({map:Dl.map,transparent:!0,depthWrite:!1,blending:ui,opacity:.55}));v.visible=!1,v.name="charcos",no.add(v),lo=vl.map(({x,i:y})=>{let R=(A,I,U)=>{let H=new Me,P=new Wt({color:3882821}),B=new gt(new Te(.12,.14,6,8),P);B.position.y=3,H.add(B);let Z=new gt(new ne(.14,.14,7),P);Z.position.set(0,5.9,-3.5),H.add(Z);let W=new gt(new ne(.45,1.5,.55),new Wt({color:1908514}));W.position.set(-.1,5.2,-6),W.castShadow=!0,H.add(W);let ut=[16722458,16761856,2282347].map((J,nt)=>{let st=new gt(new Rn(.17,10,8),new ge({color:2236962}));return st.position.set(-.35,5.68-nt*.47,-6),st.userData.on=J,H.add(st),st});return H.position.set(A,0,I),H.rotation.y=U,pn.add(H),ut};return{x,off:y*7.3,ida:R(x-10.5,Se+.9,0),reg:R(x+10.5,-Se-.9,Math.PI)}});let E=[15029053,3120750,8084694,14722342,3770341,13651850];Rl=[],vl.forEach(({x},y)=>{for(let R=0;R<3;R++){let A=new Me,I=new gt(new Te(.22,.26,.95,8),new Wt({color:E[(y+R)%E.length]}));I.position.y=1.15,I.castShadow=!0;let U=new gt(new Te(.2,.18,.7,8),new Wt({color:2899543}));U.position.y=.35;let H=new gt(new Rn(.2,10,8),new Wt({color:13209186}));H.position.y=1.85;let P=new gt(new ne(.12,.5,.12),new ge({color:16765952}));P.position.y=2.6,P.visible=!1,A.add(I,U,H,P);let B=R%2?1:-1,Z=B*(Se+1.2);A.position.set(x-8.8+R*.8,0,Z),pn.add(A),Rl.push({g:A,susto:P,cx:x,dx:-8.8+R*.8,z:Z,modo:"espera",t:Math.random()*2,dir:-B})}});let b=(x,y)=>{let R=document.createElement("canvas");R.width=R.height=128;let A=R.getContext("2d");A.fillStyle=y,A.beginPath(),A.arc(64,64,56,0,7),A.fill(),A.fillStyle="#fff",A.font="bold 80px Arial",A.textAlign="center",A.textBaseline="middle",A.fillText(x,64,70);let I=new Mn(R);I.colorSpace=Ne;let U=new Me,H=new Ei(new ci({map:I}));H.scale.set(5,5,1),H.position.set(0,7.5,Se+2.5),U.add(H);let P=new gt(new Te(.12,.12,5,6),new Wt({color:7829367}));P.position.set(0,2.5,Se+2.5),U.add(P);let B=new gt(new Ie(1.2,Se-Hn).rotateX(-Math.PI/2),new ge({color:y}));return B.position.set(0,.03,(Se+Hn)/2),U.add(B),U.visible=!1,pn.add(U),U};Li=b("A","#3987e5"),Ws=b("B","#d95926")}var yh=[12597547,2976949,1381914,12567753,15921903,8028038,14722342,3120750,9185828,2504266],w_=[1381914,2504266,15921903,3816770,12720152,12567753],xn=[],Ut,Zf,ss,Mh="",Kn=i=>i[Math.floor(Math.random()*i.length)];function od(){let i=["micro","micro","torton","sedan","sedan","taxi","suv"],t=["ejec","ejec","suv","suv","depor","sedan"],e=It.zona==="popular"?i:It.zona==="lujo"?t:[...i.slice(0,4),...t.slice(0,4)];return It.pico&&(e=[...e,"torton","trailer","trailer","torton","trailer"]),Kn(e)}function ah(i,t,e,n,s){let r=Kn((i==="ejec"||i==="suv"||i==="depor")&&It.zona==="lujo"?w_:yh),o=2831424;i==="depor"&&(r=Kn([12720152,15921903,1381914,14722342])),(i==="torton"||i==="trailer")&&(r=Kn([15921902,15262416,14277846]),o=Kn([12597547,2056104,15921906])),i==="moto"&&(r=Kn([12986408,1402304,2236962]),o=Kn([3622735,7162945,1793568]));let l={...ro(i,r,o),dir:t,z:e,x:n,v:s*.7,v0:s,a:0,frena:0,zLane:e,fase:Math.random()*6};return l.g.rotation.y=t>0?0:Math.PI,l.haz.visible=It.noche,xn.push(l),l}function ad(){for(let s of xn.splice(0))s!==Ut&&Ye.remove(s.g);xn.push(Ut);let i=It.nivel==="pesado",t=Ut.x,e=i?8.5:36,n=i?7:15;for(let s of[1,-1])for(let r=0;r<3;r++){if(r===0&&It.metrobus)continue;let o=s*Fi[r];for(let a=t-80+Math.random()*10;a<t+150;a+=e*(.8+Math.random()*.6))s>0&&r===1&&a>t-(i?13:30)&&a<t+(i?10:40)||!i&&Math.random()<.35||ah(od(),s,o,a,n*(.85+Math.random()*.3)*(s<0?1.1:1))}Zf=ah("taxi",1,Fi[1],t-(i?7.5:12),12),Zf.esTaxi=!0;for(let s of[1,-1])for(let r of[4.35,7.85])for(let o=0;o<2;o++)ah("moto",s,s*r,t-60+Math.random()*180,19+Math.random()*4)}var In=0,mi=0;function ld(){let i=null;for(let t of lo){let e=t.x-10-Ut.x;e>-1&&(!i||e<i.d)&&(i={s:t,d:e})}return i}function Ah(i){let t=ld();if(t&&t.s===i&&t.d<90){if(It.rojo)return"rojo";if(Ut.v>1.5)return"verde"}let e=((In+i.off)%sh+sh)%sh;return e<Yf?"verde":e<Yf+b_?"amarillo":"rojo"}var Qi={a:1.6,b:3,T:1.1,s0:2.2};function A_(i){for(let t of lo){let e=i.dir>0?t.x-10:t.x+10,n=(e-i.x)*i.dir;if(n>0&&n<70){let s=Ah(t);return s==="rojo"||s==="amarillo"&&n>i.v*i.v/(2*Qi.b)+2?e:null}}return null}function lh(i){for(let t of xn)t.x+=i}var Jf=!1;function R_(i){In+=i;let t;if(It.rojo||It.llego?t=0:It.vel!=null?t=It.vel/3.6:t=It.nivel==="pesado"?7:13,Ut.a=(t-Ut.v)*1.2,Ut.v=Math.max(0,Ut.v+Ut.a*i),Ut.x+=Ut.v*i,It.rojo&&!Jf){let r=ld();if(r&&r.d>3){let o=-(r.d-3);lh(o),mi-=o}}Jf=It.rojo;let e={};for(let r of xn)r.tipo!=="moto"&&r!==Ut&&(e[r.dir+":"+r.zLane]||=[]).push(r);(e["1:"+Fi[1]]||=[]).push(Ut);for(let r in e){let o=e[r].sort((a,l)=>(l.x-a.x)*l.dir);for(let a=0;a<o.length;a++){let l=o[a];if(l===Ut)continue;let c=o[a-1];l.esTaxi&&(l.v0=Math.max(9,Ut.v+3));let h=1e9,u=0;c&&(h=(c.x-l.x)*l.dir-(c.L+l.L)/2,u=l.v-c.v);let f=A_(l);if(f!=null){let S=(f-l.x)*l.dir-l.L/2;S<h&&(h=S,u=l.v)}l.dir>0&&l.zLane===Fi[1]&&c===Ut&&h<0&&(l.x=Ut.x-(Ut.L+l.L)/2-1.5,l.v=Ut.v);let d=Qi.s0+Math.max(0,l.v*Qi.T+l.v*u/(2*Math.sqrt(Qi.a*Qi.b))),p=Qi.a*(1-Math.pow(l.v/l.v0,4)-Math.pow(d/Math.max(h,.1),2));It.nivel==="pesado"&&Math.random()<.0015&&(l.frena=1.2),l.frena>0&&(l.frena-=i,p=Math.min(p,-3.5)),p=Math.max(-8,Math.min(Qi.a,p)),l.a=p,l.v=Math.max(0,l.v+p*i),l.x+=l.v*l.dir*i}for(let a=0;a<o.length;a++)if(o[a]===Ut&&o[a-1]){let l=o[a-1],c=l.x-Ut.x-(l.L+Ut.L)/2;c<4&&(l.x+=4-c+(Ut.v>l.v?30:0))}}for(let r of xn)r.tipo==="moto"&&(r.fase+=i,r.v=r.v0,r.x+=r.v*r.dir*i,r.z=r.zLane+Math.sin(r.fase*.9)*.6,r.a=0);let n=Ut.x,s=It.nivel==="pesado";for(let r of xn){if(r===Ut)continue;let o=r.x-n;if(r.tipo==="moto"){r.dir>0&&o>170?r.x=n-100-Math.random()*30:r.dir>0&&o<-110?r.x=n+160:r.dir<0&&o<-110&&(r.x=n+160+Math.random()*40);continue}if(r.esTaxi){(o<-60||o>0)&&(r.x=n-(Ut.L+r.L)/2-3,r.v=Ut.v);continue}r.dir>0&&o>170?(r.x=C_(r)-(s?9:30)*(.8+Math.random()*.5),r.v=r.v0*.6):r.dir>0&&o<-110?r.x=$f(r)+(s?9:30):r.dir<0&&o<-110&&(r.x=$f(r)+(s?10:34)*(.8+Math.random()*.5),r.v=r.v0*.8)}Ut.x>Ae&&(lh(-Ae),mi+=Ae),Ut.x<-Ae/2&&(lh(Ae),mi-=Ae);for(let r of Rl){let o=lo.find(h=>h.x===r.cx),a=Ah(o)==="rojo",l=r.cx-7.6,c=h=>xn.some(u=>u.tipo==="moto"&&Math.abs(u.z-h)<1.6&&(l-u.x)*u.dir>-1&&(l-u.x)*u.dir<24);if(r.modo==="espera")r.t-=i,a&&r.t<=0&&!c(r.z+r.dir*2)&&(r.modo="cruza");else if(r.modo==="cruza"){let h=r.z+r.dir*(a?1.4:2.6)*i;c(h+r.dir*1.2)&&Math.abs(r.z)<Se?(r.modo="huye",r.dir=-r.dir):(r.z=h,Math.abs(r.z)>=Se+1.2&&Math.sign(r.z)===Math.sign(r.dir)&&(r.modo="espera",r.t=2+Math.random()*3,r.dir=-Math.sign(r.z)))}else r.z+=r.dir*3.4*i,(Math.abs(r.z)>=Se+1.2||Math.abs(r.z)<Hn+.2)&&(r.modo="espera",r.t=1.2+Math.random()*1.5,Math.abs(r.z)>=Se+1.2&&(r.dir=-Math.sign(r.z)));r.g.position.z=r.z,r.susto.visible=r.modo==="huye",r.g.position.y=r.modo!=="espera"?Math.abs(Math.sin(In*(r.modo==="huye"?16:9)))*.08:0}}function C_(i){let t=1/0;for(let e of xn)e.dir===i.dir&&e.zLane===i.zLane&&e!==i&&(t=Math.min(t,e.x));return Math.min(t,Ut.x-20)}function $f(i){let t=-1/0;for(let e of xn)e.dir===i.dir&&e.zLane===i.zLane&&e!==i&&(t=Math.max(t,e.x));return Math.max(t,Ut.x+60)}function Cl(){let i=It.noche,t=Q_(i),e=typeof Ll<"u"&&Ll==="real";Ye.background=t.t,Ye.fog=new mr(t.horiz,e?180:110,e?560:320),is&&(is.emissive.set(i?16777215:0),is.emissiveIntensity=i?.9:0),gh.intensity=i?.45:1.7,Tn.intensity=i?.25:2.3,Tn.color.set(i?9414399:16777215),Th.color.set(i?16774856:14277071),wh.color.set(i?16769946:9079424),no.getObjectByName("charcos").visible=i;for(let n of xn)n.haz.visible=i}var cd={atras:[-9.5,6.4,0,22,1],diag:[-24,36,-13,8],cerca:[-13,10,-7,6],arriba:[-6,70,-.5,6]},I_={atras:[-9.5,6.4,0,22,1],diag:[-50,75,-28,24],cerca:[-16,12,-8,10],arriba:[-10,150,-1,22]},Kf={atras:"Atr\xE1s",diag:"Diagonal",cerca:"Cerca",arriba:"Arriba"},ch=["atras","diag","cerca","arriba"],Pn=(()=>{try{return localStorage.getItem("vista3dCam3")||"atras"}catch{return"atras"}})();cd[Pn]||(Pn="atras");var es=new N,ns=new N;function hd(i,t){let[e,n,s,r,o=0]=cd[Pn],a=new N(Ut.x+e,n,Ut.z+s),l=new N(Ut.x+r,o,Ut.z+(Pn==="atras"?0:3));if(t)es.copy(a),ns.copy(l);else{let c=1-Math.exp(-i*3);es.lerp(a,c),ns.lerp(l,c)}qe.position.copy(es),qe.lookAt(ns),Tn.position.set(Ut.x+25,45,Ut.z+30),Tn.target.position.set(Ut.x,0,Ut.z)}function P_(){for(let t of xn){t.g.position.set(t.x,0,t.z);let e=t.tipo!=="moto"&&(t.a<-.6||t.v<.4);t.stop.material=e?so:Ys,t.glow.visible=e||It.noche&&t.tipo!=="moto",t.glow.scale.x=e?5.5:2.5}ss.position.y=3.3+Math.sin(In*3)*.2,ss.rotation.y+=.03;for(let t of lo){let e=Ah(t),n=e==="rojo"?0:e==="amarillo"?1:2;for(let s of[t.ida,t.reg])s.forEach((r,o)=>r.material.color.set(o===n?r.userData.on:2236962))}for(let t of Rl)t.g.position.x=t.cx+t.dx;let i=Ut.x+mi;if(It.viaje&&It.pct!=null&&It.dist){let t=It.dist*1e3,e=i-Math.min(1,It.pct)*t,n=e+t;Li.position.x=e-mi,Ws.position.x=n-mi,Li.visible=Math.abs(Li.position.x-Ut.x)<300,Ws.visible=Math.abs(Ws.position.x-Ut.x)<300}else It.viaje&&It._a!=null?(Li.position.x=It._a-mi,Li.visible=Math.abs(Li.position.x-Ut.x)<300,Ws.visible=!1):Li.visible=Ws.visible=!1}function L_(){gn=new gl({antialias:!0,powerPreference:"high-performance"}),gn.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),gn.shadowMap.enabled=!0,gn.shadowMap.type=ba,gn.outputColorSpace=Ne,gn.domElement.style.cssText="display:block;width:100%;height:100%",Ye=new gr,qe=new cn(30,1,.5,700),gh=new Or(15266040,10134421,1.7),Tn=new Hr(16777215,2.3),Tn.castShadow=!0,Tn.shadow.mapSize.set(1024,1024),Object.assign(Tn.shadow.camera,{left:-45,right:45,top:45,bottom:-45,near:1,far:160}),Tn.shadow.bias=-6e-4,Ye.add(gh,Tn,Tn.target),Ui=new Wt({vertexColors:!0}),rd=new ge({map:_h(255,30,20),transparent:!0,depthWrite:!1,blending:ui}),Dl=new ge({map:_h(255,240,190),transparent:!0,depthWrite:!1,blending:ui,opacity:.8}),Ys=new ge({color:5901581}),so=new ge({color:16722458}),Th=new ge({color:14277071}),wh=new ge({color:9079424}),Al=new Ie(1,1).rotateX(-Math.PI/2),pn=new Me,Ye.add(pn),T_(),N_(),Ut={...ro("hatch",16053490),dir:1,z:Fi[1],x:40,v:0,v0:15,a:0,frena:0,zLane:Fi[1]},ss=new gt(new Tr(.55,1.1,4).rotateX(Math.PI),new ge({color:3770341})),ss.position.y=3.4,Ut.g.add(ss),ad(),Mh=It.nivel+It.zona+It.pico+It.metrobus,Cl(),hd(0,!0)}function hh(){if(!El)return;let i=El.clientWidth,t=El.clientHeight;!i||!t||(gn.setSize(i,t,!1),qe.aspect=i/t,qe.fov=Pn==="atras"?qe.aspect<1?68:50:qe.aspect<1?46:qe.aspect>1.8?21:27,qe.updateProjectionMatrix())}var io=0,yl=0,uh=0,D_=0;function ud(i){if(xh=requestAnimationFrame(ud),document.hidden){io=i;return}let t=Math.min(.05,io?(i-io)/1e3:.016);if(io=i,Qt&&Qt.listo&&It.pos)ov(t),ao(t);else{let e=Math.ceil(t/.02);for(let n=0;n<e;n++)R_(t/e);P_(),U_(t),hd(t)}gn.render(Ye,qe),yl+=t,uh++,yl>2&&(uh/yl<28&&gn.shadowMap.enabled&&++D_>1&&(gn.shadowMap.enabled=!1,Ye.traverse(n=>{n.material&&(n.material.needsUpdate=!0)})),yl=0,uh=0)}var fh=null;function fd(i){fh||(fh=_h(255,255,255));let t=new Me;t.visible=!1,t.userData.fases=[];let e=new ne(.28,.12,.28),n=new Ie(1.6,1.6).rotateX(-Math.PI/2),s=new ae,r=new se;for(let o=0;o<3;o++){let a=i.filter(f=>f.f===o);if(!a.length){t.userData.fases.push(null);continue}let l=new ge({color:16777215}),c=new ge({map:fh,transparent:!0,depthWrite:!1,blending:ui}),h=new ze(e,l,a.length),u=new ze(n,c,a.length);a.forEach((f,d)=>{s.makeTranslation(f.x,(f.y||0)+.08,f.z),h.setMatrixAt(d,s),s.makeTranslation(f.x,(f.y||0)+.1,f.z),u.setMatrixAt(d,s),r.set(f.c),h.setColorAt(d,r),u.setColorAt(d,r)}),u.renderOrder=3,t.add(h,u),t.userData.fases.push({mb:l,mh:c})}return t}function dd(i,t){if(!i||(i.visible=!!It.noche,!It.noche))return;let e=Math.floor(t*7)%3;i.userData.fases.forEach((n,s)=>{if(!n)return;let r=s===e,o=r?1:.18;n.mb.color.setScalar(o),n.mh.opacity=r?.95:.12})}var Ni={carril:16052710,orilla:3134407,centro:16757504,metrobus:16764723};function pd(){return ve([$t(12,2.6,2.5,0,1.75,0,2061280),$t(11.2,1,2.52,-.2,2.25,0,1520207),$t(12,.25,2.54,0,1,0,16777215),$t(3.4,.4,1.6,-.5,3.25,0,1727672),$t(5.6,.08,.08,-2.8,4.6,.45,2763306).rotateZ(0),$t(5.6,.08,.08,-2.8,4.6,-.45,2763306),on(-3.8,1.2,.5),on(-3.8,-1.2,.5),on(3.8,1.2,.5),on(3.8,-1.2,.5)])}function md(){return ve([$t(8.6,2.8,2.55,-4.6,1.75,0,12986408),$t(8.6,2.8,2.55,4.6,1.75,0,12986408),$t(.6,2.4,2.3,0,1.65,0,5903380),$t(7.8,1,2.57,-4.6,2.25,0,2241087),$t(7.8,1,2.57,4.6,2.25,0,2241087),$t(17.8,.2,2.58,0,1,0,15921906),on(-7.4,1.2,.5),on(-7.4,-1.2,.5),on(-2,1.2,.5),on(-2,-1.2,.5),on(7.4,1.2,.5),on(7.4,-1.2,.5)])}function Il(i,t,e){let n=new ae,s=new $e,r=new N,o=new N(1,1,1),a=new N(0,1,0),l=0;for(let c of t){if(l>=i.instanceMatrix.count)break;r.set(c.x,c.y,c.z),s.setFromAxisAngle(a,c.r),i.setMatrixAt(l++,n.compose(r,s,o))}i.count=l,i.instanceMatrix.needsUpdate=!0}function jf(i,t,e,n,s,r,o,a,l){i.t=(i.t||Math.random()*40)+t;let c=i.cum[i.cum.length-1],h=i.periodo*e,u=Math.max(h,c+n+60);for(let f of[1,-1]){let d=(i.t+(f<0?i.periodo/2:0))*e%u;for(let p=0;p*h<u&&p<30;p++){let S=(d+p*h)%u-30;for(let g=0;g<s;g++){let m=S-g*r;if(m<0||m>c)continue;f<0&&(m=c-m);let _=Pe(i,m),M=_.dx*f,v=_.dz*f,E=o;l.push({x:_.x-v*E,y:a,z:_.z+M*E,r:kn(M,v)})}}}}var je=null;function gd(){return ve([$t(14.6,3.1,2.8,0,1.95,0,15759898),$t(13.4,.95,2.84,0,2.45,0,2241087),$t(14.6,.25,2.82,0,1,0,15921902),$t(14,.25,2.4,0,3.6,0,13223613),Gn(new Te(.4,.4,2.4,8).rotateX(Math.PI/2).translate(-5.2,.4,0),2236962),Gn(new Te(.4,.4,2.4,8).rotateX(Math.PI/2).translate(5.2,.4,0),2236962)])}function N_(){let i=new Me;i.visible=!1,pn.add(i);let t=dn[0]*Ae,e=dn.length*Ae,n=t+e/2,s=new Me;s.add(new gt(new Ie(e,3.6).rotateX(-Math.PI/2).translate(n,.05,0),new Wt({color:7037528})));let r=[-.72,.72].map(g=>new ne(e,.12,.1).translate(n,.15,g));s.add(new gt(ve(r),new Wt({color:10133670}))),i.add(s);let o=new Me,a=[];a.push(new ne(e,1.2,4.4).translate(n,7.4,0));for(let g=t;g<t+e;g+=25)a.push(new ne(1.2,6.8,1.6).translate(g,3.4,0));let l=new gt(ve(a),new Wt({color:12170925}));l.castShadow=l.receiveShadow=!0,o.add(l),i.add(o);let c=new ze(gd(),Ui,120);c.castShadow=!0,c.count=0,Ye.add(c);let h=new ze(pd(),Ui,40);h.castShadow=!0,h.count=0,Ye.add(h);let u=[];for(let g of[1,-1])for(let m of[Hn+.15,4.35])u.push(new Ie(e,.25).rotateX(-Math.PI/2).translate(n,.03,g*m));for(let g of[1,-1])for(let m of dn)for(let _=0;_<Ae;_+=3)u.push(new ne(1.4,.18,.35).translate(m*Ae+_,.09,g*4.35));let f=new gt(ve(u.map(Rh)),new Wt({color:15909376}));f.visible=!1,pn.add(f);let d=new ze(md(),Ui,30);d.castShadow=!0,d.count=0,Ye.add(d);let p=[];for(let g of[1,-1])for(let m of dn)for(let _=0;_<Ae;_+=4){let M=m*Ae+_,v=Math.floor(_/4)%3;Xs.some(E=>Math.abs(_-E)<9)||p.push({x:M,z:g*4.35,c:Ni.carril,f:v},{x:M,z:g*7.85,c:Ni.carril,f:v}),p.push({x:M,z:g*(Se-.35),c:Ni.orilla,f:v},{x:M,z:g*(Hn+.15),c:Ni.centro,f:v})}let S=fd(p);pn.add(S),je={g:i,via:s,vd:o,tren:c,trole:h,mbl:f,mbus:d,luces:S,t:0}}function U_(i){if(!je)return;dd(je.luces,In),je.mbl.visible=!!It.metrobus;{let S=[];if(It.metrobus)for(let _ of[1,-1]){let M=(je.t+(_<0?20:0))*11%440;for(let v=-2;v<=2;v++){let E=Ut.x+_*(M+v*440-120);Math.abs(E-Ut.x)<260&&S.push({x:E,y:0,z:_*Fi[0],r:_>0?0:Math.PI})}}Il(je.mbus,S)}let t=!It.metroSint&&!It.metro8&&It.troleElev;{let S=[];if(t)for(let _ of[1,-1]){let M=(je.t+(_<0?15:0))*12%360;for(let v=-2;v<=2;v++){let E=Ut.x+_*(M+v*360-150);Math.abs(E-Ut.x)<280&&S.push({x:E,y:8,z:_*1.1,r:_>0?0:Math.PI})}}Il(je.trole,S)}let e=It.metroSint||(It.metro8?"s":null)||(t?"e":null);je.g.visible=!!e,je.via.visible=e==="s",je.vd.visible=e==="e",vh&&(vh.visible=e!=="s");let n=je.tren;if(n.visible=!!e&&!(Qt&&Qt.listo&&It.pos),!e||t){n.count=0,je.t+=i;return}je.t+=i;let s=16,r=It.metro8?6:9,o=r*15.3,a=It.metro8?8:60,l=e==="e"?8:.15,c=new ae,h=new $e,u=new N,f=new N(1,1,1),d=0,p=520;for(let S of[1,-1]){let g=(je.t+(S<0?a/2:0))*s,m=a*s;for(let _=-Math.ceil(p/m)-1;_<=Math.ceil(p/m)+1;_++){let M=g%m+_*m-p/2;if(!(a>=30&&_!==0))for(let v=0;v<r&&d<n.instanceMatrix.count;v++){let E=Ut.x+S*(M-v*15.3);Math.abs(E-Ut.x)>300||(h.setFromAxisAngle(new N(0,1,0),S>0?0:Math.PI),u.set(E,l,(S>0,0)),n.setMatrixAt(d++,c.compose(u,h,f)))}}}n.count=d,n.instanceMatrix.needsUpdate=!0}var Qt=null,F_=110540,Qf={motorway:20,trunk:18,primary:15,secondary:12,tertiary:10,unclassified:8,residential:7,living_street:6,service:4.5,link:7},Ml={motorway:.06,trunk:.058,primary:.055,secondary:.05,tertiary:.045,link:.044,unclassified:.04,residential:.035,living_street:.033,service:.03};function rn(i,t,e){return[(e-i.lon)*111320*Math.cos(i.lat*Math.PI/180),-(t-i.lat)*F_]}function Rh(i){i=i.index?i.toNonIndexed():i;for(let t of Object.keys(i.attributes))t!=="position"&&t!=="color"&&i.deleteAttribute(t);return i}function En(i,t,e,n){let s=t/2;for(let r=1;r<i.length;r++){let[o,a]=i[r-1],[l,c]=i[r],h=l-o,u=c-a,f=Math.hypot(h,u);if(f<.05)continue;let d=-u/f*s,p=h/f*s,S=new Fe;S.setAttribute("position",new pe([o+d,e,a+p,l+d,e,c+p,o-d,e,a-p,o-d,e,a-p,l+d,e,c+p,l-d,e,c-p],3)),n.push(S)}for(let r=0;r<i.length;r++)n.push(Rh(new Er(s,10).rotateX(-Math.PI/2).translate(i[r][0],e,i[r][1])))}function Sl(i){let t=[0];for(let e=1;e<i.length;e++)t.push(t[e-1]+Math.hypot(i[e][0]-i[e-1][0],i[e][1]-i[e-1][1]));return t}function Pe(i,t){let e=i.p,n=i.cum;t=Math.max(0,Math.min(n[n.length-1],t));let s=1;for(;s<n.length-1&&n[s]<t;)s++;let r=(t-n[s-1])/Math.max(1e-6,n[s]-n[s-1]),o=e[s][0]-e[s-1][0],a=e[s][1]-e[s-1][1],l=Math.hypot(o,a)||1;return{x:e[s-1][0]+o*r,z:e[s-1][1]+a*r,dx:o/l,dz:a/l}}var kn=(i,t)=>Math.atan2(-t,i),dh={};function O_(i){if(dh[i])return dh[i];let t=document.createElement("canvas"),e=t.getContext("2d");e.font="bold 44px Arial",t.width=Math.min(1024,Math.ceil(e.measureText(i).width)+28),t.height=64,e.font="bold 44px Arial",e.textBaseline="middle",e.lineJoin="round",e.lineWidth=9,e.strokeStyle="rgba(20,20,24,.85)",e.strokeText(i,14,34),e.fillStyle="#fff",e.fillText(i,14,34);let n=new Mn(t);return n.colorSpace=Ne,n.anisotropy=4,dh[i]={mat:new ge({map:n,transparent:!0,depthWrite:!1}),ar:t.width/t.height}}function Sh(i){let t=document.createElement("canvas"),e=t.getContext("2d");e.font="bold 56px Arial";let n=Math.ceil(e.measureText(i).width)+56;t.width=n,t.height=96,e.font="bold 56px Arial",e.fillStyle="rgba(0,0,0,.25)",e.beginPath(),e.roundRect(6,10,n-8,84,22),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.roundRect(2,4,n-8,84,22),e.fill(),e.fillStyle="#1d1d1b",e.textBaseline="middle",e.fillText(i,26,48);let s=new Mn(t);s.colorSpace=Ne;let r=new Ei(new ci({map:s,depthTest:!1}));return r.scale.set(n/96*5.5,5.5,1),r.renderOrder=5,r}var ph={};function B_(i){if(ph[i])return ph[i];let t=document.createElement("canvas"),e=t.getContext("2d"),n="bold 64px Arial";e.font=n;let s=Math.min(1400,Math.ceil(e.measureText(i).width)+90);t.width=s,t.height=120,e.fillStyle="#111",e.beginPath(),e.roundRect(0,0,s,120,14),e.fill(),e.fillStyle="#fff",e.beginPath(),e.roundRect(9,9,s-18,102,8),e.fill(),e.strokeStyle="#111",e.lineWidth=3,e.beginPath(),e.roundRect(17,17,s-34,86,5),e.stroke(),e.fillStyle="#111",e.font=n,e.textBaseline="middle",e.textAlign="center",e.fillText(i,s/2,63,s-60);let r=new Mn(t);return r.colorSpace=Ne,r.anisotropy=4,ph[i]={t:r,ar:s/120}}function z_(i){let e=new Map,n=[],s=[];i.forEach((o,a)=>{if(!(!o.nombre||o.tipo==="service"))for(let l=1;l<o.p.length;l++){let[c,h]=o.p[l-1],[u,f]=o.p[l],d={ci:a,x1:c,z1:h,x2:u,z2:f};s.push(d);for(let p=Math.floor(Math.min(c,u)/40);p<=Math.floor(Math.max(c,u)/40);p++)for(let S=Math.floor(Math.min(h,f)/40);S<=Math.floor(Math.max(h,f)/40);S++){let g=p+","+S;(e.get(g)||e.set(g,[]).get(g)).push(d)}}});let r=new Set;for(let[o,a]of e)for(let l=0;l<a.length;l++)for(let c=l+1;c<a.length;c++){let h=a[l],u=a[c],f=i[h.ci].nombre,d=i[u.ci].nombre;if(h.ci===u.ci||f===d)continue;let p=h.x2-h.x1,S=h.z2-h.z1,g=u.x2-u.x1,m=u.z2-u.z1,_=p*m-S*g;if(Math.abs(_)<1e-6)continue;let M=((u.x1-h.x1)*m-(u.z1-h.z1)*g)/_,v=((u.x1-h.x1)*S-(u.z1-h.z1)*p)/_;if(M<-.02||M>1.02||v<-.02||v>1.02)continue;let E=h.x1+p*M,b=h.z1+S*M,x=[f,d].sort().join("|")+"|"+Math.round(E/30)+","+Math.round(b/30);r.has(x)||(r.add(x),n.push({x:E,z:b,a:f,b:d}))}return n}var td={lat:19.3622992,lon:-99.0569941},ed=i=>/perif/i.test(i.nombre+" "+(i.ref||""));function Di(i,t,e){let n=null;for(let s=1;s<i.p.length;s++){let[r,o]=i.p[s-1],[a,l]=i.p[s],c=a-r,h=l-o,u=c*c+h*h||1,f=Math.sqrt(u),d=Math.max(0,Math.min(1,((t-r)*c+(e-o)*h)/u)),p=r+c*d,S=o+h*d,g=Math.hypot(t-p,e-S);(!n||g<n.d)&&(n={d:g,s:i.cum[s-1]+f*d,x:p,z:S,dx:c/f,dz:h/f})}return n}function bh(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new Mn(s);return r.colorSpace=Ne,n&&(r.wrapS=r.wrapT=Xi,r.repeat.set(n,n)),r.anisotropy=4,r}function H_(i,t,e,n){let s={barco:null,sem:null},r=i.filter(v=>!v.elev&&ed(v)&&Tl.test(v.tipo+"")||!v.elev&&ed(v));if(!r.length)return s;let[o,a]=rn(t,td.lat,td.lon);if(q_(r,i,t,e,n,[o,a]),Math.hypot(o,a)>2500)return s;let l=null;for(let v of r){let E=Di(v,o,a);(!l||E.d<l.q.d)&&(l={c:v,q:E})}if(!l||l.q.d>140)return s;let c=null;for(let v of i)if(v.elev==="puente")for(let E of r)for(let b=1;b<v.p.length;b++)for(let x=1;x<E.p.length;x++){let y=Pl(E.p[x-1],E.p[x],v.p[b-1],v.p[b]);if(!y)continue;let R=Math.hypot(y.x-o,y.z-a);R<700&&(!c||R<c.d)&&(c={x:y.x,z:y.z,d:R})}let h=l.q.dx,u=l.q.dz;c?(c.x-o)*h+(c.z-a)*u<0&&(h=-h,u=-u):u>0&&(h=-h,u=-u),s.barco={x:o,z:a},e.add(G_(o,a,h,u)),s.dbg=[];let f=l.c,d=1,p=null;for(let v of r){let E=Di(v,o,a);if(!(E.d>140))for(let b of v.oneway?[1]:[1,-1]){let x=E.dx*b,y=E.dz*b,R=(o-E.x)*y-(a-E.z)*x>0,A=!c||(c.x-E.x)*x+(c.z-E.z)*y>0;R&&A&&(!p||E.d<p.d)&&(p={cc:v,dd:b,d:E.d})}}p&&(f=p.cc,d=p.dd);let S=f.cum[f.cum.length-1],g=(v,E)=>{let b=Pe(f,Math.max(0,Math.min(S,v))),x=b.dx*d,y=b.dz*d,R=-y,A=x,I=new Me;return I.position.set(b.x+R*E,0,b.z+A*E),I.rotation.y=kn(x,y),I},m=null;for(let v of i)if(v.elev==="puente")for(let E=1;E<v.p.length;E++)for(let b=1;b<f.p.length;b++){let x=Pl(f.p[b-1],f.p[b],v.p[E-1],v.p[E]);if(!x)continue;let y=f.cum[b-1]+Math.hypot(x.x-f.p[b-1][0],x.z-f.p[b-1][1]);Math.hypot(x.x-o,x.z-a)<700&&(m==null||Math.abs(y-Di(f,o,a).s)<Math.abs(m-Di(f,o,a).s))&&(m=y)}if(m!=null){let v=k_(Math.min(f.w*.75,10)),E=g(m-d*16,f.w/2+.9);E.add(v.g),e.add(E),s.sem=v;let b=g(m-d*40,f.w/2+1.25);b.add(W_()),e.add(b),s.libres=[[E.position.x,E.position.z],[b.position.x,b.position.z]]}let _=Di(f,o+h*50,a+u*50),M=g(_.s-d*4,-(f.w/2+1.2));return M.add(X_()),e.add(M),s.dbg.push(["let",M.position.x,M.position.z,m,d,f.nombre]),s}function G_(i,t,e,n){let s=new Me,r=96,o=30,a=12,l=bh(64,64,(y,R,A)=>{y.fillStyle="#dcdcd7",y.fillRect(0,0,R,A),y.fillStyle="#b9bab4";for(let I=0;I<A;I+=8)y.fillRect(0,I,R,2)},.25),c=new qi([new pt(-r/2,0),new pt(r/2-12,0),new pt(r/2+7,a+1.5),new pt(-r/2-2,a)]),h=new gt(new Ns(c,{depth:o,bevelEnabled:!1}).translate(0,0,-o/2),new Wt({map:l}));h.castShadow=!0,h.receiveShadow=!0,s.add(h);let u=bh(512,64,(y,R,A)=>{y.fillStyle="#f1efe8",y.fillRect(0,0,R,A);let I=["#e5533d","#2f9e6e","#3f6fd8","#e0a526","#8c4fd6","#1fb5c9"];for(let U=0;U<70;U++)y.fillStyle=I[U%I.length],y.beginPath(),y.ellipse(Math.random()*R,20+Math.random()*40,8+Math.random()*22,6+Math.random()*12,Math.random()*3,0,7),y.fill()});for(let y of[1,-1]){let R=new gt(new Ie(r-14,2.2),new Wt({map:u}));R.position.set(-6,1.1,y*(o/2+.05)),y<0&&(R.rotation.y=Math.PI),s.add(R)}let f=new Wt({color:15987695}),d=new Wt({color:4608606}),p=new gt(new ne(r*.42,8,o*.72),f);p.position.set(-r*.08,a+4,0),p.castShadow=!0,s.add(p);let S=new gt(new ne(r*.42+.1,1.6,o*.72+.1),d);S.position.set(-r*.08,a+5.2,0),s.add(S);let g=new gt(new ne(r*.2,7,o*.5),f);g.position.set(-r*.2,a+11.5,0),g.castShadow=!0,s.add(g);let m=new gt(new ne(r*.18,5,o*.6),f);m.position.set(-r*.42,a+2.5,0),s.add(m);let _=new Wt({color:10133670});for(let y of[1,-1]){let R=new gt(new ne(r,.1,.1),_);R.position.set(0,a+1.3,y*o/2),s.add(R)}let M=Math.floor(r/6)*2,v=new ze(new Nr(.42,.13,6,14),new Wt({color:14165547}),M),E=new ae,b=0;for(let y of[1,-1])for(let R=-r/2+3;R<r/2-2&&b<M;R+=6)v.setMatrixAt(b++,E.makeTranslation(R,a+.85,y*(o/2+.08)));v.count=b,s.add(v);let x=Sh("\u26F4\uFE0F Barco Utop\xEDa");return x.position.set(0,a+20,0),s.add(x),s.position.set(i,0,t),s.rotation.y=kn(e,n),s}function k_(i){let t=new Me,e=new Wt({color:5988712}),n=new gt(new Te(.16,.2,6.6,8),e);n.position.y=3.3,n.castShadow=!0,t.add(n);let s=new gt(new ne(.14,.14,i),e);s.position.set(0,6.3,-i/2),t.add(s);let r=[],o=(a,l)=>{let c=new gt(new ne(.45,1.45,.55),new Wt({color:1842721}));c.position.set(0,l,a),t.add(c),[1769306,16756736,16722458].forEach((h,u)=>{let f=new gt(new Rn(.17,10,8),new ge({color:2236962}));f.position.set(-.26,l-.46+u*.46,a),f.userData.col=h,t.add(f),(r[u]||=[]).push(f)})};return o(-i*.8,5.6),o(-.35,3.4),{g:t,luces:r}}function V_(i,t){let e=t%38,n=e<20?0:e<23?1:2;i.luces.forEach((s,r)=>s.forEach(o=>o.material.color.setHex(r===n?o.userData.col:2236962)))}function W_(){let i=new Me,t=new Wt({color:6119784}),e=new gt(new ne(4.4,.14,1.9),new Wt({color:9146519}));e.position.set(0,2.6,.3),e.castShadow=!0,i.add(e);for(let a of[-2,2]){let l=new gt(new ne(.1,2.6,.1),t);l.position.set(a,1.3,1.1),i.add(l)}let n=new gt(new Ie(4.1,2.1),new Wt({color:12375268,transparent:!0,opacity:.45,side:we}));n.position.set(0,1.35,1.12),i.add(n);let s=new gt(new ne(.18,1.9,1.3),new Wt({color:16185074,emissive:3355443}));s.position.set(2.15,1.25,.45),i.add(s);let r=new gt(new ne(2.6,.08,.45),t);r.position.set(-.3,.5,.8),i.add(r);let o=new gt(new ne(.06,.6,.6),new ge({color:1402304}));return o.position.set(-2.3,3.1,.3),i.add(o),i}function X_(){let i=new Me,t=bh(1100,470,(c,h,u)=>{c.fillStyle="#e4672a",c.fillRect(0,0,h,u),c.strokeStyle="#fff",c.lineWidth=10,c.strokeRect(16,16,h-32,u-32),c.fillStyle="#fff",c.textAlign="center",c.textBaseline="middle",c.font="bold 50px Arial",c.fillText("USE V\xCDAS ALTERNAS",h/2,70),c.font="bold 76px Arial",c.fillText("DOBLE SENTIDO",h/2,160),c.fillText("EJE 6 SUR",h/2,245),c.font="bold 66px Arial",c.fillText("DE 06:00 A 09:00 HRS",h/2,330),c.font="bold 40px Arial",c.fillText("www.circuitobicentenario.com.mx",h/2,415)}),e=6.6,n=e*470/1100,s=new gt(new Ie(e,n),new Wt({map:t}));s.rotation.y=-Math.PI/2,s.position.set(-.08,7.2,2.2),i.add(s);let r=new gt(new Ie(e,n),new Wt({color:9277329}));r.rotation.y=Math.PI/2,r.position.set(.08,7.2,2.2),i.add(r);let o=new Wt({color:7041143}),a=new gt(new Te(.2,.24,8.6,8),o);a.position.y=4.3,a.castShadow=!0,i.add(a);let l=new gt(new ne(.16,.16,4.4),o);return l.position.set(.2,8.2,1.9),i.add(l),i}function q_(i,t,e,n,s,r){let o=i.filter(m=>m.oneway&&m.w>=6);if(o.length<2)return;let a=m=>{let _=[];for(let M of t)if(m.test(Y_(M.nombre+" "+(M.ref||""))))for(let v of o)for(let E=1;E<M.p.length;E++)for(let b=1;b<v.p.length;b++){let x=Pl(v.p[b-1],v.p[b],M.p[E-1],M.p[E]);x&&_.push(x.z)}return _},l=a(/ermita/),c=a(/eje\s*5\b|leyes de reforma/),h=l.length?Math.max(...l):rn(e,19.3475,-99.056)[1],u=c.length?Math.min(...c):rn(e,19.3765,-99.056)[1];if(!(u<h))return;let f=[],d=[],p=[],S=(m,_,M,v,E,b)=>m.push(_[0],b,_[1],M[0],b,M[1],v[0],b,v[1],v[0],b,v[1],M[0],b,M[1],E[0],b,E[1]);for(let m of o){let _=m.cum[m.cum.length-1],M=[];for(let E=0;E<=_;E+=6){let b=Pe(m,E);if(b.z<u||b.z>h){M.push(null);continue}let x=null;for(let I of o){if(I===m)continue;let U=Di(I,b.x,b.z);if(U.d<12||U.d>95||U.dx*b.dx+U.dz*b.dz>-.5)continue;let H=(U.x-b.x)/U.d,P=(U.z-b.z)/U.d;Math.abs(H*b.dx+P*b.dz)>.5||(!x||U.d<x.q.d)&&(x={q:U,B:I,vx:H,vz:P})}if(!x){M.push(null);continue}let y=[b.x+x.vx*(m.w/2+.7),b.z+x.vz*(m.w/2+.7)],R=[x.q.x-x.vx*(x.B.w/2+.7),x.q.z-x.vz*(x.B.w/2+.7)],A=[(y[0]+R[0])/2,(y[1]+R[1])/2];M.push(Math.hypot(R[0]-y[0],R[1]-y[1])>7?{ea:y,m:A,vx:x.vx,vz:x.vz,sv:E}:null)}let v=m.p[m.p.length-1][1]<m.p[0][1];for(let E=1;E<M.length;E++){let b=M[E-1],x=M[E];if(!(!b||!x)){if(S(f,b.ea,x.ea,b.m,x.m,.03),v){let y=(R,A)=>[R.m[0]+R.vx*A,R.m[1]+R.vz*A];S(d,y(b,-1.6),y(x,-1.6),y(b,1.6),y(x,1.6),.05),S(p,y(b,2),y(x,2),y(b,3.1),y(x,3.1),.05)}if(E%2===0){let y=Math.hypot(b.m[0]-b.ea[0],b.m[1]-b.ea[1]);if(y<6)continue;let R=.15+ts("pq"+m.p[0][0]+E)*Math.max(0,(y-4.5)/y-.15),A=b.ea[0]+(b.m[0]-b.ea[0])*R,I=b.ea[1]+(b.m[1]-b.ea[1])*R;Math.hypot(A-r[0],I-r[1])>62&&s.push([A,I,.9+ts("a"+E+m.p[0][1])*.6])}}}}let g=(m,_)=>{if(!m.length)return;let M=new Fe;M.setAttribute("position",new pe(m,3)),M.computeVertexNormals();let v=new gt(M,new Wt({color:_,side:we}));v.receiveShadow=!0,n.add(v)};g(f,8367704),g(d,14275265),g(p,5935044)}var Y_=i=>String(i||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),Tl=/^(motorway|trunk|primary|secondary|tertiary|unclassified|residential|living_street)(_link)?$/;function Pl(i,t,e,n){let s=t[0]-i[0],r=t[1]-i[1],o=n[0]-e[0],a=n[1]-e[1],l=s*a-r*o;if(Math.abs(l)<1e-9)return null;let c=((e[0]-i[0])*a-(e[1]-i[1])*o)/l,h=((e[0]-i[0])*r-(e[1]-i[1])*s)/l;return c>=0&&c<=1&&h>=0&&h<=1?{x:i[0]+s*c,z:i[1]+r*c,t:c}:null}function Z_(i){let t=new Map,e=40,n=new Map;i.forEach((a,l)=>{if(!(a.c.puente||!Tl.test(a.c.tipo||"")))for(let c=1;c<a.p.length;c++){let h=a.p[c-1],u=a.p[c],f=[h,u,a.c.nombre||""];for(let d=Math.floor(Math.min(h[0],u[0])/e);d<=Math.floor(Math.max(h[0],u[0])/e);d++)for(let p=Math.floor(Math.min(h[1],u[1])/e);p<=Math.floor(Math.max(h[1],u[1])/e);p++){let S=d+","+p;(n.get(S)||n.set(S,[]).get(S)).push(f)}}});let s=a=>{for(let l=1;l<a.p.length;l++){let c=a.p[l-1],h=a.p[l];for(let u=Math.floor(Math.min(c[0],h[0])/e);u<=Math.floor(Math.max(c[0],h[0])/e);u++)for(let f=Math.floor(Math.min(c[1],h[1])/e);f<=Math.floor(Math.max(c[1],h[1])/e);f++)for(let d of n.get(u+","+f)||[])if(d[2]!==(a.c.nombre||"")&&Pl(c,h,d[0],d[1]))return!0}return!1},r=[];if(i.forEach((a,l)=>{if(!a.c.puente||!Tl.test(a.c.tipo||"")||!s(a))return;let c=6.2*Math.max(1,Math.min(3,a.c.capa||1));t.set(l,{elev:"puente",H:c,taperA:!1,taperB:!1}),r.push({x:a.p[0][0],z:a.p[0][1],H:c,i:l,fin:0},{x:a.p[a.p.length-1][0],z:a.p[a.p.length-1][1],H:c,i:l,fin:1})}),!r.length)return t;let o=a=>r.filter(l=>Math.hypot(l.x-a[0],l.z-a[1])<1.5);i.forEach((a,l)=>{if(t.has(l)||!Tl.test(a.c.tipo||""))return;let c=o(a.p[0]),h=o(a.p[a.p.length-1]);!c.length&&!h.length||(c.concat(h).forEach(u=>u.usado=!0),t.set(l,{elev:"rampa",hA:c.length?c[0].H:0,hB:h.length?h[0].H:0}))});for(let a of r)if(!a.usado){let l=t.get(a.i);a.fin===0?l.taperA=!0:l.taperB=!0}return t}function qs(i,t){if(!i||!i.elev)return 0;let e=i.cum[i.cum.length-1];if(i.elev==="puente"){let s=1,r=Math.min(45,e/2);return i.taperA&&(s=Math.min(s,t/r)),i.taperB&&(s=Math.min(s,(e-t)/r)),i.H*Math.max(0,Math.min(1,s))}let n=Math.min(90,e);return Math.max(i.hA*Math.max(0,1-t/n),i.hB*Math.max(0,1-(e-t)/n))}function J_(i,t,e){let n=[],s=[],r=[],o=[],a=[],l=(u,f,d,p,S)=>u.push(...f,...d,...p,...p,...d,...S),c=(u,f,d,p)=>{let S=p[0]-d[0],g=p[1]-d[1],m=S*S+g*g||1,_=Math.max(0,Math.min(1,((u-d[0])*S+(f-d[1])*g)/m));return Math.hypot(u-d[0]-S*_,f-d[1]-g*_)};for(let u of i){let f=u.cum[u.cum.length-1],d=Math.max(2,Math.ceil(f/4)),p=u.w/2,S=[];for(let m=0;m<=d;m++){let _=f*m/d,M=Pe(u,_);S.push({x:M.x,z:M.z,nx:-M.dz,nz:M.dx,h:qs(u,_)})}for(let m=1;m<S.length;m++){let _=S[m-1],M=S[m],v=(E,b,x)=>[E.x+E.nx*p*b,x,E.z+E.nz*p*b];l(n,v(_,1,_.h+.06),v(M,1,M.h+.06),v(_,-1,_.h+.06),v(M,-1,M.h+.06));for(let E of[1,-1]){let b=u.elev==="puente"?Math.max(0,_.h-1.2):0,x=u.elev==="puente"?Math.max(0,M.h-1.2):0;l(s,v(_,E,b),v(M,E,x),v(_,E,_.h+.9),v(M,E,M.h+.9)),(_.h>.4||M.h>.4)&&l(r,v(_,E*1.01,_.h+.9),v(M,E*1.01,M.h+.9),v(_,E*1.01,_.h+1.2),v(M,E*1.01,M.h+1.2))}u.elev==="puente"&&_.h>1.5&&l(s,v(_,1,_.h-1.2),v(M,1,M.h-1.2),v(_,-1,_.h-1.2),v(M,-1,M.h-1.2))}let g=[];for(let m=1;m<u.nl;m++)u.oneway?g.push(-u.w/2+m*u.w/u.nl):g.push(m*u.w/2/u.nl,-m*u.w/2/u.nl);u.oneway||g.push(0);for(let m of g)for(let _=2;_<f-3;_+=9){let M=Pe(u,_),v=Pe(u,Math.min(f,_+3)),E=qs(u,_)+.09,b=qs(u,_+3)+.09,x=m===0?.14:.08,y=(R,A,I)=>[R.x-R.dz*A,I,R.z+R.dx*A];l(o,y(M,m+x,E),y(v,m+x,b),y(M,m-x,E),y(v,m-x,b))}if(u.elev==="puente")for(let m=10;m<f-6;m+=26){let _=qs(u,m);if(_<3)continue;let M=Pe(u,m);t.some(v=>{for(let E=1;E<v.p.length;E++)if(c(M.x,M.z,v.p[E-1],v.p[E])<v.w/2+1.5)return!0;return!1})||a.push([M.x,M.z,_-1.2,kn(M.dx,M.dz),u.w*.55])}}let h=(u,f)=>{if(!u.length)return;let d=new Fe;d.setAttribute("position",new pe(u,3)),d.computeVertexNormals();let p=new gt(d,new Wt({color:f,side:we}));p.castShadow=!0,p.receiveShadow=!0,e.add(p)};if(h(n,3816773),h(s,11119269),h(r,14857239),h(o,15921906),a.length){let u=new ze(new ne(1.4,1,1).translate(0,.5,0),new Wt({color:10263960}),a.length),f=new ae,d=new $e,p=new N(0,1,0);a.forEach(([S,g,m,_,M],v)=>{d.setFromAxisAngle(p,_),u.setMatrixAt(v,f.compose(new N(S,0,g),d,new N(1,m,M)))}),u.castShadow=!0,e.add(u)}}function $_(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n.x*s.y-s.x*n.y}return t<0}function ts(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return(t>>>0)/4294967296}function K_(i){if(!Ye||!i||!i.centro)return;let t=Qt&&Qt.O&&Math.hypot(...rn(Qt.O,i.centro.lat,i.centro.lon))<4e3?Qt.O:{lat:i.centro.lat,lon:i.centro.lon},e=Qt,n=new Me,s=new gt(new Ie(9e3,9e3).rotateX(-Math.PI/2),new Wt({color:12174e3,polygonOffset:!0,polygonOffsetFactor:6,polygonOffsetUnits:12}));s.position.y=-.02,s.receiveShadow=!0,n.add(s);let r=[],o={},a=[],l=[],c=[],h=[],u=(i.calles||[]).map(z=>({c:z,p:z.pts.map(([X,Y])=>rn(t,X,Y))})).filter(z=>z.p.length>=2),f=Z_(u),d=[];for(let z=0;z<u.length;z++){let X=u[z].c,Y=u[z].p,Ct=/_link$/.test(X.tipo)?"link":Qf[X.tipo]?X.tipo:"residential",j=/\beje\s*5\b/i.test((X.nombre||"")+" "+(X.ref||"")),at=X.carriles||(j?6:0),ct=at?Math.max(5,Math.min(26,at*3.2)):X.ancho||Qf[Ct],O={p:Y,cum:Sl(Y),tipo:Ct,w:ct,nombre:X.nombre||"",ref:X.ref||"",oneway:!!X.oneway,ncar:at};O.nl=rs(O),r.push(O);let lt=f.get(z);if(lt){Object.assign(O,lt),d.push(O);continue}En(Y,ct,Ml[Ct],o[Ct]||=[]);let ot=O.cum[O.cum.length-1],_t=Ml[Ct]+.012;if(!O.oneway&&ct>=6.5)for(let rt of[-.17,.17]){let ht=[];for(let St=0;St<=ot;St+=Math.max(3,ot/300)){let Pt=Pe(O,St);ht.push([Pt.x-Pt.dz*rt,Pt.z+Pt.dx*rt])}En(ht,.13,_t,l)}let dt=[];for(let rt=1;rt<O.nl;rt++)O.oneway?dt.push(-ct/2+rt*ct/O.nl):dt.push(rt*ct/2/O.nl,-rt*ct/2/O.nl);for(let rt of dt)for(let ht=2;ht<ot-3;ht+=9){let St=Pe(O,ht),Pt=Pe(O,Math.min(ot,ht+3));En([[St.x-St.dz*rt,St.z+St.dx*rt],[Pt.x-Pt.dz*rt,Pt.z+Pt.dx*rt]],.16,_t,a)}if(Ct!=="service"){En(Y,ct+5.2,.012,c);for(let rt=6;rt<ot-4&&h.length<1600;rt+=16){if(ts(O.nombre+rt+Y[0][0])<.45)continue;let ht=Pe(O,rt),St=ts(rt+O.nombre)<.5?1:-1,Pt=(ct/2+1.7)*St;h.push([ht.x-ht.dz*Pt,ht.z+ht.dx*Pt,.75+ts(String(rt))*.5])}}}d.length&&J_(d,r.filter(z=>!z.elev),n);let p=H_(r,t,n,h),S=new Wt({color:3816773,side:we}),g=new Wt({color:4869461,side:we});for(let z in o){let X=ve(o[z]);X.computeVertexNormals();let Y=new gt(X,z==="service"?g:S);Y.receiveShadow=!0,n.add(Y)}if(a.length&&n.add(new gt(ve(a),new ge({color:15921906,side:we}))),l.length&&n.add(new gt(ve(l),new ge({color:15909376,side:we}))),c.length){let z=new gt(ve(c),new Wt({color:13225156,side:we,polygonOffset:!0,polygonOffsetFactor:3,polygonOffsetUnits:6}));z.receiveShadow=!0,n.add(z)}if(h.length){let z=new ze(new Te(.15,.2,1.6,6).translate(0,.8,0),new Wt({color:8018490}),h.length),X=new ze(new Us(1.4,0).translate(0,2.6,0),new Wt({color:5939290,flatShading:!0}),h.length),Y=new ae,Ct=new $e,j=new N,at=new N;h.forEach(([ct,O,lt],ot)=>{Y.compose(at.set(ct,0,O),Ct,j.setScalar(lt)),z.setMatrixAt(ot,Y),X.setMatrixAt(ot,Y)}),X.castShadow=!0,n.add(z,X)}if(i.casa){let[z,X]=rn(t,i.casa.lat,i.casa.lon),Y=Sh("\u{1F3E0} Mi casa");Y.position.set(z,11,X),n.add(Y)}let m=null;if(i.radar){let[z,X]=rn(t,i.radar.lat,i.radar.lon),Y=null;for(let Ct of r)for(let j=1;j<Ct.p.length;j++){let[at,ct]=Ct.p[j-1],[O,lt]=Ct.p[j],ot=O-at,_t=lt-ct,dt=ot*ot+_t*_t||1,rt=Math.max(0,Math.min(1,((z-at)*ot+(X-ct)*_t)/dt)),ht=at+ot*rt,St=ct+_t*rt,Pt=Math.hypot(z-ht,X-St);if(!Y||Pt<Y.dd-.5||Math.abs(Pt-Y.dd)<.5&&Ct.w>Y.c.w){let Yt=Math.sqrt(dt);Y={dd:Pt,px:ht,pz:St,ux:ot/Yt,uz:_t/Yt,c:Ct}}}if(Y&&Y.dd<60){let Ct=-Y.uz,j=Y.ux,at=(z-Y.px)*Ct+(X-Y.pz)*j>=0?1:-1,ct=Y.c.w/2+1.3,O=new Me;O.position.set(Y.px+Ct*ct*at,0,Y.pz+j*ct*at);let lt=new Wt({color:10134445}),ot=new gt(new Te(.14,.18,6.2,8),lt);ot.position.y=3.1,ot.castShadow=!0,O.add(ot);let _t=new gt(new ne(.12,.12,2.2),lt);_t.position.set(0,6.1,-1*at),_t.rotation.y=0,O.add(_t);let dt=new gt(new ne(.9,.6,.7),new Wt({color:15921906}));dt.position.set(0,5.6,-1.9*at),O.add(dt);let rt=new gt(new Te(.18,.18,.12,12).rotateX(Math.PI/2),new ge({color:1118481}));rt.position.set(.48,5.6,-1.9*at),rt.rotation.y=Math.PI/2,O.add(rt);let ht=new gt(new Rn(.11,8,6),new ge({color:16722458}));ht.position.set(.3,5.98,-1.9*at),O.add(ht);let St=new Ei(new ci({map:Dl.map,color:16777215,transparent:!0,depthWrite:!1,blending:ui}));St.scale.set(9,9,1),St.position.set(0,5.6,-1.9*at),St.visible=!1,O.add(St);let Pt=Sh("\u{1F4F8} Radar \xB7 50");Pt.position.set(0,8.4,0),O.add(Pt),O.rotation.y=kn(Y.ux,Y.uz),n.add(O),m={g:O,led:ht,flash:St}}}let _=[],M={};for(let z of r.slice().sort((X,Y)=>Y.w-X.w)){if(!z.nombre||z.elev||_.length>=90)continue;let X=z.cum[z.cum.length-1],Y=O_(z.nombre),Ct=Math.max(2.6,Math.min(6,z.w*.42)),j=Ct*Y.ar;if(!(X<j*.9))for(let at=Math.min(X/2,40+j/2);at<X-j/2&&_.length<90;at+=170){let ct=Pe(z,at),O=z.nombre+Math.round(ct.x/120)+","+Math.round(ct.z/120);if(M[O])continue;M[O]=1;let lt=new gt(new Ie(j,Ct).rotateX(-Math.PI/2),Y.mat);lt.position.set(ct.x,Ml[z.tipo]+.03,ct.z),lt.userData.base=kn(ct.dx,ct.dz),lt.userData.dx=ct.dx,lt.userData.dz=ct.dz,lt.renderOrder=2,n.add(lt),_.push(lt)}}let v=[];{let X=new Map,Y=(rt,ht)=>Math.floor(rt/25)+","+Math.floor(ht/25);for(let rt of r)for(let ht=1;ht<rt.p.length;ht++){let[St,Pt]=rt.p[ht-1],[Yt,L]=rt.p[ht],ie={x1:St,z1:Pt,x2:Yt,z2:L,r:rt.w/2+2.4};for(let kt=Math.floor((Math.min(St,Yt)-12)/25);kt<=Math.floor((Math.max(St,Yt)+12)/25);kt++)for(let he=Math.floor((Math.min(Pt,L)-12)/25);he<=Math.floor((Math.max(Pt,L)+12)/25);he++){let vt=kt+","+he;(X.get(vt)||X.set(vt,[]).get(vt)).push(ie)}}let Ct=(rt,ht,St)=>{let Pt=St.x2-St.x1,Yt=St.z2-St.z1,L=Pt*Pt+Yt*Yt||1,ie=((rt-St.x1)*Pt+(ht-St.z1)*Yt)/L;return ie=Math.max(0,Math.min(1,ie)),Math.hypot(rt-St.x1-Pt*ie,ht-St.z1-Yt*ie)},j=(rt,ht,St)=>{let Pt=Math.floor(rt/25),Yt=Math.floor(ht/25);for(let L=-1;L<=1;L++)for(let ie=-1;ie<=1;ie++)for(let kt of X.get(Pt+L+","+(Yt+ie))||[])if(Ct(rt,ht,kt)<kt.r+St)return!1;return!0},at=new Map,ct=8,O=(rt,ht)=>{let St=Math.floor(rt/ct)+","+Math.floor(ht/ct);(at.get(St)||at.set(St,[]).get(St)).push([rt,ht])},lt=(rt,ht,St)=>{let Pt=Math.floor(rt/ct),Yt=Math.floor(ht/ct);for(let L=-1;L<=1;L++)for(let ie=-1;ie<=1;ie++)for(let[kt,he]of at.get(Pt+L+","+(Yt+ie))||[])if(Math.hypot(kt-rt,he-ht)<St)return!0;return!1};for(let rt of i.edificios||[])if(rt.pts&&rt.pts.length){let ht=0,St=0;for(let[Pt,Yt]of rt.pts){let[L,ie]=rn(t,Pt,Yt);ht+=L,St+=ie}O(ht/rt.pts.length,St/rt.pts.length)}let[ot,_t]=rn(t,i.centro.lat,i.centro.lon),dt=r.filter(rt=>!/^(service|motorway|link)$/.test(rt.tipo)).sort((rt,ht)=>rt.w-ht.w);for(let rt of dt){let ht=rt.cum[rt.cum.length-1];for(let St of[1,-1]){let Pt=5;for(;Pt<ht-5&&v.length<2600;){let Yt=ts(rt.nombre+"|"+St+"|"+Math.round(Pt)+"|"+Math.round(rt.p[0][0])),L=6+Yt*4.5,ie=9+Yt*7%1*5,kt=Pe(rt,Pt+L/2);if(Pt+=L+.25,Math.hypot(kt.x-ot,kt.z-_t)>750||Yt<.06)continue;let he=-kt.dz*St,vt=kt.dx*St,Re=rt.w/2+2.7+ie/2,Bt=kt.x+he*Re,Vt=kt.z+vt*Re;if(!j(Bt,Vt,ie/2-.3)||!j(Bt+kt.dx*L/2,Vt+kt.dz*L/2,.4)||!j(Bt-kt.dx*L/2,Vt-kt.dz*L/2,.4)||lt(Bt,Vt,Math.min(L,ie)*.85)||p.barco&&Math.hypot(Bt-p.barco.x,Vt-p.barco.z)<66||p.libres&&p.libres.some(([mt,Mt])=>Math.hypot(Bt-mt,Vt-Mt)<9)||rt.oneway&&r.some(mt=>mt!==rt&&mt.oneway&&mt.nombre&&mt.nombre===rt.nombre&&(()=>{let Mt=Di(mt,kt.x,kt.z);return Mt.d>140?!1:Di(mt,Bt,Vt).d<Mt.d})()))continue;O(Bt,Vt);let C=kt.dx*L/2,T=kt.dz*L/2,G=he*ie/2,ft=vt*ie/2,it=Yt<.35?1:Yt<.85?2:3;v.push({loc:[[Bt-C-G,Vt-T-ft],[Bt+C-G,Vt+T-ft],[Bt+C+G,Vt+T+ft],[Bt-C+G,Vt-T+ft]],h:3*it+Yt*31%1*.6,id:"s"+Bt.toFixed(1)+Vt.toFixed(1)})}}}}let E=[15918022,15250592,13227743,16045453,12114110,15123414,14209732,11125984,15778427,14736853,16171425,12572902],b=[],x=[],y=[],R=(z,X)=>{let Y=new Fe;for(let Ct of["position","uv"]){let j=z.attributes[Ct];Y.setAttribute(Ct,new Je(j.array.slice(X.start*j.itemSize,(X.start+X.count)*j.itemSize),j.itemSize))}return Y};for(let z of(i.edificios||[]).concat(v)){if(!z.loc&&(!z.pts||z.pts.length<4))continue;if(p.barco&&!z.loc){let[j,at]=rn(t,z.pts[0][0],z.pts[0][1]);if(Math.hypot(j-p.barco.x,at-p.barco.z)<60)continue}let X=z.loc?z.loc.map(([j,at])=>new pt(j,-at)):z.pts.map(([j,at])=>{let[ct,O]=rn(t,j,at);return new pt(ct,-O)}),Y=ts(z.id||z.pts[0][0]+","+z.pts[0][1]);z.loc&&$_(X)&&X.reverse();let Ct=z.h||(Y<.55?3.2*(1+Math.floor(Y*4)):Y<.9?3.2*(2+Math.floor(Y*3)):3.2*(5+Math.floor(Y*8)));try{let j=new Ns(new qi(X),{depth:Ct,bevelEnabled:!1}).rotateX(-Math.PI/2);j.index&&(j=j.toNonIndexed());let at=E[Math.floor(Y*E.length)];for(let ot of j.groups){let _t=Gn(R(j,ot),at);(ot.materialIndex===0?x:b).push(_t)}let ct=0,O=0,lt=0;for(let ot=0;ot<X.length;ot++){let _t=X[ot],dt=X[(ot+1)%X.length],rt=_t.x*dt.y-dt.x*_t.y;ct+=rt,O+=(_t.x+dt.x)*rt,lt+=(_t.y+dt.y)*rt}ct/=2,Math.abs(ct)>30&&Y*7%1<.8&&(O/=6*ct,lt/=6*ct,y.push([O+(Y*13%1-.5)*2,Ct,-lt+(Y*17%1-.5)*2]))}catch{}}for(let z=0;z<b.length;){let X=0,Y=z;for(;Y<b.length&&X<24e3;)X+=b[Y++].attributes.position.count;let Ct=ve(b.slice(z,Y));Ct.computeVertexNormals(),z=Y;let j=new gt(Ct,j_());j.castShadow=!0,j.receiveShadow=!0,j.name="muros",n.add(j)}if(x.length){let z=ve(x);z.computeVertexNormals();let X=new gt(z,new Wt({vertexColors:!0}));X.receiveShadow=!0,n.add(X)}if(y.length){let z=ve([Gn(new Te(.6,.6,1.15,10).translate(0,.78,0),1776411),Gn(new Te(.62,.62,.08,10).translate(0,1.38,0),2763306),Gn(new ne(1.1,.2,1.1).translate(0,.1,0),10131342)].map(Rh));z.computeVertexNormals();let X=new ze(z,new Wt({vertexColors:!0}),y.length),Y=new ae;y.forEach(([Ct,j,at],ct)=>X.setMatrixAt(ct,Y.makeTranslation(Ct,j,at))),X.castShadow=!0,n.add(X)}let A=[],I=[],U=[],H=[],P=[];for(let z of i.rieles||[]){let X=z.pts.map(([Ct,j])=>rn(t,Ct,j));if(X.length<2)continue;let Y={p:X,cum:Sl(X),elevado:!!z.elevado,y:z.elevado?8:.12,periodo:z.l8?8:60,vagones:z.l8?6:9,t:Math.random()*60};if(!(Y.cum[Y.cum.length-1]<40)){if(A.push(Y),Y.elevado){En(X,9,8,H),En(X,9,6.8,H);let Ct=Y.cum[Y.cum.length-1];for(let j=5;j<Ct;j+=26){let at=Pe(Y,j);P.push(new ne(1.4,6.8,1.4).translate(at.x,3.4,at.z))}}else En(X,8.4,.07,I);for(let Ct of[-2.45,-1.05,1.05,2.45]){let j=[],at=Y.cum[Y.cum.length-1];for(let ct=0;ct<=at;ct+=Math.max(4,at/200)){let O=Pe(Y,ct);j.push([O.x-O.dz*Ct,O.z+O.dx*Ct])}En(j,.12,Y.y+.1,U)}}}if(I.length&&n.add(new gt(ve(I),new Wt({color:7037528,side:we}))),U.length&&n.add(new gt(ve(U),new Wt({color:10133670,side:we}))),H.length){let z=new gt(ve(H),new Wt({color:12170925,side:we}));z.castShadow=!0,n.add(z)}if(P.length){let z=new gt(ve(P),new Wt({color:11578788}));z.castShadow=!0,n.add(z)}let B=new ze(gd(),Ui,400);B.count=0,B.castShadow=!0,n.add(B);let Z=[],W=[],ut=[],J=[];for(let z of i.troles||[]){let X=z.pts.map(([j,at])=>rn(t,j,at));if(X.length<2)continue;let Y={p:X,cum:Sl(X),periodo:30};if(Y.cum[Y.cum.length-1]<40)continue;Z.push(Y),En(X,9.5,8.5,W),En(X,9.5,7.3,W);let Ct=Y.cum[Y.cum.length-1];for(let j=5;j<Ct;j+=30){let at=Pe(Y,j);ut.push(new ne(1.5,7.3,1.5).translate(at.x,3.65,at.z))}for(let j of[-2.2,-1.3,1.3,2.2]){let at=[];for(let ct=0;ct<=Ct;ct+=Math.max(5,Ct/200)){let O=Pe(Y,ct);at.push([O.x-O.dz*j,O.z+O.dx*j])}En(at,.06,13.1,J)}for(let j=10;j<Ct;j+=40){let at=Pe(Y,j);for(let ct of[-1,1])ut.push(new ne(.18,5,.18).translate(at.x-at.dz*4.4*ct,11,at.z+at.dx*4.4*ct))}}if(W.length){let z=new gt(ve(W),new Wt({color:13223613,side:we}));z.castShadow=!0,n.add(z)}if(ut.length){let z=new gt(ve(ut),new Wt({color:11578788}));z.castShadow=!0,n.add(z)}J.length&&n.add(new gt(ve(J),new ge({color:2763306,side:we})));let nt=new ze(pd(),Ui,60);nt.count=0,nt.castShadow=!0,n.add(nt);let st=[],Ft=[],qt=[];for(let z of i.mb||[]){let X=z.pts.map(([j,at])=>rn(t,j,at));if(X.length<2)continue;let Y={p:X,cum:Sl(X),periodo:40,l:z.l},Ct=Y.cum[Y.cum.length-1];if(!(Ct<30)){st.push(Y);for(let j of[-3.6,3.6]){let at=[];for(let ct=0;ct<=Ct;ct+=Math.max(4,Ct/300)){let O=Pe(Y,ct);at.push([O.x-O.dz*j,O.z+O.dx*j])}En(at,.28,.075,Ft);for(let ct=0;ct<=Ct;ct+=6){let O=Pe(Y,ct);qt.push({x:O.x-O.dz*j,z:O.z+O.dx*j,c:Ni.metrobus,f:Math.floor(ct/6)%3})}}}}Ft.length&&n.add(new gt(ve(Ft),new ge({color:15909376,side:we})));let K=new ze(md(),Ui,80);K.count=0,K.castShadow=!0,n.add(K);for(let z of r){if(z.w<7||z.elev)continue;let X=z.cum[z.cum.length-1],Y=z.w>=12?5:7,Ct=Ml[z.tipo];for(let j=0;j<=X;j+=Y){let at=Pe(z,j),ct=Math.floor(j/Y)%3;for(let O of[-1,1])qt.push({x:at.x-at.dz*(z.w/2-.4)*O,z:at.z+at.dx*(z.w/2-.4)*O,y:Ct,c:Ni.orilla,f:ct});if(!z.oneway&&z.w>=10)qt.push({x:at.x,z:at.z,y:Ct,c:Ni.carril,f:ct});else if(z.oneway&&z.w>=10)for(let O of[-1,1])qt.push({x:at.x-at.dz*z.w*.17*O,z:at.z+at.dx*z.w*.17*O,y:Ct,c:Ni.carril,f:ct})}if(qt.length>14e3)break}let Rt=fd(qt);n.add(Rt),Ye.add(n);let Ot={O:t,grupo:n,calles:r,etiquetas:_,rieles:A,tren:B,troles:Z,trole:nt,mbs:st,mbus:K,luces:Rt,listo:!0,coches:e?e.coches:[],motos:e?e.motos:[],pj:e?e.pj:null,rastro:e?e.rastro:[],taxi:e?e.taxi:null,cruce:e?e.cruce:null,radar:m,cruces:z_(r),letreros:e?e.letreros:null,hitos:p};e&&(Ye.remove(e.grupo),e.grupo.traverse(z=>{z.geometry&&z.geometry!==Al&&z.geometry.dispose()})),e&&e.O!==t&&(Ot.pj=null,Ot.rastro=[]),Qt=Ot,Eh&&xd(Eh);for(let z of Qt.coches)z.ci=-1;for(let z of Qt.motos)z.ci=-1;_d()}var Eh=null;function xd(i){if(Eh=i,!Qt||!Qt.O||(Qt.trafG&&(Qt.grupo.remove(Qt.trafG),Qt.trafG.traverse(s=>{s.geometry&&s.geometry.dispose()}),Qt.trafG=null),!i||!i.length))return;let t={cerr:[],rojo:[],amar:[],verde:[]};for(let s of i){let r=s.pts.map(([a,l])=>rn(Qt.O,a,l));if(r.length<2||Math.hypot(r[0][0]-(Qt.pj?Qt.pj.x:0),r[0][1]-(Qt.pj?Qt.pj.z:0))>1500)continue;let o=s.nivel<0?"cerr":s.nivel<.45?"rojo":s.nivel<.75?"amar":"verde";En(r,o==="verde"?1.4:2.2,.095,t[o])}let e={cerr:9109504,rojo:15022389,amar:15905280,verde:3129178},n=new Me;for(let s in t)if(t[s].length){let r=new gt(ve(t[s]),new ge({color:e[s],transparent:!0,opacity:s==="verde"?.55:.8,side:we,depthWrite:!1}));r.renderOrder=1,n.add(r)}Qt.grupo.add(n),Qt.trafG=n}var is=null;function j_(){if(is)return is;let i=4,t=256,e=document.createElement("canvas"),n=document.createElement("canvas");e.width=e.height=n.width=n.height=t;let s=e.getContext("2d"),r=n.getContext("2d");s.fillStyle="#ffffff",s.fillRect(0,0,t,t),r.fillStyle="#000",r.fillRect(0,0,t,t);let o=t/i;for(let c=0;c<i;c++)for(let h=0;h<i;h++){let u=c*o,f=h*o;s.fillStyle="rgba(0,0,0,.10)",s.fillRect(u+o*.18,f+o*.24,o*.64,o*.52),s.fillStyle="#33414f",s.fillRect(u+o*.22,f+o*.28,o*.56,o*.44),s.fillStyle="#5a6b7c",s.fillRect(u+o*.49,f+o*.28,o*.03,o*.44),Math.random()<.55&&(r.fillStyle=Math.random()<.3?"#ffe7b0":"#ffc96b",r.fillRect(u+o*.22,f+o*.28,o*.56,o*.44))}let a=new Mn(e),l=new Mn(n);for(let c of[a,l])c.wrapS=c.wrapT=Xi,c.repeat.set(1/(3.2*i),1/(3.2*i)),c.colorSpace=Ne,c.anisotropy=4;return is=new Wt({vertexColors:!0,map:a,emissiveMap:l,emissive:0}),is}var mh={};function Q_(i){let t=i?"n":"d";if(mh[t])return mh[t];let e=document.createElement("canvas");e.width=4,e.height=256;let n=e.getContext("2d"),s=n.createLinearGradient(0,0,0,256);i?(s.addColorStop(0,"#03060f"),s.addColorStop(.55,"#0d1630"),s.addColorStop(1,"#27324f")):(s.addColorStop(0,"#5f9fd8"),s.addColorStop(.6,"#a9d0ee"),s.addColorStop(1,"#dce9f2")),n.fillStyle=s,n.fillRect(0,0,4,256);let r=new Mn(e);return r.colorSpace=Ne,mh[t]={t:r,horiz:i?2568783:14477810}}var Ll="muestra";function _d(){let i=!!(Qt&&Qt.listo&&It.pos);if((i?"real":"muestra")!==Ll){Ll=i?"real":"muestra",ao.ini=!1,pn.visible=!i,je&&(je.tren.visible=!i);for(let t of xn)t!==Ut&&(t.g.visible=!i);if(Qt){Qt.grupo.visible=i;for(let t of Qt.coches)t.g.visible=i;for(let t of Qt.motos)t.g.visible=i;Qt.taxi&&(Qt.taxi.g.visible=i),Qt.cruce&&(Qt.cruce.g.visible=i&&It.rojo),Qt.letreros&&!i&&Qt.letreros.forEach(t=>t.visible=!1)}i||(Ut.g.rotation.y=0,Ut.z=Fi[1]),Cl()}}function tv(i,t,e=22,n){let s=null;for(let r=0;r<Qt.calles.length;r++){let o=Qt.calles[r];if(o.tipo==="service"&&!n)continue;let a=o.p;for(let l=1;l<a.length;l++){let c=a[l-1][0],h=a[l-1][1],u=a[l][0]-c,f=a[l][1]-h,d=u*u+f*f;if(!d)continue;let p=((i-c)*u+(t-h)*f)/d;p=Math.max(0,Math.min(1,p));let S=c+u*p,g=h+f*p,m=Math.hypot(i-S,t-g),_=m;if(n){let M=Math.sqrt(d);_+=(1-Math.abs((u*n[0]+f*n[1])/M))*8}if(m<e&&(!s||_<s.pen)){let M=Math.sqrt(d);s={ci:r,i:l,t:p,x:S,z:g,d:m,pen:_,dx:u/M,dz:f/M,s:o.cum[l-1]+M*p}}}}return s}function rs(i){return i.ncar?i.oneway?Math.max(1,Math.round(i.ncar)):Math.max(1,Math.round(i.ncar/2)):i.oneway?Math.max(1,Math.min(5,Math.floor(i.w/2.8))):Math.max(1,Math.min(4,Math.floor(i.w/2/2.8)))}function oo(i,t){let e=i.nl||rs(i);return i.oneway?-i.w/2+(t+.5)*i.w/e:(t+.5)*i.w/2/e}function wl(i){let t=i.nl||rs(i);return t>=3?t-2:t-1}var nd=null;function ev(){let i=Qt,[t,e]=rn(i.O,It.pos.lat,It.pos.lon);i.pj||(i.pj={x:t,z:e,cx:t,cz:e,tx:t,tz:e,h:0,ht:0,ci:-1,s:0,dir:1,rx:t,rz:e,v:0,off:0,offObj:0,carril:null,tc:0});let n=i.pj,s=t-n.rx,r=e-n.rz,o=Math.hypot(s,r),a=o>1.5?[s/o,r/o]:[Math.cos(n.ht),-Math.sin(n.ht)],l=tv(t,e,25,a);if(l){let c=i.calles[l.ci],h=l.dx*a[0]+l.dz*a[1]>=0?1:-1,u=l.dx*h,f=l.dz*h;n.tx=l.x,n.tz=l.z,(n.ci!==l.ci||n.dir!==h)&&(n.carril=wl(c)),n.ci=l.ci,n.s=l.s,n.dir=h,(o>1.5||n.ci!==l.ci)&&(n.ht=kn(u,f))}else n.tx=t,n.tz=e,o>1.5&&(n.ht=kn(a[0],a[1])),n.ci=-1;if(o>1.5&&(n.rx=t,n.rz=e),Math.hypot(n.tx-n.cx,n.tz-n.cz)>300){n.cx=n.tx,n.cz=n.tz,n.h=n.ht,n.off=n.offObj=0,i.rastro=[],ao.ini=!1;for(let c of i.coches)c.ci=-1;for(let c of i.motos)c.ci=-1}}function nv(i,t){let e=i.pj,n=[];return i.calles.forEach((s,r)=>{if(s.tipo==="service"||s.tipo==="living_street")return;let o=s.p[Math.floor(s.p.length/2)];Math.hypot(o[0]-e.x,o[1]-e.z)<t+s.cum[s.cum.length-1]/2&&n.push(r)}),n}function bl(i,t,e,n){let s=i.pj;if(n&&s.ci>=0&&Math.random()<.6){let o=i.calles[s.ci],a=o.cum[o.cum.length-1];t.ci=s.ci,t.dir=Math.random()<.75||o.oneway?s.dir:-s.dir,t.s=Math.max(0,Math.min(a,s.s+t.dir*(t.dir===s.dir?(Math.random()<.5?12:-12)+(Math.random()-.5)*220:(Math.random()-.5)*300)))}else{if(!e.length){t.ci=-1;return}t.ci=e[Math.floor(Math.random()*e.length)];let o=i.calles[t.ci],a=o.cum[o.cum.length-1];t.dir=o.oneway||Math.random()<.5?1:-1,t.s=Math.random()*a}t.v=t.vmax*.6,t.lado=(Math.random()-.5)*.6;let r=i.calles[t.ci];t.carril=Math.floor(Math.random()*(r.nl||rs(r)))}function iv(i){let t=It.nivel==="pesado",e=t?46:16,n=6;for(;i.coches.length<e;){let s=od(),r=ro(s==="trailer"&&!It.pico?"sedan":s,Kn(yh),2831424);i.coches.push({...r,ci:-1,s:0,dir:1,v:0,vmax:0,a:0,lado:0})}for(;i.coches.length>e;)Ye.remove(i.coches.pop().g);for(;i.motos.length<n;){let s=ro("moto",Kn([12986408,1402304,2236962]),Kn([3622735,7162945]));i.motos.push({...s,ci:-1,s:0,dir:1,v:12,vmax:12,a:0,fase:Math.random()*6})}i.taxi||(i.taxi=ro("taxi"));for(let s of i.coches)s.vmax=t?3+Math.random()*3:9+Math.random()*5}function id(i,t,e=0){let n=i.calles[t.ci],s=Pe(n,t.s),r=s.dx*t.dir,o=s.dz*t.dir,a=n.nl||rs(n),l=Math.min(a-1,t.carril==null?a-1:t.carril),c=oo(n,l)+e;t.g.position.set(s.x-o*c,qs(n,t.s),s.z+r*c),t.g.rotation.y=kn(r,o)}function sv(i,t){let e=i.pj;if(e.tc+=t,e.ci<0){e.offObj=0,e.carrilFis=null;return}let n=i.calles[e.ci],s=n.nl||rs(n);(e.carril==null||e.carril>=s)&&(e.carril=wl(n));let r=Ut.v,o=r>40/3.6,a=p=>(p.s-e.s)*e.dir,l=i.coches.filter(p=>p.ci===e.ci&&p.g.visible),c=(p,S,g)=>l.some(m=>m.dir===e.dir&&(m.carril||0)===p&&a(m)>S&&a(m)<g),h=(p,S)=>l.some(g=>g.dir!==e.dir&&a(g)>p&&a(g)<S),u=l.find(p=>p.dir===e.dir&&(p.carril||0)===e.carril&&a(p)>1&&a(p)<24+r&&p.v<r-1.2);if(e.carril===-1&&h(-3,35))e.carril=0,e.tc=0;else if(e.tc>1.1){if(o&&u){let p=[e.carril-1,e.carril+1].filter(S=>S>=0&&S<s);s===1&&!n.oneway&&!h(-8,55)&&p.push(-1);for(let S of p)if(S===-1||!c(S,-9,16)){e.carril=S,e.tc=0;break}}else if(e.carril!==wl(n)){let p=wl(n);c(p,-11,9+r*.6)||(e.carril=p,e.tc=0)}}e.offObj=e.carril===-1?-oo(n,0):oo(n,e.carril);let f=0,d=1e9;for(let p=0;p<s;p++){let S=Math.abs(oo(n,p)-e.off);S<d&&(d=S,f=p)}e.carrilFis=f}function rv(i,t){let e=i.pj;if(!i.letreros){i.letreros=[];for(let r=0;r<4;r++){let o=new ci({depthTest:!1,depthWrite:!1,sizeAttenuation:!1,transparent:!0}),a=new Ei(o);a.renderOrder=20,a.center.set(.5,0),a.visible=!1,Ye.add(a),i.letreros.push(a)}}if(i.tLet=(i.tLet||0)+t,i.tLet<.25&&i.letSel){sd(i);return}i.tLet=0;let n=e.ci>=0?i.calles[e.ci]:null,s=n&&n.nombre;if(i.letSel=[],s){let r=Math.cos(e.h),o=-Math.sin(e.h),a=new Set,l=i.cruces.filter(c=>c.a===s||c.b===s).map(c=>{let h=c.x-e.x,u=c.z-e.z;return{k:c,ad:h*r+u*o,lat:Math.abs(-h*o+u*r),otro:c.a===s?c.b:c.a}}).filter(c=>c.ad>-6&&c.ad<260&&c.lat<22+n.w).sort((c,h)=>c.ad-h.ad);for(let c of l)if(!a.has(c.otro)&&(a.add(c.otro),i.letSel.push(c),i.letSel.length>=i.letreros.length))break}sd(i)}var to=new N;function sd(i){let t=i.pj,e=Math.tan(qe.fov*Math.PI/360),n=-1/0;qe.updateMatrixWorld(),i.letreros.forEach((s,r)=>{let o=i.letSel&&i.letSel[r];if(!o){s.visible=!1;return}let a=B_(o.otro);s.material.map!==a.t&&(s.material.map=a.t,s.material.needsUpdate=!0);let l=Math.hypot(o.k.x-t.x,o.k.z-t.z),c=.052+.03*Math.max(0,1-l/160);s.scale.set(c*a.ar,c,1),s.position.set(o.k.x,4.2,o.k.z),s.material.opacity=l>230?Math.max(0,(260-l)/30):1,s.visible=!0,s.renderOrder=30-r,to.copy(s.position).applyMatrix4(qe.matrixWorldInverse);let h=-to.z;if(h>.5){to.copy(s.position).project(qe);let u=c/e,f=n+.012-to.y;f>0&&(s.position.y+=f*e*h),n=Math.max(n,to.y+Math.max(0,f))+u}})}function ov(i){let t=Qt;In+=i,(!t.pj||nd!==It.pos.ts)&&(nd=It.pos.ts,ev());let e=t.pj,n=1-Math.exp(-i*2.2);e.cx+=(e.tx-e.cx)*n,e.cz+=(e.tz-e.cz)*n;let s=e.ht-e.h;s=Math.atan2(Math.sin(s),Math.cos(s)),e.h+=s*(1-Math.exp(-i*3)),sv(t,i);let r=e.off;e.off+=(e.offObj-e.off)*(1-Math.exp(-i*1.6));let o=(e.off-r)/Math.max(i,.001);e.x=e.cx+Math.sin(e.h)*e.off,e.z=e.cz+Math.cos(e.h)*e.off;let a=window.__velDbg!=null?window.__velDbg/3.6:It.rojo||It.llego?0:It.vel!=null?It.vel/3.6:0,l=Ut.v;Ut.v+=(a-Ut.v)*(1-Math.exp(-i*1.5)),Ut.a=(Ut.v-l)/Math.max(i,.001);{let _=e.ci>=0?qs(t.calles[e.ci],e.s):0;e.y=(e.y||0)+(_-(e.y||0))*(1-Math.exp(-i*2.5))}Ut.g.position.set(e.x,e.y,e.z),Ut.g.rotation.y=e.h-Math.max(-.3,Math.min(.3,o*.09));let c=Ut.a<-.4||Ut.v<.4;Ut.stop.material=c?so:Ys,Ut.glow.visible=c||It.noche,Ut.glow.scale.x=c?5.5:2.5,ss.position.y=3.3+Math.sin(In*3)*.2,ss.rotation.y+=.03;let h=t.rastro[t.rastro.length-1];(!h||Math.hypot(h[0]-e.x,h[1]-e.z)>.6)&&(t.rastro.push([e.x,e.z]),t.rastro.length>120&&t.rastro.shift()),iv(t);let u=nv(t,320),f=It.nivel==="pesado",d={};for(let _ of t.coches){if((_.ci<0||_.ci>=t.calles.length)&&bl(t,_,u,f),_.ci<0){_.g.visible=!1;continue}let M=t.calles[_.ci],v=M.cum[M.cum.length-1],E=Pe(M,_.s);if(Math.hypot(E.x-e.x,E.z-e.z)>380||_.s<=0&&_.dir<0||_.s>=v&&_.dir>0){bl(t,_,u,f);continue}(d[_.ci+":"+_.dir+":"+(_.carril||0)]||=[]).push(_)}for(let _ in d){let M=d[_],[v,E,b]=_.split(":").map(Number),x=v===e.ci&&E===e.dir&&(b===e.carril||b===e.carrilFis),y=M.map(R=>({o:R,s:R.s}));x&&y.push({o:null,s:e.s,v:Ut.v}),y.sort((R,A)=>(A.s-R.s)*E);for(let R=0;R<y.length;R++){let A=y[R];if(!A.o)continue;let I=A.o,U=I.vmax;if(R>0){let B=(y[R-1].s-I.s)*E-6;U=Math.min(U,Math.max(0,B*.9))}f&&Math.random()<.002&&(I.frena=1.3),I.frena>0&&(I.frena-=i,U=0),x&&R>0&&!y[R-1].o&&(e.s-I.s)*E<0;let H=I.v;if(I.v+=(U-I.v)*(1-Math.exp(-i*2)),I.a=(I.v-H)/Math.max(i,.001),I.s+=I.v*E*i,x){let B=(I.s-e.s)*E;B>-5&&B<6&&(I.s=e.s+E*(B>=0?6:-6))}id(t,I),I.g.visible=!0;let P=I.a<-.5||I.v<.5;I.stop.material=P?so:Ys,I.glow.visible=P||It.noche,I.glow.scale.x=P?5.5:2.5,I.haz.visible=It.noche}}for(let _ of t.motos){if((_.ci<0||_.ci>=t.calles.length)&&bl(t,_,u,!0),_.ci<0){_.g.visible=!1;continue}let M=t.calles[_.ci],v=M.cum[M.cum.length-1];_.fase+=i,_.s+=_.vmax*_.dir*i;let E=Pe(M,_.s);if(_.s<=0||_.s>=v||Math.hypot(E.x-e.x,E.z-e.z)>380){bl(t,_,u,!0);continue}{let b=M.nl||rs(M);_.carril=b-1,id(t,_,-(b>=2?M.w/(M.oneway?1:2)/b/2:oo(M,0)*.5)+Math.sin(_.fase*.9)*.6)}_.g.visible=!0,_.haz.visible=It.noche}{let _=t.taxi,M=t.rastro,v=0,E=M.length-1,b=e.x,x=e.z,y=e.h,R=7.5+Math.min(6,Ut.v*.5);for(;E>0&&v<R;){let A=M[E][0]-M[E-1][0],I=M[E][1]-M[E-1][1],U=Math.hypot(A,I);if(v+U>=R){let H=(R-v)/U;b=M[E][0]-A*H,x=M[E][1]-I*H,y=kn(A,I),v=R;break}v+=U,E--}v<R&&(b=e.x-Math.cos(e.h)*R,x=e.z+Math.sin(e.h)*R,y=e.h),_.g.position.set(b,e.y||0,x),_.g.rotation.y=y,_.g.visible=!0,_.stop.material=c?so:Ys,_.glow.visible=c||It.noche,_.glow.scale.x=c?5.5:2.5,_.haz.visible=It.noche}lv(i),av(i);let p=_=>Math.hypot(_.x-e.x,_.z-e.z)<520;{let _=[];for(let M of t.troles)jf(M,i,12,12,1,0,1.75,8.5,_);Il(t.trole,_.filter(p))}{let _=[];for(let M of t.mbs)jf(M,i,10,18,1,0,1.75,0,_);Il(t.mbus,_.filter(p))}if(dd(t.luces,In),rv(t,i),t.hitos&&t.hitos.sem&&V_(t.hitos.sem,In),t.radar){let _=It.foto&&Date.now()-It.foto<1500;t.radar.flash.visible=_&&Math.floor(In*10)%2===0,t.radar.led.material.color.setHex(Math.floor(In*2)%2?16722458:5570560)}let S=new N;qe.getWorldDirection(S);let g=-S.z,m=S.x;for(let _ of t.etiquetas)_.rotation.y=_.userData.base+(_.userData.dx*g+_.userData.dz*m<0?Math.PI:0)}function av(i){let t=Qt,e=t.tren,n=new ae,s=new $e,r=new N,o=new N(1,1,1),a=new N(0,1,0),l=0,c=16;for(let h of t.rieles){h.t+=i;let u=h.cum[h.cum.length-1],f=h.vagones*15.3,d=h.periodo*c;for(let p of[1,-1]){let S=p*1.75,g=(h.t+(p<0?h.periodo/2:0))*c%Math.max(d,u+f+60),m=Math.max(d,u+f+60);for(let _=0;_*d<m&&_<40;_++){let M=(g+_*d)%m-30;for(let v=0;v<h.vagones&&l<400;v++){let E=M-v*15.3;if(E<0||E>u)continue;p<0&&(E=u-E);let b=Pe(h,E),x=b.dx*p,y=b.dz*p;Math.hypot(b.x-t.pj.x,b.z-t.pj.z)>600||(r.set(b.x-y*S,h.y,b.z+x*S),s.setFromAxisAngle(a,kn(x,y)),e.setMatrixAt(l++,n.compose(r,s,o)))}}}}e.count=l,e.instanceMatrix.needsUpdate=!0}function lv(i){let t=Qt,e=t.pj;if(!t.cruce){let a=new Me,l=[];for(let m=-8;m<=8;m++)l.push(new Ie(3.2,.6).rotateX(-Math.PI/2).translate(0,0,m*1.1));let c=new gt(ve(l),new ge({color:15921906}));c.position.y=.07,a.add(c);let h=new Me,u=new Wt({color:3882821}),f=new gt(new Te(.12,.14,6,8),u);f.position.y=3,h.add(f);let d=new gt(new ne(.45,1.5,.55),new Wt({color:1908514}));d.position.set(-.1,5.2,0),h.add(d);let p=new gt(new Rn(.2,10,8),new ge({color:16722458}));p.position.set(-.36,5.68,0),h.add(p),[.47,.94].forEach(m=>{let _=new gt(new Rn(.17,10,8),new ge({color:2236962}));_.position.set(-.36,5.68-m,0),h.add(_)}),a.add(h);let S=[15029053,3120750,8084694,14722342],g=[0,1,2,3].map(m=>{let _=new Me,M=new gt(new Te(.22,.26,.95,8),new Wt({color:S[m]}));M.position.y=1.15,M.castShadow=!0;let v=new gt(new Te(.2,.18,.7,8),new Wt({color:2899543}));v.position.y=.35;let E=new gt(new Rn(.2,10,8),new Wt({color:13209186}));E.position.y=1.85;let b=new gt(new ne(.12,.5,.12),new ge({color:16765952}));return b.position.y=2.6,b.visible=!1,_.add(M,v,E,b),a.add(_),{g:_,su:b,z:0,dir:1,modo:"espera",t:m*.9,x:(m-1.5)*.7}});Ye.add(a),t.cruce={g:a,sem:h,peat:g,cm:c,activo:!1,mitad:8}}let n=t.cruce;if(!It.rojo||(e.y||0)>1){n.g.visible=!1,n.activo=!1;return}if(!n.activo){n.activo=!0;let a=e.ci>=0?t.calles[e.ci]:null,l=a?a.w:10;n.mitad=l/2+1.3;let c=Math.cos(e.h),h=-Math.sin(e.h);n.g.position.set(e.tx+c*7,0,e.tz+h*7),n.g.rotation.y=e.h,n.cm.scale.z=Math.max(.5,l/18),n.sem.position.set(-1.5,0,n.mitad-.3),n.peat.forEach((u,f)=>{u.z=(f%2?1:-1)*n.mitad,u.dir=-Math.sign(u.z),u.modo="espera",u.t=f*.9})}n.g.visible=!0,n.g.updateMatrixWorld();let s=new ae().copy(n.g.matrixWorld).invert(),r=new N,o=a=>t.motos.some(l=>(r.copy(l.g.position).applyMatrix4(s),r.x>-16&&r.x<1.5&&Math.abs(r.z-a)<1.6));for(let a of n.peat){if(a.modo==="espera")a.t-=i,a.t<=0&&!o(a.z+a.dir*2)&&(a.modo="cruza");else if(a.modo==="cruza"){let l=a.z+a.dir*1.4*i;o(l+a.dir*1.2)&&Math.abs(a.z)<n.mitad-.5?(a.modo="huye",a.dir=-a.dir):(a.z=l,Math.abs(a.z)>=n.mitad&&Math.sign(a.z)===Math.sign(a.dir)&&(a.modo="espera",a.t=2+Math.random()*3,a.dir=-Math.sign(a.z)))}else a.z+=a.dir*3.4*i,Math.abs(a.z)>=n.mitad&&(a.modo="espera",a.t=1.2+Math.random()*1.5,a.dir=-Math.sign(a.z));a.g.position.set(a.x,a.modo!=="espera"?Math.abs(Math.sin(In*(a.modo==="huye"?16:9)))*.08:0,a.z),a.su.visible=a.modo==="huye"}}function ao(i){let t=Qt.pj,[e,n,s,r,o=0]=I_[Pn],a=Math.cos(t.h),l=-Math.sin(t.h),c=-l,h=a,u=Pn==="atras"?0:3,f=t.y||0,d=new N(t.x+a*e+c*s,n+f,t.z+l*e+h*s),p=new N(t.x+a*r+c*u,o+f,t.z+l*r+h*u);if(window.__altoDbg&&(d.set(t.x,window.__altoDbg,t.z+1),p.set(t.x,0,t.z)),window.__camDbg){let S=window.__camDbg;d.set(...S[0]),p.set(...S[1]),es.copy(d),ns.copy(p)}if(!ao.ini)es.copy(d),ns.copy(p),ao.ini=!0;else{let S=1-Math.exp(-i*2.5);es.lerp(d,S),ns.lerp(p,S)}qe.position.copy(es),qe.lookAt(ns),Tn.position.set(t.x+25,45,t.z+30),Tn.target.position.set(t.x,0,t.z)}window.Vista3D={disponible(){try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}},montar(i){gn||L_(),El=i,gn.domElement.parentNode!==i&&i.prepend(gn.domElement),Vs&&Vs.disconnect(),Vs=new ResizeObserver(hh),Vs.observe(i),hh(),rh||(rh=!0,io=0,xh=requestAnimationFrame(ud))},desmontar(){rh=!1,cancelAnimationFrame(xh),Vs&&Vs.disconnect()},actualizar(i){let t=It.viaje,e=It.noche;if(Object.assign(It,i),It.viaje&&!t&&(It._a=Ut?Ut.x+mi:null),It.viaje||(It._a=null),!gn)return;let n=It.nivel+It.zona+It.pico+It.metrobus;n!==Mh?(Mh=n,ad(),Cl()):It.noche!==e&&Cl(),_d()},mapa(i){K_(i)},trafico(i){xd(i)},modo(){return Qt&&Qt.listo&&It.pos?"real":"muestra"},camara(){Pn=ch[(ch.indexOf(Pn)+1)%ch.length];try{localStorage.setItem("vista3dCam3",Pn)}catch{}return hh(),Kf[Pn]},nombreCamara(){return Kf[Pn]},get _dbg(){return{jugador:Ut,vehs:xn,E:It,desplaz:mi,REAL:Qt,cam:qe}}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

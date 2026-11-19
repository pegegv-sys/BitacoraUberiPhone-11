(()=>{var Du=0,Rc=1,Nu=2;var Yr=1,Pa=2,Vs=3,Oi=0,mn=1,Ae=2,ns=0,Ws=1,mi=2,Cc=3,Ic=4,Uu=5;var is=100,Fu=101,Ou=102,Bu=103,zu=104,Hu=200,Gu=201,ku=202,Vu=203,Pc=204,Lc=205,Wu=206,Xu=207,qu=208,Yu=209,Zu=210,Ju=211,$u=212,Ku=213,ju=214,Zo=0,Jo=1,$o=2,Ps=3,Ko=4,jo=5,Qo=6,ta=7,La=0,Qu=1,tf=2,Kn=0,Dc=1,Nc=2,Uc=3,Fc=4,Oc=5,Bc=6,zc=7;var Hc=300,ss=301,Xs=302,Da=303,Na=304,Qi=1e3,Yn=1001,ea=1002,Je=1003,ef=1004;var Zr=1005;var dn=1006,Ua=1007;var gi=1008;var yn=1009,Gc=1010,kc=1011,qs=1012,Fa=1013,Hn=1014,Dn=1015,Gn=1016,Oa=1017,Ba=1018,rs=1020,Vc=35902,Wc=35899,Xc=1021,qc=1022,kn=1023,hi=1026,xi=1027,za=1028,Ha=1029,Bi=1030,Ga=1031;var ka=1033,Jr=33776,$r=33777,Kr=33778,jr=33779,Va=35840,Wa=35841,Xa=35842,qa=35843,Ya=36196,Za=37492,Ja=37496,$a=37488,Ka=37489,Qr=37490,ja=37491,Qa=37808,tl=37809,el=37810,nl=37811,il=37812,sl=37813,rl=37814,ol=37815,al=37816,ll=37817,cl=37818,hl=37819,ul=37820,fl=37821,dl=36492,pl=36494,ml=36495,gl=36283,xl=36284,to=36285,_l=36286;var pr=2300,na=2301,qo=2302,xc=2303,_c=2400,vc=2401,yc=2402;var nf=3200;var vl=0,sf=1,_i="",Fe="srgb",mr="srgb-linear",gr="linear",ve="srgb";var Yo=7680;var rf=519,of=512,af=513,lf=514,Yc=515,cf=516,hf=517,Zc=518,Jc=519,$c=35044;var Kc="300 es",Pn=2e3,Ls=2001;function Xd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uf(){let i=xr("canvas");return i.style.display="block",i}var Qh={},Ds=null;function _r(...i){let t="THREE."+i.shift();Ds?Ds("log",t,...i):console.log(t,...i)}function ff(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function jt(...i){i=ff(i);let t="THREE."+i.shift();if(Ds)Ds("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Qt(...i){i=ff(i);let t="THREE."+i.shift();if(Ds)Ds("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ur(...i){let t=i.join(" ");t in Qh||(Qh[t]=!0,jt(...i))}function df(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var pf={[Zo]:Zo,[$o]:Qo,[Ko]:Ko,[Ps]:jo,[Jo]:Jo,[Qo]:$o,[ta]:ta,[jo]:Ps},Zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Xl=Math.PI/180,ia=180/Math.PI;function zi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function ce(i,t,e){return Math.max(t,Math.min(e,i))}function Yd(i,t){return(i%t+t)%t}function ql(i,t,e){return(1-e)*i+e*t}function mf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function gf(i,t){if(t.constructor===Float32Array)return i;let e=yl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function xf(i,t){if(t.constructor===Float32Array)return i;let e=yl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var mt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],p=r[o+2],S=r[o+3];if(u!==S||l!==f||c!==d||h!==p){let g=l*f+c*d+h*p+u*S;g<0&&(f=-f,d=-d,p=-p,S=-S,g=-g);let m=1-a;if(g<.9995){let y=Math.acos(g),v=Math.sin(y);m=Math.sin(m*y)/v,a=Math.sin(a*y)/v,l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+S*a}else{l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+S*a;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yl.copy(this).projectOnVector(t),this.sub(Yl)}reflect(t){return this.sub(Yl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yl=new U,tu=new tn,te=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],S=s[0],g=s[3],m=s[6],y=s[1],v=s[4],_=s[7],T=s[2],b=s[5],x=s[8];return r[0]=o*S+a*y+l*T,r[3]=o*g+a*v+l*b,r[6]=o*m+a*_+l*x,r[1]=c*S+h*y+u*T,r[4]=c*g+h*v+u*b,r[7]=c*m+h*_+u*x,r[2]=f*S+d*y+p*T,r[5]=f*g+d*v+p*b,r[8]=f*m+d*_+p*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=e*u+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/p;return t[0]=u*S,t[1]=(s*c-h*n)*S,t[2]=(a*n-s*o)*S,t[3]=f*S,t[4]=(h*e-s*l)*S,t[5]=(s*r-a*e)*S,t[6]=d*S,t[7]=(n*l-c*e)*S,t[8]=(o*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ur("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zl.makeScale(t,e)),this}rotate(t){return ur("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zl.makeRotation(-t)),this}translate(t,e){return ur("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Zl=new te,eu=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nu=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zd(){let i={enabled:!0,workingColorSpace:mr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ve&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ve&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_i?gr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[mr]:{primaries:t,whitePoint:n,transfer:gr,toXYZ:eu,fromXYZ:nu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:eu,fromXYZ:nu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),i}var pe=Zd();function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var fs,sa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{fs===void 0&&(fs=xr("canvas")),fs.width=t.width,fs.height=t.height;let s=fs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=fs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=xr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ci(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ci(e[n]/255)*255):e[n]=ci(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Jd=0,Ns=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=zi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Jl(s[o].image)):r.push(Jl(s[o]))}else r=Jl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Jl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}var $d=0,$l=new U,pn=class i extends Zn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Yn,s=Yn,r=dn,o=gi,a=kn,l=yn,c=i.DEFAULT_ANISOTROPY,h=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=zi(),this.name="",this.source=new Ns(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize($l).x}get height(){return this.source.getSize($l).y}get depth(){return this.source.getSize($l).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qi:t.x=t.x-Math.floor(t.x);break;case Yn:t.x=t.x<0?0:1;break;case ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qi:t.y=t.y-Math.floor(t.y);break;case Yn:t.y=t.y<0?0:1;break;case ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Hc;pn.DEFAULT_ANISOTROPY=1;var De=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],S=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-S)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+S)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,_=(d+1)/2,T=(m+1)/2,b=(h+f)/4,x=(u+S)/4,M=(p+g)/4;return v>_&&v>T?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=b/n,r=x/n):_>T?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=M/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=x/r,s=M/r),this.set(n,s,r,e),this}let y=Math.sqrt((g-p)*(g-p)+(u-S)*(u-S)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(u-S)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ra=class extends Zn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new pn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ns(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tn=class extends ra{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},vr=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var oa=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ae=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,p,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,p,S,g)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,p,S,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=S,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ds.setFromMatrixColumn(t,0).length(),r=1/ds.setFromMatrixColumn(t,1).length(),o=1/ds.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,p=a*h,S=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-S*c,e[9]=-a*l,e[2]=S-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,S=c*u;e[0]=f+S*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=S+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,S=c*u;e[0]=f-S*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=S-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,p=a*h,S=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+S,e[1]=l*u,e[5]=S*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,S=a*c;e[0]=l*h,e[4]=S-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-S*u}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,S=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+S,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=S*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kd,t,jd)}lookAt(t,e,n){let s=this.elements;return bn.subVectors(t,e),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),wi.crossVectors(n,bn),wi.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),wi.crossVectors(n,bn)),wi.normalize(),yo.crossVectors(bn,wi),s[0]=wi.x,s[4]=yo.x,s[8]=bn.x,s[1]=wi.y,s[5]=yo.y,s[9]=bn.y,s[2]=wi.z,s[6]=yo.z,s[10]=bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],S=n[6],g=n[10],m=n[14],y=n[3],v=n[7],_=n[11],T=n[15],b=s[0],x=s[4],M=s[8],C=s[12],A=s[1],I=s[5],L=s[9],B=s[13],P=s[2],z=s[6],q=s[10],W=s[14],ft=s[3],J=s[7],nt=s[11],ot=s[15];return r[0]=o*b+a*A+l*P+c*ft,r[4]=o*x+a*I+l*z+c*J,r[8]=o*M+a*L+l*q+c*nt,r[12]=o*C+a*B+l*W+c*ot,r[1]=h*b+u*A+f*P+d*ft,r[5]=h*x+u*I+f*z+d*J,r[9]=h*M+u*L+f*q+d*nt,r[13]=h*C+u*B+f*W+d*ot,r[2]=p*b+S*A+g*P+m*ft,r[6]=p*x+S*I+g*z+m*J,r[10]=p*M+S*L+g*q+m*nt,r[14]=p*C+S*B+g*W+m*ot,r[3]=y*b+v*A+_*P+T*ft,r[7]=y*x+v*I+_*z+T*J,r[11]=y*M+v*L+_*q+T*nt,r[15]=y*C+v*B+_*W+T*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],S=t[7],g=t[11],m=t[15],y=l*d-c*f,v=a*d-c*u,_=a*f-l*u,T=o*d-c*h,b=o*f-l*h,x=o*u-a*h;return e*(S*y-g*v+m*_)-n*(p*y-g*T+m*b)+s*(p*v-S*T+m*x)-r*(p*_-S*b+g*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],S=t[13],g=t[14],m=t[15],y=e*a-n*o,v=e*l-s*o,_=e*c-r*o,T=n*l-s*a,b=n*c-r*a,x=s*c-r*l,M=h*S-u*p,C=h*g-f*p,A=h*m-d*p,I=u*g-f*S,L=u*m-d*S,B=f*m-d*g,P=y*B-v*L+_*I+T*A-b*C+x*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/P;return t[0]=(a*B-l*L+c*I)*z,t[1]=(s*L-n*B-r*I)*z,t[2]=(S*x-g*b+m*T)*z,t[3]=(f*b-u*x-d*T)*z,t[4]=(l*A-o*B-c*C)*z,t[5]=(e*B-s*A+r*C)*z,t[6]=(g*_-p*x-m*v)*z,t[7]=(h*x-f*_+d*v)*z,t[8]=(o*L-a*A+c*M)*z,t[9]=(n*A-e*L-r*M)*z,t[10]=(p*b-S*_+m*y)*z,t[11]=(u*_-h*b-d*y)*z,t[12]=(a*C-o*I-l*M)*z,t[13]=(e*I-n*C+s*M)*z,t[14]=(S*v-p*T-g*y)*z,t[15]=(h*T-u*v+f*y)*z,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,S=o*h,g=o*u,m=a*u,y=l*c,v=l*h,_=l*u,T=n.x,b=n.y,x=n.z;return s[0]=(1-(S+m))*T,s[1]=(d+_)*T,s[2]=(p-v)*T,s[3]=0,s[4]=(d-_)*b,s[5]=(1-(f+m))*b,s[6]=(g+y)*b,s[7]=0,s[8]=(p+v)*x,s[9]=(g-y)*x,s[10]=(1-(f+S))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ds.set(s[0],s[1],s[2]).length(),a=ds.set(s[4],s[5],s[6]).length(),l=ds.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Fn.copy(this);let c=1/o,h=1/a,u=1/l;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=u,Fn.elements[9]*=u,Fn.elements[10]*=u,e.setFromRotationMatrix(Fn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Pn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),p,S;if(l)p=r/(o-r),S=o*r/(o-r);else if(a===Pn)p=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===Ls)p=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Pn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),p,S;if(l)p=1/(o-r),S=o/(o-r);else if(a===Pn)p=-2/(o-r),S=-(o+r)/(o-r);else if(a===Ls)p=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ds=new U,Fn=new ae,Kd=new U(0,0,0),jd=new U(1,1,1),wi=new U,yo=new U,bn=new U,iu=new ae,su=new tn,ui=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return iu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(iu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return su.setFromEuler(this),this.setFromQuaternion(su,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ui.DEFAULT_ORDER="XYZ";var yr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Qd=0,ru=new U,ps=new tn,ii=new ae,Mo=new U,er=new U,tp=new U,ep=new tn,ou=new U(1,0,0),au=new U(0,1,0),lu=new U(0,0,1),cu={type:"added"},np={type:"removed"},ms={type:"childadded",child:null},Kl={type:"childremoved",child:null},en=class i extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new ui,n=new tn,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new te}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(ou,t)}rotateY(t){return this.rotateOnAxis(au,t)}rotateZ(t){return this.rotateOnAxis(lu,t)}translateOnAxis(t,e){return ru.copy(t).applyQuaternion(this.quaternion),this.position.add(ru.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ou,t)}translateY(t){return this.translateOnAxis(au,t)}translateZ(t){return this.translateOnAxis(lu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Mo.copy(t):Mo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(er,Mo,this.up):ii.lookAt(Mo,er,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(ii),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cu),ms.child=t,this.dispatchEvent(ms),ms.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(np),Kl.child=t,this.dispatchEvent(Kl),Kl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cu),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,t,tp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,ep,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};en.DEFAULT_UP=new U(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Se=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},ip={type:"move"},Us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let S of t.hand.values()){let g=e.getJointPose(S,n),m=this._getHandJoint(c,S);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ip)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},_f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},So={h:0,s:0,l:0};function jl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var se=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=pe.workingColorSpace){if(t=Yd(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=jl(o,r,t+1/3),this.g=jl(o,r,t),this.b=jl(o,r,t-1/3)}return pe.colorSpaceToWorking(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){let n=_f[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return pe.workingToColorSpace(an.copy(this),t),Math.round(ce(an.r*255,0,255))*65536+Math.round(ce(an.g*255,0,255))*256+Math.round(ce(an.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(an.copy(this),e);let n=an.r,s=an.g,r=an.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=Fe){pe.workingToColorSpace(an.copy(this),t);let e=an.r,n=an.g,s=an.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(So);let n=ql(Ai.h,So.h,e),s=ql(Ai.s,So.s,e),r=ql(Ai.l,So.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new se;se.NAMES=_f;var Mr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new se(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Sr=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},On=new U,si=new U,Ql=new U,ri=new U,gs=new U,xs=new U,hu=new U,tc=new U,ec=new U,nc=new U,ic=new De,sc=new De,rc=new De,li=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),On.subVectors(t,e),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){On.subVectors(s,e),si.subVectors(n,e),Ql.subVectors(t,e);let o=On.dot(On),a=On.dot(si),l=On.dot(Ql),c=si.dot(si),h=si.dot(Ql),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ic.setScalar(0),sc.setScalar(0),rc.setScalar(0),ic.fromBufferAttribute(t,e),sc.fromBufferAttribute(t,n),rc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ic,r.x),o.addScaledVector(sc,r.y),o.addScaledVector(rc,r.z),o}static isFrontFacing(t,e,n,s){return On.subVectors(n,e),si.subVectors(t,e),On.cross(si).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),si.subVectors(this.a,this.b),On.cross(si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;gs.subVectors(s,n),xs.subVectors(r,n),tc.subVectors(t,n);let l=gs.dot(tc),c=xs.dot(tc);if(l<=0&&c<=0)return e.copy(n);ec.subVectors(t,s);let h=gs.dot(ec),u=xs.dot(ec);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(gs,o);nc.subVectors(t,r);let d=gs.dot(nc),p=xs.dot(nc);if(p>=0&&d<=p)return e.copy(r);let S=d*c-l*p;if(S<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(xs,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return hu.subVectors(r,s),a=(u-h)/(u-h+(d-p)),e.copy(s).addScaledVector(hu,a);let m=1/(g+S+f);return o=S*m,a=f*m,e.copy(n).addScaledVector(gs,o).addScaledVector(xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Jn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Bn):Bn.fromBufferAttribute(r,o),Bn.applyMatrix4(t.matrixWorld),this.expandByPoint(Bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bo.copy(n.boundingBox)),bo.applyMatrix4(t.matrixWorld),this.union(bo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bn),Bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nr),Eo.subVectors(this.max,nr),_s.subVectors(t.a,nr),vs.subVectors(t.b,nr),ys.subVectors(t.c,nr),Ri.subVectors(vs,_s),Ci.subVectors(ys,vs),Zi.subVectors(_s,ys);let e=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Zi.z,Zi.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Zi.z,0,-Zi.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Zi.y,Zi.x,0];return!oc(e,_s,vs,ys,Eo)||(e=[1,0,0,0,1,0,0,0,1],!oc(e,_s,vs,ys,Eo))?!1:(To.crossVectors(Ri,Ci),e=[To.x,To.y,To.z],oc(e,_s,vs,ys,Eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},oi=[new U,new U,new U,new U,new U,new U,new U,new U],Bn=new U,bo=new Jn,_s=new U,vs=new U,ys=new U,Ri=new U,Ci=new U,Zi=new U,nr=new U,Eo=new U,To=new U,Ji=new U;function oc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ji.fromArray(i,r);let a=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),l=t.dot(Ji),c=e.dot(Ji),h=n.dot(Ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var He=new U,wo=new mt,sp=0,Qe=class extends Zn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$c,this.updateRanges=[],this.gpuType=Dn,this.version=0,this._normalizationScale=t!==void 0?yl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wo.fromBufferAttribute(this,e),wo.applyMatrix3(t),this.setXY(e,wo.x,wo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):gf(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):xf(t,this.array)}};var br=class extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Er=class extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var me=class extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}},rp=new Jn,ir=new U,ac=new U,Pi=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):rp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ir.subVectors(t,this.center);let e=ir.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ir,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ac.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ir.copy(t.center).add(ac)),this.expandByPoint(ir.copy(t.center).sub(ac))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},op=0,In=new ae,lc=new en,Ms=new U,En=new Jn,sr=new Jn,Ze=new U,Be=class i extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xd(t)?Er:br)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return In.makeRotationFromQuaternion(t),this.applyMatrix4(In),this}rotateX(t){return In.makeRotationX(t),this.applyMatrix4(In),this}rotateY(t){return In.makeRotationY(t),this.applyMatrix4(In),this}rotateZ(t){return In.makeRotationZ(t),this.applyMatrix4(In),this}translate(t,e,n){return In.makeTranslation(t,e,n),this.applyMatrix4(In),this}scale(t,e,n){return In.makeScale(t,e,n),this.applyMatrix4(In),this}lookAt(t){return lc.lookAt(t),lc.updateMatrix(),this.applyMatrix4(lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new me(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(En.min,sr.min),En.expandByPoint(Ze),Ze.addVectors(En.max,sr.max),En.expandByPoint(Ze)):(En.expandByPoint(sr.min),En.expandByPoint(sr.max))}En.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ze.fromBufferAttribute(a,c),l&&(Ms.fromBufferAttribute(t,c),Ze.add(Ms)),s=Math.max(s,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Qe(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let C=0;C<n.count;C++)a[C]=new U,l[C]=new U;let h=new U,u=new U,f=new U,d=new mt,p=new mt,S=new mt,g=new U,m=new U;function y(C,A,I){c[C]=c[A]=c[I]=1,h.fromBufferAttribute(n,C),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,I),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,A),S.fromBufferAttribute(r,I),u.sub(h),f.sub(h),p.sub(d),S.sub(d);let L=1/(p.x*S.y-S.x*p.y);isFinite(L)&&(g.copy(u).multiplyScalar(S.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-S.x).multiplyScalar(L),a[C].add(g),a[A].add(g),a[I].add(g),l[C].add(m),l[A].add(m),l[I].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let C=0,A=v.length;C<A;++C){let I=v[C],L=I.start,B=I.count;for(let P=L,z=L+B;P<z;P+=3)y(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let _=new U,T=new U,b=new U,x=new U;function M(C){b.fromBufferAttribute(s,C),x.copy(b);let A=a[C];_.copy(A),_.sub(b.multiplyScalar(b.dot(A))).normalize(),T.crossVectors(x,A);let L=T.dot(l[C])<0?-1:1;o.setXYZW(C,_.x,_.y,_.z,L)}for(let C=0,A=n.count;C<A;++C)c[C]&&M(C);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),S=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,S),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let S=0,g=l.length;S<g;S++){a.isInterleavedBufferAttribute?d=l[S]*a.data.stride+a.offset:d=l[S]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new Qe(f,h,u)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=$c,this.updateRanges=[],this.version=0,this.uuid=zi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=uu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=uu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function uu(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=zi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var un=new U,Fs=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?yl(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){_r("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){_r("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):gf(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):xf(t,this.data.array)}},cc=new U,ap=new U,lp=new te,zn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=cc.subVectors(n,e).cross(ap.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(cc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||lp.getNormalMatrix(t),s=this.coplanarPoint(cc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},cp=0,fi=class extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=Ws,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pc,this.blendDst=Lc,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yo,this.stencilZFail=Yo,this.stencilZPass=Yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new se().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new zn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new mt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new mt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},di=class extends fi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ss,rr=new U,bs=new U,Es=new U,Ts=new mt,or=new mt,vf=new ae,Ao=new U,ar=new U,Ro=new U,fu=new mt,hc=new mt,du=new mt,Li=class extends en{constructor(t=new di){if(super(),this.isSprite=!0,this.type="Sprite",Ss===void 0){Ss=new Be;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Tr(e,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new Fs(n,3,0,!1)),Ss.setAttribute("uv",new Fs(n,2,3,!1))}this.geometry=Ss,this.material=t,this.center=new mt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bs.setFromMatrixScale(this.matrixWorld),vf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Es.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bs.multiplyScalar(-Es.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Co(Ao.set(-.5,-.5,0),Es,o,bs,s,r),Co(ar.set(.5,-.5,0),Es,o,bs,s,r),Co(Ro.set(.5,.5,0),Es,o,bs,s,r),fu.set(0,0),hc.set(1,0),du.set(1,1);let a=t.ray.intersectTriangle(Ao,ar,Ro,!1,rr);if(a===null&&(Co(ar.set(-.5,.5,0),Es,o,bs,s,r),hc.set(0,1),a=t.ray.intersectTriangle(Ao,Ro,ar,!1,rr),a===null))return;let l=t.ray.origin.distanceTo(rr);l<t.near||l>t.far||e.push({distance:l,point:rr.clone(),uv:li.getInterpolation(rr,Ao,ar,Ro,fu,hc,du,new mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Co(i,t,e,n,s,r){Ts.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(or.x=r*Ts.x-s*Ts.y,or.y=s*Ts.x+r*Ts.y):or.copy(Ts),i.copy(t),i.x+=or.x,i.y+=or.y,i.applyMatrix4(vf)}var ai=new U,uc=new U,Io=new U,Po=new U,aa=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){uc.copy(t).add(e).multiplyScalar(.5),Io.copy(e).sub(t).normalize(),Po.copy(this.origin).sub(uc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Io),a=Po.dot(this.direction),l=-Po.dot(Io),c=Po.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let S=1/h;u*=S,f*=S,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(uc).addScaledVector(Io,f),d}intersectSphere(t,e){if(t.radius<0)return null;ai.subVectors(t.center,this.origin);let n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,S=e.y-o.y,g=e.z-o.z,m=n.x-o.x,y=n.y-o.y,v=n.z-o.z,_=Math.abs(l),T=Math.abs(c),b=Math.abs(h),x,M,C,A,I,L,B,P,z,q,W,ft;if(_>=T&&_>=b?(C=l,L=u,z=p,ft=m,l>=0?(x=c,M=h,A=f,I=d,B=S,P=g,q=y,W=v):(x=h,M=c,A=d,I=f,B=g,P=S,q=v,W=y)):T>=b?(C=c,L=f,z=S,ft=y,c>=0?(x=h,M=l,A=d,I=u,B=g,P=p,q=v,W=m):(x=l,M=h,A=u,I=d,B=p,P=g,q=m,W=v)):(C=h,L=d,z=g,ft=v,h>=0?(x=l,M=c,A=u,I=f,B=p,P=S,q=m,W=y):(x=c,M=l,A=f,I=u,B=S,P=p,q=y,W=m)),C===0)return null;let J=x/C,nt=M/C,ot=1/C,Ft=A-J*L,qt=I-nt*L,j=B-J*z,Ct=P-nt*z,Ot=q-J*ft,H=W-nt*ft,X=Ot*Ct-H*j,Z=Ft*H-qt*Ot,It=j*qt-Ct*Ft;if(s){if(X<0||Z<0||It<0)return null}else if((X<0||Z<0||It<0)&&(X>0||Z>0||It>0))return null;let $=X+Z+It;if($===0)return null;let at=ot*(X*L+Z*z+It*ft);return($>0?at<0:at>0)?null:this.at(at/$,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class extends fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=La,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},pu=new ae,$i=new aa,Lo=new Pi,mu=new U,Do=new U,No=new U,Uo=new U,fc=new U,Fo=new U,gu=new U,Oo=new U,xt=class extends en{constructor(t=new Be,e=new xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Fo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(fc.fromBufferAttribute(u,t),o?Fo.addScaledVector(fc,h):Fo.addScaledVector(fc.sub(e),h))}e.add(Fo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(r),$i.copy(t.ray).recast(t.near),!(Lo.containsPoint($i.origin)===!1&&($i.intersectSphere(Lo,mu)===null||$i.origin.distanceToSquared(mu)>(t.far-t.near)**2))&&(pu.copy(r).invert(),$i.copy(t.ray).applyMatrix4(pu),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$i)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,S=f.length;p<S;p++){let g=f[p],m=o[g.materialIndex],y=Math.max(g.start,d.start),v=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let _=y,T=v;_<T;_+=3){let b=a.getX(_),x=a.getX(_+1),M=a.getX(_+2);s=Bo(this,m,t,n,c,h,u,b,x,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),S=Math.min(a.count,d.start+d.count);for(let g=p,m=S;g<m;g+=3){let y=a.getX(g),v=a.getX(g+1),_=a.getX(g+2);s=Bo(this,o,t,n,c,h,u,y,v,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,S=f.length;p<S;p++){let g=f[p],m=o[g.materialIndex],y=Math.max(g.start,d.start),v=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let _=y,T=v;_<T;_+=3){let b=_,x=_+1,M=_+2;s=Bo(this,m,t,n,c,h,u,b,x,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let g=p,m=S;g<m;g+=3){let y=g,v=g+1,_=g+2;s=Bo(this,o,t,n,c,h,u,y,v,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function hp(i,t,e,n,s,r,o,a){let l;if(t.side===mn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Oi,a),l===null)return null;Oo.copy(a),Oo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Oo);return c<e.near||c>e.far?null:{distance:c,point:Oo.clone(),object:i}}function Bo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Do),i.getVertexPosition(l,No),i.getVertexPosition(c,Uo);let h=hp(i,t,e,n,Do,No,Uo,gu);if(h){let u=new U;li.getBarycoord(gu,Do,No,Uo,u),s&&(h.uv=li.getInterpolatedAttribute(s,a,l,c,u,new mt)),r&&(h.uv1=li.getInterpolatedAttribute(r,a,l,c,u,new mt)),o&&(h.normal=li.getInterpolatedAttribute(o,a,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new U,materialIndex:0};li.getNormal(Do,No,Uo,f.normal),h.face=f,h.barycoord=u}return h}var wr=class extends pn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Je,h=Je,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Os=class extends Qe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ws=new ae,xu=new ae,zo=[],_u=new Jn,up=new ae,lr=new xt,cr=new Pi,Ge=class extends xt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Os(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,up)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),_u.copy(t.boundingBox).applyMatrix4(ws),this.boundingBox.union(_u)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),cr.copy(t.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(n),t.ray.intersectsSphere(cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ws),xu.multiplyMatrices(n,ws),lr.matrixWorld=xu,lr.raycast(t,zo);for(let o=0,a=zo.length;o<a;o++){let l=zo[o];l.instanceId=r,l.object=this,e.push(l)}zo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Os(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new wr(new Float32Array(s*this.count),s,this.count,za,Dn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ki=new Pi,fp=new mt(.5,.5),Ho=new U,Di=class{constructor(t=new zn,e=new zn,n=new zn,s=new zn,r=new zn,o=new zn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],S=r[9],g=r[10],m=r[11],y=r[12],v=r[13],_=r[14],T=r[15];if(s[0].setComponents(c-o,d-h,m-p,T-y).normalize(),s[1].setComponents(c+o,d+h,m+p,T+y).normalize(),s[2].setComponents(c+a,d+u,m+S,T+v).normalize(),s[3].setComponents(c-a,d-u,m-S,T-v).normalize(),n)s[4].setComponents(l,f,g,_).normalize(),s[5].setComponents(c-l,d-f,m-g,T-_).normalize();else if(s[4].setComponents(c-l,d-f,m-g,T-_).normalize(),e===Pn)s[5].setComponents(c+l,d+f,m+g,T+_).normalize();else if(e===Ls)s[5].setComponents(l,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(t){Ki.center.set(0,0,0);let e=fp.distanceTo(t.center);return Ki.radius=.7071067811865476+e,Ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ho.x=s.normal.x>0?t.max.x:t.min.x,Ho.y=s.normal.y>0?t.max.y:t.min.y,Ho.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},vu=new ae,la=class i{constructor(){this.coordinateSystem=Pn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];vu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Di),n[s].setFromProjectionMatrix(vu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Di),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Ar=class extends pn{constructor(t=[],e=ss,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},wn=class extends pn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var pi=class extends pn{constructor(t,e,n=Hn,s,r,o,a=Je,l=Je,c,h=hi,u=1){if(h!==hi&&h!==xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ns(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Rr=class extends pi{constructor(t,e=Hn,n=ss,s,r,o=Je,a=Je,l,c=hi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Cr=class extends pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ne=class i extends Be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2));function p(S,g,m,y,v,_,T,b,x,M,C){let A=_/x,I=T/M,L=_/2,B=T/2,P=b/2,z=x+1,q=M+1,W=0,ft=0,J=new U;for(let nt=0;nt<q;nt++){let ot=nt*I-B;for(let Ft=0;Ft<z;Ft++){let qt=Ft*A-L;J[S]=qt*y,J[g]=ot*v,J[m]=P,c.push(J.x,J.y,J.z),J[S]=0,J[g]=0,J[m]=b>0?1:-1,h.push(J.x,J.y,J.z),u.push(Ft/x),u.push(1-nt/M),W+=1}}for(let nt=0;nt<M;nt++)for(let ot=0;ot<x;ot++){let Ft=f+ot+z*nt,qt=f+ot+z*(nt+1),j=f+(ot+1)+z*(nt+1),Ct=f+(ot+1)+z*nt;l.push(Ft,qt,Ct),l.push(qt,j,Ct),ft+=6}a.addGroup(d,ft,C),d+=ft,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ir=class i extends Be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new U,h=new mt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(a,3)),this.setAttribute("uv",new me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},we=class i extends Be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,S=[],g=n/2,m=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(f,3)),this.setAttribute("uv",new me(d,2));function y(){let _=new U,T=new U,b=0,x=(e-t)/n;for(let M=0;M<=r;M++){let C=[],A=M/r,I=A*(e-t)+t;for(let L=0;L<=s;L++){let B=L/s,P=B*l+a,z=Math.sin(P),q=Math.cos(P);T.x=I*z,T.y=-A*n+g,T.z=I*q,u.push(T.x,T.y,T.z),_.set(z,x,q).normalize(),f.push(_.x,_.y,_.z),d.push(B,1-A),C.push(p++)}S.push(C)}for(let M=0;M<s;M++)for(let C=0;C<r;C++){let A=S[C][M],I=S[C+1][M],L=S[C+1][M+1],B=S[C][M+1];(t>0||C!==0)&&(h.push(A,I,B),b+=3),(e>0||C!==r-1)&&(h.push(I,L,B),b+=3)}c.addGroup(m,b,0),m+=b}function v(_){let T=p,b=new mt,x=new U,M=0,C=_===!0?t:e,A=_===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,g*A,0),f.push(0,A,0),d.push(.5,.5),p++;let I=p;for(let L=0;L<=s;L++){let P=L/s*l+a,z=Math.cos(P),q=Math.sin(P);x.x=C*q,x.y=g*A,x.z=C*z,u.push(x.x,x.y,x.z),f.push(0,A,0),b.x=z*.5+.5,b.y=q*.5*A+.5,d.push(b.x,b.y),p++}for(let L=0;L<s;L++){let B=T+L,P=I+L;_===!0?h.push(P,P+1,B):h.push(P+1,P,B),M+=3}c.addGroup(m,M,_===!0?1:2),m+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Pr=class i extends we{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ca=class i extends Be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new me(r,3)),this.setAttribute("normal",new me(r.slice(),3)),this.setAttribute("uv",new me(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let v=new U,_=new U,T=new U;for(let b=0;b<e.length;b+=3)d(e[b+0],v),d(e[b+1],_),d(e[b+2],T),l(v,_,T,y)}function l(y,v,_,T){let b=T+1,x=[];for(let M=0;M<=b;M++){x[M]=[];let C=y.clone().lerp(_,M/b),A=v.clone().lerp(_,M/b),I=b-M;for(let L=0;L<=I;L++)L===0&&M===b?x[M][L]=C:x[M][L]=C.clone().lerp(A,L/I)}for(let M=0;M<b;M++)for(let C=0;C<2*(b-M)-1;C++){let A=Math.floor(C/2);C%2===0?(f(x[M][A+1]),f(x[M+1][A]),f(x[M][A])):(f(x[M][A+1]),f(x[M+1][A+1]),f(x[M+1][A]))}}function c(y){let v=new U;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(y),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){let y=new U;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let _=g(y)/2/Math.PI+.5,T=m(y)/Math.PI+.5;o.push(_,1-T)}p(),u()}function u(){for(let y=0;y<o.length;y+=6){let v=o[y+0],_=o[y+2],T=o[y+4],b=Math.max(v,_,T),x=Math.min(v,_,T);b>.9&&x<.1&&(v<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),T<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,v){let _=y*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function p(){let y=new U,v=new U,_=new U,T=new U,b=new mt,x=new mt,M=new mt;for(let C=0,A=0;C<r.length;C+=9,A+=6){y.set(r[C+0],r[C+1],r[C+2]),v.set(r[C+3],r[C+4],r[C+5]),_.set(r[C+6],r[C+7],r[C+8]),b.set(o[A+0],o[A+1]),x.set(o[A+2],o[A+3]),M.set(o[A+4],o[A+5]),T.copy(y).add(v).add(_).divideScalar(3);let I=g(T);S(b,A+0,y,I),S(x,A+2,v,I),S(M,A+4,_,I)}}function S(y,v,_,T){T<0&&y.x===1&&(o[v]=y.x-1),_.x===0&&_.z===0&&(o[v]=T/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var An=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new mt:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,s=[],r=[],o=[],a=new U,l=new ae;for(let d=0;d<=t;d++){let p=d/t;s[d]=this.getTangentAt(p,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ce(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ce(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Bs=class extends An{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new mt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ha=class extends Bs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function jc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var yu=new U,Mu=new U,dc=new jc,pc=new jc,mc=new jc,ua=class extends An{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Mu.subVectors(s[0],s[1]).add(s[0]),c=Mu);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(yu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=yu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),S=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);S<1e-4&&(S=1),p<1e-4&&(p=S),g<1e-4&&(g=S),dc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,S,g),pc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,S,g),mc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,S,g)}else this.curveType==="catmullrom"&&(dc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),pc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),mc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(dc.calc(l),pc.calc(l),mc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Su(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function dp(i,t){let e=1-i;return e*e*t}function pp(i,t){return 2*(1-i)*i*t}function mp(i,t){return i*i*t}function fr(i,t,e,n){return dp(i,t)+pp(i,e)+mp(i,n)}function gp(i,t){let e=1-i;return e*e*e*t}function xp(i,t){let e=1-i;return 3*e*e*i*t}function _p(i,t){return 3*(1-i)*i*i*t}function vp(i,t){return i*i*i*t}function dr(i,t,e,n,s){return gp(i,t)+xp(i,e)+_p(i,n)+vp(i,s)}var Lr=class extends An{constructor(t=new mt,e=new mt,n=new mt,s=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new mt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(dr(t,s.x,r.x,o.x,a.x),dr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fa=class extends An{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(dr(t,s.x,r.x,o.x,a.x),dr(t,s.y,r.y,o.y,a.y),dr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Dr=class extends An{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},da=class extends An{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nr=class extends An{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(fr(t,s.x,r.x,o.x),fr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pa=class extends An{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(fr(t,s.x,r.x,o.x),fr(t,s.y,r.y,o.y),fr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ur=class extends An{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Su(a,l.x,c.x,h.x,u.x),Su(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new mt().fromArray(s))}return this}},Mc=Object.freeze({__proto__:null,ArcCurve:ha,CatmullRomCurve3:ua,CubicBezierCurve:Lr,CubicBezierCurve3:fa,EllipseCurve:Bs,LineCurve:Dr,LineCurve3:da,QuadraticBezierCurve:Nr,QuadraticBezierCurve3:pa,SplineCurve:Ur}),ma=class extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Mc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Fr=class extends ma{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Dr(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Nr(this.currentPoint.clone(),new mt(t,e),new mt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Lr(this.currentPoint.clone(),new mt(t,e),new mt(n,s),new mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ur(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Bs(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ts=class extends Fr{constructor(t){super(t),this.uuid=zi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Fr().fromJSON(s))}return this}};function yp(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=yf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Tp(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<s;f+=e){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Or(r,o,e,a,l,c,0),o}function yf(i,t,e,n,s){let r;if(s===Fp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=bu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=bu(o/n|0,i[o],i[o+1],r);return r&&zs(r,r.next)&&(zr(r),r=r.next),r}function es(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(zs(e,e.next)||Oe(e.prev,e,e.next)===0)){if(zr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Or(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Ip(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Sp(i,n,s,r):Mp(i)){t.push(l.i,i.i,c.i),zr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=bp(es(i),t),Or(i,t,e,n,s,r,2)):o===2&&Ep(i,t,e,n,s,r):Or(es(i),t,e,n,s,r,1);break}}}function Mp(i){let t=i.prev,e=i,n=i.next;if(Oe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&hr(s,a,r,l,o,c,p.x,p.y)&&Oe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Sp(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Oe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),S=Math.max(a,l,c),g=Math.max(h,u,f),m=Sc(d,p,t,e,n),y=Sc(S,g,t,e,n),v=i.prevZ,_=i.nextZ;for(;v&&v.z>=m&&_&&_.z<=y;){if(v.x>=d&&v.x<=S&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&hr(a,h,l,u,c,f,v.x,v.y)&&Oe(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=d&&_.x<=S&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&hr(a,h,l,u,c,f,_.x,_.y)&&Oe(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=S&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&hr(a,h,l,u,c,f,v.x,v.y)&&Oe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=y;){if(_.x>=d&&_.x<=S&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&hr(a,h,l,u,c,f,_.x,_.y)&&Oe(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function bp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!zs(n,s)&&Sf(n,e,e.next,s)&&Br(n,s)&&Br(s,n)&&(t.push(n.i,e.i,s.i),zr(e),zr(e.next),e=i=s),e=e.next}while(e!==i);return es(e)}function Ep(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Dp(o,a)){let l=bf(o,a);o=es(o,o.next),l=es(l,l.next),Or(o,t,e,n,s,r,0),Or(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Tp(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=yf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Lp(c))}s.sort(wp);for(let r=0;r<s.length;r++)e=Ap(s[r],e);return e}function wp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Ap(i,t){let e=Rp(i,t);if(!e)return t;let n=bf(e,i);return es(n,n.next),es(e,e.next)}function Rp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(zs(i,e))return e;do{if(zs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Mf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);Br(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Cp(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Cp(i,t){return Oe(i.prev,i,t.prev)<0&&Oe(t.next,i,i.next)<0}function Ip(i,t,e,n){let s=i;do s.z===0&&(s.z=Sc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Pp(s)}function Pp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Sc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Lp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Mf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function hr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Mf(i,t,e,n,s,r,o,a)}function Dp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Np(i,t)&&(Br(i,t)&&Br(t,i)&&Up(i,t)&&(Oe(i.prev,i,t.prev)||Oe(i,t.prev,t))||zs(i,t)&&Oe(i.prev,i,i.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function zs(i,t){return i.x===t.x&&i.y===t.y}function Sf(i,t,e,n){let s=ko(Oe(i,t,e)),r=ko(Oe(i,t,n)),o=ko(Oe(e,n,i)),a=ko(Oe(e,n,t));return!!(s!==r&&o!==a||s===0&&Go(i,e,t)||r===0&&Go(i,n,t)||o===0&&Go(e,i,n)||a===0&&Go(e,t,n))}function Go(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ko(i){return i>0?1:i<0?-1:0}function Np(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Sf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Br(i,t){return Oe(i.prev,i,i.next)<0?Oe(i,t,i.next)>=0&&Oe(i,i.prev,t)>=0:Oe(i,t,i.prev)<0||Oe(i,i.next,t)<0}function Up(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function bf(i,t){let e=bc(i.i,i.x,i.y),n=bc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function bu(i,t,e,n){let s=bc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function zr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function bc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Fp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ec=class{static triangulate(t,e,n=2){return yp(t,e,n)}},ji=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Eu(t),Tu(n,t);let o=t.length;e.forEach(Eu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Tu(n,e[l]);let a=Ec.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Eu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Tu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Hs=class i extends Be{constructor(t=new ts([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new me(s,3)),this.setAttribute("uv",new me(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Op,v,_=!1,T,b,x,M;if(m){v=m.getSpacedPoints(h),_=!0,f=!1;let O=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(h,O),b=new U,x=new U,M=new U}f||(g=0,d=0,p=0,S=0);let C=a.extractPoints(c),A=C.shape,I=C.holes;if(!ji.isClockWise(A)){A=A.reverse();for(let O=0,lt=I.length;O<lt;O++){let st=I[O];ji.isClockWise(st)&&(I[O]=st.reverse())}}function B(O){let st=10000000000000001e-36,dt=O[0];for(let ut=1;ut<=O.length;ut++){let rt=ut%O.length,ht=O[rt],Mt=ht.x-dt.x,Pt=ht.y-dt.y,Yt=Mt*Mt+Pt*Pt,D=Math.max(Math.abs(ht.x),Math.abs(ht.y),Math.abs(dt.x),Math.abs(dt.y)),ie=st*D*D;if(Yt<=ie){O.splice(rt,1),ut--;continue}dt=ht}}B(A),I.forEach(B);let P=I.length,z=A;for(let O=0;O<P;O++){let lt=I[O];A=A.concat(lt)}function q(O,lt,st){return lt||Qt("ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(lt,st)}let W=A.length;function ft(O,lt,st){let dt,ut,rt,ht=O.x-lt.x,Mt=O.y-lt.y,Pt=st.x-O.x,Yt=st.y-O.y,D=ht*ht+Mt*Mt,ie=ht*Yt-Mt*Pt;if(Math.abs(ie)>Number.EPSILON){let kt=Math.sqrt(D),ue=Math.sqrt(Pt*Pt+Yt*Yt),vt=lt.x-Mt/kt,Ce=lt.y+ht/kt,Bt=st.x-Yt/ue,Vt=st.y+Pt/ue,R=((Bt-vt)*Yt-(Vt-Ce)*Pt)/(ht*Yt-Mt*Pt);dt=vt+ht*R-O.x,ut=Ce+Mt*R-O.y;let E=dt*dt+ut*ut;if(E<=2)return new mt(dt,ut);rt=Math.sqrt(E/2)}else{let kt=!1;ht>Number.EPSILON?Pt>Number.EPSILON&&(kt=!0):ht<-Number.EPSILON?Pt<-Number.EPSILON&&(kt=!0):Math.sign(Mt)===Math.sign(Yt)&&(kt=!0),kt?(dt=-Mt,ut=ht,rt=Math.sqrt(D)):(dt=ht,ut=Mt,rt=Math.sqrt(D/2))}return new mt(dt/rt,ut/rt)}let J=[];for(let O=0,lt=z.length,st=lt-1,dt=O+1;O<lt;O++,st++,dt++)st===lt&&(st=0),dt===lt&&(dt=0),J[O]=ft(z[O],z[st],z[dt]);let nt=[],ot,Ft=J.concat();for(let O=0,lt=P;O<lt;O++){let st=I[O];ot=[];for(let dt=0,ut=st.length,rt=ut-1,ht=dt+1;dt<ut;dt++,rt++,ht++)rt===ut&&(rt=0),ht===ut&&(ht=0),ot[dt]=ft(st[dt],st[rt],st[ht]);nt.push(ot),Ft=Ft.concat(ot)}let qt;if(g===0)qt=ji.triangulateShape(z,I);else{let O=[],lt=[];for(let st=0;st<g;st++){let dt=st/g,ut=d*Math.cos(dt*Math.PI/2),rt=p*Math.sin(dt*Math.PI/2)+S;for(let ht=0,Mt=z.length;ht<Mt;ht++){let Pt=q(z[ht],J[ht],rt);Z(Pt.x,Pt.y,-ut),dt===0&&O.push(Pt)}for(let ht=0,Mt=P;ht<Mt;ht++){let Pt=I[ht];ot=nt[ht];let Yt=[];for(let D=0,ie=Pt.length;D<ie;D++){let kt=q(Pt[D],ot[D],rt);Z(kt.x,kt.y,-ut),dt===0&&Yt.push(kt)}dt===0&&lt.push(Yt)}}qt=ji.triangulateShape(O,lt)}let j=qt.length,Ct=p+S;for(let O=0;O<W;O++){let lt=f?q(A[O],Ft[O],Ct):A[O];_?(x.copy(T.normals[0]).multiplyScalar(lt.x),b.copy(T.binormals[0]).multiplyScalar(lt.y),M.copy(v[0]).add(x).add(b),Z(M.x,M.y,M.z)):Z(lt.x,lt.y,0)}for(let O=1;O<=h;O++)for(let lt=0;lt<W;lt++){let st=f?q(A[lt],Ft[lt],Ct):A[lt];_?(x.copy(T.normals[O]).multiplyScalar(st.x),b.copy(T.binormals[O]).multiplyScalar(st.y),M.copy(v[O]).add(x).add(b),Z(M.x,M.y,M.z)):Z(st.x,st.y,u/h*O)}for(let O=g-1;O>=0;O--){let lt=O/g,st=d*Math.cos(lt*Math.PI/2),dt=p*Math.sin(lt*Math.PI/2)+S;for(let ut=0,rt=z.length;ut<rt;ut++){let ht=q(z[ut],J[ut],dt);Z(ht.x,ht.y,u+st)}for(let ut=0,rt=I.length;ut<rt;ut++){let ht=I[ut];ot=nt[ut];for(let Mt=0,Pt=ht.length;Mt<Pt;Mt++){let Yt=q(ht[Mt],ot[Mt],dt);_?Z(Yt.x,Yt.y+v[h-1].y,v[h-1].x+st):Z(Yt.x,Yt.y,u+st)}}}Ot(),H();function Ot(){let O=s.length/3;if(f){let lt=0,st=W*lt;for(let dt=0;dt<j;dt++){let ut=qt[dt];It(ut[2]+st,ut[1]+st,ut[0]+st)}lt=h+g*2,st=W*lt;for(let dt=0;dt<j;dt++){let ut=qt[dt];It(ut[0]+st,ut[1]+st,ut[2]+st)}}else{for(let lt=0;lt<j;lt++){let st=qt[lt];It(st[2],st[1],st[0])}for(let lt=0;lt<j;lt++){let st=qt[lt];It(st[0]+W*h,st[1]+W*h,st[2]+W*h)}}n.addGroup(O,s.length/3-O,0)}function H(){let O=s.length/3,lt=0;X(z,lt),lt+=z.length;for(let st=0,dt=I.length;st<dt;st++){let ut=I[st];X(ut,lt),lt+=ut.length}n.addGroup(O,s.length/3-O,1)}function X(O,lt){let st=O.length;for(;--st>=0;){let dt=st,ut=st-1;ut<0&&(ut=O.length-1);for(let rt=0,ht=h+g*2;rt<ht;rt++){let Mt=W*rt,Pt=W*(rt+1),Yt=lt+dt+Mt,D=lt+ut+Mt,ie=lt+ut+Pt,kt=lt+dt+Pt;$(Yt,D,ie,kt)}}}function Z(O,lt,st){l.push(O),l.push(lt),l.push(st)}function It(O,lt,st){at(O),at(lt),at(st);let dt=s.length/3,ut=y.generateTopUV(n,s,dt-3,dt-2,dt-1);ct(ut[0]),ct(ut[1]),ct(ut[2])}function $(O,lt,st,dt){at(O),at(lt),at(dt),at(lt),at(st),at(dt);let ut=s.length/3,rt=y.generateSideWallUV(n,s,ut-6,ut-3,ut-2,ut-1);ct(rt[0]),ct(rt[1]),ct(rt[3]),ct(rt[1]),ct(rt[2]),ct(rt[3])}function at(O){s.push(l[O*3+0]),s.push(l[O*3+1]),s.push(l[O*3+2])}function ct(O){r.push(O.x),r.push(O.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Bp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Mc[s.type]().fromJSON(s)),new i(n,t.options)}},Op={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new mt(r,o),new mt(a,l),new mt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],p=t[s*3+2],S=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new mt(o,1-l),new mt(c,1-u),new mt(f,1-p),new mt(S,1-m)]:[new mt(a,1-l),new mt(h,1-u),new mt(d,1-p),new mt(g,1-m)]}};function Bp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Gs=class i extends ca{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Pe=class i extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],S=[],g=[];for(let m=0;m<h;m++){let y=m*f-o;for(let v=0;v<c;v++){let _=v*u-r;p.push(_,-y,0),S.push(0,0,1),g.push(v/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let v=y+c*m,_=y+c*(m+1),T=y+1+c*(m+1),b=y+1+c*m;d.push(v,_,b),d.push(_,T,b)}this.setIndex(d),this.setAttribute("position",new me(p,3)),this.setAttribute("normal",new me(S,3)),this.setAttribute("uv",new me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ln=class i extends Be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new U,f=new U,d=[],p=[],S=[],g=[];for(let m=0;m<=n;m++){let y=[],v=m/n,_=o+v*a,T=t*Math.cos(_),b=Math.sqrt(t*t-T*T),x=0;m===0&&o===0?x=.5/e:m===n&&l===Math.PI&&(x=-.5/e);for(let M=0;M<=e;M++){let C=M/e,A=s+C*r;u.x=-b*Math.cos(A),u.y=T,u.z=b*Math.sin(A),p.push(u.x,u.y,u.z),f.copy(u).normalize(),S.push(f.x,f.y,f.z),g.push(C+x,1-v),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){let v=h[m][y+1],_=h[m][y],T=h[m+1][y],b=h[m+1][y+1];(m!==0||o>0)&&d.push(v,_,b),(m!==n-1||l<Math.PI)&&d.push(_,T,b)}this.setIndex(d),this.setAttribute("position",new me(p,3)),this.setAttribute("normal",new me(S,3)),this.setAttribute("uv",new me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Hr=class i extends Be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new U,d=new U,p=new U;for(let S=0;S<=n;S++){let g=o+S/n*a;for(let m=0;m<=s;m++){let y=m/s*r;d.x=(t+e*Math.cos(g))*Math.cos(y),d.y=(t+e*Math.cos(g))*Math.sin(y),d.z=e*Math.sin(g),c.push(d.x,d.y,d.z),f.x=t*Math.cos(y),f.y=t*Math.sin(y),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(m/s),u.push(S/n)}}for(let S=1;S<=n;S++)for(let g=1;g<=s;g++){let m=(s+1)*S+g-1,y=(s+1)*(S-1)+g-1,v=(s+1)*(S-1)+g,_=(s+1)*S+g;l.push(m,y,_),l.push(y,v,_)}this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function os(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(wu(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(wu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function ln(i){let t={};for(let e=0;e<i.length;e++){let n=os(i[e]);for(let s in n)t[s]=n[s]}return t}function wu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function zp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Qc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var Ef={clone:os,merge:ln},Hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$n=class extends fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hp,this.fragmentShader=Gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=zp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new se().setHex(s.value);break;case"v2":this.uniforms[n].value=new mt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new De().fromArray(s.value);break;case"m3":this.uniforms[n].value=new te().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ae().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ga=class extends $n{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Wt=class extends fi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vl,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=La,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},xa=class extends fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},_a=class extends fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function As(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Vo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ni=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},va=class extends Ni{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_c,endingEnd:_c}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case vc:r=t,a=2*e-n;break;case yc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vc:o=t,l=2*n-e;break;case yc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(s-e),S=p*p,g=S*p,m=-f*g+2*f*S-f*p,y=(1+f)*g+(-1.5-2*f)*S+(-.5+f)*p+1,v=(-1-d)*g+(1.5+d)*S+.5*p,_=d*g-d*S;for(let T=0;T!==a;++T)r[T]=m*o[h+T]+y*o[c+T]+v*o[l+T]+_*o[u+T];return r}},ya=class extends Ni{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Ma=class extends Ni{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Sa=class extends Ni{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(s-e),S=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*S+o[l+g]*p;return r}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let S=o[c+p],g=o[l+p],m=d*f+p*2,y=u[m],v=u[m+1],_=t*f+p*2,T=h[_],b=h[_+1],x=Vp(n,e,y,T,s);r[p]=Tf(x,S,v,b,g)}return r}};function Tf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function kp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Vp(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Tf(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=kp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Rn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=As(e,this.TimeBufferType),this.values=As(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:As(t.times,Array),values:As(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Vo(t.settings)&&(n.settings={inTangents:As(t.settings.inTangents,Array),outTangents:As(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Sa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case pr:e=this.InterpolantFactoryMethodDiscrete;break;case na:e=this.InterpolantFactoryMethodLinear;break;case qo:e=this.InterpolantFactoryMethodSmooth;break;case xc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pr;case this.InterpolantFactoryMethodLinear:return na;case this.InterpolantFactoryMethodSmooth:return qo;case this.InterpolantFactoryMethodBezier:return xc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Vo(this.settings)&&(Au(this.settings.inTangents,t),Au(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Vo(this.settings)&&(Ru(this.settings.inTangents,t),Ru(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Qt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Qt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Qt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&qd(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Qt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let S=e[u+p];if(S!==e[f+p]||S!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Vo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Au(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Ru(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Rn.prototype.ValueTypeName="";Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=na;var Ui=class extends Rn{constructor(t,e,n){super(t,e,n)}};Ui.prototype.ValueTypeName="bool";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=pr;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}};ba.prototype.ValueTypeName="color";var Ea=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}};Ea.prototype.ValueTypeName="number";var Ta=class extends Ni{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)tn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Gr=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ta(this.times,this.values,this.getValueSize(),t)}};Gr.prototype.ValueTypeName="quaternion";Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends Rn{constructor(t,e,n){super(t,e,n)}};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=pr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}};wa.prototype.ValueTypeName="vector";var Aa=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},wf=new Aa,Ra=class{constructor(t){this.manager=t!==void 0?t:wf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ra.DEFAULT_MATERIAL_NAME="__DEFAULT";var kr=class extends en{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Vr=class extends kr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},gc=new ae,Cu=new U,Iu=new U,Ca=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Di,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Cu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cu),Iu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Iu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(gc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ls||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(gc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Wo=new U,Xo=new tn,qn=new U,Wr=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Wo,Xo,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wo,Xo,qn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Wo,Xo,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wo,Xo,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ii=new U,Pu=new mt,Lu=new mt,fn=class extends Wr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ia*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ia*2*Math.atan(Math.tan(Xl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z)}getViewSize(t,e){return this.getViewBounds(t,Pu,Lu),e.subVectors(Lu,Pu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Xl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Xr=class extends Wr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Tc=class extends Ca{constructor(){super(new Xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qr=class extends kr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new Tc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Rs=-90,Cs=1,ks=class extends en{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new fn(Rs,Cs,t,e);s.layers=this.layers,this.add(s);let r=new fn(Rs,Cs,t,e);r.layers=this.layers,this.add(r);let o=new fn(Rs,Cs,t,e);o.layers=this.layers,this.add(o);let a=new fn(Rs,Cs,t,e);a.layers=this.layers,this.add(a);let l=new fn(Rs,Cs,t,e);l.layers=this.layers,this.add(l);let c=new fn(Rs,Cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=S,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ia=class extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var th="\\[\\]\\.:\\/",Wp=new RegExp("["+th+"]","g"),eh="[^"+th+"]",Xp="[^"+th.replace("\\.","")+"]",qp=/((?:WC+[\/:])*)/.source.replace("WC",eh),Yp=/(WCOD+)?/.source.replace("WCOD",Xp),Zp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eh),Jp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eh),$p=new RegExp("^"+qp+Yp+Zp+Jp+"$"),Kp=["material","materials","bones","map"],wc=class{constructor(t,e,n){let s=n||Ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ie=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Wp,"")}static parseTrackName(t){let e=$p.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Kp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Qt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=wc;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dv=new Float32Array(1);var Ac=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function nh(i,t,e,n){let s=jp(n);switch(e){case Xc:return i*t;case za:return i*t/s.components*s.byteLength;case Ha:return i*t/s.components*s.byteLength;case Bi:return i*t*2/s.components*s.byteLength;case Ga:return i*t*2/s.components*s.byteLength;case qc:return i*t*3/s.components*s.byteLength;case kn:return i*t*4/s.components*s.byteLength;case ka:return i*t*4/s.components*s.byteLength;case Jr:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Kr:case jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:case qa:return Math.max(i,16)*Math.max(t,8)/4;case Va:case Xa:return Math.max(i,8)*Math.max(t,8)/2;case Ya:case Za:case $a:case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ja:case Qr:case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case nl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case rl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ol:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case al:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ul:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case dl:case pl:case ml:return Math.ceil(i/4)*Math.ceil(t/4)*16;case gl:case xl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case to:case _l:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jp(i){switch(i){case yn:case Gc:return{byteLength:1,components:1};case qs:case kc:case Gn:return{byteLength:2,components:1};case Oa:case Ba:return{byteLength:2,components:4};case Hn:case Fa:case Dn:return{byteLength:4,components:1};case Vc:case Wc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Zf(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function sm(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],S=u[d];S.start<=p.start+p.count+1?p.count=Math.max(p.count,S.start+S.count-p.start):(++f,u[f]=S)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let S=u[d];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var rm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,om=`#ifdef USE_ALPHAHASH
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
#endif`,am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,um=`#ifdef USE_AOMAP
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
#endif`,fm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dm=`#ifdef USE_BATCHING
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
#endif`,pm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_m=`#ifdef USE_IRIDESCENCE
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
#endif`,vm=`#ifdef USE_BUMPMAP
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Tm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Rm=`#define PI 3.141592653589793
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
} // validated`,Cm=`vec3 transformedNormal = objectNormal;
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
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Um=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
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
#endif`,Gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xm=`#ifdef USE_GRADIENTMAP
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
}`,qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ym=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,$m=`#ifdef USE_ENVMAP
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
#endif`,Km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e0=`PhysicalMaterial material;
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
#endif`,n0=`uniform sampler2D dfgLUT;
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
}`,i0=`
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
#endif`,s0=`#if defined( RE_IndirectDiffuse )
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
#endif`,r0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,o0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,a0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,d0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,p0=`#if defined( USE_POINTS_UV )
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
#endif`,m0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_0=`#if defined( USE_MORPHCOLORS )
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
#endif`,v0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y0=`#ifdef USE_MORPHTARGETS
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
#endif`,M0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,b0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,E0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,A0=`#ifdef USE_NORMALMAP
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
#endif`,R0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,L0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,N0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,B0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V0=`float getShadowMask() {
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
}`,W0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X0=`#ifdef USE_SKINNING
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
#endif`,q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y0=`#ifdef USE_SKINNING
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
#endif`,Z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,j0=`#ifdef USE_TRANSMISSION
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
#endif`,Q0=`#ifdef USE_TRANSMISSION
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rg=`uniform sampler2D t2D;
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
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`uniform float backgroundBlurriness;
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
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`#include <common>
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
}`,ug=`#if DEPTH_PACKING == 3200
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
}`,fg=`#define DISTANCE
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
}`,dg=`#define DISTANCE
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`uniform float scale;
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
}`,xg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,vg=`uniform vec3 diffuse;
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
}`,yg=`#define LAMBERT
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
}`,Mg=`#define LAMBERT
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
}`,Sg=`#define MATCAP
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
}`,bg=`#define MATCAP
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
}`,Eg=`#define NORMAL
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
}`,Tg=`#define NORMAL
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
}`,wg=`#define PHONG
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
}`,Ag=`#define PHONG
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
}`,Rg=`#define STANDARD
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
}`,Cg=`#define STANDARD
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
}`,Ig=`#define TOON
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
}`,Pg=`#define TOON
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
}`,Lg=`uniform float size;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Ng=`#include <common>
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
}`,Ug=`uniform vec3 color;
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
}`,Fg=`uniform float rotation;
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
}`,Og=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:rm,alphahash_pars_fragment:om,alphamap_fragment:am,alphamap_pars_fragment:lm,alphatest_fragment:cm,alphatest_pars_fragment:hm,aomap_fragment:um,aomap_pars_fragment:fm,batching_pars_vertex:dm,batching_vertex:pm,begin_vertex:mm,beginnormal_vertex:gm,bsdfs:xm,iridescence_fragment:_m,bumpmap_pars_fragment:vm,clipping_planes_fragment:ym,clipping_planes_pars_fragment:Mm,clipping_planes_pars_vertex:Sm,clipping_planes_vertex:bm,color_fragment:Em,color_pars_fragment:Tm,color_pars_vertex:wm,color_vertex:Am,common:Rm,defaultnormal_vertex:Cm,displacementmap_pars_vertex:Im,displacementmap_vertex:Pm,emissivemap_fragment:Lm,emissivemap_pars_fragment:Dm,colorspace_fragment:Nm,colorspace_pars_fragment:Um,envmap_fragment:Fm,envmap_common_pars_fragment:Om,envmap_pars_fragment:Bm,envmap_pars_vertex:zm,envmap_physical_pars_fragment:$m,envmap_vertex:Hm,fog_vertex:Gm,fog_pars_vertex:km,fog_fragment:Vm,fog_pars_fragment:Wm,gradientmap_pars_fragment:Xm,lightmap_pars_fragment:qm,lights_lambert_fragment:Ym,lights_lambert_pars_fragment:Zm,lights_pars_begin:Jm,lights_toon_fragment:Km,lights_toon_pars_fragment:jm,lights_phong_fragment:Qm,lights_phong_pars_fragment:t0,lights_physical_fragment:e0,lights_physical_pars_fragment:n0,lights_fragment_begin:i0,lights_fragment_maps:s0,lights_fragment_end:r0,lightprobes_pars_fragment:o0,logdepthbuf_fragment:a0,logdepthbuf_pars_fragment:l0,logdepthbuf_pars_vertex:c0,logdepthbuf_vertex:h0,map_fragment:u0,map_pars_fragment:f0,map_particle_fragment:d0,map_particle_pars_fragment:p0,metalnessmap_fragment:m0,metalnessmap_pars_fragment:g0,morphinstance_vertex:x0,morphcolor_vertex:_0,morphnormal_vertex:v0,morphtarget_pars_vertex:y0,morphtarget_vertex:M0,normal_fragment_begin:S0,normal_fragment_maps:b0,normal_pars_fragment:E0,normal_pars_vertex:T0,normal_vertex:w0,normalmap_pars_fragment:A0,clearcoat_normal_fragment_begin:R0,clearcoat_normal_fragment_maps:C0,clearcoat_pars_fragment:I0,iridescence_pars_fragment:P0,opaque_fragment:L0,packing:D0,premultiplied_alpha_fragment:N0,project_vertex:U0,dithering_fragment:F0,dithering_pars_fragment:O0,roughnessmap_fragment:B0,roughnessmap_pars_fragment:z0,shadowmap_pars_fragment:H0,shadowmap_pars_vertex:G0,shadowmap_vertex:k0,shadowmask_pars_fragment:V0,skinbase_vertex:W0,skinning_pars_vertex:X0,skinning_vertex:q0,skinnormal_vertex:Y0,specularmap_fragment:Z0,specularmap_pars_fragment:J0,tonemapping_fragment:$0,tonemapping_pars_fragment:K0,transmission_fragment:j0,transmission_pars_fragment:Q0,uv_pars_fragment:tg,uv_pars_vertex:eg,uv_vertex:ng,worldpos_vertex:ig,background_vert:sg,background_frag:rg,backgroundCube_vert:og,backgroundCube_frag:ag,cube_vert:lg,cube_frag:cg,depth_vert:hg,depth_frag:ug,distance_vert:fg,distance_frag:dg,equirect_vert:pg,equirect_frag:mg,linedashed_vert:gg,linedashed_frag:xg,meshbasic_vert:_g,meshbasic_frag:vg,meshlambert_vert:yg,meshlambert_frag:Mg,meshmatcap_vert:Sg,meshmatcap_frag:bg,meshnormal_vert:Eg,meshnormal_frag:Tg,meshphong_vert:wg,meshphong_frag:Ag,meshphysical_vert:Rg,meshphysical_frag:Cg,meshtoon_vert:Ig,meshtoon_frag:Pg,points_vert:Lg,points_frag:Dg,shadow_vert:Ng,shadow_frag:Ug,sprite_vert:Fg,sprite_frag:Og},Dt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Qn={basic:{uniforms:ln([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:ln([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:ln([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:ln([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:ln([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new se(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:ln([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:ln([Dt.points,Dt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:ln([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:ln([Dt.common,Dt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:ln([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:ln([Dt.sprite,Dt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distance:{uniforms:ln([Dt.common,Dt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distance_vert,fragmentShader:le.distance_frag},shadow:{uniforms:ln([Dt.lights,Dt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Qn.physical={uniforms:ln([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};var Ml={r:0,b:0,g:0},Bg=new ae,Jf=new te;Jf.set(-1,0,0,0,1,0,0,0,1);function zg(i,t,e,n,s,r){let o=new se(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(y){let v=y.isScene===!0?y.background:null;if(v&&v.isTexture){let _=y.backgroundBlurriness>0;v=t.get(v,_)}return v}function p(y){let v=!1,_=d(y);_===null?g(o,a):_&&_.isColor&&(g(_,1),v=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(y,v){let _=d(v);_&&_.isCubeTexture?(c===void 0&&(c=new xt(new ne(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:os(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,b,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Bg.makeRotationFromEuler(v.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Jf),c.material.toneMapped=pe.getTransfer(_.colorSpace)!==ve,(h!==_||u!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new xt(new Pe(2,2),new $n({name:"BackgroundMaterial",uniforms:os(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=pe.getTransfer(_.colorSpace)!==ve,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,v){y.getRGB(Ml,Qc(i)),e.buffers.color.setClear(Ml.r,Ml.g,Ml.b,v,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),a=v,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:p,addToRenderList:S,dispose:m}}function Hg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(I,L,B,P,z){let q=!1,W=u(I,P,B,L);r!==W&&(r=W,c(r.object)),q=d(I,P,B,z),q&&p(I,P,B,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,_(I,L,B,P),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function u(I,L,B,P){let z=P.wireframe===!0,q=n[L.id];q===void 0&&(q={},n[L.id]=q);let W=I.isInstancedMesh===!0?I.id:0,ft=q[W];ft===void 0&&(ft={},q[W]=ft);let J=ft[B.id];J===void 0&&(J={},ft[B.id]=J);let nt=J[z];return nt===void 0&&(nt=f(l()),J[z]=nt),nt}function f(I){let L=[],B=[],P=[];for(let z=0;z<e;z++)L[z]=0,B[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:P,object:I,attributes:{},index:null}}function d(I,L,B,P){let z=r.attributes,q=L.attributes,W=0,ft=B.getAttributes();for(let J in ft)if(ft[J].location>=0){let ot=z[J],Ft=q[J];if(Ft===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(Ft=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(Ft=I.instanceColor)),ot===void 0||ot.attribute!==Ft||Ft&&ot.data!==Ft.data)return!0;W++}return r.attributesNum!==W||r.index!==P}function p(I,L,B,P){let z={},q=L.attributes,W=0,ft=B.getAttributes();for(let J in ft)if(ft[J].location>=0){let ot=q[J];ot===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(ot=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(ot=I.instanceColor));let Ft={};Ft.attribute=ot,ot&&ot.data&&(Ft.data=ot.data),z[J]=Ft,W++}r.attributes=z,r.attributesNum=W,r.index=P}function S(){let I=r.newAttributes;for(let L=0,B=I.length;L<B;L++)I[L]=0}function g(I){m(I,0)}function m(I,L){let B=r.newAttributes,P=r.enabledAttributes,z=r.attributeDivisors;B[I]=1,P[I]===0&&(i.enableVertexAttribArray(I),P[I]=1),z[I]!==L&&(i.vertexAttribDivisor(I,L),z[I]=L)}function y(){let I=r.newAttributes,L=r.enabledAttributes;for(let B=0,P=L.length;B<P;B++)L[B]!==I[B]&&(i.disableVertexAttribArray(B),L[B]=0)}function v(I,L,B,P,z,q,W){W===!0?i.vertexAttribIPointer(I,L,B,z,q):i.vertexAttribPointer(I,L,B,P,z,q)}function _(I,L,B,P){S();let z=P.attributes,q=B.getAttributes(),W=L.defaultAttributeValues;for(let ft in q){let J=q[ft];if(J.location>=0){let nt=z[ft];if(nt===void 0&&(ft==="instanceMatrix"&&I.instanceMatrix&&(nt=I.instanceMatrix),ft==="instanceColor"&&I.instanceColor&&(nt=I.instanceColor)),nt!==void 0){let ot=nt.normalized,Ft=nt.itemSize,qt=t.get(nt);if(qt===void 0)continue;let j=qt.buffer,Ct=qt.type,Ot=qt.bytesPerElement,H=Ct===i.INT||Ct===i.UNSIGNED_INT||nt.gpuType===Fa;if(nt.isInterleavedBufferAttribute){let X=nt.data,Z=X.isInterleavedBuffer===!0?X.stride:X.itemSize,It=nt.offset;if(X.isInstancedInterleavedBuffer||X.isInstancedBufferAttribute){for(let $=0;$<J.locationSize;$++)m(J.location+$,X.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let $=0;$<J.locationSize;$++)g(J.location+$);i.bindBuffer(i.ARRAY_BUFFER,j);for(let $=0;$<J.locationSize;$++)v(J.location+$,Ft/J.locationSize,Ct,ot,Z*Ot,(It+Ft/J.locationSize*$)*Ot,H)}else{if(nt.isInstancedBufferAttribute){for(let X=0;X<J.locationSize;X++)m(J.location+X,nt.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let X=0;X<J.locationSize;X++)g(J.location+X);i.bindBuffer(i.ARRAY_BUFFER,j);for(let X=0;X<J.locationSize;X++)v(J.location+X,Ft/J.locationSize,Ct,ot,Ft*Ot,Ft/J.locationSize*X*Ot,H)}}else if(W!==void 0){let ot=W[ft];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(J.location,ot);break;case 3:i.vertexAttrib3fv(J.location,ot);break;case 4:i.vertexAttrib4fv(J.location,ot);break;default:i.vertexAttrib1fv(J.location,ot)}}}}y()}function T(){C();for(let I in n){let L=n[I];for(let B in L){let P=L[B];for(let z in P){let q=P[z];for(let W in q)h(q[W].object),delete q[W];delete P[z]}}delete n[I]}}function b(I){if(n[I.id]===void 0)return;let L=n[I.id];for(let B in L){let P=L[B];for(let z in P){let q=P[z];for(let W in q)h(q[W].object),delete q[W];delete P[z]}}delete n[I.id]}function x(I){for(let L in n){let B=n[L];for(let P in B){let z=B[P];if(z[I.id]===void 0)continue;let q=z[I.id];for(let W in q)h(q[W].object),delete q[W];delete z[I.id]}}}function M(I){for(let L in n){let B=n[L],P=I.isInstancedMesh===!0?I.id:0,z=B[P];if(z!==void 0){for(let q in z){let W=z[q];for(let ft in W)h(W[ft].object),delete W[ft];delete z[q]}delete B[P],Object.keys(B).length===0&&delete n[L]}}}function C(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:A,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:S,enableAttribute:g,disableUnusedAttributes:y}}function Gg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function kg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==kn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let M=x===Gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==yn&&x!==Dn&&!M&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&jt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:S,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,maxSamples:T,samples:b}}function Vg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new zn,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,S=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let y=r?0:n,v=y*4,_=m.clippingState||null;l.value=_,_=h(p,f,v,d);for(let T=0;T!==v;++T)_[T]=e[T];m.clippingState=_,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let S=u!==null?u.length:0,g=null;if(S!==0){if(g=l.value,p!==!0||g===null){let m=d+S*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,_=d;v!==S;++v,_+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,g}}var io=class extends Tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ar(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ne(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:ns});r.uniforms.tEquirect.value=e;let o=new xt(s,r),a=e.minFilter;return e.minFilter===gi&&(e.minFilter=dn),new ks(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Af=256,Wg=3,Xg=20,$f=256,Kf=16,qg=3,Yg=new U,Zg=new se,bl=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ks(1,10,null),this._boxMesh=new xt(new ne(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Yg}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,S=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(t.background=l.getClearColor(Zg));let g=new ks(n,s,h);return g.position.copy(a),g.update(l,t),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=p,t.background=S,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=If(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Af,mf(t))}_fromTexture(t,e){t.mapping===ss||t.mapping===Xs?this._setSize(t.image.length===0?Af:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Rf(t,!1,!1),n=Math.log2(t)-Wg;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Rf(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ss||t.mapping===Xs?(this._cubemapMaterial===null&&(this._cubemapMaterial=If()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Cf()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Jg(),this._integrationMaterial=$g());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Kf);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-qg)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/($f*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Kg());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Rf(i,t,e){return new io(i,{minFilter:gi,generateMipmaps:t,type:Gn,colorSpace:mr,depthBuffer:e})}function so(i,t,e){return new $n({name:i,uniforms:t,vertexShader:le.cube_vert,fragmentShader:e,side:mn,blending:ns,depthTest:!1,depthWrite:!1})}function Jg(){return so("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${$f}u

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
	`)}function $g(){return so("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Kf}},`

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
	`)}function Kg(){return so("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Xg}
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
	`)}function Cf(){return so("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function If(){return so("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function jg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Da||d===Na)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let S=new io(p.height);return S.fromEquirectangularTexture(i,f),t.set(f,S),f.addEventListener("dispose",c),a(S.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===Da||d===Na,S=d===ss||d===Xs;if(p||S){let g=e.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new bl(i)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let y=f.image;return p&&y&&y.height>0||S&&y&&l(y)?(n===null&&(n=new bl(i)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,d){return d===Da?f.mapping=ss:d===Na&&(f.mapping=Xs),f}function l(f){let d=0,p=6;for(let S=0;S<p;S++)f[S]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Qg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ur("WebGLRenderer: "+n+" extension not supported."),s}}}function tx(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let S=r.get(p);S&&(t.remove(S),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,S){return s[S.id]!==void 0||(S.addEventListener("dispose",a),s[S.id]=new WeakRef(S),o.register(S,S.id,S),e.memory.geometries++),S}function h(p){let S=p.attributes;for(let g in S)t.update(S[g],i.ARRAY_BUFFER)}function u(p){let S=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let y=S!==null?S.array.length:g.array.length/3-1,v=g.count>=65535?Er:br,_=new v(Math.ceil(y/3)*6,1),T=_.array;if(S!==null){let x=S.array;m=S.version;for(let M=0,C=0;M<y;M+=3){let A=x[M+0],I=x[M+1],L=x[M+2];T[C++]=A,T[C++]=I,T[C++]=I,T[C++]=L,T[C++]=L,T[C++]=A}}else{m=g.version;for(let x=0,M=0;x<y;x+=3){let C=x+0,A=x+1,I=x+2;T[M++]=C,T[M++]=A,T[M++]=A,T[M++]=I,T[M++]=I,T[M++]=C}}_.version=m;let b=r.get(p);b&&t.remove(b),r.set(p,_)}function f(p){let S=r.get(p);if(S){let g=p.index;g!==null&&S.version<g.version&&u(p)}else u(p);return r.get(p)}function d(){for(let p in s){let S=s[p].deref();S!==void 0&&l(S)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function ex(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let S=0;for(let g=0;g<d;g++)S+=f[g];e.update(S,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function nx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Qt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ix(i,t,e){let n=new WeakMap,s=new De;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let C=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",C)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),S===!0&&(v=3);let _=a.attributes.position.count*v,T=1;_>t.maxTextureSize&&(T=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let b=new Float32Array(_*T*4*u),x=new vr(b,_,T,u);x.type=Dn,x.needsUpdate=!0;let M=v*4;for(let A=0;A<u;A++){let I=g[A],L=m[A],B=y[A],P=_*T*4*A;for(let z=0;z<I.count;z++){let q=z*M;d===!0&&(s.fromBufferAttribute(I,z),b[P+q+0]=s.x,b[P+q+1]=s.y,b[P+q+2]=s.z,b[P+q+3]=0),p===!0&&(s.fromBufferAttribute(L,z),b[P+q+4]=s.x,b[P+q+5]=s.y,b[P+q+6]=s.z,b[P+q+7]=0),S===!0&&(s.fromBufferAttribute(B,z),b[P+q+8]=s.x,b[P+q+9]=s.y,b[P+q+10]=s.z,b[P+q+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:x,size:new mt(_,T)},n.set(a,f),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let S=0;S<c.length;S++)d+=c[S];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function sx(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var rx={[Dc]:"LINEAR_TONE_MAPPING",[Nc]:"REINHARD_TONE_MAPPING",[Uc]:"CINEON_TONE_MAPPING",[Fc]:"ACES_FILMIC_TONE_MAPPING",[Bc]:"AGX_TONE_MAPPING",[zc]:"NEUTRAL_TONE_MAPPING",[Oc]:"CUSTOM_TONE_MAPPING"};function ox(i,t,e,n,s,r){let o=new Tn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Be;h.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new me([0,2,0,0,2,0],2));let u=new ga({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new xt(h,u),d=new Xr(-1,1,1,-1,0,1),p=null,S=null,g=!1,m,y=null,v=[],_=!1;this.setSize=function(T,b){o.setSize(T,b),a!==null&&a.setSize(T,b),l!==null&&l.setSize(T,b);for(let x=0;x<v.length;x++){let M=v[x];M.setSize&&M.setSize(T,b)}},this.setEffects=function(T){v=T,_=v.length>0&&v[0].isRenderPass===!0;let b=o.width,x=o.height;v.length>0&&a===null&&(a=new Tn(b,x,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),l=new Tn(b,x,{type:Gn,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&v.some(C=>C.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&c===null&&(c=new pi(b,x),r===!0&&(c.format=xi,c.type=rs)),o.dispose(),o.depthTexture=M?c:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let C=0;C<v.length;C++){let A=v[C];A.setSize&&A.setSize(b,x),M&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(T,b){if(g||T.toneMapping===Kn&&v.length===0)return!1;if(y=b,b!==null){let x=b.width,M=b.height;(o.width!==x||o.height!==M)&&this.setSize(x,M)}return _===!1&&T.setRenderTarget(o),m=T.toneMapping,T.toneMapping=Kn,!0},this.hasRenderPass=function(){return _},this.end=function(T,b){T.toneMapping=m,g=!0;let x=o,M=a;for(let C=0;C<v.length;C++){let A=v[C];A.enabled!==!1&&(A.render(T,M,x,b),A.needsSwap!==!1&&(x=M,M=M===a?l:a))}if(p!==T.outputColorSpace||S!==T.toneMapping){p=T.outputColorSpace,S=T.toneMapping,u.defines={},pe.getTransfer(p)===ve&&(u.defines.SRGB_TRANSFER="");let C=rx[S];C&&(u.defines[C]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(y),T.render(f,d),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var jf=new pn,Qf=new pi(1,1),td=new Rr(1),ed=new vr,nd=new oa,id=new Ar,Pf=[],Lf=[],Df=new Float32Array(16),Nf=new Float32Array(9),Uf=new Float32Array(4);function Zs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Pf[s];if(r===void 0&&(r=new Float32Array(s),Pf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function We(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Tl(i,t){let e=Lf[t];e===void 0&&(e=new Int32Array(t),Lf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ax(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function lx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2fv(this.addr,t),We(e,t)}}function cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;i.uniform3fv(this.addr,t),We(e,t)}}function hx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4fv(this.addr,t),We(e,t)}}function ux(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;Uf.set(n),i.uniformMatrix2fv(this.addr,!1,Uf),We(e,n)}}function fx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;Nf.set(n),i.uniformMatrix3fv(this.addr,!1,Nf),We(e,n)}}function dx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;Df.set(n),i.uniformMatrix4fv(this.addr,!1,Df),We(e,n)}}function px(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2iv(this.addr,t),We(e,t)}}function gx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3iv(this.addr,t),We(e,t)}}function xx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4iv(this.addr,t),We(e,t)}}function _x(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function vx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2uiv(this.addr,t),We(e,t)}}function yx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3uiv(this.addr,t),We(e,t)}}function Mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4uiv(this.addr,t),We(e,t)}}function wl(i){return i.version===0&&(i.compareFunction=Jc,i.needsUpdate=!0),i}function Sx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=wl(Qf):r=jf,e.setTexture2D(t||r,s)}function bx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||nd,s)}function Ex(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=wl(td):r=id,e.setTextureCube(t||r,s)}function Tx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ed,s)}function wx(i){switch(i){case 5126:return ax;case 35664:return lx;case 35665:return cx;case 35666:return hx;case 35674:return ux;case 35675:return fx;case 35676:return dx;case 5124:case 35670:return px;case 35667:case 35671:return mx;case 35668:case 35672:return gx;case 35669:case 35673:return xx;case 5125:return _x;case 36294:return vx;case 36295:return yx;case 36296:return Mx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return bx;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return Tx}}function Ax(i,t){i.uniform1fv(this.addr,t)}function Rx(i,t){let e=Zs(t,this.size,2);i.uniform2fv(this.addr,e)}function Cx(i,t){let e=Zs(t,this.size,3);i.uniform3fv(this.addr,e)}function Ix(i,t){let e=Zs(t,this.size,4);i.uniform4fv(this.addr,e)}function Px(i,t){let e=Zs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Lx(i,t){let e=Zs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Dx(i,t){let e=Zs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Nx(i,t){i.uniform1iv(this.addr,t)}function Ux(i,t){i.uniform2iv(this.addr,t)}function Fx(i,t){i.uniform3iv(this.addr,t)}function Ox(i,t){i.uniform4iv(this.addr,t)}function Bx(i,t){i.uniform1uiv(this.addr,t)}function zx(i,t){i.uniform2uiv(this.addr,t)}function Hx(i,t){i.uniform3uiv(this.addr,t)}function Gx(i,t){i.uniform4uiv(this.addr,t)}function kx(i,t,e){let n=this.cache,s=t.length,r=Tl(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),We(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=wl(Qf):o=jf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Vx(i,t,e){let n=this.cache,s=t.length,r=Tl(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||nd,r[o])}function Wx(i,t,e){let n=this.cache,s=t.length,r=Tl(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),We(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=wl(td):o=id;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Xx(i,t,e){let n=this.cache,s=t.length,r=Tl(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ed,r[o])}function qx(i){switch(i){case 5126:return Ax;case 35664:return Rx;case 35665:return Cx;case 35666:return Ix;case 35674:return Px;case 35675:return Lx;case 35676:return Dx;case 5124:case 35670:return Nx;case 35667:case 35671:return Ux;case 35668:case 35672:return Fx;case 35669:case 35673:return Ox;case 5125:return Bx;case 36294:return zx;case 36295:return Hx;case 36296:return Gx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return Vx;case 35680:case 36300:case 36308:case 36293:return Wx;case 36289:case 36303:case 36311:case 36292:return Xx}}var rh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=wx(e.type)}},oh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qx(e.type)}},ah=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ih=/(\w+)(\])?(\[|\.)?/g;function Ff(i,t){i.seq.push(t),i.map[t.id]=t}function Yx(i,t,e){let n=i.name,s=n.length;for(ih.lastIndex=0;;){let r=ih.exec(n),o=ih.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ff(e,c===void 0?new rh(a,i,t):new oh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new ah(a),Ff(e,u)),e=u}}}var Ys=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Yx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Of(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Zx=37297,Jx=0;function $x(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Bf=new te;function Kx(i){pe._getMatrix(Bf,pe.workingColorSpace,i);let t=`mat3( ${Bf.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(i)){case gr:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function zf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+$x(i.getShaderSource(t),a)}else return r}function jx(i,t){let e=Kx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Qx={[Dc]:"Linear",[Nc]:"Reinhard",[Uc]:"Cineon",[Fc]:"ACESFilmic",[Bc]:"AgX",[zc]:"Neutral",[Oc]:"Custom"};function t_(i,t){let e=Qx[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Sl=new U;function e_(){pe.getLuminanceCoefficients(Sl);let i=Sl.x.toFixed(4),t=Sl.y.toFixed(4),e=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function i_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function s_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function no(i){return i!==""}function Hf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Gf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var r_=/^[ \t]*#include +<([\w\d./]+)>/gm;function lh(i){return i.replace(r_,o_)}function o_(i,t){let e=le[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return lh(e)}var a_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kf(i){return i.replace(a_,l_)}function l_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var c_={[Yr]:"SHADOWMAP_TYPE_PCF",[Vs]:"SHADOWMAP_TYPE_VSM"};function h_(i){return c_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var u_={[Xs]:"ENVMAP_MODE_REFRACTION"};function f_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":u_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var d_={[La]:"ENVMAP_BLENDING_MULTIPLY",[Qu]:"ENVMAP_BLENDING_MIX",[tf]:"ENVMAP_BLENDING_ADD"};function p_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":d_[i.combine]||"ENVMAP_BLENDING_NONE"}function m_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=h_(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=f_(e),u=p_(e),f=n_(e),d=i_(r),p=s.createProgram(),S,g,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(no).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(no).join(`
`),g.length>0&&(g+=`
`)):(S=[Vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),g=[Vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?le.tonemapping_pars_fragment:"",e.toneMapping!==Kn?t_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,jx("linearToOutputTexel",e.outputColorSpace),e_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(no).join(`
`)),o=lh(o),o=Hf(o,e),o=Gf(o,e),a=lh(a),a=Hf(a,e),a=Gf(a,e),o=kf(o),a=kf(a),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,S=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",e.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=m+S+o,v=m+g+a,_=Of(s,s.VERTEX_SHADER,y),T=Of(s,s.FRAGMENT_SHADER,v);s.attachShader(p,_),s.attachShader(p,T),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function b(A){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(p)||"",L=s.getShaderInfoLog(_)||"",B=s.getShaderInfoLog(T)||"",P=I.trim(),z=L.trim(),q=B.trim(),W=!0,ft=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,_,T);else{let J=zf(s,_,"vertex"),nt=zf(s,T,"fragment");Qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+P+`
`+J+`
`+nt)}else P!==""?jt("WebGLProgram: Program Info Log:",P):(z===""||q==="")&&(ft=!1);ft&&(A.diagnostics={runnable:W,programLog:P,vertexShader:{log:z,prefix:S},fragmentShader:{log:q,prefix:g}})}s.deleteShader(_),s.deleteShader(T),x=new Ys(s,p),M=s_(s,p)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(p,Zx)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jx++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=_,this.fragmentShader=T,this}var g_=0,ch=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new hh(t),e.set(t,n)),n}},hh=class{constructor(t){this.id=g_++,this.code=t,this.usedTimes=0}};function x_(i){return i===Bi||i===Qr||i===to}function __(i,t,e,n,s,r){let o=new yr,a=new ch,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,M,C,A,I,L){let B=A.fog,P=I.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=t.get(x.envMap||z,q),ft=f[x.type],J=n.precision;x.precision!==null&&(J=n.getMaxPrecision(x.precision),J!==x.precision&&jt("WebGLProgram.getParameters:",x.precision,"not supported, using",J,"instead."));let nt=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ot=nt!==void 0?nt.length:0,Ft=0;P.morphAttributes.position!==void 0&&(Ft=1),P.morphAttributes.normal!==void 0&&(Ft=2),P.morphAttributes.color!==void 0&&(Ft=3);let qt,j,Ct,Ot;if(ft){let Lt=Qn[ft];qt=Lt.vertexShader,j=Lt.fragmentShader}else{qt=x.vertexShader,j=x.fragmentShader;let Lt=a.getVertexShaderStage(x),Me=a.getFragmentShaderStage(x);a.update(x,Lt,Me),Ct=Lt.id,Ot=Me.id}let H=i.getRenderTarget(),X=i.state.buffers.depth.getReversed(),Z=I.isInstancedMesh===!0,It=I.isBatchedMesh===!0,$=!!x.map,at=!!x.matcap,ct=!!W,O=ct&&W.isPMREMTexture===!0,lt=!!x.aoMap,st=!!x.lightMap,dt=!!x.bumpMap&&x.wireframe===!1,ut=!!x.normalMap,rt=!!x.displacementMap,ht=!!x.emissiveMap,Mt=!!x.metalnessMap,Pt=!!x.roughnessMap,Yt=x.anisotropy>0,D=x.clearcoat>0,ie=x.diffuseRoughness>0,kt=x.dispersion>0,ue=x.retroreflectivity>0,vt=x.iridescence>0,Ce=x.sheen>0,Bt=x.transmission>0,Vt=Yt&&!!x.anisotropyMap,R=D&&!!x.clearcoatMap,E=D&&!!x.clearcoatNormalMap,G=D&&!!x.clearcoatRoughnessMap,pt=ie&&!!x.diffuseRoughnessMap,it=vt&&!!x.iridescenceMap,gt=vt&&!!x.iridescenceThicknessMap,St=Ce&&!!x.sheenColorMap,Q=Ce&&!!x.sheenRoughnessMap,tt=!!x.specularMap,Et=!!x.specularColorMap,N=!!x.specularIntensityMap,et=Bt&&!!x.transmissionMap,K=Bt&&!!x.thicknessMap,Tt=!!x.gradientMap,yt=!!x.alphaMap,bt=x.alphaTest>0,Zt=!!x.alphaHash,oe=!!x.extensions,_t=Kn;x.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(_t=i.toneMapping);let $t=O?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,re={shaderID:ft,shaderType:x.type,shaderName:x.name,vertexShader:qt,fragmentShader:j,defines:x.defines,customVertexShaderID:Ct,customFragmentShaderID:Ot,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:J,batching:It,batchingColor:It&&I._colorsTexture!==null,instancing:Z,instancingColor:Z&&I.instanceColor!==null,instancingMorph:Z&&I.morphTexture!==null,outputColorSpace:H===null?i.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:$,matcap:at,envMap:ct,envMapMode:ct&&W.mapping,envMapPMREM:O,envMapMaxLod:O?$t.length-1:null,envMapSize:O?$t[0].width:null,aoMap:lt,lightMap:st,bumpMap:dt,normalMap:ut,displacementMap:rt,emissiveMap:ht,normalMapObjectSpace:ut&&x.normalMapType===sf,normalMapTangentSpace:ut&&x.normalMapType===vl,packedNormalMap:ut&&x.normalMapType===vl&&x_(x.normalMap.format),metalnessMap:Mt,roughnessMap:Pt,anisotropy:Yt,anisotropyMap:Vt,clearcoat:D,clearcoatMap:R,clearcoatNormalMap:E,clearcoatRoughnessMap:G,diffuseRoughness:ie,diffuseRoughnessMap:pt,dispersion:kt,retroreflection:ue,iridescence:vt,iridescenceMap:it,iridescenceThicknessMap:gt,sheen:Ce,sheenColorMap:St,sheenRoughnessMap:Q,specularMap:tt,specularColorMap:Et,specularIntensityMap:N,transmission:Bt,transmissionMap:et,thicknessMap:K,gradientMap:Tt,opaque:x.transparent===!1&&x.blending===Ws&&x.alphaToCoverage===!1,alphaMap:yt,alphaTest:bt,alphaHash:Zt,combine:x.combine,mapUv:$&&d(x.map.channel),aoMapUv:lt&&d(x.aoMap.channel),lightMapUv:st&&d(x.lightMap.channel),bumpMapUv:dt&&d(x.bumpMap.channel),normalMapUv:ut&&d(x.normalMap.channel),displacementMapUv:rt&&d(x.displacementMap.channel),emissiveMapUv:ht&&d(x.emissiveMap.channel),metalnessMapUv:Mt&&d(x.metalnessMap.channel),roughnessMapUv:Pt&&d(x.roughnessMap.channel),anisotropyMapUv:Vt&&d(x.anisotropyMap.channel),clearcoatMapUv:R&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:E&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:pt&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:it&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:St&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:Q&&d(x.sheenRoughnessMap.channel),specularMapUv:tt&&d(x.specularMap.channel),specularColorMapUv:Et&&d(x.specularColorMap.channel),specularIntensityMapUv:N&&d(x.specularIntensityMap.channel),transmissionMapUv:et&&d(x.transmissionMap.channel),thicknessMapUv:K&&d(x.thicknessMap.channel),alphaMapUv:yt&&d(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ut||Yt),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!P.attributes.uv&&($||yt),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&ut===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:X,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:Ft,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:L.filter(Lt=>Lt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:_t,decodeVideoTexture:$&&x.map.isVideoTexture===!0&&pe.getTransfer(x.map.colorSpace)===ve,decodeVideoTextureEmissive:ht&&x.emissiveMap.isVideoTexture===!0&&pe.getTransfer(x.emissiveMap.colorSpace)===ve,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ae,flipSided:x.side===mn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:oe&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&x.extensions.multiDraw===!0||It)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function S(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)M.push(C),M.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(g(M,x),m(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function g(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function m(x,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){let M=f[x.type],C;if(M){let A=Qn[M];C=Ef.clone(A.uniforms)}else C=x.uniforms;return C}function v(x,M){let C=h.get(M);return C!==void 0?++C.usedTimes:(C=new m_(i,M,x,s),c.push(C),h.set(M,C)),C}function _(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function b(){a.dispose()}return{getParameters:p,getProgramCacheKey:S,getUniforms:y,acquireProgram:v,releaseProgram:_,releaseShaderCache:T,programs:c,dispose:b}}function v_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function y_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Wf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,S,g,m){let y=i[t];return y===void 0?(y={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:S,renderOrder:f.renderOrder,z:g,group:m},i[t]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=p,y.materialVariant=o(f),y.groupOrder=S,y.renderOrder=f.renderOrder,y.z=g,y.group=m),t++,y}function l(f,d,p,S,g,m,y){y.reversedDepth===!0&&(g=-g);let v=a(f,d,p,S,g,m);p.transmission>0?n.push(v):p.transparent===!0?s.push(v):e.push(v)}function c(f,d,p,S,g,m){let y=a(f,d,p,S,g,m);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):e.unshift(y)}function h(f,d){e.length>1&&e.sort(f||y_),n.length>1&&n.sort(d||Wf),s.length>1&&s.sort(d||Wf)}function u(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function M_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Xf,i.set(n,[o])):s>=r.length?(o=new Xf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function S_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new se};break;case"SpotLight":e={position:new U,direction:new U,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function b_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var E_=0;function T_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function w_(i){let t=new S_,e=b_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new ae,o=new ae;function a(c){let h=0,u=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,p=0,S=0,g=0,m=0,y=0,v=0,_=0,T=0,b=0,x=0,M=0,C=0,A=0;c.sort(T_);for(let L=0,B=c.length;L<B;L++){let P=c[L],z=P.color,q=P.intensity,W=P.distance,ft=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Bi?ft=P.shadow.map.texture:ft=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=z.r*q,u+=z.g*q,f+=z.b*q;else if(P.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(P.sh.coefficients[J],q);A++}else if(P.isSunLight){let J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let nt=P.shadow,ot=e.get(P);ot.shadowIntensity=nt.intensity,ot.shadowBias=nt.bias,ot.shadowNormalBias=nt.normalBias,ot.shadowRadius=nt.radius,ot.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),n.sunShadow[p]=ot,n.sunShadowMap[p]=ft;let Ft=nt.getViewportCount();for(let qt=0;qt<Ft;qt++)n.sunShadowMatrix[S+qt]=nt.getMatrix(qt),n.sunShadowCascade[S+qt]=nt._cascadeData[qt];S+=Ft,p++}n.sun[d]=J,d++}else if(P.isDirectionalLight){let J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let nt=P.shadow,ot=e.get(P);ot.shadowIntensity=nt.intensity,ot.shadowBias=nt.bias,ot.shadowNormalBias=nt.normalBias,ot.shadowRadius=nt.radius,ot.shadowMapSize=nt.mapSize,n.directionalShadow[g]=ot,n.directionalShadowMap[g]=ft,n.directionalShadowMatrix[g]=P.shadow.matrix,T++}n.directional[g]=J,g++}else if(P.isSpotLight){let J=t.get(P);J.position.setFromMatrixPosition(P.matrixWorld),J.color.copy(z).multiplyScalar(q),J.distance=W,J.coneCos=Math.cos(P.angle),J.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),J.decay=P.decay,n.spot[y]=J;let nt=P.shadow;if(P.map&&(n.spotLightMap[M]=P.map,M++,nt.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[y]=nt.matrix,P.castShadow){let ot=e.get(P);ot.shadowIntensity=nt.intensity,ot.shadowBias=nt.bias,ot.shadowNormalBias=nt.normalBias,ot.shadowRadius=nt.radius,ot.shadowMapSize=nt.mapSize,n.spotShadow[y]=ot,n.spotShadowMap[y]=ft,x++}y++}else if(P.isRectAreaLight){let J=t.get(P);J.color.copy(z).multiplyScalar(q),J.halfWidth.set(P.width*.5,0,0),J.halfHeight.set(0,P.height*.5,0),n.rectArea[v]=J,v++}else if(P.isPointLight){let J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),J.distance=P.distance,J.decay=P.decay,P.castShadow){let nt=P.shadow,ot=e.get(P);ot.shadowIntensity=nt.intensity,ot.shadowBias=nt.bias,ot.shadowNormalBias=nt.normalBias,ot.shadowRadius=nt.radius,ot.shadowMapSize=nt.mapSize,ot.shadowCameraNear=nt.camera.near,ot.shadowCameraFar=nt.camera.far,n.pointShadow[m]=ot,n.pointShadowMap[m]=ft,n.pointShadowMatrix[m]=P.shadow.matrix,b++}n.point[m]=J,m++}else if(P.isHemisphereLight){let J=t.get(P);J.skyColor.copy(P.color).multiplyScalar(q),J.groundColor.copy(P.groundColor).multiplyScalar(q),n.hemi[_]=J,_++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.sunLength!==d||I.directionalLength!==g||I.pointLength!==m||I.spotLength!==y||I.rectAreaLength!==v||I.hemiLength!==_||I.numSunShadows!==p||I.numDirectionalShadows!==T||I.numPointShadows!==b||I.numSpotShadows!==x||I.numSpotMaps!==M||I.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=g,n.spot.length=y,n.rectArea.length=v,n.point.length=m,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+M-C,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,I.sunLength=d,I.directionalLength=g,I.pointLength=m,I.spotLength=y,I.rectAreaLength=v,I.hemiLength=_,I.numSunShadows=p,I.numDirectionalShadows=T,I.numPointShadows=b,I.numSpotShadows=x,I.numSpotMaps=M,I.numLightProbes=A,n.version=E_++)}function l(c,h){let u=0,f=0,d=0,p=0,S=0,g=0,m=h.matrixWorldInverse;for(let y=0,v=c.length;y<v;y++){let _=c[y];if(_.isSunLight){let T=n.sun[u];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(m),u++}else if(_.isDirectionalLight){let T=n.directional[f];T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),f++}else if(_.isSpotLight){let T=n.spot[p];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let T=n.rectArea[S];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),T.halfWidth.set(_.width*.5,0,0),T.halfHeight.set(0,_.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),S++}else if(_.isPointLight){let T=n.point[d];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let T=n.hemi[g];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function qf(i){let t=new w_(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):e.push(u)}function a(u){n.push(u)}function l(){t.setup(e),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function A_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new qf(i),t.set(s,[a])):r>=o.length?(a=new qf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var R_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C_=`uniform sampler2D shadow_pass;
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
}`,I_=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],P_=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Yf=new ae,eo=new U,sh=new U;function L_(i,t,e){let n=new Di,s=new mt,r=new mt,o=new De,a=new xa,l=new _a,c={},h=e.maxTextureSize,u={[Oi]:mn,[mn]:Oi,[Ae]:Ae},f=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:R_,fragmentShader:C_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Be;p.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new xt(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yr;let m=this.type;this.render=function(b,x,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Pa&&(jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Yr);let C=i.getRenderTarget(),A=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),L=i.state;L.setBlending(ns),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let B=m!==this.type;B&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(z=>z.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,z=b.length;P<z;P++){let q=b[P],W=q.shadow;if(W===void 0){jt("WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ft=W.getFrameExtents();s.multiply(ft),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ft.x),s.x=r.x*ft.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ft.y),s.y=r.y*ft.y,W.mapSize.y=r.y));let J=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=J,W.map===null||B===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Vs){if(q.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Tn(s.x,s.y,{format:Bi,type:Gn,minFilter:dn,magFilter:dn,generateMipmaps:!1}),W.map.texture.name=q.name+".shadowMap",W.map.depthTexture=new pi(s.x,s.y,Dn),W.map.depthTexture.name=q.name+".shadowMapDepth",W.map.depthTexture.format=hi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Je,W.map.depthTexture.magFilter=Je}else q.isPointLight?(W.map=new io(s.x),W.map.depthTexture=new Rr(s.x,Hn)):(W.map=new Tn(s.x,s.y),W.map.depthTexture=new pi(s.x,s.y,Hn)),W.map.depthTexture.name=q.name+".shadowMap",W.map.depthTexture.format=hi,this.type===Yr?(W.map.depthTexture.compareFunction=J?Zc:Yc,W.map.depthTexture.minFilter=dn,W.map.depthTexture.magFilter=dn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Je,W.map.depthTexture.magFilter=Je);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let nt=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();q.isPointLight!==!0&&W.updateMatrices(q,M);let ot=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:M.layers;for(let Ft=0;Ft<nt;Ft++){let qt=W.getCamera(Ft);if(q.isPointLight){let j=W.camera,Ct=W.matrix,Ot=q.distance||j.far;Ot!==j.far&&(j.far=Ot,j.updateProjectionMatrix()),eo.setFromMatrixPosition(q.matrixWorld),j.position.copy(eo),sh.copy(j.position),sh.add(I_[Ft]),j.up.copy(P_[Ft]),j.lookAt(sh),j.updateMatrixWorld(),Ct.makeTranslation(-eo.x,-eo.y,-eo.z),Yf.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Yf,j.coordinateSystem,j.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,Ft),i.clear();else{Ft===0&&(i.setRenderTarget(W.map),i.clear());let j=W.getViewport(Ft);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),L.viewport(o)}n=W.getFrustum(Ft),_(x,M,qt,q,ot,this.type)}W.isPointLightShadow!==!0&&this.type===Vs&&y(W,M),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(C,A,I)};function y(b,x){let M=t.update(S);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Tn(s.x,s.y,{format:Bi,type:Gn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(x,null,M,f,S,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(x,null,M,d,S,null)}function v(b,x,M,C){let A=null,I=M.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)A=I;else if(A=M.isPointLight===!0?l:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let L=A.uuid,B=x.uuid,P=c[L];P===void 0&&(P={},c[L]=P);let z=P[B];z===void 0&&(z=A.clone(),P[B]=z,x.addEventListener("dispose",T)),A=z}if(A.visible=x.visible,A.wireframe=x.wireframe,C===Vs?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:u[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,M.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let L=i.properties.get(A);L.light=M}return A}function _(b,x,M,C,A,I){if(b.visible===!1)return;if(b.layers.test(A)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===Vs)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,b.matrixWorld);let P=t.update(b),z=b.material;if(Array.isArray(z)){let q=P.groups;for(let W=0,ft=q.length;W<ft;W++){let J=q[W],nt=z[J.materialIndex];if(nt&&nt.visible){let ot=v(b,nt,C,I);b.onBeforeShadow(i,b,x,M,P,ot,J),i.renderBufferDirect(M,null,P,ot,b,J),b.onAfterShadow(i,b,x,M,P,ot,J)}}}else if(z.visible){let q=v(b,z,C,I);b.onBeforeShadow(i,b,x,M,P,q,null),i.renderBufferDirect(M,null,P,q,b,null),b.onAfterShadow(i,b,x,M,P,q,null)}}let B=b.children;for(let P=0,z=B.length;P<z;P++)_(B[P],x,M,C,A,I)}function T(b){b.target.removeEventListener("dispose",T);for(let M in c){let C=c[M],A=b.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}function D_(i,t){function e(){let N=!1,et=new De,K=null,Tt=new De(0,0,0,0);return{setMask:function(yt){K!==yt&&!N&&(i.colorMask(yt,yt,yt,yt),K=yt)},setLocked:function(yt){N=yt},setClear:function(yt,bt,Zt,oe,_t){_t===!0&&(yt*=oe,bt*=oe,Zt*=oe),et.set(yt,bt,Zt,oe),Tt.equals(et)===!1&&(i.clearColor(yt,bt,Zt,oe),Tt.copy(et))},reset:function(){N=!1,K=null,Tt.set(-1,0,0,0)}}}function n(){let N=!1,et=!1,K=null,Tt=null,yt=null;return{setReversed:function(bt){if(et!==bt){let Zt=t.get("EXT_clip_control");bt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),et=bt;let oe=yt;yt=null,this.setClear(oe)}},getReversed:function(){return et},setTest:function(bt){bt?X(i.DEPTH_TEST):Z(i.DEPTH_TEST)},setMask:function(bt){K!==bt&&!N&&(i.depthMask(bt),K=bt)},setFunc:function(bt){if(et&&(bt=pf[bt]),Tt!==bt){switch(bt){case Zo:i.depthFunc(i.NEVER);break;case Jo:i.depthFunc(i.ALWAYS);break;case $o:i.depthFunc(i.LESS);break;case Ps:i.depthFunc(i.LEQUAL);break;case Ko:i.depthFunc(i.EQUAL);break;case jo:i.depthFunc(i.GEQUAL);break;case Qo:i.depthFunc(i.GREATER);break;case ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=bt}},setLocked:function(bt){N=bt},setClear:function(bt){yt!==bt&&(yt=bt,et&&(bt=1-bt),i.clearDepth(bt))},reset:function(){N=!1,K=null,Tt=null,yt=null,et=!1}}}function s(){let N=!1,et=null,K=null,Tt=null,yt=null,bt=null,Zt=null,oe=null,_t=null;return{setTest:function($t){N||($t?X(i.STENCIL_TEST):Z(i.STENCIL_TEST))},setMask:function($t){et!==$t&&!N&&(i.stencilMask($t),et=$t)},setFunc:function($t,re,Lt){(K!==$t||Tt!==re||yt!==Lt)&&(i.stencilFunc($t,re,Lt),K=$t,Tt=re,yt=Lt)},setOp:function($t,re,Lt){(bt!==$t||Zt!==re||oe!==Lt)&&(i.stencilOp($t,re,Lt),bt=$t,Zt=re,oe=Lt)},setLocked:function($t){N=$t},setClear:function($t){_t!==$t&&(i.clearStencil($t),_t=$t)},reset:function(){N=!1,et=null,K=null,Tt=null,yt=null,bt=null,Zt=null,oe=null,_t=null}}}let r=new e,o=new n,a=new s,l={},c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],S=null,g=!1,m=null,y=null,v=null,_=null,T=null,b=null,x=null,M=new se(0,0,0),C=0,A=!1,I=null,L=null,B=null,P=null,z=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ft=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(J)[1]),W=ft>=1):J.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),W=ft>=2);let nt=null,ot={},Ft=i.getParameter(i.SCISSOR_BOX),qt=i.getParameter(i.VIEWPORT),j=new De().fromArray(Ft),Ct=new De().fromArray(qt);function Ot(N,et,K,Tt){let yt=new Uint8Array(4),bt=i.createTexture();i.bindTexture(N,bt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<K;Zt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(et,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(et+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return bt}let H={};H[i.TEXTURE_2D]=Ot(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=Ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=Ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=Ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),X(i.DEPTH_TEST),o.setFunc(Ps),dt(!1),ut(Rc),X(i.CULL_FACE),lt(ns);function X(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Z(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function It(N,et){return f[N]!==et?(i.bindFramebuffer(N,et),f[N]=et,N===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=et),N===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=et),!0):!1}function $(N,et){let K=p,Tt=!1;if(N){K=d.get(et),K===void 0&&(K=[],d.set(et,K));let yt=N.textures;if(K.length!==yt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,Zt=yt.length;bt<Zt;bt++)K[bt]=i.COLOR_ATTACHMENT0+bt;K.length=yt.length,Tt=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(K)}function at(N){return S!==N?(i.useProgram(N),S=N,!0):!1}let ct={[is]:i.FUNC_ADD,[Fu]:i.FUNC_SUBTRACT,[Ou]:i.FUNC_REVERSE_SUBTRACT};ct[Bu]=i.MIN,ct[zu]=i.MAX;let O={[Hu]:i.ZERO,[Gu]:i.ONE,[ku]:i.SRC_COLOR,[Pc]:i.SRC_ALPHA,[Zu]:i.SRC_ALPHA_SATURATE,[qu]:i.DST_COLOR,[Wu]:i.DST_ALPHA,[Vu]:i.ONE_MINUS_SRC_COLOR,[Lc]:i.ONE_MINUS_SRC_ALPHA,[Yu]:i.ONE_MINUS_DST_COLOR,[Xu]:i.ONE_MINUS_DST_ALPHA,[Ju]:i.CONSTANT_COLOR,[$u]:i.ONE_MINUS_CONSTANT_COLOR,[Ku]:i.CONSTANT_ALPHA,[ju]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(N,et,K,Tt,yt,bt,Zt,oe,_t,$t){if(N===ns){g===!0&&(Z(i.BLEND),g=!1);return}if(g===!1&&(X(i.BLEND),g=!0),N!==Uu){if(N!==m||$t!==A){if((y!==is||T!==is)&&(i.blendEquation(i.FUNC_ADD),y=is,T=is),$t)switch(N){case Ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mi:i.blendFunc(i.ONE,i.ONE);break;case Cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ic:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qt("WebGLState: Invalid blending: ",N);break}else switch(N){case Ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Cc:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ic:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",N);break}v=null,_=null,b=null,x=null,M.set(0,0,0),C=0,m=N,A=$t}return}yt=yt||et,bt=bt||K,Zt=Zt||Tt,(et!==y||yt!==T)&&(i.blendEquationSeparate(ct[et],ct[yt]),y=et,T=yt),(K!==v||Tt!==_||bt!==b||Zt!==x)&&(i.blendFuncSeparate(O[K],O[Tt],O[bt],O[Zt]),v=K,_=Tt,b=bt,x=Zt),(oe.equals(M)===!1||_t!==C)&&(i.blendColor(oe.r,oe.g,oe.b,_t),M.copy(oe),C=_t),m=N,A=!1}function st(N,et){N.side===Ae?Z(i.CULL_FACE):X(i.CULL_FACE);let K=N.side===mn;et&&(K=!K),dt(K),N.blending===Ws&&N.transparent===!1?lt(ns):lt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let Tt=N.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ht(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):Z(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(N){I!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),I=N)}function ut(N){N!==Du?(X(i.CULL_FACE),N!==L&&(N===Rc?i.cullFace(i.BACK):N===Nu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Z(i.CULL_FACE),L=N}function rt(N){N!==B&&(W&&i.lineWidth(N),B=N)}function ht(N,et,K){N?(X(i.POLYGON_OFFSET_FILL),(P!==et||z!==K)&&(P=et,z=K,o.getReversed()&&(et=-et,K=-K),i.polygonOffset(et,K))):Z(i.POLYGON_OFFSET_FILL)}function Mt(N){N?X(i.SCISSOR_TEST):Z(i.SCISSOR_TEST)}function Pt(N){N===void 0&&(N=i.TEXTURE0+q-1),nt!==N&&(i.activeTexture(N),nt=N)}function Yt(N,et,K){K===void 0&&(nt===null?K=i.TEXTURE0+q-1:K=nt);let Tt=ot[K];Tt===void 0&&(Tt={type:void 0,texture:void 0},ot[K]=Tt),(Tt.type!==N||Tt.texture!==et)&&(nt!==K&&(i.activeTexture(K),nt=K),i.bindTexture(N,et||H[N]),Tt.type=N,Tt.texture=et)}function D(){let N=ot[nt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ie(){try{i.compressedTexImage2D(...arguments)}catch(N){Qt("WebGLState:",N)}}function kt(){try{i.compressedTexImage3D(...arguments)}catch(N){Qt("WebGLState:",N)}}function ue(){try{i.texSubImage2D(...arguments)}catch(N){Qt("WebGLState:",N)}}function vt(){try{i.texSubImage3D(...arguments)}catch(N){Qt("WebGLState:",N)}}function Ce(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Qt("WebGLState:",N)}}function Bt(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Qt("WebGLState:",N)}}function Vt(){try{i.texStorage2D(...arguments)}catch(N){Qt("WebGLState:",N)}}function R(){try{i.texStorage3D(...arguments)}catch(N){Qt("WebGLState:",N)}}function E(){try{i.texImage2D(...arguments)}catch(N){Qt("WebGLState:",N)}}function G(){try{i.texImage3D(...arguments)}catch(N){Qt("WebGLState:",N)}}function pt(N){return u[N]!==void 0?u[N]:i.getParameter(N)}function it(N,et){u[N]!==et&&(i.pixelStorei(N,et),u[N]=et)}function gt(N){j.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),j.copy(N))}function St(N){Ct.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Ct.copy(N))}function Q(N,et){let K=c.get(et);K===void 0&&(K=new WeakMap,c.set(et,K));let Tt=K.get(N);Tt===void 0&&(Tt=i.getUniformBlockIndex(et,N.name),i.uniformBlockBinding(et,Tt,Tt),K.set(N,Tt))}function tt(N,et,K){let yt=c.get(et).get(N);l[yt]!==K&&(i.bindBufferBase(i.UNIFORM_BUFFER,yt,K),l[yt]=K)}function Et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},nt=null,ot={},f={},l={},d=new WeakMap,p=[],S=null,g=!1,m=null,y=null,v=null,_=null,T=null,b=null,x=null,M=new se(0,0,0),C=0,A=!1,I=null,L=null,B=null,P=null,z=null,j.set(0,0,i.canvas.width,i.canvas.height),Ct.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:X,disable:Z,bindFramebuffer:It,drawBuffers:$,useProgram:at,setBlending:lt,setMaterial:st,setFlipSided:dt,setCullFace:ut,setLineWidth:rt,setPolygonOffset:ht,setScissorTest:Mt,activeTexture:Pt,bindTexture:Yt,unbindTexture:D,compressedTexImage2D:ie,compressedTexImage3D:kt,texImage2D:E,texImage3D:G,pixelStorei:it,getParameter:pt,updateUBOMapping:Q,uniformBlockBinding:tt,texStorage2D:Vt,texStorage3D:R,texSubImage2D:ue,texSubImage3D:vt,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Bt,scissor:gt,viewport:St,reset:Et}}function N_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,h=new WeakMap,u=new Set,f,d=new WeakMap,p=new Set,S=new FinalizationRegistry(R=>p.delete(R)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,E){return g?new OffscreenCanvas(R,E):xr("canvas")}function y(R,E,G){let pt=1,it=Vt(R);if((it.width>G||it.height>G)&&(pt=G/Math.max(it.width,it.height)),pt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let gt=Math.floor(pt*it.width),St=Math.floor(pt*it.height);f===void 0&&(f=m(gt,St));let Q=E?m(gt,St):f;return Q.width=gt,Q.height=St,Q.getContext("2d").drawImage(R,0,0,gt,St),jt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+gt+"x"+St+")."),Q}else return"data"in R&&jt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),R;return R}function v(R){return R.generateMipmaps}function _(R){i.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(R,E,G,pt,it,gt=!1){if(R!==null){if(i[R]!==void 0)return i[R];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let St;pt&&(St=t.get("EXT_texture_norm16"),St||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=E;if(E===i.RED&&(G===i.FLOAT&&(Q=i.R32F),G===i.HALF_FLOAT&&(Q=i.R16F),G===i.UNSIGNED_BYTE&&(Q=i.R8),G===i.UNSIGNED_SHORT&&St&&(Q=St.R16_EXT),G===i.SHORT&&St&&(Q=St.R16_SNORM_EXT)),E===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.R8UI),G===i.UNSIGNED_SHORT&&(Q=i.R16UI),G===i.UNSIGNED_INT&&(Q=i.R32UI),G===i.BYTE&&(Q=i.R8I),G===i.SHORT&&(Q=i.R16I),G===i.INT&&(Q=i.R32I)),E===i.RG&&(G===i.FLOAT&&(Q=i.RG32F),G===i.HALF_FLOAT&&(Q=i.RG16F),G===i.UNSIGNED_BYTE&&(Q=i.RG8),G===i.UNSIGNED_SHORT&&St&&(Q=St.RG16_EXT),G===i.SHORT&&St&&(Q=St.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RG8UI),G===i.UNSIGNED_SHORT&&(Q=i.RG16UI),G===i.UNSIGNED_INT&&(Q=i.RG32UI),G===i.BYTE&&(Q=i.RG8I),G===i.SHORT&&(Q=i.RG16I),G===i.INT&&(Q=i.RG32I)),E===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),G===i.UNSIGNED_INT&&(Q=i.RGB32UI),G===i.BYTE&&(Q=i.RGB8I),G===i.SHORT&&(Q=i.RGB16I),G===i.INT&&(Q=i.RGB32I)),E===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),G===i.UNSIGNED_INT&&(Q=i.RGBA32UI),G===i.BYTE&&(Q=i.RGBA8I),G===i.SHORT&&(Q=i.RGBA16I),G===i.INT&&(Q=i.RGBA32I)),E===i.RGB&&(G===i.UNSIGNED_SHORT&&St&&(Q=St.RGB16_EXT),G===i.SHORT&&St&&(Q=St.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),E===i.RGBA){let tt=gt?gr:pe.getTransfer(it);G===i.FLOAT&&(Q=i.RGBA32F),G===i.HALF_FLOAT&&(Q=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Q=tt===ve?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&St&&(Q=St.RGBA16_EXT),G===i.SHORT&&St&&(Q=St.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function x(R,E){let G;return R?E===null||E===Hn||E===rs?G=i.DEPTH24_STENCIL8:E===Dn?G=i.DEPTH32F_STENCIL8:E===qs&&(G=i.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Hn||E===rs?G=i.DEPTH_COMPONENT24:E===Dn?G=i.DEPTH_COMPONENT32F:E===qs&&(G=i.DEPTH_COMPONENT16),G}function M(R,E){return v(R)===!0||R.isFramebufferTexture&&R.minFilter!==Je&&R.minFilter!==dn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function C(R){let E=new WeakRef(R);n.get(R).__ref=E,p.add(E),S.register(R,E,E)}function A(R){let E=n.get(R).__ref;E!==void 0&&(p.delete(E),S.unregister(E))}function I(R){B(R.target)}function L(R){P(R.target)}function B(R){R.removeEventListener("dispose",I),A(R),q(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function P(R){R.removeEventListener("dispose",L),A(R),ft(R)}function z(){for(let R of p){let E=R.deref();E!==void 0&&(E.isRenderTarget===!0?P(E):B(E))}p.clear(),u.clear()}function q(R){let E=n.get(R);if(E.__webglInit===void 0)return;let G=R.source,pt=d.get(G);if(pt){let it=pt[E.__cacheKey];it.usedTimes--,it.usedTimes===0&&W(R),Object.keys(pt).length===0&&d.delete(G)}n.remove(R)}function W(R){let E=n.get(R);i.deleteTexture(E.__webglTexture);let G=R.source,pt=d.get(G);delete pt[E.__cacheKey],o.memory.textures--}function ft(R){let E=n.get(R);E.__depthDisposeCallback&&E.__depthDisposeCallback();let G=R.depthTexture;if(G&&G.renderTarget===R&&B(G),R.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(E.__webglFramebuffer[it]))for(let gt=0;gt<E.__webglFramebuffer[it].length;gt++)i.deleteFramebuffer(E.__webglFramebuffer[it][gt]);else i.deleteFramebuffer(E.__webglFramebuffer[it]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[it])}else{if(Array.isArray(E.__webglFramebuffer))for(let it=0;it<E.__webglFramebuffer.length;it++)i.deleteFramebuffer(E.__webglFramebuffer[it]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let it=0;it<E.__webglColorRenderbuffer.length;it++)E.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[it]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let pt=R.textures;for(let it=0,gt=pt.length;it<gt;it++){let St=n.get(pt[it]);St.__webglTexture&&(i.deleteTexture(St.__webglTexture),o.memory.textures--),n.remove(pt[it])}n.remove(R)}let J=0;function nt(){J=0}function ot(){return J}function Ft(R){J=R}function qt(){let R=J;return R>=s.maxTextures&&jt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),J+=1,R}function j(R){let E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.mipmapsAutoUpdate),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function Ct(R,E){let G=n.get(R);if(R.isVideoTexture&&Ce(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){let pt=R.image;if(pt===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{st(G,R,E);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+E)}function Ot(R,E){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){st(G,R,E);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+E)}function H(R,E){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){st(G,R,E);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+E)}function X(R,E){let G=n.get(R);if(R.version>0&&G.__version!==R.version){dt(G,R,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+E)}let Z={[Qi]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[ea]:i.MIRRORED_REPEAT},It={[Je]:i.NEAREST,[ef]:i.NEAREST_MIPMAP_NEAREST,[Zr]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[Ua]:i.LINEAR_MIPMAP_NEAREST,[gi]:i.LINEAR_MIPMAP_LINEAR},$={[of]:i.NEVER,[Jc]:i.ALWAYS,[af]:i.LESS,[Yc]:i.LEQUAL,[lf]:i.EQUAL,[Zc]:i.GEQUAL,[cf]:i.GREATER,[hf]:i.NOTEQUAL};function at(R,E){if(E.type===Dn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===dn||E.magFilter===Ua||E.magFilter===Zr||E.magFilter===gi||E.minFilter===dn||E.minFilter===Ua||E.minFilter===Zr||E.minFilter===gi)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Z[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Z[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Z[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,It[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,It[E.minFilter]),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,$[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Je||E.minFilter!==Zr&&E.minFilter!==gi||E.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ct(R,E){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",I),C(E));let pt=E.source,it=d.get(pt);it===void 0&&(it={},d.set(pt,it));let gt=j(E);if(gt!==R.__cacheKey){it[gt]===void 0&&(it[gt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),it[gt].usedTimes++;let St=it[R.__cacheKey];St!==void 0&&(it[R.__cacheKey].usedTimes--,St.usedTimes===0&&W(E)),R.__cacheKey=gt,R.__webglTexture=it[gt].texture}return G}function O(R,E,G){return Math.floor(Math.floor(R/G)/E)}function lt(R,E,G,pt){let gt=R.updateRanges;if(gt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,G,pt,E.data);else{gt.sort((N,et)=>N.start-et.start);let St=0;for(let N=1;N<gt.length;N++){let et=gt[St],K=gt[N],Tt=et.start+et.count,yt=O(K.start,E.width,4),bt=O(et.start,E.width,4);K.start<=Tt+1&&yt===bt&&O(K.start+K.count-1,E.width,4)===yt?et.count=Math.max(et.count,K.start+K.count-et.start):(++St,gt[St]=K)}gt.length=St+1;let Q=e.getParameter(i.UNPACK_ROW_LENGTH),tt=e.getParameter(i.UNPACK_SKIP_PIXELS),Et=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let N=0,et=gt.length;N<et;N++){let K=gt[N],Tt=Math.floor(K.start/4),yt=Math.ceil(K.count/4),bt=Tt%E.width,Zt=Math.floor(Tt/E.width),oe=yt,_t=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,bt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Zt),e.texSubImage2D(i.TEXTURE_2D,0,bt,Zt,oe,_t,G,pt,E.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Q),e.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Et)}}function st(R,E,G){let pt=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pt=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pt=i.TEXTURE_3D);let it=ct(R,E),gt=E.source;e.bindTexture(pt,R.__webglTexture,i.TEXTURE0+G);let St=n.get(gt);if(gt.version!==St.__version||it===!0){if(e.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let _t=pe.getPrimaries(pe.workingColorSpace),$t=E.colorSpace===_i?null:pe.getPrimaries(E.colorSpace),re=E.colorSpace===_i||_t===$t?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let tt=y(E.image,!1,s.maxTextureSize);tt=Bt(E,tt);let Et=r.convert(E.format,E.colorSpace),N=r.convert(E.type),et=b(E.internalFormat,Et,N,E.normalized,E.colorSpace,E.isVideoTexture);at(pt,E);let K,Tt=E.mipmaps,yt=E.isVideoTexture!==!0,bt=St.__version===void 0||it===!0,Zt=gt.dataReady,oe=M(E,tt);if(E.isDepthTexture)et=x(E.format===xi,E.type),bt&&(yt?e.texStorage2D(i.TEXTURE_2D,1,et,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,et,tt.width,tt.height,0,Et,N,null));else if(E.isDataTexture)if(Tt.length>0){yt&&bt&&e.texStorage2D(i.TEXTURE_2D,oe,et,Tt[0].width,Tt[0].height);for(let _t=0,$t=Tt.length;_t<$t;_t++)K=Tt[_t],yt?Zt&&e.texSubImage2D(i.TEXTURE_2D,_t,0,0,K.width,K.height,Et,N,K.data):e.texImage2D(i.TEXTURE_2D,_t,et,K.width,K.height,0,Et,N,K.data);E.generateMipmaps=!1}else yt?(bt&&e.texStorage2D(i.TEXTURE_2D,oe,et,tt.width,tt.height),Zt&&lt(E,tt,Et,N)):e.texImage2D(i.TEXTURE_2D,0,et,tt.width,tt.height,0,Et,N,tt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){yt&&bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,oe,et,Tt[0].width,Tt[0].height,tt.depth);for(let _t=0,$t=Tt.length;_t<$t;_t++)if(K=Tt[_t],E.format!==kn)if(Et!==null)if(yt){if(Zt)if(E.layerUpdates.size>0){let re=nh(K.width,K.height,E.format,E.type);for(let Lt of E.layerUpdates){let Me=K.data.subarray(Lt*re/K.data.BYTES_PER_ELEMENT,(Lt+1)*re/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,Lt,K.width,K.height,1,Et,Me)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,0,K.width,K.height,tt.depth,Et,K.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_t,et,K.width,K.height,tt.depth,0,K.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else yt?Zt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,0,K.width,K.height,tt.depth,Et,N,K.data):e.texImage3D(i.TEXTURE_2D_ARRAY,_t,et,K.width,K.height,tt.depth,0,Et,N,K.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{yt&&bt&&e.texStorage2D(i.TEXTURE_2D,oe,et,Tt[0].width,Tt[0].height);for(let _t=0,$t=Tt.length;_t<$t;_t++)K=Tt[_t],E.format!==kn?Et!==null?yt?Zt&&e.compressedTexSubImage2D(i.TEXTURE_2D,_t,0,0,K.width,K.height,Et,K.data):e.compressedTexImage2D(i.TEXTURE_2D,_t,et,K.width,K.height,0,K.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?Zt&&e.texSubImage2D(i.TEXTURE_2D,_t,0,0,K.width,K.height,Et,N,K.data):e.texImage2D(i.TEXTURE_2D,_t,et,K.width,K.height,0,Et,N,K.data)}else if(E.isDataArrayTexture)if(yt){if(bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,oe,et,tt.width,tt.height,tt.depth),Zt)if(E.layerUpdates.size>0){let _t=nh(tt.width,tt.height,E.format,E.type);for(let $t of E.layerUpdates){let re=tt.data.subarray($t*_t/tt.data.BYTES_PER_ELEMENT,($t+1)*_t/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$t,tt.width,tt.height,1,Et,N,re)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,Et,N,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,et,tt.width,tt.height,tt.depth,0,Et,N,tt.data);else if(E.isData3DTexture)yt?(bt&&e.texStorage3D(i.TEXTURE_3D,oe,et,tt.width,tt.height,tt.depth),Zt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,Et,N,tt.data)):e.texImage3D(i.TEXTURE_3D,0,et,tt.width,tt.height,tt.depth,0,Et,N,tt.data);else if(E.isFramebufferTexture){if(bt)if(yt)e.texStorage2D(i.TEXTURE_2D,oe,et,tt.width,tt.height);else{let _t=tt.width,$t=tt.height;for(let re=0;re<oe;re++)e.texImage2D(i.TEXTURE_2D,re,et,_t,$t,0,Et,N,null),_t>>=1,$t>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let _t=i.canvas;if(_t.hasAttribute("layoutsubtree")||_t.setAttribute("layoutsubtree","true"),tt.parentNode!==_t){_t.appendChild(tt),u.add(E),_t.onpaint=$t=>{let re=$t.changedElements;for(let Lt of u)re.includes(Lt.image)&&(Lt.needsUpdate=!0)},_t.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,tt);else{let re=i.RGBA,Lt=i.RGBA,Me=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,re,Lt,Me,tt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Tt.length>0){if(yt&&bt){let _t=Vt(Tt[0]);e.texStorage2D(i.TEXTURE_2D,oe,et,_t.width,_t.height)}for(let _t=0,$t=Tt.length;_t<$t;_t++)K=Tt[_t],yt?Zt&&e.texSubImage2D(i.TEXTURE_2D,_t,0,0,Et,N,K):e.texImage2D(i.TEXTURE_2D,_t,et,Et,N,K);E.generateMipmaps=!1}else if(yt){if(bt){let _t=Vt(tt);e.texStorage2D(i.TEXTURE_2D,oe,et,_t.width,_t.height)}Zt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,N,tt)}else e.texImage2D(i.TEXTURE_2D,0,et,Et,N,tt);v(E)&&E.mipmapsAutoUpdate===!0&&_(pt),St.__version=gt.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function dt(R,E,G){if(E.image.length!==6)return;let pt=ct(R,E),it=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);let gt=n.get(it);if(it.version!==gt.__version||pt===!0){e.activeTexture(i.TEXTURE0+G);let St=pe.getPrimaries(pe.workingColorSpace),Q=E.colorSpace===_i?null:pe.getPrimaries(E.colorSpace),tt=E.colorSpace===_i||St===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let Et=E.isCompressedTexture||E.image[0].isCompressedTexture,N=E.image[0]&&E.image[0].isDataTexture,et=[];for(let Lt=0;Lt<6;Lt++)!Et&&!N?et[Lt]=y(E.image[Lt],!0,s.maxCubemapSize):et[Lt]=N?E.image[Lt].image:E.image[Lt],et[Lt]=Bt(E,et[Lt]);let K=et[0],Tt=r.convert(E.format,E.colorSpace),yt=r.convert(E.type),bt=b(E.internalFormat,Tt,yt,E.normalized,E.colorSpace),Zt=E.isVideoTexture!==!0,oe=gt.__version===void 0||pt===!0,_t=it.dataReady,$t=M(E,K);at(i.TEXTURE_CUBE_MAP,E);let re;if(E.isDepthTexture){if(bt=x(E.format===xi,E.type),oe)if(Zt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,bt,K.width,K.height);else for(let Lt=0;Lt<6;Lt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,bt,K.width,K.height,0,Tt,yt,null)}else if(Et){Zt&&oe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,$t,bt,K.width,K.height);for(let Lt=0;Lt<6;Lt++){re=et[Lt].mipmaps;for(let Me=0;Me<re.length;Me++){let qe=re[Me];E.format!==kn?Tt!==null?Zt?_t&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Me,0,0,qe.width,qe.height,Tt,qe.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Me,bt,qe.width,qe.height,0,qe.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Me,0,0,qe.width,qe.height,Tt,yt,qe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Me,bt,qe.width,qe.height,0,Tt,yt,qe.data)}}}else{if(re=E.mipmaps,Zt&&oe){re.length>0&&$t++;let Lt=Vt(et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,$t,bt,Lt.width,Lt.height)}for(let Lt=0;Lt<6;Lt++)if(N){Zt?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,0,0,et[Lt].width,et[Lt].height,Tt,yt,et[Lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,bt,et[Lt].width,et[Lt].height,0,Tt,yt,et[Lt].data);for(let Me=0;Me<re.length;Me++){let Ei=re[Me].image[Lt].image;Zt?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Me+1,0,0,Ei.width,Ei.height,Tt,yt,Ei.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Me+1,bt,Ei.width,Ei.height,0,Tt,yt,Ei.data)}}else{Zt?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,0,0,Tt,yt,et[Lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,bt,Tt,yt,et[Lt]);for(let Me=0;Me<re.length;Me++){let qe=re[Me];Zt?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Me+1,0,0,Tt,yt,qe.image[Lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Me+1,bt,Tt,yt,qe.image[Lt])}}}v(E)&&E.mipmapsAutoUpdate===!0&&_(i.TEXTURE_CUBE_MAP),gt.__version=it.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ut(R,E,G,pt,it,gt){let St=r.convert(G.format,G.colorSpace),Q=r.convert(G.type),tt=b(G.internalFormat,St,Q,G.normalized,G.colorSpace),Et=n.get(E),N=n.get(G);if(N.__renderTarget=E,!Et.__hasExternalTextures){let et=Math.max(1,E.width>>gt),K=Math.max(1,E.height>>gt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,gt,tt,et,K,E.depth,0,St,Q,null):e.texImage2D(it,gt,tt,et,K,0,St,Q,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),vt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,it,N.__webglTexture,0,ue(E)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pt,it,N.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(R,E,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer){let pt=E.depthTexture,it=pt&&pt.isDepthTexture?pt.type:null,gt=x(E.stencilBuffer,it),St=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;vt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(E),gt,E.width,E.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(E),gt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,gt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,R)}else{let pt=E.textures;for(let it=0;it<pt.length;it++){let gt=pt[it],St=r.convert(gt.format,gt.colorSpace),Q=r.convert(gt.type),tt=b(gt.internalFormat,St,Q,gt.normalized,gt.colorSpace);vt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(E),tt,E.width,E.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(E),tt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,tt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(R,E,G){let pt=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(E.depthTexture);it.__renderTarget=E;let gt=pt?E.depthTexture.image[0]:E.depthTexture.image;(!it.__webglTexture||gt.width!==E.width||gt.height!==E.height)&&(gt.width=E.width,gt.height=E.height,E.depthTexture.needsUpdate=!0),pt?X(E.depthTexture,0):Ct(E.depthTexture,0);let St=it.__webglTexture,Q=ue(E),tt=pt?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,Et=E.depthTexture.format===xi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===hi)vt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Et,tt,St,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,Et,tt,St,0);else if(E.depthTexture.format===xi)vt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Et,tt,St,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,Et,tt,St,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Mt(R){let E=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){let pt=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pt){let it=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pt.removeEventListener("dispose",it)};pt.addEventListener("dispose",it),E.__depthDisposeCallback=it}E.__boundDepthTexture=pt}if(R.depthTexture&&!E.__autoAllocateDepthBuffer)if(G)for(let pt=0;pt<6;pt++)ht(E.__webglFramebuffer[pt],R,pt);else R.texture.mipmaps.length>0?ht(E.__webglFramebuffer[0],R,0):ht(E.__webglFramebuffer,R,0);else if(G){E.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[pt]),E.__webglDepthbuffer[pt]===void 0)E.__webglDepthbuffer[pt]=i.createRenderbuffer(),rt(E.__webglDepthbuffer[pt],R,!1);else{let it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=E.__webglDepthbuffer[pt];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,gt)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),rt(E.__webglDepthbuffer,R,!1);else{let it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,gt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(R,E,G){let pt=n.get(R);E!==void 0&&ut(pt.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Mt(R)}function Yt(R){let E=R.texture,G=n.get(R),pt=n.get(E);R.addEventListener("dispose",L),C(R);let it=R.textures,gt=R.isWebGLCubeRenderTarget===!0,St=it.length>1;if(St||(pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture()),pt.__version=E.version,o.memory.textures++),gt){G.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(E.mipmaps.length>0){G.__webglFramebuffer[Q]=[];for(let tt=0;tt<E.mipmaps.length;tt++)G.__webglFramebuffer[Q][tt]=i.createFramebuffer()}else G.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(E.mipmaps.length>0){G.__webglFramebuffer=[];for(let Q=0;Q<E.mipmaps.length;Q++)G.__webglFramebuffer[Q]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(St)for(let Q=0,tt=it.length;Q<tt;Q++){let Et=n.get(it[Q]);Et.__webglTexture===void 0&&(Et.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&vt(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Q=0;Q<it.length;Q++){let tt=it[Q];G.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Q]);let Et=r.convert(tt.format,tt.colorSpace),N=r.convert(tt.type),et=b(tt.internalFormat,Et,N,tt.normalized,tt.colorSpace,R.isXRRenderTarget===!0),K=ue(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,K,et,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,G.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,pt.__webglTexture),at(i.TEXTURE_CUBE_MAP,E);for(let Q=0;Q<6;Q++)if(E.mipmaps.length>0)for(let tt=0;tt<E.mipmaps.length;tt++)ut(G.__webglFramebuffer[Q][tt],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,tt);else ut(G.__webglFramebuffer[Q],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);v(E)?_(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}else if(St){for(let Q=0,tt=it.length;Q<tt;Q++){let Et=it[Q],N=n.get(Et),et=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(et=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,N.__webglTexture),at(et,Et),ut(G.__webglFramebuffer,R,Et,i.COLOR_ATTACHMENT0+Q,et,0),v(Et)&&_(et)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Q=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,pt.__webglTexture),at(Q,E),E.mipmaps.length>0)for(let tt=0;tt<E.mipmaps.length;tt++)ut(G.__webglFramebuffer[tt],R,E,i.COLOR_ATTACHMENT0,Q,tt);else ut(G.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,Q,0);v(E)?_(Q):E.mipmaps.length>0&&i.texParameteri(Q,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&Mt(R)}function D(R){let E=R.textures;for(let G=0,pt=E.length;G<pt;G++){let it=E[G];if(v(it)&&it.mipmapsAutoUpdate===!0){let gt=T(R),St=n.get(it).__webglTexture;e.bindTexture(gt,St),_(gt),e.unbindTexture()}}}let ie=[];function kt(R){if(R.samples>0){if(vt(R)===!1){let E=R.textures,G=R.width,pt=R.height,it=i.COLOR_BUFFER_BIT,gt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(R),Q=E.length>1;if(Q)for(let Et=0;Et<E.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Et=0;Et<E.length;Et++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[Et]);let N=n.get(E[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,G,pt,0,0,G,pt,it,i.NEAREST),l===!0&&(ie.length=0,ie.push(i.COLOR_ATTACHMENT0+Et),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&ie.push(gt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let Et=0;Et<E.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,St.__webglColorRenderbuffer[Et]);let N=n.get(E[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,N,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let E=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function ue(R){return Math.min(s.maxSamples,R.samples)}function vt(R){let E=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ce(R){let E=o.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function Bt(R,E){let G=R.colorSpace,pt=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==mr&&G!==_i&&(pe.getTransfer(G)===ve?(pt!==kn||it!==yn)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",G)),E}function Vt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=qt,this.resetTextureUnits=nt,this.getTextureUnits=ot,this.setTextureUnits=Ft,this.setTexture2D=Ct,this.setTexture2DArray=Ot,this.setTexture3D=H,this.setTextureCube=X,this.rebindTextures=Pt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=vt,this.dispose=z}function U_(i,t){function e(n,s=_i){let r,o=pe.getTransfer(s);if(n===yn)return i.UNSIGNED_BYTE;if(n===Oa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ba)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gc)return i.BYTE;if(n===kc)return i.SHORT;if(n===qs)return i.UNSIGNED_SHORT;if(n===Fa)return i.INT;if(n===Hn)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===Gn)return i.HALF_FLOAT;if(n===Xc)return i.ALPHA;if(n===qc)return i.RGB;if(n===kn)return i.RGBA;if(n===hi)return i.DEPTH_COMPONENT;if(n===xi)return i.DEPTH_STENCIL;if(n===za)return i.RED;if(n===Ha)return i.RED_INTEGER;if(n===Bi)return i.RG;if(n===Ga)return i.RG_INTEGER;if(n===ka)return i.RGBA_INTEGER;if(n===Jr||n===$r||n===Kr||n===jr)if(o===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Va||n===Wa||n===Xa||n===qa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ya||n===Za||n===Ja||n===$a||n===Ka||n===Qr||n===ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ya||n===Za)return o===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ja)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===$a)return r.COMPRESSED_R11_EAC;if(n===Ka)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Qr)return r.COMPRESSED_RG11_EAC;if(n===ja)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Qa||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===fl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qa)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===el)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===il)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ol)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===al)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ll)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ul)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dl||n===pl||n===ml)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===dl)return o===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gl||n===xl||n===to||n===_l)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===gl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===to)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var F_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O_=`
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

}`,uh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Cr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new $n({vertexShader:F_,fragmentShader:O_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xt(new Pe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fh=class extends Zn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,S=typeof XRWebGLBinding<"u",g=new uh,m={},y=e.getContextAttributes(),v=null,_=null,T=[],b=[],x=new mt,M=null,C=null,A=new fn;A.viewport=new De;let I=new fn;I.viewport=new De;let L=[A,I],B=new Ia,P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Ct=T[j];return Ct===void 0&&(Ct=new Us,T[j]=Ct),Ct.getTargetRaySpace()},this.getControllerGrip=function(j){let Ct=T[j];return Ct===void 0&&(Ct=new Us,T[j]=Ct),Ct.getGripSpace()},this.getHand=function(j){let Ct=T[j];return Ct===void 0&&(Ct=new Us,T[j]=Ct),Ct.getHandSpace()};function q(j){let Ct=b.indexOf(j.inputSource);if(Ct===-1)return;let Ot=T[Ct];Ot!==void 0&&(Ot.update(j.inputSource,j.frame,c||o),Ot.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ft);for(let j=0;j<T.length;j++){let Ct=b[j];Ct!==null&&(b[j]=null,T[j].disconnect(Ct))}P=null,z=null,g.reset();for(let j in m)delete m[j];if(t.setRenderTarget(v),d=null,f=null,u=null,s=null,_=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(x.width,x.height,!1),C!==null){let j=C.camera;j.fov=C.fov,j.zoom=C.zoom,j.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&S&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ft),y.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(x),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ot=null,H=null,X=null;y.depth&&(X=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ot=y.stencil?xi:hi,H=y.stencil?rs:Hn);let Z={colorFormat:e.RGBA8,depthFormat:X,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Z),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Tn(f.textureWidth,f.textureHeight,{format:kn,type:yn,depthTexture:new pi(f.textureWidth,f.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,Ot),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Ot={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Ot),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Tn(d.framebufferWidth,d.framebufferHeight,{format:kn,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ft(j){for(let Ct=0;Ct<j.removed.length;Ct++){let Ot=j.removed[Ct],H=b.indexOf(Ot);H>=0&&(b[H]=null,T[H].disconnect(Ot))}for(let Ct=0;Ct<j.added.length;Ct++){let Ot=j.added[Ct],H=b.indexOf(Ot);if(H===-1){for(let Z=0;Z<T.length;Z++)if(Z>=b.length){b.push(Ot),H=Z;break}else if(b[Z]===null){b[Z]=Ot,H=Z;break}if(H===-1)break}let X=T[H];X&&X.connect(Ot)}}function J(j,Ct){Ct===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Ct.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let Ct=j.near,Ot=j.far;g.texture!==null&&(g.depthNear>0&&(Ct=g.depthNear),g.depthFar>0&&(Ot=g.depthFar)),B.near=I.near=A.near=Ct,B.far=I.far=A.far=Ot,(P!==B.near||z!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),P=B.near,z=B.far),B.layers.mask=j.layers.mask|6,A.layers.mask=B.layers.mask&-5,I.layers.mask=B.layers.mask&-3;let H=j.parent,X=B.cameras;J(B,H);for(let Z=0;Z<X.length;Z++)J(X[Z],H);B.projectionMatrix.copy(A.projectionMatrix),B.projectionMatrixInverse.copy(A.projectionMatrixInverse),C===null&&j.isPerspectiveCamera&&(C={camera:j,fov:j.fov,zoom:j.zoom}),nt(j,B,H)};function nt(j,Ct,Ot){Ot===null?j.matrix.copy(Ct.matrixWorld):(j.matrix.copy(Ot.matrixWorld),j.matrix.invert(),j.matrix.multiply(Ct.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Ct.projectionMatrix),j.projectionMatrixInverse.copy(Ct.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ia*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(j){return m[j]};let ot=null;function Ft(j,Ct){if(h=Ct.getViewerPose(c||o),p=Ct,h!==null){let Ot=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let H=!1;Ot.length!==B.cameras.length&&(B.cameras.length=0,H=!0);for(let $=0;$<Ot.length;$++){let at=Ot[$],ct=null;if(d!==null)ct=d.getViewport(at);else{let lt=u.getViewSubImage(f,at);ct=lt.viewport,$===0&&(t.setRenderTargetTextures(_,lt.colorTexture,lt.depthStencilTexture),t.setRenderTarget(_))}let O=L[$];O===void 0&&(O=new fn,O.layers.enable($),O.viewport=new De,L[$]=O),O.matrix.fromArray(at.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(at.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(ct.x,ct.y,ct.width,ct.height),$===0&&(B.matrix.copy(O.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),H===!0&&B.cameras.push(O)}let X=s.enabledFeatures;if(X&&X.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){u=n.getBinding();let $=u.getDepthInformation(Ot[0]);$&&$.isValid&&$.texture&&g.init($,s.renderState)}if(X&&X.includes("camera-access")&&S){t.state.unbindTexture(),u=n.getBinding();for(let $=0;$<Ot.length;$++){let at=Ot[$].camera;if(at){let ct=m[at];ct||(ct=new Cr,m[at]=ct);let O=u.getCameraImage(at);ct.sourceTexture=O}}}}for(let Ot=0;Ot<T.length;Ot++){let H=b[Ot],X=T[Ot];H!==null&&X!==void 0&&X.update(H,Ct,c||o)}ot&&ot(j,Ct),Ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Ct}),p=null}let qt=new Zf;qt.setAnimationLoop(Ft),this.setAnimationLoop=function(j){ot=j},this.dispose=function(){}}},B_=new ae,sd=new te;sd.set(-1,0,0,0,1,0,0,0,1);function z_(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Qc(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,v,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),S(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,y,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===mn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===mn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=t.get(m),v=y.envMap,_=y.envMapRotation;v&&(g.envMap.value=v,g.envMapRotation.value.setFromMatrix4(B_.makeRotationFromEuler(_)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(sd),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=v*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,y){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===mn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function S(g,m){let y=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function H_(i,t,e,n){let s={},r={};function o(y,v){let _=v.program;n.uniformBlockBinding(y,_,s[y.id])}function a(y,v){let _=s[y.id];_===void 0&&(p(y),_=l(y),s[y.id]=_,y.addEventListener("dispose",g));let T=v.program;n.updateUBOMapping(y,T);let b=t.render.frame;r[y.id]!==b&&(c(y),r[y.id]=b)}function l(y){let v=i.createBuffer(),_=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,_,T),i.bindBuffer(i.UNIFORM_BUFFER,null),v}function c(y){let v=s[y.id],_=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,x=_.length;b<x;b++){let M=_[b];if(Array.isArray(M))for(let C=0,A=M.length;C<A;C++)h(M[C],b,C,T);else h(M,b,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,v,_,T){if(f(y,v,_,T)===!0){let b=y.__offset,x=y.value;if(Array.isArray(x)){let M=0;for(let C=0;C<x.length;C++){let A=x[C],I=S(A,!0);u(A,y.__data,M),M+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,y.__data)}}function u(y,v,_){typeof y=="number"||typeof y=="boolean"?v[_]=y:y.isMatrix3?(v[_]=y.elements[0],v[_+1]=y.elements[1],v[_+2]=y.elements[2],v[_+3]=0,v[_+4]=y.elements[3],v[_+5]=y.elements[4],v[_+6]=y.elements[5],v[_+7]=0,v[_+8]=y.elements[6],v[_+9]=y.elements[7],v[_+10]=y.elements[8],v[_+11]=0):ArrayBuffer.isView(y)?v.set(y.subarray(0,v.length-_),_):y.toArray(v,_)}function f(y,v,_,T){let b=y.value,x=v+"_"+_;if(Array.isArray(b)){T[x]===void 0&&(T[x]=[]);let M=T[x],C=!1;for(let A=0;A<b.length;A++)d(b[A],M,A)===!0&&(C=!0);return C}return d(b,T,x)}function d(y,v,_){if(v[_]===void 0)return typeof y=="number"||typeof y=="boolean"?v[_]=y:ArrayBuffer.isView(y)?v[_]=y.slice():v[_]=y.clone(),!0;{let T=v[_];if(typeof y=="number"||typeof y=="boolean"){if(T!==y)return v[_]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(T.equals(y)===!1)return T.copy(y),!0}}return!1}function p(y){let v=y.uniforms,_=0,T=16;for(let x=0,M=v.length;x<M;x++){let C=Array.isArray(v[x])?v[x]:[v[x]];for(let A=0,I=C.length;A<I;A++){let L=C[A],B=Array.isArray(L.value)?L.value:[L.value],P=Array.isArray(v[x])||Array.isArray(L.value),z=_;for(let W=0,ft=B.length;W<ft;W++){let J=B[W],nt=S(J,P),ot=_%T,Ft=ot%nt.boundary,qt=ot+Ft;_+=Ft,qt!==0&&T-qt<nt.storage&&(_+=T-qt),W===0&&(z=_),_+=nt.storage}let q=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new q((_-z)/Float32Array.BYTES_PER_ELEMENT),L.__offset=z}}let b=_%T;return b>0&&(_+=T-b),y.__size=_,y.__cache={},this}function S(y,v){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=16,_.storage=48):y.isMatrix4?(_.boundary=16,_.storage=64):y.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(_.boundary=16,_.storage=y.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",y),v===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function g(y){let v=y.target;v.removeEventListener("dispose",g),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:m}}var G_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),jn=null;function k_(){return jn===null&&(jn=new wr(G_,16,16,Bi,Gn),jn.name="DFG_LUT",jn.minFilter=dn,jn.magFilter=dn,jn.wrapS=Yn,jn.wrapT=Yn,jn.generateMipmaps=!1,jn.needsUpdate=!0),jn}var El=class{constructor(t={}){let{canvas:e=uf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=yn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let S=d,g=new Set([ka,Ga,Ha]),m=new Set([yn,Hn,qs,rs,Oa,Ba]),y=new Uint32Array(4),v=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},T=null,b=null,x=[],M=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,I=!1,L=null,B=null,P=null,z=null;this._outputColorSpace=Fe;let q=0,W=0,ft=null,J=-1,nt=null,ot=new De,Ft=new De,qt=null,j=new se(0),Ct=0,Ot=e.width,H=e.height,X=1,Z=null,It=null,$=new De(0,0,Ot,H),at=new De(0,0,Ot,H),ct=!1,O=new Di,lt=new la,st=!1,dt=!1,ut=new ae,rt=new U,ht=new De,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pt=!1;function Yt(){return ft===null?X:1}let D=n;function ie(w,F){return e.getContext(w,F)}let kt,ue,vt,Ce,Bt,Vt,R,E,G,pt,it,gt,St,Q,tt,Et,N,et,K,Tt,yt,bt,Zt;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",$t,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",Lt,!1),D===null){let F="webgl2";if(D=ie(F,w),D===null)throw ie(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}oe()}catch(w){throw e.removeEventListener("webglcontextlost",$t,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),Qt("WebGLRenderer: "+w.message),w}function oe(){kt=new Qg(D),kt.init(),yt=new U_(D,kt),ue=new kg(D,kt,t,yt),vt=new D_(D,kt),ue.reversedDepthBuffer&&f&&vt.buffers.depth.setReversed(!0),B=D.createFramebuffer(),P=D.createFramebuffer(),z=D.createFramebuffer(),Ce=new nx(D),Bt=new v_,Vt=new N_(D,kt,vt,Bt,ue,yt,Ce),R=new jg(A),E=new sm(D),bt=new Hg(D,E),G=new tx(D,E,Ce,bt),pt=new sx(D,G,E,bt,Ce),et=new ix(D,ue,Vt),tt=new Vg(Bt),it=new __(A,R,kt,ue,bt,tt),gt=new z_(A,Bt),St=new M_,Q=new A_(kt),N=new zg(A,R,vt,pt,p,l),Et=new L_(A,pt,ue),Zt=new H_(D,Ce,ue,vt),K=new Gg(D,kt,Ce),Tt=new ex(D,kt,Ce),Ce.programs=it.programs,A.capabilities=ue,A.extensions=kt,A.properties=Bt,A.renderLists=St,A.shadowMap=Et,A.state=vt,A.info=Ce}S!==yn&&(C=new ox(S,e.width,e.height,a,s,r));let _t=new fh(A,D);this.xr=_t,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=kt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=kt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(Ot,H,!1))},this.getSize=function(w){return w.set(Ot,H)},this.setSize=function(w,F,Y=!0){if(_t.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ot=w,H=F,e.width=Math.floor(w*X),e.height=Math.floor(F*X),Y===!0&&(e.style.width=w+"px",e.style.height=F+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(Ot*X,H*X).floor()},this.setDrawingBufferSize=function(w,F,Y){Ot=w,H=F,X=Y,e.width=Math.floor(w*Y),e.height=Math.floor(F*Y),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(S===yn){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ot)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,F,Y,k){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,F,Y,k),vt.viewport(ot.copy($).multiplyScalar(Yt()).round())},this.getScissor=function(w){return w.copy(at)},this.setScissor=function(w,F,Y,k){w.isVector4?at.set(w.x,w.y,w.z,w.w):at.set(w,F,Y,k),vt.scissor(Ft.copy(at).multiplyScalar(Yt()).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(w){vt.setScissorTest(ct=w)},this.setOpaqueSort=function(w){Z=w},this.setTransparentSort=function(w){It=w},this.getClearColor=function(w){return w.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,Y=!0){let k=0;if(w){let V=!1;if(ft!==null){let At=ft.texture.format;V=g.has(At)}if(V){let At=ft.texture.type,zt=m.has(At),wt=N.getClearColor(),Nt=N.getClearAlpha(),Xt=wt.r,ee=wt.g,fe=wt.b;zt?(y[0]=Xt,y[1]=ee,y[2]=fe,y[3]=Nt,D.clearBufferuiv(D.COLOR,0,y)):(v[0]=Xt,v[1]=ee,v[2]=fe,v[3]=Nt,D.clearBufferiv(D.COLOR,0,v))}else k|=D.COLOR_BUFFER_BIT}F&&(k|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),L=w},this.dispose=function(){e.removeEventListener("webglcontextlost",$t,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),N.dispose(),St.dispose(),Q.dispose(),Vt.dispose(),Bt.dispose(),R.dispose(),pt.dispose(),G.dispose(),bt.dispose(),Zt.dispose(),it.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",Vh),_t.removeEventListener("sessionend",Wh),Xi.stop()};function $t(w){w.preventDefault(),_r("WebGLRenderer: Context Lost."),I=!0}function re(){_r("WebGLRenderer: Context Restored."),I=!1;let w=Ce.autoReset,F=Et.enabled,Y=Et.autoUpdate,k=Et.needsUpdate,V=Et.type;oe(),Ce.autoReset=w,Et.enabled=F,Et.autoUpdate=Y,Et.needsUpdate=k,Et.type=V}function Lt(w){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Me(w){let F=w.target;F.removeEventListener("dispose",Me),qe(F)}function qe(w){Ei(w),Bt.remove(w)}function Ei(w){let F=Bt.get(w).programs;F!==void 0&&(F.forEach(function(Y){it.releaseProgram(Y)}),w.isShaderMaterial&&it.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,Y,k,V,At){F===null&&(F=Mt);let zt=V.isMesh&&V.matrixWorld.determinantAffine()<0,wt=kd(w,F,Y,k,V);vt.setMaterial(k,zt);let Nt=Y.index,Xt=1;if(k.wireframe===!0){if(Nt=G.getWireframeAttribute(Y),Nt===void 0)return;Xt=2}let ee=Y.drawRange,fe=Y.attributes.position,Ht=ee.start*Xt,de=(ee.start+ee.count)*Xt;At!==null&&(Ht=Math.max(Ht,At.start*Xt),de=Math.min(de,(At.start+At.count)*Xt)),Nt!==null?(Ht=Math.max(Ht,0),de=Math.min(de,Nt.count)):fe!=null&&(Ht=Math.max(Ht,0),de=Math.min(de,fe.count));let ze=de-Ht;if(ze<0||ze===1/0)return;bt.setup(V,k,wt,Y,Nt);let Te,Ee=K;if(Nt!==null&&(Te=E.get(Nt),Ee=Tt,Ee.setIndex(Te)),V.isMesh)k.wireframe===!0?(vt.setLineWidth(k.wireframeLinewidth*Yt()),Ee.setMode(D.LINES)):Ee.setMode(D.TRIANGLES);else if(V.isLine){let sn=k.linewidth;sn===void 0&&(sn=1),vt.setLineWidth(sn*Yt()),V.isLineSegments?Ee.setMode(D.LINES):V.isLineLoop?Ee.setMode(D.LINE_LOOP):Ee.setMode(D.LINE_STRIP)}else V.isPoints?Ee.setMode(D.POINTS):V.isSprite&&Ee.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(kt.get("WEBGL_multi_draw"))Ee.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let sn=V._multiDrawStarts,Gt=V._multiDrawCounts,hn=V._multiDrawCount,_e=Nt?E.get(Nt).bytesPerElement:1,qi=Bt.get(k).currentProgram.getUniforms();for(let rn=0;rn<hn;rn++)qi.setValue(D,"_gl_DrawID",rn),Ee.render(sn[rn]/_e,Gt[rn])}else if(V.isInstancedMesh)Ee.renderInstances(Ht,ze,V.count);else if(Y.isInstancedBufferGeometry){let sn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Gt=Math.min(Y.instanceCount,sn);Ee.renderInstances(Ht,ze,Gt)}else Ee.render(Ht,ze)};function kh(w,F,Y,k){L!==null&&w.isNodeMaterial&&L.setObject(k,w),st===!0&&tt.setState(w,Y,!1),w.transparent===!0&&w.side===Ae&&w.forceSinglePass===!1?(w.side=mn,w.needsUpdate=!0,tr(w,F,k),w.side=Oi,w.needsUpdate=!0,tr(w,F,k),w.side=Ae):tr(w,F,k)}this.compile=function(w,F,Y=null){Y===null&&(Y=w),L!==null&&L.renderStart(w,F,Y),b=Q.get(Y),b.init(F),M.push(b),Y.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),w!==Y&&w.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights(),L!==null&&L.updateLights(b.state.lightsArray),dt=this.localClippingEnabled,st=tt.init(this.clippingPlanes,dt),st===!0&&tt.setGlobalState(this.clippingPlanes,F),L!==null&&Et.render(b.state.shadowsArray,Y,F);let k=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let At=V.material;if(At)if(Array.isArray(At))for(let zt=0;zt<At.length;zt++){let wt=At[zt];kh(wt,Y,F,V),k.add(wt)}else kh(At,Y,F,V),k.add(At)}),b=M.pop(),L!==null&&L.renderEnd(),k},this.compileAsync=function(w,F,Y=null){let k=this.compile(w,F,Y);return new Promise(V=>{function At(){if(k.forEach(function(zt){let Nt=Bt.get(zt).currentProgram;(Nt===void 0||Nt.isReady())&&k.delete(zt)}),k.size===0){V(w);return}setTimeout(At,10)}kt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Vl=null;function Hd(w){Vl&&Vl(w)}function Vh(){Xi.stop()}function Wh(){Xi.start()}let Xi=new Zf;Xi.setAnimationLoop(Hd),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(w){Vl=w,_t.setAnimationLoop(w),w===null?Xi.stop():Xi.start()},_t.addEventListener("sessionstart",Vh),_t.addEventListener("sessionend",Wh),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(w,F);let Y=_t.enabled===!0&&_t.isPresenting===!0,k=C!==null&&(ft===null||Y)&&C.begin(A,ft);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(F),F=_t.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,F,ft),b=Q.get(w,M.length),b.init(F),b.state.textureUnits=Vt.getTextureUnits(),M.push(b),ut.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?lt.setFromArrayCamera(F):O.setFromProjectionMatrix(ut,Pn,F.reversedDepth),dt=this.localClippingEnabled,st=tt.init(this.clippingPlanes,dt),T=St.get(w,x.length),T.init(),x.push(T),this.info.render.frame++,_t.enabled===!0&&_t.isPresenting===!0){let zt=A.xr.getDepthSensingMesh();zt!==null&&Wl(zt,F,-1/0,A.sortObjects)}Wl(w,F,0,A.sortObjects),T.finish(),L!==null&&L.updateLights(b.state.lightsArray),A.sortObjects===!0&&T.sort(Z,It),Pt=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,Pt&&N.addToRenderList(T,w),this.info.autoReset===!0&&this.info.reset(),st===!0&&tt.beginShadows();let V=b.state.shadowsArray;if(Et.render(V,w,F),st===!0&&tt.endShadows(),(k&&C.hasRenderPass())===!1){let zt=T.opaque,wt=T.transmissive;if(b.setupLights(),F.isArrayCamera){let Nt=F.cameras;if(wt.length>0)for(let Xt=0,ee=Nt.length;Xt<ee;Xt++){let fe=Nt[Xt];qh(zt,wt,w,fe)}Pt&&N.render(w);for(let Xt=0,ee=Nt.length;Xt<ee;Xt++){let fe=Nt[Xt];Xh(T,w,fe,fe.viewport)}}else wt.length>0&&qh(zt,wt,w,F),Pt&&N.render(w),Xh(T,w,F)}ft!==null&&W===0&&(Vt.updateMultisampleRenderTarget(ft),Vt.updateRenderTargetMipmap(ft)),k&&C.end(A),w.isScene===!0&&w.onAfterRender(A,w,F),bt.resetDefaultState(),J=-1,nt=null,M.pop(),M.length>0?(b=M[M.length-1],Vt.setTextureUnits(b.state.textureUnits),st===!0&&tt.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,L!==null&&L.renderEnd()};function Wl(w,F,Y,k){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){let zt=F.isArrayCamera?lt:O;if(!w.frustumCulled||w.intersectsFrustum(zt)){k&&ht.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ut);let wt=pt.update(w),Nt=w.material;Nt.visible&&T.push(w,wt,Nt,Y,ht.z,null,F)}}else if(w.isMesh||w.isLine||w.isPoints){let zt=F.isArrayCamera?lt:O;if(!w.frustumCulled||w.intersectsFrustum(zt)){let wt=pt.update(w),Nt=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ht.copy(w.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),ht.copy(wt.boundingSphere.center)),ht.applyMatrix4(w.matrixWorld).applyMatrix4(ut)),Array.isArray(Nt)){let Xt=wt.groups;for(let ee=0,fe=Xt.length;ee<fe;ee++){let Ht=Xt[ee],de=Nt[Ht.materialIndex];de&&de.visible&&T.push(w,wt,de,Y,ht.z,Ht,F)}}else Nt.visible&&T.push(w,wt,Nt,Y,ht.z,null,F)}}}let At=w.children;for(let zt=0,wt=At.length;zt<wt;zt++)Wl(At[zt],F,Y,k)}function Xh(w,F,Y,k){let{opaque:V,transmissive:At,transparent:zt}=w;b.setupLightsView(Y),st===!0&&tt.setGlobalState(A.clippingPlanes,Y),k&&vt.viewport(ot.copy(k)),V.length>0&&_o(V,F,Y),At.length>0&&_o(At,F,Y),zt.length>0&&_o(zt,F,Y),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function qh(w,F,Y,k){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[k.id]===void 0){let Ht=kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[k.id]=new Tn(1,1,{generateMipmaps:!0,type:Ht?Gn:yn,minFilter:gi,samples:Math.max(4,ue.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pe.workingColorSpace})}let At=b.state.transmissionRenderTarget[k.id],zt=k.viewport||ot;At.setSize(zt.z*A.transmissionResolutionScale,zt.w*A.transmissionResolutionScale);let wt=A.getRenderTarget(),Nt=A.getActiveCubeFace(),Xt=A.getActiveMipmapLevel();A.setRenderTarget(At),A.getClearColor(j),Ct=A.getClearAlpha(),Ct<1&&A.setClearColor(16777215,.5),A.clear(),Pt&&N.render(Y);let ee=A.toneMapping;A.toneMapping=Kn;let fe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),b.setupLightsView(k),st===!0&&tt.setGlobalState(A.clippingPlanes,k),_o(w,Y,k),Vt.updateMultisampleRenderTarget(At),Vt.updateRenderTargetMipmap(At),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let de=0,ze=F.length;de<ze;de++){let Te=F[de],{object:Ee,geometry:sn,material:Gt,group:hn}=Te;if(Gt.side===Ae&&Ee.layers.test(k.layers)){let _e=Gt.side;Gt.side=mn,Gt.needsUpdate=!0,Yh(Ee,Y,k,sn,Gt,hn),Gt.side=_e,Gt.needsUpdate=!0,Ht=!0}}Ht===!0&&(Vt.updateMultisampleRenderTarget(At),Vt.updateRenderTargetMipmap(At))}A.setRenderTarget(wt,Nt,Xt),A.setClearColor(j,Ct),fe!==void 0&&(k.viewport=fe),A.toneMapping=ee}function _o(w,F,Y){let k=F.isScene===!0?F.overrideMaterial:null;for(let V=0,At=w.length;V<At;V++){let zt=w[V],{object:wt,geometry:Nt,group:Xt}=zt,ee=zt.material;ee.allowOverride===!0&&k!==null&&(ee=k),wt.layers.test(Y.layers)&&Yh(wt,F,Y,Nt,ee,Xt)}}function Yh(w,F,Y,k,V,At){L!==null&&V.isNodeMaterial&&L.setObject(w,V),w.onBeforeRender(A,F,Y,k,V,At),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(A,F,Y,k,w,At),V.transparent===!0&&V.side===Ae&&V.forceSinglePass===!1?(V.side=mn,V.needsUpdate=!0,A.renderBufferDirect(Y,F,k,V,w,At),V.side=Oi,V.needsUpdate=!0,A.renderBufferDirect(Y,F,k,V,w,At),V.side=Ae):A.renderBufferDirect(Y,F,k,V,w,At),w.onAfterRender(A,F,Y,k,V,At)}function Zh(w){let F=0;for(let Y of w)Y.texture!==null&&F++;return F}function tr(w,F,Y){F.isScene!==!0&&(F=Mt);let k=Bt.get(w),V=b.state.lights,At=b.state.shadowsArray,zt=V.state.version,wt=it.getParameters(w,V.state,At,F,Y,b.state.lightProbeGridArray),Nt=it.getProgramCacheKey(wt),Xt=k.programs;k.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,k.fog=F.fog;let ee=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;k.envMap=R.get(w.envMap||k.environment,ee),k.envMapRotation=k.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Xt===void 0&&(w.addEventListener("dispose",Me),Xt=new Map,k.programs=Xt,k.programVariants=new Map);let fe=Xt.get(Nt);if(fe!==void 0){if(k.currentProgram===fe&&k.lightsStateVersion===zt)return $h(w,wt),fe}else wt.uniforms=it.getUniforms(w),L!==null&&w.isNodeMaterial&&L.build(w,Y,wt),w.onBeforeCompile(wt,A),fe=it.acquireProgram(wt,Nt),Xt.set(Nt,fe),k.uniforms=wt.uniforms;let Ht=k.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ht.clippingPlanes=tt.uniform),$h(w,wt),k.needsLights=Wd(w),k.lightsStateVersion=zt,k.needsLights&&(Ht.ambientLightColor.value=V.state.ambient,Ht.lightProbe.value=V.state.probe,Ht.sunLights.value=V.state.sun,Ht.sunLightShadows.value=V.state.sunShadow,Ht.directionalLights.value=V.state.directional,Ht.directionalLightShadows.value=V.state.directionalShadow,Ht.spotLights.value=V.state.spot,Ht.spotLightShadows.value=V.state.spotShadow,Ht.rectAreaLights.value=V.state.rectArea,Ht.ltc_1.value=V.state.rectAreaLTC1,Ht.ltc_2.value=V.state.rectAreaLTC2,Ht.pointLights.value=V.state.point,Ht.pointLightShadows.value=V.state.pointShadow,Ht.hemisphereLights.value=V.state.hemi,Ht.sunShadowMatrix.value=V.state.sunShadowMatrix,Ht.sunShadowCascade.value=V.state.sunShadowCascade,Ht.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ht.spotLightMatrix.value=V.state.spotLightMatrix,Ht.spotLightMap.value=V.state.spotLightMap,Ht.pointShadowMatrix.value=V.state.pointShadowMatrix),k.numLightProbeGrids=Zh(b.state.lightProbeGridArray),k.currentProgram=fe,k.uniformsList=null,fe}function Gd(w,F,Y,k,V){let At=Bt.get(w),zt=At.currentProgram.id+","+k+","+V,wt=At.programVariants.get(zt);return wt===void 0?(wt=tr(w,F,Y),At.programVariants.set(zt,wt)):(At.currentProgram=wt,At.uniformsList=null,At.outputColorSpace=k,At.toneMapping=V),wt}function Jh(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=Ys.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function $h(w,F){let Y=Bt.get(w);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function kd(w,F,Y,k,V){F.isScene!==!0&&(F=Mt),Vt.resetTextureUnits();let At=F.fog,zt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?F.environment:null,wt=ft===null?A.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:pe.workingColorSpace,Nt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Xt=R.get(k.envMap||zt,Nt),ee=k.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,fe=!!Y.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ht=!!Y.morphAttributes.position,de=!!Y.morphAttributes.normal,ze=!!Y.morphAttributes.color,Te=Kn;k.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Te=A.toneMapping);let Ee=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,sn=Ee!==void 0?Ee.length:0,Gt=Bt.get(k),hn=b.state.lights;if(st===!0&&(dt===!0||w!==nt)){let Ue=w===nt&&k.id===J;tt.setState(k,w,Ue)}let _e=!1,qi=!1;k.version===Gt.__version?Gt.needsLights&&Gt.lightsStateVersion!==hn.state.version||V.isBatchedMesh&&Gt.batching===!1||!V.isBatchedMesh&&Gt.batching===!0||V.isBatchedMesh&&Gt.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Gt.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Gt.instancing===!1||!V.isInstancedMesh&&Gt.instancing===!0||V.isSkinnedMesh&&Gt.skinning===!1||!V.isSkinnedMesh&&Gt.skinning===!0||V.isInstancedMesh&&Gt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Gt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Gt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Gt.instancingMorph===!1&&V.morphTexture!==null||Gt.envMap!==Xt||k.fog===!0&&Gt.fog!==At||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==tt.numPlanes||Gt.numIntersection!==tt.numIntersection)||Gt.vertexAlphas!==ee||Gt.vertexTangents!==fe||Gt.morphTargets!==Ht||Gt.morphNormals!==de||Gt.morphColors!==ze||Gt.morphTargetsCount!==sn||Gt.numLightProbeGrids!==Zh(b.state.lightProbeGridArray)?_e=!0:(Gt.outputColorSpace!==wt||Gt.toneMapping!==Te)&&(qi=!0):(_e=!0,Gt.__version=k.version);let rn=Gt.currentProgram;(_e===!0||qi===!0)&&(rn=qi===!0?Gd(k,F,V,wt,Te):tr(k,F,V),L&&k.isNodeMaterial&&L.onUpdateProgram(k,rn,Gt));let vo=!1,Ti=!1,Yi=!1,ge=rn.getUniforms(),je=Gt.uniforms;if(vt.useProgram(rn.program)&&(vo=!0,Ti=!0,Yi=!0),k.id!==J&&(J=k.id,Ti=!0),vo||nt!==w){vt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ge.setValue(D,"projectionMatrix",w.projectionMatrix),ge.setValue(D,"viewMatrix",w.matrixWorldInverse);let Ye=ge.map.cameraPosition;Ye!==void 0&&Ye.setValue(D,rt.setFromMatrixPosition(w.matrixWorld)),ue.logarithmicDepthBuffer&&ge.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ge.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),nt!==w&&(nt=w,Ti=!0,Yi=!0)}if(Gt.needsLights&&(hn.state.sunShadowMap.length>0&&ge.setValue(D,"sunShadowMap",hn.state.sunShadowMap,Vt),hn.state.directionalShadowMap.length>0&&ge.setValue(D,"directionalShadowMap",hn.state.directionalShadowMap,Vt),hn.state.spotShadowMap.length>0&&ge.setValue(D,"spotShadowMap",hn.state.spotShadowMap,Vt),hn.state.pointShadowMap.length>0&&ge.setValue(D,"pointShadowMap",hn.state.pointShadowMap,Vt)),V.isSkinnedMesh){ge.setOptional(D,V,"bindMatrix"),ge.setOptional(D,V,"bindMatrixInverse");let Ue=V.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),ge.setValue(D,"boneTexture",Ue.boneTexture,Vt))}V.isBatchedMesh&&(ge.setOptional(D,V,"batchingTexture"),ge.setValue(D,"batchingTexture",V._matricesTexture,Vt),ge.setOptional(D,V,"batchingIdTexture"),ge.setValue(D,"batchingIdTexture",V._indirectTexture,Vt),ge.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&ge.setValue(D,"batchingColorTexture",V._colorsTexture,Vt));let Un=Y.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&et.update(V,Y,rn),(Ti||Gt.receiveShadow!==V.receiveShadow)&&(Gt.receiveShadow=V.receiveShadow,ge.setValue(D,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&F.environment!==null&&(je.envMapIntensity.value=F.environmentIntensity),je.dfgLUT!==void 0&&(je.dfgLUT.value=k_()),Ti){if(ge.setValue(D,"toneMappingExposure",A.toneMappingExposure),Gt.needsLights&&Vd(je,Yi),At&&k.fog===!0&&gt.refreshFogUniforms(je,At),gt.refreshMaterialUniforms(je,k,X,H,b.state.transmissionRenderTarget[w.id]),Gt.needsLights&&Gt.numLightProbeGrids>0){let Ue=_,Ye=0;for(let ni of b.state.lightProbeGridArray)ni.texture!==null&&(Ue.textures[Ye]=ni.texture,Ue.min[Ye]=ni.boundingBox.min,Ue.max[Ye]=ni.boundingBox.max,Ue.resolution[Ye]=ni.resolution,Ye++);for(let ni in Ue)Ue[ni].length=Ye;je.probesSH.value=Ue.textures,je.probesMin.value=Ue.min,je.probesMax.value=Ue.max,je.probesResolution.value=Ue.resolution}Ys.upload(D,Jh(Gt),je,Vt)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ys.upload(D,Jh(Gt),je,Vt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ge.setValue(D,"center",V.center),ge.setValue(D,"modelViewMatrix",V.modelViewMatrix),ge.setValue(D,"normalMatrix",V.normalMatrix),ge.setValue(D,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){let Ue=k.uniformsGroups;for(let Ye=0,ni=Ue.length;Ye<ni;Ye++){let jh=Ue[Ye];Zt.update(jh,rn),Zt.bind(jh,rn)}}return rn}function Vd(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.sunLights.needsUpdate=F,w.sunLightShadows.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Wd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ft},this.setRenderTargetTextures=function(w,F,Y){let k=Bt.get(w);k.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Bt.get(w.texture).__webglTexture=F,Bt.get(w.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:Y,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){let Y=Bt.get(w);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,Y=0){ft=w,q=F,W=Y;let k=null,V=!1,At=!1;if(w){let wt=Bt.get(w);if(wt.__useDefaultFramebuffer!==void 0){vt.bindFramebuffer(D.FRAMEBUFFER,wt.__webglFramebuffer),ot.copy(w.viewport),Ft.copy(w.scissor),qt=w.scissorTest,vt.viewport(ot),vt.scissor(Ft),vt.setScissorTest(qt),J=-1;return}else if(wt.__webglFramebuffer===void 0)Vt.setupRenderTarget(w);else if(wt.__hasExternalTextures)Vt.rebindTextures(w,Bt.get(w.texture).__webglTexture,Bt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let ee=w.depthTexture;if(wt.__boundDepthTexture!==ee){if(ee!==null&&Bt.has(ee)&&(w.width!==ee.image.width||w.height!==ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(w)}}let Nt=w.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(At=!0);let Xt=Bt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xt[F])?k=Xt[F][Y]:k=Xt[F],V=!0):w.samples>0&&Vt.useMultisampledRTT(w)===!1?k=Bt.get(w).__webglMultisampledFramebuffer:Array.isArray(Xt)?k=Xt[Y]:k=Xt,ot.copy(w.viewport),Ft.copy(w.scissor),qt=w.scissorTest}else ot.copy($).multiplyScalar(X).floor(),Ft.copy(at).multiplyScalar(X).floor(),qt=ct;if(Y!==0&&(k=B),vt.bindFramebuffer(D.FRAMEBUFFER,k)&&vt.drawBuffers(w,k),vt.viewport(ot),vt.scissor(Ft),vt.setScissorTest(qt),V){let wt=Bt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,wt.__webglTexture,Y)}else if(At){let wt=F;for(let Nt=0;Nt<w.textures.length;Nt++){let Xt=Bt.get(w.textures[Nt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Nt,Xt.__webglTexture,Y,wt)}}else if(w!==null&&Y!==0){let wt=Bt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,wt.__webglTexture,Y)}J=-1};function Kh(w){let F=Bt.get(w);return(F.__readFormat!==w.format||F.__readType!==w.type)&&(F.__readFormat=w.format,F.__readType=w.type,F.__formatReadable=ue.textureFormatReadable(w.format),F.__typeReadable=ue.textureTypeReadable(w.type)),F}this.readRenderTargetPixels=function(w,F,Y,k,V,At,zt,wt=0){if(!(w&&w.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&zt!==void 0&&(Nt=Nt[zt],Array.isArray(Nt)&&(Nt=Nt[0])),Nt){vt.bindFramebuffer(D.FRAMEBUFFER,Nt);try{let Xt=w.textures[wt],ee=Xt.format,fe=Xt.type;w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+wt);let Ht=Kh(Xt);if(Ht.__formatReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ht.__typeReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-k&&Y>=0&&Y<=w.height-V&&D.readPixels(F,Y,k,V,yt.convert(ee),yt.convert(fe),At)}finally{let Xt=ft!==null?Bt.get(ft).__webglFramebuffer:null;vt.bindFramebuffer(D.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(w,F,Y,k,V,At,zt,wt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&zt!==void 0&&(Nt=Nt[zt],Array.isArray(Nt)&&(Nt=Nt[0])),Nt)if(F>=0&&F<=w.width-k&&Y>=0&&Y<=w.height-V){vt.bindFramebuffer(D.FRAMEBUFFER,Nt);let Xt=w.textures[wt],ee=Xt.format,fe=Xt.type;w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+wt);let Ht=Kh(Xt);if(Ht.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ht.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let de=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,de),D.bufferData(D.PIXEL_PACK_BUFFER,At.byteLength,D.STREAM_READ),D.readPixels(F,Y,k,V,yt.convert(ee),yt.convert(fe),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let ze=ft!==null?Bt.get(ft).__webglFramebuffer:null;vt.bindFramebuffer(D.FRAMEBUFFER,ze);let Te=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await df(D,Te,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,de),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,At),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(de),D.deleteSync(Te),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,Y=0){let k=Math.pow(2,-Y),V=Math.floor(w.image.width*k),At=Math.floor(w.image.height*k),zt=F!==null?F.x:0,wt=F!==null?F.y:0;Vt.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,zt,wt,V,At),vt.unbindTexture()},this.copyTextureToTexture=function(w,F,Y=null,k=null,V=0,At=0){let zt,wt,Nt,Xt,ee,fe,Ht,de,ze,Te=w.isCompressedTexture?w.mipmaps[At]:w.image;if(Y!==null)zt=Y.max.x-Y.min.x,wt=Y.max.y-Y.min.y,Nt=Y.isBox3?Y.max.z-Y.min.z:1,Xt=Y.min.x,ee=Y.min.y,fe=Y.isBox3?Y.min.z:0;else{let ge=Math.pow(2,-V);zt=Math.floor(Te.width*ge),wt=Math.floor(Te.height*ge),w.isDataArrayTexture?Nt=Te.depth:w.isData3DTexture?Nt=Math.floor(Te.depth*ge):Nt=1,Xt=0,ee=0,fe=0}k!==null?(Ht=k.x,de=k.y,ze=k.z):(Ht=0,de=0,ze=0);let Ee=yt.convert(F.format),sn=yt.convert(F.type),Gt;F.isData3DTexture?(Vt.setTexture3D(F,0),Gt=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Vt.setTexture2DArray(F,0),Gt=D.TEXTURE_2D_ARRAY):(Vt.setTexture2D(F,0),Gt=D.TEXTURE_2D),vt.activeTexture(D.TEXTURE0),vt.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),vt.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),vt.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let hn=vt.getParameter(D.UNPACK_ROW_LENGTH),_e=vt.getParameter(D.UNPACK_IMAGE_HEIGHT),qi=vt.getParameter(D.UNPACK_SKIP_PIXELS),rn=vt.getParameter(D.UNPACK_SKIP_ROWS),vo=vt.getParameter(D.UNPACK_SKIP_IMAGES);vt.pixelStorei(D.UNPACK_ROW_LENGTH,Te.width),vt.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Te.height),vt.pixelStorei(D.UNPACK_SKIP_PIXELS,Xt),vt.pixelStorei(D.UNPACK_SKIP_ROWS,ee),vt.pixelStorei(D.UNPACK_SKIP_IMAGES,fe);let Ti=w.isDataArrayTexture||w.isData3DTexture,Yi=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){let ge=Bt.get(w),je=Bt.get(F),Un=Bt.get(ge.__renderTarget),Ue=Bt.get(je.__renderTarget);vt.bindFramebuffer(D.READ_FRAMEBUFFER,Un.__webglFramebuffer),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ye=0;Ye<Nt;Ye++)Ti&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Bt.get(w).__webglTexture,V,fe+Ye),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Bt.get(F).__webglTexture,At,ze+Ye)),D.blitFramebuffer(Xt,ee,Xt+zt,ee+wt,Ht,de,Ht+zt,de+wt,D.DEPTH_BUFFER_BIT,D.NEAREST);vt.bindFramebuffer(D.READ_FRAMEBUFFER,null),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(V!==0||w.isRenderTargetTexture||Bt.has(w)){let ge=Bt.get(w),je=Bt.get(F);vt.bindFramebuffer(D.READ_FRAMEBUFFER,P),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,z);for(let Un=0;Un<Nt;Un++)Ti?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ge.__webglTexture,V,fe+Un):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ge.__webglTexture,V),Yi?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,je.__webglTexture,At,ze+Un):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,je.__webglTexture,At),V!==0?D.blitFramebuffer(Xt,ee,Xt+zt,ee+wt,Ht,de,Ht+zt,de+wt,D.COLOR_BUFFER_BIT,D.NEAREST):Yi?D.copyTexSubImage3D(Gt,At,Ht,de,ze+Un,Xt,ee,zt,wt):D.copyTexSubImage2D(Gt,At,Ht,de,Xt,ee,zt,wt);vt.bindFramebuffer(D.READ_FRAMEBUFFER,null),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Yi?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Gt,At,Ht,de,ze,zt,wt,Nt,Ee,sn,Te.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Gt,At,Ht,de,ze,zt,wt,Nt,Ee,Te.data):D.texSubImage3D(Gt,At,Ht,de,ze,zt,wt,Nt,Ee,sn,Te):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,At,Ht,de,zt,wt,Ee,sn,Te.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,At,Ht,de,Te.width,Te.height,Ee,Te.data):D.texSubImage2D(D.TEXTURE_2D,At,Ht,de,zt,wt,Ee,sn,Te);vt.pixelStorei(D.UNPACK_ROW_LENGTH,hn),vt.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_e),vt.pixelStorei(D.UNPACK_SKIP_PIXELS,qi),vt.pixelStorei(D.UNPACK_SKIP_ROWS,rn),vt.pixelStorei(D.UNPACK_SKIP_IMAGES,vo),At===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&D.generateMipmap(Gt),vt.unbindTexture()},this.initRenderTarget=function(w){Bt.get(w).__webglFramebuffer===void 0&&Vt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Vt.setTextureCube(w,0):w.isData3DTexture?Vt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Vt.setTexture2DArray(w,0):Vt.setTexture2D(w,0),vt.unbindTexture()},this.resetState=function(){q=0,W=0,ft=null,vt.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};function ye(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Be;l.morphTargetsRelative=a;let c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0,d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=rd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let S=0;S<o[h].length;++S)d.push(o[h][S][f]);let p=rd(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function rd(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Qe(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<e;p++){let S=h.getComponent(f,p);a.setComponent(f+u,p,S)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Re=510,Ks=[85,255,425],gn=[-1,0,1,2],Wi=[2.6,6.1,9.6],be=11.4,Vn=.9,dh=20,od=11,W_=2,vn,Ke,Ne,wh,_n,Xe=null,ph=!1,Ah=0,Js=null,Rt={pos:null,metroSint:null,metro8:!1,metrobus:!1,troleElev:!1,viaje:!1,pct:null,dist:null,vel:null,nivel:"ligero",noche:!1,rojo:!1,zona:"mixto",pico:!1,llego:!1},ao=new se;function Wn(i,t){ao.set(t).convertSRGBToLinear();let e=i.attributes.position.count,n=new Float32Array(e*3);for(let s=0;s<e;s++)n[s*3]=ao.r,n[s*3+1]=ao.g,n[s*3+2]=ao.b;return i.setAttribute("color",new Qe(n,3)),i}var Kt=(i,t,e,n,s,r,o)=>Wn(new ne(i,t,e).translate(n,s,r),o),cn=(i,t,e=.38)=>Wn(new we(e,e,.32,10).rotateX(Math.PI/2).translate(i,e,t),1447446);function Rh(i,t,e){let n=document.createElement("canvas");n.width=n.height=64;let s=n.getContext("2d"),r=s.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,`rgba(${i},${t},${e},0.95)`),r.addColorStop(.45,`rgba(${i},${t},${e},0.35)`),r.addColorStop(1,`rgba(${i},${t},${e},0)`),s.fillStyle=r,s.fillRect(0,0,64,64);let o=new wn(n);return o.colorSpace=Fe,o}var Vi,bd,Gl,Qs,uo,Oh,Bh,Ul,mh={};function X_(i,t=16777215,e=2831424){let n=i+t+"_"+e;if(mh[n])return mh[n];let s=2502715,r=[],o,a;switch(i){case"hatch":o=4,a=1.85,r=[Kt(o,.8,a,0,.75,0,t),Kt(2.5,.68,a*.86,-.55,1.49,0,s),Kt(2.45,.08,a*.88,-.55,1.86,0,t),Kt(.06,.25,a*.6,o/2,.95,0,10133670)];break;case"sedan":o=4.5,a=1.85,r=[Kt(o,.75,a,0,.72,0,t),Kt(2.3,.62,a*.86,-.15,1.4,0,s),Kt(2.2,.08,a*.88,-.15,1.74,0,t)];break;case"ejec":o=5,a=1.9,r=[Kt(o,.62,a,0,.68,0,t),Kt(2.6,.52,a*.86,-.2,1.25,0,s),Kt(2.5,.07,a*.88,-.2,1.54,0,t),Kt(o*.98,.05,a*1.01,0,.82,0,13225686)];break;case"depor":o=4.4,a=1.95,r=[Kt(o,.5,a,0,.6,0,t),Kt(1.8,.42,a*.82,-.3,1.06,0,s),Kt(1.7,.06,a*.84,-.3,1.28,0,t),Kt(.3,.08,a*.9,-o/2+.2,1.08,0,1118481)];break;case"taxi":o=4.5,a=1.85,r=[Kt(o,.45,a,0,.58,0,16185075),Kt(o,.32,a*1.001,0,.98,0,15217551),Kt(2.3,.62,a*.86,.15,1.45,0,s),Kt(2.2,.08,a*.88,.15,1.79,0,15217551),Kt(.5,.22,.8,.15,1.94,0,16777215)];break;case"suv":o=4.7,a=1.95,r=[Kt(o,.95,a,0,.85,0,t),Kt(3.2,.7,a*.88,-.35,1.67,0,s),Kt(3.1,.09,a*.9,-.35,2.06,0,t)];break;case"micro":o=7.5,a=2.3,r=[Kt(o,1.5,a,0,1.25,0,15526884),Kt(o,.55,a*1.002,0,.75,0,3119698),Kt(o*.92,.6,a*1.004,-.2,1.6,0,s),Kt(o*.95,.12,a,0,2.06,0,13947851)];break;case"torton":o=8.2,a=2.4,r=[Kt(5.6,2.5,a,-1.2,1.95,0,t),Kt(2,1.7,a,2.9,1.45,0,e),Kt(.9,.7,a*.9,3.4,1.95,0,s)];break;case"trailer":o=15,a=2.5,r=[Kt(11.4,2.9,a,-1.7,2.2,0,t),Kt(.2,.3,a,-1.7,.75,0,12597547),Kt(2.8,2.2,a,5.9,1.75,0,e),Kt(1.1,.8,a*.9,6.6,2.35,0,s),Kt(.15,1.6,.15,4.7,3.4,.9,9079434),cn(-5.6,a/2-.12,.5),cn(-5.6,-a/2+.12,.5)];break;case"moto":o=2,a=.6,r=[Kt(1.7,.35,.3,0,.75,0,t),Kt(.5,.75,.42,-.15,1.35,0,e),Wn(new Ln(.2,8,6).translate(-.05,1.9,0),1118481),Wn(new we(.3,.3,.12,10).rotateX(Math.PI/2).translate(.75,.3,0),1447446),Wn(new we(.3,.3,.12,10).rotateX(Math.PI/2).translate(-.75,.3,0),1447446)];break}if(i!=="moto"){let c=o/2-.85,h=-o/2+.85,u=a/2-.12,f=o>7?.5:.38;r.push(cn(c,u,f),cn(c,-u,f),cn(h,u,f),cn(h,-u,f))}let l=ye(r);return l.computeVertexNormals(),mh[n]={geo:l,L:o,W:a}}function fo(i,t,e){let n=X_(i,t,e),s=new Se,r=new xt(n.geo,Vi);r.castShadow=!0,s.add(r);let o=i==="moto"?.95:n.L>7?1.1:.9,a=new xt(new ne(.08,.18,i==="moto"?.2:n.W*.85),Qs);a.position.set(-n.L/2-.02,o,0),s.add(a);let l=new xt(Ul,bd);l.scale.set(5.5,1,n.W*2.4),l.position.set(-n.L/2-1.6,.06,0),l.visible=!1,s.add(l);let c=new xt(new ne(.06,.16,i==="moto"?.16:n.W*.8),Oh);c.position.set(n.L/2+.02,o,0),s.add(c);let h=new xt(Ul,Gl);return h.scale.set(9,1,n.W*2.2),h.position.set(n.L/2+4.5,.05,0),h.visible=!1,s.add(h),Ke.add(s),{g:s,stop:a,glow:l,haz:h,L:n.L,tipo:i}}var xo=[],Fl=[],lo,Gi,$s,xn,Ch;function ro(i,t,e,n,s,r=0){let o=new xt(new Pe(i,t).rotateX(-Math.PI/2),new Wt({color:s}));return o.position.set(e,r,n),o.receiveShadow=!0,xn.add(o),o}var Al=gn.flatMap(i=>Ks.map((t,e)=>({x:t+i*Re,i:e})));function q_(){let i=gn[0]*Re,t=gn.length*Re,e=i+t/2;ro(t,420,e,0,14673372,-.02),ro(t,be*2,e,0,3816773,0),ro(t,3,e,be+1.5,13225156,.01),ro(t,3,e,-be-1.5,13225156,.01),Al.forEach(x=>ro(12,420,x.x,0,3816773,.005));let n=[];for(let x of gn)for(let M=0;M<Re;M+=10)Ks.some(C=>M+10>C-7&&M<C+7)||n.push(new ne(10,.7,.6).translate(x*Re+M+5,.35,0));let s=new xt(ye(n),new Wt({color:12172739}));s.castShadow=s.receiveShadow=!0,xn.add(s),Ch=s;let r=[];for(let x of[1,-1]){for(let M of[Vn,be-.35])r.push(new Pe(t,.18).rotateX(-Math.PI/2).translate(e,.02,x*M));for(let M of gn)for(let C=0;C<Re;C+=8.5)if(!Ks.some(A=>Math.abs(C-A)<9))for(let A of[4.35,7.85])r.push(new Pe(3,.16).rotateX(-Math.PI/2).translate(M*Re+C,.02,x*A))}Al.forEach(({x})=>{for(let M=-be+.6;M<be;M+=1.1)Math.abs(M)>Vn+.3&&r.push(new Pe(3.2,.6).rotateX(-Math.PI/2).translate(x-7.6,.025,M));r.push(new Pe(.4,be-Vn).rotateX(-Math.PI/2).translate(x-9.8,.025,(be+Vn)/2)),r.push(new Pe(.4,be-Vn).rotateX(-Math.PI/2).translate(x+9.8,.025,-(be+Vn)/2))}),xn.add(new xt(ye(r),new xe({color:15921906})));let o=[15918022,15250592,13227743,16045453,12114110,15123414,14209732,11125984,15778427],a=[];for(let x of[1,-1]){let M=0;for(;M<Re-6;){let C=Math.min(7+Math.random()*10,Re-M);if(Ks.some(A=>Math.abs(M+C/2-A)<6+C/2)){M+=4;continue}a.push({x:M+C/2,w:C-.8,h:4+Math.random()*(Math.random()<.2?22:9),d:8+Math.random()*8,s:x,dz:Math.random()*1.5,c:o[a.length%o.length]}),M+=C}}let l=new Ge(new ne(1,1,1).translate(0,.5,0),new Wt({color:16777215}),a.length*gn.length);l.castShadow=l.receiveShadow=!0;let c=new ae,h=new tn,u=new U,f=new U,d=0;for(let x of gn)for(let M of a)u.set(x*Re+M.x,0,M.s*(be+3.5+M.d/2+M.dz)),f.set(M.w,M.h,M.d),l.setMatrixAt(d,c.compose(u,h,f)),l.setColorAt(d,ao.set(M.c)),d++;xn.add(l);let p=[];for(let x of[1,-1])for(let M=5;M<Re;M+=17)Ks.some(C=>Math.abs(M-C)<9)||p.push({x:M+Math.random()*3,s:x,e:.8+Math.random()*.5});let S=new Ge(new we(.15,.2,1.4,6).translate(0,.7,0),new Wt({color:8018490}),p.length*gn.length),g=new Ge(new Gs(1.2,0).translate(0,2.3,0),new Wt({color:5939290,flatShading:!0}),p.length*gn.length);g.castShadow=!0,d=0;for(let x of gn)for(let M of p)u.set(x*Re+M.x,0,M.s*(be+2.2)),f.setScalar(M.e),c.compose(u,h,f),S.setMatrixAt(d,c),g.setMatrixAt(d,c),d++;xn.add(S,g),lo=new Se,xn.add(lo);let m=[],y=[],v=[];for(let x of[1,-1])for(let M of gn)for(let C=10;C<Re;C+=30){let A=M*Re+C;m.push(new we(.09,.12,7,6).translate(A,3.5,x*(be+.6)),new ne(.15,.12,2.2).translate(A,7,x*(be-.4))),y.push(new ne(.5,.12,.8).translate(A,6.92,x*(be-1.3))),v.push(new Pe(9,9).rotateX(-Math.PI/2).translate(A,.04,x*(be-2.5)))}lo.add(new xt(ye(m),new Wt({color:7172214})),new xt(ye(y),Bh));let _=new xt(ye(v),new xe({map:Gl.map,transparent:!0,depthWrite:!1,blending:mi,opacity:.55}));_.visible=!1,_.name="charcos",lo.add(_),xo=Al.map(({x,i:M})=>{let C=(A,I,L)=>{let B=new Se,P=new Wt({color:3882821}),z=new xt(new we(.12,.14,6,8),P);z.position.y=3,B.add(z);let q=new xt(new ne(.14,.14,7),P);q.position.set(0,5.9,-3.5),B.add(q);let W=new xt(new ne(.45,1.5,.55),new Wt({color:1908514}));W.position.set(-.1,5.2,-6),W.castShadow=!0,B.add(W);let ft=[16722458,16761856,2282347].map((J,nt)=>{let ot=new xt(new Ln(.17,10,8),new xe({color:2236962}));return ot.position.set(-.35,5.68-nt*.47,-6),ot.userData.on=J,B.add(ot),ot});return B.position.set(A,0,I),B.rotation.y=L,xn.add(B),ft};return{x,off:M*7.3,ida:C(x-10.5,be+.9,0),reg:C(x+10.5,-be-.9,Math.PI)}});let T=[15029053,3120750,8084694,14722342,3770341,13651850];Fl=[],Al.forEach(({x},M)=>{for(let C=0;C<3;C++){let A=new Se,I=new xt(new we(.22,.26,.95,8),new Wt({color:T[(M+C)%T.length]}));I.position.y=1.15,I.castShadow=!0;let L=new xt(new we(.2,.18,.7,8),new Wt({color:2899543}));L.position.y=.35;let B=new xt(new Ln(.2,10,8),new Wt({color:13209186}));B.position.y=1.85;let P=new xt(new ne(.12,.5,.12),new xe({color:16765952}));P.position.y=2.6,P.visible=!1,A.add(I,L,B,P);let z=C%2?1:-1,q=z*(be+1.2);A.position.set(x-8.8+C*.8,0,q),xn.add(A),Fl.push({g:A,susto:P,cx:x,dx:-8.8+C*.8,z:q,modo:"espera",t:Math.random()*2,dir:-z})}});let b=(x,M)=>{let C=document.createElement("canvas");C.width=C.height=128;let A=C.getContext("2d");A.fillStyle=M,A.beginPath(),A.arc(64,64,56,0,7),A.fill(),A.fillStyle="#fff",A.font="bold 80px Arial",A.textAlign="center",A.textBaseline="middle",A.fillText(x,64,70);let I=new wn(C);I.colorSpace=Fe;let L=new Se,B=new Li(new di({map:I}));B.scale.set(5,5,1),B.position.set(0,7.5,be+2.5),L.add(B);let P=new xt(new we(.12,.12,5,6),new Wt({color:7829367}));P.position.set(0,2.5,be+2.5),L.add(P);let z=new xt(new Pe(1.2,be-Vn).rotateX(-Math.PI/2),new xe({color:M}));return z.position.set(0,.03,(be+Vn)/2),L.add(z),L.visible=!1,xn.add(L),L};Gi=b("A","#3987e5"),$s=b("B","#d95926")}var Ih=[12597547,2976949,1381914,12567753,15921903,8028038,14722342,3120750,9185828,2504266],Y_=[1381914,2504266,15921903,3816770,12720152,12567753],Sn=[],Ut,ad,hs,Ph="",ti=i=>i[Math.floor(Math.random()*i.length)];function Ed(){let i=["micro","micro","torton","sedan","sedan","taxi","suv"],t=["ejec","ejec","suv","suv","depor","sedan"],e=Rt.zona==="popular"?i:Rt.zona==="lujo"?t:[...i.slice(0,4),...t.slice(0,4)];return Rt.pico&&(e=[...e,"torton","trailer","trailer","torton","trailer"]),ti(e)}function gh(i,t,e,n,s){let r=ti((i==="ejec"||i==="suv"||i==="depor")&&Rt.zona==="lujo"?Y_:Ih),o=2831424;i==="depor"&&(r=ti([12720152,15921903,1381914,14722342])),(i==="torton"||i==="trailer")&&(r=ti([15921902,15262416,14277846]),o=ti([12597547,2056104,15921906])),i==="moto"&&(r=ti([12986408,1402304,2236962]),o=ti([3622735,7162945,1793568]));let l={...fo(i,r,o),dir:t,z:e,x:n,v:s*.7,v0:s,a:0,frena:0,zLane:e,fase:Math.random()*6};return l.g.rotation.y=t>0?0:Math.PI,l.haz.visible=Rt.noche,Sn.push(l),l}function Td(){for(let s of Sn.splice(0))s!==Ut&&Ke.remove(s.g);Sn.push(Ut);let i=Rt.nivel==="pesado",t=Ut.x,e=i?8.5:36,n=i?7:15;for(let s of[1,-1])for(let r=0;r<3;r++){if(r===0&&Rt.metrobus)continue;let o=s*Wi[r];for(let a=t-80+Math.random()*10;a<t+150;a+=e*(.8+Math.random()*.6))s>0&&r===1&&a>t-(i?13:30)&&a<t+(i?10:40)||!i&&Math.random()<.35||gh(Ed(),s,o,a,n*(.85+Math.random()*.3)*(s<0?1.1:1))}ad=gh("taxi",1,Wi[1],t-(i?7.5:12),12),ad.esTaxi=!0;for(let s of[1,-1])for(let r of[4.35,7.85])for(let o=0;o<2;o++)gh("moto",s,s*r,t-60+Math.random()*180,19+Math.random()*4)}var Nn=0,Mi=0;function wd(){let i=null;for(let t of xo){let e=t.x-10-Ut.x;e>-1&&(!i||e<i.d)&&(i={s:t,d:e})}return i}function zh(i){let t=wd();if(t&&t.s===i&&t.d<90){if(Rt.rojo)return"rojo";if(Ut.v>1.5)return"verde"}let e=((Nn+i.off)%dh+dh)%dh;return e<od?"verde":e<od+W_?"amarillo":"rojo"}var as={a:1.6,b:3,T:1.1,s0:2.2};function Z_(i){for(let t of xo){let e=i.dir>0?t.x-10:t.x+10,n=(e-i.x)*i.dir;if(n>0&&n<70){let s=zh(t);return s==="rojo"||s==="amarillo"&&n>i.v*i.v/(2*as.b)+2?e:null}}return null}function xh(i){for(let t of Sn)t.x+=i}var ld=!1;function J_(i){Nn+=i;let t;if(Rt.rojo||Rt.llego?t=0:Rt.vel!=null?t=Rt.vel/3.6:t=Rt.nivel==="pesado"?7:13,Ut.a=(t-Ut.v)*1.2,Ut.v=Math.max(0,Ut.v+Ut.a*i),Ut.x+=Ut.v*i,Rt.rojo&&!ld){let r=wd();if(r&&r.d>3){let o=-(r.d-3);xh(o),Mi-=o}}ld=Rt.rojo;let e={};for(let r of Sn)r.tipo!=="moto"&&r!==Ut&&(e[r.dir+":"+r.zLane]||=[]).push(r);(e["1:"+Wi[1]]||=[]).push(Ut);for(let r in e){let o=e[r].sort((a,l)=>(l.x-a.x)*l.dir);for(let a=0;a<o.length;a++){let l=o[a];if(l===Ut)continue;let c=o[a-1];l.esTaxi&&(l.v0=Math.max(9,Ut.v+3));let h=1e9,u=0;c&&(h=(c.x-l.x)*l.dir-(c.L+l.L)/2,u=l.v-c.v);let f=Z_(l);if(f!=null){let S=(f-l.x)*l.dir-l.L/2;S<h&&(h=S,u=l.v)}l.dir>0&&l.zLane===Wi[1]&&c===Ut&&h<0&&(l.x=Ut.x-(Ut.L+l.L)/2-1.5,l.v=Ut.v);let d=as.s0+Math.max(0,l.v*as.T+l.v*u/(2*Math.sqrt(as.a*as.b))),p=as.a*(1-Math.pow(l.v/l.v0,4)-Math.pow(d/Math.max(h,.1),2));Rt.nivel==="pesado"&&Math.random()<.0015&&(l.frena=1.2),l.frena>0&&(l.frena-=i,p=Math.min(p,-3.5)),p=Math.max(-8,Math.min(as.a,p)),l.a=p,l.v=Math.max(0,l.v+p*i),l.x+=l.v*l.dir*i}for(let a=0;a<o.length;a++)if(o[a]===Ut&&o[a-1]){let l=o[a-1],c=l.x-Ut.x-(l.L+Ut.L)/2;c<4&&(l.x+=4-c+(Ut.v>l.v?30:0))}}for(let r of Sn)r.tipo==="moto"&&(r.fase+=i,r.v=r.v0,r.x+=r.v*r.dir*i,r.z=r.zLane+Math.sin(r.fase*.9)*.6,r.a=0);let n=Ut.x,s=Rt.nivel==="pesado";for(let r of Sn){if(r===Ut)continue;let o=r.x-n;if(r.tipo==="moto"){r.dir>0&&o>170?r.x=n-100-Math.random()*30:r.dir>0&&o<-110?r.x=n+160:r.dir<0&&o<-110&&(r.x=n+160+Math.random()*40);continue}if(r.esTaxi){(o<-60||o>0)&&(r.x=n-(Ut.L+r.L)/2-3,r.v=Ut.v);continue}r.dir>0&&o>170?(r.x=$_(r)-(s?9:30)*(.8+Math.random()*.5),r.v=r.v0*.6):r.dir>0&&o<-110?r.x=cd(r)+(s?9:30):r.dir<0&&o<-110&&(r.x=cd(r)+(s?10:34)*(.8+Math.random()*.5),r.v=r.v0*.8)}Ut.x>Re&&(xh(-Re),Mi+=Re),Ut.x<-Re/2&&(xh(Re),Mi-=Re);for(let r of Fl){let o=xo.find(h=>h.x===r.cx),a=zh(o)==="rojo",l=r.cx-7.6,c=h=>Sn.some(u=>u.tipo==="moto"&&Math.abs(u.z-h)<1.6&&(l-u.x)*u.dir>-1&&(l-u.x)*u.dir<24);if(r.modo==="espera")r.t-=i,a&&r.t<=0&&!c(r.z+r.dir*2)&&(r.modo="cruza");else if(r.modo==="cruza"){let h=r.z+r.dir*(a?1.4:2.6)*i;c(h+r.dir*1.2)&&Math.abs(r.z)<be?(r.modo="huye",r.dir=-r.dir):(r.z=h,Math.abs(r.z)>=be+1.2&&Math.sign(r.z)===Math.sign(r.dir)&&(r.modo="espera",r.t=2+Math.random()*3,r.dir=-Math.sign(r.z)))}else r.z+=r.dir*3.4*i,(Math.abs(r.z)>=be+1.2||Math.abs(r.z)<Vn+.2)&&(r.modo="espera",r.t=1.2+Math.random()*1.5,Math.abs(r.z)>=be+1.2&&(r.dir=-Math.sign(r.z)));r.g.position.z=r.z,r.susto.visible=r.modo==="huye",r.g.position.y=r.modo!=="espera"?Math.abs(Math.sin(Nn*(r.modo==="huye"?16:9)))*.08:0}}function $_(i){let t=1/0;for(let e of Sn)e.dir===i.dir&&e.zLane===i.zLane&&e!==i&&(t=Math.min(t,e.x));return Math.min(t,Ut.x-20)}function cd(i){let t=-1/0;for(let e of Sn)e.dir===i.dir&&e.zLane===i.zLane&&e!==i&&(t=Math.max(t,e.x));return Math.max(t,Ut.x+60)}function Ol(){let i=Rt.noche,t=vv(i),e=typeof zl<"u"&&zl==="real";Ke.background=t.t,Ke.fog=new Mr(t.horiz,e?180:110,e?560:320),cs&&(cs.emissive.set(i?16777215:0),cs.emissiveIntensity=i?.9:0),wh.intensity=i?.45:1.7,_n.intensity=i?.25:2.3,_n.color.set(i?9414399:16777215),Oh.color.set(i?16774856:14277071),Bh.color.set(i?16769946:9079424),lo.getObjectByName("charcos").visible=i;for(let n of Sn)n.haz.visible=i}var Ad={atras:[-9.5,6.4,0,22,1],diag:[-24,36,-13,8],cerca:[-13,10,-7,6],arriba:[-6,70,-.5,6],propia:[-24,36,-13,8]},K_={atras:[-9.5,6.4,0,22,1],diag:[-50,75,-28,24],cerca:[-16,12,-8,10],arriba:[-10,150,-1,22],propia:[-50,75,-28,24]},hd={atras:"Atr\xE1s",diag:"Diagonal",cerca:"Cerca",arriba:"Arriba",propia:"Personalizada"},ud={yaw:.55,pitch:.62,dist:55},Mn=(()=>{try{return{...ud,...JSON.parse(localStorage.getItem("vista3dPropia")||"{}")}}catch{return{...ud}}})();function fd(){try{localStorage.setItem("vista3dPropia",JSON.stringify(Mn))}catch{}}var _h=["atras","diag","cerca","arriba","propia"],ke=(()=>{try{return localStorage.getItem("vista3dCam3")||"atras"}catch{return"atras"}})();Ad[ke]||(ke="atras");var Si=new U,bi=new U;function Rd(i,t){let[e,n,s,r,o=0]=Ad[ke],a=new U(Ut.x+e,n,Ut.z+s),l=new U(Ut.x+r,o,Ut.z+(ke==="atras"?0:3));if(t)Si.copy(a),bi.copy(l);else{let c=1-Math.exp(-i*3);Si.lerp(a,c),bi.lerp(l,c)}Ne.position.copy(Si),Ne.lookAt(bi),_n.position.set(Ut.x+25,45,Ut.z+30),_n.target.position.set(Ut.x,0,Ut.z)}function j_(){for(let t of Sn){t.g.position.set(t.x,0,t.z);let e=t.tipo!=="moto"&&(t.a<-.6||t.v<.4);t.stop.material=e?uo:Qs,t.glow.visible=e||Rt.noche&&t.tipo!=="moto",t.glow.scale.x=e?5.5:2.5}hs.position.y=3.3+Math.sin(Nn*3)*.2,hs.rotation.y+=.03;for(let t of xo){let e=zh(t),n=e==="rojo"?0:e==="amarillo"?1:2;for(let s of[t.ida,t.reg])s.forEach((r,o)=>r.material.color.set(o===n?r.userData.on:2236962))}for(let t of Fl)t.g.position.x=t.cx+t.dx;let i=Ut.x+Mi;if(Rt.viaje&&Rt.pct!=null&&Rt.dist){let t=Rt.dist*1e3,e=i-Math.min(1,Rt.pct)*t,n=e+t;Gi.position.x=e-Mi,$s.position.x=n-Mi,Gi.visible=Math.abs(Gi.position.x-Ut.x)<300,$s.visible=Math.abs($s.position.x-Ut.x)<300}else Rt.viaje&&Rt._a!=null?(Gi.position.x=Rt._a-Mi,Gi.visible=Math.abs(Gi.position.x-Ut.x)<300,$s.visible=!1):Gi.visible=$s.visible=!1}function Q_(){vn=new El({antialias:!0,powerPreference:"high-performance"}),vn.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),vn.shadowMap.enabled=!0,vn.shadowMap.type=Pa,vn.outputColorSpace=Fe,vn.domElement.style.cssText="display:block;width:100%;height:100%",Ke=new Sr,Ne=new fn(30,1,.5,700),wh=new Vr(15266040,10134421,1.7),_n=new qr(16777215,2.3),_n.castShadow=!0,_n.shadow.mapSize.set(1024,1024),Object.assign(_n.shadow.camera,{left:-45,right:45,top:45,bottom:-45,near:1,far:160}),_n.shadow.bias=-6e-4,Ke.add(wh,_n,_n.target),Vi=new Wt({vertexColors:!0}),bd=new xe({map:Rh(255,30,20),transparent:!0,depthWrite:!1,blending:mi}),Gl=new xe({map:Rh(255,240,190),transparent:!0,depthWrite:!1,blending:mi,opacity:.8}),Qs=new xe({color:5901581}),uo=new xe({color:16722458}),Oh=new xe({color:14277071}),Bh=new xe({color:9079424}),Ul=new Pe(1,1).rotateX(-Math.PI/2),xn=new Se,Ke.add(xn),q_(),ev(),Ut={...fo("hatch",16053490),dir:1,z:Wi[1],x:40,v:0,v0:15,a:0,frena:0,zLane:Wi[1]},hs=new xt(new Pr(.55,1.1,4).rotateX(Math.PI),new xe({color:3770341})),hs.position.y=3.4,Ut.g.add(hs),Td(),Ph=Rt.nivel+Rt.zona+Rt.pico+Rt.metrobus,Ol(),Rd(0,!0)}function Pl(){if(!Xe)return;let i=Xe.clientWidth,t=Xe.clientHeight;!i||!t||(vn.setSize(i,t,!1),Ne.aspect=i/t,Ne.fov=ke==="atras"||ke==="propia"?Ne.aspect<1?62:48:Ne.aspect<1?46:Ne.aspect>1.8?21:27,Ne.updateProjectionMatrix())}var co=0,Rl=0,vh=0,tv=0;function Cd(i){if(Ah=requestAnimationFrame(Cd),document.hidden){co=i;return}let t=Math.min(.05,co?(i-co)/1e3:.016);if(co=i,Jt&&Jt.listo&&Rt.pos)wv(t),yi(t);else{let e=Math.ceil(t/.02);for(let n=0;n<e;n++)J_(t/e);j_(),nv(t),Rd(t)}vn.render(Ke,Ne),Rl+=t,vh++,Rl>2&&(vh/Rl<28&&vn.shadowMap.enabled&&++tv>1&&(vn.shadowMap.enabled=!1,Ke.traverse(n=>{n.material&&(n.material.needsUpdate=!0)})),Rl=0,vh=0)}var yh=null;function Id(i){yh||(yh=Rh(255,255,255));let t=new Se;t.visible=!1,t.userData.fases=[];let e=new ne(.28,.12,.28),n=new Pe(1.6,1.6).rotateX(-Math.PI/2),s=new ae,r=new se;for(let o=0;o<3;o++){let a=i.filter(f=>f.f===o);if(!a.length){t.userData.fases.push(null);continue}let l=new xe({color:16777215}),c=new xe({map:yh,transparent:!0,depthWrite:!1,blending:mi}),h=new Ge(e,l,a.length),u=new Ge(n,c,a.length);a.forEach((f,d)=>{s.makeTranslation(f.x,(f.y||0)+.08,f.z),h.setMatrixAt(d,s),s.makeTranslation(f.x,(f.y||0)+.1,f.z),u.setMatrixAt(d,s),r.set(f.c),h.setColorAt(d,r),u.setColorAt(d,r)}),u.renderOrder=3,t.add(h,u),t.userData.fases.push({mb:l,mh:c})}return t}function Pd(i,t){if(!i||(i.visible=!!Rt.noche,!Rt.noche))return;let e=Math.floor(t*7)%3;i.userData.fases.forEach((n,s)=>{if(!n)return;let r=s===e,o=r?1:.18;n.mb.color.setScalar(o),n.mh.opacity=r?.95:.12})}var ki={carril:16052710,orilla:3134407,centro:16757504,metrobus:16764723};function Ld(){return ye([Kt(12,2.6,2.5,0,1.75,0,2061280),Kt(11.2,1,2.52,-.2,2.25,0,1520207),Kt(12,.25,2.54,0,1,0,16777215),Kt(3.4,.4,1.6,-.5,3.25,0,1727672),Kt(5.6,.08,.08,-2.8,4.6,.45,2763306).rotateZ(0),Kt(5.6,.08,.08,-2.8,4.6,-.45,2763306),cn(-3.8,1.2,.5),cn(-3.8,-1.2,.5),cn(3.8,1.2,.5),cn(3.8,-1.2,.5)])}function Dd(){return ye([Kt(8.6,2.8,2.55,-4.6,1.75,0,12986408),Kt(8.6,2.8,2.55,4.6,1.75,0,12986408),Kt(.6,2.4,2.3,0,1.65,0,5903380),Kt(7.8,1,2.57,-4.6,2.25,0,2241087),Kt(7.8,1,2.57,4.6,2.25,0,2241087),Kt(17.8,.2,2.58,0,1,0,15921906),cn(-7.4,1.2,.5),cn(-7.4,-1.2,.5),cn(-2,1.2,.5),cn(-2,-1.2,.5),cn(7.4,1.2,.5),cn(7.4,-1.2,.5)])}function Bl(i,t,e){let n=new ae,s=new tn,r=new U,o=new U(1,1,1),a=new U(0,1,0),l=0;for(let c of t){if(l>=i.instanceMatrix.count)break;r.set(c.x,c.y,c.z),s.setFromAxisAngle(a,c.r),i.setMatrixAt(l++,n.compose(r,s,o))}i.count=l,i.instanceMatrix.needsUpdate=!0}function dd(i,t,e,n,s,r,o,a,l){i.t=(i.t||Math.random()*40)+t;let c=i.cum[i.cum.length-1],h=i.periodo*e,u=Math.max(h,c+n+60);for(let f of[1,-1]){let d=(i.t+(f<0?i.periodo/2:0))*e%u;for(let p=0;p*h<u&&p<30;p++){let S=(d+p*h)%u-30;for(let g=0;g<s;g++){let m=S-g*r;if(m<0||m>c)continue;f<0&&(m=c-m);let y=Le(i,m),v=y.dx*f,_=y.dz*f,T=o;l.push({x:y.x-_*T,y:a,z:y.z+v*T,r:Xn(v,_)})}}}}var nn=null;function Nd(){return ye([Kt(14.6,3.1,2.8,0,1.95,0,15759898),Kt(13.4,.95,2.84,0,2.45,0,2241087),Kt(14.6,.25,2.82,0,1,0,15921902),Kt(14,.25,2.4,0,3.6,0,13223613),Wn(new we(.4,.4,2.4,8).rotateX(Math.PI/2).translate(-5.2,.4,0),2236962),Wn(new we(.4,.4,2.4,8).rotateX(Math.PI/2).translate(5.2,.4,0),2236962)])}function ev(){let i=new Se;i.visible=!1,xn.add(i);let t=gn[0]*Re,e=gn.length*Re,n=t+e/2,s=new Se;s.add(new xt(new Pe(e,3.6).rotateX(-Math.PI/2).translate(n,.05,0),new Wt({color:7037528})));let r=[-.72,.72].map(g=>new ne(e,.12,.1).translate(n,.15,g));s.add(new xt(ye(r),new Wt({color:10133670}))),i.add(s);let o=new Se,a=[];a.push(new ne(e,1.2,4.4).translate(n,7.4,0));for(let g=t;g<t+e;g+=25)a.push(new ne(1.2,6.8,1.6).translate(g,3.4,0));let l=new xt(ye(a),new Wt({color:12170925}));l.castShadow=l.receiveShadow=!0,o.add(l),i.add(o);let c=new Ge(Nd(),Vi,120);c.castShadow=!0,c.count=0,Ke.add(c);let h=new Ge(Ld(),Vi,40);h.castShadow=!0,h.count=0,Ke.add(h);let u=[];for(let g of[1,-1])for(let m of[Vn+.15,4.35])u.push(new Pe(e,.25).rotateX(-Math.PI/2).translate(n,.03,g*m));for(let g of[1,-1])for(let m of gn)for(let y=0;y<Re;y+=3)u.push(new ne(1.4,.18,.35).translate(m*Re+y,.09,g*4.35));let f=new xt(ye(u.map(Hh)),new Wt({color:15909376}));f.visible=!1,xn.add(f);let d=new Ge(Dd(),Vi,30);d.castShadow=!0,d.count=0,Ke.add(d);let p=[];for(let g of[1,-1])for(let m of gn)for(let y=0;y<Re;y+=4){let v=m*Re+y,_=Math.floor(y/4)%3;Ks.some(T=>Math.abs(y-T)<9)||p.push({x:v,z:g*4.35,c:ki.carril,f:_},{x:v,z:g*7.85,c:ki.carril,f:_}),p.push({x:v,z:g*(be-.35),c:ki.orilla,f:_},{x:v,z:g*(Vn+.15),c:ki.centro,f:_})}let S=Id(p);xn.add(S),nn={g:i,via:s,vd:o,tren:c,trole:h,mbl:f,mbus:d,luces:S,t:0}}function nv(i){if(!nn)return;Pd(nn.luces,Nn),nn.mbl.visible=!!Rt.metrobus;{let S=[];if(Rt.metrobus)for(let y of[1,-1]){let v=(nn.t+(y<0?20:0))*11%440;for(let _=-2;_<=2;_++){let T=Ut.x+y*(v+_*440-120);Math.abs(T-Ut.x)<260&&S.push({x:T,y:0,z:y*Wi[0],r:y>0?0:Math.PI})}}Bl(nn.mbus,S)}let t=!Rt.metroSint&&!Rt.metro8&&Rt.troleElev;{let S=[];if(t)for(let y of[1,-1]){let v=(nn.t+(y<0?15:0))*12%360;for(let _=-2;_<=2;_++){let T=Ut.x+y*(v+_*360-150);Math.abs(T-Ut.x)<280&&S.push({x:T,y:8,z:y*1.1,r:y>0?0:Math.PI})}}Bl(nn.trole,S)}let e=Rt.metroSint||(Rt.metro8?"s":null)||(t?"e":null);nn.g.visible=!!e,nn.via.visible=e==="s",nn.vd.visible=e==="e",Ch&&(Ch.visible=e!=="s");let n=nn.tren;if(n.visible=!!e&&!(Jt&&Jt.listo&&Rt.pos),!e||t){n.count=0,nn.t+=i;return}nn.t+=i;let s=16,r=Rt.metro8?6:9,o=r*15.3,a=Rt.metro8?8:60,l=e==="e"?8:.15,c=new ae,h=new tn,u=new U,f=new U(1,1,1),d=0,p=520;for(let S of[1,-1]){let g=(nn.t+(S<0?a/2:0))*s,m=a*s;for(let y=-Math.ceil(p/m)-1;y<=Math.ceil(p/m)+1;y++){let v=g%m+y*m-p/2;if(!(a>=30&&y!==0))for(let _=0;_<r&&d<n.instanceMatrix.count;_++){let T=Ut.x+S*(v-_*15.3);Math.abs(T-Ut.x)>300||(h.setFromAxisAngle(new U(0,1,0),S>0?0:Math.PI),u.set(T,l,(S>0,0)),n.setMatrixAt(d++,c.compose(u,h,f)))}}}n.count=d,n.instanceMatrix.needsUpdate=!0}var Jt=null,Ud=110540,pd={motorway:20,trunk:18,primary:15,secondary:12,tertiary:10,unclassified:8,residential:7,living_street:6,service:4.5,link:7},Cl={motorway:.06,trunk:.058,primary:.055,secondary:.05,tertiary:.045,link:.044,unclassified:.04,residential:.035,living_street:.033,service:.03};function $e(i,t,e){return[(e-i.lon)*111320*Math.cos(i.lat*Math.PI/180),-(t-i.lat)*Ud]}function Hh(i){i=i.index?i.toNonIndexed():i;for(let t of Object.keys(i.attributes))t!=="position"&&t!=="color"&&i.deleteAttribute(t);return i}function Cn(i,t,e,n){let s=t/2;for(let r=1;r<i.length;r++){let[o,a]=i[r-1],[l,c]=i[r],h=l-o,u=c-a,f=Math.hypot(h,u);if(f<.05)continue;let d=-u/f*s,p=h/f*s,S=new Be;S.setAttribute("position",new me([o+d,e,a+p,l+d,e,c+p,o-d,e,a-p,o-d,e,a-p,l+d,e,c+p,l-d,e,c-p],3)),n.push(S)}for(let r=0;r<i.length;r++)n.push(Hh(new Ir(s,10).rotateX(-Math.PI/2).translate(i[r][0],e,i[r][1])))}function ho(i){let t=[0];for(let e=1;e<i.length;e++)t.push(t[e-1]+Math.hypot(i[e][0]-i[e-1][0],i[e][1]-i[e-1][1]));return t}function Le(i,t){let e=i.p,n=i.cum;t=Math.max(0,Math.min(n[n.length-1],t));let s=1;for(;s<n.length-1&&n[s]<t;)s++;let r=(t-n[s-1])/Math.max(1e-6,n[s]-n[s-1]),o=e[s][0]-e[s-1][0],a=e[s][1]-e[s-1][1],l=Math.hypot(o,a)||1;return{x:e[s-1][0]+o*r,z:e[s-1][1]+a*r,dx:o/l,dz:a/l}}var Xn=(i,t)=>Math.atan2(-t,i),Mh={};function iv(i){if(Mh[i])return Mh[i];let t=document.createElement("canvas"),e=t.getContext("2d");e.font="bold 44px Arial",t.width=Math.min(1024,Math.ceil(e.measureText(i).width)+28),t.height=64,e.font="bold 44px Arial",e.textBaseline="middle",e.lineJoin="round",e.lineWidth=9,e.strokeStyle="rgba(20,20,24,.85)",e.strokeText(i,14,34),e.fillStyle="#fff",e.fillText(i,14,34);let n=new wn(t);return n.colorSpace=Fe,n.anisotropy=4,Mh[i]={mat:new xe({map:n,transparent:!0,depthWrite:!1}),ar:t.width/t.height}}function Lh(i){let t=document.createElement("canvas"),e=t.getContext("2d");e.font="bold 56px Arial";let n=Math.ceil(e.measureText(i).width)+56;t.width=n,t.height=96,e.font="bold 56px Arial",e.fillStyle="rgba(0,0,0,.25)",e.beginPath(),e.roundRect(6,10,n-8,84,22),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.roundRect(2,4,n-8,84,22),e.fill(),e.fillStyle="#1d1d1b",e.textBaseline="middle",e.fillText(i,26,48);let s=new wn(t);s.colorSpace=Fe;let r=new Li(new di({map:s,depthTest:!1}));return r.scale.set(n/96*5.5,5.5,1),r.renderOrder=5,r}var Sh={};function sv(i){if(Sh[i])return Sh[i];let t=document.createElement("canvas"),e=t.getContext("2d"),n="bold 64px Arial";e.font=n;let s=Math.min(1400,Math.ceil(e.measureText(i).width)+90);t.width=s,t.height=120,e.fillStyle="#111",e.beginPath(),e.roundRect(0,0,s,120,14),e.fill(),e.fillStyle="#fff",e.beginPath(),e.roundRect(9,9,s-18,102,8),e.fill(),e.strokeStyle="#111",e.lineWidth=3,e.beginPath(),e.roundRect(17,17,s-34,86,5),e.stroke(),e.fillStyle="#111",e.font=n,e.textBaseline="middle",e.textAlign="center",e.fillText(i,s/2,63,s-60);let r=new wn(t);return r.colorSpace=Fe,r.anisotropy=4,Sh[i]={t:r,ar:s/120}}function rv(i){let e=new Map,n=[],s=[];i.forEach((o,a)=>{if(!(!o.nombre||o.tipo==="service"))for(let l=1;l<o.p.length;l++){let[c,h]=o.p[l-1],[u,f]=o.p[l],d={ci:a,x1:c,z1:h,x2:u,z2:f};s.push(d);for(let p=Math.floor(Math.min(c,u)/40);p<=Math.floor(Math.max(c,u)/40);p++)for(let S=Math.floor(Math.min(h,f)/40);S<=Math.floor(Math.max(h,f)/40);S++){let g=p+","+S;(e.get(g)||e.set(g,[]).get(g)).push(d)}}});let r=new Set;for(let[o,a]of e)for(let l=0;l<a.length;l++)for(let c=l+1;c<a.length;c++){let h=a[l],u=a[c],f=i[h.ci].nombre,d=i[u.ci].nombre;if(h.ci===u.ci||f===d)continue;let p=h.x2-h.x1,S=h.z2-h.z1,g=u.x2-u.x1,m=u.z2-u.z1,y=p*m-S*g;if(Math.abs(y)<1e-6)continue;let v=((u.x1-h.x1)*m-(u.z1-h.z1)*g)/y,_=((u.x1-h.x1)*S-(u.z1-h.z1)*p)/y;if(v<-.02||v>1.02||_<-.02||_>1.02)continue;let T=h.x1+p*v,b=h.z1+S*v,x=[f,d].sort().join("|")+"|"+Math.round(T/30)+","+Math.round(b/30);r.has(x)||(r.add(x),n.push({x:T,z:b,a:f,b:d}))}return n}var md={lat:19.3622992,lon:-99.0569941},gd=i=>/perif/i.test(i.nombre+" "+(i.ref||""));function ei(i,t,e){let n=null;for(let s=1;s<i.p.length;s++){let[r,o]=i.p[s-1],[a,l]=i.p[s],c=a-r,h=l-o,u=c*c+h*h||1,f=Math.sqrt(u),d=Math.max(0,Math.min(1,((t-r)*c+(e-o)*h)/u)),p=r+c*d,S=o+h*d,g=Math.hypot(t-p,e-S);(!n||g<n.d)&&(n={d:g,s:i.cum[s-1]+f*d,x:p,z:S,dx:c/f,dz:h/f})}return n}function Dh(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new wn(s);return r.colorSpace=Fe,n&&(r.wrapS=r.wrapT=Qi,r.repeat.set(n,n)),r.anisotropy=4,r}function ov(i,t,e,n){let s={barco:null,sem:null},r=i.filter(_=>!_.elev&&gd(_)&&po.test(_.tipo+"")||!_.elev&&gd(_));if(!r.length)return s;let[o,a]=$e(t,md.lat,md.lon);if(fv(r,i,t,e,n,[o,a]),Math.hypot(o,a)>2500)return s;let l=null;for(let _ of r){let T=ei(_,o,a);(!l||T.d<l.q.d)&&(l={c:_,q:T})}if(!l||l.q.d>140)return s;let c=null;for(let _ of i)if(_.elev==="puente")for(let T of r)for(let b=1;b<_.p.length;b++)for(let x=1;x<T.p.length;x++){let M=go(T.p[x-1],T.p[x],_.p[b-1],_.p[b]);if(!M)continue;let C=Math.hypot(M.x-o,M.z-a);C<700&&(!c||C<c.d)&&(c={x:M.x,z:M.z,d:C})}let h=l.q.dx,u=l.q.dz;c?(c.x-o)*h+(c.z-a)*u<0&&(h=-h,u=-u):u>0&&(h=-h,u=-u),s.barco={x:o,z:a},e.add(av(o,a,h,u)),s.dbg=[];let f=l.c,d=1,p=null;for(let _ of r){let T=ei(_,o,a);if(!(T.d>140))for(let b of _.oneway?[1]:[1,-1]){let x=T.dx*b,M=T.dz*b,C=(o-T.x)*M-(a-T.z)*x>0,A=!c||(c.x-T.x)*x+(c.z-T.z)*M>0;C&&A&&(!p||T.d<p.d)&&(p={cc:_,dd:b,d:T.d})}}p&&(f=p.cc,d=p.dd);let S=f.cum[f.cum.length-1],g=(_,T)=>{let b=Le(f,Math.max(0,Math.min(S,_))),x=b.dx*d,M=b.dz*d,C=-M,A=x,I=new Se;return I.position.set(b.x+C*T,0,b.z+A*T),I.rotation.y=Xn(x,M),I},m=null;for(let _ of i)if(_.elev==="puente")for(let T=1;T<_.p.length;T++)for(let b=1;b<f.p.length;b++){let x=go(f.p[b-1],f.p[b],_.p[T-1],_.p[T]);if(!x)continue;let M=f.cum[b-1]+Math.hypot(x.x-f.p[b-1][0],x.z-f.p[b-1][1]);Math.hypot(x.x-o,x.z-a)<700&&(m==null||Math.abs(M-ei(f,o,a).s)<Math.abs(m-ei(f,o,a).s))&&(m=M)}if(m!=null){let _=lv(Math.min(f.w*.75,10)),T=g(m-d*16,f.w/2+.9);T.add(_.g),e.add(T),s.sem=_;let b=g(m-d*40,f.w/2+1.25);b.add(hv()),e.add(b),s.libres=[[T.position.x,T.position.z],[b.position.x,b.position.z]]}let y=ei(f,o+h*50,a+u*50),v=g(y.s-d*4,-(f.w/2+1.2));return v.add(uv()),e.add(v),s.dbg.push(["let",v.position.x,v.position.z,m,d,f.nombre]),s}function av(i,t,e,n){let s=new Se,r=96,o=30,a=12,l=Dh(64,64,(M,C,A)=>{M.fillStyle="#dcdcd7",M.fillRect(0,0,C,A),M.fillStyle="#b9bab4";for(let I=0;I<A;I+=8)M.fillRect(0,I,C,2)},.25),c=new ts([new mt(-r/2,0),new mt(r/2-12,0),new mt(r/2+7,a+1.5),new mt(-r/2-2,a)]),h=new xt(new Hs(c,{depth:o,bevelEnabled:!1}).translate(0,0,-o/2),new Wt({map:l}));h.castShadow=!0,h.receiveShadow=!0,s.add(h);let u=Dh(512,64,(M,C,A)=>{M.fillStyle="#f1efe8",M.fillRect(0,0,C,A);let I=["#e5533d","#2f9e6e","#3f6fd8","#e0a526","#8c4fd6","#1fb5c9"];for(let L=0;L<70;L++)M.fillStyle=I[L%I.length],M.beginPath(),M.ellipse(Math.random()*C,20+Math.random()*40,8+Math.random()*22,6+Math.random()*12,Math.random()*3,0,7),M.fill()});for(let M of[1,-1]){let C=new xt(new Pe(r-14,2.2),new Wt({map:u}));C.position.set(-6,1.1,M*(o/2+.05)),M<0&&(C.rotation.y=Math.PI),s.add(C)}let f=new Wt({color:15987695}),d=new Wt({color:4608606}),p=new xt(new ne(r*.42,8,o*.72),f);p.position.set(-r*.08,a+4,0),p.castShadow=!0,s.add(p);let S=new xt(new ne(r*.42+.1,1.6,o*.72+.1),d);S.position.set(-r*.08,a+5.2,0),s.add(S);let g=new xt(new ne(r*.2,7,o*.5),f);g.position.set(-r*.2,a+11.5,0),g.castShadow=!0,s.add(g);let m=new xt(new ne(r*.18,5,o*.6),f);m.position.set(-r*.42,a+2.5,0),s.add(m);let y=new Wt({color:10133670});for(let M of[1,-1]){let C=new xt(new ne(r,.1,.1),y);C.position.set(0,a+1.3,M*o/2),s.add(C)}let v=Math.floor(r/6)*2,_=new Ge(new Hr(.42,.13,6,14),new Wt({color:14165547}),v),T=new ae,b=0;for(let M of[1,-1])for(let C=-r/2+3;C<r/2-2&&b<v;C+=6)_.setMatrixAt(b++,T.makeTranslation(C,a+.85,M*(o/2+.08)));_.count=b,s.add(_);let x=Lh("\u26F4\uFE0F Barco Utop\xEDa");return x.position.set(0,a+20,0),s.add(x),s.position.set(i,0,t),s.rotation.y=Xn(e,n),s}function lv(i){let t=new Se,e=new Wt({color:5988712}),n=new xt(new we(.16,.2,6.6,8),e);n.position.y=3.3,n.castShadow=!0,t.add(n);let s=new xt(new ne(.14,.14,i),e);s.position.set(0,6.3,-i/2),t.add(s);let r=[],o=(a,l)=>{let c=new xt(new ne(.45,1.45,.55),new Wt({color:1842721}));c.position.set(0,l,a),t.add(c),[1769306,16756736,16722458].forEach((h,u)=>{let f=new xt(new Ln(.17,10,8),new xe({color:2236962}));f.position.set(-.26,l-.46+u*.46,a),f.userData.col=h,t.add(f),(r[u]||=[]).push(f)})};return o(-i*.8,5.6),o(-.35,3.4),{g:t,luces:r}}function cv(i,t){let e=t%38,n=e<20?0:e<23?1:2;i.luces.forEach((s,r)=>s.forEach(o=>o.material.color.setHex(r===n?o.userData.col:2236962)))}function hv(){let i=new Se,t=new Wt({color:6119784}),e=new xt(new ne(4.4,.14,1.9),new Wt({color:9146519}));e.position.set(0,2.6,.3),e.castShadow=!0,i.add(e);for(let a of[-2,2]){let l=new xt(new ne(.1,2.6,.1),t);l.position.set(a,1.3,1.1),i.add(l)}let n=new xt(new Pe(4.1,2.1),new Wt({color:12375268,transparent:!0,opacity:.45,side:Ae}));n.position.set(0,1.35,1.12),i.add(n);let s=new xt(new ne(.18,1.9,1.3),new Wt({color:16185074,emissive:3355443}));s.position.set(2.15,1.25,.45),i.add(s);let r=new xt(new ne(2.6,.08,.45),t);r.position.set(-.3,.5,.8),i.add(r);let o=new xt(new ne(.06,.6,.6),new xe({color:1402304}));return o.position.set(-2.3,3.1,.3),i.add(o),i}function uv(){let i=new Se,t=Dh(1100,470,(c,h,u)=>{c.fillStyle="#e4672a",c.fillRect(0,0,h,u),c.strokeStyle="#fff",c.lineWidth=10,c.strokeRect(16,16,h-32,u-32),c.fillStyle="#fff",c.textAlign="center",c.textBaseline="middle",c.font="bold 50px Arial",c.fillText("USE V\xCDAS ALTERNAS",h/2,70),c.font="bold 76px Arial",c.fillText("DOBLE SENTIDO",h/2,160),c.fillText("EJE 6 SUR",h/2,245),c.font="bold 66px Arial",c.fillText("DE 06:00 A 09:00 HRS",h/2,330),c.font="bold 40px Arial",c.fillText("www.circuitobicentenario.com.mx",h/2,415)}),e=6.6,n=e*470/1100,s=new xt(new Pe(e,n),new Wt({map:t}));s.rotation.y=-Math.PI/2,s.position.set(-.08,7.2,2.2),i.add(s);let r=new xt(new Pe(e,n),new Wt({color:9277329}));r.rotation.y=Math.PI/2,r.position.set(.08,7.2,2.2),i.add(r);let o=new Wt({color:7041143}),a=new xt(new we(.2,.24,8.6,8),o);a.position.y=4.3,a.castShadow=!0,i.add(a);let l=new xt(new ne(.16,.16,4.4),o);return l.position.set(.2,8.2,1.9),i.add(l),i}function fv(i,t,e,n,s,r){let o=i.filter(m=>m.oneway&&m.w>=6);if(o.length<2)return;let a=m=>{let y=[];for(let v of t)if(m.test(Fd(v.nombre+" "+(v.ref||""))))for(let _ of o)for(let T=1;T<v.p.length;T++)for(let b=1;b<_.p.length;b++){let x=go(_.p[b-1],_.p[b],v.p[T-1],v.p[T]);x&&y.push(x.z)}return y},l=a(/ermita/),c=a(/eje\s*5\b|leyes de reforma/),h=l.length?Math.max(...l):$e(e,19.3475,-99.056)[1],u=c.length?Math.min(...c):$e(e,19.3765,-99.056)[1];if(!(u<h))return;let f=[],d=[],p=[],S=(m,y,v,_,T,b)=>m.push(y[0],b,y[1],v[0],b,v[1],_[0],b,_[1],_[0],b,_[1],v[0],b,v[1],T[0],b,T[1]);for(let m of o){let y=m.cum[m.cum.length-1],v=[];for(let T=0;T<=y;T+=6){let b=Le(m,T);if(b.z<u||b.z>h){v.push(null);continue}let x=null;for(let I of o){if(I===m)continue;let L=ei(I,b.x,b.z);if(L.d<12||L.d>95||L.dx*b.dx+L.dz*b.dz>-.5)continue;let B=(L.x-b.x)/L.d,P=(L.z-b.z)/L.d;Math.abs(B*b.dx+P*b.dz)>.5||(!x||L.d<x.q.d)&&(x={q:L,B:I,vx:B,vz:P})}if(!x){v.push(null);continue}let M=[b.x+x.vx*(m.w/2+.7),b.z+x.vz*(m.w/2+.7)],C=[x.q.x-x.vx*(x.B.w/2+.7),x.q.z-x.vz*(x.B.w/2+.7)],A=[(M[0]+C[0])/2,(M[1]+C[1])/2];v.push(Math.hypot(C[0]-M[0],C[1]-M[1])>7?{ea:M,m:A,vx:x.vx,vz:x.vz,sv:T}:null)}let _=m.p[m.p.length-1][1]<m.p[0][1];for(let T=1;T<v.length;T++){let b=v[T-1],x=v[T];if(!(!b||!x)){if(S(f,b.ea,x.ea,b.m,x.m,.03),_){let M=(C,A)=>[C.m[0]+C.vx*A,C.m[1]+C.vz*A];S(d,M(b,-1.6),M(x,-1.6),M(b,1.6),M(x,1.6),.05),S(p,M(b,2),M(x,2),M(b,3.1),M(x,3.1),.05)}if(T%2===0){let M=Math.hypot(b.m[0]-b.ea[0],b.m[1]-b.ea[1]);if(M<6)continue;let C=.15+ls("pq"+m.p[0][0]+T)*Math.max(0,(M-4.5)/M-.15),A=b.ea[0]+(b.m[0]-b.ea[0])*C,I=b.ea[1]+(b.m[1]-b.ea[1])*C;Math.hypot(A-r[0],I-r[1])>62&&s.push([A,I,.9+ls("a"+T+m.p[0][1])*.6])}}}}let g=(m,y)=>{if(!m.length)return;let v=new Be;v.setAttribute("position",new me(m,3)),v.computeVertexNormals();let _=new xt(v,new Wt({color:y,side:Ae}));_.receiveShadow=!0,n.add(_)};g(f,8367704),g(d,14275265),g(p,5935044)}var Fd=i=>String(i||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),po=/^(motorway|trunk|primary|secondary|tertiary|unclassified|residential|living_street)(_link)?$/;function go(i,t,e,n){let s=t[0]-i[0],r=t[1]-i[1],o=n[0]-e[0],a=n[1]-e[1],l=s*a-r*o;if(Math.abs(l)<1e-9)return null;let c=((e[0]-i[0])*a-(e[1]-i[1])*o)/l,h=((e[0]-i[0])*r-(e[1]-i[1])*s)/l;return c>=0&&c<=1&&h>=0&&h<=1?{x:i[0]+s*c,z:i[1]+r*c,t:c}:null}var xd={lat:19.34597,lon:-99.0638};function bh(i,t,e,n){let s=o=>{let a=1;for(;a<t.length-1&&t[a]<o;)a++;let l=(o-t[a-1])/(t[a]-t[a-1]||1);return[i[a-1][0]+(i[a][0]-i[a-1][0])*l,i[a-1][1]+(i[a][1]-i[a-1][1])*l]},r=[s(e)];for(let o=0;o<i.length;o++)t[o]>e+.05&&t[o]<n-.05&&r.push(i[o]);return r.push(s(n)),r}function dv(i,t){let[e,n]=$e(t,xd.lat,xd.lon);if(Math.hypot(e,n)>3500)return;let s=d=>/perif|canal de garay/i.test((d.c.nombre||"")+" "+(d.c.ref||"")),r=i.filter(d=>/ermita/.test(Fd(d.c.nombre)));if(!r.length)return;let o=[];if(i.forEach((d,p)=>{if(!(!s(d)||!po.test(d.c.tipo||"")))for(let S=1;S<d.p.length;S++)for(let g of r)for(let m=1;m<g.p.length;m++){let y=go(d.p[S-1],d.p[S],g.p[m-1],g.p[m]);y&&Math.hypot(y.x-e,y.z-n)<650&&o.push({i:p,k:S,r:y})}}),!o.length||i.some(d=>s(d)&&d.c.puente&&d.p.some(p=>o.some(S=>Math.hypot(p[0]-S.r.x,p[1]-S.r.z)<250))))return;let a=d=>["motorway","trunk","primary","secondary","tertiary"].indexOf(String(d).replace("_link","")),l=o.map(d=>a(i[d.i].c.tipo)).filter(d=>d>=0);if(!l.length)return;let c=Math.min(...l),h=new Set,u=[];for(let d of o){let p=i[d.i];if(a(p.c.tipo)!==c||h.has(d.i))continue;let S=ho(p.p),g=S[S.length-1],m=S[d.k-1]+Math.hypot(d.r.x-p.p[d.k-1][0],d.r.z-p.p[d.k-1][1]),y=Math.max(0,m-75),v=Math.min(g,m+75);h.add(d.i),y>2&&u.push({c:p.c,p:bh(p.p,S,0,y)}),u.push({c:{...p.c,puente:!0,capa:1},p:bh(p.p,S,y,v)}),g-v>2&&u.push({c:p.c,p:bh(p.p,S,v,g)})}let f=i.filter((d,p)=>!h.has(p));i.length=0,i.push(...f,...u)}function pv(i){let t=new Map,e=40,n=new Map;i.forEach((a,l)=>{if(!(a.c.puente||!po.test(a.c.tipo||"")))for(let c=1;c<a.p.length;c++){let h=a.p[c-1],u=a.p[c],f=[h,u,a.c.nombre||""];for(let d=Math.floor(Math.min(h[0],u[0])/e);d<=Math.floor(Math.max(h[0],u[0])/e);d++)for(let p=Math.floor(Math.min(h[1],u[1])/e);p<=Math.floor(Math.max(h[1],u[1])/e);p++){let S=d+","+p;(n.get(S)||n.set(S,[]).get(S)).push(f)}}});let s=a=>{for(let l=1;l<a.p.length;l++){let c=a.p[l-1],h=a.p[l];for(let u=Math.floor(Math.min(c[0],h[0])/e);u<=Math.floor(Math.max(c[0],h[0])/e);u++)for(let f=Math.floor(Math.min(c[1],h[1])/e);f<=Math.floor(Math.max(c[1],h[1])/e);f++)for(let d of n.get(u+","+f)||[])if(d[2]!==(a.c.nombre||"")&&go(c,h,d[0],d[1]))return!0}return!1},r=[];if(i.forEach((a,l)=>{if(!a.c.puente||!po.test(a.c.tipo||"")||!s(a))return;let c=6.2*Math.max(1,Math.min(3,a.c.capa||1));t.set(l,{elev:"puente",H:c,taperA:!1,taperB:!1}),r.push({x:a.p[0][0],z:a.p[0][1],H:c,i:l,fin:0},{x:a.p[a.p.length-1][0],z:a.p[a.p.length-1][1],H:c,i:l,fin:1})}),!r.length)return t;let o=a=>r.filter(l=>Math.hypot(l.x-a[0],l.z-a[1])<1.5);i.forEach((a,l)=>{if(t.has(l)||!po.test(a.c.tipo||""))return;let c=o(a.p[0]),h=o(a.p[a.p.length-1]);!c.length&&!h.length||(c.concat(h).forEach(u=>u.usado=!0),t.set(l,{elev:"rampa",hA:c.length?c[0].H:0,hB:h.length?h[0].H:0}))});for(let a of r)if(!a.usado){let l=t.get(a.i);a.fin===0?l.taperA=!0:l.taperB=!0}return t}function js(i,t){if(!i||!i.elev)return 0;let e=i.cum[i.cum.length-1];if(i.elev==="puente"){let s=1,r=Math.min(45,e/2);return i.taperA&&(s=Math.min(s,t/r)),i.taperB&&(s=Math.min(s,(e-t)/r)),i.H*Math.max(0,Math.min(1,s))}let n=Math.min(90,e);return Math.max(i.hA*Math.max(0,1-t/n),i.hB*Math.max(0,1-(e-t)/n))}function mv(i,t,e){let n=[],s=[],r=[],o=[],a=[],l=(u,f,d,p,S)=>u.push(...f,...d,...p,...p,...d,...S),c=(u,f,d,p)=>{let S=p[0]-d[0],g=p[1]-d[1],m=S*S+g*g||1,y=Math.max(0,Math.min(1,((u-d[0])*S+(f-d[1])*g)/m));return Math.hypot(u-d[0]-S*y,f-d[1]-g*y)};for(let u of i){let f=u.cum[u.cum.length-1],d=Math.max(2,Math.ceil(f/4)),p=u.w/2,S=[];for(let m=0;m<=d;m++){let y=f*m/d,v=Le(u,y);S.push({x:v.x,z:v.z,nx:-v.dz,nz:v.dx,h:js(u,y)})}for(let m=1;m<S.length;m++){let y=S[m-1],v=S[m],_=(T,b,x)=>[T.x+T.nx*p*b,x,T.z+T.nz*p*b];l(n,_(y,1,y.h+.06),_(v,1,v.h+.06),_(y,-1,y.h+.06),_(v,-1,v.h+.06));for(let T of[1,-1]){let b=u.elev==="puente"?Math.max(0,y.h-1.2):0,x=u.elev==="puente"?Math.max(0,v.h-1.2):0;l(s,_(y,T,b),_(v,T,x),_(y,T,y.h+.9),_(v,T,v.h+.9)),(y.h>.4||v.h>.4)&&l(r,_(y,T*1.01,y.h+.9),_(v,T*1.01,v.h+.9),_(y,T*1.01,y.h+1.2),_(v,T*1.01,v.h+1.2))}u.elev==="puente"&&y.h>1.5&&l(s,_(y,1,y.h-1.2),_(v,1,v.h-1.2),_(y,-1,y.h-1.2),_(v,-1,v.h-1.2))}let g=[];for(let m=1;m<u.nl;m++)u.oneway?g.push(-u.w/2+m*u.w/u.nl):g.push(m*u.w/2/u.nl,-m*u.w/2/u.nl);u.oneway||g.push(0);for(let m of g)for(let y=2;y<f-3;y+=9){let v=Le(u,y),_=Le(u,Math.min(f,y+3)),T=js(u,y)+.09,b=js(u,y+3)+.09,x=m===0?.14:.08,M=(C,A,I)=>[C.x-C.dz*A,I,C.z+C.dx*A];l(o,M(v,m+x,T),M(_,m+x,b),M(v,m-x,T),M(_,m-x,b))}if(u.elev==="puente")for(let m=10;m<f-6;m+=26){let y=js(u,m);if(y<3)continue;let v=Le(u,m);t.some(_=>{for(let T=1;T<_.p.length;T++)if(c(v.x,v.z,_.p[T-1],_.p[T])<_.w/2+1.5)return!0;return!1})||a.push([v.x,v.z,y-1.2,Xn(v.dx,v.dz),u.w*.55])}}let h=(u,f)=>{if(!u.length)return;let d=new Be;d.setAttribute("position",new me(u,3)),d.computeVertexNormals();let p=new xt(d,new Wt({color:f,side:Ae}));p.castShadow=!0,p.receiveShadow=!0,e.add(p)};if(h(n,3816773),h(s,11119269),h(r,14857239),h(o,15921906),a.length){let u=new Ge(new ne(1.4,1,1).translate(0,.5,0),new Wt({color:10263960}),a.length),f=new ae,d=new tn,p=new U(0,1,0);a.forEach(([S,g,m,y,v],_)=>{d.setFromAxisAngle(p,y),u.setMatrixAt(_,f.compose(new U(S,0,g),d,new U(1,m,v)))}),u.castShadow=!0,e.add(u)}}function gv(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n.x*s.y-s.x*n.y}return t<0}function ls(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return(t>>>0)/4294967296}function xv(i){if(!Ke||!i||!i.centro)return;let t=Jt&&Jt.O&&Math.hypot(...$e(Jt.O,i.centro.lat,i.centro.lon))<4e3?Jt.O:{lat:i.centro.lat,lon:i.centro.lon},e=Jt,n=new Se,s=new xt(new Pe(9e3,9e3).rotateX(-Math.PI/2),new Wt({color:12174e3,polygonOffset:!0,polygonOffsetFactor:6,polygonOffsetUnits:12}));s.position.y=-.02,s.receiveShadow=!0,n.add(s);let r=[],o={},a=[],l=[],c=[],h=[],u=(i.calles||[]).map(H=>({c:H,p:H.pts.map(([X,Z])=>$e(t,X,Z))})).filter(H=>H.p.length>=2);dv(u,t);let f=pv(u),d=[];for(let H=0;H<u.length;H++){let X=u[H].c,Z=u[H].p,It=/_link$/.test(X.tipo)?"link":pd[X.tipo]?X.tipo:"residential",$=/\beje\s*5\b/i.test((X.nombre||"")+" "+(X.ref||"")),at=X.carriles||($?6:0),ct=at?Math.max(5,Math.min(26,at*3.2)):X.ancho||pd[It],O={p:Z,cum:ho(Z),tipo:It,w:ct,nombre:X.nombre||"",ref:X.ref||"",oneway:!!X.oneway,ncar:at};O.nl=us(O),r.push(O);let lt=f.get(H);if(lt){Object.assign(O,lt),d.push(O);continue}Cn(Z,ct,Cl[It],o[It]||=[]);let st=O.cum[O.cum.length-1],dt=Cl[It]+.012;if(!O.oneway&&ct>=6.5)for(let rt of[-.17,.17]){let ht=[];for(let Mt=0;Mt<=st;Mt+=Math.max(3,st/300)){let Pt=Le(O,Mt);ht.push([Pt.x-Pt.dz*rt,Pt.z+Pt.dx*rt])}Cn(ht,.13,dt,l)}let ut=[];for(let rt=1;rt<O.nl;rt++)O.oneway?ut.push(-ct/2+rt*ct/O.nl):ut.push(rt*ct/2/O.nl,-rt*ct/2/O.nl);for(let rt of ut)for(let ht=2;ht<st-3;ht+=9){let Mt=Le(O,ht),Pt=Le(O,Math.min(st,ht+3));Cn([[Mt.x-Mt.dz*rt,Mt.z+Mt.dx*rt],[Pt.x-Pt.dz*rt,Pt.z+Pt.dx*rt]],.16,dt,a)}if(It!=="service"){Cn(Z,ct+5.2,.012,c);for(let rt=6;rt<st-4&&h.length<1600;rt+=16){if(ls(O.nombre+rt+Z[0][0])<.45)continue;let ht=Le(O,rt),Mt=ls(rt+O.nombre)<.5?1:-1,Pt=(ct/2+1.7)*Mt;h.push([ht.x-ht.dz*Pt,ht.z+ht.dx*Pt,.75+ls(String(rt))*.5])}}}d.length&&mv(d,r.filter(H=>!H.elev),n);let p=ov(r,t,n,h),S=new Wt({color:3816773,side:Ae}),g=new Wt({color:4869461,side:Ae});for(let H in o){let X=ye(o[H]);X.computeVertexNormals();let Z=new xt(X,H==="service"?g:S);Z.receiveShadow=!0,n.add(Z)}if(a.length&&n.add(new xt(ye(a),new xe({color:15921906,side:Ae}))),l.length&&n.add(new xt(ye(l),new xe({color:15909376,side:Ae}))),c.length){let H=new xt(ye(c),new Wt({color:13225156,side:Ae,polygonOffset:!0,polygonOffsetFactor:3,polygonOffsetUnits:6}));H.receiveShadow=!0,n.add(H)}if(h.length){let H=new Ge(new we(.15,.2,1.6,6).translate(0,.8,0),new Wt({color:8018490}),h.length),X=new Ge(new Gs(1.4,0).translate(0,2.6,0),new Wt({color:5939290,flatShading:!0}),h.length),Z=new ae,It=new tn,$=new U,at=new U;h.forEach(([ct,O,lt],st)=>{Z.compose(at.set(ct,0,O),It,$.setScalar(lt)),H.setMatrixAt(st,Z),X.setMatrixAt(st,Z)}),X.castShadow=!0,n.add(H,X)}if(i.casa){let[H,X]=$e(t,i.casa.lat,i.casa.lon),Z=Lh("\u{1F3E0} Mi casa");Z.position.set(H,11,X),n.add(Z)}let m=null;if(i.radar){let[H,X]=$e(t,i.radar.lat,i.radar.lon),Z=null;for(let It of r)for(let $=1;$<It.p.length;$++){let[at,ct]=It.p[$-1],[O,lt]=It.p[$],st=O-at,dt=lt-ct,ut=st*st+dt*dt||1,rt=Math.max(0,Math.min(1,((H-at)*st+(X-ct)*dt)/ut)),ht=at+st*rt,Mt=ct+dt*rt,Pt=Math.hypot(H-ht,X-Mt);if(!Z||Pt<Z.dd-.5||Math.abs(Pt-Z.dd)<.5&&It.w>Z.c.w){let Yt=Math.sqrt(ut);Z={dd:Pt,px:ht,pz:Mt,ux:st/Yt,uz:dt/Yt,c:It}}}if(Z&&Z.dd<60){let It=-Z.uz,$=Z.ux,at=(H-Z.px)*It+(X-Z.pz)*$>=0?1:-1,ct=Z.c.w/2+1.3,O=new Se;O.position.set(Z.px+It*ct*at,0,Z.pz+$*ct*at);let lt=new Wt({color:10134445}),st=new xt(new we(.14,.18,6.2,8),lt);st.position.y=3.1,st.castShadow=!0,O.add(st);let dt=new xt(new ne(.12,.12,2.2),lt);dt.position.set(0,6.1,-1*at),dt.rotation.y=0,O.add(dt);let ut=new xt(new ne(.9,.6,.7),new Wt({color:15921906}));ut.position.set(0,5.6,-1.9*at),O.add(ut);let rt=new xt(new we(.18,.18,.12,12).rotateX(Math.PI/2),new xe({color:1118481}));rt.position.set(.48,5.6,-1.9*at),rt.rotation.y=Math.PI/2,O.add(rt);let ht=new xt(new Ln(.11,8,6),new xe({color:16722458}));ht.position.set(.3,5.98,-1.9*at),O.add(ht);let Mt=new Li(new di({map:Gl.map,color:16777215,transparent:!0,depthWrite:!1,blending:mi}));Mt.scale.set(9,9,1),Mt.position.set(0,5.6,-1.9*at),Mt.visible=!1,O.add(Mt);let Pt=Lh("\u{1F4F8} Radar \xB7 50");Pt.position.set(0,8.4,0),O.add(Pt),O.rotation.y=Xn(Z.ux,Z.uz),n.add(O),m={g:O,led:ht,flash:Mt}}}let y=[],v={};for(let H of r.slice().sort((X,Z)=>Z.w-X.w)){if(!H.nombre||H.elev||y.length>=90)continue;let X=H.cum[H.cum.length-1],Z=iv(H.nombre),It=Math.max(2.6,Math.min(6,H.w*.42)),$=It*Z.ar;if(!(X<$*.9))for(let at=Math.min(X/2,40+$/2);at<X-$/2&&y.length<90;at+=170){let ct=Le(H,at),O=H.nombre+Math.round(ct.x/120)+","+Math.round(ct.z/120);if(v[O])continue;v[O]=1;let lt=new xt(new Pe($,It).rotateX(-Math.PI/2),Z.mat);lt.position.set(ct.x,Cl[H.tipo]+.03,ct.z),lt.userData.base=Xn(ct.dx,ct.dz),lt.userData.dx=ct.dx,lt.userData.dz=ct.dz,lt.renderOrder=2,n.add(lt),y.push(lt)}}let _=[];{let X=new Map,Z=(rt,ht)=>Math.floor(rt/25)+","+Math.floor(ht/25);for(let rt of r)for(let ht=1;ht<rt.p.length;ht++){let[Mt,Pt]=rt.p[ht-1],[Yt,D]=rt.p[ht],ie={x1:Mt,z1:Pt,x2:Yt,z2:D,r:rt.w/2+2.4};for(let kt=Math.floor((Math.min(Mt,Yt)-12)/25);kt<=Math.floor((Math.max(Mt,Yt)+12)/25);kt++)for(let ue=Math.floor((Math.min(Pt,D)-12)/25);ue<=Math.floor((Math.max(Pt,D)+12)/25);ue++){let vt=kt+","+ue;(X.get(vt)||X.set(vt,[]).get(vt)).push(ie)}}let It=(rt,ht,Mt)=>{let Pt=Mt.x2-Mt.x1,Yt=Mt.z2-Mt.z1,D=Pt*Pt+Yt*Yt||1,ie=((rt-Mt.x1)*Pt+(ht-Mt.z1)*Yt)/D;return ie=Math.max(0,Math.min(1,ie)),Math.hypot(rt-Mt.x1-Pt*ie,ht-Mt.z1-Yt*ie)},$=(rt,ht,Mt)=>{let Pt=Math.floor(rt/25),Yt=Math.floor(ht/25);for(let D=-1;D<=1;D++)for(let ie=-1;ie<=1;ie++)for(let kt of X.get(Pt+D+","+(Yt+ie))||[])if(It(rt,ht,kt)<kt.r+Mt)return!1;return!0},at=new Map,ct=8,O=(rt,ht)=>{let Mt=Math.floor(rt/ct)+","+Math.floor(ht/ct);(at.get(Mt)||at.set(Mt,[]).get(Mt)).push([rt,ht])},lt=(rt,ht,Mt)=>{let Pt=Math.floor(rt/ct),Yt=Math.floor(ht/ct);for(let D=-1;D<=1;D++)for(let ie=-1;ie<=1;ie++)for(let[kt,ue]of at.get(Pt+D+","+(Yt+ie))||[])if(Math.hypot(kt-rt,ue-ht)<Mt)return!0;return!1};for(let rt of i.edificios||[])if(rt.pts&&rt.pts.length){let ht=0,Mt=0;for(let[Pt,Yt]of rt.pts){let[D,ie]=$e(t,Pt,Yt);ht+=D,Mt+=ie}O(ht/rt.pts.length,Mt/rt.pts.length)}let[st,dt]=$e(t,i.centro.lat,i.centro.lon),ut=r.filter(rt=>!/^(service|motorway|link)$/.test(rt.tipo)).sort((rt,ht)=>rt.w-ht.w);for(let rt of ut){let ht=rt.cum[rt.cum.length-1];for(let Mt of[1,-1]){let Pt=5;for(;Pt<ht-5&&_.length<2600;){let Yt=ls(rt.nombre+"|"+Mt+"|"+Math.round(Pt)+"|"+Math.round(rt.p[0][0])),D=6+Yt*4.5,ie=9+Yt*7%1*5,kt=Le(rt,Pt+D/2);if(Pt+=D+.25,Math.hypot(kt.x-st,kt.z-dt)>750||Yt<.06)continue;let ue=-kt.dz*Mt,vt=kt.dx*Mt,Ce=rt.w/2+2.7+ie/2,Bt=kt.x+ue*Ce,Vt=kt.z+vt*Ce;if(!$(Bt,Vt,ie/2-.3)||!$(Bt+kt.dx*D/2,Vt+kt.dz*D/2,.4)||!$(Bt-kt.dx*D/2,Vt-kt.dz*D/2,.4)||lt(Bt,Vt,Math.min(D,ie)*.85)||p.barco&&Math.hypot(Bt-p.barco.x,Vt-p.barco.z)<66||p.libres&&p.libres.some(([gt,St])=>Math.hypot(Bt-gt,Vt-St)<9)||rt.oneway&&r.some(gt=>gt!==rt&&gt.oneway&&gt.nombre&&gt.nombre===rt.nombre&&(()=>{let St=ei(gt,kt.x,kt.z);return St.d>140?!1:ei(gt,Bt,Vt).d<St.d})()))continue;O(Bt,Vt);let R=kt.dx*D/2,E=kt.dz*D/2,G=ue*ie/2,pt=vt*ie/2,it=Yt<.35?1:Yt<.85?2:3;_.push({loc:[[Bt-R-G,Vt-E-pt],[Bt+R-G,Vt+E-pt],[Bt+R+G,Vt+E+pt],[Bt-R+G,Vt-E+pt]],h:3*it+Yt*31%1*.6,id:"s"+Bt.toFixed(1)+Vt.toFixed(1)})}}}}let T=[15918022,15250592,13227743,16045453,12114110,15123414,14209732,11125984,15778427,14736853,16171425,12572902],b=[],x=[],M=[],C=(H,X)=>{let Z=new Be;for(let It of["position","uv"]){let $=H.attributes[It];Z.setAttribute(It,new Qe($.array.slice(X.start*$.itemSize,(X.start+X.count)*$.itemSize),$.itemSize))}return Z};for(let H of(i.edificios||[]).concat(_)){if(!H.loc&&(!H.pts||H.pts.length<4))continue;if(p.barco&&!H.loc){let $=H.pts.map(([dt,ut])=>$e(t,dt,ut)),at=p.barco.x,ct=p.barco.z,O=0,lt=0;for(let[dt,ut]of $)O+=dt,lt+=ut;O/=$.length,lt/=$.length;let st=!1;for(let dt=0,ut=$.length-1;dt<$.length;ut=dt++){let[rt,ht]=$[dt],[Mt,Pt]=$[ut];ht>ct!=Pt>ct&&at<(Mt-rt)*(ct-ht)/(Pt-ht||1e-9)+rt&&(st=!st)}if(st||Math.hypot(O-at,lt-ct)<75||$.some(([dt,ut])=>Math.hypot(dt-at,ut-ct)<52))continue}let X=H.loc?H.loc.map(([$,at])=>new mt($,-at)):H.pts.map(([$,at])=>{let[ct,O]=$e(t,$,at);return new mt(ct,-O)}),Z=ls(H.id||H.pts[0][0]+","+H.pts[0][1]);H.loc&&gv(X)&&X.reverse();let It=H.h||(Z<.55?3.2*(1+Math.floor(Z*4)):Z<.9?3.2*(2+Math.floor(Z*3)):3.2*(5+Math.floor(Z*8)));try{let $=new Hs(new ts(X),{depth:It,bevelEnabled:!1}).rotateX(-Math.PI/2);$.index&&($=$.toNonIndexed());let at=T[Math.floor(Z*T.length)];for(let st of $.groups){let dt=Wn(C($,st),at);(st.materialIndex===0?x:b).push(dt)}let ct=0,O=0,lt=0;for(let st=0;st<X.length;st++){let dt=X[st],ut=X[(st+1)%X.length],rt=dt.x*ut.y-ut.x*dt.y;ct+=rt,O+=(dt.x+ut.x)*rt,lt+=(dt.y+ut.y)*rt}ct/=2,Math.abs(ct)>30&&Z*7%1<.8&&(O/=6*ct,lt/=6*ct,M.push([O+(Z*13%1-.5)*2,It,-lt+(Z*17%1-.5)*2]))}catch{}}for(let H=0;H<b.length;){let X=0,Z=H;for(;Z<b.length&&X<24e3;)X+=b[Z++].attributes.position.count;let It=ye(b.slice(H,Z));It.computeVertexNormals(),H=Z;let $=new xt(It,_v());$.castShadow=!0,$.receiveShadow=!0,$.name="muros",n.add($)}if(x.length){let H=ye(x);H.computeVertexNormals();let X=new xt(H,new Wt({vertexColors:!0}));X.receiveShadow=!0,n.add(X)}if(M.length){let H=ye([Wn(new we(.6,.6,1.15,10).translate(0,.78,0),1776411),Wn(new we(.62,.62,.08,10).translate(0,1.38,0),2763306),Wn(new ne(1.1,.2,1.1).translate(0,.1,0),10131342)].map(Hh));H.computeVertexNormals();let X=new Ge(H,new Wt({vertexColors:!0}),M.length),Z=new ae;M.forEach(([It,$,at],ct)=>X.setMatrixAt(ct,Z.makeTranslation(It,$,at))),X.castShadow=!0,n.add(X)}let A=[],I=[],L=[],B=[],P=[];for(let H of i.rieles||[]){let X=H.pts.map(([It,$])=>$e(t,It,$));if(X.length<2)continue;let Z={p:X,cum:ho(X),elevado:!!H.elevado,y:H.elevado?8:.12,periodo:H.l8?8:60,vagones:H.l8?6:9,t:Math.random()*60};if(!(Z.cum[Z.cum.length-1]<40)){if(A.push(Z),Z.elevado){Cn(X,9,8,B),Cn(X,9,6.8,B);let It=Z.cum[Z.cum.length-1];for(let $=5;$<It;$+=26){let at=Le(Z,$);P.push(new ne(1.4,6.8,1.4).translate(at.x,3.4,at.z))}}else Cn(X,8.4,.07,I);for(let It of[-2.45,-1.05,1.05,2.45]){let $=[],at=Z.cum[Z.cum.length-1];for(let ct=0;ct<=at;ct+=Math.max(4,at/200)){let O=Le(Z,ct);$.push([O.x-O.dz*It,O.z+O.dx*It])}Cn($,.12,Z.y+.1,L)}}}if(I.length&&n.add(new xt(ye(I),new Wt({color:7037528,side:Ae}))),L.length&&n.add(new xt(ye(L),new Wt({color:10133670,side:Ae}))),B.length){let H=new xt(ye(B),new Wt({color:12170925,side:Ae}));H.castShadow=!0,n.add(H)}if(P.length){let H=new xt(ye(P),new Wt({color:11578788}));H.castShadow=!0,n.add(H)}let z=new Ge(Nd(),Vi,400);z.count=0,z.castShadow=!0,n.add(z);let q=[],W=[],ft=[],J=[];for(let H of i.troles||[]){let X=H.pts.map(([$,at])=>$e(t,$,at));if(X.length<2)continue;let Z={p:X,cum:ho(X),periodo:30};if(Z.cum[Z.cum.length-1]<40)continue;q.push(Z),Cn(X,9.5,8.5,W),Cn(X,9.5,7.3,W);let It=Z.cum[Z.cum.length-1];for(let $=5;$<It;$+=30){let at=Le(Z,$);ft.push(new ne(1.5,7.3,1.5).translate(at.x,3.65,at.z))}for(let $ of[-2.2,-1.3,1.3,2.2]){let at=[];for(let ct=0;ct<=It;ct+=Math.max(5,It/200)){let O=Le(Z,ct);at.push([O.x-O.dz*$,O.z+O.dx*$])}Cn(at,.06,13.1,J)}for(let $=10;$<It;$+=40){let at=Le(Z,$);for(let ct of[-1,1])ft.push(new ne(.18,5,.18).translate(at.x-at.dz*4.4*ct,11,at.z+at.dx*4.4*ct))}}if(W.length){let H=new xt(ye(W),new Wt({color:13223613,side:Ae}));H.castShadow=!0,n.add(H)}if(ft.length){let H=new xt(ye(ft),new Wt({color:11578788}));H.castShadow=!0,n.add(H)}J.length&&n.add(new xt(ye(J),new xe({color:2763306,side:Ae})));let nt=new Ge(Ld(),Vi,60);nt.count=0,nt.castShadow=!0,n.add(nt);let ot=[],Ft=[],qt=[];for(let H of i.mb||[]){let X=H.pts.map(([$,at])=>$e(t,$,at));if(X.length<2)continue;let Z={p:X,cum:ho(X),periodo:40,l:H.l},It=Z.cum[Z.cum.length-1];if(!(It<30)){ot.push(Z);for(let $ of[-3.6,3.6]){let at=[];for(let ct=0;ct<=It;ct+=Math.max(4,It/300)){let O=Le(Z,ct);at.push([O.x-O.dz*$,O.z+O.dx*$])}Cn(at,.28,.075,Ft);for(let ct=0;ct<=It;ct+=6){let O=Le(Z,ct);qt.push({x:O.x-O.dz*$,z:O.z+O.dx*$,c:ki.metrobus,f:Math.floor(ct/6)%3})}}}}Ft.length&&n.add(new xt(ye(Ft),new xe({color:15909376,side:Ae})));let j=new Ge(Dd(),Vi,80);j.count=0,j.castShadow=!0,n.add(j);for(let H of r){if(H.w<7||H.elev)continue;let X=H.cum[H.cum.length-1],Z=H.w>=12?5:7,It=Cl[H.tipo];for(let $=0;$<=X;$+=Z){let at=Le(H,$),ct=Math.floor($/Z)%3;for(let O of[-1,1])qt.push({x:at.x-at.dz*(H.w/2-.4)*O,z:at.z+at.dx*(H.w/2-.4)*O,y:It,c:ki.orilla,f:ct});if(!H.oneway&&H.w>=10)qt.push({x:at.x,z:at.z,y:It,c:ki.carril,f:ct});else if(H.oneway&&H.w>=10)for(let O of[-1,1])qt.push({x:at.x-at.dz*H.w*.17*O,z:at.z+at.dx*H.w*.17*O,y:It,c:ki.carril,f:ct})}if(qt.length>14e3)break}let Ct=Id(qt);n.add(Ct),Ke.add(n);let Ot={O:t,grupo:n,calles:r,etiquetas:y,rieles:A,tren:z,troles:q,trole:nt,mbs:ot,mbus:j,luces:Ct,listo:!0,coches:e?e.coches:[],motos:e?e.motos:[],pj:e?e.pj:null,rastro:e?e.rastro:[],taxi:e?e.taxi:null,cruce:e?e.cruce:null,radar:m,cruces:rv(r),letreros:e?e.letreros:null,hitos:p};e&&(Ke.remove(e.grupo),e.grupo.traverse(H=>{H.geometry&&H.geometry!==Ul&&H.geometry.dispose()})),e&&e.O!==t&&(Ot.pj=null,Ot.rastro=[]),Jt=Ot,Nh&&Od(Nh);for(let H of Jt.coches)H.ci=-1;for(let H of Jt.motos)H.ci=-1;Bd()}var Nh=null;function Od(i){if(Nh=i,!Jt||!Jt.O||(Jt.trafG&&(Jt.grupo.remove(Jt.trafG),Jt.trafG.traverse(s=>{s.geometry&&s.geometry.dispose()}),Jt.trafG=null),!i||!i.length))return;let t={cerr:[],rojo:[],amar:[],verde:[]};for(let s of i){let r=s.pts.map(([a,l])=>$e(Jt.O,a,l));if(r.length<2||Math.hypot(r[0][0]-(Jt.pj?Jt.pj.x:0),r[0][1]-(Jt.pj?Jt.pj.z:0))>1500)continue;let o=s.nivel<0?"cerr":s.nivel<.45?"rojo":s.nivel<.75?"amar":"verde";Cn(r,o==="verde"?1.4:2.2,.095,t[o])}let e={cerr:9109504,rojo:15022389,amar:15905280,verde:3129178},n=new Se;for(let s in t)if(t[s].length){let r=new xt(ye(t[s]),new xe({color:e[s],transparent:!0,opacity:s==="verde"?.55:.8,side:Ae,depthWrite:!1}));r.renderOrder=1,n.add(r)}Jt.grupo.add(n),Jt.trafG=n}var cs=null;function _v(){if(cs)return cs;let i=4,t=256,e=document.createElement("canvas"),n=document.createElement("canvas");e.width=e.height=n.width=n.height=t;let s=e.getContext("2d"),r=n.getContext("2d");s.fillStyle="#ffffff",s.fillRect(0,0,t,t),r.fillStyle="#000",r.fillRect(0,0,t,t);let o=t/i;for(let c=0;c<i;c++)for(let h=0;h<i;h++){let u=c*o,f=h*o;s.fillStyle="rgba(0,0,0,.10)",s.fillRect(u+o*.18,f+o*.24,o*.64,o*.52),s.fillStyle="#33414f",s.fillRect(u+o*.22,f+o*.28,o*.56,o*.44),s.fillStyle="#5a6b7c",s.fillRect(u+o*.49,f+o*.28,o*.03,o*.44),Math.random()<.55&&(r.fillStyle=Math.random()<.3?"#ffe7b0":"#ffc96b",r.fillRect(u+o*.22,f+o*.28,o*.56,o*.44))}let a=new wn(e),l=new wn(n);for(let c of[a,l])c.wrapS=c.wrapT=Qi,c.repeat.set(1/(3.2*i),1/(3.2*i)),c.colorSpace=Fe,c.anisotropy=4;return cs=new Wt({vertexColors:!0,map:a,emissiveMap:l,emissive:0}),cs}var Eh={};function vv(i){let t=i?"n":"d";if(Eh[t])return Eh[t];let e=document.createElement("canvas");e.width=4,e.height=256;let n=e.getContext("2d"),s=n.createLinearGradient(0,0,0,256);i?(s.addColorStop(0,"#03060f"),s.addColorStop(.55,"#0d1630"),s.addColorStop(1,"#27324f")):(s.addColorStop(0,"#5f9fd8"),s.addColorStop(.6,"#a9d0ee"),s.addColorStop(1,"#dce9f2")),n.fillStyle=s,n.fillRect(0,0,4,256);let r=new wn(e);return r.colorSpace=Fe,Eh[t]={t:r,horiz:i?2568783:14477810}}var zl="muestra";function Bd(){let i=!!(Jt&&Jt.listo&&Rt.pos);if((i?"real":"muestra")!==zl){zl=i?"real":"muestra",yi.ini=!1,xn.visible=!i,nn&&(nn.tren.visible=!i);for(let t of Sn)t!==Ut&&(t.g.visible=!i);if(Jt){Jt.grupo.visible=i;for(let t of Jt.coches)t.g.visible=i;for(let t of Jt.motos)t.g.visible=i;Jt.taxi&&(Jt.taxi.g.visible=i),Jt.cruce&&(Jt.cruce.g.visible=i&&Rt.rojo),Jt.letreros&&!i&&Jt.letreros.forEach(t=>t.visible=!1)}i||(Ut.g.rotation.y=0,Ut.z=Wi[1]),Ol()}}function yv(i,t,e=22,n){let s=null;for(let r=0;r<Jt.calles.length;r++){let o=Jt.calles[r];if(o.tipo==="service"&&!n)continue;let a=o.p;for(let l=1;l<a.length;l++){let c=a[l-1][0],h=a[l-1][1],u=a[l][0]-c,f=a[l][1]-h,d=u*u+f*f;if(!d)continue;let p=((i-c)*u+(t-h)*f)/d;p=Math.max(0,Math.min(1,p));let S=c+u*p,g=h+f*p,m=Math.hypot(i-S,t-g),y=m;if(n){let v=Math.sqrt(d);y+=(1-Math.abs((u*n[0]+f*n[1])/v))*8}if(m<e&&(!s||y<s.pen)){let v=Math.sqrt(d);s={ci:r,i:l,t:p,x:S,z:g,d:m,pen:y,dx:u/v,dz:f/v,s:o.cum[l-1]+v*p}}}}return s}function us(i){return i.ncar?i.oneway?Math.max(1,Math.round(i.ncar)):Math.max(1,Math.round(i.ncar/2)):i.oneway?Math.max(1,Math.min(5,Math.floor(i.w/2.8))):Math.max(1,Math.min(4,Math.floor(i.w/2/2.8)))}function mo(i,t){let e=i.nl||us(i);return i.oneway?-i.w/2+(t+.5)*i.w/e:(t+.5)*i.w/2/e}function Ll(i){let t=i.nl||us(i);return t>=3?t-2:t-1}var _d=null;function Mv(){let i=Jt,[t,e]=$e(i.O,Rt.pos.lat,Rt.pos.lon);i.pj||(i.pj={x:t,z:e,cx:t,cz:e,tx:t,tz:e,h:0,ht:0,ci:-1,s:0,dir:1,rx:t,rz:e,v:0,off:0,offObj:0,carril:null,tc:0});let n=i.pj,s=t-n.rx,r=e-n.rz,o=Math.hypot(s,r),a=o>1.5?[s/o,r/o]:[Math.cos(n.ht),-Math.sin(n.ht)],l=yv(t,e,25,a);if(l){let c=i.calles[l.ci],h=l.dx*a[0]+l.dz*a[1]>=0?1:-1,u=l.dx*h,f=l.dz*h;n.tx=l.x,n.tz=l.z,(n.ci!==l.ci||n.dir!==h)&&(n.carril=Ll(c)),n.ci=l.ci,n.s=l.s,n.dir=h,(o>1.5||n.ci!==l.ci)&&(n.ht=Xn(u,f))}else n.tx=t,n.tz=e,o>1.5&&(n.ht=Xn(a[0],a[1])),n.ci=-1;if(o>1.5&&(n.rx=t,n.rz=e),Math.hypot(n.tx-n.cx,n.tz-n.cz)>300){n.cx=n.tx,n.cz=n.tz,n.h=n.ht,n.off=n.offObj=0,i.rastro=[],yi.ini=!1;for(let c of i.coches)c.ci=-1;for(let c of i.motos)c.ci=-1}}function Sv(i,t){let e=Dl(i),n=[];return i.calles.forEach((s,r)=>{if(s.tipo==="service"||s.tipo==="living_street")return;let o=s.p[Math.floor(s.p.length/2)];Math.hypot(o[0]-e.x,o[1]-e.z)<t+s.cum[s.cum.length-1]/2&&n.push(r)}),n}function Il(i,t,e,n){let s=i.pj;if(n&&!he&&s.ci>=0&&Math.random()<.6){let o=i.calles[s.ci],a=o.cum[o.cum.length-1];t.ci=s.ci,t.dir=Math.random()<.75||o.oneway?s.dir:-s.dir,t.s=Math.max(0,Math.min(a,s.s+t.dir*(t.dir===s.dir?(Math.random()<.5?12:-12)+(Math.random()-.5)*220:(Math.random()-.5)*300)))}else{if(!e.length){t.ci=-1;return}t.ci=e[Math.floor(Math.random()*e.length)];let o=i.calles[t.ci],a=o.cum[o.cum.length-1];t.dir=o.oneway||Math.random()<.5?1:-1,t.s=Math.random()*a}t.v=t.vmax*.6,t.lado=(Math.random()-.5)*.6;let r=i.calles[t.ci];t.carril=Math.floor(Math.random()*(r.nl||us(r)))}function bv(i){let t=Rt.nivel==="pesado",e=t?46:16,n=6;for(;i.coches.length<e;){let s=Ed(),r=fo(s==="trailer"&&!Rt.pico?"sedan":s,ti(Ih),2831424);i.coches.push({...r,ci:-1,s:0,dir:1,v:0,vmax:0,a:0,lado:0})}for(;i.coches.length>e;)Ke.remove(i.coches.pop().g);for(;i.motos.length<n;){let s=fo("moto",ti([12986408,1402304,2236962]),ti([3622735,7162945]));i.motos.push({...s,ci:-1,s:0,dir:1,v:12,vmax:12,a:0,fase:Math.random()*6})}i.taxi||(i.taxi=fo("taxi"));for(let s of i.coches)s.vmax=t?3+Math.random()*3:9+Math.random()*5}function vd(i,t,e=0){let n=i.calles[t.ci],s=Le(n,t.s),r=s.dx*t.dir,o=s.dz*t.dir,a=n.nl||us(n),l=Math.min(a-1,t.carril==null?a-1:t.carril),c=mo(n,l)+e;t.g.position.set(s.x-o*c,js(n,t.s),s.z+r*c),t.g.rotation.y=Xn(r,o)}function Ev(i,t){let e=i.pj;if(e.tc+=t,e.ci<0){e.offObj=0,e.carrilFis=null;return}let n=i.calles[e.ci],s=n.nl||us(n);(e.carril==null||e.carril>=s)&&(e.carril=Ll(n));let r=Ut.v,o=r>40/3.6,a=p=>(p.s-e.s)*e.dir,l=i.coches.filter(p=>p.ci===e.ci&&p.g.visible),c=(p,S,g)=>l.some(m=>m.dir===e.dir&&(m.carril||0)===p&&a(m)>S&&a(m)<g),h=(p,S)=>l.some(g=>g.dir!==e.dir&&a(g)>p&&a(g)<S),u=l.find(p=>p.dir===e.dir&&(p.carril||0)===e.carril&&a(p)>1&&a(p)<24+r&&p.v<r-1.2);if(e.carril===-1&&h(-3,35))e.carril=0,e.tc=0;else if(e.tc>1.1){if(o&&u){let p=[e.carril-1,e.carril+1].filter(S=>S>=0&&S<s);s===1&&!n.oneway&&!h(-8,55)&&p.push(-1);for(let S of p)if(S===-1||!c(S,-9,16)){e.carril=S,e.tc=0;break}}else if(e.carril!==Ll(n)){let p=Ll(n);c(p,-11,9+r*.6)||(e.carril=p,e.tc=0)}}e.offObj=e.carril===-1?-mo(n,0):mo(n,e.carril);let f=0,d=1e9;for(let p=0;p<s;p++){let S=Math.abs(mo(n,p)-e.off);S<d&&(d=S,f=p)}e.carrilFis=f}function Tv(i,t){let e=i.pj;if(!i.letreros){i.letreros=[];for(let l=0;l<4;l++){let c=new di({depthTest:!1,depthWrite:!1,sizeAttenuation:!1,transparent:!0}),h=new Li(c);h.renderOrder=20,h.center.set(.5,0),h.visible=!1,Ke.add(h),i.letreros.push(h)}}if(i.tLet=(i.tLet||0)+t,i.tLet<.25&&i.letSel){yd(i);return}i.tLet=0;let n=e.x,s=e.z,r=e.h,o=e.ci>=0?i.calles[e.ci]:null;if(he){let l=kl();n=l.x,s=l.z,r=he.h,o=null;let c=28,h=Math.cos(r),u=-Math.sin(r);for(let f of i.calles){if(f.elev||!f.nombre)continue;let d=ei(f,n,s);d.d<c&&Math.abs(d.dx*h+d.dz*u)>.55&&(c=d.d,o=f)}}i.letV={x:n,z:s};let a=o&&o.nombre;if(i.letSel=[],a){let l=Math.cos(r),c=-Math.sin(r),h=new Set,u=i.cruces.filter(f=>f.a===a||f.b===a).map(f=>{let d=f.x-n,p=f.z-s;return{k:f,ad:d*l+p*c,lat:Math.abs(-d*c+p*l),otro:f.a===a?f.b:f.a}}).filter(f=>f.ad>-6&&f.ad<260&&f.lat<22+o.w).sort((f,d)=>f.ad-d.ad);for(let f of u)if(!h.has(f.otro)&&(h.add(f.otro),i.letSel.push(f),i.letSel.length>=i.letreros.length))break}yd(i)}var oo=new U;function yd(i){let t=i.pj,e=Math.tan(Ne.fov*Math.PI/360),n=-1/0;Ne.updateMatrixWorld(),i.letreros.forEach((s,r)=>{let o=i.letSel&&i.letSel[r];if(!o){s.visible=!1;return}let a=sv(o.otro);s.material.map!==a.t&&(s.material.map=a.t,s.material.needsUpdate=!0);let l=i.letV||t,c=Math.hypot(o.k.x-l.x,o.k.z-l.z),h=.052+.03*Math.max(0,1-c/160);s.scale.set(h*a.ar,h,1),s.position.set(o.k.x,4.2,o.k.z),s.material.opacity=c>230?Math.max(0,(260-c)/30):1,s.visible=!0,s.renderOrder=30-r,oo.copy(s.position).applyMatrix4(Ne.matrixWorldInverse);let u=-oo.z;if(u>.5){oo.copy(s.position).project(Ne);let f=h/e,d=n+.012-oo.y;d>0&&(s.position.y+=d*e*u),n=Math.max(n,oo.y+Math.max(0,d))+f}})}function wv(i){let t=Jt;Nn+=i,(!t.pj||_d!==Rt.pos.ts)&&(_d=Rt.pos.ts,Mv());let e=t.pj,n=1-Math.exp(-i*2.2);e.cx+=(e.tx-e.cx)*n,e.cz+=(e.tz-e.cz)*n;let s=e.ht-e.h;s=Math.atan2(Math.sin(s),Math.cos(s)),e.h+=s*(1-Math.exp(-i*3)),Ev(t,i);let r=e.off;e.off+=(e.offObj-e.off)*(1-Math.exp(-i*1.6));let o=(e.off-r)/Math.max(i,.001);e.x=e.cx+Math.sin(e.h)*e.off,e.z=e.cz+Math.cos(e.h)*e.off;let a=window.__velDbg!=null?window.__velDbg/3.6:Rt.rojo||Rt.llego?0:Rt.vel!=null?Rt.vel/3.6:0,l=Ut.v;Ut.v+=(a-Ut.v)*(1-Math.exp(-i*1.5)),Ut.a=(Ut.v-l)/Math.max(i,.001);{let v=e.ci>=0?t.calles[e.ci]:null,_=v&&v.elev?js(v,ei(v,e.cx,e.cz).s):0;e.y=(e.y||0)+(_-(e.y||0))*(1-Math.exp(-i*2.5))}Ut.g.position.set(e.x,e.y,e.z),Ut.g.rotation.y=e.h-Math.max(-.3,Math.min(.3,o*.09));let c=Ut.a<-.4||Ut.v<.4;Ut.stop.material=c?uo:Qs,Ut.glow.visible=c||Rt.noche,Ut.glow.scale.x=c?5.5:2.5,hs.position.y=3.3+Math.sin(Nn*3)*.2,hs.rotation.y+=.03;let h=t.rastro[t.rastro.length-1];(!h||Math.hypot(h[0]-e.x,h[1]-e.z)>.6)&&(t.rastro.push([e.x,e.z]),t.rastro.length>120&&t.rastro.shift()),bv(t);let u=Sv(t,320),f=Rt.nivel==="pesado",d={};for(let v of t.coches){if((v.ci<0||v.ci>=t.calles.length)&&Il(t,v,u,f),v.ci<0){v.g.visible=!1;continue}let _=t.calles[v.ci],T=_.cum[_.cum.length-1],b=Le(_,v.s),x=Dl(t);if(Math.hypot(b.x-x.x,b.z-x.z)>380||v.s<=0&&v.dir<0||v.s>=T&&v.dir>0){Il(t,v,u,f);continue}(d[v.ci+":"+v.dir+":"+(v.carril||0)]||=[]).push(v)}for(let v in d){let _=d[v],[T,b,x]=v.split(":").map(Number),M=T===e.ci&&b===e.dir&&(x===e.carril||x===e.carrilFis),C=_.map(A=>({o:A,s:A.s}));M&&C.push({o:null,s:e.s,v:Ut.v}),C.sort((A,I)=>(I.s-A.s)*b);for(let A=0;A<C.length;A++){let I=C[A];if(!I.o)continue;let L=I.o,B=L.vmax;if(A>0){let q=(C[A-1].s-L.s)*b-6;B=Math.min(B,Math.max(0,q*.9))}f&&Math.random()<.002&&(L.frena=1.3),L.frena>0&&(L.frena-=i,B=0),M&&A>0&&!C[A-1].o&&(e.s-L.s)*b<0;let P=L.v;if(L.v+=(B-L.v)*(1-Math.exp(-i*2)),L.a=(L.v-P)/Math.max(i,.001),L.s+=L.v*b*i,M){let q=(L.s-e.s)*b;q>-5&&q<6&&(L.s=e.s+b*(q>=0?6:-6))}vd(t,L),L.g.visible=!0;let z=L.a<-.5||L.v<.5;L.stop.material=z?uo:Qs,L.glow.visible=z||Rt.noche,L.glow.scale.x=z?5.5:2.5,L.haz.visible=Rt.noche}}for(let v of t.motos){if((v.ci<0||v.ci>=t.calles.length)&&Il(t,v,u,!0),v.ci<0){v.g.visible=!1;continue}let _=t.calles[v.ci],T=_.cum[_.cum.length-1];v.fase+=i,v.s+=v.vmax*v.dir*i;let b=Le(_,v.s),x=Dl(t);if(v.s<=0||v.s>=T||Math.hypot(b.x-x.x,b.z-x.z)>380){Il(t,v,u,!0);continue}{let M=_.nl||us(_);v.carril=M-1,vd(t,v,-(M>=2?_.w/(_.oneway?1:2)/M/2:mo(_,0)*.5)+Math.sin(v.fase*.9)*.6)}v.g.visible=!0,v.haz.visible=Rt.noche}{let v=t.taxi,_=t.rastro,T=0,b=_.length-1,x=e.x,M=e.z,C=e.h,A=7.5+Math.min(6,Ut.v*.5);for(;b>0&&T<A;){let I=_[b][0]-_[b-1][0],L=_[b][1]-_[b-1][1],B=Math.hypot(I,L);if(T+B>=A){let P=(A-T)/B;x=_[b][0]-I*P,M=_[b][1]-L*P,C=Xn(I,L),T=A;break}T+=B,b--}T<A&&(x=e.x-Math.cos(e.h)*A,M=e.z+Math.sin(e.h)*A,C=e.h),v.g.position.set(x,e.y||0,M),v.g.rotation.y=C,v.g.visible=!0,v.stop.material=c?uo:Qs,v.glow.visible=c||Rt.noche,v.glow.scale.x=c?5.5:2.5,v.haz.visible=Rt.noche}Rv(i),Av(i);let p=Dl(t),S=v=>Math.hypot(v.x-p.x,v.z-p.z)<520;{let v=[];for(let _ of t.troles)dd(_,i,12,12,1,0,1.75,8.5,v);Bl(t.trole,v.filter(S))}{let v=[];for(let _ of t.mbs)dd(_,i,10,18,1,0,1.75,0,v);Bl(t.mbus,v.filter(S))}if(Pd(t.luces,Nn),Tv(t,i),t.hitos&&t.hitos.sem&&cv(t.hitos.sem,Nn),t.radar){let v=Rt.foto&&Date.now()-Rt.foto<1500;t.radar.flash.visible=v&&Math.floor(Nn*10)%2===0,t.radar.led.material.color.setHex(Math.floor(Nn*2)%2?16722458:5570560)}let g=new U;Ne.getWorldDirection(g);let m=-g.z,y=g.x;for(let v of t.etiquetas)v.rotation.y=v.userData.base+(v.userData.dx*m+v.userData.dz*y<0?Math.PI:0)}function Av(i){let t=Jt,e=t.tren,n=new ae,s=new tn,r=new U,o=new U(1,1,1),a=new U(0,1,0),l=0,c=16;for(let h of t.rieles){h.t+=i;let u=h.cum[h.cum.length-1],f=h.vagones*15.3,d=h.periodo*c;for(let p of[1,-1]){let S=p*1.75,g=(h.t+(p<0?h.periodo/2:0))*c%Math.max(d,u+f+60),m=Math.max(d,u+f+60);for(let y=0;y*d<m&&y<40;y++){let v=(g+y*d)%m-30;for(let _=0;_<h.vagones&&l<400;_++){let T=v-_*15.3;if(T<0||T>u)continue;p<0&&(T=u-T);let b=Le(h,T),x=b.dx*p,M=b.dz*p;Math.hypot(b.x-t.pj.x,b.z-t.pj.z)>600||(r.set(b.x-M*S,h.y,b.z+x*S),s.setFromAxisAngle(a,Xn(x,M)),e.setMatrixAt(l++,n.compose(r,s,o)))}}}}e.count=l,e.instanceMatrix.needsUpdate=!0}function Rv(i){let t=Jt,e=t.pj;if(!t.cruce){let a=new Se,l=[];for(let m=-8;m<=8;m++)l.push(new Pe(3.2,.6).rotateX(-Math.PI/2).translate(0,0,m*1.1));let c=new xt(ye(l),new xe({color:15921906}));c.position.y=.07,a.add(c);let h=new Se,u=new Wt({color:3882821}),f=new xt(new we(.12,.14,6,8),u);f.position.y=3,h.add(f);let d=new xt(new ne(.45,1.5,.55),new Wt({color:1908514}));d.position.set(-.1,5.2,0),h.add(d);let p=new xt(new Ln(.2,10,8),new xe({color:16722458}));p.position.set(-.36,5.68,0),h.add(p),[.47,.94].forEach(m=>{let y=new xt(new Ln(.17,10,8),new xe({color:2236962}));y.position.set(-.36,5.68-m,0),h.add(y)}),a.add(h);let S=[15029053,3120750,8084694,14722342],g=[0,1,2,3].map(m=>{let y=new Se,v=new xt(new we(.22,.26,.95,8),new Wt({color:S[m]}));v.position.y=1.15,v.castShadow=!0;let _=new xt(new we(.2,.18,.7,8),new Wt({color:2899543}));_.position.y=.35;let T=new xt(new Ln(.2,10,8),new Wt({color:13209186}));T.position.y=1.85;let b=new xt(new ne(.12,.5,.12),new xe({color:16765952}));return b.position.y=2.6,b.visible=!1,y.add(v,_,T,b),a.add(y),{g:y,su:b,z:0,dir:1,modo:"espera",t:m*.9,x:(m-1.5)*.7}});Ke.add(a),t.cruce={g:a,sem:h,peat:g,cm:c,activo:!1,mitad:8}}let n=t.cruce;if(!Rt.rojo||(e.y||0)>1){n.g.visible=!1,n.activo=!1;return}if(!n.activo){n.activo=!0;let a=e.ci>=0?t.calles[e.ci]:null,l=a?a.w:10;n.mitad=l/2+1.3;let c=Math.cos(e.h),h=-Math.sin(e.h);n.g.position.set(e.tx+c*7,0,e.tz+h*7),n.g.rotation.y=e.h,n.cm.scale.z=Math.max(.5,l/18),n.sem.position.set(-1.5,0,n.mitad-.3),n.peat.forEach((u,f)=>{u.z=(f%2?1:-1)*n.mitad,u.dir=-Math.sign(u.z),u.modo="espera",u.t=f*.9})}n.g.visible=!0,n.g.updateMatrixWorld();let s=new ae().copy(n.g.matrixWorld).invert(),r=new U,o=a=>t.motos.some(l=>(r.copy(l.g.position).applyMatrix4(s),r.x>-16&&r.x<1.5&&Math.abs(r.z-a)<1.6));for(let a of n.peat){if(a.modo==="espera")a.t-=i,a.t<=0&&!o(a.z+a.dir*2)&&(a.modo="cruza");else if(a.modo==="cruza"){let l=a.z+a.dir*1.4*i;o(l+a.dir*1.2)&&Math.abs(a.z)<n.mitad-.5?(a.modo="huye",a.dir=-a.dir):(a.z=l,Math.abs(a.z)>=n.mitad&&Math.sign(a.z)===Math.sign(a.dir)&&(a.modo="espera",a.t=2+Math.random()*3,a.dir=-Math.sign(a.z)))}else a.z+=a.dir*3.4*i,Math.abs(a.z)>=n.mitad&&(a.modo="espera",a.t=1.2+Math.random()*1.5,a.dir=-Math.sign(a.z));a.g.position.set(a.x,a.modo!=="espera"?Math.abs(Math.sin(Nn*(a.modo==="huye"?16:9)))*.08:0,a.z),a.su.visible=a.modo==="huye"}}var he=null,Hi=new Map,vi=null,Md=0;function zd(i,t,e){return{lat:i.lat-e/Ud,lon:i.lon+t/(111320*Math.cos(i.lat*Math.PI/180))}}function kl(){let[i,t]=$e(Jt.O,he.lat,he.lon);return{x:i,z:t}}function Dl(i){return he?kl():{x:i.pj.x,z:i.pj.z}}function Hl(){return!!(Jt&&Jt.listo&&Rt.pos&&Jt.pj)}function Th(){return he?!0:Hl()?(he={...zd(Jt.O,Jt.pj.x,Jt.pj.z),h:Jt.pj.h,z:1},Gh(!0),!0):!1}function Uh(){he=null,Gh(!1),Pl(),Nl(!0)}function Gh(i){Xe&&(vi||(vi=document.createElement("button"),vi.type="button",vi.textContent="\u{1F4CD} Volver a mi carro",vi.style.cssText="position:absolute;right:10px;bottom:44px;z-index:4;padding:10px 14px;border-radius:999px;border:0;background:#1f6feb;color:#fff;font:600 15px system-ui,sans-serif;box-shadow:0 4px 14px rgba(0,0,0,.35);display:none",vi.onclick=t=>{t.stopPropagation(),Uh()}),vi.parentNode!==Xe&&(getComputedStyle(Xe).position==="static"&&(Xe.style.position="relative"),Xe.appendChild(vi)),vi.style.display=i?"block":"none")}function Sd(i,t){let e=Xe&&Xe.clientHeight||300,n=45*he.z/e,s=Math.cos(he.h),r=-Math.sin(he.h),o=-r,a=s,l=kl();l.x+=(s*t-o*i)*n,l.z+=(r*t-a*i)*n,Object.assign(he,zd(Jt.O,l.x,l.z))}function Nl(i){let t=performance.now();if(!(!i&&t-Md<900)){Md=t;try{window.__v3Explorar&&window.__v3Explorar(he?{lat:he.lat,lon:he.lon}:null)}catch{}}}function Cv(i){i.style.touchAction="none";for(let e of["touchstart","touchmove"])i.addEventListener(e,n=>{n.cancelable&&n.preventDefault()},{passive:!1});for(let e of["gesturestart","gesturechange"])i.addEventListener(e,n=>n.preventDefault());i.addEventListener("pointerdown",e=>{if(!Hl()){try{window.__v3Explorar&&window.__v3Explorar({sinMapa:!0})}catch{}return}try{i.setPointerCapture(e.pointerId)}catch{}Hi.set(e.pointerId,{x:e.clientX,y:e.clientY,x0:e.clientX,y0:e.clientY})}),i.addEventListener("pointermove",e=>{let n=Hi.get(e.pointerId);if(n){if(Hi.size===1){let s=e.clientX-n.x,r=e.clientY-n.y;if(!he&&Math.hypot(e.clientX-n.x0,e.clientY-n.y0)<8)return;if(ke==="propia"&&!he){Mn.yaw-=s*.008,Mn.pitch=Math.max(.05,Math.min(1.5,Mn.pitch+r*.005)),n.x=e.clientX,n.y=e.clientY,e.preventDefault();return}if(!Th())return;e.buttons===2||e.shiftKey?he.h-=s*.008:Sd(s,r),n.x=e.clientX,n.y=e.clientY}else if(Hi.size===2){let[s,r]=[...Hi.values()],o=Math.hypot(s.x-r.x,s.y-r.y),a=Math.atan2(r.y-s.y,r.x-s.x),l=(s.x+r.x)/2,c=(s.y+r.y)/2;n.x=e.clientX,n.y=e.clientY;let h=Math.hypot(s.x-r.x,s.y-r.y),u=Math.atan2(r.y-s.y,r.x-s.x),f=(s.x+r.x)/2,d=(s.y+r.y)/2;if(ke==="propia"&&!he){o>10&&h>10&&(Mn.dist=Math.max(6,Math.min(450,Mn.dist*o/h)));let S=u-a;S=Math.atan2(Math.sin(S),Math.cos(S)),Mn.yaw+=S,e.preventDefault();return}if(!Th())return;o>10&&h>10&&(he.z=Math.max(.45,Math.min(14,he.z*o/h)));let p=u-a;p=Math.atan2(Math.sin(p),Math.cos(p)),he.h+=p,Sd(f-l,d-c)}Nl(),e.preventDefault()}});let t=e=>{Hi.delete(e.pointerId)&&(!Hi.size&&ke==="propia"&&fd(),!Hi.size&&he&&Nl(!0))};i.addEventListener("pointerup",t),i.addEventListener("pointercancel",t),i.addEventListener("wheel",e=>{if(Hl()){if(e.preventDefault(),ke==="propia"&&!he){Mn.dist=Math.max(6,Math.min(450,Mn.dist*Math.exp(e.deltaY*.0015))),fd();return}Th()&&(he.z=Math.max(.45,Math.min(14,he.z*Math.exp(e.deltaY*.0015))),Nl())}},{passive:!1}),i.addEventListener("contextmenu",e=>e.preventDefault())}function Iv(i,t){if(!Xe)return;let e=document.createElement("div");e.textContent=i,e.style.cssText="position:absolute;left:50%;top:44%;transform:translate(-50%,-50%);z-index:4;max-width:86%;padding:10px 14px;border-radius:12px;background:#000c;color:#fff;font:600 15px system-ui,sans-serif;pointer-events:none;transition:opacity .6s;text-align:center",getComputedStyle(Xe).position==="static"&&(Xe.style.position="relative"),Xe.appendChild(e),setTimeout(()=>{e.style.opacity="0",setTimeout(()=>e.remove(),700)},t||3500)}var Fh=!1;function Pv(){if(Fh||!Xe||!Hl())return;Fh=!0;try{if(localStorage.getItem("v3pista")>="3")return;localStorage.setItem("v3pista",String(+(localStorage.getItem("v3pista")||0)+1))}catch{}let i=document.createElement("div");i.textContent="\u261D\uFE0F Arrastra con el dedo para recorrer las calles",i.style.cssText="position:absolute;left:50%;top:44%;transform:translate(-50%,-50%);z-index:4;padding:10px 14px;border-radius:12px;background:#000b;color:#fff;font:600 15px system-ui,sans-serif;pointer-events:none;transition:opacity .6s;text-align:center",getComputedStyle(Xe).position==="static"&&(Xe.style.position="relative"),Xe.appendChild(i),setTimeout(()=>{i.style.opacity="0",setTimeout(()=>i.remove(),700)},3500)}function Lv(i){let t=kl(),e=Math.cos(he.h),n=-Math.sin(he.h),s=he.z,r=9.5*s,o=6.4*Math.pow(s,1.12),a=14*Math.min(s,4),l=new U(t.x-e*r,o,t.z-n*r),c=new U(t.x+e*a,0,t.z+n*a),h=1-Math.exp(-i*10);Si.lerp(l,h),bi.lerp(c,h);let u=Ne.aspect<1?68:50;Ne.fov!==u&&(Ne.fov=u,Ne.updateProjectionMatrix()),Ne.position.copy(Si),Ne.lookAt(bi),_n.position.set(t.x+25,45,t.z+30),_n.target.position.set(t.x,0,t.z)}function yi(i){if(Fh||Pv(),he){Lv(i);return}let t=Jt.pj,[e,n,s,r,o=0]=K_[ke],a=Math.cos(t.h),l=-Math.sin(t.h),c=-l,h=a,u=ke==="atras"?0:3,f=t.y||0,d=new U(t.x+a*e+c*s,n+f,t.z+l*e+h*s),p=new U(t.x+a*r+c*u,o+f,t.z+l*r+h*u);if(ke==="propia"){let S=t.h+Math.PI+Mn.yaw,g=Mn.dist*Math.cos(Mn.pitch),m=Mn.dist*Math.sin(Mn.pitch)+1.5;d.set(t.x+Math.cos(S)*g,f+m,t.z-Math.sin(S)*g),p.set(t.x+a*3,f+1,t.z+l*3)}else if(ke!=="arriba"){let S=Math.max(0,Math.min(1,(f-.8)/4));yi.fp=(yi.fp||0)+(S-(yi.fp||0))*(1-Math.exp(-i*1.5));let g=yi.fp;g>.01&&(d.x-=a*16*g,d.z-=l*16*g,d.y+=20*g,p.x+=a*10*g,p.z+=l*10*g)}if(window.__altoDbg&&(d.set(t.x,window.__altoDbg,t.z+1),p.set(t.x,0,t.z)),window.__camDbg){let S=window.__camDbg;d.set(...S[0]),p.set(...S[1]),Si.copy(d),bi.copy(p)}if(!yi.ini)Si.copy(d),bi.copy(p),yi.ini=!0;else{let S=1-Math.exp(-i*2.5);Si.lerp(d,S),bi.lerp(p,S)}Ne.position.copy(Si),Ne.lookAt(bi),_n.position.set(t.x+25,45,t.z+30),_n.target.position.set(t.x,0,t.z)}window.Vista3D={disponible(){try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}},montar(i){vn||(Q_(),Cv(vn.domElement)),Xe=i,vn.domElement.parentNode!==i&&i.prepend(vn.domElement),he&&Gh(!0),Js&&Js.disconnect(),Js=new ResizeObserver(Pl),Js.observe(i),Pl(),ph||(ph=!0,co=0,Ah=requestAnimationFrame(Cd))},desmontar(){ph=!1,cancelAnimationFrame(Ah),Js&&Js.disconnect()},actualizar(i){let t=Rt.viaje,e=Rt.noche;if(Object.assign(Rt,i),Rt.viaje&&!t&&(Rt._a=Ut?Ut.x+Mi:null),Rt.viaje||(Rt._a=null),!vn)return;let n=Rt.nivel+Rt.zona+Rt.pico+Rt.metrobus;n!==Ph?(Ph=n,Td(),Ol()):Rt.noche!==e&&Ol(),Bd()},mapa(i){xv(i)},explorando(){return he?{lat:he.lat,lon:he.lon}:null},dejarDeExplorar(){he&&Uh()},trafico(i){Od(i)},modo(){return Jt&&Jt.listo&&Rt.pos?"real":"muestra"},camara(){ke=_h[(_h.indexOf(ke)+1)%_h.length];try{localStorage.setItem("vista3dCam3",ke)}catch{}return he&&Uh(),Pl(),ke==="propia"&&Iv("\u270B Vista personalizada: arrastra para girar e inclinar, pellizca para acercar o alejar. Se queda guardada y sigue a tu carro.",5500),hd[ke]},nombreCamara(){return hd[ke]},get _dbg(){return{jugador:Ut,vehs:Sn,E:Rt,desplaz:Mi,REAL:Jt,cam:Ne}}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

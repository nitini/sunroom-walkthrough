(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Br=0,_Q=1,Wr=2;var SQ=1,en=2,ON=3,AI=0,EI=1,IN=2,vN=0,rt=1,kQ=2,YQ=3,CQ=4,Lj=5,kN=100,Ij=101,Nj=102,tj=103,ej=104,Pj=200,nj=201,Qj=202,ij=203,UP=204,TP=205,rj=206,jj=207,Jj=208,Fj=209,mj=210,$j=211,cj=212,dj=213,Mj=214,Pn=0,nn=1,Qn=2,jt=3,rn=4,jn=5,Jn=6,Fn=7,gQ=0,Kj=1,Gj=2,qN=0,sj=1,Oj=2,Hj=3,oj=4,xj=5,mn=6,fj=7,hQ="attached",Zj="detached",BQ=300,ot=301,xt=302,je=303,$n=304,nP=306,WI=1e3,BI=1001,kt=1002,xI=1003,cn=1004;var ft=1005;var QI=1006,Je=1007;var vI=1008;var mN=1009,WQ=1010,Li=1011,Fe=1012,dn=1013,WN=1014,RI=1015,kI=1016,Mn=1017,Kn=1018,me=1020,Ii=35902,Ni=35899,ti=1021,ei=1022,uI=1023,Yt=1026,$e=1027,Gn=1028,sn=1029,Pi=1030,On=1031;var Hn=1033,QP=33776,iP=33777,rP=33778,jP=33779,on=35840,xn=35841,fn=35842,Zn=35843,ln=36196,Rn=37492,an=37496,zn=37808,Dn=37809,En=37810,un=37811,hn=37812,bn=37813,Vn=37814,pn=37815,vn=37816,qn=37817,yn=37818,Un=37819,Tn=37820,Xn=37821,An=36492,wn=36494,_n=36495,Sn=36283,kn=36284,Yn=36285,Cn=36286;var Jt=2300,Ft=2301,yP=2302,bQ=2400,VQ=2401,pQ=2402,lj=2500;var ni=0,JP=1,ce=2,Rj=3200,aj=3201;var Qi=0,zj=1,yN="",rI="srgb",$I="srgb-linear",ue="linear",II="srgb";var it=7680;var vQ=519,Dj=512,Ej=513,uj=514,ii=515,hj=516,bj=517,Vj=518,pj=519,XP=35044;var ri="300 es",QN=2e3,he=2001;var uN=class{addEventListener(L,I){this._listeners===void 0&&(this._listeners={});let N=this._listeners;N[L]===void 0&&(N[L]=[]),N[L].indexOf(I)===-1&&N[L].push(I)}hasEventListener(L,I){let N=this._listeners;return N===void 0?!1:N[L]!==void 0&&N[L].indexOf(I)!==-1}removeEventListener(L,I){let N=this._listeners;if(N===void 0)return;let t=N[L];if(t!==void 0){let P=t.indexOf(I);P!==-1&&t.splice(P,1)}}dispatchEvent(L){let I=this._listeners;if(I===void 0)return;let N=I[L.type];if(N!==void 0){L.target=this;let t=N.slice(0);for(let P=0,n=t.length;P<n;P++)t[P].call(this,L);L.target=null}}},fI=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$r=1234567,De=Math.PI/180,mt=180/Math.PI;function rN(){let e=Math.random()*4294967295|0,L=Math.random()*4294967295|0,I=Math.random()*4294967295|0,N=Math.random()*4294967295|0;return(fI[e&255]+fI[e>>8&255]+fI[e>>16&255]+fI[e>>24&255]+"-"+fI[L&255]+fI[L>>8&255]+"-"+fI[L>>16&15|64]+fI[L>>24&255]+"-"+fI[I&63|128]+fI[I>>8&255]+"-"+fI[I>>16&255]+fI[I>>24&255]+fI[N&255]+fI[N>>8&255]+fI[N>>16&255]+fI[N>>24&255]).toLowerCase()}function XL(e,L,I){return Math.max(L,Math.min(I,e))}function ji(e,L){return(e%L+L)%L}function A9(e,L,I,N,t){return N+(e-L)*(t-N)/(I-L)}function w9(e,L,I){return e!==L?(I-e)/(L-e):0}function Ee(e,L,I){return(1-I)*e+I*L}function _9(e,L,I,N){return Ee(e,L,1-Math.exp(-I*N))}function S9(e,L=1){return L-Math.abs(ji(e,L*2)-L)}function k9(e,L,I){return e<=L?0:e>=I?1:(e=(e-L)/(I-L),e*e*(3-2*e))}function Y9(e,L,I){return e<=L?0:e>=I?1:(e=(e-L)/(I-L),e*e*e*(e*(e*6-15)+10))}function C9(e,L){return e+Math.floor(Math.random()*(L-e+1))}function g9(e,L){return e+Math.random()*(L-e)}function B9(e){return e*(.5-Math.random())}function W9(e){e!==void 0&&($r=e);let L=$r+=1831565813;return L=Math.imul(L^L>>>15,L|1),L^=L+Math.imul(L^L>>>7,L|61),((L^L>>>14)>>>0)/4294967296}function LJ(e){return e*De}function IJ(e){return e*mt}function NJ(e){return(e&e-1)===0&&e!==0}function tJ(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function eJ(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function PJ(e,L,I,N,t){let P=Math.cos,n=Math.sin,Q=P(I/2),r=n(I/2),i=P((L+N)/2),j=n((L+N)/2),J=P((L-N)/2),F=n((L-N)/2),$=P((N-L)/2),d=n((N-L)/2);switch(t){case"XYX":e.set(Q*j,r*J,r*F,Q*i);break;case"YZY":e.set(r*F,Q*j,r*J,Q*i);break;case"ZXZ":e.set(r*J,r*F,Q*j,Q*i);break;case"XZX":e.set(Q*j,r*d,r*$,Q*i);break;case"YXY":e.set(r*$,Q*j,r*d,Q*i);break;case"ZYZ":e.set(r*d,r*$,Q*j,Q*i);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+t)}}function nN(e,L){switch(L.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function LI(e,L){switch(L.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Lt={DEG2RAD:De,RAD2DEG:mt,generateUUID:rN,clamp:XL,euclideanModulo:ji,mapLinear:A9,inverseLerp:w9,lerp:Ee,damp:_9,pingpong:S9,smoothstep:k9,smootherstep:Y9,randInt:C9,randFloat:g9,randFloatSpread:B9,seededRandom:W9,degToRad:LJ,radToDeg:IJ,isPowerOfTwo:NJ,ceilPowerOfTwo:tJ,floorPowerOfTwo:eJ,setQuaternionFromProperEuler:PJ,normalize:LI,denormalize:nN},AL=class e{constructor(L=0,I=0){e.prototype.isVector2=!0,this.x=L,this.y=I}get width(){return this.x}set width(L){this.x=L}get height(){return this.y}set height(L){this.y=L}set(L,I){return this.x=L,this.y=I,this}setScalar(L){return this.x=L,this.y=L,this}setX(L){return this.x=L,this}setY(L){return this.y=L,this}setComponent(L,I){switch(L){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+L)}return this}getComponent(L){switch(L){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+L)}}clone(){return new this.constructor(this.x,this.y)}copy(L){return this.x=L.x,this.y=L.y,this}add(L){return this.x+=L.x,this.y+=L.y,this}addScalar(L){return this.x+=L,this.y+=L,this}addVectors(L,I){return this.x=L.x+I.x,this.y=L.y+I.y,this}addScaledVector(L,I){return this.x+=L.x*I,this.y+=L.y*I,this}sub(L){return this.x-=L.x,this.y-=L.y,this}subScalar(L){return this.x-=L,this.y-=L,this}subVectors(L,I){return this.x=L.x-I.x,this.y=L.y-I.y,this}multiply(L){return this.x*=L.x,this.y*=L.y,this}multiplyScalar(L){return this.x*=L,this.y*=L,this}divide(L){return this.x/=L.x,this.y/=L.y,this}divideScalar(L){return this.multiplyScalar(1/L)}applyMatrix3(L){let I=this.x,N=this.y,t=L.elements;return this.x=t[0]*I+t[3]*N+t[6],this.y=t[1]*I+t[4]*N+t[7],this}min(L){return this.x=Math.min(this.x,L.x),this.y=Math.min(this.y,L.y),this}max(L){return this.x=Math.max(this.x,L.x),this.y=Math.max(this.y,L.y),this}clamp(L,I){return this.x=XL(this.x,L.x,I.x),this.y=XL(this.y,L.y,I.y),this}clampScalar(L,I){return this.x=XL(this.x,L,I),this.y=XL(this.y,L,I),this}clampLength(L,I){let N=this.length();return this.divideScalar(N||1).multiplyScalar(XL(N,L,I))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(L){return this.x*L.x+this.y*L.y}cross(L){return this.x*L.y-this.y*L.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(L){let I=Math.sqrt(this.lengthSq()*L.lengthSq());if(I===0)return Math.PI/2;let N=this.dot(L)/I;return Math.acos(XL(N,-1,1))}distanceTo(L){return Math.sqrt(this.distanceToSquared(L))}distanceToSquared(L){let I=this.x-L.x,N=this.y-L.y;return I*I+N*N}manhattanDistanceTo(L){return Math.abs(this.x-L.x)+Math.abs(this.y-L.y)}setLength(L){return this.normalize().multiplyScalar(L)}lerp(L,I){return this.x+=(L.x-this.x)*I,this.y+=(L.y-this.y)*I,this}lerpVectors(L,I,N){return this.x=L.x+(I.x-L.x)*N,this.y=L.y+(I.y-L.y)*N,this}equals(L){return L.x===this.x&&L.y===this.y}fromArray(L,I=0){return this.x=L[I],this.y=L[I+1],this}toArray(L=[],I=0){return L[I]=this.x,L[I+1]=this.y,L}fromBufferAttribute(L,I){return this.x=L.getX(I),this.y=L.getY(I),this}rotateAround(L,I){let N=Math.cos(I),t=Math.sin(I),P=this.x-L.x,n=this.y-L.y;return this.x=P*N-n*t+L.x,this.y=P*t+n*N+L.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},LN=class{constructor(L=0,I=0,N=0,t=1){this.isQuaternion=!0,this._x=L,this._y=I,this._z=N,this._w=t}static slerpFlat(L,I,N,t,P,n,Q){let r=N[t+0],i=N[t+1],j=N[t+2],J=N[t+3],F=P[n+0],$=P[n+1],d=P[n+2],K=P[n+3];if(Q===0){L[I+0]=r,L[I+1]=i,L[I+2]=j,L[I+3]=J;return}if(Q===1){L[I+0]=F,L[I+1]=$,L[I+2]=d,L[I+3]=K;return}if(J!==K||r!==F||i!==$||j!==d){let c=1-Q,m=r*F+i*$+j*d+J*K,f=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){let Z=Math.sqrt(x),R=Math.atan2(Z,m*f);c=Math.sin(c*R)/Z,Q=Math.sin(Q*R)/Z}let H=Q*f;if(r=r*c+F*H,i=i*c+$*H,j=j*c+d*H,J=J*c+K*H,c===1-Q){let Z=1/Math.sqrt(r*r+i*i+j*j+J*J);r*=Z,i*=Z,j*=Z,J*=Z}}L[I]=r,L[I+1]=i,L[I+2]=j,L[I+3]=J}static multiplyQuaternionsFlat(L,I,N,t,P,n){let Q=N[t],r=N[t+1],i=N[t+2],j=N[t+3],J=P[n],F=P[n+1],$=P[n+2],d=P[n+3];return L[I]=Q*d+j*J+r*$-i*F,L[I+1]=r*d+j*F+i*J-Q*$,L[I+2]=i*d+j*$+Q*F-r*J,L[I+3]=j*d-Q*J-r*F-i*$,L}get x(){return this._x}set x(L){this._x=L,this._onChangeCallback()}get y(){return this._y}set y(L){this._y=L,this._onChangeCallback()}get z(){return this._z}set z(L){this._z=L,this._onChangeCallback()}get w(){return this._w}set w(L){this._w=L,this._onChangeCallback()}set(L,I,N,t){return this._x=L,this._y=I,this._z=N,this._w=t,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(L){return this._x=L.x,this._y=L.y,this._z=L.z,this._w=L.w,this._onChangeCallback(),this}setFromEuler(L,I=!0){let N=L._x,t=L._y,P=L._z,n=L._order,Q=Math.cos,r=Math.sin,i=Q(N/2),j=Q(t/2),J=Q(P/2),F=r(N/2),$=r(t/2),d=r(P/2);switch(n){case"XYZ":this._x=F*j*J+i*$*d,this._y=i*$*J-F*j*d,this._z=i*j*d+F*$*J,this._w=i*j*J-F*$*d;break;case"YXZ":this._x=F*j*J+i*$*d,this._y=i*$*J-F*j*d,this._z=i*j*d-F*$*J,this._w=i*j*J+F*$*d;break;case"ZXY":this._x=F*j*J-i*$*d,this._y=i*$*J+F*j*d,this._z=i*j*d+F*$*J,this._w=i*j*J-F*$*d;break;case"ZYX":this._x=F*j*J-i*$*d,this._y=i*$*J+F*j*d,this._z=i*j*d-F*$*J,this._w=i*j*J+F*$*d;break;case"YZX":this._x=F*j*J+i*$*d,this._y=i*$*J+F*j*d,this._z=i*j*d-F*$*J,this._w=i*j*J-F*$*d;break;case"XZY":this._x=F*j*J-i*$*d,this._y=i*$*J-F*j*d,this._z=i*j*d+F*$*J,this._w=i*j*J+F*$*d;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+n)}return I===!0&&this._onChangeCallback(),this}setFromAxisAngle(L,I){let N=I/2,t=Math.sin(N);return this._x=L.x*t,this._y=L.y*t,this._z=L.z*t,this._w=Math.cos(N),this._onChangeCallback(),this}setFromRotationMatrix(L){let I=L.elements,N=I[0],t=I[4],P=I[8],n=I[1],Q=I[5],r=I[9],i=I[2],j=I[6],J=I[10],F=N+Q+J;if(F>0){let $=.5/Math.sqrt(F+1);this._w=.25/$,this._x=(j-r)*$,this._y=(P-i)*$,this._z=(n-t)*$}else if(N>Q&&N>J){let $=2*Math.sqrt(1+N-Q-J);this._w=(j-r)/$,this._x=.25*$,this._y=(t+n)/$,this._z=(P+i)/$}else if(Q>J){let $=2*Math.sqrt(1+Q-N-J);this._w=(P-i)/$,this._x=(t+n)/$,this._y=.25*$,this._z=(r+j)/$}else{let $=2*Math.sqrt(1+J-N-Q);this._w=(n-t)/$,this._x=(P+i)/$,this._y=(r+j)/$,this._z=.25*$}return this._onChangeCallback(),this}setFromUnitVectors(L,I){let N=L.dot(I)+1;return N<1e-8?(N=0,Math.abs(L.x)>Math.abs(L.z)?(this._x=-L.y,this._y=L.x,this._z=0,this._w=N):(this._x=0,this._y=-L.z,this._z=L.y,this._w=N)):(this._x=L.y*I.z-L.z*I.y,this._y=L.z*I.x-L.x*I.z,this._z=L.x*I.y-L.y*I.x,this._w=N),this.normalize()}angleTo(L){return 2*Math.acos(Math.abs(XL(this.dot(L),-1,1)))}rotateTowards(L,I){let N=this.angleTo(L);if(N===0)return this;let t=Math.min(1,I/N);return this.slerp(L,t),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(L){return this._x*L._x+this._y*L._y+this._z*L._z+this._w*L._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let L=this.length();return L===0?(this._x=0,this._y=0,this._z=0,this._w=1):(L=1/L,this._x=this._x*L,this._y=this._y*L,this._z=this._z*L,this._w=this._w*L),this._onChangeCallback(),this}multiply(L){return this.multiplyQuaternions(this,L)}premultiply(L){return this.multiplyQuaternions(L,this)}multiplyQuaternions(L,I){let N=L._x,t=L._y,P=L._z,n=L._w,Q=I._x,r=I._y,i=I._z,j=I._w;return this._x=N*j+n*Q+t*i-P*r,this._y=t*j+n*r+P*Q-N*i,this._z=P*j+n*i+N*r-t*Q,this._w=n*j-N*Q-t*r-P*i,this._onChangeCallback(),this}slerp(L,I){if(I===0)return this;if(I===1)return this.copy(L);let N=this._x,t=this._y,P=this._z,n=this._w,Q=n*L._w+N*L._x+t*L._y+P*L._z;if(Q<0?(this._w=-L._w,this._x=-L._x,this._y=-L._y,this._z=-L._z,Q=-Q):this.copy(L),Q>=1)return this._w=n,this._x=N,this._y=t,this._z=P,this;let r=1-Q*Q;if(r<=Number.EPSILON){let $=1-I;return this._w=$*n+I*this._w,this._x=$*N+I*this._x,this._y=$*t+I*this._y,this._z=$*P+I*this._z,this.normalize(),this}let i=Math.sqrt(r),j=Math.atan2(i,Q),J=Math.sin((1-I)*j)/i,F=Math.sin(I*j)/i;return this._w=n*J+this._w*F,this._x=N*J+this._x*F,this._y=t*J+this._y*F,this._z=P*J+this._z*F,this._onChangeCallback(),this}slerpQuaternions(L,I,N){return this.copy(L).slerp(I,N)}random(){let L=2*Math.PI*Math.random(),I=2*Math.PI*Math.random(),N=Math.random(),t=Math.sqrt(1-N),P=Math.sqrt(N);return this.set(t*Math.sin(L),t*Math.cos(L),P*Math.sin(I),P*Math.cos(I))}equals(L){return L._x===this._x&&L._y===this._y&&L._z===this._z&&L._w===this._w}fromArray(L,I=0){return this._x=L[I],this._y=L[I+1],this._z=L[I+2],this._w=L[I+3],this._onChangeCallback(),this}toArray(L=[],I=0){return L[I]=this._x,L[I+1]=this._y,L[I+2]=this._z,L[I+3]=this._w,L}fromBufferAttribute(L,I){return this._x=L.getX(I),this._y=L.getY(I),this._z=L.getZ(I),this._w=L.getW(I),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(L){return this._onChangeCallback=L,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},u=class e{constructor(L=0,I=0,N=0){e.prototype.isVector3=!0,this.x=L,this.y=I,this.z=N}set(L,I,N){return N===void 0&&(N=this.z),this.x=L,this.y=I,this.z=N,this}setScalar(L){return this.x=L,this.y=L,this.z=L,this}setX(L){return this.x=L,this}setY(L){return this.y=L,this}setZ(L){return this.z=L,this}setComponent(L,I){switch(L){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+L)}return this}getComponent(L){switch(L){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+L)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(L){return this.x=L.x,this.y=L.y,this.z=L.z,this}add(L){return this.x+=L.x,this.y+=L.y,this.z+=L.z,this}addScalar(L){return this.x+=L,this.y+=L,this.z+=L,this}addVectors(L,I){return this.x=L.x+I.x,this.y=L.y+I.y,this.z=L.z+I.z,this}addScaledVector(L,I){return this.x+=L.x*I,this.y+=L.y*I,this.z+=L.z*I,this}sub(L){return this.x-=L.x,this.y-=L.y,this.z-=L.z,this}subScalar(L){return this.x-=L,this.y-=L,this.z-=L,this}subVectors(L,I){return this.x=L.x-I.x,this.y=L.y-I.y,this.z=L.z-I.z,this}multiply(L){return this.x*=L.x,this.y*=L.y,this.z*=L.z,this}multiplyScalar(L){return this.x*=L,this.y*=L,this.z*=L,this}multiplyVectors(L,I){return this.x=L.x*I.x,this.y=L.y*I.y,this.z=L.z*I.z,this}applyEuler(L){return this.applyQuaternion(cr.setFromEuler(L))}applyAxisAngle(L,I){return this.applyQuaternion(cr.setFromAxisAngle(L,I))}applyMatrix3(L){let I=this.x,N=this.y,t=this.z,P=L.elements;return this.x=P[0]*I+P[3]*N+P[6]*t,this.y=P[1]*I+P[4]*N+P[7]*t,this.z=P[2]*I+P[5]*N+P[8]*t,this}applyNormalMatrix(L){return this.applyMatrix3(L).normalize()}applyMatrix4(L){let I=this.x,N=this.y,t=this.z,P=L.elements,n=1/(P[3]*I+P[7]*N+P[11]*t+P[15]);return this.x=(P[0]*I+P[4]*N+P[8]*t+P[12])*n,this.y=(P[1]*I+P[5]*N+P[9]*t+P[13])*n,this.z=(P[2]*I+P[6]*N+P[10]*t+P[14])*n,this}applyQuaternion(L){let I=this.x,N=this.y,t=this.z,P=L.x,n=L.y,Q=L.z,r=L.w,i=2*(n*t-Q*N),j=2*(Q*I-P*t),J=2*(P*N-n*I);return this.x=I+r*i+n*J-Q*j,this.y=N+r*j+Q*i-P*J,this.z=t+r*J+P*j-n*i,this}project(L){return this.applyMatrix4(L.matrixWorldInverse).applyMatrix4(L.projectionMatrix)}unproject(L){return this.applyMatrix4(L.projectionMatrixInverse).applyMatrix4(L.matrixWorld)}transformDirection(L){let I=this.x,N=this.y,t=this.z,P=L.elements;return this.x=P[0]*I+P[4]*N+P[8]*t,this.y=P[1]*I+P[5]*N+P[9]*t,this.z=P[2]*I+P[6]*N+P[10]*t,this.normalize()}divide(L){return this.x/=L.x,this.y/=L.y,this.z/=L.z,this}divideScalar(L){return this.multiplyScalar(1/L)}min(L){return this.x=Math.min(this.x,L.x),this.y=Math.min(this.y,L.y),this.z=Math.min(this.z,L.z),this}max(L){return this.x=Math.max(this.x,L.x),this.y=Math.max(this.y,L.y),this.z=Math.max(this.z,L.z),this}clamp(L,I){return this.x=XL(this.x,L.x,I.x),this.y=XL(this.y,L.y,I.y),this.z=XL(this.z,L.z,I.z),this}clampScalar(L,I){return this.x=XL(this.x,L,I),this.y=XL(this.y,L,I),this.z=XL(this.z,L,I),this}clampLength(L,I){let N=this.length();return this.divideScalar(N||1).multiplyScalar(XL(N,L,I))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(L){return this.x*L.x+this.y*L.y+this.z*L.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(L){return this.normalize().multiplyScalar(L)}lerp(L,I){return this.x+=(L.x-this.x)*I,this.y+=(L.y-this.y)*I,this.z+=(L.z-this.z)*I,this}lerpVectors(L,I,N){return this.x=L.x+(I.x-L.x)*N,this.y=L.y+(I.y-L.y)*N,this.z=L.z+(I.z-L.z)*N,this}cross(L){return this.crossVectors(this,L)}crossVectors(L,I){let N=L.x,t=L.y,P=L.z,n=I.x,Q=I.y,r=I.z;return this.x=t*r-P*Q,this.y=P*n-N*r,this.z=N*Q-t*n,this}projectOnVector(L){let I=L.lengthSq();if(I===0)return this.set(0,0,0);let N=L.dot(this)/I;return this.copy(L).multiplyScalar(N)}projectOnPlane(L){return QQ.copy(this).projectOnVector(L),this.sub(QQ)}reflect(L){return this.sub(QQ.copy(L).multiplyScalar(2*this.dot(L)))}angleTo(L){let I=Math.sqrt(this.lengthSq()*L.lengthSq());if(I===0)return Math.PI/2;let N=this.dot(L)/I;return Math.acos(XL(N,-1,1))}distanceTo(L){return Math.sqrt(this.distanceToSquared(L))}distanceToSquared(L){let I=this.x-L.x,N=this.y-L.y,t=this.z-L.z;return I*I+N*N+t*t}manhattanDistanceTo(L){return Math.abs(this.x-L.x)+Math.abs(this.y-L.y)+Math.abs(this.z-L.z)}setFromSpherical(L){return this.setFromSphericalCoords(L.radius,L.phi,L.theta)}setFromSphericalCoords(L,I,N){let t=Math.sin(I)*L;return this.x=t*Math.sin(N),this.y=Math.cos(I)*L,this.z=t*Math.cos(N),this}setFromCylindrical(L){return this.setFromCylindricalCoords(L.radius,L.theta,L.y)}setFromCylindricalCoords(L,I,N){return this.x=L*Math.sin(I),this.y=N,this.z=L*Math.cos(I),this}setFromMatrixPosition(L){let I=L.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(L){let I=this.setFromMatrixColumn(L,0).length(),N=this.setFromMatrixColumn(L,1).length(),t=this.setFromMatrixColumn(L,2).length();return this.x=I,this.y=N,this.z=t,this}setFromMatrixColumn(L,I){return this.fromArray(L.elements,I*4)}setFromMatrix3Column(L,I){return this.fromArray(L.elements,I*3)}setFromEuler(L){return this.x=L._x,this.y=L._y,this.z=L._z,this}setFromColor(L){return this.x=L.r,this.y=L.g,this.z=L.b,this}equals(L){return L.x===this.x&&L.y===this.y&&L.z===this.z}fromArray(L,I=0){return this.x=L[I],this.y=L[I+1],this.z=L[I+2],this}toArray(L=[],I=0){return L[I]=this.x,L[I+1]=this.y,L[I+2]=this.z,L}fromBufferAttribute(L,I){return this.x=L.getX(I),this.y=L.getY(I),this.z=L.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let L=Math.random()*Math.PI*2,I=Math.random()*2-1,N=Math.sqrt(1-I*I);return this.x=N*Math.cos(L),this.y=I,this.z=N*Math.sin(L),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},QQ=new u,cr=new LN,yL=class e{constructor(L,I,N,t,P,n,Q,r,i){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],L!==void 0&&this.set(L,I,N,t,P,n,Q,r,i)}set(L,I,N,t,P,n,Q,r,i){let j=this.elements;return j[0]=L,j[1]=t,j[2]=Q,j[3]=I,j[4]=P,j[5]=r,j[6]=N,j[7]=n,j[8]=i,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(L){let I=this.elements,N=L.elements;return I[0]=N[0],I[1]=N[1],I[2]=N[2],I[3]=N[3],I[4]=N[4],I[5]=N[5],I[6]=N[6],I[7]=N[7],I[8]=N[8],this}extractBasis(L,I,N){return L.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),N.setFromMatrix3Column(this,2),this}setFromMatrix4(L){let I=L.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(L){return this.multiplyMatrices(this,L)}premultiply(L){return this.multiplyMatrices(L,this)}multiplyMatrices(L,I){let N=L.elements,t=I.elements,P=this.elements,n=N[0],Q=N[3],r=N[6],i=N[1],j=N[4],J=N[7],F=N[2],$=N[5],d=N[8],K=t[0],c=t[3],m=t[6],f=t[1],x=t[4],H=t[7],Z=t[2],R=t[5],z=t[8];return P[0]=n*K+Q*f+r*Z,P[3]=n*c+Q*x+r*R,P[6]=n*m+Q*H+r*z,P[1]=i*K+j*f+J*Z,P[4]=i*c+j*x+J*R,P[7]=i*m+j*H+J*z,P[2]=F*K+$*f+d*Z,P[5]=F*c+$*x+d*R,P[8]=F*m+$*H+d*z,this}multiplyScalar(L){let I=this.elements;return I[0]*=L,I[3]*=L,I[6]*=L,I[1]*=L,I[4]*=L,I[7]*=L,I[2]*=L,I[5]*=L,I[8]*=L,this}determinant(){let L=this.elements,I=L[0],N=L[1],t=L[2],P=L[3],n=L[4],Q=L[5],r=L[6],i=L[7],j=L[8];return I*n*j-I*Q*i-N*P*j+N*Q*r+t*P*i-t*n*r}invert(){let L=this.elements,I=L[0],N=L[1],t=L[2],P=L[3],n=L[4],Q=L[5],r=L[6],i=L[7],j=L[8],J=j*n-Q*i,F=Q*r-j*P,$=i*P-n*r,d=I*J+N*F+t*$;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let K=1/d;return L[0]=J*K,L[1]=(t*i-j*N)*K,L[2]=(Q*N-t*n)*K,L[3]=F*K,L[4]=(j*I-t*r)*K,L[5]=(t*P-Q*I)*K,L[6]=$*K,L[7]=(N*r-i*I)*K,L[8]=(n*I-N*P)*K,this}transpose(){let L,I=this.elements;return L=I[1],I[1]=I[3],I[3]=L,L=I[2],I[2]=I[6],I[6]=L,L=I[5],I[5]=I[7],I[7]=L,this}getNormalMatrix(L){return this.setFromMatrix4(L).invert().transpose()}transposeIntoArray(L){let I=this.elements;return L[0]=I[0],L[1]=I[3],L[2]=I[6],L[3]=I[1],L[4]=I[4],L[5]=I[7],L[6]=I[2],L[7]=I[5],L[8]=I[8],this}setUvTransform(L,I,N,t,P,n,Q){let r=Math.cos(P),i=Math.sin(P);return this.set(N*r,N*i,-N*(r*n+i*Q)+n+L,-t*i,t*r,-t*(-i*n+r*Q)+Q+I,0,0,1),this}scale(L,I){return this.premultiply(iQ.makeScale(L,I)),this}rotate(L){return this.premultiply(iQ.makeRotation(-L)),this}translate(L,I){return this.premultiply(iQ.makeTranslation(L,I)),this}makeTranslation(L,I){return L.isVector2?this.set(1,0,L.x,0,1,L.y,0,0,1):this.set(1,0,L,0,1,I,0,0,1),this}makeRotation(L){let I=Math.cos(L),N=Math.sin(L);return this.set(I,-N,0,N,I,0,0,0,1),this}makeScale(L,I){return this.set(L,0,0,0,I,0,0,0,1),this}equals(L){let I=this.elements,N=L.elements;for(let t=0;t<9;t++)if(I[t]!==N[t])return!1;return!0}fromArray(L,I=0){for(let N=0;N<9;N++)this.elements[N]=L[N+I];return this}toArray(L=[],I=0){let N=this.elements;return L[I]=N[0],L[I+1]=N[1],L[I+2]=N[2],L[I+3]=N[3],L[I+4]=N[4],L[I+5]=N[5],L[I+6]=N[6],L[I+7]=N[7],L[I+8]=N[8],L}clone(){return new this.constructor().fromArray(this.elements)}},iQ=new yL;function Ji(e){for(let L=e.length-1;L>=0;--L)if(e[L]>=65535)return!0;return!1}function Ct(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function vj(){let e=Ct("canvas");return e.style.display="block",e}var dr={};function gt(e){e in dr||(dr[e]=!0,console.warn(e))}function qj(e,L,I){return new Promise(function(N,t){function P(){switch(e.clientWaitSync(L,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:t();break;case e.TIMEOUT_EXPIRED:setTimeout(P,I);break;default:N()}}setTimeout(P,I)})}var Mr=new yL().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kr=new yL().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nJ(){let e={enabled:!0,workingColorSpace:$I,spaces:{},convert:function(t,P,n){return this.enabled===!1||P===n||!P||!n||(this.spaces[P].transfer===II&&(t.r=EN(t.r),t.g=EN(t.g),t.b=EN(t.b)),this.spaces[P].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[P].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===II&&(t.r=St(t.r),t.g=St(t.g),t.b=St(t.b))),t},workingToColorSpace:function(t,P){return this.convert(t,this.workingColorSpace,P)},colorSpaceToWorking:function(t,P){return this.convert(t,P,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===yN?ue:this.spaces[t].transfer},getToneMappingMode:function(t){return this.spaces[t].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(t,P=this.workingColorSpace){return t.fromArray(this.spaces[P].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,P,n){return t.copy(this.spaces[P].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,P){return gt("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(t,P)},toWorkingColorSpace:function(t,P){return gt("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(t,P)}},L=[.64,.33,.3,.6,.15,.06],I=[.2126,.7152,.0722],N=[.3127,.329];return e.define({[$I]:{primaries:L,whitePoint:N,transfer:ue,toXYZ:Mr,fromXYZ:Kr,luminanceCoefficients:I,workingColorSpaceConfig:{unpackColorSpace:rI},outputColorSpaceConfig:{drawingBufferColorSpace:rI}},[rI]:{primaries:L,whitePoint:N,transfer:II,toXYZ:Mr,fromXYZ:Kr,luminanceCoefficients:I,outputColorSpaceConfig:{drawingBufferColorSpace:rI}}}),e}var SL=nJ();function EN(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function St(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var ut,AP=class{static getDataURL(L,I="image/png"){if(/^data:/i.test(L.src)||typeof HTMLCanvasElement>"u")return L.src;let N;if(L instanceof HTMLCanvasElement)N=L;else{ut===void 0&&(ut=Ct("canvas")),ut.width=L.width,ut.height=L.height;let t=ut.getContext("2d");L instanceof ImageData?t.putImageData(L,0,0):t.drawImage(L,0,0,L.width,L.height),N=ut}return N.toDataURL(I)}static sRGBToLinear(L){if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){let I=Ct("canvas");I.width=L.width,I.height=L.height;let N=I.getContext("2d");N.drawImage(L,0,0,L.width,L.height);let t=N.getImageData(0,0,L.width,L.height),P=t.data;for(let n=0;n<P.length;n++)P[n]=EN(P[n]/255)*255;return N.putImageData(t,0,0),I}else if(L.data){let I=L.data.slice(0);for(let N=0;N<I.length;N++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[N]=Math.floor(EN(I[N]/255)*255):I[N]=EN(I[N]);return{data:I,width:L.width,height:L.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),L}},QJ=0,Bt=class{constructor(L=null){this.isSource=!0,Object.defineProperty(this,"id",{value:QJ++}),this.uuid=rN(),this.data=L,this.dataReady=!0,this.version=0}getSize(L){let I=this.data;return typeof HTMLVideoElement<"u"&&I instanceof HTMLVideoElement?L.set(I.videoWidth,I.videoHeight,0):I instanceof VideoFrame?L.set(I.displayHeight,I.displayWidth,0):I!==null?L.set(I.width,I.height,I.depth||0):L.set(0,0,0),L}set needsUpdate(L){L===!0&&this.version++}toJSON(L){let I=L===void 0||typeof L=="string";if(!I&&L.images[this.uuid]!==void 0)return L.images[this.uuid];let N={uuid:this.uuid,url:""},t=this.data;if(t!==null){let P;if(Array.isArray(t)){P=[];for(let n=0,Q=t.length;n<Q;n++)t[n].isDataTexture?P.push(rQ(t[n].image)):P.push(rQ(t[n]))}else P=rQ(t);N.url=P}return I||(L.images[this.uuid]=N),N}};function rQ(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?AP.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var iJ=0,jQ=new u,GI=class e extends uN{constructor(L=e.DEFAULT_IMAGE,I=e.DEFAULT_MAPPING,N=BI,t=BI,P=QI,n=vI,Q=uI,r=mN,i=e.DEFAULT_ANISOTROPY,j=yN){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iJ++}),this.uuid=rN(),this.name="",this.source=new Bt(L),this.mipmaps=[],this.mapping=I,this.channel=0,this.wrapS=N,this.wrapT=t,this.magFilter=P,this.minFilter=n,this.anisotropy=i,this.format=Q,this.internalFormat=null,this.type=r,this.offset=new AL(0,0),this.repeat=new AL(1,1),this.center=new AL(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yL,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=j,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(L&&L.depth&&L.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jQ).x}get height(){return this.source.getSize(jQ).y}get depth(){return this.source.getSize(jQ).z}get image(){return this.source.data}set image(L=null){this.source.data=L}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(L,I){this.updateRanges.push({start:L,count:I})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(L){return this.name=L.name,this.source=L.source,this.mipmaps=L.mipmaps.slice(0),this.mapping=L.mapping,this.channel=L.channel,this.wrapS=L.wrapS,this.wrapT=L.wrapT,this.magFilter=L.magFilter,this.minFilter=L.minFilter,this.anisotropy=L.anisotropy,this.format=L.format,this.internalFormat=L.internalFormat,this.type=L.type,this.offset.copy(L.offset),this.repeat.copy(L.repeat),this.center.copy(L.center),this.rotation=L.rotation,this.matrixAutoUpdate=L.matrixAutoUpdate,this.matrix.copy(L.matrix),this.generateMipmaps=L.generateMipmaps,this.premultiplyAlpha=L.premultiplyAlpha,this.flipY=L.flipY,this.unpackAlignment=L.unpackAlignment,this.colorSpace=L.colorSpace,this.renderTarget=L.renderTarget,this.isRenderTargetTexture=L.isRenderTargetTexture,this.isArrayTexture=L.isArrayTexture,this.userData=JSON.parse(JSON.stringify(L.userData)),this.needsUpdate=!0,this}setValues(L){for(let I in L){let N=L[I];if(N===void 0){console.warn(`THREE.Texture.setValues(): parameter '${I}' has value of undefined.`);continue}let t=this[I];if(t===void 0){console.warn(`THREE.Texture.setValues(): property '${I}' does not exist.`);continue}t&&N&&t.isVector2&&N.isVector2||t&&N&&t.isVector3&&N.isVector3||t&&N&&t.isMatrix3&&N.isMatrix3?t.copy(N):this[I]=N}}toJSON(L){let I=L===void 0||typeof L=="string";if(!I&&L.textures[this.uuid]!==void 0)return L.textures[this.uuid];let N={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(L).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(N.userData=this.userData),I||(L.textures[this.uuid]=N),N}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(L){if(this.mapping!==BQ)return L;if(L.applyMatrix3(this.matrix),L.x<0||L.x>1)switch(this.wrapS){case WI:L.x=L.x-Math.floor(L.x);break;case BI:L.x=L.x<0?0:1;break;case kt:Math.abs(Math.floor(L.x)%2)===1?L.x=Math.ceil(L.x)-L.x:L.x=L.x-Math.floor(L.x);break}if(L.y<0||L.y>1)switch(this.wrapT){case WI:L.y=L.y-Math.floor(L.y);break;case BI:L.y=L.y<0?0:1;break;case kt:Math.abs(Math.floor(L.y)%2)===1?L.y=Math.ceil(L.y)-L.y:L.y=L.y-Math.floor(L.y);break}return this.flipY&&(L.y=1-L.y),L}set needsUpdate(L){L===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(L){L===!0&&this.pmremVersion++}};GI.DEFAULT_IMAGE=null;GI.DEFAULT_MAPPING=BQ;GI.DEFAULT_ANISOTROPY=1;var gL=class e{constructor(L=0,I=0,N=0,t=1){e.prototype.isVector4=!0,this.x=L,this.y=I,this.z=N,this.w=t}get width(){return this.z}set width(L){this.z=L}get height(){return this.w}set height(L){this.w=L}set(L,I,N,t){return this.x=L,this.y=I,this.z=N,this.w=t,this}setScalar(L){return this.x=L,this.y=L,this.z=L,this.w=L,this}setX(L){return this.x=L,this}setY(L){return this.y=L,this}setZ(L){return this.z=L,this}setW(L){return this.w=L,this}setComponent(L,I){switch(L){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+L)}return this}getComponent(L){switch(L){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+L)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(L){return this.x=L.x,this.y=L.y,this.z=L.z,this.w=L.w!==void 0?L.w:1,this}add(L){return this.x+=L.x,this.y+=L.y,this.z+=L.z,this.w+=L.w,this}addScalar(L){return this.x+=L,this.y+=L,this.z+=L,this.w+=L,this}addVectors(L,I){return this.x=L.x+I.x,this.y=L.y+I.y,this.z=L.z+I.z,this.w=L.w+I.w,this}addScaledVector(L,I){return this.x+=L.x*I,this.y+=L.y*I,this.z+=L.z*I,this.w+=L.w*I,this}sub(L){return this.x-=L.x,this.y-=L.y,this.z-=L.z,this.w-=L.w,this}subScalar(L){return this.x-=L,this.y-=L,this.z-=L,this.w-=L,this}subVectors(L,I){return this.x=L.x-I.x,this.y=L.y-I.y,this.z=L.z-I.z,this.w=L.w-I.w,this}multiply(L){return this.x*=L.x,this.y*=L.y,this.z*=L.z,this.w*=L.w,this}multiplyScalar(L){return this.x*=L,this.y*=L,this.z*=L,this.w*=L,this}applyMatrix4(L){let I=this.x,N=this.y,t=this.z,P=this.w,n=L.elements;return this.x=n[0]*I+n[4]*N+n[8]*t+n[12]*P,this.y=n[1]*I+n[5]*N+n[9]*t+n[13]*P,this.z=n[2]*I+n[6]*N+n[10]*t+n[14]*P,this.w=n[3]*I+n[7]*N+n[11]*t+n[15]*P,this}divide(L){return this.x/=L.x,this.y/=L.y,this.z/=L.z,this.w/=L.w,this}divideScalar(L){return this.multiplyScalar(1/L)}setAxisAngleFromQuaternion(L){this.w=2*Math.acos(L.w);let I=Math.sqrt(1-L.w*L.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=L.x/I,this.y=L.y/I,this.z=L.z/I),this}setAxisAngleFromRotationMatrix(L){let I,N,t,P,r=L.elements,i=r[0],j=r[4],J=r[8],F=r[1],$=r[5],d=r[9],K=r[2],c=r[6],m=r[10];if(Math.abs(j-F)<.01&&Math.abs(J-K)<.01&&Math.abs(d-c)<.01){if(Math.abs(j+F)<.1&&Math.abs(J+K)<.1&&Math.abs(d+c)<.1&&Math.abs(i+$+m-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;let x=(i+1)/2,H=($+1)/2,Z=(m+1)/2,R=(j+F)/4,z=(J+K)/4,D=(d+c)/4;return x>H&&x>Z?x<.01?(N=0,t=.707106781,P=.707106781):(N=Math.sqrt(x),t=R/N,P=z/N):H>Z?H<.01?(N=.707106781,t=0,P=.707106781):(t=Math.sqrt(H),N=R/t,P=D/t):Z<.01?(N=.707106781,t=.707106781,P=0):(P=Math.sqrt(Z),N=z/P,t=D/P),this.set(N,t,P,I),this}let f=Math.sqrt((c-d)*(c-d)+(J-K)*(J-K)+(F-j)*(F-j));return Math.abs(f)<.001&&(f=1),this.x=(c-d)/f,this.y=(J-K)/f,this.z=(F-j)/f,this.w=Math.acos((i+$+m-1)/2),this}setFromMatrixPosition(L){let I=L.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this.w=I[15],this}min(L){return this.x=Math.min(this.x,L.x),this.y=Math.min(this.y,L.y),this.z=Math.min(this.z,L.z),this.w=Math.min(this.w,L.w),this}max(L){return this.x=Math.max(this.x,L.x),this.y=Math.max(this.y,L.y),this.z=Math.max(this.z,L.z),this.w=Math.max(this.w,L.w),this}clamp(L,I){return this.x=XL(this.x,L.x,I.x),this.y=XL(this.y,L.y,I.y),this.z=XL(this.z,L.z,I.z),this.w=XL(this.w,L.w,I.w),this}clampScalar(L,I){return this.x=XL(this.x,L,I),this.y=XL(this.y,L,I),this.z=XL(this.z,L,I),this.w=XL(this.w,L,I),this}clampLength(L,I){let N=this.length();return this.divideScalar(N||1).multiplyScalar(XL(N,L,I))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(L){return this.x*L.x+this.y*L.y+this.z*L.z+this.w*L.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(L){return this.normalize().multiplyScalar(L)}lerp(L,I){return this.x+=(L.x-this.x)*I,this.y+=(L.y-this.y)*I,this.z+=(L.z-this.z)*I,this.w+=(L.w-this.w)*I,this}lerpVectors(L,I,N){return this.x=L.x+(I.x-L.x)*N,this.y=L.y+(I.y-L.y)*N,this.z=L.z+(I.z-L.z)*N,this.w=L.w+(I.w-L.w)*N,this}equals(L){return L.x===this.x&&L.y===this.y&&L.z===this.z&&L.w===this.w}fromArray(L,I=0){return this.x=L[I],this.y=L[I+1],this.z=L[I+2],this.w=L[I+3],this}toArray(L=[],I=0){return L[I]=this.x,L[I+1]=this.y,L[I+2]=this.z,L[I+3]=this.w,L}fromBufferAttribute(L,I){return this.x=L.getX(I),this.y=L.getY(I),this.z=L.getZ(I),this.w=L.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wP=class extends uN{constructor(L=1,I=1,N={}){super(),N=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:QI,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},N),this.isRenderTarget=!0,this.width=L,this.height=I,this.depth=N.depth,this.scissor=new gL(0,0,L,I),this.scissorTest=!1,this.viewport=new gL(0,0,L,I);let t={width:L,height:I,depth:N.depth},P=new GI(t);this.textures=[];let n=N.count;for(let Q=0;Q<n;Q++)this.textures[Q]=P.clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;this._setTextureOptions(N),this.depthBuffer=N.depthBuffer,this.stencilBuffer=N.stencilBuffer,this.resolveDepthBuffer=N.resolveDepthBuffer,this.resolveStencilBuffer=N.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=N.depthTexture,this.samples=N.samples,this.multiview=N.multiview}_setTextureOptions(L={}){let I={minFilter:QI,generateMipmaps:!1,flipY:!1,internalFormat:null};L.mapping!==void 0&&(I.mapping=L.mapping),L.wrapS!==void 0&&(I.wrapS=L.wrapS),L.wrapT!==void 0&&(I.wrapT=L.wrapT),L.wrapR!==void 0&&(I.wrapR=L.wrapR),L.magFilter!==void 0&&(I.magFilter=L.magFilter),L.minFilter!==void 0&&(I.minFilter=L.minFilter),L.format!==void 0&&(I.format=L.format),L.type!==void 0&&(I.type=L.type),L.anisotropy!==void 0&&(I.anisotropy=L.anisotropy),L.colorSpace!==void 0&&(I.colorSpace=L.colorSpace),L.flipY!==void 0&&(I.flipY=L.flipY),L.generateMipmaps!==void 0&&(I.generateMipmaps=L.generateMipmaps),L.internalFormat!==void 0&&(I.internalFormat=L.internalFormat);for(let N=0;N<this.textures.length;N++)this.textures[N].setValues(I)}get texture(){return this.textures[0]}set texture(L){this.textures[0]=L}set depthTexture(L){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),L!==null&&(L.renderTarget=this),this._depthTexture=L}get depthTexture(){return this._depthTexture}setSize(L,I,N=1){if(this.width!==L||this.height!==I||this.depth!==N){this.width=L,this.height=I,this.depth=N;for(let t=0,P=this.textures.length;t<P;t++)this.textures[t].image.width=L,this.textures[t].image.height=I,this.textures[t].image.depth=N,this.textures[t].isArrayTexture=this.textures[t].image.depth>1;this.dispose()}this.viewport.set(0,0,L,I),this.scissor.set(0,0,L,I)}clone(){return new this.constructor().copy(this)}copy(L){this.width=L.width,this.height=L.height,this.depth=L.depth,this.scissor.copy(L.scissor),this.scissorTest=L.scissorTest,this.viewport.copy(L.viewport),this.textures.length=0;for(let I=0,N=L.textures.length;I<N;I++){this.textures[I]=L.textures[I].clone(),this.textures[I].isRenderTargetTexture=!0,this.textures[I].renderTarget=this;let t=Object.assign({},L.textures[I].image);this.textures[I].source=new Bt(t)}return this.depthBuffer=L.depthBuffer,this.stencilBuffer=L.stencilBuffer,this.resolveDepthBuffer=L.resolveDepthBuffer,this.resolveStencilBuffer=L.resolveStencilBuffer,L.depthTexture!==null&&(this.depthTexture=L.depthTexture.clone()),this.samples=L.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},MN=class extends wP{constructor(L=1,I=1,N={}){super(L,I,N),this.isWebGLRenderTarget=!0}},be=class extends GI{constructor(L=null,I=1,N=1,t=1){super(null),this.isDataArrayTexture=!0,this.image={data:L,width:I,height:N,depth:t},this.magFilter=xI,this.minFilter=xI,this.wrapR=BI,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(L){this.layerUpdates.add(L)}clearLayerUpdates(){this.layerUpdates.clear()}};var _P=class extends GI{constructor(L=null,I=1,N=1,t=1){super(null),this.isData3DTexture=!0,this.image={data:L,width:I,height:N,depth:t},this.magFilter=xI,this.minFilter=xI,this.wrapR=BI,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wI=class{constructor(L=new u(1/0,1/0,1/0),I=new u(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=L,this.max=I}set(L,I){return this.min.copy(L),this.max.copy(I),this}setFromArray(L){this.makeEmpty();for(let I=0,N=L.length;I<N;I+=3)this.expandByPoint(tN.fromArray(L,I));return this}setFromBufferAttribute(L){this.makeEmpty();for(let I=0,N=L.count;I<N;I++)this.expandByPoint(tN.fromBufferAttribute(L,I));return this}setFromPoints(L){this.makeEmpty();for(let I=0,N=L.length;I<N;I++)this.expandByPoint(L[I]);return this}setFromCenterAndSize(L,I){let N=tN.copy(I).multiplyScalar(.5);return this.min.copy(L).sub(N),this.max.copy(L).add(N),this}setFromObject(L,I=!1){return this.makeEmpty(),this.expandByObject(L,I)}clone(){return new this.constructor().copy(this)}copy(L){return this.min.copy(L.min),this.max.copy(L.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(L){return this.isEmpty()?L.set(0,0,0):L.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(L){return this.isEmpty()?L.set(0,0,0):L.subVectors(this.max,this.min)}expandByPoint(L){return this.min.min(L),this.max.max(L),this}expandByVector(L){return this.min.sub(L),this.max.add(L),this}expandByScalar(L){return this.min.addScalar(-L),this.max.addScalar(L),this}expandByObject(L,I=!1){L.updateWorldMatrix(!1,!1);let N=L.geometry;if(N!==void 0){let P=N.getAttribute("position");if(I===!0&&P!==void 0&&L.isInstancedMesh!==!0)for(let n=0,Q=P.count;n<Q;n++)L.isMesh===!0?L.getVertexPosition(n,tN):tN.fromBufferAttribute(P,n),tN.applyMatrix4(L.matrixWorld),this.expandByPoint(tN);else L.boundingBox!==void 0?(L.boundingBox===null&&L.computeBoundingBox(),dP.copy(L.boundingBox)):(N.boundingBox===null&&N.computeBoundingBox(),dP.copy(N.boundingBox)),dP.applyMatrix4(L.matrixWorld),this.union(dP)}let t=L.children;for(let P=0,n=t.length;P<n;P++)this.expandByObject(t[P],I);return this}containsPoint(L){return L.x>=this.min.x&&L.x<=this.max.x&&L.y>=this.min.y&&L.y<=this.max.y&&L.z>=this.min.z&&L.z<=this.max.z}containsBox(L){return this.min.x<=L.min.x&&L.max.x<=this.max.x&&this.min.y<=L.min.y&&L.max.y<=this.max.y&&this.min.z<=L.min.z&&L.max.z<=this.max.z}getParameter(L,I){return I.set((L.x-this.min.x)/(this.max.x-this.min.x),(L.y-this.min.y)/(this.max.y-this.min.y),(L.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(L){return L.max.x>=this.min.x&&L.min.x<=this.max.x&&L.max.y>=this.min.y&&L.min.y<=this.max.y&&L.max.z>=this.min.z&&L.min.z<=this.max.z}intersectsSphere(L){return this.clampPoint(L.center,tN),tN.distanceToSquared(L.center)<=L.radius*L.radius}intersectsPlane(L){let I,N;return L.normal.x>0?(I=L.normal.x*this.min.x,N=L.normal.x*this.max.x):(I=L.normal.x*this.max.x,N=L.normal.x*this.min.x),L.normal.y>0?(I+=L.normal.y*this.min.y,N+=L.normal.y*this.max.y):(I+=L.normal.y*this.max.y,N+=L.normal.y*this.min.y),L.normal.z>0?(I+=L.normal.z*this.min.z,N+=L.normal.z*this.max.z):(I+=L.normal.z*this.max.z,N+=L.normal.z*this.min.z),I<=-L.constant&&N>=-L.constant}intersectsTriangle(L){if(this.isEmpty())return!1;this.getCenter(oe),MP.subVectors(this.max,oe),ht.subVectors(L.a,oe),bt.subVectors(L.b,oe),Vt.subVectors(L.c,oe),UN.subVectors(bt,ht),TN.subVectors(Vt,bt),et.subVectors(ht,Vt);let I=[0,-UN.z,UN.y,0,-TN.z,TN.y,0,-et.z,et.y,UN.z,0,-UN.x,TN.z,0,-TN.x,et.z,0,-et.x,-UN.y,UN.x,0,-TN.y,TN.x,0,-et.y,et.x,0];return!JQ(I,ht,bt,Vt,MP)||(I=[1,0,0,0,1,0,0,0,1],!JQ(I,ht,bt,Vt,MP))?!1:(KP.crossVectors(UN,TN),I=[KP.x,KP.y,KP.z],JQ(I,ht,bt,Vt,MP))}clampPoint(L,I){return I.copy(L).clamp(this.min,this.max)}distanceToPoint(L){return this.clampPoint(L,tN).distanceTo(L)}getBoundingSphere(L){return this.isEmpty()?L.makeEmpty():(this.getCenter(L.center),L.radius=this.getSize(tN).length()*.5),L}intersect(L){return this.min.max(L.min),this.max.min(L.max),this.isEmpty()&&this.makeEmpty(),this}union(L){return this.min.min(L.min),this.max.max(L.max),this}applyMatrix4(L){return this.isEmpty()?this:(fN[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(L),fN[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(L),fN[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(L),fN[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(L),fN[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(L),fN[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(L),fN[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(L),fN[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(L),this.setFromPoints(fN),this)}translate(L){return this.min.add(L),this.max.add(L),this}equals(L){return L.min.equals(this.min)&&L.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(L){return this.min.fromArray(L.min),this.max.fromArray(L.max),this}},fN=[new u,new u,new u,new u,new u,new u,new u,new u],tN=new u,dP=new wI,ht=new u,bt=new u,Vt=new u,UN=new u,TN=new u,et=new u,oe=new u,MP=new u,KP=new u,Pt=new u;function JQ(e,L,I,N,t){for(let P=0,n=e.length-3;P<=n;P+=3){Pt.fromArray(e,P);let Q=t.x*Math.abs(Pt.x)+t.y*Math.abs(Pt.y)+t.z*Math.abs(Pt.z),r=L.dot(Pt),i=I.dot(Pt),j=N.dot(Pt);if(Math.max(-Math.max(r,i,j),Math.min(r,i,j))>Q)return!1}return!0}var rJ=new wI,xe=new u,FQ=new u,bI=class{constructor(L=new u,I=-1){this.isSphere=!0,this.center=L,this.radius=I}set(L,I){return this.center.copy(L),this.radius=I,this}setFromPoints(L,I){let N=this.center;I!==void 0?N.copy(I):rJ.setFromPoints(L).getCenter(N);let t=0;for(let P=0,n=L.length;P<n;P++)t=Math.max(t,N.distanceToSquared(L[P]));return this.radius=Math.sqrt(t),this}copy(L){return this.center.copy(L.center),this.radius=L.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(L){return L.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(L){return L.distanceTo(this.center)-this.radius}intersectsSphere(L){let I=this.radius+L.radius;return L.center.distanceToSquared(this.center)<=I*I}intersectsBox(L){return L.intersectsSphere(this)}intersectsPlane(L){return Math.abs(L.distanceToPoint(this.center))<=this.radius}clampPoint(L,I){let N=this.center.distanceToSquared(L);return I.copy(L),N>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(L){return this.isEmpty()?(L.makeEmpty(),L):(L.set(this.center,this.center),L.expandByScalar(this.radius),L)}applyMatrix4(L){return this.center.applyMatrix4(L),this.radius=this.radius*L.getMaxScaleOnAxis(),this}translate(L){return this.center.add(L),this}expandByPoint(L){if(this.isEmpty())return this.center.copy(L),this.radius=0,this;xe.subVectors(L,this.center);let I=xe.lengthSq();if(I>this.radius*this.radius){let N=Math.sqrt(I),t=(N-this.radius)*.5;this.center.addScaledVector(xe,t/N),this.radius+=t}return this}union(L){return L.isEmpty()?this:this.isEmpty()?(this.copy(L),this):(this.center.equals(L.center)===!0?this.radius=Math.max(this.radius,L.radius):(FQ.subVectors(L.center,this.center).setLength(L.radius),this.expandByPoint(xe.copy(L.center).add(FQ)),this.expandByPoint(xe.copy(L.center).sub(FQ))),this)}equals(L){return L.center.equals(this.center)&&L.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(L){return this.radius=L.radius,this.center.fromArray(L.center),this}},ZN=new u,mQ=new u,GP=new u,XN=new u,$Q=new u,sP=new u,cQ=new u,YN=class{constructor(L=new u,I=new u(0,0,-1)){this.origin=L,this.direction=I}set(L,I){return this.origin.copy(L),this.direction.copy(I),this}copy(L){return this.origin.copy(L.origin),this.direction.copy(L.direction),this}at(L,I){return I.copy(this.origin).addScaledVector(this.direction,L)}lookAt(L){return this.direction.copy(L).sub(this.origin).normalize(),this}recast(L){return this.origin.copy(this.at(L,ZN)),this}closestPointToPoint(L,I){I.subVectors(L,this.origin);let N=I.dot(this.direction);return N<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,N)}distanceToPoint(L){return Math.sqrt(this.distanceSqToPoint(L))}distanceSqToPoint(L){let I=ZN.subVectors(L,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(L):(ZN.copy(this.origin).addScaledVector(this.direction,I),ZN.distanceToSquared(L))}distanceSqToSegment(L,I,N,t){mQ.copy(L).add(I).multiplyScalar(.5),GP.copy(I).sub(L).normalize(),XN.copy(this.origin).sub(mQ);let P=L.distanceTo(I)*.5,n=-this.direction.dot(GP),Q=XN.dot(this.direction),r=-XN.dot(GP),i=XN.lengthSq(),j=Math.abs(1-n*n),J,F,$,d;if(j>0)if(J=n*r-Q,F=n*Q-r,d=P*j,J>=0)if(F>=-d)if(F<=d){let K=1/j;J*=K,F*=K,$=J*(J+n*F+2*Q)+F*(n*J+F+2*r)+i}else F=P,J=Math.max(0,-(n*F+Q)),$=-J*J+F*(F+2*r)+i;else F=-P,J=Math.max(0,-(n*F+Q)),$=-J*J+F*(F+2*r)+i;else F<=-d?(J=Math.max(0,-(-n*P+Q)),F=J>0?-P:Math.min(Math.max(-P,-r),P),$=-J*J+F*(F+2*r)+i):F<=d?(J=0,F=Math.min(Math.max(-P,-r),P),$=F*(F+2*r)+i):(J=Math.max(0,-(n*P+Q)),F=J>0?P:Math.min(Math.max(-P,-r),P),$=-J*J+F*(F+2*r)+i);else F=n>0?-P:P,J=Math.max(0,-(n*F+Q)),$=-J*J+F*(F+2*r)+i;return N&&N.copy(this.origin).addScaledVector(this.direction,J),t&&t.copy(mQ).addScaledVector(GP,F),$}intersectSphere(L,I){ZN.subVectors(L.center,this.origin);let N=ZN.dot(this.direction),t=ZN.dot(ZN)-N*N,P=L.radius*L.radius;if(t>P)return null;let n=Math.sqrt(P-t),Q=N-n,r=N+n;return r<0?null:Q<0?this.at(r,I):this.at(Q,I)}intersectsSphere(L){return L.radius<0?!1:this.distanceSqToPoint(L.center)<=L.radius*L.radius}distanceToPlane(L){let I=L.normal.dot(this.direction);if(I===0)return L.distanceToPoint(this.origin)===0?0:null;let N=-(this.origin.dot(L.normal)+L.constant)/I;return N>=0?N:null}intersectPlane(L,I){let N=this.distanceToPlane(L);return N===null?null:this.at(N,I)}intersectsPlane(L){let I=L.distanceToPoint(this.origin);return I===0||L.normal.dot(this.direction)*I<0}intersectBox(L,I){let N,t,P,n,Q,r,i=1/this.direction.x,j=1/this.direction.y,J=1/this.direction.z,F=this.origin;return i>=0?(N=(L.min.x-F.x)*i,t=(L.max.x-F.x)*i):(N=(L.max.x-F.x)*i,t=(L.min.x-F.x)*i),j>=0?(P=(L.min.y-F.y)*j,n=(L.max.y-F.y)*j):(P=(L.max.y-F.y)*j,n=(L.min.y-F.y)*j),N>n||P>t||((P>N||isNaN(N))&&(N=P),(n<t||isNaN(t))&&(t=n),J>=0?(Q=(L.min.z-F.z)*J,r=(L.max.z-F.z)*J):(Q=(L.max.z-F.z)*J,r=(L.min.z-F.z)*J),N>r||Q>t)||((Q>N||N!==N)&&(N=Q),(r<t||t!==t)&&(t=r),t<0)?null:this.at(N>=0?N:t,I)}intersectsBox(L){return this.intersectBox(L,ZN)!==null}intersectTriangle(L,I,N,t,P){$Q.subVectors(I,L),sP.subVectors(N,L),cQ.crossVectors($Q,sP);let n=this.direction.dot(cQ),Q;if(n>0){if(t)return null;Q=1}else if(n<0)Q=-1,n=-n;else return null;XN.subVectors(this.origin,L);let r=Q*this.direction.dot(sP.crossVectors(XN,sP));if(r<0)return null;let i=Q*this.direction.dot($Q.cross(XN));if(i<0||r+i>n)return null;let j=-Q*XN.dot(cQ);return j<0?null:this.at(j/n,P)}applyMatrix4(L){return this.origin.applyMatrix4(L),this.direction.transformDirection(L),this}equals(L){return L.origin.equals(this.origin)&&L.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qL=class e{constructor(L,I,N,t,P,n,Q,r,i,j,J,F,$,d,K,c){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],L!==void 0&&this.set(L,I,N,t,P,n,Q,r,i,j,J,F,$,d,K,c)}set(L,I,N,t,P,n,Q,r,i,j,J,F,$,d,K,c){let m=this.elements;return m[0]=L,m[4]=I,m[8]=N,m[12]=t,m[1]=P,m[5]=n,m[9]=Q,m[13]=r,m[2]=i,m[6]=j,m[10]=J,m[14]=F,m[3]=$,m[7]=d,m[11]=K,m[15]=c,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(L){let I=this.elements,N=L.elements;return I[0]=N[0],I[1]=N[1],I[2]=N[2],I[3]=N[3],I[4]=N[4],I[5]=N[5],I[6]=N[6],I[7]=N[7],I[8]=N[8],I[9]=N[9],I[10]=N[10],I[11]=N[11],I[12]=N[12],I[13]=N[13],I[14]=N[14],I[15]=N[15],this}copyPosition(L){let I=this.elements,N=L.elements;return I[12]=N[12],I[13]=N[13],I[14]=N[14],this}setFromMatrix3(L){let I=L.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(L,I,N){return L.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),N.setFromMatrixColumn(this,2),this}makeBasis(L,I,N){return this.set(L.x,I.x,N.x,0,L.y,I.y,N.y,0,L.z,I.z,N.z,0,0,0,0,1),this}extractRotation(L){let I=this.elements,N=L.elements,t=1/pt.setFromMatrixColumn(L,0).length(),P=1/pt.setFromMatrixColumn(L,1).length(),n=1/pt.setFromMatrixColumn(L,2).length();return I[0]=N[0]*t,I[1]=N[1]*t,I[2]=N[2]*t,I[3]=0,I[4]=N[4]*P,I[5]=N[5]*P,I[6]=N[6]*P,I[7]=0,I[8]=N[8]*n,I[9]=N[9]*n,I[10]=N[10]*n,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(L){let I=this.elements,N=L.x,t=L.y,P=L.z,n=Math.cos(N),Q=Math.sin(N),r=Math.cos(t),i=Math.sin(t),j=Math.cos(P),J=Math.sin(P);if(L.order==="XYZ"){let F=n*j,$=n*J,d=Q*j,K=Q*J;I[0]=r*j,I[4]=-r*J,I[8]=i,I[1]=$+d*i,I[5]=F-K*i,I[9]=-Q*r,I[2]=K-F*i,I[6]=d+$*i,I[10]=n*r}else if(L.order==="YXZ"){let F=r*j,$=r*J,d=i*j,K=i*J;I[0]=F+K*Q,I[4]=d*Q-$,I[8]=n*i,I[1]=n*J,I[5]=n*j,I[9]=-Q,I[2]=$*Q-d,I[6]=K+F*Q,I[10]=n*r}else if(L.order==="ZXY"){let F=r*j,$=r*J,d=i*j,K=i*J;I[0]=F-K*Q,I[4]=-n*J,I[8]=d+$*Q,I[1]=$+d*Q,I[5]=n*j,I[9]=K-F*Q,I[2]=-n*i,I[6]=Q,I[10]=n*r}else if(L.order==="ZYX"){let F=n*j,$=n*J,d=Q*j,K=Q*J;I[0]=r*j,I[4]=d*i-$,I[8]=F*i+K,I[1]=r*J,I[5]=K*i+F,I[9]=$*i-d,I[2]=-i,I[6]=Q*r,I[10]=n*r}else if(L.order==="YZX"){let F=n*r,$=n*i,d=Q*r,K=Q*i;I[0]=r*j,I[4]=K-F*J,I[8]=d*J+$,I[1]=J,I[5]=n*j,I[9]=-Q*j,I[2]=-i*j,I[6]=$*J+d,I[10]=F-K*J}else if(L.order==="XZY"){let F=n*r,$=n*i,d=Q*r,K=Q*i;I[0]=r*j,I[4]=-J,I[8]=i*j,I[1]=F*J+K,I[5]=n*j,I[9]=$*J-d,I[2]=d*J-$,I[6]=Q*j,I[10]=K*J+F}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(L){return this.compose(jJ,L,JJ)}lookAt(L,I,N){let t=this.elements;return UI.subVectors(L,I),UI.lengthSq()===0&&(UI.z=1),UI.normalize(),AN.crossVectors(N,UI),AN.lengthSq()===0&&(Math.abs(N.z)===1?UI.x+=1e-4:UI.z+=1e-4,UI.normalize(),AN.crossVectors(N,UI)),AN.normalize(),OP.crossVectors(UI,AN),t[0]=AN.x,t[4]=OP.x,t[8]=UI.x,t[1]=AN.y,t[5]=OP.y,t[9]=UI.y,t[2]=AN.z,t[6]=OP.z,t[10]=UI.z,this}multiply(L){return this.multiplyMatrices(this,L)}premultiply(L){return this.multiplyMatrices(L,this)}multiplyMatrices(L,I){let N=L.elements,t=I.elements,P=this.elements,n=N[0],Q=N[4],r=N[8],i=N[12],j=N[1],J=N[5],F=N[9],$=N[13],d=N[2],K=N[6],c=N[10],m=N[14],f=N[3],x=N[7],H=N[11],Z=N[15],R=t[0],z=t[4],D=t[8],s=t[12],G=t[1],a=t[5],v=t[9],y=t[13],q=t[2],w=t[6],U=t[10],B=t[14],_=t[3],eL=t[7],nL=t[11],dL=t[15];return P[0]=n*R+Q*G+r*q+i*_,P[4]=n*z+Q*a+r*w+i*eL,P[8]=n*D+Q*v+r*U+i*nL,P[12]=n*s+Q*y+r*B+i*dL,P[1]=j*R+J*G+F*q+$*_,P[5]=j*z+J*a+F*w+$*eL,P[9]=j*D+J*v+F*U+$*nL,P[13]=j*s+J*y+F*B+$*dL,P[2]=d*R+K*G+c*q+m*_,P[6]=d*z+K*a+c*w+m*eL,P[10]=d*D+K*v+c*U+m*nL,P[14]=d*s+K*y+c*B+m*dL,P[3]=f*R+x*G+H*q+Z*_,P[7]=f*z+x*a+H*w+Z*eL,P[11]=f*D+x*v+H*U+Z*nL,P[15]=f*s+x*y+H*B+Z*dL,this}multiplyScalar(L){let I=this.elements;return I[0]*=L,I[4]*=L,I[8]*=L,I[12]*=L,I[1]*=L,I[5]*=L,I[9]*=L,I[13]*=L,I[2]*=L,I[6]*=L,I[10]*=L,I[14]*=L,I[3]*=L,I[7]*=L,I[11]*=L,I[15]*=L,this}determinant(){let L=this.elements,I=L[0],N=L[4],t=L[8],P=L[12],n=L[1],Q=L[5],r=L[9],i=L[13],j=L[2],J=L[6],F=L[10],$=L[14],d=L[3],K=L[7],c=L[11],m=L[15];return d*(+P*r*J-t*i*J-P*Q*F+N*i*F+t*Q*$-N*r*$)+K*(+I*r*$-I*i*F+P*n*F-t*n*$+t*i*j-P*r*j)+c*(+I*i*J-I*Q*$-P*n*J+N*n*$+P*Q*j-N*i*j)+m*(-t*Q*j-I*r*J+I*Q*F+t*n*J-N*n*F+N*r*j)}transpose(){let L=this.elements,I;return I=L[1],L[1]=L[4],L[4]=I,I=L[2],L[2]=L[8],L[8]=I,I=L[6],L[6]=L[9],L[9]=I,I=L[3],L[3]=L[12],L[12]=I,I=L[7],L[7]=L[13],L[13]=I,I=L[11],L[11]=L[14],L[14]=I,this}setPosition(L,I,N){let t=this.elements;return L.isVector3?(t[12]=L.x,t[13]=L.y,t[14]=L.z):(t[12]=L,t[13]=I,t[14]=N),this}invert(){let L=this.elements,I=L[0],N=L[1],t=L[2],P=L[3],n=L[4],Q=L[5],r=L[6],i=L[7],j=L[8],J=L[9],F=L[10],$=L[11],d=L[12],K=L[13],c=L[14],m=L[15],f=J*c*i-K*F*i+K*r*$-Q*c*$-J*r*m+Q*F*m,x=d*F*i-j*c*i-d*r*$+n*c*$+j*r*m-n*F*m,H=j*K*i-d*J*i+d*Q*$-n*K*$-j*Q*m+n*J*m,Z=d*J*r-j*K*r-d*Q*F+n*K*F+j*Q*c-n*J*c,R=I*f+N*x+t*H+P*Z;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/R;return L[0]=f*z,L[1]=(K*F*P-J*c*P-K*t*$+N*c*$+J*t*m-N*F*m)*z,L[2]=(Q*c*P-K*r*P+K*t*i-N*c*i-Q*t*m+N*r*m)*z,L[3]=(J*r*P-Q*F*P-J*t*i+N*F*i+Q*t*$-N*r*$)*z,L[4]=x*z,L[5]=(j*c*P-d*F*P+d*t*$-I*c*$-j*t*m+I*F*m)*z,L[6]=(d*r*P-n*c*P-d*t*i+I*c*i+n*t*m-I*r*m)*z,L[7]=(n*F*P-j*r*P+j*t*i-I*F*i-n*t*$+I*r*$)*z,L[8]=H*z,L[9]=(d*J*P-j*K*P-d*N*$+I*K*$+j*N*m-I*J*m)*z,L[10]=(n*K*P-d*Q*P+d*N*i-I*K*i-n*N*m+I*Q*m)*z,L[11]=(j*Q*P-n*J*P-j*N*i+I*J*i+n*N*$-I*Q*$)*z,L[12]=Z*z,L[13]=(j*K*t-d*J*t+d*N*F-I*K*F-j*N*c+I*J*c)*z,L[14]=(d*Q*t-n*K*t-d*N*r+I*K*r+n*N*c-I*Q*c)*z,L[15]=(n*J*t-j*Q*t+j*N*r-I*J*r-n*N*F+I*Q*F)*z,this}scale(L){let I=this.elements,N=L.x,t=L.y,P=L.z;return I[0]*=N,I[4]*=t,I[8]*=P,I[1]*=N,I[5]*=t,I[9]*=P,I[2]*=N,I[6]*=t,I[10]*=P,I[3]*=N,I[7]*=t,I[11]*=P,this}getMaxScaleOnAxis(){let L=this.elements,I=L[0]*L[0]+L[1]*L[1]+L[2]*L[2],N=L[4]*L[4]+L[5]*L[5]+L[6]*L[6],t=L[8]*L[8]+L[9]*L[9]+L[10]*L[10];return Math.sqrt(Math.max(I,N,t))}makeTranslation(L,I,N){return L.isVector3?this.set(1,0,0,L.x,0,1,0,L.y,0,0,1,L.z,0,0,0,1):this.set(1,0,0,L,0,1,0,I,0,0,1,N,0,0,0,1),this}makeRotationX(L){let I=Math.cos(L),N=Math.sin(L);return this.set(1,0,0,0,0,I,-N,0,0,N,I,0,0,0,0,1),this}makeRotationY(L){let I=Math.cos(L),N=Math.sin(L);return this.set(I,0,N,0,0,1,0,0,-N,0,I,0,0,0,0,1),this}makeRotationZ(L){let I=Math.cos(L),N=Math.sin(L);return this.set(I,-N,0,0,N,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(L,I){let N=Math.cos(I),t=Math.sin(I),P=1-N,n=L.x,Q=L.y,r=L.z,i=P*n,j=P*Q;return this.set(i*n+N,i*Q-t*r,i*r+t*Q,0,i*Q+t*r,j*Q+N,j*r-t*n,0,i*r-t*Q,j*r+t*n,P*r*r+N,0,0,0,0,1),this}makeScale(L,I,N){return this.set(L,0,0,0,0,I,0,0,0,0,N,0,0,0,0,1),this}makeShear(L,I,N,t,P,n){return this.set(1,N,P,0,L,1,n,0,I,t,1,0,0,0,0,1),this}compose(L,I,N){let t=this.elements,P=I._x,n=I._y,Q=I._z,r=I._w,i=P+P,j=n+n,J=Q+Q,F=P*i,$=P*j,d=P*J,K=n*j,c=n*J,m=Q*J,f=r*i,x=r*j,H=r*J,Z=N.x,R=N.y,z=N.z;return t[0]=(1-(K+m))*Z,t[1]=($+H)*Z,t[2]=(d-x)*Z,t[3]=0,t[4]=($-H)*R,t[5]=(1-(F+m))*R,t[6]=(c+f)*R,t[7]=0,t[8]=(d+x)*z,t[9]=(c-f)*z,t[10]=(1-(F+K))*z,t[11]=0,t[12]=L.x,t[13]=L.y,t[14]=L.z,t[15]=1,this}decompose(L,I,N){let t=this.elements,P=pt.set(t[0],t[1],t[2]).length(),n=pt.set(t[4],t[5],t[6]).length(),Q=pt.set(t[8],t[9],t[10]).length();this.determinant()<0&&(P=-P),L.x=t[12],L.y=t[13],L.z=t[14],eN.copy(this);let i=1/P,j=1/n,J=1/Q;return eN.elements[0]*=i,eN.elements[1]*=i,eN.elements[2]*=i,eN.elements[4]*=j,eN.elements[5]*=j,eN.elements[6]*=j,eN.elements[8]*=J,eN.elements[9]*=J,eN.elements[10]*=J,I.setFromRotationMatrix(eN),N.x=P,N.y=n,N.z=Q,this}makePerspective(L,I,N,t,P,n,Q=QN,r=!1){let i=this.elements,j=2*P/(I-L),J=2*P/(N-t),F=(I+L)/(I-L),$=(N+t)/(N-t),d,K;if(r)d=P/(n-P),K=n*P/(n-P);else if(Q===QN)d=-(n+P)/(n-P),K=-2*n*P/(n-P);else if(Q===he)d=-n/(n-P),K=-n*P/(n-P);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+Q);return i[0]=j,i[4]=0,i[8]=F,i[12]=0,i[1]=0,i[5]=J,i[9]=$,i[13]=0,i[2]=0,i[6]=0,i[10]=d,i[14]=K,i[3]=0,i[7]=0,i[11]=-1,i[15]=0,this}makeOrthographic(L,I,N,t,P,n,Q=QN,r=!1){let i=this.elements,j=2/(I-L),J=2/(N-t),F=-(I+L)/(I-L),$=-(N+t)/(N-t),d,K;if(r)d=1/(n-P),K=n/(n-P);else if(Q===QN)d=-2/(n-P),K=-(n+P)/(n-P);else if(Q===he)d=-1/(n-P),K=-P/(n-P);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+Q);return i[0]=j,i[4]=0,i[8]=0,i[12]=F,i[1]=0,i[5]=J,i[9]=0,i[13]=$,i[2]=0,i[6]=0,i[10]=d,i[14]=K,i[3]=0,i[7]=0,i[11]=0,i[15]=1,this}equals(L){let I=this.elements,N=L.elements;for(let t=0;t<16;t++)if(I[t]!==N[t])return!1;return!0}fromArray(L,I=0){for(let N=0;N<16;N++)this.elements[N]=L[N+I];return this}toArray(L=[],I=0){let N=this.elements;return L[I]=N[0],L[I+1]=N[1],L[I+2]=N[2],L[I+3]=N[3],L[I+4]=N[4],L[I+5]=N[5],L[I+6]=N[6],L[I+7]=N[7],L[I+8]=N[8],L[I+9]=N[9],L[I+10]=N[10],L[I+11]=N[11],L[I+12]=N[12],L[I+13]=N[13],L[I+14]=N[14],L[I+15]=N[15],L}},pt=new u,eN=new qL,jJ=new u(0,0,0),JJ=new u(1,1,1),AN=new u,OP=new u,UI=new u,Gr=new qL,sr=new LN,jN=class e{constructor(L=0,I=0,N=0,t=e.DEFAULT_ORDER){this.isEuler=!0,this._x=L,this._y=I,this._z=N,this._order=t}get x(){return this._x}set x(L){this._x=L,this._onChangeCallback()}get y(){return this._y}set y(L){this._y=L,this._onChangeCallback()}get z(){return this._z}set z(L){this._z=L,this._onChangeCallback()}get order(){return this._order}set order(L){this._order=L,this._onChangeCallback()}set(L,I,N,t=this._order){return this._x=L,this._y=I,this._z=N,this._order=t,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(L){return this._x=L._x,this._y=L._y,this._z=L._z,this._order=L._order,this._onChangeCallback(),this}setFromRotationMatrix(L,I=this._order,N=!0){let t=L.elements,P=t[0],n=t[4],Q=t[8],r=t[1],i=t[5],j=t[9],J=t[2],F=t[6],$=t[10];switch(I){case"XYZ":this._y=Math.asin(XL(Q,-1,1)),Math.abs(Q)<.9999999?(this._x=Math.atan2(-j,$),this._z=Math.atan2(-n,P)):(this._x=Math.atan2(F,i),this._z=0);break;case"YXZ":this._x=Math.asin(-XL(j,-1,1)),Math.abs(j)<.9999999?(this._y=Math.atan2(Q,$),this._z=Math.atan2(r,i)):(this._y=Math.atan2(-J,P),this._z=0);break;case"ZXY":this._x=Math.asin(XL(F,-1,1)),Math.abs(F)<.9999999?(this._y=Math.atan2(-J,$),this._z=Math.atan2(-n,i)):(this._y=0,this._z=Math.atan2(r,P));break;case"ZYX":this._y=Math.asin(-XL(J,-1,1)),Math.abs(J)<.9999999?(this._x=Math.atan2(F,$),this._z=Math.atan2(r,P)):(this._x=0,this._z=Math.atan2(-n,i));break;case"YZX":this._z=Math.asin(XL(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-j,i),this._y=Math.atan2(-J,P)):(this._x=0,this._y=Math.atan2(Q,$));break;case"XZY":this._z=Math.asin(-XL(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(F,i),this._y=Math.atan2(Q,P)):(this._x=Math.atan2(-j,$),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,N===!0&&this._onChangeCallback(),this}setFromQuaternion(L,I,N){return Gr.makeRotationFromQuaternion(L),this.setFromRotationMatrix(Gr,I,N)}setFromVector3(L,I=this._order){return this.set(L.x,L.y,L.z,I)}reorder(L){return sr.setFromEuler(this),this.setFromQuaternion(sr,L)}equals(L){return L._x===this._x&&L._y===this._y&&L._z===this._z&&L._order===this._order}fromArray(L){return this._x=L[0],this._y=L[1],this._z=L[2],L[3]!==void 0&&(this._order=L[3]),this._onChangeCallback(),this}toArray(L=[],I=0){return L[I]=this._x,L[I+1]=this._y,L[I+2]=this._z,L[I+3]=this._order,L}_onChange(L){return this._onChangeCallback=L,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jN.DEFAULT_ORDER="XYZ";var Wt=class{constructor(){this.mask=1}set(L){this.mask=(1<<L|0)>>>0}enable(L){this.mask|=1<<L|0}enableAll(){this.mask=-1}toggle(L){this.mask^=1<<L|0}disable(L){this.mask&=~(1<<L|0)}disableAll(){this.mask=0}test(L){return(this.mask&L.mask)!==0}isEnabled(L){return(this.mask&(1<<L|0))!==0}},FJ=0,Or=new u,vt=new LN,lN=new qL,HP=new u,fe=new u,mJ=new u,$J=new LN,Hr=new u(1,0,0),or=new u(0,1,0),xr=new u(0,0,1),fr={type:"added"},cJ={type:"removed"},qt={type:"childadded",child:null},dQ={type:"childremoved",child:null},jI=class e extends uN{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FJ++}),this.uuid=rN(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let L=new u,I=new jN,N=new LN,t=new u(1,1,1);function P(){N.setFromEuler(I,!1)}function n(){I.setFromQuaternion(N,void 0,!1)}I._onChange(P),N._onChange(n),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:L},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:N},scale:{configurable:!0,enumerable:!0,value:t},modelViewMatrix:{value:new qL},normalMatrix:{value:new yL}}),this.matrix=new qL,this.matrixWorld=new qL,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(L){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(L),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(L){return this.quaternion.premultiply(L),this}setRotationFromAxisAngle(L,I){this.quaternion.setFromAxisAngle(L,I)}setRotationFromEuler(L){this.quaternion.setFromEuler(L,!0)}setRotationFromMatrix(L){this.quaternion.setFromRotationMatrix(L)}setRotationFromQuaternion(L){this.quaternion.copy(L)}rotateOnAxis(L,I){return vt.setFromAxisAngle(L,I),this.quaternion.multiply(vt),this}rotateOnWorldAxis(L,I){return vt.setFromAxisAngle(L,I),this.quaternion.premultiply(vt),this}rotateX(L){return this.rotateOnAxis(Hr,L)}rotateY(L){return this.rotateOnAxis(or,L)}rotateZ(L){return this.rotateOnAxis(xr,L)}translateOnAxis(L,I){return Or.copy(L).applyQuaternion(this.quaternion),this.position.add(Or.multiplyScalar(I)),this}translateX(L){return this.translateOnAxis(Hr,L)}translateY(L){return this.translateOnAxis(or,L)}translateZ(L){return this.translateOnAxis(xr,L)}localToWorld(L){return this.updateWorldMatrix(!0,!1),L.applyMatrix4(this.matrixWorld)}worldToLocal(L){return this.updateWorldMatrix(!0,!1),L.applyMatrix4(lN.copy(this.matrixWorld).invert())}lookAt(L,I,N){L.isVector3?HP.copy(L):HP.set(L,I,N);let t=this.parent;this.updateWorldMatrix(!0,!1),fe.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lN.lookAt(fe,HP,this.up):lN.lookAt(HP,fe,this.up),this.quaternion.setFromRotationMatrix(lN),t&&(lN.extractRotation(t.matrixWorld),vt.setFromRotationMatrix(lN),this.quaternion.premultiply(vt.invert()))}add(L){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return L===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",L),this):(L&&L.isObject3D?(L.removeFromParent(),L.parent=this,this.children.push(L),L.dispatchEvent(fr),qt.child=L,this.dispatchEvent(qt),qt.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",L),this)}remove(L){if(arguments.length>1){for(let N=0;N<arguments.length;N++)this.remove(arguments[N]);return this}let I=this.children.indexOf(L);return I!==-1&&(L.parent=null,this.children.splice(I,1),L.dispatchEvent(cJ),dQ.child=L,this.dispatchEvent(dQ),dQ.child=null),this}removeFromParent(){let L=this.parent;return L!==null&&L.remove(this),this}clear(){return this.remove(...this.children)}attach(L){return this.updateWorldMatrix(!0,!1),lN.copy(this.matrixWorld).invert(),L.parent!==null&&(L.parent.updateWorldMatrix(!0,!1),lN.multiply(L.parent.matrixWorld)),L.applyMatrix4(lN),L.removeFromParent(),L.parent=this,this.children.push(L),L.updateWorldMatrix(!1,!0),L.dispatchEvent(fr),qt.child=L,this.dispatchEvent(qt),qt.child=null,this}getObjectById(L){return this.getObjectByProperty("id",L)}getObjectByName(L){return this.getObjectByProperty("name",L)}getObjectByProperty(L,I){if(this[L]===I)return this;for(let N=0,t=this.children.length;N<t;N++){let n=this.children[N].getObjectByProperty(L,I);if(n!==void 0)return n}}getObjectsByProperty(L,I,N=[]){this[L]===I&&N.push(this);let t=this.children;for(let P=0,n=t.length;P<n;P++)t[P].getObjectsByProperty(L,I,N);return N}getWorldPosition(L){return this.updateWorldMatrix(!0,!1),L.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(L){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fe,L,mJ),L}getWorldScale(L){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fe,$J,L),L}getWorldDirection(L){this.updateWorldMatrix(!0,!1);let I=this.matrixWorld.elements;return L.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(L){L(this);let I=this.children;for(let N=0,t=I.length;N<t;N++)I[N].traverse(L)}traverseVisible(L){if(this.visible===!1)return;L(this);let I=this.children;for(let N=0,t=I.length;N<t;N++)I[N].traverseVisible(L)}traverseAncestors(L){let I=this.parent;I!==null&&(L(I),I.traverseAncestors(L))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(L){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||L)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,L=!0);let I=this.children;for(let N=0,t=I.length;N<t;N++)I[N].updateMatrixWorld(L)}updateWorldMatrix(L,I){let N=this.parent;if(L===!0&&N!==null&&N.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),I===!0){let t=this.children;for(let P=0,n=t.length;P<n;P++)t[P].updateWorldMatrix(!1,!0)}}toJSON(L){let I=L===void 0||typeof L=="string",N={};I&&(L={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},N.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let t={};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.castShadow===!0&&(t.castShadow=!0),this.receiveShadow===!0&&(t.receiveShadow=!0),this.visible===!1&&(t.visible=!1),this.frustumCulled===!1&&(t.frustumCulled=!1),this.renderOrder!==0&&(t.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(t.userData=this.userData),t.layers=this.layers.mask,t.matrix=this.matrix.toArray(),t.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(t.matrixAutoUpdate=!1),this.isInstancedMesh&&(t.type="InstancedMesh",t.count=this.count,t.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(t.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(t.type="BatchedMesh",t.perObjectFrustumCulled=this.perObjectFrustumCulled,t.sortObjects=this.sortObjects,t.drawRanges=this._drawRanges,t.reservedRanges=this._reservedRanges,t.geometryInfo=this._geometryInfo.map(Q=>({...Q,boundingBox:Q.boundingBox?Q.boundingBox.toJSON():void 0,boundingSphere:Q.boundingSphere?Q.boundingSphere.toJSON():void 0})),t.instanceInfo=this._instanceInfo.map(Q=>({...Q})),t.availableInstanceIds=this._availableInstanceIds.slice(),t.availableGeometryIds=this._availableGeometryIds.slice(),t.nextIndexStart=this._nextIndexStart,t.nextVertexStart=this._nextVertexStart,t.geometryCount=this._geometryCount,t.maxInstanceCount=this._maxInstanceCount,t.maxVertexCount=this._maxVertexCount,t.maxIndexCount=this._maxIndexCount,t.geometryInitialized=this._geometryInitialized,t.matricesTexture=this._matricesTexture.toJSON(L),t.indirectTexture=this._indirectTexture.toJSON(L),this._colorsTexture!==null&&(t.colorsTexture=this._colorsTexture.toJSON(L)),this.boundingSphere!==null&&(t.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(t.boundingBox=this.boundingBox.toJSON()));function P(Q,r){return Q[r.uuid]===void 0&&(Q[r.uuid]=r.toJSON(L)),r.uuid}if(this.isScene)this.background&&(this.background.isColor?t.background=this.background.toJSON():this.background.isTexture&&(t.background=this.background.toJSON(L).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(t.environment=this.environment.toJSON(L).uuid);else if(this.isMesh||this.isLine||this.isPoints){t.geometry=P(L.geometries,this.geometry);let Q=this.geometry.parameters;if(Q!==void 0&&Q.shapes!==void 0){let r=Q.shapes;if(Array.isArray(r))for(let i=0,j=r.length;i<j;i++){let J=r[i];P(L.shapes,J)}else P(L.shapes,r)}}if(this.isSkinnedMesh&&(t.bindMode=this.bindMode,t.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(P(L.skeletons,this.skeleton),t.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let Q=[];for(let r=0,i=this.material.length;r<i;r++)Q.push(P(L.materials,this.material[r]));t.material=Q}else t.material=P(L.materials,this.material);if(this.children.length>0){t.children=[];for(let Q=0;Q<this.children.length;Q++)t.children.push(this.children[Q].toJSON(L).object)}if(this.animations.length>0){t.animations=[];for(let Q=0;Q<this.animations.length;Q++){let r=this.animations[Q];t.animations.push(P(L.animations,r))}}if(I){let Q=n(L.geometries),r=n(L.materials),i=n(L.textures),j=n(L.images),J=n(L.shapes),F=n(L.skeletons),$=n(L.animations),d=n(L.nodes);Q.length>0&&(N.geometries=Q),r.length>0&&(N.materials=r),i.length>0&&(N.textures=i),j.length>0&&(N.images=j),J.length>0&&(N.shapes=J),F.length>0&&(N.skeletons=F),$.length>0&&(N.animations=$),d.length>0&&(N.nodes=d)}return N.object=t,N;function n(Q){let r=[];for(let i in Q){let j=Q[i];delete j.metadata,r.push(j)}return r}}clone(L){return new this.constructor().copy(this,L)}copy(L,I=!0){if(this.name=L.name,this.up.copy(L.up),this.position.copy(L.position),this.rotation.order=L.rotation.order,this.quaternion.copy(L.quaternion),this.scale.copy(L.scale),this.matrix.copy(L.matrix),this.matrixWorld.copy(L.matrixWorld),this.matrixAutoUpdate=L.matrixAutoUpdate,this.matrixWorldAutoUpdate=L.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=L.matrixWorldNeedsUpdate,this.layers.mask=L.layers.mask,this.visible=L.visible,this.castShadow=L.castShadow,this.receiveShadow=L.receiveShadow,this.frustumCulled=L.frustumCulled,this.renderOrder=L.renderOrder,this.animations=L.animations.slice(),this.userData=JSON.parse(JSON.stringify(L.userData)),I===!0)for(let N=0;N<L.children.length;N++){let t=L.children[N];this.add(t.clone())}return this}};jI.DEFAULT_UP=new u(0,1,0);jI.DEFAULT_MATRIX_AUTO_UPDATE=!0;jI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var PN=new u,RN=new u,MQ=new u,aN=new u,yt=new u,Ut=new u,Zr=new u,KQ=new u,GQ=new u,sQ=new u,OQ=new gL,HQ=new gL,oQ=new gL,SN=class e{constructor(L=new u,I=new u,N=new u){this.a=L,this.b=I,this.c=N}static getNormal(L,I,N,t){t.subVectors(N,I),PN.subVectors(L,I),t.cross(PN);let P=t.lengthSq();return P>0?t.multiplyScalar(1/Math.sqrt(P)):t.set(0,0,0)}static getBarycoord(L,I,N,t,P){PN.subVectors(t,I),RN.subVectors(N,I),MQ.subVectors(L,I);let n=PN.dot(PN),Q=PN.dot(RN),r=PN.dot(MQ),i=RN.dot(RN),j=RN.dot(MQ),J=n*i-Q*Q;if(J===0)return P.set(0,0,0),null;let F=1/J,$=(i*r-Q*j)*F,d=(n*j-Q*r)*F;return P.set(1-$-d,d,$)}static containsPoint(L,I,N,t){return this.getBarycoord(L,I,N,t,aN)===null?!1:aN.x>=0&&aN.y>=0&&aN.x+aN.y<=1}static getInterpolation(L,I,N,t,P,n,Q,r){return this.getBarycoord(L,I,N,t,aN)===null?(r.x=0,r.y=0,"z"in r&&(r.z=0),"w"in r&&(r.w=0),null):(r.setScalar(0),r.addScaledVector(P,aN.x),r.addScaledVector(n,aN.y),r.addScaledVector(Q,aN.z),r)}static getInterpolatedAttribute(L,I,N,t,P,n){return OQ.setScalar(0),HQ.setScalar(0),oQ.setScalar(0),OQ.fromBufferAttribute(L,I),HQ.fromBufferAttribute(L,N),oQ.fromBufferAttribute(L,t),n.setScalar(0),n.addScaledVector(OQ,P.x),n.addScaledVector(HQ,P.y),n.addScaledVector(oQ,P.z),n}static isFrontFacing(L,I,N,t){return PN.subVectors(N,I),RN.subVectors(L,I),PN.cross(RN).dot(t)<0}set(L,I,N){return this.a.copy(L),this.b.copy(I),this.c.copy(N),this}setFromPointsAndIndices(L,I,N,t){return this.a.copy(L[I]),this.b.copy(L[N]),this.c.copy(L[t]),this}setFromAttributeAndIndices(L,I,N,t){return this.a.fromBufferAttribute(L,I),this.b.fromBufferAttribute(L,N),this.c.fromBufferAttribute(L,t),this}clone(){return new this.constructor().copy(this)}copy(L){return this.a.copy(L.a),this.b.copy(L.b),this.c.copy(L.c),this}getArea(){return PN.subVectors(this.c,this.b),RN.subVectors(this.a,this.b),PN.cross(RN).length()*.5}getMidpoint(L){return L.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(L){return e.getNormal(this.a,this.b,this.c,L)}getPlane(L){return L.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(L,I){return e.getBarycoord(L,this.a,this.b,this.c,I)}getInterpolation(L,I,N,t,P){return e.getInterpolation(L,this.a,this.b,this.c,I,N,t,P)}containsPoint(L){return e.containsPoint(L,this.a,this.b,this.c)}isFrontFacing(L){return e.isFrontFacing(this.a,this.b,this.c,L)}intersectsBox(L){return L.intersectsTriangle(this)}closestPointToPoint(L,I){let N=this.a,t=this.b,P=this.c,n,Q;yt.subVectors(t,N),Ut.subVectors(P,N),KQ.subVectors(L,N);let r=yt.dot(KQ),i=Ut.dot(KQ);if(r<=0&&i<=0)return I.copy(N);GQ.subVectors(L,t);let j=yt.dot(GQ),J=Ut.dot(GQ);if(j>=0&&J<=j)return I.copy(t);let F=r*J-j*i;if(F<=0&&r>=0&&j<=0)return n=r/(r-j),I.copy(N).addScaledVector(yt,n);sQ.subVectors(L,P);let $=yt.dot(sQ),d=Ut.dot(sQ);if(d>=0&&$<=d)return I.copy(P);let K=$*i-r*d;if(K<=0&&i>=0&&d<=0)return Q=i/(i-d),I.copy(N).addScaledVector(Ut,Q);let c=j*d-$*J;if(c<=0&&J-j>=0&&$-d>=0)return Zr.subVectors(P,t),Q=(J-j)/(J-j+($-d)),I.copy(t).addScaledVector(Zr,Q);let m=1/(c+K+F);return n=K*m,Q=F*m,I.copy(N).addScaledVector(yt,n).addScaledVector(Ut,Q)}equals(L){return L.a.equals(this.a)&&L.b.equals(this.b)&&L.c.equals(this.c)}},yj={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wN={h:0,s:0,l:0},oP={h:0,s:0,l:0};function xQ(e,L,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?e+(L-e)*6*I:I<1/2?L:I<2/3?e+(L-e)*6*(2/3-I):e}var lL=class{constructor(L,I,N){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(L,I,N)}set(L,I,N){if(I===void 0&&N===void 0){let t=L;t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t)}else this.setRGB(L,I,N);return this}setScalar(L){return this.r=L,this.g=L,this.b=L,this}setHex(L,I=rI){return L=Math.floor(L),this.r=(L>>16&255)/255,this.g=(L>>8&255)/255,this.b=(L&255)/255,SL.colorSpaceToWorking(this,I),this}setRGB(L,I,N,t=SL.workingColorSpace){return this.r=L,this.g=I,this.b=N,SL.colorSpaceToWorking(this,t),this}setHSL(L,I,N,t=SL.workingColorSpace){if(L=ji(L,1),I=XL(I,0,1),N=XL(N,0,1),I===0)this.r=this.g=this.b=N;else{let P=N<=.5?N*(1+I):N+I-N*I,n=2*N-P;this.r=xQ(n,P,L+1/3),this.g=xQ(n,P,L),this.b=xQ(n,P,L-1/3)}return SL.colorSpaceToWorking(this,t),this}setStyle(L,I=rI){function N(P){P!==void 0&&parseFloat(P)<1&&console.warn("THREE.Color: Alpha component of "+L+" will be ignored.")}let t;if(t=/^(\w+)\(([^\)]*)\)/.exec(L)){let P,n=t[1],Q=t[2];switch(n){case"rgb":case"rgba":if(P=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Q))return N(P[4]),this.setRGB(Math.min(255,parseInt(P[1],10))/255,Math.min(255,parseInt(P[2],10))/255,Math.min(255,parseInt(P[3],10))/255,I);if(P=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Q))return N(P[4]),this.setRGB(Math.min(100,parseInt(P[1],10))/100,Math.min(100,parseInt(P[2],10))/100,Math.min(100,parseInt(P[3],10))/100,I);break;case"hsl":case"hsla":if(P=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Q))return N(P[4]),this.setHSL(parseFloat(P[1])/360,parseFloat(P[2])/100,parseFloat(P[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+L)}}else if(t=/^\#([A-Fa-f\d]+)$/.exec(L)){let P=t[1],n=P.length;if(n===3)return this.setRGB(parseInt(P.charAt(0),16)/15,parseInt(P.charAt(1),16)/15,parseInt(P.charAt(2),16)/15,I);if(n===6)return this.setHex(parseInt(P,16),I);console.warn("THREE.Color: Invalid hex color "+L)}else if(L&&L.length>0)return this.setColorName(L,I);return this}setColorName(L,I=rI){let N=yj[L.toLowerCase()];return N!==void 0?this.setHex(N,I):console.warn("THREE.Color: Unknown color "+L),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(L){return this.r=L.r,this.g=L.g,this.b=L.b,this}copySRGBToLinear(L){return this.r=EN(L.r),this.g=EN(L.g),this.b=EN(L.b),this}copyLinearToSRGB(L){return this.r=St(L.r),this.g=St(L.g),this.b=St(L.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(L=rI){return SL.workingToColorSpace(ZI.copy(this),L),Math.round(XL(ZI.r*255,0,255))*65536+Math.round(XL(ZI.g*255,0,255))*256+Math.round(XL(ZI.b*255,0,255))}getHexString(L=rI){return("000000"+this.getHex(L).toString(16)).slice(-6)}getHSL(L,I=SL.workingColorSpace){SL.workingToColorSpace(ZI.copy(this),I);let N=ZI.r,t=ZI.g,P=ZI.b,n=Math.max(N,t,P),Q=Math.min(N,t,P),r,i,j=(Q+n)/2;if(Q===n)r=0,i=0;else{let J=n-Q;switch(i=j<=.5?J/(n+Q):J/(2-n-Q),n){case N:r=(t-P)/J+(t<P?6:0);break;case t:r=(P-N)/J+2;break;case P:r=(N-t)/J+4;break}r/=6}return L.h=r,L.s=i,L.l=j,L}getRGB(L,I=SL.workingColorSpace){return SL.workingToColorSpace(ZI.copy(this),I),L.r=ZI.r,L.g=ZI.g,L.b=ZI.b,L}getStyle(L=rI){SL.workingToColorSpace(ZI.copy(this),L);let I=ZI.r,N=ZI.g,t=ZI.b;return L!==rI?`color(${L} ${I.toFixed(3)} ${N.toFixed(3)} ${t.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(N*255)},${Math.round(t*255)})`}offsetHSL(L,I,N){return this.getHSL(wN),this.setHSL(wN.h+L,wN.s+I,wN.l+N)}add(L){return this.r+=L.r,this.g+=L.g,this.b+=L.b,this}addColors(L,I){return this.r=L.r+I.r,this.g=L.g+I.g,this.b=L.b+I.b,this}addScalar(L){return this.r+=L,this.g+=L,this.b+=L,this}sub(L){return this.r=Math.max(0,this.r-L.r),this.g=Math.max(0,this.g-L.g),this.b=Math.max(0,this.b-L.b),this}multiply(L){return this.r*=L.r,this.g*=L.g,this.b*=L.b,this}multiplyScalar(L){return this.r*=L,this.g*=L,this.b*=L,this}lerp(L,I){return this.r+=(L.r-this.r)*I,this.g+=(L.g-this.g)*I,this.b+=(L.b-this.b)*I,this}lerpColors(L,I,N){return this.r=L.r+(I.r-L.r)*N,this.g=L.g+(I.g-L.g)*N,this.b=L.b+(I.b-L.b)*N,this}lerpHSL(L,I){this.getHSL(wN),L.getHSL(oP);let N=Ee(wN.h,oP.h,I),t=Ee(wN.s,oP.s,I),P=Ee(wN.l,oP.l,I);return this.setHSL(N,t,P),this}setFromVector3(L){return this.r=L.x,this.g=L.y,this.b=L.z,this}applyMatrix3(L){let I=this.r,N=this.g,t=this.b,P=L.elements;return this.r=P[0]*I+P[3]*N+P[6]*t,this.g=P[1]*I+P[4]*N+P[7]*t,this.b=P[2]*I+P[5]*N+P[8]*t,this}equals(L){return L.r===this.r&&L.g===this.g&&L.b===this.b}fromArray(L,I=0){return this.r=L[I],this.g=L[I+1],this.b=L[I+2],this}toArray(L=[],I=0){return L[I]=this.r,L[I+1]=this.g,L[I+2]=this.b,L}fromBufferAttribute(L,I){return this.r=L.getX(I),this.g=L.getY(I),this.b=L.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ZI=new lL;lL.NAMES=yj;var dJ=0,VI=class extends uN{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dJ++}),this.uuid=rN(),this.name="",this.type="Material",this.blending=rt,this.side=AI,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=UP,this.blendDst=TP,this.blendEquation=kN,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lL(0,0,0),this.blendAlpha=0,this.depthFunc=jt,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vQ,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=it,this.stencilZFail=it,this.stencilZPass=it,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(L){this._alphaTest>0!=L>0&&this.version++,this._alphaTest=L}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(L){if(L!==void 0)for(let I in L){let N=L[I];if(N===void 0){console.warn(`THREE.Material: parameter '${I}' has value of undefined.`);continue}let t=this[I];if(t===void 0){console.warn(`THREE.Material: '${I}' is not a property of THREE.${this.type}.`);continue}t&&t.isColor?t.set(N):t&&t.isVector3&&N&&N.isVector3?t.copy(N):this[I]=N}}toJSON(L){let I=L===void 0||typeof L=="string";I&&(L={textures:{},images:{}});let N={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};N.uuid=this.uuid,N.type=this.type,this.name!==""&&(N.name=this.name),this.color&&this.color.isColor&&(N.color=this.color.getHex()),this.roughness!==void 0&&(N.roughness=this.roughness),this.metalness!==void 0&&(N.metalness=this.metalness),this.sheen!==void 0&&(N.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(N.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(N.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(N.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(N.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(N.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(N.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(N.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(N.shininess=this.shininess),this.clearcoat!==void 0&&(N.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(N.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(N.clearcoatMap=this.clearcoatMap.toJSON(L).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(N.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(L).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(N.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(L).uuid,N.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(N.sheenColorMap=this.sheenColorMap.toJSON(L).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(N.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(L).uuid),this.dispersion!==void 0&&(N.dispersion=this.dispersion),this.iridescence!==void 0&&(N.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(N.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(N.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(N.iridescenceMap=this.iridescenceMap.toJSON(L).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(N.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(L).uuid),this.anisotropy!==void 0&&(N.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(N.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(N.anisotropyMap=this.anisotropyMap.toJSON(L).uuid),this.map&&this.map.isTexture&&(N.map=this.map.toJSON(L).uuid),this.matcap&&this.matcap.isTexture&&(N.matcap=this.matcap.toJSON(L).uuid),this.alphaMap&&this.alphaMap.isTexture&&(N.alphaMap=this.alphaMap.toJSON(L).uuid),this.lightMap&&this.lightMap.isTexture&&(N.lightMap=this.lightMap.toJSON(L).uuid,N.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(N.aoMap=this.aoMap.toJSON(L).uuid,N.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(N.bumpMap=this.bumpMap.toJSON(L).uuid,N.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(N.normalMap=this.normalMap.toJSON(L).uuid,N.normalMapType=this.normalMapType,N.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(N.displacementMap=this.displacementMap.toJSON(L).uuid,N.displacementScale=this.displacementScale,N.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(N.roughnessMap=this.roughnessMap.toJSON(L).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(N.metalnessMap=this.metalnessMap.toJSON(L).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(N.emissiveMap=this.emissiveMap.toJSON(L).uuid),this.specularMap&&this.specularMap.isTexture&&(N.specularMap=this.specularMap.toJSON(L).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(N.specularIntensityMap=this.specularIntensityMap.toJSON(L).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(N.specularColorMap=this.specularColorMap.toJSON(L).uuid),this.envMap&&this.envMap.isTexture&&(N.envMap=this.envMap.toJSON(L).uuid,this.combine!==void 0&&(N.combine=this.combine)),this.envMapRotation!==void 0&&(N.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(N.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(N.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(N.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(N.gradientMap=this.gradientMap.toJSON(L).uuid),this.transmission!==void 0&&(N.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(N.transmissionMap=this.transmissionMap.toJSON(L).uuid),this.thickness!==void 0&&(N.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(N.thicknessMap=this.thicknessMap.toJSON(L).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(N.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(N.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(N.size=this.size),this.shadowSide!==null&&(N.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(N.sizeAttenuation=this.sizeAttenuation),this.blending!==rt&&(N.blending=this.blending),this.side!==AI&&(N.side=this.side),this.vertexColors===!0&&(N.vertexColors=!0),this.opacity<1&&(N.opacity=this.opacity),this.transparent===!0&&(N.transparent=!0),this.blendSrc!==UP&&(N.blendSrc=this.blendSrc),this.blendDst!==TP&&(N.blendDst=this.blendDst),this.blendEquation!==kN&&(N.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(N.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(N.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(N.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(N.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(N.blendAlpha=this.blendAlpha),this.depthFunc!==jt&&(N.depthFunc=this.depthFunc),this.depthTest===!1&&(N.depthTest=this.depthTest),this.depthWrite===!1&&(N.depthWrite=this.depthWrite),this.colorWrite===!1&&(N.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(N.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vQ&&(N.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(N.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(N.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==it&&(N.stencilFail=this.stencilFail),this.stencilZFail!==it&&(N.stencilZFail=this.stencilZFail),this.stencilZPass!==it&&(N.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(N.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(N.rotation=this.rotation),this.polygonOffset===!0&&(N.polygonOffset=!0),this.polygonOffsetFactor!==0&&(N.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(N.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(N.linewidth=this.linewidth),this.dashSize!==void 0&&(N.dashSize=this.dashSize),this.gapSize!==void 0&&(N.gapSize=this.gapSize),this.scale!==void 0&&(N.scale=this.scale),this.dithering===!0&&(N.dithering=!0),this.alphaTest>0&&(N.alphaTest=this.alphaTest),this.alphaHash===!0&&(N.alphaHash=!0),this.alphaToCoverage===!0&&(N.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(N.premultipliedAlpha=!0),this.forceSinglePass===!0&&(N.forceSinglePass=!0),this.wireframe===!0&&(N.wireframe=!0),this.wireframeLinewidth>1&&(N.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(N.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(N.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(N.flatShading=!0),this.visible===!1&&(N.visible=!1),this.toneMapped===!1&&(N.toneMapped=!1),this.fog===!1&&(N.fog=!1),Object.keys(this.userData).length>0&&(N.userData=this.userData);function t(P){let n=[];for(let Q in P){let r=P[Q];delete r.metadata,n.push(r)}return n}if(I){let P=t(L.textures),n=t(L.images);P.length>0&&(N.textures=P),n.length>0&&(N.images=n)}return N}clone(){return new this.constructor().copy(this)}copy(L){this.name=L.name,this.blending=L.blending,this.side=L.side,this.vertexColors=L.vertexColors,this.opacity=L.opacity,this.transparent=L.transparent,this.blendSrc=L.blendSrc,this.blendDst=L.blendDst,this.blendEquation=L.blendEquation,this.blendSrcAlpha=L.blendSrcAlpha,this.blendDstAlpha=L.blendDstAlpha,this.blendEquationAlpha=L.blendEquationAlpha,this.blendColor.copy(L.blendColor),this.blendAlpha=L.blendAlpha,this.depthFunc=L.depthFunc,this.depthTest=L.depthTest,this.depthWrite=L.depthWrite,this.stencilWriteMask=L.stencilWriteMask,this.stencilFunc=L.stencilFunc,this.stencilRef=L.stencilRef,this.stencilFuncMask=L.stencilFuncMask,this.stencilFail=L.stencilFail,this.stencilZFail=L.stencilZFail,this.stencilZPass=L.stencilZPass,this.stencilWrite=L.stencilWrite;let I=L.clippingPlanes,N=null;if(I!==null){let t=I.length;N=new Array(t);for(let P=0;P!==t;++P)N[P]=I[P].clone()}return this.clippingPlanes=N,this.clipIntersection=L.clipIntersection,this.clipShadows=L.clipShadows,this.shadowSide=L.shadowSide,this.colorWrite=L.colorWrite,this.precision=L.precision,this.polygonOffset=L.polygonOffset,this.polygonOffsetFactor=L.polygonOffsetFactor,this.polygonOffsetUnits=L.polygonOffsetUnits,this.dithering=L.dithering,this.alphaTest=L.alphaTest,this.alphaHash=L.alphaHash,this.alphaToCoverage=L.alphaToCoverage,this.premultipliedAlpha=L.premultipliedAlpha,this.forceSinglePass=L.forceSinglePass,this.visible=L.visible,this.toneMapped=L.toneMapped,this.userData=JSON.parse(JSON.stringify(L.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(L){L===!0&&this.version++}},_I=class extends VI{constructor(L){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lL(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jN,this.combine=gQ,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(L)}copy(L){return super.copy(L),this.color.copy(L.color),this.map=L.map,this.lightMap=L.lightMap,this.lightMapIntensity=L.lightMapIntensity,this.aoMap=L.aoMap,this.aoMapIntensity=L.aoMapIntensity,this.specularMap=L.specularMap,this.alphaMap=L.alphaMap,this.envMap=L.envMap,this.envMapRotation.copy(L.envMapRotation),this.combine=L.combine,this.reflectivity=L.reflectivity,this.refractionRatio=L.refractionRatio,this.wireframe=L.wireframe,this.wireframeLinewidth=L.wireframeLinewidth,this.wireframeLinecap=L.wireframeLinecap,this.wireframeLinejoin=L.wireframeLinejoin,this.fog=L.fog,this}},DN=MJ();function MJ(){let e=new ArrayBuffer(4),L=new Float32Array(e),I=new Uint32Array(e),N=new Uint32Array(512),t=new Uint32Array(512);for(let r=0;r<256;++r){let i=r-127;i<-27?(N[r]=0,N[r|256]=32768,t[r]=24,t[r|256]=24):i<-14?(N[r]=1024>>-i-14,N[r|256]=1024>>-i-14|32768,t[r]=-i-1,t[r|256]=-i-1):i<=15?(N[r]=i+15<<10,N[r|256]=i+15<<10|32768,t[r]=13,t[r|256]=13):i<128?(N[r]=31744,N[r|256]=64512,t[r]=24,t[r|256]=24):(N[r]=31744,N[r|256]=64512,t[r]=13,t[r|256]=13)}let P=new Uint32Array(2048),n=new Uint32Array(64),Q=new Uint32Array(64);for(let r=1;r<1024;++r){let i=r<<13,j=0;for(;(i&8388608)===0;)i<<=1,j-=8388608;i&=-8388609,j+=947912704,P[r]=i|j}for(let r=1024;r<2048;++r)P[r]=939524096+(r-1024<<13);for(let r=1;r<31;++r)n[r]=r<<23;n[31]=1199570944,n[32]=2147483648;for(let r=33;r<63;++r)n[r]=2147483648+(r-32<<23);n[63]=3347054592;for(let r=1;r<64;++r)r!==32&&(Q[r]=1024);return{floatView:L,uint32View:I,baseTable:N,shiftTable:t,mantissaTable:P,exponentTable:n,offsetTable:Q}}function KJ(e){Math.abs(e)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),e=XL(e,-65504,65504),DN.floatView[0]=e;let L=DN.uint32View[0],I=L>>23&511;return DN.baseTable[I]+((L&8388607)>>DN.shiftTable[I])}function GJ(e){let L=e>>10;return DN.uint32View[0]=DN.mantissaTable[DN.offsetTable[L]+(e&1023)]+DN.exponentTable[L],DN.floatView[0]}var CN=class{static toHalfFloat(L){return KJ(L)}static fromHalfFloat(L){return GJ(L)}},dI=new u,xP=new AL,sJ=0,KI=class{constructor(L,I,N=!1){if(Array.isArray(L))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sJ++}),this.name="",this.array=L,this.itemSize=I,this.count=L!==void 0?L.length/I:0,this.normalized=N,this.usage=XP,this.updateRanges=[],this.gpuType=RI,this.version=0}onUploadCallback(){}set needsUpdate(L){L===!0&&this.version++}setUsage(L){return this.usage=L,this}addUpdateRange(L,I){this.updateRanges.push({start:L,count:I})}clearUpdateRanges(){this.updateRanges.length=0}copy(L){return this.name=L.name,this.array=new L.array.constructor(L.array),this.itemSize=L.itemSize,this.count=L.count,this.normalized=L.normalized,this.usage=L.usage,this.gpuType=L.gpuType,this}copyAt(L,I,N){L*=this.itemSize,N*=I.itemSize;for(let t=0,P=this.itemSize;t<P;t++)this.array[L+t]=I.array[N+t];return this}copyArray(L){return this.array.set(L),this}applyMatrix3(L){if(this.itemSize===2)for(let I=0,N=this.count;I<N;I++)xP.fromBufferAttribute(this,I),xP.applyMatrix3(L),this.setXY(I,xP.x,xP.y);else if(this.itemSize===3)for(let I=0,N=this.count;I<N;I++)dI.fromBufferAttribute(this,I),dI.applyMatrix3(L),this.setXYZ(I,dI.x,dI.y,dI.z);return this}applyMatrix4(L){for(let I=0,N=this.count;I<N;I++)dI.fromBufferAttribute(this,I),dI.applyMatrix4(L),this.setXYZ(I,dI.x,dI.y,dI.z);return this}applyNormalMatrix(L){for(let I=0,N=this.count;I<N;I++)dI.fromBufferAttribute(this,I),dI.applyNormalMatrix(L),this.setXYZ(I,dI.x,dI.y,dI.z);return this}transformDirection(L){for(let I=0,N=this.count;I<N;I++)dI.fromBufferAttribute(this,I),dI.transformDirection(L),this.setXYZ(I,dI.x,dI.y,dI.z);return this}set(L,I=0){return this.array.set(L,I),this}getComponent(L,I){let N=this.array[L*this.itemSize+I];return this.normalized&&(N=nN(N,this.array)),N}setComponent(L,I,N){return this.normalized&&(N=LI(N,this.array)),this.array[L*this.itemSize+I]=N,this}getX(L){let I=this.array[L*this.itemSize];return this.normalized&&(I=nN(I,this.array)),I}setX(L,I){return this.normalized&&(I=LI(I,this.array)),this.array[L*this.itemSize]=I,this}getY(L){let I=this.array[L*this.itemSize+1];return this.normalized&&(I=nN(I,this.array)),I}setY(L,I){return this.normalized&&(I=LI(I,this.array)),this.array[L*this.itemSize+1]=I,this}getZ(L){let I=this.array[L*this.itemSize+2];return this.normalized&&(I=nN(I,this.array)),I}setZ(L,I){return this.normalized&&(I=LI(I,this.array)),this.array[L*this.itemSize+2]=I,this}getW(L){let I=this.array[L*this.itemSize+3];return this.normalized&&(I=nN(I,this.array)),I}setW(L,I){return this.normalized&&(I=LI(I,this.array)),this.array[L*this.itemSize+3]=I,this}setXY(L,I,N){return L*=this.itemSize,this.normalized&&(I=LI(I,this.array),N=LI(N,this.array)),this.array[L+0]=I,this.array[L+1]=N,this}setXYZ(L,I,N,t){return L*=this.itemSize,this.normalized&&(I=LI(I,this.array),N=LI(N,this.array),t=LI(t,this.array)),this.array[L+0]=I,this.array[L+1]=N,this.array[L+2]=t,this}setXYZW(L,I,N,t,P){return L*=this.itemSize,this.normalized&&(I=LI(I,this.array),N=LI(N,this.array),t=LI(t,this.array),P=LI(P,this.array)),this.array[L+0]=I,this.array[L+1]=N,this.array[L+2]=t,this.array[L+3]=P,this}onUpload(L){return this.onUploadCallback=L,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let L={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(L.name=this.name),this.usage!==XP&&(L.usage=this.usage),L}};var Ve=class extends KI{constructor(L,I,N){super(new Uint16Array(L),I,N)}};var pe=class extends KI{constructor(L,I,N){super(new Uint32Array(L),I,N)}};var XI=class extends KI{constructor(L,I,N){super(new Float32Array(L),I,N)}},OJ=0,gI=new qL,fQ=new jI,Tt=new u,TI=new wI,Ze=new wI,oI=new u,SI=class e extends uN{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OJ++}),this.uuid=rN(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(L){return Array.isArray(L)?this.index=new(Ji(L)?pe:Ve)(L,1):this.index=L,this}setIndirect(L){return this.indirect=L,this}getIndirect(){return this.indirect}getAttribute(L){return this.attributes[L]}setAttribute(L,I){return this.attributes[L]=I,this}deleteAttribute(L){return delete this.attributes[L],this}hasAttribute(L){return this.attributes[L]!==void 0}addGroup(L,I,N=0){this.groups.push({start:L,count:I,materialIndex:N})}clearGroups(){this.groups=[]}setDrawRange(L,I){this.drawRange.start=L,this.drawRange.count=I}applyMatrix4(L){let I=this.attributes.position;I!==void 0&&(I.applyMatrix4(L),I.needsUpdate=!0);let N=this.attributes.normal;if(N!==void 0){let P=new yL().getNormalMatrix(L);N.applyNormalMatrix(P),N.needsUpdate=!0}let t=this.attributes.tangent;return t!==void 0&&(t.transformDirection(L),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(L){return gI.makeRotationFromQuaternion(L),this.applyMatrix4(gI),this}rotateX(L){return gI.makeRotationX(L),this.applyMatrix4(gI),this}rotateY(L){return gI.makeRotationY(L),this.applyMatrix4(gI),this}rotateZ(L){return gI.makeRotationZ(L),this.applyMatrix4(gI),this}translate(L,I,N){return gI.makeTranslation(L,I,N),this.applyMatrix4(gI),this}scale(L,I,N){return gI.makeScale(L,I,N),this.applyMatrix4(gI),this}lookAt(L){return fQ.lookAt(L),fQ.updateMatrix(),this.applyMatrix4(fQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tt).negate(),this.translate(Tt.x,Tt.y,Tt.z),this}setFromPoints(L){let I=this.getAttribute("position");if(I===void 0){let N=[];for(let t=0,P=L.length;t<P;t++){let n=L[t];N.push(n.x,n.y,n.z||0)}this.setAttribute("position",new XI(N,3))}else{let N=Math.min(L.length,I.count);for(let t=0;t<N;t++){let P=L[t];I.setXYZ(t,P.x,P.y,P.z||0)}L.length>I.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),I.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wI);let L=this.attributes.position,I=this.morphAttributes.position;if(L&&L.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new u(-1/0,-1/0,-1/0),new u(1/0,1/0,1/0));return}if(L!==void 0){if(this.boundingBox.setFromBufferAttribute(L),I)for(let N=0,t=I.length;N<t;N++){let P=I[N];TI.setFromBufferAttribute(P),this.morphTargetsRelative?(oI.addVectors(this.boundingBox.min,TI.min),this.boundingBox.expandByPoint(oI),oI.addVectors(this.boundingBox.max,TI.max),this.boundingBox.expandByPoint(oI)):(this.boundingBox.expandByPoint(TI.min),this.boundingBox.expandByPoint(TI.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bI);let L=this.attributes.position,I=this.morphAttributes.position;if(L&&L.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new u,1/0);return}if(L){let N=this.boundingSphere.center;if(TI.setFromBufferAttribute(L),I)for(let P=0,n=I.length;P<n;P++){let Q=I[P];Ze.setFromBufferAttribute(Q),this.morphTargetsRelative?(oI.addVectors(TI.min,Ze.min),TI.expandByPoint(oI),oI.addVectors(TI.max,Ze.max),TI.expandByPoint(oI)):(TI.expandByPoint(Ze.min),TI.expandByPoint(Ze.max))}TI.getCenter(N);let t=0;for(let P=0,n=L.count;P<n;P++)oI.fromBufferAttribute(L,P),t=Math.max(t,N.distanceToSquared(oI));if(I)for(let P=0,n=I.length;P<n;P++){let Q=I[P],r=this.morphTargetsRelative;for(let i=0,j=Q.count;i<j;i++)oI.fromBufferAttribute(Q,i),r&&(Tt.fromBufferAttribute(L,i),oI.add(Tt)),t=Math.max(t,N.distanceToSquared(oI))}this.boundingSphere.radius=Math.sqrt(t),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let L=this.index,I=this.attributes;if(L===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let N=I.position,t=I.normal,P=I.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new KI(new Float32Array(4*N.count),4));let n=this.getAttribute("tangent"),Q=[],r=[];for(let D=0;D<N.count;D++)Q[D]=new u,r[D]=new u;let i=new u,j=new u,J=new u,F=new AL,$=new AL,d=new AL,K=new u,c=new u;function m(D,s,G){i.fromBufferAttribute(N,D),j.fromBufferAttribute(N,s),J.fromBufferAttribute(N,G),F.fromBufferAttribute(P,D),$.fromBufferAttribute(P,s),d.fromBufferAttribute(P,G),j.sub(i),J.sub(i),$.sub(F),d.sub(F);let a=1/($.x*d.y-d.x*$.y);isFinite(a)&&(K.copy(j).multiplyScalar(d.y).addScaledVector(J,-$.y).multiplyScalar(a),c.copy(J).multiplyScalar($.x).addScaledVector(j,-d.x).multiplyScalar(a),Q[D].add(K),Q[s].add(K),Q[G].add(K),r[D].add(c),r[s].add(c),r[G].add(c))}let f=this.groups;f.length===0&&(f=[{start:0,count:L.count}]);for(let D=0,s=f.length;D<s;++D){let G=f[D],a=G.start,v=G.count;for(let y=a,q=a+v;y<q;y+=3)m(L.getX(y+0),L.getX(y+1),L.getX(y+2))}let x=new u,H=new u,Z=new u,R=new u;function z(D){Z.fromBufferAttribute(t,D),R.copy(Z);let s=Q[D];x.copy(s),x.sub(Z.multiplyScalar(Z.dot(s))).normalize(),H.crossVectors(R,s);let a=H.dot(r[D])<0?-1:1;n.setXYZW(D,x.x,x.y,x.z,a)}for(let D=0,s=f.length;D<s;++D){let G=f[D],a=G.start,v=G.count;for(let y=a,q=a+v;y<q;y+=3)z(L.getX(y+0)),z(L.getX(y+1)),z(L.getX(y+2))}}computeVertexNormals(){let L=this.index,I=this.getAttribute("position");if(I!==void 0){let N=this.getAttribute("normal");if(N===void 0)N=new KI(new Float32Array(I.count*3),3),this.setAttribute("normal",N);else for(let F=0,$=N.count;F<$;F++)N.setXYZ(F,0,0,0);let t=new u,P=new u,n=new u,Q=new u,r=new u,i=new u,j=new u,J=new u;if(L)for(let F=0,$=L.count;F<$;F+=3){let d=L.getX(F+0),K=L.getX(F+1),c=L.getX(F+2);t.fromBufferAttribute(I,d),P.fromBufferAttribute(I,K),n.fromBufferAttribute(I,c),j.subVectors(n,P),J.subVectors(t,P),j.cross(J),Q.fromBufferAttribute(N,d),r.fromBufferAttribute(N,K),i.fromBufferAttribute(N,c),Q.add(j),r.add(j),i.add(j),N.setXYZ(d,Q.x,Q.y,Q.z),N.setXYZ(K,r.x,r.y,r.z),N.setXYZ(c,i.x,i.y,i.z)}else for(let F=0,$=I.count;F<$;F+=3)t.fromBufferAttribute(I,F+0),P.fromBufferAttribute(I,F+1),n.fromBufferAttribute(I,F+2),j.subVectors(n,P),J.subVectors(t,P),j.cross(J),N.setXYZ(F+0,j.x,j.y,j.z),N.setXYZ(F+1,j.x,j.y,j.z),N.setXYZ(F+2,j.x,j.y,j.z);this.normalizeNormals(),N.needsUpdate=!0}}normalizeNormals(){let L=this.attributes.normal;for(let I=0,N=L.count;I<N;I++)oI.fromBufferAttribute(L,I),oI.normalize(),L.setXYZ(I,oI.x,oI.y,oI.z)}toNonIndexed(){function L(Q,r){let i=Q.array,j=Q.itemSize,J=Q.normalized,F=new i.constructor(r.length*j),$=0,d=0;for(let K=0,c=r.length;K<c;K++){Q.isInterleavedBufferAttribute?$=r[K]*Q.data.stride+Q.offset:$=r[K]*j;for(let m=0;m<j;m++)F[d++]=i[$++]}return new KI(F,j,J)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let I=new e,N=this.index.array,t=this.attributes;for(let Q in t){let r=t[Q],i=L(r,N);I.setAttribute(Q,i)}let P=this.morphAttributes;for(let Q in P){let r=[],i=P[Q];for(let j=0,J=i.length;j<J;j++){let F=i[j],$=L(F,N);r.push($)}I.morphAttributes[Q]=r}I.morphTargetsRelative=this.morphTargetsRelative;let n=this.groups;for(let Q=0,r=n.length;Q<r;Q++){let i=n[Q];I.addGroup(i.start,i.count,i.materialIndex)}return I}toJSON(){let L={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(L.uuid=this.uuid,L.type=this.type,this.name!==""&&(L.name=this.name),Object.keys(this.userData).length>0&&(L.userData=this.userData),this.parameters!==void 0){let r=this.parameters;for(let i in r)r[i]!==void 0&&(L[i]=r[i]);return L}L.data={attributes:{}};let I=this.index;I!==null&&(L.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});let N=this.attributes;for(let r in N){let i=N[r];L.data.attributes[r]=i.toJSON(L.data)}let t={},P=!1;for(let r in this.morphAttributes){let i=this.morphAttributes[r],j=[];for(let J=0,F=i.length;J<F;J++){let $=i[J];j.push($.toJSON(L.data))}j.length>0&&(t[r]=j,P=!0)}P&&(L.data.morphAttributes=t,L.data.morphTargetsRelative=this.morphTargetsRelative);let n=this.groups;n.length>0&&(L.data.groups=JSON.parse(JSON.stringify(n)));let Q=this.boundingSphere;return Q!==null&&(L.data.boundingSphere=Q.toJSON()),L}clone(){return new this.constructor().copy(this)}copy(L){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let I={};this.name=L.name;let N=L.index;N!==null&&this.setIndex(N.clone());let t=L.attributes;for(let i in t){let j=t[i];this.setAttribute(i,j.clone(I))}let P=L.morphAttributes;for(let i in P){let j=[],J=P[i];for(let F=0,$=J.length;F<$;F++)j.push(J[F].clone(I));this.morphAttributes[i]=j}this.morphTargetsRelative=L.morphTargetsRelative;let n=L.groups;for(let i=0,j=n.length;i<j;i++){let J=n[i];this.addGroup(J.start,J.count,J.materialIndex)}let Q=L.boundingBox;Q!==null&&(this.boundingBox=Q.clone());let r=L.boundingSphere;return r!==null&&(this.boundingSphere=r.clone()),this.drawRange.start=L.drawRange.start,this.drawRange.count=L.drawRange.count,this.userData=L.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},lr=new qL,nt=new YN,fP=new bI,Rr=new u,ZP=new u,lP=new u,RP=new u,ZQ=new u,aP=new u,ar=new u,zP=new u,sI=class extends jI{constructor(L=new SI,I=new _I){super(),this.isMesh=!0,this.type="Mesh",this.geometry=L,this.material=I,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(L,I){return super.copy(L,I),L.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=L.morphTargetInfluences.slice()),L.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},L.morphTargetDictionary)),this.material=Array.isArray(L.material)?L.material.slice():L.material,this.geometry=L.geometry,this}updateMorphTargets(){let I=this.geometry.morphAttributes,N=Object.keys(I);if(N.length>0){let t=I[N[0]];if(t!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let P=0,n=t.length;P<n;P++){let Q=t[P].name||String(P);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Q]=P}}}}getVertexPosition(L,I){let N=this.geometry,t=N.attributes.position,P=N.morphAttributes.position,n=N.morphTargetsRelative;I.fromBufferAttribute(t,L);let Q=this.morphTargetInfluences;if(P&&Q){aP.set(0,0,0);for(let r=0,i=P.length;r<i;r++){let j=Q[r],J=P[r];j!==0&&(ZQ.fromBufferAttribute(J,L),n?aP.addScaledVector(ZQ,j):aP.addScaledVector(ZQ.sub(I),j))}I.add(aP)}return I}raycast(L,I){let N=this.geometry,t=this.material,P=this.matrixWorld;t!==void 0&&(N.boundingSphere===null&&N.computeBoundingSphere(),fP.copy(N.boundingSphere),fP.applyMatrix4(P),nt.copy(L.ray).recast(L.near),!(fP.containsPoint(nt.origin)===!1&&(nt.intersectSphere(fP,Rr)===null||nt.origin.distanceToSquared(Rr)>(L.far-L.near)**2))&&(lr.copy(P).invert(),nt.copy(L.ray).applyMatrix4(lr),!(N.boundingBox!==null&&nt.intersectsBox(N.boundingBox)===!1)&&this._computeIntersections(L,I,nt)))}_computeIntersections(L,I,N){let t,P=this.geometry,n=this.material,Q=P.index,r=P.attributes.position,i=P.attributes.uv,j=P.attributes.uv1,J=P.attributes.normal,F=P.groups,$=P.drawRange;if(Q!==null)if(Array.isArray(n))for(let d=0,K=F.length;d<K;d++){let c=F[d],m=n[c.materialIndex],f=Math.max(c.start,$.start),x=Math.min(Q.count,Math.min(c.start+c.count,$.start+$.count));for(let H=f,Z=x;H<Z;H+=3){let R=Q.getX(H),z=Q.getX(H+1),D=Q.getX(H+2);t=DP(this,m,L,N,i,j,J,R,z,D),t&&(t.faceIndex=Math.floor(H/3),t.face.materialIndex=c.materialIndex,I.push(t))}}else{let d=Math.max(0,$.start),K=Math.min(Q.count,$.start+$.count);for(let c=d,m=K;c<m;c+=3){let f=Q.getX(c),x=Q.getX(c+1),H=Q.getX(c+2);t=DP(this,n,L,N,i,j,J,f,x,H),t&&(t.faceIndex=Math.floor(c/3),I.push(t))}}else if(r!==void 0)if(Array.isArray(n))for(let d=0,K=F.length;d<K;d++){let c=F[d],m=n[c.materialIndex],f=Math.max(c.start,$.start),x=Math.min(r.count,Math.min(c.start+c.count,$.start+$.count));for(let H=f,Z=x;H<Z;H+=3){let R=H,z=H+1,D=H+2;t=DP(this,m,L,N,i,j,J,R,z,D),t&&(t.faceIndex=Math.floor(H/3),t.face.materialIndex=c.materialIndex,I.push(t))}}else{let d=Math.max(0,$.start),K=Math.min(r.count,$.start+$.count);for(let c=d,m=K;c<m;c+=3){let f=c,x=c+1,H=c+2;t=DP(this,n,L,N,i,j,J,f,x,H),t&&(t.faceIndex=Math.floor(c/3),I.push(t))}}}};function HJ(e,L,I,N,t,P,n,Q){let r;if(L.side===EI?r=N.intersectTriangle(n,P,t,!0,Q):r=N.intersectTriangle(t,P,n,L.side===AI,Q),r===null)return null;zP.copy(Q),zP.applyMatrix4(e.matrixWorld);let i=I.ray.origin.distanceTo(zP);return i<I.near||i>I.far?null:{distance:i,point:zP.clone(),object:e}}function DP(e,L,I,N,t,P,n,Q,r,i){e.getVertexPosition(Q,ZP),e.getVertexPosition(r,lP),e.getVertexPosition(i,RP);let j=HJ(e,L,I,N,ZP,lP,RP,ar);if(j){let J=new u;SN.getBarycoord(ar,ZP,lP,RP,J),t&&(j.uv=SN.getInterpolatedAttribute(t,Q,r,i,J,new AL)),P&&(j.uv1=SN.getInterpolatedAttribute(P,Q,r,i,J,new AL)),n&&(j.normal=SN.getInterpolatedAttribute(n,Q,r,i,J,new u),j.normal.dot(N.direction)>0&&j.normal.multiplyScalar(-1));let F={a:Q,b:r,c:i,normal:new u,materialIndex:0};SN.getNormal(ZP,lP,RP,F.normal),j.face=F,j.barycoord=J}return j}var Le=class e extends SI{constructor(L=1,I=1,N=1,t=1,P=1,n=1){super(),this.type="BoxGeometry",this.parameters={width:L,height:I,depth:N,widthSegments:t,heightSegments:P,depthSegments:n};let Q=this;t=Math.floor(t),P=Math.floor(P),n=Math.floor(n);let r=[],i=[],j=[],J=[],F=0,$=0;d("z","y","x",-1,-1,N,I,L,n,P,0),d("z","y","x",1,-1,N,I,-L,n,P,1),d("x","z","y",1,1,L,N,I,t,n,2),d("x","z","y",1,-1,L,N,-I,t,n,3),d("x","y","z",1,-1,L,I,N,t,P,4),d("x","y","z",-1,-1,L,I,-N,t,P,5),this.setIndex(r),this.setAttribute("position",new XI(i,3)),this.setAttribute("normal",new XI(j,3)),this.setAttribute("uv",new XI(J,2));function d(K,c,m,f,x,H,Z,R,z,D,s){let G=H/z,a=Z/D,v=H/2,y=Z/2,q=R/2,w=z+1,U=D+1,B=0,_=0,eL=new u;for(let nL=0;nL<U;nL++){let dL=nL*a-y;for(let RL=0;RL<w;RL++){let TL=RL*G-v;eL[K]=TL*f,eL[c]=dL*x,eL[m]=q,i.push(eL.x,eL.y,eL.z),eL[K]=0,eL[c]=0,eL[m]=R>0?1:-1,j.push(eL.x,eL.y,eL.z),J.push(RL/z),J.push(1-nL/D),B+=1}}for(let nL=0;nL<D;nL++)for(let dL=0;dL<z;dL++){let RL=F+dL+w*nL,TL=F+dL+w*(nL+1),kL=F+(dL+1)+w*(nL+1),YL=F+(dL+1)+w*nL;r.push(RL,TL,YL),r.push(TL,kL,YL),_+=6}Q.addGroup($,_,s),$+=_,F+=B}}copy(L){return super.copy(L),this.parameters=Object.assign({},L.parameters),this}static fromJSON(L){return new e(L.width,L.height,L.depth,L.widthSegments,L.heightSegments,L.depthSegments)}};function Zt(e){let L={};for(let I in e){L[I]={};for(let N in e[I]){let t=e[I][N];t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)?t.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),L[I][N]=null):L[I][N]=t.clone():Array.isArray(t)?L[I][N]=t.slice():L[I][N]=t}}return L}function aI(e){let L={};for(let I=0;I<e.length;I++){let N=Zt(e[I]);for(let t in N)L[t]=N[t]}return L}function oJ(e){let L=[];for(let I=0;I<e.length;I++)L.push(e[I].clone());return L}function Fi(e){let L=e.getRenderTarget();return L===null?e.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:SL.workingColorSpace}var Uj={clone:Zt,merge:aI},xJ=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fJ=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,JN=class extends VI{constructor(L){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xJ,this.fragmentShader=fJ,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,L!==void 0&&this.setValues(L)}copy(L){return super.copy(L),this.fragmentShader=L.fragmentShader,this.vertexShader=L.vertexShader,this.uniforms=Zt(L.uniforms),this.uniformsGroups=oJ(L.uniformsGroups),this.defines=Object.assign({},L.defines),this.wireframe=L.wireframe,this.wireframeLinewidth=L.wireframeLinewidth,this.fog=L.fog,this.lights=L.lights,this.clipping=L.clipping,this.extensions=Object.assign({},L.extensions),this.glslVersion=L.glslVersion,this}toJSON(L){let I=super.toJSON(L);I.glslVersion=this.glslVersion,I.uniforms={};for(let t in this.uniforms){let n=this.uniforms[t].value;n&&n.isTexture?I.uniforms[t]={type:"t",value:n.toJSON(L).uuid}:n&&n.isColor?I.uniforms[t]={type:"c",value:n.getHex()}:n&&n.isVector2?I.uniforms[t]={type:"v2",value:n.toArray()}:n&&n.isVector3?I.uniforms[t]={type:"v3",value:n.toArray()}:n&&n.isVector4?I.uniforms[t]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?I.uniforms[t]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?I.uniforms[t]={type:"m4",value:n.toArray()}:I.uniforms[t]={value:n}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader,I.lights=this.lights,I.clipping=this.clipping;let N={};for(let t in this.extensions)this.extensions[t]===!0&&(N[t]=!0);return Object.keys(N).length>0&&(I.extensions=N),I}},ve=class extends jI{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qL,this.projectionMatrix=new qL,this.projectionMatrixInverse=new qL,this.coordinateSystem=QN,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(L,I){return super.copy(L,I),this.matrixWorldInverse.copy(L.matrixWorldInverse),this.projectionMatrix.copy(L.projectionMatrix),this.projectionMatrixInverse.copy(L.projectionMatrixInverse),this.coordinateSystem=L.coordinateSystem,this}getWorldDirection(L){return super.getWorldDirection(L).negate()}updateMatrixWorld(L){super.updateMatrixWorld(L),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(L,I){super.updateWorldMatrix(L,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},_N=new u,zr=new AL,Dr=new AL,MI=class extends ve{constructor(L=50,I=1,N=.1,t=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=L,this.zoom=1,this.near=N,this.far=t,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(L,I){return super.copy(L,I),this.fov=L.fov,this.zoom=L.zoom,this.near=L.near,this.far=L.far,this.focus=L.focus,this.aspect=L.aspect,this.view=L.view===null?null:Object.assign({},L.view),this.filmGauge=L.filmGauge,this.filmOffset=L.filmOffset,this}setFocalLength(L){let I=.5*this.getFilmHeight()/L;this.fov=mt*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){let L=Math.tan(De*.5*this.fov);return .5*this.getFilmHeight()/L}getEffectiveFOV(){return mt*2*Math.atan(Math.tan(De*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(L,I,N){_N.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),I.set(_N.x,_N.y).multiplyScalar(-L/_N.z),_N.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),N.set(_N.x,_N.y).multiplyScalar(-L/_N.z)}getViewSize(L,I){return this.getViewBounds(L,zr,Dr),I.subVectors(Dr,zr)}setViewOffset(L,I,N,t,P,n){this.aspect=L/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=L,this.view.fullHeight=I,this.view.offsetX=N,this.view.offsetY=t,this.view.width=P,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let L=this.near,I=L*Math.tan(De*.5*this.fov)/this.zoom,N=2*I,t=this.aspect*N,P=-.5*t,n=this.view;if(this.view!==null&&this.view.enabled){let r=n.fullWidth,i=n.fullHeight;P+=n.offsetX*t/r,I-=n.offsetY*N/i,t*=n.width/r,N*=n.height/i}let Q=this.filmOffset;Q!==0&&(P+=L*Q/this.getFilmWidth()),this.projectionMatrix.makePerspective(P,P+t,I,I-N,L,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(L){let I=super.toJSON(L);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}},Xt=-90,At=1,Ie=class extends jI{constructor(L,I,N){super(),this.type="CubeCamera",this.renderTarget=N,this.coordinateSystem=null,this.activeMipmapLevel=0;let t=new MI(Xt,At,L,I);t.layers=this.layers,this.add(t);let P=new MI(Xt,At,L,I);P.layers=this.layers,this.add(P);let n=new MI(Xt,At,L,I);n.layers=this.layers,this.add(n);let Q=new MI(Xt,At,L,I);Q.layers=this.layers,this.add(Q);let r=new MI(Xt,At,L,I);r.layers=this.layers,this.add(r);let i=new MI(Xt,At,L,I);i.layers=this.layers,this.add(i)}updateCoordinateSystem(){let L=this.coordinateSystem,I=this.children.concat(),[N,t,P,n,Q,r]=I;for(let i of I)this.remove(i);if(L===QN)N.up.set(0,1,0),N.lookAt(1,0,0),t.up.set(0,1,0),t.lookAt(-1,0,0),P.up.set(0,0,-1),P.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),Q.up.set(0,1,0),Q.lookAt(0,0,1),r.up.set(0,1,0),r.lookAt(0,0,-1);else if(L===he)N.up.set(0,-1,0),N.lookAt(-1,0,0),t.up.set(0,-1,0),t.lookAt(1,0,0),P.up.set(0,0,1),P.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),Q.up.set(0,-1,0),Q.lookAt(0,0,1),r.up.set(0,-1,0),r.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+L);for(let i of I)this.add(i),i.updateMatrixWorld()}update(L,I){this.parent===null&&this.updateMatrixWorld();let{renderTarget:N,activeMipmapLevel:t}=this;this.coordinateSystem!==L.coordinateSystem&&(this.coordinateSystem=L.coordinateSystem,this.updateCoordinateSystem());let[P,n,Q,r,i,j]=this.children,J=L.getRenderTarget(),F=L.getActiveCubeFace(),$=L.getActiveMipmapLevel(),d=L.xr.enabled;L.xr.enabled=!1;let K=N.texture.generateMipmaps;N.texture.generateMipmaps=!1,L.setRenderTarget(N,0,t),L.render(I,P),L.setRenderTarget(N,1,t),L.render(I,n),L.setRenderTarget(N,2,t),L.render(I,Q),L.setRenderTarget(N,3,t),L.render(I,r),L.setRenderTarget(N,4,t),L.render(I,i),N.texture.generateMipmaps=K,L.setRenderTarget(N,5,t),L.render(I,j),L.setRenderTarget(J,F,$),L.xr.enabled=d,N.texture.needsPMREMUpdate=!0}},qe=class extends GI{constructor(L=[],I=ot,N,t,P,n,Q,r,i,j){super(L,I,N,t,P,n,Q,r,i,j),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(L){this.image=L}},Ne=class extends MN{constructor(L=1,I={}){super(L,L,I),this.isWebGLCubeRenderTarget=!0;let N={width:L,height:L,depth:1},t=[N,N,N,N,N,N];this.texture=new qe(t),this._setTextureOptions(I),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(L,I){this.texture.type=I.type,this.texture.colorSpace=I.colorSpace,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;let N={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},t=new Le(5,5,5),P=new JN({name:"CubemapFromEquirect",uniforms:Zt(N.uniforms),vertexShader:N.vertexShader,fragmentShader:N.fragmentShader,side:EI,blending:vN});P.uniforms.tEquirect.value=I;let n=new sI(t,P),Q=I.minFilter;return I.minFilter===vI&&(I.minFilter=QI),new Ie(1,10,this).update(L,n),I.minFilter=Q,n.geometry.dispose(),n.material.dispose(),this}clear(L,I=!0,N=!0,t=!0){let P=L.getRenderTarget();for(let n=0;n<6;n++)L.setRenderTarget(this,n),L.clear(I,N,t);L.setRenderTarget(P)}},iN=class extends jI{constructor(){super(),this.isGroup=!0,this.type="Group"}},ZJ={type:"move"},te=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new iN,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new iN,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new u,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new u),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new iN,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new u,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new u),this._grip}dispatchEvent(L){return this._targetRay!==null&&this._targetRay.dispatchEvent(L),this._grip!==null&&this._grip.dispatchEvent(L),this._hand!==null&&this._hand.dispatchEvent(L),this}connect(L){if(L&&L.hand){let I=this._hand;if(I)for(let N of L.hand.values())this._getHandJoint(I,N)}return this.dispatchEvent({type:"connected",data:L}),this}disconnect(L){return this.dispatchEvent({type:"disconnected",data:L}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(L,I,N){let t=null,P=null,n=null,Q=this._targetRay,r=this._grip,i=this._hand;if(L&&I.session.visibilityState!=="visible-blurred"){if(i&&L.hand){n=!0;for(let K of L.hand.values()){let c=I.getJointPose(K,N),m=this._getHandJoint(i,K);c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=c.radius),m.visible=c!==null}let j=i.joints["index-finger-tip"],J=i.joints["thumb-tip"],F=j.position.distanceTo(J.position),$=.02,d=.005;i.inputState.pinching&&F>$+d?(i.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:L.handedness,target:this})):!i.inputState.pinching&&F<=$-d&&(i.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:L.handedness,target:this}))}else r!==null&&L.gripSpace&&(P=I.getPose(L.gripSpace,N),P!==null&&(r.matrix.fromArray(P.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,P.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(P.linearVelocity)):r.hasLinearVelocity=!1,P.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(P.angularVelocity)):r.hasAngularVelocity=!1));Q!==null&&(t=I.getPose(L.targetRaySpace,N),t===null&&P!==null&&(t=P),t!==null&&(Q.matrix.fromArray(t.transform.matrix),Q.matrix.decompose(Q.position,Q.rotation,Q.scale),Q.matrixWorldNeedsUpdate=!0,t.linearVelocity?(Q.hasLinearVelocity=!0,Q.linearVelocity.copy(t.linearVelocity)):Q.hasLinearVelocity=!1,t.angularVelocity?(Q.hasAngularVelocity=!0,Q.angularVelocity.copy(t.angularVelocity)):Q.hasAngularVelocity=!1,this.dispatchEvent(ZJ)))}return Q!==null&&(Q.visible=t!==null),r!==null&&(r.visible=P!==null),i!==null&&(i.visible=n!==null),this}_getHandJoint(L,I){if(L.joints[I.jointName]===void 0){let N=new iN;N.matrixAutoUpdate=!1,N.visible=!1,L.joints[I.jointName]=N,L.add(N)}return L.joints[I.jointName]}};var ye=class e{constructor(L,I=1,N=1e3){this.isFog=!0,this.name="",this.color=new lL(L),this.near=I,this.far=N}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ue=class extends jI{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jN,this.environmentIntensity=1,this.environmentRotation=new jN,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(L,I){return super.copy(L,I),L.background!==null&&(this.background=L.background.clone()),L.environment!==null&&(this.environment=L.environment.clone()),L.fog!==null&&(this.fog=L.fog.clone()),this.backgroundBlurriness=L.backgroundBlurriness,this.backgroundIntensity=L.backgroundIntensity,this.backgroundRotation.copy(L.backgroundRotation),this.environmentIntensity=L.environmentIntensity,this.environmentRotation.copy(L.environmentRotation),L.overrideMaterial!==null&&(this.overrideMaterial=L.overrideMaterial.clone()),this.matrixAutoUpdate=L.matrixAutoUpdate,this}toJSON(L){let I=super.toJSON(L);return this.fog!==null&&(I.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(I.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(I.object.backgroundIntensity=this.backgroundIntensity),I.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(I.object.environmentIntensity=this.environmentIntensity),I.object.environmentRotation=this.environmentRotation.toArray(),I}},ee=class{constructor(L,I){this.isInterleavedBuffer=!0,this.array=L,this.stride=I,this.count=L!==void 0?L.length/I:0,this.usage=XP,this.updateRanges=[],this.version=0,this.uuid=rN()}onUploadCallback(){}set needsUpdate(L){L===!0&&this.version++}setUsage(L){return this.usage=L,this}addUpdateRange(L,I){this.updateRanges.push({start:L,count:I})}clearUpdateRanges(){this.updateRanges.length=0}copy(L){return this.array=new L.array.constructor(L.array),this.count=L.count,this.stride=L.stride,this.usage=L.usage,this}copyAt(L,I,N){L*=this.stride,N*=I.stride;for(let t=0,P=this.stride;t<P;t++)this.array[L+t]=I.array[N+t];return this}set(L,I=0){return this.array.set(L,I),this}clone(L){L.arrayBuffers===void 0&&(L.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rN()),L.arrayBuffers[this.array.buffer._uuid]===void 0&&(L.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let I=new this.array.constructor(L.arrayBuffers[this.array.buffer._uuid]),N=new this.constructor(I,this.stride);return N.setUsage(this.usage),N}onUpload(L){return this.onUploadCallback=L,this}toJSON(L){return L.arrayBuffers===void 0&&(L.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rN()),L.arrayBuffers[this.array.buffer._uuid]===void 0&&(L.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},DI=new u,Pe=class e{constructor(L,I,N,t=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=L,this.itemSize=I,this.offset=N,this.normalized=t}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(L){this.data.needsUpdate=L}applyMatrix4(L){for(let I=0,N=this.data.count;I<N;I++)DI.fromBufferAttribute(this,I),DI.applyMatrix4(L),this.setXYZ(I,DI.x,DI.y,DI.z);return this}applyNormalMatrix(L){for(let I=0,N=this.count;I<N;I++)DI.fromBufferAttribute(this,I),DI.applyNormalMatrix(L),this.setXYZ(I,DI.x,DI.y,DI.z);return this}transformDirection(L){for(let I=0,N=this.count;I<N;I++)DI.fromBufferAttribute(this,I),DI.transformDirection(L),this.setXYZ(I,DI.x,DI.y,DI.z);return this}getComponent(L,I){let N=this.array[L*this.data.stride+this.offset+I];return this.normalized&&(N=nN(N,this.array)),N}setComponent(L,I,N){return this.normalized&&(N=LI(N,this.array)),this.data.array[L*this.data.stride+this.offset+I]=N,this}setX(L,I){return this.normalized&&(I=LI(I,this.array)),this.data.array[L*this.data.stride+this.offset]=I,this}setY(L,I){return this.normalized&&(I=LI(I,this.array)),this.data.array[L*this.data.stride+this.offset+1]=I,this}setZ(L,I){return this.normalized&&(I=LI(I,this.array)),this.data.array[L*this.data.stride+this.offset+2]=I,this}setW(L,I){return this.normalized&&(I=LI(I,this.array)),this.data.array[L*this.data.stride+this.offset+3]=I,this}getX(L){let I=this.data.array[L*this.data.stride+this.offset];return this.normalized&&(I=nN(I,this.array)),I}getY(L){let I=this.data.array[L*this.data.stride+this.offset+1];return this.normalized&&(I=nN(I,this.array)),I}getZ(L){let I=this.data.array[L*this.data.stride+this.offset+2];return this.normalized&&(I=nN(I,this.array)),I}getW(L){let I=this.data.array[L*this.data.stride+this.offset+3];return this.normalized&&(I=nN(I,this.array)),I}setXY(L,I,N){return L=L*this.data.stride+this.offset,this.normalized&&(I=LI(I,this.array),N=LI(N,this.array)),this.data.array[L+0]=I,this.data.array[L+1]=N,this}setXYZ(L,I,N,t){return L=L*this.data.stride+this.offset,this.normalized&&(I=LI(I,this.array),N=LI(N,this.array),t=LI(t,this.array)),this.data.array[L+0]=I,this.data.array[L+1]=N,this.data.array[L+2]=t,this}setXYZW(L,I,N,t,P){return L=L*this.data.stride+this.offset,this.normalized&&(I=LI(I,this.array),N=LI(N,this.array),t=LI(t,this.array),P=LI(P,this.array)),this.data.array[L+0]=I,this.data.array[L+1]=N,this.data.array[L+2]=t,this.data.array[L+3]=P,this}clone(L){if(L===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let I=[];for(let N=0;N<this.count;N++){let t=N*this.data.stride+this.offset;for(let P=0;P<this.itemSize;P++)I.push(this.data.array[t+P])}return new KI(new this.array.constructor(I),this.itemSize,this.normalized)}else return L.interleavedBuffers===void 0&&(L.interleavedBuffers={}),L.interleavedBuffers[this.data.uuid]===void 0&&(L.interleavedBuffers[this.data.uuid]=this.data.clone(L)),new e(L.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(L){if(L===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let I=[];for(let N=0;N<this.count;N++){let t=N*this.data.stride+this.offset;for(let P=0;P<this.itemSize;P++)I.push(this.data.array[t+P])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:I,normalized:this.normalized}}else return L.interleavedBuffers===void 0&&(L.interleavedBuffers={}),L.interleavedBuffers[this.data.uuid]===void 0&&(L.interleavedBuffers[this.data.uuid]=this.data.toJSON(L)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Er=new u,ur=new gL,hr=new gL,lJ=new u,br=new qL,EP=new u,lQ=new bI,Vr=new qL,RQ=new YN,Te=class extends sI{constructor(L,I){super(L,I),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=hQ,this.bindMatrix=new qL,this.bindMatrixInverse=new qL,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let L=this.geometry;this.boundingBox===null&&(this.boundingBox=new wI),this.boundingBox.makeEmpty();let I=L.getAttribute("position");for(let N=0;N<I.count;N++)this.getVertexPosition(N,EP),this.boundingBox.expandByPoint(EP)}computeBoundingSphere(){let L=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bI),this.boundingSphere.makeEmpty();let I=L.getAttribute("position");for(let N=0;N<I.count;N++)this.getVertexPosition(N,EP),this.boundingSphere.expandByPoint(EP)}copy(L,I){return super.copy(L,I),this.bindMode=L.bindMode,this.bindMatrix.copy(L.bindMatrix),this.bindMatrixInverse.copy(L.bindMatrixInverse),this.skeleton=L.skeleton,L.boundingBox!==null&&(this.boundingBox=L.boundingBox.clone()),L.boundingSphere!==null&&(this.boundingSphere=L.boundingSphere.clone()),this}raycast(L,I){let N=this.material,t=this.matrixWorld;N!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lQ.copy(this.boundingSphere),lQ.applyMatrix4(t),L.ray.intersectsSphere(lQ)!==!1&&(Vr.copy(t).invert(),RQ.copy(L.ray).applyMatrix4(Vr),!(this.boundingBox!==null&&RQ.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(L,I,RQ)))}getVertexPosition(L,I){return super.getVertexPosition(L,I),this.applyBoneTransform(L,I),I}bind(L,I){this.skeleton=L,I===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),I=this.matrixWorld),this.bindMatrix.copy(I),this.bindMatrixInverse.copy(I).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let L=new gL,I=this.geometry.attributes.skinWeight;for(let N=0,t=I.count;N<t;N++){L.fromBufferAttribute(I,N);let P=1/L.manhattanLength();P!==1/0?L.multiplyScalar(P):L.set(1,0,0,0),I.setXYZW(N,L.x,L.y,L.z,L.w)}}updateMatrixWorld(L){super.updateMatrixWorld(L),this.bindMode===hQ?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Zj?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(L,I){let N=this.skeleton,t=this.geometry;ur.fromBufferAttribute(t.attributes.skinIndex,L),hr.fromBufferAttribute(t.attributes.skinWeight,L),Er.copy(I).applyMatrix4(this.bindMatrix),I.set(0,0,0);for(let P=0;P<4;P++){let n=hr.getComponent(P);if(n!==0){let Q=ur.getComponent(P);br.multiplyMatrices(N.bones[Q].matrixWorld,N.boneInverses[Q]),I.addScaledVector(lJ.copy(Er).applyMatrix4(br),n)}}return I.applyMatrix4(this.bindMatrixInverse)}},ne=class extends jI{constructor(){super(),this.isBone=!0,this.type="Bone"}},gN=class extends GI{constructor(L=null,I=1,N=1,t,P,n,Q,r,i=xI,j=xI,J,F){super(null,n,Q,r,i,j,t,P,J,F),this.isDataTexture=!0,this.image={data:L,width:I,height:N},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},pr=new qL,RJ=new qL,Xe=class e{constructor(L=[],I=[]){this.uuid=rN(),this.bones=L.slice(0),this.boneInverses=I,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let L=this.bones,I=this.boneInverses;if(this.boneMatrices=new Float32Array(L.length*16),I.length===0)this.calculateInverses();else if(L.length!==I.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let N=0,t=this.bones.length;N<t;N++)this.boneInverses.push(new qL)}}calculateInverses(){this.boneInverses.length=0;for(let L=0,I=this.bones.length;L<I;L++){let N=new qL;this.bones[L]&&N.copy(this.bones[L].matrixWorld).invert(),this.boneInverses.push(N)}}pose(){for(let L=0,I=this.bones.length;L<I;L++){let N=this.bones[L];N&&N.matrixWorld.copy(this.boneInverses[L]).invert()}for(let L=0,I=this.bones.length;L<I;L++){let N=this.bones[L];N&&(N.parent&&N.parent.isBone?(N.matrix.copy(N.parent.matrixWorld).invert(),N.matrix.multiply(N.matrixWorld)):N.matrix.copy(N.matrixWorld),N.matrix.decompose(N.position,N.quaternion,N.scale))}}update(){let L=this.bones,I=this.boneInverses,N=this.boneMatrices,t=this.boneTexture;for(let P=0,n=L.length;P<n;P++){let Q=L[P]?L[P].matrixWorld:RJ;pr.multiplyMatrices(Q,I[P]),pr.toArray(N,P*16)}t!==null&&(t.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let L=Math.sqrt(this.bones.length*4);L=Math.ceil(L/4)*4,L=Math.max(L,4);let I=new Float32Array(L*L*4);I.set(this.boneMatrices);let N=new gN(I,L,L,uI,RI);return N.needsUpdate=!0,this.boneMatrices=I,this.boneTexture=N,this}getBoneByName(L){for(let I=0,N=this.bones.length;I<N;I++){let t=this.bones[I];if(t.name===L)return t}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(L,I){this.uuid=L.uuid;for(let N=0,t=L.bones.length;N<t;N++){let P=L.bones[N],n=I[P];n===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",P),n=new ne),this.bones.push(n),this.boneInverses.push(new qL().fromArray(L.boneInverses[N]))}return this.init(),this}toJSON(){let L={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};L.uuid=this.uuid;let I=this.bones,N=this.boneInverses;for(let t=0,P=I.length;t<P;t++){let n=I[t];L.bones.push(n.uuid);let Q=N[t];L.boneInverses.push(Q.toArray())}return L}},BN=class extends KI{constructor(L,I,N,t=1){super(L,I,N),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=t}copy(L){return super.copy(L),this.meshPerAttribute=L.meshPerAttribute,this}toJSON(){let L=super.toJSON();return L.meshPerAttribute=this.meshPerAttribute,L.isInstancedBufferAttribute=!0,L}},wt=new qL,vr=new qL,uP=[],qr=new wI,aJ=new qL,le=new sI,Re=new bI,$t=class extends sI{constructor(L,I,N){super(L,I),this.isInstancedMesh=!0,this.instanceMatrix=new BN(new Float32Array(N*16),16),this.instanceColor=null,this.morphTexture=null,this.count=N,this.boundingBox=null,this.boundingSphere=null;for(let t=0;t<N;t++)this.setMatrixAt(t,aJ)}computeBoundingBox(){let L=this.geometry,I=this.count;this.boundingBox===null&&(this.boundingBox=new wI),L.boundingBox===null&&L.computeBoundingBox(),this.boundingBox.makeEmpty();for(let N=0;N<I;N++)this.getMatrixAt(N,wt),qr.copy(L.boundingBox).applyMatrix4(wt),this.boundingBox.union(qr)}computeBoundingSphere(){let L=this.geometry,I=this.count;this.boundingSphere===null&&(this.boundingSphere=new bI),L.boundingSphere===null&&L.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let N=0;N<I;N++)this.getMatrixAt(N,wt),Re.copy(L.boundingSphere).applyMatrix4(wt),this.boundingSphere.union(Re)}copy(L,I){return super.copy(L,I),this.instanceMatrix.copy(L.instanceMatrix),L.morphTexture!==null&&(this.morphTexture=L.morphTexture.clone()),L.instanceColor!==null&&(this.instanceColor=L.instanceColor.clone()),this.count=L.count,L.boundingBox!==null&&(this.boundingBox=L.boundingBox.clone()),L.boundingSphere!==null&&(this.boundingSphere=L.boundingSphere.clone()),this}getColorAt(L,I){I.fromArray(this.instanceColor.array,L*3)}getMatrixAt(L,I){I.fromArray(this.instanceMatrix.array,L*16)}getMorphAt(L,I){let N=I.morphTargetInfluences,t=this.morphTexture.source.data.data,P=N.length+1,n=L*P+1;for(let Q=0;Q<N.length;Q++)N[Q]=t[n+Q]}raycast(L,I){let N=this.matrixWorld,t=this.count;if(le.geometry=this.geometry,le.material=this.material,le.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Re.copy(this.boundingSphere),Re.applyMatrix4(N),L.ray.intersectsSphere(Re)!==!1))for(let P=0;P<t;P++){this.getMatrixAt(P,wt),vr.multiplyMatrices(N,wt),le.matrixWorld=vr,le.raycast(L,uP);for(let n=0,Q=uP.length;n<Q;n++){let r=uP[n];r.instanceId=P,r.object=this,I.push(r)}uP.length=0}}setColorAt(L,I){this.instanceColor===null&&(this.instanceColor=new BN(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),I.toArray(this.instanceColor.array,L*3)}setMatrixAt(L,I){I.toArray(this.instanceMatrix.array,L*16)}setMorphAt(L,I){let N=I.morphTargetInfluences,t=N.length+1;this.morphTexture===null&&(this.morphTexture=new gN(new Float32Array(t*this.count),t,this.count,Gn,RI));let P=this.morphTexture.source.data.data,n=0;for(let i=0;i<N.length;i++)n+=N[i];let Q=this.geometry.morphTargetsRelative?1:1-n,r=t*L;P[r]=Q,P.set(N,r+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},aQ=new u,zJ=new u,DJ=new yL,cN=class{constructor(L=new u(1,0,0),I=0){this.isPlane=!0,this.normal=L,this.constant=I}set(L,I){return this.normal.copy(L),this.constant=I,this}setComponents(L,I,N,t){return this.normal.set(L,I,N),this.constant=t,this}setFromNormalAndCoplanarPoint(L,I){return this.normal.copy(L),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(L,I,N){let t=aQ.subVectors(N,I).cross(zJ.subVectors(L,I)).normalize();return this.setFromNormalAndCoplanarPoint(t,L),this}copy(L){return this.normal.copy(L.normal),this.constant=L.constant,this}normalize(){let L=1/this.normal.length();return this.normal.multiplyScalar(L),this.constant*=L,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(L){return this.normal.dot(L)+this.constant}distanceToSphere(L){return this.distanceToPoint(L.center)-L.radius}projectPoint(L,I){return I.copy(L).addScaledVector(this.normal,-this.distanceToPoint(L))}intersectLine(L,I){let N=L.delta(aQ),t=this.normal.dot(N);if(t===0)return this.distanceToPoint(L.start)===0?I.copy(L.start):null;let P=-(L.start.dot(this.normal)+this.constant)/t;return P<0||P>1?null:I.copy(L.start).addScaledVector(N,P)}intersectsLine(L){let I=this.distanceToPoint(L.start),N=this.distanceToPoint(L.end);return I<0&&N>0||N<0&&I>0}intersectsBox(L){return L.intersectsPlane(this)}intersectsSphere(L){return L.intersectsPlane(this)}coplanarPoint(L){return L.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(L,I){let N=I||DJ.getNormalMatrix(L),t=this.coplanarPoint(aQ).applyMatrix4(L),P=this.normal.applyMatrix3(N).normalize();return this.constant=-t.dot(P),this}translate(L){return this.constant-=L.dot(this.normal),this}equals(L){return L.normal.equals(this.normal)&&L.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qt=new bI,EJ=new AL(.5,.5),hP=new u,Qe=class{constructor(L=new cN,I=new cN,N=new cN,t=new cN,P=new cN,n=new cN){this.planes=[L,I,N,t,P,n]}set(L,I,N,t,P,n){let Q=this.planes;return Q[0].copy(L),Q[1].copy(I),Q[2].copy(N),Q[3].copy(t),Q[4].copy(P),Q[5].copy(n),this}copy(L){let I=this.planes;for(let N=0;N<6;N++)I[N].copy(L.planes[N]);return this}setFromProjectionMatrix(L,I=QN,N=!1){let t=this.planes,P=L.elements,n=P[0],Q=P[1],r=P[2],i=P[3],j=P[4],J=P[5],F=P[6],$=P[7],d=P[8],K=P[9],c=P[10],m=P[11],f=P[12],x=P[13],H=P[14],Z=P[15];if(t[0].setComponents(i-n,$-j,m-d,Z-f).normalize(),t[1].setComponents(i+n,$+j,m+d,Z+f).normalize(),t[2].setComponents(i+Q,$+J,m+K,Z+x).normalize(),t[3].setComponents(i-Q,$-J,m-K,Z-x).normalize(),N)t[4].setComponents(r,F,c,H).normalize(),t[5].setComponents(i-r,$-F,m-c,Z-H).normalize();else if(t[4].setComponents(i-r,$-F,m-c,Z-H).normalize(),I===QN)t[5].setComponents(i+r,$+F,m+c,Z+H).normalize();else if(I===he)t[5].setComponents(r,F,c,H).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+I);return this}intersectsObject(L){if(L.boundingSphere!==void 0)L.boundingSphere===null&&L.computeBoundingSphere(),Qt.copy(L.boundingSphere).applyMatrix4(L.matrixWorld);else{let I=L.geometry;I.boundingSphere===null&&I.computeBoundingSphere(),Qt.copy(I.boundingSphere).applyMatrix4(L.matrixWorld)}return this.intersectsSphere(Qt)}intersectsSprite(L){Qt.center.set(0,0,0);let I=EJ.distanceTo(L.center);return Qt.radius=.7071067811865476+I,Qt.applyMatrix4(L.matrixWorld),this.intersectsSphere(Qt)}intersectsSphere(L){let I=this.planes,N=L.center,t=-L.radius;for(let P=0;P<6;P++)if(I[P].distanceToPoint(N)<t)return!1;return!0}intersectsBox(L){let I=this.planes;for(let N=0;N<6;N++){let t=I[N];if(hP.x=t.normal.x>0?L.max.x:L.min.x,hP.y=t.normal.y>0?L.max.y:L.min.y,hP.z=t.normal.z>0?L.max.z:L.min.z,t.distanceToPoint(hP)<0)return!1}return!0}containsPoint(L){let I=this.planes;for(let N=0;N<6;N++)if(I[N].distanceToPoint(L)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ie=class extends VI{constructor(L){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lL(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(L)}copy(L){return super.copy(L),this.color.copy(L.color),this.map=L.map,this.linewidth=L.linewidth,this.linecap=L.linecap,this.linejoin=L.linejoin,this.fog=L.fog,this}},SP=new u,kP=new u,yr=new qL,ae=new YN,bP=new bI,zQ=new u,Ur=new u,ct=class extends jI{constructor(L=new SI,I=new ie){super(),this.isLine=!0,this.type="Line",this.geometry=L,this.material=I,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(L,I){return super.copy(L,I),this.material=Array.isArray(L.material)?L.material.slice():L.material,this.geometry=L.geometry,this}computeLineDistances(){let L=this.geometry;if(L.index===null){let I=L.attributes.position,N=[0];for(let t=1,P=I.count;t<P;t++)SP.fromBufferAttribute(I,t-1),kP.fromBufferAttribute(I,t),N[t]=N[t-1],N[t]+=SP.distanceTo(kP);L.setAttribute("lineDistance",new XI(N,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(L,I){let N=this.geometry,t=this.matrixWorld,P=L.params.Line.threshold,n=N.drawRange;if(N.boundingSphere===null&&N.computeBoundingSphere(),bP.copy(N.boundingSphere),bP.applyMatrix4(t),bP.radius+=P,L.ray.intersectsSphere(bP)===!1)return;yr.copy(t).invert(),ae.copy(L.ray).applyMatrix4(yr);let Q=P/((this.scale.x+this.scale.y+this.scale.z)/3),r=Q*Q,i=this.isLineSegments?2:1,j=N.index,F=N.attributes.position;if(j!==null){let $=Math.max(0,n.start),d=Math.min(j.count,n.start+n.count);for(let K=$,c=d-1;K<c;K+=i){let m=j.getX(K),f=j.getX(K+1),x=VP(this,L,ae,r,m,f,K);x&&I.push(x)}if(this.isLineLoop){let K=j.getX(d-1),c=j.getX($),m=VP(this,L,ae,r,K,c,d-1);m&&I.push(m)}}else{let $=Math.max(0,n.start),d=Math.min(F.count,n.start+n.count);for(let K=$,c=d-1;K<c;K+=i){let m=VP(this,L,ae,r,K,K+1,K);m&&I.push(m)}if(this.isLineLoop){let K=VP(this,L,ae,r,d-1,$,d-1);K&&I.push(K)}}}updateMorphTargets(){let I=this.geometry.morphAttributes,N=Object.keys(I);if(N.length>0){let t=I[N[0]];if(t!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let P=0,n=t.length;P<n;P++){let Q=t[P].name||String(P);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Q]=P}}}}};function VP(e,L,I,N,t,P,n){let Q=e.geometry.attributes.position;if(SP.fromBufferAttribute(Q,t),kP.fromBufferAttribute(Q,P),I.distanceSqToSegment(SP,kP,zQ,Ur)>N)return;zQ.applyMatrix4(e.matrixWorld);let i=L.ray.origin.distanceTo(zQ);if(!(i<L.near||i>L.far))return{distance:i,point:Ur.clone().applyMatrix4(e.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:e}}var Tr=new u,Xr=new u,Ae=class extends ct{constructor(L,I){super(L,I),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let L=this.geometry;if(L.index===null){let I=L.attributes.position,N=[];for(let t=0,P=I.count;t<P;t+=2)Tr.fromBufferAttribute(I,t),Xr.fromBufferAttribute(I,t+1),N[t]=t===0?0:N[t-1],N[t+1]=N[t]+Tr.distanceTo(Xr);L.setAttribute("lineDistance",new XI(N,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},we=class extends ct{constructor(L,I){super(L,I),this.isLineLoop=!0,this.type="LineLoop"}},re=class extends VI{constructor(L){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lL(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(L)}copy(L){return super.copy(L),this.color.copy(L.color),this.map=L.map,this.alphaMap=L.alphaMap,this.size=L.size,this.sizeAttenuation=L.sizeAttenuation,this.fog=L.fog,this}},Ar=new qL,qQ=new YN,pP=new bI,vP=new u,_e=class extends jI{constructor(L=new SI,I=new re){super(),this.isPoints=!0,this.type="Points",this.geometry=L,this.material=I,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(L,I){return super.copy(L,I),this.material=Array.isArray(L.material)?L.material.slice():L.material,this.geometry=L.geometry,this}raycast(L,I){let N=this.geometry,t=this.matrixWorld,P=L.params.Points.threshold,n=N.drawRange;if(N.boundingSphere===null&&N.computeBoundingSphere(),pP.copy(N.boundingSphere),pP.applyMatrix4(t),pP.radius+=P,L.ray.intersectsSphere(pP)===!1)return;Ar.copy(t).invert(),qQ.copy(L.ray).applyMatrix4(Ar);let Q=P/((this.scale.x+this.scale.y+this.scale.z)/3),r=Q*Q,i=N.index,J=N.attributes.position;if(i!==null){let F=Math.max(0,n.start),$=Math.min(i.count,n.start+n.count);for(let d=F,K=$;d<K;d++){let c=i.getX(d);vP.fromBufferAttribute(J,c),wr(vP,c,r,t,L,I,this)}}else{let F=Math.max(0,n.start),$=Math.min(J.count,n.start+n.count);for(let d=F,K=$;d<K;d++)vP.fromBufferAttribute(J,d),wr(vP,d,r,t,L,I,this)}}updateMorphTargets(){let I=this.geometry.morphAttributes,N=Object.keys(I);if(N.length>0){let t=I[N[0]];if(t!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let P=0,n=t.length;P<n;P++){let Q=t[P].name||String(P);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Q]=P}}}}};function wr(e,L,I,N,t,P,n){let Q=qQ.distanceSqToPoint(e);if(Q<I){let r=new u;qQ.closestPointToPoint(e,r),r.applyMatrix4(N);let i=t.ray.origin.distanceTo(r);if(i<t.near||i>t.far)return;P.push({distance:i,distanceToRay:Math.sqrt(Q),point:r,index:L,face:null,faceIndex:null,barycoord:null,object:n})}}var Se=class extends GI{constructor(L,I,N,t,P,n,Q,r,i){super(L,I,N,t,P,n,Q,r,i),this.isCanvasTexture=!0,this.needsUpdate=!0}},ke=class extends GI{constructor(L,I,N=WN,t,P,n,Q=xI,r=xI,i,j=Yt,J=1){if(j!==Yt&&j!==$e)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let F={width:L,height:I,depth:J};super(F,t,P,n,Q,r,j,N,i),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(L){return super.copy(L),this.source=new Bt(Object.assign({},L.image)),this.compareFunction=L.compareFunction,this}toJSON(L){let I=super.toJSON(L);return this.compareFunction!==null&&(I.compareFunction=this.compareFunction),I}},Ye=class extends GI{constructor(L=null){super(),this.sourceTexture=L,this.isExternalTexture=!0}copy(L){return super.copy(L),this.sourceTexture=L.sourceTexture,this}};var dt=class e extends SI{constructor(L=1,I=1,N=1,t=1){super(),this.type="PlaneGeometry",this.parameters={width:L,height:I,widthSegments:N,heightSegments:t};let P=L/2,n=I/2,Q=Math.floor(N),r=Math.floor(t),i=Q+1,j=r+1,J=L/Q,F=I/r,$=[],d=[],K=[],c=[];for(let m=0;m<j;m++){let f=m*F-n;for(let x=0;x<i;x++){let H=x*J-P;d.push(H,-f,0),K.push(0,0,1),c.push(x/Q),c.push(1-m/r)}}for(let m=0;m<r;m++)for(let f=0;f<Q;f++){let x=f+i*m,H=f+i*(m+1),Z=f+1+i*(m+1),R=f+1+i*m;$.push(x,H,R),$.push(H,Z,R)}this.setIndex($),this.setAttribute("position",new XI(d,3)),this.setAttribute("normal",new XI(K,3)),this.setAttribute("uv",new XI(c,2))}copy(L){return super.copy(L),this.parameters=Object.assign({},L.parameters),this}static fromJSON(L){return new e(L.width,L.height,L.widthSegments,L.heightSegments)}};var Mt=class extends VI{constructor(L){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lL(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lL(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qi,this.normalScale=new AL(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jN,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(L)}copy(L){return super.copy(L),this.defines={STANDARD:""},this.color.copy(L.color),this.roughness=L.roughness,this.metalness=L.metalness,this.map=L.map,this.lightMap=L.lightMap,this.lightMapIntensity=L.lightMapIntensity,this.aoMap=L.aoMap,this.aoMapIntensity=L.aoMapIntensity,this.emissive.copy(L.emissive),this.emissiveMap=L.emissiveMap,this.emissiveIntensity=L.emissiveIntensity,this.bumpMap=L.bumpMap,this.bumpScale=L.bumpScale,this.normalMap=L.normalMap,this.normalMapType=L.normalMapType,this.normalScale.copy(L.normalScale),this.displacementMap=L.displacementMap,this.displacementScale=L.displacementScale,this.displacementBias=L.displacementBias,this.roughnessMap=L.roughnessMap,this.metalnessMap=L.metalnessMap,this.alphaMap=L.alphaMap,this.envMap=L.envMap,this.envMapRotation.copy(L.envMapRotation),this.envMapIntensity=L.envMapIntensity,this.wireframe=L.wireframe,this.wireframeLinewidth=L.wireframeLinewidth,this.wireframeLinecap=L.wireframeLinecap,this.wireframeLinejoin=L.wireframeLinejoin,this.flatShading=L.flatShading,this.fog=L.fog,this}},lI=class extends Mt{constructor(L){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new AL(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return XL(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(I){this.ior=(1+.4*I)/(1-.4*I)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new lL(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new lL(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new lL(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(L)}get anisotropy(){return this._anisotropy}set anisotropy(L){this._anisotropy>0!=L>0&&this.version++,this._anisotropy=L}get clearcoat(){return this._clearcoat}set clearcoat(L){this._clearcoat>0!=L>0&&this.version++,this._clearcoat=L}get iridescence(){return this._iridescence}set iridescence(L){this._iridescence>0!=L>0&&this.version++,this._iridescence=L}get dispersion(){return this._dispersion}set dispersion(L){this._dispersion>0!=L>0&&this.version++,this._dispersion=L}get sheen(){return this._sheen}set sheen(L){this._sheen>0!=L>0&&this.version++,this._sheen=L}get transmission(){return this._transmission}set transmission(L){this._transmission>0!=L>0&&this.version++,this._transmission=L}copy(L){return super.copy(L),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=L.anisotropy,this.anisotropyRotation=L.anisotropyRotation,this.anisotropyMap=L.anisotropyMap,this.clearcoat=L.clearcoat,this.clearcoatMap=L.clearcoatMap,this.clearcoatRoughness=L.clearcoatRoughness,this.clearcoatRoughnessMap=L.clearcoatRoughnessMap,this.clearcoatNormalMap=L.clearcoatNormalMap,this.clearcoatNormalScale.copy(L.clearcoatNormalScale),this.dispersion=L.dispersion,this.ior=L.ior,this.iridescence=L.iridescence,this.iridescenceMap=L.iridescenceMap,this.iridescenceIOR=L.iridescenceIOR,this.iridescenceThicknessRange=[...L.iridescenceThicknessRange],this.iridescenceThicknessMap=L.iridescenceThicknessMap,this.sheen=L.sheen,this.sheenColor.copy(L.sheenColor),this.sheenColorMap=L.sheenColorMap,this.sheenRoughness=L.sheenRoughness,this.sheenRoughnessMap=L.sheenRoughnessMap,this.transmission=L.transmission,this.transmissionMap=L.transmissionMap,this.thickness=L.thickness,this.thicknessMap=L.thicknessMap,this.attenuationDistance=L.attenuationDistance,this.attenuationColor.copy(L.attenuationColor),this.specularIntensity=L.specularIntensity,this.specularIntensityMap=L.specularIntensityMap,this.specularColor.copy(L.specularColor),this.specularColorMap=L.specularColorMap,this}};var YP=class extends VI{constructor(L){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rj,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(L)}copy(L){return super.copy(L),this.depthPacking=L.depthPacking,this.map=L.map,this.alphaMap=L.alphaMap,this.displacementMap=L.displacementMap,this.displacementScale=L.displacementScale,this.displacementBias=L.displacementBias,this.wireframe=L.wireframe,this.wireframeLinewidth=L.wireframeLinewidth,this}},CP=class extends VI{constructor(L){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(L)}copy(L){return super.copy(L),this.map=L.map,this.alphaMap=L.alphaMap,this.displacementMap=L.displacementMap,this.displacementScale=L.displacementScale,this.displacementBias=L.displacementBias,this}};function qP(e,L){return!e||e.constructor===L?e:typeof L.BYTES_PER_ELEMENT=="number"?new L(e):Array.prototype.slice.call(e)}function uJ(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function hJ(e){function L(t,P){return e[t]-e[P]}let I=e.length,N=new Array(I);for(let t=0;t!==I;++t)N[t]=t;return N.sort(L),N}function _r(e,L,I){let N=e.length,t=new e.constructor(N);for(let P=0,n=0;n!==N;++P){let Q=I[P]*L;for(let r=0;r!==L;++r)t[n++]=e[Q+r]}return t}function Tj(e,L,I,N){let t=1,P=e[0];for(;P!==void 0&&P[N]===void 0;)P=e[t++];if(P===void 0)return;let n=P[N];if(n!==void 0)if(Array.isArray(n))do n=P[N],n!==void 0&&(L.push(P.time),I.push(...n)),P=e[t++];while(P!==void 0);else if(n.toArray!==void 0)do n=P[N],n!==void 0&&(L.push(P.time),n.toArray(I,I.length)),P=e[t++];while(P!==void 0);else do n=P[N],n!==void 0&&(L.push(P.time),I.push(n)),P=e[t++];while(P!==void 0)}var hN=class{constructor(L,I,N,t){this.parameterPositions=L,this._cachedIndex=0,this.resultBuffer=t!==void 0?t:new I.constructor(N),this.sampleValues=I,this.valueSize=N,this.settings=null,this.DefaultSettings_={}}evaluate(L){let I=this.parameterPositions,N=this._cachedIndex,t=I[N],P=I[N-1];N:{L:{let n;I:{t:if(!(L<t)){for(let Q=N+2;;){if(t===void 0){if(L<P)break t;return N=I.length,this._cachedIndex=N,this.copySampleValue_(N-1)}if(N===Q)break;if(P=t,t=I[++N],L<t)break L}n=I.length;break I}if(!(L>=P)){let Q=I[1];L<Q&&(N=2,P=Q);for(let r=N-2;;){if(P===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(N===r)break;if(t=P,P=I[--N-1],L>=P)break L}n=N,N=0;break I}break N}for(;N<n;){let Q=N+n>>>1;L<I[Q]?n=Q:N=Q+1}if(t=I[N],P=I[N-1],P===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(t===void 0)return N=I.length,this._cachedIndex=N,this.copySampleValue_(N-1)}this._cachedIndex=N,this.intervalChanged_(N,P,t)}return this.interpolate_(N,P,L,t)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(L){let I=this.resultBuffer,N=this.sampleValues,t=this.valueSize,P=L*t;for(let n=0;n!==t;++n)I[n]=N[P+n];return I}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},gP=class extends hN{constructor(L,I,N,t){super(L,I,N,t),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bQ,endingEnd:bQ}}intervalChanged_(L,I,N){let t=this.parameterPositions,P=L-2,n=L+1,Q=t[P],r=t[n];if(Q===void 0)switch(this.getSettings_().endingStart){case VQ:P=L,Q=2*I-N;break;case pQ:P=t.length-2,Q=I+t[P]-t[P+1];break;default:P=L,Q=N}if(r===void 0)switch(this.getSettings_().endingEnd){case VQ:n=L,r=2*N-I;break;case pQ:n=1,r=N+t[1]-t[0];break;default:n=L-1,r=I}let i=(N-I)*.5,j=this.valueSize;this._weightPrev=i/(I-Q),this._weightNext=i/(r-N),this._offsetPrev=P*j,this._offsetNext=n*j}interpolate_(L,I,N,t){let P=this.resultBuffer,n=this.sampleValues,Q=this.valueSize,r=L*Q,i=r-Q,j=this._offsetPrev,J=this._offsetNext,F=this._weightPrev,$=this._weightNext,d=(N-I)/(t-I),K=d*d,c=K*d,m=-F*c+2*F*K-F*d,f=(1+F)*c+(-1.5-2*F)*K+(-.5+F)*d+1,x=(-1-$)*c+(1.5+$)*K+.5*d,H=$*c-$*K;for(let Z=0;Z!==Q;++Z)P[Z]=m*n[j+Z]+f*n[i+Z]+x*n[r+Z]+H*n[J+Z];return P}},BP=class extends hN{constructor(L,I,N,t){super(L,I,N,t)}interpolate_(L,I,N,t){let P=this.resultBuffer,n=this.sampleValues,Q=this.valueSize,r=L*Q,i=r-Q,j=(N-I)/(t-I),J=1-j;for(let F=0;F!==Q;++F)P[F]=n[i+F]*J+n[r+F]*j;return P}},WP=class extends hN{constructor(L,I,N,t){super(L,I,N,t)}interpolate_(L){return this.copySampleValue_(L-1)}},pI=class{constructor(L,I,N,t){if(L===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(I===void 0||I.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+L);this.name=L,this.times=qP(I,this.TimeBufferType),this.values=qP(N,this.ValueBufferType),this.setInterpolation(t||this.DefaultInterpolation)}static toJSON(L){let I=L.constructor,N;if(I.toJSON!==this.toJSON)N=I.toJSON(L);else{N={name:L.name,times:qP(L.times,Array),values:qP(L.values,Array)};let t=L.getInterpolation();t!==L.DefaultInterpolation&&(N.interpolation=t)}return N.type=L.ValueTypeName,N}InterpolantFactoryMethodDiscrete(L){return new WP(this.times,this.values,this.getValueSize(),L)}InterpolantFactoryMethodLinear(L){return new BP(this.times,this.values,this.getValueSize(),L)}InterpolantFactoryMethodSmooth(L){return new gP(this.times,this.values,this.getValueSize(),L)}setInterpolation(L){let I;switch(L){case Jt:I=this.InterpolantFactoryMethodDiscrete;break;case Ft:I=this.InterpolantFactoryMethodLinear;break;case yP:I=this.InterpolantFactoryMethodSmooth;break}if(I===void 0){let N="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(L!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(N);return console.warn("THREE.KeyframeTrack:",N),this}return this.createInterpolant=I,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jt;case this.InterpolantFactoryMethodLinear:return Ft;case this.InterpolantFactoryMethodSmooth:return yP}}getValueSize(){return this.values.length/this.times.length}shift(L){if(L!==0){let I=this.times;for(let N=0,t=I.length;N!==t;++N)I[N]+=L}return this}scale(L){if(L!==1){let I=this.times;for(let N=0,t=I.length;N!==t;++N)I[N]*=L}return this}trim(L,I){let N=this.times,t=N.length,P=0,n=t-1;for(;P!==t&&N[P]<L;)++P;for(;n!==-1&&N[n]>I;)--n;if(++n,P!==0||n!==t){P>=n&&(n=Math.max(n,1),P=n-1);let Q=this.getValueSize();this.times=N.slice(P,n),this.values=this.values.slice(P*Q,n*Q)}return this}validate(){let L=!0,I=this.getValueSize();I-Math.floor(I)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),L=!1);let N=this.times,t=this.values,P=N.length;P===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),L=!1);let n=null;for(let Q=0;Q!==P;Q++){let r=N[Q];if(typeof r=="number"&&isNaN(r)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,Q,r),L=!1;break}if(n!==null&&n>r){console.error("THREE.KeyframeTrack: Out of order keys.",this,Q,r,n),L=!1;break}n=r}if(t!==void 0&&uJ(t))for(let Q=0,r=t.length;Q!==r;++Q){let i=t[Q];if(isNaN(i)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,Q,i),L=!1;break}}return L}optimize(){let L=this.times.slice(),I=this.values.slice(),N=this.getValueSize(),t=this.getInterpolation()===yP,P=L.length-1,n=1;for(let Q=1;Q<P;++Q){let r=!1,i=L[Q],j=L[Q+1];if(i!==j&&(Q!==1||i!==L[0]))if(t)r=!0;else{let J=Q*N,F=J-N,$=J+N;for(let d=0;d!==N;++d){let K=I[J+d];if(K!==I[F+d]||K!==I[$+d]){r=!0;break}}}if(r){if(Q!==n){L[n]=L[Q];let J=Q*N,F=n*N;for(let $=0;$!==N;++$)I[F+$]=I[J+$]}++n}}if(P>0){L[n]=L[P];for(let Q=P*N,r=n*N,i=0;i!==N;++i)I[r+i]=I[Q+i];++n}return n!==L.length?(this.times=L.slice(0,n),this.values=I.slice(0,n*N)):(this.times=L,this.values=I),this}clone(){let L=this.times.slice(),I=this.values.slice(),N=this.constructor,t=new N(this.name,L,I);return t.createInterpolant=this.createInterpolant,t}};pI.prototype.ValueTypeName="";pI.prototype.TimeBufferType=Float32Array;pI.prototype.ValueBufferType=Float32Array;pI.prototype.DefaultInterpolation=Ft;var bN=class extends pI{constructor(L,I,N){super(L,I,N)}};bN.prototype.ValueTypeName="bool";bN.prototype.ValueBufferType=Array;bN.prototype.DefaultInterpolation=Jt;bN.prototype.InterpolantFactoryMethodLinear=void 0;bN.prototype.InterpolantFactoryMethodSmooth=void 0;var Ce=class extends pI{constructor(L,I,N,t){super(L,I,N,t)}};Ce.prototype.ValueTypeName="color";var KN=class extends pI{constructor(L,I,N,t){super(L,I,N,t)}};KN.prototype.ValueTypeName="number";var Ln=class extends hN{constructor(L,I,N,t){super(L,I,N,t)}interpolate_(L,I,N,t){let P=this.resultBuffer,n=this.sampleValues,Q=this.valueSize,r=(N-I)/(t-I),i=L*Q;for(let j=i+Q;i!==j;i+=4)LN.slerpFlat(P,0,n,i-Q,n,i,r);return P}},GN=class extends pI{constructor(L,I,N,t){super(L,I,N,t)}InterpolantFactoryMethodLinear(L){return new Ln(this.times,this.values,this.getValueSize(),L)}};GN.prototype.ValueTypeName="quaternion";GN.prototype.InterpolantFactoryMethodSmooth=void 0;var VN=class extends pI{constructor(L,I,N){super(L,I,N)}};VN.prototype.ValueTypeName="string";VN.prototype.ValueBufferType=Array;VN.prototype.DefaultInterpolation=Jt;VN.prototype.InterpolantFactoryMethodLinear=void 0;VN.prototype.InterpolantFactoryMethodSmooth=void 0;var sN=class extends pI{constructor(L,I,N,t){super(L,I,N,t)}};sN.prototype.ValueTypeName="vector";var ge=class{constructor(L="",I=-1,N=[],t=lj){this.name=L,this.tracks=N,this.duration=I,this.blendMode=t,this.uuid=rN(),this.userData={},this.duration<0&&this.resetDuration()}static parse(L){let I=[],N=L.tracks,t=1/(L.fps||1);for(let n=0,Q=N.length;n!==Q;++n)I.push(VJ(N[n]).scale(t));let P=new this(L.name,L.duration,I,L.blendMode);return P.uuid=L.uuid,P.userData=JSON.parse(L.userData||"{}"),P}static toJSON(L){let I=[],N=L.tracks,t={name:L.name,duration:L.duration,tracks:I,uuid:L.uuid,blendMode:L.blendMode,userData:JSON.stringify(L.userData)};for(let P=0,n=N.length;P!==n;++P)I.push(pI.toJSON(N[P]));return t}static CreateFromMorphTargetSequence(L,I,N,t){let P=I.length,n=[];for(let Q=0;Q<P;Q++){let r=[],i=[];r.push((Q+P-1)%P,Q,(Q+1)%P),i.push(0,1,0);let j=hJ(r);r=_r(r,1,j),i=_r(i,1,j),!t&&r[0]===0&&(r.push(P),i.push(i[0])),n.push(new KN(".morphTargetInfluences["+I[Q].name+"]",r,i).scale(1/N))}return new this(L,-1,n)}static findByName(L,I){let N=L;if(!Array.isArray(L)){let t=L;N=t.geometry&&t.geometry.animations||t.animations}for(let t=0;t<N.length;t++)if(N[t].name===I)return N[t];return null}static CreateClipsFromMorphTargetSequences(L,I,N){let t={},P=/^([\w-]*?)([\d]+)$/;for(let Q=0,r=L.length;Q<r;Q++){let i=L[Q],j=i.name.match(P);if(j&&j.length>1){let J=j[1],F=t[J];F||(t[J]=F=[]),F.push(i)}}let n=[];for(let Q in t)n.push(this.CreateFromMorphTargetSequence(Q,t[Q],I,N));return n}static parseAnimation(L,I){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!L)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let N=function(J,F,$,d,K){if($.length!==0){let c=[],m=[];Tj($,c,m,d),c.length!==0&&K.push(new J(F,c,m))}},t=[],P=L.name||"default",n=L.fps||30,Q=L.blendMode,r=L.length||-1,i=L.hierarchy||[];for(let J=0;J<i.length;J++){let F=i[J].keys;if(!(!F||F.length===0))if(F[0].morphTargets){let $={},d;for(d=0;d<F.length;d++)if(F[d].morphTargets)for(let K=0;K<F[d].morphTargets.length;K++)$[F[d].morphTargets[K]]=-1;for(let K in $){let c=[],m=[];for(let f=0;f!==F[d].morphTargets.length;++f){let x=F[d];c.push(x.time),m.push(x.morphTarget===K?1:0)}t.push(new KN(".morphTargetInfluence["+K+"]",c,m))}r=$.length*n}else{let $=".bones["+I[J].name+"]";N(sN,$+".position",F,"pos",t),N(GN,$+".quaternion",F,"rot",t),N(sN,$+".scale",F,"scl",t)}}return t.length===0?null:new this(P,r,t,Q)}resetDuration(){let L=this.tracks,I=0;for(let N=0,t=L.length;N!==t;++N){let P=this.tracks[N];I=Math.max(I,P.times[P.times.length-1])}return this.duration=I,this}trim(){for(let L=0;L<this.tracks.length;L++)this.tracks[L].trim(0,this.duration);return this}validate(){let L=!0;for(let I=0;I<this.tracks.length;I++)L=L&&this.tracks[I].validate();return L}optimize(){for(let L=0;L<this.tracks.length;L++)this.tracks[L].optimize();return this}clone(){let L=[];for(let N=0;N<this.tracks.length;N++)L.push(this.tracks[N].clone());let I=new this.constructor(this.name,this.duration,L,this.blendMode);return I.userData=JSON.parse(JSON.stringify(this.userData)),I}toJSON(){return this.constructor.toJSON(this)}};function bJ(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return KN;case"vector":case"vector2":case"vector3":case"vector4":return sN;case"color":return Ce;case"quaternion":return GN;case"bool":case"boolean":return bN;case"string":return VN}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function VJ(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let L=bJ(e.type);if(e.times===void 0){let I=[],N=[];Tj(e.keys,I,N,"value"),e.times=I,e.values=N}return L.parse!==void 0?L.parse(e):new L(e.name,e.times,e.values,e.interpolation)}var dN={enabled:!1,files:{},add:function(e,L){this.enabled!==!1&&(this.files[e]=L)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},In=class{constructor(L,I,N){let t=this,P=!1,n=0,Q=0,r,i=[];this.onStart=void 0,this.onLoad=L,this.onProgress=I,this.onError=N,this.abortController=new AbortController,this.itemStart=function(j){Q++,P===!1&&t.onStart!==void 0&&t.onStart(j,n,Q),P=!0},this.itemEnd=function(j){n++,t.onProgress!==void 0&&t.onProgress(j,n,Q),n===Q&&(P=!1,t.onLoad!==void 0&&t.onLoad())},this.itemError=function(j){t.onError!==void 0&&t.onError(j)},this.resolveURL=function(j){return r?r(j):j},this.setURLModifier=function(j){return r=j,this},this.addHandler=function(j,J){return i.push(j,J),this},this.removeHandler=function(j){let J=i.indexOf(j);return J!==-1&&i.splice(J,2),this},this.getHandler=function(j){for(let J=0,F=i.length;J<F;J+=2){let $=i[J],d=i[J+1];if($.global&&($.lastIndex=0),$.test(j))return d}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Xj=new In,FN=class{constructor(L){this.manager=L!==void 0?L:Xj,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(L,I){let N=this;return new Promise(function(t,P){N.load(L,t,I,P)})}parse(){}setCrossOrigin(L){return this.crossOrigin=L,this}setWithCredentials(L){return this.withCredentials=L,this}setPath(L){return this.path=L,this}setResourcePath(L){return this.resourcePath=L,this}setRequestHeader(L){return this.requestHeader=L,this}abort(){return this}};FN.DEFAULT_MATERIAL_NAME="__DEFAULT";var zN={},yQ=class extends Error{constructor(L,I){super(L),this.response=I}},Kt=class extends FN{constructor(L){super(L),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(L,I,N,t){L===void 0&&(L=""),this.path!==void 0&&(L=this.path+L),L=this.manager.resolveURL(L);let P=dN.get(`file:${L}`);if(P!==void 0)return this.manager.itemStart(L),setTimeout(()=>{I&&I(P),this.manager.itemEnd(L)},0),P;if(zN[L]!==void 0){zN[L].push({onLoad:I,onProgress:N,onError:t});return}zN[L]=[],zN[L].push({onLoad:I,onProgress:N,onError:t});let n=new Request(L,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),Q=this.mimeType,r=this.responseType;fetch(n).then(i=>{if(i.status===200||i.status===0){if(i.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||i.body===void 0||i.body.getReader===void 0)return i;let j=zN[L],J=i.body.getReader(),F=i.headers.get("X-File-Size")||i.headers.get("Content-Length"),$=F?parseInt(F):0,d=$!==0,K=0,c=new ReadableStream({start(m){f();function f(){J.read().then(({done:x,value:H})=>{if(x)m.close();else{K+=H.byteLength;let Z=new ProgressEvent("progress",{lengthComputable:d,loaded:K,total:$});for(let R=0,z=j.length;R<z;R++){let D=j[R];D.onProgress&&D.onProgress(Z)}m.enqueue(H),f()}},x=>{m.error(x)})}}});return new Response(c)}else throw new yQ(`fetch for "${i.url}" responded with ${i.status}: ${i.statusText}`,i)}).then(i=>{switch(r){case"arraybuffer":return i.arrayBuffer();case"blob":return i.blob();case"document":return i.text().then(j=>new DOMParser().parseFromString(j,Q));case"json":return i.json();default:if(Q==="")return i.text();{let J=/charset="?([^;"\s]*)"?/i.exec(Q),F=J&&J[1]?J[1].toLowerCase():void 0,$=new TextDecoder(F);return i.arrayBuffer().then(d=>$.decode(d))}}}).then(i=>{dN.add(`file:${L}`,i);let j=zN[L];delete zN[L];for(let J=0,F=j.length;J<F;J++){let $=j[J];$.onLoad&&$.onLoad(i)}}).catch(i=>{let j=zN[L];if(j===void 0)throw this.manager.itemError(L),i;delete zN[L];for(let J=0,F=j.length;J<F;J++){let $=j[J];$.onError&&$.onError(i)}this.manager.itemError(L)}).finally(()=>{this.manager.itemEnd(L)}),this.manager.itemStart(L)}setResponseType(L){return this.responseType=L,this}setMimeType(L){return this.mimeType=L,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var _t=new WeakMap,Nn=class extends FN{constructor(L){super(L)}load(L,I,N,t){this.path!==void 0&&(L=this.path+L),L=this.manager.resolveURL(L);let P=this,n=dN.get(`image:${L}`);if(n!==void 0){if(n.complete===!0)P.manager.itemStart(L),setTimeout(function(){I&&I(n),P.manager.itemEnd(L)},0);else{let J=_t.get(n);J===void 0&&(J=[],_t.set(n,J)),J.push({onLoad:I,onError:t})}return n}let Q=Ct("img");function r(){j(),I&&I(this);let J=_t.get(this)||[];for(let F=0;F<J.length;F++){let $=J[F];$.onLoad&&$.onLoad(this)}_t.delete(this),P.manager.itemEnd(L)}function i(J){j(),t&&t(J),dN.remove(`image:${L}`);let F=_t.get(this)||[];for(let $=0;$<F.length;$++){let d=F[$];d.onError&&d.onError(J)}_t.delete(this),P.manager.itemError(L),P.manager.itemEnd(L)}function j(){Q.removeEventListener("load",r,!1),Q.removeEventListener("error",i,!1)}return Q.addEventListener("load",r,!1),Q.addEventListener("error",i,!1),L.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(Q.crossOrigin=this.crossOrigin),dN.add(`image:${L}`,Q),P.manager.itemStart(L),Q.src=L,Q}};var Be=class extends FN{constructor(L){super(L)}load(L,I,N,t){let P=this,n=new gN,Q=new Kt(this.manager);return Q.setResponseType("arraybuffer"),Q.setRequestHeader(this.requestHeader),Q.setPath(this.path),Q.setWithCredentials(P.withCredentials),Q.load(L,function(r){let i;try{i=P.parse(r)}catch(j){if(t!==void 0)t(j);else{console.error(j);return}}i.image!==void 0?n.image=i.image:i.data!==void 0&&(n.image.width=i.width,n.image.height=i.height,n.image.data=i.data),n.wrapS=i.wrapS!==void 0?i.wrapS:BI,n.wrapT=i.wrapT!==void 0?i.wrapT:BI,n.magFilter=i.magFilter!==void 0?i.magFilter:QI,n.minFilter=i.minFilter!==void 0?i.minFilter:QI,n.anisotropy=i.anisotropy!==void 0?i.anisotropy:1,i.colorSpace!==void 0&&(n.colorSpace=i.colorSpace),i.flipY!==void 0&&(n.flipY=i.flipY),i.format!==void 0&&(n.format=i.format),i.type!==void 0&&(n.type=i.type),i.mipmaps!==void 0&&(n.mipmaps=i.mipmaps,n.minFilter=vI),i.mipmapCount===1&&(n.minFilter=QI),i.generateMipmaps!==void 0&&(n.generateMipmaps=i.generateMipmaps),n.needsUpdate=!0,I&&I(n,i)},N,t),n}},Gt=class extends FN{constructor(L){super(L)}load(L,I,N,t){let P=new GI,n=new Nn(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(L,function(Q){P.image=Q,P.needsUpdate=!0,I!==void 0&&I(P)},N,t),P}},st=class extends jI{constructor(L,I=1){super(),this.isLight=!0,this.type="Light",this.color=new lL(L),this.intensity=I}dispose(){}copy(L,I){return super.copy(L,I),this.color.copy(L.color),this.intensity=L.intensity,this}toJSON(L){let I=super.toJSON(L);return I.object.color=this.color.getHex(),I.object.intensity=this.intensity,this.groundColor!==void 0&&(I.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(I.object.distance=this.distance),this.angle!==void 0&&(I.object.angle=this.angle),this.decay!==void 0&&(I.object.decay=this.decay),this.penumbra!==void 0&&(I.object.penumbra=this.penumbra),this.shadow!==void 0&&(I.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(I.object.target=this.target.uuid),I}},We=class extends st{constructor(L,I,N){super(L,N),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jI.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lL(I)}copy(L,I){return super.copy(L,I),this.groundColor.copy(L.groundColor),this}},DQ=new qL,Sr=new u,kr=new u,LP=class{constructor(L){this.camera=L,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new AL(512,512),this.mapType=mN,this.map=null,this.mapPass=null,this.matrix=new qL,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qe,this._frameExtents=new AL(1,1),this._viewportCount=1,this._viewports=[new gL(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(L){let I=this.camera,N=this.matrix;Sr.setFromMatrixPosition(L.matrixWorld),I.position.copy(Sr),kr.setFromMatrixPosition(L.target.matrixWorld),I.lookAt(kr),I.updateMatrixWorld(),DQ.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),this._frustum.setFromProjectionMatrix(DQ,I.coordinateSystem,I.reversedDepth),I.reversedDepth?N.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):N.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),N.multiply(DQ)}getViewport(L){return this._viewports[L]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(L){return this.camera=L.camera.clone(),this.intensity=L.intensity,this.bias=L.bias,this.radius=L.radius,this.autoUpdate=L.autoUpdate,this.needsUpdate=L.needsUpdate,this.normalBias=L.normalBias,this.blurSamples=L.blurSamples,this.mapSize.copy(L.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let L={};return this.intensity!==1&&(L.intensity=this.intensity),this.bias!==0&&(L.bias=this.bias),this.normalBias!==0&&(L.normalBias=this.normalBias),this.radius!==1&&(L.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(L.mapSize=this.mapSize.toArray()),L.camera=this.camera.toJSON(!1).object,delete L.camera.matrix,L}},UQ=class extends LP{constructor(){super(new MI(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(L){let I=this.camera,N=mt*2*L.angle*this.focus,t=this.mapSize.width/this.mapSize.height*this.aspect,P=L.distance||I.far;(N!==I.fov||t!==I.aspect||P!==I.far)&&(I.fov=N,I.aspect=t,I.far=P,I.updateProjectionMatrix()),super.updateMatrices(L)}copy(L){return super.copy(L),this.focus=L.focus,this}},IP=class extends st{constructor(L,I,N=0,t=Math.PI/3,P=0,n=2){super(L,I),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(jI.DEFAULT_UP),this.updateMatrix(),this.target=new jI,this.distance=N,this.angle=t,this.penumbra=P,this.decay=n,this.map=null,this.shadow=new UQ}get power(){return this.intensity*Math.PI}set power(L){this.intensity=L/Math.PI}dispose(){this.shadow.dispose()}copy(L,I){return super.copy(L,I),this.distance=L.distance,this.angle=L.angle,this.penumbra=L.penumbra,this.decay=L.decay,this.target=L.target.clone(),this.shadow=L.shadow.clone(),this}},Yr=new qL,ze=new u,EQ=new u,TQ=class extends LP{constructor(){super(new MI(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new AL(4,2),this._viewportCount=6,this._viewports=[new gL(2,1,1,1),new gL(0,1,1,1),new gL(3,1,1,1),new gL(1,1,1,1),new gL(3,0,1,1),new gL(1,0,1,1)],this._cubeDirections=[new u(1,0,0),new u(-1,0,0),new u(0,0,1),new u(0,0,-1),new u(0,1,0),new u(0,-1,0)],this._cubeUps=[new u(0,1,0),new u(0,1,0),new u(0,1,0),new u(0,1,0),new u(0,0,1),new u(0,0,-1)]}updateMatrices(L,I=0){let N=this.camera,t=this.matrix,P=L.distance||N.far;P!==N.far&&(N.far=P,N.updateProjectionMatrix()),ze.setFromMatrixPosition(L.matrixWorld),N.position.copy(ze),EQ.copy(N.position),EQ.add(this._cubeDirections[I]),N.up.copy(this._cubeUps[I]),N.lookAt(EQ),N.updateMatrixWorld(),t.makeTranslation(-ze.x,-ze.y,-ze.z),Yr.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yr,N.coordinateSystem,N.reversedDepth)}},NP=class extends st{constructor(L,I,N=0,t=2){super(L,I),this.isPointLight=!0,this.type="PointLight",this.distance=N,this.decay=t,this.shadow=new TQ}get power(){return this.intensity*4*Math.PI}set power(L){this.intensity=L/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(L,I){return super.copy(L,I),this.distance=L.distance,this.decay=L.decay,this.shadow=L.shadow.clone(),this}},Ot=class extends ve{constructor(L=-1,I=1,N=1,t=-1,P=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=L,this.right=I,this.top=N,this.bottom=t,this.near=P,this.far=n,this.updateProjectionMatrix()}copy(L,I){return super.copy(L,I),this.left=L.left,this.right=L.right,this.top=L.top,this.bottom=L.bottom,this.near=L.near,this.far=L.far,this.zoom=L.zoom,this.view=L.view===null?null:Object.assign({},L.view),this}setViewOffset(L,I,N,t,P,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=L,this.view.fullHeight=I,this.view.offsetX=N,this.view.offsetY=t,this.view.width=P,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let L=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),N=(this.right+this.left)/2,t=(this.top+this.bottom)/2,P=N-L,n=N+L,Q=t+I,r=t-I;if(this.view!==null&&this.view.enabled){let i=(this.right-this.left)/this.view.fullWidth/this.zoom,j=(this.top-this.bottom)/this.view.fullHeight/this.zoom;P+=i*this.view.offsetX,n=P+i*this.view.width,Q-=j*this.view.offsetY,r=Q-j*this.view.height}this.projectionMatrix.makeOrthographic(P,n,Q,r,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(L){let I=super.toJSON(L);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}},XQ=class extends LP{constructor(){super(new Ot(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ht=class extends st{constructor(L,I){super(L,I),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jI.DEFAULT_UP),this.updateMatrix(),this.target=new jI,this.shadow=new XQ}dispose(){this.shadow.dispose()}copy(L){return super.copy(L),this.target=L.target.clone(),this.shadow=L.shadow.clone(),this}};var pN=class{static extractUrlBase(L){let I=L.lastIndexOf("/");return I===-1?"./":L.slice(0,I+1)}static resolveURL(L,I){return typeof L!="string"||L===""?"":(/^https?:\/\//i.test(I)&&/^\//.test(L)&&(I=I.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(L)||/^data:.*,.*$/i.test(L)||/^blob:.*$/i.test(L)?L:I+L)}};var uQ=new WeakMap,tP=class extends FN{constructor(L){super(L),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(L){return this.options=L,this}load(L,I,N,t){L===void 0&&(L=""),this.path!==void 0&&(L=this.path+L),L=this.manager.resolveURL(L);let P=this,n=dN.get(`image-bitmap:${L}`);if(n!==void 0){if(P.manager.itemStart(L),n.then){n.then(i=>{if(uQ.has(n)===!0)t&&t(uQ.get(n)),P.manager.itemError(L),P.manager.itemEnd(L);else return I&&I(i),P.manager.itemEnd(L),i});return}return setTimeout(function(){I&&I(n),P.manager.itemEnd(L)},0),n}let Q={};Q.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",Q.headers=this.requestHeader,Q.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let r=fetch(L,Q).then(function(i){return i.blob()}).then(function(i){return createImageBitmap(i,Object.assign(P.options,{colorSpaceConversion:"none"}))}).then(function(i){return dN.add(`image-bitmap:${L}`,i),I&&I(i),P.manager.itemEnd(L),i}).catch(function(i){t&&t(i),uQ.set(r,i),dN.remove(`image-bitmap:${L}`),P.manager.itemError(L),P.manager.itemEnd(L)});dN.add(`image-bitmap:${L}`,r),P.manager.itemStart(L)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var tn=class extends MI{constructor(L=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=L}},eP=class{constructor(L=!0){this.autoStart=L,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let L=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let I=performance.now();L=(I-this.oldTime)/1e3,this.oldTime=I,this.elapsedTime+=L}return L}};var mi="\\[\\]\\.:\\/",pJ=new RegExp("["+mi+"]","g"),$i="[^"+mi+"]",vJ="[^"+mi.replace("\\.","")+"]",qJ=/((?:WC+[\/:])*)/.source.replace("WC",$i),yJ=/(WCOD+)?/.source.replace("WCOD",vJ),UJ=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$i),TJ=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$i),XJ=new RegExp("^"+qJ+yJ+UJ+TJ+"$"),AJ=["material","materials","bones","map"],AQ=class{constructor(L,I,N){let t=N||eI.parseTrackName(I);this._targetGroup=L,this._bindings=L.subscribe_(I,t)}getValue(L,I){this.bind();let N=this._targetGroup.nCachedObjects_,t=this._bindings[N];t!==void 0&&t.getValue(L,I)}setValue(L,I){let N=this._bindings;for(let t=this._targetGroup.nCachedObjects_,P=N.length;t!==P;++t)N[t].setValue(L,I)}bind(){let L=this._bindings;for(let I=this._targetGroup.nCachedObjects_,N=L.length;I!==N;++I)L[I].bind()}unbind(){let L=this._bindings;for(let I=this._targetGroup.nCachedObjects_,N=L.length;I!==N;++I)L[I].unbind()}},eI=class e{constructor(L,I,N){this.path=I,this.parsedPath=N||e.parseTrackName(I),this.node=e.findNode(L,this.parsedPath.nodeName),this.rootNode=L,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(L,I,N){return L&&L.isAnimationObjectGroup?new e.Composite(L,I,N):new e(L,I,N)}static sanitizeNodeName(L){return L.replace(/\s/g,"_").replace(pJ,"")}static parseTrackName(L){let I=XJ.exec(L);if(I===null)throw new Error("PropertyBinding: Cannot parse trackName: "+L);let N={nodeName:I[2],objectName:I[3],objectIndex:I[4],propertyName:I[5],propertyIndex:I[6]},t=N.nodeName&&N.nodeName.lastIndexOf(".");if(t!==void 0&&t!==-1){let P=N.nodeName.substring(t+1);AJ.indexOf(P)!==-1&&(N.nodeName=N.nodeName.substring(0,t),N.objectName=P)}if(N.propertyName===null||N.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+L);return N}static findNode(L,I){if(I===void 0||I===""||I==="."||I===-1||I===L.name||I===L.uuid)return L;if(L.skeleton){let N=L.skeleton.getBoneByName(I);if(N!==void 0)return N}if(L.children){let N=function(P){for(let n=0;n<P.length;n++){let Q=P[n];if(Q.name===I||Q.uuid===I)return Q;let r=N(Q.children);if(r)return r}return null},t=N(L.children);if(t)return t}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(L,I){L[I]=this.targetObject[this.propertyName]}_getValue_array(L,I){let N=this.resolvedProperty;for(let t=0,P=N.length;t!==P;++t)L[I++]=N[t]}_getValue_arrayElement(L,I){L[I]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(L,I){this.resolvedProperty.toArray(L,I)}_setValue_direct(L,I){this.targetObject[this.propertyName]=L[I]}_setValue_direct_setNeedsUpdate(L,I){this.targetObject[this.propertyName]=L[I],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(L,I){this.targetObject[this.propertyName]=L[I],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(L,I){let N=this.resolvedProperty;for(let t=0,P=N.length;t!==P;++t)N[t]=L[I++]}_setValue_array_setNeedsUpdate(L,I){let N=this.resolvedProperty;for(let t=0,P=N.length;t!==P;++t)N[t]=L[I++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(L,I){let N=this.resolvedProperty;for(let t=0,P=N.length;t!==P;++t)N[t]=L[I++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(L,I){this.resolvedProperty[this.propertyIndex]=L[I]}_setValue_arrayElement_setNeedsUpdate(L,I){this.resolvedProperty[this.propertyIndex]=L[I],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(L,I){this.resolvedProperty[this.propertyIndex]=L[I],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(L,I){this.resolvedProperty.fromArray(L,I)}_setValue_fromArray_setNeedsUpdate(L,I){this.resolvedProperty.fromArray(L,I),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(L,I){this.resolvedProperty.fromArray(L,I),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(L,I){this.bind(),this.getValue(L,I)}_setValue_unbound(L,I){this.bind(),this.setValue(L,I)}bind(){let L=this.node,I=this.parsedPath,N=I.objectName,t=I.propertyName,P=I.propertyIndex;if(L||(L=e.findNode(this.rootNode,I.nodeName),this.node=L),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!L){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(N){let i=I.objectIndex;switch(N){case"materials":if(!L.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!L.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}L=L.material.materials;break;case"bones":if(!L.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}L=L.skeleton.bones;for(let j=0;j<L.length;j++)if(L[j].name===i){i=j;break}break;case"map":if("map"in L){L=L.map;break}if(!L.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!L.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}L=L.material.map;break;default:if(L[N]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}L=L[N]}if(i!==void 0){if(L[i]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,L);return}L=L[i]}}let n=L[t];if(n===void 0){let i=I.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+i+"."+t+" but it wasn't found.",L);return}let Q=this.Versioning.None;this.targetObject=L,L.isMaterial===!0?Q=this.Versioning.NeedsUpdate:L.isObject3D===!0&&(Q=this.Versioning.MatrixWorldNeedsUpdate);let r=this.BindingType.Direct;if(P!==void 0){if(t==="morphTargetInfluences"){if(!L.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!L.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}L.morphTargetDictionary[P]!==void 0&&(P=L.morphTargetDictionary[P])}r=this.BindingType.ArrayElement,this.resolvedProperty=n,this.propertyIndex=P}else n.fromArray!==void 0&&n.toArray!==void 0?(r=this.BindingType.HasFromToArray,this.resolvedProperty=n):Array.isArray(n)?(r=this.BindingType.EntireArray,this.resolvedProperty=n):this.propertyName=t;this.getValue=this.GetterByBindingType[r],this.setValue=this.SetterByBindingTypeAndVersioning[r][Q]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};eI.Composite=AQ;eI.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};eI.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};eI.prototype.GetterByBindingType=[eI.prototype._getValue_direct,eI.prototype._getValue_array,eI.prototype._getValue_arrayElement,eI.prototype._getValue_toArray];eI.prototype.SetterByBindingTypeAndVersioning=[[eI.prototype._setValue_direct,eI.prototype._setValue_direct_setNeedsUpdate,eI.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[eI.prototype._setValue_array,eI.prototype._setValue_array_setNeedsUpdate,eI.prototype._setValue_array_setMatrixWorldNeedsUpdate],[eI.prototype._setValue_arrayElement,eI.prototype._setValue_arrayElement_setNeedsUpdate,eI.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[eI.prototype._setValue_fromArray,eI.prototype._setValue_fromArray_setNeedsUpdate,eI.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kc=new Float32Array(1);var Cr=new qL,PP=class{constructor(L,I,N=0,t=1/0){this.ray=new YN(L,I),this.near=N,this.far=t,this.camera=null,this.layers=new Wt,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(L,I){this.ray.set(L,I)}setFromCamera(L,I){I.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(I.matrixWorld),this.ray.direction.set(L.x,L.y,.5).unproject(I).sub(this.ray.origin).normalize(),this.camera=I):I.isOrthographicCamera?(this.ray.origin.set(L.x,L.y,(I.near+I.far)/(I.near-I.far)).unproject(I),this.ray.direction.set(0,0,-1).transformDirection(I.matrixWorld),this.camera=I):console.error("THREE.Raycaster: Unsupported camera type: "+I.type)}setFromXRController(L){return Cr.identity().extractRotation(L.matrixWorld),this.ray.origin.setFromMatrixPosition(L.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cr),this}intersectObject(L,I=!0,N=[]){return wQ(L,this,N,I),N.sort(gr),N}intersectObjects(L,I=!0,N=[]){for(let t=0,P=L.length;t<P;t++)wQ(L[t],this,N,I);return N.sort(gr),N}};function gr(e,L){return e.distance-L.distance}function wQ(e,L,I,N){let t=!0;if(e.layers.test(L.layers)&&e.raycast(L,I)===!1&&(t=!1),t===!0&&N===!0){let P=e.children;for(let n=0,Q=P.length;n<Q;n++)wQ(P[n],L,I,!0)}}function ci(e,L,I,N){let t=wJ(N);switch(I){case ti:return e*L;case Gn:return e*L/t.components*t.byteLength;case sn:return e*L/t.components*t.byteLength;case Pi:return e*L*2/t.components*t.byteLength;case On:return e*L*2/t.components*t.byteLength;case ei:return e*L*3/t.components*t.byteLength;case uI:return e*L*4/t.components*t.byteLength;case Hn:return e*L*4/t.components*t.byteLength;case QP:case iP:return Math.floor((e+3)/4)*Math.floor((L+3)/4)*8;case rP:case jP:return Math.floor((e+3)/4)*Math.floor((L+3)/4)*16;case xn:case Zn:return Math.max(e,16)*Math.max(L,8)/4;case on:case fn:return Math.max(e,8)*Math.max(L,8)/2;case ln:case Rn:return Math.floor((e+3)/4)*Math.floor((L+3)/4)*8;case an:return Math.floor((e+3)/4)*Math.floor((L+3)/4)*16;case zn:return Math.floor((e+3)/4)*Math.floor((L+3)/4)*16;case Dn:return Math.floor((e+4)/5)*Math.floor((L+3)/4)*16;case En:return Math.floor((e+4)/5)*Math.floor((L+4)/5)*16;case un:return Math.floor((e+5)/6)*Math.floor((L+4)/5)*16;case hn:return Math.floor((e+5)/6)*Math.floor((L+5)/6)*16;case bn:return Math.floor((e+7)/8)*Math.floor((L+4)/5)*16;case Vn:return Math.floor((e+7)/8)*Math.floor((L+5)/6)*16;case pn:return Math.floor((e+7)/8)*Math.floor((L+7)/8)*16;case vn:return Math.floor((e+9)/10)*Math.floor((L+4)/5)*16;case qn:return Math.floor((e+9)/10)*Math.floor((L+5)/6)*16;case yn:return Math.floor((e+9)/10)*Math.floor((L+7)/8)*16;case Un:return Math.floor((e+9)/10)*Math.floor((L+9)/10)*16;case Tn:return Math.floor((e+11)/12)*Math.floor((L+9)/10)*16;case Xn:return Math.floor((e+11)/12)*Math.floor((L+11)/12)*16;case An:case wn:case _n:return Math.ceil(e/4)*Math.ceil(L/4)*16;case Sn:case kn:return Math.ceil(e/4)*Math.ceil(L/4)*8;case Yn:case Cn:return Math.ceil(e/4)*Math.ceil(L/4)*16}throw new Error(`Unable to determine texture byte length for ${I} format.`)}function wJ(e){switch(e){case mN:case WQ:return{byteLength:1,components:1};case Fe:case Li:case kI:return{byteLength:2,components:1};case Mn:case Kn:return{byteLength:2,components:4};case WN:case dn:case RI:return{byteLength:4,components:1};case Ii:case Ni:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function m9(){let e=null,L=!1,I=null,N=null;function t(P,n){I(P,n),N=e.requestAnimationFrame(t)}return{start:function(){L!==!0&&I!==null&&(N=e.requestAnimationFrame(t),L=!0)},stop:function(){e.cancelAnimationFrame(N),L=!1},setAnimationLoop:function(P){I=P},setContext:function(P){e=P}}}function SJ(e){let L=new WeakMap;function I(Q,r){let i=Q.array,j=Q.usage,J=i.byteLength,F=e.createBuffer();e.bindBuffer(r,F),e.bufferData(r,i,j),Q.onUploadCallback();let $;if(i instanceof Float32Array)$=e.FLOAT;else if(typeof Float16Array<"u"&&i instanceof Float16Array)$=e.HALF_FLOAT;else if(i instanceof Uint16Array)Q.isFloat16BufferAttribute?$=e.HALF_FLOAT:$=e.UNSIGNED_SHORT;else if(i instanceof Int16Array)$=e.SHORT;else if(i instanceof Uint32Array)$=e.UNSIGNED_INT;else if(i instanceof Int32Array)$=e.INT;else if(i instanceof Int8Array)$=e.BYTE;else if(i instanceof Uint8Array)$=e.UNSIGNED_BYTE;else if(i instanceof Uint8ClampedArray)$=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+i);return{buffer:F,type:$,bytesPerElement:i.BYTES_PER_ELEMENT,version:Q.version,size:J}}function N(Q,r,i){let j=r.array,J=r.updateRanges;if(e.bindBuffer(i,Q),J.length===0)e.bufferSubData(i,0,j);else{J.sort(($,d)=>$.start-d.start);let F=0;for(let $=1;$<J.length;$++){let d=J[F],K=J[$];K.start<=d.start+d.count+1?d.count=Math.max(d.count,K.start+K.count-d.start):(++F,J[F]=K)}J.length=F+1;for(let $=0,d=J.length;$<d;$++){let K=J[$];e.bufferSubData(i,K.start*j.BYTES_PER_ELEMENT,j,K.start,K.count)}r.clearUpdateRanges()}r.onUploadCallback()}function t(Q){return Q.isInterleavedBufferAttribute&&(Q=Q.data),L.get(Q)}function P(Q){Q.isInterleavedBufferAttribute&&(Q=Q.data);let r=L.get(Q);r&&(e.deleteBuffer(r.buffer),L.delete(Q))}function n(Q,r){if(Q.isInterleavedBufferAttribute&&(Q=Q.data),Q.isGLBufferAttribute){let j=L.get(Q);(!j||j.version<Q.version)&&L.set(Q,{buffer:Q.buffer,type:Q.type,bytesPerElement:Q.elementSize,version:Q.version});return}let i=L.get(Q);if(i===void 0)L.set(Q,I(Q,r));else if(i.version<Q.version){if(i.size!==Q.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");N(i.buffer,Q,r),i.version=Q.version}}return{get:t,remove:P,update:n}}var kJ=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YJ=`#ifdef USE_ALPHAHASH
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
#endif`,CJ=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gJ=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BJ=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WJ=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LF=`#ifdef USE_AOMAP
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
#endif`,IF=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NF=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tF=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eF=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PF=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nF=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,QF=`#ifdef USE_IRIDESCENCE
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
#endif`,iF=`#ifdef USE_BUMPMAP
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
#endif`,rF=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FF=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mF=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$F=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cF=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dF=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,MF=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,KF=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,GF=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sF=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OF=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HF=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oF=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xF="gl_FragColor = linearToOutputTexel( gl_FragColor );",fF=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ZF=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lF=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,RF=`#ifdef USE_ENVMAP
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
#endif`,aF=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zF=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,DF=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,EF=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uF=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hF=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bF=`#ifdef USE_GRADIENTMAP
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
}`,VF=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pF=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qF=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,yF=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,UF=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XF=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wF=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,_F=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,SF=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kF=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,YF=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CF=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gF=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BF=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WF=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tm=`#if defined( USE_POINTS_UV )
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
#endif`,em=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`#ifdef USE_MORPHTARGETS
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
#endif`,jm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dm=`#ifdef USE_NORMALMAP
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
#endif`,Mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Om=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Dm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Em=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hm=`#ifdef USE_SKINNING
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
#endif`,bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vm=`#ifdef USE_SKINNING
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
#endif`,pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ym=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Um=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,km=`uniform sampler2D t2D;
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
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`#include <common>
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
}`,L$=`#if DEPTH_PACKING == 3200
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
}`,I$=`#define DISTANCE
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
}`,N$=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,t$=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e$=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P$=`uniform float scale;
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
}`,n$=`uniform vec3 diffuse;
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
}`,Q$=`#include <common>
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
}`,i$=`uniform vec3 diffuse;
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
}`,r$=`#define LAMBERT
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
}`,j$=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,J$=`#define MATCAP
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
}`,F$=`#define MATCAP
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
}`,m$=`#define NORMAL
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
}`,$$=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,c$=`#define PHONG
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
}`,d$=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,M$=`#define STANDARD
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
}`,K$=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,G$=`#define TOON
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
}`,s$=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,O$=`uniform float size;
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
}`,H$=`uniform vec3 diffuse;
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
}`,o$=`#include <common>
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
}`,x$=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,f$=`uniform float rotation;
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
}`,Z$=`uniform vec3 diffuse;
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
}`,vL={alphahash_fragment:kJ,alphahash_pars_fragment:YJ,alphamap_fragment:CJ,alphamap_pars_fragment:gJ,alphatest_fragment:BJ,alphatest_pars_fragment:WJ,aomap_fragment:LF,aomap_pars_fragment:IF,batching_pars_vertex:NF,batching_vertex:tF,begin_vertex:eF,beginnormal_vertex:PF,bsdfs:nF,iridescence_fragment:QF,bumpmap_pars_fragment:iF,clipping_planes_fragment:rF,clipping_planes_pars_fragment:jF,clipping_planes_pars_vertex:JF,clipping_planes_vertex:FF,color_fragment:mF,color_pars_fragment:$F,color_pars_vertex:cF,color_vertex:dF,common:MF,cube_uv_reflection_fragment:KF,defaultnormal_vertex:GF,displacementmap_pars_vertex:sF,displacementmap_vertex:OF,emissivemap_fragment:HF,emissivemap_pars_fragment:oF,colorspace_fragment:xF,colorspace_pars_fragment:fF,envmap_fragment:ZF,envmap_common_pars_fragment:lF,envmap_pars_fragment:RF,envmap_pars_vertex:aF,envmap_physical_pars_fragment:yF,envmap_vertex:zF,fog_vertex:DF,fog_pars_vertex:EF,fog_fragment:uF,fog_pars_fragment:hF,gradientmap_pars_fragment:bF,lightmap_pars_fragment:VF,lights_lambert_fragment:pF,lights_lambert_pars_fragment:vF,lights_pars_begin:qF,lights_toon_fragment:UF,lights_toon_pars_fragment:TF,lights_phong_fragment:XF,lights_phong_pars_fragment:AF,lights_physical_fragment:wF,lights_physical_pars_fragment:_F,lights_fragment_begin:SF,lights_fragment_maps:kF,lights_fragment_end:YF,logdepthbuf_fragment:CF,logdepthbuf_pars_fragment:gF,logdepthbuf_pars_vertex:BF,logdepthbuf_vertex:WF,map_fragment:Lm,map_pars_fragment:Im,map_particle_fragment:Nm,map_particle_pars_fragment:tm,metalnessmap_fragment:em,metalnessmap_pars_fragment:Pm,morphinstance_vertex:nm,morphcolor_vertex:Qm,morphnormal_vertex:im,morphtarget_pars_vertex:rm,morphtarget_vertex:jm,normal_fragment_begin:Jm,normal_fragment_maps:Fm,normal_pars_fragment:mm,normal_pars_vertex:$m,normal_vertex:cm,normalmap_pars_fragment:dm,clearcoat_normal_fragment_begin:Mm,clearcoat_normal_fragment_maps:Km,clearcoat_pars_fragment:Gm,iridescence_pars_fragment:sm,opaque_fragment:Om,packing:Hm,premultiplied_alpha_fragment:om,project_vertex:xm,dithering_fragment:fm,dithering_pars_fragment:Zm,roughnessmap_fragment:lm,roughnessmap_pars_fragment:Rm,shadowmap_pars_fragment:am,shadowmap_pars_vertex:zm,shadowmap_vertex:Dm,shadowmask_pars_fragment:Em,skinbase_vertex:um,skinning_pars_vertex:hm,skinning_vertex:bm,skinnormal_vertex:Vm,specularmap_fragment:pm,specularmap_pars_fragment:vm,tonemapping_fragment:qm,tonemapping_pars_fragment:ym,transmission_fragment:Um,transmission_pars_fragment:Tm,uv_pars_fragment:Xm,uv_pars_vertex:Am,uv_vertex:wm,worldpos_vertex:_m,background_vert:Sm,background_frag:km,backgroundCube_vert:Ym,backgroundCube_frag:Cm,cube_vert:gm,cube_frag:Bm,depth_vert:Wm,depth_frag:L$,distanceRGBA_vert:I$,distanceRGBA_frag:N$,equirect_vert:t$,equirect_frag:e$,linedashed_vert:P$,linedashed_frag:n$,meshbasic_vert:Q$,meshbasic_frag:i$,meshlambert_vert:r$,meshlambert_frag:j$,meshmatcap_vert:J$,meshmatcap_frag:F$,meshnormal_vert:m$,meshnormal_frag:$$,meshphong_vert:c$,meshphong_frag:d$,meshphysical_vert:M$,meshphysical_frag:K$,meshtoon_vert:G$,meshtoon_frag:s$,points_vert:O$,points_frag:H$,shadow_vert:o$,shadow_frag:x$,sprite_vert:f$,sprite_frag:Z$},iL={common:{diffuse:{value:new lL(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yL},alphaMap:{value:null},alphaMapTransform:{value:new yL},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yL}},envmap:{envMap:{value:null},envMapRotation:{value:new yL},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yL}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yL}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yL},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yL},normalScale:{value:new AL(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yL},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yL}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yL}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yL}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lL(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lL(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yL},alphaTest:{value:0},uvTransform:{value:new yL}},sprite:{diffuse:{value:new lL(16777215)},opacity:{value:1},center:{value:new AL(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yL},alphaMap:{value:null},alphaMapTransform:{value:new yL},alphaTest:{value:0}}},HN={basic:{uniforms:aI([iL.common,iL.specularmap,iL.envmap,iL.aomap,iL.lightmap,iL.fog]),vertexShader:vL.meshbasic_vert,fragmentShader:vL.meshbasic_frag},lambert:{uniforms:aI([iL.common,iL.specularmap,iL.envmap,iL.aomap,iL.lightmap,iL.emissivemap,iL.bumpmap,iL.normalmap,iL.displacementmap,iL.fog,iL.lights,{emissive:{value:new lL(0)}}]),vertexShader:vL.meshlambert_vert,fragmentShader:vL.meshlambert_frag},phong:{uniforms:aI([iL.common,iL.specularmap,iL.envmap,iL.aomap,iL.lightmap,iL.emissivemap,iL.bumpmap,iL.normalmap,iL.displacementmap,iL.fog,iL.lights,{emissive:{value:new lL(0)},specular:{value:new lL(1118481)},shininess:{value:30}}]),vertexShader:vL.meshphong_vert,fragmentShader:vL.meshphong_frag},standard:{uniforms:aI([iL.common,iL.envmap,iL.aomap,iL.lightmap,iL.emissivemap,iL.bumpmap,iL.normalmap,iL.displacementmap,iL.roughnessmap,iL.metalnessmap,iL.fog,iL.lights,{emissive:{value:new lL(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vL.meshphysical_vert,fragmentShader:vL.meshphysical_frag},toon:{uniforms:aI([iL.common,iL.aomap,iL.lightmap,iL.emissivemap,iL.bumpmap,iL.normalmap,iL.displacementmap,iL.gradientmap,iL.fog,iL.lights,{emissive:{value:new lL(0)}}]),vertexShader:vL.meshtoon_vert,fragmentShader:vL.meshtoon_frag},matcap:{uniforms:aI([iL.common,iL.bumpmap,iL.normalmap,iL.displacementmap,iL.fog,{matcap:{value:null}}]),vertexShader:vL.meshmatcap_vert,fragmentShader:vL.meshmatcap_frag},points:{uniforms:aI([iL.points,iL.fog]),vertexShader:vL.points_vert,fragmentShader:vL.points_frag},dashed:{uniforms:aI([iL.common,iL.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vL.linedashed_vert,fragmentShader:vL.linedashed_frag},depth:{uniforms:aI([iL.common,iL.displacementmap]),vertexShader:vL.depth_vert,fragmentShader:vL.depth_frag},normal:{uniforms:aI([iL.common,iL.bumpmap,iL.normalmap,iL.displacementmap,{opacity:{value:1}}]),vertexShader:vL.meshnormal_vert,fragmentShader:vL.meshnormal_frag},sprite:{uniforms:aI([iL.sprite,iL.fog]),vertexShader:vL.sprite_vert,fragmentShader:vL.sprite_frag},background:{uniforms:{uvTransform:{value:new yL},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vL.background_vert,fragmentShader:vL.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yL}},vertexShader:vL.backgroundCube_vert,fragmentShader:vL.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vL.cube_vert,fragmentShader:vL.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vL.equirect_vert,fragmentShader:vL.equirect_frag},distanceRGBA:{uniforms:aI([iL.common,iL.displacementmap,{referencePosition:{value:new u},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vL.distanceRGBA_vert,fragmentShader:vL.distanceRGBA_frag},shadow:{uniforms:aI([iL.lights,iL.fog,{color:{value:new lL(0)},opacity:{value:1}}]),vertexShader:vL.shadow_vert,fragmentShader:vL.shadow_frag}};HN.physical={uniforms:aI([HN.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yL},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yL},clearcoatNormalScale:{value:new AL(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yL},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yL},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yL},sheen:{value:0},sheenColor:{value:new lL(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yL},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yL},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yL},transmissionSamplerSize:{value:new AL},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yL},attenuationDistance:{value:0},attenuationColor:{value:new lL(0)},specularColor:{value:new lL(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yL},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yL},anisotropyVector:{value:new AL},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yL}}]),vertexShader:vL.meshphysical_vert,fragmentShader:vL.meshphysical_frag};var gn={r:0,b:0,g:0},lt=new jN,l$=new qL;function R$(e,L,I,N,t,P,n){let Q=new lL(0),r=P===!0?0:1,i,j,J=null,F=0,$=null;function d(x){let H=x.isScene===!0?x.background:null;return H&&H.isTexture&&(H=(x.backgroundBlurriness>0?I:L).get(H)),H}function K(x){let H=!1,Z=d(x);Z===null?m(Q,r):Z&&Z.isColor&&(m(Z,1),H=!0);let R=e.xr.getEnvironmentBlendMode();R==="additive"?N.buffers.color.setClear(0,0,0,1,n):R==="alpha-blend"&&N.buffers.color.setClear(0,0,0,0,n),(e.autoClear||H)&&(N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function c(x,H){let Z=d(H);Z&&(Z.isCubeTexture||Z.mapping===nP)?(j===void 0&&(j=new sI(new Le(1,1,1),new JN({name:"BackgroundCubeMaterial",uniforms:Zt(HN.backgroundCube.uniforms),vertexShader:HN.backgroundCube.vertexShader,fragmentShader:HN.backgroundCube.fragmentShader,side:EI,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),j.geometry.deleteAttribute("normal"),j.geometry.deleteAttribute("uv"),j.onBeforeRender=function(R,z,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(j.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),t.update(j)),lt.copy(H.backgroundRotation),lt.x*=-1,lt.y*=-1,lt.z*=-1,Z.isCubeTexture&&Z.isRenderTargetTexture===!1&&(lt.y*=-1,lt.z*=-1),j.material.uniforms.envMap.value=Z,j.material.uniforms.flipEnvMap.value=Z.isCubeTexture&&Z.isRenderTargetTexture===!1?-1:1,j.material.uniforms.backgroundBlurriness.value=H.backgroundBlurriness,j.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,j.material.uniforms.backgroundRotation.value.setFromMatrix4(l$.makeRotationFromEuler(lt)),j.material.toneMapped=SL.getTransfer(Z.colorSpace)!==II,(J!==Z||F!==Z.version||$!==e.toneMapping)&&(j.material.needsUpdate=!0,J=Z,F=Z.version,$=e.toneMapping),j.layers.enableAll(),x.unshift(j,j.geometry,j.material,0,0,null)):Z&&Z.isTexture&&(i===void 0&&(i=new sI(new dt(2,2),new JN({name:"BackgroundMaterial",uniforms:Zt(HN.background.uniforms),vertexShader:HN.background.vertexShader,fragmentShader:HN.background.fragmentShader,side:AI,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),i.geometry.deleteAttribute("normal"),Object.defineProperty(i.material,"map",{get:function(){return this.uniforms.t2D.value}}),t.update(i)),i.material.uniforms.t2D.value=Z,i.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,i.material.toneMapped=SL.getTransfer(Z.colorSpace)!==II,Z.matrixAutoUpdate===!0&&Z.updateMatrix(),i.material.uniforms.uvTransform.value.copy(Z.matrix),(J!==Z||F!==Z.version||$!==e.toneMapping)&&(i.material.needsUpdate=!0,J=Z,F=Z.version,$=e.toneMapping),i.layers.enableAll(),x.unshift(i,i.geometry,i.material,0,0,null))}function m(x,H){x.getRGB(gn,Fi(e)),N.buffers.color.setClear(gn.r,gn.g,gn.b,H,n)}function f(){j!==void 0&&(j.geometry.dispose(),j.material.dispose(),j=void 0),i!==void 0&&(i.geometry.dispose(),i.material.dispose(),i=void 0)}return{getClearColor:function(){return Q},setClearColor:function(x,H=1){Q.set(x),r=H,m(Q,r)},getClearAlpha:function(){return r},setClearAlpha:function(x){r=x,m(Q,r)},render:K,addToRenderList:c,dispose:f}}function a$(e,L){let I=e.getParameter(e.MAX_VERTEX_ATTRIBS),N={},t=F(null),P=t,n=!1;function Q(G,a,v,y,q){let w=!1,U=J(y,v,a);P!==U&&(P=U,i(P.object)),w=$(G,y,v,q),w&&d(G,y,v,q),q!==null&&L.update(q,e.ELEMENT_ARRAY_BUFFER),(w||n)&&(n=!1,H(G,a,v,y),q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,L.get(q).buffer))}function r(){return e.createVertexArray()}function i(G){return e.bindVertexArray(G)}function j(G){return e.deleteVertexArray(G)}function J(G,a,v){let y=v.wireframe===!0,q=N[G.id];q===void 0&&(q={},N[G.id]=q);let w=q[a.id];w===void 0&&(w={},q[a.id]=w);let U=w[y];return U===void 0&&(U=F(r()),w[y]=U),U}function F(G){let a=[],v=[],y=[];for(let q=0;q<I;q++)a[q]=0,v[q]=0,y[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:a,enabledAttributes:v,attributeDivisors:y,object:G,attributes:{},index:null}}function $(G,a,v,y){let q=P.attributes,w=a.attributes,U=0,B=v.getAttributes();for(let _ in B)if(B[_].location>=0){let nL=q[_],dL=w[_];if(dL===void 0&&(_==="instanceMatrix"&&G.instanceMatrix&&(dL=G.instanceMatrix),_==="instanceColor"&&G.instanceColor&&(dL=G.instanceColor)),nL===void 0||nL.attribute!==dL||dL&&nL.data!==dL.data)return!0;U++}return P.attributesNum!==U||P.index!==y}function d(G,a,v,y){let q={},w=a.attributes,U=0,B=v.getAttributes();for(let _ in B)if(B[_].location>=0){let nL=w[_];nL===void 0&&(_==="instanceMatrix"&&G.instanceMatrix&&(nL=G.instanceMatrix),_==="instanceColor"&&G.instanceColor&&(nL=G.instanceColor));let dL={};dL.attribute=nL,nL&&nL.data&&(dL.data=nL.data),q[_]=dL,U++}P.attributes=q,P.attributesNum=U,P.index=y}function K(){let G=P.newAttributes;for(let a=0,v=G.length;a<v;a++)G[a]=0}function c(G){m(G,0)}function m(G,a){let v=P.newAttributes,y=P.enabledAttributes,q=P.attributeDivisors;v[G]=1,y[G]===0&&(e.enableVertexAttribArray(G),y[G]=1),q[G]!==a&&(e.vertexAttribDivisor(G,a),q[G]=a)}function f(){let G=P.newAttributes,a=P.enabledAttributes;for(let v=0,y=a.length;v<y;v++)a[v]!==G[v]&&(e.disableVertexAttribArray(v),a[v]=0)}function x(G,a,v,y,q,w,U){U===!0?e.vertexAttribIPointer(G,a,v,q,w):e.vertexAttribPointer(G,a,v,y,q,w)}function H(G,a,v,y){K();let q=y.attributes,w=v.getAttributes(),U=a.defaultAttributeValues;for(let B in w){let _=w[B];if(_.location>=0){let eL=q[B];if(eL===void 0&&(B==="instanceMatrix"&&G.instanceMatrix&&(eL=G.instanceMatrix),B==="instanceColor"&&G.instanceColor&&(eL=G.instanceColor)),eL!==void 0){let nL=eL.normalized,dL=eL.itemSize,RL=L.get(eL);if(RL===void 0)continue;let TL=RL.buffer,kL=RL.type,YL=RL.bytesPerElement,Y=kL===e.INT||kL===e.UNSIGNED_INT||eL.gpuType===dn;if(eL.isInterleavedBufferAttribute){let g=eL.data,$L=g.stride,aL=eL.offset;if(g.isInstancedInterleavedBuffer){for(let GL=0;GL<_.locationSize;GL++)m(_.location+GL,g.meshPerAttribute);G.isInstancedMesh!==!0&&y._maxInstanceCount===void 0&&(y._maxInstanceCount=g.meshPerAttribute*g.count)}else for(let GL=0;GL<_.locationSize;GL++)c(_.location+GL);e.bindBuffer(e.ARRAY_BUFFER,TL);for(let GL=0;GL<_.locationSize;GL++)x(_.location+GL,dL/_.locationSize,kL,nL,$L*YL,(aL+dL/_.locationSize*GL)*YL,Y)}else{if(eL.isInstancedBufferAttribute){for(let g=0;g<_.locationSize;g++)m(_.location+g,eL.meshPerAttribute);G.isInstancedMesh!==!0&&y._maxInstanceCount===void 0&&(y._maxInstanceCount=eL.meshPerAttribute*eL.count)}else for(let g=0;g<_.locationSize;g++)c(_.location+g);e.bindBuffer(e.ARRAY_BUFFER,TL);for(let g=0;g<_.locationSize;g++)x(_.location+g,dL/_.locationSize,kL,nL,dL*YL,dL/_.locationSize*g*YL,Y)}}else if(U!==void 0){let nL=U[B];if(nL!==void 0)switch(nL.length){case 2:e.vertexAttrib2fv(_.location,nL);break;case 3:e.vertexAttrib3fv(_.location,nL);break;case 4:e.vertexAttrib4fv(_.location,nL);break;default:e.vertexAttrib1fv(_.location,nL)}}}}f()}function Z(){D();for(let G in N){let a=N[G];for(let v in a){let y=a[v];for(let q in y)j(y[q].object),delete y[q];delete a[v]}delete N[G]}}function R(G){if(N[G.id]===void 0)return;let a=N[G.id];for(let v in a){let y=a[v];for(let q in y)j(y[q].object),delete y[q];delete a[v]}delete N[G.id]}function z(G){for(let a in N){let v=N[a];if(v[G.id]===void 0)continue;let y=v[G.id];for(let q in y)j(y[q].object),delete y[q];delete v[G.id]}}function D(){s(),n=!0,P!==t&&(P=t,i(P.object))}function s(){t.geometry=null,t.program=null,t.wireframe=!1}return{setup:Q,reset:D,resetDefaultState:s,dispose:Z,releaseStatesOfGeometry:R,releaseStatesOfProgram:z,initAttributes:K,enableAttribute:c,disableUnusedAttributes:f}}function z$(e,L,I){let N;function t(i){N=i}function P(i,j){e.drawArrays(N,i,j),I.update(j,N,1)}function n(i,j,J){J!==0&&(e.drawArraysInstanced(N,i,j,J),I.update(j,N,J))}function Q(i,j,J){if(J===0)return;L.get("WEBGL_multi_draw").multiDrawArraysWEBGL(N,i,0,j,0,J);let $=0;for(let d=0;d<J;d++)$+=j[d];I.update($,N,1)}function r(i,j,J,F){if(J===0)return;let $=L.get("WEBGL_multi_draw");if($===null)for(let d=0;d<i.length;d++)n(i[d],j[d],F[d]);else{$.multiDrawArraysInstancedWEBGL(N,i,0,j,0,F,0,J);let d=0;for(let K=0;K<J;K++)d+=j[K]*F[K];I.update(d,N,1)}}this.setMode=t,this.render=P,this.renderInstances=n,this.renderMultiDraw=Q,this.renderMultiDrawInstances=r}function D$(e,L,I,N){let t;function P(){if(t!==void 0)return t;if(L.has("EXT_texture_filter_anisotropic")===!0){let z=L.get("EXT_texture_filter_anisotropic");t=e.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else t=0;return t}function n(z){return!(z!==uI&&N.convert(z)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function Q(z){let D=z===kI&&(L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float"));return!(z!==mN&&N.convert(z)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==RI&&!D)}function r(z){if(z==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let i=I.precision!==void 0?I.precision:"highp",j=r(i);j!==i&&(console.warn("THREE.WebGLRenderer:",i,"not supported, using",j,"instead."),i=j);let J=I.logarithmicDepthBuffer===!0,F=I.reversedDepthBuffer===!0&&L.has("EXT_clip_control"),$=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),d=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),K=e.getParameter(e.MAX_TEXTURE_SIZE),c=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),f=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),x=e.getParameter(e.MAX_VARYING_VECTORS),H=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),Z=d>0,R=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:P,getMaxPrecision:r,textureFormatReadable:n,textureTypeReadable:Q,precision:i,logarithmicDepthBuffer:J,reversedDepthBuffer:F,maxTextures:$,maxVertexTextures:d,maxTextureSize:K,maxCubemapSize:c,maxAttributes:m,maxVertexUniforms:f,maxVaryings:x,maxFragmentUniforms:H,vertexTextures:Z,maxSamples:R}}function E$(e){let L=this,I=null,N=0,t=!1,P=!1,n=new cN,Q=new yL,r={value:null,needsUpdate:!1};this.uniform=r,this.numPlanes=0,this.numIntersection=0,this.init=function(J,F){let $=J.length!==0||F||N!==0||t;return t=F,N=J.length,$},this.beginShadows=function(){P=!0,j(null)},this.endShadows=function(){P=!1},this.setGlobalState=function(J,F){I=j(J,F,0)},this.setState=function(J,F,$){let d=J.clippingPlanes,K=J.clipIntersection,c=J.clipShadows,m=e.get(J);if(!t||d===null||d.length===0||P&&!c)P?j(null):i();else{let f=P?0:N,x=f*4,H=m.clippingState||null;r.value=H,H=j(d,F,x,$);for(let Z=0;Z!==x;++Z)H[Z]=I[Z];m.clippingState=H,this.numIntersection=K?this.numPlanes:0,this.numPlanes+=f}};function i(){r.value!==I&&(r.value=I,r.needsUpdate=N>0),L.numPlanes=N,L.numIntersection=0}function j(J,F,$,d){let K=J!==null?J.length:0,c=null;if(K!==0){if(c=r.value,d!==!0||c===null){let m=$+K*4,f=F.matrixWorldInverse;Q.getNormalMatrix(f),(c===null||c.length<m)&&(c=new Float32Array(m));for(let x=0,H=$;x!==K;++x,H+=4)n.copy(J[x]).applyMatrix4(f,Q),n.normal.toArray(c,H),c[H+3]=n.constant}r.value=c,r.needsUpdate=!0}return L.numPlanes=K,L.numIntersection=0,c}}function u$(e){let L=new WeakMap;function I(n,Q){return Q===je?n.mapping=ot:Q===$n&&(n.mapping=xt),n}function N(n){if(n&&n.isTexture){let Q=n.mapping;if(Q===je||Q===$n)if(L.has(n)){let r=L.get(n).texture;return I(r,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new Ne(r.height);return i.fromEquirectangularTexture(e,n),L.set(n,i),n.addEventListener("dispose",t),I(i.texture,n.mapping)}else return null}}return n}function t(n){let Q=n.target;Q.removeEventListener("dispose",t);let r=L.get(Q);r!==void 0&&(L.delete(Q),r.dispose())}function P(){L=new WeakMap}return{get:N,dispose:P}}var Me=4,Aj=[.125,.215,.35,.446,.526,.582],zt=20,di=new Ot,wj=new lL,Mi=null,Ki=0,Gi=0,si=!1,at=(1+Math.sqrt(5))/2,de=1/at,_j=[new u(-at,de,0),new u(at,de,0),new u(-de,0,at),new u(de,0,at),new u(0,at,-de),new u(0,at,de),new u(-1,1,-1),new u(1,1,-1),new u(-1,1,1),new u(1,1,1)],h$=new u,Ge=class{constructor(L){this._renderer=L,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(L,I=0,N=.1,t=100,P={}){let{size:n=256,position:Q=h$}=P;Mi=this._renderer.getRenderTarget(),Ki=this._renderer.getActiveCubeFace(),Gi=this._renderer.getActiveMipmapLevel(),si=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(L,N,t,r,Q),I>0&&this._blur(r,0,0,I),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(L,I=null){return this._fromTexture(L,I)}fromCubemap(L,I=null){return this._fromTexture(L,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yj(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kj(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(L){this._lodMax=Math.floor(Math.log2(L)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let L=0;L<this._lodPlanes.length;L++)this._lodPlanes[L].dispose()}_cleanup(L){this._renderer.setRenderTarget(Mi,Ki,Gi),this._renderer.xr.enabled=si,L.scissorTest=!1,Bn(L,0,0,L.width,L.height)}_fromTexture(L,I){L.mapping===ot||L.mapping===xt?this._setSize(L.image.length===0?16:L.image[0].width||L.image[0].image.width):this._setSize(L.image.width/4),Mi=this._renderer.getRenderTarget(),Ki=this._renderer.getActiveCubeFace(),Gi=this._renderer.getActiveMipmapLevel(),si=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let N=I||this._allocateTargets();return this._textureToCubeUV(L,N),this._applyPMREM(N),this._cleanup(N),N}_allocateTargets(){let L=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,N={magFilter:QI,minFilter:QI,generateMipmaps:!1,type:kI,format:uI,colorSpace:$I,depthBuffer:!1},t=Sj(L,I,N);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==L||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sj(L,I,N);let{_lodMax:P}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=b$(P)),this._blurMaterial=V$(P,L,I)}return t}_compileMaterial(L){let I=new sI(this._lodPlanes[0],L);this._renderer.compile(I,di)}_sceneToCubeUV(L,I,N,t,P){let r=new MI(90,1,I,N),i=[1,-1,1,1,1,1],j=[1,1,1,-1,-1,-1],J=this._renderer,F=J.autoClear,$=J.toneMapping;J.getClearColor(wj),J.toneMapping=qN,J.autoClear=!1,J.state.buffers.depth.getReversed()&&(J.setRenderTarget(t),J.clearDepth(),J.setRenderTarget(null));let K=new _I({name:"PMREM.Background",side:EI,depthWrite:!1,depthTest:!1}),c=new sI(new Le,K),m=!1,f=L.background;f?f.isColor&&(K.color.copy(f),L.background=null,m=!0):(K.color.copy(wj),m=!0);for(let x=0;x<6;x++){let H=x%3;H===0?(r.up.set(0,i[x],0),r.position.set(P.x,P.y,P.z),r.lookAt(P.x+j[x],P.y,P.z)):H===1?(r.up.set(0,0,i[x]),r.position.set(P.x,P.y,P.z),r.lookAt(P.x,P.y+j[x],P.z)):(r.up.set(0,i[x],0),r.position.set(P.x,P.y,P.z),r.lookAt(P.x,P.y,P.z+j[x]));let Z=this._cubeSize;Bn(t,H*Z,x>2?Z:0,Z,Z),J.setRenderTarget(t),m&&J.render(c,r),J.render(L,r)}c.geometry.dispose(),c.material.dispose(),J.toneMapping=$,J.autoClear=F,L.background=f}_textureToCubeUV(L,I){let N=this._renderer,t=L.mapping===ot||L.mapping===xt;t?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yj()),this._cubemapMaterial.uniforms.flipEnvMap.value=L.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kj());let P=t?this._cubemapMaterial:this._equirectMaterial,n=new sI(this._lodPlanes[0],P),Q=P.uniforms;Q.envMap.value=L;let r=this._cubeSize;Bn(I,0,0,3*r,2*r),N.setRenderTarget(I),N.render(n,di)}_applyPMREM(L){let I=this._renderer,N=I.autoClear;I.autoClear=!1;let t=this._lodPlanes.length;for(let P=1;P<t;P++){let n=Math.sqrt(this._sigmas[P]*this._sigmas[P]-this._sigmas[P-1]*this._sigmas[P-1]),Q=_j[(t-P-1)%_j.length];this._blur(L,P-1,P,n,Q)}I.autoClear=N}_blur(L,I,N,t,P){let n=this._pingPongRenderTarget;this._halfBlur(L,n,I,N,t,"latitudinal",P),this._halfBlur(n,L,N,N,t,"longitudinal",P)}_halfBlur(L,I,N,t,P,n,Q){let r=this._renderer,i=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let j=3,J=new sI(this._lodPlanes[t],i),F=i.uniforms,$=this._sizeLods[N]-1,d=isFinite(P)?Math.PI/(2*$):2*Math.PI/(2*zt-1),K=P/d,c=isFinite(P)?1+Math.floor(j*K):zt;c>zt&&console.warn(`sigmaRadians, ${P}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${zt}`);let m=[],f=0;for(let z=0;z<zt;++z){let D=z/K,s=Math.exp(-D*D/2);m.push(s),z===0?f+=s:z<c&&(f+=2*s)}for(let z=0;z<m.length;z++)m[z]=m[z]/f;F.envMap.value=L.texture,F.samples.value=c,F.weights.value=m,F.latitudinal.value=n==="latitudinal",Q&&(F.poleAxis.value=Q);let{_lodMax:x}=this;F.dTheta.value=d,F.mipInt.value=x-N;let H=this._sizeLods[t],Z=3*H*(t>x-Me?t-x+Me:0),R=4*(this._cubeSize-H);Bn(I,Z,R,3*H,2*H),r.setRenderTarget(I),r.render(J,di)}};function b$(e){let L=[],I=[],N=[],t=e,P=e-Me+1+Aj.length;for(let n=0;n<P;n++){let Q=Math.pow(2,t);I.push(Q);let r=1/Q;n>e-Me?r=Aj[n-e+Me-1]:n===0&&(r=0),N.push(r);let i=1/(Q-2),j=-i,J=1+i,F=[j,j,J,j,J,J,j,j,J,J,j,J],$=6,d=6,K=3,c=2,m=1,f=new Float32Array(K*d*$),x=new Float32Array(c*d*$),H=new Float32Array(m*d*$);for(let R=0;R<$;R++){let z=R%3*2/3-1,D=R>2?0:-1,s=[z,D,0,z+2/3,D,0,z+2/3,D+1,0,z,D,0,z+2/3,D+1,0,z,D+1,0];f.set(s,K*d*R),x.set(F,c*d*R);let G=[R,R,R,R,R,R];H.set(G,m*d*R)}let Z=new SI;Z.setAttribute("position",new KI(f,K)),Z.setAttribute("uv",new KI(x,c)),Z.setAttribute("faceIndex",new KI(H,m)),L.push(Z),t>Me&&t--}return{lodPlanes:L,sizeLods:I,sigmas:N}}function Sj(e,L,I){let N=new MN(e,L,I);return N.texture.mapping=nP,N.texture.name="PMREM.cubeUv",N.scissorTest=!0,N}function Bn(e,L,I,N,t){e.viewport.set(L,I,N,t),e.scissor.set(L,I,N,t)}function V$(e,L,I){let N=new Float32Array(zt),t=new u(0,1,0);return new JN({name:"SphericalGaussianBlur",defines:{n:zt,CUBEUV_TEXEL_WIDTH:1/L,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:N},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t}},vertexShader:zi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vN,depthTest:!1,depthWrite:!1})}function kj(){return new JN({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vN,depthTest:!1,depthWrite:!1})}function Yj(){return new JN({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vN,depthTest:!1,depthWrite:!1})}function zi(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function p$(e){let L=new WeakMap,I=null;function N(Q){if(Q&&Q.isTexture){let r=Q.mapping,i=r===je||r===$n,j=r===ot||r===xt;if(i||j){let J=L.get(Q),F=J!==void 0?J.texture.pmremVersion:0;if(Q.isRenderTargetTexture&&Q.pmremVersion!==F)return I===null&&(I=new Ge(e)),J=i?I.fromEquirectangular(Q,J):I.fromCubemap(Q,J),J.texture.pmremVersion=Q.pmremVersion,L.set(Q,J),J.texture;if(J!==void 0)return J.texture;{let $=Q.image;return i&&$&&$.height>0||j&&$&&t($)?(I===null&&(I=new Ge(e)),J=i?I.fromEquirectangular(Q):I.fromCubemap(Q),J.texture.pmremVersion=Q.pmremVersion,L.set(Q,J),Q.addEventListener("dispose",P),J.texture):null}}}return Q}function t(Q){let r=0,i=6;for(let j=0;j<i;j++)Q[j]!==void 0&&r++;return r===i}function P(Q){let r=Q.target;r.removeEventListener("dispose",P);let i=L.get(r);i!==void 0&&(L.delete(r),i.dispose())}function n(){L=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:N,dispose:n}}function v$(e){let L={};function I(N){if(L[N]!==void 0)return L[N];let t;switch(N){case"WEBGL_depth_texture":t=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":t=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":t=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":t=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:t=e.getExtension(N)}return L[N]=t,t}return{has:function(N){return I(N)!==null},init:function(){I("EXT_color_buffer_float"),I("WEBGL_clip_cull_distance"),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture"),I("WEBGL_render_shared_exponent")},get:function(N){let t=I(N);return t===null&&gt("THREE.WebGLRenderer: "+N+" extension not supported."),t}}}function q$(e,L,I,N){let t={},P=new WeakMap;function n(J){let F=J.target;F.index!==null&&L.remove(F.index);for(let d in F.attributes)L.remove(F.attributes[d]);F.removeEventListener("dispose",n),delete t[F.id];let $=P.get(F);$&&(L.remove($),P.delete(F)),N.releaseStatesOfGeometry(F),F.isInstancedBufferGeometry===!0&&delete F._maxInstanceCount,I.memory.geometries--}function Q(J,F){return t[F.id]===!0||(F.addEventListener("dispose",n),t[F.id]=!0,I.memory.geometries++),F}function r(J){let F=J.attributes;for(let $ in F)L.update(F[$],e.ARRAY_BUFFER)}function i(J){let F=[],$=J.index,d=J.attributes.position,K=0;if($!==null){let f=$.array;K=$.version;for(let x=0,H=f.length;x<H;x+=3){let Z=f[x+0],R=f[x+1],z=f[x+2];F.push(Z,R,R,z,z,Z)}}else if(d!==void 0){let f=d.array;K=d.version;for(let x=0,H=f.length/3-1;x<H;x+=3){let Z=x+0,R=x+1,z=x+2;F.push(Z,R,R,z,z,Z)}}else return;let c=new(Ji(F)?pe:Ve)(F,1);c.version=K;let m=P.get(J);m&&L.remove(m),P.set(J,c)}function j(J){let F=P.get(J);if(F){let $=J.index;$!==null&&F.version<$.version&&i(J)}else i(J);return P.get(J)}return{get:Q,update:r,getWireframeAttribute:j}}function y$(e,L,I){let N;function t(F){N=F}let P,n;function Q(F){P=F.type,n=F.bytesPerElement}function r(F,$){e.drawElements(N,$,P,F*n),I.update($,N,1)}function i(F,$,d){d!==0&&(e.drawElementsInstanced(N,$,P,F*n,d),I.update($,N,d))}function j(F,$,d){if(d===0)return;L.get("WEBGL_multi_draw").multiDrawElementsWEBGL(N,$,0,P,F,0,d);let c=0;for(let m=0;m<d;m++)c+=$[m];I.update(c,N,1)}function J(F,$,d,K){if(d===0)return;let c=L.get("WEBGL_multi_draw");if(c===null)for(let m=0;m<F.length;m++)i(F[m]/n,$[m],K[m]);else{c.multiDrawElementsInstancedWEBGL(N,$,0,P,F,0,K,0,d);let m=0;for(let f=0;f<d;f++)m+=$[f]*K[f];I.update(m,N,1)}}this.setMode=t,this.setIndex=Q,this.render=r,this.renderInstances=i,this.renderMultiDraw=j,this.renderMultiDrawInstances=J}function U$(e){let L={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function N(P,n,Q){switch(I.calls++,n){case e.TRIANGLES:I.triangles+=Q*(P/3);break;case e.LINES:I.lines+=Q*(P/2);break;case e.LINE_STRIP:I.lines+=Q*(P-1);break;case e.LINE_LOOP:I.lines+=Q*P;break;case e.POINTS:I.points+=Q*P;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n);break}}function t(){I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:L,render:I,programs:null,autoReset:!0,reset:t,update:N}}function T$(e,L,I){let N=new WeakMap,t=new gL;function P(n,Q,r){let i=n.morphTargetInfluences,j=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,J=j!==void 0?j.length:0,F=N.get(Q);if(F===void 0||F.count!==J){let s=function(){z.dispose(),N.delete(Q),Q.removeEventListener("dispose",s)};F!==void 0&&F.texture.dispose();let $=Q.morphAttributes.position!==void 0,d=Q.morphAttributes.normal!==void 0,K=Q.morphAttributes.color!==void 0,c=Q.morphAttributes.position||[],m=Q.morphAttributes.normal||[],f=Q.morphAttributes.color||[],x=0;$===!0&&(x=1),d===!0&&(x=2),K===!0&&(x=3);let H=Q.attributes.position.count*x,Z=1;H>L.maxTextureSize&&(Z=Math.ceil(H/L.maxTextureSize),H=L.maxTextureSize);let R=new Float32Array(H*Z*4*J),z=new be(R,H,Z,J);z.type=RI,z.needsUpdate=!0;let D=x*4;for(let G=0;G<J;G++){let a=c[G],v=m[G],y=f[G],q=H*Z*4*G;for(let w=0;w<a.count;w++){let U=w*D;$===!0&&(t.fromBufferAttribute(a,w),R[q+U+0]=t.x,R[q+U+1]=t.y,R[q+U+2]=t.z,R[q+U+3]=0),d===!0&&(t.fromBufferAttribute(v,w),R[q+U+4]=t.x,R[q+U+5]=t.y,R[q+U+6]=t.z,R[q+U+7]=0),K===!0&&(t.fromBufferAttribute(y,w),R[q+U+8]=t.x,R[q+U+9]=t.y,R[q+U+10]=t.z,R[q+U+11]=y.itemSize===4?t.w:1)}}F={count:J,texture:z,size:new AL(H,Z)},N.set(Q,F),Q.addEventListener("dispose",s)}if(n.isInstancedMesh===!0&&n.morphTexture!==null)r.getUniforms().setValue(e,"morphTexture",n.morphTexture,I);else{let $=0;for(let K=0;K<i.length;K++)$+=i[K];let d=Q.morphTargetsRelative?1:1-$;r.getUniforms().setValue(e,"morphTargetBaseInfluence",d),r.getUniforms().setValue(e,"morphTargetInfluences",i)}r.getUniforms().setValue(e,"morphTargetsTexture",F.texture,I),r.getUniforms().setValue(e,"morphTargetsTextureSize",F.size)}return{update:P}}function X$(e,L,I,N){let t=new WeakMap;function P(r){let i=N.render.frame,j=r.geometry,J=L.get(r,j);if(t.get(J)!==i&&(L.update(J),t.set(J,i)),r.isInstancedMesh&&(r.hasEventListener("dispose",Q)===!1&&r.addEventListener("dispose",Q),t.get(r)!==i&&(I.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&I.update(r.instanceColor,e.ARRAY_BUFFER),t.set(r,i))),r.isSkinnedMesh){let F=r.skeleton;t.get(F)!==i&&(F.update(),t.set(F,i))}return J}function n(){t=new WeakMap}function Q(r){let i=r.target;i.removeEventListener("dispose",Q),I.remove(i.instanceMatrix),i.instanceColor!==null&&I.remove(i.instanceColor)}return{update:P,dispose:n}}var $9=new GI,Cj=new ke(1,1),c9=new be,d9=new _P,M9=new qe,gj=[],Bj=[],Wj=new Float32Array(16),L9=new Float32Array(9),I9=new Float32Array(4);function se(e,L,I){let N=e[0];if(N<=0||N>0)return e;let t=L*I,P=gj[t];if(P===void 0&&(P=new Float32Array(t),gj[t]=P),L!==0){N.toArray(P,0);for(let n=1,Q=0;n!==L;++n)Q+=I,e[n].toArray(P,Q)}return P}function OI(e,L){if(e.length!==L.length)return!1;for(let I=0,N=e.length;I<N;I++)if(e[I]!==L[I])return!1;return!0}function HI(e,L){for(let I=0,N=L.length;I<N;I++)e[I]=L[I]}function IQ(e,L){let I=Bj[L];I===void 0&&(I=new Int32Array(L),Bj[L]=I);for(let N=0;N!==L;++N)I[N]=e.allocateTextureUnit();return I}function A$(e,L){let I=this.cache;I[0]!==L&&(e.uniform1f(this.addr,L),I[0]=L)}function w$(e,L){let I=this.cache;if(L.x!==void 0)(I[0]!==L.x||I[1]!==L.y)&&(e.uniform2f(this.addr,L.x,L.y),I[0]=L.x,I[1]=L.y);else{if(OI(I,L))return;e.uniform2fv(this.addr,L),HI(I,L)}}function _$(e,L){let I=this.cache;if(L.x!==void 0)(I[0]!==L.x||I[1]!==L.y||I[2]!==L.z)&&(e.uniform3f(this.addr,L.x,L.y,L.z),I[0]=L.x,I[1]=L.y,I[2]=L.z);else if(L.r!==void 0)(I[0]!==L.r||I[1]!==L.g||I[2]!==L.b)&&(e.uniform3f(this.addr,L.r,L.g,L.b),I[0]=L.r,I[1]=L.g,I[2]=L.b);else{if(OI(I,L))return;e.uniform3fv(this.addr,L),HI(I,L)}}function S$(e,L){let I=this.cache;if(L.x!==void 0)(I[0]!==L.x||I[1]!==L.y||I[2]!==L.z||I[3]!==L.w)&&(e.uniform4f(this.addr,L.x,L.y,L.z,L.w),I[0]=L.x,I[1]=L.y,I[2]=L.z,I[3]=L.w);else{if(OI(I,L))return;e.uniform4fv(this.addr,L),HI(I,L)}}function k$(e,L){let I=this.cache,N=L.elements;if(N===void 0){if(OI(I,L))return;e.uniformMatrix2fv(this.addr,!1,L),HI(I,L)}else{if(OI(I,N))return;I9.set(N),e.uniformMatrix2fv(this.addr,!1,I9),HI(I,N)}}function Y$(e,L){let I=this.cache,N=L.elements;if(N===void 0){if(OI(I,L))return;e.uniformMatrix3fv(this.addr,!1,L),HI(I,L)}else{if(OI(I,N))return;L9.set(N),e.uniformMatrix3fv(this.addr,!1,L9),HI(I,N)}}function C$(e,L){let I=this.cache,N=L.elements;if(N===void 0){if(OI(I,L))return;e.uniformMatrix4fv(this.addr,!1,L),HI(I,L)}else{if(OI(I,N))return;Wj.set(N),e.uniformMatrix4fv(this.addr,!1,Wj),HI(I,N)}}function g$(e,L){let I=this.cache;I[0]!==L&&(e.uniform1i(this.addr,L),I[0]=L)}function B$(e,L){let I=this.cache;if(L.x!==void 0)(I[0]!==L.x||I[1]!==L.y)&&(e.uniform2i(this.addr,L.x,L.y),I[0]=L.x,I[1]=L.y);else{if(OI(I,L))return;e.uniform2iv(this.addr,L),HI(I,L)}}function W$(e,L){let I=this.cache;if(L.x!==void 0)(I[0]!==L.x||I[1]!==L.y||I[2]!==L.z)&&(e.uniform3i(this.addr,L.x,L.y,L.z),I[0]=L.x,I[1]=L.y,I[2]=L.z);else{if(OI(I,L))return;e.uniform3iv(this.addr,L),HI(I,L)}}function L8(e,L){let I=this.cache;if(L.x!==void 0)(I[0]!==L.x||I[1]!==L.y||I[2]!==L.z||I[3]!==L.w)&&(e.uniform4i(this.addr,L.x,L.y,L.z,L.w),I[0]=L.x,I[1]=L.y,I[2]=L.z,I[3]=L.w);else{if(OI(I,L))return;e.uniform4iv(this.addr,L),HI(I,L)}}function I8(e,L){let I=this.cache;I[0]!==L&&(e.uniform1ui(this.addr,L),I[0]=L)}function N8(e,L){let I=this.cache;if(L.x!==void 0)(I[0]!==L.x||I[1]!==L.y)&&(e.uniform2ui(this.addr,L.x,L.y),I[0]=L.x,I[1]=L.y);else{if(OI(I,L))return;e.uniform2uiv(this.addr,L),HI(I,L)}}function t8(e,L){let I=this.cache;if(L.x!==void 0)(I[0]!==L.x||I[1]!==L.y||I[2]!==L.z)&&(e.uniform3ui(this.addr,L.x,L.y,L.z),I[0]=L.x,I[1]=L.y,I[2]=L.z);else{if(OI(I,L))return;e.uniform3uiv(this.addr,L),HI(I,L)}}function e8(e,L){let I=this.cache;if(L.x!==void 0)(I[0]!==L.x||I[1]!==L.y||I[2]!==L.z||I[3]!==L.w)&&(e.uniform4ui(this.addr,L.x,L.y,L.z,L.w),I[0]=L.x,I[1]=L.y,I[2]=L.z,I[3]=L.w);else{if(OI(I,L))return;e.uniform4uiv(this.addr,L),HI(I,L)}}function P8(e,L,I){let N=this.cache,t=I.allocateTextureUnit();N[0]!==t&&(e.uniform1i(this.addr,t),N[0]=t);let P;this.type===e.SAMPLER_2D_SHADOW?(Cj.compareFunction=ii,P=Cj):P=$9,I.setTexture2D(L||P,t)}function n8(e,L,I){let N=this.cache,t=I.allocateTextureUnit();N[0]!==t&&(e.uniform1i(this.addr,t),N[0]=t),I.setTexture3D(L||d9,t)}function Q8(e,L,I){let N=this.cache,t=I.allocateTextureUnit();N[0]!==t&&(e.uniform1i(this.addr,t),N[0]=t),I.setTextureCube(L||M9,t)}function i8(e,L,I){let N=this.cache,t=I.allocateTextureUnit();N[0]!==t&&(e.uniform1i(this.addr,t),N[0]=t),I.setTexture2DArray(L||c9,t)}function r8(e){switch(e){case 5126:return A$;case 35664:return w$;case 35665:return _$;case 35666:return S$;case 35674:return k$;case 35675:return Y$;case 35676:return C$;case 5124:case 35670:return g$;case 35667:case 35671:return B$;case 35668:case 35672:return W$;case 35669:case 35673:return L8;case 5125:return I8;case 36294:return N8;case 36295:return t8;case 36296:return e8;case 35678:case 36198:case 36298:case 36306:case 35682:return P8;case 35679:case 36299:case 36307:return n8;case 35680:case 36300:case 36308:case 36293:return Q8;case 36289:case 36303:case 36311:case 36292:return i8}}function j8(e,L){e.uniform1fv(this.addr,L)}function J8(e,L){let I=se(L,this.size,2);e.uniform2fv(this.addr,I)}function F8(e,L){let I=se(L,this.size,3);e.uniform3fv(this.addr,I)}function m8(e,L){let I=se(L,this.size,4);e.uniform4fv(this.addr,I)}function $8(e,L){let I=se(L,this.size,4);e.uniformMatrix2fv(this.addr,!1,I)}function c8(e,L){let I=se(L,this.size,9);e.uniformMatrix3fv(this.addr,!1,I)}function d8(e,L){let I=se(L,this.size,16);e.uniformMatrix4fv(this.addr,!1,I)}function M8(e,L){e.uniform1iv(this.addr,L)}function K8(e,L){e.uniform2iv(this.addr,L)}function G8(e,L){e.uniform3iv(this.addr,L)}function s8(e,L){e.uniform4iv(this.addr,L)}function O8(e,L){e.uniform1uiv(this.addr,L)}function H8(e,L){e.uniform2uiv(this.addr,L)}function o8(e,L){e.uniform3uiv(this.addr,L)}function x8(e,L){e.uniform4uiv(this.addr,L)}function f8(e,L,I){let N=this.cache,t=L.length,P=IQ(I,t);OI(N,P)||(e.uniform1iv(this.addr,P),HI(N,P));for(let n=0;n!==t;++n)I.setTexture2D(L[n]||$9,P[n])}function Z8(e,L,I){let N=this.cache,t=L.length,P=IQ(I,t);OI(N,P)||(e.uniform1iv(this.addr,P),HI(N,P));for(let n=0;n!==t;++n)I.setTexture3D(L[n]||d9,P[n])}function l8(e,L,I){let N=this.cache,t=L.length,P=IQ(I,t);OI(N,P)||(e.uniform1iv(this.addr,P),HI(N,P));for(let n=0;n!==t;++n)I.setTextureCube(L[n]||M9,P[n])}function R8(e,L,I){let N=this.cache,t=L.length,P=IQ(I,t);OI(N,P)||(e.uniform1iv(this.addr,P),HI(N,P));for(let n=0;n!==t;++n)I.setTexture2DArray(L[n]||c9,P[n])}function a8(e){switch(e){case 5126:return j8;case 35664:return J8;case 35665:return F8;case 35666:return m8;case 35674:return $8;case 35675:return c8;case 35676:return d8;case 5124:case 35670:return M8;case 35667:case 35671:return K8;case 35668:case 35672:return G8;case 35669:case 35673:return s8;case 5125:return O8;case 36294:return H8;case 36295:return o8;case 36296:return x8;case 35678:case 36198:case 36298:case 36306:case 35682:return f8;case 35679:case 36299:case 36307:return Z8;case 35680:case 36300:case 36308:case 36293:return l8;case 36289:case 36303:case 36311:case 36292:return R8}}var Hi=class{constructor(L,I,N){this.id=L,this.addr=N,this.cache=[],this.type=I.type,this.setValue=r8(I.type)}},oi=class{constructor(L,I,N){this.id=L,this.addr=N,this.cache=[],this.type=I.type,this.size=I.size,this.setValue=a8(I.type)}},xi=class{constructor(L){this.id=L,this.seq=[],this.map={}}setValue(L,I,N){let t=this.seq;for(let P=0,n=t.length;P!==n;++P){let Q=t[P];Q.setValue(L,I[Q.id],N)}}},Oi=/(\w+)(\])?(\[|\.)?/g;function N9(e,L){e.seq.push(L),e.map[L.id]=L}function z8(e,L,I){let N=e.name,t=N.length;for(Oi.lastIndex=0;;){let P=Oi.exec(N),n=Oi.lastIndex,Q=P[1],r=P[2]==="]",i=P[3];if(r&&(Q=Q|0),i===void 0||i==="["&&n+2===t){N9(I,i===void 0?new Hi(Q,e,L):new oi(Q,e,L));break}else{let J=I.map[Q];J===void 0&&(J=new xi(Q),N9(I,J)),I=J}}}var Ke=class{constructor(L,I){this.seq=[],this.map={};let N=L.getProgramParameter(I,L.ACTIVE_UNIFORMS);for(let t=0;t<N;++t){let P=L.getActiveUniform(I,t),n=L.getUniformLocation(I,P.name);z8(P,n,this)}}setValue(L,I,N,t){let P=this.map[I];P!==void 0&&P.setValue(L,N,t)}setOptional(L,I,N){let t=I[N];t!==void 0&&this.setValue(L,N,t)}static upload(L,I,N,t){for(let P=0,n=I.length;P!==n;++P){let Q=I[P],r=N[Q.id];r.needsUpdate!==!1&&Q.setValue(L,r.value,t)}}static seqWithValue(L,I){let N=[];for(let t=0,P=L.length;t!==P;++t){let n=L[t];n.id in I&&N.push(n)}return N}};function t9(e,L,I){let N=e.createShader(L);return e.shaderSource(N,I),e.compileShader(N),N}var D8=37297,E8=0;function u8(e,L){let I=e.split(`
`),N=[],t=Math.max(L-6,0),P=Math.min(L+6,I.length);for(let n=t;n<P;n++){let Q=n+1;N.push(`${Q===L?">":" "} ${Q}: ${I[n]}`)}return N.join(`
`)}var e9=new yL;function h8(e){SL._getMatrix(e9,SL.workingColorSpace,e);let L=`mat3( ${e9.elements.map(I=>I.toFixed(4))} )`;switch(SL.getTransfer(e)){case ue:return[L,"LinearTransferOETF"];case II:return[L,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[L,"LinearTransferOETF"]}}function P9(e,L,I){let N=e.getShaderParameter(L,e.COMPILE_STATUS),P=(e.getShaderInfoLog(L)||"").trim();if(N&&P==="")return"";let n=/ERROR: 0:(\d+)/.exec(P);if(n){let Q=parseInt(n[1]);return I.toUpperCase()+`

`+P+`

`+u8(e.getShaderSource(L),Q)}else return P}function b8(e,L){let I=h8(L);return[`vec4 ${e}( vec4 value ) {`,`	return ${I[1]}( vec4( value.rgb * ${I[0]}, value.a ) );`,"}"].join(`
`)}function V8(e,L){let I;switch(L){case sj:I="Linear";break;case Oj:I="Reinhard";break;case Hj:I="Cineon";break;case oj:I="ACESFilmic";break;case mn:I="AgX";break;case fj:I="Neutral";break;case xj:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",L),I="Linear"}return"vec3 "+e+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}var Wn=new u;function p8(){SL.getLuminanceCoefficients(Wn);let e=Wn.x.toFixed(4),L=Wn.y.toFixed(4),I=Wn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${L}, ${I} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v8(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(FP).join(`
`)}function q8(e){let L=[];for(let I in e){let N=e[I];N!==!1&&L.push("#define "+I+" "+N)}return L.join(`
`)}function y8(e,L){let I={},N=e.getProgramParameter(L,e.ACTIVE_ATTRIBUTES);for(let t=0;t<N;t++){let P=e.getActiveAttrib(L,t),n=P.name,Q=1;P.type===e.FLOAT_MAT2&&(Q=2),P.type===e.FLOAT_MAT3&&(Q=3),P.type===e.FLOAT_MAT4&&(Q=4),I[n]={type:P.type,location:e.getAttribLocation(L,n),locationSize:Q}}return I}function FP(e){return e!==""}function n9(e,L){let I=L.numSpotLightShadows+L.numSpotLightMaps-L.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,L.numDirLights).replace(/NUM_SPOT_LIGHTS/g,L.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,L.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,L.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,L.numPointLights).replace(/NUM_HEMI_LIGHTS/g,L.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,L.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,L.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,L.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,L.numPointLightShadows)}function Q9(e,L){return e.replace(/NUM_CLIPPING_PLANES/g,L.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,L.numClippingPlanes-L.numClipIntersection)}var U8=/^[ \t]*#include +<([\w\d./]+)>/gm;function fi(e){return e.replace(U8,X8)}var T8=new Map;function X8(e,L){let I=vL[L];if(I===void 0){let N=T8.get(L);if(N!==void 0)I=vL[N],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',L,N);else throw new Error("Can not resolve #include <"+L+">")}return fi(I)}var A8=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function i9(e){return e.replace(A8,w8)}function w8(e,L,I,N){let t="";for(let P=parseInt(L);P<parseInt(I);P++)t+=N.replace(/\[\s*i\s*\]/g,"[ "+P+" ]").replace(/UNROLLED_LOOP_INDEX/g,P);return t}function r9(e){let L=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?L+=`
#define HIGH_PRECISION`:e.precision==="mediump"?L+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(L+=`
#define LOW_PRECISION`),L}function _8(e){let L="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===SQ?L="SHADOWMAP_TYPE_PCF":e.shadowMapType===en?L="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===ON&&(L="SHADOWMAP_TYPE_VSM"),L}function S8(e){let L="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case ot:case xt:L="ENVMAP_TYPE_CUBE";break;case nP:L="ENVMAP_TYPE_CUBE_UV";break}return L}function k8(e){let L="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case xt:L="ENVMAP_MODE_REFRACTION";break}return L}function Y8(e){let L="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case gQ:L="ENVMAP_BLENDING_MULTIPLY";break;case Kj:L="ENVMAP_BLENDING_MIX";break;case Gj:L="ENVMAP_BLENDING_ADD";break}return L}function C8(e){let L=e.envMapCubeUVHeight;if(L===null)return null;let I=Math.log2(L)-2,N=1/L;return{texelWidth:1/(3*Math.max(Math.pow(2,I),112)),texelHeight:N,maxMip:I}}function g8(e,L,I,N){let t=e.getContext(),P=I.defines,n=I.vertexShader,Q=I.fragmentShader,r=_8(I),i=S8(I),j=k8(I),J=Y8(I),F=C8(I),$=v8(I),d=q8(P),K=t.createProgram(),c,m,f=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(c=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,d].filter(FP).join(`
`),c.length>0&&(c+=`
`),m=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,d].filter(FP).join(`
`),m.length>0&&(m+=`
`)):(c=[r9(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,d,I.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",I.batching?"#define USE_BATCHING":"",I.batchingColor?"#define USE_BATCHING_COLOR":"",I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.instancingMorph?"#define USE_INSTANCING_MORPH":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+j:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.displacementMap?"#define USE_DISPLACEMENTMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.mapUv?"#define MAP_UV "+I.mapUv:"",I.alphaMapUv?"#define ALPHAMAP_UV "+I.alphaMapUv:"",I.lightMapUv?"#define LIGHTMAP_UV "+I.lightMapUv:"",I.aoMapUv?"#define AOMAP_UV "+I.aoMapUv:"",I.emissiveMapUv?"#define EMISSIVEMAP_UV "+I.emissiveMapUv:"",I.bumpMapUv?"#define BUMPMAP_UV "+I.bumpMapUv:"",I.normalMapUv?"#define NORMALMAP_UV "+I.normalMapUv:"",I.displacementMapUv?"#define DISPLACEMENTMAP_UV "+I.displacementMapUv:"",I.metalnessMapUv?"#define METALNESSMAP_UV "+I.metalnessMapUv:"",I.roughnessMapUv?"#define ROUGHNESSMAP_UV "+I.roughnessMapUv:"",I.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+I.anisotropyMapUv:"",I.clearcoatMapUv?"#define CLEARCOATMAP_UV "+I.clearcoatMapUv:"",I.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+I.clearcoatNormalMapUv:"",I.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+I.clearcoatRoughnessMapUv:"",I.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+I.iridescenceMapUv:"",I.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+I.iridescenceThicknessMapUv:"",I.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+I.sheenColorMapUv:"",I.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+I.sheenRoughnessMapUv:"",I.specularMapUv?"#define SPECULARMAP_UV "+I.specularMapUv:"",I.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+I.specularColorMapUv:"",I.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+I.specularIntensityMapUv:"",I.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+I.transmissionMapUv:"",I.thicknessMapUv?"#define THICKNESSMAP_UV "+I.thicknessMapUv:"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+r:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",I.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(FP).join(`
`),m=[r9(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,d,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+i:"",I.envMap?"#define "+j:"",I.envMap?"#define "+J:"",F?"#define CUBEUV_TEXEL_WIDTH "+F.texelWidth:"",F?"#define CUBEUV_TEXEL_HEIGHT "+F.texelHeight:"",F?"#define CUBEUV_MAX_MIP "+F.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.dispersion?"#define USE_DISPERSION":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor||I.batchingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+r:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",I.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",I.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==qN?"#define TONE_MAPPING":"",I.toneMapping!==qN?vL.tonemapping_pars_fragment:"",I.toneMapping!==qN?V8("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",vL.colorspace_pars_fragment,b8("linearToOutputTexel",I.outputColorSpace),p8(),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(FP).join(`
`)),n=fi(n),n=n9(n,I),n=Q9(n,I),Q=fi(Q),Q=n9(Q,I),Q=Q9(Q,I),n=i9(n),Q=i9(Q),I.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,c=[$,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,m=["#define varying in",I.glslVersion===ri?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===ri?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=f+c+n,H=f+m+Q,Z=t9(t,t.VERTEX_SHADER,x),R=t9(t,t.FRAGMENT_SHADER,H);t.attachShader(K,Z),t.attachShader(K,R),I.index0AttributeName!==void 0?t.bindAttribLocation(K,0,I.index0AttributeName):I.morphTargets===!0&&t.bindAttribLocation(K,0,"position"),t.linkProgram(K);function z(a){if(e.debug.checkShaderErrors){let v=t.getProgramInfoLog(K)||"",y=t.getShaderInfoLog(Z)||"",q=t.getShaderInfoLog(R)||"",w=v.trim(),U=y.trim(),B=q.trim(),_=!0,eL=!0;if(t.getProgramParameter(K,t.LINK_STATUS)===!1)if(_=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(t,K,Z,R);else{let nL=P9(t,Z,"vertex"),dL=P9(t,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+t.getError()+" - VALIDATE_STATUS "+t.getProgramParameter(K,t.VALIDATE_STATUS)+`

Material Name: `+a.name+`
Material Type: `+a.type+`

Program Info Log: `+w+`
`+nL+`
`+dL)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(U===""||B==="")&&(eL=!1);eL&&(a.diagnostics={runnable:_,programLog:w,vertexShader:{log:U,prefix:c},fragmentShader:{log:B,prefix:m}})}t.deleteShader(Z),t.deleteShader(R),D=new Ke(t,K),s=y8(t,K)}let D;this.getUniforms=function(){return D===void 0&&z(this),D};let s;this.getAttributes=function(){return s===void 0&&z(this),s};let G=I.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=t.getProgramParameter(K,D8)),G},this.destroy=function(){N.releaseStatesOfProgram(this),t.deleteProgram(K),this.program=void 0},this.type=I.shaderType,this.name=I.shaderName,this.id=E8++,this.cacheKey=L,this.usedTimes=1,this.program=K,this.vertexShader=Z,this.fragmentShader=R,this}var B8=0,Zi=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(L){let I=L.vertexShader,N=L.fragmentShader,t=this._getShaderStage(I),P=this._getShaderStage(N),n=this._getShaderCacheForMaterial(L);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(P)===!1&&(n.add(P),P.usedTimes++),this}remove(L){let I=this.materialCache.get(L);for(let N of I)N.usedTimes--,N.usedTimes===0&&this.shaderCache.delete(N.code);return this.materialCache.delete(L),this}getVertexShaderID(L){return this._getShaderStage(L.vertexShader).id}getFragmentShaderID(L){return this._getShaderStage(L.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(L){let I=this.materialCache,N=I.get(L);return N===void 0&&(N=new Set,I.set(L,N)),N}_getShaderStage(L){let I=this.shaderCache,N=I.get(L);return N===void 0&&(N=new li(L),I.set(L,N)),N}},li=class{constructor(L){this.id=B8++,this.code=L,this.usedTimes=0}};function W8(e,L,I,N,t,P,n){let Q=new Wt,r=new Zi,i=new Set,j=[],J=t.logarithmicDepthBuffer,F=t.vertexTextures,$=t.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function K(s){return i.add(s),s===0?"uv":`uv${s}`}function c(s,G,a,v,y){let q=v.fog,w=y.geometry,U=s.isMeshStandardMaterial?v.environment:null,B=(s.isMeshStandardMaterial?I:L).get(s.envMap||U),_=B&&B.mapping===nP?B.image.height:null,eL=d[s.type];s.precision!==null&&($=t.getMaxPrecision(s.precision),$!==s.precision&&console.warn("THREE.WebGLProgram.getParameters:",s.precision,"not supported, using",$,"instead."));let nL=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,dL=nL!==void 0?nL.length:0,RL=0;w.morphAttributes.position!==void 0&&(RL=1),w.morphAttributes.normal!==void 0&&(RL=2),w.morphAttributes.color!==void 0&&(RL=3);let TL,kL,YL,Y;if(eL){let BL=HN[eL];TL=BL.vertexShader,kL=BL.fragmentShader}else TL=s.vertexShader,kL=s.fragmentShader,r.update(s),YL=r.getVertexShaderID(s),Y=r.getFragmentShaderID(s);let g=e.getRenderTarget(),$L=e.state.buffers.depth.getReversed(),aL=y.isInstancedMesh===!0,GL=y.isBatchedMesh===!0,ZL=!!s.map,cI=!!s.matcap,l=!!B,WL=!!s.aoMap,bL=!!s.lightMap,zL=!!s.bumpMap,sL=!!s.normalMap,PI=!!s.displacementMap,ML=!!s.emissiveMap,VL=!!s.metalnessMap,k=!!s.roughnessMap,JL=s.anisotropy>0,o=s.clearcoat>0,M=s.dispersion>0,V=s.iridescence>0,S=s.sheen>0,p=s.transmission>0,T=JL&&!!s.anisotropyMap,PL=o&&!!s.clearcoatMap,W=o&&!!s.clearcoatNormalMap,mL=o&&!!s.clearcoatRoughnessMap,OL=V&&!!s.iridescenceMap,IL=V&&!!s.iridescenceThicknessMap,FL=S&&!!s.sheenColorMap,uL=S&&!!s.sheenRoughnessMap,xL=!!s.specularMap,rL=!!s.specularColorMap,UL=!!s.specularIntensityMap,E=p&&!!s.transmissionMap,tL=p&&!!s.thicknessMap,QL=!!s.gradientMap,KL=!!s.alphaMap,LL=s.alphaTest>0,C=!!s.alphaHash,oL=!!s.extensions,pL=qN;s.toneMapped&&(g===null||g.isXRRenderTarget===!0)&&(pL=e.toneMapping);let nI={shaderID:eL,shaderType:s.type,shaderName:s.name,vertexShader:TL,fragmentShader:kL,defines:s.defines,customVertexShaderID:YL,customFragmentShaderID:Y,isRawShaderMaterial:s.isRawShaderMaterial===!0,glslVersion:s.glslVersion,precision:$,batching:GL,batchingColor:GL&&y._colorsTexture!==null,instancing:aL,instancingColor:aL&&y.instanceColor!==null,instancingMorph:aL&&y.morphTexture!==null,supportsVertexTextures:F,outputColorSpace:g===null?e.outputColorSpace:g.isXRRenderTarget===!0?g.texture.colorSpace:$I,alphaToCoverage:!!s.alphaToCoverage,map:ZL,matcap:cI,envMap:l,envMapMode:l&&B.mapping,envMapCubeUVHeight:_,aoMap:WL,lightMap:bL,bumpMap:zL,normalMap:sL,displacementMap:F&&PI,emissiveMap:ML,normalMapObjectSpace:sL&&s.normalMapType===zj,normalMapTangentSpace:sL&&s.normalMapType===Qi,metalnessMap:VL,roughnessMap:k,anisotropy:JL,anisotropyMap:T,clearcoat:o,clearcoatMap:PL,clearcoatNormalMap:W,clearcoatRoughnessMap:mL,dispersion:M,iridescence:V,iridescenceMap:OL,iridescenceThicknessMap:IL,sheen:S,sheenColorMap:FL,sheenRoughnessMap:uL,specularMap:xL,specularColorMap:rL,specularIntensityMap:UL,transmission:p,transmissionMap:E,thicknessMap:tL,gradientMap:QL,opaque:s.transparent===!1&&s.blending===rt&&s.alphaToCoverage===!1,alphaMap:KL,alphaTest:LL,alphaHash:C,combine:s.combine,mapUv:ZL&&K(s.map.channel),aoMapUv:WL&&K(s.aoMap.channel),lightMapUv:bL&&K(s.lightMap.channel),bumpMapUv:zL&&K(s.bumpMap.channel),normalMapUv:sL&&K(s.normalMap.channel),displacementMapUv:PI&&K(s.displacementMap.channel),emissiveMapUv:ML&&K(s.emissiveMap.channel),metalnessMapUv:VL&&K(s.metalnessMap.channel),roughnessMapUv:k&&K(s.roughnessMap.channel),anisotropyMapUv:T&&K(s.anisotropyMap.channel),clearcoatMapUv:PL&&K(s.clearcoatMap.channel),clearcoatNormalMapUv:W&&K(s.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mL&&K(s.clearcoatRoughnessMap.channel),iridescenceMapUv:OL&&K(s.iridescenceMap.channel),iridescenceThicknessMapUv:IL&&K(s.iridescenceThicknessMap.channel),sheenColorMapUv:FL&&K(s.sheenColorMap.channel),sheenRoughnessMapUv:uL&&K(s.sheenRoughnessMap.channel),specularMapUv:xL&&K(s.specularMap.channel),specularColorMapUv:rL&&K(s.specularColorMap.channel),specularIntensityMapUv:UL&&K(s.specularIntensityMap.channel),transmissionMapUv:E&&K(s.transmissionMap.channel),thicknessMapUv:tL&&K(s.thicknessMap.channel),alphaMapUv:KL&&K(s.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(sL||JL),vertexColors:s.vertexColors,vertexAlphas:s.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!w.attributes.uv&&(ZL||KL),fog:!!q,useFog:s.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:s.flatShading===!0&&s.wireframe===!1,sizeAttenuation:s.sizeAttenuation===!0,logarithmicDepthBuffer:J,reversedDepthBuffer:$L,skinning:y.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:dL,morphTextureStride:RL,numDirLights:G.directional.length,numPointLights:G.point.length,numSpotLights:G.spot.length,numSpotLightMaps:G.spotLightMap.length,numRectAreaLights:G.rectArea.length,numHemiLights:G.hemi.length,numDirLightShadows:G.directionalShadowMap.length,numPointLightShadows:G.pointShadowMap.length,numSpotLightShadows:G.spotShadowMap.length,numSpotLightShadowsWithMaps:G.numSpotLightShadowsWithMaps,numLightProbes:G.numLightProbes,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:s.dithering,shadowMapEnabled:e.shadowMap.enabled&&a.length>0,shadowMapType:e.shadowMap.type,toneMapping:pL,decodeVideoTexture:ZL&&s.map.isVideoTexture===!0&&SL.getTransfer(s.map.colorSpace)===II,decodeVideoTextureEmissive:ML&&s.emissiveMap.isVideoTexture===!0&&SL.getTransfer(s.emissiveMap.colorSpace)===II,premultipliedAlpha:s.premultipliedAlpha,doubleSided:s.side===IN,flipSided:s.side===EI,useDepthPacking:s.depthPacking>=0,depthPacking:s.depthPacking||0,index0AttributeName:s.index0AttributeName,extensionClipCullDistance:oL&&s.extensions.clipCullDistance===!0&&N.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oL&&s.extensions.multiDraw===!0||GL)&&N.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:N.has("KHR_parallel_shader_compile"),customProgramCacheKey:s.customProgramCacheKey()};return nI.vertexUv1s=i.has(1),nI.vertexUv2s=i.has(2),nI.vertexUv3s=i.has(3),i.clear(),nI}function m(s){let G=[];if(s.shaderID?G.push(s.shaderID):(G.push(s.customVertexShaderID),G.push(s.customFragmentShaderID)),s.defines!==void 0)for(let a in s.defines)G.push(a),G.push(s.defines[a]);return s.isRawShaderMaterial===!1&&(f(G,s),x(G,s),G.push(e.outputColorSpace)),G.push(s.customProgramCacheKey),G.join()}function f(s,G){s.push(G.precision),s.push(G.outputColorSpace),s.push(G.envMapMode),s.push(G.envMapCubeUVHeight),s.push(G.mapUv),s.push(G.alphaMapUv),s.push(G.lightMapUv),s.push(G.aoMapUv),s.push(G.bumpMapUv),s.push(G.normalMapUv),s.push(G.displacementMapUv),s.push(G.emissiveMapUv),s.push(G.metalnessMapUv),s.push(G.roughnessMapUv),s.push(G.anisotropyMapUv),s.push(G.clearcoatMapUv),s.push(G.clearcoatNormalMapUv),s.push(G.clearcoatRoughnessMapUv),s.push(G.iridescenceMapUv),s.push(G.iridescenceThicknessMapUv),s.push(G.sheenColorMapUv),s.push(G.sheenRoughnessMapUv),s.push(G.specularMapUv),s.push(G.specularColorMapUv),s.push(G.specularIntensityMapUv),s.push(G.transmissionMapUv),s.push(G.thicknessMapUv),s.push(G.combine),s.push(G.fogExp2),s.push(G.sizeAttenuation),s.push(G.morphTargetsCount),s.push(G.morphAttributeCount),s.push(G.numDirLights),s.push(G.numPointLights),s.push(G.numSpotLights),s.push(G.numSpotLightMaps),s.push(G.numHemiLights),s.push(G.numRectAreaLights),s.push(G.numDirLightShadows),s.push(G.numPointLightShadows),s.push(G.numSpotLightShadows),s.push(G.numSpotLightShadowsWithMaps),s.push(G.numLightProbes),s.push(G.shadowMapType),s.push(G.toneMapping),s.push(G.numClippingPlanes),s.push(G.numClipIntersection),s.push(G.depthPacking)}function x(s,G){Q.disableAll(),G.supportsVertexTextures&&Q.enable(0),G.instancing&&Q.enable(1),G.instancingColor&&Q.enable(2),G.instancingMorph&&Q.enable(3),G.matcap&&Q.enable(4),G.envMap&&Q.enable(5),G.normalMapObjectSpace&&Q.enable(6),G.normalMapTangentSpace&&Q.enable(7),G.clearcoat&&Q.enable(8),G.iridescence&&Q.enable(9),G.alphaTest&&Q.enable(10),G.vertexColors&&Q.enable(11),G.vertexAlphas&&Q.enable(12),G.vertexUv1s&&Q.enable(13),G.vertexUv2s&&Q.enable(14),G.vertexUv3s&&Q.enable(15),G.vertexTangents&&Q.enable(16),G.anisotropy&&Q.enable(17),G.alphaHash&&Q.enable(18),G.batching&&Q.enable(19),G.dispersion&&Q.enable(20),G.batchingColor&&Q.enable(21),G.gradientMap&&Q.enable(22),s.push(Q.mask),Q.disableAll(),G.fog&&Q.enable(0),G.useFog&&Q.enable(1),G.flatShading&&Q.enable(2),G.logarithmicDepthBuffer&&Q.enable(3),G.reversedDepthBuffer&&Q.enable(4),G.skinning&&Q.enable(5),G.morphTargets&&Q.enable(6),G.morphNormals&&Q.enable(7),G.morphColors&&Q.enable(8),G.premultipliedAlpha&&Q.enable(9),G.shadowMapEnabled&&Q.enable(10),G.doubleSided&&Q.enable(11),G.flipSided&&Q.enable(12),G.useDepthPacking&&Q.enable(13),G.dithering&&Q.enable(14),G.transmission&&Q.enable(15),G.sheen&&Q.enable(16),G.opaque&&Q.enable(17),G.pointsUvs&&Q.enable(18),G.decodeVideoTexture&&Q.enable(19),G.decodeVideoTextureEmissive&&Q.enable(20),G.alphaToCoverage&&Q.enable(21),s.push(Q.mask)}function H(s){let G=d[s.type],a;if(G){let v=HN[G];a=Uj.clone(v.uniforms)}else a=s.uniforms;return a}function Z(s,G){let a;for(let v=0,y=j.length;v<y;v++){let q=j[v];if(q.cacheKey===G){a=q,++a.usedTimes;break}}return a===void 0&&(a=new g8(e,G,s,P),j.push(a)),a}function R(s){if(--s.usedTimes===0){let G=j.indexOf(s);j[G]=j[j.length-1],j.pop(),s.destroy()}}function z(s){r.remove(s)}function D(){r.dispose()}return{getParameters:c,getProgramCacheKey:m,getUniforms:H,acquireProgram:Z,releaseProgram:R,releaseShaderCache:z,programs:j,dispose:D}}function Lc(){let e=new WeakMap;function L(n){return e.has(n)}function I(n){let Q=e.get(n);return Q===void 0&&(Q={},e.set(n,Q)),Q}function N(n){e.delete(n)}function t(n,Q,r){e.get(n)[Q]=r}function P(){e=new WeakMap}return{has:L,get:I,remove:N,update:t,dispose:P}}function Ic(e,L){return e.groupOrder!==L.groupOrder?e.groupOrder-L.groupOrder:e.renderOrder!==L.renderOrder?e.renderOrder-L.renderOrder:e.material.id!==L.material.id?e.material.id-L.material.id:e.z!==L.z?e.z-L.z:e.id-L.id}function j9(e,L){return e.groupOrder!==L.groupOrder?e.groupOrder-L.groupOrder:e.renderOrder!==L.renderOrder?e.renderOrder-L.renderOrder:e.z!==L.z?L.z-e.z:e.id-L.id}function J9(){let e=[],L=0,I=[],N=[],t=[];function P(){L=0,I.length=0,N.length=0,t.length=0}function n(J,F,$,d,K,c){let m=e[L];return m===void 0?(m={id:J.id,object:J,geometry:F,material:$,groupOrder:d,renderOrder:J.renderOrder,z:K,group:c},e[L]=m):(m.id=J.id,m.object=J,m.geometry=F,m.material=$,m.groupOrder=d,m.renderOrder=J.renderOrder,m.z=K,m.group=c),L++,m}function Q(J,F,$,d,K,c){let m=n(J,F,$,d,K,c);$.transmission>0?N.push(m):$.transparent===!0?t.push(m):I.push(m)}function r(J,F,$,d,K,c){let m=n(J,F,$,d,K,c);$.transmission>0?N.unshift(m):$.transparent===!0?t.unshift(m):I.unshift(m)}function i(J,F){I.length>1&&I.sort(J||Ic),N.length>1&&N.sort(F||j9),t.length>1&&t.sort(F||j9)}function j(){for(let J=L,F=e.length;J<F;J++){let $=e[J];if($.id===null)break;$.id=null,$.object=null,$.geometry=null,$.material=null,$.group=null}}return{opaque:I,transmissive:N,transparent:t,init:P,push:Q,unshift:r,finish:j,sort:i}}function Nc(){let e=new WeakMap;function L(N,t){let P=e.get(N),n;return P===void 0?(n=new J9,e.set(N,[n])):t>=P.length?(n=new J9,P.push(n)):n=P[t],n}function I(){e=new WeakMap}return{get:L,dispose:I}}function tc(){let e={};return{get:function(L){if(e[L.id]!==void 0)return e[L.id];let I;switch(L.type){case"DirectionalLight":I={direction:new u,color:new lL};break;case"SpotLight":I={position:new u,direction:new u,color:new lL,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new u,color:new lL,distance:0,decay:0};break;case"HemisphereLight":I={direction:new u,skyColor:new lL,groundColor:new lL};break;case"RectAreaLight":I={color:new lL,position:new u,halfWidth:new u,halfHeight:new u};break}return e[L.id]=I,I}}}function ec(){let e={};return{get:function(L){if(e[L.id]!==void 0)return e[L.id];let I;switch(L.type){case"DirectionalLight":I={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new AL};break;case"SpotLight":I={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new AL};break;case"PointLight":I={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new AL,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[L.id]=I,I}}}var Pc=0;function nc(e,L){return(L.castShadow?2:0)-(e.castShadow?2:0)+(L.map?1:0)-(e.map?1:0)}function Qc(e){let L=new tc,I=ec(),N={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let i=0;i<9;i++)N.probe.push(new u);let t=new u,P=new qL,n=new qL;function Q(i){let j=0,J=0,F=0;for(let s=0;s<9;s++)N.probe[s].set(0,0,0);let $=0,d=0,K=0,c=0,m=0,f=0,x=0,H=0,Z=0,R=0,z=0;i.sort(nc);for(let s=0,G=i.length;s<G;s++){let a=i[s],v=a.color,y=a.intensity,q=a.distance,w=a.shadow&&a.shadow.map?a.shadow.map.texture:null;if(a.isAmbientLight)j+=v.r*y,J+=v.g*y,F+=v.b*y;else if(a.isLightProbe){for(let U=0;U<9;U++)N.probe[U].addScaledVector(a.sh.coefficients[U],y);z++}else if(a.isDirectionalLight){let U=L.get(a);if(U.color.copy(a.color).multiplyScalar(a.intensity),a.castShadow){let B=a.shadow,_=I.get(a);_.shadowIntensity=B.intensity,_.shadowBias=B.bias,_.shadowNormalBias=B.normalBias,_.shadowRadius=B.radius,_.shadowMapSize=B.mapSize,N.directionalShadow[$]=_,N.directionalShadowMap[$]=w,N.directionalShadowMatrix[$]=a.shadow.matrix,f++}N.directional[$]=U,$++}else if(a.isSpotLight){let U=L.get(a);U.position.setFromMatrixPosition(a.matrixWorld),U.color.copy(v).multiplyScalar(y),U.distance=q,U.coneCos=Math.cos(a.angle),U.penumbraCos=Math.cos(a.angle*(1-a.penumbra)),U.decay=a.decay,N.spot[K]=U;let B=a.shadow;if(a.map&&(N.spotLightMap[Z]=a.map,Z++,B.updateMatrices(a),a.castShadow&&R++),N.spotLightMatrix[K]=B.matrix,a.castShadow){let _=I.get(a);_.shadowIntensity=B.intensity,_.shadowBias=B.bias,_.shadowNormalBias=B.normalBias,_.shadowRadius=B.radius,_.shadowMapSize=B.mapSize,N.spotShadow[K]=_,N.spotShadowMap[K]=w,H++}K++}else if(a.isRectAreaLight){let U=L.get(a);U.color.copy(v).multiplyScalar(y),U.halfWidth.set(a.width*.5,0,0),U.halfHeight.set(0,a.height*.5,0),N.rectArea[c]=U,c++}else if(a.isPointLight){let U=L.get(a);if(U.color.copy(a.color).multiplyScalar(a.intensity),U.distance=a.distance,U.decay=a.decay,a.castShadow){let B=a.shadow,_=I.get(a);_.shadowIntensity=B.intensity,_.shadowBias=B.bias,_.shadowNormalBias=B.normalBias,_.shadowRadius=B.radius,_.shadowMapSize=B.mapSize,_.shadowCameraNear=B.camera.near,_.shadowCameraFar=B.camera.far,N.pointShadow[d]=_,N.pointShadowMap[d]=w,N.pointShadowMatrix[d]=a.shadow.matrix,x++}N.point[d]=U,d++}else if(a.isHemisphereLight){let U=L.get(a);U.skyColor.copy(a.color).multiplyScalar(y),U.groundColor.copy(a.groundColor).multiplyScalar(y),N.hemi[m]=U,m++}}c>0&&(e.has("OES_texture_float_linear")===!0?(N.rectAreaLTC1=iL.LTC_FLOAT_1,N.rectAreaLTC2=iL.LTC_FLOAT_2):(N.rectAreaLTC1=iL.LTC_HALF_1,N.rectAreaLTC2=iL.LTC_HALF_2)),N.ambient[0]=j,N.ambient[1]=J,N.ambient[2]=F;let D=N.hash;(D.directionalLength!==$||D.pointLength!==d||D.spotLength!==K||D.rectAreaLength!==c||D.hemiLength!==m||D.numDirectionalShadows!==f||D.numPointShadows!==x||D.numSpotShadows!==H||D.numSpotMaps!==Z||D.numLightProbes!==z)&&(N.directional.length=$,N.spot.length=K,N.rectArea.length=c,N.point.length=d,N.hemi.length=m,N.directionalShadow.length=f,N.directionalShadowMap.length=f,N.pointShadow.length=x,N.pointShadowMap.length=x,N.spotShadow.length=H,N.spotShadowMap.length=H,N.directionalShadowMatrix.length=f,N.pointShadowMatrix.length=x,N.spotLightMatrix.length=H+Z-R,N.spotLightMap.length=Z,N.numSpotLightShadowsWithMaps=R,N.numLightProbes=z,D.directionalLength=$,D.pointLength=d,D.spotLength=K,D.rectAreaLength=c,D.hemiLength=m,D.numDirectionalShadows=f,D.numPointShadows=x,D.numSpotShadows=H,D.numSpotMaps=Z,D.numLightProbes=z,N.version=Pc++)}function r(i,j){let J=0,F=0,$=0,d=0,K=0,c=j.matrixWorldInverse;for(let m=0,f=i.length;m<f;m++){let x=i[m];if(x.isDirectionalLight){let H=N.directional[J];H.direction.setFromMatrixPosition(x.matrixWorld),t.setFromMatrixPosition(x.target.matrixWorld),H.direction.sub(t),H.direction.transformDirection(c),J++}else if(x.isSpotLight){let H=N.spot[$];H.position.setFromMatrixPosition(x.matrixWorld),H.position.applyMatrix4(c),H.direction.setFromMatrixPosition(x.matrixWorld),t.setFromMatrixPosition(x.target.matrixWorld),H.direction.sub(t),H.direction.transformDirection(c),$++}else if(x.isRectAreaLight){let H=N.rectArea[d];H.position.setFromMatrixPosition(x.matrixWorld),H.position.applyMatrix4(c),n.identity(),P.copy(x.matrixWorld),P.premultiply(c),n.extractRotation(P),H.halfWidth.set(x.width*.5,0,0),H.halfHeight.set(0,x.height*.5,0),H.halfWidth.applyMatrix4(n),H.halfHeight.applyMatrix4(n),d++}else if(x.isPointLight){let H=N.point[F];H.position.setFromMatrixPosition(x.matrixWorld),H.position.applyMatrix4(c),F++}else if(x.isHemisphereLight){let H=N.hemi[K];H.direction.setFromMatrixPosition(x.matrixWorld),H.direction.transformDirection(c),K++}}}return{setup:Q,setupView:r,state:N}}function F9(e){let L=new Qc(e),I=[],N=[];function t(j){i.camera=j,I.length=0,N.length=0}function P(j){I.push(j)}function n(j){N.push(j)}function Q(){L.setup(I)}function r(j){L.setupView(I,j)}let i={lightsArray:I,shadowsArray:N,camera:null,lights:L,transmissionRenderTarget:{}};return{init:t,state:i,setupLights:Q,setupLightsView:r,pushLight:P,pushShadow:n}}function ic(e){let L=new WeakMap;function I(t,P=0){let n=L.get(t),Q;return n===void 0?(Q=new F9(e),L.set(t,[Q])):P>=n.length?(Q=new F9(e),n.push(Q)):Q=n[P],Q}function N(){L=new WeakMap}return{get:I,dispose:N}}var rc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jc=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Jc(e,L,I){let N=new Qe,t=new AL,P=new AL,n=new gL,Q=new YP({depthPacking:aj}),r=new CP,i={},j=I.maxTextureSize,J={[AI]:EI,[EI]:AI,[IN]:IN},F=new JN({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new AL},radius:{value:4}},vertexShader:rc,fragmentShader:jc}),$=F.clone();$.defines.HORIZONTAL_PASS=1;let d=new SI;d.setAttribute("position",new KI(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let K=new sI(d,F),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=SQ;let m=this.type;this.render=function(R,z,D){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||R.length===0)return;let s=e.getRenderTarget(),G=e.getActiveCubeFace(),a=e.getActiveMipmapLevel(),v=e.state;v.setBlending(vN),v.buffers.depth.getReversed()===!0?v.buffers.color.setClear(0,0,0,0):v.buffers.color.setClear(1,1,1,1),v.buffers.depth.setTest(!0),v.setScissorTest(!1);let y=m!==ON&&this.type===ON,q=m===ON&&this.type!==ON;for(let w=0,U=R.length;w<U;w++){let B=R[w],_=B.shadow;if(_===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(_.autoUpdate===!1&&_.needsUpdate===!1)continue;t.copy(_.mapSize);let eL=_.getFrameExtents();if(t.multiply(eL),P.copy(_.mapSize),(t.x>j||t.y>j)&&(t.x>j&&(P.x=Math.floor(j/eL.x),t.x=P.x*eL.x,_.mapSize.x=P.x),t.y>j&&(P.y=Math.floor(j/eL.y),t.y=P.y*eL.y,_.mapSize.y=P.y)),_.map===null||y===!0||q===!0){let dL=this.type!==ON?{minFilter:xI,magFilter:xI}:{};_.map!==null&&_.map.dispose(),_.map=new MN(t.x,t.y,dL),_.map.texture.name=B.name+".shadowMap",_.camera.updateProjectionMatrix()}e.setRenderTarget(_.map),e.clear();let nL=_.getViewportCount();for(let dL=0;dL<nL;dL++){let RL=_.getViewport(dL);n.set(P.x*RL.x,P.y*RL.y,P.x*RL.z,P.y*RL.w),v.viewport(n),_.updateMatrices(B,dL),N=_.getFrustum(),H(z,D,_.camera,B,this.type)}_.isPointLightShadow!==!0&&this.type===ON&&f(_,D),_.needsUpdate=!1}m=this.type,c.needsUpdate=!1,e.setRenderTarget(s,G,a)};function f(R,z){let D=L.update(K);F.defines.VSM_SAMPLES!==R.blurSamples&&(F.defines.VSM_SAMPLES=R.blurSamples,$.defines.VSM_SAMPLES=R.blurSamples,F.needsUpdate=!0,$.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new MN(t.x,t.y)),F.uniforms.shadow_pass.value=R.map.texture,F.uniforms.resolution.value=R.mapSize,F.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(z,null,D,F,K,null),$.uniforms.shadow_pass.value=R.mapPass.texture,$.uniforms.resolution.value=R.mapSize,$.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(z,null,D,$,K,null)}function x(R,z,D,s){let G=null,a=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(a!==void 0)G=a;else if(G=D.isPointLight===!0?r:Q,e.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){let v=G.uuid,y=z.uuid,q=i[v];q===void 0&&(q={},i[v]=q);let w=q[y];w===void 0&&(w=G.clone(),q[y]=w,z.addEventListener("dispose",Z)),G=w}if(G.visible=z.visible,G.wireframe=z.wireframe,s===ON?G.side=z.shadowSide!==null?z.shadowSide:z.side:G.side=z.shadowSide!==null?z.shadowSide:J[z.side],G.alphaMap=z.alphaMap,G.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,G.map=z.map,G.clipShadows=z.clipShadows,G.clippingPlanes=z.clippingPlanes,G.clipIntersection=z.clipIntersection,G.displacementMap=z.displacementMap,G.displacementScale=z.displacementScale,G.displacementBias=z.displacementBias,G.wireframeLinewidth=z.wireframeLinewidth,G.linewidth=z.linewidth,D.isPointLight===!0&&G.isMeshDistanceMaterial===!0){let v=e.properties.get(G);v.light=D}return G}function H(R,z,D,s,G){if(R.visible===!1)return;if(R.layers.test(z.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&G===ON)&&(!R.frustumCulled||N.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);let y=L.update(R),q=R.material;if(Array.isArray(q)){let w=y.groups;for(let U=0,B=w.length;U<B;U++){let _=w[U],eL=q[_.materialIndex];if(eL&&eL.visible){let nL=x(R,eL,s,G);R.onBeforeShadow(e,R,z,D,y,nL,_),e.renderBufferDirect(D,null,y,nL,R,_),R.onAfterShadow(e,R,z,D,y,nL,_)}}}else if(q.visible){let w=x(R,q,s,G);R.onBeforeShadow(e,R,z,D,y,w,null),e.renderBufferDirect(D,null,y,w,R,null),R.onAfterShadow(e,R,z,D,y,w,null)}}let v=R.children;for(let y=0,q=v.length;y<q;y++)H(v[y],z,D,s,G)}function Z(R){R.target.removeEventListener("dispose",Z);for(let D in i){let s=i[D],G=R.target.uuid;G in s&&(s[G].dispose(),delete s[G])}}}var Fc={[Pn]:nn,[Qn]:Jn,[rn]:Fn,[jt]:jn,[nn]:Pn,[Jn]:Qn,[Fn]:rn,[jn]:jt};function mc(e,L){function I(){let E=!1,tL=new gL,QL=null,KL=new gL(0,0,0,0);return{setMask:function(LL){QL!==LL&&!E&&(e.colorMask(LL,LL,LL,LL),QL=LL)},setLocked:function(LL){E=LL},setClear:function(LL,C,oL,pL,nI){nI===!0&&(LL*=pL,C*=pL,oL*=pL),tL.set(LL,C,oL,pL),KL.equals(tL)===!1&&(e.clearColor(LL,C,oL,pL),KL.copy(tL))},reset:function(){E=!1,QL=null,KL.set(-1,0,0,0)}}}function N(){let E=!1,tL=!1,QL=null,KL=null,LL=null;return{setReversed:function(C){if(tL!==C){let oL=L.get("EXT_clip_control");C?oL.clipControlEXT(oL.LOWER_LEFT_EXT,oL.ZERO_TO_ONE_EXT):oL.clipControlEXT(oL.LOWER_LEFT_EXT,oL.NEGATIVE_ONE_TO_ONE_EXT),tL=C;let pL=LL;LL=null,this.setClear(pL)}},getReversed:function(){return tL},setTest:function(C){C?g(e.DEPTH_TEST):$L(e.DEPTH_TEST)},setMask:function(C){QL!==C&&!E&&(e.depthMask(C),QL=C)},setFunc:function(C){if(tL&&(C=Fc[C]),KL!==C){switch(C){case Pn:e.depthFunc(e.NEVER);break;case nn:e.depthFunc(e.ALWAYS);break;case Qn:e.depthFunc(e.LESS);break;case jt:e.depthFunc(e.LEQUAL);break;case rn:e.depthFunc(e.EQUAL);break;case jn:e.depthFunc(e.GEQUAL);break;case Jn:e.depthFunc(e.GREATER);break;case Fn:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}KL=C}},setLocked:function(C){E=C},setClear:function(C){LL!==C&&(tL&&(C=1-C),e.clearDepth(C),LL=C)},reset:function(){E=!1,QL=null,KL=null,LL=null,tL=!1}}}function t(){let E=!1,tL=null,QL=null,KL=null,LL=null,C=null,oL=null,pL=null,nI=null;return{setTest:function(BL){E||(BL?g(e.STENCIL_TEST):$L(e.STENCIL_TEST))},setMask:function(BL){tL!==BL&&!E&&(e.stencilMask(BL),tL=BL)},setFunc:function(BL,xN,$N){(QL!==BL||KL!==xN||LL!==$N)&&(e.stencilFunc(BL,xN,$N),QL=BL,KL=xN,LL=$N)},setOp:function(BL,xN,$N){(C!==BL||oL!==xN||pL!==$N)&&(e.stencilOp(BL,xN,$N),C=BL,oL=xN,pL=$N)},setLocked:function(BL){E=BL},setClear:function(BL){nI!==BL&&(e.clearStencil(BL),nI=BL)},reset:function(){E=!1,tL=null,QL=null,KL=null,LL=null,C=null,oL=null,pL=null,nI=null}}}let P=new I,n=new N,Q=new t,r=new WeakMap,i=new WeakMap,j={},J={},F=new WeakMap,$=[],d=null,K=!1,c=null,m=null,f=null,x=null,H=null,Z=null,R=null,z=new lL(0,0,0),D=0,s=!1,G=null,a=null,v=null,y=null,q=null,w=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,B=0,_=e.getParameter(e.VERSION);_.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(_)[1]),U=B>=1):_.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(_)[1]),U=B>=2);let eL=null,nL={},dL=e.getParameter(e.SCISSOR_BOX),RL=e.getParameter(e.VIEWPORT),TL=new gL().fromArray(dL),kL=new gL().fromArray(RL);function YL(E,tL,QL,KL){let LL=new Uint8Array(4),C=e.createTexture();e.bindTexture(E,C),e.texParameteri(E,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(E,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let oL=0;oL<QL;oL++)E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY?e.texImage3D(tL,0,e.RGBA,1,1,KL,0,e.RGBA,e.UNSIGNED_BYTE,LL):e.texImage2D(tL+oL,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,LL);return C}let Y={};Y[e.TEXTURE_2D]=YL(e.TEXTURE_2D,e.TEXTURE_2D,1),Y[e.TEXTURE_CUBE_MAP]=YL(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[e.TEXTURE_2D_ARRAY]=YL(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Y[e.TEXTURE_3D]=YL(e.TEXTURE_3D,e.TEXTURE_3D,1,1),P.setClear(0,0,0,1),n.setClear(1),Q.setClear(0),g(e.DEPTH_TEST),n.setFunc(jt),zL(!1),sL(_Q),g(e.CULL_FACE),WL(vN);function g(E){j[E]!==!0&&(e.enable(E),j[E]=!0)}function $L(E){j[E]!==!1&&(e.disable(E),j[E]=!1)}function aL(E,tL){return J[E]!==tL?(e.bindFramebuffer(E,tL),J[E]=tL,E===e.DRAW_FRAMEBUFFER&&(J[e.FRAMEBUFFER]=tL),E===e.FRAMEBUFFER&&(J[e.DRAW_FRAMEBUFFER]=tL),!0):!1}function GL(E,tL){let QL=$,KL=!1;if(E){QL=F.get(tL),QL===void 0&&(QL=[],F.set(tL,QL));let LL=E.textures;if(QL.length!==LL.length||QL[0]!==e.COLOR_ATTACHMENT0){for(let C=0,oL=LL.length;C<oL;C++)QL[C]=e.COLOR_ATTACHMENT0+C;QL.length=LL.length,KL=!0}}else QL[0]!==e.BACK&&(QL[0]=e.BACK,KL=!0);KL&&e.drawBuffers(QL)}function ZL(E){return d!==E?(e.useProgram(E),d=E,!0):!1}let cI={[kN]:e.FUNC_ADD,[Ij]:e.FUNC_SUBTRACT,[Nj]:e.FUNC_REVERSE_SUBTRACT};cI[tj]=e.MIN,cI[ej]=e.MAX;let l={[Pj]:e.ZERO,[nj]:e.ONE,[Qj]:e.SRC_COLOR,[UP]:e.SRC_ALPHA,[mj]:e.SRC_ALPHA_SATURATE,[Jj]:e.DST_COLOR,[rj]:e.DST_ALPHA,[ij]:e.ONE_MINUS_SRC_COLOR,[TP]:e.ONE_MINUS_SRC_ALPHA,[Fj]:e.ONE_MINUS_DST_COLOR,[jj]:e.ONE_MINUS_DST_ALPHA,[$j]:e.CONSTANT_COLOR,[cj]:e.ONE_MINUS_CONSTANT_COLOR,[dj]:e.CONSTANT_ALPHA,[Mj]:e.ONE_MINUS_CONSTANT_ALPHA};function WL(E,tL,QL,KL,LL,C,oL,pL,nI,BL){if(E===vN){K===!0&&($L(e.BLEND),K=!1);return}if(K===!1&&(g(e.BLEND),K=!0),E!==Lj){if(E!==c||BL!==s){if((m!==kN||H!==kN)&&(e.blendEquation(e.FUNC_ADD),m=kN,H=kN),BL)switch(E){case rt:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case kQ:e.blendFunc(e.ONE,e.ONE);break;case YQ:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case CQ:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case rt:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case kQ:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case YQ:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case CQ:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}f=null,x=null,Z=null,R=null,z.set(0,0,0),D=0,c=E,s=BL}return}LL=LL||tL,C=C||QL,oL=oL||KL,(tL!==m||LL!==H)&&(e.blendEquationSeparate(cI[tL],cI[LL]),m=tL,H=LL),(QL!==f||KL!==x||C!==Z||oL!==R)&&(e.blendFuncSeparate(l[QL],l[KL],l[C],l[oL]),f=QL,x=KL,Z=C,R=oL),(pL.equals(z)===!1||nI!==D)&&(e.blendColor(pL.r,pL.g,pL.b,nI),z.copy(pL),D=nI),c=E,s=!1}function bL(E,tL){E.side===IN?$L(e.CULL_FACE):g(e.CULL_FACE);let QL=E.side===EI;tL&&(QL=!QL),zL(QL),E.blending===rt&&E.transparent===!1?WL(vN):WL(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),n.setFunc(E.depthFunc),n.setTest(E.depthTest),n.setMask(E.depthWrite),P.setMask(E.colorWrite);let KL=E.stencilWrite;Q.setTest(KL),KL&&(Q.setMask(E.stencilWriteMask),Q.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),Q.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),ML(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?g(e.SAMPLE_ALPHA_TO_COVERAGE):$L(e.SAMPLE_ALPHA_TO_COVERAGE)}function zL(E){G!==E&&(E?e.frontFace(e.CW):e.frontFace(e.CCW),G=E)}function sL(E){E!==Br?(g(e.CULL_FACE),E!==a&&(E===_Q?e.cullFace(e.BACK):E===Wr?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):$L(e.CULL_FACE),a=E}function PI(E){E!==v&&(U&&e.lineWidth(E),v=E)}function ML(E,tL,QL){E?(g(e.POLYGON_OFFSET_FILL),(y!==tL||q!==QL)&&(e.polygonOffset(tL,QL),y=tL,q=QL)):$L(e.POLYGON_OFFSET_FILL)}function VL(E){E?g(e.SCISSOR_TEST):$L(e.SCISSOR_TEST)}function k(E){E===void 0&&(E=e.TEXTURE0+w-1),eL!==E&&(e.activeTexture(E),eL=E)}function JL(E,tL,QL){QL===void 0&&(eL===null?QL=e.TEXTURE0+w-1:QL=eL);let KL=nL[QL];KL===void 0&&(KL={type:void 0,texture:void 0},nL[QL]=KL),(KL.type!==E||KL.texture!==tL)&&(eL!==QL&&(e.activeTexture(QL),eL=QL),e.bindTexture(E,tL||Y[E]),KL.type=E,KL.texture=tL)}function o(){let E=nL[eL];E!==void 0&&E.type!==void 0&&(e.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function M(){try{e.compressedTexImage2D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function V(){try{e.compressedTexImage3D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function S(){try{e.texSubImage2D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function p(){try{e.texSubImage3D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function T(){try{e.compressedTexSubImage2D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function PL(){try{e.compressedTexSubImage3D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function W(){try{e.texStorage2D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function mL(){try{e.texStorage3D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function OL(){try{e.texImage2D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function IL(){try{e.texImage3D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function FL(E){TL.equals(E)===!1&&(e.scissor(E.x,E.y,E.z,E.w),TL.copy(E))}function uL(E){kL.equals(E)===!1&&(e.viewport(E.x,E.y,E.z,E.w),kL.copy(E))}function xL(E,tL){let QL=i.get(tL);QL===void 0&&(QL=new WeakMap,i.set(tL,QL));let KL=QL.get(E);KL===void 0&&(KL=e.getUniformBlockIndex(tL,E.name),QL.set(E,KL))}function rL(E,tL){let KL=i.get(tL).get(E);r.get(tL)!==KL&&(e.uniformBlockBinding(tL,KL,E.__bindingPointIndex),r.set(tL,KL))}function UL(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),n.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),j={},eL=null,nL={},J={},F=new WeakMap,$=[],d=null,K=!1,c=null,m=null,f=null,x=null,H=null,Z=null,R=null,z=new lL(0,0,0),D=0,s=!1,G=null,a=null,v=null,y=null,q=null,TL.set(0,0,e.canvas.width,e.canvas.height),kL.set(0,0,e.canvas.width,e.canvas.height),P.reset(),n.reset(),Q.reset()}return{buffers:{color:P,depth:n,stencil:Q},enable:g,disable:$L,bindFramebuffer:aL,drawBuffers:GL,useProgram:ZL,setBlending:WL,setMaterial:bL,setFlipSided:zL,setCullFace:sL,setLineWidth:PI,setPolygonOffset:ML,setScissorTest:VL,activeTexture:k,bindTexture:JL,unbindTexture:o,compressedTexImage2D:M,compressedTexImage3D:V,texImage2D:OL,texImage3D:IL,updateUBOMapping:xL,uniformBlockBinding:rL,texStorage2D:W,texStorage3D:mL,texSubImage2D:S,texSubImage3D:p,compressedTexSubImage2D:T,compressedTexSubImage3D:PL,scissor:FL,viewport:uL,reset:UL}}function $c(e,L,I,N,t,P,n){let Q=L.has("WEBGL_multisampled_render_to_texture")?L.get("WEBGL_multisampled_render_to_texture"):null,r=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),i=new AL,j=new WeakMap,J,F=new WeakMap,$=!1;try{$=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(o,M){return $?new OffscreenCanvas(o,M):Ct("canvas")}function K(o,M,V){let S=1,p=JL(o);if((p.width>V||p.height>V)&&(S=V/Math.max(p.width,p.height)),S<1)if(typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap||typeof VideoFrame<"u"&&o instanceof VideoFrame){let T=Math.floor(S*p.width),PL=Math.floor(S*p.height);J===void 0&&(J=d(T,PL));let W=M?d(T,PL):J;return W.width=T,W.height=PL,W.getContext("2d").drawImage(o,0,0,T,PL),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+p.width+"x"+p.height+") to ("+T+"x"+PL+")."),W}else return"data"in o&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+p.width+"x"+p.height+")."),o;return o}function c(o){return o.generateMipmaps}function m(o){e.generateMipmap(o)}function f(o){return o.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:o.isWebGL3DRenderTarget?e.TEXTURE_3D:o.isWebGLArrayRenderTarget||o.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(o,M,V,S,p=!1){if(o!==null){if(e[o]!==void 0)return e[o];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+o+"'")}let T=M;if(M===e.RED&&(V===e.FLOAT&&(T=e.R32F),V===e.HALF_FLOAT&&(T=e.R16F),V===e.UNSIGNED_BYTE&&(T=e.R8)),M===e.RED_INTEGER&&(V===e.UNSIGNED_BYTE&&(T=e.R8UI),V===e.UNSIGNED_SHORT&&(T=e.R16UI),V===e.UNSIGNED_INT&&(T=e.R32UI),V===e.BYTE&&(T=e.R8I),V===e.SHORT&&(T=e.R16I),V===e.INT&&(T=e.R32I)),M===e.RG&&(V===e.FLOAT&&(T=e.RG32F),V===e.HALF_FLOAT&&(T=e.RG16F),V===e.UNSIGNED_BYTE&&(T=e.RG8)),M===e.RG_INTEGER&&(V===e.UNSIGNED_BYTE&&(T=e.RG8UI),V===e.UNSIGNED_SHORT&&(T=e.RG16UI),V===e.UNSIGNED_INT&&(T=e.RG32UI),V===e.BYTE&&(T=e.RG8I),V===e.SHORT&&(T=e.RG16I),V===e.INT&&(T=e.RG32I)),M===e.RGB_INTEGER&&(V===e.UNSIGNED_BYTE&&(T=e.RGB8UI),V===e.UNSIGNED_SHORT&&(T=e.RGB16UI),V===e.UNSIGNED_INT&&(T=e.RGB32UI),V===e.BYTE&&(T=e.RGB8I),V===e.SHORT&&(T=e.RGB16I),V===e.INT&&(T=e.RGB32I)),M===e.RGBA_INTEGER&&(V===e.UNSIGNED_BYTE&&(T=e.RGBA8UI),V===e.UNSIGNED_SHORT&&(T=e.RGBA16UI),V===e.UNSIGNED_INT&&(T=e.RGBA32UI),V===e.BYTE&&(T=e.RGBA8I),V===e.SHORT&&(T=e.RGBA16I),V===e.INT&&(T=e.RGBA32I)),M===e.RGB&&(V===e.UNSIGNED_INT_5_9_9_9_REV&&(T=e.RGB9_E5),V===e.UNSIGNED_INT_10F_11F_11F_REV&&(T=e.R11F_G11F_B10F)),M===e.RGBA){let PL=p?ue:SL.getTransfer(S);V===e.FLOAT&&(T=e.RGBA32F),V===e.HALF_FLOAT&&(T=e.RGBA16F),V===e.UNSIGNED_BYTE&&(T=PL===II?e.SRGB8_ALPHA8:e.RGBA8),V===e.UNSIGNED_SHORT_4_4_4_4&&(T=e.RGBA4),V===e.UNSIGNED_SHORT_5_5_5_1&&(T=e.RGB5_A1)}return(T===e.R16F||T===e.R32F||T===e.RG16F||T===e.RG32F||T===e.RGBA16F||T===e.RGBA32F)&&L.get("EXT_color_buffer_float"),T}function H(o,M){let V;return o?M===null||M===WN||M===me?V=e.DEPTH24_STENCIL8:M===RI?V=e.DEPTH32F_STENCIL8:M===Fe&&(V=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===WN||M===me?V=e.DEPTH_COMPONENT24:M===RI?V=e.DEPTH_COMPONENT32F:M===Fe&&(V=e.DEPTH_COMPONENT16),V}function Z(o,M){return c(o)===!0||o.isFramebufferTexture&&o.minFilter!==xI&&o.minFilter!==QI?Math.log2(Math.max(M.width,M.height))+1:o.mipmaps!==void 0&&o.mipmaps.length>0?o.mipmaps.length:o.isCompressedTexture&&Array.isArray(o.image)?M.mipmaps.length:1}function R(o){let M=o.target;M.removeEventListener("dispose",R),D(M),M.isVideoTexture&&j.delete(M)}function z(o){let M=o.target;M.removeEventListener("dispose",z),G(M)}function D(o){let M=N.get(o);if(M.__webglInit===void 0)return;let V=o.source,S=F.get(V);if(S){let p=S[M.__cacheKey];p.usedTimes--,p.usedTimes===0&&s(o),Object.keys(S).length===0&&F.delete(V)}N.remove(o)}function s(o){let M=N.get(o);e.deleteTexture(M.__webglTexture);let V=o.source,S=F.get(V);delete S[M.__cacheKey],n.memory.textures--}function G(o){let M=N.get(o);if(o.depthTexture&&(o.depthTexture.dispose(),N.remove(o.depthTexture)),o.isWebGLCubeRenderTarget)for(let S=0;S<6;S++){if(Array.isArray(M.__webglFramebuffer[S]))for(let p=0;p<M.__webglFramebuffer[S].length;p++)e.deleteFramebuffer(M.__webglFramebuffer[S][p]);else e.deleteFramebuffer(M.__webglFramebuffer[S]);M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer[S])}else{if(Array.isArray(M.__webglFramebuffer))for(let S=0;S<M.__webglFramebuffer.length;S++)e.deleteFramebuffer(M.__webglFramebuffer[S]);else e.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&e.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let S=0;S<M.__webglColorRenderbuffer.length;S++)M.__webglColorRenderbuffer[S]&&e.deleteRenderbuffer(M.__webglColorRenderbuffer[S]);M.__webglDepthRenderbuffer&&e.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let V=o.textures;for(let S=0,p=V.length;S<p;S++){let T=N.get(V[S]);T.__webglTexture&&(e.deleteTexture(T.__webglTexture),n.memory.textures--),N.remove(V[S])}N.remove(o)}let a=0;function v(){a=0}function y(){let o=a;return o>=t.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+o+" texture units while this GPU supports only "+t.maxTextures),a+=1,o}function q(o){let M=[];return M.push(o.wrapS),M.push(o.wrapT),M.push(o.wrapR||0),M.push(o.magFilter),M.push(o.minFilter),M.push(o.anisotropy),M.push(o.internalFormat),M.push(o.format),M.push(o.type),M.push(o.generateMipmaps),M.push(o.premultiplyAlpha),M.push(o.flipY),M.push(o.unpackAlignment),M.push(o.colorSpace),M.join()}function w(o,M){let V=N.get(o);if(o.isVideoTexture&&VL(o),o.isRenderTargetTexture===!1&&o.isExternalTexture!==!0&&o.version>0&&V.__version!==o.version){let S=o.image;if(S===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(S.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(V,o,M);return}}else o.isExternalTexture&&(V.__webglTexture=o.sourceTexture?o.sourceTexture:null);I.bindTexture(e.TEXTURE_2D,V.__webglTexture,e.TEXTURE0+M)}function U(o,M){let V=N.get(o);if(o.isRenderTargetTexture===!1&&o.version>0&&V.__version!==o.version){Y(V,o,M);return}I.bindTexture(e.TEXTURE_2D_ARRAY,V.__webglTexture,e.TEXTURE0+M)}function B(o,M){let V=N.get(o);if(o.isRenderTargetTexture===!1&&o.version>0&&V.__version!==o.version){Y(V,o,M);return}I.bindTexture(e.TEXTURE_3D,V.__webglTexture,e.TEXTURE0+M)}function _(o,M){let V=N.get(o);if(o.version>0&&V.__version!==o.version){g(V,o,M);return}I.bindTexture(e.TEXTURE_CUBE_MAP,V.__webglTexture,e.TEXTURE0+M)}let eL={[WI]:e.REPEAT,[BI]:e.CLAMP_TO_EDGE,[kt]:e.MIRRORED_REPEAT},nL={[xI]:e.NEAREST,[cn]:e.NEAREST_MIPMAP_NEAREST,[ft]:e.NEAREST_MIPMAP_LINEAR,[QI]:e.LINEAR,[Je]:e.LINEAR_MIPMAP_NEAREST,[vI]:e.LINEAR_MIPMAP_LINEAR},dL={[Dj]:e.NEVER,[pj]:e.ALWAYS,[Ej]:e.LESS,[ii]:e.LEQUAL,[uj]:e.EQUAL,[Vj]:e.GEQUAL,[hj]:e.GREATER,[bj]:e.NOTEQUAL};function RL(o,M){if(M.type===RI&&L.has("OES_texture_float_linear")===!1&&(M.magFilter===QI||M.magFilter===Je||M.magFilter===ft||M.magFilter===vI||M.minFilter===QI||M.minFilter===Je||M.minFilter===ft||M.minFilter===vI)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(o,e.TEXTURE_WRAP_S,eL[M.wrapS]),e.texParameteri(o,e.TEXTURE_WRAP_T,eL[M.wrapT]),(o===e.TEXTURE_3D||o===e.TEXTURE_2D_ARRAY)&&e.texParameteri(o,e.TEXTURE_WRAP_R,eL[M.wrapR]),e.texParameteri(o,e.TEXTURE_MAG_FILTER,nL[M.magFilter]),e.texParameteri(o,e.TEXTURE_MIN_FILTER,nL[M.minFilter]),M.compareFunction&&(e.texParameteri(o,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(o,e.TEXTURE_COMPARE_FUNC,dL[M.compareFunction])),L.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===xI||M.minFilter!==ft&&M.minFilter!==vI||M.type===RI&&L.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||N.get(M).__currentAnisotropy){let V=L.get("EXT_texture_filter_anisotropic");e.texParameterf(o,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,t.getMaxAnisotropy())),N.get(M).__currentAnisotropy=M.anisotropy}}}function TL(o,M){let V=!1;o.__webglInit===void 0&&(o.__webglInit=!0,M.addEventListener("dispose",R));let S=M.source,p=F.get(S);p===void 0&&(p={},F.set(S,p));let T=q(M);if(T!==o.__cacheKey){p[T]===void 0&&(p[T]={texture:e.createTexture(),usedTimes:0},n.memory.textures++,V=!0),p[T].usedTimes++;let PL=p[o.__cacheKey];PL!==void 0&&(p[o.__cacheKey].usedTimes--,PL.usedTimes===0&&s(M)),o.__cacheKey=T,o.__webglTexture=p[T].texture}return V}function kL(o,M,V){return Math.floor(Math.floor(o/V)/M)}function YL(o,M,V,S){let T=o.updateRanges;if(T.length===0)I.texSubImage2D(e.TEXTURE_2D,0,0,0,M.width,M.height,V,S,M.data);else{T.sort((IL,FL)=>IL.start-FL.start);let PL=0;for(let IL=1;IL<T.length;IL++){let FL=T[PL],uL=T[IL],xL=FL.start+FL.count,rL=kL(uL.start,M.width,4),UL=kL(FL.start,M.width,4);uL.start<=xL+1&&rL===UL&&kL(uL.start+uL.count-1,M.width,4)===rL?FL.count=Math.max(FL.count,uL.start+uL.count-FL.start):(++PL,T[PL]=uL)}T.length=PL+1;let W=e.getParameter(e.UNPACK_ROW_LENGTH),mL=e.getParameter(e.UNPACK_SKIP_PIXELS),OL=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,M.width);for(let IL=0,FL=T.length;IL<FL;IL++){let uL=T[IL],xL=Math.floor(uL.start/4),rL=Math.ceil(uL.count/4),UL=xL%M.width,E=Math.floor(xL/M.width),tL=rL,QL=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,UL),e.pixelStorei(e.UNPACK_SKIP_ROWS,E),I.texSubImage2D(e.TEXTURE_2D,0,UL,E,tL,QL,V,S,M.data)}o.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,W),e.pixelStorei(e.UNPACK_SKIP_PIXELS,mL),e.pixelStorei(e.UNPACK_SKIP_ROWS,OL)}}function Y(o,M,V){let S=e.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(S=e.TEXTURE_2D_ARRAY),M.isData3DTexture&&(S=e.TEXTURE_3D);let p=TL(o,M),T=M.source;I.bindTexture(S,o.__webglTexture,e.TEXTURE0+V);let PL=N.get(T);if(T.version!==PL.__version||p===!0){I.activeTexture(e.TEXTURE0+V);let W=SL.getPrimaries(SL.workingColorSpace),mL=M.colorSpace===yN?null:SL.getPrimaries(M.colorSpace),OL=M.colorSpace===yN||W===mL?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,OL);let IL=K(M.image,!1,t.maxTextureSize);IL=k(M,IL);let FL=P.convert(M.format,M.colorSpace),uL=P.convert(M.type),xL=x(M.internalFormat,FL,uL,M.colorSpace,M.isVideoTexture);RL(S,M);let rL,UL=M.mipmaps,E=M.isVideoTexture!==!0,tL=PL.__version===void 0||p===!0,QL=T.dataReady,KL=Z(M,IL);if(M.isDepthTexture)xL=H(M.format===$e,M.type),tL&&(E?I.texStorage2D(e.TEXTURE_2D,1,xL,IL.width,IL.height):I.texImage2D(e.TEXTURE_2D,0,xL,IL.width,IL.height,0,FL,uL,null));else if(M.isDataTexture)if(UL.length>0){E&&tL&&I.texStorage2D(e.TEXTURE_2D,KL,xL,UL[0].width,UL[0].height);for(let LL=0,C=UL.length;LL<C;LL++)rL=UL[LL],E?QL&&I.texSubImage2D(e.TEXTURE_2D,LL,0,0,rL.width,rL.height,FL,uL,rL.data):I.texImage2D(e.TEXTURE_2D,LL,xL,rL.width,rL.height,0,FL,uL,rL.data);M.generateMipmaps=!1}else E?(tL&&I.texStorage2D(e.TEXTURE_2D,KL,xL,IL.width,IL.height),QL&&YL(M,IL,FL,uL)):I.texImage2D(e.TEXTURE_2D,0,xL,IL.width,IL.height,0,FL,uL,IL.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){E&&tL&&I.texStorage3D(e.TEXTURE_2D_ARRAY,KL,xL,UL[0].width,UL[0].height,IL.depth);for(let LL=0,C=UL.length;LL<C;LL++)if(rL=UL[LL],M.format!==uI)if(FL!==null)if(E){if(QL)if(M.layerUpdates.size>0){let oL=ci(rL.width,rL.height,M.format,M.type);for(let pL of M.layerUpdates){let nI=rL.data.subarray(pL*oL/rL.data.BYTES_PER_ELEMENT,(pL+1)*oL/rL.data.BYTES_PER_ELEMENT);I.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,LL,0,0,pL,rL.width,rL.height,1,FL,nI)}M.clearLayerUpdates()}else I.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,LL,0,0,0,rL.width,rL.height,IL.depth,FL,rL.data)}else I.compressedTexImage3D(e.TEXTURE_2D_ARRAY,LL,xL,rL.width,rL.height,IL.depth,0,rL.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else E?QL&&I.texSubImage3D(e.TEXTURE_2D_ARRAY,LL,0,0,0,rL.width,rL.height,IL.depth,FL,uL,rL.data):I.texImage3D(e.TEXTURE_2D_ARRAY,LL,xL,rL.width,rL.height,IL.depth,0,FL,uL,rL.data)}else{E&&tL&&I.texStorage2D(e.TEXTURE_2D,KL,xL,UL[0].width,UL[0].height);for(let LL=0,C=UL.length;LL<C;LL++)rL=UL[LL],M.format!==uI?FL!==null?E?QL&&I.compressedTexSubImage2D(e.TEXTURE_2D,LL,0,0,rL.width,rL.height,FL,rL.data):I.compressedTexImage2D(e.TEXTURE_2D,LL,xL,rL.width,rL.height,0,rL.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):E?QL&&I.texSubImage2D(e.TEXTURE_2D,LL,0,0,rL.width,rL.height,FL,uL,rL.data):I.texImage2D(e.TEXTURE_2D,LL,xL,rL.width,rL.height,0,FL,uL,rL.data)}else if(M.isDataArrayTexture)if(E){if(tL&&I.texStorage3D(e.TEXTURE_2D_ARRAY,KL,xL,IL.width,IL.height,IL.depth),QL)if(M.layerUpdates.size>0){let LL=ci(IL.width,IL.height,M.format,M.type);for(let C of M.layerUpdates){let oL=IL.data.subarray(C*LL/IL.data.BYTES_PER_ELEMENT,(C+1)*LL/IL.data.BYTES_PER_ELEMENT);I.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,C,IL.width,IL.height,1,FL,uL,oL)}M.clearLayerUpdates()}else I.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,IL.width,IL.height,IL.depth,FL,uL,IL.data)}else I.texImage3D(e.TEXTURE_2D_ARRAY,0,xL,IL.width,IL.height,IL.depth,0,FL,uL,IL.data);else if(M.isData3DTexture)E?(tL&&I.texStorage3D(e.TEXTURE_3D,KL,xL,IL.width,IL.height,IL.depth),QL&&I.texSubImage3D(e.TEXTURE_3D,0,0,0,0,IL.width,IL.height,IL.depth,FL,uL,IL.data)):I.texImage3D(e.TEXTURE_3D,0,xL,IL.width,IL.height,IL.depth,0,FL,uL,IL.data);else if(M.isFramebufferTexture){if(tL)if(E)I.texStorage2D(e.TEXTURE_2D,KL,xL,IL.width,IL.height);else{let LL=IL.width,C=IL.height;for(let oL=0;oL<KL;oL++)I.texImage2D(e.TEXTURE_2D,oL,xL,LL,C,0,FL,uL,null),LL>>=1,C>>=1}}else if(UL.length>0){if(E&&tL){let LL=JL(UL[0]);I.texStorage2D(e.TEXTURE_2D,KL,xL,LL.width,LL.height)}for(let LL=0,C=UL.length;LL<C;LL++)rL=UL[LL],E?QL&&I.texSubImage2D(e.TEXTURE_2D,LL,0,0,FL,uL,rL):I.texImage2D(e.TEXTURE_2D,LL,xL,FL,uL,rL);M.generateMipmaps=!1}else if(E){if(tL){let LL=JL(IL);I.texStorage2D(e.TEXTURE_2D,KL,xL,LL.width,LL.height)}QL&&I.texSubImage2D(e.TEXTURE_2D,0,0,0,FL,uL,IL)}else I.texImage2D(e.TEXTURE_2D,0,xL,FL,uL,IL);c(M)&&m(S),PL.__version=T.version,M.onUpdate&&M.onUpdate(M)}o.__version=M.version}function g(o,M,V){if(M.image.length!==6)return;let S=TL(o,M),p=M.source;I.bindTexture(e.TEXTURE_CUBE_MAP,o.__webglTexture,e.TEXTURE0+V);let T=N.get(p);if(p.version!==T.__version||S===!0){I.activeTexture(e.TEXTURE0+V);let PL=SL.getPrimaries(SL.workingColorSpace),W=M.colorSpace===yN?null:SL.getPrimaries(M.colorSpace),mL=M.colorSpace===yN||PL===W?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,mL);let OL=M.isCompressedTexture||M.image[0].isCompressedTexture,IL=M.image[0]&&M.image[0].isDataTexture,FL=[];for(let C=0;C<6;C++)!OL&&!IL?FL[C]=K(M.image[C],!0,t.maxCubemapSize):FL[C]=IL?M.image[C].image:M.image[C],FL[C]=k(M,FL[C]);let uL=FL[0],xL=P.convert(M.format,M.colorSpace),rL=P.convert(M.type),UL=x(M.internalFormat,xL,rL,M.colorSpace),E=M.isVideoTexture!==!0,tL=T.__version===void 0||S===!0,QL=p.dataReady,KL=Z(M,uL);RL(e.TEXTURE_CUBE_MAP,M);let LL;if(OL){E&&tL&&I.texStorage2D(e.TEXTURE_CUBE_MAP,KL,UL,uL.width,uL.height);for(let C=0;C<6;C++){LL=FL[C].mipmaps;for(let oL=0;oL<LL.length;oL++){let pL=LL[oL];M.format!==uI?xL!==null?E?QL&&I.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+C,oL,0,0,pL.width,pL.height,xL,pL.data):I.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+C,oL,UL,pL.width,pL.height,0,pL.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):E?QL&&I.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+C,oL,0,0,pL.width,pL.height,xL,rL,pL.data):I.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+C,oL,UL,pL.width,pL.height,0,xL,rL,pL.data)}}}else{if(LL=M.mipmaps,E&&tL){LL.length>0&&KL++;let C=JL(FL[0]);I.texStorage2D(e.TEXTURE_CUBE_MAP,KL,UL,C.width,C.height)}for(let C=0;C<6;C++)if(IL){E?QL&&I.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,FL[C].width,FL[C].height,xL,rL,FL[C].data):I.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,UL,FL[C].width,FL[C].height,0,xL,rL,FL[C].data);for(let oL=0;oL<LL.length;oL++){let nI=LL[oL].image[C].image;E?QL&&I.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+C,oL+1,0,0,nI.width,nI.height,xL,rL,nI.data):I.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+C,oL+1,UL,nI.width,nI.height,0,xL,rL,nI.data)}}else{E?QL&&I.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,xL,rL,FL[C]):I.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,UL,xL,rL,FL[C]);for(let oL=0;oL<LL.length;oL++){let pL=LL[oL];E?QL&&I.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+C,oL+1,0,0,xL,rL,pL.image[C]):I.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+C,oL+1,UL,xL,rL,pL.image[C])}}}c(M)&&m(e.TEXTURE_CUBE_MAP),T.__version=p.version,M.onUpdate&&M.onUpdate(M)}o.__version=M.version}function $L(o,M,V,S,p,T){let PL=P.convert(V.format,V.colorSpace),W=P.convert(V.type),mL=x(V.internalFormat,PL,W,V.colorSpace),OL=N.get(M),IL=N.get(V);if(IL.__renderTarget=M,!OL.__hasExternalTextures){let FL=Math.max(1,M.width>>T),uL=Math.max(1,M.height>>T);p===e.TEXTURE_3D||p===e.TEXTURE_2D_ARRAY?I.texImage3D(p,T,mL,FL,uL,M.depth,0,PL,W,null):I.texImage2D(p,T,mL,FL,uL,0,PL,W,null)}I.bindFramebuffer(e.FRAMEBUFFER,o),ML(M)?Q.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,S,p,IL.__webglTexture,0,PI(M)):(p===e.TEXTURE_2D||p>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&p<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,S,p,IL.__webglTexture,T),I.bindFramebuffer(e.FRAMEBUFFER,null)}function aL(o,M,V){if(e.bindRenderbuffer(e.RENDERBUFFER,o),M.depthBuffer){let S=M.depthTexture,p=S&&S.isDepthTexture?S.type:null,T=H(M.stencilBuffer,p),PL=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,W=PI(M);ML(M)?Q.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,W,T,M.width,M.height):V?e.renderbufferStorageMultisample(e.RENDERBUFFER,W,T,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,T,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,PL,e.RENDERBUFFER,o)}else{let S=M.textures;for(let p=0;p<S.length;p++){let T=S[p],PL=P.convert(T.format,T.colorSpace),W=P.convert(T.type),mL=x(T.internalFormat,PL,W,T.colorSpace),OL=PI(M);V&&ML(M)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,OL,mL,M.width,M.height):ML(M)?Q.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,OL,mL,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,mL,M.width,M.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function GL(o,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(e.FRAMEBUFFER,o),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let S=N.get(M.depthTexture);S.__renderTarget=M,(!S.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),w(M.depthTexture,0);let p=S.__webglTexture,T=PI(M);if(M.depthTexture.format===Yt)ML(M)?Q.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,p,0,T):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,p,0);else if(M.depthTexture.format===$e)ML(M)?Q.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,p,0,T):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,p,0);else throw new Error("Unknown depthTexture format")}function ZL(o){let M=N.get(o),V=o.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==o.depthTexture){let S=o.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),S){let p=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,S.removeEventListener("dispose",p)};S.addEventListener("dispose",p),M.__depthDisposeCallback=p}M.__boundDepthTexture=S}if(o.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");let S=o.texture.mipmaps;S&&S.length>0?GL(M.__webglFramebuffer[0],o):GL(M.__webglFramebuffer,o)}else if(V){M.__webglDepthbuffer=[];for(let S=0;S<6;S++)if(I.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[S]),M.__webglDepthbuffer[S]===void 0)M.__webglDepthbuffer[S]=e.createRenderbuffer(),aL(M.__webglDepthbuffer[S],o,!1);else{let p=o.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,T=M.__webglDepthbuffer[S];e.bindRenderbuffer(e.RENDERBUFFER,T),e.framebufferRenderbuffer(e.FRAMEBUFFER,p,e.RENDERBUFFER,T)}}else{let S=o.texture.mipmaps;if(S&&S.length>0?I.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[0]):I.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=e.createRenderbuffer(),aL(M.__webglDepthbuffer,o,!1);else{let p=o.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,T=M.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,T),e.framebufferRenderbuffer(e.FRAMEBUFFER,p,e.RENDERBUFFER,T)}}I.bindFramebuffer(e.FRAMEBUFFER,null)}function cI(o,M,V){let S=N.get(o);M!==void 0&&$L(S.__webglFramebuffer,o,o.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),V!==void 0&&ZL(o)}function l(o){let M=o.texture,V=N.get(o),S=N.get(M);o.addEventListener("dispose",z);let p=o.textures,T=o.isWebGLCubeRenderTarget===!0,PL=p.length>1;if(PL||(S.__webglTexture===void 0&&(S.__webglTexture=e.createTexture()),S.__version=M.version,n.memory.textures++),T){V.__webglFramebuffer=[];for(let W=0;W<6;W++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[W]=[];for(let mL=0;mL<M.mipmaps.length;mL++)V.__webglFramebuffer[W][mL]=e.createFramebuffer()}else V.__webglFramebuffer[W]=e.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let W=0;W<M.mipmaps.length;W++)V.__webglFramebuffer[W]=e.createFramebuffer()}else V.__webglFramebuffer=e.createFramebuffer();if(PL)for(let W=0,mL=p.length;W<mL;W++){let OL=N.get(p[W]);OL.__webglTexture===void 0&&(OL.__webglTexture=e.createTexture(),n.memory.textures++)}if(o.samples>0&&ML(o)===!1){V.__webglMultisampledFramebuffer=e.createFramebuffer(),V.__webglColorRenderbuffer=[],I.bindFramebuffer(e.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let W=0;W<p.length;W++){let mL=p[W];V.__webglColorRenderbuffer[W]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,V.__webglColorRenderbuffer[W]);let OL=P.convert(mL.format,mL.colorSpace),IL=P.convert(mL.type),FL=x(mL.internalFormat,OL,IL,mL.colorSpace,o.isXRRenderTarget===!0),uL=PI(o);e.renderbufferStorageMultisample(e.RENDERBUFFER,uL,FL,o.width,o.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+W,e.RENDERBUFFER,V.__webglColorRenderbuffer[W])}e.bindRenderbuffer(e.RENDERBUFFER,null),o.depthBuffer&&(V.__webglDepthRenderbuffer=e.createRenderbuffer(),aL(V.__webglDepthRenderbuffer,o,!0)),I.bindFramebuffer(e.FRAMEBUFFER,null)}}if(T){I.bindTexture(e.TEXTURE_CUBE_MAP,S.__webglTexture),RL(e.TEXTURE_CUBE_MAP,M);for(let W=0;W<6;W++)if(M.mipmaps&&M.mipmaps.length>0)for(let mL=0;mL<M.mipmaps.length;mL++)$L(V.__webglFramebuffer[W][mL],o,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+W,mL);else $L(V.__webglFramebuffer[W],o,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);c(M)&&m(e.TEXTURE_CUBE_MAP),I.unbindTexture()}else if(PL){for(let W=0,mL=p.length;W<mL;W++){let OL=p[W],IL=N.get(OL),FL=e.TEXTURE_2D;(o.isWebGL3DRenderTarget||o.isWebGLArrayRenderTarget)&&(FL=o.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),I.bindTexture(FL,IL.__webglTexture),RL(FL,OL),$L(V.__webglFramebuffer,o,OL,e.COLOR_ATTACHMENT0+W,FL,0),c(OL)&&m(FL)}I.unbindTexture()}else{let W=e.TEXTURE_2D;if((o.isWebGL3DRenderTarget||o.isWebGLArrayRenderTarget)&&(W=o.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),I.bindTexture(W,S.__webglTexture),RL(W,M),M.mipmaps&&M.mipmaps.length>0)for(let mL=0;mL<M.mipmaps.length;mL++)$L(V.__webglFramebuffer[mL],o,M,e.COLOR_ATTACHMENT0,W,mL);else $L(V.__webglFramebuffer,o,M,e.COLOR_ATTACHMENT0,W,0);c(M)&&m(W),I.unbindTexture()}o.depthBuffer&&ZL(o)}function WL(o){let M=o.textures;for(let V=0,S=M.length;V<S;V++){let p=M[V];if(c(p)){let T=f(o),PL=N.get(p).__webglTexture;I.bindTexture(T,PL),m(T),I.unbindTexture()}}}let bL=[],zL=[];function sL(o){if(o.samples>0){if(ML(o)===!1){let M=o.textures,V=o.width,S=o.height,p=e.COLOR_BUFFER_BIT,T=o.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,PL=N.get(o),W=M.length>1;if(W)for(let OL=0;OL<M.length;OL++)I.bindFramebuffer(e.FRAMEBUFFER,PL.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+OL,e.RENDERBUFFER,null),I.bindFramebuffer(e.FRAMEBUFFER,PL.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+OL,e.TEXTURE_2D,null,0);I.bindFramebuffer(e.READ_FRAMEBUFFER,PL.__webglMultisampledFramebuffer);let mL=o.texture.mipmaps;mL&&mL.length>0?I.bindFramebuffer(e.DRAW_FRAMEBUFFER,PL.__webglFramebuffer[0]):I.bindFramebuffer(e.DRAW_FRAMEBUFFER,PL.__webglFramebuffer);for(let OL=0;OL<M.length;OL++){if(o.resolveDepthBuffer&&(o.depthBuffer&&(p|=e.DEPTH_BUFFER_BIT),o.stencilBuffer&&o.resolveStencilBuffer&&(p|=e.STENCIL_BUFFER_BIT)),W){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,PL.__webglColorRenderbuffer[OL]);let IL=N.get(M[OL]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,IL,0)}e.blitFramebuffer(0,0,V,S,0,0,V,S,p,e.NEAREST),r===!0&&(bL.length=0,zL.length=0,bL.push(e.COLOR_ATTACHMENT0+OL),o.depthBuffer&&o.resolveDepthBuffer===!1&&(bL.push(T),zL.push(T),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,zL)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,bL))}if(I.bindFramebuffer(e.READ_FRAMEBUFFER,null),I.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),W)for(let OL=0;OL<M.length;OL++){I.bindFramebuffer(e.FRAMEBUFFER,PL.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+OL,e.RENDERBUFFER,PL.__webglColorRenderbuffer[OL]);let IL=N.get(M[OL]).__webglTexture;I.bindFramebuffer(e.FRAMEBUFFER,PL.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+OL,e.TEXTURE_2D,IL,0)}I.bindFramebuffer(e.DRAW_FRAMEBUFFER,PL.__webglMultisampledFramebuffer)}else if(o.depthBuffer&&o.resolveDepthBuffer===!1&&r){let M=o.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[M])}}}function PI(o){return Math.min(t.maxSamples,o.samples)}function ML(o){let M=N.get(o);return o.samples>0&&L.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function VL(o){let M=n.render.frame;j.get(o)!==M&&(j.set(o,M),o.update())}function k(o,M){let V=o.colorSpace,S=o.format,p=o.type;return o.isCompressedTexture===!0||o.isVideoTexture===!0||V!==$I&&V!==yN&&(SL.getTransfer(V)===II?(S!==uI||p!==mN)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function JL(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement?(i.width=o.naturalWidth||o.width,i.height=o.naturalHeight||o.height):typeof VideoFrame<"u"&&o instanceof VideoFrame?(i.width=o.displayWidth,i.height=o.displayHeight):(i.width=o.width,i.height=o.height),i}this.allocateTextureUnit=y,this.resetTextureUnits=v,this.setTexture2D=w,this.setTexture2DArray=U,this.setTexture3D=B,this.setTextureCube=_,this.rebindTextures=cI,this.setupRenderTarget=l,this.updateRenderTargetMipmap=WL,this.updateMultisampleRenderTarget=sL,this.setupDepthRenderbuffer=ZL,this.setupFrameBufferTexture=$L,this.useMultisampledRTT=ML}function cc(e,L){function I(N,t=yN){let P,n=SL.getTransfer(t);if(N===mN)return e.UNSIGNED_BYTE;if(N===Mn)return e.UNSIGNED_SHORT_4_4_4_4;if(N===Kn)return e.UNSIGNED_SHORT_5_5_5_1;if(N===Ii)return e.UNSIGNED_INT_5_9_9_9_REV;if(N===Ni)return e.UNSIGNED_INT_10F_11F_11F_REV;if(N===WQ)return e.BYTE;if(N===Li)return e.SHORT;if(N===Fe)return e.UNSIGNED_SHORT;if(N===dn)return e.INT;if(N===WN)return e.UNSIGNED_INT;if(N===RI)return e.FLOAT;if(N===kI)return e.HALF_FLOAT;if(N===ti)return e.ALPHA;if(N===ei)return e.RGB;if(N===uI)return e.RGBA;if(N===Yt)return e.DEPTH_COMPONENT;if(N===$e)return e.DEPTH_STENCIL;if(N===Gn)return e.RED;if(N===sn)return e.RED_INTEGER;if(N===Pi)return e.RG;if(N===On)return e.RG_INTEGER;if(N===Hn)return e.RGBA_INTEGER;if(N===QP||N===iP||N===rP||N===jP)if(n===II)if(P=L.get("WEBGL_compressed_texture_s3tc_srgb"),P!==null){if(N===QP)return P.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(N===iP)return P.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(N===rP)return P.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(N===jP)return P.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(P=L.get("WEBGL_compressed_texture_s3tc"),P!==null){if(N===QP)return P.COMPRESSED_RGB_S3TC_DXT1_EXT;if(N===iP)return P.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(N===rP)return P.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(N===jP)return P.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(N===on||N===xn||N===fn||N===Zn)if(P=L.get("WEBGL_compressed_texture_pvrtc"),P!==null){if(N===on)return P.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(N===xn)return P.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(N===fn)return P.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(N===Zn)return P.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(N===ln||N===Rn||N===an)if(P=L.get("WEBGL_compressed_texture_etc"),P!==null){if(N===ln||N===Rn)return n===II?P.COMPRESSED_SRGB8_ETC2:P.COMPRESSED_RGB8_ETC2;if(N===an)return n===II?P.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:P.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(N===zn||N===Dn||N===En||N===un||N===hn||N===bn||N===Vn||N===pn||N===vn||N===qn||N===yn||N===Un||N===Tn||N===Xn)if(P=L.get("WEBGL_compressed_texture_astc"),P!==null){if(N===zn)return n===II?P.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:P.COMPRESSED_RGBA_ASTC_4x4_KHR;if(N===Dn)return n===II?P.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:P.COMPRESSED_RGBA_ASTC_5x4_KHR;if(N===En)return n===II?P.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:P.COMPRESSED_RGBA_ASTC_5x5_KHR;if(N===un)return n===II?P.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:P.COMPRESSED_RGBA_ASTC_6x5_KHR;if(N===hn)return n===II?P.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:P.COMPRESSED_RGBA_ASTC_6x6_KHR;if(N===bn)return n===II?P.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:P.COMPRESSED_RGBA_ASTC_8x5_KHR;if(N===Vn)return n===II?P.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:P.COMPRESSED_RGBA_ASTC_8x6_KHR;if(N===pn)return n===II?P.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:P.COMPRESSED_RGBA_ASTC_8x8_KHR;if(N===vn)return n===II?P.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:P.COMPRESSED_RGBA_ASTC_10x5_KHR;if(N===qn)return n===II?P.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:P.COMPRESSED_RGBA_ASTC_10x6_KHR;if(N===yn)return n===II?P.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:P.COMPRESSED_RGBA_ASTC_10x8_KHR;if(N===Un)return n===II?P.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:P.COMPRESSED_RGBA_ASTC_10x10_KHR;if(N===Tn)return n===II?P.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:P.COMPRESSED_RGBA_ASTC_12x10_KHR;if(N===Xn)return n===II?P.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:P.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(N===An||N===wn||N===_n)if(P=L.get("EXT_texture_compression_bptc"),P!==null){if(N===An)return n===II?P.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:P.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(N===wn)return P.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(N===_n)return P.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(N===Sn||N===kn||N===Yn||N===Cn)if(P=L.get("EXT_texture_compression_rgtc"),P!==null){if(N===Sn)return P.COMPRESSED_RED_RGTC1_EXT;if(N===kn)return P.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(N===Yn)return P.COMPRESSED_RED_GREEN_RGTC2_EXT;if(N===Cn)return P.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return N===me?e.UNSIGNED_INT_24_8:e[N]!==void 0?e[N]:null}return{convert:I}}var dc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mc=`
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

}`,Ri=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(L,I){if(this.texture===null){let N=new Ye(L.texture);(L.depthNear!==I.depthNear||L.depthFar!==I.depthFar)&&(this.depthNear=L.depthNear,this.depthFar=L.depthFar),this.texture=N}}getMesh(L){if(this.texture!==null&&this.mesh===null){let I=L.cameras[0].viewport,N=new JN({vertexShader:dc,fragmentShader:Mc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:I.z},depthHeight:{value:I.w}}});this.mesh=new sI(new dt(20,20),N)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ai=class extends uN{constructor(L,I){super();let N=this,t=null,P=1,n=null,Q="local-floor",r=1,i=null,j=null,J=null,F=null,$=null,d=null,K=typeof XRWebGLBinding<"u",c=new Ri,m={},f=I.getContextAttributes(),x=null,H=null,Z=[],R=[],z=new AL,D=null,s=new MI;s.viewport=new gL;let G=new MI;G.viewport=new gL;let a=[s,G],v=new tn,y=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let g=Z[Y];return g===void 0&&(g=new te,Z[Y]=g),g.getTargetRaySpace()},this.getControllerGrip=function(Y){let g=Z[Y];return g===void 0&&(g=new te,Z[Y]=g),g.getGripSpace()},this.getHand=function(Y){let g=Z[Y];return g===void 0&&(g=new te,Z[Y]=g),g.getHandSpace()};function w(Y){let g=R.indexOf(Y.inputSource);if(g===-1)return;let $L=Z[g];$L!==void 0&&($L.update(Y.inputSource,Y.frame,i||n),$L.dispatchEvent({type:Y.type,data:Y.inputSource}))}function U(){t.removeEventListener("select",w),t.removeEventListener("selectstart",w),t.removeEventListener("selectend",w),t.removeEventListener("squeeze",w),t.removeEventListener("squeezestart",w),t.removeEventListener("squeezeend",w),t.removeEventListener("end",U),t.removeEventListener("inputsourceschange",B);for(let Y=0;Y<Z.length;Y++){let g=R[Y];g!==null&&(R[Y]=null,Z[Y].disconnect(g))}y=null,q=null,c.reset();for(let Y in m)delete m[Y];L.setRenderTarget(x),$=null,F=null,J=null,t=null,H=null,YL.stop(),N.isPresenting=!1,L.setPixelRatio(D),L.setSize(z.width,z.height,!1),N.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){P=Y,N.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){Q=Y,N.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return i||n},this.setReferenceSpace=function(Y){i=Y},this.getBaseLayer=function(){return F!==null?F:$},this.getBinding=function(){return J===null&&K&&(J=new XRWebGLBinding(t,I)),J},this.getFrame=function(){return d},this.getSession=function(){return t},this.setSession=async function(Y){if(t=Y,t!==null){if(x=L.getRenderTarget(),t.addEventListener("select",w),t.addEventListener("selectstart",w),t.addEventListener("selectend",w),t.addEventListener("squeeze",w),t.addEventListener("squeezestart",w),t.addEventListener("squeezeend",w),t.addEventListener("end",U),t.addEventListener("inputsourceschange",B),f.xrCompatible!==!0&&await I.makeXRCompatible(),D=L.getPixelRatio(),L.getSize(z),K&&"createProjectionLayer"in XRWebGLBinding.prototype){let $L=null,aL=null,GL=null;f.depth&&(GL=f.stencil?I.DEPTH24_STENCIL8:I.DEPTH_COMPONENT24,$L=f.stencil?$e:Yt,aL=f.stencil?me:WN);let ZL={colorFormat:I.RGBA8,depthFormat:GL,scaleFactor:P};J=this.getBinding(),F=J.createProjectionLayer(ZL),t.updateRenderState({layers:[F]}),L.setPixelRatio(1),L.setSize(F.textureWidth,F.textureHeight,!1),H=new MN(F.textureWidth,F.textureHeight,{format:uI,type:mN,depthTexture:new ke(F.textureWidth,F.textureHeight,aL,void 0,void 0,void 0,void 0,void 0,void 0,$L),stencilBuffer:f.stencil,colorSpace:L.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:F.ignoreDepthValues===!1,resolveStencilBuffer:F.ignoreDepthValues===!1})}else{let $L={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:P};$=new XRWebGLLayer(t,I,$L),t.updateRenderState({baseLayer:$}),L.setPixelRatio(1),L.setSize($.framebufferWidth,$.framebufferHeight,!1),H=new MN($.framebufferWidth,$.framebufferHeight,{format:uI,type:mN,colorSpace:L.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:$.ignoreDepthValues===!1,resolveStencilBuffer:$.ignoreDepthValues===!1})}H.isXRRenderTarget=!0,this.setFoveation(r),i=null,n=await t.requestReferenceSpace(Q),YL.setContext(t),YL.start(),N.isPresenting=!0,N.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(t!==null)return t.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function B(Y){for(let g=0;g<Y.removed.length;g++){let $L=Y.removed[g],aL=R.indexOf($L);aL>=0&&(R[aL]=null,Z[aL].disconnect($L))}for(let g=0;g<Y.added.length;g++){let $L=Y.added[g],aL=R.indexOf($L);if(aL===-1){for(let ZL=0;ZL<Z.length;ZL++)if(ZL>=R.length){R.push($L),aL=ZL;break}else if(R[ZL]===null){R[ZL]=$L,aL=ZL;break}if(aL===-1)break}let GL=Z[aL];GL&&GL.connect($L)}}let _=new u,eL=new u;function nL(Y,g,$L){_.setFromMatrixPosition(g.matrixWorld),eL.setFromMatrixPosition($L.matrixWorld);let aL=_.distanceTo(eL),GL=g.projectionMatrix.elements,ZL=$L.projectionMatrix.elements,cI=GL[14]/(GL[10]-1),l=GL[14]/(GL[10]+1),WL=(GL[9]+1)/GL[5],bL=(GL[9]-1)/GL[5],zL=(GL[8]-1)/GL[0],sL=(ZL[8]+1)/ZL[0],PI=cI*zL,ML=cI*sL,VL=aL/(-zL+sL),k=VL*-zL;if(g.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(k),Y.translateZ(VL),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),GL[10]===-1)Y.projectionMatrix.copy(g.projectionMatrix),Y.projectionMatrixInverse.copy(g.projectionMatrixInverse);else{let JL=cI+VL,o=l+VL,M=PI-k,V=ML+(aL-k),S=WL*l/o*JL,p=bL*l/o*JL;Y.projectionMatrix.makePerspective(M,V,S,p,JL,o),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function dL(Y,g){g===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(g.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(t===null)return;let g=Y.near,$L=Y.far;c.texture!==null&&(c.depthNear>0&&(g=c.depthNear),c.depthFar>0&&($L=c.depthFar)),v.near=G.near=s.near=g,v.far=G.far=s.far=$L,(y!==v.near||q!==v.far)&&(t.updateRenderState({depthNear:v.near,depthFar:v.far}),y=v.near,q=v.far),v.layers.mask=Y.layers.mask|6,s.layers.mask=v.layers.mask&3,G.layers.mask=v.layers.mask&5;let aL=Y.parent,GL=v.cameras;dL(v,aL);for(let ZL=0;ZL<GL.length;ZL++)dL(GL[ZL],aL);GL.length===2?nL(v,s,G):v.projectionMatrix.copy(s.projectionMatrix),RL(Y,v,aL)};function RL(Y,g,$L){$L===null?Y.matrix.copy(g.matrixWorld):(Y.matrix.copy($L.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(g.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(g.projectionMatrix),Y.projectionMatrixInverse.copy(g.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=mt*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(F===null&&$===null))return r},this.setFoveation=function(Y){r=Y,F!==null&&(F.fixedFoveation=Y),$!==null&&$.fixedFoveation!==void 0&&($.fixedFoveation=Y)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(v)},this.getCameraTexture=function(Y){return m[Y]};let TL=null;function kL(Y,g){if(j=g.getViewerPose(i||n),d=g,j!==null){let $L=j.views;$!==null&&(L.setRenderTargetFramebuffer(H,$.framebuffer),L.setRenderTarget(H));let aL=!1;$L.length!==v.cameras.length&&(v.cameras.length=0,aL=!0);for(let l=0;l<$L.length;l++){let WL=$L[l],bL=null;if($!==null)bL=$.getViewport(WL);else{let sL=J.getViewSubImage(F,WL);bL=sL.viewport,l===0&&(L.setRenderTargetTextures(H,sL.colorTexture,sL.depthStencilTexture),L.setRenderTarget(H))}let zL=a[l];zL===void 0&&(zL=new MI,zL.layers.enable(l),zL.viewport=new gL,a[l]=zL),zL.matrix.fromArray(WL.transform.matrix),zL.matrix.decompose(zL.position,zL.quaternion,zL.scale),zL.projectionMatrix.fromArray(WL.projectionMatrix),zL.projectionMatrixInverse.copy(zL.projectionMatrix).invert(),zL.viewport.set(bL.x,bL.y,bL.width,bL.height),l===0&&(v.matrix.copy(zL.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),aL===!0&&v.cameras.push(zL)}let GL=t.enabledFeatures;if(GL&&GL.includes("depth-sensing")&&t.depthUsage=="gpu-optimized"&&K){J=N.getBinding();let l=J.getDepthInformation($L[0]);l&&l.isValid&&l.texture&&c.init(l,t.renderState)}if(GL&&GL.includes("camera-access")&&K){L.state.unbindTexture(),J=N.getBinding();for(let l=0;l<$L.length;l++){let WL=$L[l].camera;if(WL){let bL=m[WL];bL||(bL=new Ye,m[WL]=bL);let zL=J.getCameraImage(WL);bL.sourceTexture=zL}}}}for(let $L=0;$L<Z.length;$L++){let aL=R[$L],GL=Z[$L];aL!==null&&GL!==void 0&&GL.update(aL,g,i||n)}TL&&TL(Y,g),g.detectedPlanes&&N.dispatchEvent({type:"planesdetected",data:g}),d=null}let YL=new m9;YL.setAnimationLoop(kL),this.setAnimationLoop=function(Y){TL=Y},this.dispose=function(){}}},Rt=new jN,Kc=new qL;function Gc(e,L){function I(c,m){c.matrixAutoUpdate===!0&&c.updateMatrix(),m.value.copy(c.matrix)}function N(c,m){m.color.getRGB(c.fogColor.value,Fi(e)),m.isFog?(c.fogNear.value=m.near,c.fogFar.value=m.far):m.isFogExp2&&(c.fogDensity.value=m.density)}function t(c,m,f,x,H){m.isMeshBasicMaterial||m.isMeshLambertMaterial?P(c,m):m.isMeshToonMaterial?(P(c,m),J(c,m)):m.isMeshPhongMaterial?(P(c,m),j(c,m)):m.isMeshStandardMaterial?(P(c,m),F(c,m),m.isMeshPhysicalMaterial&&$(c,m,H)):m.isMeshMatcapMaterial?(P(c,m),d(c,m)):m.isMeshDepthMaterial?P(c,m):m.isMeshDistanceMaterial?(P(c,m),K(c,m)):m.isMeshNormalMaterial?P(c,m):m.isLineBasicMaterial?(n(c,m),m.isLineDashedMaterial&&Q(c,m)):m.isPointsMaterial?r(c,m,f,x):m.isSpriteMaterial?i(c,m):m.isShadowMaterial?(c.color.value.copy(m.color),c.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function P(c,m){c.opacity.value=m.opacity,m.color&&c.diffuse.value.copy(m.color),m.emissive&&c.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(c.map.value=m.map,I(m.map,c.mapTransform)),m.alphaMap&&(c.alphaMap.value=m.alphaMap,I(m.alphaMap,c.alphaMapTransform)),m.bumpMap&&(c.bumpMap.value=m.bumpMap,I(m.bumpMap,c.bumpMapTransform),c.bumpScale.value=m.bumpScale,m.side===EI&&(c.bumpScale.value*=-1)),m.normalMap&&(c.normalMap.value=m.normalMap,I(m.normalMap,c.normalMapTransform),c.normalScale.value.copy(m.normalScale),m.side===EI&&c.normalScale.value.negate()),m.displacementMap&&(c.displacementMap.value=m.displacementMap,I(m.displacementMap,c.displacementMapTransform),c.displacementScale.value=m.displacementScale,c.displacementBias.value=m.displacementBias),m.emissiveMap&&(c.emissiveMap.value=m.emissiveMap,I(m.emissiveMap,c.emissiveMapTransform)),m.specularMap&&(c.specularMap.value=m.specularMap,I(m.specularMap,c.specularMapTransform)),m.alphaTest>0&&(c.alphaTest.value=m.alphaTest);let f=L.get(m),x=f.envMap,H=f.envMapRotation;x&&(c.envMap.value=x,Rt.copy(H),Rt.x*=-1,Rt.y*=-1,Rt.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Rt.y*=-1,Rt.z*=-1),c.envMapRotation.value.setFromMatrix4(Kc.makeRotationFromEuler(Rt)),c.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.reflectivity.value=m.reflectivity,c.ior.value=m.ior,c.refractionRatio.value=m.refractionRatio),m.lightMap&&(c.lightMap.value=m.lightMap,c.lightMapIntensity.value=m.lightMapIntensity,I(m.lightMap,c.lightMapTransform)),m.aoMap&&(c.aoMap.value=m.aoMap,c.aoMapIntensity.value=m.aoMapIntensity,I(m.aoMap,c.aoMapTransform))}function n(c,m){c.diffuse.value.copy(m.color),c.opacity.value=m.opacity,m.map&&(c.map.value=m.map,I(m.map,c.mapTransform))}function Q(c,m){c.dashSize.value=m.dashSize,c.totalSize.value=m.dashSize+m.gapSize,c.scale.value=m.scale}function r(c,m,f,x){c.diffuse.value.copy(m.color),c.opacity.value=m.opacity,c.size.value=m.size*f,c.scale.value=x*.5,m.map&&(c.map.value=m.map,I(m.map,c.uvTransform)),m.alphaMap&&(c.alphaMap.value=m.alphaMap,I(m.alphaMap,c.alphaMapTransform)),m.alphaTest>0&&(c.alphaTest.value=m.alphaTest)}function i(c,m){c.diffuse.value.copy(m.color),c.opacity.value=m.opacity,c.rotation.value=m.rotation,m.map&&(c.map.value=m.map,I(m.map,c.mapTransform)),m.alphaMap&&(c.alphaMap.value=m.alphaMap,I(m.alphaMap,c.alphaMapTransform)),m.alphaTest>0&&(c.alphaTest.value=m.alphaTest)}function j(c,m){c.specular.value.copy(m.specular),c.shininess.value=Math.max(m.shininess,1e-4)}function J(c,m){m.gradientMap&&(c.gradientMap.value=m.gradientMap)}function F(c,m){c.metalness.value=m.metalness,m.metalnessMap&&(c.metalnessMap.value=m.metalnessMap,I(m.metalnessMap,c.metalnessMapTransform)),c.roughness.value=m.roughness,m.roughnessMap&&(c.roughnessMap.value=m.roughnessMap,I(m.roughnessMap,c.roughnessMapTransform)),m.envMap&&(c.envMapIntensity.value=m.envMapIntensity)}function $(c,m,f){c.ior.value=m.ior,m.sheen>0&&(c.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),c.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(c.sheenColorMap.value=m.sheenColorMap,I(m.sheenColorMap,c.sheenColorMapTransform)),m.sheenRoughnessMap&&(c.sheenRoughnessMap.value=m.sheenRoughnessMap,I(m.sheenRoughnessMap,c.sheenRoughnessMapTransform))),m.clearcoat>0&&(c.clearcoat.value=m.clearcoat,c.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(c.clearcoatMap.value=m.clearcoatMap,I(m.clearcoatMap,c.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,I(m.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(c.clearcoatNormalMap.value=m.clearcoatNormalMap,I(m.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===EI&&c.clearcoatNormalScale.value.negate())),m.dispersion>0&&(c.dispersion.value=m.dispersion),m.iridescence>0&&(c.iridescence.value=m.iridescence,c.iridescenceIOR.value=m.iridescenceIOR,c.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(c.iridescenceMap.value=m.iridescenceMap,I(m.iridescenceMap,c.iridescenceMapTransform)),m.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=m.iridescenceThicknessMap,I(m.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),m.transmission>0&&(c.transmission.value=m.transmission,c.transmissionSamplerMap.value=f.texture,c.transmissionSamplerSize.value.set(f.width,f.height),m.transmissionMap&&(c.transmissionMap.value=m.transmissionMap,I(m.transmissionMap,c.transmissionMapTransform)),c.thickness.value=m.thickness,m.thicknessMap&&(c.thicknessMap.value=m.thicknessMap,I(m.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=m.attenuationDistance,c.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(c.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(c.anisotropyMap.value=m.anisotropyMap,I(m.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=m.specularIntensity,c.specularColor.value.copy(m.specularColor),m.specularColorMap&&(c.specularColorMap.value=m.specularColorMap,I(m.specularColorMap,c.specularColorMapTransform)),m.specularIntensityMap&&(c.specularIntensityMap.value=m.specularIntensityMap,I(m.specularIntensityMap,c.specularIntensityMapTransform))}function d(c,m){m.matcap&&(c.matcap.value=m.matcap)}function K(c,m){let f=L.get(m).light;c.referencePosition.value.setFromMatrixPosition(f.matrixWorld),c.nearDistance.value=f.shadow.camera.near,c.farDistance.value=f.shadow.camera.far}return{refreshFogUniforms:N,refreshMaterialUniforms:t}}function sc(e,L,I,N){let t={},P={},n=[],Q=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function r(f,x){let H=x.program;N.uniformBlockBinding(f,H)}function i(f,x){let H=t[f.id];H===void 0&&(d(f),H=j(f),t[f.id]=H,f.addEventListener("dispose",c));let Z=x.program;N.updateUBOMapping(f,Z);let R=L.render.frame;P[f.id]!==R&&(F(f),P[f.id]=R)}function j(f){let x=J();f.__bindingPointIndex=x;let H=e.createBuffer(),Z=f.__size,R=f.usage;return e.bindBuffer(e.UNIFORM_BUFFER,H),e.bufferData(e.UNIFORM_BUFFER,Z,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,x,H),H}function J(){for(let f=0;f<Q;f++)if(n.indexOf(f)===-1)return n.push(f),f;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function F(f){let x=t[f.id],H=f.uniforms,Z=f.__cache;e.bindBuffer(e.UNIFORM_BUFFER,x);for(let R=0,z=H.length;R<z;R++){let D=Array.isArray(H[R])?H[R]:[H[R]];for(let s=0,G=D.length;s<G;s++){let a=D[s];if($(a,R,s,Z)===!0){let v=a.__offset,y=Array.isArray(a.value)?a.value:[a.value],q=0;for(let w=0;w<y.length;w++){let U=y[w],B=K(U);typeof U=="number"||typeof U=="boolean"?(a.__data[0]=U,e.bufferSubData(e.UNIFORM_BUFFER,v+q,a.__data)):U.isMatrix3?(a.__data[0]=U.elements[0],a.__data[1]=U.elements[1],a.__data[2]=U.elements[2],a.__data[3]=0,a.__data[4]=U.elements[3],a.__data[5]=U.elements[4],a.__data[6]=U.elements[5],a.__data[7]=0,a.__data[8]=U.elements[6],a.__data[9]=U.elements[7],a.__data[10]=U.elements[8],a.__data[11]=0):(U.toArray(a.__data,q),q+=B.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,v,a.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function $(f,x,H,Z){let R=f.value,z=x+"_"+H;if(Z[z]===void 0)return typeof R=="number"||typeof R=="boolean"?Z[z]=R:Z[z]=R.clone(),!0;{let D=Z[z];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return Z[z]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function d(f){let x=f.uniforms,H=0,Z=16;for(let z=0,D=x.length;z<D;z++){let s=Array.isArray(x[z])?x[z]:[x[z]];for(let G=0,a=s.length;G<a;G++){let v=s[G],y=Array.isArray(v.value)?v.value:[v.value];for(let q=0,w=y.length;q<w;q++){let U=y[q],B=K(U),_=H%Z,eL=_%B.boundary,nL=_+eL;H+=eL,nL!==0&&Z-nL<B.storage&&(H+=Z-nL),v.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=H,H+=B.storage}}}let R=H%Z;return R>0&&(H+=Z-R),f.__size=H,f.__cache={},this}function K(f){let x={boundary:0,storage:0};return typeof f=="number"||typeof f=="boolean"?(x.boundary=4,x.storage=4):f.isVector2?(x.boundary=8,x.storage=8):f.isVector3||f.isColor?(x.boundary=16,x.storage=12):f.isVector4?(x.boundary=16,x.storage=16):f.isMatrix3?(x.boundary=48,x.storage=48):f.isMatrix4?(x.boundary=64,x.storage=64):f.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",f),x}function c(f){let x=f.target;x.removeEventListener("dispose",c);let H=n.indexOf(x.__bindingPointIndex);n.splice(H,1),e.deleteBuffer(t[x.id]),delete t[x.id],delete P[x.id]}function m(){for(let f in t)e.deleteBuffer(t[f]);n=[],t={},P={}}return{bind:r,update:i,dispose:m}}var LQ=class{constructor(L={}){let{canvas:I=vj(),context:N=null,depth:t=!0,stencil:P=!1,alpha:n=!1,antialias:Q=!1,premultipliedAlpha:r=!0,preserveDrawingBuffer:i=!1,powerPreference:j="default",failIfMajorPerformanceCaveat:J=!1,reversedDepthBuffer:F=!1}=L;this.isWebGLRenderer=!0;let $;if(N!==null){if(typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");$=N.getContextAttributes().alpha}else $=n;let d=new Uint32Array(4),K=new Int32Array(4),c=null,m=null,f=[],x=[];this.domElement=I,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qN,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let H=this,Z=!1;this._outputColorSpace=rI;let R=0,z=0,D=null,s=-1,G=null,a=new gL,v=new gL,y=null,q=new lL(0),w=0,U=I.width,B=I.height,_=1,eL=null,nL=null,dL=new gL(0,0,U,B),RL=new gL(0,0,U,B),TL=!1,kL=new Qe,YL=!1,Y=!1,g=new qL,$L=new u,aL=new gL,GL={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ZL=!1;function cI(){return D===null?_:1}let l=N;function WL(O,h){return I.getContext(O,h)}try{let O={alpha:!0,depth:t,stencil:P,antialias:Q,premultipliedAlpha:r,preserveDrawingBuffer:i,powerPreference:j,failIfMajorPerformanceCaveat:J};if("setAttribute"in I&&I.setAttribute("data-engine",`three.js r${"180"}`),I.addEventListener("webglcontextlost",QL,!1),I.addEventListener("webglcontextrestored",KL,!1),I.addEventListener("webglcontextcreationerror",LL,!1),l===null){let h="webgl2";if(l=WL(h,O),l===null)throw WL(h)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let bL,zL,sL,PI,ML,VL,k,JL,o,M,V,S,p,T,PL,W,mL,OL,IL,FL,uL,xL,rL,UL;function E(){bL=new v$(l),bL.init(),xL=new cc(l,bL),zL=new D$(l,bL,L,xL),sL=new mc(l,bL),zL.reversedDepthBuffer&&F&&sL.buffers.depth.setReversed(!0),PI=new U$(l),ML=new Lc,VL=new $c(l,bL,sL,ML,zL,xL,PI),k=new u$(H),JL=new p$(H),o=new SJ(l),rL=new a$(l,o),M=new q$(l,o,PI,rL),V=new X$(l,M,o,PI),IL=new T$(l,zL,VL),W=new E$(ML),S=new W8(H,k,JL,bL,zL,rL,W),p=new Gc(H,ML),T=new Nc,PL=new ic(bL),OL=new R$(H,k,JL,sL,V,$,r),mL=new Jc(H,V,zL),UL=new sc(l,PI,zL,sL),FL=new z$(l,bL,PI),uL=new y$(l,bL,PI),PI.programs=S.programs,H.capabilities=zL,H.extensions=bL,H.properties=ML,H.renderLists=T,H.shadowMap=mL,H.state=sL,H.info=PI}E();let tL=new ai(H,l);this.xr=tL,this.getContext=function(){return l},this.getContextAttributes=function(){return l.getContextAttributes()},this.forceContextLoss=function(){let O=bL.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){let O=bL.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return _},this.setPixelRatio=function(O){O!==void 0&&(_=O,this.setSize(U,B,!1))},this.getSize=function(O){return O.set(U,B)},this.setSize=function(O,h,X=!0){if(tL.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=O,B=h,I.width=Math.floor(O*_),I.height=Math.floor(h*_),X===!0&&(I.style.width=O+"px",I.style.height=h+"px"),this.setViewport(0,0,O,h)},this.getDrawingBufferSize=function(O){return O.set(U*_,B*_).floor()},this.setDrawingBufferSize=function(O,h,X){U=O,B=h,_=X,I.width=Math.floor(O*X),I.height=Math.floor(h*X),this.setViewport(0,0,O,h)},this.getCurrentViewport=function(O){return O.copy(a)},this.getViewport=function(O){return O.copy(dL)},this.setViewport=function(O,h,X,A){O.isVector4?dL.set(O.x,O.y,O.z,O.w):dL.set(O,h,X,A),sL.viewport(a.copy(dL).multiplyScalar(_).round())},this.getScissor=function(O){return O.copy(RL)},this.setScissor=function(O,h,X,A){O.isVector4?RL.set(O.x,O.y,O.z,O.w):RL.set(O,h,X,A),sL.scissor(v.copy(RL).multiplyScalar(_).round())},this.getScissorTest=function(){return TL},this.setScissorTest=function(O){sL.setScissorTest(TL=O)},this.setOpaqueSort=function(O){eL=O},this.setTransparentSort=function(O){nL=O},this.getClearColor=function(O){return O.copy(OL.getClearColor())},this.setClearColor=function(){OL.setClearColor(...arguments)},this.getClearAlpha=function(){return OL.getClearAlpha()},this.setClearAlpha=function(){OL.setClearAlpha(...arguments)},this.clear=function(O=!0,h=!0,X=!0){let A=0;if(O){let b=!1;if(D!==null){let NL=D.texture.format;b=NL===Hn||NL===On||NL===sn}if(b){let NL=D.texture.type,jL=NL===mN||NL===WN||NL===Fe||NL===me||NL===Mn||NL===Kn,HL=OL.getClearColor(),cL=OL.getClearAlpha(),EL=HL.r,hL=HL.g,fL=HL.b;jL?(d[0]=EL,d[1]=hL,d[2]=fL,d[3]=cL,l.clearBufferuiv(l.COLOR,0,d)):(K[0]=EL,K[1]=hL,K[2]=fL,K[3]=cL,l.clearBufferiv(l.COLOR,0,K))}else A|=l.COLOR_BUFFER_BIT}h&&(A|=l.DEPTH_BUFFER_BIT),X&&(A|=l.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),l.clear(A)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){I.removeEventListener("webglcontextlost",QL,!1),I.removeEventListener("webglcontextrestored",KL,!1),I.removeEventListener("webglcontextcreationerror",LL,!1),OL.dispose(),T.dispose(),PL.dispose(),ML.dispose(),k.dispose(),JL.dispose(),V.dispose(),rL.dispose(),UL.dispose(),S.dispose(),tL.dispose(),tL.removeEventListener("sessionstart",$N),tL.removeEventListener("sessionend",ir),Nt.stop()};function QL(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Z=!0}function KL(){console.log("THREE.WebGLRenderer: Context Restored."),Z=!1;let O=PI.autoReset,h=mL.enabled,X=mL.autoUpdate,A=mL.needsUpdate,b=mL.type;E(),PI.autoReset=O,mL.enabled=h,mL.autoUpdate=X,mL.needsUpdate=A,mL.type=b}function LL(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function C(O){let h=O.target;h.removeEventListener("dispose",C),oL(h)}function oL(O){pL(O),ML.remove(O)}function pL(O){let h=ML.get(O).programs;h!==void 0&&(h.forEach(function(X){S.releaseProgram(X)}),O.isShaderMaterial&&S.releaseShaderCache(O))}this.renderBufferDirect=function(O,h,X,A,b,NL){h===null&&(h=GL);let jL=b.isMesh&&b.matrixWorld.determinant()<0,HL=v9(O,h,X,A,b);sL.setMaterial(A,jL);let cL=X.index,EL=1;if(A.wireframe===!0){if(cL=M.getWireframeAttribute(X),cL===void 0)return;EL=2}let hL=X.drawRange,fL=X.attributes.position,_L=hL.start*EL,NI=(hL.start+hL.count)*EL;NL!==null&&(_L=Math.max(_L,NL.start*EL),NI=Math.min(NI,(NL.start+NL.count)*EL)),cL!==null?(_L=Math.max(_L,0),NI=Math.min(NI,cL.count)):fL!=null&&(_L=Math.max(_L,0),NI=Math.min(NI,fL.count));let mI=NI-_L;if(mI<0||mI===1/0)return;rL.setup(b,A,HL,X,cL);let iI,tI=FL;if(cL!==null&&(iI=o.get(cL),tI=uL,tI.setIndex(iI)),b.isMesh)A.wireframe===!0?(sL.setLineWidth(A.wireframeLinewidth*cI()),tI.setMode(l.LINES)):tI.setMode(l.TRIANGLES);else if(b.isLine){let DL=A.linewidth;DL===void 0&&(DL=1),sL.setLineWidth(DL*cI()),b.isLineSegments?tI.setMode(l.LINES):b.isLineLoop?tI.setMode(l.LINE_LOOP):tI.setMode(l.LINE_STRIP)}else b.isPoints?tI.setMode(l.POINTS):b.isSprite&&tI.setMode(l.TRIANGLES);if(b.isBatchedMesh)if(b._multiDrawInstances!==null)gt("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tI.renderMultiDrawInstances(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount,b._multiDrawInstances);else if(bL.get("WEBGL_multi_draw"))tI.renderMultiDraw(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount);else{let DL=b._multiDrawStarts,JI=b._multiDrawCounts,CL=b._multiDrawCount,qI=cL?o.get(cL).bytesPerElement:1,Et=ML.get(A).currentProgram.getUniforms();for(let yI=0;yI<CL;yI++)Et.setValue(l,"_gl_DrawID",yI),tI.render(DL[yI]/qI,JI[yI])}else if(b.isInstancedMesh)tI.renderInstances(_L,mI,b.count);else if(X.isInstancedBufferGeometry){let DL=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,JI=Math.min(X.instanceCount,DL);tI.renderInstances(_L,mI,JI)}else tI.render(_L,mI)};function nI(O,h,X){O.transparent===!0&&O.side===IN&&O.forceSinglePass===!1?(O.side=EI,O.needsUpdate=!0,cP(O,h,X),O.side=AI,O.needsUpdate=!0,cP(O,h,X),O.side=IN):cP(O,h,X)}this.compile=function(O,h,X=null){X===null&&(X=O),m=PL.get(X),m.init(h),x.push(m),X.traverseVisible(function(b){b.isLight&&b.layers.test(h.layers)&&(m.pushLight(b),b.castShadow&&m.pushShadow(b))}),O!==X&&O.traverseVisible(function(b){b.isLight&&b.layers.test(h.layers)&&(m.pushLight(b),b.castShadow&&m.pushShadow(b))}),m.setupLights();let A=new Set;return O.traverse(function(b){if(!(b.isMesh||b.isPoints||b.isLine||b.isSprite))return;let NL=b.material;if(NL)if(Array.isArray(NL))for(let jL=0;jL<NL.length;jL++){let HL=NL[jL];nI(HL,X,b),A.add(HL)}else nI(NL,X,b),A.add(NL)}),m=x.pop(),A},this.compileAsync=function(O,h,X=null){let A=this.compile(O,h,X);return new Promise(b=>{function NL(){if(A.forEach(function(jL){ML.get(jL).currentProgram.isReady()&&A.delete(jL)}),A.size===0){b(O);return}setTimeout(NL,10)}bL.get("KHR_parallel_shader_compile")!==null?NL():setTimeout(NL,10)})};let BL=null;function xN(O){BL&&BL(O)}function $N(){Nt.stop()}function ir(){Nt.start()}let Nt=new m9;Nt.setAnimationLoop(xN),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(O){BL=O,tL.setAnimationLoop(O),O===null?Nt.stop():Nt.start()},tL.addEventListener("sessionstart",$N),tL.addEventListener("sessionend",ir),this.render=function(O,h){if(h!==void 0&&h.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),h.parent===null&&h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),tL.enabled===!0&&tL.isPresenting===!0&&(tL.cameraAutoUpdate===!0&&tL.updateCamera(h),h=tL.getCamera()),O.isScene===!0&&O.onBeforeRender(H,O,h,D),m=PL.get(O,x.length),m.init(h),x.push(m),g.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse),kL.setFromProjectionMatrix(g,QN,h.reversedDepth),Y=this.localClippingEnabled,YL=W.init(this.clippingPlanes,Y),c=T.get(O,f.length),c.init(),f.push(c),tL.enabled===!0&&tL.isPresenting===!0){let NL=H.xr.getDepthSensingMesh();NL!==null&&PQ(NL,h,-1/0,H.sortObjects)}PQ(O,h,0,H.sortObjects),c.finish(),H.sortObjects===!0&&c.sort(eL,nL),ZL=tL.enabled===!1||tL.isPresenting===!1||tL.hasDepthSensing()===!1,ZL&&OL.addToRenderList(c,O),this.info.render.frame++,YL===!0&&W.beginShadows();let X=m.state.shadowsArray;mL.render(X,O,h),YL===!0&&W.endShadows(),this.info.autoReset===!0&&this.info.reset();let A=c.opaque,b=c.transmissive;if(m.setupLights(),h.isArrayCamera){let NL=h.cameras;if(b.length>0)for(let jL=0,HL=NL.length;jL<HL;jL++){let cL=NL[jL];jr(A,b,O,cL)}ZL&&OL.render(O);for(let jL=0,HL=NL.length;jL<HL;jL++){let cL=NL[jL];rr(c,O,cL,cL.viewport)}}else b.length>0&&jr(A,b,O,h),ZL&&OL.render(O),rr(c,O,h);D!==null&&z===0&&(VL.updateMultisampleRenderTarget(D),VL.updateRenderTargetMipmap(D)),O.isScene===!0&&O.onAfterRender(H,O,h),rL.resetDefaultState(),s=-1,G=null,x.pop(),x.length>0?(m=x[x.length-1],YL===!0&&W.setGlobalState(H.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?c=f[f.length-1]:c=null};function PQ(O,h,X,A){if(O.visible===!1)return;if(O.layers.test(h.layers)){if(O.isGroup)X=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(h);else if(O.isLight)m.pushLight(O),O.castShadow&&m.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||kL.intersectsSprite(O)){A&&aL.setFromMatrixPosition(O.matrixWorld).applyMatrix4(g);let jL=V.update(O),HL=O.material;HL.visible&&c.push(O,jL,HL,X,aL.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||kL.intersectsObject(O))){let jL=V.update(O),HL=O.material;if(A&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),aL.copy(O.boundingSphere.center)):(jL.boundingSphere===null&&jL.computeBoundingSphere(),aL.copy(jL.boundingSphere.center)),aL.applyMatrix4(O.matrixWorld).applyMatrix4(g)),Array.isArray(HL)){let cL=jL.groups;for(let EL=0,hL=cL.length;EL<hL;EL++){let fL=cL[EL],_L=HL[fL.materialIndex];_L&&_L.visible&&c.push(O,jL,_L,X,aL.z,fL)}}else HL.visible&&c.push(O,jL,HL,X,aL.z,null)}}let NL=O.children;for(let jL=0,HL=NL.length;jL<HL;jL++)PQ(NL[jL],h,X,A)}function rr(O,h,X,A){let b=O.opaque,NL=O.transmissive,jL=O.transparent;m.setupLightsView(X),YL===!0&&W.setGlobalState(H.clippingPlanes,X),A&&sL.viewport(a.copy(A)),b.length>0&&$P(b,h,X),NL.length>0&&$P(NL,h,X),jL.length>0&&$P(jL,h,X),sL.buffers.depth.setTest(!0),sL.buffers.depth.setMask(!0),sL.buffers.color.setMask(!0),sL.setPolygonOffset(!1)}function jr(O,h,X,A){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[A.id]===void 0&&(m.state.transmissionRenderTarget[A.id]=new MN(1,1,{generateMipmaps:!0,type:bL.has("EXT_color_buffer_half_float")||bL.has("EXT_color_buffer_float")?kI:mN,minFilter:vI,samples:4,stencilBuffer:P,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:SL.workingColorSpace}));let NL=m.state.transmissionRenderTarget[A.id],jL=A.viewport||a;NL.setSize(jL.z*H.transmissionResolutionScale,jL.w*H.transmissionResolutionScale);let HL=H.getRenderTarget(),cL=H.getActiveCubeFace(),EL=H.getActiveMipmapLevel();H.setRenderTarget(NL),H.getClearColor(q),w=H.getClearAlpha(),w<1&&H.setClearColor(16777215,.5),H.clear(),ZL&&OL.render(X);let hL=H.toneMapping;H.toneMapping=qN;let fL=A.viewport;if(A.viewport!==void 0&&(A.viewport=void 0),m.setupLightsView(A),YL===!0&&W.setGlobalState(H.clippingPlanes,A),$P(O,X,A),VL.updateMultisampleRenderTarget(NL),VL.updateRenderTargetMipmap(NL),bL.has("WEBGL_multisampled_render_to_texture")===!1){let _L=!1;for(let NI=0,mI=h.length;NI<mI;NI++){let iI=h[NI],tI=iI.object,DL=iI.geometry,JI=iI.material,CL=iI.group;if(JI.side===IN&&tI.layers.test(A.layers)){let qI=JI.side;JI.side=EI,JI.needsUpdate=!0,Jr(tI,X,A,DL,JI,CL),JI.side=qI,JI.needsUpdate=!0,_L=!0}}_L===!0&&(VL.updateMultisampleRenderTarget(NL),VL.updateRenderTargetMipmap(NL))}H.setRenderTarget(HL,cL,EL),H.setClearColor(q,w),fL!==void 0&&(A.viewport=fL),H.toneMapping=hL}function $P(O,h,X){let A=h.isScene===!0?h.overrideMaterial:null;for(let b=0,NL=O.length;b<NL;b++){let jL=O[b],HL=jL.object,cL=jL.geometry,EL=jL.group,hL=jL.material;hL.allowOverride===!0&&A!==null&&(hL=A),HL.layers.test(X.layers)&&Jr(HL,h,X,cL,hL,EL)}}function Jr(O,h,X,A,b,NL){O.onBeforeRender(H,h,X,A,b,NL),O.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),b.onBeforeRender(H,h,X,A,O,NL),b.transparent===!0&&b.side===IN&&b.forceSinglePass===!1?(b.side=EI,b.needsUpdate=!0,H.renderBufferDirect(X,h,A,b,O,NL),b.side=AI,b.needsUpdate=!0,H.renderBufferDirect(X,h,A,b,O,NL),b.side=IN):H.renderBufferDirect(X,h,A,b,O,NL),O.onAfterRender(H,h,X,A,b,NL)}function cP(O,h,X){h.isScene!==!0&&(h=GL);let A=ML.get(O),b=m.state.lights,NL=m.state.shadowsArray,jL=b.state.version,HL=S.getParameters(O,b.state,NL,h,X),cL=S.getProgramCacheKey(HL),EL=A.programs;A.environment=O.isMeshStandardMaterial?h.environment:null,A.fog=h.fog,A.envMap=(O.isMeshStandardMaterial?JL:k).get(O.envMap||A.environment),A.envMapRotation=A.environment!==null&&O.envMap===null?h.environmentRotation:O.envMapRotation,EL===void 0&&(O.addEventListener("dispose",C),EL=new Map,A.programs=EL);let hL=EL.get(cL);if(hL!==void 0){if(A.currentProgram===hL&&A.lightsStateVersion===jL)return mr(O,HL),hL}else HL.uniforms=S.getUniforms(O),O.onBeforeCompile(HL,H),hL=S.acquireProgram(HL,cL),EL.set(cL,hL),A.uniforms=HL.uniforms;let fL=A.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(fL.clippingPlanes=W.uniform),mr(O,HL),A.needsLights=y9(O),A.lightsStateVersion=jL,A.needsLights&&(fL.ambientLightColor.value=b.state.ambient,fL.lightProbe.value=b.state.probe,fL.directionalLights.value=b.state.directional,fL.directionalLightShadows.value=b.state.directionalShadow,fL.spotLights.value=b.state.spot,fL.spotLightShadows.value=b.state.spotShadow,fL.rectAreaLights.value=b.state.rectArea,fL.ltc_1.value=b.state.rectAreaLTC1,fL.ltc_2.value=b.state.rectAreaLTC2,fL.pointLights.value=b.state.point,fL.pointLightShadows.value=b.state.pointShadow,fL.hemisphereLights.value=b.state.hemi,fL.directionalShadowMap.value=b.state.directionalShadowMap,fL.directionalShadowMatrix.value=b.state.directionalShadowMatrix,fL.spotShadowMap.value=b.state.spotShadowMap,fL.spotLightMatrix.value=b.state.spotLightMatrix,fL.spotLightMap.value=b.state.spotLightMap,fL.pointShadowMap.value=b.state.pointShadowMap,fL.pointShadowMatrix.value=b.state.pointShadowMatrix),A.currentProgram=hL,A.uniformsList=null,hL}function Fr(O){if(O.uniformsList===null){let h=O.currentProgram.getUniforms();O.uniformsList=Ke.seqWithValue(h.seq,O.uniforms)}return O.uniformsList}function mr(O,h){let X=ML.get(O);X.outputColorSpace=h.outputColorSpace,X.batching=h.batching,X.batchingColor=h.batchingColor,X.instancing=h.instancing,X.instancingColor=h.instancingColor,X.instancingMorph=h.instancingMorph,X.skinning=h.skinning,X.morphTargets=h.morphTargets,X.morphNormals=h.morphNormals,X.morphColors=h.morphColors,X.morphTargetsCount=h.morphTargetsCount,X.numClippingPlanes=h.numClippingPlanes,X.numIntersection=h.numClipIntersection,X.vertexAlphas=h.vertexAlphas,X.vertexTangents=h.vertexTangents,X.toneMapping=h.toneMapping}function v9(O,h,X,A,b){h.isScene!==!0&&(h=GL),VL.resetTextureUnits();let NL=h.fog,jL=A.isMeshStandardMaterial?h.environment:null,HL=D===null?H.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:$I,cL=(A.isMeshStandardMaterial?JL:k).get(A.envMap||jL),EL=A.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,hL=!!X.attributes.tangent&&(!!A.normalMap||A.anisotropy>0),fL=!!X.morphAttributes.position,_L=!!X.morphAttributes.normal,NI=!!X.morphAttributes.color,mI=qN;A.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(mI=H.toneMapping);let iI=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,tI=iI!==void 0?iI.length:0,DL=ML.get(A),JI=m.state.lights;if(YL===!0&&(Y===!0||O!==G)){let zI=O===G&&A.id===s;W.setState(A,O,zI)}let CL=!1;A.version===DL.__version?(DL.needsLights&&DL.lightsStateVersion!==JI.state.version||DL.outputColorSpace!==HL||b.isBatchedMesh&&DL.batching===!1||!b.isBatchedMesh&&DL.batching===!0||b.isBatchedMesh&&DL.batchingColor===!0&&b.colorTexture===null||b.isBatchedMesh&&DL.batchingColor===!1&&b.colorTexture!==null||b.isInstancedMesh&&DL.instancing===!1||!b.isInstancedMesh&&DL.instancing===!0||b.isSkinnedMesh&&DL.skinning===!1||!b.isSkinnedMesh&&DL.skinning===!0||b.isInstancedMesh&&DL.instancingColor===!0&&b.instanceColor===null||b.isInstancedMesh&&DL.instancingColor===!1&&b.instanceColor!==null||b.isInstancedMesh&&DL.instancingMorph===!0&&b.morphTexture===null||b.isInstancedMesh&&DL.instancingMorph===!1&&b.morphTexture!==null||DL.envMap!==cL||A.fog===!0&&DL.fog!==NL||DL.numClippingPlanes!==void 0&&(DL.numClippingPlanes!==W.numPlanes||DL.numIntersection!==W.numIntersection)||DL.vertexAlphas!==EL||DL.vertexTangents!==hL||DL.morphTargets!==fL||DL.morphNormals!==_L||DL.morphColors!==NI||DL.toneMapping!==mI||DL.morphTargetsCount!==tI)&&(CL=!0):(CL=!0,DL.__version=A.version);let qI=DL.currentProgram;CL===!0&&(qI=cP(A,h,b));let Et=!1,yI=!1,He=!1,FI=qI.getUniforms(),YI=DL.uniforms;if(sL.useProgram(qI.program)&&(Et=!0,yI=!0,He=!0),A.id!==s&&(s=A.id,yI=!0),Et||G!==O){sL.buffers.depth.getReversed()&&O.reversedDepth!==!0&&(O._reversedDepth=!0,O.updateProjectionMatrix()),FI.setValue(l,"projectionMatrix",O.projectionMatrix),FI.setValue(l,"viewMatrix",O.matrixWorldInverse);let hI=FI.map.cameraPosition;hI!==void 0&&hI.setValue(l,$L.setFromMatrixPosition(O.matrixWorld)),zL.logarithmicDepthBuffer&&FI.setValue(l,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(A.isMeshPhongMaterial||A.isMeshToonMaterial||A.isMeshLambertMaterial||A.isMeshBasicMaterial||A.isMeshStandardMaterial||A.isShaderMaterial)&&FI.setValue(l,"isOrthographic",O.isOrthographicCamera===!0),G!==O&&(G=O,yI=!0,He=!0)}if(b.isSkinnedMesh){FI.setOptional(l,b,"bindMatrix"),FI.setOptional(l,b,"bindMatrixInverse");let zI=b.skeleton;zI&&(zI.boneTexture===null&&zI.computeBoneTexture(),FI.setValue(l,"boneTexture",zI.boneTexture,VL))}b.isBatchedMesh&&(FI.setOptional(l,b,"batchingTexture"),FI.setValue(l,"batchingTexture",b._matricesTexture,VL),FI.setOptional(l,b,"batchingIdTexture"),FI.setValue(l,"batchingIdTexture",b._indirectTexture,VL),FI.setOptional(l,b,"batchingColorTexture"),b._colorsTexture!==null&&FI.setValue(l,"batchingColorTexture",b._colorsTexture,VL));let CI=X.morphAttributes;if((CI.position!==void 0||CI.normal!==void 0||CI.color!==void 0)&&IL.update(b,X,qI),(yI||DL.receiveShadow!==b.receiveShadow)&&(DL.receiveShadow=b.receiveShadow,FI.setValue(l,"receiveShadow",b.receiveShadow)),A.isMeshGouraudMaterial&&A.envMap!==null&&(YI.envMap.value=cL,YI.flipEnvMap.value=cL.isCubeTexture&&cL.isRenderTargetTexture===!1?-1:1),A.isMeshStandardMaterial&&A.envMap===null&&h.environment!==null&&(YI.envMapIntensity.value=h.environmentIntensity),yI&&(FI.setValue(l,"toneMappingExposure",H.toneMappingExposure),DL.needsLights&&q9(YI,He),NL&&A.fog===!0&&p.refreshFogUniforms(YI,NL),p.refreshMaterialUniforms(YI,A,_,B,m.state.transmissionRenderTarget[O.id]),Ke.upload(l,Fr(DL),YI,VL)),A.isShaderMaterial&&A.uniformsNeedUpdate===!0&&(Ke.upload(l,Fr(DL),YI,VL),A.uniformsNeedUpdate=!1),A.isSpriteMaterial&&FI.setValue(l,"center",b.center),FI.setValue(l,"modelViewMatrix",b.modelViewMatrix),FI.setValue(l,"normalMatrix",b.normalMatrix),FI.setValue(l,"modelMatrix",b.matrixWorld),A.isShaderMaterial||A.isRawShaderMaterial){let zI=A.uniformsGroups;for(let hI=0,nQ=zI.length;hI<nQ;hI++){let tt=zI[hI];UL.update(tt,qI),UL.bind(tt,qI)}}return qI}function q9(O,h){O.ambientLightColor.needsUpdate=h,O.lightProbe.needsUpdate=h,O.directionalLights.needsUpdate=h,O.directionalLightShadows.needsUpdate=h,O.pointLights.needsUpdate=h,O.pointLightShadows.needsUpdate=h,O.spotLights.needsUpdate=h,O.spotLightShadows.needsUpdate=h,O.rectAreaLights.needsUpdate=h,O.hemisphereLights.needsUpdate=h}function y9(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(O,h,X){let A=ML.get(O);A.__autoAllocateDepthBuffer=O.resolveDepthBuffer===!1,A.__autoAllocateDepthBuffer===!1&&(A.__useRenderToTexture=!1),ML.get(O.texture).__webglTexture=h,ML.get(O.depthTexture).__webglTexture=A.__autoAllocateDepthBuffer?void 0:X,A.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(O,h){let X=ML.get(O);X.__webglFramebuffer=h,X.__useDefaultFramebuffer=h===void 0};let U9=l.createFramebuffer();this.setRenderTarget=function(O,h=0,X=0){D=O,R=h,z=X;let A=!0,b=null,NL=!1,jL=!1;if(O){let cL=ML.get(O);if(cL.__useDefaultFramebuffer!==void 0)sL.bindFramebuffer(l.FRAMEBUFFER,null),A=!1;else if(cL.__webglFramebuffer===void 0)VL.setupRenderTarget(O);else if(cL.__hasExternalTextures)VL.rebindTextures(O,ML.get(O.texture).__webglTexture,ML.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){let fL=O.depthTexture;if(cL.__boundDepthTexture!==fL){if(fL!==null&&ML.has(fL)&&(O.width!==fL.image.width||O.height!==fL.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");VL.setupDepthRenderbuffer(O)}}let EL=O.texture;(EL.isData3DTexture||EL.isDataArrayTexture||EL.isCompressedArrayTexture)&&(jL=!0);let hL=ML.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(hL[h])?b=hL[h][X]:b=hL[h],NL=!0):O.samples>0&&VL.useMultisampledRTT(O)===!1?b=ML.get(O).__webglMultisampledFramebuffer:Array.isArray(hL)?b=hL[X]:b=hL,a.copy(O.viewport),v.copy(O.scissor),y=O.scissorTest}else a.copy(dL).multiplyScalar(_).floor(),v.copy(RL).multiplyScalar(_).floor(),y=TL;if(X!==0&&(b=U9),sL.bindFramebuffer(l.FRAMEBUFFER,b)&&A&&sL.drawBuffers(O,b),sL.viewport(a),sL.scissor(v),sL.setScissorTest(y),NL){let cL=ML.get(O.texture);l.framebufferTexture2D(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+h,cL.__webglTexture,X)}else if(jL){let cL=h;for(let EL=0;EL<O.textures.length;EL++){let hL=ML.get(O.textures[EL]);l.framebufferTextureLayer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+EL,hL.__webglTexture,X,cL)}}else if(O!==null&&X!==0){let cL=ML.get(O.texture);l.framebufferTexture2D(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,cL.__webglTexture,X)}s=-1},this.readRenderTargetPixels=function(O,h,X,A,b,NL,jL,HL=0){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let cL=ML.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&jL!==void 0&&(cL=cL[jL]),cL){sL.bindFramebuffer(l.FRAMEBUFFER,cL);try{let EL=O.textures[HL],hL=EL.format,fL=EL.type;if(!zL.textureFormatReadable(hL)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zL.textureTypeReadable(fL)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}h>=0&&h<=O.width-A&&X>=0&&X<=O.height-b&&(O.textures.length>1&&l.readBuffer(l.COLOR_ATTACHMENT0+HL),l.readPixels(h,X,A,b,xL.convert(hL),xL.convert(fL),NL))}finally{let EL=D!==null?ML.get(D).__webglFramebuffer:null;sL.bindFramebuffer(l.FRAMEBUFFER,EL)}}},this.readRenderTargetPixelsAsync=async function(O,h,X,A,b,NL,jL,HL=0){if(!(O&&O.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let cL=ML.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&jL!==void 0&&(cL=cL[jL]),cL)if(h>=0&&h<=O.width-A&&X>=0&&X<=O.height-b){sL.bindFramebuffer(l.FRAMEBUFFER,cL);let EL=O.textures[HL],hL=EL.format,fL=EL.type;if(!zL.textureFormatReadable(hL))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zL.textureTypeReadable(fL))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _L=l.createBuffer();l.bindBuffer(l.PIXEL_PACK_BUFFER,_L),l.bufferData(l.PIXEL_PACK_BUFFER,NL.byteLength,l.STREAM_READ),O.textures.length>1&&l.readBuffer(l.COLOR_ATTACHMENT0+HL),l.readPixels(h,X,A,b,xL.convert(hL),xL.convert(fL),0);let NI=D!==null?ML.get(D).__webglFramebuffer:null;sL.bindFramebuffer(l.FRAMEBUFFER,NI);let mI=l.fenceSync(l.SYNC_GPU_COMMANDS_COMPLETE,0);return l.flush(),await qj(l,mI,4),l.bindBuffer(l.PIXEL_PACK_BUFFER,_L),l.getBufferSubData(l.PIXEL_PACK_BUFFER,0,NL),l.deleteBuffer(_L),l.deleteSync(mI),NL}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(O,h=null,X=0){let A=Math.pow(2,-X),b=Math.floor(O.image.width*A),NL=Math.floor(O.image.height*A),jL=h!==null?h.x:0,HL=h!==null?h.y:0;VL.setTexture2D(O,0),l.copyTexSubImage2D(l.TEXTURE_2D,X,0,0,jL,HL,b,NL),sL.unbindTexture()};let T9=l.createFramebuffer(),X9=l.createFramebuffer();this.copyTextureToTexture=function(O,h,X=null,A=null,b=0,NL=null){NL===null&&(b!==0?(gt("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),NL=b,b=0):NL=0);let jL,HL,cL,EL,hL,fL,_L,NI,mI,iI=O.isCompressedTexture?O.mipmaps[NL]:O.image;if(X!==null)jL=X.max.x-X.min.x,HL=X.max.y-X.min.y,cL=X.isBox3?X.max.z-X.min.z:1,EL=X.min.x,hL=X.min.y,fL=X.isBox3?X.min.z:0;else{let CI=Math.pow(2,-b);jL=Math.floor(iI.width*CI),HL=Math.floor(iI.height*CI),O.isDataArrayTexture?cL=iI.depth:O.isData3DTexture?cL=Math.floor(iI.depth*CI):cL=1,EL=0,hL=0,fL=0}A!==null?(_L=A.x,NI=A.y,mI=A.z):(_L=0,NI=0,mI=0);let tI=xL.convert(h.format),DL=xL.convert(h.type),JI;h.isData3DTexture?(VL.setTexture3D(h,0),JI=l.TEXTURE_3D):h.isDataArrayTexture||h.isCompressedArrayTexture?(VL.setTexture2DArray(h,0),JI=l.TEXTURE_2D_ARRAY):(VL.setTexture2D(h,0),JI=l.TEXTURE_2D),l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,h.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,h.unpackAlignment);let CL=l.getParameter(l.UNPACK_ROW_LENGTH),qI=l.getParameter(l.UNPACK_IMAGE_HEIGHT),Et=l.getParameter(l.UNPACK_SKIP_PIXELS),yI=l.getParameter(l.UNPACK_SKIP_ROWS),He=l.getParameter(l.UNPACK_SKIP_IMAGES);l.pixelStorei(l.UNPACK_ROW_LENGTH,iI.width),l.pixelStorei(l.UNPACK_IMAGE_HEIGHT,iI.height),l.pixelStorei(l.UNPACK_SKIP_PIXELS,EL),l.pixelStorei(l.UNPACK_SKIP_ROWS,hL),l.pixelStorei(l.UNPACK_SKIP_IMAGES,fL);let FI=O.isDataArrayTexture||O.isData3DTexture,YI=h.isDataArrayTexture||h.isData3DTexture;if(O.isDepthTexture){let CI=ML.get(O),zI=ML.get(h),hI=ML.get(CI.__renderTarget),nQ=ML.get(zI.__renderTarget);sL.bindFramebuffer(l.READ_FRAMEBUFFER,hI.__webglFramebuffer),sL.bindFramebuffer(l.DRAW_FRAMEBUFFER,nQ.__webglFramebuffer);for(let tt=0;tt<cL;tt++)FI&&(l.framebufferTextureLayer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,ML.get(O).__webglTexture,b,fL+tt),l.framebufferTextureLayer(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,ML.get(h).__webglTexture,NL,mI+tt)),l.blitFramebuffer(EL,hL,jL,HL,_L,NI,jL,HL,l.DEPTH_BUFFER_BIT,l.NEAREST);sL.bindFramebuffer(l.READ_FRAMEBUFFER,null),sL.bindFramebuffer(l.DRAW_FRAMEBUFFER,null)}else if(b!==0||O.isRenderTargetTexture||ML.has(O)){let CI=ML.get(O),zI=ML.get(h);sL.bindFramebuffer(l.READ_FRAMEBUFFER,T9),sL.bindFramebuffer(l.DRAW_FRAMEBUFFER,X9);for(let hI=0;hI<cL;hI++)FI?l.framebufferTextureLayer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,CI.__webglTexture,b,fL+hI):l.framebufferTexture2D(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,CI.__webglTexture,b),YI?l.framebufferTextureLayer(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,zI.__webglTexture,NL,mI+hI):l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,zI.__webglTexture,NL),b!==0?l.blitFramebuffer(EL,hL,jL,HL,_L,NI,jL,HL,l.COLOR_BUFFER_BIT,l.NEAREST):YI?l.copyTexSubImage3D(JI,NL,_L,NI,mI+hI,EL,hL,jL,HL):l.copyTexSubImage2D(JI,NL,_L,NI,EL,hL,jL,HL);sL.bindFramebuffer(l.READ_FRAMEBUFFER,null),sL.bindFramebuffer(l.DRAW_FRAMEBUFFER,null)}else YI?O.isDataTexture||O.isData3DTexture?l.texSubImage3D(JI,NL,_L,NI,mI,jL,HL,cL,tI,DL,iI.data):h.isCompressedArrayTexture?l.compressedTexSubImage3D(JI,NL,_L,NI,mI,jL,HL,cL,tI,iI.data):l.texSubImage3D(JI,NL,_L,NI,mI,jL,HL,cL,tI,DL,iI):O.isDataTexture?l.texSubImage2D(l.TEXTURE_2D,NL,_L,NI,jL,HL,tI,DL,iI.data):O.isCompressedTexture?l.compressedTexSubImage2D(l.TEXTURE_2D,NL,_L,NI,iI.width,iI.height,tI,iI.data):l.texSubImage2D(l.TEXTURE_2D,NL,_L,NI,jL,HL,tI,DL,iI);l.pixelStorei(l.UNPACK_ROW_LENGTH,CL),l.pixelStorei(l.UNPACK_IMAGE_HEIGHT,qI),l.pixelStorei(l.UNPACK_SKIP_PIXELS,Et),l.pixelStorei(l.UNPACK_SKIP_ROWS,yI),l.pixelStorei(l.UNPACK_SKIP_IMAGES,He),NL===0&&h.generateMipmaps&&l.generateMipmap(JI),sL.unbindTexture()},this.initRenderTarget=function(O){ML.get(O).__webglFramebuffer===void 0&&VL.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?VL.setTextureCube(O,0):O.isData3DTexture?VL.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?VL.setTexture2DArray(O,0):VL.setTexture2D(O,0),sL.unbindTexture()},this.resetState=function(){R=0,z=0,D=null,sL.reset(),rL.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return QN}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(L){this._outputColorSpace=L;let I=this.getContext();I.drawingBufferColorSpace=SL._getDrawingBufferColorSpace(L),I.unpackColorSpace=SL._getUnpackColorSpace()}};function Di(e,L){if(L===ni)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(L===ce||L===JP){let I=e.getIndex();if(I===null){let n=[],Q=e.getAttribute("position");if(Q!==void 0){for(let r=0;r<Q.count;r++)n.push(r);e.setIndex(n),I=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}let N=I.count-2,t=[];if(L===ce)for(let n=1;n<=N;n++)t.push(I.getX(0)),t.push(I.getX(n)),t.push(I.getX(n+1));else for(let n=0;n<N;n++)n%2===0?(t.push(I.getX(n)),t.push(I.getX(n+1)),t.push(I.getX(n+2))):(t.push(I.getX(n+2)),t.push(I.getX(n+1)),t.push(I.getX(n)));t.length/3!==N&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let P=e.clone();return P.setIndex(t),P.clearGroups(),P}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",L),e}var NQ=class extends FN{constructor(L){super(L),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(I){return new vi(I)}),this.register(function(I){return new qi(I)}),this.register(function(I){return new ki(I)}),this.register(function(I){return new Yi(I)}),this.register(function(I){return new Ci(I)}),this.register(function(I){return new Ui(I)}),this.register(function(I){return new Ti(I)}),this.register(function(I){return new Xi(I)}),this.register(function(I){return new Ai(I)}),this.register(function(I){return new pi(I)}),this.register(function(I){return new wi(I)}),this.register(function(I){return new yi(I)}),this.register(function(I){return new Si(I)}),this.register(function(I){return new _i(I)}),this.register(function(I){return new bi(I)}),this.register(function(I){return new gi(I)}),this.register(function(I){return new Bi(I)})}load(L,I,N,t){let P=this,n;if(this.resourcePath!=="")n=this.resourcePath;else if(this.path!==""){let i=pN.extractUrlBase(L);n=pN.resolveURL(i,this.path)}else n=pN.extractUrlBase(L);this.manager.itemStart(L);let Q=function(i){t?t(i):console.error(i),P.manager.itemError(L),P.manager.itemEnd(L)},r=new Kt(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(L,function(i){try{P.parse(i,n,function(j){I(j),P.manager.itemEnd(L)},Q)}catch(j){Q(j)}},N,Q)}setDRACOLoader(L){return this.dracoLoader=L,this}setKTX2Loader(L){return this.ktx2Loader=L,this}setMeshoptDecoder(L){return this.meshoptDecoder=L,this}register(L){return this.pluginCallbacks.indexOf(L)===-1&&this.pluginCallbacks.push(L),this}unregister(L){return this.pluginCallbacks.indexOf(L)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(L),1),this}parse(L,I,N,t){let P,n={},Q={},r=new TextDecoder;if(typeof L=="string")P=JSON.parse(L);else if(L instanceof ArrayBuffer)if(r.decode(new Uint8Array(L,0,4))===H9){try{n[wL.KHR_BINARY_GLTF]=new Wi(L)}catch(J){t&&t(J);return}P=JSON.parse(n[wL.KHR_BINARY_GLTF].content)}else P=JSON.parse(r.decode(L));else P=L;if(P.asset===void 0||P.asset.version[0]<2){t&&t(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let i=new nr(P,{path:I||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});i.fileLoader.setRequestHeader(this.requestHeader);for(let j=0;j<this.pluginCallbacks.length;j++){let J=this.pluginCallbacks[j](i);J.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),Q[J.name]=J,n[J.name]=!0}if(P.extensionsUsed)for(let j=0;j<P.extensionsUsed.length;++j){let J=P.extensionsUsed[j],F=P.extensionsRequired||[];switch(J){case wL.KHR_MATERIALS_UNLIT:n[J]=new Vi;break;case wL.KHR_DRACO_MESH_COMPRESSION:n[J]=new Lr(P,this.dracoLoader);break;case wL.KHR_TEXTURE_TRANSFORM:n[J]=new Ir;break;case wL.KHR_MESH_QUANTIZATION:n[J]=new Nr;break;default:F.indexOf(J)>=0&&Q[J]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+J+'".')}}i.setExtensions(n),i.setPlugins(Q),i.parse(N,t)}parseAsync(L,I){let N=this;return new Promise(function(t,P){N.parse(L,I,t,P)})}};function Hc(){let e={};return{get:function(L){return e[L]},add:function(L,I){e[L]=I},remove:function(L){delete e[L]},removeAll:function(){e={}}}}var wL={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},bi=class{constructor(L){this.parser=L,this.name=wL.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let L=this.parser,I=this.parser.json.nodes||[];for(let N=0,t=I.length;N<t;N++){let P=I[N];P.extensions&&P.extensions[this.name]&&P.extensions[this.name].light!==void 0&&L._addNodeRef(this.cache,P.extensions[this.name].light)}}_loadLight(L){let I=this.parser,N="light:"+L,t=I.cache.get(N);if(t)return t;let P=I.json,r=((P.extensions&&P.extensions[this.name]||{}).lights||[])[L],i,j=new lL(16777215);r.color!==void 0&&j.setRGB(r.color[0],r.color[1],r.color[2],$I);let J=r.range!==void 0?r.range:0;switch(r.type){case"directional":i=new Ht(j),i.target.position.set(0,0,-1),i.add(i.target);break;case"point":i=new NP(j),i.distance=J;break;case"spot":i=new IP(j),i.distance=J,r.spot=r.spot||{},r.spot.innerConeAngle=r.spot.innerConeAngle!==void 0?r.spot.innerConeAngle:0,r.spot.outerConeAngle=r.spot.outerConeAngle!==void 0?r.spot.outerConeAngle:Math.PI/4,i.angle=r.spot.outerConeAngle,i.penumbra=1-r.spot.innerConeAngle/r.spot.outerConeAngle,i.target.position.set(0,0,-1),i.add(i.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+r.type)}return i.position.set(0,0,0),oN(i,r),r.intensity!==void 0&&(i.intensity=r.intensity),i.name=I.createUniqueName(r.name||"light_"+L),t=Promise.resolve(i),I.cache.add(N,t),t}getDependency(L,I){if(L==="light")return this._loadLight(I)}createNodeAttachment(L){let I=this,N=this.parser,P=N.json.nodes[L],Q=(P.extensions&&P.extensions[this.name]||{}).light;return Q===void 0?null:this._loadLight(Q).then(function(r){return N._getNodeRef(I.cache,Q,r)})}},Vi=class{constructor(){this.name=wL.KHR_MATERIALS_UNLIT}getMaterialType(){return _I}extendParams(L,I,N){let t=[];L.color=new lL(1,1,1),L.opacity=1;let P=I.pbrMetallicRoughness;if(P){if(Array.isArray(P.baseColorFactor)){let n=P.baseColorFactor;L.color.setRGB(n[0],n[1],n[2],$I),L.opacity=n[3]}P.baseColorTexture!==void 0&&t.push(N.assignTexture(L,"map",P.baseColorTexture,rI))}return Promise.all(t)}},pi=class{constructor(L){this.parser=L,this.name=wL.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(L,I){let t=this.parser.json.materials[L];if(!t.extensions||!t.extensions[this.name])return Promise.resolve();let P=t.extensions[this.name].emissiveStrength;return P!==void 0&&(I.emissiveIntensity=P),Promise.resolve()}},vi=class{constructor(L){this.parser=L,this.name=wL.KHR_MATERIALS_CLEARCOAT}getMaterialType(L){let N=this.parser.json.materials[L];return!N.extensions||!N.extensions[this.name]?null:lI}extendMaterialParams(L,I){let N=this.parser,t=N.json.materials[L];if(!t.extensions||!t.extensions[this.name])return Promise.resolve();let P=[],n=t.extensions[this.name];if(n.clearcoatFactor!==void 0&&(I.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&P.push(N.assignTexture(I,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(I.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&P.push(N.assignTexture(I,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(P.push(N.assignTexture(I,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let Q=n.clearcoatNormalTexture.scale;I.clearcoatNormalScale=new AL(Q,Q)}return Promise.all(P)}},qi=class{constructor(L){this.parser=L,this.name=wL.KHR_MATERIALS_DISPERSION}getMaterialType(L){let N=this.parser.json.materials[L];return!N.extensions||!N.extensions[this.name]?null:lI}extendMaterialParams(L,I){let t=this.parser.json.materials[L];if(!t.extensions||!t.extensions[this.name])return Promise.resolve();let P=t.extensions[this.name];return I.dispersion=P.dispersion!==void 0?P.dispersion:0,Promise.resolve()}},yi=class{constructor(L){this.parser=L,this.name=wL.KHR_MATERIALS_IRIDESCENCE}getMaterialType(L){let N=this.parser.json.materials[L];return!N.extensions||!N.extensions[this.name]?null:lI}extendMaterialParams(L,I){let N=this.parser,t=N.json.materials[L];if(!t.extensions||!t.extensions[this.name])return Promise.resolve();let P=[],n=t.extensions[this.name];return n.iridescenceFactor!==void 0&&(I.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&P.push(N.assignTexture(I,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(I.iridescenceIOR=n.iridescenceIor),I.iridescenceThicknessRange===void 0&&(I.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(I.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(I.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&P.push(N.assignTexture(I,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(P)}},Ui=class{constructor(L){this.parser=L,this.name=wL.KHR_MATERIALS_SHEEN}getMaterialType(L){let N=this.parser.json.materials[L];return!N.extensions||!N.extensions[this.name]?null:lI}extendMaterialParams(L,I){let N=this.parser,t=N.json.materials[L];if(!t.extensions||!t.extensions[this.name])return Promise.resolve();let P=[];I.sheenColor=new lL(0,0,0),I.sheenRoughness=0,I.sheen=1;let n=t.extensions[this.name];if(n.sheenColorFactor!==void 0){let Q=n.sheenColorFactor;I.sheenColor.setRGB(Q[0],Q[1],Q[2],$I)}return n.sheenRoughnessFactor!==void 0&&(I.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&P.push(N.assignTexture(I,"sheenColorMap",n.sheenColorTexture,rI)),n.sheenRoughnessTexture!==void 0&&P.push(N.assignTexture(I,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(P)}},Ti=class{constructor(L){this.parser=L,this.name=wL.KHR_MATERIALS_TRANSMISSION}getMaterialType(L){let N=this.parser.json.materials[L];return!N.extensions||!N.extensions[this.name]?null:lI}extendMaterialParams(L,I){let N=this.parser,t=N.json.materials[L];if(!t.extensions||!t.extensions[this.name])return Promise.resolve();let P=[],n=t.extensions[this.name];return n.transmissionFactor!==void 0&&(I.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&P.push(N.assignTexture(I,"transmissionMap",n.transmissionTexture)),Promise.all(P)}},Xi=class{constructor(L){this.parser=L,this.name=wL.KHR_MATERIALS_VOLUME}getMaterialType(L){let N=this.parser.json.materials[L];return!N.extensions||!N.extensions[this.name]?null:lI}extendMaterialParams(L,I){let N=this.parser,t=N.json.materials[L];if(!t.extensions||!t.extensions[this.name])return Promise.resolve();let P=[],n=t.extensions[this.name];I.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&P.push(N.assignTexture(I,"thicknessMap",n.thicknessTexture)),I.attenuationDistance=n.attenuationDistance||1/0;let Q=n.attenuationColor||[1,1,1];return I.attenuationColor=new lL().setRGB(Q[0],Q[1],Q[2],$I),Promise.all(P)}},Ai=class{constructor(L){this.parser=L,this.name=wL.KHR_MATERIALS_IOR}getMaterialType(L){let N=this.parser.json.materials[L];return!N.extensions||!N.extensions[this.name]?null:lI}extendMaterialParams(L,I){let t=this.parser.json.materials[L];if(!t.extensions||!t.extensions[this.name])return Promise.resolve();let P=t.extensions[this.name];return I.ior=P.ior!==void 0?P.ior:1.5,Promise.resolve()}},wi=class{constructor(L){this.parser=L,this.name=wL.KHR_MATERIALS_SPECULAR}getMaterialType(L){let N=this.parser.json.materials[L];return!N.extensions||!N.extensions[this.name]?null:lI}extendMaterialParams(L,I){let N=this.parser,t=N.json.materials[L];if(!t.extensions||!t.extensions[this.name])return Promise.resolve();let P=[],n=t.extensions[this.name];I.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&P.push(N.assignTexture(I,"specularIntensityMap",n.specularTexture));let Q=n.specularColorFactor||[1,1,1];return I.specularColor=new lL().setRGB(Q[0],Q[1],Q[2],$I),n.specularColorTexture!==void 0&&P.push(N.assignTexture(I,"specularColorMap",n.specularColorTexture,rI)),Promise.all(P)}},_i=class{constructor(L){this.parser=L,this.name=wL.EXT_MATERIALS_BUMP}getMaterialType(L){let N=this.parser.json.materials[L];return!N.extensions||!N.extensions[this.name]?null:lI}extendMaterialParams(L,I){let N=this.parser,t=N.json.materials[L];if(!t.extensions||!t.extensions[this.name])return Promise.resolve();let P=[],n=t.extensions[this.name];return I.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&P.push(N.assignTexture(I,"bumpMap",n.bumpTexture)),Promise.all(P)}},Si=class{constructor(L){this.parser=L,this.name=wL.KHR_MATERIALS_ANISOTROPY}getMaterialType(L){let N=this.parser.json.materials[L];return!N.extensions||!N.extensions[this.name]?null:lI}extendMaterialParams(L,I){let N=this.parser,t=N.json.materials[L];if(!t.extensions||!t.extensions[this.name])return Promise.resolve();let P=[],n=t.extensions[this.name];return n.anisotropyStrength!==void 0&&(I.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(I.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&P.push(N.assignTexture(I,"anisotropyMap",n.anisotropyTexture)),Promise.all(P)}},ki=class{constructor(L){this.parser=L,this.name=wL.KHR_TEXTURE_BASISU}loadTexture(L){let I=this.parser,N=I.json,t=N.textures[L];if(!t.extensions||!t.extensions[this.name])return null;let P=t.extensions[this.name],n=I.options.ktx2Loader;if(!n){if(N.extensionsRequired&&N.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return I.loadTextureImage(L,P.source,n)}},Yi=class{constructor(L){this.parser=L,this.name=wL.EXT_TEXTURE_WEBP}loadTexture(L){let I=this.name,N=this.parser,t=N.json,P=t.textures[L];if(!P.extensions||!P.extensions[I])return null;let n=P.extensions[I],Q=t.images[n.source],r=N.textureLoader;if(Q.uri){let i=N.options.manager.getHandler(Q.uri);i!==null&&(r=i)}return N.loadTextureImage(L,n.source,r)}},Ci=class{constructor(L){this.parser=L,this.name=wL.EXT_TEXTURE_AVIF}loadTexture(L){let I=this.name,N=this.parser,t=N.json,P=t.textures[L];if(!P.extensions||!P.extensions[I])return null;let n=P.extensions[I],Q=t.images[n.source],r=N.textureLoader;if(Q.uri){let i=N.options.manager.getHandler(Q.uri);i!==null&&(r=i)}return N.loadTextureImage(L,n.source,r)}},gi=class{constructor(L){this.name=wL.EXT_MESHOPT_COMPRESSION,this.parser=L}loadBufferView(L){let I=this.parser.json,N=I.bufferViews[L];if(N.extensions&&N.extensions[this.name]){let t=N.extensions[this.name],P=this.parser.getDependency("buffer",t.buffer),n=this.parser.options.meshoptDecoder;if(!n||!n.supported){if(I.extensionsRequired&&I.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return P.then(function(Q){let r=t.byteOffset||0,i=t.byteLength||0,j=t.count,J=t.byteStride,F=new Uint8Array(Q,r,i);return n.decodeGltfBufferAsync?n.decodeGltfBufferAsync(j,J,F,t.mode,t.filter).then(function($){return $.buffer}):n.ready.then(function(){let $=new ArrayBuffer(j*J);return n.decodeGltfBuffer(new Uint8Array($),j,J,F,t.mode,t.filter),$})})}else return null}},Bi=class{constructor(L){this.name=wL.EXT_MESH_GPU_INSTANCING,this.parser=L}createNodeMesh(L){let I=this.parser.json,N=I.nodes[L];if(!N.extensions||!N.extensions[this.name]||N.mesh===void 0)return null;let t=I.meshes[N.mesh];for(let i of t.primitives)if(i.mode!==NN.TRIANGLES&&i.mode!==NN.TRIANGLE_STRIP&&i.mode!==NN.TRIANGLE_FAN&&i.mode!==void 0)return null;let n=N.extensions[this.name].attributes,Q=[],r={};for(let i in n)Q.push(this.parser.getDependency("accessor",n[i]).then(j=>(r[i]=j,r[i])));return Q.length<1?null:(Q.push(this.parser.createNodeMesh(L)),Promise.all(Q).then(i=>{let j=i.pop(),J=j.isGroup?j.children:[j],F=i[0].count,$=[];for(let d of J){let K=new qL,c=new u,m=new LN,f=new u(1,1,1),x=new $t(d.geometry,d.material,F);for(let H=0;H<F;H++)r.TRANSLATION&&c.fromBufferAttribute(r.TRANSLATION,H),r.ROTATION&&m.fromBufferAttribute(r.ROTATION,H),r.SCALE&&f.fromBufferAttribute(r.SCALE,H),x.setMatrixAt(H,K.compose(c,m,f));for(let H in r)if(H==="_COLOR_0"){let Z=r[H];x.instanceColor=new BN(Z.array,Z.itemSize,Z.normalized)}else H!=="TRANSLATION"&&H!=="ROTATION"&&H!=="SCALE"&&d.geometry.setAttribute(H,r[H]);jI.prototype.copy.call(x,d),this.parser.assignFinalMaterial(x),$.push(x)}return j.isGroup?(j.clear(),j.add(...$),j):$[0]}))}},H9="glTF",mP=12,K9={JSON:1313821514,BIN:5130562},Wi=class{constructor(L){this.name=wL.KHR_BINARY_GLTF,this.content=null,this.body=null;let I=new DataView(L,0,mP),N=new TextDecoder;if(this.header={magic:N.decode(new Uint8Array(L.slice(0,4))),version:I.getUint32(4,!0),length:I.getUint32(8,!0)},this.header.magic!==H9)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let t=this.header.length-mP,P=new DataView(L,mP),n=0;for(;n<t;){let Q=P.getUint32(n,!0);n+=4;let r=P.getUint32(n,!0);if(n+=4,r===K9.JSON){let i=new Uint8Array(L,mP+n,Q);this.content=N.decode(i)}else if(r===K9.BIN){let i=mP+n;this.body=L.slice(i,i+Q)}n+=Q}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Lr=class{constructor(L,I){if(!I)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=wL.KHR_DRACO_MESH_COMPRESSION,this.json=L,this.dracoLoader=I,this.dracoLoader.preload()}decodePrimitive(L,I){let N=this.json,t=this.dracoLoader,P=L.extensions[this.name].bufferView,n=L.extensions[this.name].attributes,Q={},r={},i={};for(let j in n){let J=er[j]||j.toLowerCase();Q[J]=n[j]}for(let j in L.attributes){let J=er[j]||j.toLowerCase();if(n[j]!==void 0){let F=N.accessors[L.attributes[j]],$=Oe[F.componentType];i[J]=$.name,r[J]=F.normalized===!0}}return I.getDependency("bufferView",P).then(function(j){return new Promise(function(J,F){t.decodeDracoFile(j,function($){for(let d in $.attributes){let K=$.attributes[d],c=r[d];c!==void 0&&(K.normalized=c)}J($)},Q,i,$I,F)})})}},Ir=class{constructor(){this.name=wL.KHR_TEXTURE_TRANSFORM}extendTexture(L,I){return(I.texCoord===void 0||I.texCoord===L.channel)&&I.offset===void 0&&I.rotation===void 0&&I.scale===void 0||(L=L.clone(),I.texCoord!==void 0&&(L.channel=I.texCoord),I.offset!==void 0&&L.offset.fromArray(I.offset),I.rotation!==void 0&&(L.rotation=I.rotation),I.scale!==void 0&&L.repeat.fromArray(I.scale),L.needsUpdate=!0),L}},Nr=class{constructor(){this.name=wL.KHR_MESH_QUANTIZATION}},tQ=class extends hN{constructor(L,I,N,t){super(L,I,N,t)}copySampleValue_(L){let I=this.resultBuffer,N=this.sampleValues,t=this.valueSize,P=L*t*3+t;for(let n=0;n!==t;n++)I[n]=N[P+n];return I}interpolate_(L,I,N,t){let P=this.resultBuffer,n=this.sampleValues,Q=this.valueSize,r=Q*2,i=Q*3,j=t-I,J=(N-I)/j,F=J*J,$=F*J,d=L*i,K=d-i,c=-2*$+3*F,m=$-F,f=1-c,x=m-F+J;for(let H=0;H!==Q;H++){let Z=n[K+H+Q],R=n[K+H+r]*j,z=n[d+H+Q],D=n[d+H]*j;P[H]=f*Z+x*R+c*z+m*D}return P}},oc=new LN,tr=class extends tQ{interpolate_(L,I,N,t){let P=super.interpolate_(L,I,N,t);return oc.fromArray(P).normalize().toArray(P),P}},NN={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Oe={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},G9={9728:xI,9729:QI,9984:cn,9985:Je,9986:ft,9987:vI},s9={33071:BI,33648:kt,10497:WI},Ei={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},er={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},It={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xc={CUBICSPLINE:void 0,LINEAR:Ft,STEP:Jt},ui={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function fc(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new Mt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:AI})),e.DefaultMaterial}function Dt(e,L,I){for(let N in I.extensions)e[N]===void 0&&(L.userData.gltfExtensions=L.userData.gltfExtensions||{},L.userData.gltfExtensions[N]=I.extensions[N])}function oN(e,L){L.extras!==void 0&&(typeof L.extras=="object"?Object.assign(e.userData,L.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+L.extras))}function Zc(e,L,I){let N=!1,t=!1,P=!1;for(let i=0,j=L.length;i<j;i++){let J=L[i];if(J.POSITION!==void 0&&(N=!0),J.NORMAL!==void 0&&(t=!0),J.COLOR_0!==void 0&&(P=!0),N&&t&&P)break}if(!N&&!t&&!P)return Promise.resolve(e);let n=[],Q=[],r=[];for(let i=0,j=L.length;i<j;i++){let J=L[i];if(N){let F=J.POSITION!==void 0?I.getDependency("accessor",J.POSITION):e.attributes.position;n.push(F)}if(t){let F=J.NORMAL!==void 0?I.getDependency("accessor",J.NORMAL):e.attributes.normal;Q.push(F)}if(P){let F=J.COLOR_0!==void 0?I.getDependency("accessor",J.COLOR_0):e.attributes.color;r.push(F)}}return Promise.all([Promise.all(n),Promise.all(Q),Promise.all(r)]).then(function(i){let j=i[0],J=i[1],F=i[2];return N&&(e.morphAttributes.position=j),t&&(e.morphAttributes.normal=J),P&&(e.morphAttributes.color=F),e.morphTargetsRelative=!0,e})}function lc(e,L){if(e.updateMorphTargets(),L.weights!==void 0)for(let I=0,N=L.weights.length;I<N;I++)e.morphTargetInfluences[I]=L.weights[I];if(L.extras&&Array.isArray(L.extras.targetNames)){let I=L.extras.targetNames;if(e.morphTargetInfluences.length===I.length){e.morphTargetDictionary={};for(let N=0,t=I.length;N<t;N++)e.morphTargetDictionary[I[N]]=N}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Rc(e){let L,I=e.extensions&&e.extensions[wL.KHR_DRACO_MESH_COMPRESSION];if(I?L="draco:"+I.bufferView+":"+I.indices+":"+hi(I.attributes):L=e.indices+":"+hi(e.attributes)+":"+e.mode,e.targets!==void 0)for(let N=0,t=e.targets.length;N<t;N++)L+=":"+hi(e.targets[N]);return L}function hi(e){let L="",I=Object.keys(e).sort();for(let N=0,t=I.length;N<t;N++)L+=I[N]+":"+e[I[N]]+";";return L}function Pr(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ac(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?"image/jpeg":e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?"image/webp":e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var zc=new qL,nr=class{constructor(L={},I={}){this.json=L,this.extensions={},this.plugins={},this.options=I,this.cache=new Hc,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let N=!1,t=-1,P=!1,n=-1;if(typeof navigator<"u"){let Q=navigator.userAgent;N=/^((?!chrome|android).)*safari/i.test(Q)===!0;let r=Q.match(/Version\/(\d+)/);t=N&&r?parseInt(r[1],10):-1,P=Q.indexOf("Firefox")>-1,n=P?Q.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||N&&t<17||P&&n<98?this.textureLoader=new Gt(this.options.manager):this.textureLoader=new tP(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Kt(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(L){this.extensions=L}setPlugins(L){this.plugins=L}parse(L,I){let N=this,t=this.json,P=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(n){return n._markDefs&&n._markDefs()}),Promise.all(this._invokeAll(function(n){return n.beforeRoot&&n.beforeRoot()})).then(function(){return Promise.all([N.getDependencies("scene"),N.getDependencies("animation"),N.getDependencies("camera")])}).then(function(n){let Q={scene:n[0][t.scene||0],scenes:n[0],animations:n[1],cameras:n[2],asset:t.asset,parser:N,userData:{}};return Dt(P,Q,t),oN(Q,t),Promise.all(N._invokeAll(function(r){return r.afterRoot&&r.afterRoot(Q)})).then(function(){for(let r of Q.scenes)r.updateMatrixWorld();L(Q)})}).catch(I)}_markDefs(){let L=this.json.nodes||[],I=this.json.skins||[],N=this.json.meshes||[];for(let t=0,P=I.length;t<P;t++){let n=I[t].joints;for(let Q=0,r=n.length;Q<r;Q++)L[n[Q]].isBone=!0}for(let t=0,P=L.length;t<P;t++){let n=L[t];n.mesh!==void 0&&(this._addNodeRef(this.meshCache,n.mesh),n.skin!==void 0&&(N[n.mesh].isSkinnedMesh=!0)),n.camera!==void 0&&this._addNodeRef(this.cameraCache,n.camera)}}_addNodeRef(L,I){I!==void 0&&(L.refs[I]===void 0&&(L.refs[I]=L.uses[I]=0),L.refs[I]++)}_getNodeRef(L,I,N){if(L.refs[I]<=1)return N;let t=N.clone(),P=(n,Q)=>{let r=this.associations.get(n);r!=null&&this.associations.set(Q,r);for(let[i,j]of n.children.entries())P(j,Q.children[i])};return P(N,t),t.name+="_instance_"+L.uses[I]++,t}_invokeOne(L){let I=Object.values(this.plugins);I.push(this);for(let N=0;N<I.length;N++){let t=L(I[N]);if(t)return t}return null}_invokeAll(L){let I=Object.values(this.plugins);I.unshift(this);let N=[];for(let t=0;t<I.length;t++){let P=L(I[t]);P&&N.push(P)}return N}getDependency(L,I){let N=L+":"+I,t=this.cache.get(N);if(!t){switch(L){case"scene":t=this.loadScene(I);break;case"node":t=this._invokeOne(function(P){return P.loadNode&&P.loadNode(I)});break;case"mesh":t=this._invokeOne(function(P){return P.loadMesh&&P.loadMesh(I)});break;case"accessor":t=this.loadAccessor(I);break;case"bufferView":t=this._invokeOne(function(P){return P.loadBufferView&&P.loadBufferView(I)});break;case"buffer":t=this.loadBuffer(I);break;case"material":t=this._invokeOne(function(P){return P.loadMaterial&&P.loadMaterial(I)});break;case"texture":t=this._invokeOne(function(P){return P.loadTexture&&P.loadTexture(I)});break;case"skin":t=this.loadSkin(I);break;case"animation":t=this._invokeOne(function(P){return P.loadAnimation&&P.loadAnimation(I)});break;case"camera":t=this.loadCamera(I);break;default:if(t=this._invokeOne(function(P){return P!=this&&P.getDependency&&P.getDependency(L,I)}),!t)throw new Error("Unknown type: "+L);break}this.cache.add(N,t)}return t}getDependencies(L){let I=this.cache.get(L);if(!I){let N=this,t=this.json[L+(L==="mesh"?"es":"s")]||[];I=Promise.all(t.map(function(P,n){return N.getDependency(L,n)})),this.cache.add(L,I)}return I}loadBuffer(L){let I=this.json.buffers[L],N=this.fileLoader;if(I.type&&I.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+I.type+" buffer type is not supported.");if(I.uri===void 0&&L===0)return Promise.resolve(this.extensions[wL.KHR_BINARY_GLTF].body);let t=this.options;return new Promise(function(P,n){N.load(pN.resolveURL(I.uri,t.path),P,void 0,function(){n(new Error('THREE.GLTFLoader: Failed to load buffer "'+I.uri+'".'))})})}loadBufferView(L){let I=this.json.bufferViews[L];return this.getDependency("buffer",I.buffer).then(function(N){let t=I.byteLength||0,P=I.byteOffset||0;return N.slice(P,P+t)})}loadAccessor(L){let I=this,N=this.json,t=this.json.accessors[L];if(t.bufferView===void 0&&t.sparse===void 0){let n=Ei[t.type],Q=Oe[t.componentType],r=t.normalized===!0,i=new Q(t.count*n);return Promise.resolve(new KI(i,n,r))}let P=[];return t.bufferView!==void 0?P.push(this.getDependency("bufferView",t.bufferView)):P.push(null),t.sparse!==void 0&&(P.push(this.getDependency("bufferView",t.sparse.indices.bufferView)),P.push(this.getDependency("bufferView",t.sparse.values.bufferView))),Promise.all(P).then(function(n){let Q=n[0],r=Ei[t.type],i=Oe[t.componentType],j=i.BYTES_PER_ELEMENT,J=j*r,F=t.byteOffset||0,$=t.bufferView!==void 0?N.bufferViews[t.bufferView].byteStride:void 0,d=t.normalized===!0,K,c;if($&&$!==J){let m=Math.floor(F/$),f="InterleavedBuffer:"+t.bufferView+":"+t.componentType+":"+m+":"+t.count,x=I.cache.get(f);x||(K=new i(Q,m*$,t.count*$/j),x=new ee(K,$/j),I.cache.add(f,x)),c=new Pe(x,r,F%$/j,d)}else Q===null?K=new i(t.count*r):K=new i(Q,F,t.count*r),c=new KI(K,r,d);if(t.sparse!==void 0){let m=Ei.SCALAR,f=Oe[t.sparse.indices.componentType],x=t.sparse.indices.byteOffset||0,H=t.sparse.values.byteOffset||0,Z=new f(n[1],x,t.sparse.count*m),R=new i(n[2],H,t.sparse.count*r);Q!==null&&(c=new KI(c.array.slice(),c.itemSize,c.normalized)),c.normalized=!1;for(let z=0,D=Z.length;z<D;z++){let s=Z[z];if(c.setX(s,R[z*r]),r>=2&&c.setY(s,R[z*r+1]),r>=3&&c.setZ(s,R[z*r+2]),r>=4&&c.setW(s,R[z*r+3]),r>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}c.normalized=d}return c})}loadTexture(L){let I=this.json,N=this.options,P=I.textures[L].source,n=I.images[P],Q=this.textureLoader;if(n.uri){let r=N.manager.getHandler(n.uri);r!==null&&(Q=r)}return this.loadTextureImage(L,P,Q)}loadTextureImage(L,I,N){let t=this,P=this.json,n=P.textures[L],Q=P.images[I],r=(Q.uri||Q.bufferView)+":"+n.sampler;if(this.textureCache[r])return this.textureCache[r];let i=this.loadImageSource(I,N).then(function(j){j.flipY=!1,j.name=n.name||Q.name||"",j.name===""&&typeof Q.uri=="string"&&Q.uri.startsWith("data:image/")===!1&&(j.name=Q.uri);let F=(P.samplers||{})[n.sampler]||{};return j.magFilter=G9[F.magFilter]||QI,j.minFilter=G9[F.minFilter]||vI,j.wrapS=s9[F.wrapS]||WI,j.wrapT=s9[F.wrapT]||WI,j.generateMipmaps=!j.isCompressedTexture&&j.minFilter!==xI&&j.minFilter!==QI,t.associations.set(j,{textures:L}),j}).catch(function(){return null});return this.textureCache[r]=i,i}loadImageSource(L,I){let N=this,t=this.json,P=this.options;if(this.sourceCache[L]!==void 0)return this.sourceCache[L].then(J=>J.clone());let n=t.images[L],Q=self.URL||self.webkitURL,r=n.uri||"",i=!1;if(n.bufferView!==void 0)r=N.getDependency("bufferView",n.bufferView).then(function(J){i=!0;let F=new Blob([J],{type:n.mimeType});return r=Q.createObjectURL(F),r});else if(n.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+L+" is missing URI and bufferView");let j=Promise.resolve(r).then(function(J){return new Promise(function(F,$){let d=F;I.isImageBitmapLoader===!0&&(d=function(K){let c=new GI(K);c.needsUpdate=!0,F(c)}),I.load(pN.resolveURL(J,P.path),d,void 0,$)})}).then(function(J){return i===!0&&Q.revokeObjectURL(r),oN(J,n),J.userData.mimeType=n.mimeType||ac(n.uri),J}).catch(function(J){throw console.error("THREE.GLTFLoader: Couldn't load texture",r),J});return this.sourceCache[L]=j,j}assignTexture(L,I,N,t){let P=this;return this.getDependency("texture",N.index).then(function(n){if(!n)return null;if(N.texCoord!==void 0&&N.texCoord>0&&(n=n.clone(),n.channel=N.texCoord),P.extensions[wL.KHR_TEXTURE_TRANSFORM]){let Q=N.extensions!==void 0?N.extensions[wL.KHR_TEXTURE_TRANSFORM]:void 0;if(Q){let r=P.associations.get(n);n=P.extensions[wL.KHR_TEXTURE_TRANSFORM].extendTexture(n,Q),P.associations.set(n,r)}}return t!==void 0&&(n.colorSpace=t),L[I]=n,n})}assignFinalMaterial(L){let I=L.geometry,N=L.material,t=I.attributes.tangent===void 0,P=I.attributes.color!==void 0,n=I.attributes.normal===void 0;if(L.isPoints){let Q="PointsMaterial:"+N.uuid,r=this.cache.get(Q);r||(r=new re,VI.prototype.copy.call(r,N),r.color.copy(N.color),r.map=N.map,r.sizeAttenuation=!1,this.cache.add(Q,r)),N=r}else if(L.isLine){let Q="LineBasicMaterial:"+N.uuid,r=this.cache.get(Q);r||(r=new ie,VI.prototype.copy.call(r,N),r.color.copy(N.color),r.map=N.map,this.cache.add(Q,r)),N=r}if(t||P||n){let Q="ClonedMaterial:"+N.uuid+":";t&&(Q+="derivative-tangents:"),P&&(Q+="vertex-colors:"),n&&(Q+="flat-shading:");let r=this.cache.get(Q);r||(r=N.clone(),P&&(r.vertexColors=!0),n&&(r.flatShading=!0),t&&(r.normalScale&&(r.normalScale.y*=-1),r.clearcoatNormalScale&&(r.clearcoatNormalScale.y*=-1)),this.cache.add(Q,r),this.associations.set(r,this.associations.get(N))),N=r}L.material=N}getMaterialType(){return Mt}loadMaterial(L){let I=this,N=this.json,t=this.extensions,P=N.materials[L],n,Q={},r=P.extensions||{},i=[];if(r[wL.KHR_MATERIALS_UNLIT]){let J=t[wL.KHR_MATERIALS_UNLIT];n=J.getMaterialType(),i.push(J.extendParams(Q,P,I))}else{let J=P.pbrMetallicRoughness||{};if(Q.color=new lL(1,1,1),Q.opacity=1,Array.isArray(J.baseColorFactor)){let F=J.baseColorFactor;Q.color.setRGB(F[0],F[1],F[2],$I),Q.opacity=F[3]}J.baseColorTexture!==void 0&&i.push(I.assignTexture(Q,"map",J.baseColorTexture,rI)),Q.metalness=J.metallicFactor!==void 0?J.metallicFactor:1,Q.roughness=J.roughnessFactor!==void 0?J.roughnessFactor:1,J.metallicRoughnessTexture!==void 0&&(i.push(I.assignTexture(Q,"metalnessMap",J.metallicRoughnessTexture)),i.push(I.assignTexture(Q,"roughnessMap",J.metallicRoughnessTexture))),n=this._invokeOne(function(F){return F.getMaterialType&&F.getMaterialType(L)}),i.push(Promise.all(this._invokeAll(function(F){return F.extendMaterialParams&&F.extendMaterialParams(L,Q)})))}P.doubleSided===!0&&(Q.side=IN);let j=P.alphaMode||ui.OPAQUE;if(j===ui.BLEND?(Q.transparent=!0,Q.depthWrite=!1):(Q.transparent=!1,j===ui.MASK&&(Q.alphaTest=P.alphaCutoff!==void 0?P.alphaCutoff:.5)),P.normalTexture!==void 0&&n!==_I&&(i.push(I.assignTexture(Q,"normalMap",P.normalTexture)),Q.normalScale=new AL(1,1),P.normalTexture.scale!==void 0)){let J=P.normalTexture.scale;Q.normalScale.set(J,J)}if(P.occlusionTexture!==void 0&&n!==_I&&(i.push(I.assignTexture(Q,"aoMap",P.occlusionTexture)),P.occlusionTexture.strength!==void 0&&(Q.aoMapIntensity=P.occlusionTexture.strength)),P.emissiveFactor!==void 0&&n!==_I){let J=P.emissiveFactor;Q.emissive=new lL().setRGB(J[0],J[1],J[2],$I)}return P.emissiveTexture!==void 0&&n!==_I&&i.push(I.assignTexture(Q,"emissiveMap",P.emissiveTexture,rI)),Promise.all(i).then(function(){let J=new n(Q);return P.name&&(J.name=P.name),oN(J,P),I.associations.set(J,{materials:L}),P.extensions&&Dt(t,J,P),J})}createUniqueName(L){let I=eI.sanitizeNodeName(L||"");return I in this.nodeNamesUsed?I+"_"+ ++this.nodeNamesUsed[I]:(this.nodeNamesUsed[I]=0,I)}loadGeometries(L){let I=this,N=this.extensions,t=this.primitiveCache;function P(Q){return N[wL.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(Q,I).then(function(r){return O9(r,Q,I)})}let n=[];for(let Q=0,r=L.length;Q<r;Q++){let i=L[Q],j=Rc(i),J=t[j];if(J)n.push(J.promise);else{let F;i.extensions&&i.extensions[wL.KHR_DRACO_MESH_COMPRESSION]?F=P(i):F=O9(new SI,i,I),t[j]={primitive:i,promise:F},n.push(F)}}return Promise.all(n)}loadMesh(L){let I=this,N=this.json,t=this.extensions,P=N.meshes[L],n=P.primitives,Q=[];for(let r=0,i=n.length;r<i;r++){let j=n[r].material===void 0?fc(this.cache):this.getDependency("material",n[r].material);Q.push(j)}return Q.push(I.loadGeometries(n)),Promise.all(Q).then(function(r){let i=r.slice(0,r.length-1),j=r[r.length-1],J=[];for(let $=0,d=j.length;$<d;$++){let K=j[$],c=n[$],m,f=i[$];if(c.mode===NN.TRIANGLES||c.mode===NN.TRIANGLE_STRIP||c.mode===NN.TRIANGLE_FAN||c.mode===void 0)m=P.isSkinnedMesh===!0?new Te(K,f):new sI(K,f),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),c.mode===NN.TRIANGLE_STRIP?m.geometry=Di(m.geometry,JP):c.mode===NN.TRIANGLE_FAN&&(m.geometry=Di(m.geometry,ce));else if(c.mode===NN.LINES)m=new Ae(K,f);else if(c.mode===NN.LINE_STRIP)m=new ct(K,f);else if(c.mode===NN.LINE_LOOP)m=new we(K,f);else if(c.mode===NN.POINTS)m=new _e(K,f);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+c.mode);Object.keys(m.geometry.morphAttributes).length>0&&lc(m,P),m.name=I.createUniqueName(P.name||"mesh_"+L),oN(m,P),c.extensions&&Dt(t,m,c),I.assignFinalMaterial(m),J.push(m)}for(let $=0,d=J.length;$<d;$++)I.associations.set(J[$],{meshes:L,primitives:$});if(J.length===1)return P.extensions&&Dt(t,J[0],P),J[0];let F=new iN;P.extensions&&Dt(t,F,P),I.associations.set(F,{meshes:L});for(let $=0,d=J.length;$<d;$++)F.add(J[$]);return F})}loadCamera(L){let I,N=this.json.cameras[L],t=N[N.type];if(!t){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return N.type==="perspective"?I=new MI(Lt.radToDeg(t.yfov),t.aspectRatio||1,t.znear||1,t.zfar||2e6):N.type==="orthographic"&&(I=new Ot(-t.xmag,t.xmag,t.ymag,-t.ymag,t.znear,t.zfar)),N.name&&(I.name=this.createUniqueName(N.name)),oN(I,N),Promise.resolve(I)}loadSkin(L){let I=this.json.skins[L],N=[];for(let t=0,P=I.joints.length;t<P;t++)N.push(this._loadNodeShallow(I.joints[t]));return I.inverseBindMatrices!==void 0?N.push(this.getDependency("accessor",I.inverseBindMatrices)):N.push(null),Promise.all(N).then(function(t){let P=t.pop(),n=t,Q=[],r=[];for(let i=0,j=n.length;i<j;i++){let J=n[i];if(J){Q.push(J);let F=new qL;P!==null&&F.fromArray(P.array,i*16),r.push(F)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',I.joints[i])}return new Xe(Q,r)})}loadAnimation(L){let I=this.json,N=this,t=I.animations[L],P=t.name?t.name:"animation_"+L,n=[],Q=[],r=[],i=[],j=[];for(let J=0,F=t.channels.length;J<F;J++){let $=t.channels[J],d=t.samplers[$.sampler],K=$.target,c=K.node,m=t.parameters!==void 0?t.parameters[d.input]:d.input,f=t.parameters!==void 0?t.parameters[d.output]:d.output;K.node!==void 0&&(n.push(this.getDependency("node",c)),Q.push(this.getDependency("accessor",m)),r.push(this.getDependency("accessor",f)),i.push(d),j.push(K))}return Promise.all([Promise.all(n),Promise.all(Q),Promise.all(r),Promise.all(i),Promise.all(j)]).then(function(J){let F=J[0],$=J[1],d=J[2],K=J[3],c=J[4],m=[];for(let x=0,H=F.length;x<H;x++){let Z=F[x],R=$[x],z=d[x],D=K[x],s=c[x];if(Z===void 0)continue;Z.updateMatrix&&Z.updateMatrix();let G=N._createAnimationTracks(Z,R,z,D,s);if(G)for(let a=0;a<G.length;a++)m.push(G[a])}let f=new ge(P,void 0,m);return oN(f,t),f})}createNodeMesh(L){let I=this.json,N=this,t=I.nodes[L];return t.mesh===void 0?null:N.getDependency("mesh",t.mesh).then(function(P){let n=N._getNodeRef(N.meshCache,t.mesh,P);return t.weights!==void 0&&n.traverse(function(Q){if(Q.isMesh)for(let r=0,i=t.weights.length;r<i;r++)Q.morphTargetInfluences[r]=t.weights[r]}),n})}loadNode(L){let I=this.json,N=this,t=I.nodes[L],P=N._loadNodeShallow(L),n=[],Q=t.children||[];for(let i=0,j=Q.length;i<j;i++)n.push(N.getDependency("node",Q[i]));let r=t.skin===void 0?Promise.resolve(null):N.getDependency("skin",t.skin);return Promise.all([P,Promise.all(n),r]).then(function(i){let j=i[0],J=i[1],F=i[2];F!==null&&j.traverse(function($){$.isSkinnedMesh&&$.bind(F,zc)});for(let $=0,d=J.length;$<d;$++)j.add(J[$]);return j})}_loadNodeShallow(L){let I=this.json,N=this.extensions,t=this;if(this.nodeCache[L]!==void 0)return this.nodeCache[L];let P=I.nodes[L],n=P.name?t.createUniqueName(P.name):"",Q=[],r=t._invokeOne(function(i){return i.createNodeMesh&&i.createNodeMesh(L)});return r&&Q.push(r),P.camera!==void 0&&Q.push(t.getDependency("camera",P.camera).then(function(i){return t._getNodeRef(t.cameraCache,P.camera,i)})),t._invokeAll(function(i){return i.createNodeAttachment&&i.createNodeAttachment(L)}).forEach(function(i){Q.push(i)}),this.nodeCache[L]=Promise.all(Q).then(function(i){let j;if(P.isBone===!0?j=new ne:i.length>1?j=new iN:i.length===1?j=i[0]:j=new jI,j!==i[0])for(let J=0,F=i.length;J<F;J++)j.add(i[J]);if(P.name&&(j.userData.name=P.name,j.name=n),oN(j,P),P.extensions&&Dt(N,j,P),P.matrix!==void 0){let J=new qL;J.fromArray(P.matrix),j.applyMatrix4(J)}else P.translation!==void 0&&j.position.fromArray(P.translation),P.rotation!==void 0&&j.quaternion.fromArray(P.rotation),P.scale!==void 0&&j.scale.fromArray(P.scale);if(!t.associations.has(j))t.associations.set(j,{});else if(P.mesh!==void 0&&t.meshCache.refs[P.mesh]>1){let J=t.associations.get(j);t.associations.set(j,{...J})}return t.associations.get(j).nodes=L,j}),this.nodeCache[L]}loadScene(L){let I=this.extensions,N=this.json.scenes[L],t=this,P=new iN;N.name&&(P.name=t.createUniqueName(N.name)),oN(P,N),N.extensions&&Dt(I,P,N);let n=N.nodes||[],Q=[];for(let r=0,i=n.length;r<i;r++)Q.push(t.getDependency("node",n[r]));return Promise.all(Q).then(function(r){for(let j=0,J=r.length;j<J;j++)P.add(r[j]);let i=j=>{let J=new Map;for(let[F,$]of t.associations)(F instanceof VI||F instanceof GI)&&J.set(F,$);return j.traverse(F=>{let $=t.associations.get(F);$!=null&&J.set(F,$)}),J};return t.associations=i(P),P})}_createAnimationTracks(L,I,N,t,P){let n=[],Q=L.name?L.name:L.uuid,r=[];It[P.path]===It.weights?L.traverse(function(F){F.morphTargetInfluences&&r.push(F.name?F.name:F.uuid)}):r.push(Q);let i;switch(It[P.path]){case It.weights:i=KN;break;case It.rotation:i=GN;break;case It.translation:case It.scale:i=sN;break;default:switch(N.itemSize){case 1:i=KN;break;case 2:case 3:default:i=sN;break}break}let j=t.interpolation!==void 0?xc[t.interpolation]:Ft,J=this._getArrayFromAccessor(N);for(let F=0,$=r.length;F<$;F++){let d=new i(r[F]+"."+It[P.path],I.array,J,j);t.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(d),n.push(d)}return n}_getArrayFromAccessor(L){let I=L.array;if(L.normalized){let N=Pr(I.constructor),t=new Float32Array(I.length);for(let P=0,n=I.length;P<n;P++)t[P]=I[P]*N;I=t}return I}_createCubicSplineTrackInterpolant(L){L.createInterpolant=function(N){let t=this instanceof GN?tr:tQ;return new t(this.times,this.values,this.getValueSize()/3,N)},L.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Dc(e,L,I){let N=L.attributes,t=new wI;if(N.POSITION!==void 0){let Q=I.json.accessors[N.POSITION],r=Q.min,i=Q.max;if(r!==void 0&&i!==void 0){if(t.set(new u(r[0],r[1],r[2]),new u(i[0],i[1],i[2])),Q.normalized){let j=Pr(Oe[Q.componentType]);t.min.multiplyScalar(j),t.max.multiplyScalar(j)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let P=L.targets;if(P!==void 0){let Q=new u,r=new u;for(let i=0,j=P.length;i<j;i++){let J=P[i];if(J.POSITION!==void 0){let F=I.json.accessors[J.POSITION],$=F.min,d=F.max;if($!==void 0&&d!==void 0){if(r.setX(Math.max(Math.abs($[0]),Math.abs(d[0]))),r.setY(Math.max(Math.abs($[1]),Math.abs(d[1]))),r.setZ(Math.max(Math.abs($[2]),Math.abs(d[2]))),F.normalized){let K=Pr(Oe[F.componentType]);r.multiplyScalar(K)}Q.max(r)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}t.expandByVector(Q)}e.boundingBox=t;let n=new bI;t.getCenter(n.center),n.radius=t.min.distanceTo(t.max)/2,e.boundingSphere=n}function O9(e,L,I){let N=L.attributes,t=[];function P(n,Q){return I.getDependency("accessor",n).then(function(r){e.setAttribute(Q,r)})}for(let n in N){let Q=er[n]||n.toLowerCase();Q in e.attributes||t.push(P(N[n],Q))}if(L.indices!==void 0&&!e.index){let n=I.getDependency("accessor",L.indices).then(function(Q){e.setIndex(Q)});t.push(n)}return SL.workingColorSpace!==$I&&"COLOR_0"in N&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${SL.workingColorSpace}" not supported.`),oN(e,L),Dc(e,L,I),Promise.all(t).then(function(){return L.targets!==void 0?Zc(e,L.targets,I):e})}var eQ=class extends Be{constructor(L){super(L),this.type=kI}parse(L){let n=function(D,s){switch(D){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(s||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(s||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(s||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(s||""))}},J=function(D,s,G){s=s||1024;let v=D.pos,y=-1,q=0,w="",U=String.fromCharCode.apply(null,new Uint16Array(D.subarray(v,v+128)));for(;0>(y=U.indexOf(`
`))&&q<s&&v<D.byteLength;)w+=U,q+=U.length,v+=128,U+=String.fromCharCode.apply(null,new Uint16Array(D.subarray(v,v+128)));return-1<y?(G!==!1&&(D.pos+=q+y+1),w+U.slice(0,y)):!1},F=function(D){let s=/^#\?(\S+)/,G=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,a=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,v=/^\s*FORMAT=(\S+)\s*$/,y=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,q={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},w,U;for((D.pos>=D.byteLength||!(w=J(D)))&&n(1,"no header found"),(U=w.match(s))||n(3,"bad initial token"),q.valid|=1,q.programtype=U[1],q.string+=w+`
`;w=J(D),w!==!1;){if(q.string+=w+`
`,w.charAt(0)==="#"){q.comments+=w+`
`;continue}if((U=w.match(G))&&(q.gamma=parseFloat(U[1])),(U=w.match(a))&&(q.exposure=parseFloat(U[1])),(U=w.match(v))&&(q.valid|=2,q.format=U[1]),(U=w.match(y))&&(q.valid|=4,q.height=parseInt(U[1],10),q.width=parseInt(U[2],10)),q.valid&2&&q.valid&4)break}return q.valid&2||n(3,"missing format specifier"),q.valid&4||n(3,"missing image size specifier"),q},$=function(D,s,G){let a=s;if(a<8||a>32767||D[0]!==2||D[1]!==2||D[2]&128)return new Uint8Array(D);a!==(D[2]<<8|D[3])&&n(3,"wrong scanline width");let v=new Uint8Array(4*s*G);v.length||n(4,"unable to allocate buffer space");let y=0,q=0,w=4*a,U=new Uint8Array(4),B=new Uint8Array(w),_=G;for(;_>0&&q<D.byteLength;){q+4>D.byteLength&&n(1),U[0]=D[q++],U[1]=D[q++],U[2]=D[q++],U[3]=D[q++],(U[0]!=2||U[1]!=2||(U[2]<<8|U[3])!=a)&&n(3,"bad rgbe scanline format");let eL=0,nL;for(;eL<w&&q<D.byteLength;){nL=D[q++];let RL=nL>128;if(RL&&(nL-=128),(nL===0||eL+nL>w)&&n(3,"bad scanline data"),RL){let TL=D[q++];for(let kL=0;kL<nL;kL++)B[eL++]=TL}else B.set(D.subarray(q,q+nL),eL),eL+=nL,q+=nL}let dL=a;for(let RL=0;RL<dL;RL++){let TL=0;v[y]=B[RL+TL],TL+=a,v[y+1]=B[RL+TL],TL+=a,v[y+2]=B[RL+TL],TL+=a,v[y+3]=B[RL+TL],y+=4}_--}return v},d=function(D,s,G,a){let v=D[s+3],y=Math.pow(2,v-128)/255;G[a+0]=D[s+0]*y,G[a+1]=D[s+1]*y,G[a+2]=D[s+2]*y,G[a+3]=1},K=function(D,s,G,a){let v=D[s+3],y=Math.pow(2,v-128)/255;G[a+0]=CN.toHalfFloat(Math.min(D[s+0]*y,65504)),G[a+1]=CN.toHalfFloat(Math.min(D[s+1]*y,65504)),G[a+2]=CN.toHalfFloat(Math.min(D[s+2]*y,65504)),G[a+3]=CN.toHalfFloat(1)},c=new Uint8Array(L);c.pos=0;let m=F(c),f=m.width,x=m.height,H=$(c.subarray(c.pos),f,x),Z,R,z;switch(this.type){case RI:z=H.length/4;let D=new Float32Array(z*4);for(let G=0;G<z;G++)d(H,G*4,D,G*4);Z=D,R=RI;break;case kI:z=H.length/4;let s=new Uint16Array(z*4);for(let G=0;G<z;G++)K(H,G*4,s,G*4);Z=s,R=kI;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:f,height:x,data:Z,header:m.string,gamma:m.gamma,exposure:m.exposure,type:R}}setDataType(L){return this.type=L,this}load(L,I,N,t){function P(n,Q){switch(n.type){case RI:case kI:n.colorSpace=$I,n.minFilter=QI,n.magFilter=QI,n.generateMipmaps=!1,n.flipY=!0;break}I&&I(n,Q)}return super.load(L,P,N,t)}};var o9="./assets/site-sky-ZNDKFOU7.hdr";var x9="./assets/sunroom-KNMOJJ5M.glb";var f9="./assets/indirect-day-CTOFNWVS.jpg";var Z9="./assets/indirect-evening-D55PQYGK.jpg";var l9="./assets/indirect-walls-day-UXWXDA7I.png";var R9="./assets/indirect-walls-evening-BETW3EMK.png";var a9="./assets/indirect-trim-day-6V5WBJGV.png";var z9="./assets/indirect-trim-evening-VUG4GRKS.png";var D9="./assets/indirect-furnishings-day-BGZOUXCZ.jpg";var E9="./assets/indirect-furnishings-evening-NQAH2AVF.jpg";var Qr={day:{range:4,peak:1.492431640625,bake:"direct+indirect",solarDate:"2026-11-16",solarLocalTime:"15:00"},evening:{range:4,peak:2.5389404296875,bake:"direct+indirect",solarDate:"2026-11-16",solarLocalTime:"15:00"},"walls-day":{range:4,peak:1.62353515625,bake:"direct+indirect",solarDate:"2026-11-16",solarLocalTime:"15:00"},"walls-evening":{range:4,peak:.9892578125,bake:"direct+indirect",solarDate:"2026-11-16",solarLocalTime:"15:00"},"trim-day":{range:4,peak:1.50946044921875,bake:"direct+indirect",solarDate:"2026-11-16",solarLocalTime:"15:00"},"trim-evening":{range:4,peak:1.123779296875,bake:"direct+indirect",solarDate:"2026-11-16",solarLocalTime:"15:00"},"furnishings-day":{range:4,peak:2.9632568359375,bake:"direct+indirect",solarDate:"2026-11-16",solarLocalTime:"15:00"},"furnishings-evening":{range:8,peak:6.0228271484375,bake:"direct+indirect",solarDate:"2026-11-16",solarLocalTime:"15:00"}};var u9={sunDirection:[.8227223657595844,.3194810004675322,.470169968436115],solar:{date:"2026-11-16",localTime:"15:00",timezone:"America/New_York",utcOffset:-5,latitude:36.8,longitude:-76,localXAxisAzimuth:198,azimuth:227.74713357884866,elevation:18.63154090436479,blenderDirection:[.8227223657595844,-.470169968436115,.3194810004675322],sunDirection:[.8227223657595844,.3194810004675322,.470169968436115],label:"November 16 \xB7 3:00 p.m. EST",method:"NOAA fractional-year equations",orientationBasis:"north-up aerial, rear/gable outward approximately SSW (198 degrees)"},fixtures:[{position:[-2.6500000953674316,1.4199999570846558,2.549999952316284],power:4,overhead:!1,color:[1,.8799999952316284,.75],size:.2800000011920929},{position:[3,1.4199999570846558,2.3499999046325684],power:4,overhead:!1,color:[1,.8799999952316284,.75],size:.2800000011920929},{position:[-2.4000000953674316,3.862407922744751,2.3499999046325684],power:3,overhead:!0,color:[1,.8999999761581421,.7799999713897705],size:.11999999731779099},{position:[-2.4000000953674316,5.534999847412109,-0],power:3,overhead:!0,color:[1,.8999999761581421,.7799999713897705],size:.11999999731779099},{position:[-2.4000000953674316,3.862407922744751,-2.3499999046325684],power:3,overhead:!0,color:[1,.8999999761581421,.7799999713897705],size:.11999999731779099},{position:[-.800000011920929,3.862407922744751,2.3499999046325684],power:3,overhead:!0,color:[1,.8999999761581421,.7799999713897705],size:.11999999731779099},{position:[-.800000011920929,5.534999847412109,-0],power:3,overhead:!0,color:[1,.8999999761581421,.7799999713897705],size:.11999999731779099},{position:[-.800000011920929,3.862407922744751,-2.3499999046325684],power:3,overhead:!0,color:[1,.8999999761581421,.7799999713897705],size:.11999999731779099},{position:[.800000011920929,3.862407922744751,2.3499999046325684],power:3,overhead:!0,color:[1,.8999999761581421,.7799999713897705],size:.11999999731779099},{position:[.800000011920929,5.534999847412109,-0],power:3,overhead:!0,color:[1,.8999999761581421,.7799999713897705],size:.11999999731779099},{position:[.800000011920929,3.862407922744751,-2.3499999046325684],power:3,overhead:!0,color:[1,.8999999761581421,.7799999713897705],size:.11999999731779099},{position:[2.4000000953674316,3.862407922744751,2.3499999046325684],power:3,overhead:!0,color:[1,.8999999761581421,.7799999713897705],size:.11999999731779099},{position:[2.4000000953674316,5.534999847412109,-0],power:3,overhead:!0,color:[1,.8999999761581421,.7799999713897705],size:.11999999731779099},{position:[2.4000000953674316,3.862407922744751,-2.3499999046325684],power:3,overhead:!0,color:[1,.8999999761581421,.7799999713897705],size:.11999999731779099},{position:[-.699999988079071,3.4800000190734863,-0],power:5,overhead:!0,color:[1,.8700000047683716,.7200000286102295],size:.20000000298023224},{position:[.699999988079071,3.4800000190734863,-0],power:5,overhead:!0,color:[1,.8700000047683716,.7200000286102295],size:.20000000298023224},{position:[-6.099999904632568,1.9800000190734863,-2.6500000953674316],power:3,overhead:!0,color:[1,.8999999761581421,.800000011920929],size:.23000000417232513}]};var h9="./assets/linen-ivory-BNWXR2RQ.jpg";var b9="./assets/wall-fan-color-5AQLIJXB.png";var V9="./assets/grass-N3PJNQWH.jpg";async function p9(e){if(e.startsWith("data:"))return Uint8Array.from(atob(e.split(",")[1]),I=>I.charCodeAt(0)).buffer;let L=await fetch(e);if(!L.ok)throw new Error("Asset download failed: "+L.status);return L.arrayBuffer()}async function Sc(){let e=k=>document.querySelector(k),L;try{L=new LQ({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch(k){throw e("#loading").innerHTML="<h2>3D graphics unavailable</h2><p>Please open this file in Chrome, Edge, or Safari with hardware acceleration enabled.</p>",k}L.setPixelRatio(Math.min(devicePixelRatio,1.75)),L.setSize(innerWidth,innerHeight),L.outputColorSpace=rI,L.toneMapping=mn,L.toneMappingExposure=.98,L.shadowMap.enabled=!0,L.shadowMap.autoUpdate=!1,L.shadowMap.needsUpdate=!0,L.shadowMap.type=en,e("#viewport").appendChild(L.domElement);let I=new Ue;I.background=new lL("#cbdde6"),I.fog=new ye("#cbdde6",26,65);let N=1.59,t=new MI(65,innerWidth/innerHeight,.05,120);t.rotation.order="YXZ";let P=new eQ().parse(await p9(o9)),n=new gN(P.data,P.width,P.height,uI,P.type);n.mapping=je,n.colorSpace=$I,n.minFilter=QI,n.magFilter=QI,n.flipY=!0,n.needsUpdate=!0,I.background=n,I.backgroundIntensity=.8,I.environment=n,I.environmentIntensity=.12,I.fog=null,I.backgroundRotation.y=0,I.environmentRotation.y=0;let Q=new We(13361151,7037003,.03);I.add(Q);let r=new Ht(16773855,4.8);r.position.fromArray(u9.sunDirection).multiplyScalar(45),r.castShadow=!0,r.shadow.mapSize.set(4096,4096),Object.assign(r.shadow.camera,{left:-17,right:17,top:17,bottom:-17,near:1,far:90}),r.shadow.bias=-2e-4,r.shadow.normalBias=.02,r.shadow.radius=3,I.add(r);let i=[],j=[],J=new Set,F=I.environment,$=new Ne(128,{type:kI,generateMipmaps:!0,minFilter:vI}),d=new Ie(.08,70,$);d.position.set(.2,1.8,0),I.add(d);let K;function c(){L.shadowMap.needsUpdate=!0,I.environment=null,d.update(L,I);let k=new Ge(L);K?.dispose(),K=k.fromCubemap($.texture),I.environment=K.texture,I.environmentRotation.set(0,0,0),I.environmentIntensity=Z?.25:.65,k.dispose()}let m=[],f=[],x=!1,H=!1,Z=!1,R=0,z=0,D=null,s=new Set,G=new u,a=new u(0,1,0),v=new PP,y=[],q;function w(k){e("#status").textContent=k,clearTimeout(q),q=setTimeout(()=>e("#status").textContent=H?"Free flight \xB7 E / Q to change height":"Click the scene to look freely \xB7 Esc for controls",3e3)}function U(k,JL){t.position.set(...k);let o=new u(...JL).sub(t.position).normalize();R=Math.atan2(-o.x,-o.z),z=Math.asin(o.y),t.rotation.set(z,R,0),D=null}let B={furnishings:[[-1.3,1.35,-.5],[.45,.65,.9]],room:[[-3.02,N,-1.15],[1.8,2.05,.4]],sofa:[[1.7,N,1.1],[-1,2,-1.9]],patio:[[-.8,N,-6.1],[.3,2,0]],exterior:[[23,28,18],[-5,0,-3]],breakfast:[[-4.15,N,-1.1],[-6.2,1.1,-3.1]],temple:[[-3.1,N,.65],[-4.8,1,.65]],detail:[[2.5,1.45,-.5],[3.7,1,-1.15]],ceiling:[[0,2.1,1.4],[2,4.6,0]]};U(...B.room);let _=new Gt,eL=_.load(h9);eL.flipY=!1,eL.colorSpace=rI,eL.wrapS=eL.wrapT=WI,eL.anisotropy=8;let nL=_.load(V9);nL.colorSpace=rI,nL.wrapS=nL.wrapT=WI,nL.repeat.set(1,1),nL.anisotropy=8;let dL=_.load(b9);dL.flipY=!1,dL.colorSpace=rI,dL.wrapS=dL.wrapT=WI,dL.anisotropy=8;let RL={},TL=Promise.all(Object.entries({day:f9,evening:Z9,"walls-day":l9,"walls-evening":R9,"trim-day":a9,"trim-evening":z9,"furnishings-day":D9,"furnishings-evening":E9}).map(([k,JL])=>new Promise((o,M)=>{let V=_.load(JL,o,void 0,M);V.flipY=!1,V.channel=1,V.colorSpace=rI,V.minFilter=QI,V.magFilter=QI,V.generateMipmaps=!1,RL[k]=V})));new NQ().parse(await p9(x9),"",async k=>{await TL,I.add(k.scene),k.scene.updateMatrixWorld(!0);let JL=document.createElement("canvas");JL.width=JL.height=128;let o=JL.getContext("2d"),M=o.createRadialGradient(64,64,0,64,64,64);M.addColorStop(0,"rgba(12,10,8,.55)"),M.addColorStop(.4,"rgba(12,10,8,.32)"),M.addColorStop(1,"rgba(12,10,8,0)"),o.fillStyle=M,o.fillRect(0,0,128,128);let V=new Se(JL);for(let[p,T,PL,W]of[[2.85,-2.85,.95,.008],[-2.9,-2.65,.85,.008],[-2.8,-5.4,.95,-.052],[3.3,-5.2,1.05,-.052]]){let mL=new sI(new dt(PL,PL),new _I({map:V,transparent:!0,depthWrite:!1,toneMapped:!1}));mL.rotation.x=-Math.PI/2,mL.position.set(p,W,T),mL.renderOrder=3,I.add(mL)}k.scene.traverse(p=>{if(!p.isMesh)return;let T=p.material?.name?.replace(/\.\d+$/,"");for(let PL=p;PL;PL=PL.parent)if(PL.userData.garden_instance){p.userData.garden_instance=!0;break}if(p.castShadow=!0,p.receiveShadow=!0,p.geometry.getAttribute("uv1")){let PL=p;for(;PL&&!PL.userData.lightmap_group;)PL=PL.parent;p.material=p.material.clone(),p.material.userData.lightmapGroup=["walls","trim","furnishings"].includes(PL?.userData.lightmap_group)?PL.userData.lightmap_group+"-":"";let W=p.material.userData.lightmapGroup+"day";p.material.lightMap=RL[W],p.material.lightMapIntensity=Qr[W].range*Math.PI,p.material.envMapIntensity=.6,p.receiveShadow=!1,p.material.onBeforeCompile=mL=>{let OL=vL.lights_fragment_begin,IL=OL.slice(0,OL.indexOf("IncidentLight directLight;"))+OL.slice(OL.indexOf("#if defined( RE_IndirectDiffuse )")).replace("getAmbientLightIrradiance( ambientLightColor )","vec3(0.0)").replace(/#if \( NUM_HEMI_LIGHTS > 0 \)[\s\S]*?#endif/,"");mL.fragmentShader=mL.fragmentShader.replace("#include <lights_fragment_begin>",IL),mL.fragmentShader=mL.fragmentShader.replace("#include <lights_fragment_maps>",vL.lights_fragment_maps.replace("iblIrradiance += getIBLIrradiance( geometryNormal );","/* diffuse irradiance supplied by the lightmap */"))},p.material.customProgramCacheKey=()=>"full-baked-diffuse-hdr-specular-v2",j.push(p.material),y.push(p)}(p.userData.garden_instance||T?.startsWith("Site ")||["Lawn","Garden cedar","Taupe siding","Slate shingles"].includes(T))&&(p.material.envMap=F,p.material.envMapIntensity=1,J.add(p.material));for(let PL of["map","normalMap","roughnessMap"])p.material?.[PL]&&(p.material[PL].anisotropy=L.capabilities.getMaxAnisotropy());T?.startsWith("Warm ivory plaster")&&(p.material.map=dL,p.material.normalScale?.set(1.1,1.1),p.material.needsUpdate=!0),T==="Natural linen"&&(p.material.map=eL,p.material.color.setRGB(1,1,1),p.material.needsUpdate=!0),T==="Lawn"&&(p.material.map=nL,p.material.color.setRGB(.65,.83,.52),p.material.needsUpdate=!0),T==="Natural linen"&&!p.geometry.getAttribute("uv1")&&(m.push(p.material),p.material.emissive.setRGB(1,.92,.8),p.material.emissiveIntensity=.015),(T?.startsWith("Overhead diffuser")||T?.startsWith("modern_ceiling_globe"))&&(f.push(p.material),p.material.emissive.setRGB(1,.9,.77),p.material.emissiveIntensity=0),T==="Window glass"&&(p.material=new lI({color:16777215,metalness:0,roughness:.008,transparent:!0,opacity:.025,depthWrite:!1,side:AI}),p.castShadow=!1),["Taupe siding","Slate shingles"].includes(T)&&y.push(p)});let S=new Map;k.scene.traverse(p=>{if(!p.isMesh||!p.userData.garden_instance)return;let T=p.geometry.uuid+p.material.uuid,PL=S.get(T);PL||(PL=[],S.set(T,PL)),PL.push(p)});for(let p of S.values()){let T=p[0],PL=new $t(T.geometry,T.material,p.length);for(let W=0;W<p.length;W++)PL.setMatrixAt(W,p[W].matrixWorld),p[W].visible=!1;PL.castShadow=!0,PL.receiveShadow=!0,I.add(PL)}c(),x=!0,e("#loading").classList.add("hidden"),e("#start").classList.remove("hidden"),window.sunroomReady=!0,w("Ready to explore")},k=>{e("#loading").innerHTML="<h2>The room could not load</h2><p>Please re-download the complete HTML file.</p>",console.error(k)});function kL(k){H=k,e("#mode").textContent=H?"Fly mode":"Ground mode",e("#mode").setAttribute("aria-pressed",String(H)),e("#height-controls").classList.toggle("hidden",!H),H||(t.position.y=N),w(H?"Free flight \xB7 E / Space up \xB7 Q down":"Ground mode \xB7 eye height restored")}function YL(){Z=!Z,L.toneMappingExposure=Z?1.15:.98,e("#lighting").textContent=Z?"Evening":"Daylight",e("#lighting").setAttribute("aria-pressed",String(Z));for(let k of j){let JL=k.userData.lightmapGroup+(Z?"evening":"day");k.lightMap=RL[JL],k.lightMapIntensity=Qr[JL].range*Math.PI,k.needsUpdate=!0}I.background=Z?new lL("#263448"):n,I.backgroundIntensity=Z?1:.8,Q.intensity=Z?.07:.03,r.intensity=Z?0:4.8,I.environmentIntensity=Z?.35:.65;for(let k of m)k.emissiveIntensity=Z?.45:.015;for(let k of i)k.intensity=k.userData.dayPower*(Z?3:k.userData.overhead?0:1);for(let k of f)k.emissiveIntensity=Z?3:0;for(let k of J)k.envMapIntensity=Z?.05:1;c(),e(".subtitle").textContent=Z?"Evening ambience":"November 16 \xB7 3:00 p.m. EST",w(Z?"Soft evening light":"November 16 \xB7 3:00 p.m. EST")}e("#mode").onclick=()=>kL(!H),e("#lighting").onclick=YL,e("#reset").onclick=()=>{U(...B.room),kL(!1),document.querySelectorAll("[data-view]").forEach(k=>k.classList.toggle("active",k.dataset.view==="room")),w("Back to the sunroom")},e("#help").onclick=()=>{e("#guide").classList.toggle("hidden"),e("#help").setAttribute("aria-expanded",String(!e("#guide").classList.contains("hidden")))},e("#fullscreen").onclick=()=>{document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.().catch(()=>w("Use your browser\u2019s full-screen control"))};for(let k of document.querySelectorAll("[data-view]"))k.onclick=()=>{let JL=k.dataset.view;U(...B[JL]),kL(JL==="exterior"||JL==="ceiling"),w(k.textContent.trim()),document.querySelectorAll("[data-view]").forEach(o=>o.classList.toggle("active",o===k))};e("#enter").onclick=()=>{e("#start").classList.add("hidden"),w("Move your mouse to look \xB7 WASD to move \xB7 Esc for controls"),L.domElement.focus(),bL()};let Y=!1,g=0,$L=0,aL=!1,GL=!1,ZL=L.domElement;ZL.tabIndex=0,ZL.setAttribute("aria-label","Interactive sunroom. Click once, then move the mouse to look. Escape releases the pointer. WASD to move, E up, Q down.");function cI(k,JL){R-=k*.0022,z=Lt.clamp(z-JL*.0022,-1.48,1.48),t.rotation.set(z,R,0)}function l(k){document.body.classList.toggle("looking",k),ZL.dataset.pointerCaptured=String(k),w(k?"Mouse to look \xB7 Esc releases pointer":"Pointer released \xB7 click the room to explore")}function WL(){GL&&(aL=!0,l(!0))}function bL(){if(GL=!0,document.pointerLockElement!==ZL)if(ZL.requestPointerLock)try{ZL.requestPointerLock()?.catch(WL)}catch{WL()}else WL()}function zL(){GL=!1,s.clear(),Y=!1,aL=!1,document.exitPointerLock?.(),l(!1)}document.addEventListener("pointerlockchange",()=>{if(aL=!1,s.clear(),document.pointerLockElement===ZL&&!GL){document.exitPointerLock();return}GL=document.pointerLockElement===ZL,l(GL)}),document.addEventListener("pointerlockerror",WL),ZL.addEventListener("click",k=>{k.pointerType!=="touch"&&bL()}),document.addEventListener("mousemove",k=>{document.pointerLockElement===ZL&&cI(k.movementX,k.movementY)}),ZL.addEventListener("pointerdown",k=>{ZL.focus(),k.pointerType==="touch"&&(Y=!0,g=k.clientX,$L=k.clientY,ZL.setPointerCapture(k.pointerId))}),ZL.addEventListener("pointermove",k=>{if(document.pointerLockElement!==ZL){if(aL&&k.pointerType!=="touch"){cI(k.movementX,k.movementY);return}Y&&(cI(k.clientX-g,k.clientY-$L),g=k.clientX,$L=k.clientY)}});for(let k of["pointerup","pointercancel","lostpointercapture"])ZL.addEventListener(k,()=>Y=!1);L.domElement.addEventListener("wheel",k=>{k.preventDefault(),t.getWorldDirection(G),H||(G.y=0,G.normalize()),sL(G.multiplyScalar(-Math.sign(k.deltaY)*.32))},{passive:!1}),window.addEventListener("keydown",k=>{if(k.ctrlKey||k.metaKey||k.altKey)return;let JL=k.code;["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(JL)&&(k.preventDefault(),s.add(JL),(JL==="KeyE"||JL==="Space")&&!H&&kL(!0)),!k.repeat&&JL==="KeyF"&&kL(!H),JL==="Escape"&&zL(),!k.repeat&&JL==="KeyR"&&e("#reset").click()}),window.addEventListener("keyup",k=>s.delete(k.code)),window.addEventListener("blur",zL),document.addEventListener("visibilitychange",()=>{document.hidden&&zL()});for(let k of document.querySelectorAll("[data-key]")){k.addEventListener("pointerdown",JL=>{JL.preventDefault(),k.setPointerCapture(JL.pointerId),s.add(k.dataset.key),k.dataset.key==="KeyE"&&!H&&kL(!0)});for(let JL of["pointerup","pointercancel","lostpointercapture"])k.addEventListener(JL,()=>s.delete(k.dataset.key))}function sL(k){let JL=t.position.clone().add(k);!H&&k.lengthSq()>1e-5&&(v.set(t.position,k.clone().normalize()),v.far=k.length()+.2,v.intersectObjects(y,!1)[0])||(JL.x=Lt.clamp(JL.x,-45,45),JL.z=Lt.clamp(JL.z,-45,45),JL.y=H?Lt.clamp(JL.y,.22,40):N,t.position.copy(JL))}let PI=new eP,ML=0,VL=0;L.setAnimationLoop(()=>{let k=Math.min(PI.getDelta(),.05);if(x){let JL=new u;t.getWorldDirection(JL),H||(JL.y=0,JL.normalize());let o=new u().crossVectors(JL,a).normalize();G.set(0,0,0),(s.has("KeyW")||s.has("ArrowUp"))&&G.add(JL),(s.has("KeyS")||s.has("ArrowDown"))&&G.sub(JL),(s.has("KeyD")||s.has("ArrowRight"))&&G.add(o),(s.has("KeyA")||s.has("ArrowLeft"))&&G.sub(o),H&&(s.has("KeyE")||s.has("Space"))&&(G.y+=1),H&&s.has("KeyQ")&&(G.y-=1),G.lengthSq()&&sL(G.normalize().multiplyScalar(k*(s.has("ShiftLeft")||s.has("ShiftRight")?4.6:1.8)))}L.render(I,t),ML++,VL+=k,VL>2&&(window.sunroomStats={fps:Math.round(ML/VL),drawCalls:L.info.render.calls,runtimeSpotlights:i.length,bakedMaterials:j.length,trimMaterials:j.filter(JL=>JL.userData.lightmapGroup==="trim-").length,wallMaterials:j.filter(JL=>JL.userData.lightmapGroup==="walls-").length,triangles:L.info.render.triangles,position:t.position.toArray(),rotation:[z,R],fly:H,night:Z,pointerLocked:document.pointerLockElement===ZL,fallbackLook:aL},L.domElement.dataset.diagnostics=JSON.stringify(window.sunroomStats),ML=0,VL=0)}),window.addEventListener("resize",()=>{t.aspect=innerWidth/innerHeight,t.updateProjectionMatrix(),L.setSize(innerWidth,innerHeight)})}Sc().catch(e=>{console.error(e),document.querySelector("#loading").innerHTML="<h2>The room could not load</h2><p>Please refresh the page and try again.</p>"});})();

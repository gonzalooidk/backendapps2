"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{19:function(a,b,c){c.d(b,{Bt:function(){return ht},IO:function(){return g9},JU:function(){return gw},PL:function(){return hn},QT:function(){return hl},ad:function(){return gy},ar:function(){return hb},b9:function(){return hd},hJ:function(){return gv},oe:function(){return hq},pl:function(){return ho},r7:function(){return hp}});var d,e,f=c(2238),g=c(8463),h=c(3333),i=c(4444),j=c(3510),k=c(3454);let l="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */ class m{constructor(a){this.uid=a}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(a){return a.uid===this.uid}}m.UNAUTHENTICATED=new m(null),m.GOOGLE_CREDENTIALS=new m("google-credentials-uid"),m.FIRST_PARTY=new m("first-party-uid"),m.MOCK_USER=new m("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let n="9.6.7",o=new h.Yd("@firebase/firestore");function p(){return o.logLevel}function q(a,...b){if(o.logLevel<=h.in.DEBUG){let c=b.map(t);o.debug(`Firestore (${n}): ${a}`,...c)}}function r(a,...b){if(o.logLevel<=h.in.ERROR){let c=b.map(t);o.error(`Firestore (${n}): ${a}`,...c)}}function s(a,...b){if(o.logLevel<=h.in.WARN){let c=b.map(t);o.warn(`Firestore (${n}): ${a}`,...c)}}function t(a){var b;if("string"==typeof a)return a;try{return b=a,JSON.stringify(b)}catch(c){return a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function u(a="Unexpected state"){let b=`FIRESTORE (${n}) INTERNAL ASSERTION FAILED: `+a;throw r(b),Error(b)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends i.ZR{constructor(a,b){super(a,b),this.code=a,this.message=b,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class x{constructor(){this.promise=new Promise((a,b)=>{this.resolve=a,this.reject=b})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class y{constructor(a,b){this.user=b,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${a}`)}}class z{getToken(){return Promise.resolve(null)}invalidateToken(){}start(a,b){a.enqueueRetryable(()=>b(m.UNAUTHENTICATED))}shutdown(){}}class A{constructor(a){this.t=a,this.currentUser=m.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(a,b){let c=this.i,d=a=>this.i!==c?(c=this.i,b(a)):Promise.resolve(),e=new x;this.o=()=>{this.i++,this.currentUser=this.u(),e.resolve(),e=new x,a.enqueueRetryable(()=>d(this.currentUser))};let f=()=>{let b=e;a.enqueueRetryable(async()=>{await b.promise,await d(this.currentUser)})},g=a=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),f()};this.t.onInit(a=>g(a)),setTimeout(()=>{if(!this.auth){let a=this.t.getImmediate({optional:!0});a?g(a):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),e.resolve(),e=new x)}},0),f()}getToken(){let a=this.i,b=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(b).then(b=>{var c;return this.i!==a?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):b?("string"==typeof b.accessToken||u(),new y(b.accessToken,this.currentUser)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){var a;let b=this.auth&&this.auth.getUid();return null===b||"string"==typeof b||u(),new m(b)}}class B{constructor(a,b,c){this.type="FirstParty",this.user=m.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",b);let d=a.auth.getAuthHeaderValueForFirstParty([]);d&&this.headers.set("Authorization",d),c&&this.headers.set("X-Goog-Iam-Authorization-Token",c)}}class C{constructor(a,b,c){this.h=a,this.l=b,this.m=c}getToken(){return Promise.resolve(new B(this.h,this.l,this.m))}start(a,b){a.enqueueRetryable(()=>b(m.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class D{constructor(a){this.value=a,this.type="AppCheck",this.headers=new Map,a&&a.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class E{constructor(a){this.g=a,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(a,b){let c=a=>{null!=a.error&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);let c=a.token!==this.p;return this.p=a.token,q("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?b(a.token):Promise.resolve()};this.o=b=>{a.enqueueRetryable(()=>c(b))};let d=a=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.appCheck.addTokenListener(this.o)};this.g.onInit(a=>d(a)),setTimeout(()=>{if(!this.appCheck){let a=this.g.getImmediate({optional:!0});a?d(a):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let a=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(a).then(a=>{var b;return a?("string"==typeof a.token||u(),this.p=a.token,new D(a.token)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * Builds a CredentialsProvider depending on the type of
 * the credentials passed in.
 */ /**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * `ListenSequence` is a monotonic sequence. It is initialized with a minimum value to
 * exceed. All subsequent calls to next will return increasing values. If provided with a
 * `SequenceNumberSyncer`, it will additionally bump its next value when told of a new value, as
 * well as write out sequence numbers that it produces via `next()`.
 */ class F{constructor(a,b){this.previousValue=a,b&&(b.sequenceNumberHandler=a=>this.I(a),this.T=a=>b.writeSequenceNumber(a))}I(a){return this.previousValue=Math.max(a,this.previousValue),this.previousValue}next(){let a=++this.previousValue;return this.T&&this.T(a),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */ function G(a){let b="undefined"!=typeof self&&(self.crypto||self.msCrypto),c=new Uint8Array(a);if(b&&"function"==typeof b.getRandomValues)b.getRandomValues(c);else for(let d=0;d<a;d++)c[d]=Math.floor(256*Math.random());return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ F.A=-1;class H{static R(){let a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",b=Math.floor(256/a.length)*a.length,c="";for(;c.length<20;){let d=G(40);for(let e=0;e<d.length;++e)c.length<20&&d[e]<b&&(c+=a.charAt(d[e]%a.length))}return c}}function I(a,b){return a<b?-1:a>b?1:0}function J(a,b,c){return a.length===b.length&&a.every((a,d)=>c(a,b[d]))}function K(a){return a+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // The earliest date supported by Firestore timestamps (0001-01-01T00:00:00Z).
/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * For examples and further specifications, refer to the
 * {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
 */ class L{constructor(a,b){if(this.seconds=a,this.nanoseconds=b,b<0||b>=1e9)throw new w(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+b);if(a< -62135596800||a>=253402300800)throw new w(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+a)}static now(){return L.fromMillis(Date.now())}static fromDate(a){return L.fromMillis(a.getTime())}static fromMillis(a){let b=Math.floor(a/1e3);return new L(b,Math.floor(1e6*(a-1e3*b)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(a){return this.seconds===a.seconds?I(this.nanoseconds,a.nanoseconds):I(this.seconds,a.seconds)}isEqual(a){return a.seconds===this.seconds&&a.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let a=this.seconds- -62135596800;return String(a).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */ class M{constructor(a){this.timestamp=a}static fromTimestamp(a){return new M(a)}static min(){return new M(new L(0,0))}compareTo(a){return this.timestamp._compareTo(a.timestamp)}isEqual(a){return this.timestamp.isEqual(a.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function N(a){let b=0;for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b++;return b}function O(a,b){for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])}function P(a){for(let b in a)if(Object.prototype.hasOwnProperty.call(a,b))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Path represents an ordered sequence of string segments.
 */ class Q{constructor(a,b,c){void 0===b?b=0:b>a.length&&u(),void 0===c?c=a.length-b:c>a.length-b&&u(),this.segments=a,this.offset=b,this.len=c}get length(){return this.len}isEqual(a){return 0===Q.comparator(this,a)}child(a){let b=this.segments.slice(this.offset,this.limit());return a instanceof Q?a.forEach(a=>{b.push(a)}):b.push(a),this.construct(b)}limit(){return this.offset+this.length}popFirst(a){return a=void 0===a?1:a,this.construct(this.segments,this.offset+a,this.length-a)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(a){return this.segments[this.offset+a]}isEmpty(){return 0===this.length}isPrefixOf(a){if(a.length<this.length)return!1;for(let b=0;b<this.length;b++)if(this.get(b)!==a.get(b))return!1;return!0}isImmediateParentOf(a){if(this.length+1!==a.length)return!1;for(let b=0;b<this.length;b++)if(this.get(b)!==a.get(b))return!1;return!0}forEach(a){for(let b=this.offset,c=this.limit();b<c;b++)a(this.segments[b])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(a,b){let c=Math.min(a.length,b.length);for(let d=0;d<c;d++){let e=a.get(d),f=b.get(d);if(e<f)return -1;if(e>f)return 1}return a.length<b.length?-1:a.length>b.length?1:0}}class R extends Q{construct(a,b,c){return new R(a,b,c)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...a){let b=[];for(let c of a){if(c.indexOf("//")>=0)throw new w(v.INVALID_ARGUMENT,`Invalid segment (${c}). Paths must not contain // in them.`);b.push(...c.split("/").filter(a=>a.length>0))}return new R(b)}static emptyPath(){return new R([])}}let S=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class T extends Q{construct(a,b,c){return new T(a,b,c)}static isValidIdentifier(a){return S.test(a)}canonicalString(){return this.toArray().map(a=>(a=a.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),T.isValidIdentifier(a)||(a="`"+a+"`"),a)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new T(["__name__"])}static fromServerFormat(a){let b=[],c="",d=0,e=()=>{if(0===c.length)throw new w(v.INVALID_ARGUMENT,`Invalid field path (${a}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);b.push(c),c=""},f=!1;for(;d<a.length;){let g=a[d];if("\\"===g){if(d+1===a.length)throw new w(v.INVALID_ARGUMENT,"Path has trailing escape character: "+a);let h=a[d+1];if("\\"!==h&&"."!==h&&"`"!==h)throw new w(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+a);c+=h,d+=2}else"`"===g?(f=!f,d++):"."!==g||f?(c+=g,d++):(e(),d++)}if(e(),f)throw new w(v.INVALID_ARGUMENT,"Unterminated ` in path: "+a);return new T(b)}static emptyPath(){return new T([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ class U{constructor(a){this.fields=a,a.sort(T.comparator)}covers(a){for(let b of this.fields)if(b.isPrefixOf(a))return!0;return!1}isEqual(a){return J(this.fields,a.fields,(a,b)=>a.isEqual(b))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 * @internal
 */ class V{constructor(a){this.binaryString=a}static fromBase64String(a){let b=atob(a);return new V(b)}static fromUint8Array(a){let b=function(a){let b="";for(let c=0;c<a.length;++c)b+=String.fromCharCode(a[c]);return b}(a);return new V(b)}[Symbol.iterator](){let a=0;return{next:()=>a<this.binaryString.length?{value:this.binaryString.charCodeAt(a++),done:!1}:{value:void 0,done:!0}}}toBase64(){var a;return btoa(this.binaryString)}toUint8Array(){return function(a){let b=new Uint8Array(a.length);for(let c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(a){return I(this.binaryString,a.binaryString)}isEqual(a){return this.binaryString===a.binaryString}}V.EMPTY_BYTE_STRING=new V("");let W=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function X(a){var b,c;if(!a&&u(),"string"==typeof a){let d=0,e=W.exec(a);if(!e&&u(),e[1]){let f=e[1];d=Number(f=(f+"000000000").substr(0,9))}let g=new Date(a);return{seconds:Math.floor(g.getTime()/1e3),nanos:d}}return{seconds:Y(a.seconds),nanos:Y(a.nanos)}}function Y(a){return"number"==typeof a?a:"string"==typeof a?Number(a):0}function Z(a){return"string"==typeof a?V.fromBase64String(a):V.fromUint8Array(a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   transform. They can only exist in the local view of a document. Therefore
 *   they do not need to be parsed or serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */ function $(a){var b,c;return"server_timestamp"===(null===(c=((null===(b=null==a?void 0:a.mapValue)|| void 0===b?void 0:b.fields)||{}).__type__)|| void 0===c?void 0:c.stringValue)}function _(a){let b=a.mapValue.fields.__previous_value__;return $(b)?_(b):b}function aa(a){let b=X(a.mapValue.fields.__local_write_time__.timestampValue);return new L(b.seconds,b.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ab{constructor(a,b,c,d,e,f,g,h){this.databaseId=a,this.appId=b,this.persistenceKey=c,this.host=d,this.ssl=e,this.forceLongPolling=f,this.autoDetectLongPolling=g,this.useFetchStreams=h}}class ac{constructor(a,b){this.projectId=a,this.database=b||"(default)"}static empty(){return new ac("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(a){return a instanceof ac&&a.projectId===this.projectId&&a.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Sentinel value that sorts before any Mutation Batch ID. */ /**
 * Returns whether a variable is either undefined or null.
 */ function ad(a){return null==a}function ae(a){return 0===a&&1/a== -1/0}function af(a){return"number"==typeof a&&Number.isInteger(a)&&!ae(a)&&a<=Number.MAX_SAFE_INTEGER&&a>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @internal
 */ class ag{constructor(a){this.path=a}static fromPath(a){return new ag(R.fromString(a))}static fromName(a){return new ag(R.fromString(a).popFirst(5))}static empty(){return new ag(R.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(a){return this.path.length>=2&&this.path.get(this.path.length-2)===a}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(a){return null!==a&&0===R.comparator(this.path,a.path)}toString(){return this.path.toString()}static comparator(a,b){return R.comparator(a.path,b.path)}static isDocumentKey(a){return a.length%2==0}static fromSegments(a){return new ag(new R(a.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ah={mapValue:{fields:{__type__:{stringValue:"__max___"}}}};function ai(a){return"nullValue"in a?0:"booleanValue"in a?1:"integerValue"in a||"doubleValue"in a?2:"timestampValue"in a?3:"stringValue"in a?5:"bytesValue"in a?6:"referenceValue"in a?7:"geoPointValue"in a?8:"arrayValue"in a?9:"mapValue"in a?$(a)?4:10:u()}function aj(a,b){var c,d,e,f;if(a===b)return!0;let g=ai(a);if(g!==ai(b))return!1;switch(g){case 0:return!0;case 1:return a.booleanValue===b.booleanValue;case 4:return aa(a).isEqual(aa(b));case 3:return function(a,b){if("string"==typeof a.timestampValue&&"string"==typeof b.timestampValue&&a.timestampValue.length===b.timestampValue.length)return a.timestampValue===b.timestampValue;let c=X(a.timestampValue),d=X(b.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(a,b);case 5:return a.stringValue===b.stringValue;case 6:return c=a,d=b,Z(c.bytesValue).isEqual(Z(d.bytesValue));case 7:return a.referenceValue===b.referenceValue;case 8:return e=a,f=b,Y(e.geoPointValue.latitude)===Y(f.geoPointValue.latitude)&&Y(e.geoPointValue.longitude)===Y(f.geoPointValue.longitude);case 2:return function(a,b){if("integerValue"in a&&"integerValue"in b)return Y(a.integerValue)===Y(b.integerValue);if("doubleValue"in a&&"doubleValue"in b){let c=Y(a.doubleValue),d=Y(b.doubleValue);return c===d?ae(c)===ae(d):isNaN(c)&&isNaN(d)}return!1}(a,b);case 9:return J(a.arrayValue.values||[],b.arrayValue.values||[],aj);case 10:return function(a,b){let c=a.mapValue.fields||{},d=b.mapValue.fields||{};if(N(c)!==N(d))return!1;for(let e in c)if(c.hasOwnProperty(e)&&(void 0===d[e]||!aj(c[e],d[e])))return!1;return!0}(a,b);default:return u()}}function ak(a,b){return void 0!==(a.values||[]).find(a=>aj(a,b))}function al(a,b){if(a===b)return 0;let c=ai(a),d=ai(b);if(c!==d)return I(c,d);switch(c){case 0:return 0;case 1:return I(a.booleanValue,b.booleanValue);case 2:return function(a,b){let c=Y(a.integerValue||a.doubleValue),d=Y(b.integerValue||b.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1}(a,b);case 3:return am(a.timestampValue,b.timestampValue);case 4:return am(aa(a),aa(b));case 5:return I(a.stringValue,b.stringValue);case 6:return function(a,b){let c=Z(a),d=Z(b);return c.compareTo(d)}(a.bytesValue,b.bytesValue);case 7:return function(a,b){let c=a.split("/"),d=b.split("/");for(let e=0;e<c.length&&e<d.length;e++){let f=I(c[e],d[e]);if(0!==f)return f}return I(c.length,d.length)}(a.referenceValue,b.referenceValue);case 8:return function(a,b){let c=I(Y(a.latitude),Y(b.latitude));return 0!==c?c:I(Y(a.longitude),Y(b.longitude))}(a.geoPointValue,b.geoPointValue);case 9:return function(a,b){let c=a.values||[],d=b.values||[];for(let e=0;e<c.length&&e<d.length;++e){let f=al(c[e],d[e]);if(f)return f}return I(c.length,d.length)}(a.arrayValue,b.arrayValue);case 10:return function(a,b){let c=a.fields||{},d=Object.keys(c),e=b.fields||{},f=Object.keys(e);d.sort(),f.sort();for(let g=0;g<d.length&&g<f.length;++g){let h=I(d[g],f[g]);if(0!==h)return h;let i=al(c[d[g]],e[f[g]]);if(0!==i)return i}return I(d.length,f.length)}(a.mapValue,b.mapValue);default:throw u()}}function am(a,b){if("string"==typeof a&&"string"==typeof b&&a.length===b.length)return I(a,b);let c=X(a),d=X(b),e=I(c.seconds,d.seconds);return 0!==e?e:I(c.nanos,d.nanos)}function an(a){var b,c;return"nullValue"in a?"null":"booleanValue"in a?""+a.booleanValue:"integerValue"in a?""+a.integerValue:"doubleValue"in a?""+a.doubleValue:"timestampValue"in a?function(a){let b=X(a);return`time(${b.seconds},${b.nanos})`}(a.timestampValue):"stringValue"in a?a.stringValue:"bytesValue"in a?Z(a.bytesValue).toBase64():"referenceValue"in a?(c=a.referenceValue,ag.fromName(c).toString()):"geoPointValue"in a?`geo(${(b=a.geoPointValue).latitude},${b.longitude})`:"arrayValue"in a?function(a){let b="[",c=!0;for(let d of a.values||[])c?c=!1:b+=",",b+=an(d);return b+"]"}(a.arrayValue):"mapValue"in a?function(a){let b=Object.keys(a.fields||{}).sort(),c="{",d=!0;for(let e of b)d?d=!1:c+=",",c+=`${e}:${an(a.fields[e])}`;return c+"}"}(a.mapValue):u()}function ao(a,b){return{referenceValue:`projects/${a.projectId}/databases/${a.database}/documents/${b.path.canonicalString()}`}}function ap(a){return!!a&&"integerValue"in a}function aq(a){return!!a&&"arrayValue"in a}function ar(a){return!!a&&"nullValue"in a}function as(a){return!!a&&"doubleValue"in a&&isNaN(Number(a.doubleValue))}function at(a){return!!a&&"mapValue"in a}function au(a){if(a.geoPointValue)return{geoPointValue:Object.assign({},a.geoPointValue)};if(a.timestampValue&&"object"==typeof a.timestampValue)return{timestampValue:Object.assign({},a.timestampValue)};if(a.mapValue){let b={mapValue:{fields:{}}};return O(a.mapValue.fields,(a,c)=>b.mapValue.fields[a]=au(c)),b}if(a.arrayValue){let c={arrayValue:{values:[]}};for(let d=0;d<(a.arrayValue.values||[]).length;++d)c.arrayValue.values[d]=au(a.arrayValue.values[d]);return c}return Object.assign({},a)}/** Returns true if the Value represents the canonical {@link #MAX_VALUE} . */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An ObjectValue represents a MapValue in the Firestore Proto and offers the
 * ability to add and remove fields (via the ObjectValueBuilder).
 */ class av{constructor(a){this.value=a}static empty(){return new av({mapValue:{}})}field(a){if(a.isEmpty())return this.value;{let b=this.value;for(let c=0;c<a.length-1;++c)if(!at(b=(b.mapValue.fields||{})[a.get(c)]))return null;return(b=(b.mapValue.fields||{})[a.lastSegment()])||null}}set(a,b){this.getFieldsMap(a.popLast())[a.lastSegment()]=au(b)}setAll(a){let b=T.emptyPath(),c={},d=[];a.forEach((a,e)=>{if(!b.isImmediateParentOf(e)){let f=this.getFieldsMap(b);this.applyChanges(f,c,d),c={},d=[],b=e.popLast()}a?c[e.lastSegment()]=au(a):d.push(e.lastSegment())});let e=this.getFieldsMap(b);this.applyChanges(e,c,d)}delete(a){let b=this.field(a.popLast());at(b)&&b.mapValue.fields&&delete b.mapValue.fields[a.lastSegment()]}isEqual(a){return aj(this.value,a.value)}getFieldsMap(a){let b=this.value;b.mapValue.fields||(b.mapValue={fields:{}});for(let c=0;c<a.length;++c){let d=b.mapValue.fields[a.get(c)];at(d)&&d.mapValue.fields||(d={mapValue:{fields:{}}},b.mapValue.fields[a.get(c)]=d),b=d}return b.mapValue.fields}applyChanges(a,b,c){for(let d of(O(b,(b,c)=>a[b]=c),c))delete a[d]}clone(){return new av(au(this.value))}}function aw(a){let b=[];return O(a.fields,(a,c)=>{let d=new T([a]);if(at(c)){let e=aw(c.mapValue).fields;if(0===e.length)b.push(d);else for(let f of e)b.push(d.child(f))}else b.push(d)}),new U(b)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a document in Firestore with a key, version, data and whether it
 * has local mutations applied to it.
 *
 * Documents can transition between states via `convertToFoundDocument()`,
 * `convertToNoDocument()` and `convertToUnknownDocument()`. If a document does
 * not transition to one of these states even after all mutations have been
 * applied, `isValidDocument()` returns false and the document should be removed
 * from all views.
 */ class ax{constructor(a,b,c,d,e,f){this.key=a,this.documentType=b,this.version=c,this.readTime=d,this.data=e,this.documentState=f}static newInvalidDocument(a){return new ax(a,0,M.min(),M.min(),av.empty(),0)}static newFoundDocument(a,b,c){return new ax(a,1,b,M.min(),c,0)}static newNoDocument(a,b){return new ax(a,2,b,M.min(),av.empty(),0)}static newUnknownDocument(a,b){return new ax(a,3,b,M.min(),av.empty(),2)}convertToFoundDocument(a,b){return this.version=a,this.documentType=1,this.data=b,this.documentState=0,this}convertToNoDocument(a){return this.version=a,this.documentType=2,this.data=av.empty(),this.documentState=0,this}convertToUnknownDocument(a){return this.version=a,this.documentType=3,this.data=av.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(a){return this.readTime=a,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(a){return a instanceof ax&&this.key.isEqual(a.key)&&this.version.isEqual(a.version)&&this.documentType===a.documentType&&this.documentState===a.documentState&&this.data.isEqual(a.data)}mutableCopy(){return new ax(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class ay{constructor(a,b,c,d){this.indexId=a,this.collectionGroup=b,this.fields=c,this.indexState=d}}ay.UNKNOWN_ID=-1;class az{constructor(a,b){this.fieldPath=a,this.kind=b}}class aA{constructor(a,b){this.sequenceNumber=a,this.offset=b}static empty(){return new aA(0,aB.min())}}class aB{constructor(a,b,c){this.readTime=a,this.documentKey=b,this.largestBatchId=c}static min(){return new aB(M.min(),ag.empty(),-1)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Visible for testing
class aC{constructor(a,b=null,c=[],d=[],e=null,f=null,g=null){this.path=a,this.collectionGroup=b,this.orderBy=c,this.filters=d,this.limit=e,this.startAt=f,this.endAt=g,this.P=null}}function aD(a,b=null,c=[],d=[],e=null,f=null,g=null){return new aC(a,b,c,d,e,f,g)}function aE(a){var b;let c=b=a;if(null===c.P){let d=c.path.canonicalString();null!==c.collectionGroup&&(d+="|cg:"+c.collectionGroup),d+="|f:",d+=c.filters.map(a=>{var b,c;return(b=a).field.canonicalString()+b.op.toString()+an(c=b.value)}).join(","),d+="|ob:",d+=c.orderBy.map(a=>{var b;return(b=a).field.canonicalString()+b.dir}).join(","),ad(c.limit)||(d+="|l:",d+=c.limit),c.startAt&&(d+="|lb:",d+=c.startAt.inclusive?"b:":"a:",d+=c.startAt.position.map(a=>{var b;return an(b=a)}).join(",")),c.endAt&&(d+="|ub:",d+=c.endAt.inclusive?"a:":"b:",d+=c.endAt.position.map(a=>{var b;return an(b=a)}).join(",")),c.P=d}return c.P}function aF(a,b){var c,d;if(a.limit!==b.limit||a.orderBy.length!==b.orderBy.length)return!1;for(let e=0;e<a.orderBy.length;e++)if(!aS(a.orderBy[e],b.orderBy[e]))return!1;if(a.filters.length!==b.filters.length)return!1;for(let f=0;f<a.filters.length;f++)if(c=a.filters[f],d=b.filters[f],c.op!==d.op||!c.field.isEqual(d.field)||!aj(c.value,d.value))return!1;return a.collectionGroup===b.collectionGroup&&!!a.path.isEqual(b.path)&&!!aU(a.startAt,b.startAt)&&aU(a.endAt,b.endAt)}function aG(a){return ag.isDocumentKey(a.path)&&null===a.collectionGroup&&0===a.filters.length}class aH extends class{}{constructor(a,b,c){super(),this.field=a,this.op=b,this.value=c}static create(a,b,c){return a.isKeyField()?"in"===b||"not-in"===b?this.v(a,b,c):new aI(a,b,c):"array-contains"===b?new aM(a,c):"in"===b?new aN(a,c):"not-in"===b?new aO(a,c):"array-contains-any"===b?new aP(a,c):new aH(a,b,c)}static v(a,b,c){return"in"===b?new aJ(a,c):new aK(a,c)}matches(a){let b=a.data.field(this.field);return"!="===this.op?null!==b&&this.V(al(b,this.value)):null!==b&&ai(this.value)===ai(b)&&this.V(al(b,this.value))}V(a){switch(this.op){case"<":return a<0;case"<=":return a<=0;case"==":return 0===a;case"!=":return 0!==a;case">":return a>0;case">=":return a>=0;default:return u()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class aI extends aH{constructor(a,b,c){super(a,b,c),this.key=ag.fromName(c.referenceValue)}matches(a){let b=ag.comparator(a.key,this.key);return this.V(b)}}class aJ extends aH{constructor(a,b){super(a,"in",b),this.keys=aL("in",b)}matches(a){return this.keys.some(b=>b.isEqual(a.key))}}class aK extends aH{constructor(a,b){super(a,"not-in",b),this.keys=aL("not-in",b)}matches(a){return!this.keys.some(b=>b.isEqual(a.key))}}function aL(a,b){var c;return((null===(c=b.arrayValue)|| void 0===c?void 0:c.values)||[]).map(a=>ag.fromName(a.referenceValue))}class aM extends aH{constructor(a,b){super(a,"array-contains",b)}matches(a){let b=a.data.field(this.field);return aq(b)&&ak(b.arrayValue,this.value)}}class aN extends aH{constructor(a,b){super(a,"in",b)}matches(a){let b=a.data.field(this.field);return null!==b&&ak(this.value.arrayValue,b)}}class aO extends aH{constructor(a,b){super(a,"not-in",b)}matches(a){if(ak(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let b=a.data.field(this.field);return null!==b&&!ak(this.value.arrayValue,b)}}class aP extends aH{constructor(a,b){super(a,"array-contains-any",b)}matches(a){let b=a.data.field(this.field);return!(!aq(b)||!b.arrayValue.values)&&b.arrayValue.values.some(a=>ak(this.value.arrayValue,a))}}class aQ{constructor(a,b){this.position=a,this.inclusive=b}}class aR{constructor(a,b="asc"){this.field=a,this.dir=b}}function aS(a,b){return a.dir===b.dir&&a.field.isEqual(b.field)}function aT(a,b,c){let d=0;for(let e=0;e<a.position.length;e++){let f=b[e],g=a.position[e];if(d=f.field.isKeyField()?ag.comparator(ag.fromName(g.referenceValue),c.key):al(g,c.data.field(f.field)),"desc"===f.dir&&(d*=-1),0!==d)break}return d}function aU(a,b){if(null===a)return null===b;if(null===b||a.inclusive!==b.inclusive||a.position.length!==b.position.length)return!1;for(let c=0;c<a.position.length;c++)if(!aj(a.position[c],b.position[c]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 *
 * Visible for testing.
 */ class aV{constructor(a,b=null,c=[],d=[],e=null,f="F",g=null,h=null){this.path=a,this.collectionGroup=b,this.explicitOrderBy=c,this.filters=d,this.limit=e,this.limitType=f,this.startAt=g,this.endAt=h,this.D=null,this.C=null,this.startAt,this.endAt}}function aW(a,b,c,d,e,f,g,h){return new aV(a,b,c,d,e,f,g,h)}function aX(a){return new aV(a)}function aY(a){return!ad(a.limit)&&"F"===a.limitType}function aZ(a){return!ad(a.limit)&&"L"===a.limitType}function a$(a){return a.explicitOrderBy.length>0?a.explicitOrderBy[0].field:null}function a_(a){for(let b of a.filters)if(b.S())return b.field;return null}function a0(a){return null!==a.collectionGroup}function a1(a){var b;let c=b=a;if(null===c.D){c.D=[];let d=a_(c),e=a$(c);if(null!==d&&null===e)d.isKeyField()||c.D.push(new aR(d)),c.D.push(new aR(T.keyField(),"asc"));else{let f=!1;for(let g of c.explicitOrderBy)c.D.push(g),g.field.isKeyField()&&(f=!0);if(!f){let h=c.explicitOrderBy.length>0?c.explicitOrderBy[c.explicitOrderBy.length-1].dir:"asc";c.D.push(new aR(T.keyField(),h))}}}return c.D}function a2(a){var b;let c=b=a;if(!c.C){if("F"===c.limitType)c.C=aD(c.path,c.collectionGroup,a1(c),c.filters,c.limit,c.startAt,c.endAt);else{let d=[];for(let e of a1(c)){let f="desc"===e.dir?"asc":"desc";d.push(new aR(e.field,f))}let g=c.endAt?new aQ(c.endAt.position,!c.endAt.inclusive):null,h=c.startAt?new aQ(c.startAt.position,!c.startAt.inclusive):null;c.C=aD(c.path,c.collectionGroup,d,c.filters,c.limit,g,h)}}return c.C}function a3(a,b,c){return new aV(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),b,c,a.startAt,a.endAt)}function a4(a,b){return aF(a2(a),a2(b))&&a.limitType===b.limitType}function a5(a){return`${aE(a2(a))}|lt:${a.limitType}`}function a6(a){var b;let c;return`Query(target=${c=(b=a2(a)).path.canonicalString(),null!==b.collectionGroup&&(c+=" collectionGroup="+b.collectionGroup),b.filters.length>0&&(c+=`, filters: [${b.filters.map(a=>{var b,c;return`${(b=a).field.canonicalString()} ${b.op} ${an(c=b.value)}`}).join(", ")}]`),ad(b.limit)||(c+=", limit: "+b.limit),b.orderBy.length>0&&(c+=`, orderBy: [${b.orderBy.map(a=>{var b;return b=a,`${b.field.canonicalString()} (${b.dir})`}).join(", ")}]`),b.startAt&&(c+=", startAt: ",c+=b.startAt.inclusive?"b:":"a:",c+=b.startAt.position.map(a=>{var b;return an(b=a)}).join(",")),b.endAt&&(c+=", endAt: ",c+=b.endAt.inclusive?"a:":"b:",c+=b.endAt.position.map(a=>{var b;return an(b=a)}).join(",")),`Target(${c})`}; limitType=${a.limitType})`}function a7(a,b){var c,d;return b.isFoundDocument()&&function(a,b){let c=b.key.path;return null!==a.collectionGroup?b.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(c):ag.isDocumentKey(a.path)?a.path.isEqual(c):a.path.isImmediateParentOf(c)}(a,b)&&function(a,b){for(let c of a.explicitOrderBy)if(!c.field.isKeyField()&&null===b.data.field(c.field))return!1;return!0}(a,b)&&function(a,b){for(let c of a.filters)if(!c.matches(b))return!1;return!0}(a,b)&&(c=a,d=b,(!c.startAt||!!function(a,b,c){let d=aT(a,b,c);return a.inclusive?d<=0:d<0}(c.startAt,a1(c),d))&&(!c.endAt||!!function(a,b,c){let d=aT(a,b,c);return a.inclusive?d>=0:d>0}(c.endAt,a1(c),d)))}function a8(a){return(b,c)=>{let d=!1;for(let e of a1(a)){let f=a9(e,b,c);if(0!==f)return f;d=d||e.field.isKeyField()}return 0}}function a9(a,b,c){let d=a.field.isKeyField()?ag.comparator(b.key,c.key):function(a,b,c){let d=b.data.field(a),e=c.data.field(a);return null!==d&&null!==e?al(d,e):u()}(a.field,b,c);switch(a.dir){case"asc":return d;case"desc":return -1*d;default:return u()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */ function ba(a,b){if(a.N){if(isNaN(b))return{doubleValue:"NaN"};if(b===1/0)return{doubleValue:"Infinity"};if(b=== -1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ae(b)?"-0":b}}function bb(a){return{integerValue:""+a}}function bc(a,b){return af(b)?bb(b):ba(a,b)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Used to represent a field transform on a mutation. */ class bd{constructor(){this._=void 0}}function be(a,b,c){return a instanceof bh?function(a,b){let c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return b&&(c.fields.__previous_value__=b),{mapValue:c}}(c,b):a instanceof bi?bj(a,b):a instanceof bk?bl(a,b):function(a,b){let c=bg(a,b),d=bn(c)+bn(a.k);return ap(c)&&ap(a.k)?bb(d):ba(a.O,d)}(a,b)}function bf(a,b,c){return a instanceof bi?bj(a,b):a instanceof bk?bl(a,b):c}function bg(a,b){var c,d;return a instanceof bm?ap(c=b)||(d=c)&&"doubleValue"in d?b:{integerValue:0}:null}class bh extends bd{}class bi extends bd{constructor(a){super(),this.elements=a}}function bj(a,b){let c=bo(b);for(let d of a.elements)c.some(a=>aj(a,d))||c.push(d);return{arrayValue:{values:c}}}class bk extends bd{constructor(a){super(),this.elements=a}}function bl(a,b){let c=bo(b);for(let d of a.elements)c=c.filter(a=>!aj(a,d));return{arrayValue:{values:c}}}class bm extends bd{constructor(a,b){super(),this.O=a,this.k=b}}function bn(a){return Y(a.integerValue||a.doubleValue)}function bo(a){return aq(a)&&a.arrayValue.values?a.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** A field path and the TransformOperation to perform upon it. */ class bp{constructor(a,b){this.field=a,this.transform=b}}class bq{constructor(a,b){this.version=a,this.transformResults=b}}class br{constructor(a,b){this.updateTime=a,this.exists=b}static none(){return new br}static exists(a){return new br(void 0,a)}static updateTime(a){return new br(a)}get isNone(){return void 0===this.updateTime&& void 0===this.exists}isEqual(a){return this.exists===a.exists&&(this.updateTime?!!a.updateTime&&this.updateTime.isEqual(a.updateTime):!a.updateTime)}}function bs(a,b){return void 0!==a.updateTime?b.isFoundDocument()&&b.version.isEqual(a.updateTime):void 0===a.exists||a.exists===b.isFoundDocument()}class bt{}function bu(a,b,c){a instanceof bz?function(a,b,c){let d=a.value.clone(),e=bC(a.fieldTransforms,b,c.transformResults);d.setAll(e),b.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(a,b,c):a instanceof bA?function(a,b,c){if(!bs(a.precondition,b))return void b.convertToUnknownDocument(c.version);let d=bC(a.fieldTransforms,b,c.transformResults),e=b.data;e.setAll(bB(a)),e.setAll(d),b.convertToFoundDocument(c.version,e).setHasCommittedMutations()}(a,b,c):function(a,b,c){b.convertToNoDocument(c.version).setHasCommittedMutations()}(0,b,c)}function bv(a,b,c){var d,e;a instanceof bz?function(a,b,c){if(!bs(a.precondition,b))return;let d=a.value.clone(),e=bD(a.fieldTransforms,c,b);d.setAll(e),b.convertToFoundDocument(by(b),d).setHasLocalMutations()}(a,b,c):a instanceof bA?function(a,b,c){if(!bs(a.precondition,b))return;let d=bD(a.fieldTransforms,c,b),e=b.data;e.setAll(bB(a)),e.setAll(d),b.convertToFoundDocument(by(b),e).setHasLocalMutations()}(a,b,c):(d=a,e=b,bs(d.precondition,e)&&e.convertToNoDocument(M.min()))}function bw(a,b){let c=null;for(let d of a.fieldTransforms){let e=b.data.field(d.field),f=bg(d.transform,e||null);null!=f&&(null==c&&(c=av.empty()),c.set(d.field,f))}return c||null}function bx(a,b){var c,d;return a.type===b.type&& !!a.key.isEqual(b.key)&&!!a.precondition.isEqual(b.precondition)&&(c=a.fieldTransforms,d=b.fieldTransforms,!!(void 0===c&& void 0===d|| !(!c||!d)&&J(c,d,(a,b)=>{var c,d,e,f;return c=a,d=b,c.field.isEqual(d.field)&&(e=c.transform,f=d.transform,e instanceof bi&&f instanceof bi||e instanceof bk&&f instanceof bk?J(e.elements,f.elements,aj):e instanceof bm&&f instanceof bm?aj(e.k,f.k):e instanceof bh&&f instanceof bh)})))&&(0===a.type?a.value.isEqual(b.value):1!==a.type||a.data.isEqual(b.data)&&a.fieldMask.isEqual(b.fieldMask))}function by(a){return a.isFoundDocument()?a.version:M.min()}class bz extends bt{constructor(a,b,c,d=[]){super(),this.key=a,this.value=b,this.precondition=c,this.fieldTransforms=d,this.type=0}}class bA extends bt{constructor(a,b,c,d,e=[]){super(),this.key=a,this.data=b,this.fieldMask=c,this.precondition=d,this.fieldTransforms=e,this.type=1}}function bB(a){let b=new Map;return a.fieldMask.fields.forEach(c=>{if(!c.isEmpty()){let d=a.data.field(c);b.set(c,d)}}),b}function bC(a,b,c){var d;let e=new Map;(d=a.length===c.length)||u();for(let f=0;f<c.length;f++){let g=a[f],h=g.transform,i=b.data.field(g.field);e.set(g.field,bf(h,i,c[f]))}return e}function bD(a,b,c){let d=new Map;for(let e of a){let f=e.transform,g=c.data.field(e.field);d.set(e.field,be(f,g,b))}return d}class bE extends bt{constructor(a,b){super(),this.key=a,this.precondition=b,this.type=2,this.fieldTransforms=[]}}class bF extends bt{constructor(a,b){super(),this.key=a,this.precondition=b,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bG{constructor(a){this.count=a}}function bH(a){switch(a){default:return u();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}function bI(a){if(void 0===a)return r("GRPC error has no .code"),v.UNKNOWN;switch(a){case d.OK:return v.OK;case d.CANCELLED:return v.CANCELLED;case d.UNKNOWN:return v.UNKNOWN;case d.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case d.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case d.INTERNAL:return v.INTERNAL;case d.UNAVAILABLE:return v.UNAVAILABLE;case d.UNAUTHENTICATED:return v.UNAUTHENTICATED;case d.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case d.NOT_FOUND:return v.NOT_FOUND;case d.ALREADY_EXISTS:return v.ALREADY_EXISTS;case d.PERMISSION_DENIED:return v.PERMISSION_DENIED;case d.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case d.ABORTED:return v.ABORTED;case d.OUT_OF_RANGE:return v.OUT_OF_RANGE;case d.UNIMPLEMENTED:return v.UNIMPLEMENTED;case d.DATA_LOSS:return v.DATA_LOSS;default:return u()}}(e=d||(d={}))[e.OK=0]="OK",e[e.CANCELLED=1]="CANCELLED",e[e.UNKNOWN=2]="UNKNOWN",e[e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",e[e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",e[e.NOT_FOUND=5]="NOT_FOUND",e[e.ALREADY_EXISTS=6]="ALREADY_EXISTS",e[e.PERMISSION_DENIED=7]="PERMISSION_DENIED",e[e.UNAUTHENTICATED=16]="UNAUTHENTICATED",e[e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",e[e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",e[e.ABORTED=10]="ABORTED",e[e.OUT_OF_RANGE=11]="OUT_OF_RANGE",e[e.UNIMPLEMENTED=12]="UNIMPLEMENTED",e[e.INTERNAL=13]="INTERNAL",e[e.UNAVAILABLE=14]="UNAVAILABLE",e[e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
class bJ{constructor(a,b){this.comparator=a,this.root=b||bL.EMPTY}insert(a,b){return new bJ(this.comparator,this.root.insert(a,b,this.comparator).copy(null,null,bL.BLACK,null,null))}remove(a){return new bJ(this.comparator,this.root.remove(a,this.comparator).copy(null,null,bL.BLACK,null,null))}get(a){let b=this.root;for(;!b.isEmpty();){let c=this.comparator(a,b.key);if(0===c)return b.value;c<0?b=b.left:c>0&&(b=b.right)}return null}indexOf(a){let b=0,c=this.root;for(;!c.isEmpty();){let d=this.comparator(a,c.key);if(0===d)return b+c.left.size;d<0?c=c.left:(b+=c.left.size+1,c=c.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(a){return this.root.inorderTraversal(a)}forEach(a){this.inorderTraversal((b,c)=>(a(b,c),!1))}toString(){let a=[];return this.inorderTraversal((b,c)=>(a.push(`${b}:${c}`),!1)),`{${a.join(", ")}}`}reverseTraversal(a){return this.root.reverseTraversal(a)}getIterator(){return new bK(this.root,null,this.comparator,!1)}getIteratorFrom(a){return new bK(this.root,a,this.comparator,!1)}getReverseIterator(){return new bK(this.root,null,this.comparator,!0)}getReverseIteratorFrom(a){return new bK(this.root,a,this.comparator,!0)}}class bK{constructor(a,b,c,d){this.isReverse=d,this.nodeStack=[];let e=1;for(;!a.isEmpty();)if(e=b?c(a.key,b):1,d&&(e*=-1),e<0)a=this.isReverse?a.left:a.right;else{if(0===e){this.nodeStack.push(a);break}this.nodeStack.push(a),a=this.isReverse?a.right:a.left}}getNext(){let a=this.nodeStack.pop(),b={key:a.key,value:a.value};if(this.isReverse)for(a=a.left;!a.isEmpty();)this.nodeStack.push(a),a=a.right;else for(a=a.right;!a.isEmpty();)this.nodeStack.push(a),a=a.left;return b}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let a=this.nodeStack[this.nodeStack.length-1];return{key:a.key,value:a.value}}}class bL{constructor(a,b,c,d,e){this.key=a,this.value=b,this.color=null!=c?c:bL.RED,this.left=null!=d?d:bL.EMPTY,this.right=null!=e?e:bL.EMPTY,this.size=this.left.size+1+this.right.size}copy(a,b,c,d,e){return new bL(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)}isEmpty(){return!1}inorderTraversal(a){return this.left.inorderTraversal(a)||a(this.key,this.value)||this.right.inorderTraversal(a)}reverseTraversal(a){return this.right.reverseTraversal(a)||a(this.key,this.value)||this.left.reverseTraversal(a)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(a,b,c){let d=this,e=c(a,d.key);return(d=e<0?d.copy(null,null,null,d.left.insert(a,b,c),null):0===e?d.copy(null,b,null,null,null):d.copy(null,null,null,null,d.right.insert(a,b,c))).fixUp()}removeMin(){if(this.left.isEmpty())return bL.EMPTY;let a=this;return a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),(a=a.copy(null,null,null,a.left.removeMin(),null)).fixUp()}remove(a,b){let c,d=this;if(0>b(a,d.key))d.left.isEmpty()||d.left.isRed()||d.left.left.isRed()||(d=d.moveRedLeft()),d=d.copy(null,null,null,d.left.remove(a,b),null);else{if(d.left.isRed()&&(d=d.rotateRight()),d.right.isEmpty()||d.right.isRed()||d.right.left.isRed()||(d=d.moveRedRight()),0===b(a,d.key)){if(d.right.isEmpty())return bL.EMPTY;c=d.right.min(),d=d.copy(c.key,c.value,null,null,d.right.removeMin())}d=d.copy(null,null,null,null,d.right.remove(a,b))}return d.fixUp()}isRed(){return this.color}fixUp(){let a=this;return a.right.isRed()&&!a.left.isRed()&&(a=a.rotateLeft()),a.left.isRed()&&a.left.left.isRed()&&(a=a.rotateRight()),a.left.isRed()&&a.right.isRed()&&(a=a.colorFlip()),a}moveRedLeft(){let a=this.colorFlip();return a.right.left.isRed()&&(a=(a=(a=a.copy(null,null,null,null,a.right.rotateRight())).rotateLeft()).colorFlip()),a}moveRedRight(){let a=this.colorFlip();return a.left.left.isRed()&&(a=(a=a.rotateRight()).colorFlip()),a}rotateLeft(){let a=this.copy(null,null,bL.RED,null,this.right.left);return this.right.copy(null,null,this.color,a,null)}rotateRight(){let a=this.copy(null,null,bL.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,a)}colorFlip(){let a=this.left.copy(null,null,!this.left.color,null,null),b=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,a,b)}checkMaxDepth(){let a=this.check();return Math.pow(2,a)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw u();let a=this.left.check();if(a!==this.right.check())throw u();return a+(this.isRed()?0:1)}}bL.EMPTY=null,bL.RED=!0,bL.BLACK=!1,bL.EMPTY=new class{constructor(){this.size=0}get key(){throw u()}get value(){throw u()}get color(){throw u()}get left(){throw u()}get right(){throw u()}copy(a,b,c,d,e){return this}insert(a,b,c){return new bL(a,b)}remove(a,b){return this}isEmpty(){return!0}inorderTraversal(a){return!1}reverseTraversal(a){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */ class bM{constructor(a){this.comparator=a,this.data=new bJ(this.comparator)}has(a){return null!==this.data.get(a)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(a){return this.data.indexOf(a)}forEach(a){this.data.inorderTraversal((b,c)=>(a(b),!1))}forEachInRange(a,b){let c=this.data.getIteratorFrom(a[0]);for(;c.hasNext();){let d=c.getNext();if(this.comparator(d.key,a[1])>=0)return;b(d.key)}}forEachWhile(a,b){let c;for(c=void 0!==b?this.data.getIteratorFrom(b):this.data.getIterator();c.hasNext();)if(!a(c.getNext().key))return}firstAfterOrEqual(a){let b=this.data.getIteratorFrom(a);return b.hasNext()?b.getNext().key:null}getIterator(){return new bN(this.data.getIterator())}getIteratorFrom(a){return new bN(this.data.getIteratorFrom(a))}add(a){return this.copy(this.data.remove(a).insert(a,!0))}delete(a){return this.has(a)?this.copy(this.data.remove(a)):this}isEmpty(){return this.data.isEmpty()}unionWith(a){let b=this;return b.size<a.size&&(b=a,a=this),a.forEach(a=>{b=b.add(a)}),b}isEqual(a){if(!(a instanceof bM)||this.size!==a.size)return!1;let b=this.data.getIterator(),c=a.data.getIterator();for(;b.hasNext();){let d=b.getNext().key,e=c.getNext().key;if(0!==this.comparator(d,e))return!1}return!0}toArray(){let a=[];return this.forEach(b=>{a.push(b)}),a}toString(){let a=[];return this.forEach(b=>a.push(b)),"SortedSet("+a.toString()+")"}copy(a){let b=new bM(this.comparator);return b.data=a,b}}class bN{constructor(a){this.iter=a}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function bO(a){return a.hasNext()?a.getNext():void 0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let bP=new bJ(ag.comparator),bQ=new bJ(ag.comparator),bR=new bJ(ag.comparator),bS=new bM(ag.comparator);function bT(...a){let b=bS;for(let c of a)b=b.add(c);return b}let bU=new bM(I);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An event from the RemoteStore. It is split into targetChanges (changes to the
 * state or the set of documents in our watched targets) and documentUpdates
 * (changes to the actual documents).
 */ class bV{constructor(a,b,c,d,e){this.snapshotVersion=a,this.targetChanges=b,this.targetMismatches=c,this.documentUpdates=d,this.resolvedLimboDocuments=e}static createSynthesizedRemoteEventForCurrentChange(a,b){let c=new Map;return c.set(a,bW.createSynthesizedTargetChangeForCurrentChange(a,b)),new bV(M.min(),c,bU,bP,bT())}}class bW{constructor(a,b,c,d,e){this.resumeToken=a,this.current=b,this.addedDocuments=c,this.modifiedDocuments=d,this.removedDocuments=e}static createSynthesizedTargetChangeForCurrentChange(a,b){return new bW(V.EMPTY_BYTE_STRING,b,bT(),bT(),bT())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a changed document and a list of target ids to which this change
 * applies.
 *
 * If document has been deleted NoDocument will be provided.
 */ class bX{constructor(a,b,c,d){this.M=a,this.removedTargetIds=b,this.key=c,this.$=d}}class bY{constructor(a,b){this.targetId=a,this.F=b}}class bZ{constructor(a,b,c=V.EMPTY_BYTE_STRING,d=null){this.state=a,this.targetIds=b,this.resumeToken=c,this.cause=d}}class b${constructor(){this.B=0,this.L=b1(),this.U=V.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(a){a.approximateByteSize()>0&&(this.K=!0,this.U=a)}H(){let a=bT(),b=bT(),c=bT();return this.L.forEach((d,e)=>{switch(e){case 0:a=a.add(d);break;case 2:b=b.add(d);break;case 1:c=c.add(d);break;default:u()}}),new bW(this.U,this.q,a,b,c)}J(){this.K=!1,this.L=b1()}Y(a,b){this.K=!0,this.L=this.L.insert(a,b)}X(a){this.K=!0,this.L=this.L.remove(a)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class b_{constructor(a){this.nt=a,this.st=new Map,this.it=bP,this.rt=b0(),this.ot=new bM(I)}ct(a){for(let b of a.M)a.$&&a.$.isFoundDocument()?this.ut(b,a.$):this.at(b,a.key,a.$);for(let c of a.removedTargetIds)this.at(c,a.key,a.$)}ht(a){this.forEachTarget(a,b=>{let c=this.lt(b);switch(a.state){case 0:this.ft(b)&&c.W(a.resumeToken);break;case 1:c.tt(),c.G||c.J(),c.W(a.resumeToken);break;case 2:c.tt(),c.G||this.removeTarget(b);break;case 3:this.ft(b)&&(c.et(),c.W(a.resumeToken));break;case 4:this.ft(b)&&(this.dt(b),c.W(a.resumeToken));break;default:u()}})}forEachTarget(a,b){a.targetIds.length>0?a.targetIds.forEach(b):this.st.forEach((a,c)=>{this.ft(c)&&b(c)})}_t(a){let b=a.targetId,c=a.F.count,d=this.wt(b);if(d){let e=d.target;if(aG(e)){if(0===c){let f=new ag(e.path);this.at(b,f,ax.newNoDocument(f,M.min()))}else{var g;(g=1===c)||u()}}else this.gt(b)!==c&&(this.dt(b),this.ot=this.ot.add(b))}}yt(a){let b=new Map;this.st.forEach((c,d)=>{let e=this.wt(d);if(e){if(c.current&&aG(e.target)){let f=new ag(e.target.path);null!==this.it.get(f)||this.It(d,f)||this.at(d,f,ax.newNoDocument(f,a))}c.j&&(b.set(d,c.H()),c.J())}});let c=bT();this.rt.forEach((a,b)=>{let d=!0;b.forEachWhile(a=>{let b=this.wt(a);return!b||2===b.purpose||(d=!1,!1)}),d&&(c=c.add(a))}),this.it.forEach((b,c)=>c.setReadTime(a));let d=new bV(a,b,this.ot,this.it,c);return this.it=bP,this.rt=b0(),this.ot=new bM(I),d}ut(a,b){if(!this.ft(a))return;let c=this.It(a,b.key)?2:0;this.lt(a).Y(b.key,c),this.it=this.it.insert(b.key,b),this.rt=this.rt.insert(b.key,this.Et(b.key).add(a))}at(a,b,c){if(!this.ft(a))return;let d=this.lt(a);this.It(a,b)?d.Y(b,1):d.X(b),this.rt=this.rt.insert(b,this.Et(b).delete(a)),c&&(this.it=this.it.insert(b,c))}removeTarget(a){this.st.delete(a)}gt(a){let b=this.lt(a).H();return this.nt.getRemoteKeysForTarget(a).size+b.addedDocuments.size-b.removedDocuments.size}Z(a){this.lt(a).Z()}lt(a){let b=this.st.get(a);return b||(b=new b$,this.st.set(a,b)),b}Et(a){let b=this.rt.get(a);return b||(b=new bM(I),this.rt=this.rt.insert(a,b)),b}ft(a){let b=null!==this.wt(a);return b||q("WatchChangeAggregator","Detected inactive target",a),b}wt(a){let b=this.st.get(a);return b&&b.G?null:this.nt.Tt(a)}dt(a){this.st.set(a,new b$),this.nt.getRemoteKeysForTarget(a).forEach(b=>{this.at(a,b,null)})}It(a,b){return this.nt.getRemoteKeysForTarget(a).has(b)}}function b0(){return new bJ(ag.comparator)}function b1(){return new bJ(ag.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let b2={asc:"ASCENDING",desc:"DESCENDING"},b3={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class b4{constructor(a,b){this.databaseId=a,this.N=b}}function b5(a,b){return a.N?`${new Date(1e3*b.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+b.nanoseconds).slice(-9)}Z`:{seconds:""+b.seconds,nanos:b.nanoseconds}}function b6(a,b){return a.N?b.toBase64():b.toUint8Array()}function b7(a){var b;return!a&&u(),M.fromTimestamp(function(a){let b=X(a);return new L(b.seconds,b.nanos)}(a))}function b8(a,b){var c;return(c=a,new R(["projects",c.projectId,"databases",c.database])).child("documents").child(b).canonicalString()}function b9(a){var b;let c=R.fromString(a);return ct(c)||u(),c}function ca(a,b){return b8(a.databaseId,b.path)}function cb(a,b){let c=b9(b);if(c.get(1)!==a.databaseId.projectId)throw new w(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+c.get(1)+" vs "+a.databaseId.projectId);if(c.get(3)!==a.databaseId.database)throw new w(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+c.get(3)+" vs "+a.databaseId.database);return new ag(cf(c))}function cc(a,b){return b8(a.databaseId,b)}function cd(a){let b=b9(a);return 4===b.length?R.emptyPath():cf(b)}function ce(a){return new R(["projects",a.databaseId.projectId,"databases",a.databaseId.database]).canonicalString()}function cf(a){var b;return a.length>4&&"documents"===a.get(4)||u(),a.popFirst(5)}function cg(a,b,c){return{name:ca(a,b),fields:c.value.mapValue.fields}}function ch(a,b,c){let d=cb(a,b.name),e=b7(b.updateTime),f=new av({mapValue:{fields:b.fields}}),g=ax.newFoundDocument(d,e,f);return c&&g.setHasCommittedMutations(),c?g.setHasCommittedMutations():g}function ci(a,b){var c,d,e,f;let g;if(b instanceof bz)g={update:cg(a,b.key,b.value)};else if(b instanceof bE)g={delete:ca(a,b.key)};else if(b instanceof bA)g={update:cg(a,b.key,b.data),updateMask:cs(b.fieldMask)};else{if(!(b instanceof bF))return u();g={verify:ca(a,b.key)}}return b.fieldTransforms.length>0&&(g.updateTransforms=b.fieldTransforms.map(a=>(function(a,b){let c=b.transform;if(c instanceof bh)return{fieldPath:b.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof bi)return{fieldPath:b.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof bk)return{fieldPath:b.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof bm)return{fieldPath:b.field.canonicalString(),increment:c.k};throw u()})(0,a))),b.precondition.isNone||(g.currentDocument=(c=a,void 0!==(d=b.precondition).updateTime?{updateTime:(e=c,b5(e,(f=d.updateTime).toTimestamp()))}:void 0!==d.exists?{exists:d.exists}:u())),g}function cj(a,b){var c;let d=b.currentDocument?void 0!==(c=b.currentDocument).updateTime?br.updateTime(b7(c.updateTime)):void 0!==c.exists?br.exists(c.exists):br.none():br.none(),e=b.updateTransforms?b.updateTransforms.map(b=>(function(a,b){let c=null;if("setToServerValue"in b){var d;"REQUEST_TIME"===b.setToServerValue||u(),c=new bh}else if("appendMissingElements"in b){let e=b.appendMissingElements.values||[];c=new bi(e)}else if("removeAllFromArray"in b){let f=b.removeAllFromArray.values||[];c=new bk(f)}else"increment"in b?c=new bm(a,b.increment):u();let g=T.fromServerFormat(b.fieldPath);return new bp(g,c)})(a,b)):[];if(b.update){b.update.name;let f=cb(a,b.update.name),g=new av({mapValue:{fields:b.update.fields}});if(b.updateMask){let h=function(a){let b=a.fieldPaths||[];return new U(b.map(a=>T.fromServerFormat(a)))}(b.updateMask);return new bA(f,g,h,d,e)}return new bz(f,g,d,e)}if(b.delete){let i=cb(a,b.delete);return new bE(i,d)}if(b.verify){let j=cb(a,b.verify);return new bF(j,d)}return u()}function ck(a,b){return{documents:[cc(a,b.path)]}}function cl(a,b){var c,d,e,f;let g={structuredQuery:{}},h=b.path;null!==b.collectionGroup?(g.parent=cc(a,h),g.structuredQuery.from=[{collectionId:b.collectionGroup,allDescendants:!0}]):(g.parent=cc(a,h.popLast()),g.structuredQuery.from=[{collectionId:h.lastSegment()}]);let i=function(a){if(0===a.length)return;let b=a.map(a=>(function(a){var b;if("=="===a.op){if(as(a.value))return{unaryFilter:{field:co(a.field),op:"IS_NAN"}};if(ar(a.value))return{unaryFilter:{field:co(a.field),op:"IS_NULL"}}}else if("!="===a.op){if(as(a.value))return{unaryFilter:{field:co(a.field),op:"IS_NOT_NAN"}};if(ar(a.value))return{unaryFilter:{field:co(a.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:co(a.field),op:(b=a.op,b3[b]),value:a.value}}})(a));return 1===b.length?b[0]:{compositeFilter:{op:"AND",filters:b}}}(b.filters);i&&(g.structuredQuery.where=i);let j=function(a){if(0!==a.length)return a.map(a=>{var b,c;return{field:co((b=a).field),direction:(c=b.dir,b2[c])}})}(b.orderBy);j&&(g.structuredQuery.orderBy=j);let k=(d=a,e=b.limit,d.N||ad(e)?e:{value:e});return null!==k&&(g.structuredQuery.limit=k),b.startAt&&(g.structuredQuery.startAt={before:(c=b.startAt).inclusive,values:c.position}),b.endAt&&(g.structuredQuery.endAt={before:!(f=b.endAt).inclusive,values:f.position}),g}function cm(a){var b,c;let d=cd(a.parent),e=a.structuredQuery,f=e.from?e.from.length:0,g=null;if(f>0){(b=1===f)||u();let h=e.from[0];h.allDescendants?g=h.collectionId:d=d.child(h.collectionId)}let i=[];e.where&&(i=cn(e.where));let j=[];e.orderBy&&(j=e.orderBy.map(a=>{var b;return b=a,new aR(cp(b.field),function(a){switch(a){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}));let k=null,l;e.limit&&(k=ad(l="object"==typeof(c=e.limit)?c.value:c)?null:l);let m=null;e.startAt&&(m=function(a){let b=!!a.before,c=a.values||[];return new aQ(c,b)}(e.startAt));let n=null;return e.endAt&&(n=function(a){let b=!a.before,c=a.values||[];return new aQ(c,b)}(e.endAt)),aW(d,g,j,i,k,"F",m,n)}function cn(a){return a?void 0!==a.unaryFilter?[cr(a)]:void 0!==a.fieldFilter?[cq(a)]:void 0!==a.compositeFilter?a.compositeFilter.filters.map(a=>cn(a)).reduce((a,b)=>a.concat(b)):u():[]}function co(a){return{fieldPath:a.canonicalString()}}function cp(a){return T.fromServerFormat(a.fieldPath)}function cq(a){return aH.create(cp(a.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return u()}}(a.fieldFilter.op),a.fieldFilter.value)}function cr(a){switch(a.unaryFilter.op){case"IS_NAN":let b=cp(a.unaryFilter.field);return aH.create(b,"==",{doubleValue:NaN});case"IS_NULL":let c=cp(a.unaryFilter.field);return aH.create(c,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let d=cp(a.unaryFilter.field);return aH.create(d,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let e=cp(a.unaryFilter.field);return aH.create(e,"!=",{nullValue:"NULL_VALUE"});default:return u()}}function cs(a){let b=[];return a.fields.forEach(a=>b.push(a.canonicalString())),{fieldPaths:b}}function ct(a){return a.length>=4&&"projects"===a.get(0)&&"databases"===a.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Encodes a resource path into a IndexedDb-compatible string form.
 */ function cu(a){let b="";for(let c=0;c<a.length;c++)b.length>0&&(b=cw(b)),b=cv(a.get(c),b);return cw(b)}function cv(a,b){let c=b,d=a.length;for(let e=0;e<d;e++){let f=a.charAt(e);switch(f){case"\0":c+="\x01\x10";break;case"\x01":c+="\x01\x11";break;default:c+=f}}return c}function cw(a){return a+"\x01\x01"}function cx(a){var b,c;let d=a.length;if(d>=2||u(),2===d)return"\x01"===a.charAt(0)&&"\x01"===a.charAt(1)||u(),R.emptyPath();let e=d-2,f=[],g="";for(let h=0;h<d;){let i=a.indexOf("\x01",h);switch((i<0||i>e)&&u(),a.charAt(i+1)){case"\x01":let j=a.substring(h,i),k;0===g.length?k=j:(g+=j,k=g,g=""),f.push(k);break;case"\x10":g+=a.substring(h,i),g+="\0";break;case"\x11":g+=a.substring(h,i+1);break;default:u()}h=i+2}return new R(f)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // TODO(indexing): Remove this constant
/**
 * Wrapper class to store timestamps (seconds and nanos) in IndexedDb objects.
 */ class cy{constructor(a,b){this.seconds=a,this.nanoseconds=b}}class cz{constructor(a,b,c){this.ownerId=a,this.allowTabSynchronization=b,this.leaseTimestampMs=c}}cz.store="owner",cz.key="owner";class cA{constructor(a,b,c){this.userId=a,this.lastAcknowledgedBatchId=b,this.lastStreamToken=c}}cA.store="mutationQueues",cA.keyPath="userId";class cB{constructor(a,b,c,d,e){this.userId=a,this.batchId=b,this.localWriteTimeMs=c,this.baseMutations=d,this.mutations=e}}cB.store="mutations",cB.keyPath="batchId",cB.userMutationsIndex="userMutationsIndex",cB.userMutationsKeyPath=["userId","batchId"];class cC{constructor(){}static prefixForUser(a){return[a]}static prefixForPath(a,b){return[a,cu(b)]}static key(a,b,c){return[a,cu(b),c]}}cC.store="documentMutations",cC.PLACEHOLDER=new cC;class cD{constructor(a,b){this.path=a,this.readTime=b}}class cE{constructor(a,b){this.path=a,this.version=b}}class cF{constructor(a,b,c,d,e,f){this.unknownDocument=a,this.noDocument=b,this.document=c,this.hasCommittedMutations=d,this.readTime=e,this.parentPath=f}}cF.store="remoteDocuments",cF.readTimeIndex="readTimeIndex",cF.readTimeIndexPath="readTime",cF.collectionReadTimeIndex="collectionReadTimeIndex",cF.collectionReadTimeIndexPath=["parentPath","readTime"];class cG{constructor(a){this.byteSize=a}}cG.store="remoteDocumentGlobal",cG.key="remoteDocumentGlobalKey";class cH{constructor(a,b,c,d,e,f,g){this.targetId=a,this.canonicalId=b,this.readTime=c,this.resumeToken=d,this.lastListenSequenceNumber=e,this.lastLimboFreeSnapshotVersion=f,this.query=g}}cH.store="targets",cH.keyPath="targetId",cH.queryTargetsIndexName="queryTargetsIndex",cH.queryTargetsKeyPath=["canonicalId","targetId"];class cI{constructor(a,b,c){this.targetId=a,this.path=b,this.sequenceNumber=c}}cI.store="targetDocuments",cI.keyPath=["targetId","path"],cI.documentTargetsIndex="documentTargetsIndex",cI.documentTargetsKeyPath=["path","targetId"];class cJ{constructor(a,b,c,d){this.highestTargetId=a,this.highestListenSequenceNumber=b,this.lastRemoteSnapshotVersion=c,this.targetCount=d}}cJ.key="targetGlobalKey",cJ.store="targetGlobal";class cK{constructor(a,b){this.collectionId=a,this.parent=b}}cK.store="collectionParents",cK.keyPath=["collectionId","parent"];class cL{constructor(a,b,c,d){this.clientId=a,this.updateTimeMs=b,this.networkEnabled=c,this.inForeground=d}}cL.store="clientMetadata",cL.keyPath="clientId";class cM{constructor(a,b,c){this.bundleId=a,this.createTime=b,this.version=c}}cM.store="bundles",cM.keyPath="bundleId";class cN{constructor(a,b,c){this.name=a,this.readTime=b,this.bundledQuery=c}}cN.store="namedQueries",cN.keyPath="name";class cO{constructor(a,b,c){this.indexId=a,this.collectionGroup=b,this.fields=c}}cO.store="indexConfiguration",cO.keyPath="indexId",cO.collectionGroupIndex="collectionGroupIndex",cO.collectionGroupIndexPath="collectionGroup";class cP{constructor(a,b,c,d,e,f){this.indexId=a,this.uid=b,this.sequenceNumber=c,this.readTime=d,this.documentKey=e,this.largestBatchId=f}}cP.store="indexState",cP.keyPath=["indexId","uid"],cP.sequenceNumberIndex="sequenceNumberIndex",cP.sequenceNumberIndexPath=["uid","sequenceNumber"];class cQ{constructor(a,b,c,d,e){this.indexId=a,this.uid=b,this.arrayValue=c,this.directionalValue=d,this.documentKey=e}}cQ.store="indexEntries",cQ.keyPath=["indexId","uid","arrayValue","directionalValue","documentKey"],cQ.documentKeyIndex="documentKeyIndex",cQ.documentKeyIndexPath=["indexId","uid","documentKey"];class cR{constructor(a,b,c,d,e,f){this.userId=a,this.collectionPath=b,this.documentId=c,this.collectionGroup=d,this.largestBatchId=e,this.overlayMutation=f}}cR.store="documentOverlays",cR.keyPath=["userId","collectionPath","documentId"],cR.collectionPathOverlayIndex="collectionPathOverlayIndex",cR.collectionPathOverlayIndexPath=["userId","collectionPath","largestBatchId"],cR.collectionGroupOverlayIndex="collectionGroupOverlayIndex",cR.collectionGroupOverlayIndexPath=["userId","collectionGroup","largestBatchId"];let cS=[cA.store,cB.store,cC.store,cF.store,cH.store,cz.store,cJ.store,cI.store,cL.store,cG.store,cK.store,cM.store,cN.store],cT=[...cS,cR.store],cU=[...cT,cO.store,cP.store,cQ.store],cV="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cW{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(a){this.onCommittedListeners.push(a)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(a=>a())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * PersistencePromise is essentially a re-implementation of Promise except
 * it has a .next() method instead of .then() and .next() and .catch() callbacks
 * are executed synchronously when a PersistencePromise resolves rather than
 * asynchronously (Promise implementations use setImmediate() or similar).
 *
 * This is necessary to interoperate with IndexedDB which will automatically
 * commit transactions if control is returned to the event loop without
 * synchronously initiating another operation on the transaction.
 *
 * NOTE: .then() and .catch() only allow a single consumer, unlike normal
 * Promises.
 */ class cX{constructor(a){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,a(a=>{this.isDone=!0,this.result=a,this.nextCallback&&this.nextCallback(a)},a=>{this.isDone=!0,this.error=a,this.catchCallback&&this.catchCallback(a)})}catch(a){return this.next(void 0,a)}next(a,b){return this.callbackAttached&&u(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(b,this.error):this.wrapSuccess(a,this.result):new cX((c,d)=>{this.nextCallback=b=>{this.wrapSuccess(a,b).next(c,d)},this.catchCallback=a=>{this.wrapFailure(b,a).next(c,d)}})}toPromise(){return new Promise((a,b)=>{this.next(a,b)})}wrapUserFunction(a){try{let b=a();return b instanceof cX?b:cX.resolve(b)}catch(c){return cX.reject(c)}}wrapSuccess(a,b){return a?this.wrapUserFunction(()=>a(b)):cX.resolve(b)}wrapFailure(a,b){return a?this.wrapUserFunction(()=>a(b)):cX.reject(b)}static resolve(a){return new cX((b,c)=>{b(a)})}static reject(a){return new cX((b,c)=>{c(a)})}static waitFor(a){return new cX((b,c)=>{let d=0,e=0,f=!1;a.forEach(a=>{++d,a.next(()=>{++e,f&&e===d&&b()},a=>c(a))}),f=!0,e===d&&b()})}static or(a){let b=cX.resolve(!1);for(let c of a)b=b.next(a=>a?cX.resolve(a):c());return b}static forEach(a,b){let c=[];return a.forEach((a,d)=>{c.push(b.call(this,a,d))}),this.waitFor(c)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // References to `window` are guarded by SimpleDb.isAvailable()
/* eslint-disable no-restricted-globals */ /**
 * Wraps an IDBTransaction and exposes a store() method to get a handle to a
 * specific object store.
 */ class cY{constructor(a,b){this.action=a,this.transaction=b,this.aborted=!1,this.At=new x,this.transaction.oncomplete=()=>{this.At.resolve()},this.transaction.onabort=()=>{b.error?this.At.reject(new c_(a,b.error)):this.At.resolve()},this.transaction.onerror=b=>{let c=c4(b.target.error);this.At.reject(new c_(a,c))}}static open(a,b,c,d){try{return new cY(b,a.transaction(d,c))}catch(e){throw new c_(b,e)}}get Rt(){return this.At.promise}abort(a){a&&this.At.reject(a),this.aborted||(q("SimpleDb","Aborting transaction:",a?a.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}Pt(){let a=this.transaction;this.aborted||"function"!=typeof a.commit||a.commit()}store(a){let b=this.transaction.objectStore(a);return new c1(b)}}class cZ{constructor(a,b,c){this.name=a,this.version=b,this.bt=c,12.2===cZ.vt(getUA())&&r("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(a){return q("SimpleDb","Removing database:",a),c2(window.indexedDB.deleteDatabase(a)).toPromise()}static Vt(){if(!isIndexedDBAvailable())return!1;if(cZ.St())return!0;let a=getUA(),b=cZ.vt(a),c=0<b&&b<10,d=cZ.Dt(a),e=0<d&&d<4.5;return!(a.indexOf("MSIE ")>0||a.indexOf("Trident/")>0||a.indexOf("Edge/")>0||c||e)}static St(){var a;return void 0!==k&&"YES"===(null===(a=k.env)|| void 0===a?void 0:a.Ct)}static Nt(a,b){return a.store(b)}static vt(a){let b=a.match(/i(?:phone|pad|pod) os ([\d_]+)/i),c=b?b[1].split("_").slice(0,2).join("."):"-1";return Number(c)}static Dt(a){let b=a.match(/Android ([\d.]+)/i),c=b?b[1].split(".").slice(0,2).join("."):"-1";return Number(c)}async xt(a){return this.db||(q("SimpleDb","Opening database:",this.name),this.db=await new Promise((b,c)=>{let d=indexedDB.open(this.name,this.version);d.onsuccess=a=>{let c=a.target.result;b(c)},d.onblocked=()=>{c(new c_(a,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},d.onerror=b=>{let d=b.target.error;"VersionError"===d.name?c(new w(v.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===d.name?c(new w(v.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+d)):c(new c_(a,d))},d.onupgradeneeded=a=>{q("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',a.oldVersion);let b=a.target.result;this.bt.kt(b,d.transaction,a.oldVersion,this.version).next(()=>{q("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Ot&&(this.db.onversionchange=a=>this.Ot(a)),this.db}Mt(a){this.Ot=a,this.db&&(this.db.onversionchange=b=>a(b))}async runTransaction(a,b,c,d){let e="readonly"===b,f=0;for(;;){++f;try{this.db=await this.xt(a);let g=cY.open(this.db,a,e?"readonly":"readwrite",c),h=d(g).next(a=>(g.Pt(),a)).catch(a=>(g.abort(a),cX.reject(a))).toPromise();return h.catch(()=>{}),await g.Rt,h}catch(i){let j="FirebaseError"!==i.name&&f<3;if(q("SimpleDb","Transaction failed with error:",i.message,"Retrying:",j),this.close(),!j)return Promise.reject(i)}}}close(){this.db&&this.db.close(),this.db=void 0}}class c${constructor(a){this.$t=a,this.Ft=!1,this.Bt=null}get isDone(){return this.Ft}get Lt(){return this.Bt}set cursor(a){this.$t=a}done(){this.Ft=!0}Ut(a){this.Bt=a}delete(){return c2(this.$t.delete())}}class c_ extends null{constructor(a,b){super(v.UNAVAILABLE,`IndexedDB transaction '${a}' failed: ${b}`),this.name="IndexedDbTransactionError"}}function c0(a){return"IndexedDbTransactionError"===a.name}class c1{constructor(a){this.store=a}put(a,b){let c;return void 0!==b?(q("SimpleDb","PUT",this.store.name,a,b),c=this.store.put(b,a)):(q("SimpleDb","PUT",this.store.name,"<auto-key>",a),c=this.store.put(a)),c2(c)}add(a){return q("SimpleDb","ADD",this.store.name,a,a),c2(this.store.add(a))}get(a){return c2(this.store.get(a)).next(b=>(void 0===b&&(b=null),q("SimpleDb","GET",this.store.name,a,b),b))}delete(a){return q("SimpleDb","DELETE",this.store.name,a),c2(this.store.delete(a))}count(){return q("SimpleDb","COUNT",this.store.name),c2(this.store.count())}qt(a,b){let c=this.options(a,b);if(c.index||"function"!=typeof this.store.getAll){let d=this.cursor(c),e=[];return this.Kt(d,(a,b)=>{e.push(b)}).next(()=>e)}{let f=this.store.getAll(c.range);return new cX((a,b)=>{f.onerror=a=>{b(a.target.error)},f.onsuccess=b=>{a(b.target.result)}})}}Gt(a,b){q("SimpleDb","DELETE ALL",this.store.name);let c=this.options(a,b);c.jt=!1;let d=this.cursor(c);return this.Kt(d,(a,b,c)=>c.delete())}Qt(a,b){let c;b?c=a:(c={},b=a);let d=this.cursor(c);return this.Kt(d,b)}Wt(a){let b=this.cursor({});return new cX((c,d)=>{b.onerror=a=>{let b=c4(a.target.error);d(b)},b.onsuccess=b=>{let d=b.target.result;d?a(d.primaryKey,d.value).next(a=>{a?d.continue():c()}):c()}})}Kt(a,b){let c=[];return new cX((d,e)=>{a.onerror=a=>{e(a.target.error)},a.onsuccess=a=>{let e=a.target.result;if(!e)return void d();let f=new c$(e),g=b(e.primaryKey,e.value,f);if(g instanceof cX){let h=g.catch(a=>(f.done(),cX.reject(a)));c.push(h)}f.isDone?d():null===f.Lt?e.continue():e.continue(f.Lt)}}).next(()=>cX.waitFor(c))}options(a,b){let c;return void 0!==a&&("string"==typeof a?c=a:b=a),{index:c,range:b}}cursor(a){let b="next";if(a.reverse&&(b="prev"),a.index){let c=this.store.index(a.index);return a.jt?c.openKeyCursor(a.range,b):c.openCursor(a.range,b)}return this.store.openCursor(a.range,b)}}function c2(a){return new cX((b,c)=>{a.onsuccess=a=>{let c=a.target.result;b(c)},a.onerror=a=>{let b=c4(a.target.error);c(b)}})}let c3=null;function c4(a){let b=cZ.vt(getUA());if(b>=12.2&&b<13){let c="An internal error was encountered in the Indexed Database server";if(a.message.indexOf(c)>=0){let d=new w("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${c}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return c3||(c3=!0,setTimeout(()=>{throw d},0)),d}}return a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class c5 extends null{constructor(a,b){super(),this.zt=a,this.currentSequenceNumber=b}}function c6(a,b){var c;let d=c=a;return cZ.Nt(d.zt,b)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A batch of mutations that will be sent as one unit to the backend.
 */ class c7{constructor(a,b,c,d){this.batchId=a,this.localWriteTime=b,this.baseMutations=c,this.mutations=d}applyToRemoteDocument(a,b){let c=b.mutationResults;for(let d=0;d<this.mutations.length;d++){let e=this.mutations[d];e.key.isEqual(a.key)&&bu(e,a,c[d])}}applyToLocalView(a){for(let b of this.baseMutations)b.key.isEqual(a.key)&&bv(b,a,this.localWriteTime);for(let c of this.mutations)c.key.isEqual(a.key)&&bv(c,a,this.localWriteTime)}applyToLocalDocumentSet(a){this.mutations.forEach(b=>{let c=a.get(b.key),d=c;this.applyToLocalView(d),c.isValidDocument()||d.convertToNoDocument(M.min())})}keys(){return this.mutations.reduce((a,b)=>a.add(b.key),bT())}isEqual(a){return this.batchId===a.batchId&&J(this.mutations,a.mutations,(a,b)=>bx(a,b))&&J(this.baseMutations,a.baseMutations,(a,b)=>bx(a,b))}}class c8{constructor(a,b,c,d){this.batch=a,this.commitVersion=b,this.mutationResults=c,this.docVersions=d}static from(a,b,c){var d;(d=a.mutations.length===c.length)||u();let e=bR,f=a.mutations;for(let g=0;g<f.length;g++)e=e.insert(f[g].key,c[g].version);return new c8(a,b,c,e)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Representation of an overlay computed by Firestore.
 *
 * Holds information about a mutation and the largest batch id in Firestore when
 * the mutation was created.
 */ class c9{constructor(a,b){this.largestBatchId=a,this.mutation=b}getKey(){return this.mutation.key}isEqual(a){return null!==a&&this.mutation===a.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An immutable set of metadata that the local store tracks for each target.
 */ class da{constructor(a,b,c,d,e=M.min(),f=M.min(),g=V.EMPTY_BYTE_STRING){this.target=a,this.targetId=b,this.purpose=c,this.sequenceNumber=d,this.snapshotVersion=e,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=g}withSequenceNumber(a){return new da(this.target,this.targetId,this.purpose,a,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(a,b){return new da(this.target,this.targetId,this.purpose,this.sequenceNumber,b,this.lastLimboFreeSnapshotVersion,a)}withLastLimboFreeSnapshotVersion(a){return new da(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,a,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Serializer for values stored in the LocalStore. */ class db{constructor(a){this.Ht=a}}function dc(a,b){let c;if(b.document)c=ch(a.Ht,b.document,!!b.hasCommittedMutations);else if(b.noDocument){let d=ag.fromSegments(b.noDocument.path),e=dh(b.noDocument.readTime);c=ax.newNoDocument(d,e),b.hasCommittedMutations&&c.setHasCommittedMutations()}else{if(!b.unknownDocument)return u();{let f=ag.fromSegments(b.unknownDocument.path),g=dh(b.unknownDocument.version);c=ax.newUnknownDocument(f,g)}}return b.readTime&&c.setReadTime(df(b.readTime)),c}function dd(a,b){let c=de(b.readTime),d=b.key.path.popLast().toArray();if(b.isFoundDocument()){var e,f;let g=(e=a.Ht,{name:ca(e,(f=b).key),fields:f.data.value.mapValue.fields,updateTime:b5(e,f.version.toTimestamp())}),h=b.hasCommittedMutations;return new cF(null,null,g,h,c,d)}if(b.isNoDocument()){let i=b.key.path.toArray(),j=dg(b.version),k=b.hasCommittedMutations;return new cF(null,new cD(i,j),null,k,c,d)}if(b.isUnknownDocument()){let l=b.key.path.toArray(),m=dg(b.version);return new cF(new cE(l,m),null,null,!0,c,d)}return u()}function de(a){let b=a.toTimestamp();return[b.seconds,b.nanoseconds]}function df(a){let b=new L(a[0],a[1]);return M.fromTimestamp(b)}function dg(a){let b=a.toTimestamp();return new cy(b.seconds,b.nanoseconds)}function dh(a){let b=new L(a.seconds,a.nanoseconds);return M.fromTimestamp(b)}function di(a,b){let c=(b.baseMutations||[]).map(b=>cj(a.Ht,b));for(let d=0;d<b.mutations.length-1;++d){let e=b.mutations[d];if(d+1<b.mutations.length&& void 0!==b.mutations[d+1].transform){let f=b.mutations[d+1];e.updateTransforms=f.transform.fieldTransforms,b.mutations.splice(d+1,1),++d}}let g=b.mutations.map(b=>cj(a.Ht,b)),h=L.fromMillis(b.localWriteTimeMs);return new c7(b.batchId,h,c,g)}function dj(a){var b,c,d;let e=dh(a.readTime),f=void 0!==a.lastLimboFreeSnapshotVersion?dh(a.lastLimboFreeSnapshotVersion):M.min(),g;return void 0!==a.query.documents?(1===(b=a.query).documents.length||u(),g=a2(aX(cd(b.documents[0])))):g=a2(cm(d=a.query)),new da(g,a.targetId,0,a.lastListenSequenceNumber,e,f,V.fromBase64String(a.resumeToken))}function dk(a,b){let c=dg(b.snapshotVersion),d=dg(b.lastLimboFreeSnapshotVersion),e;e=aG(b.target)?ck(a.Ht,b.target):cl(a.Ht,b.target);let f=b.resumeToken.toBase64();return new cH(b.targetId,aE(b.target),c,f,b.sequenceNumber,d,e)}function dl(a){let b=cm({parent:a.parent,structuredQuery:a.structuredQuery});return"LAST"===a.limitType?a3(b,b.limit,"L"):b}function dm(a,b){return new c9(b.largestBatchId,cj(a.Ht,b.overlayMutation))}function dn(a,b){let c=b.path.lastSegment();return[a,cu(b.path.popLast()),c]}function dp(a){return c6(a,cM.store)}function dq(a){return c6(a,cN.store)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Implementation of DocumentOverlayCache using IndexedDb.
 */ class dr{constructor(a,b){this.O=a,this.userId=b}static Jt(a,b){let c=b.uid||"";return new dr(a,c)}getOverlay(a,b){return ds(a).get(dn(this.userId,b)).next(a=>a?dm(this.O,a):null)}saveOverlays(a,b,c){let d=[];return c.forEach(c=>{let e=new c9(b,c);d.push(this.Yt(a,e))}),cX.waitFor(d)}removeOverlaysForBatchId(a,b,c){let d=new Set;b.forEach(a=>d.add(cu(a.getCollectionPath())));let e=[];return d.forEach(b=>{let d=IDBKeyRange.bound([this.userId,b,c],[this.userId,b,c+1],!1,!0);e.push(ds(a).Gt(cR.collectionPathOverlayIndex,d))}),cX.waitFor(e)}getOverlaysForCollection(a,b,c){let d=new Map,e=cu(b),f=IDBKeyRange.bound([this.userId,e,c],[this.userId,e,Number.POSITIVE_INFINITY],!0);return ds(a).qt(cR.collectionPathOverlayIndex,f).next(a=>{for(let b of a){let c=dm(this.O,b);d.set(c.getKey(),c)}return d})}getOverlaysForCollectionGroup(a,b,c,d){let e=new Map,f,g=IDBKeyRange.bound([this.userId,b,c],[this.userId,b,Number.POSITIVE_INFINITY],!0);return ds(a).Qt({index:cR.collectionGroupOverlayIndex,range:g},(a,b,c)=>{let g=dm(this.O,b);e.size<d||g.largestBatchId===f?(e.set(g.getKey(),g),f=g.largestBatchId):c.done()}).next(()=>e)}Yt(a,b){return ds(a).put(function(a,b,c){let[d,e,f]=dn(b,c.mutation.key);return new cR(b,e,f,c.mutation.key.getCollectionGroup(),c.largestBatchId,ci(a.Ht,c.mutation))}(this.O,this.userId,b))}}function ds(a){return c6(a,cR.store)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Note: This code is copied from the backend. Code that is not used by
// Firestore was removed.
/** Firestore index value writer.  */ class dt{constructor(){}Xt(a,b){this.Zt(a,b),b.te()}Zt(a,b){if("nullValue"in a)this.ee(b,5);else if("booleanValue"in a)this.ee(b,10),b.ne(a.booleanValue?1:0);else if("integerValue"in a)this.ee(b,15),b.ne(Y(a.integerValue));else if("doubleValue"in a){let c=Y(a.doubleValue);isNaN(c)?this.ee(b,13):(this.ee(b,15),ae(c)?b.ne(0):b.ne(c))}else if("timestampValue"in a){let d=a.timestampValue;this.ee(b,20),"string"==typeof d?b.se(d):(b.se(`${d.seconds||""}`),b.ne(d.nanos||0))}else if("stringValue"in a)this.ie(a.stringValue,b),this.re(b);else if("bytesValue"in a)this.ee(b,30),b.oe(Z(a.bytesValue)),this.re(b);else if("referenceValue"in a)this.ce(a.referenceValue,b);else if("geoPointValue"in a){let e=a.geoPointValue;this.ee(b,45),b.ne(e.latitude||0),b.ne(e.longitude||0)}else"mapValue"in a?aj(a,ah)?this.ee(b,Number.MAX_SAFE_INTEGER):(this.ue(a.mapValue,b),this.re(b)):"arrayValue"in a?(this.ae(a.arrayValue,b),this.re(b)):u()}ie(a,b){this.ee(b,25),this.he(a,b)}he(a,b){b.se(a)}ue(a,b){let c=a.fields||{};for(let d of(this.ee(b,55),Object.keys(c)))this.ie(d,b),this.Zt(c[d],b)}ae(a,b){let c=a.values||[];for(let d of(this.ee(b,50),c))this.Zt(d,b)}ce(a,b){this.ee(b,37),ag.fromName(a).path.forEach(a=>{this.ee(b,60),this.he(a,b)})}ee(a,b){a.ne(b)}re(a){a.ne(2)}}function du(a){if(0===a)return 8;let b=0;return a>>4==0&&(b+=4,a<<=4),a>>6==0&&(b+=2,a<<=2),a>>7==0&&(b+=1),b}function dv(a){let b=64-function(a){let b=0;for(let c=0;c<8;++c){let d=du(255&a[c]);if(b+=d,8!==d)break}return b}(a);return Math.ceil(b/8)}dt.le=new dt;class dw{constructor(){this.Se=new class{constructor(){this.buffer=new Uint8Array(1024),this.position=0}fe(a){let b=a[Symbol.iterator](),c=b.next();for(;!c.done;)this.de(c.value),c=b.next();this._e()}we(a){let b=a[Symbol.iterator](),c=b.next();for(;!c.done;)this.me(c.value),c=b.next();this.ge()}ye(a){for(let b of a){let c=b.charCodeAt(0);if(c<128)this.de(c);else if(c<2048)this.de(960|c>>>6),this.de(128|63&c);else if(b<"\ud800"||"\udbff"<b)this.de(480|c>>>12),this.de(128|63&c>>>6),this.de(128|63&c);else{let d=b.codePointAt(0);this.de(240|d>>>18),this.de(128|63&d>>>12),this.de(128|63&d>>>6),this.de(128|63&d)}}this._e()}pe(a){for(let b of a){let c=b.charCodeAt(0);if(c<128)this.me(c);else if(c<2048)this.me(960|c>>>6),this.me(128|63&c);else if(b<"\ud800"||"\udbff"<b)this.me(480|c>>>12),this.me(128|63&c>>>6),this.me(128|63&c);else{let d=b.codePointAt(0);this.me(240|d>>>18),this.me(128|63&d>>>12),this.me(128|63&d>>>6),this.me(128|63&d)}}this.ge()}Ie(a){let b=this.Ee(a),c=dv(b);this.Te(1+c),this.buffer[this.position++]=255&c;for(let d=b.length-c;d<b.length;++d)this.buffer[this.position++]=255&b[d]}Ae(a){let b=this.Ee(a),c=dv(b);this.Te(1+c),this.buffer[this.position++]=~(255&c);for(let d=b.length-c;d<b.length;++d)this.buffer[this.position++]=~(255&b[d])}Re(){this.Pe(255),this.Pe(255)}be(){this.ve(255),this.ve(255)}reset(){this.position=0}seed(a){this.Te(a.length),this.buffer.set(a,this.position),this.position+=a.length}Ve(){return this.buffer.slice(0,this.position)}Ee(a){let b=function(a){let b=new DataView(new ArrayBuffer(8));return b.setFloat64(0,a,!1),new Uint8Array(b.buffer)}(a),c=0!=(128&b[0]);b[0]^=c?255:128;for(let d=1;d<b.length;++d)b[d]^=c?255:0;return b}de(a){let b=255&a;0===b?(this.Pe(0),this.Pe(255)):255===b?(this.Pe(255),this.Pe(0)):this.Pe(b)}me(a){let b=255&a;0===b?(this.ve(0),this.ve(255)):255===b?(this.ve(255),this.ve(0)):this.ve(a)}_e(){this.Pe(0),this.Pe(1)}ge(){this.ve(0),this.ve(1)}Pe(a){this.Te(1),this.buffer[this.position++]=a}ve(a){this.Te(1),this.buffer[this.position++]=~a}Te(a){let b=a+this.position;if(b<=this.buffer.length)return;let c=2*this.buffer.length;c<b&&(c=b);let d=new Uint8Array(c);d.set(this.buffer),this.buffer=d}},this.De=new class{constructor(a){this.Se=a}oe(a){this.Se.fe(a)}se(a){this.Se.ye(a)}ne(a){this.Se.Ie(a)}te(){this.Se.Re()}}(this.Se),this.Ce=new class{constructor(a){this.Se=a}oe(a){this.Se.we(a)}se(a){this.Se.pe(a)}ne(a){this.Se.Ae(a)}te(){this.Se.be()}}(this.Se)}seed(a){this.Se.seed(a)}Ne(a){return 0===a?this.De:this.Ce}Ve(){return this.Se.Ve()}reset(){this.Se.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Represents an index entry saved by the SDK in persisted storage. */ class dx{constructor(a,b,c,d){this.indexId=a,this.documentKey=b,this.arrayValue=c,this.directionalValue=d}}function dy(a,b){let c=a.indexId-b.indexId;return 0!==c?c:0!==(c=ag.comparator(a.documentKey,b.documentKey))?c:0!==(c=dz(a.arrayValue,b.arrayValue))?c:dz(a.directionalValue,b.directionalValue)}function dz(a,b){for(let c=0;c<a.length&&c<b.length;++c){let d=a[c]-b[c];if(0!==d)return d}return a.length-b.length}class dA{constructor(){this.index={}}add(a){let b=a.lastSegment(),c=a.popLast(),d=this.index[b]||new bM(R.comparator),e=!d.has(c);return this.index[b]=d.add(c),e}has(a){let b=a.lastSegment(),c=a.popLast(),d=this.index[b];return d&&d.has(c)}getEntries(a){return(this.index[a]||new bM(R.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A persisted implementation of IndexManager.
 *
 * PORTING NOTE: Unlike iOS and Android, the Web SDK does not memoize index
 * data as it supports multi-tab access.
 */ class dB{constructor(a){this.user=a,this.ke=new dA,this.uid=a.uid||""}addToCollectionParentIndex(a,b){if(!this.ke.has(b)){let c=b.lastSegment(),d=b.popLast();a.addOnCommittedListener(()=>{this.ke.add(b)});let e={collectionId:c,parent:cu(d)};return dC(a).put(e)}return cX.resolve()}getCollectionParents(a,b){let c=[],d=IDBKeyRange.bound([b,""],[K(b),""],!1,!0);return dC(a).qt(d).next(a=>{for(let d of a){if(d.collectionId!==b)break;c.push(cx(d.parent))}return c})}addFieldIndex(a,b){var c;let d=dE(a),e=(c=b,new cO(c.indexId,c.collectionGroup,c.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])));return delete e.indexId,d.add(e).next()}deleteFieldIndex(a,b){let c=dE(a),d=dF(a),e=dD(a);return c.delete(b.indexId).next(()=>d.delete(IDBKeyRange.bound([b.indexId],[b.indexId+1],!1,!0))).next(()=>e.delete(IDBKeyRange.bound([b.indexId],[b.indexId+1],!1,!0)))}getDocumentsMatchingTarget(a,b,c){return cX.resolve(bT())}getFieldIndex(a,b){return cX.resolve(null)}Oe(a,b){var c;let d=new dw;for(let e of(c=a).fields.filter(a=>2!==a.kind)){let f=b.data.field(e.fieldPath);if(null==f)return null;let g=d.Ne(e.kind);dt.le.Xt(f,g)}return d.Ve()}Me(a){let b=new dw;return dt.le.Xt(a,b.Ne(0)),b.Ve()}getFieldIndexes(a,b){let c=dE(a),d=dF(a);return(b?c.qt(cO.collectionGroupIndex,IDBKeyRange.bound(b,b)):c.qt()).next(a=>{let b=[];return cX.forEach(a,a=>d.get([a.indexId,this.uid]).next(c=>{b.push(function(a,b){let c=b?new aA(b.sequenceNumber,new aB(dh(b.readTime),new ag(cx(b.documentKey)),b.largestBatchId)):aA.empty(),d=a.fields.map(([a,b])=>new az(T.fromServerFormat(a),b));return new ay(a.indexId,a.collectionGroup,d,c)}(a,c))})).next(()=>b)})}getNextCollectionGroupToUpdate(a){return this.getFieldIndexes(a).next(a=>0===a.length?null:(a.sort((a,b)=>a.indexState.sequenceNumber-b.indexState.sequenceNumber),a[0].collectionGroup))}updateCollectionGroup(a,b,c){let d=dE(a),e=dF(a);return this.$e(a).next(a=>d.qt(cO.collectionGroupIndex,IDBKeyRange.bound(b,b)).next(b=>cX.forEach(b,b=>{var d,f,g,h;return e.put((d=b.indexId,f=this.user,g=a,h=c,new cP(d,f.uid||"",g,dg(h.readTime),cu(h.documentKey.path),h.largestBatchId)))})))}updateIndexEntries(a,b){let c=new Map;return cX.forEach(b,(b,d)=>{let e=c.get(b.collectionGroup);return(e?cX.resolve(e):this.getFieldIndexes(a,b.collectionGroup)).next(e=>(c.set(b.collectionGroup,e),cX.forEach(e,c=>this.Fe(a,b,c).next(b=>{let e=this.Be(d,c);return b.isEqual(e)?cX.resolve():this.Le(a,d,b,e)}))))})}Ue(a,b,c){return dD(a).put(new cQ(c.indexId,this.uid,c.arrayValue,c.directionalValue,cu(b.key.path)))}qe(a,b,c){return dD(a).delete([c.indexId,this.uid,c.arrayValue,c.directionalValue,cu(b.key.path)])}Fe(a,b,c){let d=dD(a),e=new bM(dy);return d.Qt({index:cQ.documentKeyIndex,range:IDBKeyRange.only([c.indexId,this.uid,cu(b.path)])},(a,d)=>{e=e.add(new dx(c.indexId,b,d.arrayValue,d.directionalValue))}).next(()=>e)}Be(a,b){var c;let d=new bM(dy),e=this.Oe(b,a);if(null==e)return d;let f=(c=b).fields.find(a=>2===a.kind);if(null!=f){let g=a.data.field(f.fieldPath);if(aq(g))for(let h of g.arrayValue.values||[])d=d.add(new dx(b.indexId,a.key,this.Me(h),e))}else d=d.add(new dx(b.indexId,a.key,new Uint8Array,e));return d}Le(a,b,c,d){q("IndexedDbIndexManager","Updating index entries for document '%s'",b.key);let e=[];return function(a,b,c,d,e){let f=a.getIterator(),g=b.getIterator(),h=bO(f),i=bO(g);for(;h||i;){let j=!1,k=!1;if(h&&i){let l=c(h,i);l<0?k=!0:l>0&&(j=!0)}else null!=h?k=!0:j=!0;j?(d(i),i=bO(g)):k?(e(h),h=bO(f)):(h=bO(f),i=bO(g))}}(c,d,dy,c=>{e.push(this.Ue(a,b,c))},c=>{e.push(this.qe(a,b,c))}),cX.waitFor(e)}$e(a){let b=1;return dF(a).Qt({index:cP.sequenceNumberIndex,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(a,c,d)=>{d.done(),b=c.sequenceNumber+1}).next(()=>b)}}function dC(a){return c6(a,cK.store)}function dD(a){return c6(a,cQ.store)}function dE(a){return c6(a,cO.store)}function dF(a){return c6(a,cP.store)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let dG={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class dH{constructor(a,b,c){this.cacheSizeCollectionThreshold=a,this.percentileToCollect=b,this.maximumSequenceNumbersToCollect=c}static withCacheSize(a){return new dH(a,dH.DEFAULT_COLLECTION_PERCENTILE,dH.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Delete a mutation batch and the associated document mutations.
 * @returns A PersistencePromise of the document mutations that were removed.
 */ function dI(a,b,c){let d=a.store(cB.store),e=a.store(cC.store),f=[],g=IDBKeyRange.only(c.batchId),h=0,i=d.Qt({range:g},(a,b,c)=>(h++,c.delete()));f.push(i.next(()=>{var a;(a=1===h)||u()}));let j=[];for(let k of c.mutations){let l=cC.key(b,k.key.path,c.batchId);f.push(e.delete(l)),j.push(k.key)}return cX.waitFor(f).next(()=>j)}function dJ(a){if(!a)return 0;let b;if(a.document)b=a.document;else if(a.unknownDocument)b=a.unknownDocument;else{if(!a.noDocument)throw u();b=a.noDocument}return JSON.stringify(b).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** A mutation queue for a specific user, backed by IndexedDB. */ dH.DEFAULT_COLLECTION_PERCENTILE=10,dH.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dH.DEFAULT=new dH(41943040,dH.DEFAULT_COLLECTION_PERCENTILE,dH.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dH.DISABLED=new dH(-1,0,0);class dK{constructor(a,b,c,d){this.userId=a,this.O=b,this.indexManager=c,this.referenceDelegate=d,this.Ke={}}static Jt(a,b,c,d){var e;(e=""!==a.uid)||u();let f=a.isAuthenticated()?a.uid:"";return new dK(f,b,c,d)}checkEmpty(a){let b=!0,c=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return dM(a).Qt({index:cB.userMutationsIndex,range:c},(a,c,d)=>{b=!1,d.done()}).next(()=>b)}addMutationBatch(a,b,c,d){let e=dN(a),f=dM(a);return f.add({}).next(g=>{var h;(h="number"==typeof g)||u();let i=new c7(g,b,c,d),j=function(a,b,c){let d=c.baseMutations.map(b=>ci(a.Ht,b)),e=c.mutations.map(b=>ci(a.Ht,b));return new cB(b,c.batchId,c.localWriteTime.toMillis(),d,e)}(this.O,this.userId,i),k=[],l=new bM((a,b)=>I(a.canonicalString(),b.canonicalString()));for(let m of d){let n=cC.key(this.userId,m.key.path,g);l=l.add(m.key.path.popLast()),k.push(f.put(j)),k.push(e.put(n,cC.PLACEHOLDER))}return l.forEach(b=>{k.push(this.indexManager.addToCollectionParentIndex(a,b))}),a.addOnCommittedListener(()=>{this.Ke[g]=i.keys()}),cX.waitFor(k).next(()=>i)})}lookupMutationBatch(a,b){return dM(a).get(b).next(a=>{var b;return a?(a.userId===this.userId||u(),di(this.O,a)):null})}Ge(a,b){return this.Ke[b]?cX.resolve(this.Ke[b]):this.lookupMutationBatch(a,b).next(a=>{if(a){let c=a.keys();return this.Ke[b]=c,c}return null})}getNextMutationBatchAfterBatchId(a,b){let c=b+1,d=IDBKeyRange.lowerBound([this.userId,c]),e=null;return dM(a).Qt({index:cB.userMutationsIndex,range:d},(a,b,d)=>{var f;b.userId===this.userId&&(b.batchId>=c||u(),e=di(this.O,b)),d.done()}).next(()=>e)}getHighestUnacknowledgedBatchId(a){let b=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),c=-1;return dM(a).Qt({index:cB.userMutationsIndex,range:b,reverse:!0},(a,b,d)=>{c=b.batchId,d.done()}).next(()=>c)}getAllMutationBatches(a){let b=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return dM(a).qt(cB.userMutationsIndex,b).next(a=>a.map(a=>di(this.O,a)))}getAllMutationBatchesAffectingDocumentKey(a,b){let c=cC.prefixForPath(this.userId,b.path),d=IDBKeyRange.lowerBound(c),e=[];return dN(a).Qt({range:d},(c,d,f)=>{let[g,h,i]=c,j=cx(h);if(g===this.userId&&b.path.isEqual(j))return dM(a).get(i).next(a=>{var b;if(!a)throw u();a.userId===this.userId||u(),e.push(di(this.O,a))});f.done()}).next(()=>e)}getAllMutationBatchesAffectingDocumentKeys(a,b){let c=new bM(I),d=[];return b.forEach(b=>{let e=cC.prefixForPath(this.userId,b.path),f=IDBKeyRange.lowerBound(e),g=dN(a).Qt({range:f},(a,d,e)=>{let[f,g,h]=a,i=cx(g);f===this.userId&&b.path.isEqual(i)?c=c.add(h):e.done()});d.push(g)}),cX.waitFor(d).next(()=>this.je(a,c))}getAllMutationBatchesAffectingQuery(a,b){let c=b.path,d=c.length+1,e=cC.prefixForPath(this.userId,c),f=IDBKeyRange.lowerBound(e),g=new bM(I);return dN(a).Qt({range:f},(a,b,e)=>{let[f,h,i]=a,j=cx(h);f===this.userId&&c.isPrefixOf(j)?j.length===d&&(g=g.add(i)):e.done()}).next(()=>this.je(a,g))}je(a,b){let c=[],d=[];return b.forEach(b=>{d.push(dM(a).get(b).next(a=>{var b;if(null===a)throw u();a.userId===this.userId||u(),c.push(di(this.O,a))}))}),cX.waitFor(d).next(()=>c)}removeMutationBatch(a,b){return dI(a.zt,this.userId,b).next(c=>(a.addOnCommittedListener(()=>{this.Qe(b.batchId)}),cX.forEach(c,b=>this.referenceDelegate.markPotentiallyOrphaned(a,b))))}Qe(a){delete this.Ke[a]}performConsistencyCheck(a){return this.checkEmpty(a).next(b=>{if(!b)return cX.resolve();let c=IDBKeyRange.lowerBound(cC.prefixForUser(this.userId)),d=[];return dN(a).Qt({range:c},(a,b,c)=>{if(a[0]===this.userId){let e=cx(a[1]);d.push(e)}else c.done()}).next(()=>{var a;(a=0===d.length)||u()})})}containsKey(a,b){return dL(a,this.userId,b)}We(a){return dO(a).get(this.userId).next(a=>a||new cA(this.userId,-1,""))}}function dL(a,b,c){let d=cC.prefixForPath(b,c.path),e=d[1],f=IDBKeyRange.lowerBound(d),g=!1;return dN(a).Qt({range:f,jt:!0},(a,c,d)=>{let[f,h,i]=a;f===b&&h===e&&(g=!0),d.done()}).next(()=>g)}function dM(a){return c6(a,cB.store)}function dN(a){return c6(a,cC.store)}function dO(a){return c6(a,cA.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Offset to ensure non-overlapping target ids. */ /**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */ class dP{constructor(a){this.ze=a}next(){return this.ze+=2,this.ze}static He(){return new dP(0)}static Je(){return new dP(-1)}}function dQ(a){return c6(a,cH.store)}function dR(a){return c6(a,cJ.store)}function dS(a){return c6(a,cI.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err - An error returned by a LocalStore operation.
 * @returns A Promise that resolves after we recovered, or the original error.
 */ async function dT(a){if(a.code!==v.FAILED_PRECONDITION||a.message!==cV)throw a;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function dU([a,b],[c,d]){let e=I(a,c);return 0===e?I(b,d):e}class dV{constructor(a){this.en=a,this.buffer=new bM(dU),this.nn=0}sn(){return++this.nn}rn(a){let b=[a,this.sn()];if(this.buffer.size<this.en)this.buffer=this.buffer.add(b);else{let c=this.buffer.last();0>dU(b,c)&&(this.buffer=this.buffer.delete(c).add(b))}}get maxValue(){return this.buffer.last()[0]}}class dW{constructor(a,b){this.garbageCollector=a,this.asyncQueue=b,this.on=!1,this.cn=null}start(a){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.un(a)}stop(){this.cn&&(this.cn.cancel(),this.cn=null)}get started(){return null!==this.cn}un(a){let b=this.on?3e5:6e4;q("LruGarbageCollector",`Garbage collection scheduled in ${b}ms`),this.cn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",b,async()=>{this.cn=null,this.on=!0;try{await a.collectGarbage(this.garbageCollector)}catch(b){c0(b)?q("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",b):await dT(b)}await this.un(a)})}}function dX(a,b){var c,d;return dS(a).put((c=b,d=a.currentSequenceNumber,new cI(0,cu(c.path),d)))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A map implementation that uses objects as keys. Objects must have an
 * associated equals function and must be immutable. Entries in the map are
 * stored together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */ class dY{constructor(a,b){this.mapKeyFn=a,this.equalsFn=b,this.inner={}}get(a){let b=this.mapKeyFn(a),c=this.inner[b];if(void 0!==c){for(let[d,e]of c)if(this.equalsFn(d,a))return e}}has(a){return void 0!==this.get(a)}set(a,b){let c=this.mapKeyFn(a),d=this.inner[c];if(void 0!==d){for(let e=0;e<d.length;e++)if(this.equalsFn(d[e][0],a))return void(d[e]=[a,b]);d.push([a,b])}else this.inner[c]=[[a,b]]}delete(a){let b=this.mapKeyFn(a),c=this.inner[b];if(void 0===c)return!1;for(let d=0;d<c.length;d++)if(this.equalsFn(c[d][0],a))return 1===c.length?delete this.inner[b]:c.splice(d,1),!0;return!1}forEach(a){O(this.inner,(b,c)=>{for(let[d,e]of c)a(d,e)})}isEmpty(){return P(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An in-memory buffer of entries to be written to a RemoteDocumentCache.
 * It can be used to batch up a set of changes to be written to the cache, but
 * additionally supports reading entries back with the `getEntry()` method,
 * falling back to the underlying RemoteDocumentCache if no entry is
 * buffered.
 *
 * Entries added to the cache *must* be read first. This is to facilitate
 * calculating the size delta of the pending changes.
 *
 * PORTING NOTE: This class was implemented then removed from other platforms.
 * If byte-counting ends up being needed on the other platforms, consider
 * porting this class as part of that implementation work.
 */ class dZ{constructor(){this.changes=new dY(a=>a.toString(),(a,b)=>a.isEqual(b)),this.changesApplied=!1}addEntry(a){this.assertNotApplied(),this.changes.set(a.key,a)}removeEntry(a,b){this.assertNotApplied(),this.changes.set(a,ax.newInvalidDocument(a).setReadTime(b))}getEntry(a,b){this.assertNotApplied();let c=this.changes.get(b);return void 0!==c?cX.resolve(c):this.getFromCache(a,b)}getEntries(a,b){return this.getAllFromCache(a,b)}apply(a){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(a)}assertNotApplied(){}}class d$ extends null{constructor(a,b){super(),this.Tn=a,this.trackRemovals=b,this.An=new dY(a=>a.toString(),(a,b)=>a.isEqual(b))}applyChanges(a){let b=[],c=0,d=new bM((a,b)=>I(a.canonicalString(),b.canonicalString()));return this.changes.forEach((e,f)=>{let g=this.An.get(e);if(f.isValidDocument()){let h=dd(this.Tn.O,f);d=d.add(e.path.popLast());let i=dJ(h);c+=i-g,b.push(this.Tn.addEntry(a,e,h))}else if(c-=g,this.trackRemovals){let j=dd(this.Tn.O,f.convertToNoDocument(M.min()));b.push(this.Tn.addEntry(a,e,j))}else b.push(this.Tn.removeEntry(a,e))}),d.forEach(c=>{b.push(this.Tn.indexManager.addToCollectionParentIndex(a,c))}),b.push(this.Tn.updateMetadata(a,c)),cX.waitFor(b)}getFromCache(a,b){return this.Tn.yn(a,b).next(a=>(this.An.set(b,a.size),a.document))}getAllFromCache(a,b){return this.Tn.In(a,b).next(({documents:a,En:b})=>(b.forEach((a,b)=>{this.An.set(a,b)}),a))}}function d_(a){return c6(a,cG.store)}function d0(a){return c6(a,cF.store)}function d1(a){return a.path.toArray()}function d2(a){a.createObjectStore(cI.store,{keyPath:cI.keyPath}).createIndex(cI.documentTargetsIndex,cI.documentTargetsKeyPath,{unique:!0}),a.createObjectStore(cH.store,{keyPath:cH.keyPath}).createIndex(cH.queryTargetsIndexName,cH.queryTargetsKeyPath,{unique:!0}),a.createObjectStore(cJ.store)}let d3="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class d4{constructor(a,b,c,d,e,f,g,h,i,j,k=12){var l;if(this.allowTabSynchronization=a,this.persistenceKey=b,this.clientId=c,this.Sn=e,this.window=f,this.document=g,this.Dn=i,this.Cn=j,this.schemaVersion=k,this.Nn=null,this.xn=!1,this.isPrimary=!1,this.networkEnabled=!0,this.kn=null,this.inForeground=!1,this.On=null,this.Mn=null,this.$n=Number.NEGATIVE_INFINITY,this.Fn=a=>Promise.resolve(),!d4.Vt())throw new w(v.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Provides LRU functionality for IndexedDB persistence. */ class{constructor(a,b){var c,d;this.db=a,this.garbageCollector=(c=this,d=b,new class a{constructor(a,b){this.an=a,this.params=b}calculateTargetCount(a,b){return this.an.hn(a).next(a=>Math.floor(b/100*a))}nthSequenceNumber(a,b){if(0===b)return cX.resolve(F.A);let c=new dV(b);return this.an.forEachTarget(a,a=>c.rn(a.sequenceNumber)).next(()=>this.an.ln(a,a=>c.rn(a))).next(()=>c.maxValue)}removeTargets(a,b,c){return this.an.removeTargets(a,b,c)}removeOrphanedDocuments(a,b){return this.an.removeOrphanedDocuments(a,b)}collect(a,b){return -1===this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector","Garbage collection skipped; disabled"),cX.resolve(dG)):this.getCacheSize(a).next(c=>c<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${c} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),dG):this.fn(a,b))}getCacheSize(a){return this.an.getCacheSize(a)}fn(a,b){let c,d,e,f,g,h,i,j=Date.now();return this.calculateTargetCount(a,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),d=this.params.maximumSequenceNumbersToCollect):d=b,f=Date.now(),this.nthSequenceNumber(a,d))).next(d=>(c=d,g=Date.now(),this.removeTargets(a,c,b))).next(b=>(e=b,h=Date.now(),this.removeOrphanedDocuments(a,c))).next(a=>(i=Date.now(),p()<=LogLevel.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-j}ms
	Determined least recently used ${d} in `+(g-f)+"ms\n"+`	Removed ${e} targets in `+(h-g)+"ms\n"+`	Removed ${a} documents in `+(i-h)+"ms\n"+`Total Duration: ${i-j}ms`),cX.resolve({didRun:!0,sequenceNumbersCollected:d,targetsRemoved:e,documentsRemoved:a})))}}(c,d))}hn(a){let b=this.dn(a);return this.db.getTargetCache().getTargetCount(a).next(a=>b.next(b=>a+b))}dn(a){let b=0;return this.ln(a,a=>{b++}).next(()=>b)}forEachTarget(a,b){return this.db.getTargetCache().forEachTarget(a,b)}ln(a,b){return this._n(a,(a,c)=>b(c))}addReference(a,b,c){return dX(a,c)}removeReference(a,b,c){return dX(a,c)}removeTargets(a,b,c){return this.db.getTargetCache().removeTargets(a,b,c)}markPotentiallyOrphaned(a,b){return dX(a,b)}wn(a,b){var c,d;let e;return c=a,d=b,e=!1,dO(c).Wt(a=>dL(c,a,d).next(a=>(a&&(e=!0),cX.resolve(!a)))).next(()=>e)}removeOrphanedDocuments(a,b){let c=this.db.getRemoteDocumentCache().newChangeBuffer(),d=[],e=0;return this._n(a,(f,g)=>{if(g<=b){let h=this.wn(a,f).next(b=>{if(!b)return e++,c.getEntry(a,f).next(()=>(c.removeEntry(f,M.min()),dS(a).delete([0,cu(f.path)])))});d.push(h)}}).next(()=>cX.waitFor(d)).next(()=>c.apply(a)).next(()=>e)}removeTarget(a,b){let c=b.withSequenceNumber(a.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(a,c)}updateLimboDocument(a,b){return dX(a,b)}_n(a,b){let c=dS(a),d,e=F.A;return c.Qt({index:cI.documentTargetsIndex},([a,c],{path:f,sequenceNumber:g})=>{0===a?(e!==F.A&&b(new ag(cx(d)),e),e=g,d=f):e=F.A}).next(()=>{e!==F.A&&b(new ag(cx(d)),e)})}getCacheSize(a){return this.db.getRemoteDocumentCache().getSize(a)}}(this,d),this.Bn=b+"main",this.O=new db(h),this.Ln=new cZ(this.Bn,this.schemaVersion,new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Performs database creation and schema upgrades. */ class{constructor(a){this.O=a}kt(a,b,c,d){var e,f;let g=new cY("createOrUpgrade",b);c<1&&d>=1&&(function(a){a.createObjectStore(cz.store)}(a),(e=a).createObjectStore(cA.store,{keyPath:cA.keyPath}),e.createObjectStore(cB.store,{keyPath:cB.keyPath,autoIncrement:!0}).createIndex(cB.userMutationsIndex,cB.userMutationsKeyPath,{unique:!0}),e.createObjectStore(cC.store),d2(a),function(a){a.createObjectStore(cF.store)}(a));let h=cX.resolve();return c<3&&d>=3&&(0!==c&&((f=a).deleteObjectStore(cI.store),f.deleteObjectStore(cH.store),f.deleteObjectStore(cJ.store),d2(a)),h=h.next(()=>(function(a){let b=a.store(cJ.store),c=new cJ(0,0,M.min().toTimestamp(),0);return b.put(cJ.key,c)})(g))),c<4&&d>=4&&(0!==c&&(h=h.next(()=>{var b,c;return b=a,(c=g).store(cB.store).qt().next(a=>{b.deleteObjectStore(cB.store),b.createObjectStore(cB.store,{keyPath:cB.keyPath,autoIncrement:!0}).createIndex(cB.userMutationsIndex,cB.userMutationsKeyPath,{unique:!0});let d=c.store(cB.store),e=a.map(a=>d.put(a));return cX.waitFor(e)})})),h=h.next(()=>{!function(a){a.createObjectStore(cL.store,{keyPath:cL.keyPath})}(a)})),c<5&&d>=5&&(h=h.next(()=>this.Rn(g))),c<6&&d>=6&&(h=h.next(()=>((function(a){a.createObjectStore(cG.store)})(a),this.Pn(g)))),c<7&&d>=7&&(h=h.next(()=>this.bn(g))),c<8&&d>=8&&(h=h.next(()=>this.vn(a,g))),c<9&&d>=9&&(h=h.next(()=>{var c;(c=a).objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges"),function(a){let b=a.objectStore(cF.store);b.createIndex(cF.readTimeIndex,cF.readTimeIndexPath,{unique:!1}),b.createIndex(cF.collectionReadTimeIndex,cF.collectionReadTimeIndexPath,{unique:!1})}(b)})),c<10&&d>=10&&(h=h.next(()=>this.Vn(g))),c<11&&d>=11&&(h=h.next(()=>{(function(a){a.createObjectStore(cM.store,{keyPath:cM.keyPath})})(a),function(a){a.createObjectStore(cN.store,{keyPath:cN.keyPath})}(a)})),c<12&&d>=12&&(h=h.next(()=>{!function(a){let b=a.createObjectStore(cR.store,{keyPath:cR.keyPath});b.createIndex(cR.collectionPathOverlayIndex,cR.collectionPathOverlayIndexPath,{unique:!1}),b.createIndex(cR.collectionGroupOverlayIndex,cR.collectionGroupOverlayIndexPath,{unique:!1})}(a)})),c<13&&d>=13&&(h=h.next(()=>{var b;(b=a).createObjectStore(cO.store,{keyPath:cO.keyPath,autoIncrement:!0}).createIndex(cO.collectionGroupIndex,cO.collectionGroupIndexPath,{unique:!1}),b.createObjectStore(cP.store,{keyPath:cP.keyPath}).createIndex(cP.sequenceNumberIndex,cP.sequenceNumberIndexPath,{unique:!1}),b.createObjectStore(cQ.store,{keyPath:cQ.keyPath}).createIndex(cQ.documentKeyIndex,cQ.documentKeyIndexPath,{unique:!1})})),h}Pn(a){let b=0;return a.store(cF.store).Qt((a,c)=>{b+=dJ(c)}).next(()=>{let c=new cG(b);return a.store(cG.store).put(cG.key,c)})}Rn(a){let b=a.store(cA.store),c=a.store(cB.store);return b.qt().next(b=>cX.forEach(b,b=>{let d=IDBKeyRange.bound([b.userId,-1],[b.userId,b.lastAcknowledgedBatchId]);return c.qt(cB.userMutationsIndex,d).next(c=>cX.forEach(c,c=>{var d;(d=c.userId===b.userId)||u();let e=di(this.O,c);return dI(a,b.userId,e).next(()=>{})}))}))}bn(a){let b=a.store(cI.store),c=a.store(cF.store);return a.store(cJ.store).get(cJ.key).next(a=>{let d=[];return c.Qt((c,e)=>{var f;let g=new R(c),h=[0,cu(f=g)];d.push(b.get(h).next(c=>{var d;return c?cX.resolve():(d=g,b.put(new cI(0,cu(d),a.highestListenSequenceNumber)))}))}).next(()=>cX.waitFor(d))})}vn(a,b){a.createObjectStore(cK.store,{keyPath:cK.keyPath});let c=b.store(cK.store),d=new dA,e=a=>{if(d.add(a)){let b=a.lastSegment(),e=a.popLast();return c.put({collectionId:b,parent:cu(e)})}};return b.store(cF.store).Qt({jt:!0},(a,b)=>{let c=new R(a);return e(c.popLast())}).next(()=>b.store(cC.store).Qt({jt:!0},([a,b,c],d)=>{let f=cx(b);return e(f.popLast())}))}Vn(a){let b=a.store(cH.store);return b.Qt((a,c)=>{let d=dj(c),e=dk(this.O,d);return b.put(e)})}}(this.O)),this.Un=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a,b){this.referenceDelegate=a,this.O=b}allocateTargetId(a){return this.Ye(a).next(b=>{let c=new dP(b.highestTargetId);return b.highestTargetId=c.next(),this.Xe(a,b).next(()=>b.highestTargetId)})}getLastRemoteSnapshotVersion(a){return this.Ye(a).next(a=>M.fromTimestamp(new L(a.lastRemoteSnapshotVersion.seconds,a.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(a){return this.Ye(a).next(a=>a.highestListenSequenceNumber)}setTargetsMetadata(a,b,c){return this.Ye(a).next(d=>(d.highestListenSequenceNumber=b,c&&(d.lastRemoteSnapshotVersion=c.toTimestamp()),b>d.highestListenSequenceNumber&&(d.highestListenSequenceNumber=b),this.Xe(a,d)))}addTargetData(a,b){return this.Ze(a,b).next(()=>this.Ye(a).next(c=>(c.targetCount+=1,this.tn(b,c),this.Xe(a,c))))}updateTargetData(a,b){return this.Ze(a,b)}removeTargetData(a,b){return this.removeMatchingKeysForTargetId(a,b.targetId).next(()=>dQ(a).delete(b.targetId)).next(()=>this.Ye(a)).next(b=>{var c;return b.targetCount>0||u(),b.targetCount-=1,this.Xe(a,b)})}removeTargets(a,b,c){let d=0,e=[];return dQ(a).Qt((f,g)=>{let h=dj(g);h.sequenceNumber<=b&&null===c.get(h.targetId)&&(d++,e.push(this.removeTargetData(a,h)))}).next(()=>cX.waitFor(e)).next(()=>d)}forEachTarget(a,b){return dQ(a).Qt((a,c)=>{let d=dj(c);b(d)})}Ye(a){return dR(a).get(cJ.key).next(a=>{var b;return null!==a||u(),a})}Xe(a,b){return dR(a).put(cJ.key,b)}Ze(a,b){return dQ(a).put(dk(this.O,b))}tn(a,b){let c=!1;return a.targetId>b.highestTargetId&&(b.highestTargetId=a.targetId,c=!0),a.sequenceNumber>b.highestListenSequenceNumber&&(b.highestListenSequenceNumber=a.sequenceNumber,c=!0),c}getTargetCount(a){return this.Ye(a).next(a=>a.targetCount)}getTargetData(a,b){let c=aE(b),d=IDBKeyRange.bound([c,Number.NEGATIVE_INFINITY],[c,Number.POSITIVE_INFINITY]),e=null;return dQ(a).Qt({range:d,index:cH.queryTargetsIndexName},(a,c,d)=>{let f=dj(c);aF(b,f.target)&&(e=f,d.done())}).next(()=>e)}addMatchingKeys(a,b,c){let d=[],e=dS(a);return b.forEach(b=>{let f=cu(b.path);d.push(e.put(new cI(c,f))),d.push(this.referenceDelegate.addReference(a,c,b))}),cX.waitFor(d)}removeMatchingKeys(a,b,c){let d=dS(a);return cX.forEach(b,b=>{let e=cu(b.path);return cX.waitFor([d.delete([c,e]),this.referenceDelegate.removeReference(a,c,b)])})}removeMatchingKeysForTargetId(a,b){let c=dS(a),d=IDBKeyRange.bound([b],[b+1],!1,!0);return c.delete(d)}getMatchingKeysForTargetId(a,b){let c=IDBKeyRange.bound([b],[b+1],!1,!0),d=dS(a),e=bT();return d.Qt({range:c,jt:!0},(a,b,c)=>{let d=cx(a[1]),f=new ag(d);e=e.add(f)}).next(()=>e)}containsKey(a,b){let c=cu(b.path),d=IDBKeyRange.bound([c],[K(c)],!1,!0),e=0;return dS(a).Qt({index:cI.documentTargetsIndex,jt:!0,range:d},([a,b],c,d)=>{0!==a&&(e++,d.done())}).next(()=>e>0)}Tt(a,b){return dQ(a).get(b).next(a=>a?dj(a):null)}}(this.referenceDelegate,this.O),this.qn=(l=this.O,new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newIndexedDbRemoteDocumentCache()`.
 */ class a{constructor(a){this.O=a}setIndexManager(a){this.indexManager=a}addEntry(a,b,c){return d0(a).put(d1(b),c)}removeEntry(a,b){let c=d0(a),d=d1(b);return c.delete(d)}updateMetadata(a,b){return this.getMetadata(a).next(c=>(c.byteSize+=b,this.mn(a,c)))}getEntry(a,b){return d0(a).get(d1(b)).next(a=>this.gn(b,a))}yn(a,b){return d0(a).get(d1(b)).next(a=>({document:this.gn(b,a),size:dJ(a)}))}getEntries(a,b){let c=bP;return this.pn(a,b,(a,b)=>{let d=this.gn(a,b);c=c.insert(a,d)}).next(()=>c)}In(a,b){let c=bP,d=new bJ(ag.comparator);return this.pn(a,b,(a,b)=>{let e=this.gn(a,b);c=c.insert(a,e),d=d.insert(a,dJ(b))}).next(()=>({documents:c,En:d}))}pn(a,b,c){if(b.isEmpty())return cX.resolve();let d=IDBKeyRange.bound(b.first().path.toArray(),b.last().path.toArray()),e=b.getIterator(),f=e.getNext();return d0(a).Qt({range:d},(a,b,d)=>{let g=ag.fromSegments(a);for(;f&&0>ag.comparator(f,g);)c(f,null),f=e.getNext();f&&f.isEqual(g)&&(c(f,b),f=e.hasNext()?e.getNext():null),f?d.Ut(f.path.toArray()):d.done()}).next(()=>{for(;f;)c(f,null),f=e.hasNext()?e.getNext():null})}getAll(a,b,c){let d=bP,e=b.length+1,f={};if(c.isEqual(M.min())){let g=b.toArray();f.range=IDBKeyRange.lowerBound(g)}else{let h=b.toArray(),i=de(c);f.range=IDBKeyRange.lowerBound([h,i],!0),f.index=cF.collectionReadTimeIndex}return d0(a).Qt(f,(a,c,f)=>{if(a.length!==e)return;let g=this.gn(ag.fromSegments(a),c);b.isPrefixOf(g.key.path)?d=d.insert(g.key,g):f.done()}).next(()=>d)}newChangeBuffer(a){return new d$(this,!!a&&a.trackRemovals)}getSize(a){return this.getMetadata(a).next(a=>a.byteSize)}getMetadata(a){return d_(a).get(cG.key).next(a=>{var b;return!a&&u(),a})}mn(a,b){return d_(a).put(cG.key,b)}gn(a,b){if(b){let c=dc(this.O,b);if(!(c.isNoDocument()&&c.version.isEqual(M.min())))return c}return ax.newInvalidDocument(a)}}(l)),this.Kn=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{getBundleMetadata(a,b){return dp(a).get(b).next(a=>{var b;if(a)return{id:(b=a).bundleId,createTime:dh(b.createTime),version:b.version}})}saveBundleMetadata(a,b){var c;return dp(a).put({bundleId:(c=b).id,createTime:dg(b7(c.createTime)),version:c.version})}getNamedQuery(a,b){return dq(a).get(b).next(a=>{var b;if(a)return{name:(b=a).name,query:dl(b.bundledQuery),readTime:dh(b.readTime)}})}saveNamedQuery(a,b){var c;return dq(a).put({name:(c=b).name,readTime:dg(b7(c.readTime)),bundledQuery:c.bundledQuery})}},this.window&&this.window.localStorage?this.Gn=this.window.localStorage:(this.Gn=null,!1===j&&r("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.jn().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new w(v.FAILED_PRECONDITION,d3);return this.Qn(),this.Wn(),this.zn(),this.runTransaction("getHighestListenSequenceNumber","readonly",a=>this.Un.getHighestSequenceNumber(a))}).then(a=>{this.Nn=new F(a,this.Dn)}).then(()=>{this.xn=!0}).catch(a=>(this.Ln&&this.Ln.close(),Promise.reject(a)))}Hn(a){return this.Fn=async b=>{if(this.started)return a(b)},a(this.isPrimary)}setDatabaseDeletedListener(a){this.Ln.Mt(async b=>{null===b.newVersion&&await a()})}setNetworkEnabled(a){this.networkEnabled!==a&&(this.networkEnabled=a,this.Sn.enqueueAndForget(async()=>{this.started&&await this.jn()}))}jn(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",a=>d6(a).put(new cL(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.Jn(a).next(a=>{a||(this.isPrimary=!1,this.Sn.enqueueRetryable(()=>this.Fn(!1)))})}).next(()=>this.Yn(a)).next(b=>this.isPrimary&&!b?this.Xn(a).next(()=>!1):!!b&&this.Zn(a).next(()=>!0))).catch(a=>{if(c0(a))return q("IndexedDbPersistence","Failed to extend owner lease: ",a),this.isPrimary;if(!this.allowTabSynchronization)throw a;return q("IndexedDbPersistence","Releasing owner lease after error during lease refresh",a),!1}).then(a=>{this.isPrimary!==a&&this.Sn.enqueueRetryable(()=>this.Fn(a)),this.isPrimary=a})}Jn(a){return d5(a).get(cz.key).next(a=>cX.resolve(this.ts(a)))}es(a){return d6(a).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.ss(this.$n,18e5)){this.$n=Date.now();let a=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",a=>{let b=c6(a,cL.store);return b.qt().next(a=>{let c=this.rs(a,18e5),d=a.filter(a=>-1===c.indexOf(a));return cX.forEach(d,a=>b.delete(a.clientId)).next(()=>d)})}).catch(()=>[]);if(this.Gn)for(let b of a)this.Gn.removeItem(this.os(b.clientId))}}zn(){this.Mn=this.Sn.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.jn().then(()=>this.ns()).then(()=>this.zn()))}ts(a){return!!a&&a.ownerId===this.clientId}Yn(a){return this.Cn?cX.resolve(!0):d5(a).get(cz.key).next(b=>{if(null!==b&&this.ss(b.leaseTimestampMs,5e3)&&!this.cs(b.ownerId)){if(this.ts(b)&&this.networkEnabled)return!0;if(!this.ts(b)){if(!b.allowTabSynchronization)throw new w(v.FAILED_PRECONDITION,d3);return!1}}return!(!this.networkEnabled||!this.inForeground)||d6(a).qt().next(a=>void 0===this.rs(a,5e3).find(a=>{if(this.clientId!==a.clientId){let b=!this.networkEnabled&&a.networkEnabled,c=!this.inForeground&&a.inForeground,d=this.networkEnabled===a.networkEnabled;if(b||c&&d)return!0}return!1}))}).next(a=>(this.isPrimary!==a&&q("IndexedDbPersistence",`Client ${a?"is":"is not"} eligible for a primary lease.`),a))}async shutdown(){this.xn=!1,this.us(),this.Mn&&(this.Mn.cancel(),this.Mn=null),this.hs(),this.ls(),await this.Ln.runTransaction("shutdown","readwrite",[cz.store,cL.store],a=>{let b=new c5(a,F.A);return this.Xn(b).next(()=>this.es(b))}),this.Ln.close(),this.fs()}rs(a,b){return a.filter(a=>this.ss(a.updateTimeMs,b)&&!this.cs(a.clientId))}ds(){return this.runTransaction("getActiveClients","readonly",a=>d6(a).qt().next(a=>this.rs(a,18e5).map(a=>a.clientId)))}get started(){return this.xn}getMutationQueue(a,b){return dK.Jt(a,this.O,b,this.referenceDelegate)}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getIndexManager(a){return new dB(a)}getDocumentOverlayCache(a){return dr.Jt(this.O,a)}getBundleCache(){return this.Kn}runTransaction(a,b,c){var d;q("IndexedDbPersistence","Starting transaction:",a);let e=13===(d=this.schemaVersion)?cU:12===d?cT:11===d?cS:void u(),f;return this.Ln.runTransaction(a,"readonly"===b?"readonly":"readwrite",e,d=>(f=new c5(d,this.Nn?this.Nn.next():F.A),"readwrite-primary"===b?this.Jn(f).next(a=>!!a||this.Yn(f)).next(b=>{if(!b)throw r(`Failed to obtain primary lease for action '${a}'.`),this.isPrimary=!1,this.Sn.enqueueRetryable(()=>this.Fn(!1)),new w(v.FAILED_PRECONDITION,cV);return c(f)}).next(a=>this.Zn(f).next(()=>a)):this._s(f).next(()=>c(f)))).then(a=>(f.raiseOnCommittedEvent(),a))}_s(a){return d5(a).get(cz.key).next(a=>{if(null!==a&&this.ss(a.leaseTimestampMs,5e3)&&!this.cs(a.ownerId)&&!this.ts(a)&&!(this.Cn||this.allowTabSynchronization&&a.allowTabSynchronization))throw new w(v.FAILED_PRECONDITION,d3)})}Zn(a){let b=new cz(this.clientId,this.allowTabSynchronization,Date.now());return d5(a).put(cz.key,b)}static Vt(){return cZ.Vt()}Xn(a){let b=d5(a);return b.get(cz.key).next(a=>this.ts(a)?(q("IndexedDbPersistence","Releasing primary lease."),b.delete(cz.key)):cX.resolve())}ss(a,b){let c=Date.now();return!(a<c-b)&&(!(a>c)||(r(`Detected an update time that is in the future: ${a} > ${c}`),!1))}Qn(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.On=()=>{this.Sn.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.jn()))},this.document.addEventListener("visibilitychange",this.On),this.inForeground="visible"===this.document.visibilityState)}hs(){this.On&&(this.document.removeEventListener("visibilitychange",this.On),this.On=null)}Wn(){var a;"function"==typeof(null===(a=this.window)|| void 0===a?void 0:a.addEventListener)&&(this.kn=()=>{this.us(),isSafari()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Sn.enterRestrictedMode(!0),this.Sn.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.kn))}ls(){this.kn&&(this.window.removeEventListener("pagehide",this.kn),this.kn=null)}cs(a){var b;try{let c=null!==(null===(b=this.Gn)|| void 0===b?void 0:b.getItem(this.os(a)));return q("IndexedDbPersistence",`Client '${a}' ${c?"is":"is not"} zombied in LocalStorage`),c}catch(d){return r("IndexedDbPersistence","Failed to get zombied client id.",d),!1}}us(){if(this.Gn)try{this.Gn.setItem(this.os(this.clientId),String(Date.now()))}catch(a){r("Failed to set zombie client id.",a)}}fs(){if(this.Gn)try{this.Gn.removeItem(this.os(this.clientId))}catch(a){}}os(a){return`firestore_zombie_${this.persistenceKey}_${a}`}}function d5(a){return c6(a,cz.store)}function d6(a){return c6(a,cL.store)}function d7(a,b){let c=a.projectId;return a.isDefaultDatabase||(c+="."+a.database),"firestore/"+b+"/"+c+"/"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class d8{constructor(a,b){this.progress=a,this.ws=b}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */ class d9{constructor(a,b,c){this.qn=a,this.gs=b,this.indexManager=c}ys(a,b){return this.gs.getAllMutationBatchesAffectingDocumentKey(a,b).next(c=>this.ps(a,b,c))}ps(a,b,c){return this.qn.getEntry(a,b).next(a=>{for(let b of c)b.applyToLocalView(a);return a})}Is(a,b){a.forEach((a,c)=>{for(let d of b)d.applyToLocalView(c)})}Es(a,b){return this.qn.getEntries(a,b).next(b=>this.Ts(a,b).next(()=>b))}Ts(a,b){return this.gs.getAllMutationBatchesAffectingDocumentKeys(a,b).next(a=>this.Is(b,a))}As(a,b,c){var d;return(d=b,ag.isDocumentKey(d.path)&&null===d.collectionGroup&&0===d.filters.length)?this.Rs(a,b.path):a0(b)?this.Ps(a,b,c):this.bs(a,b,c)}Rs(a,b){return this.ys(a,new ag(b)).next(a=>{let b=bQ;return a.isFoundDocument()&&(b=b.insert(a.key,a)),b})}Ps(a,b,c){let d=b.collectionGroup,e=bQ;return this.indexManager.getCollectionParents(a,d).next(f=>cX.forEach(f,f=>{var g,h;let i=(g=b,h=f.child(d),new aV(h,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt));return this.bs(a,i,c).next(a=>{a.forEach((a,b)=>{e=e.insert(a,b)})})}).next(()=>e))}bs(a,b,c){let d;return this.qn.getAll(a,b.path,c).next(c=>(d=c,this.gs.getAllMutationBatchesAffectingQuery(a,b))).next(a=>{for(let b of a)for(let c of b.mutations){let e=c.key,f=d.get(e);null==f&&(f=ax.newInvalidDocument(e),d=d.insert(e,f)),bv(c,f,b.localWriteTime),f.isFoundDocument()||(d=d.remove(e))}}).next(()=>(d.forEach((a,c)=>{a7(b,c)||(d=d.remove(a))}),d))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A set of changes to what documents are currently in view and out of view for
 * a given query. These changes are sent to the LocalStore by the View (via
 * the SyncEngine) and are used to pin / unpin documents as appropriate.
 */ class ea{constructor(a,b,c,d){this.targetId=a,this.fromCache=b,this.vs=c,this.Vs=d}static Ss(a,b){let c=bT(),d=bT();for(let e of b.docChanges)switch(e.type){case 0:c=c.add(e.doc.key);break;case 1:d=d.add(e.doc.key)}return new ea(a,b.fromCache,c,d)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A query engine that takes advantage of the target document mapping in the
 * QueryCache. Query execution is optimized by only reading the documents that
 * previously matched a query plus any documents that were edited after the
 * query was last listened to.
 *
 * There are some cases when this optimization is not guaranteed to produce
 * the same results as full collection scans. In these cases, query
 * processing falls back to full scans. These cases are:
 *
 * - Limit queries where a document that matched the query previously no longer
 *   matches the query.
 *
 * - Limit queries where a document edit may cause the document to sort below
 *   another document that is in the local cache.
 *
 * - Queries that have never been CURRENT or free of limbo documents.
 */ class eb{Ds(a){this.Cs=a}As(a,b,c,d){var e;return 0===(e=b).filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())||c.isEqual(M.min())?this.Ns(a,b):this.Cs.Es(a,d).next(e=>{let f=this.xs(b,e);return(aY(b)||aZ(b))&&this.ks(b.limitType,f,d,c)?this.Ns(a,b):(p()<=h.in.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",c.toString(),a6(b)),this.Cs.As(a,b,c).next(a=>(f.forEach(b=>{a=a.insert(b.key,b)}),a)))})}xs(a,b){let c=new bM(a8(a));return b.forEach((b,d)=>{a7(a,d)&&(c=c.add(d))}),c}ks(a,b,c,d){if(c.size!==b.size)return!0;let e="F"===a?b.last():b.first();return!!e&&(e.hasPendingWrites||e.version.compareTo(d)>0)}Ns(a,b){return p()<=h.in.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",a6(b)),this.Cs.As(a,b,M.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Implements `LocalStore` interface.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */ class ec{constructor(a,b,c,d){this.persistence=a,this.Os=b,this.O=d,this.Ms=new bJ(I),this.$s=new dY(a=>aE(a),aF),this.Fs=M.min(),this.Bs=a.getRemoteDocumentCache(),this.Un=a.getTargetCache(),this.Kn=a.getBundleCache(),this.Ls(c)}Ls(a){this.indexManager=this.persistence.getIndexManager(a),this.gs=this.persistence.getMutationQueue(a,this.indexManager),this.Us=new d9(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(a){return this.persistence.runTransaction("Collect garbage","readwrite-primary",b=>a.collect(b,this.Ms))}}function ed(a,b,c,d){return new ec(a,b,c,d)}async function ee(a,b){var c;let d=c=a;return await d.persistence.runTransaction("Handle user change","readonly",a=>{let c;return d.gs.getAllMutationBatches(a).next(e=>(c=e,d.Ls(b),d.gs.getAllMutationBatches(a))).next(b=>{let e=[],f=[],g=bT();for(let h of c)for(let i of(e.push(h.batchId),h.mutations))g=g.add(i.key);for(let j of b)for(let k of(f.push(j.batchId),j.mutations))g=g.add(k.key);return d.Us.Es(a,g).next(a=>({qs:a,removedBatchIds:e,addedBatchIds:f}))})})}function ef(a){var b;let c=b=a;return c.persistence.runTransaction("Get last remote snapshot version","readonly",a=>c.Un.getLastRemoteSnapshotVersion(a))}function eg(a,b,c){let d=bT();return c.forEach(a=>d=d.add(a)),b.getEntries(a,d).next(a=>{let d=bP;return c.forEach((c,e)=>{let f=a.get(c);e.isNoDocument()&&e.version.isEqual(M.min())?(b.removeEntry(c,e.readTime),d=d.insert(c,e)):!f.isValidDocument()||e.version.compareTo(f.version)>0||0===e.version.compareTo(f.version)&&f.hasPendingWrites?(b.addEntry(e),d=d.insert(c,e)):q("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",e.version)}),d})}function eh(a,b){var c;let d=c=a;return d.persistence.runTransaction("Get next mutation batch","readonly",a=>(void 0===b&&(b=-1),d.gs.getNextMutationBatchAfterBatchId(a,b)))}function ei(a,b){var c;let d=c=a;return d.persistence.runTransaction("Allocate target","readwrite",a=>{let c;return d.Un.getTargetData(a,b).next(e=>e?(c=e,cX.resolve(c)):d.Un.allocateTargetId(a).next(e=>(c=new da(b,e,0,a.currentSequenceNumber),d.Un.addTargetData(a,c).next(()=>c))))}).then(a=>{let c=d.Ms.get(a.targetId);return(null===c||a.snapshotVersion.compareTo(c.snapshotVersion)>0)&&(d.Ms=d.Ms.insert(a.targetId,a),d.$s.set(b,a.targetId)),a})}async function ej(a,b,c){var d;let e=d=a,f=e.Ms.get(b);try{c||await e.persistence.runTransaction("Release target",c?"readwrite":"readwrite-primary",a=>e.persistence.referenceDelegate.removeTarget(a,f))}catch(g){if(!c0(g))throw g;q("LocalStore",`Failed to update sequence numbers for target ${b}: ${g}`)}e.Ms=e.Ms.remove(b),e.$s.delete(f.target)}function ek(a,b,c){var d;let e=d=a,f=M.min(),g=bT();return e.persistence.runTransaction("Execute query","readonly",a=>(function(a,b,c){var d;let e=d=a,f=e.$s.get(c);return void 0!==f?cX.resolve(e.Ms.get(f)):e.Un.getTargetData(b,c)})(e,a,a2(b)).next(b=>{if(b)return f=b.lastLimboFreeSnapshotVersion,e.Un.getMatchingKeysForTargetId(a,b.targetId).next(a=>{g=a})}).next(()=>e.Os.As(a,b,c?f:M.min(),c?g:bT())).next(a=>({documents:a,Ks:g})))}function el(a,b){var c,d;let e=c=a,f=d=e.Un,g=e.Ms.get(b);return g?Promise.resolve(g.target):e.persistence.runTransaction("Get target data","readonly",a=>f.Tt(a,b).next(a=>a?a.target:null))}function em(a){var b;let c=b=a;return c.persistence.runTransaction("Get new document changes","readonly",a=>(function(a,b,c){var d;let e=d=a,f=bP,g=de(c),h=d0(b),i=IDBKeyRange.lowerBound(g,!0);return h.Qt({index:cF.readTimeIndex,range:i},(a,b)=>{let c=dc(e.O,b);f=f.insert(c.key,c),g=b.readTime}).next(()=>({ws:f,readTime:df(g)}))})(c.Bs,a,c.Fs)).then(({ws:a,readTime:b})=>(c.Fs=b,a))}async function en(a){var b;let c=b=a;return c.persistence.runTransaction("Synchronize last document change read time","readonly",a=>(function(a){let b=d0(a),c=M.min();return b.Qt({index:cF.readTimeIndex,reverse:!0},(a,b,d)=>{b.readTime&&(c=df(b.readTime)),d.done()}).next(()=>c)})(a)).then(a=>{c.Fs=a})}async function eo(a,b,c,d){var e,f;let g=e=a,h=bT(),i=bP;for(let j of c){let k=b.Gs(j.metadata.name);j.document&&(h=h.add(k));let l=b.js(j);l.setReadTime(b.Qs(j.metadata.readTime)),i=i.insert(k,l)}let m=g.Bs.newChangeBuffer({trackRemovals:!0}),n=await ei(g,(f=d,a2(aX(R.fromString(`__bundle__/docs/${f}`)))));return g.persistence.runTransaction("Apply bundle documents","readwrite",a=>eg(a,m,i).next(b=>(m.apply(a),b)).next(b=>g.Un.removeMatchingKeysForTargetId(a,n.targetId).next(()=>g.Un.addMatchingKeys(a,h,n.targetId)).next(()=>g.Us.Ts(a,b)).next(()=>b)))}async function ep(a,b,c=bT()){var d;let e=await ei(a,a2(dl(b.bundledQuery))),f=d=a;return f.persistence.runTransaction("Save named query","readwrite",a=>{let d=b7(b.readTime);if(e.snapshotVersion.compareTo(d)>=0)return f.Kn.saveNamedQuery(a,b);let g=e.withResumeToken(V.EMPTY_BYTE_STRING,d);return f.Ms=f.Ms.insert(g.targetId,g),f.Un.updateTargetData(a,g).next(()=>f.Un.removeMatchingKeysForTargetId(a,e.targetId)).next(()=>f.Un.addMatchingKeys(a,c,e.targetId)).next(()=>f.Kn.saveNamedQuery(a,b))})}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An in-memory implementation of DocumentOverlayCache.
 */ class eq{constructor(){this.overlays=new bJ(ag.comparator),this.Hs=new Map}getOverlay(a,b){return cX.resolve(this.overlays.get(b))}saveOverlays(a,b,c){return c.forEach(c=>{this.Yt(a,b,c)}),cX.resolve()}removeOverlaysForBatchId(a,b,c){let d=this.Hs.get(c);return void 0!==d&&(d.forEach(a=>this.overlays=this.overlays.remove(a)),this.Hs.delete(c)),cX.resolve()}getOverlaysForCollection(a,b,c){let d=new Map,e=b.length+1,f=new ag(b.child("")),g=this.overlays.getIteratorFrom(f);for(;g.hasNext();){let h=g.getNext().value,i=h.getKey();if(!b.isPrefixOf(i.path))break;i.path.length===e&&h.largestBatchId>c&&d.set(h.getKey(),h)}return cX.resolve(d)}getOverlaysForCollectionGroup(a,b,c,d){let e=new bJ((a,b)=>a-b),f=this.overlays.getIterator();for(;f.hasNext();){let g=f.getNext().value;if(g.getKey().getCollectionGroup()===b&&g.largestBatchId>c){let h=e.get(g.largestBatchId);null===h&&(h=new Map,e=e.insert(g.largestBatchId,h)),h.set(g.getKey(),g)}}let i=new Map,j=e.getIterator();for(;j.hasNext()&&(j.getNext().value.forEach((a,b)=>i.set(b,a)),!(i.size>=d)););return cX.resolve(i)}Yt(a,b,c){if(null===c)return;let d=this.overlays.get(c.key);null!==d&&this.Hs.get(d.largestBatchId).delete(c.key),this.overlays=this.overlays.insert(c.key,new c9(b,c));let e=this.Hs.get(b);void 0===e&&(e=new Set,this.Hs.set(b,e)),e.add(c.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */ class er{constructor(){this.Js=new bM(es.Ys),this.Xs=new bM(es.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(a,b){let c=new es(a,b);this.Js=this.Js.add(c),this.Xs=this.Xs.add(c)}ti(a,b){a.forEach(a=>this.addReference(a,b))}removeReference(a,b){this.ei(new es(a,b))}ni(a,b){a.forEach(a=>this.removeReference(a,b))}si(a){let b=new ag(new R([])),c=new es(b,a),d=new es(b,a+1),e=[];return this.Xs.forEachInRange([c,d],a=>{this.ei(a),e.push(a.key)}),e}ii(){this.Js.forEach(a=>this.ei(a))}ei(a){this.Js=this.Js.delete(a),this.Xs=this.Xs.delete(a)}ri(a){let b=new ag(new R([])),c=new es(b,a),d=new es(b,a+1),e=bT();return this.Xs.forEachInRange([c,d],a=>{e=e.add(a.key)}),e}containsKey(a){let b=new es(a,0),c=this.Js.firstAfterOrEqual(b);return null!==c&&a.isEqual(c.key)}}class es{constructor(a,b){this.key=a,this.oi=b}static Ys(a,b){return ag.comparator(a.key,b.key)||I(a.oi,b.oi)}static Zs(a,b){return I(a.oi,b.oi)||ag.comparator(a.key,b.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class et{constructor(a,b){this.indexManager=a,this.referenceDelegate=b,this.gs=[],this.ci=1,this.ui=new bM(es.Ys)}checkEmpty(a){return cX.resolve(0===this.gs.length)}addMutationBatch(a,b,c,d){let e=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];let f=new c7(e,b,c,d);for(let g of(this.gs.push(f),d))this.ui=this.ui.add(new es(g.key,e)),this.indexManager.addToCollectionParentIndex(a,g.key.path.popLast());return cX.resolve(f)}lookupMutationBatch(a,b){return cX.resolve(this.ai(b))}getNextMutationBatchAfterBatchId(a,b){let c=this.hi(b+1),d=c<0?0:c;return cX.resolve(this.gs.length>d?this.gs[d]:null)}getHighestUnacknowledgedBatchId(){return cX.resolve(0===this.gs.length?-1:this.ci-1)}getAllMutationBatches(a){return cX.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(a,b){let c=new es(b,0),d=new es(b,Number.POSITIVE_INFINITY),e=[];return this.ui.forEachInRange([c,d],a=>{let b=this.ai(a.oi);e.push(b)}),cX.resolve(e)}getAllMutationBatchesAffectingDocumentKeys(a,b){let c=new bM(I);return b.forEach(a=>{let b=new es(a,0),d=new es(a,Number.POSITIVE_INFINITY);this.ui.forEachInRange([b,d],a=>{c=c.add(a.oi)})}),cX.resolve(this.li(c))}getAllMutationBatchesAffectingQuery(a,b){let c=b.path,d=c.length+1,e=c;ag.isDocumentKey(e)||(e=e.child(""));let f=new es(new ag(e),0),g=new bM(I);return this.ui.forEachWhile(a=>{let b=a.key.path;return!!c.isPrefixOf(b)&&(b.length===d&&(g=g.add(a.oi)),!0)},f),cX.resolve(this.li(g))}li(a){let b=[];return a.forEach(a=>{let c=this.ai(a);null!==c&&b.push(c)}),b}removeMutationBatch(a,b){var c;0===this.fi(b.batchId,"removed")||u(),this.gs.shift();let d=this.ui;return cX.forEach(b.mutations,c=>{let e=new es(c.key,b.batchId);return d=d.delete(e),this.referenceDelegate.markPotentiallyOrphaned(a,c.key)}).next(()=>{this.ui=d})}Qe(a){}containsKey(a,b){let c=new es(b,0),d=this.ui.firstAfterOrEqual(c);return cX.resolve(b.isEqual(d&&d.key))}performConsistencyCheck(a){return this.gs.length,cX.resolve()}fi(a,b){return this.hi(a)}hi(a){return 0===this.gs.length?0:a-this.gs[0].batchId}ai(a){let b=this.hi(a);return b<0||b>=this.gs.length?null:this.gs[b]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The memory-only RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newMemoryRemoteDocumentCache()`.
 */ class eu{constructor(a){this.di=a,this.docs=new bJ(ag.comparator),this.size=0}setIndexManager(a){this.indexManager=a}addEntry(a,b){let c=b.key,d=this.docs.get(c),e=d?d.size:0,f=this.di(b);return this.docs=this.docs.insert(c,{document:b.mutableCopy(),size:f}),this.size+=f-e,this.indexManager.addToCollectionParentIndex(a,c.path.popLast())}removeEntry(a){let b=this.docs.get(a);b&&(this.docs=this.docs.remove(a),this.size-=b.size)}getEntry(a,b){let c=this.docs.get(b);return cX.resolve(c?c.document.mutableCopy():ax.newInvalidDocument(b))}getEntries(a,b){let c=bP;return b.forEach(a=>{let b=this.docs.get(a);c=c.insert(a,b?b.document.mutableCopy():ax.newInvalidDocument(a))}),cX.resolve(c)}getAll(a,b,c){let d=bP,e=new ag(b.child("")),f=this.docs.getIteratorFrom(e);for(;f.hasNext();){let{key:g,value:{document:h}}=f.getNext();if(!b.isPrefixOf(g.path))break;g.path.length>b.length+1||0>=h.readTime.compareTo(c)||(d=d.insert(h.key,h.mutableCopy()))}return cX.resolve(d)}_i(a,b){return cX.forEach(this.docs,a=>b(a))}newChangeBuffer(a){return new ev(this)}getSize(a){return cX.resolve(this.size)}}class ev extends dZ{constructor(a){super(),this.Tn=a}applyChanges(a){let b=[];return this.changes.forEach((c,d)=>{d.isValidDocument()?b.push(this.Tn.addEntry(a,d)):this.Tn.removeEntry(c)}),cX.waitFor(b)}getFromCache(a,b){return this.Tn.getEntry(a,b)}getAllFromCache(a,b){return this.Tn.getEntries(a,b)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */ class ew{constructor(a,b){this.pi={},this.overlays={},this.Nn=new F(0),this.xn=!1,this.xn=!0,this.referenceDelegate=a(this),this.Un=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a){this.persistence=a,this.wi=new dY(a=>aE(a),aF),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.mi=0,this.gi=new er,this.targetCount=0,this.yi=dP.He()}forEachTarget(a,b){return this.wi.forEach((a,c)=>b(c)),cX.resolve()}getLastRemoteSnapshotVersion(a){return cX.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(a){return cX.resolve(this.mi)}allocateTargetId(a){return this.highestTargetId=this.yi.next(),cX.resolve(this.highestTargetId)}setTargetsMetadata(a,b,c){return c&&(this.lastRemoteSnapshotVersion=c),b>this.mi&&(this.mi=b),cX.resolve()}Ze(a){this.wi.set(a.target,a);let b=a.targetId;b>this.highestTargetId&&(this.yi=new dP(b),this.highestTargetId=b),a.sequenceNumber>this.mi&&(this.mi=a.sequenceNumber)}addTargetData(a,b){return this.Ze(b),this.targetCount+=1,cX.resolve()}updateTargetData(a,b){return this.Ze(b),cX.resolve()}removeTargetData(a,b){return this.wi.delete(b.target),this.gi.si(b.targetId),this.targetCount-=1,cX.resolve()}removeTargets(a,b,c){let d=0,e=[];return this.wi.forEach((f,g)=>{g.sequenceNumber<=b&&null===c.get(g.targetId)&&(this.wi.delete(f),e.push(this.removeMatchingKeysForTargetId(a,g.targetId)),d++)}),cX.waitFor(e).next(()=>d)}getTargetCount(a){return cX.resolve(this.targetCount)}getTargetData(a,b){let c=this.wi.get(b)||null;return cX.resolve(c)}addMatchingKeys(a,b,c){return this.gi.ti(b,c),cX.resolve()}removeMatchingKeys(a,b,c){this.gi.ni(b,c);let d=this.persistence.referenceDelegate,e=[];return d&&b.forEach(b=>{e.push(d.markPotentiallyOrphaned(a,b))}),cX.waitFor(e)}removeMatchingKeysForTargetId(a,b){return this.gi.si(b),cX.resolve()}getMatchingKeysForTargetId(a,b){let c=this.gi.ri(b);return cX.resolve(c)}containsKey(a,b){return cX.resolve(this.gi.containsKey(b))}}(this),this.indexManager=new /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An in-memory implementation of IndexManager.
 */ class{constructor(){this.xe=new dA}addToCollectionParentIndex(a,b){return this.xe.add(b),cX.resolve()}getCollectionParents(a,b){return cX.resolve(this.xe.getEntries(b))}addFieldIndex(a,b){return cX.resolve()}deleteFieldIndex(a,b){return cX.resolve()}getDocumentsMatchingTarget(a,b,c){return cX.resolve(bT())}getFieldIndex(a,b){return cX.resolve(null)}getFieldIndexes(a,b){return cX.resolve([])}getNextCollectionGroupToUpdate(a){return cX.resolve(null)}updateCollectionGroup(a,b,c){return cX.resolve()}updateIndexEntries(a,b){return cX.resolve()}},this.qn=function(a){return new eu(a)}(a=>this.referenceDelegate.Ii(a)),this.O=new db(b),this.Kn=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a){this.O=a,this.Ws=new Map,this.zs=new Map}getBundleMetadata(a,b){return cX.resolve(this.Ws.get(b))}saveBundleMetadata(a,b){var c;return this.Ws.set(b.id,{id:(c=b).id,version:c.version,createTime:b7(c.createTime)}),cX.resolve()}getNamedQuery(a,b){return cX.resolve(this.zs.get(b))}saveNamedQuery(a,b){var c;return this.zs.set(b.name,{name:(c=b).name,query:dl(c.bundledQuery),readTime:b7(c.readTime)}),cX.resolve()}}(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(a){return this.indexManager}getDocumentOverlayCache(a){let b=this.overlays[a.toKey()];return b||(b=new eq,this.overlays[a.toKey()]=b),b}getMutationQueue(a,b){let c=this.pi[a.toKey()];return c||(c=new et(b,this.referenceDelegate),this.pi[a.toKey()]=c),c}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(a,b,c){q("MemoryPersistence","Starting transaction:",a);let d=new ex(this.Nn.next());return this.referenceDelegate.Ei(),c(d).next(a=>this.referenceDelegate.Ti(d).next(()=>a)).toPromise().then(a=>(d.raiseOnCommittedEvent(),a))}Ai(a,b){return cX.or(Object.values(this.pi).map(c=>()=>c.containsKey(a,b)))}}class ex extends cW{constructor(a){super(),this.currentSequenceNumber=a}}class ey{constructor(a){this.persistence=a,this.Ri=new er,this.Pi=null}static bi(a){return new ey(a)}get vi(){if(this.Pi)return this.Pi;throw u()}addReference(a,b,c){return this.Ri.addReference(c,b),this.vi.delete(c.toString()),cX.resolve()}removeReference(a,b,c){return this.Ri.removeReference(c,b),this.vi.add(c.toString()),cX.resolve()}markPotentiallyOrphaned(a,b){return this.vi.add(b.toString()),cX.resolve()}removeTarget(a,b){this.Ri.si(b.targetId).forEach(a=>this.vi.add(a.toString()));let c=this.persistence.getTargetCache();return c.getMatchingKeysForTargetId(a,b.targetId).next(a=>{a.forEach(a=>this.vi.add(a.toString()))}).next(()=>c.removeTargetData(a,b))}Ei(){this.Pi=new Set}Ti(a){let b=this.persistence.getRemoteDocumentCache().newChangeBuffer();return cX.forEach(this.vi,c=>{let d=ag.fromPath(c);return this.Vi(a,d).next(a=>{a||b.removeEntry(d,M.min())})}).next(()=>(this.Pi=null,b.apply(a)))}updateLimboDocument(a,b){return this.Vi(a,b).next(a=>{a?this.vi.delete(b.toString()):this.vi.add(b.toString())})}Ii(a){return 0}Vi(a,b){return cX.or([()=>cX.resolve(this.Ri.containsKey(b)),()=>this.persistence.getTargetCache().containsKey(a,b),()=>this.persistence.Ai(a,b)])}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // The format of the LocalStorage key that stores the client state is:
//     firestore_clients_<persistence_prefix>_<instance_key>
/** Assembles the key for a client state in WebStorage */ function ez(a,b){return`firestore_clients_${a}_${b}`}function eA(a,b,c){let d=`firestore_mutations_${a}_${c}`;return b.isAuthenticated()&&(d+=`_${b.uid}`),d}function eB(a,b){return`firestore_targets_${a}_${b}`}class eC{constructor(a,b,c,d){this.user=a,this.batchId=b,this.state=c,this.error=d}static Si(a,b,c){let d=JSON.parse(c),e,f="object"==typeof d&& -1!==["pending","acknowledged","rejected"].indexOf(d.state)&&(void 0===d.error||"object"==typeof d.error);return f&&d.error&&(f="string"==typeof d.error.message&&"string"==typeof d.error.code)&&(e=new w(d.error.code,d.error.message)),f?new eC(a,b,d.state,e):(r("SharedClientState",`Failed to parse mutation state for ID '${b}': ${c}`),null)}Di(){let a={state:this.state,updateTimeMs:Date.now()};return this.error&&(a.error={code:this.error.code,message:this.error.message}),JSON.stringify(a)}}class eD{constructor(a,b,c){this.targetId=a,this.state=b,this.error=c}static Si(a,b){let c=JSON.parse(b),d,e="object"==typeof c&& -1!==["not-current","current","rejected"].indexOf(c.state)&&(void 0===c.error||"object"==typeof c.error);return e&&c.error&&(e="string"==typeof c.error.message&&"string"==typeof c.error.code)&&(d=new w(c.error.code,c.error.message)),e?new eD(a,c.state,d):(r("SharedClientState",`Failed to parse target state for ID '${a}': ${b}`),null)}Di(){let a={state:this.state,updateTimeMs:Date.now()};return this.error&&(a.error={code:this.error.code,message:this.error.message}),JSON.stringify(a)}}class eE{constructor(a,b){this.clientId=a,this.activeTargetIds=b}static Si(a,b){let c=JSON.parse(b),d="object"==typeof c&&c.activeTargetIds instanceof Array,e=bU;for(let f=0;d&&f<c.activeTargetIds.length;++f)d=af(c.activeTargetIds[f]),e=e.add(c.activeTargetIds[f]);return d?new eE(a,e):(r("SharedClientState",`Failed to parse client data for instance '${a}': ${b}`),null)}}class eF{constructor(a,b){this.clientId=a,this.onlineState=b}static Si(a){let b=JSON.parse(a);return"object"==typeof b&& -1!==["Unknown","Online","Offline"].indexOf(b.onlineState)&&"string"==typeof b.clientId?new eF(b.clientId,b.onlineState):(r("SharedClientState",`Failed to parse online state: ${a}`),null)}}class eG{constructor(){this.activeTargetIds=bU}Ci(a){this.activeTargetIds=this.activeTargetIds.add(a)}Ni(a){this.activeTargetIds=this.activeTargetIds.delete(a)}Di(){let a={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(a)}}class eH{constructor(a,b,c,d,e){var f,g,h;this.window=a,this.Sn=b,this.persistenceKey=c,this.xi=d,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ki=this.Oi.bind(this),this.Mi=new bJ(I),this.started=!1,this.$i=[];let i=c.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=e,this.Fi=ez(this.persistenceKey,this.xi),this.Bi=`firestore_sequence_number_${f=this.persistenceKey}`,this.Mi=this.Mi.insert(this.xi,new eG),this.Li=RegExp(`^firestore_clients_${i}_([^_]*)$`),this.Ui=RegExp(`^firestore_mutations_${i}_(\\d+)(?:_(.*))?$`),this.qi=RegExp(`^firestore_targets_${i}_(\\d+)$`),this.Ki=`firestore_online_state_${g=this.persistenceKey}`,this.Gi=`firestore_bundle_loaded_${h=this.persistenceKey}`,this.window.addEventListener("storage",this.ki)}static Vt(a){return!(!a||!a.localStorage)}async start(){let a=await this.syncEngine.ds();for(let b of a){if(b===this.xi)continue;let c=this.getItem(ez(this.persistenceKey,b));if(c){let d=eE.Si(b,c);d&&(this.Mi=this.Mi.insert(d.clientId,d))}}this.ji();let e=this.storage.getItem(this.Ki);if(e){let f=this.Qi(e);f&&this.Wi(f)}for(let g of this.$i)this.Oi(g);this.$i=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(a){this.setItem(this.Bi,JSON.stringify(a))}getAllActiveQueryTargets(){return this.zi(this.Mi)}isActiveQueryTarget(a){let b=!1;return this.Mi.forEach((c,d)=>{d.activeTargetIds.has(a)&&(b=!0)}),b}addPendingMutation(a){this.Hi(a,"pending")}updateMutationState(a,b,c){this.Hi(a,b,c),this.Ji(a)}addLocalQueryTarget(a){let b="not-current";if(this.isActiveQueryTarget(a)){let c=this.storage.getItem(eB(this.persistenceKey,a));if(c){let d=eD.Si(a,c);d&&(b=d.state)}}return this.Yi.Ci(a),this.ji(),b}removeLocalQueryTarget(a){this.Yi.Ni(a),this.ji()}isLocalQueryTarget(a){return this.Yi.activeTargetIds.has(a)}clearQueryState(a){this.removeItem(eB(this.persistenceKey,a))}updateQueryState(a,b,c){this.Xi(a,b,c)}handleUserChange(a,b,c){b.forEach(a=>{this.Ji(a)}),this.currentUser=a,c.forEach(a=>{this.addPendingMutation(a)})}setOnlineState(a){this.Zi(a)}notifyBundleLoaded(){this.tr()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ki),this.removeItem(this.Fi),this.started=!1)}getItem(a){let b=this.storage.getItem(a);return q("SharedClientState","READ",a,b),b}setItem(a,b){q("SharedClientState","SET",a,b),this.storage.setItem(a,b)}removeItem(a){q("SharedClientState","REMOVE",a),this.storage.removeItem(a)}Oi(a){let b=a;if(b.storageArea===this.storage){if(q("SharedClientState","EVENT",b.key,b.newValue),b.key===this.Fi)return void r("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Sn.enqueueRetryable(async()=>{if(this.started){if(null!==b.key){if(this.Li.test(b.key)){if(null==b.newValue){let a=this.er(b.key);return this.nr(a,null)}{let c=this.sr(b.key,b.newValue);if(c)return this.nr(c.clientId,c)}}else if(this.Ui.test(b.key)){if(null!==b.newValue){let d=this.ir(b.key,b.newValue);if(d)return this.rr(d)}}else if(this.qi.test(b.key)){if(null!==b.newValue){let e=this.cr(b.key,b.newValue);if(e)return this.ur(e)}}else if(b.key===this.Ki){if(null!==b.newValue){let f=this.Qi(b.newValue);if(f)return this.Wi(f)}}else if(b.key===this.Bi){let g=function(a){let b=F.A;if(null!=a)try{var c;let d=JSON.parse(a);"number"==typeof d||u(),b=d}catch(e){r("SharedClientState","Failed to read sequence number from WebStorage",e)}return b}(b.newValue);g!==F.A&&this.sequenceNumberHandler(g)}else if(b.key===this.Gi)return this.syncEngine.ar()}}else this.$i.push(b)})}}get Yi(){return this.Mi.get(this.xi)}ji(){this.setItem(this.Fi,this.Yi.Di())}Hi(a,b,c){let d=new eC(this.currentUser,a,b,c),e=eA(this.persistenceKey,this.currentUser,a);this.setItem(e,d.Di())}Ji(a){let b=eA(this.persistenceKey,this.currentUser,a);this.removeItem(b)}Zi(a){let b={clientId:this.xi,onlineState:a};this.storage.setItem(this.Ki,JSON.stringify(b))}Xi(a,b,c){let d=eB(this.persistenceKey,a),e=new eD(a,b,c);this.setItem(d,e.Di())}tr(){this.setItem(this.Gi,"value-not-used")}er(a){let b=this.Li.exec(a);return b?b[1]:null}sr(a,b){let c=this.er(a);return eE.Si(c,b)}ir(a,b){let c=this.Ui.exec(a),d=Number(c[1]),e=void 0!==c[2]?c[2]:null;return eC.Si(new m(e),d,b)}cr(a,b){let c=this.qi.exec(a),d=Number(c[1]);return eD.Si(d,b)}Qi(a){return eF.Si(a)}async rr(a){if(a.user.uid===this.currentUser.uid)return this.syncEngine.hr(a.batchId,a.state,a.error);q("SharedClientState",`Ignoring mutation for non-active user ${a.user.uid}`)}ur(a){return this.syncEngine.lr(a.targetId,a.state,a.error)}nr(a,b){let c=b?this.Mi.insert(a,b):this.Mi.remove(a),d=this.zi(this.Mi),e=this.zi(c),f=[],g=[];return e.forEach(a=>{d.has(a)||f.push(a)}),d.forEach(a=>{e.has(a)||g.push(a)}),this.syncEngine.dr(f,g).then(()=>{this.Mi=c})}Wi(a){this.Mi.get(a.clientId)&&this.onlineStateHandler(a.onlineState)}zi(a){let b=bU;return a.forEach((a,c)=>{b=b.unionWith(c.activeTargetIds)}),b}}class eI{constructor(){this._r=new eG,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(a){}updateMutationState(a,b,c){}addLocalQueryTarget(a){return this._r.Ci(a),this.wr[a]||"not-current"}updateQueryState(a,b,c){this.wr[a]=b}removeLocalQueryTarget(a){this._r.Ni(a)}isLocalQueryTarget(a){return this._r.activeTargetIds.has(a)}clearQueryState(a){delete this.wr[a]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(a){return this._r.activeTargetIds.has(a)}start(){return this._r=new eG,Promise.resolve()}handleUserChange(a,b,c){}setOnlineState(a){}shutdown(){}writeSequenceNumber(a){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eJ{mr(a){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // References to `window` are guarded by BrowserConnectivityMonitor.isAvailable()
/* eslint-disable no-restricted-globals */ /**
 * Browser implementation of ConnectivityMonitor.
 */ class eK{constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}mr(a){this.Er.push(a)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){for(let a of(q("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.Er))a(0)}Ir(){for(let a of(q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.Er))a(1)}static Vt(){return"undefined"!=typeof window&& void 0!==window.addEventListener&& void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let eL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * Maps RPC names to the corresponding REST endpoint name.
 *
 * We use array notation to avoid mangling.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provides a simple helper class that implements the Stream interface to
 * bridge to other implementations that are streams but do not implement the
 * interface. The stream callbacks are invoked with the callOn... methods.
 */ class eM{constructor(a){this.Ar=a.Ar,this.Rr=a.Rr}Pr(a){this.br=a}vr(a){this.Vr=a}onMessage(a){this.Sr=a}close(){this.Rr()}send(a){this.Ar(a)}Dr(){this.br()}Cr(a){this.Vr(a)}Nr(a){this.Sr(a)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eN extends class{constructor(a){this.databaseInfo=a,this.databaseId=a.databaseId;let b=a.ssl?"https":"http";this.kr=b+"://"+a.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(a,b,c,d,e){let f=this.$r(a,b);q("RestConnection","Sending: ",f,c);let g={};return this.Fr(g,d,e),this.Br(a,f,g,c).then(a=>(q("RestConnection","Received: ",a),a),b=>{throw s("RestConnection",`${a} failed with error: `,b,"url: ",f,"request:",c),b})}Lr(a,b,c,d,e){return this.Mr(a,b,c,d,e)}Fr(a,b,c){a["X-Goog-Api-Client"]="gl-js/ fire/"+n,a["Content-Type"]="text/plain",this.databaseInfo.appId&&(a["X-Firebase-GMPID"]=this.databaseInfo.appId),b&&b.headers.forEach((b,c)=>a[c]=b),c&&c.headers.forEach((b,c)=>a[c]=b)}$r(a,b){let c=eL[a];return`${this.kr}/v1/${b}:${c}`}}{constructor(a){super(a),this.forceLongPolling=a.forceLongPolling,this.autoDetectLongPolling=a.autoDetectLongPolling,this.useFetchStreams=a.useFetchStreams}Br(a,b,c,d){return new Promise((e,f)=>{let g=new j.JJ;g.listenOnce(j.tw.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case j.jK.NO_ERROR:let b=g.getResponseJson();q("Connection","XHR received:",JSON.stringify(b)),e(b);break;case j.jK.TIMEOUT:q("Connection",'RPC "'+a+'" timed out'),f(new w(v.DEADLINE_EXCEEDED,"Request time out"));break;case j.jK.HTTP_ERROR:let c=g.getStatus();if(q("Connection",'RPC "'+a+'" failed with status:',c,"response text:",g.getResponseText()),c>0){let d=g.getResponseJson().error;if(d&&d.status&&d.message){let h=function(a){let b=a.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(b)>=0?b:v.UNKNOWN}(d.status);f(new w(h,d.message))}else f(new w(v.UNKNOWN,"Server responded with status "+g.getStatus()))}else f(new w(v.UNAVAILABLE,"Connection failed."));break;default:u()}}finally{q("Connection",'RPC "'+a+'" completed.')}});let h=JSON.stringify(d);g.send(b,"POST",h,c,15)})}Ur(a,b,c){let e=[this.kr,"/","google.firestore.v1.Firestore","/",a,"/channel"],f=(0,j.UE)(),g=(0,j.FJ)(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(h.xmlHttpFactory=new j.zI({})),this.Fr(h.initMessageHeaders,b,c),(0,i.uI)()||(0,i.b$)()||(0,i.d)()||(0,i.w1)()||(0,i.Mn)()||(0,i.ru)()||(h.httpHeadersOverwriteParam="$httpHeaders");let k=e.join("");q("Connection","Creating WebChannel: "+k,h);let l=f.createWebChannel(k,h),m=!1,n=!1,o=new eM({Ar:a=>{n?q("Connection","Not sending because WebChannel is closed:",a):(m||(q("Connection","Opening WebChannel transport."),l.open(),m=!0),q("Connection","WebChannel sending:",a),l.send(a))},Rr:()=>l.close()}),p=(a,b,c)=>{a.listen(b,a=>{try{c(a)}catch(b){setTimeout(()=>{throw b},0)}})};return p(l,j.ii.EventType.OPEN,()=>{n||q("Connection","WebChannel transport opened.")}),p(l,j.ii.EventType.CLOSE,()=>{n||(n=!0,q("Connection","WebChannel transport closed"),o.Cr())}),p(l,j.ii.EventType.ERROR,a=>{n||(n=!0,s("Connection","WebChannel transport errored:",a),o.Cr(new w(v.UNAVAILABLE,"The operation could not be completed")))}),p(l,j.ii.EventType.MESSAGE,a=>{var b,c;if(!n){let e=a.data[0];(c=!!e)||u();let f=e,g=f.error||(null===(b=f[0])|| void 0===b?void 0:b.error);if(g){q("Connection","WebChannel received error:",g);let h=g.status,i=function(a){let b=d[a];if(void 0!==b)return bI(b)}(h),j=g.message;void 0===i&&(i=v.INTERNAL,j="Unknown error status: "+h+" with message "+g.message),n=!0,o.Cr(new w(i,j)),l.close()}else q("Connection","WebChannel received:",e),o.Nr(e)}}),p(g,j.ju.STAT_EVENT,a=>{a.stat===j.kN.PROXY?q("Connection","Detected buffering proxy"):a.stat===j.kN.NOPROXY&&q("Connection","Detected no buffering proxy")}),setTimeout(()=>{o.Dr()},0),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Initializes the WebChannelConnection for the browser. */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** The Platform's 'window' implementation or null if not available. */ function eO(){return"undefined"!=typeof window?window:null}function eP(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function eQ(a){return new b4(a,!0)}class eR{constructor(a,b,c=1e3,d=1.5,e=6e4){this.Sn=a,this.timerId=b,this.qr=c,this.Kr=d,this.Gr=e,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(a){this.cancel();let b=Math.floor(this.jr+this.Jr()),c=Math.max(0,Date.now()-this.Wr),d=Math.max(0,b-c);d>0&&q("ExponentialBackoff",`Backing off for ${d} ms (base delay: ${this.jr} ms, delay with jitter: ${b} ms, last attempt: ${c} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,d,()=>(this.Wr=Date.now(),a())),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){null!==this.Qr&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){null!==this.Qr&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */ class eS{constructor(a,b,c,d,e,f,g,h){this.Sn=a,this.Xr=c,this.Zr=d,this.eo=e,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=g,this.listener=h,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new eR(a,b)}oo(){return 1===this.state||5===this.state||this.co()}co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&null===this.so&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,()=>this.lo()))}fo(a){this._o(),this.stream.send(a)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(a,b){this._o(),this.wo(),this.ro.cancel(),this.no++,4!==a?this.ro.reset():b&&b.code===v.RESOURCE_EXHAUSTED?(r(b.toString()),r("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):b&&b.code===v.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.mo(),this.stream.close(),this.stream=null),this.state=a,await this.listener.vr(b)}mo(){}auth(){this.state=1;let a=this.yo(this.no),b=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,c])=>{this.no===b&&this.po(a,c)},b=>{a(()=>{let a=new w(v.UNKNOWN,"Fetching auth token failed: "+b.message);return this.Io(a)})})}po(a,b){let c=this.yo(this.no);this.stream=this.Eo(a,b),this.stream.Pr(()=>{c(()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,()=>(this.co()&&(this.state=3),Promise.resolve())),this.listener.Pr()))}),this.stream.vr(a=>{c(()=>this.Io(a))}),this.stream.onMessage(a=>{c(()=>this.onMessage(a))})}uo(){this.state=5,this.ro.Hr(async()=>{this.state=0,this.start()})}Io(a){return q("PersistentStream",`close with error: ${a}`),this.stream=null,this.close(4,a)}yo(a){return b=>{this.Sn.enqueueAndForget(()=>this.no===a?b():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eT extends eS{constructor(a,b,c,d,e,f){super(a,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",b,c,d,f),this.O=e}Eo(a,b){return this.eo.Ur("Listen",a,b)}onMessage(a){this.ro.reset();let b=function(a,b){let c;if("targetChange"in b){var d,e,f,g,h;b.targetChange;let i="NO_CHANGE"===(d=b.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===d?1:"REMOVE"===d?2:"CURRENT"===d?3:"RESET"===d?4:u(),j=b.targetChange.targetIds||[],k=(e=a,f=b.targetChange.resumeToken,e.N?(void 0===f||"string"==typeof f||u(),V.fromBase64String(f||"")):(void 0===f||f instanceof Uint8Array||u(),V.fromUint8Array(f||new Uint8Array))),l=b.targetChange.cause,m=l&&function(a){let b=void 0===a.code?v.UNKNOWN:bI(a.code);return new w(b,a.message||"")}(l);c=new bZ(i,j,k,m||null)}else if("documentChange"in b){b.documentChange;let n=b.documentChange;n.document,n.document.name,n.document.updateTime;let o=cb(a,n.document.name),p=b7(n.document.updateTime),q=new av({mapValue:{fields:n.document.fields}}),r=ax.newFoundDocument(o,p,q),s=n.targetIds||[],t=n.removedTargetIds||[];c=new bX(s,t,r.key,r)}else if("documentDelete"in b){b.documentDelete;let x=b.documentDelete;x.document;let y=cb(a,x.document),z=x.readTime?b7(x.readTime):M.min(),A=ax.newNoDocument(y,z),B=x.removedTargetIds||[];c=new bX([],B,A.key,A)}else if("documentRemove"in b){b.documentRemove;let C=b.documentRemove;C.document;let D=cb(a,C.document),E=C.removedTargetIds||[];c=new bX([],E,D,null)}else{if(!("filter"in b))return u();{b.filter;let F=b.filter;F.targetId;let G=F.count||0,H=new bG(G),I=F.targetId;c=new bY(I,H)}}return c}(this.O,a),c=function(a){if(!("targetChange"in a))return M.min();let b=a.targetChange;return b.targetIds&&b.targetIds.length?M.min():b.readTime?b7(b.readTime):M.min()}(a);return this.listener.To(b,c)}Ao(a){let b={};b.database=ce(this.O),b.addTarget=function(a,b){let c,d=b.target;return(c=aG(d)?{documents:ck(a,d)}:{query:cl(a,d)}).targetId=b.targetId,b.resumeToken.approximateByteSize()>0?c.resumeToken=b6(a,b.resumeToken):b.snapshotVersion.compareTo(M.min())>0&&(c.readTime=b5(a,b.snapshotVersion.toTimestamp())),c}(this.O,a);let c=function(a,b){let c=function(a,b){switch(b){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return u()}}(0,b.purpose);return null==c?null:{"goog-listen-tags":c}}(this.O,a);c&&(b.labels=c),this.fo(b)}Ro(a){let b={};b.database=ce(this.O),b.removeTarget=a,this.fo(b)}}class eU extends eS{constructor(a,b,c,d,e,f){super(a,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",b,c,d,f),this.O=e,this.Po=!1}get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(a,b){return this.eo.Ur("Write",a,b)}onMessage(a){var b,c,d,e,f;if(!a.streamToken&&u(),this.lastStreamToken=a.streamToken,this.Po){this.ro.reset();let g=(c=a.writeResults,d=a.commitTime,c&&c.length>0?(void 0!==d||u(),c.map(a=>{var b,c;let e;return b=a,c=d,(e=b.updateTime?b7(b.updateTime):b7(c)).isEqual(M.min())&&(e=b7(c)),new bq(e,b.transformResults||[])})):[]),h=b7(a.commitTime);return this.listener.Vo(h,g)}return a.writeResults&&0!==a.writeResults.length&&u(),this.Po=!0,this.listener.So()}Do(){let a={};a.database=ce(this.O),this.fo(a)}vo(a){let b={streamToken:this.lastStreamToken,writes:a.map(a=>ci(this.O,a))};this.fo(b)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Datastore and its related methods are a wrapper around the external Google
 * Cloud Datastore grpc API, which provides an interface that is more convenient
 * for the rest of the client SDK architecture to consume.
 */ /**
 * An implementation of Datastore that exposes additional state for internal
 * consumption.
 */ class eV extends class{}{constructor(a,b,c,d){super(),this.authCredentials=a,this.appCheckCredentials=b,this.eo=c,this.O=d,this.Co=!1}No(){if(this.Co)throw new w(v.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(a,b,c){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([d,e])=>this.eo.Mr(a,b,c,d,e)).catch(a=>{throw"FirebaseError"===a.name?(a.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new w(v.UNKNOWN,a.toString())})}Lr(a,b,c){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([d,e])=>this.eo.Lr(a,b,c,d,e)).catch(a=>{throw"FirebaseError"===a.name?(a.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new w(v.UNKNOWN,a.toString())})}terminate(){this.Co=!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eW{constructor(a,b,c,d,e){this.localStore=a,this.datastore=b,this.asyncQueue=c,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=e,this.jo.mr(a=>{c.enqueueAndForget(async()=>{e3(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(a){var b;let c=b=a;c.Ko.add(4),await eY(c),c.Qo.set("Unknown"),c.Ko.delete(4),await eX(c)}(this))})}),this.Qo=new class{constructor(a,b){this.asyncQueue=a,this.onlineStateHandler=b,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){0===this.xo&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve())))}Bo(a){"Online"===this.state?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo(`Connection failed 1 times. Most recent error: ${a.toString()}`),this.$o("Offline")))}set(a){this.Lo(),this.xo=0,"Online"===a&&(this.Oo=!1),this.$o(a)}$o(a){a!==this.state&&(this.state=a,this.onlineStateHandler(a))}Fo(a){let b=`Could not reach Cloud Firestore backend. ${a}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(r(b),this.Oo=!1):q("OnlineStateTracker",b)}Lo(){null!==this.ko&&(this.ko.cancel(),this.ko=null)}}(c,d)}}async function eX(a){if(e3(a))for(let b of a.Go)await b(!0)}async function eY(a){for(let b of a.Go)await b(!1)}function eZ(a,b){var c;let d=c=a;d.qo.has(b.targetId)||(d.qo.set(b.targetId,b),e2(d)?e1(d):fl(d).co()&&e_(d,b))}function e$(a,b){var c;let d=c=a,e=fl(d);d.qo.delete(b),e.co()&&e0(d,b),0===d.qo.size&&(e.co()?e.ho():e3(d)&&d.Qo.set("Unknown"))}function e_(a,b){a.Wo.Z(b.targetId),fl(a).Ao(b)}function e0(a,b){a.Wo.Z(b),fl(a).Ro(b)}function e1(a){a.Wo=new b_({getRemoteKeysForTarget:b=>a.remoteSyncer.getRemoteKeysForTarget(b),Tt:b=>a.qo.get(b)||null}),fl(a).start(),a.Qo.Mo()}function e2(a){return e3(a)&&!fl(a).oo()&&a.qo.size>0}function e3(a){var b;return 0===(b=a).Ko.size}function e4(a){a.Wo=void 0}async function e5(a){a.qo.forEach((b,c)=>{e_(a,b)})}async function e6(a,b){e4(a),e2(a)?(a.Qo.Bo(b),e1(a)):a.Qo.set("Unknown")}async function e7(a,b,c){if(a.Qo.set("Online"),b instanceof bZ&&2===b.state&&b.cause)try{await async function(a,b){let c=b.cause;for(let d of b.targetIds)a.qo.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.qo.delete(d),a.Wo.removeTarget(d))}(a,b)}catch(d){q("RemoteStore","Failed to remove targets %s: %s ",b.targetIds.join(","),d),await e8(a,d)}else if(b instanceof bX?a.Wo.ct(b):b instanceof bY?a.Wo._t(b):a.Wo.ht(b),!c.isEqual(M.min()))try{let e=await ef(a.localStore);c.compareTo(e)>=0&&await function(a,b){let c=a.Wo.yt(b);return c.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){let e=a.qo.get(d);e&&a.qo.set(d,e.withResumeToken(c.resumeToken,b))}}),c.targetMismatches.forEach(b=>{let c=a.qo.get(b);if(!c)return;a.qo.set(b,c.withResumeToken(V.EMPTY_BYTE_STRING,c.snapshotVersion)),e0(a,b);let d=new da(c.target,b,1,c.sequenceNumber);e_(a,d)}),a.remoteSyncer.applyRemoteEvent(c)}(a,c)}catch(f){q("RemoteStore","Failed to raise snapshot:",f),await e8(a,f)}}async function e8(a,b,c){if(!c0(b))throw b;a.Ko.add(1),await eY(a),a.Qo.set("Offline"),c||(c=()=>ef(a.localStore)),a.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await c(),a.Ko.delete(1),await eX(a)})}function e9(a,b){return b().catch(c=>e8(a,c,b))}async function fa(a){var b;let c=b=a,d=fm(c),e=c.Uo.length>0?c.Uo[c.Uo.length-1].batchId:-1;for(;fb(c);)try{let f=await eh(c.localStore,e);if(null===f){0===c.Uo.length&&d.ho();break}e=f.batchId,fc(c,f)}catch(g){await e8(c,g)}fd(c)&&fe(c)}function fb(a){return e3(a)&&a.Uo.length<10}function fc(a,b){a.Uo.push(b);let c=fm(a);c.co()&&c.bo&&c.vo(b.mutations)}function fd(a){return e3(a)&&!fm(a).oo()&&a.Uo.length>0}function fe(a){fm(a).start()}async function ff(a){fm(a).Do()}async function fg(a){let b=fm(a);for(let c of a.Uo)b.vo(c.mutations)}async function fh(a,b,c){let d=a.Uo.shift(),e=c8.from(d,b,c);await e9(a,()=>a.remoteSyncer.applySuccessfulWrite(e)),await fa(a)}async function fi(a,b){b&&fm(a).bo&&await async function(a,b){var c;if(bH(c=b.code)&&c!==v.ABORTED){let d=a.Uo.shift();fm(a).ao(),await e9(a,()=>a.remoteSyncer.rejectFailedWrite(d.batchId,b)),await fa(a)}}(a,b),fd(a)&&fe(a)}async function fj(a,b){var c;let d=c=a;d.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");let e=e3(d);d.Ko.add(3),await eY(d),e&&d.Qo.set("Unknown"),await d.remoteSyncer.handleCredentialChange(b),d.Ko.delete(3),await eX(d)}async function fk(a,b){var c;let d=c=a;b?(d.Ko.delete(2),await eX(d)):b||(d.Ko.add(2),await eY(d),d.Qo.set("Unknown"))}function fl(a){return a.zo||(a.zo=function(a,b,c){var d;let e=d=a;return e.No(),new eT(b,e.eo,e.authCredentials,e.appCheckCredentials,e.O,c)}(a.datastore,a.asyncQueue,{Pr:e5.bind(null,a),vr:e6.bind(null,a),To:e7.bind(null,a)}),a.Go.push(async b=>{b?(a.zo.ao(),e2(a)?e1(a):a.Qo.set("Unknown")):(await a.zo.stop(),e4(a))})),a.zo}function fm(a){return a.Ho||(a.Ho=function(a,b,c){var d;let e=d=a;return e.No(),new eU(b,e.eo,e.authCredentials,e.appCheckCredentials,e.O,c)}(a.datastore,a.asyncQueue,{Pr:ff.bind(null,a),vr:fi.bind(null,a),So:fg.bind(null,a),Vo:fh.bind(null,a)}),a.Go.push(async b=>{b?(a.Ho.ao(),await fa(a)):(await a.Ho.stop(),a.Uo.length>0&&(q("RemoteStore",`Stopping write stream with ${a.Uo.length} pending writes`),a.Uo=[]))})),a.Ho}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */ class fn{constructor(a,b,c,d,e){this.asyncQueue=a,this.timerId=b,this.targetTimeMs=c,this.op=d,this.removalCallback=e,this.deferred=new x,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}static createAndSchedule(a,b,c,d,e){let f=Date.now()+c,g=new fn(a,b,f,d,e);return g.start(c),g}start(a){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),a)}skipDelay(){return this.handleDelayElapsed()}cancel(a){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new w(v.CANCELLED,"Operation cancelled"+(a?": "+a:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(a=>this.deferred.resolve(a))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fo(a,b){if(r("AsyncQueue",`${b}: ${a}`),c0(a))return new w(v.UNAVAILABLE,`${b}: ${a}`);throw a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ class fp{constructor(a){this.comparator=a?(b,c)=>a(b,c)||ag.comparator(b.key,c.key):(a,b)=>ag.comparator(a.key,b.key),this.keyedMap=bQ,this.sortedSet=new bJ(this.comparator)}static emptySet(a){return new fp(a.comparator)}has(a){return null!=this.keyedMap.get(a)}get(a){return this.keyedMap.get(a)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(a){let b=this.keyedMap.get(a);return b?this.sortedSet.indexOf(b):-1}get size(){return this.sortedSet.size}forEach(a){this.sortedSet.inorderTraversal((b,c)=>(a(b),!1))}add(a){let b=this.delete(a.key);return b.copy(b.keyedMap.insert(a.key,a),b.sortedSet.insert(a,null))}delete(a){let b=this.get(a);return b?this.copy(this.keyedMap.remove(a),this.sortedSet.remove(b)):this}isEqual(a){if(!(a instanceof fp)||this.size!==a.size)return!1;let b=this.sortedSet.getIterator(),c=a.sortedSet.getIterator();for(;b.hasNext();){let d=b.getNext().key,e=c.getNext().key;if(!d.isEqual(e))return!1}return!0}toString(){let a=[];return this.forEach(b=>{a.push(b.toString())}),0===a.length?"DocumentSet ()":"DocumentSet (\n  "+a.join("  \n")+"\n)"}copy(a,b){let c=new fp;return c.comparator=this.comparator,c.keyedMap=a,c.sortedSet=b,c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */ class fq{constructor(){this.Jo=new bJ(ag.comparator)}track(a){let b=a.doc.key,c=this.Jo.get(b);c?0!==a.type&&3===c.type?this.Jo=this.Jo.insert(b,a):3===a.type&&1!==c.type?this.Jo=this.Jo.insert(b,{type:c.type,doc:a.doc}):2===a.type&&2===c.type?this.Jo=this.Jo.insert(b,{type:2,doc:a.doc}):2===a.type&&0===c.type?this.Jo=this.Jo.insert(b,{type:0,doc:a.doc}):1===a.type&&0===c.type?this.Jo=this.Jo.remove(b):1===a.type&&2===c.type?this.Jo=this.Jo.insert(b,{type:1,doc:c.doc}):0===a.type&&1===c.type?this.Jo=this.Jo.insert(b,{type:2,doc:a.doc}):u():this.Jo=this.Jo.insert(b,a)}Yo(){let a=[];return this.Jo.inorderTraversal((b,c)=>{a.push(c)}),a}}class fr{constructor(a,b,c,d,e,f,g,h){this.query=a,this.docs=b,this.oldDocs=c,this.docChanges=d,this.mutatedKeys=e,this.fromCache=f,this.syncStateChanged=g,this.excludesMetadataChanges=h}static fromInitialDocuments(a,b,c,d){let e=[];return b.forEach(a=>{e.push({type:0,doc:a})}),new fr(a,b,fp.emptySet(b),e,c,d,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(a){if(!(this.fromCache===a.fromCache&&this.syncStateChanged===a.syncStateChanged&&this.mutatedKeys.isEqual(a.mutatedKeys)&&a4(this.query,a.query)&&this.docs.isEqual(a.docs)&&this.oldDocs.isEqual(a.oldDocs)))return!1;let b=this.docChanges,c=a.docChanges;if(b.length!==c.length)return!1;for(let d=0;d<b.length;d++)if(b[d].type!==c[d].type||!b[d].doc.isEqual(c[d].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Holds the listeners and the last received ViewSnapshot for a query being
 * tracked by EventManager.
 */ class fs{constructor(){this.Xo=void 0,this.listeners=[]}}class ft{constructor(){this.queries=new dY(a=>a5(a),a4),this.onlineState="Unknown",this.Zo=new Set}}async function fu(a,b){var c;let d=c=a,e=b.query,f=!1,g=d.queries.get(e);if(g||(f=!0,g=new fs),f)try{g.Xo=await d.onListen(e)}catch(h){let i=fo(h,`Initialization of query '${a6(b.query)}' failed`);return void b.onError(i)}d.queries.set(e,g),g.listeners.push(b),b.tc(d.onlineState),g.Xo&&b.ec(g.Xo)&&fy(d)}async function fv(a,b){var c;let d=c=a,e=b.query,f=!1,g=d.queries.get(e);if(g){let h=g.listeners.indexOf(b);h>=0&&(g.listeners.splice(h,1),f=0===g.listeners.length)}if(f)return d.queries.delete(e),d.onUnlisten(e)}function fw(a,b){var c;let d=c=a,e=!1;for(let f of b){let g=f.query,h=d.queries.get(g);if(h){for(let i of h.listeners)i.ec(f)&&(e=!0);h.Xo=f}}e&&fy(d)}function fx(a,b,c){var d;let e=d=a,f=e.queries.get(b);if(f)for(let g of f.listeners)g.onError(c);e.queries.delete(b)}function fy(a){a.Zo.forEach(a=>{a.next()})}class fz{constructor(a,b,c){this.query=a,this.nc=b,this.sc=!1,this.ic=null,this.onlineState="Unknown",this.options=c||{}}ec(a){if(!this.options.includeMetadataChanges){let b=[];for(let c of a.docChanges)3!==c.type&&b.push(c);a=new fr(a.query,a.docs,a.oldDocs,b,a.mutatedKeys,a.fromCache,a.syncStateChanged,!0)}let d=!1;return this.sc?this.rc(a)&&(this.nc.next(a),d=!0):this.oc(a,this.onlineState)&&(this.cc(a),d=!0),this.ic=a,d}onError(a){this.nc.error(a)}tc(a){this.onlineState=a;let b=!1;return this.ic&&!this.sc&&this.oc(this.ic,a)&&(this.cc(this.ic),b=!0),b}oc(a,b){if(!a.fromCache)return!0;let c="Offline"!==b;return(!this.options.uc||!c)&&(!a.docs.isEmpty()||"Offline"===b)}rc(a){if(a.docChanges.length>0)return!0;let b=this.ic&&this.ic.hasPendingWrites!==a.hasPendingWrites;return!(!a.syncStateChanged&&!b)&& !0===this.options.includeMetadataChanges}cc(a){a=fr.fromInitialDocuments(a.query,a.docs,a.mutatedKeys,a.fromCache),this.sc=!0,this.nc.next(a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A complete element in the bundle stream, together with the byte length it
 * occupies in the stream.
 */ class fA{constructor(a,b){this.payload=a,this.byteLength=b}ac(){return"metadata"in this.payload}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Helper to convert objects from bundles to model objects in the SDK.
 */ class fB{constructor(a){this.O=a}Gs(a){return cb(this.O,a)}js(a){return a.metadata.exists?ch(this.O,a.document,!1):ax.newNoDocument(this.Gs(a.metadata.name),this.Qs(a.metadata.readTime))}Qs(a){return b7(a)}}/**
 * Returns a `LoadBundleTaskProgress` representing the progress that the loading
 * has succeeded.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fC{constructor(a){this.key=a}}class fD{constructor(a){this.key=a}}class fE{constructor(a,b){this.query=a,this.dc=b,this._c=null,this.current=!1,this.wc=bT(),this.mutatedKeys=bT(),this.mc=a8(a),this.gc=new fp(this.mc)}get yc(){return this.dc}Ic(a,b){let c=b?b.Ec:new fq,d=b?b.gc:this.gc,e=b?b.mutatedKeys:this.mutatedKeys,f=d,g=!1,h=aY(this.query)&&d.size===this.query.limit?d.last():null,i=aZ(this.query)&&d.size===this.query.limit?d.first():null;if(a.inorderTraversal((a,b)=>{let j=d.get(a),k=a7(this.query,b)?b:null,l=!!j&&this.mutatedKeys.has(j.key),m=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations),n=!1;j&&k?j.data.isEqual(k.data)?l!==m&&(c.track({type:3,doc:k}),n=!0):this.Tc(j,k)||(c.track({type:2,doc:k}),n=!0,(h&&this.mc(k,h)>0||i&&0>this.mc(k,i))&&(g=!0)):!j&&k?(c.track({type:0,doc:k}),n=!0):j&&!k&&(c.track({type:1,doc:j}),n=!0,(h||i)&&(g=!0)),n&&(k?(f=f.add(k),e=m?e.add(a):e.delete(a)):(f=f.delete(a),e=e.delete(a)))}),aY(this.query)||aZ(this.query))for(;f.size>this.query.limit;){let j=aY(this.query)?f.last():f.first();f=f.delete(j.key),e=e.delete(j.key),c.track({type:1,doc:j})}return{gc:f,Ec:c,ks:g,mutatedKeys:e}}Tc(a,b){return a.hasLocalMutations&&b.hasCommittedMutations&&!b.hasLocalMutations}applyChanges(a,b,c){let d=this.gc;this.gc=a.gc,this.mutatedKeys=a.mutatedKeys;let e=a.Ec.Yo();e.sort((a,b)=>(function(a,b){let c=a=>{switch(a){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return u()}};return c(a)-c(b)})(a.type,b.type)||this.mc(a.doc,b.doc)),this.Ac(c);let f=b?this.Rc():[],g=0===this.wc.size&&this.current?1:0,h=g!==this._c;return(this._c=g,0!==e.length||h)?{snapshot:new fr(this.query,a.gc,d,e,a.mutatedKeys,0===g,h,!1),Pc:f}:{Pc:f}}tc(a){return this.current&&"Offline"===a?(this.current=!1,this.applyChanges({gc:this.gc,Ec:new fq,mutatedKeys:this.mutatedKeys,ks:!1},!1)):{Pc:[]}}bc(a){return!this.dc.has(a)&&!!this.gc.has(a)&&!this.gc.get(a).hasLocalMutations}Ac(a){a&&(a.addedDocuments.forEach(a=>this.dc=this.dc.add(a)),a.modifiedDocuments.forEach(a=>{}),a.removedDocuments.forEach(a=>this.dc=this.dc.delete(a)),this.current=a.current)}Rc(){if(!this.current)return[];let a=this.wc;this.wc=bT(),this.gc.forEach(a=>{this.bc(a.key)&&(this.wc=this.wc.add(a.key))});let b=[];return a.forEach(a=>{this.wc.has(a)||b.push(new fD(a))}),this.wc.forEach(c=>{a.has(c)||b.push(new fC(c))}),b}vc(a){this.dc=a.Ks,this.wc=bT();let b=this.Ic(a.documents);return this.applyChanges(b,!0)}Vc(){return fr.fromInitialDocuments(this.query,this.gc,this.mutatedKeys,0===this._c)}}class fF{constructor(a,b,c){this.query=a,this.targetId=b,this.view=c}}class fG{constructor(a){this.key=a,this.Sc=!1}}class fH{constructor(a,b,c,d,e,f){this.localStore=a,this.remoteStore=b,this.eventManager=c,this.sharedClientState=d,this.currentUser=e,this.maxConcurrentLimboResolutions=f,this.Dc={},this.Cc=new dY(a=>a5(a),a4),this.Nc=new Map,this.xc=new Set,this.kc=new bJ(ag.comparator),this.Oc=new Map,this.Mc=new er,this.$c={},this.Fc=new Map,this.Bc=dP.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return!0===this.Lc}}async function fI(a,b){let c=f8(a),d,e,f=c.Cc.get(b);if(f)d=f.targetId,c.sharedClientState.addLocalQueryTarget(d),e=f.view.Vc();else{let g=await ei(c.localStore,a2(b));c.isPrimaryClient&&eZ(c.remoteStore,g);let h=c.sharedClientState.addLocalQueryTarget(g.targetId);e=await fJ(c,b,d=g.targetId,"current"===h)}return e}async function fJ(a,b,c,d){a.Uc=(b,c,d)=>(async function(a,b,c,d){let e=b.view.Ic(c);e.ks&&(e=await ek(a.localStore,b.query,!1).then(({documents:a})=>b.view.Ic(a,e)));let f=d&&d.targetChanges.get(b.targetId),g=b.view.applyChanges(e,a.isPrimaryClient,f);return fV(a,b.targetId,g.Pc),g.snapshot})(a,b,c,d);let e=await ek(a.localStore,b,!0),f=new fE(b,e.Ks),g=f.Ic(e.documents),h=bW.createSynthesizedTargetChangeForCurrentChange(c,d&&"Offline"!==a.onlineState),i=f.applyChanges(g,a.isPrimaryClient,h);fV(a,c,i.Pc);let j=new fF(b,c,f);return a.Cc.set(b,j),a.Nc.has(c)?a.Nc.get(c).push(b):a.Nc.set(c,[b]),i.snapshot}async function fK(a,b){var c;let d=c=a,e=d.Cc.get(b),f=d.Nc.get(e.targetId);if(f.length>1)return d.Nc.set(e.targetId,f.filter(a=>!a4(a,b))),void d.Cc.delete(b);d.isPrimaryClient?(d.sharedClientState.removeLocalQueryTarget(e.targetId),d.sharedClientState.isActiveQueryTarget(e.targetId)||await ej(d.localStore,e.targetId,!1).then(()=>{d.sharedClientState.clearQueryState(e.targetId),e$(d.remoteStore,e.targetId),fT(d,e.targetId)}).catch(dT)):(fT(d,e.targetId),await ej(d.localStore,e.targetId,!0))}async function fL(a,b,c){let d=f9(a);try{var e,f,g;let h=await function(a,b){var c;let d=c=a,e=L.now(),f=b.reduce((a,b)=>a.add(b.key),bT()),g;return d.persistence.runTransaction("Locally write mutations","readwrite",a=>d.Us.Es(a,f).next(c=>{g=c;let f=[];for(let h of b){let i=bw(h,g.get(h.key));null!=i&&f.push(new bA(h.key,i,aw(i.value.mapValue),br.exists(!0)))}return d.gs.addMutationBatch(a,e,f,b)})).then(a=>(a.applyToLocalDocumentSet(g),{batchId:a.batchId,changes:g}))}(d.localStore,b),i;d.sharedClientState.addPendingMutation(h.batchId),e=d,f=h.batchId,g=c,(i=e.$c[e.currentUser.toKey()])||(i=new bJ(I)),i=i.insert(f,g),e.$c[e.currentUser.toKey()]=i,await fY(d,h.changes),await fa(d.remoteStore)}catch(j){let k=fo(j,"Failed to persist write");c.reject(k)}}async function fM(a,b){var c;let d=c=a;try{let e=await function(a,b){var c;let d=c=a,e=b.snapshotVersion,f=d.Ms;return d.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{let c=d.Bs.newChangeBuffer({trackRemovals:!0});f=d.Ms;let g=[];b.targetChanges.forEach((c,h)=>{var i,j,k;let l=f.get(h);if(!l)return;g.push(d.Un.removeMatchingKeys(a,c.removedDocuments,h).next(()=>d.Un.addMatchingKeys(a,c.addedDocuments,h)));let m=l.withSequenceNumber(a.currentSequenceNumber);b.targetMismatches.has(h)?m=m.withResumeToken(V.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,e)),f=f.insert(h,m),i=l,j=m,k=c,(0===i.resumeToken.approximateByteSize()||j.snapshotVersion.toMicroseconds()-i.snapshotVersion.toMicroseconds()>=3e8||k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0)&&g.push(d.Un.updateTargetData(a,m))});let h=bP;if(b.documentUpdates.forEach(c=>{b.resolvedLimboDocuments.has(c)&&g.push(d.persistence.referenceDelegate.updateLimboDocument(a,c))}),g.push(eg(a,c,b.documentUpdates).next(a=>{h=a})),!e.isEqual(M.min())){let i=d.Un.getLastRemoteSnapshotVersion(a).next(b=>d.Un.setTargetsMetadata(a,a.currentSequenceNumber,e));g.push(i)}return cX.waitFor(g).next(()=>c.apply(a)).next(()=>d.Us.Ts(a,h)).next(()=>h)}).then(a=>(d.Ms=f,a))}(d.localStore,b);b.targetChanges.forEach((a,b)=>{var c,e,f;let g=d.Oc.get(b);g&&(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1||u(),a.addedDocuments.size>0?g.Sc=!0:a.modifiedDocuments.size>0?(e=g.Sc)||u():a.removedDocuments.size>0&&(g.Sc||u(),g.Sc=!1))}),await fY(d,e,b)}catch(f){await dT(f)}}function fN(a,b,c){var d;let e=d=a;if(e.isPrimaryClient&&0===c|| !e.isPrimaryClient&&1===c){let f=[];e.Cc.forEach((a,c)=>{let d=c.view.tc(b);d.snapshot&&f.push(d.snapshot)}),function(a,b){var c;let d=c=a;d.onlineState=b;let e=!1;d.queries.forEach((a,c)=>{for(let d of c.listeners)d.tc(b)&&(e=!0)}),e&&fy(d)}(e.eventManager,b),f.length&&e.Dc.To(f),e.onlineState=b,e.isPrimaryClient&&e.sharedClientState.setOnlineState(b)}}async function fO(a,b,c){var d;let e=d=a;e.sharedClientState.updateQueryState(b,"rejected",c);let f=e.Oc.get(b),g=f&&f.key;if(g){let h=new bJ(ag.comparator);h=h.insert(g,ax.newNoDocument(g,M.min()));let i=bT().add(g),j=new bV(M.min(),new Map,new bM(I),h,i);await fM(e,j),e.kc=e.kc.remove(g),e.Oc.delete(b),fX(e)}else await ej(e.localStore,b,!1).then(()=>fT(e,b,c)).catch(dT)}async function fP(a,b){var c;let d=c=a,e=b.batch.batchId;try{let f=await function(a,b){var c;let d=c=a;return d.persistence.runTransaction("Acknowledge batch","readwrite-primary",a=>{let c=b.batch.keys(),e=d.Bs.newChangeBuffer({trackRemovals:!0});return(function(a,b,c,d){let e=c.batch,f=e.keys(),g=cX.resolve();return f.forEach(a=>{g=g.next(()=>d.getEntry(b,a)).next(b=>{var f;let g=c.docVersions.get(a);null!==g||u(),0>b.version.compareTo(g)&&(e.applyToRemoteDocument(b,c),b.isValidDocument()&&(b.setReadTime(c.commitVersion),d.addEntry(b)))})}),g.next(()=>a.gs.removeMutationBatch(b,e))})(d,a,b,e).next(()=>e.apply(a)).next(()=>d.gs.performConsistencyCheck(a)).next(()=>d.Us.Es(a,c))})}(d.localStore,b);fS(d,e,null),fR(d,e),d.sharedClientState.updateMutationState(e,"acknowledged"),await fY(d,f)}catch(g){await dT(g)}}async function fQ(a,b,c){var d;let e=d=a;try{let f=await function(a,b){var c;let d=c=a;return d.persistence.runTransaction("Reject batch","readwrite-primary",a=>{let c;return d.gs.lookupMutationBatch(a,b).next(b=>{var e;return null!==b||u(),c=b.keys(),d.gs.removeMutationBatch(a,b)}).next(()=>d.gs.performConsistencyCheck(a)).next(()=>d.Us.Es(a,c))})}(e.localStore,b);fS(e,b,c),fR(e,b),e.sharedClientState.updateMutationState(b,"rejected",c),await fY(e,f)}catch(g){await dT(g)}}function fR(a,b){(a.Fc.get(b)||[]).forEach(a=>{a.resolve()}),a.Fc.delete(b)}function fS(a,b,c){var d;let e=d=a,f=e.$c[e.currentUser.toKey()];if(f){let g=f.get(b);g&&(c?g.reject(c):g.resolve(),f=f.remove(b)),e.$c[e.currentUser.toKey()]=f}}function fT(a,b,c=null){for(let d of(a.sharedClientState.removeLocalQueryTarget(b),a.Nc.get(b)))a.Cc.delete(d),c&&a.Dc.qc(d,c);a.Nc.delete(b),a.isPrimaryClient&&a.Mc.si(b).forEach(b=>{a.Mc.containsKey(b)||fU(a,b)})}function fU(a,b){a.xc.delete(b.path.canonicalString());let c=a.kc.get(b);null!==c&&(e$(a.remoteStore,c),a.kc=a.kc.remove(b),a.Oc.delete(c),fX(a))}function fV(a,b,c){for(let d of c)d instanceof fC?(a.Mc.addReference(d.key,b),fW(a,d)):d instanceof fD?(q("SyncEngine","Document no longer in limbo: "+d.key),a.Mc.removeReference(d.key,b),a.Mc.containsKey(d.key)||fU(a,d.key)):u()}function fW(a,b){let c=b.key,d=c.path.canonicalString();a.kc.get(c)||a.xc.has(d)||(q("SyncEngine","New document in limbo: "+c),a.xc.add(d),fX(a))}function fX(a){for(;a.xc.size>0&&a.kc.size<a.maxConcurrentLimboResolutions;){let b=a.xc.values().next().value;a.xc.delete(b);let c=new ag(R.fromString(b)),d=a.Bc.next();a.Oc.set(d,new fG(c)),a.kc=a.kc.insert(c,d),eZ(a.remoteStore,new da(a2(aX(c.path)),d,2,F.A))}}async function fY(a,b,c){var d;let e=d=a,f=[],g=[],h=[];e.Cc.isEmpty()||(e.Cc.forEach((a,d)=>{h.push(e.Uc(d,b,c).then(a=>{if(a){e.isPrimaryClient&&e.sharedClientState.updateQueryState(d.targetId,a.fromCache?"not-current":"current"),f.push(a);let b=ea.Ss(d.targetId,a);g.push(b)}}))}),await Promise.all(h),e.Dc.To(f),await async function(a,b){var c;let d=c=a;try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",a=>cX.forEach(b,b=>cX.forEach(b.vs,c=>d.persistence.referenceDelegate.addReference(a,b.targetId,c)).next(()=>cX.forEach(b.Vs,c=>d.persistence.referenceDelegate.removeReference(a,b.targetId,c)))))}catch(e){if(!c0(e))throw e;q("LocalStore","Failed to update sequence numbers: "+e)}for(let f of b){let g=f.targetId;if(!f.fromCache){let h=d.Ms.get(g),i=h.snapshotVersion,j=h.withLastLimboFreeSnapshotVersion(i);d.Ms=d.Ms.insert(g,j)}}}(e.localStore,g))}async function fZ(a,b){var c,d,e;let f=c=a;if(!f.currentUser.isEqual(b)){q("SyncEngine","User change. New user:",b.toKey());let g=await ee(f.localStore,b);f.currentUser=b,e="'waitForPendingWrites' promise is rejected due to a user change.",(d=f).Fc.forEach(a=>{a.forEach(a=>{a.reject(new w(v.CANCELLED,e))})}),d.Fc.clear(),f.sharedClientState.handleUserChange(b,g.removedBatchIds,g.addedBatchIds),await fY(f,g.qs)}}function f$(a,b){var c;let d=c=a,e=d.Oc.get(b);if(e&&e.Sc)return bT().add(e.key);{let f=bT(),g=d.Nc.get(b);if(!g)return f;for(let h of g){let i=d.Cc.get(h);f=f.unionWith(i.view.yc)}return f}}async function f_(a,b){var c;let d=c=a,e=await ek(d.localStore,b.query,!0),f=b.view.vc(e);return d.isPrimaryClient&&fV(d,b.targetId,f.Pc),f}async function f0(a){var b;let c=b=a;return em(c.localStore).then(a=>fY(c,a))}async function f1(a,b,c,d){var e;let f=e=a,g=await function(a,b){var c,d;let e=c=a,f=d=e.gs;return e.persistence.runTransaction("Lookup mutation documents","readonly",a=>f.Ge(a,b).next(b=>b?e.Us.Es(a,b):cX.resolve(null)))}(f.localStore,b);null!==g?("pending"===c?await fa(f.remoteStore):"acknowledged"===c||"rejected"===c?(fS(f,b,d||null),fR(f,b),function(a,b){var c,d;(d=(c=a).gs).Qe(b)}(f.localStore,b)):u(),await fY(f,g)):q("SyncEngine","Cannot apply mutation batch with id: "+b)}async function f2(a,b){var c;let d=c=a;if(f8(d),f9(d),!0===b&& !0!==d.Lc){let e=d.sharedClientState.getAllActiveQueryTargets(),f=await f3(d,e.toArray());for(let g of(d.Lc=!0,await fk(d.remoteStore,!0),f))eZ(d.remoteStore,g)}else if(!1===b&& !1!==d.Lc){let h=[],i=Promise.resolve();d.Nc.forEach((a,b)=>{d.sharedClientState.isLocalQueryTarget(b)?h.push(b):i=i.then(()=>(fT(d,b),ej(d.localStore,b,!0))),e$(d.remoteStore,b)}),await i,await f3(d,h),function(a){var b;let c=b=a;c.Oc.forEach((a,b)=>{e$(c.remoteStore,b)}),c.Mc.ii(),c.Oc=new Map,c.kc=new bJ(ag.comparator)}(d),d.Lc=!1,await fk(d.remoteStore,!1)}}async function f3(a,b,c){var d;let e=d=a,f=[],g=[];for(let h of b){let i,j=e.Nc.get(h);if(j&&0!==j.length)for(let k of(i=await ei(e.localStore,a2(j[0])),j)){let l=e.Cc.get(k),m=await f_(e,l);m.snapshot&&g.push(m.snapshot)}else{let n=await el(e.localStore,h);i=await ei(e.localStore,n),await fJ(e,f4(n),h,!1)}f.push(i)}return e.Dc.To(g),f}function f4(a){return aW(a.path,a.collectionGroup,a.orderBy,a.filters,a.limit,"F",a.startAt,a.endAt)}function f5(a){var b,c,d;let e=b=a;return(d=(c=e.localStore).persistence).ds()}async function f6(a,b,c,d){var e;let f=e=a;if(f.Lc)q("SyncEngine","Ignoring unexpected query state notification.");else if(f.Nc.has(b))switch(c){case"current":case"not-current":{let g=await em(f.localStore),h=bV.createSynthesizedRemoteEventForCurrentChange(b,"current"===c);await fY(f,g,h);break}case"rejected":await ej(f.localStore,b,!0),fT(f,b,d);break;default:u()}}async function f7(a,b,c){let d=f8(a);if(d.Lc){for(let e of b){if(d.Nc.has(e)){q("SyncEngine","Adding an already active target "+e);continue}let f=await el(d.localStore,e),g=await ei(d.localStore,f);await fJ(d,f4(f),g.targetId,!1),eZ(d.remoteStore,g)}for(let h of c)d.Nc.has(h)&&await ej(d.localStore,h,!1).then(()=>{e$(d.remoteStore,h),fT(d,h)}).catch(dT)}}function f8(a){var b;let c=b=a;return c.remoteStore.remoteSyncer.applyRemoteEvent=fM.bind(null,c),c.remoteStore.remoteSyncer.getRemoteKeysForTarget=f$.bind(null,c),c.remoteStore.remoteSyncer.rejectListen=fO.bind(null,c),c.Dc.To=fw.bind(null,c.eventManager),c.Dc.qc=fx.bind(null,c.eventManager),c}function f9(a){var b;let c=b=a;return c.remoteStore.remoteSyncer.applySuccessfulWrite=fP.bind(null,c),c.remoteStore.remoteSyncer.rejectFailedWrite=fQ.bind(null,c),c}class ga{constructor(){this.synchronizeTabs=!1}async initialize(a){this.O=eQ(a.databaseInfo.databaseId),this.sharedClientState=this.Gc(a),this.persistence=this.jc(a),await this.persistence.start(),this.gcScheduler=this.Qc(a),this.localStore=this.Wc(a)}Qc(a){return null}Wc(a){return ed(this.persistence,new eb,a.initialUser,this.O)}jc(a){return new ew(ey.bi,this.O)}Gc(a){return new eI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gb{async initialize(a,b){this.localStore||(this.localStore=a.localStore,this.sharedClientState=a.sharedClientState,this.datastore=this.createDatastore(b),this.remoteStore=this.createRemoteStore(b),this.eventManager=this.createEventManager(b),this.syncEngine=this.createSyncEngine(b,!a.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>fN(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=fZ.bind(null,this.syncEngine),await fk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(a){return new ft}createDatastore(a){var b,c,d,e,f;let g=eQ(a.databaseInfo.databaseId),h=(b=a.databaseInfo,new eN(b));return c=a.authCredentials,d=a.appCheckCredentials,e=h,f=g,new eV(c,d,e,f)}createRemoteStore(a){var b,c,d,e,f;return b=this.localStore,c=this.datastore,d=a.asyncQueue,e=a=>fN(this.syncEngine,a,0),f=eK.Vt()?new eK:new eJ,new eW(b,c,d,e,f)}createSyncEngine(a,b){return function(a,b,c,d,e,f,g){let h=new fH(a,b,c,d,e,f);return g&&(h.Lc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,a.initialUser,a.maxConcurrentLimboResolutions,b)}terminate(){return async function(a){var b;let c=b=a;q("RemoteStore","RemoteStore shutting down."),c.Ko.add(5),await eY(c),c.jo.shutdown(),c.Qo.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * On web, a `ReadableStream` is wrapped around by a `ByteStreamReader`.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /*
 * A wrapper implementation of Observer<T> that will dispatch events
 * asynchronously. To allow immediate silencing, a mute call is added which
 * causes events scheduled to no longer be raised.
 */ class gc{constructor(a){this.observer=a,this.muted=!1}next(a){this.observer.next&&this.Hc(this.observer.next,a)}error(a){this.observer.error?this.Hc(this.observer.error,a):console.error("Uncaught Error in snapshot listener:",a)}Jc(){this.muted=!0}Hc(a,b){this.muted||setTimeout(()=>{this.muted||a(b)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Internal transaction object responsible for accumulating the mutations to
 * perform and the base versions for any documents read.
 */ class gd{constructor(a){this.datastore=a,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(a){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new w(v.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");let b=await async function(a,b){var c;let d=c=a,e=ce(d.O)+"/documents",f={documents:b.map(a=>ca(d.O,a))},g=await d.Lr("BatchGetDocuments",e,f),h=new Map;g.forEach(a=>{var b,c;let e=(b=d.O,"found"in(c=a)?function(a,b){var c;b.found||u(),b.found.name,b.found.updateTime;let d=cb(a,b.found.name),e=b7(b.found.updateTime),f=new av({mapValue:{fields:b.found.fields}});return ax.newFoundDocument(d,e,f)}(b,c):"missing"in c?function(a,b){var c,d;b.missing||u(),!b.readTime&&u();let e=cb(a,b.missing),f=b7(b.readTime);return ax.newNoDocument(e,f)}(b,c):u());h.set(e.key.toString(),e)});let i=[];return b.forEach(a=>{var b;let c=h.get(a.toString());c||u(),i.push(c)}),i}(this.datastore,a);return b.forEach(a=>this.recordVersion(a)),b}set(a,b){this.write(b.toMutation(a,this.precondition(a))),this.writtenDocs.add(a.toString())}update(a,b){try{this.write(b.toMutation(a,this.preconditionForUpdate(a)))}catch(c){this.lastWriteError=c}this.writtenDocs.add(a.toString())}delete(a){this.write(new bE(a,this.precondition(a))),this.writtenDocs.add(a.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;let a=this.readVersions;this.mutations.forEach(b=>{a.delete(b.key.toString())}),a.forEach((a,b)=>{let c=ag.fromPath(b);this.mutations.push(new bF(c,this.precondition(c)))}),await async function(a,b){var c;let d=c=a,e=ce(d.O)+"/documents",f={writes:b.map(a=>ci(d.O,a))};await d.Mr("Commit",e,f)}(this.datastore,this.mutations),this.committed=!0}recordVersion(a){let b;if(a.isFoundDocument())b=a.version;else{if(!a.isNoDocument())throw u();b=M.min()}let c=this.readVersions.get(a.key.toString());if(c){if(!b.isEqual(c))throw new w(v.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(a.key.toString(),b)}precondition(a){let b=this.readVersions.get(a.toString());return!this.writtenDocs.has(a.toString())&&b?br.updateTime(b):br.none()}preconditionForUpdate(a){let b=this.readVersions.get(a.toString());if(!this.writtenDocs.has(a.toString())&&b){if(b.isEqual(M.min()))throw new w(v.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return br.updateTime(b)}return br.exists(!0)}write(a){this.ensureCommitNotCalled(),this.mutations.push(a)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * FirestoreClient is a top-level class that constructs and owns all of the
 * pieces of the client SDK architecture. It is responsible for creating the
 * async queue that is shared by all of the other components in the system.
 */ class ge{constructor(a,b,c,d){this.authCredentials=a,this.appCheckCredentials=b,this.asyncQueue=c,this.databaseInfo=d,this.user=m.UNAUTHENTICATED,this.clientId=H.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(c,async a=>{q("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(c,a=>(q("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(a){this.authCredentialListener=a}setAppCheckTokenChangeListener(a){this.appCheckCredentialListener=a}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let a=new x;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),a.resolve()}catch(b){let c=fo(b,"Failed to shutdown persistence");a.reject(c)}}),a.promise}}async function gf(a,b){a.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");let c=await a.getConfiguration();await b.initialize(c);let d=c.initialUser;a.setCredentialChangeListener(async a=>{d.isEqual(a)||(await ee(b.localStore,a),d=a)}),b.persistence.setDatabaseDeletedListener(()=>a.terminate()),a.offlineComponents=b}async function gg(a,b){a.asyncQueue.verifyOperationInProgress();let c=await gh(a);q("FirestoreClient","Initializing OnlineComponentProvider");let d=await a.getConfiguration();await b.initialize(c,d),a.setCredentialChangeListener(a=>fj(b.remoteStore,a)),a.setAppCheckTokenChangeListener((a,c)=>fj(b.remoteStore,c)),a.onlineComponents=b}async function gh(a){return a.offlineComponents||(q("FirestoreClient","Using default OfflineComponentProvider"),await gf(a,new ga)),a.offlineComponents}async function gi(a){return a.onlineComponents||(q("FirestoreClient","Using default OnlineComponentProvider"),await gg(a,new gb)),a.onlineComponents}async function gj(a){let b=await gi(a),c=b.eventManager;return c.onListen=fI.bind(null,b.syncEngine),c.onUnlisten=fK.bind(null,b.syncEngine),c}let gk=new Map;/**
 * An instance map that ensures only one Datastore exists per Firestore
 * instance.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function gl(a,b,c){if(!c)throw new w(v.INVALID_ARGUMENT,`Function ${a}() cannot be called with an empty ${b}.`)}function gm(a){if(!ag.isDocumentKey(a))throw new w(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${a} has ${a.length}.`)}function gn(a){if(ag.isDocumentKey(a))throw new w(v.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${a} has ${a.length}.`)}function go(a){if(void 0===a)return"undefined";if(null===a)return"null";if("string"==typeof a)return a.length>20&&(a=`${a.substring(0,20)}...`),JSON.stringify(a);if("number"==typeof a||"boolean"==typeof a)return""+a;if("object"==typeof a){if(a instanceof Array)return"an array";{var b;let c=(b=a).constructor?b.constructor.name:null;return c?`a custom ${c} object`:"an object"}}return"function"==typeof a?"a function":u()}function gp(a,b){if("_delegate"in a&&(a=a._delegate),!(a instanceof b)){if(b.name===a.constructor.name)throw new w(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let c=go(a);throw new w(v.INVALID_ARGUMENT,`Expected type '${b.name}', but it was: ${c}`)}}return a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // settings() defaults:
/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied `FirestoreSettings` object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */ class gq{constructor(a){var b;if(void 0===a.host){if(void 0!==a.ssl)throw new w(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=a.host,this.ssl=null===(b=a.ssl)|| void 0===b||b;if(this.credentials=a.credentials,this.ignoreUndefinedProperties=!!a.ignoreUndefinedProperties,void 0===a.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==a.cacheSizeBytes&&a.cacheSizeBytes<1048576)throw new w(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=a.cacheSizeBytes}this.experimentalForceLongPolling=!!a.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!a.experimentalAutoDetectLongPolling,this.useFetchStreams=!!a.useFetchStreams,function(a,b,c,d){if(!0===b&& !0===d)throw new w(v.INVALID_ARGUMENT,`${a} and ${c} cannot be used together.`)}("experimentalForceLongPolling",a.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",a.experimentalAutoDetectLongPolling)}isEqual(a){return this.host===a.host&&this.ssl===a.ssl&&this.credentials===a.credentials&&this.cacheSizeBytes===a.cacheSizeBytes&&this.experimentalForceLongPolling===a.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===a.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===a.ignoreUndefinedProperties&&this.useFetchStreams===a.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link getFirestore}.
 */ class gr{constructor(a,b,c){this._authCredentials=b,this._appCheckCredentials=c,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gq({}),this._settingsFrozen=!1,a instanceof ac?this._databaseId=a:(this._app=a,this._databaseId=function(a){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new w(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ac(a.options.projectId)}(a))}get app(){if(!this._app)throw new w(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(a){if(this._settingsFrozen)throw new w(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gq(a),void 0!==a.credentials&&(this._authCredentials=function(a){if(!a)return new z;switch(a.type){case"gapi":var b;let c=a.client;return("object"!=typeof c||null===c||!c.auth||!c.auth.getAuthHeaderValueForFirstParty)&&u(),new C(c,a.sessionIndex||"0",a.iamToken||null);case"provider":return a.client;default:throw new w(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(a.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(a){let b=gk.get(a);b&&(q("ComponentProvider","Removing Datastore"),gk.delete(a),b.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A `DocumentReference` refers to a document location in a Firestore database
 * and can be used to write, read, or listen to the location. The document at
 * the referenced location may or may not exist.
 */ class gs{constructor(a,b,c){this.converter=b,this._key=c,this.type="document",this.firestore=a}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gu(this.firestore,this.converter,this._key.path.popLast())}withConverter(a){return new gs(this.firestore,a,this._key)}}class gt{constructor(a,b,c){this.converter=b,this._query=c,this.type="query",this.firestore=a}withConverter(a){return new gt(this.firestore,a,this._query)}}class gu extends gt{constructor(a,b,c){super(a,b,aX(c)),this._path=c,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let a=this._path.popLast();return a.isEmpty()?null:new gs(this.firestore,null,new ag(a))}withConverter(a){return new gu(this.firestore,a,this._path)}}function gv(a,b,...c){if(a=(0,i.m9)(a),gl("collection","path",b),a instanceof gr){let d=R.fromString(b,...c);return gn(d),new gu(a,null,d)}{if(!(a instanceof gs||a instanceof gu))throw new w(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let e=a._path.child(R.fromString(b,...c));return gn(e),new gu(a.firestore,null,e)}}function gw(a,b,...c){if(a=(0,i.m9)(a),1===arguments.length&&(b=H.R()),gl("doc","path",b),a instanceof gr){let d=R.fromString(b,...c);return gm(d),new gs(a,null,new ag(d))}{if(!(a instanceof gs||a instanceof gu))throw new w(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let e=a._path.child(R.fromString(b,...c));return gm(e),new gs(a.firestore,a instanceof gu?a.converter:null,new ag(e))}}class gx extends gr{constructor(a,b,c){super(a,b,c),this.type="firestore",this._queue=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new eR(this,"async_queue_retry"),this.yu=()=>{let a=eP();a&&q("AsyncQueue","Visibility state changed to "+a.visibilityState),this.ro.Yr()};let a=eP();a&&"function"==typeof a.addEventListener&&a.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(a){this.enqueue(a)}enqueueAndForgetEvenWhileRestricted(a){this.pu(),this.Iu(a)}enterRestrictedMode(a){if(!this.fu){this.fu=!0,this.mu=a||!1;let b=eP();b&&"function"==typeof b.removeEventListener&&b.removeEventListener("visibilitychange",this.yu)}}enqueue(a){if(this.pu(),this.fu)return new Promise(()=>{});let b=new x;return this.Iu(()=>this.fu&&this.mu?Promise.resolve():(a().then(b.resolve,b.reject),b.promise)).then(()=>b.promise)}enqueueRetryable(a){this.enqueueAndForget(()=>(this.lu.push(a),this.Eu()))}async Eu(){if(0!==this.lu.length){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(a){if(!c0(a))throw a;q("AsyncQueue","Operation failed with retryable error: "+a)}this.lu.length>0&&this.ro.Hr(()=>this.Eu())}}Iu(a){let b=this.hu.then(()=>(this.wu=!0,a().catch(a=>{var b;this._u=a,this.wu=!1;let c,d=(c=(b=a).message||"",b.stack&&(c=b.stack.includes(b.message)?b.stack:b.message+"\n"+b.stack),c);throw r("INTERNAL UNHANDLED ERROR: ",d),a}).then(a=>(this.wu=!1,a))));return this.hu=b,b}enqueueAfterDelay(a,b,c){this.pu(),this.gu.indexOf(a)> -1&&(b=0);let d=fn.createAndSchedule(this,a,b,c,a=>this.Tu(a));return this.du.push(d),d}pu(){this._u&&u()}verifyOperationInProgress(){}async Au(){let a;do await (a=this.hu);while(a!==this.hu)}Ru(a){for(let b of this.du)if(b.timerId===a)return!0;return!1}Pu(a){return this.Au().then(()=>{for(let b of(this.du.sort((a,b)=>a.targetTimeMs-b.targetTimeMs),this.du))if(b.skipDelay(),"all"!==a&&b.timerId===a)break;return this.Au()})}bu(a){this.gu.push(a)}Tu(a){let b=this.du.indexOf(a);this.du.splice(b,1)}},this._persistenceKey="name"in a?a.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||gA(this),this._firestoreClient.terminate()}}function gy(a=(0,f.Mq)()){return(0,f.qX)(a,"firestore").getImmediate()}function gz(a){return a._firestoreClient||gA(a),a._firestoreClient.verifyNotTerminated(),a._firestoreClient}function gA(a){var b,c,d,e,f;let g=a._freezeSettings(),h=(c=a._databaseId,d=(null===(b=a._app)|| void 0===b?void 0:b.options.appId)||"",e=a._persistenceKey,f=g,new ab(c,d,e,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,f.useFetchStreams));a._firestoreClient=new ge(a._authCredentials,a._appCheckCredentials,a._queue,h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a
 * list of field names (referring to a nested field in the document).
 *
 * Create a `FieldPath` by providing field names. If more than one field
 * name is provided, the path will point to a nested field in a document.
 */ class gB{constructor(...a){for(let b=0;b<a.length;++b)if(0===a[b].length)throw new w(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new T(a)}isEqual(a){return this._internalPath.isEqual(a._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An immutable object representing an array of bytes.
 */ class gC{constructor(a){this._byteString=a}static fromBase64String(a){try{return new gC(V.fromBase64String(a))}catch(b){throw new w(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+b)}}static fromUint8Array(a){return new gC(V.fromUint8Array(a))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(a){return this._byteString.isEqual(a._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Sentinel values that can be used when writing document fields with `set()`
 * or `update()`.
 */ class gD{constructor(a){this._methodName=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An immutable object representing a geographic location in Firestore. The
 * location is represented as latitude/longitude pair.
 *
 * Latitude values are in the range of [-90, 90].
 * Longitude values are in the range of [-180, 180].
 */ class gE{constructor(a,b){if(!isFinite(a)||a< -90||a>90)throw new w(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+a);if(!isFinite(b)||b< -180||b>180)throw new w(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+b);this._lat=a,this._long=b}get latitude(){return this._lat}get longitude(){return this._long}isEqual(a){return this._lat===a._lat&&this._long===a._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(a){return I(this._lat,a._lat)||I(this._long,a._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let gF=/^__.*__$/;class gG{constructor(a,b,c){this.data=a,this.fieldMask=b,this.fieldTransforms=c}toMutation(a,b){return null!==this.fieldMask?new bA(a,this.data,this.fieldMask,b,this.fieldTransforms):new bz(a,this.data,b,this.fieldTransforms)}}class gH{constructor(a,b,c){this.data=a,this.fieldMask=b,this.fieldTransforms=c}toMutation(a,b){return new bA(a,this.data,this.fieldMask,b,this.fieldTransforms)}}function gI(a){switch(a){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw u()}}class gJ{constructor(a,b,c,d,e,f){this.settings=a,this.databaseId=b,this.O=c,this.ignoreUndefinedProperties=d,void 0===e&&this.vu(),this.fieldTransforms=e||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}Su(a){return new gJ(Object.assign(Object.assign({},this.settings),a),this.databaseId,this.O,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Du(a){var b;let c=null===(b=this.path)|| void 0===b?void 0:b.child(a),d=this.Su({path:c,Cu:!1});return d.Nu(a),d}xu(a){var b;let c=null===(b=this.path)|| void 0===b?void 0:b.child(a),d=this.Su({path:c,Cu:!1});return d.vu(),d}ku(a){return this.Su({path:void 0,Cu:!0})}Ou(a){return g$(a,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.$u)}contains(a){return void 0!==this.fieldMask.find(b=>a.isPrefixOf(b))|| void 0!==this.fieldTransforms.find(b=>a.isPrefixOf(b.field))}vu(){if(this.path)for(let a=0;a<this.path.length;a++)this.Nu(this.path.get(a))}Nu(a){if(0===a.length)throw this.Ou("Document fields must not be empty");if(gI(this.Vu)&&gF.test(a))throw this.Ou('Document fields cannot begin and end with "__"')}}class gK{constructor(a,b,c){this.databaseId=a,this.ignoreUndefinedProperties=b,this.O=c||eQ(a)}Fu(a,b,c,d=!1){return new gJ({Vu:a,methodName:b,$u:c,path:T.emptyPath(),Cu:!1,Mu:d},this.databaseId,this.O,this.ignoreUndefinedProperties)}}function gL(a){let b=a._freezeSettings(),c=eQ(a._databaseId);return new gK(a._databaseId,!!b.ignoreUndefinedProperties,c)}function gM(a,b,c,d,e,f={}){let g=a.Fu(f.merge||f.mergeFields?2:0,b,c,e);gW("Data must be an object, but it was:",g,d);let h=gU(d,g),i,j;if(f.merge)i=new U(g.fieldMask),j=g.fieldTransforms;else if(f.mergeFields){let k=[];for(let l of f.mergeFields){let m=gX(b,l,c);if(!g.contains(m))throw new w(v.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);g_(k,m)||k.push(m)}i=new U(k),j=g.fieldTransforms.filter(a=>i.covers(a.field))}else i=null,j=g.fieldTransforms;return new gG(new av(h),i,j)}class gN extends gD{_toFieldTransform(a){if(2!==a.Vu)throw 1===a.Vu?a.Ou(`${this._methodName}() can only appear at the top level of your update data`):a.Ou(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return a.fieldMask.push(a.path),null}isEqual(a){return a instanceof gN}}function gO(a,b,c){return new gJ({Vu:3,$u:b.settings.$u,methodName:a._methodName,Cu:c},b.databaseId,b.O,b.ignoreUndefinedProperties)}class gP extends gD{_toFieldTransform(a){return new bp(a.path,new bh)}isEqual(a){return a instanceof gP}}function gQ(a,b,c,d){let e=a.Fu(1,b,c);gW("Data must be an object, but it was:",e,d);let f=[],g=av.empty();O(d,(a,d)=>{let h=gZ(b,a,c);d=(0,i.m9)(d);let j=e.xu(h);if(d instanceof gN)f.push(h);else{let k=gT(d,j);null!=k&&(f.push(h),g.set(h,k))}});let h=new U(f);return new gH(g,h,e.fieldTransforms)}function gR(a,b,c,d,e,f){let g=a.Fu(1,b,c),h=[gX(b,d,c)],j=[e];if(f.length%2!=0)throw new w(v.INVALID_ARGUMENT,`Function ${b}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let k=0;k<f.length;k+=2)h.push(gX(b,f[k])),j.push(f[k+1]);let l=[],m=av.empty();for(let n=h.length-1;n>=0;--n)if(!g_(l,h[n])){let o=h[n],p=j[n];p=(0,i.m9)(p);let q=g.xu(o);if(p instanceof gN)l.push(o);else{let r=gT(p,q);null!=r&&(l.push(o),m.set(o,r))}}let s=new U(l);return new gH(m,s,g.fieldTransforms)}function gS(a,b,c,d=!1){return gT(c,a.Fu(d?4:3,b))}function gT(a,b){if(gV(a=(0,i.m9)(a)))return gW("Unsupported field value:",b,a),gU(a,b);if(a instanceof gD)return function(a,b){if(!gI(b.Vu))throw b.Ou(`${a._methodName}() can only be used with update() and set()`);if(!b.path)throw b.Ou(`${a._methodName}() is not currently supported inside arrays`);let c=a._toFieldTransform(b);c&&b.fieldTransforms.push(c)}(a,b),null;if(void 0===a&&b.ignoreUndefinedProperties)return null;if(b.path&&b.fieldMask.push(b.path),a instanceof Array){if(b.settings.Cu&&4!==b.Vu)throw b.Ou("Nested arrays are not supported");return function(a,b){let c=[],d=0;for(let e of a){let f=gT(e,b.ku(d));null==f&&(f={nullValue:"NULL_VALUE"}),c.push(f),d++}return{arrayValue:{values:c}}}(a,b)}return function(a,b){if(null===(a=(0,i.m9)(a)))return{nullValue:"NULL_VALUE"};if("number"==typeof a)return bc(b.O,a);if("boolean"==typeof a)return{booleanValue:a};if("string"==typeof a)return{stringValue:a};if(a instanceof Date){let c=L.fromDate(a);return{timestampValue:b5(b.O,c)}}if(a instanceof L){let d=new L(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:b5(b.O,d)}}if(a instanceof gE)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof gC)return{bytesValue:b6(b.O,a._byteString)};if(a instanceof gs){let e=b.databaseId,f=a.firestore._databaseId;if(!f.isEqual(e))throw b.Ou(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${e.projectId}/${e.database}`);return{referenceValue:b8(a.firestore._databaseId||b.databaseId,a._key.path)}}throw b.Ou(`Unsupported field value: ${go(a)}`)}(a,b)}function gU(a,b){let c={};return P(a)?b.path&&b.path.length>0&&b.fieldMask.push(b.path):O(a,(a,d)=>{let e=gT(d,b.Du(a));null!=e&&(c[a]=e)}),{mapValue:{fields:c}}}function gV(a){return!("object"!=typeof a||null===a||a instanceof Array||a instanceof Date||a instanceof L||a instanceof gE||a instanceof gC||a instanceof gs||a instanceof gD)}function gW(a,b,c){var d;if(!gV(c)||"object"!=typeof(d=c)||null===d||Object.getPrototypeOf(d)!==Object.prototype&&null!==Object.getPrototypeOf(d)){let e=go(c);throw"an object"===e?b.Ou(a+" a custom object"):b.Ou(a+" "+e)}}function gX(a,b,c){if((b=(0,i.m9)(b))instanceof gB)return b._internalPath;if("string"==typeof b)return gZ(a,b);throw g$("Field path arguments must be of type string or ",a,!1,void 0,c)}let gY=RegExp("[~\\*/\\[\\]]");function gZ(a,b,c){if(b.search(gY)>=0)throw g$(`Invalid field path (${b}). Paths must not contain '~', '*', '/', '[', or ']'`,a,!1,void 0,c);try{return new gB(...b.split("."))._internalPath}catch(d){throw g$(`Invalid field path (${b}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,a,!1,void 0,c)}}function g$(a,b,c,d,e){let f=d&&!d.isEmpty(),g=void 0!==e,h=`Function ${b}() called with invalid data`;c&&(h+=" (via `toFirestore()`)"),h+=". ";let i="";return(f||g)&&(i+=" (found",f&&(i+=` in field ${d}`),g&&(i+=` in document ${e}`),i+=")"),new w(v.INVALID_ARGUMENT,h+a+i)}function g_(a,b){return a.some(a=>a.isEqual(b))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */ class g0{constructor(a,b,c,d,e){this._firestore=a,this._userDataWriter=b,this._key=c,this._document=d,this._converter=e}get id(){return this._key.path.lastSegment()}get ref(){return new gs(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let a=new g1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(a)}return this._userDataWriter.convertValue(this._document.data.value)}}get(a){if(this._document){let b=this._document.data.field(g2("DocumentSnapshot.get",a));if(null!==b)return this._userDataWriter.convertValue(b)}}}class g1 extends g0{data(){return super.data()}}function g2(a,b){return"string"==typeof b?gZ(a,b):b instanceof gB?b._internalPath:b._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Metadata about a snapshot, describing the state of the snapshot.
 */ class g3{constructor(a,b){this.hasPendingWrites=a,this.fromCache=b}isEqual(a){return this.hasPendingWrites===a.hasPendingWrites&&this.fromCache===a.fromCache}}class g4 extends g0{constructor(a,b,c,d,e,f){super(a,b,c,d,f),this._firestore=a,this._firestoreImpl=a,this.metadata=e}exists(){return super.exists()}data(a={}){if(this._document){if(this._converter){let b=new g5(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(b,a)}return this._userDataWriter.convertValue(this._document.data.value,a.serverTimestamps)}}get(a,b={}){if(this._document){let c=this._document.data.field(g2("DocumentSnapshot.get",a));if(null!==c)return this._userDataWriter.convertValue(c,b.serverTimestamps)}}}class g5 extends g4{data(a={}){return super.data(a)}}class g6{constructor(a,b,c,d){this._firestore=a,this._userDataWriter=b,this._snapshot=d,this.metadata=new g3(d.hasPendingWrites,d.fromCache),this.query=c}get docs(){let a=[];return this.forEach(b=>a.push(b)),a}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(a,b){this._snapshot.docs.forEach(c=>{a.call(b,new g5(this._firestore,this._userDataWriter,c.key,c,new g3(this._snapshot.mutatedKeys.has(c.key),this._snapshot.fromCache),this.query.converter))})}docChanges(a={}){let b=!!a.includeMetadataChanges;if(b&&this._snapshot.excludesMetadataChanges)throw new w(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===b||(this._cachedChanges=function(a,b){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(b=>({type:"added",doc:new g5(a._firestore,a._userDataWriter,b.doc.key,b.doc,new g3(a._snapshot.mutatedKeys.has(b.doc.key),a._snapshot.fromCache),a.query.converter),oldIndex:-1,newIndex:c++}))}{let d=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(a=>b||3!==a.type).map(b=>{let c=new g5(a._firestore,a._userDataWriter,b.doc.key,b.doc,new g3(a._snapshot.mutatedKeys.has(b.doc.key),a._snapshot.fromCache),a.query.converter),e=-1,f=-1;return 0!==b.type&&(e=d.indexOf(b.doc.key),d=d.delete(b.doc.key)),1!==b.type&&(f=(d=d.add(b.doc)).indexOf(b.doc.key)),{type:g7(b.type),doc:c,oldIndex:e,newIndex:f}})}}(this,b),this._cachedChangesIncludeMetadataChanges=b),this._cachedChanges}}function g7(a){switch(a){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return u()}}class g8{}function g9(a,...b){for(let c of b)a=c._apply(a);return a}class ha extends g8{constructor(a,b,c){super(),this.Uu=a,this.qu=b,this.Ku=c,this.type="where"}_apply(a){let b=gL(a.firestore),c=function(a,b,c,d,e,f,g){let h;if(e.isKeyField()){if("array-contains"===f||"array-contains-any"===f)throw new w(v.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if("in"===f||"not-in"===f){hg(g,f);let i=[];for(let j of g)i.push(hf(d,a,j));h={arrayValue:{values:i}}}else h=hf(d,a,g)}else"in"!==f&&"not-in"!==f&&"array-contains-any"!==f||hg(g,f),h=gS(c,b,g,"in"===f||"not-in"===f);let k=aH.create(e,f,h);return function(a,b){if(b.S()){let c=a_(a);if(null!==c&&!c.isEqual(b.field))throw new w(v.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${c.toString()}' and '${b.field.toString()}'`);let d=a$(a);null!==d&&hh(a,b.field,d)}let e=function(a,b){for(let c of a.filters)if(b.indexOf(c.op)>=0)return c.op;return null}(a,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(b.op));if(null!==e)throw e===b.op?new w(v.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${b.op.toString()}' filter.`):new w(v.INVALID_ARGUMENT,`Invalid query. You cannot use '${b.op.toString()}' filters with '${e.toString()}' filters.`)}(a,k),k}(a._query,"where",b,a.firestore._databaseId,this.Uu,this.qu,this.Ku);return new gt(a.firestore,a.converter,function(a,b){let c=a.filters.concat([b]);return new aV(a.path,a.collectionGroup,a.explicitOrderBy.slice(),c,a.limit,a.limitType,a.startAt,a.endAt)}(a._query,c))}}function hb(a,b,c){let d=g2("where",a);return new ha(d,b,c)}class hc extends g8{constructor(a,b,c){super(),this.type=a,this.ju=b,this.Qu=c}_apply(a){return new gt(a.firestore,a.converter,a3(a._query,this.ju,this.Qu))}}function hd(a){return function a(b,c){if(c<=0)throw new w(v.INVALID_ARGUMENT,`Function ${b}() requires a positive number, but it was: ${c}.`)}("limit",a),new hc("limit",a,"F")}function he(a,b,c,d){if(c[0]=getModularInstance(c[0]),c[0]instanceof g0)return function(a,b,c,d,e){if(!d)throw new w(v.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);let f=[];for(let g of a1(a))if(g.field.isKeyField())f.push(ao(b,d.key));else{let h=d.data.field(g.field);if($(h))throw new w(v.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+g.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===h){let i=g.field.canonicalString();throw new w(v.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${i}' (used as the orderBy) does not exist.`)}f.push(h)}return new aQ(f,e)}(a._query,a.firestore._databaseId,b,c[0]._document,d);{let e=gL(a.firestore);return function(a,b,c,d,e,f){let g=a.explicitOrderBy;if(e.length>g.length)throw new w(v.INVALID_ARGUMENT,`Too many arguments provided to ${d}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let h=[];for(let i=0;i<e.length;i++){let j=e[i];if(g[i].field.isKeyField()){if("string"!=typeof j)throw new w(v.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${d}(), but got a ${typeof j}`);if(!a0(a)&& -1!==j.indexOf("/"))throw new w(v.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${d}() must be a plain document ID, but '${j}' contains a slash.`);let k=a.path.child(R.fromString(j));if(!ag.isDocumentKey(k))throw new w(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${d}() must result in a valid document path, but '${k}' is not because it contains an odd number of segments.`);let l=new ag(k);h.push(ao(b,l))}else{let m=gS(c,d,j);h.push(m)}}return new aQ(h,f)}(a._query,a.firestore._databaseId,e,b,c,d)}}function hf(a,b,c){if("string"==typeof(c=(0,i.m9)(c))){if(""===c)throw new w(v.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!a0(b)&& -1!==c.indexOf("/"))throw new w(v.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${c}' contains a '/' character.`);let d=b.path.child(R.fromString(c));if(!ag.isDocumentKey(d))throw new w(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${d}' is not because it has an odd number of segments (${d.length}).`);return ao(a,new ag(d))}if(c instanceof gs)return ao(a,c._key);throw new w(v.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${go(c)}.`)}function hg(a,b){if(!Array.isArray(a)||0===a.length)throw new w(v.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${b.toString()}' filters.`);if(a.length>10)throw new w(v.INVALID_ARGUMENT,`Invalid Query. '${b.toString()}' filters support a maximum of 10 elements in the value array.`)}function hh(a,b,c){if(!c.isEqual(b))throw new w(v.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${b.toString()}' and so you must also use '${b.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${c.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Converts Firestore's internal types to the JavaScript types that we expose
 * to the user.
 *
 * @internal
 */ class hi{convertValue(a,b="none"){switch(ai(a)){case 0:return null;case 1:return a.booleanValue;case 2:return Y(a.integerValue||a.doubleValue);case 3:return this.convertTimestamp(a.timestampValue);case 4:return this.convertServerTimestamp(a,b);case 5:return a.stringValue;case 6:return this.convertBytes(Z(a.bytesValue));case 7:return this.convertReference(a.referenceValue);case 8:return this.convertGeoPoint(a.geoPointValue);case 9:return this.convertArray(a.arrayValue,b);case 10:return this.convertObject(a.mapValue,b);default:throw u()}}convertObject(a,b){let c={};return O(a.fields,(a,d)=>{c[a]=this.convertValue(d,b)}),c}convertGeoPoint(a){return new gE(Y(a.latitude),Y(a.longitude))}convertArray(a,b){return(a.values||[]).map(a=>this.convertValue(a,b))}convertServerTimestamp(a,b){switch(b){case"previous":let c=_(a);return null==c?null:this.convertValue(c,b);case"estimate":return this.convertTimestamp(aa(a));default:return null}}convertTimestamp(a){let b=X(a);return new L(b.seconds,b.nanos)}convertDocumentKey(a,b){var c;let d=R.fromString(a);(c=ct(d))||u();let e=new ac(d.get(1),d.get(3)),f=new ag(d.popFirst(5));return e.isEqual(b)||r(`Document ${f} contains a document reference within a different database (${e.projectId}/${e.database}) which is not supported. It will be treated as a reference in the current database (${b.projectId}/${b.database}) instead.`),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Converts custom model object of type T into `DocumentData` by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to `DocumentData`
 * because we want to provide the user with a more specific error message if
 * their `set()` or fails due to invalid data originating from a `toFirestore()`
 * call.
 */ function hj(a,b,c){return a?c&&(c.merge||c.mergeFields)?a.toFirestore(b,c):a.toFirestore(b):b}function hk(a,b){if((a=getModularInstance(a)).firestore!==b)throw new w(v.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // TODO(mrschmidt) Consider using `BaseTransaction` as the base class in the
// legacy SDK.
/**
 * A reference to a transaction.
 *
 * The `Transaction` object passed to a transaction's `updateFunction` provides
 * the methods to read and write data within the transaction context. See
 * {@link runTransaction}.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Reads the document referred to by this `DocumentReference`.
 *
 * Note: `getDoc()` attempts to provide up-to-date data when possible by waiting
 * for data from the server, but it may return cached data or fail if you are
 * offline and the server cannot be reached. To specify this behavior, invoke
 * {@link getDocFromCache} or {@link getDocFromServer}.
 *
 * @param reference - The reference of the document to fetch.
 * @returns A Promise resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */ function hl(a){a=gp(a,gs);let b=gp(a.firestore,gx);return(function a(b,c,d={}){let e=new x;return b.asyncQueue.enqueueAndForget(async()=>(function(a,b,c,d,e){let f=new gc({next:f=>{b.enqueueAndForget(()=>fv(a,g));let h=f.docs.has(c);!h&&f.fromCache?e.reject(new w(v.UNAVAILABLE,"Failed to get document because the client is offline.")):h&&f.fromCache&&d&&"server"===d.source?e.reject(new w(v.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):e.resolve(f)},error:a=>e.reject(a)}),g=new fz(aX(c.path),f,{includeMetadataChanges:!0,uc:!0});return fu(a,g)})(await gj(b),b.asyncQueue,c,d,e)),e.promise})(gz(b),a._key).then(c=>hs(b,a,c))}class hm extends hi{constructor(a){super(),this.firestore=a}convertBytes(a){return new gC(a)}convertReference(a){let b=this.convertDocumentKey(a,this.firestore._databaseId);return new gs(this.firestore,null,b)}}function hn(a){a=gp(a,gt);let b=gp(a.firestore,gx),c=gz(b),d=new hm(b);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function a(b){if(aZ(b)&&0===b.explicitOrderBy.length)throw new w(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(a._query),(function a(b,c,d={}){let e=new x;return b.asyncQueue.enqueueAndForget(async()=>(function(a,b,c,d,e){let f=new gc({next:c=>{b.enqueueAndForget(()=>fv(a,g)),c.fromCache&&"server"===d.source?e.reject(new w(v.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):e.resolve(c)},error:a=>e.reject(a)}),g=new fz(c,f,{includeMetadataChanges:!0,uc:!0});return fu(a,g)})(await gj(b),b.asyncQueue,c,d,e)),e.promise})(c,a._query).then(c=>new g6(b,d,a,c)))}function ho(a,b,c){a=gp(a,gs);let d=gp(a.firestore,gx),e=hj(a.converter,b,c);return hr(d,[gM(gL(d),"setDoc",a._key,e,null!==a.converter,c).toMutation(a._key,br.none())])}function hp(a,b,c,...d){a=gp(a,gs);let e=gp(a.firestore,gx),f=gL(e),g;return g="string"==typeof(b=(0,i.m9)(b))||b instanceof gB?gR(f,"updateDoc",a._key,b,c,d):gQ(f,"updateDoc",a._key,b),hr(e,[g.toMutation(a._key,br.exists(!0))])}function hq(a){return hr(gp(a.firestore,gx),[new bE(a._key,br.none())])}function hr(a,b){return function(a,b){let c=new x;return a.asyncQueue.enqueueAndForget(async()=>{var d;return fL(await (d=a,gi(d).then(a=>a.syncEngine)),b,c)}),c.promise}(gz(a),b)}function hs(a,b,c){let d=c.docs.get(b._key),e=new hm(a);return new g4(a,e,b._key,d,new g3(c.hasPendingWrites,c.fromCache),b.converter)}function ht(){return new gP("serverTimestamp")}!function(a,b=!0){var c;n=f.Jn,(0,f.Xd)(new g.wA("firestore",(a,{options:c})=>{let d=a.getProvider("app").getImmediate(),e=new gx(d,new A(a.getProvider("auth-internal")),new E(a.getProvider("app-check-internal")));return c=Object.assign({useFetchStreams:b},c),e._setSettings(c),e},"PUBLIC")),(0,f.KN)(l,"3.4.5",void 0),(0,f.KN)(l,"3.4.5","esm2017")}()}}])
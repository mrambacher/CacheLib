"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2344],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=s(n),d=i,f=h["".concat(l,".").concat(d)]||h[d]||p[d]||a;return n?o.createElement(f,r(r({ref:t},u),{},{components:n})):o.createElement(f,r({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<a;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3980:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return h}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r=["components"],c={id:"Tuning_DRAM_cache_efficiency",title:"Tuning DRAM cache efficiency"},l=void 0,s={unversionedId:"Cache_Library_User_Guides/Tuning_DRAM_cache_efficiency",id:"Cache_Library_User_Guides/Tuning_DRAM_cache_efficiency",isDocsHomePage:!1,title:"Tuning DRAM cache efficiency",description:"Reduce fragmentation",source:"@site/docs/Cache_Library_User_Guides/Tuning_DRAM_cache_efficiency.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/Tuning_DRAM_cache_efficiency",permalink:"/docs/Cache_Library_User_Guides/Tuning_DRAM_cache_efficiency",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_User_Guides/Tuning_DRAM_cache_efficiency.md",version:"current",frontMatter:{id:"Tuning_DRAM_cache_efficiency",title:"Tuning DRAM cache efficiency"},sidebar:"userguideSidebar",previous:{title:"Structured Cache",permalink:"/docs/Cache_Library_User_Guides/Structured_Cache"},next:{title:"CacheLib configs",permalink:"/docs/Cache_Library_User_Guides/CacheLib_configs"}},u=[{value:"Reduce fragmentation",id:"reduce-fragmentation",children:[]},{value:"Configure TTL reaper",id:"configure-ttl-reaper",children:[]},{value:"Enable pool rebalancing",id:"enable-pool-rebalancing",children:[]},{value:"Avoid copying from cache",id:"avoid-copying-from-cache",children:[]},{value:"Tune eviction policy",id:"tune-eviction-policy",children:[]},{value:"Reduce lock contention",id:"reduce-lock-contention",children:[]}],p={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"reduce-fragmentation"},"Reduce fragmentation"),(0,a.kt)("p",null,"When you use cachelib to allocate memory from cache, you get a piece of memory rounded up to the closest allocation size in the cache. This can lead to wastage of memory (e.g., if you allocate 60 bytes, you get  memory from the 80-byte allocation class; 20 bytes is wasted). Typically, once this grows beyond 5%, there is an opportunity to reduce the fragmentation and increase the usable cache size by tuning the internal allocation sizes."),(0,a.kt)("p",null,"To estimate the current fragmentation size, use CacheStat::fragmentationSize to get the current fragmentation bytes and see if the overall volume is more than 5% of your cache size. You can find out the fragmentation per pool by calling PoolStats::totalFragmentation()."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note that changing allocation sizes would need the cache to be dropped if you have cache persistence enabled.")),(0,a.kt)("h2",{id:"configure-ttl-reaper"},"Configure TTL reaper"),(0,a.kt)("p",null,"If you have enabled TTL for your objects, reaping them as soon as they expire would free up the space for other objects that can benefit from more cache space. If you don\u2019t pass a TTL to ",(0,a.kt)("inlineCode",{parentName:"p"},"allocate()")," and you don\u2019t think you have a notion of TTL, you can ignore this."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Remediation"),": Please follow the instructions on ",(0,a.kt)("a",{parentName:"p",href:"ttl_reaper/"},"time to live on item")," to turn on the reaper. If you have a reaper already and don\u2019t have the ",(0,a.kt)("inlineCode",{parentName:"p"},"slabWalk")," mode enabled, enabling it would speed up the reaping of the expired items."),(0,a.kt)("h2",{id:"enable-pool-rebalancing"},"Enable pool rebalancing"),(0,a.kt)("p",null,"If your objects are of different sizes, their relative memory footprint in the cache might be suboptimal. For example, you might have too many of the large objects hogging space or certain sized objects getting evicted faster than the other. These can lead to suboptimal hit ratios. Turning on pool rebalancing can help in this."),(0,a.kt)("p",null,"There isn\u2019t an easy way to tell if this is causing regressions; the easiest way is to experiment on a small test environment with a few ",(0,a.kt)("a",{parentName:"p",href:"pool_rebalance_strategy/#picking-a-strategy"},"options")," offered by cachelib. Tuning this often results in improvements to hit ratio."),(0,a.kt)("h2",{id:"avoid-copying-from-cache"},"Avoid copying from cache"),(0,a.kt)("p",null,"If your mode of operation to access the cache is to copy from cache to deserialize or send out of the network, you can usually avoid the copy by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemHandle")," to the appropriate places. For example, if you read from the cache and copy into Thrift reply, you can avoid the copy by converting the ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemHandle")," into an ",(0,a.kt)("inlineCode",{parentName:"p"},"IOBuf"),". Similarly, if you copy to deserialize, you can avoid this by deserializing out of the ",(0,a.kt)("inlineCode",{parentName:"p"},"IOBuf")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemHandle"),"."),(0,a.kt)("p",null,"To estimate if this is an issue, collect a cpu profile to see if you spend more than a few % cycles on memcpy variants. If you do, follow some of the examples in ",(0,a.kt)("inlineCode",{parentName:"p"},"convertToIoBuf")," to try to accomplish similar things."),(0,a.kt)("h2",{id:"tune-eviction-policy"},"Tune eviction policy"),(0,a.kt)("p",null,"Both ",(0,a.kt)("inlineCode",{parentName:"p"},"LruAllocator")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Lru2QAllocator")," provide knobs to tune them that are mostly turned off. Trying these out could improve hit ratio. For example, if you are using LRU, trying to turn on mid-point insertion could help get objects that are accessed just once out of the cache faster. Similarly, trying the 2Q allocator captures more access patterns that LRU doesn\u2019t (e.g., 2Q can effectively evict items that have spiky accesses after the spike had ceased)."),(0,a.kt)("p",null,"For more details on the available knobs, see ",(0,a.kt)("a",{parentName:"p",href:"eviction_policy/"},"eviction policy"),"."),(0,a.kt)("h2",{id:"reduce-lock-contention"},"Reduce lock contention"),(0,a.kt)("p",null,"Cachelib has locks at several granularity to protect the internal data structures. If there is a contention, there are few options to reduce the contention depending on the type."),(0,a.kt)("p",null,"To estimate, collect a strobelight profile. If the strobelight profile indicates more than 4% spent on ",(0,a.kt)("inlineCode",{parentName:"p"},"allocate()")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"insertOrReplace()")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"find()"),", there is potential to look into this further."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Contention in ",(0,a.kt)("inlineCode",{parentName:"p"},"insertOrReplace"),"\nIf you see contention in ",(0,a.kt)("inlineCode",{parentName:"p"},"insertOrReplace")," resulting in ",(0,a.kt)("inlineCode",{parentName:"p"},"SharedMutex")," showing up beneath it, usually this is a result of misconfigured Hashtable. This can be tuned by adjusting the ",(0,a.kt)("a",{parentName:"p",href:"Configure_HashTable/#lockspower"},"lockPower"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Contention in ",(0,a.kt)("inlineCode",{parentName:"p"},"addChainedItem")," (or related functions)\nSimilar to above, we have a separate hash table to keep track of chained items. If you see contention here, adjust lockPower the same way as above.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Contention in LRU\nIf you notice contention under MMLru or MM2Q, it indicates you have quite a lot of activity (400k/sec+) concentrated around objects of a particular size. To remediate this, we have a few options. If the number of ",(0,a.kt)("inlineCode",{parentName:"p"},"allocate()")," calls per alloc size is too high, sharding the ",(0,a.kt)("inlineCode",{parentName:"p"},"allocate()")," calls by creating additional pools would help. If the contention is coming from ",(0,a.kt)("inlineCode",{parentName:"p"},"find()"),", adjusting the ",(0,a.kt)("inlineCode",{parentName:"p"},"lruRefreshThreshold")," or turning on ",(0,a.kt)("inlineCode",{parentName:"p"},"dynamicLruRefreshThreshold")," could help as documented in ",(0,a.kt)("a",{parentName:"p",href:"eviction_policy/"},"eviction policy"),"."))))}h.isMDXComponent=!0}}]);
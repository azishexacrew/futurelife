(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{3:function(e,t,o){"use strict";o.r(t);var a=o(6),r=o.n(a),s=o(45),n=o.n(s),p=(o(90),o(94)),i=o.n(p),d=o(114),l=o.n(d);o(125),o(126),o(127);const c=()=>{const e=document.querySelector('meta[name="csrf-token"]');if(!e)throw new Error("Unable to find CSRF token meta");const t=e.getAttribute("content");if(!t)throw new Error("Unable to get CSRF token value");return t};var m=(e,{method:t,data:o})=>{fetch(e,{method:t||"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(Object.assign(o,{authenticity_token:c()}))}).then((e=>e.json()))};const u=document.querySelector('[data-s3-uppy-photo="form"]'),h=u.dataset.s3UppyMaxNumberOfFiles,g=u.dataset.s3UppyNote,y=JSON.parse(u.dataset.s3UppyPhotos||"[]")||[],w=r()({autoProceed:0==y.length,restrictions:{maxFileSize:2097152,maxNumberOfFiles:h,allowedFileTypes:["image/png","image/jpeg","image/webp"]}});w.use(n.a,{inline:!0,replaceTargetContent:!0,showProgressDetails:!0,target:"#drag-drop-area",note:g,width:"100%",height:300,proudlyDisplayPoweredByUppy:!1,showRemoveButtonAfterComplete:!0,locale:{strings:{dropPasteImport:"Drag & drop, paste, or %{browse} to upload file",browse:"browse your computer"}}}).use(l.a,{target:n.a,modes:["picture"]}).use(i.a,{getUploadParameters(){const e=u.getAttribute("action"),t=Array.from(new FormData(u)).reduce(((e,t)=>({...e,[t[0]]:t[1]})),{});return Promise.resolve({method:"POST",url:e,fields:t})}}),w.on("complete",(({failed:e,successful:t})=>{Promise.all(t.map((({response:e})=>(e=>{const t=u.dataset.s3UppyObjectUuid,o=u.dataset.s3UppyPhotoType;return m("/api/photos",{data:{photo:{direct_url:e,photo_type:o,object_uuid:t}}})})(e.body.location)))).then((()=>{console.log("File uploaded and image created!")}))})),w.on("file-removed",((e,t)=>{var o;console.log("Remove file",e),e.meta.photoId&&(o=e.meta.photoId,m("/api/photos",{method:"DELETE",data:{photo:{id:o}}}))})),(async e=>{for(let t=0;t<e.length;t++){const o=e[t],a=await fetch(o.photo.url),r=await a.blob();w.addFile({name:o.photo.file_name,type:r.type,data:r,meta:{photoId:o.id},remote:!0})}w.getFiles().forEach((e=>{console.log(e.id),w.setFileState(e.id,{progress:{uploadComplete:!0,percentage:100,uploadStarted:Date.now()}})}))})(y)}}]);
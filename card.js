window.addEventListener('load', onloadHandler, false);  
           function onloadHandler() {  
             // get the canvas DOM element  
              var canvas = document.getElementById('canvas'),  
       ctx = canvas.getContext("2d"),  
       width = canvas.width,  
       height = canvas.height;  
               // data structures - generate initial blobs  
              var blobList = new BlobList();  
              blobList.blobs = [  
      new Blob(150, 160, 0, 90, "rgba(220,5,134,.9)"),  
      new Blob(67, 136, 0, 34, "rgba(145,200,46,.9)"),  
      new Blob(106, 74, 0, 22, "rgba(45,172,173,.9)"),  
      new Blob(114, 52, 0, 10, "rgba(238,172,78,.75)"),  
      new Blob(220, 82, 0, 56, "rgba(47,118,178,.9)"),  
      new Blob(250, 138, 0, 43, "rgba(248,172,78,.9)"),  
      new Blob(232, 232, 0, 25, "rgba(99,198,78,.9)"),  
      new Blob(256, 222, 0, 10, "rgba(140,45,136,.9)"),  
      new Blob(128, 244, 0, 36, "rgba(226,74,63,.9)"),  
      new Blob(64, 188, 0, 10, "rgba(255,203,78,.9)")  
   ];  
!function(e){"use strict";e(".demo1").on("click",function(){swal("Here's a message!")}),e(".demo2").on("click",function(){swal({title:"Auto close alert!",text:"I will close in 2 seconds.",timer:2e3})}),e(".demo3").on("click",function(){swal("Here's a message!","It's pretty, isn't it?")}),e(".demo4").on("click",function(){swal("Good job!","You clicked the button!","success")}),e(".demo5").on("click",function(){swal({title:"Are you sure?",text:"You will not be able to recover this imaginary file!",type:"warning",showCancelButton:!0,confirmButtonColor:"#DD6B55",confirmButtonText:"Yes, delete it!",closeOnConfirm:!1},function(){swal("Deleted!","Your imaginary file has been deleted!","success")})}),e(".demo6").on("click",function(){swal({title:"Are you sure?",text:"You will not be able to recover this imaginary file!",type:"warning",showCancelButton:!0,confirmButtonColor:"#DD6B55",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel plx!",closeOnConfirm:!1,closeOnCancel:!1},function(e){e?swal("Deleted!","Your imaginary file has been deleted!","success"):swal("Cancelled","Your imaginary file is safe :)","error")})}),e(".demo7").on("click",function(){swal({title:"Sweet!",text:"Here's a custom image.",imageUrl:"images/avatar.jpg"})}),e(".demo8").on("click",function(){swal({title:"HTML <small>Title</small>!",text:'A custom <span style="color:#F8BB86">html<span> message.',html:!0})}),e(".demo9").on("click",function(){swal({title:"An input!",text:"Write something interesting:",type:"input",showCancelButton:!0,closeOnConfirm:!1,animation:"slide-from-top",inputPlaceholder:"Write something"},function(e){return e===!1?!1:""===e?(swal.showInputError("You need to write something!"),!1):void swal("Nice!","You wrote: "+e,"success")})}),e(".demo10").on("click",function(){swal({title:"Ajax request example",text:"Submit to run ajax request",type:"info",showCancelButton:!0,closeOnConfirm:!1,showLoaderOnConfirm:!0},function(){setTimeout(function(){swal("Ajax request finished!")},2e3)})})}(jQuery);
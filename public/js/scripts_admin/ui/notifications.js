!function(e){"use strict";function t(){return n++,n===o.length&&(n=0),o[n]}var n=-1,o=["Your request has succeded!","Are you the six fingered man?","Inconceivable!","I do not think that means what you think it means.","Have fun storming the castle!"];e(".show-messenger").on("click",function(){var n=e("#message").val(),o=e("#messenger-type").val().toLowerCase(),a=e("#position").val();n||(n=t()),o||(o="error"),noty({theme:"app-noty",text:n,type:o,timeout:3e3,layout:a,closeWith:["button","click"],animation:{open:"animated fadeInDown",close:"animated fadeOutUp"}})})}(jQuery);
!function(){"use strict";var a=c3.generate({data:{columns:[["data1",30,200,100,400,150,250,50,100,250],["data2",50,20,10,40,15,25,50,30,40]]}});setTimeout(function(){a.load({columns:[["data1",230,190,300,500,300,400,300,200,250]]})},1e3),setTimeout(function(){a.load({columns:[["data3",130,150,200,300,200,100,150,160,100]]})},1500),setTimeout(function(){a.unload({ids:"data1"})},2e3),c3.generate({bindto:"#chart2",data:{columns:[["data1",30,200,100,400,150,250,50,100,250],["data2",130,100,140,200,150,50,120,80,60]],type:"bar"},bar:{width:{ratio:.5}}})}();
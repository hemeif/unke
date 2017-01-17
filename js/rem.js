
    var designWidth=750;
    function resize(){
        var Width=document.documentElement.clientWidth;
        var bili=(Width/designWidth)*100;
        document.documentElement.style.fontSize=bili+"px";
    }
    resize();

    window.onresize=resize;



$("a.link[href]").click(function(e){
    e.preventDefault();
    if (this.href) {
        var target = this.href;
        setTimeout(function(){
            window.location = target;
        }, 8000);
    }
});
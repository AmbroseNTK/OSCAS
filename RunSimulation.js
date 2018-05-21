
var $canvas = $('#main_canvas');

$('#btRun').on('click',()=>{
    switch(algorithm){
        case 'pr_fifo':
            $canvas.clearCanvas();
            $canvas.drawImage({
                source:'assets/textures/background/stage2.png',
                width:700,
                height:500,
                x: 700/2,
                y:500/2
            });           
        break;
        case 'pr_lru':
        break;
        case 'pr_sclock':
        break;
        case 'pr_optimal':
        break;
    }
});

$('#btStepByStep').on('click',()=>{

});
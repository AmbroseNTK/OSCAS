
var $canvas = $('#main_canvas');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


$('#btRun').on('click',async () => {
    switch (algorithm) {
        case 'pr_fifo':
            $canvas.clearCanvas();
           
            $('#debugInfo').text(' ');
            await sleep(3000);
            $('#debugInfo').text('Chào mừng đến với buổi hòa nhạc');
            await sleep(3000);
            $('#debugInfo').text('Chúng ta có ' + PR_numOfRefs + ' vị trí trên sân khấu');
            await sleep(3000);
            let sizeOfPos = screenWidth*0.9 / PR_numOfRefs;
            let offsetX = screenWidth*0.05;
            let currentArrow = 0;
            for(let i = 0; i<PR_numOfRefs;i++){
                while(true){
                    $canvas.clearCanvas();
                    $canvas.drawImage({
                        source: 'assets/textures/background/stage2.png',
                        width: screenWidth,
                        height: screenHeight,
                        x: screenWidth / 2,
                        y: screenHeight / 2
                    });
                    $canvas.drawImage({
                        source:'assets/textures/misc/arrow.png',
                        x:currentArrow,
                        y:500  
                    });
                    if(currentArrow >(i+1)*(sizeOfPos)){
                        $('#debugInfo').text('Đây là vị trí thứ ' + (i+1) + ' trên sân khấu');
                        await sleep(2000);
                        break;
                    }

                    currentArrow++;
                    await sleep(10);
                }
            }

            break;
        case 'pr_lru':
            break;
        case 'pr_sclock':
            break;
        case 'pr_optimal':
            break;
    }
});

$('#btStepByStep').on('click', () => {

});
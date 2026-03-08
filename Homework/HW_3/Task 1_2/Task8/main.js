let mix = [6, 'last', true, 'ping',19,false, 99,'duck', true, 'class']
for (let c = 0; c < mix.length; c++) {
    if(typeof mix[c] === 'number' ){
        console.log(mix[c]);
    }
}

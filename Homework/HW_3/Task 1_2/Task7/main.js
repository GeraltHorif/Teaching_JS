let mix = [6, 'last', true, 'ping',19,false, 99,'duck', true, 'class']
for (let a = 0; a< mix.length; a++) {
    if(typeof mix[a] === 'boolean'){
        console.log(`№${a} boolean ${mix[a]}`);
    }
}

let time = 15;
if (time >= 0 && time <= 15) {
    console.log('1');
}else if (time >= 16 && time <= 30) {
    console.log('2');
}else if (time >= 31 && time <= 45) {
    console.log('3');
}else if (time >= 46 && time <= 60) {
    console.log('4');
}else {
    console.log('Invalid value. Please enter a number between 0 and 59.');
}

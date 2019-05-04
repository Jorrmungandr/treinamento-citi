let colors = ['blue', 'red', 'green', 'yellow', 'purple'];
let i = 0;
document.querySelector('#color-changing').addEventListener('click', () => {
    console.log('hello');
    document.querySelector('#color-changing').style.backgroundColor = colors[i];
    i === colors.length -1 ? i = 0 : i ++;
    // i++;
})
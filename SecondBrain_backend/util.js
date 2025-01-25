 function random(length){
    const string = 'qwrtyuiop1234567890gfvcvbn';
    length = string.length;
    let ans = '';
    for(let i = 0;i<length;i++){
        ans+=string[Math.floor(Math.random()*length)]
    }
    return ans;
}

module.exports = random;
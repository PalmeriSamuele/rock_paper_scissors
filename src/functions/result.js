export function result(para1,para2){
    let ret ,win = 'YOU WIN', lose = 'YOU LOSE', nul = 'MATH NUL';
    if(para1 === para2){
        ret = nul;
    }
    else if(para1 == 'rock' && para2 == 'scissors'|| para1 == 'scissors' && para2 == 'paper'  || para1 == 'paper' && para2 == 'rock'){
        ret = win;
    }
    else{
        ret = lose;
    }
    return ret;

}
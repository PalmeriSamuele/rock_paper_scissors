function result(para1,para2){
    let ret = 'same',win = 'YOU WIN'
    if(para1 == para2){
        return 'same'
    }
    if(para1 == 'rock' && para2 == 'scissors'){
        ret = 'YOU WIN'
    }
    if(para1 == 'scissors' && para2 == 'paper'){
        ret = 'win'
    }
    if(para1 == 'paper' && para2 == 'rock'){
        ret = 'win'
    }else{
        ret = 'lose'
    }

}
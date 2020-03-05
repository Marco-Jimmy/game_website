let user_score = 0;
let comp_score = 0;
const rock_div = document.getElementById('r');
const scissors_div = document.getElementById('s');
const paper_div = document.getElementById('p');
const result_p = document.getElementById('result');
const user_score_span = document.getElementById('player_score');
const comp_score_span = document.getElementById('computer_score');


function draw(_choice) {
    const _choice_sup = letter2word(_choice).fontsize(3).sup()
    result_p.innerHTML = `It's a draw${_choice_sup}.`
}

function letter2word(_letter) {
    switch (_letter) {
        case 'r':
            return 'Rock';
        case 's':
            return 'Scissors'
        case 'p':
            return 'Paper'
    }
}

function win(_user, _comp) {
    const _user_choice = letter2word(_user)
    const _comp_choice = letter2word(_comp)
    const _user_sup = 'user'.fontsize(3).sup()
    const _comp_sup = 'comp'.fontsize(3).sup()
    result_p.innerHTML = `${_user_choice}${_user_sup} Beats ${_comp_choice}${_comp_sup}! You Win!`
    user_score++
    return
}

function lose(_user, _comp) {
    const _user_choice = letter2word(_user)
    const _comp_choice = letter2word(_comp)
    const _user_sup = 'user'.fontsize(3).sup()
    const _comp_sup = 'comp'.fontsize(3).sup()
    result_p.innerHTML = `${_user_choice}${_user_sup} Lose To ${_comp_choice}${_comp_sup}! You Lost...`
    comp_score++
    return
}

function game(user_choice) {
    const comp_choice = random_choice()
    const situation = user_choice + comp_choice
    const button = document.getElementById(user_choice)
    switch (situation) {
        case 'rs':
        case 'sp':
        case 'pr':
            win(user_choice, comp_choice);
            button.classList.add("green")
            setTimeout(() => button.classList.remove('green'), 1000)
            break;
        case 'sr':
        case 'ps':
        case 'rp':
            lose(user_choice, comp_choice);
            button.classList.add("red")
            setTimeout(() => button.classList.remove('red'), 1000)
            break;
        default:
            draw(user_choice);
            button.classList.add("grey")
            setTimeout(() => button.classList.remove('grey'), 1000)
    }
    comp_score_span.innerHTML = comp_score
    user_score_span.innerHTML = user_score
}

function random_choice() {
    const random_num = Math.random() * 3
    switch (Math.floor(random_num)) {
        case 0:
            return 'r';
        case 1:
            return 'p';
        case 2:
            return 's';
    }
}

function main() {
    rock_div.addEventListener('click', () => game('r'))
    scissors_div.addEventListener('click', () => game('s'))
    paper_div.addEventListener('click', () => game('p'))
}

main()
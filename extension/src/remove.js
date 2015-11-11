'use strict'

let bannedStrings = ['my top', 'my highest', 'top comment', 'highest rated', 'gold', 'downvote', 'highest voted',
    'kind stranger', 'my first', 'my inbox', 'blew up', 'overnight', 'front page', 'obligatory', 'gilded']

let findAndHide = (idx, val) => {
    let text = val.innerText.toLowerCase()
    if (text.substr(0, 4) === 'edit') {
        if (_.find(bannedStrings, (str) => {
            return text.indexOf(str) !== -1
        })) {
            $(val).hide()
        }
    }
}

let $comments = $('.commentarea .usertext-body > .md > p')
$comments.each(findAndHide)

let $op = $('.entry .expando .md > p')
$op.each(findAndHide)

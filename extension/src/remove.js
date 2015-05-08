var bannedStrings = ['my top', 'my highest', 'top comment', 'highest rated', 'gold', 'downvote', 'downvotes',
    'downvoted', 'highest voted', 'kind stranger', 'blew up', 'inbox', 'overnight', 'front page', 'obligatory'];
var $comments = $('.commentarea .usertext-body > .md');

$comments.each(function() {
    // split out comment by blocks
    var text = $(this).text().trim().split("\n");
    var finishHtml = '<p>' + text[0] + '<p>';
    if (text.length > 1) {
        $.each(text, function(idx, val) {
            // if this is an empty string, return;
            // if this is the first idx, return (since no one puts edits on the first line)
            if (idx === 0) {
                return;
            }
            // if edit contains a banned string, ignore it
            if (val.substr(0, 4).toLowerCase() === 'edit') {
                for (var i = 0; i < bannedStrings.length; i++) {
                    if (val.indexOf(bannedStrings[i]) > -1) {
                        return;
                    }
                }
            }
            // if edit contains no banned string, append back to the post
            finishHtml = finishHtml+ "\n" + "<p>" + text[idx] + "</p>";
        });
    }
    $(this).html(finishHtml);
});


function twitleriYukle() {
    var q = document.getElementById('sorgu').value;

    var url = 'http://search.twitter.com/search.json';
    var queryString = '?callback=?&rpp=' + '5' + '&q=' + q;
    var full = url + queryString;

    $('#sonuclar').empty();

    $.getJSON(full, function(data) {
        var tweets, le, current, i;
        var tweet_html;
        tweets = data.results;
        le = tweets.length;

        for (i = 0; i < le; i++) {
            current = tweets[i];
            console.log(current.text);

            var realUserName = '<strong>' + current.from_user_name + '</strong>';
            var userName = '<i>@' + current.from_user + '</i>';
            var profilImage = '<img src="' + current.profile_image_url + '"/>';
            var tweetText = '<div class="tweet">' + current.text + '<\/div>';
            var tweetDate = '<span>' + current.created_at + '</span>';

            tweet_html = '<div class="tweet_container">' +
                         '<table><tr>' +
                            '<td>' + profilImage + '</td>' +
                            '<td>' + realUserName + '&nbsp;' + userName + '&nbsp;(' + tweetDate + ')<br/>' + tweetText + '</td>' +
                         '</tr></table>' +

                         '</div>';


            $('#sonuclar').append(tweet_html);
        }
        

    });

    setTimeout(twitleriYukle, 10000);
}

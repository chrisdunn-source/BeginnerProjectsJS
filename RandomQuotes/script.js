function generate(){
    var quotes = {"— Usain Bolt" : '"Worrying gets you nowhere. If you turn up worrying about how you’re going to perform, you’ve already lost. Train hard, turn up, run your best and the rest will take care of itself."', "— Ronnie Lott" : '"If you can believe it, the mind can achieve it."', "— Derek Jeter" : '"There may be people that have more talent than you, but there’s no excuse for anyone to work harder than you do."', "— Adrian Peterson" : '"When you don’t give up, you cannot fail."', "— Cam Newton" : '"You cannot make progress with excuses."',"— David Goggins": '"Nobody cares what you did yesterday. What have you done today to better yourself?"'

    }
    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}
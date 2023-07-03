function getSubreddit(url) {
    let subreddit = url.split("/");

    subreddit = subreddit[subreddit.length - 2];

    return subreddit;
}

console.log(getSubreddit('https://www.reddit.com/t/valheim/'));
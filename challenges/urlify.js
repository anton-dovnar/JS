const urlify = (blogTitle) => {
    pattern = /[^\s\w]/g;
    blogTitle = blogTitle.toLowerCase().replace(pattern, '');
    return blogTitle.split(/\s+/).join('-');
};

console.log(urlify("Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."));

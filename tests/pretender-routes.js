const fixture = {
  "data": [
    {
      "type":"gif",
      "id":"ejEOLTWOy80qk",
      "slug":"stock-mustang-package-ejEOLTWOy80qk",
      "url":"https:\/\/giphy.com\/gifs\/stock-mustang-package-ejEOLTWOy80qk",
      "bitly_gif_url":"http:\/\/gph.is\/1ZWiD3X",
      "bitly_url":"http:\/\/gph.is\/1ZWiD3X",
      "embed_url":"https:\/\/giphy.com\/embed\/ejEOLTWOy80qk",
      "username":"",
      "source":"http:\/\/www.reddit.com\/r\/gifs\/comments\/434dwk\/mustang_stock_lighting_package\/",
      "rating":"g",
      "content_url":"",
      "source_tld":"www.reddit.com",
      "source_post_url":"http:\/\/www.reddit.com\/r\/gifs\/comments\/434dwk\/mustang_stock_lighting_package\/",
      "is_indexable":0,
      "import_datetime":"2016-01-28 17:48:28",
      "trending_datetime":"0000-00-00 00:00:00",
      "images":{
        "downsized_medium":{
          "url":"//:0",
          "width":"426",
          "height":"240",
          "size":"3314655"
        }
      }
    },
    {
      "type":"gif",
      "id":"ejEOLTWOy80qk2",
      "slug":"stock-mustang-package-ejEOLTWOy80qk",
      "url":"https:\/\/giphy.com\/gifs\/stock-mustang-package-ejEOLTWOy80qk",
      "bitly_gif_url":"http:\/\/gph.is\/1ZWiD3X",
      "bitly_url":"http:\/\/gph.is\/1ZWiD3X",
      "embed_url":"https:\/\/giphy.com\/embed\/ejEOLTWOy80qk",
      "username":"",
      "source":"http:\/\/www.reddit.com\/r\/gifs\/comments\/434dwk\/mustang_stock_lighting_package\/",
      "rating":"g",
      "content_url":"",
      "source_tld":"www.reddit.com",
      "source_post_url":"http:\/\/www.reddit.com\/r\/gifs\/comments\/434dwk\/mustang_stock_lighting_package\/",
      "is_indexable":0,
      "import_datetime":"2016-01-28 17:48:28",
      "trending_datetime":"0000-00-00 00:00:00",
      "images":{
        "downsized_medium":{
          "url":"//:0",
          "width":"426",
          "height":"240",
          "size":"3314655"
        }
      }
    },
    {
      "type":"gif",
      "id":"ejEOLTWOy80qk3",
      "slug":"stock-mustang-package-ejEOLTWOy80qk",
      "url":"https:\/\/giphy.com\/gifs\/stock-mustang-package-ejEOLTWOy80qk",
      "bitly_gif_url":"http:\/\/gph.is\/1ZWiD3X",
      "bitly_url":"http:\/\/gph.is\/1ZWiD3X",
      "embed_url":"https:\/\/giphy.com\/embed\/ejEOLTWOy80qk",
      "username":"",
      "source":"http:\/\/www.reddit.com\/r\/gifs\/comments\/434dwk\/mustang_stock_lighting_package\/",
      "rating":"g",
      "content_url":"",
      "source_tld":"www.reddit.com",
      "source_post_url":"http:\/\/www.reddit.com\/r\/gifs\/comments\/434dwk\/mustang_stock_lighting_package\/",
      "is_indexable":0,
      "import_datetime":"2016-01-28 17:48:28",
      "trending_datetime":"0000-00-00 00:00:00",
      "images":{
        "downsized_medium":{
          "url":"//:0",
          "width":"426",
          "height":"240",
          "size":"3314655"
        }
      }
    }
  ]
};

function pretenderRoutes() {
  this.get('http://api.giphy.com/v1/gifs/search', function(request) {
    return [
      200,
      { 'content-type': 'application/javascript' },
      JSON.stringify(fixture)
    ];
  });

  this.get('https://robdel12.auth0.com/user/ssodata/', function() {
    return [
      200,
      { 'content-type': 'application/javascript' },
      JSON.stringify({sso: false})
    ];
  });
}

export default pretenderRoutes;

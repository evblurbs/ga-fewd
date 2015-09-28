// This is an example server file I used for evblurbs.io.
// The FEWD Course Website is served from a subdomain (i.e. seafewd5.evblurbs.io).
// If you don't want subdomains, you'd have to modify the file accordingly.
// The reference to the 'sea-fewd' folder below is a git submodule for this
// repository. In my example, the server.js file that is used lives outside
// of this repository, as it also handles routes for my personal website.

var path = require('path'),
    fs = require('fs'),
    url = require('url'),
    http = require('http'),
    https = require('https'),
    connect = require('connect'),
    vhost = require('vhost');
    open = require('open'),
    Mustache = require('mustache'),
    glob = require('glob'),
    md = require(__dirname + '/node_modules/reveal-md/node_modules/reveal.js/plugin/markdown/markdown'),
    exec = require('child_process').exec,
    githubUtils = require('./sea-fewd/app/utils/githubUtils'),
    compression = require('compression'),
    serverStatic = require('serve-static'),
    appConstants = require('./sea-fewd/app/constants/appConstants');

// github method to get auth token
var githubOAuth = require('github-oauth')({
  githubClient: '23d58dfc41b20cb6f224',
  githubSecret: 'ee70b07f7b1587057e781e906739f3c515982cd4',
  baseURL: 'http://seafewd5.evblurbs.io',
  loginURI: '/login',
  callbackURI: '/callback',
  scope: appConstants.GITHUB_API_SCOPE
});

githubOAuth.on('error', function(err) {
  console.error('there was a login error', err);
});

githubOAuth.on('token', function(token, serverResponse) {
  process.stdout.write('TOKEN RECEIVED');
  githubUtils.login(token.access_token, serverResponse);
});




// reveal-md code to render reveal template
// from md files
var serverBasePath = path.resolve(__dirname);

var opts = {
    printMode: false,
    host: 'localhost',
    port: 80,
    revealBasePath: __dirname + '/node_modules/reveal-md/node_modules/reveal.js/',
    template: fs.readFileSync(serverBasePath + '/sea-fewd/dist/template/reveal.html').toString(),
    theme: 'css/theme/beige.css',
    separator: '^(\r\n?|\n)---(\r\n?|\n)$',
    verticalSeparator: '^(\r\n?|\n)----(\r\n?|\n)$',
    revealOptions: {}
};

// need to fix print functionality on reveal later
var printPluginPath = serverBasePath + '/node_modules/reveal.js/plugin/print-pdf/print-pdf.js';


var renderMarkdownAsSlides = function(req, res) {

    var markdown = '',
        markdownPath,
        fsPath;

    // Look for print-pdf option
    if (~req.url.indexOf('?print-pdf')) {
      req.url = req.url.replace('?print-pdf','');
    }

    markdownPath = path.resolve(__dirname + '/sea-fewd/dist/slides/' + req.url);
    process.stdout.write('markdown path: ');
    process.stdout.write(markdownPath);
    fsPath = markdownPath.replace(/(\?.*)$/, '');
    process.stdout.write(' fs path: ');
    process.stdout.write(fsPath);
    if(fs.existsSync(fsPath)) {
        markdown = fs.readFileSync(fsPath).toString();
        render(res, markdown);
    } else {
        var parsedUrl = url.parse(req.url.replace(/^\//, ''));
        if(parsedUrl) {
            (parsedUrl.protocol === 'https:' ? https : http).get(parsedUrl.href, function(response) {
                response.on('data', function(chunk) {
                    markdown += chunk;
                });
                response.on('end', function() {
                    render(res, markdown);
                });
            }).on('error', function(e) {
                console.log('Problem with path/url: ' + e.message);
                render(res, e.message);
            });
        }
    }
};

var render = function(res, markdown) {
    var slides = md.slidify(markdown, opts);

    res.end(Mustache.to_html(opts.template, {
        theme: opts.theme,
        slides: slides,
        options: JSON.stringify(opts.revealOptions, null, 2)
    }));
};

// server paths
var evblurbs = connect();
var seafewd = connect();

// get reveal files from reveal-md module
['css', 'js', 'images', 'plugin', 'lib'].forEach(function(dir) {
  seafewd.use('/' + dir, serverStatic(opts.revealBasePath + dir));
});

evblurbs.use(serverStatic(__dirname + "/dist"));
seafewd.use(serverStatic(__dirname + "/sea-fewd/dist"));

var app = connect();
app.use(compression());
app.use(vhost('seafewd5.evblurbs.io', seafewd));
app.use(vhost('evblurbs.io', evblurbs));
app.use(vhost('www.evblurbs.io', evblurbs));

http.createServer(function(req, res) {
  if (req.url.match(/login/)) {
    return githubOAuth.login(req, res)
  }
  else if (req.url.match(/callback/)) {
    return githubOAuth.callback(req, res)
  }
  else if (req.url.match(/(\w+\.md)$/)) {
    return renderMarkdownAsSlides(req, res)
  } else {
    return app(req, res)
  }
}).listen(process.env.PORT || 80);

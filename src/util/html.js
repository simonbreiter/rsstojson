const html = (css, app) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="description" content="API to convert RSS to JSON">
        <meta name="keywords" content="RSS, JSON, Online, API, RSS to JSON, Simon Breiter">
        <meta name="author" content="Simon Breiter">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="application-name" content="RSS to JSON"/>
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="/img/mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="/img/mstile-70x70.png" />
        <meta name="msapplication-square150x150logo" content="/img/mstile-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="/img/mstile-310x150.png" />
        <meta name="msapplication-square310x310logo" content="/img/mstile-310x310.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/img/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/img/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/img/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/img/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/img/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/img/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/img/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/img/apple-touch-icon-152x152.png" />
        <link rel="icon" type="image/png" href="/img/favicon-196x196.png" sizes="196x196" />
        <link rel="icon" type="image/png" href="/img/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="/img/favicon-128.png" sizes="128x128" />
        <title>RSS to JSON</title>
        ${css}
				<script>
					var WebFontConfig = {
						google: {
								families: ['Roboto:400,900']
						},
						timeout: 3000
					}
					;(function(d) {
						var wf = d.createElement('script'), s = d.scripts[0]
						wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'
						wf.async = true
						s.parentNode.insertBefore(wf, s)
					})(document)
				</script>
        <!-- Matomo -->
        <script type="text/javascript">
          var _paq = _paq || [];
          /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="//analytics.simonbreiter.com/";
            _paq.push(['setTrackerUrl', u+'piwik.php']);
            _paq.push(['setSiteId', '2']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
          })();
        </script>
        <!-- End Matomo Code -->
    </head>
    <body>
        <div id="app">${app}</div>
        <script src="js/client.js"></script>
    </body>
    </html>
  `

export default html

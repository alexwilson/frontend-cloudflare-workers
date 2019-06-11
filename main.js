addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * @param {String} the URL to redirect to
 * @returns {Response} A redirect-response
 */
function redirectTo(url) {
  return Response.redirect(url)
}

/**
 * @param {Request} request
 * @returns {Promise|Response} a response, or a promise resolving to a response
 */
function handleRequest(request) {
  const requestUrl = new URL(request.url)

  switch (requestUrl.host) {
    case 'antoligy.com':
    case 'ax.gy':
      return redirectTo(
        requestUrl.href.replace(requestUrl.host, 'alexwilson.tech')
      );
  };

  switch (requestUrl.pathname) {
    case '/cv': {
      return redirectTo(
        'https://docs.google.com/document/d/1SlrbctqUQlhBtODC8c12Qft66b8j69jV1CSVcrYqdq0/'
      )
    }
  }

  return fetch(request)
}

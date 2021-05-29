exports.handler = function(event, context) {
  console.log('called');
  if (event.httpMethod === 'GET') {
    return {
        statusCode: 200,
        body: `
          <h2>App Heading</h2>
          <p>Content from API</p>
        `
    };
  }
}
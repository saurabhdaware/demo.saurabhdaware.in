exports.handler = function(event, context) {
  return {
      statusCode: 200,
      body: `
        <h2>App Heading</h2>
        <p>Content from API</p>
      `
  };
}
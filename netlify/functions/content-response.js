exports.handler = async function(event, context) {
  return {
      statusCode: 200,
      body: `
        <h1>App Heading</h1>
        <p>Content from API</p>
      `
  };
}
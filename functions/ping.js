exports.handler = function(event, context) {
  console.log('called');
  return {
      statusCode: 200,
      body: JSON.stringify({message: "Working"})
  };
}
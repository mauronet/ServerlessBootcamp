const schema = {
  properties: {
    body: {
      type: 'object',
      properties: {
        title: {
          type: 'number',
        },
      },
      required: ['amount']
    },
  },
  required: ['body']
};

export default schema;
const gateway = require('./src/index');
const PORT = process.env.PORT || 9999;

gateway.listen(PORT);
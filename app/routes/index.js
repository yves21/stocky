const stockRoutes = require('./stock_routes');
module.exports = function(app, db) {
  stockRoutes(app, db);
  // Other route groups could go here, in the future
};

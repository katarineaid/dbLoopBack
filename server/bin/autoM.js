let app = require('../server');

/**
 * datasources - имя файла с конфигурацией подключения к базе данных (../server/datasources.js)
 * srv - название подключения в данном файле
 */

let dataSource = app.datasources.dbFRE;

dataSource.automigrate('Accounting_objects', function(err) {
  if (err) throw err;
  dataSource.disconnect();
});
dataSource.automigrate('Adviser', function(err) {
  if (err) throw err;
  dataSource.disconnect();
});
dataSource.automigrate('Basic_set_of_factors', function(err) {
  if (err) throw err;
  dataSource.disconnect();
});

dataSource.automigrate('Efficiency_evaluation', function(err) {
  if (err) throw err;
  dataSource.disconnect();
});
dataSource.automigrate('Expert', function(err) {
  if (err) throw err;
  dataSource.disconnect();
});
dataSource.automigrate('Gradation', function(err) {
  if (err) throw err;
  dataSource.disconnect();
});
dataSource.automigrate('Head', function(err) {
  if (err) throw err;
  dataSource.disconnect();
});
dataSource.automigrate('Legal_entities', function(err) {
  if (err) throw err;
  dataSource.disconnect();
});
dataSource.automigrate('Recording', function(err) {
  if (err) throw err;
  dataSource.disconnect();
});
dataSource.automigrate('Resolution', function(err) {
  if (err) throw err;
  dataSource.disconnect();
});
/*dataSource.automigrate('Survey', function(err) {
  if (err) throw err;
  dataSource.disconnect();
});
dataSource.automigrate('Survey_questionnaire', function(err) {
  if (err) throw err;
  dataSource.disconnect();
});
dataSource.automigrate('ValuesGradation', function(err) {
  if (err) throw err;
  dataSource.disconnect();
});
*/


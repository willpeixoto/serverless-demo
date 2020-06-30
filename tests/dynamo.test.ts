// import 'mocha'
// import * as chai from 'chai'
// import * as sinon from 'sinon'
// import * as aws from "aws-sdk";
// import * as mock  from "aws-sdk-mock";
// import { DynamoDB } from "aws-sdk";
// import * as assert from 'assert';


// describe('querying messages from dynamodb', function(){

//     before(() => {
//       // set up a mock call to DynamoDB
//       mock.mock('DynamoDB.DocumentClient', 'get', (params, callback) => {
//         console.log('Let us not call AWS DynamoDB and say we did.');
  
//         // return fake data
//         let fakeData = {
//           Item: {
//             Date: '2020/06/29 10:30:45'
//           }
//         };
  
//         return callback(null, fakeData);
//       });
//     });
  
//     after(() => {
//       // restore normal function
//       mock.restore('DynamoDB.DocumentClient');
//     });
  
//     it('find Message sender in collection', function(done){
  
//       // set up the call like it's real
//       var params = {
//         TableName : 'serverless-demo',
//         Key: {
//           messageId: <TEST_KEY_VALUE>
//         }
//       };
  
//       var expectedDate = <EXPECTED_VALUE>;
//       var documentClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
//       documentClient.get(params, function(err, data) {
//         // data should be the fake object that should match
//         assert.strictEqual(data.Item.Date, expectedDate);
//         done();
//       });
//     });
//   });
  
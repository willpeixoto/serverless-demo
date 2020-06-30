import 'source-map-support/register';
import { APIGatewayProxyHandler } from 'aws-lambda';
import { SQSHandler } from 'aws-lambda';
import { SQSMessage } from './sqs';
import { Dynamo } from './dynamo';

export const sender: APIGatewayProxyHandler = async (event, _context) => {
  let statusCode: number = 200;
  let message: string;
  message = JSON.stringify(event.body);

  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'No body was found',
      }),
    };
  }
  console.log(" ==> recebi aqui", event.body);

  try {
    const queueName: string = `receiverQueue`  
    const sqs = new SQSMessage(queueName as string);
    await sqs.sendMessage(message)
    message = 'Menssagem entregue na fila.. !';

  } catch (error) {
    console.log(error);
    message = error;
    statusCode = 500;
  }

  return {
    statusCode,
    body: JSON.stringify({
      message,
    }),
  };
};

export const receiver: SQSHandler = async (event) => {
  const dynamo = new Dynamo();
  console.log(event);
  try {
    
    for (const record of event.Records) {
      console.log(record);
      console.log('Message Body -->  ', record.body);
      // Do something
      console.log('vamos salvar no dynamo ? mongoDb');
      
      await dynamo.saveMessage(JSON.parse(JSON.stringify(record)));      

    }
  } catch (error) {
    console.log(error);
  }
};
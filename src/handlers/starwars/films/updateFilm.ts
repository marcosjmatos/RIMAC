import {
  DynamoDBClient,
  UpdateItemCommand
} from '@aws-sdk/client-dynamodb';
import { APIGatewayProxyEvent } from 'aws-lambda';

const updateFilm = async (
  event: APIGatewayProxyEvent
): Promise<Record<string, any> | undefined> => {
  const id = event.pathParameters?.episodio;
  const body = JSON.parse(event.body || '{}');

  if (!id)
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Missing id'
      })
    };

  if (!body)
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Missing body'
      })
    };

  const updateExpression = Object.keys(body)
    .map(
      (key) =>
        `#${key.split(' ').join('')} = :${key
          .split(' ')
          .join('')}`
    )
    .join(', ');

  const expressionAttributeNames = Object.keys(body).reduce(
    (acc, key) => ({
      ...acc,
      [`#${key.split(' ').join('')}`]: key
    }),
    {}
  );
  const expressionAttributeValues = Object.keys(
    body
  ).reduce(
    (acc, key) => ({
      ...acc,
      [`:${key.split(' ').join('')}`]: {
        S: body[key]
      }
    }),
    {}
  );

  const client = new DynamoDBClient({
    region: 'us-east-1'
  });

  const command = new UpdateItemCommand({
    TableName: 'Films',
    Key: {
      episodio_id: {
        S: id
      }
    },
    UpdateExpression: `SET ${updateExpression}`,
    ExpressionAttributeNames: expressionAttributeNames,
    ExpressionAttributeValues: expressionAttributeValues
  });

  try {
    const Item = await client.send(command);
    console.log(JSON.stringify(Item, null, 2));

    return {
      statusCode: 200,
      body: JSON.stringify(Item)
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify(e)
    };
  }
};

export default updateFilm;

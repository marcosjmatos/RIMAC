import {
  DynamoDBClient,
  ScanCommand
} from '@aws-sdk/client-dynamodb';
import { unmarshall } from '@aws-sdk/util-dynamodb';

const getData = async (
  tableName: string
): Promise<Record<string, any> | undefined> => {
  const client = new DynamoDBClient({
    region: 'us-east-1'
  });

  const command = new ScanCommand({
    TableName: tableName
  });

  try {
    const { Items } = await client.send(command);
    return Items?.map((item) => unmarshall(item));
  } catch (e) {
    return e;
  }
};

export default getData;

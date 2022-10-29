import {
  DynamoDBClient,
  BatchWriteItemCommand,
  WriteRequest,
} from '@aws-sdk/client-dynamodb';
import translate from 'translate';
import fetch from 'node-fetch';
import _ from 'lodash';

translate.engine = 'yandex';
translate.key = process.env.YANDEX;

const loadData = async () => {
  const client = new DynamoDBClient({
    region: 'us-east-1'
  });

  const response = await fetch(
    'https://swapi.py4e.com/api/starships/'
  );

  const data = await response.json();

  const keys = _.keys(data.results[0]);

  const translatedKeys = await Promise.all(
    keys.map(async (key) => await translate(key, 'es'))
  );
  const transformData: WriteRequest[] = [];

  for (const film of data.results) {
    const translatedData = _.mapKeys(film, (_, key) => {
      return translatedKeys[keys.indexOf(key)];
    });

    transformData.push(
      _.transform(
        translatedData,
        (result: any, value, key) => {
          result.PutRequest.Item[key] = {
            S: value.toString()
          };
          return;
        },
        {
          PutRequest: {
            Item: {}
          }
        }
      )
    );
  }

  const command = new BatchWriteItemCommand({
    RequestItems: {
      Starships: transformData
    }
  });

  try {
    const response = await client.send(command);
    console.log(JSON.stringify(response, null, 2));
  } catch (err) {
    console.log(JSON.stringify(err, null, 2));
  }
};

loadData();

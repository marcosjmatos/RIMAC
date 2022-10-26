import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult
} from 'aws-lambda';
import fetch from 'node-fetch';

const getFilms = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  // https://swapi.py4e.com/api/films/1/

  try {
    const response = await fetch(
      'https://swapi.py4e.com/api/films/'
    );
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify(e)
    };
  }
};

export default getFilms;

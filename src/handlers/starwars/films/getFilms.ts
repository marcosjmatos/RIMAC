import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult
} from 'aws-lambda';
import getData from '../../../utils/getData';

const getFilms = async (
  _: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify(await getData('Films'))
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify(e)
    };
  }
};

export default getFilms;

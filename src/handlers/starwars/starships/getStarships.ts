import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult
} from 'aws-lambda';
import getData from '../../../utils/getData';

const getStarships = async (
  _: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify(await getData('Starships'))
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify(e)
    };
  }
};

export default getStarships;

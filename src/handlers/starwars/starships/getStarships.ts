import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult
} from 'aws-lambda';
import fetch from 'node-fetch';

const getStarships = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {

  try {
    const response = await fetch(
      "https://swapi.py4e.com/api/starships/")
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






export default getStarships;

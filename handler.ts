import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";
import { StepFunctions } from "aws-sdk";
import * as moment from "moment";

export const execute: APIGatewayProxyHandler = async (event, _context) => {
  console.info("event: ", event);
  const stepFunctions = new StepFunctions();
  const stateMachineArn = process.env.statemachine_arn;
  console.info("stateMachineArn: ", stateMachineArn);
  const params = {
    stateMachineArn: stateMachineArn
  };
  const res = await stepFunctions.startExecution(params).promise();
  console.info("res: ", res);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:
          "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!",
        input: event
      },
      null,
      2
    )
  };
};

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:
          "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!",
        input: event
      },
      null,
      2
    )
  };
};

export const success: APIGatewayProxyHandler = async (event, _context) => {
  console.info("event: ", event);
  return {
    statusCode: 200,
    expirydate: moment()
      .add("minutes", 1)
      .format()
  };
};

export const fail: APIGatewayProxyHandler = async (event, _context) => {
  console.info("event: ", event);
  return {
    statusCode: 500
  };
};

export const done: APIGatewayProxyHandler = async (event, _context) => {
  console.info("event: ", event);
  return {
    statusCode: 200
  };
};

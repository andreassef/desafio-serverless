import { APIGatewayProxyHandler } from "aws-lambda"
import { document } from "../utils/dynamodbClient";

interface ICreateTodo {
    id: string;
    name: string;
    title: string;
    deadline: Date;
};

export const handle: APIGatewayProxyHandler = async (event) => {
    const { userid } = event.pathParameters;    
    const { id, name, title, deadline } = JSON.parse(event.body) as ICreateTodo;

    await document.put({
        TableName: "users_todos",
        Item: {
            id,
            name,
            title,
            done: false,
            deadline: new Date(deadline),
            userid,
        }
    }).promise();

    return {
        statusCode: 201,
        body: JSON.stringify({
            message: "Todo created!",
        }),
        headers: {
            "Content-Type": "application/json",
        },
    };
}
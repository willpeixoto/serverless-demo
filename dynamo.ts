import { DynamoDB } from 'aws-sdk'

class Dynamo {
    dynamo = new DynamoDB.DocumentClient();
    tableName: string;
    constructor() {
        this.tableName = 'demo-serverless'
    }
    async saveMessage(message: any): Promise<void> {        
        const putInput: any = {
            TableName: this.tableName,
            Item: message,
        }
        await this.put(putInput)
    }

    async put(params: AWS.DynamoDB.PutItemInput): Promise<any> {
        return new Promise((resolve, reject) => {
            this.dynamo.put(params, (err: AWS.AWSError, data: AWS.DynamoDB.DocumentClient.GetItemOutput) => {
                if (err) {
                    return reject(err)
                }
                return resolve(data)
            })
        })
    }
}

export { Dynamo }
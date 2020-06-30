
import * as AWS from 'aws-sdk'
const sqs = new AWS.SQS({
    region: 'us-west-2'
})

class SQSMessage {

    private accountId = ''
    queueName: string;

    constructor(queueName: string) {
        this.queueName = queueName
    }

    async sendMessage(message: any): Promise<any> {
        return new Promise((resolve, reject) => {
            const params = {
                MessageBody: JSON.stringify(message),
                QueueUrl: `https://sqs.us-west-2.amazonaws.com/${this.accountId}/${this.queueName}`
            }
            sqs.sendMessage(params, (err, data) => {
                if (err) {
                    console.log('error:', 'Fail Send Message' + err)
                    reject(err)
                }
                resolve(data)
            })
        })
    }
}

export { SQSMessage }

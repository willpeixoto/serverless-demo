import 'source-map-support/register';
export const sender = async (event, _context) => {
    let statusCode = 200;
    let message;
    if (!event.body) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: 'No body was found',
            }),
        };
    }
    console.log("recebi aqui", event.body);
    return {
        statusCode,
        body: JSON.stringify({
            message,
        }),
    };
};
export const receiver = async (event) => {
    try {
        for (const record of event.Records) {
            const messageAttributes = record.messageAttributes;
            console.log('Message Attributtes -->  ', messageAttributes.AttributeNameHere.stringValue);
            console.log('Message Body -->  ', record.body);
        }
    }
    catch (error) {
        console.log(error);
    }
};
//# sourceMappingURL=handler.js.map
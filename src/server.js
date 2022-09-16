const grpc = require('@grpc/grpc-js');

var messages = require('../out/protos/test_pb');
const services = require('../out/protos/test_grpc_pb');

function returnBoolean(call, callback) {
    const response = new messages.TestResponse();
    response.setSomeValue(call.request.getSomeValue());
    callback(null, response);
}

const server = new grpc.Server();

server.addService(services.TestService, {
    returnBoolean: returnBoolean
});

server.bindAsync('localhost:5000', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
});
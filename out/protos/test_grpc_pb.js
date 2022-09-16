// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protos_test_pb = require('../protos/test_pb.js');

function serialize_test_v1_TestRequest(arg) {
  if (!(arg instanceof protos_test_pb.TestRequest)) {
    throw new Error('Expected argument of type test.v1.TestRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_test_v1_TestRequest(buffer_arg) {
  return protos_test_pb.TestRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_test_v1_TestResponse(arg) {
  if (!(arg instanceof protos_test_pb.TestResponse)) {
    throw new Error('Expected argument of type test.v1.TestResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_test_v1_TestResponse(buffer_arg) {
  return protos_test_pb.TestResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TestService = exports.TestService = {
  returnBoolean: {
    path: '/test.v1.Test/ReturnBoolean',
    requestStream: false,
    responseStream: false,
    requestType: protos_test_pb.TestRequest,
    responseType: protos_test_pb.TestResponse,
    requestSerialize: serialize_test_v1_TestRequest,
    requestDeserialize: deserialize_test_v1_TestRequest,
    responseSerialize: serialize_test_v1_TestResponse,
    responseDeserialize: deserialize_test_v1_TestResponse,
  },
};

exports.TestClient = grpc.makeGenericClientConstructor(TestService);

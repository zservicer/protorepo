// package: 
// file: proto/talk.proto

import * as proto_talk_pb from "../proto/talk_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CustomerTalkServiceQueryTalks = {
  readonly methodName: string;
  readonly service: typeof CustomerTalkService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_talk_pb.QueryTalksRequest;
  readonly responseType: typeof proto_talk_pb.QueryTalksResponse;
};

type CustomerTalkServiceTalk = {
  readonly methodName: string;
  readonly service: typeof CustomerTalkService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof proto_talk_pb.TalkRequest;
  readonly responseType: typeof proto_talk_pb.TalkResponse;
};

export class CustomerTalkService {
  static readonly serviceName: string;
  static readonly QueryTalks: CustomerTalkServiceQueryTalks;
  static readonly Talk: CustomerTalkServiceTalk;
}

type ServiceTalkServiceService = {
  readonly methodName: string;
  readonly service: typeof ServiceTalkService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof proto_talk_pb.ServiceRequest;
  readonly responseType: typeof proto_talk_pb.ServiceResponse;
};

export class ServiceTalkService {
  static readonly serviceName: string;
  static readonly Service: ServiceTalkServiceService;
}

type CustomerUserServicerCheckToken = {
  readonly methodName: string;
  readonly service: typeof CustomerUserServicer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_talk_pb.CheckTokenRequest;
  readonly responseType: typeof proto_talk_pb.CheckTokenResponse;
};

type CustomerUserServicerCreateToken = {
  readonly methodName: string;
  readonly service: typeof CustomerUserServicer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_talk_pb.CreateTokenRequest;
  readonly responseType: typeof proto_talk_pb.CreateTokenResponse;
};

export class CustomerUserServicer {
  static readonly serviceName: string;
  static readonly CheckToken: CustomerUserServicerCheckToken;
  static readonly CreateToken: CustomerUserServicerCreateToken;
}

type ServicerUserServicerRegister = {
  readonly methodName: string;
  readonly service: typeof ServicerUserServicer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_talk_pb.RegisterRequest;
  readonly responseType: typeof proto_talk_pb.RegisterResponse;
};

type ServicerUserServicerLogin = {
  readonly methodName: string;
  readonly service: typeof ServicerUserServicer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_talk_pb.LoginRequest;
  readonly responseType: typeof proto_talk_pb.LoginResponse;
};

type ServicerUserServicerProfile = {
  readonly methodName: string;
  readonly service: typeof ServicerUserServicer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_talk_pb.ProfileRequest;
  readonly responseType: typeof proto_talk_pb.ProfileResponse;
};

type ServicerUserServicerSetPermissions = {
  readonly methodName: string;
  readonly service: typeof ServicerUserServicer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_talk_pb.SetPermissionsRequest;
  readonly responseType: typeof proto_talk_pb.Empty;
};

export class ServicerUserServicer {
  static readonly serviceName: string;
  static readonly Register: ServicerUserServicerRegister;
  static readonly Login: ServicerUserServicerLogin;
  static readonly Profile: ServicerUserServicerProfile;
  static readonly SetPermissions: ServicerUserServicerSetPermissions;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class CustomerTalkServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  queryTalks(
    requestMessage: proto_talk_pb.QueryTalksRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_talk_pb.QueryTalksResponse|null) => void
  ): UnaryResponse;
  queryTalks(
    requestMessage: proto_talk_pb.QueryTalksRequest,
    callback: (error: ServiceError|null, responseMessage: proto_talk_pb.QueryTalksResponse|null) => void
  ): UnaryResponse;
  talk(metadata?: grpc.Metadata): BidirectionalStream<proto_talk_pb.TalkRequest, proto_talk_pb.TalkResponse>;
}

export class ServiceTalkServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  service(metadata?: grpc.Metadata): BidirectionalStream<proto_talk_pb.ServiceRequest, proto_talk_pb.ServiceResponse>;
}

export class CustomerUserServicerClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  checkToken(
    requestMessage: proto_talk_pb.CheckTokenRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_talk_pb.CheckTokenResponse|null) => void
  ): UnaryResponse;
  checkToken(
    requestMessage: proto_talk_pb.CheckTokenRequest,
    callback: (error: ServiceError|null, responseMessage: proto_talk_pb.CheckTokenResponse|null) => void
  ): UnaryResponse;
  createToken(
    requestMessage: proto_talk_pb.CreateTokenRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_talk_pb.CreateTokenResponse|null) => void
  ): UnaryResponse;
  createToken(
    requestMessage: proto_talk_pb.CreateTokenRequest,
    callback: (error: ServiceError|null, responseMessage: proto_talk_pb.CreateTokenResponse|null) => void
  ): UnaryResponse;
}

export class ServicerUserServicerClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  register(
    requestMessage: proto_talk_pb.RegisterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_talk_pb.RegisterResponse|null) => void
  ): UnaryResponse;
  register(
    requestMessage: proto_talk_pb.RegisterRequest,
    callback: (error: ServiceError|null, responseMessage: proto_talk_pb.RegisterResponse|null) => void
  ): UnaryResponse;
  login(
    requestMessage: proto_talk_pb.LoginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_talk_pb.LoginResponse|null) => void
  ): UnaryResponse;
  login(
    requestMessage: proto_talk_pb.LoginRequest,
    callback: (error: ServiceError|null, responseMessage: proto_talk_pb.LoginResponse|null) => void
  ): UnaryResponse;
  profile(
    requestMessage: proto_talk_pb.ProfileRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_talk_pb.ProfileResponse|null) => void
  ): UnaryResponse;
  profile(
    requestMessage: proto_talk_pb.ProfileRequest,
    callback: (error: ServiceError|null, responseMessage: proto_talk_pb.ProfileResponse|null) => void
  ): UnaryResponse;
  setPermissions(
    requestMessage: proto_talk_pb.SetPermissionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_talk_pb.Empty|null) => void
  ): UnaryResponse;
  setPermissions(
    requestMessage: proto_talk_pb.SetPermissionsRequest,
    callback: (error: ServiceError|null, responseMessage: proto_talk_pb.Empty|null) => void
  ): UnaryResponse;
}


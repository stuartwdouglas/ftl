// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file xyz/block/ftl/v1/ftl.proto (package xyz.block.ftl.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Module, VerbRef } from "./schema/schema_pb.js";

/**
 * @generated from message xyz.block.ftl.v1.PingRequest
 */
export class PingRequest extends Message<PingRequest> {
  constructor(data?: PartialMessage<PingRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "xyz.block.ftl.v1.PingRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PingRequest {
    return new PingRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PingRequest {
    return new PingRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PingRequest {
    return new PingRequest().fromJsonString(jsonString, options);
  }

  static equals(a: PingRequest | PlainMessage<PingRequest> | undefined, b: PingRequest | PlainMessage<PingRequest> | undefined): boolean {
    return proto3.util.equals(PingRequest, a, b);
  }
}

/**
 * @generated from message xyz.block.ftl.v1.PingResponse
 */
export class PingResponse extends Message<PingResponse> {
  constructor(data?: PartialMessage<PingResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "xyz.block.ftl.v1.PingResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PingResponse {
    return new PingResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PingResponse {
    return new PingResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PingResponse {
    return new PingResponse().fromJsonString(jsonString, options);
  }

  static equals(a: PingResponse | PlainMessage<PingResponse> | undefined, b: PingResponse | PlainMessage<PingResponse> | undefined): boolean {
    return proto3.util.equals(PingResponse, a, b);
  }
}

/**
 * @generated from message xyz.block.ftl.v1.Metadata
 */
export class Metadata extends Message<Metadata> {
  /**
   * @generated from field: repeated xyz.block.ftl.v1.Metadata.Pair values = 1;
   */
  values: Metadata_Pair[] = [];

  constructor(data?: PartialMessage<Metadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "xyz.block.ftl.v1.Metadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "values", kind: "message", T: Metadata_Pair, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Metadata {
    return new Metadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Metadata {
    return new Metadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Metadata {
    return new Metadata().fromJsonString(jsonString, options);
  }

  static equals(a: Metadata | PlainMessage<Metadata> | undefined, b: Metadata | PlainMessage<Metadata> | undefined): boolean {
    return proto3.util.equals(Metadata, a, b);
  }
}

/**
 * @generated from message xyz.block.ftl.v1.Metadata.Pair
 */
export class Metadata_Pair extends Message<Metadata_Pair> {
  /**
   * @generated from field: string key = 1;
   */
  key = "";

  /**
   * @generated from field: string value = 2;
   */
  value = "";

  constructor(data?: PartialMessage<Metadata_Pair>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "xyz.block.ftl.v1.Metadata.Pair";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Metadata_Pair {
    return new Metadata_Pair().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Metadata_Pair {
    return new Metadata_Pair().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Metadata_Pair {
    return new Metadata_Pair().fromJsonString(jsonString, options);
  }

  static equals(a: Metadata_Pair | PlainMessage<Metadata_Pair> | undefined, b: Metadata_Pair | PlainMessage<Metadata_Pair> | undefined): boolean {
    return proto3.util.equals(Metadata_Pair, a, b);
  }
}

/**
 * @generated from message xyz.block.ftl.v1.CallRequest
 */
export class CallRequest extends Message<CallRequest> {
  /**
   * @generated from field: xyz.block.ftl.v1.Metadata metadata = 1;
   */
  metadata?: Metadata;

  /**
   * @generated from field: xyz.block.ftl.v1.schema.VerbRef verb = 2;
   */
  verb?: VerbRef;

  /**
   * @generated from field: bytes body = 3;
   */
  body = new Uint8Array(0);

  constructor(data?: PartialMessage<CallRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "xyz.block.ftl.v1.CallRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: Metadata },
    { no: 2, name: "verb", kind: "message", T: VerbRef },
    { no: 3, name: "body", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CallRequest {
    return new CallRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CallRequest {
    return new CallRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CallRequest {
    return new CallRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CallRequest | PlainMessage<CallRequest> | undefined, b: CallRequest | PlainMessage<CallRequest> | undefined): boolean {
    return proto3.util.equals(CallRequest, a, b);
  }
}

/**
 * @generated from message xyz.block.ftl.v1.CallResponse
 */
export class CallResponse extends Message<CallResponse> {
  /**
   * @generated from oneof xyz.block.ftl.v1.CallResponse.response
   */
  response: {
    /**
     * @generated from field: bytes body = 1;
     */
    value: Uint8Array;
    case: "body";
  } | {
    /**
     * @generated from field: xyz.block.ftl.v1.CallResponse.Error error = 2;
     */
    value: CallResponse_Error;
    case: "error";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<CallResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "xyz.block.ftl.v1.CallResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "body", kind: "scalar", T: 12 /* ScalarType.BYTES */, oneof: "response" },
    { no: 2, name: "error", kind: "message", T: CallResponse_Error, oneof: "response" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CallResponse {
    return new CallResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CallResponse {
    return new CallResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CallResponse {
    return new CallResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CallResponse | PlainMessage<CallResponse> | undefined, b: CallResponse | PlainMessage<CallResponse> | undefined): boolean {
    return proto3.util.equals(CallResponse, a, b);
  }
}

/**
 * @generated from message xyz.block.ftl.v1.CallResponse.Error
 */
export class CallResponse_Error extends Message<CallResponse_Error> {
  /**
   * TODO: Richer error type.
   *
   * @generated from field: string message = 1;
   */
  message = "";

  constructor(data?: PartialMessage<CallResponse_Error>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "xyz.block.ftl.v1.CallResponse.Error";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CallResponse_Error {
    return new CallResponse_Error().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CallResponse_Error {
    return new CallResponse_Error().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CallResponse_Error {
    return new CallResponse_Error().fromJsonString(jsonString, options);
  }

  static equals(a: CallResponse_Error | PlainMessage<CallResponse_Error> | undefined, b: CallResponse_Error | PlainMessage<CallResponse_Error> | undefined): boolean {
    return proto3.util.equals(CallResponse_Error, a, b);
  }
}

/**
 * @generated from message xyz.block.ftl.v1.ListRequest
 */
export class ListRequest extends Message<ListRequest> {
  constructor(data?: PartialMessage<ListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "xyz.block.ftl.v1.ListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRequest {
    return new ListRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRequest {
    return new ListRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRequest {
    return new ListRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListRequest | PlainMessage<ListRequest> | undefined, b: ListRequest | PlainMessage<ListRequest> | undefined): boolean {
    return proto3.util.equals(ListRequest, a, b);
  }
}

/**
 * @generated from message xyz.block.ftl.v1.ListResponse
 */
export class ListResponse extends Message<ListResponse> {
  /**
   * @generated from field: repeated xyz.block.ftl.v1.schema.VerbRef verbs = 1;
   */
  verbs: VerbRef[] = [];

  constructor(data?: PartialMessage<ListResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "xyz.block.ftl.v1.ListResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "verbs", kind: "message", T: VerbRef, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListResponse {
    return new ListResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListResponse {
    return new ListResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListResponse {
    return new ListResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListResponse | PlainMessage<ListResponse> | undefined, b: ListResponse | PlainMessage<ListResponse> | undefined): boolean {
    return proto3.util.equals(ListResponse, a, b);
  }
}

/**
 * @generated from message xyz.block.ftl.v1.SendRequest
 */
export class SendRequest extends Message<SendRequest> {
  /**
   * @generated from field: xyz.block.ftl.v1.Metadata metadata = 1;
   */
  metadata?: Metadata;

  /**
   * @generated from field: xyz.block.ftl.v1.schema.VerbRef verb = 2;
   */
  verb?: VerbRef;

  /**
   * @generated from field: bytes body = 3;
   */
  body = new Uint8Array(0);

  constructor(data?: PartialMessage<SendRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "xyz.block.ftl.v1.SendRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: Metadata },
    { no: 2, name: "verb", kind: "message", T: VerbRef },
    { no: 3, name: "body", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendRequest {
    return new SendRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendRequest {
    return new SendRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendRequest {
    return new SendRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SendRequest | PlainMessage<SendRequest> | undefined, b: SendRequest | PlainMessage<SendRequest> | undefined): boolean {
    return proto3.util.equals(SendRequest, a, b);
  }
}

/**
 * @generated from message xyz.block.ftl.v1.SendResponse
 */
export class SendResponse extends Message<SendResponse> {
  constructor(data?: PartialMessage<SendResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "xyz.block.ftl.v1.SendResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendResponse {
    return new SendResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendResponse {
    return new SendResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendResponse {
    return new SendResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SendResponse | PlainMessage<SendResponse> | undefined, b: SendResponse | PlainMessage<SendResponse> | undefined): boolean {
    return proto3.util.equals(SendResponse, a, b);
  }
}

/**
 * @generated from message xyz.block.ftl.v1.PushSchemaRequest
 */
export class PushSchemaRequest extends Message<PushSchemaRequest> {
  /**
   * @generated from field: xyz.block.ftl.v1.schema.Module schema = 1;
   */
  schema?: Module;

  constructor(data?: PartialMessage<PushSchemaRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "xyz.block.ftl.v1.PushSchemaRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "schema", kind: "message", T: Module },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PushSchemaRequest {
    return new PushSchemaRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PushSchemaRequest {
    return new PushSchemaRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PushSchemaRequest {
    return new PushSchemaRequest().fromJsonString(jsonString, options);
  }

  static equals(a: PushSchemaRequest | PlainMessage<PushSchemaRequest> | undefined, b: PushSchemaRequest | PlainMessage<PushSchemaRequest> | undefined): boolean {
    return proto3.util.equals(PushSchemaRequest, a, b);
  }
}

/**
 * @generated from message xyz.block.ftl.v1.PushSchemaResponse
 */
export class PushSchemaResponse extends Message<PushSchemaResponse> {
  constructor(data?: PartialMessage<PushSchemaResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "xyz.block.ftl.v1.PushSchemaResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PushSchemaResponse {
    return new PushSchemaResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PushSchemaResponse {
    return new PushSchemaResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PushSchemaResponse {
    return new PushSchemaResponse().fromJsonString(jsonString, options);
  }

  static equals(a: PushSchemaResponse | PlainMessage<PushSchemaResponse> | undefined, b: PushSchemaResponse | PlainMessage<PushSchemaResponse> | undefined): boolean {
    return proto3.util.equals(PushSchemaResponse, a, b);
  }
}

/**
 * @generated from message xyz.block.ftl.v1.PullSchemaRequest
 */
export class PullSchemaRequest extends Message<PullSchemaRequest> {
  constructor(data?: PartialMessage<PullSchemaRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "xyz.block.ftl.v1.PullSchemaRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PullSchemaRequest {
    return new PullSchemaRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PullSchemaRequest {
    return new PullSchemaRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PullSchemaRequest {
    return new PullSchemaRequest().fromJsonString(jsonString, options);
  }

  static equals(a: PullSchemaRequest | PlainMessage<PullSchemaRequest> | undefined, b: PullSchemaRequest | PlainMessage<PullSchemaRequest> | undefined): boolean {
    return proto3.util.equals(PullSchemaRequest, a, b);
  }
}

/**
 * @generated from message xyz.block.ftl.v1.PullSchemaResponse
 */
export class PullSchemaResponse extends Message<PullSchemaResponse> {
  /**
   * @generated from field: xyz.block.ftl.v1.schema.Module schema = 1;
   */
  schema?: Module;

  /**
   * If true, there are more schema changes immediately following this one.
   * If false, there still may be more schema changes in the future.
   *
   * @generated from field: bool more = 2;
   */
  more = false;

  constructor(data?: PartialMessage<PullSchemaResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "xyz.block.ftl.v1.PullSchemaResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "schema", kind: "message", T: Module },
    { no: 2, name: "more", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PullSchemaResponse {
    return new PullSchemaResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PullSchemaResponse {
    return new PullSchemaResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PullSchemaResponse {
    return new PullSchemaResponse().fromJsonString(jsonString, options);
  }

  static equals(a: PullSchemaResponse | PlainMessage<PullSchemaResponse> | undefined, b: PullSchemaResponse | PlainMessage<PullSchemaResponse> | undefined): boolean {
    return proto3.util.equals(PullSchemaResponse, a, b);
  }
}

/**
 * @generated from message xyz.block.ftl.v1.GetArtefactDiffsRequest
 */
export class GetArtefactDiffsRequest extends Message<GetArtefactDiffsRequest> {
  /**
   * @generated from field: repeated string client_digests = 1;
   */
  clientDigests: string[] = [];

  constructor(data?: PartialMessage<GetArtefactDiffsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "xyz.block.ftl.v1.GetArtefactDiffsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "client_digests", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetArtefactDiffsRequest {
    return new GetArtefactDiffsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetArtefactDiffsRequest {
    return new GetArtefactDiffsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetArtefactDiffsRequest {
    return new GetArtefactDiffsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetArtefactDiffsRequest | PlainMessage<GetArtefactDiffsRequest> | undefined, b: GetArtefactDiffsRequest | PlainMessage<GetArtefactDiffsRequest> | undefined): boolean {
    return proto3.util.equals(GetArtefactDiffsRequest, a, b);
  }
}

/**
 * @generated from message xyz.block.ftl.v1.GetArtefactDiffsResponse
 */
export class GetArtefactDiffsResponse extends Message<GetArtefactDiffsResponse> {
  /**
   * @generated from field: repeated string missing_digests = 1;
   */
  missingDigests: string[] = [];

  constructor(data?: PartialMessage<GetArtefactDiffsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "xyz.block.ftl.v1.GetArtefactDiffsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "missing_digests", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetArtefactDiffsResponse {
    return new GetArtefactDiffsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetArtefactDiffsResponse {
    return new GetArtefactDiffsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetArtefactDiffsResponse {
    return new GetArtefactDiffsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetArtefactDiffsResponse | PlainMessage<GetArtefactDiffsResponse> | undefined, b: GetArtefactDiffsResponse | PlainMessage<GetArtefactDiffsResponse> | undefined): boolean {
    return proto3.util.equals(GetArtefactDiffsResponse, a, b);
  }
}

/**
 * @generated from message xyz.block.ftl.v1.UploadArtefactRequest
 */
export class UploadArtefactRequest extends Message<UploadArtefactRequest> {
  /**
   * @generated from field: string path = 1;
   */
  path = "";

  /**
   * @generated from field: bool executable = 2;
   */
  executable = false;

  /**
   * @generated from field: string digest = 3;
   */
  digest = "";

  /**
   * @generated from field: bytes content = 4;
   */
  content = new Uint8Array(0);

  constructor(data?: PartialMessage<UploadArtefactRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "xyz.block.ftl.v1.UploadArtefactRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "executable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "digest", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "content", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UploadArtefactRequest {
    return new UploadArtefactRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UploadArtefactRequest {
    return new UploadArtefactRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UploadArtefactRequest {
    return new UploadArtefactRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UploadArtefactRequest | PlainMessage<UploadArtefactRequest> | undefined, b: UploadArtefactRequest | PlainMessage<UploadArtefactRequest> | undefined): boolean {
    return proto3.util.equals(UploadArtefactRequest, a, b);
  }
}

/**
 * @generated from message xyz.block.ftl.v1.UploadArtefactResponse
 */
export class UploadArtefactResponse extends Message<UploadArtefactResponse> {
  constructor(data?: PartialMessage<UploadArtefactResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "xyz.block.ftl.v1.UploadArtefactResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UploadArtefactResponse {
    return new UploadArtefactResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UploadArtefactResponse {
    return new UploadArtefactResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UploadArtefactResponse {
    return new UploadArtefactResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UploadArtefactResponse | PlainMessage<UploadArtefactResponse> | undefined, b: UploadArtefactResponse | PlainMessage<UploadArtefactResponse> | undefined): boolean {
    return proto3.util.equals(UploadArtefactResponse, a, b);
  }
}


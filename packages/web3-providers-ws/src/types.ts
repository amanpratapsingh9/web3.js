import { OutgoingHttpHeaders } from 'http';
import { IClientConfig } from 'websocket';
import { ProviderOptions } from '../../web3-providers-base/lib/types';

export type ReconnectOptions = {
    auto: boolean;
    delay: number;
    maxAttempts: number;
    onTimeout: boolean;
};
export interface WebSocketOptions extends ProviderOptions {
    protocol?: string;
    headers?: OutgoingHttpHeaders;
    requestOptions?: object;
    clientConfig?: IClientConfig;
    customTimeout?: number;
    reconnectOptions?: ReconnectOptions;
    timeout?: number;
    reconnectDelay?: number;
    origin?: string;
}

export enum WSStatus {
    DATA = 'Data ',
    CLOSE = 'Close ',
    ERROR = 'Error ',
    CONNECT = 'Connect ',
    RECONNECT = 'Reconnect ',
}

export enum WSErrors {
    ConnectionTimeout = 'Connection Timeout ',
    ConnectionNotOpenError = 'Connection Not Open Error ',
    PendingRequestsOnReconnectingError = 'Pending Requests On Reconnecting Error ',
    MaxAttemptsReachedOnReconnectingError = 'Max Attempts Reached On Reconnecting Error ',
    InvalidConnection = 'Invalid Connection ',
}

export interface RequestItem {
    payload: JsonRpcPayload;
    callback: (error: any, result: any) => void;
}

export interface JsonRpcPayload {
    jsonrpc: string;
    method: string;
    params: any[];
    id: string | number;
}

export interface JsonRpcResponse {
    jsonrpc: string;
    id: number;
    result?: any;
    error?: string;
}
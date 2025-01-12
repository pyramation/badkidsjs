/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { ConfigResponse, Coin, MintCountResponse, MintPriceResponse, MintableNumTokensResponse, StartTimeResponse, StatusResponse } from "./VendingMinter.types";
export interface VendingMinterReadOnlyInterface {
    contractAddress: string;
    config: () => Promise<ConfigResponse>;
    mintableNumTokens: () => Promise<MintableNumTokensResponse>;
    startTime: () => Promise<StartTimeResponse>;
    mintPrice: () => Promise<MintPriceResponse>;
    mintCount: ({ address }: {
        address: string;
    }) => Promise<MintCountResponse>;
    status: () => Promise<StatusResponse>;
}
export declare class VendingMinterQueryClient implements VendingMinterReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    config: () => Promise<ConfigResponse>;
    mintableNumTokens: () => Promise<MintableNumTokensResponse>;
    startTime: () => Promise<StartTimeResponse>;
    mintPrice: () => Promise<MintPriceResponse>;
    mintCount: ({ address }: {
        address: string;
    }) => Promise<MintCountResponse>;
    status: () => Promise<StatusResponse>;
}
export interface VendingMinterInterface extends VendingMinterReadOnlyInterface {
    contractAddress: string;
    sender: string;
    mint: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    setWhitelist: ({ whitelist }: {
        whitelist: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    purge: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updateMintPrice: ({ price }: {
        price: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updateStartTime: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updateStartTradingTime: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updatePerAddressLimit: ({ perAddressLimit }: {
        perAddressLimit: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    mintTo: ({ recipient }: {
        recipient: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    mintFor: ({ recipient, tokenId }: {
        recipient: string;
        tokenId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    shuffle: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    burnRemaining: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updateDiscountPrice: ({ price }: {
        price: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    removeDiscountPrice: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class VendingMinterClient extends VendingMinterQueryClient implements VendingMinterInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    mint: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    setWhitelist: ({ whitelist }: {
        whitelist: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    purge: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updateMintPrice: ({ price }: {
        price: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updateStartTime: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updateStartTradingTime: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updatePerAddressLimit: ({ perAddressLimit }: {
        perAddressLimit: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    mintTo: ({ recipient }: {
        recipient: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    mintFor: ({ recipient, tokenId }: {
        recipient: string;
        tokenId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    shuffle: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    burnRemaining: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updateDiscountPrice: ({ price }: {
        price: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    removeDiscountPrice: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}

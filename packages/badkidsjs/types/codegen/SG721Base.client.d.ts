/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { AllNftInfoResponse, OwnerOfResponse, AllOperatorsResponse, AllTokensResponse, ApprovalResponse, ApprovalsResponse, CollectionInfoResponse, ContractInfoResponse, MinterResponse, NftInfoResponse, NumTokensResponse, TokensResponse } from "./SG721Base.types";
export interface SG721BaseReadOnlyInterface {
    contractAddress: string;
    ownerOf: ({ includeExpired, tokenId }: {
        includeExpired?: boolean;
        tokenId: string;
    }) => Promise<OwnerOfResponse>;
    approval: ({ includeExpired, spender, tokenId }: {
        includeExpired?: boolean;
        spender: string;
        tokenId: string;
    }) => Promise<ApprovalResponse>;
    approvals: ({ includeExpired, tokenId }: {
        includeExpired?: boolean;
        tokenId: string;
    }) => Promise<ApprovalsResponse>;
    allOperators: ({ includeExpired, limit, owner, startAfter }: {
        includeExpired?: boolean;
        limit?: number;
        owner: string;
        startAfter?: string;
    }) => Promise<AllOperatorsResponse>;
    numTokens: () => Promise<NumTokensResponse>;
    contractInfo: () => Promise<ContractInfoResponse>;
    nftInfo: ({ tokenId }: {
        tokenId: string;
    }) => Promise<NftInfoResponse>;
    allNftInfo: ({ includeExpired, tokenId }: {
        includeExpired?: boolean;
        tokenId: string;
    }) => Promise<AllNftInfoResponse>;
    tokens: ({ limit, owner, startAfter }: {
        limit?: number;
        owner: string;
        startAfter?: string;
    }) => Promise<TokensResponse>;
    allTokens: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<AllTokensResponse>;
    minter: () => Promise<MinterResponse>;
    collectionInfo: () => Promise<CollectionInfoResponse>;
}
export declare class SG721BaseQueryClient implements SG721BaseReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    ownerOf: ({ includeExpired, tokenId }: {
        includeExpired?: boolean;
        tokenId: string;
    }) => Promise<OwnerOfResponse>;
    approval: ({ includeExpired, spender, tokenId }: {
        includeExpired?: boolean;
        spender: string;
        tokenId: string;
    }) => Promise<ApprovalResponse>;
    approvals: ({ includeExpired, tokenId }: {
        includeExpired?: boolean;
        tokenId: string;
    }) => Promise<ApprovalsResponse>;
    allOperators: ({ includeExpired, limit, owner, startAfter }: {
        includeExpired?: boolean;
        limit?: number;
        owner: string;
        startAfter?: string;
    }) => Promise<AllOperatorsResponse>;
    numTokens: () => Promise<NumTokensResponse>;
    contractInfo: () => Promise<ContractInfoResponse>;
    nftInfo: ({ tokenId }: {
        tokenId: string;
    }) => Promise<NftInfoResponse>;
    allNftInfo: ({ includeExpired, tokenId }: {
        includeExpired?: boolean;
        tokenId: string;
    }) => Promise<AllNftInfoResponse>;
    tokens: ({ limit, owner, startAfter }: {
        limit?: number;
        owner: string;
        startAfter?: string;
    }) => Promise<TokensResponse>;
    allTokens: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<AllTokensResponse>;
    minter: () => Promise<MinterResponse>;
    collectionInfo: () => Promise<CollectionInfoResponse>;
}

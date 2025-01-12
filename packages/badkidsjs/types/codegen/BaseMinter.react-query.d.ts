/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { UseMutationOptions } from "@tanstack/react-query";
import { Coin } from "./BaseMinter.types";
import { BaseMinterClient } from "./BaseMinter.client";
export interface BaseMinterUpdateStartTradingTimeMutation {
    client: BaseMinterClient;
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useBaseMinterUpdateStartTradingTimeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, BaseMinterUpdateStartTradingTimeMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, BaseMinterUpdateStartTradingTimeMutation, unknown>;
export interface BaseMinterMintMutation {
    client: BaseMinterClient;
    msg: {
        tokenUri: string;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useBaseMinterMintMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, BaseMinterMintMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, BaseMinterMintMutation, unknown>;

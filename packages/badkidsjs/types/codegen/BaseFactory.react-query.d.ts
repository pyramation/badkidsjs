/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { UseMutationOptions } from "@tanstack/react-query";
import { Coin, Empty, CollectionParams } from "./BaseFactory.types";
import { BaseFactoryClient } from "./BaseFactory.client";
export interface BaseFactoryCreateMinterMutation {
    client: BaseFactoryClient;
    msg: {
        collectionParams: CollectionParams;
        initMsg?: Empty;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useBaseFactoryCreateMinterMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, BaseFactoryCreateMinterMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, BaseFactoryCreateMinterMutation, unknown>;

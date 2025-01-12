/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Uint128, InstantiateMsg, MinterParamsForNullable_Empty, Coin, Empty, ExecuteMsg, Decimal, Timestamp, Uint64, CreateMinterMsgForNullable_Empty, CollectionParams, CollectionInfoForRoyaltyInfoResponse, RoyaltyInfoResponse } from "./BaseFactory.types";
export interface BaseFactoryMessage {
  contractAddress: string;
  sender: string;
  createMinter: ({
    collectionParams,
    initMsg
  }: {
    collectionParams: CollectionParams;
    initMsg?: Empty;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class BaseFactoryMessageComposer implements BaseFactoryMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.createMinter = this.createMinter.bind(this);
  }

  createMinter = ({
    collectionParams,
    initMsg
  }: {
    collectionParams: CollectionParams;
    initMsg?: Empty;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          create_minter: {
            collection_params: collectionParams,
            init_msg: initMsg
          }
        })),
        funds: _funds
      })
    };
  };
}
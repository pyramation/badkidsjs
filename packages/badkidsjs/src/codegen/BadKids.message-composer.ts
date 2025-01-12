/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { InstantiateMsg, ExecuteMsg, QueryMsg, Uint128, Binary, QueryType, QueryRegisteredQueryResponse, RegisteredQuery, Coin, KVKey, Height, TransferNftResponse } from "./BadKids.types";
export interface BadKidsMessage {
  contractAddress: string;
  sender: string;
  mintNft: ({
    tokenId
  }: {
    tokenId: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  registerTransferNftQuery: ({
    connectionId,
    contractAddress,
    minHeight,
    recipient,
    sender,
    tokenId,
    updatePeriod
  }: {
    connectionId: string;
    contractAddress: string;
    minHeight: number;
    recipient: string;
    sender: string;
    tokenId: string;
    updatePeriod: number;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  removeInterchainQuery: ({
    queryId
  }: {
    queryId: number;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  unlockNft: ({
    destination,
    tokenId
  }: {
    destination: string;
    tokenId: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class BadKidsMessageComposer implements BadKidsMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.mintNft = this.mintNft.bind(this);
    this.registerTransferNftQuery = this.registerTransferNftQuery.bind(this);
    this.removeInterchainQuery = this.removeInterchainQuery.bind(this);
    this.unlockNft = this.unlockNft.bind(this);
  }

  mintNft = ({
    tokenId
  }: {
    tokenId: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          mint_nft: {
            token_id: tokenId
          }
        })),
        funds: _funds
      })
    };
  };
  registerTransferNftQuery = ({
    connectionId,
    contractAddress,
    minHeight,
    recipient,
    sender,
    tokenId,
    updatePeriod
  }: {
    connectionId: string;
    contractAddress: string;
    minHeight: number;
    recipient: string;
    sender: string;
    tokenId: string;
    updatePeriod: number;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          register_transfer_nft_query: {
            connection_id: connectionId,
            contract_address: contractAddress,
            min_height: minHeight,
            recipient,
            sender,
            token_id: tokenId,
            update_period: updatePeriod
          }
        })),
        funds: _funds
      })
    };
  };
  removeInterchainQuery = ({
    queryId
  }: {
    queryId: number;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          remove_interchain_query: {
            query_id: queryId
          }
        })),
        funds: _funds
      })
    };
  };
  unlockNft = ({
    destination,
    tokenId
  }: {
    destination: string;
    tokenId: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          unlock_nft: {
            destination,
            token_id: tokenId
          }
        })),
        funds: _funds
      })
    };
  };
}
/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Decimal, Timestamp, Uint64, Uint128, InstantiateMsg, CreateMinterMsgForVendingMinterInitMsgExtension, CollectionParams, CollectionInfoForRoyaltyInfoResponse, RoyaltyInfoResponse, VendingMinterInitMsgExtension, Coin, MinterParamsForParamsExtension, ParamsExtension, ExecuteMsg, QueryMsg, ConfigResponse, MintCountResponse, MintPriceResponse, MintableNumTokensResponse, StartTimeResponse, StatusResponse, Status } from "./VendingMinterWlFlex.types";
export interface VendingMinterWlFlexMessage {
  contractAddress: string;
  sender: string;
  mint: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  setWhitelist: ({
    whitelist
  }: {
    whitelist: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  purge: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateMintPrice: ({
    price
  }: {
    price: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateStartTime: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateStartTradingTime: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updatePerAddressLimit: ({
    perAddressLimit
  }: {
    perAddressLimit: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  mintTo: ({
    recipient
  }: {
    recipient: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  mintFor: ({
    recipient,
    tokenId
  }: {
    recipient: string;
    tokenId: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  shuffle: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  burnRemaining: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateDiscountPrice: ({
    price
  }: {
    price: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  removeDiscountPrice: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class VendingMinterWlFlexMessageComposer implements VendingMinterWlFlexMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.mint = this.mint.bind(this);
    this.setWhitelist = this.setWhitelist.bind(this);
    this.purge = this.purge.bind(this);
    this.updateMintPrice = this.updateMintPrice.bind(this);
    this.updateStartTime = this.updateStartTime.bind(this);
    this.updateStartTradingTime = this.updateStartTradingTime.bind(this);
    this.updatePerAddressLimit = this.updatePerAddressLimit.bind(this);
    this.mintTo = this.mintTo.bind(this);
    this.mintFor = this.mintFor.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.burnRemaining = this.burnRemaining.bind(this);
    this.updateDiscountPrice = this.updateDiscountPrice.bind(this);
    this.removeDiscountPrice = this.removeDiscountPrice.bind(this);
  }

  mint = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          mint: {}
        })),
        funds
      })
    };
  };
  setWhitelist = ({
    whitelist
  }: {
    whitelist: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          set_whitelist: {
            whitelist
          }
        })),
        funds
      })
    };
  };
  purge = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          purge: {}
        })),
        funds
      })
    };
  };
  updateMintPrice = ({
    price
  }: {
    price: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_mint_price: {
            price
          }
        })),
        funds
      })
    };
  };
  updateStartTime = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_start_time: {}
        })),
        funds
      })
    };
  };
  updateStartTradingTime = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_start_trading_time: {}
        })),
        funds
      })
    };
  };
  updatePerAddressLimit = ({
    perAddressLimit
  }: {
    perAddressLimit: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_per_address_limit: {
            per_address_limit: perAddressLimit
          }
        })),
        funds
      })
    };
  };
  mintTo = ({
    recipient
  }: {
    recipient: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          mint_to: {
            recipient
          }
        })),
        funds
      })
    };
  };
  mintFor = ({
    recipient,
    tokenId
  }: {
    recipient: string;
    tokenId: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          mint_for: {
            recipient,
            token_id: tokenId
          }
        })),
        funds
      })
    };
  };
  shuffle = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          shuffle: {}
        })),
        funds
      })
    };
  };
  burnRemaining = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          burn_remaining: {}
        })),
        funds
      })
    };
  };
  updateDiscountPrice = ({
    price
  }: {
    price: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_discount_price: {
            price
          }
        })),
        funds
      })
    };
  };
  removeDiscountPrice = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          remove_discount_price: {}
        })),
        funds
      })
    };
  };
}
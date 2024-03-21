export type Response<T> =
  | {
      completed: true;
      data: T;
    }
  | {
      completed: false;
      error: string;
      data?: {
        metadata?: string;
      };
    };

export type TokenListJsonType = {
  address: string;
  chainId: number;
  decimals: number;
  name: string;
  symbol: string;
  logoURI: string;
  tags: string[];
  extensions: any;
};

export type TokenListType = SplTokenType[];

export type SplTokenType = {
  mintAddress: string;
  decimals: number;
  name: string;
  symbol: string;
};

export enum OperationType {
  Supply = 'Supply',
  Borrow = 'Borrow',
  Repay = 'Repay',
  Withdraw = 'Withdraw',
}

export enum ProviderType {
  Kamino = 'Kamino',
  Marginify = 'Marginify',
  Pyth = 'Pyth',
}

export type TransactionDataType = {
  serializedTx: Uint8Array;
};
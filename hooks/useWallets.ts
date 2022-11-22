import { Address, Value } from '@emurgo/cardano-serialization-lib-asmjs';
import { useCallback, useEffect, useState } from 'react';
import { SUPPORTED_WALLETS } from './wallets';
import { IWallet, WalletInfo, WALLET_IDS } from './wallets/base';
import { WalletNotAvailableError, WalletNotEnabledError } from './wallets/errors';

// ----------------------------------------------------------------------

type ReturnType = {
  wallets: WalletInfo[];
  balance: string | undefined;
  network: string | undefined;
  error: string | undefined;
  connectWallet: (walletId: WALLET_IDS) => void;
};

interface IConnectedWallet {
  getBalance(): Promise<number>;
  getNetworkId(): Promise<number>;
  getRewardAddresses(): Promise<Address[]>;
  getUnusedAddresses(): Promise<Address[]>;
  getUsedAddresses(): Promise<Address[]>;
  getChangeAddress(): Promise<Address>;
  getUtxos(): Promise<any[]>;
  signData(address: Address, payload: string): Promise<any>;
  signTx(): Promise<any>; // Not implemented
  submitTx(): Promise<any>; // Not implemented
  getCollateral(): Promise<any>; // Not implemented
}

export default function useWallets(): ReturnType {
  const [wallets, setWallets] = useState([] as WalletInfo[]);
  const [enabledWallet, setEnabledWallet] = useState<WalletInfo>();
  const [balance, setBalance] = useState<string>();
  const [network, setNetwork] = useState<string>();
  const [error, setError] = useState();
  const [connectWalletAPI, setConnectWalletAPI] = useState<IConnectedWallet>();
  // const [buffer, setBuffer] = useState();

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const Buffer = require('buffer/').Buffer;

  useEffect(() => {
    setWallets(getAvailableWallets());
  }, []);

  // useEffect(() => {
  //   let bufferResponse;
  //   try {
  //     // eslint-disable-next-line @typescript-eslint/no-var-requires
  //     bufferResponse = require('buffer/').Buffer;
  //   } catch (bufferError) {
  //     console.error(bufferError);
  //   }
  //   setBuffer(bufferResponse);
  // }, []);

  /**
   * Enables a wallet by its id initializing its api reference
   * @param id
   */
  const enable = useCallback(async (id: WALLET_IDS): Promise<WalletInfo> => {
    const wallet = SUPPORTED_WALLETS.find((w: IWallet) => w.getId() === id);
    if (!wallet) throw new WalletNotAvailableError();

    try {
      const walletAPI = await wallet.enable();
      setConnectWalletAPI(walletAPI);

      // After enabling the wallet it returns back its info
      return wallet.getInfo();
    } catch (err: any) {
      throw new Error(err.message);
    }
  }, []);

  /**
   * Returns the wallet balance
   * @returns
   */

  const getBalance = useCallback(async (): Promise<string> => {
    if (!connectWalletAPI) throw new WalletNotEnabledError();

    const balanceCBORHex = await connectWalletAPI.getBalance();
    const balance = Value.from_bytes(Buffer.from(balanceCBORHex, 'hex')).coin().to_str();

    return balance;
  }, [Buffer, connectWalletAPI]);

  /**
   * Returns the Wallet network Id
   *  - 0 for Testnet
   *  - 1 for Mainnet
   * Requires a wallet to be enabled
   */
  const getNetwork = useCallback(async (): Promise<string> => {
    if (!connectWalletAPI) throw new WalletNotEnabledError();
    const networkId = await connectWalletAPI.getNetworkId();

    // Converte the network id to human readable names
    switch (networkId) {
      case 0:
        return 'testnet';
      case 1:
        return 'mainnet';
      default:
        return 'unknown';
    }
  }, [connectWalletAPI]);

  const connectWallet = useCallback(
    async (walletId: WALLET_IDS) => {
      try {
        // clears the error state
        setError(undefined);

        // Enables the wallet
        setEnabledWallet(await enable(walletId));

        // Gets the enabled wallet balance
        setBalance(await getBalance());

        // Gets the enabled wallet network
        setNetwork(await getNetwork());
      } catch (error: any) {
        setError(error.message || 'unknown errorr');
      }
    },
    [enable, getBalance, getNetwork]
  );

  function getAvailableWallets(): WalletInfo[] {
    const result: WalletInfo[] = [];

    SUPPORTED_WALLETS.forEach((wallet) => {
      if (wallet.isAvailable()) {
        result.push(wallet.getInfo());
      }
    });

    return result;
  }


  //--------------------------------------------------- Useful edited code above this line
  /**
   * Returns a list of all used (included in some on-chain transaction) addresses controlled by the wallet
   */
  async function getUsedAddresses(): Promise<Address[]> {
    if (!connectWalletAPI) throw new WalletNotEnabledError();
    const addresses = await connectWalletAPI.getUsedAddresses();
    return addresses;
  }

  /**
   * Returns a list of unused addresses controlled by the wallet.
   * @returns
   */
  async function getUnusedAddresses(): Promise<Address[]> {
    if (!connectWalletAPI) throw new WalletNotEnabledError();
    const addresses = await connectWalletAPI.getUnusedAddresses();
    return addresses;
  }

  /**
   * Returns the reward addresses owned by the wallet. This can return multiple addresses
   * @returns
   */
  async function getRewardAddresses(): Promise<Address[]> {
    if (!connectWalletAPI) throw new WalletNotEnabledError();
    const addresses = await connectWalletAPI.getUnusedAddresses();
    return addresses;
  }

  /**
   * Returns an address owned by the wallet that should be used as a change address to return
   * leftover assets during transaction creation back to the connected wallet.
   * This can be used as a generic receive address as well.
   * @returns
   */
  async function getChangeAddress(): Promise<Address> {
    if (!connectWalletAPI) throw new WalletNotEnabledError();
    const address = await connectWalletAPI.getChangeAddress();
    return address;
  }

  /**
   * return a list of all UTXOs (unspent transaction outputs) controlled by the wallet.
   * @returns
   */
  async function getUtxos(): Promise<any[]> {
    if (!connectWalletAPI) throw new WalletNotEnabledError();
    const utxos = await connectWalletAPI.getUtxos();
    return utxos;
  }

  /**
   * Signs the data send in content by using the specified address
   * Requires the wallet to be enabled
   * @returns
   */
  async function signData(address: Address, content: string) {
    if (!connectWalletAPI) throw new WalletNotEnabledError();
    const payload = Buffer.from(content, 'ascii').toString('hex');
    const signedData = await connectWalletAPI.signData(address, payload);
    return signedData;
  }

  return {
    connectWallet,
    balance,
    error,
    network,
    wallets,
  };
}

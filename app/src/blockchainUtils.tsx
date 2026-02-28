import { BrowserProvider, Contract, ethers, Signer } from "ethers";

const contractAddress = "0x7Be8f87d543F3d45Adc0F2C95D58d39e9A8b80c1"; // Replace with your contract address
const abi = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "petId",
          "type": "uint256"
        }
      ],
      "name": "adopt",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAdopters",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getPets",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

declare global {
  interface Window {
    ethereum?: any;
  }
}

const getProvider = (): BrowserProvider | null => {
  if (!window.ethereum) {
    alert("Please install MetaMask!");
    return null;
  }
  return new ethers.BrowserProvider(window.ethereum);
};

export const getSigner = async (): Promise<Signer | null> => {
  try {
    const provider = getProvider();
    return provider ? await provider.getSigner() : null;
  } catch (error) {
    console.error("MetaMask connection error:", error);
    return null;
  }
};

export const getContract = async (): Promise<Contract | null> => {
  const signer = await getSigner();
  return signer ? new Contract(contractAddress, abi, signer) : null;
};

const withContract = async (
  action: (contract: Contract) => any,
): Promise<any | void> => {
  const contract = await getContract();
  if (!contract) return;
  try {
    return await action(contract);
  } catch (error) {
    console.error("Contract interaction error:", error);
  }
};

export const adopt = async (petId: number): Promise<void> => {
  await withContract(async (contract) => {
    const tx = await contract.adopt(petId);
    await tx.wait();
  });
};

export const getPets = async () => {
  return withContract(async (contract) => {
    const result: bigint[] = await contract.getPets(); // Fetch data
    const ids = result.map((num) => Number(num)); // Convert from BigInt to number
    return ids;
  });
};

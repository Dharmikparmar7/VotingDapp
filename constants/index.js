export const CONTRACT_ADDRESS = "0x08128f3D22E522736bd0f592EbF687D37298e7c4";
export const abi = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "s1",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "s2",
        "type": "string"
      }
    ],
    "name": "compareStringsbyBytes",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "id",
        "type": "uint64"
      }
    ],
    "name": "getCandidate",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "party",
            "type": "string"
          },
          {
            "internalType": "uint64",
            "name": "voteCount",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "nominationNo",
            "type": "uint64"
          },
          {
            "internalType": "string",
            "name": "stateCode",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "constituencyCode",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "password",
            "type": "string"
          }
        ],
        "internalType": "struct Voting.Candidate",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "voterId",
        "type": "uint64"
      }
    ],
    "name": "getCandidateList",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "party",
            "type": "string"
          },
          {
            "internalType": "uint64",
            "name": "voteCount",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "nominationNo",
            "type": "uint64"
          },
          {
            "internalType": "string",
            "name": "stateCode",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "constituencyCode",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "password",
            "type": "string"
          }
        ],
        "internalType": "struct Voting.Candidate[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getVoteCounts",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "party",
            "type": "string"
          },
          {
            "internalType": "uint64",
            "name": "votes",
            "type": "uint64"
          }
        ],
        "internalType": "struct Voting.Votes[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "voterId",
        "type": "uint64"
      }
    ],
    "name": "isVoterEligible",
    "outputs": [
      {
        "internalType": "bool",
        "name": "voterEligible_",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "id",
        "type": "uint64"
      },
      {
        "internalType": "string",
        "name": "password",
        "type": "string"
      }
    ],
    "name": "loginCandidate",
    "outputs": [
      {
        "internalType": "bool",
        "name": "login",
        "type": "bool"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "party",
            "type": "string"
          },
          {
            "internalType": "uint64",
            "name": "voteCount",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "nominationNo",
            "type": "uint64"
          },
          {
            "internalType": "string",
            "name": "stateCode",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "constituencyCode",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "password",
            "type": "string"
          }
        ],
        "internalType": "struct Voting.Candidate",
        "name": "_candidate",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "id",
        "type": "uint64"
      },
      {
        "internalType": "string",
        "name": "password",
        "type": "string"
      }
    ],
    "name": "loginVoter",
    "outputs": [
      {
        "internalType": "bool",
        "name": "login",
        "type": "bool"
      },
      {
        "components": [
          {
            "internalType": "uint64",
            "name": "id",
            "type": "uint64"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint8",
            "name": "age",
            "type": "uint8"
          },
          {
            "internalType": "string",
            "name": "stateCode",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "constituencyCode",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "voted",
            "type": "bool"
          },
          {
            "internalType": "uint64",
            "name": "votedTo",
            "type": "uint64"
          },
          {
            "internalType": "string",
            "name": "password",
            "type": "string"
          }
        ],
        "internalType": "struct Voting.Voter",
        "name": "_voter",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "party",
            "type": "string"
          },
          {
            "internalType": "uint64",
            "name": "voteCount",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "nominationNo",
            "type": "uint64"
          },
          {
            "internalType": "string",
            "name": "stateCode",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "constituencyCode",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "password",
            "type": "string"
          }
        ],
        "internalType": "struct Voting.Candidate",
        "name": "_candidate",
        "type": "tuple"
      }
    ],
    "name": "registerCandidate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint64",
            "name": "id",
            "type": "uint64"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint8",
            "name": "age",
            "type": "uint8"
          },
          {
            "internalType": "string",
            "name": "stateCode",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "constituencyCode",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "voted",
            "type": "bool"
          },
          {
            "internalType": "uint64",
            "name": "votedTo",
            "type": "uint64"
          },
          {
            "internalType": "string",
            "name": "password",
            "type": "string"
          }
        ],
        "internalType": "struct Voting.Voter",
        "name": "_voter",
        "type": "tuple"
      }
    ],
    "name": "registerVoter",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "candidateNominationNo",
        "type": "uint64"
      },
      {
        "internalType": "uint64",
        "name": "voterId",
        "type": "uint64"
      },
      {
        "internalType": "uint64",
        "name": "currentTime_",
        "type": "uint64"
      }
    ],
    "name": "vote",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
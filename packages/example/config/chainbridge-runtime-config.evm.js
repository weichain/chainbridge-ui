window.__RUNTIME_CONFIG__ = {
  INDEXER__URL: "http://localhost:8000",
  CHAINBRIDGE: {
    chains: [
      {
        domainId: 0,
        networkId: 43214913,
        name: "MAI",
        decimals: 18,
        bridgeAddress: "0x46043312Fe6Eed9b96a8DCD06ecf10199924c58C",
        erc20HandlerAddress: "0x89EfcAF57Dd688B770E0271E7C2afB2b75CF3117",
        rpcUrl: "http://174.138.9.169:9650/ext/bc/VUKSzFZKckx4PoZF9gX5QAqLPxbLzvu1vcssPG5QuodaJtdHT/rpc",
        type: "Ethereum",
        nativeTokenSymbol: "MAI",
        tokens: [
          {
            address: "0x6111e9B424A8E6d5f0991bBa36BD24e3a12459B3",
            name: "wrapped Token",
            symbol: "wT",
            imageUri: "WETHIcon",
            resourceId:
              "0x0000000000000000000000000000000000000000000000000000000000000001",
          },
        ],
      },
      {
        domainId: 1,
        networkId: 5,
        name: "Ethereum - Goerli",
        decimals: 18,
        bridgeAddress: "0x3bb50461001E8FB4bA3d76e136183c4dab75a1C2",
        erc20HandlerAddress: "0x05845f2550647817F6CdAa42111dD1F086068169",
        rpcUrl: "https://goerli.infura.io/v3/a70fee9b27a140d0b0cb483118353c8b",
        type: "Ethereum",
        nativeTokenSymbol: "GoerliETH",
        tokens: [
          {
            address: "0x983CeC779C5F791Cc89596D6B6D8c0eE6eAD676E",
            name: "Token",
            symbol: "T",
            imageUri: "WETHIcon",
            resourceId:
              "0x0000000000000000000000000000000000000000000000000000000000000001",
          },
        ],
      },
    ],
  },
};

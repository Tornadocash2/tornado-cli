require('dotenv').config()

module.exports = {
    deployments: {
        netId1: {
            'eth': {
                'instanceAddress': {
                    '0.1': '0x654Ea9db6792569BD276FE862748B9D67afaA002',
                    '1': '0x7c133d39220877a781fe2905cd7666e6b6e162aa',
                    '10': '0xd545A432855ab48f722f47D2833569fb5f48Bf5F',
                    '100': '0x753050049Ba2E2869Ad652C3e6d2ba68854C9086'
                },
                'deployedBlockNumber': {
                    '0.1': 16066501,
                    '1': 16066522,
                    '10': 16066528,
                    '100': 16066534
                },
                'miningEnabled': true,
                'symbol': 'ETH',
                'decimals': 18
            },
            'dai': {
                'instanceAddress': {
                    '100': '0xe871436b8e0e69934e8f7237a07d7b06d7ca5ff7',
                    '1000': '0xf0f16d32f3af84ae46245e490bedf1b0edf785ec',
                    '10000': '0x7083377d0cf8852358dd6a559281c7c09366887d',
                    '100000': '0x6bf81db7469a0bacb4a14f2cf0a70c7af8be2ff8'
                },
                'deployedBlockNumber': {
                    '100': 16066659,
                    '1000': 16066675,
                    '10000': 16066689,
                    '100000': 16066692
                },
                'miningEnabled': true,
                'tokenAddress': '0x6B175474E89094C44Da98b954EedeAC495271d0F',
                'symbol': 'DAI',
                'decimals': 18,
                'gasLimit': '55000'
            },
            'hex': {
                'instanceAddress': {
                    '100': '0x1fcde12aab9bde309019adf18b36c9aa66bd9e81',
                    '1000': '0x4e2bd6c44813ec175c6666a2a615a8f05854ce91',
                    '10000': '0x11a99a832d6615209fcb79125e5ef629a92f6c05',
                    '100000': '0x4e09ee0f4230bb259f361ddf031ed075a32b34d6'
                },
                'deployedBlockNumber': {
                    '5000': 16066802,
                    '50000': 16066807,
                    '500000': 16066839,
                    '5000000': 16066845
                },
                'miningEnabled': true,
                'tokenAddress': '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39',
                'symbol': 'HEX',
                'decimals': 8,
                'gasLimit': '425000'
            },
            proxy: '0x73c36830296Cf339027285AedD3251b4D276f44D',
            multicall: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
            subgraph: 'https://api.thegraph.com/subgraphs/name/danilo0917/tornadov2_eth',
        },
        netId5: {
            'eth': {
                'instanceAddress': {
                    '0.1': '0x6Bf694a291DF3FeC1f7e69701E3ab6c592435Ae7',
                    '1': '0x3aac1cC67c2ec5Db4eA850957b967Ba153aD6279',
                    '10': '0x723B78e67497E85279CB204544566F4dC5d2acA0',
                    '100': '0x0E3A09dDA6B20aFbB34aC7cD4A6881493f3E7bf7'
                },
                'deployedBlockNumber': {
                    '0.1': 3782581,
                    '1': 3782590,
                    '10': 3782593,
                    '100': 3782596
                },
                'miningEnabled': true,
                'symbol': 'ETH',
                'decimals': 18
            },
            'dai': {
                'instanceAddress': {
                    '100': '0x76D85B4C0Fc497EeCc38902397aC608000A06607',
                    '1000': '0xCC84179FFD19A1627E79F8648d09e095252Bc418',
                    '10000': '0xD5d6f8D9e784d0e26222ad3834500801a68D027D',
                    '100000': '0x407CcEeaA7c95d2FE2250Bf9F2c105aA7AAFB512'
                },
                'deployedBlockNumber': {
                    '100': 4339088,
                    '1000': 4367659,
                    '10000': 4441492,
                    '100000': 4441488
                },
                'miningEnabled': true,
                'tokenAddress': '0xdc31Ee1784292379Fbb2964b3B9C4124D8F89C60',
                'symbol': 'DAI',
                'decimals': 18,
                'gasLimit': '55000'
            },
            'cdai': {
                'instanceAddress': {
                    '5000': '0x833481186f16Cece3f1Eeea1a694c42034c3a0dB',
                    '50000': '0xd8D7DE3349ccaA0Fde6298fe6D7b7d0d34586193',
                    '500000': '0x8281Aa6795aDE17C8973e1aedcA380258Bc124F9',
                    '5000000': '0x57b2B8c82F065de8Ef5573f9730fC1449B403C9f'
                },
                'deployedBlockNumber': {
                    '5000': 4441443,
                    '50000': 4441489,
                    '500000': 4441493,
                    '5000000': 4441489
                },
                'miningEnabled': true,
                'tokenAddress': '0x822397d9a55d0fefd20F5c4bCaB33C5F65bd28Eb',
                'symbol': 'cDAI',
                'decimals': 8,
                'gasLimit': '425000'
            },
            'usdc': {
                'instanceAddress': {
                    '100': '0x05E0b5B40B7b66098C2161A5EE11C5740A3A7C45',
                    '1000': '0x23173fE8b96A4Ad8d2E17fB83EA5dcccdCa1Ae52',
                    '10000': '',
                    '100000': ''
                },
                'deployedBlockNumber': {
                    '100': 4441426,
                    '1000': 4441492,
                    '10000': '',
                    '100000': ''
                },
                'miningEnabled': false,
                'tokenAddress': '0xD87Ba7A50B2E7E660f678A895E4B72E7CB4CCd9C',
                'symbol': 'USDC',
                'decimals': 6,
                'gasLimit': '80000'
            },
            'usdt': {
                'instanceAddress': {
                    '100': '0x538Ab61E8A9fc1b2f93b3dd9011d662d89bE6FE6',
                    '1000': '0x94Be88213a387E992Dd87DE56950a9aef34b9448',
                    '10000': '',
                    '100000': ''
                },
                'deployedBlockNumber': {
                    '100': 4441490,
                    '1000': 4441492,
                    '10000': '',
                    '100000': ''
                },
                'miningEnabled': false,
                'tokenAddress': '0xb7FC2023D96AEa94Ba0254AA5Aeb93141e4aad66',
                'symbol': 'USDT',
                'decimals': 6,
                'gasLimit': '100000'
            },
            'wbtc': {
                'instanceAddress': {
                    '0.1': '0x242654336ca2205714071898f67E254EB49ACdCe',
                    '1': '0x776198CCF446DFa168347089d7338879273172cF',
                    '10': '0xeDC5d01286f99A066559F60a585406f3878a033e',
                    '100': ''
                },
                'deployedBlockNumber': {
                    '0.1': 4441488,
                    '1': 4441490,
                    '10': 4441490,
                    '100': ''
                },
                'miningEnabled': true,
                'tokenAddress': '0xC04B0d3107736C32e19F1c62b2aF67BE61d63a05',
                'symbol': 'WBTC',
                'decimals': 8,
                'gasLimit': '85000'
            },
            proxy: '0x454d870a72e29d5e5697f635128d18077bd04c60',
            multicall: '0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e',
            subgraph: 'https://api.thegraph.com/subgraphs/name/tornadocash/goerli-tornado-subgraph',
        },
        netId56: {
            'bnb': {
                'instanceAddress': {
                    '0.1': '0x785D7A0dE8b7813033452c9D6DbC86a5238927fC',
                    '1': '0x8d149a2F7903BB0341Cf3F05B199A8F7a7F7ecC9',
                    '10': '0x6EEe950366AdC89c441b8CD80503b1974F419Da7',
                    '100': '0xb9b3877b1ad881645fF372Fd7b7cB788DE8243BC'
                },
                'deployedBlockNumber': {
                    '0.1': 23044232,
                    '1': 23050433,
                    '10': 23051697,
                    '100': 23051707
                },
                'miningEnabled': false,
                'symbol': 'BNB',
                'decimals': 18
            },
            'busd': {
                'instanceAddress': {
                    '10': '0x9c3C7f40112eedFAaa42441054d7F4f5B8387D6F',
                    '100': '0x8464Fa0ad92FE1b07B1f5ad5a5299f3990942c88',
                    '1000': '0xbb77170F1F9d7d8A4F8cd6Caa1648be06aBaB087',
                    '10000': '0xb8deE638c3743384558656987DD7DACAc542DaA1'
                },
                'deployedBlockNumber': {
                    '0.1': 23051921,
                    '1': 23051934,
                    '10': 23051946,
                    '100': 23051956
                },
                'miningEnabled': false,
                'symbol': 'BNB',
                'decimals': 18
            },
            'storm': {
                'instanceAddress': {
                    '10': '0x7AE8F08911D37202aDeD3479095F4522ED535060',
                    '100': '0xaA51A4fF9bD03c9E73A65d71b779c195db7722df',
                    '500': '0xeF3548FB09B60bB1655D6BAdbD4A5d80c0F44c40',
                    '1000': '0x0B3396793bD3E8Fe1fA9B0cdeCE46E71c81Fe3E7'
                },
                'deployedBlockNumber': {
                    '10': 24016611,
                    '100': 24016619,
                    '500': 24016630,
                    '1000': 24016636
                },
                'miningEnabled': true,
                'tokenAddress': '0xbBC4C1e5Bafe890B48639d493ca218EDa13f8e7b',
                'symbol': 'STORM',
                'decimals': 18
            },
            proxy: '0x5C3ac7074caFED8F296CC25786d5E79C7c079838',
            multicall: '0x41263cba59eb80dc200f3e2544eda4ed6a90e76c',
            subgraph: 'https://api.thegraph.com/subgraphs/name/danilo0917/tornadov2',
        },
        netId100: {
            'xdai': {
                'instanceAddress': {
                    '100': '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
                    '1000': '0xdf231d99Ff8b6c6CBF4E9B9a945CBAcEF9339178',
                    '10000': '0xaf4c0B70B2Ea9FB7487C7CbB37aDa259579fe040',
                    '100000': '0xa5C2254e4253490C54cef0a4347fddb8f75A4998'
                },
                'deployedBlockNumber': {
                    '100': 17754566,
                    '1000': 17754568,
                    '10000': 17754572,
                    '100000': 17754574
                },
                'miningEnabled': false,
                'symbol': 'xDAI',
                'decimals': 18
            },
            proxy: '0x0D5550d52428E7e3175bfc9550207e4ad3859b17',
            multicall: '0xb5b692a88BDFc81ca69dcB1d924f59f0413A602a',
            subgraph: 'https://api.thegraph.com/subgraphs/name/tornadocash/xdai-tornado-subgraph',
        },
        netId137: {
            'matic': {
                'instanceAddress': {
                    '100': '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
                    '1000': '0xdf231d99Ff8b6c6CBF4E9B9a945CBAcEF9339178',
                    '10000': '0xaf4c0B70B2Ea9FB7487C7CbB37aDa259579fe040',
                    '100000': '0xa5C2254e4253490C54cef0a4347fddb8f75A4998'
                },
                'deployedBlockNumber': {
                    '100': 16258013,
                    '1000': 16258032,
                    '10000': 16258046,
                    '100000': 16258053
                },
                'miningEnabled': false,
                'symbol': 'MATIC',
                'decimals': 18
            },
            proxy: '0x0D5550d52428E7e3175bfc9550207e4ad3859b17',
            multicall: '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
            subgraph: 'https://api.thegraph.com/subgraphs/name/tornadocash/matic-tornado-subgraph',
        },
        netId42161: {
            'eth': {
                'instanceAddress': {
                    '0.1': '0x84443CFd09A48AF6eF360C6976C5392aC5023a1F',
                    '1': '0xd47438C816c9E7f2E2888E060936a499Af9582b3',
                    '10': '0x330bdFADE01eE9bF63C209Ee33102DD334618e0a',
                    '100': '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD'
                },
                'deployedBlockNumber': {
                    '0.1': 3300000,
                    '1': 3300000,
                    '10': 3300000,
                    '100': 3300000
                },
                'miningEnabled': false,
                'symbol': 'ETH',
                'decimals': 18
            },
            proxy: '0x0D5550d52428E7e3175bfc9550207e4ad3859b17',
            multicall: '0xB064Fe785d8131653eE12f3581F9A55F6D6E1ca3',
            subgraph: 'https://api.thegraph.com/subgraphs/name/tornadocash/arbitrum-tornado-subgraph',
        },
        netId43114: {
            'avax': {
                'instanceAddress': {
                    '10': '0x330bdFADE01eE9bF63C209Ee33102DD334618e0a',
                    '100': '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
                    '500': '0xaf8d1839c3c67cf571aa74B5c12398d4901147B3'
                },
                'deployedBlockNumber': {
                    '10': 4429830,
                    '100': 4429851,
                    '500': 4429837
                },
                'miningEnabled': false,
                'symbol': 'AVAX',
                'decimals': 18
            },
            proxy: '0x0D5550d52428E7e3175bfc9550207e4ad3859b17',
            multicall: '0x98e2060F672FD1656a07bc12D7253b5e41bF3876',
            subgraph: 'https://api.thegraph.com/subgraphs/name/tornadocash/avalanche-tornado-subgraph',
        },
        netId10: {
            'eth': {
                'instanceAddress': {
                    '0.1': '0x84443CFd09A48AF6eF360C6976C5392aC5023a1F',
                    '1': '0xd47438C816c9E7f2E2888E060936a499Af9582b3',
                    '10': '0x330bdFADE01eE9bF63C209Ee33102DD334618e0a',
                    '100': '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD'
                },
                'deployedBlockNumber': {
                    '0.1': 2243707,
                    '1': 2243709,
                    '10': 2243735,
                    '100': 2243749
                },
                'miningEnabled': false,
                'symbol': 'ETH',
                'decimals': 18
            },
            proxy: '0x0D5550d52428E7e3175bfc9550207e4ad3859b17',
            multicall: '0x142E2FEaC30d7fc3b61f9EE85FCCad8e560154cc',
            subgraph: 'https://api.thegraph.com/subgraphs/name/tornadocash/optimism-tornado-subgraph',
        },
    }
}
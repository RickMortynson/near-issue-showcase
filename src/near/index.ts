import * as nearAPI from 'near-api-js'

export const connectNear = async () => {
  const nearConfig = {
    headers: {},
    networkId: 'testnet',
    nodeUrl: 'https://rpc.testnet.near.org'
  } as nearAPI.ConnectConfig

  await nearAPI.connect(nearConfig)
}

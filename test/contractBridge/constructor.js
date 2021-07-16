/**
 * Copyright 2020 ChainSafe Systems
 * SPDX-License-Identifier: LGPL-3.0-only
 */
 var chai = require("chai");
 var chaiAsPromised = require("chai-as-promised");
 chai.use(chaiAsPromised);
 chai.should();

 const BN = web3.utils.BN;
 

//const TruffleAssert = require('truffle-assertions');
const BridgeContract = artifacts.require("Bridge");

contract('Bridge - [constructor]', async accounts => {
    const chainID = 1;
    const initialRelayers = accounts.slice(0, 3);
    const initialRelayerThreshold = 2;
    
    let BridgeInstance;

    it('Bridge should not allow to set initialRelayerThreshold above 255', async () => {
        BridgeInstance = await BridgeContract.new();
        BridgeInstance.__Bridge_init(chainID, initialRelayers, 256, 0, 100).should.be.rejectedWith("value does not fit in 8 bits");
    });

    it('Bridge should not allow to set fee above 2**128 - 1', async () => {
        BridgeInstance = await BridgeContract.new();
        BridgeInstance.__Bridge_init(chainID, initialRelayers, initialRelayerThreshold, new BN(2).pow(new BN(128)), 100).should.be.rejectedWith("value does not fit in 128 bits");
    });

    it('Bridge should not allow to set expiry above 2**40 - 1', async () => {
        BridgeInstance = await BridgeContract.new();
        BridgeInstance.__Bridge_init(chainID, initialRelayers, initialRelayerThreshold, 0, new BN(2).pow(new BN(40))).should.be.rejectedWith("value does not fit in 40 bits");
    });
});

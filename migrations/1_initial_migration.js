/**
 * Copyright 2020 ChainSafe Systems
 * SPDX-License-Identifier: LGPL-3.0-only
 */

const Migrations = artifacts.require("Migrations");
const Bridge = artifacts.require("Bridge");
const ERC20Handler = artifacts.require("ERC20Handler");
const ERC721Handler = artifacts.require("ERC721Handler");
const ERC721MinterBurnerPauser = artifacts.require("ERC721MinterBurnerPauser");
const GenericHandler = artifacts.require("GenericHandler");



module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Bridge,{from:"0x8Da577cc13D484B206Ba6e84C63DE6cc51010fbC"});
  //deployer.deploy(ERC20Handler,{from:"0x8Da577cc13D484B206Ba6e84C63DE6cc51010fbC"});
  //deployer.deploy(ERC721Handler,{from:"0x8Da577cc13D484B206Ba6e84C63DE6cc51010fbC"});
  //deployer.deploy(ERC721MinterBurnerPauser,{from:"0x8Da577cc13D484B206Ba6e84C63DE6cc51010fbC"});
  //deployer.deploy(GenericHandler,{from:"0x8Da577cc13D484B206Ba6e84C63DE6cc51010fbC"});
};

const { isExportDeclaration } = require("typescript");

const Bridge = artifacts.require('Bridge');
const BigNumber = web3.utils.BN;
const web3utils = web3.utils;
const owner = "0x8Da577cc13D484B206Ba6e84C63DE6cc51010fbC"

contract('Bridge Tests', () => {

    it("Can grant role", () => Bridge.deployed()
        .then( async (bridge) => {
            await bridge.__Bridge_init(0,
                ["0xE3386fAa60bFdDdA3c97e7a6d6cf67bdCE06D8fC",
                "0xD56d9b603b37adfa154e9EA31715C8AcAe5bb39C",
                "0x34c4a58982ac5D7aDE2DAd50191E2e969f228E2a"],
                2,
                0,
                0)
            let role = await bridge.DEFAULT_ADMIN_ROLE();
            await bridge.grantRole(role,owner,{from:owner});
            notInRole = await bridge.getRoleMemberIndex(role,"0x34c4a58982ac5D7aDE2DAd50191E2e969f228E2a");
            expect(web3utils.hexToNumber(notInRole).toString()).to.equal("0")

            isInRole = await bridge.getRoleMemberIndex(role,owner);
            expect(web3utils.hexToNumber(isInRole).toString()).to.not.equal("0")

        })
    );

})
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";  // OpenZeppelin package contains implementation of the ERC 20 standard, which our NFT smart contract will inherit

contract OanskyToken is ERC20 {
    uint constant _initial_supply = 1001 * (10**18);  
    constructor() ERC20("OanskyToken", "SKY") {
        _mint(msg.sender, _initial_supply);
    }
}

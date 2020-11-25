pragma solidity ^0.4.19;
 
contract All_In_One {
    
    // Paitent Structure here 
    
    struct paitent {           
        bytes32 name;
        bytes32 addres;
        uint phoneNo;
        bytes32 bloodGroup;
        uint insuranceCompanyId;
        uint emergencyContact;
        bytes32 Precautions;
        uint [] treatmentId;
    }
    
    mapping (uint => uint ) entitie;
    mapping (uint => paitent ) p_info;
    mapping (address => uint) addresstoId;
    mapping (uint => address) IdtoAdress;
    mapping(address => uint)balancesOfMoney;
 
    

}
 
 
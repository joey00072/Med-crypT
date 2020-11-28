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
    
     function addPatientInfo (  uint _adharCardNumber,
                                 bytes32 _name,
                                 bytes32 _addres,
                                 uint _phoneNo ,
                                 bytes32 _bloodGroup ,
                                 uint _insuranceCompany, 
                                 uint _emergencyContact) public 
        {
        require(entitie[_adharCardNumber]==0 && addresstoId[msg.sender]==0); 
        p_info[_adharCardNumber].name = _name;
        p_info[_adharCardNumber].addres = _addres;
        p_info[_adharCardNumber].phoneNo = _phoneNo;
        p_info[_adharCardNumber].bloodGroup = _bloodGroup;
        p_info[_adharCardNumber].insuranceCompanyId = _insuranceCompany;
        p_info[_adharCardNumber].emergencyContact = _emergencyContact;
        entitie[_adharCardNumber] = 1; 
        addresstoId[msg.sender] = _adharCardNumber;
        IdtoAdress[_adharCardNumber] = msg.sender;
    }
 
 
     function getPatientInfo(uint  _adharCardNumber) public view returns(bytes32 name , bytes32 addres,uint phoneNo ,bytes32 bloodGroup , uint insuranceCompany, uint emergencyContacts, bytes32 Precautions){
        require(entitie[_adharCardNumber]==1 || entitie[_adharCardNumber]==2 );
        return(p_info[_adharCardNumber].name, p_info[_adharCardNumber].addres, p_info[_adharCardNumber].phoneNo, p_info[_adharCardNumber].bloodGroup, p_info[_adharCardNumber].insuranceCompanyId, p_info[_adharCardNumber].emergencyContact,p_info[_adharCardNumber].Precautions);
    }
    
    
    function UpdatePrecautions( uint _adharCardNumber,bytes32 _Precautions ) public {
        require(entitie[_adharCardNumber]==1);
        p_info[_adharCardNumber].Precautions = _Precautions;
    }
    
    
    
    struct treatment {
        uint patient_id;
        uint doctor_id;
        bytes32 diagnosis;
        bytes32 test_conducted;
        uint bill;
        bytes32 medicine;
        bytes32 [] InsuranceKeep;
    }
    
     mapping(uint=>treatment) tid;
            
    function createTreatmentID(
        uint patient_id
        ) public pure returns (uint){
        uint treatment_id = (142317*patient_id)%1000003;
        return treatment_id;
    }
    
    function TreatPatient(uint patient_id,uint doctor_id,bytes32 diagnosis,bytes32 test_conducted,uint bill,bytes32 medicine) public  returns (uint){
        uint val = addresstoId[msg.sender];
        require(entitie[patient_id]==1 || entitie[val]==2 );
        uint _tid = createTreatmentID(patient_id);
        tid[_tid].patient_id = patient_id;
        tid[_tid].doctor_id = doctor_id;
        tid[_tid].diagnosis = diagnosis;
        tid[_tid].test_conducted = test_conducted;
        tid[_tid].bill = bill;
        tid[_tid].medicine = medicine;
        p_info[patient_id].treatmentId.push(_tid); // pushing treatmentId to array in treatmentId.
        return _tid;
    }
    
    
    function getTreatmentDetails(uint _tid) public view returns (uint p_id,uint d_id,bytes32 diagnosis,bytes32 test_conducted,uint bill,bytes32 medicine) {
        return (tid[_tid].patient_id,tid[_tid].doctor_id,tid[_tid].diagnosis,tid[_tid].test_conducted,tid[_tid].bill,tid[_tid].medicine);
    }
        
    function addInsuranceKeep(uint p_id, bytes32  _medication) public {
        uint val = addresstoId[msg.sender];
        require(entitie[val]==2); 
        uint _t_id = p_info[p_id].treatmentId[p_info[p_id].treatmentId.length-1];
        tid[_t_id].InsuranceKeep.push(_medication);   
    }

}
 
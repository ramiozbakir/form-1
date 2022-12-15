import { LightningElement, track } from 'lwc';
const dropdownOptions = [
    { label: '---Select---', value: '' },
    { label: 'United Kingdom', value: 'United Kingdom' },
    { label: 'United States', value: 'United States' },
    { label: 'Turkey', value: 'Turkey' }
];  
const COLUMNS = [  
    { label: 'Name', fieldName: 'textField' , type: 'text' },  
    { label: 'Terms and Conditions', fieldName: 'checkField' , type: 'boolean'  }, 
    { label: 'Country', fieldName: 'picklistField', type: 'text' }
];  

export default class FormExample extends LightningElement {
    picklistOptions=dropdownOptions;
    accounts;  
    columns = COLUMNS;
    @track formData = {
        textInput: '',
        checkboxInput: false,
        dropdownInput: '',
    };
    @track savedData = [];

    handleChange(event) {
        this.formData[event.target.name] = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    }

   
          fetchAccounts() {
            if (!this.formData.textInput || !this.formData.checkboxInput || !this.formData.dropdownInput) {
                // display an error if any of the fields are empty
                alert('Complete all the fields');
            } else {
                let fixeddata = [];
    
                let dataline = {};
                dataline.textField = this.formData.textInput;
                dataline.checkField = this.formData.checkboxInput;
                dataline.picklistField = this.formData.dropdownInput;
                fixeddata.push(dataline);
                console.log(fixeddata.length);
                this.accounts = fixeddata; 
            }        
        }

    handleClear() {
        this.formData = {
            textInput: '',
            checkboxInput: false,
            dropdownInput: '',
        };
    }
}

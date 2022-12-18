import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';

export default class WireGetObjectInfo extends LightningElement {
    objectApiName = 'Account';

    @wire(getObjectInfo, { objectApiName: '$objectApiName' })
    objectInfo;

    get objectInfoStr() {
        return this.objectInfo
            ? JSON.stringify(this.objectInfo.data, null, 2)
            : '';
    }
}
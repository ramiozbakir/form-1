import { LightningElement } from 'lwc';
import showModal from "c/showModalObjectInfo";
export default class ButtonShowModal extends LightningElement {
    handleOpenClick(){
        showModal.open();
    }
}
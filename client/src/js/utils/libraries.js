import MicroModal from 'micromodal';


const showMicroModal = () => {
  MicroModal.init();
  MicroModal.show('note-editor-modal');
};

export default showMicroModal;

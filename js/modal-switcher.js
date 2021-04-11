export const modalSwitcher = () => {
    const feedbackModal = document.querySelector(".js-feedback-modal");
    const Modal = document.querySelector(".js-modal");

    const buttonOpenFeedbackModal = document.querySelector(".js-btn-open-feedback-modal");
    const buttonOpenModalHead = document.querySelector(".js-btn-open-modal-head");
    const buttonOpenModalNav = document.querySelector(".js-btn-open-modal-nav");
    const buttonOpenModalMobile = document.querySelector(".js-btn-open-login-modal-mobile");
    // кнопки в табах
    const buttonOpenModalTabIS = document.querySelector(".js-btn-open-modal-tab-is");
    const buttonOpenModalTabIB = document.querySelector(".js-btn-open-modal-tab-ib");
    const buttonOpenModalTabSA = document.querySelector(".js-btn-open-modal-tab-sa");
    const buttonOpenModalTabPO = document.querySelector(".js-btn-open-modal-tab-po");

    const modalField = document.querySelector(".js-modal-field");
    const modalText = document.querySelector(".js-modal-text");
    let buttonClose = null;
    let currentModal = null;
    let wrapper = null;

    const openModal = (e, modal) => {
        e.preventDefault();
        wrapper = modal.parentElement;
        currentModal = modal;

        wrapper.classList.remove("hide");
        currentModal.classList.remove("hide");

        currentModal.addEventListener("mousedown", stopClickPropagation);
        buttonClose = currentModal.querySelector(".js-btn-close-modal");
        buttonClose.addEventListener("click", closeModal);
        wrapper.addEventListener("mousedown", closeModal);
        // modalField.value = '';
        // modalText.textContent = 'Оставьте контакт, мы с вами свяжемся'
    };

    const closeModal = (e) => {
        e.preventDefault();

        wrapper.classList.add("hide");
        currentModal.classList.add("hide");

        currentModal.removeEventListener("mousedown", stopClickPropagation);
        wrapper.removeEventListener("mousedown", closeModal);
        buttonClose.removeEventListener("click", closeModal);
        // $('#sendMailForm').css('display', 'flex');
        currentModal = null;
        wrapper = null;
        buttonClose = null;
        $('#sendMailForm .a-form__textarea').val('');
        $('#sendMailForm .a-form__file input').val('');
        $('#sendMailForm .a-form__file .upload-file-name').text('Прикрепить документ');
        $('#sendMailForm .a-form__input').val('');
    };

    const stopClickPropagation = (e) => {
        e.stopPropagation();
    };

    if (feedbackModal && buttonOpenFeedbackModal) {
        buttonOpenFeedbackModal.addEventListener("click", (e) => {
            openModal(e, feedbackModal);
        });
    }

    if (Modal && buttonOpenModalHead) {
        buttonOpenModalHead.addEventListener("click", (e) => {
            openModal(e, Modal);
        });
    }
    if (Modal && buttonOpenModalNav) {
        buttonOpenModalNav.addEventListener("click", (e) => {
            openModal(e, Modal);
        });
    }
    if (Modal && buttonOpenModalMobile) {
        buttonOpenModalMobile.addEventListener("click", (e) => {
            openModal(e, Modal);
        });
    }
    if (Modal && buttonOpenModalTabIS) {
        buttonOpenModalTabIS.addEventListener("click", (e) => {
            openModal(e, Modal);
        });
    }
    if (Modal && buttonOpenModalTabIB) {
        buttonOpenModalTabIB.addEventListener("click", (e) => {
            openModal(e, Modal);
        });
    }
    if (Modal && buttonOpenModalTabSA) {
        buttonOpenModalTabSA.addEventListener("click", (e) => {
            openModal(e, Modal);
        });
    }
    if (Modal && buttonOpenModalTabPO) {
        buttonOpenModalTabPO.addEventListener("click", (e) => {
            openModal(e, Modal);
        });
    }

};
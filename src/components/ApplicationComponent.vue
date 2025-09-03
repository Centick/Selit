<template>
    <section @click="close()" class="section modal__section grid justify-items-end">
        <div @click="container_clicked()" class="container modal__container grid justify-content-start gap-20">
            <img class="cross" @click.prevent="close()" src="../assets/img/icons/cross.svg" alt="img">
            <h3 class="h2 width-100">Обсудить проект</h3>
            <p>Поделитесь с нами информацией о вашем проекте. Мы готовы рассмотреть его детально и обсудить возможные пути реализации или развития. Опишите вашу идею в любом удобном формате — мы проанализируем предложение и дадим обратную связь.</p>
            <form class="modal-form width-100 grid grid-column gap-10">
                <div class="width-100 grid grid-column gap-5">
                    <div class="grid grid-3rows gap-10">
                        <input v-model="name" :class="{'input--error': nameError}" id="name-input" class="input width-100" placeholder="Ваше имя" type="text">
                        <MaskInput :class="{'input--error': phoneError}" id="phone-input" class="input width-100" placeholder="Телефон" type="tel" v-model="phone" mask="+# (###)-###-##-##" />
                        <input :class="{'input--error': emailError}" v-model="email" id="email-input" class="input width-100" placeholder="Почта" type="email">
                    </div>
                    <div class="grid grid-3rows gap-10">
                        <span class="error-text">{{ nameError }}</span>
                        <span class="error-text">{{ phoneError }}</span>
                        <span class="error-text">{{ emailError }}</span>
                    </div>
                    <textarea class="input width-100 input_textarea" v-model="text" name="" id="" placeholder="Расскажите о проекте"></textarea>
                </div>
                <label class="input input_file grid grid-row gap-10 align-items-center width-fit-content" for="TZfile">
                    <img class="input_file-icon" src="@/assets/img/icons/paper-clip.svg" alt="paper-clip">
                    <span class="input_file-text weight-700">Прикрепить файл</span>
                    <input id="TZfile" type="file">
                </label>
                <p v-show='isSend' style="color: #0c560c;">Обращение успешно отпровленно, мы свяжемся с вами в скором времени</p>
                <div class="grid grid-row align-self-end justify-content-space-between align-items-center wrap-submit">
                    <p class="politicks">Нажимая на кнопку «Отправить», вы даете <br> согласие на <a class="weight-700" href="#">Политику конфиденциальности</a></p>
                    <button @click.prevent="onSubmit" type="submit" class="btn width-fit-content application-send">
                        <span class="h6">Отправить</span>
                        <img src="@/assets/img/icons/send.svg" width="100px" alt="img">
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    import type { Ref } from "vue";
    import { MaskInput } from 'vue-3-mask';
    import { sendMail } from "@/api/Send.ts";

    const emits = defineEmits(['close']);

    const phone: Ref<string> = ref("");
    const name: Ref<string> = ref("");
    const email: Ref<string> = ref("");
    const text: Ref<string> = ref("");

    const phoneError: Ref<string> = ref("");
    const nameError: Ref<string> = ref("");
    const emailError: Ref<string> = ref("");

    const isSend: Ref<boolean> = ref(false);

    const is_container_clicked: Ref<boolean> = ref(false);
    const onSubmit = async () => {
        // Name Validate
        if(!name.value.trim()){
            nameError.value = errorText.errorName.emptyInput;
        }
        else{
            nameError.value = '';
        }

        // Phone Validate
        if(!phone.value.trim()){
            phoneError.value = errorText.errorPhone.emptyInput;
        }
        else if(phone.value.length !== 18){
            phoneError.value = errorText.errorPhone.incorrectInput;
        }
        else{
            phoneError.value = '';
        }

        // Email Validate
        if(!email.value.trim()){
            emailError.value = errorText.errorEmail.emptyInput;
        }
        else if(!email.value.includes('@') ||  !email.value.includes('.') || email.value[-1] === '.' || email.value[email.value.indexOf('@') + 1] === '.' || email.value[0] === '@' || email.value[email.value.length - 1] === '.'){
            emailError.value = errorText.errorEmail.incorrectInput;
        }
        else{
            emailError.value = '';
        }

        if(!nameError.value && !emailError.value && !phoneError.value){
            let file: any = document.getElementById('TZfile') as HTMLInputElement;
            file = file.files as FileList;
            if(file[0]){
                file = file[0] as File;
            }
            else{
                file = null;
            }
            if(!isSend.value){
                isSend.value = true;
                setTimeout(() => {
                    isSend.value = false;
                }, 10000);
                await sendMail(name.value, phone.value, email.value, text.value, file);
            }
        }
    };

    const close = () => {
        if(!is_container_clicked.value){
            emits('close');
        }
    };

    const container_clicked = () => {
        is_container_clicked.value = true;
        setTimeout(() => {
            is_container_clicked.value = false;
        }, 100);
    };

    const errorText = {
        errorName: {
            emptyInput: 'Имя обязательно'
        },
        errorPhone: {
            emptyInput: 'Телефон обязателен',
            incorrectInput: 'Некорректный номер телефона'
        },
        errorEmail: {
            emptyInput: 'Почта обязателена',
            incorrectInput: 'Введите корректный email'
        }
    }
</script>

<style scoped>
    .input_textarea{
        height: 200px;
        resize: none;
    }

    .input_file{
        cursor: pointer;
        background-color: var(--colorWhite);
        border: 1px solid rgb(180, 180, 180);
        transition: .15s ease-in;
        /* border-radius: var(--borderRadiusBig); */
    }

    .input_file-icon{
        width: 22px;
        height: 22px;
        fill: var(--colorBlack) !important;
    }

    .input_file:hover{
        background-color: var(--colorBlack);
        border-color: var(--colorBlack);
    }

    .input_file:hover img{
        filter: invert(1);
    }

    .input_file:active{
        background-color: var(--colorMain);
        border-color: var(--colorMain);
        transition: .05s;
    }
    

    .input_file:hover .input_file-text{
        color: var(--colorWhite);
    }

    .input_file:hover .input_file-icon{
        fill: var(--colorWhite);
    }

    .input_file > input{
        display: none;
    }

    .politicks, .politicks > a{
        font-size: 16px;
    }

    .grid-3rows{
        grid-template-columns: 1fr 1fr 1fr;
    }

    .error-text{
        font-size: 14px;
        color: #ff6f61;
    }

    .input--error{
        background-color: #ffeae8;
    }

    .modal-form{
        grid-template-rows: auto auto 1fr;
    }

    .modal__container{
        grid-template-rows: auto auto 1fr;
    }

    .application-send{
        position: relative;
        padding-right: 60px;
    }

    .application-send > img{
        position: absolute;
        top: 26px;
        right: 32px;
        width: 22px;
        transform: rotate(45deg);
        cursor: pointer;
        z-index: 4;
    }


    .modal__container{
        overflow-y: overlay;
    }

    @media (max-width: 768px) {
        .wrap-submit{
            grid-auto-flow: row;
            align-items: center;
            align-content: center;
            justify-items: center;
            justify-content: center;
            gap: 20px;
        }

        .grid-3rows{
            grid-template-columns: 1fr;
        }
    }

</style>
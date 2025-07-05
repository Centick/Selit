<template>
    <section class="section modal__section grid justify-items-end">
        <div class="container modal__container grid justify-content-start gap-20">
            <img class="cross" @click.prevent = "emits('close_application_modal')" src="../assets/img/icons/cross.svg" alt="img">
            <h3 class="h2 width-100">Обсудить проект</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quas id saepe suscipit ipsum voluptatibus doloribus quibusdam aperiam. Delectus cumque voluptates provident quas sunt deleniti natus reiciendis optio dolor exercitationem!</p>
            <form @submit.prevent="onSubmit" action="#" class="modal-form width-100 grid grid-column gap-10">
                <div class="width-100 grid grid-column gap-5">
                    <div class="grid grid-3rows gap-10">
                        <input class="input width-100 input--error" placeholder="Ваше имя" type="text">
                        <input class="input width-100" placeholder="Телефон" type="tel" v-model="phoneNumber" :mask="'+# (###)-###-##-##'">
                        <input class="input width-100" placeholder="Почта" type="email">
                    </div>
                    <div class="grid grid-3rows gap-10">
                        <span class="error-text">Имя не должно содержать специсимволов</span>
                        <span class="error-text"></span>
                        <span class="error-text"></span>
                    </div>
                    <textarea class="input width-100 input_textarea" name="" id="" placeholder="Расскажите о проекте"></textarea>
                </div>
                <label class="input input_file grid grid-row gap-10 align-items-center width-fit-content" for="TZfile">
                    <img class="input_file-icon" src="@/assets/img/icons/paper-clip.svg" alt="paper-clip">
                    <span class="input_file-text weight-700" >Прикрепить файл</span>
                    <input id="TZfile" multiple type="file">
                </label>
                <div class="wrap-submit grid grid-row justify-content-space-between align-items-center">
                    <p class="politicks">Нажимая на кнопку «Отправить», вы даете <br> согласие на <a class="weight-700" href="#">Политику конфиденциальности</a></p>
                    <input type="submit" class="btn width-fit-content" value="Отправить">
                </div>
                
            </form>
        </div>
    </section>
</template>

<script lang="ts" setup>
    import { Ref, ref } from 'vue';

    const emits = defineEmits(['close_application_modal']);

    const phoneNumber = ref("");
    const onSubmit = () => {
        alert(`Ваш номер телефона: ${phoneNumber.value}`);
    };

    const errorText = {
        errorName: {
            emtemptyInput: 'Имя обязательно',
            incorrectInput: 'Имя не должно содержать спецсимволы'
        },
        errorPhone: {
            emtemptyInput: 'Телефон обязателен',
            incorrectInput: 'Некорректный номер телефона'
        },
        errorEmail: {
            emtemptyInput: 'Почта обязателена',
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
        width: 20px;
        height: 20px;
        fill: var(--colorBlack) !important;
    }

    .input_file:hover{
        background-color: var(--colorBlack);
        border-color: var(--colorBlack);
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

</style>
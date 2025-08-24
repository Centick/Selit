import axios from "axios";

export const sendMail = async (name: string, phone: string, email: string, text: string, file: File | null) => {
    return await axios.post(window.origin + '/api/send/', {
        name,
        phone,
        email,
        text,
        file
    }, {
        headers: {"Content-Type": 'multipart/form-data'}
    });
};
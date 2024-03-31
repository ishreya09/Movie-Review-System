import { postData } from './API';

const sendDataToBackend = async () => {
    try {
        const data = {
            name: "abc",
            email: "abc@gmail.com",
            password: "abc"
         };
        const response = await postData('/user/add', data);
        console.log('Response from server:', response);
    } catch (error) {
        console.error('Error sending data:', error);
    }
};

sendDataToBackend();
import Cookies from 'js-cookie';

function setCookie(name){
    Cookies.set(name, null, { expires: 30 });
}

export default setCookie;
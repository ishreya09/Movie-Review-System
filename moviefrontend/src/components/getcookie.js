import Cookies from 'js-cookie';

function getCookie(name){
    return  Cookies.get(name) || null;
}

export default getCookie;
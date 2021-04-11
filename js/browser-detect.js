export const browserDetect = () => {
    /* определяем браузер только при загрузке стр */
    function get_name_browser() {
        // получаем данные userAgent
        var ua = navigator.userAgent;
        // console.log(ua);

        // с помощью регулярок проверяем наличие текста,
        // соответствующие тому или иному браузеру
        if (ua.search(/Edge/) > 0) {
            $('html').addClass('edge');
            return 'Edge'
        }
        // if (ua.search(/Chrome/) > 0) return 'Google Chrome';
        if (ua.search(/Safari/) > 0) {
            $('html').addClass('safari');
            // return 'Safari';
            if (ua.search(/Android/) > 0) {
                $('html').addClass('android');
                // return 'Android';
            }
        }
        if (ua.search(/Android/) > 0) {
            $('html').addClass('android');
            // return 'Android';
        }
        if ((ua.search(/Android/) > 0) && (ua.search(/Safari/) > 0)){
            $('html').addClass('android');
            return 'Android';
        }
        if (ua.search(/Firefox/) > 0) {
            $('html').addClass('firefox');
            return 'Firefox';
        }
        if (ua.search(/Opera/) > 0) return 'Opera';
        if (ua.search(/Safari/) > 0) return 'Safari';
        if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
        if (ua.search(/rv:11./) > 0) {
            $('html').addClass('ie');
            return 'Internet Explorer 11';
        }
        return 'Не определен';
    }

    console.log(get_name_browser());
}
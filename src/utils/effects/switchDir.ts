import {IThunkAction} from '../types/reduxTypes';

const switchDir = (): IThunkAction => () => {
    const body = document.getElementsByTagName('body')[0];

    function changeElement(dir: string) {
        body.dir = dir;
    }

    if (!body.dir || body.dir === 'ltr') {
        changeElement('rtl');
    } else {
        changeElement('lrt');
    }
};

export default switchDir;

interface UA {
    mobile:string;
    blackberry:string;
    game:string;
    firefox:string;
    mac_os_x:string;
    ios:string;
    ie:string;
    opera:string;
    silk_accelerated:boolean;
    fluidapp:any;
    webkit:boolean;
    chrome:string
    safari:string;
    windows_phone:string;
    gecko:string;
    desktop:string;
}

interface cssua {
    ua:UA;
    userAgent:string;
}


declare var cssua:cssua;
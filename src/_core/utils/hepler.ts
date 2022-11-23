import { MAIN_IMAGE_ADDRESS, SMALL_IMAGE_ADDRESS } from '_core/configs/config'

export function calcTotalPages(total: number, pageSize: number): number {
    const value = Math.ceil(Number(total) / Number(pageSize));
    return isNaN(value) ? 1 : value;
}
export function replaceJSX(str: string, find: string, replace: any): any {
    let parts = str.split(find);
    let result = [];
    for (let i = 0; i < parts.length; i++) {
        result.push(parts[i]);
        result.push(replace);
    }
    result.pop();
    return result;
}
export const b64toBlob = async (base64: string) => {
    const res = await fetch(base64);
    return res.blob();
};


export interface iImage {
    resized?: string,
    main?: string,
}
export const getPublicImage = (avatar: any, key: string = 'filename'): iImage => {
    let imageUrl: iImage = {};
    if (avatar && avatar.length > 0) {

        imageUrl.main = MAIN_IMAGE_ADDRESS + avatar?.[0]?.[key];
        imageUrl.resized = SMALL_IMAGE_ADDRESS + avatar?.[0]?.[key];
    } else {
        imageUrl.main = '/images/avatars/1.png';
    }
    return imageUrl;
}
export const calcDiscount = (price: number, discount: number): number => {
    if (discount && discount > 0) {
        const pointed = discount / 100;
        return price - price * pointed;
    } else {
        return price;
    }
}
export const getFixed = (price: number, max: number = 16) => {
    if (typeof price === "number") {
        return Number(price)
            .toFixed(max)
            .replace(/(\.0+|0+)$/, "");
    } else {
        return price;
    }
};
export const nFormatter = (num?: number, digits?: number): string => {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
    ];
    if (num) {
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var item = lookup.slice().reverse().find(function (item) {
            return num >= item.value;
        });
        return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
    } else {
        return '';
    }

}
const convertScientific = (value: any) => {
    if (Math.abs(value) < 1.0) {
        const e = parseInt(value.toString().split("e-")[1]);
        if (e) {
            value *= Math.pow(10, e - 1);
            value = "0." + new Array(e).join("0") + value.toString().substring(2);
        }
    } else {
        let e = parseInt(value.toString().split("+")[1]);
        if (e > 20) {
            e -= 20;
            value /= Math.pow(10, e);
            value += new Array(e + 1).join("0");
        }
    }

    // return precision ? +value : value;
    return value;
};
const truncateToDecimals = (num: number, dec = 2) => {
    if (!num || isNaN(+num)) return;

    const stringNum = String(num);
    const [, after] = stringNum?.split?.(".");

    if (!after || after?.length <= dec) {
        return +num;
    }

    const calcDec = Math.pow(10, dec);
    return Math.trunc(+num * calcDec) / calcDec;
};
const addComma = (num: number, dec?: any): any => {
    if (!num || isNaN(+num)) return 0;

    let number = convertScientific(num);

    if (dec) {
        number = convertScientific(truncateToDecimals(num, dec));
    }

    const [before, after] = String(number)?.split?.(".");
    let output = before?.replace?.(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (after) {
        output += "." + after;
    }
    return output;
    // return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export const fixNumber = (value: number, digits = 3, addingComma = false) => {
    let output = 0;

    if (!value || isNaN(+value)) return output;

    if (digits && digits <= 100 && digits >= 0) {
        output = convertScientific(parseFloat((+value)?.toFixed?.(digits)));
    } else {
        output = parseFloat((+value)?.toFixed?.(3));
    }

    if (addingComma) {
        output = addComma(output);
    }

    return output;
};

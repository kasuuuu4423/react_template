import { isMobile } from 'react-device-detect';

export const replaceAllReturns = (text: string): string =>{
    return text.replace(/\\n/g, '\n');
}

export const map = (target_num: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
	const input_diff = in_max - target_num
	const input_range = in_max - in_min
	const output_range = out_max - out_min
	const percentage = input_diff / input_range
	const out_diff = percentage * output_range
	const rs = out_max - out_diff
	return rs
}

export const sortByKeys = (object: Object) =>{
    const pairs = Object.entries(object);
    pairs.sort(function(p1, p2){
        let p1Key = p1[0], p2Key = p2[0];
        if(p1Key < p2Key){ return -1; }
        if(p1Key > p2Key){ return 1; }
        return 0;
    })
    const newObject = Object.fromEntries(pairs);
    return newObject;
}


export const getWindowSize = () =>{
    return {
        w: isMobile ? window.screen.width : document.documentElement.clientWidth,
        h: isMobile ? window.screen.height : document.documentElement.clientHeight,
    };
}
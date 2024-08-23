type GlobalThis =  { document : Document, window: Window }
const regExp = /^\s+|\s+$/g;
//  function $a
export const replaceSpaces = (a: string, c: number) => {
    if (a) {
        const result =  String.prototype.trim ? String.prototype.trim.call(a) : ("" + a).replace(regExp, '');
        return c && result.length > c ? result.substring(0, c) : result
    }
    return ""
}
// function $d
export const getVisualViewportData = (globalThis: GlobalThis) => {
    const { window } = globalThis
    const { visualViewport } = window
    const { width , height, scale = 1 } = visualViewport || {}

    return !width || !height ? null : [Math.floor(width), Math.floor(height), scale]
}

 // function Hc(a)
export const getBody = ( globalThis: GlobalThis ) => {
    const  { document } = globalThis
    try {
        return document.getElementsByTagName("body")[0]
    } catch {
        return null
    }
} 
 // function Oc 

 export const getScaledViewPort = (globalThis: GlobalThis) => {
    const viewPort = getVisualViewportData(globalThis);
    if(viewPort) {
        const [width, height, scale] = viewPort;
        return [Math.round(width * scale), Math.round(height * scale)]
    }
 }

 export const fc = (globalThis: GlobalThis) => {
    const  { document } = globalThis || {}
    const docElement = document.documentElement;
    return "CSS1Compat" === document.compatMode ? docElement : getBody(globalThis)
 }

 //Nc(a)
 export const getBoundingClientRect  = (element: HTMLElement) => {
    return element.getBoundingClientRect && element.getBoundingClientRect()
 }

 // Le
 export const getDimensions = (globalThis: GlobalThis, c: HTMLElement) => {
    const  { document } = globalThis;
    if (c === getBody(globalThis) || c === document.documentElement) {
        const el = fc(globalThis);

        const viewPort = <number[]>getScaledViewPort(globalThis);
        const [width, height] = viewPort
        return [Math.max(el?.scrollWidth ?? 0, width), Math.max(el?.scrollHeight ?? 0, height)]
    }

    return getBoundingClientRect(c) ? [getBoundingClientRect(c).width, getBoundingClientRect(c).height] : [c.offsetWidth, c.offsetHeight]
 }

 //fa
 export const isString = <T>(str: T) => {
    return 'string' === typeof str
 }

 //La
 export const getElementName = (element: HTMLElement) => {
    const name = element.nodeName;
    if (isString(name)) {
        return name;
    }else {
        return element.tagName
    }
 }

//Ke
 export const getNode = (globalThis: GlobalThis, el: HTMLElement) => {
    const { document } = globalThis;
    return el && el !== document.documentElement ? el === getBody(globalThis) ? document.documentElement : el.parentNode : null
 }

 //Dj
 export const dj = (globalThis: GlobalThis, element: HTMLElement, b: unknown) => {
    const node = getNode(globalThis, element)
    if (node) {
        const childNode = node.childNodes;
        const  d = element && element.nodeName;
        let e = 0;
        for (  let f = 0; f < childNode.length; f +=1) {
            if ( d === (childNode[f] && childNode[f].nodeName)) {
                if (element === childNode[f]) {
                    return e
                }
                if (b && childNode[f] === b) {
                    break
                } else {
                    e++;
                }
            }
        }
    }
    return 0
 }
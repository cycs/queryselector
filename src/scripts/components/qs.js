export function qs(selector, el) {
    el = document.querySelector(el) || document;    
    return el.querySelector(selector);
}

export function qsa(selector, el) {
    el = document.querySelector(el) || document;    
    return el.querySelectorAll(selector);
}
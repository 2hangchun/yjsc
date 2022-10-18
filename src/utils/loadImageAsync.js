export const loadImageAsync = function (path) {
    return new Promise(function (resolve, reject) {
        const image = new Image();
        image.src = path;
        image.onload = function () {
            resolve(image.src)
        }
        image.onerror = function () {
            reject(new Error('Can not load image at ', path))
        }
    });
};
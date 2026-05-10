import { buildLoader } from "./loader-view.js";

export const loaderController = (loaderContainer) => {
    
    const showLoader = () => {
        loaderContainer.style.display = 'flex'

        const loader = buildLoader()
        loaderContainer.innerHTML = loader;
    }

    const hideLoader = () => {

        loaderContainer.style.display = 'none'
        loaderContainer.innerHTML = '';
    } 

    return {
        showLoader,
        hideLoader
    }
}



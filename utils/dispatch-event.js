export function dispatchEvent (container, name, message=null, type=null) {
    const event = new CustomEvent(name, {   
        detail: {
            message: message,
            type: type
        }
    });

    container.dispatchEvent(event);
}
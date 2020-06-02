

export const saveContext = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem('state', serializedState);
    } catch (error) {
        console.error(error);
    }
};

export const getContext = () => {
    try {
        const serializedState = sessionStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        console.error(error);
        return undefined;
    }
};


export const removeContext = () => {
    console.log("remove");
    try {
        sessionStorage.clear();
        
    } catch (error) {
        console.error(error);
    }
};
export const validateString = (value:unknown, maxlength:number)=>{
    if (!value|| typeof value !== "string" || value.length> maxlength){
        return false;
    }
    else{
        return true
    }
}

export const getErrorMessage = (error: unknown): string => {
    let message: string;
    
    if (error instanceof Error) {
        message = error.message;    
    } else if (error && typeof error === 'object' && 'message' in error) {
        message = String(error.message);
    } else if (error === 'string') { // Added missing quote
        message = error;
    } else {
        message = "Something went wrong"; // Added missing closing parenthesis
    }
    
    return message;
};

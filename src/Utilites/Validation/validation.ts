export const rehired = (value: string) => {
    if (value) return undefined;
        return "it is field rehired ";

};

export const maxLength = (maxlength:number) =>  (value: string) => {

     if (value && value.length > maxlength)  return `Max length ${maxlength} symbols `;
     return  undefined
};


export const minLengthCreator = (minLength: number) => (value: string) => {
     if (value && value.length < minLength)   return `Min Length ${minLength} symbols`;
      return undefined
};



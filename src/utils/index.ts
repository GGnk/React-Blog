
export const guid = ():string => {
    const s4 = ():string  => Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

export const toObject = <K extends string, V, T extends { [P in K]: V }>(keyValuePair: { key: K, value: V }): T => {
    const obj: any = {}
    obj[keyValuePair.key] = keyValuePair.value
    return obj as T
};

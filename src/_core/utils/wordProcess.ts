export const subWords = (str: string, from: number, len?: number) => {
    var wordsArr = str.trim().split(/\s+/);
    var words = [];
    var wordLen = wordsArr.length;
    if (len != null) {
        wordLen = len;
    }
    for (var i = from; i < wordLen; i++) {
        words.push(wordsArr[i]);
    }
    return words.join(' ');
}
export const wordLen = (str?: string) => {
    let retWordLen = 0
    if (str != null) {
        retWordLen = str.trim().split(/\s+/).length;
    }
    return retWordLen;
}
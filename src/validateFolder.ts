const startFromUppercase = (folderName: String) => {
    return folderName.match(/^[A-Z].*/) ? '' : 'Name should start from uppercase'
}

const atLeast3Letters = (folderName: String) => {
    return folderName.length > 3 ? '' : 'Name is to short'
}

const validateFolder = (folderName: String) => {
    return [
        startFromUppercase,
        atLeast3Letters,
    ].reduce((prev, cb) => {
        if (prev) {
            return prev
        }

        return cb(folderName)
    }, '')
}

export default validateFolder

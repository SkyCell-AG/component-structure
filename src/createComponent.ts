import {
    window,
} from 'vscode'

import validateFolder from './validateFolder'
import createComponentFiles from './createComponentFiles'

const createComponent = ({
    fsPath,
}: {
    fsPath: string
}) => {
    window.showInputBox({
        prompt: 'Insert component name',
        placeHolder: 'Component',
        validateInput: validateFolder,
    })
        .then((componentName) => {
            if (!componentName) {
                return
            }

            createComponentFiles(fsPath, componentName)
        })
}

export default createComponent

import * as vscode from 'vscode'
import * as path from 'path'

const templateFileName = 'template.hbs'

export const templatePath = path.join(
    vscode.workspace.rootPath || '',
    templateFileName,
)

export const defaultTemplate = `
index.js
export { default } from './{{ComponentName}}Container'
///////////
{{ComponentName}}Container.js
import React from 'react'

import {{ComponentName}} from './{{ComponentName}}'

const {{ComponentName}}Container = (props) => {
    return (
        <{{ComponentName}}
            {...props}
        />
    )
}

export default {{ComponentName}}Container
///////////
{{ComponentName}}.js
import React from 'react'

import theme from './{{ComponentName}}.module.css'

const propTypes = {
}

const defaultProps = {
}

const {{ComponentName}} = (props) => {

return (
        <div className={theme.root}>
            {{ComponentName}}
        </div>
    )
}

{{ComponentName}}.propTypes = propTypes
{{ComponentName}}.defaultProps = defaultProps

export default {{ComponentName}}
///////////
{{ComponentName}}.module.css
.root {
    background: green;
}
///////////
`

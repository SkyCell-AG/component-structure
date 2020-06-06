1. Create file template.hbs in the root of the project
2. Right click where you want to create a project with structure defined in template file

> [![Watch the video](https://i.ytimg.com/vi/sDemlwm0UHA/hqdefault.jpg)](https://youtu.be/sDemlwm0UHA)

## Example of component template

```md
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

import theme from "./{{ComponentName}}.module.css"

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
```

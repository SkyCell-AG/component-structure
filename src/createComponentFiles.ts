import {
    window,
} from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as mustache from 'mustache';

import {
    templatePath,
    defaultTemplate,
} from './constants';

const SEPARATOR = '///////////';

const createComponentFiles = (
    fsPath: string,
    ComponentName: string,
) => {
    const ComponentFolder = path.join(fsPath, ComponentName);

    fs.mkdirSync(ComponentFolder);

    const data = fs.existsSync(templatePath) ?
        fs.readFileSync(templatePath, 'utf8') :
        defaultTemplate;

    data.split(SEPARATOR)
        .map((file) => file.trimLeft())
        .filter((str) => {
            return str;
        })
        .forEach((file) => {
            const separatorIndex = file.indexOf('\n');
            const fileNameTemplate = file.slice(0, separatorIndex);
            const contentTemplate = file.slice(separatorIndex + 1);

            const params = {
                ComponentName,
            };

            const err = fs.writeFileSync(
                path.join(
                    ComponentFolder,
                    mustache.render(fileNameTemplate, params),
                ),
                mustache.render(contentTemplate, params),
            );

            window.showErrorMessage(JSON.stringify(err));
        });
};

export default createComponentFiles;

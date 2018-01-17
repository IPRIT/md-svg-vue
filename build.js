const path = require('path');
const fs = require('fs');
const jsonFormat = require('json-format');
const { promisify } = require('util');
const kebabCase = require('lodash').kebabCase;

const readFileAsync = promisify(fs.readFile);
const readDirAsync = promisify(fs.readdir);
const writeFileAsync = promisify(fs.writeFile);

const ICONS_NS = [
  'action', 'alert', 'av', 'communication', 'content', 'device', 'editor', 'file',
  'hardware', 'image', 'maps', 'navigation', 'notification', 'places', 'social', 'toggle'
];
const DIST_PATH = path.resolve(__dirname, 'dist');
const SVG_PATH = path.resolve(__dirname, 'node_modules/material-design-icons');
const TPL_PATH = path.resolve(__dirname, 'build.vue');
const PKG_FILE = path.resolve(__dirname, 'package.json');

function toPascalCase (str) {
  return str
    .toLowerCase()
    .split(/[-_]/g)
    .map(token => token.charAt(0).toUpperCase() + token.slice(1))
    .join('')
}

const clearPackage = packageData => {
  return Object.keys(packageData).reduce((p, key) => {
    if (!/devDependencies|dependencies/.test(key)) {
      return { ...p, [key]: packageData[key] }
    }
    return p;
  }, {});
};

const copyPackage = async (sourcePath, targetPath) => {
  const packageData = await readFileAsync(sourcePath, { encoding: 'utf8' });
  const cleanPackageData = clearPackage(JSON.parse(packageData));

  writeFileAsync(targetPath, jsonFormat(cleanPackageData, {
    type: 'space',
    size: 2
  }));
};

const populateTemplate = (template, component) => {
  return {
    ns: component.ns,
    name: component.name,
    content: template
      .replace(/\{\{icon\}\}/g, kebabCase(component.name))
      .replace(/\{\{path\}\}/g, component.path)
  }
};

const buildIconComponents = async (templatePath, components) => {
  const template = await readFileAsync(templatePath);

  return components.map(component =>
    populateTemplate(template.toString('utf-8'), component)
  )
};

const componentName = (name, ext = '.vue') => {
  return `Md${name}${ext}`;
};

const writeIconComponents = async (ns, buildPath, components) => {
  buildPath = path.join(buildPath, ns);
  checkCreateDir(buildPath);
  components.forEach(component => {
    console.log(path.join(buildPath, componentName(component.name)));
    writeFileAsync(path.join(buildPath, componentName(component.name)), component.content)
  })
};

const checkCreateDir = (path) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
};

const writeIndex = async (ns, buildPath, components, global = false) => {
  if (!global) {
    buildPath = path.join(buildPath, ns);
  }
  checkCreateDir(buildPath);
  let fileContent = components.reduce((acc, component) => {
    return acc + `export ${componentName(component.name, '')} from './${global ? `${component.ns}/` : ''}${componentName(component.name)}';\n`;
  }, '');
  writeFileAsync(path.join(buildPath, `index.js`), fileContent);
};

const buildIconBodyList = (ns, svgPath, svgList) => {
  let list = svgList.filter(svg => /(24px)/gi.test(svg))
    .map(async svg => {
      return {
        ns,
        name: toPascalCase(svg).slice(0, -8).slice(2),
        path: await (async () => {
          const svgFile = await readFileAsync(path.join(svgPath, svg));
          const matches = /\sd="(.*)"/.exec(svgFile);

          return matches ? matches[1] : undefined
        })()
      };
    });
  return Promise.all(list);
};

async function build () {
  let allComponents = [];
  for (let ns of ICONS_NS) {
    const nsPath = path.join(SVG_PATH, `${ns}/svg/production`);
    const svgList = await readDirAsync(nsPath);
    const svgBodyList = await buildIconBodyList(ns, nsPath, svgList);
    const iconComponents = await buildIconComponents(TPL_PATH, svgBodyList);
    await writeIconComponents(ns, DIST_PATH, iconComponents);
    await writeIndex(ns, DIST_PATH, iconComponents);

    allComponents.push(...iconComponents);
  }
  await writeIndex('', DIST_PATH, allComponents, true);
  await copyPackage(PKG_FILE, path.resolve(DIST_PATH, 'package.json'))
}

build().catch(console.error.bind(console));

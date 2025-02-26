import fs from 'fs'
import path, { dirname } from 'path'
import chalk from 'chalk'
import childProcess from 'child_process'
import {fileURLToPath} from "url";
import {createRequire} from "module";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const VERSION = getVersion()
const PACKAGE_JSON = getPackageJson()
const CHANGELOG_MD_CONTENT = readFile('../CHANGELOG.md')

const issuesFound = []

function runAllValidations () {
  if (!VERSION) {
    return reportCheckSkipped()
  }

  validateSemverCompatibility()
  validatePackageJsonVersion()
  validateChangelogHasVersion()
  validateChangelogHasVersionOnTop()
  validateChangelogAnchorsLegend()
  report()
}

function validateSemverCompatibility () {
  const semverRe = /^\d+\.\d+\.\d+((-rc|-x)\.\d+)?$/i

  if (!semverRe.test(VERSION)) {
    issuesFound.push(`Version ${VERSION} is not semver compatible`)
  }
}

function validatePackageJsonVersion () {
  if (PACKAGE_JSON.version !== VERSION) {
    issuesFound
      .push(`package.json version should equal ${VERSION}, got ${PACKAGE_JSON.version}`)
  }
}

function validateChangelogHasVersion () {
  const todayYmd = new Date().toISOString().split('T')[0] // YYYY-MM-DD
  const releaseTagRe =
    new RegExp(`^## \\[${escapeRe(VERSION)}\\] - ${todayYmd}$`, 'm')

  if (!releaseTagRe.test(CHANGELOG_MD_CONTENT)) {
    issuesFound
      .push(`"## [${VERSION}] - ${todayYmd}" is absent in CHANGELOG.md`)
  }
}

function validateChangelogHasVersionOnTop () {
  const todayYmd = new Date().toISOString().split('T')[0] // YYYY-MM-DD
  const releaseTagIsNotTopRe = new RegExp(
    '## \\[\\d+\\.\\d+\\.\\d+((-rc|-x)\\.\\d+)?\\][\\s\\S]*' + // any other tag
    `## \\[${escapeRe(VERSION)}\\] - ${todayYmd}`, // the new
    'i',
  )

  if (releaseTagIsNotTopRe.test(CHANGELOG_MD_CONTENT)) {
    issuesFound.push(`The ${VERSION} is not the top tag in CHANGELOG.md`)
  }
}

function validateChangelogAnchorsLegend () {
  const baseRepoUrl = 'https://github.com/rarimo/freedomtool-landing'
  const anyReleaseTagRe =
    /## \[\d+\.\d+\.\d+((-rc|-x)\.\d+)?\] - \d{4}-\d{2}-\d{2}/gi

  const expectedAnchorsLegend =
    `[Unreleased]: ${baseRepoUrl}/compare/${VERSION}...main\n` +
    CHANGELOG_MD_CONTENT
      .match(anyReleaseTagRe)
      .map(tag => tag.match(/\[(.*)\]/)[1])
      .map((cur, curId, arr) => {
        return curId === arr.length - 1
          ? `[${cur}]: ${baseRepoUrl}/tags/${cur}`
          : `[${cur}]: ${baseRepoUrl}/compare/${arr[curId + 1]}...${cur}`
      })
      .join('\n')

  if (!CHANGELOG_MD_CONTENT.includes(expectedAnchorsLegend)) {
    issuesFound.push(`The anchors legend is invalid, should be:\n${expectedAnchorsLegend}`)
  }
}

function report () {
  /* eslint-disable no-console */
  if (issuesFound.length) {
    console.error(chalk.red(`Release sanity check for ${chalk.yellow(VERSION)} failed!`))

    for (const issue of issuesFound) {
      console.error(`${chalk.red(issue)}`)
    }

    process.exitCode = 1
  } else {
    console.log(`${chalk.green(`Release sanity check for ${chalk.yellow(VERSION)} passed`)}`)
  }
  /* eslint-enable no-console */
}

function reportCheckSkipped () {
  /* eslint-disable-next-line no-console */
  console.log(chalk.gray('No version tag found, skipping release sanity check...'))
}

function getVersion () {
  if (process.argv[2]) {
    return process.argv[2]
  }

  const refsReport = exec('git log -1 --format="%D"').toString()
  const versionMatch = refsReport.match(/tag: ([\w\d\-_.]+)/i)
  return versionMatch ? versionMatch[1] : ''
}

function getPackageJson () {
  const require = createRequire(import.meta.url)
  return require('../package.json')
}

function readFile (relativePath) {
  const resolvedPath = path.resolve(__dirname, relativePath)
  return fs.readFileSync(resolvedPath, 'utf8')
}

function escapeRe (string) {
  return string.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
}

function exec (command) {
  return childProcess.execSync(command, {
    cwd: path.resolve(__dirname, '..'),
  })
}

runAllValidations()

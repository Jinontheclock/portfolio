import { execSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const repoRoot = process.cwd();
const prologRoot = resolve(repoRoot, 'ProLog-main');
const prologPackageJson = resolve(prologRoot, 'package.json');

if (!existsSync(prologPackageJson)) {
  throw new Error('ProLog-main/package.json was not found. Confirm the folder exists at /ProLog-main.');
}

const prologNodeModules = resolve(prologRoot, 'node_modules');
if (!existsSync(prologNodeModules)) {
  execSync('npm install', { cwd: prologRoot, stdio: 'inherit' });
}

execSync('npx expo export --platform web --output-dir dist', {
  cwd: prologRoot,
  stdio: 'inherit',
  env: process.env,
});

const prologDist = resolve(prologRoot, 'dist');
const publicDir = resolve(repoRoot, 'public');
const appTargetDir = resolve(publicDir, 'prolog', 'app');
const expoTargetDir = resolve(publicDir, '_expo');
const assetsTargetDir = resolve(publicDir, 'assets');

rmSync(appTargetDir, { recursive: true, force: true });
mkdirSync(appTargetDir, { recursive: true });
cpSync(resolve(prologDist, 'index.html'), resolve(appTargetDir, 'index.html'));

const metadataPath = resolve(prologDist, 'metadata.json');
if (existsSync(metadataPath)) {
  cpSync(metadataPath, resolve(appTargetDir, 'metadata.json'));
}

rmSync(expoTargetDir, { recursive: true, force: true });
cpSync(resolve(prologDist, '_expo'), expoTargetDir, { recursive: true });

mkdirSync(assetsTargetDir, { recursive: true });
rmSync(resolve(assetsTargetDir, 'assets'), { recursive: true, force: true });
rmSync(resolve(assetsTargetDir, 'node_modules'), { recursive: true, force: true });
cpSync(resolve(prologDist, 'assets'), assetsTargetDir, { recursive: true });

console.log('Synced ProLog-main web build into /public for iframe usage.');

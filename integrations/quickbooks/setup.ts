import { beforeAll, afterAll } from 'bun:test';
import { resource } from './resource.ts';

beforeAll(() => {
  // setup code here
  console.log('BEFOREALL: Setup process');
});

afterAll(() => {
  // cleanup code here
  console.log('AFTERALL: Cleanup process');
});

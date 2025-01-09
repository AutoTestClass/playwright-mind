import { expect } from 'playwright/test';
import { test } from './fixture/fixture';

test.beforeEach(async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc/");
});

test('ai todo', async ({ page, ai, aiQuery }) => {
  await ai("在输入框 input 输入 今天学习 JS，按回车键");
});

test('ai todo2', async ({ page, ai, aiQuery }) => {
  await ai("在输入框 input 输入 今天学习 JS，按回车键");
});
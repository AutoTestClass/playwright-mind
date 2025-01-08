import { expect } from "@playwright/test";
import { test } from "./fixture";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.baidu.com");
  await page.waitForLoadState("networkidle");
});

test("search headphone on baidu", async ({ page, ai, aiQuery, aiAssert }) => {
  // 👀 输入关键字，执行搜索
  await ai('在搜索框输入“playwright”，敲回车');
  await page.waitForTimeout(3000);

  // 👀 找到列表里耳机相关的信息
  const items = await aiQuery(
    'string[], 搜索结果列表中包含“playwright”相关的标题'
  );

  console.log("search result", items);
  console.log("search result number", items?.length);
  // 断言大于 1 条搜索结果
  expect(items?.length).toBeGreaterThan(1);

  // 👀 用 AI 断言
  await aiAssert("检查搜索结果列表第一条标题是否包含“playwright”字符串");
});
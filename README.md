# Miao Ke Portfolio

这是一个使用 `Vite + React` 搭建的个人作品集项目。

## 本地启动

```bash
npm install
npm run dev
```

默认会启动在 `http://localhost:5173/`。

## 主要目录

```text
public/
  images/
    profile/      # 头像
    projects/     # 项目配图
src/
  components/     # 页面组件
  data/
    siteContent.js # 文案、项目数据、联系方式
```

## 后续维护

- 改文案：编辑 `src/data/siteContent.js`
- 换头像：替换 `public/images/profile/portrait.svg`，或者改成你自己的 `jpg/png` 并同步修改 `src/data/siteContent.js`
- 换项目配图：替换 `public/images/projects/` 里的图片，并同步更新 `src/data/siteContent.js` 中对应路径
- 新增项目：在 `src/data/siteContent.js` 的 `projects` 数组里新增一项

## 图片格式建议

- 头像建议使用 `jpg` 或 `png`
- 项目横幅建议比例接近 `16:9`
- 图片文件名尽量使用英文、短横线命名，例如 `my-project-cover.jpg`

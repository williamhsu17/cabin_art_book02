# 台灣傳統建築 古flash網頁翻新Book02/10

- [Demo](#Demo)
- [本機端測試](#本機端測試)
- [頁面紀錄](#頁面紀錄)
- [變更模式](#變更模式)

## Demo
使用原始demo連結觀看flash版本的效果以及內容
[原始demo連結](https://www.cabindesigntaipei.com/demo/arte/02%20architecture/index.htm)

測試中的更新網頁：
[專案Demo](https://williamhsu17.github.io/cabin_art_book02/)

需要使用chrome並啟用flash來觀看內容
[Ruffle.rs](https://ruffle.rs/)

## 本機端測試
#### 使用firefox
在firefox上面進行本機測試，需要進行config修改：

於瀏覽地址輸入 `about:config`

將設定 `security.fileuri.strict_origin_policy` 設定為 `False`

## 頁面紀錄
頁面紀錄清單
[google sheet](https://docs.google.com/spreadsheets/d/1PHfJ_SFV85IWU47ebzinCYQAzxREQXfziOu-12nvDDQ/edit?usp=sharing)
<img width="966" alt="圖片" src="https://github.com/williamhsu17/cabin_art_book01/assets/22971294/a6eba5ec-8592-4a75-a727-e32c27d0589f">

## 變更模式
抽換下列連結已更換不同區塊間的模板

const mainBackground = 'images/02_style/m00_bg.jpg';         # 主文區的背景

const navButtonGroupImage = 'images/02_style/top01_01.jpg';  # 按鈕區塊的底圖，在同一區塊的不同小傑也需要更換

const navLogoImage = 'images/02_style/top01.gif';            # 左邊的logo

const navBackgroundImage = 'images/02_style/top07.jpg';      # 上面最底層的背景


抽換左右展開處的顏色背景，每一區塊會改變

<body style="background-image: url('images/02_style/left.gif');">


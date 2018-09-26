## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
1. `<br>`：換行標籤，好像是少數看到沒有結束標籤的。
2. `<nav>`：用於網頁的選單、導覽使用。
3. `<footer>`：用於網頁的頁尾，常用來展示網頁的聯絡方式等細項。

## 請問什麼是盒模型（box modal）
在 HTML 中，所有元素都可被視為一個盒子，盒子裡由內而外含有：實際內容 (content)，內邊距 (padding)，邊界 (border)，以及外邊距 (margin)。可以調整這幾個參數的方式來改變元素配置的位置。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
1. inline：可以跟其他元素排在一起，不能設定寬跟高還有上下的 margin，但可以控制左右的 margin。
2. block：都可以設定，但是在一行內只能有一個元素。
3. inline-block：在一行內可以跟其他元素排在一起，自己可以設定自己的寬高還有 margin。


## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
1. static：預設的排序方式，會依照元素順序排列下去。
2. relative：距離原先要定位的位置離一些指定距離，但不影響到其他元素。
3. absolute：可以絕對定位，定位在一個固定的位置，但上層的 position 屬性不能為 static。
4. fixed：固定在瀏覽器的指定位置，不管螢幕滑動都會固定住。

const extend = require('zhf.extend');

// 应用方法集合
function Applications() {
}

Applications.prototype.extend = extend; // 对象的扩展
Applications.prototype.cookie = require('zhf.cookie'); // 操作cookie
Applications.prototype.createElement = require('zhf.create-element'); // 创建元素节点
Applications.prototype.AddSubtractInput = require('zhf.add-subtract-input'); // 加减操作
Applications.prototype.getDomArray = require('zhf.get-dom-array'); // 获取原生的dom节点并转换成数组
Applications.prototype.getParent = require('zhf.get-parent'); // 获取指定父级
Applications.prototype.htmlToDom = require('zhf.html-to-dom'); // html转成DOM节点
Applications.prototype.browserPlatform = require('zhf.browser-platform'); // 浏览器平台检测
Applications.prototype.offset = require('zhf.offset'); // 获取元素距离文档的left和top
Applications.prototype.scrollMoveTo = require('zhf.scroll-move-to'); // 滚动到指定位置
Applications.prototype.SelectAll = require('zhf.select-all'); // 全选，不选，反选
Applications.prototype.WhenScrollBottom = require('zhf.when-scroll-bottom'); // 当滚动到了浏览器的底部
Applications.prototype.whetherDisableScroll = require('zhf.whether-disable-scroll'); // 是否禁止浏览器滚动

module.exports = new Applications();

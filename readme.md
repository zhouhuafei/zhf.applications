# 应用方法
* 此包不在维护，不建议使用此包。需要哪个包就引入哪个包即可。不应该像现在这样把其他包整合到这个包里，导致里面有任何包更新，我这个包都需要跟着更新一下，增加了维护成本
```
const applications = require('zhf.applications');

applications.isPc(); // true false

applications.scrollToY(100); // 滚动到浏览器y轴100的位置

其他方法请参阅源码0.0
```

# NatTypeChecker
A useful NAT type checker with STUN protocol, base JS.
Using Google stun server, available.

> Quote: 
>
> https://webrtchacks.com/symmetric-nat/
>
> https://jsfiddle.net/5ftsd5c2/17/
>
> https://github.com/fippo/sdp



# Usage
1. Open Chrome, and open `Developer Tools` in Chrome (`F12`)
2. Switch to `Console` tab, Paste the code from `checker.js` into console, then Press `Enter` to run the script
3. `Console` will print your NAT type below.

# Prints
`normal nat`: Means your NAT type is normal NAT type, asymmetric.
`symmetric nat`：Means your NAT type is symmetric NAT type.

# After
This just a little tool to check your NAT type, not an official tools.
As usual, Iphone hotspot wifi sharing is a symmetric NAT, home land network is asymmetric, Switch your network for a test, you will know.
Tanks.


---
---


# NAT类型检查工具
一个使用STUN协议且基于JS的可用的NAT类型检查工具.
使用Google的stun服务器，可用，记得看看自己是否能访问Google。

> 引用/相关文章：
>
> https://webrtchacks.com/symmetric-nat/
>
> https://jsfiddle.net/5ftsd5c2/17/
>
> https://github.com/fippo/sdp



# 用法
1. 打开`Chrome`，打开`开发者工具`(`F12`)
2. 选择`Console`控制台面板并粘贴从`checker.js`复制的代码，按`回车`键运行
3. `Console`控制台会在下方输出你的网络类型


# 输出
`normal nat`: 表示为普通NAT（非对称NAT）
`symmetric nat`：表示对称型NAT


# 写在最后
这是一个测试你的NAT类型小工具，并不是官方的工具。
通常来说，Iphone的热点是对称型的NAT，家庭宽带是非对称的NAT，大家换一下网络测试一下就知道，




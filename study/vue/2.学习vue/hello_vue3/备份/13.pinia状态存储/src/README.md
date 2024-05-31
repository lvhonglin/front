（1）npm i axios安装axios
使用axios，需要async+await
（2）npm i nanoid，也可以npm i uuid，然后使用nanoid()获取到一个id
（3）使用npm i pinia安装
（4）使用import { storeToRefs } from 'pinia';，这个storeToRefs可以让count.ts的states里面的数据也变成响应式的
（5）pinia可以使用$subscribe()实现类似watch的操作
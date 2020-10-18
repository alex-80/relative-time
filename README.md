# relative-time

## Table of Contents

- [Getting Started](#getting_started)
- [Examples](#usage)


## Getting Started <a name = "getting_started"></a>

```bash
npm i @fto/relative-time
```

### Examples <a name = "usage"></a>

```javascript
import { getRelativeTime } from '@fto/relative-time';

const units = {
  "%s 天": 60 * 60 * 1000 * 24,
  "%s 小时": 60 * 60 * 1000,
  "%s 分": 60 * 1000,
  "%s 秒": 1000,
}

getRelativeTime(1000 * 60, units) // 1 分
getRelativeTime(1000, units) // 1 秒
getRelativeTime(1000 + 100, units) // 1 秒
getRelativeTime(1000 * 60 + 1000, units) // 1 分 1 秒

```



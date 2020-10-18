export function getRelativeTime(mills, units = {
  "%s 天": 60 * 60 * 1000 * 24,
  "%s 小时": 60 * 60 * 1000,
  "%s 分": 60 * 1000,
  "%s 秒": 1000,
}) {
  const options = []

  for (let key in units) {
    const unit = units[key]

    options.push({
      tpl: key,
      value: unit
    })

  }

  options.sort((a, b) => a.value > b.value)

  let result = ""

  while (mills > 0) {
    const idx = options.findIndex(item => mills >= item.value)

    if (idx === -1) break
    const item = options[idx]
    const { tpl, value } = item

    const remainder = mills % value

    const num = (mills - remainder) / value

    mills -= (mills - remainder)

    result += tpl.replace(/\%s/g, num) + " "
    
  }

  return result.endsWith(" ") ? result.substring(0, result.length - 1) : result
}

const harry = function (arr) {
    const obj = {}
    const repeat = []
    arr.forEach(function (item) {
        obj[item] === item ?  repeat.push(item) :  obj[item] = item
    })
    const len1 = arr.length - repeat.length
    len.push(len1)
    if (len1)  return harry(repeat)
}

const changeLen = function (len) {
    if (len.indexOf(5) !== -1 && len.indexOf(3) !== -1) {
        const tempLen = len.toString().replace(5, 4).replace(3, 4).split(",")
        const lenChanged = tempLen.map(function (item) {
            return parseInt(item)
        })
        return lenChanged
    }
    return len
}
const discount = [1, 0.95, 0.9, 0.8, 0.75]

let len = []
module.exports = function main(inputs) {
    let price = 0
    if (inputs.length !== 0) {
        harry(inputs)
        changeLen(len).forEach(w => {
            if (w !== 0)
                price += 8 * w * discount[w - 1]
        })
        len = []
        return price
    }
    return 0
}
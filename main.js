const Stack = function() {
  return {
    // firstName: first,
    // lastName: last,
    // age: age,
    items: [],
      add: function (firstName) {
        this.items.push(firstName)
      },
      remove: function () {
        let removed = this.items.splice(this.items.length-1, 1)[0]
        return removed
      },
      peek: function () {
        return this.items
      },

  }
}

const Queue = function() {
  return {
    items:[],
      add: function (firstName) {
        this.items.push(firstName)
      },
      remove: function () {
        let removed = this.items.splice(0, 1)[0]
        return removed
      },
      peek: function () {
        return this.items[0]
      }
  }
}

module.exports = {
  Stack,
  Queue,
}
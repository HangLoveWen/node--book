const arr=[
  {
  id:1,
  name:'zs',
  {
    id:11,
    name:'ls',
    {
      id:111,
      name:'zl'
    }
  },
  {
    id:12,
    name:'ww',
    {
      id:121,
      name:'zq'
    }
  }
}]
console.log(arr.flat(Infinity))
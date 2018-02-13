const getComponent = async (tar) => {
  const res = await tar()
  return res.default || res
}

const wrapRoutes = (ary) => {
  const res = []
  for (let i = 0; i < ary.length; i += 1) {
    const tar = ary[i]
    const { component, children } = tar
    const obj = { ...tar }
    if (typeof component === 'function') {
      // 加载模块
      getComponent(component).then((res) => {
        obj.component = res
      })
    }
    if (children && children.length) {
      // 递归加载子路由
      obj.children = wrapRoutes(children)
    }
    res.push(obj)
  }
  return res
}

const setTitle = (title) => {
  document.title = title
}

export default {
  wrapRoutes,
  setTitle,
}

import React, { useCallback, useMemo } from 'react'
import { useToast } from '@chakra-ui/react'
import './App.scss'

function App() {
  const toast = useToast()
  const icons = useMemo(() => {
    const modules = import.meta.globEager('./lib/icons/*.tsx')
    const iconArray = Object.keys(modules).map((key) => {
      const nameGroup = key.split('/')
      const iconName = nameGroup[nameGroup.length - 1].replace('.tsx', '')
      return { iconName, component: modules[key]?.default }
    })
    return iconArray
  }, [])

  const filledIcons = useMemo(() => {
    return icons.filter((it) => it.iconName.includes('filled'))
  }, [])

  const lightIcons = useMemo(() => {
    return icons.filter((it) => it.iconName.includes('light'))
  }, [])

  const otherIcons = useMemo(() => {
    return icons.filter(
      (it) => !it.iconName.includes('light') && !it.iconName.includes('filled')
    )
  }, [])

  const handleCopy = useCallback(async (iconName) => {
    const code = `<${toHump(iconName)} />`
    try {
      await navigator.clipboard.writeText(code)
      toast({
        title: code,
        description: '已复制到剪贴板',
        status: 'success',
        position: 'top',
        duration: 3000,
        isClosable: true,
      })
    } catch (error) {}
  }, [])

  return (
    // <React.Suspense fallback="">
    <div className="App">
      <div className="search-bar" />
      <div className="icon-panel">
        {filledIcons.map((item) => {
          const Component = item.component
          return (
            <div
              className="icon-box"
              key={item.iconName}
              onClick={() => handleCopy(item.iconName)}
            >
              <div className="icon-block">
                <Component width={30} height={30} />
              </div>
              <p className="icon-name">{item.iconName}</p>
            </div>
          )
        })}
      </div>
      <div className="icon-panel">
        {lightIcons.map((item) => {
          const Component = item.component
          return (
            <div
              className="icon-box"
              key={item.iconName}
              onClick={() => handleCopy(item.iconName)}
            >
              <div className="icon-block">
                <Component width={30} height={30} />
              </div>
              <p className="icon-name">{item.iconName}</p>
            </div>
          )
        })}
      </div>
      <div className="icon-panel">
        {otherIcons.map((item) => {
          const Component = item.component
          return (
            <div
              className="icon-box"
              key={item.iconName}
              onClick={() => handleCopy(item.iconName)}
            >
              <div className="icon-block">
                <Component width={30} height={30} />
              </div>
              <p className="icon-name">{item.iconName}</p>
            </div>
          )
        })}
      </div>
    </div>
    // </React.Suspense>
  )
}

export default App

// 下划线转驼峰
function toHump(name: string) {
  return name
    .split('_')
    .map((it) => {
      return it.replace(/^\w/g, (it) => {
        return it.toUpperCase()
      })
    })
    .join('')
}

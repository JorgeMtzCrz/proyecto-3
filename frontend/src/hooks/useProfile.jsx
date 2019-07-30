import { useState } from 'react'

export default () => {
  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = collapsed => {
    setCollapsed(collapsed)
  }

  return [collapsed, onCollapse]
}

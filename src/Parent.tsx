import { PrimitiveAtom } from 'jotai'
import { Child } from './Child'
import { ParentCode } from './ParentCode'

export const Parent: React.FC<{
  isValueAtom: PrimitiveAtom<boolean>
  toggleIsValueAtom: () => void
  parentText: string
  withProvider?: boolean
}> = ({ isValueAtom, toggleIsValueAtom, parentText, withProvider }) => {
  return (
    <>
      <h3 style={{ ...(withProvider && { color: 'red' }) }}>{parentText}</h3>
      <ParentCode withProvider={withProvider} />
      <br />
      <Child isValueAtom={isValueAtom} toggleIsValueAtom={toggleIsValueAtom} />
    </>
  )
}

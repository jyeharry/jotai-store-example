import { PrimitiveAtom, useAtom } from 'jotai'

export const Child: React.FC<{
  isValueAtom: PrimitiveAtom<boolean>
  toggleIsValueAtom: () => void
}> = ({ isValueAtom, toggleIsValueAtom }) => {
  const [isValue, setIsValue] = useAtom(isValueAtom)
  return (
    <div>
      <h3>Child</h3>
      <p>isValue: {String(isValue)}</p>
      <div>
        <button onClick={() => setIsValue(!isValue)}>Toggle using useAtom</button>
      </div>
      <div>
        <button onClick={toggleIsValueAtom}>Toggle using atomsStore in service.ts</button>
      </div>
    </div>
  )
}

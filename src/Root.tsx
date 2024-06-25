import { useAtom, Provider, PrimitiveAtom } from 'jotai'
import { atomsStore } from './atoms'
import { Parent } from './Parent'
import { RootCode } from './RootCode'
import styles from './root.module.css'

export const Root: React.FC<{
  withProvider?: boolean
  withStore?: boolean
  isValueAtom: PrimitiveAtom<boolean>
  toggleIsValueAtom: () => void
  rootText: string
  parentText: string
}> = ({
  withProvider,
  withStore,
  isValueAtom,
  toggleIsValueAtom,
  rootText,
  parentText,
}) => {
  const [isValue, setIsValue] = useAtom(
    isValueAtom,
    withStore ? { store: atomsStore } : undefined,
  )
  const ParentWithProvider = () => (
    <Provider store={atomsStore}>
      <Parent
        isValueAtom={isValueAtom}
        toggleIsValueAtom={toggleIsValueAtom}
        parentText={parentText}
        withProvider
      />
    </Provider>
  )

  return (
    <div className={styles.root}>
      <h3 style={{ ...(withStore && { color: 'red' }) }}>{rootText}</h3>
      <RootCode withStore={withStore} />
      <br />
      <div>isValue: {String(isValue)}</div>
      <div>
        <button onClick={() => setIsValue(!isValue)}>
          Toggle using useAtom
        </button>
      </div>
      <div>
        <button onClick={toggleIsValueAtom}>
          Toggle using atomsStore in service.ts
        </button>
      </div>
      <br />
      {withProvider ? (
        <ParentWithProvider />
      ) : (
        <Parent
          isValueAtom={isValueAtom}
          toggleIsValueAtom={toggleIsValueAtom}
          parentText={parentText}
        />
      )}
    </div>
  )
}

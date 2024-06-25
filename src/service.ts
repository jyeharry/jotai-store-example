import { atomsStore, isValue1Atom, isValue2Atom, isValue3Atom, isValue4Atom } from './atoms'
      
export const toggleIsValue1Atom = () =>
  atomsStore.set(
    isValue1Atom,
    !atomsStore.get(isValue1Atom),
  )

export const toggleIsValue2Atom = () =>
  atomsStore.set(
    isValue2Atom,
    !atomsStore.get(isValue2Atom),
  )

export const toggleIsValue3Atom = () =>
  atomsStore.set(
    isValue3Atom,
    !atomsStore.get(isValue3Atom),
  )
export const toggleIsValue4Atom = () =>
  atomsStore.set(
    isValue4Atom,
    !atomsStore.get(isValue4Atom),
  )

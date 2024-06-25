'use client'

import { Root } from '@/Root'
import {
  toggleIsValue1Atom,
  toggleIsValue2Atom,
  toggleIsValue3Atom,
  toggleIsValue4Atom,
} from '../service'
import {
  isValue1Atom,
  isValue2Atom,
  isValue3Atom,
  isValue4Atom,
} from '../atoms'

export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', rowGap: '6rem', columnGap: '2rem', flexWrap: 'wrap' }}>
      <Root
        isValueAtom={isValue1Atom}
        toggleIsValueAtom={toggleIsValue1Atom}
        rootText="Root"
        parentText="Parent"
      />
      <Root
        withProvider
        isValueAtom={isValue2Atom}
        toggleIsValueAtom={toggleIsValue2Atom}
        rootText="Root"
        parentText="Parent with provider"
      />
      <Root
        withStore
        isValueAtom={isValue3Atom}
        toggleIsValueAtom={toggleIsValue3Atom}
        rootText="Root with store"
        parentText="Parent"
      />
      <Root
        withStore
        withProvider
        isValueAtom={isValue4Atom}
        toggleIsValueAtom={toggleIsValue4Atom}
        rootText="Root with store"
        parentText="Parent with provider"
      />
    </div>
  )
}

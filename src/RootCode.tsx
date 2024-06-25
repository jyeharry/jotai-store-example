export const RootCode: React.FC<{ withStore?: boolean }> = ({
  withStore,
}) => (
  <>
    <code
      style={{
        display: 'block',
        whiteSpace: 'pre-wrap',
      }}
    >
      const [isValue, setIsValue] = useAtom(
    </code>
    <code
      style={{
        display: 'block',
        whiteSpace: 'pre-wrap',
      }}
    >
      {'  '}isValueAtom,
    </code>
    {withStore && (
      <code
        style={{
          display: 'block',
          whiteSpace: 'pre-wrap',
        }}
      >
        {'  '}&#123; store: atomsStore &#125;,
      </code>
    )}
    <code
      style={{
        display: 'block',
        whiteSpace: 'pre-wrap',
      }}
    >
      )
    </code>
  </>
)

export const ParentCode: React.FC<{ withProvider?: boolean }> = ({
  withProvider,
}) => (
  <>
    {withProvider && (
      <code
        style={{
          display: 'block',
          whiteSpace: 'pre-wrap',
        }}
      >
        &lt;Provider store=&#123;atomsStore&#125;&gt;
      </code>
    )}
    <code
      style={{
        display: 'block',
        whiteSpace: 'pre-wrap',
      }}
    >
      {'  '}&lt;Parent
    </code>
    <code
      style={{
        display: 'block',
        whiteSpace: 'pre-wrap',
      }}
    >
      {'    '}isValueAtom=&#123;isValueAtom&#125;
    </code>
    <code
      style={{
        display: 'block',
        whiteSpace: 'pre-wrap',
      }}
    >
      {'    '}toggleIsValueAtom=&#123;toggleIsValueAtom&#125;
    </code>
    <code
      style={{
        display: 'block',
        whiteSpace: 'pre-wrap',
      }}
    >
      {'    '}parentText=&#123;parentText&#125;
    </code>
    {withProvider && (
    <code
      style={{
        display: 'block',
        whiteSpace: 'pre-wrap',
      }}
    >
      {'    '}withProvider
    </code>
    )}
    <code
      style={{
        display: 'block',
        whiteSpace: 'pre-wrap',
      }}
    >
      {'  '}/&gt;
    </code>
    {withProvider && (
      <code
        style={{
          display: 'block',
          whiteSpace: 'pre-wrap',
        }}
      >
        &lt;/Provider&gt;
      </code>
    )}
  </>
)

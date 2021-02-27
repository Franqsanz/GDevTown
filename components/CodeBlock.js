import Highlight, { defaultProps } from 'prism-react-renderer';
import shadesOfPurple from 'prism-react-renderer/themes/shadesOfPurple';
import React from 'react';

export default function codeH ({ children, className }) {
  const languages = className.replace(/language-/, '');

  return (
    <Highlight {...defaultProps}
      code={children}
      language={languages}
      theme={shadesOfPurple}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{
          ...style,
          fontFamily: 'Inconsolata',
          lineHeight: 1.66,
          fontSize: '1.125rem'
          }}>
          {tokens.map((line, index) => {
            const lineProps = getLineProps({ line, key: index })

            return (
              <div key={index} {...lineProps}>
                {line.map((token, key) => (
                  <span key={key}{...getTokenProps({ token, key })} />
                ))}
              </div>
            )
          }
          )}
        </pre>
      )}
    </Highlight>
  )
}
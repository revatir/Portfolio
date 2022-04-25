export const Link = ({ href, content, children }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  )
}

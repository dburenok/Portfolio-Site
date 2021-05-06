import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div className="footer">
      Get in touch:
      <ul class="socials">
        <li><SocialIcon url="https://linkedin.com/in/dburenok" /></li>
        <li><SocialIcon url="https://github.com/dburenok" /></li>
        <li><SocialIcon url="https://facebook.com/dburenok" /></li>
        <li><SocialIcon url="mailto:dmitriyburenok@gmail.com" /></li>
      </ul>
    </div>
  )
}

export default Footer

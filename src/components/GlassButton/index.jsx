import { Btn } from './styles/index';

// https://youtu.be/YrOq7OpRV8I

const GlassButton = ({ href, children }) => (
  <Btn>
    <Btn.Link href={href}>{children}</Btn.Link>
  </Btn>
);

export default GlassButton;

import { MessageCircle } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { trackConversionEvent } from '../utils/analytics';

export default function CTAButton({
  text = 'Get Started',
  variant = 'primary',
  size = '',
  icon: Icon = MessageCircle,
  className = '',
  onClick
}) {
  const { openModal } = useModal();

  const handleClick = (e) => {
    trackConversionEvent('primary_cta_click', { text, variant });
    if (onClick) {
      onClick(e);
      return;
    }
    openModal();
  };

  return (
    <button
      className={`btn btn-${variant} ${size ? `btn-${size}` : ''} ${className}`}
      onClick={handleClick}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}
    >
      {Icon && (typeof Icon === 'string' ? <span>{Icon}</span> : <Icon size={20} strokeWidth={2} />)}
      {text}
    </button>
  );
}

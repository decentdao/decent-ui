import cx from 'classnames';

interface ButtonProps {
  onClick?: () => void;
  label?: string;
  icon?: JSX.Element;
  isSpaceBetween?: boolean;
  isLarge?: boolean;
  isIconRight?: boolean;
  isLoading?: boolean;
}
function Button({
  label,
  icon,
  className,
  isLarge,
  isSpaceBetween,
  isIconRight,
  isLoading,
  ...rest
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  /****************************
   * Text or Loading Component
   ****************************/
  function Label() {
    // @todo update button loader component
    return (
      <div className="">
        <div
          className={cx({
            'loading': isLoading,
            'placeholder': !isLoading,
          })}
        >
          * * *
        </div>
        <div
          className={cx({
            'invisible': isLoading,
            'visible': !isLoading,
          })}
        >
          {label}
        </div>
      </div>
    );
  }

  /****************************
   * Icon Components
   ****************************/
  function Icon() {
    return !!icon && !isLoading ? icon : null;
  }
  function IconLeft() {
    return !isIconRight ? <Icon /> : null;
  }
  function IconRight() {
    return isIconRight ? <Icon /> : null;
  }

  /****************************
   * Styles
   ****************************/

  const BASE_BUTTON_STYLES = '';

  return (
    <button
      className={cx(
        BASE_BUTTON_STYLES,
        className,
        {
          'large-button': isLarge,
        },
        {
          '': !isSpaceBetween,
          'justify-between': isSpaceBetween,
        }
      )}
      {...rest}
    >
      <IconLeft />
      <Label />
      <IconRight />
    </button>
  );
}

export default Button;
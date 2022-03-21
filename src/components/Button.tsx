import cx from 'classnames'

type Props = {
  size?: 'default' | 'large'
  ghost?: boolean
} & JSX.IntrinsicElements['button']

function Button({
  children,
  size = 'default',
  ghost,
  className,
  ...props
}: Props) {
  return (
    <button
      className={cx(
        'base-transition font-medium inline-flex items-center justify-center gap-2 rounded-lg leading-none',
        size === 'default'
          ? 'px-4 py-3 text-[0.9375rem]'
          : 'py-4 px-8 text-base',
        ghost
          ? 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
          : 'bg-primary text-white hover:bg-primary/90',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

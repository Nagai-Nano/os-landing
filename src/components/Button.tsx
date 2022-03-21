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
          ? 'py-2 md:py-3 px-3 md:px-4 text-[0.9375rem]'
          : 'py-3 md:py-4 px-6 md:px-8 text-base',
        ghost
          ? 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
          : 'bg-primary border-2 border-primary text-white hover:bg-primary/90',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

import { FC, HTMLProps, memo, useId } from "react";

const SvgSprite: FC<
  { src: { id: string; viewBox: string } } & Omit<HTMLProps<SVGElement>, "src">
> = ({
  src,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  children,
  ...props
}) => {
  // Remove unsupported attributes
  const {
    crossOrigin: _crossOrigin,
    ref: _ref,
    title,
    ...typedProps
  }: Partial<HTMLProps<SVGElement>> = props;

  const titleId = useId();

  return (
    <svg
      {...typedProps}
      viewBox={src.viewBox}
      role={title ? "img" : undefined}
      aria-hidden={!title ? true : undefined}
      aria-labelledby={title ? titleId : undefined}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <use xlinkHref={`#${src.id.slice(0, -"-usage".length)}`} />
    </svg>
  );
};

/**
 * Will render an SVG sprite using `<use>` component in svg.
 *
 * Provide an icon as `src`: `import icon from './icon.svg'`
 */
export default memo(SvgSprite);

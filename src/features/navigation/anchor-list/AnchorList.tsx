import { ANCHOR_DICTIONARY } from '@entities/navigation';
import { Anchor, Each } from '@shared/UI';

export interface Props extends ElementProps<'nav'> {}

export const AnchorList = (props: Props) => {
  const { ...restProps } = props;

  return (
    <nav {...restProps}>
      <ul className="flex items-center gap-4">
        <Each
          each={ANCHOR_DICTIONARY.asArray}
          render={(anchor) => (
            <li key={anchor.path}>
              <Anchor to={anchor.path}>{anchor.label}</Anchor>
            </li>
          )}
        />
      </ul>
    </nav>
  );
};

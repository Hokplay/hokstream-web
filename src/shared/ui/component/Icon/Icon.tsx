import { SVGProps } from 'react';
import * as Icons from './icons.ts';

interface IconProps extends SVGProps<SVGSVGElement> {
  name: keyof typeof Icons;
}

function Icon({ name, ...props }: IconProps) {
  const SvgIcon = Icons[name];

  return <SvgIcon {...props} />;
}

export default Icon;

export { CloseCircleFilled, CopyOutlined } from '@ant-design/icons';

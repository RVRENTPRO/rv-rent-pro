import { getMDXComponent } from 'next-contentlayer/hooks';
import type { MDXComponents as MDXComponentsType } from 'mdx/types'; 
import MDXComponents from '~/app/(site)/blog/components/MDXComponents';

function Mdx({
  code,
}: React.PropsWithChildren<{
  code: string;
}>) {
  const Component = getMDXComponent(code);

  return <Component components={MDXComponents as unknown as  MDXComponentsType} />;
}

export default Mdx;

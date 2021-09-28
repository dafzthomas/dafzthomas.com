import { ComponentMap } from 'mdx-bundler/client';
import React from 'react';

export const components: ComponentMap = {
    a: (props: any) => <a {...props} target="_blank" />,
};

# @norgate-av/react-hooks

> A collection of useful hooks for React

[![NPM](https://img.shields.io/npm/v/@norgate-av/react-hooks.svg)](https://www.npmjs.com/package/@norgate-av/react-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @norgate-av/react-hooks
```

or

```bash
yarn add @norgate-av/react-hooks
```

## Usage

```tsx
import React from "react";

import { useMyHook } from "@norgate-av/react-hooks";

export const Example = () => {
	const example = useMyHook();
	return (
        <div>
            {example}
        </div>;
    )
};
```

## License

MIT © [Norgate AV Holdings Ltd](https://github.com/norgate-av-holdings-ltd)

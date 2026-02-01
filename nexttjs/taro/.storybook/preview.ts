//global.cssを指定
import '../app/globals.css';

import type { Preview } from '@storybook/nextjs-vite';

const preview: Preview = {
    //すべてのストーリーにドキュメントを追加
    tags: ['autodocs'],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },

        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: 'todo',
        },
        //nextjsのappDirectoryを使用しますの宣言
        nextjs: {
            appDirectory: true,
        },
    },
};

export default preview;

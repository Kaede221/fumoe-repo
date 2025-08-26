import React, {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    description: ReactNode;
};

const FeatureList: FeatureItem[] = [
    {
        title: '简单上手',
        description: (
            <>
                每个组件都有完整, 详细的文档, 方便开发者快速上手.
            </>
        ),
    },
    {
        title: '体积极小',
        description: (
            <>
                每个组件相互独立, 几乎不会相互依赖, 这也让每个组件的大小极小.
            </>
        ),
    },
    {
        title: '设计美观',
        description: (
            <>
                每个组件都是精心进行涉及过的, 在微信开发者工具中都进行了数次的测试.
            </>
        ),
    },
];

function Feature({title, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

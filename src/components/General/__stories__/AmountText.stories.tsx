import React from 'react';
import { storiesOf } from '@storybook/react-native';

import withPropsCombinations from '../../../../storybook/matrix';
import { withContainer } from '../../../../storybook/decoration';

import { AmountText } from '../AmountText';

const VALUES = ['0.00000000000001', '2.2222', '99999.123456'] as const;

storiesOf('AmountText', module)
    .addDecorator(withContainer)
    .add(
        'original',
        withPropsCombinations(AmountText, {
            value: VALUES,
        }),
    )
    .add(
        'withPrefix',
        withPropsCombinations(AmountText, {
            value: VALUES,
            prefix: ['-'],
        }),
    )
    .add(
        'withCurrency',
        withPropsCombinations(AmountText, {
            value: VALUES,
            currency: ['USD'],
        }),
    )
    .add('discreet', () => <AmountText currency="USD" value="123" discreet />)
    .add(
        'immutable;',
        withPropsCombinations(AmountText, {
            value: VALUES,
            currency: ['USD'],
            immutable: [true],
        }),
    );

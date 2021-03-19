/**
 * @license
 * Copyright a-Qoot All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/a-Qoot/qoot/blob/main/LICENSE
 */

import { Component } from '../../qoot.js';
import { ItemProps } from '../Item/public.js';

interface ItemState {
  editing: boolean;
}

export class ItemComponent extends Component<ItemProps, ItemState> {}
/**
 * Copyright 2019, SumUp Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { circuit, standard } from './themes';

// Typography
// export { default as Heading } from './components/Heading';
// export { default as SubHeading } from './components/SubHeading';
// export { default as List } from './components/List';
export { default as Text } from './components/Text/Text';

// Helpers
export {
  default as ComponentsContext,
  withComponents,
  useComponents
} from './components/ComponentsContext';

// Themes
export const themes = { circuit, standard };

import type {i18n} from '@lingui/core';
import type {I18nProvider} from '@lingui/react';
import type {locales} from 'cfg/lingui';

export interface I18nBase {
  i18n: typeof i18n,
  Provider: typeof I18nProvider,
  loadLocale(locale?: Locales): Promise<void>,
  getLocale(short?: boolean): string,
}

export type Locales =  typeof locales[number];
export type Messages = Record<Locales, {
  messages: Record<string, string>
}>

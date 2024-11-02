/** @format */
'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Button } from '~/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '~/components/ui/dropdown-menu';
import { Locale, locales } from '~/i18n/config';
import { BaseStyleProps } from '~/utils/typings';
import LanguageSwitcherItem from './LanguageSwitcherItem';
import { LanguageIcon } from '@heroicons/react/24/outline';
const LanguageSwitcher: React.FC<BaseStyleProps> = ({ className, style }) => {
  const currentLocale = useLocale() as Locale;
  const t = useTranslations('Home.LanguageSwitcher');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          size={'icon'}
          className={className}
          style={style}
        >
          <LanguageIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {locales.map((label) => (
          <LanguageSwitcherItem
            selected={label === currentLocale}
            key={`LanguageSwitcherItem-${label}`}
            label={t(label)}
            value={label}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;

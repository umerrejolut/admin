import { SearchIcon } from '@/assets/svg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  //translation
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(''); // Default language is English

  const texts = {
    title: t('title'),
    searchPlaceholder: t('Search'),
    languageLabel: t('Language'),
    submitButton: t('Submit'),
    englishOption: t('English'),
    frenchOption: t('French'),
    spanishOption: t('Spanish')
  };

  function handleClick(lang: string) {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  }
  return (
    <div className='flex flex-col justify-center items-center h-full'>
      <h1>{texts.title}</h1>
      <Input icon={<SearchIcon />} className='bg-[#24282C] border-none active:border-none text-primary-foreground pl-12' placeholder={texts.searchPlaceholder} type='search' ></Input>
      <br />
      <label htmlFor="language-select">{texts.languageLabel}</label>
      <select id="language-select" onChange={(e) => handleClick(e.target.value)} value={selectedLanguage}>
        <option value="en">{texts.englishOption}</option>
        <option value="fr">{texts.frenchOption}</option>
        <option value="es">{texts.spanishOption}</option>
      </select>
      <br />
      <div className='flex items-center justify-around w-full py-2'>
        <Button size="icon" >
          <SearchIcon />
        </Button>
        <Button >
          {texts.submitButton}
        </Button>
        <Button className='w-1/3' >
          {texts.submitButton}
        </Button>
      </div>
      <div className='flex items-center justify-around w-full py-2'>
        <Button size="icon" variant={'outline'} >
          <SearchIcon />
        </Button>
        <Button variant={'outline'}>
          {texts.submitButton}
        </Button>
        <Button className='w-1/3' variant={'outline'} >
          {texts.submitButton}
        </Button>
      </div>
      <div className='flex items-center justify-around w-full py-2'>
        <Button size="icon" variant={'destructive'} >
          <SearchIcon />
        </Button>
        <Button variant={'destructive'}>
          {texts.submitButton}
        </Button>
        <Button className='w-1/3' variant={'destructive'} >
          {texts.submitButton}
        </Button>
      </div>
      <div className='flex items-center justify-around w-full py-2'>
        <Button size="icon" variant={'ghost'} >
          <SearchIcon />
        </Button>
        <Button variant={'ghost'}>
          {texts.submitButton}
        </Button>
        <Button className='w-1/3' variant={'ghost'} >
          {texts.submitButton}
        </Button>
      </div>
      <div className='flex items-center justify-around w-full py-2'>
        <Button size="icon" variant={'secondary'} >
          <SearchIcon />
        </Button>
        <Button variant={'secondary'}>
          {texts.submitButton}
        </Button>
        <Button className='w-1/3' variant={'secondary'} >
          {texts.submitButton}
        </Button>
      </div>
      <div className='flex items-center justify-around w-full py-2'>
        <Button size="icon" variant={'link'} >
          <SearchIcon />
        </Button>
        <Button variant={'link'}>
          {texts.submitButton}
        </Button>
        <Button className='w-1/3' variant={'link'} >
          {texts.submitButton}
        </Button>
      </div>
    </div>
  )
}

export default Home

import getDictionary  from './dictionaries'
 
//write interface for lang
interface PageProps {
  params: {
    lang: string
  }
}

export default async function Page({ params: { lang } } : PageProps) {
  const dict = await getDictionary(lang) // en
  return <button>{dict.products.cart}</button> // Add to Cart
}
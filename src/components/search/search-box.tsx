import docsearch from '@docsearch/js'
import { useEffect } from 'react'
export default function searchBox() {
  function poll() {
    const e = new Event('keydown') as any
    e.key = 'k'
    e.metaKey = true
    window.dispatchEvent(e)
    setTimeout(() => {
      if (!document.querySelector('.DocSearch-Modal'))
        poll()
    }, 16)
  }

  type DocSearchProps = Parameters<typeof docsearch>[0]

  function initialize(userOptions: any) {
    const options = Object.assign<{}, {}, DocSearchProps>({}, userOptions, {
      container: '#docsearch',

      navigator: {
        navigate() {
        // navigate({ itemUrl }) {
          // const { pathname: hitPathname } = new URL(
          //   window.location.origin + itemUrl,
          // )

          // router doesn't handle same-page navigation so we use the native
          // browser location API for anchor navigation

          /* if (route.path === hitPathname)
            window.location.assign(window.location.origin + itemUrl)
          else
            router.go(itemUrl) */
        },
      },
      // @ts-expect-error hook
      transformItems(items: { url: string }[]) {
        return items.map((item) => {
          return Object.assign({}, item, {
            url: getRelativePath(item.url),
          })
        })
      },
      // @ts-expect-error hook
      hitComponent({ hit, children }) {
        return {
          __v: null,
          type: 'a',
          ref: undefined,
          constructor: undefined,
          key: undefined,
          props: { href: hit.url, children },
        }
      },
    })

    docsearch(options)
  }

  function getRelativePath(absoluteUrl: string) {
    const { pathname, hash } = new URL(absoluteUrl)
    return (
      pathname.replace(
        /\.html$/,
        '',
        // site.value.cleanUrls === 'disabled' ? '.html' : '',
      ) + hash
    )
  }
  useEffect(() => {
    initialize({
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress',
    })
    setTimeout(poll, 16)
  }, [])
  return (
    <div id="docsearch" />
  )
}

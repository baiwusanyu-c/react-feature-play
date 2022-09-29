import '@docsearch/css'
import '../../assets/css/search.scss'
import { useEffect, useState } from 'react'
import SearchBox from './search-box'
export default function algoliaSearch() {
  const [loaded, setLoaded] = useState<boolean>(false)
  const [metaKey, setMetaKey] = useState<string>('\'Meta\'')
  const load = () => {
    if (!loaded)
      setLoaded(true)
  }
  const remove = () => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    window.removeEventListener('keydown', handleSearchHotKey)
  }
  const handleSearchHotKey = (e: KeyboardEvent) => {
    if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault()
      load()
      remove()
    }
  }
  useEffect(() => {
    setMetaKey(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
      ? '⌘'
      : 'Ctrl')
    window.addEventListener('keydown', handleSearchHotKey)
    return remove
  }, [])
  return (
        <div className="VPNavBarSearch">
          {loaded
            ? <SearchBox/>
            : <div id="docsearch" onClick={load}>
                <button
                    type="button"
                    className="DocSearch DocSearch-Button"
                    aria-label="Search">
                    <span className="DocSearch-Button-Container">
                      <svg
                          className="DocSearch-Search-Icon"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20">
                        <path
                            d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                            stroke="currentColor"
                            fill="none"
                            fillRule="evenodd"
                            strokeLinecap="round"
                            strokeLinejoin="round" />
                      </svg>
                      <span className="DocSearch-Button-Placeholder">Search</span>
                    </span>
                    <span className="DocSearch-Button-Keys">
                      <kbd className="DocSearch-Button-Key" data-value={metaKey}></kbd>
                      <kbd className="DocSearch-Button-Key">K</kbd>
                    </span>
                </button>
            </div> }
        </div>
  )
}

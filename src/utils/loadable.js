import React from 'react'
import ReactLoadable from 'react-loadable'
import NProgress from 'components/nprogress'

const loadable = (loader) => {
  return ReactLoadable({
    loader,
    loading: () => <NProgress />
  })
}

export default loadable

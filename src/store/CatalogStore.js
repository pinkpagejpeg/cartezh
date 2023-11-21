import { makeAutoObservable } from 'mobx'
import { catalog } from '../mockData/catalog'

class CatalogStore {
  catalog = [];

  constructor() {
    makeAutoObservable(this)
  }

  fetchCatalogByCategory (category) {
    const allCatalog = catalog

    this.catalog = allCatalog.filter(item => item.category === category)
  }
}

export default new CatalogStore()
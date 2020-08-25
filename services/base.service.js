'use strict'

class BaseService {
  constructor(Entity) {
    this._entity = Entity
  }

  async findAll() {
    const entities = await this._entity.findAll()
    return entities
  }

  async find(id) {
    const entity = await this._entity.find(id)
    return entity
  }

  async create(entity) {
    const createdEntity = await this._entity.create(entity)
    return createdEntity
  }

  async update(id, entity) {
    const updatedEntity = await this._entity.update(id, entity)
    return updatedEntity
  }

  async delete(id) {
    const deletedEntity = await this._entity.delete(id)
    return deletedEntity
  }
}

module.exports = BaseService

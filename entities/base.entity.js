'use strict'

const mapper = require('automapper-js')

class BaseEntity {
  constructor(EntityRepository, entityToMap) {
    this._entityRepository = EntityRepository
    this.entityToMap = entityToMap
  }

  async findAll() {
    const entities = await this._entityRepository.findAll()
    return entities.map(entity => mapper(this.entityToMap, entity.toJSON()))
  }

  async find(id) {
    const entity = await this._entityRepository.find(id)
    if (!entity) return null
    return mapper(this.entityToMap, entity.toJSON())
  }

  async create(entity) {
    entity = mapper(this.entityToMap, entity)
    const createdEntity = await this._entityRepository.create(entity)
    return mapper(this.entityToMap, createdEntity.toJSON())
  }

  async update(id, entity) {
    entity.id = id
    entity = mapper(this.entityToMap, entity)
    const updatedEntity = await this._entityRepository.update(id, entity)
    return mapper(this.entityToMap, updatedEntity)
  }

  async delete(id) {
    return await this._entityRepository.delete(id)
  }
}

module.exports = BaseEntity
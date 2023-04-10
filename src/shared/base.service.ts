import { Model, Document } from 'mongoose';

export class BaseService<T extends Document> {
  constructor(private readonly model: Model<T>) { }

  async create(data: Partial<T>): Promise<T> {
    const createdModel = new this.model(data);
    return createdModel.save();
  }

  async findAll(): Promise<T[]> {
    return this.model.find().exec();
  }

  async findById(id: string): Promise<T> {
    return this.model.findById(id).exec();
  }

  async update(id: string, data: Partial<T>): Promise<T> {
    await this.model.updateOne({ _id: id }, data).exec();
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.model.deleteOne({ _id: id }).exec();
  }
}
